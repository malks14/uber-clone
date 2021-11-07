"use strict";
(() => {
var exports = {};
exports.id = 603;
exports.ids = [603,286,864];
exports.modules = {

/***/ 9505:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var tailwind_styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4191);
/* harmony import */ var tailwind_styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(tailwind_styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);




const Search = ()=>{
    const { 0: pickup , 1: setPickup  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
    const { 0: dropoff , 1: setDropoff  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
    const pickupHandler = (event)=>{
        event.preventDefault();
        setPickup(event.target.value);
        console.log(pickup);
    };
    const dropoffHandler = (event)=>{
        event.preventDefault();
        setDropoff(event.target.value);
        console.log(dropoff);
    };
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Wrapper, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ButtonContainer, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_3__["default"], {
                    href: "/",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(BackButton, {
                        src: "https://img.icons8.com/ios-filled/50/000000/left.png"
                    })
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(InputContainer, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(FromToIcons, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Circle, {
                                src: "https://img.icons8.com/ios-filled/50/9CA3AF/filled-circle.png"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Line, {
                                src: "https://img.icons8.com/ios/50/9CA3AF/vertical-line.png"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Square, {
                                src: "https://img.icons8.com/windows/50/000000/square-full.png"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(InputBoxes, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Input, {
                                placeholder: "Enter pickup location",
                                value: pickup,
                                onChange: pickupHandler
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Input, {
                                placeholder: "Where to?",
                                value: dropoff,
                                onChange: dropoffHandler
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(PlusIcon, {
                        src: "https://img.icons8.com/ios/50/000000/plus-math.png"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(SavedPlaces, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StarIcon, {
                        src: "https://img.icons8.com/ios-filled/50/ffffff/star--v1.png"
                    }),
                    "Saved Places"
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_3__["default"], {
                href: {
                    pathname: "/confirm",
                    query: {
                        pickup: pickup,
                        dropoff: dropoff
                    }
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ConfirmContainer, {
                    children: "Confirm Locations"
                })
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Search);
const Wrapper = (tailwind_styled_components__WEBPACK_IMPORTED_MODULE_2___default().div)`
bg-gray-200 h-screen
`;
const ButtonContainer = (tailwind_styled_components__WEBPACK_IMPORTED_MODULE_2___default().div)`
bg-white px-4
`;
const BackButton = (tailwind_styled_components__WEBPACK_IMPORTED_MODULE_2___default().img)`
h-12 cursor-pointer
`;
const FromToIcons = (tailwind_styled_components__WEBPACK_IMPORTED_MODULE_2___default().div)`
w-10 flex flex-col mr-2 mb-2 items-center
`;
const InputContainer = (tailwind_styled_components__WEBPACK_IMPORTED_MODULE_2___default().div)`
bg-white flex items-center px-4
`;
const Circle = (tailwind_styled_components__WEBPACK_IMPORTED_MODULE_2___default().img)`
h-2.5 
`;
const Line = (tailwind_styled_components__WEBPACK_IMPORTED_MODULE_2___default().img)`
h-10
`;
const Square = (tailwind_styled_components__WEBPACK_IMPORTED_MODULE_2___default().img)`
h-3
`;
const InputBoxes = (tailwind_styled_components__WEBPACK_IMPORTED_MODULE_2___default().div)`
flex flex-col flex-1
`;
const Input = (tailwind_styled_components__WEBPACK_IMPORTED_MODULE_2___default().input)`
h-10 bg-gray-200 my-2 rounded-2 p-2 outline-none border-none 
`;
const PlusIcon = (tailwind_styled_components__WEBPACK_IMPORTED_MODULE_2___default().img)`
w-10 h-10 bg-gray-200 rounded-full ml-3 
`;
const SavedPlaces = (tailwind_styled_components__WEBPACK_IMPORTED_MODULE_2___default().div)`
flex items-center bg-white px-4 py-2 mt-2
`;
const StarIcon = (tailwind_styled_components__WEBPACK_IMPORTED_MODULE_2___default().img)`
bg-gray-400 w-10 h-10 p-2 rounded-full mr-2
`;
const ConfirmContainer = (tailwind_styled_components__WEBPACK_IMPORTED_MODULE_2___default().div)`
bg-black text-white text-center mt-2 mx-4 px-4 py-3 text-2xl cursor-pointer
`;


/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 4191:
/***/ ((module) => {

module.exports = require("tailwind-styled-components");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [730,664], () => (__webpack_exec__(9505)));
module.exports = __webpack_exports__;

})();