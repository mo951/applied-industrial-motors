"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_Order_View_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Order/View.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Order/View.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var brandservice = new _services_auth_default__WEBPACK_IMPORTED_MODULE_1__["default"]('orders');
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "auth.orders.view",
  watch: {},
  mounted: function mounted() {
    var _this = this;

    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _this.getOrder();

              _this.bread.push({
                text: "View",
                to: {
                  name: "auth.orders.view"
                },
                disabled: false,
                exact: true
              });

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  methods: {
    getOrder: function getOrder() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
        var res, serv, i;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this2.servicesSelected = [];

                if (!_this2.$route.params.id) {
                  _context2.next = 11;
                  break;
                }

                _context2.next = 4;
                return brandservice.get(_this2.$route.params.id);

              case 4:
                res = _context2.sent;
                _this2.order = res;
                serv = res.services.split(',');

                for (i = 0; i < serv.length; i++) {
                  _this2.servicesSelected.push(parseInt(serv[i]));
                }

                _this2.applicants = JSON.parse(res.applicants);
                _this2.currentStatus = res.order_status;
                console.log(res);

              case 11:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    updateStatus: function updateStatus() {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3() {
        var formData;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _this3.statusUpdating = true;
                formData = new FormData();
                formData.append('order_status', _this3.currentStatus);
                _context3.next = 5;
                return brandservice.update(formData, _this3.$route.params.id);

              case 5:
                _context3.next = 7;
                return _this3.getOrder();

              case 7:
                _this3.statusUpdating = false;

              case 8:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    downloadFile: function downloadFile(fileUrl) {
      window.open(fileUrl, '_blank').focus();
    },
    downloadPDF: function downloadPDF() {
      window.open(this.order.pdf_url, '_blank', 'noreferrer');
    }
  },
  computed: {
    user: function user() {
      return this.$store.getters.loggedInUser;
    }
  },
  data: function data() {
    return {
      servicesSelected: [],
      currentStatus: 0,
      statusUpdating: false,
      orderStatuses: [{
        id: 0,
        text: 'Pending'
      }, {
        id: 1,
        text: 'Seen'
      }, {
        id: 2,
        text: 'In Progress'
      }, {
        id: 3,
        text: 'Approved'
      }, {
        id: 4,
        text: 'Delivered'
      }, {
        id: 5,
        text: 'Paid'
      }, {
        id: 6,
        text: 'Payment Failed'
      }],
      servicesArr: [{
        name: 'Express Service',
        selected: false,
        cost: 100,
        cost_aed: 368,
        subname: 'Get your order in 12 Hours'
      }, {
        name: 'Airport Pickup',
        selected: false,
        cost: 50,
        cost_aed: 184,
        subname: 'Pre-book one way airport from DXB airport to anywhere in'
      }, {
        name: 'Travel Insurance',
        selected: false,
        cost: 80,
        cost_aed: 294,
        subname: 'Get travel insurance with your visa'
      }],
      order: {},
      applicants: [],
      bread: [{
        text: "Dashboard",
        to: {
          name: "auth.dashboard"
        },
        disabled: false,
        exact: true
      }, {
        text: "Orders",
        to: {
          name: "auth.orders.listing"
        },
        disabled: false,
        exact: true
      }]
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

/***/ "./resources/js/views/Order/View.vue":
/*!*******************************************!*\
  !*** ./resources/js/views/Order/View.vue ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _View_vue_vue_type_template_id_5792b445___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./View.vue?vue&type=template&id=5792b445& */ "./resources/js/views/Order/View.vue?vue&type=template&id=5792b445&");
/* harmony import */ var _View_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./View.vue?vue&type=script&lang=js& */ "./resources/js/views/Order/View.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _View_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _View_vue_vue_type_template_id_5792b445___WEBPACK_IMPORTED_MODULE_0__.render,
  _View_vue_vue_type_template_id_5792b445___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Order/View.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/Order/View.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/js/views/Order/View.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_View_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./View.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Order/View.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_View_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Order/View.vue?vue&type=template&id=5792b445&":
/*!**************************************************************************!*\
  !*** ./resources/js/views/Order/View.vue?vue&type=template&id=5792b445& ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_View_vue_vue_type_template_id_5792b445___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_View_vue_vue_type_template_id_5792b445___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_View_vue_vue_type_template_id_5792b445___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./View.vue?vue&type=template&id=5792b445& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Order/View.vue?vue&type=template&id=5792b445&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Order/View.vue?vue&type=template&id=5792b445&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Order/View.vue?vue&type=template&id=5792b445& ***!
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
        { attrs: { "no-gutters": "" } },
        [
          _c("v-col", { attrs: { cols: "12" } }, [
            _c(
              "div",
              { staticClass: "text-center" },
              [
                _c(
                  "v-chip",
                  {
                    staticClass: "ma-2",
                    attrs: { color: "pink", label: "", "text-color": "white" },
                  },
                  [
                    _c("v-icon", { attrs: { left: "" } }, [_vm._v("mdi-cash")]),
                    _vm._v(_vm._s(_vm.order.total) + "\n                "),
                  ],
                  1
                ),
                _vm._v(" "),
                _vm.order.currency
                  ? _c(
                      "v-chip",
                      {
                        staticClass: "ma-2",
                        attrs: { color: "primary", label: "" },
                      },
                      [
                        _c("v-icon", { attrs: { left: "" } }, [
                          _vm._v("mdi-currency-usd"),
                        ]),
                        _vm._v(
                          _vm._s(_vm.order.currency.toUpperCase()) +
                            "\n                "
                        ),
                      ],
                      1
                    )
                  : _vm._e(),
                _vm._v(" "),
                _vm.order.currency
                  ? _c(
                      "v-chip",
                      {
                        staticClass: "ma-2",
                        attrs: { color: "secondary", label: "" },
                      },
                      [
                        _c("v-icon", { attrs: { left: "" } }, [
                          _vm._v("mdi-calendar"),
                        ]),
                        _vm._v(
                          _vm._s(_vm.order.created_at_formatted) +
                            "\n                "
                        ),
                      ],
                      1
                    )
                  : _vm._e(),
                _vm._v(" "),
                _c("v-btn", { on: { click: _vm.downloadPDF } }, [
                  _vm._v("Download Order"),
                ]),
              ],
              1
            ),
          ]),
          _vm._v(" "),
          _c(
            "v-col",
            { attrs: { cols: "12" } },
            [
              _c(
                "v-card",
                {
                  staticClass: "mb-5 mx-auto ml-3 mr-3 pa-3",
                  attrs: {
                    loading: _vm.statusUpdating,
                    disabled: _vm.statusUpdating,
                    elevate: "2",
                  },
                },
                [
                  _c("h4", [_vm._v("Update Order Status")]),
                  _vm._v(" "),
                  _c("v-select", {
                    attrs: {
                      items: _vm.orderStatuses,
                      "item-text": "text",
                      "item-value": "id",
                      label: "Order Status",
                    },
                    model: {
                      value: _vm.currentStatus,
                      callback: function ($$v) {
                        _vm.currentStatus = $$v
                      },
                      expression: "currentStatus",
                    },
                  }),
                  _vm._v(" "),
                  _c("v-btn", { on: { click: _vm.updateStatus } }, [
                    _vm._v("Update"),
                  ]),
                ],
                1
              ),
            ],
            1
          ),
          _vm._v(" "),
          _vm._l(_vm.applicants, function (applicant, applicantk) {
            return _c(
              "v-col",
              { key: applicantk, attrs: { cols: "6", sm: "6" } },
              [
                _c(
                  "v-card",
                  { staticClass: "mx-auto ml-3" },
                  [
                    _c(
                      "v-list-item",
                      { attrs: { "two-line": "" } },
                      [
                        _c(
                          "v-list-item-content",
                          [
                            _c(
                              "v-list-item-title",
                              { staticClass: "text-h5" },
                              [_vm._v("Applicant " + _vm._s(applicantk + 1))]
                            ),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "v-card-text",
                      [
                        _c(
                          "v-row",
                          { attrs: { align: "center" } },
                          [
                            _c(
                              "v-col",
                              { staticClass: "text-h5", attrs: { cols: "6" } },
                              [
                                _vm._v(
                                  "\n                            " +
                                    _vm._s(applicant.first_name) +
                                    " " +
                                    _vm._s(applicant.last_name) +
                                    "\n                        "
                                ),
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "v-col",
                              { attrs: { cols: "6" } },
                              [
                                _c("v-img", {
                                  attrs: {
                                    src: applicant.photograph,
                                    alt: "Sunny image",
                                    width: "92",
                                  },
                                }),
                              ],
                              1
                            ),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("v-simple-table", {
                      scopedSlots: _vm._u(
                        [
                          {
                            key: "default",
                            fn: function () {
                              return [
                                _c("tbody", [
                                  _c("tr", [
                                    _c(
                                      "td",
                                      [
                                        _c("v-icon", [_vm._v("mdi-phone")]),
                                        _vm._v("Phone"),
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c("td", [_vm._v(_vm._s(applicant.phone))]),
                                  ]),
                                  _vm._v(" "),
                                  _c("tr", [
                                    _c(
                                      "td",
                                      [
                                        _c("v-icon", [_vm._v("mdi-email")]),
                                        _vm._v("Email"),
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c("td", [_vm._v(_vm._s(applicant.email))]),
                                  ]),
                                  _vm._v(" "),
                                  _c("tr", [
                                    _c(
                                      "td",
                                      [
                                        _c("v-icon", [_vm._v("mdi-flag")]),
                                        _vm._v("Country"),
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c("td", [
                                      _vm._v(
                                        _vm._s(_vm.order.country.country_name)
                                      ),
                                    ]),
                                  ]),
                                  _vm._v(" "),
                                  _c("tr", [
                                    _c(
                                      "td",
                                      [
                                        _c("v-icon", [_vm._v("mdi-passport")]),
                                        _vm._v("Passport #"),
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c("td", [
                                      _vm._v(_vm._s(applicant.passport_no)),
                                    ]),
                                  ]),
                                  _vm._v(" "),
                                  _c("tr", [
                                    _c(
                                      "td",
                                      [
                                        _c("v-icon", [_vm._v("mdi-calendar")]),
                                        _vm._v("Travel Date"),
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c("td", [
                                      _vm._v(_vm._s(applicant.travel_date)),
                                    ]),
                                  ]),
                                  _vm._v(" "),
                                  _c("tr", [
                                    _c(
                                      "td",
                                      [
                                        _c("v-icon", [_vm._v("mdi-briefcase")]),
                                        _vm._v("Profession"),
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c("td", [
                                      _vm._v(_vm._s(applicant.profession)),
                                    ]),
                                  ]),
                                  _vm._v(" "),
                                  _c("tr", [
                                    _c(
                                      "td",
                                      [
                                        _c("v-icon", [_vm._v("mdi-airport")]),
                                        _vm._v("Purpose"),
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c("td", [
                                      _vm._v(_vm._s(applicant.purpose)),
                                    ]),
                                  ]),
                                ]),
                              ]
                            },
                            proxy: true,
                          },
                        ],
                        null,
                        true
                      ),
                    }),
                    _vm._v(" "),
                    _c(
                      "v-card-actions",
                      [
                        _c(
                          "v-btn",
                          {
                            attrs: { small: "", text: "" },
                            on: {
                              click: function ($event) {
                                return _vm.downloadFile(applicant.passport)
                              },
                            },
                          },
                          [
                            _vm._v(
                              "\n                        Download Passport\n                    "
                            ),
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "v-btn",
                          {
                            attrs: { small: "", text: "" },
                            on: {
                              click: function ($event) {
                                return _vm.downloadFile(applicant.photograph)
                              },
                            },
                          },
                          [
                            _vm._v(
                              "\n                        Download Photograph\n                    "
                            ),
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "v-btn",
                          {
                            attrs: { small: "", text: "" },
                            on: {
                              click: function ($event) {
                                return _vm.downloadFile(applicant.nationalId)
                              },
                            },
                          },
                          [
                            _vm._v(
                              "\n                        Download National ID\n                    "
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
            )
          }),
        ],
        2
      ),
      _vm._v(" "),
      _c(
        "v-row",
        { attrs: { "no-gutters": "" } },
        [
          _c(
            "v-col",
            { attrs: { cols: "6" } },
            [
              _c(
                "v-list",
                { attrs: { disabled: "", flat: "", subheader: "" } },
                [
                  _c("v-subheader", [_vm._v("Services")]),
                  _vm._v(" "),
                  _c(
                    "v-list-item-group",
                    {
                      attrs: { multiple: "", "active-class": "" },
                      model: {
                        value: _vm.servicesSelected,
                        callback: function ($$v) {
                          _vm.servicesSelected = $$v
                        },
                        expression: "servicesSelected",
                      },
                    },
                    _vm._l(_vm.servicesArr, function (service, serviceK) {
                      return _c("v-list-item", {
                        key: serviceK,
                        scopedSlots: _vm._u(
                          [
                            {
                              key: "default",
                              fn: function (ref) {
                                var active = ref.active
                                return [
                                  _c(
                                    "v-list-item-action",
                                    [
                                      _c("v-checkbox", {
                                        attrs: { "input-value": active },
                                      }),
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-list-item-content",
                                    [
                                      _c("v-list-item-title", [
                                        _vm._v(_vm._s(service.name)),
                                      ]),
                                      _vm._v(" "),
                                      _c("v-list-item-subtitle", [
                                        _vm._v(_vm._s(service.subname)),
                                      ]),
                                    ],
                                    1
                                  ),
                                ]
                              },
                            },
                          ],
                          null,
                          true
                        ),
                      })
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
            { attrs: { cols: "10" } },
            [
              _c("h1", { staticClass: "text-center" }, [_vm._v("Timeline")]),
              _vm._v(" "),
              _c(
                "v-timeline",
                { attrs: { dense: "", clipped: "" } },
                [
                  _vm._l(_vm.order.statuses, function (status) {
                    return _c(
                      "v-timeline-item",
                      {
                        key: status.id,
                        staticClass: "mb-4",
                        attrs: { color: "grey", small: "" },
                      },
                      [
                        _c(
                          "v-row",
                          { attrs: { justify: "space-between" } },
                          [
                            _c("v-col", { attrs: { cols: "7" } }, [
                              _vm._v(
                                "\n                            Order Status Updated: \n                            " +
                                  _vm._s(
                                    _vm.orderStatuses.find(function (e) {
                                      return e.id == status.order_status
                                    }).text
                                  ) +
                                  "\n                            "
                              ),
                              _c("br"),
                              _vm._v(" "),
                              _c("small", [
                                _vm._v(
                                  _vm._s(
                                    status.user_id > 0
                                      ? "Updated By: " + status.user.name
                                      : ""
                                  )
                                ),
                              ]),
                            ]),
                            _vm._v(" "),
                            _c(
                              "v-col",
                              {
                                staticClass: "text-right",
                                attrs: { cols: "5" },
                              },
                              [
                                _c(
                                  "v-chip",
                                  {
                                    staticClass: "ma-2",
                                    attrs: {
                                      small: "",
                                      color: "secondary",
                                      label: "",
                                    },
                                  },
                                  [
                                    _c("v-icon", { attrs: { left: "" } }, [
                                      _vm._v("mdi-calendar"),
                                    ]),
                                    _vm._v(
                                      _vm._s(status.created_at_formatted) +
                                        "\n                            "
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
                  }),
                  _vm._v(" "),
                  _c(
                    "v-timeline-item",
                    { staticClass: "mb-4" },
                    [
                      _c(
                        "v-row",
                        { attrs: { justify: "space-between" } },
                        [
                          _c("v-col", { attrs: { cols: "7" } }, [
                            _vm._v(
                              "\n                            Order Status Created\n                        "
                            ),
                          ]),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            { staticClass: "text-right", attrs: { cols: "5" } },
                            [
                              _c(
                                "v-chip",
                                {
                                  staticClass: "ma-2",
                                  attrs: {
                                    small: "",
                                    color: "secondary",
                                    label: "",
                                  },
                                },
                                [
                                  _c("v-icon", { attrs: { left: "" } }, [
                                    _vm._v("mdi-calendar"),
                                  ]),
                                  _vm._v(
                                    _vm._s(_vm.order.created_at_formatted) +
                                      "\n                            "
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
                2
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