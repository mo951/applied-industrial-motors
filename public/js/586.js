"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[586],{1369:(t,e,r)=>{r.d(e,{Z:()=>c});var a=r(7757),i=r.n(a);function n(t,e,r,a,i,n,s){try{var o=t[n](s),u=o.value}catch(t){return void r(t)}o.done?e(u):Promise.resolve(u).then(a,i)}function s(t){return function(){var e=this,r=arguments;return new Promise((function(a,i){var s=t.apply(e,r);function o(t){n(s,a,i,o,u,"next",t)}function u(t){n(s,a,i,o,u,"throw",t)}o(void 0)}))}}function o(t,e){for(var r=0;r<e.length;r++){var a=e[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}var u=r(9669);const c=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.baseuri=e}var e,r,a,n,c,l;return e=t,r=[{key:"getlist",value:function(t){return u.get("/api/".concat(this.baseuri).concat(null!=t?t:"")).then((function(t){return t.data})).catch((function(t){return t}))}},{key:"create",value:(l=s(i().mark((function t(e){var r;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.post("/api/"+this.baseuri,e).then((function(t){return{status:1,data:t.data.data}})).catch((function(t){return{status:0,data:t.response.data.errors}}));case 2:return r=t.sent,t.abrupt("return",r);case 4:case"end":return t.stop()}}),t,this)}))),function(t){return l.apply(this,arguments)})},{key:"delete",value:function(t){t.query;var e=t.id;return u.delete("/api/".concat(this.baseuri,"/").concat(e))}},{key:"get",value:function(t){return u.get("/api/".concat(this.baseuri,"/").concat(t)).then((function(t){return t.data.data}))}},{key:"getProductData",value:function(t,e){return u.get("/api/".concat(this.baseuri,"/").concat(t,"/").concat(e)).then((function(t){return t.data})).catch((function(t){return t}))}},{key:"update",value:(c=s(i().mark((function t(e,r){var a;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.append("_method","put"),t.next=3,u.post("/api/"+this.baseuri+"/"+r,e).then((function(t){return{status:1,data:t.data.data}})).catch((function(t){return{status:0,data:t.response.data.errors}}));case 3:return a=t.sent,t.abrupt("return",a);case 5:case"end":return t.stop()}}),t,this)}))),function(t,e){return c.apply(this,arguments)})},{key:"getQrcode",value:(n=s(i().mark((function t(e){return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u({url:"/api/"+this.baseuri,method:"GET",responseType:"text/plain"}).then((function(t){return t.data}));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t,this)}))),function(t){return n.apply(this,arguments)})}],r&&o(e.prototype,r),a&&o(e,a),Object.defineProperty(e,"prototype",{writable:!1}),t}()},6573:(t,e,r)=>{function a(t,e){for(var r=0;r<e.length;r++){var a=e[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}r.d(e,{Z:()=>n});var i=r(9669);const n=new(function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}var e,r,n;return e=t,(r=[{key:"get",value:function(t){return i.get("/api/".concat(t)).then((function(t){return t})).catch((function(t){return t}))}},{key:"post",value:function(t,e){return i.post("/api/".concat(t),e).then((function(t){return t})).catch((function(t){return t}))}}])&&a(e.prototype,r),n&&a(e,n),Object.defineProperty(e,"prototype",{writable:!1}),t}())},7586:(t,e,r)=>{r.r(e),r.d(e,{default:()=>f});var a=r(7757),i=r.n(a),n=r(1369),s=r(6573);function o(t,e,r,a,i,n,s){try{var o=t[n](s),u=o.value}catch(t){return void r(t)}o.done?e(u):Promise.resolve(u).then(a,i)}function u(t){return function(){var e=this,r=arguments;return new Promise((function(a,i){var n=t.apply(e,r);function s(t){o(n,a,i,s,u,"next",t)}function u(t){o(n,a,i,s,u,"throw",t)}s(void 0)}))}}var c=new n.Z("menus");var l;const d={name:"auth.menus.add",watch:{},mounted:function(){var t=this;return u(i().mark((function e(){var r,a;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("categories-parents").then((function(t){return t.data.data}));case 2:if(r=e.sent,t.categories=r,!t.$route.params.id){e.next=13;break}return e.next=7,c.get(t.form.id);case 7:a=e.sent,t.initialCategory=a.category_id?a.category_id:0,t.form={title:a.title?a.title:"",priority:a.priority?a.priority:"",uri:a.priority?a.uri:"",category_id:a.category_id?a.category_id:0,is_active:1==a.is_active,id:t.$route.params.id},t.bread.push({text:"Edit",to:{name:"auth.menus.edit",params:{id:t.$route.params.id}},disabled:!1,exact:!0}),e.next=14;break;case 13:t.bread.push({text:"Add",to:{name:"auth.menus.add"},disabled:!1,exact:!0});case 14:case"end":return e.stop()}}),e)})))()},methods:{resetError:function(){this.errors={title:[],priority:[],is_active:[],category_id:[],uri:[]}},addpermission:(l=u(i().mark((function t(){var e,r;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(this.resetError(),!this.$refs.form.validate()){t.next=20;break}if(this.btnloading=!0,(e=new FormData).append("title",this.form.title),e.append("priority",this.form.priority),e.append("uri",this.form.uri),e.append("category_id",this.form.category_id),e.append("is_active",1==this.form.is_active?1:0),this.btnloading=!1,!(this.form.id>0)){t.next=16;break}return t.next=13,c.update(e,this.form.id);case 13:r=t.sent,t.next=19;break;case 16:return t.next=18,c.create(e);case 18:r=t.sent;case 19:r.status?this.$router.push({name:"auth.menus.listing"}):(r.data.title&&(this.errors.title=r.data.title),r.data.priority&&(this.errors.priority=r.data.priority),r.data.is_active&&(this.errors.is_active=r.data.is_active),r.data.is_active&&(this.errors.uri=r.data.uri));case 20:case"end":return t.stop()}}),t,this)}))),function(){return l.apply(this,arguments)}),updateValudCategory:function(t){this.form.category_id=t}},computed:{user:function(){return this.$store.getters.loggedInUser}},data:function(){return{initialCategory:0,categories:[],form:{id:this.$route.params.id?this.$route.params.id:0,title:"",priority:"",uri:"",category_id:0,is_active:!0},errors:{title:[],priority:[],uri:[],is_active:[],category_id:[]},bread:[{text:"Dashboard",to:{name:"auth.dashboard"},disabled:!1,exact:!0},{text:"Menus",to:{name:"auth.menus.listing"},disabled:!1,exact:!0}],loading:!1,btnloading:!1,rules:{required:function(t){return!!t||"Required."}}}}};const f=(0,r(1900).Z)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"elevation-10"},[r("v-breadcrumbs",{attrs:{items:t.bread},scopedSlots:t._u([{key:"divider",fn:function(){return[r("v-icon",[t._v("mdi-forward")])]},proxy:!0}])}),t._v(" "),r("v-row",{staticClass:"pa-10 rounded",attrs:{"no-gutters":""}},[r("v-col",{attrs:{cols:"12",sm:"12"}},[r("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},[r("v-row",[r("v-col",{staticClass:"pb-0",attrs:{cols:"6",sm:"6"}},[r("v-text-field",{attrs:{"error-messages":t.errors.title,label:"Title",rules:[t.rules.required]},model:{value:t.form.title,callback:function(e){t.$set(t.form,"title",e)},expression:"form.title"}})],1),t._v(" "),r("v-col",{staticClass:"pb-0",attrs:{cols:"6",sm:"6"}},[r("v-text-field",{attrs:{rules:[t.rules.required],"error-messages":t.errors.priority,label:"Priority",type:"number",hint:"Must be a unique value. Form will not be submitted if this value is not unique."},model:{value:t.form.priority,callback:function(e){t.$set(t.form,"priority",e)},expression:"form.priority"}})],1),t._v(" "),r("v-col",{staticClass:"pb-0",attrs:{cols:"6",sm:"6"}},[r("v-select",{attrs:{items:t.categories,label:"Select Category","item-text":"name","item-value":"id",rules:[t.rules.required]},model:{value:t.form.category_id,callback:function(e){t.$set(t.form,"category_id",e)},expression:"form.category_id"}})],1),t._v(" "),r("v-col",{staticClass:"pb-0",attrs:{cols:"6",sm:"6"}},[r("v-text-field",{attrs:{"error-messages":t.errors.uri,label:"URI",hint:"If this field is left empty, a category value will be considered."},model:{value:t.form.uri,callback:function(e){t.$set(t.form,"uri",e)},expression:"form.uri"}})],1),t._v(" "),r("v-col",{staticClass:"pb-0",attrs:{cols:"12",sm:"12"}},[r("v-checkbox",{attrs:{label:"Published?"},model:{value:t.form.is_active,callback:function(e){t.$set(t.form,"is_active",e)},expression:"form.is_active"}})],1),t._v(" "),r("v-col",{staticClass:"pb-0",attrs:{cols:"12",sm:"12"}},[r("v-btn",{attrs:{color:"secondary",elevation:"1",large:"",raised:"",loading:t.btnloading,disabled:t.btnloading},on:{click:t.addpermission}},[t._v(t._s(t.form.id>0?"Update":"Add"))])],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null).exports}}]);