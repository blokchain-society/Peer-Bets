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

/***/ "./components/BetChoice.jsx":
/*!**********************************!*\
  !*** ./components/BetChoice.jsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ BetChoice; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _public_bgpic_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../public/bgpic.png */ \"./public/bgpic.png\");\n/* harmony import */ var _utils_CircularAnimation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/CircularAnimation */ \"./utils/CircularAnimation.jsx\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_icons_gr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-icons/gr */ \"./node_modules/react-icons/gr/index.esm.js\");\n/* harmony import */ var _utils_gameList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/gameList */ \"./utils/gameList.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\n\n\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar BackgroundImg = function() {\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"jsx-fba506dbc5407317\" + \" \" + \"absolute -z-1 w-full h-full\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                src: _public_bgpic_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                layout: \"fill\",\n                objectFit: \"cover\",\n                alt: \"bg\"\n            }, void 0, false, {\n                fileName: \"/Users/nikku.jr.dev/Desktop/Peer-Bets/components/BetChoice.jsx\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, _this),\n            (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: \"fba506dbc5407317\",\n                children: \"div.jsx-fba506dbc5407317{z-index:-1}\"\n            }, void 0, false, void 0, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/nikku.jr.dev/Desktop/Peer-Bets/components/BetChoice.jsx\",\n        lineNumber: 10,\n        columnNumber: 5\n    }, _this));\n};\n_c = BackgroundImg;\nfunction BetChoice(param) {\n    var id = param.id;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(undefined), /*#__PURE__*/ data1 = ref[0], setData = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_7__.useEffect)(function() {\n        var data = _utils_gameList__WEBPACK_IMPORTED_MODULE_6__.gamesList.filter(function(el) {\n            return el.id === id;\n        });\n        setData(data);\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"relative z-5 h-[90rem] sm:h-[60rem] lg:h-[55rem]\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(BackgroundImg, {}, void 0, false, {\n                fileName: \"/Users/nikku.jr.dev/Desktop/Peer-Bets/components/BetChoice.jsx\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \" pb-16 \",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                        className: \" z-5 text-white p-12 text-center flex flex-col items-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"text-3xl leading-7 pb-6 font-header\",\n                                children: \"BRING THE GAME\"\n                            }, void 0, false, {\n                                fileName: \"/Users/nikku.jr.dev/Desktop/Peer-Bets/components/BetChoice.jsx\",\n                                lineNumber: 35,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"font-extralight text-lg leading-8 font-fontJost\",\n                                        children: [\n                                            \"Galaxy Guild serves as the platform for Players, Guilds, and Scholarship Managers to collaborate and make the most out of their Metaverse experience!\",\n                                            \" \"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/nikku.jr.dev/Desktop/Peer-Bets/components/BetChoice.jsx\",\n                                        lineNumber: 40,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                        className: \"text-3xl leading-7 pb-6 mt-5 font-header text-yellow-600\",\n                                        children: data1[0].gameName\n                                    }, void 0, false, {\n                                        fileName: \"/Users/nikku.jr.dev/Desktop/Peer-Bets/components/BetChoice.jsx\",\n                                        lineNumber: 45,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                        className: \"text-3xl leading-7 pb-6 mb-5 font-header mt-2 text-pink-600\",\n                                        children: data1[0].gameType\n                                    }, void 0, false, {\n                                        fileName: \"/Users/nikku.jr.dev/Desktop/Peer-Bets/components/BetChoice.jsx\",\n                                        lineNumber: 48,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/nikku.jr.dev/Desktop/Peer-Bets/components/BetChoice.jsx\",\n                                lineNumber: 39,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_utils_CircularAnimation__WEBPACK_IMPORTED_MODULE_4__.Circular, {}, void 0, false, {\n                                fileName: \"/Users/nikku.jr.dev/Desktop/Peer-Bets/components/BetChoice.jsx\",\n                                lineNumber: 52,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/nikku.jr.dev/Desktop/Peer-Bets/components/BetChoice.jsx\",\n                        lineNumber: 34,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"grid place-content-center \",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"font-bold font-fontDM font-xl text-center text-white bg-gradient-to-r from-btn-blue via-btn-purple to-btn-blue animate-glow bg-300 p-3 rounded-full\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {\n                                    href: \"createroom\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                        className: \"whitespace-nowrap d-flex justify-between\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                className: \"mt-2 mx-2\",\n                                                children: \"Create-Room \"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/nikku.jr.dev/Desktop/Peer-Bets/components/BetChoice.jsx\",\n                                                lineNumber: 62,\n                                                columnNumber: 17\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_gr__WEBPACK_IMPORTED_MODULE_8__.GrAddCircle, {\n                                                size: \"40\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/nikku.jr.dev/Desktop/Peer-Bets/components/BetChoice.jsx\",\n                                                lineNumber: 63,\n                                                columnNumber: 17\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/nikku.jr.dev/Desktop/Peer-Bets/components/BetChoice.jsx\",\n                                        lineNumber: 61,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/nikku.jr.dev/Desktop/Peer-Bets/components/BetChoice.jsx\",\n                                    lineNumber: 60,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/nikku.jr.dev/Desktop/Peer-Bets/components/BetChoice.jsx\",\n                                lineNumber: 56,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"font-bold font-fontDM font-xl text-center text-white bg-gradient-to-r from-btn-blue via-btn-purple to-btn-blue animate-glow bg-300 mt-4 p-3 rounded-full\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {\n                                    href: \"joinroom\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                        className: \"whitespace-nowrap d-flex justify-between\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                className: \"mt-2 mx-2\",\n                                                children: \"Join-Room \"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/nikku.jr.dev/Desktop/Peer-Bets/components/BetChoice.jsx\",\n                                                lineNumber: 74,\n                                                columnNumber: 17\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_gr__WEBPACK_IMPORTED_MODULE_8__.GrAddCircle, {\n                                                size: \"40\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/nikku.jr.dev/Desktop/Peer-Bets/components/BetChoice.jsx\",\n                                                lineNumber: 75,\n                                                columnNumber: 17\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/nikku.jr.dev/Desktop/Peer-Bets/components/BetChoice.jsx\",\n                                        lineNumber: 73,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/nikku.jr.dev/Desktop/Peer-Bets/components/BetChoice.jsx\",\n                                    lineNumber: 72,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/nikku.jr.dev/Desktop/Peer-Bets/components/BetChoice.jsx\",\n                                lineNumber: 68,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/nikku.jr.dev/Desktop/Peer-Bets/components/BetChoice.jsx\",\n                        lineNumber: 55,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/nikku.jr.dev/Desktop/Peer-Bets/components/BetChoice.jsx\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/nikku.jr.dev/Desktop/Peer-Bets/components/BetChoice.jsx\",\n        lineNumber: 31,\n        columnNumber: 5\n    }, this));\n};\n_s(BetChoice, \"jJZmbdFnZFNs6vZQXRn5ZO2Uq34=\");\n_c1 = BetChoice;\nvar _c, _c1;\n$RefreshReg$(_c, \"BackgroundImg\");\n$RefreshReg$(_c1, \"BetChoice\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0JldENob2ljZS5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBOEI7QUFDTTtBQUNpQjtBQUN6QjtBQUNnQjtBQUNDO0FBQ0Y7OztBQUMzQyxHQUFLLENBQUNRLGFBQWEsR0FBRyxRQUN0QixHQUQ0QixDQUFDO0lBQzNCLE1BQU0sNkVBQ0hDLENBQUc7a0RBQVcsQ0FBNkI7O3dGQUN6Q1QsbURBQUs7Z0JBQUNVLEdBQUcsRUFBRVQseURBQUU7Z0JBQUVVLE1BQU0sRUFBQyxDQUFNO2dCQUFDQyxTQUFTLEVBQUMsQ0FBTztnQkFBQ0MsR0FBRyxFQUFDLENBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7QUFVOUQsQ0FBQztLQWJLTCxhQUFhO0FBZUosUUFBUSxDQUFDTSxTQUFTLENBQUMsS0FBTSxFQUFFLENBQUM7UUFBUEMsRUFBRSxHQUFKLEtBQU0sQ0FBSkEsRUFBRTs7SUFDcEMsR0FBSyxDQUFnQlIsR0FBbUIsR0FBbkJBLCtDQUFRLENBQUNTLFNBQVMsaUJBQWhDQyxLQUFJLEdBQVVWLEdBQW1CLEtBQTVCVyxPQUFPLEdBQUVYLEdBQW1CO0lBQ3hDRCxnREFBUyxDQUFDLFFBQ1YsR0FEYyxDQUFDO1FBQ2IsR0FBSyxDQUFDVyxJQUFJLEdBQUdaLDZEQUFnQixDQUFDLFFBQVFlLENBQVBBLEVBQUU7WUFBS0EsTUFBTSxDQUFOQSxFQUFFLENBQUNMLEVBQUUsS0FBS0EsRUFBRTs7UUFDbERHLE9BQU8sQ0FBQ0QsSUFBSTtJQUNkLENBQUMsRUFBQyxDQUFDLENBQUM7SUFFSixNQUFNLDZFQUNIUixDQUFHO1FBQUNZLFNBQVMsRUFBQyxDQUFtRDs7d0ZBQy9EYixhQUFhOzs7Ozt3RkFDYkMsQ0FBRztnQkFBQ1ksU0FBUyxFQUFDLENBQVM7O2dHQUNyQkMsQ0FBTzt3QkFBQ0QsU0FBUyxFQUFDLENBQTZEOzt3R0FDN0VFLENBQUU7Z0NBQUNGLFNBQVMsRUFBQyxDQUFxQzswQ0FBQyxDQUVwRDs7Ozs7O3dHQUVDWixDQUFHOztnSEFDRGUsQ0FBQzt3Q0FBQ0gsU0FBUyxFQUFDLENBQWlEOzs0Q0FBQyxDQUd4Qzs0Q0FBQyxDQUFHOzs7Ozs7O2dIQUUxQkUsQ0FBRTt3Q0FBQ0YsU0FBUyxFQUFDLENBQTBEO2tEQUNyRUosS0FBSSxDQUFDLENBQUMsRUFBRVEsUUFBUTs7Ozs7O2dIQUVsQkYsQ0FBRTt3Q0FBQ0YsU0FBUyxFQUFDLENBQTZEO2tEQUN4RUosS0FBSSxDQUFDLENBQUMsRUFBRVMsUUFBUTs7Ozs7Ozs7Ozs7O3dHQUdwQnhCLDhEQUFROzs7Ozs7Ozs7OztnR0FHVk8sQ0FBRzt3QkFBQ1ksU0FBUyxFQUFDLENBQTRCOzt3R0FDeENNLENBQU07Z0NBQ0xOLFNBQVMsRUFBQyxDQUN1QjtzSEFFaENsQixrREFBSTtvQ0FBQ3lCLElBQUksRUFBQyxDQUFZOzBIQUNwQkwsQ0FBRTt3Q0FBQ0YsU0FBUyxFQUFDLENBQTBDOzt3SEFDckRRLENBQUk7Z0RBQUNSLFNBQVMsRUFBQyxDQUFXOzBEQUFDLENBQVk7Ozs7Ozt3SEFDdkNqQix1REFBVztnREFBQzBCLElBQUksRUFBQyxDQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3dHQUszQkgsQ0FBTTtnQ0FDTE4sU0FBUyxFQUFDLENBQzRCO3NIQUVyQ2xCLGtEQUFJO29DQUFDeUIsSUFBSSxFQUFDLENBQVU7MEhBQ2xCTCxDQUFFO3dDQUFDRixTQUFTLEVBQUMsQ0FBMEM7O3dIQUNyRFEsQ0FBSTtnREFBQ1IsU0FBUyxFQUFDLENBQVc7MERBQUMsQ0FBVTs7Ozs7O3dIQUNyQ2pCLHVEQUFXO2dEQUFDMEIsSUFBSSxFQUFDLENBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRdEMsQ0FBQztHQTVEdUJoQixTQUFTO01BQVRBLFNBQVMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9CZXRDaG9pY2UuanN4PzgwZjQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgQmcgZnJvbSBcIi4uL3B1YmxpYy9iZ3BpYy5wbmdcIjtcbmltcG9ydCB7IENpcmN1bGFyIH0gZnJvbSBcIi4uL3V0aWxzL0NpcmN1bGFyQW5pbWF0aW9uXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyBHckFkZENpcmNsZSB9IGZyb20gXCJyZWFjdC1pY29ucy9nclwiO1xuaW1wb3J0IHsgZ2FtZXNMaXN0IH0gZnJvbSBcIi4uL3V0aWxzL2dhbWVMaXN0XCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5jb25zdCBCYWNrZ3JvdW5kSW1nID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgLXotMSB3LWZ1bGwgaC1mdWxsXCI+XG4gICAgICA8SW1hZ2Ugc3JjPXtCZ30gbGF5b3V0PVwiZmlsbFwiIG9iamVjdEZpdD1cImNvdmVyXCIgYWx0PVwiYmdcIiAvPlxuICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAge2BcbiAgICAgICAgICBkaXYge1xuICAgICAgICAgICAgei1pbmRleDogLTE7XG4gICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJldENob2ljZSh7IGlkIH0pIHtcbiAgY29uc3QgW2RhdGEsc2V0RGF0YV09dXNlU3RhdGUodW5kZWZpbmVkKTtcbiAgdXNlRWZmZWN0KCgpPT57XG4gICAgY29uc3QgZGF0YSA9IGdhbWVzTGlzdC5maWx0ZXIoKGVsKSA9PiBlbC5pZCA9PT0gaWQpO1xuICAgIHNldERhdGEoZGF0YSk7XG4gIH0sW10pXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIHotNSBoLVs5MHJlbV0gc206aC1bNjByZW1dICBsZzpoLVs1NXJlbV1cIj5cbiAgICAgIDxCYWNrZ3JvdW5kSW1nIC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBwYi0xNiBcIj5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiIHotNSB0ZXh0LXdoaXRlIHAtMTIgdGV4dC1jZW50ZXIgZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0zeGwgbGVhZGluZy03IHBiLTYgZm9udC1oZWFkZXJcIj5cbiAgICAgICAgICAgIEJSSU5HIFRIRSBHQU1FXG4gICAgICAgICAgPC9oMT5cblxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250LWV4dHJhbGlnaHQgdGV4dC1sZyBsZWFkaW5nLTggZm9udC1mb250Sm9zdFwiPlxuICAgICAgICAgICAgICBHYWxheHkgR3VpbGQgc2VydmVzIGFzIHRoZSBwbGF0Zm9ybSBmb3IgUGxheWVycywgR3VpbGRzLCBhbmRcbiAgICAgICAgICAgICAgU2Nob2xhcnNoaXAgTWFuYWdlcnMgdG8gY29sbGFib3JhdGUgYW5kIG1ha2UgdGhlIG1vc3Qgb3V0IG9mIHRoZWlyXG4gICAgICAgICAgICAgIE1ldGF2ZXJzZSBleHBlcmllbmNlIXtcIiBcIn1cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBsZWFkaW5nLTcgcGItNiBtdC01IGZvbnQtaGVhZGVyIHRleHQteWVsbG93LTYwMFwiPlxuICAgICAgICAgICAgICB7ZGF0YVswXS5nYW1lTmFtZX1cbiAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0zeGwgbGVhZGluZy03IHBiLTYgbWItNSBmb250LWhlYWRlciBtdC0yIHRleHQtcGluay02MDBcIj5cbiAgICAgICAgICAgICAge2RhdGFbMF0uZ2FtZVR5cGV9XG4gICAgICAgICAgICA8L2gxPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxDaXJjdWxhciAvPlxuICAgICAgICA8L3NlY3Rpb24+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIHBsYWNlLWNvbnRlbnQtY2VudGVyIFwiPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvbnQtYm9sZCBmb250LWZvbnRETSBmb250LXhsICB0ZXh0LWNlbnRlciB0ZXh0LXdoaXRlIGJnLWdyYWRpZW50LXRvLXIgZnJvbS1idG4tYmx1ZSB2aWEtYnRuLXB1cnBsZSB0by1idG4tYmx1ZSAgIFxuICAgICAgICBhbmltYXRlLWdsb3cgYmctMzAwIHAtMyByb3VuZGVkLWZ1bGxcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCJjcmVhdGVyb29tXCI+XG4gICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ3aGl0ZXNwYWNlLW5vd3JhcCBkLWZsZXgganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibXQtMiBteC0yXCI+Q3JlYXRlLVJvb20gPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxHckFkZENpcmNsZSBzaXplPVwiNDBcIiAvPlxuICAgICAgICAgICAgICA8L2gxPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9udC1ib2xkIGZvbnQtZm9udERNIGZvbnQteGwgIHRleHQtY2VudGVyIHRleHQtd2hpdGUgYmctZ3JhZGllbnQtdG8tciBmcm9tLWJ0bi1ibHVlIHZpYS1idG4tcHVycGxlIHRvLWJ0bi1ibHVlICAgXG4gICAgICAgIGFuaW1hdGUtZ2xvdyBiZy0zMDAgbXQtNCBwLTMgcm91bmRlZC1mdWxsXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8TGluayBocmVmPVwiam9pbnJvb21cIj5cbiAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cIndoaXRlc3BhY2Utbm93cmFwIGQtZmxleCBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtdC0yIG14LTJcIj5Kb2luLVJvb20gPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxHckFkZENpcmNsZSBzaXplPVwiNDBcIiAvPlxuICAgICAgICAgICAgICA8L2gxPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkltYWdlIiwiQmciLCJDaXJjdWxhciIsIkxpbmsiLCJHckFkZENpcmNsZSIsImdhbWVzTGlzdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQmFja2dyb3VuZEltZyIsImRpdiIsInNyYyIsImxheW91dCIsIm9iamVjdEZpdCIsImFsdCIsIkJldENob2ljZSIsImlkIiwidW5kZWZpbmVkIiwiZGF0YSIsInNldERhdGEiLCJmaWx0ZXIiLCJlbCIsImNsYXNzTmFtZSIsInNlY3Rpb24iLCJoMSIsInAiLCJnYW1lTmFtZSIsImdhbWVUeXBlIiwiYnV0dG9uIiwiaHJlZiIsInNwYW4iLCJzaXplIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/BetChoice.jsx\n");

/***/ })

});