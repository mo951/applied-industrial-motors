"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_CustomProduct_Form_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/CustomProduct/Form.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/CustomProduct/Form.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_auth_default__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @services/auth/default */ "./resources/js/services/auth/default.js");
/* harmony import */ var _services_auth_otherrequests__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/auth/otherrequests */ "./resources/js/services/auth/otherrequests.js");


function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var brandservice = new _services_auth_default__WEBPACK_IMPORTED_MODULE_1__["default"]('custom-products');

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "auth.customproducts.add",
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
              return _services_auth_otherrequests__WEBPACK_IMPORTED_MODULE_2__["default"].get('shipping-class').then(function (e) {
                return e.data;
              });

            case 2:
              _this.shippingClasses = _context.sent;
              _context.next = 5;
              return _services_auth_otherrequests__WEBPACK_IMPORTED_MODULE_2__["default"].get('categories-parents').then(function (e) {
                return e.data.data;
              });

            case 5:
              categories = _context.sent;
              _context.next = 8;
              return _services_auth_otherrequests__WEBPACK_IMPORTED_MODULE_2__["default"].get('clipart-categories').then(function (e) {
                return e.data.data;
              });

            case 8:
              _this.clipartsData = _context.sent;
              _context.next = 11;
              return _services_auth_otherrequests__WEBPACK_IMPORTED_MODULE_2__["default"].get('products?type=2').then(function (e) {
                return e.data.data;
              });

            case 11:
              _this.upsellProductsNormal = _context.sent;
              _this.categories = _toConsumableArray(categories);

              if (!_this.$route.params.id) {
                _context.next = 25;
                break;
              }

              _context.next = 16;
              return brandservice.get(_this.form.id);

            case 16:
              res = _context.sent;
              _this.initialCategory = res.category_id ? res.category_id : 0;
              _this.form = {
                name: res.name ? res.name : '',
                slug: res.slug ? res.slug : '',
                price: res.price ? res.price : '',
                // category_id: [(res.category_id?res.category_id:0)],
                category_id: res.categoryIds ? res.categoryIds : [],
                image_url: res.image_url,
                is_active: res.is_active == 1 ? true : false,
                id: _this.$route.params.id,
                upsell_products: [],
                shipping_class_id: parseInt(res.shipping_class_id)
              };

              if (res.upsell_products) {
                _this.form.upsell_products = JSON.parse(res.upsell_products);
              }

              _this.qtyDiscounts = res.qty_discounts ? JSON.parse(res.qty_discounts) : [];
              _this.customizer = JSON.parse(res.canvas_data_selection);

              _this.bread.push({
                text: "Edit",
                to: {
                  name: "auth.customproducts.edit",
                  params: {
                    id: _this.$route.params.id
                  }
                },
                disabled: false,
                exact: true
              });

              _context.next = 26;
              break;

            case 25:
              _this.bread.push({
                text: "Add",
                to: {
                  name: "auth.customproducts.add"
                },
                disabled: false,
                exact: true
              });

            case 26:
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
        slug: [],
        price: [],
        is_active: [],
        image: [],
        category_id: [],
        shipping_class_id: []
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
                  _context2.next = 25;
                  break;
                }

                this.btnloading = true;
                formdata = new FormData();
                formdata.append("name", this.form.name);
                formdata.append("slug", this.form.slug);
                formdata.append("price", this.form.price);
                formdata.append("category_id", this.form.category_id);
                formdata.append("canvas_data_selection", JSON.stringify(this.customizer));
                formdata.append("is_active", this.form.is_active == true ? 1 : 0);
                formdata.append("qty_discounts", JSON.stringify(this.qtyDiscounts));
                formdata.append("upsell_products", JSON.stringify(this.form.upsell_products));
                formdata.append("shipping_class_id", this.form.shipping_class_id);

                if (this.form.image) {
                  formdata.append("image", this.form.image);
                }

                this.btnloading = false;

                if (!(this.form.id > 0)) {
                  _context2.next = 21;
                  break;
                }

                _context2.next = 18;
                return brandservice.update(formdata, this.form.id);

              case 18:
                res = _context2.sent;
                _context2.next = 24;
                break;

              case 21:
                _context2.next = 23;
                return brandservice.create(formdata);

              case 23:
                res = _context2.sent;

              case 24:
                if (!res.status) {
                  if (res.data.name) {
                    this.errors.name = res.data.name;
                  }

                  if (res.data.slug) {
                    this.errors.slug = res.data.slug;
                  }

                  if (res.data.price) {
                    this.errors.price = res.data.price;
                  }

                  if (res.data.category_id) {
                    this.errors.category_id = res.data.category_id;
                  }

                  if (res.data.is_active) {
                    this.errors.is_active = res.data.is_active;
                  }

                  if (res.data.image) {
                    this.errors.image = res.data.image;
                  }

                  if (res.data.shipping_class_id) {
                    this.errors.shipping_class_id = res.data.shipping_class_id;
                  } //errors here

                } else {
                  //suuccess here
                  this.$router.push({
                    name: "auth.customproducts.listing"
                  });
                }

              case 25:
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
      this.form.category_id = e;
    },
    deleteLayer: function deleteLayer(key) {
      this.customizer.layers.splice(key, 1);
    },
    deleteBg: function deleteBg(key) {
      this.customizer.backgrounds.splice(key, 1);
    },
    addBg: function addBg() {
      var layersColors = this.customizer.layers.map(function (e) {
        return {
          id: e.id,
          color: ''
        };
      });
      this.customizer.backgrounds.push({
        image_url: '',
        label_image_url: '',
        label: '',
        colorOptions: layersColors
      });
    },
    addTextBox: function addTextBox() {
      // this.customizer.backgrounds = [];
      this.ranId--;
      var date = new Date();
      var randomMore = date.getTime();
      this.customizer.layers.push({
        id: 'layer' + this.ranId + randomMore,
        type: 'textbox',
        label: '',
        order: this.customizer.layers.length + 1,
        position: {
          x: 0,
          y: 0
        },
        length: {
          height: 0,
          width: 0
        }
      });
      this.adjustBgColors();
    },
    addClipArt: function addClipArt() {
      // this.customizer.backgrounds = [];
      this.ranId--;
      var date = new Date();
      var randomMore = date.getTime();
      this.customizer.layers.push({
        id: 'layer' + this.ranId + randomMore,
        type: 'clipart',
        label: '',
        clipArtCategory: 0,
        clipArt: 0,
        order: this.customizer.layers.length + 1,
        position: {
          x: 0,
          y: 0
        },
        length: {
          height: 0,
          width: 0
        }
      });
      this.adjustBgColors();
    },
    adjustBgColors: function adjustBgColors() {
      for (var i = 0; i < this.customizer.backgrounds.length; i++) {
        var layersColors = this.customizer.layers.map(function (e) {
          return {
            id: e.id,
            color: '#000000'
          };
        });
        this.customizer.backgrounds[i].colorOptions = layersColors;
      }
    },
    uploadFile: function uploadFile(ev, layer, key) {
      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3() {
        var formData, data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (!ev) {
                  _context3.next = 7;
                  break;
                }

                formData = new FormData();
                formData.append('file', ev);
                _context3.next = 5;
                return _services_auth_otherrequests__WEBPACK_IMPORTED_MODULE_2__["default"].post('custom/upload-image', formData).then(function (e) {
                  return e.data;
                });

              case 5:
                data = _context3.sent;
                layer[key] = data.url;

              case 7:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    addQtyDiscount: function addQtyDiscount() {
      this.qtyDiscounts.push({
        qty: 0,
        discountPercent: 0
      });
    },
    removeQtyDiscount: function removeQtyDiscount(key) {
      this.qtyDiscounts.splice(key, 1);
    }
  },
  computed: {
    user: function user() {
      return this.$store.getters.loggedInUser;
    }
  },
  data: function data() {
    return {
      upsellProductsNormal: [],
      qtyDiscounts: [],
      clipartsData: [],
      ranId: 99999,
      customizer: {
        size: {
          width: 0,
          height: 0
        },
        backgrounds: [],
        layers: []
      },
      initialCategory: 0,
      categories: [],
      form: {
        id: this.$route.params.id ? this.$route.params.id : 0,
        name: '',
        slug: '',
        price: 0,
        category_id: [0],
        image_url: '',
        is_active: true,
        image: undefined,
        upsell_products: [],
        shipping_class_id: 0
      },
      errors: {
        name: [],
        slug: [],
        price: [],
        image: [],
        is_active: [],
        category_id: [],
        shipping_class_id: []
      },
      bread: [{
        text: "Dashboard",
        to: {
          name: "auth.dashboard"
        },
        disabled: false,
        exact: true
      }, {
        text: "Custom Product",
        to: {
          name: "auth.customproducts.listing"
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

/***/ "./resources/js/views/CustomProduct/Form.vue":
/*!***************************************************!*\
  !*** ./resources/js/views/CustomProduct/Form.vue ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Form_vue_vue_type_template_id_654ff4f4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Form.vue?vue&type=template&id=654ff4f4& */ "./resources/js/views/CustomProduct/Form.vue?vue&type=template&id=654ff4f4&");
/* harmony import */ var _Form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Form.vue?vue&type=script&lang=js& */ "./resources/js/views/CustomProduct/Form.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Form_vue_vue_type_template_id_654ff4f4___WEBPACK_IMPORTED_MODULE_0__.render,
  _Form_vue_vue_type_template_id_654ff4f4___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/CustomProduct/Form.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/CustomProduct/Form.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/views/CustomProduct/Form.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Form.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/CustomProduct/Form.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/CustomProduct/Form.vue?vue&type=template&id=654ff4f4&":
/*!**********************************************************************************!*\
  !*** ./resources/js/views/CustomProduct/Form.vue?vue&type=template&id=654ff4f4& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_template_id_654ff4f4___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_template_id_654ff4f4___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_template_id_654ff4f4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Form.vue?vue&type=template&id=654ff4f4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/CustomProduct/Form.vue?vue&type=template&id=654ff4f4&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/CustomProduct/Form.vue?vue&type=template&id=654ff4f4&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/CustomProduct/Form.vue?vue&type=template&id=654ff4f4& ***!
  \*************************************************************************************************************************************************************************************************************************/
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
                        { staticClass: "pb-0", attrs: { cols: "3", sm: "3" } },
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
                        { staticClass: "pb-0", attrs: { cols: "3", sm: "3" } },
                        [
                          _c("v-text-field", {
                            attrs: {
                              rules: [_vm.rules.required],
                              "error-messages": _vm.errors.price,
                              label: "Price $",
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
                          _c("v-select", {
                            attrs: {
                              items: _vm.shippingClasses,
                              "item-text": "class_name",
                              "item-value": "id",
                              label: "Shipping Class",
                              required: "",
                              "error-messages": _vm.errors.shipping_class_id,
                            },
                            model: {
                              value: _vm.form.shipping_class_id,
                              callback: function ($$v) {
                                _vm.$set(_vm.form, "shipping_class_id", $$v)
                              },
                              expression: "form.shipping_class_id",
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
                              items: _vm.upsellProductsNormal,
                              label: "Upsell Products",
                              multiple: "",
                              "item-text": "product_name",
                              "item-value": "id",
                              hint: "Select products you need to show to customers for Upsell",
                              "persistent-hint": "",
                            },
                            model: {
                              value: _vm.form.upsell_products,
                              callback: function ($$v) {
                                _vm.$set(_vm.form, "upsell_products", $$v)
                              },
                              expression: "form.upsell_products",
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
                          _c("h3", [_vm._v("Select Category")]),
                          _vm._v(" "),
                          _vm.errors.category_id.length > 0
                            ? _c(
                                "v-alert",
                                { attrs: { outlined: "", type: "error" } },
                                [
                                  _vm._v(
                                    "\n                        " +
                                      _vm._s(_vm.errors.category_id[0]) +
                                      "\n                        "
                                  ),
                                ]
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          _c("v-treeview", {
                            attrs: {
                              hoverable: "",
                              shaped: "",
                              activatable: "",
                              color: "red",
                              items: _vm.categories,
                              active: _vm.form.category_id,
                              "multiple-active": "",
                              rules: [_vm.rules.required],
                            },
                            on: { "update:active": _vm.updateValudCategory },
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
                          attrs: { cols: "12", cm: "12" },
                        },
                        [
                          _c("v-file-input", {
                            attrs: {
                              accept: "image/*",
                              "error-messages": _vm.errors.image,
                              label: "Image",
                            },
                            model: {
                              value: _vm.form.image,
                              callback: function ($$v) {
                                _vm.$set(_vm.form, "image", $$v)
                              },
                              expression: "form.image",
                            },
                          }),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _vm.form.id > 0 && _vm.form.image_url
                        ? _c(
                            "v-col",
                            {
                              staticClass: "pb-0",
                              attrs: { cols: "12", cm: "12" },
                            },
                            [
                              _c(
                                "v-avatar",
                                [
                                  _c("v-img", {
                                    attrs: {
                                      "lazy-src": _vm.form.image_url,
                                      "max-height": "150",
                                      "max-width": "250",
                                      src: _vm.form.image_url,
                                    },
                                  }),
                                ],
                                1
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
                        [_c("h4", [_vm._v("Build Customizer")])]
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        { staticClass: "pb-0", attrs: { cols: "6", cm: "6" } },
                        [
                          _c("v-text-field", {
                            attrs: { label: "Canvas Width", type: "number" },
                            model: {
                              value: _vm.customizer.size.width,
                              callback: function ($$v) {
                                _vm.$set(_vm.customizer.size, "width", $$v)
                              },
                              expression: "customizer.size.width",
                            },
                          }),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        { staticClass: "pb-0", attrs: { cols: "6", cm: "6" } },
                        [
                          _c("v-text-field", {
                            attrs: { label: "Canvas Height", type: "number" },
                            model: {
                              value: _vm.customizer.size.height,
                              callback: function ($$v) {
                                _vm.$set(_vm.customizer.size, "height", $$v)
                              },
                              expression: "customizer.size.height",
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
                          _c(
                            "p",
                            [
                              _vm._v("Add TextBoxes "),
                              _c(
                                "v-btn",
                                {
                                  attrs: {
                                    color: "success",
                                    fab: "",
                                    "x-small": "",
                                    dark: "",
                                  },
                                  on: { click: _vm.addTextBox },
                                },
                                [_c("v-icon", [_vm._v("mdi-plus")])],
                                1
                              ),
                            ],
                            1
                          ),
                        ]
                      ),
                      _vm._v(" "),
                      _vm.customizer.layers.map(function (e) {
                        return e.type == "textbox"
                      }).length > 0
                        ? _c(
                            "v-col",
                            {
                              staticClass: "pb-0",
                              attrs: { cols: "12", cm: "12" },
                            },
                            [
                              _c("v-simple-table", {
                                scopedSlots: _vm._u(
                                  [
                                    {
                                      key: "default",
                                      fn: function () {
                                        return [
                                          _c("thead", [
                                            _c("tr", [
                                              _c(
                                                "th",
                                                { staticClass: "text-left" },
                                                [
                                                  _vm._v(
                                                    "\n                                            Label\n                                        "
                                                  ),
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "th",
                                                { staticClass: "text-left" },
                                                [
                                                  _vm._v(
                                                    "\n                                            Order\n                                        "
                                                  ),
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "th",
                                                { staticClass: "text-left" },
                                                [
                                                  _vm._v(
                                                    "\n                                            X Position\n                                        "
                                                  ),
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "th",
                                                { staticClass: "text-left" },
                                                [
                                                  _vm._v(
                                                    "\n                                            Y Position\n                                        "
                                                  ),
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "th",
                                                { staticClass: "text-left" },
                                                [
                                                  _vm._v(
                                                    "\n                                            Height/Width\n                                        "
                                                  ),
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c("th", {
                                                staticClass: "text-left",
                                              }),
                                            ]),
                                          ]),
                                          _vm._v(" "),
                                          _c(
                                            "tbody",
                                            _vm._l(
                                              _vm.customizer.layers,
                                              function (layer, layerk) {
                                                return _c(
                                                  "tr",
                                                  {
                                                    directives: [
                                                      {
                                                        name: "show",
                                                        rawName: "v-show",
                                                        value:
                                                          layer.type ==
                                                          "textbox",
                                                        expression:
                                                          "layer.type=='textbox'",
                                                      },
                                                    ],
                                                    key: layerk,
                                                  },
                                                  [
                                                    _c(
                                                      "td",
                                                      [
                                                        _c("v-text-field", {
                                                          attrs: {
                                                            rules: [
                                                              _vm.rules
                                                                .required,
                                                            ],
                                                          },
                                                          model: {
                                                            value: layer.label,
                                                            callback: function (
                                                              $$v
                                                            ) {
                                                              _vm.$set(
                                                                layer,
                                                                "label",
                                                                $$v
                                                              )
                                                            },
                                                            expression:
                                                              "layer.label",
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
                                                          },
                                                          model: {
                                                            value: layer.order,
                                                            callback: function (
                                                              $$v
                                                            ) {
                                                              _vm.$set(
                                                                layer,
                                                                "order",
                                                                $$v
                                                              )
                                                            },
                                                            expression:
                                                              "layer.order",
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
                                                            step: "any",
                                                          },
                                                          model: {
                                                            value:
                                                              layer.position.x,
                                                            callback: function (
                                                              $$v
                                                            ) {
                                                              _vm.$set(
                                                                layer.position,
                                                                "x",
                                                                $$v
                                                              )
                                                            },
                                                            expression:
                                                              "layer.position.x",
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
                                                            step: "any",
                                                          },
                                                          model: {
                                                            value:
                                                              layer.position.y,
                                                            callback: function (
                                                              $$v
                                                            ) {
                                                              _vm.$set(
                                                                layer.position,
                                                                "y",
                                                                $$v
                                                              )
                                                            },
                                                            expression:
                                                              "layer.position.y",
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
                                                            label: "Height",
                                                            step: "any",
                                                          },
                                                          model: {
                                                            value:
                                                              layer.length
                                                                .height,
                                                            callback: function (
                                                              $$v
                                                            ) {
                                                              _vm.$set(
                                                                layer.length,
                                                                "height",
                                                                $$v
                                                              )
                                                            },
                                                            expression:
                                                              "layer.length.height",
                                                          },
                                                        }),
                                                        _vm._v(" "),
                                                        _c("v-text-field", {
                                                          attrs: {
                                                            type: "number",
                                                            label: "Width",
                                                            step: "any",
                                                          },
                                                          model: {
                                                            value:
                                                              layer.length
                                                                .width,
                                                            callback: function (
                                                              $$v
                                                            ) {
                                                              _vm.$set(
                                                                layer.length,
                                                                "width",
                                                                $$v
                                                              )
                                                            },
                                                            expression:
                                                              "layer.length.width",
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
                                                              click: function (
                                                                $event
                                                              ) {
                                                                return _vm.deleteLayer(
                                                                  layerk
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
                                                  ]
                                                )
                                              }
                                            ),
                                            0
                                          ),
                                        ]
                                      },
                                      proxy: true,
                                    },
                                  ],
                                  null,
                                  false,
                                  2116722264
                                ),
                              }),
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
                          _c(
                            "p",
                            [
                              _vm._v("Add ClipArt "),
                              _c(
                                "v-btn",
                                {
                                  attrs: {
                                    color: "success",
                                    fab: "",
                                    "x-small": "",
                                    dark: "",
                                  },
                                  on: { click: _vm.addClipArt },
                                },
                                [_c("v-icon", [_vm._v("mdi-plus")])],
                                1
                              ),
                            ],
                            1
                          ),
                        ]
                      ),
                      _vm._v(" "),
                      _vm.customizer.layers.map(function (e) {
                        return e.type == "clipart"
                      }).length > 0
                        ? _c(
                            "v-col",
                            {
                              staticClass: "pb-0",
                              attrs: { cols: "12", cm: "12" },
                            },
                            [
                              _c("v-simple-table", {
                                scopedSlots: _vm._u(
                                  [
                                    {
                                      key: "default",
                                      fn: function () {
                                        return [
                                          _c("thead", [
                                            _c("tr", [
                                              _c(
                                                "th",
                                                { staticClass: "text-left" },
                                                [
                                                  _vm._v(
                                                    "\n                                            Label\n                                        "
                                                  ),
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "th",
                                                { staticClass: "text-left" },
                                                [
                                                  _vm._v(
                                                    "\n                                            Order\n                                        "
                                                  ),
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "th",
                                                { staticClass: "text-left" },
                                                [
                                                  _vm._v(
                                                    "\n                                            X/Y Position\n                                        "
                                                  ),
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "th",
                                                { staticClass: "text-left" },
                                                [
                                                  _vm._v(
                                                    "\n                                            Height/Width\n                                        "
                                                  ),
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "th",
                                                { staticClass: "text-left" },
                                                [
                                                  _vm._v(
                                                    "\n                                            Clip Art\n                                        "
                                                  ),
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c("th", {
                                                staticClass: "text-left",
                                              }),
                                            ]),
                                          ]),
                                          _vm._v(" "),
                                          _c(
                                            "tbody",
                                            _vm._l(
                                              _vm.customizer.layers,
                                              function (layer, layerk) {
                                                return layer.type == "clipart"
                                                  ? _c("tr", { key: layerk }, [
                                                      _c(
                                                        "td",
                                                        [
                                                          _c("v-text-field", {
                                                            attrs: {
                                                              rules: [
                                                                _vm.rules
                                                                  .required,
                                                              ],
                                                            },
                                                            model: {
                                                              value:
                                                                layer.label,
                                                              callback:
                                                                function ($$v) {
                                                                  _vm.$set(
                                                                    layer,
                                                                    "label",
                                                                    $$v
                                                                  )
                                                                },
                                                              expression:
                                                                "layer.label",
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
                                                            },
                                                            model: {
                                                              value:
                                                                layer.order,
                                                              callback:
                                                                function ($$v) {
                                                                  _vm.$set(
                                                                    layer,
                                                                    "order",
                                                                    $$v
                                                                  )
                                                                },
                                                              expression:
                                                                "layer.order",
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
                                                              label: "X",
                                                              step: "any",
                                                            },
                                                            model: {
                                                              value:
                                                                layer.position
                                                                  .x,
                                                              callback:
                                                                function ($$v) {
                                                                  _vm.$set(
                                                                    layer.position,
                                                                    "x",
                                                                    $$v
                                                                  )
                                                                },
                                                              expression:
                                                                "layer.position.x",
                                                            },
                                                          }),
                                                          _vm._v(" "),
                                                          _c("v-text-field", {
                                                            attrs: {
                                                              type: "number",
                                                              label: "Y",
                                                              step: "any",
                                                            },
                                                            model: {
                                                              value:
                                                                layer.position
                                                                  .y,
                                                              callback:
                                                                function ($$v) {
                                                                  _vm.$set(
                                                                    layer.position,
                                                                    "y",
                                                                    $$v
                                                                  )
                                                                },
                                                              expression:
                                                                "layer.position.y",
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
                                                              label: "Height",
                                                              step: "any",
                                                            },
                                                            model: {
                                                              value:
                                                                layer.length
                                                                  .height,
                                                              callback:
                                                                function ($$v) {
                                                                  _vm.$set(
                                                                    layer.length,
                                                                    "height",
                                                                    $$v
                                                                  )
                                                                },
                                                              expression:
                                                                "layer.length.height",
                                                            },
                                                          }),
                                                          _vm._v(" "),
                                                          _c("v-text-field", {
                                                            attrs: {
                                                              type: "number",
                                                              label: "Width",
                                                              step: "any",
                                                            },
                                                            model: {
                                                              value:
                                                                layer.length
                                                                  .width,
                                                              callback:
                                                                function ($$v) {
                                                                  _vm.$set(
                                                                    layer.length,
                                                                    "width",
                                                                    $$v
                                                                  )
                                                                },
                                                              expression:
                                                                "layer.length.width",
                                                            },
                                                          }),
                                                        ],
                                                        1
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "td",
                                                        [
                                                          _c("v-select", {
                                                            attrs: {
                                                              items:
                                                                _vm.clipartsData,
                                                              "item-text":
                                                                "name",
                                                              "item-value":
                                                                "id",
                                                            },
                                                            model: {
                                                              value:
                                                                layer.clipArtCategory,
                                                              callback:
                                                                function ($$v) {
                                                                  _vm.$set(
                                                                    layer,
                                                                    "clipArtCategory",
                                                                    $$v
                                                                  )
                                                                },
                                                              expression:
                                                                "layer.clipArtCategory",
                                                            },
                                                          }),
                                                          _vm._v(" "),
                                                          layer.clipArtCategory >
                                                          0
                                                            ? _c("v-select", {
                                                                attrs: {
                                                                  items:
                                                                    _vm.clipartsData.find(
                                                                      function (
                                                                        e
                                                                      ) {
                                                                        return (
                                                                          e.id ==
                                                                          layer.clipArtCategory
                                                                        )
                                                                      }
                                                                    ).cliparts,
                                                                  "item-text":
                                                                    "name",
                                                                  "item-value":
                                                                    "id",
                                                                },
                                                                model: {
                                                                  value:
                                                                    layer.clipArt,
                                                                  callback:
                                                                    function (
                                                                      $$v
                                                                    ) {
                                                                      _vm.$set(
                                                                        layer,
                                                                        "clipArt",
                                                                        $$v
                                                                      )
                                                                    },
                                                                  expression:
                                                                    "layer.clipArt",
                                                                },
                                                              })
                                                            : _vm._e(),
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
                                                                click:
                                                                  function (
                                                                    $event
                                                                  ) {
                                                                    return _vm.deleteLayer(
                                                                      layerk
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
                                                  : _vm._e()
                                              }
                                            ),
                                            0
                                          ),
                                        ]
                                      },
                                      proxy: true,
                                    },
                                  ],
                                  null,
                                  false,
                                  1300779003
                                ),
                              }),
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
                          _c(
                            "p",
                            [
                              _vm._v("Add Backgrounds "),
                              _c(
                                "v-btn",
                                {
                                  attrs: {
                                    color: "success",
                                    fab: "",
                                    "x-small": "",
                                    dark: "",
                                  },
                                  on: { click: _vm.addBg },
                                },
                                [_c("v-icon", [_vm._v("mdi-plus")])],
                                1
                              ),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-alert",
                            { attrs: { outlined: "", type: "info" } },
                            [
                              _vm._v(
                                "\n                        Add Backgrounds in end, so that you can update textboxes, arts color according to Background\n                        "
                              ),
                            ]
                          ),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _vm.customizer.backgrounds.length > 0
                        ? _c(
                            "v-col",
                            {
                              staticClass: "pb-0",
                              attrs: { cols: "12", cm: "12" },
                            },
                            [
                              _c("v-simple-table", {
                                scopedSlots: _vm._u(
                                  [
                                    {
                                      key: "default",
                                      fn: function () {
                                        return [
                                          _c("thead", [
                                            _c("tr", [
                                              _c(
                                                "th",
                                                { staticClass: "text-left" },
                                                [
                                                  _vm._v(
                                                    "\n                                            Label\n                                        "
                                                  ),
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "th",
                                                { staticClass: "text-left" },
                                                [
                                                  _vm._v(
                                                    "\n                                            Label Image\n                                        "
                                                  ),
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "th",
                                                { staticClass: "text-left" },
                                                [
                                                  _vm._v(
                                                    "\n                                            Background Image\n                                        "
                                                  ),
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "th",
                                                { staticClass: "text-left" },
                                                [
                                                  _vm._v(
                                                    "\n                                            Layer Colors\n                                        "
                                                  ),
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c("th", {
                                                staticClass: "text-left",
                                              }),
                                            ]),
                                          ]),
                                          _vm._v(" "),
                                          _c(
                                            "tbody",
                                            _vm._l(
                                              _vm.customizer.backgrounds,
                                              function (layer, layerk) {
                                                return _c(
                                                  "tr",
                                                  { key: layerk },
                                                  [
                                                    _c(
                                                      "td",
                                                      [
                                                        _c("v-text-field", {
                                                          attrs: {
                                                            rules: [
                                                              _vm.rules
                                                                .required,
                                                            ],
                                                          },
                                                          model: {
                                                            value: layer.label,
                                                            callback: function (
                                                              $$v
                                                            ) {
                                                              _vm.$set(
                                                                layer,
                                                                "label",
                                                                $$v
                                                              )
                                                            },
                                                            expression:
                                                              "layer.label",
                                                          },
                                                        }),
                                                      ],
                                                      1
                                                    ),
                                                    _vm._v(" "),
                                                    _c(
                                                      "td",
                                                      [
                                                        _c("v-file-input", {
                                                          on: {
                                                            change: function (
                                                              $event
                                                            ) {
                                                              return _vm.uploadFile(
                                                                $event,
                                                                layer,
                                                                "label_image_url"
                                                              )
                                                            },
                                                          },
                                                        }),
                                                        _vm._v(" "),
                                                        layer.label_image_url
                                                          ? _c("v-img", {
                                                              attrs: {
                                                                "lazy-src":
                                                                  layer.label_image_url,
                                                                "max-height":
                                                                  "50",
                                                                "max-width":
                                                                  "50",
                                                                src: layer.label_image_url,
                                                              },
                                                            })
                                                          : _vm._e(),
                                                        _vm._v(" "),
                                                        layer.label_image_url
                                                          ? _c(
                                                              "a",
                                                              {
                                                                attrs: {
                                                                  href: layer.label_image_url,
                                                                  target:
                                                                    "_blank",
                                                                },
                                                              },
                                                              [
                                                                _vm._v(
                                                                  "View Image"
                                                                ),
                                                              ]
                                                            )
                                                          : _vm._e(),
                                                      ],
                                                      1
                                                    ),
                                                    _vm._v(" "),
                                                    _c(
                                                      "td",
                                                      [
                                                        _c("v-file-input", {
                                                          on: {
                                                            change: function (
                                                              $event
                                                            ) {
                                                              return _vm.uploadFile(
                                                                $event,
                                                                layer,
                                                                "image_url"
                                                              )
                                                            },
                                                          },
                                                        }),
                                                        _vm._v(" "),
                                                        layer.image_url
                                                          ? _c("v-img", {
                                                              attrs: {
                                                                "lazy-src":
                                                                  layer.image_url,
                                                                "max-height":
                                                                  "50",
                                                                "max-width":
                                                                  "50",
                                                                src: layer.image_url,
                                                              },
                                                            })
                                                          : _vm._e(),
                                                        _vm._v(" "),
                                                        layer.image_url
                                                          ? _c(
                                                              "a",
                                                              {
                                                                attrs: {
                                                                  href: layer.image_url,
                                                                  target:
                                                                    "_blank",
                                                                },
                                                              },
                                                              [
                                                                _vm._v(
                                                                  "View Image"
                                                                ),
                                                              ]
                                                            )
                                                          : _vm._e(),
                                                      ],
                                                      1
                                                    ),
                                                    _vm._v(" "),
                                                    _c(
                                                      "td",
                                                      _vm._l(
                                                        layer.colorOptions,
                                                        function (
                                                          colorOp,
                                                          colorOpK
                                                        ) {
                                                          return _c(
                                                            "div",
                                                            { key: colorOpK },
                                                            [
                                                              _c(
                                                                "label",
                                                                {
                                                                  staticClass:
                                                                    "d-block",
                                                                  attrs: {
                                                                    for: colorOp.id,
                                                                  },
                                                                },
                                                                [
                                                                  _vm._v(
                                                                    _vm._s(
                                                                      colorOp.id
                                                                    )
                                                                  ),
                                                                ]
                                                              ),
                                                              _vm._v(" "),
                                                              _c("input", {
                                                                directives: [
                                                                  {
                                                                    name: "model",
                                                                    rawName:
                                                                      "v-model",
                                                                    value:
                                                                      colorOp.color,
                                                                    expression:
                                                                      "colorOp.color",
                                                                  },
                                                                ],
                                                                attrs: {
                                                                  type: "color",
                                                                  id: colorOp.id,
                                                                },
                                                                domProps: {
                                                                  value:
                                                                    colorOp.color,
                                                                },
                                                                on: {
                                                                  input:
                                                                    function (
                                                                      $event
                                                                    ) {
                                                                      if (
                                                                        $event
                                                                          .target
                                                                          .composing
                                                                      ) {
                                                                        return
                                                                      }
                                                                      _vm.$set(
                                                                        colorOp,
                                                                        "color",
                                                                        $event
                                                                          .target
                                                                          .value
                                                                      )
                                                                    },
                                                                },
                                                              }),
                                                            ]
                                                          )
                                                        }
                                                      ),
                                                      0
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
                                                              click: function (
                                                                $event
                                                              ) {
                                                                return _vm.deleteBg(
                                                                  layerk
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
                                                  ]
                                                )
                                              }
                                            ),
                                            0
                                          ),
                                        ]
                                      },
                                      proxy: true,
                                    },
                                  ],
                                  null,
                                  false,
                                  3333416451
                                ),
                              }),
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
                          _c(
                            "p",
                            [
                              _vm._v("Add Quantity Discount "),
                              _c(
                                "v-btn",
                                {
                                  attrs: {
                                    color: "success",
                                    fab: "",
                                    "x-small": "",
                                    dark: "",
                                  },
                                  on: { click: _vm.addQtyDiscount },
                                },
                                [_c("v-icon", [_vm._v("mdi-plus")])],
                                1
                              ),
                            ],
                            1
                          ),
                        ]
                      ),
                      _vm._v(" "),
                      _vm.customizer.backgrounds.length > 0
                        ? _c(
                            "v-col",
                            {
                              staticClass: "pb-0",
                              attrs: { cols: "12", cm: "12" },
                            },
                            [
                              _c("v-simple-table", {
                                scopedSlots: _vm._u(
                                  [
                                    {
                                      key: "default",
                                      fn: function () {
                                        return [
                                          _c("thead", [
                                            _c("tr", [
                                              _c(
                                                "th",
                                                { staticClass: "text-left" },
                                                [
                                                  _vm._v(
                                                    "\n                                            Qty\n                                        "
                                                  ),
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "th",
                                                { staticClass: "text-left" },
                                                [
                                                  _vm._v(
                                                    "\n                                            Discount %\n                                        "
                                                  ),
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c("th", {
                                                staticClass: "text-left",
                                              }),
                                            ]),
                                          ]),
                                          _vm._v(" "),
                                          _c(
                                            "tbody",
                                            _vm._l(
                                              _vm.qtyDiscounts,
                                              function (
                                                qtyDiscount,
                                                qtyDiscountK
                                              ) {
                                                return _c(
                                                  "tr",
                                                  { key: qtyDiscountK },
                                                  [
                                                    _c(
                                                      "td",
                                                      [
                                                        _c("v-text-field", {
                                                          attrs: {
                                                            type: "number",
                                                            step: "any",
                                                            rules: [
                                                              _vm.rules
                                                                .required,
                                                            ],
                                                          },
                                                          model: {
                                                            value:
                                                              qtyDiscount.qty,
                                                            callback: function (
                                                              $$v
                                                            ) {
                                                              _vm.$set(
                                                                qtyDiscount,
                                                                "qty",
                                                                $$v
                                                              )
                                                            },
                                                            expression:
                                                              "qtyDiscount.qty",
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
                                                            step: "any",
                                                            rules: [
                                                              _vm.rules
                                                                .required,
                                                            ],
                                                          },
                                                          model: {
                                                            value:
                                                              qtyDiscount.discountPercent,
                                                            callback: function (
                                                              $$v
                                                            ) {
                                                              _vm.$set(
                                                                qtyDiscount,
                                                                "discountPercent",
                                                                $$v
                                                              )
                                                            },
                                                            expression:
                                                              "qtyDiscount.discountPercent",
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
                                                              click: function (
                                                                $event
                                                              ) {
                                                                return _vm.removeQtyDiscount(
                                                                  qtyDiscountK
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
                                                  ]
                                                )
                                              }
                                            ),
                                            0
                                          ),
                                        ]
                                      },
                                      proxy: true,
                                    },
                                  ],
                                  null,
                                  false,
                                  998330569
                                ),
                              }),
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