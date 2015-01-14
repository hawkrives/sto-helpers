// test/cartesianProduct.test.js
import cartesianProductOf from '../src/cartesianProduct'

describe('cartesianProduct', () => {
	it('finds the cartesian product of a set of arrays', () => {
		var result = cartesianProductOf([1, 2], [3, 4], ['a', 'b'])

		var expected = [
			[1, 3, 'a'],
			[1, 3, 'b'],
			[1, 4, 'a'],
			[1, 4, 'b'],
			[2, 3, 'a'],
			[2, 3, 'b'],
			[2, 4, 'a'],
			[2, 4, 'b'],
		]

		expect(result).to.eql(expected)
	})
})
