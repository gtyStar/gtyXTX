import{h as E}from"./user-DZyB_w3l.js";import{E as R,a as w}from"./carousel-item-9v829jVB.js";import{E as L,a as N}from"./breadcrumb-item-hFz-DMwX.js";import{G as S}from"./GoodsItem-DzjvmU3H.js";import{p as j,v,j as h,m as x,_ as q,c as n,a as e,d as g,w as r,F as d,i as m,u as y,r as I,o,b as f,t as X,g as T}from"./index-BxZGvdQn.js";import"./loading-C8GOY5Wu.js";import{E as P}from"./index-CQuPrEIb.js";import"./index-Bs17EQXD.js";import"./vnode-qc9MqEKF.js";import"./event-BB_Ol6Sd.js";import"./throttle-C4ItnEl8.js";import"./debounce-Cli2s35j.js";const U=l=>E({url:"/category",params:{id:l}}),M=()=>{const l=x(),c=j({}),t=async s=>{const i=P.service({lock:!0,text:"正在加载中😍😍😍",background:"rgba(0, 0, 0, 0.1)"}),_=await U(s);c.value=_.result,i.close()};return v(()=>l.params.id,s=>{t(s)}),h(()=>{t(l.params.id)}),{categoryData:c}},Z="/gtyXTX/assets/1005000a-B_yB6D_u.png",z="/gtyXTX/assets/1005000b-icWyASpm.png",F="/gtyXTX/assets/1005000c-CDvCxSf3.png",Q="/gtyXTX/assets/1005002a-8ehxN9P0.gif",V="/gtyXTX/assets/1005002b-BqvPNnTU.jpg",Y="/gtyXTX/assets/1005002c-BesiLDaU.jpg",H="/gtyXTX/assets/1010000a-B8u2HKUs.jpg",K="/gtyXTX/assets/1010000b-BleQCKph.png",O="/gtyXTX/assets/1010000c-BRoNTT5m.jpg",A="/gtyXTX/assets/1011000a-C_9ZyMSY.jpg",G="/gtyXTX/assets/1011000b-Cv1S5cH_.jpg",W="/gtyXTX/assets/1011000c-CS51ys8F.jpg",$="/gtyXTX/assets/1013001a-CfHnlN1Y.jpg",J="/gtyXTX/assets/1013001b-BdpwLE54.jpg",ss="/gtyXTX/assets/1013001c-DMbirXxj.png",ts="/gtyXTX/assets/1019000a-BddQCuRE.jpg",es="/gtyXTX/assets/1019000b-DRydZPFV.png",as="/gtyXTX/assets/1019000c-DTZu7zRq.jpg",os="/gtyXTX/assets/1043000a-BZwSusOq.jpg",ns="/gtyXTX/assets/1043000b-BiUZrx6B.jpg",cs="/gtyXTX/assets/1043000c-D2uqMkuw.jpg",rs="/gtyXTX/assets/109243029a-BbYfYc_R.jpg",ls="/gtyXTX/assets/109243029b-D57TRQqe.jpg",gs="/gtyXTX/assets/109243029c-CuKhOnyq.jpg",is="/gtyXTX/assets/19999999a-bic5yMQv.jpg",ps="/gtyXTX/assets/19999999b-DgcPnxfC.jpg",us="/gtyXTX/assets/19999999c-BLo2tcio.jpg",ds={class:"top-category"},ms={class:"container m-top-20"},ys={class:"bread-container"},Xs={class:"home-banner"},_s=["src"],bs={class:"sub-list"},fs=["src"],Ts={class:"head"},js={class:"body"},vs=Object.assign({name:"CategoryPage"},{__name:"index",setup(l){const{categoryData:c}=M(),t=x(),s=j([]),i=async()=>{t.params.id==="1005000"?s.value=[Z,z,F]:t.params.id==="1005002"?s.value=[Q,V,Y]:t.params.id==="1010000"?s.value=[H,K,O]:t.params.id==="1011000"?s.value=[A,G,W]:t.params.id==="1013001"?s.value=[$,J,ss]:t.params.id==="1019000"?s.value=[ts,es,as]:t.params.id==="1043000"?s.value=[os,ns,cs]:t.params.id==="109243029"?s.value=[rs,ls,gs]:t.params.id==="19999999"&&(s.value=[is,ps,us]),console.log(s.value)};return h(()=>{i()}),v(()=>t.params.id,()=>{i()}),(_,p)=>{const b=N,B=L,C=w,D=R,k=I("RouterLink");return o(),n("div",ds,[e("div",ms,[e("div",ys,[g(B,{separator:">"},{default:r(()=>[g(b,{to:{path:"/"}},{default:r(()=>p[0]||(p[0]=[f("首页")])),_:1}),g(b,null,{default:r(()=>[f(X(y(c).name),1)]),_:1})]),_:1})]),e("div",Xs,[g(D,{height:"500px"},{default:r(()=>[(o(!0),n(d,null,m(s.value,(a,u)=>(o(),T(C,{key:u},{default:r(()=>[e("img",{src:a,alt:""},null,8,_s)]),_:2},1024))),128))]),_:1})]),e("div",bs,[p[1]||(p[1]=e("h3",null,"全部分类",-1)),e("ul",null,[(o(!0),n(d,null,m(y(c).children,a=>(o(),n("li",{key:a.id},[g(k,{to:`/category/sub/${a.id}`},{default:r(()=>[e("img",{src:a.picture},null,8,fs),e("p",null,X(a.name),1)]),_:2},1032,["to"])]))),128))])]),(o(!0),n(d,null,m(y(c).children,a=>(o(),n("div",{class:"ref-goods",key:a.id},[e("div",Ts,[e("h3",null,"- "+X(a.name)+"-",1)]),e("div",js,[(o(!0),n(d,null,m(a.goods,u=>(o(),T(S,{goods:u,key:u.id},null,8,["goods"]))),128))])]))),128))])])}}}),qs=q(vs,[["__scopeId","data-v-e909a57c"]]);export{qs as default};
