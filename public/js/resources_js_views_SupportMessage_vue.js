"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_SupportMessage_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/SupportMessage.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/SupportMessage.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_auth_otherrequests__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @services/auth/otherrequests */ "./resources/js/services/auth/otherrequests.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  mounted: function mounted() {
    var _this = this;

    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _services_auth_otherrequests__WEBPACK_IMPORTED_MODULE_1__["default"].get("support-messages-thread-admin").then(function (e) {
                return e.data;
              });

            case 2:
              _this.threads = _context.sent;
              setInterval(function () {
                _services_auth_otherrequests__WEBPACK_IMPORTED_MODULE_1__["default"].get("support-messages-thread-admin").then(function (e) {
                  return e.data;
                }).then(function (e) {
                  _this.threads = [];
                  _this.threads = e;
                });
              }, 4000);

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  data: function data() {
    return {
      threads: [],
      selectedItem: null,
      messages: [],
      messagePages: 0,
      messagePage: 1,
      fetchMore: true,
      inputDisabled: false,
      messageBox: ''
    };
  },
  watch: {
    selectedItem: function selectedItem() {
      this.fetchMore = true;
      this.messages = [];
      this.messagePages = 0;
      this.messagePage = 0;
      this.getMessage();
    }
  },
  computed: {
    user: function user() {
      return this.$store.getters.loggedInUser;
    }
  },
  methods: {
    getMessage: function getMessage() {
      var _this2 = this;

      //if(this.fetchMore==true)
      {
        _services_auth_otherrequests__WEBPACK_IMPORTED_MODULE_1__["default"].get('support-messages/' + this.threads[this.selectedItem].id).then(function (e) {
          return e.data;
        }).then(function (e) {
          _this2.messages = e;
        });
      }
    },
    readMessage: function readMessage(e) {
      if (e.keyCode == 13 && e.shiftKey) {
        //send message
        e.preventDefault();
        var msg = this.messageBox;
        this.sendMessage(msg);
        return false;
      }
    },
    sendMessage: function sendMessage(msg) {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
        var formData;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this3.inputDisabled = true;
                formData = new FormData();
                formData.append('message', msg);
                _context2.next = 5;
                return _services_auth_otherrequests__WEBPACK_IMPORTED_MODULE_1__["default"].post('support-messages/' + _this3.threads[_this3.selectedItem].id, formData).then(function (e) {
                  return e.data.data;
                }).then(function (e) {
                  _this3.messages.push(e);
                });

              case 5:
                _this3.messageBox = '';
                _this3.inputDisabled = false;

              case 7:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    }
  }
});

/***/ }),

/***/ "./resources/js/services/auth/otherrequests.js":
/*!*****************************************************!*\
  !*** ./resources/js/services/auth/otherrequests.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");

var otherrequestservice = /*#__PURE__*/function () {
  function otherrequestservice() {
    _classCallCheck(this, otherrequestservice);
  }

  _createClass(otherrequestservice, [{
    key: "get",
    value: function get(uri) {
      return axios.get("/api/".concat(uri)).then(function (response) {
        return response;
      })["catch"](function (error) {
        return error;
      });
    }
  }, {
    key: "post",
    value: function post(uri, formData) {
      return axios.post("/api/".concat(uri), formData).then(function (response) {
        return response;
      })["catch"](function (error) {
        return error;
      });
    }
  }]);

  return otherrequestservice;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new otherrequestservice());

/***/ }),

/***/ "./resources/js/views/SupportMessage.vue":
/*!***********************************************!*\
  !*** ./resources/js/views/SupportMessage.vue ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SupportMessage_vue_vue_type_template_id_42dca817___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SupportMessage.vue?vue&type=template&id=42dca817& */ "./resources/js/views/SupportMessage.vue?vue&type=template&id=42dca817&");
/* harmony import */ var _SupportMessage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SupportMessage.vue?vue&type=script&lang=js& */ "./resources/js/views/SupportMessage.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SupportMessage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SupportMessage_vue_vue_type_template_id_42dca817___WEBPACK_IMPORTED_MODULE_0__.render,
  _SupportMessage_vue_vue_type_template_id_42dca817___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/SupportMessage.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/SupportMessage.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/views/SupportMessage.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SupportMessage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SupportMessage.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/SupportMessage.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SupportMessage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/SupportMessage.vue?vue&type=template&id=42dca817&":
/*!******************************************************************************!*\
  !*** ./resources/js/views/SupportMessage.vue?vue&type=template&id=42dca817& ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SupportMessage_vue_vue_type_template_id_42dca817___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SupportMessage_vue_vue_type_template_id_42dca817___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SupportMessage_vue_vue_type_template_id_42dca817___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SupportMessage.vue?vue&type=template&id=42dca817& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/SupportMessage.vue?vue&type=template&id=42dca817&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/SupportMessage.vue?vue&type=template&id=42dca817&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/SupportMessage.vue?vue&type=template&id=42dca817& ***!
  \*********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "v-row",
        { attrs: { "no-gutters": "" } },
        [
          _c(
            "v-col",
            { staticClass: "pa-4", attrs: { cols: "3" } },
            [
              _c(
                "v-list",
                { attrs: { elevation: "3" } },
                [
                  _c(
                    "v-list-item-group",
                    {
                      attrs: { color: "primary" },
                      model: {
                        value: _vm.selectedItem,
                        callback: function ($$v) {
                          _vm.selectedItem = $$v
                        },
                        expression: "selectedItem",
                      },
                    },
                    _vm._l(_vm.threads, function (chat) {
                      return _c(
                        "v-list-item",
                        { key: chat.id },
                        [
                          _c(
                            "v-list-item-avatar",
                            [
                              _c("v-img", {
                                attrs: {
                                  src:
                                    chat.user_id == _vm.user.id
                                      ? chat.to.image_url
                                      : chat.user.image_url,
                                },
                              }),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-list-item-content",
                            [
                              _c("v-list-item-title", {
                                domProps: {
                                  textContent: _vm._s(
                                    chat.user_id == _vm.user.id
                                      ? chat.to.name
                                      : chat.user.name
                                  ),
                                },
                              }),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-list-item-icon",
                            [
                              _c(
                                "v-badge",
                                {
                                  attrs: {
                                    content: chat.messages_count,
                                    value: chat.messages_count,
                                    color: "green",
                                    overlap: "",
                                  },
                                },
                                [
                                  _c("v-icon", [
                                    _vm._v(
                                      "\n                                    mdi-message-outline\n                                "
                                    ),
                                  ]),
                                ],
                                1
                              ),
                            ],
                            1
                          ),
                        ],
                        1
                      )
                    }),
                    1
                  ),
                ],
                1
              ),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-col",
            { staticClass: "pa-4", attrs: { cols: "9" } },
            [
              _c(
                "v-list",
                _vm._l(_vm.messages, function (message) {
                  return _c(
                    "v-list-item",
                    { key: message.id },
                    [
                      message.user_id != _vm.user.id
                        ? _c(
                            "v-list-item-avatar",
                            [
                              _c("v-img", {
                                attrs: { src: message.user.image_url },
                              }),
                            ],
                            1
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _c(
                        "v-list-item-content",
                        [
                          _c("v-list-item-title", {
                            class:
                              message.user_id == _vm.user.id
                                ? "text-right"
                                : "",
                            domProps: { innerHTML: _vm._s(message.message) },
                          }),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      message.user_id == _vm.user.id
                        ? _c(
                            "v-list-item-avatar",
                            [
                              _c("v-img", {
                                attrs: { src: message.user.image_url },
                              }),
                            ],
                            1
                          )
                        : _vm._e(),
                    ],
                    1
                  )
                }),
                1
              ),
              _vm._v(" "),
              parseInt(_vm.selectedItem) >= 0
                ? _c(
                    "v-row",
                    [
                      _c(
                        "v-col",
                        { attrs: { cols: "12", sm: "12" } },
                        [
                          _c("v-textarea", {
                            attrs: {
                              clearable: "",
                              disabled: _vm.inputDisabled,
                              label: "Type Message",
                              "auto-grow": "",
                              outlined: "",
                              rows: "1",
                              "row-height": "15",
                              hint: "Shift+Enter to Send",
                              "persistent-hint": "",
                            },
                            on: { keydown: _vm.readMessage },
                            model: {
                              value: _vm.messageBox,
                              callback: function ($$v) {
                                _vm.messageBox = $$v
                              },
                              expression: "messageBox",
                            },
                          }),
                        ],
                        1
                      ),
                    ],
                    1
                  )
                : _vm._e(),
            ],
            1
          ),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);