// test/buildDept.test.js
import buildDept from '../src/buildDept'

describe('buildDept', () => {
	it('builds a department string from a single-dept course', () => {
		let ASIAN = {depts: ['ASIAN']}

		expect(buildDept(ASIAN)).to.equal('ASIAN')
	})

	it('builds a department string from a multi-department course', () => {
		let ASRE = {depts: ['ASIAN', 'REL']}

		expect(buildDept(ASRE)).to.equal('ASIAN/REL')
	})

	it('maintains the order of the departments array', () => {
		let BICH = {depts: ['BIO', 'CHEM']}
		let CHBI = {depts: ['CHEM', 'BIO']}

		expect(buildDept(BICH)).to.equal('BIO/CHEM')
		expect(buildDept(CHBI)).to.equal('CHEM/BIO')
	})
})
