(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-47d957e6"],{"2d26":function(t,e,i){},3322:function(t,e,i){"use strict";var o=i("d58f"),a=i.n(o);a.a},3444:function(t,e,i){},"34c1":function(t,e,i){"use strict";var o=i("5f7e"),a=i.n(o);a.a},"46e4":function(t,e,i){},"4d70":function(t,e,i){t.exports=i.p+"img/loading-spin.51800bac.svg"},5165:function(t,e,i){"use strict";var o=i("b9d7"),a=i.n(o);a.a},5677:function(t,e,i){"use strict";var o=i("2d26"),a=i.n(o);a.a},"5b7a":function(t,e,i){"use strict";var o=i("e1d2"),a=i.n(o);a.a},"5c06":function(t,e,i){"use strict";var o=i("3444"),a=i.n(o);a.a},"5f7e":function(t,e,i){},6351:function(t,e,i){"use strict";var o=i("c48b"),a=i.n(o);a.a},"74da":function(t,e,i){"use strict";var o=i("a0b7"),a=i.n(o);a.a},7709:function(t,e,i){},"7ab0":function(t,e,i){"use strict";var o=i("c008"),a=i.n(o);a.a},"88df":function(t,e,i){"use strict";var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"slider",staticClass:"my_slider"},[i("div",{staticClass:"slider_wrap",style:"width: "+(t.itemWidth*t.slotArr.length+5*(t.slotArr.length+1))+"px"},t._l(t.slotArr,function(e,o){return i("div",{key:o,staticClass:"slider"},[t._t(e)],2)}))])},a=[],n=i("c665"),s=i("dc0a"),r=i("aa9a"),c=i("d328"),l=i("11d9"),d=i("9ab4"),u=i("60a3"),h=i("1fba"),p=function(t){function e(){var t;return Object(n["a"])(this,e),t=Object(c["a"])(this,Object(l["a"])(e).apply(this,arguments)),t.mySlider=null,t}return Object(r["a"])(e,[{key:"mounted",value:function(){this.mySlider=new h["a"](this.$refs.slider,{scrollX:!0,scrollY:!1,click:!0})}}]),Object(s["a"])(e,t),e}(u["c"]);d["a"]([Object(u["b"])({default:[]})],p.prototype,"slotArr",void 0),d["a"]([Object(u["b"])({default:0})],p.prototype,"itemWidth",void 0),p=d["a"]([u["a"]],p);var f=p,b=f,_=(i("74da"),i("2877")),v=Object(_["a"])(b,o,a,!1,null,null,null);v.options.__file="slider.vue";e["a"]=v.exports},"8d4e":function(t,e,i){},"9b1c":function(t,e,i){"use strict";var o=i("46e4"),a=i.n(o);a.a},a0b7:function(t,e,i){},a26b:function(t,e,i){"use strict";var o=i("a757"),a=i.n(o);a.a},a757:function(t,e,i){},aac7:function(t,e,i){"use strict";var o=i("8d4e"),a=i.n(o);a.a},b9d7:function(t,e,i){},bf93:function(t,e,i){"use strict";var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"loading-spin"},[i("img",{attrs:{src:t.loading,alt:"加载中",height:"28"}})])},a=[],n=i("c665"),s=i("dc0a"),r=i("d328"),c=i("11d9"),l=i("9ab4"),d=i("60a3"),u=function(t){function e(){var t;return Object(n["a"])(this,e),t=Object(r["a"])(this,Object(c["a"])(e).apply(this,arguments)),t.loading=i("4d70"),t}return Object(s["a"])(e,t),e}(d["c"]);u=l["a"]([d["a"]],u);var h=u,p=h,f=(i("3322"),i("2877")),b=Object(f["a"])(p,o,a,!1,null,null,null);b.options.__file="loading.vue";e["a"]=b.exports},c008:function(t,e,i){},c48b:function(t,e,i){},c5c1:function(t,e,i){"use strict";var o=i("7709"),a=i.n(o);a.a},c8b0:function(t,e,i){},cdb0:function(t,e,i){"use strict";var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"company_img_wrap"},[""!==t.info?i("div",{staticClass:"div_one"},[i("div",{staticClass:"company_wrap_left"},[i("div",{staticClass:"company_img photo",style:"background-image: url("+t.info.logo.src+");"}),i("div",{staticClass:"company_username text-ellipsis"},[t._v(t._s(t.info.name))])])]):t._e(),t._t("companyDetail")],2)},a=[],n=i("c665"),s=i("dc0a"),r=i("d328"),c=i("11d9"),l=i("9ab4"),d=i("60a3"),u=function(t){function e(){return Object(n["a"])(this,e),Object(r["a"])(this,Object(c["a"])(e).apply(this,arguments))}return Object(s["a"])(e,t),e}(d["c"]);l["a"]([Object(d["b"])({default:""})],u.prototype,"info",void 0),u=l["a"]([d["a"]],u);var h=u,p=h,f=(i("5c06"),i("2877")),b=Object(f["a"])(p,o,a,!1,null,null,null);b.options.__file="company_img.vue";e["a"]=b.exports},ce76:function(t,e,i){"use strict";i.r(e);var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.bedDetail.can_claim&&!t.requesting?i("div",{staticClass:"room_detail_wrap"},[i("common-bar",{attrs:{top:t.bedDetail.can_claim}}),i("div",{staticClass:"room_detail_content",style:t.bedDetail.can_claim?"margin-top: 60px":""},[i("div",[i("room-detail-info"),i("room-other-info"),i("room-description",{attrs:{showPerson:t.bedDetail.can_claim}})],1)]),i("link-claim")],1):t.requesting?i("loading"):i("div",{staticClass:"room_detail_wrap"},[i("div",{staticClass:"room_detail_content",style:t.bedDetail.can_claim?"margin-top: 60px":""},[i("room-type"),i("div",[i("room-detail-info"),i("room-other-info"),i("room-description")],1)],1),i("common-bar")],1)},a=[],n=(i("f386"),i("ac4d"),i("8a81"),i("ac6a"),i("6b54"),i("96cf"),i("3040")),s=(i("7f7f"),i("c665")),r=i("dc0a"),c=i("aa9a"),l=i("d328"),d=i("11d9"),u=(i("cadf"),i("551c"),i("097d"),i("9ab4")),h=i("60a3"),p=i("4bb5"),f=i("3def"),b=function(){var t=this,e=t.$createElement,i=t._self._c||e;return""!==t.detailInfo?i("div",{staticClass:"room_detail_info"},[i("my-slider",{attrs:{itemWidth:290,slotArr:t.slotArr}},[i("div",{staticClass:"swiper_item_wrap",attrs:{slot:"video_wrap"},slot:"video_wrap"},[i("video-detail",{attrs:{hasVideo:t.detailInfo.hasVideo,video:t.detailInfo.video,refreshTime:t.detailInfo.refreshTime}})],1),i("div",{staticClass:"swiper_item_wrap",attrs:{slot:"image_wrap"},slot:"image_wrap"},[i("image-detail",{attrs:{photos:t.detailInfo.photos,photoSrc:t.detailInfo.photo}})],1)]),i("room-title",{attrs:{detailInfo:t.detailInfo}}),i("room-location",{attrs:{detailInfo:t.detailInfo,gotoMap:t.gotoMap}})],1):t._e()},_=[],v=i("88df"),m=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.hasVideo?i("div",{staticClass:"video_detail_wrap photo",style:"background-image: url("+t.video.screenshot+");",on:{click:function(e){return e.stopPropagation(),t.clickVideo(e)}}},[i("i",{staticClass:"iconfont"},[t._v("")]),i("span",[t._v(t._s(t.refreshTime.indexOf("刷新")>0?t.refreshTime:t.refreshTime+"刷新"))])]):i("div",{staticClass:"video_detail_wrap photo no_video",on:{click:function(e){return e.stopPropagation(),t.clickVideo(e)}}},[i("span",[t._v(t._s(t.refreshTime.indexOf("刷新")>0?t.refreshTime:t.refreshTime+"刷新"))])])},y=[],g=function(t){function e(){return Object(s["a"])(this,e),Object(l["a"])(this,Object(d["a"])(e).apply(this,arguments))}return Object(c["a"])(e,[{key:"clickVideo",value:function(){this.$dialog.alert({message:this.hasVideo?"请在App中打开播放":"请联系对方提供视频"})}}]),Object(r["a"])(e,t),e}(h["c"]);u["a"]([Object(h["b"])({default:!1})],g.prototype,"hasVideo",void 0),u["a"]([Object(h["b"])({default:{}})],g.prototype,"video",void 0),u["a"]([Object(h["b"])({default:""})],g.prototype,"refreshTime",void 0),g=u["a"]([h["a"]],g);var D=g,O=D,j=(i("c5c1"),i("2877")),w=Object(j["a"])(O,m,y,!1,null,null,null);w.options.__file="video_detail.vue";var C=w.exports,k=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"image_detail_wrap photo",style:"background-image: url("+t.photoSrc+");",on:{click:function(e){return e.stopPropagation(),t.showImagePreview(e)}}},[t.photos.length>0?i("span",[i("i",{staticClass:"iconfont"},[t._v("")]),t._v("\n    "+t._s(t.photos.length)+"\n  ")]):t._e()])},I=[],T=i("b970"),x=function(t){function e(){var t;return Object(s["a"])(this,e),t=Object(l["a"])(this,Object(d["a"])(e).apply(this,arguments)),t.instance=null,t.viewing=!1,t}return Object(c["a"])(e,[{key:"showImagePreview",value:function(t,e){var i=this;if(this.viewing=!0,this.photos.length>0){var o=this;this.$router.push({name:"image"}),this.instance=Object(T["a"])({images:o.Images,startPosition:"number"===typeof t?t:0,onClose:function(){o.viewing=!1,"bedDetail"!==o.$route.name&&history.back()}}),e&&setTimeout(function(){i.instance.close()},e)}else this.$dialog.alert({message:"暂无照片，请上传图片"})}},{key:"mounted",value:function(){var t=this;window.addEventListener("popstate",function(){t.viewing&&(t.instance&&t.instance.close(),t.viewing=!1)})}},{key:"Images",get:function(){return this.photos.length>0?this.photos.map(function(t,e){return t.src}):[]}}]),Object(r["a"])(e,t),e}(h["c"]);u["a"]([Object(h["b"])({default:""})],x.prototype,"photoSrc",void 0),u["a"]([Object(h["b"])({default:{}})],x.prototype,"photos",void 0),x=u["a"]([h["a"]],x);var $=x,z=$,P=(i("5165"),Object(j["a"])(z,k,I,!1,null,null,null));P.options.__file="image_detail.vue";var M=P.exports,S=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"room_detail_title"},[t.detailInfo.biz&&1===t.detailInfo.type?i("div",[i("h3",[t._v(t._s(t.detailInfo.roomTitle))]),i("div",{staticClass:"room_detail_type_info"},[i("span",[t._v(t._s(t.roomTypeInfo))])]),i("div",{staticClass:"room_detail_type_price"},[i("span",[t._v(t._s(t.detailInfo.money))]),i("i",[t._v("元/月")]),t._v("·"+t._s(t.detailInfo.dateDetail)+"\n    ")]),i("div",{staticClass:"room_detail_type_other"},[i("span",[t._v("朝"+t._s(t.detailInfo.orientation))]),1===t.detailInfo.privateBathroom?i("span",[t._v("独卫")]):t._e(),1===t.detailInfo.veranda?i("span",[t._v("阳台")]):t._e(),1===t.detailInfo.window?i("span",[t._v("飘窗")]):t._e(),i("span",{staticClass:"active",on:{click:function(e){return e.stopPropagation(),t.gotoDescription(e)}}},[t._v(t._s(t.detailInfo.roomTypeAffirm)+" "),i("i",{staticClass:"iconfont"},[t._v("")])])])]):t.detailInfo.biz&&2===t.detailInfo.type?i("div",[i("h3",[t._v(t._s(t.detailInfo.roomTitle))]),i("div",{staticClass:"room_detail_type_price"},[i("span",[t._v(t._s(t.detailInfo.money))]),i("i",[t._v("元/月")]),t._v("·"+t._s(t.detailInfo.dateDetail)+"\n      "),i("i",{staticClass:"right"},[t._v(t._s(t.roomTypeInfo))])]),i("div",{staticClass:"room_detail_type_other"},[i("span",[t._v("朝"+t._s(t.detailInfo.orientation))]),1===t.detailInfo.privateBathroom?i("span",[t._v("独卫")]):t._e(),1===t.detailInfo.veranda?i("span",[t._v("阳台")]):t._e(),1===t.detailInfo.window?i("span",[t._v("飘窗")]):t._e(),i("span",{staticClass:"active",on:{click:function(e){return e.stopPropagation(),t.gotoDescription(e)}}},[t._v(t._s(t.detailInfo.roomTypeAffirm)+" "),i("i",{staticClass:"iconfont"},[t._v("")])])])]):i("div",[i("h3",[t._v(t._s(t.detailInfo.roomTitle))]),i("div",{staticClass:"room_detail_type_price"},[i("span",[t._v(t._s(t.detailInfo.money))]),i("i",[t._v("元/月")]),t._v("·"+t._s(t.detailInfo.dateDetail)+"\n      "),i("i",{staticClass:"right"},[t._v(t._s(t.roomTypeInfo))])]),i("div",{staticClass:"room_detail_type_other"},[0!==t.detailInfo.gender?i("span",[t._v(t._s(1===t.detailInfo.gender?"仅限男生":"仅限女生"))]):t._e(),0!==t.detailInfo.personLimit?i("span",[t._v(t._s("限"+t.numChinese[t.detailInfo.personLimit-1]+"人"))]):t._e(),i("span",{staticClass:"active",on:{click:function(e){return e.stopPropagation(),t.gotoDescription(e)}}},[t._v(t._s(t.detailInfo.roomTypeAffirm)+" "),i("i",{staticClass:"iconfont"},[t._v("")])])])])])},q=[],R=function(t){function e(){var t;return Object(s["a"])(this,e),t=Object(l["a"])(this,Object(d["a"])(e).apply(this,arguments)),t.numChinese=["一","二","三","四","五","六","七","八","九"],t}return Object(c["a"])(e,[{key:"gotoDescription",value:function(){this.$router.push({name:"descriptionRoom"})}},{key:"roomTypeInfo",get:function(){var t="",e=(0===this.detailInfo.bedCount?"":"".concat(this.detailInfo.bedCount,"室"))+(0===this.detailInfo.hallCount?"":"".concat(this.detailInfo.hallCount,"厅"))+(0===this.detailInfo.kitchenCount?"":"".concat(this.detailInfo.kitchenCount,"厨"))+(0===this.detailInfo.bathroomCount?"":"".concat(this.detailInfo.bathroomCount,"卫")),i=!this.detailInfo.biz||0!==this.detailInfo.bedSquareMeter&&""===this.detailInfo.bedSquareMeter||0!==this.detailInfo.roomSquareMeter&&""===this.detailInfo.roomSquareMeter?"":"".concat(this.detailInfo.bedSquareMeter,"/").concat(this.detailInfo.roomSquareMeter,"㎡ "),o=this.detailInfo.biz&&0!==this.detailInfo.floor&&0!==this.detailInfo.totalFloor?"".concat(this.detailInfo.floor,"/").concat(this.detailInfo.totalFloor,"楼"):"",a=1===this.detailInfo.elevator?"有电梯":2===this.detailInfo.elevator?"无电梯":"";return this.detailInfo.biz&&2===this.detailInfo.type?(t+=""!==t&&""!==i?" | "+i:i,t+=""!==t&&""!==o?" | "+o:o,t+=""!==t&&""!==a?" | "+a:a,t):(t+=""!==t&&""!==e?" | "+e:e,t+=""!==t&&""!==i?" | "+i:i,t+=""!==t&&""!==o?" | "+o:o,t+=""!==t&&""!==a?" | "+a:a,t)}}]),Object(r["a"])(e,t),e}(h["c"]);u["a"]([Object(h["b"])({default:{}})],R.prototype,"detailInfo",void 0),R=u["a"]([h["a"]],R);var B=R,E=B,A=(i("5b7a"),Object(j["a"])(E,S,q,!1,null,null,null));A.options.__file="room_title.vue";var V=A.exports,L=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"room_locate_wrap"},[i("h4",{staticClass:"room_locate_title"},[i("span",{staticClass:"room_locate_left"},[i("i",{staticClass:"iconfont"},[t._v("")]),t._v(t._s(t.detailInfo.localization)+"\n    ")]),i("span",{staticClass:"room_locate_right",on:{click:function(e){return e.stopPropagation(),t.gotoMap(e)}}},[t._v("\n      地图"),i("i",{staticClass:"iconfont"},[t._v("")])])]),i("p",t._l(t.detailInfo.subways,function(e,o){return i("span",{key:o},[t._v(t._s(e.format))])}))])},U=[],W=function(t){function e(){return Object(s["a"])(this,e),Object(l["a"])(this,Object(d["a"])(e).apply(this,arguments))}return Object(r["a"])(e,t),e}(h["c"]);u["a"]([Object(h["b"])({default:{}})],W.prototype,"detailInfo",void 0),u["a"]([Object(h["b"])({default:{}})],W.prototype,"gotoMap",void 0),W=u["a"]([h["a"]],W);var F=W,J=F,X=(i("7ab0"),Object(j["a"])(J,L,U,!1,null,null,null));X.options.__file="room_location.vue";var Y=X.exports,G=function(t){function e(){var t;return Object(s["a"])(this,e),t=Object(l["a"])(this,Object(d["a"])(e).apply(this,arguments)),t.slotArr=["video_wrap","image_wrap"],t}return Object(c["a"])(e,[{key:"setType",value:function(t){var e=!0,i=!1,o=void 0;try{for(var a,n=f["h"][Symbol.iterator]();!(e=(a=n.next()).done);e=!0){var s=a.value;if(s.value===t)return s.key}}catch(t){i=!0,o=t}finally{try{e||null==n.return||n.return()}finally{if(i)throw o}}return""}},{key:"gotoMap",value:function(){this.$router.push({name:"map",query:{latitude:this.bedDetail.room?this.bedDetail.room.latitude:-1,longitude:this.bedDetail.room?this.bedDetail.room.longitude:-1}})}},{key:"detailInfo",get:function(){if(!this.requesting&&"bedDetail"===this.$route.name){var t=this.$route.query.biz?this.$route.query.biz.toString():"";return"true"===t?{biz:!0,photo:this.bedDetail.bed.photo.src,type:this.bedDetail.room.biz_attr.type,photos:this.bedDetail.bed.photos?this.bedDetail.bed.photos:[],hasVideo:this.bedDetail.bed.has_video,video:this.bedDetail.bed.video?this.bedDetail.bed.video:"",refreshTime:this.bedDetail.bed.refresh_time,roomTitle:"".concat(this.setType(this.bedDetail.bed.type),"-").concat(this.bedDetail.bed.title),money:this.bedDetail.bed.money,dateDetail:this.bedDetail.bed.dateDetail,sequareMeter:this.bedDetail.bed.square_meter,privateBathroom:this.bedDetail.bed.private_bathroom,veranda:this.bedDetail.bed.veranda,elevator:this.bedDetail.room.biz_attr.elevator,window:this.bedDetail.bed.window,bedCount:this.bedDetail.room.biz_attr.bed_count?this.bedDetail.room.biz_attr.bed_count:0,hallCount:this.bedDetail.room.biz_attr.hall_count?this.bedDetail.room.biz_attr.hall_count:0,kitchenCount:this.bedDetail.room.biz_attr.kitchen_count?this.bedDetail.room.biz_attr.kitchen_count:0,bathroomCount:this.bedDetail.room.biz_attr.bathroom_count?this.bedDetail.room.biz_attr.bathroom_count:0,bedSquareMeter:this.bedDetail.bed.square_meter,roomSquareMeter:this.bedDetail.room.biz_attr.square_meter,floor:this.bedDetail.room.biz_attr.floor,totalFloor:this.bedDetail.room.biz_attr.total_floor,orientation:this.bedDetail.bed.orientation,roomTypeAffirm:this.bedDetail.room.room_type_affirm,localization:"".concat(this.bedDetail.room.region).concat(this.bedDetail.room.road),subways:this.bedDetail.room.subways}:{biz:!1,photo:this.bedDetail.bed.photo.src,photos:this.bedDetail.bed.photos?this.bedDetail.bed.photos:[],hasVideo:this.bedDetail.bed.has_video,video:this.bedDetail.bed.video?this.bedDetail.bed.video:"",refreshTime:this.bedDetail.bed.refresh_time,roomTitle:"".concat(this.setType(this.bedDetail.bed.type),"-").concat(this.bedDetail.bed.title),money:this.bedDetail.bed.money,dateDetail:this.bedDetail.bed.dateDetail,bedCount:this.bedDetail.room.client_attr.bed_count?this.bedDetail.room.client_attr.bed_count:0,hallCount:this.bedDetail.room.client_attr.hall_count?this.bedDetail.room.client_attr.hall_count:0,kitchenCount:this.bedDetail.room.client_attr.kitchen_count?this.bedDetail.room.client_attr.kitchen_count:0,bathroomCount:this.bedDetail.room.client_attr.bathroom_count?this.bedDetail.room.client_attr.bathroom_count:0,elevator:this.bedDetail.room.client_attr.elevator,gender:this.bedDetail.bed.sex,personLimit:this.bedDetail.bed.person_limit,roomTypeAffirm:this.bedDetail.room.room_type_affirm,localization:"".concat(this.bedDetail.room.region).concat(this.bedDetail.room.road),subways:this.bedDetail.room.subways}}return""}}]),Object(r["a"])(e,t),e}(h["c"]);u["a"]([Object(p["b"])(function(t){return t.ResidenceModule.bed_detail})],G.prototype,"bedDetail",void 0),u["a"]([Object(p["b"])(function(t){return t.ResidenceModule.requesting})],G.prototype,"requesting",void 0),G=u["a"]([Object(h["a"])({components:{MySlider:v["a"],RoomTitle:V,RoomLocation:Y,VideoDetail:C,ImageDetail:M}})],G);var H=G,K=H,N=(i("6351"),Object(j["a"])(K,b,_,!1,null,null,null));N.options.__file="room_detail_info.vue";var Q=N.exports,Z=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.otherInfo.length>0?i("div",{staticClass:"room_other_info_wrap"},[i("h4",[t._v("其他单间情况")]),i("ul",t._l(t.otherInfo,function(e,o){return i("li",{key:o,staticClass:"room_other_item",on:{click:function(i){t.view(e)}}},[1===e.state?i("div",[i("div",{staticClass:"room_other_item_left"},[i("h5",[t._v(t._s(e.type+(e.title?"-"+e.title:"")))]),i("p",[""!==e.orientation?i("span",[t._v(t._s(e.orientation)+"·")]):t._e(),0!==e.squareMeter?i("span",[t._v(t._s(e.squareMeter)+"㎡·")]):t._e(),0!==e.privateBathroom?i("span",[t._v("独卫·")]):t._e(),0!==e.veranda?i("span",[t._v("阳台·")]):t._e(),0!==e.window?i("span",[t._v("飘窗·")]):t._e(),i("span",[t._v(t._s(e.dateDetail))])])]),i("div",{staticClass:"room_other_item_right"},[i("span",[t._v(t._s(e.money)+"元/月")]),i("i",{staticClass:"iconfont"},[t._v("")])])]):t._e(),2===e.state?i("div",[i("div",{staticClass:"room_other_item_left"},[t._v("\n          "+t._s(e.type)+"\n        ")]),i("div",{staticClass:"room_other_item_right"},[t._v("\n          室友未知\n        ")])]):t._e()])}))]):t._e()},tt=[],et=function(t){function e(){return Object(s["a"])(this,e),Object(l["a"])(this,Object(d["a"])(e).apply(this,arguments))}return Object(c["a"])(e,[{key:"setType",value:function(t){var e=!0,i=!1,o=void 0;try{for(var a,n=f["h"][Symbol.iterator]();!(e=(a=n.next()).done);e=!0){var s=a.value;if(s.value===t)return s.key}}catch(t){i=!0,o=t}finally{try{e||null==n.return||n.return()}finally{if(i)throw o}}return""}},{key:"view",value:function(t){t.id!==this.$route.params.id&&this.$router.push({name:"bedDetail",params:{id:t.id},query:{biz:t.biz}})}},{key:"otherInfo",get:function(){var t=this;return this.bedDetail.other_beds?this.bedDetail.other_beds.map(function(e){return{biz:t.bedDetail.room.biz,id:e.id,state:e.state,type:t.setType(e.type),title:e.title,money:e.money,sex:e.sex?e.sex:"",orientation:e.orientation?e.orientation:"",squareMeter:e.square_meter?e.square_meter:0,privateBathroom:e.private_bathroom?e.private_bathroom:0,veranda:e.veranda?e.veranda:0,window:e.window?e.window:0,dateDetail:e.dateDetail}}):[]}}]),Object(r["a"])(e,t),e}(h["c"]);u["a"]([Object(p["b"])(function(t){return t.ResidenceModule.bed_detail})],et.prototype,"bedDetail",void 0),et=u["a"]([h["a"]],et);var it=et,ot=it,at=(i("34c1"),Object(j["a"])(ot,Z,tt,!1,null,null,null));at.options.__file="room_other_info.vue";var nt=at.exports,st=function(){var t=this,e=t.$createElement,i=t._self._c||e;return""!==t.roomDescription?i("div",{staticClass:"room_description_wrap"},[i("h4",[t._v("房源描述")]),t.showPerson?t._e():i("div",{staticClass:"room_description_person",on:{click:function(e){return e.stopPropagation(),t.view(e)}}},[""!==t.roomDescription.person?i("person-img",{attrs:{info:t.roomDescription.person,formatTime:""}}):t._e(),""!==t.roomDescription.company?i("company-img",{attrs:{info:t.roomDescription.company}}):t._e(),i("div",{staticClass:"contract_btn",on:{click:function(e){return e.stopPropagation(),t.clickContract(e)}}},[t._v("联系Ta")])],1),i("div",{staticClass:"room_des_text_wrap"},[t._v("\n    "+t._s(t.roomDescription.content)+"\n  ")]),i("div",{staticClass:"room_des_msg_info_wrap"},[1===t.roomDescription.person.identity_validate_status?i("div",{staticClass:"msg_info"},[t._m(0),i("div",{staticClass:"msg_info_right"},[t._v("\n        由实名登记用户发布并承诺真实合法有效，接受所有用户监督和评价\n      ")])]):t._e(),2===this.bedDetail.room.rent_type?i("div",{staticClass:"msg_info"},[t._m(1),i("div",{staticClass:"msg_info_right"},[t._v("\n        温馨提示：异性合租需谨慎\n      ")])]):t._e()])]):t._e()},rt=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"msg_info_left"},[i("i",{staticClass:"iconfont"},[t._v("")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"msg_info_left"},[i("i",{staticClass:"iconfont",staticStyle:{"font-size":"12px"}},[t._v("")])])}],ct=i("eb74"),lt=i("cdb0"),dt=function(t){function e(){return Object(s["a"])(this,e),Object(l["a"])(this,Object(d["a"])(e).apply(this,arguments))}return Object(c["a"])(e,[{key:"view",value:function(){"true"===this.$route.query.biz.toString()?this.$router.push({name:"company",params:{id:this.roomDescription.company.id}}):this.$router.push({name:"user",params:{id:this.roomDescription.person.id}})}},{key:"clickContract",value:function(){this.$dialog.alert({message:"请下载APP，使用私信聊天功能"})}},{key:"roomDescription",get:function(){return this.bedDetail.bed?{person:this.bedDetail.user?this.bedDetail.user:"",company:this.bedDetail.company?this.bedDetail.company:"",content:this.bedDetail.bed.content}:""}}]),Object(r["a"])(e,t),e}(h["c"]);u["a"]([Object(h["b"])({default:!1})],dt.prototype,"showPerson",void 0),u["a"]([Object(p["b"])(function(t){return t.ResidenceModule.bed_detail})],dt.prototype,"bedDetail",void 0),dt=u["a"]([Object(h["a"])({components:{PersonImg:ct["a"],CompanyImg:lt["a"]}})],dt);var ut=dt,ht=ut,pt=(i("aac7"),Object(j["a"])(ht,st,rt,!1,null,null,null));pt.options.__file="room_description.vue";var ft=pt.exports,bt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return""!==t.type?i("div",{staticClass:"room_type_wrap"},[i("i",{staticClass:"iconfont"},[t._v("")]),t._v(t._s(t.type)+"\n")]):t._e()},_t=[],vt=function(t){function e(){var t;return Object(s["a"])(this,e),t=Object(l["a"])(this,Object(d["a"])(e).apply(this,arguments)),t.type="",t}return Object(c["a"])(e,[{key:"changeType",value:function(){this.bedDetail.bed&&2===this.bedDetail.bed.state?this.type="该房源已出租":this.bedDetail.bed&&1===this.bedDetail.bed.status?this.type="该房源已删除":this.bedDetail.room&&this.bedDetail.room.may_expire&&(this.type="该房源许久未刷新，可能已出租")}},{key:"mounted",value:function(){this.changeType()}}]),Object(r["a"])(e,t),e}(h["c"]);u["a"]([Object(p["b"])(function(t){return t.ResidenceModule.bed_detail})],vt.prototype,"bedDetail",void 0),vt=u["a"]([h["a"]],vt);var mt=vt,yt=mt,gt=(i("5677"),Object(j["a"])(yt,bt,_t,!1,null,null,null));gt.options.__file="room_type.vue";var Dt=gt.exports,Ot=i("bf93"),jt=i("3fe9"),wt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"claim_btn"},[i("a",{staticClass:"operation-btn confirm",on:{click:t.handleClick}},[t._v("\n    认领此房源\n  ")]),i("van-popup",{model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[t.bindPhoneSuccess?i("div",{staticClass:"captch_wrap"},[i("div",{staticClass:"close",on:{click:function(e){return e.stopPropagation(),t.changeShow(e)}}},[t._v("×")]),i("div",{staticClass:"ok"}),i("h5",[t._v("恭喜，您已成功认领此房源！")]),i("span",[t._v("您可以使用App管理房源、与客户沟通")]),i("van-button",{staticClass:"enter-btn operation-btn confirm",attrs:{size:"small"},on:{click:function(e){return e.stopPropagation(),t.reload(e)}}},[t._v("点击查看")])],1):i("div",{staticClass:"captch_wrap"},[i("div",{staticClass:"close",on:{click:function(e){return e.stopPropagation(),t.changeShow(e)}}},[t._v("×")]),i("p",[t._v("如有租客跟您联系，您将收到短信通知")]),i("van-row",[i("van-field",{attrs:{clearable:"",placeholder:"请输入手机号"},on:{blur:t.onBlur},model:{value:t.phone,callback:function(e){t.phone=e},expression:"phone"}})],1),i("van-row",[i("van-field",{attrs:{center:"",placeholder:"请输入验证码"},on:{blur:t.onBlur},model:{value:t.code,callback:function(e){t.code=e},expression:"code"}},[i("van-button",{attrs:{slot:"button",size:"small",type:"primary",disabled:t.disabled},on:{click:function(e){return e.stopPropagation(),t.captchaMessage(e)}},slot:"button"},[t._v(t._s(t.btnText))])],1)],1),i("span",{staticClass:"errMsg"},[t._v(t._s(t.errMsg))]),i("van-button",{staticClass:"enter-btn operation-btn confirm",attrs:{size:"small"},on:{click:function(e){return e.stopPropagation(),t.bindPhoneBtn(e)}}},[t._v("确定")])],1)])],1)},Ct=[],kt=function(t){function e(){var t;return Object(s["a"])(this,e),t=Object(l["a"])(this,Object(d["a"])(e).apply(this,arguments)),t.timer=null,t.phone="",t.code="",t.disabled=!1,t.show=!1,t.errMsg="",t.btnText="获取验证码",t.bindPhoneSuccess=!1,t}return Object(c["a"])(e,[{key:"Show",value:function(){this.show||this.resetStatus()}},{key:"handleClick",value:function(){""===this.account.user.phone?(this.show=!0,this.bindPhoneSuccess=!1):this.handleClaimRoom()}},{key:"bindPhoneBtn",value:function(){var t=this;if(""!==this.phone)if(""!==this.code){if(this.testPhone()){this.bindPhone().then(function(){t.handleClaimRoom()})}}else this.errMsg="验证码不能为空";else this.errMsg="手机号不能为空"}},{key:"bindPhone",value:function(){var t=Object(n["a"])(regeneratorRuntime.mark(function t(){var e=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise(function(t,i){e.bindUserPhone({data:{phone:e.phone,captcha:e.code,force:0},success:function(){t&&t()},fail:function(t){e.$dialog.alert({message:t}),i&&i()}})}));case 1:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},{key:"handleClaimRoom",value:function(){var t=Object(n["a"])(regeneratorRuntime.mark(function t(){var e=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise(function(t,i){e.claimRoom({data:{id:e.bedDetail.room.id},success:function(){e.show=!0,e.bindPhoneSuccess=!0,t&&t()},fail:function(t){e.$dialog.alert({message:t})}})}));case 1:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},{key:"captchaMessage",value:function(){var t=this;if(this.testPhone()){clearInterval(this.timer),this.disabled=!0;var e=60;this.btnText="重新发送(".concat(e,")s"),this.timer=setInterval(function(){e--,e<=0?(t.disabled=!1,t.btnText="获取验证码",clearInterval(t.timer)):t.btnText="重新发送(".concat(e,")s")},1e3),this.sendCaptchaMessage({data:{phone:this.phone},fail:function(e){t.$dialog.alert({message:e})}})}}},{key:"testPhone",value:function(){return/^1[34578]\d{9}$/.test(this.phone)?(this.errMsg="",!0):(this.errMsg="手机号码有误",!1)}},{key:"reload",value:function(){window.location.reload()}},{key:"changeShow",value:function(){this.show=!this.show}},{key:"resetStatus",value:function(){this.phone="",this.code="",this.disabled=!1,this.errMsg="",this.btnText="获取验证码",this.bindPhoneSuccess=!1,clearTimeout(this.timer)}},{key:"onBlur",value:function(t){document.body&&(document.body.scrollTop=document.body.scrollTop)}}]),Object(r["a"])(e,t),e}(h["c"]);u["a"]([Object(p["b"])(function(t){return t.AccountModule.account})],kt.prototype,"account",void 0),u["a"]([Object(p["b"])(function(t){return t.ResidenceModule.bed_detail})],kt.prototype,"bedDetail",void 0),u["a"]([Object(p["a"])("sendCaptchaMessage")],kt.prototype,"sendCaptchaMessage",void 0),u["a"]([Object(p["a"])("bindUserPhone")],kt.prototype,"bindUserPhone",void 0),u["a"]([Object(p["a"])("claimRoom")],kt.prototype,"claimRoom",void 0),u["a"]([Object(h["d"])("show")],kt.prototype,"Show",null),kt=u["a"]([h["a"]],kt);var It=kt,Tt=It,xt=(i("9b1c"),Object(j["a"])(Tt,wt,Ct,!1,null,"4999a406",null));xt.options.__file="link_claim.vue";var $t=xt.exports,zt=function(t){function e(){var t;return Object(s["a"])(this,e),t=Object(l["a"])(this,Object(d["a"])(e).apply(this,arguments)),t.loading=!1,t.ifWeixin=!1,t}return Object(c["a"])(e,[{key:"changeRoute",value:function(){"bedDetail"===this.$route.name&&this.getBedDetail()}},{key:"getBedDetail",value:function(){var t=Object(n["a"])(regeneratorRuntime.mark(function t(){var e=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise(function(t,i){e.loading=!0,e.viewBedDetail({data:{id:e.$route.params.id,biz:!!e.$route.query.biz&&"true"===e.$route.query.biz.toString()},success:function(){e.loading=!1,t&&t()},fail:function(t){window.history.length<=1?e.$router.push({path:"/search/rent"}):e.$router.back()}})}));case 1:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},{key:"setType",value:function(t){var e=!0,i=!1,o=void 0;try{for(var a,n=f["h"][Symbol.iterator]();!(e=(a=n.next()).done);e=!0){var s=a.value;if(s.value===t)return s.key}}catch(t){i=!0,o=t}finally{try{e||null==n.return||n.return()}finally{if(i)throw o}}return""}},{key:"share",value:function(){var t={title:"".concat(this.bedDetail.room.localization,"-").concat(this.setType(this.bedDetail.bed.type),"-").concat(this.bedDetail.bed.title," [zuber租房]"),link:window.location.href,desc:this.bedDetail.bed.content,imgUrl:this.bedDetail.bed.photo.small};this.configShareInfo({info:t})}},{key:"created",value:function(){var t=this;this.getBedDetail().then(function(){t.share()})}}]),Object(r["a"])(e,t),e}(h["c"]);u["a"]([Object(p["a"])("viewBedDetail")],zt.prototype,"viewBedDetail",void 0),u["a"]([Object(p["a"])("configShareInfo")],zt.prototype,"configShareInfo",void 0),u["a"]([Object(p["b"])(function(t){return t.ResidenceModule.bed_detail})],zt.prototype,"bedDetail",void 0),u["a"]([Object(p["b"])(function(t){return t.ResidenceModule.requesting})],zt.prototype,"requesting",void 0),u["a"]([Object(h["d"])("$route")],zt.prototype,"changeRoute",null),zt=u["a"]([Object(h["a"])({components:{RoomDetailInfo:Q,RoomOtherInfo:nt,RoomDescription:ft,RoomType:Dt,Loading:Ot["a"],CommonBar:jt["a"],LinkClaim:$t}})],zt);var Pt=zt,Mt=Pt,St=(i("a26b"),Object(j["a"])(Mt,o,a,!1,null,null,null));St.options.__file="index.vue";e["default"]=St.exports},d58f:function(t,e,i){},e1d2:function(t,e,i){},eb74:function(t,e,i){"use strict";var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"person_wrap"},[i("div",{staticClass:"person_img_wrap photo",style:"background-image: url("+t.info.avatar.src+");"},["m"===t.info.gender?i("i",{staticClass:"gender_icon iconfont m"},[t._v("")]):i("i",{staticClass:"gender_icon iconfont f"},[t._v("")])]),i("div",{staticClass:"person_img_des"},[i("div",[i("p",{staticClass:"text-ellipsis"},[t._v(t._s(t.info.username))]),1===t.info.identity_validate_status?i("span",{staticClass:"active"},[i("i",{staticClass:"iconfont"},[t._v("")]),t._v("\n        实名\n      ")]):i("span",[t._v("未实名")])]),t._v("\n    "+t._s(t.info.client_attr.profession)+"  "+t._s(t.info.client_attr.xingzuo?" | "+t.info.client_attr.xingzuo:"")+"\n    "),t._t("userDetail")],2),t.formatTime?i("div",{staticClass:"person_time"},[t._v("\n    "+t._s(t.formatTime)+"\n  ")]):t._e()])},a=[],n=i("c665"),s=i("dc0a"),r=i("d328"),c=i("11d9"),l=i("9ab4"),d=i("60a3"),u=function(t){function e(){return Object(n["a"])(this,e),Object(r["a"])(this,Object(c["a"])(e).apply(this,arguments))}return Object(s["a"])(e,t),e}(d["c"]);l["a"]([Object(d["b"])({default:{}})],u.prototype,"info",void 0),l["a"]([Object(d["b"])({default:""})],u.prototype,"formatTime",void 0),u=l["a"]([d["a"]],u);var h=u,p=h,f=(i("ff61"),i("2877")),b=Object(f["a"])(p,o,a,!1,null,null,null);b.options.__file="person_img.vue";e["a"]=b.exports},ff61:function(t,e,i){"use strict";var o=i("c8b0"),a=i.n(o);a.a}}]);
//# sourceMappingURL=chunk-47d957e6.ccf88d18.js.map