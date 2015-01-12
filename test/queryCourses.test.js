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
})
