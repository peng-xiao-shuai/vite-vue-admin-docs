import{u as l}from"./index._jrhSAKb.js";import{d as p,a4 as c,C as u,o as m,b as _,l as f}from"./framework.EefRx2cv.js";import"./index.PeGM9mKG.js";import"./index.1p2vzd79.js";import"./packages.njg6J3QJ.js";import"./index.SaNcpHTn.js";const C=p({__name:"basic-api",setup(g){const{headers:a,lists:o}=l(),i=c({name:""}),n=e=>new Promise(s=>{setTimeout(()=>{const t=o.filter((d,r)=>r>=(e.pageNo-1)*e.pageSize&&r<e.pageNo*e.pageSize);s({data:{result:{rows:t,total:o.length},message:"成功",code:"200"}})})});return(e,s)=>{const t=u("PowerfulTable");return m(),_(t,{header:f(a),"pagination-property":{pageSizes:[2,5,7]},"list-request":{listApi:n,listQuery:i}},null,8,["header","list-request"])}}});export{C as default};
