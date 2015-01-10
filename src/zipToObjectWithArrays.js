import _ from 'lodash'

let zipToObjectWithArrays = (keys, vals) => {
	let arr = _.zip(keys, vals)
	return _(arr).reduce((obj, propKey) => {
		if (_.has(obj, propKey[0]))
			obj[propKey[0]].push(propKey[1])
		else
			obj[propKey[0]] = [propKey[1]]

		return obj
	}, {})
}

export default zipToObjectWithArrays
