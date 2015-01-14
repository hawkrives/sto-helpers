import deptNumRegex from './deptNumRegex'

/**
 * Checks if a string looks like a deptnum.
 *
 * @param {String} deptNumString
 * @returns {Boolean}
 */
function quacksLikeDeptNum(deptNumString) {
	return deptNumRegex.test(deptNumString)
}

export default quacksLikeDeptNum
