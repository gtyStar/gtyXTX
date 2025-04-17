import{aA as x,R as Me,D as ze,S as Be,e as T,av as Pe,B as se,ac as fe,l as ke,aQ as Ve,M as Se,af as me,at as Re,I as C,aC as Te,aR as ve,p as ae,aS as De,aT as He,aU as Ue,aV as Ye,aW as Fe,a6 as F,aD as Ke,Q as Ne,r as H,i as h,o as m,w as y,j as _,a as b,z as c,U as q,$ as pe,c as ee,h as $,ad as U,t as Y,s as G,d as ne,X as oe,Y as Xe,aX as We,V as je,aY as qe,m as z,a1 as Ge,aZ as le,aw as ge,a_ as he,au as Qe,a7 as ie,J as ue,O as Ie,a$ as Le,b0 as ye,b1 as Oe,b2 as be,a3 as Ze}from"./index-BTOKHnDP.js";import{E as Je,e as Ce}from"./button-CveDm6EI.js";import{E as xe}from"./input-w92jo3R6.js";import{P as te}from"./vnode-pZSNRRqm.js";import{o as Ee,E as _e}from"./focus-trap-B7PHmNQ8.js";import{t as en}from"./error-Cq9Fpw4b.js";import{a as nn}from"./scroll-CC7OCiic.js";const Ae=e=>{if(!e)return{onClick:x,onMousedown:x,onMouseup:x};let n=!1,s=!1;return{onClick:i=>{n&&s&&e(i),n=s=!1},onMousedown:i=>{n=i.target===i.currentTarget},onMouseup:i=>{s=i.target===i.currentTarget}}},on=ze({mask:{type:Boolean,default:!0},customMaskEvent:Boolean,overlayClass:{type:fe([String,Array,Object])},zIndex:{type:fe([String,Number])}}),tn={click:e=>e instanceof MouseEvent},sn="overlay";var an=Me({name:"ElOverlay",props:on,emits:tn,setup(e,{slots:n,emit:s}){const l=Be(sn),a=d=>{s("click",d)},{onClick:t,onMousedown:i,onMouseup:u}=Ae(e.customMaskEvent?void 0:a);return()=>e.mask?T("div",{class:[l.b(),e.overlayClass],style:{zIndex:e.zIndex},onClick:t,onMousedown:i,onMouseup:u},[se(n,"default")],te.STYLE|te.CLASS|te.PROPS,["onClick","onMouseup","onMousedown"]):Pe("div",{class:e.overlayClass,style:{zIndex:e.zIndex,position:"fixed",top:"0px",right:"0px",bottom:"0px",left:"0px"}},[se(n,"default")])}});const ln=an,rn=(e,n,s,l)=>{let a={offsetX:0,offsetY:0};const t=o=>{const w=o.clientX,f=o.clientY,{offsetX:V,offsetY:R}=a,L=e.value.getBoundingClientRect(),g=L.left,D=L.top,M=L.width,O=L.height,N=document.documentElement.clientWidth,Q=document.documentElement.clientHeight,Z=-g+V,J=-D+R,B=N-g-M+V,X=Q-D-O+R,W=k=>{let S=V+k.clientX-w,A=R+k.clientY-f;l!=null&&l.value||(S=Math.min(Math.max(S,Z),B),A=Math.min(Math.max(A,J),X)),a={offsetX:S,offsetY:A},e.value&&(e.value.style.transform=`translate(${me(S)}, ${me(A)})`)},j=()=>{document.removeEventListener("mousemove",W),document.removeEventListener("mouseup",j)};document.addEventListener("mousemove",W),document.addEventListener("mouseup",j)},i=()=>{n.value&&e.value&&n.value.addEventListener("mousedown",t)},u=()=>{n.value&&e.value&&n.value.removeEventListener("mousedown",t)},d=()=>{a={offsetX:0,offsetY:0},e.value&&(e.value.style.transform="none")};return ke(()=>{Ve(()=>{s.value?i():u()})}),Se(()=>{u()}),{resetPosition:d}},un=(e,n={})=>{Re(e)||en("[useLockscreen]","You need to pass a ref param to this function");const s=n.ns||Be("popup"),l=C(()=>s.bm("parent","hidden"));if(!Te||ve(document.body,l.value))return;let a=0,t=!1,i="0";const u=()=>{setTimeout(()=>{typeof document>"u"||t&&document&&(document.body.style.width=i,Ye(document.body,l.value))},200)};ae(e,d=>{if(!d){u();return}t=!ve(document.body,l.value),t&&(i=document.body.style.width,He(document.body,l.value)),a=nn(s.namespace.value);const o=document.documentElement.clientHeight<document.body.scrollHeight,w=Ue(document.body,"overflowY");a>0&&(o||w==="scroll")&&t&&(document.body.style.width=`calc(100% - ${a}px)`)}),De(()=>u())},cn=e=>["",...Fe].includes(e),re="_trap-focus-children",I=[],we=e=>{if(I.length===0)return;const n=I[I.length-1][re];if(n.length>0&&e.code===Ke.tab){if(n.length===1){e.preventDefault(),document.activeElement!==n[0]&&n[0].focus();return}const s=e.shiftKey,l=e.target===n[0],a=e.target===n[n.length-1];l&&s&&(e.preventDefault(),n[n.length-1].focus()),a&&!s&&(e.preventDefault(),n[0].focus())}},dn={beforeMount(e){e[re]=Ee(e),I.push(e),I.length<=1&&document.addEventListener("keydown",we)},updated(e){F(()=>{e[re]=Ee(e)})},unmounted(){I.shift(),I.length===0&&document.removeEventListener("keydown",we)}},fn=Me({name:"ElMessageBox",directives:{TrapFocus:dn},components:{ElButton:Je,ElFocusTrap:_e,ElInput:xe,ElOverlay:ln,ElIcon:je,...We},inheritAttrs:!1,props:{buttonSize:{type:String,validator:cn},modal:{type:Boolean,default:!0},lockScroll:{type:Boolean,default:!0},showClose:{type:Boolean,default:!0},closeOnClickModal:{type:Boolean,default:!0},closeOnPressEscape:{type:Boolean,default:!0},closeOnHashChange:{type:Boolean,default:!0},center:Boolean,draggable:Boolean,overflow:Boolean,roundButton:{default:!1,type:Boolean},container:{type:String,default:"body"},boxType:{type:String,default:""}},emits:["vanish","action"],setup(e,{emit:n}){const{locale:s,zIndex:l,ns:a,size:t}=qe("message-box",C(()=>e.buttonSize)),{t:i}=s,{nextZIndex:u}=l,d=z(!1),o=Ge({autofocus:!0,beforeClose:null,callback:null,cancelButtonText:"",cancelButtonClass:"",confirmButtonText:"",confirmButtonClass:"",customClass:"",customStyle:{},dangerouslyUseHTMLString:!1,distinguishCancelAndClose:!1,icon:"",closeIcon:"",inputPattern:null,inputPlaceholder:"",inputType:"text",inputValue:"",inputValidator:void 0,inputErrorMessage:"",message:"",modalFade:!0,modalClass:"",showCancelButton:!1,showConfirmButton:!0,type:"",title:void 0,showInput:!1,action:"",confirmButtonLoading:!1,cancelButtonLoading:!1,confirmButtonLoadingIcon:le(ge),cancelButtonLoadingIcon:le(ge),confirmButtonDisabled:!1,editorErrorMessage:"",validateError:!1,zIndex:u()}),w=C(()=>{const r=o.type;return{[a.bm("icon",r)]:r&&he[r]}}),f=Ce(),V=Ce(),R=C(()=>{const r=o.type;return o.icon||r&&he[r]||""}),L=C(()=>!!o.message),g=z(),D=z(),M=z(),O=z(),N=z(),Q=C(()=>o.confirmButtonClass);ae(()=>o.inputValue,async r=>{await F(),e.boxType==="prompt"&&r&&S()},{immediate:!0}),ae(()=>d.value,r=>{var v,p;r&&(e.boxType!=="prompt"&&(o.autofocus?M.value=(p=(v=N.value)==null?void 0:v.$el)!=null?p:g.value:M.value=g.value),o.zIndex=u()),e.boxType==="prompt"&&(r?F().then(()=>{var de;O.value&&O.value.$el&&(o.autofocus?M.value=(de=A())!=null?de:g.value:M.value=g.value)}):(o.editorErrorMessage="",o.validateError=!1))});const Z=C(()=>e.draggable),J=C(()=>e.overflow);rn(g,D,Z,J),ke(async()=>{await F(),e.closeOnHashChange&&window.addEventListener("hashchange",B)}),Se(()=>{e.closeOnHashChange&&window.removeEventListener("hashchange",B)});function B(){d.value&&(d.value=!1,F(()=>{o.action&&n("action",o.action)}))}const X=()=>{e.closeOnClickModal&&k(o.distinguishCancelAndClose?"close":"cancel")},W=Ae(X),j=r=>{if(o.inputType!=="textarea")return r.preventDefault(),k("confirm")},k=r=>{var v;e.boxType==="prompt"&&r==="confirm"&&!S()||(o.action=r,o.beforeClose?(v=o.beforeClose)==null||v.call(o,r,o,B):B())},S=()=>{if(e.boxType==="prompt"){const r=o.inputPattern;if(r&&!r.test(o.inputValue||""))return o.editorErrorMessage=o.inputErrorMessage||i("el.messagebox.error"),o.validateError=!0,!1;const v=o.inputValidator;if(ie(v)){const p=v(o.inputValue);if(p===!1)return o.editorErrorMessage=o.inputErrorMessage||i("el.messagebox.error"),o.validateError=!0,!1;if(ue(p))return o.editorErrorMessage=p,o.validateError=!0,!1}}return o.editorErrorMessage="",o.validateError=!1,!0},A=()=>{var r,v;const p=(r=O.value)==null?void 0:r.$refs;return(v=p==null?void 0:p.input)!=null?v:p==null?void 0:p.textarea},ce=()=>{k("close")},$e=()=>{e.closeOnPressEscape&&ce()};return e.lockScroll&&un(d),{...Qe(o),ns:a,overlayEvent:W,visible:d,hasMessage:L,typeClass:w,contentId:f,inputId:V,btnSize:t,iconComponent:R,confirmButtonClasses:Q,rootRef:g,focusStartRef:M,headerRef:D,inputRef:O,confirmRef:N,doClose:B,handleClose:ce,onCloseRequested:$e,handleWrapperClick:X,handleInputEnter:j,handleAction:k,t:i}}});function mn(e,n,s,l,a,t){const i=H("el-icon"),u=H("el-input"),d=H("el-button"),o=H("el-focus-trap"),w=H("el-overlay");return m(),h(Xe,{name:"fade-in-linear",onAfterLeave:f=>e.$emit("vanish"),persisted:""},{default:y(()=>[_(T(w,{"z-index":e.zIndex,"overlay-class":[e.ns.is("message-box"),e.modalClass],mask:e.modal},{default:y(()=>[b("div",{role:"dialog","aria-label":e.title,"aria-modal":"true","aria-describedby":e.showInput?void 0:e.contentId,class:c(`${e.ns.namespace.value}-overlay-message-box`),onClick:e.overlayEvent.onClick,onMousedown:e.overlayEvent.onMousedown,onMouseup:e.overlayEvent.onMouseup},[T(o,{loop:"",trapped:e.visible,"focus-trap-el":e.rootRef,"focus-start-el":e.focusStartRef,onReleaseRequested:e.onCloseRequested},{default:y(()=>[b("div",{ref:"rootRef",class:c([e.ns.b(),e.customClass,e.ns.is("draggable",e.draggable),{[e.ns.m("center")]:e.center}]),style:pe(e.customStyle),tabindex:"-1",onClick:q(()=>{},["stop"])},[e.title!==null&&e.title!==void 0?(m(),ee("div",{key:0,ref:"headerRef",class:c([e.ns.e("header"),{"show-close":e.showClose}])},[b("div",{class:c(e.ns.e("title"))},[e.iconComponent&&e.center?(m(),h(i,{key:0,class:c([e.ns.e("status"),e.typeClass])},{default:y(()=>[(m(),h(U(e.iconComponent)))]),_:1},8,["class"])):$("v-if",!0),b("span",null,Y(e.title),1)],2),e.showClose?(m(),ee("button",{key:0,type:"button",class:c(e.ns.e("headerbtn")),"aria-label":e.t("el.messagebox.close"),onClick:f=>e.handleAction(e.distinguishCancelAndClose?"close":"cancel"),onKeydown:G(q(f=>e.handleAction(e.distinguishCancelAndClose?"close":"cancel"),["prevent"]),["enter"])},[T(i,{class:c(e.ns.e("close"))},{default:y(()=>[(m(),h(U(e.closeIcon||"close")))]),_:1},8,["class"])],42,["aria-label","onClick","onKeydown"])):$("v-if",!0)],2)):$("v-if",!0),b("div",{id:e.contentId,class:c(e.ns.e("content"))},[b("div",{class:c(e.ns.e("container"))},[e.iconComponent&&!e.center&&e.hasMessage?(m(),h(i,{key:0,class:c([e.ns.e("status"),e.typeClass])},{default:y(()=>[(m(),h(U(e.iconComponent)))]),_:1},8,["class"])):$("v-if",!0),e.hasMessage?(m(),ee("div",{key:1,class:c(e.ns.e("message"))},[se(e.$slots,"default",{},()=>[e.dangerouslyUseHTMLString?(m(),h(U(e.showInput?"label":"p"),{key:1,for:e.showInput?e.inputId:void 0,innerHTML:e.message},null,8,["for","innerHTML"])):(m(),h(U(e.showInput?"label":"p"),{key:0,for:e.showInput?e.inputId:void 0},{default:y(()=>[ne(Y(e.dangerouslyUseHTMLString?"":e.message),1)]),_:1},8,["for"]))])],2)):$("v-if",!0)],2),_(b("div",{class:c(e.ns.e("input"))},[T(u,{id:e.inputId,ref:"inputRef",modelValue:e.inputValue,"onUpdate:modelValue":f=>e.inputValue=f,type:e.inputType,placeholder:e.inputPlaceholder,"aria-invalid":e.validateError,class:c({invalid:e.validateError}),onKeydown:G(e.handleInputEnter,["enter"])},null,8,["id","modelValue","onUpdate:modelValue","type","placeholder","aria-invalid","class","onKeydown"]),b("div",{class:c(e.ns.e("errormsg")),style:pe({visibility:e.editorErrorMessage?"visible":"hidden"})},Y(e.editorErrorMessage),7)],2),[[oe,e.showInput]])],10,["id"]),b("div",{class:c(e.ns.e("btns"))},[e.showCancelButton?(m(),h(d,{key:0,loading:e.cancelButtonLoading,"loading-icon":e.cancelButtonLoadingIcon,class:c([e.cancelButtonClass]),round:e.roundButton,size:e.btnSize,onClick:f=>e.handleAction("cancel"),onKeydown:G(q(f=>e.handleAction("cancel"),["prevent"]),["enter"])},{default:y(()=>[ne(Y(e.cancelButtonText||e.t("el.messagebox.cancel")),1)]),_:1},8,["loading","loading-icon","class","round","size","onClick","onKeydown"])):$("v-if",!0),_(T(d,{ref:"confirmRef",type:"primary",loading:e.confirmButtonLoading,"loading-icon":e.confirmButtonLoadingIcon,class:c([e.confirmButtonClasses]),round:e.roundButton,disabled:e.confirmButtonDisabled,size:e.btnSize,onClick:f=>e.handleAction("confirm"),onKeydown:G(q(f=>e.handleAction("confirm"),["prevent"]),["enter"])},{default:y(()=>[ne(Y(e.confirmButtonText||e.t("el.messagebox.confirm")),1)]),_:1},8,["loading","loading-icon","class","round","disabled","size","onClick","onKeydown"]),[[oe,e.showConfirmButton]])],2)],14,["onClick"])]),_:3},8,["trapped","focus-trap-el","focus-start-el","onReleaseRequested"])],42,["aria-label","aria-describedby","onClick","onMousedown","onMouseup"])]),_:3},8,["z-index","overlay-class","mask"]),[[oe,e.visible]])]),_:3},8,["onAfterLeave"])}var vn=Ne(fn,[["render",mn],["__file","index.vue"]]);const K=new Map,pn=e=>{let n=document.body;return e.appendTo&&(ue(e.appendTo)&&(n=document.querySelector(e.appendTo)),be(e.appendTo)&&(n=e.appendTo),be(n)||(n=document.body)),n},gn=(e,n,s=null)=>{const l=T(vn,e,ie(e.message)||Ie(e.message)?{default:ie(e.message)?e.message:()=>e.message}:null);return l.appContext=s,Le(l,n),pn(e).appendChild(n.firstElementChild),l.component},hn=()=>document.createElement("div"),yn=(e,n)=>{const s=hn();e.onVanish=()=>{Le(null,s),K.delete(a)},e.onAction=t=>{const i=K.get(a);let u;e.showInput?u={value:a.inputValue,action:t}:u=t,e.callback?e.callback(u,l.proxy):t==="cancel"||t==="close"?e.distinguishCancelAndClose&&t!=="cancel"?i.reject("close"):i.reject("cancel"):i.resolve(u)};const l=gn(e,s,n),a=l.proxy;for(const t in e)ye(e,t)&&!ye(a.$props,t)&&(t==="closeIcon"&&Oe(e[t])?a[t]=le(e[t]):a[t]=e[t]);return a.visible=!0,a};function P(e,n=null){if(!Te)return Promise.reject();let s;return ue(e)||Ie(e)?e={message:e}:s=e.callback,new Promise((l,a)=>{const t=yn(e,n??P._context);K.set(t,{options:e,callback:s,resolve:l,reject:a})})}const bn=["alert","confirm","prompt"],Cn={alert:{closeOnPressEscape:!1,closeOnClickModal:!1},confirm:{showCancelButton:!0},prompt:{showCancelButton:!0,showInput:!0}};bn.forEach(e=>{P[e]=En(e)});function En(e){return(n,s,l,a)=>{let t="";return Oe(s)?(l=s,t=""):Ze(s)?t="":t=s,P(Object.assign({title:t,message:n,type:"",...Cn[e]},l,{boxType:e}),a)}}P.close=()=>{K.forEach((e,n)=>{n.doClose()}),K.clear()};P._context=null;const E=P;E.install=e=>{E._context=e._context,e.config.globalProperties.$msgbox=E,e.config.globalProperties.$messageBox=E,e.config.globalProperties.$alert=E.alert,e.config.globalProperties.$confirm=E.confirm,e.config.globalProperties.$prompt=E.prompt};const Ln=E;export{Ln as E,un as a,ln as b,Ae as c,rn as u};
