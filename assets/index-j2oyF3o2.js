import{_ as te,m as f,l as de,p as h,H as ue,c as C,a as l,e as s,d as r,t as i,w as d,F,k as O,b as k,an as re,f as ne,o as b,y as ie,E as P}from"./index-C8SM9Yei.js";import{u as ve,a as pe,E as ce,b as fe,c as me,e as H,d as ge,f as ye,g as Ce}from"./code-BN-hrZ-8.js";import{E as be}from"./overlay-Dsqj3_R_.js";import{E as ke,a as Ve}from"./form-item-CaGTsp_j.js";import{E as xe}from"./input-SJPtbigX.js";import"./popper-mftBIXVj.js";import"./scrollbar-Z1Zwz_S7.js";import{E as we}from"./checkbox-DzV5fNMn.js";import{E as Te}from"./button-BWjxL5hd.js";import{u as Ae}from"./cartStore-BnlBTsCE.js";import"./loading-BmdHvPbE.js";import{E as De}from"./index-DAWD_Xzm.js";import"./event-BB_Ol6Sd.js";import"./error-Cq9Fpw4b.js";import"./strings-CCqFc-rT.js";import"./isEqual-CUitHSm_.js";import"./focus-trap-BajFkqMP.js";import"./scroll-B9a79v4V.js";import"./debounce-PdOBlS3_.js";import"./vnode-Dokoj9-u.js";import"./castArray-cwEnu3fJ.js";const Ee={class:"xtx-pay-checkout-page"},Ie={class:"container"},Ue={class:"wrapper"},Se={class:"box-body"},_e={class:"address"},he={class:"text"},Fe={key:0,class:"none"},Pe={key:1},$e={class:"action"},je={class:"box-body"},Le={class:"goods"},qe={href:"javascript:;",class:"info"},Be=["src"],ze={class:"right"},Ne={class:"box-body"},Me={class:"total"},Re={class:"price"},Oe={class:"submit"},He={key:0,class:"addressWrapper"},We=["onClick"],Ge={class:"edit"},Je=["onClick"],Ke={key:1,style:{height:"150px","line-height":"150px","text-align":"center"}},Qe={class:"dialog-footer"},Xe={class:"dialog-footer"},Ye={class:"dialog-footer"},Ze={class:"demo-drawer__content"},el={class:"demo-drawer__footer",style:{display:"flex","justify-content":"flex-end"}},ll=Object.assign({name:"CheckoutPage"},{__name:"index",setup(al){const W=ne(),v=ve(),x=f(!0),y=f({});de(async()=>{await v.getCheckout(),v.checkInfo.userAddresses.length===0?x.value=!1:x.value=!0,y.value=v.checkInfo.userAddresses.find(o=>o.isDefault===0)}),h(()=>v.checkInfo.userAddresses,o=>{o.length===0?x.value=!1:x.value=!0,y.value=o.find(e=>e.isDefault===0)});const V=f(!1),S=f({}),G=o=>{S.value=o},J=()=>{y.value=S.value,V.value=!1},K=Ae(),Q=async()=>{const o=await Ce({deliveryTimeType:1,payType:1,payChannel:1,buyerMessage:"",goods:v.checkInfo.goods.map(e=>({skuId:e.skuId,count:e.count})),addressId:y.value.id});W.push({path:"/pay",query:{id:o.result.id}}),K.getCartList()},X=o=>{o.target.tagName==="A"&&(document.querySelector(".dTime .active").classList.remove("active"),o.target.classList.add("active"))},Y=o=>{o.target.tagName==="A"&&(document.querySelector(".pType .active").classList.remove("active"),o.target.classList.add("active"))},Z=async o=>{be.confirm("确定要删除该地址吗？","温馨提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(async()=>{await ge(o),v.getCheckout()})},w=f(!1),{regionData:D}=pe(),n=f({receiver:"",contact:"",address1:[],address2:"",postalCode:"",addressTags:"",isDefault:!1}),$=f({receiver:[{required:!0,message:"请填写收货人姓名",trigger:"blur"}],contact:[{required:!0,message:"请填写收货人联系方式",trigger:"blur"},{pattern:/^1[3-9]\d{9}$/,message:"请输入正确的手机号",trigger:"blur"}],address1:[{required:!0,message:"请选择省市区/县",trigger:"blur"}],address2:[{required:!0,message:"请填写详细地址",trigger:"blur"}],postalCode:[{required:!0,message:"请填写邮编",trigger:"blur"},{pattern:/^[1-9]\d{5}$/,message:"请输入正确的邮编",trigger:"blur"}],addressTags:[{required:!0,message:"请填写地址标签",trigger:"blur"}],const:[{required:!1,message:"请选择是否设为默认地址",trigger:"blur"}]}),T=f([]);h(()=>n.value.address1,o=>{D.map(e=>{e.label===o[0]&&(T.value.push(e.value),e.children.map(u=>{u.label===o[1]&&(T.value.push(u.value),u.children.map(p=>{p.label===o[2]&&T.value.push(p.value)}))}))})});const j=ue(()=>({receiver:n.value.receiver,contact:n.value.contact,provinceCode:T.value[0],cityCode:T.value[1],countyCode:T.value[2],address:n.value.address2,postalCode:n.value.postalCode,addressTags:n.value.addressTags,isDefault:n.value.isDefault?0:1,fullLocation:n.value.address1.join(" ")+n.value.address2})),L=()=>{n.value={receiver:"",contact:"",address1:[],address2:"",postalCode:"",addressTags:"",isDefault:!1}},_=f(null),ee=async()=>{_.value.validate(async o=>{if(o){console.log(j.value);const e=await ye(j.value);console.log(e),v.getCheckout(),L(),w.value=!1}else P.error("请填写完整信息")})},le=async o=>{console.log(o);const e={receiver:o.receiver,contact:o.contact,provinceCode:o.provinceCode,cityCode:o.cityCode,countyCode:o.countyCode,address:o.address,postalCode:o.postalCode,addressTags:o.addressTags,isDefault:o.isShow?0:1},u=await H(o.id,e);v.getCheckout(),console.log(u)},E=f(!1),t=f({}),I=f([]),m=f({}),ae=o=>{E.value=!0,console.log(o),t.value={...o},m.value={...o};const e=[];D.map(u=>{u.value===t.value.provinceCode&&(console.log(u.label),e.push(u.label),u.children.map(p=>{p.value===t.value.cityCode&&(console.log(p.label),e.push(p.label),p.children.map(A=>{A.value===t.value.countyCode&&(console.log(A.label),e.push(A.label))}))})),I.value=e})};h(()=>I.value,o=>{D.map(e=>{e.label===o[0]&&(t.value.provinceCode=e.value,e.children.map(u=>{u.label===o[1]&&(t.value.cityCode=u.value,u.children.map(p=>{p.label===o[2]&&(t.value.countyCode=p.value)}))}))})});const se=async()=>{const o={receiver:t.value.receiver,contact:t.value.contact,provinceCode:t.value.provinceCode,cityCode:t.value.cityCode,countyCode:t.value.countyCode,address:t.value.address,postalCode:t.value.postalCode,addressTags:t.value.addressTags,isDefault:t.value.isShow?0:1,fullLocation:I.value.join(" ")+t.value.address},e=f(!0);if(t.value.address===m.value.address&&t.value.addressTags===m.value.addressTags&&t.value.cityCode===m.value.cityCode&&t.value.contact===m.value.contact&&t.value.countyCode===m.value.countyCode&&t.value.isDefault===m.value.isDefault&&t.value.isShow===m.value.isShow&&t.value.postalCode===m.value.postalCode&&t.value.provinceCode===m.value.provinceCode&&t.value.receiver===m.value.receiver?e.value=!1:e.value=!0,e.value){const u=De.service({lock:!0,text:"正在加载中😍😍😍",background:"rgba(0, 0, 0, 0.1)"});await H(t.value.id,o),await v.getCheckout(),u.close(),E.value=!1,P.success("修改成功"),console.log(o)}else{P.warning("请修改数据再提交");return}};return(o,e)=>{var z,N,M,R;const u=Te,p=we,A=ce,g=xe,c=Ve,q=me,B=ke,oe=fe;return b(),C(F,null,[l("div",Ee,[l("div",Ie,[l("div",Ue,[e[37]||(e[37]=l("h3",{class:"box-title"},"收货地址",-1)),l("div",Se,[l("div",_e,[l("div",he,[y.value?(b(),C("ul",Pe,[l("li",null,[e[24]||(e[24]=l("span",null,[r("收"),l("i"),r("货"),l("i"),r("人：")],-1)),r(i(y.value.receiver),1)]),l("li",null,[e[25]||(e[25]=l("span",null,"联系方式：",-1)),r(i(y.value.contact),1)]),l("li",null,[e[26]||(e[26]=l("span",null,"收货地址：",-1)),r(i(y.value.fullLocation)+" "+i(y.value.address),1)])])):(b(),C("div",Fe,"您需要先选择收货地址才可提交订单。"))]),l("div",$e,[s(u,{size:"large",onClick:e[0]||(e[0]=a=>V.value=!0)},{default:d(()=>e[27]||(e[27]=[r("切换地址")])),_:1}),s(u,{size:"large",onClick:e[1]||(e[1]=a=>w.value=!0)},{default:d(()=>e[28]||(e[28]=[r("添加地址")])),_:1})])])]),e[38]||(e[38]=l("h3",{class:"box-title"},"商品信息",-1)),l("div",je,[l("table",Le,[e[29]||(e[29]=l("thead",null,[l("tr",null,[l("th",{width:"520"},"商品信息"),l("th",{width:"170"},"单价"),l("th",{width:"170"},"数量"),l("th",{width:"170"},"小计"),l("th",{width:"170"},"实付")])],-1)),l("tbody",null,[(b(!0),C(F,null,O(k(v).checkInfo.goods,a=>(b(),C("tr",{key:a.id},[l("td",null,[l("a",qe,[l("img",{src:a.picture,alt:""},null,8,Be),l("div",ze,[l("p",null,i(a.name),1),l("p",null,i(a.attrsText),1)])])]),l("td",null,"¥"+i(a.price),1),l("td",null,i(a.price),1),l("td",null,"¥"+i(a.totalPrice),1),l("td",null,"¥"+i(a.totalPayPrice),1)]))),128))])])]),e[39]||(e[39]=l("h3",{class:"box-title"},"配送时间",-1)),l("div",{class:"box-body dTime",onClick:X},e[30]||(e[30]=[l("a",{class:"my-btn active",href:"javascript:;"},"不限送货时间：周一至周日",-1),l("a",{class:"my-btn",href:"javascript:;"},"工作日送货：周一至周五",-1),l("a",{class:"my-btn",href:"javascript:;"},"双休日、假日送货：周六至周日",-1)])),e[40]||(e[40]=l("h3",{class:"box-title"},"支付方式",-1)),l("div",{class:"box-body pType",onClick:Y},e[31]||(e[31]=[l("a",{class:"my-btn active",href:"javascript:;"},"在线支付",-1),l("a",{class:"my-btn",href:"javascript:;"},"货到付款",-1),l("span",{style:{color:"#999"}},"货到付款需付5元手续费",-1)])),e[41]||(e[41]=l("h3",{class:"box-title"},"金额明细",-1)),l("div",Ne,[l("div",Me,[l("dl",null,[e[32]||(e[32]=l("dt",null,"商品件数：",-1)),l("dd",null,i((z=k(v).checkInfo.summary)==null?void 0:z.goodsCount)+"件",1)]),l("dl",null,[e[33]||(e[33]=l("dt",null,"商品总价：",-1)),l("dd",null,"¥"+i((N=k(v).checkInfo.summary)==null?void 0:N.totalPrice.toFixed(2)),1)]),l("dl",null,[e[34]||(e[34]=l("dt",null,[r("运"),l("i"),r("费：")],-1)),l("dd",null,"¥"+i((M=k(v).checkInfo.summary)==null?void 0:M.postFee.toFixed(2)),1)]),l("dl",null,[e[35]||(e[35]=l("dt",null,"应付总额：",-1)),l("dd",Re,i((R=k(v).checkInfo.summary)==null?void 0:R.totalPayPrice.toFixed(2)),1)])])]),l("div",Oe,[s(u,{type:"primary",size:"large",onClick:Q},{default:d(()=>e[36]||(e[36]=[r("提交订单")])),_:1})])])])]),s(A,{modelValue:V.value,"onUpdate:modelValue":e[5]||(e[5]=a=>V.value=a),title:"切换收货地址",width:"30%",center:""},re({default:d(()=>[x.value?(b(),C("div",He,[(b(!0),C(F,null,O(k(v).checkInfo.userAddresses,a=>(b(),C("div",{class:ie(["text item",S.value===a?"active":""]),key:a.id,onClick:U=>G(a)},[l("ul",null,[l("li",null,[e[42]||(e[42]=l("span",null,[r("收"),l("i"),r("货"),l("i"),r("人：")],-1)),r(i(a.receiver),1)]),l("li",null,[e[43]||(e[43]=l("span",null,"联系方式：",-1)),r(i(a.contact),1)]),l("li",null,[e[44]||(e[44]=l("span",null,"收货地址：",-1)),r(i(a.fullLocation+a.address),1)])]),l("div",Ge,[s(p,{modelValue:a.isShow,"onUpdate:modelValue":U=>a.isShow=U,onChange:U=>le(a)},{default:d(()=>e[45]||(e[45]=[r(" 默认 ")])),_:2},1032,["modelValue","onUpdate:modelValue","onChange"]),l("i",{class:"iconfont icon-close-new del",onClick:U=>Z(a.id)},e[46]||(e[46]=[l("span",{style:{"font-size":"14px","margin-left":"5px"}},"删除",-1)]),8,Je),s(u,{onClick:U=>ae(a),style:{"margin-top":"6px"}},{default:d(()=>e[47]||(e[47]=[r("修改")])),_:2},1032,["onClick"])])],10,We))),128))])):(b(),C("div",Ke,e[48]||(e[48]=[l("p",null,"您还没有收货地址，去添加吧💖💖💖",-1)])))]),_:2},[x.value?{name:"footer",fn:d(()=>[l("span",Qe,[s(u,{onClick:e[2]||(e[2]=a=>V.value=!1)},{default:d(()=>e[49]||(e[49]=[r("取消")])),_:1}),s(u,{type:"primary",onClick:J},{default:d(()=>e[50]||(e[50]=[r("确定")])),_:1})])]),key:"0"}:{name:"footer",fn:d(()=>[l("span",Xe,[s(u,{onClick:e[3]||(e[3]=a=>V.value=!1)},{default:d(()=>e[51]||(e[51]=[r("取消")])),_:1}),s(u,{onClick:e[4]||(e[4]=a=>(V.value=!1,w.value=!0)),type:"primary"},{default:d(()=>e[52]||(e[52]=[r("添加地址")])),_:1})])]),key:"1"}]),1032,["modelValue"]),s(A,{modelValue:w.value,"onUpdate:modelValue":e[14]||(e[14]=a=>w.value=a),title:"添加地址",width:"500"},{footer:d(()=>[l("div",Ye,[s(u,{onClick:L},{default:d(()=>e[53]||(e[53]=[r("清空")])),_:1}),s(u,{onClick:e[13]||(e[13]=a=>w.value=!1)},{default:d(()=>e[54]||(e[54]=[r("取消")])),_:1}),s(u,{type:"primary",onClick:ee},{default:d(()=>e[55]||(e[55]=[r(" 确定")])),_:1})])]),default:d(()=>[s(B,{ref_key:"addressFormRef",ref:_,style:{"max-width":"600px"},model:n.value,rules:$.value,"label-width":"auto","label-position":"left"},{default:d(()=>[s(c,{label:"收货人昵称",prop:"receiver"},{default:d(()=>[s(g,{modelValue:n.value.receiver,"onUpdate:modelValue":e[6]||(e[6]=a=>n.value.receiver=a),placeholder:"昵称"},null,8,["modelValue"])]),_:1}),s(c,{label:"收货人手机号",prop:"contact"},{default:d(()=>[s(g,{modelValue:n.value.contact,"onUpdate:modelValue":e[7]||(e[7]=a=>n.value.contact=a),placeholder:"手机号"},null,8,["modelValue"])]),_:1}),s(c,{label:"请选择地址",prop:"address1"},{default:d(()=>[s(q,{modelValue:n.value.address1,"onUpdate:modelValue":e[8]||(e[8]=a=>n.value.address1=a),options:k(D),props:{value:"label",label:"label",expandTrigger:"click"},placeholder:"请选择",style:{width:"100%"}},null,8,["modelValue","options"])]),_:1}),s(c,{label:"详细地址",prop:"address2"},{default:d(()=>[s(g,{modelValue:n.value.address2,"onUpdate:modelValue":e[9]||(e[9]=a=>n.value.address2=a),placeholder:"区以下的详细地址"},null,8,["modelValue"])]),_:1}),s(c,{label:"所在地邮政编码",prop:"postalCode"},{default:d(()=>[s(g,{modelValue:n.value.postalCode,"onUpdate:modelValue":e[10]||(e[10]=a=>n.value.postalCode=a),placeholder:"邮政编码"},null,8,["modelValue"])]),_:1}),s(c,{label:"地址标签",prop:"addressTags"},{default:d(()=>[s(g,{modelValue:n.value.addressTags,"onUpdate:modelValue":e[11]||(e[11]=a=>n.value.addressTags=a),placeholder:"地址标签"},null,8,["modelValue"])]),_:1}),s(c,{label:"设为默认地址"},{default:d(()=>[s(p,{modelValue:n.value.isDefault,"onUpdate:modelValue":e[12]||(e[12]=a=>n.value.isDefault=a)},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])]),_:1},8,["modelValue"]),s(oe,{modelValue:E.value,"onUpdate:modelValue":e[23]||(e[23]=a=>E.value=a),title:"修改地址"},{default:d(()=>[l("div",Ze,[s(B,{ref_key:"addressFormRef",ref:_,style:{"max-width":"600px"},model:t.value,rules:$.value,"label-width":"auto","label-position":"left"},{default:d(()=>[s(c,{label:"收货人昵称",prop:"receiver"},{default:d(()=>[s(g,{modelValue:t.value.receiver,"onUpdate:modelValue":e[15]||(e[15]=a=>t.value.receiver=a),placeholder:"昵称"},null,8,["modelValue"])]),_:1}),s(c,{label:"收货人手机号",prop:"contact"},{default:d(()=>[s(g,{modelValue:t.value.contact,"onUpdate:modelValue":e[16]||(e[16]=a=>t.value.contact=a),placeholder:"手机号"},null,8,["modelValue"])]),_:1}),s(c,{label:"请选择地址",prop:"address1"},{default:d(()=>[s(q,{style:{width:"100%"},modelValue:I.value,"onUpdate:modelValue":e[17]||(e[17]=a=>I.value=a),options:k(D),props:{value:"label",label:"label",expandTrigger:"hover"},placeholder:"请选择"},null,8,["modelValue","options"])]),_:1}),s(c,{label:"详细地址",prop:"address2"},{default:d(()=>[s(g,{modelValue:t.value.address,"onUpdate:modelValue":e[18]||(e[18]=a=>t.value.address=a),placeholder:"区以下的详细地址"},null,8,["modelValue"])]),_:1}),s(c,{label:"所在地邮政编码",prop:"postalCode"},{default:d(()=>[s(g,{modelValue:t.value.postalCode,"onUpdate:modelValue":e[19]||(e[19]=a=>t.value.postalCode=a),placeholder:"邮政编码"},null,8,["modelValue"])]),_:1}),s(c,{label:"地址标签",prop:"addressTags"},{default:d(()=>[s(g,{modelValue:t.value.addressTags,"onUpdate:modelValue":e[20]||(e[20]=a=>t.value.addressTags=a),placeholder:"地址标签"},null,8,["modelValue"])]),_:1}),s(c,{label:"设为默认地址"},{default:d(()=>[s(p,{modelValue:t.value.isShow,"onUpdate:modelValue":e[21]||(e[21]=a=>t.value.isShow=a)},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"]),l("div",el,[s(u,{onClick:e[22]||(e[22]=a=>E.value=!1)},{default:d(()=>e[56]||(e[56]=[r("取消")])),_:1}),s(u,{type:"primary",onClick:se},{default:d(()=>e[57]||(e[57]=[r("提交")])),_:1})])])]),_:1},8,["modelValue"])],64)}}}),Tl=te(ll,[["__scopeId","data-v-f25fa948"]]);export{Tl as default};
