import{d as a,h as i,j as s,a0 as p,C as n,o as u,b as f,l as d}from"./framework.k1417hkB.js";import{u as m}from"./index.JeO-Xyhc.js";import"./index.F3TmsCSr.js";import"./index.vN2mqS8b.js";import"./packages.njg6J3QJ.js";import"./index.R6aw4cZI.js";const T=a({__name:"filters",setup(b){const t=i([]),{lists:o}=m();return s(()=>{p(()=>import("./index.vN2mqS8b.js"),__vite__mapDeps([0,1,2,3,4])).then(({setData:l})=>{t.value=[{label:"发动机名称",isShowOrFilterColumn:"filter",props:[{type:"text",prop:"engine",filtersType:"input",filters:r=>r.engine}]},{label:"名称",defaultFilter:!0,props:[{text:"品牌：",prop:"brand",filterItem:!0,filtersType:"select",filters:[{key:"Audi",value:"奥迪"},{key:"BMW",value:"宝马"}],render:(r,e)=>r("b",`${e.brand||""}（${{Audi:"奥迪",BMW:"宝马",undefined:""}[e.brand]})`)}]},{label:"外观颜色(只显示两个)",width:200,overflowTooltip:!1,isShowOrFilterColumn:"filter",props:[{prop:"tag",type:"tag",filtersType:"select",data:l({number:2,style:{color:"white"},color:(r,e)=>({red:"#BD3145",blue:"#008DAF",white:"#eee"})[e]||e}),filters:[{key:"red",value:"红色"},{key:"black",value:"黑色"},{key:"gray",value:"灰色"}],reserve:"<i><b>VNode</b></i>"}]},{label:"发售日期（插槽）",isShowOrFilterColumn:"filter",width:"180px",props:[{prop:"data",filtersType:"date"}]}]})}),(l,r)=>{const e=n("PowerfulTable");return u(),f(e,{ref:"PowerfulTable",list:d(o),header:t.value},null,8,["list","header"])}}});export{T as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/chunks/index.vN2mqS8b.js","assets/chunks/framework.k1417hkB.js","assets/chunks/packages.njg6J3QJ.js","assets/chunks/index.R6aw4cZI.js","assets/chunks/index.F3TmsCSr.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}