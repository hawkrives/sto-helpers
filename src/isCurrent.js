import {curry, parseInt} from 'lodash'


/**
 * Checks if a schedule is in a certain year and semester.
 *
 * @param {Number} year
 * @param {Number} semester
 * @param {Schedule} schedule
 * @returns {Boolean}
 */
let isCurrentSemester = curry((year=0, semester=0, schedule) => {
	year = parseInt(year)
	semester = parseInt(semester)

	return (schedule.year === year) && (schedule.semester === semester)
})


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


export {isCurrentYear, isCurrentSemester}
