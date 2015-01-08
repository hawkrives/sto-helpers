// tests/toPrettyTerm.test.js
import toPrettyTerm from '../src/toPrettyTerm'

describe('toPrettyTerm', () => {
	it('converts a term id to a year and semester', () => {
		toPrettyTerm(20141).should.equal('Fall 2014—2015')
		toPrettyTerm(20103).should.equal('Spring 2010—2011')
		toPrettyTerm(20135).should.equal('Late Summer 2013—2014')
		toPrettyTerm(20111).should.equal('Fall 2011—2012')
		toPrettyTerm(20316).should.equal('Unknown (6) 2031—2032')
		toPrettyTerm(20134).should.equal('Early Summer 2013—2014')
	})
})
