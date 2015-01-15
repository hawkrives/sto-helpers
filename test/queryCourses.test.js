// test/queryCourses.test.js
import queryCourses from '../src/queryCourses'

describe('queryCourses', () => {
	it('queries a list of courses', () => {
		let query = 'dept: AMCON year: 2013'
		let courses = [
			{depts: ['AMCON'], year: 2013}
		]
		expect(queryCourses(query, courses)).to.eql(courses)
	})

	it('properly handles a list of five years', () => {
		let query = 'year: $OR year: 2010 year: 2011 year: 2012 year: 2013 year: 2014'
		let courses = [
			{depts: ['AMCON'], year: 2013},
			{depts: ['ASIAN'], year: 2012},
		]
		expect(queryCourses(query, courses)).to.eql(courses)
	})
})
