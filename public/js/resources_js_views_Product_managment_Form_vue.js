"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_Product_managment_Form_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Product_managment/Form.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Product_managment/Form.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_auth_default__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @services/auth/default */ "./resources/js/services/auth/default.js");
/* harmony import */ var _services_auth_otherrequests__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/auth/otherrequests */ "./resources/js/services/auth/otherrequests.js");


function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var brandservice = new _services_auth_default__WEBPACK_IMPORTED_MODULE_1__["default"]('productmanagment');

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "auth.productmanagments.add",
  watch: {},
  mounted: function mounted() {
    var _this = this;

    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
      var _this$form, res;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _services_auth_otherrequests__WEBPACK_IMPORTED_MODULE_2__["default"].get('getdropdownsvalues').then(function (e) {
                return e.data;
              });

            case 2:
              _this.dropdownClasses = _context.sent;

              if (!_this.$route.params.id) {
                _context.next = 13;
                break;
              }

              _context.next = 6;
              return brandservice.get(_this.form.id);

            case 6:
              res = _context.sent;
              console.log(res);
              _this.initialCategory = res.parent_id ? res.parent_id : 0;
              _this.form = (_this$form = {
                motorgroup_id: res.motorgroup_id ? res.motorgroup_id : '',
                framesize_id: res.framesize_id ? res.framesize_id : '',
                horsepower_id: res.horsepower_id ? res.horsepower_id : '',
                speed_id: res.speed_id ? res.speed_id : '',
                voltage_id: res.voltage_id ? res.voltage_id : '',
                price: res.price ? res.price : '',
                multiplier_code: res.multiplier_code ? res.multiplier_code : '',
                mounting: res.mounting ? res.mounting : '',
                motor_name: res.motor_name ? res.motor_name : ''
              }, _defineProperty(_this$form, "motor_name", res.slug ? res.slug : ''), _defineProperty(_this$form, "slug", res.slug ? res.slug : ''), _defineProperty(_this$form, "other_selections", res.category_ids ? JSON.parse(res.category_ids) : []), _defineProperty(_this$form, "image_url_2d_drawing", res.image_url), _defineProperty(_this$form, "image_url_3d_drawing", res.image_url_three_drawing), _defineProperty(_this$form, "image_url_datasheet", res.image_url_datasheet), _defineProperty(_this$form, "id", _this.$route.params.id), _this$form);

              _this.bread.push({
                text: "Edit",
                to: {
                  name: "auth.productmanagments.edit",
                  params: {
                    id: _this.$route.params.id
                  }
                },
                disabled: false,
                exact: true
              });

              _context.next = 14;
              break;

            case 13:
              _this.bread.push({
                text: "Add",
                to: {
                  name: "auth.productmanagments.add"
                },
                disabled: false,
                exact: true
              });

            case 14:
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
        name: [],
        value: [],
        is_active: []
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
                  _context2.next = 29;
                  break;
                }

                this.btnloading = true;
                formdata = new FormData();
                formdata.append("motorgroup_id", this.form.motorgroup_id);
                formdata.append("framesize_id", this.form.framesize_id);
                formdata.append("horsepower_id", this.form.horsepower_id);
                formdata.append("speed_id", this.form.speed_id);
                formdata.append("voltage_id", this.form.voltage_id);
                formdata.append("price", this.form.price);
                formdata.append("multiplier_code", this.form.multiplier_code);
                formdata.append("mounting", this.form.mounting);
                formdata.append("motor_name", this.form.motor_name);
                formdata.append("slug", this.form.motor_name);
                formdata.append('category_ids', JSON.stringify(this.form.other_selections));

                if (this.form.image_2d_drwaing) {
                  formdata.append("image_2d_drwaing", this.form.image_2d_drwaing);
                }

                if (this.form.image_3d_drwaing) {
                  formdata.append("image_3d_drwaing", this.form.image_3d_drwaing);
                }

                if (this.form.image_data_sheet) {
                  formdata.append("image_data_sheet", this.form.image_data_sheet);
                }

                this.btnloading = false;

                if (!(this.form.id > 0)) {
                  _context2.next = 25;
                  break;
                }

                _context2.next = 22;
                return brandservice.update(formdata, this.form.id);

              case 22:
                res = _context2.sent;
                _context2.next = 28;
                break;

              case 25:
                _context2.next = 27;
                return brandservice.create(formdata);

              case 27:
                res = _context2.sent;

              case 28:
                if (!res.status) {
                  if (res.data.motorgroup_id) {
                    this.errors.motorgroup_id = res.data.motorgroup_id;
                  }

                  if (res.data.framesize_id) {
                    this.errors.framesize_id = res.data.framesize_id;
                  }

                  if (res.data.horsepower_id) {
                    this.errors.horsepower_id = res.data.horsepower_id;
                  }

                  if (res.data.speed_id) {
                    this.errors.speed_id = res.data.speed_id;
                  }

                  if (res.data.voltage_id) {
                    this.errors.voltage_id = res.data.voltage_id;
                  }

                  if (res.data.price) {
                    this.errors.price = res.data.price;
                  }

                  if (res.data.multiplier_code) {
                    this.errors.multiplier_code = res.data.multiplier_code;
                  }

                  if (res.data.mounting) {
                    this.errors.mounting = res.data.mounting;
                  }

                  if (res.data.motor_name) {
                    this.errors.motor_name = res.data.motor_name;
                  }

                  if (res.data.category_ids) {
                    this.errors.category_ids = res.data.category_ids;
                  }
                } else {
                  //suuccess here
                  this.$router.push({
                    name: "auth.productmanagments.listing"
                  });
                }

              case 29:
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
    updateValudCategory: function updateValudCategory(e) {
      this.form.parent_id = e;
    }
  },
  computed: {
    user: function user() {
      return this.$store.getters.loggedInUser;
    }
  },
  data: function data() {
    return {
      dropdownClasses: [],
      initialCategory: 0,
      categories: [{
        id: '3',
        name: 'Farm Duty'
      }, {
        id: '4',
        name: 'Crusher Duty'
      }, {
        id: '5',
        name: 'Washdown'
      }, {
        id: '6',
        name: 'Phase Converter Motor'
      }, {
        id: '7',
        name: 'Premium JM-JP'
      }, {
        id: '8',
        name: 'EPAct JM-JP'
      }, {
        id: '9',
        name: 'Oil Pump'
      }, {
        id: '10',
        name: 'PM DC Motor'
      }, {
        id: '11',
        name: 'Cobra Single Phase Aluminum'
      }, {
        id: '12',
        name: 'Stainless Steel'
      }, {
        id: '13',
        name: 'IEEE 841'
      }, {
        id: '14',
        name: 'Aerator'
      }, {
        id: '16',
        name: '(GX3) Three Phase Aluminum'
      }, {
        id: '17',
        name: 'Three Phase Cast Iron'
      }, {
        id: '18',
        name: 'Three Phase Open Enclosure'
      }, {
        id: '19',
        name: 'Metric IEC'
      }, {
        id: '20',
        name: 'Cobra'
      }, {
        id: '22',
        name: 'Constant Velocity Fan Kit'
      }, {
        id: '25',
        name: 'Mobile Apps'
      }, {
        id: '27',
        name: 'Inventory by Location'
      }],
      form: {
        id: this.$route.params.id ? this.$route.params.id : 0,
        motorgroup_id: '',
        framesize_id: '',
        horsepower_id: '',
        speed_id: '',
        voltage_id: '',
        price: '',
        multiplier_code: '',
        mounting: '',
        motor_name: '',
        slug: '',
        category_ids: '',
        other_selections: [],
        image_2d_drwaing: undefined,
        image_url_2d_drawing: '',
        image_3d_drwaing: undefined,
        image_url_3d_drawing: '',
        image_data_sheet: undefined,
        image_url_datasheet: ''
      },
      errors: {
        motorgroup_id: [],
        framesize_id: [],
        horsepower_id: [],
        speed_id: [],
        voltage_id: [],
        price: [],
        multiplier_code: [],
        mounting: [],
        motor_name: [],
        category_ids: [],
        is_active: []
      },
      bread: [{
        text: "Dashboard",
        to: {
          name: "auth.dashboard"
        },
        disabled: false,
        exact: true
      }, {
        text: "Product Managments",
        to: {
          name: "auth.productmanagments.listing"
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

/***/ "./resources/js/views/Product_managment/Form.vue":
/*!*******************************************************!*\
  !*** ./resources/js/views/Product_managment/Form.vue ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Form_vue_vue_type_template_id_23bd6aa4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Form.vue?vue&type=template&id=23bd6aa4& */ "./resources/js/views/Product_managment/Form.vue?vue&type=template&id=23bd6aa4&");
/* harmony import */ var _Form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Form.vue?vue&type=script&lang=js& */ "./resources/js/views/Product_managment/Form.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Form_vue_vue_type_template_id_23bd6aa4___WEBPACK_IMPORTED_MODULE_0__.render,
  _Form_vue_vue_type_template_id_23bd6aa4___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Product_managment/Form.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/Product_managment/Form.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/views/Product_managment/Form.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Form.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Product_managment/Form.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Product_managment/Form.vue?vue&type=template&id=23bd6aa4&":
/*!**************************************************************************************!*\
  !*** ./resources/js/views/Product_managment/Form.vue?vue&type=template&id=23bd6aa4& ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_template_id_23bd6aa4___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_template_id_23bd6aa4___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_template_id_23bd6aa4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Form.vue?vue&type=template&id=23bd6aa4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Product_managment/Form.vue?vue&type=template&id=23bd6aa4&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Product_managment/Form.vue?vue&type=template&id=23bd6aa4&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Product_managment/Form.vue?vue&type=template&id=23bd6aa4& ***!
  \*****************************************************************************************************************************************************************************************************************************/
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
                              rules: [_vm.rules.required],
                              "error-messages": _vm.errors.motor_name,
                              label: "Motor Name",
                            },
                            model: {
                              value: _vm.form.motor_name,
                              callback: function ($$v) {
                                _vm.$set(_vm.form, "motor_name", $$v)
                              },
                              expression: "form.motor_name",
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
                              "error-messages": _vm.errors.slug,
                              label: "Slug",
                            },
                            model: {
                              value: _vm.form.slug,
                              callback: function ($$v) {
                                _vm.$set(_vm.form, "slug", $$v)
                              },
                              expression: "form.slug",
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
                          _c("v-autocomplete", {
                            attrs: {
                              density: "compact",
                              "item-text": "name",
                              "item-value": "id",
                              label: "Select Categories",
                              "hide-details": "",
                              items: _vm.categories,
                              multiple: "",
                              rules: [_vm.rules.required],
                            },
                            model: {
                              value: _vm.form.other_selections,
                              callback: function ($$v) {
                                _vm.$set(_vm.form, "other_selections", $$v)
                              },
                              expression: "form.other_selections",
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
                              items: _vm.dropdownClasses.product.MotorGroup,
                              "item-text": "value",
                              "item-value": "id",
                              label: "Select Motor",
                              required: "",
                              rules: [_vm.rules.required],
                            },
                            model: {
                              value: _vm.form.motorgroup_id,
                              callback: function ($$v) {
                                _vm.$set(_vm.form, "motorgroup_id", $$v)
                              },
                              expression: "form.motorgroup_id",
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
                              items: _vm.dropdownClasses.product.FrameSize,
                              "item-text": "value",
                              "item-value": "id",
                              label: "Select FrameSize",
                              required: "",
                              rules: [_vm.rules.required],
                            },
                            model: {
                              value: _vm.form.framesize_id,
                              callback: function ($$v) {
                                _vm.$set(_vm.form, "framesize_id", $$v)
                              },
                              expression: "form.framesize_id",
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
                              items: _vm.dropdownClasses.product.HorsePower,
                              "item-text": "value",
                              "item-value": "id",
                              label: "Select HorsePower",
                              required: "",
                              rules: [_vm.rules.required],
                            },
                            model: {
                              value: _vm.form.horsepower_id,
                              callback: function ($$v) {
                                _vm.$set(_vm.form, "horsepower_id", $$v)
                              },
                              expression: "form.horsepower_id",
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
                              items: _vm.dropdownClasses.product.Speed,
                              "item-text": "value",
                              "item-value": "id",
                              label: "Select Speed",
                              required: "",
                              rules: [_vm.rules.required],
                            },
                            model: {
                              value: _vm.form.speed_id,
                              callback: function ($$v) {
                                _vm.$set(_vm.form, "speed_id", $$v)
                              },
                              expression: "form.speed_id",
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
                              items: _vm.dropdownClasses.product.Voltage,
                              "item-text": "value",
                              "item-value": "id",
                              label: "Select Voltage",
                              required: "",
                              rules: [_vm.rules.required],
                            },
                            model: {
                              value: _vm.form.voltage_id,
                              callback: function ($$v) {
                                _vm.$set(_vm.form, "voltage_id", $$v)
                              },
                              expression: "form.voltage_id",
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
                              "error-messages": _vm.errors.price,
                              label: "Price",
                            },
                            model: {
                              value: _vm.form.price,
                              callback: function ($$v) {
                                _vm.$set(_vm.form, "price", $$v)
                              },
                              expression: "form.price",
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
                              "error-messages": _vm.errors.multiplier_code,
                              label: "Multiplier Code",
                            },
                            model: {
                              value: _vm.form.multiplier_code,
                              callback: function ($$v) {
                                _vm.$set(_vm.form, "multiplier_code", $$v)
                              },
                              expression: "form.multiplier_code",
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
                              "error-messages": _vm.errors.mounting,
                              label: "Mounting",
                            },
                            model: {
                              value: _vm.form.mounting,
                              callback: function ($$v) {
                                _vm.$set(_vm.form, "mounting", $$v)
                              },
                              expression: "form.mounting",
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
                          attrs: { cols: "12", cm: "12" },
                        },
                        [
                          _c("v-file-input", {
                            attrs: {
                              "error-messages": _vm.errors.image_2d_drwaing,
                              label: "2d Drawing",
                            },
                            model: {
                              value: _vm.form.image_2d_drwaing,
                              callback: function ($$v) {
                                _vm.$set(_vm.form, "image_2d_drwaing", $$v)
                              },
                              expression: "form.image_2d_drwaing",
                            },
                          }),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _vm.form.id > 0 && _vm.form.image_url_2d_drawing
                        ? _c(
                            "v-col",
                            { staticClass: "pb-0", attrs: { cols: "12" } },
                            [
                              _c(
                                "v-btn",
                                {
                                  staticClass: "mb-2",
                                  attrs: {
                                    href: _vm.form.image_url_2d_drawing,
                                    target: "_blank",
                                    color: "primary",
                                  },
                                },
                                [
                                  _vm._v(
                                    "\n                            View\n                        "
                                  ),
                                ]
                              ),
                            ],
                            1
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        {
                          staticClass: "pb-0",
                          attrs: { cols: "12", cm: "12" },
                        },
                        [
                          _c("v-file-input", {
                            attrs: {
                              accept: "image/*",
                              "error-messages": _vm.errors.image_3d_drwaing,
                              label: "3d Drawing",
                            },
                            model: {
                              value: _vm.form.image_3d_drwaing,
                              callback: function ($$v) {
                                _vm.$set(_vm.form, "image_3d_drwaing", $$v)
                              },
                              expression: "form.image_3d_drwaing",
                            },
                          }),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _vm.form.id > 0 && _vm.form.image_url_3d_drawing
                        ? _c(
                            "v-col",
                            { staticClass: "pb-0", attrs: { cols: "12" } },
                            [
                              _c(
                                "v-btn",
                                {
                                  staticClass: "mb-2",
                                  attrs: {
                                    href: _vm.form.image_url_3d_drawing,
                                    target: "_blank",
                                    color: "primary",
                                  },
                                },
                                [
                                  _vm._v(
                                    "\n                            View\n                        "
                                  ),
                                ]
                              ),
                            ],
                            1
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        {
                          staticClass: "pb-0",
                          attrs: { cols: "12", cm: "12" },
                        },
                        [
                          _c("v-file-input", {
                            attrs: {
                              accept: "image/*",
                              "error-messages": _vm.errors.image_data_sheet,
                              label: "Data Sheet",
                            },
                            model: {
                              value: _vm.form.image_data_sheet,
                              callback: function ($$v) {
                                _vm.$set(_vm.form, "image_data_sheet", $$v)
                              },
                              expression: "form.image_data_sheet",
                            },
                          }),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _vm.form.id > 0 && _vm.form.image_url_datasheet
                        ? _c(
                            "v-col",
                            { staticClass: "pb-0", attrs: { cols: "12" } },
                            [
                              _c(
                                "v-btn",
                                {
                                  staticClass: "mb-2",
                                  attrs: {
                                    href: _vm.form.image_url_datasheet,
                                    target: "_blank",
                                    color: "primary",
                                  },
                                },
                                [
                                  _vm._v(
                                    "\n                            View\n                        "
                                  ),
                                ]
                              ),
                            ],
                            1
                          )
                        : _vm._e(),
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