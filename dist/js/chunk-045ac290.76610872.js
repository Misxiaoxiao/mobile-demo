(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-045ac290"],{"4bca":function(t,a,e){},5018:function(t,a,e){"use strict";var n=e("4bca"),i=e.n(n);i.a},5945:function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"map_wrap"},[e("i",{staticClass:"iconfont",on:{click:function(a){return a.stopPropagation(),t.goBack(a)}}},[t._v("\n    \n  ")]),e("div",{attrs:{id:"container"}})])},i=[],r=e("c665"),o=e("dc0a"),u=e("aa9a"),c=e("d328"),s=e("11d9"),l=e("9ab4"),p=e("60a3"),d=window,h=d.AMap,f=function(t){function a(){var t;return Object(r["a"])(this,a),t=Object(c["a"])(this,Object(s["a"])(a).apply(this,arguments)),t.map=null,t}return Object(u["a"])(a,[{key:"goBack",value:function(){window.history.length<=1?this.$router.push({path:"/"}):this.$router.back()}},{key:"mounted",value:function(){var t=[this.$route.query.longitude,this.$route.query.latitude];this.map=new h.Map("container",{resizeEnable:!0,center:t,zoom:16}),this.addMarker()}},{key:"addMarker",value:function(){var t=[this.$route.query.longitude,this.$route.query.latitude];this.map.clearMap();new h.Marker({map:this.map,position:t})}}]),Object(o["a"])(a,t),a}(p["c"]);f=l["a"]([p["a"]],f);var v=f,b=v,k=(e("5018"),e("2877")),w=Object(k["a"])(b,n,i,!1,null,null,null);w.options.__file="index.vue";a["default"]=w.exports}}]);
//# sourceMappingURL=chunk-045ac290.76610872.js.map