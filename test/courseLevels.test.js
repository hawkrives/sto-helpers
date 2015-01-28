// test/courseLevels.test.js
import coursesAtLevel from '../src/coursesAtLevel'
import coursesAtOrAboveLevel from '../src/coursesAtOrAboveLevel'
import onlyCoursesAtOrAboveLevel from '../src/onlyCoursesAtOrAboveLevel'
import onlyCoursesAtLevel from '../src/onlyCoursesAtLevel'

describe('courseLevels', () => {
	let courses = []

	beforeEach(() => {
		courses = [
			{level: 300},
			{level: 200},
			{level: 100},
			{level: 400},
			{level: 900},
		]
	})

	it('checks if a course is at or above a certain level', () => {
		expect(coursesAtOrAboveLevel(200, courses[0])).to.be.true
		expect(coursesAtOrAboveLevel(200, courses[1])).to.be.true
		expect(coursesAtOrAboveLevel(200, courses[2])).to.be.false
	})

	it('filters a list of courses to only those with a level at or above "x"', () => {
		expect(onlyCoursesAtOrAboveLevel(200, courses)).to.have.length(4)
	})

	it('checks if a course is at a certain level', () => {
		expect(coursesAtLevel(200, courses[0])).to.be.false
		expect(coursesAtLevel(200, courses[1])).to.be.true
		expect(coursesAtLevel(200, courses[2])).to.be.false
	})

	it('filters a list of courses to only those with a level at "x"', () => {
		expect(onlyCoursesAtLevel(200, courses)).to.have.length(1)
	})
})
