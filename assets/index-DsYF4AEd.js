import{u as I}from"./category-Mfh2g77J.js";import{_ as h,c as o,a as t,F as p,j as g,u as P,r as L,f as y,o as s,d as c,w as i,b as v,t as a,h as $,i as k,l as H,k as x,y as z}from"./index-TkdKxnmQ.js";import{h as b}from"./user-C7_jzyv1.js";import{E as B,a as R}from"./carousel-item-_it69Zu-.js";import"./loading-BDyvJbYM.js";import{E as C}from"./index-CSpk6Ybm.js";import{G as N}from"./GoodsItem-Cl7ru-Ns.js";import"./index-BBojqn_g.js";import"./vnode-Cdv6Nnja.js";import"./event-BB_Ol6Sd.js";import"./throttle-DgFG5gsS.js";import"./debounce-BrDSSJ1-.js";const E={class:"home-category"},S={class:"menu"},A={class:"layer"},D={alt:""},T={class:"info"},V={class:"name ellipsis-2"},j={class:"desc ellipsis"},F={class:"price"},G={__name:"HomeCategory",setup(_){const n=I();return(u,l)=>{const d=L("RouterLink"),m=y("img-lazy");return s(),o("div",E,[t("ul",S,[(s(!0),o(p,null,g(P(n).categoryList,r=>(s(),o("li",{key:r.id},[c(d,{to:"/"},{default:i(()=>[v(a(r.name),1)]),_:2},1024),(s(!0),o(p,null,g(r.children.splice(0,2),e=>(s(),$(d,{key:e,to:"/"},{default:i(()=>[v(a(e.name),1)]),_:2},1024))),128)),t("div",A,[l[1]||(l[1]=t("h4",null,[v("分类推荐 "),t("small",null,"根据您的购买或浏览记录推荐")],-1)),t("ul",null,[(s(!0),o(p,null,g(r.goods,e=>(s(),o("li",{key:e.id},[c(d,{to:`/detail/${e.id}`},{default:i(()=>[k(t("img",D,null,512),[[m,e.picture]]),t("div",T,[t("p",V,a(e.name),1),t("p",j,a(e.desc),1),t("p",F,[l[0]||(l[0]=t("i",null,"¥",-1)),v(a(e.price),1)])])]),_:2},1032,["to"])]))),128))])])]))),128))])])}}},M=h(G,[["__scopeId","data-v-3792e7a8"]]);function O(_){return b({url:"/home/banner",params:{distributionSite:_}})}function U(){return b({url:"/home/new"})}const q=()=>b({url:"/home/hot"}),J=()=>b({url:"/home/goods"}),K={class:"home-banner"},Q={alt:""},W={__name:"HomeBanner",setup(_){const n=H([]),u=async()=>{const l=C.service({lock:!0,text:"正在加载中😍😍😍",background:"rgba(0, 0, 0, 0.1)"}),d=await O("1");n.value=d.result,l.close()};return x(()=>{u()}),(l,d)=>{const m=R,r=B,e=y("img-lazy");return s(),o("div",K,[c(r,{height:"500px"},{default:i(()=>[(s(!0),o(p,null,g(n.value,f=>(s(),$(m,{key:f.id},{default:i(()=>[k(t("img",Q,null,512),[[e,f.imgUrl]])]),_:2},1024))),128))]),_:1})])}}},X=h(W,[["__scopeId","data-v-0e142748"]]),Y={class:"home-panel"},Z={class:"container"},tt={class:"head"},et={__name:"HomePanel",props:{title:{type:String},subTitle:{type:String}},setup(_){return(n,u)=>(s(),o("div",Y,[t("div",Z,[t("div",tt,[t("h3",null,[v(a(_.title),1),t("small",null,a(_.subTitle),1)])]),t("div",null,[z(n.$slots,"default",{},void 0,!0)])])]))}},w=h(et,[["__scopeId","data-v-269d706a"]]),st={class:"goods-list"},ot={alt:""},nt={class:"name"},lt={class:"price"},at={__name:"HomeNew",setup(_){const n=H([]),u=async()=>{const l=await U();n.value=l.result};return x(()=>{u()}),(l,d)=>{const m=L("RouterLink"),r=y("img-lazy");return s(),$(w,{title:"新鲜好物","sub-title":"新鲜出炉 品质靠谱"},{default:i(()=>[t("ul",st,[(s(!0),o(p,null,g(n.value,e=>(s(),o("li",{key:e.id},[c(m,{to:`/detail/${e.id}`},{default:i(()=>[k(t("img",ot,null,512),[[r,e.picture]]),t("p",nt,a(e.name),1),t("p",lt,"¥"+a(e.price),1)]),_:2},1032,["to"])]))),128))])]),_:1})}}},rt=h(at,[["__scopeId","data-v-e455d516"]]),ct={class:"goods-list"},it={alt:""},_t={class:"name"},ut={class:"desc"},dt={__name:"HomeHot",setup(_){const n=H([]);return(async()=>{const l=await q();n.value=l.result})(),(l,d)=>{const m=L("RouterLink"),r=y("img-lazy");return s(),$(w,{title:"人气推荐","sub-title":"人气爆款 不容错过"},{default:i(()=>[t("ul",ct,[(s(!0),o(p,null,g(n.value,e=>(s(),o("li",{key:e.id},[c(m,{to:"/"},{default:i(()=>[k(t("img",it,null,512),[[r,e.picture]]),t("p",_t,a(e.title),1),t("p",ut,a(e.alt),1)]),_:2},1024)]))),128))])]),_:1})}}},mt=h(dt,[["__scopeId","data-v-f6b6014f"]]),pt={class:"home-product"},gt={class:"box"},ht={class:"label"},ft={class:"goods-list"},vt={__name:"HomeProduct",setup(_){const n=H([]),u=async()=>{const l=await J();n.value=l.result,console.log(n.value)};return x(()=>{u()}),(l,d)=>{const m=L("RouterLink"),r=y("img-lazy");return s(),o("div",pt,[(s(!0),o(p,null,g(n.value,e=>(s(),$(w,{title:e.name,key:e.id},{default:i(()=>[t("div",gt,[c(m,{class:"cover",to:`/category/${e.id}`},{default:i(()=>[k(t("img",null,null,512),[[r,e.picture]]),t("strong",ht,[t("span",null,a(e.name)+"馆",1),t("span",null,a(e.saleInfo),1)])]),_:2},1032,["to"]),t("ul",ft,[(s(!0),o(p,null,g(e.goods,f=>(s(),o("li",{key:f.id},[c(N,{goods:f},null,8,["goods"])]))),128))])])]),_:2},1032,["title"]))),128))])}}},yt=h(vt,[["__scopeId","data-v-6bfa139f"]]),$t={class:"container"},Nt=Object.assign({name:"HomePage"},{__name:"index",setup(_){return(n,u)=>(s(),o(p,null,[t("div",$t,[c(M),c(X)]),c(rt),c(mt),c(yt)],64))}});export{Nt as default};
