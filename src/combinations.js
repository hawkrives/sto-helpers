// copied from the npm package 'combinations-generator'
import at from 'lodash/collection/at'

let combinations = function* (array=[], count=0) {
	let keys = []
	let arrayLength = array.length
	let index = 0
	for (let i = 0; i < count; i++) {
		keys.push(-1)
	}
	while (index >= 0) {
		if (keys[index] < arrayLength - (count - index)) {
			for (let key = keys[index] - index + 1; index < count; index++) {
				keys[index] = key + index
			}
			yield at(array, keys)
		}
		else {
			index--
		}
	}
}

export default combinations
