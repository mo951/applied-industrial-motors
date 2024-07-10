"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[137],{1369:(t,e,n)=>{n.d(e,{Z:()=>u});var r=n(7757),a=n.n(r);function i(t,e,n,r,a,i,s){try{var o=t[i](s),c=o.value}catch(t){return void n(t)}o.done?e(c):Promise.resolve(c).then(r,a)}function s(t){return function(){var e=this,n=arguments;return new Promise((function(r,a){var s=t.apply(e,n);function o(t){i(s,r,a,o,c,"next",t)}function c(t){i(s,r,a,o,c,"throw",t)}o(void 0)}))}}function o(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var c=n(9669);const u=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.baseuri=e}var e,n,r,i,u,l;return e=t,n=[{key:"getlist",value:function(t){return c.get("/api/".concat(this.baseuri).concat(null!=t?t:"")).then((function(t){return t.data})).catch((function(t){return t}))}},{key:"create",value:(l=s(a().mark((function t(e){var n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.post("/api/"+this.baseuri,e).then((function(t){return{status:1,data:t.data.data}})).catch((function(t){return{status:0,data:t.response.data.errors}}));case 2:return n=t.sent,t.abrupt("return",n);case 4:case"end":return t.stop()}}),t,this)}))),function(t){return l.apply(this,arguments)})},{key:"delete",value:function(t){t.query;var e=t.id;return c.delete("/api/".concat(this.baseuri,"/").concat(e))}},{key:"get",value:function(t){return c.get("/api/".concat(this.baseuri,"/").concat(t)).then((function(t){return t.data.data}))}},{key:"getProductData",value:function(t,e){return c.get("/api/".concat(this.baseuri,"/").concat(t,"/").concat(e)).then((function(t){return t.data})).catch((function(t){return t}))}},{key:"update",value:(u=s(a().mark((function t(e,n){var r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.append("_method","put"),t.next=3,c.post("/api/"+this.baseuri+"/"+n,e).then((function(t){return{status:1,data:t.data.data}})).catch((function(t){return{status:0,data:t.response.data.errors}}));case 3:return r=t.sent,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t,this)}))),function(t,e){return u.apply(this,arguments)})},{key:"getQrcode",value:(i=s(a().mark((function t(e){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c({url:"/api/"+this.baseuri,method:"GET",responseType:"text/plain"}).then((function(t){return t.data}));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t,this)}))),function(t){return i.apply(this,arguments)})}],n&&o(e.prototype,n),r&&o(e,r),Object.defineProperty(e,"prototype",{writable:!1}),t}()},6137:(t,e,n)=>{n.r(e),n.d(e,{default:()=>c});var r=n(7757),a=n.n(r);function i(t,e,n,r,a,i,s){try{var o=t[i](s),c=o.value}catch(t){return void n(t)}o.done?e(c):Promise.resolve(c).then(r,a)}var s=new(n(1369).Z)("orders");const o={name:"auth.orders.view",watch:{},mounted:function(){var t,e=this;return(t=a().mark((function t(){var n,r,i;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.$route.params.id){t.next=8;break}return t.next=3,s.get(e.$route.params.id);case 3:for(n=t.sent,e.order=n,r=n.services.split(","),i=0;i<r.length;i++)e.servicesSelected.push(parseInt(r[i]));e.applicants=JSON.parse(n.applicants);case 8:e.bread.push({text:"View",to:{name:"auth.orders.view"},disabled:!1,exact:!0});case 9:case"end":return t.stop()}}),t)})),function(){var e=this,n=arguments;return new Promise((function(r,a){var s=t.apply(e,n);function o(t){i(s,r,a,o,c,"next",t)}function c(t){i(s,r,a,o,c,"throw",t)}o(void 0)}))})()},methods:{downloadFile:function(t){}},computed:{user:function(){return this.$store.getters.loggedInUser}},data:function(){return{servicesSelected:[],servicesArr:[{name:"Express Service",selected:!1,cost:100,cost_aed:368,subname:"Get your order in 12 Hours"},{name:"Airport Pickup",selected:!1,cost:50,cost_aed:184,subname:"Pre-book one way airport from DXB airport to anywhere in Dubai"},{name:"Travel Insurance",selected:!1,cost:80,cost_aed:294,subname:"Get travel insurance with your visa"}],order:{},applicants:[],bread:[{text:"Dashboard",to:{name:"auth.dashboard"},disabled:!1,exact:!0},{text:"Orders",to:{name:"auth.orders.listing"},disabled:!1,exact:!0}]}}};const c=(0,n(1900).Z)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-breadcrumbs",{attrs:{items:t.bread},scopedSlots:t._u([{key:"divider",fn:function(){return[n("v-icon",[t._v("mdi-forward")])]},proxy:!0}])}),t._v(" "),n("v-row",{attrs:{"no-gutters":""}},[n("v-col",{attrs:{cols:"12"}},[n("div",{staticClass:"text-center"},[n("v-chip",{staticClass:"ma-2",attrs:{color:"pink",label:"","text-color":"white"}},[n("v-icon",{attrs:{left:""}},[t._v("mdi-cash")]),t._v(t._s(t.order.total)+"\n                ")],1),t._v(" "),n("v-chip",{staticClass:"ma-2",attrs:{color:"primary",label:""}},[n("v-icon",{attrs:{left:""}},[t._v("mdi-currency-usd")]),t._v(t._s(t.order.currency)+"\n                ")],1)],1)]),t._v(" "),t._l(t.applicants,(function(e,r){return n("v-col",{key:r,attrs:{cols:"6",sm:"6"}},[n("v-card",{staticClass:"mx-auto ml-3"},[n("v-list-item",{attrs:{"two-line":""}},[n("v-list-item-content",[n("v-list-item-title",{staticClass:"text-h5"},[t._v("Applicant "+t._s(r+1))])],1)],1),t._v(" "),n("v-card-text",[n("v-row",{attrs:{align:"center"}},[n("v-col",{staticClass:"text-h2",attrs:{cols:"6"}},[t._v("\n                            "+t._s(e.first_name)+" "+t._s(e.last_name)+"\n                        ")]),t._v(" "),n("v-col",{attrs:{cols:"6"}},[n("v-img",{attrs:{src:e.photograph,alt:"Sunny image",width:"92"}})],1)],1)],1),t._v(" "),n("v-list-item",[n("v-list-item-icon",[n("v-icon",[t._v("mdi-phone")])],1),t._v(" "),n("v-list-item-subtitle",[t._v(t._s(e.phone))])],1),t._v(" "),n("v-list-item",[n("v-list-item-icon",[n("v-icon",[t._v("mdi-email")])],1),t._v(" "),n("v-list-item-subtitle",[t._v(t._s(e.email))])],1),t._v(" "),n("v-list-item",[n("v-list-item-icon",[n("v-icon",[t._v("mdi-flag")])],1),t._v(" "),n("v-list-item-subtitle",[t._v(t._s(t.order.country.country_name))])],1),t._v(" "),n("v-list-item",[n("v-list-item-icon",[n("v-icon",[t._v("mdi-passport")])],1),t._v(" "),n("v-list-item-subtitle",[t._v(t._s(e.passport_no))])],1),t._v(" "),n("v-list-item",[n("v-list-item-icon",[n("v-icon",[t._v("mdi-calendar")])],1),t._v(" "),n("v-list-item-subtitle",[t._v(t._s(e.travel_date))])],1),t._v(" "),n("v-list-item",[n("v-list-item-icon",[n("v-icon",[t._v("mdi-briefcase")])],1),t._v(" "),n("v-list-item-subtitle",[t._v(t._s(e.profession))])],1),t._v(" "),n("v-list-item",[n("v-list-item-icon",[n("v-icon",[t._v("mdi-airport")])],1),t._v(" "),n("v-list-item-subtitle",[t._v(t._s(e.purpose))])],1),t._v(" "),n("v-card-actions",[n("v-btn",{attrs:{small:"",text:""},on:{click:function(n){return t.downloadFile(e.passport)}}},[t._v("\n                        Download Passport\n                    ")]),t._v(" "),n("v-btn",{attrs:{small:"",text:""},on:{click:function(n){return t.downloadFile(e.photograph)}}},[t._v("\n                        Download Photograph\n                    ")]),t._v(" "),n("v-btn",{attrs:{small:"",text:""},on:{click:function(n){return t.downloadFile(e.nationalId)}}},[t._v("\n                        Download National ID\n                    ")])],1)],1)],1)})),t._v(" "),n("v-col",{attrs:{cols:"12"}},[n("v-list",{attrs:{disabled:"",flat:"",subheader:""}},[n("v-subheader",[t._v("Services")]),t._v(" "),n("v-list-item-group",{attrs:{multiple:"","active-class":""},model:{value:t.servicesSelected,callback:function(e){t.servicesSelected=e},expression:"servicesSelected"}},t._l(t.servicesArr,(function(e,r){return n("v-list-item",{key:r,scopedSlots:t._u([{key:"default",fn:function(r){var a=r.active;return[n("v-list-item-action",[n("v-checkbox",{attrs:{"input-value":a}})],1),t._v(" "),n("v-list-item-content",[n("v-list-item-title",[t._v(t._s(e.name))]),t._v(" "),n("v-list-item-subtitle",[t._v(t._s(e.subname))])],1)]}}],null,!0)})})),1)],1)],1)],2)],1)}),[],!1,null,null,null).exports}}]);