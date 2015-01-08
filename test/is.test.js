// tests/is-test.js
import {isTrue} from '../src/is'

describe('isTrue', () => {
	it('checks if a thing is true', () => {
		isTrue(1).should.be.false
		isTrue(true).should.be.true
	})
})
