"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[784],{1369:(t,e,r)=>{r.d(e,{Z:()=>c});var a=r(7757),n=r.n(a);function i(t,e,r,a,n,i,o){try{var s=t[i](o),u=s.value}catch(t){return void r(t)}s.done?e(u):Promise.resolve(u).then(a,n)}function o(t){return function(){var e=this,r=arguments;return new Promise((function(a,n){var o=t.apply(e,r);function s(t){i(o,a,n,s,u,"next",t)}function u(t){i(o,a,n,s,u,"throw",t)}s(void 0)}))}}function s(t,e){for(var r=0;r<e.length;r++){var a=e[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}var u=r(9669);const c=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.baseuri=e}var e,r,a,i,c,d;return e=t,r=[{key:"getlist",value:function(t){return u.get("/api/".concat(this.baseuri).concat(null!=t?t:"")).then((function(t){return t.data})).catch((function(t){return t}))}},{key:"create",value:(d=o(n().mark((function t(e){var r;return n().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.post("/api/"+this.baseuri,e).then((function(t){return{status:1,data:t.data.data}})).catch((function(t){return{status:0,data:t.response.data.errors}}));case 2:return r=t.sent,t.abrupt("return",r);case 4:case"end":return t.stop()}}),t,this)}))),function(t){return d.apply(this,arguments)})},{key:"delete",value:function(t){t.query;var e=t.id;return u.delete("/api/".concat(this.baseuri,"/").concat(e))}},{key:"get",value:function(t){return u.get("/api/".concat(this.baseuri,"/").concat(t)).then((function(t){return t.data.data}))}},{key:"getProductData",value:function(t,e){return u.get("/api/".concat(this.baseuri,"/").concat(t,"/").concat(e)).then((function(t){return t.data})).catch((function(t){return t}))}},{key:"update",value:(c=o(n().mark((function t(e,r){var a;return n().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.append("_method","put"),t.next=3,u.post("/api/"+this.baseuri+"/"+r,e).then((function(t){return{status:1,data:t.data.data}})).catch((function(t){return{status:0,data:t.response.data.errors}}));case 3:return a=t.sent,t.abrupt("return",a);case 5:case"end":return t.stop()}}),t,this)}))),function(t,e){return c.apply(this,arguments)})},{key:"getQrcode",value:(i=o(n().mark((function t(e){return n().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u({url:"/api/"+this.baseuri,method:"GET",responseType:"text/plain"}).then((function(t){return t.data}));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t,this)}))),function(t){return i.apply(this,arguments)})}],r&&s(e.prototype,r),a&&s(e,a),Object.defineProperty(e,"prototype",{writable:!1}),t}()},6573:(t,e,r)=>{function a(t,e){for(var r=0;r<e.length;r++){var a=e[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}r.d(e,{Z:()=>i});var n=r(9669);const i=new(function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}var e,r,i;return e=t,(r=[{key:"get",value:function(t){return n.get("/api/".concat(t)).then((function(t){return t})).catch((function(t){return t}))}},{key:"post",value:function(t,e){return n.post("/api/".concat(t),e).then((function(t){return t})).catch((function(t){return t}))}}])&&a(e.prototype,r),i&&a(e,i),Object.defineProperty(e,"prototype",{writable:!1}),t}())},7784:(t,e,r)=>{r.r(e),r.d(e,{default:()=>l});var a=r(7757),n=r.n(a),i=r(1369);r(6573);function o(t,e,r,a,n,i,o){try{var s=t[i](o),u=s.value}catch(t){return void r(t)}s.done?e(u):Promise.resolve(u).then(a,n)}function s(t){return function(){var e=this,r=arguments;return new Promise((function(a,n){var i=t.apply(e,r);function s(t){o(i,a,n,s,u,"next",t)}function u(t){o(i,a,n,s,u,"throw",t)}s(void 0)}))}}var u=new i.Z("dropdowns");var c;const d={name:"auth.dropdowns.add",watch:{},mounted:function(){var t=this;return s(n().mark((function e(){var r;return n().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.$route.params.id){e.next=9;break}return e.next=3,u.get(t.form.id);case 3:r=e.sent,t.initialCategory=r.parent_id?r.parent_id:0,t.form={title:r.title?r.title:"",value:r.value?r.value:"",is_active:1==r.is_active,id:t.$route.params.id},t.bread.push({text:"Edit",to:{name:"auth.dropdowns.edit",params:{id:t.$route.params.id}},disabled:!1,exact:!0}),e.next=10;break;case 9:t.bread.push({text:"Add",to:{name:"auth.dropdowns.add"},disabled:!1,exact:!0});case 10:case"end":return e.stop()}}),e)})))()},methods:{resetError:function(){this.errors={name:[],value:[],is_active:[]}},addpermission:(c=s(n().mark((function t(){var e,r;return n().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(this.resetError(),!this.$refs.form.validate()){t.next=18;break}if(this.btnloading=!0,(e=new FormData).append("title",this.form.title),e.append("value",this.form.value),e.append("is_active",1==this.form.is_active?1:0),this.btnloading=!1,!(this.form.id>0)){t.next=14;break}return t.next=11,u.update(e,this.form.id);case 11:r=t.sent,t.next=17;break;case 14:return t.next=16,u.create(e);case 16:r=t.sent;case 17:r.status?this.$router.push({name:"auth.dropdowns.listing"}):(r.data.title&&(this.errors.name=r.data.name),r.data.value&&(this.errors.value=r.data.value),r.data.is_active&&(this.errors.is_active=r.data.is_active));case 18:case"end":return t.stop()}}),t,this)}))),function(){return c.apply(this,arguments)}),updateValudCategory:function(t){this.form.parent_id=t}},computed:{user:function(){return this.$store.getters.loggedInUser}},data:function(){return{initialCategory:0,categories:[{id:"Motorgroup",name:"MotorGroup"},{id:"Framesize",name:"FrameSize"},{id:"Horsepower",name:"HorsePower"},{id:"Speed",name:"Speed"},{id:"Voltage",name:"Voltage"}],form:{id:this.$route.params.id?this.$route.params.id:0,title:"",value:"",is_active:!0},errors:{title:[],value:[],is_active:[]},bread:[{text:"Dashboard",to:{name:"auth.dashboard"},disabled:!1,exact:!0},{text:"Dropdown",to:{name:"auth.dropdowns.listing"},disabled:!1,exact:!0}],loading:!1,btnloading:!1,rules:{required:function(t){return!!t||"Required."}}}}};const l=(0,r(1900).Z)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"elevation-10"},[r("v-breadcrumbs",{attrs:{items:t.bread},scopedSlots:t._u([{key:"divider",fn:function(){return[r("v-icon",[t._v("mdi-forward")])]},proxy:!0}])}),t._v(" "),r("v-row",{staticClass:"pa-10 rounded",attrs:{"no-gutters":""}},[r("v-col",{attrs:{cols:"12",sm:"12"}},[r("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},[r("v-row",[r("v-col",{staticClass:"pb-0",attrs:{cols:"6",sm:"6"}},[r("v-select",{attrs:{items:t.categories,"item-text":"name","item-value":"id",label:"Select Variant",required:""},model:{value:t.form.title,callback:function(e){t.$set(t.form,"title",e)},expression:"form.title"}})],1),t._v(" "),r("v-col",{staticClass:"pb-0",attrs:{cols:"6",sm:"6"}},[r("v-text-field",{attrs:{"error-messages":t.errors.name,label:"Value"},model:{value:t.form.value,callback:function(e){t.$set(t.form,"value",e)},expression:"form.value"}})],1),t._v(" "),r("v-col",{staticClass:"pb-0",attrs:{cols:"3",sm:"3"}},[r("v-checkbox",{attrs:{label:"Published?"},model:{value:t.form.is_active,callback:function(e){t.$set(t.form,"is_active",e)},expression:"form.is_active"}})],1),t._v(" "),r("v-col",{staticClass:"pb-0",attrs:{cols:"12",sm:"12"}},[r("v-btn",{attrs:{color:"secondary",elevation:"1",large:"",raised:"",loading:t.btnloading,disabled:t.btnloading},on:{click:t.addpermission}},[t._v(t._s(t.form.id>0?"Update":"Add"))])],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null).exports}}]);