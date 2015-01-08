// tests/semesterName.test.js
import semesterName from '../src/semesterName'

describe('semesterName', () => {
	it('converts a semester number to a semester name', () => {
		semesterName(0).should.equal('Unknown (0)')
		semesterName(1).should.equal('Fall')
		semesterName(2).should.equal('Interim')
		semesterName(3).should.equal('Spring')
		semesterName(4).should.equal('Early Summer')
		semesterName(5).should.equal('Late Summer')
	})
})
