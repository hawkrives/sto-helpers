// tests/isCurrentYear.test.js
import {isCurrentYear} from '../src/isCurrent'

describe('isCurrentYear', () => {
	it('checks if a schedule is in the given year', () => {
		isCurrentYear(2012, {year: 2012, semester: 2}).should.be.true
	})
})
