"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[110],{1369:(e,t,r)=>{r.d(t,{Z:()=>u});var a=r(7757),s=r.n(a);function n(e,t,r,a,s,n,i){try{var o=e[n](i),c=o.value}catch(e){return void r(e)}o.done?t(c):Promise.resolve(c).then(a,s)}function i(e){return function(){var t=this,r=arguments;return new Promise((function(a,s){var i=e.apply(t,r);function o(e){n(i,a,s,o,c,"next",e)}function c(e){n(i,a,s,o,c,"throw",e)}o(void 0)}))}}function o(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}var c=r(9669);const u=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.baseuri=t}var t,r,a,n,u;return t=e,r=[{key:"getlist",value:function(e){return c.get("/api/".concat(this.baseuri).concat(null!=e?e:"")).then((function(e){return e.data})).catch((function(e){return e}))}},{key:"create",value:(u=i(s().mark((function e(t){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.post("/api/"+this.baseuri,t).then((function(e){return{status:1,data:e.data.data}})).catch((function(e){return{status:0,data:e.response.data.errors}}));case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e,this)}))),function(e){return u.apply(this,arguments)})},{key:"delete",value:function(e){e.query;var t=e.id;return c.delete("/api/".concat(this.baseuri,"/").concat(t))}},{key:"get",value:function(e){return c.get("/api/".concat(this.baseuri,"/").concat(e)).then((function(e){return e.data.data}))}},{key:"getProductData",value:function(e,t){return c.get("/api/".concat(this.baseuri,"/").concat(e,"/").concat(t)).then((function(e){return e.data})).catch((function(e){return e}))}},{key:"update",value:(n=i(s().mark((function e(t,r){var a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.append("_method","put"),e.next=3,c.post("/api/"+this.baseuri+"/"+r,t).then((function(e){return{status:1,data:e.data.data}})).catch((function(e){return{status:0,data:e.response.data.errors}}));case 3:return a=e.sent,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e,this)}))),function(e,t){return n.apply(this,arguments)})}],r&&o(t.prototype,r),a&&o(t,a),Object.defineProperty(t,"prototype",{writable:!1}),e}()},2110:(e,t,r)=>{r.r(t),r.d(t,{default:()=>p});var a=r(7757),s=r.n(a),n=r(1369);function i(e,t,r,a,s,n,i){try{var o=e[n](i),c=o.value}catch(e){return void r(e)}o.done?t(c):Promise.resolve(c).then(a,s)}function o(e){return function(){var t=this,r=arguments;return new Promise((function(a,s){var n=e.apply(t,r);function o(e){i(n,a,s,o,c,"next",e)}function c(e){i(n,a,s,o,c,"throw",e)}o(void 0)}))}}var c=new n.Z("suppliers"),u=new n.Z("main-switches");var d;const l={name:"auth.suppliers.add",watch:{},mounted:function(){var e=this;return o(s().mark((function t(){var r;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.getlist("").then((function(e){return e.data}));case 2:if(e.switches=t.sent,!e.$route.params.id){t.next=11;break}return t.next=6,c.get(e.form.id);case 6:r=t.sent,e.form={name:r.name?r.name:"",date:r.date?r.date:"",service_usage:r.service_usage?r.service_usage:0,profit:r.profit?r.profit:0,profit_percentage:r.profit_percentage?r.profit_percentage:0,main_switch_id:r.main_switch_id?r.main_switch_id:0,id:e.$route.params.id},e.bread.push({text:"Edit",to:{name:"auth.suppliers.edit",params:{id:e.$route.params.id}},disabled:!1,exact:!0}),t.next=12;break;case 11:e.bread.push({text:"Add",to:{name:"auth.suppliers.add"},disabled:!1,exact:!0});case 12:case"end":return t.stop()}}),t)})))()},methods:{resetError:function(){this.errors={name:[],date:[],service_usage:[],profit:[],profit_percentage:[],main_switch_id:[]}},addpermission:(d=o(s().mark((function e(){var t,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.resetError(),!this.$refs.form.validate()){e.next=21;break}if(this.btnloading=!0,(t=new FormData).append("name",this.form.name),t.append("date",this.form.date),t.append("service_usage",this.form.service_usage),t.append("profit",this.form.profit),t.append("profit_percentage",this.form.profit_percentage),t.append("main_switch_id",this.form.main_switch_id),this.btnloading=!1,!(this.form.id>0)){e.next=17;break}return e.next=14,c.update(t,this.form.id);case 14:r=e.sent,e.next=20;break;case 17:return e.next=19,c.create(t);case 19:r=e.sent;case 20:r.status?this.$router.push({name:"auth.suppliers.listing"}):(r.data.name&&(this.errors.name=r.data.name),r.data.date&&(this.errors.date=r.data.date),r.data.service_usage&&(this.errors.service_usage=r.data.service_usage),r.data.profit&&(this.errors.profit=r.data.profit),r.data.profit_percentage&&(this.errors.profit_percentage=r.data.profit_percentage),r.data.main_switch_id&&(this.errors.main_switch_id=r.data.main_switch_id));case 21:case"end":return e.stop()}}),e,this)}))),function(){return d.apply(this,arguments)})},computed:{user:function(){return this.$store.getters.loggedInUser}},data:function(){return{form:{id:this.$route.params.id?this.$route.params.id:0,name:"",date:new Date(Date.now()-6e4*(new Date).getTimezoneOffset()).toISOString().substr(0,10),service_usage:0,profit:0,profit_percentage:0,main_switch_id:0},switches:[],errors:{name:[],date:[],service_usage:[],profit:[],profit_percentage:[],main_switch_id:[]},bread:[{text:"Dashboard",to:{name:"auth.dashboard"},disabled:!1,exact:!0},{text:"Suppliers",to:{name:"auth.suppliers.listing"},disabled:!1,exact:!0}],loading:!1,btnloading:!1,rules:{required:function(e){return!!e||"Required."}}}}};const p=(0,r(1900).Z)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("v-breadcrumbs",{attrs:{items:e.bread},scopedSlots:e._u([{key:"divider",fn:function(){return[r("v-icon",[e._v("mdi-forward")])]},proxy:!0}])}),e._v(" "),r("v-row",{staticClass:"pa-10 rounded elevation-10",attrs:{"no-gutters":""}},[r("v-col",{attrs:{cols:"12",sm:"12"}},[r("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:e.loading,callback:function(t){e.loading=t},expression:"loading"}},[r("v-row",[r("v-col",{staticClass:"pb-0",attrs:{cols:"6",sm:"6"}},[r("v-text-field",{attrs:{rules:[e.rules.required],"error-messages":e.errors.name,label:"Name"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),e._v(" "),r("v-col",{staticClass:"pb-0",attrs:{cols:"6",sm:"6"}},[r("v-date-picker",{attrs:{"full-width":"",rules:[e.rules.required],"error-messages":e.errors.date,label:"Date"},model:{value:e.form.date,callback:function(t){e.$set(e.form,"date",t)},expression:"form.date"}})],1),e._v(" "),r("v-col",{staticClass:"pb-0",attrs:{cols:"4",sm:"4"}},[r("v-text-field",{attrs:{rules:[e.rules.required],"error-messages":e.errors.service_usage,label:"Service Usage",type:"number",step:"any"},model:{value:e.form.service_usage,callback:function(t){e.$set(e.form,"service_usage",t)},expression:"form.service_usage"}})],1),e._v(" "),r("v-col",{staticClass:"pb-0",attrs:{cols:"4",sm:"4"}},[r("v-text-field",{attrs:{rules:[e.rules.required],"error-messages":e.errors.profit,label:"Profit",type:"number",step:"any"},model:{value:e.form.profit,callback:function(t){e.$set(e.form,"profit",t)},expression:"form.profit"}})],1),e._v(" "),r("v-col",{staticClass:"pb-0",attrs:{cols:"4",sm:"4"}},[r("v-text-field",{attrs:{rules:[e.rules.required],"error-messages":e.errors.profit_percentage,label:"Profit %",type:"number",step:"any"},model:{value:e.form.profit_percentage,callback:function(t){e.$set(e.form,"profit_percentage",t)},expression:"form.profit_percentage"}})],1),e._v(" "),r("v-col",{staticClass:"pb-0",attrs:{cols:"6",sm:"6"}},[r("v-select",{attrs:{items:e.switches,"item-text":"name","item-value":"id",label:"Switch",required:"","error-messages":e.errors.main_switch_id},model:{value:e.form.main_switch_id,callback:function(t){e.$set(e.form,"main_switch_id",t)},expression:"form.main_switch_id"}})],1),e._v(" "),r("v-col",{staticClass:"pb-0",attrs:{cols:"12",sm:"12"}},[r("v-btn",{attrs:{color:"secondary",elevation:"1",large:"",raised:"",loading:e.btnloading,disabled:e.btnloading},on:{click:e.addpermission}},[e._v(e._s(e.form.id>0?"Update":"Add"))])],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null).exports}}]);