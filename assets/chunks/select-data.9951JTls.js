import{u as p}from"./index.JeO-Xyhc.js";import{d as c,a4 as m,h as u,j as g,C as f,o as _,b as d,l as i}from"./framework.k1417hkB.js";import"./index.F3TmsCSr.js";import"./index.vN2mqS8b.js";import"./packages.njg6J3QJ.js";import"./index.R6aw4cZI.js";const v=c({__name:"select-data",setup(h){const{headers:l,lists:o}=p(),a=m({pageNum:1,pageSize:2}),s=u([]),r=e=>{Object.assign(a,e==null?void 0:e.params),e!=null&&e.params&&console.log("page",a,"选中数组",e.select),setTimeout(()=>{s.value=o.filter((n,t)=>t>=(a.pageNum-1)*a.pageSize&&t<a.pageNum*a.pageSize)},200)};return g(()=>{r()}),(e,n)=>{const t=f("PowerfulTable");return _(),d(t,{ref:"PowerfulTable",list:s.value,isSelect:"",selectData:[{ID:1},{ID:2},{ID:3}],"pagination-property":{total:i(o).length,pageSizes:[2,5,7]},selectCompare:["ID","id"],header:i(l),onSizeChange:r},null,8,["list","pagination-property","header"])}}});export{v as default};