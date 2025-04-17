import{D as U,be as le,ac as Y,Q as re,R as F,a0 as Z,S as K,m as T,p as M,L as J,M as ge,c as ie,o as ce,$ as _e,z as ue,b as O,P as ee,a6 as te,bk as Ne,bl as Te,I as V,l as de,aj as Pe,e as c,V as I,W as Ce,Z as $e,aD as z,aP as we,J as Ee,G as Se,B as Q,an as xe,a3 as se,N as Be,H as ke,bm as ne,a1 as Oe,a2 as Re,j as ze,h as Ae,X as Le,a4 as Me,a5 as Fe}from"./index-BTOKHnDP.js";import{t as ae}from"./error-Cq9Fpw4b.js";import{c as A}from"./strings-tsXAOeep.js";import{U as be}from"./event-BB_Ol6Sd.js";import{u as Ve}from"./index-icLwJeCg.js";const W=Symbol("tabsRootContextKey"),De=U({tabs:{type:Y(Array),default:()=>le([])}}),ve="ElTabBar",Ie=F({name:ve}),Ue=F({...Ie,props:De,setup(e,{expose:l}){const g=e,_=ee(),a=Z(W);a||ae(ve,"<el-tabs><el-tab-bar /></el-tabs>");const b=K("tabs"),w=T(),v=T(),p=()=>{let n=0,m=0;const d=["top","bottom"].includes(a.props.tabPosition)?"width":"height",k=d==="width"?"x":"y",s=k==="x"?"left":"top";return g.tabs.every(E=>{var P,x;const y=(x=(P=_.parent)==null?void 0:P.refs)==null?void 0:x[`tab-${E.uid}`];if(!y)return!1;if(!E.active)return!0;n=y[`offset${A(s)}`],m=y[`client${A(d)}`];const S=window.getComputedStyle(y);return d==="width"&&(m-=Number.parseFloat(S.paddingLeft)+Number.parseFloat(S.paddingRight),n+=Number.parseFloat(S.paddingLeft)),!1}),{[d]:`${m}px`,transform:`translate${A(k)}(${n}px)`}},N=()=>v.value=p(),h=[],r=()=>{var n;h.forEach(d=>d.stop()),h.length=0;const m=(n=_.parent)==null?void 0:n.refs;if(m){for(const d in m)if(d.startsWith("tab-")){const k=m[d];k&&h.push(J(k,N))}}};M(()=>g.tabs,async()=>{await te(),N(),r()},{immediate:!0});const u=J(w,()=>N());return ge(()=>{h.forEach(n=>n.stop()),h.length=0,u.stop()}),l({ref:w,update:N}),(n,m)=>(ce(),ie("div",{ref_key:"barRef",ref:w,class:ue([O(b).e("active-bar"),O(b).is(O(a).props.tabPosition)]),style:_e(v.value)},null,6))}});var Ke=re(Ue,[["__file","tab-bar.vue"]]);const We=U({panes:{type:Y(Array),default:()=>le([])},currentName:{type:[String,Number],default:""},editable:Boolean,type:{type:String,values:["card","border-card",""],default:""},stretch:Boolean}),je={tabClick:(e,l,g)=>g instanceof Event,tabRemove:(e,l)=>l instanceof Event},oe="ElTabNav",He=F({name:oe,props:We,emits:je,setup(e,{expose:l,emit:g}){const _=Z(W);_||ae(oe,"<el-tabs><tab-nav /></el-tabs>");const a=K("tabs"),b=Ne(),w=Te(),v=T(),p=T(),N=T(),h=T(),r=T(!1),u=T(0),n=T(!1),m=T(!0),d=V(()=>["top","bottom"].includes(_.props.tabPosition)?"width":"height"),k=V(()=>({transform:`translate${d.value==="width"?"X":"Y"}(-${u.value}px)`})),s=()=>{if(!v.value)return;const o=v.value[`offset${A(d.value)}`],i=u.value;if(!i)return;const t=i>o?i-o:0;u.value=t},E=()=>{if(!v.value||!p.value)return;const o=p.value[`offset${A(d.value)}`],i=v.value[`offset${A(d.value)}`],t=u.value;if(o-t<=i)return;const C=o-t>i*2?t+i:o-i;u.value=C},P=async()=>{const o=p.value;if(!r.value||!N.value||!v.value||!o)return;await te();const i=N.value.querySelector(".is-active");if(!i)return;const t=v.value,C=["top","bottom"].includes(_.props.tabPosition),f=i.getBoundingClientRect(),$=t.getBoundingClientRect(),D=C?o.offsetWidth-$.width:o.offsetHeight-$.height,R=u.value;let B=R;C?(f.left<$.left&&(B=R-($.left-f.left)),f.right>$.right&&(B=R+f.right-$.right)):(f.top<$.top&&(B=R-($.top-f.top)),f.bottom>$.bottom&&(B=R+(f.bottom-$.bottom))),B=Math.max(B,0),u.value=Math.min(B,D)},x=()=>{var o;if(!p.value||!v.value)return;e.stretch&&((o=h.value)==null||o.update());const i=p.value[`offset${A(d.value)}`],t=v.value[`offset${A(d.value)}`],C=u.value;t<i?(r.value=r.value||{},r.value.prev=C,r.value.next=C+t<i,i-C<t&&(u.value=i-t)):(r.value=!1,C>0&&(u.value=0))},y=o=>{let i=0;switch(o.code){case z.left:case z.up:i=-1;break;case z.right:case z.down:i=1;break;default:return}const t=Array.from(o.currentTarget.querySelectorAll("[role=tab]:not(.is-disabled)"));let f=t.indexOf(o.target)+i;f<0?f=t.length-1:f>=t.length&&(f=0),t[f].focus({preventScroll:!0}),t[f].click(),S()},S=()=>{m.value&&(n.value=!0)},j=()=>n.value=!1;return M(b,o=>{o==="hidden"?m.value=!1:o==="visible"&&setTimeout(()=>m.value=!0,50)}),M(w,o=>{o?setTimeout(()=>m.value=!0,50):m.value=!1}),J(N,x),de(()=>setTimeout(()=>P(),0)),Pe(()=>x()),l({scrollToActiveTab:P,removeFocus:j}),()=>{const o=r.value?[c("span",{class:[a.e("nav-prev"),a.is("disabled",!r.value.prev)],onClick:s},[c(I,null,{default:()=>[c(Ce,null,null)]})]),c("span",{class:[a.e("nav-next"),a.is("disabled",!r.value.next)],onClick:E},[c(I,null,{default:()=>[c($e,null,null)]})])]:null,i=e.panes.map((t,C)=>{var f,$,D,R;const B=t.uid,H=t.props.disabled,q=($=(f=t.props.name)!=null?f:t.index)!=null?$:`${C}`,X=!H&&(t.isClosable||e.editable);t.index=`${C}`;const me=X?c(I,{class:"is-icon-close",onClick:L=>g("tabRemove",t,L)},{default:()=>[c(we,null,null)]}):null,he=((R=(D=t.slots).label)==null?void 0:R.call(D))||t.props.label,ye=!H&&t.active?0:-1;return c("div",{ref:`tab-${B}`,class:[a.e("item"),a.is(_.props.tabPosition),a.is("active",t.active),a.is("disabled",H),a.is("closable",X),a.is("focus",n.value)],id:`tab-${q}`,key:`tab-${B}`,"aria-controls":`pane-${q}`,role:"tab","aria-selected":t.active,tabindex:ye,onFocus:()=>S(),onBlur:()=>j(),onClick:L=>{j(),g("tabClick",t,q,L)},onKeydown:L=>{X&&(L.code===z.delete||L.code===z.backspace)&&g("tabRemove",t,L)}},[he,me])});return c("div",{ref:N,class:[a.e("nav-wrap"),a.is("scrollable",!!r.value),a.is(_.props.tabPosition)]},[o,c("div",{class:a.e("nav-scroll"),ref:v},[c("div",{class:[a.e("nav"),a.is(_.props.tabPosition),a.is("stretch",e.stretch&&["top","bottom"].includes(_.props.tabPosition))],ref:p,style:k.value,role:"tablist",onKeydown:y},[e.type?null:c(Ke,{ref:h,tabs:[...e.panes]},null),i])])])}}}),qe=U({type:{type:String,values:["card","border-card",""],default:""},closable:Boolean,addable:Boolean,modelValue:{type:[String,Number]},editable:Boolean,tabPosition:{type:String,values:["top","right","bottom","left"],default:"top"},beforeLeave:{type:Y(Function),default:()=>!0},stretch:Boolean}),G=e=>Ee(e)||Se(e),Xe={[be]:e=>G(e),tabClick:(e,l)=>l instanceof Event,tabChange:e=>G(e),edit:(e,l)=>["remove","add"].includes(l),tabRemove:e=>G(e),tabAdd:()=>!0},Ge=F({name:"ElTabs",props:qe,emits:Xe,setup(e,{emit:l,slots:g,expose:_}){var a;const b=K("tabs"),w=V(()=>["left","right"].includes(e.tabPosition)),{children:v,addChild:p,removeChild:N}=Ve(ee(),"ElTabPane"),h=T(),r=T((a=e.modelValue)!=null?a:"0"),u=async(s,E=!1)=>{var P,x;if(!(r.value===s||se(s)))try{let y;if(e.beforeLeave){const S=e.beforeLeave(s,r.value);y=S instanceof Promise?await S:S}else y=!0;y!==!1&&(r.value=s,E&&(l(be,s),l("tabChange",s)),(x=(P=h.value)==null?void 0:P.removeFocus)==null||x.call(P))}catch{}},n=(s,E,P)=>{s.props.disabled||(u(E,!0),l("tabClick",s,P))},m=(s,E)=>{s.props.disabled||se(s.props.name)||(E.stopPropagation(),l("edit",s.props.name,"remove"),l("tabRemove",s.props.name))},d=()=>{l("edit",void 0,"add"),l("tabAdd")};M(()=>e.modelValue,s=>u(s)),M(r,async()=>{var s;await te(),(s=h.value)==null||s.scrollToActiveTab()}),Be(W,{props:e,currentName:r,registerPane:s=>{v.value.push(s)},sortPane:p,unregisterPane:N}),_({currentName:r});const k=({render:s})=>s();return()=>{const s=g["add-icon"],E=e.editable||e.addable?c("div",{class:[b.e("new-tab"),w.value&&b.e("new-tab-vertical")],tabindex:"0",onClick:d,onKeydown:y=>{[z.enter,z.numpadEnter].includes(y.code)&&d()}},[s?Q(g,"add-icon"):c(I,{class:b.is("icon-plus")},{default:()=>[c(xe,null,null)]})]):null,P=c("div",{class:[b.e("header"),w.value&&b.e("header-vertical"),b.is(e.tabPosition)]},[c(k,{render:()=>{const y=v.value.some(S=>S.slots.label);return c(He,{ref:h,currentName:r.value,editable:e.editable,type:e.type,panes:v.value,stretch:e.stretch,onTabClick:n,onTabRemove:m},{$stable:!y})}},null),E]),x=c("div",{class:b.e("content")},[Q(g,"default")]);return c("div",{class:[b.b(),b.m(e.tabPosition),{[b.m("card")]:e.type==="card",[b.m("border-card")]:e.type==="border-card"}]},[x,P])}}});var Je=Ge;const Qe=U({label:{type:String,default:""},name:{type:[String,Number]},closable:Boolean,disabled:Boolean,lazy:Boolean}),fe="ElTabPane",Ye=F({name:fe}),Ze=F({...Ye,props:Qe,setup(e){const l=e,g=ee(),_=ke(),a=Z(W);a||ae(fe,"usage: <el-tabs><el-tab-pane /></el-tabs/>");const b=K("tab-pane"),w=T(),v=V(()=>l.closable||a.props.closable),p=ne(()=>{var n;return a.currentName.value===((n=l.name)!=null?n:w.value)}),N=T(p.value),h=V(()=>{var n;return(n=l.name)!=null?n:w.value}),r=ne(()=>!l.lazy||N.value||p.value);M(p,n=>{n&&(N.value=!0)});const u=Oe({uid:g.uid,slots:_,props:l,paneName:h,active:p,index:w,isClosable:v});return a.registerPane(u),de(()=>{a.sortPane(u)}),Re(()=>{a.unregisterPane(u.uid)}),(n,m)=>O(r)?ze((ce(),ie("div",{key:0,id:`pane-${O(h)}`,class:ue(O(b).b()),role:"tabpanel","aria-hidden":!O(p),"aria-labelledby":`tab-${O(h)}`},[Q(n.$slots,"default")],10,["id","aria-hidden","aria-labelledby"])),[[Le,O(p)]]):Ae("v-if",!0)}});var pe=re(Ze,[["__file","tab-pane.vue"]]);const ot=Me(Je,{TabPane:pe}),lt=Fe(pe);export{ot as E,lt as a};
