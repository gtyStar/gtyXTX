import{u as x,E as L}from"./user-DZyB_w3l.js";import{E as S}from"./popover-0FMWcpGh.js";import"./popper-DfuW1AYj.js";import{E}from"./button-B_gPa1JS.js";import{_ as g,c as n,a as t,u as i,F as _,b as u,t as p,d as c,w as v,e as R,o as e,r as h,f as I,g as P,h as j,i as k,j as y,k as q,l as F,n as N,m as V}from"./index-BxZGvdQn.js";import{v as B}from"./loading-C8GOY5Wu.js";import{E as z}from"./empty-DNlCfmhM.js";import{u as C}from"./cartStore-D_enPuS0.js";import{u as $}from"./category-Dj2Qy-fh.js";import{E as H}from"./index-CQuPrEIb.js";import"./input-CfzbfaP6.js";import"./event-BB_Ol6Sd.js";import"./error-Cq9Fpw4b.js";import"./focus-trap-Xyz6oMWj.js";import"./vnode-qc9MqEKF.js";import"./scroll-BPc0NeU9.js";const D={class:"app-topnav"},T={class:"container"},A={__name:"LayoutNav",setup(m){const o=x(),l=R(),r=()=>{o.clearUserInfo(),l.push("/login")};return(s,a)=>{const d=S;return e(),n("nav",D,[t("div",T,[t("ul",null,[i(o).userInfo.token?(e(),n(_,{key:0},[t("li",null,[t("a",{href:"javascript:;",onClick:a[0]||(a[0]=b=>s.$router.push("/"))},[a[4]||(a[4]=t("i",{class:"iconfont icon-user"},null,-1)),u(p(i(o).userInfo.nickname),1)])]),t("li",null,[c(d,{onConfirm:r,title:"确认退出吗?","confirm-button-text":"确认","cancel-button-text":"取消"},{reference:v(()=>a[5]||(a[5]=[t("a",{href:"javascript:;"},"退出登录",-1)])),_:1})]),t("li",null,[t("a",{href:"javascript:;",onClick:a[1]||(a[1]=b=>s.$router.push("/member/order"))},"我的订单")]),t("li",null,[t("a",{href:"javascript:;",onClick:a[2]||(a[2]=b=>s.$router.push("/member"))},"会员中心")])],64)):(e(),n(_,{key:1},[t("li",null,[t("a",{href:"javascript:;",onClick:a[3]||(a[3]=b=>s.$router.push("/login"))},"请先登录")]),a[6]||(a[6]=t("li",null,[t("a",{href:"javascript:;"},"帮助中心")],-1)),a[7]||(a[7]=t("li",null,[t("a",{href:"javascript:;"},"关于我们")],-1))],64))])])])}}},M=g(A,[["__scopeId","data-v-ca6713ac"]]),U={class:"cart"},X={class:"curr",href:"javascript:;"},K={class:"layer"},O={key:0},Z={class:"list"},G={alt:""},J={class:"center"},Q={class:"name ellipsis-2"},W={class:"attr ellipsis"},Y={class:"right"},tt={class:"price"},at={class:"count"},ot=["onClick"],st={class:"foot"},et={class:"total"},nt={__name:"HeaderCart",setup(m){const o=C();return(l,r)=>{const s=h("RouterLink"),a=E,d=z,b=I("img-lazy"),w=B;return e(),n("div",U,[t("a",X,[r[1]||(r[1]=t("i",{class:"iconfont icon-cart"},null,-1)),t("em",null,p(i(o).allCount),1)]),t("div",K,[i(o).allCount?(e(),n("div",O,[j((e(),n("div",Z,[(e(!0),n(_,null,k(i(o).cartList,f=>(e(),n("div",{class:"item",key:f.id},[c(s,{to:`/detail/${f.id}`},{default:v(()=>[j(t("img",G,null,512),[[b,f.picture]]),t("div",J,[t("p",Q,p(f.name),1),t("p",W,p(f.attrsText),1)]),t("div",Y,[t("p",tt,"¥"+p(f.nowPrice),1),t("p",at,"x"+p(f.count),1)])]),_:2},1032,["to"]),t("i",{class:"iconfont icon-close-new",onClick:jt=>i(o).delCart([f.skuId])},null,8,ot)]))),128))])),[[w,i(o).loading]]),t("div",st,[t("div",et,[t("p",null,"共 "+p(i(o).allCount)+" 件商品",1),t("p",null,"¥ "+p(i(o).allPrice.toFixed(2)),1)]),c(a,{size:"large",type:"primary",onClick:r[0]||(r[0]=f=>l.$router.push("/cartlist"))},{default:v(()=>r[2]||(r[2]=[u("去购物车结算")])),_:1})])])):(e(),P(d,{key:1,description:"购物车列表为空"}))])])}}},ct=g(nt,[["__scopeId","data-v-a825d1cc"]]),rt={class:"app-header"},it={class:"container"},dt={class:"logo"},lt={class:"app-header-nav"},pt={__name:"LayoutHeader",setup(m){const o=$(),l=C();return y(()=>{l.getCartList()}),(r,s)=>{const a=h("RouterLink");return e(),n("header",rt,[t("div",it,[t("h1",dt,[c(a,{to:"/"},{default:v(()=>s[0]||(s[0]=[u("小兔鲜")])),_:1})]),t("ul",lt,[(e(!0),n(_,null,k(i(o).categoryList,d=>(e(),n("li",{class:"home",key:d.id},[c(a,{"active-class":"active",to:`/category/${d.id}`},{default:v(()=>[u(p(d.name),1)]),_:2},1032,["to"])]))),128))]),s[1]||(s[1]=t("div",{class:"search"},[t("i",{class:"iconfont icon-search"}),t("input",{type:"text",placeholder:"搜一搜"})],-1)),c(ct)])])}}},ft=g(pt,[["__scopeId","data-v-906584a7"]]),vt="/gtyXTX/assets/qrcode-orqZiaKR.jpg",ut={},_t={class:"app_footer"};function mt(m,o){return e(),n("footer",_t,o[0]||(o[0]=[q('<div class="contact" data-v-92b8fc69><div class="container" data-v-92b8fc69><dl data-v-92b8fc69><dt data-v-92b8fc69>客户服务</dt><dd data-v-92b8fc69><i class="iconfont icon-kefu" data-v-92b8fc69></i> 在线客服</dd><dd data-v-92b8fc69><i class="iconfont icon-question" data-v-92b8fc69></i> 问题反馈</dd></dl><dl data-v-92b8fc69><dt data-v-92b8fc69>关注我们</dt><dd data-v-92b8fc69><i class="iconfont icon-weixin" data-v-92b8fc69></i> 公众号</dd><dd data-v-92b8fc69><i class="iconfont icon-weibo" data-v-92b8fc69></i> 微博</dd></dl><dl data-v-92b8fc69><dt data-v-92b8fc69>下载APP</dt><dd class="qrcode" data-v-92b8fc69><img src="'+vt+'" data-v-92b8fc69></dd><dd class="download" data-v-92b8fc69><span data-v-92b8fc69>扫描二维码</span><span data-v-92b8fc69>立马下载APP</span><a href="javascript:;" data-v-92b8fc69>下载页面</a></dd></dl><dl data-v-92b8fc69><dt data-v-92b8fc69>服务热线</dt><dd class="hotline" data-v-92b8fc69>400-0000-000 <small data-v-92b8fc69>周一至周日 8:00-18:00</small></dd></dl></div></div><div class="extra" data-v-92b8fc69><div class="container" data-v-92b8fc69><div class="slogan" data-v-92b8fc69><a href="javascript:;" data-v-92b8fc69><i class="iconfont icon-footer01" data-v-92b8fc69></i><span data-v-92b8fc69>价格亲民</span></a><a href="javascript:;" data-v-92b8fc69><i class="iconfont icon-footer02" data-v-92b8fc69></i><span data-v-92b8fc69>物流快捷</span></a><a href="javascript:;" data-v-92b8fc69><i class="iconfont icon-footer03" data-v-92b8fc69></i><span data-v-92b8fc69>品质新鲜</span></a></div><div class="copyright" data-v-92b8fc69><p data-v-92b8fc69><a href="javascript:;" data-v-92b8fc69>关于我们</a><a href="javascript:;" data-v-92b8fc69>帮助中心</a><a href="javascript:;" data-v-92b8fc69>售后服务</a><a href="javascript:;" data-v-92b8fc69>配送与验收</a><a href="javascript:;" data-v-92b8fc69>商务合作</a><a href="javascript:;" data-v-92b8fc69>搜索推荐</a><a href="javascript:;" data-v-92b8fc69>友情链接</a></p><p data-v-92b8fc69>CopyRight © 小兔鲜儿</p></div></div></div>',2)]))}const bt=g(ut,[["render",mt],["__scopeId","data-v-92b8fc69"]]),gt={class:"container"},ht={class:"app-header-nav"},yt={class:"right"},kt={__name:"LayoutFixed",setup(m){const{y:o}=F(window),l=$();return(r,s)=>{const a=h("RouterLink");return e(),n("div",{class:N(["app-header-sticky",i(o)>78?"show":""])},[t("div",gt,[c(a,{class:"logo",to:"/"}),t("ul",ht,[(e(!0),n(_,null,k(i(l).categoryList,d=>(e(),n("li",{class:"home",key:d.id},[c(a,{"active-class":"active",to:`/category/${d.id}`},{default:v(()=>[u(p(d.name),1)]),_:2},1032,["to"])]))),128))]),t("div",yt,[c(a,{to:"/"},{default:v(()=>s[0]||(s[0]=[u("品牌")])),_:1}),c(a,{to:"/"},{default:v(()=>s[1]||(s[1]=[u("专题")])),_:1})])])],2)}}},$t=g(kt,[["__scopeId","data-v-4d40ea01"]]),Dt=Object.assign({name:"LayoutPage"},{__name:"index",setup(m){const o=$();y(async()=>{const r=H.service({lock:!0,text:"正在加载中😍😍😍",background:"rgba(0, 0, 0, 0.1)"});await o.getCategory(),r.close()});const l=V();return y(()=>{console.log(l.query.page),l.query.page==="无效地址"&&(L({message:"页面不存在，已自动跳转到首页",type:"warning",duration:2e3}),window.history.replaceState({},"","/"))}),(r,s)=>{const a=h("RouterView");return e(),n(_,null,[c($t),c(M),c(ft),c(a),c(bt)],64)}}});export{Dt as default};
