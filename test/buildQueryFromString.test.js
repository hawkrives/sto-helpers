// tests/buildQueryFromString.test.js
import buildQueryFromString from '../src/buildQueryFromString'

describe('buildQueryFromString', () => {
	it('builds a query string with multiple keys into a query object', () => {
		let query = 'dept: Computer Science  dept: Asian Studies  name: Parallel  level: 300  year: $OR year:2013 year: 2014'
		let expectedResult = {
			depts: ['$AND', 'CSCI', 'ASIAN'],
			title: ['Parallel'],
			level: [300],
			year: ['$OR', 2013, 2014],
		}

		expect(buildQueryFromString(query)).to.eql(expectedResult)
	})

	it('builds a query string with variable-case keys into a query object', () => {
		let query = 'dept: ASIAN  Dept: Religion  title: "Japan*"  LEVEL: 200  year: 2014  semester: $OR  semester: 3  semester: 1'
		let expectedResult = {
			depts: ['$AND', 'ASIAN', 'REL'],
			title: ['"Japan*"'],
			level: [200],
			year: [2014],
			sem: ['$OR', 3, 1],
		}

		expect(buildQueryFromString(query)).to.eql(expectedResult)
	})

	it('builds a query string even with somewhat unconventional input', () => {
		let query = 'department: American Conversations  name: Independence  year: 2014  time: Tuesdays after 12'
		let expectedResult = {
			depts: ['AMCON'],
			title: ['Independence'],
			year: [2014],
			times: ['tuesdays after 12'],
		}

		expect(buildQueryFromString(query)).to.eql(expectedResult)
	})

	it('builds a query string while deduplicating synonyms of keys', () => {
		let query = 'ges: $AND  geneds: history of western culture gened: HBS  semester: Spring  year: 2014'
		let expectedResult = {
			gereqs: ['$AND', 'HWC', 'HBS'],
			sem: [3],
			year: [2014],
		}

		expect(buildQueryFromString(query)).to.eql(expectedResult)
	})

	it('builds a query string even with no keys', () => {
		let query = 'History of Asia'
		let expectedResult = {
			title: ['History of Asia'],
		}

		expect(buildQueryFromString(query)).to.eql(expectedResult)
	})

	it('can also search for deptnums even with no keys', () => {
		let query = 'ASIAN 220'
		let expectedResult = {
			deptnum: ['ASIAN 220'],
		}

		expect(buildQueryFromString(query)).to.eql(expectedResult)
	})

	it('can also search for deptnums with sections even with no keys', () => {
		let query = 'AS/RE 220A'
		let expectedResult = {
			deptnum: ['ASIAN/REL 220'],
		}

		expect(buildQueryFromString(query)).to.eql(expectedResult)
	})
})
