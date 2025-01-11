"use strict";const O=function(){const t={};let e,s;return function(o,l,r){s=new Date().getTime(),r=r||"ignored event",e=t[r]?s-t[r]:s,e>l&&(t[r]=s,o())}}(),G=(t,e)=>{const s=[];for(let o=0;o<t.length;o++){const l=t[o];e(l)&&s.push(l)}return s},X=(t,e)=>!(t.right<e.left||t.left>e.right||t.bottom<e.top||t.top>e.bottom),V=(t,e)=>{const s=t.getBoundingClientRect(),o=e.getBoundingClientRect();return X(s,o)&&Math.abs(s.left-o.left)+Math.abs(s.right-o.right)<.5*Math.max(s.width,o.width)&&Math.abs(s.bottom-o.bottom)+Math.abs(s.top-o.top)<.5*Math.max(s.height,o.height)},Y=window.typstGetRelatedElements=t=>{let e=t.relatedElements;return e==null&&(e=t.relatedElements=K(t)),e},k=(t,e)=>{for(;t&&!t.classList.contains(e);)t=t.parentElement;return t};function J(t){const e=k(t,"typst-text");return e&&G(e.children,s=>s.tagName==="use")}const K=function(t){const e=k(t,"typst-group");return e&&G(e.children,s=>V(s,t))};function Q(t){return t.map(e=>{const s=e.getAttribute("href"),o=document.getElementById(s.slice(1));return 1+Number.parseInt((o==null?void 0:o.getAttribute("data-liga-len"))||"0")})}function U(t){return t.map(e=>Number.parseInt(e.getAttribute("x")||"0"))}const I=t=>O(()=>{var e;return(e=Y(t))==null?void 0:e.forEach(s=>s.classList.add("hover"))},200,"mouse-move"),H=t=>{var e;return(e=Y(t))==null?void 0:e.forEach(s=>s.classList.remove("hover"))},Z=(t,e)=>()=>{var o,l;const s=((o=e.parentElement)==null?void 0:o.getAttribute("href"))||((l=e.parentElement)==null?void 0:l.getAttribute("xlink:href"));t.getAttribute("href")!==s&&t.setAttribute("href",s||"")};window.typstProcessSvg=function(t,e){for(var s=t.getElementsByClassName("pseudo-link"),o=0;o<s.length;o++){var l=s[o];l.addEventListener("mousemove",h=>I(h.target)),l.addEventListener("mouseleave",h=>H(h.target))}if(((e==null?void 0:e.layoutText)??!0)&&setTimeout(()=>{const h=document.createElement("style");h.innerHTML=`.tsel { font-family: monospace; text-align-last: left !important; -moz-text-size-adjust: none; -webkit-text-size-adjust: none; text-size-adjust: none; overflow: hidden; }
.tsel span { position: relative !important; width: fit-content !important;  }`,document.getElementsByTagName("head")[0].appendChild(h),window.layoutText(t)},0),t.addEventListener("click",h=>{let p=h.target;for(;p;){const y=p.getAttribute("data-span");if(y){console.log("source-span of this svg element",y);const a=document.body||document.firstElementChild,B=a.getBoundingClientRect(),c=window.innerWidth||0,L=h.clientX-B.left+.015*c,C=h.clientY-B.top+.015*c;D(a,L,C,"typst-debug-react-ripple","typst-debug-react-ripple-effect .4s linear");return}p=p.parentElement}}),window.location.hash){const p=window.location.hash.split("-");if(p.length===2&&p[0]==="#loc"){const y=p[1].split("x");if(y.length===3){const a=Number.parseInt(y[0]),B=Number.parseFloat(y[1]),c=Number.parseFloat(y[2]);window.handleTypstLocation(t,a,B,c)}}}};const W=`
`.codePointAt(0);window.layoutText=async function(t){var M;const e=Array.from(t.querySelectorAll(".tsel, .typst-content-hint, .pseudo-link")),s=performance.now(),o=document.createElementNS("http://www.w3.org/1999/xhtml","canvas").getContext("2d");o.font="128px monospace";const l=o.measureText("A").width,r=t.getBoundingClientRect(),h=r.left+window.scrollX,p=r.top+window.scrollY,y=(d,m,u)=>{var n=d.getScreenCTM();return n?{x:n.a*m+n.c*u+n.e-h,y:n.b*m+n.d*u+n.f-p}:{x:0,y:0}};let a;const B=t.parentElement;if(!B)a=void 0;else if((M=t.nextElementSibling)!=null&&M.classList.contains("typst-semantic-layer"))a=t.nextElementSibling;else{a=document.createElement("div");const d=document.createElement("div");d.style.position="relative",B.replaceChild(d,t),d.appendChild(t),d.appendChild(a),a.classList.add("typst-semantic-layer"),a.style.position="absolute",a.style.left="0",a.style.top="0",a.style.zIndex="1",a.style.float="left";const m=t.getAttribute("width");a.style.width=`${m}px`;const u=t.getAttribute("height");a.style.height=`${u}px`}let c={left:0,right:0,bottom:0,top:0},L=[];const C=(d,m="span")=>{const u=document.createElement(m),n=d.getBBox(),f=y(d,n.x,n.y),i=y(d,n.x+n.width,n.y+n.height),b=Math.min(f.x,i.x)+window.scrollX,v=Math.min(f.y,i.y)+window.scrollY,E=Math.abs(f.x-i.x),S=Math.abs(f.y-i.y),g=S/2,A={left:b-g,top:v-g,right:b+E+g,bottom:v+S+g};return X(c,A)?(c.left=Math.min(c.left,A.left),c.top=Math.min(c.top,A.top),c.right=Math.max(c.right,A.right),c.bottom=Math.max(c.bottom,A.bottom)):(L.push([u,c]),c=A),u.classList.add("tsel"),u.style.position="absolute",u.style.left=`${b}px`,u.style.top=`${v}px`,u.style.width=`${E}px`,u.style.height=`${S}px`,u},$=(d,m)=>{const u=e.slice(d,m);for(let n of u){const f=n.parentElement;if(a){if(n.classList.contains("typst-content-hint")){const i=C(n);i.style.fontSize="0.1px",i.style.width="0.1px",i.style.height="0.1px";const x=Number.parseInt(n.getAttribute("data-hint")||"0",16)||W;i.innerHTML=x===W?"<br/>":`&#x${x.toString(16)};`,a.append(i);continue}else if(n.classList.contains("pseudo-link")){const i=C(n,"a");i.style.cursor="pointer",i.addEventListener("mousemove",()=>I(n)),i.addEventListener("mouseleave",()=>H(n)),i.onclick=()=>{n.dispatchEvent(new MouseEvent("click",{bubbles:!0}))},i.addEventListener("mouseenter",()=>{var b,w;const x=((b=n.parentElement)==null?void 0:b.getAttribute("href"))||((w=n.parentElement)==null?void 0:w.getAttribute("xlink:href"));i.getAttribute("href")!==x&&i.setAttribute("href",x||"")}),a.append(i);continue}}if(n.style.fontSize){const i=[],x=n.innerText,b=l*Number.parseFloat(n.style.fontSize)/128;{const w=J(n);if(!w)continue;const v=Q(w),E=U(w).map(R=>R/16);let S=!1,g=0,A=0,z,P=0;for(let R of x){if(g>=E.length){S=!0;break}let F=E[g];v[g]>1&&(F+=A*b),A++,A>=v[g]&&(g++,A=0);const N=document.createElement("span");N.textContent=R,N.classList.add("tsel-tok"),z&&(z.style.letterSpacing=`${F-P-b}px`),z=N,P=F,i.push(N)}if(S)continue}if(n.innerHTML="",a){const w=Number.parseFloat(n.style.fontSize||"0"),v=Math.abs(y(f,0,w).y-y(f,0,0).y);{const S=v/w;for(let g of i)g.style.letterSpacing=`${Number.parseFloat(g.style.letterSpacing||"0")*S}px`}const E=C(f);E.style.fontSize=`${v}px`,E.append(...i),a.append(E)}else n.append(...i)}}console.log(`layoutText ${e.length} elements used since ${performance.now()-s} ms`)},T=100;for(let d=0;d<e.length;d+=T){const m=d;await new Promise(u=>{setTimeout(()=>{$(m,m+T),u(void 0)})})}if(a&&c.right!=0&&L.push([null,c]),a){const d=performance.now();let m=0;for(let[u,n]of L){if(m<L.length-1){let i=L[m+1][1],x=n.left<i.left,b=n.top<i.top,w=n.right<i.right,v=n.bottom<i.bottom;x!=w&&(n.left=Math.min(n.left,i.left),n.right=Math.max(n.right,i.right)),b!=v&&(n.top=Math.min(n.top,i.top),n.bottom=Math.max(n.bottom,i.bottom))}const f=document.createElement("span");f.style.zIndex="-1",f.style.position="absolute",f.style.left=`${n.left}px`,f.style.top=`${n.top}px`,f.style.width=`${n.right-n.left}px`,f.style.height=`${n.bottom-n.top}px`,f.dir="ltr",f.style.unicodeBidi="isolated",a.insertBefore(f,u),m++}console.log(`layout paragraph used since ${performance.now()-d} ms`)}};window.handleTypstLocation=function(t,e,s,o,l){if(t.classList.contains("typst-semantic-layer"))return t=t.firstElementChild,t&&window.handleTypstLocation(t,e,s,o,l);const r=(l==null?void 0:l.behavior)||"smooth",h=window.assignSemaHash||((c,L,C)=>{location.hash=`loc-${c}x${L.toFixed(2)}x${C.toFixed(2)}`});let p=t;const y=c=>{var E,S,g;const L=window.innerWidth*.01,C=window.innerHeight*.01,$=Number.parseFloat(p.getAttribute("data-width")||p.getAttribute("width")||"0")||0,T=Number.parseFloat(p.getAttribute("data-height")||p.getAttribute("height")||"0")||0,M=p.getBoundingClientRect(),d={left:M.left,top:M.top,width:M.width,height:M.height},m=7*L,u=38.2*C,n=(g=(S=(E=c.transform)==null?void 0:E.baseVal)==null?void 0:S.consolidate())==null?void 0:g.matrix;n&&(d.left+=n.e/$*d.width,d.top+=n.f/T*d.height);const f=document.body||document.firstElementChild,i=f.getBoundingClientRect(),x=d.left-i.left+s/$*d.width-m,b=d.top-i.top+o/T*d.height-u,w=x+m,v=b+u;window.scrollTo({behavior:r,left:x,top:b}),r!=="instant"&&D(f,w,v,"typst-jump-ripple","typst-jump-ripple-effect .4s linear"),h(e,s,o)};if(l!=null&&l.isDom){y(p);return}if(p=k(t,"typst-doc"),!p){console.warn("no typst-doc or typst-svg-page found",t);return}const a=p.children;let B=0;for(let c=0;c<a.length;c++)(a[c].tagName==="g"||a[c].tagName==="stub")&&B++,B==e&&y(a[c])};function D(t,e,s,o,l){const r=document.createElement("div");r.className=o,r.style.left=`${e}px`,r.style.top=`${s}px`,t.appendChild(r),r.style.animation=l,r.onanimationend=()=>{t.removeChild(r)}}var j=document.currentScript;if(j){console.log("new svg util updated 37  ",performance.now());const t=k(j,"typst-doc");t&&window.typstProcessSvg(t)}function q(t,e,s){const o=t.getBoundingClientRect();if(!(e[0]<o.left-1||e[0]>o.right+1||e[1]<o.top-1||e[1]>o.bottom+1)){if(t.classList.contains("pseudo-link"))return t;for(let l=0;l<t.children.length;l++){const r=q(t.children[l],e);if(r)return r}}}window.typstBindSemantics=function(t,e,s){"typstBindCustomSemantics"in window&&window.typstBindCustomSemantics(t,e,s),s.addEventListener("mousemove",o=>{O(()=>{var l;if(((l=o.target)==null?void 0:l.tagName)==="A"){const r=o.target;if(r.cachedTarget)return;const h=q(e,[o.clientX,o.clientY],o.target);if(h){h.dispatchEvent(new MouseEvent("mousemove",{bubbles:!0}));const p=Z(h,r);r.addEventListener("mouseenter",()=>{h.dispatchEvent(new MouseEvent("mouseenter",{bubbles:!0})),p()}),r.addEventListener("mousemove",()=>{h.dispatchEvent(new MouseEvent("mousemove",{bubbles:!0})),I(h)}),r.addEventListener("mouseleave",()=>{h.dispatchEvent(new MouseEvent("mouseleave",{bubbles:!0})),H(h)})}}},100,"mouseenter")})};