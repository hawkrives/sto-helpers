import compact from 'lodash/array/compact'
import pluck from 'lodash/collection/pluck'
import reduce from 'lodash/collection/reduce'
import add from './add'


/**
 * Counts credits in a list of courses.
 * @param {Array} courses
 * @returns {Number} - the sum of the credits.
 */
function countCredits(courses) {
	let credits = pluck(compact(courses), 'credits')
	return reduce(credits, add, 0)
}

export default countCredits
