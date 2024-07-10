"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[14],{1369:(t,e,a)=>{a.d(e,{Z:()=>u});var r=a(7757),s=a.n(r);function n(t,e,a,r,s,n,i){try{var o=t[n](i),c=o.value}catch(t){return void a(t)}o.done?e(c):Promise.resolve(c).then(r,s)}function i(t){return function(){var e=this,a=arguments;return new Promise((function(r,s){var i=t.apply(e,a);function o(t){n(i,r,s,o,c,"next",t)}function c(t){n(i,r,s,o,c,"throw",t)}o(void 0)}))}}function o(t,e){for(var a=0;a<e.length;a++){var r=e[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var c=a(9669);const u=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.baseuri=e}var e,a,r,n,u,d;return e=t,a=[{key:"getlist",value:function(t){return c.get("/api/".concat(this.baseuri).concat(null!=t?t:"")).then((function(t){return t.data})).catch((function(t){return t}))}},{key:"create",value:(d=i(s().mark((function t(e){var a;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.post("/api/"+this.baseuri,e).then((function(t){return{status:1,data:t.data.data}})).catch((function(t){return{status:0,data:t.response.data.errors}}));case 2:return a=t.sent,t.abrupt("return",a);case 4:case"end":return t.stop()}}),t,this)}))),function(t){return d.apply(this,arguments)})},{key:"delete",value:function(t){t.query;var e=t.id;return c.delete("/api/".concat(this.baseuri,"/").concat(e))}},{key:"get",value:function(t){return c.get("/api/".concat(this.baseuri,"/").concat(t)).then((function(t){return t.data.data}))}},{key:"getProductData",value:function(t,e){return c.get("/api/".concat(this.baseuri,"/").concat(t,"/").concat(e)).then((function(t){return t.data})).catch((function(t){return t}))}},{key:"update",value:(u=i(s().mark((function t(e,a){var r;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.append("_method","put"),t.next=3,c.post("/api/"+this.baseuri+"/"+a,e).then((function(t){return{status:1,data:t.data.data}})).catch((function(t){return{status:0,data:t.response.data.errors}}));case 3:return r=t.sent,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t,this)}))),function(t,e){return u.apply(this,arguments)})},{key:"getQrcode",value:(n=i(s().mark((function t(e){return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c({url:"/api/"+this.baseuri,method:"GET",responseType:"text/plain"}).then((function(t){return t.data}));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t,this)}))),function(t){return n.apply(this,arguments)})}],a&&o(e.prototype,a),r&&o(e,r),Object.defineProperty(e,"prototype",{writable:!1}),t}()},5014:(t,e,a)=>{a.r(e),a.d(e,{default:()=>d});var r=a(7757),s=a.n(r);function n(t,e,a,r,s,n,i){try{var o=t[n](i),c=o.value}catch(t){return void a(t)}o.done?e(c):Promise.resolve(c).then(r,s)}function i(t){return function(){var e=this,a=arguments;return new Promise((function(r,s){var i=t.apply(e,a);function o(t){n(i,r,s,o,c,"next",t)}function c(t){n(i,r,s,o,c,"throw",t)}o(void 0)}))}}var o=new(a(1369).Z)("products");var c;const u={name:"auth.products.add",watch:{},mounted:function(){var t=this;return i(s().mark((function e(){var a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.$route.params.id){e.next=8;break}return e.next=3,o.get(t.form.id);case 3:a=e.sent,t.form={product_name:a.product_name?a.product_name:"",description:a.description?a.description:"",visa_type_description:a.visa_type_description?a.visa_type_description:"",cost:a.cost?a.cost:0,cash_back:a.cash_back?a.cash_back:0,visa_type:a.visa_type?a.visa_type:1,is_active:1==a.is_active,best_value:1==a.best_value,id:t.$route.params.id},t.bread.push({text:"Edit",to:{name:"auth.products.edit",params:{id:t.$route.params.id}},disabled:!1,exact:!0}),e.next=9;break;case 8:t.bread.push({text:"Add",to:{name:"auth.products.add"},disabled:!1,exact:!0});case 9:case"end":return e.stop()}}),e)})))()},methods:{resetError:function(){var t,e,a;this.errors=(a=[],(e="description")in(t={product_name:[],cash_back:[],cost:[],visa_type_description:[],description:[],visa_type:[],best_value:[],is_active:[]})?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t)},addpermission:(c=i(s().mark((function t(){var e,a;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(this.resetError(),!this.$refs.form.validate()){t.next=23;break}if(this.btnloading=!0,(e=new FormData).append("product_name",this.form.product_name),e.append("cost",this.form.cost),e.append("cash_back",this.form.cash_back),e.append("visa_type_description",this.form.visa_type_description),e.append("description",this.form.description),e.append("visa_type",this.form.visa_type),e.append("best_value",1==this.form.best_value?1:0),e.append("is_active",1==this.form.is_active?1:0),this.btnloading=!1,!(this.form.id>0)){t.next=19;break}return t.next=16,o.update(e,this.form.id);case 16:a=t.sent,t.next=22;break;case 19:return t.next=21,o.create(e);case 21:a=t.sent;case 22:a.status?this.$router.push({name:"auth.products.listing"}):(a.data.product_name&&(this.errors.product_name=a.data.product_name),a.data.cost&&(this.errors.cost=a.data.cost),a.data.cash_back&&(this.errors.cash_back=a.data.cash_back),a.data.visa_type_description&&(this.errors.visa_type_description=a.data.visa_type_description),a.data.visa_type&&(this.errors.visa_type=a.data.visa_type),a.data.is_active&&(this.errors.is_active=a.data.is_active),a.data.best_value&&(this.errors.best_value=a.data.best_value));case 23:case"end":return t.stop()}}),t,this)}))),function(){return c.apply(this,arguments)})},computed:{user:function(){return this.$store.getters.loggedInUser}},data:function(){return{visaTypes:[{id:1,name:"Single Entry Visa"},{id:2,name:"Multiple Entry Visa"}],form:{id:this.$route.params.id?this.$route.params.id:0,product_name:"",visa_type_description:"",visa_type:1,cost:0,cash_back:0,best_value:!1,is_active:!0,description:""},errors:{product_name:[],cost:[],cash_back:[],visa_type_description:[],visa_type:[],best_value:[],is_active:[],description:[]},bread:[{text:"Dashboard",to:{name:"auth.dashboard"},disabled:!1,exact:!0},{text:"Products",to:{name:"auth.products.listing"},disabled:!1,exact:!0}],loading:!1,btnloading:!1,rules:{required:function(t){return!!t||"Required."}}}}};const d=(0,a(1900).Z)(u,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-breadcrumbs",{attrs:{items:t.bread},scopedSlots:t._u([{key:"divider",fn:function(){return[a("v-icon",[t._v("mdi-forward")])]},proxy:!0}])}),t._v(" "),a("v-row",{staticClass:"pa-10 rounded elevation-10",attrs:{"no-gutters":""}},[a("v-col",{attrs:{cols:"12",sm:"12"}},[a("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},[a("v-row",[a("v-col",{staticClass:"pb-0",attrs:{cols:"12",sm:"12"}},[a("v-text-field",{attrs:{rules:[t.rules.required],"error-messages":t.errors.product_name,label:"Name"},model:{value:t.form.product_name,callback:function(e){t.$set(t.form,"product_name",e)},expression:"form.product_name"}})],1),t._v(" "),a("v-col",{staticClass:"pb-0",attrs:{cols:"6",sm:"6"}},[a("v-text-field",{attrs:{"append-outer-icon":"mdi-currency-usd",rules:[t.rules.required],"error-messages":t.errors.cost,label:"Cost"},model:{value:t.form.cost,callback:function(e){t.$set(t.form,"cost",e)},expression:"form.cost"}})],1),t._v(" "),a("v-col",{staticClass:"pb-0",attrs:{cols:"6",sm:"6"}},[a("v-text-field",{attrs:{"append-outer-icon":"mdi-currency-usd","error-messages":t.errors.cash_back,label:"Cash Back"},model:{value:t.form.cash_back,callback:function(e){t.$set(t.form,"cash_back",e)},expression:"form.cash_back"}})],1),t._v(" "),a("v-col",{staticClass:"pb-0",attrs:{cols:"6",sm:"6"}},[a("v-select",{attrs:{items:t.visaTypes,"item-text":"name","item-value":"id",label:"Visa Type",required:"","error-messages":t.errors.visa_type},model:{value:t.form.visa_type,callback:function(e){t.$set(t.form,"visa_type",e)},expression:"form.visa_type"}})],1),t._v(" "),a("v-col",{staticClass:"pb-0",attrs:{cols:"6",sm:"6"}},[a("v-text-field",{attrs:{"error-messages":t.errors.visa_type_description,label:"Visa Type Description"},model:{value:t.form.visa_type_description,callback:function(e){t.$set(t.form,"visa_type_description",e)},expression:"form.visa_type_description"}})],1),t._v(" "),a("v-col",{staticClass:"pb-0",attrs:{cols:"12",sm:"12"}},[a("v-textarea",{attrs:{rows:"1","auto-grow":"","error-messages":t.errors.description,label:"Description"},model:{value:t.form.description,callback:function(e){t.$set(t.form,"description",e)},expression:"form.description"}})],1),t._v(" "),a("v-col",{staticClass:"pb-0",attrs:{cols:"6",sm:"6"}},[a("v-checkbox",{attrs:{label:"Published"},model:{value:t.form.is_active,callback:function(e){t.$set(t.form,"is_active",e)},expression:"form.is_active"}})],1),t._v(" "),a("v-col",{staticClass:"pb-0",attrs:{cols:"6",sm:"6"}},[a("v-checkbox",{attrs:{label:"Best Value"},model:{value:t.form.best_value,callback:function(e){t.$set(t.form,"best_value",e)},expression:"form.best_value"}})],1),t._v(" "),a("v-col",{staticClass:"pb-0",attrs:{cols:"12",sm:"12"}},[a("v-btn",{attrs:{color:"secondary",elevation:"1",large:"",raised:"",loading:t.btnloading,disabled:t.btnloading},on:{click:t.addpermission}},[t._v(t._s(t.form.id>0?"Update":"Add"))])],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null).exports}}]);