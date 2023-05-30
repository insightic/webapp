(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();var $e="top",Ue="bottom",qe="right",Le="left",ni="auto",In=[$e,Ue,qe,Le],tn="start",bn="end",Xa="clippingParents",Ar="viewport",dn="popper",Qa="reference",tr=In.reduce(function(e,t){return e.concat([t+"-"+tn,t+"-"+bn])},[]),Tr=[].concat(In,[ni]).reduce(function(e,t){return e.concat([t,t+"-"+tn,t+"-"+bn])},[]),Za="beforeRead",Ja="read",el="afterRead",tl="beforeMain",nl="main",sl="afterMain",il="beforeWrite",rl="write",ol="afterWrite",al=[Za,Ja,el,tl,nl,sl,il,rl,ol];function ft(e){return e?(e.nodeName||"").toLowerCase():null}function ze(e){if(e==null)return window;if(e.toString()!=="[object Window]"){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function nn(e){var t=ze(e).Element;return e instanceof t||e instanceof Element}function Ke(e){var t=ze(e).HTMLElement;return e instanceof t||e instanceof HTMLElement}function Sr(e){if(typeof ShadowRoot>"u")return!1;var t=ze(e).ShadowRoot;return e instanceof t||e instanceof ShadowRoot}function hu(e){var t=e.state;Object.keys(t.elements).forEach(function(n){var s=t.styles[n]||{},i=t.attributes[n]||{},r=t.elements[n];!Ke(r)||!ft(r)||(Object.assign(r.style,s),Object.keys(i).forEach(function(o){var a=i[o];a===!1?r.removeAttribute(o):r.setAttribute(o,a===!0?"":a)}))})}function mu(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach(function(s){var i=t.elements[s],r=t.attributes[s]||{},o=Object.keys(t.styles.hasOwnProperty(s)?t.styles[s]:n[s]),a=o.reduce(function(l,c){return l[c]="",l},{});!Ke(i)||!ft(i)||(Object.assign(i.style,a),Object.keys(r).forEach(function(l){i.removeAttribute(l)}))})}}const Cr={name:"applyStyles",enabled:!0,phase:"write",fn:hu,effect:mu,requires:["computeStyles"]};function lt(e){return e.split("-")[0]}var Qt=Math.max,Hs=Math.min,yn=Math.round;function nr(){var e=navigator.userAgentData;return e!=null&&e.brands&&Array.isArray(e.brands)?e.brands.map(function(t){return t.brand+"/"+t.version}).join(" "):navigator.userAgent}function ll(){return!/^((?!chrome|android).)*safari/i.test(nr())}function wn(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!1);var s=e.getBoundingClientRect(),i=1,r=1;t&&Ke(e)&&(i=e.offsetWidth>0&&yn(s.width)/e.offsetWidth||1,r=e.offsetHeight>0&&yn(s.height)/e.offsetHeight||1);var o=nn(e)?ze(e):window,a=o.visualViewport,l=!ll()&&n,c=(s.left+(l&&a?a.offsetLeft:0))/i,u=(s.top+(l&&a?a.offsetTop:0))/r,d=s.width/i,p=s.height/r;return{width:d,height:p,top:u,right:c+d,bottom:u+p,left:c,x:c,y:u}}function xr(e){var t=wn(e),n=e.offsetWidth,s=e.offsetHeight;return Math.abs(t.width-n)<=1&&(n=t.width),Math.abs(t.height-s)<=1&&(s=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:s}}function cl(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&Sr(n)){var s=t;do{if(s&&e.isSameNode(s))return!0;s=s.parentNode||s.host}while(s)}return!1}function yt(e){return ze(e).getComputedStyle(e)}function gu(e){return["table","td","th"].indexOf(ft(e))>=0}function Ft(e){return((nn(e)?e.ownerDocument:e.document)||window.document).documentElement}function si(e){return ft(e)==="html"?e:e.assignedSlot||e.parentNode||(Sr(e)?e.host:null)||Ft(e)}function _o(e){return!Ke(e)||yt(e).position==="fixed"?null:e.offsetParent}function _u(e){var t=/firefox/i.test(nr()),n=/Trident/i.test(nr());if(n&&Ke(e)){var s=yt(e);if(s.position==="fixed")return null}var i=si(e);for(Sr(i)&&(i=i.host);Ke(i)&&["html","body"].indexOf(ft(i))<0;){var r=yt(i);if(r.transform!=="none"||r.perspective!=="none"||r.contain==="paint"||["transform","perspective"].indexOf(r.willChange)!==-1||t&&r.willChange==="filter"||t&&r.filter&&r.filter!=="none")return i;i=i.parentNode}return null}function fs(e){for(var t=ze(e),n=_o(e);n&&gu(n)&&yt(n).position==="static";)n=_o(n);return n&&(ft(n)==="html"||ft(n)==="body"&&yt(n).position==="static")?t:n||_u(e)||t}function Pr(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function Kn(e,t,n){return Qt(e,Hs(t,n))}function vu(e,t,n){var s=Kn(e,t,n);return s>n?n:s}function ul(){return{top:0,right:0,bottom:0,left:0}}function dl(e){return Object.assign({},ul(),e)}function fl(e,t){return t.reduce(function(n,s){return n[s]=e,n},{})}var bu=function(t,n){return t=typeof t=="function"?t(Object.assign({},n.rects,{placement:n.placement})):t,dl(typeof t!="number"?t:fl(t,In))};function yu(e){var t,n=e.state,s=e.name,i=e.options,r=n.elements.arrow,o=n.modifiersData.popperOffsets,a=lt(n.placement),l=Pr(a),c=[Le,qe].indexOf(a)>=0,u=c?"height":"width";if(!(!r||!o)){var d=bu(i.padding,n),p=xr(r),g=l==="y"?$e:Le,P=l==="y"?Ue:qe,E=n.rects.reference[u]+n.rects.reference[l]-o[l]-n.rects.popper[u],S=o[l]-n.rects.reference[l],x=fs(r),m=x?l==="y"?x.clientHeight||0:x.clientWidth||0:0,_=E/2-S/2,v=d[g],y=m-p[u]-d[P],T=m/2-p[u]/2+_,D=Kn(v,T,y),M=l;n.modifiersData[s]=(t={},t[M]=D,t.centerOffset=D-T,t)}}function wu(e){var t=e.state,n=e.options,s=n.element,i=s===void 0?"[data-popper-arrow]":s;i!=null&&(typeof i=="string"&&(i=t.elements.popper.querySelector(i),!i)||cl(t.elements.popper,i)&&(t.elements.arrow=i))}const pl={name:"arrow",enabled:!0,phase:"main",fn:yu,effect:wu,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function En(e){return e.split("-")[1]}var Eu={top:"auto",right:"auto",bottom:"auto",left:"auto"};function ku(e,t){var n=e.x,s=e.y,i=t.devicePixelRatio||1;return{x:yn(n*i)/i||0,y:yn(s*i)/i||0}}function vo(e){var t,n=e.popper,s=e.popperRect,i=e.placement,r=e.variation,o=e.offsets,a=e.position,l=e.gpuAcceleration,c=e.adaptive,u=e.roundOffsets,d=e.isFixed,p=o.x,g=p===void 0?0:p,P=o.y,E=P===void 0?0:P,S=typeof u=="function"?u({x:g,y:E}):{x:g,y:E};g=S.x,E=S.y;var x=o.hasOwnProperty("x"),m=o.hasOwnProperty("y"),_=Le,v=$e,y=window;if(c){var T=fs(n),D="clientHeight",M="clientWidth";if(T===ze(n)&&(T=Ft(n),yt(T).position!=="static"&&a==="absolute"&&(D="scrollHeight",M="scrollWidth")),T=T,i===$e||(i===Le||i===qe)&&r===bn){v=Ue;var O=d&&T===y&&y.visualViewport?y.visualViewport.height:T[D];E-=O-s.height,E*=l?1:-1}if(i===Le||(i===$e||i===Ue)&&r===bn){_=qe;var H=d&&T===y&&y.visualViewport?y.visualViewport.width:T[M];g-=H-s.width,g*=l?1:-1}}var X=Object.assign({position:a},c&&Eu),re=u===!0?ku({x:g,y:E},ze(n)):{x:g,y:E};if(g=re.x,E=re.y,l){var ue;return Object.assign({},X,(ue={},ue[v]=m?"0":"",ue[_]=x?"0":"",ue.transform=(y.devicePixelRatio||1)<=1?"translate("+g+"px, "+E+"px)":"translate3d("+g+"px, "+E+"px, 0)",ue))}return Object.assign({},X,(t={},t[v]=m?E+"px":"",t[_]=x?g+"px":"",t.transform="",t))}function Au(e){var t=e.state,n=e.options,s=n.gpuAcceleration,i=s===void 0?!0:s,r=n.adaptive,o=r===void 0?!0:r,a=n.roundOffsets,l=a===void 0?!0:a,c={placement:lt(t.placement),variation:En(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:i,isFixed:t.options.strategy==="fixed"};t.modifiersData.popperOffsets!=null&&(t.styles.popper=Object.assign({},t.styles.popper,vo(Object.assign({},c,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:o,roundOffsets:l})))),t.modifiersData.arrow!=null&&(t.styles.arrow=Object.assign({},t.styles.arrow,vo(Object.assign({},c,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:l})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})}const Or={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:Au,data:{}};var ys={passive:!0};function Tu(e){var t=e.state,n=e.instance,s=e.options,i=s.scroll,r=i===void 0?!0:i,o=s.resize,a=o===void 0?!0:o,l=ze(t.elements.popper),c=[].concat(t.scrollParents.reference,t.scrollParents.popper);return r&&c.forEach(function(u){u.addEventListener("scroll",n.update,ys)}),a&&l.addEventListener("resize",n.update,ys),function(){r&&c.forEach(function(u){u.removeEventListener("scroll",n.update,ys)}),a&&l.removeEventListener("resize",n.update,ys)}}const Ir={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:Tu,data:{}};var Su={left:"right",right:"left",bottom:"top",top:"bottom"};function Rs(e){return e.replace(/left|right|bottom|top/g,function(t){return Su[t]})}var Cu={start:"end",end:"start"};function bo(e){return e.replace(/start|end/g,function(t){return Cu[t]})}function Nr(e){var t=ze(e),n=t.pageXOffset,s=t.pageYOffset;return{scrollLeft:n,scrollTop:s}}function Rr(e){return wn(Ft(e)).left+Nr(e).scrollLeft}function xu(e,t){var n=ze(e),s=Ft(e),i=n.visualViewport,r=s.clientWidth,o=s.clientHeight,a=0,l=0;if(i){r=i.width,o=i.height;var c=ll();(c||!c&&t==="fixed")&&(a=i.offsetLeft,l=i.offsetTop)}return{width:r,height:o,x:a+Rr(e),y:l}}function Pu(e){var t,n=Ft(e),s=Nr(e),i=(t=e.ownerDocument)==null?void 0:t.body,r=Qt(n.scrollWidth,n.clientWidth,i?i.scrollWidth:0,i?i.clientWidth:0),o=Qt(n.scrollHeight,n.clientHeight,i?i.scrollHeight:0,i?i.clientHeight:0),a=-s.scrollLeft+Rr(e),l=-s.scrollTop;return yt(i||n).direction==="rtl"&&(a+=Qt(n.clientWidth,i?i.clientWidth:0)-r),{width:r,height:o,x:a,y:l}}function Dr(e){var t=yt(e),n=t.overflow,s=t.overflowX,i=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+i+s)}function hl(e){return["html","body","#document"].indexOf(ft(e))>=0?e.ownerDocument.body:Ke(e)&&Dr(e)?e:hl(si(e))}function Gn(e,t){var n;t===void 0&&(t=[]);var s=hl(e),i=s===((n=e.ownerDocument)==null?void 0:n.body),r=ze(s),o=i?[r].concat(r.visualViewport||[],Dr(s)?s:[]):s,a=t.concat(o);return i?a:a.concat(Gn(si(o)))}function sr(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function Ou(e,t){var n=wn(e,!1,t==="fixed");return n.top=n.top+e.clientTop,n.left=n.left+e.clientLeft,n.bottom=n.top+e.clientHeight,n.right=n.left+e.clientWidth,n.width=e.clientWidth,n.height=e.clientHeight,n.x=n.left,n.y=n.top,n}function yo(e,t,n){return t===Ar?sr(xu(e,n)):nn(t)?Ou(t,n):sr(Pu(Ft(e)))}function Iu(e){var t=Gn(si(e)),n=["absolute","fixed"].indexOf(yt(e).position)>=0,s=n&&Ke(e)?fs(e):e;return nn(s)?t.filter(function(i){return nn(i)&&cl(i,s)&&ft(i)!=="body"}):[]}function Nu(e,t,n,s){var i=t==="clippingParents"?Iu(e):[].concat(t),r=[].concat(i,[n]),o=r[0],a=r.reduce(function(l,c){var u=yo(e,c,s);return l.top=Qt(u.top,l.top),l.right=Hs(u.right,l.right),l.bottom=Hs(u.bottom,l.bottom),l.left=Qt(u.left,l.left),l},yo(e,o,s));return a.width=a.right-a.left,a.height=a.bottom-a.top,a.x=a.left,a.y=a.top,a}function ml(e){var t=e.reference,n=e.element,s=e.placement,i=s?lt(s):null,r=s?En(s):null,o=t.x+t.width/2-n.width/2,a=t.y+t.height/2-n.height/2,l;switch(i){case $e:l={x:o,y:t.y-n.height};break;case Ue:l={x:o,y:t.y+t.height};break;case qe:l={x:t.x+t.width,y:a};break;case Le:l={x:t.x-n.width,y:a};break;default:l={x:t.x,y:t.y}}var c=i?Pr(i):null;if(c!=null){var u=c==="y"?"height":"width";switch(r){case tn:l[c]=l[c]-(t[u]/2-n[u]/2);break;case bn:l[c]=l[c]+(t[u]/2-n[u]/2);break}}return l}function kn(e,t){t===void 0&&(t={});var n=t,s=n.placement,i=s===void 0?e.placement:s,r=n.strategy,o=r===void 0?e.strategy:r,a=n.boundary,l=a===void 0?Xa:a,c=n.rootBoundary,u=c===void 0?Ar:c,d=n.elementContext,p=d===void 0?dn:d,g=n.altBoundary,P=g===void 0?!1:g,E=n.padding,S=E===void 0?0:E,x=dl(typeof S!="number"?S:fl(S,In)),m=p===dn?Qa:dn,_=e.rects.popper,v=e.elements[P?m:p],y=Nu(nn(v)?v:v.contextElement||Ft(e.elements.popper),l,u,o),T=wn(e.elements.reference),D=ml({reference:T,element:_,strategy:"absolute",placement:i}),M=sr(Object.assign({},_,D)),O=p===dn?M:T,H={top:y.top-O.top+x.top,bottom:O.bottom-y.bottom+x.bottom,left:y.left-O.left+x.left,right:O.right-y.right+x.right},X=e.modifiersData.offset;if(p===dn&&X){var re=X[i];Object.keys(H).forEach(function(ue){var xe=[qe,Ue].indexOf(ue)>=0?1:-1,be=[$e,Ue].indexOf(ue)>=0?"y":"x";H[ue]+=re[be]*xe})}return H}function Ru(e,t){t===void 0&&(t={});var n=t,s=n.placement,i=n.boundary,r=n.rootBoundary,o=n.padding,a=n.flipVariations,l=n.allowedAutoPlacements,c=l===void 0?Tr:l,u=En(s),d=u?a?tr:tr.filter(function(P){return En(P)===u}):In,p=d.filter(function(P){return c.indexOf(P)>=0});p.length===0&&(p=d);var g=p.reduce(function(P,E){return P[E]=kn(e,{placement:E,boundary:i,rootBoundary:r,padding:o})[lt(E)],P},{});return Object.keys(g).sort(function(P,E){return g[P]-g[E]})}function Du(e){if(lt(e)===ni)return[];var t=Rs(e);return[bo(e),t,bo(t)]}function $u(e){var t=e.state,n=e.options,s=e.name;if(!t.modifiersData[s]._skip){for(var i=n.mainAxis,r=i===void 0?!0:i,o=n.altAxis,a=o===void 0?!0:o,l=n.fallbackPlacements,c=n.padding,u=n.boundary,d=n.rootBoundary,p=n.altBoundary,g=n.flipVariations,P=g===void 0?!0:g,E=n.allowedAutoPlacements,S=t.options.placement,x=lt(S),m=x===S,_=l||(m||!P?[Rs(S)]:Du(S)),v=[S].concat(_).reduce(function(ye,Ce){return ye.concat(lt(Ce)===ni?Ru(t,{placement:Ce,boundary:u,rootBoundary:d,padding:c,flipVariations:P,allowedAutoPlacements:E}):Ce)},[]),y=t.rects.reference,T=t.rects.popper,D=new Map,M=!0,O=v[0],H=0;H<v.length;H++){var X=v[H],re=lt(X),ue=En(X)===tn,xe=[$e,Ue].indexOf(re)>=0,be=xe?"width":"height",Q=kn(t,{placement:X,boundary:u,rootBoundary:d,altBoundary:p,padding:c}),J=xe?ue?qe:Le:ue?Ue:$e;y[be]>T[be]&&(J=Rs(J));var G=Rs(J),he=[];if(r&&he.push(Q[re]<=0),a&&he.push(Q[J]<=0,Q[G]<=0),he.every(function(ye){return ye})){O=X,M=!1;break}D.set(X,he)}if(M)for(var Ee=P?3:1,Se=function(Ce){var me=v.find(function(k){var F=D.get(k);if(F)return F.slice(0,Ce).every(function(B){return B})});if(me)return O=me,"break"},ce=Ee;ce>0;ce--){var Ve=Se(ce);if(Ve==="break")break}t.placement!==O&&(t.modifiersData[s]._skip=!0,t.placement=O,t.reset=!0)}}const gl={name:"flip",enabled:!0,phase:"main",fn:$u,requiresIfExists:["offset"],data:{_skip:!1}};function wo(e,t,n){return n===void 0&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function Eo(e){return[$e,qe,Ue,Le].some(function(t){return e[t]>=0})}function Lu(e){var t=e.state,n=e.name,s=t.rects.reference,i=t.rects.popper,r=t.modifiersData.preventOverflow,o=kn(t,{elementContext:"reference"}),a=kn(t,{altBoundary:!0}),l=wo(o,s),c=wo(a,i,r),u=Eo(l),d=Eo(c);t.modifiersData[n]={referenceClippingOffsets:l,popperEscapeOffsets:c,isReferenceHidden:u,hasPopperEscaped:d},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":u,"data-popper-escaped":d})}const _l={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:Lu};function Mu(e,t,n){var s=lt(e),i=[Le,$e].indexOf(s)>=0?-1:1,r=typeof n=="function"?n(Object.assign({},t,{placement:e})):n,o=r[0],a=r[1];return o=o||0,a=(a||0)*i,[Le,qe].indexOf(s)>=0?{x:a,y:o}:{x:o,y:a}}function Bu(e){var t=e.state,n=e.options,s=e.name,i=n.offset,r=i===void 0?[0,0]:i,o=Tr.reduce(function(u,d){return u[d]=Mu(d,t.rects,r),u},{}),a=o[t.placement],l=a.x,c=a.y;t.modifiersData.popperOffsets!=null&&(t.modifiersData.popperOffsets.x+=l,t.modifiersData.popperOffsets.y+=c),t.modifiersData[s]=o}const vl={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:Bu};function Fu(e){var t=e.state,n=e.name;t.modifiersData[n]=ml({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})}const $r={name:"popperOffsets",enabled:!0,phase:"read",fn:Fu,data:{}};function Vu(e){return e==="x"?"y":"x"}function Wu(e){var t=e.state,n=e.options,s=e.name,i=n.mainAxis,r=i===void 0?!0:i,o=n.altAxis,a=o===void 0?!1:o,l=n.boundary,c=n.rootBoundary,u=n.altBoundary,d=n.padding,p=n.tether,g=p===void 0?!0:p,P=n.tetherOffset,E=P===void 0?0:P,S=kn(t,{boundary:l,rootBoundary:c,padding:d,altBoundary:u}),x=lt(t.placement),m=En(t.placement),_=!m,v=Pr(x),y=Vu(v),T=t.modifiersData.popperOffsets,D=t.rects.reference,M=t.rects.popper,O=typeof E=="function"?E(Object.assign({},t.rects,{placement:t.placement})):E,H=typeof O=="number"?{mainAxis:O,altAxis:O}:Object.assign({mainAxis:0,altAxis:0},O),X=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,re={x:0,y:0};if(T){if(r){var ue,xe=v==="y"?$e:Le,be=v==="y"?Ue:qe,Q=v==="y"?"height":"width",J=T[v],G=J+S[xe],he=J-S[be],Ee=g?-M[Q]/2:0,Se=m===tn?D[Q]:M[Q],ce=m===tn?-M[Q]:-D[Q],Ve=t.elements.arrow,ye=g&&Ve?xr(Ve):{width:0,height:0},Ce=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:ul(),me=Ce[xe],k=Ce[be],F=Kn(0,D[Q],ye[Q]),B=_?D[Q]/2-Ee-F-me-H.mainAxis:Se-F-me-H.mainAxis,U=_?-D[Q]/2+Ee+F+k+H.mainAxis:ce+F+k+H.mainAxis,ne=t.elements.arrow&&fs(t.elements.arrow),f=ne?v==="y"?ne.clientTop||0:ne.clientLeft||0:0,h=(ue=X==null?void 0:X[v])!=null?ue:0,b=J+B-h-f,A=J+U-h,C=Kn(g?Hs(G,b):G,J,g?Qt(he,A):he);T[v]=C,re[v]=C-J}if(a){var I,V=v==="x"?$e:Le,$=v==="x"?Ue:qe,L=T[y],N=y==="y"?"height":"width",K=L+S[V],j=L-S[$],q=[$e,Le].indexOf(x)!==-1,Z=(I=X==null?void 0:X[y])!=null?I:0,se=q?K:L-D[N]-M[N]-Z+H.altAxis,fe=q?L+D[N]+M[N]-Z-H.altAxis:j,de=g&&q?vu(se,L,fe):Kn(g?se:K,L,g?fe:j);T[y]=de,re[y]=de-L}t.modifiersData[s]=re}}const bl={name:"preventOverflow",enabled:!0,phase:"main",fn:Wu,requiresIfExists:["offset"]};function Hu(e){return{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}}function ju(e){return e===ze(e)||!Ke(e)?Nr(e):Hu(e)}function Uu(e){var t=e.getBoundingClientRect(),n=yn(t.width)/e.offsetWidth||1,s=yn(t.height)/e.offsetHeight||1;return n!==1||s!==1}function qu(e,t,n){n===void 0&&(n=!1);var s=Ke(t),i=Ke(t)&&Uu(t),r=Ft(t),o=wn(e,i,n),a={scrollLeft:0,scrollTop:0},l={x:0,y:0};return(s||!s&&!n)&&((ft(t)!=="body"||Dr(r))&&(a=ju(t)),Ke(t)?(l=wn(t,!0),l.x+=t.clientLeft,l.y+=t.clientTop):r&&(l.x=Rr(r))),{x:o.left+a.scrollLeft-l.x,y:o.top+a.scrollTop-l.y,width:o.width,height:o.height}}function zu(e){var t=new Map,n=new Set,s=[];e.forEach(function(r){t.set(r.name,r)});function i(r){n.add(r.name);var o=[].concat(r.requires||[],r.requiresIfExists||[]);o.forEach(function(a){if(!n.has(a)){var l=t.get(a);l&&i(l)}}),s.push(r)}return e.forEach(function(r){n.has(r.name)||i(r)}),s}function Ku(e){var t=zu(e);return al.reduce(function(n,s){return n.concat(t.filter(function(i){return i.phase===s}))},[])}function Gu(e){var t;return function(){return t||(t=new Promise(function(n){Promise.resolve().then(function(){t=void 0,n(e())})})),t}}function Yu(e){var t=e.reduce(function(n,s){var i=n[s.name];return n[s.name]=i?Object.assign({},i,s,{options:Object.assign({},i.options,s.options),data:Object.assign({},i.data,s.data)}):s,n},{});return Object.keys(t).map(function(n){return t[n]})}var ko={placement:"bottom",modifiers:[],strategy:"absolute"};function Ao(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some(function(s){return!(s&&typeof s.getBoundingClientRect=="function")})}function ii(e){e===void 0&&(e={});var t=e,n=t.defaultModifiers,s=n===void 0?[]:n,i=t.defaultOptions,r=i===void 0?ko:i;return function(a,l,c){c===void 0&&(c=r);var u={placement:"bottom",orderedModifiers:[],options:Object.assign({},ko,r),modifiersData:{},elements:{reference:a,popper:l},attributes:{},styles:{}},d=[],p=!1,g={state:u,setOptions:function(x){var m=typeof x=="function"?x(u.options):x;E(),u.options=Object.assign({},r,u.options,m),u.scrollParents={reference:nn(a)?Gn(a):a.contextElement?Gn(a.contextElement):[],popper:Gn(l)};var _=Ku(Yu([].concat(s,u.options.modifiers)));return u.orderedModifiers=_.filter(function(v){return v.enabled}),P(),g.update()},forceUpdate:function(){if(!p){var x=u.elements,m=x.reference,_=x.popper;if(Ao(m,_)){u.rects={reference:qu(m,fs(_),u.options.strategy==="fixed"),popper:xr(_)},u.reset=!1,u.placement=u.options.placement,u.orderedModifiers.forEach(function(H){return u.modifiersData[H.name]=Object.assign({},H.data)});for(var v=0;v<u.orderedModifiers.length;v++){if(u.reset===!0){u.reset=!1,v=-1;continue}var y=u.orderedModifiers[v],T=y.fn,D=y.options,M=D===void 0?{}:D,O=y.name;typeof T=="function"&&(u=T({state:u,options:M,name:O,instance:g})||u)}}}},update:Gu(function(){return new Promise(function(S){g.forceUpdate(),S(u)})}),destroy:function(){E(),p=!0}};if(!Ao(a,l))return g;g.setOptions(c).then(function(S){!p&&c.onFirstUpdate&&c.onFirstUpdate(S)});function P(){u.orderedModifiers.forEach(function(S){var x=S.name,m=S.options,_=m===void 0?{}:m,v=S.effect;if(typeof v=="function"){var y=v({state:u,name:x,instance:g,options:_}),T=function(){};d.push(y||T)}})}function E(){d.forEach(function(S){return S()}),d=[]}return g}}var Xu=ii(),Qu=[Ir,$r,Or,Cr],Zu=ii({defaultModifiers:Qu}),Ju=[Ir,$r,Or,Cr,vl,gl,bl,pl,_l],Lr=ii({defaultModifiers:Ju});const yl=Object.freeze(Object.defineProperty({__proto__:null,afterMain:sl,afterRead:el,afterWrite:ol,applyStyles:Cr,arrow:pl,auto:ni,basePlacements:In,beforeMain:tl,beforeRead:Za,beforeWrite:il,bottom:Ue,clippingParents:Xa,computeStyles:Or,createPopper:Lr,createPopperBase:Xu,createPopperLite:Zu,detectOverflow:kn,end:bn,eventListeners:Ir,flip:gl,hide:_l,left:Le,main:nl,modifierPhases:al,offset:vl,placements:Tr,popper:dn,popperGenerator:ii,popperOffsets:$r,preventOverflow:bl,read:Ja,reference:Qa,right:qe,start:tn,top:$e,variationPlacements:tr,viewport:Ar,write:rl},Symbol.toStringTag,{value:"Module"}));/*!
  * Bootstrap v5.2.3 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */const ed=1e6,td=1e3,ir="transitionend",nd=e=>e==null?`${e}`:Object.prototype.toString.call(e).match(/\s([a-z]+)/i)[1].toLowerCase(),sd=e=>{do e+=Math.floor(Math.random()*ed);while(document.getElementById(e));return e},wl=e=>{let t=e.getAttribute("data-bs-target");if(!t||t==="#"){let n=e.getAttribute("href");if(!n||!n.includes("#")&&!n.startsWith("."))return null;n.includes("#")&&!n.startsWith("#")&&(n=`#${n.split("#")[1]}`),t=n&&n!=="#"?n.trim():null}return t},El=e=>{const t=wl(e);return t&&document.querySelector(t)?t:null},_t=e=>{const t=wl(e);return t?document.querySelector(t):null},id=e=>{if(!e)return 0;let{transitionDuration:t,transitionDelay:n}=window.getComputedStyle(e);const s=Number.parseFloat(t),i=Number.parseFloat(n);return!s&&!i?0:(t=t.split(",")[0],n=n.split(",")[0],(Number.parseFloat(t)+Number.parseFloat(n))*td)},kl=e=>{e.dispatchEvent(new Event(ir))},vt=e=>!e||typeof e!="object"?!1:(typeof e.jquery<"u"&&(e=e[0]),typeof e.nodeType<"u"),Dt=e=>vt(e)?e.jquery?e[0]:e:typeof e=="string"&&e.length>0?document.querySelector(e):null,Nn=e=>{if(!vt(e)||e.getClientRects().length===0)return!1;const t=getComputedStyle(e).getPropertyValue("visibility")==="visible",n=e.closest("details:not([open])");if(!n)return t;if(n!==e){const s=e.closest("summary");if(s&&s.parentNode!==n||s===null)return!1}return t},$t=e=>!e||e.nodeType!==Node.ELEMENT_NODE||e.classList.contains("disabled")?!0:typeof e.disabled<"u"?e.disabled:e.hasAttribute("disabled")&&e.getAttribute("disabled")!=="false",Al=e=>{if(!document.documentElement.attachShadow)return null;if(typeof e.getRootNode=="function"){const t=e.getRootNode();return t instanceof ShadowRoot?t:null}return e instanceof ShadowRoot?e:e.parentNode?Al(e.parentNode):null},js=()=>{},ps=e=>{e.offsetHeight},Tl=()=>window.jQuery&&!document.body.hasAttribute("data-bs-no-jquery")?window.jQuery:null,xi=[],rd=e=>{document.readyState==="loading"?(xi.length||document.addEventListener("DOMContentLoaded",()=>{for(const t of xi)t()}),xi.push(e)):e()},Ge=()=>document.documentElement.dir==="rtl",Ye=e=>{rd(()=>{const t=Tl();if(t){const n=e.NAME,s=t.fn[n];t.fn[n]=e.jQueryInterface,t.fn[n].Constructor=e,t.fn[n].noConflict=()=>(t.fn[n]=s,e.jQueryInterface)}})},gt=e=>{typeof e=="function"&&e()},Sl=(e,t,n=!0)=>{if(!n){gt(e);return}const s=5,i=id(t)+s;let r=!1;const o=({target:a})=>{a===t&&(r=!0,t.removeEventListener(ir,o),gt(e))};t.addEventListener(ir,o),setTimeout(()=>{r||kl(t)},i)},Mr=(e,t,n,s)=>{const i=e.length;let r=e.indexOf(t);return r===-1?!n&&s?e[i-1]:e[0]:(r+=n?1:-1,s&&(r=(r+i)%i),e[Math.max(0,Math.min(r,i-1))])},od=/[^.]*(?=\..*)\.|.*/,ad=/\..*/,ld=/::\d+$/,Pi={};let To=1;const Cl={mouseenter:"mouseover",mouseleave:"mouseout"},cd=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function xl(e,t){return t&&`${t}::${To++}`||e.uidEvent||To++}function Pl(e){const t=xl(e);return e.uidEvent=t,Pi[t]=Pi[t]||{},Pi[t]}function ud(e,t){return function n(s){return Br(s,{delegateTarget:e}),n.oneOff&&R.off(e,s.type,t),t.apply(e,[s])}}function dd(e,t,n){return function s(i){const r=e.querySelectorAll(t);for(let{target:o}=i;o&&o!==this;o=o.parentNode)for(const a of r)if(a===o)return Br(i,{delegateTarget:o}),s.oneOff&&R.off(e,i.type,t,n),n.apply(o,[i])}}function Ol(e,t,n=null){return Object.values(e).find(s=>s.callable===t&&s.delegationSelector===n)}function Il(e,t,n){const s=typeof t=="string",i=s?n:t||n;let r=Nl(e);return cd.has(r)||(r=e),[s,i,r]}function So(e,t,n,s,i){if(typeof t!="string"||!e)return;let[r,o,a]=Il(t,n,s);t in Cl&&(o=(P=>function(E){if(!E.relatedTarget||E.relatedTarget!==E.delegateTarget&&!E.delegateTarget.contains(E.relatedTarget))return P.call(this,E)})(o));const l=Pl(e),c=l[a]||(l[a]={}),u=Ol(c,o,r?n:null);if(u){u.oneOff=u.oneOff&&i;return}const d=xl(o,t.replace(od,"")),p=r?dd(e,n,o):ud(e,o);p.delegationSelector=r?n:null,p.callable=o,p.oneOff=i,p.uidEvent=d,c[d]=p,e.addEventListener(a,p,r)}function rr(e,t,n,s,i){const r=Ol(t[n],s,i);r&&(e.removeEventListener(n,r,!!i),delete t[n][r.uidEvent])}function fd(e,t,n,s){const i=t[n]||{};for(const r of Object.keys(i))if(r.includes(s)){const o=i[r];rr(e,t,n,o.callable,o.delegationSelector)}}function Nl(e){return e=e.replace(ad,""),Cl[e]||e}const R={on(e,t,n,s){So(e,t,n,s,!1)},one(e,t,n,s){So(e,t,n,s,!0)},off(e,t,n,s){if(typeof t!="string"||!e)return;const[i,r,o]=Il(t,n,s),a=o!==t,l=Pl(e),c=l[o]||{},u=t.startsWith(".");if(typeof r<"u"){if(!Object.keys(c).length)return;rr(e,l,o,r,i?n:null);return}if(u)for(const d of Object.keys(l))fd(e,l,d,t.slice(1));for(const d of Object.keys(c)){const p=d.replace(ld,"");if(!a||t.includes(p)){const g=c[d];rr(e,l,o,g.callable,g.delegationSelector)}}},trigger(e,t,n){if(typeof t!="string"||!e)return null;const s=Tl(),i=Nl(t),r=t!==i;let o=null,a=!0,l=!0,c=!1;r&&s&&(o=s.Event(t,n),s(e).trigger(o),a=!o.isPropagationStopped(),l=!o.isImmediatePropagationStopped(),c=o.isDefaultPrevented());let u=new Event(t,{bubbles:a,cancelable:!0});return u=Br(u,n),c&&u.preventDefault(),l&&e.dispatchEvent(u),u.defaultPrevented&&o&&o.preventDefault(),u}};function Br(e,t){for(const[n,s]of Object.entries(t||{}))try{e[n]=s}catch{Object.defineProperty(e,n,{configurable:!0,get(){return s}})}return e}const Tt=new Map,Oi={set(e,t,n){Tt.has(e)||Tt.set(e,new Map);const s=Tt.get(e);if(!s.has(t)&&s.size!==0){console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(s.keys())[0]}.`);return}s.set(t,n)},get(e,t){return Tt.has(e)&&Tt.get(e).get(t)||null},remove(e,t){if(!Tt.has(e))return;const n=Tt.get(e);n.delete(t),n.size===0&&Tt.delete(e)}};function Co(e){if(e==="true")return!0;if(e==="false")return!1;if(e===Number(e).toString())return Number(e);if(e===""||e==="null")return null;if(typeof e!="string")return e;try{return JSON.parse(decodeURIComponent(e))}catch{return e}}function Ii(e){return e.replace(/[A-Z]/g,t=>`-${t.toLowerCase()}`)}const bt={setDataAttribute(e,t,n){e.setAttribute(`data-bs-${Ii(t)}`,n)},removeDataAttribute(e,t){e.removeAttribute(`data-bs-${Ii(t)}`)},getDataAttributes(e){if(!e)return{};const t={},n=Object.keys(e.dataset).filter(s=>s.startsWith("bs")&&!s.startsWith("bsConfig"));for(const s of n){let i=s.replace(/^bs/,"");i=i.charAt(0).toLowerCase()+i.slice(1,i.length),t[i]=Co(e.dataset[s])}return t},getDataAttribute(e,t){return Co(e.getAttribute(`data-bs-${Ii(t)}`))}};class hs{static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}_getConfig(t){return t=this._mergeConfigObj(t),t=this._configAfterMerge(t),this._typeCheckConfig(t),t}_configAfterMerge(t){return t}_mergeConfigObj(t,n){const s=vt(n)?bt.getDataAttribute(n,"config"):{};return{...this.constructor.Default,...typeof s=="object"?s:{},...vt(n)?bt.getDataAttributes(n):{},...typeof t=="object"?t:{}}}_typeCheckConfig(t,n=this.constructor.DefaultType){for(const s of Object.keys(n)){const i=n[s],r=t[s],o=vt(r)?"element":nd(r);if(!new RegExp(i).test(o))throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${s}" provided type "${o}" but expected type "${i}".`)}}}const pd="5.2.3";class nt extends hs{constructor(t,n){super(),t=Dt(t),t&&(this._element=t,this._config=this._getConfig(n),Oi.set(this._element,this.constructor.DATA_KEY,this))}dispose(){Oi.remove(this._element,this.constructor.DATA_KEY),R.off(this._element,this.constructor.EVENT_KEY);for(const t of Object.getOwnPropertyNames(this))this[t]=null}_queueCallback(t,n,s=!0){Sl(t,n,s)}_getConfig(t){return t=this._mergeConfigObj(t,this._element),t=this._configAfterMerge(t),this._typeCheckConfig(t),t}static getInstance(t){return Oi.get(Dt(t),this.DATA_KEY)}static getOrCreateInstance(t,n={}){return this.getInstance(t)||new this(t,typeof n=="object"?n:null)}static get VERSION(){return pd}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}static eventName(t){return`${t}${this.EVENT_KEY}`}}const ri=(e,t="hide")=>{const n=`click.dismiss${e.EVENT_KEY}`,s=e.NAME;R.on(document,n,`[data-bs-dismiss="${s}"]`,function(i){if(["A","AREA"].includes(this.tagName)&&i.preventDefault(),$t(this))return;const r=_t(this)||this.closest(`.${s}`);e.getOrCreateInstance(r)[t]()})},hd="alert",md="bs.alert",Rl=`.${md}`,gd=`close${Rl}`,_d=`closed${Rl}`,vd="fade",bd="show";class oi extends nt{static get NAME(){return hd}close(){if(R.trigger(this._element,gd).defaultPrevented)return;this._element.classList.remove(bd);const n=this._element.classList.contains(vd);this._queueCallback(()=>this._destroyElement(),this._element,n)}_destroyElement(){this._element.remove(),R.trigger(this._element,_d),this.dispose()}static jQueryInterface(t){return this.each(function(){const n=oi.getOrCreateInstance(this);if(typeof t=="string"){if(n[t]===void 0||t.startsWith("_")||t==="constructor")throw new TypeError(`No method named "${t}"`);n[t](this)}})}}ri(oi,"close");Ye(oi);const yd="button",wd="bs.button",Ed=`.${wd}`,kd=".data-api",Ad="active",xo='[data-bs-toggle="button"]',Td=`click${Ed}${kd}`;class ai extends nt{static get NAME(){return yd}toggle(){this._element.setAttribute("aria-pressed",this._element.classList.toggle(Ad))}static jQueryInterface(t){return this.each(function(){const n=ai.getOrCreateInstance(this);t==="toggle"&&n[t]()})}}R.on(document,Td,xo,e=>{e.preventDefault();const t=e.target.closest(xo);ai.getOrCreateInstance(t).toggle()});Ye(ai);const te={find(e,t=document.documentElement){return[].concat(...Element.prototype.querySelectorAll.call(t,e))},findOne(e,t=document.documentElement){return Element.prototype.querySelector.call(t,e)},children(e,t){return[].concat(...e.children).filter(n=>n.matches(t))},parents(e,t){const n=[];let s=e.parentNode.closest(t);for(;s;)n.push(s),s=s.parentNode.closest(t);return n},prev(e,t){let n=e.previousElementSibling;for(;n;){if(n.matches(t))return[n];n=n.previousElementSibling}return[]},next(e,t){let n=e.nextElementSibling;for(;n;){if(n.matches(t))return[n];n=n.nextElementSibling}return[]},focusableChildren(e){const t=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map(n=>`${n}:not([tabindex^="-"])`).join(",");return this.find(t,e).filter(n=>!$t(n)&&Nn(n))}},Sd="swipe",Rn=".bs.swipe",Cd=`touchstart${Rn}`,xd=`touchmove${Rn}`,Pd=`touchend${Rn}`,Od=`pointerdown${Rn}`,Id=`pointerup${Rn}`,Nd="touch",Rd="pen",Dd="pointer-event",$d=40,Ld={endCallback:null,leftCallback:null,rightCallback:null},Md={endCallback:"(function|null)",leftCallback:"(function|null)",rightCallback:"(function|null)"};class Us extends hs{constructor(t,n){super(),this._element=t,!(!t||!Us.isSupported())&&(this._config=this._getConfig(n),this._deltaX=0,this._supportPointerEvents=!!window.PointerEvent,this._initEvents())}static get Default(){return Ld}static get DefaultType(){return Md}static get NAME(){return Sd}dispose(){R.off(this._element,Rn)}_start(t){if(!this._supportPointerEvents){this._deltaX=t.touches[0].clientX;return}this._eventIsPointerPenTouch(t)&&(this._deltaX=t.clientX)}_end(t){this._eventIsPointerPenTouch(t)&&(this._deltaX=t.clientX-this._deltaX),this._handleSwipe(),gt(this._config.endCallback)}_move(t){this._deltaX=t.touches&&t.touches.length>1?0:t.touches[0].clientX-this._deltaX}_handleSwipe(){const t=Math.abs(this._deltaX);if(t<=$d)return;const n=t/this._deltaX;this._deltaX=0,n&&gt(n>0?this._config.rightCallback:this._config.leftCallback)}_initEvents(){this._supportPointerEvents?(R.on(this._element,Od,t=>this._start(t)),R.on(this._element,Id,t=>this._end(t)),this._element.classList.add(Dd)):(R.on(this._element,Cd,t=>this._start(t)),R.on(this._element,xd,t=>this._move(t)),R.on(this._element,Pd,t=>this._end(t)))}_eventIsPointerPenTouch(t){return this._supportPointerEvents&&(t.pointerType===Rd||t.pointerType===Nd)}static isSupported(){return"ontouchstart"in document.documentElement||navigator.maxTouchPoints>0}}const Bd="carousel",Fd="bs.carousel",Vt=`.${Fd}`,Dl=".data-api",Vd="ArrowLeft",Wd="ArrowRight",Hd=500,Wn="next",an="prev",fn="left",Ds="right",jd=`slide${Vt}`,Ni=`slid${Vt}`,Ud=`keydown${Vt}`,qd=`mouseenter${Vt}`,zd=`mouseleave${Vt}`,Kd=`dragstart${Vt}`,Gd=`load${Vt}${Dl}`,Yd=`click${Vt}${Dl}`,$l="carousel",ws="active",Xd="slide",Qd="carousel-item-end",Zd="carousel-item-start",Jd="carousel-item-next",ef="carousel-item-prev",Ll=".active",Ml=".carousel-item",tf=Ll+Ml,nf=".carousel-item img",sf=".carousel-indicators",rf="[data-bs-slide], [data-bs-slide-to]",of='[data-bs-ride="carousel"]',af={[Vd]:Ds,[Wd]:fn},lf={interval:5e3,keyboard:!0,pause:"hover",ride:!1,touch:!0,wrap:!0},cf={interval:"(number|boolean)",keyboard:"boolean",pause:"(string|boolean)",ride:"(boolean|string)",touch:"boolean",wrap:"boolean"};class ms extends nt{constructor(t,n){super(t,n),this._interval=null,this._activeElement=null,this._isSliding=!1,this.touchTimeout=null,this._swipeHelper=null,this._indicatorsElement=te.findOne(sf,this._element),this._addEventListeners(),this._config.ride===$l&&this.cycle()}static get Default(){return lf}static get DefaultType(){return cf}static get NAME(){return Bd}next(){this._slide(Wn)}nextWhenVisible(){!document.hidden&&Nn(this._element)&&this.next()}prev(){this._slide(an)}pause(){this._isSliding&&kl(this._element),this._clearInterval()}cycle(){this._clearInterval(),this._updateInterval(),this._interval=setInterval(()=>this.nextWhenVisible(),this._config.interval)}_maybeEnableCycle(){if(this._config.ride){if(this._isSliding){R.one(this._element,Ni,()=>this.cycle());return}this.cycle()}}to(t){const n=this._getItems();if(t>n.length-1||t<0)return;if(this._isSliding){R.one(this._element,Ni,()=>this.to(t));return}const s=this._getItemIndex(this._getActive());if(s===t)return;const i=t>s?Wn:an;this._slide(i,n[t])}dispose(){this._swipeHelper&&this._swipeHelper.dispose(),super.dispose()}_configAfterMerge(t){return t.defaultInterval=t.interval,t}_addEventListeners(){this._config.keyboard&&R.on(this._element,Ud,t=>this._keydown(t)),this._config.pause==="hover"&&(R.on(this._element,qd,()=>this.pause()),R.on(this._element,zd,()=>this._maybeEnableCycle())),this._config.touch&&Us.isSupported()&&this._addTouchEventListeners()}_addTouchEventListeners(){for(const s of te.find(nf,this._element))R.on(s,Kd,i=>i.preventDefault());const n={leftCallback:()=>this._slide(this._directionToOrder(fn)),rightCallback:()=>this._slide(this._directionToOrder(Ds)),endCallback:()=>{this._config.pause==="hover"&&(this.pause(),this.touchTimeout&&clearTimeout(this.touchTimeout),this.touchTimeout=setTimeout(()=>this._maybeEnableCycle(),Hd+this._config.interval))}};this._swipeHelper=new Us(this._element,n)}_keydown(t){if(/input|textarea/i.test(t.target.tagName))return;const n=af[t.key];n&&(t.preventDefault(),this._slide(this._directionToOrder(n)))}_getItemIndex(t){return this._getItems().indexOf(t)}_setActiveIndicatorElement(t){if(!this._indicatorsElement)return;const n=te.findOne(Ll,this._indicatorsElement);n.classList.remove(ws),n.removeAttribute("aria-current");const s=te.findOne(`[data-bs-slide-to="${t}"]`,this._indicatorsElement);s&&(s.classList.add(ws),s.setAttribute("aria-current","true"))}_updateInterval(){const t=this._activeElement||this._getActive();if(!t)return;const n=Number.parseInt(t.getAttribute("data-bs-interval"),10);this._config.interval=n||this._config.defaultInterval}_slide(t,n=null){if(this._isSliding)return;const s=this._getActive(),i=t===Wn,r=n||Mr(this._getItems(),s,i,this._config.wrap);if(r===s)return;const o=this._getItemIndex(r),a=g=>R.trigger(this._element,g,{relatedTarget:r,direction:this._orderToDirection(t),from:this._getItemIndex(s),to:o});if(a(jd).defaultPrevented||!s||!r)return;const c=!!this._interval;this.pause(),this._isSliding=!0,this._setActiveIndicatorElement(o),this._activeElement=r;const u=i?Zd:Qd,d=i?Jd:ef;r.classList.add(d),ps(r),s.classList.add(u),r.classList.add(u);const p=()=>{r.classList.remove(u,d),r.classList.add(ws),s.classList.remove(ws,d,u),this._isSliding=!1,a(Ni)};this._queueCallback(p,s,this._isAnimated()),c&&this.cycle()}_isAnimated(){return this._element.classList.contains(Xd)}_getActive(){return te.findOne(tf,this._element)}_getItems(){return te.find(Ml,this._element)}_clearInterval(){this._interval&&(clearInterval(this._interval),this._interval=null)}_directionToOrder(t){return Ge()?t===fn?an:Wn:t===fn?Wn:an}_orderToDirection(t){return Ge()?t===an?fn:Ds:t===an?Ds:fn}static jQueryInterface(t){return this.each(function(){const n=ms.getOrCreateInstance(this,t);if(typeof t=="number"){n.to(t);return}if(typeof t=="string"){if(n[t]===void 0||t.startsWith("_")||t==="constructor")throw new TypeError(`No method named "${t}"`);n[t]()}})}}R.on(document,Yd,rf,function(e){const t=_t(this);if(!t||!t.classList.contains($l))return;e.preventDefault();const n=ms.getOrCreateInstance(t),s=this.getAttribute("data-bs-slide-to");if(s){n.to(s),n._maybeEnableCycle();return}if(bt.getDataAttribute(this,"slide")==="next"){n.next(),n._maybeEnableCycle();return}n.prev(),n._maybeEnableCycle()});R.on(window,Gd,()=>{const e=te.find(of);for(const t of e)ms.getOrCreateInstance(t)});Ye(ms);const uf="collapse",df="bs.collapse",gs=`.${df}`,ff=".data-api",pf=`show${gs}`,hf=`shown${gs}`,mf=`hide${gs}`,gf=`hidden${gs}`,_f=`click${gs}${ff}`,Ri="show",mn="collapse",Es="collapsing",vf="collapsed",bf=`:scope .${mn} .${mn}`,yf="collapse-horizontal",wf="width",Ef="height",kf=".collapse.show, .collapse.collapsing",or='[data-bs-toggle="collapse"]',Af={parent:null,toggle:!0},Tf={parent:"(null|element)",toggle:"boolean"};class ns extends nt{constructor(t,n){super(t,n),this._isTransitioning=!1,this._triggerArray=[];const s=te.find(or);for(const i of s){const r=El(i),o=te.find(r).filter(a=>a===this._element);r!==null&&o.length&&this._triggerArray.push(i)}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return Af}static get DefaultType(){return Tf}static get NAME(){return uf}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let t=[];if(this._config.parent&&(t=this._getFirstLevelChildren(kf).filter(a=>a!==this._element).map(a=>ns.getOrCreateInstance(a,{toggle:!1}))),t.length&&t[0]._isTransitioning||R.trigger(this._element,pf).defaultPrevented)return;for(const a of t)a.hide();const s=this._getDimension();this._element.classList.remove(mn),this._element.classList.add(Es),this._element.style[s]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;const i=()=>{this._isTransitioning=!1,this._element.classList.remove(Es),this._element.classList.add(mn,Ri),this._element.style[s]="",R.trigger(this._element,hf)},o=`scroll${s[0].toUpperCase()+s.slice(1)}`;this._queueCallback(i,this._element,!0),this._element.style[s]=`${this._element[o]}px`}hide(){if(this._isTransitioning||!this._isShown()||R.trigger(this._element,mf).defaultPrevented)return;const n=this._getDimension();this._element.style[n]=`${this._element.getBoundingClientRect()[n]}px`,ps(this._element),this._element.classList.add(Es),this._element.classList.remove(mn,Ri);for(const i of this._triggerArray){const r=_t(i);r&&!this._isShown(r)&&this._addAriaAndCollapsedClass([i],!1)}this._isTransitioning=!0;const s=()=>{this._isTransitioning=!1,this._element.classList.remove(Es),this._element.classList.add(mn),R.trigger(this._element,gf)};this._element.style[n]="",this._queueCallback(s,this._element,!0)}_isShown(t=this._element){return t.classList.contains(Ri)}_configAfterMerge(t){return t.toggle=!!t.toggle,t.parent=Dt(t.parent),t}_getDimension(){return this._element.classList.contains(yf)?wf:Ef}_initializeChildren(){if(!this._config.parent)return;const t=this._getFirstLevelChildren(or);for(const n of t){const s=_t(n);s&&this._addAriaAndCollapsedClass([n],this._isShown(s))}}_getFirstLevelChildren(t){const n=te.find(bf,this._config.parent);return te.find(t,this._config.parent).filter(s=>!n.includes(s))}_addAriaAndCollapsedClass(t,n){if(t.length)for(const s of t)s.classList.toggle(vf,!n),s.setAttribute("aria-expanded",n)}static jQueryInterface(t){const n={};return typeof t=="string"&&/show|hide/.test(t)&&(n.toggle=!1),this.each(function(){const s=ns.getOrCreateInstance(this,n);if(typeof t=="string"){if(typeof s[t]>"u")throw new TypeError(`No method named "${t}"`);s[t]()}})}}R.on(document,_f,or,function(e){(e.target.tagName==="A"||e.delegateTarget&&e.delegateTarget.tagName==="A")&&e.preventDefault();const t=El(this),n=te.find(t);for(const s of n)ns.getOrCreateInstance(s,{toggle:!1}).toggle()});Ye(ns);const Po="dropdown",Sf="bs.dropdown",sn=`.${Sf}`,Fr=".data-api",Cf="Escape",Oo="Tab",xf="ArrowUp",Io="ArrowDown",Pf=2,Of=`hide${sn}`,If=`hidden${sn}`,Nf=`show${sn}`,Rf=`shown${sn}`,Bl=`click${sn}${Fr}`,Fl=`keydown${sn}${Fr}`,Df=`keyup${sn}${Fr}`,pn="show",$f="dropup",Lf="dropend",Mf="dropstart",Bf="dropup-center",Ff="dropdown-center",Gt='[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',Vf=`${Gt}.${pn}`,$s=".dropdown-menu",Wf=".navbar",Hf=".navbar-nav",jf=".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",Uf=Ge()?"top-end":"top-start",qf=Ge()?"top-start":"top-end",zf=Ge()?"bottom-end":"bottom-start",Kf=Ge()?"bottom-start":"bottom-end",Gf=Ge()?"left-start":"right-start",Yf=Ge()?"right-start":"left-start",Xf="top",Qf="bottom",Zf={autoClose:!0,boundary:"clippingParents",display:"dynamic",offset:[0,2],popperConfig:null,reference:"toggle"},Jf={autoClose:"(boolean|string)",boundary:"(string|element)",display:"string",offset:"(array|string|function)",popperConfig:"(null|object|function)",reference:"(string|element|object)"};class ct extends nt{constructor(t,n){super(t,n),this._popper=null,this._parent=this._element.parentNode,this._menu=te.next(this._element,$s)[0]||te.prev(this._element,$s)[0]||te.findOne($s,this._parent),this._inNavbar=this._detectNavbar()}static get Default(){return Zf}static get DefaultType(){return Jf}static get NAME(){return Po}toggle(){return this._isShown()?this.hide():this.show()}show(){if($t(this._element)||this._isShown())return;const t={relatedTarget:this._element};if(!R.trigger(this._element,Nf,t).defaultPrevented){if(this._createPopper(),"ontouchstart"in document.documentElement&&!this._parent.closest(Hf))for(const s of[].concat(...document.body.children))R.on(s,"mouseover",js);this._element.focus(),this._element.setAttribute("aria-expanded",!0),this._menu.classList.add(pn),this._element.classList.add(pn),R.trigger(this._element,Rf,t)}}hide(){if($t(this._element)||!this._isShown())return;const t={relatedTarget:this._element};this._completeHide(t)}dispose(){this._popper&&this._popper.destroy(),super.dispose()}update(){this._inNavbar=this._detectNavbar(),this._popper&&this._popper.update()}_completeHide(t){if(!R.trigger(this._element,Of,t).defaultPrevented){if("ontouchstart"in document.documentElement)for(const s of[].concat(...document.body.children))R.off(s,"mouseover",js);this._popper&&this._popper.destroy(),this._menu.classList.remove(pn),this._element.classList.remove(pn),this._element.setAttribute("aria-expanded","false"),bt.removeDataAttribute(this._menu,"popper"),R.trigger(this._element,If,t)}}_getConfig(t){if(t=super._getConfig(t),typeof t.reference=="object"&&!vt(t.reference)&&typeof t.reference.getBoundingClientRect!="function")throw new TypeError(`${Po.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);return t}_createPopper(){if(typeof yl>"u")throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");let t=this._element;this._config.reference==="parent"?t=this._parent:vt(this._config.reference)?t=Dt(this._config.reference):typeof this._config.reference=="object"&&(t=this._config.reference);const n=this._getPopperConfig();this._popper=Lr(t,this._menu,n)}_isShown(){return this._menu.classList.contains(pn)}_getPlacement(){const t=this._parent;if(t.classList.contains(Lf))return Gf;if(t.classList.contains(Mf))return Yf;if(t.classList.contains(Bf))return Xf;if(t.classList.contains(Ff))return Qf;const n=getComputedStyle(this._menu).getPropertyValue("--bs-position").trim()==="end";return t.classList.contains($f)?n?qf:Uf:n?Kf:zf}_detectNavbar(){return this._element.closest(Wf)!==null}_getOffset(){const{offset:t}=this._config;return typeof t=="string"?t.split(",").map(n=>Number.parseInt(n,10)):typeof t=="function"?n=>t(n,this._element):t}_getPopperConfig(){const t={placement:this._getPlacement(),modifiers:[{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"offset",options:{offset:this._getOffset()}}]};return(this._inNavbar||this._config.display==="static")&&(bt.setDataAttribute(this._menu,"popper","static"),t.modifiers=[{name:"applyStyles",enabled:!1}]),{...t,...typeof this._config.popperConfig=="function"?this._config.popperConfig(t):this._config.popperConfig}}_selectMenuItem({key:t,target:n}){const s=te.find(jf,this._menu).filter(i=>Nn(i));s.length&&Mr(s,n,t===Io,!s.includes(n)).focus()}static jQueryInterface(t){return this.each(function(){const n=ct.getOrCreateInstance(this,t);if(typeof t=="string"){if(typeof n[t]>"u")throw new TypeError(`No method named "${t}"`);n[t]()}})}static clearMenus(t){if(t.button===Pf||t.type==="keyup"&&t.key!==Oo)return;const n=te.find(Vf);for(const s of n){const i=ct.getInstance(s);if(!i||i._config.autoClose===!1)continue;const r=t.composedPath(),o=r.includes(i._menu);if(r.includes(i._element)||i._config.autoClose==="inside"&&!o||i._config.autoClose==="outside"&&o||i._menu.contains(t.target)&&(t.type==="keyup"&&t.key===Oo||/input|select|option|textarea|form/i.test(t.target.tagName)))continue;const a={relatedTarget:i._element};t.type==="click"&&(a.clickEvent=t),i._completeHide(a)}}static dataApiKeydownHandler(t){const n=/input|textarea/i.test(t.target.tagName),s=t.key===Cf,i=[xf,Io].includes(t.key);if(!i&&!s||n&&!s)return;t.preventDefault();const r=this.matches(Gt)?this:te.prev(this,Gt)[0]||te.next(this,Gt)[0]||te.findOne(Gt,t.delegateTarget.parentNode),o=ct.getOrCreateInstance(r);if(i){t.stopPropagation(),o.show(),o._selectMenuItem(t);return}o._isShown()&&(t.stopPropagation(),o.hide(),r.focus())}}R.on(document,Fl,Gt,ct.dataApiKeydownHandler);R.on(document,Fl,$s,ct.dataApiKeydownHandler);R.on(document,Bl,ct.clearMenus);R.on(document,Df,ct.clearMenus);R.on(document,Bl,Gt,function(e){e.preventDefault(),ct.getOrCreateInstance(this).toggle()});Ye(ct);const No=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",Ro=".sticky-top",ks="padding-right",Do="margin-right";class ar{constructor(){this._element=document.body}getWidth(){const t=document.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}hide(){const t=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,ks,n=>n+t),this._setElementAttributes(No,ks,n=>n+t),this._setElementAttributes(Ro,Do,n=>n-t)}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,ks),this._resetElementAttributes(No,ks),this._resetElementAttributes(Ro,Do)}isOverflowing(){return this.getWidth()>0}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(t,n,s){const i=this.getWidth(),r=o=>{if(o!==this._element&&window.innerWidth>o.clientWidth+i)return;this._saveInitialAttribute(o,n);const a=window.getComputedStyle(o).getPropertyValue(n);o.style.setProperty(n,`${s(Number.parseFloat(a))}px`)};this._applyManipulationCallback(t,r)}_saveInitialAttribute(t,n){const s=t.style.getPropertyValue(n);s&&bt.setDataAttribute(t,n,s)}_resetElementAttributes(t,n){const s=i=>{const r=bt.getDataAttribute(i,n);if(r===null){i.style.removeProperty(n);return}bt.removeDataAttribute(i,n),i.style.setProperty(n,r)};this._applyManipulationCallback(t,s)}_applyManipulationCallback(t,n){if(vt(t)){n(t);return}for(const s of te.find(t,this._element))n(s)}}const Vl="backdrop",ep="fade",$o="show",Lo=`mousedown.bs.${Vl}`,tp={className:"modal-backdrop",clickCallback:null,isAnimated:!1,isVisible:!0,rootElement:"body"},np={className:"string",clickCallback:"(function|null)",isAnimated:"boolean",isVisible:"boolean",rootElement:"(element|string)"};class Wl extends hs{constructor(t){super(),this._config=this._getConfig(t),this._isAppended=!1,this._element=null}static get Default(){return tp}static get DefaultType(){return np}static get NAME(){return Vl}show(t){if(!this._config.isVisible){gt(t);return}this._append();const n=this._getElement();this._config.isAnimated&&ps(n),n.classList.add($o),this._emulateAnimation(()=>{gt(t)})}hide(t){if(!this._config.isVisible){gt(t);return}this._getElement().classList.remove($o),this._emulateAnimation(()=>{this.dispose(),gt(t)})}dispose(){this._isAppended&&(R.off(this._element,Lo),this._element.remove(),this._isAppended=!1)}_getElement(){if(!this._element){const t=document.createElement("div");t.className=this._config.className,this._config.isAnimated&&t.classList.add(ep),this._element=t}return this._element}_configAfterMerge(t){return t.rootElement=Dt(t.rootElement),t}_append(){if(this._isAppended)return;const t=this._getElement();this._config.rootElement.append(t),R.on(t,Lo,()=>{gt(this._config.clickCallback)}),this._isAppended=!0}_emulateAnimation(t){Sl(t,this._getElement(),this._config.isAnimated)}}const sp="focustrap",ip="bs.focustrap",qs=`.${ip}`,rp=`focusin${qs}`,op=`keydown.tab${qs}`,ap="Tab",lp="forward",Mo="backward",cp={autofocus:!0,trapElement:null},up={autofocus:"boolean",trapElement:"element"};class Hl extends hs{constructor(t){super(),this._config=this._getConfig(t),this._isActive=!1,this._lastTabNavDirection=null}static get Default(){return cp}static get DefaultType(){return up}static get NAME(){return sp}activate(){this._isActive||(this._config.autofocus&&this._config.trapElement.focus(),R.off(document,qs),R.on(document,rp,t=>this._handleFocusin(t)),R.on(document,op,t=>this._handleKeydown(t)),this._isActive=!0)}deactivate(){this._isActive&&(this._isActive=!1,R.off(document,qs))}_handleFocusin(t){const{trapElement:n}=this._config;if(t.target===document||t.target===n||n.contains(t.target))return;const s=te.focusableChildren(n);s.length===0?n.focus():this._lastTabNavDirection===Mo?s[s.length-1].focus():s[0].focus()}_handleKeydown(t){t.key===ap&&(this._lastTabNavDirection=t.shiftKey?Mo:lp)}}const dp="modal",fp="bs.modal",st=`.${fp}`,pp=".data-api",hp="Escape",mp=`hide${st}`,gp=`hidePrevented${st}`,jl=`hidden${st}`,Ul=`show${st}`,_p=`shown${st}`,vp=`resize${st}`,bp=`click.dismiss${st}`,yp=`mousedown.dismiss${st}`,wp=`keydown.dismiss${st}`,Ep=`click${st}${pp}`,Bo="modal-open",kp="fade",Fo="show",Di="modal-static",Ap=".modal.show",Tp=".modal-dialog",Sp=".modal-body",Cp='[data-bs-toggle="modal"]',xp={backdrop:!0,focus:!0,keyboard:!0},Pp={backdrop:"(boolean|string)",focus:"boolean",keyboard:"boolean"};class An extends nt{constructor(t,n){super(t,n),this._dialog=te.findOne(Tp,this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._isTransitioning=!1,this._scrollBar=new ar,this._addEventListeners()}static get Default(){return xp}static get DefaultType(){return Pp}static get NAME(){return dp}toggle(t){return this._isShown?this.hide():this.show(t)}show(t){this._isShown||this._isTransitioning||R.trigger(this._element,Ul,{relatedTarget:t}).defaultPrevented||(this._isShown=!0,this._isTransitioning=!0,this._scrollBar.hide(),document.body.classList.add(Bo),this._adjustDialog(),this._backdrop.show(()=>this._showElement(t)))}hide(){!this._isShown||this._isTransitioning||R.trigger(this._element,mp).defaultPrevented||(this._isShown=!1,this._isTransitioning=!0,this._focustrap.deactivate(),this._element.classList.remove(Fo),this._queueCallback(()=>this._hideModal(),this._element,this._isAnimated()))}dispose(){for(const t of[window,this._dialog])R.off(t,st);this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new Wl({isVisible:!!this._config.backdrop,isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new Hl({trapElement:this._element})}_showElement(t){document.body.contains(this._element)||document.body.append(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0;const n=te.findOne(Sp,this._dialog);n&&(n.scrollTop=0),ps(this._element),this._element.classList.add(Fo);const s=()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,R.trigger(this._element,_p,{relatedTarget:t})};this._queueCallback(s,this._dialog,this._isAnimated())}_addEventListeners(){R.on(this._element,wp,t=>{if(t.key===hp){if(this._config.keyboard){t.preventDefault(),this.hide();return}this._triggerBackdropTransition()}}),R.on(window,vp,()=>{this._isShown&&!this._isTransitioning&&this._adjustDialog()}),R.on(this._element,yp,t=>{R.one(this._element,bp,n=>{if(!(this._element!==t.target||this._element!==n.target)){if(this._config.backdrop==="static"){this._triggerBackdropTransition();return}this._config.backdrop&&this.hide()}})})}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide(()=>{document.body.classList.remove(Bo),this._resetAdjustments(),this._scrollBar.reset(),R.trigger(this._element,jl)})}_isAnimated(){return this._element.classList.contains(kp)}_triggerBackdropTransition(){if(R.trigger(this._element,gp).defaultPrevented)return;const n=this._element.scrollHeight>document.documentElement.clientHeight,s=this._element.style.overflowY;s==="hidden"||this._element.classList.contains(Di)||(n||(this._element.style.overflowY="hidden"),this._element.classList.add(Di),this._queueCallback(()=>{this._element.classList.remove(Di),this._queueCallback(()=>{this._element.style.overflowY=s},this._dialog)},this._dialog),this._element.focus())}_adjustDialog(){const t=this._element.scrollHeight>document.documentElement.clientHeight,n=this._scrollBar.getWidth(),s=n>0;if(s&&!t){const i=Ge()?"paddingLeft":"paddingRight";this._element.style[i]=`${n}px`}if(!s&&t){const i=Ge()?"paddingRight":"paddingLeft";this._element.style[i]=`${n}px`}}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}static jQueryInterface(t,n){return this.each(function(){const s=An.getOrCreateInstance(this,t);if(typeof t=="string"){if(typeof s[t]>"u")throw new TypeError(`No method named "${t}"`);s[t](n)}})}}R.on(document,Ep,Cp,function(e){const t=_t(this);["A","AREA"].includes(this.tagName)&&e.preventDefault(),R.one(t,Ul,i=>{i.defaultPrevented||R.one(t,jl,()=>{Nn(this)&&this.focus()})});const n=te.findOne(Ap);n&&An.getInstance(n).hide(),An.getOrCreateInstance(t).toggle(this)});ri(An);Ye(An);const Op="offcanvas",Ip="bs.offcanvas",kt=`.${Ip}`,ql=".data-api",Np=`load${kt}${ql}`,Rp="Escape",Vo="show",Wo="showing",Ho="hiding",Dp="offcanvas-backdrop",zl=".offcanvas.show",$p=`show${kt}`,Lp=`shown${kt}`,Mp=`hide${kt}`,jo=`hidePrevented${kt}`,Kl=`hidden${kt}`,Bp=`resize${kt}`,Fp=`click${kt}${ql}`,Vp=`keydown.dismiss${kt}`,Wp='[data-bs-toggle="offcanvas"]',Hp={backdrop:!0,keyboard:!0,scroll:!1},jp={backdrop:"(boolean|string)",keyboard:"boolean",scroll:"boolean"};class Lt extends nt{constructor(t,n){super(t,n),this._isShown=!1,this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._addEventListeners()}static get Default(){return Hp}static get DefaultType(){return jp}static get NAME(){return Op}toggle(t){return this._isShown?this.hide():this.show(t)}show(t){if(this._isShown||R.trigger(this._element,$p,{relatedTarget:t}).defaultPrevented)return;this._isShown=!0,this._backdrop.show(),this._config.scroll||new ar().hide(),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.classList.add(Wo);const s=()=>{(!this._config.scroll||this._config.backdrop)&&this._focustrap.activate(),this._element.classList.add(Vo),this._element.classList.remove(Wo),R.trigger(this._element,Lp,{relatedTarget:t})};this._queueCallback(s,this._element,!0)}hide(){if(!this._isShown||R.trigger(this._element,Mp).defaultPrevented)return;this._focustrap.deactivate(),this._element.blur(),this._isShown=!1,this._element.classList.add(Ho),this._backdrop.hide();const n=()=>{this._element.classList.remove(Vo,Ho),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._config.scroll||new ar().reset(),R.trigger(this._element,Kl)};this._queueCallback(n,this._element,!0)}dispose(){this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}_initializeBackDrop(){const t=()=>{if(this._config.backdrop==="static"){R.trigger(this._element,jo);return}this.hide()},n=!!this._config.backdrop;return new Wl({className:Dp,isVisible:n,isAnimated:!0,rootElement:this._element.parentNode,clickCallback:n?t:null})}_initializeFocusTrap(){return new Hl({trapElement:this._element})}_addEventListeners(){R.on(this._element,Vp,t=>{if(t.key===Rp){if(!this._config.keyboard){R.trigger(this._element,jo);return}this.hide()}})}static jQueryInterface(t){return this.each(function(){const n=Lt.getOrCreateInstance(this,t);if(typeof t=="string"){if(n[t]===void 0||t.startsWith("_")||t==="constructor")throw new TypeError(`No method named "${t}"`);n[t](this)}})}}R.on(document,Fp,Wp,function(e){const t=_t(this);if(["A","AREA"].includes(this.tagName)&&e.preventDefault(),$t(this))return;R.one(t,Kl,()=>{Nn(this)&&this.focus()});const n=te.findOne(zl);n&&n!==t&&Lt.getInstance(n).hide(),Lt.getOrCreateInstance(t).toggle(this)});R.on(window,Np,()=>{for(const e of te.find(zl))Lt.getOrCreateInstance(e).show()});R.on(window,Bp,()=>{for(const e of te.find("[aria-modal][class*=show][class*=offcanvas-]"))getComputedStyle(e).position!=="fixed"&&Lt.getOrCreateInstance(e).hide()});ri(Lt);Ye(Lt);const Up=new Set(["background","cite","href","itemtype","longdesc","poster","src","xlink:href"]),qp=/^aria-[\w-]*$/i,zp=/^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i,Kp=/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i,Gp=(e,t)=>{const n=e.nodeName.toLowerCase();return t.includes(n)?Up.has(n)?!!(zp.test(e.nodeValue)||Kp.test(e.nodeValue)):!0:t.filter(s=>s instanceof RegExp).some(s=>s.test(n))},Gl={"*":["class","dir","id","lang","role",qp],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]};function Yp(e,t,n){if(!e.length)return e;if(n&&typeof n=="function")return n(e);const i=new window.DOMParser().parseFromString(e,"text/html"),r=[].concat(...i.body.querySelectorAll("*"));for(const o of r){const a=o.nodeName.toLowerCase();if(!Object.keys(t).includes(a)){o.remove();continue}const l=[].concat(...o.attributes),c=[].concat(t["*"]||[],t[a]||[]);for(const u of l)Gp(u,c)||o.removeAttribute(u.nodeName)}return i.body.innerHTML}const Xp="TemplateFactory",Qp={allowList:Gl,content:{},extraClass:"",html:!1,sanitize:!0,sanitizeFn:null,template:"<div></div>"},Zp={allowList:"object",content:"object",extraClass:"(string|function)",html:"boolean",sanitize:"boolean",sanitizeFn:"(null|function)",template:"string"},Jp={entry:"(string|element|function|null)",selector:"(string|element)"};class eh extends hs{constructor(t){super(),this._config=this._getConfig(t)}static get Default(){return Qp}static get DefaultType(){return Zp}static get NAME(){return Xp}getContent(){return Object.values(this._config.content).map(t=>this._resolvePossibleFunction(t)).filter(Boolean)}hasContent(){return this.getContent().length>0}changeContent(t){return this._checkContent(t),this._config.content={...this._config.content,...t},this}toHtml(){const t=document.createElement("div");t.innerHTML=this._maybeSanitize(this._config.template);for(const[i,r]of Object.entries(this._config.content))this._setContent(t,r,i);const n=t.children[0],s=this._resolvePossibleFunction(this._config.extraClass);return s&&n.classList.add(...s.split(" ")),n}_typeCheckConfig(t){super._typeCheckConfig(t),this._checkContent(t.content)}_checkContent(t){for(const[n,s]of Object.entries(t))super._typeCheckConfig({selector:n,entry:s},Jp)}_setContent(t,n,s){const i=te.findOne(s,t);if(i){if(n=this._resolvePossibleFunction(n),!n){i.remove();return}if(vt(n)){this._putElementInTemplate(Dt(n),i);return}if(this._config.html){i.innerHTML=this._maybeSanitize(n);return}i.textContent=n}}_maybeSanitize(t){return this._config.sanitize?Yp(t,this._config.allowList,this._config.sanitizeFn):t}_resolvePossibleFunction(t){return typeof t=="function"?t(this):t}_putElementInTemplate(t,n){if(this._config.html){n.innerHTML="",n.append(t);return}n.textContent=t.textContent}}const th="tooltip",nh=new Set(["sanitize","allowList","sanitizeFn"]),$i="fade",sh="modal",As="show",ih=".tooltip-inner",Uo=`.${sh}`,qo="hide.bs.modal",Hn="hover",Li="focus",rh="click",oh="manual",ah="hide",lh="hidden",ch="show",uh="shown",dh="inserted",fh="click",ph="focusin",hh="focusout",mh="mouseenter",gh="mouseleave",_h={AUTO:"auto",TOP:"top",RIGHT:Ge()?"left":"right",BOTTOM:"bottom",LEFT:Ge()?"right":"left"},vh={allowList:Gl,animation:!0,boundary:"clippingParents",container:!1,customClass:"",delay:0,fallbackPlacements:["top","right","bottom","left"],html:!1,offset:[0,0],placement:"top",popperConfig:null,sanitize:!0,sanitizeFn:null,selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',title:"",trigger:"hover focus"},bh={allowList:"object",animation:"boolean",boundary:"(string|element)",container:"(string|element|boolean)",customClass:"(string|function)",delay:"(number|object)",fallbackPlacements:"array",html:"boolean",offset:"(array|string|function)",placement:"(string|function)",popperConfig:"(null|object|function)",sanitize:"boolean",sanitizeFn:"(null|function)",selector:"(string|boolean)",template:"string",title:"(string|element|function)",trigger:"string"};class Dn extends nt{constructor(t,n){if(typeof yl>"u")throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");super(t,n),this._isEnabled=!0,this._timeout=0,this._isHovered=null,this._activeTrigger={},this._popper=null,this._templateFactory=null,this._newContent=null,this.tip=null,this._setListeners(),this._config.selector||this._fixTitle()}static get Default(){return vh}static get DefaultType(){return bh}static get NAME(){return th}enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}toggleEnabled(){this._isEnabled=!this._isEnabled}toggle(){if(this._isEnabled){if(this._activeTrigger.click=!this._activeTrigger.click,this._isShown()){this._leave();return}this._enter()}}dispose(){clearTimeout(this._timeout),R.off(this._element.closest(Uo),qo,this._hideModalHandler),this._element.getAttribute("data-bs-original-title")&&this._element.setAttribute("title",this._element.getAttribute("data-bs-original-title")),this._disposePopper(),super.dispose()}show(){if(this._element.style.display==="none")throw new Error("Please use show on visible elements");if(!(this._isWithContent()&&this._isEnabled))return;const t=R.trigger(this._element,this.constructor.eventName(ch)),s=(Al(this._element)||this._element.ownerDocument.documentElement).contains(this._element);if(t.defaultPrevented||!s)return;this._disposePopper();const i=this._getTipElement();this._element.setAttribute("aria-describedby",i.getAttribute("id"));const{container:r}=this._config;if(this._element.ownerDocument.documentElement.contains(this.tip)||(r.append(i),R.trigger(this._element,this.constructor.eventName(dh))),this._popper=this._createPopper(i),i.classList.add(As),"ontouchstart"in document.documentElement)for(const a of[].concat(...document.body.children))R.on(a,"mouseover",js);const o=()=>{R.trigger(this._element,this.constructor.eventName(uh)),this._isHovered===!1&&this._leave(),this._isHovered=!1};this._queueCallback(o,this.tip,this._isAnimated())}hide(){if(!this._isShown()||R.trigger(this._element,this.constructor.eventName(ah)).defaultPrevented)return;if(this._getTipElement().classList.remove(As),"ontouchstart"in document.documentElement)for(const i of[].concat(...document.body.children))R.off(i,"mouseover",js);this._activeTrigger[rh]=!1,this._activeTrigger[Li]=!1,this._activeTrigger[Hn]=!1,this._isHovered=null;const s=()=>{this._isWithActiveTrigger()||(this._isHovered||this._disposePopper(),this._element.removeAttribute("aria-describedby"),R.trigger(this._element,this.constructor.eventName(lh)))};this._queueCallback(s,this.tip,this._isAnimated())}update(){this._popper&&this._popper.update()}_isWithContent(){return!!this._getTitle()}_getTipElement(){return this.tip||(this.tip=this._createTipElement(this._newContent||this._getContentForTemplate())),this.tip}_createTipElement(t){const n=this._getTemplateFactory(t).toHtml();if(!n)return null;n.classList.remove($i,As),n.classList.add(`bs-${this.constructor.NAME}-auto`);const s=sd(this.constructor.NAME).toString();return n.setAttribute("id",s),this._isAnimated()&&n.classList.add($i),n}setContent(t){this._newContent=t,this._isShown()&&(this._disposePopper(),this.show())}_getTemplateFactory(t){return this._templateFactory?this._templateFactory.changeContent(t):this._templateFactory=new eh({...this._config,content:t,extraClass:this._resolvePossibleFunction(this._config.customClass)}),this._templateFactory}_getContentForTemplate(){return{[ih]:this._getTitle()}}_getTitle(){return this._resolvePossibleFunction(this._config.title)||this._element.getAttribute("data-bs-original-title")}_initializeOnDelegatedTarget(t){return this.constructor.getOrCreateInstance(t.delegateTarget,this._getDelegateConfig())}_isAnimated(){return this._config.animation||this.tip&&this.tip.classList.contains($i)}_isShown(){return this.tip&&this.tip.classList.contains(As)}_createPopper(t){const n=typeof this._config.placement=="function"?this._config.placement.call(this,t,this._element):this._config.placement,s=_h[n.toUpperCase()];return Lr(this._element,t,this._getPopperConfig(s))}_getOffset(){const{offset:t}=this._config;return typeof t=="string"?t.split(",").map(n=>Number.parseInt(n,10)):typeof t=="function"?n=>t(n,this._element):t}_resolvePossibleFunction(t){return typeof t=="function"?t.call(this._element):t}_getPopperConfig(t){const n={placement:t,modifiers:[{name:"flip",options:{fallbackPlacements:this._config.fallbackPlacements}},{name:"offset",options:{offset:this._getOffset()}},{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"arrow",options:{element:`.${this.constructor.NAME}-arrow`}},{name:"preSetPlacement",enabled:!0,phase:"beforeMain",fn:s=>{this._getTipElement().setAttribute("data-popper-placement",s.state.placement)}}]};return{...n,...typeof this._config.popperConfig=="function"?this._config.popperConfig(n):this._config.popperConfig}}_setListeners(){const t=this._config.trigger.split(" ");for(const n of t)if(n==="click")R.on(this._element,this.constructor.eventName(fh),this._config.selector,s=>{this._initializeOnDelegatedTarget(s).toggle()});else if(n!==oh){const s=n===Hn?this.constructor.eventName(mh):this.constructor.eventName(ph),i=n===Hn?this.constructor.eventName(gh):this.constructor.eventName(hh);R.on(this._element,s,this._config.selector,r=>{const o=this._initializeOnDelegatedTarget(r);o._activeTrigger[r.type==="focusin"?Li:Hn]=!0,o._enter()}),R.on(this._element,i,this._config.selector,r=>{const o=this._initializeOnDelegatedTarget(r);o._activeTrigger[r.type==="focusout"?Li:Hn]=o._element.contains(r.relatedTarget),o._leave()})}this._hideModalHandler=()=>{this._element&&this.hide()},R.on(this._element.closest(Uo),qo,this._hideModalHandler)}_fixTitle(){const t=this._element.getAttribute("title");t&&(!this._element.getAttribute("aria-label")&&!this._element.textContent.trim()&&this._element.setAttribute("aria-label",t),this._element.setAttribute("data-bs-original-title",t),this._element.removeAttribute("title"))}_enter(){if(this._isShown()||this._isHovered){this._isHovered=!0;return}this._isHovered=!0,this._setTimeout(()=>{this._isHovered&&this.show()},this._config.delay.show)}_leave(){this._isWithActiveTrigger()||(this._isHovered=!1,this._setTimeout(()=>{this._isHovered||this.hide()},this._config.delay.hide))}_setTimeout(t,n){clearTimeout(this._timeout),this._timeout=setTimeout(t,n)}_isWithActiveTrigger(){return Object.values(this._activeTrigger).includes(!0)}_getConfig(t){const n=bt.getDataAttributes(this._element);for(const s of Object.keys(n))nh.has(s)&&delete n[s];return t={...n,...typeof t=="object"&&t?t:{}},t=this._mergeConfigObj(t),t=this._configAfterMerge(t),this._typeCheckConfig(t),t}_configAfterMerge(t){return t.container=t.container===!1?document.body:Dt(t.container),typeof t.delay=="number"&&(t.delay={show:t.delay,hide:t.delay}),typeof t.title=="number"&&(t.title=t.title.toString()),typeof t.content=="number"&&(t.content=t.content.toString()),t}_getDelegateConfig(){const t={};for(const n in this._config)this.constructor.Default[n]!==this._config[n]&&(t[n]=this._config[n]);return t.selector=!1,t.trigger="manual",t}_disposePopper(){this._popper&&(this._popper.destroy(),this._popper=null),this.tip&&(this.tip.remove(),this.tip=null)}static jQueryInterface(t){return this.each(function(){const n=Dn.getOrCreateInstance(this,t);if(typeof t=="string"){if(typeof n[t]>"u")throw new TypeError(`No method named "${t}"`);n[t]()}})}}Ye(Dn);const yh="popover",wh=".popover-header",Eh=".popover-body",kh={...Dn.Default,content:"",offset:[0,8],placement:"right",template:'<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',trigger:"click"},Ah={...Dn.DefaultType,content:"(null|string|element|function)"};class Vr extends Dn{static get Default(){return kh}static get DefaultType(){return Ah}static get NAME(){return yh}_isWithContent(){return this._getTitle()||this._getContent()}_getContentForTemplate(){return{[wh]:this._getTitle(),[Eh]:this._getContent()}}_getContent(){return this._resolvePossibleFunction(this._config.content)}static jQueryInterface(t){return this.each(function(){const n=Vr.getOrCreateInstance(this,t);if(typeof t=="string"){if(typeof n[t]>"u")throw new TypeError(`No method named "${t}"`);n[t]()}})}}Ye(Vr);const Th="scrollspy",Sh="bs.scrollspy",Wr=`.${Sh}`,Ch=".data-api",xh=`activate${Wr}`,zo=`click${Wr}`,Ph=`load${Wr}${Ch}`,Oh="dropdown-item",ln="active",Ih='[data-bs-spy="scroll"]',Mi="[href]",Nh=".nav, .list-group",Ko=".nav-link",Rh=".nav-item",Dh=".list-group-item",$h=`${Ko}, ${Rh} > ${Ko}, ${Dh}`,Lh=".dropdown",Mh=".dropdown-toggle",Bh={offset:null,rootMargin:"0px 0px -25%",smoothScroll:!1,target:null,threshold:[.1,.5,1]},Fh={offset:"(number|null)",rootMargin:"string",smoothScroll:"boolean",target:"element",threshold:"array"};class li extends nt{constructor(t,n){super(t,n),this._targetLinks=new Map,this._observableSections=new Map,this._rootElement=getComputedStyle(this._element).overflowY==="visible"?null:this._element,this._activeTarget=null,this._observer=null,this._previousScrollData={visibleEntryTop:0,parentScrollTop:0},this.refresh()}static get Default(){return Bh}static get DefaultType(){return Fh}static get NAME(){return Th}refresh(){this._initializeTargetsAndObservables(),this._maybeEnableSmoothScroll(),this._observer?this._observer.disconnect():this._observer=this._getNewObserver();for(const t of this._observableSections.values())this._observer.observe(t)}dispose(){this._observer.disconnect(),super.dispose()}_configAfterMerge(t){return t.target=Dt(t.target)||document.body,t.rootMargin=t.offset?`${t.offset}px 0px -30%`:t.rootMargin,typeof t.threshold=="string"&&(t.threshold=t.threshold.split(",").map(n=>Number.parseFloat(n))),t}_maybeEnableSmoothScroll(){this._config.smoothScroll&&(R.off(this._config.target,zo),R.on(this._config.target,zo,Mi,t=>{const n=this._observableSections.get(t.target.hash);if(n){t.preventDefault();const s=this._rootElement||window,i=n.offsetTop-this._element.offsetTop;if(s.scrollTo){s.scrollTo({top:i,behavior:"smooth"});return}s.scrollTop=i}}))}_getNewObserver(){const t={root:this._rootElement,threshold:this._config.threshold,rootMargin:this._config.rootMargin};return new IntersectionObserver(n=>this._observerCallback(n),t)}_observerCallback(t){const n=o=>this._targetLinks.get(`#${o.target.id}`),s=o=>{this._previousScrollData.visibleEntryTop=o.target.offsetTop,this._process(n(o))},i=(this._rootElement||document.documentElement).scrollTop,r=i>=this._previousScrollData.parentScrollTop;this._previousScrollData.parentScrollTop=i;for(const o of t){if(!o.isIntersecting){this._activeTarget=null,this._clearActiveClass(n(o));continue}const a=o.target.offsetTop>=this._previousScrollData.visibleEntryTop;if(r&&a){if(s(o),!i)return;continue}!r&&!a&&s(o)}}_initializeTargetsAndObservables(){this._targetLinks=new Map,this._observableSections=new Map;const t=te.find(Mi,this._config.target);for(const n of t){if(!n.hash||$t(n))continue;const s=te.findOne(n.hash,this._element);Nn(s)&&(this._targetLinks.set(n.hash,n),this._observableSections.set(n.hash,s))}}_process(t){this._activeTarget!==t&&(this._clearActiveClass(this._config.target),this._activeTarget=t,t.classList.add(ln),this._activateParents(t),R.trigger(this._element,xh,{relatedTarget:t}))}_activateParents(t){if(t.classList.contains(Oh)){te.findOne(Mh,t.closest(Lh)).classList.add(ln);return}for(const n of te.parents(t,Nh))for(const s of te.prev(n,$h))s.classList.add(ln)}_clearActiveClass(t){t.classList.remove(ln);const n=te.find(`${Mi}.${ln}`,t);for(const s of n)s.classList.remove(ln)}static jQueryInterface(t){return this.each(function(){const n=li.getOrCreateInstance(this,t);if(typeof t=="string"){if(n[t]===void 0||t.startsWith("_")||t==="constructor")throw new TypeError(`No method named "${t}"`);n[t]()}})}}R.on(window,Ph,()=>{for(const e of te.find(Ih))li.getOrCreateInstance(e)});Ye(li);const Vh="tab",Wh="bs.tab",rn=`.${Wh}`,Hh=`hide${rn}`,jh=`hidden${rn}`,Uh=`show${rn}`,qh=`shown${rn}`,zh=`click${rn}`,Kh=`keydown${rn}`,Gh=`load${rn}`,Yh="ArrowLeft",Go="ArrowRight",Xh="ArrowUp",Yo="ArrowDown",Yt="active",Xo="fade",Bi="show",Qh="dropdown",Zh=".dropdown-toggle",Jh=".dropdown-menu",Fi=":not(.dropdown-toggle)",em='.list-group, .nav, [role="tablist"]',tm=".nav-item, .list-group-item",nm=`.nav-link${Fi}, .list-group-item${Fi}, [role="tab"]${Fi}`,Yl='[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',Vi=`${nm}, ${Yl}`,sm=`.${Yt}[data-bs-toggle="tab"], .${Yt}[data-bs-toggle="pill"], .${Yt}[data-bs-toggle="list"]`;class Tn extends nt{constructor(t){super(t),this._parent=this._element.closest(em),this._parent&&(this._setInitialAttributes(this._parent,this._getChildren()),R.on(this._element,Kh,n=>this._keydown(n)))}static get NAME(){return Vh}show(){const t=this._element;if(this._elemIsActive(t))return;const n=this._getActiveElem(),s=n?R.trigger(n,Hh,{relatedTarget:t}):null;R.trigger(t,Uh,{relatedTarget:n}).defaultPrevented||s&&s.defaultPrevented||(this._deactivate(n,t),this._activate(t,n))}_activate(t,n){if(!t)return;t.classList.add(Yt),this._activate(_t(t));const s=()=>{if(t.getAttribute("role")!=="tab"){t.classList.add(Bi);return}t.removeAttribute("tabindex"),t.setAttribute("aria-selected",!0),this._toggleDropDown(t,!0),R.trigger(t,qh,{relatedTarget:n})};this._queueCallback(s,t,t.classList.contains(Xo))}_deactivate(t,n){if(!t)return;t.classList.remove(Yt),t.blur(),this._deactivate(_t(t));const s=()=>{if(t.getAttribute("role")!=="tab"){t.classList.remove(Bi);return}t.setAttribute("aria-selected",!1),t.setAttribute("tabindex","-1"),this._toggleDropDown(t,!1),R.trigger(t,jh,{relatedTarget:n})};this._queueCallback(s,t,t.classList.contains(Xo))}_keydown(t){if(![Yh,Go,Xh,Yo].includes(t.key))return;t.stopPropagation(),t.preventDefault();const n=[Go,Yo].includes(t.key),s=Mr(this._getChildren().filter(i=>!$t(i)),t.target,n,!0);s&&(s.focus({preventScroll:!0}),Tn.getOrCreateInstance(s).show())}_getChildren(){return te.find(Vi,this._parent)}_getActiveElem(){return this._getChildren().find(t=>this._elemIsActive(t))||null}_setInitialAttributes(t,n){this._setAttributeIfNotExists(t,"role","tablist");for(const s of n)this._setInitialAttributesOnChild(s)}_setInitialAttributesOnChild(t){t=this._getInnerElement(t);const n=this._elemIsActive(t),s=this._getOuterElement(t);t.setAttribute("aria-selected",n),s!==t&&this._setAttributeIfNotExists(s,"role","presentation"),n||t.setAttribute("tabindex","-1"),this._setAttributeIfNotExists(t,"role","tab"),this._setInitialAttributesOnTargetPanel(t)}_setInitialAttributesOnTargetPanel(t){const n=_t(t);n&&(this._setAttributeIfNotExists(n,"role","tabpanel"),t.id&&this._setAttributeIfNotExists(n,"aria-labelledby",`#${t.id}`))}_toggleDropDown(t,n){const s=this._getOuterElement(t);if(!s.classList.contains(Qh))return;const i=(r,o)=>{const a=te.findOne(r,s);a&&a.classList.toggle(o,n)};i(Zh,Yt),i(Jh,Bi),s.setAttribute("aria-expanded",n)}_setAttributeIfNotExists(t,n,s){t.hasAttribute(n)||t.setAttribute(n,s)}_elemIsActive(t){return t.classList.contains(Yt)}_getInnerElement(t){return t.matches(Vi)?t:te.findOne(Vi,t)}_getOuterElement(t){return t.closest(tm)||t}static jQueryInterface(t){return this.each(function(){const n=Tn.getOrCreateInstance(this);if(typeof t=="string"){if(n[t]===void 0||t.startsWith("_")||t==="constructor")throw new TypeError(`No method named "${t}"`);n[t]()}})}}R.on(document,zh,Yl,function(e){["A","AREA"].includes(this.tagName)&&e.preventDefault(),!$t(this)&&Tn.getOrCreateInstance(this).show()});R.on(window,Gh,()=>{for(const e of te.find(sm))Tn.getOrCreateInstance(e)});Ye(Tn);const im="toast",rm="bs.toast",Wt=`.${rm}`,om=`mouseover${Wt}`,am=`mouseout${Wt}`,lm=`focusin${Wt}`,cm=`focusout${Wt}`,um=`hide${Wt}`,dm=`hidden${Wt}`,fm=`show${Wt}`,pm=`shown${Wt}`,hm="fade",Qo="hide",Ts="show",Ss="showing",mm={animation:"boolean",autohide:"boolean",delay:"number"},gm={animation:!0,autohide:!0,delay:5e3};class ci extends nt{constructor(t,n){super(t,n),this._timeout=null,this._hasMouseInteraction=!1,this._hasKeyboardInteraction=!1,this._setListeners()}static get Default(){return gm}static get DefaultType(){return mm}static get NAME(){return im}show(){if(R.trigger(this._element,fm).defaultPrevented)return;this._clearTimeout(),this._config.animation&&this._element.classList.add(hm);const n=()=>{this._element.classList.remove(Ss),R.trigger(this._element,pm),this._maybeScheduleHide()};this._element.classList.remove(Qo),ps(this._element),this._element.classList.add(Ts,Ss),this._queueCallback(n,this._element,this._config.animation)}hide(){if(!this.isShown()||R.trigger(this._element,um).defaultPrevented)return;const n=()=>{this._element.classList.add(Qo),this._element.classList.remove(Ss,Ts),R.trigger(this._element,dm)};this._element.classList.add(Ss),this._queueCallback(n,this._element,this._config.animation)}dispose(){this._clearTimeout(),this.isShown()&&this._element.classList.remove(Ts),super.dispose()}isShown(){return this._element.classList.contains(Ts)}_maybeScheduleHide(){this._config.autohide&&(this._hasMouseInteraction||this._hasKeyboardInteraction||(this._timeout=setTimeout(()=>{this.hide()},this._config.delay)))}_onInteraction(t,n){switch(t.type){case"mouseover":case"mouseout":{this._hasMouseInteraction=n;break}case"focusin":case"focusout":{this._hasKeyboardInteraction=n;break}}if(n){this._clearTimeout();return}const s=t.relatedTarget;this._element===s||this._element.contains(s)||this._maybeScheduleHide()}_setListeners(){R.on(this._element,om,t=>this._onInteraction(t,!0)),R.on(this._element,am,t=>this._onInteraction(t,!1)),R.on(this._element,lm,t=>this._onInteraction(t,!0)),R.on(this._element,cm,t=>this._onInteraction(t,!1))}_clearTimeout(){clearTimeout(this._timeout),this._timeout=null}static jQueryInterface(t){return this.each(function(){const n=ci.getOrCreateInstance(this,t);if(typeof t=="string"){if(typeof n[t]>"u")throw new TypeError(`No method named "${t}"`);n[t](this)}})}}ri(ci);Ye(ci);var Zo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function _m(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Xl={exports:{}};(function(e){var t=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{};/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */var n=function(s){var i=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,r=0,o={},a={manual:s.Prism&&s.Prism.manual,disableWorkerMessageHandler:s.Prism&&s.Prism.disableWorkerMessageHandler,util:{encode:function m(_){return _ instanceof l?new l(_.type,m(_.content),_.alias):Array.isArray(_)?_.map(m):_.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(m){return Object.prototype.toString.call(m).slice(8,-1)},objId:function(m){return m.__id||Object.defineProperty(m,"__id",{value:++r}),m.__id},clone:function m(_,v){v=v||{};var y,T;switch(a.util.type(_)){case"Object":if(T=a.util.objId(_),v[T])return v[T];y={},v[T]=y;for(var D in _)_.hasOwnProperty(D)&&(y[D]=m(_[D],v));return y;case"Array":return T=a.util.objId(_),v[T]?v[T]:(y=[],v[T]=y,_.forEach(function(M,O){y[O]=m(M,v)}),y);default:return _}},getLanguage:function(m){for(;m;){var _=i.exec(m.className);if(_)return _[1].toLowerCase();m=m.parentElement}return"none"},setLanguage:function(m,_){m.className=m.className.replace(RegExp(i,"gi"),""),m.classList.add("language-"+_)},currentScript:function(){if(typeof document>"u")return null;if("currentScript"in document&&1<2)return document.currentScript;try{throw new Error}catch(y){var m=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(y.stack)||[])[1];if(m){var _=document.getElementsByTagName("script");for(var v in _)if(_[v].src==m)return _[v]}return null}},isActive:function(m,_,v){for(var y="no-"+_;m;){var T=m.classList;if(T.contains(_))return!0;if(T.contains(y))return!1;m=m.parentElement}return!!v}},languages:{plain:o,plaintext:o,text:o,txt:o,extend:function(m,_){var v=a.util.clone(a.languages[m]);for(var y in _)v[y]=_[y];return v},insertBefore:function(m,_,v,y){y=y||a.languages;var T=y[m],D={};for(var M in T)if(T.hasOwnProperty(M)){if(M==_)for(var O in v)v.hasOwnProperty(O)&&(D[O]=v[O]);v.hasOwnProperty(M)||(D[M]=T[M])}var H=y[m];return y[m]=D,a.languages.DFS(a.languages,function(X,re){re===H&&X!=m&&(this[X]=D)}),D},DFS:function m(_,v,y,T){T=T||{};var D=a.util.objId;for(var M in _)if(_.hasOwnProperty(M)){v.call(_,M,_[M],y||M);var O=_[M],H=a.util.type(O);H==="Object"&&!T[D(O)]?(T[D(O)]=!0,m(O,v,null,T)):H==="Array"&&!T[D(O)]&&(T[D(O)]=!0,m(O,v,M,T))}}},plugins:{},highlightAll:function(m,_){a.highlightAllUnder(document,m,_)},highlightAllUnder:function(m,_,v){var y={callback:v,container:m,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};a.hooks.run("before-highlightall",y),y.elements=Array.prototype.slice.apply(y.container.querySelectorAll(y.selector)),a.hooks.run("before-all-elements-highlight",y);for(var T=0,D;D=y.elements[T++];)a.highlightElement(D,_===!0,y.callback)},highlightElement:function(m,_,v){var y=a.util.getLanguage(m),T=a.languages[y];a.util.setLanguage(m,y);var D=m.parentElement;D&&D.nodeName.toLowerCase()==="pre"&&a.util.setLanguage(D,y);var M=m.textContent,O={element:m,language:y,grammar:T,code:M};function H(re){O.highlightedCode=re,a.hooks.run("before-insert",O),O.element.innerHTML=O.highlightedCode,a.hooks.run("after-highlight",O),a.hooks.run("complete",O),v&&v.call(O.element)}if(a.hooks.run("before-sanity-check",O),D=O.element.parentElement,D&&D.nodeName.toLowerCase()==="pre"&&!D.hasAttribute("tabindex")&&D.setAttribute("tabindex","0"),!O.code){a.hooks.run("complete",O),v&&v.call(O.element);return}if(a.hooks.run("before-highlight",O),!O.grammar){H(a.util.encode(O.code));return}if(_&&s.Worker){var X=new Worker(a.filename);X.onmessage=function(re){H(re.data)},X.postMessage(JSON.stringify({language:O.language,code:O.code,immediateClose:!0}))}else H(a.highlight(O.code,O.grammar,O.language))},highlight:function(m,_,v){var y={code:m,grammar:_,language:v};if(a.hooks.run("before-tokenize",y),!y.grammar)throw new Error('The language "'+y.language+'" has no grammar.');return y.tokens=a.tokenize(y.code,y.grammar),a.hooks.run("after-tokenize",y),l.stringify(a.util.encode(y.tokens),y.language)},tokenize:function(m,_){var v=_.rest;if(v){for(var y in v)_[y]=v[y];delete _.rest}var T=new d;return p(T,T.head,m),u(m,T,_,T.head,0),P(T)},hooks:{all:{},add:function(m,_){var v=a.hooks.all;v[m]=v[m]||[],v[m].push(_)},run:function(m,_){var v=a.hooks.all[m];if(!(!v||!v.length))for(var y=0,T;T=v[y++];)T(_)}},Token:l};s.Prism=a;function l(m,_,v,y){this.type=m,this.content=_,this.alias=v,this.length=(y||"").length|0}l.stringify=function m(_,v){if(typeof _=="string")return _;if(Array.isArray(_)){var y="";return _.forEach(function(H){y+=m(H,v)}),y}var T={type:_.type,content:m(_.content,v),tag:"span",classes:["token",_.type],attributes:{},language:v},D=_.alias;D&&(Array.isArray(D)?Array.prototype.push.apply(T.classes,D):T.classes.push(D)),a.hooks.run("wrap",T);var M="";for(var O in T.attributes)M+=" "+O+'="'+(T.attributes[O]||"").replace(/"/g,"&quot;")+'"';return"<"+T.tag+' class="'+T.classes.join(" ")+'"'+M+">"+T.content+"</"+T.tag+">"};function c(m,_,v,y){m.lastIndex=_;var T=m.exec(v);if(T&&y&&T[1]){var D=T[1].length;T.index+=D,T[0]=T[0].slice(D)}return T}function u(m,_,v,y,T,D){for(var M in v)if(!(!v.hasOwnProperty(M)||!v[M])){var O=v[M];O=Array.isArray(O)?O:[O];for(var H=0;H<O.length;++H){if(D&&D.cause==M+","+H)return;var X=O[H],re=X.inside,ue=!!X.lookbehind,xe=!!X.greedy,be=X.alias;if(xe&&!X.pattern.global){var Q=X.pattern.toString().match(/[imsuy]*$/)[0];X.pattern=RegExp(X.pattern.source,Q+"g")}for(var J=X.pattern||X,G=y.next,he=T;G!==_.tail&&!(D&&he>=D.reach);he+=G.value.length,G=G.next){var Ee=G.value;if(_.length>m.length)return;if(!(Ee instanceof l)){var Se=1,ce;if(xe){if(ce=c(J,he,m,ue),!ce||ce.index>=m.length)break;var me=ce.index,Ve=ce.index+ce[0].length,ye=he;for(ye+=G.value.length;me>=ye;)G=G.next,ye+=G.value.length;if(ye-=G.value.length,he=ye,G.value instanceof l)continue;for(var Ce=G;Ce!==_.tail&&(ye<Ve||typeof Ce.value=="string");Ce=Ce.next)Se++,ye+=Ce.value.length;Se--,Ee=m.slice(he,ye),ce.index-=he}else if(ce=c(J,0,Ee,ue),!ce)continue;var me=ce.index,k=ce[0],F=Ee.slice(0,me),B=Ee.slice(me+k.length),U=he+Ee.length;D&&U>D.reach&&(D.reach=U);var ne=G.prev;F&&(ne=p(_,ne,F),he+=F.length),g(_,ne,Se);var f=new l(M,re?a.tokenize(k,re):k,be,k);if(G=p(_,ne,f),B&&p(_,G,B),Se>1){var h={cause:M+","+H,reach:U};u(m,_,v,G.prev,he,h),D&&h.reach>D.reach&&(D.reach=h.reach)}}}}}}function d(){var m={value:null,prev:null,next:null},_={value:null,prev:m,next:null};m.next=_,this.head=m,this.tail=_,this.length=0}function p(m,_,v){var y=_.next,T={value:v,prev:_,next:y};return _.next=T,y.prev=T,m.length++,T}function g(m,_,v){for(var y=_.next,T=0;T<v&&y!==m.tail;T++)y=y.next;_.next=y,y.prev=_,m.length-=T}function P(m){for(var _=[],v=m.head.next;v!==m.tail;)_.push(v.value),v=v.next;return _}if(!s.document)return s.addEventListener&&(a.disableWorkerMessageHandler||s.addEventListener("message",function(m){var _=JSON.parse(m.data),v=_.language,y=_.code,T=_.immediateClose;s.postMessage(a.highlight(y,a.languages[v],v)),T&&s.close()},!1)),a;var E=a.util.currentScript();E&&(a.filename=E.src,E.hasAttribute("data-manual")&&(a.manual=!0));function S(){a.manual||a.highlightAll()}if(!a.manual){var x=document.readyState;x==="loading"||x==="interactive"&&E&&E.defer?document.addEventListener("DOMContentLoaded",S):window.requestAnimationFrame?window.requestAnimationFrame(S):window.setTimeout(S,16)}return a}(t);e.exports&&(e.exports=n),typeof Zo<"u"&&(Zo.Prism=n),n.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},n.languages.markup.tag.inside["attr-value"].inside.entity=n.languages.markup.entity,n.languages.markup.doctype.inside["internal-subset"].inside=n.languages.markup,n.hooks.add("wrap",function(s){s.type==="entity"&&(s.attributes.title=s.content.replace(/&amp;/,"&"))}),Object.defineProperty(n.languages.markup.tag,"addInlined",{value:function(i,r){var o={};o["language-"+r]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:n.languages[r]},o.cdata=/^<!\[CDATA\[|\]\]>$/i;var a={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:o}};a["language-"+r]={pattern:/[\s\S]+/,inside:n.languages[r]};var l={};l[i]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return i}),"i"),lookbehind:!0,greedy:!0,inside:a},n.languages.insertBefore("markup","cdata",l)}}),Object.defineProperty(n.languages.markup.tag,"addAttribute",{value:function(s,i){n.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+s+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[i,"language-"+i],inside:n.languages[i]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),n.languages.html=n.languages.markup,n.languages.mathml=n.languages.markup,n.languages.svg=n.languages.markup,n.languages.xml=n.languages.extend("markup",{}),n.languages.ssml=n.languages.xml,n.languages.atom=n.languages.xml,n.languages.rss=n.languages.xml,function(s){var i=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;s.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+i.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+i.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+i.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+i.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:i,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},s.languages.css.atrule.inside.rest=s.languages.css;var r=s.languages.markup;r&&(r.tag.addInlined("style","css"),r.tag.addAttribute("style","css"))}(n),n.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},n.languages.javascript=n.languages.extend("clike",{"class-name":[n.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),n.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,n.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:n.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:n.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:n.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:n.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:n.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),n.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:n.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),n.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),n.languages.markup&&(n.languages.markup.tag.addInlined("script","javascript"),n.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),n.languages.js=n.languages.javascript,function(){if(typeof n>"u"||typeof document>"u")return;Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var s="Loading…",i=function(E,S){return"✖ Error "+E+" while fetching file: "+S},r="✖ Error: File does not exist or is empty",o={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},a="data-src-status",l="loading",c="loaded",u="failed",d="pre[data-src]:not(["+a+'="'+c+'"]):not(['+a+'="'+l+'"])';function p(E,S,x){var m=new XMLHttpRequest;m.open("GET",E,!0),m.onreadystatechange=function(){m.readyState==4&&(m.status<400&&m.responseText?S(m.responseText):m.status>=400?x(i(m.status,m.statusText)):x(r))},m.send(null)}function g(E){var S=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(E||"");if(S){var x=Number(S[1]),m=S[2],_=S[3];return m?_?[x,Number(_)]:[x,void 0]:[x,x]}}n.hooks.add("before-highlightall",function(E){E.selector+=", "+d}),n.hooks.add("before-sanity-check",function(E){var S=E.element;if(S.matches(d)){E.code="",S.setAttribute(a,l);var x=S.appendChild(document.createElement("CODE"));x.textContent=s;var m=S.getAttribute("data-src"),_=E.language;if(_==="none"){var v=(/\.(\w+)$/.exec(m)||[,"none"])[1];_=o[v]||v}n.util.setLanguage(x,_),n.util.setLanguage(S,_);var y=n.plugins.autoloader;y&&y.loadLanguages(_),p(m,function(T){S.setAttribute(a,c);var D=g(S.getAttribute("data-range"));if(D){var M=T.split(/\r\n?|\n/g),O=D[0],H=D[1]==null?M.length:D[1];O<0&&(O+=M.length),O=Math.max(0,Math.min(O-1,M.length)),H<0&&(H+=M.length),H=Math.max(0,Math.min(H,M.length)),T=M.slice(O,H).join(`
`),S.hasAttribute("data-start")||S.setAttribute("data-start",String(O+1))}x.textContent=T,n.highlightElement(x)},function(T){S.setAttribute(a,u),x.textContent=T})}}),n.plugins.fileHighlight={highlight:function(S){for(var x=(S||document).querySelectorAll(d),m=0,_;_=x[m++];)n.highlightElement(_)}};var P=!1;n.fileHighlight=function(){P||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),P=!0),n.plugins.fileHighlight.highlight.apply(this,arguments)}}()})(Xl);var vm=Xl.exports;const Jo=_m(vm);Prism.languages.solidity=Prism.languages.extend("clike",{"class-name":{pattern:/(\b(?:contract|enum|interface|library|new|struct|using)\s+)(?!\d)[\w$]+/,lookbehind:!0},keyword:/\b(?:_|anonymous|as|assembly|assert|break|calldata|case|constant|constructor|continue|contract|default|delete|do|else|emit|enum|event|external|for|from|function|if|import|indexed|inherited|interface|internal|is|let|library|mapping|memory|modifier|new|payable|pragma|private|public|pure|require|returns?|revert|selfdestruct|solidity|storage|struct|suicide|switch|this|throw|using|var|view|while)\b/,operator:/=>|->|:=|=:|\*\*|\+\+|--|\|\||&&|<<=?|>>=?|[-+*/%^&|<>!=]=?|[~?]/});Prism.languages.insertBefore("solidity","keyword",{builtin:/\b(?:address|bool|byte|u?int(?:8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?|string|bytes(?:[1-9]|[12]\d|3[0-2])?)\b/});Prism.languages.insertBefore("solidity","number",{version:{pattern:/([<>]=?|\^)\d+\.\d+\.\d+\b/,lookbehind:!0,alias:"number"}});Prism.languages.sol=Prism.languages.solidity;var bm={exports:{}};(function(e){(function(){if(typeof Prism>"u")return;var t=Object.assign||function(o,a){for(var l in a)a.hasOwnProperty(l)&&(o[l]=a[l]);return o};function n(o){this.defaults=t({},o)}function s(o){return o.replace(/-(\w)/g,function(a,l){return l.toUpperCase()})}function i(o){for(var a=0,l=0;l<o.length;++l)o.charCodeAt(l)=="	".charCodeAt(0)&&(a+=3);return o.length+a}var r={"remove-trailing":"boolean","remove-indent":"boolean","left-trim":"boolean","right-trim":"boolean","break-lines":"number",indent:"number","remove-initial-line-feed":"boolean","tabs-to-spaces":"number","spaces-to-tabs":"number"};n.prototype={setDefaults:function(o){this.defaults=t(this.defaults,o)},normalize:function(o,a){a=t(this.defaults,a);for(var l in a){var c=s(l);l!=="normalize"&&c!=="setDefaults"&&a[l]&&this[c]&&(o=this[c].call(this,o,a[l]))}return o},leftTrim:function(o){return o.replace(/^\s+/,"")},rightTrim:function(o){return o.replace(/\s+$/,"")},tabsToSpaces:function(o,a){return a=a|0||4,o.replace(/\t/g,new Array(++a).join(" "))},spacesToTabs:function(o,a){return a=a|0||4,o.replace(RegExp(" {"+a+"}","g"),"	")},removeTrailing:function(o){return o.replace(/\s*?$/gm,"")},removeInitialLineFeed:function(o){return o.replace(/^(?:\r?\n|\r)/,"")},removeIndent:function(o){var a=o.match(/^[^\S\n\r]*(?=\S)/gm);return!a||!a[0].length||(a.sort(function(l,c){return l.length-c.length}),!a[0].length)?o:o.replace(RegExp("^"+a[0],"gm"),"")},indent:function(o,a){return o.replace(/^[^\S\n\r]*(?=\S)/gm,new Array(++a).join("	")+"$&")},breakLines:function(o,a){a=a===!0?80:a|0||80;for(var l=o.split(`
`),c=0;c<l.length;++c)if(!(i(l[c])<=a)){for(var u=l[c].split(/(\s+)/g),d=0,p=0;p<u.length;++p){var g=i(u[p]);d+=g,d>a&&(u[p]=`
`+u[p],d=g)}l[c]=u.join("")}return l.join(`
`)}},e.exports&&(e.exports=n),Prism.plugins.NormalizeWhitespace=new n({"remove-trailing":!0,"remove-indent":!0,"left-trim":!0,"right-trim":!0}),Prism.hooks.add("before-sanity-check",function(o){var a=Prism.plugins.NormalizeWhitespace;if(!(o.settings&&o.settings["whitespace-normalization"]===!1)&&Prism.util.isActive(o.element,"whitespace-normalization",!0)){if((!o.element||!o.element.parentNode)&&o.code){o.code=a.normalize(o.code,o.settings);return}var l=o.element.parentNode;if(!(!o.code||!l||l.nodeName.toLowerCase()!=="pre")){o.settings==null&&(o.settings={});for(var c in r)if(Object.hasOwnProperty.call(r,c)){var u=r[c];if(l.hasAttribute("data-"+c))try{var d=JSON.parse(l.getAttribute("data-"+c)||"true");typeof d===u&&(o.settings[c]=d)}catch{}}for(var p=l.childNodes,g="",P="",E=!1,S=0;S<p.length;++S){var x=p[S];x==o.element?E=!0:x.nodeName==="#text"&&(E?P+=x.nodeValue:g+=x.nodeValue,l.removeChild(x),--S)}if(!o.element.children.length||!Prism.plugins.KeepMarkup)o.code=g+o.code+P,o.code=a.normalize(o.code,o.settings);else{var m=g+o.element.innerHTML+P;o.element.innerHTML=a.normalize(m,o.settings),o.code=o.element.textContent}}}})})()})(bm);(function(){if(typeof Prism>"u"||typeof document>"u")return;var e="line-numbers",t=/\n(?!$)/g,n=Prism.plugins.lineNumbers={getLine:function(o,a){if(!(o.tagName!=="PRE"||!o.classList.contains(e))){var l=o.querySelector(".line-numbers-rows");if(l){var c=parseInt(o.getAttribute("data-start"),10)||1,u=c+(l.children.length-1);a<c&&(a=c),a>u&&(a=u);var d=a-c;return l.children[d]}}},resize:function(o){s([o])},assumeViewportIndependence:!0};function s(o){if(o=o.filter(function(l){var c=i(l),u=c["white-space"];return u==="pre-wrap"||u==="pre-line"}),o.length!=0){var a=o.map(function(l){var c=l.querySelector("code"),u=l.querySelector(".line-numbers-rows");if(!(!c||!u)){var d=l.querySelector(".line-numbers-sizer"),p=c.textContent.split(t);d||(d=document.createElement("span"),d.className="line-numbers-sizer",c.appendChild(d)),d.innerHTML="0",d.style.display="block";var g=d.getBoundingClientRect().height;return d.innerHTML="",{element:l,lines:p,lineHeights:[],oneLinerHeight:g,sizer:d}}}).filter(Boolean);a.forEach(function(l){var c=l.sizer,u=l.lines,d=l.lineHeights,p=l.oneLinerHeight;d[u.length-1]=void 0,u.forEach(function(g,P){if(g&&g.length>1){var E=c.appendChild(document.createElement("span"));E.style.display="block",E.textContent=g}else d[P]=p})}),a.forEach(function(l){for(var c=l.sizer,u=l.lineHeights,d=0,p=0;p<u.length;p++)u[p]===void 0&&(u[p]=c.children[d++].getBoundingClientRect().height)}),a.forEach(function(l){var c=l.sizer,u=l.element.querySelector(".line-numbers-rows");c.style.display="none",c.innerHTML="",l.lineHeights.forEach(function(d,p){u.children[p].style.height=d+"px"})})}}function i(o){return o?window.getComputedStyle?getComputedStyle(o):o.currentStyle||null:null}var r=void 0;window.addEventListener("resize",function(){n.assumeViewportIndependence&&r===window.innerWidth||(r=window.innerWidth,s(Array.prototype.slice.call(document.querySelectorAll("pre."+e))))}),Prism.hooks.add("complete",function(o){if(o.code){var a=o.element,l=a.parentNode;if(!(!l||!/pre/i.test(l.nodeName))&&!a.querySelector(".line-numbers-rows")&&Prism.util.isActive(a,e)){a.classList.remove(e),l.classList.add(e);var c=o.code.match(t),u=c?c.length+1:1,d,p=new Array(u+1).join("<span></span>");d=document.createElement("span"),d.setAttribute("aria-hidden","true"),d.className="line-numbers-rows",d.innerHTML=p,l.hasAttribute("data-start")&&(l.style.counterReset="linenumber "+(parseInt(l.getAttribute("data-start"),10)-1)),o.element.appendChild(d),s([l]),Prism.hooks.run("line-numbers",o)}}}),Prism.hooks.add("line-numbers",function(o){o.plugins=o.plugins||{},o.plugins.lineNumbers=!0})})();function Hr(e,t){const n=Object.create(null),s=e.split(",");for(let i=0;i<s.length;i++)n[s[i]]=!0;return t?i=>!!n[i.toLowerCase()]:i=>!!n[i]}const ve={},gn=[],Je=()=>{},ym=()=>!1,wm=/^on[^a-z]/,ui=e=>wm.test(e),jr=e=>e.startsWith("onUpdate:"),Oe=Object.assign,Ur=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Em=Object.prototype.hasOwnProperty,oe=(e,t)=>Em.call(e,t),Y=Array.isArray,_n=e=>_s(e)==="[object Map]",di=e=>_s(e)==="[object Set]",ea=e=>_s(e)==="[object Date]",ee=e=>typeof e=="function",Ae=e=>typeof e=="string",ss=e=>typeof e=="symbol",_e=e=>e!==null&&typeof e=="object",Ql=e=>_e(e)&&ee(e.then)&&ee(e.catch),Zl=Object.prototype.toString,_s=e=>Zl.call(e),km=e=>_s(e).slice(8,-1),Jl=e=>_s(e)==="[object Object]",qr=e=>Ae(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Ls=Hr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),fi=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},Am=/-(\w)/g,pt=fi(e=>e.replace(Am,(t,n)=>n?n.toUpperCase():"")),Tm=/\B([A-Z])/g,$n=fi(e=>e.replace(Tm,"-$1").toLowerCase()),pi=fi(e=>e.charAt(0).toUpperCase()+e.slice(1)),Wi=fi(e=>e?`on${pi(e)}`:""),is=(e,t)=>!Object.is(e,t),Ms=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},zs=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},Ks=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let ta;const lr=()=>ta||(ta=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function hi(e){if(Y(e)){const t={};for(let n=0;n<e.length;n++){const s=e[n],i=Ae(s)?Pm(s):hi(s);if(i)for(const r in i)t[r]=i[r]}return t}else{if(Ae(e))return e;if(_e(e))return e}}const Sm=/;(?![^(]*\))/g,Cm=/:([^]+)/,xm=/\/\*[^]*?\*\//g;function Pm(e){const t={};return e.replace(xm,"").split(Sm).forEach(n=>{if(n){const s=n.split(Cm);s.length>1&&(t[s[0].trim()]=s[1].trim())}}),t}function Ln(e){let t="";if(Ae(e))t=e;else if(Y(e))for(let n=0;n<e.length;n++){const s=Ln(e[n]);s&&(t+=s+" ")}else if(_e(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Om="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Im=Hr(Om);function ec(e){return!!e||e===""}function Nm(e,t){if(e.length!==t.length)return!1;let n=!0;for(let s=0;n&&s<e.length;s++)n=mi(e[s],t[s]);return n}function mi(e,t){if(e===t)return!0;let n=ea(e),s=ea(t);if(n||s)return n&&s?e.getTime()===t.getTime():!1;if(n=ss(e),s=ss(t),n||s)return e===t;if(n=Y(e),s=Y(t),n||s)return n&&s?Nm(e,t):!1;if(n=_e(e),s=_e(t),n||s){if(!n||!s)return!1;const i=Object.keys(e).length,r=Object.keys(t).length;if(i!==r)return!1;for(const o in e){const a=e.hasOwnProperty(o),l=t.hasOwnProperty(o);if(a&&!l||!a&&l||!mi(e[o],t[o]))return!1}}return String(e)===String(t)}function Rm(e,t){return e.findIndex(n=>mi(n,t))}const ae=e=>Ae(e)?e:e==null?"":Y(e)||_e(e)&&(e.toString===Zl||!ee(e.toString))?JSON.stringify(e,tc,2):String(e),tc=(e,t)=>t&&t.__v_isRef?tc(e,t.value):_n(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[s,i])=>(n[`${s} =>`]=i,n),{})}:di(t)?{[`Set(${t.size})`]:[...t.values()]}:_e(t)&&!Y(t)&&!Jl(t)?String(t):t;let He;class nc{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=He,!t&&He&&(this.index=(He.scopes||(He.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=He;try{return He=this,t()}finally{He=n}}}on(){He=this}off(){He=this.parent}stop(t){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function sc(e){return new nc(e)}function Dm(e,t=He){t&&t.active&&t.effects.push(e)}function ic(){return He}function $m(e){He&&He.cleanups.push(e)}const zr=e=>{const t=new Set(e);return t.w=0,t.n=0,t},rc=e=>(e.w&Mt)>0,oc=e=>(e.n&Mt)>0,Lm=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=Mt},Mm=e=>{const{deps:t}=e;if(t.length){let n=0;for(let s=0;s<t.length;s++){const i=t[s];rc(i)&&!oc(i)?i.delete(e):t[n++]=i,i.w&=~Mt,i.n&=~Mt}t.length=n}},Gs=new WeakMap;let qn=0,Mt=1;const cr=30;let Qe;const Zt=Symbol(""),ur=Symbol("");class Kr{constructor(t,n=null,s){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Dm(this,s)}run(){if(!this.active)return this.fn();let t=Qe,n=It;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=Qe,Qe=this,It=!0,Mt=1<<++qn,qn<=cr?Lm(this):na(this),this.fn()}finally{qn<=cr&&Mm(this),Mt=1<<--qn,Qe=this.parent,It=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Qe===this?this.deferStop=!0:this.active&&(na(this),this.onStop&&this.onStop(),this.active=!1)}}function na(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let It=!0;const ac=[];function Mn(){ac.push(It),It=!1}function Bn(){const e=ac.pop();It=e===void 0?!0:e}function Fe(e,t,n){if(It&&Qe){let s=Gs.get(e);s||Gs.set(e,s=new Map);let i=s.get(n);i||s.set(n,i=zr()),lc(i)}}function lc(e,t){let n=!1;qn<=cr?oc(e)||(e.n|=Mt,n=!rc(e)):n=!e.has(Qe),n&&(e.add(Qe),Qe.deps.push(e))}function wt(e,t,n,s,i,r){const o=Gs.get(e);if(!o)return;let a=[];if(t==="clear")a=[...o.values()];else if(n==="length"&&Y(e)){const l=Number(s);o.forEach((c,u)=>{(u==="length"||u>=l)&&a.push(c)})}else switch(n!==void 0&&a.push(o.get(n)),t){case"add":Y(e)?qr(n)&&a.push(o.get("length")):(a.push(o.get(Zt)),_n(e)&&a.push(o.get(ur)));break;case"delete":Y(e)||(a.push(o.get(Zt)),_n(e)&&a.push(o.get(ur)));break;case"set":_n(e)&&a.push(o.get(Zt));break}if(a.length===1)a[0]&&dr(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);dr(zr(l))}}function dr(e,t){const n=Y(e)?e:[...e];for(const s of n)s.computed&&sa(s);for(const s of n)s.computed||sa(s)}function sa(e,t){(e!==Qe||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}function Bm(e,t){var n;return(n=Gs.get(e))==null?void 0:n.get(t)}const Fm=Hr("__proto__,__v_isRef,__isVue"),cc=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(ss)),Vm=Gr(),Wm=Gr(!1,!0),Hm=Gr(!0),ia=jm();function jm(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const s=le(this);for(let r=0,o=this.length;r<o;r++)Fe(s,"get",r+"");const i=s[t](...n);return i===-1||i===!1?s[t](...n.map(le)):i}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){Mn();const s=le(this)[t].apply(this,n);return Bn(),s}}),e}function Um(e){const t=le(this);return Fe(t,"has",e),t.hasOwnProperty(e)}function Gr(e=!1,t=!1){return function(s,i,r){if(i==="__v_isReactive")return!e;if(i==="__v_isReadonly")return e;if(i==="__v_isShallow")return t;if(i==="__v_raw"&&r===(e?t?og:hc:t?pc:fc).get(s))return s;const o=Y(s);if(!e){if(o&&oe(ia,i))return Reflect.get(ia,i,r);if(i==="hasOwnProperty")return Um}const a=Reflect.get(s,i,r);return(ss(i)?cc.has(i):Fm(i))||(e||Fe(s,"get",i),t)?a:we(a)?o&&qr(i)?a:a.value:_e(a)?e?mc(a):Fn(a):a}}const qm=uc(),zm=uc(!0);function uc(e=!1){return function(n,s,i,r){let o=n[s];if(Sn(o)&&we(o)&&!we(i))return!1;if(!e&&(!Ys(i)&&!Sn(i)&&(o=le(o),i=le(i)),!Y(n)&&we(o)&&!we(i)))return o.value=i,!0;const a=Y(n)&&qr(s)?Number(s)<n.length:oe(n,s),l=Reflect.set(n,s,i,r);return n===le(r)&&(a?is(i,o)&&wt(n,"set",s,i):wt(n,"add",s,i)),l}}function Km(e,t){const n=oe(e,t);e[t];const s=Reflect.deleteProperty(e,t);return s&&n&&wt(e,"delete",t,void 0),s}function Gm(e,t){const n=Reflect.has(e,t);return(!ss(t)||!cc.has(t))&&Fe(e,"has",t),n}function Ym(e){return Fe(e,"iterate",Y(e)?"length":Zt),Reflect.ownKeys(e)}const dc={get:Vm,set:qm,deleteProperty:Km,has:Gm,ownKeys:Ym},Xm={get:Hm,set(e,t){return!0},deleteProperty(e,t){return!0}},Qm=Oe({},dc,{get:Wm,set:zm}),Yr=e=>e,gi=e=>Reflect.getPrototypeOf(e);function Cs(e,t,n=!1,s=!1){e=e.__v_raw;const i=le(e),r=le(t);n||(t!==r&&Fe(i,"get",t),Fe(i,"get",r));const{has:o}=gi(i),a=s?Yr:n?Zr:rs;if(o.call(i,t))return a(e.get(t));if(o.call(i,r))return a(e.get(r));e!==i&&e.get(t)}function xs(e,t=!1){const n=this.__v_raw,s=le(n),i=le(e);return t||(e!==i&&Fe(s,"has",e),Fe(s,"has",i)),e===i?n.has(e):n.has(e)||n.has(i)}function Ps(e,t=!1){return e=e.__v_raw,!t&&Fe(le(e),"iterate",Zt),Reflect.get(e,"size",e)}function ra(e){e=le(e);const t=le(this);return gi(t).has.call(t,e)||(t.add(e),wt(t,"add",e,e)),this}function oa(e,t){t=le(t);const n=le(this),{has:s,get:i}=gi(n);let r=s.call(n,e);r||(e=le(e),r=s.call(n,e));const o=i.call(n,e);return n.set(e,t),r?is(t,o)&&wt(n,"set",e,t):wt(n,"add",e,t),this}function aa(e){const t=le(this),{has:n,get:s}=gi(t);let i=n.call(t,e);i||(e=le(e),i=n.call(t,e)),s&&s.call(t,e);const r=t.delete(e);return i&&wt(t,"delete",e,void 0),r}function la(){const e=le(this),t=e.size!==0,n=e.clear();return t&&wt(e,"clear",void 0,void 0),n}function Os(e,t){return function(s,i){const r=this,o=r.__v_raw,a=le(o),l=t?Yr:e?Zr:rs;return!e&&Fe(a,"iterate",Zt),o.forEach((c,u)=>s.call(i,l(c),l(u),r))}}function Is(e,t,n){return function(...s){const i=this.__v_raw,r=le(i),o=_n(r),a=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,c=i[e](...s),u=n?Yr:t?Zr:rs;return!t&&Fe(r,"iterate",l?ur:Zt),{next(){const{value:d,done:p}=c.next();return p?{value:d,done:p}:{value:a?[u(d[0]),u(d[1])]:u(d),done:p}},[Symbol.iterator](){return this}}}}function St(e){return function(...t){return e==="delete"?!1:this}}function Zm(){const e={get(r){return Cs(this,r)},get size(){return Ps(this)},has:xs,add:ra,set:oa,delete:aa,clear:la,forEach:Os(!1,!1)},t={get(r){return Cs(this,r,!1,!0)},get size(){return Ps(this)},has:xs,add:ra,set:oa,delete:aa,clear:la,forEach:Os(!1,!0)},n={get(r){return Cs(this,r,!0)},get size(){return Ps(this,!0)},has(r){return xs.call(this,r,!0)},add:St("add"),set:St("set"),delete:St("delete"),clear:St("clear"),forEach:Os(!0,!1)},s={get(r){return Cs(this,r,!0,!0)},get size(){return Ps(this,!0)},has(r){return xs.call(this,r,!0)},add:St("add"),set:St("set"),delete:St("delete"),clear:St("clear"),forEach:Os(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{e[r]=Is(r,!1,!1),n[r]=Is(r,!0,!1),t[r]=Is(r,!1,!0),s[r]=Is(r,!0,!0)}),[e,n,t,s]}const[Jm,eg,tg,ng]=Zm();function Xr(e,t){const n=t?e?ng:tg:e?eg:Jm;return(s,i,r)=>i==="__v_isReactive"?!e:i==="__v_isReadonly"?e:i==="__v_raw"?s:Reflect.get(oe(n,i)&&i in s?n:s,i,r)}const sg={get:Xr(!1,!1)},ig={get:Xr(!1,!0)},rg={get:Xr(!0,!1)},fc=new WeakMap,pc=new WeakMap,hc=new WeakMap,og=new WeakMap;function ag(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function lg(e){return e.__v_skip||!Object.isExtensible(e)?0:ag(km(e))}function Fn(e){return Sn(e)?e:Qr(e,!1,dc,sg,fc)}function cg(e){return Qr(e,!1,Qm,ig,pc)}function mc(e){return Qr(e,!0,Xm,rg,hc)}function Qr(e,t,n,s,i){if(!_e(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const r=i.get(e);if(r)return r;const o=lg(e);if(o===0)return e;const a=new Proxy(e,o===2?s:n);return i.set(e,a),a}function Nt(e){return Sn(e)?Nt(e.__v_raw):!!(e&&e.__v_isReactive)}function Sn(e){return!!(e&&e.__v_isReadonly)}function Ys(e){return!!(e&&e.__v_isShallow)}function gc(e){return Nt(e)||Sn(e)}function le(e){const t=e&&e.__v_raw;return t?le(t):e}function _i(e){return zs(e,"__v_skip",!0),e}const rs=e=>_e(e)?Fn(e):e,Zr=e=>_e(e)?mc(e):e;function _c(e){It&&Qe&&(e=le(e),lc(e.dep||(e.dep=zr())))}function vc(e,t){e=le(e);const n=e.dep;n&&dr(n)}function we(e){return!!(e&&e.__v_isRef===!0)}function vi(e){return bc(e,!1)}function ug(e){return bc(e,!0)}function bc(e,t){return we(e)?e:new dg(e,t)}class dg{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:le(t),this._value=n?t:rs(t)}get value(){return _c(this),this._value}set value(t){const n=this.__v_isShallow||Ys(t)||Sn(t);t=n?t:le(t),is(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:rs(t),vc(this))}}function Jt(e){return we(e)?e.value:e}const fg={get:(e,t,n)=>Jt(Reflect.get(e,t,n)),set:(e,t,n,s)=>{const i=e[t];return we(i)&&!we(n)?(i.value=n,!0):Reflect.set(e,t,n,s)}};function yc(e){return Nt(e)?e:new Proxy(e,fg)}function pg(e){const t=Y(e)?new Array(e.length):{};for(const n in e)t[n]=mg(e,n);return t}class hg{constructor(t,n,s){this._object=t,this._key=n,this._defaultValue=s,this.__v_isRef=!0}get value(){const t=this._object[this._key];return t===void 0?this._defaultValue:t}set value(t){this._object[this._key]=t}get dep(){return Bm(le(this._object),this._key)}}function mg(e,t,n){const s=e[t];return we(s)?s:new hg(e,t,n)}class gg{constructor(t,n,s,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Kr(t,()=>{this._dirty||(this._dirty=!0,vc(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=s}get value(){const t=le(this);return _c(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function _g(e,t,n=!1){let s,i;const r=ee(e);return r?(s=e,i=Je):(s=e.get,i=e.set),new gg(s,i,r||!i,n)}function Rt(e,t,n,s){let i;try{i=s?e(...s):e()}catch(r){bi(r,t,n)}return i}function et(e,t,n,s){if(ee(e)){const r=Rt(e,t,n,s);return r&&Ql(r)&&r.catch(o=>{bi(o,t,n)}),r}const i=[];for(let r=0;r<e.length;r++)i.push(et(e[r],t,n,s));return i}function bi(e,t,n,s=!0){const i=t?t.vnode:null;if(t){let r=t.parent;const o=t.proxy,a=n;for(;r;){const c=r.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](e,o,a)===!1)return}r=r.parent}const l=t.appContext.config.errorHandler;if(l){Rt(l,null,10,[e,o,a]);return}}vg(e,n,i,s)}function vg(e,t,n,s=!0){console.error(e)}let os=!1,fr=!1;const Ne=[];let at=0;const vn=[];let mt=null,qt=0;const wc=Promise.resolve();let Jr=null;function eo(e){const t=Jr||wc;return e?t.then(this?e.bind(this):e):t}function bg(e){let t=at+1,n=Ne.length;for(;t<n;){const s=t+n>>>1;as(Ne[s])<e?t=s+1:n=s}return t}function to(e){(!Ne.length||!Ne.includes(e,os&&e.allowRecurse?at+1:at))&&(e.id==null?Ne.push(e):Ne.splice(bg(e.id),0,e),Ec())}function Ec(){!os&&!fr&&(fr=!0,Jr=wc.then(Ac))}function yg(e){const t=Ne.indexOf(e);t>at&&Ne.splice(t,1)}function wg(e){Y(e)?vn.push(...e):(!mt||!mt.includes(e,e.allowRecurse?qt+1:qt))&&vn.push(e),Ec()}function ca(e,t=os?at+1:0){for(;t<Ne.length;t++){const n=Ne[t];n&&n.pre&&(Ne.splice(t,1),t--,n())}}function kc(e){if(vn.length){const t=[...new Set(vn)];if(vn.length=0,mt){mt.push(...t);return}for(mt=t,mt.sort((n,s)=>as(n)-as(s)),qt=0;qt<mt.length;qt++)mt[qt]();mt=null,qt=0}}const as=e=>e.id==null?1/0:e.id,Eg=(e,t)=>{const n=as(e)-as(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function Ac(e){fr=!1,os=!0,Ne.sort(Eg);const t=Je;try{for(at=0;at<Ne.length;at++){const n=Ne[at];n&&n.active!==!1&&Rt(n,null,14)}}finally{at=0,Ne.length=0,kc(),os=!1,Jr=null,(Ne.length||vn.length)&&Ac()}}function kg(e,t,...n){if(e.isUnmounted)return;const s=e.vnode.props||ve;let i=n;const r=t.startsWith("update:"),o=r&&t.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:d,trim:p}=s[u]||ve;p&&(i=n.map(g=>Ae(g)?g.trim():g)),d&&(i=n.map(Ks))}let a,l=s[a=Wi(t)]||s[a=Wi(pt(t))];!l&&r&&(l=s[a=Wi($n(t))]),l&&et(l,e,6,i);const c=s[a+"Once"];if(c){if(!e.emitted)e.emitted={};else if(e.emitted[a])return;e.emitted[a]=!0,et(c,e,6,i)}}function Tc(e,t,n=!1){const s=t.emitsCache,i=s.get(e);if(i!==void 0)return i;const r=e.emits;let o={},a=!1;if(!ee(e)){const l=c=>{const u=Tc(c,t,!0);u&&(a=!0,Oe(o,u))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!r&&!a?(_e(e)&&s.set(e,null),null):(Y(r)?r.forEach(l=>o[l]=null):Oe(o,r),_e(e)&&s.set(e,o),o)}function yi(e,t){return!e||!ui(t)?!1:(t=t.slice(2).replace(/Once$/,""),oe(e,t[0].toLowerCase()+t.slice(1))||oe(e,$n(t))||oe(e,t))}let Ie=null,wi=null;function Xs(e){const t=Ie;return Ie=e,wi=e&&e.type.__scopeId||null,t}function vs(e){wi=e}function bs(){wi=null}function Bs(e,t=Ie,n){if(!t||e._n)return e;const s=(...i)=>{s._d&&ya(-1);const r=Xs(t);let o;try{o=e(...i)}finally{Xs(r),s._d&&ya(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function Hi(e){const{type:t,vnode:n,proxy:s,withProxy:i,props:r,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:d,data:p,setupState:g,ctx:P,inheritAttrs:E}=e;let S,x;const m=Xs(e);try{if(n.shapeFlag&4){const v=i||s;S=ot(u.call(v,v,d,r,g,p,P)),x=l}else{const v=t;S=ot(v.length>1?v(r,{attrs:l,slots:a,emit:c}):v(r,null)),x=t.props?l:Ag(l)}}catch(v){Zn.length=0,bi(v,e,1),S=ie(Bt)}let _=S;if(x&&E!==!1){const v=Object.keys(x),{shapeFlag:y}=_;v.length&&y&7&&(o&&v.some(jr)&&(x=Tg(x,o)),_=Cn(_,x))}return n.dirs&&(_=Cn(_),_.dirs=_.dirs?_.dirs.concat(n.dirs):n.dirs),n.transition&&(_.transition=n.transition),S=_,Xs(m),S}const Ag=e=>{let t;for(const n in e)(n==="class"||n==="style"||ui(n))&&((t||(t={}))[n]=e[n]);return t},Tg=(e,t)=>{const n={};for(const s in e)(!jr(s)||!(s.slice(9)in t))&&(n[s]=e[s]);return n};function Sg(e,t,n){const{props:s,children:i,component:r}=e,{props:o,children:a,patchFlag:l}=t,c=r.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return s?ua(s,o,c):!!o;if(l&8){const u=t.dynamicProps;for(let d=0;d<u.length;d++){const p=u[d];if(o[p]!==s[p]&&!yi(c,p))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?ua(s,o,c):!0:!!o;return!1}function ua(e,t,n){const s=Object.keys(t);if(s.length!==Object.keys(e).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(t[r]!==e[r]&&!yi(n,r))return!0}return!1}function Cg({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const xg=e=>e.__isSuspense;function Pg(e,t){t&&t.pendingBranch?Y(e)?t.effects.push(...e):t.effects.push(e):wg(e)}const Ns={};function Yn(e,t,n){return Sc(e,t,n)}function Sc(e,t,{immediate:n,deep:s,flush:i,onTrack:r,onTrigger:o}=ve){var a;const l=ic()===((a=Pe)==null?void 0:a.scope)?Pe:null;let c,u=!1,d=!1;if(we(e)?(c=()=>e.value,u=Ys(e)):Nt(e)?(c=()=>e,s=!0):Y(e)?(d=!0,u=e.some(v=>Nt(v)||Ys(v)),c=()=>e.map(v=>{if(we(v))return v.value;if(Nt(v))return Xt(v);if(ee(v))return Rt(v,l,2)})):ee(e)?t?c=()=>Rt(e,l,2):c=()=>{if(!(l&&l.isUnmounted))return p&&p(),et(e,l,3,[g])}:c=Je,t&&s){const v=c;c=()=>Xt(v())}let p,g=v=>{p=m.onStop=()=>{Rt(v,l,4)}},P;if(us)if(g=Je,t?n&&et(t,l,3,[c(),d?[]:void 0,g]):c(),i==="sync"){const v=A_();P=v.__watcherHandles||(v.__watcherHandles=[])}else return Je;let E=d?new Array(e.length).fill(Ns):Ns;const S=()=>{if(m.active)if(t){const v=m.run();(s||u||(d?v.some((y,T)=>is(y,E[T])):is(v,E)))&&(p&&p(),et(t,l,3,[v,E===Ns?void 0:d&&E[0]===Ns?[]:E,g]),E=v)}else m.run()};S.allowRecurse=!!t;let x;i==="sync"?x=S:i==="post"?x=()=>Be(S,l&&l.suspense):(S.pre=!0,l&&(S.id=l.uid),x=()=>to(S));const m=new Kr(c,x);t?n?S():E=m.run():i==="post"?Be(m.run.bind(m),l&&l.suspense):m.run();const _=()=>{m.stop(),l&&l.scope&&Ur(l.scope.effects,m)};return P&&P.push(_),_}function Og(e,t,n){const s=this.proxy,i=Ae(e)?e.includes(".")?Cc(s,e):()=>s[e]:e.bind(s,s);let r;ee(t)?r=t:(r=t.handler,n=t);const o=Pe;xn(this);const a=Sc(i,r.bind(s),n);return o?xn(o):en(),a}function Cc(e,t){const n=t.split(".");return()=>{let s=e;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}function Xt(e,t){if(!_e(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),we(e))Xt(e.value,t);else if(Y(e))for(let n=0;n<e.length;n++)Xt(e[n],t);else if(di(e)||_n(e))e.forEach(n=>{Xt(n,t)});else if(Jl(e))for(const n in e)Xt(e[n],t);return e}function xc(e,t){const n=Ie;if(n===null)return e;const s=Ti(n)||n.proxy,i=e.dirs||(e.dirs=[]);for(let r=0;r<t.length;r++){let[o,a,l,c=ve]=t[r];o&&(ee(o)&&(o={mounted:o,updated:o}),o.deep&&Xt(a),i.push({dir:o,instance:s,value:a,oldValue:void 0,arg:l,modifiers:c}))}return e}function jt(e,t,n,s){const i=e.dirs,r=t&&t.dirs;for(let o=0;o<i.length;o++){const a=i[o];r&&(a.oldValue=r[o].value);let l=a.dir[s];l&&(Mn(),et(l,n,8,[e.el,a,e,t]),Bn())}}function no(e,t){return ee(e)?(()=>Oe({name:e.name},t,{setup:e}))():e}const Xn=e=>!!e.type.__asyncLoader,Pc=e=>e.type.__isKeepAlive;function Ig(e,t){Oc(e,"a",t)}function Ng(e,t){Oc(e,"da",t)}function Oc(e,t,n=Pe){const s=e.__wdc||(e.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return e()});if(Ei(t,s,n),n){let i=n.parent;for(;i&&i.parent;)Pc(i.parent.vnode)&&Rg(s,t,n,i),i=i.parent}}function Rg(e,t,n,s){const i=Ei(t,e,s,!0);Ic(()=>{Ur(s[t],i)},n)}function Ei(e,t,n=Pe,s=!1){if(n){const i=n[e]||(n[e]=[]),r=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;Mn(),xn(n);const a=et(t,n,e,o);return en(),Bn(),a});return s?i.unshift(r):i.push(r),r}}const At=e=>(t,n=Pe)=>(!us||e==="sp")&&Ei(e,(...s)=>t(...s),n),Dg=At("bm"),$g=At("m"),Lg=At("bu"),Mg=At("u"),Bg=At("bum"),Ic=At("um"),Fg=At("sp"),Vg=At("rtg"),Wg=At("rtc");function Hg(e,t=Pe){Ei("ec",e,t)}const so="components";function De(e,t){return Rc(so,e,!0,t)||e}const Nc=Symbol.for("v-ndc");function jg(e){return Ae(e)?Rc(so,e,!1)||e:e||Nc}function Rc(e,t,n=!0,s=!1){const i=Ie||Pe;if(i){const r=i.type;if(e===so){const a=w_(r,!1);if(a&&(a===t||a===pt(t)||a===pi(pt(t))))return r}const o=da(i[e]||r[e],t)||da(i.appContext[e],t);return!o&&s?r:o}}function da(e,t){return e&&(e[t]||e[pt(t)]||e[pi(pt(t))])}function Me(e,t,n,s){let i;const r=n&&n[s];if(Y(e)||Ae(e)){i=new Array(e.length);for(let o=0,a=e.length;o<a;o++)i[o]=t(e[o],o,void 0,r&&r[o])}else if(typeof e=="number"){i=new Array(e);for(let o=0;o<e;o++)i[o]=t(o+1,o,void 0,r&&r[o])}else if(_e(e))if(e[Symbol.iterator])i=Array.from(e,(o,a)=>t(o,a,void 0,r&&r[a]));else{const o=Object.keys(e);i=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];i[a]=t(e[c],c,a,r&&r[a])}}else i=[];return n&&(n[s]=i),i}function Ug(e,t,n={},s,i){if(Ie.isCE||Ie.parent&&Xn(Ie.parent)&&Ie.parent.isCE)return t!=="default"&&(n.name=t),ie("slot",n,s&&s());let r=e[t];r&&r._c&&(r._d=!1),W();const o=r&&Dc(r(n)),a=Ht(ge,{key:n.key||o&&o.key||`_${t}`},o||(s?s():[]),o&&e._===1?64:-2);return!i&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),r&&r._c&&(r._d=!0),a}function Dc(e){return e.some(t=>Zs(t)?!(t.type===Bt||t.type===ge&&!Dc(t.children)):!0)?e:null}const pr=e=>e?qc(e)?Ti(e)||e.proxy:pr(e.parent):null,Qn=Oe(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>pr(e.parent),$root:e=>pr(e.root),$emit:e=>e.emit,$options:e=>io(e),$forceUpdate:e=>e.f||(e.f=()=>to(e.update)),$nextTick:e=>e.n||(e.n=eo.bind(e.proxy)),$watch:e=>Og.bind(e)}),ji=(e,t)=>e!==ve&&!e.__isScriptSetup&&oe(e,t),qg={get({_:e},t){const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:a,appContext:l}=e;let c;if(t[0]!=="$"){const g=o[t];if(g!==void 0)switch(g){case 1:return s[t];case 2:return i[t];case 4:return n[t];case 3:return r[t]}else{if(ji(s,t))return o[t]=1,s[t];if(i!==ve&&oe(i,t))return o[t]=2,i[t];if((c=e.propsOptions[0])&&oe(c,t))return o[t]=3,r[t];if(n!==ve&&oe(n,t))return o[t]=4,n[t];hr&&(o[t]=0)}}const u=Qn[t];let d,p;if(u)return t==="$attrs"&&Fe(e,"get",t),u(e);if((d=a.__cssModules)&&(d=d[t]))return d;if(n!==ve&&oe(n,t))return o[t]=4,n[t];if(p=l.config.globalProperties,oe(p,t))return p[t]},set({_:e},t,n){const{data:s,setupState:i,ctx:r}=e;return ji(i,t)?(i[t]=n,!0):s!==ve&&oe(s,t)?(s[t]=n,!0):oe(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(r[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:s,appContext:i,propsOptions:r}},o){let a;return!!n[o]||e!==ve&&oe(e,o)||ji(t,o)||(a=r[0])&&oe(a,o)||oe(s,o)||oe(Qn,o)||oe(i.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:oe(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function fa(e){return Y(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let hr=!0;function zg(e){const t=io(e),n=e.proxy,s=e.ctx;hr=!1,t.beforeCreate&&pa(t.beforeCreate,e,"bc");const{data:i,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:d,mounted:p,beforeUpdate:g,updated:P,activated:E,deactivated:S,beforeDestroy:x,beforeUnmount:m,destroyed:_,unmounted:v,render:y,renderTracked:T,renderTriggered:D,errorCaptured:M,serverPrefetch:O,expose:H,inheritAttrs:X,components:re,directives:ue,filters:xe}=t;if(c&&Kg(c,s,null),o)for(const J in o){const G=o[J];ee(G)&&(s[J]=G.bind(n))}if(i){const J=i.call(n,n);_e(J)&&(e.data=Fn(J))}if(hr=!0,r)for(const J in r){const G=r[J],he=ee(G)?G.bind(n,n):ee(G.get)?G.get.bind(n,n):Je,Ee=!ee(G)&&ee(G.set)?G.set.bind(n):Je,Se=je({get:he,set:Ee});Object.defineProperty(s,J,{enumerable:!0,configurable:!0,get:()=>Se.value,set:ce=>Se.value=ce})}if(a)for(const J in a)$c(a[J],s,n,J);if(l){const J=ee(l)?l.call(n):l;Reflect.ownKeys(J).forEach(G=>{Fs(G,J[G])})}u&&pa(u,e,"c");function Q(J,G){Y(G)?G.forEach(he=>J(he.bind(n))):G&&J(G.bind(n))}if(Q(Dg,d),Q($g,p),Q(Lg,g),Q(Mg,P),Q(Ig,E),Q(Ng,S),Q(Hg,M),Q(Wg,T),Q(Vg,D),Q(Bg,m),Q(Ic,v),Q(Fg,O),Y(H))if(H.length){const J=e.exposed||(e.exposed={});H.forEach(G=>{Object.defineProperty(J,G,{get:()=>n[G],set:he=>n[G]=he})})}else e.exposed||(e.exposed={});y&&e.render===Je&&(e.render=y),X!=null&&(e.inheritAttrs=X),re&&(e.components=re),ue&&(e.directives=ue)}function Kg(e,t,n=Je){Y(e)&&(e=mr(e));for(const s in e){const i=e[s];let r;_e(i)?"default"in i?r=ut(i.from||s,i.default,!0):r=ut(i.from||s):r=ut(i),we(r)?Object.defineProperty(t,s,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):t[s]=r}}function pa(e,t,n){et(Y(e)?e.map(s=>s.bind(t.proxy)):e.bind(t.proxy),t,n)}function $c(e,t,n,s){const i=s.includes(".")?Cc(n,s):()=>n[s];if(Ae(e)){const r=t[e];ee(r)&&Yn(i,r)}else if(ee(e))Yn(i,e.bind(n));else if(_e(e))if(Y(e))e.forEach(r=>$c(r,t,n,s));else{const r=ee(e.handler)?e.handler.bind(n):t[e.handler];ee(r)&&Yn(i,r,e)}}function io(e){const t=e.type,{mixins:n,extends:s}=t,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=e.appContext,a=r.get(t);let l;return a?l=a:!i.length&&!n&&!s?l=t:(l={},i.length&&i.forEach(c=>Qs(l,c,o,!0)),Qs(l,t,o)),_e(t)&&r.set(t,l),l}function Qs(e,t,n,s=!1){const{mixins:i,extends:r}=t;r&&Qs(e,r,n,!0),i&&i.forEach(o=>Qs(e,o,n,!0));for(const o in t)if(!(s&&o==="expose")){const a=Gg[o]||n&&n[o];e[o]=a?a(e[o],t[o]):t[o]}return e}const Gg={data:ha,props:ma,emits:ma,methods:zn,computed:zn,beforeCreate:Re,created:Re,beforeMount:Re,mounted:Re,beforeUpdate:Re,updated:Re,beforeDestroy:Re,beforeUnmount:Re,destroyed:Re,unmounted:Re,activated:Re,deactivated:Re,errorCaptured:Re,serverPrefetch:Re,components:zn,directives:zn,watch:Xg,provide:ha,inject:Yg};function ha(e,t){return t?e?function(){return Oe(ee(e)?e.call(this,this):e,ee(t)?t.call(this,this):t)}:t:e}function Yg(e,t){return zn(mr(e),mr(t))}function mr(e){if(Y(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Re(e,t){return e?[...new Set([].concat(e,t))]:t}function zn(e,t){return e?Oe(Object.create(null),e,t):t}function ma(e,t){return e?Y(e)&&Y(t)?[...new Set([...e,...t])]:Oe(Object.create(null),fa(e),fa(t??{})):t}function Xg(e,t){if(!e)return t;if(!t)return e;const n=Oe(Object.create(null),e);for(const s in t)n[s]=Re(e[s],t[s]);return n}function Lc(){return{app:null,config:{isNativeTag:ym,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Qg=0;function Zg(e,t){return function(s,i=null){ee(s)||(s=Oe({},s)),i!=null&&!_e(i)&&(i=null);const r=Lc(),o=new Set;let a=!1;const l=r.app={_uid:Qg++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:T_,get config(){return r.config},set config(c){},use(c,...u){return o.has(c)||(c&&ee(c.install)?(o.add(c),c.install(l,...u)):ee(c)&&(o.add(c),c(l,...u))),l},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),l},component(c,u){return u?(r.components[c]=u,l):r.components[c]},directive(c,u){return u?(r.directives[c]=u,l):r.directives[c]},mount(c,u,d){if(!a){const p=ie(s,i);return p.appContext=r,u&&t?t(p,c):e(p,c,d),a=!0,l._container=c,c.__vue_app__=l,Ti(p.component)||p.component.proxy}},unmount(){a&&(e(null,l._container),delete l._container.__vue_app__)},provide(c,u){return r.provides[c]=u,l},runWithContext(c){ls=l;try{return c()}finally{ls=null}}};return l}}let ls=null;function Fs(e,t){if(Pe){let n=Pe.provides;const s=Pe.parent&&Pe.parent.provides;s===n&&(n=Pe.provides=Object.create(s)),n[e]=t}}function ut(e,t,n=!1){const s=Pe||Ie;if(s||ls){const i=s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:ls._context.provides;if(i&&e in i)return i[e];if(arguments.length>1)return n&&ee(t)?t.call(s&&s.proxy):t}}function Jg(){return!!(Pe||Ie||ls)}function e_(e,t,n,s=!1){const i={},r={};zs(r,Ai,1),e.propsDefaults=Object.create(null),Mc(e,t,i,r);for(const o in e.propsOptions[0])o in i||(i[o]=void 0);n?e.props=s?i:cg(i):e.type.props?e.props=i:e.props=r,e.attrs=r}function t_(e,t,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=e,a=le(i),[l]=e.propsOptions;let c=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=e.vnode.dynamicProps;for(let d=0;d<u.length;d++){let p=u[d];if(yi(e.emitsOptions,p))continue;const g=t[p];if(l)if(oe(r,p))g!==r[p]&&(r[p]=g,c=!0);else{const P=pt(p);i[P]=gr(l,a,P,g,e,!1)}else g!==r[p]&&(r[p]=g,c=!0)}}}else{Mc(e,t,i,r)&&(c=!0);let u;for(const d in a)(!t||!oe(t,d)&&((u=$n(d))===d||!oe(t,u)))&&(l?n&&(n[d]!==void 0||n[u]!==void 0)&&(i[d]=gr(l,a,d,void 0,e,!0)):delete i[d]);if(r!==a)for(const d in r)(!t||!oe(t,d))&&(delete r[d],c=!0)}c&&wt(e,"set","$attrs")}function Mc(e,t,n,s){const[i,r]=e.propsOptions;let o=!1,a;if(t)for(let l in t){if(Ls(l))continue;const c=t[l];let u;i&&oe(i,u=pt(l))?!r||!r.includes(u)?n[u]=c:(a||(a={}))[u]=c:yi(e.emitsOptions,l)||(!(l in s)||c!==s[l])&&(s[l]=c,o=!0)}if(r){const l=le(n),c=a||ve;for(let u=0;u<r.length;u++){const d=r[u];n[d]=gr(i,l,d,c[d],e,!oe(c,d))}}return o}function gr(e,t,n,s,i,r){const o=e[n];if(o!=null){const a=oe(o,"default");if(a&&s===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&ee(l)){const{propsDefaults:c}=i;n in c?s=c[n]:(xn(i),s=c[n]=l.call(null,t),en())}else s=l}o[0]&&(r&&!a?s=!1:o[1]&&(s===""||s===$n(n))&&(s=!0))}return s}function Bc(e,t,n=!1){const s=t.propsCache,i=s.get(e);if(i)return i;const r=e.props,o={},a=[];let l=!1;if(!ee(e)){const u=d=>{l=!0;const[p,g]=Bc(d,t,!0);Oe(o,p),g&&a.push(...g)};!n&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!r&&!l)return _e(e)&&s.set(e,gn),gn;if(Y(r))for(let u=0;u<r.length;u++){const d=pt(r[u]);ga(d)&&(o[d]=ve)}else if(r)for(const u in r){const d=pt(u);if(ga(d)){const p=r[u],g=o[d]=Y(p)||ee(p)?{type:p}:Oe({},p);if(g){const P=ba(Boolean,g.type),E=ba(String,g.type);g[0]=P>-1,g[1]=E<0||P<E,(P>-1||oe(g,"default"))&&a.push(d)}}}const c=[o,a];return _e(e)&&s.set(e,c),c}function ga(e){return e[0]!=="$"}function _a(e){const t=e&&e.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:e===null?"null":""}function va(e,t){return _a(e)===_a(t)}function ba(e,t){return Y(t)?t.findIndex(n=>va(n,e)):ee(t)&&va(t,e)?0:-1}const Fc=e=>e[0]==="_"||e==="$stable",ro=e=>Y(e)?e.map(ot):[ot(e)],n_=(e,t,n)=>{if(t._n)return t;const s=Bs((...i)=>ro(t(...i)),n);return s._c=!1,s},Vc=(e,t,n)=>{const s=e._ctx;for(const i in e){if(Fc(i))continue;const r=e[i];if(ee(r))t[i]=n_(i,r,s);else if(r!=null){const o=ro(r);t[i]=()=>o}}},Wc=(e,t)=>{const n=ro(t);e.slots.default=()=>n},s_=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=le(t),zs(t,"_",n)):Vc(t,e.slots={})}else e.slots={},t&&Wc(e,t);zs(e.slots,Ai,1)},i_=(e,t,n)=>{const{vnode:s,slots:i}=e;let r=!0,o=ve;if(s.shapeFlag&32){const a=t._;a?n&&a===1?r=!1:(Oe(i,t),!n&&a===1&&delete i._):(r=!t.$stable,Vc(t,i)),o=t}else t&&(Wc(e,t),o={default:1});if(r)for(const a in i)!Fc(a)&&!(a in o)&&delete i[a]};function _r(e,t,n,s,i=!1){if(Y(e)){e.forEach((p,g)=>_r(p,t&&(Y(t)?t[g]:t),n,s,i));return}if(Xn(s)&&!i)return;const r=s.shapeFlag&4?Ti(s.component)||s.component.proxy:s.el,o=i?null:r,{i:a,r:l}=e,c=t&&t.r,u=a.refs===ve?a.refs={}:a.refs,d=a.setupState;if(c!=null&&c!==l&&(Ae(c)?(u[c]=null,oe(d,c)&&(d[c]=null)):we(c)&&(c.value=null)),ee(l))Rt(l,a,12,[o,u]);else{const p=Ae(l),g=we(l);if(p||g){const P=()=>{if(e.f){const E=p?oe(d,l)?d[l]:u[l]:l.value;i?Y(E)&&Ur(E,r):Y(E)?E.includes(r)||E.push(r):p?(u[l]=[r],oe(d,l)&&(d[l]=u[l])):(l.value=[r],e.k&&(u[e.k]=l.value))}else p?(u[l]=o,oe(d,l)&&(d[l]=o)):g&&(l.value=o,e.k&&(u[e.k]=o))};o?(P.id=-1,Be(P,n)):P()}}}const Be=Pg;function r_(e){return o_(e)}function o_(e,t){const n=lr();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:d,nextSibling:p,setScopeId:g=Je,insertStaticContent:P}=e,E=(f,h,b,A=null,C=null,I=null,V=!1,$=null,L=!!h.dynamicChildren)=>{if(f===h)return;f&&!jn(f,h)&&(A=k(f),ce(f,C,I,!0),f=null),h.patchFlag===-2&&(L=!1,h.dynamicChildren=null);const{type:N,ref:K,shapeFlag:j}=h;switch(N){case ki:S(f,h,b,A);break;case Bt:x(f,h,b,A);break;case Vs:f==null&&m(h,b,A,V);break;case ge:re(f,h,b,A,C,I,V,$,L);break;default:j&1?y(f,h,b,A,C,I,V,$,L):j&6?ue(f,h,b,A,C,I,V,$,L):(j&64||j&128)&&N.process(f,h,b,A,C,I,V,$,L,B)}K!=null&&C&&_r(K,f&&f.ref,I,h||f,!h)},S=(f,h,b,A)=>{if(f==null)s(h.el=a(h.children),b,A);else{const C=h.el=f.el;h.children!==f.children&&c(C,h.children)}},x=(f,h,b,A)=>{f==null?s(h.el=l(h.children||""),b,A):h.el=f.el},m=(f,h,b,A)=>{[f.el,f.anchor]=P(f.children,h,b,A,f.el,f.anchor)},_=({el:f,anchor:h},b,A)=>{let C;for(;f&&f!==h;)C=p(f),s(f,b,A),f=C;s(h,b,A)},v=({el:f,anchor:h})=>{let b;for(;f&&f!==h;)b=p(f),i(f),f=b;i(h)},y=(f,h,b,A,C,I,V,$,L)=>{V=V||h.type==="svg",f==null?T(h,b,A,C,I,V,$,L):O(f,h,C,I,V,$,L)},T=(f,h,b,A,C,I,V,$)=>{let L,N;const{type:K,props:j,shapeFlag:q,transition:Z,dirs:se}=f;if(L=f.el=o(f.type,I,j&&j.is,j),q&8?u(L,f.children):q&16&&M(f.children,L,null,A,C,I&&K!=="foreignObject",V,$),se&&jt(f,null,A,"created"),D(L,f,f.scopeId,V,A),j){for(const de in j)de!=="value"&&!Ls(de)&&r(L,de,null,j[de],I,f.children,A,C,me);"value"in j&&r(L,"value",null,j.value),(N=j.onVnodeBeforeMount)&&rt(N,A,f)}se&&jt(f,null,A,"beforeMount");const fe=(!C||C&&!C.pendingBranch)&&Z&&!Z.persisted;fe&&Z.beforeEnter(L),s(L,h,b),((N=j&&j.onVnodeMounted)||fe||se)&&Be(()=>{N&&rt(N,A,f),fe&&Z.enter(L),se&&jt(f,null,A,"mounted")},C)},D=(f,h,b,A,C)=>{if(b&&g(f,b),A)for(let I=0;I<A.length;I++)g(f,A[I]);if(C){let I=C.subTree;if(h===I){const V=C.vnode;D(f,V,V.scopeId,V.slotScopeIds,C.parent)}}},M=(f,h,b,A,C,I,V,$,L=0)=>{for(let N=L;N<f.length;N++){const K=f[N]=$?Pt(f[N]):ot(f[N]);E(null,K,h,b,A,C,I,V,$)}},O=(f,h,b,A,C,I,V)=>{const $=h.el=f.el;let{patchFlag:L,dynamicChildren:N,dirs:K}=h;L|=f.patchFlag&16;const j=f.props||ve,q=h.props||ve;let Z;b&&Ut(b,!1),(Z=q.onVnodeBeforeUpdate)&&rt(Z,b,h,f),K&&jt(h,f,b,"beforeUpdate"),b&&Ut(b,!0);const se=C&&h.type!=="foreignObject";if(N?H(f.dynamicChildren,N,$,b,A,se,I):V||G(f,h,$,null,b,A,se,I,!1),L>0){if(L&16)X($,h,j,q,b,A,C);else if(L&2&&j.class!==q.class&&r($,"class",null,q.class,C),L&4&&r($,"style",j.style,q.style,C),L&8){const fe=h.dynamicProps;for(let de=0;de<fe.length;de++){const ke=fe[de],Xe=j[ke],on=q[ke];(on!==Xe||ke==="value")&&r($,ke,Xe,on,C,f.children,b,A,me)}}L&1&&f.children!==h.children&&u($,h.children)}else!V&&N==null&&X($,h,j,q,b,A,C);((Z=q.onVnodeUpdated)||K)&&Be(()=>{Z&&rt(Z,b,h,f),K&&jt(h,f,b,"updated")},A)},H=(f,h,b,A,C,I,V)=>{for(let $=0;$<h.length;$++){const L=f[$],N=h[$],K=L.el&&(L.type===ge||!jn(L,N)||L.shapeFlag&70)?d(L.el):b;E(L,N,K,null,A,C,I,V,!0)}},X=(f,h,b,A,C,I,V)=>{if(b!==A){if(b!==ve)for(const $ in b)!Ls($)&&!($ in A)&&r(f,$,b[$],null,V,h.children,C,I,me);for(const $ in A){if(Ls($))continue;const L=A[$],N=b[$];L!==N&&$!=="value"&&r(f,$,N,L,V,h.children,C,I,me)}"value"in A&&r(f,"value",b.value,A.value)}},re=(f,h,b,A,C,I,V,$,L)=>{const N=h.el=f?f.el:a(""),K=h.anchor=f?f.anchor:a("");let{patchFlag:j,dynamicChildren:q,slotScopeIds:Z}=h;Z&&($=$?$.concat(Z):Z),f==null?(s(N,b,A),s(K,b,A),M(h.children,b,K,C,I,V,$,L)):j>0&&j&64&&q&&f.dynamicChildren?(H(f.dynamicChildren,q,b,C,I,V,$),(h.key!=null||C&&h===C.subTree)&&Hc(f,h,!0)):G(f,h,b,K,C,I,V,$,L)},ue=(f,h,b,A,C,I,V,$,L)=>{h.slotScopeIds=$,f==null?h.shapeFlag&512?C.ctx.activate(h,b,A,V,L):xe(h,b,A,C,I,V,L):be(f,h,L)},xe=(f,h,b,A,C,I,V)=>{const $=f.component=g_(f,A,C);if(Pc(f)&&($.ctx.renderer=B),__($),$.asyncDep){if(C&&C.registerDep($,Q),!f.el){const L=$.subTree=ie(Bt);x(null,L,h,b)}return}Q($,f,h,b,C,I,V)},be=(f,h,b)=>{const A=h.component=f.component;if(Sg(f,h,b))if(A.asyncDep&&!A.asyncResolved){J(A,h,b);return}else A.next=h,yg(A.update),A.update();else h.el=f.el,A.vnode=h},Q=(f,h,b,A,C,I,V)=>{const $=()=>{if(f.isMounted){let{next:K,bu:j,u:q,parent:Z,vnode:se}=f,fe=K,de;Ut(f,!1),K?(K.el=se.el,J(f,K,V)):K=se,j&&Ms(j),(de=K.props&&K.props.onVnodeBeforeUpdate)&&rt(de,Z,K,se),Ut(f,!0);const ke=Hi(f),Xe=f.subTree;f.subTree=ke,E(Xe,ke,d(Xe.el),k(Xe),f,C,I),K.el=ke.el,fe===null&&Cg(f,ke.el),q&&Be(q,C),(de=K.props&&K.props.onVnodeUpdated)&&Be(()=>rt(de,Z,K,se),C)}else{let K;const{el:j,props:q}=h,{bm:Z,m:se,parent:fe}=f,de=Xn(h);if(Ut(f,!1),Z&&Ms(Z),!de&&(K=q&&q.onVnodeBeforeMount)&&rt(K,fe,h),Ut(f,!0),j&&ne){const ke=()=>{f.subTree=Hi(f),ne(j,f.subTree,f,C,null)};de?h.type.__asyncLoader().then(()=>!f.isUnmounted&&ke()):ke()}else{const ke=f.subTree=Hi(f);E(null,ke,b,A,f,C,I),h.el=ke.el}if(se&&Be(se,C),!de&&(K=q&&q.onVnodeMounted)){const ke=h;Be(()=>rt(K,fe,ke),C)}(h.shapeFlag&256||fe&&Xn(fe.vnode)&&fe.vnode.shapeFlag&256)&&f.a&&Be(f.a,C),f.isMounted=!0,h=b=A=null}},L=f.effect=new Kr($,()=>to(N),f.scope),N=f.update=()=>L.run();N.id=f.uid,Ut(f,!0),N()},J=(f,h,b)=>{h.component=f;const A=f.vnode.props;f.vnode=h,f.next=null,t_(f,h.props,A,b),i_(f,h.children,b),Mn(),ca(),Bn()},G=(f,h,b,A,C,I,V,$,L=!1)=>{const N=f&&f.children,K=f?f.shapeFlag:0,j=h.children,{patchFlag:q,shapeFlag:Z}=h;if(q>0){if(q&128){Ee(N,j,b,A,C,I,V,$,L);return}else if(q&256){he(N,j,b,A,C,I,V,$,L);return}}Z&8?(K&16&&me(N,C,I),j!==N&&u(b,j)):K&16?Z&16?Ee(N,j,b,A,C,I,V,$,L):me(N,C,I,!0):(K&8&&u(b,""),Z&16&&M(j,b,A,C,I,V,$,L))},he=(f,h,b,A,C,I,V,$,L)=>{f=f||gn,h=h||gn;const N=f.length,K=h.length,j=Math.min(N,K);let q;for(q=0;q<j;q++){const Z=h[q]=L?Pt(h[q]):ot(h[q]);E(f[q],Z,b,null,C,I,V,$,L)}N>K?me(f,C,I,!0,!1,j):M(h,b,A,C,I,V,$,L,j)},Ee=(f,h,b,A,C,I,V,$,L)=>{let N=0;const K=h.length;let j=f.length-1,q=K-1;for(;N<=j&&N<=q;){const Z=f[N],se=h[N]=L?Pt(h[N]):ot(h[N]);if(jn(Z,se))E(Z,se,b,null,C,I,V,$,L);else break;N++}for(;N<=j&&N<=q;){const Z=f[j],se=h[q]=L?Pt(h[q]):ot(h[q]);if(jn(Z,se))E(Z,se,b,null,C,I,V,$,L);else break;j--,q--}if(N>j){if(N<=q){const Z=q+1,se=Z<K?h[Z].el:A;for(;N<=q;)E(null,h[N]=L?Pt(h[N]):ot(h[N]),b,se,C,I,V,$,L),N++}}else if(N>q)for(;N<=j;)ce(f[N],C,I,!0),N++;else{const Z=N,se=N,fe=new Map;for(N=se;N<=q;N++){const We=h[N]=L?Pt(h[N]):ot(h[N]);We.key!=null&&fe.set(We.key,N)}let de,ke=0;const Xe=q-se+1;let on=!1,ho=0;const Vn=new Array(Xe);for(N=0;N<Xe;N++)Vn[N]=0;for(N=Z;N<=j;N++){const We=f[N];if(ke>=Xe){ce(We,C,I,!0);continue}let it;if(We.key!=null)it=fe.get(We.key);else for(de=se;de<=q;de++)if(Vn[de-se]===0&&jn(We,h[de])){it=de;break}it===void 0?ce(We,C,I,!0):(Vn[it-se]=N+1,it>=ho?ho=it:on=!0,E(We,h[it],b,null,C,I,V,$,L),ke++)}const mo=on?a_(Vn):gn;for(de=mo.length-1,N=Xe-1;N>=0;N--){const We=se+N,it=h[We],go=We+1<K?h[We+1].el:A;Vn[N]===0?E(null,it,b,go,C,I,V,$,L):on&&(de<0||N!==mo[de]?Se(it,b,go,2):de--)}}},Se=(f,h,b,A,C=null)=>{const{el:I,type:V,transition:$,children:L,shapeFlag:N}=f;if(N&6){Se(f.component.subTree,h,b,A);return}if(N&128){f.suspense.move(h,b,A);return}if(N&64){V.move(f,h,b,B);return}if(V===ge){s(I,h,b);for(let j=0;j<L.length;j++)Se(L[j],h,b,A);s(f.anchor,h,b);return}if(V===Vs){_(f,h,b);return}if(A!==2&&N&1&&$)if(A===0)$.beforeEnter(I),s(I,h,b),Be(()=>$.enter(I),C);else{const{leave:j,delayLeave:q,afterLeave:Z}=$,se=()=>s(I,h,b),fe=()=>{j(I,()=>{se(),Z&&Z()})};q?q(I,se,fe):fe()}else s(I,h,b)},ce=(f,h,b,A=!1,C=!1)=>{const{type:I,props:V,ref:$,children:L,dynamicChildren:N,shapeFlag:K,patchFlag:j,dirs:q}=f;if($!=null&&_r($,null,b,f,!0),K&256){h.ctx.deactivate(f);return}const Z=K&1&&q,se=!Xn(f);let fe;if(se&&(fe=V&&V.onVnodeBeforeUnmount)&&rt(fe,h,f),K&6)Ce(f.component,b,A);else{if(K&128){f.suspense.unmount(b,A);return}Z&&jt(f,null,h,"beforeUnmount"),K&64?f.type.remove(f,h,b,C,B,A):N&&(I!==ge||j>0&&j&64)?me(N,h,b,!1,!0):(I===ge&&j&384||!C&&K&16)&&me(L,h,b),A&&Ve(f)}(se&&(fe=V&&V.onVnodeUnmounted)||Z)&&Be(()=>{fe&&rt(fe,h,f),Z&&jt(f,null,h,"unmounted")},b)},Ve=f=>{const{type:h,el:b,anchor:A,transition:C}=f;if(h===ge){ye(b,A);return}if(h===Vs){v(f);return}const I=()=>{i(b),C&&!C.persisted&&C.afterLeave&&C.afterLeave()};if(f.shapeFlag&1&&C&&!C.persisted){const{leave:V,delayLeave:$}=C,L=()=>V(b,I);$?$(f.el,I,L):L()}else I()},ye=(f,h)=>{let b;for(;f!==h;)b=p(f),i(f),f=b;i(h)},Ce=(f,h,b)=>{const{bum:A,scope:C,update:I,subTree:V,um:$}=f;A&&Ms(A),C.stop(),I&&(I.active=!1,ce(V,f,h,b)),$&&Be($,h),Be(()=>{f.isUnmounted=!0},h),h&&h.pendingBranch&&!h.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===h.pendingId&&(h.deps--,h.deps===0&&h.resolve())},me=(f,h,b,A=!1,C=!1,I=0)=>{for(let V=I;V<f.length;V++)ce(f[V],h,b,A,C)},k=f=>f.shapeFlag&6?k(f.component.subTree):f.shapeFlag&128?f.suspense.next():p(f.anchor||f.el),F=(f,h,b)=>{f==null?h._vnode&&ce(h._vnode,null,null,!0):E(h._vnode||null,f,h,null,null,null,b),ca(),kc(),h._vnode=f},B={p:E,um:ce,m:Se,r:Ve,mt:xe,mc:M,pc:G,pbc:H,n:k,o:e};let U,ne;return t&&([U,ne]=t(B)),{render:F,hydrate:U,createApp:Zg(F,U)}}function Ut({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function Hc(e,t,n=!1){const s=e.children,i=t.children;if(Y(s)&&Y(i))for(let r=0;r<s.length;r++){const o=s[r];let a=i[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[r]=Pt(i[r]),a.el=o.el),n||Hc(o,a)),a.type===ki&&(a.el=o.el)}}function a_(e){const t=e.slice(),n=[0];let s,i,r,o,a;const l=e.length;for(s=0;s<l;s++){const c=e[s];if(c!==0){if(i=n[n.length-1],e[i]<c){t[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)a=r+o>>1,e[n[a]]<c?r=a+1:o=a;c<e[n[r]]&&(r>0&&(t[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=t[o];return n}const l_=e=>e.__isTeleport,ge=Symbol.for("v-fgt"),ki=Symbol.for("v-txt"),Bt=Symbol.for("v-cmt"),Vs=Symbol.for("v-stc"),Zn=[];let Ze=null;function W(e=!1){Zn.push(Ze=e?null:[])}function c_(){Zn.pop(),Ze=Zn[Zn.length-1]||null}let cs=1;function ya(e){cs+=e}function jc(e){return e.dynamicChildren=cs>0?Ze||gn:null,c_(),cs>0&&Ze&&Ze.push(e),e}function z(e,t,n,s,i,r){return jc(w(e,t,n,s,i,r,!0))}function Ht(e,t,n,s,i){return jc(ie(e,t,n,s,i,!0))}function Zs(e){return e?e.__v_isVNode===!0:!1}function jn(e,t){return e.type===t.type&&e.key===t.key}const Ai="__vInternal",Uc=({key:e})=>e??null,Ws=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?Ae(e)||we(e)||ee(e)?{i:Ie,r:e,k:t,f:!!n}:e:null);function w(e,t=null,n=null,s=0,i=null,r=e===ge?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Uc(t),ref:t&&Ws(t),scopeId:wi,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:Ie};return a?(oo(l,n),r&128&&e.normalize(l)):n&&(l.shapeFlag|=Ae(n)?8:16),cs>0&&!o&&Ze&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&Ze.push(l),l}const ie=u_;function u_(e,t=null,n=null,s=0,i=null,r=!1){if((!e||e===Nc)&&(e=Bt),Zs(e)){const a=Cn(e,t,!0);return n&&oo(a,n),cs>0&&!r&&Ze&&(a.shapeFlag&6?Ze[Ze.indexOf(e)]=a:Ze.push(a)),a.patchFlag|=-2,a}if(E_(e)&&(e=e.__vccOpts),t){t=d_(t);let{class:a,style:l}=t;a&&!Ae(a)&&(t.class=Ln(a)),_e(l)&&(gc(l)&&!Y(l)&&(l=Oe({},l)),t.style=hi(l))}const o=Ae(e)?1:xg(e)?128:l_(e)?64:_e(e)?4:ee(e)?2:0;return w(e,t,n,s,i,o,r,!0)}function d_(e){return e?gc(e)||Ai in e?Oe({},e):e:null}function Cn(e,t,n=!1){const{props:s,ref:i,patchFlag:r,children:o}=e,a=t?p_(s||{},t):s;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:a,key:a&&Uc(a),ref:t&&t.ref?n&&i?Y(i)?i.concat(Ws(t)):[i,Ws(t)]:Ws(t):i,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==ge?r===-1?16:r|16:r,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Cn(e.ssContent),ssFallback:e.ssFallback&&Cn(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function Et(e=" ",t=0){return ie(ki,null,e,t)}function f_(e,t){const n=ie(Vs,null,e);return n.staticCount=t,n}function dt(e="",t=!1){return t?(W(),Ht(Bt,null,e)):ie(Bt,null,e)}function ot(e){return e==null||typeof e=="boolean"?ie(Bt):Y(e)?ie(ge,null,e.slice()):typeof e=="object"?Pt(e):ie(ki,null,String(e))}function Pt(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Cn(e)}function oo(e,t){let n=0;const{shapeFlag:s}=e;if(t==null)t=null;else if(Y(t))n=16;else if(typeof t=="object")if(s&65){const i=t.default;i&&(i._c&&(i._d=!1),oo(e,i()),i._c&&(i._d=!0));return}else{n=32;const i=t._;!i&&!(Ai in t)?t._ctx=Ie:i===3&&Ie&&(Ie.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else ee(t)?(t={default:t,_ctx:Ie},n=32):(t=String(t),s&64?(n=16,t=[Et(t)]):n=8);e.children=t,e.shapeFlag|=n}function p_(...e){const t={};for(let n=0;n<e.length;n++){const s=e[n];for(const i in s)if(i==="class")t.class!==s.class&&(t.class=Ln([t.class,s.class]));else if(i==="style")t.style=hi([t.style,s.style]);else if(ui(i)){const r=t[i],o=s[i];o&&r!==o&&!(Y(r)&&r.includes(o))&&(t[i]=r?[].concat(r,o):o)}else i!==""&&(t[i]=s[i])}return t}function rt(e,t,n,s=null){et(e,t,7,[n,s])}const h_=Lc();let m_=0;function g_(e,t,n){const s=e.type,i=(t?t.appContext:e.appContext)||h_,r={uid:m_++,vnode:e,type:s,parent:t,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new nc(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Bc(s,i),emitsOptions:Tc(s,i),emit:null,emitted:null,propsDefaults:ve,inheritAttrs:s.inheritAttrs,ctx:ve,data:ve,props:ve,attrs:ve,slots:ve,refs:ve,setupState:ve,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=t?t.root:r,r.emit=kg.bind(null,r),e.ce&&e.ce(r),r}let Pe=null,ao,cn,wa="__VUE_INSTANCE_SETTERS__";(cn=lr()[wa])||(cn=lr()[wa]=[]),cn.push(e=>Pe=e),ao=e=>{cn.length>1?cn.forEach(t=>t(e)):cn[0](e)};const xn=e=>{ao(e),e.scope.on()},en=()=>{Pe&&Pe.scope.off(),ao(null)};function qc(e){return e.vnode.shapeFlag&4}let us=!1;function __(e,t=!1){us=t;const{props:n,children:s}=e.vnode,i=qc(e);e_(e,n,i,t),s_(e,s);const r=i?v_(e,t):void 0;return us=!1,r}function v_(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=_i(new Proxy(e.ctx,qg));const{setup:s}=n;if(s){const i=e.setupContext=s.length>1?y_(e):null;xn(e),Mn();const r=Rt(s,e,0,[e.props,i]);if(Bn(),en(),Ql(r)){if(r.then(en,en),t)return r.then(o=>{Ea(e,o,t)}).catch(o=>{bi(o,e,0)});e.asyncDep=r}else Ea(e,r,t)}else zc(e,t)}function Ea(e,t,n){ee(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:_e(t)&&(e.setupState=yc(t)),zc(e,n)}let ka;function zc(e,t,n){const s=e.type;if(!e.render){if(!t&&ka&&!s.render){const i=s.template||io(e).template;if(i){const{isCustomElement:r,compilerOptions:o}=e.appContext.config,{delimiters:a,compilerOptions:l}=s,c=Oe(Oe({isCustomElement:r,delimiters:a},o),l);s.render=ka(i,c)}}e.render=s.render||Je}xn(e),Mn(),zg(e),Bn(),en()}function b_(e){return e.attrsProxy||(e.attrsProxy=new Proxy(e.attrs,{get(t,n){return Fe(e,"get","$attrs"),t[n]}}))}function y_(e){const t=n=>{e.exposed=n||{}};return{get attrs(){return b_(e)},slots:e.slots,emit:e.emit,expose:t}}function Ti(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(yc(_i(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Qn)return Qn[n](e)},has(t,n){return n in t||n in Qn}}))}function w_(e,t=!0){return ee(e)?e.displayName||e.name:e.name||t&&e.__name}function E_(e){return ee(e)&&"__vccOpts"in e}const je=(e,t)=>_g(e,t,us);function Kc(e,t,n){const s=arguments.length;return s===2?_e(t)&&!Y(t)?Zs(t)?ie(e,null,[t]):ie(e,t):ie(e,null,t):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&Zs(n)&&(n=[n]),ie(e,t,n))}const k_=Symbol.for("v-scx"),A_=()=>ut(k_),T_="3.3.4",S_="http://www.w3.org/2000/svg",zt=typeof document<"u"?document:null,Aa=zt&&zt.createElement("template"),C_={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,s)=>{const i=t?zt.createElementNS(S_,e):zt.createElement(e,n?{is:n}:void 0);return e==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:e=>zt.createTextNode(e),createComment:e=>zt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>zt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,s,i,r){const o=n?n.previousSibling:t.lastChild;if(i&&(i===r||i.nextSibling))for(;t.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{Aa.innerHTML=s?`<svg>${e}</svg>`:e;const a=Aa.content;if(s){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}t.insertBefore(a,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function x_(e,t,n){const s=e._vtc;s&&(t=(t?[t,...s]:[...s]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function P_(e,t,n){const s=e.style,i=Ae(n);if(n&&!i){if(t&&!Ae(t))for(const r in t)n[r]==null&&vr(s,r,"");for(const r in n)vr(s,r,n[r])}else{const r=s.display;i?t!==n&&(s.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(s.display=r)}}const Ta=/\s*!important$/;function vr(e,t,n){if(Y(n))n.forEach(s=>vr(e,t,s));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const s=O_(e,t);Ta.test(n)?e.setProperty($n(s),n.replace(Ta,""),"important"):e[s]=n}}const Sa=["Webkit","Moz","ms"],Ui={};function O_(e,t){const n=Ui[t];if(n)return n;let s=pt(t);if(s!=="filter"&&s in e)return Ui[t]=s;s=pi(s);for(let i=0;i<Sa.length;i++){const r=Sa[i]+s;if(r in e)return Ui[t]=r}return t}const Ca="http://www.w3.org/1999/xlink";function I_(e,t,n,s,i){if(s&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(Ca,t.slice(6,t.length)):e.setAttributeNS(Ca,t,n);else{const r=Im(t);n==null||r&&!ec(n)?e.removeAttribute(t):e.setAttribute(t,r?"":n)}}function N_(e,t,n,s,i,r,o){if(t==="innerHTML"||t==="textContent"){s&&o(s,i,r),e[t]=n??"";return}const a=e.tagName;if(t==="value"&&a!=="PROGRESS"&&!a.includes("-")){e._value=n;const c=a==="OPTION"?e.getAttribute("value"):e.value,u=n??"";c!==u&&(e.value=u),n==null&&e.removeAttribute(t);return}let l=!1;if(n===""||n==null){const c=typeof e[t];c==="boolean"?n=ec(n):n==null&&c==="string"?(n="",l=!0):c==="number"&&(n=0,l=!0)}try{e[t]=n}catch{}l&&e.removeAttribute(t)}function Kt(e,t,n,s){e.addEventListener(t,n,s)}function R_(e,t,n,s){e.removeEventListener(t,n,s)}function D_(e,t,n,s,i=null){const r=e._vei||(e._vei={}),o=r[t];if(s&&o)o.value=s;else{const[a,l]=$_(t);if(s){const c=r[t]=B_(s,i);Kt(e,a,c,l)}else o&&(R_(e,a,o,l),r[t]=void 0)}}const xa=/(?:Once|Passive|Capture)$/;function $_(e){let t;if(xa.test(e)){t={};let s;for(;s=e.match(xa);)e=e.slice(0,e.length-s[0].length),t[s[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):$n(e.slice(2)),t]}let qi=0;const L_=Promise.resolve(),M_=()=>qi||(L_.then(()=>qi=0),qi=Date.now());function B_(e,t){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;et(F_(s,n.value),t,5,[s])};return n.value=e,n.attached=M_(),n}function F_(e,t){if(Y(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(s=>i=>!i._stopped&&s&&s(i))}else return t}const Pa=/^on[a-z]/,V_=(e,t,n,s,i=!1,r,o,a,l)=>{t==="class"?x_(e,s,i):t==="style"?P_(e,n,s):ui(t)?jr(t)||D_(e,t,n,s,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):W_(e,t,s,i))?N_(e,t,s,r,o,a,l):(t==="true-value"?e._trueValue=s:t==="false-value"&&(e._falseValue=s),I_(e,t,s,i))};function W_(e,t,n,s){return s?!!(t==="innerHTML"||t==="textContent"||t in e&&Pa.test(t)&&ee(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||Pa.test(t)&&Ae(n)?!1:t in e}const Js=e=>{const t=e.props["onUpdate:modelValue"]||!1;return Y(t)?n=>Ms(t,n):t};function H_(e){e.target.composing=!0}function Oa(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const j_={created(e,{modifiers:{lazy:t,trim:n,number:s}},i){e._assign=Js(i);const r=s||i.props&&i.props.type==="number";Kt(e,t?"change":"input",o=>{if(o.target.composing)return;let a=e.value;n&&(a=a.trim()),r&&(a=Ks(a)),e._assign(a)}),n&&Kt(e,"change",()=>{e.value=e.value.trim()}),t||(Kt(e,"compositionstart",H_),Kt(e,"compositionend",Oa),Kt(e,"change",Oa))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:s,number:i}},r){if(e._assign=Js(r),e.composing||document.activeElement===e&&e.type!=="range"&&(n||s&&e.value.trim()===t||(i||e.type==="number")&&Ks(e.value)===t))return;const o=t??"";e.value!==o&&(e.value=o)}},U_={deep:!0,created(e,{value:t,modifiers:{number:n}},s){const i=di(t);Kt(e,"change",()=>{const r=Array.prototype.filter.call(e.options,o=>o.selected).map(o=>n?Ks(ei(o)):ei(o));e._assign(e.multiple?i?new Set(r):r:r[0])}),e._assign=Js(s)},mounted(e,{value:t}){Ia(e,t)},beforeUpdate(e,t,n){e._assign=Js(n)},updated(e,{value:t}){Ia(e,t)}};function Ia(e,t){const n=e.multiple;if(!(n&&!Y(t)&&!di(t))){for(let s=0,i=e.options.length;s<i;s++){const r=e.options[s],o=ei(r);if(n)Y(t)?r.selected=Rm(t,o)>-1:r.selected=t.has(o);else if(mi(ei(r),t)){e.selectedIndex!==s&&(e.selectedIndex=s);return}}!n&&e.selectedIndex!==-1&&(e.selectedIndex=-1)}}function ei(e){return"_value"in e?e._value:e.value}const q_=Oe({patchProp:V_},C_);let Na;function z_(){return Na||(Na=r_(q_))}const K_=(...e)=>{const t=z_().createApp(...e),{mount:n}=t;return t.mount=s=>{const i=G_(s);if(!i)return;const r=t._component;!ee(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},t};function G_(e){return Ae(e)?document.querySelector(e):e}var Y_=!1;/*!
  * pinia v2.1.3
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */let Gc;const Si=e=>Gc=e,Yc=Symbol();function br(e){return e&&typeof e=="object"&&Object.prototype.toString.call(e)==="[object Object]"&&typeof e.toJSON!="function"}var Jn;(function(e){e.direct="direct",e.patchObject="patch object",e.patchFunction="patch function"})(Jn||(Jn={}));function X_(){const e=sc(!0),t=e.run(()=>vi({}));let n=[],s=[];const i=_i({install(r){Si(i),i._a=r,r.provide(Yc,i),r.config.globalProperties.$pinia=i,s.forEach(o=>n.push(o)),s=[]},use(r){return!this._a&&!Y_?s.push(r):n.push(r),this},_p:n,_a:null,_e:e,_s:new Map,state:t});return i}const Xc=()=>{};function Ra(e,t,n,s=Xc){e.push(t);const i=()=>{const r=e.indexOf(t);r>-1&&(e.splice(r,1),s())};return!n&&ic()&&$m(i),i}function un(e,...t){e.slice().forEach(n=>{n(...t)})}const Q_=e=>e();function yr(e,t){e instanceof Map&&t instanceof Map&&t.forEach((n,s)=>e.set(s,n)),e instanceof Set&&t instanceof Set&&t.forEach(e.add,e);for(const n in t){if(!t.hasOwnProperty(n))continue;const s=t[n],i=e[n];br(i)&&br(s)&&e.hasOwnProperty(n)&&!we(s)&&!Nt(s)?e[n]=yr(i,s):e[n]=s}return e}const Z_=Symbol();function J_(e){return!br(e)||!e.hasOwnProperty(Z_)}const{assign:xt}=Object;function ev(e){return!!(we(e)&&e.effect)}function tv(e,t,n,s){const{state:i,actions:r,getters:o}=t,a=n.state.value[e];let l;function c(){a||(n.state.value[e]=i?i():{});const u=pg(n.state.value[e]);return xt(u,r,Object.keys(o||{}).reduce((d,p)=>(d[p]=_i(je(()=>{Si(n);const g=n._s.get(e);return o[p].call(g,g)})),d),{}))}return l=Qc(e,c,t,n,s,!0),l}function Qc(e,t,n={},s,i,r){let o;const a=xt({actions:{}},n),l={deep:!0};let c,u,d=[],p=[],g;const P=s.state.value[e];!r&&!P&&(s.state.value[e]={}),vi({});let E;function S(M){let O;c=u=!1,typeof M=="function"?(M(s.state.value[e]),O={type:Jn.patchFunction,storeId:e,events:g}):(yr(s.state.value[e],M),O={type:Jn.patchObject,payload:M,storeId:e,events:g});const H=E=Symbol();eo().then(()=>{E===H&&(c=!0)}),u=!0,un(d,O,s.state.value[e])}const x=r?function(){const{state:O}=n,H=O?O():{};this.$patch(X=>{xt(X,H)})}:Xc;function m(){o.stop(),d=[],p=[],s._s.delete(e)}function _(M,O){return function(){Si(s);const H=Array.from(arguments),X=[],re=[];function ue(Q){X.push(Q)}function xe(Q){re.push(Q)}un(p,{args:H,name:M,store:y,after:ue,onError:xe});let be;try{be=O.apply(this&&this.$id===e?this:y,H)}catch(Q){throw un(re,Q),Q}return be instanceof Promise?be.then(Q=>(un(X,Q),Q)).catch(Q=>(un(re,Q),Promise.reject(Q))):(un(X,be),be)}}const v={_p:s,$id:e,$onAction:Ra.bind(null,p),$patch:S,$reset:x,$subscribe(M,O={}){const H=Ra(d,M,O.detached,()=>X()),X=o.run(()=>Yn(()=>s.state.value[e],re=>{(O.flush==="sync"?u:c)&&M({storeId:e,type:Jn.direct,events:g},re)},xt({},l,O)));return H},$dispose:m},y=Fn(v);s._s.set(e,y);const T=s._a&&s._a.runWithContext||Q_,D=s._e.run(()=>(o=sc(),T(()=>o.run(t))));for(const M in D){const O=D[M];if(we(O)&&!ev(O)||Nt(O))r||(P&&J_(O)&&(we(O)?O.value=P[M]:yr(O,P[M])),s.state.value[e][M]=O);else if(typeof O=="function"){const H=_(M,O);D[M]=H,a.actions[M]=O}}return xt(y,D),xt(le(y),D),Object.defineProperty(y,"$state",{get:()=>s.state.value[e],set:M=>{S(O=>{xt(O,M)})}}),s._p.forEach(M=>{xt(y,o.run(()=>M({store:y,app:s._a,pinia:s,options:a})))}),P&&r&&n.hydrate&&n.hydrate(y.$state,P),c=!0,u=!0,y}function nv(e,t,n){let s,i;const r=typeof t=="function";typeof e=="string"?(s=e,i=r?n:t):(i=e,s=e.id);function o(a,l){const c=Jg();return a=a||(c?ut(Yc,null):null),a&&Si(a),a=Gc,a._s.has(s)||(r?Qc(s,t,i,a):tv(s,i,a)),a._s.get(s)}return o.$id=s,o}let sv="Store";function lo(...e){return e.reduce((t,n)=>(t[n.$id+sv]=function(){return n(this.$pinia)},t),{})}/*!
  * vue-router v4.2.1
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const hn=typeof window<"u";function iv(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const pe=Object.assign;function zi(e,t){const n={};for(const s in t){const i=t[s];n[s]=tt(i)?i.map(e):e(i)}return n}const es=()=>{},tt=Array.isArray,rv=/\/$/,ov=e=>e.replace(rv,"");function Ki(e,t,n="/"){let s,i={},r="",o="";const a=t.indexOf("#");let l=t.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(s=t.slice(0,l),r=t.slice(l+1,a>-1?a:t.length),i=e(r)),a>-1&&(s=s||t.slice(0,a),o=t.slice(a,t.length)),s=uv(s??t,n),{fullPath:s+(r&&"?")+r+o,path:s,query:i,hash:o}}function av(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function Da(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function lv(e,t,n){const s=t.matched.length-1,i=n.matched.length-1;return s>-1&&s===i&&Pn(t.matched[s],n.matched[i])&&Zc(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function Pn(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Zc(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!cv(e[n],t[n]))return!1;return!0}function cv(e,t){return tt(e)?$a(e,t):tt(t)?$a(t,e):e===t}function $a(e,t){return tt(t)?e.length===t.length&&e.every((n,s)=>n===t[s]):e.length===1&&e[0]===t}function uv(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),s=e.split("/"),i=s[s.length-1];(i===".."||i===".")&&s.push("");let r=n.length-1,o,a;for(o=0;o<s.length;o++)if(a=s[o],a!==".")if(a==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+s.slice(o-(o===s.length?1:0)).join("/")}var ds;(function(e){e.pop="pop",e.push="push"})(ds||(ds={}));var ts;(function(e){e.back="back",e.forward="forward",e.unknown=""})(ts||(ts={}));function dv(e){if(!e)if(hn){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),ov(e)}const fv=/^[^#]+#/;function pv(e,t){return e.replace(fv,"#")+t}function hv(e,t){const n=document.documentElement.getBoundingClientRect(),s=e.getBoundingClientRect();return{behavior:t.behavior,left:s.left-n.left-(t.left||0),top:s.top-n.top-(t.top||0)}}const Ci=()=>({left:window.pageXOffset,top:window.pageYOffset});function mv(e){let t;if("el"in e){const n=e.el,s=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;t=hv(i,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function La(e,t){return(history.state?history.state.position-t:-1)+e}const wr=new Map;function gv(e,t){wr.set(e,t)}function _v(e){const t=wr.get(e);return wr.delete(e),t}let vv=()=>location.protocol+"//"+location.host;function Jc(e,t){const{pathname:n,search:s,hash:i}=t,r=e.indexOf("#");if(r>-1){let a=i.includes(e.slice(r))?e.slice(r).length:1,l=i.slice(a);return l[0]!=="/"&&(l="/"+l),Da(l,"")}return Da(n,e)+s+i}function bv(e,t,n,s){let i=[],r=[],o=null;const a=({state:p})=>{const g=Jc(e,location),P=n.value,E=t.value;let S=0;if(p){if(n.value=g,t.value=p,o&&o===P){o=null;return}S=E?p.position-E.position:0}else s(g);i.forEach(x=>{x(n.value,P,{delta:S,type:ds.pop,direction:S?S>0?ts.forward:ts.back:ts.unknown})})};function l(){o=n.value}function c(p){i.push(p);const g=()=>{const P=i.indexOf(p);P>-1&&i.splice(P,1)};return r.push(g),g}function u(){const{history:p}=window;p.state&&p.replaceState(pe({},p.state,{scroll:Ci()}),"")}function d(){for(const p of r)p();r=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:d}}function Ma(e,t,n,s=!1,i=!1){return{back:e,current:t,forward:n,replaced:s,position:window.history.length,scroll:i?Ci():null}}function yv(e){const{history:t,location:n}=window,s={value:Jc(e,n)},i={value:t.state};i.value||r(s.value,{back:null,current:s.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function r(l,c,u){const d=e.indexOf("#"),p=d>-1?(n.host&&document.querySelector("base")?e:e.slice(d))+l:vv()+e+l;try{t[u?"replaceState":"pushState"](c,"",p),i.value=c}catch(g){console.error(g),n[u?"replace":"assign"](p)}}function o(l,c){const u=pe({},t.state,Ma(i.value.back,l,i.value.forward,!0),c,{position:i.value.position});r(l,u,!0),s.value=l}function a(l,c){const u=pe({},i.value,t.state,{forward:l,scroll:Ci()});r(u.current,u,!0);const d=pe({},Ma(s.value,l,null),{position:u.position+1},c);r(l,d,!1),s.value=l}return{location:s,state:i,push:a,replace:o}}function wv(e){e=dv(e);const t=yv(e),n=bv(e,t.state,t.location,t.replace);function s(r,o=!0){o||n.pauseListeners(),history.go(r)}const i=pe({location:"",base:e,go:s,createHref:pv.bind(null,e)},t,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>t.state.value}),i}function Ev(e){return typeof e=="string"||e&&typeof e=="object"}function eu(e){return typeof e=="string"||typeof e=="symbol"}const Ct={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},tu=Symbol("");var Ba;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(Ba||(Ba={}));function On(e,t){return pe(new Error,{type:e,[tu]:!0},t)}function ht(e,t){return e instanceof Error&&tu in e&&(t==null||!!(e.type&t))}const Fa="[^/]+?",kv={sensitive:!1,strict:!1,start:!0,end:!0},Av=/[.+*?^${}()[\]/\\]/g;function Tv(e,t){const n=pe({},kv,t),s=[];let i=n.start?"^":"";const r=[];for(const c of e){const u=c.length?[]:[90];n.strict&&!c.length&&(i+="/");for(let d=0;d<c.length;d++){const p=c[d];let g=40+(n.sensitive?.25:0);if(p.type===0)d||(i+="/"),i+=p.value.replace(Av,"\\$&"),g+=40;else if(p.type===1){const{value:P,repeatable:E,optional:S,regexp:x}=p;r.push({name:P,repeatable:E,optional:S});const m=x||Fa;if(m!==Fa){g+=10;try{new RegExp(`(${m})`)}catch(v){throw new Error(`Invalid custom RegExp for param "${P}" (${m}): `+v.message)}}let _=E?`((?:${m})(?:/(?:${m}))*)`:`(${m})`;d||(_=S&&c.length<2?`(?:/${_})`:"/"+_),S&&(_+="?"),i+=_,g+=20,S&&(g+=-8),E&&(g+=-20),m===".*"&&(g+=-50)}u.push(g)}s.push(u)}if(n.strict&&n.end){const c=s.length-1;s[c][s[c].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function a(c){const u=c.match(o),d={};if(!u)return null;for(let p=1;p<u.length;p++){const g=u[p]||"",P=r[p-1];d[P.name]=g&&P.repeatable?g.split("/"):g}return d}function l(c){let u="",d=!1;for(const p of e){(!d||!u.endsWith("/"))&&(u+="/"),d=!1;for(const g of p)if(g.type===0)u+=g.value;else if(g.type===1){const{value:P,repeatable:E,optional:S}=g,x=P in c?c[P]:"";if(tt(x)&&!E)throw new Error(`Provided param "${P}" is an array but it is not repeatable (* or + modifiers)`);const m=tt(x)?x.join("/"):x;if(!m)if(S)p.length<2&&(u.endsWith("/")?u=u.slice(0,-1):d=!0);else throw new Error(`Missing required param "${P}"`);u+=m}}return u||"/"}return{re:o,score:s,keys:r,parse:a,stringify:l}}function Sv(e,t){let n=0;for(;n<e.length&&n<t.length;){const s=t[n]-e[n];if(s)return s;n++}return e.length<t.length?e.length===1&&e[0]===40+40?-1:1:e.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function Cv(e,t){let n=0;const s=e.score,i=t.score;for(;n<s.length&&n<i.length;){const r=Sv(s[n],i[n]);if(r)return r;n++}if(Math.abs(i.length-s.length)===1){if(Va(s))return 1;if(Va(i))return-1}return i.length-s.length}function Va(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const xv={type:0,value:""},Pv=/[a-zA-Z0-9_]/;function Ov(e){if(!e)return[[]];if(e==="/")return[[xv]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(g){throw new Error(`ERR (${n})/"${c}": ${g}`)}let n=0,s=n;const i=[];let r;function o(){r&&i.push(r),r=[]}let a=0,l,c="",u="";function d(){c&&(n===0?r.push({type:0,value:c}):n===1||n===2||n===3?(r.length>1&&(l==="*"||l==="+")&&t(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):t("Invalid state to consume buffer"),c="")}function p(){c+=l}for(;a<e.length;){if(l=e[a++],l==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:l==="/"?(c&&d(),o()):l===":"?(d(),n=1):p();break;case 4:p(),n=s;break;case 1:l==="("?n=2:Pv.test(l)?p():(d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${c}"`),d(),o(),i}function Iv(e,t,n){const s=Tv(Ov(e.path),n),i=pe(s,{record:e,parent:t,children:[],alias:[]});return t&&!i.record.aliasOf==!t.record.aliasOf&&t.children.push(i),i}function Nv(e,t){const n=[],s=new Map;t=ja({strict:!1,end:!0,sensitive:!1},t);function i(u){return s.get(u)}function r(u,d,p){const g=!p,P=Rv(u);P.aliasOf=p&&p.record;const E=ja(t,u),S=[P];if("alias"in u){const _=typeof u.alias=="string"?[u.alias]:u.alias;for(const v of _)S.push(pe({},P,{components:p?p.record.components:P.components,path:v,aliasOf:p?p.record:P}))}let x,m;for(const _ of S){const{path:v}=_;if(d&&v[0]!=="/"){const y=d.record.path,T=y[y.length-1]==="/"?"":"/";_.path=d.record.path+(v&&T+v)}if(x=Iv(_,d,E),p?p.alias.push(x):(m=m||x,m!==x&&m.alias.push(x),g&&u.name&&!Ha(x)&&o(u.name)),P.children){const y=P.children;for(let T=0;T<y.length;T++)r(y[T],x,p&&p.children[T])}p=p||x,(x.record.components&&Object.keys(x.record.components).length||x.record.name||x.record.redirect)&&l(x)}return m?()=>{o(m)}:es}function o(u){if(eu(u)){const d=s.get(u);d&&(s.delete(u),n.splice(n.indexOf(d),1),d.children.forEach(o),d.alias.forEach(o))}else{const d=n.indexOf(u);d>-1&&(n.splice(d,1),u.record.name&&s.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function l(u){let d=0;for(;d<n.length&&Cv(u,n[d])>=0&&(u.record.path!==n[d].record.path||!nu(u,n[d]));)d++;n.splice(d,0,u),u.record.name&&!Ha(u)&&s.set(u.record.name,u)}function c(u,d){let p,g={},P,E;if("name"in u&&u.name){if(p=s.get(u.name),!p)throw On(1,{location:u});E=p.record.name,g=pe(Wa(d.params,p.keys.filter(m=>!m.optional).map(m=>m.name)),u.params&&Wa(u.params,p.keys.map(m=>m.name))),P=p.stringify(g)}else if("path"in u)P=u.path,p=n.find(m=>m.re.test(P)),p&&(g=p.parse(P),E=p.record.name);else{if(p=d.name?s.get(d.name):n.find(m=>m.re.test(d.path)),!p)throw On(1,{location:u,currentLocation:d});E=p.record.name,g=pe({},d.params,u.params),P=p.stringify(g)}const S=[];let x=p;for(;x;)S.unshift(x.record),x=x.parent;return{name:E,path:P,params:g,matched:S,meta:$v(S)}}return e.forEach(u=>r(u)),{addRoute:r,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:i}}function Wa(e,t){const n={};for(const s of t)s in e&&(n[s]=e[s]);return n}function Rv(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:Dv(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function Dv(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const s in e.components)t[s]=typeof n=="boolean"?n:n[s];return t}function Ha(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function $v(e){return e.reduce((t,n)=>pe(t,n.meta),{})}function ja(e,t){const n={};for(const s in e)n[s]=s in t?t[s]:e[s];return n}function nu(e,t){return t.children.some(n=>n===e||nu(e,n))}const su=/#/g,Lv=/&/g,Mv=/\//g,Bv=/=/g,Fv=/\?/g,iu=/\+/g,Vv=/%5B/g,Wv=/%5D/g,ru=/%5E/g,Hv=/%60/g,ou=/%7B/g,jv=/%7C/g,au=/%7D/g,Uv=/%20/g;function co(e){return encodeURI(""+e).replace(jv,"|").replace(Vv,"[").replace(Wv,"]")}function qv(e){return co(e).replace(ou,"{").replace(au,"}").replace(ru,"^")}function Er(e){return co(e).replace(iu,"%2B").replace(Uv,"+").replace(su,"%23").replace(Lv,"%26").replace(Hv,"`").replace(ou,"{").replace(au,"}").replace(ru,"^")}function zv(e){return Er(e).replace(Bv,"%3D")}function Kv(e){return co(e).replace(su,"%23").replace(Fv,"%3F")}function Gv(e){return e==null?"":Kv(e).replace(Mv,"%2F")}function ti(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function Yv(e){const t={};if(e===""||e==="?")return t;const s=(e[0]==="?"?e.slice(1):e).split("&");for(let i=0;i<s.length;++i){const r=s[i].replace(iu," "),o=r.indexOf("="),a=ti(o<0?r:r.slice(0,o)),l=o<0?null:ti(r.slice(o+1));if(a in t){let c=t[a];tt(c)||(c=t[a]=[c]),c.push(l)}else t[a]=l}return t}function Ua(e){let t="";for(let n in e){const s=e[n];if(n=zv(n),s==null){s!==void 0&&(t+=(t.length?"&":"")+n);continue}(tt(s)?s.map(r=>r&&Er(r)):[s&&Er(s)]).forEach(r=>{r!==void 0&&(t+=(t.length?"&":"")+n,r!=null&&(t+="="+r))})}return t}function Xv(e){const t={};for(const n in e){const s=e[n];s!==void 0&&(t[n]=tt(s)?s.map(i=>i==null?null:""+i):s==null?s:""+s)}return t}const Qv=Symbol(""),qa=Symbol(""),uo=Symbol(""),lu=Symbol(""),kr=Symbol("");function Un(){let e=[];function t(s){return e.push(s),()=>{const i=e.indexOf(s);i>-1&&e.splice(i,1)}}function n(){e=[]}return{add:t,list:()=>e,reset:n}}function Ot(e,t,n,s,i){const r=s&&(s.enterCallbacks[i]=s.enterCallbacks[i]||[]);return()=>new Promise((o,a)=>{const l=d=>{d===!1?a(On(4,{from:n,to:t})):d instanceof Error?a(d):Ev(d)?a(On(2,{from:t,to:d})):(r&&s.enterCallbacks[i]===r&&typeof d=="function"&&r.push(d),o())},c=e.call(s&&s.instances[i],t,n,l);let u=Promise.resolve(c);e.length<3&&(u=u.then(l)),u.catch(d=>a(d))})}function Gi(e,t,n,s){const i=[];for(const r of e)for(const o in r.components){let a=r.components[o];if(!(t!=="beforeRouteEnter"&&!r.instances[o]))if(Zv(a)){const c=(a.__vccOpts||a)[t];c&&i.push(Ot(c,n,s,r,o))}else{let l=a();i.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${r.path}"`));const u=iv(c)?c.default:c;r.components[o]=u;const p=(u.__vccOpts||u)[t];return p&&Ot(p,n,s,r,o)()}))}}return i}function Zv(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function za(e){const t=ut(uo),n=ut(lu),s=je(()=>t.resolve(Jt(e.to))),i=je(()=>{const{matched:l}=s.value,{length:c}=l,u=l[c-1],d=n.matched;if(!u||!d.length)return-1;const p=d.findIndex(Pn.bind(null,u));if(p>-1)return p;const g=Ka(l[c-2]);return c>1&&Ka(u)===g&&d[d.length-1].path!==g?d.findIndex(Pn.bind(null,l[c-2])):p}),r=je(()=>i.value>-1&&nb(n.params,s.value.params)),o=je(()=>i.value>-1&&i.value===n.matched.length-1&&Zc(n.params,s.value.params));function a(l={}){return tb(l)?t[Jt(e.replace)?"replace":"push"](Jt(e.to)).catch(es):Promise.resolve()}return{route:s,href:je(()=>s.value.href),isActive:r,isExactActive:o,navigate:a}}const Jv=no({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:za,setup(e,{slots:t}){const n=Fn(za(e)),{options:s}=ut(uo),i=je(()=>({[Ga(e.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[Ga(e.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=t.default&&t.default(n);return e.custom?r:Kc("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},r)}}}),eb=Jv;function tb(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function nb(e,t){for(const n in t){const s=t[n],i=e[n];if(typeof s=="string"){if(s!==i)return!1}else if(!tt(i)||i.length!==s.length||s.some((r,o)=>r!==i[o]))return!1}return!0}function Ka(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Ga=(e,t,n)=>e??t??n,sb=no({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const s=ut(kr),i=je(()=>e.route||s.value),r=ut(qa,0),o=je(()=>{let c=Jt(r);const{matched:u}=i.value;let d;for(;(d=u[c])&&!d.components;)c++;return c}),a=je(()=>i.value.matched[o.value]);Fs(qa,je(()=>o.value+1)),Fs(Qv,a),Fs(kr,i);const l=vi();return Yn(()=>[l.value,a.value,e.name],([c,u,d],[p,g,P])=>{u&&(u.instances[d]=c,g&&g!==u&&c&&c===p&&(u.leaveGuards.size||(u.leaveGuards=g.leaveGuards),u.updateGuards.size||(u.updateGuards=g.updateGuards))),c&&u&&(!g||!Pn(u,g)||!p)&&(u.enterCallbacks[d]||[]).forEach(E=>E(c))},{flush:"post"}),()=>{const c=i.value,u=e.name,d=a.value,p=d&&d.components[u];if(!p)return Ya(n.default,{Component:p,route:c});const g=d.props[u],P=g?g===!0?c.params:typeof g=="function"?g(c):g:null,S=Kc(p,pe({},P,t,{onVnodeUnmounted:x=>{x.component.isUnmounted&&(d.instances[u]=null)},ref:l}));return Ya(n.default,{Component:S,route:c})||S}}});function Ya(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const cu=sb;function ib(e){const t=Nv(e.routes,e),n=e.parseQuery||Yv,s=e.stringifyQuery||Ua,i=e.history,r=Un(),o=Un(),a=Un(),l=ug(Ct);let c=Ct;hn&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=zi.bind(null,k=>""+k),d=zi.bind(null,Gv),p=zi.bind(null,ti);function g(k,F){let B,U;return eu(k)?(B=t.getRecordMatcher(k),U=F):U=k,t.addRoute(U,B)}function P(k){const F=t.getRecordMatcher(k);F&&t.removeRoute(F)}function E(){return t.getRoutes().map(k=>k.record)}function S(k){return!!t.getRecordMatcher(k)}function x(k,F){if(F=pe({},F||l.value),typeof k=="string"){const b=Ki(n,k,F.path),A=t.resolve({path:b.path},F),C=i.createHref(b.fullPath);return pe(b,A,{params:p(A.params),hash:ti(b.hash),redirectedFrom:void 0,href:C})}let B;if("path"in k)B=pe({},k,{path:Ki(n,k.path,F.path).path});else{const b=pe({},k.params);for(const A in b)b[A]==null&&delete b[A];B=pe({},k,{params:d(b)}),F.params=d(F.params)}const U=t.resolve(B,F),ne=k.hash||"";U.params=u(p(U.params));const f=av(s,pe({},k,{hash:qv(ne),path:U.path})),h=i.createHref(f);return pe({fullPath:f,hash:ne,query:s===Ua?Xv(k.query):k.query||{}},U,{redirectedFrom:void 0,href:h})}function m(k){return typeof k=="string"?Ki(n,k,l.value.path):pe({},k)}function _(k,F){if(c!==k)return On(8,{from:F,to:k})}function v(k){return D(k)}function y(k){return v(pe(m(k),{replace:!0}))}function T(k){const F=k.matched[k.matched.length-1];if(F&&F.redirect){const{redirect:B}=F;let U=typeof B=="function"?B(k):B;return typeof U=="string"&&(U=U.includes("?")||U.includes("#")?U=m(U):{path:U},U.params={}),pe({query:k.query,hash:k.hash,params:"path"in U?{}:k.params},U)}}function D(k,F){const B=c=x(k),U=l.value,ne=k.state,f=k.force,h=k.replace===!0,b=T(B);if(b)return D(pe(m(b),{state:typeof b=="object"?pe({},ne,b.state):ne,force:f,replace:h}),F||B);const A=B;A.redirectedFrom=F;let C;return!f&&lv(s,U,B)&&(C=On(16,{to:A,from:U}),Se(U,U,!0,!1)),(C?Promise.resolve(C):H(A,U)).catch(I=>ht(I)?ht(I,2)?I:Ee(I):G(I,A,U)).then(I=>{if(I){if(ht(I,2))return D(pe({replace:h},m(I.to),{state:typeof I.to=="object"?pe({},ne,I.to.state):ne,force:f}),F||A)}else I=re(A,U,!0,h,ne);return X(A,U,I),I})}function M(k,F){const B=_(k,F);return B?Promise.reject(B):Promise.resolve()}function O(k){const F=ye.values().next().value;return F&&typeof F.runWithContext=="function"?F.runWithContext(k):k()}function H(k,F){let B;const[U,ne,f]=rb(k,F);B=Gi(U.reverse(),"beforeRouteLeave",k,F);for(const b of U)b.leaveGuards.forEach(A=>{B.push(Ot(A,k,F))});const h=M.bind(null,k,F);return B.push(h),me(B).then(()=>{B=[];for(const b of r.list())B.push(Ot(b,k,F));return B.push(h),me(B)}).then(()=>{B=Gi(ne,"beforeRouteUpdate",k,F);for(const b of ne)b.updateGuards.forEach(A=>{B.push(Ot(A,k,F))});return B.push(h),me(B)}).then(()=>{B=[];for(const b of k.matched)if(b.beforeEnter&&!F.matched.includes(b))if(tt(b.beforeEnter))for(const A of b.beforeEnter)B.push(Ot(A,k,F));else B.push(Ot(b.beforeEnter,k,F));return B.push(h),me(B)}).then(()=>(k.matched.forEach(b=>b.enterCallbacks={}),B=Gi(f,"beforeRouteEnter",k,F),B.push(h),me(B))).then(()=>{B=[];for(const b of o.list())B.push(Ot(b,k,F));return B.push(h),me(B)}).catch(b=>ht(b,8)?b:Promise.reject(b))}function X(k,F,B){for(const U of a.list())O(()=>U(k,F,B))}function re(k,F,B,U,ne){const f=_(k,F);if(f)return f;const h=F===Ct,b=hn?history.state:{};B&&(U||h?i.replace(k.fullPath,pe({scroll:h&&b&&b.scroll},ne)):i.push(k.fullPath,ne)),l.value=k,Se(k,F,B,h),Ee()}let ue;function xe(){ue||(ue=i.listen((k,F,B)=>{if(!Ce.listening)return;const U=x(k),ne=T(U);if(ne){D(pe(ne,{replace:!0}),U).catch(es);return}c=U;const f=l.value;hn&&gv(La(f.fullPath,B.delta),Ci()),H(U,f).catch(h=>ht(h,12)?h:ht(h,2)?(D(h.to,U).then(b=>{ht(b,20)&&!B.delta&&B.type===ds.pop&&i.go(-1,!1)}).catch(es),Promise.reject()):(B.delta&&i.go(-B.delta,!1),G(h,U,f))).then(h=>{h=h||re(U,f,!1),h&&(B.delta&&!ht(h,8)?i.go(-B.delta,!1):B.type===ds.pop&&ht(h,20)&&i.go(-1,!1)),X(U,f,h)}).catch(es)}))}let be=Un(),Q=Un(),J;function G(k,F,B){Ee(k);const U=Q.list();return U.length?U.forEach(ne=>ne(k,F,B)):console.error(k),Promise.reject(k)}function he(){return J&&l.value!==Ct?Promise.resolve():new Promise((k,F)=>{be.add([k,F])})}function Ee(k){return J||(J=!k,xe(),be.list().forEach(([F,B])=>k?B(k):F()),be.reset()),k}function Se(k,F,B,U){const{scrollBehavior:ne}=e;if(!hn||!ne)return Promise.resolve();const f=!B&&_v(La(k.fullPath,0))||(U||!B)&&history.state&&history.state.scroll||null;return eo().then(()=>ne(k,F,f)).then(h=>h&&mv(h)).catch(h=>G(h,k,F))}const ce=k=>i.go(k);let Ve;const ye=new Set,Ce={currentRoute:l,listening:!0,addRoute:g,removeRoute:P,hasRoute:S,getRoutes:E,resolve:x,options:e,push:v,replace:y,go:ce,back:()=>ce(-1),forward:()=>ce(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:Q.add,isReady:he,install(k){const F=this;k.component("RouterLink",eb),k.component("RouterView",cu),k.config.globalProperties.$router=F,Object.defineProperty(k.config.globalProperties,"$route",{enumerable:!0,get:()=>Jt(l)}),hn&&!Ve&&l.value===Ct&&(Ve=!0,v(i.location).catch(ne=>{}));const B={};for(const ne in Ct)B[ne]=je(()=>l.value[ne]);k.provide(uo,F),k.provide(lu,Fn(B)),k.provide(kr,l);const U=k.unmount;ye.add(k),k.unmount=function(){ye.delete(k),ye.size<1&&(c=Ct,ue&&ue(),ue=null,l.value=Ct,Ve=!1,J=!1),U()}}};function me(k){return k.reduce((F,B)=>F.then(()=>O(B)),Promise.resolve())}return Ce}function rb(e,t){const n=[],s=[],i=[],r=Math.max(t.matched.length,e.matched.length);for(let o=0;o<r;o++){const a=t.matched[o];a&&(e.matched.find(c=>Pn(c,a))?s.push(a):n.push(a));const l=e.matched[o];l&&(t.matched.find(c=>Pn(c,l))||i.push(l))}return[n,s,i]}const Te=(e,t)=>{const n=e.__vccOpts||e;for(const[s,i]of t)n[s]=i;return n},ob={},ab={class:"navbar navbar-expand-lg navbar-dark"},lb=f_('<div class="container-fluid" data-v-97c46f66><a class="navbar-brand" href="/" data-v-97c46f66><div style="border:3px solid white;border-radius:5px;background-color:white;background-image:url(&#39;/webapp/logo.png&#39;);background-repeat:round;background-origin:content-box;width:30px;height:30px;" class="d-inline-block align-top" data-v-97c46f66></div> Insightic </a><button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" data-v-97c46f66><span class="navbar-toggler-icon" data-v-97c46f66></span></button><div class="collapse navbar-collapse" id="navbarNav" data-v-97c46f66><ul class="navbar-nav" data-v-97c46f66><li class="nav-item active" data-v-97c46f66><a class="nav-link" href="/webapp" data-v-97c46f66>Organizations</a></li><li class="nav-item" data-v-97c46f66><a class="nav-link" href="#" data-v-97c46f66>Contact Us</a></li></ul></div></div>',1),cb=[lb];function ub(e,t){return W(),z("nav",ab,cb)}const db=Te(ob,[["render",ub],["__scopeId","data-v-97c46f66"]]),fb=no({__name:"App",setup(e){return(t,n)=>(W(),z(ge,null,[ie(db),ie(Jt(cu))],64))}}),pb={props:{name:String,guid:String},methods:{onClick(){this.$router.push(`/organizations/${this.guid}`)}}};const uu=e=>(vs("data-v-e1e02cda"),e=e(),bs(),e),hb={class:"d-flex",style:{"justify-content":"space-around"}},mb=uu(()=>w("i",{class:"bi bi-boxes"},null,-1)),gb=uu(()=>w("i",{class:"bi bi-chevron-right"},null,-1));function _b(e,t,n,s,i,r){return W(),z("div",{class:"org-button mx-auto",onClick:t[0]||(t[0]=(...o)=>r.onClick&&r.onClick(...o))},[w("div",hb,[mb,w("div",null,ae(n.name),1),gb])])}const vb=Te(pb,[["render",_b],["__scopeId","data-v-e1e02cda"]]),bb=`// Biswap token with Governance.
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
`,Yi={guid:"e262d5c2-16f8-47a0-8c70-4019514d137a",logo:"/webapp/logos/biswap.jpeg",name:"BiSwap LP",url:"https://biswap.org",author:"John Doe",rating:"B-",description:"BiSwap LP is a liquidity pool for the BiSwap DEX",tags:["P2P Trading","Deposits"],status:"In Progress",dueAt:"2023-05-25T00:00:00.000Z",overviewView:[{title:"Business Model Analysis",props:[{component:"PropDisplayCard",title:"Business model & Value Proposition",text:"Biswap is a trusted DEX platform on the BNB Chain Network with a Multi-type Referral Program and low trade fee starting from 0.1%. Biswap is the ecosystem that offers the best service and creates new standards in DeFi.",tags:["P2P Trading","Deposits"],regulations:[{text:"https://www.1.com",href:"https://www.1.com"}]},{component:"PropDisplayCard",title:"Customer Segments",text:"Retail investors who need to swap tokens<br/>Institutiona funds who conduct AMM business<br/>VASPs who IDO"}]},{title:"Social Media Analysis",props:[{component:"PropDisplayCard",title:"Twitter Analysis",text:"Biswap is a trusted DEX platform on the BNB Chain Network with a Multi-type Referral Program and low trade fee starting from 0.1%. Biswap is the ecosystem that offers the best service and creates new standards in DeFi.",tags:["P2P Trading","Deposits"],regulations:[{text:"https://www.1.com",href:"https://www.1.com"}]},{component:"PropDisplayCard",title:"Blog Analysis",text:"Retail investors who need to swap tokens<br/>Institutiona funds who conduct AMM business<br/>VASPs who IDO"}]},{title:"On-Chain Data Analysis",props:[{component:"PropDisplayKeyValue",title:"Pools & Volume",values:[{key:"Number of Pools",value:"3,234,132"},{key:"7 Days Volume",value:"$76,261,658"},{key:"24 Hrs Volumne",value:"$5,291,480"},{key:"Changes",value:"-61.71%"}]},{component:"PropDisplayKeyValue",title:"Customer Persona",values:[{key:"Unique Address",value:"1,2888,378"},{key:"Bot Rate",value:"21%"},{key:"Retails / Total (volume)",value:"26%"},{key:"Retails / Total (Acct.)",value:"86%"}]}]},{title:"Team Background Analysis",props:[{component:"PropDisplayCard",title:"On-Chain Analysis",text:"Biswap is a trusted DEX platform on the BNB Chain Network with a Multi-type Referral Program and low trade fee starting from 0.1%. Biswap is the ecosystem that offers the best service and creates new standards in DeFi.",tags:["P2P Trading","Deposits"],regulations:[{text:"https://www.1.com",href:"https://www.1.com"}]},{component:"PropDisplayCard",title:"Twitter Analysis",text:"Retail investors who need to swap tokens<br/>Institutiona funds who conduct AMM business<br/>VASPs who IDO"},{component:"PropDisplayCard",title:"LinkedIn Analysis",text:"Retail investors who need to swap tokens<br/>Institutiona funds who conduct AMM business<br/>VASPs who IDO"}]}],assessmentView:{contracts:{"BSWToken.sol":bb,"BiswapERC20.sol":yb,"BiswapFactory.sol":wb,"BiswapPair.sol":Eb}},actionsView:{actions:[{title:"Require 1 or more security audit report",text:"Suggest the VASP to submit at least another security audit report within 45 days...",type:"danger"},{title:"Code has not been updates for long time",text:"Suggest the VASP to link Github account or submit a new code base.",type:"warn"},{title:"Risky wallets interaction",text:"The deployed contract has attracted many newly wallets. Require VASP to validate...",type:"primary"},{title:"Code has high similarity to Uniswap",text:"Suggest the VASP to further clarify the differences for not violating Business S...",type:"danger"},{title:"High botting rate",text:"Suggest to review the VASP's solution on bot detection and IP restriction.",type:"warn"},{title:"Core contract has been modified recently",text:"Dangerous to update the core smart contract code. The audit reports may not be s...",type:"primary"},{title:"Orderbook Spoofing",text:"There is a high chance that the order book design has no restriction on spoofing...",type:"danger"}],tasks:[{title:"Require 1 or more security audit report",text:"Suggest the VASP to submit at least another security audit report within 45 days...",type:"danger"},{title:"Code has not been updates for long time",text:"Suggest the VASP to link Github account or submit a new code base.",type:"warn"},{title:"Risky wallets interaction",text:"The deployed contract has attracted many newly wallets. Require VASP to validate...",type:"primary"}]}},kb=`// SPDX-License-Identifier: MIT  
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
}`,Xi={guid:"e262d5c2-16f8-47a0-8c70-4019514d137b",logo:"/webapp/logos/wolfgame.jpeg",name:"Wolf Game",url:"https://wolf.game",author:"John Doe",rating:"B-",description:"Wolf Game is a game where you play as a wolf",tags:["Game","NFT"],status:"In Progress",dueAt:"2023-05-25T00:00:00.000Z",overviewView:[{title:"Business Model Analysis",props:[{component:"PropDisplayCard",title:"Business model & Value Proposition",text:"Biswap is a trusted DEX platform on the BNB Chain Network with a Multi-type Referral Program and low trade fee starting from 0.1%. Biswap is the ecosystem that offers the best service and creates new standards in DeFi.",tags:["P2P Trading","Deposits"],regulations:[{text:"https://www.1.com",href:"https://www.1.com"}]},{component:"PropDisplayCard",title:"Customer Segments",text:"Retail investors who need to swap tokens<br/>Institutiona funds who conduct AMM business<br/>VASPs who IDO"}]},{title:"Social Media Analysis",props:[{component:"PropDisplayCard",title:"Twitter Analysis",text:"Biswap is a trusted DEX platform on the BNB Chain Network with a Multi-type Referral Program and low trade fee starting from 0.1%. Biswap is the ecosystem that offers the best service and creates new standards in DeFi.",tags:["P2P Trading","Deposits"],regulations:[{text:"https://www.1.com",href:"https://www.1.com"}]},{component:"PropDisplayCard",title:"Blog Analysis",text:"Retail investors who need to swap tokens<br/>Institutiona funds who conduct AMM business<br/>VASPs who IDO"}]},{title:"On-Chain Data Analysis",props:[{component:"PropDisplayKeyValue",title:"Pools & Volume",values:[{key:"Number of Pools",value:"3,234,132"},{key:"7 Days Volume",value:"$76,261,658"},{key:"24 Hrs Volumne",value:"$5,291,480"},{key:"Changes",value:"-61.71%"}]},{component:"PropDisplayKeyValue",title:"Customer Persona",values:[{key:"Unique Address",value:"1,2888,378"},{key:"Bot Rate",value:"21%"},{key:"Retails / Total (volume)",value:"26%"},{key:"Retails / Total (Acct.)",value:"86%"}]}]},{title:"Team Background Analysis",props:[{component:"PropDisplayCard",title:"On-Chain Analysis",text:"Biswap is a trusted DEX platform on the BNB Chain Network with a Multi-type Referral Program and low trade fee starting from 0.1%. Biswap is the ecosystem that offers the best service and creates new standards in DeFi.",tags:["P2P Trading","Deposits"],regulations:[{text:"https://www.1.com",href:"https://www.1.com"}]},{component:"PropDisplayCard",title:"Twitter Analysis",text:"Retail investors who need to swap tokens<br/>Institutiona funds who conduct AMM business<br/>VASPs who IDO"},{component:"PropDisplayCard",title:"LinkedIn Analysis",text:"Retail investors who need to swap tokens<br/>Institutiona funds who conduct AMM business<br/>VASPs who IDO"}]}],assessmentView:{contracts:{"Allegiance.sol":kb,"CaveGame.sol":Ab,"FarmerGem.sol":Tb,"IControllable1155.sol":Sb}},actionsView:{actions:[{title:"Require 1 or more security audit report",text:"Suggest the VASP to submit at least another security audit report within 45 days...",type:"danger"},{title:"Code has not been updates for long time",text:"Suggest the VASP to link Github account or submit a new code base.",type:"warn"},{title:"Risky wallets interaction",text:"The deployed contract has attracted many newly wallets. Require VASP to validate...",type:"primary"},{title:"Code has high similarity to Uniswap",text:"Suggest the VASP to further clarify the differences for not violating Business S...",type:"danger"},{title:"High botting rate",text:"Suggest to review the VASP's solution on bot detection and IP restriction.",type:"warn"},{title:"Core contract has been modified recently",text:"Dangerous to update the core smart contract code. The audit reports may not be s...",type:"primary"},{title:"Orderbook Spoofing",text:"There is a high chance that the order book design has no restriction on spoofing...",type:"danger"}],tasks:[{title:"Require 1 or more security audit report",text:"Suggest the VASP to submit at least another security audit report within 45 days...",type:"danger"},{title:"Code has not been updates for long time",text:"Suggest the VASP to link Github account or submit a new code base.",type:"warn"},{title:"Risky wallets interaction",text:"The deployed contract has attracted many newly wallets. Require VASP to validate...",type:"primary"}]}},Qi={guid:"e262d5c2-16f8-47a0-8c70-4019514d137c",logo:"/webapp/logos/pooltogether.jpeg",name:"Pool Together",url:"https://pooltogether.com",author:"John Doe",rating:"B-",description:"Pool Together is a lottery game",tags:["Pool","NFT"],status:"In Progress",dueAt:"2023-05-25T00:00:00.000Z",overviewView:[{title:"Business Model Analysis",props:[{component:"PropDisplayCard",title:"Business model & Value Proposition",text:"Biswap is a trusted DEX platform on the BNB Chain Network with a Multi-type Referral Program and low trade fee starting from 0.1%. Biswap is the ecosystem that offers the best service and creates new standards in DeFi.",tags:["P2P Trading","Deposits"],regulations:[{text:"https://www.1.com",href:"https://www.1.com"}]},{component:"PropDisplayCard",title:"Customer Segments",text:"Retail investors who need to swap tokens<br/>Institutiona funds who conduct AMM business<br/>VASPs who IDO"}]},{title:"Social Media Analysis",props:[{component:"PropDisplayCard",title:"Twitter Analysis",text:"Biswap is a trusted DEX platform on the BNB Chain Network with a Multi-type Referral Program and low trade fee starting from 0.1%. Biswap is the ecosystem that offers the best service and creates new standards in DeFi.",tags:["P2P Trading","Deposits"],regulations:[{text:"https://www.1.com",href:"https://www.1.com"}]},{component:"PropDisplayCard",title:"Blog Analysis",text:"Retail investors who need to swap tokens<br/>Institutiona funds who conduct AMM business<br/>VASPs who IDO"}]},{title:"On-Chain Data Analysis",props:[{component:"PropDisplayKeyValue",title:"Pools & Volume",values:[{key:"Number of Pools",value:"3,234,132"},{key:"7 Days Volume",value:"$76,261,658"},{key:"24 Hrs Volumne",value:"$5,291,480"},{key:"Changes",value:"-61.71%"}]},{component:"PropDisplayKeyValue",title:"Customer Persona",values:[{key:"Unique Address",value:"1,2888,378"},{key:"Bot Rate",value:"21%"},{key:"Retails / Total (volume)",value:"26%"},{key:"Retails / Total (Acct.)",value:"86%"}]}]},{title:"Team Background Analysis",props:[{component:"PropDisplayCard",title:"On-Chain Analysis",text:"Biswap is a trusted DEX platform on the BNB Chain Network with a Multi-type Referral Program and low trade fee starting from 0.1%. Biswap is the ecosystem that offers the best service and creates new standards in DeFi.",tags:["P2P Trading","Deposits"],regulations:[{text:"https://www.1.com",href:"https://www.1.com"}]},{component:"PropDisplayCard",title:"Twitter Analysis",text:"Retail investors who need to swap tokens<br/>Institutiona funds who conduct AMM business<br/>VASPs who IDO"},{component:"PropDisplayCard",title:"LinkedIn Analysis",text:"Retail investors who need to swap tokens<br/>Institutiona funds who conduct AMM business<br/>VASPs who IDO"}]}],actionsView:{actions:[{title:"Require 1 or more security audit report",text:"Suggest the VASP to submit at least another security audit report within 45 days...",type:"danger"},{title:"Code has not been updates for long time",text:"Suggest the VASP to link Github account or submit a new code base.",type:"warn"},{title:"Risky wallets interaction",text:"The deployed contract has attracted many newly wallets. Require VASP to validate...",type:"primary"},{title:"Code has high similarity to Uniswap",text:"Suggest the VASP to further clarify the differences for not violating Business S...",type:"danger"},{title:"High botting rate",text:"Suggest to review the VASP's solution on bot detection and IP restriction.",type:"warn"},{title:"Core contract has been modified recently",text:"Dangerous to update the core smart contract code. The audit reports may not be s...",type:"primary"},{title:"Orderbook Spoofing",text:"There is a high chance that the order book design has no restriction on spoofing...",type:"danger"}],tasks:[{title:"Require 1 or more security audit report",text:"Suggest the VASP to submit at least another security audit report within 45 days...",type:"danger"},{title:"Code has not been updates for long time",text:"Suggest the VASP to link Github account or submit a new code base.",type:"warn"},{title:"Risky wallets interaction",text:"The deployed contract has attracted many newly wallets. Require VASP to validate...",type:"primary"}]}},Zi={guid:"e262d5c2-16f8-47a0-8c70-4019514d137d",logo:"/webapp/logos/olympus.jpeg",name:"Olympus",url:"https://olympusdao.finance",author:"John Doe",rating:"B-",description:"Olympus is a stablecoin",tags:["Stablecoin","NFT"],status:"In Progress",dueAt:"2023-05-25T00:00:00.000Z",overviewView:[{title:"Business Model Analysis",props:[{component:"PropDisplayCard",title:"Business model & Value Proposition",text:"Biswap is a trusted DEX platform on the BNB Chain Network with a Multi-type Referral Program and low trade fee starting from 0.1%. Biswap is the ecosystem that offers the best service and creates new standards in DeFi.",tags:["P2P Trading","Deposits"],regulations:[{text:"https://www.1.com",href:"https://www.1.com"}]},{component:"PropDisplayCard",title:"Customer Segments",text:"Retail investors who need to swap tokens<br/>Institutiona funds who conduct AMM business<br/>VASPs who IDO"}]},{title:"Social Media Analysis",props:[{component:"PropDisplayCard",title:"Twitter Analysis",text:"Biswap is a trusted DEX platform on the BNB Chain Network with a Multi-type Referral Program and low trade fee starting from 0.1%. Biswap is the ecosystem that offers the best service and creates new standards in DeFi.",tags:["P2P Trading","Deposits"],regulations:[{text:"https://www.1.com",href:"https://www.1.com"}]},{component:"PropDisplayCard",title:"Blog Analysis",text:"Retail investors who need to swap tokens<br/>Institutiona funds who conduct AMM business<br/>VASPs who IDO"}]},{title:"On-Chain Data Analysis",props:[{component:"PropDisplayKeyValue",title:"Pools & Volume",values:[{key:"Number of Pools",value:"3,234,132"},{key:"7 Days Volume",value:"$76,261,658"},{key:"24 Hrs Volumne",value:"$5,291,480"},{key:"Changes",value:"-61.71%"}]},{component:"PropDisplayKeyValue",title:"Customer Persona",values:[{key:"Unique Address",value:"1,2888,378"},{key:"Bot Rate",value:"21%"},{key:"Retails / Total (volume)",value:"26%"},{key:"Retails / Total (Acct.)",value:"86%"}]}]},{title:"Team Background Analysis",props:[{component:"PropDisplayCard",title:"On-Chain Analysis",text:"Biswap is a trusted DEX platform on the BNB Chain Network with a Multi-type Referral Program and low trade fee starting from 0.1%. Biswap is the ecosystem that offers the best service and creates new standards in DeFi.",tags:["P2P Trading","Deposits"],regulations:[{text:"https://www.1.com",href:"https://www.1.com"}]},{component:"PropDisplayCard",title:"Twitter Analysis",text:"Retail investors who need to swap tokens<br/>Institutiona funds who conduct AMM business<br/>VASPs who IDO"},{component:"PropDisplayCard",title:"LinkedIn Analysis",text:"Retail investors who need to swap tokens<br/>Institutiona funds who conduct AMM business<br/>VASPs who IDO"}]}],actionsView:{actions:[{title:"Require 1 or more security audit report",text:"Suggest the VASP to submit at least another security audit report within 45 days...",type:"danger"},{title:"Code has not been updates for long time",text:"Suggest the VASP to link Github account or submit a new code base.",type:"warn"},{title:"Risky wallets interaction",text:"The deployed contract has attracted many newly wallets. Require VASP to validate...",type:"primary"},{title:"Code has high similarity to Uniswap",text:"Suggest the VASP to further clarify the differences for not violating Business S...",type:"danger"},{title:"High botting rate",text:"Suggest to review the VASP's solution on bot detection and IP restriction.",type:"warn"},{title:"Core contract has been modified recently",text:"Dangerous to update the core smart contract code. The audit reports may not be s...",type:"primary"},{title:"Orderbook Spoofing",text:"There is a high chance that the order book design has no restriction on spoofing...",type:"danger"}],tasks:[{title:"Require 1 or more security audit report",text:"Suggest the VASP to submit at least another security audit report within 45 days...",type:"danger"},{title:"Code has not been updates for long time",text:"Suggest the VASP to link Github account or submit a new code base.",type:"warn"},{title:"Risky wallets interaction",text:"The deployed contract has attracted many newly wallets. Require VASP to validate...",type:"primary"}]}},Ji={guid:"e262d5c2-16f8-47a0-8c70-4019514d137e",logo:"/webapp/logos/eulerfinance.png",name:"Euler Finance",url:"https://euler.finance",author:"John Doe",rating:"B-",description:"Euler Finance is a DeFi protocol",tags:["DeFi","NFT"],status:"In Progress",dueAt:"2023-05-25T00:00:00.000Z",overviewView:[{title:"Business Model Analysis",props:[{component:"PropDisplayCard",title:"Business model & Value Proposition",text:"Euler's business model revolves around providing decentralized lending and borrowing services on the Ethereum blockchain. It generates revenue through interest accrued on loans, with a portion held in reserves for bad debts. The model relies on the Euler Governance Token (EUL) for protocol management, enabling a decentralized approach. Euler offers a unique value proposition by enabling permissionless listings, asset tiering for risk management, tokenized debts, protected collateral, feeless flash loans, and risk-adjusted borrowing capacity. By leveraging decentralized price oracles, Euler ensures a secure and transparent experience for users, promoting capital efficiency and a user-centric approach.",tags:["Loan","P2P Trading","Collateral Control","Deposits","Risk Management","DAO","Flashloan","Price Oracle"],regulations:[{text:"ref1",href:"https://en.adgm.thomsonreuters.com/rulebook/guidance-regulation-digital-securities-activities-adgm-24-february-2020"},{text:"ref2",href:"https://www.mas.gov.sg/regulation/explainers/a-guide-to-digital-token-offerings"}]},{component:"PropDisplayCard",title:"Customer Segments",text:"Individuals and institutions cryptocurrency adopters: both lender and borrowers for various purposes, such as earning interest, leveraging trading positions, liquidity provision, or covering short-term expenses.<br/>Developers: Those looking to build applications, products, or services on top of Euler's protocol, leveraging its features such as tokenized debts and feeless flash loans. <br/><a href='https://chain.link/education-hub/flash-loans'>Flash loans</a> applier<br/>Governance participants: token holders who want to contribute to the platform's development and decision-making process by participating in governance proposals and voting."}]},{title:"DAO Governance Analysis",props:[{component:"PropDisplayKeyValue",title:"Governance Monitoring",values:[{key:"Number of Proposals",value:"83"},{key:"Smart Contract Changes",value:"6 times"},{key:"Grant Changes",value:"12 times"},{key:"Skewness of voting power",value:"high"}]},{component:"PropDisplayTable",title:"Important Events",headers:["Event","Status","Date"],rows:[["Contract Upgrades (eIP 14)","SUCCEEDED","Aug 12, 2022"],["Move All Asset Price Oracles to Chainlink","SUCCEEDED","Sep 5, 2022"],["Update the Interest Rate Model","SUCCEEDED","Feb 19, 2023"]]}]},{title:"On-Chain Data Analysis",props:[{component:"PropDisplayKeyValue",title:"Pools & Volume",values:[{key:"Number of Pools",value:"1555"},{key:"TVL",value:"$113,934"},{key:"Changes",value:"-11.42%"}]},{component:"PropDisplayKeyValue",title:"Customer Persona",values:[{key:"Unique Address",value:"288,378"},{key:"Bot Rate",value:"31%"},{key:"Retails / Total (volume)",value:"16%"},{key:"Retails / Total (Acct.)",value:"86%"}]}]},{title:"Team Background Analysis",props:[{component:"PropDisplayCard",title:"On-Chain Analysis",text:"Biswap is a trusted DEX platform on the BNB Chain Network with a Multi-type Referral Program and low trade fee starting from 0.1%. Biswap is the ecosystem that offers the best service and creates new standards in DeFi.",tags:["P2P Trading","Deposits"],regulations:[{text:"https://www.1.com",href:"https://www.1.com"}]},{component:"PropDisplayCard",title:"Twitter Analysis",text:"Retail investors who need to swap tokens<br/>Institutiona funds who conduct AMM business<br/>VASPs who IDO"},{component:"PropDisplayCard",title:"LinkedIn Analysis",text:"Retail investors who need to swap tokens<br/>Institutiona funds who conduct AMM business<br/>VASPs who IDO"}]}],actionsView:{actions:[{title:"Require 1 or more security audit report",text:"Suggest the VASP to submit at least another security audit report within 45 days...",type:"danger"},{title:"Code has not been updates for long time",text:"Suggest the VASP to link Github account or submit a new code base.",type:"warn"},{title:"Risky wallets interaction",text:"The deployed contract has attracted many newly wallets. Require VASP to validate...",type:"primary"},{title:"Code has high similarity to Uniswap",text:"Suggest the VASP to further clarify the differences for not violating Business S...",type:"danger"},{title:"High botting rate",text:"Suggest to review the VASP's solution on bot detection and IP restriction.",type:"warn"},{title:"Core contract has been modified recently",text:"Dangerous to update the core smart contract code. The audit reports may not be s...",type:"primary"},{title:"Orderbook Spoofing",text:"There is a high chance that the order book design has no restriction on spoofing...",type:"danger"}],tasks:[{title:"Require 1 or more security audit report",text:"Suggest the VASP to submit at least another security audit report within 45 days...",type:"danger"},{title:"Code has not been updates for long time",text:"Suggest the VASP to link Github account or submit a new code base.",type:"warn"},{title:"Risky wallets interaction",text:"The deployed contract has attracted many newly wallets. Require VASP to validate...",type:"primary"}]}},Cb=`// File: neopin/NeopinToken.sol


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



`,xb=`// SPDX-License-Identifier: Apache-2.0

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
`,Pb=`// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

import "./MultichainToken.sol";

contract MultichainNPT is MultichainToken {
    constructor() MultichainToken('NEOPIN Token', 'NPT', 1000000000e18) {
    }
}
`,er={guid:"e262d5c2-16f8-47a0-8d10-4019514d137a",logo:"/webapp/logos/neopin.png",name:"Neopin",url:"https://biswap.org",author:"John Doe",rating:"B",description:"Neopin is a liquidity pool for the BiSwap DEX",tags:["P2P Trading","Deposits"],status:"In Progress",dueAt:"2023-05-25T00:00:00.000Z",overviewView:[{title:"Business Model Analysis",props:[{component:"PropDisplayCard",title:"Business model & Value Proposition",text:"NEOPIN is a hybrid financial platform blending centralized finance (CeFi) and decentralized finance (DeFi) to connect traditional finance and Web3 markets. By leveraging the stability, security, and regulatory compliance of CeFi and the transparency and accessibility of DeFi, NEOPIN aims to resolve trust and security issues present in both financial sectors. The platform uses its native NEOPIN token (NPT) and allows users to participate in liquidity pools, earning rewards for their contributions through features like staking, swap, and yield farming. NEOPIN is also exploring additional products, including Play-to-Earn games, Stake-to-Earn, Mine-to-Earn, and NFT services, while prioritizing security and regulatory compliance with systems like KYC and AML.",tags:["DeFi","Wallet","Staking","Multi-chain"],regulations:[{text:"ref1",href:"https://en.adgm.thomsonreuters.com/rulebook/guidance-regulation-digital-securities-activities-adgm-24-february-2020"},{text:"ref2",href:"https://www.mas.gov.sg/regulation/explainers/a-guide-to-digital-token-offerings"}]},{component:"PropDisplayCard",title:"Innovation Analysis",text:"Neopin's approach, focusing predominantly on standard token staking, appears to lack the innovative edge often seen in leading blockchain projects. This could limit their competitiveness in a rapidly evolving industry where novelty often drives user adoption and market value."},{component:"PropDisplayCard",title:"Customer Segments",text:"<ol><li>New crypto adopters, retail investors: Individuals who have an interest in cryptocurrencies and digital assets. These people are tech-savvy and open to new financial innovations.</li><li>Compliance-focused entities: Companies, institutions, or individuals that prioritize regulatory compliance in their crypto-related dealings, given NEOPIN's emphasis on KYC and AML procedures.</li><li>DeFi Users: Users already participating in decentralized finance who are seeking new platforms or methods to optimize their earnings.</li><li>Crypto Traders: Both short-term and long-term traders who are seeking a platform offering advanced trading functionalities and high liquidity.</li><li>Game developers and companies: developers and companies can launch Play-to-Earn games</li></ol>"}]},{title:"Security",props:[{component:"PropDisplayCard",title:"Smart Contract",text:"NPT is re-designed to be a multi-chain token that poses potential risks due to the increased complexity of the blockchain architecture. With multiple chains, the risk of smart contract vulnerabilities and bugs increase, which could lead to the loss of tokens or other potential security issues.<br/><br/>NPT deploying all tokens to a single address during contract deployment poses a risk of centralization. This method puts an enormous amount of trust in the contract deployer, who has the power to distribute tokens at their discretion. This central point of control may be prone to misuse or compromise, threatening the integrity and security of the entire system."},{component:"PropDisplayCard",title:"Code Integrity",text:`The deployed NPT smart contract code differs from the audited code.<br/>
                    <a href='https://scope.klaytn.com/account/0xe06597d02a2c3aa7a9708de2cfa587b128bd3815?tabId=contractCode'>Deployed code on Klaytn</a><br/>
                    <a href='https://etherscan.io/token/0x306ee01a6bA3b4a8e993fA2C1ADC7ea24462000c#code'>Deployed code on Ethereum</a><br/>
                    <a href='https://polygonscan.com/address/0x306ee01a6ba3b4a8e993fa2c1adc7ea24462000c#code'>Deployed code on Polygon</a><br/>
                    <a href='https://github.com/Neopin/neopin-audits/blob/master/Audit_Report_20220627_NPT_Staking_And_DEX_Swap_SlowMist.pdf'>Audited Code in Audit Report</a><br/>
                    <br/>
                    Multichain token smart contract is not audited.`},{component:"PropDisplayTable",title:"Audit Report",headers:["Report","Date","By","Coverage"],rows:[["1","Aug 2021","CertiK","Token"],["2","March 2022","SlowMist","Token + Lockup"]]},{component:"PropDisplayCard",title:"",text:`Neopin's audit reports are outdated and infrequent.
                    <br/>
                    The audit reports conducted lack professional depth, potentially resulting in overlooked threats and weaknesses.<br/>
                    <a href='https://github.com/Neopin/neopin-audits/tree/master'>Audit Reports</a>`},{component:"PropDisplayCard",title:"Code Library",text:"NPT token is using an old version of OpenZeppelin library v3.0.0 (<a href='https://github.com/OpenZeppelin/openzeppelin-contracts/releases/tag/v3.0.0'>Released</a> on Apr 2020). The library is out-of-date."}]},{title:"On-Chain Data Analysis",props:[{component:"PropDisplayTable",title:"NPT Activities",headers:["Blockchain","# TXs","Total Tokens","Risks"],rows:[["Ethereum","459","166,459","Arbitrage risks"],["Polygon","3,119","211,297","Low diversity"],["Klaytn","169,773","1,000,000,000","Operation risks"]]},{component:"PropDisplayKeyValue",title:"Transactions Categorization",values:[{key:"Bridgeing ",value:"60%"},{key:"Providing LP",value:"30%"},{key:"Staking",value:"5%"},{key:"Others",value:"5%"}]}]},{title:"Tokenomic",props:[{component:"PropDisplayCard",title:"Summary",text:"Neopin's tokenomic design, largely based on self-generated tokens and lacking a clear economic utility, raises key uncertainties about the system's stability. Its unclear strategies to address potential token depreciation may affect trust in the long term. Additionally, the prevalent use of its native token, NPT, as a reward mechanism could lead to inflation and devaluation if the token supply significantly exceeds demand."},{component:"PropDisplayCard",title:"Risks Analysis",text:"The NPT token's undefined role poses risks to Neopin's stability and long-term value. Predictive models indicate potential threats without a strong consumption model.<br/><br/>While Neopin proposes strategies to stabilize token value, the lack of a detailed plan raises doubts about their long-term viability."}]},{title:"Social Media Analysis",props:[{component:"PropDisplayKeyValue",title:"Social Media",values:[{key:"Discord ",value:"To be crawled"},{key:"Twitter",value:"31,634 - ↑300% in 20 days"},{key:"Instagram",value:"To be crawled"}]}]}],assessmentView:{contracts:{"NeopinToken.sol":Cb,"MultichainToken.sol":xb,"MultichainNPT.sol":Pb}}},fo=nv("organizations",()=>{const e=vi([{guid:"e262d5c2-16f8-47a0-8c70-4019514b137c",name:"Team 1",projects:[Yi,Xi,Qi,Zi,Ji,er]},{guid:"e262d5c2-16f8-47a0-8c70-4019514b137d",name:"Team 2",projects:[Yi,Xi,Qi,Zi,Ji,er]},{guid:"e262d5c2-16f8-47a0-8c70-4019514b137e",name:"Team 3",projects:[Yi,Xi,Qi,Zi,Ji,er]}]),t=s=>{if(s)return e.value.find(i=>i.guid===s)};return{organizations:e,findOrganization:t,findProject:(s,i)=>{if(!s||!i)return;const r=t(s);if(r)return r.projects.find(o=>o.guid===i)}}}),Ob={components:{OrgButton:vb},computed:{...lo(fo)}};const Ib=e=>(vs("data-v-ae50a370"),e=e(),bs(),e),Nb={class:"org-card mx-auto"},Rb=Ib(()=>w("h1",null,"Organizations",-1)),Db={class:"org-buttons mx-auto"};function $b(e,t,n,s,i,r){const o=De("OrgButton");return W(),z("div",Nb,[Rb,w("div",Db,[(W(!0),z(ge,null,Me(e.organizationsStore.organizations,a=>(W(),Ht(o,{key:a.guid,name:a.name,guid:a.guid},null,8,["name","guid"]))),128))])])}const Lb=Te(Ob,[["render",$b],["__scopeId","data-v-ae50a370"]]),Mb={props:{guid:String,name:String,logo:String,highlighted:Boolean}};const Bb={class:"d-flex p-2 project-sidebar-item"},Fb={style:{"margin-right":"20px"}},Vb=["src"];function Wb(e,t,n,s,i,r){return W(),z("div",Bb,[w("div",Fb,[w("img",{src:n.logo,class:"logo"},null,8,Vb)]),w("div",{class:Ln(["text",{highlighted:n.highlighted}])},ae(n.name),3)])}const Hb=Te(Mb,[["render",Wb],["__scopeId","data-v-21360751"]]),jb={props:{tag:String}};const Ub={class:"m-1 tag"};function qb(e,t,n,s,i,r){return W(),z("div",Ub,ae(n.tag),1)}const du=Te(jb,[["render",qb],["__scopeId","data-v-9d0697f3"]]),zb={props:["prop"],components:{Tag:du}},Kb={class:"mb-4"},Gb=["innerHTML"],Yb={key:0,class:"my-2"},Xb=w("b",null,"Tags:",-1),Qb={class:"d-flex flex-wrap"},Zb={key:1,class:"my-2"},Jb=w("b",null,"Related Regulations:",-1),ey={class:"d-flex"},ty=["href"];function ny(e,t,n,s,i,r){var a,l,c,u,d;const o=De("Tag");return W(),z("div",Kb,[w("h5",null,ae((a=n.prop)==null?void 0:a.title),1),w("p",{innerHTML:n.prop.text},null,8,Gb),(l=n.prop)!=null&&l.tags?(W(),z("div",Yb,[Xb,w("div",Qb,[(W(!0),z(ge,null,Me((c=n.prop)==null?void 0:c.tags,(p,g)=>(W(),Ht(o,{key:g,tag:p},null,8,["tag"]))),128))])])):dt("",!0),(u=n.prop)!=null&&u.regulations?(W(),z("div",Zb,[Jb,w("div",ey,[(W(!0),z(ge,null,Me((d=n.prop)==null?void 0:d.regulations,(p,g)=>(W(),z("div",{key:g,class:"mx-2"},[Et(" [ "),w("a",{href:p==null?void 0:p.href,target:"_blank"},ae(p==null?void 0:p.text),9,ty),Et(" ] ")]))),128))])])):dt("",!0)])}const sy=Te(zb,[["render",ny]]),iy={props:["prop"]},ry={class:"mb-4"},oy={class:"mb-3"},ay={class:"table table-bordered"},ly={scope:"row",style:{width:"30%"}};function cy(e,t,n,s,i,r){var o,a;return W(),z("div",ry,[w("h5",oy,ae((o=n.prop)==null?void 0:o.title),1),w("table",ay,[w("tbody",null,[(W(!0),z(ge,null,Me((a=n.prop)==null?void 0:a.values,(l,c)=>(W(),z("tr",{key:c},[w("th",ly,ae(l==null?void 0:l.key),1),w("td",null,ae(l==null?void 0:l.value),1)]))),128))])])])}const uy=Te(iy,[["render",cy]]),dy={props:["prop"]},fy={class:"mb-4"},py={class:"mb-3"},hy={class:"table table-bordered"};function my(e,t,n,s,i,r){var o,a,l;return W(),z("div",fy,[w("h5",py,ae((o=n.prop)==null?void 0:o.title),1),w("table",hy,[w("thead",null,[w("tr",null,[(W(!0),z(ge,null,Me((a=n.prop)==null?void 0:a.headers,(c,u)=>(W(),z("th",{key:u},ae(c),1))),128))])]),w("tbody",null,[(W(!0),z(ge,null,Me((l=n.prop)==null?void 0:l.rows,(c,u)=>(W(),z("tr",{key:u},[(W(!0),z(ge,null,Me(c,(d,p)=>(W(),z("td",{key:p},ae(d),1))),128))]))),128))])])])}const gy=Te(dy,[["render",my]]),_y={props:["title","props"],components:{PropDisplayCard:sy,PropDisplayKeyValue:uy,PropDisplayTable:gy}};const vy={class:"card"},by={class:"card-header title"},yy={class:"card-body"};function wy(e,t,n,s,i,r){return W(),z("div",vy,[w("div",by,ae(n.title),1),w("div",yy,[(W(!0),z(ge,null,Me(n.props,(o,a)=>(W(),Ht(jg(o==null?void 0:o.component),{key:a,prop:o},null,8,["prop"]))),128))])])}const Ey=Te(_y,[["render",wy],["__scopeId","data-v-fb106ec3"]]),ky={props:["project"],components:{PropDisplayGroup:Ey},computed:{data(){var e;return((e=this.project)==null?void 0:e.overviewView)||[]}}},Ay={class:"row"};function Ty(e,t,n,s,i,r){const o=De("PropDisplayGroup");return W(),z("div",Ay,[(W(!0),z(ge,null,Me(r.data,(a,l)=>(W(),z("div",{class:"col-md-6 p-2",key:l},[ie(o,{title:a.title,props:a.props},null,8,["title","props"])]))),128))])}const Sy=Te(ky,[["render",Ty]]),Cy={props:{text:String,footer:String,desciptionTitle:String,desciptionText:String},data(){return{active:!1}}};const fu=e=>(vs("data-v-75b3c624"),e=e(),bs(),e),xy={class:"px-2 text d-flex flex-column",style:{"text-align":"center"}},Py={style:{color:"rgb(135, 136, 141)","font-size":"0.6rem"}},Oy={key:0},Iy={key:1,class:"px-2 text d-flex flex-column",style:{"text-align":"left"}},Ny={class:"d-flex"},Ry=fu(()=>w("i",{class:"bi bi-file-earmark",style:{"margin-right":"5px"}},null,-1)),Dy={class:"d-flex"},$y=fu(()=>w("i",{class:"bi bi-code-slash",style:{"margin-right":"5px"}},null,-1)),Ly={style:{color:"rgb(135, 136, 141)","font-size":"0.6rem"}};function My(e,t,n,s,i,r){return W(),z("div",{class:"w-100 status-card my-2 py-3",onClick:t[0]||(t[0]=o=>i.active=!i.active)},[w("div",xy,[w("div",null,ae(n.text),1),w("div",Py,ae(n.footer),1)]),i.active?(W(),z("hr",Oy)):dt("",!0),i.active?(W(),z("div",Iy,[w("div",Ny,[Ry,w("div",null,ae(n.desciptionTitle),1)]),w("div",Dy,[$y,w("div",Ly,ae(n.desciptionText),1)])])):dt("",!0)])}const By=Te(Cy,[["render",My],["__scopeId","data-v-75b3c624"]]),Fy={props:["title","statuses","backgroundColor"],components:{StatusCard:By},data(){return{active:!1}}};const Vy={key:0,class:"bi bi-arrow-bar-down",style:{"margin-left":"10px"}},Wy={key:1,class:"bi bi-arrow-bar-up",style:{"margin-left":"10px"}},Hy={key:0};function jy(e,t,n,s,i,r){const o=De("StatusCard");return W(),z("div",{class:"status-card-group p-2 w-100 mb-2",style:hi({backgroundColor:n.backgroundColor})},[w("div",{class:"w-100",style:{"text-align":"right",cursor:"pointer"},onClick:t[0]||(t[0]=a=>i.active=!i.active)},[Et(ae(n.title)+" ",1),i.active?dt("",!0):(W(),z("i",Vy)),i.active?(W(),z("i",Wy)):dt("",!0)]),i.active?(W(),z("div",Hy,[(W(!0),z(ge,null,Me(n.statuses,(a,l)=>(W(),Ht(o,{key:l,text:a.text,footer:a.footer,"desciption-title":a.desciptionTitle,"desciption-text":a.desciptionText},null,8,["text","footer","desciption-title","desciption-text"]))),128))])):dt("",!0)],4)}const Uy=Te(Fy,[["render",jy],["__scopeId","data-v-4e6fa15a"]]),qy={props:{label:String,text:String,footer:String}};const zy={class:"card"},Ky={class:"label"},Gy={class:"text"},Yy={style:{position:"absolute",top:"50%",transform:"translate(0, -40%)"}},Xy={class:"label",style:{position:"absolute",bottom:"0",left:"0",right:"0",padding:"5px","text-align":"center"}};function Qy(e,t,n,s,i,r){return W(),z("div",zy,[w("div",Ky,ae(n.label),1),w("div",Gy,[w("div",Yy,ae(n.text),1)]),w("div",Xy,ae(n.footer),1)])}const Zy=Te(qy,[["render",Qy],["__scopeId","data-v-52bed330"]]),Jy={props:["code"],created(){this.$nextTick(()=>{Jo.highlightAll()})},watch:{code(){this.$nextTick(()=>{Jo.highlightAll()})}}};const ew={class:"code-block"},tw={class:"line-numbers language-solidity"};function nw(e,t,n,s,i,r){return W(),z("pre",ew,[Et("    "),w("code",tw,`
    `+ae(n.code)+`
  `,1),Et(`
  `)])}const sw=Te(Jy,[["render",nw],["__scopeId","data-v-0f22bba8"]]),iw={props:["project"],components:{StatusCardGroup:Uy,TextCard:Zy,CodeView:sw},data(){return{contract:"",statuses:[{text:"✅ [dex011]",footer:"Tokens symbol is BSW",desciptionTitle:"Ticker Symbol: BSW",desciptionText:"contract BSWToken is BEP20('Biswap', 'BSW')"},{text:"✅ [dex012]",footer:"BEP-20 standard",desciptionTitle:"Chain: BNB Chain (BEP-20)",desciptionText:"Contract BSWToken is BEP20('Biswap', 'BSW')"},{text:"✅ [dex013]",footer:"700000000",desciptionTitle:"Max Supply: 700 000 000 BSW tokens",desciptionText:"The total token supply is 700,000,000"},{text:"❌ [dex014]",footer:"Is ERC20 Token Standard Implemented?",desciptionTitle:"No, BEP-20 token standard is implemented which is specific to the Binance Smart Chain (BSC) ecosystem",desciptionText:"Yes, ERC20 token standards is implemented, inherits from the BiswapERC20 contract with ERC20 interface."},{text:"✅ [dex015]",footer:"How many types of Swap Fee Tiers are mentioned in code?",desciptionTitle:"N.A.",desciptionText:"There is only one swapFee tier, which can be set by calling the `setSwapFee` function. The default value of the swapFee is 1."},{text:"✅ [dex016]",footer:"What is the swap fee for a single token swap?",desciptionTitle:"The swap fee charged when someone makes a token swap on Biswap is 0.2% or 0.1%, depending on the trading pair. For most trading pairs, the fee is 0.2%, and for some specific pairs such as BUSD-USDT, USDC-USDT, and DAI-USDT, the fee is 0.1%.",desciptionText:"The default swap fee is 1 basis point (0.01%)."},{text:"✅ [dex017]",footer:"How much of the swap fee will be taken by developers by _mintFee()?",desciptionTitle:"Unspecfied in whitepaper, but this function mints new BSW tokens from the swap fee, which are distributed to stakeholders, including developers.",desciptionText:"The amount of the fee is calculated based on the change in the product of the reserves, and is proportional to the square root of the product of the reserves. The proportion of the fee that is taken by the developers is set by the `devFee` variable, which is also initialized to 1 in the contract."},{text:"✅ [dex018]",footer:"Is the code Applicable to AMM?",desciptionTitle:"The code presented in the excerpt is applicable to AMM (Automated Market Maker) protocol, which is used by the Biswap Exchange.",desciptionText:"Yes, this code is applicable to Automated Market Maker (AMM) as it implements the core functionality of a DEX, including liquidity provision, token swaps, and fee collection."},{text:"✅ [dex019]",footer:"Is trading pairs other than those with WBNB allowed?",desciptionTitle:"No clear answer but it does mention that users can swap eligible trading pairs and stake BSW to activate them in the Multi-Reward Pool to earn rewards in different tokens such as BSW, BNB, and BUSD.",desciptionText:"The provided code does not explicitly mention WBNB. However, the Biswap DEX supports trading pairs between any two ERC20 tokens, not just WBNB."},{text:"✅ [dex0110]",footer:"Is the smart contracts capable to prevent frontrunning attacks?",desciptionTitle:"N.A.",desciptionText:'The Biswap smart contract does not have a built-in functionality to prevent frontrunning attacks. However, Biswap uses a mechanism called "time-weighted average price" (TWAP) to mitigate the impact of such attacks. This mechanism calculates the average price of a token over a certain period of time, making it more difficult for attackers to profit from short-term price movements.'},{text:"✅ [dex0111]",footer:"Is on-chain or off-chain price feeds used for the token prices?",desciptionTitle:"N.A.",desciptionText:"The Biswap smart contract does not use on-chain or off-chain price feeds for its token prices. Instead, it calculates the token prices based on the reserves of the tokens in the liquidity pool."},{text:"✅ [dex0112]",footer:"Does the smart contract implement a decentralized governance mechanism?",desciptionTitle:"No clear answer but it does mention that users can swap eligible trading pairs and stake BSW to activate them in the Multi-Reward Pool to earn rewards in different tokens such as BSW, BNB, and BUSD.",desciptionText:"No, the Biswap smart contract does not implement a decentralized governance mechanism."},{text:"✅ [dex0113]",footer:"Is there a restriction on the maximum transaction amount or frequency for a given address?",desciptionTitle:"No clear answer but it does mention that users can swap eligible trading pairs and stake BSW to activate them in the Multi-Reward Pool to earn rewards in different tokens such as BSW, BNB, and BUSD.",desciptionText:"The Biswap smart contract does not impose any restrictions on the maximum transaction amount or frequency for a given address."}]}},created(){this.contract=this.contracts[0]||""},computed:{contracts(){var t,n;let e=((n=(t=this.project)==null?void 0:t.assessmentView)==null?void 0:n.contracts)||{};return Object.keys(e)},code(){var t,n;return(((n=(t=this.project)==null?void 0:t.assessmentView)==null?void 0:n.contracts)||{})[this.contract]||""}},methods:{onContractChange(e){console.log("onContractChange",e)}}},rw={class:"container-fluid row mb-2",style:{height:"720px"}},ow={class:"h-100 col-md-3",style:{"overflow-y":"auto"}},aw={class:"col-md-6"},lw={class:"h-100"},cw={class:"h-100 col-md-3",style:{"overflow-y":"auto"}},uw={class:"my-2"},dw=w("h5",null,"Code Quality",-1),fw={class:"row"},pw={class:"col-md-6 p-1"},hw={class:"col-md-6 p-1"},mw={class:"col-md-6 p-1"},gw={class:"my-2"},_w=w("h5",null,"Security Analysis",-1),vw={class:"row"},bw={class:"col-md-6 p-1"},yw={class:"col-md-6 p-1"},ww=w("div",{class:"my-2"},[w("h5",null,"Explanation"),w("div",{style:{"font-size":"0.85rem"}}," BiSwap is a decentralized exchange platform that allows users to easily swap BEP-20 tokens on the Binance Smart Chain network. The platform features a three-level referral system and low transaction fees (0.1%). Our mission is to become a leading platform for token swaps in the DeFi space by offering fast, secure, and easy-to-use services. ")],-1);function Ew(e,t,n,s,i,r){const o=De("StatusCardGroup"),a=De("CodeView"),l=De("TextCard");return W(),z("div",rw,[w("div",ow,[ie(o,{title:"Whitepaper (10/50 passed)",statuses:i.statuses,backgroundColor:"rgb(249,227,227)"},null,8,["statuses"]),ie(o,{title:"Regulations (5/5 passed)",statuses:i.statuses,backgroundColor:"rgba(221,234,252)"},null,8,["statuses"]),ie(o,{title:"Industry Standard",statuses:i.statuses,backgroundColor:"rgba(227,251,233)"},null,8,["statuses"])]),w("div",aw,[w("div",lw,[w("form",null,[xc(w("select",{class:"form-select",onChange:t[0]||(t[0]=c=>r.onContractChange(i.contract)),"onUpdate:modelValue":t[1]||(t[1]=c=>i.contract=c)},[(W(!0),z(ge,null,Me(r.contracts,(c,u)=>(W(),z("option",{key:u},ae(c),1))),128))],544),[[U_,i.contract]])]),ie(a,{class:"h-100",style:{"overflow-y":"auto"},code:r.code},null,8,["code"])])]),w("div",cw,[w("div",uw,[dw,w("div",fw,[w("div",pw,[ie(l,{label:"Maintainability",text:"A",footer:"Created by SonarCube"})]),w("div",hw,[ie(l,{label:"Test Coverage",text:"80%",footer:"Created by Jest"})]),w("div",mw,[ie(l,{label:"Performance",text:"B",footer:"Created by GPT"})])])]),w("div",gw,[_w,w("div",vw,[w("div",bw,[ie(l,{label:"Score",text:"80/100",footer:"Created by Hacken"})]),w("div",yw,[ie(l,{label:"Audits",text:"85/100",footer:"Created by Verazt"})])])]),ww])])}const kw=Te(iw,[["render",Ew]]),Aw={props:["title","text","type"]};const Tw={class:"d-flex"},Sw={style:{"margin-right":"15px","font-size":"1.5rem"}},Cw={key:0,class:"bi bi-exclamation-triangle"},xw={key:1,class:"bi bi-info-circle"},Pw={key:2,class:"bi bi-check-circle"},Ow={class:"align-self-center"},Iw={style:{"font-size":"0.9rem"}},Nw={style:{"font-size":"0.8rem","margin-top":"6px"}},Rw=w("div",{style:{"font-size":"0.8rem","margin-top":"10px",cursor:"pointer"}},[w("u",null,"Details")],-1);function Dw(e,t,n,s,i,r){return W(),z("div",{class:Ln(["action-status-card p-3 my-2",{danger:n.type=="danger",warn:n.type=="warn",primary:n.type=="primary"}])},[w("div",Tw,[w("div",Sw,[n.type=="danger"?(W(),z("i",Cw)):dt("",!0),n.type=="warn"?(W(),z("i",xw)):dt("",!0),n.type=="primary"?(W(),z("i",Pw)):dt("",!0)]),w("div",Ow,[w("div",Iw,[w("b",null,ae(n.title),1)]),w("div",Nw,ae(n.text),1),Rw])])],2)}const $w=Te(Aw,[["render",Dw]]),Lw={props:["title","status","changes","type"]};const Mw={class:"action-card p-3 py-4"},Bw={class:"d-flex"},Fw={class:"align-self-center",style:{"margin-right":"10px",color:"white","border-radius":"4px","background-color":"rgba(39, 50, 131)",width:"64px",height:"64px","font-size":"1.5rem","text-align":"center","line-height":"64px"}},Vw={class:"align-self-center",style:{"text-align":"center","flex-grow":"1"}},Ww={style:{"font-size":"0.7rem",color:"rgb(135, 136, 141)"}},Hw={style:{"font-size":"2rem"}};function jw(e,t,n,s,i,r){return W(),z("div",Mw,[w("div",Bw,[w("div",Fw,[Ug(e.$slots,"default",{},void 0,!0)]),w("div",Vw,[w("div",Ww,ae(n.title),1),w("div",Hw,[Et(ae(n.status)+" ",1),w("span",{class:Ln({up:n.type=="up",down:n.type=="down"}),style:{"font-size":"0.9rem"}},ae(n.changes),3)])])])])}const Uw=Te(Lw,[["render",jw],["__scopeId","data-v-54042410"]]),qw={props:["project"],components:{ActionStatusCard:$w,ActionCard:Uw},computed:{actions(){var e,t;return((t=(e=this.project)==null?void 0:e.actionsView)==null?void 0:t.actions)||[]},tasks(){var e,t;return((t=(e=this.project)==null?void 0:e.actionsView)==null?void 0:t.tasks)||[]}}},zw={class:"row my-3"},Kw={class:"col-md-4"},Gw=w("i",{class:"bi bi-search"},null,-1),Yw={class:"col-md-4"},Xw=w("i",{class:"bi bi-check2-circle"},null,-1),Qw={class:"col-md-4"},Zw=w("i",{class:"bi bi-info-circle"},null,-1),Jw=w("h4",null,"Action",-1),eE={class:"row my-3"},tE=w("h4",null,"Task",-1),nE={class:"row my-3"};function sE(e,t,n,s,i,r){const o=De("ActionCard"),a=De("ActionStatusCard");return W(),z("div",null,[w("div",zw,[w("div",Kw,[ie(o,{title:"Total Suggestion",status:"17",changes:"↑ 122",type:"up"},{default:Bs(()=>[Gw]),_:1})]),w("div",Yw,[ie(o,{title:"Completed",status:"5",changes:"↑ 5.4%",type:"up"},{default:Bs(()=>[Xw]),_:1})]),w("div",Qw,[ie(o,{title:"Action Needed",status:"8",changes:"↓ 3.2%",type:"down"},{default:Bs(()=>[Zw]),_:1})])]),Jw,w("div",eE,[(W(!0),z(ge,null,Me(r.actions,(l,c)=>(W(),z("div",{class:"col-md-4",key:c},[ie(a,{title:l.title,text:l.text,type:l.type},null,8,["title","text","type"])]))),128))]),tE,w("div",nE,[(W(!0),z(ge,null,Me(r.tasks,(l,c)=>(W(),z("div",{class:"col-md-4",key:c},[ie(a,{title:l.title,text:l.text},null,8,["title","text"])]))),128))])])}const iE=Te(qw,[["render",sE]]),rE={props:{organizationGuid:String,projectGuid:String},components:{Tag:du,ProjectOverviewView:Sy,ProjectAssessmentView:kw,ProjectActionView:iE},data(){return{author:"Yiwei Gong",date:new Date}},computed:{...lo(fo),organization(){return this.organizationsStore.findOrganization(this.organizationGuid)},project(){return this.organizationsStore.findProject(this.organizationGuid,this.projectGuid)}},methods:{formatDate(e){return e?(typeof e=="string"&&(e=new Date(e)),e.toLocaleDateString()):""}}};const oE=e=>(vs("data-v-ec2f7fdd"),e=e(),bs(),e),aE={class:"container mt-5"},lE={class:"d-flex"},cE={style:{"margin-right":"18px"}},uE=["src"],dE={class:"align-self-center"},fE={class:"d-flex"},pE={style:{"margin-right":"18px"}},hE={class:"rating align-self-center"},mE=["href"],gE={style:{color:"rgba(39, 50, 131)"}},_E={style:{color:"rgba(39, 50, 131)"}},vE={class:"description"},bE={class:"mt-4 d-flex"},yE={class:"mt-4"},wE=oE(()=>w("ul",{class:"nav nav-tabs",id:"myTab",role:"tablist"},[w("li",{class:"nav-item"},[w("a",{class:"nav-link active",id:"overview-tab","data-bs-toggle":"tab",href:"#overview",role:"tab","aria-controls":"overview","aria-selected":"true"},"Overview")]),w("li",{class:"nav-item"},[w("a",{class:"nav-link",id:"assessment-tab","data-bs-toggle":"tab",href:"#assessment",role:"tab","aria-controls":"assessment","aria-selected":"true"},"Assessment")]),w("li",{class:"nav-item"},[w("a",{class:"nav-link",id:"actions-tab","data-bs-toggle":"tab",href:"#actions",role:"tab","aria-controls":"actions","aria-selected":"false"},"Actions")])],-1)),EE={class:"tab-content",id:"myTabContent"},kE={class:"tab-pane fade show active",id:"overview",role:"tabpanel","aria-labelledby":"overview-tab"},AE={class:"mt-3"},TE={class:"tab-pane fade show",id:"assessment",role:"tabpanel","aria-labelledby":"assessment-tab"},SE={class:"mt-3"},CE={class:"tab-pane fade show",id:"actions",role:"tabpanel","aria-labelledby":"actions-tab"},xE={class:"mt-3"};function PE(e,t,n,s,i,r){var u,d,p,g,P,E,S,x,m;const o=De("Tag"),a=De("ProjectOverviewView"),l=De("ProjectAssessmentView"),c=De("ProjectActionView");return W(),z("div",aE,[w("div",lE,[w("div",cE,[w("img",{src:(u=r.project)==null?void 0:u.logo,class:"logo"},null,8,uE)]),w("div",dE,[w("div",fE,[w("h1",pE,ae((d=r.project)==null?void 0:d.name),1),w("div",hE,ae((p=r.project)==null?void 0:p.rating),1)]),w("div",null,[w("a",{href:(g=r.project)==null?void 0:g.url},ae((P=r.project)==null?void 0:P.url),9,mE)]),w("div",null,[Et(" Created by "),w("span",gE,[w("u",null,ae((E=r.project)==null?void 0:E.author),1)]),Et(" on "),w("span",_E,[w("u",null,ae(r.formatDate((S=r.project)==null?void 0:S.dueAt)),1)])]),w("div",vE,ae((x=r.project)==null?void 0:x.description),1)])]),w("div",bE,[(W(!0),z(ge,null,Me((m=r.project)==null?void 0:m.tags,_=>(W(),Ht(o,{key:_,tag:_},null,8,["tag"]))),128))]),w("div",yE,[wE,w("div",EE,[w("div",kE,[w("div",AE,[ie(a,{project:r.project},null,8,["project"])])]),w("div",TE,[w("div",SE,[ie(l,{project:r.project},null,8,["project"])])]),w("div",CE,[w("div",xE,[ie(c,{project:r.project},null,8,["project"])])])])])])}const OE=Te(rE,[["render",PE],["__scopeId","data-v-ec2f7fdd"]]),IE={components:{ProjectSidebarItem:Hb,ProjectDetailsView:OE},data(){return{searchValue:"",selectedProjectGuid:""}},computed:{...lo(fo),organizationGuid(){return this.$route.params.organizationGuid},projects(){const e=this.organizationsStore.findOrganization(this.organizationGuid);if(!e)return[];if(!this.searchValue)return e.projects;const t=this.searchValue.toLowerCase();return e.projects.filter(n=>n.name.toLowerCase().includes(t))}}},NE="/webapp/logo-full.png";const pu=e=>(vs("data-v-1c489500"),e=e(),bs(),e),RE={class:"d-flex org"},DE={class:"h-100 org-sidebar"},$E={class:"container"},LE=pu(()=>w("div",{class:"mt-3",style:{color:"rgba(39, 50, 131)","font-size":"1.2rem"}},"Projects",-1)),ME={class:"form-inline my-2"},BE={class:"h-100 w-100 org-main"},FE={key:0,class:"container-fluid"},VE={key:1,class:"h-100 w-100"},WE=pu(()=>w("div",{style:{"text-align":"center","margin-top":"15%"}},[w("div",{style:{"font-size":"4rem",color:"red"}},[w("img",{src:NE,style:{width:"256px",filter:"grayscale(100%)",opacity:"0.3"}})]),w("div",{style:{width:"100%","max-width":"320px",color:"rgba(0, 0, 0, 0.5)"},class:"mx-auto"}," AI-Powered Regulatory Assessment Solution for Digital Asset Innovation ")],-1)),HE=[WE];function jE(e,t,n,s,i,r){const o=De("ProjectSidebarItem"),a=De("ProjectDetailsView");return W(),z("div",RE,[w("div",DE,[w("div",$E,[LE,w("form",ME,[xc(w("input",{class:"form-control",type:"search",placeholder:"Search...","aria-label":"Search","onUpdate:modelValue":t[0]||(t[0]=l=>i.searchValue=l)},null,512),[[j_,i.searchValue]])]),(W(!0),z(ge,null,Me(r.projects,l=>(W(),Ht(o,{key:l.guid,guid:l.guid,name:l.name,logo:l.logo,highlighted:l.guid==i.selectedProjectGuid,onClick:c=>i.selectedProjectGuid=l.guid},null,8,["guid","name","logo","highlighted","onClick"]))),128))])]),w("div",BE,[i.selectedProjectGuid?(W(),z("div",FE,[ie(a,{"organization-guid":r.organizationGuid,"project-guid":i.selectedProjectGuid},null,8,["organization-guid","project-guid"])])):(W(),z("div",VE,HE))])])}const UE=Te(IE,[["render",jE],["__scopeId","data-v-1c489500"]]),qE=ib({history:wv("/webapp/"),routes:[{path:"/",name:"organizations",component:Lb},{path:"/organizations/:organizationGuid",name:"organization",component:UE}]}),po=K_(fb);po.use(X_());po.use(qE);po.mount("#app");
