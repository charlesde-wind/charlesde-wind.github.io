"use strict";
exports.id = 677;
exports.ids = [677];
exports.modules = {

/***/ 2677:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AboutMe)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_scroll_parallax__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7446);
/* harmony import */ var react_scroll_parallax__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_scroll_parallax__WEBPACK_IMPORTED_MODULE_3__);




function AboutMe() {
    // let name :string = "Charles De-Wind";
    // let bio :string  = "A software engineer with a passion for developing innovative programs that expedite the efficiency and effectiveness of organizational success. Well-versed in technology and writing code to create systems that are reliable and user-friendly. Skilled leader who has the proven ability to motivate, educate, and manage a team of professionals to build software programs and effectively track changes.";
    const [myObj, setMyObj] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({
        "name": "",
        "bio": ""
    });
    const aboutme = {
        bio: "A software engineer with a passion for developing innovative programs that expedite the efficiency and effectiveness of organizational success. Well-versed in technology and writing code to create systems that are reliable and user-friendly. Skilled leader who has the proven ability to motivate, educate, and manage a team of professionals to build software programs and effectively track changes.",
        name: "Charles De-Wind"
    };
    // fetch("http://localhost:8080/api/jobs").then(x=> console.log(x.json()));
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        //  fetchFunction("/api/about-me").then(
        //     z=> {
        //         setMyObj((prevState)=>({name:z[0].name, bio:z[0].bio}))
        //     }
        // );
        setMyObj((prevState)=>({
                name: aboutme.name,
                bio: aboutme.bio
            }));
    }, [
        aboutme.name,
        aboutme.bio
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "bg-white min-h-screen",
        id: "about-me",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "px-6 pt-6 sm:px-12 md:pt-20 md:px-10",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex-col md:flex-row flex jusify-end bg-pink-200/50 max-h-full rounded-2xl sm:p-12 sm:gap-12 hover:bg-pink-200/25 hover:shadow-lg",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "sm:basis-1/2 lg:basis-2/3 p-10 ",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "mb-4 lg:mb-0 sm:mb-2 sm:mt-4 lg:mt-8 text-4xl font-bold tracking-tight text-gray-900 sm:text-2xl lg:text-6xl",
                                children: myObj.name
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                className: "mt-8 sm:mt-8 lg:mt-20 text-base tracking-tight sm:text-base lg:text-2xl",
                                children: myObj.bio
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_scroll_parallax__WEBPACK_IMPORTED_MODULE_3__.Parallax, {
                        speed: 30,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "basis-1/2 lg:basis-1/3 justify-self-end",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "rounded-full w-6/12 overflow-hidden sm:pr-0 sm:w-6/12 md:h-5/6 md:w-5/6 sm:mt-0 mx-auto md:mt-20 lg:mt-14 ",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                                    className: "w-80 object-cover md:h-80 md:w-80  ",
                                    src: "/images/IMG_2056.jpeg",
                                    alt: "Picture of the author",
                                    width: 500,
                                    height: 500
                                })
                            })
                        })
                    })
                ]
            })
        })
    });
}


/***/ })

};
;