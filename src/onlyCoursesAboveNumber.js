import {curry, filter} from 'lodash'
import coursesAboveNumber from './coursesAboveNumber'

/**
 * Looks for courses above a given number.
 *
 * @param {Number} number
 * @param {Array} courses
 * @returns {Array} - the courses that passed the check.
 */
let onlyCoursesAboveNumber = curry((number, courses) => {
	return filter(courses, coursesAboveNumber(number))
})

export default coursesAboveNumber
