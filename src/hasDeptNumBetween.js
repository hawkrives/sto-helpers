import {any, all, curry, isUndefined} from 'lodash'
import hasDepartment from './hasDepartment'

let hasDeptNumBetween = curry(({dept, start, end}={}, course) => {
	if (any([dept, start, end], isUndefined)) {
		return false
	}

	return all([
		hasDepartment(dept, course),
		course.num >= start,
		course.num <= end,
	])
})

export default hasDeptNumBetween
