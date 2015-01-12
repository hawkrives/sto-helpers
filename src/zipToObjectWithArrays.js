import {reduce, zip, has} from 'lodash'

let zipToObjectWithArrays = (keys, vals) => {
	let arr = zip(keys, vals)
	return reduce(arr, (obj, propKey) => {
		if (has(obj, propKey[0]))
			obj[propKey[0]].push(propKey[1])
		else
			obj[propKey[0]] = [propKey[1]]

		return obj
	}, {})
}

export default zipToObjectWithArrays
