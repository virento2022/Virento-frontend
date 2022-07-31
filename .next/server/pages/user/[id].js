"use strict";
(() => {
var exports = {};
exports.id = 922;
exports.ids = [922];
exports.modules = {

/***/ 2386:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _id_)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./components/Footer/Footer.jsx + 3 modules
var Footer = __webpack_require__(8928);
// EXTERNAL MODULE: ./components/Navbar/Navbar.jsx
var Navbar = __webpack_require__(9468);
// EXTERNAL MODULE: external "@auth0/nextjs-auth0"
var nextjs_auth0_ = __webpack_require__(93);
;// CONCATENATED MODULE: ./components/Profile/ProfileDetails.jsx


const ProfileDetails = ()=>{
    const { user  } = (0,nextjs_auth0_.useUser)();
    if (user) {
        return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "flex mt-5 items-center justify-center",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "xl:w-10/12 w-full px-8",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "xl:px-24",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "flex justify-center items-center ",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    src: user.picture,
                                    className: "w-32 h-32",
                                    alt: "display avatar",
                                    role: "img"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "pt-5 text-center",
                                children: user.name
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "px-5 py-4 bg-gray-100 rounded-lg flex items-center justify-between mt-7",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "flex items-center",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "flex-shrink-0",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                    width: "24",
                                                    height: "24",
                                                    viewBox: "0 0 24 24",
                                                    fill: "none",
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                        d: "M19 9.99999H20C20.2652 9.99999 20.5196 10.1054 20.7071 10.2929C20.8946 10.4804 21 10.7348 21 11V21C21 21.2652 20.8946 21.5196 20.7071 21.7071C20.5196 21.8946 20.2652 22 20 22H4C3.73478 22 3.48043 21.8946 3.29289 21.7071C3.10536 21.5196 3 21.2652 3 21V11C3 10.7348 3.10536 10.4804 3.29289 10.2929C3.48043 10.1054 3.73478 9.99999 4 9.99999H5V8.99999C5 8.08074 5.18106 7.17049 5.53284 6.32121C5.88463 5.47193 6.40024 4.70026 7.05025 4.05025C7.70026 3.40023 8.47194 2.88462 9.32122 2.53284C10.1705 2.18105 11.0807 1.99999 12 1.99999C12.9193 1.99999 13.8295 2.18105 14.6788 2.53284C15.5281 2.88462 16.2997 3.40023 16.9497 4.05025C17.5998 4.70026 18.1154 5.47193 18.4672 6.32121C18.8189 7.17049 19 8.08074 19 8.99999V9.99999ZM17 9.99999V8.99999C17 7.67391 16.4732 6.40214 15.5355 5.46446C14.5979 4.52678 13.3261 3.99999 12 3.99999C10.6739 3.99999 9.40215 4.52678 8.46447 5.46446C7.52678 6.40214 7 7.67391 7 8.99999V9.99999H17ZM11 14V18H13V14H11Z",
                                                        fill: "#4B5563"
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: "text-sm text-gray-800 pl-3",
                                                children: "We take privacy issues seriously. You can be sure that your personal data is securely protected."
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                        className: "md:block hidden focus:outline-none focus:ring-2 focus:ring-gray-700 rounded",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                            "aria-label": "Close this banner",
                                            width: "20",
                                            height: "20",
                                            viewBox: "0 0 20 20",
                                            fill: "none",
                                            xmlns: "http://www.w3.org/2000/svg",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                d: "M15.8337 5.34166L14.6587 4.16666L10.0003 8.825L5.34199 4.16666L4.16699 5.34166L8.82533 10L4.16699 14.6583L5.34199 15.8333L10.0003 11.175L14.6587 15.8333L15.8337 14.6583L11.1753 10L15.8337 5.34166Z",
                                                fill: "#79808F"
                                            })
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "mt-16 w-full border-b border-gray-200 pb-16",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: " w-100 mx-auto",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "md:flex items-center lg:mt-0 mt-4",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "md:w-64",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                                            className: "text-sm leading-none text-gray-800",
                                                            id: "firstName",
                                                            children: "Full Name"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                            type: "name",
                                                            tabindex: "0",
                                                            className: "w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800",
                                                            "aria-labelledby": "firstName",
                                                            placeholder: user.name
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "md:w-64 md:ml-12 md:mt-0 mt-4",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                                            className: "text-sm leading-none text-gray-800",
                                                            id: "lastName",
                                                            children: "Nickname"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                            type: "name",
                                                            tabindex: "0",
                                                            className: "w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800",
                                                            "aria-labelledby": "lastName",
                                                            placeholder: user.nickname
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "md:flex items-center mt-8",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "md:w-64",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                                            className: "text-sm leading-none text-gray-800",
                                                            id: "emailAddress",
                                                            children: "Email Address"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                            type: "email",
                                                            tabindex: "0",
                                                            className: "w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800",
                                                            "aria-labelledby": "emailAddress",
                                                            placeholder: user.email
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "md:w-64 md:ml-12 md:mt-0 mt-4",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                                            className: "text-sm leading-none text-gray-800",
                                                            id: "phone",
                                                            children: "Phone number"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                            type: "name",
                                                            tabindex: "0",
                                                            className: "w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800",
                                                            "aria-labelledby": "phone",
                                                            placeholder: "123-1234567"
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                })
            })
        });
    }
};
/* harmony default export */ const Profile_ProfileDetails = (ProfileDetails);

;// CONCATENATED MODULE: external "next/router"
const router_namespaceObject = require("next/router");
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./pages/user/[id].js







const ProfilePage = ()=>{
    const router = (0,router_namespaceObject.useRouter)();
    const { user  } = (0,nextjs_auth0_.useUser)();
    (0,external_react_.useEffect)(()=>{
        if (!user) router.push("/");
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Navbar/* default */.Z, {}),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "max-w-screen-xl mx-auto",
                children: /*#__PURE__*/ jsx_runtime_.jsx(Profile_ProfileDetails, {})
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Footer/* Footer */.$, {})
        ]
    });
};
/* harmony default export */ const _id_ = (ProfilePage);


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
var __webpack_exports__ = __webpack_require__.X(0, [505,61,924], () => (__webpack_exec__(2386)));
module.exports = __webpack_exports__;

})();