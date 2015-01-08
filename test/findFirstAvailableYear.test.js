// tests/findFirstAvailableYear.test.js
import findFirstAvailableYear from '../src/findFirstAvailableYear'

describe('findFirstAvailableYear', () => {
	it('takes a list of schedules and finds the first open year', () => {
		let schedules = [
			{'id': 3, 'year': 2012},
			{'id': 6, 'year': 2013},
			{'id': 1, 'year': 2015},
		]

		findFirstAvailableYear(schedules).should.equal(2014)
		findFirstAvailableYear(schedules).should.not.equal(2016)


		let altScheds = [
			{'id': 3, 'year': 2014},
			{'id': 6, 'year': 2013},
			{'id': 1, 'year': 2015},
		]
		let altMatriculation = 2012

		findFirstAvailableYear(altScheds, altMatriculation).should.equal(2012)
	})
})
