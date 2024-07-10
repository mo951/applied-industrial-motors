"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_Employees_Form_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Employees/Form.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Employees/Form.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************/
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

var employeeservice = new _services_auth_default__WEBPACK_IMPORTED_MODULE_1__["default"]('employees');
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "auth.employees.add",
  watch: {},
  mounted: function mounted() {
    var _this = this;

    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
      var res;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!_this.$route.params.id) {
                _context.next = 8;
                break;
              }

              _context.next = 3;
              return employeeservice.get(_this.form.id);

            case 3:
              res = _context.sent;
              _this.form = {
                id: _this.$route.params.id,
                first_name: res.first_name ? res.first_name : '',
                last_name: res.last_name ? res.last_name : '',
                email: res.email ? res.email : '',
                phone_number: res.phone_number ? res.phone_number : '',
                birth_date: res.birth_date ? res.birth_date : '',
                gender: res.sex ? res.sex : '',
                hire_date: res.hire_date ? res.hire_date : '',
                work_dept: res.work_dept ? res.work_dept : '',
                salary: res.salary ? res.salary : '',
                country: res.country ? res.country : '',
                city: res.city ? res.city : '',
                zip_code: res.zip_code ? res.zip_code : '',
                state: res.zip_code ? res.zip_code : '',
                bank_iban: res.bank_iban ? res.bank_iban : '',
                bank_title: res.bank_title ? res.bank_title : '',
                bank_name: res.bank_name ? res.bank_name : '',
                bank_account_number: res.bank_account_number ? res.bank_account_number : ''
              };

              _this.bread.push({
                text: "Edit",
                to: {
                  name: "auth.employees.edit",
                  params: {
                    id: _this.$route.params.id
                  }
                },
                disabled: false,
                exact: true
              });

              _context.next = 9;
              break;

            case 8:
              _this.bread.push({
                text: "Add",
                to: {
                  name: "auth.employees.add"
                },
                disabled: false,
                exact: true
              });

            case 9:
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
        first_name: [],
        last_name: [],
        email: [],
        phone_number: [],
        birth_date: [],
        gender: [],
        hire_date: [],
        work_dept: [],
        salary: [],
        country: [],
        city: [],
        zip_code: [],
        state: [],
        bank_iban: [],
        bank_title: [],
        bank_name: [],
        bank_account_number: []
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
                  _context2.next = 32;
                  break;
                }

                this.btnloading = true;
                formdata = new FormData();
                formdata.append("first_name", this.form.first_name);
                formdata.append("last_name", this.form.last_name);
                formdata.append("email", this.form.email);
                formdata.append("phone_number", this.form.phone_number);
                formdata.append("birth_date", this.form.birth_date);
                formdata.append("sex", this.form.gender);
                formdata.append("hire_date", this.form.hire_date);
                formdata.append("work_dept", this.form.work_dept);
                formdata.append("salary", this.form.salary);
                formdata.append("country", this.form.country);
                formdata.append("city", this.form.city);
                formdata.append("zip_code", this.form.zip_code);
                formdata.append("state", this.form.state);
                formdata.append("bank_iban", this.form.bank_iban);
                formdata.append("bank_title", this.form.bank_title);
                formdata.append("bank_name", this.form.bank_name);
                formdata.append("bank_account_number", this.form.bank_account_number);
                this.btnloading = false;

                if (!(this.form.id > 0)) {
                  _context2.next = 28;
                  break;
                }

                _context2.next = 25;
                return employeeservice.update(formdata, this.form.id);

              case 25:
                res = _context2.sent;
                _context2.next = 31;
                break;

              case 28:
                _context2.next = 30;
                return employeeservice.create(formdata);

              case 30:
                res = _context2.sent;

              case 31:
                if (!res.status) {
                  if (res.data.first_name) {
                    this.errors.first_name = res.data.first_name;
                  }

                  if (res.data.last_name) {
                    this.errors.last_name = res.data.last_name;
                  }

                  if (res.data.phone_number) {
                    this.errors.phone_number = res.data.phone_number;
                  }

                  if (res.data.birth_date) {
                    this.errors.birth_date = res.data.birth_date;
                  }

                  if (res.data.sex) {
                    this.errors.gender = res.data.sex;
                  }

                  if (res.data.hire_date) {
                    this.errors.hire_date = res.data.hire_date;
                  }

                  if (res.data.work_dept) {
                    this.errors.work_dept = res.data.work_dept;
                  }

                  if (res.data.salary) {
                    this.errors.salary = res.data.salary;
                  }

                  if (res.data.country) {
                    this.errors.country = res.data.country;
                  }

                  if (res.data.city) {
                    this.errors.city = res.data.city;
                  }

                  if (res.data.zip_code) {
                    this.errors.zip_code = res.data.zip_code;
                  }

                  if (res.data.state) {
                    this.errors.state = res.data.state;
                  } //errors here

                } else {
                  //suuccess here
                  this.$router.push({
                    name: "auth.employees.listing"
                  });
                }

              case 32:
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
  data: function data() {
    return {
      modal: false,
      menu1: false,
      menu2: false,
      form: {
        id: this.$route.params.id ? this.$route.params.id : 0,
        first_name: '',
        last_name: '',
        email: '',
        phone_number: '',
        birth_date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000).toISOString().substr(0, 10),
        gender: '',
        hire_date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000).toISOString().substr(0, 10),
        work_dept: '',
        salary: '',
        country: '',
        city: '',
        zip_code: '',
        state: '',
        bank_iban: '',
        bank_title: '',
        bank_name: '',
        bank_account_number: ''
      },
      gender_option: [{
        value: "male",
        text: 'Male'
      }, {
        value: "female",
        text: 'Female'
      }],
      errors: {
        first_name: [],
        last_name: [],
        email: [],
        phone_number: [],
        birth_date: [],
        gender: [],
        hire_date: [],
        work_dept: [],
        salary: [],
        country: [],
        city: [],
        zip_code: [],
        state: [],
        bank_iban: [],
        bank_title: [],
        bank_name: [],
        bank_account_number: []
      },
      bread: [{
        text: "Dashboard",
        to: {
          name: "auth.dashboard"
        },
        disabled: false,
        exact: true
      }, {
        text: "Employees",
        to: {
          name: "auth.employees.listing"
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
      } //date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),

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

/***/ "./resources/js/views/Employees/Form.vue":
/*!***********************************************!*\
  !*** ./resources/js/views/Employees/Form.vue ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Form_vue_vue_type_template_id_4cd2090d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Form.vue?vue&type=template&id=4cd2090d& */ "./resources/js/views/Employees/Form.vue?vue&type=template&id=4cd2090d&");
/* harmony import */ var _Form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Form.vue?vue&type=script&lang=js& */ "./resources/js/views/Employees/Form.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Form_vue_vue_type_template_id_4cd2090d___WEBPACK_IMPORTED_MODULE_0__.render,
  _Form_vue_vue_type_template_id_4cd2090d___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Employees/Form.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/Employees/Form.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/views/Employees/Form.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Form.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Employees/Form.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Employees/Form.vue?vue&type=template&id=4cd2090d&":
/*!******************************************************************************!*\
  !*** ./resources/js/views/Employees/Form.vue?vue&type=template&id=4cd2090d& ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_template_id_4cd2090d___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_template_id_4cd2090d___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_template_id_4cd2090d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Form.vue?vue&type=template&id=4cd2090d& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Employees/Form.vue?vue&type=template&id=4cd2090d&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Employees/Form.vue?vue&type=template&id=4cd2090d&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Employees/Form.vue?vue&type=template&id=4cd2090d& ***!
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
                        { staticClass: "pb-0", attrs: { cols: "6", sm: "6" } },
                        [
                          _c("v-text-field", {
                            attrs: {
                              type: "text",
                              rules: [_vm.rules.required],
                              "error-messages": _vm.errors.first_name,
                              label: "First Name",
                            },
                            model: {
                              value: _vm.form.first_name,
                              callback: function ($$v) {
                                _vm.$set(_vm.form, "first_name", $$v)
                              },
                              expression: "form.first_name",
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
                              type: "text",
                              rules: [_vm.rules.required],
                              "error-messages": _vm.errors.last_name,
                              label: "Last Name",
                            },
                            model: {
                              value: _vm.form.last_name,
                              callback: function ($$v) {
                                _vm.$set(_vm.form, "last_name", $$v)
                              },
                              expression: "form.last_name",
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
                              type: "email",
                              rules: [_vm.rules.required],
                              "error-messages": _vm.errors.email,
                              label: "Email",
                            },
                            model: {
                              value: _vm.form.email,
                              callback: function ($$v) {
                                _vm.$set(_vm.form, "email", $$v)
                              },
                              expression: "form.email",
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
                              type: "number",
                              rules: [_vm.rules.required],
                              "error-messages": _vm.errors.phone_number,
                              label: "Phone Number",
                            },
                            model: {
                              value: _vm.form.phone_number,
                              callback: function ($$v) {
                                _vm.$set(_vm.form, "phone_number", $$v)
                              },
                              expression: "form.phone_number",
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
                              items: _vm.gender_option,
                              "item-text": "text",
                              "item-value": "value",
                              label: "Gender",
                              rules: [_vm.rules.required],
                              "error-messages": _vm.errors.gender,
                            },
                            model: {
                              value: _vm.form.gender,
                              callback: function ($$v) {
                                _vm.$set(_vm.form, "gender", $$v)
                              },
                              expression: "form.gender",
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
                          _c(
                            "v-menu",
                            {
                              attrs: {
                                "close-on-content-click": false,
                                "nudge-right": 40,
                                transition: "scale-transition",
                                "offset-y": "",
                                "min-width": "auto",
                              },
                              scopedSlots: _vm._u([
                                {
                                  key: "activator",
                                  fn: function (ref) {
                                    var on = ref.on
                                    var attrs = ref.attrs
                                    return [
                                      _c(
                                        "v-text-field",
                                        _vm._g(
                                          _vm._b(
                                            {
                                              attrs: {
                                                "error-messages":
                                                  _vm.errors.birth_date,
                                                label: "Date of Birth",
                                                rules: [_vm.rules.required],
                                                "prepend-icon": "mdi-calendar",
                                                readonly: "",
                                              },
                                              model: {
                                                value: _vm.form.birth_date,
                                                callback: function ($$v) {
                                                  _vm.$set(
                                                    _vm.form,
                                                    "birth_date",
                                                    $$v
                                                  )
                                                },
                                                expression: "form.birth_date",
                                              },
                                            },
                                            "v-text-field",
                                            attrs,
                                            false
                                          ),
                                          on
                                        )
                                      ),
                                    ]
                                  },
                                },
                              ]),
                              model: {
                                value: _vm.menu1,
                                callback: function ($$v) {
                                  _vm.menu1 = $$v
                                },
                                expression: "menu1",
                              },
                            },
                            [
                              _vm._v(" "),
                              _c("v-date-picker", {
                                attrs: { required: "" },
                                on: {
                                  input: function ($event) {
                                    _vm.menu1 = false
                                  },
                                },
                                model: {
                                  value: _vm.form.birth_date,
                                  callback: function ($$v) {
                                    _vm.$set(_vm.form, "birth_date", $$v)
                                  },
                                  expression: "form.birth_date",
                                },
                              }),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        { staticClass: "pb-0", attrs: { cols: "4", sm: "4" } },
                        [
                          _c(
                            "v-menu",
                            {
                              attrs: {
                                "close-on-content-click": false,
                                "nudge-right": 40,
                                transition: "scale-transition",
                                "offset-y": "",
                                "min-width": "auto",
                              },
                              scopedSlots: _vm._u([
                                {
                                  key: "activator",
                                  fn: function (ref) {
                                    var on = ref.on
                                    var attrs = ref.attrs
                                    return [
                                      _c(
                                        "v-text-field",
                                        _vm._g(
                                          _vm._b(
                                            {
                                              attrs: {
                                                "error-messages":
                                                  _vm.errors.hire_date,
                                                label: "Hiring Date",
                                                rules: [_vm.rules.required],
                                                "prepend-icon": "mdi-calendar",
                                                readonly: "",
                                              },
                                              model: {
                                                value: _vm.form.hire_date,
                                                callback: function ($$v) {
                                                  _vm.$set(
                                                    _vm.form,
                                                    "hire_date",
                                                    $$v
                                                  )
                                                },
                                                expression: "form.hire_date",
                                              },
                                            },
                                            "v-text-field",
                                            attrs,
                                            false
                                          ),
                                          on
                                        )
                                      ),
                                    ]
                                  },
                                },
                              ]),
                              model: {
                                value: _vm.menu2,
                                callback: function ($$v) {
                                  _vm.menu2 = $$v
                                },
                                expression: "menu2",
                              },
                            },
                            [
                              _vm._v(" "),
                              _c("v-date-picker", {
                                attrs: { required: "" },
                                on: {
                                  input: function ($event) {
                                    _vm.menu2 = false
                                  },
                                },
                                model: {
                                  value: _vm.form.hire_date,
                                  callback: function ($$v) {
                                    _vm.$set(_vm.form, "hire_date", $$v)
                                  },
                                  expression: "form.hire_date",
                                },
                              }),
                            ],
                            1
                          ),
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
                              type: "text",
                              rules: [_vm.rules.required],
                              "error-messages": _vm.errors.work_dept,
                              label: "Work Department",
                            },
                            model: {
                              value: _vm.form.work_dept,
                              callback: function ($$v) {
                                _vm.$set(_vm.form, "work_dept", $$v)
                              },
                              expression: "form.work_dept",
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
                              type: "text",
                              rules: [_vm.rules.required],
                              "error-messages": _vm.errors.salary,
                              label: "Salary",
                            },
                            model: {
                              value: _vm.form.salary,
                              callback: function ($$v) {
                                _vm.$set(_vm.form, "salary", $$v)
                              },
                              expression: "form.salary",
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
                              type: "text",
                              rules: [_vm.rules.required],
                              "error-messages": _vm.errors.country,
                              label: "Country",
                            },
                            model: {
                              value: _vm.form.country,
                              callback: function ($$v) {
                                _vm.$set(_vm.form, "country", $$v)
                              },
                              expression: "form.country",
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
                              type: "text",
                              rules: [_vm.rules.required],
                              "error-messages": _vm.errors.state,
                              label: "State",
                            },
                            model: {
                              value: _vm.form.state,
                              callback: function ($$v) {
                                _vm.$set(_vm.form, "state", $$v)
                              },
                              expression: "form.state",
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
                              type: "text",
                              rules: [_vm.rules.required],
                              "error-messages": _vm.errors.city,
                              label: "City",
                            },
                            model: {
                              value: _vm.form.city,
                              callback: function ($$v) {
                                _vm.$set(_vm.form, "city", $$v)
                              },
                              expression: "form.city",
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
                              type: "text",
                              rules: [_vm.rules.required],
                              "error-messages": _vm.errors.zip_code,
                              label: "Zip Code",
                            },
                            model: {
                              value: _vm.form.zip_code,
                              callback: function ($$v) {
                                _vm.$set(_vm.form, "zip_code", $$v)
                              },
                              expression: "form.zip_code",
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
                            attrs: { type: "text", label: "Bank Name" },
                            model: {
                              value: _vm.form.bank_name,
                              callback: function ($$v) {
                                _vm.$set(_vm.form, "bank_name", $$v)
                              },
                              expression: "form.bank_name",
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
                            attrs: { type: "text", label: "Bank Title" },
                            model: {
                              value: _vm.form.bank_title,
                              callback: function ($$v) {
                                _vm.$set(_vm.form, "bank_title", $$v)
                              },
                              expression: "form.bank_title",
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
                              type: "text",
                              label: "Bank Account Number",
                            },
                            model: {
                              value: _vm.form.bank_account_number,
                              callback: function ($$v) {
                                _vm.$set(_vm.form, "bank_account_number", $$v)
                              },
                              expression: "form.bank_account_number",
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
                            attrs: { type: "text", label: "Bank IBAN" },
                            model: {
                              value: _vm.form.bank_iban,
                              callback: function ($$v) {
                                _vm.$set(_vm.form, "bank_iban", $$v)
                              },
                              expression: "form.bank_iban",
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
                            [
                              _vm._v(
                                _vm._s(_vm.form.id > 0 ? "Update" : "Add") +
                                  "\n                        "
                              ),
                            ]
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