(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["app"],{0:function(e,t,n){e.exports=n("2f39")},"018e":function(e,t){},"2f39":function(e,t,n){"use strict";n.r(t);var a={};n.r(a),n.d(a,"toc",function(){return X});var r={};n.r(r),n.d(r,"toc",function(){return Y});var s=n("967e"),c=n.n(s),o=(n("96cf"),n("fa84")),l=n.n(o),u=(n("5c7d"),n("7d6e"),n("e54f"),n("62f2"),n("7e6d"),n("61fb"),n("2cd3"),n("2913"),n("b7f2"),n("5503"),n("e191"),n("2342"),n("d5b2"),n("0336"),n("2b0e")),f=n("b05d"),i=n("cb32"),p=n("9c40"),d=n("f09f"),b=n("a370"),m=n("f2cc"),h=n("54b4"),w=n("9898"),v=n("0016"),x=n("6ab5"),_=n("e208"),j=n("033f"),y=n("4d5a"),g=n("497d"),Q=n("2ea3"),E=n("c7a0"),k=n("5096"),q=n("7867"),C=n("4983"),O=n("eb85"),P=n("7460"),$=n("823b"),S=n("adad"),T=n("429b"),H=n("65c6"),I=n("6ac5"),L=n("05c0"),V=n("714f"),A=n("4396"),D=n("2a19"),N=n("0967"),B=n("09f9");u["a"].use(f["a"],{config:{},components:{QAvatar:i["a"],QBtn:p["a"],QCard:d["a"],QCardSection:b["a"],QDrawer:m["a"],QExpansionItem:h["a"],QHeader:w["a"],QIcon:v["a"],QItem:x["a"],QItemLabel:_["a"],QItemSection:j["a"],QLayout:y["a"],QList:g["a"],QPage:Q["a"],QPageContainer:E["a"],QPageScroller:k["a"],QRouteTab:q["a"],QScrollArea:C["a"],QSeparator:O["a"],QTab:P["a"],QTabPanel:$["a"],QTabPanels:S["a"],QTabs:T["a"],QToolbar:H["a"],QToolbarTitle:I["a"],QTooltip:L["a"]},directives:{Ripple:V["a"],Scroll:A["a"]},plugins:{Notify:D["a"],Platform:N["a"],Screen:B["a"]}});var J=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"q-app"}},[n("router-view")],1)},R=[],U={name:"App"},F=U,M=n("2877"),z=Object(M["a"])(F,J,R,!1,null,null,null),G=z.exports,K=n("2f62"),W={toc:[]},X=function(e){return e.toc},Y=function(e,t){e.toc=t},Z=n("018e"),ee={namespaced:!0,state:W,getters:a,mutations:r,actions:Z};u["a"].use(K["a"]);var te=function(){var e=new K["a"].Store({modules:{common:ee},strict:!1});return e},ne=n("8c4f"),ae=[{path:"/",redirect:"/docs"},{path:"/docs",component:function(){return n.e("528ffb49").then(n.bind(null,"713b"))},children:[{path:"",component:function(){return n.e("bfc2c0bc").then(n.bind(null,"8b24"))}}]},{path:"/examples",component:function(){return n.e("528ffb49").then(n.bind(null,"713b"))},children:[{path:"",component:function(){return n.e("659bf5b6").then(n.bind(null,"0960"))}}]}];ae.push({path:"*",component:function(){return n.e("4b47640d").then(n.bind(null,"e51e"))}});var re=ae;u["a"].use(ne["a"]);var se=function(){var e=new ne["a"]({scrollBehavior:function(){return{x:0,y:0}},routes:re,mode:"history",base:"/app-extension-qpdfviewer/"});return e},ce=function(){var e="function"===typeof te?te({Vue:u["a"]}):te,t="function"===typeof se?se({Vue:u["a"],store:e}):se;e.$router=t;var n={el:"#q-app",router:t,store:e,render:function(e){return e(G)}};return{app:n,store:e,router:t}},oe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("q-page",{staticClass:"flex flex-center"},[n("q-pdfviewer",{attrs:{type:"html5",src:e.src,"content-class":"absolute"},model:{value:e.show,callback:function(t){e.show=t},expression:"show"}})],1)},le=[],ue={data:function(){return{show:!0,src:"statics/pdf/pdf-test.pdf"}}},fe=ue,ie=Object(M["a"])(fe,oe,le,!1,null,null,null),pe=ie.exports,de=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("q-page",{staticClass:"flex flex-center"},[n("q-pdfviewer",{attrs:{type:"html5",src:e.src,"content-class":"absolute"},model:{value:e.show,callback:function(t){e.show=t},expression:"show"}})],1)},be=[],me={data:function(){return{show:!0,src:"statics/pdf/c4611_sample_explain.pdf"}}},he=me,we=Object(M["a"])(he,de,be,!1,null,null,null),ve=we.exports,xe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("q-page",{staticClass:"flex flex-center"},[n("q-pdfviewer",{attrs:{type:"html5",src:e.src,"content-class":"absolute"},model:{value:e.show,callback:function(t){e.show=t},expression:"show"}})],1)},_e=[],je={data:function(){return{show:!0,src:"statics/pdf/pdf_open_parameters.pdf"}}},ye=je,ge=Object(M["a"])(ye,xe,_e,!1,null,null,null),Qe=ge.exports,Ee=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("q-page",{staticClass:"flex flex-center"},[n("q-pdfviewer",{attrs:{type:"html5",src:e.src,"content-class":"absolute"},model:{value:e.show,callback:function(t){e.show=t},expression:"show"}})],1)},ke=[],qe={data:function(){return{show:!0,src:"statics/pdf/gre_research_validity_data.pdf"}}},Ce=qe,Oe=Object(M["a"])(Ce,Ee,ke,!1,null,null,null),Pe=Oe.exports,$e=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"row justify-beween relative-position",staticStyle:{"max-width":"100%"}},e._l(e.sources,function(e,t){return n("container",{key:t,attrs:{src:e,type:"html5"}})}),1)},Se=[],Te={components:{container:function(){return n.e("364d96b6").then(n.bind(null,"185a"))}},data:function(){return{sources:["statics/pdf/pdf-test.pdf","statics/pdf/c4611_sample_explain.pdf","statics/pdf/pdf_open_parameters.pdf","statics/pdf/gre_research_validity_data.pdf"]}}},He=Te,Ie=Object(M["a"])(He,$e,Se,!1,null,null,null),Le=Ie.exports,Ve=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("q-page",{staticClass:"flex flex-center"},[n("q-pdfviewer",{attrs:{type:"pdfjs",src:e.src,"content-class":"absolute"},model:{value:e.show,callback:function(t){e.show=t},expression:"show"}})],1)},Ae=[],De={name:"Page1",data:function(){return{show:!0,src:"statics/pdf/pdf-test.pdf"}}},Ne=De,Be=Object(M["a"])(Ne,Ve,Ae,!1,null,null,null),Je=Be.exports,Re=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("q-page",{staticClass:"flex flex-center"},[n("q-pdfviewer",{attrs:{type:"pdfjs",src:e.src,"content-class":"absolute"},model:{value:e.show,callback:function(t){e.show=t},expression:"show"}})],1)},Ue=[],Fe={data:function(){return{show:!0,src:"statics/pdf/c4611_sample_explain.pdf"}}},Me=Fe,ze=Object(M["a"])(Me,Re,Ue,!1,null,null,null),Ge=ze.exports,Ke=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("q-page",{staticClass:"flex flex-center"},[n("q-pdfviewer",{attrs:{type:"pdfjs",src:e.src,"content-class":"absolute"},model:{value:e.show,callback:function(t){e.show=t},expression:"show"}})],1)},We=[],Xe={data:function(){return{show:!0,src:"statics/pdf/pdf_open_parameters.pdf"}}},Ye=Xe,Ze=Object(M["a"])(Ye,Ke,We,!1,null,null,null),et=Ze.exports,tt=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("q-page",{staticClass:"flex flex-center"},[n("q-pdfviewer",{attrs:{type:"pdfjs",src:e.src,"content-class":"absolute"},model:{value:e.show,callback:function(t){e.show=t},expression:"show"}})],1)},nt=[],at={data:function(){return{show:!0,src:"statics/pdf/gre_research_validity_data.pdf"}}},rt=at,st=Object(M["a"])(rt,tt,nt,!1,null,null,null),ct=st.exports,ot=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"row justify-beween relative-position",staticStyle:{"min-height":"calc(100vh - 98px)"}},e._l(e.sources,function(e,t){return n("container",{key:t,attrs:{src:e,type:"pdfjs"}})}),1)},lt=[],ut={components:{container:function(){return n.e("364d96b6").then(n.bind(null,"185a"))}},data:function(){return{sources:["statics/pdf/pdf-test.pdf","statics/pdf/c4611_sample_explain.pdf","statics/pdf/pdf_open_parameters.pdf","statics/pdf/gre_research_validity_data.pdf"]}}},ft=ut,it=Object(M["a"])(ft,ot,lt,!1,null,null,null),pt=it.exports,dt=function(e){var t=e.Vue;t.component("Html5Example1",pe),t.component("Html5Example2",ve),t.component("Html5Example3",Qe),t.component("Html5Example4",Pe),t.component("Html5Example5",Le),t.component("PdfjsExample1",Je),t.component("PdfjsExample2",Ge),t.component("PdfjsExample3",et),t.component("PdfjsExample4",ct),t.component("PdfjsExample5",pt)},bt=n("2e98"),mt=n("b692"),ht=n("030f"),wt=n("2330"),vt=n("c4cf"),xt=n("ba0a"),_t=ce(),jt=_t.app,yt=_t.store,gt=_t.router;function Qt(){return Et.apply(this,arguments)}function Et(){return Et=l()(c.a.mark(function e(){var t,n;return c.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:t=[dt,bt["a"],mt["a"],ht["a"],wt["a"],vt["a"],xt["a"]],n=0;case 2:if(!(n<t.length)){e.next=20;break}if("function"===typeof t[n]){e.next=5;break}return e.abrupt("continue",17);case 5:return e.prev=5,e.next=8,t[n]({app:jt,router:gt,store:yt,Vue:u["a"],ssrContext:null});case 8:e.next=17;break;case 10:if(e.prev=10,e.t0=e["catch"](5),!e.t0||!e.t0.url){e.next=15;break}return window.location.href=e.t0.url,e.abrupt("return");case 15:return console.error("[Quasar] boot error:",e.t0),e.abrupt("return");case 17:n++,e.next=2;break;case 20:new u["a"](jt);case 21:case"end":return e.stop()}},e,null,[[5,10]])})),Et.apply(this,arguments)}Qt()},"7e6d":function(e,t,n){},cd50:function(e,t,n){var a={"./bmp":"0dcc","./bmp.js":"0dcc","./gif":"c416","./gif.js":"c416","./jpg":"135b","./jpg.js":"135b","./png":"e9ef","./png.js":"e9ef","./psd":"520c","./psd.js":"520c","./svg":"b0bf","./svg.js":"b0bf","./tiff":"f270","./tiff.js":"f270","./webp":"cf1e","./webp.js":"cf1e"};function r(e){var t=s(e);return n(t)}function s(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}r.keys=function(){return Object.keys(a)},r.resolve=s,e.exports=r,r.id="cd50"}},[[0,"runtime","vendor"]]]);