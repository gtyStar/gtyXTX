import{a6 as E,a7 as I}from"./index-BTOKHnDP.js";import{t as L}from"./error-Cq9Fpw4b.js";import{g as N}from"./scroll-CC7OCiic.js";import{t as g}from"./throttle-ufSmfEIe.js";const h=t=>{let e=0,n=t;for(;n;)e+=n.offsetTop,n=n.offsetParent;return e},O=(t,e)=>Math.abs(h(t)-h(e)),r="ElInfiniteScroll",A=50,_=200,C=0,D={delay:{type:Number,default:_},distance:{type:Number,default:C},disabled:{type:Boolean,default:!1},immediate:{type:Boolean,default:!0}},v=(t,e)=>Object.entries(D).reduce((n,[o,i])=>{var f,s;const{type:u,default:c}=i,a=t.getAttribute(`infinite-scroll-${o}`);let l=(s=(f=e[a])!=null?f:a)!=null?s:c;return l=l==="false"?!1:l,l=u(l),n[o]=Number.isNaN(l)?c:l,n},{}),T=t=>{const{observer:e}=t[r];e&&(e.disconnect(),delete t[r].observer)},F=(t,e)=>{const{container:n,containerEl:o,instance:i,observer:f,lastScrollTop:s}=t[r],{disabled:u,distance:c}=v(t,i),{clientHeight:a,scrollHeight:l,scrollTop:d}=o,S=d-s;if(t[r].lastScrollTop=d,f||u||S<0)return;let b=!1;if(n===t)b=l-(a+d)<=c;else{const{clientTop:y,scrollHeight:H}=t,w=O(t,o);b=d+a>=w+y+H-c}b&&e.call(i)};function p(t,e){const{containerEl:n,instance:o}=t[r],{disabled:i}=v(t,o);i||n.clientHeight===0||(n.scrollHeight<=n.clientHeight?e.call(o):T(t))}const V={async mounted(t,e){const{instance:n,value:o}=e;I(o)||L(r,"'v-infinite-scroll' binding value must be a function"),await E();const{delay:i,immediate:f}=v(t,n),s=N(t,!0),u=s===window?document.documentElement:s,c=g(F.bind(null,t,o),i);if(s){if(t[r]={instance:n,container:s,containerEl:u,delay:i,cb:o,onScroll:c,lastScrollTop:u.scrollTop},f){const a=new MutationObserver(g(p.bind(null,t,o),A));t[r].observer=a,a.observe(t,{childList:!0,subtree:!0}),p(t,o)}s.addEventListener("scroll",c)}},unmounted(t){if(!t[r])return;const{container:e,onScroll:n}=t[r];e==null||e.removeEventListener("scroll",n),T(t)},async updated(t){if(!t[r])await E();else{const{containerEl:e,cb:n,observer:o}=t[r];e.clientHeight&&o&&p(t,n)}}},m=V;m.install=t=>{t.directive("InfiniteScroll",m)};const P=m;export{P as E};
