// test/notEmptyString.test.js
import notEmptyString from '../src/notEmptyString'

describe('notEmptyString', () => {
	it('checks if a string is not empty', () => {
		expect(notEmptyString('a')).to.be.true
		expect(notEmptyString('')).to.be.false
	})
})
