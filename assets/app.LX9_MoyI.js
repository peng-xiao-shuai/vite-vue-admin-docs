import{d as h,a3 as j,a4 as E,x as N,a5 as z,h as H,u as k,C as i,o as r,b as d,w as l,k as c,J as M,e as x,c as A,D as U,F as G,H as p,a6 as T,a7 as w,l as b,T as J,n as W,p as q,m as Q,_ as X,t as g,r as Y,a as D,a0 as v,s as C,a8 as Z,a9 as K,aa as ee,ab as te,ac as ne,ad as oe,ae,af as se,ag as ce,ah as le,j as ie,y as re,ai as pe,aj as ue,ak as de,al as _e}from"./chunks/framework.k1417hkB.js";import{t as P}from"./chunks/theme.J9iC9KMO.js";import{CaretTop as me,Warning as fe}from"./chunks/index.F3TmsCSr.js";const he=e=>(q("data-v-4e2812f2"),e=e(),Q(),e),ve=["innerHTML"],ye={class:"code-operate"},ge={class:"code-operate-demo"},Ce={class:"code-operate-btn"},be=["onClick"],Ee=["innerHTML"],Te=he(()=>c("span",null,"隐藏源代码",-1)),we=h({__name:"vp-demo",props:{demos:{},source:{},path:{},rawSource:{},description:{}},setup(e){const t=j(),n=e,o=E({});N(n.demos,()=>{Object.keys(n.demos).forEach(s=>{setTimeout(async()=>{n.demos[s]().then(u=>{Object.assign(o,{[s.replace("../../examples/","").replace(".vue","")]:u.default})})})})},{immediate:!0});const{copy:a,isSupported:y}=z({source:decodeURIComponent(n.rawSource),read:!1}),I=async()=>{const{$message:s}=t.appContext.config.globalProperties;y||s.error("复制失败！");try{await a(),s.success("复制成功！")}catch(u){s.error(u.message)}},m=H(!1),O=E([{icon:"icon-github",label:"在 github 编辑",type:"edit"},{icon:"icon-fuzhi",label:"复制代码",type:"copy"},{icon:"icon-code",label:"查看源代码",type:"code"}]),{site:R}=k(),$=s=>{switch(s.type){case"edit":window.open("https://github.com/peng-xiao-shuai"+R.value.base+"edit/main/examples/"+n.path+".vue");break;case"copy":I();break;case"code":m.value=!m.value;break}};return(s,u)=>{const V=i("el-tooltip"),B=i("ElCollapseTransition"),L=i("ElIcon"),F=i("ClientOnly");return r(),d(F,null,{default:l(()=>[c("p",{text:"sm",innerHTML:decodeURIComponent(s.description)},null,8,ve),c("div",ye,[c("div",ge,[o[s.path]?(r(),d(M(o[s.path]),{key:0})):x("",!0)]),c("div",Ce,[(r(!0),A(G,null,U(O,f=>(r(),d(V,{key:f.label,effect:"dark",content:f.label,placement:"bottom-start"},{default:l(()=>[c("i",{class:W(f.icon),onClick:je=>$(f)},null,10,be)]),_:2},1032,["content"]))),128))]),p(B,null,{default:l(()=>[T(c("div",{class:"code-box",innerHTML:decodeURIComponent(s.source)},null,8,Ee),[[w,m.value]])]),_:1}),p(J,{name:"el-fade-in-linear"},{default:l(()=>[T(c("div",{class:"hidden-code",onClick:u[0]||(u[0]=f=>m.value=!1)},[p(L,{size:16},{default:l(()=>[p(b(me))]),_:1}),Te],512),[[w,m.value]])]),_:1})])]),_:1})}}}),ke=X(we,[["__scopeId","data-v-4e2812f2"]]),xe={__name:"vp-layout",setup(e){const{Layout:t}=P;return(n,o)=>(r(),d(b(t)))}},Ae={class:"inline-flex items-center"},De={class:"api-typing mr-1"},Pe={class:"m-1"},Se={style:{color:"var(--code-tooltip-color)","background-color":"var(--code-tooltip-bg-color)"}},Ie=h({__name:"vp-api-typing",props:{type:String,details:String},setup(e){return(t,n)=>{const o=i("ElButton"),a=i("ElTooltip"),y=i("ClientOnly");return r(),A("span",Ae,[c("code",De,g(e.type),1),p(y,null,{default:l(()=>[e.details?(r(),d(a,{key:0,effect:"light",trigger:"click"},{content:l(()=>[Y(t.$slots,"default",{},()=>[c("div",Pe,[c("code",Se,[c("b",null,g(e.details),1)])])])]),default:l(()=>[p(o,{text:"",icon:b(fe),size:"small",class:"p-2 text-4 button-tooltip"},null,8,["icon"])]),_:3})):x("",!0)]),_:3})])}}}),Oe=h({__name:"vp-tag",props:{type:String,content:String},setup(e){return(t,n)=>{const o=i("ElTag"),a=i("ClientOnly");return r(),d(a,null,{default:l(()=>[p(o,{size:"small",type:e.type,class:"mx-1",effect:"light",round:""},{default:l(()=>[D(g(e.content),1)]),_:1},8,["type"])]),_:1})}}}),Re=h({setup(){return()=>p("div",null,[D("暂无车型数据!!!!!")])}}),$e={...P,Layout:xe,enhanceApp({app:e,router:t,siteData:n}){e.component("Demo",ke),e.component("Tag",Oe),e.component("ApiTyping",Ie),typeof window<"u"&&(v(()=>import("./chunks/index.OwnBhpxL.js"),__vite__mapDeps([0,1,2,3])).then(o=>{e.use(o)}),v(()=>import("./chunks/index.vN2mqS8b.js"),__vite__mapDeps([4,3,5,1,2])).then(o=>{v(()=>import("./chunks/packages.njg6J3QJ.js"),__vite__mapDeps([])).then(({LangKey:a})=>{e.use(o.default,{emptyElement:Re,locale:{en:{[a.NoData]:"空",[a.PackUp]:"收起",[a.ReadFullText]:"展开阅读全文"},"zh-cn":{[a.NoData]:"空",[a.PackUp]:"收起",[a.ReadFullText]:"展开阅读全文"}}})})}))}};function S(e){if(e.extends){const t=S(e.extends);return{...t,...e,async enhanceApp(n){t.enhanceApp&&await t.enhanceApp(n),e.enhanceApp&&await e.enhanceApp(n)}}}return e}const _=S($e),Ve=h({name:"VitePressApp",setup(){const{site:e}=k();return ie(()=>{re(()=>{document.documentElement.lang=e.value.lang,document.documentElement.dir=e.value.dir})}),pe(),ue(),de(),_.setup&&_.setup(),()=>_e(_.Layout)}});async function Be(){const e=Fe(),t=Le();t.provide(K,e);const n=ee(e.route);return t.provide(te,n),t.component("Content",ne),t.component("ClientOnly",oe),Object.defineProperties(t.config.globalProperties,{$frontmatter:{get(){return n.frontmatter.value}},$params:{get(){return n.page.value.params}}}),_.enhanceApp&&await _.enhanceApp({app:t,router:e,siteData:ae}),{app:t,router:e,data:n}}function Le(){return se(Ve)}function Fe(){let e=C,t;return ce(n=>{let o=le(n),a=null;return o&&(e&&(t=o),(e||t===o)&&(o=o.replace(/\.js$/,".lean.js")),a=v(()=>import(o),__vite__mapDeps([]))),C&&(e=!1),a},_.NotFound)}C&&Be().then(({app:e,router:t,data:n})=>{t.go().then(()=>{Z(t.route,n.site),e.mount("#app")})});export{Be as createApp};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/chunks/index.OwnBhpxL.js","assets/chunks/index.R6aw4cZI.js","assets/chunks/index.F3TmsCSr.js","assets/chunks/framework.k1417hkB.js","assets/chunks/index.vN2mqS8b.js","assets/chunks/packages.njg6J3QJ.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}