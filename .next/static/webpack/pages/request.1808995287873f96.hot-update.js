"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/request",{

/***/ "./components/Request/RequestCard.jsx":
/*!********************************************!*\
  !*** ./components/Request/RequestCard.jsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getStaticProps\": function() { return /* binding */ getStaticProps; }\n/* harmony export */ });\n/* harmony import */ var _Users_nguyen_Documents_Virento2022_Virento_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_nguyen_Documents_Virento2022_Virento_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_nguyen_Documents_Virento2022_Virento_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _utils_baseUrl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/baseUrl */ \"./utils/baseUrl.jsx\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\nvar _this = undefined;\n\n\n\nvar getStaticProps = function() {\n    var _ref = _asyncToGenerator(_Users_nguyen_Documents_Virento2022_Virento_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n        var res, products;\n        return _Users_nguyen_Documents_Virento2022_Virento_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    _ctx.next = 2;\n                    return fetch(\"\".concat(_utils_baseUrl__WEBPACK_IMPORTED_MODULE_3__[\"default\"], \"/items/\").concat(props.productID));\n                case 2:\n                    res = _ctx.sent;\n                    _ctx.next = 5;\n                    return res.json();\n                case 5:\n                    products = _ctx.sent;\n                    return _ctx.abrupt(\"return\", {\n                        props: {\n                            products: products\n                        }\n                    });\n                case 7:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    }));\n    return function getStaticProps() {\n        return _ref.apply(this, arguments);\n    };\n}();\nvar RequestCard = function(props, param) {\n    var products = param.products;\n    console.log(products);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"w-full\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            className: \"p-6 border rounded-xl\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                    children: [\n                        props.userFrom,\n                        \" c\\xf3 y\\xeau c\\u1EA7u thu\\xea \\u0111\\u1ED3 t\\u1EEB b\\u1EA1n\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/nguyen/Documents/Virento2022/Virento-frontend/components/Request/RequestCard.jsx\",\n                    lineNumber: 20,\n                    columnNumber: 11\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                    children: \"Accept\"\n                }, void 0, false, {\n                    fileName: \"/Users/nguyen/Documents/Virento2022/Virento-frontend/components/Request/RequestCard.jsx\",\n                    lineNumber: 23,\n                    columnNumber: 11\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                    children: \"Decline\"\n                }, void 0, false, {\n                    fileName: \"/Users/nguyen/Documents/Virento2022/Virento-frontend/components/Request/RequestCard.jsx\",\n                    lineNumber: 24,\n                    columnNumber: 11\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/nguyen/Documents/Virento2022/Virento-frontend/components/Request/RequestCard.jsx\",\n            lineNumber: 19,\n            columnNumber: 9\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/nguyen/Documents/Virento2022/Virento-frontend/components/Request/RequestCard.jsx\",\n        lineNumber: 18,\n        columnNumber: 7\n    }, _this);\n};\n_c = RequestCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (RequestCard);\nvar _c;\n$RefreshReg$(_c, \"RequestCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1JlcXVlc3QvUmVxdWVzdENhcmQuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTRDO0FBQ0Y7QUFFbkMsSUFBTUcsY0FBYztlQUFHLHFNQUFZO1lBQ2hDQyxHQUFHLEVBQ0hDLFFBQVE7Ozs7OzJCQURJQyxLQUFLLENBQUMsRUFBQyxDQUFtQkMsTUFBZSxDQUFoQ0wsc0RBQU8sRUFBQyxTQUFPLENBQWtCLFFBQWhCSyxLQUFLLENBQUNDLFNBQVMsQ0FBRSxDQUFDOztvQkFBeERKLEdBQUcsWUFBcUQ7OzJCQUN2Q0EsR0FBRyxDQUFDSyxJQUFJLEVBQUU7O29CQUEzQkosUUFBUSxZQUFtQjtpREFFMUI7d0JBQ0xFLEtBQUssRUFBRTs0QkFBRUYsUUFBUSxFQUFFQSxRQUFRO3lCQUFFO3FCQUM5Qjs7Ozs7O0tBRUo7b0JBUllGLGNBQWM7OztHQVExQixDQUFDO0FBRUYsSUFBTU8sV0FBVyxHQUFHLFNBQUNILEtBQUssU0FBaUI7UUFBZEYsUUFBUSxTQUFSQSxRQUFRO0lBQ2pDTSxPQUFPLENBQUNDLEdBQUcsQ0FBQ1AsUUFBUSxDQUFDLENBQUM7SUFFdEIscUJBQ0UsOERBQUNRLEtBQUc7UUFBQ0MsU0FBUyxFQUFDLFFBQVE7a0JBQ3JCLDRFQUFDRCxLQUFHO1lBQUNDLFNBQVMsRUFBQyx1QkFBdUI7OzhCQUNwQyw4REFBQ0MsR0FBQzs7d0JBQ0NSLEtBQUssQ0FBQ1MsUUFBUTt3QkFBQyw4REFDbEI7Ozs7Ozt5QkFBSTs4QkFDSiw4REFBQ0MsUUFBTTs4QkFBQyxRQUFNOzs7Ozt5QkFBUzs4QkFDdkIsOERBQUNBLFFBQU07OEJBQUMsU0FBTzs7Ozs7eUJBQVM7Ozs7OztpQkFDcEI7Ozs7O2FBQ0YsQ0FDTjtDQUNMO0FBZEtQLEtBQUFBLFdBQVc7QUFnQmpCLCtEQUFlQSxXQUFXLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9SZXF1ZXN0L1JlcXVlc3RDYXJkLmpzeD80M2M0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGJhc2VVcmwgZnJvbSBcIi4uLy4uL3V0aWxzL2Jhc2VVcmxcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wcyA9IGFzeW5jICgpID0+IHtcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAke2Jhc2VVcmx9L2l0ZW1zLyR7cHJvcHMucHJvZHVjdElEfWApO1xyXG4gICAgY29uc3QgcHJvZHVjdHMgPSBhd2FpdCByZXMuanNvbigpO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIHByb3BzOiB7IHByb2R1Y3RzOiBwcm9kdWN0cyB9LFxyXG4gICAgfVxyXG5cclxufTtcclxuXHJcbmNvbnN0IFJlcXVlc3RDYXJkID0gKHByb3BzLCB7cHJvZHVjdHN9KSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhwcm9kdWN0cyk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGxcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNiBib3JkZXIgcm91bmRlZC14bFwiPlxyXG4gICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgIHtwcm9wcy51c2VyRnJvbX0gY8OzIHnDqnUgY+G6p3UgdGh1w6ogxJHhu5MgdOG7qyBi4bqhbiBcclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDxidXR0b24+QWNjZXB0PC9idXR0b24+XHJcbiAgICAgICAgICA8YnV0dG9uPkRlY2xpbmU8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVxdWVzdENhcmQ7XHJcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImJhc2VVcmwiLCJnZXRTdGF0aWNQcm9wcyIsInJlcyIsInByb2R1Y3RzIiwiZmV0Y2giLCJwcm9wcyIsInByb2R1Y3RJRCIsImpzb24iLCJSZXF1ZXN0Q2FyZCIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJjbGFzc05hbWUiLCJwIiwidXNlckZyb20iLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Request/RequestCard.jsx\n");

/***/ })

});