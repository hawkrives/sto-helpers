// test/getRandomInt.test.js
import getRandomInt from '../lib/getRandomInt'

describe('getRandomInt', () => {
	it('finds a random integer between the parameters', () => {
		expect(getRandomInt(1, 3)).to.be.within(1, 3)
		expect(getRandomInt(0, 3)).to.be.within(0, 3)
		expect(getRandomInt(1, 5)).to.be.within(1, 5)
		expect(getRandomInt(1, 3)).to.be.within(1, 3)
	})
})
