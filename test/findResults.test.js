// test/findResults.test.js
import findResults from '../src/findResults'

describe('findResults', () => {
	it('returns an array of the results', () => {
		let result = {
			result: true,
			details: {
				result: false
			},
		}

		expect(findResults(result)).to.eql([true, false])
	})

	it('does not wander into the `matches` key', () => {
		let result = {
			result: true,
			details: {
				result: false,
				matches: [true, false],
			},
		}

		expect(findResults(result)).to.eql([true, false])
	})
})
