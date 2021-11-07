"use strict";
exports.id = 525;
exports.ids = [525];
exports.modules = {

/***/ 3525:
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
/* harmony import */ var _mapbox_gl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6158);
/* harmony import */ var _mapbox_gl__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mapbox_gl__WEBPACK_IMPORTED_MODULE_3__);




(_mapbox_gl__WEBPACK_IMPORTED_MODULE_3___default().accessToken) = 'pk.eyJ1IjoibWFsa3MxNCIsImEiOiJja3Zsbzdnd24wMnY4MzJtb2dqbTNnYjA1In0.MHS4A-a7xTFgTbXfe_xYsA';
const Map = (props)=>{
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const map = new (_mapbox_gl__WEBPACK_IMPORTED_MODULE_3___default().Map)({
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [
                -56.31264,
                -34.87733
            ],
            zoom: 3
        });
        if (props.pickupCoordinates) {
            addToMap(map, props.pickupCoordinates);
        }
        if (props.dropoffCoordinates) {
            addToMap(map, props.dropoffCoordinates);
        }
        if (props.pickupCoordinates && props.dropoffCoordinates) {
            map.fitBounds([
                props.dropoffCoordinates,
                props.pickupCoordinates
            ], {
                padding: 60
            });
        }
    }, [
        props.pickupCoordinates,
        props.dropoffCoordinates
    ]);
    const addToMap = (map, coordinates)=>{
        const marker1 = new (_mapbox_gl__WEBPACK_IMPORTED_MODULE_3___default().Marker)().setLngLat(coordinates).addTo(map);
    };
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Wrapper, {
        id: "map"
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Map);
const Wrapper = (tailwind_styled_components__WEBPACK_IMPORTED_MODULE_2___default().div)`
flex-1 h-1/2 
`;


/***/ })

};
;