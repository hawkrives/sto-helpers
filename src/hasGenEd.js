import {curry, contains} from 'lodash'
import hasFOL from './hasFOL'

/**
 * Checks if a course has a gened.
 *
 * @param {String} gened
 * @param {Course} course
 * @returns {Boolean}
 */
let hasGenEd = curry((gened, course) => {
	if (gened.startsWith('FOL'))
		return hasFOL(course)
	return contains(course.gereqs, gened)
})

export default hasGenEd
