"use strict";
exports.id = 73;
exports.ids = [73];
exports.modules = {

/***/ 5073:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_baseUrl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1242);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(93);
/* harmony import */ var _auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_4__);






const Form = ()=>{
    const { user  } = (0,_auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_4__.useUser)();
    const [state, setState] = react__WEBPACK_IMPORTED_MODULE_1___default().useState({
        title: "",
        category: "",
        price: 0,
        condition: "",
        statusItem: true,
        description: "",
        ownerid: "",
        keyword: "",
        file: null
    });
    function handleChange(e) {
        if (e.target.files) {
            setState({
                ...state,
                [e.target.name]: e.target.files[0],
                "ownerid": user.email
            });
        } else {
            setState({
                ...state,
                [e.target.name]: e.target.value
            });
        }
    }
    async function handleSubmit(e1) {
        e1.preventDefault();
        let formData = new FormData();
        for (let [key, value] of Object.entries(state)){
            formData.append(key, value);
        }
        // Use fetch or axios to submit the form
        await axios__WEBPACK_IMPORTED_MODULE_2___default().post(`${_utils_baseUrl__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z}/items`, formData).then(({ data  })=>{
            const { redirect  } = data;
            // Redirect used for reCAPTCHA and/or thank you page
            // window.location.href = redirect;
            // console.log(redirect);
            next_router__WEBPACK_IMPORTED_MODULE_3___default().push("/product");
        }).catch((e)=>{
            window.location.href = e.response.data.redirect;
        });
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "block p-6 rounded-lg shadow-lg bg-white w-4/5 mx-30 mx-10 h-100",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("form", {
            onSubmit: handleSubmit,
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "border-emeral d-400 border-2 rounded-2x1 text-green-600 text-xl drop-shadow-xl",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("legend", {
                        className: "mx-32 my-4 p-1 text-3xl text-center font-bold",
                        children: "\u0110\u0103ng t\u1EA3i s\u1EA3n ph\u1EA9m"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                        for: "title",
                        className: "",
                        children: "T\xean S\u1EA3n Ph\u1EA9m"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        name: "title",
                        type: "text",
                        placeholder: "Enter title",
                        onChange: handleChange,
                        value: state.title,
                        required: true
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                        for: "category",
                        className: "",
                        children: "Danh m\u1EE5c s\u1EA3n ph\u1EA9m"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                        name: "category",
                        type: "text",
                        placeholder: "Enter category",
                        onChange: handleChange,
                        value: state.category,
                        required: true,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                selected: true,
                                children: "Ch\u1ECDn danh m\u1EE5c"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                children: "Th\u1EDDi trang"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                children: "C\xf4ng ngh\u1EC7"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                children: "Du l\u1ECBch"
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                        for: "price",
                        className: "",
                        children: "Gi\xe1 cho thu\xea"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        name: "price",
                        type: "number",
                        placeholder: "Enter price",
                        onChange: handleChange,
                        value: state.price,
                        required: true
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                        for: "condition",
                        className: "",
                        children: "T\xecnh tr\u1EA1ng s\u1EA3n ph\u1EA9m"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        name: "condition",
                        placeholder: "Enter condition",
                        onChange: handleChange,
                        value: state.condition,
                        required: true
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                        for: "description",
                        className: "",
                        children: "Mi\xeau t\u1EA3 s\u1EA3n ph\u1EA9m"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                        name: "description",
                        placeholder: "Enter description",
                        onChange: handleChange,
                        value: state.description,
                        required: true
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        type: "file",
                        name: "file",
                        onChange: handleChange
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        name: "bot-field",
                        type: "text",
                        onChange: handleChange,
                        style: {
                            display: "none"
                        }
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        type: "submit",
                        className: "my-4 py-4 px-12 bg-green-300 text-green-800 border-2 hover:bg-green-500 hover:cursor-pointer rounded-full",
                        children: "\u0110\u0103ng s\u1EA3n ph\u1EA9m"
                    })
                ]
            })
        })
    });
};
const PostProduct = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Form, {})
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PostProduct);


/***/ }),

/***/ 1242:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const baseUrl = "https://virento-backend.herokuapp.com";
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseUrl);


/***/ })

};
;