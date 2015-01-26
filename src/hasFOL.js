import {any, startsWith} from 'lodash'

/**
 * Checks if a course has an FOL gened.
 *
 * @param {String} gened
 * @param {Course} course
 * @returns {Boolean}
 */
let hasFOL = (course) =>
	any(course.gereqs, (req) => startsWith(req, 'FOL'))

export default hasFOL
