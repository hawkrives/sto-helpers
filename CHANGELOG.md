# CHANGELOG

## 4.0.0
- Updated 6to5 to v3.0.0
- Various internal optimizations
- **Removed:** `getRandomInt`
- **Removed:** `isAsianCon` has moved back into `sto-areas`
- **Changed:** `combinations` now uses generators by default. The old behavior is available under `basicCombinations`

## 3.1.1
- Stop pinning exact versions in package.json

## 3.1.0
- Pin exact versions in package.json
- Add an `index.js` and a `main` key to allow requiring of files without knowledge of the structure
- Removed `deep-clean` script
- **Deprecated:** `getRandomInt`. Just use `_.random`.
- **Speed:** Used `_.takeWhile` to allow early bailing of checkCourseAgainstQuery as soon as the first check fails.

## 3.0.7
- Fixed a linting error in the imports of `buildQueryFromString`

## 3.0.6
- Fixed bug in `buildQueryFromString`
	- When it checked to see if it needed to insert a boolean operator, it assumed that all values were strings. This, however, happens after the processing of the values, so the will almost certainly not be strings.

## 3.0.5
- Add `under-ten` result to `findWordForProgress`

## 3.0.4
- Add `seperator` parameter to `expandYear`

## 3.0.3
- Fix the `short` option of `expandYear`

## 3.0.2
- Add `short` option to `expandYear` to allow it to return things like '2012-13' instead of '2012-2013'

## 3.0.1
- Update expectations and fix a few edge cases in `buildQueryFromString`

## 3.0.0
- Update `6to5`
- Update `sto-course-related-data`
- **Change:** `buildDept` now normalizes departments
- Extract `buildDeptNumRegex` into its own file
- Add flag to `splitDeptNum` to return the section
- **Added:** `quacksLikeDeptNum`
- Use `quacksLikeDeptNum` to allow `queryCourses` to search for deptnums without the `deptnum:` prefix
- **Change:** Edit `deptNumRegex` to require that course numbers be three numbers long
- **Added:** `cartesianProduct`
- **Added:** `combinations(list, k)` - finds `k` combinations of an array

## 2.2.2
- Fix importing of the wrong function from lodash

## 2.2.1
- Pull checkcheckCourseAgainstQuery out of queryCourses.js
- s/log/console.log/

## 2.2.0
- Switched parameter order on `queryCourses`
- Now completed initial testing of more helpers
	- [x] checkCoursesFor
	- [x] concatAndMerge
	- [x] evenIndex
	- [x] findResults
	- [x] findWordForProgress
	- [x] hasFOL
	- [x] hasGened
	- [x] isAsianCon
	- [x] notEmptyString
	- [x] oddIndex
	- [x] parseAreaId
	- [x] queryCourses
	- [x] zipToObjectWithArray
- This leaves only two helpers without tests.
	- [ ] checkThatCoursesSpanDepartmentsAndGeneds
	- [ ] onlyQuarterCreditCoursesCanBePassFail
- The first one is about to be replaced, I think, and the second always returns true.

## 2.1.0
- Required sto-related-course-data to validate departments and such
- Added parseAreaId
- Added buildQueryFromString
- Added queryCourses
- Added zipToObjectWithArrays
- Added oddIndex, evenIndex, and notEmptyString
- ~~Finished adding tests to helpers~~ (see [2.1.1](#2.1.1))
	- ~~(which ones?)~~


## 2.0.6
- Added a `postpublish` script to automatically clean up from `prepublish`


## 2.0.1
- Switched to running `6to5` as a `pre-publish` script.


## 2.0.0
- Stopped building and committing the es5'ed code to the repo
