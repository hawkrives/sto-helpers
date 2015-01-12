# CHANGELOG

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
