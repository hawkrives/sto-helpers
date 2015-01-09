let semesters = {
	1: 'Fall',
	2: 'Interim',
	3: 'Spring',
	4: 'Early Summer',
	5: 'Late Summer',
}

/**
 * Takes a semester number and returns the associated semester string.
 *
 * @param {Number} semester
 * @returns {String}
 */
function semesterName(semester) {
	return semesters[semester] || 'Unknown (' + semester + ')'
}

export default semesterName
