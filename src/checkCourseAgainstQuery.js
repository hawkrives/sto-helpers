import {curry, map, chain, indexOf, has, contains, isArray, some, all, compact, tail} from 'lodash'

/**
 * Checks if a course passes a query check.
 *
 * @param {Object} query - the query object that comes out of buildQueryFromString
 * @param {Course} course - the course to check
 * @returns {Boolean}
 */
let checkCourseAgainstQuery = curry((query, course) => {
	let matches = map(query, (values, key) => {
		if (!has(course, key)) {
			return false
		}

		let substring = false

		// values is either:
		// - a 1-long array
		// - an $AND, $OR, $NOT, or $XOR query
		// - one of the above, but substring

		let hasBool = indexOf(values[0], '$') === 0
		let OR  = values[0] === '$OR'
		let NOR = values[0] === '$NOR'
		let AND = values[0] === '$AND'
		let NOT = values[0] === '$NOT'
		let XOR = values[0] === '$XOR'

		if (hasBool) {
			// remove the first value from the array
			values = tail(values, 1)
		}

		if (contains(['title', 'name', 'description', 'notes', 'profs', 'times', 'places'], key)) {
			substring = true
		}

		let internalMatches = map(values, (val) => {
			// dept, gereqs, etc.
			if (isArray(course[key]) && !substring) {
				return contains(course[key], val)
			}
			else if (isArray(course[key]) && substring) {
				return chain(course[key])
					.map(item => contains(item.toLowerCase(), val.toLowerCase()))
					.any()
			}
			else if (substring) {
				return contains(course[key].toLowerCase(), val.toLowerCase())
			}
			return course[key] === val
		})

		if (!hasBool)
			return all(internalMatches)

		let result = false

		if (OR)   result = any(internalMatches)
		if (NOR)  result = !any(internalMatches)
		if (AND)  result = all(internalMatches)
		if (NOT)  result = !all(internalMatches)
		if (XOR)  result = compact(internalMatches).length === 1

		return result
	})

	return all(matches)
})

export default checkCourseAgainstQuery
