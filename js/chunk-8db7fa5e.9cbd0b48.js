(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8db7fa5e"],{2966:function(t,s,r){},8418:function(t,s,r){"use strict";var a=r("c04e"),e=r("9bf2"),i=r("5c6c");t.exports=function(t,s,r){var o=a(s);o in t?e.f(t,o,i(0,r)):t[o]=r}},"99af":function(t,s,r){"use strict";var a=r("23e7"),e=r("d039"),i=r("e8b5"),o=r("861d"),c=r("7b0b"),n=r("50c4"),d=r("8418"),l=r("65f0"),p=r("1dde"),u=r("b622"),h=r("2d00"),f=u("isConcatSpreadable"),b=9007199254740991,v="Maximum allowed index exceeded",g=h>=51||!e((function(){var t=[];return t[f]=!1,t.concat()[0]!==t})),m=p("concat"),_=function(t){if(!o(t))return!1;var s=t[f];return void 0!==s?!!s:i(t)},x=!g||!m;a({target:"Array",proto:!0,forced:x},{concat:function(t){var s,r,a,e,i,o=c(this),p=l(o,0),u=0;for(s=-1,a=arguments.length;s<a;s++)if(i=-1===s?o:arguments[s],_(i)){if(e=n(i.length),u+e>b)throw TypeError(v);for(r=0;r<e;r++,u++)r in i&&d(p,u,i[r])}else{if(u>=b)throw TypeError(v);d(p,u++,i)}return p.length=u,p}})},b7c8:function(t,s,r){"use strict";r.r(s);var a=function(){var t=this,s=t.$createElement,r=t._self._c||s;return r("div",[r("loading",{attrs:{active:t.isLoading},on:{"update:active":function(s){t.isLoading=s}}}),r("div",{staticClass:"container ec-container my-5"},[r("div",{staticClass:"row"},[t.order.paid?r("div",{staticClass:"col-md-6"},[r("h2",{staticClass:"text-brown font-weight-bold"},[t._v("訂單完成")]),t._m(0),r("router-link",{staticClass:"btn btn-outline-dark mr-2 rounded-0 mt-4",attrs:{to:"/"}},[t._v(" 回到首頁 ")])],1):r("div",{staticClass:"col-md-6"},[r("h2",{staticClass:"mb-5 text-brown font-weight-bold"},[t._v("付款")]),r("p",[t._v("差一步完成訂單，點選確認付款完成訂單")]),r("p",[t._v("對於咖啡豆品質要求，收到訂單開始製作， 大約 1 ~ 2天出貨 ")])]),r("div",{staticClass:"col-md-6 mt-3"},[r("div",{staticClass:"card rounded-0 py-4 mb-2"},[t._m(1),r("div",{staticClass:"card-body px-4 py-0"},[r("ul",{staticClass:"list-group list-group-flush"},[t._l(t.order.products,(function(s,a){return r("li",{key:a,staticClass:"list-group-item px-0"},[r("div",{staticClass:"d-flex mt-2"},[r("img",{staticClass:"mr-2",staticStyle:{width:"60px",height:"60px","object-fit":"cover"},attrs:{src:s.product.imageUrl[0],alt:""}}),r("div",{staticClass:"w-100 d-flex flex-column"},[r("div",{staticClass:"d-flex justify-content-between font-weight-bold"},[r("h5",[t._v(t._s(s.product.title))]),r("p",{staticClass:"mb-0"},[t._v("x"+t._s(s.quantity))])]),r("div",{staticClass:"text-right"},[r("p",{staticClass:"mb-0"},[t._v(" "+t._s(t._f("money")(s.product.price))+"/"+t._s(s.product.unit)+" ")])])])])])})),r("li",{staticClass:"list-group-item px-0 pb-0"},[r("table",{staticClass:"table"},[r("tbody",[r("tr",[r("th",{staticClass:"border-0 px-0 font-weight-normal",attrs:{scope:"row"}},[t._v("Email")]),r("td",{staticClass:"text-right border-0 px-0"},[t._v(" "+t._s(t.order.user.email)+" ")])]),r("tr",[r("th",{staticClass:"border-0 px-0 pt-0 font-weight-normal",attrs:{scope:"row"}},[t._v("收貨人姓名")]),r("td",{staticClass:"text-right border-0 px-0 pt-0"},[t._v(" "+t._s(t.order.user.name)+" ")])]),r("tr",[r("th",{staticClass:"border-0 px-0 pt-0 font-weight-normal",attrs:{scope:"row"}},[t._v("收貨人電話")]),r("td",{staticClass:"text-right border-0 px-0 pt-0"},[t._v(" "+t._s(t.order.user.tel)+" ")])]),r("tr",[r("th",{staticClass:"border-0 px-0 pt-0 font-weight-normal",attrs:{scope:"row"}},[t._v("收貨人地址")]),r("td",{staticClass:"text-right border-0 px-0 pt-0"},[t._v(" "+t._s(t.order.user.address)+" ")])])])])]),r("li",{staticClass:"list-group-item px-0 pb-0"},[r("table",{staticClass:"table"},[r("tbody",[r("tr",[r("th",{staticClass:"border-0 px-0 font-weight-normal",attrs:{scope:"row"}},[t._v(" 付款金額 ")]),r("td",{staticClass:"text-right border-0 px-0"},[t._v(" "+t._s(t._f("money")(t.order.amount))+" ")])]),r("tr",[r("th",{staticClass:"border-0 px-0 pt-0 font-weight-normal",attrs:{scope:"row"}},[t._v("付款方式")]),r("td",{staticClass:"text-right border-0 px-0 pt-0"},[t._v(" "+t._s(t.order.payment)+" ")])]),r("tr",[r("th",{staticClass:"border-0 px-0 pt-0 font-weight-normal",attrs:{scope:"row"}},[t._v("付款狀態 ")]),r("td",{staticClass:"text-right border-0 px-0 pt-0"},[t.order.paid?r("strong",{staticClass:"text-success"},[t._v("付款完成")]):r("span",[t._v("尚未付款")])])])])]),!1===t.order.paid?r("div",{staticClass:"text-right"},[r("button",{staticClass:"btn btn-danger",attrs:{disabled:t.isProcessing},on:{click:function(s){return s.preventDefault(),t.payOrder(s)}}},[t._v(" 確認付款 "),t.isProcessing?r("i",{staticClass:"fas fa-spinner fa-spin"}):t._e()])]):t._e()])],2)])]),!1===t.order.paid?r("a",{staticClass:"btn btn-outline-dark mr-2 rounded-0 mb-4",attrs:{href:"#"},on:{click:function(s){return s.preventDefault(),t.backHome(s)}}},[t._v(" 回到首頁 ")]):t._e()])])])],1)},e=[function(){var t=this,s=t.$createElement,r=t._self._c||s;return r("div",{staticClass:"mt-4"},[r("h5",[t._v("感謝訂購")]),r("p",{staticClass:"ml-2"},[t._v("訂單完成預計1~2天出貨")]),r("div",{staticStyle:{height:"300px","background-size":"cover","background-position":"center",backgroundImage:"url('https://images.unsplash.com/photo-1495774856032-8b90bbb32b32?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80')"}})])},function(){var t=this,s=t.$createElement,r=t._self._c||s;return r("div",{staticClass:"card-header border-bottom-0 bg-white px-4 py-0"},[r("h2",{staticClass:"text-brown font-weight-bold mb-5"},[t._v(" 訂單資料 ")])])}],i=(r("99af"),r("3d20")),o=r.n(i),c=r("cd54"),n={data:function(){return{order:{user:{}},orderId:"",isLoading:!1,isProcessing:!1}},created:function(){this.orderId=this.$route.params.orderId,this.getOrder()},methods:{getOrder:function(){var t=this,s="".concat("https://course-ec-api.hexschool.io/api/").concat("28c229ba-c1c4-47f6-9be0-210c99409aa6","/ec/orders/").concat(this.orderId);this.isLoading=!0,this.$http.get(s).then((function(s){t.order=s.data.data,t.isLoading=!1})).catch((function(){c["a"].fire({title:"無法取得資料，稍後再試",icon:"error"}),t.isLoading=!1}))},payOrder:function(){var t=this,s="".concat("https://course-ec-api.hexschool.io/api/").concat("28c229ba-c1c4-47f6-9be0-210c99409aa6","/ec/orders/").concat(this.orderId,"/paying");this.isProcessing=!0,this.$http.post(s).then((function(s){s.data.data.paid&&(t.getOrder(),c["a"].fire({title:"完成付款",icon:"success"})),t.isProcessing=!1})).catch((function(){c["a"].fire({title:"付款失敗，稍後再試",icon:"error"}),t.isProcessing=!1}))},backHome:function(){this.$router.push("/"),o.a.fire({icon:"warning",title:"尚未付款"})}}},d=n,l=(r("c248"),r("2877")),p=Object(l["a"])(d,a,e,!1,null,"5ea1268f",null);s["default"]=p.exports},c248:function(t,s,r){"use strict";var a=r("2966"),e=r.n(a);e.a}}]);
//# sourceMappingURL=chunk-8db7fa5e.9cbd0b48.js.map