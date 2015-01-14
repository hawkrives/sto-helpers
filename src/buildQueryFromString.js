import _ from 'lodash'

import quacksLikeDeptNum from './quacksLikeDeptNum'
import splitDeptNum from './splitDeptNum'
import buildDeptNum from './buildDeptNum'

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
	'departments': 'depts',
	'department': 'depts',
	'dept': 'depts',
	'semester': 'sem',
	'number': 'num',
	'name': 'title',
	'ge': 'gereqs',
	'gereq': 'gereqs',
	'ges': 'gereqs',
	'gened': 'gereqs',
	'geneds': 'gereqs',
	'prof': 'profs',
	'instructor': 'profs',
	'instructors': 'profs',
	'inst': 'profs',
	'time': 'times',
	'day': 'times',
	'days': 'times',
	'location': 'places',
	'locations': 'places',
	'place': 'places',
}

function buildQueryFromString(queryString) {
	let rex = /(\b\w*?\b):/g

	// The {index} object is there to emulate the one property I expect from a RegExp.
	// If the regex fails, we grab the string through the end and build the object from what we assume to be the title.
	let rexTested = rex.exec(queryString) || {index: queryString.length}
	let stringThing = queryString.substr(0, rexTested.index)
	queryString = queryString.substring(rexTested.index)

	// Split apart the string into an array
	let matches = queryString.split(rex)

	// Remove extra whitespace and remove empty strings
	let cleaned = _(matches)
		.map((m) => m.trim())
		.filter(notEmptyString)
		.value()


	// Grab the keys and values from the lists
	let keys = _.filter(cleaned, evenIndex)
	let values = _.filter(cleaned, oddIndex)

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
	keys = _.map(keys, (key) => {
		key = key.toLowerCase()
		if (!key.startsWith('_'))
			key = keywordMappings[key] || key
		return key
	})

	// Group the [keys, vals] into an object, with arrays for each value
	let zipped = zipToObjectWithArrays(keys, values)

	// Perform initial cleaning of the values, dependent on the keys
	let grouped = _.mapValues(zipped, (vals, key) => {
		let organized = _.map(vals, (val) => {
			if (val.startsWith('$'))
				return val.toUpperCase()

			if (key === 'depts') {
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

			else if (key === 'sem') {
				val = val.toLowerCase()
				val = semesters[val] || parseInt(val, 10)
			}

			else if (key === 'profs') {
				val = val.toUpperCase()
			}

			else if (key === 'times' || key === 'places') {
				val = val.toLowerCase()
			}

			else if (_.contains(['year', 'term', 'level', 'num'], key)) {
				val = parseInt(val, 10)
			}

			return val
		})

		if (organized.length > 1 && !organized[0].startsWith('$')) {
			organized.unshift('$AND')
		}

		return organized
	})

	return grouped
}

export default buildQueryFromString
