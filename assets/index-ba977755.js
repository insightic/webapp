(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();var $e="top",Ue="bottom",qe="right",Le="left",nr="auto",Pn=[$e,Ue,qe,Le],tn="start",bn="end",Xa="clippingParents",Ai="viewport",dn="popper",Qa="reference",ti=Pn.reduce(function(e,t){return e.concat([t+"-"+tn,t+"-"+bn])},[]),Ti=[].concat(Pn,[nr]).reduce(function(e,t){return e.concat([t,t+"-"+tn,t+"-"+bn])},[]),Za="beforeRead",Ja="read",el="afterRead",tl="beforeMain",nl="main",sl="afterMain",rl="beforeWrite",il="write",ol="afterWrite",al=[Za,Ja,el,tl,nl,sl,rl,il,ol];function ft(e){return e?(e.nodeName||"").toLowerCase():null}function ze(e){if(e==null)return window;if(e.toString()!=="[object Window]"){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function nn(e){var t=ze(e).Element;return e instanceof t||e instanceof Element}function Ke(e){var t=ze(e).HTMLElement;return e instanceof t||e instanceof HTMLElement}function Si(e){if(typeof ShadowRoot>"u")return!1;var t=ze(e).ShadowRoot;return e instanceof t||e instanceof ShadowRoot}function hu(e){var t=e.state;Object.keys(t.elements).forEach(function(n){var s=t.styles[n]||{},r=t.attributes[n]||{},i=t.elements[n];!Ke(i)||!ft(i)||(Object.assign(i.style,s),Object.keys(r).forEach(function(o){var a=r[o];a===!1?i.removeAttribute(o):i.setAttribute(o,a===!0?"":a)}))})}function mu(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach(function(s){var r=t.elements[s],i=t.attributes[s]||{},o=Object.keys(t.styles.hasOwnProperty(s)?t.styles[s]:n[s]),a=o.reduce(function(l,c){return l[c]="",l},{});!Ke(r)||!ft(r)||(Object.assign(r.style,a),Object.keys(i).forEach(function(l){r.removeAttribute(l)}))})}}const Ci={name:"applyStyles",enabled:!0,phase:"write",fn:hu,effect:mu,requires:["computeStyles"]};function lt(e){return e.split("-")[0]}var Qt=Math.max,Hs=Math.min,yn=Math.round;function ni(){var e=navigator.userAgentData;return e!=null&&e.brands&&Array.isArray(e.brands)?e.brands.map(function(t){return t.brand+"/"+t.version}).join(" "):navigator.userAgent}function ll(){return!/^((?!chrome|android).)*safari/i.test(ni())}function wn(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!1);var s=e.getBoundingClientRect(),r=1,i=1;t&&Ke(e)&&(r=e.offsetWidth>0&&yn(s.width)/e.offsetWidth||1,i=e.offsetHeight>0&&yn(s.height)/e.offsetHeight||1);var o=nn(e)?ze(e):window,a=o.visualViewport,l=!ll()&&n,c=(s.left+(l&&a?a.offsetLeft:0))/r,u=(s.top+(l&&a?a.offsetTop:0))/i,d=s.width/r,p=s.height/i;return{width:d,height:p,top:u,right:c+d,bottom:u+p,left:c,x:c,y:u}}function Ii(e){var t=wn(e),n=e.offsetWidth,s=e.offsetHeight;return Math.abs(t.width-n)<=1&&(n=t.width),Math.abs(t.height-s)<=1&&(s=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:s}}function cl(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&Si(n)){var s=t;do{if(s&&e.isSameNode(s))return!0;s=s.parentNode||s.host}while(s)}return!1}function yt(e){return ze(e).getComputedStyle(e)}function gu(e){return["table","td","th"].indexOf(ft(e))>=0}function Ft(e){return((nn(e)?e.ownerDocument:e.document)||window.document).documentElement}function sr(e){return ft(e)==="html"?e:e.assignedSlot||e.parentNode||(Si(e)?e.host:null)||Ft(e)}function _o(e){return!Ke(e)||yt(e).position==="fixed"?null:e.offsetParent}function _u(e){var t=/firefox/i.test(ni()),n=/Trident/i.test(ni());if(n&&Ke(e)){var s=yt(e);if(s.position==="fixed")return null}var r=sr(e);for(Si(r)&&(r=r.host);Ke(r)&&["html","body"].indexOf(ft(r))<0;){var i=yt(r);if(i.transform!=="none"||i.perspective!=="none"||i.contain==="paint"||["transform","perspective"].indexOf(i.willChange)!==-1||t&&i.willChange==="filter"||t&&i.filter&&i.filter!=="none")return r;r=r.parentNode}return null}function fs(e){for(var t=ze(e),n=_o(e);n&&gu(n)&&yt(n).position==="static";)n=_o(n);return n&&(ft(n)==="html"||ft(n)==="body"&&yt(n).position==="static")?t:n||_u(e)||t}function Oi(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function Kn(e,t,n){return Qt(e,Hs(t,n))}function vu(e,t,n){var s=Kn(e,t,n);return s>n?n:s}function ul(){return{top:0,right:0,bottom:0,left:0}}function dl(e){return Object.assign({},ul(),e)}function fl(e,t){return t.reduce(function(n,s){return n[s]=e,n},{})}var bu=function(t,n){return t=typeof t=="function"?t(Object.assign({},n.rects,{placement:n.placement})):t,dl(typeof t!="number"?t:fl(t,Pn))};function yu(e){var t,n=e.state,s=e.name,r=e.options,i=n.elements.arrow,o=n.modifiersData.popperOffsets,a=lt(n.placement),l=Oi(a),c=[Le,qe].indexOf(a)>=0,u=c?"height":"width";if(!(!i||!o)){var d=bu(r.padding,n),p=Ii(i),g=l==="y"?$e:Le,O=l==="y"?Ue:qe,E=n.rects.reference[u]+n.rects.reference[l]-o[l]-n.rects.popper[u],S=o[l]-n.rects.reference[l],I=fs(i),m=I?l==="y"?I.clientHeight||0:I.clientWidth||0:0,_=E/2-S/2,v=d[g],y=m-p[u]-d[O],T=m/2-p[u]/2+_,R=Kn(v,T,y),M=l;n.modifiersData[s]=(t={},t[M]=R,t.centerOffset=R-T,t)}}function wu(e){var t=e.state,n=e.options,s=n.element,r=s===void 0?"[data-popper-arrow]":s;r!=null&&(typeof r=="string"&&(r=t.elements.popper.querySelector(r),!r)||cl(t.elements.popper,r)&&(t.elements.arrow=r))}const pl={name:"arrow",enabled:!0,phase:"main",fn:yu,effect:wu,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function En(e){return e.split("-")[1]}var Eu={top:"auto",right:"auto",bottom:"auto",left:"auto"};function ku(e,t){var n=e.x,s=e.y,r=t.devicePixelRatio||1;return{x:yn(n*r)/r||0,y:yn(s*r)/r||0}}function vo(e){var t,n=e.popper,s=e.popperRect,r=e.placement,i=e.variation,o=e.offsets,a=e.position,l=e.gpuAcceleration,c=e.adaptive,u=e.roundOffsets,d=e.isFixed,p=o.x,g=p===void 0?0:p,O=o.y,E=O===void 0?0:O,S=typeof u=="function"?u({x:g,y:E}):{x:g,y:E};g=S.x,E=S.y;var I=o.hasOwnProperty("x"),m=o.hasOwnProperty("y"),_=Le,v=$e,y=window;if(c){var T=fs(n),R="clientHeight",M="clientWidth";if(T===ze(n)&&(T=Ft(n),yt(T).position!=="static"&&a==="absolute"&&(R="scrollHeight",M="scrollWidth")),T=T,r===$e||(r===Le||r===qe)&&i===bn){v=Ue;var x=d&&T===y&&y.visualViewport?y.visualViewport.height:T[R];E-=x-s.height,E*=l?1:-1}if(r===Le||(r===$e||r===Ue)&&i===bn){_=qe;var H=d&&T===y&&y.visualViewport?y.visualViewport.width:T[M];g-=H-s.width,g*=l?1:-1}}var X=Object.assign({position:a},c&&Eu),ie=u===!0?ku({x:g,y:E},ze(n)):{x:g,y:E};if(g=ie.x,E=ie.y,l){var ue;return Object.assign({},X,(ue={},ue[v]=m?"0":"",ue[_]=I?"0":"",ue.transform=(y.devicePixelRatio||1)<=1?"translate("+g+"px, "+E+"px)":"translate3d("+g+"px, "+E+"px, 0)",ue))}return Object.assign({},X,(t={},t[v]=m?E+"px":"",t[_]=I?g+"px":"",t.transform="",t))}function Au(e){var t=e.state,n=e.options,s=n.gpuAcceleration,r=s===void 0?!0:s,i=n.adaptive,o=i===void 0?!0:i,a=n.roundOffsets,l=a===void 0?!0:a,c={placement:lt(t.placement),variation:En(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:r,isFixed:t.options.strategy==="fixed"};t.modifiersData.popperOffsets!=null&&(t.styles.popper=Object.assign({},t.styles.popper,vo(Object.assign({},c,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:o,roundOffsets:l})))),t.modifiersData.arrow!=null&&(t.styles.arrow=Object.assign({},t.styles.arrow,vo(Object.assign({},c,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:l})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})}const xi={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:Au,data:{}};var ys={passive:!0};function Tu(e){var t=e.state,n=e.instance,s=e.options,r=s.scroll,i=r===void 0?!0:r,o=s.resize,a=o===void 0?!0:o,l=ze(t.elements.popper),c=[].concat(t.scrollParents.reference,t.scrollParents.popper);return i&&c.forEach(function(u){u.addEventListener("scroll",n.update,ys)}),a&&l.addEventListener("resize",n.update,ys),function(){i&&c.forEach(function(u){u.removeEventListener("scroll",n.update,ys)}),a&&l.removeEventListener("resize",n.update,ys)}}const Pi={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:Tu,data:{}};var Su={left:"right",right:"left",bottom:"top",top:"bottom"};function Ds(e){return e.replace(/left|right|bottom|top/g,function(t){return Su[t]})}var Cu={start:"end",end:"start"};function bo(e){return e.replace(/start|end/g,function(t){return Cu[t]})}function Ni(e){var t=ze(e),n=t.pageXOffset,s=t.pageYOffset;return{scrollLeft:n,scrollTop:s}}function Di(e){return wn(Ft(e)).left+Ni(e).scrollLeft}function Iu(e,t){var n=ze(e),s=Ft(e),r=n.visualViewport,i=s.clientWidth,o=s.clientHeight,a=0,l=0;if(r){i=r.width,o=r.height;var c=ll();(c||!c&&t==="fixed")&&(a=r.offsetLeft,l=r.offsetTop)}return{width:i,height:o,x:a+Di(e),y:l}}function Ou(e){var t,n=Ft(e),s=Ni(e),r=(t=e.ownerDocument)==null?void 0:t.body,i=Qt(n.scrollWidth,n.clientWidth,r?r.scrollWidth:0,r?r.clientWidth:0),o=Qt(n.scrollHeight,n.clientHeight,r?r.scrollHeight:0,r?r.clientHeight:0),a=-s.scrollLeft+Di(e),l=-s.scrollTop;return yt(r||n).direction==="rtl"&&(a+=Qt(n.clientWidth,r?r.clientWidth:0)-i),{width:i,height:o,x:a,y:l}}function Ri(e){var t=yt(e),n=t.overflow,s=t.overflowX,r=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+r+s)}function hl(e){return["html","body","#document"].indexOf(ft(e))>=0?e.ownerDocument.body:Ke(e)&&Ri(e)?e:hl(sr(e))}function Gn(e,t){var n;t===void 0&&(t=[]);var s=hl(e),r=s===((n=e.ownerDocument)==null?void 0:n.body),i=ze(s),o=r?[i].concat(i.visualViewport||[],Ri(s)?s:[]):s,a=t.concat(o);return r?a:a.concat(Gn(sr(o)))}function si(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function xu(e,t){var n=wn(e,!1,t==="fixed");return n.top=n.top+e.clientTop,n.left=n.left+e.clientLeft,n.bottom=n.top+e.clientHeight,n.right=n.left+e.clientWidth,n.width=e.clientWidth,n.height=e.clientHeight,n.x=n.left,n.y=n.top,n}function yo(e,t,n){return t===Ai?si(Iu(e,n)):nn(t)?xu(t,n):si(Ou(Ft(e)))}function Pu(e){var t=Gn(sr(e)),n=["absolute","fixed"].indexOf(yt(e).position)>=0,s=n&&Ke(e)?fs(e):e;return nn(s)?t.filter(function(r){return nn(r)&&cl(r,s)&&ft(r)!=="body"}):[]}function Nu(e,t,n,s){var r=t==="clippingParents"?Pu(e):[].concat(t),i=[].concat(r,[n]),o=i[0],a=i.reduce(function(l,c){var u=yo(e,c,s);return l.top=Qt(u.top,l.top),l.right=Hs(u.right,l.right),l.bottom=Hs(u.bottom,l.bottom),l.left=Qt(u.left,l.left),l},yo(e,o,s));return a.width=a.right-a.left,a.height=a.bottom-a.top,a.x=a.left,a.y=a.top,a}function ml(e){var t=e.reference,n=e.element,s=e.placement,r=s?lt(s):null,i=s?En(s):null,o=t.x+t.width/2-n.width/2,a=t.y+t.height/2-n.height/2,l;switch(r){case $e:l={x:o,y:t.y-n.height};break;case Ue:l={x:o,y:t.y+t.height};break;case qe:l={x:t.x+t.width,y:a};break;case Le:l={x:t.x-n.width,y:a};break;default:l={x:t.x,y:t.y}}var c=r?Oi(r):null;if(c!=null){var u=c==="y"?"height":"width";switch(i){case tn:l[c]=l[c]-(t[u]/2-n[u]/2);break;case bn:l[c]=l[c]+(t[u]/2-n[u]/2);break}}return l}function kn(e,t){t===void 0&&(t={});var n=t,s=n.placement,r=s===void 0?e.placement:s,i=n.strategy,o=i===void 0?e.strategy:i,a=n.boundary,l=a===void 0?Xa:a,c=n.rootBoundary,u=c===void 0?Ai:c,d=n.elementContext,p=d===void 0?dn:d,g=n.altBoundary,O=g===void 0?!1:g,E=n.padding,S=E===void 0?0:E,I=dl(typeof S!="number"?S:fl(S,Pn)),m=p===dn?Qa:dn,_=e.rects.popper,v=e.elements[O?m:p],y=Nu(nn(v)?v:v.contextElement||Ft(e.elements.popper),l,u,o),T=wn(e.elements.reference),R=ml({reference:T,element:_,strategy:"absolute",placement:r}),M=si(Object.assign({},_,R)),x=p===dn?M:T,H={top:y.top-x.top+I.top,bottom:x.bottom-y.bottom+I.bottom,left:y.left-x.left+I.left,right:x.right-y.right+I.right},X=e.modifiersData.offset;if(p===dn&&X){var ie=X[r];Object.keys(H).forEach(function(ue){var Ie=[qe,Ue].indexOf(ue)>=0?1:-1,be=[$e,Ue].indexOf(ue)>=0?"y":"x";H[ue]+=ie[be]*Ie})}return H}function Du(e,t){t===void 0&&(t={});var n=t,s=n.placement,r=n.boundary,i=n.rootBoundary,o=n.padding,a=n.flipVariations,l=n.allowedAutoPlacements,c=l===void 0?Ti:l,u=En(s),d=u?a?ti:ti.filter(function(O){return En(O)===u}):Pn,p=d.filter(function(O){return c.indexOf(O)>=0});p.length===0&&(p=d);var g=p.reduce(function(O,E){return O[E]=kn(e,{placement:E,boundary:r,rootBoundary:i,padding:o})[lt(E)],O},{});return Object.keys(g).sort(function(O,E){return g[O]-g[E]})}function Ru(e){if(lt(e)===nr)return[];var t=Ds(e);return[bo(e),t,bo(t)]}function $u(e){var t=e.state,n=e.options,s=e.name;if(!t.modifiersData[s]._skip){for(var r=n.mainAxis,i=r===void 0?!0:r,o=n.altAxis,a=o===void 0?!0:o,l=n.fallbackPlacements,c=n.padding,u=n.boundary,d=n.rootBoundary,p=n.altBoundary,g=n.flipVariations,O=g===void 0?!0:g,E=n.allowedAutoPlacements,S=t.options.placement,I=lt(S),m=I===S,_=l||(m||!O?[Ds(S)]:Ru(S)),v=[S].concat(_).reduce(function(ye,Ce){return ye.concat(lt(Ce)===nr?Du(t,{placement:Ce,boundary:u,rootBoundary:d,padding:c,flipVariations:O,allowedAutoPlacements:E}):Ce)},[]),y=t.rects.reference,T=t.rects.popper,R=new Map,M=!0,x=v[0],H=0;H<v.length;H++){var X=v[H],ie=lt(X),ue=En(X)===tn,Ie=[$e,Ue].indexOf(ie)>=0,be=Ie?"width":"height",Q=kn(t,{placement:X,boundary:u,rootBoundary:d,altBoundary:p,padding:c}),J=Ie?ue?qe:Le:ue?Ue:$e;y[be]>T[be]&&(J=Ds(J));var G=Ds(J),he=[];if(i&&he.push(Q[ie]<=0),a&&he.push(Q[J]<=0,Q[G]<=0),he.every(function(ye){return ye})){x=X,M=!1;break}R.set(X,he)}if(M)for(var Ee=O?3:1,Se=function(Ce){var me=v.find(function(k){var F=R.get(k);if(F)return F.slice(0,Ce).every(function(B){return B})});if(me)return x=me,"break"},ce=Ee;ce>0;ce--){var Ve=Se(ce);if(Ve==="break")break}t.placement!==x&&(t.modifiersData[s]._skip=!0,t.placement=x,t.reset=!0)}}const gl={name:"flip",enabled:!0,phase:"main",fn:$u,requiresIfExists:["offset"],data:{_skip:!1}};function wo(e,t,n){return n===void 0&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function Eo(e){return[$e,qe,Ue,Le].some(function(t){return e[t]>=0})}function Lu(e){var t=e.state,n=e.name,s=t.rects.reference,r=t.rects.popper,i=t.modifiersData.preventOverflow,o=kn(t,{elementContext:"reference"}),a=kn(t,{altBoundary:!0}),l=wo(o,s),c=wo(a,r,i),u=Eo(l),d=Eo(c);t.modifiersData[n]={referenceClippingOffsets:l,popperEscapeOffsets:c,isReferenceHidden:u,hasPopperEscaped:d},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":u,"data-popper-escaped":d})}const _l={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:Lu};function Mu(e,t,n){var s=lt(e),r=[Le,$e].indexOf(s)>=0?-1:1,i=typeof n=="function"?n(Object.assign({},t,{placement:e})):n,o=i[0],a=i[1];return o=o||0,a=(a||0)*r,[Le,qe].indexOf(s)>=0?{x:a,y:o}:{x:o,y:a}}function Bu(e){var t=e.state,n=e.options,s=e.name,r=n.offset,i=r===void 0?[0,0]:r,o=Ti.reduce(function(u,d){return u[d]=Mu(d,t.rects,i),u},{}),a=o[t.placement],l=a.x,c=a.y;t.modifiersData.popperOffsets!=null&&(t.modifiersData.popperOffsets.x+=l,t.modifiersData.popperOffsets.y+=c),t.modifiersData[s]=o}const vl={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:Bu};function Fu(e){var t=e.state,n=e.name;t.modifiersData[n]=ml({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})}const $i={name:"popperOffsets",enabled:!0,phase:"read",fn:Fu,data:{}};function Vu(e){return e==="x"?"y":"x"}function Wu(e){var t=e.state,n=e.options,s=e.name,r=n.mainAxis,i=r===void 0?!0:r,o=n.altAxis,a=o===void 0?!1:o,l=n.boundary,c=n.rootBoundary,u=n.altBoundary,d=n.padding,p=n.tether,g=p===void 0?!0:p,O=n.tetherOffset,E=O===void 0?0:O,S=kn(t,{boundary:l,rootBoundary:c,padding:d,altBoundary:u}),I=lt(t.placement),m=En(t.placement),_=!m,v=Oi(I),y=Vu(v),T=t.modifiersData.popperOffsets,R=t.rects.reference,M=t.rects.popper,x=typeof E=="function"?E(Object.assign({},t.rects,{placement:t.placement})):E,H=typeof x=="number"?{mainAxis:x,altAxis:x}:Object.assign({mainAxis:0,altAxis:0},x),X=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,ie={x:0,y:0};if(T){if(i){var ue,Ie=v==="y"?$e:Le,be=v==="y"?Ue:qe,Q=v==="y"?"height":"width",J=T[v],G=J+S[Ie],he=J-S[be],Ee=g?-M[Q]/2:0,Se=m===tn?R[Q]:M[Q],ce=m===tn?-M[Q]:-R[Q],Ve=t.elements.arrow,ye=g&&Ve?Ii(Ve):{width:0,height:0},Ce=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:ul(),me=Ce[Ie],k=Ce[be],F=Kn(0,R[Q],ye[Q]),B=_?R[Q]/2-Ee-F-me-H.mainAxis:Se-F-me-H.mainAxis,U=_?-R[Q]/2+Ee+F+k+H.mainAxis:ce+F+k+H.mainAxis,ne=t.elements.arrow&&fs(t.elements.arrow),f=ne?v==="y"?ne.clientTop||0:ne.clientLeft||0:0,h=(ue=X==null?void 0:X[v])!=null?ue:0,b=J+B-h-f,A=J+U-h,C=Kn(g?Hs(G,b):G,J,g?Qt(he,A):he);T[v]=C,ie[v]=C-J}if(a){var P,V=v==="x"?$e:Le,$=v==="x"?Ue:qe,L=T[y],N=y==="y"?"height":"width",K=L+S[V],j=L-S[$],q=[$e,Le].indexOf(I)!==-1,Z=(P=X==null?void 0:X[y])!=null?P:0,se=q?K:L-R[N]-M[N]-Z+H.altAxis,fe=q?L+R[N]+M[N]-Z-H.altAxis:j,de=g&&q?vu(se,L,fe):Kn(g?se:K,L,g?fe:j);T[y]=de,ie[y]=de-L}t.modifiersData[s]=ie}}const bl={name:"preventOverflow",enabled:!0,phase:"main",fn:Wu,requiresIfExists:["offset"]};function Hu(e){return{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}}function ju(e){return e===ze(e)||!Ke(e)?Ni(e):Hu(e)}function Uu(e){var t=e.getBoundingClientRect(),n=yn(t.width)/e.offsetWidth||1,s=yn(t.height)/e.offsetHeight||1;return n!==1||s!==1}function qu(e,t,n){n===void 0&&(n=!1);var s=Ke(t),r=Ke(t)&&Uu(t),i=Ft(t),o=wn(e,r,n),a={scrollLeft:0,scrollTop:0},l={x:0,y:0};return(s||!s&&!n)&&((ft(t)!=="body"||Ri(i))&&(a=ju(t)),Ke(t)?(l=wn(t,!0),l.x+=t.clientLeft,l.y+=t.clientTop):i&&(l.x=Di(i))),{x:o.left+a.scrollLeft-l.x,y:o.top+a.scrollTop-l.y,width:o.width,height:o.height}}function zu(e){var t=new Map,n=new Set,s=[];e.forEach(function(i){t.set(i.name,i)});function r(i){n.add(i.name);var o=[].concat(i.requires||[],i.requiresIfExists||[]);o.forEach(function(a){if(!n.has(a)){var l=t.get(a);l&&r(l)}}),s.push(i)}return e.forEach(function(i){n.has(i.name)||r(i)}),s}function Ku(e){var t=zu(e);return al.reduce(function(n,s){return n.concat(t.filter(function(r){return r.phase===s}))},[])}function Gu(e){var t;return function(){return t||(t=new Promise(function(n){Promise.resolve().then(function(){t=void 0,n(e())})})),t}}function Yu(e){var t=e.reduce(function(n,s){var r=n[s.name];return n[s.name]=r?Object.assign({},r,s,{options:Object.assign({},r.options,s.options),data:Object.assign({},r.data,s.data)}):s,n},{});return Object.keys(t).map(function(n){return t[n]})}var ko={placement:"bottom",modifiers:[],strategy:"absolute"};function Ao(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some(function(s){return!(s&&typeof s.getBoundingClientRect=="function")})}function rr(e){e===void 0&&(e={});var t=e,n=t.defaultModifiers,s=n===void 0?[]:n,r=t.defaultOptions,i=r===void 0?ko:r;return function(a,l,c){c===void 0&&(c=i);var u={placement:"bottom",orderedModifiers:[],options:Object.assign({},ko,i),modifiersData:{},elements:{reference:a,popper:l},attributes:{},styles:{}},d=[],p=!1,g={state:u,setOptions:function(I){var m=typeof I=="function"?I(u.options):I;E(),u.options=Object.assign({},i,u.options,m),u.scrollParents={reference:nn(a)?Gn(a):a.contextElement?Gn(a.contextElement):[],popper:Gn(l)};var _=Ku(Yu([].concat(s,u.options.modifiers)));return u.orderedModifiers=_.filter(function(v){return v.enabled}),O(),g.update()},forceUpdate:function(){if(!p){var I=u.elements,m=I.reference,_=I.popper;if(Ao(m,_)){u.rects={reference:qu(m,fs(_),u.options.strategy==="fixed"),popper:Ii(_)},u.reset=!1,u.placement=u.options.placement,u.orderedModifiers.forEach(function(H){return u.modifiersData[H.name]=Object.assign({},H.data)});for(var v=0;v<u.orderedModifiers.length;v++){if(u.reset===!0){u.reset=!1,v=-1;continue}var y=u.orderedModifiers[v],T=y.fn,R=y.options,M=R===void 0?{}:R,x=y.name;typeof T=="function"&&(u=T({state:u,options:M,name:x,instance:g})||u)}}}},update:Gu(function(){return new Promise(function(S){g.forceUpdate(),S(u)})}),destroy:function(){E(),p=!0}};if(!Ao(a,l))return g;g.setOptions(c).then(function(S){!p&&c.onFirstUpdate&&c.onFirstUpdate(S)});function O(){u.orderedModifiers.forEach(function(S){var I=S.name,m=S.options,_=m===void 0?{}:m,v=S.effect;if(typeof v=="function"){var y=v({state:u,name:I,instance:g,options:_}),T=function(){};d.push(y||T)}})}function E(){d.forEach(function(S){return S()}),d=[]}return g}}var Xu=rr(),Qu=[Pi,$i,xi,Ci],Zu=rr({defaultModifiers:Qu}),Ju=[Pi,$i,xi,Ci,vl,gl,bl,pl,_l],Li=rr({defaultModifiers:Ju});const yl=Object.freeze(Object.defineProperty({__proto__:null,afterMain:sl,afterRead:el,afterWrite:ol,applyStyles:Ci,arrow:pl,auto:nr,basePlacements:Pn,beforeMain:tl,beforeRead:Za,beforeWrite:rl,bottom:Ue,clippingParents:Xa,computeStyles:xi,createPopper:Li,createPopperBase:Xu,createPopperLite:Zu,detectOverflow:kn,end:bn,eventListeners:Pi,flip:gl,hide:_l,left:Le,main:nl,modifierPhases:al,offset:vl,placements:Ti,popper:dn,popperGenerator:rr,popperOffsets:$i,preventOverflow:bl,read:Ja,reference:Qa,right:qe,start:tn,top:$e,variationPlacements:ti,viewport:Ai,write:il},Symbol.toStringTag,{value:"Module"}));/*!
  * Bootstrap v5.2.3 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */const ed=1e6,td=1e3,ri="transitionend",nd=e=>e==null?`${e}`:Object.prototype.toString.call(e).match(/\s([a-z]+)/i)[1].toLowerCase(),sd=e=>{do e+=Math.floor(Math.random()*ed);while(document.getElementById(e));return e},wl=e=>{let t=e.getAttribute("data-bs-target");if(!t||t==="#"){let n=e.getAttribute("href");if(!n||!n.includes("#")&&!n.startsWith("."))return null;n.includes("#")&&!n.startsWith("#")&&(n=`#${n.split("#")[1]}`),t=n&&n!=="#"?n.trim():null}return t},El=e=>{const t=wl(e);return t&&document.querySelector(t)?t:null},_t=e=>{const t=wl(e);return t?document.querySelector(t):null},rd=e=>{if(!e)return 0;let{transitionDuration:t,transitionDelay:n}=window.getComputedStyle(e);const s=Number.parseFloat(t),r=Number.parseFloat(n);return!s&&!r?0:(t=t.split(",")[0],n=n.split(",")[0],(Number.parseFloat(t)+Number.parseFloat(n))*td)},kl=e=>{e.dispatchEvent(new Event(ri))},vt=e=>!e||typeof e!="object"?!1:(typeof e.jquery<"u"&&(e=e[0]),typeof e.nodeType<"u"),Rt=e=>vt(e)?e.jquery?e[0]:e:typeof e=="string"&&e.length>0?document.querySelector(e):null,Nn=e=>{if(!vt(e)||e.getClientRects().length===0)return!1;const t=getComputedStyle(e).getPropertyValue("visibility")==="visible",n=e.closest("details:not([open])");if(!n)return t;if(n!==e){const s=e.closest("summary");if(s&&s.parentNode!==n||s===null)return!1}return t},$t=e=>!e||e.nodeType!==Node.ELEMENT_NODE||e.classList.contains("disabled")?!0:typeof e.disabled<"u"?e.disabled:e.hasAttribute("disabled")&&e.getAttribute("disabled")!=="false",Al=e=>{if(!document.documentElement.attachShadow)return null;if(typeof e.getRootNode=="function"){const t=e.getRootNode();return t instanceof ShadowRoot?t:null}return e instanceof ShadowRoot?e:e.parentNode?Al(e.parentNode):null},js=()=>{},ps=e=>{e.offsetHeight},Tl=()=>window.jQuery&&!document.body.hasAttribute("data-bs-no-jquery")?window.jQuery:null,Ir=[],id=e=>{document.readyState==="loading"?(Ir.length||document.addEventListener("DOMContentLoaded",()=>{for(const t of Ir)t()}),Ir.push(e)):e()},Ge=()=>document.documentElement.dir==="rtl",Ye=e=>{id(()=>{const t=Tl();if(t){const n=e.NAME,s=t.fn[n];t.fn[n]=e.jQueryInterface,t.fn[n].Constructor=e,t.fn[n].noConflict=()=>(t.fn[n]=s,e.jQueryInterface)}})},gt=e=>{typeof e=="function"&&e()},Sl=(e,t,n=!0)=>{if(!n){gt(e);return}const s=5,r=rd(t)+s;let i=!1;const o=({target:a})=>{a===t&&(i=!0,t.removeEventListener(ri,o),gt(e))};t.addEventListener(ri,o),setTimeout(()=>{i||kl(t)},r)},Mi=(e,t,n,s)=>{const r=e.length;let i=e.indexOf(t);return i===-1?!n&&s?e[r-1]:e[0]:(i+=n?1:-1,s&&(i=(i+r)%r),e[Math.max(0,Math.min(i,r-1))])},od=/[^.]*(?=\..*)\.|.*/,ad=/\..*/,ld=/::\d+$/,Or={};let To=1;const Cl={mouseenter:"mouseover",mouseleave:"mouseout"},cd=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function Il(e,t){return t&&`${t}::${To++}`||e.uidEvent||To++}function Ol(e){const t=Il(e);return e.uidEvent=t,Or[t]=Or[t]||{},Or[t]}function ud(e,t){return function n(s){return Bi(s,{delegateTarget:e}),n.oneOff&&D.off(e,s.type,t),t.apply(e,[s])}}function dd(e,t,n){return function s(r){const i=e.querySelectorAll(t);for(let{target:o}=r;o&&o!==this;o=o.parentNode)for(const a of i)if(a===o)return Bi(r,{delegateTarget:o}),s.oneOff&&D.off(e,r.type,t,n),n.apply(o,[r])}}function xl(e,t,n=null){return Object.values(e).find(s=>s.callable===t&&s.delegationSelector===n)}function Pl(e,t,n){const s=typeof t=="string",r=s?n:t||n;let i=Nl(e);return cd.has(i)||(i=e),[s,r,i]}function So(e,t,n,s,r){if(typeof t!="string"||!e)return;let[i,o,a]=Pl(t,n,s);t in Cl&&(o=(O=>function(E){if(!E.relatedTarget||E.relatedTarget!==E.delegateTarget&&!E.delegateTarget.contains(E.relatedTarget))return O.call(this,E)})(o));const l=Ol(e),c=l[a]||(l[a]={}),u=xl(c,o,i?n:null);if(u){u.oneOff=u.oneOff&&r;return}const d=Il(o,t.replace(od,"")),p=i?dd(e,n,o):ud(e,o);p.delegationSelector=i?n:null,p.callable=o,p.oneOff=r,p.uidEvent=d,c[d]=p,e.addEventListener(a,p,i)}function ii(e,t,n,s,r){const i=xl(t[n],s,r);i&&(e.removeEventListener(n,i,!!r),delete t[n][i.uidEvent])}function fd(e,t,n,s){const r=t[n]||{};for(const i of Object.keys(r))if(i.includes(s)){const o=r[i];ii(e,t,n,o.callable,o.delegationSelector)}}function Nl(e){return e=e.replace(ad,""),Cl[e]||e}const D={on(e,t,n,s){So(e,t,n,s,!1)},one(e,t,n,s){So(e,t,n,s,!0)},off(e,t,n,s){if(typeof t!="string"||!e)return;const[r,i,o]=Pl(t,n,s),a=o!==t,l=Ol(e),c=l[o]||{},u=t.startsWith(".");if(typeof i<"u"){if(!Object.keys(c).length)return;ii(e,l,o,i,r?n:null);return}if(u)for(const d of Object.keys(l))fd(e,l,d,t.slice(1));for(const d of Object.keys(c)){const p=d.replace(ld,"");if(!a||t.includes(p)){const g=c[d];ii(e,l,o,g.callable,g.delegationSelector)}}},trigger(e,t,n){if(typeof t!="string"||!e)return null;const s=Tl(),r=Nl(t),i=t!==r;let o=null,a=!0,l=!0,c=!1;i&&s&&(o=s.Event(t,n),s(e).trigger(o),a=!o.isPropagationStopped(),l=!o.isImmediatePropagationStopped(),c=o.isDefaultPrevented());let u=new Event(t,{bubbles:a,cancelable:!0});return u=Bi(u,n),c&&u.preventDefault(),l&&e.dispatchEvent(u),u.defaultPrevented&&o&&o.preventDefault(),u}};function Bi(e,t){for(const[n,s]of Object.entries(t||{}))try{e[n]=s}catch{Object.defineProperty(e,n,{configurable:!0,get(){return s}})}return e}const Tt=new Map,xr={set(e,t,n){Tt.has(e)||Tt.set(e,new Map);const s=Tt.get(e);if(!s.has(t)&&s.size!==0){console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(s.keys())[0]}.`);return}s.set(t,n)},get(e,t){return Tt.has(e)&&Tt.get(e).get(t)||null},remove(e,t){if(!Tt.has(e))return;const n=Tt.get(e);n.delete(t),n.size===0&&Tt.delete(e)}};function Co(e){if(e==="true")return!0;if(e==="false")return!1;if(e===Number(e).toString())return Number(e);if(e===""||e==="null")return null;if(typeof e!="string")return e;try{return JSON.parse(decodeURIComponent(e))}catch{return e}}function Pr(e){return e.replace(/[A-Z]/g,t=>`-${t.toLowerCase()}`)}const bt={setDataAttribute(e,t,n){e.setAttribute(`data-bs-${Pr(t)}`,n)},removeDataAttribute(e,t){e.removeAttribute(`data-bs-${Pr(t)}`)},getDataAttributes(e){if(!e)return{};const t={},n=Object.keys(e.dataset).filter(s=>s.startsWith("bs")&&!s.startsWith("bsConfig"));for(const s of n){let r=s.replace(/^bs/,"");r=r.charAt(0).toLowerCase()+r.slice(1,r.length),t[r]=Co(e.dataset[s])}return t},getDataAttribute(e,t){return Co(e.getAttribute(`data-bs-${Pr(t)}`))}};class hs{static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}_getConfig(t){return t=this._mergeConfigObj(t),t=this._configAfterMerge(t),this._typeCheckConfig(t),t}_configAfterMerge(t){return t}_mergeConfigObj(t,n){const s=vt(n)?bt.getDataAttribute(n,"config"):{};return{...this.constructor.Default,...typeof s=="object"?s:{},...vt(n)?bt.getDataAttributes(n):{},...typeof t=="object"?t:{}}}_typeCheckConfig(t,n=this.constructor.DefaultType){for(const s of Object.keys(n)){const r=n[s],i=t[s],o=vt(i)?"element":nd(i);if(!new RegExp(r).test(o))throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${s}" provided type "${o}" but expected type "${r}".`)}}}const pd="5.2.3";class nt extends hs{constructor(t,n){super(),t=Rt(t),t&&(this._element=t,this._config=this._getConfig(n),xr.set(this._element,this.constructor.DATA_KEY,this))}dispose(){xr.remove(this._element,this.constructor.DATA_KEY),D.off(this._element,this.constructor.EVENT_KEY);for(const t of Object.getOwnPropertyNames(this))this[t]=null}_queueCallback(t,n,s=!0){Sl(t,n,s)}_getConfig(t){return t=this._mergeConfigObj(t,this._element),t=this._configAfterMerge(t),this._typeCheckConfig(t),t}static getInstance(t){return xr.get(Rt(t),this.DATA_KEY)}static getOrCreateInstance(t,n={}){return this.getInstance(t)||new this(t,typeof n=="object"?n:null)}static get VERSION(){return pd}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}static eventName(t){return`${t}${this.EVENT_KEY}`}}const ir=(e,t="hide")=>{const n=`click.dismiss${e.EVENT_KEY}`,s=e.NAME;D.on(document,n,`[data-bs-dismiss="${s}"]`,function(r){if(["A","AREA"].includes(this.tagName)&&r.preventDefault(),$t(this))return;const i=_t(this)||this.closest(`.${s}`);e.getOrCreateInstance(i)[t]()})},hd="alert",md="bs.alert",Dl=`.${md}`,gd=`close${Dl}`,_d=`closed${Dl}`,vd="fade",bd="show";class or extends nt{static get NAME(){return hd}close(){if(D.trigger(this._element,gd).defaultPrevented)return;this._element.classList.remove(bd);const n=this._element.classList.contains(vd);this._queueCallback(()=>this._destroyElement(),this._element,n)}_destroyElement(){this._element.remove(),D.trigger(this._element,_d),this.dispose()}static jQueryInterface(t){return this.each(function(){const n=or.getOrCreateInstance(this);if(typeof t=="string"){if(n[t]===void 0||t.startsWith("_")||t==="constructor")throw new TypeError(`No method named "${t}"`);n[t](this)}})}}ir(or,"close");Ye(or);const yd="button",wd="bs.button",Ed=`.${wd}`,kd=".data-api",Ad="active",Io='[data-bs-toggle="button"]',Td=`click${Ed}${kd}`;class ar extends nt{static get NAME(){return yd}toggle(){this._element.setAttribute("aria-pressed",this._element.classList.toggle(Ad))}static jQueryInterface(t){return this.each(function(){const n=ar.getOrCreateInstance(this);t==="toggle"&&n[t]()})}}D.on(document,Td,Io,e=>{e.preventDefault();const t=e.target.closest(Io);ar.getOrCreateInstance(t).toggle()});Ye(ar);const te={find(e,t=document.documentElement){return[].concat(...Element.prototype.querySelectorAll.call(t,e))},findOne(e,t=document.documentElement){return Element.prototype.querySelector.call(t,e)},children(e,t){return[].concat(...e.children).filter(n=>n.matches(t))},parents(e,t){const n=[];let s=e.parentNode.closest(t);for(;s;)n.push(s),s=s.parentNode.closest(t);return n},prev(e,t){let n=e.previousElementSibling;for(;n;){if(n.matches(t))return[n];n=n.previousElementSibling}return[]},next(e,t){let n=e.nextElementSibling;for(;n;){if(n.matches(t))return[n];n=n.nextElementSibling}return[]},focusableChildren(e){const t=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map(n=>`${n}:not([tabindex^="-"])`).join(",");return this.find(t,e).filter(n=>!$t(n)&&Nn(n))}},Sd="swipe",Dn=".bs.swipe",Cd=`touchstart${Dn}`,Id=`touchmove${Dn}`,Od=`touchend${Dn}`,xd=`pointerdown${Dn}`,Pd=`pointerup${Dn}`,Nd="touch",Dd="pen",Rd="pointer-event",$d=40,Ld={endCallback:null,leftCallback:null,rightCallback:null},Md={endCallback:"(function|null)",leftCallback:"(function|null)",rightCallback:"(function|null)"};class Us extends hs{constructor(t,n){super(),this._element=t,!(!t||!Us.isSupported())&&(this._config=this._getConfig(n),this._deltaX=0,this._supportPointerEvents=!!window.PointerEvent,this._initEvents())}static get Default(){return Ld}static get DefaultType(){return Md}static get NAME(){return Sd}dispose(){D.off(this._element,Dn)}_start(t){if(!this._supportPointerEvents){this._deltaX=t.touches[0].clientX;return}this._eventIsPointerPenTouch(t)&&(this._deltaX=t.clientX)}_end(t){this._eventIsPointerPenTouch(t)&&(this._deltaX=t.clientX-this._deltaX),this._handleSwipe(),gt(this._config.endCallback)}_move(t){this._deltaX=t.touches&&t.touches.length>1?0:t.touches[0].clientX-this._deltaX}_handleSwipe(){const t=Math.abs(this._deltaX);if(t<=$d)return;const n=t/this._deltaX;this._deltaX=0,n&&gt(n>0?this._config.rightCallback:this._config.leftCallback)}_initEvents(){this._supportPointerEvents?(D.on(this._element,xd,t=>this._start(t)),D.on(this._element,Pd,t=>this._end(t)),this._element.classList.add(Rd)):(D.on(this._element,Cd,t=>this._start(t)),D.on(this._element,Id,t=>this._move(t)),D.on(this._element,Od,t=>this._end(t)))}_eventIsPointerPenTouch(t){return this._supportPointerEvents&&(t.pointerType===Dd||t.pointerType===Nd)}static isSupported(){return"ontouchstart"in document.documentElement||navigator.maxTouchPoints>0}}const Bd="carousel",Fd="bs.carousel",Vt=`.${Fd}`,Rl=".data-api",Vd="ArrowLeft",Wd="ArrowRight",Hd=500,Wn="next",an="prev",fn="left",Rs="right",jd=`slide${Vt}`,Nr=`slid${Vt}`,Ud=`keydown${Vt}`,qd=`mouseenter${Vt}`,zd=`mouseleave${Vt}`,Kd=`dragstart${Vt}`,Gd=`load${Vt}${Rl}`,Yd=`click${Vt}${Rl}`,$l="carousel",ws="active",Xd="slide",Qd="carousel-item-end",Zd="carousel-item-start",Jd="carousel-item-next",ef="carousel-item-prev",Ll=".active",Ml=".carousel-item",tf=Ll+Ml,nf=".carousel-item img",sf=".carousel-indicators",rf="[data-bs-slide], [data-bs-slide-to]",of='[data-bs-ride="carousel"]',af={[Vd]:Rs,[Wd]:fn},lf={interval:5e3,keyboard:!0,pause:"hover",ride:!1,touch:!0,wrap:!0},cf={interval:"(number|boolean)",keyboard:"boolean",pause:"(string|boolean)",ride:"(boolean|string)",touch:"boolean",wrap:"boolean"};class ms extends nt{constructor(t,n){super(t,n),this._interval=null,this._activeElement=null,this._isSliding=!1,this.touchTimeout=null,this._swipeHelper=null,this._indicatorsElement=te.findOne(sf,this._element),this._addEventListeners(),this._config.ride===$l&&this.cycle()}static get Default(){return lf}static get DefaultType(){return cf}static get NAME(){return Bd}next(){this._slide(Wn)}nextWhenVisible(){!document.hidden&&Nn(this._element)&&this.next()}prev(){this._slide(an)}pause(){this._isSliding&&kl(this._element),this._clearInterval()}cycle(){this._clearInterval(),this._updateInterval(),this._interval=setInterval(()=>this.nextWhenVisible(),this._config.interval)}_maybeEnableCycle(){if(this._config.ride){if(this._isSliding){D.one(this._element,Nr,()=>this.cycle());return}this.cycle()}}to(t){const n=this._getItems();if(t>n.length-1||t<0)return;if(this._isSliding){D.one(this._element,Nr,()=>this.to(t));return}const s=this._getItemIndex(this._getActive());if(s===t)return;const r=t>s?Wn:an;this._slide(r,n[t])}dispose(){this._swipeHelper&&this._swipeHelper.dispose(),super.dispose()}_configAfterMerge(t){return t.defaultInterval=t.interval,t}_addEventListeners(){this._config.keyboard&&D.on(this._element,Ud,t=>this._keydown(t)),this._config.pause==="hover"&&(D.on(this._element,qd,()=>this.pause()),D.on(this._element,zd,()=>this._maybeEnableCycle())),this._config.touch&&Us.isSupported()&&this._addTouchEventListeners()}_addTouchEventListeners(){for(const s of te.find(nf,this._element))D.on(s,Kd,r=>r.preventDefault());const n={leftCallback:()=>this._slide(this._directionToOrder(fn)),rightCallback:()=>this._slide(this._directionToOrder(Rs)),endCallback:()=>{this._config.pause==="hover"&&(this.pause(),this.touchTimeout&&clearTimeout(this.touchTimeout),this.touchTimeout=setTimeout(()=>this._maybeEnableCycle(),Hd+this._config.interval))}};this._swipeHelper=new Us(this._element,n)}_keydown(t){if(/input|textarea/i.test(t.target.tagName))return;const n=af[t.key];n&&(t.preventDefault(),this._slide(this._directionToOrder(n)))}_getItemIndex(t){return this._getItems().indexOf(t)}_setActiveIndicatorElement(t){if(!this._indicatorsElement)return;const n=te.findOne(Ll,this._indicatorsElement);n.classList.remove(ws),n.removeAttribute("aria-current");const s=te.findOne(`[data-bs-slide-to="${t}"]`,this._indicatorsElement);s&&(s.classList.add(ws),s.setAttribute("aria-current","true"))}_updateInterval(){const t=this._activeElement||this._getActive();if(!t)return;const n=Number.parseInt(t.getAttribute("data-bs-interval"),10);this._config.interval=n||this._config.defaultInterval}_slide(t,n=null){if(this._isSliding)return;const s=this._getActive(),r=t===Wn,i=n||Mi(this._getItems(),s,r,this._config.wrap);if(i===s)return;const o=this._getItemIndex(i),a=g=>D.trigger(this._element,g,{relatedTarget:i,direction:this._orderToDirection(t),from:this._getItemIndex(s),to:o});if(a(jd).defaultPrevented||!s||!i)return;const c=!!this._interval;this.pause(),this._isSliding=!0,this._setActiveIndicatorElement(o),this._activeElement=i;const u=r?Zd:Qd,d=r?Jd:ef;i.classList.add(d),ps(i),s.classList.add(u),i.classList.add(u);const p=()=>{i.classList.remove(u,d),i.classList.add(ws),s.classList.remove(ws,d,u),this._isSliding=!1,a(Nr)};this._queueCallback(p,s,this._isAnimated()),c&&this.cycle()}_isAnimated(){return this._element.classList.contains(Xd)}_getActive(){return te.findOne(tf,this._element)}_getItems(){return te.find(Ml,this._element)}_clearInterval(){this._interval&&(clearInterval(this._interval),this._interval=null)}_directionToOrder(t){return Ge()?t===fn?an:Wn:t===fn?Wn:an}_orderToDirection(t){return Ge()?t===an?fn:Rs:t===an?Rs:fn}static jQueryInterface(t){return this.each(function(){const n=ms.getOrCreateInstance(this,t);if(typeof t=="number"){n.to(t);return}if(typeof t=="string"){if(n[t]===void 0||t.startsWith("_")||t==="constructor")throw new TypeError(`No method named "${t}"`);n[t]()}})}}D.on(document,Yd,rf,function(e){const t=_t(this);if(!t||!t.classList.contains($l))return;e.preventDefault();const n=ms.getOrCreateInstance(t),s=this.getAttribute("data-bs-slide-to");if(s){n.to(s),n._maybeEnableCycle();return}if(bt.getDataAttribute(this,"slide")==="next"){n.next(),n._maybeEnableCycle();return}n.prev(),n._maybeEnableCycle()});D.on(window,Gd,()=>{const e=te.find(of);for(const t of e)ms.getOrCreateInstance(t)});Ye(ms);const uf="collapse",df="bs.collapse",gs=`.${df}`,ff=".data-api",pf=`show${gs}`,hf=`shown${gs}`,mf=`hide${gs}`,gf=`hidden${gs}`,_f=`click${gs}${ff}`,Dr="show",mn="collapse",Es="collapsing",vf="collapsed",bf=`:scope .${mn} .${mn}`,yf="collapse-horizontal",wf="width",Ef="height",kf=".collapse.show, .collapse.collapsing",oi='[data-bs-toggle="collapse"]',Af={parent:null,toggle:!0},Tf={parent:"(null|element)",toggle:"boolean"};class ns extends nt{constructor(t,n){super(t,n),this._isTransitioning=!1,this._triggerArray=[];const s=te.find(oi);for(const r of s){const i=El(r),o=te.find(i).filter(a=>a===this._element);i!==null&&o.length&&this._triggerArray.push(r)}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return Af}static get DefaultType(){return Tf}static get NAME(){return uf}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let t=[];if(this._config.parent&&(t=this._getFirstLevelChildren(kf).filter(a=>a!==this._element).map(a=>ns.getOrCreateInstance(a,{toggle:!1}))),t.length&&t[0]._isTransitioning||D.trigger(this._element,pf).defaultPrevented)return;for(const a of t)a.hide();const s=this._getDimension();this._element.classList.remove(mn),this._element.classList.add(Es),this._element.style[s]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;const r=()=>{this._isTransitioning=!1,this._element.classList.remove(Es),this._element.classList.add(mn,Dr),this._element.style[s]="",D.trigger(this._element,hf)},o=`scroll${s[0].toUpperCase()+s.slice(1)}`;this._queueCallback(r,this._element,!0),this._element.style[s]=`${this._element[o]}px`}hide(){if(this._isTransitioning||!this._isShown()||D.trigger(this._element,mf).defaultPrevented)return;const n=this._getDimension();this._element.style[n]=`${this._element.getBoundingClientRect()[n]}px`,ps(this._element),this._element.classList.add(Es),this._element.classList.remove(mn,Dr);for(const r of this._triggerArray){const i=_t(r);i&&!this._isShown(i)&&this._addAriaAndCollapsedClass([r],!1)}this._isTransitioning=!0;const s=()=>{this._isTransitioning=!1,this._element.classList.remove(Es),this._element.classList.add(mn),D.trigger(this._element,gf)};this._element.style[n]="",this._queueCallback(s,this._element,!0)}_isShown(t=this._element){return t.classList.contains(Dr)}_configAfterMerge(t){return t.toggle=!!t.toggle,t.parent=Rt(t.parent),t}_getDimension(){return this._element.classList.contains(yf)?wf:Ef}_initializeChildren(){if(!this._config.parent)return;const t=this._getFirstLevelChildren(oi);for(const n of t){const s=_t(n);s&&this._addAriaAndCollapsedClass([n],this._isShown(s))}}_getFirstLevelChildren(t){const n=te.find(bf,this._config.parent);return te.find(t,this._config.parent).filter(s=>!n.includes(s))}_addAriaAndCollapsedClass(t,n){if(t.length)for(const s of t)s.classList.toggle(vf,!n),s.setAttribute("aria-expanded",n)}static jQueryInterface(t){const n={};return typeof t=="string"&&/show|hide/.test(t)&&(n.toggle=!1),this.each(function(){const s=ns.getOrCreateInstance(this,n);if(typeof t=="string"){if(typeof s[t]>"u")throw new TypeError(`No method named "${t}"`);s[t]()}})}}D.on(document,_f,oi,function(e){(e.target.tagName==="A"||e.delegateTarget&&e.delegateTarget.tagName==="A")&&e.preventDefault();const t=El(this),n=te.find(t);for(const s of n)ns.getOrCreateInstance(s,{toggle:!1}).toggle()});Ye(ns);const Oo="dropdown",Sf="bs.dropdown",sn=`.${Sf}`,Fi=".data-api",Cf="Escape",xo="Tab",If="ArrowUp",Po="ArrowDown",Of=2,xf=`hide${sn}`,Pf=`hidden${sn}`,Nf=`show${sn}`,Df=`shown${sn}`,Bl=`click${sn}${Fi}`,Fl=`keydown${sn}${Fi}`,Rf=`keyup${sn}${Fi}`,pn="show",$f="dropup",Lf="dropend",Mf="dropstart",Bf="dropup-center",Ff="dropdown-center",Gt='[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',Vf=`${Gt}.${pn}`,$s=".dropdown-menu",Wf=".navbar",Hf=".navbar-nav",jf=".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",Uf=Ge()?"top-end":"top-start",qf=Ge()?"top-start":"top-end",zf=Ge()?"bottom-end":"bottom-start",Kf=Ge()?"bottom-start":"bottom-end",Gf=Ge()?"left-start":"right-start",Yf=Ge()?"right-start":"left-start",Xf="top",Qf="bottom",Zf={autoClose:!0,boundary:"clippingParents",display:"dynamic",offset:[0,2],popperConfig:null,reference:"toggle"},Jf={autoClose:"(boolean|string)",boundary:"(string|element)",display:"string",offset:"(array|string|function)",popperConfig:"(null|object|function)",reference:"(string|element|object)"};class ct extends nt{constructor(t,n){super(t,n),this._popper=null,this._parent=this._element.parentNode,this._menu=te.next(this._element,$s)[0]||te.prev(this._element,$s)[0]||te.findOne($s,this._parent),this._inNavbar=this._detectNavbar()}static get Default(){return Zf}static get DefaultType(){return Jf}static get NAME(){return Oo}toggle(){return this._isShown()?this.hide():this.show()}show(){if($t(this._element)||this._isShown())return;const t={relatedTarget:this._element};if(!D.trigger(this._element,Nf,t).defaultPrevented){if(this._createPopper(),"ontouchstart"in document.documentElement&&!this._parent.closest(Hf))for(const s of[].concat(...document.body.children))D.on(s,"mouseover",js);this._element.focus(),this._element.setAttribute("aria-expanded",!0),this._menu.classList.add(pn),this._element.classList.add(pn),D.trigger(this._element,Df,t)}}hide(){if($t(this._element)||!this._isShown())return;const t={relatedTarget:this._element};this._completeHide(t)}dispose(){this._popper&&this._popper.destroy(),super.dispose()}update(){this._inNavbar=this._detectNavbar(),this._popper&&this._popper.update()}_completeHide(t){if(!D.trigger(this._element,xf,t).defaultPrevented){if("ontouchstart"in document.documentElement)for(const s of[].concat(...document.body.children))D.off(s,"mouseover",js);this._popper&&this._popper.destroy(),this._menu.classList.remove(pn),this._element.classList.remove(pn),this._element.setAttribute("aria-expanded","false"),bt.removeDataAttribute(this._menu,"popper"),D.trigger(this._element,Pf,t)}}_getConfig(t){if(t=super._getConfig(t),typeof t.reference=="object"&&!vt(t.reference)&&typeof t.reference.getBoundingClientRect!="function")throw new TypeError(`${Oo.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);return t}_createPopper(){if(typeof yl>"u")throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");let t=this._element;this._config.reference==="parent"?t=this._parent:vt(this._config.reference)?t=Rt(this._config.reference):typeof this._config.reference=="object"&&(t=this._config.reference);const n=this._getPopperConfig();this._popper=Li(t,this._menu,n)}_isShown(){return this._menu.classList.contains(pn)}_getPlacement(){const t=this._parent;if(t.classList.contains(Lf))return Gf;if(t.classList.contains(Mf))return Yf;if(t.classList.contains(Bf))return Xf;if(t.classList.contains(Ff))return Qf;const n=getComputedStyle(this._menu).getPropertyValue("--bs-position").trim()==="end";return t.classList.contains($f)?n?qf:Uf:n?Kf:zf}_detectNavbar(){return this._element.closest(Wf)!==null}_getOffset(){const{offset:t}=this._config;return typeof t=="string"?t.split(",").map(n=>Number.parseInt(n,10)):typeof t=="function"?n=>t(n,this._element):t}_getPopperConfig(){const t={placement:this._getPlacement(),modifiers:[{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"offset",options:{offset:this._getOffset()}}]};return(this._inNavbar||this._config.display==="static")&&(bt.setDataAttribute(this._menu,"popper","static"),t.modifiers=[{name:"applyStyles",enabled:!1}]),{...t,...typeof this._config.popperConfig=="function"?this._config.popperConfig(t):this._config.popperConfig}}_selectMenuItem({key:t,target:n}){const s=te.find(jf,this._menu).filter(r=>Nn(r));s.length&&Mi(s,n,t===Po,!s.includes(n)).focus()}static jQueryInterface(t){return this.each(function(){const n=ct.getOrCreateInstance(this,t);if(typeof t=="string"){if(typeof n[t]>"u")throw new TypeError(`No method named "${t}"`);n[t]()}})}static clearMenus(t){if(t.button===Of||t.type==="keyup"&&t.key!==xo)return;const n=te.find(Vf);for(const s of n){const r=ct.getInstance(s);if(!r||r._config.autoClose===!1)continue;const i=t.composedPath(),o=i.includes(r._menu);if(i.includes(r._element)||r._config.autoClose==="inside"&&!o||r._config.autoClose==="outside"&&o||r._menu.contains(t.target)&&(t.type==="keyup"&&t.key===xo||/input|select|option|textarea|form/i.test(t.target.tagName)))continue;const a={relatedTarget:r._element};t.type==="click"&&(a.clickEvent=t),r._completeHide(a)}}static dataApiKeydownHandler(t){const n=/input|textarea/i.test(t.target.tagName),s=t.key===Cf,r=[If,Po].includes(t.key);if(!r&&!s||n&&!s)return;t.preventDefault();const i=this.matches(Gt)?this:te.prev(this,Gt)[0]||te.next(this,Gt)[0]||te.findOne(Gt,t.delegateTarget.parentNode),o=ct.getOrCreateInstance(i);if(r){t.stopPropagation(),o.show(),o._selectMenuItem(t);return}o._isShown()&&(t.stopPropagation(),o.hide(),i.focus())}}D.on(document,Fl,Gt,ct.dataApiKeydownHandler);D.on(document,Fl,$s,ct.dataApiKeydownHandler);D.on(document,Bl,ct.clearMenus);D.on(document,Rf,ct.clearMenus);D.on(document,Bl,Gt,function(e){e.preventDefault(),ct.getOrCreateInstance(this).toggle()});Ye(ct);const No=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",Do=".sticky-top",ks="padding-right",Ro="margin-right";class ai{constructor(){this._element=document.body}getWidth(){const t=document.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}hide(){const t=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,ks,n=>n+t),this._setElementAttributes(No,ks,n=>n+t),this._setElementAttributes(Do,Ro,n=>n-t)}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,ks),this._resetElementAttributes(No,ks),this._resetElementAttributes(Do,Ro)}isOverflowing(){return this.getWidth()>0}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(t,n,s){const r=this.getWidth(),i=o=>{if(o!==this._element&&window.innerWidth>o.clientWidth+r)return;this._saveInitialAttribute(o,n);const a=window.getComputedStyle(o).getPropertyValue(n);o.style.setProperty(n,`${s(Number.parseFloat(a))}px`)};this._applyManipulationCallback(t,i)}_saveInitialAttribute(t,n){const s=t.style.getPropertyValue(n);s&&bt.setDataAttribute(t,n,s)}_resetElementAttributes(t,n){const s=r=>{const i=bt.getDataAttribute(r,n);if(i===null){r.style.removeProperty(n);return}bt.removeDataAttribute(r,n),r.style.setProperty(n,i)};this._applyManipulationCallback(t,s)}_applyManipulationCallback(t,n){if(vt(t)){n(t);return}for(const s of te.find(t,this._element))n(s)}}const Vl="backdrop",ep="fade",$o="show",Lo=`mousedown.bs.${Vl}`,tp={className:"modal-backdrop",clickCallback:null,isAnimated:!1,isVisible:!0,rootElement:"body"},np={className:"string",clickCallback:"(function|null)",isAnimated:"boolean",isVisible:"boolean",rootElement:"(element|string)"};class Wl extends hs{constructor(t){super(),this._config=this._getConfig(t),this._isAppended=!1,this._element=null}static get Default(){return tp}static get DefaultType(){return np}static get NAME(){return Vl}show(t){if(!this._config.isVisible){gt(t);return}this._append();const n=this._getElement();this._config.isAnimated&&ps(n),n.classList.add($o),this._emulateAnimation(()=>{gt(t)})}hide(t){if(!this._config.isVisible){gt(t);return}this._getElement().classList.remove($o),this._emulateAnimation(()=>{this.dispose(),gt(t)})}dispose(){this._isAppended&&(D.off(this._element,Lo),this._element.remove(),this._isAppended=!1)}_getElement(){if(!this._element){const t=document.createElement("div");t.className=this._config.className,this._config.isAnimated&&t.classList.add(ep),this._element=t}return this._element}_configAfterMerge(t){return t.rootElement=Rt(t.rootElement),t}_append(){if(this._isAppended)return;const t=this._getElement();this._config.rootElement.append(t),D.on(t,Lo,()=>{gt(this._config.clickCallback)}),this._isAppended=!0}_emulateAnimation(t){Sl(t,this._getElement(),this._config.isAnimated)}}const sp="focustrap",rp="bs.focustrap",qs=`.${rp}`,ip=`focusin${qs}`,op=`keydown.tab${qs}`,ap="Tab",lp="forward",Mo="backward",cp={autofocus:!0,trapElement:null},up={autofocus:"boolean",trapElement:"element"};class Hl extends hs{constructor(t){super(),this._config=this._getConfig(t),this._isActive=!1,this._lastTabNavDirection=null}static get Default(){return cp}static get DefaultType(){return up}static get NAME(){return sp}activate(){this._isActive||(this._config.autofocus&&this._config.trapElement.focus(),D.off(document,qs),D.on(document,ip,t=>this._handleFocusin(t)),D.on(document,op,t=>this._handleKeydown(t)),this._isActive=!0)}deactivate(){this._isActive&&(this._isActive=!1,D.off(document,qs))}_handleFocusin(t){const{trapElement:n}=this._config;if(t.target===document||t.target===n||n.contains(t.target))return;const s=te.focusableChildren(n);s.length===0?n.focus():this._lastTabNavDirection===Mo?s[s.length-1].focus():s[0].focus()}_handleKeydown(t){t.key===ap&&(this._lastTabNavDirection=t.shiftKey?Mo:lp)}}const dp="modal",fp="bs.modal",st=`.${fp}`,pp=".data-api",hp="Escape",mp=`hide${st}`,gp=`hidePrevented${st}`,jl=`hidden${st}`,Ul=`show${st}`,_p=`shown${st}`,vp=`resize${st}`,bp=`click.dismiss${st}`,yp=`mousedown.dismiss${st}`,wp=`keydown.dismiss${st}`,Ep=`click${st}${pp}`,Bo="modal-open",kp="fade",Fo="show",Rr="modal-static",Ap=".modal.show",Tp=".modal-dialog",Sp=".modal-body",Cp='[data-bs-toggle="modal"]',Ip={backdrop:!0,focus:!0,keyboard:!0},Op={backdrop:"(boolean|string)",focus:"boolean",keyboard:"boolean"};class An extends nt{constructor(t,n){super(t,n),this._dialog=te.findOne(Tp,this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._isTransitioning=!1,this._scrollBar=new ai,this._addEventListeners()}static get Default(){return Ip}static get DefaultType(){return Op}static get NAME(){return dp}toggle(t){return this._isShown?this.hide():this.show(t)}show(t){this._isShown||this._isTransitioning||D.trigger(this._element,Ul,{relatedTarget:t}).defaultPrevented||(this._isShown=!0,this._isTransitioning=!0,this._scrollBar.hide(),document.body.classList.add(Bo),this._adjustDialog(),this._backdrop.show(()=>this._showElement(t)))}hide(){!this._isShown||this._isTransitioning||D.trigger(this._element,mp).defaultPrevented||(this._isShown=!1,this._isTransitioning=!0,this._focustrap.deactivate(),this._element.classList.remove(Fo),this._queueCallback(()=>this._hideModal(),this._element,this._isAnimated()))}dispose(){for(const t of[window,this._dialog])D.off(t,st);this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new Wl({isVisible:!!this._config.backdrop,isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new Hl({trapElement:this._element})}_showElement(t){document.body.contains(this._element)||document.body.append(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0;const n=te.findOne(Sp,this._dialog);n&&(n.scrollTop=0),ps(this._element),this._element.classList.add(Fo);const s=()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,D.trigger(this._element,_p,{relatedTarget:t})};this._queueCallback(s,this._dialog,this._isAnimated())}_addEventListeners(){D.on(this._element,wp,t=>{if(t.key===hp){if(this._config.keyboard){t.preventDefault(),this.hide();return}this._triggerBackdropTransition()}}),D.on(window,vp,()=>{this._isShown&&!this._isTransitioning&&this._adjustDialog()}),D.on(this._element,yp,t=>{D.one(this._element,bp,n=>{if(!(this._element!==t.target||this._element!==n.target)){if(this._config.backdrop==="static"){this._triggerBackdropTransition();return}this._config.backdrop&&this.hide()}})})}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide(()=>{document.body.classList.remove(Bo),this._resetAdjustments(),this._scrollBar.reset(),D.trigger(this._element,jl)})}_isAnimated(){return this._element.classList.contains(kp)}_triggerBackdropTransition(){if(D.trigger(this._element,gp).defaultPrevented)return;const n=this._element.scrollHeight>document.documentElement.clientHeight,s=this._element.style.overflowY;s==="hidden"||this._element.classList.contains(Rr)||(n||(this._element.style.overflowY="hidden"),this._element.classList.add(Rr),this._queueCallback(()=>{this._element.classList.remove(Rr),this._queueCallback(()=>{this._element.style.overflowY=s},this._dialog)},this._dialog),this._element.focus())}_adjustDialog(){const t=this._element.scrollHeight>document.documentElement.clientHeight,n=this._scrollBar.getWidth(),s=n>0;if(s&&!t){const r=Ge()?"paddingLeft":"paddingRight";this._element.style[r]=`${n}px`}if(!s&&t){const r=Ge()?"paddingRight":"paddingLeft";this._element.style[r]=`${n}px`}}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}static jQueryInterface(t,n){return this.each(function(){const s=An.getOrCreateInstance(this,t);if(typeof t=="string"){if(typeof s[t]>"u")throw new TypeError(`No method named "${t}"`);s[t](n)}})}}D.on(document,Ep,Cp,function(e){const t=_t(this);["A","AREA"].includes(this.tagName)&&e.preventDefault(),D.one(t,Ul,r=>{r.defaultPrevented||D.one(t,jl,()=>{Nn(this)&&this.focus()})});const n=te.findOne(Ap);n&&An.getInstance(n).hide(),An.getOrCreateInstance(t).toggle(this)});ir(An);Ye(An);const xp="offcanvas",Pp="bs.offcanvas",kt=`.${Pp}`,ql=".data-api",Np=`load${kt}${ql}`,Dp="Escape",Vo="show",Wo="showing",Ho="hiding",Rp="offcanvas-backdrop",zl=".offcanvas.show",$p=`show${kt}`,Lp=`shown${kt}`,Mp=`hide${kt}`,jo=`hidePrevented${kt}`,Kl=`hidden${kt}`,Bp=`resize${kt}`,Fp=`click${kt}${ql}`,Vp=`keydown.dismiss${kt}`,Wp='[data-bs-toggle="offcanvas"]',Hp={backdrop:!0,keyboard:!0,scroll:!1},jp={backdrop:"(boolean|string)",keyboard:"boolean",scroll:"boolean"};class Lt extends nt{constructor(t,n){super(t,n),this._isShown=!1,this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._addEventListeners()}static get Default(){return Hp}static get DefaultType(){return jp}static get NAME(){return xp}toggle(t){return this._isShown?this.hide():this.show(t)}show(t){if(this._isShown||D.trigger(this._element,$p,{relatedTarget:t}).defaultPrevented)return;this._isShown=!0,this._backdrop.show(),this._config.scroll||new ai().hide(),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.classList.add(Wo);const s=()=>{(!this._config.scroll||this._config.backdrop)&&this._focustrap.activate(),this._element.classList.add(Vo),this._element.classList.remove(Wo),D.trigger(this._element,Lp,{relatedTarget:t})};this._queueCallback(s,this._element,!0)}hide(){if(!this._isShown||D.trigger(this._element,Mp).defaultPrevented)return;this._focustrap.deactivate(),this._element.blur(),this._isShown=!1,this._element.classList.add(Ho),this._backdrop.hide();const n=()=>{this._element.classList.remove(Vo,Ho),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._config.scroll||new ai().reset(),D.trigger(this._element,Kl)};this._queueCallback(n,this._element,!0)}dispose(){this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}_initializeBackDrop(){const t=()=>{if(this._config.backdrop==="static"){D.trigger(this._element,jo);return}this.hide()},n=!!this._config.backdrop;return new Wl({className:Rp,isVisible:n,isAnimated:!0,rootElement:this._element.parentNode,clickCallback:n?t:null})}_initializeFocusTrap(){return new Hl({trapElement:this._element})}_addEventListeners(){D.on(this._element,Vp,t=>{if(t.key===Dp){if(!this._config.keyboard){D.trigger(this._element,jo);return}this.hide()}})}static jQueryInterface(t){return this.each(function(){const n=Lt.getOrCreateInstance(this,t);if(typeof t=="string"){if(n[t]===void 0||t.startsWith("_")||t==="constructor")throw new TypeError(`No method named "${t}"`);n[t](this)}})}}D.on(document,Fp,Wp,function(e){const t=_t(this);if(["A","AREA"].includes(this.tagName)&&e.preventDefault(),$t(this))return;D.one(t,Kl,()=>{Nn(this)&&this.focus()});const n=te.findOne(zl);n&&n!==t&&Lt.getInstance(n).hide(),Lt.getOrCreateInstance(t).toggle(this)});D.on(window,Np,()=>{for(const e of te.find(zl))Lt.getOrCreateInstance(e).show()});D.on(window,Bp,()=>{for(const e of te.find("[aria-modal][class*=show][class*=offcanvas-]"))getComputedStyle(e).position!=="fixed"&&Lt.getOrCreateInstance(e).hide()});ir(Lt);Ye(Lt);const Up=new Set(["background","cite","href","itemtype","longdesc","poster","src","xlink:href"]),qp=/^aria-[\w-]*$/i,zp=/^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i,Kp=/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i,Gp=(e,t)=>{const n=e.nodeName.toLowerCase();return t.includes(n)?Up.has(n)?!!(zp.test(e.nodeValue)||Kp.test(e.nodeValue)):!0:t.filter(s=>s instanceof RegExp).some(s=>s.test(n))},Gl={"*":["class","dir","id","lang","role",qp],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]};function Yp(e,t,n){if(!e.length)return e;if(n&&typeof n=="function")return n(e);const r=new window.DOMParser().parseFromString(e,"text/html"),i=[].concat(...r.body.querySelectorAll("*"));for(const o of i){const a=o.nodeName.toLowerCase();if(!Object.keys(t).includes(a)){o.remove();continue}const l=[].concat(...o.attributes),c=[].concat(t["*"]||[],t[a]||[]);for(const u of l)Gp(u,c)||o.removeAttribute(u.nodeName)}return r.body.innerHTML}const Xp="TemplateFactory",Qp={allowList:Gl,content:{},extraClass:"",html:!1,sanitize:!0,sanitizeFn:null,template:"<div></div>"},Zp={allowList:"object",content:"object",extraClass:"(string|function)",html:"boolean",sanitize:"boolean",sanitizeFn:"(null|function)",template:"string"},Jp={entry:"(string|element|function|null)",selector:"(string|element)"};class eh extends hs{constructor(t){super(),this._config=this._getConfig(t)}static get Default(){return Qp}static get DefaultType(){return Zp}static get NAME(){return Xp}getContent(){return Object.values(this._config.content).map(t=>this._resolvePossibleFunction(t)).filter(Boolean)}hasContent(){return this.getContent().length>0}changeContent(t){return this._checkContent(t),this._config.content={...this._config.content,...t},this}toHtml(){const t=document.createElement("div");t.innerHTML=this._maybeSanitize(this._config.template);for(const[r,i]of Object.entries(this._config.content))this._setContent(t,i,r);const n=t.children[0],s=this._resolvePossibleFunction(this._config.extraClass);return s&&n.classList.add(...s.split(" ")),n}_typeCheckConfig(t){super._typeCheckConfig(t),this._checkContent(t.content)}_checkContent(t){for(const[n,s]of Object.entries(t))super._typeCheckConfig({selector:n,entry:s},Jp)}_setContent(t,n,s){const r=te.findOne(s,t);if(r){if(n=this._resolvePossibleFunction(n),!n){r.remove();return}if(vt(n)){this._putElementInTemplate(Rt(n),r);return}if(this._config.html){r.innerHTML=this._maybeSanitize(n);return}r.textContent=n}}_maybeSanitize(t){return this._config.sanitize?Yp(t,this._config.allowList,this._config.sanitizeFn):t}_resolvePossibleFunction(t){return typeof t=="function"?t(this):t}_putElementInTemplate(t,n){if(this._config.html){n.innerHTML="",n.append(t);return}n.textContent=t.textContent}}const th="tooltip",nh=new Set(["sanitize","allowList","sanitizeFn"]),$r="fade",sh="modal",As="show",rh=".tooltip-inner",Uo=`.${sh}`,qo="hide.bs.modal",Hn="hover",Lr="focus",ih="click",oh="manual",ah="hide",lh="hidden",ch="show",uh="shown",dh="inserted",fh="click",ph="focusin",hh="focusout",mh="mouseenter",gh="mouseleave",_h={AUTO:"auto",TOP:"top",RIGHT:Ge()?"left":"right",BOTTOM:"bottom",LEFT:Ge()?"right":"left"},vh={allowList:Gl,animation:!0,boundary:"clippingParents",container:!1,customClass:"",delay:0,fallbackPlacements:["top","right","bottom","left"],html:!1,offset:[0,0],placement:"top",popperConfig:null,sanitize:!0,sanitizeFn:null,selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',title:"",trigger:"hover focus"},bh={allowList:"object",animation:"boolean",boundary:"(string|element)",container:"(string|element|boolean)",customClass:"(string|function)",delay:"(number|object)",fallbackPlacements:"array",html:"boolean",offset:"(array|string|function)",placement:"(string|function)",popperConfig:"(null|object|function)",sanitize:"boolean",sanitizeFn:"(null|function)",selector:"(string|boolean)",template:"string",title:"(string|element|function)",trigger:"string"};class Rn extends nt{constructor(t,n){if(typeof yl>"u")throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");super(t,n),this._isEnabled=!0,this._timeout=0,this._isHovered=null,this._activeTrigger={},this._popper=null,this._templateFactory=null,this._newContent=null,this.tip=null,this._setListeners(),this._config.selector||this._fixTitle()}static get Default(){return vh}static get DefaultType(){return bh}static get NAME(){return th}enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}toggleEnabled(){this._isEnabled=!this._isEnabled}toggle(){if(this._isEnabled){if(this._activeTrigger.click=!this._activeTrigger.click,this._isShown()){this._leave();return}this._enter()}}dispose(){clearTimeout(this._timeout),D.off(this._element.closest(Uo),qo,this._hideModalHandler),this._element.getAttribute("data-bs-original-title")&&this._element.setAttribute("title",this._element.getAttribute("data-bs-original-title")),this._disposePopper(),super.dispose()}show(){if(this._element.style.display==="none")throw new Error("Please use show on visible elements");if(!(this._isWithContent()&&this._isEnabled))return;const t=D.trigger(this._element,this.constructor.eventName(ch)),s=(Al(this._element)||this._element.ownerDocument.documentElement).contains(this._element);if(t.defaultPrevented||!s)return;this._disposePopper();const r=this._getTipElement();this._element.setAttribute("aria-describedby",r.getAttribute("id"));const{container:i}=this._config;if(this._element.ownerDocument.documentElement.contains(this.tip)||(i.append(r),D.trigger(this._element,this.constructor.eventName(dh))),this._popper=this._createPopper(r),r.classList.add(As),"ontouchstart"in document.documentElement)for(const a of[].concat(...document.body.children))D.on(a,"mouseover",js);const o=()=>{D.trigger(this._element,this.constructor.eventName(uh)),this._isHovered===!1&&this._leave(),this._isHovered=!1};this._queueCallback(o,this.tip,this._isAnimated())}hide(){if(!this._isShown()||D.trigger(this._element,this.constructor.eventName(ah)).defaultPrevented)return;if(this._getTipElement().classList.remove(As),"ontouchstart"in document.documentElement)for(const r of[].concat(...document.body.children))D.off(r,"mouseover",js);this._activeTrigger[ih]=!1,this._activeTrigger[Lr]=!1,this._activeTrigger[Hn]=!1,this._isHovered=null;const s=()=>{this._isWithActiveTrigger()||(this._isHovered||this._disposePopper(),this._element.removeAttribute("aria-describedby"),D.trigger(this._element,this.constructor.eventName(lh)))};this._queueCallback(s,this.tip,this._isAnimated())}update(){this._popper&&this._popper.update()}_isWithContent(){return!!this._getTitle()}_getTipElement(){return this.tip||(this.tip=this._createTipElement(this._newContent||this._getContentForTemplate())),this.tip}_createTipElement(t){const n=this._getTemplateFactory(t).toHtml();if(!n)return null;n.classList.remove($r,As),n.classList.add(`bs-${this.constructor.NAME}-auto`);const s=sd(this.constructor.NAME).toString();return n.setAttribute("id",s),this._isAnimated()&&n.classList.add($r),n}setContent(t){this._newContent=t,this._isShown()&&(this._disposePopper(),this.show())}_getTemplateFactory(t){return this._templateFactory?this._templateFactory.changeContent(t):this._templateFactory=new eh({...this._config,content:t,extraClass:this._resolvePossibleFunction(this._config.customClass)}),this._templateFactory}_getContentForTemplate(){return{[rh]:this._getTitle()}}_getTitle(){return this._resolvePossibleFunction(this._config.title)||this._element.getAttribute("data-bs-original-title")}_initializeOnDelegatedTarget(t){return this.constructor.getOrCreateInstance(t.delegateTarget,this._getDelegateConfig())}_isAnimated(){return this._config.animation||this.tip&&this.tip.classList.contains($r)}_isShown(){return this.tip&&this.tip.classList.contains(As)}_createPopper(t){const n=typeof this._config.placement=="function"?this._config.placement.call(this,t,this._element):this._config.placement,s=_h[n.toUpperCase()];return Li(this._element,t,this._getPopperConfig(s))}_getOffset(){const{offset:t}=this._config;return typeof t=="string"?t.split(",").map(n=>Number.parseInt(n,10)):typeof t=="function"?n=>t(n,this._element):t}_resolvePossibleFunction(t){return typeof t=="function"?t.call(this._element):t}_getPopperConfig(t){const n={placement:t,modifiers:[{name:"flip",options:{fallbackPlacements:this._config.fallbackPlacements}},{name:"offset",options:{offset:this._getOffset()}},{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"arrow",options:{element:`.${this.constructor.NAME}-arrow`}},{name:"preSetPlacement",enabled:!0,phase:"beforeMain",fn:s=>{this._getTipElement().setAttribute("data-popper-placement",s.state.placement)}}]};return{...n,...typeof this._config.popperConfig=="function"?this._config.popperConfig(n):this._config.popperConfig}}_setListeners(){const t=this._config.trigger.split(" ");for(const n of t)if(n==="click")D.on(this._element,this.constructor.eventName(fh),this._config.selector,s=>{this._initializeOnDelegatedTarget(s).toggle()});else if(n!==oh){const s=n===Hn?this.constructor.eventName(mh):this.constructor.eventName(ph),r=n===Hn?this.constructor.eventName(gh):this.constructor.eventName(hh);D.on(this._element,s,this._config.selector,i=>{const o=this._initializeOnDelegatedTarget(i);o._activeTrigger[i.type==="focusin"?Lr:Hn]=!0,o._enter()}),D.on(this._element,r,this._config.selector,i=>{const o=this._initializeOnDelegatedTarget(i);o._activeTrigger[i.type==="focusout"?Lr:Hn]=o._element.contains(i.relatedTarget),o._leave()})}this._hideModalHandler=()=>{this._element&&this.hide()},D.on(this._element.closest(Uo),qo,this._hideModalHandler)}_fixTitle(){const t=this._element.getAttribute("title");t&&(!this._element.getAttribute("aria-label")&&!this._element.textContent.trim()&&this._element.setAttribute("aria-label",t),this._element.setAttribute("data-bs-original-title",t),this._element.removeAttribute("title"))}_enter(){if(this._isShown()||this._isHovered){this._isHovered=!0;return}this._isHovered=!0,this._setTimeout(()=>{this._isHovered&&this.show()},this._config.delay.show)}_leave(){this._isWithActiveTrigger()||(this._isHovered=!1,this._setTimeout(()=>{this._isHovered||this.hide()},this._config.delay.hide))}_setTimeout(t,n){clearTimeout(this._timeout),this._timeout=setTimeout(t,n)}_isWithActiveTrigger(){return Object.values(this._activeTrigger).includes(!0)}_getConfig(t){const n=bt.getDataAttributes(this._element);for(const s of Object.keys(n))nh.has(s)&&delete n[s];return t={...n,...typeof t=="object"&&t?t:{}},t=this._mergeConfigObj(t),t=this._configAfterMerge(t),this._typeCheckConfig(t),t}_configAfterMerge(t){return t.container=t.container===!1?document.body:Rt(t.container),typeof t.delay=="number"&&(t.delay={show:t.delay,hide:t.delay}),typeof t.title=="number"&&(t.title=t.title.toString()),typeof t.content=="number"&&(t.content=t.content.toString()),t}_getDelegateConfig(){const t={};for(const n in this._config)this.constructor.Default[n]!==this._config[n]&&(t[n]=this._config[n]);return t.selector=!1,t.trigger="manual",t}_disposePopper(){this._popper&&(this._popper.destroy(),this._popper=null),this.tip&&(this.tip.remove(),this.tip=null)}static jQueryInterface(t){return this.each(function(){const n=Rn.getOrCreateInstance(this,t);if(typeof t=="string"){if(typeof n[t]>"u")throw new TypeError(`No method named "${t}"`);n[t]()}})}}Ye(Rn);const yh="popover",wh=".popover-header",Eh=".popover-body",kh={...Rn.Default,content:"",offset:[0,8],placement:"right",template:'<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',trigger:"click"},Ah={...Rn.DefaultType,content:"(null|string|element|function)"};class Vi extends Rn{static get Default(){return kh}static get DefaultType(){return Ah}static get NAME(){return yh}_isWithContent(){return this._getTitle()||this._getContent()}_getContentForTemplate(){return{[wh]:this._getTitle(),[Eh]:this._getContent()}}_getContent(){return this._resolvePossibleFunction(this._config.content)}static jQueryInterface(t){return this.each(function(){const n=Vi.getOrCreateInstance(this,t);if(typeof t=="string"){if(typeof n[t]>"u")throw new TypeError(`No method named "${t}"`);n[t]()}})}}Ye(Vi);const Th="scrollspy",Sh="bs.scrollspy",Wi=`.${Sh}`,Ch=".data-api",Ih=`activate${Wi}`,zo=`click${Wi}`,Oh=`load${Wi}${Ch}`,xh="dropdown-item",ln="active",Ph='[data-bs-spy="scroll"]',Mr="[href]",Nh=".nav, .list-group",Ko=".nav-link",Dh=".nav-item",Rh=".list-group-item",$h=`${Ko}, ${Dh} > ${Ko}, ${Rh}`,Lh=".dropdown",Mh=".dropdown-toggle",Bh={offset:null,rootMargin:"0px 0px -25%",smoothScroll:!1,target:null,threshold:[.1,.5,1]},Fh={offset:"(number|null)",rootMargin:"string",smoothScroll:"boolean",target:"element",threshold:"array"};class lr extends nt{constructor(t,n){super(t,n),this._targetLinks=new Map,this._observableSections=new Map,this._rootElement=getComputedStyle(this._element).overflowY==="visible"?null:this._element,this._activeTarget=null,this._observer=null,this._previousScrollData={visibleEntryTop:0,parentScrollTop:0},this.refresh()}static get Default(){return Bh}static get DefaultType(){return Fh}static get NAME(){return Th}refresh(){this._initializeTargetsAndObservables(),this._maybeEnableSmoothScroll(),this._observer?this._observer.disconnect():this._observer=this._getNewObserver();for(const t of this._observableSections.values())this._observer.observe(t)}dispose(){this._observer.disconnect(),super.dispose()}_configAfterMerge(t){return t.target=Rt(t.target)||document.body,t.rootMargin=t.offset?`${t.offset}px 0px -30%`:t.rootMargin,typeof t.threshold=="string"&&(t.threshold=t.threshold.split(",").map(n=>Number.parseFloat(n))),t}_maybeEnableSmoothScroll(){this._config.smoothScroll&&(D.off(this._config.target,zo),D.on(this._config.target,zo,Mr,t=>{const n=this._observableSections.get(t.target.hash);if(n){t.preventDefault();const s=this._rootElement||window,r=n.offsetTop-this._element.offsetTop;if(s.scrollTo){s.scrollTo({top:r,behavior:"smooth"});return}s.scrollTop=r}}))}_getNewObserver(){const t={root:this._rootElement,threshold:this._config.threshold,rootMargin:this._config.rootMargin};return new IntersectionObserver(n=>this._observerCallback(n),t)}_observerCallback(t){const n=o=>this._targetLinks.get(`#${o.target.id}`),s=o=>{this._previousScrollData.visibleEntryTop=o.target.offsetTop,this._process(n(o))},r=(this._rootElement||document.documentElement).scrollTop,i=r>=this._previousScrollData.parentScrollTop;this._previousScrollData.parentScrollTop=r;for(const o of t){if(!o.isIntersecting){this._activeTarget=null,this._clearActiveClass(n(o));continue}const a=o.target.offsetTop>=this._previousScrollData.visibleEntryTop;if(i&&a){if(s(o),!r)return;continue}!i&&!a&&s(o)}}_initializeTargetsAndObservables(){this._targetLinks=new Map,this._observableSections=new Map;const t=te.find(Mr,this._config.target);for(const n of t){if(!n.hash||$t(n))continue;const s=te.findOne(n.hash,this._element);Nn(s)&&(this._targetLinks.set(n.hash,n),this._observableSections.set(n.hash,s))}}_process(t){this._activeTarget!==t&&(this._clearActiveClass(this._config.target),this._activeTarget=t,t.classList.add(ln),this._activateParents(t),D.trigger(this._element,Ih,{relatedTarget:t}))}_activateParents(t){if(t.classList.contains(xh)){te.findOne(Mh,t.closest(Lh)).classList.add(ln);return}for(const n of te.parents(t,Nh))for(const s of te.prev(n,$h))s.classList.add(ln)}_clearActiveClass(t){t.classList.remove(ln);const n=te.find(`${Mr}.${ln}`,t);for(const s of n)s.classList.remove(ln)}static jQueryInterface(t){return this.each(function(){const n=lr.getOrCreateInstance(this,t);if(typeof t=="string"){if(n[t]===void 0||t.startsWith("_")||t==="constructor")throw new TypeError(`No method named "${t}"`);n[t]()}})}}D.on(window,Oh,()=>{for(const e of te.find(Ph))lr.getOrCreateInstance(e)});Ye(lr);const Vh="tab",Wh="bs.tab",rn=`.${Wh}`,Hh=`hide${rn}`,jh=`hidden${rn}`,Uh=`show${rn}`,qh=`shown${rn}`,zh=`click${rn}`,Kh=`keydown${rn}`,Gh=`load${rn}`,Yh="ArrowLeft",Go="ArrowRight",Xh="ArrowUp",Yo="ArrowDown",Yt="active",Xo="fade",Br="show",Qh="dropdown",Zh=".dropdown-toggle",Jh=".dropdown-menu",Fr=":not(.dropdown-toggle)",em='.list-group, .nav, [role="tablist"]',tm=".nav-item, .list-group-item",nm=`.nav-link${Fr}, .list-group-item${Fr}, [role="tab"]${Fr}`,Yl='[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',Vr=`${nm}, ${Yl}`,sm=`.${Yt}[data-bs-toggle="tab"], .${Yt}[data-bs-toggle="pill"], .${Yt}[data-bs-toggle="list"]`;class Tn extends nt{constructor(t){super(t),this._parent=this._element.closest(em),this._parent&&(this._setInitialAttributes(this._parent,this._getChildren()),D.on(this._element,Kh,n=>this._keydown(n)))}static get NAME(){return Vh}show(){const t=this._element;if(this._elemIsActive(t))return;const n=this._getActiveElem(),s=n?D.trigger(n,Hh,{relatedTarget:t}):null;D.trigger(t,Uh,{relatedTarget:n}).defaultPrevented||s&&s.defaultPrevented||(this._deactivate(n,t),this._activate(t,n))}_activate(t,n){if(!t)return;t.classList.add(Yt),this._activate(_t(t));const s=()=>{if(t.getAttribute("role")!=="tab"){t.classList.add(Br);return}t.removeAttribute("tabindex"),t.setAttribute("aria-selected",!0),this._toggleDropDown(t,!0),D.trigger(t,qh,{relatedTarget:n})};this._queueCallback(s,t,t.classList.contains(Xo))}_deactivate(t,n){if(!t)return;t.classList.remove(Yt),t.blur(),this._deactivate(_t(t));const s=()=>{if(t.getAttribute("role")!=="tab"){t.classList.remove(Br);return}t.setAttribute("aria-selected",!1),t.setAttribute("tabindex","-1"),this._toggleDropDown(t,!1),D.trigger(t,jh,{relatedTarget:n})};this._queueCallback(s,t,t.classList.contains(Xo))}_keydown(t){if(![Yh,Go,Xh,Yo].includes(t.key))return;t.stopPropagation(),t.preventDefault();const n=[Go,Yo].includes(t.key),s=Mi(this._getChildren().filter(r=>!$t(r)),t.target,n,!0);s&&(s.focus({preventScroll:!0}),Tn.getOrCreateInstance(s).show())}_getChildren(){return te.find(Vr,this._parent)}_getActiveElem(){return this._getChildren().find(t=>this._elemIsActive(t))||null}_setInitialAttributes(t,n){this._setAttributeIfNotExists(t,"role","tablist");for(const s of n)this._setInitialAttributesOnChild(s)}_setInitialAttributesOnChild(t){t=this._getInnerElement(t);const n=this._elemIsActive(t),s=this._getOuterElement(t);t.setAttribute("aria-selected",n),s!==t&&this._setAttributeIfNotExists(s,"role","presentation"),n||t.setAttribute("tabindex","-1"),this._setAttributeIfNotExists(t,"role","tab"),this._setInitialAttributesOnTargetPanel(t)}_setInitialAttributesOnTargetPanel(t){const n=_t(t);n&&(this._setAttributeIfNotExists(n,"role","tabpanel"),t.id&&this._setAttributeIfNotExists(n,"aria-labelledby",`#${t.id}`))}_toggleDropDown(t,n){const s=this._getOuterElement(t);if(!s.classList.contains(Qh))return;const r=(i,o)=>{const a=te.findOne(i,s);a&&a.classList.toggle(o,n)};r(Zh,Yt),r(Jh,Br),s.setAttribute("aria-expanded",n)}_setAttributeIfNotExists(t,n,s){t.hasAttribute(n)||t.setAttribute(n,s)}_elemIsActive(t){return t.classList.contains(Yt)}_getInnerElement(t){return t.matches(Vr)?t:te.findOne(Vr,t)}_getOuterElement(t){return t.closest(tm)||t}static jQueryInterface(t){return this.each(function(){const n=Tn.getOrCreateInstance(this);if(typeof t=="string"){if(n[t]===void 0||t.startsWith("_")||t==="constructor")throw new TypeError(`No method named "${t}"`);n[t]()}})}}D.on(document,zh,Yl,function(e){["A","AREA"].includes(this.tagName)&&e.preventDefault(),!$t(this)&&Tn.getOrCreateInstance(this).show()});D.on(window,Gh,()=>{for(const e of te.find(sm))Tn.getOrCreateInstance(e)});Ye(Tn);const rm="toast",im="bs.toast",Wt=`.${im}`,om=`mouseover${Wt}`,am=`mouseout${Wt}`,lm=`focusin${Wt}`,cm=`focusout${Wt}`,um=`hide${Wt}`,dm=`hidden${Wt}`,fm=`show${Wt}`,pm=`shown${Wt}`,hm="fade",Qo="hide",Ts="show",Ss="showing",mm={animation:"boolean",autohide:"boolean",delay:"number"},gm={animation:!0,autohide:!0,delay:5e3};class cr extends nt{constructor(t,n){super(t,n),this._timeout=null,this._hasMouseInteraction=!1,this._hasKeyboardInteraction=!1,this._setListeners()}static get Default(){return gm}static get DefaultType(){return mm}static get NAME(){return rm}show(){if(D.trigger(this._element,fm).defaultPrevented)return;this._clearTimeout(),this._config.animation&&this._element.classList.add(hm);const n=()=>{this._element.classList.remove(Ss),D.trigger(this._element,pm),this._maybeScheduleHide()};this._element.classList.remove(Qo),ps(this._element),this._element.classList.add(Ts,Ss),this._queueCallback(n,this._element,this._config.animation)}hide(){if(!this.isShown()||D.trigger(this._element,um).defaultPrevented)return;const n=()=>{this._element.classList.add(Qo),this._element.classList.remove(Ss,Ts),D.trigger(this._element,dm)};this._element.classList.add(Ss),this._queueCallback(n,this._element,this._config.animation)}dispose(){this._clearTimeout(),this.isShown()&&this._element.classList.remove(Ts),super.dispose()}isShown(){return this._element.classList.contains(Ts)}_maybeScheduleHide(){this._config.autohide&&(this._hasMouseInteraction||this._hasKeyboardInteraction||(this._timeout=setTimeout(()=>{this.hide()},this._config.delay)))}_onInteraction(t,n){switch(t.type){case"mouseover":case"mouseout":{this._hasMouseInteraction=n;break}case"focusin":case"focusout":{this._hasKeyboardInteraction=n;break}}if(n){this._clearTimeout();return}const s=t.relatedTarget;this._element===s||this._element.contains(s)||this._maybeScheduleHide()}_setListeners(){D.on(this._element,om,t=>this._onInteraction(t,!0)),D.on(this._element,am,t=>this._onInteraction(t,!1)),D.on(this._element,lm,t=>this._onInteraction(t,!0)),D.on(this._element,cm,t=>this._onInteraction(t,!1))}_clearTimeout(){clearTimeout(this._timeout),this._timeout=null}static jQueryInterface(t){return this.each(function(){const n=cr.getOrCreateInstance(this,t);if(typeof t=="string"){if(typeof n[t]>"u")throw new TypeError(`No method named "${t}"`);n[t](this)}})}}ir(cr);Ye(cr);var Zo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function _m(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Xl={exports:{}};(function(e){var t=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{};/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */var n=function(s){var r=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,i=0,o={},a={manual:s.Prism&&s.Prism.manual,disableWorkerMessageHandler:s.Prism&&s.Prism.disableWorkerMessageHandler,util:{encode:function m(_){return _ instanceof l?new l(_.type,m(_.content),_.alias):Array.isArray(_)?_.map(m):_.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(m){return Object.prototype.toString.call(m).slice(8,-1)},objId:function(m){return m.__id||Object.defineProperty(m,"__id",{value:++i}),m.__id},clone:function m(_,v){v=v||{};var y,T;switch(a.util.type(_)){case"Object":if(T=a.util.objId(_),v[T])return v[T];y={},v[T]=y;for(var R in _)_.hasOwnProperty(R)&&(y[R]=m(_[R],v));return y;case"Array":return T=a.util.objId(_),v[T]?v[T]:(y=[],v[T]=y,_.forEach(function(M,x){y[x]=m(M,v)}),y);default:return _}},getLanguage:function(m){for(;m;){var _=r.exec(m.className);if(_)return _[1].toLowerCase();m=m.parentElement}return"none"},setLanguage:function(m,_){m.className=m.className.replace(RegExp(r,"gi"),""),m.classList.add("language-"+_)},currentScript:function(){if(typeof document>"u")return null;if("currentScript"in document&&1<2)return document.currentScript;try{throw new Error}catch(y){var m=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(y.stack)||[])[1];if(m){var _=document.getElementsByTagName("script");for(var v in _)if(_[v].src==m)return _[v]}return null}},isActive:function(m,_,v){for(var y="no-"+_;m;){var T=m.classList;if(T.contains(_))return!0;if(T.contains(y))return!1;m=m.parentElement}return!!v}},languages:{plain:o,plaintext:o,text:o,txt:o,extend:function(m,_){var v=a.util.clone(a.languages[m]);for(var y in _)v[y]=_[y];return v},insertBefore:function(m,_,v,y){y=y||a.languages;var T=y[m],R={};for(var M in T)if(T.hasOwnProperty(M)){if(M==_)for(var x in v)v.hasOwnProperty(x)&&(R[x]=v[x]);v.hasOwnProperty(M)||(R[M]=T[M])}var H=y[m];return y[m]=R,a.languages.DFS(a.languages,function(X,ie){ie===H&&X!=m&&(this[X]=R)}),R},DFS:function m(_,v,y,T){T=T||{};var R=a.util.objId;for(var M in _)if(_.hasOwnProperty(M)){v.call(_,M,_[M],y||M);var x=_[M],H=a.util.type(x);H==="Object"&&!T[R(x)]?(T[R(x)]=!0,m(x,v,null,T)):H==="Array"&&!T[R(x)]&&(T[R(x)]=!0,m(x,v,M,T))}}},plugins:{},highlightAll:function(m,_){a.highlightAllUnder(document,m,_)},highlightAllUnder:function(m,_,v){var y={callback:v,container:m,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};a.hooks.run("before-highlightall",y),y.elements=Array.prototype.slice.apply(y.container.querySelectorAll(y.selector)),a.hooks.run("before-all-elements-highlight",y);for(var T=0,R;R=y.elements[T++];)a.highlightElement(R,_===!0,y.callback)},highlightElement:function(m,_,v){var y=a.util.getLanguage(m),T=a.languages[y];a.util.setLanguage(m,y);var R=m.parentElement;R&&R.nodeName.toLowerCase()==="pre"&&a.util.setLanguage(R,y);var M=m.textContent,x={element:m,language:y,grammar:T,code:M};function H(ie){x.highlightedCode=ie,a.hooks.run("before-insert",x),x.element.innerHTML=x.highlightedCode,a.hooks.run("after-highlight",x),a.hooks.run("complete",x),v&&v.call(x.element)}if(a.hooks.run("before-sanity-check",x),R=x.element.parentElement,R&&R.nodeName.toLowerCase()==="pre"&&!R.hasAttribute("tabindex")&&R.setAttribute("tabindex","0"),!x.code){a.hooks.run("complete",x),v&&v.call(x.element);return}if(a.hooks.run("before-highlight",x),!x.grammar){H(a.util.encode(x.code));return}if(_&&s.Worker){var X=new Worker(a.filename);X.onmessage=function(ie){H(ie.data)},X.postMessage(JSON.stringify({language:x.language,code:x.code,immediateClose:!0}))}else H(a.highlight(x.code,x.grammar,x.language))},highlight:function(m,_,v){var y={code:m,grammar:_,language:v};if(a.hooks.run("before-tokenize",y),!y.grammar)throw new Error('The language "'+y.language+'" has no grammar.');return y.tokens=a.tokenize(y.code,y.grammar),a.hooks.run("after-tokenize",y),l.stringify(a.util.encode(y.tokens),y.language)},tokenize:function(m,_){var v=_.rest;if(v){for(var y in v)_[y]=v[y];delete _.rest}var T=new d;return p(T,T.head,m),u(m,T,_,T.head,0),O(T)},hooks:{all:{},add:function(m,_){var v=a.hooks.all;v[m]=v[m]||[],v[m].push(_)},run:function(m,_){var v=a.hooks.all[m];if(!(!v||!v.length))for(var y=0,T;T=v[y++];)T(_)}},Token:l};s.Prism=a;function l(m,_,v,y){this.type=m,this.content=_,this.alias=v,this.length=(y||"").length|0}l.stringify=function m(_,v){if(typeof _=="string")return _;if(Array.isArray(_)){var y="";return _.forEach(function(H){y+=m(H,v)}),y}var T={type:_.type,content:m(_.content,v),tag:"span",classes:["token",_.type],attributes:{},language:v},R=_.alias;R&&(Array.isArray(R)?Array.prototype.push.apply(T.classes,R):T.classes.push(R)),a.hooks.run("wrap",T);var M="";for(var x in T.attributes)M+=" "+x+'="'+(T.attributes[x]||"").replace(/"/g,"&quot;")+'"';return"<"+T.tag+' class="'+T.classes.join(" ")+'"'+M+">"+T.content+"</"+T.tag+">"};function c(m,_,v,y){m.lastIndex=_;var T=m.exec(v);if(T&&y&&T[1]){var R=T[1].length;T.index+=R,T[0]=T[0].slice(R)}return T}function u(m,_,v,y,T,R){for(var M in v)if(!(!v.hasOwnProperty(M)||!v[M])){var x=v[M];x=Array.isArray(x)?x:[x];for(var H=0;H<x.length;++H){if(R&&R.cause==M+","+H)return;var X=x[H],ie=X.inside,ue=!!X.lookbehind,Ie=!!X.greedy,be=X.alias;if(Ie&&!X.pattern.global){var Q=X.pattern.toString().match(/[imsuy]*$/)[0];X.pattern=RegExp(X.pattern.source,Q+"g")}for(var J=X.pattern||X,G=y.next,he=T;G!==_.tail&&!(R&&he>=R.reach);he+=G.value.length,G=G.next){var Ee=G.value;if(_.length>m.length)return;if(!(Ee instanceof l)){var Se=1,ce;if(Ie){if(ce=c(J,he,m,ue),!ce||ce.index>=m.length)break;var me=ce.index,Ve=ce.index+ce[0].length,ye=he;for(ye+=G.value.length;me>=ye;)G=G.next,ye+=G.value.length;if(ye-=G.value.length,he=ye,G.value instanceof l)continue;for(var Ce=G;Ce!==_.tail&&(ye<Ve||typeof Ce.value=="string");Ce=Ce.next)Se++,ye+=Ce.value.length;Se--,Ee=m.slice(he,ye),ce.index-=he}else if(ce=c(J,0,Ee,ue),!ce)continue;var me=ce.index,k=ce[0],F=Ee.slice(0,me),B=Ee.slice(me+k.length),U=he+Ee.length;R&&U>R.reach&&(R.reach=U);var ne=G.prev;F&&(ne=p(_,ne,F),he+=F.length),g(_,ne,Se);var f=new l(M,ie?a.tokenize(k,ie):k,be,k);if(G=p(_,ne,f),B&&p(_,G,B),Se>1){var h={cause:M+","+H,reach:U};u(m,_,v,G.prev,he,h),R&&h.reach>R.reach&&(R.reach=h.reach)}}}}}}function d(){var m={value:null,prev:null,next:null},_={value:null,prev:m,next:null};m.next=_,this.head=m,this.tail=_,this.length=0}function p(m,_,v){var y=_.next,T={value:v,prev:_,next:y};return _.next=T,y.prev=T,m.length++,T}function g(m,_,v){for(var y=_.next,T=0;T<v&&y!==m.tail;T++)y=y.next;_.next=y,y.prev=_,m.length-=T}function O(m){for(var _=[],v=m.head.next;v!==m.tail;)_.push(v.value),v=v.next;return _}if(!s.document)return s.addEventListener&&(a.disableWorkerMessageHandler||s.addEventListener("message",function(m){var _=JSON.parse(m.data),v=_.language,y=_.code,T=_.immediateClose;s.postMessage(a.highlight(y,a.languages[v],v)),T&&s.close()},!1)),a;var E=a.util.currentScript();E&&(a.filename=E.src,E.hasAttribute("data-manual")&&(a.manual=!0));function S(){a.manual||a.highlightAll()}if(!a.manual){var I=document.readyState;I==="loading"||I==="interactive"&&E&&E.defer?document.addEventListener("DOMContentLoaded",S):window.requestAnimationFrame?window.requestAnimationFrame(S):window.setTimeout(S,16)}return a}(t);e.exports&&(e.exports=n),typeof Zo<"u"&&(Zo.Prism=n),n.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},n.languages.markup.tag.inside["attr-value"].inside.entity=n.languages.markup.entity,n.languages.markup.doctype.inside["internal-subset"].inside=n.languages.markup,n.hooks.add("wrap",function(s){s.type==="entity"&&(s.attributes.title=s.content.replace(/&amp;/,"&"))}),Object.defineProperty(n.languages.markup.tag,"addInlined",{value:function(r,i){var o={};o["language-"+i]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:n.languages[i]},o.cdata=/^<!\[CDATA\[|\]\]>$/i;var a={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:o}};a["language-"+i]={pattern:/[\s\S]+/,inside:n.languages[i]};var l={};l[r]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return r}),"i"),lookbehind:!0,greedy:!0,inside:a},n.languages.insertBefore("markup","cdata",l)}}),Object.defineProperty(n.languages.markup.tag,"addAttribute",{value:function(s,r){n.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+s+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[r,"language-"+r],inside:n.languages[r]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),n.languages.html=n.languages.markup,n.languages.mathml=n.languages.markup,n.languages.svg=n.languages.markup,n.languages.xml=n.languages.extend("markup",{}),n.languages.ssml=n.languages.xml,n.languages.atom=n.languages.xml,n.languages.rss=n.languages.xml,function(s){var r=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;s.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+r.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+r.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+r.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+r.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:r,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},s.languages.css.atrule.inside.rest=s.languages.css;var i=s.languages.markup;i&&(i.tag.addInlined("style","css"),i.tag.addAttribute("style","css"))}(n),n.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},n.languages.javascript=n.languages.extend("clike",{"class-name":[n.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),n.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,n.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:n.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:n.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:n.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:n.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:n.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),n.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:n.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),n.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),n.languages.markup&&(n.languages.markup.tag.addInlined("script","javascript"),n.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),n.languages.js=n.languages.javascript,function(){if(typeof n>"u"||typeof document>"u")return;Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var s="Loading…",r=function(E,S){return"✖ Error "+E+" while fetching file: "+S},i="✖ Error: File does not exist or is empty",o={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},a="data-src-status",l="loading",c="loaded",u="failed",d="pre[data-src]:not(["+a+'="'+c+'"]):not(['+a+'="'+l+'"])';function p(E,S,I){var m=new XMLHttpRequest;m.open("GET",E,!0),m.onreadystatechange=function(){m.readyState==4&&(m.status<400&&m.responseText?S(m.responseText):m.status>=400?I(r(m.status,m.statusText)):I(i))},m.send(null)}function g(E){var S=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(E||"");if(S){var I=Number(S[1]),m=S[2],_=S[3];return m?_?[I,Number(_)]:[I,void 0]:[I,I]}}n.hooks.add("before-highlightall",function(E){E.selector+=", "+d}),n.hooks.add("before-sanity-check",function(E){var S=E.element;if(S.matches(d)){E.code="",S.setAttribute(a,l);var I=S.appendChild(document.createElement("CODE"));I.textContent=s;var m=S.getAttribute("data-src"),_=E.language;if(_==="none"){var v=(/\.(\w+)$/.exec(m)||[,"none"])[1];_=o[v]||v}n.util.setLanguage(I,_),n.util.setLanguage(S,_);var y=n.plugins.autoloader;y&&y.loadLanguages(_),p(m,function(T){S.setAttribute(a,c);var R=g(S.getAttribute("data-range"));if(R){var M=T.split(/\r\n?|\n/g),x=R[0],H=R[1]==null?M.length:R[1];x<0&&(x+=M.length),x=Math.max(0,Math.min(x-1,M.length)),H<0&&(H+=M.length),H=Math.max(0,Math.min(H,M.length)),T=M.slice(x,H).join(`
`),S.hasAttribute("data-start")||S.setAttribute("data-start",String(x+1))}I.textContent=T,n.highlightElement(I)},function(T){S.setAttribute(a,u),I.textContent=T})}}),n.plugins.fileHighlight={highlight:function(S){for(var I=(S||document).querySelectorAll(d),m=0,_;_=I[m++];)n.highlightElement(_)}};var O=!1;n.fileHighlight=function(){O||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),O=!0),n.plugins.fileHighlight.highlight.apply(this,arguments)}}()})(Xl);var vm=Xl.exports;const Jo=_m(vm);Prism.languages.solidity=Prism.languages.extend("clike",{"class-name":{pattern:/(\b(?:contract|enum|interface|library|new|struct|using)\s+)(?!\d)[\w$]+/,lookbehind:!0},keyword:/\b(?:_|anonymous|as|assembly|assert|break|calldata|case|constant|constructor|continue|contract|default|delete|do|else|emit|enum|event|external|for|from|function|if|import|indexed|inherited|interface|internal|is|let|library|mapping|memory|modifier|new|payable|pragma|private|public|pure|require|returns?|revert|selfdestruct|solidity|storage|struct|suicide|switch|this|throw|using|var|view|while)\b/,operator:/=>|->|:=|=:|\*\*|\+\+|--|\|\||&&|<<=?|>>=?|[-+*/%^&|<>!=]=?|[~?]/});Prism.languages.insertBefore("solidity","keyword",{builtin:/\b(?:address|bool|byte|u?int(?:8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?|string|bytes(?:[1-9]|[12]\d|3[0-2])?)\b/});Prism.languages.insertBefore("solidity","number",{version:{pattern:/([<>]=?|\^)\d+\.\d+\.\d+\b/,lookbehind:!0,alias:"number"}});Prism.languages.sol=Prism.languages.solidity;var bm={exports:{}};(function(e){(function(){if(typeof Prism>"u")return;var t=Object.assign||function(o,a){for(var l in a)a.hasOwnProperty(l)&&(o[l]=a[l]);return o};function n(o){this.defaults=t({},o)}function s(o){return o.replace(/-(\w)/g,function(a,l){return l.toUpperCase()})}function r(o){for(var a=0,l=0;l<o.length;++l)o.charCodeAt(l)=="	".charCodeAt(0)&&(a+=3);return o.length+a}var i={"remove-trailing":"boolean","remove-indent":"boolean","left-trim":"boolean","right-trim":"boolean","break-lines":"number",indent:"number","remove-initial-line-feed":"boolean","tabs-to-spaces":"number","spaces-to-tabs":"number"};n.prototype={setDefaults:function(o){this.defaults=t(this.defaults,o)},normalize:function(o,a){a=t(this.defaults,a);for(var l in a){var c=s(l);l!=="normalize"&&c!=="setDefaults"&&a[l]&&this[c]&&(o=this[c].call(this,o,a[l]))}return o},leftTrim:function(o){return o.replace(/^\s+/,"")},rightTrim:function(o){return o.replace(/\s+$/,"")},tabsToSpaces:function(o,a){return a=a|0||4,o.replace(/\t/g,new Array(++a).join(" "))},spacesToTabs:function(o,a){return a=a|0||4,o.replace(RegExp(" {"+a+"}","g"),"	")},removeTrailing:function(o){return o.replace(/\s*?$/gm,"")},removeInitialLineFeed:function(o){return o.replace(/^(?:\r?\n|\r)/,"")},removeIndent:function(o){var a=o.match(/^[^\S\n\r]*(?=\S)/gm);return!a||!a[0].length||(a.sort(function(l,c){return l.length-c.length}),!a[0].length)?o:o.replace(RegExp("^"+a[0],"gm"),"")},indent:function(o,a){return o.replace(/^[^\S\n\r]*(?=\S)/gm,new Array(++a).join("	")+"$&")},breakLines:function(o,a){a=a===!0?80:a|0||80;for(var l=o.split(`
`),c=0;c<l.length;++c)if(!(r(l[c])<=a)){for(var u=l[c].split(/(\s+)/g),d=0,p=0;p<u.length;++p){var g=r(u[p]);d+=g,d>a&&(u[p]=`
`+u[p],d=g)}l[c]=u.join("")}return l.join(`
`)}},e.exports&&(e.exports=n),Prism.plugins.NormalizeWhitespace=new n({"remove-trailing":!0,"remove-indent":!0,"left-trim":!0,"right-trim":!0}),Prism.hooks.add("before-sanity-check",function(o){var a=Prism.plugins.NormalizeWhitespace;if(!(o.settings&&o.settings["whitespace-normalization"]===!1)&&Prism.util.isActive(o.element,"whitespace-normalization",!0)){if((!o.element||!o.element.parentNode)&&o.code){o.code=a.normalize(o.code,o.settings);return}var l=o.element.parentNode;if(!(!o.code||!l||l.nodeName.toLowerCase()!=="pre")){o.settings==null&&(o.settings={});for(var c in i)if(Object.hasOwnProperty.call(i,c)){var u=i[c];if(l.hasAttribute("data-"+c))try{var d=JSON.parse(l.getAttribute("data-"+c)||"true");typeof d===u&&(o.settings[c]=d)}catch{}}for(var p=l.childNodes,g="",O="",E=!1,S=0;S<p.length;++S){var I=p[S];I==o.element?E=!0:I.nodeName==="#text"&&(E?O+=I.nodeValue:g+=I.nodeValue,l.removeChild(I),--S)}if(!o.element.children.length||!Prism.plugins.KeepMarkup)o.code=g+o.code+O,o.code=a.normalize(o.code,o.settings);else{var m=g+o.element.innerHTML+O;o.element.innerHTML=a.normalize(m,o.settings),o.code=o.element.textContent}}}})})()})(bm);(function(){if(typeof Prism>"u"||typeof document>"u")return;var e="line-numbers",t=/\n(?!$)/g,n=Prism.plugins.lineNumbers={getLine:function(o,a){if(!(o.tagName!=="PRE"||!o.classList.contains(e))){var l=o.querySelector(".line-numbers-rows");if(l){var c=parseInt(o.getAttribute("data-start"),10)||1,u=c+(l.children.length-1);a<c&&(a=c),a>u&&(a=u);var d=a-c;return l.children[d]}}},resize:function(o){s([o])},assumeViewportIndependence:!0};function s(o){if(o=o.filter(function(l){var c=r(l),u=c["white-space"];return u==="pre-wrap"||u==="pre-line"}),o.length!=0){var a=o.map(function(l){var c=l.querySelector("code"),u=l.querySelector(".line-numbers-rows");if(!(!c||!u)){var d=l.querySelector(".line-numbers-sizer"),p=c.textContent.split(t);d||(d=document.createElement("span"),d.className="line-numbers-sizer",c.appendChild(d)),d.innerHTML="0",d.style.display="block";var g=d.getBoundingClientRect().height;return d.innerHTML="",{element:l,lines:p,lineHeights:[],oneLinerHeight:g,sizer:d}}}).filter(Boolean);a.forEach(function(l){var c=l.sizer,u=l.lines,d=l.lineHeights,p=l.oneLinerHeight;d[u.length-1]=void 0,u.forEach(function(g,O){if(g&&g.length>1){var E=c.appendChild(document.createElement("span"));E.style.display="block",E.textContent=g}else d[O]=p})}),a.forEach(function(l){for(var c=l.sizer,u=l.lineHeights,d=0,p=0;p<u.length;p++)u[p]===void 0&&(u[p]=c.children[d++].getBoundingClientRect().height)}),a.forEach(function(l){var c=l.sizer,u=l.element.querySelector(".line-numbers-rows");c.style.display="none",c.innerHTML="",l.lineHeights.forEach(function(d,p){u.children[p].style.height=d+"px"})})}}function r(o){return o?window.getComputedStyle?getComputedStyle(o):o.currentStyle||null:null}var i=void 0;window.addEventListener("resize",function(){n.assumeViewportIndependence&&i===window.innerWidth||(i=window.innerWidth,s(Array.prototype.slice.call(document.querySelectorAll("pre."+e))))}),Prism.hooks.add("complete",function(o){if(o.code){var a=o.element,l=a.parentNode;if(!(!l||!/pre/i.test(l.nodeName))&&!a.querySelector(".line-numbers-rows")&&Prism.util.isActive(a,e)){a.classList.remove(e),l.classList.add(e);var c=o.code.match(t),u=c?c.length+1:1,d,p=new Array(u+1).join("<span></span>");d=document.createElement("span"),d.setAttribute("aria-hidden","true"),d.className="line-numbers-rows",d.innerHTML=p,l.hasAttribute("data-start")&&(l.style.counterReset="linenumber "+(parseInt(l.getAttribute("data-start"),10)-1)),o.element.appendChild(d),s([l]),Prism.hooks.run("line-numbers",o)}}}),Prism.hooks.add("line-numbers",function(o){o.plugins=o.plugins||{},o.plugins.lineNumbers=!0})})();function Hi(e,t){const n=Object.create(null),s=e.split(",");for(let r=0;r<s.length;r++)n[s[r]]=!0;return t?r=>!!n[r.toLowerCase()]:r=>!!n[r]}const ve={},gn=[],Je=()=>{},ym=()=>!1,wm=/^on[^a-z]/,ur=e=>wm.test(e),ji=e=>e.startsWith("onUpdate:"),xe=Object.assign,Ui=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Em=Object.prototype.hasOwnProperty,oe=(e,t)=>Em.call(e,t),Y=Array.isArray,_n=e=>_s(e)==="[object Map]",dr=e=>_s(e)==="[object Set]",ea=e=>_s(e)==="[object Date]",ee=e=>typeof e=="function",Ae=e=>typeof e=="string",ss=e=>typeof e=="symbol",_e=e=>e!==null&&typeof e=="object",Ql=e=>_e(e)&&ee(e.then)&&ee(e.catch),Zl=Object.prototype.toString,_s=e=>Zl.call(e),km=e=>_s(e).slice(8,-1),Jl=e=>_s(e)==="[object Object]",qi=e=>Ae(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Ls=Hi(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),fr=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},Am=/-(\w)/g,pt=fr(e=>e.replace(Am,(t,n)=>n?n.toUpperCase():"")),Tm=/\B([A-Z])/g,$n=fr(e=>e.replace(Tm,"-$1").toLowerCase()),pr=fr(e=>e.charAt(0).toUpperCase()+e.slice(1)),Wr=fr(e=>e?`on${pr(e)}`:""),rs=(e,t)=>!Object.is(e,t),Ms=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},zs=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},Ks=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let ta;const li=()=>ta||(ta=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function hr(e){if(Y(e)){const t={};for(let n=0;n<e.length;n++){const s=e[n],r=Ae(s)?Om(s):hr(s);if(r)for(const i in r)t[i]=r[i]}return t}else{if(Ae(e))return e;if(_e(e))return e}}const Sm=/;(?![^(]*\))/g,Cm=/:([^]+)/,Im=/\/\*[^]*?\*\//g;function Om(e){const t={};return e.replace(Im,"").split(Sm).forEach(n=>{if(n){const s=n.split(Cm);s.length>1&&(t[s[0].trim()]=s[1].trim())}}),t}function Ln(e){let t="";if(Ae(e))t=e;else if(Y(e))for(let n=0;n<e.length;n++){const s=Ln(e[n]);s&&(t+=s+" ")}else if(_e(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const xm="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Pm=Hi(xm);function ec(e){return!!e||e===""}function Nm(e,t){if(e.length!==t.length)return!1;let n=!0;for(let s=0;n&&s<e.length;s++)n=mr(e[s],t[s]);return n}function mr(e,t){if(e===t)return!0;let n=ea(e),s=ea(t);if(n||s)return n&&s?e.getTime()===t.getTime():!1;if(n=ss(e),s=ss(t),n||s)return e===t;if(n=Y(e),s=Y(t),n||s)return n&&s?Nm(e,t):!1;if(n=_e(e),s=_e(t),n||s){if(!n||!s)return!1;const r=Object.keys(e).length,i=Object.keys(t).length;if(r!==i)return!1;for(const o in e){const a=e.hasOwnProperty(o),l=t.hasOwnProperty(o);if(a&&!l||!a&&l||!mr(e[o],t[o]))return!1}}return String(e)===String(t)}function Dm(e,t){return e.findIndex(n=>mr(n,t))}const ae=e=>Ae(e)?e:e==null?"":Y(e)||_e(e)&&(e.toString===Zl||!ee(e.toString))?JSON.stringify(e,tc,2):String(e),tc=(e,t)=>t&&t.__v_isRef?tc(e,t.value):_n(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[s,r])=>(n[`${s} =>`]=r,n),{})}:dr(t)?{[`Set(${t.size})`]:[...t.values()]}:_e(t)&&!Y(t)&&!Jl(t)?String(t):t;let He;class nc{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=He,!t&&He&&(this.index=(He.scopes||(He.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=He;try{return He=this,t()}finally{He=n}}}on(){He=this}off(){He=this.parent}stop(t){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function sc(e){return new nc(e)}function Rm(e,t=He){t&&t.active&&t.effects.push(e)}function rc(){return He}function $m(e){He&&He.cleanups.push(e)}const zi=e=>{const t=new Set(e);return t.w=0,t.n=0,t},ic=e=>(e.w&Mt)>0,oc=e=>(e.n&Mt)>0,Lm=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=Mt},Mm=e=>{const{deps:t}=e;if(t.length){let n=0;for(let s=0;s<t.length;s++){const r=t[s];ic(r)&&!oc(r)?r.delete(e):t[n++]=r,r.w&=~Mt,r.n&=~Mt}t.length=n}},Gs=new WeakMap;let qn=0,Mt=1;const ci=30;let Qe;const Zt=Symbol(""),ui=Symbol("");class Ki{constructor(t,n=null,s){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Rm(this,s)}run(){if(!this.active)return this.fn();let t=Qe,n=Pt;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=Qe,Qe=this,Pt=!0,Mt=1<<++qn,qn<=ci?Lm(this):na(this),this.fn()}finally{qn<=ci&&Mm(this),Mt=1<<--qn,Qe=this.parent,Pt=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Qe===this?this.deferStop=!0:this.active&&(na(this),this.onStop&&this.onStop(),this.active=!1)}}function na(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let Pt=!0;const ac=[];function Mn(){ac.push(Pt),Pt=!1}function Bn(){const e=ac.pop();Pt=e===void 0?!0:e}function Fe(e,t,n){if(Pt&&Qe){let s=Gs.get(e);s||Gs.set(e,s=new Map);let r=s.get(n);r||s.set(n,r=zi()),lc(r)}}function lc(e,t){let n=!1;qn<=ci?oc(e)||(e.n|=Mt,n=!ic(e)):n=!e.has(Qe),n&&(e.add(Qe),Qe.deps.push(e))}function wt(e,t,n,s,r,i){const o=Gs.get(e);if(!o)return;let a=[];if(t==="clear")a=[...o.values()];else if(n==="length"&&Y(e)){const l=Number(s);o.forEach((c,u)=>{(u==="length"||u>=l)&&a.push(c)})}else switch(n!==void 0&&a.push(o.get(n)),t){case"add":Y(e)?qi(n)&&a.push(o.get("length")):(a.push(o.get(Zt)),_n(e)&&a.push(o.get(ui)));break;case"delete":Y(e)||(a.push(o.get(Zt)),_n(e)&&a.push(o.get(ui)));break;case"set":_n(e)&&a.push(o.get(Zt));break}if(a.length===1)a[0]&&di(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);di(zi(l))}}function di(e,t){const n=Y(e)?e:[...e];for(const s of n)s.computed&&sa(s);for(const s of n)s.computed||sa(s)}function sa(e,t){(e!==Qe||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}function Bm(e,t){var n;return(n=Gs.get(e))==null?void 0:n.get(t)}const Fm=Hi("__proto__,__v_isRef,__isVue"),cc=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(ss)),Vm=Gi(),Wm=Gi(!1,!0),Hm=Gi(!0),ra=jm();function jm(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const s=le(this);for(let i=0,o=this.length;i<o;i++)Fe(s,"get",i+"");const r=s[t](...n);return r===-1||r===!1?s[t](...n.map(le)):r}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){Mn();const s=le(this)[t].apply(this,n);return Bn(),s}}),e}function Um(e){const t=le(this);return Fe(t,"has",e),t.hasOwnProperty(e)}function Gi(e=!1,t=!1){return function(s,r,i){if(r==="__v_isReactive")return!e;if(r==="__v_isReadonly")return e;if(r==="__v_isShallow")return t;if(r==="__v_raw"&&i===(e?t?og:hc:t?pc:fc).get(s))return s;const o=Y(s);if(!e){if(o&&oe(ra,r))return Reflect.get(ra,r,i);if(r==="hasOwnProperty")return Um}const a=Reflect.get(s,r,i);return(ss(r)?cc.has(r):Fm(r))||(e||Fe(s,"get",r),t)?a:we(a)?o&&qi(r)?a:a.value:_e(a)?e?mc(a):Fn(a):a}}const qm=uc(),zm=uc(!0);function uc(e=!1){return function(n,s,r,i){let o=n[s];if(Sn(o)&&we(o)&&!we(r))return!1;if(!e&&(!Ys(r)&&!Sn(r)&&(o=le(o),r=le(r)),!Y(n)&&we(o)&&!we(r)))return o.value=r,!0;const a=Y(n)&&qi(s)?Number(s)<n.length:oe(n,s),l=Reflect.set(n,s,r,i);return n===le(i)&&(a?rs(r,o)&&wt(n,"set",s,r):wt(n,"add",s,r)),l}}function Km(e,t){const n=oe(e,t);e[t];const s=Reflect.deleteProperty(e,t);return s&&n&&wt(e,"delete",t,void 0),s}function Gm(e,t){const n=Reflect.has(e,t);return(!ss(t)||!cc.has(t))&&Fe(e,"has",t),n}function Ym(e){return Fe(e,"iterate",Y(e)?"length":Zt),Reflect.ownKeys(e)}const dc={get:Vm,set:qm,deleteProperty:Km,has:Gm,ownKeys:Ym},Xm={get:Hm,set(e,t){return!0},deleteProperty(e,t){return!0}},Qm=xe({},dc,{get:Wm,set:zm}),Yi=e=>e,gr=e=>Reflect.getPrototypeOf(e);function Cs(e,t,n=!1,s=!1){e=e.__v_raw;const r=le(e),i=le(t);n||(t!==i&&Fe(r,"get",t),Fe(r,"get",i));const{has:o}=gr(r),a=s?Yi:n?Zi:is;if(o.call(r,t))return a(e.get(t));if(o.call(r,i))return a(e.get(i));e!==r&&e.get(t)}function Is(e,t=!1){const n=this.__v_raw,s=le(n),r=le(e);return t||(e!==r&&Fe(s,"has",e),Fe(s,"has",r)),e===r?n.has(e):n.has(e)||n.has(r)}function Os(e,t=!1){return e=e.__v_raw,!t&&Fe(le(e),"iterate",Zt),Reflect.get(e,"size",e)}function ia(e){e=le(e);const t=le(this);return gr(t).has.call(t,e)||(t.add(e),wt(t,"add",e,e)),this}function oa(e,t){t=le(t);const n=le(this),{has:s,get:r}=gr(n);let i=s.call(n,e);i||(e=le(e),i=s.call(n,e));const o=r.call(n,e);return n.set(e,t),i?rs(t,o)&&wt(n,"set",e,t):wt(n,"add",e,t),this}function aa(e){const t=le(this),{has:n,get:s}=gr(t);let r=n.call(t,e);r||(e=le(e),r=n.call(t,e)),s&&s.call(t,e);const i=t.delete(e);return r&&wt(t,"delete",e,void 0),i}function la(){const e=le(this),t=e.size!==0,n=e.clear();return t&&wt(e,"clear",void 0,void 0),n}function xs(e,t){return function(s,r){const i=this,o=i.__v_raw,a=le(o),l=t?Yi:e?Zi:is;return!e&&Fe(a,"iterate",Zt),o.forEach((c,u)=>s.call(r,l(c),l(u),i))}}function Ps(e,t,n){return function(...s){const r=this.__v_raw,i=le(r),o=_n(i),a=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,c=r[e](...s),u=n?Yi:t?Zi:is;return!t&&Fe(i,"iterate",l?ui:Zt),{next(){const{value:d,done:p}=c.next();return p?{value:d,done:p}:{value:a?[u(d[0]),u(d[1])]:u(d),done:p}},[Symbol.iterator](){return this}}}}function St(e){return function(...t){return e==="delete"?!1:this}}function Zm(){const e={get(i){return Cs(this,i)},get size(){return Os(this)},has:Is,add:ia,set:oa,delete:aa,clear:la,forEach:xs(!1,!1)},t={get(i){return Cs(this,i,!1,!0)},get size(){return Os(this)},has:Is,add:ia,set:oa,delete:aa,clear:la,forEach:xs(!1,!0)},n={get(i){return Cs(this,i,!0)},get size(){return Os(this,!0)},has(i){return Is.call(this,i,!0)},add:St("add"),set:St("set"),delete:St("delete"),clear:St("clear"),forEach:xs(!0,!1)},s={get(i){return Cs(this,i,!0,!0)},get size(){return Os(this,!0)},has(i){return Is.call(this,i,!0)},add:St("add"),set:St("set"),delete:St("delete"),clear:St("clear"),forEach:xs(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=Ps(i,!1,!1),n[i]=Ps(i,!0,!1),t[i]=Ps(i,!1,!0),s[i]=Ps(i,!0,!0)}),[e,n,t,s]}const[Jm,eg,tg,ng]=Zm();function Xi(e,t){const n=t?e?ng:tg:e?eg:Jm;return(s,r,i)=>r==="__v_isReactive"?!e:r==="__v_isReadonly"?e:r==="__v_raw"?s:Reflect.get(oe(n,r)&&r in s?n:s,r,i)}const sg={get:Xi(!1,!1)},rg={get:Xi(!1,!0)},ig={get:Xi(!0,!1)},fc=new WeakMap,pc=new WeakMap,hc=new WeakMap,og=new WeakMap;function ag(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function lg(e){return e.__v_skip||!Object.isExtensible(e)?0:ag(km(e))}function Fn(e){return Sn(e)?e:Qi(e,!1,dc,sg,fc)}function cg(e){return Qi(e,!1,Qm,rg,pc)}function mc(e){return Qi(e,!0,Xm,ig,hc)}function Qi(e,t,n,s,r){if(!_e(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=r.get(e);if(i)return i;const o=lg(e);if(o===0)return e;const a=new Proxy(e,o===2?s:n);return r.set(e,a),a}function Nt(e){return Sn(e)?Nt(e.__v_raw):!!(e&&e.__v_isReactive)}function Sn(e){return!!(e&&e.__v_isReadonly)}function Ys(e){return!!(e&&e.__v_isShallow)}function gc(e){return Nt(e)||Sn(e)}function le(e){const t=e&&e.__v_raw;return t?le(t):e}function _r(e){return zs(e,"__v_skip",!0),e}const is=e=>_e(e)?Fn(e):e,Zi=e=>_e(e)?mc(e):e;function _c(e){Pt&&Qe&&(e=le(e),lc(e.dep||(e.dep=zi())))}function vc(e,t){e=le(e);const n=e.dep;n&&di(n)}function we(e){return!!(e&&e.__v_isRef===!0)}function vr(e){return bc(e,!1)}function ug(e){return bc(e,!0)}function bc(e,t){return we(e)?e:new dg(e,t)}class dg{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:le(t),this._value=n?t:is(t)}get value(){return _c(this),this._value}set value(t){const n=this.__v_isShallow||Ys(t)||Sn(t);t=n?t:le(t),rs(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:is(t),vc(this))}}function Jt(e){return we(e)?e.value:e}const fg={get:(e,t,n)=>Jt(Reflect.get(e,t,n)),set:(e,t,n,s)=>{const r=e[t];return we(r)&&!we(n)?(r.value=n,!0):Reflect.set(e,t,n,s)}};function yc(e){return Nt(e)?e:new Proxy(e,fg)}function pg(e){const t=Y(e)?new Array(e.length):{};for(const n in e)t[n]=mg(e,n);return t}class hg{constructor(t,n,s){this._object=t,this._key=n,this._defaultValue=s,this.__v_isRef=!0}get value(){const t=this._object[this._key];return t===void 0?this._defaultValue:t}set value(t){this._object[this._key]=t}get dep(){return Bm(le(this._object),this._key)}}function mg(e,t,n){const s=e[t];return we(s)?s:new hg(e,t,n)}class gg{constructor(t,n,s,r){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Ki(t,()=>{this._dirty||(this._dirty=!0,vc(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=s}get value(){const t=le(this);return _c(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function _g(e,t,n=!1){let s,r;const i=ee(e);return i?(s=e,r=Je):(s=e.get,r=e.set),new gg(s,r,i||!r,n)}function Dt(e,t,n,s){let r;try{r=s?e(...s):e()}catch(i){br(i,t,n)}return r}function et(e,t,n,s){if(ee(e)){const i=Dt(e,t,n,s);return i&&Ql(i)&&i.catch(o=>{br(o,t,n)}),i}const r=[];for(let i=0;i<e.length;i++)r.push(et(e[i],t,n,s));return r}function br(e,t,n,s=!0){const r=t?t.vnode:null;if(t){let i=t.parent;const o=t.proxy,a=n;for(;i;){const c=i.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](e,o,a)===!1)return}i=i.parent}const l=t.appContext.config.errorHandler;if(l){Dt(l,null,10,[e,o,a]);return}}vg(e,n,r,s)}function vg(e,t,n,s=!0){console.error(e)}let os=!1,fi=!1;const Ne=[];let at=0;const vn=[];let mt=null,qt=0;const wc=Promise.resolve();let Ji=null;function eo(e){const t=Ji||wc;return e?t.then(this?e.bind(this):e):t}function bg(e){let t=at+1,n=Ne.length;for(;t<n;){const s=t+n>>>1;as(Ne[s])<e?t=s+1:n=s}return t}function to(e){(!Ne.length||!Ne.includes(e,os&&e.allowRecurse?at+1:at))&&(e.id==null?Ne.push(e):Ne.splice(bg(e.id),0,e),Ec())}function Ec(){!os&&!fi&&(fi=!0,Ji=wc.then(Ac))}function yg(e){const t=Ne.indexOf(e);t>at&&Ne.splice(t,1)}function wg(e){Y(e)?vn.push(...e):(!mt||!mt.includes(e,e.allowRecurse?qt+1:qt))&&vn.push(e),Ec()}function ca(e,t=os?at+1:0){for(;t<Ne.length;t++){const n=Ne[t];n&&n.pre&&(Ne.splice(t,1),t--,n())}}function kc(e){if(vn.length){const t=[...new Set(vn)];if(vn.length=0,mt){mt.push(...t);return}for(mt=t,mt.sort((n,s)=>as(n)-as(s)),qt=0;qt<mt.length;qt++)mt[qt]();mt=null,qt=0}}const as=e=>e.id==null?1/0:e.id,Eg=(e,t)=>{const n=as(e)-as(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function Ac(e){fi=!1,os=!0,Ne.sort(Eg);const t=Je;try{for(at=0;at<Ne.length;at++){const n=Ne[at];n&&n.active!==!1&&Dt(n,null,14)}}finally{at=0,Ne.length=0,kc(),os=!1,Ji=null,(Ne.length||vn.length)&&Ac()}}function kg(e,t,...n){if(e.isUnmounted)return;const s=e.vnode.props||ve;let r=n;const i=t.startsWith("update:"),o=i&&t.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:d,trim:p}=s[u]||ve;p&&(r=n.map(g=>Ae(g)?g.trim():g)),d&&(r=n.map(Ks))}let a,l=s[a=Wr(t)]||s[a=Wr(pt(t))];!l&&i&&(l=s[a=Wr($n(t))]),l&&et(l,e,6,r);const c=s[a+"Once"];if(c){if(!e.emitted)e.emitted={};else if(e.emitted[a])return;e.emitted[a]=!0,et(c,e,6,r)}}function Tc(e,t,n=!1){const s=t.emitsCache,r=s.get(e);if(r!==void 0)return r;const i=e.emits;let o={},a=!1;if(!ee(e)){const l=c=>{const u=Tc(c,t,!0);u&&(a=!0,xe(o,u))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!i&&!a?(_e(e)&&s.set(e,null),null):(Y(i)?i.forEach(l=>o[l]=null):xe(o,i),_e(e)&&s.set(e,o),o)}function yr(e,t){return!e||!ur(t)?!1:(t=t.slice(2).replace(/Once$/,""),oe(e,t[0].toLowerCase()+t.slice(1))||oe(e,$n(t))||oe(e,t))}let Pe=null,wr=null;function Xs(e){const t=Pe;return Pe=e,wr=e&&e.type.__scopeId||null,t}function vs(e){wr=e}function bs(){wr=null}function Bs(e,t=Pe,n){if(!t||e._n)return e;const s=(...r)=>{s._d&&ya(-1);const i=Xs(t);let o;try{o=e(...r)}finally{Xs(i),s._d&&ya(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function Hr(e){const{type:t,vnode:n,proxy:s,withProxy:r,props:i,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:d,data:p,setupState:g,ctx:O,inheritAttrs:E}=e;let S,I;const m=Xs(e);try{if(n.shapeFlag&4){const v=r||s;S=ot(u.call(v,v,d,i,g,p,O)),I=l}else{const v=t;S=ot(v.length>1?v(i,{attrs:l,slots:a,emit:c}):v(i,null)),I=t.props?l:Ag(l)}}catch(v){Zn.length=0,br(v,e,1),S=re(Bt)}let _=S;if(I&&E!==!1){const v=Object.keys(I),{shapeFlag:y}=_;v.length&&y&7&&(o&&v.some(ji)&&(I=Tg(I,o)),_=Cn(_,I))}return n.dirs&&(_=Cn(_),_.dirs=_.dirs?_.dirs.concat(n.dirs):n.dirs),n.transition&&(_.transition=n.transition),S=_,Xs(m),S}const Ag=e=>{let t;for(const n in e)(n==="class"||n==="style"||ur(n))&&((t||(t={}))[n]=e[n]);return t},Tg=(e,t)=>{const n={};for(const s in e)(!ji(s)||!(s.slice(9)in t))&&(n[s]=e[s]);return n};function Sg(e,t,n){const{props:s,children:r,component:i}=e,{props:o,children:a,patchFlag:l}=t,c=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return s?ua(s,o,c):!!o;if(l&8){const u=t.dynamicProps;for(let d=0;d<u.length;d++){const p=u[d];if(o[p]!==s[p]&&!yr(c,p))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?ua(s,o,c):!0:!!o;return!1}function ua(e,t,n){const s=Object.keys(t);if(s.length!==Object.keys(e).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(t[i]!==e[i]&&!yr(n,i))return!0}return!1}function Cg({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const Ig=e=>e.__isSuspense;function Og(e,t){t&&t.pendingBranch?Y(e)?t.effects.push(...e):t.effects.push(e):wg(e)}const Ns={};function Yn(e,t,n){return Sc(e,t,n)}function Sc(e,t,{immediate:n,deep:s,flush:r,onTrack:i,onTrigger:o}=ve){var a;const l=rc()===((a=Oe)==null?void 0:a.scope)?Oe:null;let c,u=!1,d=!1;if(we(e)?(c=()=>e.value,u=Ys(e)):Nt(e)?(c=()=>e,s=!0):Y(e)?(d=!0,u=e.some(v=>Nt(v)||Ys(v)),c=()=>e.map(v=>{if(we(v))return v.value;if(Nt(v))return Xt(v);if(ee(v))return Dt(v,l,2)})):ee(e)?t?c=()=>Dt(e,l,2):c=()=>{if(!(l&&l.isUnmounted))return p&&p(),et(e,l,3,[g])}:c=Je,t&&s){const v=c;c=()=>Xt(v())}let p,g=v=>{p=m.onStop=()=>{Dt(v,l,4)}},O;if(us)if(g=Je,t?n&&et(t,l,3,[c(),d?[]:void 0,g]):c(),r==="sync"){const v=A_();O=v.__watcherHandles||(v.__watcherHandles=[])}else return Je;let E=d?new Array(e.length).fill(Ns):Ns;const S=()=>{if(m.active)if(t){const v=m.run();(s||u||(d?v.some((y,T)=>rs(y,E[T])):rs(v,E)))&&(p&&p(),et(t,l,3,[v,E===Ns?void 0:d&&E[0]===Ns?[]:E,g]),E=v)}else m.run()};S.allowRecurse=!!t;let I;r==="sync"?I=S:r==="post"?I=()=>Be(S,l&&l.suspense):(S.pre=!0,l&&(S.id=l.uid),I=()=>to(S));const m=new Ki(c,I);t?n?S():E=m.run():r==="post"?Be(m.run.bind(m),l&&l.suspense):m.run();const _=()=>{m.stop(),l&&l.scope&&Ui(l.scope.effects,m)};return O&&O.push(_),_}function xg(e,t,n){const s=this.proxy,r=Ae(e)?e.includes(".")?Cc(s,e):()=>s[e]:e.bind(s,s);let i;ee(t)?i=t:(i=t.handler,n=t);const o=Oe;In(this);const a=Sc(r,i.bind(s),n);return o?In(o):en(),a}function Cc(e,t){const n=t.split(".");return()=>{let s=e;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}function Xt(e,t){if(!_e(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),we(e))Xt(e.value,t);else if(Y(e))for(let n=0;n<e.length;n++)Xt(e[n],t);else if(dr(e)||_n(e))e.forEach(n=>{Xt(n,t)});else if(Jl(e))for(const n in e)Xt(e[n],t);return e}function Ic(e,t){const n=Pe;if(n===null)return e;const s=Tr(n)||n.proxy,r=e.dirs||(e.dirs=[]);for(let i=0;i<t.length;i++){let[o,a,l,c=ve]=t[i];o&&(ee(o)&&(o={mounted:o,updated:o}),o.deep&&Xt(a),r.push({dir:o,instance:s,value:a,oldValue:void 0,arg:l,modifiers:c}))}return e}function jt(e,t,n,s){const r=e.dirs,i=t&&t.dirs;for(let o=0;o<r.length;o++){const a=r[o];i&&(a.oldValue=i[o].value);let l=a.dir[s];l&&(Mn(),et(l,n,8,[e.el,a,e,t]),Bn())}}function no(e,t){return ee(e)?(()=>xe({name:e.name},t,{setup:e}))():e}const Xn=e=>!!e.type.__asyncLoader,Oc=e=>e.type.__isKeepAlive;function Pg(e,t){xc(e,"a",t)}function Ng(e,t){xc(e,"da",t)}function xc(e,t,n=Oe){const s=e.__wdc||(e.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return e()});if(Er(t,s,n),n){let r=n.parent;for(;r&&r.parent;)Oc(r.parent.vnode)&&Dg(s,t,n,r),r=r.parent}}function Dg(e,t,n,s){const r=Er(t,e,s,!0);Pc(()=>{Ui(s[t],r)},n)}function Er(e,t,n=Oe,s=!1){if(n){const r=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;Mn(),In(n);const a=et(t,n,e,o);return en(),Bn(),a});return s?r.unshift(i):r.push(i),i}}const At=e=>(t,n=Oe)=>(!us||e==="sp")&&Er(e,(...s)=>t(...s),n),Rg=At("bm"),$g=At("m"),Lg=At("bu"),Mg=At("u"),Bg=At("bum"),Pc=At("um"),Fg=At("sp"),Vg=At("rtg"),Wg=At("rtc");function Hg(e,t=Oe){Er("ec",e,t)}const so="components";function Re(e,t){return Dc(so,e,!0,t)||e}const Nc=Symbol.for("v-ndc");function jg(e){return Ae(e)?Dc(so,e,!1)||e:e||Nc}function Dc(e,t,n=!0,s=!1){const r=Pe||Oe;if(r){const i=r.type;if(e===so){const a=w_(i,!1);if(a&&(a===t||a===pt(t)||a===pr(pt(t))))return i}const o=da(r[e]||i[e],t)||da(r.appContext[e],t);return!o&&s?i:o}}function da(e,t){return e&&(e[t]||e[pt(t)]||e[pr(pt(t))])}function Me(e,t,n,s){let r;const i=n&&n[s];if(Y(e)||Ae(e)){r=new Array(e.length);for(let o=0,a=e.length;o<a;o++)r[o]=t(e[o],o,void 0,i&&i[o])}else if(typeof e=="number"){r=new Array(e);for(let o=0;o<e;o++)r[o]=t(o+1,o,void 0,i&&i[o])}else if(_e(e))if(e[Symbol.iterator])r=Array.from(e,(o,a)=>t(o,a,void 0,i&&i[a]));else{const o=Object.keys(e);r=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];r[a]=t(e[c],c,a,i&&i[a])}}else r=[];return n&&(n[s]=r),r}function Ug(e,t,n={},s,r){if(Pe.isCE||Pe.parent&&Xn(Pe.parent)&&Pe.parent.isCE)return t!=="default"&&(n.name=t),re("slot",n,s&&s());let i=e[t];i&&i._c&&(i._d=!1),W();const o=i&&Rc(i(n)),a=Ht(ge,{key:n.key||o&&o.key||`_${t}`},o||(s?s():[]),o&&e._===1?64:-2);return!r&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),i&&i._c&&(i._d=!0),a}function Rc(e){return e.some(t=>Zs(t)?!(t.type===Bt||t.type===ge&&!Rc(t.children)):!0)?e:null}const pi=e=>e?qc(e)?Tr(e)||e.proxy:pi(e.parent):null,Qn=xe(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>pi(e.parent),$root:e=>pi(e.root),$emit:e=>e.emit,$options:e=>ro(e),$forceUpdate:e=>e.f||(e.f=()=>to(e.update)),$nextTick:e=>e.n||(e.n=eo.bind(e.proxy)),$watch:e=>xg.bind(e)}),jr=(e,t)=>e!==ve&&!e.__isScriptSetup&&oe(e,t),qg={get({_:e},t){const{ctx:n,setupState:s,data:r,props:i,accessCache:o,type:a,appContext:l}=e;let c;if(t[0]!=="$"){const g=o[t];if(g!==void 0)switch(g){case 1:return s[t];case 2:return r[t];case 4:return n[t];case 3:return i[t]}else{if(jr(s,t))return o[t]=1,s[t];if(r!==ve&&oe(r,t))return o[t]=2,r[t];if((c=e.propsOptions[0])&&oe(c,t))return o[t]=3,i[t];if(n!==ve&&oe(n,t))return o[t]=4,n[t];hi&&(o[t]=0)}}const u=Qn[t];let d,p;if(u)return t==="$attrs"&&Fe(e,"get",t),u(e);if((d=a.__cssModules)&&(d=d[t]))return d;if(n!==ve&&oe(n,t))return o[t]=4,n[t];if(p=l.config.globalProperties,oe(p,t))return p[t]},set({_:e},t,n){const{data:s,setupState:r,ctx:i}=e;return jr(r,t)?(r[t]=n,!0):s!==ve&&oe(s,t)?(s[t]=n,!0):oe(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:s,appContext:r,propsOptions:i}},o){let a;return!!n[o]||e!==ve&&oe(e,o)||jr(t,o)||(a=i[0])&&oe(a,o)||oe(s,o)||oe(Qn,o)||oe(r.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:oe(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function fa(e){return Y(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let hi=!0;function zg(e){const t=ro(e),n=e.proxy,s=e.ctx;hi=!1,t.beforeCreate&&pa(t.beforeCreate,e,"bc");const{data:r,computed:i,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:d,mounted:p,beforeUpdate:g,updated:O,activated:E,deactivated:S,beforeDestroy:I,beforeUnmount:m,destroyed:_,unmounted:v,render:y,renderTracked:T,renderTriggered:R,errorCaptured:M,serverPrefetch:x,expose:H,inheritAttrs:X,components:ie,directives:ue,filters:Ie}=t;if(c&&Kg(c,s,null),o)for(const J in o){const G=o[J];ee(G)&&(s[J]=G.bind(n))}if(r){const J=r.call(n,n);_e(J)&&(e.data=Fn(J))}if(hi=!0,i)for(const J in i){const G=i[J],he=ee(G)?G.bind(n,n):ee(G.get)?G.get.bind(n,n):Je,Ee=!ee(G)&&ee(G.set)?G.set.bind(n):Je,Se=je({get:he,set:Ee});Object.defineProperty(s,J,{enumerable:!0,configurable:!0,get:()=>Se.value,set:ce=>Se.value=ce})}if(a)for(const J in a)$c(a[J],s,n,J);if(l){const J=ee(l)?l.call(n):l;Reflect.ownKeys(J).forEach(G=>{Fs(G,J[G])})}u&&pa(u,e,"c");function Q(J,G){Y(G)?G.forEach(he=>J(he.bind(n))):G&&J(G.bind(n))}if(Q(Rg,d),Q($g,p),Q(Lg,g),Q(Mg,O),Q(Pg,E),Q(Ng,S),Q(Hg,M),Q(Wg,T),Q(Vg,R),Q(Bg,m),Q(Pc,v),Q(Fg,x),Y(H))if(H.length){const J=e.exposed||(e.exposed={});H.forEach(G=>{Object.defineProperty(J,G,{get:()=>n[G],set:he=>n[G]=he})})}else e.exposed||(e.exposed={});y&&e.render===Je&&(e.render=y),X!=null&&(e.inheritAttrs=X),ie&&(e.components=ie),ue&&(e.directives=ue)}function Kg(e,t,n=Je){Y(e)&&(e=mi(e));for(const s in e){const r=e[s];let i;_e(r)?"default"in r?i=ut(r.from||s,r.default,!0):i=ut(r.from||s):i=ut(r),we(i)?Object.defineProperty(t,s,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):t[s]=i}}function pa(e,t,n){et(Y(e)?e.map(s=>s.bind(t.proxy)):e.bind(t.proxy),t,n)}function $c(e,t,n,s){const r=s.includes(".")?Cc(n,s):()=>n[s];if(Ae(e)){const i=t[e];ee(i)&&Yn(r,i)}else if(ee(e))Yn(r,e.bind(n));else if(_e(e))if(Y(e))e.forEach(i=>$c(i,t,n,s));else{const i=ee(e.handler)?e.handler.bind(n):t[e.handler];ee(i)&&Yn(r,i,e)}}function ro(e){const t=e.type,{mixins:n,extends:s}=t,{mixins:r,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,a=i.get(t);let l;return a?l=a:!r.length&&!n&&!s?l=t:(l={},r.length&&r.forEach(c=>Qs(l,c,o,!0)),Qs(l,t,o)),_e(t)&&i.set(t,l),l}function Qs(e,t,n,s=!1){const{mixins:r,extends:i}=t;i&&Qs(e,i,n,!0),r&&r.forEach(o=>Qs(e,o,n,!0));for(const o in t)if(!(s&&o==="expose")){const a=Gg[o]||n&&n[o];e[o]=a?a(e[o],t[o]):t[o]}return e}const Gg={data:ha,props:ma,emits:ma,methods:zn,computed:zn,beforeCreate:De,created:De,beforeMount:De,mounted:De,beforeUpdate:De,updated:De,beforeDestroy:De,beforeUnmount:De,destroyed:De,unmounted:De,activated:De,deactivated:De,errorCaptured:De,serverPrefetch:De,components:zn,directives:zn,watch:Xg,provide:ha,inject:Yg};function ha(e,t){return t?e?function(){return xe(ee(e)?e.call(this,this):e,ee(t)?t.call(this,this):t)}:t:e}function Yg(e,t){return zn(mi(e),mi(t))}function mi(e){if(Y(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function De(e,t){return e?[...new Set([].concat(e,t))]:t}function zn(e,t){return e?xe(Object.create(null),e,t):t}function ma(e,t){return e?Y(e)&&Y(t)?[...new Set([...e,...t])]:xe(Object.create(null),fa(e),fa(t??{})):t}function Xg(e,t){if(!e)return t;if(!t)return e;const n=xe(Object.create(null),e);for(const s in t)n[s]=De(e[s],t[s]);return n}function Lc(){return{app:null,config:{isNativeTag:ym,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Qg=0;function Zg(e,t){return function(s,r=null){ee(s)||(s=xe({},s)),r!=null&&!_e(r)&&(r=null);const i=Lc(),o=new Set;let a=!1;const l=i.app={_uid:Qg++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:T_,get config(){return i.config},set config(c){},use(c,...u){return o.has(c)||(c&&ee(c.install)?(o.add(c),c.install(l,...u)):ee(c)&&(o.add(c),c(l,...u))),l},mixin(c){return i.mixins.includes(c)||i.mixins.push(c),l},component(c,u){return u?(i.components[c]=u,l):i.components[c]},directive(c,u){return u?(i.directives[c]=u,l):i.directives[c]},mount(c,u,d){if(!a){const p=re(s,r);return p.appContext=i,u&&t?t(p,c):e(p,c,d),a=!0,l._container=c,c.__vue_app__=l,Tr(p.component)||p.component.proxy}},unmount(){a&&(e(null,l._container),delete l._container.__vue_app__)},provide(c,u){return i.provides[c]=u,l},runWithContext(c){ls=l;try{return c()}finally{ls=null}}};return l}}let ls=null;function Fs(e,t){if(Oe){let n=Oe.provides;const s=Oe.parent&&Oe.parent.provides;s===n&&(n=Oe.provides=Object.create(s)),n[e]=t}}function ut(e,t,n=!1){const s=Oe||Pe;if(s||ls){const r=s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:ls._context.provides;if(r&&e in r)return r[e];if(arguments.length>1)return n&&ee(t)?t.call(s&&s.proxy):t}}function Jg(){return!!(Oe||Pe||ls)}function e_(e,t,n,s=!1){const r={},i={};zs(i,Ar,1),e.propsDefaults=Object.create(null),Mc(e,t,r,i);for(const o in e.propsOptions[0])o in r||(r[o]=void 0);n?e.props=s?r:cg(r):e.type.props?e.props=r:e.props=i,e.attrs=i}function t_(e,t,n,s){const{props:r,attrs:i,vnode:{patchFlag:o}}=e,a=le(r),[l]=e.propsOptions;let c=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=e.vnode.dynamicProps;for(let d=0;d<u.length;d++){let p=u[d];if(yr(e.emitsOptions,p))continue;const g=t[p];if(l)if(oe(i,p))g!==i[p]&&(i[p]=g,c=!0);else{const O=pt(p);r[O]=gi(l,a,O,g,e,!1)}else g!==i[p]&&(i[p]=g,c=!0)}}}else{Mc(e,t,r,i)&&(c=!0);let u;for(const d in a)(!t||!oe(t,d)&&((u=$n(d))===d||!oe(t,u)))&&(l?n&&(n[d]!==void 0||n[u]!==void 0)&&(r[d]=gi(l,a,d,void 0,e,!0)):delete r[d]);if(i!==a)for(const d in i)(!t||!oe(t,d))&&(delete i[d],c=!0)}c&&wt(e,"set","$attrs")}function Mc(e,t,n,s){const[r,i]=e.propsOptions;let o=!1,a;if(t)for(let l in t){if(Ls(l))continue;const c=t[l];let u;r&&oe(r,u=pt(l))?!i||!i.includes(u)?n[u]=c:(a||(a={}))[u]=c:yr(e.emitsOptions,l)||(!(l in s)||c!==s[l])&&(s[l]=c,o=!0)}if(i){const l=le(n),c=a||ve;for(let u=0;u<i.length;u++){const d=i[u];n[d]=gi(r,l,d,c[d],e,!oe(c,d))}}return o}function gi(e,t,n,s,r,i){const o=e[n];if(o!=null){const a=oe(o,"default");if(a&&s===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&ee(l)){const{propsDefaults:c}=r;n in c?s=c[n]:(In(r),s=c[n]=l.call(null,t),en())}else s=l}o[0]&&(i&&!a?s=!1:o[1]&&(s===""||s===$n(n))&&(s=!0))}return s}function Bc(e,t,n=!1){const s=t.propsCache,r=s.get(e);if(r)return r;const i=e.props,o={},a=[];let l=!1;if(!ee(e)){const u=d=>{l=!0;const[p,g]=Bc(d,t,!0);xe(o,p),g&&a.push(...g)};!n&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!i&&!l)return _e(e)&&s.set(e,gn),gn;if(Y(i))for(let u=0;u<i.length;u++){const d=pt(i[u]);ga(d)&&(o[d]=ve)}else if(i)for(const u in i){const d=pt(u);if(ga(d)){const p=i[u],g=o[d]=Y(p)||ee(p)?{type:p}:xe({},p);if(g){const O=ba(Boolean,g.type),E=ba(String,g.type);g[0]=O>-1,g[1]=E<0||O<E,(O>-1||oe(g,"default"))&&a.push(d)}}}const c=[o,a];return _e(e)&&s.set(e,c),c}function ga(e){return e[0]!=="$"}function _a(e){const t=e&&e.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:e===null?"null":""}function va(e,t){return _a(e)===_a(t)}function ba(e,t){return Y(t)?t.findIndex(n=>va(n,e)):ee(t)&&va(t,e)?0:-1}const Fc=e=>e[0]==="_"||e==="$stable",io=e=>Y(e)?e.map(ot):[ot(e)],n_=(e,t,n)=>{if(t._n)return t;const s=Bs((...r)=>io(t(...r)),n);return s._c=!1,s},Vc=(e,t,n)=>{const s=e._ctx;for(const r in e){if(Fc(r))continue;const i=e[r];if(ee(i))t[r]=n_(r,i,s);else if(i!=null){const o=io(i);t[r]=()=>o}}},Wc=(e,t)=>{const n=io(t);e.slots.default=()=>n},s_=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=le(t),zs(t,"_",n)):Vc(t,e.slots={})}else e.slots={},t&&Wc(e,t);zs(e.slots,Ar,1)},r_=(e,t,n)=>{const{vnode:s,slots:r}=e;let i=!0,o=ve;if(s.shapeFlag&32){const a=t._;a?n&&a===1?i=!1:(xe(r,t),!n&&a===1&&delete r._):(i=!t.$stable,Vc(t,r)),o=t}else t&&(Wc(e,t),o={default:1});if(i)for(const a in r)!Fc(a)&&!(a in o)&&delete r[a]};function _i(e,t,n,s,r=!1){if(Y(e)){e.forEach((p,g)=>_i(p,t&&(Y(t)?t[g]:t),n,s,r));return}if(Xn(s)&&!r)return;const i=s.shapeFlag&4?Tr(s.component)||s.component.proxy:s.el,o=r?null:i,{i:a,r:l}=e,c=t&&t.r,u=a.refs===ve?a.refs={}:a.refs,d=a.setupState;if(c!=null&&c!==l&&(Ae(c)?(u[c]=null,oe(d,c)&&(d[c]=null)):we(c)&&(c.value=null)),ee(l))Dt(l,a,12,[o,u]);else{const p=Ae(l),g=we(l);if(p||g){const O=()=>{if(e.f){const E=p?oe(d,l)?d[l]:u[l]:l.value;r?Y(E)&&Ui(E,i):Y(E)?E.includes(i)||E.push(i):p?(u[l]=[i],oe(d,l)&&(d[l]=u[l])):(l.value=[i],e.k&&(u[e.k]=l.value))}else p?(u[l]=o,oe(d,l)&&(d[l]=o)):g&&(l.value=o,e.k&&(u[e.k]=o))};o?(O.id=-1,Be(O,n)):O()}}}const Be=Og;function i_(e){return o_(e)}function o_(e,t){const n=li();n.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:d,nextSibling:p,setScopeId:g=Je,insertStaticContent:O}=e,E=(f,h,b,A=null,C=null,P=null,V=!1,$=null,L=!!h.dynamicChildren)=>{if(f===h)return;f&&!jn(f,h)&&(A=k(f),ce(f,C,P,!0),f=null),h.patchFlag===-2&&(L=!1,h.dynamicChildren=null);const{type:N,ref:K,shapeFlag:j}=h;switch(N){case kr:S(f,h,b,A);break;case Bt:I(f,h,b,A);break;case Vs:f==null&&m(h,b,A,V);break;case ge:ie(f,h,b,A,C,P,V,$,L);break;default:j&1?y(f,h,b,A,C,P,V,$,L):j&6?ue(f,h,b,A,C,P,V,$,L):(j&64||j&128)&&N.process(f,h,b,A,C,P,V,$,L,B)}K!=null&&C&&_i(K,f&&f.ref,P,h||f,!h)},S=(f,h,b,A)=>{if(f==null)s(h.el=a(h.children),b,A);else{const C=h.el=f.el;h.children!==f.children&&c(C,h.children)}},I=(f,h,b,A)=>{f==null?s(h.el=l(h.children||""),b,A):h.el=f.el},m=(f,h,b,A)=>{[f.el,f.anchor]=O(f.children,h,b,A,f.el,f.anchor)},_=({el:f,anchor:h},b,A)=>{let C;for(;f&&f!==h;)C=p(f),s(f,b,A),f=C;s(h,b,A)},v=({el:f,anchor:h})=>{let b;for(;f&&f!==h;)b=p(f),r(f),f=b;r(h)},y=(f,h,b,A,C,P,V,$,L)=>{V=V||h.type==="svg",f==null?T(h,b,A,C,P,V,$,L):x(f,h,C,P,V,$,L)},T=(f,h,b,A,C,P,V,$)=>{let L,N;const{type:K,props:j,shapeFlag:q,transition:Z,dirs:se}=f;if(L=f.el=o(f.type,P,j&&j.is,j),q&8?u(L,f.children):q&16&&M(f.children,L,null,A,C,P&&K!=="foreignObject",V,$),se&&jt(f,null,A,"created"),R(L,f,f.scopeId,V,A),j){for(const de in j)de!=="value"&&!Ls(de)&&i(L,de,null,j[de],P,f.children,A,C,me);"value"in j&&i(L,"value",null,j.value),(N=j.onVnodeBeforeMount)&&it(N,A,f)}se&&jt(f,null,A,"beforeMount");const fe=(!C||C&&!C.pendingBranch)&&Z&&!Z.persisted;fe&&Z.beforeEnter(L),s(L,h,b),((N=j&&j.onVnodeMounted)||fe||se)&&Be(()=>{N&&it(N,A,f),fe&&Z.enter(L),se&&jt(f,null,A,"mounted")},C)},R=(f,h,b,A,C)=>{if(b&&g(f,b),A)for(let P=0;P<A.length;P++)g(f,A[P]);if(C){let P=C.subTree;if(h===P){const V=C.vnode;R(f,V,V.scopeId,V.slotScopeIds,C.parent)}}},M=(f,h,b,A,C,P,V,$,L=0)=>{for(let N=L;N<f.length;N++){const K=f[N]=$?Ot(f[N]):ot(f[N]);E(null,K,h,b,A,C,P,V,$)}},x=(f,h,b,A,C,P,V)=>{const $=h.el=f.el;let{patchFlag:L,dynamicChildren:N,dirs:K}=h;L|=f.patchFlag&16;const j=f.props||ve,q=h.props||ve;let Z;b&&Ut(b,!1),(Z=q.onVnodeBeforeUpdate)&&it(Z,b,h,f),K&&jt(h,f,b,"beforeUpdate"),b&&Ut(b,!0);const se=C&&h.type!=="foreignObject";if(N?H(f.dynamicChildren,N,$,b,A,se,P):V||G(f,h,$,null,b,A,se,P,!1),L>0){if(L&16)X($,h,j,q,b,A,C);else if(L&2&&j.class!==q.class&&i($,"class",null,q.class,C),L&4&&i($,"style",j.style,q.style,C),L&8){const fe=h.dynamicProps;for(let de=0;de<fe.length;de++){const ke=fe[de],Xe=j[ke],on=q[ke];(on!==Xe||ke==="value")&&i($,ke,Xe,on,C,f.children,b,A,me)}}L&1&&f.children!==h.children&&u($,h.children)}else!V&&N==null&&X($,h,j,q,b,A,C);((Z=q.onVnodeUpdated)||K)&&Be(()=>{Z&&it(Z,b,h,f),K&&jt(h,f,b,"updated")},A)},H=(f,h,b,A,C,P,V)=>{for(let $=0;$<h.length;$++){const L=f[$],N=h[$],K=L.el&&(L.type===ge||!jn(L,N)||L.shapeFlag&70)?d(L.el):b;E(L,N,K,null,A,C,P,V,!0)}},X=(f,h,b,A,C,P,V)=>{if(b!==A){if(b!==ve)for(const $ in b)!Ls($)&&!($ in A)&&i(f,$,b[$],null,V,h.children,C,P,me);for(const $ in A){if(Ls($))continue;const L=A[$],N=b[$];L!==N&&$!=="value"&&i(f,$,N,L,V,h.children,C,P,me)}"value"in A&&i(f,"value",b.value,A.value)}},ie=(f,h,b,A,C,P,V,$,L)=>{const N=h.el=f?f.el:a(""),K=h.anchor=f?f.anchor:a("");let{patchFlag:j,dynamicChildren:q,slotScopeIds:Z}=h;Z&&($=$?$.concat(Z):Z),f==null?(s(N,b,A),s(K,b,A),M(h.children,b,K,C,P,V,$,L)):j>0&&j&64&&q&&f.dynamicChildren?(H(f.dynamicChildren,q,b,C,P,V,$),(h.key!=null||C&&h===C.subTree)&&Hc(f,h,!0)):G(f,h,b,K,C,P,V,$,L)},ue=(f,h,b,A,C,P,V,$,L)=>{h.slotScopeIds=$,f==null?h.shapeFlag&512?C.ctx.activate(h,b,A,V,L):Ie(h,b,A,C,P,V,L):be(f,h,L)},Ie=(f,h,b,A,C,P,V)=>{const $=f.component=g_(f,A,C);if(Oc(f)&&($.ctx.renderer=B),__($),$.asyncDep){if(C&&C.registerDep($,Q),!f.el){const L=$.subTree=re(Bt);I(null,L,h,b)}return}Q($,f,h,b,C,P,V)},be=(f,h,b)=>{const A=h.component=f.component;if(Sg(f,h,b))if(A.asyncDep&&!A.asyncResolved){J(A,h,b);return}else A.next=h,yg(A.update),A.update();else h.el=f.el,A.vnode=h},Q=(f,h,b,A,C,P,V)=>{const $=()=>{if(f.isMounted){let{next:K,bu:j,u:q,parent:Z,vnode:se}=f,fe=K,de;Ut(f,!1),K?(K.el=se.el,J(f,K,V)):K=se,j&&Ms(j),(de=K.props&&K.props.onVnodeBeforeUpdate)&&it(de,Z,K,se),Ut(f,!0);const ke=Hr(f),Xe=f.subTree;f.subTree=ke,E(Xe,ke,d(Xe.el),k(Xe),f,C,P),K.el=ke.el,fe===null&&Cg(f,ke.el),q&&Be(q,C),(de=K.props&&K.props.onVnodeUpdated)&&Be(()=>it(de,Z,K,se),C)}else{let K;const{el:j,props:q}=h,{bm:Z,m:se,parent:fe}=f,de=Xn(h);if(Ut(f,!1),Z&&Ms(Z),!de&&(K=q&&q.onVnodeBeforeMount)&&it(K,fe,h),Ut(f,!0),j&&ne){const ke=()=>{f.subTree=Hr(f),ne(j,f.subTree,f,C,null)};de?h.type.__asyncLoader().then(()=>!f.isUnmounted&&ke()):ke()}else{const ke=f.subTree=Hr(f);E(null,ke,b,A,f,C,P),h.el=ke.el}if(se&&Be(se,C),!de&&(K=q&&q.onVnodeMounted)){const ke=h;Be(()=>it(K,fe,ke),C)}(h.shapeFlag&256||fe&&Xn(fe.vnode)&&fe.vnode.shapeFlag&256)&&f.a&&Be(f.a,C),f.isMounted=!0,h=b=A=null}},L=f.effect=new Ki($,()=>to(N),f.scope),N=f.update=()=>L.run();N.id=f.uid,Ut(f,!0),N()},J=(f,h,b)=>{h.component=f;const A=f.vnode.props;f.vnode=h,f.next=null,t_(f,h.props,A,b),r_(f,h.children,b),Mn(),ca(),Bn()},G=(f,h,b,A,C,P,V,$,L=!1)=>{const N=f&&f.children,K=f?f.shapeFlag:0,j=h.children,{patchFlag:q,shapeFlag:Z}=h;if(q>0){if(q&128){Ee(N,j,b,A,C,P,V,$,L);return}else if(q&256){he(N,j,b,A,C,P,V,$,L);return}}Z&8?(K&16&&me(N,C,P),j!==N&&u(b,j)):K&16?Z&16?Ee(N,j,b,A,C,P,V,$,L):me(N,C,P,!0):(K&8&&u(b,""),Z&16&&M(j,b,A,C,P,V,$,L))},he=(f,h,b,A,C,P,V,$,L)=>{f=f||gn,h=h||gn;const N=f.length,K=h.length,j=Math.min(N,K);let q;for(q=0;q<j;q++){const Z=h[q]=L?Ot(h[q]):ot(h[q]);E(f[q],Z,b,null,C,P,V,$,L)}N>K?me(f,C,P,!0,!1,j):M(h,b,A,C,P,V,$,L,j)},Ee=(f,h,b,A,C,P,V,$,L)=>{let N=0;const K=h.length;let j=f.length-1,q=K-1;for(;N<=j&&N<=q;){const Z=f[N],se=h[N]=L?Ot(h[N]):ot(h[N]);if(jn(Z,se))E(Z,se,b,null,C,P,V,$,L);else break;N++}for(;N<=j&&N<=q;){const Z=f[j],se=h[q]=L?Ot(h[q]):ot(h[q]);if(jn(Z,se))E(Z,se,b,null,C,P,V,$,L);else break;j--,q--}if(N>j){if(N<=q){const Z=q+1,se=Z<K?h[Z].el:A;for(;N<=q;)E(null,h[N]=L?Ot(h[N]):ot(h[N]),b,se,C,P,V,$,L),N++}}else if(N>q)for(;N<=j;)ce(f[N],C,P,!0),N++;else{const Z=N,se=N,fe=new Map;for(N=se;N<=q;N++){const We=h[N]=L?Ot(h[N]):ot(h[N]);We.key!=null&&fe.set(We.key,N)}let de,ke=0;const Xe=q-se+1;let on=!1,ho=0;const Vn=new Array(Xe);for(N=0;N<Xe;N++)Vn[N]=0;for(N=Z;N<=j;N++){const We=f[N];if(ke>=Xe){ce(We,C,P,!0);continue}let rt;if(We.key!=null)rt=fe.get(We.key);else for(de=se;de<=q;de++)if(Vn[de-se]===0&&jn(We,h[de])){rt=de;break}rt===void 0?ce(We,C,P,!0):(Vn[rt-se]=N+1,rt>=ho?ho=rt:on=!0,E(We,h[rt],b,null,C,P,V,$,L),ke++)}const mo=on?a_(Vn):gn;for(de=mo.length-1,N=Xe-1;N>=0;N--){const We=se+N,rt=h[We],go=We+1<K?h[We+1].el:A;Vn[N]===0?E(null,rt,b,go,C,P,V,$,L):on&&(de<0||N!==mo[de]?Se(rt,b,go,2):de--)}}},Se=(f,h,b,A,C=null)=>{const{el:P,type:V,transition:$,children:L,shapeFlag:N}=f;if(N&6){Se(f.component.subTree,h,b,A);return}if(N&128){f.suspense.move(h,b,A);return}if(N&64){V.move(f,h,b,B);return}if(V===ge){s(P,h,b);for(let j=0;j<L.length;j++)Se(L[j],h,b,A);s(f.anchor,h,b);return}if(V===Vs){_(f,h,b);return}if(A!==2&&N&1&&$)if(A===0)$.beforeEnter(P),s(P,h,b),Be(()=>$.enter(P),C);else{const{leave:j,delayLeave:q,afterLeave:Z}=$,se=()=>s(P,h,b),fe=()=>{j(P,()=>{se(),Z&&Z()})};q?q(P,se,fe):fe()}else s(P,h,b)},ce=(f,h,b,A=!1,C=!1)=>{const{type:P,props:V,ref:$,children:L,dynamicChildren:N,shapeFlag:K,patchFlag:j,dirs:q}=f;if($!=null&&_i($,null,b,f,!0),K&256){h.ctx.deactivate(f);return}const Z=K&1&&q,se=!Xn(f);let fe;if(se&&(fe=V&&V.onVnodeBeforeUnmount)&&it(fe,h,f),K&6)Ce(f.component,b,A);else{if(K&128){f.suspense.unmount(b,A);return}Z&&jt(f,null,h,"beforeUnmount"),K&64?f.type.remove(f,h,b,C,B,A):N&&(P!==ge||j>0&&j&64)?me(N,h,b,!1,!0):(P===ge&&j&384||!C&&K&16)&&me(L,h,b),A&&Ve(f)}(se&&(fe=V&&V.onVnodeUnmounted)||Z)&&Be(()=>{fe&&it(fe,h,f),Z&&jt(f,null,h,"unmounted")},b)},Ve=f=>{const{type:h,el:b,anchor:A,transition:C}=f;if(h===ge){ye(b,A);return}if(h===Vs){v(f);return}const P=()=>{r(b),C&&!C.persisted&&C.afterLeave&&C.afterLeave()};if(f.shapeFlag&1&&C&&!C.persisted){const{leave:V,delayLeave:$}=C,L=()=>V(b,P);$?$(f.el,P,L):L()}else P()},ye=(f,h)=>{let b;for(;f!==h;)b=p(f),r(f),f=b;r(h)},Ce=(f,h,b)=>{const{bum:A,scope:C,update:P,subTree:V,um:$}=f;A&&Ms(A),C.stop(),P&&(P.active=!1,ce(V,f,h,b)),$&&Be($,h),Be(()=>{f.isUnmounted=!0},h),h&&h.pendingBranch&&!h.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===h.pendingId&&(h.deps--,h.deps===0&&h.resolve())},me=(f,h,b,A=!1,C=!1,P=0)=>{for(let V=P;V<f.length;V++)ce(f[V],h,b,A,C)},k=f=>f.shapeFlag&6?k(f.component.subTree):f.shapeFlag&128?f.suspense.next():p(f.anchor||f.el),F=(f,h,b)=>{f==null?h._vnode&&ce(h._vnode,null,null,!0):E(h._vnode||null,f,h,null,null,null,b),ca(),kc(),h._vnode=f},B={p:E,um:ce,m:Se,r:Ve,mt:Ie,mc:M,pc:G,pbc:H,n:k,o:e};let U,ne;return t&&([U,ne]=t(B)),{render:F,hydrate:U,createApp:Zg(F,U)}}function Ut({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function Hc(e,t,n=!1){const s=e.children,r=t.children;if(Y(s)&&Y(r))for(let i=0;i<s.length;i++){const o=s[i];let a=r[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[i]=Ot(r[i]),a.el=o.el),n||Hc(o,a)),a.type===kr&&(a.el=o.el)}}function a_(e){const t=e.slice(),n=[0];let s,r,i,o,a;const l=e.length;for(s=0;s<l;s++){const c=e[s];if(c!==0){if(r=n[n.length-1],e[r]<c){t[s]=r,n.push(s);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,e[n[a]]<c?i=a+1:o=a;c<e[n[i]]&&(i>0&&(t[s]=n[i-1]),n[i]=s)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}const l_=e=>e.__isTeleport,ge=Symbol.for("v-fgt"),kr=Symbol.for("v-txt"),Bt=Symbol.for("v-cmt"),Vs=Symbol.for("v-stc"),Zn=[];let Ze=null;function W(e=!1){Zn.push(Ze=e?null:[])}function c_(){Zn.pop(),Ze=Zn[Zn.length-1]||null}let cs=1;function ya(e){cs+=e}function jc(e){return e.dynamicChildren=cs>0?Ze||gn:null,c_(),cs>0&&Ze&&Ze.push(e),e}function z(e,t,n,s,r,i){return jc(w(e,t,n,s,r,i,!0))}function Ht(e,t,n,s,r){return jc(re(e,t,n,s,r,!0))}function Zs(e){return e?e.__v_isVNode===!0:!1}function jn(e,t){return e.type===t.type&&e.key===t.key}const Ar="__vInternal",Uc=({key:e})=>e??null,Ws=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?Ae(e)||we(e)||ee(e)?{i:Pe,r:e,k:t,f:!!n}:e:null);function w(e,t=null,n=null,s=0,r=null,i=e===ge?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Uc(t),ref:t&&Ws(t),scopeId:wr,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Pe};return a?(oo(l,n),i&128&&e.normalize(l)):n&&(l.shapeFlag|=Ae(n)?8:16),cs>0&&!o&&Ze&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Ze.push(l),l}const re=u_;function u_(e,t=null,n=null,s=0,r=null,i=!1){if((!e||e===Nc)&&(e=Bt),Zs(e)){const a=Cn(e,t,!0);return n&&oo(a,n),cs>0&&!i&&Ze&&(a.shapeFlag&6?Ze[Ze.indexOf(e)]=a:Ze.push(a)),a.patchFlag|=-2,a}if(E_(e)&&(e=e.__vccOpts),t){t=d_(t);let{class:a,style:l}=t;a&&!Ae(a)&&(t.class=Ln(a)),_e(l)&&(gc(l)&&!Y(l)&&(l=xe({},l)),t.style=hr(l))}const o=Ae(e)?1:Ig(e)?128:l_(e)?64:_e(e)?4:ee(e)?2:0;return w(e,t,n,s,r,o,i,!0)}function d_(e){return e?gc(e)||Ar in e?xe({},e):e:null}function Cn(e,t,n=!1){const{props:s,ref:r,patchFlag:i,children:o}=e,a=t?p_(s||{},t):s;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:a,key:a&&Uc(a),ref:t&&t.ref?n&&r?Y(r)?r.concat(Ws(t)):[r,Ws(t)]:Ws(t):r,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==ge?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Cn(e.ssContent),ssFallback:e.ssFallback&&Cn(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function Et(e=" ",t=0){return re(kr,null,e,t)}function f_(e,t){const n=re(Vs,null,e);return n.staticCount=t,n}function dt(e="",t=!1){return t?(W(),Ht(Bt,null,e)):re(Bt,null,e)}function ot(e){return e==null||typeof e=="boolean"?re(Bt):Y(e)?re(ge,null,e.slice()):typeof e=="object"?Ot(e):re(kr,null,String(e))}function Ot(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Cn(e)}function oo(e,t){let n=0;const{shapeFlag:s}=e;if(t==null)t=null;else if(Y(t))n=16;else if(typeof t=="object")if(s&65){const r=t.default;r&&(r._c&&(r._d=!1),oo(e,r()),r._c&&(r._d=!0));return}else{n=32;const r=t._;!r&&!(Ar in t)?t._ctx=Pe:r===3&&Pe&&(Pe.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else ee(t)?(t={default:t,_ctx:Pe},n=32):(t=String(t),s&64?(n=16,t=[Et(t)]):n=8);e.children=t,e.shapeFlag|=n}function p_(...e){const t={};for(let n=0;n<e.length;n++){const s=e[n];for(const r in s)if(r==="class")t.class!==s.class&&(t.class=Ln([t.class,s.class]));else if(r==="style")t.style=hr([t.style,s.style]);else if(ur(r)){const i=t[r],o=s[r];o&&i!==o&&!(Y(i)&&i.includes(o))&&(t[r]=i?[].concat(i,o):o)}else r!==""&&(t[r]=s[r])}return t}function it(e,t,n,s=null){et(e,t,7,[n,s])}const h_=Lc();let m_=0;function g_(e,t,n){const s=e.type,r=(t?t.appContext:e.appContext)||h_,i={uid:m_++,vnode:e,type:s,parent:t,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new nc(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Bc(s,r),emitsOptions:Tc(s,r),emit:null,emitted:null,propsDefaults:ve,inheritAttrs:s.inheritAttrs,ctx:ve,data:ve,props:ve,attrs:ve,slots:ve,refs:ve,setupState:ve,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=kg.bind(null,i),e.ce&&e.ce(i),i}let Oe=null,ao,cn,wa="__VUE_INSTANCE_SETTERS__";(cn=li()[wa])||(cn=li()[wa]=[]),cn.push(e=>Oe=e),ao=e=>{cn.length>1?cn.forEach(t=>t(e)):cn[0](e)};const In=e=>{ao(e),e.scope.on()},en=()=>{Oe&&Oe.scope.off(),ao(null)};function qc(e){return e.vnode.shapeFlag&4}let us=!1;function __(e,t=!1){us=t;const{props:n,children:s}=e.vnode,r=qc(e);e_(e,n,r,t),s_(e,s);const i=r?v_(e,t):void 0;return us=!1,i}function v_(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=_r(new Proxy(e.ctx,qg));const{setup:s}=n;if(s){const r=e.setupContext=s.length>1?y_(e):null;In(e),Mn();const i=Dt(s,e,0,[e.props,r]);if(Bn(),en(),Ql(i)){if(i.then(en,en),t)return i.then(o=>{Ea(e,o,t)}).catch(o=>{br(o,e,0)});e.asyncDep=i}else Ea(e,i,t)}else zc(e,t)}function Ea(e,t,n){ee(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:_e(t)&&(e.setupState=yc(t)),zc(e,n)}let ka;function zc(e,t,n){const s=e.type;if(!e.render){if(!t&&ka&&!s.render){const r=s.template||ro(e).template;if(r){const{isCustomElement:i,compilerOptions:o}=e.appContext.config,{delimiters:a,compilerOptions:l}=s,c=xe(xe({isCustomElement:i,delimiters:a},o),l);s.render=ka(r,c)}}e.render=s.render||Je}In(e),Mn(),zg(e),Bn(),en()}function b_(e){return e.attrsProxy||(e.attrsProxy=new Proxy(e.attrs,{get(t,n){return Fe(e,"get","$attrs"),t[n]}}))}function y_(e){const t=n=>{e.exposed=n||{}};return{get attrs(){return b_(e)},slots:e.slots,emit:e.emit,expose:t}}function Tr(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(yc(_r(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Qn)return Qn[n](e)},has(t,n){return n in t||n in Qn}}))}function w_(e,t=!0){return ee(e)?e.displayName||e.name:e.name||t&&e.__name}function E_(e){return ee(e)&&"__vccOpts"in e}const je=(e,t)=>_g(e,t,us);function Kc(e,t,n){const s=arguments.length;return s===2?_e(t)&&!Y(t)?Zs(t)?re(e,null,[t]):re(e,t):re(e,null,t):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&Zs(n)&&(n=[n]),re(e,t,n))}const k_=Symbol.for("v-scx"),A_=()=>ut(k_),T_="3.3.4",S_="http://www.w3.org/2000/svg",zt=typeof document<"u"?document:null,Aa=zt&&zt.createElement("template"),C_={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,s)=>{const r=t?zt.createElementNS(S_,e):zt.createElement(e,n?{is:n}:void 0);return e==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:e=>zt.createTextNode(e),createComment:e=>zt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>zt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,s,r,i){const o=n?n.previousSibling:t.lastChild;if(r&&(r===i||r.nextSibling))for(;t.insertBefore(r.cloneNode(!0),n),!(r===i||!(r=r.nextSibling)););else{Aa.innerHTML=s?`<svg>${e}</svg>`:e;const a=Aa.content;if(s){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}t.insertBefore(a,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function I_(e,t,n){const s=e._vtc;s&&(t=(t?[t,...s]:[...s]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function O_(e,t,n){const s=e.style,r=Ae(n);if(n&&!r){if(t&&!Ae(t))for(const i in t)n[i]==null&&vi(s,i,"");for(const i in n)vi(s,i,n[i])}else{const i=s.display;r?t!==n&&(s.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(s.display=i)}}const Ta=/\s*!important$/;function vi(e,t,n){if(Y(n))n.forEach(s=>vi(e,t,s));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const s=x_(e,t);Ta.test(n)?e.setProperty($n(s),n.replace(Ta,""),"important"):e[s]=n}}const Sa=["Webkit","Moz","ms"],Ur={};function x_(e,t){const n=Ur[t];if(n)return n;let s=pt(t);if(s!=="filter"&&s in e)return Ur[t]=s;s=pr(s);for(let r=0;r<Sa.length;r++){const i=Sa[r]+s;if(i in e)return Ur[t]=i}return t}const Ca="http://www.w3.org/1999/xlink";function P_(e,t,n,s,r){if(s&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(Ca,t.slice(6,t.length)):e.setAttributeNS(Ca,t,n);else{const i=Pm(t);n==null||i&&!ec(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function N_(e,t,n,s,r,i,o){if(t==="innerHTML"||t==="textContent"){s&&o(s,r,i),e[t]=n??"";return}const a=e.tagName;if(t==="value"&&a!=="PROGRESS"&&!a.includes("-")){e._value=n;const c=a==="OPTION"?e.getAttribute("value"):e.value,u=n??"";c!==u&&(e.value=u),n==null&&e.removeAttribute(t);return}let l=!1;if(n===""||n==null){const c=typeof e[t];c==="boolean"?n=ec(n):n==null&&c==="string"?(n="",l=!0):c==="number"&&(n=0,l=!0)}try{e[t]=n}catch{}l&&e.removeAttribute(t)}function Kt(e,t,n,s){e.addEventListener(t,n,s)}function D_(e,t,n,s){e.removeEventListener(t,n,s)}function R_(e,t,n,s,r=null){const i=e._vei||(e._vei={}),o=i[t];if(s&&o)o.value=s;else{const[a,l]=$_(t);if(s){const c=i[t]=B_(s,r);Kt(e,a,c,l)}else o&&(D_(e,a,o,l),i[t]=void 0)}}const Ia=/(?:Once|Passive|Capture)$/;function $_(e){let t;if(Ia.test(e)){t={};let s;for(;s=e.match(Ia);)e=e.slice(0,e.length-s[0].length),t[s[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):$n(e.slice(2)),t]}let qr=0;const L_=Promise.resolve(),M_=()=>qr||(L_.then(()=>qr=0),qr=Date.now());function B_(e,t){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;et(F_(s,n.value),t,5,[s])};return n.value=e,n.attached=M_(),n}function F_(e,t){if(Y(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(s=>r=>!r._stopped&&s&&s(r))}else return t}const Oa=/^on[a-z]/,V_=(e,t,n,s,r=!1,i,o,a,l)=>{t==="class"?I_(e,s,r):t==="style"?O_(e,n,s):ur(t)?ji(t)||R_(e,t,n,s,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):W_(e,t,s,r))?N_(e,t,s,i,o,a,l):(t==="true-value"?e._trueValue=s:t==="false-value"&&(e._falseValue=s),P_(e,t,s,r))};function W_(e,t,n,s){return s?!!(t==="innerHTML"||t==="textContent"||t in e&&Oa.test(t)&&ee(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||Oa.test(t)&&Ae(n)?!1:t in e}const Js=e=>{const t=e.props["onUpdate:modelValue"]||!1;return Y(t)?n=>Ms(t,n):t};function H_(e){e.target.composing=!0}function xa(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const j_={created(e,{modifiers:{lazy:t,trim:n,number:s}},r){e._assign=Js(r);const i=s||r.props&&r.props.type==="number";Kt(e,t?"change":"input",o=>{if(o.target.composing)return;let a=e.value;n&&(a=a.trim()),i&&(a=Ks(a)),e._assign(a)}),n&&Kt(e,"change",()=>{e.value=e.value.trim()}),t||(Kt(e,"compositionstart",H_),Kt(e,"compositionend",xa),Kt(e,"change",xa))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:s,number:r}},i){if(e._assign=Js(i),e.composing||document.activeElement===e&&e.type!=="range"&&(n||s&&e.value.trim()===t||(r||e.type==="number")&&Ks(e.value)===t))return;const o=t??"";e.value!==o&&(e.value=o)}},U_={deep:!0,created(e,{value:t,modifiers:{number:n}},s){const r=dr(t);Kt(e,"change",()=>{const i=Array.prototype.filter.call(e.options,o=>o.selected).map(o=>n?Ks(er(o)):er(o));e._assign(e.multiple?r?new Set(i):i:i[0])}),e._assign=Js(s)},mounted(e,{value:t}){Pa(e,t)},beforeUpdate(e,t,n){e._assign=Js(n)},updated(e,{value:t}){Pa(e,t)}};function Pa(e,t){const n=e.multiple;if(!(n&&!Y(t)&&!dr(t))){for(let s=0,r=e.options.length;s<r;s++){const i=e.options[s],o=er(i);if(n)Y(t)?i.selected=Dm(t,o)>-1:i.selected=t.has(o);else if(mr(er(i),t)){e.selectedIndex!==s&&(e.selectedIndex=s);return}}!n&&e.selectedIndex!==-1&&(e.selectedIndex=-1)}}function er(e){return"_value"in e?e._value:e.value}const q_=xe({patchProp:V_},C_);let Na;function z_(){return Na||(Na=i_(q_))}const K_=(...e)=>{const t=z_().createApp(...e),{mount:n}=t;return t.mount=s=>{const r=G_(s);if(!r)return;const i=t._component;!ee(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.innerHTML="";const o=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},t};function G_(e){return Ae(e)?document.querySelector(e):e}var Y_=!1;/*!
  * pinia v2.1.3
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */let Gc;const Sr=e=>Gc=e,Yc=Symbol();function bi(e){return e&&typeof e=="object"&&Object.prototype.toString.call(e)==="[object Object]"&&typeof e.toJSON!="function"}var Jn;(function(e){e.direct="direct",e.patchObject="patch object",e.patchFunction="patch function"})(Jn||(Jn={}));function X_(){const e=sc(!0),t=e.run(()=>vr({}));let n=[],s=[];const r=_r({install(i){Sr(r),r._a=i,i.provide(Yc,r),i.config.globalProperties.$pinia=r,s.forEach(o=>n.push(o)),s=[]},use(i){return!this._a&&!Y_?s.push(i):n.push(i),this},_p:n,_a:null,_e:e,_s:new Map,state:t});return r}const Xc=()=>{};function Da(e,t,n,s=Xc){e.push(t);const r=()=>{const i=e.indexOf(t);i>-1&&(e.splice(i,1),s())};return!n&&rc()&&$m(r),r}function un(e,...t){e.slice().forEach(n=>{n(...t)})}const Q_=e=>e();function yi(e,t){e instanceof Map&&t instanceof Map&&t.forEach((n,s)=>e.set(s,n)),e instanceof Set&&t instanceof Set&&t.forEach(e.add,e);for(const n in t){if(!t.hasOwnProperty(n))continue;const s=t[n],r=e[n];bi(r)&&bi(s)&&e.hasOwnProperty(n)&&!we(s)&&!Nt(s)?e[n]=yi(r,s):e[n]=s}return e}const Z_=Symbol();function J_(e){return!bi(e)||!e.hasOwnProperty(Z_)}const{assign:It}=Object;function ev(e){return!!(we(e)&&e.effect)}function tv(e,t,n,s){const{state:r,actions:i,getters:o}=t,a=n.state.value[e];let l;function c(){a||(n.state.value[e]=r?r():{});const u=pg(n.state.value[e]);return It(u,i,Object.keys(o||{}).reduce((d,p)=>(d[p]=_r(je(()=>{Sr(n);const g=n._s.get(e);return o[p].call(g,g)})),d),{}))}return l=Qc(e,c,t,n,s,!0),l}function Qc(e,t,n={},s,r,i){let o;const a=It({actions:{}},n),l={deep:!0};let c,u,d=[],p=[],g;const O=s.state.value[e];!i&&!O&&(s.state.value[e]={}),vr({});let E;function S(M){let x;c=u=!1,typeof M=="function"?(M(s.state.value[e]),x={type:Jn.patchFunction,storeId:e,events:g}):(yi(s.state.value[e],M),x={type:Jn.patchObject,payload:M,storeId:e,events:g});const H=E=Symbol();eo().then(()=>{E===H&&(c=!0)}),u=!0,un(d,x,s.state.value[e])}const I=i?function(){const{state:x}=n,H=x?x():{};this.$patch(X=>{It(X,H)})}:Xc;function m(){o.stop(),d=[],p=[],s._s.delete(e)}function _(M,x){return function(){Sr(s);const H=Array.from(arguments),X=[],ie=[];function ue(Q){X.push(Q)}function Ie(Q){ie.push(Q)}un(p,{args:H,name:M,store:y,after:ue,onError:Ie});let be;try{be=x.apply(this&&this.$id===e?this:y,H)}catch(Q){throw un(ie,Q),Q}return be instanceof Promise?be.then(Q=>(un(X,Q),Q)).catch(Q=>(un(ie,Q),Promise.reject(Q))):(un(X,be),be)}}const v={_p:s,$id:e,$onAction:Da.bind(null,p),$patch:S,$reset:I,$subscribe(M,x={}){const H=Da(d,M,x.detached,()=>X()),X=o.run(()=>Yn(()=>s.state.value[e],ie=>{(x.flush==="sync"?u:c)&&M({storeId:e,type:Jn.direct,events:g},ie)},It({},l,x)));return H},$dispose:m},y=Fn(v);s._s.set(e,y);const T=s._a&&s._a.runWithContext||Q_,R=s._e.run(()=>(o=sc(),T(()=>o.run(t))));for(const M in R){const x=R[M];if(we(x)&&!ev(x)||Nt(x))i||(O&&J_(x)&&(we(x)?x.value=O[M]:yi(x,O[M])),s.state.value[e][M]=x);else if(typeof x=="function"){const H=_(M,x);R[M]=H,a.actions[M]=x}}return It(y,R),It(le(y),R),Object.defineProperty(y,"$state",{get:()=>s.state.value[e],set:M=>{S(x=>{It(x,M)})}}),s._p.forEach(M=>{It(y,o.run(()=>M({store:y,app:s._a,pinia:s,options:a})))}),O&&i&&n.hydrate&&n.hydrate(y.$state,O),c=!0,u=!0,y}function nv(e,t,n){let s,r;const i=typeof t=="function";typeof e=="string"?(s=e,r=i?n:t):(r=e,s=e.id);function o(a,l){const c=Jg();return a=a||(c?ut(Yc,null):null),a&&Sr(a),a=Gc,a._s.has(s)||(i?Qc(s,t,r,a):tv(s,r,a)),a._s.get(s)}return o.$id=s,o}let sv="Store";function lo(...e){return e.reduce((t,n)=>(t[n.$id+sv]=function(){return n(this.$pinia)},t),{})}/*!
  * vue-router v4.2.1
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const hn=typeof window<"u";function rv(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const pe=Object.assign;function zr(e,t){const n={};for(const s in t){const r=t[s];n[s]=tt(r)?r.map(e):e(r)}return n}const es=()=>{},tt=Array.isArray,iv=/\/$/,ov=e=>e.replace(iv,"");function Kr(e,t,n="/"){let s,r={},i="",o="";const a=t.indexOf("#");let l=t.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(s=t.slice(0,l),i=t.slice(l+1,a>-1?a:t.length),r=e(i)),a>-1&&(s=s||t.slice(0,a),o=t.slice(a,t.length)),s=uv(s??t,n),{fullPath:s+(i&&"?")+i+o,path:s,query:r,hash:o}}function av(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function Ra(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function lv(e,t,n){const s=t.matched.length-1,r=n.matched.length-1;return s>-1&&s===r&&On(t.matched[s],n.matched[r])&&Zc(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function On(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Zc(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!cv(e[n],t[n]))return!1;return!0}function cv(e,t){return tt(e)?$a(e,t):tt(t)?$a(t,e):e===t}function $a(e,t){return tt(t)?e.length===t.length&&e.every((n,s)=>n===t[s]):e.length===1&&e[0]===t}function uv(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),s=e.split("/"),r=s[s.length-1];(r===".."||r===".")&&s.push("");let i=n.length-1,o,a;for(o=0;o<s.length;o++)if(a=s[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+s.slice(o-(o===s.length?1:0)).join("/")}var ds;(function(e){e.pop="pop",e.push="push"})(ds||(ds={}));var ts;(function(e){e.back="back",e.forward="forward",e.unknown=""})(ts||(ts={}));function dv(e){if(!e)if(hn){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),ov(e)}const fv=/^[^#]+#/;function pv(e,t){return e.replace(fv,"#")+t}function hv(e,t){const n=document.documentElement.getBoundingClientRect(),s=e.getBoundingClientRect();return{behavior:t.behavior,left:s.left-n.left-(t.left||0),top:s.top-n.top-(t.top||0)}}const Cr=()=>({left:window.pageXOffset,top:window.pageYOffset});function mv(e){let t;if("el"in e){const n=e.el,s=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;t=hv(r,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function La(e,t){return(history.state?history.state.position-t:-1)+e}const wi=new Map;function gv(e,t){wi.set(e,t)}function _v(e){const t=wi.get(e);return wi.delete(e),t}let vv=()=>location.protocol+"//"+location.host;function Jc(e,t){const{pathname:n,search:s,hash:r}=t,i=e.indexOf("#");if(i>-1){let a=r.includes(e.slice(i))?e.slice(i).length:1,l=r.slice(a);return l[0]!=="/"&&(l="/"+l),Ra(l,"")}return Ra(n,e)+s+r}function bv(e,t,n,s){let r=[],i=[],o=null;const a=({state:p})=>{const g=Jc(e,location),O=n.value,E=t.value;let S=0;if(p){if(n.value=g,t.value=p,o&&o===O){o=null;return}S=E?p.position-E.position:0}else s(g);r.forEach(I=>{I(n.value,O,{delta:S,type:ds.pop,direction:S?S>0?ts.forward:ts.back:ts.unknown})})};function l(){o=n.value}function c(p){r.push(p);const g=()=>{const O=r.indexOf(p);O>-1&&r.splice(O,1)};return i.push(g),g}function u(){const{history:p}=window;p.state&&p.replaceState(pe({},p.state,{scroll:Cr()}),"")}function d(){for(const p of i)p();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:d}}function Ma(e,t,n,s=!1,r=!1){return{back:e,current:t,forward:n,replaced:s,position:window.history.length,scroll:r?Cr():null}}function yv(e){const{history:t,location:n}=window,s={value:Jc(e,n)},r={value:t.state};r.value||i(s.value,{back:null,current:s.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function i(l,c,u){const d=e.indexOf("#"),p=d>-1?(n.host&&document.querySelector("base")?e:e.slice(d))+l:vv()+e+l;try{t[u?"replaceState":"pushState"](c,"",p),r.value=c}catch(g){console.error(g),n[u?"replace":"assign"](p)}}function o(l,c){const u=pe({},t.state,Ma(r.value.back,l,r.value.forward,!0),c,{position:r.value.position});i(l,u,!0),s.value=l}function a(l,c){const u=pe({},r.value,t.state,{forward:l,scroll:Cr()});i(u.current,u,!0);const d=pe({},Ma(s.value,l,null),{position:u.position+1},c);i(l,d,!1),s.value=l}return{location:s,state:r,push:a,replace:o}}function wv(e){e=dv(e);const t=yv(e),n=bv(e,t.state,t.location,t.replace);function s(i,o=!0){o||n.pauseListeners(),history.go(i)}const r=pe({location:"",base:e,go:s,createHref:pv.bind(null,e)},t,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>t.state.value}),r}function Ev(e){return typeof e=="string"||e&&typeof e=="object"}function eu(e){return typeof e=="string"||typeof e=="symbol"}const Ct={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},tu=Symbol("");var Ba;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(Ba||(Ba={}));function xn(e,t){return pe(new Error,{type:e,[tu]:!0},t)}function ht(e,t){return e instanceof Error&&tu in e&&(t==null||!!(e.type&t))}const Fa="[^/]+?",kv={sensitive:!1,strict:!1,start:!0,end:!0},Av=/[.+*?^${}()[\]/\\]/g;function Tv(e,t){const n=pe({},kv,t),s=[];let r=n.start?"^":"";const i=[];for(const c of e){const u=c.length?[]:[90];n.strict&&!c.length&&(r+="/");for(let d=0;d<c.length;d++){const p=c[d];let g=40+(n.sensitive?.25:0);if(p.type===0)d||(r+="/"),r+=p.value.replace(Av,"\\$&"),g+=40;else if(p.type===1){const{value:O,repeatable:E,optional:S,regexp:I}=p;i.push({name:O,repeatable:E,optional:S});const m=I||Fa;if(m!==Fa){g+=10;try{new RegExp(`(${m})`)}catch(v){throw new Error(`Invalid custom RegExp for param "${O}" (${m}): `+v.message)}}let _=E?`((?:${m})(?:/(?:${m}))*)`:`(${m})`;d||(_=S&&c.length<2?`(?:/${_})`:"/"+_),S&&(_+="?"),r+=_,g+=20,S&&(g+=-8),E&&(g+=-20),m===".*"&&(g+=-50)}u.push(g)}s.push(u)}if(n.strict&&n.end){const c=s.length-1;s[c][s[c].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function a(c){const u=c.match(o),d={};if(!u)return null;for(let p=1;p<u.length;p++){const g=u[p]||"",O=i[p-1];d[O.name]=g&&O.repeatable?g.split("/"):g}return d}function l(c){let u="",d=!1;for(const p of e){(!d||!u.endsWith("/"))&&(u+="/"),d=!1;for(const g of p)if(g.type===0)u+=g.value;else if(g.type===1){const{value:O,repeatable:E,optional:S}=g,I=O in c?c[O]:"";if(tt(I)&&!E)throw new Error(`Provided param "${O}" is an array but it is not repeatable (* or + modifiers)`);const m=tt(I)?I.join("/"):I;if(!m)if(S)p.length<2&&(u.endsWith("/")?u=u.slice(0,-1):d=!0);else throw new Error(`Missing required param "${O}"`);u+=m}}return u||"/"}return{re:o,score:s,keys:i,parse:a,stringify:l}}function Sv(e,t){let n=0;for(;n<e.length&&n<t.length;){const s=t[n]-e[n];if(s)return s;n++}return e.length<t.length?e.length===1&&e[0]===40+40?-1:1:e.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function Cv(e,t){let n=0;const s=e.score,r=t.score;for(;n<s.length&&n<r.length;){const i=Sv(s[n],r[n]);if(i)return i;n++}if(Math.abs(r.length-s.length)===1){if(Va(s))return 1;if(Va(r))return-1}return r.length-s.length}function Va(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const Iv={type:0,value:""},Ov=/[a-zA-Z0-9_]/;function xv(e){if(!e)return[[]];if(e==="/")return[[Iv]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(g){throw new Error(`ERR (${n})/"${c}": ${g}`)}let n=0,s=n;const r=[];let i;function o(){i&&r.push(i),i=[]}let a=0,l,c="",u="";function d(){c&&(n===0?i.push({type:0,value:c}):n===1||n===2||n===3?(i.length>1&&(l==="*"||l==="+")&&t(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):t("Invalid state to consume buffer"),c="")}function p(){c+=l}for(;a<e.length;){if(l=e[a++],l==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:l==="/"?(c&&d(),o()):l===":"?(d(),n=1):p();break;case 4:p(),n=s;break;case 1:l==="("?n=2:Ov.test(l)?p():(d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${c}"`),d(),o(),r}function Pv(e,t,n){const s=Tv(xv(e.path),n),r=pe(s,{record:e,parent:t,children:[],alias:[]});return t&&!r.record.aliasOf==!t.record.aliasOf&&t.children.push(r),r}function Nv(e,t){const n=[],s=new Map;t=ja({strict:!1,end:!0,sensitive:!1},t);function r(u){return s.get(u)}function i(u,d,p){const g=!p,O=Dv(u);O.aliasOf=p&&p.record;const E=ja(t,u),S=[O];if("alias"in u){const _=typeof u.alias=="string"?[u.alias]:u.alias;for(const v of _)S.push(pe({},O,{components:p?p.record.components:O.components,path:v,aliasOf:p?p.record:O}))}let I,m;for(const _ of S){const{path:v}=_;if(d&&v[0]!=="/"){const y=d.record.path,T=y[y.length-1]==="/"?"":"/";_.path=d.record.path+(v&&T+v)}if(I=Pv(_,d,E),p?p.alias.push(I):(m=m||I,m!==I&&m.alias.push(I),g&&u.name&&!Ha(I)&&o(u.name)),O.children){const y=O.children;for(let T=0;T<y.length;T++)i(y[T],I,p&&p.children[T])}p=p||I,(I.record.components&&Object.keys(I.record.components).length||I.record.name||I.record.redirect)&&l(I)}return m?()=>{o(m)}:es}function o(u){if(eu(u)){const d=s.get(u);d&&(s.delete(u),n.splice(n.indexOf(d),1),d.children.forEach(o),d.alias.forEach(o))}else{const d=n.indexOf(u);d>-1&&(n.splice(d,1),u.record.name&&s.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function l(u){let d=0;for(;d<n.length&&Cv(u,n[d])>=0&&(u.record.path!==n[d].record.path||!nu(u,n[d]));)d++;n.splice(d,0,u),u.record.name&&!Ha(u)&&s.set(u.record.name,u)}function c(u,d){let p,g={},O,E;if("name"in u&&u.name){if(p=s.get(u.name),!p)throw xn(1,{location:u});E=p.record.name,g=pe(Wa(d.params,p.keys.filter(m=>!m.optional).map(m=>m.name)),u.params&&Wa(u.params,p.keys.map(m=>m.name))),O=p.stringify(g)}else if("path"in u)O=u.path,p=n.find(m=>m.re.test(O)),p&&(g=p.parse(O),E=p.record.name);else{if(p=d.name?s.get(d.name):n.find(m=>m.re.test(d.path)),!p)throw xn(1,{location:u,currentLocation:d});E=p.record.name,g=pe({},d.params,u.params),O=p.stringify(g)}const S=[];let I=p;for(;I;)S.unshift(I.record),I=I.parent;return{name:E,path:O,params:g,matched:S,meta:$v(S)}}return e.forEach(u=>i(u)),{addRoute:i,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:r}}function Wa(e,t){const n={};for(const s of t)s in e&&(n[s]=e[s]);return n}function Dv(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:Rv(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function Rv(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const s in e.components)t[s]=typeof n=="boolean"?n:n[s];return t}function Ha(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function $v(e){return e.reduce((t,n)=>pe(t,n.meta),{})}function ja(e,t){const n={};for(const s in e)n[s]=s in t?t[s]:e[s];return n}function nu(e,t){return t.children.some(n=>n===e||nu(e,n))}const su=/#/g,Lv=/&/g,Mv=/\//g,Bv=/=/g,Fv=/\?/g,ru=/\+/g,Vv=/%5B/g,Wv=/%5D/g,iu=/%5E/g,Hv=/%60/g,ou=/%7B/g,jv=/%7C/g,au=/%7D/g,Uv=/%20/g;function co(e){return encodeURI(""+e).replace(jv,"|").replace(Vv,"[").replace(Wv,"]")}function qv(e){return co(e).replace(ou,"{").replace(au,"}").replace(iu,"^")}function Ei(e){return co(e).replace(ru,"%2B").replace(Uv,"+").replace(su,"%23").replace(Lv,"%26").replace(Hv,"`").replace(ou,"{").replace(au,"}").replace(iu,"^")}function zv(e){return Ei(e).replace(Bv,"%3D")}function Kv(e){return co(e).replace(su,"%23").replace(Fv,"%3F")}function Gv(e){return e==null?"":Kv(e).replace(Mv,"%2F")}function tr(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function Yv(e){const t={};if(e===""||e==="?")return t;const s=(e[0]==="?"?e.slice(1):e).split("&");for(let r=0;r<s.length;++r){const i=s[r].replace(ru," "),o=i.indexOf("="),a=tr(o<0?i:i.slice(0,o)),l=o<0?null:tr(i.slice(o+1));if(a in t){let c=t[a];tt(c)||(c=t[a]=[c]),c.push(l)}else t[a]=l}return t}function Ua(e){let t="";for(let n in e){const s=e[n];if(n=zv(n),s==null){s!==void 0&&(t+=(t.length?"&":"")+n);continue}(tt(s)?s.map(i=>i&&Ei(i)):[s&&Ei(s)]).forEach(i=>{i!==void 0&&(t+=(t.length?"&":"")+n,i!=null&&(t+="="+i))})}return t}function Xv(e){const t={};for(const n in e){const s=e[n];s!==void 0&&(t[n]=tt(s)?s.map(r=>r==null?null:""+r):s==null?s:""+s)}return t}const Qv=Symbol(""),qa=Symbol(""),uo=Symbol(""),lu=Symbol(""),ki=Symbol("");function Un(){let e=[];function t(s){return e.push(s),()=>{const r=e.indexOf(s);r>-1&&e.splice(r,1)}}function n(){e=[]}return{add:t,list:()=>e,reset:n}}function xt(e,t,n,s,r){const i=s&&(s.enterCallbacks[r]=s.enterCallbacks[r]||[]);return()=>new Promise((o,a)=>{const l=d=>{d===!1?a(xn(4,{from:n,to:t})):d instanceof Error?a(d):Ev(d)?a(xn(2,{from:t,to:d})):(i&&s.enterCallbacks[r]===i&&typeof d=="function"&&i.push(d),o())},c=e.call(s&&s.instances[r],t,n,l);let u=Promise.resolve(c);e.length<3&&(u=u.then(l)),u.catch(d=>a(d))})}function Gr(e,t,n,s){const r=[];for(const i of e)for(const o in i.components){let a=i.components[o];if(!(t!=="beforeRouteEnter"&&!i.instances[o]))if(Zv(a)){const c=(a.__vccOpts||a)[t];c&&r.push(xt(c,n,s,i,o))}else{let l=a();r.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const u=rv(c)?c.default:c;i.components[o]=u;const p=(u.__vccOpts||u)[t];return p&&xt(p,n,s,i,o)()}))}}return r}function Zv(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function za(e){const t=ut(uo),n=ut(lu),s=je(()=>t.resolve(Jt(e.to))),r=je(()=>{const{matched:l}=s.value,{length:c}=l,u=l[c-1],d=n.matched;if(!u||!d.length)return-1;const p=d.findIndex(On.bind(null,u));if(p>-1)return p;const g=Ka(l[c-2]);return c>1&&Ka(u)===g&&d[d.length-1].path!==g?d.findIndex(On.bind(null,l[c-2])):p}),i=je(()=>r.value>-1&&nb(n.params,s.value.params)),o=je(()=>r.value>-1&&r.value===n.matched.length-1&&Zc(n.params,s.value.params));function a(l={}){return tb(l)?t[Jt(e.replace)?"replace":"push"](Jt(e.to)).catch(es):Promise.resolve()}return{route:s,href:je(()=>s.value.href),isActive:i,isExactActive:o,navigate:a}}const Jv=no({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:za,setup(e,{slots:t}){const n=Fn(za(e)),{options:s}=ut(uo),r=je(()=>({[Ga(e.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[Ga(e.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=t.default&&t.default(n);return e.custom?i:Kc("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},i)}}}),eb=Jv;function tb(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function nb(e,t){for(const n in t){const s=t[n],r=e[n];if(typeof s=="string"){if(s!==r)return!1}else if(!tt(r)||r.length!==s.length||s.some((i,o)=>i!==r[o]))return!1}return!0}function Ka(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Ga=(e,t,n)=>e??t??n,sb=no({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const s=ut(ki),r=je(()=>e.route||s.value),i=ut(qa,0),o=je(()=>{let c=Jt(i);const{matched:u}=r.value;let d;for(;(d=u[c])&&!d.components;)c++;return c}),a=je(()=>r.value.matched[o.value]);Fs(qa,je(()=>o.value+1)),Fs(Qv,a),Fs(ki,r);const l=vr();return Yn(()=>[l.value,a.value,e.name],([c,u,d],[p,g,O])=>{u&&(u.instances[d]=c,g&&g!==u&&c&&c===p&&(u.leaveGuards.size||(u.leaveGuards=g.leaveGuards),u.updateGuards.size||(u.updateGuards=g.updateGuards))),c&&u&&(!g||!On(u,g)||!p)&&(u.enterCallbacks[d]||[]).forEach(E=>E(c))},{flush:"post"}),()=>{const c=r.value,u=e.name,d=a.value,p=d&&d.components[u];if(!p)return Ya(n.default,{Component:p,route:c});const g=d.props[u],O=g?g===!0?c.params:typeof g=="function"?g(c):g:null,S=Kc(p,pe({},O,t,{onVnodeUnmounted:I=>{I.component.isUnmounted&&(d.instances[u]=null)},ref:l}));return Ya(n.default,{Component:S,route:c})||S}}});function Ya(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const cu=sb;function rb(e){const t=Nv(e.routes,e),n=e.parseQuery||Yv,s=e.stringifyQuery||Ua,r=e.history,i=Un(),o=Un(),a=Un(),l=ug(Ct);let c=Ct;hn&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=zr.bind(null,k=>""+k),d=zr.bind(null,Gv),p=zr.bind(null,tr);function g(k,F){let B,U;return eu(k)?(B=t.getRecordMatcher(k),U=F):U=k,t.addRoute(U,B)}function O(k){const F=t.getRecordMatcher(k);F&&t.removeRoute(F)}function E(){return t.getRoutes().map(k=>k.record)}function S(k){return!!t.getRecordMatcher(k)}function I(k,F){if(F=pe({},F||l.value),typeof k=="string"){const b=Kr(n,k,F.path),A=t.resolve({path:b.path},F),C=r.createHref(b.fullPath);return pe(b,A,{params:p(A.params),hash:tr(b.hash),redirectedFrom:void 0,href:C})}let B;if("path"in k)B=pe({},k,{path:Kr(n,k.path,F.path).path});else{const b=pe({},k.params);for(const A in b)b[A]==null&&delete b[A];B=pe({},k,{params:d(b)}),F.params=d(F.params)}const U=t.resolve(B,F),ne=k.hash||"";U.params=u(p(U.params));const f=av(s,pe({},k,{hash:qv(ne),path:U.path})),h=r.createHref(f);return pe({fullPath:f,hash:ne,query:s===Ua?Xv(k.query):k.query||{}},U,{redirectedFrom:void 0,href:h})}function m(k){return typeof k=="string"?Kr(n,k,l.value.path):pe({},k)}function _(k,F){if(c!==k)return xn(8,{from:F,to:k})}function v(k){return R(k)}function y(k){return v(pe(m(k),{replace:!0}))}function T(k){const F=k.matched[k.matched.length-1];if(F&&F.redirect){const{redirect:B}=F;let U=typeof B=="function"?B(k):B;return typeof U=="string"&&(U=U.includes("?")||U.includes("#")?U=m(U):{path:U},U.params={}),pe({query:k.query,hash:k.hash,params:"path"in U?{}:k.params},U)}}function R(k,F){const B=c=I(k),U=l.value,ne=k.state,f=k.force,h=k.replace===!0,b=T(B);if(b)return R(pe(m(b),{state:typeof b=="object"?pe({},ne,b.state):ne,force:f,replace:h}),F||B);const A=B;A.redirectedFrom=F;let C;return!f&&lv(s,U,B)&&(C=xn(16,{to:A,from:U}),Se(U,U,!0,!1)),(C?Promise.resolve(C):H(A,U)).catch(P=>ht(P)?ht(P,2)?P:Ee(P):G(P,A,U)).then(P=>{if(P){if(ht(P,2))return R(pe({replace:h},m(P.to),{state:typeof P.to=="object"?pe({},ne,P.to.state):ne,force:f}),F||A)}else P=ie(A,U,!0,h,ne);return X(A,U,P),P})}function M(k,F){const B=_(k,F);return B?Promise.reject(B):Promise.resolve()}function x(k){const F=ye.values().next().value;return F&&typeof F.runWithContext=="function"?F.runWithContext(k):k()}function H(k,F){let B;const[U,ne,f]=ib(k,F);B=Gr(U.reverse(),"beforeRouteLeave",k,F);for(const b of U)b.leaveGuards.forEach(A=>{B.push(xt(A,k,F))});const h=M.bind(null,k,F);return B.push(h),me(B).then(()=>{B=[];for(const b of i.list())B.push(xt(b,k,F));return B.push(h),me(B)}).then(()=>{B=Gr(ne,"beforeRouteUpdate",k,F);for(const b of ne)b.updateGuards.forEach(A=>{B.push(xt(A,k,F))});return B.push(h),me(B)}).then(()=>{B=[];for(const b of k.matched)if(b.beforeEnter&&!F.matched.includes(b))if(tt(b.beforeEnter))for(const A of b.beforeEnter)B.push(xt(A,k,F));else B.push(xt(b.beforeEnter,k,F));return B.push(h),me(B)}).then(()=>(k.matched.forEach(b=>b.enterCallbacks={}),B=Gr(f,"beforeRouteEnter",k,F),B.push(h),me(B))).then(()=>{B=[];for(const b of o.list())B.push(xt(b,k,F));return B.push(h),me(B)}).catch(b=>ht(b,8)?b:Promise.reject(b))}function X(k,F,B){for(const U of a.list())x(()=>U(k,F,B))}function ie(k,F,B,U,ne){const f=_(k,F);if(f)return f;const h=F===Ct,b=hn?history.state:{};B&&(U||h?r.replace(k.fullPath,pe({scroll:h&&b&&b.scroll},ne)):r.push(k.fullPath,ne)),l.value=k,Se(k,F,B,h),Ee()}let ue;function Ie(){ue||(ue=r.listen((k,F,B)=>{if(!Ce.listening)return;const U=I(k),ne=T(U);if(ne){R(pe(ne,{replace:!0}),U).catch(es);return}c=U;const f=l.value;hn&&gv(La(f.fullPath,B.delta),Cr()),H(U,f).catch(h=>ht(h,12)?h:ht(h,2)?(R(h.to,U).then(b=>{ht(b,20)&&!B.delta&&B.type===ds.pop&&r.go(-1,!1)}).catch(es),Promise.reject()):(B.delta&&r.go(-B.delta,!1),G(h,U,f))).then(h=>{h=h||ie(U,f,!1),h&&(B.delta&&!ht(h,8)?r.go(-B.delta,!1):B.type===ds.pop&&ht(h,20)&&r.go(-1,!1)),X(U,f,h)}).catch(es)}))}let be=Un(),Q=Un(),J;function G(k,F,B){Ee(k);const U=Q.list();return U.length?U.forEach(ne=>ne(k,F,B)):console.error(k),Promise.reject(k)}function he(){return J&&l.value!==Ct?Promise.resolve():new Promise((k,F)=>{be.add([k,F])})}function Ee(k){return J||(J=!k,Ie(),be.list().forEach(([F,B])=>k?B(k):F()),be.reset()),k}function Se(k,F,B,U){const{scrollBehavior:ne}=e;if(!hn||!ne)return Promise.resolve();const f=!B&&_v(La(k.fullPath,0))||(U||!B)&&history.state&&history.state.scroll||null;return eo().then(()=>ne(k,F,f)).then(h=>h&&mv(h)).catch(h=>G(h,k,F))}const ce=k=>r.go(k);let Ve;const ye=new Set,Ce={currentRoute:l,listening:!0,addRoute:g,removeRoute:O,hasRoute:S,getRoutes:E,resolve:I,options:e,push:v,replace:y,go:ce,back:()=>ce(-1),forward:()=>ce(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:Q.add,isReady:he,install(k){const F=this;k.component("RouterLink",eb),k.component("RouterView",cu),k.config.globalProperties.$router=F,Object.defineProperty(k.config.globalProperties,"$route",{enumerable:!0,get:()=>Jt(l)}),hn&&!Ve&&l.value===Ct&&(Ve=!0,v(r.location).catch(ne=>{}));const B={};for(const ne in Ct)B[ne]=je(()=>l.value[ne]);k.provide(uo,F),k.provide(lu,Fn(B)),k.provide(ki,l);const U=k.unmount;ye.add(k),k.unmount=function(){ye.delete(k),ye.size<1&&(c=Ct,ue&&ue(),ue=null,l.value=Ct,Ve=!1,J=!1),U()}}};function me(k){return k.reduce((F,B)=>F.then(()=>x(B)),Promise.resolve())}return Ce}function ib(e,t){const n=[],s=[],r=[],i=Math.max(t.matched.length,e.matched.length);for(let o=0;o<i;o++){const a=t.matched[o];a&&(e.matched.find(c=>On(c,a))?s.push(a):n.push(a));const l=e.matched[o];l&&(t.matched.find(c=>On(c,l))||r.push(l))}return[n,s,r]}const Te=(e,t)=>{const n=e.__vccOpts||e;for(const[s,r]of t)n[s]=r;return n},ob={},ab={class:"navbar navbar-expand-lg navbar-dark"},lb=f_('<div class="container-fluid" data-v-97c46f66><a class="navbar-brand" href="/" data-v-97c46f66><div style="border:3px solid white;border-radius:5px;background-color:white;background-image:url(&#39;/webapp/logo.png&#39;);background-repeat:round;background-origin:content-box;width:30px;height:30px;" class="d-inline-block align-top" data-v-97c46f66></div> Insightic </a><button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" data-v-97c46f66><span class="navbar-toggler-icon" data-v-97c46f66></span></button><div class="collapse navbar-collapse" id="navbarNav" data-v-97c46f66><ul class="navbar-nav" data-v-97c46f66><li class="nav-item active" data-v-97c46f66><a class="nav-link" href="/webapp" data-v-97c46f66>Organizations</a></li><li class="nav-item" data-v-97c46f66><a class="nav-link" href="#" data-v-97c46f66>Contact Us</a></li></ul></div></div>',1),cb=[lb];function ub(e,t){return W(),z("nav",ab,cb)}const db=Te(ob,[["render",ub],["__scopeId","data-v-97c46f66"]]),fb=no({__name:"App",setup(e){return(t,n)=>(W(),z(ge,null,[re(db),re(Jt(cu))],64))}}),pb={props:{name:String,guid:String},methods:{onClick(){this.$router.push(`/organizations/${this.guid}`)}}};const uu=e=>(vs("data-v-e1e02cda"),e=e(),bs(),e),hb={class:"d-flex",style:{"justify-content":"space-around"}},mb=uu(()=>w("i",{class:"bi bi-boxes"},null,-1)),gb=uu(()=>w("i",{class:"bi bi-chevron-right"},null,-1));function _b(e,t,n,s,r,i){return W(),z("div",{class:"org-button mx-auto",onClick:t[0]||(t[0]=(...o)=>i.onClick&&i.onClick(...o))},[w("div",hb,[mb,w("div",null,ae(n.name),1),gb])])}const vb=Te(pb,[["render",_b],["__scopeId","data-v-e1e02cda"]]),bb=`// Biswap token with Governance.
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
`,yb=`pragma solidity =0.5.16;

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
`,wb=`pragma solidity =0.5.16;

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
`,Eb=`pragma solidity =0.5.16;

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
`,Yr={guid:"e262d5c2-16f8-47a0-8c70-4019514d137a",logo:"/webapp/logos/biswap.jpeg",name:"BiSwap LP",url:"https://biswap.org",author:"John Doe",rating:"B-",description:"BiSwap LP is a liquidity pool for the BiSwap DEX",tags:["P2P Trading","Deposits"],status:"In Progress",dueAt:"2023-05-25T00:00:00.000Z",overview:[{title:"Business Model Analysis",props:[{component:"PropDisplayCard",title:"Business model & Value Proposition",text:"Biswap is a trusted DEX platform on the BNB Chain Network with a Multi-type Referral Program and low trade fee starting from 0.1%. Biswap is the ecosystem that offers the best service and creates new standards in DeFi.",tags:["P2P Trading","Deposits"],regulations:[{text:"https://www.1.com",href:"https://www.1.com"}]},{component:"PropDisplayCard",title:"Customer Segments",text:"Retail investors who need to swap tokens<br/>Institutiona funds who conduct AMM business<br/>VASPs who IDO"}]},{title:"Social Media Analysis",props:[{component:"PropDisplayCard",title:"Twitter Analysis",text:"Biswap is a trusted DEX platform on the BNB Chain Network with a Multi-type Referral Program and low trade fee starting from 0.1%. Biswap is the ecosystem that offers the best service and creates new standards in DeFi.",tags:["P2P Trading","Deposits"],regulations:[{text:"https://www.1.com",href:"https://www.1.com"}]},{component:"PropDisplayCard",title:"Blog Analysis",text:"Retail investors who need to swap tokens<br/>Institutiona funds who conduct AMM business<br/>VASPs who IDO"}]},{title:"On-Chain Data Analysis",props:[{component:"PropDisplayKeyValue",title:"Pools & Volume",values:[{key:"Number of Pools",value:"3,234,132"},{key:"7 Days Volume",value:"$76,261,658"},{key:"24 Hrs Volumne",value:"$5,291,480"},{key:"Changes",value:"-61.71%"}]},{component:"PropDisplayKeyValue",title:"Customer Persona",values:[{key:"Unique Address",value:"1,2888,378"},{key:"Bot Rate",value:"21%"},{key:"Retails / Total (volume)",value:"26%"},{key:"Retails / Total (Acct.)",value:"86%"}]}]},{title:"Team Background Analysis",props:[{component:"PropDisplayCard",title:"On-Chain Analysis",text:"Biswap is a trusted DEX platform on the BNB Chain Network with a Multi-type Referral Program and low trade fee starting from 0.1%. Biswap is the ecosystem that offers the best service and creates new standards in DeFi.",tags:["P2P Trading","Deposits"],regulations:[{text:"https://www.1.com",href:"https://www.1.com"}]},{component:"PropDisplayCard",title:"Twitter Analysis",text:"Retail investors who need to swap tokens<br/>Institutiona funds who conduct AMM business<br/>VASPs who IDO"},{component:"PropDisplayCard",title:"LinkedIn Analysis",text:"Retail investors who need to swap tokens<br/>Institutiona funds who conduct AMM business<br/>VASPs who IDO"}]}],assessment:{contracts:{"BSWToken.sol":bb,"BiswapERC20.sol":yb,"BiswapFactory.sol":wb,"BiswapPair.sol":Eb}}},kb=`// SPDX-License-Identifier: MIT  
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
}`,Ab=`// SPDX-License-Identifier: NO LICENSE  

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
}`,Tb=`// SPDX-License-Identifier: NO LICENSE  

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
}`,Sb=`// SPDX-License-Identifier: NO LICENSE
pragma solidity ^0.8.0;

interface IControllable1155 {
  function mint(address recipient, uint256 id, uint256 amount) external;
}`,Xr={guid:"e262d5c2-16f8-47a0-8c70-4019514d137b",logo:"/webapp/logos/wolfgame.jpeg",name:"Wolf Game",url:"https://wolf.game",author:"John Doe",rating:"B-",description:"Wolf Game is a game where you play as a wolf",tags:["Game","NFT"],status:"In Progress",dueAt:"2023-05-25T00:00:00.000Z",overview:[{title:"Business Model Analysis",props:[{component:"PropDisplayCard",title:"Business model & Value Proposition",text:"Biswap is a trusted DEX platform on the BNB Chain Network with a Multi-type Referral Program and low trade fee starting from 0.1%. Biswap is the ecosystem that offers the best service and creates new standards in DeFi.",tags:["P2P Trading","Deposits"],regulations:[{text:"https://www.1.com",href:"https://www.1.com"}]},{component:"PropDisplayCard",title:"Customer Segments",text:"Retail investors who need to swap tokens<br/>Institutiona funds who conduct AMM business<br/>VASPs who IDO"}]},{title:"Social Media Analysis",props:[{component:"PropDisplayCard",title:"Twitter Analysis",text:"Biswap is a trusted DEX platform on the BNB Chain Network with a Multi-type Referral Program and low trade fee starting from 0.1%. Biswap is the ecosystem that offers the best service and creates new standards in DeFi.",tags:["P2P Trading","Deposits"],regulations:[{text:"https://www.1.com",href:"https://www.1.com"}]},{component:"PropDisplayCard",title:"Blog Analysis",text:"Retail investors who need to swap tokens<br/>Institutiona funds who conduct AMM business<br/>VASPs who IDO"}]},{title:"On-Chain Data Analysis",props:[{component:"PropDisplayKeyValue",title:"Pools & Volume",values:[{key:"Number of Pools",value:"3,234,132"},{key:"7 Days Volume",value:"$76,261,658"},{key:"24 Hrs Volumne",value:"$5,291,480"},{key:"Changes",value:"-61.71%"}]},{component:"PropDisplayKeyValue",title:"Customer Persona",values:[{key:"Unique Address",value:"1,2888,378"},{key:"Bot Rate",value:"21%"},{key:"Retails / Total (volume)",value:"26%"},{key:"Retails / Total (Acct.)",value:"86%"}]}]},{title:"Team Background Analysis",props:[{component:"PropDisplayCard",title:"On-Chain Analysis",text:"Biswap is a trusted DEX platform on the BNB Chain Network with a Multi-type Referral Program and low trade fee starting from 0.1%. Biswap is the ecosystem that offers the best service and creates new standards in DeFi.",tags:["P2P Trading","Deposits"],regulations:[{text:"https://www.1.com",href:"https://www.1.com"}]},{component:"PropDisplayCard",title:"Twitter Analysis",text:"Retail investors who need to swap tokens<br/>Institutiona funds who conduct AMM business<br/>VASPs who IDO"},{component:"PropDisplayCard",title:"LinkedIn Analysis",text:"Retail investors who need to swap tokens<br/>Institutiona funds who conduct AMM business<br/>VASPs who IDO"}]}],assessment:{contracts:{"Allegiance.sol":kb,"CaveGame.sol":Ab,"FarmerGem.sol":Tb,"IControllable1155.sol":Sb}}},Qr={guid:"e262d5c2-16f8-47a0-8c70-4019514d137c",logo:"/webapp/logos/pooltogether.jpeg",name:"Pool Together",url:"https://pooltogether.com",author:"John Doe",rating:"B-",description:"Pool Together is a lottery game",tags:["Pool","NFT"],status:"In Progress",dueAt:"2023-05-25T00:00:00.000Z",overview:[{title:"Business Model Analysis",props:[{component:"PropDisplayCard",title:"Business model & Value Proposition",text:"Biswap is a trusted DEX platform on the BNB Chain Network with a Multi-type Referral Program and low trade fee starting from 0.1%. Biswap is the ecosystem that offers the best service and creates new standards in DeFi.",tags:["P2P Trading","Deposits"],regulations:[{text:"https://www.1.com",href:"https://www.1.com"}]},{component:"PropDisplayCard",title:"Customer Segments",text:"Retail investors who need to swap tokens<br/>Institutiona funds who conduct AMM business<br/>VASPs who IDO"}]},{title:"Social Media Analysis",props:[{component:"PropDisplayCard",title:"Twitter Analysis",text:"Biswap is a trusted DEX platform on the BNB Chain Network with a Multi-type Referral Program and low trade fee starting from 0.1%. Biswap is the ecosystem that offers the best service and creates new standards in DeFi.",tags:["P2P Trading","Deposits"],regulations:[{text:"https://www.1.com",href:"https://www.1.com"}]},{component:"PropDisplayCard",title:"Blog Analysis",text:"Retail investors who need to swap tokens<br/>Institutiona funds who conduct AMM business<br/>VASPs who IDO"}]},{title:"On-Chain Data Analysis",props:[{component:"PropDisplayKeyValue",title:"Pools & Volume",values:[{key:"Number of Pools",value:"3,234,132"},{key:"7 Days Volume",value:"$76,261,658"},{key:"24 Hrs Volumne",value:"$5,291,480"},{key:"Changes",value:"-61.71%"}]},{component:"PropDisplayKeyValue",title:"Customer Persona",values:[{key:"Unique Address",value:"1,2888,378"},{key:"Bot Rate",value:"21%"},{key:"Retails / Total (volume)",value:"26%"},{key:"Retails / Total (Acct.)",value:"86%"}]}]},{title:"Team Background Analysis",props:[{component:"PropDisplayCard",title:"On-Chain Analysis",text:"Biswap is a trusted DEX platform on the BNB Chain Network with a Multi-type Referral Program and low trade fee starting from 0.1%. Biswap is the ecosystem that offers the best service and creates new standards in DeFi.",tags:["P2P Trading","Deposits"],regulations:[{text:"https://www.1.com",href:"https://www.1.com"}]},{component:"PropDisplayCard",title:"Twitter Analysis",text:"Retail investors who need to swap tokens<br/>Institutiona funds who conduct AMM business<br/>VASPs who IDO"},{component:"PropDisplayCard",title:"LinkedIn Analysis",text:"Retail investors who need to swap tokens<br/>Institutiona funds who conduct AMM business<br/>VASPs who IDO"}]}]},Zr={guid:"e262d5c2-16f8-47a0-8c70-4019514d137d",logo:"/webapp/logos/olympus.jpeg",name:"Olympus",url:"https://olympusdao.finance",author:"John Doe",rating:"B-",description:"Olympus is a stablecoin",tags:["Stablecoin","NFT"],status:"In Progress",dueAt:"2023-05-25T00:00:00.000Z",overview:[{title:"Business Model Analysis",props:[{component:"PropDisplayCard",title:"Business model & Value Proposition",text:"Biswap is a trusted DEX platform on the BNB Chain Network with a Multi-type Referral Program and low trade fee starting from 0.1%. Biswap is the ecosystem that offers the best service and creates new standards in DeFi.",tags:["P2P Trading","Deposits"],regulations:[{text:"https://www.1.com",href:"https://www.1.com"}]},{component:"PropDisplayCard",title:"Customer Segments",text:"Retail investors who need to swap tokens<br/>Institutiona funds who conduct AMM business<br/>VASPs who IDO"}]},{title:"Social Media Analysis",props:[{component:"PropDisplayCard",title:"Twitter Analysis",text:"Biswap is a trusted DEX platform on the BNB Chain Network with a Multi-type Referral Program and low trade fee starting from 0.1%. Biswap is the ecosystem that offers the best service and creates new standards in DeFi.",tags:["P2P Trading","Deposits"],regulations:[{text:"https://www.1.com",href:"https://www.1.com"}]},{component:"PropDisplayCard",title:"Blog Analysis",text:"Retail investors who need to swap tokens<br/>Institutiona funds who conduct AMM business<br/>VASPs who IDO"}]},{title:"On-Chain Data Analysis",props:[{component:"PropDisplayKeyValue",title:"Pools & Volume",values:[{key:"Number of Pools",value:"3,234,132"},{key:"7 Days Volume",value:"$76,261,658"},{key:"24 Hrs Volumne",value:"$5,291,480"},{key:"Changes",value:"-61.71%"}]},{component:"PropDisplayKeyValue",title:"Customer Persona",values:[{key:"Unique Address",value:"1,2888,378"},{key:"Bot Rate",value:"21%"},{key:"Retails / Total (volume)",value:"26%"},{key:"Retails / Total (Acct.)",value:"86%"}]}]},{title:"Team Background Analysis",props:[{component:"PropDisplayCard",title:"On-Chain Analysis",text:"Biswap is a trusted DEX platform on the BNB Chain Network with a Multi-type Referral Program and low trade fee starting from 0.1%. Biswap is the ecosystem that offers the best service and creates new standards in DeFi.",tags:["P2P Trading","Deposits"],regulations:[{text:"https://www.1.com",href:"https://www.1.com"}]},{component:"PropDisplayCard",title:"Twitter Analysis",text:"Retail investors who need to swap tokens<br/>Institutiona funds who conduct AMM business<br/>VASPs who IDO"},{component:"PropDisplayCard",title:"LinkedIn Analysis",text:"Retail investors who need to swap tokens<br/>Institutiona funds who conduct AMM business<br/>VASPs who IDO"}]}]},Jr={guid:"e262d5c2-16f8-47a0-8c70-4019514d137e",logo:"/webapp/logos/eulerfinance.png",name:"Euler Finance",url:"https://euler.finance",author:"John Doe",rating:"B-",description:"Euler Finance is a DeFi protocol",tags:["DeFi","NFT"],status:"In Progress",dueAt:"2023-05-25T00:00:00.000Z",overview:[{title:"Business Model Analysis",props:[{component:"PropDisplayCard",title:"Business model & Value Proposition",text:"Euler's business model revolves around providing decentralized lending and borrowing services on the Ethereum blockchain. It generates revenue through interest accrued on loans, with a portion held in reserves for bad debts. The model relies on the Euler Governance Token (EUL) for protocol management, enabling a decentralized approach. Euler offers a unique value proposition by enabling permissionless listings, asset tiering for risk management, tokenized debts, protected collateral, feeless flash loans, and risk-adjusted borrowing capacity. By leveraging decentralized price oracles, Euler ensures a secure and transparent experience for users, promoting capital efficiency and a user-centric approach.",tags:["Loan","P2P Trading","Collateral Control","Deposits","Risk Management","DAO","Flashloan","Price Oracle"],regulations:[{text:"ref1",href:"https://en.adgm.thomsonreuters.com/rulebook/guidance-regulation-digital-securities-activities-adgm-24-february-2020"},{text:"ref2",href:"https://www.mas.gov.sg/regulation/explainers/a-guide-to-digital-token-offerings"}]},{component:"PropDisplayCard",title:"Customer Segments",text:"Individuals and institutions cryptocurrency adopters: both lender and borrowers for various purposes, such as earning interest, leveraging trading positions, liquidity provision, or covering short-term expenses.<br/>Developers: Those looking to build applications, products, or services on top of Euler's protocol, leveraging its features such as tokenized debts and feeless flash loans. <br/><a href='https://chain.link/education-hub/flash-loans'>Flash loans</a> applier<br/>Governance participants: token holders who want to contribute to the platform's development and decision-making process by participating in governance proposals and voting."}]},{title:"DAO Governance Analysis",props:[{component:"PropDisplayKeyValue",title:"Governance Monitoring",values:[{key:"Number of Proposals",value:"83"},{key:"Smart Contract Changes",value:"6 times"},{key:"Grant Changes",value:"12 times"},{key:"Skewness of voting power",value:"high"}]},{component:"PropDisplayTable",title:"Important Events",headers:["Event","Status","Date"],rows:[["Contract Upgrades (eIP 14)","SUCCEEDED","Aug 12, 2022"],["Move All Asset Price Oracles to Chainlink","SUCCEEDED","Sep 5, 2022"],["Update the Interest Rate Model","SUCCEEDED","Feb 19, 2023"]]}]},{title:"On-Chain Data Analysis",props:[{component:"PropDisplayKeyValue",title:"Pools & Volume",values:[{key:"Number of Pools",value:"1555"},{key:"TVL",value:"$113,934"},{key:"Changes",value:"-11.42%"}]},{component:"PropDisplayKeyValue",title:"Customer Persona",values:[{key:"Unique Address",value:"288,378"},{key:"Bot Rate",value:"31%"},{key:"Retails / Total (volume)",value:"16%"},{key:"Retails / Total (Acct.)",value:"86%"}]}]},{title:"Team Background Analysis",props:[{component:"PropDisplayCard",title:"On-Chain Analysis",text:"Biswap is a trusted DEX platform on the BNB Chain Network with a Multi-type Referral Program and low trade fee starting from 0.1%. Biswap is the ecosystem that offers the best service and creates new standards in DeFi.",tags:["P2P Trading","Deposits"],regulations:[{text:"https://www.1.com",href:"https://www.1.com"}]},{component:"PropDisplayCard",title:"Twitter Analysis",text:"Retail investors who need to swap tokens<br/>Institutiona funds who conduct AMM business<br/>VASPs who IDO"},{component:"PropDisplayCard",title:"LinkedIn Analysis",text:"Retail investors who need to swap tokens<br/>Institutiona funds who conduct AMM business<br/>VASPs who IDO"}]}]},ei={guid:"e262d5c2-16f8-47a0-8d10-4019514d137a",logo:"/webapp/logos/neopin.png",name:"Neopin",url:"https://biswap.org",author:"John Doe",rating:"B",description:"Neopin is a liquidity pool for the BiSwap DEX",tags:["P2P Trading","Deposits"],status:"In Progress",dueAt:"2023-05-25T00:00:00.000Z",overview:[{title:"Business Model Analysis",props:[{component:"PropDisplayCard",title:"Business model & Value Proposition",text:"NEOPIN is a hybrid financial platform blending centralized finance (CeFi) and decentralized finance (DeFi) to connect traditional finance and Web3 markets. By leveraging the stability, security, and regulatory compliance of CeFi and the transparency and accessibility of DeFi, NEOPIN aims to resolve trust and security issues present in both financial sectors. The platform uses its native NEOPIN token (NPT) and allows users to participate in liquidity pools, earning rewards for their contributions through features like staking, swap, and yield farming. NEOPIN is also exploring additional products, including Play-to-Earn games, Stake-to-Earn, Mine-to-Earn, and NFT services, while prioritizing security and regulatory compliance with systems like KYC and AML.",tags:["DeFi","Wallet","Staking","Multi-chain"],regulations:[{text:"ref1",href:"https://en.adgm.thomsonreuters.com/rulebook/guidance-regulation-digital-securities-activities-adgm-24-february-2020"},{text:"ref2",href:"https://www.mas.gov.sg/regulation/explainers/a-guide-to-digital-token-offerings"}]},{component:"PropDisplayCard",title:"Innovation Analysis",text:"Neopin's approach, focusing predominantly on standard token staking, appears to lack the innovative edge often seen in leading blockchain projects. This could limit their competitiveness in a rapidly evolving industry where novelty often drives user adoption and market value."},{component:"PropDisplayCard",title:"Customer Segments",text:"<ol><li>New crypto adopters, retail investors: Individuals who have an interest in cryptocurrencies and digital assets. These people are tech-savvy and open to new financial innovations.</li><li>Compliance-focused entities: Companies, institutions, or individuals that prioritize regulatory compliance in their crypto-related dealings, given NEOPIN's emphasis on KYC and AML procedures.</li><li>DeFi Users: Users already participating in decentralized finance who are seeking new platforms or methods to optimize their earnings.</li><li>Crypto Traders: Both short-term and long-term traders who are seeking a platform offering advanced trading functionalities and high liquidity.</li><li>Game developers and companies: developers and companies can launch Play-to-Earn games</li></ol>"}]},{title:"Security",props:[{component:"PropDisplayCard",title:"Smart Contract",text:"NPT is re-designed to be a multi-chain token that poses potential risks due to the increased complexity of the blockchain architecture. With multiple chains, the risk of smart contract vulnerabilities and bugs increase, which could lead to the loss of tokens or other potential security issues.<br/><br/>NPT deploying all tokens to a single address during contract deployment poses a risk of centralization. This method puts an enormous amount of trust in the contract deployer, who has the power to distribute tokens at their discretion. This central point of control may be prone to misuse or compromise, threatening the integrity and security of the entire system."},{component:"PropDisplayCard",title:"Code Integrity",text:`The deployed NPT smart contract code differs from the audited code.<br/>
                    <a href='https://scope.klaytn.com/account/0xe06597d02a2c3aa7a9708de2cfa587b128bd3815?tabId=contractCode'>Deployed code on Klaytn</a><br/>
                    <a href='https://etherscan.io/token/0x306ee01a6bA3b4a8e993fA2C1ADC7ea24462000c#code'>Deployed code on Ethereum</a><br/>
                    <a href='https://polygonscan.com/address/0x306ee01a6ba3b4a8e993fa2c1adc7ea24462000c#code'>Deployed code on Polygon</a><br/>
                    <a href='https://github.com/Neopin/neopin-audits/blob/master/Audit_Report_20220627_NPT_Staking_And_DEX_Swap_SlowMist.pdf'>Audited Code in Audit Report</a><br/>
                    <br/>
                    Multichain token smart contract is not audited.`},{component:"PropDisplayTable",title:"Audit Report",headers:["Report","Date","By","Coverage"],rows:[["1","Aug 2021","CertiK","Token"],["2","March 2022","SlowMist","Token + Lockup"]]},{component:"PropDisplayCard",title:"",text:`Neopin's audit reports are outdated and infrequent.
                    <br/>
                    The audit reports conducted lack professional depth, potentially resulting in overlooked threats and weaknesses.<br/>
                    <a href='https://github.com/Neopin/neopin-audits/tree/master'>Audit Reports</a>`},{component:"PropDisplayCard",title:"Code Library",text:"NPT token is using an old version of OpenZeppelin library v3.0.0 (<a href='https://github.com/OpenZeppelin/openzeppelin-contracts/releases/tag/v3.0.0'>Released</a> on Apr 2020). The library is out-of-date."}]},{title:"On-Chain Data Analysis",props:[{component:"PropDisplayTable",title:"NPT Activities",headers:["Blockchain","# TXs","Total Tokens","Risks"],rows:[["Ethereum","459","166,459","Arbitrage risks"],["Polygon","3,119","211,297","Low diversity"],["Klaytn","169,773","1,000,000,000","Operation risks"]]},{component:"PropDisplayKeyValue",title:"Transactions Categorization",values:[{key:"Bridgeing ",value:"60%"},{key:"Providing LP",value:"30%"},{key:"Staking",value:"5%"},{key:"Others",value:"5%"}]}]},{title:"Tokenomic",props:[{component:"PropDisplayCard",title:"Summary",text:"Neopin's tokenomic design, largely based on self-generated tokens and lacking a clear economic utility, raises key uncertainties about the system's stability. Its unclear strategies to address potential token depreciation may affect trust in the long term. Additionally, the prevalent use of its native token, NPT, as a reward mechanism could lead to inflation and devaluation if the token supply significantly exceeds demand."},{component:"PropDisplayCard",title:"Risks Analysis",text:"The NPT token's undefined role poses risks to Neopin's stability and long-term value. Predictive models indicate potential threats without a strong consumption model.<br/><br/>While Neopin proposes strategies to stabilize token value, the lack of a detailed plan raises doubts about their long-term viability."}]},{title:"Social Media Analysis",props:[{component:"PropDisplayKeyValue",title:"Social Media",values:[{key:"Discord ",value:"To be crawled"},{key:"Twitter",value:"31,634 - ↑300% in 20 days"},{key:"Instagram",value:"To be crawled"}]}]}]},fo=nv("organizations",()=>{const e=vr([{guid:"e262d5c2-16f8-47a0-8c70-4019514b137c",name:"Team 1",projects:[Yr,Xr,Qr,Zr,Jr,ei]},{guid:"e262d5c2-16f8-47a0-8c70-4019514b137d",name:"Team 2",projects:[Yr,Xr,Qr,Zr,Jr,ei]},{guid:"e262d5c2-16f8-47a0-8c70-4019514b137e",name:"Team 3",projects:[Yr,Xr,Qr,Zr,Jr,ei]}]),t=s=>{if(s)return e.value.find(r=>r.guid===s)};return{organizations:e,findOrganization:t,findProject:(s,r)=>{if(!s||!r)return;const i=t(s);if(i)return i.projects.find(o=>o.guid===r)}}}),Cb={components:{OrgButton:vb},computed:{...lo(fo)}};const Ib=e=>(vs("data-v-ae50a370"),e=e(),bs(),e),Ob={class:"org-card mx-auto"},xb=Ib(()=>w("h1",null,"Organizations",-1)),Pb={class:"org-buttons mx-auto"};function Nb(e,t,n,s,r,i){const o=Re("OrgButton");return W(),z("div",Ob,[xb,w("div",Pb,[(W(!0),z(ge,null,Me(e.organizationsStore.organizations,a=>(W(),Ht(o,{key:a.guid,name:a.name,guid:a.guid},null,8,["name","guid"]))),128))])])}const Db=Te(Cb,[["render",Nb],["__scopeId","data-v-ae50a370"]]),Rb={props:{guid:String,name:String,logo:String,highlighted:Boolean}};const $b={class:"d-flex p-2 project-sidebar-item"},Lb={style:{"margin-right":"20px"}},Mb=["src"];function Bb(e,t,n,s,r,i){return W(),z("div",$b,[w("div",Lb,[w("img",{src:n.logo,class:"logo"},null,8,Mb)]),w("div",{class:Ln(["text",{highlighted:n.highlighted}])},ae(n.name),3)])}const Fb=Te(Rb,[["render",Bb],["__scopeId","data-v-21360751"]]),Vb={props:{tag:String}};const Wb={class:"m-1 tag"};function Hb(e,t,n,s,r,i){return W(),z("div",Wb,ae(n.tag),1)}const du=Te(Vb,[["render",Hb],["__scopeId","data-v-9d0697f3"]]),jb={props:["prop"],components:{Tag:du}},Ub={class:"mb-4"},qb=["innerHTML"],zb={key:0,class:"my-2"},Kb=w("b",null,"Tags:",-1),Gb={class:"d-flex flex-wrap"},Yb={key:1,class:"my-2"},Xb=w("b",null,"Related Regulations:",-1),Qb={class:"d-flex"},Zb=["href"];function Jb(e,t,n,s,r,i){var a,l,c,u,d;const o=Re("Tag");return W(),z("div",Ub,[w("h5",null,ae((a=n.prop)==null?void 0:a.title),1),w("p",{innerHTML:n.prop.text},null,8,qb),(l=n.prop)!=null&&l.tags?(W(),z("div",zb,[Kb,w("div",Gb,[(W(!0),z(ge,null,Me((c=n.prop)==null?void 0:c.tags,(p,g)=>(W(),Ht(o,{key:g,tag:p},null,8,["tag"]))),128))])])):dt("",!0),(u=n.prop)!=null&&u.regulations?(W(),z("div",Yb,[Xb,w("div",Qb,[(W(!0),z(ge,null,Me((d=n.prop)==null?void 0:d.regulations,(p,g)=>(W(),z("div",{key:g,class:"mx-2"},[Et(" [ "),w("a",{href:p==null?void 0:p.href,target:"_blank"},ae(p==null?void 0:p.text),9,Zb),Et(" ] ")]))),128))])])):dt("",!0)])}const ey=Te(jb,[["render",Jb]]),ty={props:["prop"]},ny={class:"mb-4"},sy={class:"mb-3"},ry={class:"table table-bordered"},iy={scope:"row",style:{width:"30%"}};function oy(e,t,n,s,r,i){var o,a;return W(),z("div",ny,[w("h5",sy,ae((o=n.prop)==null?void 0:o.title),1),w("table",ry,[w("tbody",null,[(W(!0),z(ge,null,Me((a=n.prop)==null?void 0:a.values,(l,c)=>(W(),z("tr",{key:c},[w("th",iy,ae(l==null?void 0:l.key),1),w("td",null,ae(l==null?void 0:l.value),1)]))),128))])])])}const ay=Te(ty,[["render",oy]]),ly={props:["prop"]},cy={class:"mb-4"},uy={class:"mb-3"},dy={class:"table table-bordered"};function fy(e,t,n,s,r,i){var o,a,l;return W(),z("div",cy,[w("h5",uy,ae((o=n.prop)==null?void 0:o.title),1),w("table",dy,[w("thead",null,[w("tr",null,[(W(!0),z(ge,null,Me((a=n.prop)==null?void 0:a.headers,(c,u)=>(W(),z("th",{key:u},ae(c),1))),128))])]),w("tbody",null,[(W(!0),z(ge,null,Me((l=n.prop)==null?void 0:l.rows,(c,u)=>(W(),z("tr",{key:u},[(W(!0),z(ge,null,Me(c,(d,p)=>(W(),z("td",{key:p},ae(d),1))),128))]))),128))])])])}const py=Te(ly,[["render",fy]]),hy={props:["title","props"],components:{PropDisplayCard:ey,PropDisplayKeyValue:ay,PropDisplayTable:py}};const my={class:"card"},gy={class:"card-header title"},_y={class:"card-body"};function vy(e,t,n,s,r,i){return W(),z("div",my,[w("div",gy,ae(n.title),1),w("div",_y,[(W(!0),z(ge,null,Me(n.props,(o,a)=>(W(),Ht(jg(o==null?void 0:o.component),{key:a,prop:o},null,8,["prop"]))),128))])])}const by=Te(hy,[["render",vy],["__scopeId","data-v-fb106ec3"]]),yy={props:["project"],components:{PropDisplayGroup:by}},wy={class:"row"};function Ey(e,t,n,s,r,i){var a;const o=Re("PropDisplayGroup");return W(),z("div",wy,[(W(!0),z(ge,null,Me((a=n.project)==null?void 0:a.overview,(l,c)=>(W(),z("div",{class:"col-md-6 p-2",key:c},[re(o,{title:l.title,props:l.props},null,8,["title","props"])]))),128))])}const ky=Te(yy,[["render",Ey]]),Ay={props:{text:String,footer:String,desciptionTitle:String,desciptionText:String},data(){return{active:!1}}};const fu=e=>(vs("data-v-75b3c624"),e=e(),bs(),e),Ty={class:"px-2 text d-flex flex-column",style:{"text-align":"center"}},Sy={style:{color:"rgb(135, 136, 141)","font-size":"0.6rem"}},Cy={key:0},Iy={key:1,class:"px-2 text d-flex flex-column",style:{"text-align":"left"}},Oy={class:"d-flex"},xy=fu(()=>w("i",{class:"bi bi-file-earmark",style:{"margin-right":"5px"}},null,-1)),Py={class:"d-flex"},Ny=fu(()=>w("i",{class:"bi bi-code-slash",style:{"margin-right":"5px"}},null,-1)),Dy={style:{color:"rgb(135, 136, 141)","font-size":"0.6rem"}};function Ry(e,t,n,s,r,i){return W(),z("div",{class:"w-100 status-card my-2 py-3",onClick:t[0]||(t[0]=o=>r.active=!r.active)},[w("div",Ty,[w("div",null,ae(n.text),1),w("div",Sy,ae(n.footer),1)]),r.active?(W(),z("hr",Cy)):dt("",!0),r.active?(W(),z("div",Iy,[w("div",Oy,[xy,w("div",null,ae(n.desciptionTitle),1)]),w("div",Py,[Ny,w("div",Dy,ae(n.desciptionText),1)])])):dt("",!0)])}const $y=Te(Ay,[["render",Ry],["__scopeId","data-v-75b3c624"]]),Ly={props:["title","statuses","backgroundColor"],components:{StatusCard:$y},data(){return{active:!1}}};const My={key:0,class:"bi bi-arrow-bar-down",style:{"margin-left":"10px"}},By={key:1,class:"bi bi-arrow-bar-up",style:{"margin-left":"10px"}},Fy={key:0};function Vy(e,t,n,s,r,i){const o=Re("StatusCard");return W(),z("div",{class:"status-card-group p-2 w-100 mb-2",style:hr({backgroundColor:n.backgroundColor})},[w("div",{class:"w-100",style:{"text-align":"right",cursor:"pointer"},onClick:t[0]||(t[0]=a=>r.active=!r.active)},[Et(ae(n.title)+" ",1),r.active?dt("",!0):(W(),z("i",My)),r.active?(W(),z("i",By)):dt("",!0)]),r.active?(W(),z("div",Fy,[(W(!0),z(ge,null,Me(n.statuses,(a,l)=>(W(),Ht(o,{key:l,text:a.text,footer:a.footer,"desciption-title":a.desciptionTitle,"desciption-text":a.desciptionText},null,8,["text","footer","desciption-title","desciption-text"]))),128))])):dt("",!0)],4)}const Wy=Te(Ly,[["render",Vy],["__scopeId","data-v-4e6fa15a"]]),Hy={props:{label:String,text:String,footer:String}};const jy={class:"card"},Uy={class:"label"},qy={class:"text"},zy={style:{position:"absolute",top:"50%",transform:"translate(0, -40%)"}},Ky={class:"label",style:{position:"absolute",bottom:"0",left:"0",right:"0",padding:"5px","text-align":"center"}};function Gy(e,t,n,s,r,i){return W(),z("div",jy,[w("div",Uy,ae(n.label),1),w("div",qy,[w("div",zy,ae(n.text),1)]),w("div",Ky,ae(n.footer),1)])}const Yy=Te(Hy,[["render",Gy],["__scopeId","data-v-52bed330"]]),Xy={props:["code"],created(){this.$nextTick(()=>{Jo.highlightAll()})},watch:{code(){this.$nextTick(()=>{Jo.highlightAll()})}}};const Qy={class:"code-block"},Zy={class:"line-numbers language-solidity"};function Jy(e,t,n,s,r,i){return W(),z("pre",Qy,[Et("    "),w("code",Zy,`
    `+ae(n.code)+`
  `,1),Et(`
  `)])}const ew=Te(Xy,[["render",Jy],["__scopeId","data-v-0f22bba8"]]),tw={props:["project"],components:{StatusCardGroup:Wy,TextCard:Yy,CodeView:ew},data(){return{contract:"",statuses:[{text:"✅ [dex011]",footer:"Tokens symbol is BSW",desciptionTitle:"Ticker Symbol: BSW",desciptionText:"contract BSWToken is BEP20('Biswap', 'BSW')"},{text:"✅ [dex012]",footer:"BEP-20 standard",desciptionTitle:"Chain: BNB Chain (BEP-20)",desciptionText:"Contract BSWToken is BEP20('Biswap', 'BSW')"},{text:"✅ [dex013]",footer:"700000000",desciptionTitle:"Max Supply: 700 000 000 BSW tokens",desciptionText:"The total token supply is 700,000,000"},{text:"❌ [dex014]",footer:"Is ERC20 Token Standard Implemented?",desciptionTitle:"No, BEP-20 token standard is implemented which is specific to the Binance Smart Chain (BSC) ecosystem",desciptionText:"Yes, ERC20 token standards is implemented, inherits from the BiswapERC20 contract with ERC20 interface."},{text:"✅ [dex015]",footer:"How many types of Swap Fee Tiers are mentioned in code?",desciptionTitle:"N.A.",desciptionText:"There is only one swapFee tier, which can be set by calling the `setSwapFee` function. The default value of the swapFee is 1."},{text:"✅ [dex016]",footer:"What is the swap fee for a single token swap?",desciptionTitle:"The swap fee charged when someone makes a token swap on Biswap is 0.2% or 0.1%, depending on the trading pair. For most trading pairs, the fee is 0.2%, and for some specific pairs such as BUSD-USDT, USDC-USDT, and DAI-USDT, the fee is 0.1%.",desciptionText:"The default swap fee is 1 basis point (0.01%)."},{text:"✅ [dex017]",footer:"How much of the swap fee will be taken by developers by _mintFee()?",desciptionTitle:"Unspecfied in whitepaper, but this function mints new BSW tokens from the swap fee, which are distributed to stakeholders, including developers.",desciptionText:"The amount of the fee is calculated based on the change in the product of the reserves, and is proportional to the square root of the product of the reserves. The proportion of the fee that is taken by the developers is set by the `devFee` variable, which is also initialized to 1 in the contract."},{text:"✅ [dex018]",footer:"Is the code Applicable to AMM?",desciptionTitle:"The code presented in the excerpt is applicable to AMM (Automated Market Maker) protocol, which is used by the Biswap Exchange.",desciptionText:"Yes, this code is applicable to Automated Market Maker (AMM) as it implements the core functionality of a DEX, including liquidity provision, token swaps, and fee collection."},{text:"✅ [dex019]",footer:"Is trading pairs other than those with WBNB allowed?",desciptionTitle:"No clear answer but it does mention that users can swap eligible trading pairs and stake BSW to activate them in the Multi-Reward Pool to earn rewards in different tokens such as BSW, BNB, and BUSD.",desciptionText:"The provided code does not explicitly mention WBNB. However, the Biswap DEX supports trading pairs between any two ERC20 tokens, not just WBNB."},{text:"✅ [dex0110]",footer:"Is the smart contracts capable to prevent frontrunning attacks?",desciptionTitle:"N.A.",desciptionText:'The Biswap smart contract does not have a built-in functionality to prevent frontrunning attacks. However, Biswap uses a mechanism called "time-weighted average price" (TWAP) to mitigate the impact of such attacks. This mechanism calculates the average price of a token over a certain period of time, making it more difficult for attackers to profit from short-term price movements.'},{text:"✅ [dex0111]",footer:"Is on-chain or off-chain price feeds used for the token prices?",desciptionTitle:"N.A.",desciptionText:"The Biswap smart contract does not use on-chain or off-chain price feeds for its token prices. Instead, it calculates the token prices based on the reserves of the tokens in the liquidity pool."},{text:"✅ [dex0112]",footer:"Does the smart contract implement a decentralized governance mechanism?",desciptionTitle:"No clear answer but it does mention that users can swap eligible trading pairs and stake BSW to activate them in the Multi-Reward Pool to earn rewards in different tokens such as BSW, BNB, and BUSD.",desciptionText:"No, the Biswap smart contract does not implement a decentralized governance mechanism."},{text:"✅ [dex0113]",footer:"Is there a restriction on the maximum transaction amount or frequency for a given address?",desciptionTitle:"No clear answer but it does mention that users can swap eligible trading pairs and stake BSW to activate them in the Multi-Reward Pool to earn rewards in different tokens such as BSW, BNB, and BUSD.",desciptionText:"The Biswap smart contract does not impose any restrictions on the maximum transaction amount or frequency for a given address."}]}},created(){this.contract=this.contracts[0]||""},computed:{contracts(){var t,n;let e=((n=(t=this.project)==null?void 0:t.assessment)==null?void 0:n.contracts)||{};return Object.keys(e)},code(){var t,n;return(((n=(t=this.project)==null?void 0:t.assessment)==null?void 0:n.contracts)||{})[this.contract]||""}},methods:{onContractChange(e){console.log("onContractChange",e)}}},nw={class:"container-fluid row mb-2",style:{height:"720px"}},sw={class:"h-100 col-md-3",style:{"overflow-y":"auto"}},rw={class:"col-md-6"},iw={class:"h-100"},ow={class:"h-100 col-md-3",style:{"overflow-y":"auto"}},aw={class:"my-2"},lw=w("h5",null,"Code Quality",-1),cw={class:"row"},uw={class:"col-md-6 p-1"},dw={class:"col-md-6 p-1"},fw={class:"col-md-6 p-1"},pw={class:"my-2"},hw=w("h5",null,"Security Analysis",-1),mw={class:"row"},gw={class:"col-md-6 p-1"},_w={class:"col-md-6 p-1"},vw=w("div",{class:"my-2"},[w("h5",null,"Explanation"),w("div",{style:{"font-size":"0.85rem"}}," BiSwap is a decentralized exchange platform that allows users to easily swap BEP-20 tokens on the Binance Smart Chain network. The platform features a three-level referral system and low transaction fees (0.1%). Our mission is to become a leading platform for token swaps in the DeFi space by offering fast, secure, and easy-to-use services. ")],-1);function bw(e,t,n,s,r,i){const o=Re("StatusCardGroup"),a=Re("CodeView"),l=Re("TextCard");return W(),z("div",nw,[w("div",sw,[re(o,{title:"Whitepaper (10/50 passed)",statuses:r.statuses,backgroundColor:"rgb(249,227,227)"},null,8,["statuses"]),re(o,{title:"Regulations (5/5 passed)",statuses:r.statuses,backgroundColor:"rgba(221,234,252)"},null,8,["statuses"]),re(o,{title:"Industry Standard",statuses:r.statuses,backgroundColor:"rgba(227,251,233)"},null,8,["statuses"])]),w("div",rw,[w("div",iw,[w("form",null,[Ic(w("select",{class:"form-select",onChange:t[0]||(t[0]=c=>i.onContractChange(r.contract)),"onUpdate:modelValue":t[1]||(t[1]=c=>r.contract=c)},[(W(!0),z(ge,null,Me(i.contracts,(c,u)=>(W(),z("option",{key:u},ae(c),1))),128))],544),[[U_,r.contract]])]),re(a,{class:"h-100",style:{"overflow-y":"auto"},code:i.code},null,8,["code"])])]),w("div",ow,[w("div",aw,[lw,w("div",cw,[w("div",uw,[re(l,{label:"Maintainability",text:"A",footer:"Created by SonarCube"})]),w("div",dw,[re(l,{label:"Test Coverage",text:"80%",footer:"Created by Jest"})]),w("div",fw,[re(l,{label:"Performance",text:"B",footer:"Created by GPT"})])])]),w("div",pw,[hw,w("div",mw,[w("div",gw,[re(l,{label:"Score",text:"80/100",footer:"Created by Hacken"})]),w("div",_w,[re(l,{label:"Audits",text:"85/100",footer:"Created by Verazt"})])])]),vw])])}const yw=Te(tw,[["render",bw]]),ww={props:["title","text","type"]};const Ew={class:"d-flex"},kw={style:{"margin-right":"15px","font-size":"1.5rem"}},Aw={key:0,class:"bi bi-exclamation-triangle"},Tw={key:1,class:"bi bi-info-circle"},Sw={key:2,class:"bi bi-check-circle"},Cw={class:"align-self-center"},Iw={style:{"font-size":"0.9rem"}},Ow={style:{"font-size":"0.8rem","margin-top":"6px"}},xw=w("div",{style:{"font-size":"0.8rem","margin-top":"10px",cursor:"pointer"}},[w("u",null,"Details")],-1);function Pw(e,t,n,s,r,i){return W(),z("div",{class:Ln(["action-status-card p-3 my-2",{danger:n.type=="danger",warn:n.type=="warn",primary:n.type=="primary"}])},[w("div",Ew,[w("div",kw,[n.type=="danger"?(W(),z("i",Aw)):dt("",!0),n.type=="warn"?(W(),z("i",Tw)):dt("",!0),n.type=="primary"?(W(),z("i",Sw)):dt("",!0)]),w("div",Cw,[w("div",Iw,[w("b",null,ae(n.title),1)]),w("div",Ow,ae(n.text),1),xw])])],2)}const Nw=Te(ww,[["render",Pw]]),Dw={props:["title","status","changes","type"]};const Rw={class:"action-card p-3 py-4"},$w={class:"d-flex"},Lw={class:"align-self-center",style:{"margin-right":"10px",color:"white","border-radius":"4px","background-color":"rgba(39, 50, 131)",width:"64px",height:"64px","font-size":"1.5rem","text-align":"center","line-height":"64px"}},Mw={class:"align-self-center",style:{"text-align":"center","flex-grow":"1"}},Bw={style:{"font-size":"0.7rem",color:"rgb(135, 136, 141)"}},Fw={style:{"font-size":"2rem"}};function Vw(e,t,n,s,r,i){return W(),z("div",Rw,[w("div",$w,[w("div",Lw,[Ug(e.$slots,"default",{},void 0,!0)]),w("div",Mw,[w("div",Bw,ae(n.title),1),w("div",Fw,[Et(ae(n.status)+" ",1),w("span",{class:Ln({up:n.type=="up",down:n.type=="down"}),style:{"font-size":"0.9rem"}},ae(n.changes),3)])])])])}const Ww=Te(Dw,[["render",Vw],["__scopeId","data-v-54042410"]]),Hw={props:["project"],components:{ActionStatusCard:Nw,ActionCard:Ww},data(){return{statuses:[{title:"Require 1 or more security audit report",text:"Suggest the VASP to submit at least another security audit report within 45 days...",type:"danger"},{title:"Code has not been updates for long time",text:"Suggest the VASP to link Github account or submit a new code base.",type:"warn"},{title:"Risky wallets interaction",text:"The deployed contract has attracted many newly wallets. Require VASP to validate...",type:"primary"},{title:"Code has high similarity to Uniswap",text:"Suggest the VASP to further clarify the differences for not violating Business S...",type:"danger"},{title:"High botting rate",text:"Suggest to review the VASP's solution on bot detection and IP restriction.",type:"warn"},{title:"Core contract has been modified recently",text:"Dangerous to update the core smart contract code. The audit reports may not be s...",type:"primary"},{title:"Orderbook Spoofing",text:"There is a high chance that the order book design has no restriction on spoofing...",type:"danger"}]}}},jw={class:"row my-3"},Uw={class:"col-md-4"},qw=w("i",{class:"bi bi-search"},null,-1),zw={class:"col-md-4"},Kw=w("i",{class:"bi bi-check2-circle"},null,-1),Gw={class:"col-md-4"},Yw=w("i",{class:"bi bi-info-circle"},null,-1),Xw=w("h4",null,"Action",-1),Qw={class:"row my-3"},Zw=w("h4",null,"Task",-1),Jw={class:"row my-3"};function eE(e,t,n,s,r,i){const o=Re("ActionCard"),a=Re("ActionStatusCard");return W(),z("div",null,[w("div",jw,[w("div",Uw,[re(o,{title:"Total Suggestion",status:"17",changes:"↑ 122",type:"up"},{default:Bs(()=>[qw]),_:1})]),w("div",zw,[re(o,{title:"Completed",status:"5",changes:"↑ 5.4%",type:"up"},{default:Bs(()=>[Kw]),_:1})]),w("div",Gw,[re(o,{title:"Action Needed",status:"8",changes:"↓ 3.2%",type:"down"},{default:Bs(()=>[Yw]),_:1})])]),Xw,w("div",Qw,[(W(!0),z(ge,null,Me(r.statuses,(l,c)=>(W(),z("div",{class:"col-md-4",key:c},[re(a,{title:l.title,text:l.text,type:l.type},null,8,["title","text","type"])]))),128))]),Zw,w("div",Jw,[(W(!0),z(ge,null,Me(r.statuses,(l,c)=>(W(),z("div",{class:"col-md-4",key:c},[re(a,{title:l.title,text:l.text},null,8,["title","text"])]))),128))])])}const tE=Te(Hw,[["render",eE]]),nE={props:{organizationGuid:String,projectGuid:String},components:{Tag:du,ProjectOverviewView:ky,ProjectAssessmentView:yw,ProjectActionView:tE},data(){return{author:"Yiwei Gong",date:new Date}},computed:{...lo(fo),organization(){return this.organizationsStore.findOrganization(this.organizationGuid)},project(){return this.organizationsStore.findProject(this.organizationGuid,this.projectGuid)}},methods:{formatDate(e){return e?(typeof e=="string"&&(e=new Date(e)),e.toLocaleDateString()):""}}};const sE=e=>(vs("data-v-ec2f7fdd"),e=e(),bs(),e),rE={class:"container mt-5"},iE={class:"d-flex"},oE={style:{"margin-right":"18px"}},aE=["src"],lE={class:"align-self-center"},cE={class:"d-flex"},uE={style:{"margin-right":"18px"}},dE={class:"rating align-self-center"},fE=["href"],pE={style:{color:"rgba(39, 50, 131)"}},hE={style:{color:"rgba(39, 50, 131)"}},mE={class:"description"},gE={class:"mt-4 d-flex"},_E={class:"mt-4"},vE=sE(()=>w("ul",{class:"nav nav-tabs",id:"myTab",role:"tablist"},[w("li",{class:"nav-item"},[w("a",{class:"nav-link active",id:"overview-tab","data-bs-toggle":"tab",href:"#overview",role:"tab","aria-controls":"overview","aria-selected":"true"},"Overview")]),w("li",{class:"nav-item"},[w("a",{class:"nav-link",id:"assessment-tab","data-bs-toggle":"tab",href:"#assessment",role:"tab","aria-controls":"assessment","aria-selected":"true"},"Assessment")]),w("li",{class:"nav-item"},[w("a",{class:"nav-link",id:"actions-tab","data-bs-toggle":"tab",href:"#actions",role:"tab","aria-controls":"actions","aria-selected":"false"},"Actions")])],-1)),bE={class:"tab-content",id:"myTabContent"},yE={class:"tab-pane fade show active",id:"overview",role:"tabpanel","aria-labelledby":"overview-tab"},wE={class:"mt-3"},EE={class:"tab-pane fade show",id:"assessment",role:"tabpanel","aria-labelledby":"assessment-tab"},kE={class:"mt-3"},AE={class:"tab-pane fade show",id:"actions",role:"tabpanel","aria-labelledby":"actions-tab"},TE={class:"mt-3"};function SE(e,t,n,s,r,i){var u,d,p,g,O,E,S,I,m;const o=Re("Tag"),a=Re("ProjectOverviewView"),l=Re("ProjectAssessmentView"),c=Re("ProjectActionView");return W(),z("div",rE,[w("div",iE,[w("div",oE,[w("img",{src:(u=i.project)==null?void 0:u.logo,class:"logo"},null,8,aE)]),w("div",lE,[w("div",cE,[w("h1",uE,ae((d=i.project)==null?void 0:d.name),1),w("div",dE,ae((p=i.project)==null?void 0:p.rating),1)]),w("div",null,[w("a",{href:(g=i.project)==null?void 0:g.url},ae((O=i.project)==null?void 0:O.url),9,fE)]),w("div",null,[Et(" Created by "),w("span",pE,[w("u",null,ae((E=i.project)==null?void 0:E.author),1)]),Et(" on "),w("span",hE,[w("u",null,ae(i.formatDate((S=i.project)==null?void 0:S.dueAt)),1)])]),w("div",mE,ae((I=i.project)==null?void 0:I.description),1)])]),w("div",gE,[(W(!0),z(ge,null,Me((m=i.project)==null?void 0:m.tags,_=>(W(),Ht(o,{key:_,tag:_},null,8,["tag"]))),128))]),w("div",_E,[vE,w("div",bE,[w("div",yE,[w("div",wE,[re(a,{project:i.project},null,8,["project"])])]),w("div",EE,[w("div",kE,[re(l,{project:i.project},null,8,["project"])])]),w("div",AE,[w("div",TE,[re(c,{project:i.project},null,8,["project"])])])])])])}const CE=Te(nE,[["render",SE],["__scopeId","data-v-ec2f7fdd"]]),IE={components:{ProjectSidebarItem:Fb,ProjectDetailsView:CE},data(){return{searchValue:"",selectedProjectGuid:""}},computed:{...lo(fo),organizationGuid(){return this.$route.params.organizationGuid},projects(){const e=this.organizationsStore.findOrganization(this.organizationGuid);if(!e)return[];if(!this.searchValue)return e.projects;const t=this.searchValue.toLowerCase();return e.projects.filter(n=>n.name.toLowerCase().includes(t))}}},OE="/webapp/logo-full.png";const pu=e=>(vs("data-v-1c489500"),e=e(),bs(),e),xE={class:"d-flex org"},PE={class:"h-100 org-sidebar"},NE={class:"container"},DE=pu(()=>w("div",{class:"mt-3",style:{color:"rgba(39, 50, 131)","font-size":"1.2rem"}},"Projects",-1)),RE={class:"form-inline my-2"},$E={class:"h-100 w-100 org-main"},LE={key:0,class:"container-fluid"},ME={key:1,class:"h-100 w-100"},BE=pu(()=>w("div",{style:{"text-align":"center","margin-top":"15%"}},[w("div",{style:{"font-size":"4rem",color:"red"}},[w("img",{src:OE,style:{width:"256px",filter:"grayscale(100%)",opacity:"0.3"}})]),w("div",{style:{width:"100%","max-width":"320px",color:"rgba(0, 0, 0, 0.5)"},class:"mx-auto"}," AI-Powered Regulatory Assessment Solution for Digital Asset Innovation ")],-1)),FE=[BE];function VE(e,t,n,s,r,i){const o=Re("ProjectSidebarItem"),a=Re("ProjectDetailsView");return W(),z("div",xE,[w("div",PE,[w("div",NE,[DE,w("form",RE,[Ic(w("input",{class:"form-control",type:"search",placeholder:"Search...","aria-label":"Search","onUpdate:modelValue":t[0]||(t[0]=l=>r.searchValue=l)},null,512),[[j_,r.searchValue]])]),(W(!0),z(ge,null,Me(i.projects,l=>(W(),Ht(o,{key:l.guid,guid:l.guid,name:l.name,logo:l.logo,highlighted:l.guid==r.selectedProjectGuid,onClick:c=>r.selectedProjectGuid=l.guid},null,8,["guid","name","logo","highlighted","onClick"]))),128))])]),w("div",$E,[r.selectedProjectGuid?(W(),z("div",LE,[re(a,{"organization-guid":i.organizationGuid,"project-guid":r.selectedProjectGuid},null,8,["organization-guid","project-guid"])])):(W(),z("div",ME,FE))])])}const WE=Te(IE,[["render",VE],["__scopeId","data-v-1c489500"]]),HE=rb({history:wv("/webapp/"),routes:[{path:"/",name:"organizations",component:Db},{path:"/organizations/:organizationGuid",name:"organization",component:WE}]}),po=K_(fb);po.use(X_());po.use(HE);po.mount("#app");
