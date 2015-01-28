import {curry, filter} from 'lodash'
import coursesAtLevel from './coursesAtLevel'

/**
 * Looks for courses at a given level.
 *
 * @param {Number} level
 * @param {Array} courses
 * @returns {Array} - the courses that passed the check.
 */
let onlyCoursesAtLevel = curry((level, courses) => {
	return filter(courses, coursesAtLevel(level))
})

export default onlyCoursesAtLevel
