// test/partialTitle.test.js
import {
	partialTitle,
	partialName,
	partialNameOrTitle} from '../src/partialTitle'

describe('partialTitle', () => {
	let courses = []

	beforeEach(() => {
		courses = [
			{title: 'AsianCon3: Interpreting Asia'},
			{title: 'Introduction to Modern Dance'},
			{title: 'Hello world!'},
			{title: 'Fubar.'},
			{title: 'Modern Japanese Literature'},
		]
		courses = courses.map((c) => {
			c.name = c.title
			return c
		})
	})

	it('checks if a course has a matching string in the title', () => {
		expect(partialTitle('Asia', courses[0])).to.be.true
		expect(partialTitle('Dance', courses[1])).to.be.true
		expect(partialTitle('Japanese', courses[4])).to.be.true
	})

	it('checks if a course has a matching string in the name', () => {
		expect(partialName('Asia', courses[0])).to.be.true
		expect(partialName('Dance', courses[1])).to.be.true
		expect(partialName('Japanese', courses[4])).to.be.true
	})

	it('checks if a course has a matching string in either the title or the name', () => {
		expect(partialNameOrTitle('Asia', courses[0])).to.be.true
		expect(partialNameOrTitle('Dance', courses[1])).to.be.true
		expect(partialNameOrTitle('Japanese', courses[4])).to.be.true
		expect(partialNameOrTitle('China', courses[4])).to.be.false
	})
})
