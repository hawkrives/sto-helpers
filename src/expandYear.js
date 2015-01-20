/**
 * Takes a year and expands it.
 * eg. {in: 2012, out: 2012-13}
 *
 * @param {Number} year
 * @returns {String}
 */
function expandYear(year, short=false) {
	let thisYear = String(year)
	let nextYear = String(parseInt(year, 10) + 1)
	if (short)
		nextYear = nextYear.substr(0, 2)
	return `${thisYear}—${(nextYear)}`
}

export default expandYear
