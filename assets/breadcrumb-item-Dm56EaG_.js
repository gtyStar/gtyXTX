import{D as _,ab as C,R as c,T as E,S as y,m as v,l as P,c as u,o,B as k,b as e,z as n,Q as B,N as S,ac as $,a0 as w,P as x,a as N,i as f,w as D,ad as T,V as j,t as z,a4 as A,a5 as K}from"./index-Bf80aKor.js";const I=Symbol("breadcrumbKey"),V=_({separator:{type:String,default:"/"},separatorIcon:{type:C}}),q=c({name:"ElBreadcrumb"}),L=c({...q,props:V,setup(l){const s=l,{t:p}=E(),t=y("breadcrumb"),r=v();return S(I,s),P(()=>{const a=r.value.querySelectorAll(`.${t.e("item")}`);a.length&&a[a.length-1].setAttribute("aria-current","page")}),(a,i)=>(o(),u("div",{ref_key:"breadcrumb",ref:r,class:n(e(t).b()),"aria-label":e(p)("el.breadcrumb.label"),role:"navigation"},[k(a.$slots,"default")],10,["aria-label"]))}});var M=B(L,[["__file","breadcrumb.vue"]]);const O=_({to:{type:$([String,Object]),default:""},replace:Boolean}),Q=c({name:"ElBreadcrumbItem"}),R=c({...Q,props:O,setup(l){const s=l,p=x(),t=w(I,void 0),r=y("breadcrumb"),a=p.appContext.config.globalProperties.$router,i=v(),h=()=>{!s.to||!a||(s.replace?a.replace(s.to):a.push(s.to))};return(b,F)=>{var m,d;return o(),u("span",{class:n(e(r).e("item"))},[N("span",{ref_key:"link",ref:i,class:n([e(r).e("inner"),e(r).is("link",!!b.to)]),role:"link",onClick:h},[k(b.$slots,"default")],2),(m=e(t))!=null&&m.separatorIcon?(o(),f(e(j),{key:0,class:n(e(r).e("separator"))},{default:D(()=>[(o(),f(T(e(t).separatorIcon)))]),_:1},8,["class"])):(o(),u("span",{key:1,class:n(e(r).e("separator")),role:"presentation"},z((d=e(t))==null?void 0:d.separator),3))],2)}}});var g=B(R,[["__file","breadcrumb-item.vue"]]);const H=A(M,{BreadcrumbItem:g}),J=K(g);export{H as E,J as a};
