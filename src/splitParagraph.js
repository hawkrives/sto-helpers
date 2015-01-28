import {chain} from 'lodash'

function splitParagraph(string='') {
	return chain(string.toLowerCase())
		.deburr() // removes accents and such from ascii chars
		.words() // returns just the words, stripping extra spaces and symbols
		.value()
}

export default splitParagraph
