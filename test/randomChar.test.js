// tests/randomChar.test.js
import randomChar from '../src/randomChar'

describe('randomChar', () => {
	it('finds a random integer between the parameters', () => {
		randomChar().should.match(/[a-z0-9]/)
		randomChar().should.match(/[a-z0-9]/)
	})
})
