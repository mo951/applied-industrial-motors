"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[751],{1369:(t,e,r)=>{r.d(e,{Z:()=>c});var a=r(7757),s=r.n(a);function n(t,e,r,a,s,n,i){try{var o=t[n](i),l=o.value}catch(t){return void r(t)}o.done?e(l):Promise.resolve(l).then(a,s)}function i(t){return function(){var e=this,r=arguments;return new Promise((function(a,s){var i=t.apply(e,r);function o(t){n(i,a,s,o,l,"next",t)}function l(t){n(i,a,s,o,l,"throw",t)}o(void 0)}))}}function o(t,e){for(var r=0;r<e.length;r++){var a=e[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}var l=r(9669);const c=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.baseuri=e}var e,r,a,n,c,u;return e=t,r=[{key:"getlist",value:function(t){return l.get("/api/".concat(this.baseuri).concat(null!=t?t:"")).then((function(t){return t.data})).catch((function(t){return t}))}},{key:"create",value:(u=i(s().mark((function t(e){var r;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.post("/api/"+this.baseuri,e).then((function(t){return{status:1,data:t.data.data}})).catch((function(t){return{status:0,data:t.response.data.errors}}));case 2:return r=t.sent,t.abrupt("return",r);case 4:case"end":return t.stop()}}),t,this)}))),function(t){return u.apply(this,arguments)})},{key:"delete",value:function(t){t.query;var e=t.id;return l.delete("/api/".concat(this.baseuri,"/").concat(e))}},{key:"get",value:function(t){return l.get("/api/".concat(this.baseuri,"/").concat(t)).then((function(t){return t.data.data}))}},{key:"getProductData",value:function(t,e){return l.get("/api/".concat(this.baseuri,"/").concat(t,"/").concat(e)).then((function(t){return t.data})).catch((function(t){return t}))}},{key:"update",value:(c=i(s().mark((function t(e,r){var a;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.append("_method","put"),t.next=3,l.post("/api/"+this.baseuri+"/"+r,e).then((function(t){return{status:1,data:t.data.data}})).catch((function(t){return{status:0,data:t.response.data.errors}}));case 3:return a=t.sent,t.abrupt("return",a);case 5:case"end":return t.stop()}}),t,this)}))),function(t,e){return c.apply(this,arguments)})},{key:"getQrcode",value:(n=i(s().mark((function t(e){return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l({url:"/api/"+this.baseuri,method:"GET",responseType:"text/plain"}).then((function(t){return t.data}));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t,this)}))),function(t){return n.apply(this,arguments)})}],r&&o(e.prototype,r),a&&o(e,a),Object.defineProperty(e,"prototype",{writable:!1}),t}()},6573:(t,e,r)=>{function a(t,e){for(var r=0;r<e.length;r++){var a=e[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}r.d(e,{Z:()=>n});var s=r(9669);const n=new(function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}var e,r,n;return e=t,(r=[{key:"get",value:function(t){return s.get("/api/".concat(t)).then((function(t){return t})).catch((function(t){return t}))}},{key:"post",value:function(t,e){return s.post("/api/".concat(t),e).then((function(t){return t})).catch((function(t){return t}))}}])&&a(e.prototype,r),n&&a(e,n),Object.defineProperty(e,"prototype",{writable:!1}),t}())},4751:(t,e,r)=>{r.r(e),r.d(e,{default:()=>m});var a=r(7757),s=r.n(a),n=r(1369),i=r(6573);function o(t){return function(t){if(Array.isArray(t))return l(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return l(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return l(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,a=new Array(e);r<e;r++)a[r]=t[r];return a}function c(t,e,r,a,s,n,i){try{var o=t[n](i),l=o.value}catch(t){return void r(t)}o.done?e(l):Promise.resolve(l).then(a,s)}function u(t){return function(){var e=this,r=arguments;return new Promise((function(a,s){var n=t.apply(e,r);function i(t){c(n,a,s,i,o,"next",t)}function o(t){c(n,a,s,i,o,"throw",t)}i(void 0)}))}}var d=new n.Z("custom-products");var p;const v={name:"auth.customproducts.add",watch:{},mounted:function(){var t=this;return u(s().mark((function e(){var r,a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("categories-parents").then((function(t){return t.data.data}));case 2:return r=e.sent,e.next=5,i.Z.get("clipart-categories").then((function(t){return t.data.data}));case 5:return t.clipartsData=e.sent,e.next=8,i.Z.get("products?type=2").then((function(t){return t.data.data}));case 8:if(t.upsellProductsNormal=e.sent,t.categories=o(r),!t.$route.params.id){e.next=22;break}return e.next=13,d.get(t.form.id);case 13:a=e.sent,t.initialCategory=a.category_id?a.category_id:0,t.form={name:a.name?a.name:"",slug:a.slug?a.slug:"",price:a.price?a.price:"",category_id:[a.category_id?a.category_id:0],image_url:a.image_url,is_active:1==a.is_active,id:t.$route.params.id,upsell_products:[]},a.upsell_products&&(t.form.upsell_products=JSON.parse(a.upsell_products)),t.qtyDiscounts=a.qty_discounts?JSON.parse(a.qty_discounts):[],t.customizer=JSON.parse(a.canvas_data_selection),t.bread.push({text:"Edit",to:{name:"auth.customproducts.edit",params:{id:t.$route.params.id}},disabled:!1,exact:!0}),e.next=23;break;case 22:t.bread.push({text:"Add",to:{name:"auth.customproducts.add"},disabled:!1,exact:!0});case 23:case"end":return e.stop()}}),e)})))()},methods:{resetError:function(){this.errors={name:[],slug:[],price:[],is_active:[],image:[],category_id:[]}},addpermission:(p=u(s().mark((function t(){var e,r;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(this.resetError(),!this.$refs.form.validate()){t.next=24;break}if(this.btnloading=!0,(e=new FormData).append("name",this.form.name),e.append("slug",this.form.slug),e.append("price",this.form.price),e.append("category_id",this.form.category_id[0]),e.append("canvas_data_selection",JSON.stringify(this.customizer)),e.append("is_active",1==this.form.is_active?1:0),e.append("qty_discounts",JSON.stringify(this.qtyDiscounts)),e.append("upsell_products",JSON.stringify(this.form.upsell_products)),this.form.image&&e.append("image",this.form.image),this.btnloading=!1,!(this.form.id>0)){t.next=20;break}return t.next=17,d.update(e,this.form.id);case 17:r=t.sent,t.next=23;break;case 20:return t.next=22,d.create(e);case 22:r=t.sent;case 23:r.status?this.$router.push({name:"auth.customproducts.listing"}):(r.data.name&&(this.errors.name=r.data.name),r.data.slug&&(this.errors.slug=r.data.slug),r.data.price&&(this.errors.price=r.data.price),r.data.category_id&&(this.errors.category_id=r.data.category_id),r.data.is_active&&(this.errors.is_active=r.data.is_active),r.data.image&&(this.errors.image=r.data.image));case 24:case"end":return t.stop()}}),t,this)}))),function(){return p.apply(this,arguments)}),updateValudCategory:function(t){this.form.category_id=t},deleteLayer:function(t){this.customizer.layers.splice(t,1)},deleteBg:function(t){this.customizer.backgrounds.splice(t,1)},addBg:function(){var t=this.customizer.layers.map((function(t){return{id:t.id,color:""}}));this.customizer.backgrounds.push({image_url:"",label_image_url:"",label:"",colorOptions:t})},addTextBox:function(){this.ranId--;var t=(new Date).getTime();this.customizer.layers.push({id:"layer"+this.ranId+t,type:"textbox",label:"",order:this.customizer.layers.length+1,position:{x:0,y:0},length:{height:0,width:0}}),this.adjustBgColors()},addClipArt:function(){this.ranId--;var t=(new Date).getTime();this.customizer.layers.push({id:"layer"+this.ranId+t,type:"clipart",label:"",clipArtCategory:0,clipArt:0,order:this.customizer.layers.length+1,position:{x:0,y:0},length:{height:0,width:0}}),this.adjustBgColors()},adjustBgColors:function(){for(var t=0;t<this.customizer.backgrounds.length;t++){var e=this.customizer.layers.map((function(t){return{id:t.id,color:"#000000"}}));this.customizer.backgrounds[t].colorOptions=e}},uploadFile:function(t,e,r){return u(s().mark((function a(){var n,o;return s().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(!t){a.next=7;break}return(n=new FormData).append("file",t),a.next=5,i.Z.post("custom/upload-image",n).then((function(t){return t.data}));case 5:o=a.sent,e[r]=o.url;case 7:case"end":return a.stop()}}),a)})))()},addQtyDiscount:function(){this.qtyDiscounts.push({qty:0,discountPercent:0})},removeQtyDiscount:function(t){this.qtyDiscounts.splice(t,1)}},computed:{user:function(){return this.$store.getters.loggedInUser}},data:function(){return{upsellProductsNormal:[],qtyDiscounts:[],clipartsData:[],ranId:99999,customizer:{size:{width:0,height:0},backgrounds:[],layers:[]},initialCategory:0,categories:[],form:{id:this.$route.params.id?this.$route.params.id:0,name:"",slug:"",price:0,category_id:[0],image_url:"",is_active:!0,image:void 0,upsell_products:[]},errors:{name:[],slug:[],price:[],image:[],is_active:[],category_id:[]},bread:[{text:"Dashboard",to:{name:"auth.dashboard"},disabled:!1,exact:!0},{text:"Custom Product",to:{name:"auth.customproducts.listing"},disabled:!1,exact:!0}],loading:!1,btnloading:!1,rules:{required:function(t){return!!t||"Required."}}}}};const m=(0,r(1900).Z)(v,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-breadcrumbs",{attrs:{items:t.bread},scopedSlots:t._u([{key:"divider",fn:function(){return[r("v-icon",[t._v("mdi-forward")])]},proxy:!0}])}),t._v(" "),r("v-row",{staticClass:"pa-10 rounded elevation-10",attrs:{"no-gutters":""}},[r("v-col",{attrs:{cols:"12",sm:"12"}},[r("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},[r("v-row",[r("v-col",{staticClass:"pb-0",attrs:{cols:"6",sm:"6"}},[r("v-text-field",{attrs:{"error-messages":t.errors.name,label:"Name"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),t._v(" "),r("v-col",{staticClass:"pb-0",attrs:{cols:"3",sm:"3"}},[r("v-text-field",{attrs:{rules:[t.rules.required],"error-messages":t.errors.slug,label:"Slug"},model:{value:t.form.slug,callback:function(e){t.$set(t.form,"slug",e)},expression:"form.slug"}})],1),t._v(" "),r("v-col",{staticClass:"pb-0",attrs:{cols:"3",sm:"3"}},[r("v-text-field",{attrs:{rules:[t.rules.required],"error-messages":t.errors.price,label:"Price $"},model:{value:t.form.price,callback:function(e){t.$set(t.form,"price",e)},expression:"form.price"}})],1),t._v(" "),r("v-col",{staticClass:"pb-0",attrs:{cols:"12",sm:"12"}},[r("v-select",{attrs:{items:t.upsellProductsNormal,label:"Upsell Products",multiple:"","item-text":"product_name","item-value":"id",hint:"Select products you need to show to customers for Upsell","persistent-hint":""},model:{value:t.form.upsell_products,callback:function(e){t.$set(t.form,"upsell_products",e)},expression:"form.upsell_products"}})],1),t._v(" "),r("v-col",{staticClass:"pb-0",attrs:{cols:"6",sm:"6"}},[r("h3",[t._v("Select Category")]),t._v(" "),t.errors.category_id.length>0?r("v-alert",{attrs:{outlined:"",type:"error"}},[t._v("\n                        "+t._s(t.errors.category_id[0])+"\n                        ")]):t._e(),t._v(" "),r("v-treeview",{attrs:{hoverable:"",shaped:"",activatable:"",color:"red",items:t.categories,active:t.form.category_id},on:{"update:active":t.updateValudCategory}})],1),t._v(" "),r("v-col",{staticClass:"pb-0",attrs:{cols:"12",sm:"12"}},[r("v-checkbox",{attrs:{label:"Published?"},model:{value:t.form.is_active,callback:function(e){t.$set(t.form,"is_active",e)},expression:"form.is_active"}})],1),t._v(" "),r("v-col",{staticClass:"pb-0",attrs:{cols:"12",cm:"12"}},[r("v-file-input",{attrs:{accept:"image/*","error-messages":t.errors.image,label:"Image"},model:{value:t.form.image,callback:function(e){t.$set(t.form,"image",e)},expression:"form.image"}})],1),t._v(" "),t.form.id>0&&t.form.image_url?r("v-col",{staticClass:"pb-0",attrs:{cols:"12",cm:"12"}},[r("v-avatar",[r("v-img",{attrs:{"lazy-src":t.form.image_url,"max-height":"150","max-width":"250",src:t.form.image_url}})],1)],1):t._e(),t._v(" "),r("v-col",{staticClass:"pb-0",attrs:{cols:"12",cm:"12"}},[r("h4",[t._v("Build Customizer")])]),t._v(" "),r("v-col",{staticClass:"pb-0",attrs:{cols:"6",cm:"6"}},[r("v-text-field",{attrs:{label:"Canvas Width",type:"number"},model:{value:t.customizer.size.width,callback:function(e){t.$set(t.customizer.size,"width",e)},expression:"customizer.size.width"}})],1),t._v(" "),r("v-col",{staticClass:"pb-0",attrs:{cols:"6",cm:"6"}},[r("v-text-field",{attrs:{label:"Canvas Height",type:"number"},model:{value:t.customizer.size.height,callback:function(e){t.$set(t.customizer.size,"height",e)},expression:"customizer.size.height"}})],1),t._v(" "),r("v-col",{staticClass:"pb-0",attrs:{cols:"12",cm:"12"}},[r("p",[t._v("Add TextBoxes "),r("v-btn",{attrs:{color:"success",fab:"","x-small":"",dark:""},on:{click:t.addTextBox}},[r("v-icon",[t._v("mdi-plus")])],1)],1)]),t._v(" "),t.customizer.layers.map((function(t){return"textbox"==t.type})).length>0?r("v-col",{staticClass:"pb-0",attrs:{cols:"12",cm:"12"}},[r("v-simple-table",{scopedSlots:t._u([{key:"default",fn:function(){return[r("thead",[r("tr",[r("th",{staticClass:"text-left"},[t._v("\n                                            Label\n                                        ")]),t._v(" "),r("th",{staticClass:"text-left"},[t._v("\n                                            Order\n                                        ")]),t._v(" "),r("th",{staticClass:"text-left"},[t._v("\n                                            X Position\n                                        ")]),t._v(" "),r("th",{staticClass:"text-left"},[t._v("\n                                            Y Position\n                                        ")]),t._v(" "),r("th",{staticClass:"text-left"},[t._v("\n                                            Height/Width\n                                        ")]),t._v(" "),r("th",{staticClass:"text-left"})])]),t._v(" "),r("tbody",t._l(t.customizer.layers,(function(e,a){return r("tr",{directives:[{name:"show",rawName:"v-show",value:"textbox"==e.type,expression:"layer.type=='textbox'"}],key:a},[r("td",[r("v-text-field",{attrs:{rules:[t.rules.required]},model:{value:e.label,callback:function(r){t.$set(e,"label",r)},expression:"layer.label"}})],1),t._v(" "),r("td",[r("v-text-field",{attrs:{type:"number"},model:{value:e.order,callback:function(r){t.$set(e,"order",r)},expression:"layer.order"}})],1),t._v(" "),r("td",[r("v-text-field",{attrs:{type:"number",step:"any"},model:{value:e.position.x,callback:function(r){t.$set(e.position,"x",r)},expression:"layer.position.x"}})],1),t._v(" "),r("td",[r("v-text-field",{attrs:{type:"number",step:"any"},model:{value:e.position.y,callback:function(r){t.$set(e.position,"y",r)},expression:"layer.position.y"}})],1),t._v(" "),r("td",[r("v-text-field",{attrs:{type:"number",label:"Height",step:"any"},model:{value:e.length.height,callback:function(r){t.$set(e.length,"height",r)},expression:"layer.length.height"}}),t._v(" "),r("v-text-field",{attrs:{type:"number",label:"Width",step:"any"},model:{value:e.length.width,callback:function(r){t.$set(e.length,"width",r)},expression:"layer.length.width"}})],1),t._v(" "),r("td",[r("v-btn",{attrs:{color:"error",fab:"","x-small":"",dark:""},on:{click:function(e){return t.deleteLayer(a)}}},[r("v-icon",[t._v("mdi-delete-outline")])],1)],1)])})),0)]},proxy:!0}],null,!1,2116722264)})],1):t._e(),t._v(" "),r("v-col",{staticClass:"pb-0",attrs:{cols:"12",cm:"12"}},[r("p",[t._v("Add ClipArt "),r("v-btn",{attrs:{color:"success",fab:"","x-small":"",dark:""},on:{click:t.addClipArt}},[r("v-icon",[t._v("mdi-plus")])],1)],1)]),t._v(" "),t.customizer.layers.map((function(t){return"clipart"==t.type})).length>0?r("v-col",{staticClass:"pb-0",attrs:{cols:"12",cm:"12"}},[r("v-simple-table",{scopedSlots:t._u([{key:"default",fn:function(){return[r("thead",[r("tr",[r("th",{staticClass:"text-left"},[t._v("\n                                            Label\n                                        ")]),t._v(" "),r("th",{staticClass:"text-left"},[t._v("\n                                            Order\n                                        ")]),t._v(" "),r("th",{staticClass:"text-left"},[t._v("\n                                            X/Y Position\n                                        ")]),t._v(" "),r("th",{staticClass:"text-left"},[t._v("\n                                            Height/Width\n                                        ")]),t._v(" "),r("th",{staticClass:"text-left"},[t._v("\n                                            Clip Art\n                                        ")]),t._v(" "),r("th",{staticClass:"text-left"})])]),t._v(" "),r("tbody",t._l(t.customizer.layers,(function(e,a){return"clipart"==e.type?r("tr",{key:a},[r("td",[r("v-text-field",{attrs:{rules:[t.rules.required]},model:{value:e.label,callback:function(r){t.$set(e,"label",r)},expression:"layer.label"}})],1),t._v(" "),r("td",[r("v-text-field",{attrs:{type:"number"},model:{value:e.order,callback:function(r){t.$set(e,"order",r)},expression:"layer.order"}})],1),t._v(" "),r("td",[r("v-text-field",{attrs:{type:"number",label:"X",step:"any"},model:{value:e.position.x,callback:function(r){t.$set(e.position,"x",r)},expression:"layer.position.x"}}),t._v(" "),r("v-text-field",{attrs:{type:"number",label:"Y",step:"any"},model:{value:e.position.y,callback:function(r){t.$set(e.position,"y",r)},expression:"layer.position.y"}})],1),t._v(" "),r("td",[r("v-text-field",{attrs:{type:"number",label:"Height",step:"any"},model:{value:e.length.height,callback:function(r){t.$set(e.length,"height",r)},expression:"layer.length.height"}}),t._v(" "),r("v-text-field",{attrs:{type:"number",label:"Width",step:"any"},model:{value:e.length.width,callback:function(r){t.$set(e.length,"width",r)},expression:"layer.length.width"}})],1),t._v(" "),r("td",[r("v-select",{attrs:{items:t.clipartsData,"item-text":"name","item-value":"id"},model:{value:e.clipArtCategory,callback:function(r){t.$set(e,"clipArtCategory",r)},expression:"layer.clipArtCategory"}}),t._v(" "),e.clipArtCategory>0?r("v-select",{attrs:{items:t.clipartsData.find((function(t){return t.id==e.clipArtCategory})).cliparts,"item-text":"name","item-value":"id"},model:{value:e.clipArt,callback:function(r){t.$set(e,"clipArt",r)},expression:"layer.clipArt"}}):t._e()],1),t._v(" "),r("td",[r("v-btn",{attrs:{color:"error",fab:"","x-small":"",dark:""},on:{click:function(e){return t.deleteLayer(a)}}},[r("v-icon",[t._v("mdi-delete-outline")])],1)],1)]):t._e()})),0)]},proxy:!0}],null,!1,1300779003)})],1):t._e(),t._v(" "),r("v-col",{staticClass:"pb-0",attrs:{cols:"12",cm:"12"}},[r("p",[t._v("Add Backgrounds "),r("v-btn",{attrs:{color:"success",fab:"","x-small":"",dark:""},on:{click:t.addBg}},[r("v-icon",[t._v("mdi-plus")])],1)],1),t._v(" "),r("v-alert",{attrs:{outlined:"",type:"info"}},[t._v("\n                        Add Backgrounds in end, so that you can update textboxes, arts color according to Background\n                        ")])],1),t._v(" "),t.customizer.backgrounds.length>0?r("v-col",{staticClass:"pb-0",attrs:{cols:"12",cm:"12"}},[r("v-simple-table",{scopedSlots:t._u([{key:"default",fn:function(){return[r("thead",[r("tr",[r("th",{staticClass:"text-left"},[t._v("\n                                            Label\n                                        ")]),t._v(" "),r("th",{staticClass:"text-left"},[t._v("\n                                            Label Image\n                                        ")]),t._v(" "),r("th",{staticClass:"text-left"},[t._v("\n                                            Background Image\n                                        ")]),t._v(" "),r("th",{staticClass:"text-left"},[t._v("\n                                            Layer Colors\n                                        ")]),t._v(" "),r("th",{staticClass:"text-left"})])]),t._v(" "),r("tbody",t._l(t.customizer.backgrounds,(function(e,a){return r("tr",{key:a},[r("td",[r("v-text-field",{attrs:{rules:[t.rules.required]},model:{value:e.label,callback:function(r){t.$set(e,"label",r)},expression:"layer.label"}})],1),t._v(" "),r("td",[r("v-file-input",{on:{change:function(r){return t.uploadFile(r,e,"label_image_url")}}}),t._v(" "),e.label_image_url?r("a",{attrs:{href:e.label_image_url,target:"_blank"}},[t._v("View Image")]):t._e()],1),t._v(" "),r("td",[r("v-file-input",{on:{change:function(r){return t.uploadFile(r,e,"image_url")}}}),t._v(" "),e.image_url?r("a",{attrs:{href:e.image_url,target:"_blank"}},[t._v("View Image")]):t._e()],1),t._v(" "),r("td",t._l(e.colorOptions,(function(e,a){return r("div",{key:a},[r("label",{staticClass:"d-block",attrs:{for:e.id}},[t._v(t._s(e.id))]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.color,expression:"colorOp.color"}],attrs:{type:"color",id:e.id},domProps:{value:e.color},on:{input:function(r){r.target.composing||t.$set(e,"color",r.target.value)}}})])})),0),t._v(" "),r("td",[r("v-btn",{attrs:{color:"error",fab:"","x-small":"",dark:""},on:{click:function(e){return t.deleteBg(a)}}},[r("v-icon",[t._v("mdi-delete-outline")])],1)],1)])})),0)]},proxy:!0}],null,!1,3129115898)})],1):t._e(),t._v(" "),r("v-col",{staticClass:"pb-0",attrs:{cols:"12",cm:"12"}},[r("p",[t._v("Add Quantity Discount "),r("v-btn",{attrs:{color:"success",fab:"","x-small":"",dark:""},on:{click:t.addQtyDiscount}},[r("v-icon",[t._v("mdi-plus")])],1)],1)]),t._v(" "),t.customizer.backgrounds.length>0?r("v-col",{staticClass:"pb-0",attrs:{cols:"12",cm:"12"}},[r("v-simple-table",{scopedSlots:t._u([{key:"default",fn:function(){return[r("thead",[r("tr",[r("th",{staticClass:"text-left"},[t._v("\n                                            Qty\n                                        ")]),t._v(" "),r("th",{staticClass:"text-left"},[t._v("\n                                            Discount %\n                                        ")]),t._v(" "),r("th",{staticClass:"text-left"})])]),t._v(" "),r("tbody",t._l(t.qtyDiscounts,(function(e,a){return r("tr",{key:a},[r("td",[r("v-text-field",{attrs:{type:"number",step:"any",rules:[t.rules.required]},model:{value:e.qty,callback:function(r){t.$set(e,"qty",r)},expression:"qtyDiscount.qty"}})],1),t._v(" "),r("td",[r("v-text-field",{attrs:{type:"number",step:"any",rules:[t.rules.required]},model:{value:e.discountPercent,callback:function(r){t.$set(e,"discountPercent",r)},expression:"qtyDiscount.discountPercent"}})],1),t._v(" "),r("td",[r("v-btn",{attrs:{color:"error",fab:"","x-small":"",dark:""},on:{click:function(e){return t.removeQtyDiscount(a)}}},[r("v-icon",[t._v("mdi-delete-outline")])],1)],1)])})),0)]},proxy:!0}],null,!1,998330569)})],1):t._e(),t._v(" "),r("v-col",{staticClass:"pb-0",attrs:{cols:"12",sm:"12"}},[r("v-btn",{attrs:{color:"secondary",elevation:"1",large:"",raised:"",loading:t.btnloading,disabled:t.btnloading},on:{click:t.addpermission}},[t._v(t._s(t.form.id>0?"Update":"Add"))])],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null).exports}}]);