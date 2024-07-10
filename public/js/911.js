"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[911],{1369:(t,e,r)=>{r.d(e,{Z:()=>u});var n=r(7757),a=r.n(n);function i(t,e,r,n,a,i,s){try{var o=t[i](s),c=o.value}catch(t){return void r(t)}o.done?e(c):Promise.resolve(c).then(n,a)}function s(t){return function(){var e=this,r=arguments;return new Promise((function(n,a){var s=t.apply(e,r);function o(t){i(s,n,a,o,c,"next",t)}function c(t){i(s,n,a,o,c,"throw",t)}o(void 0)}))}}function o(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var c=r(9669);const u=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.baseuri=e}var e,r,n,i,u,l;return e=t,r=[{key:"getlist",value:function(t){return c.get("/api/".concat(this.baseuri).concat(null!=t?t:"")).then((function(t){return t.data})).catch((function(t){return t}))}},{key:"create",value:(l=s(a().mark((function t(e){var r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.post("/api/"+this.baseuri,e).then((function(t){return{status:1,data:t.data.data}})).catch((function(t){return{status:0,data:t.response.data.errors}}));case 2:return r=t.sent,t.abrupt("return",r);case 4:case"end":return t.stop()}}),t,this)}))),function(t){return l.apply(this,arguments)})},{key:"delete",value:function(t){t.query;var e=t.id;return c.delete("/api/".concat(this.baseuri,"/").concat(e))}},{key:"get",value:function(t){return c.get("/api/".concat(this.baseuri,"/").concat(t)).then((function(t){return t.data.data}))}},{key:"getProductData",value:function(t,e){return c.get("/api/".concat(this.baseuri,"/").concat(t,"/").concat(e)).then((function(t){return t.data})).catch((function(t){return t}))}},{key:"update",value:(u=s(a().mark((function t(e,r){var n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.append("_method","put"),t.next=3,c.post("/api/"+this.baseuri+"/"+r,e).then((function(t){return{status:1,data:t.data.data}})).catch((function(t){return{status:0,data:t.response.data.errors}}));case 3:return n=t.sent,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t,this)}))),function(t,e){return u.apply(this,arguments)})},{key:"getQrcode",value:(i=s(a().mark((function t(e){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c({url:"/api/"+this.baseuri,method:"GET",responseType:"text/plain"}).then((function(t){return t.data}));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t,this)}))),function(t){return i.apply(this,arguments)})}],r&&o(e.prototype,r),n&&o(e,n),Object.defineProperty(e,"prototype",{writable:!1}),t}()},6573:(t,e,r)=>{function n(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}r.d(e,{Z:()=>i});var a=r(9669);const i=new(function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}var e,r,i;return e=t,(r=[{key:"get",value:function(t){return a.get("/api/".concat(t)).then((function(t){return t})).catch((function(t){return t}))}},{key:"post",value:function(t,e){return a.post("/api/".concat(t),e).then((function(t){return t})).catch((function(t){return t}))}}])&&n(e.prototype,r),i&&n(e,i),Object.defineProperty(e,"prototype",{writable:!1}),t}())},7911:(t,e,r)=>{r.r(e),r.d(e,{default:()=>p});var n=r(7757),a=r.n(n),i=r(1369),s=r(6573);function o(t,e,r,n,a,i,s){try{var o=t[i](s),c=o.value}catch(t){return void r(t)}o.done?e(c):Promise.resolve(c).then(n,a)}function c(t){return function(){var e=this,r=arguments;return new Promise((function(n,a){var i=t.apply(e,r);function s(t){o(i,n,a,s,c,"next",t)}function c(t){o(i,n,a,s,c,"throw",t)}s(void 0)}))}}var u=new i.Z("clipart-categories");var l;const d={name:"auth.clipartcategories.add",watch:{},mounted:function(){var t=this;return c(a().mark((function e(){var r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.$route.params.id){e.next=10;break}return e.next=3,u.get(t.form.id);case 3:r=e.sent,t.initialCategory=r.parent_id?r.parent_id:0,t.form={name:r.name?r.name:"",id:t.$route.params.id},t.cliparts=r.cliparts,t.bread.push({text:"Edit",to:{name:"auth.clipartcategories.edit",params:{id:t.$route.params.id}},disabled:!1,exact:!0}),e.next=11;break;case 10:t.bread.push({text:"Add",to:{name:"auth.clipartcategories.add"},disabled:!1,exact:!0});case 11:case"end":return e.stop()}}),e)})))()},methods:{resetError:function(){this.errors={name:[]}},addpermission:(l=c(a().mark((function t(){var e,r,n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(this.resetError(),!this.$refs.form.validate()){t.next=17;break}for(this.btnloading=!0,(e=new FormData).append("name",this.form.name),r=0;r<this.cliparts.length;r++)e.append("cliparts["+r+"][name]",this.cliparts[r].name),e.append("cliparts["+r+"][image_url]",this.cliparts[r].image_url);if(this.btnloading=!1,!(this.form.id>0)){t.next=13;break}return t.next=10,u.update(e,this.form.id);case 10:n=t.sent,t.next=16;break;case 13:return t.next=15,u.create(e);case 15:n=t.sent;case 16:n.status?this.$router.push({name:"auth.clipartcategories.listing"}):n.data.name&&(this.errors.name=n.data.name);case 17:case"end":return t.stop()}}),t,this)}))),function(){return l.apply(this,arguments)}),uploadFile:function(t,e){var r=this;return c(a().mark((function n(){var i,o;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!t){n.next=7;break}return(i=new FormData).append("file",t),n.next=5,s.Z.post("custom/upload-image",i).then((function(t){return t.data}));case 5:o=n.sent,r.cliparts[e].image_url=o.url;case 7:case"end":return n.stop()}}),n)})))()},addClipArt:function(){this.cliparts.push({image_url:"",name:""})},deleteClipArt:function(t){this.cliparts.splice(t,1)}},computed:{user:function(){return this.$store.getters.loggedInUser}},data:function(){return{cliparts:[],form:{id:this.$route.params.id?this.$route.params.id:0,name:""},errors:{name:[]},bread:[{text:"Dashboard",to:{name:"auth.dashboard"},disabled:!1,exact:!0},{text:"Clip Art Category",to:{name:"auth.clipartcategories.listing"},disabled:!1,exact:!0}],loading:!1,btnloading:!1,rules:{required:function(t){return!!t||"Required."}}}}};const p=(0,r(1900).Z)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-breadcrumbs",{attrs:{items:t.bread},scopedSlots:t._u([{key:"divider",fn:function(){return[r("v-icon",[t._v("mdi-forward")])]},proxy:!0}])}),t._v(" "),r("v-row",{staticClass:"pa-10 rounded elevation-10",attrs:{"no-gutters":""}},[r("v-col",{attrs:{cols:"12",sm:"12"}},[r("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},[r("v-row",[r("v-col",{staticClass:"pb-0",attrs:{cols:"12",sm:"12"}},[r("v-text-field",{attrs:{"error-messages":t.errors.name,label:"Name"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),t._v(" "),r("v-col",{staticClass:"pb-0",attrs:{cols:"12",sm:"12"}},[r("v-simple-table",{scopedSlots:t._u([{key:"default",fn:function(){return[r("thead",[r("tr",[r("th",{staticClass:"text-left"},[t._v("\n                                            Name\n                                        ")]),t._v(" "),r("th",{staticClass:"text-left"},[t._v("\n                                            Clip Art\n                                        ")]),t._v(" "),r("th",{staticClass:"text-left"})])]),t._v(" "),r("tbody",t._l(t.cliparts,(function(e,n){return r("tr",{key:n},[r("td",[r("v-text-field",{attrs:{rules:[t.rules.required]},model:{value:e.name,callback:function(r){t.$set(e,"name",r)},expression:"clipart.name"}})],1),t._v(" "),r("td",[r("v-file-input",{on:{change:function(e){return t.uploadFile(e,n)}}}),t._v(" "),e.image_url?r("a",{attrs:{href:e.image_url,target:"_blank"}},[t._v("View Image")]):t._e()],1),t._v(" "),r("td",[r("v-btn",{attrs:{color:"error",fab:"","x-small":"",dark:""},on:{click:function(e){return t.deleteClipArt(n)}}},[r("v-icon",[t._v("mdi-delete-outline")])],1)],1)])})),0)]},proxy:!0}])})],1),t._v(" "),r("v-col",{staticClass:"pb-0",attrs:{cols:"12",sm:"12"}},[r("v-btn",{staticClass:"float-end",attrs:{color:"info",elevation:"1"},on:{click:t.addClipArt}},[t._v("Add ClipArt")])],1),t._v(" "),r("v-col",{staticClass:"pb-0",attrs:{cols:"12",sm:"12"}},[r("v-btn",{attrs:{color:"secondary",elevation:"1",large:"",raised:"",loading:t.btnloading,disabled:t.btnloading},on:{click:t.addpermission}},[t._v(t._s(t.form.id>0?"Update":"Add"))])],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null).exports}}]);