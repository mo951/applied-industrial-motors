"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_Menus_Form_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Menus/Form.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Menus/Form.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_auth_default__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @services/auth/default */ "./resources/js/services/auth/default.js");
/* harmony import */ var _services_auth_otherrequests__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/auth/otherrequests */ "./resources/js/services/auth/otherrequests.js");


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

var brandservice = new _services_auth_default__WEBPACK_IMPORTED_MODULE_1__["default"]('menus');

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "auth.menus.add",
  watch: {},
  mounted: function mounted() {
    var _this = this;

    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
      var categories, res;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _services_auth_otherrequests__WEBPACK_IMPORTED_MODULE_2__["default"].get('categories-parents').then(function (e) {
                return e.data.data;
              });

            case 2:
              categories = _context.sent;
              _this.categories = categories;

              if (!_this.$route.params.id) {
                _context.next = 14;
                break;
              }

              _context.next = 7;
              return brandservice.get(_this.form.id);

            case 7:
              res = _context.sent;
              _this.menuitems = res.menuitems ? res.menuitems : [];
              _this.initialCategory = res.category_id ? res.category_id : 0;
              _this.form = {
                title: res.title ? res.title : '',
                priority: res.priority ? res.priority : '',
                uri: res.priority ? res.uri : '',
                category_id: res.category_id ? res.category_id : 0,
                is_active: res.is_active == 1 ? true : false,
                id: _this.$route.params.id
              };

              _this.bread.push({
                text: "Edit",
                to: {
                  name: "auth.menus.edit",
                  params: {
                    id: _this.$route.params.id
                  }
                },
                disabled: false,
                exact: true
              });

              _context.next = 15;
              break;

            case 14:
              _this.bread.push({
                text: "Add",
                to: {
                  name: "auth.menus.add"
                },
                disabled: false,
                exact: true
              });

            case 15:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  methods: {
    resetError: function resetError() {
      this.errors = {
        title: [],
        priority: [],
        is_active: [],
        category_id: [],
        uri: []
      };
    },
    addpermission: function () {
      var _addpermission = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
        var formdata, res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                this.resetError();

                if (!this.$refs.form.validate()) {
                  _context2.next = 21;
                  break;
                }

                this.btnloading = true;
                formdata = new FormData();
                formdata.append("title", this.form.title);
                formdata.append("priority", this.form.priority);
                formdata.append("uri", this.form.uri);
                formdata.append("category_id", this.form.category_id);
                formdata.append("menu_items", JSON.stringify(this.menuitems));
                formdata.append("is_active", this.form.is_active == true ? 1 : 0);
                this.btnloading = false;

                if (!(this.form.id > 0)) {
                  _context2.next = 17;
                  break;
                }

                _context2.next = 14;
                return brandservice.update(formdata, this.form.id);

              case 14:
                res = _context2.sent;
                _context2.next = 20;
                break;

              case 17:
                _context2.next = 19;
                return brandservice.create(formdata);

              case 19:
                res = _context2.sent;

              case 20:
                if (!res.status) {
                  if (res.data.title) {
                    this.errors.title = res.data.title;
                  }

                  if (res.data.priority) {
                    this.errors.priority = res.data.priority;
                  }

                  if (res.data.is_active) {
                    this.errors.is_active = res.data.is_active;
                  }

                  if (res.data.is_active) {
                    this.errors.uri = res.data.uri;
                  } //errors here

                } else {
                  //suuccess here
                  this.$router.push({
                    name: "auth.menus.listing"
                  });
                }

              case 21:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function addpermission() {
        return _addpermission.apply(this, arguments);
      }

      return addpermission;
    }(),
    addMenuItem: function addMenuItem() {
      this.menuitems.push({
        category_id: null,
        priority: ''
      });
    },
    deleteMenuItem: function deleteMenuItem(index) {
      this.menuitems.splice(index, 1);
    },
    updateValudCategory: function updateValudCategory(e) {
      this.form.category_id = e;
    }
  },
  computed: {
    user: function user() {
      return this.$store.getters.loggedInUser;
    }
  },
  data: function data() {
    return {
      menuitems: [],
      getmenuitems: [],
      initialCategory: 0,
      categories: [],
      form: {
        id: this.$route.params.id ? this.$route.params.id : 0,
        title: '',
        priority: '',
        uri: '',
        category_id: 0,
        is_active: true
      },
      errors: {
        title: [],
        priority: [],
        uri: [],
        is_active: [],
        category_id: []
      },
      bread: [{
        text: "Dashboard",
        to: {
          name: "auth.dashboard"
        },
        disabled: false,
        exact: true
      }, {
        text: "Menus",
        to: {
          name: "auth.menus.listing"
        },
        disabled: false,
        exact: true
      }],
      loading: false,
      btnloading: false,
      rules: {
        required: function required(value) {
          return !!value || "Required.";
        }
      }
    };
  }
});

/***/ }),

/***/ "./resources/js/services/auth/default.js":
/*!***********************************************!*\
  !*** ./resources/js/services/auth/default.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");

var defaultservice = /*#__PURE__*/function () {
  function defaultservice(baseuri) {
    _classCallCheck(this, defaultservice);

    // Constructor
    this.baseuri = baseuri;
  }

  _createClass(defaultservice, [{
    key: "getlist",
    value: function getlist(params) {
      return axios.get("/api/".concat(this.baseuri).concat(params !== null && params !== void 0 ? params : '')).then(function (response) {
        return response.data;
      })["catch"](function (error) {
        return error;
      });
    }
  }, {
    key: "create",
    value: function () {
      var _create = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(formData) {
        var res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return axios.post('/api/' + this.baseuri, formData).then(function (e) {
                  return {
                    status: 1,
                    data: e.data.data
                  };
                })["catch"](function (e) {
                  return {
                    status: 0,
                    data: e.response.data.errors
                  };
                });

              case 2:
                res = _context.sent;
                return _context.abrupt("return", res);

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function create(_x) {
        return _create.apply(this, arguments);
      }

      return create;
    }()
  }, {
    key: "delete",
    value: function _delete(_ref) {
      var query = _ref.query,
          id = _ref.id;
      return axios["delete"]("/api/".concat(this.baseuri, "/").concat(id));
    }
  }, {
    key: "get",
    value: function get(id) {
      return axios.get("/api/".concat(this.baseuri, "/").concat(id)).then(function (e) {
        return e.data.data;
      });
    }
  }, {
    key: "getProductData",
    value: function getProductData(brand_id, item_type_id) {
      return axios.get("/api/".concat(this.baseuri, "/").concat(brand_id, "/").concat(item_type_id)).then(function (response) {
        return response.data;
      })["catch"](function (error) {
        return error;
      });
    }
  }, {
    key: "update",
    value: function () {
      var _update = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2(formData, id) {
        var res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                formData.append('_method', 'put');
                _context2.next = 3;
                return axios.post('/api/' + this.baseuri + '/' + id, formData).then(function (e) {
                  return {
                    status: 1,
                    data: e.data.data
                  };
                })["catch"](function (e) {
                  return {
                    status: 0,
                    data: e.response.data.errors
                  };
                });

              case 3:
                res = _context2.sent;
                return _context2.abrupt("return", res);

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function update(_x2, _x3) {
        return _update.apply(this, arguments);
      }

      return update;
    }()
  }, {
    key: "getQrcode",
    value: function () {
      var _getQrcode = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3(params) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return axios({
                  url: '/api/' + this.baseuri,
                  method: 'GET',
                  responseType: 'text/plain'
                }).then(function (response) {
                  return response.data;
                });

              case 2:
                return _context3.abrupt("return", _context3.sent);

              case 3:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function getQrcode(_x4) {
        return _getQrcode.apply(this, arguments);
      }

      return getQrcode;
    }()
  }]);

  return defaultservice;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (defaultservice);

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

/***/ "./resources/js/views/Menus/Form.vue":
/*!*******************************************!*\
  !*** ./resources/js/views/Menus/Form.vue ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Form_vue_vue_type_template_id_48acec04___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Form.vue?vue&type=template&id=48acec04& */ "./resources/js/views/Menus/Form.vue?vue&type=template&id=48acec04&");
/* harmony import */ var _Form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Form.vue?vue&type=script&lang=js& */ "./resources/js/views/Menus/Form.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Form_vue_vue_type_template_id_48acec04___WEBPACK_IMPORTED_MODULE_0__.render,
  _Form_vue_vue_type_template_id_48acec04___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Menus/Form.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/Menus/Form.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/js/views/Menus/Form.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Form.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Menus/Form.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Menus/Form.vue?vue&type=template&id=48acec04&":
/*!**************************************************************************!*\
  !*** ./resources/js/views/Menus/Form.vue?vue&type=template&id=48acec04& ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_template_id_48acec04___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_template_id_48acec04___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_template_id_48acec04___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Form.vue?vue&type=template&id=48acec04& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Menus/Form.vue?vue&type=template&id=48acec04&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Menus/Form.vue?vue&type=template&id=48acec04&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Menus/Form.vue?vue&type=template&id=48acec04& ***!
  \*****************************************************************************************************************************************************************************************************************/
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
    { staticClass: "elevation-10" },
    [
      _c("v-breadcrumbs", {
        attrs: { items: _vm.bread },
        scopedSlots: _vm._u([
          {
            key: "divider",
            fn: function () {
              return [_c("v-icon", [_vm._v("mdi-forward")])]
            },
            proxy: true,
          },
        ]),
      }),
      _vm._v(" "),
      _c(
        "v-row",
        { staticClass: "pa-10 rounded", attrs: { "no-gutters": "" } },
        [
          _c(
            "v-col",
            { attrs: { cols: "12", sm: "12" } },
            [
              _c(
                "v-form",
                {
                  ref: "form",
                  attrs: { "lazy-validation": "" },
                  model: {
                    value: _vm.loading,
                    callback: function ($$v) {
                      _vm.loading = $$v
                    },
                    expression: "loading",
                  },
                },
                [
                  _c(
                    "v-row",
                    [
                      _c(
                        "v-col",
                        { staticClass: "pb-0", attrs: { cols: "6", sm: "6" } },
                        [
                          _c("v-text-field", {
                            attrs: {
                              "error-messages": _vm.errors.title,
                              label: "Title",
                              rules: [_vm.rules.required],
                            },
                            model: {
                              value: _vm.form.title,
                              callback: function ($$v) {
                                _vm.$set(_vm.form, "title", $$v)
                              },
                              expression: "form.title",
                            },
                          }),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        { staticClass: "pb-0", attrs: { cols: "6", sm: "6" } },
                        [
                          _c("v-text-field", {
                            attrs: {
                              rules: [_vm.rules.required],
                              "error-messages": _vm.errors.priority,
                              label: "Priority",
                              type: "number",
                              hint: "Must be a unique value. Form will not be submitted if this value is not unique.",
                            },
                            model: {
                              value: _vm.form.priority,
                              callback: function ($$v) {
                                _vm.$set(_vm.form, "priority", $$v)
                              },
                              expression: "form.priority",
                            },
                          }),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        { staticClass: "pb-0", attrs: { cols: "6", sm: "6" } },
                        [
                          _c("v-select", {
                            attrs: {
                              items: _vm.categories,
                              label: "Select Category",
                              "item-text": "name",
                              "item-value": "id",
                              rules: [_vm.rules.required],
                            },
                            model: {
                              value: _vm.form.category_id,
                              callback: function ($$v) {
                                _vm.$set(_vm.form, "category_id", $$v)
                              },
                              expression: "form.category_id",
                            },
                          }),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        { staticClass: "pb-0", attrs: { cols: "6", sm: "6" } },
                        [
                          _c("v-text-field", {
                            attrs: {
                              "error-messages": _vm.errors.uri,
                              label: "URI",
                              hint: "If this field is left empty, a category value will be considered.",
                            },
                            model: {
                              value: _vm.form.uri,
                              callback: function ($$v) {
                                _vm.$set(_vm.form, "uri", $$v)
                              },
                              expression: "form.uri",
                            },
                          }),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        {
                          staticClass: "pb-0",
                          attrs: { cols: "12", sm: "12" },
                        },
                        [
                          _c("v-simple-table", {
                            scopedSlots: _vm._u([
                              {
                                key: "default",
                                fn: function () {
                                  return [
                                    _c("thead", [
                                      _c("tr", [
                                        _c("th", { staticClass: "text-left" }, [
                                          _vm._v(
                                            "\n                                            Category\n                                        "
                                          ),
                                        ]),
                                        _vm._v(" "),
                                        _c("th", { staticClass: "text-left" }, [
                                          _vm._v(
                                            "\n                                            Periority\n                                        "
                                          ),
                                        ]),
                                        _vm._v(" "),
                                        _c("th", { staticClass: "text-left" }),
                                      ]),
                                    ]),
                                    _vm._v(" "),
                                    _c(
                                      "tbody",
                                      _vm._l(
                                        _vm.menuitems,
                                        function (menuitem, menuitemK) {
                                          return _c("tr", { key: menuitemK }, [
                                            _c(
                                              "td",
                                              [
                                                _c("v-select", {
                                                  attrs: {
                                                    items: _vm.categories,
                                                    label: "Select Category",
                                                    "item-text": "name",
                                                    "item-value": "id",
                                                    rules: [_vm.rules.required],
                                                  },
                                                  model: {
                                                    value: menuitem.category_id,
                                                    callback: function ($$v) {
                                                      _vm.$set(
                                                        menuitem,
                                                        "category_id",
                                                        $$v
                                                      )
                                                    },
                                                    expression:
                                                      "menuitem.category_id",
                                                  },
                                                }),
                                              ],
                                              1
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "td",
                                              [
                                                _c("v-text-field", {
                                                  attrs: {
                                                    type: "number",
                                                    min: "1",
                                                    max: "100",
                                                    rules: [_vm.rules.required],
                                                  },
                                                  model: {
                                                    value: menuitem.priority,
                                                    callback: function ($$v) {
                                                      _vm.$set(
                                                        menuitem,
                                                        "priority",
                                                        $$v
                                                      )
                                                    },
                                                    expression:
                                                      "menuitem.priority",
                                                  },
                                                }),
                                              ],
                                              1
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "td",
                                              [
                                                _c(
                                                  "v-btn",
                                                  {
                                                    attrs: {
                                                      color: "error",
                                                      fab: "",
                                                      "x-small": "",
                                                      dark: "",
                                                    },
                                                    on: {
                                                      click: function ($event) {
                                                        return _vm.deleteMenuItem(
                                                          menuitemK
                                                        )
                                                      },
                                                    },
                                                  },
                                                  [
                                                    _c("v-icon", [
                                                      _vm._v(
                                                        "mdi-delete-outline"
                                                      ),
                                                    ]),
                                                  ],
                                                  1
                                                ),
                                              ],
                                              1
                                            ),
                                          ])
                                        }
                                      ),
                                      0
                                    ),
                                  ]
                                },
                                proxy: true,
                              },
                            ]),
                          }),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        {
                          staticClass: "pb-0",
                          attrs: { cols: "12", sm: "12" },
                        },
                        [
                          _c(
                            "v-btn",
                            {
                              staticClass: "float-end",
                              attrs: { color: "info", elevation: "1" },
                              on: { click: _vm.addMenuItem },
                            },
                            [_vm._v("Add Tier")]
                          ),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        {
                          staticClass: "pb-0",
                          attrs: { cols: "12", sm: "12" },
                        },
                        [
                          _c("v-checkbox", {
                            attrs: { label: "Published?" },
                            model: {
                              value: _vm.form.is_active,
                              callback: function ($$v) {
                                _vm.$set(_vm.form, "is_active", $$v)
                              },
                              expression: "form.is_active",
                            },
                          }),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        {
                          staticClass: "pb-0",
                          attrs: { cols: "12", sm: "12" },
                        },
                        [
                          _c(
                            "v-btn",
                            {
                              attrs: {
                                color: "secondary",
                                elevation: "1",
                                large: "",
                                raised: "",
                                loading: _vm.btnloading,
                                disabled: _vm.btnloading,
                              },
                              on: { click: _vm.addpermission },
                            },
                            [_vm._v(_vm._s(_vm.form.id > 0 ? "Update" : "Add"))]
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
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