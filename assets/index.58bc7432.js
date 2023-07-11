var Ee=Object.defineProperty;var ge=(t,n,e)=>n in t?Ee(t,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[n]=e;var f=(t,n,e)=>(ge(t,typeof n!="symbol"?n+"":n,e),e);import{d as K,o as be,r as Fe,c as Be,a as b,b as Ce,e as De,f as ke,g as x,h as Te,i as U,j as z,t as Le,l as Me,k as Ie,m as C,n as $e,p as $,q as le,u as Se,s as Q,v as Oe,w as Pe,x as Re,y as _,z as Ae,A as Ke}from"./vendor.ec61fd8b.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function e(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerpolicy&&(r.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?r.credentials="include":o.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(o){if(o.ep)return;o.ep=!0;const r=e(o);fetch(o.href,r)}})();const Ue="modulepreload",ze=function(t,n){return new URL(t,n).href},Z={},Y=function(n,e,s){if(!e||e.length===0)return n();const o=document.getElementsByTagName("link");return Promise.all(e.map(r=>{if(r=ze(r,s),r in Z)return;Z[r]=!0;const i=r.endsWith(".css"),a=i?'[rel="stylesheet"]':"";if(!!s)for(let d=o.length-1;d>=0;d--){const l=o[d];if(l.href===r&&(!i||l.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${r}"]${a}`))return;const u=document.createElement("link");if(u.rel=i?"stylesheet":Ue,i||(u.as="script",u.crossOrigin=""),u.href=r,document.head.appendChild(u),i)return new Promise((d,l)=>{u.addEventListener("load",d),u.addEventListener("error",()=>l(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>n())},je=K({__name:"App",setup(t){const n=e=>e.preventDefault();return be(()=>{document.addEventListener("selectstart",n),document.addEventListener("contextmenu",n),document.addEventListener("keydown",e=>{e.altKey&&e.keyCode===37&&n(e),e.altKey&&e.keyCode===38&&n(e),e.altKey&&e.keyCode===39&&n(e),e.altKey&&e.keyCode===40&&n(e)})}),(e,s)=>{const o=Fe("router-view");return b(),Be(o)}}}),D=Ce({history:De(),routes:[]}),Ne=t=>(D.addRoute({path:"/",component:t.loginComp,name:"Login"}),D.addRoute({path:"/home",component:t.homeComp,name:"Home"}),D);var ce=(t=>(t.Admin="admin",t.User="user",t))(ce||{}),We=(t=>(t.Admin="\u7BA1\u7406\u5458",t.User="\u7528\u6237",t))(We||{});const Ve=""+new URL("user_avatar_default.98817a57.png",import.meta.url).href,qe=""+new URL("wallpaper_default.86032ef7.jpg",import.meta.url).href,X="token",He=ke("user",()=>{const t=x("user"),n=x("123456789"),e=x(null),s=x("");return{username:t,password:n,user:e,token:s,setToken:a=>{s.value=a,localStorage.setItem(X,a)},getToken:()=>s.value||localStorage.getItem(X),setUser:a=>{a?e.value={...a,avatar:new URL(a.avatar).href,wallpaper:new URL(a.wallpaper).href}:e.value=Ge}}}),Ge={_id:String(Math.random()),username:"user",avatar:Ve,email:"user@qq.com",role:ce.User,wallpaper:qe},de=Te.create({baseURL:"http://127.0.0.1:3000/api/v1",timeout:2e3,withCredentials:!0});de.interceptors.request.use(t=>t);de.interceptors.response.use(t=>Promise.resolve(t),t=>{const n=t.response.status,e=He();switch(n){case 401:case 403:D.push("/"),e.user=null,e.setToken("Invalid token");break}return Promise.reject(t)});const Qe=["get","post","delete","patch","put"],J=t=>Promise.resolve(null);Qe.forEach(t=>{J[t]=(n,e,s,o)=>{const r=(o==null?void 0:o.headers)||{};return s==="form"&&(r["Content-Type"]="multipart/form-data"),J({method:t,url:n,data:e,...o,headers:r})}});const Ze=["\u65E5","\u4E00","\u4E8C","\u4E09","\u56DB","\u4E94","\u516D"],me=()=>U(new Date),m=t=>t<10?"0"+t:String(t),pe=t=>`\u661F\u671F${Ze[t]}`,jt=(t,n,e="day")=>U(t).diff(n,e),Nt=(t=U())=>`${t.year()}-${m(t.month()+1)}-${m(t.date())}`,he=[];setInterval(()=>{he.forEach(t=>t())},24*60*60*1e3);const Wt=t=>{he.push(t)},y=me(),Ye=z({hour:m(y.hour()),minute:m(y.minute()),second:m(y.second()),year:String(y.year()),month:m(y.month()+1),date:m(y.date()),day:pe(y.day()),lunar:"\u4E00\u6708\u521D\u4E00"}),{hour:j,minute:N,month:k,date:T,day:Xe,year:L,second:Je,lunar:et}=Le(Ye);setInterval(()=>{const t=me();j.value=m(t.hour()),N.value=m(t.minute()),L.value=String(t.year()),k.value=m(t.month()+1),T.value=m(t.date()),Xe.value=pe(t.day()),Je.value=m(t.second()),et.value=Me.getLunar(L.value,k.value,T.value).dateStr},1e3);const Vt=t=>m(t.date())===T.value&&m(t.month()+1)===k.value&&String(t.year())===L.value,fe=`${L.value}-${k.value}-${T.value}`,tt=["mp4","mp3","html","txt","js","ts","css",""];class w{constructor(n){f(this,"name");f(this,"extension");f(this,"size");f(this,"createdAt");const{name:e,extension:s,size:o,createdAt:r}=n;this.name=e,this.extension=s,this.size=o||"0KB",this.createdAt=r||`${fe} ${j.value}:${N.value}`}setName(n){this.name=n}get fullName(){return`${this.name}${this.extension?`.${this.extension}`:""}`}set fullName(n){const e=n.split(".")[0],s=n.split(".")[1]||"";if(tt.includes(s))this.extension=s,this.name=e;else throw new Error(`\u65E0\u6CD5\u8BBE\u7F6E .${s} \u7684\u540E\u7F00\u540D`)}}class p{constructor(n,e){f(this,"name");f(this,"size","0KB");f(this,"children",[]);f(this,"parent");f(this,"createdAt");const{name:s,children:o,createdAt:r}=n;this.name=s,this.parent=e,this.createdAt=r||`${fe} ${j.value}:${N.value}`,this.initChildren(o),this.initSize()}initChildren(n){n.forEach(e=>{e.extension?this.children.push(new w(e)):this.children.push(new p(e,this))})}initSize(){this.size=nt(this.children.reduce((n,e)=>ve(n,e.size),"0KB"))}addFolder(n="\u65B0\u5EFA\u6587\u4EF6\u5939"){const e=s=>{let o=s;for(;te(this.children,o);)o=ne(o);return o};return n instanceof p?ee(this,n.size)?"\u8D85\u51FA\u5F53\u524D\u78C1\u76D8\u5185\u5B58":(n.name=e(n.name),this.children.push(n),n.name):(n=e(n),this.children.push(new p({name:n,children:[]},this)),n)}addFile(n,e="0KB"){if(ee(this,e))return"\u8D85\u51FA\u5F53\u524D\u78C1\u76D8\u5185\u5B58";const s=o=>(te(this.children,o)&&(o=ne(o)),o);if(n instanceof w)n.name=s(n.name),this.children.push(n);else{const o=new w({name:"",extension:"",size:e});o.fullName=n,o.name=s(o.name),this.children.push(o)}}removeFolder(n){let e=-1;n instanceof p?e=this.children.findIndex(s=>s===n):e=this.children.findIndex(s=>{if(s instanceof p)return s.name===n}),e>-1&&this.children.splice(e,1)}removeFile(n){let e=-1;n instanceof w?e=this.children.findIndex(s=>s===n):e=this.children.findIndex(s=>{if(s instanceof w)return s.name===n}),e>-1&&this.children.splice(e,1)}hasParentFolder(n){let e=this;for(;e;){if(e===n)return!0;e=e.parent}return!1}get path(){return`${this.parent.path}${this.name}\\`}static search(n){const e=[],s=o=>{for(const r of o)r.name.toLowerCase().match(n.toLowerCase())&&e.push(r),st(r)||s(r.children)};return s(se),e}static findByPath(n){const e=n.split("\\").filter(a=>a),s=se.find(a=>a.name.match(/[A-Z]:/)[0]===e[0]),o=new Set([]);if(!s)return null;let r=1,i=s;for(;r<e.length;){o.add(i);const a=i.children.find(c=>o.has(i)?c.name===e[r]:!1);if(a)i=a,r++;else return null}return i}}const ee=(t,n)=>{let e=t;for(;e.parent;)e=e.parent;return M(ve(e.size,n))>M(e.memory)};class W extends p{constructor(e){const{name:s,memory:o,children:r}=e;super({name:s,children:r},null);f(this,"memory");this.memory=o}get path(){return`${this.name.match(/[A-Z]:/)[0]}\\\\`}}const S=["B","KB","MB","GB","TB"],O=1024,ve=(t,n)=>M(t)+M(n)+"B",nt=t=>{const n=ye(t);let e=n.size,s=S.indexOf(n.unit);for(;e>=O;)e/=O,s++;return e+S[s]};function ye(t){const n={size:0,unit:""};return n.size=parseFloat(t),n.unit=t.match(/[a-z|A-Z]+/gi)[0].toUpperCase(),n}function M(t){const n=ye(t),e=S.indexOf(n.unit);return n.size*Math.pow(O,e)}const te=(t,n)=>t.findIndex(e=>e.name===n)>-1,ne=t=>`${t} - \u526F\u672C`,st=t=>t instanceof w,qt=t=>t instanceof p,ot=[{name:"Windows (C:)",memory:"16GB",children:[{name:"Adobe",children:[]},{name:"Office",children:[]},{name:"Users",children:[]},{name:"DeskTop",children:[{name:"Video",posIdx:11,children:[{name:"QQ Video",children:[{name:"\u5468\u6770\u4F26\u7684\u4E13\u8F91",children:[{extension:"mp4",name:"\u9752\u82B1\u74F7",size:"50KB"},{extension:"mp4",name:"\u4E00\u8DEF\u5411\u5317",size:"56KB"}]},{name:"\u6570\u5B57\u5531\u7247",children:[{name:"bin",children:[]},{name:"pacakges",children:[{name:"pg-1",children:[]},{name:"pg-2",children:[]}]}]}]},{name:"Cloud Video",children:[{name:"\u5468\u6770\u4F26\u7684\u4E13\u8F91",children:[{extension:"mp4",name:"\u9752\u82B1\u74F7",size:"56KB"},{extension:"mp4",name:"\u4E00\u8DEF\u5411\u5317",size:"56KB"}]}]},{extension:"mp4",name:"\u9752\u82B1\u74F7",size:"50KB"}]},{name:"Music",posIdx:10,children:[{name:"QQ Music",children:[{name:"\u5468\u6770\u4F26\u7684\u4E13\u8F91",children:[{extension:"mp4",name:"\u9752\u82B1\u74F7",size:"50KB"},{extension:"mp4",name:"\u4E00\u8DEF\u5411\u5317",size:"56KB"}]}]},{name:"Cloud Music",children:[{name:"\u5468\u6770\u4F26\u7684\u4E13\u8F91",children:[{extension:"mp4",name:"\u9752\u82B1\u74F7",size:"56KB"},{extension:"mp4",name:"\u4E00\u8DEF\u5411\u5317",size:"56KB"}]}]}]}]},{extension:"html",name:"index",size:"11KB"}]},{name:"Data (D:)",memory:"160GB",children:[{name:"Music",children:[{name:"QQ Music",children:[{name:"\u5468\u6770\u4F26\u7684\u4E13\u8F91",children:[{extension:"mp4",name:"\u9752\u82B1\u74F7",size:"100GB"},{extension:"mp4",name:"\u4E00\u8DEF\u5411\u5317",size:"56KB"}]}]},{name:"Cloud Music",children:[{name:"\u5468\u6770\u4F26\u7684\u4E13\u8F91",children:[{extension:"mp4",name:"\u9752\u82B1\u74F7",size:"56KB"},{extension:"mp4",name:"\u4E00\u8DEF\u5411\u5317",size:"56KB"}]}]}]},{extension:"html",name:"index",size:"20KB"}]}],I=z([]);setTimeout(()=>{const t=p.search("desktop")[0];I.push(t);const n=p.findByPath("C:\\");I.push(n);const e=p.findByPath("D:\\");I.push(e)});const se=z(ot.map(t=>new W(t))),rt=W.search("DeskTop")[0];rt.addFolder();W.search("DeskTop");const Ht=()=>p.search("desktop")[0],at=Ie();const it={name:"WinBtn"},ut=K({...it,props:{borderStyle:{type:String,default:"none"},bgColor:{type:String,default:"#edeaea4d"},opacity:{type:String,default:"1"},width:{type:Number,default:0},height:{type:Number,default:0},color:{type:String,default:"#fff"}},setup(t){const{borderStyle:n,bgColor:e,opacity:s,width:o,height:r,color:i}=t,a=()=>({border:n,backgroundColor:e,opacity:s,width:o?o+"px":"auto",height:r?r+"px":"auto",color:i});return(c,u)=>(b(),C("button",{class:"btn",style:$(a())},[$e(c.$slots,"default",{},void 0,!0)],4))}});const _e=(t,n)=>{const e=t.__vccOpts||t;for(const[s,o]of n)e[s]=o;return e},lt=_e(ut,[["__scopeId","data-v-7d855f7d"]]),ct=Object.freeze(Object.defineProperty({__proto__:null,default:lt},Symbol.toStringTag,{value:"Module"})),dt=t=>(Pe("data-v-5758b5ee"),t=t(),Re(),t),mt=dt(()=>le("input",{type:"checkbox",name:"check",class:"radio-original"},null,-1)),pt={key:0,class:"radio-label"},ht={name:"WinRadio"},ft=K({...ht,props:{modelValue:{type:Boolean,required:!0},label:{type:String},size:{type:Number,default:18}},emits:["update:modelValue"],setup(t,{emit:n}){const s=x(t.modelValue),o=()=>{s.value=!s.value,n("update:modelValue",s.value)};return(r,i)=>(b(),C("div",{class:"win-radio-wrapper",onClick:o},[mt,le("span",{class:"radio-inner",style:$({width:t.size+"px",height:t.size+"px"})},[Se(s)?(b(),C("i",{key:0,class:"iconfont icon-duigou",style:$({fontSize:t.size+"px"})},null,4)):Q("",!0)],4),t.label?(b(),C("span",pt,Oe(t.label),1)):Q("",!0)]))}});const vt=_e(ft,[["__scopeId","data-v-5758b5ee"]]),yt=Object.freeze(Object.defineProperty({__proto__:null,default:vt},Symbol.toStringTag,{value:"Module"})),oe=Object.assign({"./WinBtn/index.vue":ct,"./WinRadio/index.vue":yt}),P=[];for(const t in oe)P.push(oe[t].default);const _t={install(t,n){n&&n.components?n.components.forEach(e=>{P.forEach(s=>{e===s.name&&t.component(s.name,s)})}):P.forEach(e=>{t.component(e.name,e)})}},wt="drag",xt={async mounted(t,n){await _();const e=n.value?Et(t,n.value.tar):t;if(!e)throw new Error("Unable to find the target node of draggable!");const s=o=>{var l,v;(v=(l=n.value)==null?void 0:l.onMousedownCb)==null||v.call(l,e);const r={x:o.pageX,y:o.pageY},i=window.getComputedStyle(e,null),a={left:parseFloat(i.left),top:parseFloat(i.top)},c={x:0,y:0},u=h=>{const g={x:h.pageX,y:h.pageY};c.x=g.x-r.x,c.y=g.y-r.y,e.style.left=a.left+c.x+"px",e.style.top=a.top+c.y+"px"},d=()=>{n.value&&n.value.movedFn&&n.value.movedFn(a.left+c.x,a.top+c.y),document.removeEventListener("mousemove",u),document.removeEventListener("mouseup",d)};document.addEventListener("mousemove",u),document.addEventListener("mouseup",d)};t.addEventListener("mousedown",s)}},Et=(t,n)=>{let e=t;for(;!e.classList.contains(n.slice(1));)if(e.parentElement)e=e.parentElement;else return null;return e},gt=Object.freeze(Object.defineProperty({__proto__:null,name:wt,directive:xt},Symbol.toStringTag,{value:"Module"})),bt="infinite-scroll",re="scope",Ft=(t,n)=>{const e=n.value.load,s=n.value.initTop||50,o=n.value.scrollRate||5,r=n.value.scrollCb||(()=>{}),i=n.value.scrollingCb||(()=>{}),a=50,c=s<a?a:s;return{fn:e,initTop:c,rate:o,scrollCb:r,scrollingCb:i}},Bt={async mounted(t,n){await _();const{fn:e,initTop:s,rate:o,scrollCb:r,scrollingCb:i}=Ft(t,n);t.scrollTop=s;let a=0,c=0,u=x(!1),d;Ae(u,()=>{i(u.value)});const l=async v=>{if(u.value=!0,d&&clearTimeout(d),d=setTimeout(()=>{u.value=!1},200),t.clientHeight+t.scrollTop>=t.scrollHeight){for(let h=0;h<o;h++)e("down");await _()}if(t.scrollTop<=10){for(let h=0;h<o;h++)e("up"),c+=s;await _(),t.scrollTop=o*s}a=t.scrollTop-s-c,r(a<0?Math.ceil(a):Math.floor(a))};t[re]={onScroll:l},t.addEventListener("scroll",l)},unmounted(t){const{onScroll:n}=t[re];t.removeEventListener("scroll",n)}},Ct=Object.freeze(Object.defineProperty({__proto__:null,name:bt,directive:Bt},Symbol.toStringTag,{value:"Module"})),Dt="resize",we=Symbol("RESIZED_EL_SCOPE"),kt={async mounted(t,{value:n}){await _(),E.push(t),t[we]={onMousedownCb:n==null?void 0:n.onMousedownCb},E.length===1&&(document.addEventListener("mousemove",ae),document.addEventListener("mousedown",ie,!0));const e=n&&n.movedFn||(()=>{}),s=n&&n.movingFn||(()=>{}),o=n&&n.onMousedownCb||(()=>{}),r=n&&n.border||{minWidth:0,minHeight:0};t.style.position="absolute",Lt({el:t,border:r,movedFn:e,movingFn:s,onMousedownCb:o})},unmounted(t){Ot(t),E.length||(document.removeEventListener("mousemove",ae),document.removeEventListener("mousedown",ie,!0))}},E=[],Tt=4;let xe,R=!1;const ae=async t=>{if(await _(),R)return;let n="";const e=document.body;E.some(s=>(xe=s,n=$t({el:s,event:t,regionSize:Tt}),e.style.cursor=n?`${n}-resize`:"default",n))},ie=async t=>{var q,H;await _();const n=xe,e=document.body,s=t.pageX,o=t.pageY,r=e.style.cursor==="default"?"":e.style.cursor.split("-")[0],i=window.getComputedStyle(n,null),a=parseFloat(i.left),c=parseFloat(i.top),u=parseFloat(i.width),d=parseFloat(i.height),l=Mt(n);let v=0,h=0;r&&((H=(q=n[we]).onMousedownCb)==null||H.call(q,n),It(t));const g=G=>{v=G.pageX-s,h=G.pageY-o,St({el:n,resizeDir:r,width:u,height:d,left:a,top:c,offsetX:v,offsetY:h,minWidth:l.border.minWidth,minHeight:l.border.minHeight,movingFn:l.movingFn}),R=!0},V=()=>{document.removeEventListener("mousemove",g),document.removeEventListener("mouseup",V),l.movedFn({width:parseInt(n.style.width),height:parseInt(n.style.height),left:parseInt(n.style.left),top:parseInt(n.style.top)}),R=!1};document.addEventListener("mousemove",g),document.addEventListener("mouseup",V)},A=[],Lt=t=>{A.push(t)},Mt=t=>{const n=A.findIndex(e=>e.el===t);return A[n]},It=t=>{t.stopPropagation()},$t=({el:t,event:n,regionSize:e})=>{const s=window.getComputedStyle(t,null),o=parseFloat(s.width),r=parseFloat(s.height),i=n.pageX-parseFloat(s.left),a=n.pageY-parseFloat(s.top),u=[{dir:"n",cond:a<e&&a>-e&&i>e&&i<o-e},{dir:"s",cond:a>r-e&&a<r+e&&i>e&&i<o-e},{dir:"w",cond:i<e&&i>-e&&a>e&&a<r-e},{dir:"e",cond:i>o-e&&i<o+e&&a>e&&a<r-e},{dir:"nw",cond:a<e&&a>-e&&i<e&&i>-e},{dir:"ne",cond:a<e&&a>-e&&i>o-e&&i<o+e},{dir:"sw",cond:a>r-e&&a<r+e&&i<e&&i>-e},{dir:"se",cond:a>r-e&&a<r+e&&i>o-e&&i<o+e}].find(d=>d.cond);return u?u.dir:""},St=({el:t,resizeDir:n,width:e,height:s,left:o,top:r,offsetX:i,offsetY:a,movingFn:c,minWidth:u=0,minHeight:d=0})=>{const l=new Map;if(l.set("n",()=>{B(s-a,d,()=>{t.style.top=r+a+"px",t.style.height=s-a+"px"})}),l.set("s",()=>{B(s+a,d,()=>{t.style.height=s+a+"px"})}),l.set("w",()=>{B(e-i,u,()=>{t.style.left=o+i+"px",t.style.width=e-i+"px"})}),l.set("e",()=>{B(e+i,u,()=>{t.style.width=e+i+"px"})}),n.length===1)l.get(n)();else if(n.length===2)for(let v of n)l.get(v)();c&&c({width:parseInt(t.style.width),height:parseInt(t.style.height),top:parseInt(t.style.top),left:parseInt(t.style.left)})},B=(t,n,e)=>{t>=n&&e()},Ot=t=>{const n=E.indexOf(t);n>-1&&E.splice(n,1)},Pt=Object.freeze(Object.defineProperty({__proto__:null,name:Dt,directive:kt},Symbol.toStringTag,{value:"Module"})),Rt=(t,n)=>e=>{e.directive(n,t)},ue=Object.assign({"./drag.ts":gt,"./infinite-scroll.ts":Ct,"./resize.ts":Pt}),At=t=>{for(const n in ue){const e=ue[n];Rt(e.directive,e.name)(t)}},F=Ke(je),Kt=Ne({loginComp:()=>Y(()=>import("./index.4768c2f9.js"),["./index.4768c2f9.js","./index.vue_vue_type_style_index_0_lang.aa621cbf.js","./vendor.ec61fd8b.js","./index.70bf3afb.css","./index.0b189d35.css"],import.meta.url),homeComp:()=>Y(()=>import("./index.b8a25e5a.js").then(t=>t.i),["./index.b8a25e5a.js","./vendor.ec61fd8b.js","./index.vue_vue_type_style_index_0_lang.aa621cbf.js","./index.70bf3afb.css","./index.71b05ebf.css"],import.meta.url)});F.use(Kt);F.use(at);F.use(_t);At(F);F.mount("#app");export{p as F,I as O,ce as R,_e as _,k as a,Xe as b,J as c,T as d,qt as e,st as f,Ht as g,j as h,At as i,rt as j,Y as k,Je as l,N as m,et as n,Vt as o,m as p,Nt as q,D as r,Wt as s,fe as t,He as u,jt as v,We as w,L as y};
