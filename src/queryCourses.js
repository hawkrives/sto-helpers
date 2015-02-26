import filter from 'lodash/collection/filter'
import checkCourseAgainstQuery from './checkCourseAgainstQuery'

/**
 * Queries the database for courses.
 *
 * @param {Object} queryObj
 * @param {Array<Course>} courses
 * @returns {Array<Course>}
 */
function queryCourses(queryObj, courses) {
	let results = filter(courses, checkCourseAgainstQuery(queryObj))

	return results
}

export default queryCourses
