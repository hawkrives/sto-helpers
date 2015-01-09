import semesterName from './semesterName'
import expandYear from './expandYear'

/**
 * Takes a term and makes it pretty.
 * eg. {in: 20121, out: Fall 2012-13}
 *
 * @param {Number} term - a term identifier.
 * @returns {String}
 */
function toPrettyTerm(term) {
	term = String(term)
	let year = term.substr(0, 4)
	let sem = parseInt(term.substr(4, 1), 10)

	return `${semesterName(sem)} ${expandYear(year)}`
}

export default toPrettyTerm
