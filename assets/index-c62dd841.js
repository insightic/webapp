(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();var De="top",qe="bottom",ze="right",Me="left",ei="auto",On=[De,qe,ze,Me],Zt="start",vn="end",Ya="clippingParents",To="viewport",dn="popper",Xa="reference",Zi=On.reduce(function(e,t){return e.concat([t+"-"+Zt,t+"-"+vn])},[]),So=[].concat(On,[ei]).reduce(function(e,t){return e.concat([t,t+"-"+Zt,t+"-"+vn])},[]),Qa="beforeRead",Ja="read",Za="afterRead",el="beforeMain",tl="main",nl="afterMain",sl="beforeWrite",il="write",ol="afterWrite",rl=[Qa,Ja,Za,el,tl,nl,sl,il,ol];function pt(e){return e?(e.nodeName||"").toLowerCase():null}function Ke(e){if(e==null)return window;if(e.toString()!=="[object Window]"){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function en(e){var t=Ke(e).Element;return e instanceof t||e instanceof Element}function Ge(e){var t=Ke(e).HTMLElement;return e instanceof t||e instanceof HTMLElement}function Ao(e){if(typeof ShadowRoot>"u")return!1;var t=Ke(e).ShadowRoot;return e instanceof t||e instanceof ShadowRoot}function fu(e){var t=e.state;Object.keys(t.elements).forEach(function(n){var s=t.styles[n]||{},i=t.attributes[n]||{},o=t.elements[n];!Ge(o)||!pt(o)||(Object.assign(o.style,s),Object.keys(i).forEach(function(r){var a=i[r];a===!1?o.removeAttribute(r):o.setAttribute(r,a===!0?"":a)}))})}function hu(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach(function(s){var i=t.elements[s],o=t.attributes[s]||{},r=Object.keys(t.styles.hasOwnProperty(s)?t.styles[s]:n[s]),a=r.reduce(function(l,c){return l[c]="",l},{});!Ge(i)||!pt(i)||(Object.assign(i.style,a),Object.keys(o).forEach(function(l){i.removeAttribute(l)}))})}}const xo={name:"applyStyles",enabled:!0,phase:"write",fn:fu,effect:hu,requires:["computeStyles"]};function ct(e){return e.split("-")[0]}var Yt=Math.max,Vs=Math.min,yn=Math.round;function eo(){var e=navigator.userAgentData;return e!=null&&e.brands&&Array.isArray(e.brands)?e.brands.map(function(t){return t.brand+"/"+t.version}).join(" "):navigator.userAgent}function al(){return!/^((?!chrome|android).)*safari/i.test(eo())}function wn(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!1);var s=e.getBoundingClientRect(),i=1,o=1;t&&Ge(e)&&(i=e.offsetWidth>0&&yn(s.width)/e.offsetWidth||1,o=e.offsetHeight>0&&yn(s.height)/e.offsetHeight||1);var r=en(e)?Ke(e):window,a=r.visualViewport,l=!al()&&n,c=(s.left+(l&&a?a.offsetLeft:0))/i,u=(s.top+(l&&a?a.offsetTop:0))/o,d=s.width/i,f=s.height/o;return{width:d,height:f,top:u,right:c+d,bottom:u+f,left:c,x:c,y:u}}function Co(e){var t=wn(e),n=e.offsetWidth,s=e.offsetHeight;return Math.abs(t.width-n)<=1&&(n=t.width),Math.abs(t.height-s)<=1&&(s=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:s}}function ll(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&Ao(n)){var s=t;do{if(s&&e.isSameNode(s))return!0;s=s.parentNode||s.host}while(s)}return!1}function yt(e){return Ke(e).getComputedStyle(e)}function mu(e){return["table","td","th"].indexOf(pt(e))>=0}function $t(e){return((en(e)?e.ownerDocument:e.document)||window.document).documentElement}function ti(e){return pt(e)==="html"?e:e.assignedSlot||e.parentNode||(Ao(e)?e.host:null)||$t(e)}function gr(e){return!Ge(e)||yt(e).position==="fixed"?null:e.offsetParent}function gu(e){var t=/firefox/i.test(eo()),n=/Trident/i.test(eo());if(n&&Ge(e)){var s=yt(e);if(s.position==="fixed")return null}var i=ti(e);for(Ao(i)&&(i=i.host);Ge(i)&&["html","body"].indexOf(pt(i))<0;){var o=yt(i);if(o.transform!=="none"||o.perspective!=="none"||o.contain==="paint"||["transform","perspective"].indexOf(o.willChange)!==-1||t&&o.willChange==="filter"||t&&o.filter&&o.filter!=="none")return i;i=i.parentNode}return null}function fs(e){for(var t=Ke(e),n=gr(e);n&&mu(n)&&yt(n).position==="static";)n=gr(n);return n&&(pt(n)==="html"||pt(n)==="body"&&yt(n).position==="static")?t:n||gu(e)||t}function Po(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function Yn(e,t,n){return Yt(e,Vs(t,n))}function _u(e,t,n){var s=Yn(e,t,n);return s>n?n:s}function cl(){return{top:0,right:0,bottom:0,left:0}}function ul(e){return Object.assign({},cl(),e)}function dl(e,t){return t.reduce(function(n,s){return n[s]=e,n},{})}var bu=function(t,n){return t=typeof t=="function"?t(Object.assign({},n.rects,{placement:n.placement})):t,ul(typeof t!="number"?t:dl(t,On))};function vu(e){var t,n=e.state,s=e.name,i=e.options,o=n.elements.arrow,r=n.modifiersData.popperOffsets,a=ct(n.placement),l=Po(a),c=[Me,ze].indexOf(a)>=0,u=c?"height":"width";if(!(!o||!r)){var d=bu(i.padding,n),f=Co(o),g=l==="y"?De:Me,P=l==="y"?qe:ze,w=n.rects.reference[u]+n.rects.reference[l]-r[l]-n.rects.popper[u],A=r[l]-n.rects.reference[l],C=fs(o),m=C?l==="y"?C.clientHeight||0:C.clientWidth||0:0,_=w/2-A/2,b=d[g],y=m-f[u]-d[P],S=m/2-f[u]/2+_,R=Yn(b,S,y),L=l;n.modifiersData[s]=(t={},t[L]=R,t.centerOffset=R-S,t)}}function yu(e){var t=e.state,n=e.options,s=n.element,i=s===void 0?"[data-popper-arrow]":s;i!=null&&(typeof i=="string"&&(i=t.elements.popper.querySelector(i),!i)||ll(t.elements.popper,i)&&(t.elements.arrow=i))}const pl={name:"arrow",enabled:!0,phase:"main",fn:vu,effect:yu,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function kn(e){return e.split("-")[1]}var wu={top:"auto",right:"auto",bottom:"auto",left:"auto"};function ku(e,t){var n=e.x,s=e.y,i=t.devicePixelRatio||1;return{x:yn(n*i)/i||0,y:yn(s*i)/i||0}}function _r(e){var t,n=e.popper,s=e.popperRect,i=e.placement,o=e.variation,r=e.offsets,a=e.position,l=e.gpuAcceleration,c=e.adaptive,u=e.roundOffsets,d=e.isFixed,f=r.x,g=f===void 0?0:f,P=r.y,w=P===void 0?0:P,A=typeof u=="function"?u({x:g,y:w}):{x:g,y:w};g=A.x,w=A.y;var C=r.hasOwnProperty("x"),m=r.hasOwnProperty("y"),_=Me,b=De,y=window;if(c){var S=fs(n),R="clientHeight",L="clientWidth";if(S===Ke(n)&&(S=$t(n),yt(S).position!=="static"&&a==="absolute"&&(R="scrollHeight",L="scrollWidth")),S=S,i===De||(i===Me||i===ze)&&o===vn){b=qe;var I=d&&S===y&&y.visualViewport?y.visualViewport.height:S[R];w-=I-s.height,w*=l?1:-1}if(i===Me||(i===De||i===qe)&&o===vn){_=ze;var U=d&&S===y&&y.visualViewport?y.visualViewport.width:S[L];g-=U-s.width,g*=l?1:-1}}var X=Object.assign({position:a},c&&wu),ie=u===!0?ku({x:g,y:w},Ke(n)):{x:g,y:w};if(g=ie.x,w=ie.y,l){var ce;return Object.assign({},X,(ce={},ce[b]=m?"0":"",ce[_]=C?"0":"",ce.transform=(y.devicePixelRatio||1)<=1?"translate("+g+"px, "+w+"px)":"translate3d("+g+"px, "+w+"px, 0)",ce))}return Object.assign({},X,(t={},t[b]=m?w+"px":"",t[_]=C?g+"px":"",t.transform="",t))}function Eu(e){var t=e.state,n=e.options,s=n.gpuAcceleration,i=s===void 0?!0:s,o=n.adaptive,r=o===void 0?!0:o,a=n.roundOffsets,l=a===void 0?!0:a,c={placement:ct(t.placement),variation:kn(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:i,isFixed:t.options.strategy==="fixed"};t.modifiersData.popperOffsets!=null&&(t.styles.popper=Object.assign({},t.styles.popper,_r(Object.assign({},c,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:r,roundOffsets:l})))),t.modifiersData.arrow!=null&&(t.styles.arrow=Object.assign({},t.styles.arrow,_r(Object.assign({},c,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:l})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})}const Io={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:Eu,data:{}};var vs={passive:!0};function Tu(e){var t=e.state,n=e.instance,s=e.options,i=s.scroll,o=i===void 0?!0:i,r=s.resize,a=r===void 0?!0:r,l=Ke(t.elements.popper),c=[].concat(t.scrollParents.reference,t.scrollParents.popper);return o&&c.forEach(function(u){u.addEventListener("scroll",n.update,vs)}),a&&l.addEventListener("resize",n.update,vs),function(){o&&c.forEach(function(u){u.removeEventListener("scroll",n.update,vs)}),a&&l.removeEventListener("resize",n.update,vs)}}const Oo={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:Tu,data:{}};var Su={left:"right",right:"left",bottom:"top",top:"bottom"};function Ns(e){return e.replace(/left|right|bottom|top/g,function(t){return Su[t]})}var Au={start:"end",end:"start"};function br(e){return e.replace(/start|end/g,function(t){return Au[t]})}function No(e){var t=Ke(e),n=t.pageXOffset,s=t.pageYOffset;return{scrollLeft:n,scrollTop:s}}function Bo(e){return wn($t(e)).left+No(e).scrollLeft}function xu(e,t){var n=Ke(e),s=$t(e),i=n.visualViewport,o=s.clientWidth,r=s.clientHeight,a=0,l=0;if(i){o=i.width,r=i.height;var c=al();(c||!c&&t==="fixed")&&(a=i.offsetLeft,l=i.offsetTop)}return{width:o,height:r,x:a+Bo(e),y:l}}function Cu(e){var t,n=$t(e),s=No(e),i=(t=e.ownerDocument)==null?void 0:t.body,o=Yt(n.scrollWidth,n.clientWidth,i?i.scrollWidth:0,i?i.clientWidth:0),r=Yt(n.scrollHeight,n.clientHeight,i?i.scrollHeight:0,i?i.clientHeight:0),a=-s.scrollLeft+Bo(e),l=-s.scrollTop;return yt(i||n).direction==="rtl"&&(a+=Yt(n.clientWidth,i?i.clientWidth:0)-o),{width:o,height:r,x:a,y:l}}function Ro(e){var t=yt(e),n=t.overflow,s=t.overflowX,i=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+i+s)}function fl(e){return["html","body","#document"].indexOf(pt(e))>=0?e.ownerDocument.body:Ge(e)&&Ro(e)?e:fl(ti(e))}function Xn(e,t){var n;t===void 0&&(t=[]);var s=fl(e),i=s===((n=e.ownerDocument)==null?void 0:n.body),o=Ke(s),r=i?[o].concat(o.visualViewport||[],Ro(s)?s:[]):s,a=t.concat(r);return i?a:a.concat(Xn(ti(r)))}function to(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function Pu(e,t){var n=wn(e,!1,t==="fixed");return n.top=n.top+e.clientTop,n.left=n.left+e.clientLeft,n.bottom=n.top+e.clientHeight,n.right=n.left+e.clientWidth,n.width=e.clientWidth,n.height=e.clientHeight,n.x=n.left,n.y=n.top,n}function vr(e,t,n){return t===To?to(xu(e,n)):en(t)?Pu(t,n):to(Cu($t(e)))}function Iu(e){var t=Xn(ti(e)),n=["absolute","fixed"].indexOf(yt(e).position)>=0,s=n&&Ge(e)?fs(e):e;return en(s)?t.filter(function(i){return en(i)&&ll(i,s)&&pt(i)!=="body"}):[]}function Ou(e,t,n,s){var i=t==="clippingParents"?Iu(e):[].concat(t),o=[].concat(i,[n]),r=o[0],a=o.reduce(function(l,c){var u=vr(e,c,s);return l.top=Yt(u.top,l.top),l.right=Vs(u.right,l.right),l.bottom=Vs(u.bottom,l.bottom),l.left=Yt(u.left,l.left),l},vr(e,r,s));return a.width=a.right-a.left,a.height=a.bottom-a.top,a.x=a.left,a.y=a.top,a}function hl(e){var t=e.reference,n=e.element,s=e.placement,i=s?ct(s):null,o=s?kn(s):null,r=t.x+t.width/2-n.width/2,a=t.y+t.height/2-n.height/2,l;switch(i){case De:l={x:r,y:t.y-n.height};break;case qe:l={x:r,y:t.y+t.height};break;case ze:l={x:t.x+t.width,y:a};break;case Me:l={x:t.x-n.width,y:a};break;default:l={x:t.x,y:t.y}}var c=i?Po(i):null;if(c!=null){var u=c==="y"?"height":"width";switch(o){case Zt:l[c]=l[c]-(t[u]/2-n[u]/2);break;case vn:l[c]=l[c]+(t[u]/2-n[u]/2);break}}return l}function En(e,t){t===void 0&&(t={});var n=t,s=n.placement,i=s===void 0?e.placement:s,o=n.strategy,r=o===void 0?e.strategy:o,a=n.boundary,l=a===void 0?Ya:a,c=n.rootBoundary,u=c===void 0?To:c,d=n.elementContext,f=d===void 0?dn:d,g=n.altBoundary,P=g===void 0?!1:g,w=n.padding,A=w===void 0?0:w,C=ul(typeof A!="number"?A:dl(A,On)),m=f===dn?Xa:dn,_=e.rects.popper,b=e.elements[P?m:f],y=Ou(en(b)?b:b.contextElement||$t(e.elements.popper),l,u,r),S=wn(e.elements.reference),R=hl({reference:S,element:_,strategy:"absolute",placement:i}),L=to(Object.assign({},_,R)),I=f===dn?L:S,U={top:y.top-I.top+C.top,bottom:I.bottom-y.bottom+C.bottom,left:y.left-I.left+C.left,right:I.right-y.right+C.right},X=e.modifiersData.offset;if(f===dn&&X){var ie=X[i];Object.keys(U).forEach(function(ce){var Ce=[ze,qe].indexOf(ce)>=0?1:-1,ve=[De,qe].indexOf(ce)>=0?"y":"x";U[ce]+=ie[ve]*Ce})}return U}function Nu(e,t){t===void 0&&(t={});var n=t,s=n.placement,i=n.boundary,o=n.rootBoundary,r=n.padding,a=n.flipVariations,l=n.allowedAutoPlacements,c=l===void 0?So:l,u=kn(s),d=u?a?Zi:Zi.filter(function(P){return kn(P)===u}):On,f=d.filter(function(P){return c.indexOf(P)>=0});f.length===0&&(f=d);var g=f.reduce(function(P,w){return P[w]=En(e,{placement:w,boundary:i,rootBoundary:o,padding:r})[ct(w)],P},{});return Object.keys(g).sort(function(P,w){return g[P]-g[w]})}function Bu(e){if(ct(e)===ei)return[];var t=Ns(e);return[br(e),t,br(t)]}function Ru(e){var t=e.state,n=e.options,s=e.name;if(!t.modifiersData[s]._skip){for(var i=n.mainAxis,o=i===void 0?!0:i,r=n.altAxis,a=r===void 0?!0:r,l=n.fallbackPlacements,c=n.padding,u=n.boundary,d=n.rootBoundary,f=n.altBoundary,g=n.flipVariations,P=g===void 0?!0:g,w=n.allowedAutoPlacements,A=t.options.placement,C=ct(A),m=C===A,_=l||(m||!P?[Ns(A)]:Bu(A)),b=[A].concat(_).reduce(function(ye,xe){return ye.concat(ct(xe)===ei?Nu(t,{placement:xe,boundary:u,rootBoundary:d,padding:c,flipVariations:P,allowedAutoPlacements:w}):xe)},[]),y=t.rects.reference,S=t.rects.popper,R=new Map,L=!0,I=b[0],U=0;U<b.length;U++){var X=b[U],ie=ct(X),ce=kn(X)===Zt,Ce=[De,qe].indexOf(ie)>=0,ve=Ce?"width":"height",Q=En(t,{placement:X,boundary:u,rootBoundary:d,altBoundary:f,padding:c}),Z=Ce?ce?ze:Me:ce?qe:De;y[ve]>S[ve]&&(Z=Ns(Z));var G=Ns(Z),he=[];if(o&&he.push(Q[ie]<=0),a&&he.push(Q[Z]<=0,Q[G]<=0),he.every(function(ye){return ye})){I=X,L=!1;break}R.set(X,he)}if(L)for(var ke=P?3:1,Ae=function(xe){var ge=b.find(function(E){var W=R.get(E);if(W)return W.slice(0,xe).every(function($){return $})});if(ge)return I=ge,"break"},le=ke;le>0;le--){var Fe=Ae(le);if(Fe==="break")break}t.placement!==I&&(t.modifiersData[s]._skip=!0,t.placement=I,t.reset=!0)}}const ml={name:"flip",enabled:!0,phase:"main",fn:Ru,requiresIfExists:["offset"],data:{_skip:!1}};function yr(e,t,n){return n===void 0&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function wr(e){return[De,ze,qe,Me].some(function(t){return e[t]>=0})}function Du(e){var t=e.state,n=e.name,s=t.rects.reference,i=t.rects.popper,o=t.modifiersData.preventOverflow,r=En(t,{elementContext:"reference"}),a=En(t,{altBoundary:!0}),l=yr(r,s),c=yr(a,i,o),u=wr(l),d=wr(c);t.modifiersData[n]={referenceClippingOffsets:l,popperEscapeOffsets:c,isReferenceHidden:u,hasPopperEscaped:d},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":u,"data-popper-escaped":d})}const gl={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:Du};function Mu(e,t,n){var s=ct(e),i=[Me,De].indexOf(s)>=0?-1:1,o=typeof n=="function"?n(Object.assign({},t,{placement:e})):n,r=o[0],a=o[1];return r=r||0,a=(a||0)*i,[Me,ze].indexOf(s)>=0?{x:a,y:r}:{x:r,y:a}}function Lu(e){var t=e.state,n=e.options,s=e.name,i=n.offset,o=i===void 0?[0,0]:i,r=So.reduce(function(u,d){return u[d]=Mu(d,t.rects,o),u},{}),a=r[t.placement],l=a.x,c=a.y;t.modifiersData.popperOffsets!=null&&(t.modifiersData.popperOffsets.x+=l,t.modifiersData.popperOffsets.y+=c),t.modifiersData[s]=r}const _l={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:Lu};function $u(e){var t=e.state,n=e.name;t.modifiersData[n]=hl({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})}const Do={name:"popperOffsets",enabled:!0,phase:"read",fn:$u,data:{}};function Wu(e){return e==="x"?"y":"x"}function Fu(e){var t=e.state,n=e.options,s=e.name,i=n.mainAxis,o=i===void 0?!0:i,r=n.altAxis,a=r===void 0?!1:r,l=n.boundary,c=n.rootBoundary,u=n.altBoundary,d=n.padding,f=n.tether,g=f===void 0?!0:f,P=n.tetherOffset,w=P===void 0?0:P,A=En(t,{boundary:l,rootBoundary:c,padding:d,altBoundary:u}),C=ct(t.placement),m=kn(t.placement),_=!m,b=Po(C),y=Wu(b),S=t.modifiersData.popperOffsets,R=t.rects.reference,L=t.rects.popper,I=typeof w=="function"?w(Object.assign({},t.rects,{placement:t.placement})):w,U=typeof I=="number"?{mainAxis:I,altAxis:I}:Object.assign({mainAxis:0,altAxis:0},I),X=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,ie={x:0,y:0};if(S){if(o){var ce,Ce=b==="y"?De:Me,ve=b==="y"?qe:ze,Q=b==="y"?"height":"width",Z=S[b],G=Z+A[Ce],he=Z-A[ve],ke=g?-L[Q]/2:0,Ae=m===Zt?R[Q]:L[Q],le=m===Zt?-L[Q]:-R[Q],Fe=t.elements.arrow,ye=g&&Fe?Co(Fe):{width:0,height:0},xe=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:cl(),ge=xe[Ce],E=xe[ve],W=Yn(0,R[Q],ye[Q]),$=_?R[Q]/2-ke-W-ge-U.mainAxis:Ae-W-ge-U.mainAxis,q=_?-R[Q]/2+ke+W+E+U.mainAxis:le+W+E+U.mainAxis,ne=t.elements.arrow&&fs(t.elements.arrow),p=ne?b==="y"?ne.clientTop||0:ne.clientLeft||0:0,h=(ce=X==null?void 0:X[b])!=null?ce:0,v=Z+$-h-p,T=Z+q-h,x=Yn(g?Vs(G,v):G,Z,g?Yt(he,T):he);S[b]=x,ie[b]=x-Z}if(a){var O,V=b==="x"?De:Me,D=b==="x"?qe:ze,M=S[y],N=y==="y"?"height":"width",K=M+A[V],j=M-A[D],z=[De,Me].indexOf(C)!==-1,J=(O=X==null?void 0:X[y])!=null?O:0,se=z?K:M-R[N]-L[N]-J+U.altAxis,pe=z?M+R[N]+L[N]-J-U.altAxis:j,ue=g&&z?_u(se,M,pe):Yn(g?se:K,M,g?pe:j);S[y]=ue,ie[y]=ue-M}t.modifiersData[s]=ie}}const bl={name:"preventOverflow",enabled:!0,phase:"main",fn:Fu,requiresIfExists:["offset"]};function Vu(e){return{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}}function Hu(e){return e===Ke(e)||!Ge(e)?No(e):Vu(e)}function Uu(e){var t=e.getBoundingClientRect(),n=yn(t.width)/e.offsetWidth||1,s=yn(t.height)/e.offsetHeight||1;return n!==1||s!==1}function ju(e,t,n){n===void 0&&(n=!1);var s=Ge(t),i=Ge(t)&&Uu(t),o=$t(t),r=wn(e,i,n),a={scrollLeft:0,scrollTop:0},l={x:0,y:0};return(s||!s&&!n)&&((pt(t)!=="body"||Ro(o))&&(a=Hu(t)),Ge(t)?(l=wn(t,!0),l.x+=t.clientLeft,l.y+=t.clientTop):o&&(l.x=Bo(o))),{x:r.left+a.scrollLeft-l.x,y:r.top+a.scrollTop-l.y,width:r.width,height:r.height}}function qu(e){var t=new Map,n=new Set,s=[];e.forEach(function(o){t.set(o.name,o)});function i(o){n.add(o.name);var r=[].concat(o.requires||[],o.requiresIfExists||[]);r.forEach(function(a){if(!n.has(a)){var l=t.get(a);l&&i(l)}}),s.push(o)}return e.forEach(function(o){n.has(o.name)||i(o)}),s}function zu(e){var t=qu(e);return rl.reduce(function(n,s){return n.concat(t.filter(function(i){return i.phase===s}))},[])}function Ku(e){var t;return function(){return t||(t=new Promise(function(n){Promise.resolve().then(function(){t=void 0,n(e())})})),t}}function Gu(e){var t=e.reduce(function(n,s){var i=n[s.name];return n[s.name]=i?Object.assign({},i,s,{options:Object.assign({},i.options,s.options),data:Object.assign({},i.data,s.data)}):s,n},{});return Object.keys(t).map(function(n){return t[n]})}var kr={placement:"bottom",modifiers:[],strategy:"absolute"};function Er(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some(function(s){return!(s&&typeof s.getBoundingClientRect=="function")})}function ni(e){e===void 0&&(e={});var t=e,n=t.defaultModifiers,s=n===void 0?[]:n,i=t.defaultOptions,o=i===void 0?kr:i;return function(a,l,c){c===void 0&&(c=o);var u={placement:"bottom",orderedModifiers:[],options:Object.assign({},kr,o),modifiersData:{},elements:{reference:a,popper:l},attributes:{},styles:{}},d=[],f=!1,g={state:u,setOptions:function(C){var m=typeof C=="function"?C(u.options):C;w(),u.options=Object.assign({},o,u.options,m),u.scrollParents={reference:en(a)?Xn(a):a.contextElement?Xn(a.contextElement):[],popper:Xn(l)};var _=zu(Gu([].concat(s,u.options.modifiers)));return u.orderedModifiers=_.filter(function(b){return b.enabled}),P(),g.update()},forceUpdate:function(){if(!f){var C=u.elements,m=C.reference,_=C.popper;if(Er(m,_)){u.rects={reference:ju(m,fs(_),u.options.strategy==="fixed"),popper:Co(_)},u.reset=!1,u.placement=u.options.placement,u.orderedModifiers.forEach(function(U){return u.modifiersData[U.name]=Object.assign({},U.data)});for(var b=0;b<u.orderedModifiers.length;b++){if(u.reset===!0){u.reset=!1,b=-1;continue}var y=u.orderedModifiers[b],S=y.fn,R=y.options,L=R===void 0?{}:R,I=y.name;typeof S=="function"&&(u=S({state:u,options:L,name:I,instance:g})||u)}}}},update:Ku(function(){return new Promise(function(A){g.forceUpdate(),A(u)})}),destroy:function(){w(),f=!0}};if(!Er(a,l))return g;g.setOptions(c).then(function(A){!f&&c.onFirstUpdate&&c.onFirstUpdate(A)});function P(){u.orderedModifiers.forEach(function(A){var C=A.name,m=A.options,_=m===void 0?{}:m,b=A.effect;if(typeof b=="function"){var y=b({state:u,name:C,instance:g,options:_}),S=function(){};d.push(y||S)}})}function w(){d.forEach(function(A){return A()}),d=[]}return g}}var Yu=ni(),Xu=[Oo,Do,Io,xo],Qu=ni({defaultModifiers:Xu}),Ju=[Oo,Do,Io,xo,_l,ml,bl,pl,gl],Mo=ni({defaultModifiers:Ju});const vl=Object.freeze(Object.defineProperty({__proto__:null,afterMain:nl,afterRead:Za,afterWrite:ol,applyStyles:xo,arrow:pl,auto:ei,basePlacements:On,beforeMain:el,beforeRead:Qa,beforeWrite:sl,bottom:qe,clippingParents:Ya,computeStyles:Io,createPopper:Mo,createPopperBase:Yu,createPopperLite:Qu,detectOverflow:En,end:vn,eventListeners:Oo,flip:ml,hide:gl,left:Me,main:tl,modifierPhases:rl,offset:_l,placements:So,popper:dn,popperGenerator:ni,popperOffsets:Do,preventOverflow:bl,read:Ja,reference:Xa,right:ze,start:Zt,top:De,variationPlacements:Zi,viewport:To,write:il},Symbol.toStringTag,{value:"Module"}));/*!
  * Bootstrap v5.2.3 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */const Zu=1e6,ed=1e3,no="transitionend",td=e=>e==null?`${e}`:Object.prototype.toString.call(e).match(/\s([a-z]+)/i)[1].toLowerCase(),nd=e=>{do e+=Math.floor(Math.random()*Zu);while(document.getElementById(e));return e},yl=e=>{let t=e.getAttribute("data-bs-target");if(!t||t==="#"){let n=e.getAttribute("href");if(!n||!n.includes("#")&&!n.startsWith("."))return null;n.includes("#")&&!n.startsWith("#")&&(n=`#${n.split("#")[1]}`),t=n&&n!=="#"?n.trim():null}return t},wl=e=>{const t=yl(e);return t&&document.querySelector(t)?t:null},_t=e=>{const t=yl(e);return t?document.querySelector(t):null},sd=e=>{if(!e)return 0;let{transitionDuration:t,transitionDelay:n}=window.getComputedStyle(e);const s=Number.parseFloat(t),i=Number.parseFloat(n);return!s&&!i?0:(t=t.split(",")[0],n=n.split(",")[0],(Number.parseFloat(t)+Number.parseFloat(n))*ed)},kl=e=>{e.dispatchEvent(new Event(no))},bt=e=>!e||typeof e!="object"?!1:(typeof e.jquery<"u"&&(e=e[0]),typeof e.nodeType<"u"),Bt=e=>bt(e)?e.jquery?e[0]:e:typeof e=="string"&&e.length>0?document.querySelector(e):null,Nn=e=>{if(!bt(e)||e.getClientRects().length===0)return!1;const t=getComputedStyle(e).getPropertyValue("visibility")==="visible",n=e.closest("details:not([open])");if(!n)return t;if(n!==e){const s=e.closest("summary");if(s&&s.parentNode!==n||s===null)return!1}return t},Rt=e=>!e||e.nodeType!==Node.ELEMENT_NODE||e.classList.contains("disabled")?!0:typeof e.disabled<"u"?e.disabled:e.hasAttribute("disabled")&&e.getAttribute("disabled")!=="false",El=e=>{if(!document.documentElement.attachShadow)return null;if(typeof e.getRootNode=="function"){const t=e.getRootNode();return t instanceof ShadowRoot?t:null}return e instanceof ShadowRoot?e:e.parentNode?El(e.parentNode):null},Hs=()=>{},hs=e=>{e.offsetHeight},Tl=()=>window.jQuery&&!document.body.hasAttribute("data-bs-no-jquery")?window.jQuery:null,Ai=[],id=e=>{document.readyState==="loading"?(Ai.length||document.addEventListener("DOMContentLoaded",()=>{for(const t of Ai)t()}),Ai.push(e)):e()},Ye=()=>document.documentElement.dir==="rtl",Xe=e=>{id(()=>{const t=Tl();if(t){const n=e.NAME,s=t.fn[n];t.fn[n]=e.jQueryInterface,t.fn[n].Constructor=e,t.fn[n].noConflict=()=>(t.fn[n]=s,e.jQueryInterface)}})},gt=e=>{typeof e=="function"&&e()},Sl=(e,t,n=!0)=>{if(!n){gt(e);return}const s=5,i=sd(t)+s;let o=!1;const r=({target:a})=>{a===t&&(o=!0,t.removeEventListener(no,r),gt(e))};t.addEventListener(no,r),setTimeout(()=>{o||kl(t)},i)},Lo=(e,t,n,s)=>{const i=e.length;let o=e.indexOf(t);return o===-1?!n&&s?e[i-1]:e[0]:(o+=n?1:-1,s&&(o=(o+i)%i),e[Math.max(0,Math.min(o,i-1))])},od=/[^.]*(?=\..*)\.|.*/,rd=/\..*/,ad=/::\d+$/,xi={};let Tr=1;const Al={mouseenter:"mouseover",mouseleave:"mouseout"},ld=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function xl(e,t){return t&&`${t}::${Tr++}`||e.uidEvent||Tr++}function Cl(e){const t=xl(e);return e.uidEvent=t,xi[t]=xi[t]||{},xi[t]}function cd(e,t){return function n(s){return $o(s,{delegateTarget:e}),n.oneOff&&B.off(e,s.type,t),t.apply(e,[s])}}function ud(e,t,n){return function s(i){const o=e.querySelectorAll(t);for(let{target:r}=i;r&&r!==this;r=r.parentNode)for(const a of o)if(a===r)return $o(i,{delegateTarget:r}),s.oneOff&&B.off(e,i.type,t,n),n.apply(r,[i])}}function Pl(e,t,n=null){return Object.values(e).find(s=>s.callable===t&&s.delegationSelector===n)}function Il(e,t,n){const s=typeof t=="string",i=s?n:t||n;let o=Ol(e);return ld.has(o)||(o=e),[s,i,o]}function Sr(e,t,n,s,i){if(typeof t!="string"||!e)return;let[o,r,a]=Il(t,n,s);t in Al&&(r=(P=>function(w){if(!w.relatedTarget||w.relatedTarget!==w.delegateTarget&&!w.delegateTarget.contains(w.relatedTarget))return P.call(this,w)})(r));const l=Cl(e),c=l[a]||(l[a]={}),u=Pl(c,r,o?n:null);if(u){u.oneOff=u.oneOff&&i;return}const d=xl(r,t.replace(od,"")),f=o?ud(e,n,r):cd(e,r);f.delegationSelector=o?n:null,f.callable=r,f.oneOff=i,f.uidEvent=d,c[d]=f,e.addEventListener(a,f,o)}function so(e,t,n,s,i){const o=Pl(t[n],s,i);o&&(e.removeEventListener(n,o,!!i),delete t[n][o.uidEvent])}function dd(e,t,n,s){const i=t[n]||{};for(const o of Object.keys(i))if(o.includes(s)){const r=i[o];so(e,t,n,r.callable,r.delegationSelector)}}function Ol(e){return e=e.replace(rd,""),Al[e]||e}const B={on(e,t,n,s){Sr(e,t,n,s,!1)},one(e,t,n,s){Sr(e,t,n,s,!0)},off(e,t,n,s){if(typeof t!="string"||!e)return;const[i,o,r]=Il(t,n,s),a=r!==t,l=Cl(e),c=l[r]||{},u=t.startsWith(".");if(typeof o<"u"){if(!Object.keys(c).length)return;so(e,l,r,o,i?n:null);return}if(u)for(const d of Object.keys(l))dd(e,l,d,t.slice(1));for(const d of Object.keys(c)){const f=d.replace(ad,"");if(!a||t.includes(f)){const g=c[d];so(e,l,r,g.callable,g.delegationSelector)}}},trigger(e,t,n){if(typeof t!="string"||!e)return null;const s=Tl(),i=Ol(t),o=t!==i;let r=null,a=!0,l=!0,c=!1;o&&s&&(r=s.Event(t,n),s(e).trigger(r),a=!r.isPropagationStopped(),l=!r.isImmediatePropagationStopped(),c=r.isDefaultPrevented());let u=new Event(t,{bubbles:a,cancelable:!0});return u=$o(u,n),c&&u.preventDefault(),l&&e.dispatchEvent(u),u.defaultPrevented&&r&&r.preventDefault(),u}};function $o(e,t){for(const[n,s]of Object.entries(t||{}))try{e[n]=s}catch{Object.defineProperty(e,n,{configurable:!0,get(){return s}})}return e}const Tt=new Map,Ci={set(e,t,n){Tt.has(e)||Tt.set(e,new Map);const s=Tt.get(e);if(!s.has(t)&&s.size!==0){console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(s.keys())[0]}.`);return}s.set(t,n)},get(e,t){return Tt.has(e)&&Tt.get(e).get(t)||null},remove(e,t){if(!Tt.has(e))return;const n=Tt.get(e);n.delete(t),n.size===0&&Tt.delete(e)}};function Ar(e){if(e==="true")return!0;if(e==="false")return!1;if(e===Number(e).toString())return Number(e);if(e===""||e==="null")return null;if(typeof e!="string")return e;try{return JSON.parse(decodeURIComponent(e))}catch{return e}}function Pi(e){return e.replace(/[A-Z]/g,t=>`-${t.toLowerCase()}`)}const vt={setDataAttribute(e,t,n){e.setAttribute(`data-bs-${Pi(t)}`,n)},removeDataAttribute(e,t){e.removeAttribute(`data-bs-${Pi(t)}`)},getDataAttributes(e){if(!e)return{};const t={},n=Object.keys(e.dataset).filter(s=>s.startsWith("bs")&&!s.startsWith("bsConfig"));for(const s of n){let i=s.replace(/^bs/,"");i=i.charAt(0).toLowerCase()+i.slice(1,i.length),t[i]=Ar(e.dataset[s])}return t},getDataAttribute(e,t){return Ar(e.getAttribute(`data-bs-${Pi(t)}`))}};class ms{static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}_getConfig(t){return t=this._mergeConfigObj(t),t=this._configAfterMerge(t),this._typeCheckConfig(t),t}_configAfterMerge(t){return t}_mergeConfigObj(t,n){const s=bt(n)?vt.getDataAttribute(n,"config"):{};return{...this.constructor.Default,...typeof s=="object"?s:{},...bt(n)?vt.getDataAttributes(n):{},...typeof t=="object"?t:{}}}_typeCheckConfig(t,n=this.constructor.DefaultType){for(const s of Object.keys(n)){const i=n[s],o=t[s],r=bt(o)?"element":td(o);if(!new RegExp(i).test(r))throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${s}" provided type "${r}" but expected type "${i}".`)}}}const pd="5.2.3";class st extends ms{constructor(t,n){super(),t=Bt(t),t&&(this._element=t,this._config=this._getConfig(n),Ci.set(this._element,this.constructor.DATA_KEY,this))}dispose(){Ci.remove(this._element,this.constructor.DATA_KEY),B.off(this._element,this.constructor.EVENT_KEY);for(const t of Object.getOwnPropertyNames(this))this[t]=null}_queueCallback(t,n,s=!0){Sl(t,n,s)}_getConfig(t){return t=this._mergeConfigObj(t,this._element),t=this._configAfterMerge(t),this._typeCheckConfig(t),t}static getInstance(t){return Ci.get(Bt(t),this.DATA_KEY)}static getOrCreateInstance(t,n={}){return this.getInstance(t)||new this(t,typeof n=="object"?n:null)}static get VERSION(){return pd}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}static eventName(t){return`${t}${this.EVENT_KEY}`}}const si=(e,t="hide")=>{const n=`click.dismiss${e.EVENT_KEY}`,s=e.NAME;B.on(document,n,`[data-bs-dismiss="${s}"]`,function(i){if(["A","AREA"].includes(this.tagName)&&i.preventDefault(),Rt(this))return;const o=_t(this)||this.closest(`.${s}`);e.getOrCreateInstance(o)[t]()})},fd="alert",hd="bs.alert",Nl=`.${hd}`,md=`close${Nl}`,gd=`closed${Nl}`,_d="fade",bd="show";class ii extends st{static get NAME(){return fd}close(){if(B.trigger(this._element,md).defaultPrevented)return;this._element.classList.remove(bd);const n=this._element.classList.contains(_d);this._queueCallback(()=>this._destroyElement(),this._element,n)}_destroyElement(){this._element.remove(),B.trigger(this._element,gd),this.dispose()}static jQueryInterface(t){return this.each(function(){const n=ii.getOrCreateInstance(this);if(typeof t=="string"){if(n[t]===void 0||t.startsWith("_")||t==="constructor")throw new TypeError(`No method named "${t}"`);n[t](this)}})}}si(ii,"close");Xe(ii);const vd="button",yd="bs.button",wd=`.${yd}`,kd=".data-api",Ed="active",xr='[data-bs-toggle="button"]',Td=`click${wd}${kd}`;class oi extends st{static get NAME(){return vd}toggle(){this._element.setAttribute("aria-pressed",this._element.classList.toggle(Ed))}static jQueryInterface(t){return this.each(function(){const n=oi.getOrCreateInstance(this);t==="toggle"&&n[t]()})}}B.on(document,Td,xr,e=>{e.preventDefault();const t=e.target.closest(xr);oi.getOrCreateInstance(t).toggle()});Xe(oi);const te={find(e,t=document.documentElement){return[].concat(...Element.prototype.querySelectorAll.call(t,e))},findOne(e,t=document.documentElement){return Element.prototype.querySelector.call(t,e)},children(e,t){return[].concat(...e.children).filter(n=>n.matches(t))},parents(e,t){const n=[];let s=e.parentNode.closest(t);for(;s;)n.push(s),s=s.parentNode.closest(t);return n},prev(e,t){let n=e.previousElementSibling;for(;n;){if(n.matches(t))return[n];n=n.previousElementSibling}return[]},next(e,t){let n=e.nextElementSibling;for(;n;){if(n.matches(t))return[n];n=n.nextElementSibling}return[]},focusableChildren(e){const t=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map(n=>`${n}:not([tabindex^="-"])`).join(",");return this.find(t,e).filter(n=>!Rt(n)&&Nn(n))}},Sd="swipe",Bn=".bs.swipe",Ad=`touchstart${Bn}`,xd=`touchmove${Bn}`,Cd=`touchend${Bn}`,Pd=`pointerdown${Bn}`,Id=`pointerup${Bn}`,Od="touch",Nd="pen",Bd="pointer-event",Rd=40,Dd={endCallback:null,leftCallback:null,rightCallback:null},Md={endCallback:"(function|null)",leftCallback:"(function|null)",rightCallback:"(function|null)"};class Us extends ms{constructor(t,n){super(),this._element=t,!(!t||!Us.isSupported())&&(this._config=this._getConfig(n),this._deltaX=0,this._supportPointerEvents=!!window.PointerEvent,this._initEvents())}static get Default(){return Dd}static get DefaultType(){return Md}static get NAME(){return Sd}dispose(){B.off(this._element,Bn)}_start(t){if(!this._supportPointerEvents){this._deltaX=t.touches[0].clientX;return}this._eventIsPointerPenTouch(t)&&(this._deltaX=t.clientX)}_end(t){this._eventIsPointerPenTouch(t)&&(this._deltaX=t.clientX-this._deltaX),this._handleSwipe(),gt(this._config.endCallback)}_move(t){this._deltaX=t.touches&&t.touches.length>1?0:t.touches[0].clientX-this._deltaX}_handleSwipe(){const t=Math.abs(this._deltaX);if(t<=Rd)return;const n=t/this._deltaX;this._deltaX=0,n&&gt(n>0?this._config.rightCallback:this._config.leftCallback)}_initEvents(){this._supportPointerEvents?(B.on(this._element,Pd,t=>this._start(t)),B.on(this._element,Id,t=>this._end(t)),this._element.classList.add(Bd)):(B.on(this._element,Ad,t=>this._start(t)),B.on(this._element,xd,t=>this._move(t)),B.on(this._element,Cd,t=>this._end(t)))}_eventIsPointerPenTouch(t){return this._supportPointerEvents&&(t.pointerType===Nd||t.pointerType===Od)}static isSupported(){return"ontouchstart"in document.documentElement||navigator.maxTouchPoints>0}}const Ld="carousel",$d="bs.carousel",Wt=`.${$d}`,Bl=".data-api",Wd="ArrowLeft",Fd="ArrowRight",Vd=500,Un="next",an="prev",pn="left",Bs="right",Hd=`slide${Wt}`,Ii=`slid${Wt}`,Ud=`keydown${Wt}`,jd=`mouseenter${Wt}`,qd=`mouseleave${Wt}`,zd=`dragstart${Wt}`,Kd=`load${Wt}${Bl}`,Gd=`click${Wt}${Bl}`,Rl="carousel",ys="active",Yd="slide",Xd="carousel-item-end",Qd="carousel-item-start",Jd="carousel-item-next",Zd="carousel-item-prev",Dl=".active",Ml=".carousel-item",ep=Dl+Ml,tp=".carousel-item img",np=".carousel-indicators",sp="[data-bs-slide], [data-bs-slide-to]",ip='[data-bs-ride="carousel"]',op={[Wd]:Bs,[Fd]:pn},rp={interval:5e3,keyboard:!0,pause:"hover",ride:!1,touch:!0,wrap:!0},ap={interval:"(number|boolean)",keyboard:"boolean",pause:"(string|boolean)",ride:"(boolean|string)",touch:"boolean",wrap:"boolean"};class gs extends st{constructor(t,n){super(t,n),this._interval=null,this._activeElement=null,this._isSliding=!1,this.touchTimeout=null,this._swipeHelper=null,this._indicatorsElement=te.findOne(np,this._element),this._addEventListeners(),this._config.ride===Rl&&this.cycle()}static get Default(){return rp}static get DefaultType(){return ap}static get NAME(){return Ld}next(){this._slide(Un)}nextWhenVisible(){!document.hidden&&Nn(this._element)&&this.next()}prev(){this._slide(an)}pause(){this._isSliding&&kl(this._element),this._clearInterval()}cycle(){this._clearInterval(),this._updateInterval(),this._interval=setInterval(()=>this.nextWhenVisible(),this._config.interval)}_maybeEnableCycle(){if(this._config.ride){if(this._isSliding){B.one(this._element,Ii,()=>this.cycle());return}this.cycle()}}to(t){const n=this._getItems();if(t>n.length-1||t<0)return;if(this._isSliding){B.one(this._element,Ii,()=>this.to(t));return}const s=this._getItemIndex(this._getActive());if(s===t)return;const i=t>s?Un:an;this._slide(i,n[t])}dispose(){this._swipeHelper&&this._swipeHelper.dispose(),super.dispose()}_configAfterMerge(t){return t.defaultInterval=t.interval,t}_addEventListeners(){this._config.keyboard&&B.on(this._element,Ud,t=>this._keydown(t)),this._config.pause==="hover"&&(B.on(this._element,jd,()=>this.pause()),B.on(this._element,qd,()=>this._maybeEnableCycle())),this._config.touch&&Us.isSupported()&&this._addTouchEventListeners()}_addTouchEventListeners(){for(const s of te.find(tp,this._element))B.on(s,zd,i=>i.preventDefault());const n={leftCallback:()=>this._slide(this._directionToOrder(pn)),rightCallback:()=>this._slide(this._directionToOrder(Bs)),endCallback:()=>{this._config.pause==="hover"&&(this.pause(),this.touchTimeout&&clearTimeout(this.touchTimeout),this.touchTimeout=setTimeout(()=>this._maybeEnableCycle(),Vd+this._config.interval))}};this._swipeHelper=new Us(this._element,n)}_keydown(t){if(/input|textarea/i.test(t.target.tagName))return;const n=op[t.key];n&&(t.preventDefault(),this._slide(this._directionToOrder(n)))}_getItemIndex(t){return this._getItems().indexOf(t)}_setActiveIndicatorElement(t){if(!this._indicatorsElement)return;const n=te.findOne(Dl,this._indicatorsElement);n.classList.remove(ys),n.removeAttribute("aria-current");const s=te.findOne(`[data-bs-slide-to="${t}"]`,this._indicatorsElement);s&&(s.classList.add(ys),s.setAttribute("aria-current","true"))}_updateInterval(){const t=this._activeElement||this._getActive();if(!t)return;const n=Number.parseInt(t.getAttribute("data-bs-interval"),10);this._config.interval=n||this._config.defaultInterval}_slide(t,n=null){if(this._isSliding)return;const s=this._getActive(),i=t===Un,o=n||Lo(this._getItems(),s,i,this._config.wrap);if(o===s)return;const r=this._getItemIndex(o),a=g=>B.trigger(this._element,g,{relatedTarget:o,direction:this._orderToDirection(t),from:this._getItemIndex(s),to:r});if(a(Hd).defaultPrevented||!s||!o)return;const c=!!this._interval;this.pause(),this._isSliding=!0,this._setActiveIndicatorElement(r),this._activeElement=o;const u=i?Qd:Xd,d=i?Jd:Zd;o.classList.add(d),hs(o),s.classList.add(u),o.classList.add(u);const f=()=>{o.classList.remove(u,d),o.classList.add(ys),s.classList.remove(ys,d,u),this._isSliding=!1,a(Ii)};this._queueCallback(f,s,this._isAnimated()),c&&this.cycle()}_isAnimated(){return this._element.classList.contains(Yd)}_getActive(){return te.findOne(ep,this._element)}_getItems(){return te.find(Ml,this._element)}_clearInterval(){this._interval&&(clearInterval(this._interval),this._interval=null)}_directionToOrder(t){return Ye()?t===pn?an:Un:t===pn?Un:an}_orderToDirection(t){return Ye()?t===an?pn:Bs:t===an?Bs:pn}static jQueryInterface(t){return this.each(function(){const n=gs.getOrCreateInstance(this,t);if(typeof t=="number"){n.to(t);return}if(typeof t=="string"){if(n[t]===void 0||t.startsWith("_")||t==="constructor")throw new TypeError(`No method named "${t}"`);n[t]()}})}}B.on(document,Gd,sp,function(e){const t=_t(this);if(!t||!t.classList.contains(Rl))return;e.preventDefault();const n=gs.getOrCreateInstance(t),s=this.getAttribute("data-bs-slide-to");if(s){n.to(s),n._maybeEnableCycle();return}if(vt.getDataAttribute(this,"slide")==="next"){n.next(),n._maybeEnableCycle();return}n.prev(),n._maybeEnableCycle()});B.on(window,Kd,()=>{const e=te.find(ip);for(const t of e)gs.getOrCreateInstance(t)});Xe(gs);const lp="collapse",cp="bs.collapse",_s=`.${cp}`,up=".data-api",dp=`show${_s}`,pp=`shown${_s}`,fp=`hide${_s}`,hp=`hidden${_s}`,mp=`click${_s}${up}`,Oi="show",mn="collapse",ws="collapsing",gp="collapsed",_p=`:scope .${mn} .${mn}`,bp="collapse-horizontal",vp="width",yp="height",wp=".collapse.show, .collapse.collapsing",io='[data-bs-toggle="collapse"]',kp={parent:null,toggle:!0},Ep={parent:"(null|element)",toggle:"boolean"};class ss extends st{constructor(t,n){super(t,n),this._isTransitioning=!1,this._triggerArray=[];const s=te.find(io);for(const i of s){const o=wl(i),r=te.find(o).filter(a=>a===this._element);o!==null&&r.length&&this._triggerArray.push(i)}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return kp}static get DefaultType(){return Ep}static get NAME(){return lp}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let t=[];if(this._config.parent&&(t=this._getFirstLevelChildren(wp).filter(a=>a!==this._element).map(a=>ss.getOrCreateInstance(a,{toggle:!1}))),t.length&&t[0]._isTransitioning||B.trigger(this._element,dp).defaultPrevented)return;for(const a of t)a.hide();const s=this._getDimension();this._element.classList.remove(mn),this._element.classList.add(ws),this._element.style[s]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;const i=()=>{this._isTransitioning=!1,this._element.classList.remove(ws),this._element.classList.add(mn,Oi),this._element.style[s]="",B.trigger(this._element,pp)},r=`scroll${s[0].toUpperCase()+s.slice(1)}`;this._queueCallback(i,this._element,!0),this._element.style[s]=`${this._element[r]}px`}hide(){if(this._isTransitioning||!this._isShown()||B.trigger(this._element,fp).defaultPrevented)return;const n=this._getDimension();this._element.style[n]=`${this._element.getBoundingClientRect()[n]}px`,hs(this._element),this._element.classList.add(ws),this._element.classList.remove(mn,Oi);for(const i of this._triggerArray){const o=_t(i);o&&!this._isShown(o)&&this._addAriaAndCollapsedClass([i],!1)}this._isTransitioning=!0;const s=()=>{this._isTransitioning=!1,this._element.classList.remove(ws),this._element.classList.add(mn),B.trigger(this._element,hp)};this._element.style[n]="",this._queueCallback(s,this._element,!0)}_isShown(t=this._element){return t.classList.contains(Oi)}_configAfterMerge(t){return t.toggle=!!t.toggle,t.parent=Bt(t.parent),t}_getDimension(){return this._element.classList.contains(bp)?vp:yp}_initializeChildren(){if(!this._config.parent)return;const t=this._getFirstLevelChildren(io);for(const n of t){const s=_t(n);s&&this._addAriaAndCollapsedClass([n],this._isShown(s))}}_getFirstLevelChildren(t){const n=te.find(_p,this._config.parent);return te.find(t,this._config.parent).filter(s=>!n.includes(s))}_addAriaAndCollapsedClass(t,n){if(t.length)for(const s of t)s.classList.toggle(gp,!n),s.setAttribute("aria-expanded",n)}static jQueryInterface(t){const n={};return typeof t=="string"&&/show|hide/.test(t)&&(n.toggle=!1),this.each(function(){const s=ss.getOrCreateInstance(this,n);if(typeof t=="string"){if(typeof s[t]>"u")throw new TypeError(`No method named "${t}"`);s[t]()}})}}B.on(document,mp,io,function(e){(e.target.tagName==="A"||e.delegateTarget&&e.delegateTarget.tagName==="A")&&e.preventDefault();const t=wl(this),n=te.find(t);for(const s of n)ss.getOrCreateInstance(s,{toggle:!1}).toggle()});Xe(ss);const Cr="dropdown",Tp="bs.dropdown",nn=`.${Tp}`,Wo=".data-api",Sp="Escape",Pr="Tab",Ap="ArrowUp",Ir="ArrowDown",xp=2,Cp=`hide${nn}`,Pp=`hidden${nn}`,Ip=`show${nn}`,Op=`shown${nn}`,Ll=`click${nn}${Wo}`,$l=`keydown${nn}${Wo}`,Np=`keyup${nn}${Wo}`,fn="show",Bp="dropup",Rp="dropend",Dp="dropstart",Mp="dropup-center",Lp="dropdown-center",zt='[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',$p=`${zt}.${fn}`,Rs=".dropdown-menu",Wp=".navbar",Fp=".navbar-nav",Vp=".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",Hp=Ye()?"top-end":"top-start",Up=Ye()?"top-start":"top-end",jp=Ye()?"bottom-end":"bottom-start",qp=Ye()?"bottom-start":"bottom-end",zp=Ye()?"left-start":"right-start",Kp=Ye()?"right-start":"left-start",Gp="top",Yp="bottom",Xp={autoClose:!0,boundary:"clippingParents",display:"dynamic",offset:[0,2],popperConfig:null,reference:"toggle"},Qp={autoClose:"(boolean|string)",boundary:"(string|element)",display:"string",offset:"(array|string|function)",popperConfig:"(null|object|function)",reference:"(string|element|object)"};class ut extends st{constructor(t,n){super(t,n),this._popper=null,this._parent=this._element.parentNode,this._menu=te.next(this._element,Rs)[0]||te.prev(this._element,Rs)[0]||te.findOne(Rs,this._parent),this._inNavbar=this._detectNavbar()}static get Default(){return Xp}static get DefaultType(){return Qp}static get NAME(){return Cr}toggle(){return this._isShown()?this.hide():this.show()}show(){if(Rt(this._element)||this._isShown())return;const t={relatedTarget:this._element};if(!B.trigger(this._element,Ip,t).defaultPrevented){if(this._createPopper(),"ontouchstart"in document.documentElement&&!this._parent.closest(Fp))for(const s of[].concat(...document.body.children))B.on(s,"mouseover",Hs);this._element.focus(),this._element.setAttribute("aria-expanded",!0),this._menu.classList.add(fn),this._element.classList.add(fn),B.trigger(this._element,Op,t)}}hide(){if(Rt(this._element)||!this._isShown())return;const t={relatedTarget:this._element};this._completeHide(t)}dispose(){this._popper&&this._popper.destroy(),super.dispose()}update(){this._inNavbar=this._detectNavbar(),this._popper&&this._popper.update()}_completeHide(t){if(!B.trigger(this._element,Cp,t).defaultPrevented){if("ontouchstart"in document.documentElement)for(const s of[].concat(...document.body.children))B.off(s,"mouseover",Hs);this._popper&&this._popper.destroy(),this._menu.classList.remove(fn),this._element.classList.remove(fn),this._element.setAttribute("aria-expanded","false"),vt.removeDataAttribute(this._menu,"popper"),B.trigger(this._element,Pp,t)}}_getConfig(t){if(t=super._getConfig(t),typeof t.reference=="object"&&!bt(t.reference)&&typeof t.reference.getBoundingClientRect!="function")throw new TypeError(`${Cr.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);return t}_createPopper(){if(typeof vl>"u")throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");let t=this._element;this._config.reference==="parent"?t=this._parent:bt(this._config.reference)?t=Bt(this._config.reference):typeof this._config.reference=="object"&&(t=this._config.reference);const n=this._getPopperConfig();this._popper=Mo(t,this._menu,n)}_isShown(){return this._menu.classList.contains(fn)}_getPlacement(){const t=this._parent;if(t.classList.contains(Rp))return zp;if(t.classList.contains(Dp))return Kp;if(t.classList.contains(Mp))return Gp;if(t.classList.contains(Lp))return Yp;const n=getComputedStyle(this._menu).getPropertyValue("--bs-position").trim()==="end";return t.classList.contains(Bp)?n?Up:Hp:n?qp:jp}_detectNavbar(){return this._element.closest(Wp)!==null}_getOffset(){const{offset:t}=this._config;return typeof t=="string"?t.split(",").map(n=>Number.parseInt(n,10)):typeof t=="function"?n=>t(n,this._element):t}_getPopperConfig(){const t={placement:this._getPlacement(),modifiers:[{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"offset",options:{offset:this._getOffset()}}]};return(this._inNavbar||this._config.display==="static")&&(vt.setDataAttribute(this._menu,"popper","static"),t.modifiers=[{name:"applyStyles",enabled:!1}]),{...t,...typeof this._config.popperConfig=="function"?this._config.popperConfig(t):this._config.popperConfig}}_selectMenuItem({key:t,target:n}){const s=te.find(Vp,this._menu).filter(i=>Nn(i));s.length&&Lo(s,n,t===Ir,!s.includes(n)).focus()}static jQueryInterface(t){return this.each(function(){const n=ut.getOrCreateInstance(this,t);if(typeof t=="string"){if(typeof n[t]>"u")throw new TypeError(`No method named "${t}"`);n[t]()}})}static clearMenus(t){if(t.button===xp||t.type==="keyup"&&t.key!==Pr)return;const n=te.find($p);for(const s of n){const i=ut.getInstance(s);if(!i||i._config.autoClose===!1)continue;const o=t.composedPath(),r=o.includes(i._menu);if(o.includes(i._element)||i._config.autoClose==="inside"&&!r||i._config.autoClose==="outside"&&r||i._menu.contains(t.target)&&(t.type==="keyup"&&t.key===Pr||/input|select|option|textarea|form/i.test(t.target.tagName)))continue;const a={relatedTarget:i._element};t.type==="click"&&(a.clickEvent=t),i._completeHide(a)}}static dataApiKeydownHandler(t){const n=/input|textarea/i.test(t.target.tagName),s=t.key===Sp,i=[Ap,Ir].includes(t.key);if(!i&&!s||n&&!s)return;t.preventDefault();const o=this.matches(zt)?this:te.prev(this,zt)[0]||te.next(this,zt)[0]||te.findOne(zt,t.delegateTarget.parentNode),r=ut.getOrCreateInstance(o);if(i){t.stopPropagation(),r.show(),r._selectMenuItem(t);return}r._isShown()&&(t.stopPropagation(),r.hide(),o.focus())}}B.on(document,$l,zt,ut.dataApiKeydownHandler);B.on(document,$l,Rs,ut.dataApiKeydownHandler);B.on(document,Ll,ut.clearMenus);B.on(document,Np,ut.clearMenus);B.on(document,Ll,zt,function(e){e.preventDefault(),ut.getOrCreateInstance(this).toggle()});Xe(ut);const Or=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",Nr=".sticky-top",ks="padding-right",Br="margin-right";class oo{constructor(){this._element=document.body}getWidth(){const t=document.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}hide(){const t=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,ks,n=>n+t),this._setElementAttributes(Or,ks,n=>n+t),this._setElementAttributes(Nr,Br,n=>n-t)}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,ks),this._resetElementAttributes(Or,ks),this._resetElementAttributes(Nr,Br)}isOverflowing(){return this.getWidth()>0}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(t,n,s){const i=this.getWidth(),o=r=>{if(r!==this._element&&window.innerWidth>r.clientWidth+i)return;this._saveInitialAttribute(r,n);const a=window.getComputedStyle(r).getPropertyValue(n);r.style.setProperty(n,`${s(Number.parseFloat(a))}px`)};this._applyManipulationCallback(t,o)}_saveInitialAttribute(t,n){const s=t.style.getPropertyValue(n);s&&vt.setDataAttribute(t,n,s)}_resetElementAttributes(t,n){const s=i=>{const o=vt.getDataAttribute(i,n);if(o===null){i.style.removeProperty(n);return}vt.removeDataAttribute(i,n),i.style.setProperty(n,o)};this._applyManipulationCallback(t,s)}_applyManipulationCallback(t,n){if(bt(t)){n(t);return}for(const s of te.find(t,this._element))n(s)}}const Wl="backdrop",Jp="fade",Rr="show",Dr=`mousedown.bs.${Wl}`,Zp={className:"modal-backdrop",clickCallback:null,isAnimated:!1,isVisible:!0,rootElement:"body"},ef={className:"string",clickCallback:"(function|null)",isAnimated:"boolean",isVisible:"boolean",rootElement:"(element|string)"};class Fl extends ms{constructor(t){super(),this._config=this._getConfig(t),this._isAppended=!1,this._element=null}static get Default(){return Zp}static get DefaultType(){return ef}static get NAME(){return Wl}show(t){if(!this._config.isVisible){gt(t);return}this._append();const n=this._getElement();this._config.isAnimated&&hs(n),n.classList.add(Rr),this._emulateAnimation(()=>{gt(t)})}hide(t){if(!this._config.isVisible){gt(t);return}this._getElement().classList.remove(Rr),this._emulateAnimation(()=>{this.dispose(),gt(t)})}dispose(){this._isAppended&&(B.off(this._element,Dr),this._element.remove(),this._isAppended=!1)}_getElement(){if(!this._element){const t=document.createElement("div");t.className=this._config.className,this._config.isAnimated&&t.classList.add(Jp),this._element=t}return this._element}_configAfterMerge(t){return t.rootElement=Bt(t.rootElement),t}_append(){if(this._isAppended)return;const t=this._getElement();this._config.rootElement.append(t),B.on(t,Dr,()=>{gt(this._config.clickCallback)}),this._isAppended=!0}_emulateAnimation(t){Sl(t,this._getElement(),this._config.isAnimated)}}const tf="focustrap",nf="bs.focustrap",js=`.${nf}`,sf=`focusin${js}`,of=`keydown.tab${js}`,rf="Tab",af="forward",Mr="backward",lf={autofocus:!0,trapElement:null},cf={autofocus:"boolean",trapElement:"element"};class Vl extends ms{constructor(t){super(),this._config=this._getConfig(t),this._isActive=!1,this._lastTabNavDirection=null}static get Default(){return lf}static get DefaultType(){return cf}static get NAME(){return tf}activate(){this._isActive||(this._config.autofocus&&this._config.trapElement.focus(),B.off(document,js),B.on(document,sf,t=>this._handleFocusin(t)),B.on(document,of,t=>this._handleKeydown(t)),this._isActive=!0)}deactivate(){this._isActive&&(this._isActive=!1,B.off(document,js))}_handleFocusin(t){const{trapElement:n}=this._config;if(t.target===document||t.target===n||n.contains(t.target))return;const s=te.focusableChildren(n);s.length===0?n.focus():this._lastTabNavDirection===Mr?s[s.length-1].focus():s[0].focus()}_handleKeydown(t){t.key===rf&&(this._lastTabNavDirection=t.shiftKey?Mr:af)}}const uf="modal",df="bs.modal",it=`.${df}`,pf=".data-api",ff="Escape",hf=`hide${it}`,mf=`hidePrevented${it}`,Hl=`hidden${it}`,Ul=`show${it}`,gf=`shown${it}`,_f=`resize${it}`,bf=`click.dismiss${it}`,vf=`mousedown.dismiss${it}`,yf=`keydown.dismiss${it}`,wf=`click${it}${pf}`,Lr="modal-open",kf="fade",$r="show",Ni="modal-static",Ef=".modal.show",Tf=".modal-dialog",Sf=".modal-body",Af='[data-bs-toggle="modal"]',xf={backdrop:!0,focus:!0,keyboard:!0},Cf={backdrop:"(boolean|string)",focus:"boolean",keyboard:"boolean"};class Tn extends st{constructor(t,n){super(t,n),this._dialog=te.findOne(Tf,this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._isTransitioning=!1,this._scrollBar=new oo,this._addEventListeners()}static get Default(){return xf}static get DefaultType(){return Cf}static get NAME(){return uf}toggle(t){return this._isShown?this.hide():this.show(t)}show(t){this._isShown||this._isTransitioning||B.trigger(this._element,Ul,{relatedTarget:t}).defaultPrevented||(this._isShown=!0,this._isTransitioning=!0,this._scrollBar.hide(),document.body.classList.add(Lr),this._adjustDialog(),this._backdrop.show(()=>this._showElement(t)))}hide(){!this._isShown||this._isTransitioning||B.trigger(this._element,hf).defaultPrevented||(this._isShown=!1,this._isTransitioning=!0,this._focustrap.deactivate(),this._element.classList.remove($r),this._queueCallback(()=>this._hideModal(),this._element,this._isAnimated()))}dispose(){for(const t of[window,this._dialog])B.off(t,it);this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new Fl({isVisible:!!this._config.backdrop,isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new Vl({trapElement:this._element})}_showElement(t){document.body.contains(this._element)||document.body.append(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0;const n=te.findOne(Sf,this._dialog);n&&(n.scrollTop=0),hs(this._element),this._element.classList.add($r);const s=()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,B.trigger(this._element,gf,{relatedTarget:t})};this._queueCallback(s,this._dialog,this._isAnimated())}_addEventListeners(){B.on(this._element,yf,t=>{if(t.key===ff){if(this._config.keyboard){t.preventDefault(),this.hide();return}this._triggerBackdropTransition()}}),B.on(window,_f,()=>{this._isShown&&!this._isTransitioning&&this._adjustDialog()}),B.on(this._element,vf,t=>{B.one(this._element,bf,n=>{if(!(this._element!==t.target||this._element!==n.target)){if(this._config.backdrop==="static"){this._triggerBackdropTransition();return}this._config.backdrop&&this.hide()}})})}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide(()=>{document.body.classList.remove(Lr),this._resetAdjustments(),this._scrollBar.reset(),B.trigger(this._element,Hl)})}_isAnimated(){return this._element.classList.contains(kf)}_triggerBackdropTransition(){if(B.trigger(this._element,mf).defaultPrevented)return;const n=this._element.scrollHeight>document.documentElement.clientHeight,s=this._element.style.overflowY;s==="hidden"||this._element.classList.contains(Ni)||(n||(this._element.style.overflowY="hidden"),this._element.classList.add(Ni),this._queueCallback(()=>{this._element.classList.remove(Ni),this._queueCallback(()=>{this._element.style.overflowY=s},this._dialog)},this._dialog),this._element.focus())}_adjustDialog(){const t=this._element.scrollHeight>document.documentElement.clientHeight,n=this._scrollBar.getWidth(),s=n>0;if(s&&!t){const i=Ye()?"paddingLeft":"paddingRight";this._element.style[i]=`${n}px`}if(!s&&t){const i=Ye()?"paddingRight":"paddingLeft";this._element.style[i]=`${n}px`}}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}static jQueryInterface(t,n){return this.each(function(){const s=Tn.getOrCreateInstance(this,t);if(typeof t=="string"){if(typeof s[t]>"u")throw new TypeError(`No method named "${t}"`);s[t](n)}})}}B.on(document,wf,Af,function(e){const t=_t(this);["A","AREA"].includes(this.tagName)&&e.preventDefault(),B.one(t,Ul,i=>{i.defaultPrevented||B.one(t,Hl,()=>{Nn(this)&&this.focus()})});const n=te.findOne(Ef);n&&Tn.getInstance(n).hide(),Tn.getOrCreateInstance(t).toggle(this)});si(Tn);Xe(Tn);const Pf="offcanvas",If="bs.offcanvas",kt=`.${If}`,jl=".data-api",Of=`load${kt}${jl}`,Nf="Escape",Wr="show",Fr="showing",Vr="hiding",Bf="offcanvas-backdrop",ql=".offcanvas.show",Rf=`show${kt}`,Df=`shown${kt}`,Mf=`hide${kt}`,Hr=`hidePrevented${kt}`,zl=`hidden${kt}`,Lf=`resize${kt}`,$f=`click${kt}${jl}`,Wf=`keydown.dismiss${kt}`,Ff='[data-bs-toggle="offcanvas"]',Vf={backdrop:!0,keyboard:!0,scroll:!1},Hf={backdrop:"(boolean|string)",keyboard:"boolean",scroll:"boolean"};class Dt extends st{constructor(t,n){super(t,n),this._isShown=!1,this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._addEventListeners()}static get Default(){return Vf}static get DefaultType(){return Hf}static get NAME(){return Pf}toggle(t){return this._isShown?this.hide():this.show(t)}show(t){if(this._isShown||B.trigger(this._element,Rf,{relatedTarget:t}).defaultPrevented)return;this._isShown=!0,this._backdrop.show(),this._config.scroll||new oo().hide(),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.classList.add(Fr);const s=()=>{(!this._config.scroll||this._config.backdrop)&&this._focustrap.activate(),this._element.classList.add(Wr),this._element.classList.remove(Fr),B.trigger(this._element,Df,{relatedTarget:t})};this._queueCallback(s,this._element,!0)}hide(){if(!this._isShown||B.trigger(this._element,Mf).defaultPrevented)return;this._focustrap.deactivate(),this._element.blur(),this._isShown=!1,this._element.classList.add(Vr),this._backdrop.hide();const n=()=>{this._element.classList.remove(Wr,Vr),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._config.scroll||new oo().reset(),B.trigger(this._element,zl)};this._queueCallback(n,this._element,!0)}dispose(){this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}_initializeBackDrop(){const t=()=>{if(this._config.backdrop==="static"){B.trigger(this._element,Hr);return}this.hide()},n=!!this._config.backdrop;return new Fl({className:Bf,isVisible:n,isAnimated:!0,rootElement:this._element.parentNode,clickCallback:n?t:null})}_initializeFocusTrap(){return new Vl({trapElement:this._element})}_addEventListeners(){B.on(this._element,Wf,t=>{if(t.key===Nf){if(!this._config.keyboard){B.trigger(this._element,Hr);return}this.hide()}})}static jQueryInterface(t){return this.each(function(){const n=Dt.getOrCreateInstance(this,t);if(typeof t=="string"){if(n[t]===void 0||t.startsWith("_")||t==="constructor")throw new TypeError(`No method named "${t}"`);n[t](this)}})}}B.on(document,$f,Ff,function(e){const t=_t(this);if(["A","AREA"].includes(this.tagName)&&e.preventDefault(),Rt(this))return;B.one(t,zl,()=>{Nn(this)&&this.focus()});const n=te.findOne(ql);n&&n!==t&&Dt.getInstance(n).hide(),Dt.getOrCreateInstance(t).toggle(this)});B.on(window,Of,()=>{for(const e of te.find(ql))Dt.getOrCreateInstance(e).show()});B.on(window,Lf,()=>{for(const e of te.find("[aria-modal][class*=show][class*=offcanvas-]"))getComputedStyle(e).position!=="fixed"&&Dt.getOrCreateInstance(e).hide()});si(Dt);Xe(Dt);const Uf=new Set(["background","cite","href","itemtype","longdesc","poster","src","xlink:href"]),jf=/^aria-[\w-]*$/i,qf=/^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i,zf=/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i,Kf=(e,t)=>{const n=e.nodeName.toLowerCase();return t.includes(n)?Uf.has(n)?!!(qf.test(e.nodeValue)||zf.test(e.nodeValue)):!0:t.filter(s=>s instanceof RegExp).some(s=>s.test(n))},Kl={"*":["class","dir","id","lang","role",jf],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]};function Gf(e,t,n){if(!e.length)return e;if(n&&typeof n=="function")return n(e);const i=new window.DOMParser().parseFromString(e,"text/html"),o=[].concat(...i.body.querySelectorAll("*"));for(const r of o){const a=r.nodeName.toLowerCase();if(!Object.keys(t).includes(a)){r.remove();continue}const l=[].concat(...r.attributes),c=[].concat(t["*"]||[],t[a]||[]);for(const u of l)Kf(u,c)||r.removeAttribute(u.nodeName)}return i.body.innerHTML}const Yf="TemplateFactory",Xf={allowList:Kl,content:{},extraClass:"",html:!1,sanitize:!0,sanitizeFn:null,template:"<div></div>"},Qf={allowList:"object",content:"object",extraClass:"(string|function)",html:"boolean",sanitize:"boolean",sanitizeFn:"(null|function)",template:"string"},Jf={entry:"(string|element|function|null)",selector:"(string|element)"};class Zf extends ms{constructor(t){super(),this._config=this._getConfig(t)}static get Default(){return Xf}static get DefaultType(){return Qf}static get NAME(){return Yf}getContent(){return Object.values(this._config.content).map(t=>this._resolvePossibleFunction(t)).filter(Boolean)}hasContent(){return this.getContent().length>0}changeContent(t){return this._checkContent(t),this._config.content={...this._config.content,...t},this}toHtml(){const t=document.createElement("div");t.innerHTML=this._maybeSanitize(this._config.template);for(const[i,o]of Object.entries(this._config.content))this._setContent(t,o,i);const n=t.children[0],s=this._resolvePossibleFunction(this._config.extraClass);return s&&n.classList.add(...s.split(" ")),n}_typeCheckConfig(t){super._typeCheckConfig(t),this._checkContent(t.content)}_checkContent(t){for(const[n,s]of Object.entries(t))super._typeCheckConfig({selector:n,entry:s},Jf)}_setContent(t,n,s){const i=te.findOne(s,t);if(i){if(n=this._resolvePossibleFunction(n),!n){i.remove();return}if(bt(n)){this._putElementInTemplate(Bt(n),i);return}if(this._config.html){i.innerHTML=this._maybeSanitize(n);return}i.textContent=n}}_maybeSanitize(t){return this._config.sanitize?Gf(t,this._config.allowList,this._config.sanitizeFn):t}_resolvePossibleFunction(t){return typeof t=="function"?t(this):t}_putElementInTemplate(t,n){if(this._config.html){n.innerHTML="",n.append(t);return}n.textContent=t.textContent}}const eh="tooltip",th=new Set(["sanitize","allowList","sanitizeFn"]),Bi="fade",nh="modal",Es="show",sh=".tooltip-inner",Ur=`.${nh}`,jr="hide.bs.modal",jn="hover",Ri="focus",ih="click",oh="manual",rh="hide",ah="hidden",lh="show",ch="shown",uh="inserted",dh="click",ph="focusin",fh="focusout",hh="mouseenter",mh="mouseleave",gh={AUTO:"auto",TOP:"top",RIGHT:Ye()?"left":"right",BOTTOM:"bottom",LEFT:Ye()?"right":"left"},_h={allowList:Kl,animation:!0,boundary:"clippingParents",container:!1,customClass:"",delay:0,fallbackPlacements:["top","right","bottom","left"],html:!1,offset:[0,0],placement:"top",popperConfig:null,sanitize:!0,sanitizeFn:null,selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',title:"",trigger:"hover focus"},bh={allowList:"object",animation:"boolean",boundary:"(string|element)",container:"(string|element|boolean)",customClass:"(string|function)",delay:"(number|object)",fallbackPlacements:"array",html:"boolean",offset:"(array|string|function)",placement:"(string|function)",popperConfig:"(null|object|function)",sanitize:"boolean",sanitizeFn:"(null|function)",selector:"(string|boolean)",template:"string",title:"(string|element|function)",trigger:"string"};class Rn extends st{constructor(t,n){if(typeof vl>"u")throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");super(t,n),this._isEnabled=!0,this._timeout=0,this._isHovered=null,this._activeTrigger={},this._popper=null,this._templateFactory=null,this._newContent=null,this.tip=null,this._setListeners(),this._config.selector||this._fixTitle()}static get Default(){return _h}static get DefaultType(){return bh}static get NAME(){return eh}enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}toggleEnabled(){this._isEnabled=!this._isEnabled}toggle(){if(this._isEnabled){if(this._activeTrigger.click=!this._activeTrigger.click,this._isShown()){this._leave();return}this._enter()}}dispose(){clearTimeout(this._timeout),B.off(this._element.closest(Ur),jr,this._hideModalHandler),this._element.getAttribute("data-bs-original-title")&&this._element.setAttribute("title",this._element.getAttribute("data-bs-original-title")),this._disposePopper(),super.dispose()}show(){if(this._element.style.display==="none")throw new Error("Please use show on visible elements");if(!(this._isWithContent()&&this._isEnabled))return;const t=B.trigger(this._element,this.constructor.eventName(lh)),s=(El(this._element)||this._element.ownerDocument.documentElement).contains(this._element);if(t.defaultPrevented||!s)return;this._disposePopper();const i=this._getTipElement();this._element.setAttribute("aria-describedby",i.getAttribute("id"));const{container:o}=this._config;if(this._element.ownerDocument.documentElement.contains(this.tip)||(o.append(i),B.trigger(this._element,this.constructor.eventName(uh))),this._popper=this._createPopper(i),i.classList.add(Es),"ontouchstart"in document.documentElement)for(const a of[].concat(...document.body.children))B.on(a,"mouseover",Hs);const r=()=>{B.trigger(this._element,this.constructor.eventName(ch)),this._isHovered===!1&&this._leave(),this._isHovered=!1};this._queueCallback(r,this.tip,this._isAnimated())}hide(){if(!this._isShown()||B.trigger(this._element,this.constructor.eventName(rh)).defaultPrevented)return;if(this._getTipElement().classList.remove(Es),"ontouchstart"in document.documentElement)for(const i of[].concat(...document.body.children))B.off(i,"mouseover",Hs);this._activeTrigger[ih]=!1,this._activeTrigger[Ri]=!1,this._activeTrigger[jn]=!1,this._isHovered=null;const s=()=>{this._isWithActiveTrigger()||(this._isHovered||this._disposePopper(),this._element.removeAttribute("aria-describedby"),B.trigger(this._element,this.constructor.eventName(ah)))};this._queueCallback(s,this.tip,this._isAnimated())}update(){this._popper&&this._popper.update()}_isWithContent(){return!!this._getTitle()}_getTipElement(){return this.tip||(this.tip=this._createTipElement(this._newContent||this._getContentForTemplate())),this.tip}_createTipElement(t){const n=this._getTemplateFactory(t).toHtml();if(!n)return null;n.classList.remove(Bi,Es),n.classList.add(`bs-${this.constructor.NAME}-auto`);const s=nd(this.constructor.NAME).toString();return n.setAttribute("id",s),this._isAnimated()&&n.classList.add(Bi),n}setContent(t){this._newContent=t,this._isShown()&&(this._disposePopper(),this.show())}_getTemplateFactory(t){return this._templateFactory?this._templateFactory.changeContent(t):this._templateFactory=new Zf({...this._config,content:t,extraClass:this._resolvePossibleFunction(this._config.customClass)}),this._templateFactory}_getContentForTemplate(){return{[sh]:this._getTitle()}}_getTitle(){return this._resolvePossibleFunction(this._config.title)||this._element.getAttribute("data-bs-original-title")}_initializeOnDelegatedTarget(t){return this.constructor.getOrCreateInstance(t.delegateTarget,this._getDelegateConfig())}_isAnimated(){return this._config.animation||this.tip&&this.tip.classList.contains(Bi)}_isShown(){return this.tip&&this.tip.classList.contains(Es)}_createPopper(t){const n=typeof this._config.placement=="function"?this._config.placement.call(this,t,this._element):this._config.placement,s=gh[n.toUpperCase()];return Mo(this._element,t,this._getPopperConfig(s))}_getOffset(){const{offset:t}=this._config;return typeof t=="string"?t.split(",").map(n=>Number.parseInt(n,10)):typeof t=="function"?n=>t(n,this._element):t}_resolvePossibleFunction(t){return typeof t=="function"?t.call(this._element):t}_getPopperConfig(t){const n={placement:t,modifiers:[{name:"flip",options:{fallbackPlacements:this._config.fallbackPlacements}},{name:"offset",options:{offset:this._getOffset()}},{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"arrow",options:{element:`.${this.constructor.NAME}-arrow`}},{name:"preSetPlacement",enabled:!0,phase:"beforeMain",fn:s=>{this._getTipElement().setAttribute("data-popper-placement",s.state.placement)}}]};return{...n,...typeof this._config.popperConfig=="function"?this._config.popperConfig(n):this._config.popperConfig}}_setListeners(){const t=this._config.trigger.split(" ");for(const n of t)if(n==="click")B.on(this._element,this.constructor.eventName(dh),this._config.selector,s=>{this._initializeOnDelegatedTarget(s).toggle()});else if(n!==oh){const s=n===jn?this.constructor.eventName(hh):this.constructor.eventName(ph),i=n===jn?this.constructor.eventName(mh):this.constructor.eventName(fh);B.on(this._element,s,this._config.selector,o=>{const r=this._initializeOnDelegatedTarget(o);r._activeTrigger[o.type==="focusin"?Ri:jn]=!0,r._enter()}),B.on(this._element,i,this._config.selector,o=>{const r=this._initializeOnDelegatedTarget(o);r._activeTrigger[o.type==="focusout"?Ri:jn]=r._element.contains(o.relatedTarget),r._leave()})}this._hideModalHandler=()=>{this._element&&this.hide()},B.on(this._element.closest(Ur),jr,this._hideModalHandler)}_fixTitle(){const t=this._element.getAttribute("title");t&&(!this._element.getAttribute("aria-label")&&!this._element.textContent.trim()&&this._element.setAttribute("aria-label",t),this._element.setAttribute("data-bs-original-title",t),this._element.removeAttribute("title"))}_enter(){if(this._isShown()||this._isHovered){this._isHovered=!0;return}this._isHovered=!0,this._setTimeout(()=>{this._isHovered&&this.show()},this._config.delay.show)}_leave(){this._isWithActiveTrigger()||(this._isHovered=!1,this._setTimeout(()=>{this._isHovered||this.hide()},this._config.delay.hide))}_setTimeout(t,n){clearTimeout(this._timeout),this._timeout=setTimeout(t,n)}_isWithActiveTrigger(){return Object.values(this._activeTrigger).includes(!0)}_getConfig(t){const n=vt.getDataAttributes(this._element);for(const s of Object.keys(n))th.has(s)&&delete n[s];return t={...n,...typeof t=="object"&&t?t:{}},t=this._mergeConfigObj(t),t=this._configAfterMerge(t),this._typeCheckConfig(t),t}_configAfterMerge(t){return t.container=t.container===!1?document.body:Bt(t.container),typeof t.delay=="number"&&(t.delay={show:t.delay,hide:t.delay}),typeof t.title=="number"&&(t.title=t.title.toString()),typeof t.content=="number"&&(t.content=t.content.toString()),t}_getDelegateConfig(){const t={};for(const n in this._config)this.constructor.Default[n]!==this._config[n]&&(t[n]=this._config[n]);return t.selector=!1,t.trigger="manual",t}_disposePopper(){this._popper&&(this._popper.destroy(),this._popper=null),this.tip&&(this.tip.remove(),this.tip=null)}static jQueryInterface(t){return this.each(function(){const n=Rn.getOrCreateInstance(this,t);if(typeof t=="string"){if(typeof n[t]>"u")throw new TypeError(`No method named "${t}"`);n[t]()}})}}Xe(Rn);const vh="popover",yh=".popover-header",wh=".popover-body",kh={...Rn.Default,content:"",offset:[0,8],placement:"right",template:'<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',trigger:"click"},Eh={...Rn.DefaultType,content:"(null|string|element|function)"};class Fo extends Rn{static get Default(){return kh}static get DefaultType(){return Eh}static get NAME(){return vh}_isWithContent(){return this._getTitle()||this._getContent()}_getContentForTemplate(){return{[yh]:this._getTitle(),[wh]:this._getContent()}}_getContent(){return this._resolvePossibleFunction(this._config.content)}static jQueryInterface(t){return this.each(function(){const n=Fo.getOrCreateInstance(this,t);if(typeof t=="string"){if(typeof n[t]>"u")throw new TypeError(`No method named "${t}"`);n[t]()}})}}Xe(Fo);const Th="scrollspy",Sh="bs.scrollspy",Vo=`.${Sh}`,Ah=".data-api",xh=`activate${Vo}`,qr=`click${Vo}`,Ch=`load${Vo}${Ah}`,Ph="dropdown-item",ln="active",Ih='[data-bs-spy="scroll"]',Di="[href]",Oh=".nav, .list-group",zr=".nav-link",Nh=".nav-item",Bh=".list-group-item",Rh=`${zr}, ${Nh} > ${zr}, ${Bh}`,Dh=".dropdown",Mh=".dropdown-toggle",Lh={offset:null,rootMargin:"0px 0px -25%",smoothScroll:!1,target:null,threshold:[.1,.5,1]},$h={offset:"(number|null)",rootMargin:"string",smoothScroll:"boolean",target:"element",threshold:"array"};class ri extends st{constructor(t,n){super(t,n),this._targetLinks=new Map,this._observableSections=new Map,this._rootElement=getComputedStyle(this._element).overflowY==="visible"?null:this._element,this._activeTarget=null,this._observer=null,this._previousScrollData={visibleEntryTop:0,parentScrollTop:0},this.refresh()}static get Default(){return Lh}static get DefaultType(){return $h}static get NAME(){return Th}refresh(){this._initializeTargetsAndObservables(),this._maybeEnableSmoothScroll(),this._observer?this._observer.disconnect():this._observer=this._getNewObserver();for(const t of this._observableSections.values())this._observer.observe(t)}dispose(){this._observer.disconnect(),super.dispose()}_configAfterMerge(t){return t.target=Bt(t.target)||document.body,t.rootMargin=t.offset?`${t.offset}px 0px -30%`:t.rootMargin,typeof t.threshold=="string"&&(t.threshold=t.threshold.split(",").map(n=>Number.parseFloat(n))),t}_maybeEnableSmoothScroll(){this._config.smoothScroll&&(B.off(this._config.target,qr),B.on(this._config.target,qr,Di,t=>{const n=this._observableSections.get(t.target.hash);if(n){t.preventDefault();const s=this._rootElement||window,i=n.offsetTop-this._element.offsetTop;if(s.scrollTo){s.scrollTo({top:i,behavior:"smooth"});return}s.scrollTop=i}}))}_getNewObserver(){const t={root:this._rootElement,threshold:this._config.threshold,rootMargin:this._config.rootMargin};return new IntersectionObserver(n=>this._observerCallback(n),t)}_observerCallback(t){const n=r=>this._targetLinks.get(`#${r.target.id}`),s=r=>{this._previousScrollData.visibleEntryTop=r.target.offsetTop,this._process(n(r))},i=(this._rootElement||document.documentElement).scrollTop,o=i>=this._previousScrollData.parentScrollTop;this._previousScrollData.parentScrollTop=i;for(const r of t){if(!r.isIntersecting){this._activeTarget=null,this._clearActiveClass(n(r));continue}const a=r.target.offsetTop>=this._previousScrollData.visibleEntryTop;if(o&&a){if(s(r),!i)return;continue}!o&&!a&&s(r)}}_initializeTargetsAndObservables(){this._targetLinks=new Map,this._observableSections=new Map;const t=te.find(Di,this._config.target);for(const n of t){if(!n.hash||Rt(n))continue;const s=te.findOne(n.hash,this._element);Nn(s)&&(this._targetLinks.set(n.hash,n),this._observableSections.set(n.hash,s))}}_process(t){this._activeTarget!==t&&(this._clearActiveClass(this._config.target),this._activeTarget=t,t.classList.add(ln),this._activateParents(t),B.trigger(this._element,xh,{relatedTarget:t}))}_activateParents(t){if(t.classList.contains(Ph)){te.findOne(Mh,t.closest(Dh)).classList.add(ln);return}for(const n of te.parents(t,Oh))for(const s of te.prev(n,Rh))s.classList.add(ln)}_clearActiveClass(t){t.classList.remove(ln);const n=te.find(`${Di}.${ln}`,t);for(const s of n)s.classList.remove(ln)}static jQueryInterface(t){return this.each(function(){const n=ri.getOrCreateInstance(this,t);if(typeof t=="string"){if(n[t]===void 0||t.startsWith("_")||t==="constructor")throw new TypeError(`No method named "${t}"`);n[t]()}})}}B.on(window,Ch,()=>{for(const e of te.find(Ih))ri.getOrCreateInstance(e)});Xe(ri);const Wh="tab",Fh="bs.tab",sn=`.${Fh}`,Vh=`hide${sn}`,Hh=`hidden${sn}`,Uh=`show${sn}`,jh=`shown${sn}`,qh=`click${sn}`,zh=`keydown${sn}`,Kh=`load${sn}`,Gh="ArrowLeft",Kr="ArrowRight",Yh="ArrowUp",Gr="ArrowDown",Kt="active",Yr="fade",Mi="show",Xh="dropdown",Qh=".dropdown-toggle",Jh=".dropdown-menu",Li=":not(.dropdown-toggle)",Zh='.list-group, .nav, [role="tablist"]',em=".nav-item, .list-group-item",tm=`.nav-link${Li}, .list-group-item${Li}, [role="tab"]${Li}`,Gl='[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',$i=`${tm}, ${Gl}`,nm=`.${Kt}[data-bs-toggle="tab"], .${Kt}[data-bs-toggle="pill"], .${Kt}[data-bs-toggle="list"]`;class Sn extends st{constructor(t){super(t),this._parent=this._element.closest(Zh),this._parent&&(this._setInitialAttributes(this._parent,this._getChildren()),B.on(this._element,zh,n=>this._keydown(n)))}static get NAME(){return Wh}show(){const t=this._element;if(this._elemIsActive(t))return;const n=this._getActiveElem(),s=n?B.trigger(n,Vh,{relatedTarget:t}):null;B.trigger(t,Uh,{relatedTarget:n}).defaultPrevented||s&&s.defaultPrevented||(this._deactivate(n,t),this._activate(t,n))}_activate(t,n){if(!t)return;t.classList.add(Kt),this._activate(_t(t));const s=()=>{if(t.getAttribute("role")!=="tab"){t.classList.add(Mi);return}t.removeAttribute("tabindex"),t.setAttribute("aria-selected",!0),this._toggleDropDown(t,!0),B.trigger(t,jh,{relatedTarget:n})};this._queueCallback(s,t,t.classList.contains(Yr))}_deactivate(t,n){if(!t)return;t.classList.remove(Kt),t.blur(),this._deactivate(_t(t));const s=()=>{if(t.getAttribute("role")!=="tab"){t.classList.remove(Mi);return}t.setAttribute("aria-selected",!1),t.setAttribute("tabindex","-1"),this._toggleDropDown(t,!1),B.trigger(t,Hh,{relatedTarget:n})};this._queueCallback(s,t,t.classList.contains(Yr))}_keydown(t){if(![Gh,Kr,Yh,Gr].includes(t.key))return;t.stopPropagation(),t.preventDefault();const n=[Kr,Gr].includes(t.key),s=Lo(this._getChildren().filter(i=>!Rt(i)),t.target,n,!0);s&&(s.focus({preventScroll:!0}),Sn.getOrCreateInstance(s).show())}_getChildren(){return te.find($i,this._parent)}_getActiveElem(){return this._getChildren().find(t=>this._elemIsActive(t))||null}_setInitialAttributes(t,n){this._setAttributeIfNotExists(t,"role","tablist");for(const s of n)this._setInitialAttributesOnChild(s)}_setInitialAttributesOnChild(t){t=this._getInnerElement(t);const n=this._elemIsActive(t),s=this._getOuterElement(t);t.setAttribute("aria-selected",n),s!==t&&this._setAttributeIfNotExists(s,"role","presentation"),n||t.setAttribute("tabindex","-1"),this._setAttributeIfNotExists(t,"role","tab"),this._setInitialAttributesOnTargetPanel(t)}_setInitialAttributesOnTargetPanel(t){const n=_t(t);n&&(this._setAttributeIfNotExists(n,"role","tabpanel"),t.id&&this._setAttributeIfNotExists(n,"aria-labelledby",`#${t.id}`))}_toggleDropDown(t,n){const s=this._getOuterElement(t);if(!s.classList.contains(Xh))return;const i=(o,r)=>{const a=te.findOne(o,s);a&&a.classList.toggle(r,n)};i(Qh,Kt),i(Jh,Mi),s.setAttribute("aria-expanded",n)}_setAttributeIfNotExists(t,n,s){t.hasAttribute(n)||t.setAttribute(n,s)}_elemIsActive(t){return t.classList.contains(Kt)}_getInnerElement(t){return t.matches($i)?t:te.findOne($i,t)}_getOuterElement(t){return t.closest(em)||t}static jQueryInterface(t){return this.each(function(){const n=Sn.getOrCreateInstance(this);if(typeof t=="string"){if(n[t]===void 0||t.startsWith("_")||t==="constructor")throw new TypeError(`No method named "${t}"`);n[t]()}})}}B.on(document,qh,Gl,function(e){["A","AREA"].includes(this.tagName)&&e.preventDefault(),!Rt(this)&&Sn.getOrCreateInstance(this).show()});B.on(window,Kh,()=>{for(const e of te.find(nm))Sn.getOrCreateInstance(e)});Xe(Sn);const sm="toast",im="bs.toast",Ft=`.${im}`,om=`mouseover${Ft}`,rm=`mouseout${Ft}`,am=`focusin${Ft}`,lm=`focusout${Ft}`,cm=`hide${Ft}`,um=`hidden${Ft}`,dm=`show${Ft}`,pm=`shown${Ft}`,fm="fade",Xr="hide",Ts="show",Ss="showing",hm={animation:"boolean",autohide:"boolean",delay:"number"},mm={animation:!0,autohide:!0,delay:5e3};class ai extends st{constructor(t,n){super(t,n),this._timeout=null,this._hasMouseInteraction=!1,this._hasKeyboardInteraction=!1,this._setListeners()}static get Default(){return mm}static get DefaultType(){return hm}static get NAME(){return sm}show(){if(B.trigger(this._element,dm).defaultPrevented)return;this._clearTimeout(),this._config.animation&&this._element.classList.add(fm);const n=()=>{this._element.classList.remove(Ss),B.trigger(this._element,pm),this._maybeScheduleHide()};this._element.classList.remove(Xr),hs(this._element),this._element.classList.add(Ts,Ss),this._queueCallback(n,this._element,this._config.animation)}hide(){if(!this.isShown()||B.trigger(this._element,cm).defaultPrevented)return;const n=()=>{this._element.classList.add(Xr),this._element.classList.remove(Ss,Ts),B.trigger(this._element,um)};this._element.classList.add(Ss),this._queueCallback(n,this._element,this._config.animation)}dispose(){this._clearTimeout(),this.isShown()&&this._element.classList.remove(Ts),super.dispose()}isShown(){return this._element.classList.contains(Ts)}_maybeScheduleHide(){this._config.autohide&&(this._hasMouseInteraction||this._hasKeyboardInteraction||(this._timeout=setTimeout(()=>{this.hide()},this._config.delay)))}_onInteraction(t,n){switch(t.type){case"mouseover":case"mouseout":{this._hasMouseInteraction=n;break}case"focusin":case"focusout":{this._hasKeyboardInteraction=n;break}}if(n){this._clearTimeout();return}const s=t.relatedTarget;this._element===s||this._element.contains(s)||this._maybeScheduleHide()}_setListeners(){B.on(this._element,om,t=>this._onInteraction(t,!0)),B.on(this._element,rm,t=>this._onInteraction(t,!1)),B.on(this._element,am,t=>this._onInteraction(t,!0)),B.on(this._element,lm,t=>this._onInteraction(t,!1))}_clearTimeout(){clearTimeout(this._timeout),this._timeout=null}static jQueryInterface(t){return this.each(function(){const n=ai.getOrCreateInstance(this,t);if(typeof t=="string"){if(typeof n[t]>"u")throw new TypeError(`No method named "${t}"`);n[t](this)}})}}si(ai);Xe(ai);var Qr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function gm(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Yl={exports:{}};(function(e){var t=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{};/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */var n=function(s){var i=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,o=0,r={},a={manual:s.Prism&&s.Prism.manual,disableWorkerMessageHandler:s.Prism&&s.Prism.disableWorkerMessageHandler,util:{encode:function m(_){return _ instanceof l?new l(_.type,m(_.content),_.alias):Array.isArray(_)?_.map(m):_.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(m){return Object.prototype.toString.call(m).slice(8,-1)},objId:function(m){return m.__id||Object.defineProperty(m,"__id",{value:++o}),m.__id},clone:function m(_,b){b=b||{};var y,S;switch(a.util.type(_)){case"Object":if(S=a.util.objId(_),b[S])return b[S];y={},b[S]=y;for(var R in _)_.hasOwnProperty(R)&&(y[R]=m(_[R],b));return y;case"Array":return S=a.util.objId(_),b[S]?b[S]:(y=[],b[S]=y,_.forEach(function(L,I){y[I]=m(L,b)}),y);default:return _}},getLanguage:function(m){for(;m;){var _=i.exec(m.className);if(_)return _[1].toLowerCase();m=m.parentElement}return"none"},setLanguage:function(m,_){m.className=m.className.replace(RegExp(i,"gi"),""),m.classList.add("language-"+_)},currentScript:function(){if(typeof document>"u")return null;if("currentScript"in document&&1<2)return document.currentScript;try{throw new Error}catch(y){var m=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(y.stack)||[])[1];if(m){var _=document.getElementsByTagName("script");for(var b in _)if(_[b].src==m)return _[b]}return null}},isActive:function(m,_,b){for(var y="no-"+_;m;){var S=m.classList;if(S.contains(_))return!0;if(S.contains(y))return!1;m=m.parentElement}return!!b}},languages:{plain:r,plaintext:r,text:r,txt:r,extend:function(m,_){var b=a.util.clone(a.languages[m]);for(var y in _)b[y]=_[y];return b},insertBefore:function(m,_,b,y){y=y||a.languages;var S=y[m],R={};for(var L in S)if(S.hasOwnProperty(L)){if(L==_)for(var I in b)b.hasOwnProperty(I)&&(R[I]=b[I]);b.hasOwnProperty(L)||(R[L]=S[L])}var U=y[m];return y[m]=R,a.languages.DFS(a.languages,function(X,ie){ie===U&&X!=m&&(this[X]=R)}),R},DFS:function m(_,b,y,S){S=S||{};var R=a.util.objId;for(var L in _)if(_.hasOwnProperty(L)){b.call(_,L,_[L],y||L);var I=_[L],U=a.util.type(I);U==="Object"&&!S[R(I)]?(S[R(I)]=!0,m(I,b,null,S)):U==="Array"&&!S[R(I)]&&(S[R(I)]=!0,m(I,b,L,S))}}},plugins:{},highlightAll:function(m,_){a.highlightAllUnder(document,m,_)},highlightAllUnder:function(m,_,b){var y={callback:b,container:m,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};a.hooks.run("before-highlightall",y),y.elements=Array.prototype.slice.apply(y.container.querySelectorAll(y.selector)),a.hooks.run("before-all-elements-highlight",y);for(var S=0,R;R=y.elements[S++];)a.highlightElement(R,_===!0,y.callback)},highlightElement:function(m,_,b){var y=a.util.getLanguage(m),S=a.languages[y];a.util.setLanguage(m,y);var R=m.parentElement;R&&R.nodeName.toLowerCase()==="pre"&&a.util.setLanguage(R,y);var L=m.textContent,I={element:m,language:y,grammar:S,code:L};function U(ie){I.highlightedCode=ie,a.hooks.run("before-insert",I),I.element.innerHTML=I.highlightedCode,a.hooks.run("after-highlight",I),a.hooks.run("complete",I),b&&b.call(I.element)}if(a.hooks.run("before-sanity-check",I),R=I.element.parentElement,R&&R.nodeName.toLowerCase()==="pre"&&!R.hasAttribute("tabindex")&&R.setAttribute("tabindex","0"),!I.code){a.hooks.run("complete",I),b&&b.call(I.element);return}if(a.hooks.run("before-highlight",I),!I.grammar){U(a.util.encode(I.code));return}if(_&&s.Worker){var X=new Worker(a.filename);X.onmessage=function(ie){U(ie.data)},X.postMessage(JSON.stringify({language:I.language,code:I.code,immediateClose:!0}))}else U(a.highlight(I.code,I.grammar,I.language))},highlight:function(m,_,b){var y={code:m,grammar:_,language:b};if(a.hooks.run("before-tokenize",y),!y.grammar)throw new Error('The language "'+y.language+'" has no grammar.');return y.tokens=a.tokenize(y.code,y.grammar),a.hooks.run("after-tokenize",y),l.stringify(a.util.encode(y.tokens),y.language)},tokenize:function(m,_){var b=_.rest;if(b){for(var y in b)_[y]=b[y];delete _.rest}var S=new d;return f(S,S.head,m),u(m,S,_,S.head,0),P(S)},hooks:{all:{},add:function(m,_){var b=a.hooks.all;b[m]=b[m]||[],b[m].push(_)},run:function(m,_){var b=a.hooks.all[m];if(!(!b||!b.length))for(var y=0,S;S=b[y++];)S(_)}},Token:l};s.Prism=a;function l(m,_,b,y){this.type=m,this.content=_,this.alias=b,this.length=(y||"").length|0}l.stringify=function m(_,b){if(typeof _=="string")return _;if(Array.isArray(_)){var y="";return _.forEach(function(U){y+=m(U,b)}),y}var S={type:_.type,content:m(_.content,b),tag:"span",classes:["token",_.type],attributes:{},language:b},R=_.alias;R&&(Array.isArray(R)?Array.prototype.push.apply(S.classes,R):S.classes.push(R)),a.hooks.run("wrap",S);var L="";for(var I in S.attributes)L+=" "+I+'="'+(S.attributes[I]||"").replace(/"/g,"&quot;")+'"';return"<"+S.tag+' class="'+S.classes.join(" ")+'"'+L+">"+S.content+"</"+S.tag+">"};function c(m,_,b,y){m.lastIndex=_;var S=m.exec(b);if(S&&y&&S[1]){var R=S[1].length;S.index+=R,S[0]=S[0].slice(R)}return S}function u(m,_,b,y,S,R){for(var L in b)if(!(!b.hasOwnProperty(L)||!b[L])){var I=b[L];I=Array.isArray(I)?I:[I];for(var U=0;U<I.length;++U){if(R&&R.cause==L+","+U)return;var X=I[U],ie=X.inside,ce=!!X.lookbehind,Ce=!!X.greedy,ve=X.alias;if(Ce&&!X.pattern.global){var Q=X.pattern.toString().match(/[imsuy]*$/)[0];X.pattern=RegExp(X.pattern.source,Q+"g")}for(var Z=X.pattern||X,G=y.next,he=S;G!==_.tail&&!(R&&he>=R.reach);he+=G.value.length,G=G.next){var ke=G.value;if(_.length>m.length)return;if(!(ke instanceof l)){var Ae=1,le;if(Ce){if(le=c(Z,he,m,ce),!le||le.index>=m.length)break;var ge=le.index,Fe=le.index+le[0].length,ye=he;for(ye+=G.value.length;ge>=ye;)G=G.next,ye+=G.value.length;if(ye-=G.value.length,he=ye,G.value instanceof l)continue;for(var xe=G;xe!==_.tail&&(ye<Fe||typeof xe.value=="string");xe=xe.next)Ae++,ye+=xe.value.length;Ae--,ke=m.slice(he,ye),le.index-=he}else if(le=c(Z,0,ke,ce),!le)continue;var ge=le.index,E=le[0],W=ke.slice(0,ge),$=ke.slice(ge+E.length),q=he+ke.length;R&&q>R.reach&&(R.reach=q);var ne=G.prev;W&&(ne=f(_,ne,W),he+=W.length),g(_,ne,Ae);var p=new l(L,ie?a.tokenize(E,ie):E,ve,E);if(G=f(_,ne,p),$&&f(_,G,$),Ae>1){var h={cause:L+","+U,reach:q};u(m,_,b,G.prev,he,h),R&&h.reach>R.reach&&(R.reach=h.reach)}}}}}}function d(){var m={value:null,prev:null,next:null},_={value:null,prev:m,next:null};m.next=_,this.head=m,this.tail=_,this.length=0}function f(m,_,b){var y=_.next,S={value:b,prev:_,next:y};return _.next=S,y.prev=S,m.length++,S}function g(m,_,b){for(var y=_.next,S=0;S<b&&y!==m.tail;S++)y=y.next;_.next=y,y.prev=_,m.length-=S}function P(m){for(var _=[],b=m.head.next;b!==m.tail;)_.push(b.value),b=b.next;return _}if(!s.document)return s.addEventListener&&(a.disableWorkerMessageHandler||s.addEventListener("message",function(m){var _=JSON.parse(m.data),b=_.language,y=_.code,S=_.immediateClose;s.postMessage(a.highlight(y,a.languages[b],b)),S&&s.close()},!1)),a;var w=a.util.currentScript();w&&(a.filename=w.src,w.hasAttribute("data-manual")&&(a.manual=!0));function A(){a.manual||a.highlightAll()}if(!a.manual){var C=document.readyState;C==="loading"||C==="interactive"&&w&&w.defer?document.addEventListener("DOMContentLoaded",A):window.requestAnimationFrame?window.requestAnimationFrame(A):window.setTimeout(A,16)}return a}(t);e.exports&&(e.exports=n),typeof Qr<"u"&&(Qr.Prism=n),n.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},n.languages.markup.tag.inside["attr-value"].inside.entity=n.languages.markup.entity,n.languages.markup.doctype.inside["internal-subset"].inside=n.languages.markup,n.hooks.add("wrap",function(s){s.type==="entity"&&(s.attributes.title=s.content.replace(/&amp;/,"&"))}),Object.defineProperty(n.languages.markup.tag,"addInlined",{value:function(i,o){var r={};r["language-"+o]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:n.languages[o]},r.cdata=/^<!\[CDATA\[|\]\]>$/i;var a={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:r}};a["language-"+o]={pattern:/[\s\S]+/,inside:n.languages[o]};var l={};l[i]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return i}),"i"),lookbehind:!0,greedy:!0,inside:a},n.languages.insertBefore("markup","cdata",l)}}),Object.defineProperty(n.languages.markup.tag,"addAttribute",{value:function(s,i){n.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+s+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[i,"language-"+i],inside:n.languages[i]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),n.languages.html=n.languages.markup,n.languages.mathml=n.languages.markup,n.languages.svg=n.languages.markup,n.languages.xml=n.languages.extend("markup",{}),n.languages.ssml=n.languages.xml,n.languages.atom=n.languages.xml,n.languages.rss=n.languages.xml,function(s){var i=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;s.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+i.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+i.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+i.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+i.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:i,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},s.languages.css.atrule.inside.rest=s.languages.css;var o=s.languages.markup;o&&(o.tag.addInlined("style","css"),o.tag.addAttribute("style","css"))}(n),n.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},n.languages.javascript=n.languages.extend("clike",{"class-name":[n.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),n.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,n.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:n.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:n.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:n.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:n.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:n.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),n.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:n.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),n.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),n.languages.markup&&(n.languages.markup.tag.addInlined("script","javascript"),n.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),n.languages.js=n.languages.javascript,function(){if(typeof n>"u"||typeof document>"u")return;Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var s="Loading…",i=function(w,A){return"✖ Error "+w+" while fetching file: "+A},o="✖ Error: File does not exist or is empty",r={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},a="data-src-status",l="loading",c="loaded",u="failed",d="pre[data-src]:not(["+a+'="'+c+'"]):not(['+a+'="'+l+'"])';function f(w,A,C){var m=new XMLHttpRequest;m.open("GET",w,!0),m.onreadystatechange=function(){m.readyState==4&&(m.status<400&&m.responseText?A(m.responseText):m.status>=400?C(i(m.status,m.statusText)):C(o))},m.send(null)}function g(w){var A=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(w||"");if(A){var C=Number(A[1]),m=A[2],_=A[3];return m?_?[C,Number(_)]:[C,void 0]:[C,C]}}n.hooks.add("before-highlightall",function(w){w.selector+=", "+d}),n.hooks.add("before-sanity-check",function(w){var A=w.element;if(A.matches(d)){w.code="",A.setAttribute(a,l);var C=A.appendChild(document.createElement("CODE"));C.textContent=s;var m=A.getAttribute("data-src"),_=w.language;if(_==="none"){var b=(/\.(\w+)$/.exec(m)||[,"none"])[1];_=r[b]||b}n.util.setLanguage(C,_),n.util.setLanguage(A,_);var y=n.plugins.autoloader;y&&y.loadLanguages(_),f(m,function(S){A.setAttribute(a,c);var R=g(A.getAttribute("data-range"));if(R){var L=S.split(/\r\n?|\n/g),I=R[0],U=R[1]==null?L.length:R[1];I<0&&(I+=L.length),I=Math.max(0,Math.min(I-1,L.length)),U<0&&(U+=L.length),U=Math.max(0,Math.min(U,L.length)),S=L.slice(I,U).join(`
`),A.hasAttribute("data-start")||A.setAttribute("data-start",String(I+1))}C.textContent=S,n.highlightElement(C)},function(S){A.setAttribute(a,u),C.textContent=S})}}),n.plugins.fileHighlight={highlight:function(A){for(var C=(A||document).querySelectorAll(d),m=0,_;_=C[m++];)n.highlightElement(_)}};var P=!1;n.fileHighlight=function(){P||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),P=!0),n.plugins.fileHighlight.highlight.apply(this,arguments)}}()})(Yl);var _m=Yl.exports;const Jr=gm(_m);Prism.languages.solidity=Prism.languages.extend("clike",{"class-name":{pattern:/(\b(?:contract|enum|interface|library|new|struct|using)\s+)(?!\d)[\w$]+/,lookbehind:!0},keyword:/\b(?:_|anonymous|as|assembly|assert|break|calldata|case|constant|constructor|continue|contract|default|delete|do|else|emit|enum|event|external|for|from|function|if|import|indexed|inherited|interface|internal|is|let|library|mapping|memory|modifier|new|payable|pragma|private|public|pure|require|returns?|revert|selfdestruct|solidity|storage|struct|suicide|switch|this|throw|using|var|view|while)\b/,operator:/=>|->|:=|=:|\*\*|\+\+|--|\|\||&&|<<=?|>>=?|[-+*/%^&|<>!=]=?|[~?]/});Prism.languages.insertBefore("solidity","keyword",{builtin:/\b(?:address|bool|byte|u?int(?:8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?|string|bytes(?:[1-9]|[12]\d|3[0-2])?)\b/});Prism.languages.insertBefore("solidity","number",{version:{pattern:/([<>]=?|\^)\d+\.\d+\.\d+\b/,lookbehind:!0,alias:"number"}});Prism.languages.sol=Prism.languages.solidity;var bm={exports:{}};(function(e){(function(){if(typeof Prism>"u")return;var t=Object.assign||function(r,a){for(var l in a)a.hasOwnProperty(l)&&(r[l]=a[l]);return r};function n(r){this.defaults=t({},r)}function s(r){return r.replace(/-(\w)/g,function(a,l){return l.toUpperCase()})}function i(r){for(var a=0,l=0;l<r.length;++l)r.charCodeAt(l)=="	".charCodeAt(0)&&(a+=3);return r.length+a}var o={"remove-trailing":"boolean","remove-indent":"boolean","left-trim":"boolean","right-trim":"boolean","break-lines":"number",indent:"number","remove-initial-line-feed":"boolean","tabs-to-spaces":"number","spaces-to-tabs":"number"};n.prototype={setDefaults:function(r){this.defaults=t(this.defaults,r)},normalize:function(r,a){a=t(this.defaults,a);for(var l in a){var c=s(l);l!=="normalize"&&c!=="setDefaults"&&a[l]&&this[c]&&(r=this[c].call(this,r,a[l]))}return r},leftTrim:function(r){return r.replace(/^\s+/,"")},rightTrim:function(r){return r.replace(/\s+$/,"")},tabsToSpaces:function(r,a){return a=a|0||4,r.replace(/\t/g,new Array(++a).join(" "))},spacesToTabs:function(r,a){return a=a|0||4,r.replace(RegExp(" {"+a+"}","g"),"	")},removeTrailing:function(r){return r.replace(/\s*?$/gm,"")},removeInitialLineFeed:function(r){return r.replace(/^(?:\r?\n|\r)/,"")},removeIndent:function(r){var a=r.match(/^[^\S\n\r]*(?=\S)/gm);return!a||!a[0].length||(a.sort(function(l,c){return l.length-c.length}),!a[0].length)?r:r.replace(RegExp("^"+a[0],"gm"),"")},indent:function(r,a){return r.replace(/^[^\S\n\r]*(?=\S)/gm,new Array(++a).join("	")+"$&")},breakLines:function(r,a){a=a===!0?80:a|0||80;for(var l=r.split(`
`),c=0;c<l.length;++c)if(!(i(l[c])<=a)){for(var u=l[c].split(/(\s+)/g),d=0,f=0;f<u.length;++f){var g=i(u[f]);d+=g,d>a&&(u[f]=`
`+u[f],d=g)}l[c]=u.join("")}return l.join(`
`)}},e.exports&&(e.exports=n),Prism.plugins.NormalizeWhitespace=new n({"remove-trailing":!0,"remove-indent":!0,"left-trim":!0,"right-trim":!0}),Prism.hooks.add("before-sanity-check",function(r){var a=Prism.plugins.NormalizeWhitespace;if(!(r.settings&&r.settings["whitespace-normalization"]===!1)&&Prism.util.isActive(r.element,"whitespace-normalization",!0)){if((!r.element||!r.element.parentNode)&&r.code){r.code=a.normalize(r.code,r.settings);return}var l=r.element.parentNode;if(!(!r.code||!l||l.nodeName.toLowerCase()!=="pre")){r.settings==null&&(r.settings={});for(var c in o)if(Object.hasOwnProperty.call(o,c)){var u=o[c];if(l.hasAttribute("data-"+c))try{var d=JSON.parse(l.getAttribute("data-"+c)||"true");typeof d===u&&(r.settings[c]=d)}catch{}}for(var f=l.childNodes,g="",P="",w=!1,A=0;A<f.length;++A){var C=f[A];C==r.element?w=!0:C.nodeName==="#text"&&(w?P+=C.nodeValue:g+=C.nodeValue,l.removeChild(C),--A)}if(!r.element.children.length||!Prism.plugins.KeepMarkup)r.code=g+r.code+P,r.code=a.normalize(r.code,r.settings);else{var m=g+r.element.innerHTML+P;r.element.innerHTML=a.normalize(m,r.settings),r.code=r.element.textContent}}}})})()})(bm);(function(){if(typeof Prism>"u"||typeof document>"u")return;var e="line-numbers",t=/\n(?!$)/g,n=Prism.plugins.lineNumbers={getLine:function(r,a){if(!(r.tagName!=="PRE"||!r.classList.contains(e))){var l=r.querySelector(".line-numbers-rows");if(l){var c=parseInt(r.getAttribute("data-start"),10)||1,u=c+(l.children.length-1);a<c&&(a=c),a>u&&(a=u);var d=a-c;return l.children[d]}}},resize:function(r){s([r])},assumeViewportIndependence:!0};function s(r){if(r=r.filter(function(l){var c=i(l),u=c["white-space"];return u==="pre-wrap"||u==="pre-line"}),r.length!=0){var a=r.map(function(l){var c=l.querySelector("code"),u=l.querySelector(".line-numbers-rows");if(!(!c||!u)){var d=l.querySelector(".line-numbers-sizer"),f=c.textContent.split(t);d||(d=document.createElement("span"),d.className="line-numbers-sizer",c.appendChild(d)),d.innerHTML="0",d.style.display="block";var g=d.getBoundingClientRect().height;return d.innerHTML="",{element:l,lines:f,lineHeights:[],oneLinerHeight:g,sizer:d}}}).filter(Boolean);a.forEach(function(l){var c=l.sizer,u=l.lines,d=l.lineHeights,f=l.oneLinerHeight;d[u.length-1]=void 0,u.forEach(function(g,P){if(g&&g.length>1){var w=c.appendChild(document.createElement("span"));w.style.display="block",w.textContent=g}else d[P]=f})}),a.forEach(function(l){for(var c=l.sizer,u=l.lineHeights,d=0,f=0;f<u.length;f++)u[f]===void 0&&(u[f]=c.children[d++].getBoundingClientRect().height)}),a.forEach(function(l){var c=l.sizer,u=l.element.querySelector(".line-numbers-rows");c.style.display="none",c.innerHTML="",l.lineHeights.forEach(function(d,f){u.children[f].style.height=d+"px"})})}}function i(r){return r?window.getComputedStyle?getComputedStyle(r):r.currentStyle||null:null}var o=void 0;window.addEventListener("resize",function(){n.assumeViewportIndependence&&o===window.innerWidth||(o=window.innerWidth,s(Array.prototype.slice.call(document.querySelectorAll("pre."+e))))}),Prism.hooks.add("complete",function(r){if(r.code){var a=r.element,l=a.parentNode;if(!(!l||!/pre/i.test(l.nodeName))&&!a.querySelector(".line-numbers-rows")&&Prism.util.isActive(a,e)){a.classList.remove(e),l.classList.add(e);var c=r.code.match(t),u=c?c.length+1:1,d,f=new Array(u+1).join("<span></span>");d=document.createElement("span"),d.setAttribute("aria-hidden","true"),d.className="line-numbers-rows",d.innerHTML=f,l.hasAttribute("data-start")&&(l.style.counterReset="linenumber "+(parseInt(l.getAttribute("data-start"),10)-1)),r.element.appendChild(d),s([l]),Prism.hooks.run("line-numbers",r)}}}),Prism.hooks.add("line-numbers",function(r){r.plugins=r.plugins||{},r.plugins.lineNumbers=!0})})();function Ho(e,t){const n=Object.create(null),s=e.split(",");for(let i=0;i<s.length;i++)n[s[i]]=!0;return t?i=>!!n[i.toLowerCase()]:i=>!!n[i]}const be={},gn=[],et=()=>{},vm=()=>!1,ym=/^on[^a-z]/,li=e=>ym.test(e),Uo=e=>e.startsWith("onUpdate:"),Oe=Object.assign,jo=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},wm=Object.prototype.hasOwnProperty,oe=(e,t)=>wm.call(e,t),Y=Array.isArray,_n=e=>bs(e)==="[object Map]",ci=e=>bs(e)==="[object Set]",Zr=e=>bs(e)==="[object Date]",ee=e=>typeof e=="function",Te=e=>typeof e=="string",is=e=>typeof e=="symbol",_e=e=>e!==null&&typeof e=="object",Xl=e=>_e(e)&&ee(e.then)&&ee(e.catch),Ql=Object.prototype.toString,bs=e=>Ql.call(e),km=e=>bs(e).slice(8,-1),Jl=e=>bs(e)==="[object Object]",qo=e=>Te(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Ds=Ho(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ui=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},Em=/-(\w)/g,ft=ui(e=>e.replace(Em,(t,n)=>n?n.toUpperCase():"")),Tm=/\B([A-Z])/g,Dn=ui(e=>e.replace(Tm,"-$1").toLowerCase()),di=ui(e=>e.charAt(0).toUpperCase()+e.slice(1)),Wi=ui(e=>e?`on${di(e)}`:""),os=(e,t)=>!Object.is(e,t),Ms=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},qs=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},zs=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let ea;const ro=()=>ea||(ea=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function pi(e){if(Y(e)){const t={};for(let n=0;n<e.length;n++){const s=e[n],i=Te(s)?Cm(s):pi(s);if(i)for(const o in i)t[o]=i[o]}return t}else{if(Te(e))return e;if(_e(e))return e}}const Sm=/;(?![^(]*\))/g,Am=/:([^]+)/,xm=/\/\*[^]*?\*\//g;function Cm(e){const t={};return e.replace(xm,"").split(Sm).forEach(n=>{if(n){const s=n.split(Am);s.length>1&&(t[s[0].trim()]=s[1].trim())}}),t}function Mn(e){let t="";if(Te(e))t=e;else if(Y(e))for(let n=0;n<e.length;n++){const s=Mn(e[n]);s&&(t+=s+" ")}else if(_e(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Pm="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Im=Ho(Pm);function Zl(e){return!!e||e===""}function Om(e,t){if(e.length!==t.length)return!1;let n=!0;for(let s=0;n&&s<e.length;s++)n=fi(e[s],t[s]);return n}function fi(e,t){if(e===t)return!0;let n=Zr(e),s=Zr(t);if(n||s)return n&&s?e.getTime()===t.getTime():!1;if(n=is(e),s=is(t),n||s)return e===t;if(n=Y(e),s=Y(t),n||s)return n&&s?Om(e,t):!1;if(n=_e(e),s=_e(t),n||s){if(!n||!s)return!1;const i=Object.keys(e).length,o=Object.keys(t).length;if(i!==o)return!1;for(const r in e){const a=e.hasOwnProperty(r),l=t.hasOwnProperty(r);if(a&&!l||!a&&l||!fi(e[r],t[r]))return!1}}return String(e)===String(t)}function Nm(e,t){return e.findIndex(n=>fi(n,t))}const re=e=>Te(e)?e:e==null?"":Y(e)||_e(e)&&(e.toString===Ql||!ee(e.toString))?JSON.stringify(e,ec,2):String(e),ec=(e,t)=>t&&t.__v_isRef?ec(e,t.value):_n(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[s,i])=>(n[`${s} =>`]=i,n),{})}:ci(t)?{[`Set(${t.size})`]:[...t.values()]}:_e(t)&&!Y(t)&&!Jl(t)?String(t):t;let He;class tc{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=He,!t&&He&&(this.index=(He.scopes||(He.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=He;try{return He=this,t()}finally{He=n}}}on(){He=this}off(){He=this.parent}stop(t){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function nc(e){return new tc(e)}function Bm(e,t=He){t&&t.active&&t.effects.push(e)}function sc(){return He}function Rm(e){He&&He.cleanups.push(e)}const zo=e=>{const t=new Set(e);return t.w=0,t.n=0,t},ic=e=>(e.w&Mt)>0,oc=e=>(e.n&Mt)>0,Dm=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=Mt},Mm=e=>{const{deps:t}=e;if(t.length){let n=0;for(let s=0;s<t.length;s++){const i=t[s];ic(i)&&!oc(i)?i.delete(e):t[n++]=i,i.w&=~Mt,i.n&=~Mt}t.length=n}},Ks=new WeakMap;let Kn=0,Mt=1;const ao=30;let Je;const Xt=Symbol(""),lo=Symbol("");class Ko{constructor(t,n=null,s){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Bm(this,s)}run(){if(!this.active)return this.fn();let t=Je,n=It;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=Je,Je=this,It=!0,Mt=1<<++Kn,Kn<=ao?Dm(this):ta(this),this.fn()}finally{Kn<=ao&&Mm(this),Mt=1<<--Kn,Je=this.parent,It=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Je===this?this.deferStop=!0:this.active&&(ta(this),this.onStop&&this.onStop(),this.active=!1)}}function ta(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let It=!0;const rc=[];function Ln(){rc.push(It),It=!1}function $n(){const e=rc.pop();It=e===void 0?!0:e}function We(e,t,n){if(It&&Je){let s=Ks.get(e);s||Ks.set(e,s=new Map);let i=s.get(n);i||s.set(n,i=zo()),ac(i)}}function ac(e,t){let n=!1;Kn<=ao?oc(e)||(e.n|=Mt,n=!ic(e)):n=!e.has(Je),n&&(e.add(Je),Je.deps.push(e))}function wt(e,t,n,s,i,o){const r=Ks.get(e);if(!r)return;let a=[];if(t==="clear")a=[...r.values()];else if(n==="length"&&Y(e)){const l=Number(s);r.forEach((c,u)=>{(u==="length"||u>=l)&&a.push(c)})}else switch(n!==void 0&&a.push(r.get(n)),t){case"add":Y(e)?qo(n)&&a.push(r.get("length")):(a.push(r.get(Xt)),_n(e)&&a.push(r.get(lo)));break;case"delete":Y(e)||(a.push(r.get(Xt)),_n(e)&&a.push(r.get(lo)));break;case"set":_n(e)&&a.push(r.get(Xt));break}if(a.length===1)a[0]&&co(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);co(zo(l))}}function co(e,t){const n=Y(e)?e:[...e];for(const s of n)s.computed&&na(s);for(const s of n)s.computed||na(s)}function na(e,t){(e!==Je||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}function Lm(e,t){var n;return(n=Ks.get(e))==null?void 0:n.get(t)}const $m=Ho("__proto__,__v_isRef,__isVue"),lc=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(is)),Wm=Go(),Fm=Go(!1,!0),Vm=Go(!0),sa=Hm();function Hm(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const s=ae(this);for(let o=0,r=this.length;o<r;o++)We(s,"get",o+"");const i=s[t](...n);return i===-1||i===!1?s[t](...n.map(ae)):i}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){Ln();const s=ae(this)[t].apply(this,n);return $n(),s}}),e}function Um(e){const t=ae(this);return We(t,"has",e),t.hasOwnProperty(e)}function Go(e=!1,t=!1){return function(s,i,o){if(i==="__v_isReactive")return!e;if(i==="__v_isReadonly")return e;if(i==="__v_isShallow")return t;if(i==="__v_raw"&&o===(e?t?og:fc:t?pc:dc).get(s))return s;const r=Y(s);if(!e){if(r&&oe(sa,i))return Reflect.get(sa,i,o);if(i==="hasOwnProperty")return Um}const a=Reflect.get(s,i,o);return(is(i)?lc.has(i):$m(i))||(e||We(s,"get",i),t)?a:we(a)?r&&qo(i)?a:a.value:_e(a)?e?hc(a):Wn(a):a}}const jm=cc(),qm=cc(!0);function cc(e=!1){return function(n,s,i,o){let r=n[s];if(An(r)&&we(r)&&!we(i))return!1;if(!e&&(!Gs(i)&&!An(i)&&(r=ae(r),i=ae(i)),!Y(n)&&we(r)&&!we(i)))return r.value=i,!0;const a=Y(n)&&qo(s)?Number(s)<n.length:oe(n,s),l=Reflect.set(n,s,i,o);return n===ae(o)&&(a?os(i,r)&&wt(n,"set",s,i):wt(n,"add",s,i)),l}}function zm(e,t){const n=oe(e,t);e[t];const s=Reflect.deleteProperty(e,t);return s&&n&&wt(e,"delete",t,void 0),s}function Km(e,t){const n=Reflect.has(e,t);return(!is(t)||!lc.has(t))&&We(e,"has",t),n}function Gm(e){return We(e,"iterate",Y(e)?"length":Xt),Reflect.ownKeys(e)}const uc={get:Wm,set:jm,deleteProperty:zm,has:Km,ownKeys:Gm},Ym={get:Vm,set(e,t){return!0},deleteProperty(e,t){return!0}},Xm=Oe({},uc,{get:Fm,set:qm}),Yo=e=>e,hi=e=>Reflect.getPrototypeOf(e);function As(e,t,n=!1,s=!1){e=e.__v_raw;const i=ae(e),o=ae(t);n||(t!==o&&We(i,"get",t),We(i,"get",o));const{has:r}=hi(i),a=s?Yo:n?Jo:rs;if(r.call(i,t))return a(e.get(t));if(r.call(i,o))return a(e.get(o));e!==i&&e.get(t)}function xs(e,t=!1){const n=this.__v_raw,s=ae(n),i=ae(e);return t||(e!==i&&We(s,"has",e),We(s,"has",i)),e===i?n.has(e):n.has(e)||n.has(i)}function Cs(e,t=!1){return e=e.__v_raw,!t&&We(ae(e),"iterate",Xt),Reflect.get(e,"size",e)}function ia(e){e=ae(e);const t=ae(this);return hi(t).has.call(t,e)||(t.add(e),wt(t,"add",e,e)),this}function oa(e,t){t=ae(t);const n=ae(this),{has:s,get:i}=hi(n);let o=s.call(n,e);o||(e=ae(e),o=s.call(n,e));const r=i.call(n,e);return n.set(e,t),o?os(t,r)&&wt(n,"set",e,t):wt(n,"add",e,t),this}function ra(e){const t=ae(this),{has:n,get:s}=hi(t);let i=n.call(t,e);i||(e=ae(e),i=n.call(t,e)),s&&s.call(t,e);const o=t.delete(e);return i&&wt(t,"delete",e,void 0),o}function aa(){const e=ae(this),t=e.size!==0,n=e.clear();return t&&wt(e,"clear",void 0,void 0),n}function Ps(e,t){return function(s,i){const o=this,r=o.__v_raw,a=ae(r),l=t?Yo:e?Jo:rs;return!e&&We(a,"iterate",Xt),r.forEach((c,u)=>s.call(i,l(c),l(u),o))}}function Is(e,t,n){return function(...s){const i=this.__v_raw,o=ae(i),r=_n(o),a=e==="entries"||e===Symbol.iterator&&r,l=e==="keys"&&r,c=i[e](...s),u=n?Yo:t?Jo:rs;return!t&&We(o,"iterate",l?lo:Xt),{next(){const{value:d,done:f}=c.next();return f?{value:d,done:f}:{value:a?[u(d[0]),u(d[1])]:u(d),done:f}},[Symbol.iterator](){return this}}}}function St(e){return function(...t){return e==="delete"?!1:this}}function Qm(){const e={get(o){return As(this,o)},get size(){return Cs(this)},has:xs,add:ia,set:oa,delete:ra,clear:aa,forEach:Ps(!1,!1)},t={get(o){return As(this,o,!1,!0)},get size(){return Cs(this)},has:xs,add:ia,set:oa,delete:ra,clear:aa,forEach:Ps(!1,!0)},n={get(o){return As(this,o,!0)},get size(){return Cs(this,!0)},has(o){return xs.call(this,o,!0)},add:St("add"),set:St("set"),delete:St("delete"),clear:St("clear"),forEach:Ps(!0,!1)},s={get(o){return As(this,o,!0,!0)},get size(){return Cs(this,!0)},has(o){return xs.call(this,o,!0)},add:St("add"),set:St("set"),delete:St("delete"),clear:St("clear"),forEach:Ps(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(o=>{e[o]=Is(o,!1,!1),n[o]=Is(o,!0,!1),t[o]=Is(o,!1,!0),s[o]=Is(o,!0,!0)}),[e,n,t,s]}const[Jm,Zm,eg,tg]=Qm();function Xo(e,t){const n=t?e?tg:eg:e?Zm:Jm;return(s,i,o)=>i==="__v_isReactive"?!e:i==="__v_isReadonly"?e:i==="__v_raw"?s:Reflect.get(oe(n,i)&&i in s?n:s,i,o)}const ng={get:Xo(!1,!1)},sg={get:Xo(!1,!0)},ig={get:Xo(!0,!1)},dc=new WeakMap,pc=new WeakMap,fc=new WeakMap,og=new WeakMap;function rg(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ag(e){return e.__v_skip||!Object.isExtensible(e)?0:rg(km(e))}function Wn(e){return An(e)?e:Qo(e,!1,uc,ng,dc)}function lg(e){return Qo(e,!1,Xm,sg,pc)}function hc(e){return Qo(e,!0,Ym,ig,fc)}function Qo(e,t,n,s,i){if(!_e(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const o=i.get(e);if(o)return o;const r=ag(e);if(r===0)return e;const a=new Proxy(e,r===2?s:n);return i.set(e,a),a}function Ot(e){return An(e)?Ot(e.__v_raw):!!(e&&e.__v_isReactive)}function An(e){return!!(e&&e.__v_isReadonly)}function Gs(e){return!!(e&&e.__v_isShallow)}function mc(e){return Ot(e)||An(e)}function ae(e){const t=e&&e.__v_raw;return t?ae(t):e}function mi(e){return qs(e,"__v_skip",!0),e}const rs=e=>_e(e)?Wn(e):e,Jo=e=>_e(e)?hc(e):e;function gc(e){It&&Je&&(e=ae(e),ac(e.dep||(e.dep=zo())))}function _c(e,t){e=ae(e);const n=e.dep;n&&co(n)}function we(e){return!!(e&&e.__v_isRef===!0)}function gi(e){return bc(e,!1)}function cg(e){return bc(e,!0)}function bc(e,t){return we(e)?e:new ug(e,t)}class ug{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:ae(t),this._value=n?t:rs(t)}get value(){return gc(this),this._value}set value(t){const n=this.__v_isShallow||Gs(t)||An(t);t=n?t:ae(t),os(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:rs(t),_c(this))}}function Qt(e){return we(e)?e.value:e}const dg={get:(e,t,n)=>Qt(Reflect.get(e,t,n)),set:(e,t,n,s)=>{const i=e[t];return we(i)&&!we(n)?(i.value=n,!0):Reflect.set(e,t,n,s)}};function vc(e){return Ot(e)?e:new Proxy(e,dg)}function pg(e){const t=Y(e)?new Array(e.length):{};for(const n in e)t[n]=hg(e,n);return t}class fg{constructor(t,n,s){this._object=t,this._key=n,this._defaultValue=s,this.__v_isRef=!0}get value(){const t=this._object[this._key];return t===void 0?this._defaultValue:t}set value(t){this._object[this._key]=t}get dep(){return Lm(ae(this._object),this._key)}}function hg(e,t,n){const s=e[t];return we(s)?s:new fg(e,t,n)}class mg{constructor(t,n,s,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Ko(t,()=>{this._dirty||(this._dirty=!0,_c(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=s}get value(){const t=ae(this);return gc(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function gg(e,t,n=!1){let s,i;const o=ee(e);return o?(s=e,i=et):(s=e.get,i=e.set),new mg(s,i,o||!i,n)}function Nt(e,t,n,s){let i;try{i=s?e(...s):e()}catch(o){_i(o,t,n)}return i}function tt(e,t,n,s){if(ee(e)){const o=Nt(e,t,n,s);return o&&Xl(o)&&o.catch(r=>{_i(r,t,n)}),o}const i=[];for(let o=0;o<e.length;o++)i.push(tt(e[o],t,n,s));return i}function _i(e,t,n,s=!0){const i=t?t.vnode:null;if(t){let o=t.parent;const r=t.proxy,a=n;for(;o;){const c=o.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](e,r,a)===!1)return}o=o.parent}const l=t.appContext.config.errorHandler;if(l){Nt(l,null,10,[e,r,a]);return}}_g(e,n,i,s)}function _g(e,t,n,s=!0){console.error(e)}let as=!1,uo=!1;const Ne=[];let lt=0;const bn=[];let mt=null,Ut=0;const yc=Promise.resolve();let Zo=null;function er(e){const t=Zo||yc;return e?t.then(this?e.bind(this):e):t}function bg(e){let t=lt+1,n=Ne.length;for(;t<n;){const s=t+n>>>1;ls(Ne[s])<e?t=s+1:n=s}return t}function tr(e){(!Ne.length||!Ne.includes(e,as&&e.allowRecurse?lt+1:lt))&&(e.id==null?Ne.push(e):Ne.splice(bg(e.id),0,e),wc())}function wc(){!as&&!uo&&(uo=!0,Zo=yc.then(Ec))}function vg(e){const t=Ne.indexOf(e);t>lt&&Ne.splice(t,1)}function yg(e){Y(e)?bn.push(...e):(!mt||!mt.includes(e,e.allowRecurse?Ut+1:Ut))&&bn.push(e),wc()}function la(e,t=as?lt+1:0){for(;t<Ne.length;t++){const n=Ne[t];n&&n.pre&&(Ne.splice(t,1),t--,n())}}function kc(e){if(bn.length){const t=[...new Set(bn)];if(bn.length=0,mt){mt.push(...t);return}for(mt=t,mt.sort((n,s)=>ls(n)-ls(s)),Ut=0;Ut<mt.length;Ut++)mt[Ut]();mt=null,Ut=0}}const ls=e=>e.id==null?1/0:e.id,wg=(e,t)=>{const n=ls(e)-ls(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function Ec(e){uo=!1,as=!0,Ne.sort(wg);const t=et;try{for(lt=0;lt<Ne.length;lt++){const n=Ne[lt];n&&n.active!==!1&&Nt(n,null,14)}}finally{lt=0,Ne.length=0,kc(),as=!1,Zo=null,(Ne.length||bn.length)&&Ec()}}function kg(e,t,...n){if(e.isUnmounted)return;const s=e.vnode.props||be;let i=n;const o=t.startsWith("update:"),r=o&&t.slice(7);if(r&&r in s){const u=`${r==="modelValue"?"model":r}Modifiers`,{number:d,trim:f}=s[u]||be;f&&(i=n.map(g=>Te(g)?g.trim():g)),d&&(i=n.map(zs))}let a,l=s[a=Wi(t)]||s[a=Wi(ft(t))];!l&&o&&(l=s[a=Wi(Dn(t))]),l&&tt(l,e,6,i);const c=s[a+"Once"];if(c){if(!e.emitted)e.emitted={};else if(e.emitted[a])return;e.emitted[a]=!0,tt(c,e,6,i)}}function Tc(e,t,n=!1){const s=t.emitsCache,i=s.get(e);if(i!==void 0)return i;const o=e.emits;let r={},a=!1;if(!ee(e)){const l=c=>{const u=Tc(c,t,!0);u&&(a=!0,Oe(r,u))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!o&&!a?(_e(e)&&s.set(e,null),null):(Y(o)?o.forEach(l=>r[l]=null):Oe(r,o),_e(e)&&s.set(e,r),r)}function bi(e,t){return!e||!li(t)?!1:(t=t.slice(2).replace(/Once$/,""),oe(e,t[0].toLowerCase()+t.slice(1))||oe(e,Dn(t))||oe(e,t))}let je=null,vi=null;function Ys(e){const t=je;return je=e,vi=e&&e.type.__scopeId||null,t}function Fn(e){vi=e}function Vn(){vi=null}function Eg(e,t=je,n){if(!t||e._n)return e;const s=(...i)=>{s._d&&va(-1);const o=Ys(t);let r;try{r=e(...i)}finally{Ys(o),s._d&&va(1)}return r};return s._n=!0,s._c=!0,s._d=!0,s}function Fi(e){const{type:t,vnode:n,proxy:s,withProxy:i,props:o,propsOptions:[r],slots:a,attrs:l,emit:c,render:u,renderCache:d,data:f,setupState:g,ctx:P,inheritAttrs:w}=e;let A,C;const m=Ys(e);try{if(n.shapeFlag&4){const b=i||s;A=at(u.call(b,b,d,o,g,f,P)),C=l}else{const b=t;A=at(b.length>1?b(o,{attrs:l,slots:a,emit:c}):b(o,null)),C=t.props?l:Tg(l)}}catch(b){Zn.length=0,_i(b,e,1),A=de(tn)}let _=A;if(C&&w!==!1){const b=Object.keys(C),{shapeFlag:y}=_;b.length&&y&7&&(r&&b.some(Uo)&&(C=Sg(C,r)),_=xn(_,C))}return n.dirs&&(_=xn(_),_.dirs=_.dirs?_.dirs.concat(n.dirs):n.dirs),n.transition&&(_.transition=n.transition),A=_,Ys(m),A}const Tg=e=>{let t;for(const n in e)(n==="class"||n==="style"||li(n))&&((t||(t={}))[n]=e[n]);return t},Sg=(e,t)=>{const n={};for(const s in e)(!Uo(s)||!(s.slice(9)in t))&&(n[s]=e[s]);return n};function Ag(e,t,n){const{props:s,children:i,component:o}=e,{props:r,children:a,patchFlag:l}=t,c=o.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return s?ca(s,r,c):!!r;if(l&8){const u=t.dynamicProps;for(let d=0;d<u.length;d++){const f=u[d];if(r[f]!==s[f]&&!bi(c,f))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:s===r?!1:s?r?ca(s,r,c):!0:!!r;return!1}function ca(e,t,n){const s=Object.keys(t);if(s.length!==Object.keys(e).length)return!0;for(let i=0;i<s.length;i++){const o=s[i];if(t[o]!==e[o]&&!bi(n,o))return!0}return!1}function xg({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const Cg=e=>e.__isSuspense;function Pg(e,t){t&&t.pendingBranch?Y(e)?t.effects.push(...e):t.effects.push(e):yg(e)}const Os={};function Qn(e,t,n){return Sc(e,t,n)}function Sc(e,t,{immediate:n,deep:s,flush:i,onTrack:o,onTrigger:r}=be){var a;const l=sc()===((a=Pe)==null?void 0:a.scope)?Pe:null;let c,u=!1,d=!1;if(we(e)?(c=()=>e.value,u=Gs(e)):Ot(e)?(c=()=>e,s=!0):Y(e)?(d=!0,u=e.some(b=>Ot(b)||Gs(b)),c=()=>e.map(b=>{if(we(b))return b.value;if(Ot(b))return Gt(b);if(ee(b))return Nt(b,l,2)})):ee(e)?t?c=()=>Nt(e,l,2):c=()=>{if(!(l&&l.isUnmounted))return f&&f(),tt(e,l,3,[g])}:c=et,t&&s){const b=c;c=()=>Gt(b())}let f,g=b=>{f=m.onStop=()=>{Nt(b,l,4)}},P;if(ds)if(g=et,t?n&&tt(t,l,3,[c(),d?[]:void 0,g]):c(),i==="sync"){const b=k_();P=b.__watcherHandles||(b.__watcherHandles=[])}else return et;let w=d?new Array(e.length).fill(Os):Os;const A=()=>{if(m.active)if(t){const b=m.run();(s||u||(d?b.some((y,S)=>os(y,w[S])):os(b,w)))&&(f&&f(),tt(t,l,3,[b,w===Os?void 0:d&&w[0]===Os?[]:w,g]),w=b)}else m.run()};A.allowRecurse=!!t;let C;i==="sync"?C=A:i==="post"?C=()=>Le(A,l&&l.suspense):(A.pre=!0,l&&(A.id=l.uid),C=()=>tr(A));const m=new Ko(c,C);t?n?A():w=m.run():i==="post"?Le(m.run.bind(m),l&&l.suspense):m.run();const _=()=>{m.stop(),l&&l.scope&&jo(l.scope.effects,m)};return P&&P.push(_),_}function Ig(e,t,n){const s=this.proxy,i=Te(e)?e.includes(".")?Ac(s,e):()=>s[e]:e.bind(s,s);let o;ee(t)?o=t:(o=t.handler,n=t);const r=Pe;Cn(this);const a=Sc(i,o.bind(s),n);return r?Cn(r):Jt(),a}function Ac(e,t){const n=t.split(".");return()=>{let s=e;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}function Gt(e,t){if(!_e(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),we(e))Gt(e.value,t);else if(Y(e))for(let n=0;n<e.length;n++)Gt(e[n],t);else if(ci(e)||_n(e))e.forEach(n=>{Gt(n,t)});else if(Jl(e))for(const n in e)Gt(e[n],t);return e}function xc(e,t){const n=je;if(n===null)return e;const s=Ei(n)||n.proxy,i=e.dirs||(e.dirs=[]);for(let o=0;o<t.length;o++){let[r,a,l,c=be]=t[o];r&&(ee(r)&&(r={mounted:r,updated:r}),r.deep&&Gt(a),i.push({dir:r,instance:s,value:a,oldValue:void 0,arg:l,modifiers:c}))}return e}function Vt(e,t,n,s){const i=e.dirs,o=t&&t.dirs;for(let r=0;r<i.length;r++){const a=i[r];o&&(a.oldValue=o[r].value);let l=a.dir[s];l&&(Ln(),tt(l,n,8,[e.el,a,e,t]),$n())}}function nr(e,t){return ee(e)?(()=>Oe({name:e.name},t,{setup:e}))():e}const Ls=e=>!!e.type.__asyncLoader,Cc=e=>e.type.__isKeepAlive;function Og(e,t){Pc(e,"a",t)}function Ng(e,t){Pc(e,"da",t)}function Pc(e,t,n=Pe){const s=e.__wdc||(e.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return e()});if(yi(t,s,n),n){let i=n.parent;for(;i&&i.parent;)Cc(i.parent.vnode)&&Bg(s,t,n,i),i=i.parent}}function Bg(e,t,n,s){const i=yi(t,e,s,!0);Ic(()=>{jo(s[t],i)},n)}function yi(e,t,n=Pe,s=!1){if(n){const i=n[e]||(n[e]=[]),o=t.__weh||(t.__weh=(...r)=>{if(n.isUnmounted)return;Ln(),Cn(n);const a=tt(t,n,e,r);return Jt(),$n(),a});return s?i.unshift(o):i.push(o),o}}const Et=e=>(t,n=Pe)=>(!ds||e==="sp")&&yi(e,(...s)=>t(...s),n),Rg=Et("bm"),Dg=Et("m"),Mg=Et("bu"),Lg=Et("u"),$g=Et("bum"),Ic=Et("um"),Wg=Et("sp"),Fg=Et("rtg"),Vg=Et("rtc");function Hg(e,t=Pe){yi("ec",e,t)}const sr="components";function Re(e,t){return Nc(sr,e,!0,t)||e}const Oc=Symbol.for("v-ndc");function Ug(e){return Te(e)?Nc(sr,e,!1)||e:e||Oc}function Nc(e,t,n=!0,s=!1){const i=je||Pe;if(i){const o=i.type;if(e===sr){const a=v_(o,!1);if(a&&(a===t||a===ft(t)||a===di(ft(t))))return o}const r=ua(i[e]||o[e],t)||ua(i.appContext[e],t);return!r&&s?o:r}}function ua(e,t){return e&&(e[t]||e[ft(t)]||e[di(ft(t))])}function Ie(e,t,n,s){let i;const o=n&&n[s];if(Y(e)||Te(e)){i=new Array(e.length);for(let r=0,a=e.length;r<a;r++)i[r]=t(e[r],r,void 0,o&&o[r])}else if(typeof e=="number"){i=new Array(e);for(let r=0;r<e;r++)i[r]=t(r+1,r,void 0,o&&o[r])}else if(_e(e))if(e[Symbol.iterator])i=Array.from(e,(r,a)=>t(r,a,void 0,o&&o[a]));else{const r=Object.keys(e);i=new Array(r.length);for(let a=0,l=r.length;a<l;a++){const c=r[a];i[a]=t(e[c],c,a,o&&o[a])}}else i=[];return n&&(n[s]=i),i}const po=e=>e?jc(e)?Ei(e)||e.proxy:po(e.parent):null,Jn=Oe(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>po(e.parent),$root:e=>po(e.root),$emit:e=>e.emit,$options:e=>ir(e),$forceUpdate:e=>e.f||(e.f=()=>tr(e.update)),$nextTick:e=>e.n||(e.n=er.bind(e.proxy)),$watch:e=>Ig.bind(e)}),Vi=(e,t)=>e!==be&&!e.__isScriptSetup&&oe(e,t),jg={get({_:e},t){const{ctx:n,setupState:s,data:i,props:o,accessCache:r,type:a,appContext:l}=e;let c;if(t[0]!=="$"){const g=r[t];if(g!==void 0)switch(g){case 1:return s[t];case 2:return i[t];case 4:return n[t];case 3:return o[t]}else{if(Vi(s,t))return r[t]=1,s[t];if(i!==be&&oe(i,t))return r[t]=2,i[t];if((c=e.propsOptions[0])&&oe(c,t))return r[t]=3,o[t];if(n!==be&&oe(n,t))return r[t]=4,n[t];fo&&(r[t]=0)}}const u=Jn[t];let d,f;if(u)return t==="$attrs"&&We(e,"get",t),u(e);if((d=a.__cssModules)&&(d=d[t]))return d;if(n!==be&&oe(n,t))return r[t]=4,n[t];if(f=l.config.globalProperties,oe(f,t))return f[t]},set({_:e},t,n){const{data:s,setupState:i,ctx:o}=e;return Vi(i,t)?(i[t]=n,!0):s!==be&&oe(s,t)?(s[t]=n,!0):oe(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(o[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:s,appContext:i,propsOptions:o}},r){let a;return!!n[r]||e!==be&&oe(e,r)||Vi(t,r)||(a=o[0])&&oe(a,r)||oe(s,r)||oe(Jn,r)||oe(i.config.globalProperties,r)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:oe(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function da(e){return Y(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let fo=!0;function qg(e){const t=ir(e),n=e.proxy,s=e.ctx;fo=!1,t.beforeCreate&&pa(t.beforeCreate,e,"bc");const{data:i,computed:o,methods:r,watch:a,provide:l,inject:c,created:u,beforeMount:d,mounted:f,beforeUpdate:g,updated:P,activated:w,deactivated:A,beforeDestroy:C,beforeUnmount:m,destroyed:_,unmounted:b,render:y,renderTracked:S,renderTriggered:R,errorCaptured:L,serverPrefetch:I,expose:U,inheritAttrs:X,components:ie,directives:ce,filters:Ce}=t;if(c&&zg(c,s,null),r)for(const Z in r){const G=r[Z];ee(G)&&(s[Z]=G.bind(n))}if(i){const Z=i.call(n,n);_e(Z)&&(e.data=Wn(Z))}if(fo=!0,o)for(const Z in o){const G=o[Z],he=ee(G)?G.bind(n,n):ee(G.get)?G.get.bind(n,n):et,ke=!ee(G)&&ee(G.set)?G.set.bind(n):et,Ae=Ue({get:he,set:ke});Object.defineProperty(s,Z,{enumerable:!0,configurable:!0,get:()=>Ae.value,set:le=>Ae.value=le})}if(a)for(const Z in a)Bc(a[Z],s,n,Z);if(l){const Z=ee(l)?l.call(n):l;Reflect.ownKeys(Z).forEach(G=>{$s(G,Z[G])})}u&&pa(u,e,"c");function Q(Z,G){Y(G)?G.forEach(he=>Z(he.bind(n))):G&&Z(G.bind(n))}if(Q(Rg,d),Q(Dg,f),Q(Mg,g),Q(Lg,P),Q(Og,w),Q(Ng,A),Q(Hg,L),Q(Vg,S),Q(Fg,R),Q($g,m),Q(Ic,b),Q(Wg,I),Y(U))if(U.length){const Z=e.exposed||(e.exposed={});U.forEach(G=>{Object.defineProperty(Z,G,{get:()=>n[G],set:he=>n[G]=he})})}else e.exposed||(e.exposed={});y&&e.render===et&&(e.render=y),X!=null&&(e.inheritAttrs=X),ie&&(e.components=ie),ce&&(e.directives=ce)}function zg(e,t,n=et){Y(e)&&(e=ho(e));for(const s in e){const i=e[s];let o;_e(i)?"default"in i?o=dt(i.from||s,i.default,!0):o=dt(i.from||s):o=dt(i),we(o)?Object.defineProperty(t,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:r=>o.value=r}):t[s]=o}}function pa(e,t,n){tt(Y(e)?e.map(s=>s.bind(t.proxy)):e.bind(t.proxy),t,n)}function Bc(e,t,n,s){const i=s.includes(".")?Ac(n,s):()=>n[s];if(Te(e)){const o=t[e];ee(o)&&Qn(i,o)}else if(ee(e))Qn(i,e.bind(n));else if(_e(e))if(Y(e))e.forEach(o=>Bc(o,t,n,s));else{const o=ee(e.handler)?e.handler.bind(n):t[e.handler];ee(o)&&Qn(i,o,e)}}function ir(e){const t=e.type,{mixins:n,extends:s}=t,{mixins:i,optionsCache:o,config:{optionMergeStrategies:r}}=e.appContext,a=o.get(t);let l;return a?l=a:!i.length&&!n&&!s?l=t:(l={},i.length&&i.forEach(c=>Xs(l,c,r,!0)),Xs(l,t,r)),_e(t)&&o.set(t,l),l}function Xs(e,t,n,s=!1){const{mixins:i,extends:o}=t;o&&Xs(e,o,n,!0),i&&i.forEach(r=>Xs(e,r,n,!0));for(const r in t)if(!(s&&r==="expose")){const a=Kg[r]||n&&n[r];e[r]=a?a(e[r],t[r]):t[r]}return e}const Kg={data:fa,props:ha,emits:ha,methods:Gn,computed:Gn,beforeCreate:Be,created:Be,beforeMount:Be,mounted:Be,beforeUpdate:Be,updated:Be,beforeDestroy:Be,beforeUnmount:Be,destroyed:Be,unmounted:Be,activated:Be,deactivated:Be,errorCaptured:Be,serverPrefetch:Be,components:Gn,directives:Gn,watch:Yg,provide:fa,inject:Gg};function fa(e,t){return t?e?function(){return Oe(ee(e)?e.call(this,this):e,ee(t)?t.call(this,this):t)}:t:e}function Gg(e,t){return Gn(ho(e),ho(t))}function ho(e){if(Y(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Be(e,t){return e?[...new Set([].concat(e,t))]:t}function Gn(e,t){return e?Oe(Object.create(null),e,t):t}function ha(e,t){return e?Y(e)&&Y(t)?[...new Set([...e,...t])]:Oe(Object.create(null),da(e),da(t??{})):t}function Yg(e,t){if(!e)return t;if(!t)return e;const n=Oe(Object.create(null),e);for(const s in t)n[s]=Be(e[s],t[s]);return n}function Rc(){return{app:null,config:{isNativeTag:vm,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Xg=0;function Qg(e,t){return function(s,i=null){ee(s)||(s=Oe({},s)),i!=null&&!_e(i)&&(i=null);const o=Rc(),r=new Set;let a=!1;const l=o.app={_uid:Xg++,_component:s,_props:i,_container:null,_context:o,_instance:null,version:E_,get config(){return o.config},set config(c){},use(c,...u){return r.has(c)||(c&&ee(c.install)?(r.add(c),c.install(l,...u)):ee(c)&&(r.add(c),c(l,...u))),l},mixin(c){return o.mixins.includes(c)||o.mixins.push(c),l},component(c,u){return u?(o.components[c]=u,l):o.components[c]},directive(c,u){return u?(o.directives[c]=u,l):o.directives[c]},mount(c,u,d){if(!a){const f=de(s,i);return f.appContext=o,u&&t?t(f,c):e(f,c,d),a=!0,l._container=c,c.__vue_app__=l,Ei(f.component)||f.component.proxy}},unmount(){a&&(e(null,l._container),delete l._container.__vue_app__)},provide(c,u){return o.provides[c]=u,l},runWithContext(c){cs=l;try{return c()}finally{cs=null}}};return l}}let cs=null;function $s(e,t){if(Pe){let n=Pe.provides;const s=Pe.parent&&Pe.parent.provides;s===n&&(n=Pe.provides=Object.create(s)),n[e]=t}}function dt(e,t,n=!1){const s=Pe||je;if(s||cs){const i=s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:cs._context.provides;if(i&&e in i)return i[e];if(arguments.length>1)return n&&ee(t)?t.call(s&&s.proxy):t}}function Jg(){return!!(Pe||je||cs)}function Zg(e,t,n,s=!1){const i={},o={};qs(o,ki,1),e.propsDefaults=Object.create(null),Dc(e,t,i,o);for(const r in e.propsOptions[0])r in i||(i[r]=void 0);n?e.props=s?i:lg(i):e.type.props?e.props=i:e.props=o,e.attrs=o}function e_(e,t,n,s){const{props:i,attrs:o,vnode:{patchFlag:r}}=e,a=ae(i),[l]=e.propsOptions;let c=!1;if((s||r>0)&&!(r&16)){if(r&8){const u=e.vnode.dynamicProps;for(let d=0;d<u.length;d++){let f=u[d];if(bi(e.emitsOptions,f))continue;const g=t[f];if(l)if(oe(o,f))g!==o[f]&&(o[f]=g,c=!0);else{const P=ft(f);i[P]=mo(l,a,P,g,e,!1)}else g!==o[f]&&(o[f]=g,c=!0)}}}else{Dc(e,t,i,o)&&(c=!0);let u;for(const d in a)(!t||!oe(t,d)&&((u=Dn(d))===d||!oe(t,u)))&&(l?n&&(n[d]!==void 0||n[u]!==void 0)&&(i[d]=mo(l,a,d,void 0,e,!0)):delete i[d]);if(o!==a)for(const d in o)(!t||!oe(t,d))&&(delete o[d],c=!0)}c&&wt(e,"set","$attrs")}function Dc(e,t,n,s){const[i,o]=e.propsOptions;let r=!1,a;if(t)for(let l in t){if(Ds(l))continue;const c=t[l];let u;i&&oe(i,u=ft(l))?!o||!o.includes(u)?n[u]=c:(a||(a={}))[u]=c:bi(e.emitsOptions,l)||(!(l in s)||c!==s[l])&&(s[l]=c,r=!0)}if(o){const l=ae(n),c=a||be;for(let u=0;u<o.length;u++){const d=o[u];n[d]=mo(i,l,d,c[d],e,!oe(c,d))}}return r}function mo(e,t,n,s,i,o){const r=e[n];if(r!=null){const a=oe(r,"default");if(a&&s===void 0){const l=r.default;if(r.type!==Function&&!r.skipFactory&&ee(l)){const{propsDefaults:c}=i;n in c?s=c[n]:(Cn(i),s=c[n]=l.call(null,t),Jt())}else s=l}r[0]&&(o&&!a?s=!1:r[1]&&(s===""||s===Dn(n))&&(s=!0))}return s}function Mc(e,t,n=!1){const s=t.propsCache,i=s.get(e);if(i)return i;const o=e.props,r={},a=[];let l=!1;if(!ee(e)){const u=d=>{l=!0;const[f,g]=Mc(d,t,!0);Oe(r,f),g&&a.push(...g)};!n&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!o&&!l)return _e(e)&&s.set(e,gn),gn;if(Y(o))for(let u=0;u<o.length;u++){const d=ft(o[u]);ma(d)&&(r[d]=be)}else if(o)for(const u in o){const d=ft(u);if(ma(d)){const f=o[u],g=r[d]=Y(f)||ee(f)?{type:f}:Oe({},f);if(g){const P=ba(Boolean,g.type),w=ba(String,g.type);g[0]=P>-1,g[1]=w<0||P<w,(P>-1||oe(g,"default"))&&a.push(d)}}}const c=[r,a];return _e(e)&&s.set(e,c),c}function ma(e){return e[0]!=="$"}function ga(e){const t=e&&e.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:e===null?"null":""}function _a(e,t){return ga(e)===ga(t)}function ba(e,t){return Y(t)?t.findIndex(n=>_a(n,e)):ee(t)&&_a(t,e)?0:-1}const Lc=e=>e[0]==="_"||e==="$stable",or=e=>Y(e)?e.map(at):[at(e)],t_=(e,t,n)=>{if(t._n)return t;const s=Eg((...i)=>or(t(...i)),n);return s._c=!1,s},$c=(e,t,n)=>{const s=e._ctx;for(const i in e){if(Lc(i))continue;const o=e[i];if(ee(o))t[i]=t_(i,o,s);else if(o!=null){const r=or(o);t[i]=()=>r}}},Wc=(e,t)=>{const n=or(t);e.slots.default=()=>n},n_=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=ae(t),qs(t,"_",n)):$c(t,e.slots={})}else e.slots={},t&&Wc(e,t);qs(e.slots,ki,1)},s_=(e,t,n)=>{const{vnode:s,slots:i}=e;let o=!0,r=be;if(s.shapeFlag&32){const a=t._;a?n&&a===1?o=!1:(Oe(i,t),!n&&a===1&&delete i._):(o=!t.$stable,$c(t,i)),r=t}else t&&(Wc(e,t),r={default:1});if(o)for(const a in i)!Lc(a)&&!(a in r)&&delete i[a]};function go(e,t,n,s,i=!1){if(Y(e)){e.forEach((f,g)=>go(f,t&&(Y(t)?t[g]:t),n,s,i));return}if(Ls(s)&&!i)return;const o=s.shapeFlag&4?Ei(s.component)||s.component.proxy:s.el,r=i?null:o,{i:a,r:l}=e,c=t&&t.r,u=a.refs===be?a.refs={}:a.refs,d=a.setupState;if(c!=null&&c!==l&&(Te(c)?(u[c]=null,oe(d,c)&&(d[c]=null)):we(c)&&(c.value=null)),ee(l))Nt(l,a,12,[r,u]);else{const f=Te(l),g=we(l);if(f||g){const P=()=>{if(e.f){const w=f?oe(d,l)?d[l]:u[l]:l.value;i?Y(w)&&jo(w,o):Y(w)?w.includes(o)||w.push(o):f?(u[l]=[o],oe(d,l)&&(d[l]=u[l])):(l.value=[o],e.k&&(u[e.k]=l.value))}else f?(u[l]=r,oe(d,l)&&(d[l]=r)):g&&(l.value=r,e.k&&(u[e.k]=r))};r?(P.id=-1,Le(P,n)):P()}}}const Le=Pg;function i_(e){return o_(e)}function o_(e,t){const n=ro();n.__VUE__=!0;const{insert:s,remove:i,patchProp:o,createElement:r,createText:a,createComment:l,setText:c,setElementText:u,parentNode:d,nextSibling:f,setScopeId:g=et,insertStaticContent:P}=e,w=(p,h,v,T=null,x=null,O=null,V=!1,D=null,M=!!h.dynamicChildren)=>{if(p===h)return;p&&!qn(p,h)&&(T=E(p),le(p,x,O,!0),p=null),h.patchFlag===-2&&(M=!1,h.dynamicChildren=null);const{type:N,ref:K,shapeFlag:j}=h;switch(N){case wi:A(p,h,v,T);break;case tn:C(p,h,v,T);break;case Ws:p==null&&m(h,v,T,V);break;case me:ie(p,h,v,T,x,O,V,D,M);break;default:j&1?y(p,h,v,T,x,O,V,D,M):j&6?ce(p,h,v,T,x,O,V,D,M):(j&64||j&128)&&N.process(p,h,v,T,x,O,V,D,M,$)}K!=null&&x&&go(K,p&&p.ref,O,h||p,!h)},A=(p,h,v,T)=>{if(p==null)s(h.el=a(h.children),v,T);else{const x=h.el=p.el;h.children!==p.children&&c(x,h.children)}},C=(p,h,v,T)=>{p==null?s(h.el=l(h.children||""),v,T):h.el=p.el},m=(p,h,v,T)=>{[p.el,p.anchor]=P(p.children,h,v,T,p.el,p.anchor)},_=({el:p,anchor:h},v,T)=>{let x;for(;p&&p!==h;)x=f(p),s(p,v,T),p=x;s(h,v,T)},b=({el:p,anchor:h})=>{let v;for(;p&&p!==h;)v=f(p),i(p),p=v;i(h)},y=(p,h,v,T,x,O,V,D,M)=>{V=V||h.type==="svg",p==null?S(h,v,T,x,O,V,D,M):I(p,h,x,O,V,D,M)},S=(p,h,v,T,x,O,V,D)=>{let M,N;const{type:K,props:j,shapeFlag:z,transition:J,dirs:se}=p;if(M=p.el=r(p.type,O,j&&j.is,j),z&8?u(M,p.children):z&16&&L(p.children,M,null,T,x,O&&K!=="foreignObject",V,D),se&&Vt(p,null,T,"created"),R(M,p,p.scopeId,V,T),j){for(const ue in j)ue!=="value"&&!Ds(ue)&&o(M,ue,null,j[ue],O,p.children,T,x,ge);"value"in j&&o(M,"value",null,j.value),(N=j.onVnodeBeforeMount)&&rt(N,T,p)}se&&Vt(p,null,T,"beforeMount");const pe=(!x||x&&!x.pendingBranch)&&J&&!J.persisted;pe&&J.beforeEnter(M),s(M,h,v),((N=j&&j.onVnodeMounted)||pe||se)&&Le(()=>{N&&rt(N,T,p),pe&&J.enter(M),se&&Vt(p,null,T,"mounted")},x)},R=(p,h,v,T,x)=>{if(v&&g(p,v),T)for(let O=0;O<T.length;O++)g(p,T[O]);if(x){let O=x.subTree;if(h===O){const V=x.vnode;R(p,V,V.scopeId,V.slotScopeIds,x.parent)}}},L=(p,h,v,T,x,O,V,D,M=0)=>{for(let N=M;N<p.length;N++){const K=p[N]=D?Ct(p[N]):at(p[N]);w(null,K,h,v,T,x,O,V,D)}},I=(p,h,v,T,x,O,V)=>{const D=h.el=p.el;let{patchFlag:M,dynamicChildren:N,dirs:K}=h;M|=p.patchFlag&16;const j=p.props||be,z=h.props||be;let J;v&&Ht(v,!1),(J=z.onVnodeBeforeUpdate)&&rt(J,v,h,p),K&&Vt(h,p,v,"beforeUpdate"),v&&Ht(v,!0);const se=x&&h.type!=="foreignObject";if(N?U(p.dynamicChildren,N,D,v,T,se,O):V||G(p,h,D,null,v,T,se,O,!1),M>0){if(M&16)X(D,h,j,z,v,T,x);else if(M&2&&j.class!==z.class&&o(D,"class",null,z.class,x),M&4&&o(D,"style",j.style,z.style,x),M&8){const pe=h.dynamicProps;for(let ue=0;ue<pe.length;ue++){const Ee=pe[ue],Qe=j[Ee],rn=z[Ee];(rn!==Qe||Ee==="value")&&o(D,Ee,Qe,rn,x,p.children,v,T,ge)}}M&1&&p.children!==h.children&&u(D,h.children)}else!V&&N==null&&X(D,h,j,z,v,T,x);((J=z.onVnodeUpdated)||K)&&Le(()=>{J&&rt(J,v,h,p),K&&Vt(h,p,v,"updated")},T)},U=(p,h,v,T,x,O,V)=>{for(let D=0;D<h.length;D++){const M=p[D],N=h[D],K=M.el&&(M.type===me||!qn(M,N)||M.shapeFlag&70)?d(M.el):v;w(M,N,K,null,T,x,O,V,!0)}},X=(p,h,v,T,x,O,V)=>{if(v!==T){if(v!==be)for(const D in v)!Ds(D)&&!(D in T)&&o(p,D,v[D],null,V,h.children,x,O,ge);for(const D in T){if(Ds(D))continue;const M=T[D],N=v[D];M!==N&&D!=="value"&&o(p,D,N,M,V,h.children,x,O,ge)}"value"in T&&o(p,"value",v.value,T.value)}},ie=(p,h,v,T,x,O,V,D,M)=>{const N=h.el=p?p.el:a(""),K=h.anchor=p?p.anchor:a("");let{patchFlag:j,dynamicChildren:z,slotScopeIds:J}=h;J&&(D=D?D.concat(J):J),p==null?(s(N,v,T),s(K,v,T),L(h.children,v,K,x,O,V,D,M)):j>0&&j&64&&z&&p.dynamicChildren?(U(p.dynamicChildren,z,v,x,O,V,D),(h.key!=null||x&&h===x.subTree)&&Fc(p,h,!0)):G(p,h,v,K,x,O,V,D,M)},ce=(p,h,v,T,x,O,V,D,M)=>{h.slotScopeIds=D,p==null?h.shapeFlag&512?x.ctx.activate(h,v,T,V,M):Ce(h,v,T,x,O,V,M):ve(p,h,M)},Ce=(p,h,v,T,x,O,V)=>{const D=p.component=h_(p,T,x);if(Cc(p)&&(D.ctx.renderer=$),m_(D),D.asyncDep){if(x&&x.registerDep(D,Q),!p.el){const M=D.subTree=de(tn);C(null,M,h,v)}return}Q(D,p,h,v,x,O,V)},ve=(p,h,v)=>{const T=h.component=p.component;if(Ag(p,h,v))if(T.asyncDep&&!T.asyncResolved){Z(T,h,v);return}else T.next=h,vg(T.update),T.update();else h.el=p.el,T.vnode=h},Q=(p,h,v,T,x,O,V)=>{const D=()=>{if(p.isMounted){let{next:K,bu:j,u:z,parent:J,vnode:se}=p,pe=K,ue;Ht(p,!1),K?(K.el=se.el,Z(p,K,V)):K=se,j&&Ms(j),(ue=K.props&&K.props.onVnodeBeforeUpdate)&&rt(ue,J,K,se),Ht(p,!0);const Ee=Fi(p),Qe=p.subTree;p.subTree=Ee,w(Qe,Ee,d(Qe.el),E(Qe),p,x,O),K.el=Ee.el,pe===null&&xg(p,Ee.el),z&&Le(z,x),(ue=K.props&&K.props.onVnodeUpdated)&&Le(()=>rt(ue,J,K,se),x)}else{let K;const{el:j,props:z}=h,{bm:J,m:se,parent:pe}=p,ue=Ls(h);if(Ht(p,!1),J&&Ms(J),!ue&&(K=z&&z.onVnodeBeforeMount)&&rt(K,pe,h),Ht(p,!0),j&&ne){const Ee=()=>{p.subTree=Fi(p),ne(j,p.subTree,p,x,null)};ue?h.type.__asyncLoader().then(()=>!p.isUnmounted&&Ee()):Ee()}else{const Ee=p.subTree=Fi(p);w(null,Ee,v,T,p,x,O),h.el=Ee.el}if(se&&Le(se,x),!ue&&(K=z&&z.onVnodeMounted)){const Ee=h;Le(()=>rt(K,pe,Ee),x)}(h.shapeFlag&256||pe&&Ls(pe.vnode)&&pe.vnode.shapeFlag&256)&&p.a&&Le(p.a,x),p.isMounted=!0,h=v=T=null}},M=p.effect=new Ko(D,()=>tr(N),p.scope),N=p.update=()=>M.run();N.id=p.uid,Ht(p,!0),N()},Z=(p,h,v)=>{h.component=p;const T=p.vnode.props;p.vnode=h,p.next=null,e_(p,h.props,T,v),s_(p,h.children,v),Ln(),la(),$n()},G=(p,h,v,T,x,O,V,D,M=!1)=>{const N=p&&p.children,K=p?p.shapeFlag:0,j=h.children,{patchFlag:z,shapeFlag:J}=h;if(z>0){if(z&128){ke(N,j,v,T,x,O,V,D,M);return}else if(z&256){he(N,j,v,T,x,O,V,D,M);return}}J&8?(K&16&&ge(N,x,O),j!==N&&u(v,j)):K&16?J&16?ke(N,j,v,T,x,O,V,D,M):ge(N,x,O,!0):(K&8&&u(v,""),J&16&&L(j,v,T,x,O,V,D,M))},he=(p,h,v,T,x,O,V,D,M)=>{p=p||gn,h=h||gn;const N=p.length,K=h.length,j=Math.min(N,K);let z;for(z=0;z<j;z++){const J=h[z]=M?Ct(h[z]):at(h[z]);w(p[z],J,v,null,x,O,V,D,M)}N>K?ge(p,x,O,!0,!1,j):L(h,v,T,x,O,V,D,M,j)},ke=(p,h,v,T,x,O,V,D,M)=>{let N=0;const K=h.length;let j=p.length-1,z=K-1;for(;N<=j&&N<=z;){const J=p[N],se=h[N]=M?Ct(h[N]):at(h[N]);if(qn(J,se))w(J,se,v,null,x,O,V,D,M);else break;N++}for(;N<=j&&N<=z;){const J=p[j],se=h[z]=M?Ct(h[z]):at(h[z]);if(qn(J,se))w(J,se,v,null,x,O,V,D,M);else break;j--,z--}if(N>j){if(N<=z){const J=z+1,se=J<K?h[J].el:T;for(;N<=z;)w(null,h[N]=M?Ct(h[N]):at(h[N]),v,se,x,O,V,D,M),N++}}else if(N>z)for(;N<=j;)le(p[N],x,O,!0),N++;else{const J=N,se=N,pe=new Map;for(N=se;N<=z;N++){const Ve=h[N]=M?Ct(h[N]):at(h[N]);Ve.key!=null&&pe.set(Ve.key,N)}let ue,Ee=0;const Qe=z-se+1;let rn=!1,fr=0;const Hn=new Array(Qe);for(N=0;N<Qe;N++)Hn[N]=0;for(N=J;N<=j;N++){const Ve=p[N];if(Ee>=Qe){le(Ve,x,O,!0);continue}let ot;if(Ve.key!=null)ot=pe.get(Ve.key);else for(ue=se;ue<=z;ue++)if(Hn[ue-se]===0&&qn(Ve,h[ue])){ot=ue;break}ot===void 0?le(Ve,x,O,!0):(Hn[ot-se]=N+1,ot>=fr?fr=ot:rn=!0,w(Ve,h[ot],v,null,x,O,V,D,M),Ee++)}const hr=rn?r_(Hn):gn;for(ue=hr.length-1,N=Qe-1;N>=0;N--){const Ve=se+N,ot=h[Ve],mr=Ve+1<K?h[Ve+1].el:T;Hn[N]===0?w(null,ot,v,mr,x,O,V,D,M):rn&&(ue<0||N!==hr[ue]?Ae(ot,v,mr,2):ue--)}}},Ae=(p,h,v,T,x=null)=>{const{el:O,type:V,transition:D,children:M,shapeFlag:N}=p;if(N&6){Ae(p.component.subTree,h,v,T);return}if(N&128){p.suspense.move(h,v,T);return}if(N&64){V.move(p,h,v,$);return}if(V===me){s(O,h,v);for(let j=0;j<M.length;j++)Ae(M[j],h,v,T);s(p.anchor,h,v);return}if(V===Ws){_(p,h,v);return}if(T!==2&&N&1&&D)if(T===0)D.beforeEnter(O),s(O,h,v),Le(()=>D.enter(O),x);else{const{leave:j,delayLeave:z,afterLeave:J}=D,se=()=>s(O,h,v),pe=()=>{j(O,()=>{se(),J&&J()})};z?z(O,se,pe):pe()}else s(O,h,v)},le=(p,h,v,T=!1,x=!1)=>{const{type:O,props:V,ref:D,children:M,dynamicChildren:N,shapeFlag:K,patchFlag:j,dirs:z}=p;if(D!=null&&go(D,null,v,p,!0),K&256){h.ctx.deactivate(p);return}const J=K&1&&z,se=!Ls(p);let pe;if(se&&(pe=V&&V.onVnodeBeforeUnmount)&&rt(pe,h,p),K&6)xe(p.component,v,T);else{if(K&128){p.suspense.unmount(v,T);return}J&&Vt(p,null,h,"beforeUnmount"),K&64?p.type.remove(p,h,v,x,$,T):N&&(O!==me||j>0&&j&64)?ge(N,h,v,!1,!0):(O===me&&j&384||!x&&K&16)&&ge(M,h,v),T&&Fe(p)}(se&&(pe=V&&V.onVnodeUnmounted)||J)&&Le(()=>{pe&&rt(pe,h,p),J&&Vt(p,null,h,"unmounted")},v)},Fe=p=>{const{type:h,el:v,anchor:T,transition:x}=p;if(h===me){ye(v,T);return}if(h===Ws){b(p);return}const O=()=>{i(v),x&&!x.persisted&&x.afterLeave&&x.afterLeave()};if(p.shapeFlag&1&&x&&!x.persisted){const{leave:V,delayLeave:D}=x,M=()=>V(v,O);D?D(p.el,O,M):M()}else O()},ye=(p,h)=>{let v;for(;p!==h;)v=f(p),i(p),p=v;i(h)},xe=(p,h,v)=>{const{bum:T,scope:x,update:O,subTree:V,um:D}=p;T&&Ms(T),x.stop(),O&&(O.active=!1,le(V,p,h,v)),D&&Le(D,h),Le(()=>{p.isUnmounted=!0},h),h&&h.pendingBranch&&!h.isUnmounted&&p.asyncDep&&!p.asyncResolved&&p.suspenseId===h.pendingId&&(h.deps--,h.deps===0&&h.resolve())},ge=(p,h,v,T=!1,x=!1,O=0)=>{for(let V=O;V<p.length;V++)le(p[V],h,v,T,x)},E=p=>p.shapeFlag&6?E(p.component.subTree):p.shapeFlag&128?p.suspense.next():f(p.anchor||p.el),W=(p,h,v)=>{p==null?h._vnode&&le(h._vnode,null,null,!0):w(h._vnode||null,p,h,null,null,null,v),la(),kc(),h._vnode=p},$={p:w,um:le,m:Ae,r:Fe,mt:Ce,mc:L,pc:G,pbc:U,n:E,o:e};let q,ne;return t&&([q,ne]=t($)),{render:W,hydrate:q,createApp:Qg(W,q)}}function Ht({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function Fc(e,t,n=!1){const s=e.children,i=t.children;if(Y(s)&&Y(i))for(let o=0;o<s.length;o++){const r=s[o];let a=i[o];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[o]=Ct(i[o]),a.el=r.el),n||Fc(r,a)),a.type===wi&&(a.el=r.el)}}function r_(e){const t=e.slice(),n=[0];let s,i,o,r,a;const l=e.length;for(s=0;s<l;s++){const c=e[s];if(c!==0){if(i=n[n.length-1],e[i]<c){t[s]=i,n.push(s);continue}for(o=0,r=n.length-1;o<r;)a=o+r>>1,e[n[a]]<c?o=a+1:r=a;c<e[n[o]]&&(o>0&&(t[s]=n[o-1]),n[o]=s)}}for(o=n.length,r=n[o-1];o-- >0;)n[o]=r,r=t[r];return n}const a_=e=>e.__isTeleport,me=Symbol.for("v-fgt"),wi=Symbol.for("v-txt"),tn=Symbol.for("v-cmt"),Ws=Symbol.for("v-stc"),Zn=[];let Ze=null;function F(e=!1){Zn.push(Ze=e?null:[])}function l_(){Zn.pop(),Ze=Zn[Zn.length-1]||null}let us=1;function va(e){us+=e}function Vc(e){return e.dynamicChildren=us>0?Ze||gn:null,l_(),us>0&&Ze&&Ze.push(e),e}function H(e,t,n,s,i,o){return Vc(k(e,t,n,s,i,o,!0))}function on(e,t,n,s,i){return Vc(de(e,t,n,s,i,!0))}function _o(e){return e?e.__v_isVNode===!0:!1}function qn(e,t){return e.type===t.type&&e.key===t.key}const ki="__vInternal",Hc=({key:e})=>e??null,Fs=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?Te(e)||we(e)||ee(e)?{i:je,r:e,k:t,f:!!n}:e:null);function k(e,t=null,n=null,s=0,i=null,o=e===me?0:1,r=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Hc(t),ref:t&&Fs(t),scopeId:vi,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:je};return a?(rr(l,n),o&128&&e.normalize(l)):n&&(l.shapeFlag|=Te(n)?8:16),us>0&&!r&&Ze&&(l.patchFlag>0||o&6)&&l.patchFlag!==32&&Ze.push(l),l}const de=c_;function c_(e,t=null,n=null,s=0,i=null,o=!1){if((!e||e===Oc)&&(e=tn),_o(e)){const a=xn(e,t,!0);return n&&rr(a,n),us>0&&!o&&Ze&&(a.shapeFlag&6?Ze[Ze.indexOf(e)]=a:Ze.push(a)),a.patchFlag|=-2,a}if(y_(e)&&(e=e.__vccOpts),t){t=u_(t);let{class:a,style:l}=t;a&&!Te(a)&&(t.class=Mn(a)),_e(l)&&(mc(l)&&!Y(l)&&(l=Oe({},l)),t.style=pi(l))}const r=Te(e)?1:Cg(e)?128:a_(e)?64:_e(e)?4:ee(e)?2:0;return k(e,t,n,s,i,r,o,!0)}function u_(e){return e?mc(e)||ki in e?Oe({},e):e:null}function xn(e,t,n=!1){const{props:s,ref:i,patchFlag:o,children:r}=e,a=t?d_(s||{},t):s;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:a,key:a&&Hc(a),ref:t&&t.ref?n&&i?Y(i)?i.concat(Fs(t)):[i,Fs(t)]:Fs(t):i,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:r,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==me?o===-1?16:o|16:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&xn(e.ssContent),ssFallback:e.ssFallback&&xn(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function Lt(e=" ",t=0){return de(wi,null,e,t)}function Uc(e,t){const n=de(Ws,null,e);return n.staticCount=t,n}function $e(e="",t=!1){return t?(F(),on(tn,null,e)):de(tn,null,e)}function at(e){return e==null||typeof e=="boolean"?de(tn):Y(e)?de(me,null,e.slice()):typeof e=="object"?Ct(e):de(wi,null,String(e))}function Ct(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:xn(e)}function rr(e,t){let n=0;const{shapeFlag:s}=e;if(t==null)t=null;else if(Y(t))n=16;else if(typeof t=="object")if(s&65){const i=t.default;i&&(i._c&&(i._d=!1),rr(e,i()),i._c&&(i._d=!0));return}else{n=32;const i=t._;!i&&!(ki in t)?t._ctx=je:i===3&&je&&(je.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else ee(t)?(t={default:t,_ctx:je},n=32):(t=String(t),s&64?(n=16,t=[Lt(t)]):n=8);e.children=t,e.shapeFlag|=n}function d_(...e){const t={};for(let n=0;n<e.length;n++){const s=e[n];for(const i in s)if(i==="class")t.class!==s.class&&(t.class=Mn([t.class,s.class]));else if(i==="style")t.style=pi([t.style,s.style]);else if(li(i)){const o=t[i],r=s[i];r&&o!==r&&!(Y(o)&&o.includes(r))&&(t[i]=o?[].concat(o,r):r)}else i!==""&&(t[i]=s[i])}return t}function rt(e,t,n,s=null){tt(e,t,7,[n,s])}const p_=Rc();let f_=0;function h_(e,t,n){const s=e.type,i=(t?t.appContext:e.appContext)||p_,o={uid:f_++,vnode:e,type:s,parent:t,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new tc(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Mc(s,i),emitsOptions:Tc(s,i),emit:null,emitted:null,propsDefaults:be,inheritAttrs:s.inheritAttrs,ctx:be,data:be,props:be,attrs:be,slots:be,refs:be,setupState:be,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return o.ctx={_:o},o.root=t?t.root:o,o.emit=kg.bind(null,o),e.ce&&e.ce(o),o}let Pe=null,ar,cn,ya="__VUE_INSTANCE_SETTERS__";(cn=ro()[ya])||(cn=ro()[ya]=[]),cn.push(e=>Pe=e),ar=e=>{cn.length>1?cn.forEach(t=>t(e)):cn[0](e)};const Cn=e=>{ar(e),e.scope.on()},Jt=()=>{Pe&&Pe.scope.off(),ar(null)};function jc(e){return e.vnode.shapeFlag&4}let ds=!1;function m_(e,t=!1){ds=t;const{props:n,children:s}=e.vnode,i=jc(e);Zg(e,n,i,t),n_(e,s);const o=i?g_(e,t):void 0;return ds=!1,o}function g_(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=mi(new Proxy(e.ctx,jg));const{setup:s}=n;if(s){const i=e.setupContext=s.length>1?b_(e):null;Cn(e),Ln();const o=Nt(s,e,0,[e.props,i]);if($n(),Jt(),Xl(o)){if(o.then(Jt,Jt),t)return o.then(r=>{wa(e,r,t)}).catch(r=>{_i(r,e,0)});e.asyncDep=o}else wa(e,o,t)}else qc(e,t)}function wa(e,t,n){ee(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:_e(t)&&(e.setupState=vc(t)),qc(e,n)}let ka;function qc(e,t,n){const s=e.type;if(!e.render){if(!t&&ka&&!s.render){const i=s.template||ir(e).template;if(i){const{isCustomElement:o,compilerOptions:r}=e.appContext.config,{delimiters:a,compilerOptions:l}=s,c=Oe(Oe({isCustomElement:o,delimiters:a},r),l);s.render=ka(i,c)}}e.render=s.render||et}Cn(e),Ln(),qg(e),$n(),Jt()}function __(e){return e.attrsProxy||(e.attrsProxy=new Proxy(e.attrs,{get(t,n){return We(e,"get","$attrs"),t[n]}}))}function b_(e){const t=n=>{e.exposed=n||{}};return{get attrs(){return __(e)},slots:e.slots,emit:e.emit,expose:t}}function Ei(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(vc(mi(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Jn)return Jn[n](e)},has(t,n){return n in t||n in Jn}}))}function v_(e,t=!0){return ee(e)?e.displayName||e.name:e.name||t&&e.__name}function y_(e){return ee(e)&&"__vccOpts"in e}const Ue=(e,t)=>gg(e,t,ds);function zc(e,t,n){const s=arguments.length;return s===2?_e(t)&&!Y(t)?_o(t)?de(e,null,[t]):de(e,t):de(e,null,t):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&_o(n)&&(n=[n]),de(e,t,n))}const w_=Symbol.for("v-scx"),k_=()=>dt(w_),E_="3.3.4",T_="http://www.w3.org/2000/svg",jt=typeof document<"u"?document:null,Ea=jt&&jt.createElement("template"),S_={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,s)=>{const i=t?jt.createElementNS(T_,e):jt.createElement(e,n?{is:n}:void 0);return e==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:e=>jt.createTextNode(e),createComment:e=>jt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>jt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,s,i,o){const r=n?n.previousSibling:t.lastChild;if(i&&(i===o||i.nextSibling))for(;t.insertBefore(i.cloneNode(!0),n),!(i===o||!(i=i.nextSibling)););else{Ea.innerHTML=s?`<svg>${e}</svg>`:e;const a=Ea.content;if(s){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}t.insertBefore(a,n)}return[r?r.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function A_(e,t,n){const s=e._vtc;s&&(t=(t?[t,...s]:[...s]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function x_(e,t,n){const s=e.style,i=Te(n);if(n&&!i){if(t&&!Te(t))for(const o in t)n[o]==null&&bo(s,o,"");for(const o in n)bo(s,o,n[o])}else{const o=s.display;i?t!==n&&(s.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(s.display=o)}}const Ta=/\s*!important$/;function bo(e,t,n){if(Y(n))n.forEach(s=>bo(e,t,s));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const s=C_(e,t);Ta.test(n)?e.setProperty(Dn(s),n.replace(Ta,""),"important"):e[s]=n}}const Sa=["Webkit","Moz","ms"],Hi={};function C_(e,t){const n=Hi[t];if(n)return n;let s=ft(t);if(s!=="filter"&&s in e)return Hi[t]=s;s=di(s);for(let i=0;i<Sa.length;i++){const o=Sa[i]+s;if(o in e)return Hi[t]=o}return t}const Aa="http://www.w3.org/1999/xlink";function P_(e,t,n,s,i){if(s&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(Aa,t.slice(6,t.length)):e.setAttributeNS(Aa,t,n);else{const o=Im(t);n==null||o&&!Zl(n)?e.removeAttribute(t):e.setAttribute(t,o?"":n)}}function I_(e,t,n,s,i,o,r){if(t==="innerHTML"||t==="textContent"){s&&r(s,i,o),e[t]=n??"";return}const a=e.tagName;if(t==="value"&&a!=="PROGRESS"&&!a.includes("-")){e._value=n;const c=a==="OPTION"?e.getAttribute("value"):e.value,u=n??"";c!==u&&(e.value=u),n==null&&e.removeAttribute(t);return}let l=!1;if(n===""||n==null){const c=typeof e[t];c==="boolean"?n=Zl(n):n==null&&c==="string"?(n="",l=!0):c==="number"&&(n=0,l=!0)}try{e[t]=n}catch{}l&&e.removeAttribute(t)}function qt(e,t,n,s){e.addEventListener(t,n,s)}function O_(e,t,n,s){e.removeEventListener(t,n,s)}function N_(e,t,n,s,i=null){const o=e._vei||(e._vei={}),r=o[t];if(s&&r)r.value=s;else{const[a,l]=B_(t);if(s){const c=o[t]=M_(s,i);qt(e,a,c,l)}else r&&(O_(e,a,r,l),o[t]=void 0)}}const xa=/(?:Once|Passive|Capture)$/;function B_(e){let t;if(xa.test(e)){t={};let s;for(;s=e.match(xa);)e=e.slice(0,e.length-s[0].length),t[s[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Dn(e.slice(2)),t]}let Ui=0;const R_=Promise.resolve(),D_=()=>Ui||(R_.then(()=>Ui=0),Ui=Date.now());function M_(e,t){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;tt(L_(s,n.value),t,5,[s])};return n.value=e,n.attached=D_(),n}function L_(e,t){if(Y(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(s=>i=>!i._stopped&&s&&s(i))}else return t}const Ca=/^on[a-z]/,$_=(e,t,n,s,i=!1,o,r,a,l)=>{t==="class"?A_(e,s,i):t==="style"?x_(e,n,s):li(t)?Uo(t)||N_(e,t,n,s,r):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):W_(e,t,s,i))?I_(e,t,s,o,r,a,l):(t==="true-value"?e._trueValue=s:t==="false-value"&&(e._falseValue=s),P_(e,t,s,i))};function W_(e,t,n,s){return s?!!(t==="innerHTML"||t==="textContent"||t in e&&Ca.test(t)&&ee(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||Ca.test(t)&&Te(n)?!1:t in e}const Qs=e=>{const t=e.props["onUpdate:modelValue"]||!1;return Y(t)?n=>Ms(t,n):t};function F_(e){e.target.composing=!0}function Pa(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const V_={created(e,{modifiers:{lazy:t,trim:n,number:s}},i){e._assign=Qs(i);const o=s||i.props&&i.props.type==="number";qt(e,t?"change":"input",r=>{if(r.target.composing)return;let a=e.value;n&&(a=a.trim()),o&&(a=zs(a)),e._assign(a)}),n&&qt(e,"change",()=>{e.value=e.value.trim()}),t||(qt(e,"compositionstart",F_),qt(e,"compositionend",Pa),qt(e,"change",Pa))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:s,number:i}},o){if(e._assign=Qs(o),e.composing||document.activeElement===e&&e.type!=="range"&&(n||s&&e.value.trim()===t||(i||e.type==="number")&&zs(e.value)===t))return;const r=t??"";e.value!==r&&(e.value=r)}},H_={deep:!0,created(e,{value:t,modifiers:{number:n}},s){const i=ci(t);qt(e,"change",()=>{const o=Array.prototype.filter.call(e.options,r=>r.selected).map(r=>n?zs(Js(r)):Js(r));e._assign(e.multiple?i?new Set(o):o:o[0])}),e._assign=Qs(s)},mounted(e,{value:t}){Ia(e,t)},beforeUpdate(e,t,n){e._assign=Qs(n)},updated(e,{value:t}){Ia(e,t)}};function Ia(e,t){const n=e.multiple;if(!(n&&!Y(t)&&!ci(t))){for(let s=0,i=e.options.length;s<i;s++){const o=e.options[s],r=Js(o);if(n)Y(t)?o.selected=Nm(t,r)>-1:o.selected=t.has(r);else if(fi(Js(o),t)){e.selectedIndex!==s&&(e.selectedIndex=s);return}}!n&&e.selectedIndex!==-1&&(e.selectedIndex=-1)}}function Js(e){return"_value"in e?e._value:e.value}const U_=Oe({patchProp:$_},S_);let Oa;function j_(){return Oa||(Oa=i_(U_))}const q_=(...e)=>{const t=j_().createApp(...e),{mount:n}=t;return t.mount=s=>{const i=z_(s);if(!i)return;const o=t._component;!ee(o)&&!o.render&&!o.template&&(o.template=i.innerHTML),i.innerHTML="";const r=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),r},t};function z_(e){return Te(e)?document.querySelector(e):e}var K_=!1;/*!
  * pinia v2.1.3
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */let Kc;const Ti=e=>Kc=e,Gc=Symbol();function vo(e){return e&&typeof e=="object"&&Object.prototype.toString.call(e)==="[object Object]"&&typeof e.toJSON!="function"}var es;(function(e){e.direct="direct",e.patchObject="patch object",e.patchFunction="patch function"})(es||(es={}));function G_(){const e=nc(!0),t=e.run(()=>gi({}));let n=[],s=[];const i=mi({install(o){Ti(i),i._a=o,o.provide(Gc,i),o.config.globalProperties.$pinia=i,s.forEach(r=>n.push(r)),s=[]},use(o){return!this._a&&!K_?s.push(o):n.push(o),this},_p:n,_a:null,_e:e,_s:new Map,state:t});return i}const Yc=()=>{};function Na(e,t,n,s=Yc){e.push(t);const i=()=>{const o=e.indexOf(t);o>-1&&(e.splice(o,1),s())};return!n&&sc()&&Rm(i),i}function un(e,...t){e.slice().forEach(n=>{n(...t)})}const Y_=e=>e();function yo(e,t){e instanceof Map&&t instanceof Map&&t.forEach((n,s)=>e.set(s,n)),e instanceof Set&&t instanceof Set&&t.forEach(e.add,e);for(const n in t){if(!t.hasOwnProperty(n))continue;const s=t[n],i=e[n];vo(i)&&vo(s)&&e.hasOwnProperty(n)&&!we(s)&&!Ot(s)?e[n]=yo(i,s):e[n]=s}return e}const X_=Symbol();function Q_(e){return!vo(e)||!e.hasOwnProperty(X_)}const{assign:xt}=Object;function J_(e){return!!(we(e)&&e.effect)}function Z_(e,t,n,s){const{state:i,actions:o,getters:r}=t,a=n.state.value[e];let l;function c(){a||(n.state.value[e]=i?i():{});const u=pg(n.state.value[e]);return xt(u,o,Object.keys(r||{}).reduce((d,f)=>(d[f]=mi(Ue(()=>{Ti(n);const g=n._s.get(e);return r[f].call(g,g)})),d),{}))}return l=Xc(e,c,t,n,s,!0),l}function Xc(e,t,n={},s,i,o){let r;const a=xt({actions:{}},n),l={deep:!0};let c,u,d=[],f=[],g;const P=s.state.value[e];!o&&!P&&(s.state.value[e]={}),gi({});let w;function A(L){let I;c=u=!1,typeof L=="function"?(L(s.state.value[e]),I={type:es.patchFunction,storeId:e,events:g}):(yo(s.state.value[e],L),I={type:es.patchObject,payload:L,storeId:e,events:g});const U=w=Symbol();er().then(()=>{w===U&&(c=!0)}),u=!0,un(d,I,s.state.value[e])}const C=o?function(){const{state:I}=n,U=I?I():{};this.$patch(X=>{xt(X,U)})}:Yc;function m(){r.stop(),d=[],f=[],s._s.delete(e)}function _(L,I){return function(){Ti(s);const U=Array.from(arguments),X=[],ie=[];function ce(Q){X.push(Q)}function Ce(Q){ie.push(Q)}un(f,{args:U,name:L,store:y,after:ce,onError:Ce});let ve;try{ve=I.apply(this&&this.$id===e?this:y,U)}catch(Q){throw un(ie,Q),Q}return ve instanceof Promise?ve.then(Q=>(un(X,Q),Q)).catch(Q=>(un(ie,Q),Promise.reject(Q))):(un(X,ve),ve)}}const b={_p:s,$id:e,$onAction:Na.bind(null,f),$patch:A,$reset:C,$subscribe(L,I={}){const U=Na(d,L,I.detached,()=>X()),X=r.run(()=>Qn(()=>s.state.value[e],ie=>{(I.flush==="sync"?u:c)&&L({storeId:e,type:es.direct,events:g},ie)},xt({},l,I)));return U},$dispose:m},y=Wn(b);s._s.set(e,y);const S=s._a&&s._a.runWithContext||Y_,R=s._e.run(()=>(r=nc(),S(()=>r.run(t))));for(const L in R){const I=R[L];if(we(I)&&!J_(I)||Ot(I))o||(P&&Q_(I)&&(we(I)?I.value=P[L]:yo(I,P[L])),s.state.value[e][L]=I);else if(typeof I=="function"){const U=_(L,I);R[L]=U,a.actions[L]=I}}return xt(y,R),xt(ae(y),R),Object.defineProperty(y,"$state",{get:()=>s.state.value[e],set:L=>{A(I=>{xt(I,L)})}}),s._p.forEach(L=>{xt(y,r.run(()=>L({store:y,app:s._a,pinia:s,options:a})))}),P&&o&&n.hydrate&&n.hydrate(y.$state,P),c=!0,u=!0,y}function eb(e,t,n){let s,i;const o=typeof t=="function";typeof e=="string"?(s=e,i=o?n:t):(i=e,s=e.id);function r(a,l){const c=Jg();return a=a||(c?dt(Gc,null):null),a&&Ti(a),a=Kc,a._s.has(s)||(o?Xc(s,t,i,a):Z_(s,i,a)),a._s.get(s)}return r.$id=s,r}let tb="Store";function lr(...e){return e.reduce((t,n)=>(t[n.$id+tb]=function(){return n(this.$pinia)},t),{})}/*!
  * vue-router v4.2.1
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const hn=typeof window<"u";function nb(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const fe=Object.assign;function ji(e,t){const n={};for(const s in t){const i=t[s];n[s]=nt(i)?i.map(e):e(i)}return n}const ts=()=>{},nt=Array.isArray,sb=/\/$/,ib=e=>e.replace(sb,"");function qi(e,t,n="/"){let s,i={},o="",r="";const a=t.indexOf("#");let l=t.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(s=t.slice(0,l),o=t.slice(l+1,a>-1?a:t.length),i=e(o)),a>-1&&(s=s||t.slice(0,a),r=t.slice(a,t.length)),s=lb(s??t,n),{fullPath:s+(o&&"?")+o+r,path:s,query:i,hash:r}}function ob(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function Ba(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function rb(e,t,n){const s=t.matched.length-1,i=n.matched.length-1;return s>-1&&s===i&&Pn(t.matched[s],n.matched[i])&&Qc(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function Pn(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Qc(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!ab(e[n],t[n]))return!1;return!0}function ab(e,t){return nt(e)?Ra(e,t):nt(t)?Ra(t,e):e===t}function Ra(e,t){return nt(t)?e.length===t.length&&e.every((n,s)=>n===t[s]):e.length===1&&e[0]===t}function lb(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),s=e.split("/"),i=s[s.length-1];(i===".."||i===".")&&s.push("");let o=n.length-1,r,a;for(r=0;r<s.length;r++)if(a=s[r],a!==".")if(a==="..")o>1&&o--;else break;return n.slice(0,o).join("/")+"/"+s.slice(r-(r===s.length?1:0)).join("/")}var ps;(function(e){e.pop="pop",e.push="push"})(ps||(ps={}));var ns;(function(e){e.back="back",e.forward="forward",e.unknown=""})(ns||(ns={}));function cb(e){if(!e)if(hn){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),ib(e)}const ub=/^[^#]+#/;function db(e,t){return e.replace(ub,"#")+t}function pb(e,t){const n=document.documentElement.getBoundingClientRect(),s=e.getBoundingClientRect();return{behavior:t.behavior,left:s.left-n.left-(t.left||0),top:s.top-n.top-(t.top||0)}}const Si=()=>({left:window.pageXOffset,top:window.pageYOffset});function fb(e){let t;if("el"in e){const n=e.el,s=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;t=pb(i,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function Da(e,t){return(history.state?history.state.position-t:-1)+e}const wo=new Map;function hb(e,t){wo.set(e,t)}function mb(e){const t=wo.get(e);return wo.delete(e),t}let gb=()=>location.protocol+"//"+location.host;function Jc(e,t){const{pathname:n,search:s,hash:i}=t,o=e.indexOf("#");if(o>-1){let a=i.includes(e.slice(o))?e.slice(o).length:1,l=i.slice(a);return l[0]!=="/"&&(l="/"+l),Ba(l,"")}return Ba(n,e)+s+i}function _b(e,t,n,s){let i=[],o=[],r=null;const a=({state:f})=>{const g=Jc(e,location),P=n.value,w=t.value;let A=0;if(f){if(n.value=g,t.value=f,r&&r===P){r=null;return}A=w?f.position-w.position:0}else s(g);i.forEach(C=>{C(n.value,P,{delta:A,type:ps.pop,direction:A?A>0?ns.forward:ns.back:ns.unknown})})};function l(){r=n.value}function c(f){i.push(f);const g=()=>{const P=i.indexOf(f);P>-1&&i.splice(P,1)};return o.push(g),g}function u(){const{history:f}=window;f.state&&f.replaceState(fe({},f.state,{scroll:Si()}),"")}function d(){for(const f of o)f();o=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:d}}function Ma(e,t,n,s=!1,i=!1){return{back:e,current:t,forward:n,replaced:s,position:window.history.length,scroll:i?Si():null}}function bb(e){const{history:t,location:n}=window,s={value:Jc(e,n)},i={value:t.state};i.value||o(s.value,{back:null,current:s.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function o(l,c,u){const d=e.indexOf("#"),f=d>-1?(n.host&&document.querySelector("base")?e:e.slice(d))+l:gb()+e+l;try{t[u?"replaceState":"pushState"](c,"",f),i.value=c}catch(g){console.error(g),n[u?"replace":"assign"](f)}}function r(l,c){const u=fe({},t.state,Ma(i.value.back,l,i.value.forward,!0),c,{position:i.value.position});o(l,u,!0),s.value=l}function a(l,c){const u=fe({},i.value,t.state,{forward:l,scroll:Si()});o(u.current,u,!0);const d=fe({},Ma(s.value,l,null),{position:u.position+1},c);o(l,d,!1),s.value=l}return{location:s,state:i,push:a,replace:r}}function vb(e){e=cb(e);const t=bb(e),n=_b(e,t.state,t.location,t.replace);function s(o,r=!0){r||n.pauseListeners(),history.go(o)}const i=fe({location:"",base:e,go:s,createHref:db.bind(null,e)},t,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>t.state.value}),i}function yb(e){return typeof e=="string"||e&&typeof e=="object"}function Zc(e){return typeof e=="string"||typeof e=="symbol"}const At={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},eu=Symbol("");var La;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(La||(La={}));function In(e,t){return fe(new Error,{type:e,[eu]:!0},t)}function ht(e,t){return e instanceof Error&&eu in e&&(t==null||!!(e.type&t))}const $a="[^/]+?",wb={sensitive:!1,strict:!1,start:!0,end:!0},kb=/[.+*?^${}()[\]/\\]/g;function Eb(e,t){const n=fe({},wb,t),s=[];let i=n.start?"^":"";const o=[];for(const c of e){const u=c.length?[]:[90];n.strict&&!c.length&&(i+="/");for(let d=0;d<c.length;d++){const f=c[d];let g=40+(n.sensitive?.25:0);if(f.type===0)d||(i+="/"),i+=f.value.replace(kb,"\\$&"),g+=40;else if(f.type===1){const{value:P,repeatable:w,optional:A,regexp:C}=f;o.push({name:P,repeatable:w,optional:A});const m=C||$a;if(m!==$a){g+=10;try{new RegExp(`(${m})`)}catch(b){throw new Error(`Invalid custom RegExp for param "${P}" (${m}): `+b.message)}}let _=w?`((?:${m})(?:/(?:${m}))*)`:`(${m})`;d||(_=A&&c.length<2?`(?:/${_})`:"/"+_),A&&(_+="?"),i+=_,g+=20,A&&(g+=-8),w&&(g+=-20),m===".*"&&(g+=-50)}u.push(g)}s.push(u)}if(n.strict&&n.end){const c=s.length-1;s[c][s[c].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const r=new RegExp(i,n.sensitive?"":"i");function a(c){const u=c.match(r),d={};if(!u)return null;for(let f=1;f<u.length;f++){const g=u[f]||"",P=o[f-1];d[P.name]=g&&P.repeatable?g.split("/"):g}return d}function l(c){let u="",d=!1;for(const f of e){(!d||!u.endsWith("/"))&&(u+="/"),d=!1;for(const g of f)if(g.type===0)u+=g.value;else if(g.type===1){const{value:P,repeatable:w,optional:A}=g,C=P in c?c[P]:"";if(nt(C)&&!w)throw new Error(`Provided param "${P}" is an array but it is not repeatable (* or + modifiers)`);const m=nt(C)?C.join("/"):C;if(!m)if(A)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):d=!0);else throw new Error(`Missing required param "${P}"`);u+=m}}return u||"/"}return{re:r,score:s,keys:o,parse:a,stringify:l}}function Tb(e,t){let n=0;for(;n<e.length&&n<t.length;){const s=t[n]-e[n];if(s)return s;n++}return e.length<t.length?e.length===1&&e[0]===40+40?-1:1:e.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function Sb(e,t){let n=0;const s=e.score,i=t.score;for(;n<s.length&&n<i.length;){const o=Tb(s[n],i[n]);if(o)return o;n++}if(Math.abs(i.length-s.length)===1){if(Wa(s))return 1;if(Wa(i))return-1}return i.length-s.length}function Wa(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const Ab={type:0,value:""},xb=/[a-zA-Z0-9_]/;function Cb(e){if(!e)return[[]];if(e==="/")return[[Ab]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(g){throw new Error(`ERR (${n})/"${c}": ${g}`)}let n=0,s=n;const i=[];let o;function r(){o&&i.push(o),o=[]}let a=0,l,c="",u="";function d(){c&&(n===0?o.push({type:0,value:c}):n===1||n===2||n===3?(o.length>1&&(l==="*"||l==="+")&&t(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),o.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):t("Invalid state to consume buffer"),c="")}function f(){c+=l}for(;a<e.length;){if(l=e[a++],l==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:l==="/"?(c&&d(),r()):l===":"?(d(),n=1):f();break;case 4:f(),n=s;break;case 1:l==="("?n=2:xb.test(l)?f():(d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${c}"`),d(),r(),i}function Pb(e,t,n){const s=Eb(Cb(e.path),n),i=fe(s,{record:e,parent:t,children:[],alias:[]});return t&&!i.record.aliasOf==!t.record.aliasOf&&t.children.push(i),i}function Ib(e,t){const n=[],s=new Map;t=Ha({strict:!1,end:!0,sensitive:!1},t);function i(u){return s.get(u)}function o(u,d,f){const g=!f,P=Ob(u);P.aliasOf=f&&f.record;const w=Ha(t,u),A=[P];if("alias"in u){const _=typeof u.alias=="string"?[u.alias]:u.alias;for(const b of _)A.push(fe({},P,{components:f?f.record.components:P.components,path:b,aliasOf:f?f.record:P}))}let C,m;for(const _ of A){const{path:b}=_;if(d&&b[0]!=="/"){const y=d.record.path,S=y[y.length-1]==="/"?"":"/";_.path=d.record.path+(b&&S+b)}if(C=Pb(_,d,w),f?f.alias.push(C):(m=m||C,m!==C&&m.alias.push(C),g&&u.name&&!Va(C)&&r(u.name)),P.children){const y=P.children;for(let S=0;S<y.length;S++)o(y[S],C,f&&f.children[S])}f=f||C,(C.record.components&&Object.keys(C.record.components).length||C.record.name||C.record.redirect)&&l(C)}return m?()=>{r(m)}:ts}function r(u){if(Zc(u)){const d=s.get(u);d&&(s.delete(u),n.splice(n.indexOf(d),1),d.children.forEach(r),d.alias.forEach(r))}else{const d=n.indexOf(u);d>-1&&(n.splice(d,1),u.record.name&&s.delete(u.record.name),u.children.forEach(r),u.alias.forEach(r))}}function a(){return n}function l(u){let d=0;for(;d<n.length&&Sb(u,n[d])>=0&&(u.record.path!==n[d].record.path||!tu(u,n[d]));)d++;n.splice(d,0,u),u.record.name&&!Va(u)&&s.set(u.record.name,u)}function c(u,d){let f,g={},P,w;if("name"in u&&u.name){if(f=s.get(u.name),!f)throw In(1,{location:u});w=f.record.name,g=fe(Fa(d.params,f.keys.filter(m=>!m.optional).map(m=>m.name)),u.params&&Fa(u.params,f.keys.map(m=>m.name))),P=f.stringify(g)}else if("path"in u)P=u.path,f=n.find(m=>m.re.test(P)),f&&(g=f.parse(P),w=f.record.name);else{if(f=d.name?s.get(d.name):n.find(m=>m.re.test(d.path)),!f)throw In(1,{location:u,currentLocation:d});w=f.record.name,g=fe({},d.params,u.params),P=f.stringify(g)}const A=[];let C=f;for(;C;)A.unshift(C.record),C=C.parent;return{name:w,path:P,params:g,matched:A,meta:Bb(A)}}return e.forEach(u=>o(u)),{addRoute:o,resolve:c,removeRoute:r,getRoutes:a,getRecordMatcher:i}}function Fa(e,t){const n={};for(const s of t)s in e&&(n[s]=e[s]);return n}function Ob(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:Nb(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function Nb(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const s in e.components)t[s]=typeof n=="boolean"?n:n[s];return t}function Va(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Bb(e){return e.reduce((t,n)=>fe(t,n.meta),{})}function Ha(e,t){const n={};for(const s in e)n[s]=s in t?t[s]:e[s];return n}function tu(e,t){return t.children.some(n=>n===e||tu(e,n))}const nu=/#/g,Rb=/&/g,Db=/\//g,Mb=/=/g,Lb=/\?/g,su=/\+/g,$b=/%5B/g,Wb=/%5D/g,iu=/%5E/g,Fb=/%60/g,ou=/%7B/g,Vb=/%7C/g,ru=/%7D/g,Hb=/%20/g;function cr(e){return encodeURI(""+e).replace(Vb,"|").replace($b,"[").replace(Wb,"]")}function Ub(e){return cr(e).replace(ou,"{").replace(ru,"}").replace(iu,"^")}function ko(e){return cr(e).replace(su,"%2B").replace(Hb,"+").replace(nu,"%23").replace(Rb,"%26").replace(Fb,"`").replace(ou,"{").replace(ru,"}").replace(iu,"^")}function jb(e){return ko(e).replace(Mb,"%3D")}function qb(e){return cr(e).replace(nu,"%23").replace(Lb,"%3F")}function zb(e){return e==null?"":qb(e).replace(Db,"%2F")}function Zs(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function Kb(e){const t={};if(e===""||e==="?")return t;const s=(e[0]==="?"?e.slice(1):e).split("&");for(let i=0;i<s.length;++i){const o=s[i].replace(su," "),r=o.indexOf("="),a=Zs(r<0?o:o.slice(0,r)),l=r<0?null:Zs(o.slice(r+1));if(a in t){let c=t[a];nt(c)||(c=t[a]=[c]),c.push(l)}else t[a]=l}return t}function Ua(e){let t="";for(let n in e){const s=e[n];if(n=jb(n),s==null){s!==void 0&&(t+=(t.length?"&":"")+n);continue}(nt(s)?s.map(o=>o&&ko(o)):[s&&ko(s)]).forEach(o=>{o!==void 0&&(t+=(t.length?"&":"")+n,o!=null&&(t+="="+o))})}return t}function Gb(e){const t={};for(const n in e){const s=e[n];s!==void 0&&(t[n]=nt(s)?s.map(i=>i==null?null:""+i):s==null?s:""+s)}return t}const Yb=Symbol(""),ja=Symbol(""),ur=Symbol(""),au=Symbol(""),Eo=Symbol("");function zn(){let e=[];function t(s){return e.push(s),()=>{const i=e.indexOf(s);i>-1&&e.splice(i,1)}}function n(){e=[]}return{add:t,list:()=>e,reset:n}}function Pt(e,t,n,s,i){const o=s&&(s.enterCallbacks[i]=s.enterCallbacks[i]||[]);return()=>new Promise((r,a)=>{const l=d=>{d===!1?a(In(4,{from:n,to:t})):d instanceof Error?a(d):yb(d)?a(In(2,{from:t,to:d})):(o&&s.enterCallbacks[i]===o&&typeof d=="function"&&o.push(d),r())},c=e.call(s&&s.instances[i],t,n,l);let u=Promise.resolve(c);e.length<3&&(u=u.then(l)),u.catch(d=>a(d))})}function zi(e,t,n,s){const i=[];for(const o of e)for(const r in o.components){let a=o.components[r];if(!(t!=="beforeRouteEnter"&&!o.instances[r]))if(Xb(a)){const c=(a.__vccOpts||a)[t];c&&i.push(Pt(c,n,s,o,r))}else{let l=a();i.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${r}" at "${o.path}"`));const u=nb(c)?c.default:c;o.components[r]=u;const f=(u.__vccOpts||u)[t];return f&&Pt(f,n,s,o,r)()}))}}return i}function Xb(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function qa(e){const t=dt(ur),n=dt(au),s=Ue(()=>t.resolve(Qt(e.to))),i=Ue(()=>{const{matched:l}=s.value,{length:c}=l,u=l[c-1],d=n.matched;if(!u||!d.length)return-1;const f=d.findIndex(Pn.bind(null,u));if(f>-1)return f;const g=za(l[c-2]);return c>1&&za(u)===g&&d[d.length-1].path!==g?d.findIndex(Pn.bind(null,l[c-2])):f}),o=Ue(()=>i.value>-1&&ev(n.params,s.value.params)),r=Ue(()=>i.value>-1&&i.value===n.matched.length-1&&Qc(n.params,s.value.params));function a(l={}){return Zb(l)?t[Qt(e.replace)?"replace":"push"](Qt(e.to)).catch(ts):Promise.resolve()}return{route:s,href:Ue(()=>s.value.href),isActive:o,isExactActive:r,navigate:a}}const Qb=nr({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:qa,setup(e,{slots:t}){const n=Wn(qa(e)),{options:s}=dt(ur),i=Ue(()=>({[Ka(e.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[Ka(e.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const o=t.default&&t.default(n);return e.custom?o:zc("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},o)}}}),Jb=Qb;function Zb(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function ev(e,t){for(const n in t){const s=t[n],i=e[n];if(typeof s=="string"){if(s!==i)return!1}else if(!nt(i)||i.length!==s.length||s.some((o,r)=>o!==i[r]))return!1}return!0}function za(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Ka=(e,t,n)=>e??t??n,tv=nr({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const s=dt(Eo),i=Ue(()=>e.route||s.value),o=dt(ja,0),r=Ue(()=>{let c=Qt(o);const{matched:u}=i.value;let d;for(;(d=u[c])&&!d.components;)c++;return c}),a=Ue(()=>i.value.matched[r.value]);$s(ja,Ue(()=>r.value+1)),$s(Yb,a),$s(Eo,i);const l=gi();return Qn(()=>[l.value,a.value,e.name],([c,u,d],[f,g,P])=>{u&&(u.instances[d]=c,g&&g!==u&&c&&c===f&&(u.leaveGuards.size||(u.leaveGuards=g.leaveGuards),u.updateGuards.size||(u.updateGuards=g.updateGuards))),c&&u&&(!g||!Pn(u,g)||!f)&&(u.enterCallbacks[d]||[]).forEach(w=>w(c))},{flush:"post"}),()=>{const c=i.value,u=e.name,d=a.value,f=d&&d.components[u];if(!f)return Ga(n.default,{Component:f,route:c});const g=d.props[u],P=g?g===!0?c.params:typeof g=="function"?g(c):g:null,A=zc(f,fe({},P,t,{onVnodeUnmounted:C=>{C.component.isUnmounted&&(d.instances[u]=null)},ref:l}));return Ga(n.default,{Component:A,route:c})||A}}});function Ga(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const lu=tv;function nv(e){const t=Ib(e.routes,e),n=e.parseQuery||Kb,s=e.stringifyQuery||Ua,i=e.history,o=zn(),r=zn(),a=zn(),l=cg(At);let c=At;hn&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=ji.bind(null,E=>""+E),d=ji.bind(null,zb),f=ji.bind(null,Zs);function g(E,W){let $,q;return Zc(E)?($=t.getRecordMatcher(E),q=W):q=E,t.addRoute(q,$)}function P(E){const W=t.getRecordMatcher(E);W&&t.removeRoute(W)}function w(){return t.getRoutes().map(E=>E.record)}function A(E){return!!t.getRecordMatcher(E)}function C(E,W){if(W=fe({},W||l.value),typeof E=="string"){const v=qi(n,E,W.path),T=t.resolve({path:v.path},W),x=i.createHref(v.fullPath);return fe(v,T,{params:f(T.params),hash:Zs(v.hash),redirectedFrom:void 0,href:x})}let $;if("path"in E)$=fe({},E,{path:qi(n,E.path,W.path).path});else{const v=fe({},E.params);for(const T in v)v[T]==null&&delete v[T];$=fe({},E,{params:d(v)}),W.params=d(W.params)}const q=t.resolve($,W),ne=E.hash||"";q.params=u(f(q.params));const p=ob(s,fe({},E,{hash:Ub(ne),path:q.path})),h=i.createHref(p);return fe({fullPath:p,hash:ne,query:s===Ua?Gb(E.query):E.query||{}},q,{redirectedFrom:void 0,href:h})}function m(E){return typeof E=="string"?qi(n,E,l.value.path):fe({},E)}function _(E,W){if(c!==E)return In(8,{from:W,to:E})}function b(E){return R(E)}function y(E){return b(fe(m(E),{replace:!0}))}function S(E){const W=E.matched[E.matched.length-1];if(W&&W.redirect){const{redirect:$}=W;let q=typeof $=="function"?$(E):$;return typeof q=="string"&&(q=q.includes("?")||q.includes("#")?q=m(q):{path:q},q.params={}),fe({query:E.query,hash:E.hash,params:"path"in q?{}:E.params},q)}}function R(E,W){const $=c=C(E),q=l.value,ne=E.state,p=E.force,h=E.replace===!0,v=S($);if(v)return R(fe(m(v),{state:typeof v=="object"?fe({},ne,v.state):ne,force:p,replace:h}),W||$);const T=$;T.redirectedFrom=W;let x;return!p&&rb(s,q,$)&&(x=In(16,{to:T,from:q}),Ae(q,q,!0,!1)),(x?Promise.resolve(x):U(T,q)).catch(O=>ht(O)?ht(O,2)?O:ke(O):G(O,T,q)).then(O=>{if(O){if(ht(O,2))return R(fe({replace:h},m(O.to),{state:typeof O.to=="object"?fe({},ne,O.to.state):ne,force:p}),W||T)}else O=ie(T,q,!0,h,ne);return X(T,q,O),O})}function L(E,W){const $=_(E,W);return $?Promise.reject($):Promise.resolve()}function I(E){const W=ye.values().next().value;return W&&typeof W.runWithContext=="function"?W.runWithContext(E):E()}function U(E,W){let $;const[q,ne,p]=sv(E,W);$=zi(q.reverse(),"beforeRouteLeave",E,W);for(const v of q)v.leaveGuards.forEach(T=>{$.push(Pt(T,E,W))});const h=L.bind(null,E,W);return $.push(h),ge($).then(()=>{$=[];for(const v of o.list())$.push(Pt(v,E,W));return $.push(h),ge($)}).then(()=>{$=zi(ne,"beforeRouteUpdate",E,W);for(const v of ne)v.updateGuards.forEach(T=>{$.push(Pt(T,E,W))});return $.push(h),ge($)}).then(()=>{$=[];for(const v of E.matched)if(v.beforeEnter&&!W.matched.includes(v))if(nt(v.beforeEnter))for(const T of v.beforeEnter)$.push(Pt(T,E,W));else $.push(Pt(v.beforeEnter,E,W));return $.push(h),ge($)}).then(()=>(E.matched.forEach(v=>v.enterCallbacks={}),$=zi(p,"beforeRouteEnter",E,W),$.push(h),ge($))).then(()=>{$=[];for(const v of r.list())$.push(Pt(v,E,W));return $.push(h),ge($)}).catch(v=>ht(v,8)?v:Promise.reject(v))}function X(E,W,$){for(const q of a.list())I(()=>q(E,W,$))}function ie(E,W,$,q,ne){const p=_(E,W);if(p)return p;const h=W===At,v=hn?history.state:{};$&&(q||h?i.replace(E.fullPath,fe({scroll:h&&v&&v.scroll},ne)):i.push(E.fullPath,ne)),l.value=E,Ae(E,W,$,h),ke()}let ce;function Ce(){ce||(ce=i.listen((E,W,$)=>{if(!xe.listening)return;const q=C(E),ne=S(q);if(ne){R(fe(ne,{replace:!0}),q).catch(ts);return}c=q;const p=l.value;hn&&hb(Da(p.fullPath,$.delta),Si()),U(q,p).catch(h=>ht(h,12)?h:ht(h,2)?(R(h.to,q).then(v=>{ht(v,20)&&!$.delta&&$.type===ps.pop&&i.go(-1,!1)}).catch(ts),Promise.reject()):($.delta&&i.go(-$.delta,!1),G(h,q,p))).then(h=>{h=h||ie(q,p,!1),h&&($.delta&&!ht(h,8)?i.go(-$.delta,!1):$.type===ps.pop&&ht(h,20)&&i.go(-1,!1)),X(q,p,h)}).catch(ts)}))}let ve=zn(),Q=zn(),Z;function G(E,W,$){ke(E);const q=Q.list();return q.length?q.forEach(ne=>ne(E,W,$)):console.error(E),Promise.reject(E)}function he(){return Z&&l.value!==At?Promise.resolve():new Promise((E,W)=>{ve.add([E,W])})}function ke(E){return Z||(Z=!E,Ce(),ve.list().forEach(([W,$])=>E?$(E):W()),ve.reset()),E}function Ae(E,W,$,q){const{scrollBehavior:ne}=e;if(!hn||!ne)return Promise.resolve();const p=!$&&mb(Da(E.fullPath,0))||(q||!$)&&history.state&&history.state.scroll||null;return er().then(()=>ne(E,W,p)).then(h=>h&&fb(h)).catch(h=>G(h,E,W))}const le=E=>i.go(E);let Fe;const ye=new Set,xe={currentRoute:l,listening:!0,addRoute:g,removeRoute:P,hasRoute:A,getRoutes:w,resolve:C,options:e,push:b,replace:y,go:le,back:()=>le(-1),forward:()=>le(1),beforeEach:o.add,beforeResolve:r.add,afterEach:a.add,onError:Q.add,isReady:he,install(E){const W=this;E.component("RouterLink",Jb),E.component("RouterView",lu),E.config.globalProperties.$router=W,Object.defineProperty(E.config.globalProperties,"$route",{enumerable:!0,get:()=>Qt(l)}),hn&&!Fe&&l.value===At&&(Fe=!0,b(i.location).catch(ne=>{}));const $={};for(const ne in At)$[ne]=Ue(()=>l.value[ne]);E.provide(ur,W),E.provide(au,Wn($)),E.provide(Eo,l);const q=E.unmount;ye.add(E),E.unmount=function(){ye.delete(E),ye.size<1&&(c=At,ce&&ce(),ce=null,l.value=At,Fe=!1,Z=!1),q()}}};function ge(E){return E.reduce((W,$)=>W.then(()=>I($)),Promise.resolve())}return xe}function sv(e,t){const n=[],s=[],i=[],o=Math.max(t.matched.length,e.matched.length);for(let r=0;r<o;r++){const a=t.matched[r];a&&(e.matched.find(c=>Pn(c,a))?s.push(a):n.push(a));const l=e.matched[r];l&&(t.matched.find(c=>Pn(c,l))||i.push(l))}return[n,s,i]}const Se=(e,t)=>{const n=e.__vccOpts||e;for(const[s,i]of t)n[s]=i;return n},iv={},ov={class:"navbar navbar-expand-lg navbar-dark"},rv=Uc('<div class="container-fluid" data-v-3963988f><a class="navbar-brand" href="/" data-v-3963988f><div style="border:0px solid white;border-radius:0px;background-color:transparent;background-image:url(&#39;/webapp/logo.png&#39;);background-repeat:round;background-origin:content-box;width:30px;height:30px;" class="d-inline-block align-top" data-v-3963988f></div> Insightic </a><button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" data-v-3963988f><span class="navbar-toggler-icon" data-v-3963988f></span></button><div class="collapse navbar-collapse" id="navbarNav" data-v-3963988f><ul class="navbar-nav" data-v-3963988f><li class="nav-item active" data-v-3963988f><a class="nav-link" href="/webapp" data-v-3963988f>Teams</a></li><li class="nav-item" data-v-3963988f><a class="nav-link" href="#" data-v-3963988f>Contact Us</a></li></ul></div></div>',1),av=[rv];function lv(e,t){return F(),H("nav",ov,av)}const cv=Se(iv,[["render",lv],["__scopeId","data-v-3963988f"]]),uv=nr({__name:"App",setup(e){return(t,n)=>(F(),H(me,null,[de(cv),de(Qt(lu))],64))}}),dv={props:{name:String,guid:String},methods:{onClick(){this.$router.push(`/organizations/${this.guid}`)}}};const cu=e=>(Fn("data-v-e1e02cda"),e=e(),Vn(),e),pv={class:"d-flex",style:{"justify-content":"space-around"}},fv=cu(()=>k("i",{class:"bi bi-boxes"},null,-1)),hv=cu(()=>k("i",{class:"bi bi-chevron-right"},null,-1));function mv(e,t,n,s,i,o){return F(),H("div",{class:"org-button mx-auto",onClick:t[0]||(t[0]=(...r)=>o.onClick&&o.onClick(...r))},[k("div",pv,[fv,k("div",null,re(n.name),1),hv])])}const gv=Se(dv,[["render",mv],["__scopeId","data-v-e1e02cda"]]),_v=`// Biswap token with Governance.
contract BSWToken is BEP20('Biswap', 'BSW') {
  using EnumerableSet for EnumerableSet.AddressSet;
  EnumerableSet.AddressSet private _minters;

  /// @notice Creates \`_amount\` token to \`_to\`.
  function mint(address _to, uint256 _amount) public onlyMinter returns (bool) {
    _mint(_to, _amount);
    _moveDelegates(address(0), _delegates[_to], _amount);
    return true;
  }

  // Copied and modified from YAM code:
  // https://github.com/yam-finance/yam-protocol/blob/master/contracts/token/YAMGovernanceStorage.sol
  // https://github.com/yam-finance/yam-protocol/blob/master/contracts/token/YAMGovernance.sol
  // Which is copied and modified from COMPOUND:
  // https://github.com/compound-finance/compound-protocol/blob/master/contracts/Governance/Comp.sol

  /// @notice A record of each accounts delegate
  mapping(address => address) internal _delegates;

  /// @notice A checkpoint for marking number of votes from a given block
  struct Checkpoint {
    uint32 fromBlock;
    uint256 votes;
  }

  /// @notice A record of votes checkpoints for each account, by index
  mapping(address => mapping(uint32 => Checkpoint)) public checkpoints;

  /// @notice The number of checkpoints for each account
  mapping(address => uint32) public numCheckpoints;

  /// @notice The EIP-712 typehash for the contract's domain
  bytes32 public constant DOMAIN_TYPEHASH =
    keccak256('EIP712Domain(string name,uint256 chainId,address verifyingContract)');

  /// @notice The EIP-712 typehash for the delegation struct used by the contract
  bytes32 public constant DELEGATION_TYPEHASH =
    keccak256('Delegation(address delegatee,uint256 nonce,uint256 expiry)');

  /// @notice A record of states for signing / validating signatures
  mapping(address => uint) public nonces;

  /// @notice An event thats emitted when an account changes its delegate
  event DelegateChanged(
    address indexed delegator,
    address indexed fromDelegate,
    address indexed toDelegate
  );

  /// @notice An event thats emitted when a delegate account's vote balance changes
  event DelegateVotesChanged(address indexed delegate, uint previousBalance, uint newBalance);

  /**
   * @notice Delegate votes from \`msg.sender\` to \`delegatee\`
   * @param delegator The address to get delegatee for
   */
  function delegates(address delegator) external view returns (address) {
    return _delegates[delegator];
  }

  /**
   * @notice Delegate votes from \`msg.sender\` to \`delegatee\`
   * @param delegatee The address to delegate votes to
   */
  function delegate(address delegatee) external {
    return _delegate(msg.sender, delegatee);
  }

  /**
   * @notice Delegates votes from signatory to \`delegatee\`
   * @param delegatee The address to delegate votes to
   * @param nonce The contract state required to match the signature
   * @param expiry The time at which to expire the signature
   * @param v The recovery byte of the signature
   * @param r Half of the ECDSA signature pair
   * @param s Half of the ECDSA signature pair
   */
  function delegateBySig(
    address delegatee,
    uint nonce,
    uint expiry,
    uint8 v,
    bytes32 r,
    bytes32 s
  ) external {
    bytes32 domainSeparator = keccak256(
      abi.encode(DOMAIN_TYPEHASH, keccak256(bytes(name())), getChainId(), address(this))
    );

    bytes32 structHash = keccak256(abi.encode(DELEGATION_TYPEHASH, delegatee, nonce, expiry));

    bytes32 digest = keccak256(abi.encodePacked('\\x19\\x01', domainSeparator, structHash));

    address signatory = ecrecover(digest, v, r, s);
    require(signatory != address(0), 'BSW::delegateBySig: invalid signature');
    require(nonce == nonces[signatory]++, 'BSW::delegateBySig: invalid nonce');
    require(now <= expiry, 'BSW::delegateBySig: signature expired');
    return _delegate(signatory, delegatee);
  }

  /**
   * @notice Gets the current votes balance for \`account\`
   * @param account The address to get votes balance
   * @return The number of current votes for \`account\`
   */
  function getCurrentVotes(address account) external view returns (uint256) {
    uint32 nCheckpoints = numCheckpoints[account];
    return nCheckpoints > 0 ? checkpoints[account][nCheckpoints - 1].votes : 0;
  }

  /**
   * @notice Determine the prior number of votes for an account as of a block number
   * @dev Block number must be a finalized block or else this function will revert to prevent misinformation.
   * @param account The address of the account to check
   * @param blockNumber The block number to get the vote balance at
   * @return The number of votes the account had as of the given block
   */
  function getPriorVotes(address account, uint blockNumber) external view returns (uint256) {
    require(blockNumber < block.number, 'BSW::getPriorVotes: not yet determined');

    uint32 nCheckpoints = numCheckpoints[account];
    if (nCheckpoints == 0) {
      return 0;
    }

    // First check most recent balance
    if (checkpoints[account][nCheckpoints - 1].fromBlock <= blockNumber) {
      return checkpoints[account][nCheckpoints - 1].votes;
    }

    // Next check implicit zero balance
    if (checkpoints[account][0].fromBlock > blockNumber) {
      return 0;
    }

    uint32 lower = 0;
    uint32 upper = nCheckpoints - 1;
    while (upper > lower) {
      uint32 center = upper - (upper - lower) / 2; // ceil, avoiding overflow
      Checkpoint memory cp = checkpoints[account][center];
      if (cp.fromBlock == blockNumber) {
        return cp.votes;
      } else if (cp.fromBlock < blockNumber) {
        lower = center;
      } else {
        upper = center - 1;
      }
    }
    return checkpoints[account][lower].votes;
  }

  function _delegate(address delegator, address delegatee) internal {
    address currentDelegate = _delegates[delegator];
    uint256 delegatorBalance = balanceOf(delegator); // balance of underlying BSWs (not scaled);
    _delegates[delegator] = delegatee;

    emit DelegateChanged(delegator, currentDelegate, delegatee);

    _moveDelegates(currentDelegate, delegatee, delegatorBalance);
  }

  function _moveDelegates(address srcRep, address dstRep, uint256 amount) internal {
    if (srcRep != dstRep && amount > 0) {
      if (srcRep != address(0)) {
        // decrease old representative
        uint32 srcRepNum = numCheckpoints[srcRep];
        uint256 srcRepOld = srcRepNum > 0 ? checkpoints[srcRep][srcRepNum - 1].votes : 0;
        uint256 srcRepNew = srcRepOld.sub(amount);
        _writeCheckpoint(srcRep, srcRepNum, srcRepOld, srcRepNew);
      }

      if (dstRep != address(0)) {
        // increase new representative
        uint32 dstRepNum = numCheckpoints[dstRep];
        uint256 dstRepOld = dstRepNum > 0 ? checkpoints[dstRep][dstRepNum - 1].votes : 0;
        uint256 dstRepNew = dstRepOld.add(amount);
        _writeCheckpoint(dstRep, dstRepNum, dstRepOld, dstRepNew);
      }
    }
  }

  function _writeCheckpoint(
    address delegatee,
    uint32 nCheckpoints,
    uint256 oldVotes,
    uint256 newVotes
  ) internal {
    uint32 blockNumber = safe32(
      block.number,
      'BSW::_writeCheckpoint: block number exceeds 32 bits'
    );

    if (nCheckpoints > 0 && checkpoints[delegatee][nCheckpoints - 1].fromBlock == blockNumber) {
      checkpoints[delegatee][nCheckpoints - 1].votes = newVotes;
    } else {
      checkpoints[delegatee][nCheckpoints] = Checkpoint(blockNumber, newVotes);
      numCheckpoints[delegatee] = nCheckpoints + 1;
    }

    emit DelegateVotesChanged(delegatee, oldVotes, newVotes);
  }

  function safe32(uint n, string memory errorMessage) internal pure returns (uint32) {
    require(n < 2 ** 32, errorMessage);
    return uint32(n);
  }

  function getChainId() internal pure returns (uint) {
    uint256 chainId;
    assembly {
      chainId := chainid()
    }
    return chainId;
  }

  function addMinter(address _addMinter) public onlyOwner returns (bool) {
    require(_addMinter != address(0), 'BSW: _addMinter is the zero address');
    return EnumerableSet.add(_minters, _addMinter);
  }

  function delMinter(address _delMinter) public onlyOwner returns (bool) {
    require(_delMinter != address(0), 'BSW: _delMinter is the zero address');
    return EnumerableSet.remove(_minters, _delMinter);
  }

  function getMinterLength() public view returns (uint256) {
    return EnumerableSet.length(_minters);
  }

  function isMinter(address account) public view returns (bool) {
    return EnumerableSet.contains(_minters, account);
  }

  function getMinter(uint256 _index) public view onlyOwner returns (address) {
    require(_index <= getMinterLength() - 1, 'BSW: index out of bounds');
    return EnumerableSet.at(_minters, _index);
  }

  // modifier for mint function
  modifier onlyMinter() {
    require(isMinter(msg.sender), 'caller is not the minter');
    _;
  }
}
`,bv=`pragma solidity =0.5.16;

import './interfaces/IBiswapERC20.sol';
import './libraries/SafeMath.sol';

contract BiswapERC20 is IBiswapERC20 {
  using SafeMath for uint;

  string public constant name = 'Biswap LPs';
  string public constant symbol = 'BSW-LP';
  uint8 public constant decimals = 18;
  uint public totalSupply;
  mapping(address => uint) public balanceOf;
  mapping(address => mapping(address => uint)) public allowance;

  bytes32 public DOMAIN_SEPARATOR;
  // keccak256("Permit(address owner,address spender,uint256 value,uint256 nonce,uint256 deadline)");
  bytes32 public constant PERMIT_TYPEHASH =
    0x6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c9;
  mapping(address => uint) public nonces;

  event Approval(address indexed owner, address indexed spender, uint value);
  event Transfer(address indexed from, address indexed to, uint value);

  constructor() public {
    uint chainId;
    assembly {
      chainId := chainid
    }
    DOMAIN_SEPARATOR = keccak256(
      abi.encode(
        keccak256(
          'EIP712Domain(string name,string version,uint256 chainId,address verifyingContract)'
        ),
        keccak256(bytes(name)),
        keccak256(bytes('1')),
        chainId,
        address(this)
      )
    );
  }

  function _mint(address to, uint value) internal {
    totalSupply = totalSupply.add(value);
    balanceOf[to] = balanceOf[to].add(value);
    emit Transfer(address(0), to, value);
  }

  function _burn(address from, uint value) internal {
    balanceOf[from] = balanceOf[from].sub(value);
    totalSupply = totalSupply.sub(value);
    emit Transfer(from, address(0), value);
  }

  function _approve(address owner, address spender, uint value) private {
    allowance[owner][spender] = value;
    emit Approval(owner, spender, value);
  }

  function _transfer(address from, address to, uint value) private {
    balanceOf[from] = balanceOf[from].sub(value);
    balanceOf[to] = balanceOf[to].add(value);
    emit Transfer(from, to, value);
  }

  function approve(address spender, uint value) external returns (bool) {
    _approve(msg.sender, spender, value);
    return true;
  }

  function transfer(address to, uint value) external returns (bool) {
    _transfer(msg.sender, to, value);
    return true;
  }

  function transferFrom(address from, address to, uint value) external returns (bool) {
    if (allowance[from][msg.sender] != uint(-1)) {
      allowance[from][msg.sender] = allowance[from][msg.sender].sub(value);
    }
    _transfer(from, to, value);
    return true;
  }

  function permit(
    address owner,
    address spender,
    uint value,
    uint deadline,
    uint8 v,
    bytes32 r,
    bytes32 s
  ) external {
    require(deadline >= block.timestamp, 'Biswap: EXPIRED');
    bytes32 digest = keccak256(
      abi.encodePacked(
        '\\x19\\x01',
        DOMAIN_SEPARATOR,
        keccak256(abi.encode(PERMIT_TYPEHASH, owner, spender, value, nonces[owner]++, deadline))
      )
    );
    address recoveredAddress = ecrecover(digest, v, r, s);
    require(
      recoveredAddress != address(0) && recoveredAddress == owner,
      'Biswap: INVALID_SIGNATURE'
    );
    _approve(owner, spender, value);
  }
}
`,vv=`pragma solidity =0.5.16;

import './interfaces/IBiswapFactory.sol';
import './BiswapPair.sol';

contract BiswapFactory is IBiswapFactory {
  address public feeTo;
  address public feeToSetter;
  bytes32 public INIT_CODE_HASH = keccak256(abi.encodePacked(type(BiswapPair).creationCode));

  mapping(address => mapping(address => address)) public getPair;
  address[] public allPairs;

  event PairCreated(address indexed token0, address indexed token1, address pair, uint);

  constructor(address _feeToSetter) public {
    feeToSetter = _feeToSetter;
  }

  function allPairsLength() external view returns (uint) {
    return allPairs.length;
  }

  function createPair(address tokenA, address tokenB) external returns (address pair) {
    require(tokenA != tokenB, 'Biswap: IDENTICAL_ADDRESSES');
    (address token0, address token1) = tokenA < tokenB ? (tokenA, tokenB) : (tokenB, tokenA);
    require(token0 != address(0), 'Biswap: ZERO_ADDRESS');
    require(getPair[token0][token1] == address(0), 'Biswap: PAIR_EXISTS'); // single check is sufficient
    bytes memory bytecode = type(BiswapPair).creationCode;
    bytes32 salt = keccak256(abi.encodePacked(token0, token1));
    assembly {
      pair := create2(0, add(bytecode, 32), mload(bytecode), salt)
    }
    IBiswapPair(pair).initialize(token0, token1);
    getPair[token0][token1] = pair;
    getPair[token1][token0] = pair; // populate mapping in the reverse direction
    allPairs.push(pair);
    emit PairCreated(token0, token1, pair, allPairs.length);
  }

  function setFeeTo(address _feeTo) external {
    require(msg.sender == feeToSetter, 'Biswap: FORBIDDEN');
    feeTo = _feeTo;
  }

  function setFeeToSetter(address _feeToSetter) external {
    require(msg.sender == feeToSetter, 'Biswap: FORBIDDEN');
    feeToSetter = _feeToSetter;
  }

  function setDevFee(address _pair, uint8 _devFee) external {
    require(msg.sender == feeToSetter, 'Biswap: FORBIDDEN');
    require(_devFee > 0, 'Biswap: FORBIDDEN_FEE');
    BiswapPair(_pair).setDevFee(_devFee);
  }

  function setSwapFee(address _pair, uint32 _swapFee) external {
    require(msg.sender == feeToSetter, 'Biswap: FORBIDDEN');
    BiswapPair(_pair).setSwapFee(_swapFee);
  }
}
`,yv=`pragma solidity =0.5.16;

import './interfaces/IBiswapPair.sol';
import './BiswapERC20.sol';
import './libraries/Math.sol';
import './libraries/UQ112x112.sol';
import './interfaces/IERC20.sol';
import './interfaces/IBiswapFactory.sol';
import './interfaces/IBiswapCallee.sol';

contract BiswapPair is IBiswapPair, BiswapERC20 {
  using SafeMath for uint;
  using UQ112x112 for uint224;

  uint public constant MINIMUM_LIQUIDITY = 10 ** 3;
  bytes4 private constant SELECTOR = bytes4(keccak256(bytes('transfer(address,uint256)')));

  address public factory;
  address public token0;
  address public token1;

  uint112 private reserve0; // uses single storage slot, accessible via getReserves
  uint112 private reserve1; // uses single storage slot, accessible via getReserves
  uint32 private blockTimestampLast; // uses single storage slot, accessible via getReserves

  uint public price0CumulativeLast;
  uint public price1CumulativeLast;
  uint public kLast; // reserve0 * reserve1, as of immediately after the most recent liquidity event
  uint32 public swapFee = 1; // uses 0.1% default
  uint32 public devFee = 1; // uses 0.5% default from swap fee

  uint private unlocked = 1;
  modifier lock() {
    require(unlocked == 1, 'Biswap: LOCKED');
    unlocked = 0;
    _;
    unlocked = 1;
  }

  function getReserves()
    public
    view
    returns (uint112 _reserve0, uint112 _reserve1, uint32 _blockTimestampLast)
  {
    _reserve0 = reserve0;
    _reserve1 = reserve1;
    _blockTimestampLast = blockTimestampLast;
  }

  function _safeTransfer(address token, address to, uint value) private {
    (bool success, bytes memory data) = token.call(abi.encodeWithSelector(SELECTOR, to, value));
    require(success && (data.length == 0 || abi.decode(data, (bool))), 'Biswap: TRANSFER_FAILED');
  }

  event Mint(address indexed sender, uint amount0, uint amount1);
  event Burn(address indexed sender, uint amount0, uint amount1, address indexed to);
  event Swap(
    address indexed sender,
    uint amount0In,
    uint amount1In,
    uint amount0Out,
    uint amount1Out,
    address indexed to
  );
  event Sync(uint112 reserve0, uint112 reserve1);

  constructor() public {
    factory = msg.sender;
  }

  // called once by the factory at time of deployment
  function initialize(address _token0, address _token1) external {
    require(msg.sender == factory, 'Biswap: FORBIDDEN'); // sufficient check
    token0 = _token0;
    token1 = _token1;
  }

  function setSwapFee(uint32 _swapFee) external {
    require(_swapFee > 0, 'BiswapPair: lower then 0');
    require(msg.sender == factory, 'BiswapPair: FORBIDDEN');
    require(_swapFee <= 1000, 'BiswapPair: FORBIDDEN_FEE');
    swapFee = _swapFee;
  }

  function setDevFee(uint32 _devFee) external {
    require(_devFee > 0, 'BiswapPair: lower then 0');
    require(msg.sender == factory, 'BiswapPair: FORBIDDEN');
    require(_devFee <= 500, 'BiswapPair: FORBIDDEN_FEE');
    devFee = _devFee;
  }

  // update reserves and, on the first call per block, price accumulators
  function _update(uint balance0, uint balance1, uint112 _reserve0, uint112 _reserve1) private {
    require(balance0 <= uint112(-1) && balance1 <= uint112(-1), 'Biswap: OVERFLOW');
    uint32 blockTimestamp = uint32(block.timestamp % 2 ** 32);
    uint32 timeElapsed = blockTimestamp - blockTimestampLast; // overflow is desired
    if (timeElapsed > 0 && _reserve0 != 0 && _reserve1 != 0) {
      // * never overflows, and + overflow is desired
      price0CumulativeLast += uint(UQ112x112.encode(_reserve1).uqdiv(_reserve0)) * timeElapsed;
      price1CumulativeLast += uint(UQ112x112.encode(_reserve0).uqdiv(_reserve1)) * timeElapsed;
    }
    reserve0 = uint112(balance0);
    reserve1 = uint112(balance1);
    blockTimestampLast = blockTimestamp;
    emit Sync(reserve0, reserve1);
  }

  // if fee is on, mint liquidity equivalent to 1/6th of the growth in sqrt(k)
  function _mintFee(uint112 _reserve0, uint112 _reserve1) private returns (bool feeOn) {
    address feeTo = IBiswapFactory(factory).feeTo();
    feeOn = feeTo != address(0);
    uint _kLast = kLast; // gas savings
    if (feeOn) {
      if (_kLast != 0) {
        uint rootK = Math.sqrt(uint(_reserve0).mul(_reserve1));
        uint rootKLast = Math.sqrt(_kLast);
        if (rootK > rootKLast) {
          uint numerator = totalSupply.mul(rootK.sub(rootKLast));
          uint denominator = rootK.mul(devFee).add(rootKLast);
          uint liquidity = numerator / denominator;
          if (liquidity > 0) _mint(feeTo, liquidity);
        }
      }
    } else if (_kLast != 0) {
      kLast = 0;
    }
  }

  // this low-level function should be called from a contract which performs important safety checks
  function mint(address to) external lock returns (uint liquidity) {
    (uint112 _reserve0, uint112 _reserve1, ) = getReserves(); // gas savings
    uint balance0 = IERC20(token0).balanceOf(address(this));
    uint balance1 = IERC20(token1).balanceOf(address(this));
    uint amount0 = balance0.sub(_reserve0);
    uint amount1 = balance1.sub(_reserve1);

    bool feeOn = _mintFee(_reserve0, _reserve1);
    uint _totalSupply = totalSupply; // gas savings, must be defined here since totalSupply can update in _mintFee
    if (_totalSupply == 0) {
      liquidity = Math.sqrt(amount0.mul(amount1)).sub(MINIMUM_LIQUIDITY);
      _mint(address(0), MINIMUM_LIQUIDITY); // permanently lock the first MINIMUM_LIQUIDITY tokens
    } else {
      liquidity = Math.min(
        amount0.mul(_totalSupply) / _reserve0,
        amount1.mul(_totalSupply) / _reserve1
      );
    }
    require(liquidity > 0, 'Biswap: INSUFFICIENT_LIQUIDITY_MINTED');
    _mint(to, liquidity);

    _update(balance0, balance1, _reserve0, _reserve1);
    if (feeOn) kLast = uint(reserve0).mul(reserve1); // reserve0 and reserve1 are up-to-date
    emit Mint(msg.sender, amount0, amount1);
  }

  // this low-level function should be called from a contract which performs important safety checks
  function burn(address to) external lock returns (uint amount0, uint amount1) {
    (uint112 _reserve0, uint112 _reserve1, ) = getReserves(); // gas savings
    address _token0 = token0; // gas savings
    address _token1 = token1; // gas savings
    uint balance0 = IERC20(_token0).balanceOf(address(this));
    uint balance1 = IERC20(_token1).balanceOf(address(this));
    uint liquidity = balanceOf[address(this)];

    bool feeOn = _mintFee(_reserve0, _reserve1);
    uint _totalSupply = totalSupply; // gas savings, must be defined here since totalSupply can update in _mintFee
    amount0 = liquidity.mul(balance0) / _totalSupply; // using balances ensures pro-rata distribution
    amount1 = liquidity.mul(balance1) / _totalSupply; // using balances ensures pro-rata distribution
    require(amount0 > 0 && amount1 > 0, 'Biswap: INSUFFICIENT_LIQUIDITY_BURNED');
    _burn(address(this), liquidity);
    _safeTransfer(_token0, to, amount0);
    _safeTransfer(_token1, to, amount1);
    balance0 = IERC20(_token0).balanceOf(address(this));
    balance1 = IERC20(_token1).balanceOf(address(this));

    _update(balance0, balance1, _reserve0, _reserve1);
    if (feeOn) kLast = uint(reserve0).mul(reserve1); // reserve0 and reserve1 are up-to-date
    emit Burn(msg.sender, amount0, amount1, to);
  }

  // this low-level function should be called from a contract which performs important safety checks
  function swap(uint amount0Out, uint amount1Out, address to, bytes calldata data) external lock {
    require(amount0Out > 0 || amount1Out > 0, 'Biswap: INSUFFICIENT_OUTPUT_AMOUNT');
    (uint112 _reserve0, uint112 _reserve1, ) = getReserves(); // gas savings
    require(amount0Out < _reserve0 && amount1Out < _reserve1, 'Biswap: INSUFFICIENT_LIQUIDITY');

    uint balance0;
    uint balance1;
    {
      // scope for _token{0,1}, avoids stack too deep errors
      address _token0 = token0;
      address _token1 = token1;
      require(to != _token0 && to != _token1, 'Biswap: INVALID_TO');
      if (amount0Out > 0) _safeTransfer(_token0, to, amount0Out); // optimistically transfer tokens
      if (amount1Out > 0) _safeTransfer(_token1, to, amount1Out); // optimistically transfer tokens
      if (data.length > 0) IBiswapCallee(to).BiswapCall(msg.sender, amount0Out, amount1Out, data);
      balance0 = IERC20(_token0).balanceOf(address(this));
      balance1 = IERC20(_token1).balanceOf(address(this));
    }
    uint amount0In = balance0 > _reserve0 - amount0Out ? balance0 - (_reserve0 - amount0Out) : 0;
    uint amount1In = balance1 > _reserve1 - amount1Out ? balance1 - (_reserve1 - amount1Out) : 0;
    require(amount0In > 0 || amount1In > 0, 'Biswap: INSUFFICIENT_INPUT_AMOUNT');
    {
      // scope for reserve{0,1}Adjusted, avoids stack too deep errors
      uint _swapFee = swapFee;
      uint balance0Adjusted = balance0.mul(1000).sub(amount0In.mul(_swapFee));
      uint balance1Adjusted = balance1.mul(1000).sub(amount1In.mul(_swapFee));
      require(
        balance0Adjusted.mul(balance1Adjusted) >= uint(_reserve0).mul(_reserve1).mul(1000 ** 2),
        'Biswap: K'
      );
    }

    _update(balance0, balance1, _reserve0, _reserve1);
    emit Swap(msg.sender, amount0In, amount1In, amount0Out, amount1Out, to);
  }

  // force balances to match reserves
  function skim(address to) external lock {
    address _token0 = token0; // gas savings
    address _token1 = token1; // gas savings
    _safeTransfer(_token0, to, IERC20(_token0).balanceOf(address(this)).sub(reserve0));
    _safeTransfer(_token1, to, IERC20(_token1).balanceOf(address(this)).sub(reserve1));
  }

  // force reserves to match balances
  function sync() external lock {
    _update(
      IERC20(token0).balanceOf(address(this)),
      IERC20(token1).balanceOf(address(this)),
      reserve0,
      reserve1
    );
  }
}
`,Ki={guid:"e262d5c2-16f8-47a0-8c70-4019514d137a",logo:"/webapp/logos/biswap.jpeg",name:"BiSwap LP",url:"https://biswap.org",author:"John Doe",rating:"B-",description:"BiSwap LP is a liquidity pool for the BiSwap DEX",tags:["P2P Trading","Deposits","DEX"],status:"In Progress",dueAt:"2023-05-25T00:00:00.000Z",overviewView:[{title:"Business Model Analysis",props:[{component:"PropDisplayCard",title:"Business model & Value Proposition",text:"Biswap is a trusted DEX platform on the BNB Chain Network with a Multi-type Referral Program and low trade fee starting from 0.1%. Biswap is the ecosystem that offers the best service and creates new standards in DeFi.",tags:["P2P Trading","Deposits","DEX"],regulations:[{text:"https://www.1.com",href:"https://www.1.com"}]},{component:"PropDisplayCard",title:"Customer Segments",text:"Retail investors who need to swap tokens<br/>Institutiona funds who conduct AMM business<br/>VASPs who IDO"}]},{title:"Social Media Analysis",props:[{component:"PropDisplayCard",title:"Twitter Analysis",text:"Biswap is a trusted DEX platform on the BNB Chain Network with a Multi-type Referral Program and low trade fee starting from 0.1%. Biswap is the ecosystem that offers the best service and creates new standards in DeFi.",tags:["P2P Trading","Deposits"],regulations:[{text:"https://www.1.com",href:"https://www.1.com"}]},{component:"PropDisplayCard",title:"Blog Analysis",text:"Retail investors who need to swap tokens<br/>Institutiona funds who conduct AMM business<br/>VASPs who IDO"}]},{title:"On-Chain Data Analysis",props:[{component:"PropDisplayKeyValue",title:"Pools & Volume",values:[{key:"Number of Pools",value:"3,234,132"},{key:"7 Days Volume",value:"$76,261,658"},{key:"24 Hrs Volumne",value:"$5,291,480"},{key:"Changes",value:"-61.71%"}]},{component:"PropDisplayKeyValue",title:"Customer Persona",values:[{key:"Unique Address",value:"1,2888,378"},{key:"Bot Rate",value:"21%"},{key:"Retails / Total (volume)",value:"26%"},{key:"Retails / Total (Acct.)",value:"86%"}]}]},{title:"Team Background Analysis",props:[{component:"PropDisplayCard",title:"Overview",text:"The Biswap team is a diverse group of professionals with a wide range of skills and experiences."},{component:"PropDisplayCard",title:"Background",text:"BiSwap team is anonymous."},{component:"PropDisplayKeyValue",title:"Team",values:[{key:"CEO | EK",value:"More than 7 years in the crypto industry. Strong analytic and management skills."},{key:"Product Manager | Kevin",value:"Extensive 11+ years of work experience in product development. More than 7 years in the crypto space."},{key:"Product Owner | Miles",value:"Great 5 years of experience and professional vision in Product Management."},{key:"Head of IT | Nick",value:"More than 6 years of experience as a backend & front-end developer and more than 4 years of experience in the field of solidity programming."}]}]}],assessmentView:{whitepaper:[{text:"✅ [dex011]",footer:"Tokens symbol is BSW",desciptionTitle:"Ticker Symbol: BSW",desciptionText:"contract BSWToken is BEP20('Biswap', 'BSW')"},{text:"✅ [dex012]",footer:"BEP-20 standard",desciptionTitle:"Chain: BNB Chain (BEP-20)",desciptionText:"Contract BSWToken is BEP20('Biswap', 'BSW')"},{text:"✅ [dex013]",footer:"700000000",desciptionTitle:"Max Supply: 700 000 000 BSW tokens",desciptionText:"The total token supply is 700,000,000"},{text:"❌ [dex014]",footer:"Is ERC20 Token Standard Implemented?",desciptionTitle:"No, BEP-20 token standard is implemented which is specific to the Binance Smart Chain (BSC) ecosystem",desciptionText:"Yes, ERC20 token standards is implemented, inherits from the BiswapERC20 contract with ERC20 interface."},{text:"✅ [dex015]",footer:"How many types of Swap Fee Tiers are mentioned in code?",desciptionTitle:"N.A.",desciptionText:"There is only one swapFee tier, which can be set by calling the `setSwapFee` function. The default value of the swapFee is 1."},{text:"✅ [dex016]",footer:"What is the swap fee for a single token swap?",desciptionTitle:"The swap fee charged when someone makes a token swap on Biswap is 0.2% or 0.1%, depending on the trading pair. For most trading pairs, the fee is 0.2%, and for some specific pairs such as BUSD-USDT, USDC-USDT, and DAI-USDT, the fee is 0.1%.",desciptionText:"The default swap fee is 1 basis point (0.01%)."},{text:"✅ [dex017]",footer:"How much of the swap fee will be taken by developers by _mintFee()?",desciptionTitle:"Unspecfied in whitepaper, but this function mints new BSW tokens from the swap fee, which are distributed to stakeholders, including developers.",desciptionText:"The amount of the fee is calculated based on the change in the product of the reserves, and is proportional to the square root of the product of the reserves. The proportion of the fee that is taken by the developers is set by the `devFee` variable, which is also initialized to 1 in the contract."},{text:"✅ [dex018]",footer:"Is the code Applicable to AMM?",desciptionTitle:"The code presented in the excerpt is applicable to AMM (Automated Market Maker) protocol, which is used by the Biswap Exchange.",desciptionText:"Yes, this code is applicable to Automated Market Maker (AMM) as it implements the core functionality of a DEX, including liquidity provision, token swaps, and fee collection."},{text:"✅ [dex019]",footer:"Is trading pairs other than those with WBNB allowed?",desciptionTitle:"No clear answer but it does mention that users can swap eligible trading pairs and stake BSW to activate them in the Multi-Reward Pool to earn rewards in different tokens such as BSW, BNB, and BUSD.",desciptionText:"The provided code does not explicitly mention WBNB. However, the Biswap DEX supports trading pairs between any two ERC20 tokens, not just WBNB."},{text:"✅ [dex0110]",footer:"Is the smart contracts capable to prevent frontrunning attacks?",desciptionTitle:"N.A.",desciptionText:'The Biswap smart contract does not have a built-in functionality to prevent frontrunning attacks. However, Biswap uses a mechanism called "time-weighted average price" (TWAP) to mitigate the impact of such attacks. This mechanism calculates the average price of a token over a certain period of time, making it more difficult for attackers to profit from short-term price movements.'},{text:"✅ [dex0111]",footer:"Is on-chain or off-chain price feeds used for the token prices?",desciptionTitle:"N.A.",desciptionText:"The Biswap smart contract does not use on-chain or off-chain price feeds for its token prices. Instead, it calculates the token prices based on the reserves of the tokens in the liquidity pool."},{text:"✅ [dex0112]",footer:"Does the smart contract implement a decentralized governance mechanism?",desciptionTitle:"No clear answer but it does mention that users can swap eligible trading pairs and stake BSW to activate them in the Multi-Reward Pool to earn rewards in different tokens such as BSW, BNB, and BUSD.",desciptionText:"No, the Biswap smart contract does not implement a decentralized governance mechanism."},{text:"✅ [dex0113]",footer:"Is there a restriction on the maximum transaction amount or frequency for a given address?",desciptionTitle:"No clear answer but it does mention that users can swap eligible trading pairs and stake BSW to activate them in the Multi-Reward Pool to earn rewards in different tokens such as BSW, BNB, and BUSD.",desciptionText:"The Biswap smart contract does not impose any restrictions on the maximum transaction amount or frequency for a given address."}],regulations:[{text:"✅ [dex011]",footer:"Tokens symbol is BSW",desciptionTitle:"Ticker Symbol: BSW",desciptionText:"contract BSWToken is BEP20('Biswap', 'BSW')"},{text:"✅ [dex012]",footer:"BEP-20 standard",desciptionTitle:"Chain: BNB Chain (BEP-20)",desciptionText:"Contract BSWToken is BEP20('Biswap', 'BSW')"},{text:"✅ [dex013]",footer:"700000000",desciptionTitle:"Max Supply: 700 000 000 BSW tokens",desciptionText:"The total token supply is 700,000,000"},{text:"❌ [dex014]",footer:"Is ERC20 Token Standard Implemented?",desciptionTitle:"No, BEP-20 token standard is implemented which is specific to the Binance Smart Chain (BSC) ecosystem",desciptionText:"Yes, ERC20 token standards is implemented, inherits from the BiswapERC20 contract with ERC20 interface."}],industryStandard:[{text:"✅ [dex011]",footer:"Tokens symbol is BSW",desciptionTitle:"Ticker Symbol: BSW",desciptionText:"contract BSWToken is BEP20('Biswap', 'BSW')"}],contracts:{"BSWToken.sol":_v,"BiswapERC20.sol":bv,"BiswapFactory.sol":vv,"BiswapPair.sol":yv},codeQuality:[{label:"Maintainability",text:"A",footer:"Created by SonarCube"},{label:"Test Coverage",text:"80%",footer:"Created by Jest"},{label:"Performance",text:"B",footer:"Created by GPT"}],securityAnalysis:[{label:"Score",text:"80/100",footer:"Created by Hacken"},{label:"Audits",text:"85/100",footer:"Created by Verazt"}],codeSimilarity:[{label:"UniSwap",text:"63%"},{label:"PancakeSwap",text:"49%"},{label:"ParaSwap",text:"29%"}],explanation:"BiSwap is a decentralized exchange platform that allows users to easily swap BEP-20 tokens on the Binance Smart Chain network. The platform features a three-level referral system and low transaction fees (0.1%). Our mission is to become a leading platform for token swaps in the DeFi space by offering fast, secure, and easy-to-use services."},actionsView:{actions:[{title:"Require 1 or more security audit report",text:"Suggest the VASP to submit at least another security audit report within 45 days.",type:"danger"},{title:"Code has not been updates for long time",text:"Suggest the VASP to link Github account or submit a new code base.",type:"warn"},{title:"Risky wallets interaction",text:"The deployed contract has attracted many newly wallets. Require VASP to validate their users.",type:"primary"},{title:"Code has high similarity to Uniswap",text:"Suggest the VASP to further clarify the differences for not violating Business Source License.",type:"danger"},{title:"High botting rate",text:"Suggest to review the VASP's solution on bot detection and IP restriction.",type:"warn"},{title:"Core contract has been modified recently",text:"Dangerous to update the core smart contract code. The audit reports may not be sufficient.",type:"primary"},{title:"Orderbook Spoofing",text:"There is a high chance that the order book design has no restriction on spoofing.",type:"danger"}],tasks:[{title:"Require 1 or more security audit report",text:"Suggest the VASP to submit at least another security audit report within 45 days...",type:"danger"},{title:"Code has not been updates for long time",text:"Suggest the VASP to link Github account or submit a new code base.",type:"warn"},{title:"Risky wallets interaction",text:"The deployed contract has attracted many newly wallets. Require VASP to validate...",type:"primary"}]}},wv=`// SPDX-License-Identifier: MIT  
// Copyright 2022 Wolf Game

pragma solidity ^0.8.0;

import "./WoolfReborn.sol";
import "./WoolPouch.sol";

contract Allegiance is 
  Initializable, 
  OwnableUpgradeable, 
  PausableUpgradeable
{

  /*

  Security notes
  ==============
  - Not all WOOL winnings allocated to a Pack are claimable. Unclaimable WOOL rewards will be burned.
    As soon as a token is unstaked or transferred, it will reset its points but its pack's points wont be reduced.
    This means that the sum of points for individual stakes will be less than the total points for the pack, 
    leading to an unclaimable portion.

  - WOOL staked is burned upon staking and minted back upon unstaking.
    This is to reduce gas costs by not requiring an additional approval (NFTs will need to be approved)
  
  - There is an opportunity to flash unstake or transfer tokens before defending or attacking
    This would result in a cheaper action cost. However it is likely financially inviable because
    doing so would forfeit points which results in burning the portion of WOOL earned.

  - There is another opportunity to flash stake in another pack to increase their action cost.
    A large scale attack would likely prove expensive, however guerilla strategies are fair game.

  - Tokens in the whitepaper earn 50, 250, 360, and 490 points per day, however the contract
    uses second by second accrual of 5, 25, 36, 49 respectively. User-facing representations
    of points are reduced by a factor of 8,640 (1/10th of the seconds in a day) to maintain
    simplicity and readability for users.

  */

  // Represents the currents state of each pack, one per Alpha
  struct WolfPack {
    bool enabled;
    uint96 lastUpdated; 
    uint128 defense;
    uint256 tokenValue;
    uint256 score;
    uint256 tokenValueSeconds;
    uint256 wool;
    uint256 balance;
    uint256 woolSeconds;
    uint256 guaranteedRewards;
  }

  // Represents the state of a single NFT's stake
  struct TokenStake {
    uint16 pack;
    uint80 lastUpdated;
    address owner;
  }

  // Represents the state of an address' total WOOL staked in a pack
  struct WoolStake {
    uint176 wool;
    uint80 lastUpdated;
    uint256 woolSeconds;
  }

  // Emitted when NFTs are staked
  event TokensStaked(
    address owner,
    uint256[] tokenIds,
    uint256 pack
  );

  // Emitted when NFTs are unstaked
  event TokensUnstaked(
    address owner,
    uint256[] tokenIds
  );

  // Emitted when WOOL is staked
  event WoolStaked(
    address owner,
    uint256 pack,
    uint256 amount
  );

  // Emitted when WOOL is unstaked
  event WoolUnstaked(
    address owner,
    uint256 pack,
    uint256 amount
  );

  // Emitted when NFTs claim their rewards
  event TokenRewardsClaimed(
    address owner,
    uint256[] tokenIds,
    uint256 reward
  );

  // Emitted when rewards for WOOL stakes are claimed
  event WoolRewardsClaimed(
    address owner,
    uint256 reward
  );

  // Emitted when a pack attacks another one
  event PackAttacked(
    uint256 pack,
    uint256 target,
    bool vulnerable
  );

  // Emitted when a pack defends itself
  event PackDefended(
    uint256 pack
  );

  // Emitted when the game ends
  event GameEnded(
    uint256 timestamp
  );

  // whether or not alphas are allowed to start packs
  bool public alphasCanStartPacks;
  // whether or not non-alphas can stake tokens or WOOL
  bool public gameIsActive;
  // timestamp of when game is ended to calculate seconds staked for each token
  uint256 public gameEndTimestamp;
  // array of percentages each team wins (1st -> last)
  uint256[] public winningPercentages;

  // points each Alpha score of a wolf earns per second
  uint256[] public wolfValues;
  // mapping from Alpha ID to its pack's state
  mapping(uint256 => WolfPack) public packs;
  // mapping from Token ID to its stake
  mapping(uint256 => TokenStake) public tokenStakes;
  // mapping from pack to owner to WOOL stake
  mapping(uint256 => mapping(address => WoolStake)) public woolStakes;
  // array of all the alpha wolf's IDs
  uint256[] public alphaWolves;
  // mapping from Alpha ID to its placement at the end of the game (1st, 2nd, ..., last)
  mapping(uint256 => uint256) public rankings;

  // total WOOL available to be won in the game
  uint256 public WINNER_POT;
  // percentage of pack's winnings an Alpha receives
  uint256 public constant ALPHA_PERCENTAGE = 5;
  // points each sheep earns per second
  uint32 public constant SHEEP_VALUE = 5;
  // percentage of points lost if attacked without defense
  uint128 public constant ATTACK_LOSS = 3;
  // maximum alpha a wolf can have
  uint8 public constant MAX_ALPHA = 8;

  // reference to migrated sheep / wolves
  WoolfReborn public woolfReborn;
  // reference to original sheep / wolves
  Woolf public woolf;
  // reference to wool pouches
  WoolPouch public woolPouch;
  // reference to WOOL
  WOOL public wool;

  /** 
   * initializes contract
   * @param _woolfReborn reference to WoolfReborn
   * @param _woolPouch reference to WoolPouch
   */
  function initialize(
    address _woolfReborn, 
    address _woolPouch
  ) external initializer {
    __Ownable_init();
    __Pausable_init();

    woolfReborn = WoolfReborn(_woolfReborn);
    woolf = Woolf(woolfReborn.woolf());
    woolPouch = WoolPouch(_woolPouch);
    wool = WOOL(woolPouch.wool());

    _pause();

    winningPercentages = [2000, 1575, 1200, 975, 775, 625, 525, 450, 375, 350, 325, 300, 275, 250];
    wolfValues = [0, 0, 0, 0, 0, 5 * 5, 6 * 6, 7 * 7, 0];

    WINNER_POT = 500000000 ether;
    gameEndTimestamp = 0;
    alphasCanStartPacks = true;
    gameIsActive = false;
  }

  /** EXTERNAL */

  /**
   * sends sheep / wolves to contract and accounts for them in the pack
   * will start a pack for an alpha if it is passed in (pack must equal the alpha's ID)
   * @param tokenIds the IDs of the migrated sheep / wolves to stake
   * @param pack the pack to join
   */
  function joinPack(uint256[] calldata tokenIds, uint256 pack) external whenNotPaused {
    require(gameEndTimestamp == 0, "GAME HAS ENDED");
    require(tokenIds.length > 0, "GOTTA STAKE SOMETHING");
    _updatePack(pack);
    for (uint i = 0; i < tokenIds.length; i++) {
      _joinPack(tokenIds[i], pack);
    }
    
    emit TokensStaked(_msgSender(), tokenIds, pack);
  }

  /**
   * adds a single sheep / wolf to a pack
   * @param tokenId the ID of the migrated sheep / wolf to stake
   * @param pack the pack to join
   */
  function _joinPack(uint256 tokenId, uint256 pack) internal {
    require(woolfReborn.ownerOf(tokenId) == _msgSender(), "AINT YO TOKEN");

    // note: explicit sheep check is necessary because of null data in alpha score 
    if (!_isSheep(tokenId) && _alphaForWolf(tokenId) == MAX_ALPHA) {
      require(alphasCanStartPacks, "STARTING A PACK IS DISABLED");
      require(pack == tokenId, "YOURE AN ALPHA. START YOUR OWN PACK");
      alphaWolves.push(tokenId);
      packs[tokenId].enabled = true;
    } else {
      require(gameIsActive, "GAME IS NOT OPEN YET");
    }

    require(packs[pack].enabled, "NOT A PACK");

    // redundant sanity check
    require(tokenStakes[tokenId].owner == address(0x0), "ALREADY IN A PACK");
    tokenStakes[tokenId] = TokenStake({
      pack: uint16(pack),
      lastUpdated: uint80(block.timestamp),
      owner: _msgSender()
    });

    if (_isSheep(tokenId)) packs[pack].tokenValue += SHEEP_VALUE;
    else packs[pack].tokenValue += wolfValues[_alphaForWolf(tokenId)];

    woolfReborn.transferFrom(_msgSender(), address(this), tokenId);
  }

  /**
   * moves sheep / wolves from one pack to another without moving the ERC721 and resets the stake
   * @param tokenIds the IDs of the migrated sheep / wolves to transfer
   * @param newPack the pack to move them to
   */
  function transferPack(uint256[] calldata tokenIds, uint256 newPack) external whenNotPaused {
    require(gameEndTimestamp == 0, "GAME HAS ENDED");
    require(packs[newPack].enabled, "NOT A PACK");
    require(tokenIds.length > 0, "GOTTA TRANSFER SOMETHING");
    _updatePack(newPack);
    for (uint i = 0; i < tokenIds.length; i++) {
      _transferPack(tokenIds[i], newPack);
    }

    // operates indentically to an unstake + a stake
    emit TokensUnstaked(_msgSender(), tokenIds);
    emit TokensStaked(_msgSender(), tokenIds, newPack);
  }

  /**
   * moves a single sheep / wolf from one pack to another without moving the ERC721 and resets the stake
   * @param tokenId the ID of the migrated sheep / wolf to transfer
   * @param newPack the pack to move it to
   */
  function _transferPack(uint256 tokenId, uint256 newPack) internal {
    bool isSheep = _isSheep(tokenId);
    uint256 alpha = _alphaForWolf(tokenId);
    require(alpha != MAX_ALPHA || isSheep, "ALPHAS CANT LEAVE THEIR PACK");
    TokenStake storage stake = tokenStakes[tokenId];
    require(stake.owner == _msgSender(), "AINT YO TOKEN");
    require(stake.pack != newPack, "CANT TRANSFER TO SAME PACK");
    _updatePack(stake.pack);
    if (isSheep) packs[stake.pack].tokenValue -= SHEEP_VALUE;
    else packs[stake.pack].tokenValue -= wolfValues[alpha];

    // no need to delete the stake, just update it
    stake.pack = uint16(newPack); // change pack
    stake.lastUpdated = uint80(block.timestamp); // reset time staked

    // no need to update the new pack here, was done before the loop
    if (_isSheep(tokenId)) packs[newPack].tokenValue += SHEEP_VALUE;
    else packs[newPack].tokenValue += wolfValues[alpha];
  }

  /**
   * returns sheep / wolves from the contract and resets their stakes
   * @param tokenIds the IDs of the migrated sheep / wolves to unstake
   */
  function leavePack(uint256[] calldata tokenIds) external whenNotPaused {
    require(gameEndTimestamp == 0, "GAME HAS ENDED");
    require(tokenIds.length > 0, "GOTTA UNSTAKE SOMETHING");
    for (uint i = 0; i < tokenIds.length; i++) {
      _leavePack(tokenIds[i]);
    }

    emit TokensUnstaked(_msgSender(), tokenIds);
  }

  function _leavePack(uint256 tokenId) internal {
    require(tokenStakes[tokenId].owner == _msgSender(), "AINT YO TOKEN");
    uint256 pack = tokenStakes[tokenId].pack;
    require(pack != 0x0, "AINT WITH A PACK");
    require(_alphaForWolf(tokenId) != MAX_ALPHA || _isSheep(tokenId), "ALPHAS CANT LEAVE THEIR PACK");
    // we must call this on each one since it's possible to
    // unstake from multiple packs in a single call
    _updatePack(pack);

    delete tokenStakes[tokenId];
    if (_isSheep(tokenId)) packs[pack].tokenValue -= SHEEP_VALUE;
    else packs[pack].tokenValue -= wolfValues[_alphaForWolf(tokenId)];

    woolfReborn.transferFrom(address(this), _msgSender(), tokenId);
  }

  /**
   * sends WOOL from user and creates a stake for the owner
   * @param pack the pack to stake the WOOL in
   * @param amount the amount of WOOL to stake
   */
  function stakeWool(uint256 pack, uint256 amount) external whenNotPaused {
    require(gameIsActive, "GAME IS NOT OPEN YET");
    require(gameEndTimestamp == 0, "GAME HAS ENDED");
    require(packs[pack].enabled, "MUST STAKE IN A PACK");
    require(amount > 0, "GOTTA STAKE SOMETHING");
    _updatePack(pack);
    WoolStake storage stake = woolStakes[pack][_msgSender()];
    uint256 elapsed = block.timestamp - stake.lastUpdated;
    stake.woolSeconds += elapsed * stake.wool; // wool is 0 on first stake
    stake.lastUpdated = uint80(block.timestamp);
    stake.wool += uint176(amount);
    packs[pack].wool += amount;


    // burn here to circumvent the need for an approval
    // side effect: WOOL contract's totalSupply() will be affected through the duration of the game
    wool.burn(_msgSender(), amount); 

    emit WoolStaked(_msgSender(), pack, amount);
  }

  /**
   * transfers all staked WOOL from one pack to another and resets woolSeconds
   * @param oldPack the pack to move the WOOL from
   * @param newPack the pack to move the WOOL to
   */
  function transferWool(uint256 oldPack, uint256 newPack) external whenNotPaused {
    require(gameEndTimestamp == 0, "GAME HAS ENDED");
    require(packs[newPack].enabled, "MUST STAKE IN A PACK");
    require(oldPack != newPack, "CANT TRANSFER TO SAME PACK");
    WoolStake storage oldStake = woolStakes[oldPack][_msgSender()];
    require(oldStake.wool > 0, "GOTTA TRANSFER SOMETHING");
    _updatePack(oldPack);
    packs[oldPack].wool -= oldStake.wool;

    _updatePack(newPack);
    packs[newPack].wool += oldStake.wool;

    WoolStake storage newStake = woolStakes[newPack][_msgSender()];
    // update the new stake if necessary
    uint256 elapsed = block.timestamp - newStake.lastUpdated;
    newStake.woolSeconds += elapsed * newStake.wool; // wool is 0 on first stake
    newStake.lastUpdated = uint80(block.timestamp);
    newStake.wool += oldStake.wool;

    emit WoolUnstaked(_msgSender(), oldPack, oldStake.wool);
    emit WoolStaked(_msgSender(), newPack, oldStake.wool);

    delete woolStakes[oldPack][_msgSender()];
  }

  /**
   * sends all WOOL staked in a pack back to owner and resets the stake
   * @param pack the pack to unstake from
   */
  function unstakeWool(uint256 pack) external whenNotPaused {
    require(gameEndTimestamp == 0, "GAME HAS ENDED");
    _updatePack(pack);
    uint256 staked = woolStakes[pack][_msgSender()].wool;
    require(staked > 0, "GOTTA UNSTAKE SOMETHING");
    packs[pack].wool -= staked;
    delete woolStakes[pack][_msgSender()];

    // we burned the WOOL during stakeWool to save an approval
    // here we are minting it back to the owner
    wool.mint(_msgSender(), staked);

    emit WoolUnstaked(_msgSender(), pack, staked);
  }

  /**
   * decrements the defense of the target or reduces their score by ATTACK_LOSS % if defense is 0
   * @param alphaId the ID of the Alpha attacking
   * @param target the ID of the pack to attack
   */
  function attack(uint256 alphaId, uint256 target) external whenNotPaused {
    require(gameEndTimestamp == 0, "GAME HAS ENDED");
    require(packs[alphaId].enabled, "YOURE NOT A PACK LEADER");
    require(alphaId != target, "CANT ATTACK YOURSELF");
    require(tokenStakes[alphaId].owner == _msgSender(), "AINT YO TOKEN");
    require(packs[target].enabled, "NOT A VALID TARGET");

    _updatePack(alphaId); // account for any earned balance
    require(packs[alphaId].balance > attackCost(alphaId), "INSUFFICIENT BALANCE TO ATTACK");
    packs[alphaId].balance = 0; // discharge all accrued woolSeconds
    _updatePack(target); // get the latest score

    emit PackAttacked(alphaId, target, packs[target].defense == 0);

    // if the target has defenses, decrement
    if (packs[target].defense > 0) {
      packs[target].defense -= 1;
    } else { // otherwise, reduce their score
      packs[target].score = packs[target].score * (100 - ATTACK_LOSS) / 100;
    }
  }

  /**
   * increments the packs defense count
   * @param alphaId the ID of the Alpha defending
   */
  function defend(uint256 alphaId) external whenNotPaused {
    require(gameEndTimestamp == 0, "GAME HAS ENDED");
    require(packs[alphaId].enabled, "YOURE NOT A PACK LEADER");
    require(tokenStakes[alphaId].owner == _msgSender(), "AINT YO TOKEN");
    _updatePack(alphaId); // account for any earned balance
    require(packs[alphaId].balance > defenseCost(alphaId), "INSUFFICIENT BALANCE TO DEFEND");
    packs[alphaId].defense += 1; 
    packs[alphaId].balance = 0; // discharge all accrued woolSeconds

    emit PackDefended(alphaId);
  }

  /**
   * claims a WOOL Pouch for the earned rewards for sheep / wolves
   * @param tokenIds the IDs of the migrated sheep / wolves to claim for
   */
  function claimTokens(uint256[] calldata tokenIds) external whenNotPaused {
    require(gameEndTimestamp > 0, "GAME HAS NOT ENDED");
    require(tokenIds.length > 0, "GOTTA CLAIM SOMETHING");
    uint256 won;
    for (uint i = 0; i < tokenIds.length; i++) {
      won += _claimToken(tokenIds[i]); // will return each token back
    }

    _mintReward(won); // mint the rewards
    emit TokenRewardsClaimed(_msgSender(), tokenIds, won);
  }

  /** 
   * calculates the winnings for a sheep / wolf and returns it to the owner
   * @param tokenId the ID of the sheep / wolf to claim
   */
  function _claimToken(uint256 tokenId) internal returns (uint256 won) {
    require(_msgSender() == tokenStakes[tokenId].owner, "AINT YO TOKEN");

    won = _tokenWinnings(tokenId);

    delete tokenStakes[tokenId];
    woolfReborn.transferFrom(address(this), _msgSender(), tokenId);
  }

  /**
   * claims a WOOL Pouch for the earned rewards for all WOOL staked across all packs
   */
  function claimWool() external whenNotPaused {
    require(gameEndTimestamp > 0, "GAME HAS NOT ENDED");
    uint256 woolStaked;
    uint256 won;
    for (uint i = 0; i < alphaWolves.length; i++) { // loop through every pack
      if (woolStakes[alphaWolves[i]][_msgSender()].wool == 0) continue; // check for a stake
      woolStaked += woolStakes[alphaWolves[i]][_msgSender()].wool;
      won += _woolWinnings(alphaWolves[i], _msgSender());
      delete woolStakes[alphaWolves[i]][_msgSender()]; // if called again, wool will be 0
    }
    require(woolStaked > 0, "GOTTA CLAIM SOMETHING");
    wool.mint(_msgSender(), woolStaked); // return their staked wool via a mint - see stakeWool()

    if (won > 0) {
      _mintReward(won);
      emit WoolRewardsClaimed(_msgSender(), won);
    }
  }

  /**
   * send a wool pouch or WOOL to a user depending on their earnings
   */
  function _mintReward(uint256 amount) internal {
    // wool pouches from alpha game do not have any initially claimable WOOL
    woolPouch.mintWithoutClaimable(_msgSender(), uint128(amount), 365 * 4); // 4 year vesting
  }

  /**
   * cost (in wool seconds) to attack
   * @param alphaId the ID of the Alpha attacking
   */
  function attackCost(uint256 alphaId) public view returns (uint128) {
    // if less than the equivalent of 250 sheep are staked
    // require a minimum balance
    return packs[alphaId].tokenValue < 250 * SHEEP_VALUE 
      ? 3125000 ether * 1 days // 2500 * 250 * 5
      : 2500 ether * 1 days * uint128(packs[alphaId].tokenValue);
  }

  /**
   * cost (in wool seconds) to defend
   * @param alphaId the ID of the Alpha defending
   */
  function defenseCost(uint256 alphaId) public view returns (uint128) {
    // if less than the equivalent of 250 sheep are staked
    // require a minimum balance
    return packs[alphaId].tokenValue < 250 * SHEEP_VALUE 
      ? 3125000 ether * 1 days // 2500 * 250 * 5
      : 2500 ether * 1 days * uint128(packs[alphaId].tokenValue);
  }

  function woolWinnings(address owner) public view returns (uint256) {
    require(gameEndTimestamp > 0, "GAME HAS NOT ENDED");
    uint256 won;
    for (uint i = 0; i < alphaWolves.length; i++) { // loop through every pack
      if (woolStakes[alphaWolves[i]][owner].wool == 0) continue; // check for a stake
      won += _woolWinnings(alphaWolves[i], owner);
    }
    return won;
  }

  /** INTERNAL */

  function _isSheep(uint256 tokenId) internal view returns (bool sheep) {
    (sheep, , , , , , , , , ) = woolf.tokenTraits(tokenId);
  }

  function _alphaForWolf(uint256 tokenId) internal view returns (uint8) {
    ( , , , , , , , , , uint8 alphaIndex) = woolf.tokenTraits(tokenId);
    return MAX_ALPHA - alphaIndex; // alpha index is 0-3
  }

  /**
   * updates accounting for a single pack
   * @param pack the pack to update accounting for
   */
  function _updatePack(uint256 pack) internal {
    // if the game is over, no changes should be made
    if (gameEndTimestamp > 0) return;
    WolfPack storage p = packs[pack];
    uint256 elapsed = block.timestamp - p.lastUpdated;
    // if called multiple times in a block, no need to recalculate
    if (elapsed == 0) return;

    // score is increased by token values x time
    p.score += p.tokenValue * elapsed;
    // tokenValueSeconds is increased by token values x time
    p.tokenValueSeconds += p.tokenValue * elapsed;
    // balance is increased by wool x time
    p.balance += p.wool * elapsed;
    // woolSeconds is increased by wool x time
    p.woolSeconds += p.wool * elapsed;
    p.lastUpdated = uint96(block.timestamp);
  }

  /**
   * calculates the winnings for a single sheep / wolf
   * half of the pack's winnings are made available for sheep / wolves to claim
   * @param tokenId the ID of the token to calculate winnings for
   */
  function _tokenWinnings(uint256 tokenId) internal view returns (uint256) {
    if (tokenStakes[tokenId].owner == address(0x0)) return 0;
    uint256 pack = tokenStakes[tokenId].pack;
    uint256 elapsed = gameEndTimestamp - tokenStakes[tokenId].lastUpdated;
    if (_isSheep(tokenId))
      return SHEEP_VALUE * elapsed * _packWinnings(pack) * (100 - ALPHA_PERCENTAGE) / 100 / packs[pack].tokenValueSeconds / 2;
    uint8 alpha = _alphaForWolf(tokenId);
    if (alpha != MAX_ALPHA)
      return wolfValues[alpha] * elapsed * _packWinnings(pack) * (100 - ALPHA_PERCENTAGE) / 100 / packs[pack].tokenValueSeconds / 2;
    else
      return _packWinnings(pack) * ALPHA_PERCENTAGE / 100; // ALPHA WINS % PACK POT
  }

  /**
   * calculates the winnings for a WOOL stake
   * half of the pack's winnings are made available for wool stakes to claim
   * @param pack the pack to calculate WOOL winnings for
   */
  function _woolWinnings(uint256 pack, address owner) internal view returns (uint256) {
    if (woolStakes[pack][owner].wool == 0) return 0;
    uint256 elapsed = gameEndTimestamp - woolStakes[pack][owner].lastUpdated;
    uint256 woolSeconds = woolStakes[pack][owner].woolSeconds + woolStakes[pack][owner].wool * elapsed;
    // ALPHA_PERCENTAGE is taken off to account for it being earned in _tokenWinnings
    return woolSeconds * _packWinnings(pack) * (100 - ALPHA_PERCENTAGE) / packs[pack].woolSeconds / 200;
  }
  
  /**
   * calculates the entire pack's winnings at the end of the game
   * @param pack the pack to calculate winnings for
   */
  function _packWinnings(uint256 pack) internal view returns (uint256) {
    if (rankings[pack] == 0) return 0;
    return winningPercentages[rankings[pack] - 1] * WINNER_POT / 10000 + packs[pack].guaranteedRewards;
  }

  /** ADMIN */

  /**
   * allows owner to guarantee a reward to a specific pack
   * used for surprises and possible checkpoint winnings
   * total pot will never eclipse original pot size
   * @param pack the pack to guarantee rewards for
   * @param amount the amount to guarantee
   */
  function setGuaranteedRewards(uint256 pack, uint256 amount) external onlyOwner {
    WINNER_POT = WINNER_POT + packs[pack].guaranteedRewards - amount;
    packs[pack].guaranteedRewards = amount;
  }

  /**
   * finalizes the end of the game
   */
  function endGame() external onlyOwner {
    require(gameEndTimestamp == 0, "GAME HAS ENDED");
    uint256 length = alphaWolves.length;
    uint256 place;
    uint256 j;
    uint256 max;
    uint256 wolf;
    uint256 current;
    // update every pack for the final time
    for (j = 0; j < length; j++) {
      _updatePack(alphaWolves[j]);
    }

    // sort the packs into winning order (pack -> placement)
    for (place = 1; place <= length; place++) {
      max = 0;
      for (j = 0; j < length; j++) {
        if (rankings[alphaWolves[j]] != 0) continue;
        current = packs[alphaWolves[j]].score;
        if (current >= max) {
          max = current;
          wolf = alphaWolves[j];
        }
      }
      rankings[wolf] = place;
    }

    // the games final calculations for earnings are based off this time
    gameEndTimestamp = block.timestamp;
    emit GameEnded(block.timestamp);
  }

  /**
   * enables owner to pause / unpause minting
   */
  function setPaused(bool _p) external onlyOwner {
    if (_p) _pause();
    else _unpause();
  }

  /**
   * enables owner to enable / disable new packs from being started
   */
  function setAlphasCanStartPacks(bool _a) external onlyOwner {
    alphasCanStartPacks = _a;
  }

  /**
   * enables owner to enable / disable non-alphas tokens or WOOL from being staked 
   */
  function setGameIsActive(bool _a) external onlyOwner {
    gameIsActive = _a;
  }
}`,kv=`// SPDX-License-Identifier: NO LICENSE  

pragma solidity ^0.8.0;
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@openzeppelin/contracts/utils/cryptography/ECDSA.sol";
import "../interfaces/IControllable1155.sol";

contract CaveGame is 
  Initializable, 
  OwnableUpgradeable
{
  /*

  Security notes
  ==============

  - Assumes _claimGem and _claimSurprise2 are only given valid claimIds within the bounds of FARMER_COUNTS and SURPRISE_COUNTS

  */

  using ECDSA for bytes32;

  address public signer;
  IControllable1155 public gemContract;
  IERC721 public surpriseContract1;
  IControllable1155 public surpriseContract2;

  uint256 public constant GEM = 1 << 20;
  uint256 public constant SURPRISE1 = 1 << 22;
  uint256 public constant SURPRISE2 = 1 << 23;

  uint256[6] private FARMER_COUNTS;
  uint256[4] private SURPRISE_COUNTS;

  mapping(uint256 => mapping(uint256 => uint256)) public claims;

  event Claim(
    address sender,
    uint256 claimType,
    uint256 claimId
  );

  /**
   * instantiates contract
   * @param _signer the address of the server signing the messages
   * @param _gem address of the FarmerGem contract
   * @param _surprise1 address of the Surprise1 contract
   * @param _surprise2 address of the Surprise2 contract
   */
  function initialize(address _signer, address _gem, address _surprise1, address _surprise2) external initializer {
    __Ownable_init();

    signer = _signer;
    gemContract = IControllable1155(_gem);
    surpriseContract1 = IERC721(_surprise1);
    surpriseContract2 = IControllable1155(_surprise2);

    // for the purposes of the bug bounty
    // the length of these arrays will stay the same, but the values may change
    FARMER_COUNTS = [2000, 3000, 4000, 4500, 4750, 5000];
    SURPRISE_COUNTS = [2000, 4000, 5000, 6000];
  }

  /** EXTERNAL */

  /**
   * allows user to claim NFT from off-chain signature
   * @param signature the signature created off-chain to verify access
   * @param claimType the type of NFT to be claimed
   * @param claimId the ID of the claim for 1-of-1s and to protect against double claim
   */
  function claim(bytes memory signature, uint256 claimType, uint256 claimId) external {
    require(!isTokenClaimed(claimType, claimId), "CANT GET THIS TOKEN TWICE");

    bytes memory packed = abi.encode(_msgSender(), claimType, claimId);
    bytes32 messageHash = keccak256(packed);
    require(
      messageHash.toEthSignedMessageHash().recover(signature) == signer,
      "THAT SIGNATURE IS A FAKE"
    );

    _setTokenClaimed(claimType, claimId);

    if (claimType == GEM) _claimGem(claimId);
    else if (claimType == SURPRISE1) _claimSurprise1(claimId);
    else if (claimType == SURPRISE2) _claimSurprise2(claimId);
    else revert("INVALID CLAIM TYPE");

    emit Claim(_msgSender(), claimType, claimId);
  }

  /**
   * checks to see if a claim has already occurred
   * @param claimType the type of claim
   * @param claimId the ID of the claim
   */
  function isTokenClaimed(uint256 claimType, uint256 claimId) public view returns (bool) {
    // get the packed int that contains the bit for this claimId
    uint256 packed = claims[claimType][claimId / 256];
    // return whether or not the (claimId % 256)th bit is set
    return ((packed >> (claimId % 256)) & 1) == 1;
  }

  /** INTERNAL */

  /**
   * mints a Farmer Gem to the caller, type is dependent on id
   * @param claimId dictates which type of gem
   */
  function _claimGem(uint256 claimId) internal {
    uint256 id = 0;
    while (claimId > FARMER_COUNTS[id]) id++;
    gemContract.mint(_msgSender(), id + 1, 1);
  }

  /**
   * sends a Surprise1 to the caller - Surprise1 is a standard ERC721 contract
   * @param claimId the ID of the Surprise1 to send
   */
  function _claimSurprise1(uint256 claimId) internal {
    surpriseContract1.transferFrom(address(this), _msgSender(), claimId);
  }

  /**
   * mints a Surprise2 to the caller, type is dependent on id - Surprise 2 is a standard ERC1155 with controllable minting
   * @param claimId dictates which type of gem
   */
  function _claimSurprise2(uint256 claimId) internal {
    uint256 id = 0;
    while (claimId > SURPRISE_COUNTS[id]) id++;
    surpriseContract2.mint(_msgSender(), id + 1, 1);
  }

  /**
   * sets a token's claim status to true
   * @param claimType the type of claim
   * @param claimId the ID of the claim
   */
  function _setTokenClaimed(uint256 claimType, uint256 claimId) internal {
    // reduce ID-space to packed 256 bit ints
    uint256 packed = claims[claimType][claimId / 256];
    // set the (claimId % 256)th bit to 1
    claims[claimType][claimId / 256] = packed | (1 << (claimId % 256));
  }
}`,Ev=`// SPDX-License-Identifier: NO LICENSE  

pragma solidity ^0.8.0;
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/security/PausableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC1155/ERC1155Upgradeable.sol";
import "@openzeppelin/contracts/utils/Strings.sol";

contract FarmerGem is 
  Initializable, 
  ERC1155Upgradeable, 
  OwnableUpgradeable, 
  PausableUpgradeable
{
  /*

  Security notes
  ==============

  - Adding a time limitation to burnLeftoverTokens is unnecessary logic complication because this contract is upgradeable

  */
  
  using Strings for uint256;

  mapping(address => bool) public controllers;
  string private baseURI;

  /** 
   * instantiates contract
   * @param _uri root IPFS folder
   */
  function initialize(string memory _uri) external initializer {
    __Ownable_init();
    __Pausable_init();
    __ERC1155_init(_uri);

    baseURI = _uri;
  }

  /**
   * mints tokens to a specified address
   * @param recipient the receiver of the tokens
   * @param id the ID of the token to mint
   * @param amount the number of tokens to mint
   */
  function mint(address recipient, uint256 id, uint256 amount) external {
    require(controllers[_msgSender()] == true, "Only controllers can mint");
    _mint(recipient, id, amount, "");
  }

  /**
   * burns tokens from a specified address
   * @param owner the owner fo the tokens
   * @param id the ID of the token to burn
   * @param amount the number of tokens to burn
   */
  function burn(address owner, uint256 id, uint256 amount) external {
    require(controllers[_msgSender()] == true, "Only controllers can burn");
    _burn(owner, id, amount);
  }

  /**
   * returns the URI of a given token
   * @param tokenId the ID of the token
   */
  function uri(uint256 tokenId) public view override returns (string memory) {
    return string(abi.encodePacked(baseURI, tokenId.toString()));
  }

  /**
   * enables an address to mint / burn
   * @param controller the address to enable
   */
  function addController(address controller) external onlyOwner {
    controllers[controller] = true;
  }

  /**
   * disables an address from minting / burning
   * @param controller the address to disbale
   */
  function removeController(address controller) external onlyOwner {
    controllers[controller] = false;
  }

  /**
   * updates the base URI
   * @param _uri the new root IPFS folder
   */
  function setURI(string memory _uri) external onlyOwner {
    baseURI = _uri;
  }

  /**
   * allows owner to burn unused Farmer Gems after they're spent on the reveal
   * @param owners the owners of the Gems to burn
   * @param ids the IDs of the Gems to burn
   * @param amounts the amounts of Gems to burn
   */
  function burnLeftoverTokens(address[] calldata owners, uint256[] calldata ids, uint256[] calldata amounts) external onlyOwner {
    require(owners.length == ids.length, "Mismatched inputs");
    require(owners.length == amounts.length, "Mismatched inputs");
    for (uint256 i = 0; i < owners.length; i++) {
      _burn(owners[i], ids[i], amounts[i]);
    }
  }
}`,Tv=`// SPDX-License-Identifier: NO LICENSE
pragma solidity ^0.8.0;

interface IControllable1155 {
  function mint(address recipient, uint256 id, uint256 amount) external;
}`,Gi={guid:"e262d5c2-16f8-47a0-8c70-4019514d137b",logo:"/webapp/logos/wolfgame.jpeg",name:"Wolf Game",url:"https://wolf.game",author:"John Doe",rating:"B-",description:"Wolf Game is a game where you play as a wolf",tags:["Game","NFT"],status:"In Progress",dueAt:"2023-05-25T00:00:00.000Z",overviewView:[{title:"Business Model Analysis",props:[{component:"PropDisplayCard",title:"Business model & Value Proposition",text:"Biswap is a trusted DEX platform on the BNB Chain Network with a Multi-type Referral Program and low trade fee starting from 0.1%. Biswap is the ecosystem that offers the best service and creates new standards in DeFi.",tags:["P2P Trading","Deposits"],regulations:[{text:"https://www.1.com",href:"https://www.1.com"}]},{component:"PropDisplayCard",title:"Customer Segments",text:"Retail investors who need to swap tokens<br/>Institutiona funds who conduct AMM business<br/>VASPs who IDO"}]},{title:"Social Media Analysis",props:[{component:"PropDisplayCard",title:"Twitter Analysis",text:"Biswap is a trusted DEX platform on the BNB Chain Network with a Multi-type Referral Program and low trade fee starting from 0.1%. Biswap is the ecosystem that offers the best service and creates new standards in DeFi.",tags:["P2P Trading","Deposits"],regulations:[{text:"https://www.1.com",href:"https://www.1.com"}]},{component:"PropDisplayCard",title:"Blog Analysis",text:"Retail investors who need to swap tokens<br/>Institutiona funds who conduct AMM business<br/>VASPs who IDO"}]},{title:"On-Chain Data Analysis",props:[{component:"PropDisplayKeyValue",title:"Pools & Volume",values:[{key:"Number of Pools",value:"3,234,132"},{key:"7 Days Volume",value:"$76,261,658"},{key:"24 Hrs Volumne",value:"$5,291,480"},{key:"Changes",value:"-61.71%"}]},{component:"PropDisplayKeyValue",title:"Customer Persona",values:[{key:"Unique Address",value:"1,2888,378"},{key:"Bot Rate",value:"21%"},{key:"Retails / Total (volume)",value:"26%"},{key:"Retails / Total (Acct.)",value:"86%"}]}]}],assessmentView:{whitepaper:[{text:"✅ [dex011]",footer:"Tokens symbol is BSW",desciptionTitle:"Ticker Symbol: BSW",desciptionText:"contract BSWToken is BEP20('Biswap', 'BSW')"},{text:"✅ [dex012]",footer:"BEP-20 standard",desciptionTitle:"Chain: BNB Chain (BEP-20)",desciptionText:"Contract BSWToken is BEP20('Biswap', 'BSW')"},{text:"✅ [dex013]",footer:"700000000",desciptionTitle:"Max Supply: 700 000 000 BSW tokens",desciptionText:"The total token supply is 700,000,000"},{text:"❌ [dex014]",footer:"Is ERC20 Token Standard Implemented?",desciptionTitle:"No, BEP-20 token standard is implemented which is specific to the Binance Smart Chain (BSC) ecosystem",desciptionText:"Yes, ERC20 token standards is implemented, inherits from the BiswapERC20 contract with ERC20 interface."},{text:"✅ [dex015]",footer:"How many types of Swap Fee Tiers are mentioned in code?",desciptionTitle:"N.A.",desciptionText:"There is only one swapFee tier, which can be set by calling the `setSwapFee` function. The default value of the swapFee is 1."},{text:"✅ [dex016]",footer:"What is the swap fee for a single token swap?",desciptionTitle:"The swap fee charged when someone makes a token swap on Biswap is 0.2% or 0.1%, depending on the trading pair. For most trading pairs, the fee is 0.2%, and for some specific pairs such as BUSD-USDT, USDC-USDT, and DAI-USDT, the fee is 0.1%.",desciptionText:"The default swap fee is 1 basis point (0.01%)."},{text:"✅ [dex017]",footer:"How much of the swap fee will be taken by developers by _mintFee()?",desciptionTitle:"Unspecfied in whitepaper, but this function mints new BSW tokens from the swap fee, which are distributed to stakeholders, including developers.",desciptionText:"The amount of the fee is calculated based on the change in the product of the reserves, and is proportional to the square root of the product of the reserves. The proportion of the fee that is taken by the developers is set by the `devFee` variable, which is also initialized to 1 in the contract."},{text:"✅ [dex018]",footer:"Is the code Applicable to AMM?",desciptionTitle:"The code presented in the excerpt is applicable to AMM (Automated Market Maker) protocol, which is used by the Biswap Exchange.",desciptionText:"Yes, this code is applicable to Automated Market Maker (AMM) as it implements the core functionality of a DEX, including liquidity provision, token swaps, and fee collection."},{text:"✅ [dex019]",footer:"Is trading pairs other than those with WBNB allowed?",desciptionTitle:"No clear answer but it does mention that users can swap eligible trading pairs and stake BSW to activate them in the Multi-Reward Pool to earn rewards in different tokens such as BSW, BNB, and BUSD.",desciptionText:"The provided code does not explicitly mention WBNB. However, the Biswap DEX supports trading pairs between any two ERC20 tokens, not just WBNB."},{text:"✅ [dex0110]",footer:"Is the smart contracts capable to prevent frontrunning attacks?",desciptionTitle:"N.A.",desciptionText:'The Biswap smart contract does not have a built-in functionality to prevent frontrunning attacks. However, Biswap uses a mechanism called "time-weighted average price" (TWAP) to mitigate the impact of such attacks. This mechanism calculates the average price of a token over a certain period of time, making it more difficult for attackers to profit from short-term price movements.'},{text:"✅ [dex0111]",footer:"Is on-chain or off-chain price feeds used for the token prices?",desciptionTitle:"N.A.",desciptionText:"The Biswap smart contract does not use on-chain or off-chain price feeds for its token prices. Instead, it calculates the token prices based on the reserves of the tokens in the liquidity pool."},{text:"✅ [dex0112]",footer:"Does the smart contract implement a decentralized governance mechanism?",desciptionTitle:"No clear answer but it does mention that users can swap eligible trading pairs and stake BSW to activate them in the Multi-Reward Pool to earn rewards in different tokens such as BSW, BNB, and BUSD.",desciptionText:"No, the Biswap smart contract does not implement a decentralized governance mechanism."},{text:"✅ [dex0113]",footer:"Is there a restriction on the maximum transaction amount or frequency for a given address?",desciptionTitle:"No clear answer but it does mention that users can swap eligible trading pairs and stake BSW to activate them in the Multi-Reward Pool to earn rewards in different tokens such as BSW, BNB, and BUSD.",desciptionText:"The Biswap smart contract does not impose any restrictions on the maximum transaction amount or frequency for a given address."}],regulations:[{text:"✅ [dex011]",footer:"Tokens symbol is BSW",desciptionTitle:"Ticker Symbol: BSW",desciptionText:"contract BSWToken is BEP20('Biswap', 'BSW')"},{text:"✅ [dex012]",footer:"BEP-20 standard",desciptionTitle:"Chain: BNB Chain (BEP-20)",desciptionText:"Contract BSWToken is BEP20('Biswap', 'BSW')"},{text:"✅ [dex013]",footer:"700000000",desciptionTitle:"Max Supply: 700 000 000 BSW tokens",desciptionText:"The total token supply is 700,000,000"},{text:"❌ [dex014]",footer:"Is ERC20 Token Standard Implemented?",desciptionTitle:"No, BEP-20 token standard is implemented which is specific to the Binance Smart Chain (BSC) ecosystem",desciptionText:"Yes, ERC20 token standards is implemented, inherits from the BiswapERC20 contract with ERC20 interface."}],industryStandard:[{text:"✅ [dex011]",footer:"Tokens symbol is BSW",desciptionTitle:"Ticker Symbol: BSW",desciptionText:"contract BSWToken is BEP20('Biswap', 'BSW')"}],contracts:{"Allegiance.sol":wv,"CaveGame.sol":kv,"FarmerGem.sol":Ev,"IControllable1155.sol":Tv},codeQuality:[{label:"Maintainability",text:"A",footer:"Created by SonarCube"},{label:"Test Coverage",text:"80%",footer:"Created by Jest"},{label:"Performance",text:"B",footer:"Created by GPT"}],securityAnalysis:[{label:"Score",text:"80/100",footer:"Created by Hacken"},{label:"Audits",text:"85/100",footer:"Created by Verazt"}],explanation:"BiSwap is a decentralized exchange platform that allows users to easily swap BEP-20 tokens on the Binance Smart Chain network. The platform features a three-level referral system and low transaction fees (0.1%). Our mission is to become a leading platform for token swaps in the DeFi space by offering fast, secure, and easy-to-use services."},actionsView:{actions:[{title:"Require 1 or more security audit report",text:"Suggest the VASP to submit at least another security audit report within 45 days...",type:"danger"},{title:"Code has not been updates for long time",text:"Suggest the VASP to link Github account or submit a new code base.",type:"warn"},{title:"Risky wallets interaction",text:"The deployed contract has attracted many newly wallets. Require VASP to validate...",type:"primary"},{title:"Code has high similarity to Uniswap",text:"Suggest the VASP to further clarify the differences for not violating Business S...",type:"danger"},{title:"High botting rate",text:"Suggest to review the VASP's solution on bot detection and IP restriction.",type:"warn"},{title:"Core contract has been modified recently",text:"Dangerous to update the core smart contract code. The audit reports may not be s...",type:"primary"},{title:"Orderbook Spoofing",text:"There is a high chance that the order book design has no restriction on spoofing...",type:"danger"}],tasks:[{title:"Require 1 or more security audit report",text:"Suggest the VASP to submit at least another security audit report within 45 days...",type:"danger"},{title:"Code has not been updates for long time",text:"Suggest the VASP to link Github account or submit a new code base.",type:"warn"},{title:"Risky wallets interaction",text:"The deployed contract has attracted many newly wallets. Require VASP to validate...",type:"primary"}]}},Yi={guid:"e262d5c2-16f8-47a0-8c70-4019514d137c",logo:"/webapp/logos/pooltogether.jpeg",name:"Pool Together",url:"https://pooltogether.com",author:"John Doe",rating:"B-",description:"Pool Together is a lottery game",tags:["Pool","NFT"],status:"In Progress",dueAt:"2023-05-25T00:00:00.000Z",overviewView:[{title:"Business Model Analysis",props:[{component:"PropDisplayCard",title:"Business model & Value Proposition",text:"Biswap is a trusted DEX platform on the BNB Chain Network with a Multi-type Referral Program and low trade fee starting from 0.1%. Biswap is the ecosystem that offers the best service and creates new standards in DeFi.",tags:["P2P Trading","Deposits"],regulations:[{text:"https://www.1.com",href:"https://www.1.com"}]},{component:"PropDisplayCard",title:"Customer Segments",text:"Retail investors who need to swap tokens<br/>Institutiona funds who conduct AMM business<br/>VASPs who IDO"}]},{title:"Social Media Analysis",props:[{component:"PropDisplayCard",title:"Twitter Analysis",text:"Biswap is a trusted DEX platform on the BNB Chain Network with a Multi-type Referral Program and low trade fee starting from 0.1%. Biswap is the ecosystem that offers the best service and creates new standards in DeFi.",tags:["P2P Trading","Deposits"],regulations:[{text:"https://www.1.com",href:"https://www.1.com"}]},{component:"PropDisplayCard",title:"Blog Analysis",text:"Retail investors who need to swap tokens<br/>Institutiona funds who conduct AMM business<br/>VASPs who IDO"}]},{title:"On-Chain Data Analysis",props:[{component:"PropDisplayKeyValue",title:"Pools & Volume",values:[{key:"Number of Pools",value:"3,234,132"},{key:"7 Days Volume",value:"$76,261,658"},{key:"24 Hrs Volumne",value:"$5,291,480"},{key:"Changes",value:"-61.71%"}]},{component:"PropDisplayKeyValue",title:"Customer Persona",values:[{key:"Unique Address",value:"1,2888,378"},{key:"Bot Rate",value:"21%"},{key:"Retails / Total (volume)",value:"26%"},{key:"Retails / Total (Acct.)",value:"86%"}]}]}],assessmentView:{whitepaper:[{text:"✅ [dex011]",footer:"Tokens symbol is BSW",desciptionTitle:"Ticker Symbol: BSW",desciptionText:"contract BSWToken is BEP20('Biswap', 'BSW')"},{text:"✅ [dex012]",footer:"BEP-20 standard",desciptionTitle:"Chain: BNB Chain (BEP-20)",desciptionText:"Contract BSWToken is BEP20('Biswap', 'BSW')"},{text:"✅ [dex013]",footer:"700000000",desciptionTitle:"Max Supply: 700 000 000 BSW tokens",desciptionText:"The total token supply is 700,000,000"},{text:"❌ [dex014]",footer:"Is ERC20 Token Standard Implemented?",desciptionTitle:"No, BEP-20 token standard is implemented which is specific to the Binance Smart Chain (BSC) ecosystem",desciptionText:"Yes, ERC20 token standards is implemented, inherits from the BiswapERC20 contract with ERC20 interface."},{text:"✅ [dex015]",footer:"How many types of Swap Fee Tiers are mentioned in code?",desciptionTitle:"N.A.",desciptionText:"There is only one swapFee tier, which can be set by calling the `setSwapFee` function. The default value of the swapFee is 1."},{text:"✅ [dex016]",footer:"What is the swap fee for a single token swap?",desciptionTitle:"The swap fee charged when someone makes a token swap on Biswap is 0.2% or 0.1%, depending on the trading pair. For most trading pairs, the fee is 0.2%, and for some specific pairs such as BUSD-USDT, USDC-USDT, and DAI-USDT, the fee is 0.1%.",desciptionText:"The default swap fee is 1 basis point (0.01%)."},{text:"✅ [dex017]",footer:"How much of the swap fee will be taken by developers by _mintFee()?",desciptionTitle:"Unspecfied in whitepaper, but this function mints new BSW tokens from the swap fee, which are distributed to stakeholders, including developers.",desciptionText:"The amount of the fee is calculated based on the change in the product of the reserves, and is proportional to the square root of the product of the reserves. The proportion of the fee that is taken by the developers is set by the `devFee` variable, which is also initialized to 1 in the contract."},{text:"✅ [dex018]",footer:"Is the code Applicable to AMM?",desciptionTitle:"The code presented in the excerpt is applicable to AMM (Automated Market Maker) protocol, which is used by the Biswap Exchange.",desciptionText:"Yes, this code is applicable to Automated Market Maker (AMM) as it implements the core functionality of a DEX, including liquidity provision, token swaps, and fee collection."},{text:"✅ [dex019]",footer:"Is trading pairs other than those with WBNB allowed?",desciptionTitle:"No clear answer but it does mention that users can swap eligible trading pairs and stake BSW to activate them in the Multi-Reward Pool to earn rewards in different tokens such as BSW, BNB, and BUSD.",desciptionText:"The provided code does not explicitly mention WBNB. However, the Biswap DEX supports trading pairs between any two ERC20 tokens, not just WBNB."},{text:"✅ [dex0110]",footer:"Is the smart contracts capable to prevent frontrunning attacks?",desciptionTitle:"N.A.",desciptionText:'The Biswap smart contract does not have a built-in functionality to prevent frontrunning attacks. However, Biswap uses a mechanism called "time-weighted average price" (TWAP) to mitigate the impact of such attacks. This mechanism calculates the average price of a token over a certain period of time, making it more difficult for attackers to profit from short-term price movements.'},{text:"✅ [dex0111]",footer:"Is on-chain or off-chain price feeds used for the token prices?",desciptionTitle:"N.A.",desciptionText:"The Biswap smart contract does not use on-chain or off-chain price feeds for its token prices. Instead, it calculates the token prices based on the reserves of the tokens in the liquidity pool."},{text:"✅ [dex0112]",footer:"Does the smart contract implement a decentralized governance mechanism?",desciptionTitle:"No clear answer but it does mention that users can swap eligible trading pairs and stake BSW to activate them in the Multi-Reward Pool to earn rewards in different tokens such as BSW, BNB, and BUSD.",desciptionText:"No, the Biswap smart contract does not implement a decentralized governance mechanism."},{text:"✅ [dex0113]",footer:"Is there a restriction on the maximum transaction amount or frequency for a given address?",desciptionTitle:"No clear answer but it does mention that users can swap eligible trading pairs and stake BSW to activate them in the Multi-Reward Pool to earn rewards in different tokens such as BSW, BNB, and BUSD.",desciptionText:"The Biswap smart contract does not impose any restrictions on the maximum transaction amount or frequency for a given address."}],regulations:[{text:"✅ [dex011]",footer:"Tokens symbol is BSW",desciptionTitle:"Ticker Symbol: BSW",desciptionText:"contract BSWToken is BEP20('Biswap', 'BSW')"},{text:"✅ [dex012]",footer:"BEP-20 standard",desciptionTitle:"Chain: BNB Chain (BEP-20)",desciptionText:"Contract BSWToken is BEP20('Biswap', 'BSW')"},{text:"✅ [dex013]",footer:"700000000",desciptionTitle:"Max Supply: 700 000 000 BSW tokens",desciptionText:"The total token supply is 700,000,000"},{text:"❌ [dex014]",footer:"Is ERC20 Token Standard Implemented?",desciptionTitle:"No, BEP-20 token standard is implemented which is specific to the Binance Smart Chain (BSC) ecosystem",desciptionText:"Yes, ERC20 token standards is implemented, inherits from the BiswapERC20 contract with ERC20 interface."}],industryStandard:[{text:"✅ [dex011]",footer:"Tokens symbol is BSW",desciptionTitle:"Ticker Symbol: BSW",desciptionText:"contract BSWToken is BEP20('Biswap', 'BSW')"}],codeQuality:[{label:"Maintainability",text:"A",footer:"Created by SonarCube"},{label:"Test Coverage",text:"80%",footer:"Created by Jest"},{label:"Performance",text:"B",footer:"Created by GPT"}],securityAnalysis:[{label:"Score",text:"80/100",footer:"Created by Hacken"},{label:"Audits",text:"85/100",footer:"Created by Verazt"}],explanation:"BiSwap is a decentralized exchange platform that allows users to easily swap BEP-20 tokens on the Binance Smart Chain network. The platform features a three-level referral system and low transaction fees (0.1%). Our mission is to become a leading platform for token swaps in the DeFi space by offering fast, secure, and easy-to-use services."},actionsView:{actions:[{title:"Require 1 or more security audit report",text:"Suggest the VASP to submit at least another security audit report within 45 days...",type:"danger"},{title:"Code has not been updates for long time",text:"Suggest the VASP to link Github account or submit a new code base.",type:"warn"},{title:"Risky wallets interaction",text:"The deployed contract has attracted many newly wallets. Require VASP to validate...",type:"primary"},{title:"Code has high similarity to Uniswap",text:"Suggest the VASP to further clarify the differences for not violating Business S...",type:"danger"},{title:"High botting rate",text:"Suggest to review the VASP's solution on bot detection and IP restriction.",type:"warn"},{title:"Core contract has been modified recently",text:"Dangerous to update the core smart contract code. The audit reports may not be s...",type:"primary"},{title:"Orderbook Spoofing",text:"There is a high chance that the order book design has no restriction on spoofing...",type:"danger"}],tasks:[{title:"Require 1 or more security audit report",text:"Suggest the VASP to submit at least another security audit report within 45 days...",type:"danger"},{title:"Code has not been updates for long time",text:"Suggest the VASP to link Github account or submit a new code base.",type:"warn"},{title:"Risky wallets interaction",text:"The deployed contract has attracted many newly wallets. Require VASP to validate...",type:"primary"}]}},Xi={guid:"e262d5c2-16f8-47a0-8c70-4019514d137d",logo:"/webapp/logos/olympus.jpeg",name:"Olympus",url:"https://olympusdao.finance",author:"John Doe",rating:"B-",description:"Olympus is a stablecoin",tags:["Stablecoin","NFT"],status:"In Progress",dueAt:"2023-05-25T00:00:00.000Z",overviewView:[{title:"Business Model Analysis",props:[{component:"PropDisplayCard",title:"Business model & Value Proposition",text:"Biswap is a trusted DEX platform on the BNB Chain Network with a Multi-type Referral Program and low trade fee starting from 0.1%. Biswap is the ecosystem that offers the best service and creates new standards in DeFi.",tags:["P2P Trading","Deposits"],regulations:[{text:"https://www.1.com",href:"https://www.1.com"}]},{component:"PropDisplayCard",title:"Customer Segments",text:"Retail investors who need to swap tokens<br/>Institutiona funds who conduct AMM business<br/>VASPs who IDO"}]},{title:"Social Media Analysis",props:[{component:"PropDisplayCard",title:"Twitter Analysis",text:"Biswap is a trusted DEX platform on the BNB Chain Network with a Multi-type Referral Program and low trade fee starting from 0.1%. Biswap is the ecosystem that offers the best service and creates new standards in DeFi.",tags:["P2P Trading","Deposits"],regulations:[{text:"https://www.1.com",href:"https://www.1.com"}]},{component:"PropDisplayCard",title:"Blog Analysis",text:"Retail investors who need to swap tokens<br/>Institutiona funds who conduct AMM business<br/>VASPs who IDO"}]},{title:"On-Chain Data Analysis",props:[{component:"PropDisplayKeyValue",title:"Pools & Volume",values:[{key:"Number of Pools",value:"3,234,132"},{key:"7 Days Volume",value:"$76,261,658"},{key:"24 Hrs Volumne",value:"$5,291,480"},{key:"Changes",value:"-61.71%"}]},{component:"PropDisplayKeyValue",title:"Customer Persona",values:[{key:"Unique Address",value:"1,2888,378"},{key:"Bot Rate",value:"21%"},{key:"Retails / Total (volume)",value:"26%"},{key:"Retails / Total (Acct.)",value:"86%"}]}]}],assessmentView:{whitepaper:[{text:"✅ [dex011]",footer:"Tokens symbol is BSW",desciptionTitle:"Ticker Symbol: BSW",desciptionText:"contract BSWToken is BEP20('Biswap', 'BSW')"},{text:"✅ [dex012]",footer:"BEP-20 standard",desciptionTitle:"Chain: BNB Chain (BEP-20)",desciptionText:"Contract BSWToken is BEP20('Biswap', 'BSW')"},{text:"✅ [dex013]",footer:"700000000",desciptionTitle:"Max Supply: 700 000 000 BSW tokens",desciptionText:"The total token supply is 700,000,000"},{text:"❌ [dex014]",footer:"Is ERC20 Token Standard Implemented?",desciptionTitle:"No, BEP-20 token standard is implemented which is specific to the Binance Smart Chain (BSC) ecosystem",desciptionText:"Yes, ERC20 token standards is implemented, inherits from the BiswapERC20 contract with ERC20 interface."},{text:"✅ [dex015]",footer:"How many types of Swap Fee Tiers are mentioned in code?",desciptionTitle:"N.A.",desciptionText:"There is only one swapFee tier, which can be set by calling the `setSwapFee` function. The default value of the swapFee is 1."},{text:"✅ [dex016]",footer:"What is the swap fee for a single token swap?",desciptionTitle:"The swap fee charged when someone makes a token swap on Biswap is 0.2% or 0.1%, depending on the trading pair. For most trading pairs, the fee is 0.2%, and for some specific pairs such as BUSD-USDT, USDC-USDT, and DAI-USDT, the fee is 0.1%.",desciptionText:"The default swap fee is 1 basis point (0.01%)."},{text:"✅ [dex017]",footer:"How much of the swap fee will be taken by developers by _mintFee()?",desciptionTitle:"Unspecfied in whitepaper, but this function mints new BSW tokens from the swap fee, which are distributed to stakeholders, including developers.",desciptionText:"The amount of the fee is calculated based on the change in the product of the reserves, and is proportional to the square root of the product of the reserves. The proportion of the fee that is taken by the developers is set by the `devFee` variable, which is also initialized to 1 in the contract."},{text:"✅ [dex018]",footer:"Is the code Applicable to AMM?",desciptionTitle:"The code presented in the excerpt is applicable to AMM (Automated Market Maker) protocol, which is used by the Biswap Exchange.",desciptionText:"Yes, this code is applicable to Automated Market Maker (AMM) as it implements the core functionality of a DEX, including liquidity provision, token swaps, and fee collection."},{text:"✅ [dex019]",footer:"Is trading pairs other than those with WBNB allowed?",desciptionTitle:"No clear answer but it does mention that users can swap eligible trading pairs and stake BSW to activate them in the Multi-Reward Pool to earn rewards in different tokens such as BSW, BNB, and BUSD.",desciptionText:"The provided code does not explicitly mention WBNB. However, the Biswap DEX supports trading pairs between any two ERC20 tokens, not just WBNB."},{text:"✅ [dex0110]",footer:"Is the smart contracts capable to prevent frontrunning attacks?",desciptionTitle:"N.A.",desciptionText:'The Biswap smart contract does not have a built-in functionality to prevent frontrunning attacks. However, Biswap uses a mechanism called "time-weighted average price" (TWAP) to mitigate the impact of such attacks. This mechanism calculates the average price of a token over a certain period of time, making it more difficult for attackers to profit from short-term price movements.'},{text:"✅ [dex0111]",footer:"Is on-chain or off-chain price feeds used for the token prices?",desciptionTitle:"N.A.",desciptionText:"The Biswap smart contract does not use on-chain or off-chain price feeds for its token prices. Instead, it calculates the token prices based on the reserves of the tokens in the liquidity pool."},{text:"✅ [dex0112]",footer:"Does the smart contract implement a decentralized governance mechanism?",desciptionTitle:"No clear answer but it does mention that users can swap eligible trading pairs and stake BSW to activate them in the Multi-Reward Pool to earn rewards in different tokens such as BSW, BNB, and BUSD.",desciptionText:"No, the Biswap smart contract does not implement a decentralized governance mechanism."},{text:"✅ [dex0113]",footer:"Is there a restriction on the maximum transaction amount or frequency for a given address?",desciptionTitle:"No clear answer but it does mention that users can swap eligible trading pairs and stake BSW to activate them in the Multi-Reward Pool to earn rewards in different tokens such as BSW, BNB, and BUSD.",desciptionText:"The Biswap smart contract does not impose any restrictions on the maximum transaction amount or frequency for a given address."}],regulations:[{text:"✅ [dex011]",footer:"Tokens symbol is BSW",desciptionTitle:"Ticker Symbol: BSW",desciptionText:"contract BSWToken is BEP20('Biswap', 'BSW')"},{text:"✅ [dex012]",footer:"BEP-20 standard",desciptionTitle:"Chain: BNB Chain (BEP-20)",desciptionText:"Contract BSWToken is BEP20('Biswap', 'BSW')"},{text:"✅ [dex013]",footer:"700000000",desciptionTitle:"Max Supply: 700 000 000 BSW tokens",desciptionText:"The total token supply is 700,000,000"},{text:"❌ [dex014]",footer:"Is ERC20 Token Standard Implemented?",desciptionTitle:"No, BEP-20 token standard is implemented which is specific to the Binance Smart Chain (BSC) ecosystem",desciptionText:"Yes, ERC20 token standards is implemented, inherits from the BiswapERC20 contract with ERC20 interface."}],industryStandard:[{text:"✅ [dex011]",footer:"Tokens symbol is BSW",desciptionTitle:"Ticker Symbol: BSW",desciptionText:"contract BSWToken is BEP20('Biswap', 'BSW')"}],codeQuality:[{label:"Maintainability",text:"A",footer:"Created by SonarCube"},{label:"Test Coverage",text:"80%",footer:"Created by Jest"},{label:"Performance",text:"B",footer:"Created by GPT"}],securityAnalysis:[{label:"Score",text:"80/100",footer:"Created by Hacken"},{label:"Audits",text:"85/100",footer:"Created by Verazt"}],explanation:"BiSwap is a decentralized exchange platform that allows users to easily swap BEP-20 tokens on the Binance Smart Chain network. The platform features a three-level referral system and low transaction fees (0.1%). Our mission is to become a leading platform for token swaps in the DeFi space by offering fast, secure, and easy-to-use services."},actionsView:{actions:[{title:"Require 1 or more security audit report",text:"Suggest the VASP to submit at least another security audit report within 45 days...",type:"danger"},{title:"Code has not been updates for long time",text:"Suggest the VASP to link Github account or submit a new code base.",type:"warn"},{title:"Risky wallets interaction",text:"The deployed contract has attracted many newly wallets. Require VASP to validate...",type:"primary"},{title:"Code has high similarity to Uniswap",text:"Suggest the VASP to further clarify the differences for not violating Business S...",type:"danger"},{title:"High botting rate",text:"Suggest to review the VASP's solution on bot detection and IP restriction.",type:"warn"},{title:"Core contract has been modified recently",text:"Dangerous to update the core smart contract code. The audit reports may not be s...",type:"primary"},{title:"Orderbook Spoofing",text:"There is a high chance that the order book design has no restriction on spoofing...",type:"danger"}],tasks:[{title:"Require 1 or more security audit report",text:"Suggest the VASP to submit at least another security audit report within 45 days...",type:"danger"},{title:"Code has not been updates for long time",text:"Suggest the VASP to link Github account or submit a new code base.",type:"warn"},{title:"Risky wallets interaction",text:"The deployed contract has attracted many newly wallets. Require VASP to validate...",type:"primary"}]}},Qi={guid:"e262d5c2-16f8-47a0-8c70-4019514d137e",logo:"/webapp/logos/eulerfinance.png",name:"Euler Finance",url:"https://euler.finance",author:"John Doe",rating:"B-",description:"Euler Finance is a DeFi protocol",tags:["Loan","P2P Trading","Collateral Control","Deposits","Risk Management","DAO","Flashloan","Price Oracle"],status:"In Progress",dueAt:"2023-05-25T00:00:00.000Z",overviewView:[{title:"Business Model Analysis",props:[{component:"PropDisplayCard",title:"Business model & Value Proposition",text:"Euler's business model revolves around providing decentralized lending and borrowing services on the Ethereum blockchain. It generates revenue through interest accrued on loans, with a portion held in reserves for bad debts. The model relies on the Euler Governance Token (EUL) for protocol management, enabling a decentralized approach. Euler offers a unique value proposition by enabling permissionless listings, asset tiering for risk management, tokenized debts, protected collateral, feeless flash loans, and risk-adjusted borrowing capacity. By leveraging decentralized price oracles, Euler ensures a secure and transparent experience for users, promoting capital efficiency and a user-centric approach.",tags:["Loan","P2P Trading","Collateral Control","Deposits","Risk Management","DAO","Flashloan","Price Oracle"],regulations:[{text:"ref1",href:"https://en.adgm.thomsonreuters.com/rulebook/guidance-regulation-digital-securities-activities-adgm-24-february-2020"},{text:"ref2",href:"https://www.mas.gov.sg/regulation/explainers/a-guide-to-digital-token-offerings"}]},{component:"PropDisplayCard",title:"Customer Segments",text:"Individuals and institutions cryptocurrency adopters: both lender and borrowers for various purposes, such as earning interest, leveraging trading positions, liquidity provision, or covering short-term expenses.<br/>Developers: Those looking to build applications, products, or services on top of Euler's protocol, leveraging its features such as tokenized debts and feeless flash loans. <br/><a href='https://chain.link/education-hub/flash-loans'>Flash loans</a> applier<br/>Governance participants: token holders who want to contribute to the platform's development and decision-making process by participating in governance proposals and voting."}]},{title:"DAO Governance Analysis",props:[{component:"PropDisplayKeyValue",title:"Governance Monitoring",values:[{key:"Number of Proposals",value:"83"},{key:"Smart Contract Changes",value:"6 times"},{key:"Grant Changes",value:"12 times"},{key:"Skewness of voting power",value:"high"}]},{component:"PropDisplayTable",title:"Important Events",headers:["Event","Status","Date"],rows:[["Contract Upgrades (eIP 14)","SUCCEEDED","Aug 12, 2022"],["Move All Asset Price Oracles to Chainlink","SUCCEEDED","Sep 5, 2022"],["Update the Interest Rate Model","SUCCEEDED","Feb 19, 2023"]]}]},{title:"On-Chain Data Analysis",props:[{component:"PropDisplayKeyValue",title:"Pools & Volume",values:[{key:"Number of Pools",value:"1555"},{key:"TVL",value:"$113,934"},{key:"Changes",value:"-11.42%"}]},{component:"PropDisplayKeyValue",title:"Customer Persona",values:[{key:"Unique Address",value:"288,378"},{key:"Bot Rate",value:"31%"},{key:"Retails / Total (volume)",value:"16%"},{key:"Retails / Total (Acct.)",value:"86%"}]}]},{title:"Team Background Analysis",props:[{component:"PropDisplayCard",title:"Overview",text:"Euler is a team of software engineers and quantitative analysts specialising in the research and development of financial applications."},{component:"PropDisplayKeyValue",title:"Team",values:[{key:"CEO",value:"Michael Bentley https://twitter.com/euler_mab"},{key:"Marketing",value:"Alicia Katz https://twitter.com/aliciakatz"},{key:"Research",value:"river0x https://twitter.com/river0x_"},{key:"Engineer",value:"Lee https://twitter.com/lmount_"}]},{component:"PropDisplayCard",title:"LinkedIn Analysis",text:"to be updated"},{component:"PropDisplayCard",title:"Twitter Analysis",text:"to be updated"}]}],assessmentView:{whitepaper:[{text:"✅ [dex011]",footer:"Tokens symbol is BSW",desciptionTitle:"Ticker Symbol: BSW",desciptionText:"contract BSWToken is BEP20('Biswap', 'BSW')"},{text:"✅ [dex012]",footer:"BEP-20 standard",desciptionTitle:"Chain: BNB Chain (BEP-20)",desciptionText:"Contract BSWToken is BEP20('Biswap', 'BSW')"},{text:"✅ [dex013]",footer:"700000000",desciptionTitle:"Max Supply: 700 000 000 BSW tokens",desciptionText:"The total token supply is 700,000,000"},{text:"❌ [dex014]",footer:"Is ERC20 Token Standard Implemented?",desciptionTitle:"No, BEP-20 token standard is implemented which is specific to the Binance Smart Chain (BSC) ecosystem",desciptionText:"Yes, ERC20 token standards is implemented, inherits from the BiswapERC20 contract with ERC20 interface."},{text:"✅ [dex015]",footer:"How many types of Swap Fee Tiers are mentioned in code?",desciptionTitle:"N.A.",desciptionText:"There is only one swapFee tier, which can be set by calling the `setSwapFee` function. The default value of the swapFee is 1."},{text:"✅ [dex016]",footer:"What is the swap fee for a single token swap?",desciptionTitle:"The swap fee charged when someone makes a token swap on Biswap is 0.2% or 0.1%, depending on the trading pair. For most trading pairs, the fee is 0.2%, and for some specific pairs such as BUSD-USDT, USDC-USDT, and DAI-USDT, the fee is 0.1%.",desciptionText:"The default swap fee is 1 basis point (0.01%)."},{text:"✅ [dex017]",footer:"How much of the swap fee will be taken by developers by _mintFee()?",desciptionTitle:"Unspecfied in whitepaper, but this function mints new BSW tokens from the swap fee, which are distributed to stakeholders, including developers.",desciptionText:"The amount of the fee is calculated based on the change in the product of the reserves, and is proportional to the square root of the product of the reserves. The proportion of the fee that is taken by the developers is set by the `devFee` variable, which is also initialized to 1 in the contract."},{text:"✅ [dex018]",footer:"Is the code Applicable to AMM?",desciptionTitle:"The code presented in the excerpt is applicable to AMM (Automated Market Maker) protocol, which is used by the Biswap Exchange.",desciptionText:"Yes, this code is applicable to Automated Market Maker (AMM) as it implements the core functionality of a DEX, including liquidity provision, token swaps, and fee collection."},{text:"✅ [dex019]",footer:"Is trading pairs other than those with WBNB allowed?",desciptionTitle:"No clear answer but it does mention that users can swap eligible trading pairs and stake BSW to activate them in the Multi-Reward Pool to earn rewards in different tokens such as BSW, BNB, and BUSD.",desciptionText:"The provided code does not explicitly mention WBNB. However, the Biswap DEX supports trading pairs between any two ERC20 tokens, not just WBNB."},{text:"✅ [dex0110]",footer:"Is the smart contracts capable to prevent frontrunning attacks?",desciptionTitle:"N.A.",desciptionText:'The Biswap smart contract does not have a built-in functionality to prevent frontrunning attacks. However, Biswap uses a mechanism called "time-weighted average price" (TWAP) to mitigate the impact of such attacks. This mechanism calculates the average price of a token over a certain period of time, making it more difficult for attackers to profit from short-term price movements.'},{text:"✅ [dex0111]",footer:"Is on-chain or off-chain price feeds used for the token prices?",desciptionTitle:"N.A.",desciptionText:"The Biswap smart contract does not use on-chain or off-chain price feeds for its token prices. Instead, it calculates the token prices based on the reserves of the tokens in the liquidity pool."},{text:"✅ [dex0112]",footer:"Does the smart contract implement a decentralized governance mechanism?",desciptionTitle:"No clear answer but it does mention that users can swap eligible trading pairs and stake BSW to activate them in the Multi-Reward Pool to earn rewards in different tokens such as BSW, BNB, and BUSD.",desciptionText:"No, the Biswap smart contract does not implement a decentralized governance mechanism."},{text:"✅ [dex0113]",footer:"Is there a restriction on the maximum transaction amount or frequency for a given address?",desciptionTitle:"No clear answer but it does mention that users can swap eligible trading pairs and stake BSW to activate them in the Multi-Reward Pool to earn rewards in different tokens such as BSW, BNB, and BUSD.",desciptionText:"The Biswap smart contract does not impose any restrictions on the maximum transaction amount or frequency for a given address."}],regulations:[{text:"✅ [dex011]",footer:"Tokens symbol is BSW",desciptionTitle:"Ticker Symbol: BSW",desciptionText:"contract BSWToken is BEP20('Biswap', 'BSW')"},{text:"✅ [dex012]",footer:"BEP-20 standard",desciptionTitle:"Chain: BNB Chain (BEP-20)",desciptionText:"Contract BSWToken is BEP20('Biswap', 'BSW')"},{text:"✅ [dex013]",footer:"700000000",desciptionTitle:"Max Supply: 700 000 000 BSW tokens",desciptionText:"The total token supply is 700,000,000"},{text:"❌ [dex014]",footer:"Is ERC20 Token Standard Implemented?",desciptionTitle:"No, BEP-20 token standard is implemented which is specific to the Binance Smart Chain (BSC) ecosystem",desciptionText:"Yes, ERC20 token standards is implemented, inherits from the BiswapERC20 contract with ERC20 interface."}],industryStandard:[{text:"✅ [dex011]",footer:"Tokens symbol is BSW",desciptionTitle:"Ticker Symbol: BSW",desciptionText:"contract BSWToken is BEP20('Biswap', 'BSW')"}],codeQuality:[{label:"Maintainability",text:"A",footer:"Created by SonarCube"},{label:"Test Coverage",text:"80%",footer:"Created by Jest"},{label:"Performance",text:"B",footer:"Created by GPT"}],securityAnalysis:[{label:"Score",text:"80/100",footer:"Created by Hacken"},{label:"Audits",text:"85/100",footer:"Created by Verazt"}],explanation:"BiSwap is a decentralized exchange platform that allows users to easily swap BEP-20 tokens on the Binance Smart Chain network. The platform features a three-level referral system and low transaction fees (0.1%). Our mission is to become a leading platform for token swaps in the DeFi space by offering fast, secure, and easy-to-use services."},actionsView:{actions:[{title:"The DAO voting is highly centralized.",text:"10 votings events are led by a single address (> 50% weight). Request the VASP t...",type:"danger"},{title:"The DAO voting is highly centralized.",text:"Request the VASP to conduct KYC for addresses, unless reducing their voting weig...",type:"danger"},{title:"Core contract has been modified recently.",text:"Suggest the VASP to submit at least two security audit reports that covers the u...",type:"danger"},{title:"A new developer address added.",text:"Request the VASP to conduct KYC for the new developer. No contract modification ...",type:"warn"}],tasks:[{title:"Add security audit report",text:"Suggest the VASP to submit at least another security audit report within 45 days...",type:"danger"},{title:"Update code and whitepapers",text:"Suggest the VASP to link Github account or submit a new code base.",type:"warn"},{title:"Check the interaction of the wallets",text:"The deployed contract has attracted many newly wallets. Require VASP to validate...",type:"primary"}]}},Sv=`// File: neopin/NeopinToken.sol


pragma solidity 0.8.10;



contract NeopinToken is ERC20 {
    using SafeERC20 for IERC20;
    address public _owner;
    // mapping(address => uint256) balances;
    // mapping(address => mapping(address => uint256)) allowed;

    event Burned(address request, uint256 amount);
    
    constructor() ERC20("NEOPIN Token", "NPT") {
        _owner = msg.sender;
        _mint(msg.sender, 1000000000e18);
    }

    function burn(uint256 _amount) external returns (bool) {
        require(msg.sender == _owner);
        _burn(msg.sender, _amount);
        emit Burned(msg.sender, _amount);
        return true;
    }
}



`,Av=`// SPDX-License-Identifier: Apache-2.0

pragma solidity ^0.8.10;

import '@openzeppelin/contracts/access/Ownable.sol';
import '@openzeppelin/contracts/utils/Address.sol';
import '@openzeppelin/contracts/security/Pausable.sol';
import '@openzeppelin/contracts/access/AccessControl.sol';

import './ERC20Capped.sol';

/**
 * @title MultichainToken
 * @dev This contract is template for Multichain token
 */
contract MultichainToken is AccessControl, Ownable, Pausable, ERC20Capped {
  // Create a new role identifier for the minter role
  bytes32 public constant MINTER_ROLE = keccak256('MINTER_ROLE');
  bytes32 public constant BURNER_ROLE = keccak256('BURNER_ROLE');
  bytes32 public constant OPERATOR_ROLE = keccak256('OPERATOR_ROLE');

  bytes32 public DOMAIN_SEPARATOR;
  // keccak256("Permit(address owner,address spender,uint256 value,uint256 nonce,uint256 deadline)");
  bytes32 public constant PERMIT_TYPEHASH = 0x6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c9;
  mapping(address => uint256) public nonces;

  /**
   * @dev Creates an instance of \`MeterToken\` where \`name\` and \`symbol\` is initialized.
   * Names and symbols can vary from the pegging currency
   */
  constructor(string memory _name, string memory _symbol, uint256 maxCap_) ERC20(_name, _symbol) ERC20Capped(maxCap_) {
    _setupRole(DEFAULT_ADMIN_ROLE, _msgSender());
    _setupRole(MINTER_ROLE, _msgSender());
    _setupRole(OPERATOR_ROLE, _msgSender());
    uint256 chainId;
    assembly {
      chainId := chainid()
    }
    DOMAIN_SEPARATOR = keccak256(
      abi.encode(
        keccak256('EIP712Domain(string name,string version,uint256 chainId,address verifyingContract)'),
        keccak256(bytes(_name)),
        keccak256(bytes('1')),
        chainId,
        address(this)
      )
    );
  }

  function permit(address owner, address spender, uint256 value, uint256 deadline, uint8 v, bytes32 r, bytes32 s) external {
    require(deadline >= block.timestamp, 'MultichainToken: EXPIRED');
    bytes32 digest = keccak256(
      abi.encodePacked('\\x19\\x01', DOMAIN_SEPARATOR, keccak256(abi.encode(PERMIT_TYPEHASH, owner, spender, value, nonces[owner]++, deadline)))
    );
    address recoveredAddress = ecrecover(digest, v, r, s);
    require(recoveredAddress != address(0) && recoveredAddress == owner, 'MultichainToken: INVALID_SIGNATURE');
    _approve(owner, spender, value);
  }

  function mint(address to, uint256 amount) external returns (bool) {
    // Check that the calling account has the minter role
    require(hasRole(MINTER_ROLE, msg.sender), 'MultichainToken: Caller is not a minter');
    _mint(to, amount);
    return true;
  }

  function burn(uint256 amount) external returns (bool) {
    _burn(_msgSender(), amount);
    return true;
  }

  // Caller bridge
  function burn(address _from, uint256 _amount) external returns (bool) {
    require(hasRole(BURNER_ROLE, msg.sender), 'MultichainToken: Caller is not a burner');
    _burn(_from, _amount);
    return true;
  }

  // polygon pos bridge
  function deposit(address user, bytes calldata depositData) external {
    require(hasRole(MINTER_ROLE, msg.sender), 'MultichainToken: Caller is not a minter');
      uint256 amount = abi.decode(depositData, (uint256));
      _mint(user, amount);
  }

  function withdraw(uint256 amount) external {
      _burn(_msgSender(), amount);
  }
  //

  // pauseable
  function pause() public {
    require(hasRole(OPERATOR_ROLE, msg.sender), 'MultichainToken: Caller is not a pauser');
    _pause();
  }

  function unpause() public {
    require(hasRole(OPERATOR_ROLE, msg.sender), 'MultichainToken: Caller is not a pauser');
    _unpause();
  }

  function setCap(uint256 cap_) public {
    require(hasRole(OPERATOR_ROLE, msg.sender), 'MultichainToken: Caller is not a pauser');
    _setCap(cap_);
  }

  function _beforeTokenTransfer( address from, address to, uint256 amount) internal virtual override {
    super._beforeTokenTransfer(from, to, amount);

    require(!paused(), 'MultichainToken: token transfer while paused');
  }
  //
}
`,xv=`// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

import "./MultichainToken.sol";

contract MultichainNPT is MultichainToken {
    constructor() MultichainToken('NEOPIN Token', 'NPT', 1000000000e18) {
    }
}
`,Ji={guid:"e262d5c2-16f8-47a0-8d10-4019514d137a",logo:"/webapp/logos/neopin.png",name:"Neopin",url:"https://neopin.io/",author:"John Doe",rating:"D",description:"Neopin is a blockchain-based project that employs a CeDeFi model, primarily focusing on incentivizing user activities with its native token, NPT, but is reported to exhibit operational, tokenomic, and auditing risks.",tags:["DeFi","Wallet","Staking","Multi-chain","CeDeFi"],status:"In Progress",dueAt:"2023-05-25T00:00:00.000Z",overviewView:[{title:"Business Model Analysis",props:[{component:"PropDisplayCard",title:"Business model & Value Proposition",text:"NEOPIN is a hybrid financial platform blending centralized finance (CeFi) and decentralized finance (DeFi) to connect traditional finance and Web3 markets. By leveraging the stability, security, and regulatory compliance of CeFi and the transparency and accessibility of DeFi, NEOPIN aims to resolve trust and security issues present in both financial sectors. The platform uses its native NEOPIN token (NPT) and allows users to participate in liquidity pools, earning rewards for their contributions through features like staking, swap, and yield farming. NEOPIN is also exploring additional products, including Play-to-Earn games, Stake-to-Earn, Mine-to-Earn, and NFT services, while prioritizing security and regulatory compliance with systems like KYC and AML.",tags:["DeFi","Wallet","Staking","Multi-chain","CeDeFi"],regulations:[{text:"ref1",href:"https://en.adgm.thomsonreuters.com/rulebook/guidance-regulation-digital-securities-activities-adgm-24-february-2020"},{text:"ref2",href:"https://www.mas.gov.sg/regulation/explainers/a-guide-to-digital-token-offerings"}]},{component:"PropDisplayCard",title:"Innovation Analysis",text:"Neopin's approach, focusing predominantly on standard token staking, appears to lack the innovative edge often seen in leading blockchain projects. This could limit their competitiveness in a rapidly evolving industry where novelty often drives user adoption and market value."},{component:"PropDisplayCard",title:"Customer Segments",text:"<ol><li>New crypto adopters, retail investors: Individuals who have an interest in cryptocurrencies and digital assets. These people are tech-savvy and open to new financial innovations.</li><li>Compliance-focused entities: Companies, institutions, or individuals that prioritize regulatory compliance in their crypto-related dealings, given NEOPIN's emphasis on KYC and AML procedures.</li><li>DeFi Users: Users already participating in decentralized finance who are seeking new platforms or methods to optimize their earnings.</li><li>Crypto Traders: Both short-term and long-term traders who are seeking a platform offering advanced trading functionalities and high liquidity.</li><li>Game developers and companies: developers and companies can launch Play-to-Earn games</li></ol>"}]},{title:"Security",props:[{component:"PropDisplayCard",title:"Smart Contract",text:"NPT is re-designed to be a multi-chain token that poses potential risks due to the increased complexity of the blockchain architecture. With multiple chains, the risk of smart contract vulnerabilities and bugs increase, which could lead to the loss of tokens or other potential security issues.<br/><br/>NPT deploying all tokens to a single address during contract deployment poses a risk of centralization. This method puts an enormous amount of trust in the contract deployer, who has the power to distribute tokens at their discretion. This central point of control may be prone to misuse or compromise, threatening the integrity and security of the entire system."},{component:"PropDisplayCard",title:"Code Integrity",text:`The deployed NPT smart contract code differs from the audited code.<br/>
                    <a href='https://scope.klaytn.com/account/0xe06597d02a2c3aa7a9708de2cfa587b128bd3815?tabId=contractCode'>Deployed code on Klaytn</a><br/>
                    <a href='https://etherscan.io/token/0x306ee01a6bA3b4a8e993fA2C1ADC7ea24462000c#code'>Deployed code on Ethereum</a><br/>
                    <a href='https://polygonscan.com/address/0x306ee01a6ba3b4a8e993fa2c1adc7ea24462000c#code'>Deployed code on Polygon</a><br/>
                    <a href='https://github.com/Neopin/neopin-audits/blob/master/Audit_Report_20220627_NPT_Staking_And_DEX_Swap_SlowMist.pdf'>Audited Code in Audit Report</a><br/>
                    <br/>
                    Multichain token smart contract is not audited.`},{component:"PropDisplayTable",title:"Audit Report",headers:["Report","Date","By","Coverage"],rows:[["1","Aug 2021","CertiK","Token"],["2","March 2022","SlowMist","Token + Lockup"]]},{component:"PropDisplayCard",title:"",text:`Neopin's audit reports are outdated and infrequent.
                    <br/>
                    The audit reports conducted lack professional depth, potentially resulting in overlooked threats and weaknesses.<br/>
                    <a href='https://github.com/Neopin/neopin-audits/tree/master'>Audit Reports</a>`},{component:"PropDisplayCard",title:"Code Library",text:"NPT token is using an old version of OpenZeppelin library v3.0.0 (<a href='https://github.com/OpenZeppelin/openzeppelin-contracts/releases/tag/v3.0.0'>Released</a> on Apr 2020). The library is out-of-date."}]},{title:"On-Chain Data Analysis",props:[{component:"PropDisplayTable",title:"NPT Activities",headers:["Blockchain","# TXs","Total Tokens","Risks"],rows:[["Ethereum","459","166,459","Arbitrage risks"],["Polygon","3,119","211,297","Low diversity"],["Klaytn","169,773","1,000,000,000","Operation risks"]]},{component:"PropDisplayKeyValue",title:"Transactions Categorization",values:[{key:"Bridgeing ",value:"60%"},{key:"Providing LP",value:"30%"},{key:"Staking",value:"5%"},{key:"Others",value:"5%"}]}]},{title:"Tokenomic",props:[{component:"PropDisplayCard",title:"Summary",text:"Neopin's tokenomic design, largely based on self-generated tokens and lacking a clear economic utility, raises key uncertainties about the system's stability. Its unclear strategies to address potential token depreciation may affect trust in the long term. Additionally, the prevalent use of its native token, NPT, as a reward mechanism could lead to inflation and devaluation if the token supply significantly exceeds demand."},{component:"PropDisplayCard",title:"Risks Analysis",text:"The NPT token's undefined role poses risks to Neopin's stability and long-term value. Predictive models indicate potential threats without a strong consumption model.<br/><br/>While Neopin proposes strategies to stabilize token value, the lack of a detailed plan raises doubts about their long-term viability."}]},{title:"Team Analysis",props:[{component:"PropDisplayCard",title:"Background",text:"Neopin team is anonymous."}]},{title:"Social Media Analysis",props:[{component:"PropDisplayKeyValue",title:"Social Media",values:[{key:"Telegram",value:"2,129 - ↓50% in 60 days"},{key:"Discord",value:"To be crawled"},{key:"Twitter",value:"31,634 - ↑300% in 20 days"},{key:"Instagram",value:"To be crawled"}]}]}],assessmentView:{whitepaper:[{text:"✅ [dex011]",footer:"Tokens symbol is BSW",desciptionTitle:"Ticker Symbol: BSW",desciptionText:"contract BSWToken is BEP20('Biswap', 'BSW')"},{text:"✅ [dex012]",footer:"BEP-20 standard",desciptionTitle:"Chain: BNB Chain (BEP-20)",desciptionText:"Contract BSWToken is BEP20('Biswap', 'BSW')"},{text:"✅ [dex013]",footer:"700000000",desciptionTitle:"Max Supply: 700 000 000 BSW tokens",desciptionText:"The total token supply is 700,000,000"},{text:"❌ [dex014]",footer:"Is ERC20 Token Standard Implemented?",desciptionTitle:"No, BEP-20 token standard is implemented which is specific to the Binance Smart Chain (BSC) ecosystem",desciptionText:"Yes, ERC20 token standards is implemented, inherits from the BiswapERC20 contract with ERC20 interface."},{text:"✅ [dex015]",footer:"How many types of Swap Fee Tiers are mentioned in code?",desciptionTitle:"N.A.",desciptionText:"There is only one swapFee tier, which can be set by calling the `setSwapFee` function. The default value of the swapFee is 1."},{text:"✅ [dex016]",footer:"What is the swap fee for a single token swap?",desciptionTitle:"The swap fee charged when someone makes a token swap on Biswap is 0.2% or 0.1%, depending on the trading pair. For most trading pairs, the fee is 0.2%, and for some specific pairs such as BUSD-USDT, USDC-USDT, and DAI-USDT, the fee is 0.1%.",desciptionText:"The default swap fee is 1 basis point (0.01%)."},{text:"✅ [dex017]",footer:"How much of the swap fee will be taken by developers by _mintFee()?",desciptionTitle:"Unspecfied in whitepaper, but this function mints new BSW tokens from the swap fee, which are distributed to stakeholders, including developers.",desciptionText:"The amount of the fee is calculated based on the change in the product of the reserves, and is proportional to the square root of the product of the reserves. The proportion of the fee that is taken by the developers is set by the `devFee` variable, which is also initialized to 1 in the contract."},{text:"✅ [dex018]",footer:"Is the code Applicable to AMM?",desciptionTitle:"The code presented in the excerpt is applicable to AMM (Automated Market Maker) protocol, which is used by the Biswap Exchange.",desciptionText:"Yes, this code is applicable to Automated Market Maker (AMM) as it implements the core functionality of a DEX, including liquidity provision, token swaps, and fee collection."},{text:"✅ [dex019]",footer:"Is trading pairs other than those with WBNB allowed?",desciptionTitle:"No clear answer but it does mention that users can swap eligible trading pairs and stake BSW to activate them in the Multi-Reward Pool to earn rewards in different tokens such as BSW, BNB, and BUSD.",desciptionText:"The provided code does not explicitly mention WBNB. However, the Biswap DEX supports trading pairs between any two ERC20 tokens, not just WBNB."},{text:"✅ [dex0110]",footer:"Is the smart contracts capable to prevent frontrunning attacks?",desciptionTitle:"N.A.",desciptionText:'The Biswap smart contract does not have a built-in functionality to prevent frontrunning attacks. However, Biswap uses a mechanism called "time-weighted average price" (TWAP) to mitigate the impact of such attacks. This mechanism calculates the average price of a token over a certain period of time, making it more difficult for attackers to profit from short-term price movements.'},{text:"✅ [dex0111]",footer:"Is on-chain or off-chain price feeds used for the token prices?",desciptionTitle:"N.A.",desciptionText:"The Biswap smart contract does not use on-chain or off-chain price feeds for its token prices. Instead, it calculates the token prices based on the reserves of the tokens in the liquidity pool."},{text:"✅ [dex0112]",footer:"Does the smart contract implement a decentralized governance mechanism?",desciptionTitle:"No clear answer but it does mention that users can swap eligible trading pairs and stake BSW to activate them in the Multi-Reward Pool to earn rewards in different tokens such as BSW, BNB, and BUSD.",desciptionText:"No, the Biswap smart contract does not implement a decentralized governance mechanism."},{text:"✅ [dex0113]",footer:"Is there a restriction on the maximum transaction amount or frequency for a given address?",desciptionTitle:"No clear answer but it does mention that users can swap eligible trading pairs and stake BSW to activate them in the Multi-Reward Pool to earn rewards in different tokens such as BSW, BNB, and BUSD.",desciptionText:"The Biswap smart contract does not impose any restrictions on the maximum transaction amount or frequency for a given address."}],regulations:[{text:"✅ [dex011]",footer:"Tokens symbol is BSW",desciptionTitle:"Ticker Symbol: BSW",desciptionText:"contract BSWToken is BEP20('Biswap', 'BSW')"},{text:"✅ [dex012]",footer:"BEP-20 standard",desciptionTitle:"Chain: BNB Chain (BEP-20)",desciptionText:"Contract BSWToken is BEP20('Biswap', 'BSW')"},{text:"✅ [dex013]",footer:"700000000",desciptionTitle:"Max Supply: 700 000 000 BSW tokens",desciptionText:"The total token supply is 700,000,000"},{text:"❌ [dex014]",footer:"Is ERC20 Token Standard Implemented?",desciptionTitle:"No, BEP-20 token standard is implemented which is specific to the Binance Smart Chain (BSC) ecosystem",desciptionText:"Yes, ERC20 token standards is implemented, inherits from the BiswapERC20 contract with ERC20 interface."}],industryStandard:[{text:"✅ [dex011]",footer:"Tokens symbol is BSW",desciptionTitle:"Ticker Symbol: BSW",desciptionText:"contract BSWToken is BEP20('Biswap', 'BSW')"}],contracts:{"NeopinToken.sol":Sv,"MultichainToken.sol":Av,"MultichainNPT.sol":xv},codeQuality:[{label:"Maintainability",text:"A",footer:"Created by SonarCube"},{label:"Test Coverage",text:"80%",footer:"Created by Jest"},{label:"Performance",text:"B",footer:"Created by GPT"}],securityAnalysis:[{label:"Score",text:"80/100",footer:"Created by Hacken"},{label:"Audits",text:"85/100",footer:"Created by Verazt"}],explanation:"BiSwap is a decentralized exchange platform that allows users to easily swap BEP-20 tokens on the Binance Smart Chain network. The platform features a three-level referral system and low transaction fees (0.1%). Our mission is to become a leading platform for token swaps in the DeFi space by offering fast, secure, and easy-to-use services."}},dr=eb("organizations",()=>{const e=gi([{guid:"e262d5c2-16f8-47a0-8c70-4019514b137c",name:"Team 1 - DeFi",projects:[Ki,Gi,Yi,Xi,Qi,Ji]},{guid:"e262d5c2-16f8-47a0-8c70-4019514b137d",name:"Team 2 - Infra",projects:[Ki,Gi,Yi,Xi,Qi,Ji]},{guid:"e262d5c2-16f8-47a0-8c70-4019514b137e",name:"Team 3 - DAO",projects:[Ki,Gi,Yi,Xi,Qi,Ji]}]),t=s=>{if(s)return e.value.find(i=>i.guid===s)};return{organizations:e,findOrganization:t,findProject:(s,i)=>{if(!s||!i)return;const o=t(s);if(o)return o.projects.find(r=>r.guid===i)}}}),Cv={components:{OrgButton:gv},computed:{...lr(dr)}};const Pv=e=>(Fn("data-v-deb5c2d1"),e=e(),Vn(),e),Iv={class:"org-card mx-auto"},Ov=Pv(()=>k("h1",null,"Teams",-1)),Nv={class:"org-buttons mx-auto"};function Bv(e,t,n,s,i,o){const r=Re("OrgButton");return F(),H("div",Iv,[Ov,k("div",Nv,[(F(!0),H(me,null,Ie(e.organizationsStore.organizations,a=>(F(),on(r,{key:a.guid,name:a.name,guid:a.guid},null,8,["name","guid"]))),128))])])}const Rv=Se(Cv,[["render",Bv],["__scopeId","data-v-deb5c2d1"]]),Dv={props:{guid:String,name:String,logo:String,highlighted:Boolean}};const Mv={class:"d-flex p-2 project-sidebar-item"},Lv={style:{"margin-right":"20px"}},$v=["src"];function Wv(e,t,n,s,i,o){return F(),H("div",Mv,[k("div",Lv,[k("img",{src:n.logo,class:"logo"},null,8,$v)]),k("div",{class:Mn(["text",{highlighted:n.highlighted}])},re(n.name),3)])}const Fv=Se(Dv,[["render",Wv],["__scopeId","data-v-21360751"]]),Vv={props:{tag:String}};const Hv={class:"m-1 tag"};function Uv(e,t,n,s,i,o){return F(),H("div",Hv,re(n.tag),1)}const uu=Se(Vv,[["render",Uv],["__scopeId","data-v-9d0697f3"]]),jv={props:["prop"],components:{Tag:uu}},qv={class:"mb-4"},zv=["innerHTML"],Kv={key:0,class:"my-2"},Gv=k("b",null,"Tags:",-1),Yv={class:"d-flex flex-wrap"},Xv={key:1,class:"my-2"},Qv=k("b",null,"Related Regulations:",-1),Jv={class:"d-flex"},Zv=["href"];function ey(e,t,n,s,i,o){var a,l,c,u,d;const r=Re("Tag");return F(),H("div",qv,[k("h5",null,re((a=n.prop)==null?void 0:a.title),1),k("p",{innerHTML:n.prop.text},null,8,zv),(l=n.prop)!=null&&l.tags?(F(),H("div",Kv,[Gv,k("div",Yv,[(F(!0),H(me,null,Ie((c=n.prop)==null?void 0:c.tags,(f,g)=>(F(),on(r,{key:g,tag:f},null,8,["tag"]))),128))])])):$e("",!0),(u=n.prop)!=null&&u.regulations?(F(),H("div",Xv,[Qv,k("div",Jv,[(F(!0),H(me,null,Ie((d=n.prop)==null?void 0:d.regulations,(f,g)=>(F(),H("div",{key:g,class:"mx-2"},[Lt(" [ "),k("a",{href:f==null?void 0:f.href,target:"_blank"},re(f==null?void 0:f.text),9,Zv),Lt(" ] ")]))),128))])])):$e("",!0)])}const ty=Se(jv,[["render",ey]]),ny={props:["prop"]},sy={class:"mb-4"},iy={class:"mb-3"},oy={class:"table table-bordered"},ry={scope:"row",style:{width:"30%"}};function ay(e,t,n,s,i,o){var r,a;return F(),H("div",sy,[k("h5",iy,re((r=n.prop)==null?void 0:r.title),1),k("table",oy,[k("tbody",null,[(F(!0),H(me,null,Ie((a=n.prop)==null?void 0:a.values,(l,c)=>(F(),H("tr",{key:c},[k("th",ry,re(l==null?void 0:l.key),1),k("td",null,re(l==null?void 0:l.value),1)]))),128))])])])}const ly=Se(ny,[["render",ay]]),cy={props:["prop"]},uy={class:"mb-4"},dy={class:"mb-3"},py={class:"table table-bordered"};function fy(e,t,n,s,i,o){var r,a,l;return F(),H("div",uy,[k("h5",dy,re((r=n.prop)==null?void 0:r.title),1),k("table",py,[k("thead",null,[k("tr",null,[(F(!0),H(me,null,Ie((a=n.prop)==null?void 0:a.headers,(c,u)=>(F(),H("th",{key:u},re(c),1))),128))])]),k("tbody",null,[(F(!0),H(me,null,Ie((l=n.prop)==null?void 0:l.rows,(c,u)=>(F(),H("tr",{key:u},[(F(!0),H(me,null,Ie(c,(d,f)=>(F(),H("td",{key:f},re(d),1))),128))]))),128))])])])}const hy=Se(cy,[["render",fy]]),my={props:["title","props"],components:{PropDisplayCard:ty,PropDisplayKeyValue:ly,PropDisplayTable:hy}};const gy={class:"card"},_y={class:"card-header title"},by={class:"card-body"};function vy(e,t,n,s,i,o){return F(),H("div",gy,[k("div",_y,re(n.title),1),k("div",by,[(F(!0),H(me,null,Ie(n.props,(r,a)=>(F(),on(Ug(r==null?void 0:r.component),{key:a,prop:r},null,8,["prop"]))),128))])])}const yy=Se(my,[["render",vy],["__scopeId","data-v-fb106ec3"]]),wy={props:["project"],components:{PropDisplayGroup:yy},computed:{data(){var e;return((e=this.project)==null?void 0:e.overviewView)||[]}}},ky={class:"row"};function Ey(e,t,n,s,i,o){const r=Re("PropDisplayGroup");return F(),H("div",ky,[(F(!0),H(me,null,Ie(o.data,(a,l)=>(F(),H("div",{class:"col-md-6 p-2",key:l},[de(r,{title:a.title,props:a.props},null,8,["title","props"])]))),128))])}const Ty=Se(wy,[["render",Ey]]),Sy={props:{text:String,footer:String,desciptionTitle:String,desciptionText:String},data(){return{active:!1}}};const du=e=>(Fn("data-v-75b3c624"),e=e(),Vn(),e),Ay={class:"px-2 text d-flex flex-column",style:{"text-align":"center"}},xy={style:{color:"rgb(135, 136, 141)","font-size":"0.6rem"}},Cy={key:0},Py={key:1,class:"px-2 text d-flex flex-column",style:{"text-align":"left"}},Iy={class:"d-flex"},Oy=du(()=>k("i",{class:"bi bi-file-earmark",style:{"margin-right":"5px"}},null,-1)),Ny={class:"d-flex"},By=du(()=>k("i",{class:"bi bi-code-slash",style:{"margin-right":"5px"}},null,-1)),Ry={style:{color:"rgb(135, 136, 141)","font-size":"0.6rem"}};function Dy(e,t,n,s,i,o){return F(),H("div",{class:"w-100 status-card my-2 py-3",onClick:t[0]||(t[0]=r=>i.active=!i.active)},[k("div",Ay,[k("div",null,re(n.text),1),k("div",xy,re(n.footer),1)]),i.active?(F(),H("hr",Cy)):$e("",!0),i.active?(F(),H("div",Py,[k("div",Iy,[Oy,k("div",null,re(n.desciptionTitle),1)]),k("div",Ny,[By,k("div",Ry,re(n.desciptionText),1)])])):$e("",!0)])}const My=Se(Sy,[["render",Dy],["__scopeId","data-v-75b3c624"]]),Ly={props:["title","statuses","backgroundColor"],components:{StatusCard:My},data(){return{active:!1}}};const $y={key:0,class:"bi bi-arrow-bar-down",style:{"margin-left":"10px"}},Wy={key:1,class:"bi bi-arrow-bar-up",style:{"margin-left":"10px"}},Fy={key:0};function Vy(e,t,n,s,i,o){const r=Re("StatusCard");return F(),H("div",{class:"status-card-group p-2 w-100 mb-2",style:pi({backgroundColor:n.backgroundColor})},[k("div",{class:"w-100",style:{"text-align":"right",cursor:"pointer"},onClick:t[0]||(t[0]=a=>i.active=!i.active)},[Lt(re(n.title)+" ",1),i.active?$e("",!0):(F(),H("i",$y)),i.active?(F(),H("i",Wy)):$e("",!0)]),i.active?(F(),H("div",Fy,[(F(!0),H(me,null,Ie(n.statuses,(a,l)=>(F(),on(r,{key:l,text:a.text,footer:a.footer,"desciption-title":a.desciptionTitle,"desciption-text":a.desciptionText},null,8,["text","footer","desciption-title","desciption-text"]))),128))])):$e("",!0)],4)}const Hy=Se(Ly,[["render",Vy],["__scopeId","data-v-4e6fa15a"]]),Uy={props:{label:String,text:String,footer:String}};const jy={class:"card"},qy={class:"label"},zy={class:"text"},Ky={style:{position:"absolute",top:"50%",transform:"translate(0, -40%)"}},Gy={class:"label",style:{position:"absolute",bottom:"0",left:"0",right:"0",padding:"5px","text-align":"center"}};function Yy(e,t,n,s,i,o){return F(),H("div",jy,[k("div",qy,re(n.label),1),k("div",zy,[k("div",Ky,re(n.text),1)]),k("div",Gy,re(n.footer),1)])}const Xy=Se(Uy,[["render",Yy],["__scopeId","data-v-52bed330"]]),Qy={props:["code"],created(){this.$nextTick(()=>{Jr.highlightAll()})},watch:{code(){this.$nextTick(()=>{Jr.highlightAll()})}}};const Jy={class:"code-block"},Zy={class:"line-numbers language-solidity"};function ew(e,t,n,s,i,o){return F(),H("pre",Jy,[Lt("    "),k("code",Zy,`
    `+re(n.code)+`
  `,1),Lt(`
  `)])}const tw=Se(Qy,[["render",ew],["__scopeId","data-v-0f22bba8"]]),nw={props:["project"],components:{StatusCardGroup:Hy,TextCard:Xy,CodeView:tw},data(){return{contract:""}},created(){this.contract=this.contracts[0]||""},computed:{whitepaper(){var e,t;return((t=(e=this.project)==null?void 0:e.assessmentView)==null?void 0:t.whitepaper)||[]},regulations(){var e,t;return((t=(e=this.project)==null?void 0:e.assessmentView)==null?void 0:t.regulations)||[]},industryStandard(){var e,t;return((t=(e=this.project)==null?void 0:e.assessmentView)==null?void 0:t.industryStandard)||[]},contracts(){var t,n;let e=((n=(t=this.project)==null?void 0:t.assessmentView)==null?void 0:n.contracts)||{};return Object.keys(e)},code(){var t,n;return(((n=(t=this.project)==null?void 0:t.assessmentView)==null?void 0:n.contracts)||{})[this.contract]||""},codeQuality(){var e,t;return((t=(e=this.project)==null?void 0:e.assessmentView)==null?void 0:t.codeQuality)||[]},securityAnalysis(){var e,t;return((t=(e=this.project)==null?void 0:e.assessmentView)==null?void 0:t.securityAnalysis)||[]},codeSimilarity(){var e,t;return((t=(e=this.project)==null?void 0:e.assessmentView)==null?void 0:t.codeSimilarity)||[]},explanation(){var e,t;return((t=(e=this.project)==null?void 0:e.assessmentView)==null?void 0:t.explanation)||""}},methods:{onContractChange(e){console.log("onContractChange",e)}}},sw={class:"container-fluid row mb-2",style:{height:"720px"}},iw={class:"h-100 col-md-3",style:{"overflow-y":"auto"}},ow={class:"col-md-6"},rw={class:"h-100"},aw={class:"h-100 col-md-3",style:{"overflow-y":"auto"}},lw={key:0,class:"my-2"},cw=k("h5",null,"Code Quality",-1),uw={class:"row"},dw={key:1,class:"my-2"},pw=k("h5",null,"Security Analysis",-1),fw={class:"row"},hw={key:2,class:"my-2"},mw=k("h5",null,"Code Similarity",-1),gw={class:"row"},_w={key:3,class:"my-2"},bw=k("h5",null,"Explanation",-1),vw={style:{"font-size":"0.85rem"}};function yw(e,t,n,s,i,o){const r=Re("StatusCardGroup"),a=Re("CodeView"),l=Re("TextCard");return F(),H("div",sw,[k("div",iw,[de(r,{title:"Whitepaper (10/50 passed)",statuses:o.whitepaper,backgroundColor:"rgb(249,227,227)"},null,8,["statuses"]),de(r,{title:"Regulations (5/5 passed)",statuses:o.regulations,backgroundColor:"rgba(221,234,252)"},null,8,["statuses"]),de(r,{title:"Industry Standard",statuses:o.industryStandard,backgroundColor:"rgba(227,251,233)"},null,8,["statuses"])]),k("div",ow,[k("div",rw,[k("form",null,[xc(k("select",{class:"form-select",onChange:t[0]||(t[0]=c=>o.onContractChange(i.contract)),"onUpdate:modelValue":t[1]||(t[1]=c=>i.contract=c)},[(F(!0),H(me,null,Ie(o.contracts,(c,u)=>(F(),H("option",{key:u},re(c),1))),128))],544),[[H_,i.contract]])]),de(a,{class:"h-100",style:{"overflow-y":"auto"},code:o.code},null,8,["code"])])]),k("div",aw,[o.codeQuality.length>0?(F(),H("div",lw,[cw,k("div",uw,[(F(!0),H(me,null,Ie(o.codeQuality,(c,u)=>(F(),H("div",{class:"col-md-6 p-1",key:u},[de(l,{label:c.label,text:c.text,footer:c.footer},null,8,["label","text","footer"])]))),128))])])):$e("",!0),o.securityAnalysis.length>0?(F(),H("div",dw,[pw,k("div",fw,[(F(!0),H(me,null,Ie(o.securityAnalysis,(c,u)=>(F(),H("div",{class:"col-md-6 p-1",key:u},[de(l,{label:c.label,text:c.text,footer:c.footer},null,8,["label","text","footer"])]))),128))])])):$e("",!0),o.explanation?(F(),H("div",hw,[mw,k("div",gw,[(F(!0),H(me,null,Ie(o.codeSimilarity,(c,u)=>(F(),H("div",{class:"col-md-12 p-1",key:u},[de(l,{label:c.label,text:c.text,footer:c.footer},null,8,["label","text","footer"])]))),128))])])):$e("",!0),o.explanation?(F(),H("div",_w,[bw,k("div",vw,re(o.explanation),1)])):$e("",!0)])])}const ww=Se(nw,[["render",yw]]),kw={props:["title","text","type"],methods:{shortText(e){return e.length>70?e.substring(0,70)+"...":e}}};const Ew={class:"d-flex"},Tw={style:{"margin-right":"15px","font-size":"1.5rem"}},Sw={key:0,class:"bi bi-exclamation-triangle"},Aw={key:1,class:"bi bi-info-circle"},xw={key:2,class:"bi bi-check-circle"},Cw={class:"align-self-center"},Pw={style:{"font-size":"0.9rem"}},Iw={style:{"font-size":"0.8rem","margin-top":"6px"}},Ow=k("div",{style:{"font-size":"0.8rem","margin-top":"10px"}},[k("u",null,"Details")],-1);function Nw(e,t,n,s,i,o){return F(),H("div",{class:Mn(["action-status-card p-3 my-2",{danger:n.type=="danger",warn:n.type=="warn",primary:n.type=="primary"}]),style:{cursor:"pointer"}},[k("div",Ew,[k("div",Tw,[n.type=="danger"?(F(),H("i",Sw)):$e("",!0),n.type=="warn"?(F(),H("i",Aw)):$e("",!0),n.type=="primary"?(F(),H("i",xw)):$e("",!0)]),k("div",Cw,[k("div",Pw,[k("b",null,re(n.title),1)]),k("div",Iw,re(o.shortText(n.text)),1),Ow])])],2)}const Bw=Se(kw,[["render",Nw]]),Rw={props:["title","description","actions","tasks","visible"]};const Dw=e=>(Fn("data-v-bd55a318"),e=e(),Vn(),e),Mw={class:"modal-dialog modal-dialog-centered modal-dialog-scrollable"},Lw={class:"modal-content"},$w={class:"modal-body"},Ww={class:"p-4"},Fw={style:{"text-align":"center"}},Vw=Dw(()=>k("div",{class:"my-2"},[k("i",{class:"bi bi-exclamation-triangle",style:{"font-size":"3rem",color:"rgba(255, 30, 30, 1)"}})],-1)),Hw={class:"modal-title mb-2",style:{"font-size":"1rem"}},Uw={style:{"font-size":"0.8rem","max-width":"300px",color:"rgb(135, 136, 141)"},class:"mx-auto"},jw=Uc('<div class="mx-auto mt-4" style="max-width:400px;" data-v-bd55a318><div class="form-check my-2" data-v-bd55a318><input class="form-check-input" type="checkbox" value="" data-v-bd55a318><label class="form-check-label" data-v-bd55a318><span style="font-size:0.9rem;" data-v-bd55a318>Email to VASP applicant</span> <br data-v-bd55a318><span style="font-size:0.8rem;color:rgb(135, 136, 141);" data-v-bd55a318>Send an email to the applicants</span></label></div><div class="form-check my-2" data-v-bd55a318><input class="form-check-input" type="checkbox" value="" data-v-bd55a318><label class="form-check-label" data-v-bd55a318><span style="font-size:0.9rem;" data-v-bd55a318>Add to watchlist</span> <br data-v-bd55a318><span style="font-size:0.8rem;color:rgb(135, 136, 141);" data-v-bd55a318>Get notified when there is updates</span></label></div><div class="form-check my-2" data-v-bd55a318><input class="form-check-input" type="checkbox" value="" data-v-bd55a318><label class="form-check-label" data-v-bd55a318><span style="font-size:0.9rem;" data-v-bd55a318>Feedback to internal regulator consultants</span><br data-v-bd55a318><span style="font-size:0.8rem;color:rgb(135, 136, 141);" data-v-bd55a318>Allow the internal regulator consultants to review</span></label></div></div>',1),qw={style:{"text-align":"center"},class:"mt-5"};function zw(e,t,n,s,i,o){return F(),H("div",{class:Mn(["modal fade",{show:n.visible,hidden:!n.visible}]),tabindex:"-1",style:{display:"block","background-color":"rgba(0, 0, 0, 0.5)"}},[k("div",Mw,[k("div",Lw,[k("div",$w,[k("div",Ww,[k("div",Fw,[Vw,k("h5",Hw,re(n.title),1),k("p",Uw,re(n.description),1)]),jw,k("div",qw,[k("button",{type:"button",class:"btn btn-primary",onClick:t[0]||(t[0]=r=>e.$emit("close"))},"Confirm"),k("button",{type:"button",class:"btn btn-secondary",onClick:t[1]||(t[1]=r=>e.$emit("close")),style:{"margin-left":"10px"}}," Cancel ")])])])])])],2)}const Kw=Se(Rw,[["render",zw],["__scopeId","data-v-bd55a318"]]),Gw={props:["project"],components:{ActionStatusCard:Bw,DetailsModal:Kw},data(){return{modalShown:!1,modalTitle:"",modalDescription:""}},methods:{showModal(e,t){this.modalTitle=e,this.modalDescription=t,this.modalShown=!0}},computed:{actions(){var e,t;return((t=(e=this.project)==null?void 0:e.actionsView)==null?void 0:t.actions)||[]},tasks(){var e,t;return((t=(e=this.project)==null?void 0:e.actionsView)==null?void 0:t.tasks)||[]}}},Yw=k("h4",null,"Action",-1),Xw={class:"row my-3"},Qw=k("h4",null,"Task",-1),Jw={class:"row my-3"};function Zw(e,t,n,s,i,o){const r=Re("DetailsModal"),a=Re("ActionStatusCard");return F(),H("div",null,[de(r,{visible:i.modalShown,onClose:t[0]||(t[0]=l=>i.modalShown=!1),title:i.modalTitle,description:i.modalDescription},null,8,["visible","title","description"]),Yw,k("div",Xw,[(F(!0),H(me,null,Ie(o.actions,(l,c)=>(F(),H("div",{class:"col-md-4",key:c},[de(a,{title:l.title,text:l.text,type:l.type,onClick:u=>o.showModal(l.title,l.text)},null,8,["title","text","type","onClick"])]))),128))]),Qw,k("div",Jw,[(F(!0),H(me,null,Ie(o.tasks,(l,c)=>(F(),H("div",{class:"col-md-4",key:c},[de(a,{title:l.title,text:l.text,type:l.type,onClick:u=>o.showModal(l.title,l.text)},null,8,["title","text","type","onClick"])]))),128))])])}const e0=Se(Gw,[["render",Zw]]),t0={props:{organizationGuid:String,projectGuid:String},components:{Tag:uu,ProjectOverviewView:Ty,ProjectAssessmentView:ww,ProjectActionView:e0},data(){return{author:"Yiwei Gong",date:new Date}},computed:{...lr(dr),organization(){return this.organizationsStore.findOrganization(this.organizationGuid)},project(){return this.organizationsStore.findProject(this.organizationGuid,this.projectGuid)}},methods:{formatDate(e){return e?(typeof e=="string"&&(e=new Date(e)),e.toLocaleDateString()):""}}};const n0=e=>(Fn("data-v-ec2f7fdd"),e=e(),Vn(),e),s0={class:"container mt-5"},i0={class:"d-flex"},o0={style:{"margin-right":"18px"}},r0=["src"],a0={class:"align-self-center"},l0={class:"d-flex"},c0={style:{"margin-right":"18px"}},u0={class:"rating align-self-center"},d0=["href"],p0={style:{color:"rgba(39, 50, 131)"}},f0={style:{color:"rgba(39, 50, 131)"}},h0={class:"description"},m0={class:"mt-4 d-flex"},g0={class:"mt-4"},_0=n0(()=>k("ul",{class:"nav nav-tabs",id:"myTab",role:"tablist"},[k("li",{class:"nav-item"},[k("a",{class:"nav-link active",id:"overview-tab","data-bs-toggle":"tab",href:"#overview",role:"tab","aria-controls":"overview","aria-selected":"true"},"Overview")]),k("li",{class:"nav-item"},[k("a",{class:"nav-link",id:"assessment-tab","data-bs-toggle":"tab",href:"#assessment",role:"tab","aria-controls":"assessment","aria-selected":"true"},"Assessment")]),k("li",{class:"nav-item"},[k("a",{class:"nav-link",id:"actions-tab","data-bs-toggle":"tab",href:"#actions",role:"tab","aria-controls":"actions","aria-selected":"false"},"Actions")])],-1)),b0={class:"tab-content",id:"myTabContent"},v0={class:"tab-pane fade show active",id:"overview",role:"tabpanel","aria-labelledby":"overview-tab"},y0={class:"mt-3"},w0={class:"tab-pane fade show",id:"assessment",role:"tabpanel","aria-labelledby":"assessment-tab"},k0={class:"mt-3"},E0={class:"tab-pane fade show",id:"actions",role:"tabpanel","aria-labelledby":"actions-tab"},T0={class:"mt-3"};function S0(e,t,n,s,i,o){var u,d,f,g,P,w,A,C,m;const r=Re("Tag"),a=Re("ProjectOverviewView"),l=Re("ProjectAssessmentView"),c=Re("ProjectActionView");return F(),H("div",s0,[k("div",i0,[k("div",o0,[k("img",{src:(u=o.project)==null?void 0:u.logo,class:"logo"},null,8,r0)]),k("div",a0,[k("div",l0,[k("h1",c0,re((d=o.project)==null?void 0:d.name),1),k("div",u0,re((f=o.project)==null?void 0:f.rating),1)]),k("div",null,[k("a",{href:(g=o.project)==null?void 0:g.url},re((P=o.project)==null?void 0:P.url),9,d0)]),k("div",null,[Lt(" Created by "),k("span",p0,[k("u",null,re((w=o.project)==null?void 0:w.author),1)]),Lt(" on "),k("span",f0,[k("u",null,re(o.formatDate((A=o.project)==null?void 0:A.dueAt)),1)])]),k("div",h0,re((C=o.project)==null?void 0:C.description),1)])]),k("div",m0,[(F(!0),H(me,null,Ie((m=o.project)==null?void 0:m.tags,_=>(F(),on(r,{key:_,tag:_},null,8,["tag"]))),128))]),k("div",g0,[_0,k("div",b0,[k("div",v0,[k("div",y0,[de(a,{project:o.project},null,8,["project"])])]),k("div",w0,[k("div",k0,[de(l,{project:o.project},null,8,["project"])])]),k("div",E0,[k("div",T0,[de(c,{project:o.project},null,8,["project"])])])])])])}const A0=Se(t0,[["render",S0],["__scopeId","data-v-ec2f7fdd"]]),x0={components:{ProjectSidebarItem:Fv,ProjectDetailsView:A0},data(){return{searchValue:"",selectedProjectGuid:""}},computed:{...lr(dr),organizationGuid(){return this.$route.params.organizationGuid},projects(){const e=this.organizationsStore.findOrganization(this.organizationGuid);if(!e)return[];if(!this.searchValue)return e.projects;const t=this.searchValue.toLowerCase();return e.projects.filter(n=>n.name.toLowerCase().includes(t))}}},C0="/webapp/logo-full.png";const pu=e=>(Fn("data-v-1c489500"),e=e(),Vn(),e),P0={class:"d-flex org"},I0={class:"h-100 org-sidebar"},O0={class:"container"},N0=pu(()=>k("div",{class:"mt-3",style:{color:"rgba(39, 50, 131)","font-size":"1.2rem"}},"Projects",-1)),B0={class:"form-inline my-2"},R0={class:"h-100 w-100 org-main"},D0={key:0,class:"container-fluid"},M0={key:1,class:"h-100 w-100"},L0=pu(()=>k("div",{style:{"text-align":"center","margin-top":"15%"}},[k("div",{style:{"font-size":"4rem",color:"red"}},[k("img",{src:C0,style:{width:"256px",filter:"grayscale(100%)",opacity:"0.3"}})]),k("div",{style:{width:"100%","max-width":"320px",color:"rgba(0, 0, 0, 0.5)"},class:"mx-auto"}," AI-Powered Regulatory Assessment Solution for Digital Asset Innovation ")],-1)),$0=[L0];function W0(e,t,n,s,i,o){const r=Re("ProjectSidebarItem"),a=Re("ProjectDetailsView");return F(),H("div",P0,[k("div",I0,[k("div",O0,[N0,k("form",B0,[xc(k("input",{class:"form-control",type:"search",placeholder:"Search...","aria-label":"Search","onUpdate:modelValue":t[0]||(t[0]=l=>i.searchValue=l)},null,512),[[V_,i.searchValue]])]),(F(!0),H(me,null,Ie(o.projects,l=>(F(),on(r,{key:l.guid,guid:l.guid,name:l.name,logo:l.logo,highlighted:l.guid==i.selectedProjectGuid,onClick:c=>i.selectedProjectGuid=l.guid},null,8,["guid","name","logo","highlighted","onClick"]))),128))])]),k("div",R0,[i.selectedProjectGuid?(F(),H("div",D0,[de(a,{"organization-guid":o.organizationGuid,"project-guid":i.selectedProjectGuid},null,8,["organization-guid","project-guid"])])):(F(),H("div",M0,$0))])])}const F0=Se(x0,[["render",W0],["__scopeId","data-v-1c489500"]]),V0=nv({history:vb("/webapp/"),routes:[{path:"/",name:"organizations",component:Rv},{path:"/organizations/:organizationGuid",name:"organization",component:F0}]}),pr=q_(uv);pr.use(G_());pr.use(V0);pr.mount("#app");
