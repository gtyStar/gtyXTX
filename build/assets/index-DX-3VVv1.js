import{_ as j,m as u,l as w,n as _,c as o,a as t,d as e,j as v,t as f,b as I,x as P,o as i}from"./index-BTOKHnDP.js";import{v as U}from"./loading-CHWQXNwv.js";import{g as k}from"./pay-Xz-2SnmP.js";import{u as D}from"./useCountDown-CrzwjmMb.js";const R={class:"xtx-pay-page"},$={class:"container"},q={class:"pay-info"},B={class:"tip"},L={class:"amount"},N="https://pcapi-xiaotuxian-front-devtest.itheima.net/",V=Object.assign({name:"PayPage"},{__name:"index",setup(C){const l=_(),r=u({}),s=u(!0),m=async()=>{s.value=!0;const n=await k(l.query.id);r.value=n.result,x(n.result.countdown),s.value=!1};w(()=>{m()});const{formatTime:y,start:x}=D(),d=`https://${window.location.host}/gty/#/paycallback`,b=encodeURIComponent(d),g=`${N}pay/aliPay?orderId=${l.query.id}&redirect=${b}`;return console.log(d),(n,a)=>{var c;const p=U;return i(),o("div",R,[t("div",$,[t("div",q,[a[4]||(a[4]=t("span",{class:"icon iconfont icon-queren2"},null,-1)),t("div",B,[a[2]||(a[2]=t("p",null,"订单提交成功！请尽快完成支付。",-1)),t("p",null,[a[0]||(a[0]=e("支付还剩 ")),v((i(),o("span",null,[e(f(I(y)),1)])),[[p,s.value]]),a[1]||(a[1]=e(", 超时后将取消订单"))])]),t("div",L,[a[3]||(a[3]=t("span",null,"应付总额：",-1)),v((i(),o("span",null,[e("¥"+f((c=r.value.payMoney)==null?void 0:c.toFixed(2)),1)])),[[p,s.value]])])]),t("div",{class:"pay-type"},[a[7]||(a[7]=t("p",{class:"head"},"选择以下支付方式付款",-1)),t("div",{class:"item"},[a[5]||(a[5]=t("p",null,"支付平台",-1)),a[6]||(a[6]=t("a",{class:"btn wx",href:"javascript:;"},null,-1)),t("a",{class:"btn alipay",href:g})]),a[8]||(a[8]=P('<div class="item" data-v-0e40852a><p data-v-0e40852a>支付方式</p><a class="btn" href="javascript:;" data-v-0e40852a>招商银行</a><a class="btn" href="javascript:;" data-v-0e40852a>工商银行</a><a class="btn" href="javascript:;" data-v-0e40852a>建设银行</a><a class="btn" href="javascript:;" data-v-0e40852a>农业银行</a><a class="btn" href="javascript:;" data-v-0e40852a>交通银行</a></div>',1))])])])}}}),h=j(V,[["__scopeId","data-v-0e40852a"]]);export{h as default};
