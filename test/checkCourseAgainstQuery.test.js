// test/checkCourseAgainstQuery.test.js
import checkCourseAgainstQuery from '../src/checkCourseAgainstQuery'

describe('checkCourseAgainstQuery', () => {
	it('compares a course to a query object', () => {
		let query = {depts: ['AMCON'], year: [2013]}
		let course = {depts: ['AMCON'], year: 2013}
		expect(checkCourseAgainstQuery(query, course)).to.be.true
	})

	it('properly handles a list of five years', () => {
		let query = {year: ['$OR', 2010, 2011, 2012, 2013, 2014]}
		let course = {depts: ['ASIAN'], year: 2012}
		expect(checkCourseAgainstQuery(query, course)).to.be.true
	})

	it('handles complicated queries', () => {
		let query = {
			depts: ['$AND', 'ASIAN', 'REL'],
			title: ['Japan'],
			level: [200],
			year: [2014],
			sem: ['$OR', 3, 1],
		}
		let course = {
			depts: ['ASIAN', 'REL'],
			year: 2014,
			sem: 1,
			level: 200,
			title: 'Japan',
		}
		expect(checkCourseAgainstQuery(query, course)).to.be.true
	})

	it('handles complicated queries', () => {
		let query = {
			depts: ['$AND', 'ASIAN', 'REL'],
			title: ['Japan'],
			level: [200],
			year: [2014],
			sem: ['$OR', 3, 1],
		}
		let course = {
			depts: ['ASIAN'],
		}
		expect(checkCourseAgainstQuery(query, course)).to.be.false
	})
})