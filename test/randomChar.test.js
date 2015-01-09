// test/randomChar.test.js
import randomChar from '../lib/randomChar'

describe('randomChar', () => {
	it('finds a random integer between the parameters', () => {
		expect(randomChar()).to.match(/[a-z0-9]/)
		expect(randomChar()).to.match(/[a-z0-9]/)
	})
})
