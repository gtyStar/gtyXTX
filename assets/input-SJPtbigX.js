import{bZ as ye,bK as Ae,bR as st,bJ as we,b6 as Me,b_ as Le,b3 as rt,bT as lt,b5 as it,b$ as ut,aB as Be,D as xe,C as He,I as q,bd as ct,ab as j,aa as Se,ah as dt,H as h,bw as pt,O as $e,J as G,m as L,p as X,bm as ee,a6 as Ce,a5 as k,P as ft,Q as De,aE as vt,G as mt,R as Ee,b8 as ht,c0 as gt,c1 as bt,ag as yt,K as wt,l as xt,bn as St,c as C,o as m,h as g,F as te,a as F,y,b as o,A as _,i as I,w as A,ac as U,U as M,af as Ie,e as Ct,aH as Et,T as It,az as Pt,t as W,Z as Pe,b0 as Te,a3 as Tt}from"./index-C8SM9Yei.js";import{U as ne,I as Ne,C as ze}from"./event-BB_Ol6Sd.js";import{a as Nt,c as zt,u as Ft,f as kt}from"./button-BWjxL5hd.js";import{d as Fe}from"./error-Cq9Fpw4b.js";function Ot(e){return e}function Vt(e,a,s){switch(s.length){case 0:return e.call(a);case 1:return e.call(a,s[0]);case 2:return e.call(a,s[0],s[1]);case 3:return e.call(a,s[0],s[1],s[2])}return e.apply(a,s)}var Rt=800,At=16,Mt=Date.now;function Lt(e){var a=0,s=0;return function(){var n=Mt(),r=At-(n-s);if(s=n,r>0){if(++a>=Rt)return arguments[0]}else a=0;return e.apply(void 0,arguments)}}function Bt(e){return function(){return e}}var Ht=ye?function(e,a){return ye(e,"toString",{configurable:!0,enumerable:!1,value:Bt(a),writable:!0})}:Ot,$t=Lt(Ht),ke=Math.max;function Dt(e,a,s){return a=ke(a===void 0?e.length-1:a,0),function(){for(var n=arguments,r=-1,u=ke(n.length-a,0),i=Array(u);++r<u;)i[r]=n[a+r];r=-1;for(var l=Array(a+1);++r<a;)l[r]=n[r];return l[a]=s(i),Vt(e,this,l)}}var Kt=9007199254740991;function _t(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=Kt}var Ut="[object Arguments]";function Oe(e){return Ae(e)&&st(e)==Ut}var Ke=Object.prototype,Wt=Ke.hasOwnProperty,Gt=Ke.propertyIsEnumerable,_e=Oe(function(){return arguments}())?Oe:function(e){return Ae(e)&&Wt.call(e,"callee")&&!Gt.call(e,"callee")};function Xt(e,a){for(var s=-1,n=a.length,r=e.length;++s<n;)e[r+s]=a[s];return e}var Ve=we?we.isConcatSpreadable:void 0;function Yt(e){return Me(e)||_e(e)||!!(Ve&&e&&e[Ve])}function Ue(e,a,s,n,r){var u=-1,i=e.length;for(s||(s=Yt),r||(r=[]);++u<i;){var l=e[u];a>0&&s(l)?a>1?Ue(l,a-1,s,n,r):Xt(r,l):r[r.length]=l}return r}function Zt(e){var a=e==null?0:e.length;return a?Ue(e,1):[]}function Jt(e){return $t(Dt(e,void 0,Zt),e+"")}function Qt(e,a){return e!=null&&a in Object(e)}function qt(e,a,s){a=Le(a,e);for(var n=-1,r=a.length,u=!1;++n<r;){var i=rt(a[n]);if(!(u=e!=null&&s(e,i)))break;e=e[i]}return u||++n!=r?u:(r=e==null?0:e.length,!!r&&_t(r)&&lt(i,r)&&(Me(e)||_e(e)))}function jt(e,a){return e!=null&&qt(e,a,Qt)}function en(e,a,s){for(var n=-1,r=a.length,u={};++n<r;){var i=a[n],l=it(e,i);s(l,i)&&ut(u,Le(i,e),l)}return u}function tn(e,a){return en(e,a,function(s,n){return jt(e,n)})}var nn=Jt(function(e,a){return e==null?{}:tn(e,a)});const an=()=>Be&&/firefox/i.test(window.navigator.userAgent);let S;const on={height:"0",visibility:"hidden",overflow:an()?"":"hidden",position:"absolute","z-index":"-1000",top:"0",right:"0"},sn=["letter-spacing","line-height","padding-top","padding-bottom","font-family","font-weight","font-size","text-rendering","text-transform","width","text-indent","padding-left","padding-right","border-width","box-sizing"];function rn(e){const a=window.getComputedStyle(e),s=a.getPropertyValue("box-sizing"),n=Number.parseFloat(a.getPropertyValue("padding-bottom"))+Number.parseFloat(a.getPropertyValue("padding-top")),r=Number.parseFloat(a.getPropertyValue("border-bottom-width"))+Number.parseFloat(a.getPropertyValue("border-top-width"));return{contextStyle:sn.map(i=>[i,a.getPropertyValue(i)]),paddingSize:n,borderSize:r,boxSizing:s}}function Re(e,a=1,s){var n;S||(S=document.createElement("textarea"),document.body.appendChild(S));const{paddingSize:r,borderSize:u,boxSizing:i,contextStyle:l}=rn(e);l.forEach(([b,v])=>S==null?void 0:S.style.setProperty(b,v)),Object.entries(on).forEach(([b,v])=>S==null?void 0:S.style.setProperty(b,v,"important")),S.value=e.value||e.placeholder||"";let d=S.scrollHeight;const w={};i==="border-box"?d=d+u:i==="content-box"&&(d=d-r),S.value="";const f=S.scrollHeight-r;if(xe(a)){let b=f*a;i==="border-box"&&(b=b+r+u),d=Math.max(b,d),w.minHeight=`${b}px`}if(xe(s)){let b=f*s;i==="border-box"&&(b=b+r+u),d=Math.min(b,d)}return w.height=`${d}px`,(n=S.parentNode)==null||n.removeChild(S),S=void 0,w}const ln=He({ariaLabel:String,ariaOrientation:{type:String,values:["horizontal","vertical","undefined"]},ariaControls:String}),un=e=>nn(ln,e),cn=He({id:{type:String,default:void 0},size:dt,disabled:Boolean,modelValue:{type:j([String,Number,Object]),default:""},maxlength:{type:[String,Number]},minlength:{type:[String,Number]},type:{type:String,default:"text"},resize:{type:String,values:["none","both","horizontal","vertical"]},autosize:{type:j([Boolean,Object]),default:!1},autocomplete:{type:String,default:"off"},formatter:{type:Function},parser:{type:Function},placeholder:{type:String},form:{type:String},readonly:Boolean,clearable:Boolean,showPassword:Boolean,showWordLimit:Boolean,suffixIcon:{type:Se},prefixIcon:{type:Se},containerRole:{type:String,default:void 0},tabindex:{type:[String,Number],default:0},validateEvent:{type:Boolean,default:!0},inputStyle:{type:j([Object,Array,String]),default:()=>ct({})},autofocus:Boolean,rows:{type:Number,default:2},...un(["ariaLabel"])}),dn={[ne]:e=>q(e),input:e=>q(e),change:e=>q(e),focus:e=>e instanceof FocusEvent,blur:e=>e instanceof FocusEvent,clear:()=>!0,mouseleave:e=>e instanceof MouseEvent,mouseenter:e=>e instanceof MouseEvent,keydown:e=>e instanceof Event,compositionstart:e=>e instanceof CompositionEvent,compositionupdate:e=>e instanceof CompositionEvent,compositionend:e=>e instanceof CompositionEvent},pn=["class","style"],fn=/^on[A-Z]/,vn=(e={})=>{const{excludeListeners:a=!1,excludeKeys:s}=e,n=h(()=>((s==null?void 0:s.value)||[]).concat(pn)),r=$e();return r?h(()=>{var u;return pt(Object.entries((u=r.proxy)==null?void 0:u.$attrs).filter(([i])=>!n.value.includes(i)&&!(a&&fn.test(i))))}):h(()=>({}))};function mn(e,{beforeFocus:a,afterFocus:s,beforeBlur:n,afterBlur:r}={}){const u=$e(),{emit:i}=u,l=G(),d=L(!1),w=v=>{Ce(a)&&a(v)||d.value||(d.value=!0,i("focus",v),s==null||s())},f=v=>{var x;Ce(n)&&n(v)||v.relatedTarget&&((x=l.value)!=null&&x.contains(v.relatedTarget))||(d.value=!1,i("blur",v),r==null||r())},b=()=>{var v,x;(v=l.value)!=null&&v.contains(document.activeElement)&&l.value!==document.activeElement||(x=e.value)==null||x.focus()};return X(l,v=>{v&&v.setAttribute("tabindex","-1")}),ee(l,"focus",w,!0),ee(l,"blur",f,!0),ee(l,"click",b,!0),{isFocused:d,wrapperRef:l,handleFocus:w,handleBlur:f}}const hn=e=>/([\uAC00-\uD7AF\u3130-\u318F])+/gi.test(e);function gn({afterComposition:e,emit:a}){const s=L(!1),n=l=>{a==null||a("compositionstart",l),s.value=!0},r=l=>{var d;a==null||a("compositionupdate",l);const w=(d=l.target)==null?void 0:d.value,f=w[w.length-1]||"";s.value=!hn(f)},u=l=>{a==null||a("compositionend",l),s.value&&(s.value=!1,k(()=>e(l)))};return{isComposing:s,handleComposition:l=>{l.type==="compositionend"?u(l):r(l)},handleCompositionStart:n,handleCompositionUpdate:r,handleCompositionEnd:u}}function bn(e){let a;function s(){if(e.value==null)return;const{selectionStart:r,selectionEnd:u,value:i}=e.value;if(r==null||u==null)return;const l=i.slice(0,Math.max(0,r)),d=i.slice(Math.max(0,u));a={selectionStart:r,selectionEnd:u,value:i,beforeTxt:l,afterTxt:d}}function n(){if(e.value==null||a==null)return;const{value:r}=e.value,{beforeTxt:u,afterTxt:i,selectionStart:l}=a;if(u==null||i==null||l==null)return;let d=r.length;if(r.endsWith(i))d=r.length-i.length;else if(r.startsWith(u))d=u.length;else{const w=u[l-1],f=r.indexOf(w,l-1);f!==-1&&(d=f+1)}e.value.setSelectionRange(d,d)}return[s,n]}const yn="ElInput",wn=De({name:yn,inheritAttrs:!1}),xn=De({...wn,props:cn,emits:dn,setup(e,{expose:a,emit:s}){const n=e,r=vt(),u=vn(),i=mt(),l=h(()=>[n.type==="textarea"?ae.b():c.b(),c.m(v.value),c.is("disabled",x.value),c.is("exceed",Je.value),{[c.b("group")]:i.prepend||i.append,[c.m("prefix")]:i.prefix||n.prefixIcon,[c.m("suffix")]:i.suffix||n.suffixIcon||n.clearable||n.showPassword,[c.bm("suffix","password-clear")]:K.value&&Z.value,[c.b("hidden")]:n.type==="hidden"},r.class]),d=h(()=>[c.e("wrapper"),c.is("focus",D.value)]),{form:w,formItem:f}=Ft(),{inputId:b}=kt(n,{formItemContext:f}),v=Nt(),x=zt(),c=Ee("input"),ae=Ee("textarea"),B=G(),E=G(),Y=L(!1),H=L(!1),oe=L(),$=G(n.inputStyle),T=h(()=>B.value||E.value),{wrapperRef:We,isFocused:D,handleFocus:Ge,handleBlur:Xe}=mn(T,{beforeFocus(){return x.value},afterBlur(){var t;n.validateEvent&&((t=f==null?void 0:f.validate)==null||t.call(f,"blur").catch(p=>Fe()))}}),se=h(()=>{var t;return(t=w==null?void 0:w.statusIcon)!=null?t:!1}),O=h(()=>(f==null?void 0:f.validateState)||""),re=h(()=>O.value&&ht[O.value]),Ye=h(()=>H.value?gt:bt),Ze=h(()=>[r.style]),le=h(()=>[n.inputStyle,$.value,{resize:n.resize}]),P=h(()=>yt(n.modelValue)?"":String(n.modelValue)),K=h(()=>n.clearable&&!x.value&&!n.readonly&&!!P.value&&(D.value||Y.value)),Z=h(()=>n.showPassword&&!x.value&&!!P.value&&(!!P.value||D.value)),N=h(()=>n.showWordLimit&&!!n.maxlength&&(n.type==="text"||n.type==="textarea")&&!x.value&&!n.readonly&&!n.showPassword),J=h(()=>P.value.length),Je=h(()=>!!N.value&&J.value>Number(n.maxlength)),Qe=h(()=>!!i.suffix||!!n.suffixIcon||K.value||n.showPassword||N.value||!!O.value&&se.value),[ie,ue]=bn(B);wt(E,t=>{if(qe(),!N.value||n.resize!=="both")return;const p=t[0],{width:z}=p.contentRect;oe.value={right:`calc(100% - ${z+15+6}px)`}});const V=()=>{const{type:t,autosize:p}=n;if(!(!Be||t!=="textarea"||!E.value))if(p){const z=Te(p)?p.minRows:void 0,ge=Te(p)?p.maxRows:void 0,be=Re(E.value,z,ge);$.value={overflowY:"hidden",...be},k(()=>{E.value.offsetHeight,$.value=be})}else $.value={minHeight:Re(E.value).minHeight}},qe=(t=>{let p=!1;return()=>{var z;if(p||!n.autosize)return;((z=E.value)==null?void 0:z.offsetParent)===null||(t(),p=!0)}})(V),R=()=>{const t=T.value,p=n.formatter?n.formatter(P.value):P.value;!t||t.value===p||(t.value=p)},Q=async t=>{ie();let{value:p}=t.target;if(n.formatter&&n.parser&&(p=n.parser(p)),!de.value){if(p===P.value){R();return}s(ne,p),s(Ne,p),await k(),R(),ue()}},ce=t=>{let{value:p}=t.target;n.formatter&&n.parser&&(p=n.parser(p)),s(ze,p)},{isComposing:de,handleCompositionStart:pe,handleCompositionUpdate:fe,handleCompositionEnd:ve}=gn({emit:s,afterComposition:Q}),je=()=>{ie(),H.value=!H.value,setTimeout(ue)},et=()=>{var t;return(t=T.value)==null?void 0:t.focus()},tt=()=>{var t;return(t=T.value)==null?void 0:t.blur()},nt=t=>{Y.value=!1,s("mouseleave",t)},at=t=>{Y.value=!0,s("mouseenter",t)},me=t=>{s("keydown",t)},ot=()=>{var t;(t=T.value)==null||t.select()},he=()=>{s(ne,""),s(ze,""),s("clear"),s(Ne,"")};return X(()=>n.modelValue,()=>{var t;k(()=>V()),n.validateEvent&&((t=f==null?void 0:f.validate)==null||t.call(f,"change").catch(p=>Fe()))}),X(P,()=>R()),X(()=>n.type,async()=>{await k(),R(),V()}),xt(()=>{!n.formatter&&n.parser,R(),k(V)}),a({input:B,textarea:E,ref:T,textareaStyle:le,autosize:St(n,"autosize"),isComposing:de,focus:et,blur:tt,select:ot,clear:he,resizeTextarea:V}),(t,p)=>(m(),C("div",{class:y([o(l),{[o(c).bm("group","append")]:t.$slots.append,[o(c).bm("group","prepend")]:t.$slots.prepend}]),style:Pe(o(Ze)),onMouseenter:at,onMouseleave:nt},[g(" input "),t.type!=="textarea"?(m(),C(te,{key:0},[g(" prepend slot "),t.$slots.prepend?(m(),C("div",{key:0,class:y(o(c).be("group","prepend"))},[_(t.$slots,"prepend")],2)):g("v-if",!0),F("div",{ref_key:"wrapperRef",ref:We,class:y(o(d))},[g(" prefix slot "),t.$slots.prefix||t.prefixIcon?(m(),C("span",{key:0,class:y(o(c).e("prefix"))},[F("span",{class:y(o(c).e("prefix-inner"))},[_(t.$slots,"prefix"),t.prefixIcon?(m(),I(o(M),{key:0,class:y(o(c).e("icon"))},{default:A(()=>[(m(),I(U(t.prefixIcon)))]),_:1},8,["class"])):g("v-if",!0)],2)],2)):g("v-if",!0),F("input",Ie({id:o(b),ref_key:"input",ref:B,class:o(c).e("inner")},o(u),{minlength:t.minlength,maxlength:t.maxlength,type:t.showPassword?H.value?"text":"password":t.type,disabled:o(x),readonly:t.readonly,autocomplete:t.autocomplete,tabindex:t.tabindex,"aria-label":t.ariaLabel,placeholder:t.placeholder,style:t.inputStyle,form:t.form,autofocus:t.autofocus,role:t.containerRole,onCompositionstart:o(pe),onCompositionupdate:o(fe),onCompositionend:o(ve),onInput:Q,onChange:ce,onKeydown:me}),null,16,["id","minlength","maxlength","type","disabled","readonly","autocomplete","tabindex","aria-label","placeholder","form","autofocus","role","onCompositionstart","onCompositionupdate","onCompositionend"]),g(" suffix slot "),o(Qe)?(m(),C("span",{key:1,class:y(o(c).e("suffix"))},[F("span",{class:y(o(c).e("suffix-inner"))},[!o(K)||!o(Z)||!o(N)?(m(),C(te,{key:0},[_(t.$slots,"suffix"),t.suffixIcon?(m(),I(o(M),{key:0,class:y(o(c).e("icon"))},{default:A(()=>[(m(),I(U(t.suffixIcon)))]),_:1},8,["class"])):g("v-if",!0)],64)):g("v-if",!0),o(K)?(m(),I(o(M),{key:1,class:y([o(c).e("icon"),o(c).e("clear")]),onMousedown:It(o(Pt),["prevent"]),onClick:he},{default:A(()=>[Ct(o(Et))]),_:1},8,["class","onMousedown"])):g("v-if",!0),o(Z)?(m(),I(o(M),{key:2,class:y([o(c).e("icon"),o(c).e("password")]),onClick:je},{default:A(()=>[(m(),I(U(o(Ye))))]),_:1},8,["class"])):g("v-if",!0),o(N)?(m(),C("span",{key:3,class:y(o(c).e("count"))},[F("span",{class:y(o(c).e("count-inner"))},W(o(J))+" / "+W(t.maxlength),3)],2)):g("v-if",!0),o(O)&&o(re)&&o(se)?(m(),I(o(M),{key:4,class:y([o(c).e("icon"),o(c).e("validateIcon"),o(c).is("loading",o(O)==="validating")])},{default:A(()=>[(m(),I(U(o(re))))]),_:1},8,["class"])):g("v-if",!0)],2)],2)):g("v-if",!0)],2),g(" append slot "),t.$slots.append?(m(),C("div",{key:1,class:y(o(c).be("group","append"))},[_(t.$slots,"append")],2)):g("v-if",!0)],64)):(m(),C(te,{key:1},[g(" textarea "),F("textarea",Ie({id:o(b),ref_key:"textarea",ref:E,class:[o(ae).e("inner"),o(c).is("focus",o(D))]},o(u),{minlength:t.minlength,maxlength:t.maxlength,tabindex:t.tabindex,disabled:o(x),readonly:t.readonly,autocomplete:t.autocomplete,style:o(le),"aria-label":t.ariaLabel,placeholder:t.placeholder,form:t.form,autofocus:t.autofocus,rows:t.rows,role:t.containerRole,onCompositionstart:o(pe),onCompositionupdate:o(fe),onCompositionend:o(ve),onInput:Q,onFocus:o(Ge),onBlur:o(Xe),onChange:ce,onKeydown:me}),null,16,["id","minlength","maxlength","tabindex","disabled","readonly","autocomplete","aria-label","placeholder","form","autofocus","rows","role","onCompositionstart","onCompositionupdate","onCompositionend","onFocus","onBlur"]),o(N)?(m(),C("span",{key:0,style:Pe(oe.value),class:y(o(c).e("count"))},W(o(J))+" / "+W(t.maxlength),7)):g("v-if",!0)],64))],38))}});var Sn=ft(xn,[["__file","input.vue"]]);const Nn=Tt(Sn);export{Nn as E,gn as a,Ue as b,Ot as c,mn as d,Xt as e,_t as f,_e as g,jt as h,an as i,nn as p,un as u};
