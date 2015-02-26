import any from 'lodash/collection/any'
import startsWith from 'lodash/string/startsWith'

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
