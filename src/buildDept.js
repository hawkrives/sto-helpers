import {departmentNameToAbbr} from 'sto-course-related-data'
import map from 'lodash/collection/map'
import has from 'lodash/object/has'

/**
 * Builds a department string from a course.
 *
 *    AS/RE => ASIAN/REL
 *    ASIAN/REL => ASIAN/REL
 *    ASIAN/RELIGION => ASIAN/REL
 *
 * @param {Course} course
 * @returns {String}
 */
function buildDept(course) {
	let departments = course.depts

	departments = map(departments, (dept) => {
		dept = dept.toLowerCase()
		return departmentNameToAbbr[dept] || dept.toUpperCase()
	})

	return departments.join('/')
}

export default buildDept
