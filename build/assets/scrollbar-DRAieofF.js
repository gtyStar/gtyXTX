import{b as $,_ as D,c as I,ag as V,D as se,i as N,n as ie,o as X,a as ce,w as oe,U as ue,P as q,e as G,Y as fe}from"./user-DZyB_w3l.js";import{G as R,L as le,p as b,y as B,B as ve,ag as J,g as M,o as z,w as O,h as de,a as P,n as y,u as f,K as x,J as me,T as ne,c as U,d as A,F as pe,v as Q,C as he,M as be,ah as ge,j as ye,O as Z,V as Se,H as j,q as F,S as we,ac as ze,I as ee,a1 as _e}from"./index-BxZGvdQn.js";import{t as Ee}from"./error-Cq9Fpw4b.js";import{u as ke}from"./input-CfzbfaP6.js";import{a as Te}from"./button-B_gPa1JS.js";const L=4,Ce={vertical:{offset:"offsetHeight",scroll:"scrollTop",scrollSize:"scrollHeight",size:"height",key:"vertical",axis:"Y",client:"clientY",direction:"top"},horizontal:{offset:"offsetWidth",scroll:"scrollLeft",scrollSize:"scrollWidth",size:"width",key:"horizontal",axis:"X",client:"clientX",direction:"left"}},He=({move:t,size:a,bar:l})=>({[l.size]:a,transform:`translate${l.axis}(${t}%)`}),Y=Symbol("scrollbarContextKey"),Be=$({vertical:Boolean,size:String,move:Number,ratio:{type:Number,required:!0},always:Boolean}),Le="Thumb",Me=R({__name:"thumb",props:Be,setup(t){const a=t,l=le(Y),n=I("scrollbar");l||Ee(Le,"can not inject scrollbar context");const s=b(),u=b(),v=b({}),m=b(!1);let h=!1,i=!1,r=se?document.onselectstart:null;const o=B(()=>Ce[a.vertical?"vertical":"horizontal"]),c=B(()=>He({size:a.size,move:a.move,bar:o.value})),p=B(()=>s.value[o.value.offset]**2/l.wrapElement[o.value.scrollSize]/a.ratio/u.value[o.value.offset]),g=d=>{var k;if(d.stopPropagation(),d.ctrlKey||[1,2].includes(d.button))return;(k=window.getSelection())==null||k.removeAllRanges(),_(d);const H=d.currentTarget;H&&(v.value[o.value.axis]=H[o.value.offset]-(d[o.value.client]-H.getBoundingClientRect()[o.value.direction]))},C=d=>{if(!u.value||!s.value||!l.wrapElement)return;const k=Math.abs(d.target.getBoundingClientRect()[o.value.direction]-d[o.value.client]),H=u.value[o.value.offset]/2,K=(k-H)*100*p.value/s.value[o.value.offset];l.wrapElement[o.value.scroll]=K*l.wrapElement[o.value.scrollSize]/100},_=d=>{d.stopImmediatePropagation(),h=!0,document.addEventListener("mousemove",w),document.addEventListener("mouseup",S),r=document.onselectstart,document.onselectstart=()=>!1},w=d=>{if(!s.value||!u.value||h===!1)return;const k=v.value[o.value.axis];if(!k)return;const H=(s.value.getBoundingClientRect()[o.value.direction]-d[o.value.client])*-1,K=u.value[o.value.offset]-k,re=(H-K)*100*p.value/s.value[o.value.offset];l.wrapElement[o.value.scroll]=re*l.wrapElement[o.value.scrollSize]/100},S=()=>{h=!1,v.value[o.value.axis]=0,document.removeEventListener("mousemove",w),document.removeEventListener("mouseup",S),e(),i&&(m.value=!1)},W=()=>{i=!1,m.value=!!a.size},E=()=>{i=!0,m.value=h};ve(()=>{e(),document.removeEventListener("mouseup",S)});const e=()=>{document.onselectstart!==r&&(document.onselectstart=r)};return V(J(l,"scrollbarElement"),"mousemove",W),V(J(l,"scrollbarElement"),"mouseleave",E),(d,k)=>(z(),M(ne,{name:f(n).b("fade"),persisted:""},{default:O(()=>[de(P("div",{ref_key:"instance",ref:s,class:y([f(n).e("bar"),f(n).is(f(o).key)]),onMousedown:C},[P("div",{ref_key:"thumb",ref:u,class:y(f(n).e("thumb")),style:x(f(c)),onMousedown:g},null,38)],34),[[me,d.always||m.value]])]),_:1},8,["name"]))}});var te=D(Me,[["__file","thumb.vue"]]);const Pe=$({always:{type:Boolean,default:!0},minSize:{type:Number,required:!0}}),Re=R({__name:"bar",props:Pe,setup(t,{expose:a}){const l=t,n=le(Y),s=b(0),u=b(0),v=b(""),m=b(""),h=b(1),i=b(1);return a({handleScroll:c=>{if(c){const p=c.offsetHeight-L,g=c.offsetWidth-L;u.value=c.scrollTop*100/p*h.value,s.value=c.scrollLeft*100/g*i.value}},update:()=>{const c=n==null?void 0:n.wrapElement;if(!c)return;const p=c.offsetHeight-L,g=c.offsetWidth-L,C=p**2/c.scrollHeight,_=g**2/c.scrollWidth,w=Math.max(C,l.minSize),S=Math.max(_,l.minSize);h.value=C/(p-C)/(w/(p-w)),i.value=_/(g-_)/(S/(g-S)),m.value=w+L<p?`${w}px`:"",v.value=S+L<g?`${S}px`:""}}),(c,p)=>(z(),U(pe,null,[A(te,{move:s.value,ratio:i.value,size:v.value,always:c.always},null,8,["move","ratio","size","always"]),A(te,{move:u.value,ratio:h.value,size:m.value,vertical:"",always:c.always},null,8,["move","ratio","size","always"])],64))}});var Ne=D(Re,[["__file","bar.vue"]]);const Oe=$({height:{type:[String,Number],default:""},maxHeight:{type:[String,Number],default:""},native:{type:Boolean,default:!1},wrapStyle:{type:ie([String,Object,Array]),default:""},wrapClass:{type:[String,Array],default:""},viewClass:{type:[String,Array],default:""},viewStyle:{type:[String,Array,Object],default:""},noresize:Boolean,tag:{type:String,default:"div"},always:Boolean,minSize:{type:Number,default:20},tabindex:{type:[String,Number],default:void 0},id:String,role:String,...ke(["ariaLabel","ariaOrientation"])}),xe={scroll:({scrollTop:t,scrollLeft:a})=>[t,a].every(N)},Ae="ElScrollbar",$e=R({name:Ae}),De=R({...$e,props:Oe,emits:xe,setup(t,{expose:a,emit:l}){const n=t,s=I("scrollbar");let u,v,m=0,h=0;const i=b(),r=b(),o=b(),c=b(),p=B(()=>{const e={};return n.height&&(e.height=X(n.height)),n.maxHeight&&(e.maxHeight=X(n.maxHeight)),[n.wrapStyle,e]}),g=B(()=>[n.wrapClass,s.e("wrap"),{[s.em("wrap","hidden-default")]:!n.native}]),C=B(()=>[s.e("view"),n.viewClass]),_=()=>{var e;r.value&&((e=c.value)==null||e.handleScroll(r.value),m=r.value.scrollTop,h=r.value.scrollLeft,l("scroll",{scrollTop:r.value.scrollTop,scrollLeft:r.value.scrollLeft}))};function w(e,d){ze(e)?r.value.scrollTo(e):N(e)&&N(d)&&r.value.scrollTo(e,d)}const S=e=>{N(e)&&(r.value.scrollTop=e)},W=e=>{N(e)&&(r.value.scrollLeft=e)},E=()=>{var e;(e=c.value)==null||e.update()};return Q(()=>n.noresize,e=>{e?(u==null||u(),v==null||v()):({stop:u}=ce(o,E),v=V("resize",E))},{immediate:!0}),Q(()=>[n.maxHeight,n.height],()=>{n.native||Z(()=>{var e;E(),r.value&&((e=c.value)==null||e.handleScroll(r.value))})}),he(Y,be({scrollbarElement:i,wrapElement:r})),ge(()=>{r.value&&(r.value.scrollTop=m,r.value.scrollLeft=h)}),ye(()=>{n.native||Z(()=>{E()})}),Se(()=>E()),a({wrapRef:r,update:E,scrollTo:w,setScrollTop:S,setScrollLeft:W,handleScroll:_}),(e,d)=>(z(),U("div",{ref_key:"scrollbarRef",ref:i,class:y(f(s).b())},[P("div",{ref_key:"wrapRef",ref:r,class:y(f(g)),style:x(f(p)),tabindex:e.tabindex,onScroll:_},[(z(),M(we(e.tag),{id:e.id,ref_key:"resizeRef",ref:o,class:y(f(C)),style:x(e.viewStyle),role:e.role,"aria-label":e.ariaLabel,"aria-orientation":e.ariaOrientation},{default:O(()=>[F(e.$slots,"default")]),_:3},8,["id","class","style","role","aria-label","aria-orientation"]))],46,["tabindex"]),e.native?j("v-if",!0):(z(),M(Ne,{key:0,ref_key:"barRef",ref:c,always:e.always,"min-size":e.minSize},null,8,["always","min-size"]))],2))}});var We=D(De,[["__file","scrollbar.vue"]]);const Je=oe(We),Ke=$({type:{type:String,values:["primary","success","info","warning","danger"],default:"primary"},closable:Boolean,disableTransitions:Boolean,hit:Boolean,color:String,size:{type:String,values:ue},effect:{type:String,values:["dark","light","plain"],default:"light"},round:Boolean}),Ve={close:t=>t instanceof MouseEvent,click:t=>t instanceof MouseEvent},je=R({name:"ElTag"}),Fe=R({...je,props:Ke,emits:Ve,setup(t,{emit:a}){const l=t,n=Te(),s=I("tag"),u=B(()=>{const{type:i,hit:r,effect:o,closable:c,round:p}=l;return[s.b(),s.is("closable",c),s.m(i||"primary"),s.m(n.value),s.m(o),s.is("hit",r),s.is("round",p)]}),v=i=>{a("close",i)},m=i=>{a("click",i)},h=i=>{var r,o,c;(c=(o=(r=i==null?void 0:i.component)==null?void 0:r.subTree)==null?void 0:o.component)!=null&&c.bum&&(i.component.subTree.component.bum=null)};return(i,r)=>i.disableTransitions?(z(),U("span",{key:0,class:y(f(u)),style:x({backgroundColor:i.color}),onClick:m},[P("span",{class:y(f(s).e("content"))},[F(i.$slots,"default")],2),i.closable?(z(),M(f(G),{key:0,class:y(f(s).e("close")),onClick:ee(v,["stop"])},{default:O(()=>[A(f(q))]),_:1},8,["class","onClick"])):j("v-if",!0)],6)):(z(),M(ne,{key:1,name:`${f(s).namespace.value}-zoom-in-center`,appear:"",onVnodeMounted:h},{default:O(()=>[P("span",{class:y(f(u)),style:x({backgroundColor:i.color}),onClick:m},[P("span",{class:y(f(s).e("content"))},[F(i.$slots,"default")],2),i.closable?(z(),M(f(G),{key:0,class:y(f(s).e("close")),onClick:ee(v,["stop"])},{default:O(()=>[A(f(q))]),_:1},8,["class","onClick"])):j("v-if",!0)],6)]),_:3},8,["name"]))}});var Ie=D(Fe,[["__file","tag.vue"]]);const Qe=oe(Ie),T=new Map;if(se){let t;document.addEventListener("mousedown",a=>t=a),document.addEventListener("mouseup",a=>{if(t){for(const l of T.values())for(const{documentHandler:n}of l)n(a,t);t=void 0}})}function ae(t,a){let l=[];return _e(a.arg)?l=a.arg:fe(a.arg)&&l.push(a.arg),function(n,s){const u=a.instance.popperRef,v=n.target,m=s==null?void 0:s.target,h=!a||!a.instance,i=!v||!m,r=t.contains(v)||t.contains(m),o=t===v,c=l.length&&l.some(g=>g==null?void 0:g.contains(v))||l.length&&l.includes(m),p=u&&(u.contains(v)||u.contains(m));h||i||r||o||c||p||a.value(n,s)}}const Ze={beforeMount(t,a){T.has(t)||T.set(t,[]),T.get(t).push({documentHandler:ae(t,a),bindingFn:a.value})},updated(t,a){T.has(t)||T.set(t,[]);const l=T.get(t),n=l.findIndex(u=>u.bindingFn===a.oldValue),s={documentHandler:ae(t,a),bindingFn:a.value};n>=0?l.splice(n,1,s):l.push(s)},unmounted(t){T.delete(t)}};export{Ze as C,Je as E,Qe as a,Ke as t};
