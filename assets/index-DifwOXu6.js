import{u as I}from"./category-YlBmeod8.js";import{_ as h,c as o,a as t,F as m,i as g,u as w,r as y,f as $,o as s,d as r,w as i,b as f,t as l,g as v,h as k,p as L,j as H,q as P}from"./index-eunbmvm0.js";import"./user-BSRElb6q.js";import{E as z,g as B,a as R,b as C,c as N,d as E}from"./home-Cq4jXJas.js";import"./loading-C7puVnwF.js";import{E as S}from"./index-0FoHjfiT.js";import{G as A}from"./GoodsItem-BUMygZtl.js";import"./index-DhVzDghT.js";import"./vnode-41wdfZAv.js";import"./event-BB_Ol6Sd.js";import"./throttle-Dnh6PjiN.js";import"./debounce-BzK-j8AY.js";const D={class:"home-category"},T={class:"menu"},V={class:"layer"},j={alt:""},F={class:"info"},G={class:"name ellipsis-2"},q={class:"desc ellipsis"},M={class:"price"},O={__name:"HomeCategory",setup(p){const n=I();return(_,a)=>{const u=y("RouterLink"),d=$("img-lazy");return s(),o("div",D,[t("ul",T,[(s(!0),o(m,null,g(w(n).categoryList,c=>(s(),o("li",{key:c.id},[r(u,{to:"/"},{default:i(()=>[f(l(c.name),1)]),_:2},1024),(s(!0),o(m,null,g(c.children.splice(0,2),e=>(s(),v(u,{key:e,to:"/"},{default:i(()=>[f(l(e.name),1)]),_:2},1024))),128)),t("div",V,[a[1]||(a[1]=t("h4",null,[f("分类推荐 "),t("small",null,"根据您的购买或浏览记录推荐")],-1)),t("ul",null,[(s(!0),o(m,null,g(c.goods,e=>(s(),o("li",{key:e.id},[r(u,{to:`/detail/${e.id}`},{default:i(()=>[k(t("img",j,null,512),[[d,e.picture]]),t("div",F,[t("p",G,l(e.name),1),t("p",q,l(e.desc),1),t("p",M,[a[0]||(a[0]=t("i",null,"¥",-1)),f(l(e.price),1)])])]),_:2},1032,["to"])]))),128))])])]))),128))])])}}},U=h(O,[["__scopeId","data-v-3792e7a8"]]),J={class:"home-banner"},K=["src"],Q={__name:"HomeBanner",setup(p){const n=L([]),_=async()=>{const a=S.service({lock:!0,text:"正在加载中😍😍😍",background:"rgba(0, 0, 0, 0.1)"}),u=await B("1");n.value=u.result,a.close()};return H(()=>{_()}),(a,u)=>{const d=R,c=z;return s(),o("div",J,[r(c,{height:"500px"},{default:i(()=>[(s(!0),o(m,null,g(n.value,e=>(s(),v(d,{key:e.id},{default:i(()=>[t("img",{src:e.imgUrl,alt:""},null,8,K)]),_:2},1024))),128))]),_:1})])}}},W=h(Q,[["__scopeId","data-v-99efda68"]]),X={class:"home-panel"},Y={class:"container"},Z={class:"head"},tt={__name:"HomePanel",props:{title:{type:String},subTitle:{type:String}},setup(p){return(n,_)=>(s(),o("div",X,[t("div",Y,[t("div",Z,[t("h3",null,[f(l(p.title),1),t("small",null,l(p.subTitle),1)])]),t("div",null,[P(n.$slots,"default",{},void 0,!0)])])]))}},b=h(tt,[["__scopeId","data-v-269d706a"]]),et={class:"goods-list"},st={alt:""},ot={class:"name"},nt={class:"price"},at={__name:"HomeNew",setup(p){const n=L([]),_=async()=>{const a=await C();n.value=a.result};return H(()=>{_()}),(a,u)=>{const d=y("RouterLink"),c=$("img-lazy");return s(),v(b,{title:"新鲜好物","sub-title":"新鲜出炉 品质靠谱"},{default:i(()=>[t("ul",et,[(s(!0),o(m,null,g(n.value,e=>(s(),o("li",{key:e.id},[r(d,{to:`/detail/${e.id}`},{default:i(()=>[k(t("img",st,null,512),[[c,e.picture]]),t("p",ot,l(e.name),1),t("p",nt,"¥"+l(e.price),1)]),_:2},1032,["to"])]))),128))])]),_:1})}}},lt=h(at,[["__scopeId","data-v-e455d516"]]),ct={class:"goods-list"},rt={alt:""},it={class:"name"},_t={class:"desc"},ut={__name:"HomeHot",setup(p){const n=L([]);return(async()=>{const a=await N();n.value=a.result})(),(a,u)=>{const d=y("RouterLink"),c=$("img-lazy");return s(),v(b,{title:"人气推荐","sub-title":"人气爆款 不容错过"},{default:i(()=>[t("ul",ct,[(s(!0),o(m,null,g(n.value,e=>(s(),o("li",{key:e.id},[r(d,{to:"/"},{default:i(()=>[k(t("img",rt,null,512),[[c,e.picture]]),t("p",it,l(e.title),1),t("p",_t,l(e.alt),1)]),_:2},1024)]))),128))])]),_:1})}}},dt=h(ut,[["__scopeId","data-v-f6b6014f"]]),mt={class:"home-product"},pt={class:"box"},gt={class:"label"},ht={class:"goods-list"},ft={__name:"HomeProduct",setup(p){const n=L([]),_=async()=>{const a=await E();n.value=a.result,console.log(n.value)};return H(()=>{_()}),(a,u)=>{const d=y("RouterLink"),c=$("img-lazy");return s(),o("div",mt,[(s(!0),o(m,null,g(n.value,e=>(s(),v(b,{title:e.name,key:e.id},{default:i(()=>[t("div",pt,[r(d,{class:"cover",to:`/category/${e.id}`},{default:i(()=>[k(t("img",null,null,512),[[c,e.picture]]),t("strong",gt,[t("span",null,l(e.name)+"馆",1),t("span",null,l(e.saleInfo),1)])]),_:2},1032,["to"]),t("ul",ht,[(s(!0),o(m,null,g(e.goods,x=>(s(),o("li",{key:x.id},[r(A,{goods:x},null,8,["goods"])]))),128))])])]),_:2},1032,["title"]))),128))])}}},vt=h(ft,[["__scopeId","data-v-6bfa139f"]]),yt={class:"container"},Ct=Object.assign({name:"HomePage"},{__name:"index",setup(p){return(n,_)=>(s(),o(m,null,[t("div",yt,[r(U),r(W)]),r(lt),r(dt),r(vt)],64))}});export{Ct as default};
