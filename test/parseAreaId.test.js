// test/parseAreaId.test.js
import parseAreaId from '../src/parseAreaId'

describe('parseAreaId', () => {
	it('parses area ids', () => {
		expect(parseAreaId('m-math')).to.eql({type: 'major', title: 'math'})
	})
})
