// test/countCredits.test.js
import countCredits from '../src/countCredits'

describe('countCredits', () => {
	it('counts the number of credits in a list of courses', () => {
		let courses = [
			{credits: 1},
			{credits: 0.25},
			{credits: 0.5},
			{credits: 0.75},
			{credits: 1},
		]

		expect(countCredits(courses)).to.equal(3.5)
	})
})
