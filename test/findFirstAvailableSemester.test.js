// test/findFirstAvailableSemester.test.js
import findFirstAvailableSemester from '../src/findFirstAvailableSemester'

describe('findFirstAvailableSemester', () => {
	let schedules = [
		{'id': 14, 'year': 2012, 'semester': 1},
		{'id': 1, 'year': 2012, 'semester': 1},
		{'id': 2, 'year': 2012, 'semester': 2},
		{'id': 3, 'year': 2012, 'semester': 3},

		{'id': 4, 'year': 2013, 'semester': 1},
		{'id': 5, 'year': 2013, 'semester': 2},
		{'id': 6, 'year': 2013, 'semester': 5},

		{'id': 7, 'year': 2014, 'semester': 1},
		{'id': 8, 'year': 2014, 'semester': 2},
		{'id': 9, 'year': 2014, 'semester': 2},

		{'id': 12, 'year': 2015, 'semester': 2},
		{'id': 13, 'year': 2015, 'semester': 3},
		{'id': 11, 'year': 2015, 'semester': 4},
	]

	it('takes a list of schedules and finds the first open semester', () => {
		expect(findFirstAvailableSemester(schedules, 2012)).to.equal(4)
		expect(findFirstAvailableSemester(schedules, 2013)).to.equal(3)
		expect(findFirstAvailableSemester(schedules, 2014)).to.equal(3)
		expect(findFirstAvailableSemester(schedules, 2015)).to.equal(1)
		expect(findFirstAvailableSemester(schedules, 2016)).to.equal(1)
	})
})
