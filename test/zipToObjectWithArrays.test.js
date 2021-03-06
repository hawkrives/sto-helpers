// test/zipToObjectWithArrays.test.js
import zipToObjectWithArrays from '../src/zipToObjectWithArrays'

describe('zipToObjectWithArrays', () => {
	it('parses area ids', () => {
		let keys = [4, 3, 2, 1]
		let vals = [1, 2, 3, 4]
		let result = {4: [1], 3: [2], 2: [3], 1: [4]}
		expect(zipToObjectWithArrays(keys, vals)).to.eql(result)
	})
})
