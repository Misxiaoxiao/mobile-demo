(function(e){function t(t){for(var a,i,r=t[0],u=t[1],s=t[2],d=0,l=[];d<r.length;d++)i=r[d],c[i]&&l.push(c[i][0]),c[i]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(e[a]=u[a]);f&&f(t);while(l.length)l.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,i=1;i<n.length;i++){var r=n[i];0!==c[r]&&(a=!1)}a&&(o.splice(t--,1),e=u(u.s=n[0]))}return e}var a={},i={app:0},c={app:0},o=[];function r(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-22672ba1":"915730d7","chunk-1c4d11f8":"5f54139e","chunk-2d0baaed":"2872d1ec","chunk-6d7c69df":"769c563f","chunk-aa857c36":"dfa29613","chunk-ee8baf92":"cf12ea19","chunk-0ae39cf4":"74083f2c","chunk-4d2a6719":"9e9d2241","chunk-978b4b04":"15948d8c"}[e]+".js"}function u(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={"chunk-22672ba1":1,"chunk-1c4d11f8":1,"chunk-6d7c69df":1,"chunk-aa857c36":1,"chunk-ee8baf92":1,"chunk-0ae39cf4":1,"chunk-4d2a6719":1,"chunk-978b4b04":1};i[e]?t.push(i[e]):0!==i[e]&&n[e]&&t.push(i[e]=new Promise(function(t,n){for(var a="css/"+({}[e]||e)+"."+{"chunk-22672ba1":"c63bc51b","chunk-1c4d11f8":"2b740d1a","chunk-2d0baaed":"31d6cfe0","chunk-6d7c69df":"636b2241","chunk-aa857c36":"cfc9a7b1","chunk-ee8baf92":"6cb594fb","chunk-0ae39cf4":"094020bf","chunk-4d2a6719":"89e19cc4","chunk-978b4b04":"cca530a6"}[e]+".css",i=u.p+a,c=document.getElementsByTagName("link"),o=0;o<c.length;o++){var r=c[o],s=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(s===a||s===i))return t()}var d=document.getElementsByTagName("style");for(o=0;o<d.length;o++){r=d[o],s=r.getAttribute("data-href");if(s===a||s===i)return t()}var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=t,l.onerror=function(t){var a=t&&t.target&&t.target.src||i,c=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");c.request=a,n(c)},l.href=i;var f=document.getElementsByTagName("head")[0];f.appendChild(l)}).then(function(){i[e]=0}));var a=c[e];if(0!==a)if(a)t.push(a[2]);else{var o=new Promise(function(t,n){a=c[e]=[t,n]});t.push(a[2]=o);var s,d=document.getElementsByTagName("head")[0],l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=r(e),s=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=c[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src,o=new Error("Loading chunk "+e+" failed.\n("+a+": "+i+")");o.type=a,o.request=i,n[1](o)}c[e]=void 0}};var f=setTimeout(function(){s({type:"timeout",target:l})},12e4);l.onerror=l.onload=s,d.appendChild(l)}return Promise.all(t)},u.m=e,u.c=a,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)u.d(n,a,function(t){return e[t]}.bind(null,a));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/",u.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],d=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var f=d;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"3def":function(e,t,n){"use strict";n.d(t,"b",function(){return a}),n.d(t,"c",function(){return i}),n.d(t,"e",function(){return c}),n.d(t,"d",function(){return o}),n.d(t,"f",function(){return r}),n.d(t,"g",function(){return u}),n.d(t,"a",function(){return s});var a=["上海","北京","深圳","广州","杭州","南京","苏州","成都","武汉"],i=[{key:"f",value:"允许女生"},{key:"m",value:"允许男生"}],c=["室友合租","转租房源","业主出租","长租公寓"],o=[{value:"1500元以下",min:0,max:1500},{value:"1500-2500元",min:1500,max:2500},{value:"2500-4000元",min:2500,max:4e3},{value:"4000-6000元",min:4e3,max:6e3},{value:"6000-8000元",min:6e3,max:8e3},{value:"8000-10000元",min:8e3,max:1e4},{value:"10000元以上",min:1e4,max:0}],r=[{key:"整套",value:3},{key:"单间",value:1},{key:"床位",value:2},{key:"不限",value:""}],u={title:"zuber-白领租房平台，租房必备",link:window.location.href,desc:"推荐给大家一款良心应用，出门在外，租房必备。信息真实，租房有保障",imgUrl:"https://resources.zuber.im/mobile_share_logo.png"},s="http://a.app.qq.com/o/simple.jsp?pkgname=im.zuber.app"},"4c44":function(e,t,n){"use strict";var a=n("f0b8"),i=n.n(a);i.a},"7c55":function(e,t,n){"use strict";var a=n("d3dd"),i=n.n(a);i.a},cd22:function(e,t,n){},cd49:function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("097d");var a=n("2b0e"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("title",[e._v(e._s(e.$route.meta.title))]),n("router-view"),e.$route.name?n("init-app"):e._e()],1)},c=[],o=n("c665"),r=n("dc0a"),u=n("d328"),s=n("11d9"),d=n("9ab4"),l=n("60a3"),f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div")},h=[],m=(n("a481"),n("7f7f"),n("aa9a")),_=n("4bb5"),b=n("eb8e"),p=n("3def"),g=function(e){function t(){var e;return Object(o["a"])(this,t),e=Object(u["a"])(this,Object(s["a"])(t).apply(this,arguments)),e.ifWeixin=!1,e.deviceInfo="",e.shareInfo=p["g"],e}return Object(m["a"])(t,[{key:"created",value:function(){var e=new b["a"];this.ifWeixin=e.checkWeixin(),this.deviceInfo=e.getDevice("mobile")}},{key:"mounted",value:function(){this.deal()}},{key:"redirect",value:function(e){this.$route.name&&"home"!==this.$route.name?e&&e():this.$router.push({name:"room",query:{share:this.$route.query.share,shareUid:this.$route.query.shareUid}})}},{key:"login",value:function(){var e=this;this.getUserAuth({data:this.$route.query,success:function(){e.init(),e.redirect(function(){e.$router.replace({name:e.$route.name,params:e.$route.params,query:{share:e.$route.query.share,share_uid:e.$route.query.shareUid}})})}})}},{key:"reward",value:function(){this.ifLogged&&this.$route.query.share_uid&&this.getShareBonus({id:this.$route.query.shareUid})}},{key:"init",value:function(){this.ifLogged&&(this.sendDeviceInfo({info:this.deviceInfo}),this.getUserInfo(),this.reward())}},{key:"deal",value:function(){this.$route.query.state||this.$route.query.source?this.login():this.ifLogged?this.init():this.ifWeixin&&(window.location.href="http://www.zuber.im/weixin?"+(this.ifWeixin?"m=1&":"")+"goto="+encodeURIComponent(window.location.href.replace("http:","https:"))),this.redirect()}}]),Object(r["a"])(t,e),t}(l["c"]);d["a"]([Object(_["b"])(function(e){return e.AuthModule.ifLogged})],g.prototype,"ifLogged",void 0),d["a"]([Object(_["a"])("getUserAuth")],g.prototype,"getUserAuth",void 0),d["a"]([Object(_["a"])("getUserInfo")],g.prototype,"getUserInfo",void 0),d["a"]([Object(_["a"])("sendDeviceInfo")],g.prototype,"sendDeviceInfo",void 0),d["a"]([Object(_["a"])("getShareBonus")],g.prototype,"getShareBonus",void 0),g=d["a"]([l["a"]],g);var O=g,S=O,v=(n("4c44"),n("2877")),E=Object(v["a"])(S,f,h,!1,null,null,null);E.options.__file="init.vue";var j=E.exports,y=function(e){function t(){return Object(o["a"])(this,t),Object(u["a"])(this,Object(s["a"])(t).apply(this,arguments))}return Object(r["a"])(t,e),t}(l["c"]);y=d["a"]([Object(l["a"])({components:{InitApp:j}})],y);var I=y,A=I,w=(n("7c55"),Object(v["a"])(A,i,c,!1,null,null,null));w.options.__file="App.vue";var k=w.exports,T=n("8c4f");a["default"].use(T["a"]);var C,U,N,R,D,L,G,F=new T["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:function(){return n.e("chunk-2d0baaed").then(n.bind(null,"37f9"))},meta:{title:"zuber白领租房平台"}},{path:"/search/room",name:"room",component:function(){return Promise.all([n.e("chunk-ee8baf92"),n.e("chunk-978b4b04")]).then(n.bind(null,"efe3"))},meta:{title:"zuber白领租房平台"}},{path:"/search/demand",name:"demand",component:function(){return Promise.all([n.e("chunk-ee8baf92"),n.e("chunk-978b4b04")]).then(n.bind(null,"efe3"))},meta:{title:"zuber白领租房平台"}},{path:"/bed/:id",name:"bedDetail",component:function(){return Promise.all([n.e("chunk-22672ba1"),n.e("chunk-1c4d11f8")]).then(n.bind(null,"ce76"))},meta:{title:"房源详情"}},{path:"/user/:id",name:"user",component:function(){return Promise.all([n.e("chunk-ee8baf92"),n.e("chunk-4d2a6719")]).then(n.bind(null,"e382"))},meta:{title:"用户详情"}},{path:"/company/:id",name:"company",component:function(){return Promise.all([n.e("chunk-ee8baf92"),n.e("chunk-22672ba1"),n.e("chunk-0ae39cf4")]).then(n.bind(null,"28b1"))},meta:{title:"公寓详情"}},{path:"/description/room",name:"descriptionRoom",component:function(){return n.e("chunk-6d7c69df").then(n.bind(null,"faa8"))},meta:{title:"房源类型说明"}},{path:"/download",name:"download",component:function(){return n.e("chunk-aa857c36").then(n.bind(null,"0ea3"))},meta:{title:"zuber白领租房平台"}}]}),x=n("2f62"),q=n("c93e"),P=n("b8d7"),B=n("bc3a"),M=n.n(B),V=n("8d81"),H=n.n(V),$="2567a5ec9705eb7ac2c984033e06189d",z=function(){return Math.round((new Date).getTime()/1e3)},Q=function(){function e(t,n,a){Object(o["a"])(this,e),this.token=t,this._scene=$,this._version=n,this._key=a||""}return Object(m["a"])(e,[{key:"generate",value:function(e,t,n){var a=z(),i=this.token.getValue("secret"),c=this.token.getValue("token"),o=t?t.toLowerCase():"get",r="get"===o||"delete"===o?"{}":JSON.stringify(n),u="request_url="+this._version+e+"&content="+r+"&request_method="+o+"&timestamp="+a+"&secret="+(i||""),s=H()(u);return"timestamp="+a+";oauth2="+c+";signature="+s+";scene="+this._scene+";deployKey="+this._key}}]),e}(),W=function(e){function t(e,n,a,i){var c;return Object(o["a"])(this,t),c=Object(u["a"])(this,Object(s["a"])(t).call(this,a,n,i)),c.baseUrl=e,c}return Object(m["a"])(t,[{key:"handle",value:function(e){if(200===e.status)switch(e.data.code){case 0:return e.data.result?e:Promise.reject(e.data.msg);case 401:return Object(P["a"])(Object(s["a"])(t.prototype),"token",this).clean(),Promise.reject(e.data.msg);default:return Promise.reject(e.data.msg)}}},{key:"resource",value:function(e){var n=this,a=M.a.create({baseURL:this.baseUrl+e});return a.interceptors.request.use(function(a){return a.headers.common["Authorization"]=Object(P["a"])(Object(s["a"])(t.prototype),"generate",n).call(n,e+a.url,a.method,a.data),a},function(e){return Promise.reject(e)}),a.interceptors.response.use(function(e){return n.handle(e)},function(e){return Promise.reject(e)}),a}}]),Object(r["a"])(t,e),t}(Q),Y=window.localStorage,J=function(){function e(t){Object(o["a"])(this,e),this.prefix=t}return Object(m["a"])(e,[{key:"getValue",value:function(e){var t=this.prefix+e,n=Y.getItem(t);try{return n?JSON.parse(n):n}catch(e){return n}}},{key:"setValue",value:function(e,t){var n,a=this.prefix+e;try{n=JSON.stringify(t)}catch(e){n=t}Y.setItem(a,n)}},{key:"removeValue",value:function(e){var t=this.prefix+e;Y.removeItem(t)}}]),e}(),K=function(e){function t(e){Object(o["a"])(this,t);var n=e||"";return Object(u["a"])(this,Object(s["a"])(t).call(this,n))}return Object(m["a"])(t,[{key:"getToken",value:function(e){if("api"===e){var n=Object(P["a"])(Object(s["a"])(t.prototype),"getValue",this).call(this,"uid"),a=n?"/"+n:"";return a}return Object(P["a"])(Object(s["a"])(t.prototype),"getValue",this).call(this,e)}},{key:"setToken",value:function(e,n,a,i){Object(P["a"])(Object(s["a"])(t.prototype),"setValue",this).call(this,"uid",e),Object(P["a"])(Object(s["a"])(t.prototype),"setValue",this).call(this,"token",n),Object(P["a"])(Object(s["a"])(t.prototype),"setValue",this).call(this,"secret",a),i&&Object(P["a"])(Object(s["a"])(t.prototype),"setValue",this).call(this,"username",i)}},{key:"clean",value:function(){Object(P["a"])(Object(s["a"])(t.prototype),"removeValue",this).call(this,"uid"),Object(P["a"])(Object(s["a"])(t.prototype),"removeValue",this).call(this,"token"),Object(P["a"])(Object(s["a"])(t.prototype),"removeValue",this).call(this,"secret")}}]),Object(r["a"])(t,e),t}(J),X={ApiResource:W,Token:K},Z="client",ee="https://services.api.zuker.im/client",te=new X.Token("zuber-"),ne=new X.ApiResource(ee,Z,te),ae=function(){return ne.resource("/users")},ie=function(){return ne.resource("/commons"+te.getToken("api"))},ce=function(){return ne.resource("/search"+te.getToken("api"))},oe=function(){return ne.resource("/users"+te.getToken("api"))},re=function(){return ne.resource("/maps"+te.getToken("api"))},ue=function(){return ne.resource("/views"+te.getToken("api"))},se=function(){return ne.resource("/biz"+te.getToken("api"))},de=function(){return ne.resource("/follows"+te.getToken("api"))},le={getAuth:function(e){return ae().post("/oauth",e)}},fe="GET_USER_AUTH_SUCCESS",he="GET_USER_AUTH_FAIL",me="CLEAN_USER_AUTH",_e=(n("96cf"),n("3040")),be=function(e){var t=function(){var t=Object(_e["a"])(regeneratorRuntime.mark(function t(n,a){var i,c,o;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(i=n.commit,t.prev=1,e.actionStart&&i(e.actionStart,a.data),!e.method){t.next=12;break}return t.next=6,e.method(a.data);case 6:c=t.sent,o=c.data.result,i(e.actionSuccess,{result:o}),a.success&&a.success(o),t.next=14;break;case 12:i(e.actionSuccess,a.data),a.success&&a.success();case 14:t.next=20;break;case 16:t.prev=16,t.t0=t["catch"](1),window.alert(t.t0),e.actionFail&&i(e.actionFail,t.t0);case 20:case"end":return t.stop()}},t,this,[[1,16]])}));return function(e,n){return t.apply(this,arguments)}}();return t},pe=be({method:le.getAuth,actionSuccess:fe,actionFail:he}),ge=be({actionSuccess:me}),Oe={actions:{getUserAuth:pe,cleanUserAuth:ge}},Se=n("a322"),ve=function e(){Object(o["a"])(this,e),this.ifLogged=te.getToken("uid")&&!0},Ee=(C={},Object(Se["a"])(C,fe,function(e,t){te.setToken(t.result.uid,t.result.token,t.result.secret),e.ifLogged=!0}),Object(Se["a"])(C,he,function(e){e.ifLogged=!1}),Object(Se["a"])(C,me,function(e){te.clean(),e.ifLogged=!1}),C),je={state:new ve,mutations:Ee},ye=Object(q["a"])({},Oe,je),Ie={searchAddress:function(e){return re().get("/suggestion",{params:{query:e.keyword,region:e.city}})}},Ae="SEARCHING_SUGGESTED_ADDRESSES",we="SEARCHING_SUGGESTED_ADDRESSES_SUCCESS",ke="SEARCHING_SUGGESTED_ADDRESSES_FAIL",Te="LOCATING_CURRENT_CITY",Ce="LOCATING_CURRENT_CITY_SUCCESS",Ue="LOCATING_CURRENT_CITY_FAIL",Ne="LOCATING_CURRENT_POSITION",Re="LOCATING_CURRENT_POSITION_SUCCESS",De="LOCATING_CURRENT_POSITION_ERROR",Le=window.AMap,Ge=function(e){var t=e.commit;t(Te);var n=new Le.CitySearch;n.getLocalCity(function(e,n){"complete"===e&&"OK"===n.info?t(Ce,{city:n.city}):t(Ue,{err:n})})},Fe=function(e){var t=e.commit;t(Ne);var n=new Le.Geolocation({enableHighAccuracy:!0,timeout:1e4});n.getCurrentPosition(function(e,n){"complete"===e&&"SUCCESS"===n.info?t(Re,{location:n}):t(De,{err:n})})},xe=be({actionSuccess:Ce}),qe=be({method:Ie.searchAddress,actionStart:Ae,actionSuccess:we,actionFail:ke}),Pe={actions:{getGeoLocation:Fe,searchAddressByKeyword:qe,locateCurrentCity:Ge,setCurrentCity:xe}},Be=function e(){Object(o["a"])(this,e),this.querying=!1,this.addresses=[],this.locating=!1,this.current_city=te.getValue("city")?te.getValue("city"):"上海",this.locate_address={}},Me=(U={},Object(Se["a"])(U,Ae,function(e){e.querying=!0}),Object(Se["a"])(U,we,function(e,t){e.addresses=t.result,e.querying=!1}),Object(Se["a"])(U,ke,function(e){e.addresses=[],e.querying=!1}),Object(Se["a"])(U,Te,function(e){e.locating=!0}),Object(Se["a"])(U,Ce,function(e,t){var n=t.city.replace("市","");e.current_city="全国"!==n?n:"上海",te.setValue("city",e.current_city),e.locating=!1}),Object(Se["a"])(U,Ue,function(e){e.locating=!1}),Object(Se["a"])(U,Ne,function(e){e.locating=!0}),Object(Se["a"])(U,Re,function(e,t){e.locating=!1,e.locate_address=t.location}),Object(Se["a"])(U,De,function(e){e.locating=!1,e.locate_address={}}),U),Ve={state:new Be,mutations:Me},He=Object(q["a"])({},Pe,Ve),$e={searchBeds:function(e){return ce().get("/bed",{params:e})},searchDemands:function(e){return ce().get("/demand",{params:e})}},ze="SEARCHING_BED_LIST",Qe="SEARCHING_BED_LIST_SUCCESS",We="SEARCHING_BED_LIST_FAIL",Ye="SEARCHING_DEMAND_LIST",Je="SEARCHING_DEMAND_LIST_SUCCESS",Ke="SEARCHING_DEMAND_LIST_FAIL",Xe=be({method:$e.searchBeds,actionStart:ze,actionSuccess:Qe,actionFail:We}),Ze=be({method:$e.searchDemands,actionStart:Ye,actionSuccess:Je,actionFail:Ke}),et={actions:{getBedList:Xe,getDemandList:Ze}},tt=function e(){Object(o["a"])(this,e),this.searching=!1,this.rent_sequence="",this.demand_sequence="",this.has_next_rent_page=!1,this.has_next_demand_page=!1,this.rent_list=[],this.demand_list=[]},nt=(N={},Object(Se["a"])(N,ze,function(e,t){e.searching=!0,""===t.sequence&&(e.rent_list=[])}),Object(Se["a"])(N,Qe,function(e,t){e.rent_sequence=t.result.sequence,e.has_next_rent_page=t.result.has_next_page,e.rent_list=e.rent_list.concat(t.result.items),e.searching=!1}),Object(Se["a"])(N,We,function(e){e.searching=!1,e.has_next_rent_page=!1}),Object(Se["a"])(N,Ye,function(e,t){e.searching=!0,""===t.sequence&&(e.demand_list=[])}),Object(Se["a"])(N,Je,function(e,t){e.demand_sequence=t.result.sequence,e.has_next_demand_page=t.result.has_next_page,e.demand_list=e.demand_list.concat(t.result.items),e.searching=!1}),Object(Se["a"])(N,Ke,function(e,t){e.searching=!1,e.has_next_demand_page=!1}),N),at={state:new tt,mutations:nt},it=Object(q["a"])({},et,at),ct=window.navigator,ot=function e(){Object(o["a"])(this,e),this.device_manufacturer=ct.vendor,this.device_platform=ct.platform,this.device_model=ct.userAgent,this.device_version=ct.appVersion},rt={getTraffics:function(e){return ie().get("/traffic",{params:{city:e.city}})},getCities:function(){return ie().get("/city")},recordTerminal:function(){return ie().get("/terminal",{params:new ot})}},ut="GET_COMMON_CITIES_SUCCESS",st="GET_COMMON_CITIES_FAIL",dt="GET_TRAFFIC_INFO_SUCCESS",lt="GET_TRAFFIC_INFO_INFO",ft="RECORD_TERMINAL_INFO_SUCCESS",ht=be({method:rt.getTraffics,actionSuccess:dt,actionFail:lt}),mt=be({method:rt.getCities,actionSuccess:ut,actionFail:st}),_t=be({method:rt.recordTerminal,actionSuccess:ft}),bt={actions:{getCityList:mt,getCityTraffic:ht,recordTerminalInfo:_t}},pt=function e(){Object(o["a"])(this,e),this.cities={},this.city_traffic={}},gt=(R={},Object(Se["a"])(R,dt,function(e,t){e.city_traffic=t.result}),Object(Se["a"])(R,lt,function(e){e.city_traffic={}}),Object(Se["a"])(R,ut,function(e,t){e.cities=t.result}),Object(Se["a"])(R,st,function(e){e.cities={}}),Object(Se["a"])(R,ft,function(){return!0}),R),Ot={state:new pt,mutations:gt},St=Object(q["a"])({},bt,Ot),vt={getInfo:function(){return ie().get("/user")},getCaptcha:function(e){return oe().post("/captcha",{phone:e.phone,type:"sms",scene:"register"})},bind:function(e){return oe().post("/bind",{phone:e.phone,captcha:e.captcha,force:1})}},Et="GET_USER_INFO_SUCCESS",jt="GET_USER_INFO_FAIL",yt="GET_PHONE_CAPTCHA",It="GET_PHONE_CAPTCHA_SUCCESS",At="GET_PHONE_CAPTCHA_FAIL",wt="BINDING_USER_PHONE",kt="BINDING_USER_PHONE_SUCCESS",Tt="BINDING_USER_PHONE_FAIL",Ct=be({method:vt.getInfo,actionSuccess:Et,actionFail:jt}),Ut=be({method:vt.getCaptcha,actionStart:yt,actionSuccess:It,actionFail:At}),Nt=be({method:vt.bind,actionStart:wt,actionSuccess:kt,actionFail:Tt}),Rt={actions:{getUserInfo:Ct,sendCaptchaMessage:Ut,bindUserPhone:Nt}},Dt=function e(){Object(o["a"])(this,e),this.account={user:{id:""}},this.clock={},this.sending=!1,this.countdown=60,this.submitting=!1},Lt=(D={},Object(Se["a"])(D,Et,function(e,t){e.account=t.result}),Object(Se["a"])(D,jt,function(e){e.account={user:{id:""}}}),Object(Se["a"])(D,yt,function(e){e.sending=!0,e.countdown--,e.clock=setInterval(function(){e.countdown>0?e.countdown--:(clearInterval(e.clock),e.countdown=60)})}),Object(Se["a"])(D,It,function(e){e.sending=!1}),Object(Se["a"])(D,At,function(e){e.sending=!1,clearInterval(e.clock),e.countdown=60}),Object(Se["a"])(D,wt,function(e){e.submitting=!0}),Object(Se["a"])(D,kt,function(e){e.submitting=!1}),Object(Se["a"])(D,Tt,function(e){e.submitting=!1}),D),Gt={state:new Dt,mutations:Lt},Ft=Object(q["a"])({},Rt,Gt),xt={viewBed:function(e){return e.biz?se().get("/bed",{params:{bed_id:e.id}}):ue().get("/bed",{params:{bed_id:e.id}})},viewDemand:function(e){return ue().get("/demand",{params:{demand_id:e.id}})},followBed:function(e){return de().post("/bed",{bed_id:e.id})},unfollowBed:function(e){return de().delete("/bed",{params:{bed_id:e.id}})},followDemand:function(e){return de().post("/demand",{demand_id:e.id})},unfollowDemand:function(e){return de().delete("/demand",{params:{demand_id:e.id}})}},qt="REQUESTING_BED_DETAIL",Pt="REQUESTING_BED_DETAIL_SUCCESS",Bt="REQUESTING_BED_DETAIL_FAIL",Mt="REQUESTING_DEMAND_DETAIL",Vt="REQUESTING_DEMAND_DETAIL_SUCCESS",Ht="REQUESTING_DEMAND_DETAIL_FAIL",$t="FAVORING_BED_DETAIL",zt="FAVORING_BED_DETAIL_SUCCESS",Qt="FAVORING_BED_DETAIL_FAIL",Wt="UNFAVORING_BED_DETAIL",Yt="UNFAVORING_BED_DETAIL_SUCCESS",Jt="UNFAVORING_BED_DETAIL_FAIL",Kt=be({method:xt.viewBed,actionStart:qt,actionSuccess:Pt,actionFail:Bt}),Xt=be({method:xt.viewDemand,actionStart:Mt,actionSuccess:Vt,actionFail:Ht}),Zt=be({method:xt.followBed,actionStart:$t,actionSuccess:zt,actionFail:Qt}),en=be({method:xt.unfollowBed,actionStart:Wt,actionSuccess:Yt,actionFail:Jt}),tn=be({method:xt.followDemand,actionStart:$t,actionSuccess:zt,actionFail:Qt}),nn=be({method:xt.unfollowDemand,actionStart:Wt,actionSuccess:Yt,actionFail:Jt}),an={actions:{viewBedDetail:Kt,viewDemandDetail:Xt,favorBed:Zt,unfavorBed:en,favorDemand:tn,unfavorDemand:nn}},cn=function e(){Object(o["a"])(this,e),this.requesting=!1,this.bed_unexistance=!1,this.bed_detail={},this.bed_photos=[],this.demand_unexistance=!1,this.demand_detail={},this.favoring=!1},on=(L={},Object(Se["a"])(L,qt,function(e){e.requesting=!0,e.bed_unexistance=!1}),Object(Se["a"])(L,Pt,function(e,t){e.bed_detail=t.result,e.requesting=!1,e.bed_unexistance=!1}),Object(Se["a"])(L,Bt,function(e){e.bed_detail={},e.requesting=!1,e.bed_unexistance=!0}),Object(Se["a"])(L,Mt,function(e,t){e.requesting=!0,e.demand_unexistance=!1}),Object(Se["a"])(L,Vt,function(e,t){e.demand_detail=t.result,e.requesting=!1,e.demand_unexistance=!1}),Object(Se["a"])(L,Ht,function(e,t){e.demand_detail={},e.requesting=!1,e.demand_unexistance=!0}),Object(Se["a"])(L,$t,function(e,t){e.favoring=!0,"demand"===t.type?e.demand_detail.demand_follow=!0:e.bed_detail.follow=!0}),Object(Se["a"])(L,zt,function(e){e.favoring=!1}),Object(Se["a"])(L,Qt,function(e){e.favoring=!1}),Object(Se["a"])(L,Wt,function(e,t){e.favoring=!0,"demand"===t.type?e.demand_detail.demand_follow=!1:e.bed_detail.follow=!1}),Object(Se["a"])(L,Yt,function(e){e.favoring=!1}),Object(Se["a"])(L,Jt,function(e){e.favoring=!1}),L),rn={state:new cn,mutations:on},un=Object(q["a"])({},an,rn),sn={viewUser:function(e){return ue().get("/user",{params:{object_uid:e.id}})},viewCompany:function(e){return se().get("/company",{params:{company_id:e.id}})},followUser:function(e){return de().post("",{object_uid:e.id})},unfollowUser:function(e){return de().delete("",{params:{object_uid:e.id}})}},dn="REQUESTING_USER_DETAIL",ln="REQUESTING_USER_SUCCESS",fn="REQUESTING_USER_FAIL",hn="REQUESTING_COMPANY_DETAIL",mn="REQUESTING_COMPANY_SUCCESS",_n="REQUESTING_COMPANY_FAIL",bn="FAVORING_USER_DETAIL",pn="FAVORING_USER_DETAIL_SUCCESS",gn="FAVORING_USER_DETAIL_FAIL",On="UNFAVORING_USER_DETAIL",Sn="UNFAVORING_USER_DETAIL_SUCCESS",vn="UNFAVORING_USER_DETAIL_FAIL",En=be({method:sn.viewUser,actionStart:dn,actionSuccess:ln,actionFail:fn}),jn=be({method:sn.viewCompany,actionStart:hn,actionSuccess:mn,actionFail:_n}),yn=be({method:sn.followUser,actionStart:bn,actionSuccess:pn,actionFail:gn}),In=be({method:sn.unfollowUser,actionStart:On,actionSuccess:Sn,actionFail:vn}),An={actions:{viewUserDetail:En,viewCompanyDetail:jn,favorUser:yn,unfavorUser:In}},wn=function e(){Object(o["a"])(this,e),this.requesting=!1,this.user_unexistance=!1,this.user_detail={},this.company_unexistance=!1,this.company_detail={},this.following=!1},kn=(G={},Object(Se["a"])(G,dn,function(e,t){e.requesting=!0,e.user_unexistance=!1}),Object(Se["a"])(G,ln,function(e,t){e.user_detail=t.result,e.requesting=!1,e.user_unexistance=!1}),Object(Se["a"])(G,fn,function(e,t){e.user_detail={},e.requesting=!1,e.user_unexistance=!0}),Object(Se["a"])(G,hn,function(e,t){e.requesting=!0,e.company_unexistance=!1}),Object(Se["a"])(G,mn,function(e,t){e.company_detail=t.result,e.requesting=!1,e.company_unexistance=!1}),Object(Se["a"])(G,_n,function(e,t){e.company_detail={},e.requesting=!1,e.company_unexistance=!0}),Object(Se["a"])(G,bn,function(e){e.following=!0,e.user_detail.user_follow=!0}),Object(Se["a"])(G,pn,function(e){e.following=!1}),Object(Se["a"])(G,gn,function(e){e.following=!1}),Object(Se["a"])(G,On,function(e){e.following=!0,e.user_detail.user_follow=!1}),Object(Se["a"])(G,Sn,function(e){e.following=!1}),Object(Se["a"])(G,vn,function(e){e.following=!1}),G),Tn={state:new wn,mutations:kn},Cn=Object(q["a"])({},An,Tn);a["default"].use(x["a"]);var Un=new x["a"].Store({modules:{AuthModule:ye,LocateModule:He,SearchModule:it,CommonModule:St,AccountModule:Ft,ResidenceModule:un,UserModule:Cn}}),Nn=(n("cd22"),n("b970"));n("8590");a["default"].use(Nn["a"]),a["default"].config.productionTip=!1,new a["default"]({router:F,store:Un,render:function(e){return e(k)}}).$mount("#app")},d3dd:function(e,t,n){},eb8e:function(e,t,n){"use strict";var a=n("c665"),i=n("dc0a"),c=n("aa9a"),o=n("d328"),r=n("11d9"),u=(n("4917"),navigator||window.navigator),s=u.userAgent.match(/\([^)]+\)/g)[0],d=s.substring(1,s.length-1),l=function(){function e(){Object(a["a"])(this,e)}return Object(c["a"])(e,[{key:"getDevice",value:function(e){var t=e||"",n=navigator.platform+"&"+t,a=d,i=navigator.vendor,c=navigator.appVersion;return{source:t,devicePlatform:n,deviceModel:a,deviceManufacturer:i,appVersion:c}}}]),e}();n.d(t,"a",function(){return f});var f=function(e){function t(){return Object(a["a"])(this,t),Object(o["a"])(this,Object(r["a"])(t).call(this))}return Object(c["a"])(t,[{key:"checkPlatform",value:function(){var e="";switch(!0){case/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent):e="ios";break;case/android/i.test(navigator.userAgent):e="android";break;case/(windows\s+Phone)/i.test(navigator.userAgent):e="win";break;default:e="other"}return e}},{key:"checkWeixin",value:function(){return/MicroMessenger/i.test(navigator.userAgent.toLowerCase())}},{key:"parseUrl",value:function(e){return window.location.origin+"/download?jump_url="+encodeURIComponent(e)}}]),Object(i["a"])(t,e),t}(l)},f0b8:function(e,t,n){}});
//# sourceMappingURL=app.20ac6386.js.map