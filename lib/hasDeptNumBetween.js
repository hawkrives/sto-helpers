import {any, all, curry, isUndefined} from 'lodash'
import hasDepartment from './hasDepartment'

let hasDeptNumBetween = curry((args, course) => {
	let {dept, start, end} = args

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
