import {any} from 'lodash'

/**
 * Checks if a course has an FOL gened.
 *
 * @param {String} gened
 * @param {Course} course
 * @returns {Boolean}
 */
let hasFOL = (course) =>
	any(course.gereqs, (req) => req.substr(0, 3) === 'FOL')

export default hasFOL
