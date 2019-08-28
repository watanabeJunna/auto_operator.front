module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Container.tsx":
/*!**********************************!*\
  !*** ./components/Container.tsx ***!
  \**********************************/
/*! exports provided: Container */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return Container; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Container",
  componentId: "sc-1rmyvcb-0"
})(["display:flex;width:1170px;margin:50px auto;"]);

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/json/stringify */ "core-js/library/fn/json/stringify");

/***/ }),

/***/ "./pages/account/signin.tsx":
/*!**********************************!*\
  !*** ./pages/account/signin.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Container */ "./components/Container.tsx");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! isomorphic-fetch */ "isomorphic-fetch");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "/app/pages/account/signin.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




/* harmony default export */ __webpack_exports__["default"] = (() => __jsx(_components_Container__WEBPACK_IMPORTED_MODULE_3__["Container"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}, __jsx(LoginForm, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
})));

const LoginForm = () => {
  const usernameRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
  const passwordRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
  const {
    0: authError,
    1: setAuthError
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    error: false,
    message: ''
  });
  const {
    0: usernameError,
    1: setUsernameError
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    error: false,
    message: ''
  });
  const {
    0: passwordError,
    1: setPasswordError
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    error: false,
    message: ''
  });

  const checkUsername = username => {
    if (!username) {
      return 'username is required.';
    }
  };

  const checkPassword = password => {
    if (!password) {
      return 'password is required.';
    }
  };

  const onClick = async () => {
    if (!usernameRef.current || !passwordRef.current) {
      return;
    }

    usernameRef.current.focus();
    passwordRef.current.focus();
    const usernameInputVal = usernameRef.current.value;
    const passwordInputVal = passwordRef.current.value; // check input value

    let message;
    message = checkUsername(usernameInputVal);

    if (typeof message === 'string' && message.length !== 0) {
      setUsernameError({
        error: true,
        message: message
      });
    } else {
      setUsernameError({
        error: false
      });
    }

    message = checkPassword(passwordInputVal);

    if (typeof message === 'string' && message.length !== 0) {
      setPasswordError({
        error: true,
        message: message
      });
    } else {
      setPasswordError({
        error: false
      });
    }

    if (typeof message === 'string' && message.length !== 0) {
      return;
    }

    const username = usernameInputVal;
    const password = passwordInputVal;
    let response = {
      ok: false // submit value data

    };

    try {
      response = await isomorphic_fetch__WEBPACK_IMPORTED_MODULE_4___default()('/api/signin', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()({
          username: username,
          password: password
        })
      }).then(response => response.json());
    } catch (e) {
      // leave a log
      setAuthError({
        error: true,
        message: 'Internal server error, please try again later'
      });
      return;
    }

    console.log(response.ok);

    if (response.ok) {
      window.location.href = `/account/dashboard`;
    } else {
      setAuthError({
        error: true,
        message: 'Invalid login or password.'
      });
    }
  };

  return __jsx(FormContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: undefined
  }, __jsx(FormTitle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: undefined
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    __self: undefined
  }, "Sign in")), __jsx(UsernameLabel, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: undefined
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: undefined
  }, "Username or Email")), __jsx(UsernameInput, {
    ref: usernameRef,
    error: usernameError.error,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143
    },
    __self: undefined
  }), __jsx(UsernameError, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: undefined
  }, usernameError.message), __jsx(PasswordLabel, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149
    },
    __self: undefined
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    },
    __self: undefined
  }, "Password")), __jsx(PasswordInput, {
    ref: passwordRef,
    error: passwordError.error,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152
    },
    __self: undefined
  }), __jsx(PasswordError, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155
    },
    __self: undefined
  }, passwordError.message), __jsx(AuthError, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158
    },
    __self: undefined
  }, authError.message), __jsx(SubmitButton, {
    onClick: () => onClick(),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161
    },
    __self: undefined
  }, __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162
    },
    __self: undefined
  }, "Sign in")));
}; /// Form


const FormContainer = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "signin__FormContainer",
  componentId: "sc-1nr4j94-0"
})(["font-family:'Raleway',sans-serif;padding:50px 90px 90px;border-radius:15px;margin:0 auto;justify-content:space-around;box-shadow:1px 1px 5px #9aa3ab;"]);
const FormTitle = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "signin__FormTitle",
  componentId: "sc-1nr4j94-1"
})(["font-size:42px;text-align:center;color:#446456;"]); /// Label

const LabelBaseStyle = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(["margin:0;opacity:0.7;font-size:19px;font-weight:500;"]);
const UsernameLabel = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "signin__UsernameLabel",
  componentId: "sc-1nr4j94-2"
})(["", ""], LabelBaseStyle);
const PasswordLabel = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "signin__PasswordLabel",
  componentId: "sc-1nr4j94-3"
})(["", ""], LabelBaseStyle); /// Input

const InputBaseStyle = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(["width:200px;margin-bottom:10px;border-radius:3px;border:", ";padding:8px;"], props => props.error && '1px solid red' || '1px solid #dee7ec');
const UsernameInput = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.input.withConfig({
  displayName: "signin__UsernameInput",
  componentId: "sc-1nr4j94-4"
})(["", ""], InputBaseStyle);
const PasswordInput = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.input.attrs(() => ({
  type: 'password'
})).withConfig({
  displayName: "signin__PasswordInput",
  componentId: "sc-1nr4j94-5"
})(["", ""], InputBaseStyle);
const SubmitButton = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.button.withConfig({
  displayName: "signin__SubmitButton",
  componentId: "sc-1nr4j94-6"
})(["display:block;background-color:white;font-family:'Raleway',sans-serif;font-size:1em;margin-top:1em;padding:0.5em 1em;border:1px solid #9aa3ab;border-radius:3px;opacity:0.5;transition:.5s;&:hover{opacity:1;}"]); // Error Message Area

const AuthError = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "signin__AuthError",
  componentId: "sc-1nr4j94-7"
})(["color:red;"]);
const UsernameError = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "signin__UsernameError",
  componentId: "sc-1nr4j94-8"
})(["color:red;"]);
const PasswordError = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "signin__PasswordError",
  componentId: "sc-1nr4j94-9"
})(["color:red;"]);

/***/ }),

/***/ 5:
/*!****************************************!*\
  !*** multi ./pages/account/signin.tsx ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /app/pages/account/signin.tsx */"./pages/account/signin.tsx");


/***/ }),

/***/ "core-js/library/fn/json/stringify":
/*!****************************************************!*\
  !*** external "core-js/library/fn/json/stringify" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

/***/ }),

/***/ "isomorphic-fetch":
/*!***********************************!*\
  !*** external "isomorphic-fetch" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-fetch");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=signin.js.map