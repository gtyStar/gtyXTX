import{E as V}from"./user-D16cWe61.js";import{v as B}from"./loading-PlmugabA.js";import{E as F}from"./empty-DtQ2NcPk.js";import{E as I}from"./button-DXyUaMIX.js";import{E as N}from"./popover-C9s0MQXC.js";import"./popper-BItdtXrr.js";import"./input-Fr5ZrJpL.js";import{E as S}from"./input-number-DFPrsSuX.js";import{E as $}from"./checkbox-CJdlOCNq.js";import{u as R}from"./cartStore-CeBTw3Sb.js";import{_ as j,c as d,a as t,u as a,d as l,F as D,i as P,b as p,t as r,w as c,e as U,r as z,o as u,h as M}from"./index-Db0-QBFv.js";import"./focus-trap-BYf-X9Pz.js";import"./event-BB_Ol6Sd.js";import"./error-Cq9Fpw4b.js";import"./isEqual-Bv58xGq6.js";import"./overlay-i8mQ0pHx.js";import"./vnode-BOkacIak.js";import"./scroll-BRt8ToMc.js";const O={class:"xtx-cart-page"},T={class:"container m-top-20"},q={key:0,class:"cart"},A={width:"120"},G={class:"goods"},H=["src"],J={class:"name ellipsis"},K={class:"tc"},Q={class:"tc"},W={class:"tc"},X={class:"f16 red"},Y={class:"tc"},Z={class:"action"},tt={class:"batch"},et={class:"red"},ot={class:"total"},st={key:1,class:"empty"},nt={colspan:"6"},lt={class:"cart-none"},at=Object.assign({name:"CartList"},{__name:"index",setup(rt){const s=R(),f=(n,e,m)=>{s.updateCart(n,e,m)},v=n=>{s.delCart([n.skuId])},C=(n,e)=>{console.log(n,e),s.singleCheck(n)},g=n=>{console.log(n),s.allCheck()},_=U(),k=()=>{s.cartList.find(n=>n.selected===!0)?_.push("/checkout"):V({message:"您还未选择选择商品",type:"warning"})};return(n,e)=>{const m=$,b=z("RouterLink"),x=S,y=N,h=I,E=F,w=B;return u(),d("div",O,[t("div",T,[a(s).cartList.length?(u(),d("div",q,[t("table",null,[t("thead",null,[t("tr",null,[t("th",A,[l(m,{"model-value":a(s).allCheckSelected,onChange:g},null,8,["model-value"])]),e[1]||(e[1]=t("th",{width:"400"},"商品信息",-1)),e[2]||(e[2]=t("th",{width:"220"},"单价",-1)),e[3]||(e[3]=t("th",{width:"180"},"数量",-1)),e[4]||(e[4]=t("th",{width:"180"},"小计",-1)),e[5]||(e[5]=t("th",{width:"140"},"操作",-1))])]),t("tbody",null,[(u(!0),d(D,null,P(a(s).cartList,(o,L)=>(u(),d("tr",{key:o.id},[t("td",null,[l(m,{"model-value":o.selected,onChange:i=>C(L,i)},null,8,["model-value","onChange"])]),t("td",null,[t("div",G,[l(b,{to:"/"},{default:c(()=>[t("img",{src:o.picture,alt:""},null,8,H)]),_:2},1024),t("div",null,[t("p",J,r(o.name),1)])])]),t("td",K,[t("p",null,"¥"+r(o.price),1)]),t("td",Q,[M(l(x,{min:0,max:o.stock,modelValue:o.count,"onUpdate:modelValue":i=>o.count=i,onChange:i=>f(o.skuId,o.selected,o.count)},null,8,["max","modelValue","onUpdate:modelValue","onChange"]),[[w,o.loading]])]),t("td",W,[t("p",X,"¥"+r((o.price*o.count).toFixed(2)),1)]),t("td",Y,[t("p",null,[l(y,{title:"确认删除吗?","confirm-button-text":"确认","cancel-button-text":"取消",onConfirm:i=>v(o)},{reference:c(()=>e[6]||(e[6]=[t("a",{href:"javascript:;"},"删除",-1)])),_:2},1032,["onConfirm"])])])]))),128))])]),t("div",Z,[t("div",tt,[p(" 共 "+r(a(s).allCount)+" 件商品，已选择 "+r(a(s).selectedCount)+" 件，商品合计： ",1),t("span",et,"¥ "+r(a(s).selectedPrice.toFixed()),1)]),t("div",ot,[l(h,{size:"large",type:"primary",onClick:k},{default:c(()=>e[7]||(e[7]=[p("下单结算")])),_:1})])])])):(u(),d("div",st,[t("table",null,[t("tbody",null,[t("tr",null,[t("td",nt,[t("div",lt,[l(E,{description:"购物车列表为空"},{default:c(()=>[l(h,{type:"primary",onClick:e[0]||(e[0]=o=>a(_).push("/"))},{default:c(()=>e[8]||(e[8]=[p("随便逛逛")])),_:1})]),_:1})])])])])])]))])])}}}),Lt=j(at,[["__scopeId","data-v-54b8ee74"]]);export{Lt as default};
