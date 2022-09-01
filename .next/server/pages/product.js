"use strict";
(() => {
var exports = {};
exports.id = 345;
exports.ids = [345];
exports.modules = {

/***/ 4620:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ product),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./components/Product/ProductCard.jsx


const ProductCard = (props)=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-3",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "p-6 border rounded-xl",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "relative h-52 mb-6",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "absolute top-0 right-0 mt-4 mr-4 text-xs text-white px-2 py-1 font-semibold bg-gray-600 bg-opacity-50 rounded-md uppercase",
                            children: props.category
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            className: "w-full h-full object-cover rounded-lg",
                            src: props.images[0],
                            alt: ""
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                    className: "inline-block mb-4 text-xl",
                    children: [
                        "$",
                        props.price
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: "/product/" + props.id,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                        className: "text-green-600 mb-4 text-2xl font-semibold font-heading cursor-pointer truncate",
                        children: props.title
                    })
                }, props.id),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                    className: "mb-4 leading-relaxed truncate",
                    children: [
                        " ",
                        props.description,
                        " "
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const Product_ProductCard = (ProductCard);

// EXTERNAL MODULE: ./utils/baseUrl.jsx
var baseUrl = __webpack_require__(1242);
// EXTERNAL MODULE: ./components/Footer/Footer.jsx + 3 modules
var Footer = __webpack_require__(1155);
// EXTERNAL MODULE: ./components/Navbar/Navbar.jsx
var Navbar = __webpack_require__(9468);
// EXTERNAL MODULE: ./components/Product/PostProduct.jsx
var PostProduct = __webpack_require__(5073);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
;// CONCATENATED MODULE: ./pages/product.js






async function getServerSideProps(context) {
    const res = await fetch(`${baseUrl/* default */.Z}/items`);
    const products = await res.json();
    return {
        props: {
            products
        }
    };
}
;

const Product = ({ products  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "S\u1EA3n ph\u1EA9m"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "viewport",
                        content: "initial-scale=1.0, width=device-width"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Navbar/* default */.Z, {}),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "max-w-screen-xl mx-auto",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("section", {
                        className: "relative py-20 bg-white",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "container px-4 mx-auto",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "max-w-3xl mb-20 mx-auto text-center",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "text-xl text-green-600 font-semibold",
                                            children: "Virento"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                            className: "mt-8 mb-10 text-4xl font-semibold font-heading",
                                            children: "VIRENTO \u2013 V\xcc M\u1ED8T L\u1ED0I S\u1ED0NG B\u1EC0N V\u1EEENG"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                            className: "text-xl text-gray-400",
                                            children: [
                                                "V\u1EDBi VIRENTO, b\u1EA1n kh\xf4ng ch\u1EC9 thu\xea \u0111\u1EC3 d\xf9ng m\xe0 c\xf2n thu\xea \u0111\u1EC3 ki\u1EBFm ti\u1EC1n. ",
                                                /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                " M\u1ED9t c\xfa ch\u1EA1m \u2013 M\u1ED9t ng\xe0n l\u1EE3i \xedch."
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "flex flex-wrap -m-3 mb-16",
                                    children: products.map((product)=>/*#__PURE__*/ jsx_runtime_.jsx(Product_ProductCard, {
                                            id: product.id,
                                            title: product.title,
                                            category: product.category,
                                            description: product.description,
                                            price: product.price,
                                            images: product.images,
                                            keyword: products.keyword
                                        }, product.id)
                                    )
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "text-center",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                        className: "px-6 py-4 text-white text-sm font-semibold bg-green-600 hover:bg-green-700 rounded transition duration-200",
                                        children: "Xem th\xeam"
                                    })
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Footer/* Footer */.$, {})
                ]
            })
        ]
    });
};
/* harmony default export */ const product = (Product);


/***/ }),

/***/ 93:
/***/ ((module) => {

module.exports = require("@auth0/nextjs-auth0");

/***/ }),

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

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

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [505,61,542,73], () => (__webpack_exec__(4620)));
module.exports = __webpack_exports__;

})();