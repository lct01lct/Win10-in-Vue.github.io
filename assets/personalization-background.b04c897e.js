import{c as S}from"./index.vue_vue_type_style_index_0_lang.7537f5c1.js";import{R as I}from"./index.c9f77b22.js";import{_ as C,u as U}from"./index.5d766133.js";import{a,m as o,n as B,d as V,g as b,a8 as z,_ as N,K as j,q as n,v as y,u as m,O as p,P as $,G as A,M,s as E,w as x,x as R,a9 as O,j as W,B as h,X as D,C as F,F as L}from"./vendor.50d91a69.js";import{U as T}from"./upload-file.6c143b9d.js";const q=""+new URL("preview-default.a9153e88.png",import.meta.url).href;const G={},K={class:"button"};function P(s,d){return a(),o("div",K,[B(s.$slots,"default",{},void 0,!0)])}const X=C(G,[["render",P],["__scopeId","data-v-d25bfd69"]]),H=s=>(x("data-v-00943398"),s=s(),R(),s),J={class:"select__content"},Q=H(()=>n("span",{class:"iconfont icon-xiangxia"},null,-1)),Y=["onClick"],Z=V({__name:"select",props:{modelValue:{},options:{}},emits:["update:modelValue"],setup(s,{emit:d}){const v=c=>{d("update:modelValue",c.value),l.value=!1},l=b(!1),f=z(),r=N(f,()=>{l.value=!1});return j(()=>{r==null||r()}),(c,g)=>(a(),o("div",{class:"select",onClick:g[0]||(g[0]=u=>l.value=!m(l))},[n("span",J,y(c.modelValue),1),Q,m(l)?(a(),o("div",{key:0,class:"option-list",ref_key:"listRef",ref:f},[(a(!0),o(p,null,$(c.options,u=>(a(),o("div",{class:A(["option-item",{active:u.value===c.modelValue}]),onClick:M(e=>v(u),["stop"])},y(u.label),11,Y))),256))],512)):E("",!0)]))}});const ee=C(Z,[["__scopeId","data-v-00943398"]]),w=s=>(x("data-v-1f179155"),s=s(),R(),s),se={class:"preview"},te=["src"],ae=w(()=>n("img",{class:"default-img",src:q,alt:""},null,-1)),oe=w(()=>n("div",{class:"item-title"},"\u80CC\u666F",-1)),le=w(()=>n("div",{class:"item-title"},"\u9009\u62E9\u56FE\u7247",-1)),ne={class:"wallpaper-list"},ie=["onClick"],ce=["src"],ue={key:1,class:"item-title"},re=V({__name:"personalization-background",setup(s){const d=U(),v=O(d,"user"),l=b("\u56FE\u7247"),f=[{label:"\u56FE\u7247",value:"\u56FE\u7247"},{label:"\u7EAF\u8272",value:"\u7EAF\u8272"}],r=W([]);(async()=>{var t;const e=await I();(t=e==null?void 0:e.data)!=null&&t.wallpapers&&r.push(...e.data.wallpapers)})();const c=async e=>{await u(e)},g=async e=>{await u(e)},u=async e=>{var i;const t=await S({wallpaper:e}),_=(i=t==null?void 0:t.data)==null?void 0:i.user;_&&d.setUser(_)};return(e,t)=>{var _;return a(),o(p,null,[n("div",se,[n("img",{class:"preview-img",src:(_=v.value)==null?void 0:_.wallpaper,alt:""},null,8,te),ae]),oe,h(ee,{modelValue:m(l),"onUpdate:modelValue":t[0]||(t[0]=i=>D(l)?l.value=i:null),options:f},null,8,["modelValue"]),m(l)==="\u56FE\u7247"?(a(),o(p,{key:0},[le,n("div",ne,[(a(!0),o(p,null,$(m(r),i=>{var k;return a(),o(p,null,[i!==((k=v.value)==null?void 0:k.wallpaper)?(a(),o("div",{key:0,class:"wallpaper-item",onClick:de=>c(i)},[n("img",{src:i,alt:"",class:"wallpaper-img"},null,8,ce)],8,ie)):E("",!0)],64)}),256))]),h(T,{onChange:g,accept:".png,.jpg,jpeg,svg"},{default:F(()=>[h(X,{onClick:t[1]||(t[1]=()=>{})},{default:F(()=>[L("\u6D4F\u89C8")]),_:1})]),_:1})],64)):(a(),o("div",ue,"\u9009\u62E9\u4F60\u7684\u80CC\u666F\u8272"))],64)}}});const ge=C(re,[["__scopeId","data-v-1f179155"]]);export{ge as default};
