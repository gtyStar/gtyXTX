import{A as w,n as j,p as h,l as C,m as k,_ as I,c as r,a,e as g,w as n,F as p,k as u,b as _,r as L,o,d as U,t as b,i as v}from"./index-nC4VKZvF.js";import{E as F,a as M}from"./carousel-item-CgYrIRNM.js";import{E as z,a as A}from"./breadcrumb-item-CPsbV7_Z.js";import{G as H}from"./GoodsItem-4UmDbjda.js";import"./loading-DXwnN0rn.js";import{E as N}from"./index-BLV3yM35.js";import"./index-xFaaBSpv.js";import"./vnode-C0cVZW1e.js";import"./event-BB_Ol6Sd.js";import"./throttle-_lFnbEbW.js";import"./debounce-DoyUYYjm.js";const O=l=>w({url:"/category",params:{id:l}}),R=()=>{const l=k(),i=j({}),t=async s=>{const d=N.service({lock:!0,text:"正在加载中😍😍😍",background:"rgba(0, 0, 0, 0.1)"}),c=await O(s);i.value=c==null?void 0:c.result,d.close()};return h(()=>l.params.id,s=>{t(s)}),C(()=>{t(l.params.id)}),{categoryData:i}},Z="/gty/assets/1005000a-BMCHWbKM.png",G="/gty/assets/1005000b-D9YdXD9g.jpg",W="/gty/assets/1005000c-BOJmD0wU.jpg",X="/gty/assets/1005002a-CsfWxpKE.jpg",$="/gty/assets/1005002b-CuLFp6-E.png",q="/gty/assets/1005002c-DfoZA8v5.jpg",K="/gty/assets/1010000a-BBH3nuew.png",T="/gty/assets/1010000b-CEv99fcQ.png",V="/gty/assets/1010000c-C2ihZw1N.jpg",Y="/gty/assets/1011000a-RXpD4gOs.jpg",P="/gty/assets/1011000b-B6q-3fFR.jpg",Q="/gty/assets/1011000c-DZkdXahM.png",S="/gty/assets/1013001a-F_GlI8F0.jpg",J="/gty/assets/1013001b-fCv7brzk.png",ss="/gty/assets/1013001c-CCMoe4A2.jpg",ts="/gty/assets/1019000a-BMO-DAK7.jpg",es="/gty/assets/1019000b-CLZWm5s2.png",as="/gty/assets/1019000c-CBXykdjq.jpg",os="/gty/assets/1043000a-CI3jl-On.png",rs="/gty/assets/1043000b-BwlDmUEr.jpg",is="/gty/assets/1043000c-ByH8_EsY.jpg",ns="/gty/assets/109243029a-CYDED3G-.jpg",ls="/gty/assets/109243029b-o0Z_y-tk.png",cs="/gty/assets/109243029c-BSmNlTzi.png",gs="/gty/assets/19999999a-CsWp0L2p.jpg",ds="/gty/assets/19999999b-DqvafmH7.jpg",ms="/gty/assets/19999999c-rQlHsDp0.jpg",ps={class:"top-category"},us={class:"container m-top-20"},ys={class:"bread-container"},_s={class:"home-banner"},bs=["src","onClick"],fs={class:"sub-list"},Us=["src"],vs={class:"head"},js={class:"body"},hs=Object.assign({name:"CategoryPage"},{__name:"index",setup(l){const{categoryData:i}=R(),t=k(),s=j([]),d=async()=>{t.params.id==="1005000"?s.value=[{imgUrl:Z,id:"1108008"},{imgUrl:G,id:"3995913"},{imgUrl:W,id:"1318002"}]:t.params.id==="1005002"?s.value=[{imgUrl:X,id:"3419049"},{imgUrl:$,id:"1691024"},{imgUrl:q,id:"3995885"}]:t.params.id==="1010000"?s.value=[{imgUrl:K,id:"3827017"},{imgUrl:T,id:"1555000"},{imgUrl:V,id:"4019044"}]:t.params.id==="1011000"?s.value=[{imgUrl:Y,id:"3992495"},{imgUrl:P,id:"4005108"},{imgUrl:Q,id:"4000277"}]:t.params.id==="1013001"?s.value=[{imgUrl:S,id:"1006058"},{imgUrl:J,id:"1487013"},{imgUrl:ss,id:"1124015"}]:t.params.id==="1019000"?s.value=[{imgUrl:ts,id:"1683030"},{imgUrl:es,id:"3986195"},{imgUrl:as,id:"4017718"}]:t.params.id==="1043000"?s.value=[{imgUrl:os,id:"3487028"},{imgUrl:rs,id:"3806013"},{imgUrl:is,id:"3990582"}]:t.params.id==="109243029"?s.value=[{imgUrl:ns,id:"4023100"},{imgUrl:ls,id:"3994144"},{imgUrl:cs,id:"4014017"}]:t.params.id==="19999999"&&(s.value=[{imgUrl:gs,id:"1085007"},{imgUrl:ds,id:"1525018"},{imgUrl:ms,id:"1589017"}]),console.log(s.value)};return C(()=>{d()}),h(()=>t.params.id,()=>{d()}),(c,m)=>{const f=A,B=z,D=M,x=F,E=L("RouterLink");return o(),r("div",ps,[a("div",us,[a("div",ys,[g(B,{separator:">"},{default:n(()=>[g(f,{to:{path:"/"}},{default:n(()=>m[0]||(m[0]=[U("首页")])),_:1}),g(f,null,{default:n(()=>[U(b(_(i).name),1)]),_:1})]),_:1})]),a("div",_s,[g(x,{height:"500px"},{default:n(()=>[(o(!0),r(p,null,u(s.value,e=>(o(),v(D,{key:e.id},{default:n(()=>[a("img",{src:e.imgUrl,alt:"",onClick:y=>c.$router.push(`/detail/${e.id}`)},null,8,bs)]),_:2},1024))),128))]),_:1})]),a("div",fs,[m[1]||(m[1]=a("h3",null,"全部分类",-1)),a("ul",null,[(o(!0),r(p,null,u(_(i).children,e=>(o(),r("li",{key:e.id},[g(E,{to:`/category/sub/${e.id}`},{default:n(()=>[a("img",{src:e.picture},null,8,Us),a("p",null,b(e.name),1)]),_:2},1032,["to"])]))),128))])]),(o(!0),r(p,null,u(_(i).children,e=>(o(),r("div",{class:"ref-goods",key:e.id},[a("div",vs,[a("h3",null,"- "+b(e.name)+"-",1)]),a("div",js,[(o(!0),r(p,null,u(e.goods,y=>(o(),v(H,{goods:y,key:y.id},null,8,["goods"]))),128))])]))),128))])])}}}),zs=I(hs,[["__scopeId","data-v-de76a457"]]);export{zs as default};
