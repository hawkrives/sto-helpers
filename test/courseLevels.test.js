// test/courseLevels.test.js
import courseLevels from '../src/courseLevels'

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
		let coursesAtOrAboveLevel = courseLevels.coursesAtOrAboveLevel

		expect(coursesAtOrAboveLevel(200, courses[0])).to.be.true
		expect(coursesAtOrAboveLevel(200, courses[1])).to.be.true
		expect(coursesAtOrAboveLevel(200, courses[2])).to.be.false
	})

	it('filters a list of courses to only those with a level at or above "x"', () => {
		let onlyCoursesAtOrAboveLevel = courseLevels.onlyCoursesAtOrAboveLevel

		expect(onlyCoursesAtOrAboveLevel(200, courses)).to.have.length(4)
	})

	it('checks if a course is at a certain level', () => {
		let coursesAtLevel = courseLevels.coursesAtLevel

		expect(coursesAtLevel(200, courses[0])).to.be.false
		expect(coursesAtLevel(200, courses[1])).to.be.true
		expect(coursesAtLevel(200, courses[2])).to.be.false
	})

	it('filters a list of courses to only those with a level at "x"', () => {
		let onlyCoursesAtLevel = courseLevels.onlyCoursesAtLevel

		expect(onlyCoursesAtLevel(200, courses)).to.have.length(1)
	})
})
