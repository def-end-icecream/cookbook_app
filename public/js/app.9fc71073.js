(function(e){function t(t){for(var r,n,o=t[0],c=t[1],l=t[2],u=0,d=[];u<o.length;u++)n=o[u],Object.prototype.hasOwnProperty.call(i,n)&&i[n]&&d.push(i[n][0]),i[n]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);p&&p(t);while(d.length)d.shift()();return a.push.apply(a,l||[]),s()}function s(){for(var e,t=0;t<a.length;t++){for(var s=a[t],r=!0,o=1;o<s.length;o++){var c=s[o];0!==i[c]&&(r=!1)}r&&(a.splice(t--,1),e=n(n.s=s[0]))}return e}var r={},i={app:0},a=[];function n(t){if(r[t])return r[t].exports;var s=r[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=e,n.c=r,n.d=function(e,t,s){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(s,r,function(t){return e[t]}.bind(null,r));return s},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var p=c;a.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"278b":function(e,t,s){"use strict";s("8ac4")},4678:function(e,t,s){var r={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function i(e){var t=a(e);return s(t)}function a(e){if(!s.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}i.keys=function(){return Object.keys(r)},i.resolve=a,e.exports=i,i.id="4678"},"56d7":function(e,t,s){"use strict";s.r(t);s("e260"),s("e6cf"),s("cca6"),s("a79d");var r=s("2b0e"),i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[s("header",{attrs:{id:"fh5co-header",role:"banner"}},[s("div",{staticClass:"container"},[s("div",{staticClass:"header-inner"},[s("h1",[s("router-link",{attrs:{to:"/"}},[e._v("Cookbook")])],1),s("nav",{attrs:{role:"navigation"}},[s("ul",[s("li",[s("router-link",{attrs:{to:"/recipes"}},[e._v("Recipes")])],1),s("li",[s("router-link",{attrs:{to:"/recipes/new"}},[e._v("New Recipe")])],1),s("li",[e.loggedIn()?s("router-link",{attrs:{to:"/logout"}},[e._v("Logout")]):e._e()],1),s("li",[e.loggedIn()?e._e():s("router-link",{attrs:{to:"/login"}},[e._v("Login")])],1),s("li",{staticClass:"cta"},[e.loggedIn()?e._e():s("router-link",{attrs:{to:"/signup"}},[e._v("Signup")])],1)])])])])]),e.flashMessage?s("div",[e._v(" "+e._s(e.flashMessage)+" "),s("button",{on:{click:function(t){e.flashMessage=""}}},[e._v("Close")])]):e._e(),s("div",{staticClass:"container"},[s("router-view")],1),e._m(0)])},a=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("footer",{attrs:{id:"fh5co-footer",role:"contentinfo"}},[s("div",{staticClass:"container"},[s("div",{staticClass:"col-md-3 col-sm-12 col-sm-push-0 col-xs-12 col-xs-push-0"},[s("h3",[e._v("About Us")]),s("p",[e._v(" Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. ")]),s("p",[s("a",{staticClass:"btn btn-primary btn-outline with-arrow btn-sm",attrs:{href:"#"}},[e._v("Join Us "),s("i",{staticClass:"icon-arrow-right"})])])]),s("div",{staticClass:"col-md-6 col-md-push-1 col-sm-12 col-sm-push-0 col-xs-12 col-xs-push-0"},[s("h3",[e._v("Our Services")]),s("ul",{staticClass:"float"},[s("li",[s("a",{attrs:{href:"#"}},[e._v("Web Design")])]),s("li",[s("a",{attrs:{href:"#"}},[e._v("Branding & Identity")])]),s("li",[s("a",{attrs:{href:"#"}},[e._v("Free HTML5")])]),s("li",[s("a",{attrs:{href:"#"}},[e._v("HandCrafted Templates")])])]),s("ul",{staticClass:"float"},[s("li",[s("a",{attrs:{href:"#"}},[e._v("Free Bootstrap Template")])]),s("li",[s("a",{attrs:{href:"#"}},[e._v("Free HTML5 Template")])]),s("li",[s("a",{attrs:{href:"#"}},[e._v("Free HTML5 & CSS3 Template")])]),s("li",[s("a",{attrs:{href:"#"}},[e._v("HandCrafted Templates")])])])]),s("div",{staticClass:"col-md-2 col-md-push-1 col-sm-12 col-sm-push-0 col-xs-12 col-xs-push-0"},[s("h3",[e._v("Follow Us")]),s("ul",{staticClass:"fh5co-social"},[s("li",[s("a",{attrs:{href:"#"}},[s("i",{staticClass:"icon-twitter"})])]),s("li",[s("a",{attrs:{href:"#"}},[s("i",{staticClass:"icon-facebook"})])]),s("li",[s("a",{attrs:{href:"#"}},[s("i",{staticClass:"icon-google-plus"})])]),s("li",[s("a",{attrs:{href:"#"}},[s("i",{staticClass:"icon-instagram"})])])])])])])}],n={data:function(){return{flashMessage:""}},methods:{loggedIn:function(){return!!localStorage.jwt},getUserId:function(){return localStorage.user_id}}},o=n,c=s("2877"),l=Object(c["a"])(o,i,a,!1,null,null,null),p=l.exports,u=s("8c4f"),d=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"home"},[s("h1",[e._v("New Recipe")]),s("div",[e._l(e.createErrors,(function(t){return s("p",[e._v(e._s(t))])})),e._v(" Title: "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.newRecipeTitle,expression:"newRecipeTitle"}],attrs:{type:"text"},domProps:{value:e.newRecipeTitle},on:{input:function(t){t.target.composing||(e.newRecipeTitle=t.target.value)}}}),e._v(" "),s("br"),e._v(" Ingredients: "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.newRecipeIngredients,expression:"newRecipeIngredients"}],attrs:{type:"text"},domProps:{value:e.newRecipeIngredients},on:{input:function(t){t.target.composing||(e.newRecipeIngredients=t.target.value)}}}),s("br"),e._v(" Directions: "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.newRecipeDirections,expression:"newRecipeDirections"}],attrs:{type:"text"},domProps:{value:e.newRecipeDirections},on:{input:function(t){t.target.composing||(e.newRecipeDirections=t.target.value)}}}),s("br"),e._v(" Prep Time: "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.newRecipePrepTime,expression:"newRecipePrepTime"}],attrs:{type:"text"},domProps:{value:e.newRecipePrepTime},on:{input:function(t){t.target.composing||(e.newRecipePrepTime=t.target.value)}}}),s("br"),e._v(" Image Url: "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.newRecipeImageUrl,expression:"newRecipeImageUrl"}],attrs:{type:"text"},domProps:{value:e.newRecipeImageUrl},on:{input:function(t){t.target.composing||(e.newRecipeImageUrl=t.target.value)}}}),s("br"),s("button",{on:{click:function(t){return e.createRecipe()}}},[e._v("Create")])],2),s("h1",[e._v("All Recipes")]),e._v(" Current Recipe: "+e._s(e.currentRecipe)+" "),e._l(e.recipes,(function(t){return s("div",{key:t.id},[s("h2",[e._v("Title: "+e._s(t.title))]),s("img",{attrs:{src:t.image_url,alt:""}}),s("p",[e._v("Ingredients: "+e._s(t.ingredients))]),s("p",[e._v("Directions: "+e._s(t.directions))]),s("p",[e._v("Prep Time: "+e._s(t.prep_time))]),s("button",{on:{click:function(s){return e.showRecipe(t)}}},[e._v("More Info")])])})),s("dialog",[s("form",{attrs:{method:"dialog"}},[s("h2",[e._v("Recipe Info")]),s("img",{attrs:{src:e.currentRecipe.image_url,alt:""}}),s("p",[e._v("Title: "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.currentRecipe.title,expression:"currentRecipe.title"}],attrs:{type:"text"},domProps:{value:e.currentRecipe.title},on:{input:function(t){t.target.composing||e.$set(e.currentRecipe,"title",t.target.value)}}})]),s("p",[e._v(" Ingredients: "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.currentRecipe.ingredients,expression:"currentRecipe.ingredients"}],attrs:{type:"text"},domProps:{value:e.currentRecipe.ingredients},on:{input:function(t){t.target.composing||e.$set(e.currentRecipe,"ingredients",t.target.value)}}})]),s("p",[e._v(" Directions: "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.currentRecipe.directions,expression:"currentRecipe.directions"}],attrs:{type:"text"},domProps:{value:e.currentRecipe.directions},on:{input:function(t){t.target.composing||e.$set(e.currentRecipe,"directions",t.target.value)}}})]),s("p",[e._v(" Prep Time: "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.currentRecipe.prep_time,expression:"currentRecipe.prep_time"}],attrs:{type:"text"},domProps:{value:e.currentRecipe.prep_time},on:{input:function(t){t.target.composing||e.$set(e.currentRecipe,"prep_time",t.target.value)}}})]),s("button",{on:{click:function(t){return e.updateRecipe({currentRecipe:e.currentRecipe})}}},[e._v("Update")]),s("button",{on:{click:function(t){return e.destroyRecipe(e.currentRecipe)}}},[e._v("Destroy")]),s("button",[e._v("Close")])])])],2)},m=[],f=(s("c975"),s("a434"),s("bc3a")),v=s.n(f),g={data:function(){return{recipes:[],newRecipeTitle:"",newRecipeIngredients:"",newRecipeDirections:"",newRecipePrepTime:"",newRecipeImageUrl:"",currentRecipe:{},createErrors:[]}},created:function(){this.indexRecipes()},methods:{indexRecipes:function(){var e=this;v.a.get("/api/recipes").then((function(t){console.log(t.data),e.recipes=t.data}))},createRecipe:function(){var e=this,t={title:this.newRecipeTitle,ingredients:this.newRecipeIngredients,directions:this.newRecipeDirections,prep_time:this.newRecipePrepTime,image_url:this.newRecipeImageUrl};v.a.post("/api/recipes",t).then((function(t){console.log(t.data),e.recipes.push(t.data)})).catch((function(t){console.log(t.response.data.errors),e.createErrors=t.response.data.errors}))},showRecipe:function(e){console.log(e),this.currentRecipe=e,document.querySelector("dialog").showModal()},updateRecipe:function(e){var t={title:e.title,ingredients:e.ingredients,directions:e.directions,prep_time:e.prep_time,image_url:e.image_url};v.a.patch("/api/recipes/".concat(e.id),t).then((function(e){console.log("Success",e.data)})).catch((function(e){console.log("Error",e.response.data)}))},destroyRecipe:function(e){var t=this;v.a.delete("/api/recipes/".concat(e.id)).then((function(s){console.log("Success",s.data);var r=t.recipes.indexOf(e);t.recipes.splice(r,1)}))}}},h=g,b=(s("cccb"),Object(c["a"])(h,d,m,!1,null,null,null)),_=b.exports,j=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},w=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"test"},[s("h1",[e._v("This is a test page")])])}],C={},y=Object(c["a"])(C,j,w,!1,null,null,null),x=y.exports,R=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"signup"},[s("form",{on:{submit:function(t){return t.preventDefault(),e.submit()}}},[s("h1",[e._v("Signup")]),s("ul",e._l(e.errors,(function(t){return s("li",{key:t,staticClass:"text-danger"},[e._v(" "+e._s(t)+" ")])})),0),s("div",{staticClass:"form-group"},[s("label",[e._v("Name:")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}}),s("small",{class:{"red-text":e.name.length>30}},[e._v(e._s(30-e.name.length)+" characters remaining")])]),s("div",{staticClass:"form-group"},[s("label",[e._v("Email:")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],staticClass:"form-control",attrs:{type:"email"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}})]),s("div",{staticClass:"form-group"},[s("label",[e._v("Password:")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"form-control",attrs:{type:"password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}}),e.password.length>0&&e.password.length<6?s("small",{staticClass:"red-text"},[e._v("Must be at least 6 characters")]):e._e(),e.password.length>20?s("small",{staticClass:"red-text"},[e._v("Password cannot exceed 20 characters")]):e._e()]),s("div",{staticClass:"form-group"},[s("label",[e._v("Password confirmation:")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.passwordConfirmation,expression:"passwordConfirmation"}],staticClass:"form-control",attrs:{type:"password"},domProps:{value:e.passwordConfirmation},on:{input:function(t){t.target.composing||(e.passwordConfirmation=t.target.value)}}}),e.passwordConfirmation!==e.password?s("small",{staticClass:"red-text"},[e._v("Must match password")]):e._e()]),s("input",{staticClass:"btn btn-primary",attrs:{type:"submit",value:"Submit"}})])])},k=[],P=(s("b0c0"),{data:function(){return{name:"",email:"",password:"",passwordConfirmation:"",errors:[]}},methods:{submit:function(){var e=this,t={name:this.name,email:this.email,password:this.password,password_confirmation:this.passwordConfirmation};v.a.post("/api/users",t).then((function(t){console.log(t.data),e.$parent.flashMessage="You signed up, good job!",e.$router.push("/login")})).catch((function(t){e.errors=t.response.data.errors}))}}}),T=P,I=(s("278b"),Object(c["a"])(T,R,k,!1,null,"7d8239f0",null)),$=I.exports,N=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"login"},[s("form",{on:{submit:function(t){return t.preventDefault(),e.submit()}}},[s("h1",[e._v("Login")]),s("ul",e._l(e.errors,(function(t){return s("li",{key:t,staticClass:"text-danger"},[e._v(" "+e._s(t)+" ")])})),0),s("div",{staticClass:"form-group"},[s("label",[e._v("Email:")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],staticClass:"form-control",attrs:{type:"email"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}})]),s("div",{staticClass:"form-group"},[s("label",[e._v("Password:")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"form-control",attrs:{type:"password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}})]),s("input",{staticClass:"btn btn-primary",attrs:{type:"submit",value:"Submit"}})])])},z=[],O={data:function(){return{email:"",password:"",errors:[]}},methods:{submit:function(){var e=this,t={email:this.email,password:this.password};v.a.post("/api/sessions",t).then((function(t){v.a.defaults.headers.common["Authorization"]="Bearer "+t.data.jwt,localStorage.setItem("jwt",t.data.jwt),localStorage.setItem("user_id",t.data.user_id),e.$parent.flashMessage="You logged in, good job!",e.$router.push("/")})).catch((function(t){console.log(t.response),e.errors=["Invalid email or password."],e.email="",e.password=""}))}}},D=O,E=Object(c["a"])(D,N,z,!1,null,null,null),S=E.exports,M=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"logout"})},U=[],F={created:function(){delete v.a.defaults.headers.common["Authorization"],localStorage.removeItem("jwt"),localStorage.removeItem("user_id"),this.$router.push("/")}},L=F,A=Object(c["a"])(L,M,U,!1,null,null,null),B=A.exports,H=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"recipes-index"},[s("datalist",{attrs:{id:"titles"}},e._l(e.recipes,(function(t){return s("option",{key:t.title},[e._v(e._s(t.title))])})),0),s("div",{staticClass:"fh5co-light-grey-section",attrs:{id:"fh5co-blog-section"}},[s("div",{staticClass:"container"},[e._m(0),s("div",{staticClass:"row"},[e._l(e.orderBy(e.filterBy(e.recipes,e.filter),e.sortAttribute),(function(t){return s("div",{key:t.id,staticClass:"col-md-6 col-sm-6"},[s("router-link",{staticClass:"item-grid",attrs:{to:"/recipes/"+t.id}},[s("div",{staticClass:"image",style:"background-image: url("+t.image_url+")"}),s("div",{staticClass:"v-align"},[s("div",{staticClass:"v-align-middle"},[s("h3",{staticClass:"title"},[e._v(e._s(t.title))]),s("h5",{staticClass:"date"},[s("span",[e._v("Created "+e._s(e.relativeDate(t.created_at)))])])])])])],1)})),e._m(1)],2)])])])},q=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-6 col-md-offset-3 text-center fh5co-heading"},[s("h2",[e._v("Browse Recipes")]),s("p",[e._v(" They are so delicious! ")])])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"col-md-12 text-center animate-box"},[s("p",[s("a",{staticClass:"btn btn-primary with-arrow",attrs:{href:"#"}},[e._v("View More Post "),s("i",{staticClass:"icon-arrow-right"})])])])}],J=s("c1df"),Y=s.n(J),V=s("a7c6"),W=s.n(V),X={mixins:[W.a.mixin],data:function(){return{recipes:[],filter:"",sortAttribute:"title"}},created:function(){var e=this;v.a.get("/api/recipes").then((function(t){console.log(t.data),e.recipes=t.data}))},methods:{relativeDate:function(e){return Y()(e).fromNow()}}},G=X,K=Object(c["a"])(G,H,q,!1,null,null,null),Q=K.exports,Z=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"recipes-new"},[e.$parent.loggedIn()?e._e():s("p",[e._v("You are not logged in!")]),s("form",{on:{submit:function(t){return t.preventDefault(),e.createRecipe()}}},[s("h1",[e._v("New Recipe")]),e.status?s("img",{attrs:{src:"https://http.cat/"+e.status,alt:""}}):e._e(),s("ul",e._l(e.errors,(function(t){return s("li",{key:t,staticClass:"text-danger"},[e._v(" "+e._s(t)+" ")])})),0),s("div",{staticClass:"form-group"},[s("label",[e._v("Title:")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.title,expression:"title"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.title},on:{input:function(t){t.target.composing||(e.title=t.target.value)}}})]),s("div",{staticClass:"form-group"},[s("label",[e._v("Ingredients:")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.ingredients,expression:"ingredients"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.ingredients},on:{input:function(t){t.target.composing||(e.ingredients=t.target.value)}}})]),s("div",{staticClass:"form-group"},[s("label",[e._v("Directions:")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.directions,expression:"directions"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.directions},on:{input:function(t){t.target.composing||(e.directions=t.target.value)}}})]),s("div",{staticClass:"form-group"},[s("label",[e._v("Prep Time:")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.prepTime,expression:"prepTime"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.prepTime},on:{input:function(t){t.target.composing||(e.prepTime=t.target.value)}}})]),s("div",{staticClass:"form-group"},[s("label",[e._v("Image Url:")]),s("input",{ref:"fileInput",staticClass:"form-control",attrs:{type:"file"},on:{change:function(t){return e.setFile(t)}}})]),s("input",{staticClass:"btn btn-primary",attrs:{type:"submit",value:"Create"}})])])},ee=[],te={data:function(){return{title:"",ingredients:"",directions:"",prepTime:"",imageFile:"",errors:[],status:""}},methods:{setFile:function(e){e.target.files.length>0&&(this.imageFile=e.target.files[0])},createRecipe:function(){var e=this,t=new FormData;t.append("title",this.title),t.append("ingredients",this.ingredients),t.append("directions",this.directions),t.append("prep_time",this.prepTime),t.append("image_file",this.imageFile),v.a.post("/api/recipes",t).then((function(t){console.log(t.data),e.$parent.flashMessage="Recipe successfully created, good job!",e.$router.push("/recipes")})).catch((function(t){e.status=t.response.status,e.errors=t.response.data.errors}))}}},se=te,re=Object(c["a"])(se,Z,ee,!1,null,null,null),ie=re.exports,ae=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"recipes-show"},[s("h1",[e._v(e._s(e.recipe.title))]),s("img",{attrs:{src:e.recipe.image_url,alt:""}}),s("p",[e._v("Ingredients: "+e._s(e.recipe.ingredients))]),s("p",[e._v("Directions: "+e._s(e.recipe.directions))]),s("p",[e._v("Prep Time: "+e._s(e.recipe.prep_time))]),e.recipe.owner?s("div",[s("router-link",{attrs:{to:"/recipes/"+e.recipe.id+"/edit"}},[s("button",[e._v("Edit")])]),s("button",{on:{click:function(t){return e.destroyRecipe()}}},[e._v("Destroy")])],1):e._e(),s("p",[e._v("User who made recipe: "+e._s(e.recipe.user_id))]),s("p",[e._v("User logged in: "+e._s(e.$parent.getUserId()))])])},ne=[],oe={data:function(){return{recipe:{}}},created:function(){var e=this;v.a.get("/api/recipes/".concat(this.$route.params.id)).then((function(t){e.recipe=t.data,console.log(e.recipe)}))},methods:{destroyRecipe:function(){var e=this;confirm("Are you sure you want to delete this recipe?")&&v.a.delete("/api/recipes/".concat(this.recipe.id)).then((function(t){console.log(t.data),e.$router.push("/recipes")}))}}},ce=oe,le=Object(c["a"])(ce,ae,ne,!1,null,null,null),pe=le.exports,ue=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"recipes-edit"},[s("form",{on:{submit:function(t){return t.preventDefault(),e.updateRecipe()}}},[s("h1",[e._v("Edit Recipe")]),s("ul",e._l(e.errors,(function(t){return s("li",{key:t,staticClass:"text-danger"},[e._v(" "+e._s(t)+" ")])})),0),s("div",{staticClass:"form-group"},[s("label",[e._v("Title:")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.recipe.title,expression:"recipe.title"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.recipe.title},on:{input:function(t){t.target.composing||e.$set(e.recipe,"title",t.target.value)}}})]),s("div",{staticClass:"form-group"},[s("label",[e._v("Ingredients:")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.recipe.ingredients,expression:"recipe.ingredients"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.recipe.ingredients},on:{input:function(t){t.target.composing||e.$set(e.recipe,"ingredients",t.target.value)}}})]),s("div",{staticClass:"form-group"},[s("label",[e._v("Directions:")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.recipe.directions,expression:"recipe.directions"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.recipe.directions},on:{input:function(t){t.target.composing||e.$set(e.recipe,"directions",t.target.value)}}})]),s("div",{staticClass:"form-group"},[s("label",[e._v("Prep Time:")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.recipe.prep_time,expression:"recipe.prep_time"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.recipe.prep_time},on:{input:function(t){t.target.composing||e.$set(e.recipe,"prep_time",t.target.value)}}})]),s("div",{staticClass:"form-group"},[s("label",[e._v("Image Url:")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.recipe.image_url,expression:"recipe.image_url"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.recipe.image_url},on:{input:function(t){t.target.composing||e.$set(e.recipe,"image_url",t.target.value)}}})]),s("input",{staticClass:"btn btn-primary",attrs:{type:"submit",value:"Update"}})])])},de=[],me={data:function(){return{recipe:{},errors:[]}},created:function(){var e=this;v.a.get("/api/recipes/".concat(this.$route.params.id)).then((function(t){e.recipe=t.data,console.log(e.recipe)}))},methods:{updateRecipe:function(){var e=this,t={title:this.recipe.title,ingredients:this.recipe.ingredients,directions:this.recipe.directions,prep_time:this.recipe.prep_time,image_url:this.recipe.image_url};v.a.patch("/api/recipes/".concat(this.recipe.id),t).then((function(t){console.log(t.data),e.$router.push("/recipes/".concat(e.recipe.id))})).catch((function(t){e.errors=t.response.data.errors}))}}},fe=me,ve=Object(c["a"])(fe,ue,de,!1,null,null,null),ge=ve.exports;r["a"].use(u["a"]);var he=[{path:"/",name:"home",component:_},{path:"/test",name:"test",component:x},{path:"/signup",name:"signup",component:$},{path:"/login",name:"login",component:S},{path:"/logout",name:"logout",component:B},{path:"/recipes",name:"recipes-index",component:Q},{path:"/recipes/new",name:"recipes-new",component:ie},{path:"/recipes/:id",name:"recipes-show",component:pe},{path:"/recipes/:id/edit",name:"recipes-edit",component:ge}],be=new u["a"]({mode:"history",base:"/",routes:he}),_e=be;v.a.defaults.headers.common["X-Requested-With"]="XMLHttpRequest",v.a.defaults.baseURL="/";var je=localStorage.getItem("jwt");je&&(v.a.defaults.headers.common["Authorization"]="Bearer "+je),r["a"].config.productionTip=!1,new r["a"]({router:_e,render:function(e){return e(p)}}).$mount("#app")},"5ced":function(e,t,s){},"8ac4":function(e,t,s){},cccb:function(e,t,s){"use strict";s("5ced")}});
//# sourceMappingURL=app.9fc71073.js.map