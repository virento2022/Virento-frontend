"use strict";
(() => {
var exports = {};
exports.id = 345;
exports.ids = [345];
exports.modules = {

/***/ 496:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ product),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
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
                            src: "https://scontent.fhan3-3.fna.fbcdn.net/v/t39.30808-6/281736314_103646749028066_8874301070538351434_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=FGwgDV4PoKwAX_W76hT&_nc_ht=scontent.fhan3-3.fna&oh=00_AT8MSpv11wwOd_ZeVjc8BDAcZu9aJH9hczxYLK5QhxaTog&oe=62BC6A17",
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
                /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                    className: "text-green-600 mb-4 text-2xl font-semibold font-heading cursor-pointer",
                    children: props.title
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                    className: "mb-4 leading-relaxed",
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

;// CONCATENATED MODULE: ./utils/baseUrl.jsx
const baseUrl = "https://virento-backend.herokuapp.com";
/* harmony default export */ const utils_baseUrl = (baseUrl);

// EXTERNAL MODULE: ./components/Footer/Footer.jsx + 3 modules
var Footer = __webpack_require__(928);
// EXTERNAL MODULE: ./components/Navbar/Navbar.jsx
var Navbar = __webpack_require__(468);
;// CONCATENATED MODULE: ./pages/product.js





const getStaticProps = async ()=>{
    const res = await fetch(`${utils_baseUrl}/items`);
    const data = await res.json();
    return {
        props: {
            products: data
        }
    };
};
const Product = ({ products  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
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
                                            children: "Virento Shopping Center"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                            className: "text-blueGray-400 mt-8 mb-10 text-4xl font-semibold font-heading",
                                            children: "Lorem ipsum dolor sit amet consectutar domor at elis"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            className: "text-xl text-blueGray-400",
                                            children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque massa nibh, pulvinar vitae aliquet nec, accumsan aliquet orci."
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "flex flex-wrap -m-3 mb-16",
                                    children: products.map((product)=>/*#__PURE__*/ jsx_runtime_.jsx(Product_ProductCard, {
                                            title: product.title,
                                            category: product.category,
                                            description: product.description,
                                            price: product.price
                                        }, product.id)
                                    )
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "text-center",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                        className: "px-6 py-4 text-white text-sm font-semibold bg-green-600 hover:bg-green-700 rounded transition duration-200",
                                        children: "View More Products"
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

/***/ 796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 14:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 20:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 52:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 422:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 689:
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
var __webpack_exports__ = __webpack_require__.X(0, [505,61,924], () => (__webpack_exec__(496)));
module.exports = __webpack_exports__;

})();