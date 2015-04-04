# CHANGELOG

## 4.2.11
- Updated to Babel 5.0

## 4.2.10
- Switched JSCS for ESLint
- Fixed some things that it pointed out
- Finally added a basic README to make npm shut up
- **Fixed:** Exported the correct function from `onlyCoursesAboveNumber`

## 4.2.{6,7,8,9}
- Fix little bits of the course field renaming from sto-courses@4.0.0

## 4.2.5
- Not much; updated deps

## 4.2.4
- Fix some bugs
- Only import the bits of lodash that are actually used
	- Should help reduce the size of the generated bundles of any code that depends on sto-helpers

## 4.2.3
- **Fixed:** `buildQueryFromString`: Added `groupid`, `clbid`, and `crsid` to the list of keys to be turned into numbers
- **Fixed:** `buildQueryFromString`: Turn `credits` into a float via parseFloat
- Updated `sto-related-course-data`

## 4.2.1
- Updated dependencies
- Added "teacher{s}" and "professor{s}" as aliases for "profs" in the keyword mappings in `buildQueryFromString`

## 4.2.0
- **Fixed:** `buildQueryFromString` now searches the `profs_words` array, if you ask it to with `{profs_words: true}`
	- otherwise, it doesn't touch the query

## 4.1.1
- **Fixed:** `buildQueryFromString` now properly title-cases professors
- **Fixed:** `buildQueryFromString` now properly lower-cases times and locations

## 4.1.0
- `buildQueryFromString` now returns a `words` array, if you opt-in via `buildQueryFromString(query, {words: true})
- **Added:** the `splitParagraph` helper

## 4.0.1
- Required 6to5-runtime in order to be self-contained

## 4.0.0
- Updated 6to5 to v3.0.0
- Various internal optimizations
- **Removed:** `getRandomInt`
- **Changed:** `queryCourses` no longer accepts a query string; it now expects a query object, like the one from `buildQueryFromString`
- **Rearranged:** `isTrue` moved into its own file. It can now also be properly required from the root package
- **Rearranged:** The various course level helpers have moved into their own files. They can now also be properly required from the root package
- **Rearranged:** The two functions under `isCurrent` have moved into their own files. They can now also be properly required from the root package
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
