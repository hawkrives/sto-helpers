// test/isAsianCon.test.js
import isAsianCon from '../src/isAsianCon'

describe('isAsianCon', () => {
	it('checks if a course is in the asiancon sequence', () => {
		let ascourse = {depts: ['ASIAN'], num: 210}
		let notascourse = {depts: ['ASIAN'], num: 200}
		let alsonotascourse = {depts: ['AMCON'], num: 210}

		expect(isAsianCon(ascourse)).to.be.true
		expect(isAsianCon(notascourse)).to.be.false
		expect(isAsianCon(alsonotascourse)).to.be.false
	})
})
