// copied from the npm package 'combinations-generator'

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
			yield keys.map(function (c) {
				return array[c]
			})
		}
		else {
			index--
		}
	}
}

export default combinations
