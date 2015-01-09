// test/expandYear.test.js
import expandYear from '../lib/expandYear'

describe('expandYear', () => {
	it('expands a year to year-(year+1)', () => {
		expect(expandYear(2014)).to.equal('2014—2015')
		expect(expandYear(2010)).to.equal('2010—2011')
		expect(expandYear(2013)).to.equal('2013—2014')
		expect(expandYear(2011)).to.equal('2011—2012')
		expect(expandYear(2031)).to.equal('2031—2032')
		expect(expandYear(2013)).to.equal('2013—2014')
	})
})
