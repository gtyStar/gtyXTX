import{A as s,C as y,m as i,I as n,p as A,E}from"./index-CAV45tiV.js";import{E as b}from"./overlay-DWiFZyQ3.js";import"./button-BXmTk8Vj.js";import"./input-BSjNDvof.js";const S=()=>s({url:"/member/cart"}),x=(t,l)=>s({url:"/member/cart",method:"post",data:{skuId:t,count:l}}),B=(t,l,r)=>s({url:"/member/cart/merge",method:"post",data:[{skuId:t,selected:l,count:r}]}),m=t=>s({url:"/member/cart",method:"delete",data:{ids:t}}),L=(t,l,r)=>s({url:`/member/cart/${t}`,method:"put",data:{selected:l,count:r}}),q=y("cart",()=>{const t=i([]),l=async()=>{const e=await S();e!=null&&e.result&&(t.value=e.result,t.value.forEach(a=>{a.loading=!1}))},r=()=>{t.value.forEach(e=>{e.selected=!1}),c.value=!1},v=n(()=>t.value.reduce((e,a)=>e+a.count,0)),C=n(()=>t.value.reduce((e,a)=>e+a.count*a.nowPrice,0)),h=async e=>{t.value.find(u=>e.skuId===u.skuId)?(await B(e.skuId,e.selected,e.count),l()):(await x(e.skuId,e.count),l())},o=i(!1),p=async([e])=>{o.value=!0,await m([e]),l(),o.value=!1},w=async(e,a,u)=>{t.value.find(d=>d.skuId===e).loading=!0,u===0?b.confirm("你确定要删除该商品名？","再删就没有了",{confirmButtonText:"删除",cancelButtonText:"再想想",type:"warning"}).then(async()=>{await m([e]),l(),E.success("删除成功")}).catch(()=>{l()}):(await L(e,a,u),await l()),t.value.find(d=>d.skuId===e).loading=!1},c=i(!1),g=()=>{c.value=!c.value,t.value.forEach(e=>{e.selected=c.value})};A(t,()=>{t.value.length===0&&(c.value=!1)});const f=()=>{console.log(1),t.value.every(e=>e.selected===!0)?c.value=!0:c.value=!1},I=e=>{t.value[e].selected=!t.value[e].selected,f()},P=n(()=>t.value.filter(e=>e.selected===!0).reduce((e,a)=>e+a.count,0)),k=n(()=>t.value.filter(e=>e.selected===!0).reduce((e,a)=>e+a.count*a.nowPrice,0));return{cartList:t,getCartList:l,allCount:v,allPrice:C,addCart:h,delCart:p,loading:o,updateCart:w,singleCheck:I,allCheckSelected:c,isAllSelected:f,allCheck:g,selectedCount:P,selectedPrice:k,clearCheck:r}});export{q as u};
