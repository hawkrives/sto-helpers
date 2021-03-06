import deptNumRegex from './deptNumRegex'

/**
 * Splits a deptnum string (like "AS/RE 230A") into its components,
 * like {depts: ['AS', 'RE'], num: 230, sect: 'A'}.
 *
 * @param {String} deptNumString
 * @param {Boolean} includeSection
 * @returns {Object}
 */
function splitDeptNum(deptNumString, includeSection=false) {
	// "AS/RE 230A" -> ["AS/RE 230A", "AS/RE", "AS", "RE", "230", "A"]
	// -> {depts: ['AS', 'RE'], num: 230}
	let matches = deptNumRegex.exec(deptNumString)

	let deptNum = {
		depts: matches[1].indexOf('/') !== -1 ? [matches[2], matches[3]] : [matches[1]],
		num: parseInt(matches[4], 10),
	}

	if (includeSection && matches.length >= 6 && matches[5])
		deptNum.sect = matches[5]

	return deptNum
}

export default splitDeptNum
