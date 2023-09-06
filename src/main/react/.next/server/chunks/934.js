"use strict";
exports.id = 934;
exports.ids = [934];
exports.modules = {

/***/ 1934:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Footer)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_icons_material_GitHub__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9254);
/* harmony import */ var _mui_icons_material_GitHub__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_GitHub__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_icons_material_LinkedIn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5939);
/* harmony import */ var _mui_icons_material_LinkedIn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_LinkedIn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_icons_material_Email__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9226);
/* harmony import */ var _mui_icons_material_Email__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Email__WEBPACK_IMPORTED_MODULE_4__);





function Footer() {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "bg-white",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                className: "text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight",
                children: "Checkout These →"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex flex-col sm:flex-row sm:py-6 sm:max-w-md",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(FooterBtn, {
                        buttonName: "Github",
                        href: "https://github.com/charlesde-wind/",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_GitHub__WEBPACK_IMPORTED_MODULE_2___default()), {
                            fontSize: "large"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(FooterBtn, {
                        buttonName: "Linkedin",
                        href: "https://www.linkedin.com/in/charles-amankwaah-de-wind-a9baa41a3/",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_LinkedIn__WEBPACK_IMPORTED_MODULE_3___default()), {
                            fontSize: "large"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(FooterBtn, {
                        buttonName: "Email me",
                        href: "mailto:charlesdewind09@gmail.com",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_Email__WEBPACK_IMPORTED_MODULE_4___default()), {
                            fontSize: "large"
                        })
                    })
                ]
            })
        ]
    });
}
function FooterBtn(props) {
    const [hovering, setHovering] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    function onMouseOverHandler(event) {
        setHovering(true);
    }
    function onMouseLeaveHandler(event) {
        setHovering(false);
    }
    function onClickHandler() {}
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
        className: `basis-1/3 ${hovering ? "text-pink-200" : ""}`,
        onMouseOver: onMouseOverHandler,
        onMouseLeave: onMouseLeaveHandler,
        href: props.href,
        target: "_blank",
        rel: "noopener noreferrer",
        children: [
            props.buttonName,
            props.children
        ]
    });
}


/***/ })

};
;