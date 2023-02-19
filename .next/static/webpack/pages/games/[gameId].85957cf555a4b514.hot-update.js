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

/***/ "./utils/gameList.js":
/*!***************************!*\
  !*** ./utils/gameList.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"gamesList\": function() { return /* binding */ gamesList; }\n/* harmony export */ });\n/* harmony import */ var _public_games_cricket_jpeg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../public/games/cricket.jpeg */ \"./public/games/cricket.jpeg\");\n/* harmony import */ var _public_games_footba_jpeg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../public/games/footba;;.jpeg */ \"./public/games/footba;;.jpeg\");\n/* harmony import */ var _public_games_hockey_jpeg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../public/games/hockey.jpeg */ \"./public/games/hockey.jpeg\");\n/* harmony import */ var _public_games_horse_jpeg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../public/games/horse.jpeg */ \"./public/games/horse.jpeg\");\n/* harmony import */ var _public_games_iit_jpeg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../public/games/iit.jpeg */ \"./public/games/iit.jpeg\");\n/* harmony import */ var _public_games_custom_jpeg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../public/games/custom.jpeg */ \"./public/games/custom.jpeg\");\n\n\n\n\n\n\nvar gamesList = [\n    {\n        id: \"1\",\n        imgSrc: _public_games_cricket_jpeg__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n        gameName: \"India v/s Australia\",\n        gameType: \"Cricket\",\n        gameStatus: \"Ongoing\"\n    },\n    {\n        id: \"2\",\n        imgSrc: _public_games_footba_jpeg__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n        gameName: \"Argentina v/s Brazil\",\n        gameType: \"Football\",\n        gameStatus: \"Ongoing\"\n    },\n    {\n        id: \"3\",\n        imgSrc: _public_games_hockey_jpeg__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n        gameName: \"Delhi v/s Jaipur Pink\",\n        gameType: \"Hockey\",\n        gameStatus: \"Ongoing\"\n    },\n    {\n        id: \"4\",\n        imgSrc: _public_games_horse_jpeg__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n        gameName: \"Nuggets v/s Mavericks\",\n        gameType: \"Horse Riding\",\n        gameStatus: \"Ongoing\"\n    },\n    {\n        id: \"5\",\n        imgSrc: _public_games_iit_jpeg__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n        gameName: \"IIT Dharwad vs IIT Bombay\",\n        gameType: \"Inter-IIT\",\n        gameStatus: \"Ongoing\"\n    },\n    {\n        id: \"6\",\n        imgSrc: _public_games_custom_jpeg__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n        gameName: \"Padres v/s Mariners\",\n        gameType: \"Custom\",\n        gameStatus: \"Ongoing\"\n    }\n];\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91dGlscy9nYW1lTGlzdC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQW1EO0FBQ0M7QUFDQTtBQUNGO0FBQ0Y7QUFDRTtBQUMzQyxHQUFLLENBQUNNLFNBQVMsR0FBRyxDQUFDO0lBRXRCLENBQUM7UUFBR0MsRUFBRSxFQUFDLENBQUc7UUFDTkMsTUFBTSxFQUFDUixrRUFBUTtRQUNmUyxRQUFRLEVBQUMsQ0FBcUI7UUFDOUJDLFFBQVEsRUFBQyxDQUFTO1FBQ2xCQyxVQUFVLEVBQUMsQ0FBUztJQUN4QixDQUFDO0lBRUQsQ0FBQztRQUNHSixFQUFFLEVBQUMsQ0FBRztRQUNOQyxNQUFNLEVBQUNQLGlFQUFRO1FBQ2ZRLFFBQVEsRUFBQyxDQUFzQjtRQUMvQkMsUUFBUSxFQUFDLENBQVU7UUFDbkJDLFVBQVUsRUFBQyxDQUFTO0lBQ3hCLENBQUM7SUFFRCxDQUFDO1FBQ0dKLEVBQUUsRUFBQyxDQUFHO1FBQ05DLE1BQU0sRUFBQ04saUVBQVU7UUFDakJPLFFBQVEsRUFBQyxDQUF1QjtRQUNoQ0MsUUFBUSxFQUFDLENBQVE7UUFDakJDLFVBQVUsRUFBQyxDQUFTO0lBQ3hCLENBQUM7SUFFRCxDQUFDO1FBQ0dKLEVBQUUsRUFBQyxDQUFHO1FBQ05DLE1BQU0sRUFBQ0wsZ0VBQVM7UUFDaEJNLFFBQVEsRUFBQyxDQUF1QjtRQUNoQ0MsUUFBUSxFQUFDLENBQWM7UUFDdkJDLFVBQVUsRUFBQyxDQUFTO0lBRXhCLENBQUM7SUFDRCxDQUFDO1FBQ0dKLEVBQUUsRUFBQyxDQUFHO1FBQ05DLE1BQU0sRUFBQ0osOERBQVM7UUFDaEJLLFFBQVEsRUFBQyxDQUEyQjtRQUNwQ0MsUUFBUSxFQUFDLENBQVc7UUFDcEJDLFVBQVUsRUFBQyxDQUFTO0lBRXhCLENBQUM7SUFDRCxDQUFDO1FBQ0dKLEVBQUUsRUFBQyxDQUFHO1FBQ05DLE1BQU0sRUFBQ0gsaUVBQVE7UUFDZkksUUFBUSxFQUFDLENBQXFCO1FBQzlCQyxRQUFRLEVBQUMsQ0FBUTtRQUNqQkMsVUFBVSxFQUFDLENBQVM7SUFFeEIsQ0FBQztBQUVMLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMvZ2FtZUxpc3QuanM/ZmUxZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgaW1hZ2VPbmUgZnJvbSAnLi4vcHVibGljL2dhbWVzL2NyaWNrZXQuanBlZyc7XG5pbXBvcnQgaW1hZ2VUd28gZnJvbSAnLi4vcHVibGljL2dhbWVzL2Zvb3RiYTs7LmpwZWcnO1xuaW1wb3J0IGltYWdlVGhyZWUgZnJvbSAnLi4vcHVibGljL2dhbWVzL2hvY2tleS5qcGVnJztcbmltcG9ydCBpbWFnZUZvdXIgZnJvbSAnLi4vcHVibGljL2dhbWVzL2hvcnNlLmpwZWcnO1xuaW1wb3J0IGltYWdlRml2ZSBmcm9tICcuLi9wdWJsaWMvZ2FtZXMvaWl0LmpwZWcnO1xuaW1wb3J0IGltYWdlU2l4IGZyb20gJy4uL3B1YmxpYy9nYW1lcy9jdXN0b20uanBlZyc7XG5leHBvcnQgY29uc3QgZ2FtZXNMaXN0ID0gW1xuICAgXG4gICAgeyAgIGlkOlwiMVwiLFxuICAgICAgICBpbWdTcmM6aW1hZ2VPbmUsXG4gICAgICAgIGdhbWVOYW1lOlwiSW5kaWEgdi9zIEF1c3RyYWxpYVwiLFxuICAgICAgICBnYW1lVHlwZTpcIkNyaWNrZXRcIixcbiAgICAgICAgZ2FtZVN0YXR1czpcIk9uZ29pbmdcIlxuICAgIH0sXG4gICAgXG4gICAgeyAgIFxuICAgICAgICBpZDpcIjJcIixcbiAgICAgICAgaW1nU3JjOmltYWdlVHdvLFxuICAgICAgICBnYW1lTmFtZTpcIkFyZ2VudGluYSB2L3MgQnJhemlsXCIsXG4gICAgICAgIGdhbWVUeXBlOlwiRm9vdGJhbGxcIixcbiAgICAgICAgZ2FtZVN0YXR1czpcIk9uZ29pbmdcIlxuICAgIH0sXG4gICAgXG4gICAgeyAgIFxuICAgICAgICBpZDpcIjNcIixcbiAgICAgICAgaW1nU3JjOmltYWdlVGhyZWUsXG4gICAgICAgIGdhbWVOYW1lOlwiRGVsaGkgdi9zIEphaXB1ciBQaW5rXCIsXG4gICAgICAgIGdhbWVUeXBlOlwiSG9ja2V5XCIsXG4gICAgICAgIGdhbWVTdGF0dXM6XCJPbmdvaW5nXCJcbiAgICB9LFxuICAgIFxuICAgIHsgICBcbiAgICAgICAgaWQ6XCI0XCIsXG4gICAgICAgIGltZ1NyYzppbWFnZUZvdXIsXG4gICAgICAgIGdhbWVOYW1lOlwiTnVnZ2V0cyB2L3MgTWF2ZXJpY2tzXCIsXG4gICAgICAgIGdhbWVUeXBlOlwiSG9yc2UgUmlkaW5nXCIsXG4gICAgICAgIGdhbWVTdGF0dXM6XCJPbmdvaW5nXCJcbiAgICAgICAgXG4gICAgfSxcbiAgICB7ICAgXG4gICAgICAgIGlkOlwiNVwiLFxuICAgICAgICBpbWdTcmM6aW1hZ2VGaXZlLFxuICAgICAgICBnYW1lTmFtZTpcIklJVCBEaGFyd2FkIHZzIElJVCBCb21iYXlcIixcbiAgICAgICAgZ2FtZVR5cGU6XCJJbnRlci1JSVRcIixcbiAgICAgICAgZ2FtZVN0YXR1czpcIk9uZ29pbmdcIlxuICAgICAgICBcbiAgICB9LFxuICAgIHsgICBcbiAgICAgICAgaWQ6XCI2XCIsXG4gICAgICAgIGltZ1NyYzppbWFnZVNpeCxcbiAgICAgICAgZ2FtZU5hbWU6XCJQYWRyZXMgdi9zIE1hcmluZXJzXCIsXG4gICAgICAgIGdhbWVUeXBlOlwiQ3VzdG9tXCIsXG4gICAgICAgIGdhbWVTdGF0dXM6XCJPbmdvaW5nXCJcbiAgICAgICAgXG4gICAgfVxuXG5dXG4iXSwibmFtZXMiOlsiaW1hZ2VPbmUiLCJpbWFnZVR3byIsImltYWdlVGhyZWUiLCJpbWFnZUZvdXIiLCJpbWFnZUZpdmUiLCJpbWFnZVNpeCIsImdhbWVzTGlzdCIsImlkIiwiaW1nU3JjIiwiZ2FtZU5hbWUiLCJnYW1lVHlwZSIsImdhbWVTdGF0dXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./utils/gameList.js\n");

/***/ })

});