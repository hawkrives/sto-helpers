// tests/hasDepartment.test.js
import hasDepartment from '../src/hasDepartment'

describe('hasDepartment', () => {
	it('checks if a course is in a department', () => {
		let courses = [
			{depts: ['ASIAN', 'REL'], num: 230},
			{depts: ['BIO', 'CHEM'], num: 125},
			{depts: ['CHEM', 'BIO'], num: 125},
			{depts: ['ASIAN'], num: 175},
		]

		hasDepartment('ASIAN', courses[0]).should.be.true
		hasDepartment('BIO', courses[1]).should.be.true
		hasDepartment('CHEM', courses[2]).should.be.true
		hasDepartment('REL', courses[3]).should.be.false
	})
})
