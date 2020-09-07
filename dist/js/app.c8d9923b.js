(function(t){function e(e){for(var o,i,r=e[0],l=e[1],s=e[2],d=0,u=[];d<r.length;d++)i=r[d],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&u.push(n[i][0]),n[i]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(t[o]=l[o]);p&&p(e);while(u.length)u.shift()();return c.push.apply(c,s||[]),a()}function a(){for(var t,e=0;e<c.length;e++){for(var a=c[e],o=!0,i=1;i<a.length;i++){var l=a[i];0!==n[l]&&(o=!1)}o&&(c.splice(e--,1),t=r(r.s=a[0]))}return t}var o={},n={app:0},c=[];function i(t){return r.p+"js/"+({about:"about"}[t]||t)+"."+{about:"f439837c"}[t]+".js"}function r(e){if(o[e])return o[e].exports;var a=o[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.e=function(t){var e=[],a=n[t];if(0!==a)if(a)e.push(a[2]);else{var o=new Promise((function(e,o){a=n[t]=[e,o]}));e.push(a[2]=o);var c,l=document.createElement("script");l.charset="utf-8",l.timeout=120,r.nc&&l.setAttribute("nonce",r.nc),l.src=i(t);var s=new Error;c=function(e){l.onerror=l.onload=null,clearTimeout(d);var a=n[t];if(0!==a){if(a){var o=e&&("load"===e.type?"missing":e.type),c=e&&e.target&&e.target.src;s.message="Loading chunk "+t+" failed.\n("+o+": "+c+")",s.name="ChunkLoadError",s.type=o,s.request=c,a[1](s)}n[t]=void 0}};var d=setTimeout((function(){c({type:"timeout",target:l})}),12e4);l.onerror=l.onload=c,document.head.appendChild(l)}return Promise.all(e)},r.m=t,r.c=o,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(a,o,function(e){return t[e]}.bind(null,o));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/",r.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=e,l=l.slice();for(var d=0;d<l.length;d++)e(l[d]);var p=s;c.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},1595:function(t,e,a){"use strict";(function(t){a("d3b7"),a("25f0");e["a"]={name:"Contact",props:["contact"],data:function(){return{id:this.contact._id,imageUrl:""}},methods:{},components:{},created:function(){var e=this;this.$http.get("/".concat(this.contact.profilePicture),{responseType:"arraybuffer"}).then((function(a){e.imageUrl="data:image/png;base64, "+t.from(a.data).toString("base64")})).catch((function(t){return console.log(t)}))}}}).call(this,a("b639").Buffer)},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var o=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},c=[],i={name:"App",components:{},data:function(){return{}}},r=i,l=a("2877"),s=Object(l["a"])(r,n,c,!1,null,null,null),d=s.exports,p=(a("45fc"),a("d3b7"),a("8c4f")),u=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",{attrs:{id:"inspire"}},[a("v-navigation-drawer",{attrs:{clipped:t.$vuetify.breakpoint.lgAndUp,app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[a("v-list",{attrs:{dense:""}},[a("v-list-item-title",[t._v(" "+t._s(t.user.name)+" ")])],1),a("v-list",{attrs:{dense:""}},[a("v-list-item-title",[t._v(" "+t._s(t.user.email)+" ")])],1)],1),a("v-app-bar",{attrs:{"clipped-left":t.$vuetify.breakpoint.lgAndUp,app:"",color:"blue darken-3",dark:""}},[a("v-app-bar-nav-icon",{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),a("v-toolbar-title",{staticClass:"ml-0 pl-4",staticStyle:{width:"300px"}},[a("span",{staticClass:"hidden-sm-and-down"},[t._v("Google Contacts")])]),a("v-text-field",{attrs:{flat:"","solo-inverted":"","hide-details":"","prepend-inner-icon":"mdi-magnify",label:"Search"},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}}),a("v-spacer"),a("v-btn",{attrs:{text:""},on:{click:t.logOut}},[a("v-icon",[t._v(" mdi-logout ")]),a("span",[t._v("Log Out")])],1)],1),a("v-main",[a("v-container",{attrs:{fluid:""}},[a("v-row",{attrs:{align:"center",justify:"center"}},[a("add-contact",{on:{"add-contact":t.addContact}}),a("contacts",{attrs:{contacts:t.filteredContacts}})],1)],1)],1)],1)},m=[],v=(a("99af"),a("4de4"),a("ac1f"),a("466d"),a("841c"),a("2909")),f=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-btn",{attrs:{bottom:"",color:"pink",dark:"",fab:"",fixed:"",right:""},on:{click:function(e){t.dialog=!t.dialog}}},[a("v-icon",[t._v("mdi-plus")])],1),a("v-dialog",{attrs:{width:"800px"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",[a("v-card-title",{staticClass:"grey darken-2"},[t._v(" Create contact ")]),a("v-container",[a("v-row",{staticClass:"mx-2 text-center"},[t.imageSelected?a("v-col",{attrs:{cols:"12"}},[a("v-col",{},[a("v-avatar",{staticClass:"mx-3",attrs:{size:"100px"}},[a("img",{attrs:{src:t.imageUrl,alt:""},on:{click:t.onImagePick}})])],1)],1):a("v-col",{attrs:{cols:"12"}},[a("v-col",{},[a("v-avatar",{staticClass:"mx-3",attrs:{size:"100px"}},[a("v-btn",{attrs:{icon:""},on:{click:t.onImagePick}},[a("v-icon",{attrs:{size:"100px"}},[t._v(" mdi-camera ")])],1)],1)],1)],1),a("input",{ref:"profilePicture",staticStyle:{display:"none"},attrs:{type:"file",accept:"image/*"},on:{change:t.onImagePicked}}),a("v-col",{staticClass:"align-center justify-space-between",attrs:{cols:"12"}},[a("v-row",{staticClass:"mr-0",attrs:{align:"center"}},[a("v-avatar",{staticClass:"mx-3",attrs:{size:"40px"}},[a("img",{attrs:{src:"//ssl.gstatic.com/s2/oz/images/sge/grey_silhouette.png",alt:""}})]),a("v-text-field",{attrs:{placeholder:"Full Name"},model:{value:t.fullName,callback:function(e){t.fullName=e},expression:"fullName"}})],1)],1),a("v-col",{attrs:{cols:"6"}},[a("v-text-field",{attrs:{"prepend-icon":"mdi-account-card-details-outline",placeholder:"Company"},model:{value:t.company,callback:function(e){t.company=e},expression:"company"}})],1),a("v-col",{attrs:{cols:"6"}},[a("v-text-field",{attrs:{placeholder:"Job title"},model:{value:t.jobTitle,callback:function(e){t.jobTitle=e},expression:"jobTitle"}})],1),a("v-col",{attrs:{cols:"12"}},[a("v-text-field",{attrs:{"prepend-icon":"mdi-mail",placeholder:"Email"},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1),a("v-col",{attrs:{cols:"12"}},[a("v-text-field",{attrs:{type:"tel","prepend-icon":"mdi-phone",placeholder:"(000) 000 - 0000"},model:{value:t.phone,callback:function(e){t.phone=e},expression:"phone"}})],1),a("v-col",{attrs:{cols:"12"}},[a("v-text-field",{attrs:{"prepend-icon":"mdi-text",placeholder:"Notes"},model:{value:t.notes,callback:function(e){t.notes=e},expression:"notes"}})],1)],1)],1),a("v-card-actions",[a("v-btn",{attrs:{text:"",color:"primary"}},[t._v("More")]),a("v-spacer"),a("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(e){t.dialog=!1}}},[t._v("Cancel")]),a("v-btn",{attrs:{text:""},on:{click:t.addContact}},[t._v("Save")])],1)],1)],1)],1)},h=[],g={name:"AddContact",data:function(){return{imageSelected:!1,dialog:!1,imageUrl:"",profilePicture:"",fullName:"",company:"",jobTitle:"",email:"",phone:"",notes:""}},methods:{addContact:function(t){t.preventDefault(),this.dialog=!1;var e={profilePicture:this.profilePicture,fullName:this.fullName,company:this.company,jobTitle:this.jobTitle,email:this.email,phone:this.phone,notes:this.notes};this.$emit("add-contact",e),this.fullName="",this.email="",this.company="",this.jobTitle="",this.phone="",this.notes=""},onImagePick:function(){this.$refs.profilePicture.click()},onImagePicked:function(t){var e=this;console.log(t);var a=t.target.files,o=new FileReader;o.addEventListener("load",(function(){e.imageUrl=o.result})),o.readAsDataURL(a[0]),this.profilePicture=a[0],console.log(this.profilePicture),this.imageSelected=!0}}},b=g,x=a("6544"),w=a.n(x),k=a("7496"),_=a("8212"),y=a("8336"),C=a("b0af"),V=a("99d9"),j=a("62ad"),P=a("a523"),T=a("169a"),$=a("132d"),S=a("0fd9"),D=a("2fa4"),A=a("8654"),I=Object(l["a"])(b,f,h,!1,null,"5693e194",null),O=I.exports;w()(I,{VApp:k["a"],VAvatar:_["a"],VBtn:y["a"],VCard:C["a"],VCardActions:V["a"],VCardTitle:V["c"],VCol:j["a"],VContainer:P["a"],VDialog:T["a"],VIcon:$["a"],VRow:S["a"],VSpacer:D["a"],VTextField:A["a"]});var N=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",t._l(t.contacts,(function(t){return a("h3",{key:t.id},[a("contact",{attrs:{contact:t}})],1)})),0)},L=[],E=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-card",{staticStyle:{margin:"10px"},attrs:{"min-width":"50vw","min-height":"15vh",to:{name:"Details",params:{id:t.id}},color:"silver"}},[a("v-list",[a("v-list-item",[a("v-list-item-avatar",[a("v-img",{attrs:{src:t.imageUrl}})],1),a("v-list-item-content",[a("v-list-item-title",[t._v(" "+t._s(t.contact.fullName)+" ")])],1)],1)],1)],1)],1)},U=[],R=a("1595"),B=R["a"],z=a("adda"),F=a("8860"),M=a("da13"),J=a("8270"),q=a("5d23"),G=Object(l["a"])(B,E,U,!1,null,null,null),H=G.exports;w()(G,{VCard:C["a"],VImg:z["a"],VList:F["a"],VListItem:M["a"],VListItemAvatar:J["a"],VListItemContent:q["a"],VListItemTitle:q["b"]});var K={name:"Contacts",props:["contacts"],components:{Contact:H}},Q=K,W=Object(l["a"])(Q,N,L,!1,null,null,null),X=W.exports,Y=a("48ac"),Z=a.n(Y),tt={props:{source:String},components:{AddContact:O,Contacts:X},data:function(){return{drawer:null,items:[],contacts:[],token:"",user:{},search:""}},computed:{filteredContacts:function(){var t=this;return this.contacts.filter((function(e){return e.fullName.toLowerCase().match(t.search.toLowerCase())}))}},methods:{getUserDetails:function(){this.token=localStorage.getItem("jwt");var t=Z.a.decode(this.token);this.user=t},addContact:function(t){var e=this,a=t.profilePicture,o=t.fullName,n=t.company,c=t.jobTitle,i=t.email,r=t.phone,l=t.notes,s=new FormData;s.append("profilePicture",a),s.append("fullName",o),s.append("company",n),s.append("jobTitle",c),s.append("email",i),s.append("phone",r),s.append("notes",l),s.append("creatorId",this.user._id),this.$http.post("/contacts",s,{headers:{Authorization:"Bearer ".concat(this.token)}}).then((function(t){return e.contacts=[].concat(Object(v["a"])(e.contacts),[t.data.data])})).catch((function(t){return console.log(t)}))},logOut:function(){localStorage.removeItem("jwt"),this.$router.push("/")}},created:function(){var t=this;this.getUserDetails(),this.$http.get("/contacts",{headers:{Authorization:"Bearer ".concat(this.token)}}).then((function(e){for(var a in e.data.data)e.data.data[a].creatorId===t.user._id&&(t.contacts=[].concat(Object(v["a"])(t.contacts),[e.data.data[a]]))})).catch((function(t){return console.log(t)}))}},et=tt,at=a("40dc"),ot=a("5bc1"),nt=a("f6c4"),ct=a("f774"),it=a("2a7f"),rt=Object(l["a"])(et,u,m,!1,null,null,null),lt=rt.exports;w()(rt,{VApp:k["a"],VAppBar:at["a"],VAppBarNavIcon:ot["a"],VBtn:y["a"],VContainer:P["a"],VIcon:$["a"],VList:F["a"],VListItemTitle:q["b"],VMain:nt["a"],VNavigationDrawer:ct["a"],VRow:S["a"],VSpacer:D["a"],VTextField:A["a"],VToolbarTitle:it["a"]});var st=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("contact-detail")],1)},dt=[],pt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-main",[a("v-container",{staticClass:"grey lighten-5",attrs:{fluid:""}},[a("v-row",{staticClass:"text-center"},[a("v-col",{attrs:{cols:"12"}},[a("v-btn",{attrs:{icon:"",left:"",fixed:""},on:{click:function(e){return t.$router.push("/contacts")}}},[a("v-icon",[t._v("mdi-arrow-left")])],1)],1),a("v-col",{attrs:{cols:"12"}},[a("v-avatar",{attrs:{height:"250",width:"250"}},[a("v-img",{attrs:{src:t.imageUrl}})],1)],1),a("v-col",{staticClass:"mb-4"},[a("h1",{staticClass:"display-2 font-weight-bold mb-3"},[t._v(" "+t._s(t.contact.fullName)+" ")])]),a("v-col",{staticClass:"mb-5",attrs:{cols:"12"}},[a("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v(" "+t._s(t.contact.company)+" ")]),a("v-row",{attrs:{justify:"center"}},[t._v(" "+t._s(t.contact.jobTitle)+" ")])],1),a("v-col",{staticClass:"mb-5",attrs:{cols:"12"}},[a("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v(" "+t._s(t.contact.email)+" ")])]),a("v-col",{staticClass:"mb-5",attrs:{cols:"12"}},[a("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v(" "+t._s(t.contact.phone)+" ")])]),a("v-col",{staticClass:"mb-5",attrs:{cols:"12"}},[a("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v(" "+t._s(t.contact.notes)+" ")])])],1)],1)],1),a("v-bottom-navigation",{attrs:{grow:"",color:"teal"}},[a("v-btn",[a("span",[t._v("Share")]),a("v-icon",{attrs:{color:"black"}},[t._v("mdi-share")])],1),a("edit-dialog",{attrs:{contact:t.contact,imageUrl:t.imageUrl},on:{"edit-contact":t.editContact}}),a("delete-dialog",{attrs:{contact:t.contact,token:t.token}})],1)],1)},ut=[],mt=a("a6d2"),vt=mt["a"],ft=a("b81c"),ht=Object(l["a"])(vt,pt,ut,!1,null,null,null),gt=ht.exports;w()(ht,{VApp:k["a"],VAvatar:_["a"],VBottomNavigation:ft["a"],VBtn:y["a"],VCol:j["a"],VContainer:P["a"],VIcon:$["a"],VImg:z["a"],VMain:nt["a"],VRow:S["a"]});var bt={name:"Details",components:{ContactDetail:gt}},xt=bt,wt=Object(l["a"])(xt,st,dt,!1,null,null,null),kt=wt.exports,_t=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("login")],1)},yt=[],Ct=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",{attrs:{id:"inspire"}},[a("v-main",[a("v-container",{staticClass:"fill-height",attrs:{fluid:""}},[a("v-row",{attrs:{align:"center",justify:"center"}},[a("v-col",{attrs:{cols:"12",sm:"8",md:"4"}},[a("v-card",{staticClass:"elevation-12"},[a("v-toolbar",{attrs:{color:"primary",dark:"",flat:""}},[a("v-toolbar-title",[t._v("Contact app")])],1),a("v-card-text",[a("v-form",[a("v-text-field",{attrs:{label:"Login",name:"login","prepend-icon":"mdi-email",type:"text"},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),a("v-text-field",{attrs:{id:"password",label:"Password",name:"password","prepend-icon":"mdi-lock",type:"password"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1)],1),a("v-btn",{attrs:{text:""},on:{click:t.goToRegister}},[t._v(" register ")]),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"primary"},on:{click:t.Login}},[t._v("Login")])],1)],1)],1)],1)],1)],1)],1)},Vt=[],jt={props:{source:String},data:function(){return{email:"",password:""}},methods:{Login:function(t){var e=this;t.preventDefault(),this.$http.post("/user/login",{email:this.email,password:this.password}).then((function(t){var a=t.data.token;localStorage.setItem("jwt",a),a?e.$router.push("/contacts"):e.$router.push("/")})).catch((function(t){return console.log(t)}))},goToRegister:function(){this.$router.push("/register")}}},Pt=jt,Tt=a("4bd4"),$t=a("71d9"),St=Object(l["a"])(Pt,Ct,Vt,!1,null,null,null),Dt=St.exports;w()(St,{VApp:k["a"],VBtn:y["a"],VCard:C["a"],VCardActions:V["a"],VCardText:V["b"],VCol:j["a"],VContainer:P["a"],VForm:Tt["a"],VMain:nt["a"],VRow:S["a"],VSpacer:D["a"],VTextField:A["a"],VToolbar:$t["a"],VToolbarTitle:it["a"]});var At={components:{Login:Dt}},It=At,Ot=Object(l["a"])(It,_t,yt,!1,null,null,null),Nt=Ot.exports,Lt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("register")],1)},Et=[],Ut=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",{attrs:{id:"inspire"}},[a("v-main",[a("v-container",{staticClass:"fill-height",attrs:{fluid:""}},[a("v-row",{attrs:{align:"center",justify:"center"}},[a("v-col",{attrs:{cols:"12",sm:"8",md:"4"}},[a("v-card",{staticClass:"elevation-12"},[a("v-toolbar",{attrs:{color:"primary",dark:"",flat:""}},[a("v-toolbar-title",[t._v("Register")])],1),a("v-card-text",[a("v-form",[a("v-text-field",{attrs:{label:"Name",name:"name","prepend-icon":"mdi-account ",type:"text"},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),a("v-text-field",{attrs:{label:"Email",name:"email","prepend-icon":"mdi-email",type:"text"},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),a("v-text-field",{attrs:{id:"password",label:"Password",name:"password","prepend-icon":"mdi-lock",type:"password"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),a("v-text-field",{attrs:{id:"confirmPassword",label:"Confirm Password",name:"confirm password","prepend-icon":"mdi-lock",type:"password",rules:[t.comparePasswords]},model:{value:t.confirmPassword,callback:function(e){t.confirmPassword=e},expression:"confirmPassword"}})],1)],1),a("v-btn",{attrs:{text:""},on:{click:t.goToLogin}},[t._v(" Login ")]),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"primary"},on:{click:t.Register}},[t._v("Register")])],1)],1)],1)],1)],1)],1)],1)},Rt=[],Bt=(a("b0c0"),{props:{source:String},data:function(){return{name:"",email:"",password:"",confirmPassword:""}},computed:{comparePasswords:function(){return this.password!==this.confirmPassword?"Password do not match":""}},methods:{Register:function(t){t.preventDefault(),this.$http.post("/user/signup",{name:this.name,email:this.email,password:this.password}).then((function(t){return console.log(t)})).catch((function(t){return console.log(t)}))},goToLogin:function(){this.$router.push("/")}}}),zt=Bt,Ft=Object(l["a"])(zt,Ut,Rt,!1,null,null,null),Mt=Ft.exports;w()(Ft,{VApp:k["a"],VBtn:y["a"],VCard:C["a"],VCardActions:V["a"],VCardText:V["b"],VCol:j["a"],VContainer:P["a"],VForm:Tt["a"],VMain:nt["a"],VRow:S["a"],VSpacer:D["a"],VTextField:A["a"],VToolbar:$t["a"],VToolbarTitle:it["a"]});var Jt={components:{Register:Mt}},qt=Jt,Gt=Object(l["a"])(qt,Lt,Et,!1,null,null,null),Ht=Gt.exports;o["a"].use(p["a"]);var Kt=[{path:"/contacts",name:"Home",component:lt,meta:{requiresAuth:!0}},{path:"/about",name:"About",component:function(){return a.e("about").then(a.bind(null,"f820"))}},{path:"/",name:"Login",component:Nt},{path:"/register",name:"Register",component:Ht},{path:"*",redirect:"/"},{path:"/contacts/:id",name:"Details",component:kt}],Qt=new p["a"]({base:"/",routes:Kt});Qt.beforeEach((function(t,e,a){t.matched.some((function(t){return t.meta.requiresAuth}))&&null==localStorage.getItem("jwt")?a({path:"/"}):a()}));var Wt=Qt,Xt=a("f309");o["a"].use(Xt["a"]);var Yt=new Xt["a"]({}),Zt=a("bc3a"),te=a.n(Zt),ee=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-dialog",{attrs:{width:"800px"},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[a("v-btn",t._g({on:{click:function(e){t.editDialog=!0}}},o),[a("span",[t._v("Edit")]),a("v-icon",{attrs:{color:"blue darken-3"}},[t._v("mdi-pencil")])],1)]}}]),model:{value:t.editDialog,callback:function(e){t.editDialog=e},expression:"editDialog"}},[a("v-card",[a("v-card-title",{staticClass:"grey darken-2"},[t._v(" Edit contact ")]),a("v-container",[a("v-row",{staticClass:"mx-2 text-center"},[t.imageSelected?a("v-col",[a("v-col",{},[a("v-avatar",{staticClass:"mx-3",attrs:{size:"100px"}},[a("img",{attrs:{src:t.imageUrl},on:{click:t.onImagePick}})])],1)],1):a("v-col",[a("v-col",{},[a("v-avatar",{staticClass:"mx-3",attrs:{size:"100px"}},[a("v-btn",{attrs:{icon:""},on:{click:t.onImagePick}},[a("v-icon",{attrs:{size:"100px"}},[t._v(" mdi-camera ")])],1)],1)],1)],1),a("input",{ref:"profilePicture",staticStyle:{display:"none"},attrs:{type:"file",accept:"image/*"},on:{change:t.onImagePicked}}),a("v-col",{staticClass:"align-center justify-space-between",attrs:{cols:"12"}},[a("v-row",{staticClass:"mr-0",attrs:{align:"center"}},[a("v-avatar",{staticClass:"mx-3",attrs:{size:"40px"}},[a("img",{attrs:{src:"//ssl.gstatic.com/s2/oz/images/sge/grey_silhouette.png",alt:""}})]),a("v-text-field",{attrs:{hey:""},model:{value:t.contact.fullName,callback:function(e){t.$set(t.contact,"fullName",e)},expression:"contact.fullName"}})],1)],1),a("v-col",{attrs:{cols:"6"}},[a("v-text-field",{attrs:{"prepend-icon":"mdi-account-card-details-outline","contact.company":""},model:{value:t.contact.company,callback:function(e){t.$set(t.contact,"company",e)},expression:"contact.company"}})],1),a("v-col",{attrs:{cols:"6"}},[a("v-text-field",{attrs:{placeholder:"Job title"},model:{value:t.contact.jobTitle,callback:function(e){t.$set(t.contact,"jobTitle",e)},expression:"contact.jobTitle"}})],1),a("v-col",{attrs:{cols:"12"}},[a("v-text-field",{attrs:{"prepend-icon":"mdi-mail",placeholder:"Email"},model:{value:t.contact.email,callback:function(e){t.$set(t.contact,"email",e)},expression:"contact.email"}})],1),a("v-col",{attrs:{cols:"12"}},[a("v-text-field",{attrs:{type:"tel","prepend-icon":"mdi-phone",placeholder:"(000) 000 - 0000"},model:{value:t.contact.phone,callback:function(e){t.$set(t.contact,"phone",e)},expression:"contact.phone"}})],1),a("v-col",{attrs:{cols:"12"}},[a("v-text-field",{attrs:{"prepend-icon":"mdi-text",placeholder:"Notes"},model:{value:t.contact.notes,callback:function(e){t.$set(t.contact,"notes",e)},expression:"contact.notes"}})],1)],1)],1),a("v-card-actions",[a("v-btn",{attrs:{text:"",color:"primary"}},[t._v("More")]),a("v-spacer"),a("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(e){t.editDialog=!1}}},[t._v("Cancel")]),a("v-btn",{attrs:{text:""},on:{click:t.editContact}},[t._v("Save")])],1)],1)],1)},ae=[],oe={props:["contact","imageUrl"],data:function(){return{editDialog:!1,imageSelected:!1}},methods:{editContact:function(t){t.preventDefault(),this.editDialog=!1;var e={_id:this.contact._id,profilePicture:this.contact.profilePicture,fullName:this.contact.fullName,company:this.contact.company,jobTitle:this.contact.jobTitle,email:this.contact.email,phone:this.contact.phone,notes:this.contact.notes};this.$emit("edit-contact",e)},onImagePick:function(){this.$refs.profilePicture.click()},onImagePicked:function(){var t=this,e=event.target.files,a=new FileReader;a.addEventListener("load",(function(){t.imageUrl=a.result})),a.readAsDataURL(e[0]),this.contact.profilePicture=e[0],console.log(this.profilePicture),this.imageSelected=!0}}},ne=oe,ce=Object(l["a"])(ne,ee,ae,!1,null,null,null),ie=ce.exports;w()(ce,{VAvatar:_["a"],VBtn:y["a"],VCard:C["a"],VCardActions:V["a"],VCardTitle:V["c"],VCol:j["a"],VContainer:P["a"],VDialog:T["a"],VIcon:$["a"],VRow:S["a"],VSpacer:D["a"],VTextField:A["a"]});var re=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-dialog",{attrs:{"max-width":"400px"},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[a("v-btn",t._g({on:{click:function(e){t.deleteDialog=!0}}},o),[a("span",[t._v("Delete")]),a("v-icon",{attrs:{color:"red"}},[t._v("mdi-delete")])],1)]}}]),model:{value:t.deleteDialog,callback:function(e){t.deleteDialog=e},expression:"deleteDialog"}},[a("v-card",[a("v-card-title",{staticClass:"headline"},[t._v("Are you sure you want to delete '"+t._s(t.contact.fullName)+"'?")]),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:function(e){t.deleteDialog=!1}}},[t._v(" Cancel ")]),a("v-btn",{attrs:{color:"red darken-1",text:""},on:{click:t.deleteContact}},[t._v(" Delete ")])],1)],1)],1)},le=[],se={props:["contact","token"],data:function(){return{deleteDialog:!1}},methods:{deleteContact:function(){var t=this;this.deleteDialog=!1,this.$http.delete("/contacts/".concat(this.contact._id),{headers:{Authorization:"Bearer ".concat(this.token)}}).then((function(e){console.log(e),t.$router.push("/contacts")})).catch((function(t){return console.log(t)}))}}},de=se,pe=Object(l["a"])(de,re,le,!1,null,null,null),ue=pe.exports;w()(pe,{VBtn:y["a"],VCard:C["a"],VCardActions:V["a"],VCardTitle:V["c"],VDialog:T["a"],VIcon:$["a"],VSpacer:D["a"]}),o["a"].component("delete-dialog",ue),o["a"].component("edit-dialog",ie);var me=te.a.create({baseURL:"https://yene-contacts.herokuapp.com/"});o["a"].prototype.$http=me,o["a"].config.productionTip=!1,new o["a"]({router:Wt,vuetify:Yt,render:function(t){return t(d)}}).$mount("#app")},a6d2:function(t,e,a){"use strict";(function(t){a("d3b7"),a("25f0");var o=a("48ac"),n=a.n(o);e["a"]={name:"Details",data:function(){return{id:this.$route.params.id,token:"",imageUrl:"",contact:{},user:{}}},watch:{$route:function(t){this.id=t.params.id}},methods:{editContact:function(t){var e=t._id,a=t.profilePicture,o=t.fullName,n=t.company,c=t.jobTitle,i=t.email,r=t.phone,l=t.notes,s=new FormData;s.append("_id",e),s.append("profilePicture",a),s.append("fullName",o),s.append("company",n),s.append("jobTitle",c),s.append("email",i),s.append("phone",r),s.append("notes",l),this.$http.patch("/contacts/".concat(this.id),s,{headers:{Authorization:"Bearer ".concat(this.token)}}).then((function(t){return console.log(t)})).catch((function(t){return console.log(t)})),console.log(e)},getToken:function(){this.token=localStorage.getItem("jwt");var t=n.a.decode(this.token);this.user=t},fetchImage:function(){var e=this;this.$http.get("/".concat(this.contact.profilePicture),{responseType:"arraybuffer"}).then((function(a){e.imageUrl="data:image/png;base64, "+t.from(a.data).toString("base64")})).catch((function(t){return console.log(t)})),console.log(this.imageUrl)}},components:{},created:function(){var t=this;this.getToken(),this.$http.get("/contacts/".concat(this.id),{headers:{Authorization:"Bearer ".concat(this.token)}}).then((function(e){t.contact=e.data.data,t.fetchImage()})).catch((function(t){return console.log(t)})),console.log(this.imageUrl),console.log(this.contact)}}}).call(this,a("b639").Buffer)}});
//# sourceMappingURL=app.c8d9923b.js.map