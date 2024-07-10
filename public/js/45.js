"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[45],{1369:(e,t,r)=>{r.d(t,{Z:()=>l});var a=r(7757),i=r.n(a);function o(e,t,r,a,i,o,s){try{var n=e[o](s),d=n.value}catch(e){return void r(e)}n.done?t(d):Promise.resolve(d).then(a,i)}function s(e){return function(){var t=this,r=arguments;return new Promise((function(a,i){var s=e.apply(t,r);function n(e){o(s,a,i,n,d,"next",e)}function d(e){o(s,a,i,n,d,"throw",e)}n(void 0)}))}}function n(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}var d=r(9669);const l=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.baseuri=t}var t,r,a,o,l,u;return t=e,r=[{key:"getlist",value:function(e){return d.get("/api/".concat(this.baseuri).concat(null!=e?e:"")).then((function(e){return e.data})).catch((function(e){return e}))}},{key:"create",value:(u=s(i().mark((function e(t){var r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.post("/api/"+this.baseuri,t).then((function(e){return{status:1,data:e.data.data}})).catch((function(e){return{status:0,data:e.response.data.errors}}));case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e,this)}))),function(e){return u.apply(this,arguments)})},{key:"delete",value:function(e){e.query;var t=e.id;return d.delete("/api/".concat(this.baseuri,"/").concat(t))}},{key:"get",value:function(e){return d.get("/api/".concat(this.baseuri,"/").concat(e)).then((function(e){return e.data.data}))}},{key:"getProductData",value:function(e,t){return d.get("/api/".concat(this.baseuri,"/").concat(e,"/").concat(t)).then((function(e){return e.data})).catch((function(e){return e}))}},{key:"update",value:(l=s(i().mark((function e(t,r){var a;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.append("_method","put"),e.next=3,d.post("/api/"+this.baseuri+"/"+r,t).then((function(e){return{status:1,data:e.data.data}})).catch((function(e){return{status:0,data:e.response.data.errors}}));case 3:return a=e.sent,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e,this)}))),function(e,t){return l.apply(this,arguments)})},{key:"getQrcode",value:(o=s(i().mark((function e(t){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d({url:"/api/"+this.baseuri,method:"GET",responseType:"text/plain"}).then((function(e){return e.data}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e,this)}))),function(e){return o.apply(this,arguments)})}],r&&n(t.prototype,r),a&&n(t,a),Object.defineProperty(t,"prototype",{writable:!1}),e}()},6573:(e,t,r)=>{function a(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}r.d(t,{Z:()=>o});var i=r(9669);const o=new(function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,r,o;return t=e,(r=[{key:"get",value:function(e){return i.get("/api/".concat(e)).then((function(e){return e})).catch((function(e){return e}))}},{key:"post",value:function(e,t){return i.post("/api/".concat(e),t).then((function(e){return e})).catch((function(e){return e}))}}])&&a(t.prototype,r),o&&a(t,o),Object.defineProperty(t,"prototype",{writable:!1}),e}())},1045:(e,t,r)=>{r.r(t),r.d(t,{default:()=>p});var a=r(7757),i=r.n(a),o=r(1369),s=r(6573);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function d(e,t,r,a,i,o,s){try{var n=e[o](s),d=n.value}catch(e){return void r(e)}n.done?t(d):Promise.resolve(d).then(a,i)}function l(e){return function(){var t=this,r=arguments;return new Promise((function(a,i){var o=e.apply(t,r);function s(e){d(o,a,i,s,n,"next",e)}function n(e){d(o,a,i,s,n,"throw",e)}s(void 0)}))}}var u=new o.Z("productmanagment");var c;const m={name:"auth.products.add",watch:{},mounted:function(){var e=this;return l(i().mark((function t(){var r,a;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.Z.get("getdropdownsvalues").then((function(e){return e.data}));case 2:if(e.dropdownClasses=t.sent,!e.$route.params.id){t.next=13;break}return t.next=6,u.get(e.form.id);case 6:a=t.sent,console.log(a),e.initialCategory=a.parent_id?a.parent_id:0,e.form=(n(r={motorgroup_id:a.motorgroup_id?a.motorgroup_id:"",framesize_id:a.framesize_id?a.framesize_id:"",horsepower_id:a.horsepower_id?a.horsepower_id:"",speed_id:a.speed_id?a.speed_id:"",voltage_id:a.voltage_id?a.voltage_id:"",price:a.price?a.price:"",multiplier_code:a.multiplier_code?a.multiplier_code:"",mounting:a.mounting?a.mounting:"",motor_name:a.motor_name?a.motor_name:""},"motor_name",a.slug?a.slug:""),n(r,"slug",a.slug?a.slug:""),n(r,"other_selections",a.category_ids?JSON.parse(a.category_ids):[]),n(r,"image_url_2d_drawing",a.image_url),n(r,"image_url_3d_drawing",a.image_url_three_drawing),n(r,"image_url_datasheet",a.image_url_datasheet),n(r,"id",e.$route.params.id),r),e.bread.push({text:"Edit",to:{name:"auth.products.edit",params:{id:e.$route.params.id}},disabled:!1,exact:!0}),t.next=14;break;case 13:e.bread.push({text:"Add",to:{name:"auth.products.add"},disabled:!1,exact:!0});case 14:case"end":return t.stop()}}),t)})))()},methods:{resetError:function(){this.errors={name:[],value:[],is_active:[]}},addpermission:(c=l(i().mark((function e(){var t,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.resetError(),!this.$refs.form.validate()){e.next=29;break}if(this.btnloading=!0,(t=new FormData).append("motorgroup_id",this.form.motorgroup_id),t.append("framesize_id",this.form.framesize_id),t.append("horsepower_id",this.form.horsepower_id),t.append("speed_id",this.form.speed_id),t.append("voltage_id",this.form.voltage_id),t.append("price",this.form.price),t.append("multiplier_code",this.form.multiplier_code),t.append("mounting",this.form.mounting),t.append("motor_name",this.form.motor_name),t.append("slug",this.form.motor_name),t.append("category_ids",JSON.stringify(this.form.other_selections)),this.form.image_2d_drwaing&&t.append("image_2d_drwaing",this.form.image_2d_drwaing),this.form.image_3d_drwaing&&t.append("image_3d_drwaing",this.form.image_3d_drwaing),this.form.image_data_sheet&&t.append("image_data_sheet",this.form.image_data_sheet),this.btnloading=!1,!(this.form.id>0)){e.next=25;break}return e.next=22,u.update(t,this.form.id);case 22:r=e.sent,e.next=28;break;case 25:return e.next=27,u.create(t);case 27:r=e.sent;case 28:r.status?this.$router.push({name:"auth.products.listing"}):(r.data.motorgroup_id&&(this.errors.motorgroup_id=r.data.motorgroup_id),r.data.framesize_id&&(this.errors.framesize_id=r.data.framesize_id),r.data.horsepower_id&&(this.errors.horsepower_id=r.data.horsepower_id),r.data.speed_id&&(this.errors.speed_id=r.data.speed_id),r.data.voltage_id&&(this.errors.voltage_id=r.data.voltage_id),r.data.price&&(this.errors.price=r.data.price),r.data.multiplier_code&&(this.errors.multiplier_code=r.data.multiplier_code),r.data.mounting&&(this.errors.mounting=r.data.mounting),r.data.motor_name&&(this.errors.motor_name=r.data.motor_name),r.data.category_ids&&(this.errors.category_ids=r.data.category_ids));case 29:case"end":return e.stop()}}),e,this)}))),function(){return c.apply(this,arguments)}),updateValudCategory:function(e){this.form.parent_id=e}},computed:{user:function(){return this.$store.getters.loggedInUser}},data:function(){return{dropdownClasses:[],initialCategory:0,categories:[{id:"3",name:"Farm Duty"},{id:"4",name:"Crusher Duty"},{id:"5",name:"Washdown"},{id:"6",name:"Phase Converter Motor"},{id:"7",name:"Premium JM-JP"},{id:"8",name:"EPAct JM-JP"},{id:"9",name:"Oil Pump"},{id:"10",name:"PM DC Motor"},{id:"11",name:"Cobra Single Phase Aluminum"},{id:"12",name:"Stainless Steel"},{id:"13",name:"IEEE 841"},{id:"14",name:"Aerator"},{id:"16",name:"(GX3) Three Phase Aluminum"},{id:"17",name:"Three Phase Cast Iron"},{id:"18",name:"Three Phase Open Enclosure"},{id:"19",name:"Metric IEC"},{id:"20",name:"Cobra"},{id:"22",name:"Constant Velocity Fan Kit"},{id:"25",name:"Mobile Apps"},{id:"27",name:"Inventory by Location"}],form:{id:this.$route.params.id?this.$route.params.id:0,motorgroup_id:"",framesize_id:"",horsepower_id:"",speed_id:"",voltage_id:"",price:"",multiplier_code:"",mounting:"",motor_name:"",slug:"",category_ids:"",other_selections:[],image_2d_drwaing:void 0,image_url_2d_drawing:"",image_3d_drwaing:void 0,image_url_3d_drawing:"",image_data_sheet:void 0,image_url_datasheet:""},errors:{motorgroup_id:[],framesize_id:[],horsepower_id:[],speed_id:[],voltage_id:[],price:[],multiplier_code:[],mounting:[],motor_name:[],category_ids:[],is_active:[]},bread:[{text:"Dashboard",to:{name:"auth.dashboard"},disabled:!1,exact:!0},{text:"Product",to:{name:"auth.products.listing"},disabled:!1,exact:!0}],loading:!1,btnloading:!1,rules:{required:function(e){return!!e||"Required."}}}}};const p=(0,r(1900).Z)(m,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"elevation-10"},[r("v-breadcrumbs",{attrs:{items:e.bread},scopedSlots:e._u([{key:"divider",fn:function(){return[r("v-icon",[e._v("mdi-forward")])]},proxy:!0}])}),e._v(" "),r("v-row",{staticClass:"pa-10 rounded",attrs:{"no-gutters":""}},[r("v-col",{attrs:{cols:"12",sm:"12"}},[r("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:e.loading,callback:function(t){e.loading=t},expression:"loading"}},[r("v-row",[r("v-col",{staticClass:"pb-0",attrs:{cols:"6",sm:"6"}},[r("v-text-field",{attrs:{rules:[e.rules.required],"error-messages":e.errors.motor_name,label:"Motor Name"},model:{value:e.form.motor_name,callback:function(t){e.$set(e.form,"motor_name",t)},expression:"form.motor_name"}})],1),e._v(" "),r("v-col",{staticClass:"pb-0",attrs:{cols:"6",sm:"6"}},[r("v-text-field",{attrs:{rules:[e.rules.required],"error-messages":e.errors.slug,label:"Slug"},model:{value:e.form.slug,callback:function(t){e.$set(e.form,"slug",t)},expression:"form.slug"}})],1),e._v(" "),r("v-col",{staticClass:"pb-0",attrs:{cols:"6",sm:"6"}},[r("v-autocomplete",{attrs:{density:"compact","item-text":"name","item-value":"id",label:"Select Categories","hide-details":"",items:e.categories,multiple:"",rules:[e.rules.required]},model:{value:e.form.other_selections,callback:function(t){e.$set(e.form,"other_selections",t)},expression:"form.other_selections"}})],1),e._v(" "),r("v-col",{staticClass:"pb-0",attrs:{cols:"6",sm:"6"}},[r("v-select",{attrs:{items:e.dropdownClasses.product.MotorGroup,"item-text":"value","item-value":"id",label:"Select Motor",required:""},model:{value:e.form.motorgroup_id,callback:function(t){e.$set(e.form,"motorgroup_id",t)},expression:"form.motorgroup_id"}})],1),e._v(" "),r("v-col",{staticClass:"pb-0",attrs:{cols:"6",sm:"6"}},[r("v-select",{attrs:{items:e.dropdownClasses.product.FrameSize,"item-text":"value","item-value":"id",label:"Select FrameSize",required:"",rules:[e.rules.required]},model:{value:e.form.framesize_id,callback:function(t){e.$set(e.form,"framesize_id",t)},expression:"form.framesize_id"}})],1),e._v(" "),r("v-col",{staticClass:"pb-0",attrs:{cols:"6",sm:"6"}},[r("v-select",{attrs:{items:e.dropdownClasses.product.HorsePower,"item-text":"value","item-value":"id",label:"Select HorsePower",required:"",rules:[e.rules.required]},model:{value:e.form.horsepower_id,callback:function(t){e.$set(e.form,"horsepower_id",t)},expression:"form.horsepower_id"}})],1),e._v(" "),r("v-col",{staticClass:"pb-0",attrs:{cols:"6",sm:"6"}},[r("v-select",{attrs:{items:e.dropdownClasses.product.Speed,"item-text":"value","item-value":"id",label:"Select Speed",required:"",rules:[e.rules.required]},model:{value:e.form.speed_id,callback:function(t){e.$set(e.form,"speed_id",t)},expression:"form.speed_id"}})],1),e._v(" "),r("v-col",{staticClass:"pb-0",attrs:{cols:"6",sm:"6"}},[r("v-select",{attrs:{items:e.dropdownClasses.product.Voltage,"item-text":"value","item-value":"id",label:"Select Voltage",required:"",rules:[e.rules.required]},model:{value:e.form.voltage_id,callback:function(t){e.$set(e.form,"voltage_id",t)},expression:"form.voltage_id"}})],1),e._v(" "),r("v-col",{staticClass:"pb-0",attrs:{cols:"6",sm:"6"}},[r("v-text-field",{attrs:{rules:[e.rules.required],"error-messages":e.errors.price,label:"Price"},model:{value:e.form.price,callback:function(t){e.$set(e.form,"price",t)},expression:"form.price"}})],1),e._v(" "),r("v-col",{staticClass:"pb-0",attrs:{cols:"6",sm:"6"}},[r("v-text-field",{attrs:{"error-messages":e.errors.multiplier_code,label:"Multiplier Code"},model:{value:e.form.multiplier_code,callback:function(t){e.$set(e.form,"multiplier_code",t)},expression:"form.multiplier_code"}})],1),e._v(" "),r("v-col",{staticClass:"pb-0",attrs:{cols:"6",sm:"6"}},[r("v-text-field",{attrs:{"error-messages":e.errors.mounting,label:"Mounting"},model:{value:e.form.mounting,callback:function(t){e.$set(e.form,"mounting",t)},expression:"form.mounting"}})],1),e._v(" "),r("v-col",{staticClass:"pb-0",attrs:{cols:"12",cm:"12"}},[r("v-file-input",{attrs:{"error-messages":e.errors.image_2d_drwaing,label:"2d Drawing"},model:{value:e.form.image_2d_drwaing,callback:function(t){e.$set(e.form,"image_2d_drwaing",t)},expression:"form.image_2d_drwaing"}})],1),e._v(" "),e.form.id>0&&e.form.image_url_2d_drawing?r("v-col",{staticClass:"pb-0",attrs:{cols:"12"}},[r("v-btn",{staticClass:"mb-2",attrs:{href:e.form.image_url_2d_drawing,target:"_blank",color:"primary"}},[e._v("\n                            View\n                        ")])],1):e._e(),e._v(" "),r("v-col",{staticClass:"pb-0",attrs:{cols:"12",cm:"12"}},[r("v-file-input",{attrs:{accept:"image/*","error-messages":e.errors.image_3d_drwaing,label:"3d Drawing"},model:{value:e.form.image_3d_drwaing,callback:function(t){e.$set(e.form,"image_3d_drwaing",t)},expression:"form.image_3d_drwaing"}})],1),e._v(" "),e.form.id>0&&e.form.image_url_3d_drawing?r("v-col",{staticClass:"pb-0",attrs:{cols:"12"}},[r("v-btn",{staticClass:"mb-2",attrs:{href:e.form.image_url_3d_drawing,target:"_blank",color:"primary"}},[e._v("\n                            View\n                        ")])],1):e._e(),e._v(" "),r("v-col",{staticClass:"pb-0",attrs:{cols:"12",cm:"12"}},[r("v-file-input",{attrs:{accept:"image/*","error-messages":e.errors.image_data_sheet,label:"Data Sheet"},model:{value:e.form.image_data_sheet,callback:function(t){e.$set(e.form,"image_data_sheet",t)},expression:"form.image_data_sheet"}})],1),e._v(" "),e.form.id>0&&e.form.image_url_datasheet?r("v-col",{staticClass:"pb-0",attrs:{cols:"12"}},[r("v-btn",{staticClass:"mb-2",attrs:{href:e.form.image_url_datasheet,target:"_blank",color:"primary"}},[e._v("\n                            View\n                        ")])],1):e._e(),e._v(" "),r("v-col",{staticClass:"pb-0",attrs:{cols:"12",sm:"12"}},[r("v-btn",{attrs:{color:"secondary",elevation:"1",large:"",raised:"",loading:e.btnloading,disabled:e.btnloading},on:{click:e.addpermission}},[e._v(e._s(e.form.id>0?"Update":"Add"))])],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null).exports}}]);