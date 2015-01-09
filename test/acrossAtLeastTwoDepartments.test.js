// test/acrossAtLeastTwoDepartments.test.js
import acrossAtLeastTwoDepartments from '../src/acrossAtLeastTwoDepartments'

describe('acrossAtLeastTwoDepartments', () => {
	it('checks that a set of courses spans at least two departments', () => {
		let courses = [
			{depts: ['ASIAN']},
			{depts: ['AMCON']},
		]

		expect(acrossAtLeastTwoDepartments(courses)).to.be.true
	})

	it('fails if the courses don\'t cover two departments', () => {
		let courses = [
			{depts: ['ASIAN']},
			{depts: ['ASIAN']},
		]

		expect(acrossAtLeastTwoDepartments(courses)).to.be.false
	})

	it('allows one course to span multiple departments', () => {
		let courses = [{depts: ['ASIAN', 'REL']}]

		expect(acrossAtLeastTwoDepartments(courses)).to.be.true
	})
})
