import {departmentNameToAbbr} from 'sto-course-related-data'
import {map, has} from 'lodash'

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
