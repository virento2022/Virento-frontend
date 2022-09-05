"use strict";
(() => {
var exports = {};
exports.id = 800;
exports.ids = [800];
exports.modules = {

/***/ 904:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ request)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./components/Navbar/Navbar.jsx
var Navbar = __webpack_require__(9468);
// EXTERNAL MODULE: ./components/Footer/Footer.jsx + 3 modules
var Footer = __webpack_require__(1155);
// EXTERNAL MODULE: ./utils/baseUrl.jsx
var baseUrl = __webpack_require__(1242);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2167);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
var router_default = /*#__PURE__*/__webpack_require__.n(router_);
;// CONCATENATED MODULE: ./components/Request/RequestCard.jsx





const RequestCard = (props)=>{
    const { 0: accept , 1: setAccept  } = (0,external_react_.useState)({
        userFrom: props.userFrom,
        description: `${props.userTo} đã đồng ý yêu cầu thuê sản phẩm ${props.productTitle} từ bạn `
    });
    const { 0: decline , 1: setDecline  } = (0,external_react_.useState)({
        userFrom: props.userFrom,
        description: `${props.userTo} đã từ chối yêu cầu thuê sản phẩm ${props.productTitle} từ bạn `
    });
    const acceptBtn = async ()=>{
        await external_axios_default()["delete"](`${baseUrl/* default */.Z}/request/${props.id}`);
        await external_axios_default().post(`${baseUrl/* default */.Z}/notification`, accept).then(({ data  })=>{
            const { redirect  } = data;
            router_default().push("/request");
        });
    };
    const declineBtn = async (e)=>{
        await external_axios_default()["delete"](`${baseUrl/* default */.Z}/request/${props.id}`);
        await external_axios_default().post(`${baseUrl/* default */.Z}/notification`, decline).then(({ data  })=>{
            const { redirect  } = data;
            router_default().push("/request");
        });
    };
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "w-full",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "p-6 inline-flex border rounded-xl",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                    className: "my-4 py-4 px-24 text-xl",
                    children: [
                        props.userFrom,
                        " c\xf3 y\xeau c\u1EA7u thu\xea ",
                        props.productTitle,
                        " t\u1EEB b\u1EA1n"
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                    onClick: acceptBtn,
                    className: "mx-5 my-4 py-4 px-16 bg-green-300 text-green-800 border-2 hover:bg-green-500 hover:cursor-pointer rounded-full",
                    children: "\u0110\u1ED3ng \xfd"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                    onClick: declineBtn,
                    className: "mx-5 my-4 py-4 px-16 bg-red-300 text-green-800 border-2 hover:bg-red-500 hover:cursor-pointer rounded-full",
                    children: "T\u1EEB ch\u1ED1i"
                })
            ]
        })
    });
};
/* harmony default export */ const Request_RequestCard = (RequestCard);

;// CONCATENATED MODULE: ./components/Request/SingleRequestCard.jsx


const SingleRequestCard = (props)=>{
    return /*#__PURE__*/ _jsxs("p", {
        children: [
            "You have a notification from ",
            props.title
        ]
    });
};
/* harmony default export */ const Request_SingleRequestCard = ((/* unused pure expression or super */ null && (SingleRequestCard)));

// EXTERNAL MODULE: external "@auth0/nextjs-auth0"
var nextjs_auth0_ = __webpack_require__(93);
;// CONCATENATED MODULE: external "autoprefixer"
const external_autoprefixer_namespaceObject = require("autoprefixer");
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
;// CONCATENATED MODULE: ./pages/request.js












// export const getStaticProps = async () => {
//   // const { user } = useUser();
//   // console.log(user);
//     const res = await fetch(`${baseUrl}/request`);
//     const requests = await res.json();
//     return {
//       props: { requests },
//     }
// };
// const getRequest = async ({userRequest}) => {
//   const requests = await fetch(`${baseUrl}/request/${userRequest}`).then((res) =>
//     res.json()
//   );
//   // const requests = await res.json();
//   // console.log(requests)
//   return requests;
// };
function Request() {
    // const { user } = useUser();
    // if (user) {
    //   const request = getRequest(user.email);
    //   // console.log(requests);
    //   const requests = request.then((res) => res.json());
    //   console.log(requests);
    const { user  } = (0,nextjs_auth0_.useUser)();
    const [requests, setRequests] = external_react_default().useState([]);
    (0,external_react_.useEffect)(()=>{
        async function loadData() {
            if (user) {
                const response = await fetch(`${baseUrl/* default */.Z}/request/${user.email}`);
                const requestList = await response.json();
                setRequests(requestList);
            }
        }
        loadData();
    }, [
        user,
        requests
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "\u0110\u01A1n h\xe0ng"
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
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "max-w-3xl mb-20 mx-auto text-center",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "text-xl text-green-600 font-semibold",
                                        children: "\u0110\u01A1n h\xe0ng c\u1EE7a t\xf4i"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "flex flex-wrap -m-3 mb-16",
                                    children: requests.length !== 0 ? requests.map((request)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(Request_RequestCard, {
                                                    productID: request.productid,
                                                    productTitle: request.producttitle,
                                                    userFrom: request.userfrom,
                                                    userTo: request.userto,
                                                    id: request.id
                                                }, request.id),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "text-center",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                        className: "px-6 py-4 text-white text-sm font-semibold bg-green-600 hover:bg-green-700 rounded transition duration-200",
                                                        children: "Xem th\xeam \u0111\u01A1n h\xe0ng"
                                                    })
                                                })
                                            ]
                                        })
                                    ) : /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "text-center",
                                        children: "B\u1EA1n hi\u1EC7n t\u1EA1i kh\xf4ng c\xf3 y\xeau c\u1EA7u cho thu\xea"
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
}
/* harmony default export */ const request = (Request);


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
var __webpack_exports__ = __webpack_require__.X(0, [505,61,542], () => (__webpack_exec__(904)));
module.exports = __webpack_exports__;

})();