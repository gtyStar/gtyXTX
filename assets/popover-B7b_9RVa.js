import{b as C,E as g}from"./button-BWjxL5hd.js";import{C as x,ad as z,aa as I,P as V,Q as k,S as A,R,m as _,H as i,ae as D,i as p,o as c,w as s,A as E,h as S,a as f,y as a,b as t,d as u,U as M,Z as U,ac as q,t as m,e as b,af as H,a3 as L}from"./index-C8SM9Yei.js";import{u as P,E as Q}from"./popper-mftBIXVj.js";const Z=x({title:String,confirmButtonText:String,cancelButtonText:String,confirmButtonType:{type:String,values:C,default:"primary"},cancelButtonType:{type:String,values:C,default:"text"},icon:{type:I,default:()=>z},iconColor:{type:String,default:"#f90"},hideIcon:{type:Boolean,default:!1},hideAfter:{type:Number,default:200},teleported:P.teleported,persistent:P.persistent,width:{type:[String,Number],default:150}}),j={confirm:o=>o instanceof MouseEvent,cancel:o=>o instanceof MouseEvent},F=k({name:"ElPopconfirm"}),G=k({...F,props:Z,emits:j,setup(o,{emit:d}){const l=o,{t:y}=A(),n=R("popconfirm"),B=_(),T=()=>{var e,r;(r=(e=B.value)==null?void 0:e.onClose)==null||r.call(e)},N=i(()=>({width:D(l.width)})),v=e=>{d("confirm",e),T()},h=e=>{d("cancel",e),T()},w=i(()=>l.confirmButtonText||y("el.popconfirm.confirmButtonText")),$=i(()=>l.cancelButtonText||y("el.popconfirm.cancelButtonText"));return(e,r)=>(c(),p(t(Q),H({ref_key:"tooltipRef",ref:B,trigger:"click",effect:"light"},e.$attrs,{"popper-class":`${t(n).namespace.value}-popover`,"popper-style":t(N),teleported:e.teleported,"fallback-placements":["bottom","top","right","left"],"hide-after":e.hideAfter,persistent:e.persistent}),{content:s(()=>[f("div",{class:a(t(n).b())},[f("div",{class:a(t(n).e("main"))},[!e.hideIcon&&e.icon?(c(),p(t(M),{key:0,class:a(t(n).e("icon")),style:U({color:e.iconColor})},{default:s(()=>[(c(),p(q(e.icon)))]),_:1},8,["class","style"])):S("v-if",!0),u(" "+m(e.title),1)],2),f("div",{class:a(t(n).e("action"))},[E(e.$slots,"actions",{confirm:v,cancel:h},()=>[b(t(g),{size:"small",type:e.cancelButtonType==="text"?"":e.cancelButtonType,text:e.cancelButtonType==="text",onClick:h},{default:s(()=>[u(m(t($)),1)]),_:1},8,["type","text"]),b(t(g),{size:"small",type:e.confirmButtonType==="text"?"":e.confirmButtonType,text:e.confirmButtonType==="text",onClick:v},{default:s(()=>[u(m(t(w)),1)]),_:1},8,["type","text"])])],2)],2)]),default:s(()=>[e.$slots.reference?E(e.$slots,"reference",{key:0}):S("v-if",!0)]),_:3},16,["popper-class","popper-style","teleported","hide-after","persistent"]))}});var J=V(G,[["__file","popconfirm.vue"]]);const X=L(J);export{X as E};
