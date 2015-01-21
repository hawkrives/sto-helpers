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

	it('returns an empty object when given nothing but whitespace', () => {
		expect(buildQueryFromString(' ')).to.eql({})
		expect(buildQueryFromString('	')).to.eql({})
		expect(buildQueryFromString('\t')).to.eql({})
		expect(buildQueryFromString('        ')).to.eql({})
		expect(buildQueryFromString('')).to.eql({})
	})

	it('handles multiple colons in a querystring', () => {
		let query = 'CSCI:helloworld:test:foo'
		let expectedResult = {csci: ['helloworld'], test: ['foo']}

		expect(buildQueryFromString(query)).to.eql(expectedResult)
	})

	it('handles a single key and no value', () => {
		let query = 'ENGL 200:'
		let expectedResult = {deptnum: ['ENGL 200']}

		expect(buildQueryFromString(query)).to.eql(expectedResult)
	})

	it('handles a otherwise-valid string that ends with a colon', () => {
		let query = 'deptnum: ENGL 200:'
		let expectedResult = {deptnum: ['ENGL 200']}

		expect(buildQueryFromString(query)).to.eql(expectedResult)
	})

	it('handles a string that ends with a colon', () => {
		let query = 'deptnum: ENGL 200 valid:'
		let expectedResult = {deptnum: ['ENGL 200 VALID']}

		expect(buildQueryFromString(query)).to.eql(expectedResult)
	})

	it('sorts a five-year token string correctly', () => {
		let query = 'year: $OR year: 2010 year: 2011 year: 2012 year: 2013 year: 2014'
		let expectedResult = {year: ['$OR', 2010, 2011, 2012, 2013, 2014]}

		expect(buildQueryFromString(query)).to.eql(expectedResult)
	})

	it('infers $AND from a list of multiple things', () => {
		let query = 'year: 2010 year: 2011 year: 2012 year: 2013 year: 2014'
		let expectedResult = {year: ['$AND', 2010, 2011, 2012, 2013, 2014]}

		expect(buildQueryFromString(query)).to.eql(expectedResult)
	})
})
