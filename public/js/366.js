"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[366],{1369:(t,e,r)=>{r.d(e,{Z:()=>u});var a=r(7757),n=r.n(a);function s(t,e,r,a,n,s,o){try{var i=t[s](o),c=i.value}catch(t){return void r(t)}i.done?e(c):Promise.resolve(c).then(a,n)}function o(t){return function(){var e=this,r=arguments;return new Promise((function(a,n){var o=t.apply(e,r);function i(t){s(o,a,n,i,c,"next",t)}function c(t){s(o,a,n,i,c,"throw",t)}i(void 0)}))}}function i(t,e){for(var r=0;r<e.length;r++){var a=e[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}var c=r(9669);const u=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.baseuri=e}var e,r,a,s,u,l;return e=t,r=[{key:"getlist",value:function(t){return c.get("/api/".concat(this.baseuri).concat(null!=t?t:"")).then((function(t){return t.data})).catch((function(t){return t}))}},{key:"create",value:(l=o(n().mark((function t(e){var r;return n().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.post("/api/"+this.baseuri,e).then((function(t){return{status:1,data:t.data.data}})).catch((function(t){return{status:0,data:t.response.data.errors}}));case 2:return r=t.sent,t.abrupt("return",r);case 4:case"end":return t.stop()}}),t,this)}))),function(t){return l.apply(this,arguments)})},{key:"delete",value:function(t){t.query;var e=t.id;return c.delete("/api/".concat(this.baseuri,"/").concat(e))}},{key:"get",value:function(t){return c.get("/api/".concat(this.baseuri,"/").concat(t)).then((function(t){return t.data.data}))}},{key:"getProductData",value:function(t,e){return c.get("/api/".concat(this.baseuri,"/").concat(t,"/").concat(e)).then((function(t){return t.data})).catch((function(t){return t}))}},{key:"update",value:(u=o(n().mark((function t(e,r){var a;return n().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.append("_method","put"),t.next=3,c.post("/api/"+this.baseuri+"/"+r,e).then((function(t){return{status:1,data:t.data.data}})).catch((function(t){return{status:0,data:t.response.data.errors}}));case 3:return a=t.sent,t.abrupt("return",a);case 5:case"end":return t.stop()}}),t,this)}))),function(t,e){return u.apply(this,arguments)})},{key:"getQrcode",value:(s=o(n().mark((function t(e){return n().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c({url:"/api/"+this.baseuri,method:"GET",responseType:"text/plain"}).then((function(t){return t.data}));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t,this)}))),function(t){return s.apply(this,arguments)})}],r&&i(e.prototype,r),a&&i(e,a),Object.defineProperty(e,"prototype",{writable:!1}),t}()},3366:(t,e,r)=>{r.r(e),r.d(e,{default:()=>u});var a=r(7757),n=r.n(a);function s(t,e,r,a,n,s,o){try{var i=t[s](o),c=i.value}catch(t){return void r(t)}i.done?e(c):Promise.resolve(c).then(a,n)}function o(t){return function(){var e=this,r=arguments;return new Promise((function(a,n){var o=t.apply(e,r);function i(t){s(o,a,n,i,c,"next",t)}function c(t){s(o,a,n,i,c,"throw",t)}i(void 0)}))}}var i=new(r(1369).Z)("orders");const c={name:"auth.orders.view",watch:{},mounted:function(){var t=this;return o(n().mark((function e(){return n().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.getOrder(),t.bread.push({text:"View",to:{name:"auth.orders.view"},disabled:!1,exact:!0});case 2:case"end":return e.stop()}}),e)})))()},methods:{getOrder:function(){var t=this;return o(n().mark((function e(){var r,a,s;return n().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.servicesSelected=[],!t.$route.params.id){e.next=11;break}return e.next=4,i.get(t.$route.params.id);case 4:for(r=e.sent,t.order=r,a=r.services.split(","),s=0;s<a.length;s++)t.servicesSelected.push(parseInt(a[s]));t.applicants=JSON.parse(r.applicants),t.currentStatus=r.order_status,console.log(r);case 11:case"end":return e.stop()}}),e)})))()},updateStatus:function(){var t=this;return o(n().mark((function e(){var r;return n().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.statusUpdating=!0,(r=new FormData).append("order_status",t.currentStatus),e.next=5,i.update(r,t.$route.params.id);case 5:return e.next=7,t.getOrder();case 7:t.statusUpdating=!1;case 8:case"end":return e.stop()}}),e)})))()},downloadFile:function(t){window.open(t,"_blank").focus()},downloadPDF:function(){window.open(this.order.pdf_url,"_blank","noreferrer")}},computed:{user:function(){return this.$store.getters.loggedInUser}},data:function(){return{servicesSelected:[],currentStatus:0,statusUpdating:!1,orderStatuses:[{id:0,text:"Pending"},{id:1,text:"Seen"},{id:2,text:"In Progress"},{id:3,text:"Approved"},{id:4,text:"Delivered"},{id:5,text:"Paid"},{id:6,text:"Payment Failed"}],servicesArr:[{name:"Express Service",selected:!1,cost:100,cost_aed:368,subname:"Get your order in 12 Hours"},{name:"Airport Pickup",selected:!1,cost:50,cost_aed:184,subname:"Pre-book one way airport from DXB airport to anywhere in"},{name:"Travel Insurance",selected:!1,cost:80,cost_aed:294,subname:"Get travel insurance with your visa"}],order:{},applicants:[],bread:[{text:"Dashboard",to:{name:"auth.dashboard"},disabled:!1,exact:!0},{text:"Orders",to:{name:"auth.orders.listing"},disabled:!1,exact:!0}]}}};const u=(0,r(1900).Z)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"elevation-10"},[r("v-breadcrumbs",{attrs:{items:t.bread},scopedSlots:t._u([{key:"divider",fn:function(){return[r("v-icon",[t._v("mdi-forward")])]},proxy:!0}])}),t._v(" "),r("v-row",{attrs:{"no-gutters":""}},[r("v-col",{attrs:{cols:"12"}},[r("div",{staticClass:"text-center"},[r("v-chip",{staticClass:"ma-2",attrs:{color:"pink",label:"","text-color":"white"}},[r("v-icon",{attrs:{left:""}},[t._v("mdi-cash")]),t._v(t._s(t.order.total)+"\n                ")],1),t._v(" "),t.order.currency?r("v-chip",{staticClass:"ma-2",attrs:{color:"primary",label:""}},[r("v-icon",{attrs:{left:""}},[t._v("mdi-currency-usd")]),t._v(t._s(t.order.currency.toUpperCase())+"\n                ")],1):t._e(),t._v(" "),t.order.currency?r("v-chip",{staticClass:"ma-2",attrs:{color:"secondary",label:""}},[r("v-icon",{attrs:{left:""}},[t._v("mdi-calendar")]),t._v(t._s(t.order.created_at_formatted)+"\n                ")],1):t._e(),t._v(" "),r("v-btn",{on:{click:t.downloadPDF}},[t._v("Download Order")])],1)]),t._v(" "),r("v-col",{attrs:{cols:"12"}},[r("v-card",{staticClass:"mb-5 mx-auto ml-3 mr-3 pa-3",attrs:{loading:t.statusUpdating,disabled:t.statusUpdating,elevate:"2"}},[r("h4",[t._v("Update Order Status")]),t._v(" "),r("v-select",{attrs:{items:t.orderStatuses,"item-text":"text","item-value":"id",label:"Order Status"},model:{value:t.currentStatus,callback:function(e){t.currentStatus=e},expression:"currentStatus"}}),t._v(" "),r("v-btn",{on:{click:t.updateStatus}},[t._v("Update")])],1)],1),t._v(" "),t._l(t.applicants,(function(e,a){return r("v-col",{key:a,attrs:{cols:"6",sm:"6"}},[r("v-card",{staticClass:"mx-auto ml-3"},[r("v-list-item",{attrs:{"two-line":""}},[r("v-list-item-content",[r("v-list-item-title",{staticClass:"text-h5"},[t._v("Applicant "+t._s(a+1))])],1)],1),t._v(" "),r("v-card-text",[r("v-row",{attrs:{align:"center"}},[r("v-col",{staticClass:"text-h5",attrs:{cols:"6"}},[t._v("\n                            "+t._s(e.first_name)+" "+t._s(e.last_name)+"\n                        ")]),t._v(" "),r("v-col",{attrs:{cols:"6"}},[r("v-img",{attrs:{src:e.photograph,alt:"Sunny image",width:"92"}})],1)],1)],1),t._v(" "),r("v-simple-table",{scopedSlots:t._u([{key:"default",fn:function(){return[r("tbody",[r("tr",[r("td",[r("v-icon",[t._v("mdi-phone")]),t._v("Phone")],1),t._v(" "),r("td",[t._v(t._s(e.phone))])]),t._v(" "),r("tr",[r("td",[r("v-icon",[t._v("mdi-email")]),t._v("Email")],1),t._v(" "),r("td",[t._v(t._s(e.email))])]),t._v(" "),r("tr",[r("td",[r("v-icon",[t._v("mdi-flag")]),t._v("Country")],1),t._v(" "),r("td",[t._v(t._s(t.order.country.country_name))])]),t._v(" "),r("tr",[r("td",[r("v-icon",[t._v("mdi-passport")]),t._v("Passport #")],1),t._v(" "),r("td",[t._v(t._s(e.passport_no))])]),t._v(" "),r("tr",[r("td",[r("v-icon",[t._v("mdi-calendar")]),t._v("Travel Date")],1),t._v(" "),r("td",[t._v(t._s(e.travel_date))])]),t._v(" "),r("tr",[r("td",[r("v-icon",[t._v("mdi-briefcase")]),t._v("Profession")],1),t._v(" "),r("td",[t._v(t._s(e.profession))])]),t._v(" "),r("tr",[r("td",[r("v-icon",[t._v("mdi-airport")]),t._v("Purpose")],1),t._v(" "),r("td",[t._v(t._s(e.purpose))])])])]},proxy:!0}],null,!0)}),t._v(" "),r("v-card-actions",[r("v-btn",{attrs:{small:"",text:""},on:{click:function(r){return t.downloadFile(e.passport)}}},[t._v("\n                        Download Passport\n                    ")]),t._v(" "),r("v-btn",{attrs:{small:"",text:""},on:{click:function(r){return t.downloadFile(e.photograph)}}},[t._v("\n                        Download Photograph\n                    ")]),t._v(" "),r("v-btn",{attrs:{small:"",text:""},on:{click:function(r){return t.downloadFile(e.nationalId)}}},[t._v("\n                        Download National ID\n                    ")])],1)],1)],1)}))],2),t._v(" "),r("v-row",{attrs:{"no-gutters":""}},[r("v-col",{attrs:{cols:"6"}},[r("v-list",{attrs:{disabled:"",flat:"",subheader:""}},[r("v-subheader",[t._v("Services")]),t._v(" "),r("v-list-item-group",{attrs:{multiple:"","active-class":""},model:{value:t.servicesSelected,callback:function(e){t.servicesSelected=e},expression:"servicesSelected"}},t._l(t.servicesArr,(function(e,a){return r("v-list-item",{key:a,scopedSlots:t._u([{key:"default",fn:function(a){var n=a.active;return[r("v-list-item-action",[r("v-checkbox",{attrs:{"input-value":n}})],1),t._v(" "),r("v-list-item-content",[r("v-list-item-title",[t._v(t._s(e.name))]),t._v(" "),r("v-list-item-subtitle",[t._v(t._s(e.subname))])],1)]}}],null,!0)})})),1)],1)],1),t._v(" "),r("v-col",{attrs:{cols:"10"}},[r("h1",{staticClass:"text-center"},[t._v("Timeline")]),t._v(" "),r("v-timeline",{attrs:{dense:"",clipped:""}},[t._l(t.order.statuses,(function(e){return r("v-timeline-item",{key:e.id,staticClass:"mb-4",attrs:{color:"grey",small:""}},[r("v-row",{attrs:{justify:"space-between"}},[r("v-col",{attrs:{cols:"7"}},[t._v("\n                            Order Status Updated: \n                            "+t._s(t.orderStatuses.find((function(t){return t.id==e.order_status})).text)+"\n                            "),r("br"),t._v(" "),r("small",[t._v(t._s(e.user_id>0?"Updated By: "+e.user.name:""))])]),t._v(" "),r("v-col",{staticClass:"text-right",attrs:{cols:"5"}},[r("v-chip",{staticClass:"ma-2",attrs:{small:"",color:"secondary",label:""}},[r("v-icon",{attrs:{left:""}},[t._v("mdi-calendar")]),t._v(t._s(e.created_at_formatted)+"\n                            ")],1)],1)],1)],1)})),t._v(" "),r("v-timeline-item",{staticClass:"mb-4"},[r("v-row",{attrs:{justify:"space-between"}},[r("v-col",{attrs:{cols:"7"}},[t._v("\n                            Order Status Created\n                        ")]),t._v(" "),r("v-col",{staticClass:"text-right",attrs:{cols:"5"}},[r("v-chip",{staticClass:"ma-2",attrs:{small:"",color:"secondary",label:""}},[r("v-icon",{attrs:{left:""}},[t._v("mdi-calendar")]),t._v(t._s(t.order.created_at_formatted)+"\n                            ")],1)],1)],1)],1)],2)],1)],1)],1)}),[],!1,null,null,null).exports}}]);