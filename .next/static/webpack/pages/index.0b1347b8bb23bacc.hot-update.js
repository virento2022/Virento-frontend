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

/***/ "./components/Homepage/Categories/Categories.jsx":
/*!*******************************************************!*\
  !*** ./components/Homepage/Categories/Categories.jsx ***!
  \*******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _CategoryCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CategoryCard */ \"./components/Homepage/Categories/CategoryCard.jsx\");\nvar _this = undefined;\n\n\nvar Categories = function() {\n    var goNext = function goNext() {\n        defaultTransform = defaultTransform - 398;\n        var slider = document.getElementById(\"slider\");\n        if (Math.abs(defaultTransform) >= slider.scrollWidth / 1.7) defaultTransform = 0;\n        slider.style.transform = \"translateX(\" + defaultTransform + \"px)\";\n    };\n    var goPrev = function goPrev() {\n        var slider = document.getElementById(\"slider\");\n        if (Math.abs(defaultTransform) === 0) defaultTransform = 0;\n        else defaultTransform = defaultTransform + 398;\n        slider.style.transform = \"translateX(\" + defaultTransform + \"px)\";\n    };\n    var defaultTransform = 0;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex items-center justify-center w-full h-full py-24 sm:py-8 px-4\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"w-full relative flex items-center justify-center\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: goPrev,\n                    className: \"absolute z-30 left-0 ml-10 cursor-pointer\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                        width: \"8\",\n                        height: \"14\",\n                        viewBox: \"0 0 8 14\",\n                        fill: \"none\",\n                        xmlns: \"http://www.w3.org/2000/svg\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                            d: \"M7 1L1 7L7 13\",\n                            stroke: \"currentColor\",\n                            \"stroke-width\": \"2\",\n                            \"stroke-linecap\": \"round\",\n                            \"stroke-linejoin\": \"round\"\n                        }, void 0, false, {\n                            fileName: \"/home/hathai15/Desktop/Workspace/Virento-frontend/components/Homepage/Categories/Categories.jsx\",\n                            lineNumber: 24,\n                            columnNumber: 25\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/home/hathai15/Desktop/Workspace/Virento-frontend/components/Homepage/Categories/Categories.jsx\",\n                        lineNumber: 23,\n                        columnNumber: 21\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/home/hathai15/Desktop/Workspace/Virento-frontend/components/Homepage/Categories/Categories.jsx\",\n                    lineNumber: 22,\n                    columnNumber: 17\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"w-full h-full mx-auto overflow-x-hidden overflow-y-hidden\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        id: \"slider\",\n                        className: \"h-full flex lg:gap-8 md:gap-6 gap-14 items-center justify-start transition ease-out duration-700\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_CategoryCard__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                                fileName: \"/home/hathai15/Desktop/Workspace/Virento-frontend/components/Homepage/Categories/Categories.jsx\",\n                                lineNumber: 29,\n                                columnNumber: 25\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_CategoryCard__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                                fileName: \"/home/hathai15/Desktop/Workspace/Virento-frontend/components/Homepage/Categories/Categories.jsx\",\n                                lineNumber: 30,\n                                columnNumber: 25\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_CategoryCard__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                                fileName: \"/home/hathai15/Desktop/Workspace/Virento-frontend/components/Homepage/Categories/Categories.jsx\",\n                                lineNumber: 31,\n                                columnNumber: 25\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_CategoryCard__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                                fileName: \"/home/hathai15/Desktop/Workspace/Virento-frontend/components/Homepage/Categories/Categories.jsx\",\n                                lineNumber: 32,\n                                columnNumber: 25\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_CategoryCard__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                                fileName: \"/home/hathai15/Desktop/Workspace/Virento-frontend/components/Homepage/Categories/Categories.jsx\",\n                                lineNumber: 33,\n                                columnNumber: 25\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_CategoryCard__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                                fileName: \"/home/hathai15/Desktop/Workspace/Virento-frontend/components/Homepage/Categories/Categories.jsx\",\n                                lineNumber: 34,\n                                columnNumber: 25\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_CategoryCard__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                                fileName: \"/home/hathai15/Desktop/Workspace/Virento-frontend/components/Homepage/Categories/Categories.jsx\",\n                                lineNumber: 35,\n                                columnNumber: 25\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_CategoryCard__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                                fileName: \"/home/hathai15/Desktop/Workspace/Virento-frontend/components/Homepage/Categories/Categories.jsx\",\n                                lineNumber: 36,\n                                columnNumber: 25\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_CategoryCard__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                                fileName: \"/home/hathai15/Desktop/Workspace/Virento-frontend/components/Homepage/Categories/Categories.jsx\",\n                                lineNumber: 37,\n                                columnNumber: 25\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/hathai15/Desktop/Workspace/Virento-frontend/components/Homepage/Categories/Categories.jsx\",\n                        lineNumber: 28,\n                        columnNumber: 21\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/home/hathai15/Desktop/Workspace/Virento-frontend/components/Homepage/Categories/Categories.jsx\",\n                    lineNumber: 27,\n                    columnNumber: 17\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: goNext,\n                    className: \"absolute z-30 right-0 mr-10 focus:outline-none\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                        width: \"8\",\n                        height: \"14\",\n                        viewBox: \"0 0 8 14\",\n                        fill: \"none\",\n                        xmlns: \"http://www.w3.org/2000/svg\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                            d: \"M1 1L7 7L1 13\",\n                            stroke: \"currentColor\",\n                            \"stroke-width\": \"2\",\n                            \"stroke-linecap\": \"round\",\n                            \"stroke-linejoin\": \"round\"\n                        }, void 0, false, {\n                            fileName: \"/home/hathai15/Desktop/Workspace/Virento-frontend/components/Homepage/Categories/Categories.jsx\",\n                            lineNumber: 42,\n                            columnNumber: 25\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/home/hathai15/Desktop/Workspace/Virento-frontend/components/Homepage/Categories/Categories.jsx\",\n                        lineNumber: 41,\n                        columnNumber: 21\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/home/hathai15/Desktop/Workspace/Virento-frontend/components/Homepage/Categories/Categories.jsx\",\n                    lineNumber: 40,\n                    columnNumber: 17\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/hathai15/Desktop/Workspace/Virento-frontend/components/Homepage/Categories/Categories.jsx\",\n            lineNumber: 21,\n            columnNumber: 13\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/home/hathai15/Desktop/Workspace/Virento-frontend/components/Homepage/Categories/Categories.jsx\",\n        lineNumber: 20,\n        columnNumber: 9\n    }, _this);\n};\n_c = Categories;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Categories);\nvar _c;\n$RefreshReg$(_c, \"Categories\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0hvbWVwYWdlL0NhdGVnb3JpZXMvQ2F0ZWdvcmllcy5qc3guanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBOztBQUEwQztBQUUxQyxJQUFNQyxVQUFVLEdBQUcsV0FBTTtRQUdaQyxNQUFNLEdBQWYsU0FBU0EsTUFBTSxHQUFHO1FBQ2RDLGdCQUFnQixHQUFHQSxnQkFBZ0IsR0FBRyxHQUFHLENBQUM7UUFDMUMsSUFBSUMsTUFBTSxHQUFHQyxRQUFRLENBQUNDLGNBQWMsQ0FBQyxRQUFRLENBQUM7UUFDOUMsSUFBSUMsSUFBSSxDQUFDQyxHQUFHLENBQUNMLGdCQUFnQixDQUFDLElBQUlDLE1BQU0sQ0FBQ0ssV0FBVyxHQUFHLEdBQUcsRUFBRU4sZ0JBQWdCLEdBQUcsQ0FBQyxDQUFDO1FBQ2pGQyxNQUFNLENBQUNNLEtBQUssQ0FBQ0MsU0FBUyxHQUFHLGFBQWEsR0FBR1IsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDO0tBQ3JFO1FBQ1FTLE1BQU0sR0FBZixTQUFTQSxNQUFNLEdBQUc7UUFDZCxJQUFJUixNQUFNLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLFFBQVEsQ0FBQztRQUM5QyxJQUFJQyxJQUFJLENBQUNDLEdBQUcsQ0FBQ0wsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLEVBQUVBLGdCQUFnQixHQUFHLENBQUMsQ0FBQzthQUN0REEsZ0JBQWdCLEdBQUdBLGdCQUFnQixHQUFHLEdBQUcsQ0FBQztRQUMvQ0MsTUFBTSxDQUFDTSxLQUFLLENBQUNDLFNBQVMsR0FBRyxhQUFhLEdBQUdSLGdCQUFnQixHQUFHLEtBQUssQ0FBQztLQUNyRTtJQVpELElBQUlBLGdCQUFnQixHQUFHLENBQUM7SUFjeEIscUJBQ0ksOERBQUNVLEtBQUc7UUFBQ0MsU0FBUyxFQUFDLG1FQUFtRTtrQkFDOUUsNEVBQUNELEtBQUc7WUFBQ0MsU0FBUyxFQUFDLGtEQUFrRDs7OEJBQzdELDhEQUFDQyxRQUFNO29CQUFDQyxPQUFPLEVBQUVKLE1BQU07b0JBQUVFLFNBQVMsRUFBQywyQ0FBMkM7OEJBQzFFLDRFQUFDRyxLQUFHO3dCQUFDQyxLQUFLLEVBQUMsR0FBRzt3QkFBQ0MsTUFBTSxFQUFDLElBQUk7d0JBQUNDLE9BQU8sRUFBQyxVQUFVO3dCQUFDQyxJQUFJLEVBQUMsTUFBTTt3QkFBQ0MsS0FBSyxFQUFDLDRCQUE0QjtrQ0FDeEYsNEVBQUNDLE1BQUk7NEJBQUNDLENBQUMsRUFBQyxlQUFlOzRCQUFDQyxNQUFNLEVBQUMsY0FBYzs0QkFBQ0MsY0FBWSxFQUFDLEdBQUc7NEJBQUNDLGdCQUFjLEVBQUMsT0FBTzs0QkFBQ0MsaUJBQWUsRUFBQyxPQUFPOzs7OztpQ0FBRzs7Ozs7NkJBQzlHOzs7Ozt5QkFDRDs4QkFDVCw4REFBQ2YsS0FBRztvQkFBQ0MsU0FBUyxFQUFDLDJEQUEyRDs4QkFDdEUsNEVBQUNELEtBQUc7d0JBQUNnQixFQUFFLEVBQUMsUUFBUTt3QkFBQ2YsU0FBUyxFQUFDLGtHQUFrRzs7MENBQ3pILDhEQUFDZCxxREFBWTs7OztxQ0FBRTswQ0FDZiw4REFBQ0EscURBQVk7Ozs7cUNBQUU7MENBQ2YsOERBQUNBLHFEQUFZOzs7O3FDQUFFOzBDQUNmLDhEQUFDQSxxREFBWTs7OztxQ0FBRTswQ0FDZiw4REFBQ0EscURBQVk7Ozs7cUNBQUU7MENBQ2YsOERBQUNBLHFEQUFZOzs7O3FDQUFFOzBDQUNmLDhEQUFDQSxxREFBWTs7OztxQ0FBRTswQ0FDZiw4REFBQ0EscURBQVk7Ozs7cUNBQUU7MENBQ2YsOERBQUNBLHFEQUFZOzs7O3FDQUFFOzs7Ozs7NkJBQ2I7Ozs7O3lCQUNKOzhCQUNOLDhEQUFDZSxRQUFNO29CQUFDQyxPQUFPLEVBQUVkLE1BQU07b0JBQUVZLFNBQVMsRUFBQyxnREFBZ0Q7OEJBQy9FLDRFQUFDRyxLQUFHO3dCQUFDQyxLQUFLLEVBQUMsR0FBRzt3QkFBQ0MsTUFBTSxFQUFDLElBQUk7d0JBQUNDLE9BQU8sRUFBQyxVQUFVO3dCQUFDQyxJQUFJLEVBQUMsTUFBTTt3QkFBQ0MsS0FBSyxFQUFDLDRCQUE0QjtrQ0FDeEYsNEVBQUNDLE1BQUk7NEJBQUNDLENBQUMsRUFBQyxlQUFlOzRCQUFDQyxNQUFNLEVBQUMsY0FBYzs0QkFBQ0MsY0FBWSxFQUFDLEdBQUc7NEJBQUNDLGdCQUFjLEVBQUMsT0FBTzs0QkFBQ0MsaUJBQWUsRUFBQyxPQUFPOzs7OztpQ0FBRzs7Ozs7NkJBQzlHOzs7Ozt5QkFDRDs7Ozs7O2lCQUNQOzs7OzthQUNKLENBQ1Q7Q0FDSjtBQTdDSzNCLEtBQUFBLFVBQVU7QUErQ2hCLCtEQUFlQSxVQUFVIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvSG9tZXBhZ2UvQ2F0ZWdvcmllcy9DYXRlZ29yaWVzLmpzeD83NWIzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDYXRlZ29yeUNhcmQgZnJvbSBcIi4vQ2F0ZWdvcnlDYXJkXCI7XG5cbmNvbnN0IENhdGVnb3JpZXMgPSAoKSA9PiB7XG5cbiAgICBsZXQgZGVmYXVsdFRyYW5zZm9ybSA9IDA7XG4gICAgZnVuY3Rpb24gZ29OZXh0KCkge1xuICAgICAgICBkZWZhdWx0VHJhbnNmb3JtID0gZGVmYXVsdFRyYW5zZm9ybSAtIDM5ODtcbiAgICAgICAgdmFyIHNsaWRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2xpZGVyXCIpO1xuICAgICAgICBpZiAoTWF0aC5hYnMoZGVmYXVsdFRyYW5zZm9ybSkgPj0gc2xpZGVyLnNjcm9sbFdpZHRoIC8gMS43KSBkZWZhdWx0VHJhbnNmb3JtID0gMDtcbiAgICAgICAgc2xpZGVyLnN0eWxlLnRyYW5zZm9ybSA9IFwidHJhbnNsYXRlWChcIiArIGRlZmF1bHRUcmFuc2Zvcm0gKyBcInB4KVwiO1xuICAgIH1cbiAgICBmdW5jdGlvbiBnb1ByZXYoKSB7XG4gICAgICAgIHZhciBzbGlkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNsaWRlclwiKTtcbiAgICAgICAgaWYgKE1hdGguYWJzKGRlZmF1bHRUcmFuc2Zvcm0pID09PSAwKSBkZWZhdWx0VHJhbnNmb3JtID0gMDtcbiAgICAgICAgZWxzZSBkZWZhdWx0VHJhbnNmb3JtID0gZGVmYXVsdFRyYW5zZm9ybSArIDM5ODtcbiAgICAgICAgc2xpZGVyLnN0eWxlLnRyYW5zZm9ybSA9IFwidHJhbnNsYXRlWChcIiArIGRlZmF1bHRUcmFuc2Zvcm0gKyBcInB4KVwiO1xuICAgIH1cblxuICAgIHJldHVybiggICAgICAgIFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHctZnVsbCBoLWZ1bGwgcHktMjQgc206cHktOCBweC00XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCByZWxhdGl2ZSBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17Z29QcmV2fSBjbGFzc05hbWU9XCJhYnNvbHV0ZSB6LTMwIGxlZnQtMCBtbC0xMCBjdXJzb3ItcG9pbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8c3ZnIHdpZHRoPVwiOFwiIGhlaWdodD1cIjE0XCIgdmlld0JveD1cIjAgMCA4IDE0XCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTcgMUwxIDdMNyAxM1wiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIHN0cm9rZS13aWR0aD1cIjJcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBoLWZ1bGwgbXgtYXV0byBvdmVyZmxvdy14LWhpZGRlbiBvdmVyZmxvdy15LWhpZGRlblwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwic2xpZGVyXCIgY2xhc3NOYW1lPVwiaC1mdWxsIGZsZXggbGc6Z2FwLTggbWQ6Z2FwLTYgZ2FwLTE0IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LXN0YXJ0IHRyYW5zaXRpb24gZWFzZS1vdXQgZHVyYXRpb24tNzAwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2F0ZWdvcnlDYXJkLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxDYXRlZ29yeUNhcmQvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPENhdGVnb3J5Q2FyZC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2F0ZWdvcnlDYXJkLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxDYXRlZ29yeUNhcmQvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPENhdGVnb3J5Q2FyZC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2F0ZWdvcnlDYXJkLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxDYXRlZ29yeUNhcmQvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPENhdGVnb3J5Q2FyZC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17Z29OZXh0fSBjbGFzc05hbWU9XCJhYnNvbHV0ZSB6LTMwIHJpZ2h0LTAgbXItMTAgZm9jdXM6b3V0bGluZS1ub25lXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzdmcgd2lkdGg9XCI4XCIgaGVpZ2h0PVwiMTRcIiB2aWV3Qm94PVwiMCAwIDggMTRcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMSAxTDcgN0wxIDEzXCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgc3Ryb2tlLXdpZHRoPVwiMlwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2F0ZWdvcmllcyJdLCJuYW1lcyI6WyJDYXRlZ29yeUNhcmQiLCJDYXRlZ29yaWVzIiwiZ29OZXh0IiwiZGVmYXVsdFRyYW5zZm9ybSIsInNsaWRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJNYXRoIiwiYWJzIiwic2Nyb2xsV2lkdGgiLCJzdHlsZSIsInRyYW5zZm9ybSIsImdvUHJldiIsImRpdiIsImNsYXNzTmFtZSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJzdmciLCJ3aWR0aCIsImhlaWdodCIsInZpZXdCb3giLCJmaWxsIiwieG1sbnMiLCJwYXRoIiwiZCIsInN0cm9rZSIsInN0cm9rZS13aWR0aCIsInN0cm9rZS1saW5lY2FwIiwic3Ryb2tlLWxpbmVqb2luIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Homepage/Categories/Categories.jsx\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Homepage_Introduction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Homepage/Introduction */ \"./components/Homepage/Introduction.jsx\");\n/* harmony import */ var _components_Homepage_Pros__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Homepage/Pros */ \"./components/Homepage/Pros.jsx\");\n/* harmony import */ var _components_Homepage_Categories_Categories__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Homepage/Categories/Categories */ \"./components/Homepage/Categories/Categories.jsx\");\n/* harmony import */ var _components_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Navbar/Navbar */ \"./components/Navbar/Navbar.jsx\");\n/* harmony import */ var _components_Footer_Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Footer/Footer */ \"./components/Footer/Footer.jsx\");\n\n\n\n\n\n\nfunction Home() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"/home/hathai15/Desktop/Workspace/Virento-frontend/pages/index.js\",\n                lineNumber: 10,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"max-w-screen-xl mx-auto\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Homepage_Introduction__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                        fileName: \"/home/hathai15/Desktop/Workspace/Virento-frontend/pages/index.js\",\n                        lineNumber: 12,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Homepage_Pros__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                        fileName: \"/home/hathai15/Desktop/Workspace/Virento-frontend/pages/index.js\",\n                        lineNumber: 13,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Homepage_Categories_Categories__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                        fileName: \"/home/hathai15/Desktop/Workspace/Virento-frontend/pages/index.js\",\n                        lineNumber: 14,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Footer_Footer__WEBPACK_IMPORTED_MODULE_5__.Footer, {}, void 0, false, {\n                        fileName: \"/home/hathai15/Desktop/Workspace/Virento-frontend/pages/index.js\",\n                        lineNumber: 15,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/hathai15/Desktop/Workspace/Virento-frontend/pages/index.js\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n};\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQThEO0FBQ2hCO0FBQ3VCO0FBQ3JCO0FBQ0k7QUFFckMsU0FBU0ssSUFBSSxHQUFHO0lBQzdCLHFCQUNFOzswQkFDRSw4REFBQ0YsaUVBQU07Ozs7b0JBQUU7MEJBQ1QsOERBQUNHLEtBQUc7Z0JBQUNDLFNBQVMsRUFBQyx5QkFBeUI7O2tDQUN0Qyw4REFBQ1AseUVBQVk7Ozs7NEJBQUU7a0NBQ2YsOERBQUNDLGlFQUFJOzs7OzRCQUFFO2tDQUNQLDhEQUFDQyxrRkFBVTs7Ozs0QkFBRTtrQ0FDYiw4REFBQ0UsNkRBQU07Ozs7NEJBQUU7Ozs7OztvQkFDTDs7b0JBQ0wsQ0FDSjtDQUNGO0FBWnVCQyxLQUFBQSxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEludHJvZHVjdGlvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9Ib21lcGFnZS9JbnRyb2R1Y3Rpb25cIlxuaW1wb3J0IFByb3MgZnJvbSBcIi4uL2NvbXBvbmVudHMvSG9tZXBhZ2UvUHJvc1wiXG5pbXBvcnQgQ2F0ZWdvcmllcyBmcm9tIFwiLi4vY29tcG9uZW50cy9Ib21lcGFnZS9DYXRlZ29yaWVzL0NhdGVnb3JpZXNcIlxuaW1wb3J0IE5hdmJhciBmcm9tIFwiLi4vY29tcG9uZW50cy9OYXZiYXIvTmF2YmFyXCJcbmltcG9ydCB7IEZvb3RlciB9IGZyb20gXCIuLi9jb21wb25lbnRzL0Zvb3Rlci9Gb290ZXJcIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8TmF2YmFyLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctc2NyZWVuLXhsIG14LWF1dG9cIj4gIFxuICAgICAgICA8SW50cm9kdWN0aW9uLz5cbiAgICAgICAgPFByb3MvPlxuICAgICAgICA8Q2F0ZWdvcmllcy8+XG4gICAgICAgIDxGb290ZXIvPlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJJbnRyb2R1Y3Rpb24iLCJQcm9zIiwiQ2F0ZWdvcmllcyIsIk5hdmJhciIsIkZvb3RlciIsIkhvbWUiLCJkaXYiLCJjbGFzc05hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});