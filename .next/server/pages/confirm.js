"use strict";
(() => {
var exports = {};
exports.id = 161;
exports.ids = [161,286,864];
exports.modules = {

/***/ 2349:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var tailwind_styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4191);
/* harmony import */ var tailwind_styled_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(tailwind_styled_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Map__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3525);
/* harmony import */ var _components_RideSelector__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1822);







const Confirm = ()=>{
    const { 0: pickupCoordinates , 1: setPickupCoordinates  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([
        0,
        0
    ]);
    const { 0: dropoffCoordinates , 1: setDropoffCoordinates  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([
        0,
        0
    ]);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const { pickup: pickup1 , dropoff: dropoff1  } = router.query;
    const getPickUpCoordinates = (pickup)=>{
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?` + new URLSearchParams({
            access_token: 'pk.eyJ1IjoibWFsa3MxNCIsImEiOiJja3Zsbzdnd24wMnY4MzJtb2dqbTNnYjA1In0.MHS4A-a7xTFgTbXfe_xYsA',
            limit: 1
        })).then((response)=>response.json()
        ).then((data)=>{
            setPickupCoordinates(data.features[0].center);
        });
    };
    const getDropOffCoordinates = (dropoff)=>{
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${dropoff}.json?` + new URLSearchParams({
            access_token: 'pk.eyJ1IjoibWFsa3MxNCIsImEiOiJja3Zsbzdnd24wMnY4MzJtb2dqbTNnYjA1In0.MHS4A-a7xTFgTbXfe_xYsA',
            limit: 1
        })).then((response)=>response.json()
        ).then((data)=>{
            setDropoffCoordinates(data.features[0].center);
        });
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        getPickUpCoordinates(pickup1);
        getDropOffCoordinates(dropoff1);
    }, [
        pickup1,
        dropoff1
    ]);
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Wrapper, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ButtonContainer, {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_3__["default"], {
                        href: "/search",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(BackButton, {
                            src: "https://img.icons8.com/ios-filled/50/000000/left.png"
                        })
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Map__WEBPACK_IMPORTED_MODULE_5__["default"], {
                    pickupCoordinates: pickupCoordinates,
                    dropoffCoordinates: dropoffCoordinates
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(RideContainer, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_RideSelector__WEBPACK_IMPORTED_MODULE_6__["default"], {
                            pickupCoordinates: pickupCoordinates,
                            dropoffCoordinates: dropoffCoordinates
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ConfirmButtonContainer, {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ConfirmButton, {
                                children: "Confirm UberX"
                            })
                        })
                    ]
                })
            ]
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Confirm);
const ButtonContainer = (tailwind_styled_components__WEBPACK_IMPORTED_MODULE_4___default().div)`
rounded-full absolute top-4 left-4 z-10 bg-white shadow-md cursor-pointer
`;
const BackButton = (tailwind_styled_components__WEBPACK_IMPORTED_MODULE_4___default().img)`
h-full object-contain
`;
const ConfirmButtonContainer = (tailwind_styled_components__WEBPACK_IMPORTED_MODULE_4___default().div)`
border-t-2
`;
const Wrapper = (tailwind_styled_components__WEBPACK_IMPORTED_MODULE_4___default().div)`
flex h-screen flex-col
`;
const RideContainer = (tailwind_styled_components__WEBPACK_IMPORTED_MODULE_4___default().div)`
flex-1 flex flex-col h-1/2
`;
const ConfirmButton = (tailwind_styled_components__WEBPACK_IMPORTED_MODULE_4___default().div)`
bg-black text-white my-4 mx-4 py-4 text-center text-xl
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

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

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
var __webpack_exports__ = __webpack_require__.X(0, [730,158,664,525,822], () => (__webpack_exec__(2349)));
module.exports = __webpack_exports__;

})();