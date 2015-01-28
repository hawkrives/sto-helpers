// test/is.test.js
import isTrue from '../src/isTrue'

describe('isTrue', () => {
	it('checks if a thing is true', () => {
		expect(isTrue(true)).to.be.true
	})

	it('does not return for a merely truthy value', () => {
		expect(isTrue(1)).to.be.false
	})
})
