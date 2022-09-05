"use strict";
(() => {
var exports = {};
exports.id = 695;
exports.ids = [695];
exports.modules = {

/***/ 7181:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ notification)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./components/Navbar/Navbar.jsx
var Navbar = __webpack_require__(9468);
// EXTERNAL MODULE: ./components/Footer/Footer.jsx + 3 modules
var Footer = __webpack_require__(1155);
// EXTERNAL MODULE: ./utils/baseUrl.jsx
var baseUrl = __webpack_require__(1242);
// EXTERNAL MODULE: external "@auth0/nextjs-auth0"
var nextjs_auth0_ = __webpack_require__(93);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
;// CONCATENATED MODULE: ./components/Notification/NotificationCard.jsx

const NotificationCard = (props)=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "w-full",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "p-6 inline-flex border rounded-xl",
            children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: "my-4 py-4 px-24 text-xl",
                children: props.description
            })
        })
    });
};
/* harmony default export */ const Notification_NotificationCard = (NotificationCard);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
;// CONCATENATED MODULE: ./pages/notification.js








Notification_NotificationCard;

function Request() {
    const { user  } = (0,nextjs_auth0_.useUser)();
    const [notifications, setNotification] = external_react_default().useState([]);
    (0,external_react_.useEffect)(()=>{
        async function loadData() {
            if (user) {
                const response = await fetch(`${baseUrl/* default */.Z}/notification/${user.email}`);
                const notificationList = await response.json();
                setNotification(notificationList);
            }
        }
        loadData();
    }, [
        user,
        notifications
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "Th\xf4ng b\xe1o"
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
                                        children: "Th\xf4ng b\xe1o \u0111\u01A1n h\xe0ng"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "flex flex-wrap -m-3 mb-16",
                                    children: notifications.map((notification)=>/*#__PURE__*/ jsx_runtime_.jsx(Notification_NotificationCard, {
                                            description: notification.description
                                        }, notification.id)
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
}
/* harmony default export */ const notification = (Request);


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

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

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
var __webpack_exports__ = __webpack_require__.X(0, [505,61,542], () => (__webpack_exec__(7181)));
module.exports = __webpack_exports__;

})();