"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/games/[gameId]",{

/***/ "./public/games/hockey.jpeg":
/*!**********************************!*\
  !*** ./public/games/hockey.jpeg ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\"src\":\"/_next/static/media/hockey.bd9d8111.jpeg\",\"height\":168,\"width\":300,\"blurDataURL\":\"/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhockey.bd9d8111.jpeg&w=8&q=70\"});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wdWJsaWMvZ2FtZXMvaG9ja2V5LmpwZWcuanMiLCJtYXBwaW5ncyI6IjtBQUFBLCtEQUFlLENBQUMscUtBQXFLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3B1YmxpYy9nYW1lcy9ob2NrZXkuanBlZz9kMzg0Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9tZWRpYS9ob2NrZXkuYmQ5ZDgxMTEuanBlZ1wiLFwiaGVpZ2h0XCI6MTY4LFwid2lkdGhcIjozMDAsXCJibHVyRGF0YVVSTFwiOlwiL19uZXh0L2ltYWdlP3VybD0lMkZfbmV4dCUyRnN0YXRpYyUyRm1lZGlhJTJGaG9ja2V5LmJkOWQ4MTExLmpwZWcmdz04JnE9NzBcIn07Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./public/games/hockey.jpeg\n");

/***/ }),

/***/ "./utils/gameList.js":
/*!***************************!*\
  !*** ./utils/gameList.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"gamesList\": function() { return /* binding */ gamesList; }\n/* harmony export */ });\n/* harmony import */ var _public_games_cricket_jpeg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../public/games/cricket.jpeg */ \"./public/games/cricket.jpeg\");\n/* harmony import */ var _public_games_footba_jpeg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../public/games/footba;;.jpeg */ \"./public/games/footba;;.jpeg\");\n/* harmony import */ var _public_games_hockey_jpeg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../public/games/hockey.jpeg */ \"./public/games/hockey.jpeg\");\n/* harmony import */ var _public_games_four_webp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../public/games/four.webp */ \"./public/games/four.webp\");\n/* harmony import */ var _public_games_five_webp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../public/games/five.webp */ \"./public/games/five.webp\");\n/* harmony import */ var _public_games_six_webp__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../public/games/six.webp */ \"./public/games/six.webp\");\n\n\n\n\n\n\nvar gamesList = [\n    {\n        id: \"1\",\n        imgSrc: _public_games_cricket_jpeg__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n        gameName: \"India v/s Australia\",\n        gameType: \"Cricket\",\n        gameStatus: \"Ongoing\"\n    },\n    {\n        id: \"2\",\n        imgSrc: _public_games_footba_jpeg__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n        gameName: \"Argentina v/s Brazil\",\n        gameType: \"Football\",\n        gameStatus: \"Ongoing\"\n    },\n    {\n        id: \"3\",\n        imgSrc: _public_games_hockey_jpeg__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n        gameName: \"Delhi v/s Jaipur Pink\",\n        gameType: \"Kabaddi\",\n        gameStatus: \"Ongoing\"\n    },\n    {\n        id: \"4\",\n        imgSrc: _public_games_four_webp__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n        gameName: \"Nuggets v/s Mavericks\",\n        gameType: \"Basket-Ball\",\n        gameStatus: \"Ongoing\"\n    },\n    {\n        id: \"5\",\n        imgSrc: _public_games_five_webp__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n        gameName: \"IND v/s China\",\n        gameType: \"Table-Tennis\",\n        gameStatus: \"Ongoing\"\n    },\n    {\n        id: \"6\",\n        imgSrc: _public_games_six_webp__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n        gameName: \"Padres v/s Mariners\",\n        gameType: \"Base-Ball\",\n        gameStatus: \"Ongoing\"\n    }\n];\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91dGlscy9nYW1lTGlzdC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQW1EO0FBQ0M7QUFDQTtBQUNIO0FBQ0E7QUFDRjtBQUN4QyxHQUFLLENBQUNNLFNBQVMsR0FBRyxDQUFDO0lBRXRCLENBQUM7UUFBR0MsRUFBRSxFQUFDLENBQUc7UUFDTkMsTUFBTSxFQUFDUixrRUFBUTtRQUNmUyxRQUFRLEVBQUMsQ0FBcUI7UUFDOUJDLFFBQVEsRUFBQyxDQUFTO1FBQ2xCQyxVQUFVLEVBQUMsQ0FBUztJQUN4QixDQUFDO0lBRUQsQ0FBQztRQUNHSixFQUFFLEVBQUMsQ0FBRztRQUNOQyxNQUFNLEVBQUNQLGlFQUFRO1FBQ2ZRLFFBQVEsRUFBQyxDQUFzQjtRQUMvQkMsUUFBUSxFQUFDLENBQVU7UUFDbkJDLFVBQVUsRUFBQyxDQUFTO0lBQ3hCLENBQUM7SUFFRCxDQUFDO1FBQ0dKLEVBQUUsRUFBQyxDQUFHO1FBQ05DLE1BQU0sRUFBQ04saUVBQVU7UUFDakJPLFFBQVEsRUFBQyxDQUF1QjtRQUNoQ0MsUUFBUSxFQUFDLENBQVM7UUFDbEJDLFVBQVUsRUFBQyxDQUFTO0lBQ3hCLENBQUM7SUFFRCxDQUFDO1FBQ0dKLEVBQUUsRUFBQyxDQUFHO1FBQ05DLE1BQU0sRUFBQ0wsK0RBQVM7UUFDaEJNLFFBQVEsRUFBQyxDQUF1QjtRQUNoQ0MsUUFBUSxFQUFDLENBQWE7UUFDdEJDLFVBQVUsRUFBQyxDQUFTO0lBRXhCLENBQUM7SUFDRCxDQUFDO1FBQ0dKLEVBQUUsRUFBQyxDQUFHO1FBQ05DLE1BQU0sRUFBQ0osK0RBQVM7UUFDaEJLLFFBQVEsRUFBQyxDQUFlO1FBQ3hCQyxRQUFRLEVBQUMsQ0FBYztRQUN2QkMsVUFBVSxFQUFDLENBQVM7SUFFeEIsQ0FBQztJQUNELENBQUM7UUFDR0osRUFBRSxFQUFDLENBQUc7UUFDTkMsTUFBTSxFQUFDSCw4REFBUTtRQUNmSSxRQUFRLEVBQUMsQ0FBcUI7UUFDOUJDLFFBQVEsRUFBQyxDQUFXO1FBQ3BCQyxVQUFVLEVBQUMsQ0FBUztJQUV4QixDQUFDO0FBRUwsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi91dGlscy9nYW1lTGlzdC5qcz9mZTFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBpbWFnZU9uZSBmcm9tICcuLi9wdWJsaWMvZ2FtZXMvY3JpY2tldC5qcGVnJztcbmltcG9ydCBpbWFnZVR3byBmcm9tICcuLi9wdWJsaWMvZ2FtZXMvZm9vdGJhOzsuanBlZyc7XG5pbXBvcnQgaW1hZ2VUaHJlZSBmcm9tICcuLi9wdWJsaWMvZ2FtZXMvaG9ja2V5LmpwZWcnO1xuaW1wb3J0IGltYWdlRm91ciBmcm9tICcuLi9wdWJsaWMvZ2FtZXMvZm91ci53ZWJwJztcbmltcG9ydCBpbWFnZUZpdmUgZnJvbSAnLi4vcHVibGljL2dhbWVzL2ZpdmUud2VicCc7XG5pbXBvcnQgaW1hZ2VTaXggZnJvbSAnLi4vcHVibGljL2dhbWVzL3NpeC53ZWJwJztcbmV4cG9ydCBjb25zdCBnYW1lc0xpc3QgPSBbXG4gICBcbiAgICB7ICAgaWQ6XCIxXCIsXG4gICAgICAgIGltZ1NyYzppbWFnZU9uZSxcbiAgICAgICAgZ2FtZU5hbWU6XCJJbmRpYSB2L3MgQXVzdHJhbGlhXCIsXG4gICAgICAgIGdhbWVUeXBlOlwiQ3JpY2tldFwiLFxuICAgICAgICBnYW1lU3RhdHVzOlwiT25nb2luZ1wiXG4gICAgfSxcbiAgICBcbiAgICB7ICAgXG4gICAgICAgIGlkOlwiMlwiLFxuICAgICAgICBpbWdTcmM6aW1hZ2VUd28sXG4gICAgICAgIGdhbWVOYW1lOlwiQXJnZW50aW5hIHYvcyBCcmF6aWxcIixcbiAgICAgICAgZ2FtZVR5cGU6XCJGb290YmFsbFwiLFxuICAgICAgICBnYW1lU3RhdHVzOlwiT25nb2luZ1wiXG4gICAgfSxcbiAgICBcbiAgICB7ICAgXG4gICAgICAgIGlkOlwiM1wiLFxuICAgICAgICBpbWdTcmM6aW1hZ2VUaHJlZSxcbiAgICAgICAgZ2FtZU5hbWU6XCJEZWxoaSB2L3MgSmFpcHVyIFBpbmtcIixcbiAgICAgICAgZ2FtZVR5cGU6XCJLYWJhZGRpXCIsXG4gICAgICAgIGdhbWVTdGF0dXM6XCJPbmdvaW5nXCJcbiAgICB9LFxuICAgIFxuICAgIHsgICBcbiAgICAgICAgaWQ6XCI0XCIsXG4gICAgICAgIGltZ1NyYzppbWFnZUZvdXIsXG4gICAgICAgIGdhbWVOYW1lOlwiTnVnZ2V0cyB2L3MgTWF2ZXJpY2tzXCIsXG4gICAgICAgIGdhbWVUeXBlOlwiQmFza2V0LUJhbGxcIixcbiAgICAgICAgZ2FtZVN0YXR1czpcIk9uZ29pbmdcIlxuICAgICAgICBcbiAgICB9LFxuICAgIHsgICBcbiAgICAgICAgaWQ6XCI1XCIsXG4gICAgICAgIGltZ1NyYzppbWFnZUZpdmUsXG4gICAgICAgIGdhbWVOYW1lOlwiSU5EIHYvcyBDaGluYVwiLFxuICAgICAgICBnYW1lVHlwZTpcIlRhYmxlLVRlbm5pc1wiLFxuICAgICAgICBnYW1lU3RhdHVzOlwiT25nb2luZ1wiXG4gICAgICAgIFxuICAgIH0sXG4gICAgeyAgIFxuICAgICAgICBpZDpcIjZcIixcbiAgICAgICAgaW1nU3JjOmltYWdlU2l4LFxuICAgICAgICBnYW1lTmFtZTpcIlBhZHJlcyB2L3MgTWFyaW5lcnNcIixcbiAgICAgICAgZ2FtZVR5cGU6XCJCYXNlLUJhbGxcIixcbiAgICAgICAgZ2FtZVN0YXR1czpcIk9uZ29pbmdcIlxuICAgICAgICBcbiAgICB9XG5cbl1cbiJdLCJuYW1lcyI6WyJpbWFnZU9uZSIsImltYWdlVHdvIiwiaW1hZ2VUaHJlZSIsImltYWdlRm91ciIsImltYWdlRml2ZSIsImltYWdlU2l4IiwiZ2FtZXNMaXN0IiwiaWQiLCJpbWdTcmMiLCJnYW1lTmFtZSIsImdhbWVUeXBlIiwiZ2FtZVN0YXR1cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./utils/gameList.js\n");

/***/ })

});