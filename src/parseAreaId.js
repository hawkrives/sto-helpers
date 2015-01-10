let areaTypes = {
	m: 'major',
	c: 'concentration',
	a: 'not-found',
	d: 'degree',
	e: 'emphasis',
}

/**
 * Parses an area ID for as much info as it contains.
 *
 * @param {String} areaId
 * @returns {Object}
 */
function parseAreaId(areaId) {
	let [type, title] = id.split('-')
	type = areaTypes[type]
	return {type, title}
}

export default parseAreaId
