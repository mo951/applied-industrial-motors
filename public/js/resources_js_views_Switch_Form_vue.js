"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_Switch_Form_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Switch/Form.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Switch/Form.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_auth_default__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @services/auth/default */ "./resources/js/services/auth/default.js");


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

var switchservice = new _services_auth_default__WEBPACK_IMPORTED_MODULE_1__["default"]('main-switches');
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "auth.switches.add",
  mounted: function mounted() {
    var _this = this;

    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
      var res;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!_this.$route.params.id) {
                _context.next = 9;
                break;
              }

              _context.next = 3;
              return switchservice.get(_this.form.id);

            case 3:
              res = _context.sent;
              _this.form = {
                name: res.name ? res.name : '',
                no_of_servers: res.date ? res.no_of_servers : 0,
                is_active: res.is_active == 1 ? true : false,
                total_cost: res.cost ? res.total_cost : 0,
                id: _this.$route.params.id
              };

              if (res.servers && res.servers.length > 0) {
                _this.servers = res.servers.map(function (e) {
                  return {
                    server_data_center: e.server_data_center,
                    server_name: e.server_name,
                    server_cost: e.server_cost
                  };
                });
              }

              _this.bread.push({
                text: "Edit",
                to: {
                  name: "auth.switches.edit",
                  params: {
                    id: _this.$route.params.id
                  }
                },
                disabled: false,
                exact: true
              });

              _context.next = 10;
              break;

            case 9:
              _this.bread.push({
                text: "Add",
                to: {
                  name: "auth.switches.add"
                },
                disabled: false,
                exact: true
              });

            case 10:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  methods: {
    addRow: function addRow() {
      this.servers.push({
        server_data_center: '',
        server_name: '',
        server_cost: 0
      });
    },
    removeRow: function removeRow(key) {
      this.servers.splice(key, 1);
    },
    resetError: function resetError() {
      this.errors = {
        name: [],
        no_of_servers: [],
        is_active: [],
        total_cost: []
      };
    },
    addpermission: function () {
      var _addpermission = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
        var formdata, i, server, res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                this.resetError();

                if (!this.$refs.form.validate()) {
                  _context2.next = 20;
                  break;
                }

                this.btnloading = true;
                formdata = new FormData();
                formdata.append("name", this.form.name);
                formdata.append("no_of_servers", this.form.no_of_servers);
                formdata.append("is_active", this.form.is_active == true ? 1 : 0);
                formdata.append("total_cost", this.form.total_cost);

                for (i = 0; i < this.servers.length; i++) {
                  server = this.servers[i];
                  formdata.append("server_data_center[" + i + "]", server.server_data_center);
                  formdata.append("server_name[" + i + "]", server.server_name);
                  formdata.append("server_cost[" + i + "]", server.server_cost);
                }

                this.btnloading = false;

                if (!(this.form.id > 0)) {
                  _context2.next = 16;
                  break;
                }

                _context2.next = 13;
                return switchservice.update(formdata, this.form.id);

              case 13:
                res = _context2.sent;
                _context2.next = 19;
                break;

              case 16:
                _context2.next = 18;
                return switchservice.create(formdata);

              case 18:
                res = _context2.sent;

              case 19:
                if (!res.status) {
                  if (res.data.name) {
                    this.errors.name = res.data.name;
                  }

                  if (res.data.no_of_servers) {
                    this.errors.no_of_servers = res.data.no_of_servers;
                  }

                  if (res.data.is_active) {
                    this.errors.is_active = res.data.is_active;
                  }

                  if (res.data.total_cost) {
                    this.errors.total_cost = res.data.total_cost;
                  } //errors here

                } else {
                  //suuccess here
                  this.$router.push({
                    name: "auth.switches.listing"
                  });
                }

              case 20:
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
    }()
  },
  computed: {
    user: function user() {
      return this.$store.getters.loggedInUser;
    }
  },
  watch: {
    servers: {
      handler: function handler() {
        this.form.no_of_servers = this.servers.length;
        var cost = 0;

        for (var i = 0; i < this.servers.length; i++) {
          var loop_cost = parseFloat(this.servers[i].server_cost);

          if (loop_cost) {
            cost += loop_cost;
          }
        }

        this.form.total_cost = cost;
      },
      deep: true
    }
  },
  data: function data() {
    return {
      servers: [],
      form: {
        id: this.$route.params.id ? this.$route.params.id : 0,
        name: '',
        no_of_servers: 0,
        is_active: true,
        total_cost: 0
      },
      errors: {
        name: [],
        no_of_servers: [],
        is_active: [],
        total_cost: []
      },
      bread: [{
        text: "Dashboard",
        to: {
          name: "auth.dashboard"
        },
        disabled: false,
        exact: true
      }, {
        text: "Switches",
        to: {
          name: "auth.switches.listing"
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
  }]);

  return defaultservice;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (defaultservice);

/***/ }),

/***/ "./resources/js/views/Switch/Form.vue":
/*!********************************************!*\
  !*** ./resources/js/views/Switch/Form.vue ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Form_vue_vue_type_template_id_74091310___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Form.vue?vue&type=template&id=74091310& */ "./resources/js/views/Switch/Form.vue?vue&type=template&id=74091310&");
/* harmony import */ var _Form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Form.vue?vue&type=script&lang=js& */ "./resources/js/views/Switch/Form.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Form_vue_vue_type_template_id_74091310___WEBPACK_IMPORTED_MODULE_0__.render,
  _Form_vue_vue_type_template_id_74091310___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Switch/Form.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/Switch/Form.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/views/Switch/Form.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Form.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Switch/Form.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Switch/Form.vue?vue&type=template&id=74091310&":
/*!***************************************************************************!*\
  !*** ./resources/js/views/Switch/Form.vue?vue&type=template&id=74091310& ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_template_id_74091310___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_template_id_74091310___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_template_id_74091310___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Form.vue?vue&type=template&id=74091310& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Switch/Form.vue?vue&type=template&id=74091310&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Switch/Form.vue?vue&type=template&id=74091310&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Switch/Form.vue?vue&type=template&id=74091310& ***!
  \******************************************************************************************************************************************************************************************************************/
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
        {
          staticClass: "pa-10 rounded elevation-10",
          attrs: { "no-gutters": "" },
        },
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
                        {
                          staticClass: "pb-0",
                          attrs: { cols: "12", sm: "12" },
                        },
                        [
                          _c("v-text-field", {
                            attrs: {
                              rules: [_vm.rules.required],
                              "error-messages": _vm.errors.name,
                              label: "Name",
                            },
                            model: {
                              value: _vm.form.name,
                              callback: function ($$v) {
                                _vm.$set(_vm.form, "name", $$v)
                              },
                              expression: "form.name",
                            },
                          }),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        { staticClass: "pb-0", attrs: { cols: "4", sm: "4" } },
                        [
                          _c("v-text-field", {
                            attrs: {
                              readonly: "",
                              "error-messages": _vm.errors.no_of_servers,
                              label: "No of Servers",
                              type: "number",
                              step: "any",
                            },
                            model: {
                              value: _vm.form.no_of_servers,
                              callback: function ($$v) {
                                _vm.$set(_vm.form, "no_of_servers", $$v)
                              },
                              expression: "form.no_of_servers",
                            },
                          }),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        { staticClass: "pb-0", attrs: { cols: "4", sm: "4" } },
                        [
                          _c("v-text-field", {
                            attrs: {
                              readonly: "",
                              "error-messages": _vm.errors.total_cost,
                              label: "Total Cost",
                              type: "number",
                              step: "any",
                            },
                            model: {
                              value: _vm.form.total_cost,
                              callback: function ($$v) {
                                _vm.$set(_vm.form, "total_cost", $$v)
                              },
                              expression: "form.total_cost",
                            },
                          }),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        { staticClass: "pb-0", attrs: { cols: "4", sm: "4" } },
                        [
                          _c("v-switch", {
                            attrs: { label: "Is Active?" },
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
                          _c("v-simple-table", {
                            staticClass: "mt-3 mb-3",
                            scopedSlots: _vm._u([
                              {
                                key: "default",
                                fn: function () {
                                  return [
                                    _c(
                                      "tbody",
                                      _vm._l(
                                        _vm.servers,
                                        function (item, itemk) {
                                          return _c("tr", { key: itemk }, [
                                            _c(
                                              "td",
                                              [
                                                _c("v-text-field", {
                                                  attrs: {
                                                    label: "Data Center",
                                                    "hide-details": "auto",
                                                  },
                                                  model: {
                                                    value:
                                                      item.server_data_center,
                                                    callback: function ($$v) {
                                                      _vm.$set(
                                                        item,
                                                        "server_data_center",
                                                        $$v
                                                      )
                                                    },
                                                    expression:
                                                      "item.server_data_center",
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
                                                    label: "Server Name",
                                                    "hide-details": "auto",
                                                  },
                                                  model: {
                                                    value: item.server_name,
                                                    callback: function ($$v) {
                                                      _vm.$set(
                                                        item,
                                                        "server_name",
                                                        $$v
                                                      )
                                                    },
                                                    expression:
                                                      "item.server_name",
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
                                                    label: "Server Cost",
                                                    type: "number",
                                                    step: "any",
                                                    "hide-details": "auto",
                                                  },
                                                  model: {
                                                    value: item.server_cost,
                                                    callback: function ($$v) {
                                                      _vm.$set(
                                                        item,
                                                        "server_cost",
                                                        $$v
                                                      )
                                                    },
                                                    expression:
                                                      "item.server_cost",
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
                                                      icon: "",
                                                      color: "error",
                                                    },
                                                    on: {
                                                      click: function ($event) {
                                                        return _vm.removeRow(
                                                          itemk
                                                        )
                                                      },
                                                    },
                                                  },
                                                  [
                                                    _c("v-icon", [
                                                      _vm._v("mdi-content-cut"),
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
                          _vm._v(" "),
                          _c(
                            "v-btn",
                            {
                              attrs: { color: "success" },
                              on: { click: _vm.addRow },
                            },
                            [_vm._v("Add Server")]
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