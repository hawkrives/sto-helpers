import parseInt from 'lodash/string/parseInt';

/**
 * Takes a year and expands it.
 * eg. {in: 2012, out: 2012-13}
 *
 * @param {Number} year
 * @returns {String}
 */
function expandYear(year, short=false, seperator='—') {
	let thisYear = String(year)
	let nextYear = String(parseInt(year) + 1)
	if (short)
		nextYear = nextYear.substr(-2, 2)
	return `${thisYear}${seperator}${(nextYear)}`
}

export default expandYear
