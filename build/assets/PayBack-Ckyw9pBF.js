import"./user-BkJRfpxS.js";import{v}from"./loading-BYvfYDAU.js";import{E as _}from"./button-B0L1SATw.js";import{g}from"./pay-Cxw-sLBf.js";import{_ as k,p as B,j as $,c as n,a as s,t as p,b as e,h as b,d as u,w as d,m as x,o as r}from"./index-CivuXavm.js";const I={class:"xtx-pay-page"},q={class:"container"},w={class:"pay-result"},C={key:0,class:"iconfont icon-queren2 green"},D={key:1,class:"iconfont icon-shanchu red"},E={class:"tit"},M={class:"btn"},N={__name:"PayBack",setup(P){const y=x(),a=B({}),c=async()=>{const o=await g(y.query.orderId);a.value=o.result};return $(()=>c()),(o,t)=>{var l;const i=_,m=v;return r(),n("div",I,[s("div",q,[s("div",w,[o.$route.query.payResult==="true"?(r(),n("span",C)):(r(),n("span",D)),s("p",E,"支付"+p(o.$route.query.payResult==="true"?"成功":"失败"),1),t[5]||(t[5]=s("p",{class:"tip"},"我们将尽快为您发货，收货期间请保持手机畅通",-1)),t[6]||(t[6]=s("p",null,[e("支付方式："),s("span",null,"支付宝")],-1)),s("p",null,[t[2]||(t[2]=e("支付金额：¥")),b((r(),n("span",null,[e(p((l=a.value.payMoney)==null?void 0:l.toFixed(2)),1)])),[[m,!a.value.payMoney]])]),s("div",M,[u(i,{type:"primary",style:{"margin-right":"20px"},onClick:t[0]||(t[0]=f=>o.$router.push("/member/order"))},{default:d(()=>t[3]||(t[3]=[e("查看订单")])),_:1}),u(i,{onClick:t[1]||(t[1]=f=>o.$router.push("/"))},{default:d(()=>t[4]||(t[4]=[e("进入首页")])),_:1})]),t[7]||(t[7]=s("p",{class:"alert"},[s("span",{class:"iconfont icon-tip"}),e(" 温馨提示：小兔鲜儿不会以订单异常、系统升级为由要求您点击任何网址链接进行退款操作，保护资产、谨慎操作。 ")],-1))])])])}}},F=k(N,[["__scopeId","data-v-290b3e8a"]]);export{F as default};
