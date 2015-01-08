// test/expandYear.test.js
import expandYear from '../src/expandYear'

describe('expandYear', () => {
	it('expands a year to year-(year+1)', () => {
		expandYear(2014).should.equal('2014—2015')
		expandYear(2010).should.equal('2010—2011')
		expandYear(2013).should.equal('2013—2014')
		expandYear(2011).should.equal('2011—2012')
		expandYear(2031).should.equal('2031—2032')
		expandYear(2013).should.equal('2013—2014')
	})
})
