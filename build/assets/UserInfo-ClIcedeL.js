import{_ as X,u as Y,m as i,l as $,p as j,c as f,j as Z,e as t,a as o,b as T,F as A,k as B,w as u,ap as ee,o as c,i as le,d as n,t as D,E as k}from"./index-wLM41VPV.js";import{v as ae}from"./loading-BYJlnQnE.js";import{u as se,a as oe,E as te,b as re,c as de,e as q,d as ue,f as ne}from"./code-DKwrhiDx.js";import{E as ie}from"./overlay-ConislrQ.js";import{E as ve,a as ce}from"./form-item-_2Gs9TyC.js";import{E as pe}from"./input-Bzb905jl.js";import"./popper-CiLzbiWP.js";import"./scrollbar-DG34B8j4.js";import{E as fe}from"./checkbox-cRvNZnYa.js";import{E as ge}from"./button-CYA66Hva.js";import{G as me}from"./GoodsItem-RZcd1vi7.js";import{E as h}from"./index-DwKREfYq.js";import"./event-BB_Ol6Sd.js";import"./error-Cq9Fpw4b.js";import"./strings-bZtV5SKq.js";import"./isEqual-DY8eFk7l.js";import"./focus-trap-C_DxvbNc.js";import"./scroll-CTa12LS4.js";import"./debounce-DFMyQRur.js";import"./vnode-DiS8kaMz.js";import"./castArray-qDLI6V7u.js";const Ce={class:"home-overview"},ye={class:"user-meta"},be={class:"avatar"},we=["src"],ke={class:"item"},Ve={class:"like-container"},_e={class:"home-panel"},xe={class:"goods-list"},Ee={key:0,class:"addressWrapper"},Te={class:"edit"},Ae=["onClick"],De={key:1,style:{height:"150px","line-height":"150px","text-align":"center"}},he={class:"dialog-footer"},Se={class:"demo-drawer__content"},Ue={key:0,class:"demo-drawer__footer",style:{display:"flex","justify-content":"flex-end"}},Le={key:1,class:"demo-drawer__footer",style:{display:"flex","justify-content":"flex-end"}},Ie={__name:"UserInfo",setup($e){const F=Y(),S=i([]),U=i(!0),M=async()=>{const a=await ee({limit:4});S.value=a.result,U.value=!1};$(()=>{M()});const x=i(!1),p=i(!1),g=se(),y=i(!0);$(async()=>{await g.getAddress(),g.userAddresses.length===0?y.value=!1:y.value=!0}),j(()=>g.userAddresses,a=>{a.length===0?y.value=!1:y.value=!0});const P=async a=>{ie.confirm("确定要删除该地址吗？","温馨提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(async()=>{const e=h.service({lock:!0,text:"正在加载中😍😍😍",background:"rgba(0, 0, 0, 0.1)"});await ue(a),await g.getAddress(),e.close(),console.log(b)})},G=async a=>{console.log(a);const e={receiver:a.receiver,contact:a.contact,provinceCode:a.provinceCode,cityCode:a.cityCode,countyCode:a.countyCode,address:a.address,postalCode:a.postalCode,addressTags:a.addressTags,isDefault:a.isShow?0:1},d=await q(a.id,e);g.getAddress(),console.log(d)},l=i({receiver:"",contact:"",area:[],address:"",postalCode:"",addressTags:"",isShow:!1}),E=i(null),L=()=>{l.value={receiver:"",contact:"",area:[],address:"",postalCode:"",addressTags:"",isShow:!1}},N=i({receiver:[{required:!0,message:"请填写收货人姓名",trigger:"blur"}],contact:[{required:!0,message:"请填写收货人联系方式",trigger:"blur"},{pattern:/^1[3-9]\d{9}$/,message:"请输入正确的手机号",trigger:"blur"}],area:[{required:!0,message:"请选择省市区/县",trigger:"blur"}],address:[{required:!0,message:"请填写详细地址",trigger:"blur"}],postalCode:[{required:!0,message:"请填写邮编",trigger:"blur"},{pattern:/^[1-9]\d{5}$/,message:"请输入正确的邮编",trigger:"blur"}],addressTags:[{required:!0,message:"请填写地址标签",trigger:"blur"}],const:[{required:!1,message:"请选择是否设为默认地址",trigger:"blur"}]}),{regionData:b}=oe(),V=i(""),R=()=>{p.value=!0,V.value="添加地址"},z=async()=>{console.log(l.value);const a=i([]);b.map(d=>{d.label===l.value.area[0]&&(a.value.push(d.value),d.children.map(r=>{r.label===l.value.area[1]&&(a.value.push(r.value),r.children.map(m=>{m.label===l.value.area[2]&&a.value.push(m.value)}))}))});const e={receiver:l.value.receiver,contact:l.value.contact,provinceCode:a.value[0],cityCode:a.value[1],countyCode:a.value[2],address:l.value.address,postalCode:l.value.postalCode,addressTags:l.value.addressTags,isDefault:l.value.isShow?0:1,fullLocation:l.value.area.join(" ")+l.value.address};console.log(e),E.value.validate(async d=>{if(d){const r=h.service({lock:!0,text:"正在加载中😍😍😍",background:"rgba(0, 0, 0, 0.1)"});await ne(e),await g.getAddress(),p.value=!1,r.close(),k.success("添加成功")}else k.error("请填写完整信息")})},v=i({}),W=async a=>{p.value=!0,V.value="修改地址",v.value={...a},l.value.receiver=a.receiver,l.value.contact=a.contact,l.value.provinceCode=a.provinceCode,l.value.cityCode=a.cityCode,l.value.countyCode=a.countyCode,l.value.address=a.address,l.value.postalCode=a.postalCode,l.value.addressTags=a.addressTags,l.value.isDefault=a.isDefault,l.value.isShow=!a.isDefault,l.value.fullLocation=a.fullLocation,l.value.id=a.id,console.log(a),b.map(e=>{e.value===l.value.provinceCode&&(l.value.area.push(e.label),e.children.map(d=>{d.value===l.value.cityCode&&(l.value.area.push(d.label),d.children.map(r=>{r.value===l.value.countyCode&&l.value.area.push(r.label)}))})),v.value.area=l.value.area}),console.log(l.value)},H=async()=>{const a=i([]);b.map(d=>{d.label===l.value.area[0]&&(a.value.push(d.value),d.children.map(r=>{r.label===l.value.area[1]&&(a.value.push(r.value),r.children.map(m=>{m.label===l.value.area[2]&&a.value.push(m.value)}))}))});const e={receiver:l.value.receiver,contact:l.value.contact,provinceCode:a.value[0],cityCode:a.value[1],countyCode:a.value[2],address:l.value.address,postalCode:l.value.postalCode,addressTags:l.value.addressTags,isDefault:l.value.isShow?0:1,fullLocation:l.value.area.join(" ")};if(console.log(l.value.id,e),console.log(e),console.log(v.value),console.log(l.value.area),e.receiver===v.value.receiver&&e.contact===v.value.contact&&l.value.area===v.value.area&&e.address===v.value.address&&e.postalCode===v.value.postalCode&&e.addressTags===v.value.addressTags&&e.isDefault===v.value.isDefault){k.warning("请修改表单内容");return}else E.value.validate(async d=>{if(d){const r=h.service({lock:!0,text:"正在加载中😍😍😍",background:"rgba(0, 0, 0, 0.1)"});await q(l.value.id,e),await g.getAddress(),p.value=!1,r.close(),k.success("修改成功")}else k.error("请填写正确信息")})};return j(()=>p.value,a=>{a||L()}),(a,e)=>{var I;const d=fe,r=ge,m=te,w=pe,C=ce,J=de,K=ve,O=re,Q=ae;return c(),f(A,null,[Z((c(),f("div",null,[o("div",Ce,[o("div",ye,[o("div",be,[o("img",{src:(I=T(F).userInfo)==null?void 0:I.avatar},null,8,we)]),e[13]||(e[13]=o("h4",null,"Gty",-1))]),o("div",ke,[e[16]||(e[16]=o("a",{href:"javascript:;"},[o("span",{class:"iconfont icon-hy"}),o("p",null,"会员中心")],-1)),o("a",{href:"javascript:;",onClick:e[0]||(e[0]=s=>a.$router.push("/cartlist"))},e[14]||(e[14]=[o("span",{class:"iconfont icon-cart"},null,-1),o("p",null,"购物车",-1)])),o("a",{href:"javascript:;",onClick:e[1]||(e[1]=s=>x.value=!0)},e[15]||(e[15]=[o("span",{class:"iconfont icon-dw"},null,-1),o("p",null,"地址管理",-1)]))])]),o("div",Ve,[o("div",_e,[e[17]||(e[17]=o("div",{class:"header"},[o("h4",{"data-v-bcb266e0":""},"猜你喜欢")],-1)),o("div",xe,[(c(!0),f(A,null,B(S.value,s=>(c(),le(me,{key:s.id,goods:s},null,8,["goods"]))),128))])])])])),[[Q,U.value]]),t(m,{modelValue:x.value,"onUpdate:modelValue":e[2]||(e[2]=s=>x.value=s),title:"地址管理",width:"30%",center:""},{footer:u(()=>[o("span",he,[t(r,{onClick:R,type:"primary"},{default:u(()=>e[25]||(e[25]=[n("添加地址")])),_:1})])]),default:u(()=>[y.value?(c(),f("div",Ee,[(c(!0),f(A,null,B(T(g).userAddresses,s=>(c(),f("div",{class:"text item",key:s.id},[o("ul",null,[o("li",null,[e[18]||(e[18]=o("span",null,[n("收"),o("i"),n("货"),o("i"),n("人：")],-1)),n(D(s.receiver),1)]),o("li",null,[e[19]||(e[19]=o("span",null,"联系方式：",-1)),n(D(s.contact),1)]),o("li",null,[e[20]||(e[20]=o("span",null,"收货地址：",-1)),n(D(s.fullLocation+s.address),1)])]),o("div",Te,[t(d,{modelValue:s.isShow,"onUpdate:modelValue":_=>s.isShow=_,onChange:_=>G(s)},{default:u(()=>e[21]||(e[21]=[n(" 默认 ")])),_:2},1032,["modelValue","onUpdate:modelValue","onChange"]),o("i",{class:"iconfont icon-close-new del",onClick:_=>P(s.id)},e[22]||(e[22]=[o("span",{style:{"font-size":"14px","margin-left":"5px"}},"删除",-1)]),8,Ae),t(r,{onClick:_=>W(s),style:{"margin-top":"6px"}},{default:u(()=>e[23]||(e[23]=[n("修改")])),_:2},1032,["onClick"])])]))),128))])):(c(),f("div",De,e[24]||(e[24]=[o("p",null,"您还没有收货地址，去添加吧💖💖💖",-1)])))]),_:1},8,["modelValue"]),t(O,{modelValue:p.value,"onUpdate:modelValue":e[12]||(e[12]=s=>p.value=s),title:V.value},{default:u(()=>[o("div",Se,[t(K,{ref_key:"addressFormRef",ref:E,style:{"max-width":"600px"},model:l.value,rules:N.value,"label-width":"auto","label-position":"left"},{default:u(()=>[t(C,{label:"收货人昵称",prop:"receiver"},{default:u(()=>[t(w,{modelValue:l.value.receiver,"onUpdate:modelValue":e[3]||(e[3]=s=>l.value.receiver=s),placeholder:"昵称"},null,8,["modelValue"])]),_:1}),t(C,{label:"收货人手机号",prop:"contact"},{default:u(()=>[t(w,{modelValue:l.value.contact,"onUpdate:modelValue":e[4]||(e[4]=s=>l.value.contact=s),placeholder:"手机号"},null,8,["modelValue"])]),_:1}),t(C,{label:"请选择地址",prop:"area"},{default:u(()=>[t(J,{style:{width:"100%"},modelValue:l.value.area,"onUpdate:modelValue":e[5]||(e[5]=s=>l.value.area=s),options:T(b),props:{value:"label",label:"label",expandTrigger:"click"},placeholder:"请选择"},null,8,["modelValue","options"])]),_:1}),t(C,{label:"详细地址",prop:"address"},{default:u(()=>[t(w,{modelValue:l.value.address,"onUpdate:modelValue":e[6]||(e[6]=s=>l.value.address=s),placeholder:"区以下的详细地址"},null,8,["modelValue"])]),_:1}),t(C,{label:"所在地邮政编码",prop:"postalCode"},{default:u(()=>[t(w,{modelValue:l.value.postalCode,"onUpdate:modelValue":e[7]||(e[7]=s=>l.value.postalCode=s),placeholder:"邮政编码"},null,8,["modelValue"])]),_:1}),t(C,{label:"地址标签",prop:"addressTags"},{default:u(()=>[t(w,{modelValue:l.value.addressTags,"onUpdate:modelValue":e[8]||(e[8]=s=>l.value.addressTags=s),placeholder:"地址标签"},null,8,["modelValue"])]),_:1}),t(C,{label:"设为默认地址"},{default:u(()=>[t(d,{modelValue:l.value.isShow,"onUpdate:modelValue":e[9]||(e[9]=s=>l.value.isShow=s)},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"]),V.value==="添加地址"?(c(),f("div",Ue,[t(r,{onClick:e[10]||(e[10]=s=>p.value=!1)},{default:u(()=>e[26]||(e[26]=[n("取消")])),_:1}),t(r,{onClick:L},{default:u(()=>e[27]||(e[27]=[n("清空")])),_:1}),t(r,{type:"primary",onClick:z},{default:u(()=>e[28]||(e[28]=[n("添加")])),_:1})])):(c(),f("div",Le,[t(r,{onClick:e[11]||(e[11]=s=>p.value=!1)},{default:u(()=>e[29]||(e[29]=[n("取消")])),_:1}),t(r,{type:"primary",onClick:H},{default:u(()=>e[30]||(e[30]=[n("提交")])),_:1})]))])]),_:1},8,["modelValue","title"])],64)}}},al=X(Ie,[["__scopeId","data-v-ca52cf2a"]]);export{al as default};
