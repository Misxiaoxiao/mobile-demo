(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0cd949db"],{"0138":function(t,e,a){},"28b1":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"company_wrap"},[t.requesting?t._e():a("div",{staticClass:"company_detail_wrap"},[a("div",{staticClass:"company_detail_info"},[a("company-img",{attrs:{info:t.companyDetail.company}},[a("div",{staticClass:"text-s company_des",attrs:{slot:"companyDetail"},slot:"companyDetail"},[t._v("\n          "+t._s(t.detailContent)+"\n          "),"..."===t.detailContent?a("div",{on:{click:t.clickMore}},[t._v(t._s(t.more?"收起":"查看更多"))]):t._e()])])],1),a("company-staffs"),a("div",{staticClass:"room_list_wrap"},[a("company-tab",{attrs:{index:t.currentIndex}}),t._l(t.companyDetail.rooms,function(t,e){return a("div",{key:e,staticClass:"van-cell"},[a("room-list",{attrs:{room:t.room}})],1)})],2)],1),a("common-bar")],1)},n=[],s=(a("7f7f"),a("c665")),o=a("dc0a"),r=a("aa9a"),c=a("d328"),l=a("11d9"),u=(a("cadf"),a("551c"),a("097d"),a("9ab4")),d=a("60a3"),m=a("4bb5"),p=a("d784"),_=a("cdb0"),b=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"company_person_wrap"},[a("div",{staticClass:"company_person_title text--title-s"},[t._v("\n    运营人员\n  ")]),a("div",{staticClass:"company_person_list"},[a("my-slider",{attrs:{itemWidth:90,slotArr:t.slotArr}},t._l(t.companyDetail.staffs,function(e,i){return a("div",{key:i,staticClass:"staffs_item",attrs:{slot:i},slot:i},[a("div",{staticClass:"staffs_img",style:"background: url("+e.avatar.src+") no-repeat center; background-size: 100%;"}),a("div",{staticClass:"staffs_name text-o1 text-ellipsis"},[t._v("\n          "+t._s(e.username)+"\n        ")]),a("div",{staticClass:"staffs_btn button-b1-active",on:{click:function(e){return e.stopPropagation(),t.clickBtn(e)}}},[t._v("\n          私信联系\n        ")])])}))],1)])},f=[],v=a("88df"),y=function(t){function e(){return Object(s["a"])(this,e),Object(c["a"])(this,Object(l["a"])(e).apply(this,arguments))}return Object(r["a"])(e,[{key:"clickBtn",value:function(){this.$dialog.alert({message:"请下载APP，使用私信聊天功能"})}},{key:"slotArr",get:function(){return this.companyDetail.staffs?this.companyDetail.staffs.map(function(t,e){return e}):[]}}]),Object(o["a"])(e,t),e}(d["c"]);u["a"]([Object(m["b"])(function(t){return t.UserModule.company_detail})],y.prototype,"companyDetail",void 0),y=u["a"]([Object(d["a"])({components:{MySlider:v["a"]}})],y);var h=y,j=h,O=(a("2aa4"),a("2877")),C=Object(O["a"])(j,b,f,!1,null,null,null);C.options.__file="company_staffs.vue";var g=C.exports,k=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"search_tab"},[a("div",{class:"tab_item"+(0===t.index?" tab_item_active":"")},[t._v("在租房源")]),a("div",{staticClass:"tab_line",style:{transform:"translate("+(0===t.index?"0px":"93px")+")"}})])},w=[],x=function(t){function e(){return Object(s["a"])(this,e),Object(c["a"])(this,Object(l["a"])(e).apply(this,arguments))}return Object(o["a"])(e,t),e}(d["c"]);u["a"]([Object(d["b"])({default:0})],x.prototype,"index",void 0),x=u["a"]([d["a"]],x);var D=x,I=D,z=(a("6b10"),Object(O["a"])(I,k,w,!1,null,null,null));z.options.__file="company_tab.vue";var $=z.exports,T=a("b56e"),A=a("3fe9"),E=function(t){function e(){var t;return Object(s["a"])(this,e),t=Object(c["a"])(this,Object(l["a"])(e).apply(this,arguments)),t.loading=!1,t.currentIndex=0,t.more=!1,t}return Object(r["a"])(e,[{key:"changeRoute",value:function(){"company"===this.$route.name&&this.getDetail()}},{key:"getDetail",value:function(){var t=this;this.loading=!0,this.viewCompanyDetail({data:{id:this.$route.params.id},success:function(){t.loading=!1}})}},{key:"clickMore",value:function(){this.more=!this.more}},{key:"mounted",value:function(){this.getDetail()}},{key:"detailContent",get:function(){var t=this.companyDetail.company?this.companyDetail.company.desc:"";return this.more?t:t.substring(-1,35)+"..."}}]),Object(o["a"])(e,t),e}(d["c"]);u["a"]([Object(m["b"])(function(t){return t.UserModule.company_detail})],E.prototype,"companyDetail",void 0),u["a"]([Object(m["b"])(function(t){return t.UserModule.requesting})],E.prototype,"requesting",void 0),u["a"]([Object(m["a"])("viewCompanyDetail")],E.prototype,"viewCompanyDetail",void 0),u["a"]([Object(d["d"])("$route")],E.prototype,"changeRoute",null),E=u["a"]([Object(d["a"])({components:{CommonHeader:p["a"],CompanyImg:_["a"],CompanyStaffs:g,CompanyTab:$,RoomList:T["a"],CommonBar:A["a"]}})],E);var M=E,S=M,q=(a("81b1"),Object(O["a"])(S,i,n,!1,null,null,null));q.options.__file="index.vue";e["default"]=q.exports},"2aa4":function(t,e,a){"use strict";var i=a("b7c7"),n=a.n(i);n.a},3444:function(t,e,a){},"3bb9":function(t,e,a){},"3d48":function(t,e,a){},"5c06":function(t,e,a){"use strict";var i=a("3444"),n=a.n(i);n.a},"6b10":function(t,e,a){"use strict";var i=a("3d48"),n=a.n(i);n.a},"6d2a":function(t,e,a){"use strict";var i=a("f14e"),n=a.n(i);n.a},"72c5":function(t,e,a){"use strict";var i=a("b1e1"),n=a.n(i);n.a},"74da":function(t,e,a){"use strict";var i=a("a0b7"),n=a.n(i);n.a},"81b1":function(t,e,a){"use strict";var i=a("0138"),n=a.n(i);n.a},"88df":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{ref:"slider",staticClass:"my_slider"},[a("div",{staticClass:"slider_wrap",style:"width: "+(t.itemWidth*t.slotArr.length+5*(t.slotArr.length+1))+"px"},t._l(t.slotArr,function(e,i){return a("div",{key:i,staticClass:"slider"},[t._t(e)],2)}))])},n=[],s=a("c665"),o=a("dc0a"),r=a("aa9a"),c=a("d328"),l=a("11d9"),u=a("9ab4"),d=a("60a3"),m=a("1fba"),p=function(t){function e(){var t;return Object(s["a"])(this,e),t=Object(c["a"])(this,Object(l["a"])(e).apply(this,arguments)),t.mySlider=null,t}return Object(r["a"])(e,[{key:"mounted",value:function(){this.mySlider=new m["a"](this.$refs.slider,{scrollX:!0,scrollY:!1,click:!0})}}]),Object(o["a"])(e,t),e}(d["c"]);u["a"]([Object(d["b"])({default:[]})],p.prototype,"slotArr",void 0),u["a"]([Object(d["b"])({default:0})],p.prototype,"itemWidth",void 0),p=u["a"]([d["a"]],p);var _=p,b=_,f=(a("74da"),a("2877")),v=Object(f["a"])(b,i,n,!1,null,null,null);v.options.__file="slider.vue";e["a"]=v.exports},a0b7:function(t,e,a){},b14d:function(t,e,a){"use strict";var i=a("3bb9"),n=a.n(i);n.a},b1e1:function(t,e,a){},b56e:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"room_list_item_wrap"},[a("div",{staticClass:"room_list_item",on:{click:function(e){e.stopPropagation(),t.view(t.roomItem)}}},[a("div",{staticClass:"room_list_item_left"},[a("my-image",{attrs:{src:t.roomItem.photo,hasVideo:t.roomItem.hasVideo}})],1),a("div",{staticClass:"room_list_item_right"},[a("h4",[t._v(t._s(t.roomItem.fullTitle))]),a("p",{staticClass:"text-ellipsis"},[t._v(t._s(t.roomItem.roomTitle))]),"string"===typeof t.roomItem.types?a("div",{staticClass:"room_type"},[t._v("\n        "+t._s(t.roomItem.types)+"\n      ")]):t._e(),a("div",{directives:[{name:"show",rawName:"v-show",value:"object"===typeof t.roomItem.types,expression:"(typeof roomItem.types) === 'object'"}],staticClass:"room_type"},t._l(t.roomItem.types,function(e,i){return""!==e?a("span",{key:i},[t._v(t._s(e))]):t._e()})),a("div",{staticClass:"room_info"},[a("p",[t._v(t._s(t.roomItem.money)),a("span",[t._v("元/月")])]),a("span",[t._v(t._s(t.roomItem.refreshTime))])])])]),t.room.may_expire?a("div",{staticClass:"room_type"},[t._v("可能已出租")]):t._e()])},n=[],s=(a("f386"),a("7f7f"),a("ac4d"),a("8a81"),a("ac6a"),a("c665")),o=a("dc0a"),r=a("aa9a"),c=a("d328"),l=a("11d9"),u=(a("cadf"),a("551c"),a("097d"),a("9ab4")),d=a("60a3"),m=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"image_wrap photo",style:"background-image: url("+t.src+");"},[a("div",{class:t.hasVideo?"has_video_icon":""})])},p=[],_=function(t){function e(){return Object(s["a"])(this,e),Object(c["a"])(this,Object(l["a"])(e).apply(this,arguments))}return Object(o["a"])(e,t),e}(d["c"]);u["a"]([Object(d["b"])({default:{}})],_.prototype,"src",void 0),u["a"]([Object(d["b"])({default:{}})],_.prototype,"hasVideo",void 0),_=u["a"]([d["a"]],_);var b=_,f=b,v=(a("6d2a"),a("2877")),y=Object(v["a"])(f,m,p,!1,null,null,null);y.options.__file="image.vue";var h=y.exports,j=a("3def"),O=function(t){function e(){return Object(s["a"])(this,e),Object(c["a"])(this,Object(l["a"])(e).apply(this,arguments))}return Object(r["a"])(e,[{key:"setType",value:function(t){var e=!0,a=!1,i=void 0;try{for(var n,s=j["h"][Symbol.iterator]();!(e=(n=s.next()).done);e=!0){var o=n.value;if(o.value===t)return o.key}}catch(t){a=!0,i=t}finally{try{e||null==s.return||s.return()}finally{if(a)throw i}}return""}},{key:"view",value:function(t){if("room"===this.$route.name){var e=document.querySelector(".van-pull-refresh");sessionStorage.setItem("scrollTop",e.scrollTop)}this.$router.push({name:"bedDetail",params:{id:t.roomId},query:{biz:t.biz}})}},{key:"roomItem",get:function(){var t=this.room;if(t){var e="",a="";t.biz?(e=2===t.biz_attr.type?t.biz_attr.beds[0].number:"",a=1===t.biz_attr.type?t.biz_attr.beds[0].title:t.title):(a="".concat(this.setType(t.client_attr.beds[0].type),"·").concat(t.client_attr.beds[0].title),e=[t.client_attr.beds[0].dateDetail,0===t.client_attr.beds[0].sex?"":1===t.client_attr.beds[0].sex?"仅限男生":"仅限女生",0===t.client_attr.beds[0].short_rent?"":"可短租"]);var i={biz:t.biz,roomId:t.biz?t.biz_attr.beds[0].id:t.client_attr.beds[0].id,fullTitle:t.full_title,roomTitle:a,photo:t.biz?t.biz_attr.beds[0].photo.small:t.client_attr.beds[0].photo.small,types:e,money:t.biz?t.biz_attr.beds[0].money:t.client_attr.beds[0].money,refreshTime:t.format_last_modify_time,hasVideo:t.biz?t.biz_attr.beds[0].has_video:t.client_attr.beds[0].has_video};return i}}}]),Object(o["a"])(e,t),e}(d["c"]);u["a"]([Object(d["b"])({default:{}})],O.prototype,"room",void 0),O=u["a"]([Object(d["a"])({components:{MyImage:h}})],O);var C=O,g=C,k=(a("b14d"),Object(v["a"])(g,i,n,!1,null,null,null));k.options.__file="room.vue";e["a"]=k.exports},b7c7:function(t,e,a){},cdb0:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"company_img_wrap"},[""!==t.info?a("div",{staticClass:"div_one"},[a("div",{staticClass:"company_wrap_left"},[a("div",{staticClass:"company_img photo",style:"background-image: url("+t.info.logo.src+");"}),a("div",{staticClass:"company_username text-ellipsis"},[t._v(t._s(t.info.name))])])]):t._e(),t._t("companyDetail")],2)},n=[],s=a("c665"),o=a("dc0a"),r=a("d328"),c=a("11d9"),l=a("9ab4"),u=a("60a3"),d=function(t){function e(){return Object(s["a"])(this,e),Object(r["a"])(this,Object(c["a"])(e).apply(this,arguments))}return Object(o["a"])(e,t),e}(u["c"]);l["a"]([Object(u["b"])({default:""})],d.prototype,"info",void 0),d=l["a"]([u["a"]],d);var m=d,p=m,_=(a("5c06"),a("2877")),b=Object(_["a"])(p,i,n,!1,null,null,null);b.options.__file="company_img.vue";e["a"]=b.exports},d784:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"common_header_wrap"},[a("div",{staticClass:"common_header_wrap_left"},[a("i",{staticClass:"iconfont",on:{click:function(e){return e.stopPropagation(),t.goBack(e)}}},[t._v("")])]),a("div",{staticClass:"common_header_wrap_title"},[t._v("\n    "+t._s(t.label)+"\n  ")]),a("div",{staticClass:"common_header_wrap_right"},[t._t("header_right")],2)])},n=[],s=a("c665"),o=a("dc0a"),r=a("aa9a"),c=a("d328"),l=a("11d9"),u=a("9ab4"),d=a("60a3"),m=function(t){function e(){return Object(s["a"])(this,e),Object(c["a"])(this,Object(l["a"])(e).apply(this,arguments))}return Object(r["a"])(e,[{key:"goBack",value:function(){window.history.length<=1?this.$router.push({path:"/"}):this.$router.back()}}]),Object(o["a"])(e,t),e}(d["c"]);u["a"]([Object(d["b"])({default:""})],m.prototype,"label",void 0),m=u["a"]([d["a"]],m);var p=m,_=p,b=(a("72c5"),a("2877")),f=Object(b["a"])(_,i,n,!1,null,null,null);f.options.__file="header.vue";e["a"]=f.exports},f14e:function(t,e,a){}}]);
//# sourceMappingURL=chunk-0cd949db.8945694f.js.map