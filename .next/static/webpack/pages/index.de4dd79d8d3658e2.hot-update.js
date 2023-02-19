"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/GamesList.jsx":
/*!**********************************!*\
  !*** ./components/GamesList.jsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ GamesList; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _public_games_one_webp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../public/games/one.webp */ \"./public/games/one.webp\");\n/* harmony import */ var _public_games_two_webp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../public/games/two.webp */ \"./public/games/two.webp\");\n/* harmony import */ var _public_games_three_webp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../public/games/three.webp */ \"./public/games/three.webp\");\n/* harmony import */ var _public_games_four_webp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../public/games/four.webp */ \"./public/games/four.webp\");\n/* harmony import */ var _public_games_five_webp__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../public/games/five.webp */ \"./public/games/five.webp\");\n/* harmony import */ var _public_games_six_webp__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../public/games/six.webp */ \"./public/games/six.webp\");\n/* harmony import */ var _GamesCard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./GamesCard */ \"./components/GamesCard.jsx\");\n\n\n\n\n\n\n\n\nvar gamesList = [\n    {\n        imgSrc: _public_games_one_webp__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n        gameName: \"India v/s Australia\",\n        gameType: \"Cricket\"\n    },\n    {\n        imgSrc: _public_games_two_webp__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n        gameName: \"Argintina v/s Brazil\",\n        gameType: \"Football\"\n    },\n    {\n        imgSrc: _public_games_three_webp__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n        gameName: \"Delhi v/s Jaipur Pink\",\n        gameType: \"Kabaddi\"\n    },\n    {\n        imgSrc: _public_games_four_webp__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n        gameName: \"Mixmob\",\n        gameType: \"Cricket\"\n    },\n    {\n        imgSrc: _public_games_five_webp__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n        gameName: \"Big Time\",\n        gameType: \"Cricket\"\n    },\n    {\n        imgSrc: _public_games_six_webp__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n        gameName: \"Axie Infinity\",\n        gameType: \"Cricket\"\n    }\n];\nfunction GamesList() {\n    var _this = this;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-vision p-12\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col items-center text-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"font-header text-3xl pb-8\",\n                        children: \"Games We Are Playing\"\n                    }, void 0, false, {\n                        fileName: \"/Users/nikku.jr.dev/Desktop/Peer-Bets/components/GamesList.jsx\",\n                        lineNumber: 49,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"font-fontJost \",\n                        children: \"Through ownership and rewarding merit, games are now governed by the players. Innovative in-game economics reward players for their performance, creating a new economy in the Metaverse.\"\n                    }, void 0, false, {\n                        fileName: \"/Users/nikku.jr.dev/Desktop/Peer-Bets/components/GamesList.jsx\",\n                        lineNumber: 50,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/nikku.jr.dev/Desktop/Peer-Bets/components/GamesList.jsx\",\n                lineNumber: 48,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col items-center lg:grid lg:grid-cols-3\",\n                children: gamesList.map(function(el, i) {\n                    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_GamesCard__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                        imgSrc: el.imgSrc,\n                        gameName: el.gameName,\n                        id: i,\n                        gameType: el.gameType\n                    }, el.gameName, false, {\n                        fileName: \"/Users/nikku.jr.dev/Desktop/Peer-Bets/components/GamesList.jsx\",\n                        lineNumber: 57,\n                        columnNumber: 21\n                    }, _this));\n                })\n            }, void 0, false, {\n                fileName: \"/Users/nikku.jr.dev/Desktop/Peer-Bets/components/GamesList.jsx\",\n                lineNumber: 53,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/nikku.jr.dev/Desktop/Peer-Bets/components/GamesList.jsx\",\n        lineNumber: 47,\n        columnNumber: 5\n    }, this));\n};\n_c = GamesList;\nvar _c;\n$RefreshReg$(_c, \"GamesList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0dhbWVzTGlzdC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFDK0M7QUFDQTtBQUNJO0FBQ0Y7QUFDQTtBQUNGO0FBQ1o7QUFFbkMsR0FBSyxDQUFDTyxTQUFTLEdBQUcsQ0FBQztJQUVmLENBQUM7UUFDR0MsTUFBTSxFQUFDUiw4REFBUTtRQUNmUyxRQUFRLEVBQUMsQ0FBcUI7UUFDOUJDLFFBQVEsRUFBQyxDQUFTO0lBQ3RCLENBQUM7SUFDRCxDQUFDO1FBQ0dGLE1BQU0sRUFBQ1AsOERBQVE7UUFDZlEsUUFBUSxFQUFDLENBQXNCO1FBQy9CQyxRQUFRLEVBQUMsQ0FBVTtJQUN2QixDQUFDO0lBQ0QsQ0FBQztRQUNHRixNQUFNLEVBQUNOLGdFQUFVO1FBQ2pCTyxRQUFRLEVBQUMsQ0FBdUI7UUFDaENDLFFBQVEsRUFBQyxDQUFTO0lBQ3RCLENBQUM7SUFDRCxDQUFDO1FBQ0dGLE1BQU0sRUFBQ0wsK0RBQVM7UUFDaEJNLFFBQVEsRUFBQyxDQUFRO1FBQ2pCQyxRQUFRLEVBQUMsQ0FBUztJQUN0QixDQUFDO0lBQ0QsQ0FBQztRQUNHRixNQUFNLEVBQUNKLCtEQUFTO1FBQ2hCSyxRQUFRLEVBQUMsQ0FBVTtRQUNuQkMsUUFBUSxFQUFDLENBQVM7SUFDdEIsQ0FBQztJQUNELENBQUM7UUFDR0YsTUFBTSxFQUFDSCw4REFBUTtRQUNmSSxRQUFRLEVBQUMsQ0FBZTtRQUN4QkMsUUFBUSxFQUFDLENBQVM7SUFDdEIsQ0FBQztBQUVMLENBQUM7QUFFYyxRQUFRLENBQUNDLFNBQVMsR0FBRSxDQUFDOztJQUNoQyxNQUFNLDZFQUNMQyxDQUFHO1FBQUNDLFNBQVMsRUFBQyxDQUFnQjs7d0ZBQzlCRCxDQUFHO2dCQUFDQyxTQUFTLEVBQUMsQ0FBd0M7O2dHQUNsREMsQ0FBRTt3QkFBQ0QsU0FBUyxFQUFDLENBQTJCO2tDQUFDLENBQW9COzs7Ozs7Z0dBQzdERSxDQUFDO3dCQUFDRixTQUFTLEVBQUMsQ0FBZ0I7a0NBQUMsQ0FBeUw7Ozs7Ozs7Ozs7Ozt3RkFHMU5ELENBQUc7Z0JBQUNDLFNBQVMsRUFBQyxDQUFtRDswQkFFMUROLFNBQVMsQ0FBQ1MsR0FBRyxDQUFDLFFBQVEsQ0FBUEMsRUFBRSxFQUFDQyxDQUFDLEVBQUcsQ0FBQztvQkFDbkIsTUFBTSw2RUFDRFosa0RBQVM7d0JBQUNFLE1BQU0sRUFBRVMsRUFBRSxDQUFDVCxNQUFNO3dCQUFFQyxRQUFRLEVBQUVRLEVBQUUsQ0FBQ1IsUUFBUTt3QkFBb0JVLEVBQUUsRUFBRUQsQ0FBQzt3QkFBRVIsUUFBUSxFQUFFTyxFQUFFLENBQUNQLFFBQVE7dUJBQXpDTyxFQUFFLENBQUNSLFFBQVE7Ozs7O2dCQUU3RSxDQUFDOzs7Ozs7Ozs7Ozs7QUFLYixDQUFDO0tBbkJ1QkUsU0FBUyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0dhbWVzTGlzdC5qc3g/Zjg3NCJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBpbWFnZU9uZSBmcm9tICcuLi9wdWJsaWMvZ2FtZXMvb25lLndlYnAnO1xuaW1wb3J0IGltYWdlVHdvIGZyb20gJy4uL3B1YmxpYy9nYW1lcy90d28ud2VicCc7XG5pbXBvcnQgaW1hZ2VUaHJlZSBmcm9tICcuLi9wdWJsaWMvZ2FtZXMvdGhyZWUud2VicCc7XG5pbXBvcnQgaW1hZ2VGb3VyIGZyb20gJy4uL3B1YmxpYy9nYW1lcy9mb3VyLndlYnAnO1xuaW1wb3J0IGltYWdlRml2ZSBmcm9tICcuLi9wdWJsaWMvZ2FtZXMvZml2ZS53ZWJwJztcbmltcG9ydCBpbWFnZVNpeCBmcm9tICcuLi9wdWJsaWMvZ2FtZXMvc2l4LndlYnAnO1xuaW1wb3J0IEdhbWVzQ2FyZCBmcm9tICcuL0dhbWVzQ2FyZCc7XG5cbmNvbnN0IGdhbWVzTGlzdCA9IFtcbiAgIFxuICAgIHtcbiAgICAgICAgaW1nU3JjOmltYWdlT25lLFxuICAgICAgICBnYW1lTmFtZTpcIkluZGlhIHYvcyBBdXN0cmFsaWFcIixcbiAgICAgICAgZ2FtZVR5cGU6XCJDcmlja2V0XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaW1nU3JjOmltYWdlVHdvLFxuICAgICAgICBnYW1lTmFtZTpcIkFyZ2ludGluYSB2L3MgQnJhemlsXCIsXG4gICAgICAgIGdhbWVUeXBlOlwiRm9vdGJhbGxcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBpbWdTcmM6aW1hZ2VUaHJlZSxcbiAgICAgICAgZ2FtZU5hbWU6XCJEZWxoaSB2L3MgSmFpcHVyIFBpbmtcIixcbiAgICAgICAgZ2FtZVR5cGU6XCJLYWJhZGRpXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaW1nU3JjOmltYWdlRm91cixcbiAgICAgICAgZ2FtZU5hbWU6XCJNaXhtb2JcIixcbiAgICAgICAgZ2FtZVR5cGU6XCJDcmlja2V0XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaW1nU3JjOmltYWdlRml2ZSxcbiAgICAgICAgZ2FtZU5hbWU6XCJCaWcgVGltZVwiLFxuICAgICAgICBnYW1lVHlwZTpcIkNyaWNrZXRcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBpbWdTcmM6aW1hZ2VTaXgsXG4gICAgICAgIGdhbWVOYW1lOlwiQXhpZSBJbmZpbml0eVwiLFxuICAgICAgICBnYW1lVHlwZTpcIkNyaWNrZXRcIlxuICAgIH1cblxuXVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBHYW1lc0xpc3QoKXtcbiAgICByZXR1cm4oXG4gICAgPGRpdiBjbGFzc05hbWU9XCJiZy12aXNpb24gcC0xMlwiPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cImZvbnQtaGVhZGVyIHRleHQtM3hsIHBiLThcIj5HYW1lcyBXZSBBcmUgUGxheWluZzwvaDE+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtZm9udEpvc3QgXCI+VGhyb3VnaCBvd25lcnNoaXAgYW5kIHJld2FyZGluZyBtZXJpdCwgZ2FtZXMgYXJlIG5vdyBnb3Zlcm5lZCBieSB0aGUgcGxheWVycy4gSW5ub3ZhdGl2ZSBpbi1nYW1lIGVjb25vbWljcyByZXdhcmQgcGxheWVycyBmb3IgdGhlaXIgcGVyZm9ybWFuY2UsIGNyZWF0aW5nIGEgbmV3IGVjb25vbXkgaW4gdGhlIE1ldGF2ZXJzZS48L3A+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgbGc6Z3JpZCBsZzpncmlkLWNvbHMtMyc+XG4gICAgICAgIHtcbiAgICAgICAgICAgIGdhbWVzTGlzdC5tYXAoKGVsLGkpPT57XG4gICAgICAgICAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgICAgICAgICA8R2FtZXNDYXJkIGltZ1NyYz17ZWwuaW1nU3JjfSBnYW1lTmFtZT17ZWwuZ2FtZU5hbWV9IGtleT17ZWwuZ2FtZU5hbWV9IGlkPXtpfSBnYW1lVHlwZT17ZWwuZ2FtZVR5cGV9IC8+XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIClcbn0iXSwibmFtZXMiOlsiaW1hZ2VPbmUiLCJpbWFnZVR3byIsImltYWdlVGhyZWUiLCJpbWFnZUZvdXIiLCJpbWFnZUZpdmUiLCJpbWFnZVNpeCIsIkdhbWVzQ2FyZCIsImdhbWVzTGlzdCIsImltZ1NyYyIsImdhbWVOYW1lIiwiZ2FtZVR5cGUiLCJHYW1lc0xpc3QiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsInAiLCJtYXAiLCJlbCIsImkiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/GamesList.jsx\n");

/***/ })

});