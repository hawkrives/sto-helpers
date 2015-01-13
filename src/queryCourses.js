import _ from 'lodash'
import buildQueryFromString from './buildQueryFromString'
import checkCourseAgainstQuery from './checkCourseAgainstQuery'

/**
 * Queries the database for courses.
 *
 * @param {String} queryString
 * @param {Array<Course>} courses
 * @returns {Array<Course>}
 */
function queryCourses(queryString, courses) {
	let query = buildQueryFromString(queryString)

	// console.log('query:', query)

	let results = _(courses)
		.filter(checkCourseAgainstQuery(query))
		.map(_.cloneDeep)
		.value()

	return results
}

export default queryCourses
