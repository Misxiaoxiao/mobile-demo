(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4bb68818"],{"06e0":function(t,e,i){"use strict";var o=i("8f22"),n=i.n(o);n.a},"0bfb":function(t,e,i){"use strict";var o=i("cb7c");t.exports=function(){var t=o(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},1169:function(t,e,i){var o=i("2d95");t.exports=Array.isArray||function(t){return"Array"==o(t)}},"11e9":function(t,e,i){var o=i("52a7"),n=i("4630"),a=i("6821"),r=i("6a99"),s=i("69a8"),c=i("c69a"),l=Object.getOwnPropertyDescriptor;e.f=i("9e1e")?l:function(t,e){if(t=a(t),e=r(e,!0),c)try{return l(t,e)}catch(t){}if(s(t,e))return n(!o.f.call(t,e),t[e])}},2621:function(t,e){e.f=Object.getOwnPropertySymbols},"2d26":function(t,e,i){},3322:function(t,e,i){"use strict";var o=i("d58f"),n=i.n(o);n.a},"34c1":function(t,e,i){"use strict";var o=i("5f7e"),n=i.n(o);n.a},"37c8":function(t,e,i){e.f=i("2b4c")},3846:function(t,e,i){i("9e1e")&&"g"!=/./g.flags&&i("86cc").f(RegExp.prototype,"flags",{configurable:!0,get:i("0bfb")})},3864:function(t,e,i){"use strict";var o=i("79d6"),n=i.n(o);n.a},"3a72":function(t,e,i){var o=i("7726"),n=i("8378"),a=i("2d00"),r=i("37c8"),s=i("86cc").f;t.exports=function(t){var e=n.Symbol||(n.Symbol=a?{}:o.Symbol||{});"_"==t.charAt(0)||t in e||s(e,t,{value:r.f(t)})}},"3fe9":function(t,e,i){"use strict";var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"common-bar",style:t.top?"top: 0px":"bottom: 0px"},[i("van-col",{staticClass:"photo zuber-logo",attrs:{span:4}}),i("van-col",{staticClass:"download-text text-ellipsis",attrs:{span:10}},[i("span",{staticClass:"text primary small",staticStyle:{"font-size":"10px"}},[t._v("\n      用App，与房东直接联系\n    ")])]),i("van-col",{staticClass:"open-app-btn",attrs:{span:10}},[i("span",{staticClass:"open-app",on:{click:function(e){return e.stopPropagation(),t.clickDownload(e)}}},[t._v("\n      下载应用\n    ")]),i("link-app",{attrs:{"link-class":"open-app open-app-outline","link-content":"立即打开"}})],1)],1)},n=[],a=i("c665"),r=i("dc0a"),s=i("aa9a"),c=i("d328"),l=i("11d9"),u=i("9ab4"),d=i("60a3"),f=i("4bb5"),p=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("a",{class:t.linkClass,attrs:{href:t.url},on:{click:t.jump}},[t._v("\n  "+t._s(t.linkContent)+"\n")])},h=[],b=(i("6b54"),i("7f7f"),i("eb8e")),v=function(t){function e(){var t;return Object(a["a"])(this,e),t=Object(c["a"])(this,Object(l["a"])(e).apply(this,arguments)),t.url="",t.ifWeixin=!1,t.jumpUrl="",t}return Object(s["a"])(e,[{key:"setUrl",value:function(){switch(this.$route.name){case"room":this.url="zuber://www.zuber.im";break;case"demand":this.url="zuber://www.zuber.im";break;case"bedDetail":this.$route.query.biz&&"true"===this.$route.query.biz.toString()?this.url="zuber:/"+this.$route.path+"?biz=true":this.url="zuber:/"+this.$route.path;break;default:this.url="zuber:/"+this.$route.path;break}}},{key:"jump",value:function(){var t=this;this.ifWeixin?this.$router.push({name:"download",query:{jumpUrl:this.jumpUrl}}):setTimeout(function(){window.location.href=t.jumpUrl},2e3)}},{key:"created",value:function(){var t=new b["a"];this.ifWeixin=t.checkWeixin(),this.jumpUrl=t.parseUrl(this.$route.path),this.setUrl()}}]),Object(r["a"])(e,t),e}(d["c"]);u["a"]([Object(d["b"])({default:""})],v.prototype,"linkClass",void 0),u["a"]([Object(d["b"])({default:""})],v.prototype,"linkContent",void 0),v=u["a"]([d["a"]],v);var _=v,m=_,y=i("2877"),g=Object(y["a"])(m,p,h,!1,null,null,null);g.options.__file="link_app.vue";var w=g.exports,O=function(t){function e(){var t;return Object(a["a"])(this,e),t=Object(c["a"])(this,Object(l["a"])(e).apply(this,arguments)),t.ifWeixin=!1,t.jumpUrl="",t.platform="",t}return Object(s["a"])(e,[{key:"clickDownload",value:function(){var t=this;setTimeout(function(){"ios"===t.platform?t.getApp({success:function(){window.location.href=t.app.ios.download_url}}):t.$router.push({name:"download",query:{jumpUrl:t.jumpUrl}})},1e3)}},{key:"created",value:function(){var t=new b["a"];this.ifWeixin=t.checkWeixin(),this.platform=t.checkPlatform()}}]),Object(r["a"])(e,t),e}(d["c"]);u["a"]([Object(d["b"])({default:!1})],O.prototype,"top",void 0),u["a"]([Object(f["b"])(function(t){return t.CommonModule.app})],O.prototype,"app",void 0),u["a"]([Object(f["a"])("getApp")],O.prototype,"getApp",void 0),O=u["a"]([Object(d["a"])({components:{LinkApp:w}})],O);var j=O,D=j,C=(i("3864"),Object(y["a"])(D,o,n,!1,null,null,null));C.options.__file="bar.vue";e["a"]=C.exports},"4d70":function(t,e,i){t.exports=i.p+"img/loading-spin.51800bac.svg"},5165:function(t,e,i){"use strict";var o=i("b9d7"),n=i.n(o);n.a},"52a7":function(t,e){e.f={}.propertyIsEnumerable},5677:function(t,e,i){"use strict";var o=i("2d26"),n=i.n(o);n.a},"5b7a":function(t,e,i){"use strict";var o=i("e1d2"),n=i.n(o);n.a},"5f7e":function(t,e,i){},6351:function(t,e,i){"use strict";var o=i("c48b"),n=i.n(o);n.a},"67ab":function(t,e,i){var o=i("ca5a")("meta"),n=i("d3f4"),a=i("69a8"),r=i("86cc").f,s=0,c=Object.isExtensible||function(){return!0},l=!i("79e5")(function(){return c(Object.preventExtensions({}))}),u=function(t){r(t,o,{value:{i:"O"+ ++s,w:{}}})},d=function(t,e){if(!n(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!a(t,o)){if(!c(t))return"F";if(!e)return"E";u(t)}return t[o].i},f=function(t,e){if(!a(t,o)){if(!c(t))return!0;if(!e)return!1;u(t)}return t[o].w},p=function(t){return l&&h.NEED&&c(t)&&!a(t,o)&&u(t),t},h=t.exports={KEY:o,NEED:!1,fastKey:d,getWeak:f,onFreeze:p}},"6b54":function(t,e,i){"use strict";i("3846");var o=i("cb7c"),n=i("0bfb"),a=i("9e1e"),r="toString",s=/./[r],c=function(t){i("2aba")(RegExp.prototype,r,t,!0)};i("79e5")(function(){return"/a/b"!=s.call({source:"a",flags:"b"})})?c(function(){var t=o(this);return"/".concat(t.source,"/","flags"in t?t.flags:!a&&t instanceof RegExp?n.call(t):void 0)}):s.name!=r&&c(function(){return s.call(this)})},7709:function(t,e,i){},"79d6":function(t,e,i){},"7ab0":function(t,e,i){"use strict";var o=i("c008"),n=i.n(o);n.a},"7bbc":function(t,e,i){var o=i("6821"),n=i("9093").f,a={}.toString,r="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],s=function(t){try{return n(t)}catch(t){return r.slice()}};t.exports.f=function(t){return r&&"[object Window]"==a.call(t)?s(t):n(o(t))}},"8a81":function(t,e,i){"use strict";var o=i("7726"),n=i("69a8"),a=i("9e1e"),r=i("5ca1"),s=i("2aba"),c=i("67ab").KEY,l=i("79e5"),u=i("5537"),d=i("7f20"),f=i("ca5a"),p=i("2b4c"),h=i("37c8"),b=i("3a72"),v=i("d4c0"),_=i("1169"),m=i("cb7c"),y=i("d3f4"),g=i("6821"),w=i("6a99"),O=i("4630"),j=i("2aeb"),D=i("7bbc"),C=i("11e9"),k=i("86cc"),I=i("0d58"),x=C.f,S=k.f,P=D.f,T=o.Symbol,z=o.JSON,$=z&&z.stringify,M="prototype",q=p("_hidden"),E=p("toPrimitive"),R={}.propertyIsEnumerable,A=u("symbol-registry"),B=u("symbols"),U=u("op-symbols"),V=Object[M],W="function"==typeof T,F=o.QObject,N=!F||!F[M]||!F[M].findChild,L=a&&l(function(){return 7!=j(S({},"a",{get:function(){return S(this,"a",{value:7}).a}})).a})?function(t,e,i){var o=x(V,e);o&&delete V[e],S(t,e,i),o&&t!==V&&S(V,e,o)}:S,J=function(t){var e=B[t]=j(T[M]);return e._k=t,e},K=W&&"symbol"==typeof T.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof T},Y=function(t,e,i){return t===V&&Y(U,e,i),m(t),e=w(e,!0),m(i),n(B,e)?(i.enumerable?(n(t,q)&&t[q][e]&&(t[q][e]=!1),i=j(i,{enumerable:O(0,!1)})):(n(t,q)||S(t,q,O(1,{})),t[q][e]=!0),L(t,e,i)):S(t,e,i)},G=function(t,e){m(t);var i,o=v(e=g(e)),n=0,a=o.length;while(a>n)Y(t,i=o[n++],e[i]);return t},Q=function(t,e){return void 0===e?j(t):G(j(t),e)},H=function(t){var e=R.call(this,t=w(t,!0));return!(this===V&&n(B,t)&&!n(U,t))&&(!(e||!n(this,t)||!n(B,t)||n(this,q)&&this[q][t])||e)},X=function(t,e){if(t=g(t),e=w(e,!0),t!==V||!n(B,e)||n(U,e)){var i=x(t,e);return!i||!n(B,e)||n(t,q)&&t[q][e]||(i.enumerable=!0),i}},Z=function(t){var e,i=P(g(t)),o=[],a=0;while(i.length>a)n(B,e=i[a++])||e==q||e==c||o.push(e);return o},tt=function(t){var e,i=t===V,o=P(i?U:g(t)),a=[],r=0;while(o.length>r)!n(B,e=o[r++])||i&&!n(V,e)||a.push(B[e]);return a};W||(T=function(){if(this instanceof T)throw TypeError("Symbol is not a constructor!");var t=f(arguments.length>0?arguments[0]:void 0),e=function(i){this===V&&e.call(U,i),n(this,q)&&n(this[q],t)&&(this[q][t]=!1),L(this,t,O(1,i))};return a&&N&&L(V,t,{configurable:!0,set:e}),J(t)},s(T[M],"toString",function(){return this._k}),C.f=X,k.f=Y,i("9093").f=D.f=Z,i("52a7").f=H,i("2621").f=tt,a&&!i("2d00")&&s(V,"propertyIsEnumerable",H,!0),h.f=function(t){return J(p(t))}),r(r.G+r.W+r.F*!W,{Symbol:T});for(var et="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),it=0;et.length>it;)p(et[it++]);for(var ot=I(p.store),nt=0;ot.length>nt;)b(ot[nt++]);r(r.S+r.F*!W,"Symbol",{for:function(t){return n(A,t+="")?A[t]:A[t]=T(t)},keyFor:function(t){if(!K(t))throw TypeError(t+" is not a symbol!");for(var e in A)if(A[e]===t)return e},useSetter:function(){N=!0},useSimple:function(){N=!1}}),r(r.S+r.F*!W,"Object",{create:Q,defineProperty:Y,defineProperties:G,getOwnPropertyDescriptor:X,getOwnPropertyNames:Z,getOwnPropertySymbols:tt}),z&&r(r.S+r.F*(!W||l(function(){var t=T();return"[null]"!=$([t])||"{}"!=$({a:t})||"{}"!=$(Object(t))})),"JSON",{stringify:function(t){var e,i,o=[t],n=1;while(arguments.length>n)o.push(arguments[n++]);if(i=e=o[1],(y(e)||void 0!==t)&&!K(t))return _(e)||(e=function(t,e){if("function"==typeof i&&(e=i.call(this,t,e)),!K(e))return e}),o[1]=e,$.apply(z,o)}}),T[M][E]||i("32e9")(T[M],E,T[M].valueOf),d(T,"Symbol"),d(Math,"Math",!0),d(o.JSON,"JSON",!0)},"8d4e":function(t,e,i){},"8f22":function(t,e,i){},9093:function(t,e,i){var o=i("ce10"),n=i("e11e").concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return o(t,n)}},a26b:function(t,e,i){"use strict";var o=i("a757"),n=i.n(o);n.a},a757:function(t,e,i){},aac7:function(t,e,i){"use strict";var o=i("8d4e"),n=i.n(o);n.a},ac4d:function(t,e,i){i("3a72")("asyncIterator")},b9d7:function(t,e,i){},bf93:function(t,e,i){"use strict";var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"loading-spin"},[i("img",{attrs:{src:t.loading,alt:"加载中",height:"28"}})])},n=[],a=i("c665"),r=i("dc0a"),s=i("d328"),c=i("11d9"),l=i("9ab4"),u=i("60a3"),d=function(t){function e(){var t;return Object(a["a"])(this,e),t=Object(s["a"])(this,Object(c["a"])(e).apply(this,arguments)),t.loading=i("4d70"),t}return Object(r["a"])(e,t),e}(u["c"]);d=l["a"]([u["a"]],d);var f=d,p=f,h=(i("3322"),i("2877")),b=Object(h["a"])(p,o,n,!1,null,null,null);b.options.__file="loading.vue";e["a"]=b.exports},c008:function(t,e,i){},c48b:function(t,e,i){},c5c1:function(t,e,i){"use strict";var o=i("7709"),n=i.n(o);n.a},c8b0:function(t,e,i){},ce76:function(t,e,i){"use strict";i.r(e);var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.bedDetail.can_claim&&!t.requesting?i("div",{staticClass:"room_detail_wrap"},[i("common-bar",{attrs:{top:t.bedDetail.can_claim}}),i("div",{staticClass:"room_detail_content",style:t.bedDetail.can_claim?"margin-top: 60px":""},[i("div",[i("room-detail-info"),i("room-other-info"),i("room-description",{attrs:{showPerson:t.bedDetail.can_claim}})],1)]),i("link-claim")],1):t.requesting?i("loading"):i("div",{staticClass:"room_detail_wrap"},[i("div",{staticClass:"room_detail_content",style:t.bedDetail.can_claim?"margin-top: 60px":""},[i("room-type"),i("div",[i("room-detail-info"),i("room-other-info"),i("room-description")],1)],1),i("common-bar")],1)},n=[],a=(i("6b54"),i("96cf"),i("3040")),r=(i("7f7f"),i("c665")),s=i("dc0a"),c=i("aa9a"),l=i("d328"),u=i("11d9"),d=(i("cadf"),i("551c"),i("097d"),i("9ab4")),f=i("60a3"),p=i("4bb5"),h=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.detailInfo?i("div",{staticClass:"room_detail_info"},[i("swiper",{attrs:{slotArr:t.slotArr}},[i("div",{staticClass:"swiper_item_wrap",attrs:{slot:"video_wrap"},slot:"video_wrap"},[i("video-detail",{attrs:{hasVideo:t.detailInfo.hasVideo,video:t.detailInfo.video,refreshTime:t.detailInfo.refreshTime}})],1),i("div",{staticClass:"swiper_item_wrap",attrs:{slot:"image_wrap"},slot:"image_wrap"},[i("image-detail",{attrs:{photos:t.detailInfo.photos,photoSrc:t.detailInfo.photo}})],1)]),i("room-title",{attrs:{detailInfo:t.detailInfo}}),i("room-location",{attrs:{detailInfo:t.detailInfo,gotoMap:t.gotoMap}})],1):t._e()},b=[],v=(i("ac4d"),i("8a81"),i("ac6a"),i("3def")),_=i("c991"),m=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.hasVideo?i("div",{staticClass:"video_detail_wrap photo",style:"background-image: url("+t.video.screenshot+");",on:{click:function(e){return e.stopPropagation(),t.clickVideo(e)}}},[i("i",{staticClass:"iconfont"},[t._v("")]),i("span",[t._v(t._s(t.refreshTime.indexOf("刷新")>0?t.refreshTime:t.refreshTime+"刷新"))])]):i("div",{staticClass:"video_detail_wrap photo no_video",on:{click:function(e){return e.stopPropagation(),t.clickVideo(e)}}},[i("span",[t._v(t._s(t.refreshTime.indexOf("刷新")>0?t.refreshTime:t.refreshTime+"刷新"))])])},y=[],g=function(t){function e(){return Object(r["a"])(this,e),Object(l["a"])(this,Object(u["a"])(e).apply(this,arguments))}return Object(c["a"])(e,[{key:"clickVideo",value:function(){this.$dialog.alert({message:this.hasVideo?"请在App中打开播放":"请联系对方提供视频"})}}]),Object(s["a"])(e,t),e}(f["c"]);d["a"]([Object(f["b"])({default:!1})],g.prototype,"hasVideo",void 0),d["a"]([Object(f["b"])({default:{}})],g.prototype,"video",void 0),d["a"]([Object(f["b"])({default:""})],g.prototype,"refreshTime",void 0),g=d["a"]([f["a"]],g);var w=g,O=w,j=(i("c5c1"),i("2877")),D=Object(j["a"])(O,m,y,!1,null,null,null);D.options.__file="video_detail.vue";var C=D.exports,k=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"image_detail_wrap photo",style:"background-image: url("+t.photoSrc+");",on:{click:function(e){return e.stopPropagation(),t.showImagePreview(e)}}},[t.photos.length>0?i("span",[i("i",{staticClass:"iconfont"},[t._v("")]),t._v("\n    "+t._s(t.photos.length)+"\n  ")]):t._e()])},I=[],x=i("b970"),S=function(t){function e(){var t;return Object(r["a"])(this,e),t=Object(l["a"])(this,Object(u["a"])(e).apply(this,arguments)),t.instance=null,t.viewing=!1,t}return Object(c["a"])(e,[{key:"showImagePreview",value:function(t,e){var i=this;if(this.viewing=!0,this.photos.length>0){var o=this;this.$router.push({name:"image"}),this.instance=Object(x["a"])({images:o.Images,startPosition:"number"===typeof t?t:0,onClose:function(){o.viewing=!1,"bedDetail"!==o.$route.name&&history.back()}}),e&&setTimeout(function(){i.instance.close()},e)}else this.$dialog.alert({message:"暂无照片，请上传图片"})}},{key:"mounted",value:function(){var t=this;window.addEventListener("popstate",function(){t.viewing&&(t.instance&&t.instance.close(),t.viewing=!1)})}},{key:"Images",get:function(){return this.photos.length>0?this.photos.map(function(t,e){return t.src}):[]}}]),Object(s["a"])(e,t),e}(f["c"]);d["a"]([Object(f["b"])({default:""})],S.prototype,"photoSrc",void 0),d["a"]([Object(f["b"])({default:{}})],S.prototype,"photos",void 0),S=d["a"]([f["a"]],S);var P=S,T=P,z=(i("5165"),Object(j["a"])(T,k,I,!1,null,null,null));z.options.__file="image_detail.vue";var $=z.exports,M=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"room_detail_title"},[t.detailInfo.biz&&1===t.detailInfo.type?i("div",[i("h3",[t._v(t._s(t.detailInfo.roomTitle))]),i("div",{staticClass:"room_detail_type_info"},[i("span",[t._v(t._s(t.roomTypeInfo))])]),i("div",{staticClass:"room_detail_type_price"},[i("span",[t._v(t._s(t.detailInfo.money))]),i("i",[t._v("元/月")]),t._v("·"+t._s(t.detailInfo.dateDetail)+"\n    ")]),i("div",{staticClass:"room_detail_type_other"},[i("span",[t._v("朝"+t._s(t.detailInfo.orientation))]),1===t.detailInfo.privateBathroom?i("span",[t._v("独卫")]):t._e(),1===t.detailInfo.veranda?i("span",[t._v("阳台")]):t._e(),1===t.detailInfo.window?i("span",[t._v("飘窗")]):t._e(),i("span",{staticClass:"active",on:{click:function(e){return e.stopPropagation(),t.gotoDescription(e)}}},[t._v(t._s(t.detailInfo.roomTypeAffirm)+" "),i("i",{staticClass:"iconfont"},[t._v("")])])])]):t.detailInfo.biz&&2===t.detailInfo.type?i("div",[i("h3",[t._v(t._s(t.detailInfo.roomTitle))]),i("div",{staticClass:"room_detail_type_price"},[i("span",[t._v(t._s(t.detailInfo.money))]),i("i",[t._v("元/月")]),t._v("·"+t._s(t.detailInfo.dateDetail)+"\n      "),i("i",{staticClass:"right"},[t._v(t._s(t.roomTypeInfo))])]),i("div",{staticClass:"room_detail_type_other"},[i("span",[t._v("朝"+t._s(t.detailInfo.orientation))]),1===t.detailInfo.privateBathroom?i("span",[t._v("独卫")]):t._e(),1===t.detailInfo.veranda?i("span",[t._v("阳台")]):t._e(),1===t.detailInfo.window?i("span",[t._v("飘窗")]):t._e(),i("span",{staticClass:"active",on:{click:function(e){return e.stopPropagation(),t.gotoDescription(e)}}},[t._v(t._s(t.detailInfo.roomTypeAffirm)+" "),i("i",{staticClass:"iconfont"},[t._v("")])])])]):i("div",[i("h3",[t._v(t._s(t.detailInfo.roomTitle))]),i("div",{staticClass:"room_detail_type_price"},[i("span",[t._v(t._s(t.detailInfo.money))]),i("i",[t._v("元/月")]),t._v("·"+t._s(t.detailInfo.dateDetail)+"\n      "),i("i",{staticClass:"right"},[t._v(t._s(t.roomTypeInfo))])]),i("div",{staticClass:"room_detail_type_other"},[0!==t.detailInfo.gender?i("span",[t._v(t._s(1===t.detailInfo.gender?"仅限男生":"仅限女生"))]):t._e(),0!==t.detailInfo.personLimit?i("span",[t._v(t._s("限"+t.numChinese[t.detailInfo.personLimit-1]+"人"))]):t._e(),i("span",{staticClass:"active",on:{click:function(e){return e.stopPropagation(),t.gotoDescription(e)}}},[t._v(t._s(t.detailInfo.roomTypeAffirm)+" "),i("i",{staticClass:"iconfont"},[t._v("")])])])])])},q=[],E=function(t){function e(){var t;return Object(r["a"])(this,e),t=Object(l["a"])(this,Object(u["a"])(e).apply(this,arguments)),t.numChinese=["一","二","三","四","五","六","七","八","九"],t}return Object(c["a"])(e,[{key:"gotoDescription",value:function(){this.$router.push({name:"descriptionRoom"})}},{key:"roomTypeInfo",get:function(){var t="",e=(0===this.detailInfo.bedCount?"":"".concat(this.detailInfo.bedCount,"室"))+(0===this.detailInfo.hallCount?"":"".concat(this.detailInfo.hallCount,"厅"))+(0===this.detailInfo.kitchenCount?"":"".concat(this.detailInfo.kitchenCount,"厨"))+(0===this.detailInfo.bathroomCount?"":"".concat(this.detailInfo.bathroomCount,"卫")),i=!this.detailInfo.biz||0!==this.detailInfo.bedSquareMeter&&""===this.detailInfo.bedSquareMeter||0!==this.detailInfo.roomSquareMeter&&""===this.detailInfo.roomSquareMeter?"":"".concat(this.detailInfo.bedSquareMeter,"/").concat(this.detailInfo.roomSquareMeter,"㎡ "),o=this.detailInfo.biz&&0!==this.detailInfo.floor&&0!==this.detailInfo.totalFloor?"".concat(this.detailInfo.floor,"/").concat(this.detailInfo.totalFloor,"楼"):"",n=1===this.detailInfo.elevator?"有电梯":2===this.detailInfo.elevator?"无电梯":"";return this.detailInfo.biz&&2===this.detailInfo.type?(t+=""!==t&&""!==i?" | "+i:i,t+=""!==t&&""!==o?" | "+o:o,t+=""!==t&&""!==n?" | "+n:n,t):(t+=""!==t&&""!==e?" | "+e:e,t+=""!==t&&""!==i?" | "+i:i,t+=""!==t&&""!==o?" | "+o:o,t+=""!==t&&""!==n?" | "+n:n,t)}}]),Object(s["a"])(e,t),e}(f["c"]);d["a"]([Object(f["b"])({default:{}})],E.prototype,"detailInfo",void 0),E=d["a"]([f["a"]],E);var R=E,A=R,B=(i("5b7a"),Object(j["a"])(A,M,q,!1,null,null,null));B.options.__file="room_title.vue";var U=B.exports,V=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"room_locate_wrap"},[i("h4",{staticClass:"room_locate_title"},[i("span",{staticClass:"room_locate_left"},[i("i",{staticClass:"iconfont"},[t._v("")]),t._v(t._s(t.detailInfo.localization)+"\n    ")]),i("span",{staticClass:"room_locate_right",on:{click:function(e){return e.stopPropagation(),t.gotoMap(e)}}},[t._v("\n      地图"),i("i",{staticClass:"iconfont"},[t._v("")])])]),i("p",t._l(t.detailInfo.subways,function(e,o){return i("span",{key:o},[t._v(t._s(e.format))])}))])},W=[],F=function(t){function e(){return Object(r["a"])(this,e),Object(l["a"])(this,Object(u["a"])(e).apply(this,arguments))}return Object(s["a"])(e,t),e}(f["c"]);d["a"]([Object(f["b"])({default:{}})],F.prototype,"detailInfo",void 0),d["a"]([Object(f["b"])({default:{}})],F.prototype,"gotoMap",void 0),F=d["a"]([f["a"]],F);var N=F,L=N,J=(i("7ab0"),Object(j["a"])(L,V,W,!1,null,null,null));J.options.__file="room_location.vue";var K=J.exports,Y=function(t){function e(){var t;return Object(r["a"])(this,e),t=Object(l["a"])(this,Object(u["a"])(e).apply(this,arguments)),t.slotArr=["video_wrap","image_wrap"],t}return Object(c["a"])(e,[{key:"setType",value:function(t){var e=!0,i=!1,o=void 0;try{for(var n,a=v["h"][Symbol.iterator]();!(e=(n=a.next()).done);e=!0){var r=n.value;if(r.value===t)return r.key}}catch(t){i=!0,o=t}finally{try{e||null==a.return||a.return()}finally{if(i)throw o}}return""}},{key:"gotoMap",value:function(){this.$router.push({name:"map",query:{latitude:this.bedDetail.room?this.bedDetail.room.latitude:-1,longitude:this.bedDetail.room?this.bedDetail.room.longitude:-1}})}},{key:"detailInfo",get:function(){if(!this.requesting&&"bedDetail"===this.$route.name){var t=this.$route.query.biz?this.$route.query.biz.toString():"";return"true"===t?{biz:!0,photo:this.bedDetail.bed.photo.src,type:this.bedDetail.room.biz_attr.type,photos:this.bedDetail.bed.photos?this.bedDetail.bed.photos:[],hasVideo:this.bedDetail.bed.has_video,video:this.bedDetail.bed.video?this.bedDetail.bed.video:"",refreshTime:this.bedDetail.bed.refresh_time,roomTitle:"".concat(this.setType(this.bedDetail.bed.type),"-").concat(this.bedDetail.bed.title),money:this.bedDetail.bed.money,dateDetail:this.bedDetail.bed.dateDetail,sequareMeter:this.bedDetail.bed.square_meter,privateBathroom:this.bedDetail.bed.private_bathroom,veranda:this.bedDetail.bed.veranda,elevator:this.bedDetail.room.biz_attr.elevator,window:this.bedDetail.bed.window,bedCount:this.bedDetail.room.biz_attr.bed_count?this.bedDetail.room.biz_attr.bed_count:0,hallCount:this.bedDetail.room.biz_attr.hall_count?this.bedDetail.room.biz_attr.hall_count:0,kitchenCount:this.bedDetail.room.biz_attr.kitchen_count?this.bedDetail.room.biz_attr.kitchen_count:0,bathroomCount:this.bedDetail.room.biz_attr.bathroom_count?this.bedDetail.room.biz_attr.bathroom_count:0,bedSquareMeter:this.bedDetail.bed.square_meter,roomSquareMeter:this.bedDetail.room.biz_attr.square_meter,floor:this.bedDetail.room.biz_attr.floor,totalFloor:this.bedDetail.room.biz_attr.total_floor,orientation:this.bedDetail.bed.orientation,roomTypeAffirm:this.bedDetail.room.room_type_affirm,localization:"".concat(this.bedDetail.room.region).concat(this.bedDetail.room.road),subways:this.bedDetail.room.subways}:{biz:!1,photo:this.bedDetail.bed.photo.src,photos:this.bedDetail.bed.photos?this.bedDetail.bed.photos:[],hasVideo:this.bedDetail.bed.has_video,video:this.bedDetail.bed.video?this.bedDetail.bed.video:"",refreshTime:this.bedDetail.bed.refresh_time,roomTitle:"".concat(this.setType(this.bedDetail.bed.type),"-").concat(this.bedDetail.bed.title),money:this.bedDetail.bed.money,dateDetail:this.bedDetail.bed.dateDetail,bedCount:this.bedDetail.room.client_attr.bed_count?this.bedDetail.room.client_attr.bed_count:0,hallCount:this.bedDetail.room.client_attr.hall_count?this.bedDetail.room.client_attr.hall_count:0,kitchenCount:this.bedDetail.room.client_attr.kitchen_count?this.bedDetail.room.client_attr.kitchen_count:0,bathroomCount:this.bedDetail.room.client_attr.bathroom_count?this.bedDetail.room.client_attr.bathroom_count:0,elevator:this.bedDetail.room.client_attr.elevator,gender:this.bedDetail.bed.sex,personLimit:this.bedDetail.bed.person_limit,roomTypeAffirm:this.bedDetail.room.room_type_affirm,localization:"".concat(this.bedDetail.room.region).concat(this.bedDetail.room.road),subways:this.bedDetail.room.subways}}return""}}]),Object(s["a"])(e,t),e}(f["c"]);d["a"]([Object(p["b"])(function(t){return t.ResidenceModule.bed_detail})],Y.prototype,"bedDetail",void 0),d["a"]([Object(p["b"])(function(t){return t.ResidenceModule.requesting})],Y.prototype,"requesting",void 0),Y=d["a"]([Object(f["a"])({components:{Swiper:_["a"],RoomTitle:U,RoomLocation:K,VideoDetail:C,ImageDetail:$}})],Y);var G=Y,Q=G,H=(i("6351"),Object(j["a"])(Q,h,b,!1,null,null,null));H.options.__file="room_detail_info.vue";var X=H.exports,Z=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.otherInfo.length>0?i("div",{staticClass:"room_other_info_wrap"},[i("h4",[t._v("其他单间情况")]),i("ul",t._l(t.otherInfo,function(e,o){return i("li",{key:o,staticClass:"room_other_item",on:{click:function(i){t.view(e)}}},[1===e.state?i("div",[i("div",{staticClass:"room_other_item_left"},[i("h5",[t._v(t._s(e.type+(e.title?"-"+e.title:"")))]),i("p",[""!==e.orientation?i("span",[t._v(t._s(e.orientation)+"·")]):t._e(),0!==e.squareMeter?i("span",[t._v(t._s(e.squareMeter)+"㎡·")]):t._e(),0!==e.privateBathroom?i("span",[t._v("独卫·")]):t._e(),0!==e.veranda?i("span",[t._v("阳台·")]):t._e(),0!==e.window?i("span",[t._v("飘窗·")]):t._e(),i("span",[t._v(t._s(e.dateDetail))])])]),i("div",{staticClass:"room_other_item_right"},[i("span",[t._v(t._s(e.money)+"元/月")]),i("i",{staticClass:"iconfont"},[t._v("")])])]):t._e(),2===e.state?i("div",[i("div",{staticClass:"room_other_item_left"},[t._v("\n          "+t._s(e.type)+"\n        ")]),i("div",{staticClass:"room_other_item_right"},[t._v("\n          室友未知\n        ")])]):t._e()])}))]):t._e()},tt=[],et=function(t){function e(){return Object(r["a"])(this,e),Object(l["a"])(this,Object(u["a"])(e).apply(this,arguments))}return Object(c["a"])(e,[{key:"setType",value:function(t){var e=!0,i=!1,o=void 0;try{for(var n,a=v["h"][Symbol.iterator]();!(e=(n=a.next()).done);e=!0){var r=n.value;if(r.value===t)return r.key}}catch(t){i=!0,o=t}finally{try{e||null==a.return||a.return()}finally{if(i)throw o}}return""}},{key:"view",value:function(t){t.id!==this.$route.params.id&&this.$router.push({name:"bedDetail",params:{id:t.id},query:{biz:t.biz}})}},{key:"otherInfo",get:function(){var t=this;return this.bedDetail.other_beds?this.bedDetail.other_beds.map(function(e){return{biz:t.bedDetail.room.biz,id:e.id,state:e.state,type:t.setType(e.type),title:e.title,money:e.money,sex:e.sex?e.sex:"",orientation:e.orientation?e.orientation:"",squareMeter:e.square_meter?e.square_meter:0,privateBathroom:e.private_bathroom?e.private_bathroom:0,veranda:e.veranda?e.veranda:0,window:e.window?e.window:0,dateDetail:e.dateDetail}}):[]}}]),Object(s["a"])(e,t),e}(f["c"]);d["a"]([Object(p["b"])(function(t){return t.ResidenceModule.bed_detail})],et.prototype,"bedDetail",void 0),et=d["a"]([f["a"]],et);var it=et,ot=it,nt=(i("34c1"),Object(j["a"])(ot,Z,tt,!1,null,null,null));nt.options.__file="room_other_info.vue";var at=nt.exports,rt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return""!==t.roomDescription?i("div",{staticClass:"room_description_wrap"},[i("h4",[t._v("房源描述")]),t.showPerson?t._e():i("div",{staticClass:"room_description_person",on:{click:function(e){return e.stopPropagation(),t.view(e)}}},[""!==t.roomDescription.person?i("person-img",{attrs:{info:t.roomDescription.person,formatTime:""}}):t._e(),""!==t.roomDescription.company?i("company-img",{attrs:{info:t.roomDescription.company}}):t._e(),i("div",{staticClass:"contract_btn",on:{click:function(e){return e.stopPropagation(),t.clickContract(e)}}},[t._v("联系Ta")])],1),i("div",{staticClass:"room_des_text_wrap"},[t._v("\n    "+t._s(t.roomDescription.content)+"\n  ")]),i("div",{staticClass:"room_des_msg_info_wrap"},[1===t.roomDescription.person.identity_validate_status?i("div",{staticClass:"msg_info"},[t._m(0),i("div",{staticClass:"msg_info_right"},[t._v("\n        由实名登记用户发布并承诺真实合法有效，接受所有用户监督和评价\n      ")])]):t._e(),2===this.bedDetail.room.rent_type?i("div",{staticClass:"msg_info"},[t._m(1),i("div",{staticClass:"msg_info_right"},[t._v("\n        温馨提示：异性合租需谨慎\n      ")])]):t._e()])]):t._e()},st=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"msg_info_left"},[i("i",{staticClass:"iconfont"},[t._v("")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"msg_info_left"},[i("i",{staticClass:"iconfont",staticStyle:{"font-size":"12px"}},[t._v("")])])}],ct=i("eb74"),lt=i("cdb0"),ut=function(t){function e(){return Object(r["a"])(this,e),Object(l["a"])(this,Object(u["a"])(e).apply(this,arguments))}return Object(c["a"])(e,[{key:"view",value:function(){"true"===this.$route.query.biz.toString()?this.$router.push({name:"company",params:{id:this.roomDescription.company.id}}):this.$router.push({name:"user",params:{id:this.roomDescription.person.id}})}},{key:"clickContract",value:function(){this.$dialog.alert({message:"请下载APP，使用私信聊天功能"})}},{key:"roomDescription",get:function(){return this.bedDetail.bed?{person:this.bedDetail.user?this.bedDetail.user:"",company:this.bedDetail.company?this.bedDetail.company:"",content:this.bedDetail.bed.content}:""}}]),Object(s["a"])(e,t),e}(f["c"]);d["a"]([Object(f["b"])({default:!1})],ut.prototype,"showPerson",void 0),d["a"]([Object(p["b"])(function(t){return t.ResidenceModule.bed_detail})],ut.prototype,"bedDetail",void 0),ut=d["a"]([Object(f["a"])({components:{PersonImg:ct["a"],CompanyImg:lt["a"]}})],ut);var dt=ut,ft=dt,pt=(i("aac7"),Object(j["a"])(ft,rt,st,!1,null,null,null));pt.options.__file="room_description.vue";var ht=pt.exports,bt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return""!==t.type?i("div",{staticClass:"room_type_wrap"},[i("i",{staticClass:"iconfont"},[t._v("")]),t._v(t._s(t.type)+"\n")]):t._e()},vt=[],_t=function(t){function e(){var t;return Object(r["a"])(this,e),t=Object(l["a"])(this,Object(u["a"])(e).apply(this,arguments)),t.type="",t}return Object(c["a"])(e,[{key:"changeType",value:function(){this.bedDetail.bed&&2===this.bedDetail.bed.state?this.type="该房源已出租":this.bedDetail.bed&&1===this.bedDetail.bed.status?this.type="该房源已删除":this.bedDetail.room&&this.bedDetail.room.may_expire&&(this.type="该房源许久未刷新，可能已出租")}},{key:"mounted",value:function(){this.changeType()}}]),Object(s["a"])(e,t),e}(f["c"]);d["a"]([Object(p["b"])(function(t){return t.ResidenceModule.bed_detail})],_t.prototype,"bedDetail",void 0),_t=d["a"]([f["a"]],_t);var mt=_t,yt=mt,gt=(i("5677"),Object(j["a"])(yt,bt,vt,!1,null,null,null));gt.options.__file="room_type.vue";var wt=gt.exports,Ot=i("bf93"),jt=i("3fe9"),Dt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"claim_btn"},[i("a",{staticClass:"operation-btn confirm",on:{click:t.handleClick}},[t._v("\n    认领此房源\n  ")]),i("van-popup",{model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[t.bindPhoneSuccess?i("div",{staticClass:"captch_wrap"},[i("div",{staticClass:"close",on:{click:function(e){return e.stopPropagation(),t.changeShow(e)}}},[t._v("×")]),i("div",{staticClass:"ok"}),i("h5",[t._v("恭喜，您已成功认领此房源！")]),i("span",[t._v("您可以使用App管理房源、与客户沟通")]),i("van-button",{staticClass:"enter-btn operation-btn confirm",attrs:{size:"small"},on:{click:function(e){return e.stopPropagation(),t.reload(e)}}},[t._v("点击查看")])],1):i("div",{staticClass:"captch_wrap"},[i("div",{staticClass:"close",on:{click:function(e){return e.stopPropagation(),t.changeShow(e)}}},[t._v("×")]),i("p",[t._v("如有租客跟您联系，您将收到短信通知")]),i("van-row",[i("van-field",{attrs:{clearable:"",placeholder:"请输入手机号"},on:{blur:t.onBlur},model:{value:t.phone,callback:function(e){t.phone=e},expression:"phone"}})],1),i("van-row",[i("van-field",{attrs:{center:"",placeholder:"请输入验证码"},on:{blur:t.onBlur},model:{value:t.code,callback:function(e){t.code=e},expression:"code"}},[i("van-button",{attrs:{slot:"button",size:"small",type:"primary",disabled:t.disabled},on:{click:function(e){return e.stopPropagation(),t.captchaMessage(e)}},slot:"button"},[t._v(t._s(t.btnText))])],1)],1),i("span",{staticClass:"errMsg"},[t._v(t._s(t.errMsg))]),i("van-button",{staticClass:"enter-btn operation-btn confirm",attrs:{size:"small"},on:{click:function(e){return e.stopPropagation(),t.bindPhoneBtn(e)}}},[t._v("确定")])],1)])],1)},Ct=[],kt=function(t){function e(){var t;return Object(r["a"])(this,e),t=Object(l["a"])(this,Object(u["a"])(e).apply(this,arguments)),t.timer=null,t.phone="",t.code="",t.disabled=!1,t.show=!1,t.errMsg="",t.btnText="获取验证码",t.bindPhoneSuccess=!1,t}return Object(c["a"])(e,[{key:"Show",value:function(){this.show||this.resetStatus()}},{key:"handleClick",value:function(){""===this.account.user.phone?(this.show=!0,this.bindPhoneSuccess=!1):this.handleClaimRoom()}},{key:"bindPhoneBtn",value:function(){var t=this;if(""!==this.phone)if(""!==this.code){if(this.testPhone()){this.bindPhone().then(function(){t.handleClaimRoom()})}}else this.errMsg="验证码不能为空";else this.errMsg="手机号不能为空"}},{key:"bindPhone",value:function(){var t=Object(a["a"])(regeneratorRuntime.mark(function t(){var e=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise(function(t,i){e.bindUserPhone({data:{phone:e.phone,captcha:e.code,force:0},success:function(){t&&t()},fail:function(){i&&i()}})}));case 1:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},{key:"handleClaimRoom",value:function(){var t=Object(a["a"])(regeneratorRuntime.mark(function t(){var e=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise(function(t,i){e.claimRoom({data:{id:e.bedDetail.room.id},success:function(){e.show=!0,e.bindPhoneSuccess=!0,t&&t()}})}));case 1:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},{key:"captchaMessage",value:function(){var t=this;if(this.testPhone()){clearInterval(this.timer),this.disabled=!0;var e=60;this.btnText="重新发送(".concat(e,")s"),this.timer=setInterval(function(){e--,e<=0?(t.disabled=!1,t.btnText="获取验证码",clearInterval(t.timer)):t.btnText="重新发送(".concat(e,")s")},1e3),this.sendCaptchaMessage({data:{phone:this.phone},fail:function(){t.disabled=!1,clearInterval(t.timer),t.btnText="获取验证码"}})}}},{key:"testPhone",value:function(){return/^1[34578]\d{9}$/.test(this.phone)?(this.errMsg="",!0):(this.errMsg="手机号码有误",!1)}},{key:"reload",value:function(){window.location.reload()}},{key:"changeShow",value:function(){this.show=!this.show}},{key:"resetStatus",value:function(){this.phone="",this.code="",this.disabled=!1,this.errMsg="",this.btnText="获取验证码",this.bindPhoneSuccess=!1,clearTimeout(this.timer)}},{key:"onBlur",value:function(t){document.body&&(document.body.scrollTop=document.body.scrollTop)}}]),Object(s["a"])(e,t),e}(f["c"]);d["a"]([Object(p["b"])(function(t){return t.AccountModule.account})],kt.prototype,"account",void 0),d["a"]([Object(p["b"])(function(t){return t.ResidenceModule.bed_detail})],kt.prototype,"bedDetail",void 0),d["a"]([Object(p["a"])("sendCaptchaMessage")],kt.prototype,"sendCaptchaMessage",void 0),d["a"]([Object(p["a"])("bindUserPhone")],kt.prototype,"bindUserPhone",void 0),d["a"]([Object(p["a"])("claimRoom")],kt.prototype,"claimRoom",void 0),d["a"]([Object(f["d"])("show")],kt.prototype,"Show",null),kt=d["a"]([f["a"]],kt);var It=kt,xt=It,St=(i("06e0"),Object(j["a"])(xt,Dt,Ct,!1,null,"0193e487",null));St.options.__file="link_claim.vue";var Pt=St.exports,Tt=function(t){function e(){var t;return Object(r["a"])(this,e),t=Object(l["a"])(this,Object(u["a"])(e).apply(this,arguments)),t.loading=!1,t.ifWeixin=!1,t}return Object(c["a"])(e,[{key:"changeRoute",value:function(){"bedDetail"===this.$route.name&&this.getBedDetail()}},{key:"getBedDetail",value:function(){var t=Object(a["a"])(regeneratorRuntime.mark(function t(){var e=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise(function(t,i){e.loading=!0,e.viewBedDetail({data:{id:e.$route.params.id,biz:!!e.$route.query.biz&&"true"===e.$route.query.biz.toString()},success:function(){e.loading=!1,t&&t()},fail:function(){window.history.length<=1?e.$router.push({path:"/"}):e.$router.back(),i()}})}));case 1:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},{key:"share",value:function(){var t={title:"".concat(this.bedDetail.room.localization,"-").concat(this.bedDetail.bed.title," [zuber租房]"),link:window.location.href,desc:this.bedDetail.room.summary,imgUrl:this.bedDetail.bed.photo.src};this.configShareInfo({info:t})}},{key:"created",value:function(){var t=this;this.getBedDetail().then(function(){t.share()})}}]),Object(s["a"])(e,t),e}(f["c"]);d["a"]([Object(p["a"])("viewBedDetail")],Tt.prototype,"viewBedDetail",void 0),d["a"]([Object(p["a"])("configShareInfo")],Tt.prototype,"configShareInfo",void 0),d["a"]([Object(p["b"])(function(t){return t.ResidenceModule.bed_detail})],Tt.prototype,"bedDetail",void 0),d["a"]([Object(p["b"])(function(t){return t.ResidenceModule.requesting})],Tt.prototype,"requesting",void 0),d["a"]([Object(f["d"])("$route")],Tt.prototype,"changeRoute",null),Tt=d["a"]([Object(f["a"])({components:{RoomDetailInfo:X,RoomOtherInfo:at,RoomDescription:ht,RoomType:wt,Loading:Ot["a"],CommonBar:jt["a"],LinkClaim:Pt}})],Tt);var zt=Tt,$t=zt,Mt=(i("a26b"),Object(j["a"])($t,o,n,!1,null,null,null));Mt.options.__file="index.vue";e["default"]=Mt.exports},d4c0:function(t,e,i){var o=i("0d58"),n=i("2621"),a=i("52a7");t.exports=function(t){var e=o(t),i=n.f;if(i){var r,s=i(t),c=a.f,l=0;while(s.length>l)c.call(t,r=s[l++])&&e.push(r)}return e}},d58f:function(t,e,i){},e1d2:function(t,e,i){},eb74:function(t,e,i){"use strict";var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"person_wrap"},[i("div",{staticClass:"person_img_wrap photo",style:"background-image: url("+t.info.avatar.src+");"},["m"===t.info.gender?i("i",{staticClass:"gender_icon iconfont m"},[t._v("")]):i("i",{staticClass:"gender_icon iconfont f"},[t._v("")])]),i("div",{staticClass:"person_img_des"},[i("div",[i("p",{staticClass:"text-ellipsis"},[t._v(t._s(t.info.username))]),1===t.info.identity_validate_status?i("span",{staticClass:"active"},[i("i",{staticClass:"iconfont"},[t._v("")]),t._v("\n        实名\n      ")]):i("span",[t._v("未实名")])]),t._v("\n    "+t._s(t.info.client_attr.profession)+"  "+t._s(t.info.client_attr.xingzuo?" | "+t.info.client_attr.xingzuo:"")+"\n    "),t._t("userDetail")],2),t.formatTime?i("div",{staticClass:"person_time"},[t._v("\n    "+t._s(t.formatTime)+"\n  ")]):t._e()])},n=[],a=i("c665"),r=i("dc0a"),s=i("d328"),c=i("11d9"),l=i("9ab4"),u=i("60a3"),d=function(t){function e(){return Object(a["a"])(this,e),Object(s["a"])(this,Object(c["a"])(e).apply(this,arguments))}return Object(r["a"])(e,t),e}(u["c"]);l["a"]([Object(u["b"])({default:{}})],d.prototype,"info",void 0),l["a"]([Object(u["b"])({default:""})],d.prototype,"formatTime",void 0),d=l["a"]([u["a"]],d);var f=d,p=f,h=(i("ff61"),i("2877")),b=Object(h["a"])(p,o,n,!1,null,null,null);b.options.__file="person_img.vue";e["a"]=b.exports},ff61:function(t,e,i){"use strict";var o=i("c8b0"),n=i.n(o);n.a}}]);
//# sourceMappingURL=chunk-4bb68818.3e22f78b.js.map