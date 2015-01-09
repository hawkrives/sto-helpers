import {curry, contains} from 'lodash'

/**
 * Checks if a course has a gened.
 *
 * @param {String} gened
 * @param {Course} course
 * @returns {Boolean}
 */
let hasGenEd = curry((gened, course) =>
	contains(course.gereqs, gened))

export default hasGenEd
