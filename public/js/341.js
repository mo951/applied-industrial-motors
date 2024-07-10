"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[341],{1369:(t,e,r)=>{r.d(e,{Z:()=>c});var a=r(7757),n=r.n(a);function i(t,e,r,a,n,i,s){try{var o=t[i](s),u=o.value}catch(t){return void r(t)}o.done?e(u):Promise.resolve(u).then(a,n)}function s(t){return function(){var e=this,r=arguments;return new Promise((function(a,n){var s=t.apply(e,r);function o(t){i(s,a,n,o,u,"next",t)}function u(t){i(s,a,n,o,u,"throw",t)}o(void 0)}))}}function o(t,e){for(var r=0;r<e.length;r++){var a=e[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}var u=r(9669);const c=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.baseuri=e}var e,r,a,i,c,l;return e=t,r=[{key:"getlist",value:function(t){return u.get("/api/".concat(this.baseuri).concat(null!=t?t:"")).then((function(t){return t.data})).catch((function(t){return t}))}},{key:"create",value:(l=s(n().mark((function t(e){var r;return n().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.post("/api/"+this.baseuri,e).then((function(t){return{status:1,data:t.data.data}})).catch((function(t){return{status:0,data:t.response.data.errors}}));case 2:return r=t.sent,t.abrupt("return",r);case 4:case"end":return t.stop()}}),t,this)}))),function(t){return l.apply(this,arguments)})},{key:"delete",value:function(t){t.query;var e=t.id;return u.delete("/api/".concat(this.baseuri,"/").concat(e))}},{key:"get",value:function(t){return u.get("/api/".concat(this.baseuri,"/").concat(t)).then((function(t){return t.data.data}))}},{key:"getProductData",value:function(t,e){return u.get("/api/".concat(this.baseuri,"/").concat(t,"/").concat(e)).then((function(t){return t.data})).catch((function(t){return t}))}},{key:"update",value:(c=s(n().mark((function t(e,r){var a;return n().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.append("_method","put"),t.next=3,u.post("/api/"+this.baseuri+"/"+r,e).then((function(t){return{status:1,data:t.data.data}})).catch((function(t){return{status:0,data:t.response.data.errors}}));case 3:return a=t.sent,t.abrupt("return",a);case 5:case"end":return t.stop()}}),t,this)}))),function(t,e){return c.apply(this,arguments)})},{key:"getQrcode",value:(i=s(n().mark((function t(e){return n().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u({url:"/api/"+this.baseuri,method:"GET",responseType:"text/plain"}).then((function(t){return t.data}));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t,this)}))),function(t){return i.apply(this,arguments)})}],r&&o(e.prototype,r),a&&o(e,a),Object.defineProperty(e,"prototype",{writable:!1}),t}()},6573:(t,e,r)=>{function a(t,e){for(var r=0;r<e.length;r++){var a=e[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}r.d(e,{Z:()=>i});var n=r(9669);const i=new(function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}var e,r,i;return e=t,(r=[{key:"get",value:function(t){return n.get("/api/".concat(t)).then((function(t){return t})).catch((function(t){return t}))}},{key:"post",value:function(t,e){return n.post("/api/".concat(t),e).then((function(t){return t})).catch((function(t){return t}))}}])&&a(e.prototype,r),i&&a(e,i),Object.defineProperty(e,"prototype",{writable:!1}),t}())},6341:(t,e,r)=>{r.r(e),r.d(e,{default:()=>p});var a=r(7757),n=r.n(a),i=r(1369),s=r(6573);function o(t){return function(t){if(Array.isArray(t))return u(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return u(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return u(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,a=new Array(e);r<e;r++)a[r]=t[r];return a}function c(t,e,r,a,n,i,s){try{var o=t[i](s),u=o.value}catch(t){return void r(t)}o.done?e(u):Promise.resolve(u).then(a,n)}function l(t){return function(){var e=this,r=arguments;return new Promise((function(a,n){var i=t.apply(e,r);function s(t){c(i,a,n,s,o,"next",t)}function o(t){c(i,a,n,s,o,"throw",t)}s(void 0)}))}}var d=new i.Z("categories");var f;const m={name:"auth.categories.add",watch:{},mounted:function(){var t=this;return l(n().mark((function e(){var r,a;return n().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("categories-parents").then((function(t){return t.data.data}));case 2:if(r=e.sent,t.categories=[{id:0,name:"No Parent",children:[]}].concat(o(r)),!t.$route.params.id){e.next=13;break}return e.next=7,d.get(t.form.id);case 7:a=e.sent,t.initialCategory=a.parent_id?a.parent_id:0,t.form={name:a.name?a.name:"",slug:a.slug?a.slug:"",parent_id:[a.parent_id?a.parent_id:0],image_url:a.image_url,is_active:1==a.is_active,is_featured:1==a.is_featured,id:t.$route.params.id},t.bread.push({text:"Edit",to:{name:"auth.categories.edit",params:{id:t.$route.params.id}},disabled:!1,exact:!0}),e.next=14;break;case 13:t.bread.push({text:"Add",to:{name:"auth.categories.add"},disabled:!1,exact:!0});case 14:case"end":return e.stop()}}),e)})))()},methods:{resetError:function(){this.errors={name:[],slug:[],is_active:[],is_featured:[],image:[],parent_id:[]}},addpermission:(f=l(n().mark((function t(){var e,r;return n().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(this.resetError(),!this.$refs.form.validate()){t.next=21;break}if(this.btnloading=!0,(e=new FormData).append("name",this.form.name),e.append("slug",this.form.slug),e.append("parent_id",this.form.parent_id[0]),e.append("is_active",1==this.form.is_active?1:0),e.append("is_featured",1==this.form.is_featured?1:0),this.form.image&&e.append("image",this.form.image),this.btnloading=!1,!(this.form.id>0)){t.next=17;break}return t.next=14,d.update(e,this.form.id);case 14:r=t.sent,t.next=20;break;case 17:return t.next=19,d.create(e);case 19:r=t.sent;case 20:r.status?this.$router.push({name:"auth.categories.listing"}):(r.data.name&&(this.errors.name=r.data.name),r.data.slug&&(this.errors.slug=r.data.slug),r.data.is_active&&(this.errors.is_active=r.data.is_active),r.data.is_featured&&(this.errors.is_featured=r.data.is_featured),r.data.image&&(this.errors.image=r.data.image));case 21:case"end":return t.stop()}}),t,this)}))),function(){return f.apply(this,arguments)}),updateValudCategory:function(t){this.form.parent_id=t}},computed:{user:function(){return this.$store.getters.loggedInUser}},data:function(){return{initialCategory:0,categories:[],form:{id:this.$route.params.id?this.$route.params.id:0,name:"",slug:"",parent_id:[0],image_url:"",is_active:!0,is_featured:!0,image:void 0},errors:{name:[],slug:[],image:[],is_active:[],is_featured:[],parent_id:[]},bread:[{text:"Dashboard",to:{name:"auth.dashboard"},disabled:!1,exact:!0},{text:"Categories",to:{name:"auth.categories.listing"},disabled:!1,exact:!0}],loading:!1,btnloading:!1,rules:{required:function(t){return!!t||"Required."}}}}};const p=(0,r(1900).Z)(m,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"elevation-10"},[r("v-breadcrumbs",{attrs:{items:t.bread},scopedSlots:t._u([{key:"divider",fn:function(){return[r("v-icon",[t._v("mdi-forward")])]},proxy:!0}])}),t._v(" "),r("v-row",{staticClass:"pa-10 rounded",attrs:{"no-gutters":""}},[r("v-col",{attrs:{cols:"12",sm:"12"}},[r("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},[r("v-row",[r("v-col",{staticClass:"pb-0",attrs:{cols:"6",sm:"6"}},[r("v-text-field",{attrs:{"error-messages":t.errors.name,label:"Name"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),t._v(" "),r("v-col",{staticClass:"pb-0",attrs:{cols:"6",sm:"6"}},[r("v-text-field",{attrs:{rules:[t.rules.required],"error-messages":t.errors.slug,label:"Slug"},model:{value:t.form.slug,callback:function(e){t.$set(t.form,"slug",e)},expression:"form.slug"}})],1),t._v(" "),r("v-col",{staticClass:"pb-0",attrs:{cols:"6",sm:"6"}},[r("h3",[t._v("Select Parent")]),t._v(" "),r("v-treeview",{attrs:{hoverable:"",shaped:"",activatable:"",color:"red",items:t.categories,active:t.form.parent_id},on:{"update:active":t.updateValudCategory}})],1),t._v(" "),r("v-col",{staticClass:"pb-0",attrs:{cols:"3",sm:"3"}},[r("v-checkbox",{attrs:{label:"Published?"},model:{value:t.form.is_active,callback:function(e){t.$set(t.form,"is_active",e)},expression:"form.is_active"}})],1),t._v(" "),r("v-col",{staticClass:"pb-0",attrs:{cols:"3",sm:"3"}},[r("v-checkbox",{attrs:{label:"Featured"},model:{value:t.form.is_featured,callback:function(e){t.$set(t.form,"is_featured",e)},expression:"form.is_featured"}})],1),t._v(" "),r("v-col",{staticClass:"pb-0",attrs:{cols:"12",cm:"12"}},[r("v-file-input",{attrs:{accept:"image/*","error-messages":t.errors.image,label:"Image"},model:{value:t.form.image,callback:function(e){t.$set(t.form,"image",e)},expression:"form.image"}})],1),t._v(" "),t.form.id>0&&t.form.image_url?r("v-col",{staticClass:"pb-0",attrs:{cols:"12",cm:"12"}},[r("v-avatar",[r("v-img",{attrs:{"lazy-src":t.form.image_url,"max-height":"150","max-width":"250",src:t.form.image_url}})],1)],1):t._e(),t._v(" "),r("v-col",{staticClass:"pb-0",attrs:{cols:"12",sm:"12"}},[r("v-btn",{attrs:{color:"secondary",elevation:"1",large:"",raised:"",loading:t.btnloading,disabled:t.btnloading},on:{click:t.addpermission}},[t._v(t._s(t.form.id>0?"Update":"Add"))])],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null).exports}}]);