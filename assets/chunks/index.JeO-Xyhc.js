import{Edit as a}from"./index.F3TmsCSr.js";import{setData as t}from"./index.vN2mqS8b.js";import{E as d}from"./index.R6aw4cZI.js";import{h as l,am as o}from"./framework.k1417hkB.js";const s=[{id:1,brand:"Audi",engine:"4.0T 600马力 V8",manufacturer:"Audi Sport",manufacturerHref:"https://www.audi.com.hk/hk/web/tc.html",name:"RS 7 Sportback",href:"https://www.audi.com.hk/hk/web/tc/models/a7/rs-7-sportback-2021.html",icon:"viteaodi",price:146.48,switchVal:1,tag:["red","gray"],rate:4.5,content:"奥迪RS7概念车是由一位来自奥地利的设计者设计出来的，该车的车身外观融合了奥迪旗下多款车型的风格。 其侧面车身以及车位的设计与奥迪R8的设计十分相似，而汽车门则采用了兰博基尼经典的剪刀门设计方式。 2013北美（底特律）国际车展于14日开幕，奥迪全新RS7在车展上正式亮相并发布。",videoUrl:"http://tbvideo.ixiaochuan.cn/zyvd/264/89/61/84ca-3e46-11ed-87e3-00163e0e67b8",imageUrl:"https://images.unsplash.com/photo-1606152421802-db97b9c7a11b",data:"2021-12-12",driveType:"4",engineLocation:"前置"},{id:2,brand:"BMW",engine:"4.4T 625马力 V8",manufacturer:"BMW",manufacturerHref:"https://www.bmw.com/en/index.html",name:"BMW 8 Series",href:"https://offers.bmwhk.com/the8/en/?utm_medium=website&utm_source=bmwhk_modelshowroom&utm_campaign=468_Jan2021&utm_content=launch",icon:"vitebaoma",price:196.8,switchVal:0,tag:["white","red"],rate:4.5,content:"宝马M8（BMW M8)是宝马旗下的顶级跑车，采用M部门为其量身打造的4.4T V8双涡轮增压引擎，最大功率可达625马力，峰值扭矩750牛米。这台引擎可以让1.9吨的大家伙在3.2秒内完成0-100加速。M，在宝马车系中代表顶级性能版。",imageUrl:"https://images.unsplash.com/photo-1630037937485-e2da57394d88",data:"2022-01-01",driveType:"4",engineLocation:"前置"},{id:3,brand:"Audi",engine:"5.2L 620马力 V10",manufacturer:"Audi Sport",manufacturerHref:"https://www.audi.com.hk/hk/web/tc.html",name:"R8 V10 performance",href:"https://www.audi.com.hk/hk/web/tc/models/r8/r8-coupe-v10-performance-quattro.html",icon:"viteaodi",price:232.36,switchVal:1,tag:["blue"],rate:5,content:"奥迪R8（Audi R8）是一款中置引擎双座跑车，由德国汽车制造商奥迪于2006年推出，极速达316km/h。奥迪R8是奥迪量产的首款中置引擎超级跑车，基于兰博基尼Gallardo的开发平台，融合了奥迪在多个运动赛事中取胜的经验，技术以及突破传统观念的完美设计。强劲的V8和V10发动机、全时四轮驱动系统和奥迪全铝车身空间框架结构，赋予了奥迪R8出众的动力性能，以及在赛道和公路上的卓越表现。",imageUrl:"https://images.unsplash.com/photo-1614026480418-bd11fdb9fa06",data:"2021-12-12",driveType:"4",engineLocation:"前置"},{id:4}],b=()=>{const i=l([{label:"编号",width:60,props:{prop:"id"}},{label:"制作厂",headerAlign:"left",props:[{type:"href",prop:"manufacturerHref",text:"厂商：",data:t({text:e=>e.manufacturer,property:{underline:!0}})},{prop:"icon",type:"iconfont",text:"车标：",data:t({class:"viteIcon",style:{height:"40px",lineHeight:"40px",fontSize:"40px"}})}]},{label:"名称",headerAlign:"left",width:200,props:[{text:"品牌：",prop:"brand",render:(e,r)=>e("b",`${r.brand}（${{Audi:"奥迪",BMW:"宝马"}[r.brand]})`)},{type:"href",prop:"href",text:"型号：",data:t({text:e=>e.name})}]},{label:"图片",props:[{type:"image",prop:"imageUrl",data:t({style:{borderRadius:"10px"},property:({row:e,index:r,props:p})=>({})})}]},{label:"售价",props:[{text:"收藏：",prop:"switchVal",type:"switch",data:t({property:{inactiveValue:0,activeValue:1}})},{prop:"price",type:"input",data:t({slot:"append",symbol:"万",style:{width:"100%"},property({row:e,index:r,props:p}){return{placeholder:"售价"}}})}]},{label:"发动机名称",width:200,headerAlign:"left",isShowOrFilterColumn:!1,props:[{type:"text",prop:"engine",text:"发动机：",filters:e=>e.engine},{type:"rate",prop:"rate",text:"评 分：",data:t({property:{disabled:!1}})}]},{label:"宣传视频",width:200,isShowOrFilterColumn:"show",defaultShow:!1,props:{prop:"videoUrl",type:"video",data:t({style:{width:"100%",height:"117px",borderRadius:"10px",overflow:"hidden",border:"1px solid #ccc"},property:({row:e})=>({poster:e.imageUrl,controls:!0})})}},{label:"简介",width:"300px",isShowOrFilterColumn:"filter",props:[{prop:"content",type:"text",data:t({develop:!0,line:2})}]},{label:"操作",width:250,fixed:"right",isShowOrFilterColumn:!1,props:[{type:"btn",prop:"btn",data:t([{tip:"编辑按钮",params:{emit:"update"},beforeClick({row:e,index:r,btnIndex:p,props:c,params:h},n){d.confirm("正在进行修改操作，确认要修改？","提示",{confirmButtonText:"OK",cancelButtonText:"Cancel",type:"warning"}).then(()=>{n(!0)})},property:{type:"info",icon:o(a)}},[{text:"更多",isMore:!0,property:{icon:o(a)}},{text:"删除",params:"remove",property:{type:"danger",icon:o(a)}}]])}]}]);return{lists:s,headers:i}};export{b as u};