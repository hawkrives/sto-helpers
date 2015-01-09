// test/add.test.js
import add from '../src/add'

describe('add', () => {
	it('handles positive numbers', () => {
		expect(add(1, 2)).to.equal(3)
	})

	it('supports negative numbers', () => {
		expect(add(-1, -2)).to.equal(-3)
	})
})
