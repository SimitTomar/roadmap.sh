webpackHotUpdate("static/development/pages/[roadmap].js",{

/***/ "./content/roadmaps/4-android/landscape.md":
/*!*************************************************!*\
  !*** ./content/roadmaps/4-android/landscape.md ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MDXContent; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mdx-js/react */ "./node_modules/@mdx-js/react/dist/esm.js");


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;


/* @jsx mdx */

var makeShortcode = function makeShortcode(name) {
  return function MDXDefaultShortcode(props) {
    console.warn("Component " + name + " was not imported, exported, or provided by MDXProvider as global scope");
    return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("div", props);
  };
};

var layoutProps = {};
var MDXLayout = "wrapper";
function MDXContent(_ref) {
  var components = _ref.components,
      props = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["components"]);

  return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(MDXLayout, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, layoutProps, props, {
    components: components,
    mdxType: "MDXLayout"
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "The intent of this guide is to give you an idea about the Android development landscape and to help guide your learning if you are confused. Before we start, please note that the roadmap is opinionated, and you might have different opinions than those of the author. Having said that, ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "p"
  }, {
    "href": "https://github.com/kamranahmedse/roadmap.sh/issues/new"
  }), "we would love to hear your opinions"), " and incorporate them in the roadmap if suitable."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "There are multiple ways to develop applications for the android; you can go down the path of hybrid application development where ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "p"
  }, {
    "href": "https://flutter.dev/"
  }), "flutter"), ", ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "p"
  }, {
    "href": "https://reactnative.dev/"
  }), "react-native"), ", or ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "p"
  }, {
    "href": "https://www.nativescript.org/"
  }), "NativeScript"), " are the most common contenders. Flutter uses Dart, whereas React Native and Native Script rely on JavaScript. Answering the question of hybrid vs native is out of the scope of this roadmap. This roadmap is focused on the native Android apps development but if you are interested in learning any hybrid framework, my personal preference is ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "p"
  }, {
    "href": "https://reactnative.dev"
  }), "react-native"), " and I would recommend you to checkout the ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "p"
  }, {
    "href": "/frontend"
  }), "Frontend Developer Roadmap"), "."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h2", null, "Note"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h2", null, "Pick a Language"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "For the languages, you can develop android apps either by using Kotlin or Java."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("img", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "p"
  }, {
    "src": "/roadmaps/android/pick-language.png",
    "alt": null
  }))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "Although, you can use both ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "p"
  }, {
    "href": "https://en.wikipedia.org/wiki/Kotlin_(programming_language)"
  }), "Kotlin"), " and ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "p"
  }, {
    "href": "https://en.wikipedia.org/wiki/Java_(programming_language)"
  }), "Java"), " to develop native android apps, ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "p"
  }, {
    "href": "https://android-developers.googleblog.com/2019/05/google-io-2019-empowering-developers-to-build-experiences-on-Android-Play.html"
  }), "Google announced in 2019"), " to make Kotlin the preferred way of developing android applications and if you were to start learning android development, Kotlin should be your language of choice."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h3", null, "Learn the Fundamentals"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "Get the basic understanding of Kotlin, su "));
}
;
MDXContent.isMDXComponent = true;

/***/ })

})
//# sourceMappingURL=[roadmap].js.357abdb503c8a7905db9.hot-update.js.map