"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/product/[id]",{

/***/ "./components/Product/SingleProductPage.jsx":
/*!**************************************************!*\
  !*** ./components/Product/SingleProductPage.jsx ***!
  \**************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _this = undefined;\n\n\nvar _s = $RefreshSig$();\nvar SingleProductPage = function(props) {\n    var plus = function plus() {\n        setdefaultValue(defaultValue + 1);\n    };\n    var minus = function minus() {\n        setdefaultValue(defaultValue - 1);\n    };\n    var rotate = function rotate() {\n        document.getElementById(\"rotateSVG\").classList.toggle(\"rotate-180\");\n    };\n    _s();\n    var ref = _slicedToArray(react__WEBPACK_IMPORTED_MODULE_1___default().useState(0), 2), defaultValue = ref[0], setdefaultValue = ref[1];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        class: \"2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            class: \"flex justify-center items-center lg:flex-row flex-col gap-8\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    class: \"w-full sm:w-96 md:w-8/12 lg:w-6/12 items-center\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            class: \"font-normal text-base leading-4 text-gray-600\",\n                            children: props.category\n                        }, void 0, false, {\n                            fileName: \"/home/hathai15/Desktop/Workspace/Virento-frontend/components/Product/SingleProductPage.jsx\",\n                            lineNumber: 23,\n                            columnNumber: 21\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            class: \"font-semibold text-green-600 lg:text-4xl text-3xl lg:leading-9 leading-7np mt-4\",\n                            children: props.title\n                        }, void 0, false, {\n                            fileName: \"/home/hathai15/Desktop/Workspace/Virento-frontend/components/Product/SingleProductPage.jsx\",\n                            lineNumber: 24,\n                            columnNumber: 21\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            class: \"flex flex-row justify-between mt-5\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    class: \"dark:hidden\",\n                                    src: \"https://tuk-cdn.s3.amazonaws.com/can-uploader/productDetail4-svg1.svg\",\n                                    alt: \"stars\"\n                                }, void 0, false, {\n                                    fileName: \"/home/hathai15/Desktop/Workspace/Virento-frontend/components/Product/SingleProductPage.jsx\",\n                                    lineNumber: 27,\n                                    columnNumber: 24\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    class: \"font-normal text-base leading-4 text-gray-700 hover:underline hover:text-gray-800 duration-100 cursor-pointer\",\n                                    children: \"22 reviews\"\n                                }, void 0, false, {\n                                    fileName: \"/home/hathai15/Desktop/Workspace/Virento-frontend/components/Product/SingleProductPage.jsx\",\n                                    lineNumber: 28,\n                                    columnNumber: 25\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/hathai15/Desktop/Workspace/Virento-frontend/components/Product/SingleProductPage.jsx\",\n                            lineNumber: 26,\n                            columnNumber: 21\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            class: \"font-normal text-base leading-6 text-gray-600 mt-7\",\n                            children: [\n                                props.description,\n                                \".\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/hathai15/Desktop/Workspace/Virento-frontend/components/Product/SingleProductPage.jsx\",\n                            lineNumber: 31,\n                            columnNumber: 21\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            class: \"font-semibold lg:text-2xl text-green-500 text-xl lg:leading-6 leading-5 mt-6 hover:text-green-600\",\n                            children: [\n                                \"$ \",\n                                props.price\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/hathai15/Desktop/Workspace/Virento-frontend/components/Product/SingleProductPage.jsx\",\n                            lineNumber: 32,\n                            columnNumber: 21\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            class: \"lg:mt-11 mt-10\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    class: \"flex flex-row justify-between\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            class: \"font-medium leading-4 text-gray-600 \",\n                                            children: \"Ch\\u1ECDn s\\u1ED1 l\\u01B0\\u1EE3ng\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/hathai15/Desktop/Workspace/Virento-frontend/components/Product/SingleProductPage.jsx\",\n                                            lineNumber: 36,\n                                            columnNumber: 29\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            class: \"flex\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                    onClick: minus,\n                                                    class: \"cursor-pointer border border-gray-300 border-r-0 w-7 h-7 flex items-center justify-center pb-1\",\n                                                    children: \"-\"\n                                                }, void 0, false, {\n                                                    fileName: \"/home/hathai15/Desktop/Workspace/Virento-frontend/components/Product/SingleProductPage.jsx\",\n                                                    lineNumber: 38,\n                                                    columnNumber: 33\n                                                }, _this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                    id: \"counter\",\n                                                    \"aria-label\": \"input\",\n                                                    class: \"border border-gray-300 h-full text-center w-14 pb-1\",\n                                                    type: \"text\",\n                                                    value: defaultValue\n                                                }, void 0, false, {\n                                                    fileName: \"/home/hathai15/Desktop/Workspace/Virento-frontend/components/Product/SingleProductPage.jsx\",\n                                                    lineNumber: 39,\n                                                    columnNumber: 33\n                                                }, _this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                    onClick: plus,\n                                                    class: \"cursor-pointer border border-gray-300 border-l-0 w-7 h-7 flex items-center justify-center pb-1\",\n                                                    children: \"+\"\n                                                }, void 0, false, {\n                                                    fileName: \"/home/hathai15/Desktop/Workspace/Virento-frontend/components/Product/SingleProductPage.jsx\",\n                                                    lineNumber: 40,\n                                                    columnNumber: 33\n                                                }, _this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/home/hathai15/Desktop/Workspace/Virento-frontend/components/Product/SingleProductPage.jsx\",\n                                            lineNumber: 37,\n                                            columnNumber: 29\n                                        }, _this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/hathai15/Desktop/Workspace/Virento-frontend/components/Product/SingleProductPage.jsx\",\n                                    lineNumber: 35,\n                                    columnNumber: 25\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {\n                                    class: \"bg-gray-200 w-full my-2\"\n                                }, void 0, false, {\n                                    fileName: \"/home/hathai15/Desktop/Workspace/Virento-frontend/components/Product/SingleProductPage.jsx\",\n                                    lineNumber: 43,\n                                    columnNumber: 25\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/hathai15/Desktop/Workspace/Virento-frontend/components/Product/SingleProductPage.jsx\",\n                            lineNumber: 34,\n                            columnNumber: 21\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            class: \"hover:bg-green-600 font-medium text-base leading-4 text-white bg-green-500 w-full rounded-3xl sm:w-1/2 py-5 lg:mt-12 mt-6 \",\n                            children: \"Thu\\xea\"\n                        }, void 0, false, {\n                            fileName: \"/home/hathai15/Desktop/Workspace/Virento-frontend/components/Product/SingleProductPage.jsx\",\n                            lineNumber: 46,\n                            columnNumber: 21\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/hathai15/Desktop/Workspace/Virento-frontend/components/Product/SingleProductPage.jsx\",\n                    lineNumber: 22,\n                    columnNumber: 17\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    class: \"w-full sm:w-96 md:w-8/12 lg:w-6/12 flex lg:flex-row flex-col lg:gap-8 sm:gap-6 gap-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            class: \"w-full lg:w-8/12 bg-gray-100 flex justify-center items-center\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: \"https://i.ibb.co/bRg2CJj/sam-moqadam-kvmds-Tr-GOBM-unsplash-removebg-preview-1.png\",\n                                alt: \"Wooden Chair Previw\"\n                            }, void 0, false, {\n                                fileName: \"/home/hathai15/Desktop/Workspace/Virento-frontend/components/Product/SingleProductPage.jsx\",\n                                lineNumber: 51,\n                                columnNumber: 25\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/home/hathai15/Desktop/Workspace/Virento-frontend/components/Product/SingleProductPage.jsx\",\n                            lineNumber: 50,\n                            columnNumber: 21\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            class: \"w-full lg:w-4/12 grid lg:grid-cols-1 sm:grid-cols-4 grid-cols-2 gap-6\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    class: \"bg-gray-100 flex justify-center items-center py-4\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                        src: \"https://i.ibb.co/0jX1zmR/sam-moqadam-kvmds-Tr-GOBM-unsplash-removebg-preview-1-1.png\",\n                                        alt: \"Wooden chair - preview 1\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/hathai15/Desktop/Workspace/Virento-frontend/components/Product/SingleProductPage.jsx\",\n                                        lineNumber: 55,\n                                        columnNumber: 29\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"/home/hathai15/Desktop/Workspace/Virento-frontend/components/Product/SingleProductPage.jsx\",\n                                    lineNumber: 54,\n                                    columnNumber: 25\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    class: \"bg-gray-100 flex justify-center items-center py-4\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                        src: \"https://i.ibb.co/7zv1N5Q/sam-moqadam-kvmds-Tr-GOBM-unsplash-removebg-preview-2.png\",\n                                        alt: \"Wooden chair - preview 2\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/hathai15/Desktop/Workspace/Virento-frontend/components/Product/SingleProductPage.jsx\",\n                                        lineNumber: 58,\n                                        columnNumber: 29\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"/home/hathai15/Desktop/Workspace/Virento-frontend/components/Product/SingleProductPage.jsx\",\n                                    lineNumber: 57,\n                                    columnNumber: 25\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    class: \"bg-gray-100 flex justify-center items-center py-4\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                        src: \"https://i.ibb.co/0jX1zmR/sam-moqadam-kvmds-Tr-GOBM-unsplash-removebg-preview-1-1.png\",\n                                        alt: \"Wooden chair- preview 3\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/hathai15/Desktop/Workspace/Virento-frontend/components/Product/SingleProductPage.jsx\",\n                                        lineNumber: 61,\n                                        columnNumber: 29\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"/home/hathai15/Desktop/Workspace/Virento-frontend/components/Product/SingleProductPage.jsx\",\n                                    lineNumber: 60,\n                                    columnNumber: 25\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/hathai15/Desktop/Workspace/Virento-frontend/components/Product/SingleProductPage.jsx\",\n                            lineNumber: 53,\n                            columnNumber: 21\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/hathai15/Desktop/Workspace/Virento-frontend/components/Product/SingleProductPage.jsx\",\n                    lineNumber: 49,\n                    columnNumber: 17\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/hathai15/Desktop/Workspace/Virento-frontend/components/Product/SingleProductPage.jsx\",\n            lineNumber: 20,\n            columnNumber: 13\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/home/hathai15/Desktop/Workspace/Virento-frontend/components/Product/SingleProductPage.jsx\",\n        lineNumber: 19,\n        columnNumber: 9\n    }, _this);\n};\n_s(SingleProductPage, \"ijvu4AxJHKPk7ToGTPMZCcSGLNI=\");\n_c = SingleProductPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SingleProductPage);\nvar _c;\n$RefreshReg$(_c, \"SingleProductPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Byb2R1Y3QvU2luZ2xlUHJvZHVjdFBhZ2UuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUEwQjs7QUFFMUIsSUFBTUMsaUJBQWlCLEdBQUcsU0FBQ0MsS0FBSyxFQUFLO1FBRXhCQyxJQUFJLEdBQWIsU0FBU0EsSUFBSSxHQUFHO1FBQ1pDLGVBQWUsQ0FBQ0MsWUFBWSxHQUFHLENBQUMsQ0FBQztLQUNwQztRQUVRQyxLQUFLLEdBQWQsU0FBU0EsS0FBSyxHQUFHO1FBQ2JGLGVBQWUsQ0FBQ0MsWUFBWSxHQUFHLENBQUMsQ0FBQztLQUNwQztRQUVRRSxNQUFNLEdBQWYsU0FBU0EsTUFBTSxHQUFHO1FBQ2RDLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLFdBQVcsQ0FBQyxDQUFDQyxTQUFTLENBQUNDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQztLQUN2RTs7SUFYRCxJQUF3Q1gsR0FBaUIsa0JBQWpCQSxxREFBYyxDQUFDLENBQUMsQ0FBQyxNQUFsREssWUFBWSxHQUFxQkwsR0FBaUIsR0FBdEMsRUFBRUksZUFBZSxHQUFJSixHQUFpQixHQUFyQjtJQWFwQyxxQkFFSSw4REFBQ2EsS0FBRztRQUFDQyxLQUFLLEVBQUMsd0VBQXdFO2tCQUMvRSw0RUFBQ0QsS0FBRztZQUFDQyxLQUFLLEVBQUMsNkRBQTZEOzs4QkFFcEUsOERBQUNELEtBQUc7b0JBQUNDLEtBQUssRUFBQyxpREFBaUQ7O3NDQUN4RCw4REFBQ0MsR0FBQzs0QkFBQ0QsS0FBSyxFQUFDLCtDQUErQztzQ0FBRVosS0FBSyxDQUFDYyxRQUFROzs7OztpQ0FBSztzQ0FDN0UsOERBQUNDLElBQUU7NEJBQUNILEtBQUssRUFBQyxpRkFBaUY7c0NBQUVaLEtBQUssQ0FBQ2dCLEtBQUs7Ozs7O2lDQUFNO3NDQUU5Ryw4REFBQ0wsS0FBRzs0QkFBQ0MsS0FBSyxFQUFDLG9DQUFvQzs7OENBQzVDLDhE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YWdlLmpzeD9hZGQzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgU2luZ2xlUHJvZHVjdFBhZ2UgPSAocHJvcHMpID0+IHtcbiAgICBjb25zdCBbZGVmYXVsdFZhbHVlLCBzZXRkZWZhdWx0VmFsdWVdID0gUmVhY3QudXNlU3RhdGUoMCk7XG4gICAgZnVuY3Rpb24gcGx1cygpIHtcbiAgICAgICAgc2V0ZGVmYXVsdFZhbHVlKGRlZmF1bHRWYWx1ZSArIDEpXG4gICAgfVxuICAgIFxuICAgIGZ1bmN0aW9uIG1pbnVzKCkge1xuICAgICAgICBzZXRkZWZhdWx0VmFsdWUoZGVmYXVsdFZhbHVlIC0gMSlcbiAgICB9XG4gICAgXG4gICAgZnVuY3Rpb24gcm90YXRlKCkge1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJvdGF0ZVNWR1wiKS5jbGFzc0xpc3QudG9nZ2xlKFwicm90YXRlLTE4MFwiKTtcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIChcblxuICAgICAgICA8ZGl2IGNsYXNzPVwiMnhsOmNvbnRhaW5lciAyeGw6bXgtYXV0byBsZzpweS0xNiBsZzpweC0yMCBtZDpweS0xMiBtZDpweC02IHB5LTkgcHgtNFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGxnOmZsZXgtcm93IGZsZXgtY29sIGdhcC04XCI+XG4gICAgICAgXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInctZnVsbCBzbTp3LTk2IG1kOnctOC8xMiBsZzp3LTYvMTIgaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiZm9udC1ub3JtYWwgdGV4dC1iYXNlIGxlYWRpbmctNCB0ZXh0LWdyYXktNjAwXCI+e3Byb3BzLmNhdGVnb3J5fTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzPVwiZm9udC1zZW1pYm9sZCB0ZXh0LWdyZWVuLTYwMCBsZzp0ZXh0LTR4bCB0ZXh0LTN4bCBsZzpsZWFkaW5nLTkgbGVhZGluZy03bnAgbXQtNFwiPntwcm9wcy50aXRsZX08L2gyPlxuICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IGZsZXgtcm93IGp1c3RpZnktYmV0d2VlbiBtdC01XCI+XG4gICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJkYXJrOmhpZGRlblwiIHNyYz1cImh0dHBzOi8vdHVrLWNkbi5zMy5hbWF6b25hd3MuY29tL2Nhbi11cGxvYWRlci9wcm9kdWN0RGV0YWlsNC1zdmcxLnN2Z1wiIGFsdD1cInN0YXJzXCI+PC9pbWc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImZvbnQtbm9ybWFsIHRleHQtYmFzZSBsZWFkaW5nLTQgdGV4dC1ncmF5LTcwMCBob3Zlcjp1bmRlcmxpbmUgaG92ZXI6dGV4dC1ncmF5LTgwMCBkdXJhdGlvbi0xMDAgY3Vyc29yLXBvaW50ZXJcIj4yMiByZXZpZXdzPC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImZvbnQtbm9ybWFsIHRleHQtYmFzZSBsZWFkaW5nLTYgdGV4dC1ncmF5LTYwMCAgbXQtN1wiPntwcm9wcy5kZXNjcmlwdGlvbn0uPC9wPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImZvbnQtc2VtaWJvbGQgbGc6dGV4dC0yeGwgdGV4dC1ncmVlbi01MDAgdGV4dC14bCBsZzpsZWFkaW5nLTYgbGVhZGluZy01IG10LTYgIGhvdmVyOnRleHQtZ3JlZW4tNjAwXCI+JCB7cHJvcHMucHJpY2V9PC9wPlxuICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsZzptdC0xMSBtdC0xMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZsZXggZmxleC1yb3cganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJmb250LW1lZGl1bSBsZWFkaW5nLTQgdGV4dC1ncmF5LTYwMCBcIj5DaOG7jW4gc+G7kSBsxrDhu6NuZzwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e21pbnVzfSBjbGFzcz1cImN1cnNvci1wb2ludGVyIGJvcmRlciBib3JkZXItZ3JheS0zMDAgYm9yZGVyLXItMCB3LTcgaC03IGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHBiLTFcIj4tPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cImNvdW50ZXJcIiBhcmlhLWxhYmVsPVwiaW5wdXRcIiBjbGFzcz1cImJvcmRlciBib3JkZXItZ3JheS0zMDAgaC1mdWxsIHRleHQtY2VudGVyIHctMTQgcGItMVwiIHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e2RlZmF1bHRWYWx1ZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtwbHVzfSBjbGFzcz1cImN1cnNvci1wb2ludGVyIGJvcmRlciBib3JkZXItZ3JheS0zMDAgYm9yZGVyLWwtMCB3LTcgaC03IGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHBiLTFcIj4rPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxociBjbGFzcz1cImJnLWdyYXktMjAwIHctZnVsbCBteS0yXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICBcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImhvdmVyOmJnLWdyZWVuLTYwMCBmb250LW1lZGl1bSB0ZXh0LWJhc2UgbGVhZGluZy00IHRleHQtd2hpdGUgYmctZ3JlZW4tNTAwIHctZnVsbCByb3VuZGVkLTN4bCBzbTp3LTEvMiBweS01IGxnOm10LTEyIG10LTYgXCI+VGh1w6o8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgIFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3LWZ1bGwgc206dy05NiBtZDp3LTgvMTIgbGc6dy02LzEyIGZsZXggbGc6ZmxleC1yb3cgZmxleC1jb2wgbGc6Z2FwLTggc206Z2FwLTYgZ2FwLTRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInctZnVsbCBsZzp3LTgvMTIgYmctZ3JheS0xMDAgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9pLmliYi5jby9iUmcyQ0pqL3NhbS1tb3FhZGFtLWt2bWRzLVRyLUdPQk0tdW5zcGxhc2gtcmVtb3ZlYmctcHJldmlldy0xLnBuZ1wiIGFsdD1cIldvb2RlbiBDaGFpciBQcmV2aXdcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInctZnVsbCBsZzp3LTQvMTIgZ3JpZCBsZzpncmlkLWNvbHMtMSBzbTpncmlkLWNvbHMtNCBncmlkLWNvbHMtMiBnYXAtNlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJnLWdyYXktMTAwIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHB5LTRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vaS5pYmIuY28vMGpYMXptUi9zYW0tbW9xYWRhbS1rdm1kcy1Uci1HT0JNLXVuc3BsYXNoLXJlbW92ZWJnLXByZXZpZXctMS0xLnBuZ1wiIGFsdD1cIldvb2RlbiBjaGFpciAtIHByZXZpZXcgMVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJiZy1ncmF5LTEwMCBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBweS00XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJodHRwczovL2kuaWJiLmNvLzd6djFONVEvc2FtLW1vcWFkYW0ta3ZtZHMtVHItR09CTS11bnNwbGFzaC1yZW1vdmViZy1wcmV2aWV3LTIucG5nXCIgYWx0PVwiV29vZGVuIGNoYWlyIC0gcHJldmlldyAyXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJnLWdyYXktMTAwIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHB5LTRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vaS5pYmIuY28vMGpYMXptUi9zYW0tbW9xYWRhbS1rdm1kcy1Uci1HT0JNLXVuc3BsYXNoLXJlbW92ZWJnLXByZXZpZXctMS0xLnBuZ1wiIGFsdD1cIldvb2RlbiBjaGFpci0gcHJldmlldyAzXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNpbmdsZVByb2R1Y3RQYWdlIl0sIm5hbWVzIjpbIlJlYWN0IiwiU2luZ2xlUHJvZHVjdFBhZ2UiLCJwcm9wcyIsInBsdXMiLCJzZXRkZWZhdWx0VmFsdWUiLCJkZWZhdWx0VmFsdWUiLCJtaW51cyIsInJvdGF0ZSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJ1c2VTdGF0ZSIsImRpdiIsImNsYXNzIiwicCIsImNhdGVnb3J5IiwiaDIiLCJ0aXRsZSIsImltZyIsInNyYyIsImFsdCIsImRlc2NyaXB0aW9uIiwicHJpY2UiLCJidXR0b24iLCJvbkNsaWNrIiwiaW5wdXQiLCJpZCIsImFyaWEtbGFiZWwiLCJ0eXBlIiwidmFsdWUiLCJociJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Product/SingleProductPage.jsx\n");

/***/ })

});