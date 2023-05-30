(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();var Me="top",qe="bottom",ze="right",Le="left",ni="auto",On=[Me,qe,ze,Le],tn="start",vn="end",Xa="clippingParents",So="viewport",dn="popper",Qa="reference",to=On.reduce(function(e,t){return e.concat([t+"-"+tn,t+"-"+vn])},[]),Ao=[].concat(On,[ni]).reduce(function(e,t){return e.concat([t,t+"-"+tn,t+"-"+vn])},[]),Ja="beforeRead",Za="read",el="afterRead",tl="beforeMain",nl="main",sl="afterMain",il="beforeWrite",ol="write",rl="afterWrite",al=[Ja,Za,el,tl,nl,sl,il,ol,rl];function ft(e){return e?(e.nodeName||"").toLowerCase():null}function Ke(e){if(e==null)return window;if(e.toString()!=="[object Window]"){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function nn(e){var t=Ke(e).Element;return e instanceof t||e instanceof Element}function Ge(e){var t=Ke(e).HTMLElement;return e instanceof t||e instanceof HTMLElement}function xo(e){if(typeof ShadowRoot>"u")return!1;var t=Ke(e).ShadowRoot;return e instanceof t||e instanceof ShadowRoot}function hu(e){var t=e.state;Object.keys(t.elements).forEach(function(n){var s=t.styles[n]||{},i=t.attributes[n]||{},o=t.elements[n];!Ge(o)||!ft(o)||(Object.assign(o.style,s),Object.keys(i).forEach(function(r){var a=i[r];a===!1?o.removeAttribute(r):o.setAttribute(r,a===!0?"":a)}))})}function mu(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach(function(s){var i=t.elements[s],o=t.attributes[s]||{},r=Object.keys(t.styles.hasOwnProperty(s)?t.styles[s]:n[s]),a=r.reduce(function(l,c){return l[c]="",l},{});!Ge(i)||!ft(i)||(Object.assign(i.style,a),Object.keys(o).forEach(function(l){i.removeAttribute(l)}))})}}const Co={name:"applyStyles",enabled:!0,phase:"write",fn:hu,effect:mu,requires:["computeStyles"]};function ct(e){return e.split("-")[0]}var Qt=Math.max,Hs=Math.min,yn=Math.round;function no(){var e=navigator.userAgentData;return e!=null&&e.brands&&Array.isArray(e.brands)?e.brands.map(function(t){return t.brand+"/"+t.version}).join(" "):navigator.userAgent}function ll(){return!/^((?!chrome|android).)*safari/i.test(no())}function wn(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!1);var s=e.getBoundingClientRect(),i=1,o=1;t&&Ge(e)&&(i=e.offsetWidth>0&&yn(s.width)/e.offsetWidth||1,o=e.offsetHeight>0&&yn(s.height)/e.offsetHeight||1);var r=nn(e)?Ke(e):window,a=r.visualViewport,l=!ll()&&n,c=(s.left+(l&&a?a.offsetLeft:0))/i,u=(s.top+(l&&a?a.offsetTop:0))/o,d=s.width/i,p=s.height/o;return{width:d,height:p,top:u,right:c+d,bottom:u+p,left:c,x:c,y:u}}function Po(e){var t=wn(e),n=e.offsetWidth,s=e.offsetHeight;return Math.abs(t.width-n)<=1&&(n=t.width),Math.abs(t.height-s)<=1&&(s=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:s}}function cl(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&xo(n)){var s=t;do{if(s&&e.isSameNode(s))return!0;s=s.parentNode||s.host}while(s)}return!1}function yt(e){return Ke(e).getComputedStyle(e)}function gu(e){return["table","td","th"].indexOf(ft(e))>=0}function Wt(e){return((nn(e)?e.ownerDocument:e.document)||window.document).documentElement}function si(e){return ft(e)==="html"?e:e.assignedSlot||e.parentNode||(xo(e)?e.host:null)||Wt(e)}function _r(e){return!Ge(e)||yt(e).position==="fixed"?null:e.offsetParent}function _u(e){var t=/firefox/i.test(no()),n=/Trident/i.test(no());if(n&&Ge(e)){var s=yt(e);if(s.position==="fixed")return null}var i=si(e);for(xo(i)&&(i=i.host);Ge(i)&&["html","body"].indexOf(ft(i))<0;){var o=yt(i);if(o.transform!=="none"||o.perspective!=="none"||o.contain==="paint"||["transform","perspective"].indexOf(o.willChange)!==-1||t&&o.willChange==="filter"||t&&o.filter&&o.filter!=="none")return i;i=i.parentNode}return null}function fs(e){for(var t=Ke(e),n=_r(e);n&&gu(n)&&yt(n).position==="static";)n=_r(n);return n&&(ft(n)==="html"||ft(n)==="body"&&yt(n).position==="static")?t:n||_u(e)||t}function Io(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function Kn(e,t,n){return Qt(e,Hs(t,n))}function bu(e,t,n){var s=Kn(e,t,n);return s>n?n:s}function ul(){return{top:0,right:0,bottom:0,left:0}}function dl(e){return Object.assign({},ul(),e)}function fl(e,t){return t.reduce(function(n,s){return n[s]=e,n},{})}var vu=function(t,n){return t=typeof t=="function"?t(Object.assign({},n.rects,{placement:n.placement})):t,dl(typeof t!="number"?t:fl(t,On))};function yu(e){var t,n=e.state,s=e.name,i=e.options,o=n.elements.arrow,r=n.modifiersData.popperOffsets,a=ct(n.placement),l=Io(a),c=[Le,ze].indexOf(a)>=0,u=c?"height":"width";if(!(!o||!r)){var d=vu(i.padding,n),p=Po(o),g=l==="y"?Me:Le,P=l==="y"?qe:ze,k=n.rects.reference[u]+n.rects.reference[l]-r[l]-n.rects.popper[u],A=r[l]-n.rects.reference[l],C=fs(o),m=C?l==="y"?C.clientHeight||0:C.clientWidth||0:0,_=k/2-A/2,b=d[g],y=m-p[u]-d[P],S=m/2-p[u]/2+_,R=Kn(b,S,y),L=l;n.modifiersData[s]=(t={},t[L]=R,t.centerOffset=R-S,t)}}function wu(e){var t=e.state,n=e.options,s=n.element,i=s===void 0?"[data-popper-arrow]":s;i!=null&&(typeof i=="string"&&(i=t.elements.popper.querySelector(i),!i)||cl(t.elements.popper,i)&&(t.elements.arrow=i))}const pl={name:"arrow",enabled:!0,phase:"main",fn:yu,effect:wu,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function kn(e){return e.split("-")[1]}var ku={top:"auto",right:"auto",bottom:"auto",left:"auto"};function Eu(e,t){var n=e.x,s=e.y,i=t.devicePixelRatio||1;return{x:yn(n*i)/i||0,y:yn(s*i)/i||0}}function br(e){var t,n=e.popper,s=e.popperRect,i=e.placement,o=e.variation,r=e.offsets,a=e.position,l=e.gpuAcceleration,c=e.adaptive,u=e.roundOffsets,d=e.isFixed,p=r.x,g=p===void 0?0:p,P=r.y,k=P===void 0?0:P,A=typeof u=="function"?u({x:g,y:k}):{x:g,y:k};g=A.x,k=A.y;var C=r.hasOwnProperty("x"),m=r.hasOwnProperty("y"),_=Le,b=Me,y=window;if(c){var S=fs(n),R="clientHeight",L="clientWidth";if(S===Ke(n)&&(S=Wt(n),yt(S).position!=="static"&&a==="absolute"&&(R="scrollHeight",L="scrollWidth")),S=S,i===Me||(i===Le||i===ze)&&o===vn){b=qe;var I=d&&S===y&&y.visualViewport?y.visualViewport.height:S[R];k-=I-s.height,k*=l?1:-1}if(i===Le||(i===Me||i===qe)&&o===vn){_=ze;var U=d&&S===y&&y.visualViewport?y.visualViewport.width:S[L];g-=U-s.width,g*=l?1:-1}}var X=Object.assign({position:a},c&&ku),ie=u===!0?Eu({x:g,y:k},Ke(n)):{x:g,y:k};if(g=ie.x,k=ie.y,l){var ue;return Object.assign({},X,(ue={},ue[b]=m?"0":"",ue[_]=C?"0":"",ue.transform=(y.devicePixelRatio||1)<=1?"translate("+g+"px, "+k+"px)":"translate3d("+g+"px, "+k+"px, 0)",ue))}return Object.assign({},X,(t={},t[b]=m?k+"px":"",t[_]=C?g+"px":"",t.transform="",t))}function Tu(e){var t=e.state,n=e.options,s=n.gpuAcceleration,i=s===void 0?!0:s,o=n.adaptive,r=o===void 0?!0:o,a=n.roundOffsets,l=a===void 0?!0:a,c={placement:ct(t.placement),variation:kn(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:i,isFixed:t.options.strategy==="fixed"};t.modifiersData.popperOffsets!=null&&(t.styles.popper=Object.assign({},t.styles.popper,br(Object.assign({},c,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:r,roundOffsets:l})))),t.modifiersData.arrow!=null&&(t.styles.arrow=Object.assign({},t.styles.arrow,br(Object.assign({},c,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:l})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})}const Oo={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:Tu,data:{}};var ys={passive:!0};function Su(e){var t=e.state,n=e.instance,s=e.options,i=s.scroll,o=i===void 0?!0:i,r=s.resize,a=r===void 0?!0:r,l=Ke(t.elements.popper),c=[].concat(t.scrollParents.reference,t.scrollParents.popper);return o&&c.forEach(function(u){u.addEventListener("scroll",n.update,ys)}),a&&l.addEventListener("resize",n.update,ys),function(){o&&c.forEach(function(u){u.removeEventListener("scroll",n.update,ys)}),a&&l.removeEventListener("resize",n.update,ys)}}const No={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:Su,data:{}};var Au={left:"right",right:"left",bottom:"top",top:"bottom"};function Bs(e){return e.replace(/left|right|bottom|top/g,function(t){return Au[t]})}var xu={start:"end",end:"start"};function vr(e){return e.replace(/start|end/g,function(t){return xu[t]})}function Bo(e){var t=Ke(e),n=t.pageXOffset,s=t.pageYOffset;return{scrollLeft:n,scrollTop:s}}function Ro(e){return wn(Wt(e)).left+Bo(e).scrollLeft}function Cu(e,t){var n=Ke(e),s=Wt(e),i=n.visualViewport,o=s.clientWidth,r=s.clientHeight,a=0,l=0;if(i){o=i.width,r=i.height;var c=ll();(c||!c&&t==="fixed")&&(a=i.offsetLeft,l=i.offsetTop)}return{width:o,height:r,x:a+Ro(e),y:l}}function Pu(e){var t,n=Wt(e),s=Bo(e),i=(t=e.ownerDocument)==null?void 0:t.body,o=Qt(n.scrollWidth,n.clientWidth,i?i.scrollWidth:0,i?i.clientWidth:0),r=Qt(n.scrollHeight,n.clientHeight,i?i.scrollHeight:0,i?i.clientHeight:0),a=-s.scrollLeft+Ro(e),l=-s.scrollTop;return yt(i||n).direction==="rtl"&&(a+=Qt(n.clientWidth,i?i.clientWidth:0)-o),{width:o,height:r,x:a,y:l}}function Do(e){var t=yt(e),n=t.overflow,s=t.overflowX,i=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+i+s)}function hl(e){return["html","body","#document"].indexOf(ft(e))>=0?e.ownerDocument.body:Ge(e)&&Do(e)?e:hl(si(e))}function Gn(e,t){var n;t===void 0&&(t=[]);var s=hl(e),i=s===((n=e.ownerDocument)==null?void 0:n.body),o=Ke(s),r=i?[o].concat(o.visualViewport||[],Do(s)?s:[]):s,a=t.concat(r);return i?a:a.concat(Gn(si(r)))}function so(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function Iu(e,t){var n=wn(e,!1,t==="fixed");return n.top=n.top+e.clientTop,n.left=n.left+e.clientLeft,n.bottom=n.top+e.clientHeight,n.right=n.left+e.clientWidth,n.width=e.clientWidth,n.height=e.clientHeight,n.x=n.left,n.y=n.top,n}function yr(e,t,n){return t===So?so(Cu(e,n)):nn(t)?Iu(t,n):so(Pu(Wt(e)))}function Ou(e){var t=Gn(si(e)),n=["absolute","fixed"].indexOf(yt(e).position)>=0,s=n&&Ge(e)?fs(e):e;return nn(s)?t.filter(function(i){return nn(i)&&cl(i,s)&&ft(i)!=="body"}):[]}function Nu(e,t,n,s){var i=t==="clippingParents"?Ou(e):[].concat(t),o=[].concat(i,[n]),r=o[0],a=o.reduce(function(l,c){var u=yr(e,c,s);return l.top=Qt(u.top,l.top),l.right=Hs(u.right,l.right),l.bottom=Hs(u.bottom,l.bottom),l.left=Qt(u.left,l.left),l},yr(e,r,s));return a.width=a.right-a.left,a.height=a.bottom-a.top,a.x=a.left,a.y=a.top,a}function ml(e){var t=e.reference,n=e.element,s=e.placement,i=s?ct(s):null,o=s?kn(s):null,r=t.x+t.width/2-n.width/2,a=t.y+t.height/2-n.height/2,l;switch(i){case Me:l={x:r,y:t.y-n.height};break;case qe:l={x:r,y:t.y+t.height};break;case ze:l={x:t.x+t.width,y:a};break;case Le:l={x:t.x-n.width,y:a};break;default:l={x:t.x,y:t.y}}var c=i?Io(i):null;if(c!=null){var u=c==="y"?"height":"width";switch(o){case tn:l[c]=l[c]-(t[u]/2-n[u]/2);break;case vn:l[c]=l[c]+(t[u]/2-n[u]/2);break}}return l}function En(e,t){t===void 0&&(t={});var n=t,s=n.placement,i=s===void 0?e.placement:s,o=n.strategy,r=o===void 0?e.strategy:o,a=n.boundary,l=a===void 0?Xa:a,c=n.rootBoundary,u=c===void 0?So:c,d=n.elementContext,p=d===void 0?dn:d,g=n.altBoundary,P=g===void 0?!1:g,k=n.padding,A=k===void 0?0:k,C=dl(typeof A!="number"?A:fl(A,On)),m=p===dn?Qa:dn,_=e.rects.popper,b=e.elements[P?m:p],y=Nu(nn(b)?b:b.contextElement||Wt(e.elements.popper),l,u,r),S=wn(e.elements.reference),R=ml({reference:S,element:_,strategy:"absolute",placement:i}),L=so(Object.assign({},_,R)),I=p===dn?L:S,U={top:y.top-I.top+C.top,bottom:I.bottom-y.bottom+C.bottom,left:y.left-I.left+C.left,right:I.right-y.right+C.right},X=e.modifiersData.offset;if(p===dn&&X){var ie=X[i];Object.keys(U).forEach(function(ue){var Ce=[ze,qe].indexOf(ue)>=0?1:-1,ve=[Me,qe].indexOf(ue)>=0?"y":"x";U[ue]+=ie[ve]*Ce})}return U}function Bu(e,t){t===void 0&&(t={});var n=t,s=n.placement,i=n.boundary,o=n.rootBoundary,r=n.padding,a=n.flipVariations,l=n.allowedAutoPlacements,c=l===void 0?Ao:l,u=kn(s),d=u?a?to:to.filter(function(P){return kn(P)===u}):On,p=d.filter(function(P){return c.indexOf(P)>=0});p.length===0&&(p=d);var g=p.reduce(function(P,k){return P[k]=En(e,{placement:k,boundary:i,rootBoundary:o,padding:r})[ct(k)],P},{});return Object.keys(g).sort(function(P,k){return g[P]-g[k]})}function Ru(e){if(ct(e)===ni)return[];var t=Bs(e);return[vr(e),t,vr(t)]}function Du(e){var t=e.state,n=e.options,s=e.name;if(!t.modifiersData[s]._skip){for(var i=n.mainAxis,o=i===void 0?!0:i,r=n.altAxis,a=r===void 0?!0:r,l=n.fallbackPlacements,c=n.padding,u=n.boundary,d=n.rootBoundary,p=n.altBoundary,g=n.flipVariations,P=g===void 0?!0:g,k=n.allowedAutoPlacements,A=t.options.placement,C=ct(A),m=C===A,_=l||(m||!P?[Bs(A)]:Ru(A)),b=[A].concat(_).reduce(function(ye,xe){return ye.concat(ct(xe)===ni?Bu(t,{placement:xe,boundary:u,rootBoundary:d,padding:c,flipVariations:P,allowedAutoPlacements:k}):xe)},[]),y=t.rects.reference,S=t.rects.popper,R=new Map,L=!0,I=b[0],U=0;U<b.length;U++){var X=b[U],ie=ct(X),ue=kn(X)===tn,Ce=[Me,qe].indexOf(ie)>=0,ve=Ce?"width":"height",Q=En(t,{placement:X,boundary:u,rootBoundary:d,altBoundary:p,padding:c}),Z=Ce?ue?ze:Le:ue?qe:Me;y[ve]>S[ve]&&(Z=Bs(Z));var G=Bs(Z),me=[];if(o&&me.push(Q[ie]<=0),a&&me.push(Q[Z]<=0,Q[G]<=0),me.every(function(ye){return ye})){I=X,L=!1;break}R.set(X,me)}if(L)for(var ke=P?3:1,Ae=function(xe){var ge=b.find(function(E){var W=R.get(E);if(W)return W.slice(0,xe).every(function($){return $})});if(ge)return I=ge,"break"},ce=ke;ce>0;ce--){var Ve=Ae(ce);if(Ve==="break")break}t.placement!==I&&(t.modifiersData[s]._skip=!0,t.placement=I,t.reset=!0)}}const gl={name:"flip",enabled:!0,phase:"main",fn:Du,requiresIfExists:["offset"],data:{_skip:!1}};function wr(e,t,n){return n===void 0&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function kr(e){return[Me,ze,qe,Le].some(function(t){return e[t]>=0})}function Mu(e){var t=e.state,n=e.name,s=t.rects.reference,i=t.rects.popper,o=t.modifiersData.preventOverflow,r=En(t,{elementContext:"reference"}),a=En(t,{altBoundary:!0}),l=wr(r,s),c=wr(a,i,o),u=kr(l),d=kr(c);t.modifiersData[n]={referenceClippingOffsets:l,popperEscapeOffsets:c,isReferenceHidden:u,hasPopperEscaped:d},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":u,"data-popper-escaped":d})}const _l={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:Mu};function Lu(e,t,n){var s=ct(e),i=[Le,Me].indexOf(s)>=0?-1:1,o=typeof n=="function"?n(Object.assign({},t,{placement:e})):n,r=o[0],a=o[1];return r=r||0,a=(a||0)*i,[Le,ze].indexOf(s)>=0?{x:a,y:r}:{x:r,y:a}}function $u(e){var t=e.state,n=e.options,s=e.name,i=n.offset,o=i===void 0?[0,0]:i,r=Ao.reduce(function(u,d){return u[d]=Lu(d,t.rects,o),u},{}),a=r[t.placement],l=a.x,c=a.y;t.modifiersData.popperOffsets!=null&&(t.modifiersData.popperOffsets.x+=l,t.modifiersData.popperOffsets.y+=c),t.modifiersData[s]=r}const bl={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:$u};function Wu(e){var t=e.state,n=e.name;t.modifiersData[n]=ml({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})}const Mo={name:"popperOffsets",enabled:!0,phase:"read",fn:Wu,data:{}};function Fu(e){return e==="x"?"y":"x"}function Vu(e){var t=e.state,n=e.options,s=e.name,i=n.mainAxis,o=i===void 0?!0:i,r=n.altAxis,a=r===void 0?!1:r,l=n.boundary,c=n.rootBoundary,u=n.altBoundary,d=n.padding,p=n.tether,g=p===void 0?!0:p,P=n.tetherOffset,k=P===void 0?0:P,A=En(t,{boundary:l,rootBoundary:c,padding:d,altBoundary:u}),C=ct(t.placement),m=kn(t.placement),_=!m,b=Io(C),y=Fu(b),S=t.modifiersData.popperOffsets,R=t.rects.reference,L=t.rects.popper,I=typeof k=="function"?k(Object.assign({},t.rects,{placement:t.placement})):k,U=typeof I=="number"?{mainAxis:I,altAxis:I}:Object.assign({mainAxis:0,altAxis:0},I),X=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,ie={x:0,y:0};if(S){if(o){var ue,Ce=b==="y"?Me:Le,ve=b==="y"?qe:ze,Q=b==="y"?"height":"width",Z=S[b],G=Z+A[Ce],me=Z-A[ve],ke=g?-L[Q]/2:0,Ae=m===tn?R[Q]:L[Q],ce=m===tn?-L[Q]:-R[Q],Ve=t.elements.arrow,ye=g&&Ve?Po(Ve):{width:0,height:0},xe=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:ul(),ge=xe[Ce],E=xe[ve],W=Kn(0,R[Q],ye[Q]),$=_?R[Q]/2-ke-W-ge-U.mainAxis:Ae-W-ge-U.mainAxis,q=_?-R[Q]/2+ke+W+E+U.mainAxis:ce+W+E+U.mainAxis,ne=t.elements.arrow&&fs(t.elements.arrow),f=ne?b==="y"?ne.clientTop||0:ne.clientLeft||0:0,h=(ue=X==null?void 0:X[b])!=null?ue:0,v=Z+$-h-f,T=Z+q-h,x=Kn(g?Hs(G,v):G,Z,g?Qt(me,T):me);S[b]=x,ie[b]=x-Z}if(a){var O,V=b==="x"?Me:Le,D=b==="x"?qe:ze,M=S[y],N=y==="y"?"height":"width",K=M+A[V],j=M-A[D],z=[Me,Le].indexOf(C)!==-1,J=(O=X==null?void 0:X[y])!=null?O:0,se=z?K:M-R[N]-L[N]-J+U.altAxis,pe=z?M+R[N]+L[N]-J-U.altAxis:j,de=g&&z?bu(se,M,pe):Kn(g?se:K,M,g?pe:j);S[y]=de,ie[y]=de-M}t.modifiersData[s]=ie}}const vl={name:"preventOverflow",enabled:!0,phase:"main",fn:Vu,requiresIfExists:["offset"]};function Hu(e){return{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}}function Uu(e){return e===Ke(e)||!Ge(e)?Bo(e):Hu(e)}function ju(e){var t=e.getBoundingClientRect(),n=yn(t.width)/e.offsetWidth||1,s=yn(t.height)/e.offsetHeight||1;return n!==1||s!==1}function qu(e,t,n){n===void 0&&(n=!1);var s=Ge(t),i=Ge(t)&&ju(t),o=Wt(t),r=wn(e,i,n),a={scrollLeft:0,scrollTop:0},l={x:0,y:0};return(s||!s&&!n)&&((ft(t)!=="body"||Do(o))&&(a=Uu(t)),Ge(t)?(l=wn(t,!0),l.x+=t.clientLeft,l.y+=t.clientTop):o&&(l.x=Ro(o))),{x:r.left+a.scrollLeft-l.x,y:r.top+a.scrollTop-l.y,width:r.width,height:r.height}}function zu(e){var t=new Map,n=new Set,s=[];e.forEach(function(o){t.set(o.name,o)});function i(o){n.add(o.name);var r=[].concat(o.requires||[],o.requiresIfExists||[]);r.forEach(function(a){if(!n.has(a)){var l=t.get(a);l&&i(l)}}),s.push(o)}return e.forEach(function(o){n.has(o.name)||i(o)}),s}function Ku(e){var t=zu(e);return al.reduce(function(n,s){return n.concat(t.filter(function(i){return i.phase===s}))},[])}function Gu(e){var t;return function(){return t||(t=new Promise(function(n){Promise.resolve().then(function(){t=void 0,n(e())})})),t}}function Yu(e){var t=e.reduce(function(n,s){var i=n[s.name];return n[s.name]=i?Object.assign({},i,s,{options:Object.assign({},i.options,s.options),data:Object.assign({},i.data,s.data)}):s,n},{});return Object.keys(t).map(function(n){return t[n]})}var Er={placement:"bottom",modifiers:[],strategy:"absolute"};function Tr(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some(function(s){return!(s&&typeof s.getBoundingClientRect=="function")})}function ii(e){e===void 0&&(e={});var t=e,n=t.defaultModifiers,s=n===void 0?[]:n,i=t.defaultOptions,o=i===void 0?Er:i;return function(a,l,c){c===void 0&&(c=o);var u={placement:"bottom",orderedModifiers:[],options:Object.assign({},Er,o),modifiersData:{},elements:{reference:a,popper:l},attributes:{},styles:{}},d=[],p=!1,g={state:u,setOptions:function(C){var m=typeof C=="function"?C(u.options):C;k(),u.options=Object.assign({},o,u.options,m),u.scrollParents={reference:nn(a)?Gn(a):a.contextElement?Gn(a.contextElement):[],popper:Gn(l)};var _=Ku(Yu([].concat(s,u.options.modifiers)));return u.orderedModifiers=_.filter(function(b){return b.enabled}),P(),g.update()},forceUpdate:function(){if(!p){var C=u.elements,m=C.reference,_=C.popper;if(Tr(m,_)){u.rects={reference:qu(m,fs(_),u.options.strategy==="fixed"),popper:Po(_)},u.reset=!1,u.placement=u.options.placement,u.orderedModifiers.forEach(function(U){return u.modifiersData[U.name]=Object.assign({},U.data)});for(var b=0;b<u.orderedModifiers.length;b++){if(u.reset===!0){u.reset=!1,b=-1;continue}var y=u.orderedModifiers[b],S=y.fn,R=y.options,L=R===void 0?{}:R,I=y.name;typeof S=="function"&&(u=S({state:u,options:L,name:I,instance:g})||u)}}}},update:Gu(function(){return new Promise(function(A){g.forceUpdate(),A(u)})}),destroy:function(){k(),p=!0}};if(!Tr(a,l))return g;g.setOptions(c).then(function(A){!p&&c.onFirstUpdate&&c.onFirstUpdate(A)});function P(){u.orderedModifiers.forEach(function(A){var C=A.name,m=A.options,_=m===void 0?{}:m,b=A.effect;if(typeof b=="function"){var y=b({state:u,name:C,instance:g,options:_}),S=function(){};d.push(y||S)}})}function k(){d.forEach(function(A){return A()}),d=[]}return g}}var Xu=ii(),Qu=[No,Mo,Oo,Co],Ju=ii({defaultModifiers:Qu}),Zu=[No,Mo,Oo,Co,bl,gl,vl,pl,_l],Lo=ii({defaultModifiers:Zu});const yl=Object.freeze(Object.defineProperty({__proto__:null,afterMain:sl,afterRead:el,afterWrite:rl,applyStyles:Co,arrow:pl,auto:ni,basePlacements:On,beforeMain:tl,beforeRead:Ja,beforeWrite:il,bottom:qe,clippingParents:Xa,computeStyles:Oo,createPopper:Lo,createPopperBase:Xu,createPopperLite:Ju,detectOverflow:En,end:vn,eventListeners:No,flip:gl,hide:_l,left:Le,main:nl,modifierPhases:al,offset:bl,placements:Ao,popper:dn,popperGenerator:ii,popperOffsets:Mo,preventOverflow:vl,read:Za,reference:Qa,right:ze,start:tn,top:Me,variationPlacements:to,viewport:So,write:ol},Symbol.toStringTag,{value:"Module"}));/*!
  * Bootstrap v5.2.3 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */const ed=1e6,td=1e3,io="transitionend",nd=e=>e==null?`${e}`:Object.prototype.toString.call(e).match(/\s([a-z]+)/i)[1].toLowerCase(),sd=e=>{do e+=Math.floor(Math.random()*ed);while(document.getElementById(e));return e},wl=e=>{let t=e.getAttribute("data-bs-target");if(!t||t==="#"){let n=e.getAttribute("href");if(!n||!n.includes("#")&&!n.startsWith("."))return null;n.includes("#")&&!n.startsWith("#")&&(n=`#${n.split("#")[1]}`),t=n&&n!=="#"?n.trim():null}return t},kl=e=>{const t=wl(e);return t&&document.querySelector(t)?t:null},_t=e=>{const t=wl(e);return t?document.querySelector(t):null},id=e=>{if(!e)return 0;let{transitionDuration:t,transitionDelay:n}=window.getComputedStyle(e);const s=Number.parseFloat(t),i=Number.parseFloat(n);return!s&&!i?0:(t=t.split(",")[0],n=n.split(",")[0],(Number.parseFloat(t)+Number.parseFloat(n))*td)},El=e=>{e.dispatchEvent(new Event(io))},bt=e=>!e||typeof e!="object"?!1:(typeof e.jquery<"u"&&(e=e[0]),typeof e.nodeType<"u"),Rt=e=>bt(e)?e.jquery?e[0]:e:typeof e=="string"&&e.length>0?document.querySelector(e):null,Nn=e=>{if(!bt(e)||e.getClientRects().length===0)return!1;const t=getComputedStyle(e).getPropertyValue("visibility")==="visible",n=e.closest("details:not([open])");if(!n)return t;if(n!==e){const s=e.closest("summary");if(s&&s.parentNode!==n||s===null)return!1}return t},Dt=e=>!e||e.nodeType!==Node.ELEMENT_NODE||e.classList.contains("disabled")?!0:typeof e.disabled<"u"?e.disabled:e.hasAttribute("disabled")&&e.getAttribute("disabled")!=="false",Tl=e=>{if(!document.documentElement.attachShadow)return null;if(typeof e.getRootNode=="function"){const t=e.getRootNode();return t instanceof ShadowRoot?t:null}return e instanceof ShadowRoot?e:e.parentNode?Tl(e.parentNode):null},Us=()=>{},ps=e=>{e.offsetHeight},Sl=()=>window.jQuery&&!document.body.hasAttribute("data-bs-no-jquery")?window.jQuery:null,Ci=[],od=e=>{document.readyState==="loading"?(Ci.length||document.addEventListener("DOMContentLoaded",()=>{for(const t of Ci)t()}),Ci.push(e)):e()},Ye=()=>document.documentElement.dir==="rtl",Xe=e=>{od(()=>{const t=Sl();if(t){const n=e.NAME,s=t.fn[n];t.fn[n]=e.jQueryInterface,t.fn[n].Constructor=e,t.fn[n].noConflict=()=>(t.fn[n]=s,e.jQueryInterface)}})},gt=e=>{typeof e=="function"&&e()},Al=(e,t,n=!0)=>{if(!n){gt(e);return}const s=5,i=id(t)+s;let o=!1;const r=({target:a})=>{a===t&&(o=!0,t.removeEventListener(io,r),gt(e))};t.addEventListener(io,r),setTimeout(()=>{o||El(t)},i)},$o=(e,t,n,s)=>{const i=e.length;let o=e.indexOf(t);return o===-1?!n&&s?e[i-1]:e[0]:(o+=n?1:-1,s&&(o=(o+i)%i),e[Math.max(0,Math.min(o,i-1))])},rd=/[^.]*(?=\..*)\.|.*/,ad=/\..*/,ld=/::\d+$/,Pi={};let Sr=1;const xl={mouseenter:"mouseover",mouseleave:"mouseout"},cd=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function Cl(e,t){return t&&`${t}::${Sr++}`||e.uidEvent||Sr++}function Pl(e){const t=Cl(e);return e.uidEvent=t,Pi[t]=Pi[t]||{},Pi[t]}function ud(e,t){return function n(s){return Wo(s,{delegateTarget:e}),n.oneOff&&B.off(e,s.type,t),t.apply(e,[s])}}function dd(e,t,n){return function s(i){const o=e.querySelectorAll(t);for(let{target:r}=i;r&&r!==this;r=r.parentNode)for(const a of o)if(a===r)return Wo(i,{delegateTarget:r}),s.oneOff&&B.off(e,i.type,t,n),n.apply(r,[i])}}function Il(e,t,n=null){return Object.values(e).find(s=>s.callable===t&&s.delegationSelector===n)}function Ol(e,t,n){const s=typeof t=="string",i=s?n:t||n;let o=Nl(e);return cd.has(o)||(o=e),[s,i,o]}function Ar(e,t,n,s,i){if(typeof t!="string"||!e)return;let[o,r,a]=Ol(t,n,s);t in xl&&(r=(P=>function(k){if(!k.relatedTarget||k.relatedTarget!==k.delegateTarget&&!k.delegateTarget.contains(k.relatedTarget))return P.call(this,k)})(r));const l=Pl(e),c=l[a]||(l[a]={}),u=Il(c,r,o?n:null);if(u){u.oneOff=u.oneOff&&i;return}const d=Cl(r,t.replace(rd,"")),p=o?dd(e,n,r):ud(e,r);p.delegationSelector=o?n:null,p.callable=r,p.oneOff=i,p.uidEvent=d,c[d]=p,e.addEventListener(a,p,o)}function oo(e,t,n,s,i){const o=Il(t[n],s,i);o&&(e.removeEventListener(n,o,!!i),delete t[n][o.uidEvent])}function fd(e,t,n,s){const i=t[n]||{};for(const o of Object.keys(i))if(o.includes(s)){const r=i[o];oo(e,t,n,r.callable,r.delegationSelector)}}function Nl(e){return e=e.replace(ad,""),xl[e]||e}const B={on(e,t,n,s){Ar(e,t,n,s,!1)},one(e,t,n,s){Ar(e,t,n,s,!0)},off(e,t,n,s){if(typeof t!="string"||!e)return;const[i,o,r]=Ol(t,n,s),a=r!==t,l=Pl(e),c=l[r]||{},u=t.startsWith(".");if(typeof o<"u"){if(!Object.keys(c).length)return;oo(e,l,r,o,i?n:null);return}if(u)for(const d of Object.keys(l))fd(e,l,d,t.slice(1));for(const d of Object.keys(c)){const p=d.replace(ld,"");if(!a||t.includes(p)){const g=c[d];oo(e,l,r,g.callable,g.delegationSelector)}}},trigger(e,t,n){if(typeof t!="string"||!e)return null;const s=Sl(),i=Nl(t),o=t!==i;let r=null,a=!0,l=!0,c=!1;o&&s&&(r=s.Event(t,n),s(e).trigger(r),a=!r.isPropagationStopped(),l=!r.isImmediatePropagationStopped(),c=r.isDefaultPrevented());let u=new Event(t,{bubbles:a,cancelable:!0});return u=Wo(u,n),c&&u.preventDefault(),l&&e.dispatchEvent(u),u.defaultPrevented&&r&&r.preventDefault(),u}};function Wo(e,t){for(const[n,s]of Object.entries(t||{}))try{e[n]=s}catch{Object.defineProperty(e,n,{configurable:!0,get(){return s}})}return e}const St=new Map,Ii={set(e,t,n){St.has(e)||St.set(e,new Map);const s=St.get(e);if(!s.has(t)&&s.size!==0){console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(s.keys())[0]}.`);return}s.set(t,n)},get(e,t){return St.has(e)&&St.get(e).get(t)||null},remove(e,t){if(!St.has(e))return;const n=St.get(e);n.delete(t),n.size===0&&St.delete(e)}};function xr(e){if(e==="true")return!0;if(e==="false")return!1;if(e===Number(e).toString())return Number(e);if(e===""||e==="null")return null;if(typeof e!="string")return e;try{return JSON.parse(decodeURIComponent(e))}catch{return e}}function Oi(e){return e.replace(/[A-Z]/g,t=>`-${t.toLowerCase()}`)}const vt={setDataAttribute(e,t,n){e.setAttribute(`data-bs-${Oi(t)}`,n)},removeDataAttribute(e,t){e.removeAttribute(`data-bs-${Oi(t)}`)},getDataAttributes(e){if(!e)return{};const t={},n=Object.keys(e.dataset).filter(s=>s.startsWith("bs")&&!s.startsWith("bsConfig"));for(const s of n){let i=s.replace(/^bs/,"");i=i.charAt(0).toLowerCase()+i.slice(1,i.length),t[i]=xr(e.dataset[s])}return t},getDataAttribute(e,t){return xr(e.getAttribute(`data-bs-${Oi(t)}`))}};class hs{static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}_getConfig(t){return t=this._mergeConfigObj(t),t=this._configAfterMerge(t),this._typeCheckConfig(t),t}_configAfterMerge(t){return t}_mergeConfigObj(t,n){const s=bt(n)?vt.getDataAttribute(n,"config"):{};return{...this.constructor.Default,...typeof s=="object"?s:{},...bt(n)?vt.getDataAttributes(n):{},...typeof t=="object"?t:{}}}_typeCheckConfig(t,n=this.constructor.DefaultType){for(const s of Object.keys(n)){const i=n[s],o=t[s],r=bt(o)?"element":nd(o);if(!new RegExp(i).test(r))throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${s}" provided type "${r}" but expected type "${i}".`)}}}const pd="5.2.3";class st extends hs{constructor(t,n){super(),t=Rt(t),t&&(this._element=t,this._config=this._getConfig(n),Ii.set(this._element,this.constructor.DATA_KEY,this))}dispose(){Ii.remove(this._element,this.constructor.DATA_KEY),B.off(this._element,this.constructor.EVENT_KEY);for(const t of Object.getOwnPropertyNames(this))this[t]=null}_queueCallback(t,n,s=!0){Al(t,n,s)}_getConfig(t){return t=this._mergeConfigObj(t,this._element),t=this._configAfterMerge(t),this._typeCheckConfig(t),t}static getInstance(t){return Ii.get(Rt(t),this.DATA_KEY)}static getOrCreateInstance(t,n={}){return this.getInstance(t)||new this(t,typeof n=="object"?n:null)}static get VERSION(){return pd}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}static eventName(t){return`${t}${this.EVENT_KEY}`}}const oi=(e,t="hide")=>{const n=`click.dismiss${e.EVENT_KEY}`,s=e.NAME;B.on(document,n,`[data-bs-dismiss="${s}"]`,function(i){if(["A","AREA"].includes(this.tagName)&&i.preventDefault(),Dt(this))return;const o=_t(this)||this.closest(`.${s}`);e.getOrCreateInstance(o)[t]()})},hd="alert",md="bs.alert",Bl=`.${md}`,gd=`close${Bl}`,_d=`closed${Bl}`,bd="fade",vd="show";class ri extends st{static get NAME(){return hd}close(){if(B.trigger(this._element,gd).defaultPrevented)return;this._element.classList.remove(vd);const n=this._element.classList.contains(bd);this._queueCallback(()=>this._destroyElement(),this._element,n)}_destroyElement(){this._element.remove(),B.trigger(this._element,_d),this.dispose()}static jQueryInterface(t){return this.each(function(){const n=ri.getOrCreateInstance(this);if(typeof t=="string"){if(n[t]===void 0||t.startsWith("_")||t==="constructor")throw new TypeError(`No method named "${t}"`);n[t](this)}})}}oi(ri,"close");Xe(ri);const yd="button",wd="bs.button",kd=`.${wd}`,Ed=".data-api",Td="active",Cr='[data-bs-toggle="button"]',Sd=`click${kd}${Ed}`;class ai extends st{static get NAME(){return yd}toggle(){this._element.setAttribute("aria-pressed",this._element.classList.toggle(Td))}static jQueryInterface(t){return this.each(function(){const n=ai.getOrCreateInstance(this);t==="toggle"&&n[t]()})}}B.on(document,Sd,Cr,e=>{e.preventDefault();const t=e.target.closest(Cr);ai.getOrCreateInstance(t).toggle()});Xe(ai);const te={find(e,t=document.documentElement){return[].concat(...Element.prototype.querySelectorAll.call(t,e))},findOne(e,t=document.documentElement){return Element.prototype.querySelector.call(t,e)},children(e,t){return[].concat(...e.children).filter(n=>n.matches(t))},parents(e,t){const n=[];let s=e.parentNode.closest(t);for(;s;)n.push(s),s=s.parentNode.closest(t);return n},prev(e,t){let n=e.previousElementSibling;for(;n;){if(n.matches(t))return[n];n=n.previousElementSibling}return[]},next(e,t){let n=e.nextElementSibling;for(;n;){if(n.matches(t))return[n];n=n.nextElementSibling}return[]},focusableChildren(e){const t=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map(n=>`${n}:not([tabindex^="-"])`).join(",");return this.find(t,e).filter(n=>!Dt(n)&&Nn(n))}},Ad="swipe",Bn=".bs.swipe",xd=`touchstart${Bn}`,Cd=`touchmove${Bn}`,Pd=`touchend${Bn}`,Id=`pointerdown${Bn}`,Od=`pointerup${Bn}`,Nd="touch",Bd="pen",Rd="pointer-event",Dd=40,Md={endCallback:null,leftCallback:null,rightCallback:null},Ld={endCallback:"(function|null)",leftCallback:"(function|null)",rightCallback:"(function|null)"};class js extends hs{constructor(t,n){super(),this._element=t,!(!t||!js.isSupported())&&(this._config=this._getConfig(n),this._deltaX=0,this._supportPointerEvents=!!window.PointerEvent,this._initEvents())}static get Default(){return Md}static get DefaultType(){return Ld}static get NAME(){return Ad}dispose(){B.off(this._element,Bn)}_start(t){if(!this._supportPointerEvents){this._deltaX=t.touches[0].clientX;return}this._eventIsPointerPenTouch(t)&&(this._deltaX=t.clientX)}_end(t){this._eventIsPointerPenTouch(t)&&(this._deltaX=t.clientX-this._deltaX),this._handleSwipe(),gt(this._config.endCallback)}_move(t){this._deltaX=t.touches&&t.touches.length>1?0:t.touches[0].clientX-this._deltaX}_handleSwipe(){const t=Math.abs(this._deltaX);if(t<=Dd)return;const n=t/this._deltaX;this._deltaX=0,n&&gt(n>0?this._config.rightCallback:this._config.leftCallback)}_initEvents(){this._supportPointerEvents?(B.on(this._element,Id,t=>this._start(t)),B.on(this._element,Od,t=>this._end(t)),this._element.classList.add(Rd)):(B.on(this._element,xd,t=>this._start(t)),B.on(this._element,Cd,t=>this._move(t)),B.on(this._element,Pd,t=>this._end(t)))}_eventIsPointerPenTouch(t){return this._supportPointerEvents&&(t.pointerType===Bd||t.pointerType===Nd)}static isSupported(){return"ontouchstart"in document.documentElement||navigator.maxTouchPoints>0}}const $d="carousel",Wd="bs.carousel",Ft=`.${Wd}`,Rl=".data-api",Fd="ArrowLeft",Vd="ArrowRight",Hd=500,Vn="next",an="prev",fn="left",Rs="right",Ud=`slide${Ft}`,Ni=`slid${Ft}`,jd=`keydown${Ft}`,qd=`mouseenter${Ft}`,zd=`mouseleave${Ft}`,Kd=`dragstart${Ft}`,Gd=`load${Ft}${Rl}`,Yd=`click${Ft}${Rl}`,Dl="carousel",ws="active",Xd="slide",Qd="carousel-item-end",Jd="carousel-item-start",Zd="carousel-item-next",ef="carousel-item-prev",Ml=".active",Ll=".carousel-item",tf=Ml+Ll,nf=".carousel-item img",sf=".carousel-indicators",of="[data-bs-slide], [data-bs-slide-to]",rf='[data-bs-ride="carousel"]',af={[Fd]:Rs,[Vd]:fn},lf={interval:5e3,keyboard:!0,pause:"hover",ride:!1,touch:!0,wrap:!0},cf={interval:"(number|boolean)",keyboard:"boolean",pause:"(string|boolean)",ride:"(boolean|string)",touch:"boolean",wrap:"boolean"};class ms extends st{constructor(t,n){super(t,n),this._interval=null,this._activeElement=null,this._isSliding=!1,this.touchTimeout=null,this._swipeHelper=null,this._indicatorsElement=te.findOne(sf,this._element),this._addEventListeners(),this._config.ride===Dl&&this.cycle()}static get Default(){return lf}static get DefaultType(){return cf}static get NAME(){return $d}next(){this._slide(Vn)}nextWhenVisible(){!document.hidden&&Nn(this._element)&&this.next()}prev(){this._slide(an)}pause(){this._isSliding&&El(this._element),this._clearInterval()}cycle(){this._clearInterval(),this._updateInterval(),this._interval=setInterval(()=>this.nextWhenVisible(),this._config.interval)}_maybeEnableCycle(){if(this._config.ride){if(this._isSliding){B.one(this._element,Ni,()=>this.cycle());return}this.cycle()}}to(t){const n=this._getItems();if(t>n.length-1||t<0)return;if(this._isSliding){B.one(this._element,Ni,()=>this.to(t));return}const s=this._getItemIndex(this._getActive());if(s===t)return;const i=t>s?Vn:an;this._slide(i,n[t])}dispose(){this._swipeHelper&&this._swipeHelper.dispose(),super.dispose()}_configAfterMerge(t){return t.defaultInterval=t.interval,t}_addEventListeners(){this._config.keyboard&&B.on(this._element,jd,t=>this._keydown(t)),this._config.pause==="hover"&&(B.on(this._element,qd,()=>this.pause()),B.on(this._element,zd,()=>this._maybeEnableCycle())),this._config.touch&&js.isSupported()&&this._addTouchEventListeners()}_addTouchEventListeners(){for(const s of te.find(nf,this._element))B.on(s,Kd,i=>i.preventDefault());const n={leftCallback:()=>this._slide(this._directionToOrder(fn)),rightCallback:()=>this._slide(this._directionToOrder(Rs)),endCallback:()=>{this._config.pause==="hover"&&(this.pause(),this.touchTimeout&&clearTimeout(this.touchTimeout),this.touchTimeout=setTimeout(()=>this._maybeEnableCycle(),Hd+this._config.interval))}};this._swipeHelper=new js(this._element,n)}_keydown(t){if(/input|textarea/i.test(t.target.tagName))return;const n=af[t.key];n&&(t.preventDefault(),this._slide(this._directionToOrder(n)))}_getItemIndex(t){return this._getItems().indexOf(t)}_setActiveIndicatorElement(t){if(!this._indicatorsElement)return;const n=te.findOne(Ml,this._indicatorsElement);n.classList.remove(ws),n.removeAttribute("aria-current");const s=te.findOne(`[data-bs-slide-to="${t}"]`,this._indicatorsElement);s&&(s.classList.add(ws),s.setAttribute("aria-current","true"))}_updateInterval(){const t=this._activeElement||this._getActive();if(!t)return;const n=Number.parseInt(t.getAttribute("data-bs-interval"),10);this._config.interval=n||this._config.defaultInterval}_slide(t,n=null){if(this._isSliding)return;const s=this._getActive(),i=t===Vn,o=n||$o(this._getItems(),s,i,this._config.wrap);if(o===s)return;const r=this._getItemIndex(o),a=g=>B.trigger(this._element,g,{relatedTarget:o,direction:this._orderToDirection(t),from:this._getItemIndex(s),to:r});if(a(Ud).defaultPrevented||!s||!o)return;const c=!!this._interval;this.pause(),this._isSliding=!0,this._setActiveIndicatorElement(r),this._activeElement=o;const u=i?Jd:Qd,d=i?Zd:ef;o.classList.add(d),ps(o),s.classList.add(u),o.classList.add(u);const p=()=>{o.classList.remove(u,d),o.classList.add(ws),s.classList.remove(ws,d,u),this._isSliding=!1,a(Ni)};this._queueCallback(p,s,this._isAnimated()),c&&this.cycle()}_isAnimated(){return this._element.classList.contains(Xd)}_getActive(){return te.findOne(tf,this._element)}_getItems(){return te.find(Ll,this._element)}_clearInterval(){this._interval&&(clearInterval(this._interval),this._interval=null)}_directionToOrder(t){return Ye()?t===fn?an:Vn:t===fn?Vn:an}_orderToDirection(t){return Ye()?t===an?fn:Rs:t===an?Rs:fn}static jQueryInterface(t){return this.each(function(){const n=ms.getOrCreateInstance(this,t);if(typeof t=="number"){n.to(t);return}if(typeof t=="string"){if(n[t]===void 0||t.startsWith("_")||t==="constructor")throw new TypeError(`No method named "${t}"`);n[t]()}})}}B.on(document,Yd,of,function(e){const t=_t(this);if(!t||!t.classList.contains(Dl))return;e.preventDefault();const n=ms.getOrCreateInstance(t),s=this.getAttribute("data-bs-slide-to");if(s){n.to(s),n._maybeEnableCycle();return}if(vt.getDataAttribute(this,"slide")==="next"){n.next(),n._maybeEnableCycle();return}n.prev(),n._maybeEnableCycle()});B.on(window,Gd,()=>{const e=te.find(rf);for(const t of e)ms.getOrCreateInstance(t)});Xe(ms);const uf="collapse",df="bs.collapse",gs=`.${df}`,ff=".data-api",pf=`show${gs}`,hf=`shown${gs}`,mf=`hide${gs}`,gf=`hidden${gs}`,_f=`click${gs}${ff}`,Bi="show",mn="collapse",ks="collapsing",bf="collapsed",vf=`:scope .${mn} .${mn}`,yf="collapse-horizontal",wf="width",kf="height",Ef=".collapse.show, .collapse.collapsing",ro='[data-bs-toggle="collapse"]',Tf={parent:null,toggle:!0},Sf={parent:"(null|element)",toggle:"boolean"};class ns extends st{constructor(t,n){super(t,n),this._isTransitioning=!1,this._triggerArray=[];const s=te.find(ro);for(const i of s){const o=kl(i),r=te.find(o).filter(a=>a===this._element);o!==null&&r.length&&this._triggerArray.push(i)}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return Tf}static get DefaultType(){return Sf}static get NAME(){return uf}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let t=[];if(this._config.parent&&(t=this._getFirstLevelChildren(Ef).filter(a=>a!==this._element).map(a=>ns.getOrCreateInstance(a,{toggle:!1}))),t.length&&t[0]._isTransitioning||B.trigger(this._element,pf).defaultPrevented)return;for(const a of t)a.hide();const s=this._getDimension();this._element.classList.remove(mn),this._element.classList.add(ks),this._element.style[s]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;const i=()=>{this._isTransitioning=!1,this._element.classList.remove(ks),this._element.classList.add(mn,Bi),this._element.style[s]="",B.trigger(this._element,hf)},r=`scroll${s[0].toUpperCase()+s.slice(1)}`;this._queueCallback(i,this._element,!0),this._element.style[s]=`${this._element[r]}px`}hide(){if(this._isTransitioning||!this._isShown()||B.trigger(this._element,mf).defaultPrevented)return;const n=this._getDimension();this._element.style[n]=`${this._element.getBoundingClientRect()[n]}px`,ps(this._element),this._element.classList.add(ks),this._element.classList.remove(mn,Bi);for(const i of this._triggerArray){const o=_t(i);o&&!this._isShown(o)&&this._addAriaAndCollapsedClass([i],!1)}this._isTransitioning=!0;const s=()=>{this._isTransitioning=!1,this._element.classList.remove(ks),this._element.classList.add(mn),B.trigger(this._element,gf)};this._element.style[n]="",this._queueCallback(s,this._element,!0)}_isShown(t=this._element){return t.classList.contains(Bi)}_configAfterMerge(t){return t.toggle=!!t.toggle,t.parent=Rt(t.parent),t}_getDimension(){return this._element.classList.contains(yf)?wf:kf}_initializeChildren(){if(!this._config.parent)return;const t=this._getFirstLevelChildren(ro);for(const n of t){const s=_t(n);s&&this._addAriaAndCollapsedClass([n],this._isShown(s))}}_getFirstLevelChildren(t){const n=te.find(vf,this._config.parent);return te.find(t,this._config.parent).filter(s=>!n.includes(s))}_addAriaAndCollapsedClass(t,n){if(t.length)for(const s of t)s.classList.toggle(bf,!n),s.setAttribute("aria-expanded",n)}static jQueryInterface(t){const n={};return typeof t=="string"&&/show|hide/.test(t)&&(n.toggle=!1),this.each(function(){const s=ns.getOrCreateInstance(this,n);if(typeof t=="string"){if(typeof s[t]>"u")throw new TypeError(`No method named "${t}"`);s[t]()}})}}B.on(document,_f,ro,function(e){(e.target.tagName==="A"||e.delegateTarget&&e.delegateTarget.tagName==="A")&&e.preventDefault();const t=kl(this),n=te.find(t);for(const s of n)ns.getOrCreateInstance(s,{toggle:!1}).toggle()});Xe(ns);const Pr="dropdown",Af="bs.dropdown",sn=`.${Af}`,Fo=".data-api",xf="Escape",Ir="Tab",Cf="ArrowUp",Or="ArrowDown",Pf=2,If=`hide${sn}`,Of=`hidden${sn}`,Nf=`show${sn}`,Bf=`shown${sn}`,$l=`click${sn}${Fo}`,Wl=`keydown${sn}${Fo}`,Rf=`keyup${sn}${Fo}`,pn="show",Df="dropup",Mf="dropend",Lf="dropstart",$f="dropup-center",Wf="dropdown-center",Gt='[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',Ff=`${Gt}.${pn}`,Ds=".dropdown-menu",Vf=".navbar",Hf=".navbar-nav",Uf=".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",jf=Ye()?"top-end":"top-start",qf=Ye()?"top-start":"top-end",zf=Ye()?"bottom-end":"bottom-start",Kf=Ye()?"bottom-start":"bottom-end",Gf=Ye()?"left-start":"right-start",Yf=Ye()?"right-start":"left-start",Xf="top",Qf="bottom",Jf={autoClose:!0,boundary:"clippingParents",display:"dynamic",offset:[0,2],popperConfig:null,reference:"toggle"},Zf={autoClose:"(boolean|string)",boundary:"(string|element)",display:"string",offset:"(array|string|function)",popperConfig:"(null|object|function)",reference:"(string|element|object)"};class ut extends st{constructor(t,n){super(t,n),this._popper=null,this._parent=this._element.parentNode,this._menu=te.next(this._element,Ds)[0]||te.prev(this._element,Ds)[0]||te.findOne(Ds,this._parent),this._inNavbar=this._detectNavbar()}static get Default(){return Jf}static get DefaultType(){return Zf}static get NAME(){return Pr}toggle(){return this._isShown()?this.hide():this.show()}show(){if(Dt(this._element)||this._isShown())return;const t={relatedTarget:this._element};if(!B.trigger(this._element,Nf,t).defaultPrevented){if(this._createPopper(),"ontouchstart"in document.documentElement&&!this._parent.closest(Hf))for(const s of[].concat(...document.body.children))B.on(s,"mouseover",Us);this._element.focus(),this._element.setAttribute("aria-expanded",!0),this._menu.classList.add(pn),this._element.classList.add(pn),B.trigger(this._element,Bf,t)}}hide(){if(Dt(this._element)||!this._isShown())return;const t={relatedTarget:this._element};this._completeHide(t)}dispose(){this._popper&&this._popper.destroy(),super.dispose()}update(){this._inNavbar=this._detectNavbar(),this._popper&&this._popper.update()}_completeHide(t){if(!B.trigger(this._element,If,t).defaultPrevented){if("ontouchstart"in document.documentElement)for(const s of[].concat(...document.body.children))B.off(s,"mouseover",Us);this._popper&&this._popper.destroy(),this._menu.classList.remove(pn),this._element.classList.remove(pn),this._element.setAttribute("aria-expanded","false"),vt.removeDataAttribute(this._menu,"popper"),B.trigger(this._element,Of,t)}}_getConfig(t){if(t=super._getConfig(t),typeof t.reference=="object"&&!bt(t.reference)&&typeof t.reference.getBoundingClientRect!="function")throw new TypeError(`${Pr.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);return t}_createPopper(){if(typeof yl>"u")throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");let t=this._element;this._config.reference==="parent"?t=this._parent:bt(this._config.reference)?t=Rt(this._config.reference):typeof this._config.reference=="object"&&(t=this._config.reference);const n=this._getPopperConfig();this._popper=Lo(t,this._menu,n)}_isShown(){return this._menu.classList.contains(pn)}_getPlacement(){const t=this._parent;if(t.classList.contains(Mf))return Gf;if(t.classList.contains(Lf))return Yf;if(t.classList.contains($f))return Xf;if(t.classList.contains(Wf))return Qf;const n=getComputedStyle(this._menu).getPropertyValue("--bs-position").trim()==="end";return t.classList.contains(Df)?n?qf:jf:n?Kf:zf}_detectNavbar(){return this._element.closest(Vf)!==null}_getOffset(){const{offset:t}=this._config;return typeof t=="string"?t.split(",").map(n=>Number.parseInt(n,10)):typeof t=="function"?n=>t(n,this._element):t}_getPopperConfig(){const t={placement:this._getPlacement(),modifiers:[{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"offset",options:{offset:this._getOffset()}}]};return(this._inNavbar||this._config.display==="static")&&(vt.setDataAttribute(this._menu,"popper","static"),t.modifiers=[{name:"applyStyles",enabled:!1}]),{...t,...typeof this._config.popperConfig=="function"?this._config.popperConfig(t):this._config.popperConfig}}_selectMenuItem({key:t,target:n}){const s=te.find(Uf,this._menu).filter(i=>Nn(i));s.length&&$o(s,n,t===Or,!s.includes(n)).focus()}static jQueryInterface(t){return this.each(function(){const n=ut.getOrCreateInstance(this,t);if(typeof t=="string"){if(typeof n[t]>"u")throw new TypeError(`No method named "${t}"`);n[t]()}})}static clearMenus(t){if(t.button===Pf||t.type==="keyup"&&t.key!==Ir)return;const n=te.find(Ff);for(const s of n){const i=ut.getInstance(s);if(!i||i._config.autoClose===!1)continue;const o=t.composedPath(),r=o.includes(i._menu);if(o.includes(i._element)||i._config.autoClose==="inside"&&!r||i._config.autoClose==="outside"&&r||i._menu.contains(t.target)&&(t.type==="keyup"&&t.key===Ir||/input|select|option|textarea|form/i.test(t.target.tagName)))continue;const a={relatedTarget:i._element};t.type==="click"&&(a.clickEvent=t),i._completeHide(a)}}static dataApiKeydownHandler(t){const n=/input|textarea/i.test(t.target.tagName),s=t.key===xf,i=[Cf,Or].includes(t.key);if(!i&&!s||n&&!s)return;t.preventDefault();const o=this.matches(Gt)?this:te.prev(this,Gt)[0]||te.next(this,Gt)[0]||te.findOne(Gt,t.delegateTarget.parentNode),r=ut.getOrCreateInstance(o);if(i){t.stopPropagation(),r.show(),r._selectMenuItem(t);return}r._isShown()&&(t.stopPropagation(),r.hide(),o.focus())}}B.on(document,Wl,Gt,ut.dataApiKeydownHandler);B.on(document,Wl,Ds,ut.dataApiKeydownHandler);B.on(document,$l,ut.clearMenus);B.on(document,Rf,ut.clearMenus);B.on(document,$l,Gt,function(e){e.preventDefault(),ut.getOrCreateInstance(this).toggle()});Xe(ut);const Nr=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",Br=".sticky-top",Es="padding-right",Rr="margin-right";class ao{constructor(){this._element=document.body}getWidth(){const t=document.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}hide(){const t=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,Es,n=>n+t),this._setElementAttributes(Nr,Es,n=>n+t),this._setElementAttributes(Br,Rr,n=>n-t)}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,Es),this._resetElementAttributes(Nr,Es),this._resetElementAttributes(Br,Rr)}isOverflowing(){return this.getWidth()>0}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(t,n,s){const i=this.getWidth(),o=r=>{if(r!==this._element&&window.innerWidth>r.clientWidth+i)return;this._saveInitialAttribute(r,n);const a=window.getComputedStyle(r).getPropertyValue(n);r.style.setProperty(n,`${s(Number.parseFloat(a))}px`)};this._applyManipulationCallback(t,o)}_saveInitialAttribute(t,n){const s=t.style.getPropertyValue(n);s&&vt.setDataAttribute(t,n,s)}_resetElementAttributes(t,n){const s=i=>{const o=vt.getDataAttribute(i,n);if(o===null){i.style.removeProperty(n);return}vt.removeDataAttribute(i,n),i.style.setProperty(n,o)};this._applyManipulationCallback(t,s)}_applyManipulationCallback(t,n){if(bt(t)){n(t);return}for(const s of te.find(t,this._element))n(s)}}const Fl="backdrop",ep="fade",Dr="show",Mr=`mousedown.bs.${Fl}`,tp={className:"modal-backdrop",clickCallback:null,isAnimated:!1,isVisible:!0,rootElement:"body"},np={className:"string",clickCallback:"(function|null)",isAnimated:"boolean",isVisible:"boolean",rootElement:"(element|string)"};class Vl extends hs{constructor(t){super(),this._config=this._getConfig(t),this._isAppended=!1,this._element=null}static get Default(){return tp}static get DefaultType(){return np}static get NAME(){return Fl}show(t){if(!this._config.isVisible){gt(t);return}this._append();const n=this._getElement();this._config.isAnimated&&ps(n),n.classList.add(Dr),this._emulateAnimation(()=>{gt(t)})}hide(t){if(!this._config.isVisible){gt(t);return}this._getElement().classList.remove(Dr),this._emulateAnimation(()=>{this.dispose(),gt(t)})}dispose(){this._isAppended&&(B.off(this._element,Mr),this._element.remove(),this._isAppended=!1)}_getElement(){if(!this._element){const t=document.createElement("div");t.className=this._config.className,this._config.isAnimated&&t.classList.add(ep),this._element=t}return this._element}_configAfterMerge(t){return t.rootElement=Rt(t.rootElement),t}_append(){if(this._isAppended)return;const t=this._getElement();this._config.rootElement.append(t),B.on(t,Mr,()=>{gt(this._config.clickCallback)}),this._isAppended=!0}_emulateAnimation(t){Al(t,this._getElement(),this._config.isAnimated)}}const sp="focustrap",ip="bs.focustrap",qs=`.${ip}`,op=`focusin${qs}`,rp=`keydown.tab${qs}`,ap="Tab",lp="forward",Lr="backward",cp={autofocus:!0,trapElement:null},up={autofocus:"boolean",trapElement:"element"};class Hl extends hs{constructor(t){super(),this._config=this._getConfig(t),this._isActive=!1,this._lastTabNavDirection=null}static get Default(){return cp}static get DefaultType(){return up}static get NAME(){return sp}activate(){this._isActive||(this._config.autofocus&&this._config.trapElement.focus(),B.off(document,qs),B.on(document,op,t=>this._handleFocusin(t)),B.on(document,rp,t=>this._handleKeydown(t)),this._isActive=!0)}deactivate(){this._isActive&&(this._isActive=!1,B.off(document,qs))}_handleFocusin(t){const{trapElement:n}=this._config;if(t.target===document||t.target===n||n.contains(t.target))return;const s=te.focusableChildren(n);s.length===0?n.focus():this._lastTabNavDirection===Lr?s[s.length-1].focus():s[0].focus()}_handleKeydown(t){t.key===ap&&(this._lastTabNavDirection=t.shiftKey?Lr:lp)}}const dp="modal",fp="bs.modal",it=`.${fp}`,pp=".data-api",hp="Escape",mp=`hide${it}`,gp=`hidePrevented${it}`,Ul=`hidden${it}`,jl=`show${it}`,_p=`shown${it}`,bp=`resize${it}`,vp=`click.dismiss${it}`,yp=`mousedown.dismiss${it}`,wp=`keydown.dismiss${it}`,kp=`click${it}${pp}`,$r="modal-open",Ep="fade",Wr="show",Ri="modal-static",Tp=".modal.show",Sp=".modal-dialog",Ap=".modal-body",xp='[data-bs-toggle="modal"]',Cp={backdrop:!0,focus:!0,keyboard:!0},Pp={backdrop:"(boolean|string)",focus:"boolean",keyboard:"boolean"};class Tn extends st{constructor(t,n){super(t,n),this._dialog=te.findOne(Sp,this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._isTransitioning=!1,this._scrollBar=new ao,this._addEventListeners()}static get Default(){return Cp}static get DefaultType(){return Pp}static get NAME(){return dp}toggle(t){return this._isShown?this.hide():this.show(t)}show(t){this._isShown||this._isTransitioning||B.trigger(this._element,jl,{relatedTarget:t}).defaultPrevented||(this._isShown=!0,this._isTransitioning=!0,this._scrollBar.hide(),document.body.classList.add($r),this._adjustDialog(),this._backdrop.show(()=>this._showElement(t)))}hide(){!this._isShown||this._isTransitioning||B.trigger(this._element,mp).defaultPrevented||(this._isShown=!1,this._isTransitioning=!0,this._focustrap.deactivate(),this._element.classList.remove(Wr),this._queueCallback(()=>this._hideModal(),this._element,this._isAnimated()))}dispose(){for(const t of[window,this._dialog])B.off(t,it);this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new Vl({isVisible:!!this._config.backdrop,isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new Hl({trapElement:this._element})}_showElement(t){document.body.contains(this._element)||document.body.append(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0;const n=te.findOne(Ap,this._dialog);n&&(n.scrollTop=0),ps(this._element),this._element.classList.add(Wr);const s=()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,B.trigger(this._element,_p,{relatedTarget:t})};this._queueCallback(s,this._dialog,this._isAnimated())}_addEventListeners(){B.on(this._element,wp,t=>{if(t.key===hp){if(this._config.keyboard){t.preventDefault(),this.hide();return}this._triggerBackdropTransition()}}),B.on(window,bp,()=>{this._isShown&&!this._isTransitioning&&this._adjustDialog()}),B.on(this._element,yp,t=>{B.one(this._element,vp,n=>{if(!(this._element!==t.target||this._element!==n.target)){if(this._config.backdrop==="static"){this._triggerBackdropTransition();return}this._config.backdrop&&this.hide()}})})}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide(()=>{document.body.classList.remove($r),this._resetAdjustments(),this._scrollBar.reset(),B.trigger(this._element,Ul)})}_isAnimated(){return this._element.classList.contains(Ep)}_triggerBackdropTransition(){if(B.trigger(this._element,gp).defaultPrevented)return;const n=this._element.scrollHeight>document.documentElement.clientHeight,s=this._element.style.overflowY;s==="hidden"||this._element.classList.contains(Ri)||(n||(this._element.style.overflowY="hidden"),this._element.classList.add(Ri),this._queueCallback(()=>{this._element.classList.remove(Ri),this._queueCallback(()=>{this._element.style.overflowY=s},this._dialog)},this._dialog),this._element.focus())}_adjustDialog(){const t=this._element.scrollHeight>document.documentElement.clientHeight,n=this._scrollBar.getWidth(),s=n>0;if(s&&!t){const i=Ye()?"paddingLeft":"paddingRight";this._element.style[i]=`${n}px`}if(!s&&t){const i=Ye()?"paddingRight":"paddingLeft";this._element.style[i]=`${n}px`}}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}static jQueryInterface(t,n){return this.each(function(){const s=Tn.getOrCreateInstance(this,t);if(typeof t=="string"){if(typeof s[t]>"u")throw new TypeError(`No method named "${t}"`);s[t](n)}})}}B.on(document,kp,xp,function(e){const t=_t(this);["A","AREA"].includes(this.tagName)&&e.preventDefault(),B.one(t,jl,i=>{i.defaultPrevented||B.one(t,Ul,()=>{Nn(this)&&this.focus()})});const n=te.findOne(Tp);n&&Tn.getInstance(n).hide(),Tn.getOrCreateInstance(t).toggle(this)});oi(Tn);Xe(Tn);const Ip="offcanvas",Op="bs.offcanvas",Et=`.${Op}`,ql=".data-api",Np=`load${Et}${ql}`,Bp="Escape",Fr="show",Vr="showing",Hr="hiding",Rp="offcanvas-backdrop",zl=".offcanvas.show",Dp=`show${Et}`,Mp=`shown${Et}`,Lp=`hide${Et}`,Ur=`hidePrevented${Et}`,Kl=`hidden${Et}`,$p=`resize${Et}`,Wp=`click${Et}${ql}`,Fp=`keydown.dismiss${Et}`,Vp='[data-bs-toggle="offcanvas"]',Hp={backdrop:!0,keyboard:!0,scroll:!1},Up={backdrop:"(boolean|string)",keyboard:"boolean",scroll:"boolean"};class Mt extends st{constructor(t,n){super(t,n),this._isShown=!1,this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._addEventListeners()}static get Default(){return Hp}static get DefaultType(){return Up}static get NAME(){return Ip}toggle(t){return this._isShown?this.hide():this.show(t)}show(t){if(this._isShown||B.trigger(this._element,Dp,{relatedTarget:t}).defaultPrevented)return;this._isShown=!0,this._backdrop.show(),this._config.scroll||new ao().hide(),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.classList.add(Vr);const s=()=>{(!this._config.scroll||this._config.backdrop)&&this._focustrap.activate(),this._element.classList.add(Fr),this._element.classList.remove(Vr),B.trigger(this._element,Mp,{relatedTarget:t})};this._queueCallback(s,this._element,!0)}hide(){if(!this._isShown||B.trigger(this._element,Lp).defaultPrevented)return;this._focustrap.deactivate(),this._element.blur(),this._isShown=!1,this._element.classList.add(Hr),this._backdrop.hide();const n=()=>{this._element.classList.remove(Fr,Hr),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._config.scroll||new ao().reset(),B.trigger(this._element,Kl)};this._queueCallback(n,this._element,!0)}dispose(){this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}_initializeBackDrop(){const t=()=>{if(this._config.backdrop==="static"){B.trigger(this._element,Ur);return}this.hide()},n=!!this._config.backdrop;return new Vl({className:Rp,isVisible:n,isAnimated:!0,rootElement:this._element.parentNode,clickCallback:n?t:null})}_initializeFocusTrap(){return new Hl({trapElement:this._element})}_addEventListeners(){B.on(this._element,Fp,t=>{if(t.key===Bp){if(!this._config.keyboard){B.trigger(this._element,Ur);return}this.hide()}})}static jQueryInterface(t){return this.each(function(){const n=Mt.getOrCreateInstance(this,t);if(typeof t=="string"){if(n[t]===void 0||t.startsWith("_")||t==="constructor")throw new TypeError(`No method named "${t}"`);n[t](this)}})}}B.on(document,Wp,Vp,function(e){const t=_t(this);if(["A","AREA"].includes(this.tagName)&&e.preventDefault(),Dt(this))return;B.one(t,Kl,()=>{Nn(this)&&this.focus()});const n=te.findOne(zl);n&&n!==t&&Mt.getInstance(n).hide(),Mt.getOrCreateInstance(t).toggle(this)});B.on(window,Np,()=>{for(const e of te.find(zl))Mt.getOrCreateInstance(e).show()});B.on(window,$p,()=>{for(const e of te.find("[aria-modal][class*=show][class*=offcanvas-]"))getComputedStyle(e).position!=="fixed"&&Mt.getOrCreateInstance(e).hide()});oi(Mt);Xe(Mt);const jp=new Set(["background","cite","href","itemtype","longdesc","poster","src","xlink:href"]),qp=/^aria-[\w-]*$/i,zp=/^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i,Kp=/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i,Gp=(e,t)=>{const n=e.nodeName.toLowerCase();return t.includes(n)?jp.has(n)?!!(zp.test(e.nodeValue)||Kp.test(e.nodeValue)):!0:t.filter(s=>s instanceof RegExp).some(s=>s.test(n))},Gl={"*":["class","dir","id","lang","role",qp],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]};function Yp(e,t,n){if(!e.length)return e;if(n&&typeof n=="function")return n(e);const i=new window.DOMParser().parseFromString(e,"text/html"),o=[].concat(...i.body.querySelectorAll("*"));for(const r of o){const a=r.nodeName.toLowerCase();if(!Object.keys(t).includes(a)){r.remove();continue}const l=[].concat(...r.attributes),c=[].concat(t["*"]||[],t[a]||[]);for(const u of l)Gp(u,c)||r.removeAttribute(u.nodeName)}return i.body.innerHTML}const Xp="TemplateFactory",Qp={allowList:Gl,content:{},extraClass:"",html:!1,sanitize:!0,sanitizeFn:null,template:"<div></div>"},Jp={allowList:"object",content:"object",extraClass:"(string|function)",html:"boolean",sanitize:"boolean",sanitizeFn:"(null|function)",template:"string"},Zp={entry:"(string|element|function|null)",selector:"(string|element)"};class eh extends hs{constructor(t){super(),this._config=this._getConfig(t)}static get Default(){return Qp}static get DefaultType(){return Jp}static get NAME(){return Xp}getContent(){return Object.values(this._config.content).map(t=>this._resolvePossibleFunction(t)).filter(Boolean)}hasContent(){return this.getContent().length>0}changeContent(t){return this._checkContent(t),this._config.content={...this._config.content,...t},this}toHtml(){const t=document.createElement("div");t.innerHTML=this._maybeSanitize(this._config.template);for(const[i,o]of Object.entries(this._config.content))this._setContent(t,o,i);const n=t.children[0],s=this._resolvePossibleFunction(this._config.extraClass);return s&&n.classList.add(...s.split(" ")),n}_typeCheckConfig(t){super._typeCheckConfig(t),this._checkContent(t.content)}_checkContent(t){for(const[n,s]of Object.entries(t))super._typeCheckConfig({selector:n,entry:s},Zp)}_setContent(t,n,s){const i=te.findOne(s,t);if(i){if(n=this._resolvePossibleFunction(n),!n){i.remove();return}if(bt(n)){this._putElementInTemplate(Rt(n),i);return}if(this._config.html){i.innerHTML=this._maybeSanitize(n);return}i.textContent=n}}_maybeSanitize(t){return this._config.sanitize?Yp(t,this._config.allowList,this._config.sanitizeFn):t}_resolvePossibleFunction(t){return typeof t=="function"?t(this):t}_putElementInTemplate(t,n){if(this._config.html){n.innerHTML="",n.append(t);return}n.textContent=t.textContent}}const th="tooltip",nh=new Set(["sanitize","allowList","sanitizeFn"]),Di="fade",sh="modal",Ts="show",ih=".tooltip-inner",jr=`.${sh}`,qr="hide.bs.modal",Hn="hover",Mi="focus",oh="click",rh="manual",ah="hide",lh="hidden",ch="show",uh="shown",dh="inserted",fh="click",ph="focusin",hh="focusout",mh="mouseenter",gh="mouseleave",_h={AUTO:"auto",TOP:"top",RIGHT:Ye()?"left":"right",BOTTOM:"bottom",LEFT:Ye()?"right":"left"},bh={allowList:Gl,animation:!0,boundary:"clippingParents",container:!1,customClass:"",delay:0,fallbackPlacements:["top","right","bottom","left"],html:!1,offset:[0,0],placement:"top",popperConfig:null,sanitize:!0,sanitizeFn:null,selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',title:"",trigger:"hover focus"},vh={allowList:"object",animation:"boolean",boundary:"(string|element)",container:"(string|element|boolean)",customClass:"(string|function)",delay:"(number|object)",fallbackPlacements:"array",html:"boolean",offset:"(array|string|function)",placement:"(string|function)",popperConfig:"(null|object|function)",sanitize:"boolean",sanitizeFn:"(null|function)",selector:"(string|boolean)",template:"string",title:"(string|element|function)",trigger:"string"};class Rn extends st{constructor(t,n){if(typeof yl>"u")throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");super(t,n),this._isEnabled=!0,this._timeout=0,this._isHovered=null,this._activeTrigger={},this._popper=null,this._templateFactory=null,this._newContent=null,this.tip=null,this._setListeners(),this._config.selector||this._fixTitle()}static get Default(){return bh}static get DefaultType(){return vh}static get NAME(){return th}enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}toggleEnabled(){this._isEnabled=!this._isEnabled}toggle(){if(this._isEnabled){if(this._activeTrigger.click=!this._activeTrigger.click,this._isShown()){this._leave();return}this._enter()}}dispose(){clearTimeout(this._timeout),B.off(this._element.closest(jr),qr,this._hideModalHandler),this._element.getAttribute("data-bs-original-title")&&this._element.setAttribute("title",this._element.getAttribute("data-bs-original-title")),this._disposePopper(),super.dispose()}show(){if(this._element.style.display==="none")throw new Error("Please use show on visible elements");if(!(this._isWithContent()&&this._isEnabled))return;const t=B.trigger(this._element,this.constructor.eventName(ch)),s=(Tl(this._element)||this._element.ownerDocument.documentElement).contains(this._element);if(t.defaultPrevented||!s)return;this._disposePopper();const i=this._getTipElement();this._element.setAttribute("aria-describedby",i.getAttribute("id"));const{container:o}=this._config;if(this._element.ownerDocument.documentElement.contains(this.tip)||(o.append(i),B.trigger(this._element,this.constructor.eventName(dh))),this._popper=this._createPopper(i),i.classList.add(Ts),"ontouchstart"in document.documentElement)for(const a of[].concat(...document.body.children))B.on(a,"mouseover",Us);const r=()=>{B.trigger(this._element,this.constructor.eventName(uh)),this._isHovered===!1&&this._leave(),this._isHovered=!1};this._queueCallback(r,this.tip,this._isAnimated())}hide(){if(!this._isShown()||B.trigger(this._element,this.constructor.eventName(ah)).defaultPrevented)return;if(this._getTipElement().classList.remove(Ts),"ontouchstart"in document.documentElement)for(const i of[].concat(...document.body.children))B.off(i,"mouseover",Us);this._activeTrigger[oh]=!1,this._activeTrigger[Mi]=!1,this._activeTrigger[Hn]=!1,this._isHovered=null;const s=()=>{this._isWithActiveTrigger()||(this._isHovered||this._disposePopper(),this._element.removeAttribute("aria-describedby"),B.trigger(this._element,this.constructor.eventName(lh)))};this._queueCallback(s,this.tip,this._isAnimated())}update(){this._popper&&this._popper.update()}_isWithContent(){return!!this._getTitle()}_getTipElement(){return this.tip||(this.tip=this._createTipElement(this._newContent||this._getContentForTemplate())),this.tip}_createTipElement(t){const n=this._getTemplateFactory(t).toHtml();if(!n)return null;n.classList.remove(Di,Ts),n.classList.add(`bs-${this.constructor.NAME}-auto`);const s=sd(this.constructor.NAME).toString();return n.setAttribute("id",s),this._isAnimated()&&n.classList.add(Di),n}setContent(t){this._newContent=t,this._isShown()&&(this._disposePopper(),this.show())}_getTemplateFactory(t){return this._templateFactory?this._templateFactory.changeContent(t):this._templateFactory=new eh({...this._config,content:t,extraClass:this._resolvePossibleFunction(this._config.customClass)}),this._templateFactory}_getContentForTemplate(){return{[ih]:this._getTitle()}}_getTitle(){return this._resolvePossibleFunction(this._config.title)||this._element.getAttribute("data-bs-original-title")}_initializeOnDelegatedTarget(t){return this.constructor.getOrCreateInstance(t.delegateTarget,this._getDelegateConfig())}_isAnimated(){return this._config.animation||this.tip&&this.tip.classList.contains(Di)}_isShown(){return this.tip&&this.tip.classList.contains(Ts)}_createPopper(t){const n=typeof this._config.placement=="function"?this._config.placement.call(this,t,this._element):this._config.placement,s=_h[n.toUpperCase()];return Lo(this._element,t,this._getPopperConfig(s))}_getOffset(){const{offset:t}=this._config;return typeof t=="string"?t.split(",").map(n=>Number.parseInt(n,10)):typeof t=="function"?n=>t(n,this._element):t}_resolvePossibleFunction(t){return typeof t=="function"?t.call(this._element):t}_getPopperConfig(t){const n={placement:t,modifiers:[{name:"flip",options:{fallbackPlacements:this._config.fallbackPlacements}},{name:"offset",options:{offset:this._getOffset()}},{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"arrow",options:{element:`.${this.constructor.NAME}-arrow`}},{name:"preSetPlacement",enabled:!0,phase:"beforeMain",fn:s=>{this._getTipElement().setAttribute("data-popper-placement",s.state.placement)}}]};return{...n,...typeof this._config.popperConfig=="function"?this._config.popperConfig(n):this._config.popperConfig}}_setListeners(){const t=this._config.trigger.split(" ");for(const n of t)if(n==="click")B.on(this._element,this.constructor.eventName(fh),this._config.selector,s=>{this._initializeOnDelegatedTarget(s).toggle()});else if(n!==rh){const s=n===Hn?this.constructor.eventName(mh):this.constructor.eventName(ph),i=n===Hn?this.constructor.eventName(gh):this.constructor.eventName(hh);B.on(this._element,s,this._config.selector,o=>{const r=this._initializeOnDelegatedTarget(o);r._activeTrigger[o.type==="focusin"?Mi:Hn]=!0,r._enter()}),B.on(this._element,i,this._config.selector,o=>{const r=this._initializeOnDelegatedTarget(o);r._activeTrigger[o.type==="focusout"?Mi:Hn]=r._element.contains(o.relatedTarget),r._leave()})}this._hideModalHandler=()=>{this._element&&this.hide()},B.on(this._element.closest(jr),qr,this._hideModalHandler)}_fixTitle(){const t=this._element.getAttribute("title");t&&(!this._element.getAttribute("aria-label")&&!this._element.textContent.trim()&&this._element.setAttribute("aria-label",t),this._element.setAttribute("data-bs-original-title",t),this._element.removeAttribute("title"))}_enter(){if(this._isShown()||this._isHovered){this._isHovered=!0;return}this._isHovered=!0,this._setTimeout(()=>{this._isHovered&&this.show()},this._config.delay.show)}_leave(){this._isWithActiveTrigger()||(this._isHovered=!1,this._setTimeout(()=>{this._isHovered||this.hide()},this._config.delay.hide))}_setTimeout(t,n){clearTimeout(this._timeout),this._timeout=setTimeout(t,n)}_isWithActiveTrigger(){return Object.values(this._activeTrigger).includes(!0)}_getConfig(t){const n=vt.getDataAttributes(this._element);for(const s of Object.keys(n))nh.has(s)&&delete n[s];return t={...n,...typeof t=="object"&&t?t:{}},t=this._mergeConfigObj(t),t=this._configAfterMerge(t),this._typeCheckConfig(t),t}_configAfterMerge(t){return t.container=t.container===!1?document.body:Rt(t.container),typeof t.delay=="number"&&(t.delay={show:t.delay,hide:t.delay}),typeof t.title=="number"&&(t.title=t.title.toString()),typeof t.content=="number"&&(t.content=t.content.toString()),t}_getDelegateConfig(){const t={};for(const n in this._config)this.constructor.Default[n]!==this._config[n]&&(t[n]=this._config[n]);return t.selector=!1,t.trigger="manual",t}_disposePopper(){this._popper&&(this._popper.destroy(),this._popper=null),this.tip&&(this.tip.remove(),this.tip=null)}static jQueryInterface(t){return this.each(function(){const n=Rn.getOrCreateInstance(this,t);if(typeof t=="string"){if(typeof n[t]>"u")throw new TypeError(`No method named "${t}"`);n[t]()}})}}Xe(Rn);const yh="popover",wh=".popover-header",kh=".popover-body",Eh={...Rn.Default,content:"",offset:[0,8],placement:"right",template:'<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',trigger:"click"},Th={...Rn.DefaultType,content:"(null|string|element|function)"};class Vo extends Rn{static get Default(){return Eh}static get DefaultType(){return Th}static get NAME(){return yh}_isWithContent(){return this._getTitle()||this._getContent()}_getContentForTemplate(){return{[wh]:this._getTitle(),[kh]:this._getContent()}}_getContent(){return this._resolvePossibleFunction(this._config.content)}static jQueryInterface(t){return this.each(function(){const n=Vo.getOrCreateInstance(this,t);if(typeof t=="string"){if(typeof n[t]>"u")throw new TypeError(`No method named "${t}"`);n[t]()}})}}Xe(Vo);const Sh="scrollspy",Ah="bs.scrollspy",Ho=`.${Ah}`,xh=".data-api",Ch=`activate${Ho}`,zr=`click${Ho}`,Ph=`load${Ho}${xh}`,Ih="dropdown-item",ln="active",Oh='[data-bs-spy="scroll"]',Li="[href]",Nh=".nav, .list-group",Kr=".nav-link",Bh=".nav-item",Rh=".list-group-item",Dh=`${Kr}, ${Bh} > ${Kr}, ${Rh}`,Mh=".dropdown",Lh=".dropdown-toggle",$h={offset:null,rootMargin:"0px 0px -25%",smoothScroll:!1,target:null,threshold:[.1,.5,1]},Wh={offset:"(number|null)",rootMargin:"string",smoothScroll:"boolean",target:"element",threshold:"array"};class li extends st{constructor(t,n){super(t,n),this._targetLinks=new Map,this._observableSections=new Map,this._rootElement=getComputedStyle(this._element).overflowY==="visible"?null:this._element,this._activeTarget=null,this._observer=null,this._previousScrollData={visibleEntryTop:0,parentScrollTop:0},this.refresh()}static get Default(){return $h}static get DefaultType(){return Wh}static get NAME(){return Sh}refresh(){this._initializeTargetsAndObservables(),this._maybeEnableSmoothScroll(),this._observer?this._observer.disconnect():this._observer=this._getNewObserver();for(const t of this._observableSections.values())this._observer.observe(t)}dispose(){this._observer.disconnect(),super.dispose()}_configAfterMerge(t){return t.target=Rt(t.target)||document.body,t.rootMargin=t.offset?`${t.offset}px 0px -30%`:t.rootMargin,typeof t.threshold=="string"&&(t.threshold=t.threshold.split(",").map(n=>Number.parseFloat(n))),t}_maybeEnableSmoothScroll(){this._config.smoothScroll&&(B.off(this._config.target,zr),B.on(this._config.target,zr,Li,t=>{const n=this._observableSections.get(t.target.hash);if(n){t.preventDefault();const s=this._rootElement||window,i=n.offsetTop-this._element.offsetTop;if(s.scrollTo){s.scrollTo({top:i,behavior:"smooth"});return}s.scrollTop=i}}))}_getNewObserver(){const t={root:this._rootElement,threshold:this._config.threshold,rootMargin:this._config.rootMargin};return new IntersectionObserver(n=>this._observerCallback(n),t)}_observerCallback(t){const n=r=>this._targetLinks.get(`#${r.target.id}`),s=r=>{this._previousScrollData.visibleEntryTop=r.target.offsetTop,this._process(n(r))},i=(this._rootElement||document.documentElement).scrollTop,o=i>=this._previousScrollData.parentScrollTop;this._previousScrollData.parentScrollTop=i;for(const r of t){if(!r.isIntersecting){this._activeTarget=null,this._clearActiveClass(n(r));continue}const a=r.target.offsetTop>=this._previousScrollData.visibleEntryTop;if(o&&a){if(s(r),!i)return;continue}!o&&!a&&s(r)}}_initializeTargetsAndObservables(){this._targetLinks=new Map,this._observableSections=new Map;const t=te.find(Li,this._config.target);for(const n of t){if(!n.hash||Dt(n))continue;const s=te.findOne(n.hash,this._element);Nn(s)&&(this._targetLinks.set(n.hash,n),this._observableSections.set(n.hash,s))}}_process(t){this._activeTarget!==t&&(this._clearActiveClass(this._config.target),this._activeTarget=t,t.classList.add(ln),this._activateParents(t),B.trigger(this._element,Ch,{relatedTarget:t}))}_activateParents(t){if(t.classList.contains(Ih)){te.findOne(Lh,t.closest(Mh)).classList.add(ln);return}for(const n of te.parents(t,Nh))for(const s of te.prev(n,Dh))s.classList.add(ln)}_clearActiveClass(t){t.classList.remove(ln);const n=te.find(`${Li}.${ln}`,t);for(const s of n)s.classList.remove(ln)}static jQueryInterface(t){return this.each(function(){const n=li.getOrCreateInstance(this,t);if(typeof t=="string"){if(n[t]===void 0||t.startsWith("_")||t==="constructor")throw new TypeError(`No method named "${t}"`);n[t]()}})}}B.on(window,Ph,()=>{for(const e of te.find(Oh))li.getOrCreateInstance(e)});Xe(li);const Fh="tab",Vh="bs.tab",on=`.${Vh}`,Hh=`hide${on}`,Uh=`hidden${on}`,jh=`show${on}`,qh=`shown${on}`,zh=`click${on}`,Kh=`keydown${on}`,Gh=`load${on}`,Yh="ArrowLeft",Gr="ArrowRight",Xh="ArrowUp",Yr="ArrowDown",Yt="active",Xr="fade",$i="show",Qh="dropdown",Jh=".dropdown-toggle",Zh=".dropdown-menu",Wi=":not(.dropdown-toggle)",em='.list-group, .nav, [role="tablist"]',tm=".nav-item, .list-group-item",nm=`.nav-link${Wi}, .list-group-item${Wi}, [role="tab"]${Wi}`,Yl='[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',Fi=`${nm}, ${Yl}`,sm=`.${Yt}[data-bs-toggle="tab"], .${Yt}[data-bs-toggle="pill"], .${Yt}[data-bs-toggle="list"]`;class Sn extends st{constructor(t){super(t),this._parent=this._element.closest(em),this._parent&&(this._setInitialAttributes(this._parent,this._getChildren()),B.on(this._element,Kh,n=>this._keydown(n)))}static get NAME(){return Fh}show(){const t=this._element;if(this._elemIsActive(t))return;const n=this._getActiveElem(),s=n?B.trigger(n,Hh,{relatedTarget:t}):null;B.trigger(t,jh,{relatedTarget:n}).defaultPrevented||s&&s.defaultPrevented||(this._deactivate(n,t),this._activate(t,n))}_activate(t,n){if(!t)return;t.classList.add(Yt),this._activate(_t(t));const s=()=>{if(t.getAttribute("role")!=="tab"){t.classList.add($i);return}t.removeAttribute("tabindex"),t.setAttribute("aria-selected",!0),this._toggleDropDown(t,!0),B.trigger(t,qh,{relatedTarget:n})};this._queueCallback(s,t,t.classList.contains(Xr))}_deactivate(t,n){if(!t)return;t.classList.remove(Yt),t.blur(),this._deactivate(_t(t));const s=()=>{if(t.getAttribute("role")!=="tab"){t.classList.remove($i);return}t.setAttribute("aria-selected",!1),t.setAttribute("tabindex","-1"),this._toggleDropDown(t,!1),B.trigger(t,Uh,{relatedTarget:n})};this._queueCallback(s,t,t.classList.contains(Xr))}_keydown(t){if(![Yh,Gr,Xh,Yr].includes(t.key))return;t.stopPropagation(),t.preventDefault();const n=[Gr,Yr].includes(t.key),s=$o(this._getChildren().filter(i=>!Dt(i)),t.target,n,!0);s&&(s.focus({preventScroll:!0}),Sn.getOrCreateInstance(s).show())}_getChildren(){return te.find(Fi,this._parent)}_getActiveElem(){return this._getChildren().find(t=>this._elemIsActive(t))||null}_setInitialAttributes(t,n){this._setAttributeIfNotExists(t,"role","tablist");for(const s of n)this._setInitialAttributesOnChild(s)}_setInitialAttributesOnChild(t){t=this._getInnerElement(t);const n=this._elemIsActive(t),s=this._getOuterElement(t);t.setAttribute("aria-selected",n),s!==t&&this._setAttributeIfNotExists(s,"role","presentation"),n||t.setAttribute("tabindex","-1"),this._setAttributeIfNotExists(t,"role","tab"),this._setInitialAttributesOnTargetPanel(t)}_setInitialAttributesOnTargetPanel(t){const n=_t(t);n&&(this._setAttributeIfNotExists(n,"role","tabpanel"),t.id&&this._setAttributeIfNotExists(n,"aria-labelledby",`#${t.id}`))}_toggleDropDown(t,n){const s=this._getOuterElement(t);if(!s.classList.contains(Qh))return;const i=(o,r)=>{const a=te.findOne(o,s);a&&a.classList.toggle(r,n)};i(Jh,Yt),i(Zh,$i),s.setAttribute("aria-expanded",n)}_setAttributeIfNotExists(t,n,s){t.hasAttribute(n)||t.setAttribute(n,s)}_elemIsActive(t){return t.classList.contains(Yt)}_getInnerElement(t){return t.matches(Fi)?t:te.findOne(Fi,t)}_getOuterElement(t){return t.closest(tm)||t}static jQueryInterface(t){return this.each(function(){const n=Sn.getOrCreateInstance(this);if(typeof t=="string"){if(n[t]===void 0||t.startsWith("_")||t==="constructor")throw new TypeError(`No method named "${t}"`);n[t]()}})}}B.on(document,zh,Yl,function(e){["A","AREA"].includes(this.tagName)&&e.preventDefault(),!Dt(this)&&Sn.getOrCreateInstance(this).show()});B.on(window,Gh,()=>{for(const e of te.find(sm))Sn.getOrCreateInstance(e)});Xe(Sn);const im="toast",om="bs.toast",Vt=`.${om}`,rm=`mouseover${Vt}`,am=`mouseout${Vt}`,lm=`focusin${Vt}`,cm=`focusout${Vt}`,um=`hide${Vt}`,dm=`hidden${Vt}`,fm=`show${Vt}`,pm=`shown${Vt}`,hm="fade",Qr="hide",Ss="show",As="showing",mm={animation:"boolean",autohide:"boolean",delay:"number"},gm={animation:!0,autohide:!0,delay:5e3};class ci extends st{constructor(t,n){super(t,n),this._timeout=null,this._hasMouseInteraction=!1,this._hasKeyboardInteraction=!1,this._setListeners()}static get Default(){return gm}static get DefaultType(){return mm}static get NAME(){return im}show(){if(B.trigger(this._element,fm).defaultPrevented)return;this._clearTimeout(),this._config.animation&&this._element.classList.add(hm);const n=()=>{this._element.classList.remove(As),B.trigger(this._element,pm),this._maybeScheduleHide()};this._element.classList.remove(Qr),ps(this._element),this._element.classList.add(Ss,As),this._queueCallback(n,this._element,this._config.animation)}hide(){if(!this.isShown()||B.trigger(this._element,um).defaultPrevented)return;const n=()=>{this._element.classList.add(Qr),this._element.classList.remove(As,Ss),B.trigger(this._element,dm)};this._element.classList.add(As),this._queueCallback(n,this._element,this._config.animation)}dispose(){this._clearTimeout(),this.isShown()&&this._element.classList.remove(Ss),super.dispose()}isShown(){return this._element.classList.contains(Ss)}_maybeScheduleHide(){this._config.autohide&&(this._hasMouseInteraction||this._hasKeyboardInteraction||(this._timeout=setTimeout(()=>{this.hide()},this._config.delay)))}_onInteraction(t,n){switch(t.type){case"mouseover":case"mouseout":{this._hasMouseInteraction=n;break}case"focusin":case"focusout":{this._hasKeyboardInteraction=n;break}}if(n){this._clearTimeout();return}const s=t.relatedTarget;this._element===s||this._element.contains(s)||this._maybeScheduleHide()}_setListeners(){B.on(this._element,rm,t=>this._onInteraction(t,!0)),B.on(this._element,am,t=>this._onInteraction(t,!1)),B.on(this._element,lm,t=>this._onInteraction(t,!0)),B.on(this._element,cm,t=>this._onInteraction(t,!1))}_clearTimeout(){clearTimeout(this._timeout),this._timeout=null}static jQueryInterface(t){return this.each(function(){const n=ci.getOrCreateInstance(this,t);if(typeof t=="string"){if(typeof n[t]>"u")throw new TypeError(`No method named "${t}"`);n[t](this)}})}}oi(ci);Xe(ci);var Jr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function _m(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Xl={exports:{}};(function(e){var t=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{};/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */var n=function(s){var i=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,o=0,r={},a={manual:s.Prism&&s.Prism.manual,disableWorkerMessageHandler:s.Prism&&s.Prism.disableWorkerMessageHandler,util:{encode:function m(_){return _ instanceof l?new l(_.type,m(_.content),_.alias):Array.isArray(_)?_.map(m):_.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(m){return Object.prototype.toString.call(m).slice(8,-1)},objId:function(m){return m.__id||Object.defineProperty(m,"__id",{value:++o}),m.__id},clone:function m(_,b){b=b||{};var y,S;switch(a.util.type(_)){case"Object":if(S=a.util.objId(_),b[S])return b[S];y={},b[S]=y;for(var R in _)_.hasOwnProperty(R)&&(y[R]=m(_[R],b));return y;case"Array":return S=a.util.objId(_),b[S]?b[S]:(y=[],b[S]=y,_.forEach(function(L,I){y[I]=m(L,b)}),y);default:return _}},getLanguage:function(m){for(;m;){var _=i.exec(m.className);if(_)return _[1].toLowerCase();m=m.parentElement}return"none"},setLanguage:function(m,_){m.className=m.className.replace(RegExp(i,"gi"),""),m.classList.add("language-"+_)},currentScript:function(){if(typeof document>"u")return null;if("currentScript"in document&&1<2)return document.currentScript;try{throw new Error}catch(y){var m=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(y.stack)||[])[1];if(m){var _=document.getElementsByTagName("script");for(var b in _)if(_[b].src==m)return _[b]}return null}},isActive:function(m,_,b){for(var y="no-"+_;m;){var S=m.classList;if(S.contains(_))return!0;if(S.contains(y))return!1;m=m.parentElement}return!!b}},languages:{plain:r,plaintext:r,text:r,txt:r,extend:function(m,_){var b=a.util.clone(a.languages[m]);for(var y in _)b[y]=_[y];return b},insertBefore:function(m,_,b,y){y=y||a.languages;var S=y[m],R={};for(var L in S)if(S.hasOwnProperty(L)){if(L==_)for(var I in b)b.hasOwnProperty(I)&&(R[I]=b[I]);b.hasOwnProperty(L)||(R[L]=S[L])}var U=y[m];return y[m]=R,a.languages.DFS(a.languages,function(X,ie){ie===U&&X!=m&&(this[X]=R)}),R},DFS:function m(_,b,y,S){S=S||{};var R=a.util.objId;for(var L in _)if(_.hasOwnProperty(L)){b.call(_,L,_[L],y||L);var I=_[L],U=a.util.type(I);U==="Object"&&!S[R(I)]?(S[R(I)]=!0,m(I,b,null,S)):U==="Array"&&!S[R(I)]&&(S[R(I)]=!0,m(I,b,L,S))}}},plugins:{},highlightAll:function(m,_){a.highlightAllUnder(document,m,_)},highlightAllUnder:function(m,_,b){var y={callback:b,container:m,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};a.hooks.run("before-highlightall",y),y.elements=Array.prototype.slice.apply(y.container.querySelectorAll(y.selector)),a.hooks.run("before-all-elements-highlight",y);for(var S=0,R;R=y.elements[S++];)a.highlightElement(R,_===!0,y.callback)},highlightElement:function(m,_,b){var y=a.util.getLanguage(m),S=a.languages[y];a.util.setLanguage(m,y);var R=m.parentElement;R&&R.nodeName.toLowerCase()==="pre"&&a.util.setLanguage(R,y);var L=m.textContent,I={element:m,language:y,grammar:S,code:L};function U(ie){I.highlightedCode=ie,a.hooks.run("before-insert",I),I.element.innerHTML=I.highlightedCode,a.hooks.run("after-highlight",I),a.hooks.run("complete",I),b&&b.call(I.element)}if(a.hooks.run("before-sanity-check",I),R=I.element.parentElement,R&&R.nodeName.toLowerCase()==="pre"&&!R.hasAttribute("tabindex")&&R.setAttribute("tabindex","0"),!I.code){a.hooks.run("complete",I),b&&b.call(I.element);return}if(a.hooks.run("before-highlight",I),!I.grammar){U(a.util.encode(I.code));return}if(_&&s.Worker){var X=new Worker(a.filename);X.onmessage=function(ie){U(ie.data)},X.postMessage(JSON.stringify({language:I.language,code:I.code,immediateClose:!0}))}else U(a.highlight(I.code,I.grammar,I.language))},highlight:function(m,_,b){var y={code:m,grammar:_,language:b};if(a.hooks.run("before-tokenize",y),!y.grammar)throw new Error('The language "'+y.language+'" has no grammar.');return y.tokens=a.tokenize(y.code,y.grammar),a.hooks.run("after-tokenize",y),l.stringify(a.util.encode(y.tokens),y.language)},tokenize:function(m,_){var b=_.rest;if(b){for(var y in b)_[y]=b[y];delete _.rest}var S=new d;return p(S,S.head,m),u(m,S,_,S.head,0),P(S)},hooks:{all:{},add:function(m,_){var b=a.hooks.all;b[m]=b[m]||[],b[m].push(_)},run:function(m,_){var b=a.hooks.all[m];if(!(!b||!b.length))for(var y=0,S;S=b[y++];)S(_)}},Token:l};s.Prism=a;function l(m,_,b,y){this.type=m,this.content=_,this.alias=b,this.length=(y||"").length|0}l.stringify=function m(_,b){if(typeof _=="string")return _;if(Array.isArray(_)){var y="";return _.forEach(function(U){y+=m(U,b)}),y}var S={type:_.type,content:m(_.content,b),tag:"span",classes:["token",_.type],attributes:{},language:b},R=_.alias;R&&(Array.isArray(R)?Array.prototype.push.apply(S.classes,R):S.classes.push(R)),a.hooks.run("wrap",S);var L="";for(var I in S.attributes)L+=" "+I+'="'+(S.attributes[I]||"").replace(/"/g,"&quot;")+'"';return"<"+S.tag+' class="'+S.classes.join(" ")+'"'+L+">"+S.content+"</"+S.tag+">"};function c(m,_,b,y){m.lastIndex=_;var S=m.exec(b);if(S&&y&&S[1]){var R=S[1].length;S.index+=R,S[0]=S[0].slice(R)}return S}function u(m,_,b,y,S,R){for(var L in b)if(!(!b.hasOwnProperty(L)||!b[L])){var I=b[L];I=Array.isArray(I)?I:[I];for(var U=0;U<I.length;++U){if(R&&R.cause==L+","+U)return;var X=I[U],ie=X.inside,ue=!!X.lookbehind,Ce=!!X.greedy,ve=X.alias;if(Ce&&!X.pattern.global){var Q=X.pattern.toString().match(/[imsuy]*$/)[0];X.pattern=RegExp(X.pattern.source,Q+"g")}for(var Z=X.pattern||X,G=y.next,me=S;G!==_.tail&&!(R&&me>=R.reach);me+=G.value.length,G=G.next){var ke=G.value;if(_.length>m.length)return;if(!(ke instanceof l)){var Ae=1,ce;if(Ce){if(ce=c(Z,me,m,ue),!ce||ce.index>=m.length)break;var ge=ce.index,Ve=ce.index+ce[0].length,ye=me;for(ye+=G.value.length;ge>=ye;)G=G.next,ye+=G.value.length;if(ye-=G.value.length,me=ye,G.value instanceof l)continue;for(var xe=G;xe!==_.tail&&(ye<Ve||typeof xe.value=="string");xe=xe.next)Ae++,ye+=xe.value.length;Ae--,ke=m.slice(me,ye),ce.index-=me}else if(ce=c(Z,0,ke,ue),!ce)continue;var ge=ce.index,E=ce[0],W=ke.slice(0,ge),$=ke.slice(ge+E.length),q=me+ke.length;R&&q>R.reach&&(R.reach=q);var ne=G.prev;W&&(ne=p(_,ne,W),me+=W.length),g(_,ne,Ae);var f=new l(L,ie?a.tokenize(E,ie):E,ve,E);if(G=p(_,ne,f),$&&p(_,G,$),Ae>1){var h={cause:L+","+U,reach:q};u(m,_,b,G.prev,me,h),R&&h.reach>R.reach&&(R.reach=h.reach)}}}}}}function d(){var m={value:null,prev:null,next:null},_={value:null,prev:m,next:null};m.next=_,this.head=m,this.tail=_,this.length=0}function p(m,_,b){var y=_.next,S={value:b,prev:_,next:y};return _.next=S,y.prev=S,m.length++,S}function g(m,_,b){for(var y=_.next,S=0;S<b&&y!==m.tail;S++)y=y.next;_.next=y,y.prev=_,m.length-=S}function P(m){for(var _=[],b=m.head.next;b!==m.tail;)_.push(b.value),b=b.next;return _}if(!s.document)return s.addEventListener&&(a.disableWorkerMessageHandler||s.addEventListener("message",function(m){var _=JSON.parse(m.data),b=_.language,y=_.code,S=_.immediateClose;s.postMessage(a.highlight(y,a.languages[b],b)),S&&s.close()},!1)),a;var k=a.util.currentScript();k&&(a.filename=k.src,k.hasAttribute("data-manual")&&(a.manual=!0));function A(){a.manual||a.highlightAll()}if(!a.manual){var C=document.readyState;C==="loading"||C==="interactive"&&k&&k.defer?document.addEventListener("DOMContentLoaded",A):window.requestAnimationFrame?window.requestAnimationFrame(A):window.setTimeout(A,16)}return a}(t);e.exports&&(e.exports=n),typeof Jr<"u"&&(Jr.Prism=n),n.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},n.languages.markup.tag.inside["attr-value"].inside.entity=n.languages.markup.entity,n.languages.markup.doctype.inside["internal-subset"].inside=n.languages.markup,n.hooks.add("wrap",function(s){s.type==="entity"&&(s.attributes.title=s.content.replace(/&amp;/,"&"))}),Object.defineProperty(n.languages.markup.tag,"addInlined",{value:function(i,o){var r={};r["language-"+o]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:n.languages[o]},r.cdata=/^<!\[CDATA\[|\]\]>$/i;var a={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:r}};a["language-"+o]={pattern:/[\s\S]+/,inside:n.languages[o]};var l={};l[i]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return i}),"i"),lookbehind:!0,greedy:!0,inside:a},n.languages.insertBefore("markup","cdata",l)}}),Object.defineProperty(n.languages.markup.tag,"addAttribute",{value:function(s,i){n.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+s+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[i,"language-"+i],inside:n.languages[i]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),n.languages.html=n.languages.markup,n.languages.mathml=n.languages.markup,n.languages.svg=n.languages.markup,n.languages.xml=n.languages.extend("markup",{}),n.languages.ssml=n.languages.xml,n.languages.atom=n.languages.xml,n.languages.rss=n.languages.xml,function(s){var i=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;s.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+i.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+i.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+i.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+i.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:i,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},s.languages.css.atrule.inside.rest=s.languages.css;var o=s.languages.markup;o&&(o.tag.addInlined("style","css"),o.tag.addAttribute("style","css"))}(n),n.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},n.languages.javascript=n.languages.extend("clike",{"class-name":[n.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),n.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,n.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:n.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:n.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:n.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:n.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:n.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),n.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:n.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),n.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),n.languages.markup&&(n.languages.markup.tag.addInlined("script","javascript"),n.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),n.languages.js=n.languages.javascript,function(){if(typeof n>"u"||typeof document>"u")return;Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var s="Loading…",i=function(k,A){return"✖ Error "+k+" while fetching file: "+A},o="✖ Error: File does not exist or is empty",r={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},a="data-src-status",l="loading",c="loaded",u="failed",d="pre[data-src]:not(["+a+'="'+c+'"]):not(['+a+'="'+l+'"])';function p(k,A,C){var m=new XMLHttpRequest;m.open("GET",k,!0),m.onreadystatechange=function(){m.readyState==4&&(m.status<400&&m.responseText?A(m.responseText):m.status>=400?C(i(m.status,m.statusText)):C(o))},m.send(null)}function g(k){var A=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(k||"");if(A){var C=Number(A[1]),m=A[2],_=A[3];return m?_?[C,Number(_)]:[C,void 0]:[C,C]}}n.hooks.add("before-highlightall",function(k){k.selector+=", "+d}),n.hooks.add("before-sanity-check",function(k){var A=k.element;if(A.matches(d)){k.code="",A.setAttribute(a,l);var C=A.appendChild(document.createElement("CODE"));C.textContent=s;var m=A.getAttribute("data-src"),_=k.language;if(_==="none"){var b=(/\.(\w+)$/.exec(m)||[,"none"])[1];_=r[b]||b}n.util.setLanguage(C,_),n.util.setLanguage(A,_);var y=n.plugins.autoloader;y&&y.loadLanguages(_),p(m,function(S){A.setAttribute(a,c);var R=g(A.getAttribute("data-range"));if(R){var L=S.split(/\r\n?|\n/g),I=R[0],U=R[1]==null?L.length:R[1];I<0&&(I+=L.length),I=Math.max(0,Math.min(I-1,L.length)),U<0&&(U+=L.length),U=Math.max(0,Math.min(U,L.length)),S=L.slice(I,U).join(`
`),A.hasAttribute("data-start")||A.setAttribute("data-start",String(I+1))}C.textContent=S,n.highlightElement(C)},function(S){A.setAttribute(a,u),C.textContent=S})}}),n.plugins.fileHighlight={highlight:function(A){for(var C=(A||document).querySelectorAll(d),m=0,_;_=C[m++];)n.highlightElement(_)}};var P=!1;n.fileHighlight=function(){P||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),P=!0),n.plugins.fileHighlight.highlight.apply(this,arguments)}}()})(Xl);var bm=Xl.exports;const Zr=_m(bm);Prism.languages.solidity=Prism.languages.extend("clike",{"class-name":{pattern:/(\b(?:contract|enum|interface|library|new|struct|using)\s+)(?!\d)[\w$]+/,lookbehind:!0},keyword:/\b(?:_|anonymous|as|assembly|assert|break|calldata|case|constant|constructor|continue|contract|default|delete|do|else|emit|enum|event|external|for|from|function|if|import|indexed|inherited|interface|internal|is|let|library|mapping|memory|modifier|new|payable|pragma|private|public|pure|require|returns?|revert|selfdestruct|solidity|storage|struct|suicide|switch|this|throw|using|var|view|while)\b/,operator:/=>|->|:=|=:|\*\*|\+\+|--|\|\||&&|<<=?|>>=?|[-+*/%^&|<>!=]=?|[~?]/});Prism.languages.insertBefore("solidity","keyword",{builtin:/\b(?:address|bool|byte|u?int(?:8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?|string|bytes(?:[1-9]|[12]\d|3[0-2])?)\b/});Prism.languages.insertBefore("solidity","number",{version:{pattern:/([<>]=?|\^)\d+\.\d+\.\d+\b/,lookbehind:!0,alias:"number"}});Prism.languages.sol=Prism.languages.solidity;var vm={exports:{}};(function(e){(function(){if(typeof Prism>"u")return;var t=Object.assign||function(r,a){for(var l in a)a.hasOwnProperty(l)&&(r[l]=a[l]);return r};function n(r){this.defaults=t({},r)}function s(r){return r.replace(/-(\w)/g,function(a,l){return l.toUpperCase()})}function i(r){for(var a=0,l=0;l<r.length;++l)r.charCodeAt(l)=="	".charCodeAt(0)&&(a+=3);return r.length+a}var o={"remove-trailing":"boolean","remove-indent":"boolean","left-trim":"boolean","right-trim":"boolean","break-lines":"number",indent:"number","remove-initial-line-feed":"boolean","tabs-to-spaces":"number","spaces-to-tabs":"number"};n.prototype={setDefaults:function(r){this.defaults=t(this.defaults,r)},normalize:function(r,a){a=t(this.defaults,a);for(var l in a){var c=s(l);l!=="normalize"&&c!=="setDefaults"&&a[l]&&this[c]&&(r=this[c].call(this,r,a[l]))}return r},leftTrim:function(r){return r.replace(/^\s+/,"")},rightTrim:function(r){return r.replace(/\s+$/,"")},tabsToSpaces:function(r,a){return a=a|0||4,r.replace(/\t/g,new Array(++a).join(" "))},spacesToTabs:function(r,a){return a=a|0||4,r.replace(RegExp(" {"+a+"}","g"),"	")},removeTrailing:function(r){return r.replace(/\s*?$/gm,"")},removeInitialLineFeed:function(r){return r.replace(/^(?:\r?\n|\r)/,"")},removeIndent:function(r){var a=r.match(/^[^\S\n\r]*(?=\S)/gm);return!a||!a[0].length||(a.sort(function(l,c){return l.length-c.length}),!a[0].length)?r:r.replace(RegExp("^"+a[0],"gm"),"")},indent:function(r,a){return r.replace(/^[^\S\n\r]*(?=\S)/gm,new Array(++a).join("	")+"$&")},breakLines:function(r,a){a=a===!0?80:a|0||80;for(var l=r.split(`
`),c=0;c<l.length;++c)if(!(i(l[c])<=a)){for(var u=l[c].split(/(\s+)/g),d=0,p=0;p<u.length;++p){var g=i(u[p]);d+=g,d>a&&(u[p]=`
`+u[p],d=g)}l[c]=u.join("")}return l.join(`
`)}},e.exports&&(e.exports=n),Prism.plugins.NormalizeWhitespace=new n({"remove-trailing":!0,"remove-indent":!0,"left-trim":!0,"right-trim":!0}),Prism.hooks.add("before-sanity-check",function(r){var a=Prism.plugins.NormalizeWhitespace;if(!(r.settings&&r.settings["whitespace-normalization"]===!1)&&Prism.util.isActive(r.element,"whitespace-normalization",!0)){if((!r.element||!r.element.parentNode)&&r.code){r.code=a.normalize(r.code,r.settings);return}var l=r.element.parentNode;if(!(!r.code||!l||l.nodeName.toLowerCase()!=="pre")){r.settings==null&&(r.settings={});for(var c in o)if(Object.hasOwnProperty.call(o,c)){var u=o[c];if(l.hasAttribute("data-"+c))try{var d=JSON.parse(l.getAttribute("data-"+c)||"true");typeof d===u&&(r.settings[c]=d)}catch{}}for(var p=l.childNodes,g="",P="",k=!1,A=0;A<p.length;++A){var C=p[A];C==r.element?k=!0:C.nodeName==="#text"&&(k?P+=C.nodeValue:g+=C.nodeValue,l.removeChild(C),--A)}if(!r.element.children.length||!Prism.plugins.KeepMarkup)r.code=g+r.code+P,r.code=a.normalize(r.code,r.settings);else{var m=g+r.element.innerHTML+P;r.element.innerHTML=a.normalize(m,r.settings),r.code=r.element.textContent}}}})})()})(vm);(function(){if(typeof Prism>"u"||typeof document>"u")return;var e="line-numbers",t=/\n(?!$)/g,n=Prism.plugins.lineNumbers={getLine:function(r,a){if(!(r.tagName!=="PRE"||!r.classList.contains(e))){var l=r.querySelector(".line-numbers-rows");if(l){var c=parseInt(r.getAttribute("data-start"),10)||1,u=c+(l.children.length-1);a<c&&(a=c),a>u&&(a=u);var d=a-c;return l.children[d]}}},resize:function(r){s([r])},assumeViewportIndependence:!0};function s(r){if(r=r.filter(function(l){var c=i(l),u=c["white-space"];return u==="pre-wrap"||u==="pre-line"}),r.length!=0){var a=r.map(function(l){var c=l.querySelector("code"),u=l.querySelector(".line-numbers-rows");if(!(!c||!u)){var d=l.querySelector(".line-numbers-sizer"),p=c.textContent.split(t);d||(d=document.createElement("span"),d.className="line-numbers-sizer",c.appendChild(d)),d.innerHTML="0",d.style.display="block";var g=d.getBoundingClientRect().height;return d.innerHTML="",{element:l,lines:p,lineHeights:[],oneLinerHeight:g,sizer:d}}}).filter(Boolean);a.forEach(function(l){var c=l.sizer,u=l.lines,d=l.lineHeights,p=l.oneLinerHeight;d[u.length-1]=void 0,u.forEach(function(g,P){if(g&&g.length>1){var k=c.appendChild(document.createElement("span"));k.style.display="block",k.textContent=g}else d[P]=p})}),a.forEach(function(l){for(var c=l.sizer,u=l.lineHeights,d=0,p=0;p<u.length;p++)u[p]===void 0&&(u[p]=c.children[d++].getBoundingClientRect().height)}),a.forEach(function(l){var c=l.sizer,u=l.element.querySelector(".line-numbers-rows");c.style.display="none",c.innerHTML="",l.lineHeights.forEach(function(d,p){u.children[p].style.height=d+"px"})})}}function i(r){return r?window.getComputedStyle?getComputedStyle(r):r.currentStyle||null:null}var o=void 0;window.addEventListener("resize",function(){n.assumeViewportIndependence&&o===window.innerWidth||(o=window.innerWidth,s(Array.prototype.slice.call(document.querySelectorAll("pre."+e))))}),Prism.hooks.add("complete",function(r){if(r.code){var a=r.element,l=a.parentNode;if(!(!l||!/pre/i.test(l.nodeName))&&!a.querySelector(".line-numbers-rows")&&Prism.util.isActive(a,e)){a.classList.remove(e),l.classList.add(e);var c=r.code.match(t),u=c?c.length+1:1,d,p=new Array(u+1).join("<span></span>");d=document.createElement("span"),d.setAttribute("aria-hidden","true"),d.className="line-numbers-rows",d.innerHTML=p,l.hasAttribute("data-start")&&(l.style.counterReset="linenumber "+(parseInt(l.getAttribute("data-start"),10)-1)),r.element.appendChild(d),s([l]),Prism.hooks.run("line-numbers",r)}}}),Prism.hooks.add("line-numbers",function(r){r.plugins=r.plugins||{},r.plugins.lineNumbers=!0})})();function Uo(e,t){const n=Object.create(null),s=e.split(",");for(let i=0;i<s.length;i++)n[s[i]]=!0;return t?i=>!!n[i.toLowerCase()]:i=>!!n[i]}const be={},gn=[],et=()=>{},ym=()=>!1,wm=/^on[^a-z]/,ui=e=>wm.test(e),jo=e=>e.startsWith("onUpdate:"),Oe=Object.assign,qo=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},km=Object.prototype.hasOwnProperty,ae=(e,t)=>km.call(e,t),Y=Array.isArray,_n=e=>_s(e)==="[object Map]",di=e=>_s(e)==="[object Set]",ea=e=>_s(e)==="[object Date]",ee=e=>typeof e=="function",Te=e=>typeof e=="string",ss=e=>typeof e=="symbol",_e=e=>e!==null&&typeof e=="object",Ql=e=>_e(e)&&ee(e.then)&&ee(e.catch),Jl=Object.prototype.toString,_s=e=>Jl.call(e),Em=e=>_s(e).slice(8,-1),Zl=e=>_s(e)==="[object Object]",zo=e=>Te(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Ms=Uo(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),fi=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},Tm=/-(\w)/g,pt=fi(e=>e.replace(Tm,(t,n)=>n?n.toUpperCase():"")),Sm=/\B([A-Z])/g,Dn=fi(e=>e.replace(Sm,"-$1").toLowerCase()),pi=fi(e=>e.charAt(0).toUpperCase()+e.slice(1)),Vi=fi(e=>e?`on${pi(e)}`:""),is=(e,t)=>!Object.is(e,t),Ls=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},zs=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},Ks=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let ta;const lo=()=>ta||(ta=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function hi(e){if(Y(e)){const t={};for(let n=0;n<e.length;n++){const s=e[n],i=Te(s)?Pm(s):hi(s);if(i)for(const o in i)t[o]=i[o]}return t}else{if(Te(e))return e;if(_e(e))return e}}const Am=/;(?![^(]*\))/g,xm=/:([^]+)/,Cm=/\/\*[^]*?\*\//g;function Pm(e){const t={};return e.replace(Cm,"").split(Am).forEach(n=>{if(n){const s=n.split(xm);s.length>1&&(t[s[0].trim()]=s[1].trim())}}),t}function Mn(e){let t="";if(Te(e))t=e;else if(Y(e))for(let n=0;n<e.length;n++){const s=Mn(e[n]);s&&(t+=s+" ")}else if(_e(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Im="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Om=Uo(Im);function ec(e){return!!e||e===""}function Nm(e,t){if(e.length!==t.length)return!1;let n=!0;for(let s=0;n&&s<e.length;s++)n=mi(e[s],t[s]);return n}function mi(e,t){if(e===t)return!0;let n=ea(e),s=ea(t);if(n||s)return n&&s?e.getTime()===t.getTime():!1;if(n=ss(e),s=ss(t),n||s)return e===t;if(n=Y(e),s=Y(t),n||s)return n&&s?Nm(e,t):!1;if(n=_e(e),s=_e(t),n||s){if(!n||!s)return!1;const i=Object.keys(e).length,o=Object.keys(t).length;if(i!==o)return!1;for(const r in e){const a=e.hasOwnProperty(r),l=t.hasOwnProperty(r);if(a&&!l||!a&&l||!mi(e[r],t[r]))return!1}}return String(e)===String(t)}function Bm(e,t){return e.findIndex(n=>mi(n,t))}const re=e=>Te(e)?e:e==null?"":Y(e)||_e(e)&&(e.toString===Jl||!ee(e.toString))?JSON.stringify(e,tc,2):String(e),tc=(e,t)=>t&&t.__v_isRef?tc(e,t.value):_n(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[s,i])=>(n[`${s} =>`]=i,n),{})}:di(t)?{[`Set(${t.size})`]:[...t.values()]}:_e(t)&&!Y(t)&&!Zl(t)?String(t):t;let Ue;class nc{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Ue,!t&&Ue&&(this.index=(Ue.scopes||(Ue.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=Ue;try{return Ue=this,t()}finally{Ue=n}}}on(){Ue=this}off(){Ue=this.parent}stop(t){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function sc(e){return new nc(e)}function Rm(e,t=Ue){t&&t.active&&t.effects.push(e)}function ic(){return Ue}function Dm(e){Ue&&Ue.cleanups.push(e)}const Ko=e=>{const t=new Set(e);return t.w=0,t.n=0,t},oc=e=>(e.w&Lt)>0,rc=e=>(e.n&Lt)>0,Mm=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=Lt},Lm=e=>{const{deps:t}=e;if(t.length){let n=0;for(let s=0;s<t.length;s++){const i=t[s];oc(i)&&!rc(i)?i.delete(e):t[n++]=i,i.w&=~Lt,i.n&=~Lt}t.length=n}},Gs=new WeakMap;let qn=0,Lt=1;const co=30;let Je;const Jt=Symbol(""),uo=Symbol("");class Go{constructor(t,n=null,s){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Rm(this,s)}run(){if(!this.active)return this.fn();let t=Je,n=Ot;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=Je,Je=this,Ot=!0,Lt=1<<++qn,qn<=co?Mm(this):na(this),this.fn()}finally{qn<=co&&Lm(this),Lt=1<<--qn,Je=this.parent,Ot=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Je===this?this.deferStop=!0:this.active&&(na(this),this.onStop&&this.onStop(),this.active=!1)}}function na(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let Ot=!0;const ac=[];function Ln(){ac.push(Ot),Ot=!1}function $n(){const e=ac.pop();Ot=e===void 0?!0:e}function Fe(e,t,n){if(Ot&&Je){let s=Gs.get(e);s||Gs.set(e,s=new Map);let i=s.get(n);i||s.set(n,i=Ko()),lc(i)}}function lc(e,t){let n=!1;qn<=co?rc(e)||(e.n|=Lt,n=!oc(e)):n=!e.has(Je),n&&(e.add(Je),Je.deps.push(e))}function wt(e,t,n,s,i,o){const r=Gs.get(e);if(!r)return;let a=[];if(t==="clear")a=[...r.values()];else if(n==="length"&&Y(e)){const l=Number(s);r.forEach((c,u)=>{(u==="length"||u>=l)&&a.push(c)})}else switch(n!==void 0&&a.push(r.get(n)),t){case"add":Y(e)?zo(n)&&a.push(r.get("length")):(a.push(r.get(Jt)),_n(e)&&a.push(r.get(uo)));break;case"delete":Y(e)||(a.push(r.get(Jt)),_n(e)&&a.push(r.get(uo)));break;case"set":_n(e)&&a.push(r.get(Jt));break}if(a.length===1)a[0]&&fo(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);fo(Ko(l))}}function fo(e,t){const n=Y(e)?e:[...e];for(const s of n)s.computed&&sa(s);for(const s of n)s.computed||sa(s)}function sa(e,t){(e!==Je||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}function $m(e,t){var n;return(n=Gs.get(e))==null?void 0:n.get(t)}const Wm=Uo("__proto__,__v_isRef,__isVue"),cc=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(ss)),Fm=Yo(),Vm=Yo(!1,!0),Hm=Yo(!0),ia=Um();function Um(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const s=le(this);for(let o=0,r=this.length;o<r;o++)Fe(s,"get",o+"");const i=s[t](...n);return i===-1||i===!1?s[t](...n.map(le)):i}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){Ln();const s=le(this)[t].apply(this,n);return $n(),s}}),e}function jm(e){const t=le(this);return Fe(t,"has",e),t.hasOwnProperty(e)}function Yo(e=!1,t=!1){return function(s,i,o){if(i==="__v_isReactive")return!e;if(i==="__v_isReadonly")return e;if(i==="__v_isShallow")return t;if(i==="__v_raw"&&o===(e?t?rg:hc:t?pc:fc).get(s))return s;const r=Y(s);if(!e){if(r&&ae(ia,i))return Reflect.get(ia,i,o);if(i==="hasOwnProperty")return jm}const a=Reflect.get(s,i,o);return(ss(i)?cc.has(i):Wm(i))||(e||Fe(s,"get",i),t)?a:we(a)?r&&zo(i)?a:a.value:_e(a)?e?mc(a):Wn(a):a}}const qm=uc(),zm=uc(!0);function uc(e=!1){return function(n,s,i,o){let r=n[s];if(An(r)&&we(r)&&!we(i))return!1;if(!e&&(!Ys(i)&&!An(i)&&(r=le(r),i=le(i)),!Y(n)&&we(r)&&!we(i)))return r.value=i,!0;const a=Y(n)&&zo(s)?Number(s)<n.length:ae(n,s),l=Reflect.set(n,s,i,o);return n===le(o)&&(a?is(i,r)&&wt(n,"set",s,i):wt(n,"add",s,i)),l}}function Km(e,t){const n=ae(e,t);e[t];const s=Reflect.deleteProperty(e,t);return s&&n&&wt(e,"delete",t,void 0),s}function Gm(e,t){const n=Reflect.has(e,t);return(!ss(t)||!cc.has(t))&&Fe(e,"has",t),n}function Ym(e){return Fe(e,"iterate",Y(e)?"length":Jt),Reflect.ownKeys(e)}const dc={get:Fm,set:qm,deleteProperty:Km,has:Gm,ownKeys:Ym},Xm={get:Hm,set(e,t){return!0},deleteProperty(e,t){return!0}},Qm=Oe({},dc,{get:Vm,set:zm}),Xo=e=>e,gi=e=>Reflect.getPrototypeOf(e);function xs(e,t,n=!1,s=!1){e=e.__v_raw;const i=le(e),o=le(t);n||(t!==o&&Fe(i,"get",t),Fe(i,"get",o));const{has:r}=gi(i),a=s?Xo:n?Zo:os;if(r.call(i,t))return a(e.get(t));if(r.call(i,o))return a(e.get(o));e!==i&&e.get(t)}function Cs(e,t=!1){const n=this.__v_raw,s=le(n),i=le(e);return t||(e!==i&&Fe(s,"has",e),Fe(s,"has",i)),e===i?n.has(e):n.has(e)||n.has(i)}function Ps(e,t=!1){return e=e.__v_raw,!t&&Fe(le(e),"iterate",Jt),Reflect.get(e,"size",e)}function oa(e){e=le(e);const t=le(this);return gi(t).has.call(t,e)||(t.add(e),wt(t,"add",e,e)),this}function ra(e,t){t=le(t);const n=le(this),{has:s,get:i}=gi(n);let o=s.call(n,e);o||(e=le(e),o=s.call(n,e));const r=i.call(n,e);return n.set(e,t),o?is(t,r)&&wt(n,"set",e,t):wt(n,"add",e,t),this}function aa(e){const t=le(this),{has:n,get:s}=gi(t);let i=n.call(t,e);i||(e=le(e),i=n.call(t,e)),s&&s.call(t,e);const o=t.delete(e);return i&&wt(t,"delete",e,void 0),o}function la(){const e=le(this),t=e.size!==0,n=e.clear();return t&&wt(e,"clear",void 0,void 0),n}function Is(e,t){return function(s,i){const o=this,r=o.__v_raw,a=le(r),l=t?Xo:e?Zo:os;return!e&&Fe(a,"iterate",Jt),r.forEach((c,u)=>s.call(i,l(c),l(u),o))}}function Os(e,t,n){return function(...s){const i=this.__v_raw,o=le(i),r=_n(o),a=e==="entries"||e===Symbol.iterator&&r,l=e==="keys"&&r,c=i[e](...s),u=n?Xo:t?Zo:os;return!t&&Fe(o,"iterate",l?uo:Jt),{next(){const{value:d,done:p}=c.next();return p?{value:d,done:p}:{value:a?[u(d[0]),u(d[1])]:u(d),done:p}},[Symbol.iterator](){return this}}}}function At(e){return function(...t){return e==="delete"?!1:this}}function Jm(){const e={get(o){return xs(this,o)},get size(){return Ps(this)},has:Cs,add:oa,set:ra,delete:aa,clear:la,forEach:Is(!1,!1)},t={get(o){return xs(this,o,!1,!0)},get size(){return Ps(this)},has:Cs,add:oa,set:ra,delete:aa,clear:la,forEach:Is(!1,!0)},n={get(o){return xs(this,o,!0)},get size(){return Ps(this,!0)},has(o){return Cs.call(this,o,!0)},add:At("add"),set:At("set"),delete:At("delete"),clear:At("clear"),forEach:Is(!0,!1)},s={get(o){return xs(this,o,!0,!0)},get size(){return Ps(this,!0)},has(o){return Cs.call(this,o,!0)},add:At("add"),set:At("set"),delete:At("delete"),clear:At("clear"),forEach:Is(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(o=>{e[o]=Os(o,!1,!1),n[o]=Os(o,!0,!1),t[o]=Os(o,!1,!0),s[o]=Os(o,!0,!0)}),[e,n,t,s]}const[Zm,eg,tg,ng]=Jm();function Qo(e,t){const n=t?e?ng:tg:e?eg:Zm;return(s,i,o)=>i==="__v_isReactive"?!e:i==="__v_isReadonly"?e:i==="__v_raw"?s:Reflect.get(ae(n,i)&&i in s?n:s,i,o)}const sg={get:Qo(!1,!1)},ig={get:Qo(!1,!0)},og={get:Qo(!0,!1)},fc=new WeakMap,pc=new WeakMap,hc=new WeakMap,rg=new WeakMap;function ag(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function lg(e){return e.__v_skip||!Object.isExtensible(e)?0:ag(Em(e))}function Wn(e){return An(e)?e:Jo(e,!1,dc,sg,fc)}function cg(e){return Jo(e,!1,Qm,ig,pc)}function mc(e){return Jo(e,!0,Xm,og,hc)}function Jo(e,t,n,s,i){if(!_e(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const o=i.get(e);if(o)return o;const r=lg(e);if(r===0)return e;const a=new Proxy(e,r===2?s:n);return i.set(e,a),a}function Nt(e){return An(e)?Nt(e.__v_raw):!!(e&&e.__v_isReactive)}function An(e){return!!(e&&e.__v_isReadonly)}function Ys(e){return!!(e&&e.__v_isShallow)}function gc(e){return Nt(e)||An(e)}function le(e){const t=e&&e.__v_raw;return t?le(t):e}function _i(e){return zs(e,"__v_skip",!0),e}const os=e=>_e(e)?Wn(e):e,Zo=e=>_e(e)?mc(e):e;function _c(e){Ot&&Je&&(e=le(e),lc(e.dep||(e.dep=Ko())))}function bc(e,t){e=le(e);const n=e.dep;n&&fo(n)}function we(e){return!!(e&&e.__v_isRef===!0)}function bi(e){return vc(e,!1)}function ug(e){return vc(e,!0)}function vc(e,t){return we(e)?e:new dg(e,t)}class dg{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:le(t),this._value=n?t:os(t)}get value(){return _c(this),this._value}set value(t){const n=this.__v_isShallow||Ys(t)||An(t);t=n?t:le(t),is(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:os(t),bc(this))}}function Zt(e){return we(e)?e.value:e}const fg={get:(e,t,n)=>Zt(Reflect.get(e,t,n)),set:(e,t,n,s)=>{const i=e[t];return we(i)&&!we(n)?(i.value=n,!0):Reflect.set(e,t,n,s)}};function yc(e){return Nt(e)?e:new Proxy(e,fg)}function pg(e){const t=Y(e)?new Array(e.length):{};for(const n in e)t[n]=mg(e,n);return t}class hg{constructor(t,n,s){this._object=t,this._key=n,this._defaultValue=s,this.__v_isRef=!0}get value(){const t=this._object[this._key];return t===void 0?this._defaultValue:t}set value(t){this._object[this._key]=t}get dep(){return $m(le(this._object),this._key)}}function mg(e,t,n){const s=e[t];return we(s)?s:new hg(e,t,n)}class gg{constructor(t,n,s,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Go(t,()=>{this._dirty||(this._dirty=!0,bc(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=s}get value(){const t=le(this);return _c(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function _g(e,t,n=!1){let s,i;const o=ee(e);return o?(s=e,i=et):(s=e.get,i=e.set),new gg(s,i,o||!i,n)}function Bt(e,t,n,s){let i;try{i=s?e(...s):e()}catch(o){vi(o,t,n)}return i}function tt(e,t,n,s){if(ee(e)){const o=Bt(e,t,n,s);return o&&Ql(o)&&o.catch(r=>{vi(r,t,n)}),o}const i=[];for(let o=0;o<e.length;o++)i.push(tt(e[o],t,n,s));return i}function vi(e,t,n,s=!0){const i=t?t.vnode:null;if(t){let o=t.parent;const r=t.proxy,a=n;for(;o;){const c=o.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](e,r,a)===!1)return}o=o.parent}const l=t.appContext.config.errorHandler;if(l){Bt(l,null,10,[e,r,a]);return}}bg(e,n,i,s)}function bg(e,t,n,s=!0){console.error(e)}let rs=!1,po=!1;const Be=[];let lt=0;const bn=[];let mt=null,qt=0;const wc=Promise.resolve();let er=null;function tr(e){const t=er||wc;return e?t.then(this?e.bind(this):e):t}function vg(e){let t=lt+1,n=Be.length;for(;t<n;){const s=t+n>>>1;as(Be[s])<e?t=s+1:n=s}return t}function nr(e){(!Be.length||!Be.includes(e,rs&&e.allowRecurse?lt+1:lt))&&(e.id==null?Be.push(e):Be.splice(vg(e.id),0,e),kc())}function kc(){!rs&&!po&&(po=!0,er=wc.then(Tc))}function yg(e){const t=Be.indexOf(e);t>lt&&Be.splice(t,1)}function wg(e){Y(e)?bn.push(...e):(!mt||!mt.includes(e,e.allowRecurse?qt+1:qt))&&bn.push(e),kc()}function ca(e,t=rs?lt+1:0){for(;t<Be.length;t++){const n=Be[t];n&&n.pre&&(Be.splice(t,1),t--,n())}}function Ec(e){if(bn.length){const t=[...new Set(bn)];if(bn.length=0,mt){mt.push(...t);return}for(mt=t,mt.sort((n,s)=>as(n)-as(s)),qt=0;qt<mt.length;qt++)mt[qt]();mt=null,qt=0}}const as=e=>e.id==null?1/0:e.id,kg=(e,t)=>{const n=as(e)-as(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function Tc(e){po=!1,rs=!0,Be.sort(kg);const t=et;try{for(lt=0;lt<Be.length;lt++){const n=Be[lt];n&&n.active!==!1&&Bt(n,null,14)}}finally{lt=0,Be.length=0,Ec(),rs=!1,er=null,(Be.length||bn.length)&&Tc()}}function Eg(e,t,...n){if(e.isUnmounted)return;const s=e.vnode.props||be;let i=n;const o=t.startsWith("update:"),r=o&&t.slice(7);if(r&&r in s){const u=`${r==="modelValue"?"model":r}Modifiers`,{number:d,trim:p}=s[u]||be;p&&(i=n.map(g=>Te(g)?g.trim():g)),d&&(i=n.map(Ks))}let a,l=s[a=Vi(t)]||s[a=Vi(pt(t))];!l&&o&&(l=s[a=Vi(Dn(t))]),l&&tt(l,e,6,i);const c=s[a+"Once"];if(c){if(!e.emitted)e.emitted={};else if(e.emitted[a])return;e.emitted[a]=!0,tt(c,e,6,i)}}function Sc(e,t,n=!1){const s=t.emitsCache,i=s.get(e);if(i!==void 0)return i;const o=e.emits;let r={},a=!1;if(!ee(e)){const l=c=>{const u=Sc(c,t,!0);u&&(a=!0,Oe(r,u))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!o&&!a?(_e(e)&&s.set(e,null),null):(Y(o)?o.forEach(l=>r[l]=null):Oe(r,o),_e(e)&&s.set(e,r),r)}function yi(e,t){return!e||!ui(t)?!1:(t=t.slice(2).replace(/Once$/,""),ae(e,t[0].toLowerCase()+t.slice(1))||ae(e,Dn(t))||ae(e,t))}let Ne=null,wi=null;function Xs(e){const t=Ne;return Ne=e,wi=e&&e.type.__scopeId||null,t}function bs(e){wi=e}function vs(){wi=null}function $s(e,t=Ne,n){if(!t||e._n)return e;const s=(...i)=>{s._d&&ya(-1);const o=Xs(t);let r;try{r=e(...i)}finally{Xs(o),s._d&&ya(1)}return r};return s._n=!0,s._c=!0,s._d=!0,s}function Hi(e){const{type:t,vnode:n,proxy:s,withProxy:i,props:o,propsOptions:[r],slots:a,attrs:l,emit:c,render:u,renderCache:d,data:p,setupState:g,ctx:P,inheritAttrs:k}=e;let A,C;const m=Xs(e);try{if(n.shapeFlag&4){const b=i||s;A=at(u.call(b,b,d,o,g,p,P)),C=l}else{const b=t;A=at(b.length>1?b(o,{attrs:l,slots:a,emit:c}):b(o,null)),C=t.props?l:Tg(l)}}catch(b){Jn.length=0,vi(b,e,1),A=oe($t)}let _=A;if(C&&k!==!1){const b=Object.keys(C),{shapeFlag:y}=_;b.length&&y&7&&(r&&b.some(jo)&&(C=Sg(C,r)),_=xn(_,C))}return n.dirs&&(_=xn(_),_.dirs=_.dirs?_.dirs.concat(n.dirs):n.dirs),n.transition&&(_.transition=n.transition),A=_,Xs(m),A}const Tg=e=>{let t;for(const n in e)(n==="class"||n==="style"||ui(n))&&((t||(t={}))[n]=e[n]);return t},Sg=(e,t)=>{const n={};for(const s in e)(!jo(s)||!(s.slice(9)in t))&&(n[s]=e[s]);return n};function Ag(e,t,n){const{props:s,children:i,component:o}=e,{props:r,children:a,patchFlag:l}=t,c=o.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return s?ua(s,r,c):!!r;if(l&8){const u=t.dynamicProps;for(let d=0;d<u.length;d++){const p=u[d];if(r[p]!==s[p]&&!yi(c,p))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:s===r?!1:s?r?ua(s,r,c):!0:!!r;return!1}function ua(e,t,n){const s=Object.keys(t);if(s.length!==Object.keys(e).length)return!0;for(let i=0;i<s.length;i++){const o=s[i];if(t[o]!==e[o]&&!yi(n,o))return!0}return!1}function xg({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const Cg=e=>e.__isSuspense;function Pg(e,t){t&&t.pendingBranch?Y(e)?t.effects.push(...e):t.effects.push(e):wg(e)}const Ns={};function Yn(e,t,n){return Ac(e,t,n)}function Ac(e,t,{immediate:n,deep:s,flush:i,onTrack:o,onTrigger:r}=be){var a;const l=ic()===((a=Pe)==null?void 0:a.scope)?Pe:null;let c,u=!1,d=!1;if(we(e)?(c=()=>e.value,u=Ys(e)):Nt(e)?(c=()=>e,s=!0):Y(e)?(d=!0,u=e.some(b=>Nt(b)||Ys(b)),c=()=>e.map(b=>{if(we(b))return b.value;if(Nt(b))return Xt(b);if(ee(b))return Bt(b,l,2)})):ee(e)?t?c=()=>Bt(e,l,2):c=()=>{if(!(l&&l.isUnmounted))return p&&p(),tt(e,l,3,[g])}:c=et,t&&s){const b=c;c=()=>Xt(b())}let p,g=b=>{p=m.onStop=()=>{Bt(b,l,4)}},P;if(us)if(g=et,t?n&&tt(t,l,3,[c(),d?[]:void 0,g]):c(),i==="sync"){const b=T_();P=b.__watcherHandles||(b.__watcherHandles=[])}else return et;let k=d?new Array(e.length).fill(Ns):Ns;const A=()=>{if(m.active)if(t){const b=m.run();(s||u||(d?b.some((y,S)=>is(y,k[S])):is(b,k)))&&(p&&p(),tt(t,l,3,[b,k===Ns?void 0:d&&k[0]===Ns?[]:k,g]),k=b)}else m.run()};A.allowRecurse=!!t;let C;i==="sync"?C=A:i==="post"?C=()=>$e(A,l&&l.suspense):(A.pre=!0,l&&(A.id=l.uid),C=()=>nr(A));const m=new Go(c,C);t?n?A():k=m.run():i==="post"?$e(m.run.bind(m),l&&l.suspense):m.run();const _=()=>{m.stop(),l&&l.scope&&qo(l.scope.effects,m)};return P&&P.push(_),_}function Ig(e,t,n){const s=this.proxy,i=Te(e)?e.includes(".")?xc(s,e):()=>s[e]:e.bind(s,s);let o;ee(t)?o=t:(o=t.handler,n=t);const r=Pe;Cn(this);const a=Ac(i,o.bind(s),n);return r?Cn(r):en(),a}function xc(e,t){const n=t.split(".");return()=>{let s=e;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}function Xt(e,t){if(!_e(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),we(e))Xt(e.value,t);else if(Y(e))for(let n=0;n<e.length;n++)Xt(e[n],t);else if(di(e)||_n(e))e.forEach(n=>{Xt(n,t)});else if(Zl(e))for(const n in e)Xt(e[n],t);return e}function Cc(e,t){const n=Ne;if(n===null)return e;const s=Si(n)||n.proxy,i=e.dirs||(e.dirs=[]);for(let o=0;o<t.length;o++){let[r,a,l,c=be]=t[o];r&&(ee(r)&&(r={mounted:r,updated:r}),r.deep&&Xt(a),i.push({dir:r,instance:s,value:a,oldValue:void 0,arg:l,modifiers:c}))}return e}function Ut(e,t,n,s){const i=e.dirs,o=t&&t.dirs;for(let r=0;r<i.length;r++){const a=i[r];o&&(a.oldValue=o[r].value);let l=a.dir[s];l&&(Ln(),tt(l,n,8,[e.el,a,e,t]),$n())}}function sr(e,t){return ee(e)?(()=>Oe({name:e.name},t,{setup:e}))():e}const Xn=e=>!!e.type.__asyncLoader,Pc=e=>e.type.__isKeepAlive;function Og(e,t){Ic(e,"a",t)}function Ng(e,t){Ic(e,"da",t)}function Ic(e,t,n=Pe){const s=e.__wdc||(e.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return e()});if(ki(t,s,n),n){let i=n.parent;for(;i&&i.parent;)Pc(i.parent.vnode)&&Bg(s,t,n,i),i=i.parent}}function Bg(e,t,n,s){const i=ki(t,e,s,!0);Oc(()=>{qo(s[t],i)},n)}function ki(e,t,n=Pe,s=!1){if(n){const i=n[e]||(n[e]=[]),o=t.__weh||(t.__weh=(...r)=>{if(n.isUnmounted)return;Ln(),Cn(n);const a=tt(t,n,e,r);return en(),$n(),a});return s?i.unshift(o):i.push(o),o}}const Tt=e=>(t,n=Pe)=>(!us||e==="sp")&&ki(e,(...s)=>t(...s),n),Rg=Tt("bm"),Dg=Tt("m"),Mg=Tt("bu"),Lg=Tt("u"),$g=Tt("bum"),Oc=Tt("um"),Wg=Tt("sp"),Fg=Tt("rtg"),Vg=Tt("rtc");function Hg(e,t=Pe){ki("ec",e,t)}const ir="components";function De(e,t){return Bc(ir,e,!0,t)||e}const Nc=Symbol.for("v-ndc");function Ug(e){return Te(e)?Bc(ir,e,!1)||e:e||Nc}function Bc(e,t,n=!0,s=!1){const i=Ne||Pe;if(i){const o=i.type;if(e===ir){const a=w_(o,!1);if(a&&(a===t||a===pt(t)||a===pi(pt(t))))return o}const r=da(i[e]||o[e],t)||da(i.appContext[e],t);return!r&&s?o:r}}function da(e,t){return e&&(e[t]||e[pt(t)]||e[pi(pt(t))])}function Ie(e,t,n,s){let i;const o=n&&n[s];if(Y(e)||Te(e)){i=new Array(e.length);for(let r=0,a=e.length;r<a;r++)i[r]=t(e[r],r,void 0,o&&o[r])}else if(typeof e=="number"){i=new Array(e);for(let r=0;r<e;r++)i[r]=t(r+1,r,void 0,o&&o[r])}else if(_e(e))if(e[Symbol.iterator])i=Array.from(e,(r,a)=>t(r,a,void 0,o&&o[a]));else{const r=Object.keys(e);i=new Array(r.length);for(let a=0,l=r.length;a<l;a++){const c=r[a];i[a]=t(e[c],c,a,o&&o[a])}}else i=[];return n&&(n[s]=i),i}function jg(e,t,n={},s,i){if(Ne.isCE||Ne.parent&&Xn(Ne.parent)&&Ne.parent.isCE)return t!=="default"&&(n.name=t),oe("slot",n,s&&s());let o=e[t];o&&o._c&&(o._d=!1),F();const r=o&&Rc(o(n)),a=Ht(fe,{key:n.key||r&&r.key||`_${t}`},r||(s?s():[]),r&&e._===1?64:-2);return!i&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),o&&o._c&&(o._d=!0),a}function Rc(e){return e.some(t=>Js(t)?!(t.type===$t||t.type===fe&&!Rc(t.children)):!0)?e:null}const ho=e=>e?qc(e)?Si(e)||e.proxy:ho(e.parent):null,Qn=Oe(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>ho(e.parent),$root:e=>ho(e.root),$emit:e=>e.emit,$options:e=>or(e),$forceUpdate:e=>e.f||(e.f=()=>nr(e.update)),$nextTick:e=>e.n||(e.n=tr.bind(e.proxy)),$watch:e=>Ig.bind(e)}),Ui=(e,t)=>e!==be&&!e.__isScriptSetup&&ae(e,t),qg={get({_:e},t){const{ctx:n,setupState:s,data:i,props:o,accessCache:r,type:a,appContext:l}=e;let c;if(t[0]!=="$"){const g=r[t];if(g!==void 0)switch(g){case 1:return s[t];case 2:return i[t];case 4:return n[t];case 3:return o[t]}else{if(Ui(s,t))return r[t]=1,s[t];if(i!==be&&ae(i,t))return r[t]=2,i[t];if((c=e.propsOptions[0])&&ae(c,t))return r[t]=3,o[t];if(n!==be&&ae(n,t))return r[t]=4,n[t];mo&&(r[t]=0)}}const u=Qn[t];let d,p;if(u)return t==="$attrs"&&Fe(e,"get",t),u(e);if((d=a.__cssModules)&&(d=d[t]))return d;if(n!==be&&ae(n,t))return r[t]=4,n[t];if(p=l.config.globalProperties,ae(p,t))return p[t]},set({_:e},t,n){const{data:s,setupState:i,ctx:o}=e;return Ui(i,t)?(i[t]=n,!0):s!==be&&ae(s,t)?(s[t]=n,!0):ae(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(o[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:s,appContext:i,propsOptions:o}},r){let a;return!!n[r]||e!==be&&ae(e,r)||Ui(t,r)||(a=o[0])&&ae(a,r)||ae(s,r)||ae(Qn,r)||ae(i.config.globalProperties,r)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:ae(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function fa(e){return Y(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let mo=!0;function zg(e){const t=or(e),n=e.proxy,s=e.ctx;mo=!1,t.beforeCreate&&pa(t.beforeCreate,e,"bc");const{data:i,computed:o,methods:r,watch:a,provide:l,inject:c,created:u,beforeMount:d,mounted:p,beforeUpdate:g,updated:P,activated:k,deactivated:A,beforeDestroy:C,beforeUnmount:m,destroyed:_,unmounted:b,render:y,renderTracked:S,renderTriggered:R,errorCaptured:L,serverPrefetch:I,expose:U,inheritAttrs:X,components:ie,directives:ue,filters:Ce}=t;if(c&&Kg(c,s,null),r)for(const Z in r){const G=r[Z];ee(G)&&(s[Z]=G.bind(n))}if(i){const Z=i.call(n,n);_e(Z)&&(e.data=Wn(Z))}if(mo=!0,o)for(const Z in o){const G=o[Z],me=ee(G)?G.bind(n,n):ee(G.get)?G.get.bind(n,n):et,ke=!ee(G)&&ee(G.set)?G.set.bind(n):et,Ae=je({get:me,set:ke});Object.defineProperty(s,Z,{enumerable:!0,configurable:!0,get:()=>Ae.value,set:ce=>Ae.value=ce})}if(a)for(const Z in a)Dc(a[Z],s,n,Z);if(l){const Z=ee(l)?l.call(n):l;Reflect.ownKeys(Z).forEach(G=>{Ws(G,Z[G])})}u&&pa(u,e,"c");function Q(Z,G){Y(G)?G.forEach(me=>Z(me.bind(n))):G&&Z(G.bind(n))}if(Q(Rg,d),Q(Dg,p),Q(Mg,g),Q(Lg,P),Q(Og,k),Q(Ng,A),Q(Hg,L),Q(Vg,S),Q(Fg,R),Q($g,m),Q(Oc,b),Q(Wg,I),Y(U))if(U.length){const Z=e.exposed||(e.exposed={});U.forEach(G=>{Object.defineProperty(Z,G,{get:()=>n[G],set:me=>n[G]=me})})}else e.exposed||(e.exposed={});y&&e.render===et&&(e.render=y),X!=null&&(e.inheritAttrs=X),ie&&(e.components=ie),ue&&(e.directives=ue)}function Kg(e,t,n=et){Y(e)&&(e=go(e));for(const s in e){const i=e[s];let o;_e(i)?"default"in i?o=dt(i.from||s,i.default,!0):o=dt(i.from||s):o=dt(i),we(o)?Object.defineProperty(t,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:r=>o.value=r}):t[s]=o}}function pa(e,t,n){tt(Y(e)?e.map(s=>s.bind(t.proxy)):e.bind(t.proxy),t,n)}function Dc(e,t,n,s){const i=s.includes(".")?xc(n,s):()=>n[s];if(Te(e)){const o=t[e];ee(o)&&Yn(i,o)}else if(ee(e))Yn(i,e.bind(n));else if(_e(e))if(Y(e))e.forEach(o=>Dc(o,t,n,s));else{const o=ee(e.handler)?e.handler.bind(n):t[e.handler];ee(o)&&Yn(i,o,e)}}function or(e){const t=e.type,{mixins:n,extends:s}=t,{mixins:i,optionsCache:o,config:{optionMergeStrategies:r}}=e.appContext,a=o.get(t);let l;return a?l=a:!i.length&&!n&&!s?l=t:(l={},i.length&&i.forEach(c=>Qs(l,c,r,!0)),Qs(l,t,r)),_e(t)&&o.set(t,l),l}function Qs(e,t,n,s=!1){const{mixins:i,extends:o}=t;o&&Qs(e,o,n,!0),i&&i.forEach(r=>Qs(e,r,n,!0));for(const r in t)if(!(s&&r==="expose")){const a=Gg[r]||n&&n[r];e[r]=a?a(e[r],t[r]):t[r]}return e}const Gg={data:ha,props:ma,emits:ma,methods:zn,computed:zn,beforeCreate:Re,created:Re,beforeMount:Re,mounted:Re,beforeUpdate:Re,updated:Re,beforeDestroy:Re,beforeUnmount:Re,destroyed:Re,unmounted:Re,activated:Re,deactivated:Re,errorCaptured:Re,serverPrefetch:Re,components:zn,directives:zn,watch:Xg,provide:ha,inject:Yg};function ha(e,t){return t?e?function(){return Oe(ee(e)?e.call(this,this):e,ee(t)?t.call(this,this):t)}:t:e}function Yg(e,t){return zn(go(e),go(t))}function go(e){if(Y(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Re(e,t){return e?[...new Set([].concat(e,t))]:t}function zn(e,t){return e?Oe(Object.create(null),e,t):t}function ma(e,t){return e?Y(e)&&Y(t)?[...new Set([...e,...t])]:Oe(Object.create(null),fa(e),fa(t??{})):t}function Xg(e,t){if(!e)return t;if(!t)return e;const n=Oe(Object.create(null),e);for(const s in t)n[s]=Re(e[s],t[s]);return n}function Mc(){return{app:null,config:{isNativeTag:ym,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Qg=0;function Jg(e,t){return function(s,i=null){ee(s)||(s=Oe({},s)),i!=null&&!_e(i)&&(i=null);const o=Mc(),r=new Set;let a=!1;const l=o.app={_uid:Qg++,_component:s,_props:i,_container:null,_context:o,_instance:null,version:S_,get config(){return o.config},set config(c){},use(c,...u){return r.has(c)||(c&&ee(c.install)?(r.add(c),c.install(l,...u)):ee(c)&&(r.add(c),c(l,...u))),l},mixin(c){return o.mixins.includes(c)||o.mixins.push(c),l},component(c,u){return u?(o.components[c]=u,l):o.components[c]},directive(c,u){return u?(o.directives[c]=u,l):o.directives[c]},mount(c,u,d){if(!a){const p=oe(s,i);return p.appContext=o,u&&t?t(p,c):e(p,c,d),a=!0,l._container=c,c.__vue_app__=l,Si(p.component)||p.component.proxy}},unmount(){a&&(e(null,l._container),delete l._container.__vue_app__)},provide(c,u){return o.provides[c]=u,l},runWithContext(c){ls=l;try{return c()}finally{ls=null}}};return l}}let ls=null;function Ws(e,t){if(Pe){let n=Pe.provides;const s=Pe.parent&&Pe.parent.provides;s===n&&(n=Pe.provides=Object.create(s)),n[e]=t}}function dt(e,t,n=!1){const s=Pe||Ne;if(s||ls){const i=s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:ls._context.provides;if(i&&e in i)return i[e];if(arguments.length>1)return n&&ee(t)?t.call(s&&s.proxy):t}}function Zg(){return!!(Pe||Ne||ls)}function e_(e,t,n,s=!1){const i={},o={};zs(o,Ti,1),e.propsDefaults=Object.create(null),Lc(e,t,i,o);for(const r in e.propsOptions[0])r in i||(i[r]=void 0);n?e.props=s?i:cg(i):e.type.props?e.props=i:e.props=o,e.attrs=o}function t_(e,t,n,s){const{props:i,attrs:o,vnode:{patchFlag:r}}=e,a=le(i),[l]=e.propsOptions;let c=!1;if((s||r>0)&&!(r&16)){if(r&8){const u=e.vnode.dynamicProps;for(let d=0;d<u.length;d++){let p=u[d];if(yi(e.emitsOptions,p))continue;const g=t[p];if(l)if(ae(o,p))g!==o[p]&&(o[p]=g,c=!0);else{const P=pt(p);i[P]=_o(l,a,P,g,e,!1)}else g!==o[p]&&(o[p]=g,c=!0)}}}else{Lc(e,t,i,o)&&(c=!0);let u;for(const d in a)(!t||!ae(t,d)&&((u=Dn(d))===d||!ae(t,u)))&&(l?n&&(n[d]!==void 0||n[u]!==void 0)&&(i[d]=_o(l,a,d,void 0,e,!0)):delete i[d]);if(o!==a)for(const d in o)(!t||!ae(t,d))&&(delete o[d],c=!0)}c&&wt(e,"set","$attrs")}function Lc(e,t,n,s){const[i,o]=e.propsOptions;let r=!1,a;if(t)for(let l in t){if(Ms(l))continue;const c=t[l];let u;i&&ae(i,u=pt(l))?!o||!o.includes(u)?n[u]=c:(a||(a={}))[u]=c:yi(e.emitsOptions,l)||(!(l in s)||c!==s[l])&&(s[l]=c,r=!0)}if(o){const l=le(n),c=a||be;for(let u=0;u<o.length;u++){const d=o[u];n[d]=_o(i,l,d,c[d],e,!ae(c,d))}}return r}function _o(e,t,n,s,i,o){const r=e[n];if(r!=null){const a=ae(r,"default");if(a&&s===void 0){const l=r.default;if(r.type!==Function&&!r.skipFactory&&ee(l)){const{propsDefaults:c}=i;n in c?s=c[n]:(Cn(i),s=c[n]=l.call(null,t),en())}else s=l}r[0]&&(o&&!a?s=!1:r[1]&&(s===""||s===Dn(n))&&(s=!0))}return s}function $c(e,t,n=!1){const s=t.propsCache,i=s.get(e);if(i)return i;const o=e.props,r={},a=[];let l=!1;if(!ee(e)){const u=d=>{l=!0;const[p,g]=$c(d,t,!0);Oe(r,p),g&&a.push(...g)};!n&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!o&&!l)return _e(e)&&s.set(e,gn),gn;if(Y(o))for(let u=0;u<o.length;u++){const d=pt(o[u]);ga(d)&&(r[d]=be)}else if(o)for(const u in o){const d=pt(u);if(ga(d)){const p=o[u],g=r[d]=Y(p)||ee(p)?{type:p}:Oe({},p);if(g){const P=va(Boolean,g.type),k=va(String,g.type);g[0]=P>-1,g[1]=k<0||P<k,(P>-1||ae(g,"default"))&&a.push(d)}}}const c=[r,a];return _e(e)&&s.set(e,c),c}function ga(e){return e[0]!=="$"}function _a(e){const t=e&&e.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:e===null?"null":""}function ba(e,t){return _a(e)===_a(t)}function va(e,t){return Y(t)?t.findIndex(n=>ba(n,e)):ee(t)&&ba(t,e)?0:-1}const Wc=e=>e[0]==="_"||e==="$stable",rr=e=>Y(e)?e.map(at):[at(e)],n_=(e,t,n)=>{if(t._n)return t;const s=$s((...i)=>rr(t(...i)),n);return s._c=!1,s},Fc=(e,t,n)=>{const s=e._ctx;for(const i in e){if(Wc(i))continue;const o=e[i];if(ee(o))t[i]=n_(i,o,s);else if(o!=null){const r=rr(o);t[i]=()=>r}}},Vc=(e,t)=>{const n=rr(t);e.slots.default=()=>n},s_=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=le(t),zs(t,"_",n)):Fc(t,e.slots={})}else e.slots={},t&&Vc(e,t);zs(e.slots,Ti,1)},i_=(e,t,n)=>{const{vnode:s,slots:i}=e;let o=!0,r=be;if(s.shapeFlag&32){const a=t._;a?n&&a===1?o=!1:(Oe(i,t),!n&&a===1&&delete i._):(o=!t.$stable,Fc(t,i)),r=t}else t&&(Vc(e,t),r={default:1});if(o)for(const a in i)!Wc(a)&&!(a in r)&&delete i[a]};function bo(e,t,n,s,i=!1){if(Y(e)){e.forEach((p,g)=>bo(p,t&&(Y(t)?t[g]:t),n,s,i));return}if(Xn(s)&&!i)return;const o=s.shapeFlag&4?Si(s.component)||s.component.proxy:s.el,r=i?null:o,{i:a,r:l}=e,c=t&&t.r,u=a.refs===be?a.refs={}:a.refs,d=a.setupState;if(c!=null&&c!==l&&(Te(c)?(u[c]=null,ae(d,c)&&(d[c]=null)):we(c)&&(c.value=null)),ee(l))Bt(l,a,12,[r,u]);else{const p=Te(l),g=we(l);if(p||g){const P=()=>{if(e.f){const k=p?ae(d,l)?d[l]:u[l]:l.value;i?Y(k)&&qo(k,o):Y(k)?k.includes(o)||k.push(o):p?(u[l]=[o],ae(d,l)&&(d[l]=u[l])):(l.value=[o],e.k&&(u[e.k]=l.value))}else p?(u[l]=r,ae(d,l)&&(d[l]=r)):g&&(l.value=r,e.k&&(u[e.k]=r))};r?(P.id=-1,$e(P,n)):P()}}}const $e=Pg;function o_(e){return r_(e)}function r_(e,t){const n=lo();n.__VUE__=!0;const{insert:s,remove:i,patchProp:o,createElement:r,createText:a,createComment:l,setText:c,setElementText:u,parentNode:d,nextSibling:p,setScopeId:g=et,insertStaticContent:P}=e,k=(f,h,v,T=null,x=null,O=null,V=!1,D=null,M=!!h.dynamicChildren)=>{if(f===h)return;f&&!Un(f,h)&&(T=E(f),ce(f,x,O,!0),f=null),h.patchFlag===-2&&(M=!1,h.dynamicChildren=null);const{type:N,ref:K,shapeFlag:j}=h;switch(N){case Ei:A(f,h,v,T);break;case $t:C(f,h,v,T);break;case Fs:f==null&&m(h,v,T,V);break;case fe:ie(f,h,v,T,x,O,V,D,M);break;default:j&1?y(f,h,v,T,x,O,V,D,M):j&6?ue(f,h,v,T,x,O,V,D,M):(j&64||j&128)&&N.process(f,h,v,T,x,O,V,D,M,$)}K!=null&&x&&bo(K,f&&f.ref,O,h||f,!h)},A=(f,h,v,T)=>{if(f==null)s(h.el=a(h.children),v,T);else{const x=h.el=f.el;h.children!==f.children&&c(x,h.children)}},C=(f,h,v,T)=>{f==null?s(h.el=l(h.children||""),v,T):h.el=f.el},m=(f,h,v,T)=>{[f.el,f.anchor]=P(f.children,h,v,T,f.el,f.anchor)},_=({el:f,anchor:h},v,T)=>{let x;for(;f&&f!==h;)x=p(f),s(f,v,T),f=x;s(h,v,T)},b=({el:f,anchor:h})=>{let v;for(;f&&f!==h;)v=p(f),i(f),f=v;i(h)},y=(f,h,v,T,x,O,V,D,M)=>{V=V||h.type==="svg",f==null?S(h,v,T,x,O,V,D,M):I(f,h,x,O,V,D,M)},S=(f,h,v,T,x,O,V,D)=>{let M,N;const{type:K,props:j,shapeFlag:z,transition:J,dirs:se}=f;if(M=f.el=r(f.type,O,j&&j.is,j),z&8?u(M,f.children):z&16&&L(f.children,M,null,T,x,O&&K!=="foreignObject",V,D),se&&Ut(f,null,T,"created"),R(M,f,f.scopeId,V,T),j){for(const de in j)de!=="value"&&!Ms(de)&&o(M,de,null,j[de],O,f.children,T,x,ge);"value"in j&&o(M,"value",null,j.value),(N=j.onVnodeBeforeMount)&&rt(N,T,f)}se&&Ut(f,null,T,"beforeMount");const pe=(!x||x&&!x.pendingBranch)&&J&&!J.persisted;pe&&J.beforeEnter(M),s(M,h,v),((N=j&&j.onVnodeMounted)||pe||se)&&$e(()=>{N&&rt(N,T,f),pe&&J.enter(M),se&&Ut(f,null,T,"mounted")},x)},R=(f,h,v,T,x)=>{if(v&&g(f,v),T)for(let O=0;O<T.length;O++)g(f,T[O]);if(x){let O=x.subTree;if(h===O){const V=x.vnode;R(f,V,V.scopeId,V.slotScopeIds,x.parent)}}},L=(f,h,v,T,x,O,V,D,M=0)=>{for(let N=M;N<f.length;N++){const K=f[N]=D?Pt(f[N]):at(f[N]);k(null,K,h,v,T,x,O,V,D)}},I=(f,h,v,T,x,O,V)=>{const D=h.el=f.el;let{patchFlag:M,dynamicChildren:N,dirs:K}=h;M|=f.patchFlag&16;const j=f.props||be,z=h.props||be;let J;v&&jt(v,!1),(J=z.onVnodeBeforeUpdate)&&rt(J,v,h,f),K&&Ut(h,f,v,"beforeUpdate"),v&&jt(v,!0);const se=x&&h.type!=="foreignObject";if(N?U(f.dynamicChildren,N,D,v,T,se,O):V||G(f,h,D,null,v,T,se,O,!1),M>0){if(M&16)X(D,h,j,z,v,T,x);else if(M&2&&j.class!==z.class&&o(D,"class",null,z.class,x),M&4&&o(D,"style",j.style,z.style,x),M&8){const pe=h.dynamicProps;for(let de=0;de<pe.length;de++){const Ee=pe[de],Qe=j[Ee],rn=z[Ee];(rn!==Qe||Ee==="value")&&o(D,Ee,Qe,rn,x,f.children,v,T,ge)}}M&1&&f.children!==h.children&&u(D,h.children)}else!V&&N==null&&X(D,h,j,z,v,T,x);((J=z.onVnodeUpdated)||K)&&$e(()=>{J&&rt(J,v,h,f),K&&Ut(h,f,v,"updated")},T)},U=(f,h,v,T,x,O,V)=>{for(let D=0;D<h.length;D++){const M=f[D],N=h[D],K=M.el&&(M.type===fe||!Un(M,N)||M.shapeFlag&70)?d(M.el):v;k(M,N,K,null,T,x,O,V,!0)}},X=(f,h,v,T,x,O,V)=>{if(v!==T){if(v!==be)for(const D in v)!Ms(D)&&!(D in T)&&o(f,D,v[D],null,V,h.children,x,O,ge);for(const D in T){if(Ms(D))continue;const M=T[D],N=v[D];M!==N&&D!=="value"&&o(f,D,N,M,V,h.children,x,O,ge)}"value"in T&&o(f,"value",v.value,T.value)}},ie=(f,h,v,T,x,O,V,D,M)=>{const N=h.el=f?f.el:a(""),K=h.anchor=f?f.anchor:a("");let{patchFlag:j,dynamicChildren:z,slotScopeIds:J}=h;J&&(D=D?D.concat(J):J),f==null?(s(N,v,T),s(K,v,T),L(h.children,v,K,x,O,V,D,M)):j>0&&j&64&&z&&f.dynamicChildren?(U(f.dynamicChildren,z,v,x,O,V,D),(h.key!=null||x&&h===x.subTree)&&Hc(f,h,!0)):G(f,h,v,K,x,O,V,D,M)},ue=(f,h,v,T,x,O,V,D,M)=>{h.slotScopeIds=D,f==null?h.shapeFlag&512?x.ctx.activate(h,v,T,V,M):Ce(h,v,T,x,O,V,M):ve(f,h,M)},Ce=(f,h,v,T,x,O,V)=>{const D=f.component=g_(f,T,x);if(Pc(f)&&(D.ctx.renderer=$),__(D),D.asyncDep){if(x&&x.registerDep(D,Q),!f.el){const M=D.subTree=oe($t);C(null,M,h,v)}return}Q(D,f,h,v,x,O,V)},ve=(f,h,v)=>{const T=h.component=f.component;if(Ag(f,h,v))if(T.asyncDep&&!T.asyncResolved){Z(T,h,v);return}else T.next=h,yg(T.update),T.update();else h.el=f.el,T.vnode=h},Q=(f,h,v,T,x,O,V)=>{const D=()=>{if(f.isMounted){let{next:K,bu:j,u:z,parent:J,vnode:se}=f,pe=K,de;jt(f,!1),K?(K.el=se.el,Z(f,K,V)):K=se,j&&Ls(j),(de=K.props&&K.props.onVnodeBeforeUpdate)&&rt(de,J,K,se),jt(f,!0);const Ee=Hi(f),Qe=f.subTree;f.subTree=Ee,k(Qe,Ee,d(Qe.el),E(Qe),f,x,O),K.el=Ee.el,pe===null&&xg(f,Ee.el),z&&$e(z,x),(de=K.props&&K.props.onVnodeUpdated)&&$e(()=>rt(de,J,K,se),x)}else{let K;const{el:j,props:z}=h,{bm:J,m:se,parent:pe}=f,de=Xn(h);if(jt(f,!1),J&&Ls(J),!de&&(K=z&&z.onVnodeBeforeMount)&&rt(K,pe,h),jt(f,!0),j&&ne){const Ee=()=>{f.subTree=Hi(f),ne(j,f.subTree,f,x,null)};de?h.type.__asyncLoader().then(()=>!f.isUnmounted&&Ee()):Ee()}else{const Ee=f.subTree=Hi(f);k(null,Ee,v,T,f,x,O),h.el=Ee.el}if(se&&$e(se,x),!de&&(K=z&&z.onVnodeMounted)){const Ee=h;$e(()=>rt(K,pe,Ee),x)}(h.shapeFlag&256||pe&&Xn(pe.vnode)&&pe.vnode.shapeFlag&256)&&f.a&&$e(f.a,x),f.isMounted=!0,h=v=T=null}},M=f.effect=new Go(D,()=>nr(N),f.scope),N=f.update=()=>M.run();N.id=f.uid,jt(f,!0),N()},Z=(f,h,v)=>{h.component=f;const T=f.vnode.props;f.vnode=h,f.next=null,t_(f,h.props,T,v),i_(f,h.children,v),Ln(),ca(),$n()},G=(f,h,v,T,x,O,V,D,M=!1)=>{const N=f&&f.children,K=f?f.shapeFlag:0,j=h.children,{patchFlag:z,shapeFlag:J}=h;if(z>0){if(z&128){ke(N,j,v,T,x,O,V,D,M);return}else if(z&256){me(N,j,v,T,x,O,V,D,M);return}}J&8?(K&16&&ge(N,x,O),j!==N&&u(v,j)):K&16?J&16?ke(N,j,v,T,x,O,V,D,M):ge(N,x,O,!0):(K&8&&u(v,""),J&16&&L(j,v,T,x,O,V,D,M))},me=(f,h,v,T,x,O,V,D,M)=>{f=f||gn,h=h||gn;const N=f.length,K=h.length,j=Math.min(N,K);let z;for(z=0;z<j;z++){const J=h[z]=M?Pt(h[z]):at(h[z]);k(f[z],J,v,null,x,O,V,D,M)}N>K?ge(f,x,O,!0,!1,j):L(h,v,T,x,O,V,D,M,j)},ke=(f,h,v,T,x,O,V,D,M)=>{let N=0;const K=h.length;let j=f.length-1,z=K-1;for(;N<=j&&N<=z;){const J=f[N],se=h[N]=M?Pt(h[N]):at(h[N]);if(Un(J,se))k(J,se,v,null,x,O,V,D,M);else break;N++}for(;N<=j&&N<=z;){const J=f[j],se=h[z]=M?Pt(h[z]):at(h[z]);if(Un(J,se))k(J,se,v,null,x,O,V,D,M);else break;j--,z--}if(N>j){if(N<=z){const J=z+1,se=J<K?h[J].el:T;for(;N<=z;)k(null,h[N]=M?Pt(h[N]):at(h[N]),v,se,x,O,V,D,M),N++}}else if(N>z)for(;N<=j;)ce(f[N],x,O,!0),N++;else{const J=N,se=N,pe=new Map;for(N=se;N<=z;N++){const He=h[N]=M?Pt(h[N]):at(h[N]);He.key!=null&&pe.set(He.key,N)}let de,Ee=0;const Qe=z-se+1;let rn=!1,hr=0;const Fn=new Array(Qe);for(N=0;N<Qe;N++)Fn[N]=0;for(N=J;N<=j;N++){const He=f[N];if(Ee>=Qe){ce(He,x,O,!0);continue}let ot;if(He.key!=null)ot=pe.get(He.key);else for(de=se;de<=z;de++)if(Fn[de-se]===0&&Un(He,h[de])){ot=de;break}ot===void 0?ce(He,x,O,!0):(Fn[ot-se]=N+1,ot>=hr?hr=ot:rn=!0,k(He,h[ot],v,null,x,O,V,D,M),Ee++)}const mr=rn?a_(Fn):gn;for(de=mr.length-1,N=Qe-1;N>=0;N--){const He=se+N,ot=h[He],gr=He+1<K?h[He+1].el:T;Fn[N]===0?k(null,ot,v,gr,x,O,V,D,M):rn&&(de<0||N!==mr[de]?Ae(ot,v,gr,2):de--)}}},Ae=(f,h,v,T,x=null)=>{const{el:O,type:V,transition:D,children:M,shapeFlag:N}=f;if(N&6){Ae(f.component.subTree,h,v,T);return}if(N&128){f.suspense.move(h,v,T);return}if(N&64){V.move(f,h,v,$);return}if(V===fe){s(O,h,v);for(let j=0;j<M.length;j++)Ae(M[j],h,v,T);s(f.anchor,h,v);return}if(V===Fs){_(f,h,v);return}if(T!==2&&N&1&&D)if(T===0)D.beforeEnter(O),s(O,h,v),$e(()=>D.enter(O),x);else{const{leave:j,delayLeave:z,afterLeave:J}=D,se=()=>s(O,h,v),pe=()=>{j(O,()=>{se(),J&&J()})};z?z(O,se,pe):pe()}else s(O,h,v)},ce=(f,h,v,T=!1,x=!1)=>{const{type:O,props:V,ref:D,children:M,dynamicChildren:N,shapeFlag:K,patchFlag:j,dirs:z}=f;if(D!=null&&bo(D,null,v,f,!0),K&256){h.ctx.deactivate(f);return}const J=K&1&&z,se=!Xn(f);let pe;if(se&&(pe=V&&V.onVnodeBeforeUnmount)&&rt(pe,h,f),K&6)xe(f.component,v,T);else{if(K&128){f.suspense.unmount(v,T);return}J&&Ut(f,null,h,"beforeUnmount"),K&64?f.type.remove(f,h,v,x,$,T):N&&(O!==fe||j>0&&j&64)?ge(N,h,v,!1,!0):(O===fe&&j&384||!x&&K&16)&&ge(M,h,v),T&&Ve(f)}(se&&(pe=V&&V.onVnodeUnmounted)||J)&&$e(()=>{pe&&rt(pe,h,f),J&&Ut(f,null,h,"unmounted")},v)},Ve=f=>{const{type:h,el:v,anchor:T,transition:x}=f;if(h===fe){ye(v,T);return}if(h===Fs){b(f);return}const O=()=>{i(v),x&&!x.persisted&&x.afterLeave&&x.afterLeave()};if(f.shapeFlag&1&&x&&!x.persisted){const{leave:V,delayLeave:D}=x,M=()=>V(v,O);D?D(f.el,O,M):M()}else O()},ye=(f,h)=>{let v;for(;f!==h;)v=p(f),i(f),f=v;i(h)},xe=(f,h,v)=>{const{bum:T,scope:x,update:O,subTree:V,um:D}=f;T&&Ls(T),x.stop(),O&&(O.active=!1,ce(V,f,h,v)),D&&$e(D,h),$e(()=>{f.isUnmounted=!0},h),h&&h.pendingBranch&&!h.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===h.pendingId&&(h.deps--,h.deps===0&&h.resolve())},ge=(f,h,v,T=!1,x=!1,O=0)=>{for(let V=O;V<f.length;V++)ce(f[V],h,v,T,x)},E=f=>f.shapeFlag&6?E(f.component.subTree):f.shapeFlag&128?f.suspense.next():p(f.anchor||f.el),W=(f,h,v)=>{f==null?h._vnode&&ce(h._vnode,null,null,!0):k(h._vnode||null,f,h,null,null,null,v),ca(),Ec(),h._vnode=f},$={p:k,um:ce,m:Ae,r:Ve,mt:Ce,mc:L,pc:G,pbc:U,n:E,o:e};let q,ne;return t&&([q,ne]=t($)),{render:W,hydrate:q,createApp:Jg(W,q)}}function jt({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function Hc(e,t,n=!1){const s=e.children,i=t.children;if(Y(s)&&Y(i))for(let o=0;o<s.length;o++){const r=s[o];let a=i[o];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[o]=Pt(i[o]),a.el=r.el),n||Hc(r,a)),a.type===Ei&&(a.el=r.el)}}function a_(e){const t=e.slice(),n=[0];let s,i,o,r,a;const l=e.length;for(s=0;s<l;s++){const c=e[s];if(c!==0){if(i=n[n.length-1],e[i]<c){t[s]=i,n.push(s);continue}for(o=0,r=n.length-1;o<r;)a=o+r>>1,e[n[a]]<c?o=a+1:r=a;c<e[n[o]]&&(o>0&&(t[s]=n[o-1]),n[o]=s)}}for(o=n.length,r=n[o-1];o-- >0;)n[o]=r,r=t[r];return n}const l_=e=>e.__isTeleport,fe=Symbol.for("v-fgt"),Ei=Symbol.for("v-txt"),$t=Symbol.for("v-cmt"),Fs=Symbol.for("v-stc"),Jn=[];let Ze=null;function F(e=!1){Jn.push(Ze=e?null:[])}function c_(){Jn.pop(),Ze=Jn[Jn.length-1]||null}let cs=1;function ya(e){cs+=e}function Uc(e){return e.dynamicChildren=cs>0?Ze||gn:null,c_(),cs>0&&Ze&&Ze.push(e),e}function H(e,t,n,s,i,o){return Uc(w(e,t,n,s,i,o,!0))}function Ht(e,t,n,s,i){return Uc(oe(e,t,n,s,i,!0))}function Js(e){return e?e.__v_isVNode===!0:!1}function Un(e,t){return e.type===t.type&&e.key===t.key}const Ti="__vInternal",jc=({key:e})=>e??null,Vs=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?Te(e)||we(e)||ee(e)?{i:Ne,r:e,k:t,f:!!n}:e:null);function w(e,t=null,n=null,s=0,i=null,o=e===fe?0:1,r=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&jc(t),ref:t&&Vs(t),scopeId:wi,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:Ne};return a?(ar(l,n),o&128&&e.normalize(l)):n&&(l.shapeFlag|=Te(n)?8:16),cs>0&&!r&&Ze&&(l.patchFlag>0||o&6)&&l.patchFlag!==32&&Ze.push(l),l}const oe=u_;function u_(e,t=null,n=null,s=0,i=null,o=!1){if((!e||e===Nc)&&(e=$t),Js(e)){const a=xn(e,t,!0);return n&&ar(a,n),cs>0&&!o&&Ze&&(a.shapeFlag&6?Ze[Ze.indexOf(e)]=a:Ze.push(a)),a.patchFlag|=-2,a}if(k_(e)&&(e=e.__vccOpts),t){t=d_(t);let{class:a,style:l}=t;a&&!Te(a)&&(t.class=Mn(a)),_e(l)&&(gc(l)&&!Y(l)&&(l=Oe({},l)),t.style=hi(l))}const r=Te(e)?1:Cg(e)?128:l_(e)?64:_e(e)?4:ee(e)?2:0;return w(e,t,n,s,i,r,o,!0)}function d_(e){return e?gc(e)||Ti in e?Oe({},e):e:null}function xn(e,t,n=!1){const{props:s,ref:i,patchFlag:o,children:r}=e,a=t?p_(s||{},t):s;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:a,key:a&&jc(a),ref:t&&t.ref?n&&i?Y(i)?i.concat(Vs(t)):[i,Vs(t)]:Vs(t):i,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:r,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==fe?o===-1?16:o|16:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&xn(e.ssContent),ssFallback:e.ssFallback&&xn(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function kt(e=" ",t=0){return oe(Ei,null,e,t)}function f_(e,t){const n=oe(Fs,null,e);return n.staticCount=t,n}function We(e="",t=!1){return t?(F(),Ht($t,null,e)):oe($t,null,e)}function at(e){return e==null||typeof e=="boolean"?oe($t):Y(e)?oe(fe,null,e.slice()):typeof e=="object"?Pt(e):oe(Ei,null,String(e))}function Pt(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:xn(e)}function ar(e,t){let n=0;const{shapeFlag:s}=e;if(t==null)t=null;else if(Y(t))n=16;else if(typeof t=="object")if(s&65){const i=t.default;i&&(i._c&&(i._d=!1),ar(e,i()),i._c&&(i._d=!0));return}else{n=32;const i=t._;!i&&!(Ti in t)?t._ctx=Ne:i===3&&Ne&&(Ne.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else ee(t)?(t={default:t,_ctx:Ne},n=32):(t=String(t),s&64?(n=16,t=[kt(t)]):n=8);e.children=t,e.shapeFlag|=n}function p_(...e){const t={};for(let n=0;n<e.length;n++){const s=e[n];for(const i in s)if(i==="class")t.class!==s.class&&(t.class=Mn([t.class,s.class]));else if(i==="style")t.style=hi([t.style,s.style]);else if(ui(i)){const o=t[i],r=s[i];r&&o!==r&&!(Y(o)&&o.includes(r))&&(t[i]=o?[].concat(o,r):r)}else i!==""&&(t[i]=s[i])}return t}function rt(e,t,n,s=null){tt(e,t,7,[n,s])}const h_=Mc();let m_=0;function g_(e,t,n){const s=e.type,i=(t?t.appContext:e.appContext)||h_,o={uid:m_++,vnode:e,type:s,parent:t,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new nc(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:$c(s,i),emitsOptions:Sc(s,i),emit:null,emitted:null,propsDefaults:be,inheritAttrs:s.inheritAttrs,ctx:be,data:be,props:be,attrs:be,slots:be,refs:be,setupState:be,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return o.ctx={_:o},o.root=t?t.root:o,o.emit=Eg.bind(null,o),e.ce&&e.ce(o),o}let Pe=null,lr,cn,wa="__VUE_INSTANCE_SETTERS__";(cn=lo()[wa])||(cn=lo()[wa]=[]),cn.push(e=>Pe=e),lr=e=>{cn.length>1?cn.forEach(t=>t(e)):cn[0](e)};const Cn=e=>{lr(e),e.scope.on()},en=()=>{Pe&&Pe.scope.off(),lr(null)};function qc(e){return e.vnode.shapeFlag&4}let us=!1;function __(e,t=!1){us=t;const{props:n,children:s}=e.vnode,i=qc(e);e_(e,n,i,t),s_(e,s);const o=i?b_(e,t):void 0;return us=!1,o}function b_(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=_i(new Proxy(e.ctx,qg));const{setup:s}=n;if(s){const i=e.setupContext=s.length>1?y_(e):null;Cn(e),Ln();const o=Bt(s,e,0,[e.props,i]);if($n(),en(),Ql(o)){if(o.then(en,en),t)return o.then(r=>{ka(e,r,t)}).catch(r=>{vi(r,e,0)});e.asyncDep=o}else ka(e,o,t)}else zc(e,t)}function ka(e,t,n){ee(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:_e(t)&&(e.setupState=yc(t)),zc(e,n)}let Ea;function zc(e,t,n){const s=e.type;if(!e.render){if(!t&&Ea&&!s.render){const i=s.template||or(e).template;if(i){const{isCustomElement:o,compilerOptions:r}=e.appContext.config,{delimiters:a,compilerOptions:l}=s,c=Oe(Oe({isCustomElement:o,delimiters:a},r),l);s.render=Ea(i,c)}}e.render=s.render||et}Cn(e),Ln(),zg(e),$n(),en()}function v_(e){return e.attrsProxy||(e.attrsProxy=new Proxy(e.attrs,{get(t,n){return Fe(e,"get","$attrs"),t[n]}}))}function y_(e){const t=n=>{e.exposed=n||{}};return{get attrs(){return v_(e)},slots:e.slots,emit:e.emit,expose:t}}function Si(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(yc(_i(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Qn)return Qn[n](e)},has(t,n){return n in t||n in Qn}}))}function w_(e,t=!0){return ee(e)?e.displayName||e.name:e.name||t&&e.__name}function k_(e){return ee(e)&&"__vccOpts"in e}const je=(e,t)=>_g(e,t,us);function Kc(e,t,n){const s=arguments.length;return s===2?_e(t)&&!Y(t)?Js(t)?oe(e,null,[t]):oe(e,t):oe(e,null,t):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&Js(n)&&(n=[n]),oe(e,t,n))}const E_=Symbol.for("v-scx"),T_=()=>dt(E_),S_="3.3.4",A_="http://www.w3.org/2000/svg",zt=typeof document<"u"?document:null,Ta=zt&&zt.createElement("template"),x_={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,s)=>{const i=t?zt.createElementNS(A_,e):zt.createElement(e,n?{is:n}:void 0);return e==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:e=>zt.createTextNode(e),createComment:e=>zt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>zt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,s,i,o){const r=n?n.previousSibling:t.lastChild;if(i&&(i===o||i.nextSibling))for(;t.insertBefore(i.cloneNode(!0),n),!(i===o||!(i=i.nextSibling)););else{Ta.innerHTML=s?`<svg>${e}</svg>`:e;const a=Ta.content;if(s){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}t.insertBefore(a,n)}return[r?r.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function C_(e,t,n){const s=e._vtc;s&&(t=(t?[t,...s]:[...s]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function P_(e,t,n){const s=e.style,i=Te(n);if(n&&!i){if(t&&!Te(t))for(const o in t)n[o]==null&&vo(s,o,"");for(const o in n)vo(s,o,n[o])}else{const o=s.display;i?t!==n&&(s.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(s.display=o)}}const Sa=/\s*!important$/;function vo(e,t,n){if(Y(n))n.forEach(s=>vo(e,t,s));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const s=I_(e,t);Sa.test(n)?e.setProperty(Dn(s),n.replace(Sa,""),"important"):e[s]=n}}const Aa=["Webkit","Moz","ms"],ji={};function I_(e,t){const n=ji[t];if(n)return n;let s=pt(t);if(s!=="filter"&&s in e)return ji[t]=s;s=pi(s);for(let i=0;i<Aa.length;i++){const o=Aa[i]+s;if(o in e)return ji[t]=o}return t}const xa="http://www.w3.org/1999/xlink";function O_(e,t,n,s,i){if(s&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(xa,t.slice(6,t.length)):e.setAttributeNS(xa,t,n);else{const o=Om(t);n==null||o&&!ec(n)?e.removeAttribute(t):e.setAttribute(t,o?"":n)}}function N_(e,t,n,s,i,o,r){if(t==="innerHTML"||t==="textContent"){s&&r(s,i,o),e[t]=n??"";return}const a=e.tagName;if(t==="value"&&a!=="PROGRESS"&&!a.includes("-")){e._value=n;const c=a==="OPTION"?e.getAttribute("value"):e.value,u=n??"";c!==u&&(e.value=u),n==null&&e.removeAttribute(t);return}let l=!1;if(n===""||n==null){const c=typeof e[t];c==="boolean"?n=ec(n):n==null&&c==="string"?(n="",l=!0):c==="number"&&(n=0,l=!0)}try{e[t]=n}catch{}l&&e.removeAttribute(t)}function Kt(e,t,n,s){e.addEventListener(t,n,s)}function B_(e,t,n,s){e.removeEventListener(t,n,s)}function R_(e,t,n,s,i=null){const o=e._vei||(e._vei={}),r=o[t];if(s&&r)r.value=s;else{const[a,l]=D_(t);if(s){const c=o[t]=$_(s,i);Kt(e,a,c,l)}else r&&(B_(e,a,r,l),o[t]=void 0)}}const Ca=/(?:Once|Passive|Capture)$/;function D_(e){let t;if(Ca.test(e)){t={};let s;for(;s=e.match(Ca);)e=e.slice(0,e.length-s[0].length),t[s[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Dn(e.slice(2)),t]}let qi=0;const M_=Promise.resolve(),L_=()=>qi||(M_.then(()=>qi=0),qi=Date.now());function $_(e,t){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;tt(W_(s,n.value),t,5,[s])};return n.value=e,n.attached=L_(),n}function W_(e,t){if(Y(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(s=>i=>!i._stopped&&s&&s(i))}else return t}const Pa=/^on[a-z]/,F_=(e,t,n,s,i=!1,o,r,a,l)=>{t==="class"?C_(e,s,i):t==="style"?P_(e,n,s):ui(t)?jo(t)||R_(e,t,n,s,r):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):V_(e,t,s,i))?N_(e,t,s,o,r,a,l):(t==="true-value"?e._trueValue=s:t==="false-value"&&(e._falseValue=s),O_(e,t,s,i))};function V_(e,t,n,s){return s?!!(t==="innerHTML"||t==="textContent"||t in e&&Pa.test(t)&&ee(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||Pa.test(t)&&Te(n)?!1:t in e}const Zs=e=>{const t=e.props["onUpdate:modelValue"]||!1;return Y(t)?n=>Ls(t,n):t};function H_(e){e.target.composing=!0}function Ia(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const U_={created(e,{modifiers:{lazy:t,trim:n,number:s}},i){e._assign=Zs(i);const o=s||i.props&&i.props.type==="number";Kt(e,t?"change":"input",r=>{if(r.target.composing)return;let a=e.value;n&&(a=a.trim()),o&&(a=Ks(a)),e._assign(a)}),n&&Kt(e,"change",()=>{e.value=e.value.trim()}),t||(Kt(e,"compositionstart",H_),Kt(e,"compositionend",Ia),Kt(e,"change",Ia))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:s,number:i}},o){if(e._assign=Zs(o),e.composing||document.activeElement===e&&e.type!=="range"&&(n||s&&e.value.trim()===t||(i||e.type==="number")&&Ks(e.value)===t))return;const r=t??"";e.value!==r&&(e.value=r)}},j_={deep:!0,created(e,{value:t,modifiers:{number:n}},s){const i=di(t);Kt(e,"change",()=>{const o=Array.prototype.filter.call(e.options,r=>r.selected).map(r=>n?Ks(ei(r)):ei(r));e._assign(e.multiple?i?new Set(o):o:o[0])}),e._assign=Zs(s)},mounted(e,{value:t}){Oa(e,t)},beforeUpdate(e,t,n){e._assign=Zs(n)},updated(e,{value:t}){Oa(e,t)}};function Oa(e,t){const n=e.multiple;if(!(n&&!Y(t)&&!di(t))){for(let s=0,i=e.options.length;s<i;s++){const o=e.options[s],r=ei(o);if(n)Y(t)?o.selected=Bm(t,r)>-1:o.selected=t.has(r);else if(mi(ei(o),t)){e.selectedIndex!==s&&(e.selectedIndex=s);return}}!n&&e.selectedIndex!==-1&&(e.selectedIndex=-1)}}function ei(e){return"_value"in e?e._value:e.value}const q_=Oe({patchProp:F_},x_);let Na;function z_(){return Na||(Na=o_(q_))}const K_=(...e)=>{const t=z_().createApp(...e),{mount:n}=t;return t.mount=s=>{const i=G_(s);if(!i)return;const o=t._component;!ee(o)&&!o.render&&!o.template&&(o.template=i.innerHTML),i.innerHTML="";const r=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),r},t};function G_(e){return Te(e)?document.querySelector(e):e}var Y_=!1;/*!
  * pinia v2.1.3
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */let Gc;const Ai=e=>Gc=e,Yc=Symbol();function yo(e){return e&&typeof e=="object"&&Object.prototype.toString.call(e)==="[object Object]"&&typeof e.toJSON!="function"}var Zn;(function(e){e.direct="direct",e.patchObject="patch object",e.patchFunction="patch function"})(Zn||(Zn={}));function X_(){const e=sc(!0),t=e.run(()=>bi({}));let n=[],s=[];const i=_i({install(o){Ai(i),i._a=o,o.provide(Yc,i),o.config.globalProperties.$pinia=i,s.forEach(r=>n.push(r)),s=[]},use(o){return!this._a&&!Y_?s.push(o):n.push(o),this},_p:n,_a:null,_e:e,_s:new Map,state:t});return i}const Xc=()=>{};function Ba(e,t,n,s=Xc){e.push(t);const i=()=>{const o=e.indexOf(t);o>-1&&(e.splice(o,1),s())};return!n&&ic()&&Dm(i),i}function un(e,...t){e.slice().forEach(n=>{n(...t)})}const Q_=e=>e();function wo(e,t){e instanceof Map&&t instanceof Map&&t.forEach((n,s)=>e.set(s,n)),e instanceof Set&&t instanceof Set&&t.forEach(e.add,e);for(const n in t){if(!t.hasOwnProperty(n))continue;const s=t[n],i=e[n];yo(i)&&yo(s)&&e.hasOwnProperty(n)&&!we(s)&&!Nt(s)?e[n]=wo(i,s):e[n]=s}return e}const J_=Symbol();function Z_(e){return!yo(e)||!e.hasOwnProperty(J_)}const{assign:Ct}=Object;function eb(e){return!!(we(e)&&e.effect)}function tb(e,t,n,s){const{state:i,actions:o,getters:r}=t,a=n.state.value[e];let l;function c(){a||(n.state.value[e]=i?i():{});const u=pg(n.state.value[e]);return Ct(u,o,Object.keys(r||{}).reduce((d,p)=>(d[p]=_i(je(()=>{Ai(n);const g=n._s.get(e);return r[p].call(g,g)})),d),{}))}return l=Qc(e,c,t,n,s,!0),l}function Qc(e,t,n={},s,i,o){let r;const a=Ct({actions:{}},n),l={deep:!0};let c,u,d=[],p=[],g;const P=s.state.value[e];!o&&!P&&(s.state.value[e]={}),bi({});let k;function A(L){let I;c=u=!1,typeof L=="function"?(L(s.state.value[e]),I={type:Zn.patchFunction,storeId:e,events:g}):(wo(s.state.value[e],L),I={type:Zn.patchObject,payload:L,storeId:e,events:g});const U=k=Symbol();tr().then(()=>{k===U&&(c=!0)}),u=!0,un(d,I,s.state.value[e])}const C=o?function(){const{state:I}=n,U=I?I():{};this.$patch(X=>{Ct(X,U)})}:Xc;function m(){r.stop(),d=[],p=[],s._s.delete(e)}function _(L,I){return function(){Ai(s);const U=Array.from(arguments),X=[],ie=[];function ue(Q){X.push(Q)}function Ce(Q){ie.push(Q)}un(p,{args:U,name:L,store:y,after:ue,onError:Ce});let ve;try{ve=I.apply(this&&this.$id===e?this:y,U)}catch(Q){throw un(ie,Q),Q}return ve instanceof Promise?ve.then(Q=>(un(X,Q),Q)).catch(Q=>(un(ie,Q),Promise.reject(Q))):(un(X,ve),ve)}}const b={_p:s,$id:e,$onAction:Ba.bind(null,p),$patch:A,$reset:C,$subscribe(L,I={}){const U=Ba(d,L,I.detached,()=>X()),X=r.run(()=>Yn(()=>s.state.value[e],ie=>{(I.flush==="sync"?u:c)&&L({storeId:e,type:Zn.direct,events:g},ie)},Ct({},l,I)));return U},$dispose:m},y=Wn(b);s._s.set(e,y);const S=s._a&&s._a.runWithContext||Q_,R=s._e.run(()=>(r=sc(),S(()=>r.run(t))));for(const L in R){const I=R[L];if(we(I)&&!eb(I)||Nt(I))o||(P&&Z_(I)&&(we(I)?I.value=P[L]:wo(I,P[L])),s.state.value[e][L]=I);else if(typeof I=="function"){const U=_(L,I);R[L]=U,a.actions[L]=I}}return Ct(y,R),Ct(le(y),R),Object.defineProperty(y,"$state",{get:()=>s.state.value[e],set:L=>{A(I=>{Ct(I,L)})}}),s._p.forEach(L=>{Ct(y,r.run(()=>L({store:y,app:s._a,pinia:s,options:a})))}),P&&o&&n.hydrate&&n.hydrate(y.$state,P),c=!0,u=!0,y}function nb(e,t,n){let s,i;const o=typeof t=="function";typeof e=="string"?(s=e,i=o?n:t):(i=e,s=e.id);function r(a,l){const c=Zg();return a=a||(c?dt(Yc,null):null),a&&Ai(a),a=Gc,a._s.has(s)||(o?Qc(s,t,i,a):tb(s,i,a)),a._s.get(s)}return r.$id=s,r}let sb="Store";function cr(...e){return e.reduce((t,n)=>(t[n.$id+sb]=function(){return n(this.$pinia)},t),{})}/*!
  * vue-router v4.2.1
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const hn=typeof window<"u";function ib(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const he=Object.assign;function zi(e,t){const n={};for(const s in t){const i=t[s];n[s]=nt(i)?i.map(e):e(i)}return n}const es=()=>{},nt=Array.isArray,ob=/\/$/,rb=e=>e.replace(ob,"");function Ki(e,t,n="/"){let s,i={},o="",r="";const a=t.indexOf("#");let l=t.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(s=t.slice(0,l),o=t.slice(l+1,a>-1?a:t.length),i=e(o)),a>-1&&(s=s||t.slice(0,a),r=t.slice(a,t.length)),s=ub(s??t,n),{fullPath:s+(o&&"?")+o+r,path:s,query:i,hash:r}}function ab(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function Ra(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function lb(e,t,n){const s=t.matched.length-1,i=n.matched.length-1;return s>-1&&s===i&&Pn(t.matched[s],n.matched[i])&&Jc(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function Pn(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Jc(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!cb(e[n],t[n]))return!1;return!0}function cb(e,t){return nt(e)?Da(e,t):nt(t)?Da(t,e):e===t}function Da(e,t){return nt(t)?e.length===t.length&&e.every((n,s)=>n===t[s]):e.length===1&&e[0]===t}function ub(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),s=e.split("/"),i=s[s.length-1];(i===".."||i===".")&&s.push("");let o=n.length-1,r,a;for(r=0;r<s.length;r++)if(a=s[r],a!==".")if(a==="..")o>1&&o--;else break;return n.slice(0,o).join("/")+"/"+s.slice(r-(r===s.length?1:0)).join("/")}var ds;(function(e){e.pop="pop",e.push="push"})(ds||(ds={}));var ts;(function(e){e.back="back",e.forward="forward",e.unknown=""})(ts||(ts={}));function db(e){if(!e)if(hn){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),rb(e)}const fb=/^[^#]+#/;function pb(e,t){return e.replace(fb,"#")+t}function hb(e,t){const n=document.documentElement.getBoundingClientRect(),s=e.getBoundingClientRect();return{behavior:t.behavior,left:s.left-n.left-(t.left||0),top:s.top-n.top-(t.top||0)}}const xi=()=>({left:window.pageXOffset,top:window.pageYOffset});function mb(e){let t;if("el"in e){const n=e.el,s=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;t=hb(i,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function Ma(e,t){return(history.state?history.state.position-t:-1)+e}const ko=new Map;function gb(e,t){ko.set(e,t)}function _b(e){const t=ko.get(e);return ko.delete(e),t}let bb=()=>location.protocol+"//"+location.host;function Zc(e,t){const{pathname:n,search:s,hash:i}=t,o=e.indexOf("#");if(o>-1){let a=i.includes(e.slice(o))?e.slice(o).length:1,l=i.slice(a);return l[0]!=="/"&&(l="/"+l),Ra(l,"")}return Ra(n,e)+s+i}function vb(e,t,n,s){let i=[],o=[],r=null;const a=({state:p})=>{const g=Zc(e,location),P=n.value,k=t.value;let A=0;if(p){if(n.value=g,t.value=p,r&&r===P){r=null;return}A=k?p.position-k.position:0}else s(g);i.forEach(C=>{C(n.value,P,{delta:A,type:ds.pop,direction:A?A>0?ts.forward:ts.back:ts.unknown})})};function l(){r=n.value}function c(p){i.push(p);const g=()=>{const P=i.indexOf(p);P>-1&&i.splice(P,1)};return o.push(g),g}function u(){const{history:p}=window;p.state&&p.replaceState(he({},p.state,{scroll:xi()}),"")}function d(){for(const p of o)p();o=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:d}}function La(e,t,n,s=!1,i=!1){return{back:e,current:t,forward:n,replaced:s,position:window.history.length,scroll:i?xi():null}}function yb(e){const{history:t,location:n}=window,s={value:Zc(e,n)},i={value:t.state};i.value||o(s.value,{back:null,current:s.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function o(l,c,u){const d=e.indexOf("#"),p=d>-1?(n.host&&document.querySelector("base")?e:e.slice(d))+l:bb()+e+l;try{t[u?"replaceState":"pushState"](c,"",p),i.value=c}catch(g){console.error(g),n[u?"replace":"assign"](p)}}function r(l,c){const u=he({},t.state,La(i.value.back,l,i.value.forward,!0),c,{position:i.value.position});o(l,u,!0),s.value=l}function a(l,c){const u=he({},i.value,t.state,{forward:l,scroll:xi()});o(u.current,u,!0);const d=he({},La(s.value,l,null),{position:u.position+1},c);o(l,d,!1),s.value=l}return{location:s,state:i,push:a,replace:r}}function wb(e){e=db(e);const t=yb(e),n=vb(e,t.state,t.location,t.replace);function s(o,r=!0){r||n.pauseListeners(),history.go(o)}const i=he({location:"",base:e,go:s,createHref:pb.bind(null,e)},t,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>t.state.value}),i}function kb(e){return typeof e=="string"||e&&typeof e=="object"}function eu(e){return typeof e=="string"||typeof e=="symbol"}const xt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},tu=Symbol("");var $a;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})($a||($a={}));function In(e,t){return he(new Error,{type:e,[tu]:!0},t)}function ht(e,t){return e instanceof Error&&tu in e&&(t==null||!!(e.type&t))}const Wa="[^/]+?",Eb={sensitive:!1,strict:!1,start:!0,end:!0},Tb=/[.+*?^${}()[\]/\\]/g;function Sb(e,t){const n=he({},Eb,t),s=[];let i=n.start?"^":"";const o=[];for(const c of e){const u=c.length?[]:[90];n.strict&&!c.length&&(i+="/");for(let d=0;d<c.length;d++){const p=c[d];let g=40+(n.sensitive?.25:0);if(p.type===0)d||(i+="/"),i+=p.value.replace(Tb,"\\$&"),g+=40;else if(p.type===1){const{value:P,repeatable:k,optional:A,regexp:C}=p;o.push({name:P,repeatable:k,optional:A});const m=C||Wa;if(m!==Wa){g+=10;try{new RegExp(`(${m})`)}catch(b){throw new Error(`Invalid custom RegExp for param "${P}" (${m}): `+b.message)}}let _=k?`((?:${m})(?:/(?:${m}))*)`:`(${m})`;d||(_=A&&c.length<2?`(?:/${_})`:"/"+_),A&&(_+="?"),i+=_,g+=20,A&&(g+=-8),k&&(g+=-20),m===".*"&&(g+=-50)}u.push(g)}s.push(u)}if(n.strict&&n.end){const c=s.length-1;s[c][s[c].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const r=new RegExp(i,n.sensitive?"":"i");function a(c){const u=c.match(r),d={};if(!u)return null;for(let p=1;p<u.length;p++){const g=u[p]||"",P=o[p-1];d[P.name]=g&&P.repeatable?g.split("/"):g}return d}function l(c){let u="",d=!1;for(const p of e){(!d||!u.endsWith("/"))&&(u+="/"),d=!1;for(const g of p)if(g.type===0)u+=g.value;else if(g.type===1){const{value:P,repeatable:k,optional:A}=g,C=P in c?c[P]:"";if(nt(C)&&!k)throw new Error(`Provided param "${P}" is an array but it is not repeatable (* or + modifiers)`);const m=nt(C)?C.join("/"):C;if(!m)if(A)p.length<2&&(u.endsWith("/")?u=u.slice(0,-1):d=!0);else throw new Error(`Missing required param "${P}"`);u+=m}}return u||"/"}return{re:r,score:s,keys:o,parse:a,stringify:l}}function Ab(e,t){let n=0;for(;n<e.length&&n<t.length;){const s=t[n]-e[n];if(s)return s;n++}return e.length<t.length?e.length===1&&e[0]===40+40?-1:1:e.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function xb(e,t){let n=0;const s=e.score,i=t.score;for(;n<s.length&&n<i.length;){const o=Ab(s[n],i[n]);if(o)return o;n++}if(Math.abs(i.length-s.length)===1){if(Fa(s))return 1;if(Fa(i))return-1}return i.length-s.length}function Fa(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const Cb={type:0,value:""},Pb=/[a-zA-Z0-9_]/;function Ib(e){if(!e)return[[]];if(e==="/")return[[Cb]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(g){throw new Error(`ERR (${n})/"${c}": ${g}`)}let n=0,s=n;const i=[];let o;function r(){o&&i.push(o),o=[]}let a=0,l,c="",u="";function d(){c&&(n===0?o.push({type:0,value:c}):n===1||n===2||n===3?(o.length>1&&(l==="*"||l==="+")&&t(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),o.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):t("Invalid state to consume buffer"),c="")}function p(){c+=l}for(;a<e.length;){if(l=e[a++],l==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:l==="/"?(c&&d(),r()):l===":"?(d(),n=1):p();break;case 4:p(),n=s;break;case 1:l==="("?n=2:Pb.test(l)?p():(d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${c}"`),d(),r(),i}function Ob(e,t,n){const s=Sb(Ib(e.path),n),i=he(s,{record:e,parent:t,children:[],alias:[]});return t&&!i.record.aliasOf==!t.record.aliasOf&&t.children.push(i),i}function Nb(e,t){const n=[],s=new Map;t=Ua({strict:!1,end:!0,sensitive:!1},t);function i(u){return s.get(u)}function o(u,d,p){const g=!p,P=Bb(u);P.aliasOf=p&&p.record;const k=Ua(t,u),A=[P];if("alias"in u){const _=typeof u.alias=="string"?[u.alias]:u.alias;for(const b of _)A.push(he({},P,{components:p?p.record.components:P.components,path:b,aliasOf:p?p.record:P}))}let C,m;for(const _ of A){const{path:b}=_;if(d&&b[0]!=="/"){const y=d.record.path,S=y[y.length-1]==="/"?"":"/";_.path=d.record.path+(b&&S+b)}if(C=Ob(_,d,k),p?p.alias.push(C):(m=m||C,m!==C&&m.alias.push(C),g&&u.name&&!Ha(C)&&r(u.name)),P.children){const y=P.children;for(let S=0;S<y.length;S++)o(y[S],C,p&&p.children[S])}p=p||C,(C.record.components&&Object.keys(C.record.components).length||C.record.name||C.record.redirect)&&l(C)}return m?()=>{r(m)}:es}function r(u){if(eu(u)){const d=s.get(u);d&&(s.delete(u),n.splice(n.indexOf(d),1),d.children.forEach(r),d.alias.forEach(r))}else{const d=n.indexOf(u);d>-1&&(n.splice(d,1),u.record.name&&s.delete(u.record.name),u.children.forEach(r),u.alias.forEach(r))}}function a(){return n}function l(u){let d=0;for(;d<n.length&&xb(u,n[d])>=0&&(u.record.path!==n[d].record.path||!nu(u,n[d]));)d++;n.splice(d,0,u),u.record.name&&!Ha(u)&&s.set(u.record.name,u)}function c(u,d){let p,g={},P,k;if("name"in u&&u.name){if(p=s.get(u.name),!p)throw In(1,{location:u});k=p.record.name,g=he(Va(d.params,p.keys.filter(m=>!m.optional).map(m=>m.name)),u.params&&Va(u.params,p.keys.map(m=>m.name))),P=p.stringify(g)}else if("path"in u)P=u.path,p=n.find(m=>m.re.test(P)),p&&(g=p.parse(P),k=p.record.name);else{if(p=d.name?s.get(d.name):n.find(m=>m.re.test(d.path)),!p)throw In(1,{location:u,currentLocation:d});k=p.record.name,g=he({},d.params,u.params),P=p.stringify(g)}const A=[];let C=p;for(;C;)A.unshift(C.record),C=C.parent;return{name:k,path:P,params:g,matched:A,meta:Db(A)}}return e.forEach(u=>o(u)),{addRoute:o,resolve:c,removeRoute:r,getRoutes:a,getRecordMatcher:i}}function Va(e,t){const n={};for(const s of t)s in e&&(n[s]=e[s]);return n}function Bb(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:Rb(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function Rb(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const s in e.components)t[s]=typeof n=="boolean"?n:n[s];return t}function Ha(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Db(e){return e.reduce((t,n)=>he(t,n.meta),{})}function Ua(e,t){const n={};for(const s in e)n[s]=s in t?t[s]:e[s];return n}function nu(e,t){return t.children.some(n=>n===e||nu(e,n))}const su=/#/g,Mb=/&/g,Lb=/\//g,$b=/=/g,Wb=/\?/g,iu=/\+/g,Fb=/%5B/g,Vb=/%5D/g,ou=/%5E/g,Hb=/%60/g,ru=/%7B/g,Ub=/%7C/g,au=/%7D/g,jb=/%20/g;function ur(e){return encodeURI(""+e).replace(Ub,"|").replace(Fb,"[").replace(Vb,"]")}function qb(e){return ur(e).replace(ru,"{").replace(au,"}").replace(ou,"^")}function Eo(e){return ur(e).replace(iu,"%2B").replace(jb,"+").replace(su,"%23").replace(Mb,"%26").replace(Hb,"`").replace(ru,"{").replace(au,"}").replace(ou,"^")}function zb(e){return Eo(e).replace($b,"%3D")}function Kb(e){return ur(e).replace(su,"%23").replace(Wb,"%3F")}function Gb(e){return e==null?"":Kb(e).replace(Lb,"%2F")}function ti(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function Yb(e){const t={};if(e===""||e==="?")return t;const s=(e[0]==="?"?e.slice(1):e).split("&");for(let i=0;i<s.length;++i){const o=s[i].replace(iu," "),r=o.indexOf("="),a=ti(r<0?o:o.slice(0,r)),l=r<0?null:ti(o.slice(r+1));if(a in t){let c=t[a];nt(c)||(c=t[a]=[c]),c.push(l)}else t[a]=l}return t}function ja(e){let t="";for(let n in e){const s=e[n];if(n=zb(n),s==null){s!==void 0&&(t+=(t.length?"&":"")+n);continue}(nt(s)?s.map(o=>o&&Eo(o)):[s&&Eo(s)]).forEach(o=>{o!==void 0&&(t+=(t.length?"&":"")+n,o!=null&&(t+="="+o))})}return t}function Xb(e){const t={};for(const n in e){const s=e[n];s!==void 0&&(t[n]=nt(s)?s.map(i=>i==null?null:""+i):s==null?s:""+s)}return t}const Qb=Symbol(""),qa=Symbol(""),dr=Symbol(""),lu=Symbol(""),To=Symbol("");function jn(){let e=[];function t(s){return e.push(s),()=>{const i=e.indexOf(s);i>-1&&e.splice(i,1)}}function n(){e=[]}return{add:t,list:()=>e,reset:n}}function It(e,t,n,s,i){const o=s&&(s.enterCallbacks[i]=s.enterCallbacks[i]||[]);return()=>new Promise((r,a)=>{const l=d=>{d===!1?a(In(4,{from:n,to:t})):d instanceof Error?a(d):kb(d)?a(In(2,{from:t,to:d})):(o&&s.enterCallbacks[i]===o&&typeof d=="function"&&o.push(d),r())},c=e.call(s&&s.instances[i],t,n,l);let u=Promise.resolve(c);e.length<3&&(u=u.then(l)),u.catch(d=>a(d))})}function Gi(e,t,n,s){const i=[];for(const o of e)for(const r in o.components){let a=o.components[r];if(!(t!=="beforeRouteEnter"&&!o.instances[r]))if(Jb(a)){const c=(a.__vccOpts||a)[t];c&&i.push(It(c,n,s,o,r))}else{let l=a();i.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${r}" at "${o.path}"`));const u=ib(c)?c.default:c;o.components[r]=u;const p=(u.__vccOpts||u)[t];return p&&It(p,n,s,o,r)()}))}}return i}function Jb(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function za(e){const t=dt(dr),n=dt(lu),s=je(()=>t.resolve(Zt(e.to))),i=je(()=>{const{matched:l}=s.value,{length:c}=l,u=l[c-1],d=n.matched;if(!u||!d.length)return-1;const p=d.findIndex(Pn.bind(null,u));if(p>-1)return p;const g=Ka(l[c-2]);return c>1&&Ka(u)===g&&d[d.length-1].path!==g?d.findIndex(Pn.bind(null,l[c-2])):p}),o=je(()=>i.value>-1&&nv(n.params,s.value.params)),r=je(()=>i.value>-1&&i.value===n.matched.length-1&&Jc(n.params,s.value.params));function a(l={}){return tv(l)?t[Zt(e.replace)?"replace":"push"](Zt(e.to)).catch(es):Promise.resolve()}return{route:s,href:je(()=>s.value.href),isActive:o,isExactActive:r,navigate:a}}const Zb=sr({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:za,setup(e,{slots:t}){const n=Wn(za(e)),{options:s}=dt(dr),i=je(()=>({[Ga(e.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[Ga(e.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const o=t.default&&t.default(n);return e.custom?o:Kc("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},o)}}}),ev=Zb;function tv(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function nv(e,t){for(const n in t){const s=t[n],i=e[n];if(typeof s=="string"){if(s!==i)return!1}else if(!nt(i)||i.length!==s.length||s.some((o,r)=>o!==i[r]))return!1}return!0}function Ka(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Ga=(e,t,n)=>e??t??n,sv=sr({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const s=dt(To),i=je(()=>e.route||s.value),o=dt(qa,0),r=je(()=>{let c=Zt(o);const{matched:u}=i.value;let d;for(;(d=u[c])&&!d.components;)c++;return c}),a=je(()=>i.value.matched[r.value]);Ws(qa,je(()=>r.value+1)),Ws(Qb,a),Ws(To,i);const l=bi();return Yn(()=>[l.value,a.value,e.name],([c,u,d],[p,g,P])=>{u&&(u.instances[d]=c,g&&g!==u&&c&&c===p&&(u.leaveGuards.size||(u.leaveGuards=g.leaveGuards),u.updateGuards.size||(u.updateGuards=g.updateGuards))),c&&u&&(!g||!Pn(u,g)||!p)&&(u.enterCallbacks[d]||[]).forEach(k=>k(c))},{flush:"post"}),()=>{const c=i.value,u=e.name,d=a.value,p=d&&d.components[u];if(!p)return Ya(n.default,{Component:p,route:c});const g=d.props[u],P=g?g===!0?c.params:typeof g=="function"?g(c):g:null,A=Kc(p,he({},P,t,{onVnodeUnmounted:C=>{C.component.isUnmounted&&(d.instances[u]=null)},ref:l}));return Ya(n.default,{Component:A,route:c})||A}}});function Ya(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const cu=sv;function iv(e){const t=Nb(e.routes,e),n=e.parseQuery||Yb,s=e.stringifyQuery||ja,i=e.history,o=jn(),r=jn(),a=jn(),l=ug(xt);let c=xt;hn&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=zi.bind(null,E=>""+E),d=zi.bind(null,Gb),p=zi.bind(null,ti);function g(E,W){let $,q;return eu(E)?($=t.getRecordMatcher(E),q=W):q=E,t.addRoute(q,$)}function P(E){const W=t.getRecordMatcher(E);W&&t.removeRoute(W)}function k(){return t.getRoutes().map(E=>E.record)}function A(E){return!!t.getRecordMatcher(E)}function C(E,W){if(W=he({},W||l.value),typeof E=="string"){const v=Ki(n,E,W.path),T=t.resolve({path:v.path},W),x=i.createHref(v.fullPath);return he(v,T,{params:p(T.params),hash:ti(v.hash),redirectedFrom:void 0,href:x})}let $;if("path"in E)$=he({},E,{path:Ki(n,E.path,W.path).path});else{const v=he({},E.params);for(const T in v)v[T]==null&&delete v[T];$=he({},E,{params:d(v)}),W.params=d(W.params)}const q=t.resolve($,W),ne=E.hash||"";q.params=u(p(q.params));const f=ab(s,he({},E,{hash:qb(ne),path:q.path})),h=i.createHref(f);return he({fullPath:f,hash:ne,query:s===ja?Xb(E.query):E.query||{}},q,{redirectedFrom:void 0,href:h})}function m(E){return typeof E=="string"?Ki(n,E,l.value.path):he({},E)}function _(E,W){if(c!==E)return In(8,{from:W,to:E})}function b(E){return R(E)}function y(E){return b(he(m(E),{replace:!0}))}function S(E){const W=E.matched[E.matched.length-1];if(W&&W.redirect){const{redirect:$}=W;let q=typeof $=="function"?$(E):$;return typeof q=="string"&&(q=q.includes("?")||q.includes("#")?q=m(q):{path:q},q.params={}),he({query:E.query,hash:E.hash,params:"path"in q?{}:E.params},q)}}function R(E,W){const $=c=C(E),q=l.value,ne=E.state,f=E.force,h=E.replace===!0,v=S($);if(v)return R(he(m(v),{state:typeof v=="object"?he({},ne,v.state):ne,force:f,replace:h}),W||$);const T=$;T.redirectedFrom=W;let x;return!f&&lb(s,q,$)&&(x=In(16,{to:T,from:q}),Ae(q,q,!0,!1)),(x?Promise.resolve(x):U(T,q)).catch(O=>ht(O)?ht(O,2)?O:ke(O):G(O,T,q)).then(O=>{if(O){if(ht(O,2))return R(he({replace:h},m(O.to),{state:typeof O.to=="object"?he({},ne,O.to.state):ne,force:f}),W||T)}else O=ie(T,q,!0,h,ne);return X(T,q,O),O})}function L(E,W){const $=_(E,W);return $?Promise.reject($):Promise.resolve()}function I(E){const W=ye.values().next().value;return W&&typeof W.runWithContext=="function"?W.runWithContext(E):E()}function U(E,W){let $;const[q,ne,f]=ov(E,W);$=Gi(q.reverse(),"beforeRouteLeave",E,W);for(const v of q)v.leaveGuards.forEach(T=>{$.push(It(T,E,W))});const h=L.bind(null,E,W);return $.push(h),ge($).then(()=>{$=[];for(const v of o.list())$.push(It(v,E,W));return $.push(h),ge($)}).then(()=>{$=Gi(ne,"beforeRouteUpdate",E,W);for(const v of ne)v.updateGuards.forEach(T=>{$.push(It(T,E,W))});return $.push(h),ge($)}).then(()=>{$=[];for(const v of E.matched)if(v.beforeEnter&&!W.matched.includes(v))if(nt(v.beforeEnter))for(const T of v.beforeEnter)$.push(It(T,E,W));else $.push(It(v.beforeEnter,E,W));return $.push(h),ge($)}).then(()=>(E.matched.forEach(v=>v.enterCallbacks={}),$=Gi(f,"beforeRouteEnter",E,W),$.push(h),ge($))).then(()=>{$=[];for(const v of r.list())$.push(It(v,E,W));return $.push(h),ge($)}).catch(v=>ht(v,8)?v:Promise.reject(v))}function X(E,W,$){for(const q of a.list())I(()=>q(E,W,$))}function ie(E,W,$,q,ne){const f=_(E,W);if(f)return f;const h=W===xt,v=hn?history.state:{};$&&(q||h?i.replace(E.fullPath,he({scroll:h&&v&&v.scroll},ne)):i.push(E.fullPath,ne)),l.value=E,Ae(E,W,$,h),ke()}let ue;function Ce(){ue||(ue=i.listen((E,W,$)=>{if(!xe.listening)return;const q=C(E),ne=S(q);if(ne){R(he(ne,{replace:!0}),q).catch(es);return}c=q;const f=l.value;hn&&gb(Ma(f.fullPath,$.delta),xi()),U(q,f).catch(h=>ht(h,12)?h:ht(h,2)?(R(h.to,q).then(v=>{ht(v,20)&&!$.delta&&$.type===ds.pop&&i.go(-1,!1)}).catch(es),Promise.reject()):($.delta&&i.go(-$.delta,!1),G(h,q,f))).then(h=>{h=h||ie(q,f,!1),h&&($.delta&&!ht(h,8)?i.go(-$.delta,!1):$.type===ds.pop&&ht(h,20)&&i.go(-1,!1)),X(q,f,h)}).catch(es)}))}let ve=jn(),Q=jn(),Z;function G(E,W,$){ke(E);const q=Q.list();return q.length?q.forEach(ne=>ne(E,W,$)):console.error(E),Promise.reject(E)}function me(){return Z&&l.value!==xt?Promise.resolve():new Promise((E,W)=>{ve.add([E,W])})}function ke(E){return Z||(Z=!E,Ce(),ve.list().forEach(([W,$])=>E?$(E):W()),ve.reset()),E}function Ae(E,W,$,q){const{scrollBehavior:ne}=e;if(!hn||!ne)return Promise.resolve();const f=!$&&_b(Ma(E.fullPath,0))||(q||!$)&&history.state&&history.state.scroll||null;return tr().then(()=>ne(E,W,f)).then(h=>h&&mb(h)).catch(h=>G(h,E,W))}const ce=E=>i.go(E);let Ve;const ye=new Set,xe={currentRoute:l,listening:!0,addRoute:g,removeRoute:P,hasRoute:A,getRoutes:k,resolve:C,options:e,push:b,replace:y,go:ce,back:()=>ce(-1),forward:()=>ce(1),beforeEach:o.add,beforeResolve:r.add,afterEach:a.add,onError:Q.add,isReady:me,install(E){const W=this;E.component("RouterLink",ev),E.component("RouterView",cu),E.config.globalProperties.$router=W,Object.defineProperty(E.config.globalProperties,"$route",{enumerable:!0,get:()=>Zt(l)}),hn&&!Ve&&l.value===xt&&(Ve=!0,b(i.location).catch(ne=>{}));const $={};for(const ne in xt)$[ne]=je(()=>l.value[ne]);E.provide(dr,W),E.provide(lu,Wn($)),E.provide(To,l);const q=E.unmount;ye.add(E),E.unmount=function(){ye.delete(E),ye.size<1&&(c=xt,ue&&ue(),ue=null,l.value=xt,Ve=!1,Z=!1),q()}}};function ge(E){return E.reduce((W,$)=>W.then(()=>I($)),Promise.resolve())}return xe}function ov(e,t){const n=[],s=[],i=[],o=Math.max(t.matched.length,e.matched.length);for(let r=0;r<o;r++){const a=t.matched[r];a&&(e.matched.find(c=>Pn(c,a))?s.push(a):n.push(a));const l=e.matched[r];l&&(t.matched.find(c=>Pn(c,l))||i.push(l))}return[n,s,i]}const Se=(e,t)=>{const n=e.__vccOpts||e;for(const[s,i]of t)n[s]=i;return n},rv={},av={class:"navbar navbar-expand-lg navbar-dark"},lv=f_('<div class="container-fluid" data-v-3963988f><a class="navbar-brand" href="/" data-v-3963988f><div style="border:0px solid white;border-radius:0px;background-color:transparent;background-image:url(&#39;/webapp/logo.png&#39;);background-repeat:round;background-origin:content-box;width:30px;height:30px;" class="d-inline-block align-top" data-v-3963988f></div> Insightic </a><button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" data-v-3963988f><span class="navbar-toggler-icon" data-v-3963988f></span></button><div class="collapse navbar-collapse" id="navbarNav" data-v-3963988f><ul class="navbar-nav" data-v-3963988f><li class="nav-item active" data-v-3963988f><a class="nav-link" href="/webapp" data-v-3963988f>Teams</a></li><li class="nav-item" data-v-3963988f><a class="nav-link" href="#" data-v-3963988f>Contact Us</a></li></ul></div></div>',1),cv=[lv];function uv(e,t){return F(),H("nav",av,cv)}const dv=Se(rv,[["render",uv],["__scopeId","data-v-3963988f"]]),fv=sr({__name:"App",setup(e){return(t,n)=>(F(),H(fe,null,[oe(dv),oe(Zt(cu))],64))}}),pv={props:{name:String,guid:String},methods:{onClick(){this.$router.push(`/organizations/${this.guid}`)}}};const uu=e=>(bs("data-v-e1e02cda"),e=e(),vs(),e),hv={class:"d-flex",style:{"justify-content":"space-around"}},mv=uu(()=>w("i",{class:"bi bi-boxes"},null,-1)),gv=uu(()=>w("i",{class:"bi bi-chevron-right"},null,-1));function _v(e,t,n,s,i,o){return F(),H("div",{class:"org-button mx-auto",onClick:t[0]||(t[0]=(...r)=>o.onClick&&o.onClick(...r))},[w("div",hv,[mv,w("div",null,re(n.name),1),gv])])}const bv=Se(pv,[["render",_v],["__scopeId","data-v-e1e02cda"]]),vv=`// Biswap token with Governance.
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
`,yv=`pragma solidity =0.5.16;

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
`,wv=`pragma solidity =0.5.16;

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
`,kv=`pragma solidity =0.5.16;

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
`,Yi={guid:"e262d5c2-16f8-47a0-8c70-4019514d137a",logo:"/webapp/logos/biswap.jpeg",name:"BiSwap LP",url:"https://biswap.org",author:"John Doe",rating:"B-",description:"BiSwap LP is a liquidity pool for the BiSwap DEX",tags:["P2P Trading","Deposits","DEX"],status:"In Progress",dueAt:"2023-05-25T00:00:00.000Z",overviewView:[{title:"Business Model Analysis",props:[{component:"PropDisplayCard",title:"Business model & Value Proposition",text:"Biswap is a trusted DEX platform on the BNB Chain Network with a Multi-type Referral Program and low trade fee starting from 0.1%. Biswap is the ecosystem that offers the best service and creates new standards in DeFi.",tags:["P2P Trading","Deposits","DEX"],regulations:[{text:"https://www.1.com",href:"https://www.1.com"}]},{component:"PropDisplayCard",title:"Customer Segments",text:"Retail investors who need to swap tokens<br/>Institutiona funds who conduct AMM business<br/>VASPs who IDO"}]},{title:"Social Media Analysis",props:[{component:"PropDisplayCard",title:"Twitter Analysis",text:"Biswap is a trusted DEX platform on the BNB Chain Network with a Multi-type Referral Program and low trade fee starting from 0.1%. Biswap is the ecosystem that offers the best service and creates new standards in DeFi.",tags:["P2P Trading","Deposits"],regulations:[{text:"https://www.1.com",href:"https://www.1.com"}]},{component:"PropDisplayCard",title:"Blog Analysis",text:"Retail investors who need to swap tokens<br/>Institutiona funds who conduct AMM business<br/>VASPs who IDO"}]},{title:"On-Chain Data Analysis",props:[{component:"PropDisplayKeyValue",title:"Pools & Volume",values:[{key:"Number of Pools",value:"3,234,132"},{key:"7 Days Volume",value:"$76,261,658"},{key:"24 Hrs Volumne",value:"$5,291,480"},{key:"Changes",value:"-61.71%"}]},{component:"PropDisplayKeyValue",title:"Customer Persona",values:[{key:"Unique Address",value:"1,2888,378"},{key:"Bot Rate",value:"21%"},{key:"Retails / Total (volume)",value:"26%"},{key:"Retails / Total (Acct.)",value:"86%"}]}]},{title:"Team Background Analysis",props:[{component:"PropDisplayCard",title:"Overview",text:"The Biswap team is a diverse group of professionals with a wide range of skills and experiences."},{component:"PropDisplayCard",title:"Background",text:"BiSwap team is anonymous."},{component:"PropDisplayKeyValue",title:"Team",values:[{key:"CEO | EK",value:"More than 7 years in the crypto industry. Strong analytic and management skills."},{key:"Product Manager | Kevin",value:"Extensive 11+ years of work experience in product development. More than 7 years in the crypto space."},{key:"Product Owner | Miles",value:"Great 5 years of experience and professional vision in Product Management."},{key:"Head of IT | Nick",value:"More than 6 years of experience as a backend & front-end developer and more than 4 years of experience in the field of solidity programming."}]}]}],assessmentView:{whitepaper:[{text:"✅ [dex011]",footer:"Tokens symbol is BSW",desciptionTitle:"Ticker Symbol: BSW",desciptionText:"contract BSWToken is BEP20('Biswap', 'BSW')"},{text:"✅ [dex012]",footer:"BEP-20 standard",desciptionTitle:"Chain: BNB Chain (BEP-20)",desciptionText:"Contract BSWToken is BEP20('Biswap', 'BSW')"},{text:"✅ [dex013]",footer:"700000000",desciptionTitle:"Max Supply: 700 000 000 BSW tokens",desciptionText:"The total token supply is 700,000,000"},{text:"❌ [dex014]",footer:"Is ERC20 Token Standard Implemented?",desciptionTitle:"No, BEP-20 token standard is implemented which is specific to the Binance Smart Chain (BSC) ecosystem",desciptionText:"Yes, ERC20 token standards is implemented, inherits from the BiswapERC20 contract with ERC20 interface."},{text:"✅ [dex015]",footer:"How many types of Swap Fee Tiers are mentioned in code?",desciptionTitle:"N.A.",desciptionText:"There is only one swapFee tier, which can be set by calling the `setSwapFee` function. The default value of the swapFee is 1."},{text:"✅ [dex016]",footer:"What is the swap fee for a single token swap?",desciptionTitle:"The swap fee charged when someone makes a token swap on Biswap is 0.2% or 0.1%, depending on the trading pair. For most trading pairs, the fee is 0.2%, and for some specific pairs such as BUSD-USDT, USDC-USDT, and DAI-USDT, the fee is 0.1%.",desciptionText:"The default swap fee is 1 basis point (0.01%)."},{text:"✅ [dex017]",footer:"How much of the swap fee will be taken by developers by _mintFee()?",desciptionTitle:"Unspecfied in whitepaper, but this function mints new BSW tokens from the swap fee, which are distributed to stakeholders, including developers.",desciptionText:"The amount of the fee is calculated based on the change in the product of the reserves, and is proportional to the square root of the product of the reserves. The proportion of the fee that is taken by the developers is set by the `devFee` variable, which is also initialized to 1 in the contract."},{text:"✅ [dex018]",footer:"Is the code Applicable to AMM?",desciptionTitle:"The code presented in the excerpt is applicable to AMM (Automated Market Maker) protocol, which is used by the Biswap Exchange.",desciptionText:"Yes, this code is applicable to Automated Market Maker (AMM) as it implements the core functionality of a DEX, including liquidity provision, token swaps, and fee collection."},{text:"✅ [dex019]",footer:"Is trading pairs other than those with WBNB allowed?",desciptionTitle:"No clear answer but it does mention that users can swap eligible trading pairs and stake BSW to activate them in the Multi-Reward Pool to earn rewards in different tokens such as BSW, BNB, and BUSD.",desciptionText:"The provided code does not explicitly mention WBNB. However, the Biswap DEX supports trading pairs between any two ERC20 tokens, not just WBNB."},{text:"✅ [dex0110]",footer:"Is the smart contracts capable to prevent frontrunning attacks?",desciptionTitle:"N.A.",desciptionText:'The Biswap smart contract does not have a built-in functionality to prevent frontrunning attacks. However, Biswap uses a mechanism called "time-weighted average price" (TWAP) to mitigate the impact of such attacks. This mechanism calculates the average price of a token over a certain period of time, making it more difficult for attackers to profit from short-term price movements.'},{text:"✅ [dex0111]",footer:"Is on-chain or off-chain price feeds used for the token prices?",desciptionTitle:"N.A.",desciptionText:"The Biswap smart contract does not use on-chain or off-chain price feeds for its token prices. Instead, it calculates the token prices based on the reserves of the tokens in the liquidity pool."},{text:"✅ [dex0112]",footer:"Does the smart contract implement a decentralized governance mechanism?",desciptionTitle:"No clear answer but it does mention that users can swap eligible trading pairs and stake BSW to activate them in the Multi-Reward Pool to earn rewards in different tokens such as BSW, BNB, and BUSD.",desciptionText:"No, the Biswap smart contract does not implement a decentralized governance mechanism."},{text:"✅ [dex0113]",footer:"Is there a restriction on the maximum transaction amount or frequency for a given address?",desciptionTitle:"No clear answer but it does mention that users can swap eligible trading pairs and stake BSW to activate them in the Multi-Reward Pool to earn rewards in different tokens such as BSW, BNB, and BUSD.",desciptionText:"The Biswap smart contract does not impose any restrictions on the maximum transaction amount or frequency for a given address."}],regulations:[{text:"✅ [dex011]",footer:"Tokens symbol is BSW",desciptionTitle:"Ticker Symbol: BSW",desciptionText:"contract BSWToken is BEP20('Biswap', 'BSW')"},{text:"✅ [dex012]",footer:"BEP-20 standard",desciptionTitle:"Chain: BNB Chain (BEP-20)",desciptionText:"Contract BSWToken is BEP20('Biswap', 'BSW')"},{text:"✅ [dex013]",footer:"700000000",desciptionTitle:"Max Supply: 700 000 000 BSW tokens",desciptionText:"The total token supply is 700,000,000"},{text:"❌ [dex014]",footer:"Is ERC20 Token Standard Implemented?",desciptionTitle:"No, BEP-20 token standard is implemented which is specific to the Binance Smart Chain (BSC) ecosystem",desciptionText:"Yes, ERC20 token standards is implemented, inherits from the BiswapERC20 contract with ERC20 interface."}],industryStandard:[{text:"✅ [dex011]",footer:"Tokens symbol is BSW",desciptionTitle:"Ticker Symbol: BSW",desciptionText:"contract BSWToken is BEP20('Biswap', 'BSW')"}],contracts:{"BSWToken.sol":vv,"BiswapERC20.sol":yv,"BiswapFactory.sol":wv,"BiswapPair.sol":kv},codeQuality:[{label:"Maintainability",text:"A",footer:"Created by SonarCube"},{label:"Test Coverage",text:"80%",footer:"Created by Jest"},{label:"Performance",text:"B",footer:"Created by GPT"}],securityAnalysis:[{label:"Score",text:"80/100",footer:"Created by Hacken"},{label:"Audits",text:"85/100",footer:"Created by Verazt"}],codeSimilarity:[{label:"UniSwap",text:"63%"},{label:"PancakeSwap",text:"49%"},{label:"ParaSwap",text:"29%"}],explanation:"BiSwap is a decentralized exchange platform that allows users to easily swap BEP-20 tokens on the Binance Smart Chain network. The platform features a three-level referral system and low transaction fees (0.1%). Our mission is to become a leading platform for token swaps in the DeFi space by offering fast, secure, and easy-to-use services."},actionsView:{actions:[{title:"Require 1 or more security audit report",text:"Suggest the VASP to submit at least another security audit report within 45 days...",type:"danger"},{title:"Code has not been updates for long time",text:"Suggest the VASP to link Github account or submit a new code base.",type:"warn"},{title:"Risky wallets interaction",text:"The deployed contract has attracted many newly wallets. Require VASP to validate...",type:"primary"},{title:"Code has high similarity to Uniswap",text:"Suggest the VASP to further clarify the differences for not violating Business S...",type:"danger"},{title:"High botting rate",text:"Suggest to review the VASP's solution on bot detection and IP restriction.",type:"warn"},{title:"Core contract has been modified recently",text:"Dangerous to update the core smart contract code. The audit reports may not be s...",type:"primary"},{title:"Orderbook Spoofing",text:"There is a high chance that the order book design has no restriction on spoofing...",type:"danger"}],tasks:[{title:"Require 1 or more security audit report",text:"Suggest the VASP to submit at least another security audit report within 45 days...",type:"danger"},{title:"Code has not been updates for long time",text:"Suggest the VASP to link Github account or submit a new code base.",type:"warn"},{title:"Risky wallets interaction",text:"The deployed contract has attracted many newly wallets. Require VASP to validate...",type:"primary"}]}},Ev=`// SPDX-License-Identifier: MIT  
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
}`,Tv=`// SPDX-License-Identifier: NO LICENSE  

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
}`,Sv=`// SPDX-License-Identifier: NO LICENSE  

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
}`,Av=`// SPDX-License-Identifier: NO LICENSE
pragma solidity ^0.8.0;

interface IControllable1155 {
  function mint(address recipient, uint256 id, uint256 amount) external;
}`,Xi={guid:"e262d5c2-16f8-47a0-8c70-4019514d137b",logo:"/webapp/logos/wolfgame.jpeg",name:"Wolf Game",url:"https://wolf.game",author:"John Doe",rating:"B-",description:"Wolf Game is a game where you play as a wolf",tags:["Game","NFT"],status:"In Progress",dueAt:"2023-05-25T00:00:00.000Z",overviewView:[{title:"Business Model Analysis",props:[{component:"PropDisplayCard",title:"Business model & Value Proposition",text:"Biswap is a trusted DEX platform on the BNB Chain Network with a Multi-type Referral Program and low trade fee starting from 0.1%. Biswap is the ecosystem that offers the best service and creates new standards in DeFi.",tags:["P2P Trading","Deposits"],regulations:[{text:"https://www.1.com",href:"https://www.1.com"}]},{component:"PropDisplayCard",title:"Customer Segments",text:"Retail investors who need to swap tokens<br/>Institutiona funds who conduct AMM business<br/>VASPs who IDO"}]},{title:"Social Media Analysis",props:[{component:"PropDisplayCard",title:"Twitter Analysis",text:"Biswap is a trusted DEX platform on the BNB Chain Network with a Multi-type Referral Program and low trade fee starting from 0.1%. Biswap is the ecosystem that offers the best service and creates new standards in DeFi.",tags:["P2P Trading","Deposits"],regulations:[{text:"https://www.1.com",href:"https://www.1.com"}]},{component:"PropDisplayCard",title:"Blog Analysis",text:"Retail investors who need to swap tokens<br/>Institutiona funds who conduct AMM business<br/>VASPs who IDO"}]},{title:"On-Chain Data Analysis",props:[{component:"PropDisplayKeyValue",title:"Pools & Volume",values:[{key:"Number of Pools",value:"3,234,132"},{key:"7 Days Volume",value:"$76,261,658"},{key:"24 Hrs Volumne",value:"$5,291,480"},{key:"Changes",value:"-61.71%"}]},{component:"PropDisplayKeyValue",title:"Customer Persona",values:[{key:"Unique Address",value:"1,2888,378"},{key:"Bot Rate",value:"21%"},{key:"Retails / Total (volume)",value:"26%"},{key:"Retails / Total (Acct.)",value:"86%"}]}]}],assessmentView:{whitepaper:[{text:"✅ [dex011]",footer:"Tokens symbol is BSW",desciptionTitle:"Ticker Symbol: BSW",desciptionText:"contract BSWToken is BEP20('Biswap', 'BSW')"},{text:"✅ [dex012]",footer:"BEP-20 standard",desciptionTitle:"Chain: BNB Chain (BEP-20)",desciptionText:"Contract BSWToken is BEP20('Biswap', 'BSW')"},{text:"✅ [dex013]",footer:"700000000",desciptionTitle:"Max Supply: 700 000 000 BSW tokens",desciptionText:"The total token supply is 700,000,000"},{text:"❌ [dex014]",footer:"Is ERC20 Token Standard Implemented?",desciptionTitle:"No, BEP-20 token standard is implemented which is specific to the Binance Smart Chain (BSC) ecosystem",desciptionText:"Yes, ERC20 token standards is implemented, inherits from the BiswapERC20 contract with ERC20 interface."},{text:"✅ [dex015]",footer:"How many types of Swap Fee Tiers are mentioned in code?",desciptionTitle:"N.A.",desciptionText:"There is only one swapFee tier, which can be set by calling the `setSwapFee` function. The default value of the swapFee is 1."},{text:"✅ [dex016]",footer:"What is the swap fee for a single token swap?",desciptionTitle:"The swap fee charged when someone makes a token swap on Biswap is 0.2% or 0.1%, depending on the trading pair. For most trading pairs, the fee is 0.2%, and for some specific pairs such as BUSD-USDT, USDC-USDT, and DAI-USDT, the fee is 0.1%.",desciptionText:"The default swap fee is 1 basis point (0.01%)."},{text:"✅ [dex017]",footer:"How much of the swap fee will be taken by developers by _mintFee()?",desciptionTitle:"Unspecfied in whitepaper, but this function mints new BSW tokens from the swap fee, which are distributed to stakeholders, including developers.",desciptionText:"The amount of the fee is calculated based on the change in the product of the reserves, and is proportional to the square root of the product of the reserves. The proportion of the fee that is taken by the developers is set by the `devFee` variable, which is also initialized to 1 in the contract."},{text:"✅ [dex018]",footer:"Is the code Applicable to AMM?",desciptionTitle:"The code presented in the excerpt is applicable to AMM (Automated Market Maker) protocol, which is used by the Biswap Exchange.",desciptionText:"Yes, this code is applicable to Automated Market Maker (AMM) as it implements the core functionality of a DEX, including liquidity provision, token swaps, and fee collection."},{text:"✅ [dex019]",footer:"Is trading pairs other than those with WBNB allowed?",desciptionTitle:"No clear answer but it does mention that users can swap eligible trading pairs and stake BSW to activate them in the Multi-Reward Pool to earn rewards in different tokens such as BSW, BNB, and BUSD.",desciptionText:"The provided code does not explicitly mention WBNB. However, the Biswap DEX supports trading pairs between any two ERC20 tokens, not just WBNB."},{text:"✅ [dex0110]",footer:"Is the smart contracts capable to prevent frontrunning attacks?",desciptionTitle:"N.A.",desciptionText:'The Biswap smart contract does not have a built-in functionality to prevent frontrunning attacks. However, Biswap uses a mechanism called "time-weighted average price" (TWAP) to mitigate the impact of such attacks. This mechanism calculates the average price of a token over a certain period of time, making it more difficult for attackers to profit from short-term price movements.'},{text:"✅ [dex0111]",footer:"Is on-chain or off-chain price feeds used for the token prices?",desciptionTitle:"N.A.",desciptionText:"The Biswap smart contract does not use on-chain or off-chain price feeds for its token prices. Instead, it calculates the token prices based on the reserves of the tokens in the liquidity pool."},{text:"✅ [dex0112]",footer:"Does the smart contract implement a decentralized governance mechanism?",desciptionTitle:"No clear answer but it does mention that users can swap eligible trading pairs and stake BSW to activate them in the Multi-Reward Pool to earn rewards in different tokens such as BSW, BNB, and BUSD.",desciptionText:"No, the Biswap smart contract does not implement a decentralized governance mechanism."},{text:"✅ [dex0113]",footer:"Is there a restriction on the maximum transaction amount or frequency for a given address?",desciptionTitle:"No clear answer but it does mention that users can swap eligible trading pairs and stake BSW to activate them in the Multi-Reward Pool to earn rewards in different tokens such as BSW, BNB, and BUSD.",desciptionText:"The Biswap smart contract does not impose any restrictions on the maximum transaction amount or frequency for a given address."}],regulations:[{text:"✅ [dex011]",footer:"Tokens symbol is BSW",desciptionTitle:"Ticker Symbol: BSW",desciptionText:"contract BSWToken is BEP20('Biswap', 'BSW')"},{text:"✅ [dex012]",footer:"BEP-20 standard",desciptionTitle:"Chain: BNB Chain (BEP-20)",desciptionText:"Contract BSWToken is BEP20('Biswap', 'BSW')"},{text:"✅ [dex013]",footer:"700000000",desciptionTitle:"Max Supply: 700 000 000 BSW tokens",desciptionText:"The total token supply is 700,000,000"},{text:"❌ [dex014]",footer:"Is ERC20 Token Standard Implemented?",desciptionTitle:"No, BEP-20 token standard is implemented which is specific to the Binance Smart Chain (BSC) ecosystem",desciptionText:"Yes, ERC20 token standards is implemented, inherits from the BiswapERC20 contract with ERC20 interface."}],industryStandard:[{text:"✅ [dex011]",footer:"Tokens symbol is BSW",desciptionTitle:"Ticker Symbol: BSW",desciptionText:"contract BSWToken is BEP20('Biswap', 'BSW')"}],contracts:{"Allegiance.sol":Ev,"CaveGame.sol":Tv,"FarmerGem.sol":Sv,"IControllable1155.sol":Av},codeQuality:[{label:"Maintainability",text:"A",footer:"Created by SonarCube"},{label:"Test Coverage",text:"80%",footer:"Created by Jest"},{label:"Performance",text:"B",footer:"Created by GPT"}],securityAnalysis:[{label:"Score",text:"80/100",footer:"Created by Hacken"},{label:"Audits",text:"85/100",footer:"Created by Verazt"}],explanation:"BiSwap is a decentralized exchange platform that allows users to easily swap BEP-20 tokens on the Binance Smart Chain network. The platform features a three-level referral system and low transaction fees (0.1%). Our mission is to become a leading platform for token swaps in the DeFi space by offering fast, secure, and easy-to-use services."},actionsView:{actions:[{title:"Require 1 or more security audit report",text:"Suggest the VASP to submit at least another security audit report within 45 days...",type:"danger"},{title:"Code has not been updates for long time",text:"Suggest the VASP to link Github account or submit a new code base.",type:"warn"},{title:"Risky wallets interaction",text:"The deployed contract has attracted many newly wallets. Require VASP to validate...",type:"primary"},{title:"Code has high similarity to Uniswap",text:"Suggest the VASP to further clarify the differences for not violating Business S...",type:"danger"},{title:"High botting rate",text:"Suggest to review the VASP's solution on bot detection and IP restriction.",type:"warn"},{title:"Core contract has been modified recently",text:"Dangerous to update the core smart contract code. The audit reports may not be s...",type:"primary"},{title:"Orderbook Spoofing",text:"There is a high chance that the order book design has no restriction on spoofing...",type:"danger"}],tasks:[{title:"Require 1 or more security audit report",text:"Suggest the VASP to submit at least another security audit report within 45 days...",type:"danger"},{title:"Code has not been updates for long time",text:"Suggest the VASP to link Github account or submit a new code base.",type:"warn"},{title:"Risky wallets interaction",text:"The deployed contract has attracted many newly wallets. Require VASP to validate...",type:"primary"}]}},Qi={guid:"e262d5c2-16f8-47a0-8c70-4019514d137c",logo:"/webapp/logos/pooltogether.jpeg",name:"Pool Together",url:"https://pooltogether.com",author:"John Doe",rating:"B-",description:"Pool Together is a lottery game",tags:["Pool","NFT"],status:"In Progress",dueAt:"2023-05-25T00:00:00.000Z",overviewView:[{title:"Business Model Analysis",props:[{component:"PropDisplayCard",title:"Business model & Value Proposition",text:"Biswap is a trusted DEX platform on the BNB Chain Network with a Multi-type Referral Program and low trade fee starting from 0.1%. Biswap is the ecosystem that offers the best service and creates new standards in DeFi.",tags:["P2P Trading","Deposits"],regulations:[{text:"https://www.1.com",href:"https://www.1.com"}]},{component:"PropDisplayCard",title:"Customer Segments",text:"Retail investors who need to swap tokens<br/>Institutiona funds who conduct AMM business<br/>VASPs who IDO"}]},{title:"Social Media Analysis",props:[{component:"PropDisplayCard",title:"Twitter Analysis",text:"Biswap is a trusted DEX platform on the BNB Chain Network with a Multi-type Referral Program and low trade fee starting from 0.1%. Biswap is the ecosystem that offers the best service and creates new standards in DeFi.",tags:["P2P Trading","Deposits"],regulations:[{text:"https://www.1.com",href:"https://www.1.com"}]},{component:"PropDisplayCard",title:"Blog Analysis",text:"Retail investors who need to swap tokens<br/>Institutiona funds who conduct AMM business<br/>VASPs who IDO"}]},{title:"On-Chain Data Analysis",props:[{component:"PropDisplayKeyValue",title:"Pools & Volume",values:[{key:"Number of Pools",value:"3,234,132"},{key:"7 Days Volume",value:"$76,261,658"},{key:"24 Hrs Volumne",value:"$5,291,480"},{key:"Changes",value:"-61.71%"}]},{component:"PropDisplayKeyValue",title:"Customer Persona",values:[{key:"Unique Address",value:"1,2888,378"},{key:"Bot Rate",value:"21%"},{key:"Retails / Total (volume)",value:"26%"},{key:"Retails / Total (Acct.)",value:"86%"}]}]}],assessmentView:{whitepaper:[{text:"✅ [dex011]",footer:"Tokens symbol is BSW",desciptionTitle:"Ticker Symbol: BSW",desciptionText:"contract BSWToken is BEP20('Biswap', 'BSW')"},{text:"✅ [dex012]",footer:"BEP-20 standard",desciptionTitle:"Chain: BNB Chain (BEP-20)",desciptionText:"Contract BSWToken is BEP20('Biswap', 'BSW')"},{text:"✅ [dex013]",footer:"700000000",desciptionTitle:"Max Supply: 700 000 000 BSW tokens",desciptionText:"The total token supply is 700,000,000"},{text:"❌ [dex014]",footer:"Is ERC20 Token Standard Implemented?",desciptionTitle:"No, BEP-20 token standard is implemented which is specific to the Binance Smart Chain (BSC) ecosystem",desciptionText:"Yes, ERC20 token standards is implemented, inherits from the BiswapERC20 contract with ERC20 interface."},{text:"✅ [dex015]",footer:"How many types of Swap Fee Tiers are mentioned in code?",desciptionTitle:"N.A.",desciptionText:"There is only one swapFee tier, which can be set by calling the `setSwapFee` function. The default value of the swapFee is 1."},{text:"✅ [dex016]",footer:"What is the swap fee for a single token swap?",desciptionTitle:"The swap fee charged when someone makes a token swap on Biswap is 0.2% or 0.1%, depending on the trading pair. For most trading pairs, the fee is 0.2%, and for some specific pairs such as BUSD-USDT, USDC-USDT, and DAI-USDT, the fee is 0.1%.",desciptionText:"The default swap fee is 1 basis point (0.01%)."},{text:"✅ [dex017]",footer:"How much of the swap fee will be taken by developers by _mintFee()?",desciptionTitle:"Unspecfied in whitepaper, but this function mints new BSW tokens from the swap fee, which are distributed to stakeholders, including developers.",desciptionText:"The amount of the fee is calculated based on the change in the product of the reserves, and is proportional to the square root of the product of the reserves. The proportion of the fee that is taken by the developers is set by the `devFee` variable, which is also initialized to 1 in the contract."},{text:"✅ [dex018]",footer:"Is the code Applicable to AMM?",desciptionTitle:"The code presented in the excerpt is applicable to AMM (Automated Market Maker) protocol, which is used by the Biswap Exchange.",desciptionText:"Yes, this code is applicable to Automated Market Maker (AMM) as it implements the core functionality of a DEX, including liquidity provision, token swaps, and fee collection."},{text:"✅ [dex019]",footer:"Is trading pairs other than those with WBNB allowed?",desciptionTitle:"No clear answer but it does mention that users can swap eligible trading pairs and stake BSW to activate them in the Multi-Reward Pool to earn rewards in different tokens such as BSW, BNB, and BUSD.",desciptionText:"The provided code does not explicitly mention WBNB. However, the Biswap DEX supports trading pairs between any two ERC20 tokens, not just WBNB."},{text:"✅ [dex0110]",footer:"Is the smart contracts capable to prevent frontrunning attacks?",desciptionTitle:"N.A.",desciptionText:'The Biswap smart contract does not have a built-in functionality to prevent frontrunning attacks. However, Biswap uses a mechanism called "time-weighted average price" (TWAP) to mitigate the impact of such attacks. This mechanism calculates the average price of a token over a certain period of time, making it more difficult for attackers to profit from short-term price movements.'},{text:"✅ [dex0111]",footer:"Is on-chain or off-chain price feeds used for the token prices?",desciptionTitle:"N.A.",desciptionText:"The Biswap smart contract does not use on-chain or off-chain price feeds for its token prices. Instead, it calculates the token prices based on the reserves of the tokens in the liquidity pool."},{text:"✅ [dex0112]",footer:"Does the smart contract implement a decentralized governance mechanism?",desciptionTitle:"No clear answer but it does mention that users can swap eligible trading pairs and stake BSW to activate them in the Multi-Reward Pool to earn rewards in different tokens such as BSW, BNB, and BUSD.",desciptionText:"No, the Biswap smart contract does not implement a decentralized governance mechanism."},{text:"✅ [dex0113]",footer:"Is there a restriction on the maximum transaction amount or frequency for a given address?",desciptionTitle:"No clear answer but it does mention that users can swap eligible trading pairs and stake BSW to activate them in the Multi-Reward Pool to earn rewards in different tokens such as BSW, BNB, and BUSD.",desciptionText:"The Biswap smart contract does not impose any restrictions on the maximum transaction amount or frequency for a given address."}],regulations:[{text:"✅ [dex011]",footer:"Tokens symbol is BSW",desciptionTitle:"Ticker Symbol: BSW",desciptionText:"contract BSWToken is BEP20('Biswap', 'BSW')"},{text:"✅ [dex012]",footer:"BEP-20 standard",desciptionTitle:"Chain: BNB Chain (BEP-20)",desciptionText:"Contract BSWToken is BEP20('Biswap', 'BSW')"},{text:"✅ [dex013]",footer:"700000000",desciptionTitle:"Max Supply: 700 000 000 BSW tokens",desciptionText:"The total token supply is 700,000,000"},{text:"❌ [dex014]",footer:"Is ERC20 Token Standard Implemented?",desciptionTitle:"No, BEP-20 token standard is implemented which is specific to the Binance Smart Chain (BSC) ecosystem",desciptionText:"Yes, ERC20 token standards is implemented, inherits from the BiswapERC20 contract with ERC20 interface."}],industryStandard:[{text:"✅ [dex011]",footer:"Tokens symbol is BSW",desciptionTitle:"Ticker Symbol: BSW",desciptionText:"contract BSWToken is BEP20('Biswap', 'BSW')"}],codeQuality:[{label:"Maintainability",text:"A",footer:"Created by SonarCube"},{label:"Test Coverage",text:"80%",footer:"Created by Jest"},{label:"Performance",text:"B",footer:"Created by GPT"}],securityAnalysis:[{label:"Score",text:"80/100",footer:"Created by Hacken"},{label:"Audits",text:"85/100",footer:"Created by Verazt"}],explanation:"BiSwap is a decentralized exchange platform that allows users to easily swap BEP-20 tokens on the Binance Smart Chain network. The platform features a three-level referral system and low transaction fees (0.1%). Our mission is to become a leading platform for token swaps in the DeFi space by offering fast, secure, and easy-to-use services."},actionsView:{actions:[{title:"Require 1 or more security audit report",text:"Suggest the VASP to submit at least another security audit report within 45 days...",type:"danger"},{title:"Code has not been updates for long time",text:"Suggest the VASP to link Github account or submit a new code base.",type:"warn"},{title:"Risky wallets interaction",text:"The deployed contract has attracted many newly wallets. Require VASP to validate...",type:"primary"},{title:"Code has high similarity to Uniswap",text:"Suggest the VASP to further clarify the differences for not violating Business S...",type:"danger"},{title:"High botting rate",text:"Suggest to review the VASP's solution on bot detection and IP restriction.",type:"warn"},{title:"Core contract has been modified recently",text:"Dangerous to update the core smart contract code. The audit reports may not be s...",type:"primary"},{title:"Orderbook Spoofing",text:"There is a high chance that the order book design has no restriction on spoofing...",type:"danger"}],tasks:[{title:"Require 1 or more security audit report",text:"Suggest the VASP to submit at least another security audit report within 45 days...",type:"danger"},{title:"Code has not been updates for long time",text:"Suggest the VASP to link Github account or submit a new code base.",type:"warn"},{title:"Risky wallets interaction",text:"The deployed contract has attracted many newly wallets. Require VASP to validate...",type:"primary"}]}},Ji={guid:"e262d5c2-16f8-47a0-8c70-4019514d137d",logo:"/webapp/logos/olympus.jpeg",name:"Olympus",url:"https://olympusdao.finance",author:"John Doe",rating:"B-",description:"Olympus is a stablecoin",tags:["Stablecoin","NFT"],status:"In Progress",dueAt:"2023-05-25T00:00:00.000Z",overviewView:[{title:"Business Model Analysis",props:[{component:"PropDisplayCard",title:"Business model & Value Proposition",text:"Biswap is a trusted DEX platform on the BNB Chain Network with a Multi-type Referral Program and low trade fee starting from 0.1%. Biswap is the ecosystem that offers the best service and creates new standards in DeFi.",tags:["P2P Trading","Deposits"],regulations:[{text:"https://www.1.com",href:"https://www.1.com"}]},{component:"PropDisplayCard",title:"Customer Segments",text:"Retail investors who need to swap tokens<br/>Institutiona funds who conduct AMM business<br/>VASPs who IDO"}]},{title:"Social Media Analysis",props:[{component:"PropDisplayCard",title:"Twitter Analysis",text:"Biswap is a trusted DEX platform on the BNB Chain Network with a Multi-type Referral Program and low trade fee starting from 0.1%. Biswap is the ecosystem that offers the best service and creates new standards in DeFi.",tags:["P2P Trading","Deposits"],regulations:[{text:"https://www.1.com",href:"https://www.1.com"}]},{component:"PropDisplayCard",title:"Blog Analysis",text:"Retail investors who need to swap tokens<br/>Institutiona funds who conduct AMM business<br/>VASPs who IDO"}]},{title:"On-Chain Data Analysis",props:[{component:"PropDisplayKeyValue",title:"Pools & Volume",values:[{key:"Number of Pools",value:"3,234,132"},{key:"7 Days Volume",value:"$76,261,658"},{key:"24 Hrs Volumne",value:"$5,291,480"},{key:"Changes",value:"-61.71%"}]},{component:"PropDisplayKeyValue",title:"Customer Persona",values:[{key:"Unique Address",value:"1,2888,378"},{key:"Bot Rate",value:"21%"},{key:"Retails / Total (volume)",value:"26%"},{key:"Retails / Total (Acct.)",value:"86%"}]}]}],assessmentView:{whitepaper:[{text:"✅ [dex011]",footer:"Tokens symbol is BSW",desciptionTitle:"Ticker Symbol: BSW",desciptionText:"contract BSWToken is BEP20('Biswap', 'BSW')"},{text:"✅ [dex012]",footer:"BEP-20 standard",desciptionTitle:"Chain: BNB Chain (BEP-20)",desciptionText:"Contract BSWToken is BEP20('Biswap', 'BSW')"},{text:"✅ [dex013]",footer:"700000000",desciptionTitle:"Max Supply: 700 000 000 BSW tokens",desciptionText:"The total token supply is 700,000,000"},{text:"❌ [dex014]",footer:"Is ERC20 Token Standard Implemented?",desciptionTitle:"No, BEP-20 token standard is implemented which is specific to the Binance Smart Chain (BSC) ecosystem",desciptionText:"Yes, ERC20 token standards is implemented, inherits from the BiswapERC20 contract with ERC20 interface."},{text:"✅ [dex015]",footer:"How many types of Swap Fee Tiers are mentioned in code?",desciptionTitle:"N.A.",desciptionText:"There is only one swapFee tier, which can be set by calling the `setSwapFee` function. The default value of the swapFee is 1."},{text:"✅ [dex016]",footer:"What is the swap fee for a single token swap?",desciptionTitle:"The swap fee charged when someone makes a token swap on Biswap is 0.2% or 0.1%, depending on the trading pair. For most trading pairs, the fee is 0.2%, and for some specific pairs such as BUSD-USDT, USDC-USDT, and DAI-USDT, the fee is 0.1%.",desciptionText:"The default swap fee is 1 basis point (0.01%)."},{text:"✅ [dex017]",footer:"How much of the swap fee will be taken by developers by _mintFee()?",desciptionTitle:"Unspecfied in whitepaper, but this function mints new BSW tokens from the swap fee, which are distributed to stakeholders, including developers.",desciptionText:"The amount of the fee is calculated based on the change in the product of the reserves, and is proportional to the square root of the product of the reserves. The proportion of the fee that is taken by the developers is set by the `devFee` variable, which is also initialized to 1 in the contract."},{text:"✅ [dex018]",footer:"Is the code Applicable to AMM?",desciptionTitle:"The code presented in the excerpt is applicable to AMM (Automated Market Maker) protocol, which is used by the Biswap Exchange.",desciptionText:"Yes, this code is applicable to Automated Market Maker (AMM) as it implements the core functionality of a DEX, including liquidity provision, token swaps, and fee collection."},{text:"✅ [dex019]",footer:"Is trading pairs other than those with WBNB allowed?",desciptionTitle:"No clear answer but it does mention that users can swap eligible trading pairs and stake BSW to activate them in the Multi-Reward Pool to earn rewards in different tokens such as BSW, BNB, and BUSD.",desciptionText:"The provided code does not explicitly mention WBNB. However, the Biswap DEX supports trading pairs between any two ERC20 tokens, not just WBNB."},{text:"✅ [dex0110]",footer:"Is the smart contracts capable to prevent frontrunning attacks?",desciptionTitle:"N.A.",desciptionText:'The Biswap smart contract does not have a built-in functionality to prevent frontrunning attacks. However, Biswap uses a mechanism called "time-weighted average price" (TWAP) to mitigate the impact of such attacks. This mechanism calculates the average price of a token over a certain period of time, making it more difficult for attackers to profit from short-term price movements.'},{text:"✅ [dex0111]",footer:"Is on-chain or off-chain price feeds used for the token prices?",desciptionTitle:"N.A.",desciptionText:"The Biswap smart contract does not use on-chain or off-chain price feeds for its token prices. Instead, it calculates the token prices based on the reserves of the tokens in the liquidity pool."},{text:"✅ [dex0112]",footer:"Does the smart contract implement a decentralized governance mechanism?",desciptionTitle:"No clear answer but it does mention that users can swap eligible trading pairs and stake BSW to activate them in the Multi-Reward Pool to earn rewards in different tokens such as BSW, BNB, and BUSD.",desciptionText:"No, the Biswap smart contract does not implement a decentralized governance mechanism."},{text:"✅ [dex0113]",footer:"Is there a restriction on the maximum transaction amount or frequency for a given address?",desciptionTitle:"No clear answer but it does mention that users can swap eligible trading pairs and stake BSW to activate them in the Multi-Reward Pool to earn rewards in different tokens such as BSW, BNB, and BUSD.",desciptionText:"The Biswap smart contract does not impose any restrictions on the maximum transaction amount or frequency for a given address."}],regulations:[{text:"✅ [dex011]",footer:"Tokens symbol is BSW",desciptionTitle:"Ticker Symbol: BSW",desciptionText:"contract BSWToken is BEP20('Biswap', 'BSW')"},{text:"✅ [dex012]",footer:"BEP-20 standard",desciptionTitle:"Chain: BNB Chain (BEP-20)",desciptionText:"Contract BSWToken is BEP20('Biswap', 'BSW')"},{text:"✅ [dex013]",footer:"700000000",desciptionTitle:"Max Supply: 700 000 000 BSW tokens",desciptionText:"The total token supply is 700,000,000"},{text:"❌ [dex014]",footer:"Is ERC20 Token Standard Implemented?",desciptionTitle:"No, BEP-20 token standard is implemented which is specific to the Binance Smart Chain (BSC) ecosystem",desciptionText:"Yes, ERC20 token standards is implemented, inherits from the BiswapERC20 contract with ERC20 interface."}],industryStandard:[{text:"✅ [dex011]",footer:"Tokens symbol is BSW",desciptionTitle:"Ticker Symbol: BSW",desciptionText:"contract BSWToken is BEP20('Biswap', 'BSW')"}],codeQuality:[{label:"Maintainability",text:"A",footer:"Created by SonarCube"},{label:"Test Coverage",text:"80%",footer:"Created by Jest"},{label:"Performance",text:"B",footer:"Created by GPT"}],securityAnalysis:[{label:"Score",text:"80/100",footer:"Created by Hacken"},{label:"Audits",text:"85/100",footer:"Created by Verazt"}],explanation:"BiSwap is a decentralized exchange platform that allows users to easily swap BEP-20 tokens on the Binance Smart Chain network. The platform features a three-level referral system and low transaction fees (0.1%). Our mission is to become a leading platform for token swaps in the DeFi space by offering fast, secure, and easy-to-use services."},actionsView:{actions:[{title:"Require 1 or more security audit report",text:"Suggest the VASP to submit at least another security audit report within 45 days...",type:"danger"},{title:"Code has not been updates for long time",text:"Suggest the VASP to link Github account or submit a new code base.",type:"warn"},{title:"Risky wallets interaction",text:"The deployed contract has attracted many newly wallets. Require VASP to validate...",type:"primary"},{title:"Code has high similarity to Uniswap",text:"Suggest the VASP to further clarify the differences for not violating Business S...",type:"danger"},{title:"High botting rate",text:"Suggest to review the VASP's solution on bot detection and IP restriction.",type:"warn"},{title:"Core contract has been modified recently",text:"Dangerous to update the core smart contract code. The audit reports may not be s...",type:"primary"},{title:"Orderbook Spoofing",text:"There is a high chance that the order book design has no restriction on spoofing...",type:"danger"}],tasks:[{title:"Require 1 or more security audit report",text:"Suggest the VASP to submit at least another security audit report within 45 days...",type:"danger"},{title:"Code has not been updates for long time",text:"Suggest the VASP to link Github account or submit a new code base.",type:"warn"},{title:"Risky wallets interaction",text:"The deployed contract has attracted many newly wallets. Require VASP to validate...",type:"primary"}]}},Zi={guid:"e262d5c2-16f8-47a0-8c70-4019514d137e",logo:"/webapp/logos/eulerfinance.png",name:"Euler Finance",url:"https://euler.finance",author:"John Doe",rating:"B-",description:"Euler Finance is a DeFi protocol",tags:["Loan","P2P Trading","Collateral Control","Deposits","Risk Management","DAO","Flashloan","Price Oracle"],status:"In Progress",dueAt:"2023-05-25T00:00:00.000Z",overviewView:[{title:"Business Model Analysis",props:[{component:"PropDisplayCard",title:"Business model & Value Proposition",text:"Euler's business model revolves around providing decentralized lending and borrowing services on the Ethereum blockchain. It generates revenue through interest accrued on loans, with a portion held in reserves for bad debts. The model relies on the Euler Governance Token (EUL) for protocol management, enabling a decentralized approach. Euler offers a unique value proposition by enabling permissionless listings, asset tiering for risk management, tokenized debts, protected collateral, feeless flash loans, and risk-adjusted borrowing capacity. By leveraging decentralized price oracles, Euler ensures a secure and transparent experience for users, promoting capital efficiency and a user-centric approach.",tags:["Loan","P2P Trading","Collateral Control","Deposits","Risk Management","DAO","Flashloan","Price Oracle"],regulations:[{text:"ref1",href:"https://en.adgm.thomsonreuters.com/rulebook/guidance-regulation-digital-securities-activities-adgm-24-february-2020"},{text:"ref2",href:"https://www.mas.gov.sg/regulation/explainers/a-guide-to-digital-token-offerings"}]},{component:"PropDisplayCard",title:"Customer Segments",text:"Individuals and institutions cryptocurrency adopters: both lender and borrowers for various purposes, such as earning interest, leveraging trading positions, liquidity provision, or covering short-term expenses.<br/>Developers: Those looking to build applications, products, or services on top of Euler's protocol, leveraging its features such as tokenized debts and feeless flash loans. <br/><a href='https://chain.link/education-hub/flash-loans'>Flash loans</a> applier<br/>Governance participants: token holders who want to contribute to the platform's development and decision-making process by participating in governance proposals and voting."}]},{title:"DAO Governance Analysis",props:[{component:"PropDisplayKeyValue",title:"Governance Monitoring",values:[{key:"Number of Proposals",value:"83"},{key:"Smart Contract Changes",value:"6 times"},{key:"Grant Changes",value:"12 times"},{key:"Skewness of voting power",value:"high"}]},{component:"PropDisplayTable",title:"Important Events",headers:["Event","Status","Date"],rows:[["Contract Upgrades (eIP 14)","SUCCEEDED","Aug 12, 2022"],["Move All Asset Price Oracles to Chainlink","SUCCEEDED","Sep 5, 2022"],["Update the Interest Rate Model","SUCCEEDED","Feb 19, 2023"]]}]},{title:"On-Chain Data Analysis",props:[{component:"PropDisplayKeyValue",title:"Pools & Volume",values:[{key:"Number of Pools",value:"1555"},{key:"TVL",value:"$113,934"},{key:"Changes",value:"-11.42%"}]},{component:"PropDisplayKeyValue",title:"Customer Persona",values:[{key:"Unique Address",value:"288,378"},{key:"Bot Rate",value:"31%"},{key:"Retails / Total (volume)",value:"16%"},{key:"Retails / Total (Acct.)",value:"86%"}]}]},{title:"Team Background Analysis",props:[{component:"PropDisplayCard",title:"Overview",text:"Euler is a team of software engineers and quantitative analysts specialising in the research and development of financial applications."},{component:"PropDisplayKeyValue",title:"Team",values:[{key:"CEO",value:"Michael Bentley https://twitter.com/euler_mab"},{key:"Marketing",value:"Alicia Katz https://twitter.com/aliciakatz"},{key:"Research",value:"river0x https://twitter.com/river0x_"},{key:"Engineer",value:"Lee https://twitter.com/lmount_"}]},{component:"PropDisplayCard",title:"LinkedIn Analysis",text:"to be updated"},{component:"PropDisplayCard",title:"Twitter Analysis",text:"to be updated"}]}],assessmentView:{whitepaper:[{text:"✅ [dex011]",footer:"Tokens symbol is BSW",desciptionTitle:"Ticker Symbol: BSW",desciptionText:"contract BSWToken is BEP20('Biswap', 'BSW')"},{text:"✅ [dex012]",footer:"BEP-20 standard",desciptionTitle:"Chain: BNB Chain (BEP-20)",desciptionText:"Contract BSWToken is BEP20('Biswap', 'BSW')"},{text:"✅ [dex013]",footer:"700000000",desciptionTitle:"Max Supply: 700 000 000 BSW tokens",desciptionText:"The total token supply is 700,000,000"},{text:"❌ [dex014]",footer:"Is ERC20 Token Standard Implemented?",desciptionTitle:"No, BEP-20 token standard is implemented which is specific to the Binance Smart Chain (BSC) ecosystem",desciptionText:"Yes, ERC20 token standards is implemented, inherits from the BiswapERC20 contract with ERC20 interface."},{text:"✅ [dex015]",footer:"How many types of Swap Fee Tiers are mentioned in code?",desciptionTitle:"N.A.",desciptionText:"There is only one swapFee tier, which can be set by calling the `setSwapFee` function. The default value of the swapFee is 1."},{text:"✅ [dex016]",footer:"What is the swap fee for a single token swap?",desciptionTitle:"The swap fee charged when someone makes a token swap on Biswap is 0.2% or 0.1%, depending on the trading pair. For most trading pairs, the fee is 0.2%, and for some specific pairs such as BUSD-USDT, USDC-USDT, and DAI-USDT, the fee is 0.1%.",desciptionText:"The default swap fee is 1 basis point (0.01%)."},{text:"✅ [dex017]",footer:"How much of the swap fee will be taken by developers by _mintFee()?",desciptionTitle:"Unspecfied in whitepaper, but this function mints new BSW tokens from the swap fee, which are distributed to stakeholders, including developers.",desciptionText:"The amount of the fee is calculated based on the change in the product of the reserves, and is proportional to the square root of the product of the reserves. The proportion of the fee that is taken by the developers is set by the `devFee` variable, which is also initialized to 1 in the contract."},{text:"✅ [dex018]",footer:"Is the code Applicable to AMM?",desciptionTitle:"The code presented in the excerpt is applicable to AMM (Automated Market Maker) protocol, which is used by the Biswap Exchange.",desciptionText:"Yes, this code is applicable to Automated Market Maker (AMM) as it implements the core functionality of a DEX, including liquidity provision, token swaps, and fee collection."},{text:"✅ [dex019]",footer:"Is trading pairs other than those with WBNB allowed?",desciptionTitle:"No clear answer but it does mention that users can swap eligible trading pairs and stake BSW to activate them in the Multi-Reward Pool to earn rewards in different tokens such as BSW, BNB, and BUSD.",desciptionText:"The provided code does not explicitly mention WBNB. However, the Biswap DEX supports trading pairs between any two ERC20 tokens, not just WBNB."},{text:"✅ [dex0110]",footer:"Is the smart contracts capable to prevent frontrunning attacks?",desciptionTitle:"N.A.",desciptionText:'The Biswap smart contract does not have a built-in functionality to prevent frontrunning attacks. However, Biswap uses a mechanism called "time-weighted average price" (TWAP) to mitigate the impact of such attacks. This mechanism calculates the average price of a token over a certain period of time, making it more difficult for attackers to profit from short-term price movements.'},{text:"✅ [dex0111]",footer:"Is on-chain or off-chain price feeds used for the token prices?",desciptionTitle:"N.A.",desciptionText:"The Biswap smart contract does not use on-chain or off-chain price feeds for its token prices. Instead, it calculates the token prices based on the reserves of the tokens in the liquidity pool."},{text:"✅ [dex0112]",footer:"Does the smart contract implement a decentralized governance mechanism?",desciptionTitle:"No clear answer but it does mention that users can swap eligible trading pairs and stake BSW to activate them in the Multi-Reward Pool to earn rewards in different tokens such as BSW, BNB, and BUSD.",desciptionText:"No, the Biswap smart contract does not implement a decentralized governance mechanism."},{text:"✅ [dex0113]",footer:"Is there a restriction on the maximum transaction amount or frequency for a given address?",desciptionTitle:"No clear answer but it does mention that users can swap eligible trading pairs and stake BSW to activate them in the Multi-Reward Pool to earn rewards in different tokens such as BSW, BNB, and BUSD.",desciptionText:"The Biswap smart contract does not impose any restrictions on the maximum transaction amount or frequency for a given address."}],regulations:[{text:"✅ [dex011]",footer:"Tokens symbol is BSW",desciptionTitle:"Ticker Symbol: BSW",desciptionText:"contract BSWToken is BEP20('Biswap', 'BSW')"},{text:"✅ [dex012]",footer:"BEP-20 standard",desciptionTitle:"Chain: BNB Chain (BEP-20)",desciptionText:"Contract BSWToken is BEP20('Biswap', 'BSW')"},{text:"✅ [dex013]",footer:"700000000",desciptionTitle:"Max Supply: 700 000 000 BSW tokens",desciptionText:"The total token supply is 700,000,000"},{text:"❌ [dex014]",footer:"Is ERC20 Token Standard Implemented?",desciptionTitle:"No, BEP-20 token standard is implemented which is specific to the Binance Smart Chain (BSC) ecosystem",desciptionText:"Yes, ERC20 token standards is implemented, inherits from the BiswapERC20 contract with ERC20 interface."}],industryStandard:[{text:"✅ [dex011]",footer:"Tokens symbol is BSW",desciptionTitle:"Ticker Symbol: BSW",desciptionText:"contract BSWToken is BEP20('Biswap', 'BSW')"}],codeQuality:[{label:"Maintainability",text:"A",footer:"Created by SonarCube"},{label:"Test Coverage",text:"80%",footer:"Created by Jest"},{label:"Performance",text:"B",footer:"Created by GPT"}],securityAnalysis:[{label:"Score",text:"80/100",footer:"Created by Hacken"},{label:"Audits",text:"85/100",footer:"Created by Verazt"}],explanation:"BiSwap is a decentralized exchange platform that allows users to easily swap BEP-20 tokens on the Binance Smart Chain network. The platform features a three-level referral system and low transaction fees (0.1%). Our mission is to become a leading platform for token swaps in the DeFi space by offering fast, secure, and easy-to-use services."},actionsView:{actions:[{title:"The DAO voting is highly centralized.",text:"10 votings events are led by a single address (> 50% weight). Request the VASP t...",type:"danger"},{title:"The DAO voting is highly centralized.",text:"Request the VASP to conduct KYC for addresses, unless reducing their voting weig...",type:"danger"},{title:"Core contract has been modified recently.",text:"Suggest the VASP to submit at least two security audit reports that covers the u...",type:"danger"},{title:"A new developer address added.",text:"Request the VASP to conduct KYC for the new developer. No contract modification ...",type:"warn"}],tasks:[{title:"Add security audit report",text:"Suggest the VASP to submit at least another security audit report within 45 days...",type:"danger"},{title:"Update code and whitepapers",text:"Suggest the VASP to link Github account or submit a new code base.",type:"warn"},{title:"Check the interaction of the wallets",text:"The deployed contract has attracted many newly wallets. Require VASP to validate...",type:"primary"}]}},xv=`// File: neopin/NeopinToken.sol


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



`,Cv=`// SPDX-License-Identifier: Apache-2.0

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
`,Pv=`// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

import "./MultichainToken.sol";

contract MultichainNPT is MultichainToken {
    constructor() MultichainToken('NEOPIN Token', 'NPT', 1000000000e18) {
    }
}
`,eo={guid:"e262d5c2-16f8-47a0-8d10-4019514d137a",logo:"/webapp/logos/neopin.png",name:"Neopin",url:"https://neopin.io/",author:"John Doe",rating:"D",description:"Neopin is a blockchain-based project that employs a CeDeFi model, primarily focusing on incentivizing user activities with its native token, NPT, but is reported to exhibit operational, tokenomic, and auditing risks.",tags:["DeFi","Wallet","Staking","Multi-chain","CeDeFi"],status:"In Progress",dueAt:"2023-05-25T00:00:00.000Z",overviewView:[{title:"Business Model Analysis",props:[{component:"PropDisplayCard",title:"Business model & Value Proposition",text:"NEOPIN is a hybrid financial platform blending centralized finance (CeFi) and decentralized finance (DeFi) to connect traditional finance and Web3 markets. By leveraging the stability, security, and regulatory compliance of CeFi and the transparency and accessibility of DeFi, NEOPIN aims to resolve trust and security issues present in both financial sectors. The platform uses its native NEOPIN token (NPT) and allows users to participate in liquidity pools, earning rewards for their contributions through features like staking, swap, and yield farming. NEOPIN is also exploring additional products, including Play-to-Earn games, Stake-to-Earn, Mine-to-Earn, and NFT services, while prioritizing security and regulatory compliance with systems like KYC and AML.",tags:["DeFi","Wallet","Staking","Multi-chain","CeDeFi"],regulations:[{text:"ref1",href:"https://en.adgm.thomsonreuters.com/rulebook/guidance-regulation-digital-securities-activities-adgm-24-february-2020"},{text:"ref2",href:"https://www.mas.gov.sg/regulation/explainers/a-guide-to-digital-token-offerings"}]},{component:"PropDisplayCard",title:"Innovation Analysis",text:"Neopin's approach, focusing predominantly on standard token staking, appears to lack the innovative edge often seen in leading blockchain projects. This could limit their competitiveness in a rapidly evolving industry where novelty often drives user adoption and market value."},{component:"PropDisplayCard",title:"Customer Segments",text:"<ol><li>New crypto adopters, retail investors: Individuals who have an interest in cryptocurrencies and digital assets. These people are tech-savvy and open to new financial innovations.</li><li>Compliance-focused entities: Companies, institutions, or individuals that prioritize regulatory compliance in their crypto-related dealings, given NEOPIN's emphasis on KYC and AML procedures.</li><li>DeFi Users: Users already participating in decentralized finance who are seeking new platforms or methods to optimize their earnings.</li><li>Crypto Traders: Both short-term and long-term traders who are seeking a platform offering advanced trading functionalities and high liquidity.</li><li>Game developers and companies: developers and companies can launch Play-to-Earn games</li></ol>"}]},{title:"Security",props:[{component:"PropDisplayCard",title:"Smart Contract",text:"NPT is re-designed to be a multi-chain token that poses potential risks due to the increased complexity of the blockchain architecture. With multiple chains, the risk of smart contract vulnerabilities and bugs increase, which could lead to the loss of tokens or other potential security issues.<br/><br/>NPT deploying all tokens to a single address during contract deployment poses a risk of centralization. This method puts an enormous amount of trust in the contract deployer, who has the power to distribute tokens at their discretion. This central point of control may be prone to misuse or compromise, threatening the integrity and security of the entire system."},{component:"PropDisplayCard",title:"Code Integrity",text:`The deployed NPT smart contract code differs from the audited code.<br/>
                    <a href='https://scope.klaytn.com/account/0xe06597d02a2c3aa7a9708de2cfa587b128bd3815?tabId=contractCode'>Deployed code on Klaytn</a><br/>
                    <a href='https://etherscan.io/token/0x306ee01a6bA3b4a8e993fA2C1ADC7ea24462000c#code'>Deployed code on Ethereum</a><br/>
                    <a href='https://polygonscan.com/address/0x306ee01a6ba3b4a8e993fa2c1adc7ea24462000c#code'>Deployed code on Polygon</a><br/>
                    <a href='https://github.com/Neopin/neopin-audits/blob/master/Audit_Report_20220627_NPT_Staking_And_DEX_Swap_SlowMist.pdf'>Audited Code in Audit Report</a><br/>
                    <br/>
                    Multichain token smart contract is not audited.`},{component:"PropDisplayTable",title:"Audit Report",headers:["Report","Date","By","Coverage"],rows:[["1","Aug 2021","CertiK","Token"],["2","March 2022","SlowMist","Token + Lockup"]]},{component:"PropDisplayCard",title:"",text:`Neopin's audit reports are outdated and infrequent.
                    <br/>
                    The audit reports conducted lack professional depth, potentially resulting in overlooked threats and weaknesses.<br/>
                    <a href='https://github.com/Neopin/neopin-audits/tree/master'>Audit Reports</a>`},{component:"PropDisplayCard",title:"Code Library",text:"NPT token is using an old version of OpenZeppelin library v3.0.0 (<a href='https://github.com/OpenZeppelin/openzeppelin-contracts/releases/tag/v3.0.0'>Released</a> on Apr 2020). The library is out-of-date."}]},{title:"On-Chain Data Analysis",props:[{component:"PropDisplayTable",title:"NPT Activities",headers:["Blockchain","# TXs","Total Tokens","Risks"],rows:[["Ethereum","459","166,459","Arbitrage risks"],["Polygon","3,119","211,297","Low diversity"],["Klaytn","169,773","1,000,000,000","Operation risks"]]},{component:"PropDisplayKeyValue",title:"Transactions Categorization",values:[{key:"Bridgeing ",value:"60%"},{key:"Providing LP",value:"30%"},{key:"Staking",value:"5%"},{key:"Others",value:"5%"}]}]},{title:"Tokenomic",props:[{component:"PropDisplayCard",title:"Summary",text:"Neopin's tokenomic design, largely based on self-generated tokens and lacking a clear economic utility, raises key uncertainties about the system's stability. Its unclear strategies to address potential token depreciation may affect trust in the long term. Additionally, the prevalent use of its native token, NPT, as a reward mechanism could lead to inflation and devaluation if the token supply significantly exceeds demand."},{component:"PropDisplayCard",title:"Risks Analysis",text:"The NPT token's undefined role poses risks to Neopin's stability and long-term value. Predictive models indicate potential threats without a strong consumption model.<br/><br/>While Neopin proposes strategies to stabilize token value, the lack of a detailed plan raises doubts about their long-term viability."}]},{title:"Team Analysis",props:[{component:"PropDisplayCard",title:"Background",text:"Neopin team is anonymous."}]},{title:"Social Media Analysis",props:[{component:"PropDisplayKeyValue",title:"Social Media",values:[{key:"Telegram",value:"2,129 - ↓50% in 60 days"},{key:"Discord",value:"To be crawled"},{key:"Twitter",value:"31,634 - ↑300% in 20 days"},{key:"Instagram",value:"To be crawled"}]}]}],assessmentView:{whitepaper:[{text:"✅ [dex011]",footer:"Tokens symbol is BSW",desciptionTitle:"Ticker Symbol: BSW",desciptionText:"contract BSWToken is BEP20('Biswap', 'BSW')"},{text:"✅ [dex012]",footer:"BEP-20 standard",desciptionTitle:"Chain: BNB Chain (BEP-20)",desciptionText:"Contract BSWToken is BEP20('Biswap', 'BSW')"},{text:"✅ [dex013]",footer:"700000000",desciptionTitle:"Max Supply: 700 000 000 BSW tokens",desciptionText:"The total token supply is 700,000,000"},{text:"❌ [dex014]",footer:"Is ERC20 Token Standard Implemented?",desciptionTitle:"No, BEP-20 token standard is implemented which is specific to the Binance Smart Chain (BSC) ecosystem",desciptionText:"Yes, ERC20 token standards is implemented, inherits from the BiswapERC20 contract with ERC20 interface."},{text:"✅ [dex015]",footer:"How many types of Swap Fee Tiers are mentioned in code?",desciptionTitle:"N.A.",desciptionText:"There is only one swapFee tier, which can be set by calling the `setSwapFee` function. The default value of the swapFee is 1."},{text:"✅ [dex016]",footer:"What is the swap fee for a single token swap?",desciptionTitle:"The swap fee charged when someone makes a token swap on Biswap is 0.2% or 0.1%, depending on the trading pair. For most trading pairs, the fee is 0.2%, and for some specific pairs such as BUSD-USDT, USDC-USDT, and DAI-USDT, the fee is 0.1%.",desciptionText:"The default swap fee is 1 basis point (0.01%)."},{text:"✅ [dex017]",footer:"How much of the swap fee will be taken by developers by _mintFee()?",desciptionTitle:"Unspecfied in whitepaper, but this function mints new BSW tokens from the swap fee, which are distributed to stakeholders, including developers.",desciptionText:"The amount of the fee is calculated based on the change in the product of the reserves, and is proportional to the square root of the product of the reserves. The proportion of the fee that is taken by the developers is set by the `devFee` variable, which is also initialized to 1 in the contract."},{text:"✅ [dex018]",footer:"Is the code Applicable to AMM?",desciptionTitle:"The code presented in the excerpt is applicable to AMM (Automated Market Maker) protocol, which is used by the Biswap Exchange.",desciptionText:"Yes, this code is applicable to Automated Market Maker (AMM) as it implements the core functionality of a DEX, including liquidity provision, token swaps, and fee collection."},{text:"✅ [dex019]",footer:"Is trading pairs other than those with WBNB allowed?",desciptionTitle:"No clear answer but it does mention that users can swap eligible trading pairs and stake BSW to activate them in the Multi-Reward Pool to earn rewards in different tokens such as BSW, BNB, and BUSD.",desciptionText:"The provided code does not explicitly mention WBNB. However, the Biswap DEX supports trading pairs between any two ERC20 tokens, not just WBNB."},{text:"✅ [dex0110]",footer:"Is the smart contracts capable to prevent frontrunning attacks?",desciptionTitle:"N.A.",desciptionText:'The Biswap smart contract does not have a built-in functionality to prevent frontrunning attacks. However, Biswap uses a mechanism called "time-weighted average price" (TWAP) to mitigate the impact of such attacks. This mechanism calculates the average price of a token over a certain period of time, making it more difficult for attackers to profit from short-term price movements.'},{text:"✅ [dex0111]",footer:"Is on-chain or off-chain price feeds used for the token prices?",desciptionTitle:"N.A.",desciptionText:"The Biswap smart contract does not use on-chain or off-chain price feeds for its token prices. Instead, it calculates the token prices based on the reserves of the tokens in the liquidity pool."},{text:"✅ [dex0112]",footer:"Does the smart contract implement a decentralized governance mechanism?",desciptionTitle:"No clear answer but it does mention that users can swap eligible trading pairs and stake BSW to activate them in the Multi-Reward Pool to earn rewards in different tokens such as BSW, BNB, and BUSD.",desciptionText:"No, the Biswap smart contract does not implement a decentralized governance mechanism."},{text:"✅ [dex0113]",footer:"Is there a restriction on the maximum transaction amount or frequency for a given address?",desciptionTitle:"No clear answer but it does mention that users can swap eligible trading pairs and stake BSW to activate them in the Multi-Reward Pool to earn rewards in different tokens such as BSW, BNB, and BUSD.",desciptionText:"The Biswap smart contract does not impose any restrictions on the maximum transaction amount or frequency for a given address."}],regulations:[{text:"✅ [dex011]",footer:"Tokens symbol is BSW",desciptionTitle:"Ticker Symbol: BSW",desciptionText:"contract BSWToken is BEP20('Biswap', 'BSW')"},{text:"✅ [dex012]",footer:"BEP-20 standard",desciptionTitle:"Chain: BNB Chain (BEP-20)",desciptionText:"Contract BSWToken is BEP20('Biswap', 'BSW')"},{text:"✅ [dex013]",footer:"700000000",desciptionTitle:"Max Supply: 700 000 000 BSW tokens",desciptionText:"The total token supply is 700,000,000"},{text:"❌ [dex014]",footer:"Is ERC20 Token Standard Implemented?",desciptionTitle:"No, BEP-20 token standard is implemented which is specific to the Binance Smart Chain (BSC) ecosystem",desciptionText:"Yes, ERC20 token standards is implemented, inherits from the BiswapERC20 contract with ERC20 interface."}],industryStandard:[{text:"✅ [dex011]",footer:"Tokens symbol is BSW",desciptionTitle:"Ticker Symbol: BSW",desciptionText:"contract BSWToken is BEP20('Biswap', 'BSW')"}],contracts:{"NeopinToken.sol":xv,"MultichainToken.sol":Cv,"MultichainNPT.sol":Pv},codeQuality:[{label:"Maintainability",text:"A",footer:"Created by SonarCube"},{label:"Test Coverage",text:"80%",footer:"Created by Jest"},{label:"Performance",text:"B",footer:"Created by GPT"}],securityAnalysis:[{label:"Score",text:"80/100",footer:"Created by Hacken"},{label:"Audits",text:"85/100",footer:"Created by Verazt"}],explanation:"BiSwap is a decentralized exchange platform that allows users to easily swap BEP-20 tokens on the Binance Smart Chain network. The platform features a three-level referral system and low transaction fees (0.1%). Our mission is to become a leading platform for token swaps in the DeFi space by offering fast, secure, and easy-to-use services."}},fr=nb("organizations",()=>{const e=bi([{guid:"e262d5c2-16f8-47a0-8c70-4019514b137c",name:"Team 1 - DeFi",projects:[Yi,Xi,Qi,Ji,Zi,eo]},{guid:"e262d5c2-16f8-47a0-8c70-4019514b137d",name:"Team 2 - Infra",projects:[Yi,Xi,Qi,Ji,Zi,eo]},{guid:"e262d5c2-16f8-47a0-8c70-4019514b137e",name:"Team 3 - DAO",projects:[Yi,Xi,Qi,Ji,Zi,eo]}]),t=s=>{if(s)return e.value.find(i=>i.guid===s)};return{organizations:e,findOrganization:t,findProject:(s,i)=>{if(!s||!i)return;const o=t(s);if(o)return o.projects.find(r=>r.guid===i)}}}),Iv={components:{OrgButton:bv},computed:{...cr(fr)}};const Ov=e=>(bs("data-v-deb5c2d1"),e=e(),vs(),e),Nv={class:"org-card mx-auto"},Bv=Ov(()=>w("h1",null,"Teams",-1)),Rv={class:"org-buttons mx-auto"};function Dv(e,t,n,s,i,o){const r=De("OrgButton");return F(),H("div",Nv,[Bv,w("div",Rv,[(F(!0),H(fe,null,Ie(e.organizationsStore.organizations,a=>(F(),Ht(r,{key:a.guid,name:a.name,guid:a.guid},null,8,["name","guid"]))),128))])])}const Mv=Se(Iv,[["render",Dv],["__scopeId","data-v-deb5c2d1"]]),Lv={props:{guid:String,name:String,logo:String,highlighted:Boolean}};const $v={class:"d-flex p-2 project-sidebar-item"},Wv={style:{"margin-right":"20px"}},Fv=["src"];function Vv(e,t,n,s,i,o){return F(),H("div",$v,[w("div",Wv,[w("img",{src:n.logo,class:"logo"},null,8,Fv)]),w("div",{class:Mn(["text",{highlighted:n.highlighted}])},re(n.name),3)])}const Hv=Se(Lv,[["render",Vv],["__scopeId","data-v-21360751"]]),Uv={props:{tag:String}};const jv={class:"m-1 tag"};function qv(e,t,n,s,i,o){return F(),H("div",jv,re(n.tag),1)}const du=Se(Uv,[["render",qv],["__scopeId","data-v-9d0697f3"]]),zv={props:["prop"],components:{Tag:du}},Kv={class:"mb-4"},Gv=["innerHTML"],Yv={key:0,class:"my-2"},Xv=w("b",null,"Tags:",-1),Qv={class:"d-flex flex-wrap"},Jv={key:1,class:"my-2"},Zv=w("b",null,"Related Regulations:",-1),ey={class:"d-flex"},ty=["href"];function ny(e,t,n,s,i,o){var a,l,c,u,d;const r=De("Tag");return F(),H("div",Kv,[w("h5",null,re((a=n.prop)==null?void 0:a.title),1),w("p",{innerHTML:n.prop.text},null,8,Gv),(l=n.prop)!=null&&l.tags?(F(),H("div",Yv,[Xv,w("div",Qv,[(F(!0),H(fe,null,Ie((c=n.prop)==null?void 0:c.tags,(p,g)=>(F(),Ht(r,{key:g,tag:p},null,8,["tag"]))),128))])])):We("",!0),(u=n.prop)!=null&&u.regulations?(F(),H("div",Jv,[Zv,w("div",ey,[(F(!0),H(fe,null,Ie((d=n.prop)==null?void 0:d.regulations,(p,g)=>(F(),H("div",{key:g,class:"mx-2"},[kt(" [ "),w("a",{href:p==null?void 0:p.href,target:"_blank"},re(p==null?void 0:p.text),9,ty),kt(" ] ")]))),128))])])):We("",!0)])}const sy=Se(zv,[["render",ny]]),iy={props:["prop"]},oy={class:"mb-4"},ry={class:"mb-3"},ay={class:"table table-bordered"},ly={scope:"row",style:{width:"30%"}};function cy(e,t,n,s,i,o){var r,a;return F(),H("div",oy,[w("h5",ry,re((r=n.prop)==null?void 0:r.title),1),w("table",ay,[w("tbody",null,[(F(!0),H(fe,null,Ie((a=n.prop)==null?void 0:a.values,(l,c)=>(F(),H("tr",{key:c},[w("th",ly,re(l==null?void 0:l.key),1),w("td",null,re(l==null?void 0:l.value),1)]))),128))])])])}const uy=Se(iy,[["render",cy]]),dy={props:["prop"]},fy={class:"mb-4"},py={class:"mb-3"},hy={class:"table table-bordered"};function my(e,t,n,s,i,o){var r,a,l;return F(),H("div",fy,[w("h5",py,re((r=n.prop)==null?void 0:r.title),1),w("table",hy,[w("thead",null,[w("tr",null,[(F(!0),H(fe,null,Ie((a=n.prop)==null?void 0:a.headers,(c,u)=>(F(),H("th",{key:u},re(c),1))),128))])]),w("tbody",null,[(F(!0),H(fe,null,Ie((l=n.prop)==null?void 0:l.rows,(c,u)=>(F(),H("tr",{key:u},[(F(!0),H(fe,null,Ie(c,(d,p)=>(F(),H("td",{key:p},re(d),1))),128))]))),128))])])])}const gy=Se(dy,[["render",my]]),_y={props:["title","props"],components:{PropDisplayCard:sy,PropDisplayKeyValue:uy,PropDisplayTable:gy}};const by={class:"card"},vy={class:"card-header title"},yy={class:"card-body"};function wy(e,t,n,s,i,o){return F(),H("div",by,[w("div",vy,re(n.title),1),w("div",yy,[(F(!0),H(fe,null,Ie(n.props,(r,a)=>(F(),Ht(Ug(r==null?void 0:r.component),{key:a,prop:r},null,8,["prop"]))),128))])])}const ky=Se(_y,[["render",wy],["__scopeId","data-v-fb106ec3"]]),Ey={props:["project"],components:{PropDisplayGroup:ky},computed:{data(){var e;return((e=this.project)==null?void 0:e.overviewView)||[]}}},Ty={class:"row"};function Sy(e,t,n,s,i,o){const r=De("PropDisplayGroup");return F(),H("div",Ty,[(F(!0),H(fe,null,Ie(o.data,(a,l)=>(F(),H("div",{class:"col-md-6 p-2",key:l},[oe(r,{title:a.title,props:a.props},null,8,["title","props"])]))),128))])}const Ay=Se(Ey,[["render",Sy]]),xy={props:{text:String,footer:String,desciptionTitle:String,desciptionText:String},data(){return{active:!1}}};const fu=e=>(bs("data-v-75b3c624"),e=e(),vs(),e),Cy={class:"px-2 text d-flex flex-column",style:{"text-align":"center"}},Py={style:{color:"rgb(135, 136, 141)","font-size":"0.6rem"}},Iy={key:0},Oy={key:1,class:"px-2 text d-flex flex-column",style:{"text-align":"left"}},Ny={class:"d-flex"},By=fu(()=>w("i",{class:"bi bi-file-earmark",style:{"margin-right":"5px"}},null,-1)),Ry={class:"d-flex"},Dy=fu(()=>w("i",{class:"bi bi-code-slash",style:{"margin-right":"5px"}},null,-1)),My={style:{color:"rgb(135, 136, 141)","font-size":"0.6rem"}};function Ly(e,t,n,s,i,o){return F(),H("div",{class:"w-100 status-card my-2 py-3",onClick:t[0]||(t[0]=r=>i.active=!i.active)},[w("div",Cy,[w("div",null,re(n.text),1),w("div",Py,re(n.footer),1)]),i.active?(F(),H("hr",Iy)):We("",!0),i.active?(F(),H("div",Oy,[w("div",Ny,[By,w("div",null,re(n.desciptionTitle),1)]),w("div",Ry,[Dy,w("div",My,re(n.desciptionText),1)])])):We("",!0)])}const $y=Se(xy,[["render",Ly],["__scopeId","data-v-75b3c624"]]),Wy={props:["title","statuses","backgroundColor"],components:{StatusCard:$y},data(){return{active:!1}}};const Fy={key:0,class:"bi bi-arrow-bar-down",style:{"margin-left":"10px"}},Vy={key:1,class:"bi bi-arrow-bar-up",style:{"margin-left":"10px"}},Hy={key:0};function Uy(e,t,n,s,i,o){const r=De("StatusCard");return F(),H("div",{class:"status-card-group p-2 w-100 mb-2",style:hi({backgroundColor:n.backgroundColor})},[w("div",{class:"w-100",style:{"text-align":"right",cursor:"pointer"},onClick:t[0]||(t[0]=a=>i.active=!i.active)},[kt(re(n.title)+" ",1),i.active?We("",!0):(F(),H("i",Fy)),i.active?(F(),H("i",Vy)):We("",!0)]),i.active?(F(),H("div",Hy,[(F(!0),H(fe,null,Ie(n.statuses,(a,l)=>(F(),Ht(r,{key:l,text:a.text,footer:a.footer,"desciption-title":a.desciptionTitle,"desciption-text":a.desciptionText},null,8,["text","footer","desciption-title","desciption-text"]))),128))])):We("",!0)],4)}const jy=Se(Wy,[["render",Uy],["__scopeId","data-v-4e6fa15a"]]),qy={props:{label:String,text:String,footer:String}};const zy={class:"card"},Ky={class:"label"},Gy={class:"text"},Yy={style:{position:"absolute",top:"50%",transform:"translate(0, -40%)"}},Xy={class:"label",style:{position:"absolute",bottom:"0",left:"0",right:"0",padding:"5px","text-align":"center"}};function Qy(e,t,n,s,i,o){return F(),H("div",zy,[w("div",Ky,re(n.label),1),w("div",Gy,[w("div",Yy,re(n.text),1)]),w("div",Xy,re(n.footer),1)])}const Jy=Se(qy,[["render",Qy],["__scopeId","data-v-52bed330"]]),Zy={props:["code"],created(){this.$nextTick(()=>{Zr.highlightAll()})},watch:{code(){this.$nextTick(()=>{Zr.highlightAll()})}}};const ew={class:"code-block"},tw={class:"line-numbers language-solidity"};function nw(e,t,n,s,i,o){return F(),H("pre",ew,[kt("    "),w("code",tw,`
    `+re(n.code)+`
  `,1),kt(`
  `)])}const sw=Se(Zy,[["render",nw],["__scopeId","data-v-0f22bba8"]]),iw={props:["project"],components:{StatusCardGroup:jy,TextCard:Jy,CodeView:sw},data(){return{contract:""}},created(){this.contract=this.contracts[0]||""},computed:{whitepaper(){var e,t;return((t=(e=this.project)==null?void 0:e.assessmentView)==null?void 0:t.whitepaper)||[]},regulations(){var e,t;return((t=(e=this.project)==null?void 0:e.assessmentView)==null?void 0:t.regulations)||[]},industryStandard(){var e,t;return((t=(e=this.project)==null?void 0:e.assessmentView)==null?void 0:t.industryStandard)||[]},contracts(){var t,n;let e=((n=(t=this.project)==null?void 0:t.assessmentView)==null?void 0:n.contracts)||{};return Object.keys(e)},code(){var t,n;return(((n=(t=this.project)==null?void 0:t.assessmentView)==null?void 0:n.contracts)||{})[this.contract]||""},codeQuality(){var e,t;return((t=(e=this.project)==null?void 0:e.assessmentView)==null?void 0:t.codeQuality)||[]},securityAnalysis(){var e,t;return((t=(e=this.project)==null?void 0:e.assessmentView)==null?void 0:t.securityAnalysis)||[]},codeSimilarity(){var e,t;return((t=(e=this.project)==null?void 0:e.assessmentView)==null?void 0:t.codeSimilarity)||[]},explanation(){var e,t;return((t=(e=this.project)==null?void 0:e.assessmentView)==null?void 0:t.explanation)||""}},methods:{onContractChange(e){console.log("onContractChange",e)}}},ow={class:"container-fluid row mb-2",style:{height:"720px"}},rw={class:"h-100 col-md-3",style:{"overflow-y":"auto"}},aw={class:"col-md-6"},lw={class:"h-100"},cw={class:"h-100 col-md-3",style:{"overflow-y":"auto"}},uw={key:0,class:"my-2"},dw=w("h5",null,"Code Quality",-1),fw={class:"row"},pw={key:1,class:"my-2"},hw=w("h5",null,"Security Analysis",-1),mw={class:"row"},gw={key:2,class:"my-2"},_w=w("h5",null,"Code Similarity",-1),bw={class:"row"},vw={key:3,class:"my-2"},yw=w("h5",null,"Explanation",-1),ww={style:{"font-size":"0.85rem"}};function kw(e,t,n,s,i,o){const r=De("StatusCardGroup"),a=De("CodeView"),l=De("TextCard");return F(),H("div",ow,[w("div",rw,[oe(r,{title:"Whitepaper (10/50 passed)",statuses:o.whitepaper,backgroundColor:"rgb(249,227,227)"},null,8,["statuses"]),oe(r,{title:"Regulations (5/5 passed)",statuses:o.regulations,backgroundColor:"rgba(221,234,252)"},null,8,["statuses"]),oe(r,{title:"Industry Standard",statuses:o.industryStandard,backgroundColor:"rgba(227,251,233)"},null,8,["statuses"])]),w("div",aw,[w("div",lw,[w("form",null,[Cc(w("select",{class:"form-select",onChange:t[0]||(t[0]=c=>o.onContractChange(i.contract)),"onUpdate:modelValue":t[1]||(t[1]=c=>i.contract=c)},[(F(!0),H(fe,null,Ie(o.contracts,(c,u)=>(F(),H("option",{key:u},re(c),1))),128))],544),[[j_,i.contract]])]),oe(a,{class:"h-100",style:{"overflow-y":"auto"},code:o.code},null,8,["code"])])]),w("div",cw,[o.codeQuality.length>0?(F(),H("div",uw,[dw,w("div",fw,[(F(!0),H(fe,null,Ie(o.codeQuality,(c,u)=>(F(),H("div",{class:"col-md-6 p-1",key:u},[oe(l,{label:c.label,text:c.text,footer:c.footer},null,8,["label","text","footer"])]))),128))])])):We("",!0),o.securityAnalysis.length>0?(F(),H("div",pw,[hw,w("div",mw,[(F(!0),H(fe,null,Ie(o.securityAnalysis,(c,u)=>(F(),H("div",{class:"col-md-6 p-1",key:u},[oe(l,{label:c.label,text:c.text,footer:c.footer},null,8,["label","text","footer"])]))),128))])])):We("",!0),o.explanation?(F(),H("div",gw,[_w,w("div",bw,[(F(!0),H(fe,null,Ie(o.codeSimilarity,(c,u)=>(F(),H("div",{class:"col-md-12 p-1",key:u},[oe(l,{label:c.label,text:c.text,footer:c.footer},null,8,["label","text","footer"])]))),128))])])):We("",!0),o.explanation?(F(),H("div",vw,[yw,w("div",ww,re(o.explanation),1)])):We("",!0)])])}const Ew=Se(iw,[["render",kw]]),Tw={props:["title","text","type"]};const Sw={class:"d-flex"},Aw={style:{"margin-right":"15px","font-size":"1.5rem"}},xw={key:0,class:"bi bi-exclamation-triangle"},Cw={key:1,class:"bi bi-info-circle"},Pw={key:2,class:"bi bi-check-circle"},Iw={class:"align-self-center"},Ow={style:{"font-size":"0.9rem"}},Nw={style:{"font-size":"0.8rem","margin-top":"6px"}},Bw=w("div",{style:{"font-size":"0.8rem","margin-top":"10px",cursor:"pointer"}},[w("u",null,"Details")],-1);function Rw(e,t,n,s,i,o){return F(),H("div",{class:Mn(["action-status-card p-3 my-2",{danger:n.type=="danger",warn:n.type=="warn",primary:n.type=="primary"}])},[w("div",Sw,[w("div",Aw,[n.type=="danger"?(F(),H("i",xw)):We("",!0),n.type=="warn"?(F(),H("i",Cw)):We("",!0),n.type=="primary"?(F(),H("i",Pw)):We("",!0)]),w("div",Iw,[w("div",Ow,[w("b",null,re(n.title),1)]),w("div",Nw,re(n.text),1),Bw])])],2)}const Dw=Se(Tw,[["render",Rw]]),Mw={props:["title","status","changes","type"]};const Lw={class:"action-card p-3 py-4"},$w={class:"d-flex"},Ww={class:"align-self-center",style:{"margin-right":"10px",color:"white","border-radius":"4px","background-color":"rgba(39, 50, 131)",width:"64px",height:"64px","font-size":"1.5rem","text-align":"center","line-height":"64px"}},Fw={class:"align-self-center",style:{"text-align":"center","flex-grow":"1"}},Vw={style:{"font-size":"0.7rem",color:"rgb(135, 136, 141)"}},Hw={style:{"font-size":"2rem"}};function Uw(e,t,n,s,i,o){return F(),H("div",Lw,[w("div",$w,[w("div",Ww,[jg(e.$slots,"default",{},void 0,!0)]),w("div",Fw,[w("div",Vw,re(n.title),1),w("div",Hw,[kt(re(n.status)+" ",1),w("span",{class:Mn({up:n.type=="up",down:n.type=="down"}),style:{"font-size":"0.9rem"}},re(n.changes),3)])])])])}const jw=Se(Mw,[["render",Uw],["__scopeId","data-v-54042410"]]),qw={props:["project"],components:{ActionStatusCard:Dw,ActionCard:jw},computed:{actions(){var e,t;return((t=(e=this.project)==null?void 0:e.actionsView)==null?void 0:t.actions)||[]},tasks(){var e,t;return((t=(e=this.project)==null?void 0:e.actionsView)==null?void 0:t.tasks)||[]}}},zw={class:"row my-3"},Kw={class:"col-md-4"},Gw=w("i",{class:"bi bi-search"},null,-1),Yw={class:"col-md-4"},Xw=w("i",{class:"bi bi-check2-circle"},null,-1),Qw={class:"col-md-4"},Jw=w("i",{class:"bi bi-info-circle"},null,-1),Zw=w("h4",null,"Action",-1),e0={class:"row my-3"},t0=w("h4",null,"Task",-1),n0={class:"row my-3"};function s0(e,t,n,s,i,o){const r=De("ActionCard"),a=De("ActionStatusCard");return F(),H("div",null,[w("div",zw,[w("div",Kw,[oe(r,{title:"Total Suggestion",status:"17",changes:"↑ 122",type:"up"},{default:$s(()=>[Gw]),_:1})]),w("div",Yw,[oe(r,{title:"Completed",status:"5",changes:"↑ 5.4%",type:"up"},{default:$s(()=>[Xw]),_:1})]),w("div",Qw,[oe(r,{title:"Action Needed",status:"8",changes:"↓ 3.2%",type:"down"},{default:$s(()=>[Jw]),_:1})])]),Zw,w("div",e0,[(F(!0),H(fe,null,Ie(o.actions,(l,c)=>(F(),H("div",{class:"col-md-4",key:c},[oe(a,{title:l.title,text:l.text,type:l.type},null,8,["title","text","type"])]))),128))]),t0,w("div",n0,[(F(!0),H(fe,null,Ie(o.tasks,(l,c)=>(F(),H("div",{class:"col-md-4",key:c},[oe(a,{title:l.title,text:l.text,type:l.type},null,8,["title","text","type"])]))),128))])])}const i0=Se(qw,[["render",s0]]),o0={props:{organizationGuid:String,projectGuid:String},components:{Tag:du,ProjectOverviewView:Ay,ProjectAssessmentView:Ew,ProjectActionView:i0},data(){return{author:"Yiwei Gong",date:new Date}},computed:{...cr(fr),organization(){return this.organizationsStore.findOrganization(this.organizationGuid)},project(){return this.organizationsStore.findProject(this.organizationGuid,this.projectGuid)}},methods:{formatDate(e){return e?(typeof e=="string"&&(e=new Date(e)),e.toLocaleDateString()):""}}};const r0=e=>(bs("data-v-ec2f7fdd"),e=e(),vs(),e),a0={class:"container mt-5"},l0={class:"d-flex"},c0={style:{"margin-right":"18px"}},u0=["src"],d0={class:"align-self-center"},f0={class:"d-flex"},p0={style:{"margin-right":"18px"}},h0={class:"rating align-self-center"},m0=["href"],g0={style:{color:"rgba(39, 50, 131)"}},_0={style:{color:"rgba(39, 50, 131)"}},b0={class:"description"},v0={class:"mt-4 d-flex"},y0={class:"mt-4"},w0=r0(()=>w("ul",{class:"nav nav-tabs",id:"myTab",role:"tablist"},[w("li",{class:"nav-item"},[w("a",{class:"nav-link active",id:"overview-tab","data-bs-toggle":"tab",href:"#overview",role:"tab","aria-controls":"overview","aria-selected":"true"},"Overview")]),w("li",{class:"nav-item"},[w("a",{class:"nav-link",id:"assessment-tab","data-bs-toggle":"tab",href:"#assessment",role:"tab","aria-controls":"assessment","aria-selected":"true"},"Assessment")]),w("li",{class:"nav-item"},[w("a",{class:"nav-link",id:"actions-tab","data-bs-toggle":"tab",href:"#actions",role:"tab","aria-controls":"actions","aria-selected":"false"},"Actions")])],-1)),k0={class:"tab-content",id:"myTabContent"},E0={class:"tab-pane fade show active",id:"overview",role:"tabpanel","aria-labelledby":"overview-tab"},T0={class:"mt-3"},S0={class:"tab-pane fade show",id:"assessment",role:"tabpanel","aria-labelledby":"assessment-tab"},A0={class:"mt-3"},x0={class:"tab-pane fade show",id:"actions",role:"tabpanel","aria-labelledby":"actions-tab"},C0={class:"mt-3"};function P0(e,t,n,s,i,o){var u,d,p,g,P,k,A,C,m;const r=De("Tag"),a=De("ProjectOverviewView"),l=De("ProjectAssessmentView"),c=De("ProjectActionView");return F(),H("div",a0,[w("div",l0,[w("div",c0,[w("img",{src:(u=o.project)==null?void 0:u.logo,class:"logo"},null,8,u0)]),w("div",d0,[w("div",f0,[w("h1",p0,re((d=o.project)==null?void 0:d.name),1),w("div",h0,re((p=o.project)==null?void 0:p.rating),1)]),w("div",null,[w("a",{href:(g=o.project)==null?void 0:g.url},re((P=o.project)==null?void 0:P.url),9,m0)]),w("div",null,[kt(" Created by "),w("span",g0,[w("u",null,re((k=o.project)==null?void 0:k.author),1)]),kt(" on "),w("span",_0,[w("u",null,re(o.formatDate((A=o.project)==null?void 0:A.dueAt)),1)])]),w("div",b0,re((C=o.project)==null?void 0:C.description),1)])]),w("div",v0,[(F(!0),H(fe,null,Ie((m=o.project)==null?void 0:m.tags,_=>(F(),Ht(r,{key:_,tag:_},null,8,["tag"]))),128))]),w("div",y0,[w0,w("div",k0,[w("div",E0,[w("div",T0,[oe(a,{project:o.project},null,8,["project"])])]),w("div",S0,[w("div",A0,[oe(l,{project:o.project},null,8,["project"])])]),w("div",x0,[w("div",C0,[oe(c,{project:o.project},null,8,["project"])])])])])])}const I0=Se(o0,[["render",P0],["__scopeId","data-v-ec2f7fdd"]]),O0={components:{ProjectSidebarItem:Hv,ProjectDetailsView:I0},data(){return{searchValue:"",selectedProjectGuid:""}},computed:{...cr(fr),organizationGuid(){return this.$route.params.organizationGuid},projects(){const e=this.organizationsStore.findOrganization(this.organizationGuid);if(!e)return[];if(!this.searchValue)return e.projects;const t=this.searchValue.toLowerCase();return e.projects.filter(n=>n.name.toLowerCase().includes(t))}}},N0="/webapp/logo-full.png";const pu=e=>(bs("data-v-1c489500"),e=e(),vs(),e),B0={class:"d-flex org"},R0={class:"h-100 org-sidebar"},D0={class:"container"},M0=pu(()=>w("div",{class:"mt-3",style:{color:"rgba(39, 50, 131)","font-size":"1.2rem"}},"Projects",-1)),L0={class:"form-inline my-2"},$0={class:"h-100 w-100 org-main"},W0={key:0,class:"container-fluid"},F0={key:1,class:"h-100 w-100"},V0=pu(()=>w("div",{style:{"text-align":"center","margin-top":"15%"}},[w("div",{style:{"font-size":"4rem",color:"red"}},[w("img",{src:N0,style:{width:"256px",filter:"grayscale(100%)",opacity:"0.3"}})]),w("div",{style:{width:"100%","max-width":"320px",color:"rgba(0, 0, 0, 0.5)"},class:"mx-auto"}," AI-Powered Regulatory Assessment Solution for Digital Asset Innovation ")],-1)),H0=[V0];function U0(e,t,n,s,i,o){const r=De("ProjectSidebarItem"),a=De("ProjectDetailsView");return F(),H("div",B0,[w("div",R0,[w("div",D0,[M0,w("form",L0,[Cc(w("input",{class:"form-control",type:"search",placeholder:"Search...","aria-label":"Search","onUpdate:modelValue":t[0]||(t[0]=l=>i.searchValue=l)},null,512),[[U_,i.searchValue]])]),(F(!0),H(fe,null,Ie(o.projects,l=>(F(),Ht(r,{key:l.guid,guid:l.guid,name:l.name,logo:l.logo,highlighted:l.guid==i.selectedProjectGuid,onClick:c=>i.selectedProjectGuid=l.guid},null,8,["guid","name","logo","highlighted","onClick"]))),128))])]),w("div",$0,[i.selectedProjectGuid?(F(),H("div",W0,[oe(a,{"organization-guid":o.organizationGuid,"project-guid":i.selectedProjectGuid},null,8,["organization-guid","project-guid"])])):(F(),H("div",F0,H0))])])}const j0=Se(O0,[["render",U0],["__scopeId","data-v-1c489500"]]),q0=iv({history:wb("/webapp/"),routes:[{path:"/",name:"organizations",component:Mv},{path:"/organizations/:organizationGuid",name:"organization",component:j0}]}),pr=K_(fv);pr.use(X_());pr.use(q0);pr.mount("#app");
