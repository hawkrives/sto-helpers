import deptNumRegex from './deptNumRegex'

/**
 * Splits a deptnum string (like "AS/RE 230A") into its components,
 * like {depts: ['AS', 'RE'], num: 230, sect: 'A'}.
 *
 * @param {String} deptNumString
 * @returns {Object}
 */
function splitDeptNum(deptNumString) {
	// "AS/RE 230A" -> ["AS/RE 230A", "AS/RE", "AS", "RE", "230", "A"]
	// -> {depts: ['AS', 'RE'], num: 230}
	let matches = deptNumRegex.exec(deptNumString)

	return {
		depts: matches[1].indexOf('/') !== -1 ? [matches[2], matches[3]] : [matches[1]],
		num: parseInt(matches[4], 10),
	}
}

export default splitDeptNum
