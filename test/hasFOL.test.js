// test/hasFOL.test.js
import hasFOL from '../src/hasFOL'

describe('hasFOL', () => {
	it('checks if a course has an FOL-* gened', () => {
		let course = {gereqs: ['FOL-J']}

		expect(hasFOL(course)).to.be.true
	})

	it('only checks for FOL-* gereqs', () => {
		let course = {gereqs: ['HWC']}
		let otherCourse = {gereqs: ['ALS-A']}

		expect(hasFOL(course)).to.be.false
		expect(hasFOL(otherCourse)).to.be.false
	})
})
