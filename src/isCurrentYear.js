import {curry, parseInt} from 'lodash'

/**
 * Checks if a schedule is in a certain year.
 *
 * @param {Number} year
 * @param {Schedule} schedule
 * @returns {Boolean}
 */
let isCurrentYear = curry((year=0, schedule) => {
	year = parseInt(year)
	return (schedule.year === year)
})


export default isCurrentYear
