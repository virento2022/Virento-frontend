"use strict";
(() => {
var exports = {};
exports.id = 360;
exports.ids = [360];
exports.modules = {

/***/ 7560:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _id_),
  "getStaticPaths": () => (/* binding */ getStaticPaths),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./components/Footer/Footer.jsx + 3 modules
var Footer = __webpack_require__(8928);
// EXTERNAL MODULE: ./components/Navbar/Navbar.jsx
var Navbar = __webpack_require__(9468);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
;// CONCATENATED MODULE: ./components/Product/SingleProductPage.jsx


const SingleProductPage = (props)=>{
    const [defaultValue, setdefaultValue] = external_react_default().useState(0);
    function plus() {
        setdefaultValue(defaultValue + 1);
    }
    function minus() {
        setdefaultValue(defaultValue - 1);
    }
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        class: "2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            class: "flex justify-center items-center lg:flex-row flex-col gap-8",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    class: "w-full sm:w-96 md:w-8/12 lg:w-6/12 flex lg:flex-row flex-col lg:gap-8 sm:gap-6 gap-4",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            class: "w-full lg:w-8/12 bg-white flex justify-center items-center",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                src: props.images[0],
                                alt: "Wooden Chair Previw"
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            class: "w-full lg:w-4/12 grid lg:grid-cols-1 sm:grid-cols-4 grid-cols-2 gap-6",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    class: "bg-white flex justify-center items-center py-4",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: props.images[0],
                                        alt: "Wooden chair - preview 1"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    class: "bg-white flex justify-center items-center py-4",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: props.images[0],
                                        alt: "Wooden chair - preview 2"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    class: "bg-white flex justify-center items-center py-4",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: props.images[0],
                                        alt: "Wooden chair- preview 3"
                                    })
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    class: "w-full sm:w-96 md:w-8/12 lg:w-6/12 items-center",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            class: "font-normal text-base leading-4 text-gray-600",
                            children: props.category
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                            class: "font-semibold text-green-600 lg:text-4xl text-3xl lg:leading-9 leading-7np mt-4",
                            children: props.title
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            class: "flex flex-row justify-between mt-5",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    class: "dark:hidden",
                                    src: "https://tuk-cdn.s3.amazonaws.com/can-uploader/productDetail4-svg1.svg",
                                    alt: "stars"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    class: "font-normal text-base leading-4 text-gray-700 hover:underline hover:text-gray-800 duration-100 cursor-pointer",
                                    children: "22 reviews"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                            class: "font-normal text-base leading-6 text-gray-600 mt-7",
                            children: [
                                props.description,
                                "."
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                            class: "font-semibold lg:text-2xl text-green-500 text-xl lg:leading-6 leading-5 mt-6 hover:text-green-600",
                            children: [
                                "$ ",
                                props.price
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            class: "lg:mt-11 mt-10",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    class: "flex flex-row justify-between",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            class: "font-medium leading-4 text-gray-600 ",
                                            children: "Ch\u1ECDn s\u1ED1 l\u01B0\u1EE3ng"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            class: "flex",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                    onClick: minus,
                                                    class: "cursor-pointer border border-gray-300 border-r-0 w-7 h-7 flex items-center justify-center pb-1",
                                                    children: "-"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                    id: "counter",
                                                    "aria-label": "input",
                                                    class: "border border-gray-300 h-full text-center w-14 pb-1",
                                                    type: "text",
                                                    value: defaultValue
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                    onClick: plus,
                                                    class: "cursor-pointer border border-gray-300 border-l-0 w-7 h-7 flex items-center justify-center pb-1",
                                                    children: "+"
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("hr", {
                                    class: "bg-gray-200 w-full my-2"
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            class: "hover:bg-green-600 font-medium text-base leading-4 text-white bg-green-500 w-full rounded-3xl py-5 lg:mt-12 mt-6 ",
                            children: "Thu\xea"
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const Product_SingleProductPage = (SingleProductPage);

// EXTERNAL MODULE: ./utils/baseUrl.jsx
var baseUrl = __webpack_require__(1242);
;// CONCATENATED MODULE: ./pages/product/[id].js





const getStaticPaths = async ()=>{
    const res = await fetch(`${baseUrl/* default */.Z}/items`);
    const data = await res.json();
    const paths = data.map((product)=>{
        return {
            params: {
                id: product.id.toString()
            }
        };
    });
    return {
        paths,
        fallback: false
    };
};
const getStaticProps = async ({ params  })=>{
    const res = await fetch(`${baseUrl/* default */.Z}/items/${params.id}`);
    const data = await res.json();
    return {
        props: {
            product: data
        }
    };
};
const ProductDetail = ({ product  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Navbar/* default */.Z, {}),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "max-w-screen-xl mx-auto",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Product_SingleProductPage, {
                        title: product.title,
                        category: product.category,
                        description: product.description,
                        price: product.price,
                        images: product.images
                    }, product.id),
                    /*#__PURE__*/ jsx_runtime_.jsx(Footer/* Footer */.$, {})
                ]
            })
        ]
    });
};
/* harmony default export */ const _id_ = (ProductDetail);


/***/ }),

/***/ 1242:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const baseUrl = "https://virento-backend.herokuapp.com";
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseUrl);


/***/ }),

/***/ 93:
/***/ ((module) => {

module.exports = require("@auth0/nextjs-auth0");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [505,61,924], () => (__webpack_exec__(7560)));
module.exports = __webpack_exports__;

})();