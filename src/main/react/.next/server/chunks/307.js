"use strict";
exports.id = 307;
exports.ids = [307];
exports.modules = {

/***/ 1307:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Education)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


class EducationObj {
    constructor(nameOfInstitution, nameOfCourse, startDate, endDate, gradesObtained, location){
        this.nameOfInstitution = nameOfInstitution;
        this.nameOfCourse = nameOfCourse;
        this.startDate = startDate;
        this.endDate = endDate;
        this.gradesObtained = gradesObtained;
        this.location = location ? location : null;
    }
}
// const listOfEducationObj = [
//     new EducationObj("UOB", "BSc Computer Science with Digital Technology Partnership – PwC", "2021", "2025", "First Class Honors"),
//     new EducationObj("UOC", "BSc Computer Science", "2021", "2025", "First Class Honors"),
//     new EducationObj("Herschel Grammar School", "A Levels", "2019", "2021", "Business-A*, Mathematics-A* and Physics-A")
// ]
function Education() {
    const [listOfEducationObj, setListOfEducationObj] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [currentObj, setCurrentObj] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const [counter, setCounter] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(0);
    const education = [
        {
            nameOfInstitution: "UOB",
            nameOfCourse: "BSc Computer Science with Digital Technology Partnership – PwC",
            startDate: "2021",
            endDate: "2025",
            gradesObtained: "First Class Honors",
            location: null
        },
        {
            nameOfInstitution: "UOB",
            nameOfCourse: "BSc Computer Science",
            startDate: "2021",
            endDate: "2025",
            gradesObtained: "First Class Honors",
            location: null
        },
        {
            nameOfInstitution: "Beechwood School",
            nameOfCourse: "BSc Computer Science",
            startDate: "2021",
            endDate: "2025",
            gradesObtained: "Business-A*, Mathematics-A* and Physics-A",
            location: null
        }
    ];
    // fetch("http://localhost:8080/api/jobs").then(x=> console.log(x.json()));
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        // fetchFunction("/api/education").then(
        //     listOfObj => {
        //         setListOfEducationObj((prevState) => {
        //                 return listOfObj.map((obj: EducationObj) => {
        //                         return new EducationObj(
        //                             obj.nameOfInstitution, obj.nameOfCourse, obj.startDate, obj.endDate, obj.gradeObtained
        //                         )
        //                     }
        //                 )
        //             }
        //         )
        //         setCurrentObj(listOfObj[0])
        //         setCounter(1);
        //     }
        setListOfEducationObj((prevState)=>{
            return education.map((obj)=>{
                return new EducationObj(obj.nameOfInstitution, obj.nameOfCourse, obj.startDate, obj.endDate, obj.gradesObtained);
            });
        });
        setCurrentObj(education[0]);
        setCounter(1);
    }, []);
    const switchEducationObj = ()=>{
        setCurrentObj((prevCurrentObj)=>listOfEducationObj[counter]);
        setCounter((oldCounter)=>(oldCounter + 1) % listOfEducationObj.length);
    };
    const renderObj = currentObj ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "rounded-lg bg-pink-200/50 px-6 py-12 sm:px-12 sm:py-12 sm:m-8",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                children: currentObj.nameOfCourse
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                children: [
                    currentObj.nameOfInstitution,
                    ",\xa0",
                    currentObj.startDate,
                    "-",
                    currentObj.endDate
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                children: [
                    "Grades: ",
                    currentObj.gradesObtained
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                className: "sm:mt-6",
                onClick: switchEducationObj,
                children: "Next"
            })
        ]
    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
        children: "No education available"
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "text-center bg-white h-96 sm:min-h-full sm:mb-32",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                className: "text-3xl sm:text-5xl font-semibold tracking-tight mb-16",
                children: "Education"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "flex flex-row sm:px-10 justify-center",
                children: renderObj
            })
        ]
    });
}


/***/ })

};
;