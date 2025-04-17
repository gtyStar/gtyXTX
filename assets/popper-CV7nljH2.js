import{D as X,Q as ne,R as L,m as F,I as P,B as te,N as Ae,S as Me,a0 as ue,p as D,M as Be,c as Ne,o as U,$ as mo,z as Ft,b as f,ac as S,aA as Ze,j as kt,bt as ho,b1 as bo,F as yo,bu as wo,bv as Oo,e as Pe,l as qe,b2 as Ee,i as le,h as He,w as ee,ag as Ye,bw as jt,ah as Dt,aC as Te,K as Eo,bx as wt,aL as To,G as Je,a4 as Qe,by as Co,aD as Ge,bz as Lt,P as Ro,a7 as De,aq as $t,az as Ao,bo as Oe,bA as Po,bB as xo,bC as So,Y as Mo,X as Bo,bD as _o,bE as Io,bF as Fo,t as ko}from"./index-Bf80aKor.js";import{u as Nt}from"./input-BDVXdQDy.js";import{a as Ot,E as jo,t as Do}from"./focus-trap-pmJd-tew.js";import{g as Et,h as Lo,e as $o}from"./button-BfPzu4mH.js";function No(e){return e===void 0}const et=Symbol("popper"),Ht=Symbol("popperContent"),Ho=["dialog","grid","group","listbox","menu","navigation","tooltip","tree"],Wt=X({role:{type:String,values:Ho,default:"tooltip"}}),Wo=L({name:"ElPopper",inheritAttrs:!1}),qo=L({...Wo,props:Wt,setup(e,{expose:t}){const o=e,n=F(),r=F(),a=F(),i=F(),u=P(()=>o.role),s={triggerRef:n,popperInstanceRef:r,contentRef:a,referenceRef:i,role:u};return t(s),Ae(et,s),(l,d)=>te(l.$slots,"default")}});var zo=ne(qo,[["__file","popper.vue"]]);const qt=X({arrowOffset:{type:Number,default:5}}),Ko=L({name:"ElPopperArrow",inheritAttrs:!1}),Uo=L({...Ko,props:qt,setup(e,{expose:t}){const o=e,n=Me("popper"),{arrowOffset:r,arrowRef:a,arrowStyle:i}=ue(Ht,void 0);return D(()=>o.arrowOffset,u=>{r.value=u}),Be(()=>{a.value=void 0}),t({arrowRef:a}),(u,s)=>(U(),Ne("span",{ref_key:"arrowRef",ref:a,class:Ft(f(n).e("arrow")),style:mo(f(i)),"data-popper-arrow":""},null,6))}});var Vo=ne(Uo,[["__file","arrow.vue"]]);const zt=X({virtualRef:{type:S(Object)},virtualTriggering:Boolean,onMouseenter:{type:S(Function)},onMouseleave:{type:S(Function)},onClick:{type:S(Function)},onKeydown:{type:S(Function)},onFocus:{type:S(Function)},onBlur:{type:S(Function)},onContextmenu:{type:S(Function)},id:String,open:Boolean}),Kt=Symbol("elForwardRef"),Go=e=>{Ae(Kt,{setForwardRef:o=>{e.value=o}})},Zo=e=>({mounted(t){e(t)},updated(t){e(t)},unmounted(){e(null)}}),Jo="ElOnlyChild",Xo=L({name:Jo,setup(e,{slots:t,attrs:o}){var n;const r=ue(Kt),a=Zo((n=r==null?void 0:r.setForwardRef)!=null?n:Ze);return()=>{var i;const u=(i=t.default)==null?void 0:i.call(t,o);if(!u||u.length>1)return null;const s=Ut(u);return s?kt(ho(s,o),[[a]]):null}}});function Ut(e){if(!e)return null;const t=e;for(const o of t){if(bo(o))switch(o.type){case Oo:continue;case wo:case"svg":return Tt(o);case yo:return Ut(o.children);default:return o}return Tt(o)}return null}function Tt(e){const t=Me("only-child");return Pe("span",{class:t.e("content")},[e])}const Yo=L({name:"ElPopperTrigger",inheritAttrs:!1}),Qo=L({...Yo,props:zt,setup(e,{expose:t}){const o=e,{role:n,triggerRef:r}=ue(et,void 0);Go(r);const a=P(()=>u.value?o.id:void 0),i=P(()=>{if(n&&n.value==="tooltip")return o.open&&o.id?o.id:void 0}),u=P(()=>{if(n&&n.value!=="tooltip")return n.value}),s=P(()=>u.value?`${o.open}`:void 0);let l;const d=["onMouseenter","onMouseleave","onClick","onKeydown","onFocus","onBlur","onContextmenu"];return qe(()=>{D(()=>o.virtualRef,c=>{c&&(r.value=jt(c))},{immediate:!0}),D(r,(c,m)=>{l==null||l(),l=void 0,Ee(c)&&(d.forEach(g=>{var b;const v=o[g];v&&(c.addEventListener(g.slice(2).toLowerCase(),v),(b=m==null?void 0:m.removeEventListener)==null||b.call(m,g.slice(2).toLowerCase(),v))}),Ot(c)&&(l=D([a,i,u,s],g=>{["aria-controls","aria-describedby","aria-haspopup","aria-expanded"].forEach((b,v)=>{Dt(g[v])?c.removeAttribute(b):c.setAttribute(b,g[v])})},{immediate:!0}))),Ee(m)&&Ot(m)&&["aria-controls","aria-describedby","aria-haspopup","aria-expanded"].forEach(g=>m.removeAttribute(g))},{immediate:!0})}),Be(()=>{if(l==null||l(),l=void 0,r.value&&Ee(r.value)){const c=r.value;d.forEach(m=>{const g=o[m];g&&c.removeEventListener(m.slice(2).toLowerCase(),g)}),r.value=void 0}}),t({triggerRef:r}),(c,m)=>c.virtualTriggering?He("v-if",!0):(U(),le(f(Xo),Ye({key:0},c.$attrs,{"aria-controls":f(a),"aria-describedby":f(i),"aria-expanded":f(s),"aria-haspopup":f(u)}),{default:ee(()=>[te(c.$slots,"default")]),_:3},16,["aria-controls","aria-describedby","aria-expanded","aria-haspopup"]))}});var en=ne(Qo,[["__file","trigger.vue"]]),N="top",z="bottom",K="right",H="left",tt="auto",_e=[N,z,K,H],de="start",xe="end",tn="clippingParents",Vt="viewport",we="popper",on="reference",Ct=_e.reduce(function(e,t){return e.concat([t+"-"+de,t+"-"+xe])},[]),ot=[].concat(_e,[tt]).reduce(function(e,t){return e.concat([t,t+"-"+de,t+"-"+xe])},[]),nn="beforeRead",rn="read",an="afterRead",sn="beforeMain",ln="main",un="afterMain",pn="beforeWrite",fn="write",cn="afterWrite",dn=[nn,rn,an,sn,ln,un,pn,fn,cn];function J(e){return e?(e.nodeName||"").toLowerCase():null}function V(e){if(e==null)return window;if(e.toString()!=="[object Window]"){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function ve(e){var t=V(e).Element;return e instanceof t||e instanceof Element}function q(e){var t=V(e).HTMLElement;return e instanceof t||e instanceof HTMLElement}function nt(e){if(typeof ShadowRoot>"u")return!1;var t=V(e).ShadowRoot;return e instanceof t||e instanceof ShadowRoot}function vn(e){var t=e.state;Object.keys(t.elements).forEach(function(o){var n=t.styles[o]||{},r=t.attributes[o]||{},a=t.elements[o];!q(a)||!J(a)||(Object.assign(a.style,n),Object.keys(r).forEach(function(i){var u=r[i];u===!1?a.removeAttribute(i):a.setAttribute(i,u===!0?"":u)}))})}function gn(e){var t=e.state,o={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,o.popper),t.styles=o,t.elements.arrow&&Object.assign(t.elements.arrow.style,o.arrow),function(){Object.keys(t.elements).forEach(function(n){var r=t.elements[n],a=t.attributes[n]||{},i=Object.keys(t.styles.hasOwnProperty(n)?t.styles[n]:o[n]),u=i.reduce(function(s,l){return s[l]="",s},{});!q(r)||!J(r)||(Object.assign(r.style,u),Object.keys(a).forEach(function(s){r.removeAttribute(s)}))})}}var Gt={name:"applyStyles",enabled:!0,phase:"write",fn:vn,effect:gn,requires:["computeStyles"]};function Z(e){return e.split("-")[0]}var se=Math.max,We=Math.min,ge=Math.round;function me(e,t){t===void 0&&(t=!1);var o=e.getBoundingClientRect(),n=1,r=1;if(q(e)&&t){var a=e.offsetHeight,i=e.offsetWidth;i>0&&(n=ge(o.width)/i||1),a>0&&(r=ge(o.height)/a||1)}return{width:o.width/n,height:o.height/r,top:o.top/r,right:o.right/n,bottom:o.bottom/r,left:o.left/n,x:o.left/n,y:o.top/r}}function rt(e){var t=me(e),o=e.offsetWidth,n=e.offsetHeight;return Math.abs(t.width-o)<=1&&(o=t.width),Math.abs(t.height-n)<=1&&(n=t.height),{x:e.offsetLeft,y:e.offsetTop,width:o,height:n}}function Zt(e,t){var o=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(o&&nt(o)){var n=t;do{if(n&&e.isSameNode(n))return!0;n=n.parentNode||n.host}while(n)}return!1}function oe(e){return V(e).getComputedStyle(e)}function mn(e){return["table","td","th"].indexOf(J(e))>=0}function re(e){return((ve(e)?e.ownerDocument:e.document)||window.document).documentElement}function ze(e){return J(e)==="html"?e:e.assignedSlot||e.parentNode||(nt(e)?e.host:null)||re(e)}function Rt(e){return!q(e)||oe(e).position==="fixed"?null:e.offsetParent}function hn(e){var t=navigator.userAgent.toLowerCase().indexOf("firefox")!==-1,o=navigator.userAgent.indexOf("Trident")!==-1;if(o&&q(e)){var n=oe(e);if(n.position==="fixed")return null}var r=ze(e);for(nt(r)&&(r=r.host);q(r)&&["html","body"].indexOf(J(r))<0;){var a=oe(r);if(a.transform!=="none"||a.perspective!=="none"||a.contain==="paint"||["transform","perspective"].indexOf(a.willChange)!==-1||t&&a.willChange==="filter"||t&&a.filter&&a.filter!=="none")return r;r=r.parentNode}return null}function Ie(e){for(var t=V(e),o=Rt(e);o&&mn(o)&&oe(o).position==="static";)o=Rt(o);return o&&(J(o)==="html"||J(o)==="body"&&oe(o).position==="static")?t:o||hn(e)||t}function at(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function Ce(e,t,o){return se(e,We(t,o))}function bn(e,t,o){var n=Ce(e,t,o);return n>o?o:n}function Jt(){return{top:0,right:0,bottom:0,left:0}}function Xt(e){return Object.assign({},Jt(),e)}function Yt(e,t){return t.reduce(function(o,n){return o[n]=e,o},{})}var yn=function(e,t){return e=typeof e=="function"?e(Object.assign({},t.rects,{placement:t.placement})):e,Xt(typeof e!="number"?e:Yt(e,_e))};function wn(e){var t,o=e.state,n=e.name,r=e.options,a=o.elements.arrow,i=o.modifiersData.popperOffsets,u=Z(o.placement),s=at(u),l=[H,K].indexOf(u)>=0,d=l?"height":"width";if(!(!a||!i)){var c=yn(r.padding,o),m=rt(a),g=s==="y"?N:H,b=s==="y"?z:K,v=o.rects.reference[d]+o.rects.reference[s]-i[s]-o.rects.popper[d],E=i[s]-o.rects.reference[s],p=Ie(a),O=p?s==="y"?p.clientHeight||0:p.clientWidth||0:0,C=v/2-E/2,y=c[g],T=O-m[d]-c[b],R=O/2-m[d]/2+C,w=Ce(y,R,T),A=s;o.modifiersData[n]=(t={},t[A]=w,t.centerOffset=w-R,t)}}function On(e){var t=e.state,o=e.options,n=o.element,r=n===void 0?"[data-popper-arrow]":n;r!=null&&(typeof r=="string"&&(r=t.elements.popper.querySelector(r),!r)||!Zt(t.elements.popper,r)||(t.elements.arrow=r))}var En={name:"arrow",enabled:!0,phase:"main",fn:wn,effect:On,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function he(e){return e.split("-")[1]}var Tn={top:"auto",right:"auto",bottom:"auto",left:"auto"};function Cn(e){var t=e.x,o=e.y,n=window,r=n.devicePixelRatio||1;return{x:ge(t*r)/r||0,y:ge(o*r)/r||0}}function At(e){var t,o=e.popper,n=e.popperRect,r=e.placement,a=e.variation,i=e.offsets,u=e.position,s=e.gpuAcceleration,l=e.adaptive,d=e.roundOffsets,c=e.isFixed,m=i.x,g=m===void 0?0:m,b=i.y,v=b===void 0?0:b,E=typeof d=="function"?d({x:g,y:v}):{x:g,y:v};g=E.x,v=E.y;var p=i.hasOwnProperty("x"),O=i.hasOwnProperty("y"),C=H,y=N,T=window;if(l){var R=Ie(o),w="clientHeight",A="clientWidth";if(R===V(o)&&(R=re(o),oe(R).position!=="static"&&u==="absolute"&&(w="scrollHeight",A="scrollWidth")),R=R,r===N||(r===H||r===K)&&a===xe){y=z;var I=c&&R===T&&T.visualViewport?T.visualViewport.height:R[w];v-=I-n.height,v*=s?1:-1}if(r===H||(r===N||r===z)&&a===xe){C=K;var x=c&&R===T&&T.visualViewport?T.visualViewport.width:R[A];g-=x-n.width,g*=s?1:-1}}var B=Object.assign({position:u},l&&Tn),$=d===!0?Cn({x:g,y:v}):{x:g,y:v};if(g=$.x,v=$.y,s){var M;return Object.assign({},B,(M={},M[y]=O?"0":"",M[C]=p?"0":"",M.transform=(T.devicePixelRatio||1)<=1?"translate("+g+"px, "+v+"px)":"translate3d("+g+"px, "+v+"px, 0)",M))}return Object.assign({},B,(t={},t[y]=O?v+"px":"",t[C]=p?g+"px":"",t.transform="",t))}function Rn(e){var t=e.state,o=e.options,n=o.gpuAcceleration,r=n===void 0?!0:n,a=o.adaptive,i=a===void 0?!0:a,u=o.roundOffsets,s=u===void 0?!0:u,l={placement:Z(t.placement),variation:he(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:r,isFixed:t.options.strategy==="fixed"};t.modifiersData.popperOffsets!=null&&(t.styles.popper=Object.assign({},t.styles.popper,At(Object.assign({},l,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:i,roundOffsets:s})))),t.modifiersData.arrow!=null&&(t.styles.arrow=Object.assign({},t.styles.arrow,At(Object.assign({},l,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:s})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})}var Qt={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:Rn,data:{}},Le={passive:!0};function An(e){var t=e.state,o=e.instance,n=e.options,r=n.scroll,a=r===void 0?!0:r,i=n.resize,u=i===void 0?!0:i,s=V(t.elements.popper),l=[].concat(t.scrollParents.reference,t.scrollParents.popper);return a&&l.forEach(function(d){d.addEventListener("scroll",o.update,Le)}),u&&s.addEventListener("resize",o.update,Le),function(){a&&l.forEach(function(d){d.removeEventListener("scroll",o.update,Le)}),u&&s.removeEventListener("resize",o.update,Le)}}var eo={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:An,data:{}},Pn={left:"right",right:"left",bottom:"top",top:"bottom"};function $e(e){return e.replace(/left|right|bottom|top/g,function(t){return Pn[t]})}var xn={start:"end",end:"start"};function Pt(e){return e.replace(/start|end/g,function(t){return xn[t]})}function it(e){var t=V(e),o=t.pageXOffset,n=t.pageYOffset;return{scrollLeft:o,scrollTop:n}}function st(e){return me(re(e)).left+it(e).scrollLeft}function Sn(e){var t=V(e),o=re(e),n=t.visualViewport,r=o.clientWidth,a=o.clientHeight,i=0,u=0;return n&&(r=n.width,a=n.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(i=n.offsetLeft,u=n.offsetTop)),{width:r,height:a,x:i+st(e),y:u}}function Mn(e){var t,o=re(e),n=it(e),r=(t=e.ownerDocument)==null?void 0:t.body,a=se(o.scrollWidth,o.clientWidth,r?r.scrollWidth:0,r?r.clientWidth:0),i=se(o.scrollHeight,o.clientHeight,r?r.scrollHeight:0,r?r.clientHeight:0),u=-n.scrollLeft+st(e),s=-n.scrollTop;return oe(r||o).direction==="rtl"&&(u+=se(o.clientWidth,r?r.clientWidth:0)-a),{width:a,height:i,x:u,y:s}}function lt(e){var t=oe(e),o=t.overflow,n=t.overflowX,r=t.overflowY;return/auto|scroll|overlay|hidden/.test(o+r+n)}function to(e){return["html","body","#document"].indexOf(J(e))>=0?e.ownerDocument.body:q(e)&&lt(e)?e:to(ze(e))}function Re(e,t){var o;t===void 0&&(t=[]);var n=to(e),r=n===((o=e.ownerDocument)==null?void 0:o.body),a=V(n),i=r?[a].concat(a.visualViewport||[],lt(n)?n:[]):n,u=t.concat(i);return r?u:u.concat(Re(ze(i)))}function Xe(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function Bn(e){var t=me(e);return t.top=t.top+e.clientTop,t.left=t.left+e.clientLeft,t.bottom=t.top+e.clientHeight,t.right=t.left+e.clientWidth,t.width=e.clientWidth,t.height=e.clientHeight,t.x=t.left,t.y=t.top,t}function xt(e,t){return t===Vt?Xe(Sn(e)):ve(t)?Bn(t):Xe(Mn(re(e)))}function _n(e){var t=Re(ze(e)),o=["absolute","fixed"].indexOf(oe(e).position)>=0,n=o&&q(e)?Ie(e):e;return ve(n)?t.filter(function(r){return ve(r)&&Zt(r,n)&&J(r)!=="body"}):[]}function In(e,t,o){var n=t==="clippingParents"?_n(e):[].concat(t),r=[].concat(n,[o]),a=r[0],i=r.reduce(function(u,s){var l=xt(e,s);return u.top=se(l.top,u.top),u.right=We(l.right,u.right),u.bottom=We(l.bottom,u.bottom),u.left=se(l.left,u.left),u},xt(e,a));return i.width=i.right-i.left,i.height=i.bottom-i.top,i.x=i.left,i.y=i.top,i}function oo(e){var t=e.reference,o=e.element,n=e.placement,r=n?Z(n):null,a=n?he(n):null,i=t.x+t.width/2-o.width/2,u=t.y+t.height/2-o.height/2,s;switch(r){case N:s={x:i,y:t.y-o.height};break;case z:s={x:i,y:t.y+t.height};break;case K:s={x:t.x+t.width,y:u};break;case H:s={x:t.x-o.width,y:u};break;default:s={x:t.x,y:t.y}}var l=r?at(r):null;if(l!=null){var d=l==="y"?"height":"width";switch(a){case de:s[l]=s[l]-(t[d]/2-o[d]/2);break;case xe:s[l]=s[l]+(t[d]/2-o[d]/2);break}}return s}function Se(e,t){t===void 0&&(t={});var o=t,n=o.placement,r=n===void 0?e.placement:n,a=o.boundary,i=a===void 0?tn:a,u=o.rootBoundary,s=u===void 0?Vt:u,l=o.elementContext,d=l===void 0?we:l,c=o.altBoundary,m=c===void 0?!1:c,g=o.padding,b=g===void 0?0:g,v=Xt(typeof b!="number"?b:Yt(b,_e)),E=d===we?on:we,p=e.rects.popper,O=e.elements[m?E:d],C=In(ve(O)?O:O.contextElement||re(e.elements.popper),i,s),y=me(e.elements.reference),T=oo({reference:y,element:p,placement:r}),R=Xe(Object.assign({},p,T)),w=d===we?R:y,A={top:C.top-w.top+v.top,bottom:w.bottom-C.bottom+v.bottom,left:C.left-w.left+v.left,right:w.right-C.right+v.right},I=e.modifiersData.offset;if(d===we&&I){var x=I[r];Object.keys(A).forEach(function(B){var $=[K,z].indexOf(B)>=0?1:-1,M=[N,z].indexOf(B)>=0?"y":"x";A[B]+=x[M]*$})}return A}function Fn(e,t){t===void 0&&(t={});var o=t,n=o.placement,r=o.boundary,a=o.rootBoundary,i=o.padding,u=o.flipVariations,s=o.allowedAutoPlacements,l=s===void 0?ot:s,d=he(n),c=d?u?Ct:Ct.filter(function(b){return he(b)===d}):_e,m=c.filter(function(b){return l.indexOf(b)>=0});m.length===0&&(m=c);var g=m.reduce(function(b,v){return b[v]=Se(e,{placement:v,boundary:r,rootBoundary:a,padding:i})[Z(v)],b},{});return Object.keys(g).sort(function(b,v){return g[b]-g[v]})}function kn(e){if(Z(e)===tt)return[];var t=$e(e);return[Pt(e),t,Pt(t)]}function jn(e){var t=e.state,o=e.options,n=e.name;if(!t.modifiersData[n]._skip){for(var r=o.mainAxis,a=r===void 0?!0:r,i=o.altAxis,u=i===void 0?!0:i,s=o.fallbackPlacements,l=o.padding,d=o.boundary,c=o.rootBoundary,m=o.altBoundary,g=o.flipVariations,b=g===void 0?!0:g,v=o.allowedAutoPlacements,E=t.options.placement,p=Z(E),O=p===E,C=s||(O||!b?[$e(E)]:kn(E)),y=[E].concat(C).reduce(function(ae,Y){return ae.concat(Z(Y)===tt?Fn(t,{placement:Y,boundary:d,rootBoundary:c,padding:l,flipVariations:b,allowedAutoPlacements:v}):Y)},[]),T=t.rects.reference,R=t.rects.popper,w=new Map,A=!0,I=y[0],x=0;x<y.length;x++){var B=y[x],$=Z(B),M=he(B)===de,G=[N,z].indexOf($)>=0,j=G?"width":"height",_=Se(t,{placement:B,boundary:d,rootBoundary:c,altBoundary:m,padding:l}),h=G?M?K:H:M?z:N;T[j]>R[j]&&(h=$e(h));var k=$e(h),W=[];if(a&&W.push(_[$]<=0),u&&W.push(_[h]<=0,_[k]<=0),W.every(function(ae){return ae})){I=B,A=!1;break}w.set(B,W)}if(A)for(var pe=b?3:1,Ke=function(ae){var Y=y.find(function(ke){var ye=w.get(ke);if(ye)return ye.slice(0,ae).every(function(fe){return fe})});if(Y)return I=Y,"break"},be=pe;be>0;be--){var Fe=Ke(be);if(Fe==="break")break}t.placement!==I&&(t.modifiersData[n]._skip=!0,t.placement=I,t.reset=!0)}}var Dn={name:"flip",enabled:!0,phase:"main",fn:jn,requiresIfExists:["offset"],data:{_skip:!1}};function St(e,t,o){return o===void 0&&(o={x:0,y:0}),{top:e.top-t.height-o.y,right:e.right-t.width+o.x,bottom:e.bottom-t.height+o.y,left:e.left-t.width-o.x}}function Mt(e){return[N,K,z,H].some(function(t){return e[t]>=0})}function Ln(e){var t=e.state,o=e.name,n=t.rects.reference,r=t.rects.popper,a=t.modifiersData.preventOverflow,i=Se(t,{elementContext:"reference"}),u=Se(t,{altBoundary:!0}),s=St(i,n),l=St(u,r,a),d=Mt(s),c=Mt(l);t.modifiersData[o]={referenceClippingOffsets:s,popperEscapeOffsets:l,isReferenceHidden:d,hasPopperEscaped:c},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":d,"data-popper-escaped":c})}var $n={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:Ln};function Nn(e,t,o){var n=Z(e),r=[H,N].indexOf(n)>=0?-1:1,a=typeof o=="function"?o(Object.assign({},t,{placement:e})):o,i=a[0],u=a[1];return i=i||0,u=(u||0)*r,[H,K].indexOf(n)>=0?{x:u,y:i}:{x:i,y:u}}function Hn(e){var t=e.state,o=e.options,n=e.name,r=o.offset,a=r===void 0?[0,0]:r,i=ot.reduce(function(d,c){return d[c]=Nn(c,t.rects,a),d},{}),u=i[t.placement],s=u.x,l=u.y;t.modifiersData.popperOffsets!=null&&(t.modifiersData.popperOffsets.x+=s,t.modifiersData.popperOffsets.y+=l),t.modifiersData[n]=i}var Wn={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:Hn};function qn(e){var t=e.state,o=e.name;t.modifiersData[o]=oo({reference:t.rects.reference,element:t.rects.popper,placement:t.placement})}var no={name:"popperOffsets",enabled:!0,phase:"read",fn:qn,data:{}};function zn(e){return e==="x"?"y":"x"}function Kn(e){var t=e.state,o=e.options,n=e.name,r=o.mainAxis,a=r===void 0?!0:r,i=o.altAxis,u=i===void 0?!1:i,s=o.boundary,l=o.rootBoundary,d=o.altBoundary,c=o.padding,m=o.tether,g=m===void 0?!0:m,b=o.tetherOffset,v=b===void 0?0:b,E=Se(t,{boundary:s,rootBoundary:l,padding:c,altBoundary:d}),p=Z(t.placement),O=he(t.placement),C=!O,y=at(p),T=zn(y),R=t.modifiersData.popperOffsets,w=t.rects.reference,A=t.rects.popper,I=typeof v=="function"?v(Object.assign({},t.rects,{placement:t.placement})):v,x=typeof I=="number"?{mainAxis:I,altAxis:I}:Object.assign({mainAxis:0,altAxis:0},I),B=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,$={x:0,y:0};if(R){if(a){var M,G=y==="y"?N:H,j=y==="y"?z:K,_=y==="y"?"height":"width",h=R[y],k=h+E[G],W=h-E[j],pe=g?-A[_]/2:0,Ke=O===de?w[_]:A[_],be=O===de?-A[_]:-w[_],Fe=t.elements.arrow,ae=g&&Fe?rt(Fe):{width:0,height:0},Y=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:Jt(),ke=Y[G],ye=Y[j],fe=Ce(0,w[_],ae[_]),lo=C?w[_]/2-pe-fe-ke-x.mainAxis:Ke-fe-ke-x.mainAxis,uo=C?-w[_]/2+pe+fe+ye+x.mainAxis:be+fe+ye+x.mainAxis,Ue=t.elements.arrow&&Ie(t.elements.arrow),po=Ue?y==="y"?Ue.clientTop||0:Ue.clientLeft||0:0,ft=(M=B==null?void 0:B[y])!=null?M:0,fo=h+lo-ft-po,co=h+uo-ft,ct=Ce(g?We(k,fo):k,h,g?se(W,co):W);R[y]=ct,$[y]=ct-h}if(u){var dt,vo=y==="x"?N:H,go=y==="x"?z:K,ie=R[T],je=T==="y"?"height":"width",vt=ie+E[vo],gt=ie-E[go],Ve=[N,H].indexOf(p)!==-1,mt=(dt=B==null?void 0:B[T])!=null?dt:0,ht=Ve?vt:ie-w[je]-A[je]-mt+x.altAxis,bt=Ve?ie+w[je]+A[je]-mt-x.altAxis:gt,yt=g&&Ve?bn(ht,ie,bt):Ce(g?ht:vt,ie,g?bt:gt);R[T]=yt,$[T]=yt-ie}t.modifiersData[n]=$}}var Un={name:"preventOverflow",enabled:!0,phase:"main",fn:Kn,requiresIfExists:["offset"]};function Vn(e){return{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}}function Gn(e){return e===V(e)||!q(e)?it(e):Vn(e)}function Zn(e){var t=e.getBoundingClientRect(),o=ge(t.width)/e.offsetWidth||1,n=ge(t.height)/e.offsetHeight||1;return o!==1||n!==1}function Jn(e,t,o){o===void 0&&(o=!1);var n=q(t),r=q(t)&&Zn(t),a=re(t),i=me(e,r),u={scrollLeft:0,scrollTop:0},s={x:0,y:0};return(n||!n&&!o)&&((J(t)!=="body"||lt(a))&&(u=Gn(t)),q(t)?(s=me(t,!0),s.x+=t.clientLeft,s.y+=t.clientTop):a&&(s.x=st(a))),{x:i.left+u.scrollLeft-s.x,y:i.top+u.scrollTop-s.y,width:i.width,height:i.height}}function Xn(e){var t=new Map,o=new Set,n=[];e.forEach(function(a){t.set(a.name,a)});function r(a){o.add(a.name);var i=[].concat(a.requires||[],a.requiresIfExists||[]);i.forEach(function(u){if(!o.has(u)){var s=t.get(u);s&&r(s)}}),n.push(a)}return e.forEach(function(a){o.has(a.name)||r(a)}),n}function Yn(e){var t=Xn(e);return dn.reduce(function(o,n){return o.concat(t.filter(function(r){return r.phase===n}))},[])}function Qn(e){var t;return function(){return t||(t=new Promise(function(o){Promise.resolve().then(function(){t=void 0,o(e())})})),t}}function er(e){var t=e.reduce(function(o,n){var r=o[n.name];return o[n.name]=r?Object.assign({},r,n,{options:Object.assign({},r.options,n.options),data:Object.assign({},r.data,n.data)}):n,o},{});return Object.keys(t).map(function(o){return t[o]})}var Bt={placement:"bottom",modifiers:[],strategy:"absolute"};function _t(){for(var e=arguments.length,t=new Array(e),o=0;o<e;o++)t[o]=arguments[o];return!t.some(function(n){return!(n&&typeof n.getBoundingClientRect=="function")})}function ut(e){e===void 0&&(e={});var t=e,o=t.defaultModifiers,n=o===void 0?[]:o,r=t.defaultOptions,a=r===void 0?Bt:r;return function(i,u,s){s===void 0&&(s=a);var l={placement:"bottom",orderedModifiers:[],options:Object.assign({},Bt,a),modifiersData:{},elements:{reference:i,popper:u},attributes:{},styles:{}},d=[],c=!1,m={state:l,setOptions:function(v){var E=typeof v=="function"?v(l.options):v;b(),l.options=Object.assign({},a,l.options,E),l.scrollParents={reference:ve(i)?Re(i):i.contextElement?Re(i.contextElement):[],popper:Re(u)};var p=Yn(er([].concat(n,l.options.modifiers)));return l.orderedModifiers=p.filter(function(O){return O.enabled}),g(),m.update()},forceUpdate:function(){if(!c){var v=l.elements,E=v.reference,p=v.popper;if(_t(E,p)){l.rects={reference:Jn(E,Ie(p),l.options.strategy==="fixed"),popper:rt(p)},l.reset=!1,l.placement=l.options.placement,l.orderedModifiers.forEach(function(A){return l.modifiersData[A.name]=Object.assign({},A.data)});for(var O=0;O<l.orderedModifiers.length;O++){if(l.reset===!0){l.reset=!1,O=-1;continue}var C=l.orderedModifiers[O],y=C.fn,T=C.options,R=T===void 0?{}:T,w=C.name;typeof y=="function"&&(l=y({state:l,options:R,name:w,instance:m})||l)}}}},update:Qn(function(){return new Promise(function(v){m.forceUpdate(),v(l)})}),destroy:function(){b(),c=!0}};if(!_t(i,u))return m;m.setOptions(s).then(function(v){!c&&s.onFirstUpdate&&s.onFirstUpdate(v)});function g(){l.orderedModifiers.forEach(function(v){var E=v.name,p=v.options,O=p===void 0?{}:p,C=v.effect;if(typeof C=="function"){var y=C({state:l,name:E,instance:m,options:O}),T=function(){};d.push(y||T)}})}function b(){d.forEach(function(v){return v()}),d=[]}return m}}ut();var tr=[eo,no,Qt,Gt];ut({defaultModifiers:tr});var or=[eo,no,Qt,Gt,Wn,Dn,Un,En,$n],nr=ut({defaultModifiers:or});const rr=["fixed","absolute"],ar=X({boundariesPadding:{type:Number,default:0},fallbackPlacements:{type:S(Array),default:void 0},gpuAcceleration:{type:Boolean,default:!0},offset:{type:Number,default:12},placement:{type:String,values:ot,default:"bottom"},popperOptions:{type:S(Object),default:()=>({})},strategy:{type:String,values:rr,default:"absolute"}}),ro=X({...ar,id:String,style:{type:S([String,Array,Object])},className:{type:S([String,Array,Object])},effect:{type:S(String),default:"dark"},visible:Boolean,enterable:{type:Boolean,default:!0},pure:Boolean,focusOnShow:{type:Boolean,default:!1},trapping:{type:Boolean,default:!1},popperClass:{type:S([String,Array,Object])},popperStyle:{type:S([String,Array,Object])},referenceEl:{type:S(Object)},triggerTargetEl:{type:S(Object)},stopPopperMouseEvent:{type:Boolean,default:!0},virtualTriggering:Boolean,zIndex:Number,...Nt(["ariaLabel"])}),ir={mouseenter:e=>e instanceof MouseEvent,mouseleave:e=>e instanceof MouseEvent,focus:()=>!0,blur:()=>!0,close:()=>!0},sr=(e,t)=>{const o=F(!1),n=F();return{focusStartRef:n,trapped:o,onFocusAfterReleased:l=>{var d;((d=l.detail)==null?void 0:d.focusReason)!=="pointer"&&(n.value="first",t("blur"))},onFocusAfterTrapped:()=>{t("focus")},onFocusInTrap:l=>{e.visible&&!o.value&&(l.target&&(n.value=l.target),o.value=!0)},onFocusoutPrevented:l=>{e.trapping||(l.detail.focusReason==="pointer"&&l.preventDefault(),o.value=!1)},onReleaseRequested:()=>{o.value=!1,t("close")}}},lr=(e,t=[])=>{const{placement:o,strategy:n,popperOptions:r}=e,a={placement:o,strategy:n,...r,modifiers:[...pr(e),...t]};return fr(a,r==null?void 0:r.modifiers),a},ur=e=>{if(Te)return jt(e)};function pr(e){const{offset:t,gpuAcceleration:o,fallbackPlacements:n}=e;return[{name:"offset",options:{offset:[0,t??12]}},{name:"preventOverflow",options:{padding:{top:2,bottom:2,left:5,right:5}}},{name:"flip",options:{padding:5,fallbackPlacements:n}},{name:"computeStyles",options:{gpuAcceleration:o}}]}function fr(e,t){t&&(e.modifiers=[...e.modifiers,...t??[]])}const cr=(e,t,o={})=>{const n={name:"updateState",enabled:!0,phase:"write",fn:({state:s})=>{const l=dr(s);Object.assign(i.value,l)},requires:["computeStyles"]},r=P(()=>{const{onFirstUpdate:s,placement:l,strategy:d,modifiers:c}=f(o);return{onFirstUpdate:s,placement:l||"bottom",strategy:d||"absolute",modifiers:[...c||[],n,{name:"applyStyles",enabled:!1}]}}),a=Eo(),i=F({styles:{popper:{position:f(r).strategy,left:"0",top:"0"},arrow:{position:"absolute"}},attributes:{}}),u=()=>{a.value&&(a.value.destroy(),a.value=void 0)};return D(r,s=>{const l=f(a);l&&l.setOptions(s)},{deep:!0}),D([e,t],([s,l])=>{u(),!(!s||!l)&&(a.value=nr(s,l,f(r)))}),Be(()=>{u()}),{state:P(()=>{var s;return{...((s=f(a))==null?void 0:s.state)||{}}}),styles:P(()=>f(i).styles),attributes:P(()=>f(i).attributes),update:()=>{var s;return(s=f(a))==null?void 0:s.update()},forceUpdate:()=>{var s;return(s=f(a))==null?void 0:s.forceUpdate()},instanceRef:P(()=>f(a))}};function dr(e){const t=Object.keys(e.elements),o=wt(t.map(r=>[r,e.styles[r]||{}])),n=wt(t.map(r=>[r,e.attributes[r]]));return{styles:o,attributes:n}}const vr=0,gr=e=>{const{popperInstanceRef:t,contentRef:o,triggerRef:n,role:r}=ue(et,void 0),a=F(),i=F(),u=P(()=>({name:"eventListeners",enabled:!!e.visible})),s=P(()=>{var p;const O=f(a),C=(p=f(i))!=null?p:vr;return{name:"arrow",enabled:!No(O),options:{element:O,padding:C}}}),l=P(()=>({onFirstUpdate:()=>{b()},...lr(e,[f(s),f(u)])})),d=P(()=>ur(e.referenceEl)||f(n)),{attributes:c,state:m,styles:g,update:b,forceUpdate:v,instanceRef:E}=cr(d,o,l);return D(E,p=>t.value=p),qe(()=>{D(()=>{var p;return(p=f(d))==null?void 0:p.getBoundingClientRect()},()=>{b()})}),{attributes:c,arrowRef:a,contentRef:o,instanceRef:E,state:m,styles:g,role:r,forceUpdate:v,update:b}},mr=(e,{attributes:t,styles:o,role:n})=>{const{nextZIndex:r}=To(),a=Me("popper"),i=P(()=>f(t).popper),u=F(Je(e.zIndex)?e.zIndex:r()),s=P(()=>[a.b(),a.is("pure",e.pure),a.is(e.effect),e.popperClass]),l=P(()=>[{zIndex:f(u)},f(o).popper,e.popperStyle||{}]),d=P(()=>n.value==="dialog"?"false":void 0),c=P(()=>f(o).arrow||{});return{ariaModal:d,arrowStyle:c,contentAttrs:i,contentClass:s,contentStyle:l,contentZIndex:u,updateZIndex:()=>{u.value=Je(e.zIndex)?e.zIndex:r()}}},hr=L({name:"ElPopperContent"}),br=L({...hr,props:ro,emits:ir,setup(e,{expose:t,emit:o}){const n=e,{focusStartRef:r,trapped:a,onFocusAfterReleased:i,onFocusAfterTrapped:u,onFocusInTrap:s,onFocusoutPrevented:l,onReleaseRequested:d}=sr(n,o),{attributes:c,arrowRef:m,contentRef:g,styles:b,instanceRef:v,role:E,update:p}=gr(n),{ariaModal:O,arrowStyle:C,contentAttrs:y,contentClass:T,contentStyle:R,updateZIndex:w}=mr(n,{styles:b,attributes:c,role:E}),A=ue(Et,void 0),I=F();Ae(Ht,{arrowStyle:C,arrowRef:m,arrowOffset:I}),A&&Ae(Et,{...A,addInputId:Ze,removeInputId:Ze});let x;const B=(M=!0)=>{p(),M&&w()},$=()=>{B(!1),n.visible&&n.focusOnShow?a.value=!0:n.visible===!1&&(a.value=!1)};return qe(()=>{D(()=>n.triggerTargetEl,(M,G)=>{x==null||x(),x=void 0;const j=f(M||g.value),_=f(G||g.value);Ee(j)&&(x=D([E,()=>n.ariaLabel,O,()=>n.id],h=>{["role","aria-label","aria-modal","id"].forEach((k,W)=>{Dt(h[W])?j.removeAttribute(k):j.setAttribute(k,h[W])})},{immediate:!0})),_!==j&&Ee(_)&&["role","aria-label","aria-modal","id"].forEach(h=>{_.removeAttribute(h)})},{immediate:!0}),D(()=>n.visible,$,{immediate:!0})}),Be(()=>{x==null||x(),x=void 0}),t({popperContentRef:g,popperInstanceRef:v,updatePopper:B,contentStyle:R}),(M,G)=>(U(),Ne("div",Ye({ref_key:"contentRef",ref:g},f(y),{style:f(R),class:f(T),tabindex:"-1",onMouseenter:j=>M.$emit("mouseenter",j),onMouseleave:j=>M.$emit("mouseleave",j)}),[Pe(f(jo),{trapped:f(a),"trap-on-focus-in":!0,"focus-trap-el":f(g),"focus-start-el":f(r),onFocusAfterTrapped:f(u),onFocusAfterReleased:f(i),onFocusin:f(s),onFocusoutPrevented:f(l),onReleaseRequested:f(d)},{default:ee(()=>[te(M.$slots,"default")]),_:3},8,["trapped","focus-trap-el","focus-start-el","onFocusAfterTrapped","onFocusAfterReleased","onFocusin","onFocusoutPrevented","onReleaseRequested"])],16,["onMouseenter","onMouseleave"]))}});var yr=ne(br,[["__file","content.vue"]]);const wr=Qe(zo),pt=Symbol("elTooltip");function It(){let e;const t=(n,r)=>{o(),e=window.setTimeout(n,r)},o=()=>window.clearTimeout(e);return Co(()=>o()),{registerTimeout:t,cancelTimeout:o}}const Or=X({showAfter:{type:Number,default:0},hideAfter:{type:Number,default:200},autoClose:{type:Number,default:0}}),Er=({showAfter:e,hideAfter:t,autoClose:o,open:n,close:r})=>{const{registerTimeout:a}=It(),{registerTimeout:i,cancelTimeout:u}=It();return{onOpen:d=>{a(()=>{n(d);const c=f(o);Je(c)&&c>0&&i(()=>{r(d)},c)},f(e))},onClose:d=>{u(),a(()=>{r(d)},f(t))}}},ao=X({...Or,...ro,appendTo:{type:S([String,Object])},content:{type:String,default:""},rawContent:Boolean,persistent:Boolean,visible:{type:S(Boolean),default:null},transition:String,teleported:{type:Boolean,default:!0},disabled:Boolean,...Nt(["ariaLabel"])}),io=X({...zt,disabled:Boolean,trigger:{type:S([String,Array]),default:"hover"},triggerKeys:{type:S(Array),default:()=>[Ge.enter,Ge.numpadEnter,Ge.space]}}),Tr=Lt({type:S(Boolean),default:null}),Cr=Lt({type:S(Function)}),Rr=e=>{const t=`update:${e}`,o=`onUpdate:${e}`,n=[t],r={[e]:Tr,[o]:Cr};return{useModelToggle:({indicator:i,toggleReason:u,shouldHideWhenRouteChanges:s,shouldProceed:l,onShow:d,onHide:c})=>{const m=Ro(),{emit:g}=m,b=m.props,v=P(()=>De(b[o])),E=P(()=>b[e]===null),p=w=>{i.value!==!0&&(i.value=!0,u&&(u.value=w),De(d)&&d(w))},O=w=>{i.value!==!1&&(i.value=!1,u&&(u.value=w),De(c)&&c(w))},C=w=>{if(b.disabled===!0||De(l)&&!l())return;const A=v.value&&Te;A&&g(t,!0),(E.value||!A)&&p(w)},y=w=>{if(b.disabled===!0||!Te)return;const A=v.value&&Te;A&&g(t,!1),(E.value||!A)&&O(w)},T=w=>{$t(w)&&(b.disabled&&w?v.value&&g(t,!1):i.value!==w&&(w?p():O()))},R=()=>{i.value?y():C()};return D(()=>b[e],T),s&&m.appContext.config.globalProperties.$route!==void 0&&D(()=>({...m.proxy.$route}),()=>{s.value&&i.value&&y()}),qe(()=>{T(b[e])}),{hide:y,show:C,toggle:R,hasUpdateHandler:v}},useModelToggleProps:r,useModelToggleEmits:n}},{useModelToggleProps:Ar,useModelToggleEmits:Pr,useModelToggle:xr}=Rr("visible"),Sr=X({...Wt,...Ar,...ao,...io,...qt,showArrow:{type:Boolean,default:!0}}),Mr=[...Pr,"before-show","before-hide","show","hide","open","close"],Br=(e,t)=>Ao(e)?e.includes(t):e===t,ce=(e,t,o)=>n=>{Br(f(e),t)&&o(n)},Q=(e,t,{checkForDefaultPrevented:o=!0}={})=>r=>{const a=e==null?void 0:e(r);if(o===!1||!a)return t==null?void 0:t(r)},_r=L({name:"ElTooltipTrigger"}),Ir=L({..._r,props:io,setup(e,{expose:t}){const o=e,n=Me("tooltip"),{controlled:r,id:a,open:i,onOpen:u,onClose:s,onToggle:l}=ue(pt,void 0),d=F(null),c=()=>{if(f(r)||o.disabled)return!0},m=Oe(o,"trigger"),g=Q(c,ce(m,"hover",u)),b=Q(c,ce(m,"hover",s)),v=Q(c,ce(m,"click",y=>{y.button===0&&l(y)})),E=Q(c,ce(m,"focus",u)),p=Q(c,ce(m,"focus",s)),O=Q(c,ce(m,"contextmenu",y=>{y.preventDefault(),l(y)})),C=Q(c,y=>{const{code:T}=y;o.triggerKeys.includes(T)&&(y.preventDefault(),l(y))});return t({triggerRef:d}),(y,T)=>(U(),le(f(en),{id:f(a),"virtual-ref":y.virtualRef,open:f(i),"virtual-triggering":y.virtualTriggering,class:Ft(f(n).e("trigger")),onBlur:f(p),onClick:f(v),onContextmenu:f(O),onFocus:f(E),onMouseenter:f(g),onMouseleave:f(b),onKeydown:f(C)},{default:ee(()=>[te(y.$slots,"default")]),_:3},8,["id","virtual-ref","open","virtual-triggering","class","onBlur","onClick","onContextmenu","onFocus","onMouseenter","onMouseleave","onKeydown"]))}});var Fr=ne(Ir,[["__file","trigger.vue"]]);const kr=X({to:{type:S([String,Object]),required:!0},disabled:Boolean}),jr=L({__name:"teleport",props:kr,setup(e){return(t,o)=>t.disabled?te(t.$slots,"default",{key:0}):(U(),le(Po,{key:1,to:t.to},[te(t.$slots,"default")],8,["to"]))}});var Dr=ne(jr,[["__file","teleport.vue"]]);const Lr=Qe(Dr),so=()=>{const e=So(),t=Lo(),o=P(()=>`${e.value}-popper-container-${t.prefix}`),n=P(()=>`#${o.value}`);return{id:o,selector:n}},$r=e=>{const t=document.createElement("div");return t.id=e,document.body.appendChild(t),t},Nr=()=>{const{id:e,selector:t}=so();return xo(()=>{Te&&(document.body.querySelector(t.value)||$r(e.value))}),{id:e,selector:t}},Hr=L({name:"ElTooltipContent",inheritAttrs:!1}),Wr=L({...Hr,props:ao,setup(e,{expose:t}){const o=e,{selector:n}=so(),r=Me("tooltip"),a=F();let i;const{controlled:u,id:s,open:l,trigger:d,onClose:c,onOpen:m,onShow:g,onHide:b,onBeforeShow:v,onBeforeHide:E}=ue(pt,void 0),p=P(()=>o.transition||`${r.namespace.value}-fade-in-linear`),O=P(()=>o.persistent);Be(()=>{i==null||i()});const C=P(()=>f(O)?!0:f(l)),y=P(()=>o.disabled?!1:f(l)),T=P(()=>o.appendTo||n.value),R=P(()=>{var h;return(h=o.style)!=null?h:{}}),w=F(!0),A=()=>{b(),_()&&Do(document.body),w.value=!0},I=()=>{if(f(u))return!0},x=Q(I,()=>{o.enterable&&f(d)==="hover"&&m()}),B=Q(I,()=>{f(d)==="hover"&&c()}),$=()=>{var h,k;(k=(h=a.value)==null?void 0:h.updatePopper)==null||k.call(h),v==null||v()},M=()=>{E==null||E()},G=()=>{g(),i=_o(P(()=>{var h;return(h=a.value)==null?void 0:h.popperContentRef}),()=>{if(f(u))return;f(d)!=="hover"&&c()})},j=()=>{o.virtualTriggering||c()},_=h=>{var k;const W=(k=a.value)==null?void 0:k.popperContentRef,pe=(h==null?void 0:h.relatedTarget)||document.activeElement;return W==null?void 0:W.contains(pe)};return D(()=>f(l),h=>{h?w.value=!1:i==null||i()},{flush:"post"}),D(()=>o.content,()=>{var h,k;(k=(h=a.value)==null?void 0:h.updatePopper)==null||k.call(h)}),t({contentRef:a,isFocusInsideContent:_}),(h,k)=>(U(),le(f(Lr),{disabled:!h.teleported,to:f(T)},{default:ee(()=>[Pe(Mo,{name:f(p),onAfterLeave:A,onBeforeEnter:$,onAfterEnter:G,onBeforeLeave:M},{default:ee(()=>[f(C)?kt((U(),le(f(yr),Ye({key:0,id:f(s),ref_key:"contentRef",ref:a},h.$attrs,{"aria-label":h.ariaLabel,"aria-hidden":w.value,"boundaries-padding":h.boundariesPadding,"fallback-placements":h.fallbackPlacements,"gpu-acceleration":h.gpuAcceleration,offset:h.offset,placement:h.placement,"popper-options":h.popperOptions,strategy:h.strategy,effect:h.effect,enterable:h.enterable,pure:h.pure,"popper-class":h.popperClass,"popper-style":[h.popperStyle,f(R)],"reference-el":h.referenceEl,"trigger-target-el":h.triggerTargetEl,visible:f(y),"z-index":h.zIndex,onMouseenter:f(x),onMouseleave:f(B),onBlur:j,onClose:f(c)}),{default:ee(()=>[te(h.$slots,"default")]),_:3},16,["id","aria-label","aria-hidden","boundaries-padding","fallback-placements","gpu-acceleration","offset","placement","popper-options","strategy","effect","enterable","pure","popper-class","popper-style","reference-el","trigger-target-el","visible","z-index","onMouseenter","onMouseleave","onClose"])),[[Bo,f(y)]]):He("v-if",!0)]),_:3},8,["name"])]),_:3},8,["disabled","to"]))}});var qr=ne(Wr,[["__file","content.vue"]]);const zr=L({name:"ElTooltip"}),Kr=L({...zr,props:Sr,emits:Mr,setup(e,{expose:t,emit:o}){const n=e;Nr();const r=$o(),a=F(),i=F(),u=()=>{var p;const O=f(a);O&&((p=O.popperInstanceRef)==null||p.update())},s=F(!1),l=F(),{show:d,hide:c,hasUpdateHandler:m}=xr({indicator:s,toggleReason:l}),{onOpen:g,onClose:b}=Er({showAfter:Oe(n,"showAfter"),hideAfter:Oe(n,"hideAfter"),autoClose:Oe(n,"autoClose"),open:d,close:c}),v=P(()=>$t(n.visible)&&!m.value);Ae(pt,{controlled:v,id:r,open:Io(s),trigger:Oe(n,"trigger"),onOpen:p=>{g(p)},onClose:p=>{b(p)},onToggle:p=>{f(s)?b(p):g(p)},onShow:()=>{o("show",l.value)},onHide:()=>{o("hide",l.value)},onBeforeShow:()=>{o("before-show",l.value)},onBeforeHide:()=>{o("before-hide",l.value)},updatePopper:u}),D(()=>n.disabled,p=>{p&&s.value&&(s.value=!1)});const E=p=>{var O;return(O=i.value)==null?void 0:O.isFocusInsideContent(p)};return Fo(()=>s.value&&c()),t({popperRef:a,contentRef:i,isFocusInsideContent:E,updatePopper:u,onOpen:g,onClose:b,hide:c}),(p,O)=>(U(),le(f(wr),{ref_key:"popperRef",ref:a,role:p.role},{default:ee(()=>[Pe(Fr,{disabled:p.disabled,trigger:p.trigger,"trigger-keys":p.triggerKeys,"virtual-ref":p.virtualRef,"virtual-triggering":p.virtualTriggering},{default:ee(()=>[p.$slots.default?te(p.$slots,"default",{key:0}):He("v-if",!0)]),_:3},8,["disabled","trigger","trigger-keys","virtual-ref","virtual-triggering"]),Pe(qr,{ref_key:"contentRef",ref:i,"aria-label":p.ariaLabel,"boundaries-padding":p.boundariesPadding,content:p.content,disabled:p.disabled,effect:p.effect,enterable:p.enterable,"fallback-placements":p.fallbackPlacements,"hide-after":p.hideAfter,"gpu-acceleration":p.gpuAcceleration,offset:p.offset,persistent:p.persistent,"popper-class":p.popperClass,"popper-style":p.popperStyle,placement:p.placement,"popper-options":p.popperOptions,pure:p.pure,"raw-content":p.rawContent,"reference-el":p.referenceEl,"trigger-target-el":p.triggerTargetEl,"show-after":p.showAfter,strategy:p.strategy,teleported:p.teleported,transition:p.transition,"virtual-triggering":p.virtualTriggering,"z-index":p.zIndex,"append-to":p.appendTo},{default:ee(()=>[te(p.$slots,"content",{},()=>[p.rawContent?(U(),Ne("span",{key:0,innerHTML:p.content},null,8,["innerHTML"])):(U(),Ne("span",{key:1},ko(p.content),1))]),p.showArrow?(U(),le(f(Vo),{key:0,"arrow-offset":p.arrowOffset},null,8,["arrow-offset"])):He("v-if",!0)]),_:3},8,["aria-label","boundaries-padding","content","disabled","effect","enterable","fallback-placements","hide-after","gpu-acceleration","offset","persistent","popper-class","popper-style","placement","popper-options","pure","raw-content","reference-el","trigger-target-el","show-after","strategy","teleported","transition","virtual-triggering","z-index","append-to"])]),_:3},8,["role"]))}});var Ur=ne(Kr,[["__file","tooltip.vue"]]);const Xr=Qe(Ur);export{Xr as E,ot as a,Lr as b,No as i,ao as u};
