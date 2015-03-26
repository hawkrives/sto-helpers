import isArray from 'lodash/lang/isArray'
import contains from 'lodash/collection/contains'
import filter from 'lodash/collection/filter'
import flatten from 'lodash/array/flatten'
import map from 'lodash/collection/map'
import mapValues from 'lodash/object/mapValues'
import parseInt from 'lodash/string/parseInt'
import partition from 'lodash/collection/partition'
import pairs from 'lodash/object/pairs'
import startsWith from 'lodash/string/startsWith'
import trim from 'lodash/string/trim'
import unzip from 'lodash/array/unzip'

import quacksLikeDeptNum from './quacksLikeDeptNum'
import splitDeptNum from './splitDeptNum'
import buildDeptNum from './buildDeptNum'

import splitParagraph from './splitParagraph'
import evenIndex from './evenIndex'
import oddIndex from './oddIndex'
import notEmptyString from './notEmptyString'
import zipToObjectWithArrays from './zipToObjectWithArrays'

import {
	departmentNameToAbbr as departmentMapping,
	gereqTitleToAbbr as gereqMapping} from 'sto-course-related-data'

let semesters = {
	'fall': 1,
	'interim': 2,
	'j-term': 2,
	'jterm': 2,
	'j': 2,
	'spring': 3,
	'summer 1': 4,
	'summer1': 4,
	'early': 4,
	'early summer': 4,
	'summer session 1': 4,
	'summer session 2': 5,
	'late': 5,
	'late summer': 5,
	'summer2': 5,
	'summer 2': 5,
	'summers': ['$OR', 4, 5],
}

let keywordMappings = {
	'day': 'times',
	'days': 'times',
	'department': 'depts',
	'departments': 'depts',
	'dept': 'depts',
	'ge': 'gereqs',
	'gened': 'gereqs',
	'geneds': 'gereqs',
	'gereq': 'gereqs',
	'ges': 'gereqs',
	'inst': 'instructors',
	'instructor': 'instructors',
	'location': 'places',
	'locations': 'places',
	'number': 'num',
	'place': 'places',
	'prof': 'instructors',
	'profs': 'instructors',
	'professor': 'instructors',
	'professors': 'instructors',
	'sem': 'semester',
	'teacher': 'instructors',
	'teachers': 'instructors',
	'time': 'times',
}


function organizeValues([key, values]=[], {words=false, profWords=false}={}) {
	let organizedValues = map(values, (val) => {
		if (startsWith(val, '$')) {
			return val.toUpperCase()
		}

		else if (key === 'depts') {
			val = val.toLowerCase()
			val = departmentMapping[val] || val.toUpperCase()
		}

		else if (key === 'gereqs') {
			val = val.toLowerCase()
			val = gereqMapping[val] || val.toUpperCase()
		}

		else if (key === 'deptnum') {
			val = val.toUpperCase()
		}

		else if (key === 'semester') {
			val = val.toLowerCase()
			val = semesters[val] || parseInt(val)
		}

		else if (key === 'instructors') {
			if (profWords) {
				val = splitParagraph(val)
				key = 'profWords'
			}
		}

		else if (key === 'times' || key === 'places') {
			val = val.toUpperCase()
		}

		else if (key === 'pf') {
			val = (val === 'true') ? true : false
		}

		else if (key === 'credits') {
			val = parseFloat(val)
		}

		else if (contains(['year', 'term', 'level', 'num', 'groupid', 'clbid', 'crsid'], key)) {
			val = parseInt(val)
		}

		else if (contains(['title', 'name', 'notes', 'description', 'words'], key)) {
			if (words || key === 'words') {
				val = splitParagraph(val)
				key = 'words'
			}
			else {
				val = trim(val)
			}
		}

		return val
	})

	if (organizedValues.length && isArray(organizedValues[0])) {
		organizedValues = flatten(organizedValues)
	}

	return [key, organizedValues]
}


function buildQueryFromString(queryString='', opts={}) {
	queryString = trim(queryString)
	if (queryString.endsWith(':'))
		queryString = queryString.substring(0, queryString.length - 1)

	let rex = /(\b\w*?\b):/g

	// The {index} object is there to emulate the one property I
	// expect from a RegExp.
	// If the regex fails, we grab the string through the end
	// and build the object from what we assume to be the title.
	let rexTested = rex.exec(queryString) || {index: queryString.length}
	let stringThing = queryString.substr(0, rexTested.index)
	queryString = queryString.substring(rexTested.index)

	// Split apart the string into an array
	let matches = queryString.split(rex)

	// Remove extra whitespace and remove empty strings
	let cleaned = filter(map(matches, trim), notEmptyString)

	// Grab the keys and values from the lists
	let [keys, values] = partition(cleaned, evenIndex)

	if (stringThing && quacksLikeDeptNum(stringThing)) {
		let {depts, num} = splitDeptNum(stringThing)
		let deptnum = buildDeptNum({depts, num})
		keys.push('deptnum')
		values.push(deptnum)
	}
	else if (stringThing) {
		keys.push('title')
		values.push(stringThing)
	}

	// Process the keys, to clean them up somewhat
	keys = map(keys, (key) => {
		key = key.toLowerCase()
		if (!startsWith(key, '_'))
			key = keywordMappings[key] || key
		return key
	})

	// Group the [keys, vals] into an object, with arrays for each value
	let zipped = zipToObjectWithArrays(keys, values)

	// Perform initial cleaning of the values, dependent on the keys
	let paired = unzip(map(pairs(zipped), kvpairs => organizeValues(kvpairs, opts)))

	let organized = zipToObjectWithArrays(...paired) // spread the [k, v] pairs into the arguments properly

	let finalized = mapValues(organized, (val) => {
		// flatten the results list
		val = flatten(val)

		// if it's a multi-value thing and doesn't include a boolean yet, default to $AND
		if (val.length > 1 && !startsWith(val[0], '$')) {
			val.unshift('$AND')
		}

		return val
	})

	return finalized
}

export default buildQueryFromString
