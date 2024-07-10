"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[306],{1369:(t,e,s)=>{s.d(e,{Z:()=>u});var r=s(7757),a=s.n(r);function i(t,e,s,r,a,i,n){try{var o=t[i](n),l=o.value}catch(t){return void s(t)}o.done?e(l):Promise.resolve(l).then(r,a)}function n(t){return function(){var e=this,s=arguments;return new Promise((function(r,a){var n=t.apply(e,s);function o(t){i(n,r,a,o,l,"next",t)}function l(t){i(n,r,a,o,l,"throw",t)}o(void 0)}))}}function o(t,e){for(var s=0;s<e.length;s++){var r=e[s];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var l=s(9669);const u=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.baseuri=e}var e,s,r,i,u;return e=t,s=[{key:"getlist",value:function(t){return l.get("/api/".concat(this.baseuri).concat(null!=t?t:"")).then((function(t){return t.data})).catch((function(t){return t}))}},{key:"create",value:(u=n(a().mark((function t(e){var s;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.post("/api/"+this.baseuri,e).then((function(t){return{status:1,data:t.data.data}})).catch((function(t){return{status:0,data:t.response.data.errors}}));case 2:return s=t.sent,t.abrupt("return",s);case 4:case"end":return t.stop()}}),t,this)}))),function(t){return u.apply(this,arguments)})},{key:"delete",value:function(t){t.query;var e=t.id;return l.delete("/api/".concat(this.baseuri,"/").concat(e))}},{key:"get",value:function(t){return l.get("/api/".concat(this.baseuri,"/").concat(t)).then((function(t){return t.data.data}))}},{key:"update",value:(i=n(a().mark((function t(e,s){var r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.append("_method","put"),t.next=3,l.post("/api/"+this.baseuri+"/"+s,e).then((function(t){return{status:1,data:t.data.data}})).catch((function(t){return{status:0,data:t.response.data.errors}}));case 3:return r=t.sent,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t,this)}))),function(t,e){return i.apply(this,arguments)})}],s&&o(e.prototype,s),r&&o(e,r),Object.defineProperty(e,"prototype",{writable:!1}),t}()},6632:(t,e,s)=>{s.d(e,{Z:()=>i});var r=s(3645),a=s.n(r)()((function(t){return t[1]}));a.push([t.id,".issues-list{overflow-y:scroll}.issues-list .v-list-item__icon{order:2}",""]);const i=a},2306:(t,e,s)=>{s.r(e),s.d(e,{default:()=>g});var r=s(7757),a=s.n(r),i=s(1369);function n(t,e,s,r,a,i,n){try{var o=t[i](n),l=o.value}catch(t){return void s(t)}o.done?e(l):Promise.resolve(l).then(r,a)}function o(t){return function(){var e=this,s=arguments;return new Promise((function(r,a){var i=t.apply(e,s);function o(t){n(i,r,a,o,l,"next",t)}function l(t){n(i,r,a,o,l,"throw",t)}o(void 0)}))}}var l=new i.Z("tickets"),u=new i.Z("item-types"),c=new i.Z("brands"),d=new i.Z("products"),m=new i.Z("common-issues");var p;const f={name:"auth.tickets.add",watch:{"form.brand_id":function(){this.getProducts()},"form.itme_type_id":function(){this.getProducts()}},mounted:function(){var t=this;return o(a().mark((function e(){var s;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.getlist("").then((function(t){return t.data}));case 2:return t.itemTypes=e.sent,e.next=5,c.getlist("").then((function(t){return t.data}));case 5:return t.brands=e.sent,e.next=8,m.getlist("?parent_id=0").then((function(t){return t.data}));case 8:if(t.issues=e.sent,!t.$route.params.id){e.next=20;break}return e.next=12,l.get(t.form.id);case 12:return s=e.sent,t.form={first_name:s.first_name?s.first_name:"",last_name:s.last_name?s.last_name:"",email:s.email?s.email:"",phone:s.phone?s.phone:"",brand_id:s.brand_id?s.brand_id:0,itme_type_id:s.itme_type_id?s.itme_type_id:0,product_id:s.product_id?s.product_id:0,serial:s.serial?s.serial:"",purchase_date:s.purchase_date?s.purchase_date:"",issue:s.issue?s.issue:0,resolution:s.resolution?s.resolution:1,id:t.$route.params.id},t.bread.push({text:"Edit",to:{name:"auth.tickets.edit",params:{id:t.$route.params.id}},disabled:!1,exact:!0}),e.next=17,t.$nextTick();case 17:t.getProducts(),e.next=21;break;case 20:t.bread.push({text:"Add",to:{name:"auth.tickets.add"},disabled:!1,exact:!0});case 21:case"end":return e.stop()}}),e)})))()},methods:{getCurrentSelectionParent:function(t){this.form.issue=t[0]},getProducts:function(){var t=this;return o(a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.products=[],!t.form.brand_id||!t.form.itme_type_id){e.next=5;break}return e.next=4,d.getlist("?brand_id="+t.form.brand_id+"&itme_type_id="+t.form.itme_type_id).then((function(t){return t.data}));case 4:t.products=e.sent;case 5:case"end":return e.stop()}}),e)})))()},resetError:function(){this.errors={first_name:[],last_name:[],email:[],phone:[],brand_id:[],itme_type_id:[],product_id:[],serial:[],purchase_date:[],issue:[],resolution:[]}},addpermission:(p=o(a().mark((function t(e){var s,r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(this.resetError(),!this.$refs.form.validate()){t.next=27;break}if(this.btnloading=!0,(s=new FormData).append("first_name",this.form.first_name),s.append("last_name",this.form.last_name),s.append("email",this.form.email),s.append("phone",this.form.phone),s.append("brand_id",this.form.brand_id),s.append("itme_type_id",this.form.itme_type_id),s.append("product_id",this.form.product_id),s.append("serial",this.form.serial),s.append("purchase_date",this.form.purchase_date),s.append("issue",this.form.issue),s.append("resolution",this.form.resolution),s.append("status",e),!(this.form.id>0)){t.next=22;break}return t.next=19,l.update(s,this.form.id);case 19:r=t.sent,t.next=25;break;case 22:return t.next=24,l.create(s);case 24:r=t.sent;case 25:this.btnloading=!1,r.status?this.$router.push({name:"auth.tickets.listing"}):(r.data.first_name&&(this.errors.first_name=r.data.first_name),r.data.last_name&&(this.errors.last_name=r.data.last_name),r.data.email&&(this.errors.email=r.data.email),r.data.phone&&(this.errors.phone=r.data.phone),r.data.brand_id&&(this.errors.brand_id=r.data.brand_id),r.data.itme_type_id&&(this.errors.itme_type_id=r.data.itme_type_id),r.data.product_id&&(this.errors.product_id=r.data.product_id),r.data.serial&&(this.errors.serial=r.data.serial),r.data.purchase_date&&(this.errors.purchase_date=r.data.purchase_date),r.data.issue&&(this.errors.issue=r.data.issue),r.data.resolution&&(this.errors.resolution=r.data.resolution));case 27:case"end":return t.stop()}}),t,this)}))),function(t){return p.apply(this,arguments)}),loadChildList:function(t,e){switch(e){case 1:this.subIssues1=t.children.length>0?t.children:[],this.subIssues2=[],this.subIssues3=[];break;case 2:this.subIssues2=t.children.length>0?t.children:[],this.subIssues3=[];break;case 3:this.subIssues3=t.children.length>0?t.children:[]}}},computed:{user:function(){return this.$store.getters.loggedInUser},filter:function(){return this.caseSensitive?function(t,e,s){return t[s].indexOf(e)>-1}:void 0}},data:function(){return{brands:[],itemTypes:[],products:[],issues:[],subIssues1:[],subIssues2:[],subIssues3:[],resolutions:[{id:1,name:"CF - Warranty Claim"},{id:2,name:"TS - Tech Support"},{id:3,name:"PS"},{id:4,name:"OOW"},{id:5,name:"Non-Curtis Products"},{id:6,name:"Invalid Calls"},{id:7,name:"Others"},{id:8,name:"Case Follow Up"},{id:9,name:"Escalated Case"}],form:{id:this.$route.params.id?this.$route.params.id:0,item_number:"",unit:"",brand_id:0,itme_type_id:0,product_id:0,serial:"",purchase_date:"",issue:0,resolution:1},errors:{first_name:[],last_name:[],email:[],phone:[],brand_id:[],itme_type_id:[],product_id:[],serial:[],purchase_date:[],issue:[],resolution:[]},bread:[{text:"Dashboard",to:{name:"auth.dashboard"},disabled:!1,exact:!0},{text:"Tickets",to:{name:"auth.tickets.listing"},disabled:!1,exact:!0}],loading:!1,btnloading:!1,rules:{required:function(t){return!!t||"Required."}},open:[1,2],search:null,caseSensitive:!1,date:new Date(Date.now()-6e4*(new Date).getTimezoneOffset()).toISOString().substr(0,10),purchase_date_menu:!1}}};var v=s(3379),h=s.n(v),_=s(6632),b={insert:"head",singleton:!1};h()(_.Z,b);_.Z.locals;const g=(0,s(1900).Z)(f,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("v-breadcrumbs",{attrs:{items:t.bread},scopedSlots:t._u([{key:"divider",fn:function(){return[s("v-icon",[t._v("mdi-forward")])]},proxy:!0}])}),t._v(" "),s("v-row",{staticClass:"pa-10 rounded elevation-10",attrs:{"no-gutters":""}},[s("v-col",{attrs:{cols:"12",sm:"12"}},[s("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},[s("v-row",[s("v-col",{staticClass:"pb-0",attrs:{cols:"6",sm:"6"}},[s("v-text-field",{attrs:{rules:[t.rules.required],"error-messages":t.errors.first_name,label:"First Name"},model:{value:t.form.first_name,callback:function(e){t.$set(t.form,"first_name",e)},expression:"form.first_name"}})],1),t._v(" "),s("v-col",{staticClass:"pb-0",attrs:{cols:"6",sm:"6"}},[s("v-text-field",{attrs:{"error-messages":t.errors.last_name,label:"Last Name"},model:{value:t.form.last_name,callback:function(e){t.$set(t.form,"last_name",e)},expression:"form.last_name"}})],1),t._v(" "),s("v-col",{staticClass:"pb-0",attrs:{cols:"6",sm:"6"}},[s("v-text-field",{attrs:{rules:[t.rules.required],"error-messages":t.errors.email,label:"Email"},model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}})],1),t._v(" "),s("v-col",{staticClass:"pb-0",attrs:{cols:"6",sm:"6"}},[s("v-text-field",{attrs:{rules:2==t.form.resolution?[t.rules.required]:[],"error-messages":t.errors.phone,label:"Phone#"},model:{value:t.form.phone,callback:function(e){t.$set(t.form,"phone",e)},expression:"form.phone"}})],1),t._v(" "),s("v-col",{staticClass:"pb-0",attrs:{cols:"6",sm:"6"}},[s("v-select",{attrs:{items:t.brands,"item-text":"brand_name","item-value":"id",label:"Brands",required:"","error-messages":t.errors.brand_id},model:{value:t.form.brand_id,callback:function(e){t.$set(t.form,"brand_id",e)},expression:"form.brand_id"}})],1),t._v(" "),s("v-col",{staticClass:"pb-0",attrs:{cols:"6",sm:"6"}},[s("v-select",{attrs:{items:t.itemTypes,"item-text":"name","item-value":"id",label:"Item Type",required:"","error-messages":t.errors.itme_type_id},model:{value:t.form.itme_type_id,callback:function(e){t.$set(t.form,"itme_type_id",e)},expression:"form.itme_type_id"}})],1),t._v(" "),s("v-col",{staticClass:"pb-0",attrs:{cols:"12",sm:"12"}},[s("v-select",{attrs:{items:t.products,"item-text":"item_number","item-value":"id",label:"Products",required:"","error-messages":t.errors.product_id},model:{value:t.form.product_id,callback:function(e){t.$set(t.form,"product_id",e)},expression:"form.product_id"}})],1),t._v(" "),s("v-col",{staticClass:"pb-0",attrs:{cols:"4",sm:"4"}},[s("v-text-field",{attrs:{"error-messages":t.errors.serial,label:"Serial#"},model:{value:t.form.serial,callback:function(e){t.$set(t.form,"serial",e)},expression:"form.serial"}})],1),t._v(" "),s("v-col",{staticClass:"pb-0",attrs:{cols:"4",sm:"4"}},[s("v-select",{attrs:{items:t.resolutions,"item-text":"name","item-value":"id",label:"Resolution",required:"","error-messages":t.errors.resolution},model:{value:t.form.resolution,callback:function(e){t.$set(t.form,"resolution",e)},expression:"form.resolution"}})],1),t._v(" "),s("v-col",{staticClass:"pb-0",attrs:{cols:"4",sm:"4"}},[s("v-menu",{ref:"purchase_date_ref",attrs:{"close-on-content-click":!1,"return-value":t.date,transition:"scale-transition","offset-y":"","min-width":"auto"},on:{"update:returnValue":function(e){t.date=e},"update:return-value":function(e){t.date=e}},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,a=e.attrs;return[s("v-text-field",t._g(t._b({attrs:{label:"Purchase date","prepend-icon":"mdi-calendar",readonly:""},model:{value:t.form.purchase_date,callback:function(e){t.$set(t.form,"purchase_date",e)},expression:"form.purchase_date"}},"v-text-field",a,!1),r))]}}]),model:{value:t.purchase_date_menu,callback:function(e){t.purchase_date_menu=e},expression:"purchase_date_menu"}},[t._v(" "),s("v-date-picker",{attrs:{"no-title":"",scrollable:""},model:{value:t.form.purchase_date,callback:function(e){t.$set(t.form,"purchase_date",e)},expression:"form.purchase_date"}},[s("v-spacer"),t._v(" "),s("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(e){t.purchase_date_menu=!1}}},[t._v("\n\t\t\t\t\t\t\t\t\tCancel\n\t\t\t\t\t\t\t\t")]),t._v(" "),s("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(e){return t.$refs.purchase_date_ref.save(t.date)}}},[t._v("\n\t\t\t\t\t\t\t\t\tOK\n\t\t\t\t\t\t\t\t")])],1)],1)],1),t._v(" "),s("v-col",{staticClass:"pb-0",attrs:{cols:"12",sm:"12"}},[s("v-card",{staticClass:"mx-auto"},[s("h3",{staticClass:"pa-5 font-weight-light"},[t._v("Select Issue")]),t._v(" "),s("v-divider"),t._v(" "),s("v-card-text",[s("v-row",{attrs:{"no-gutters":""}},[t.issues.length>0?s("v-col",{attrs:{cols:"3"}},[s("v-list",{staticClass:"issues-list",attrs:{height:"300"}},[s("v-list-item-group",{attrs:{color:"primary","active-class":"white"},model:{value:t.form.issue,callback:function(e){t.$set(t.form,"issue",e)},expression:"form.issue"}},t._l(t.issues,(function(e){return s("v-list-item",{key:e.id,attrs:{value:e.id},on:{click:function(s){return t.loadChildList(e,1)}}},[e.children.length?s("v-list-item-icon",[s("v-icon",{domProps:{textContent:t._s("mdi-chevron-right")}})],1):t._e(),t._v(" "),s("v-list-item-content",[s("v-list-item-title",{domProps:{textContent:t._s(e.name)}})],1)],1)})),1)],1)],1):t._e(),t._v(" "),t.subIssues1.length>0?s("v-col",{attrs:{cols:"3"}},[s("v-list",{staticClass:"issues-list",attrs:{height:"300"}},[s("v-list-item-group",{attrs:{color:"primary","active-class":"white"},model:{value:t.form.issue,callback:function(e){t.$set(t.form,"issue",e)},expression:"form.issue"}},t._l(t.subIssues1,(function(e){return s("v-list-item",{key:e.id,attrs:{value:e.id},on:{click:function(s){return t.loadChildList(e,2)}}},[e.children.length?s("v-list-item-icon",[s("v-icon",{domProps:{textContent:t._s("mdi-chevron-right")}})],1):t._e(),t._v(" "),s("v-list-item-content",[s("v-list-item-title",{domProps:{textContent:t._s(e.name)}})],1)],1)})),1)],1)],1):t._e(),t._v(" "),t.subIssues2.length>0?s("v-col",{attrs:{cols:"3"}},[s("v-list",{staticClass:"issues-list",attrs:{height:"300"}},[s("v-list-item-group",{attrs:{color:"primary","active-class":"white"},model:{value:t.form.issue,callback:function(e){t.$set(t.form,"issue",e)},expression:"form.issue"}},t._l(t.subIssues2,(function(e){return s("v-list-item",{key:e.id,attrs:{value:e.id},on:{click:function(s){return t.loadChildList(e,3)}}},[e.children.length?s("v-list-item-icon",[s("v-icon",{domProps:{textContent:t._s("mdi-chevron-right")}})],1):t._e(),t._v(" "),s("v-list-item-content",[s("v-list-item-title",{domProps:{textContent:t._s(e.name)}})],1)],1)})),1)],1)],1):t._e(),t._v(" "),t.subIssues3.length>0?s("v-col",{attrs:{cols:"3"}},[s("v-list",{staticClass:"issues-list",attrs:{height:"300"}},[s("v-list-item-group",{attrs:{color:"primary","active-class":"white"},model:{value:t.form.issue,callback:function(e){t.$set(t.form,"issue",e)},expression:"form.issue"}},t._l(t.subIssues3,(function(e){return s("v-list-item",{key:e.id,attrs:{value:e.id}},[e.children.length?s("v-list-item-icon",[s("v-icon",{domProps:{textContent:t._s("mdi-chevron-right")}})],1):t._e(),t._v(" "),s("v-list-item-content",[s("v-list-item-title",{domProps:{textContent:t._s(e.name)}})],1)],1)})),1)],1)],1):t._e()],1)],1)],1)],1),t._v(" "),s("v-col",{staticClass:"pb-0",attrs:{cols:"12",sm:"12"}},[s("v-btn",{attrs:{color:"cyan",elevation:"1",large:"",raised:"",loading:t.btnloading,disabled:t.btnloading},on:{click:function(e){return t.addpermission(0)}}},[t._v("Pending")]),t._v(" "),s("v-btn",{attrs:{color:"warning",elevation:"1",large:"",raised:"",loading:t.btnloading,disabled:t.btnloading},on:{click:function(e){return t.addpermission(1)}}},[t._v("Open")]),t._v(" "),s("v-btn",{attrs:{color:"pink",elevation:"1",large:"",raised:"",loading:t.btnloading,disabled:t.btnloading},on:{click:function(e){return t.addpermission(2)}}},[t._v("Closed")])],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null).exports}}]);