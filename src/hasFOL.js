import {any} from 'lodash'

/**
 * Checks if a course has an FOL gened.
 *
 * @param {String} gened
 * @param {Course} course
 * @returns {Boolean}
 */
let hasFOL = (course) =>
	any(course.gereqs, (req) => req.startsWith('FOL'))

export default hasFOL
