(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function n(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=n(o);fetch(o.href,l)}})();function yv(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}var Cu={exports:{}},Fs={},Ru={exports:{}},Mt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gp;function Sv(){if(Gp)return Mt;Gp=1;var a=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),u=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),y=Symbol.iterator;function g(N){return N===null||typeof N!="object"?null:(N=y&&N[y]||N["@@iterator"],typeof N=="function"?N:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w=Object.assign,P={};function x(N,ee,xe){this.props=N,this.context=ee,this.refs=P,this.updater=xe||M}x.prototype.isReactComponent={},x.prototype.setState=function(N,ee){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,ee,"setState")},x.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function v(){}v.prototype=x.prototype;function C(N,ee,xe){this.props=N,this.context=ee,this.refs=P,this.updater=xe||M}var F=C.prototype=new v;F.constructor=C,w(F,x.prototype),F.isPureReactComponent=!0;var b=Array.isArray,L=Object.prototype.hasOwnProperty,R={current:null},U={key:!0,ref:!0,__self:!0,__source:!0};function E(N,ee,xe){var He,Ue={},We=null,le=null;if(ee!=null)for(He in ee.ref!==void 0&&(le=ee.ref),ee.key!==void 0&&(We=""+ee.key),ee)L.call(ee,He)&&!U.hasOwnProperty(He)&&(Ue[He]=ee[He]);var fe=arguments.length-2;if(fe===1)Ue.children=xe;else if(1<fe){for(var Te=Array(fe),Je=0;Je<fe;Je++)Te[Je]=arguments[Je+2];Ue.children=Te}if(N&&N.defaultProps)for(He in fe=N.defaultProps,fe)Ue[He]===void 0&&(Ue[He]=fe[He]);return{$$typeof:a,type:N,key:We,ref:le,props:Ue,_owner:R.current}}function I(N,ee){return{$$typeof:a,type:N.type,key:ee,ref:N.ref,props:N.props,_owner:N._owner}}function O(N){return typeof N=="object"&&N!==null&&N.$$typeof===a}function X(N){var ee={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(xe){return ee[xe]})}var J=/\/+/g;function ne(N,ee){return typeof N=="object"&&N!==null&&N.key!=null?X(""+N.key):ee.toString(36)}function j(N,ee,xe,He,Ue){var We=typeof N;(We==="undefined"||We==="boolean")&&(N=null);var le=!1;if(N===null)le=!0;else switch(We){case"string":case"number":le=!0;break;case"object":switch(N.$$typeof){case a:case e:le=!0}}if(le)return le=N,Ue=Ue(le),N=He===""?"."+ne(le,0):He,b(Ue)?(xe="",N!=null&&(xe=N.replace(J,"$&/")+"/"),j(Ue,ee,xe,"",function(Je){return Je})):Ue!=null&&(O(Ue)&&(Ue=I(Ue,xe+(!Ue.key||le&&le.key===Ue.key?"":(""+Ue.key).replace(J,"$&/")+"/")+N)),ee.push(Ue)),1;if(le=0,He=He===""?".":He+":",b(N))for(var fe=0;fe<N.length;fe++){We=N[fe];var Te=He+ne(We,fe);le+=j(We,ee,xe,Te,Ue)}else if(Te=g(N),typeof Te=="function")for(N=Te.call(N),fe=0;!(We=N.next()).done;)We=We.value,Te=He+ne(We,fe++),le+=j(We,ee,xe,Te,Ue);else if(We==="object")throw ee=String(N),Error("Objects are not valid as a React child (found: "+(ee==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":ee)+"). If you meant to render a collection of children, use an array instead.");return le}function H(N,ee,xe){if(N==null)return N;var He=[],Ue=0;return j(N,He,"","",function(We){return ee.call(xe,We,Ue++)}),He}function ae(N){if(N._status===-1){var ee=N._result;ee=ee(),ee.then(function(xe){(N._status===0||N._status===-1)&&(N._status=1,N._result=xe)},function(xe){(N._status===0||N._status===-1)&&(N._status=2,N._result=xe)}),N._status===-1&&(N._status=0,N._result=ee)}if(N._status===1)return N._result.default;throw N._result}var W={current:null},B={transition:null},z={ReactCurrentDispatcher:W,ReactCurrentBatchConfig:B,ReactCurrentOwner:R};function K(){throw Error("act(...) is not supported in production builds of React.")}return Mt.Children={map:H,forEach:function(N,ee,xe){H(N,function(){ee.apply(this,arguments)},xe)},count:function(N){var ee=0;return H(N,function(){ee++}),ee},toArray:function(N){return H(N,function(ee){return ee})||[]},only:function(N){if(!O(N))throw Error("React.Children.only expected to receive a single React element child.");return N}},Mt.Component=x,Mt.Fragment=n,Mt.Profiler=o,Mt.PureComponent=C,Mt.StrictMode=r,Mt.Suspense=h,Mt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=z,Mt.act=K,Mt.cloneElement=function(N,ee,xe){if(N==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+N+".");var He=w({},N.props),Ue=N.key,We=N.ref,le=N._owner;if(ee!=null){if(ee.ref!==void 0&&(We=ee.ref,le=R.current),ee.key!==void 0&&(Ue=""+ee.key),N.type&&N.type.defaultProps)var fe=N.type.defaultProps;for(Te in ee)L.call(ee,Te)&&!U.hasOwnProperty(Te)&&(He[Te]=ee[Te]===void 0&&fe!==void 0?fe[Te]:ee[Te])}var Te=arguments.length-2;if(Te===1)He.children=xe;else if(1<Te){fe=Array(Te);for(var Je=0;Je<Te;Je++)fe[Je]=arguments[Je+2];He.children=fe}return{$$typeof:a,type:N.type,key:Ue,ref:We,props:He,_owner:le}},Mt.createContext=function(N){return N={$$typeof:u,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},N.Provider={$$typeof:l,_context:N},N.Consumer=N},Mt.createElement=E,Mt.createFactory=function(N){var ee=E.bind(null,N);return ee.type=N,ee},Mt.createRef=function(){return{current:null}},Mt.forwardRef=function(N){return{$$typeof:f,render:N}},Mt.isValidElement=O,Mt.lazy=function(N){return{$$typeof:_,_payload:{_status:-1,_result:N},_init:ae}},Mt.memo=function(N,ee){return{$$typeof:m,type:N,compare:ee===void 0?null:ee}},Mt.startTransition=function(N){var ee=B.transition;B.transition={};try{N()}finally{B.transition=ee}},Mt.unstable_act=K,Mt.useCallback=function(N,ee){return W.current.useCallback(N,ee)},Mt.useContext=function(N){return W.current.useContext(N)},Mt.useDebugValue=function(){},Mt.useDeferredValue=function(N){return W.current.useDeferredValue(N)},Mt.useEffect=function(N,ee){return W.current.useEffect(N,ee)},Mt.useId=function(){return W.current.useId()},Mt.useImperativeHandle=function(N,ee,xe){return W.current.useImperativeHandle(N,ee,xe)},Mt.useInsertionEffect=function(N,ee){return W.current.useInsertionEffect(N,ee)},Mt.useLayoutEffect=function(N,ee){return W.current.useLayoutEffect(N,ee)},Mt.useMemo=function(N,ee){return W.current.useMemo(N,ee)},Mt.useReducer=function(N,ee,xe){return W.current.useReducer(N,ee,xe)},Mt.useRef=function(N){return W.current.useRef(N)},Mt.useState=function(N){return W.current.useState(N)},Mt.useSyncExternalStore=function(N,ee,xe){return W.current.useSyncExternalStore(N,ee,xe)},Mt.useTransition=function(){return W.current.useTransition()},Mt.version="18.3.1",Mt}var Wp;function nf(){return Wp||(Wp=1,Ru.exports=Sv()),Ru.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xp;function Mv(){if(Xp)return Fs;Xp=1;var a=nf(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function u(f,h,m){var _,y={},g=null,M=null;m!==void 0&&(g=""+m),h.key!==void 0&&(g=""+h.key),h.ref!==void 0&&(M=h.ref);for(_ in h)r.call(h,_)&&!l.hasOwnProperty(_)&&(y[_]=h[_]);if(f&&f.defaultProps)for(_ in h=f.defaultProps,h)y[_]===void 0&&(y[_]=h[_]);return{$$typeof:e,type:f,key:g,ref:M,props:y,_owner:o.current}}return Fs.Fragment=n,Fs.jsx=u,Fs.jsxs=u,Fs}var qp;function Ev(){return qp||(qp=1,Cu.exports=Mv()),Cu.exports}var q=Ev(),sl={},Pu={exports:{}},Hn={},Lu={exports:{}},Nu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jp;function Tv(){return jp||(jp=1,(function(a){function e(B,z){var K=B.length;B.push(z);e:for(;0<K;){var N=K-1>>>1,ee=B[N];if(0<o(ee,z))B[N]=z,B[K]=ee,K=N;else break e}}function n(B){return B.length===0?null:B[0]}function r(B){if(B.length===0)return null;var z=B[0],K=B.pop();if(K!==z){B[0]=K;e:for(var N=0,ee=B.length,xe=ee>>>1;N<xe;){var He=2*(N+1)-1,Ue=B[He],We=He+1,le=B[We];if(0>o(Ue,K))We<ee&&0>o(le,Ue)?(B[N]=le,B[We]=K,N=We):(B[N]=Ue,B[He]=K,N=He);else if(We<ee&&0>o(le,K))B[N]=le,B[We]=K,N=We;else break e}}return z}function o(B,z){var K=B.sortIndex-z.sortIndex;return K!==0?K:B.id-z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;a.unstable_now=function(){return l.now()}}else{var u=Date,f=u.now();a.unstable_now=function(){return u.now()-f}}var h=[],m=[],_=1,y=null,g=3,M=!1,w=!1,P=!1,x=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,C=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function F(B){for(var z=n(m);z!==null;){if(z.callback===null)r(m);else if(z.startTime<=B)r(m),z.sortIndex=z.expirationTime,e(h,z);else break;z=n(m)}}function b(B){if(P=!1,F(B),!w)if(n(h)!==null)w=!0,ae(L);else{var z=n(m);z!==null&&W(b,z.startTime-B)}}function L(B,z){w=!1,P&&(P=!1,v(E),E=-1),M=!0;var K=g;try{for(F(z),y=n(h);y!==null&&(!(y.expirationTime>z)||B&&!X());){var N=y.callback;if(typeof N=="function"){y.callback=null,g=y.priorityLevel;var ee=N(y.expirationTime<=z);z=a.unstable_now(),typeof ee=="function"?y.callback=ee:y===n(h)&&r(h),F(z)}else r(h);y=n(h)}if(y!==null)var xe=!0;else{var He=n(m);He!==null&&W(b,He.startTime-z),xe=!1}return xe}finally{y=null,g=K,M=!1}}var R=!1,U=null,E=-1,I=5,O=-1;function X(){return!(a.unstable_now()-O<I)}function J(){if(U!==null){var B=a.unstable_now();O=B;var z=!0;try{z=U(!0,B)}finally{z?ne():(R=!1,U=null)}}else R=!1}var ne;if(typeof C=="function")ne=function(){C(J)};else if(typeof MessageChannel<"u"){var j=new MessageChannel,H=j.port2;j.port1.onmessage=J,ne=function(){H.postMessage(null)}}else ne=function(){x(J,0)};function ae(B){U=B,R||(R=!0,ne())}function W(B,z){E=x(function(){B(a.unstable_now())},z)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(B){B.callback=null},a.unstable_continueExecution=function(){w||M||(w=!0,ae(L))},a.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):I=0<B?Math.floor(1e3/B):5},a.unstable_getCurrentPriorityLevel=function(){return g},a.unstable_getFirstCallbackNode=function(){return n(h)},a.unstable_next=function(B){switch(g){case 1:case 2:case 3:var z=3;break;default:z=g}var K=g;g=z;try{return B()}finally{g=K}},a.unstable_pauseExecution=function(){},a.unstable_requestPaint=function(){},a.unstable_runWithPriority=function(B,z){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var K=g;g=B;try{return z()}finally{g=K}},a.unstable_scheduleCallback=function(B,z,K){var N=a.unstable_now();switch(typeof K=="object"&&K!==null?(K=K.delay,K=typeof K=="number"&&0<K?N+K:N):K=N,B){case 1:var ee=-1;break;case 2:ee=250;break;case 5:ee=1073741823;break;case 4:ee=1e4;break;default:ee=5e3}return ee=K+ee,B={id:_++,callback:z,priorityLevel:B,startTime:K,expirationTime:ee,sortIndex:-1},K>N?(B.sortIndex=K,e(m,B),n(h)===null&&B===n(m)&&(P?(v(E),E=-1):P=!0,W(b,K-N))):(B.sortIndex=ee,e(h,B),w||M||(w=!0,ae(L))),B},a.unstable_shouldYield=X,a.unstable_wrapCallback=function(B){var z=g;return function(){var K=g;g=z;try{return B.apply(this,arguments)}finally{g=K}}}})(Nu)),Nu}var Kp;function wv(){return Kp||(Kp=1,Lu.exports=Tv()),Lu.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yp;function Av(){if(Yp)return Hn;Yp=1;var a=nf(),e=wv();function n(t){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+t,s=1;s<arguments.length;s++)i+="&args[]="+encodeURIComponent(arguments[s]);return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,o={};function l(t,i){u(t,i),u(t+"Capture",i)}function u(t,i){for(o[t]=i,t=0;t<i.length;t++)r.add(i[t])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,_={},y={};function g(t){return h.call(y,t)?!0:h.call(_,t)?!1:m.test(t)?y[t]=!0:(_[t]=!0,!1)}function M(t,i,s,c){if(s!==null&&s.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return c?!1:s!==null?!s.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function w(t,i,s,c){if(i===null||typeof i>"u"||M(t,i,s,c))return!0;if(c)return!1;if(s!==null)switch(s.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function P(t,i,s,c,d,p,T){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=c,this.attributeNamespace=d,this.mustUseProperty=s,this.propertyName=t,this.type=i,this.sanitizeURL=p,this.removeEmptyString=T}var x={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){x[t]=new P(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var i=t[0];x[i]=new P(i,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){x[t]=new P(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){x[t]=new P(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){x[t]=new P(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){x[t]=new P(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){x[t]=new P(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){x[t]=new P(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){x[t]=new P(t,5,!1,t.toLowerCase(),null,!1,!1)});var v=/[\-:]([a-z])/g;function C(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var i=t.replace(v,C);x[i]=new P(i,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var i=t.replace(v,C);x[i]=new P(i,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var i=t.replace(v,C);x[i]=new P(i,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){x[t]=new P(t,1,!1,t.toLowerCase(),null,!1,!1)}),x.xlinkHref=new P("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){x[t]=new P(t,1,!1,t.toLowerCase(),null,!0,!0)});function F(t,i,s,c){var d=x.hasOwnProperty(i)?x[i]:null;(d!==null?d.type!==0:c||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(w(i,s,d,c)&&(s=null),c||d===null?g(i)&&(s===null?t.removeAttribute(i):t.setAttribute(i,""+s)):d.mustUseProperty?t[d.propertyName]=s===null?d.type===3?!1:"":s:(i=d.attributeName,c=d.attributeNamespace,s===null?t.removeAttribute(i):(d=d.type,s=d===3||d===4&&s===!0?"":""+s,c?t.setAttributeNS(c,i,s):t.setAttribute(i,s))))}var b=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,L=Symbol.for("react.element"),R=Symbol.for("react.portal"),U=Symbol.for("react.fragment"),E=Symbol.for("react.strict_mode"),I=Symbol.for("react.profiler"),O=Symbol.for("react.provider"),X=Symbol.for("react.context"),J=Symbol.for("react.forward_ref"),ne=Symbol.for("react.suspense"),j=Symbol.for("react.suspense_list"),H=Symbol.for("react.memo"),ae=Symbol.for("react.lazy"),W=Symbol.for("react.offscreen"),B=Symbol.iterator;function z(t){return t===null||typeof t!="object"?null:(t=B&&t[B]||t["@@iterator"],typeof t=="function"?t:null)}var K=Object.assign,N;function ee(t){if(N===void 0)try{throw Error()}catch(s){var i=s.stack.trim().match(/\n( *(at )?)/);N=i&&i[1]||""}return`
`+N+t}var xe=!1;function He(t,i){if(!t||xe)return"";xe=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(de){var c=de}Reflect.construct(t,[],i)}else{try{i.call()}catch(de){c=de}t.call(i.prototype)}else{try{throw Error()}catch(de){c=de}t()}}catch(de){if(de&&c&&typeof de.stack=="string"){for(var d=de.stack.split(`
`),p=c.stack.split(`
`),T=d.length-1,k=p.length-1;1<=T&&0<=k&&d[T]!==p[k];)k--;for(;1<=T&&0<=k;T--,k--)if(d[T]!==p[k]){if(T!==1||k!==1)do if(T--,k--,0>k||d[T]!==p[k]){var G=`
`+d[T].replace(" at new "," at ");return t.displayName&&G.includes("<anonymous>")&&(G=G.replace("<anonymous>",t.displayName)),G}while(1<=T&&0<=k);break}}}finally{xe=!1,Error.prepareStackTrace=s}return(t=t?t.displayName||t.name:"")?ee(t):""}function Ue(t){switch(t.tag){case 5:return ee(t.type);case 16:return ee("Lazy");case 13:return ee("Suspense");case 19:return ee("SuspenseList");case 0:case 2:case 15:return t=He(t.type,!1),t;case 11:return t=He(t.type.render,!1),t;case 1:return t=He(t.type,!0),t;default:return""}}function We(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case U:return"Fragment";case R:return"Portal";case I:return"Profiler";case E:return"StrictMode";case ne:return"Suspense";case j:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case X:return(t.displayName||"Context")+".Consumer";case O:return(t._context.displayName||"Context")+".Provider";case J:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case H:return i=t.displayName||null,i!==null?i:We(t.type)||"Memo";case ae:i=t._payload,t=t._init;try{return We(t(i))}catch{}}return null}function le(t){var i=t.type;switch(t.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=i.render,t=t.displayName||t.name||"",i.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return We(i);case 8:return i===E?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function fe(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Te(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Je(t){var i=Te(t)?"checked":"value",s=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),c=""+t[i];if(!t.hasOwnProperty(i)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var d=s.get,p=s.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return d.call(this)},set:function(T){c=""+T,p.call(this,T)}}),Object.defineProperty(t,i,{enumerable:s.enumerable}),{getValue:function(){return c},setValue:function(T){c=""+T},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function Be(t){t._valueTracker||(t._valueTracker=Je(t))}function dt(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var s=i.getValue(),c="";return t&&(c=Te(t)?t.checked?"true":"false":t.value),t=c,t!==s?(i.setValue(t),!0):!1}function Ht(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function ft(t,i){var s=i.checked;return K({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:s??t._wrapperState.initialChecked})}function St(t,i){var s=i.defaultValue==null?"":i.defaultValue,c=i.checked!=null?i.checked:i.defaultChecked;s=fe(i.value!=null?i.value:s),t._wrapperState={initialChecked:c,initialValue:s,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function Pt(t,i){i=i.checked,i!=null&&F(t,"checked",i,!1)}function pt(t,i){Pt(t,i);var s=fe(i.value),c=i.type;if(s!=null)c==="number"?(s===0&&t.value===""||t.value!=s)&&(t.value=""+s):t.value!==""+s&&(t.value=""+s);else if(c==="submit"||c==="reset"){t.removeAttribute("value");return}i.hasOwnProperty("value")?ve(t,i.type,s):i.hasOwnProperty("defaultValue")&&ve(t,i.type,fe(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(t.defaultChecked=!!i.defaultChecked)}function Ot(t,i,s){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var c=i.type;if(!(c!=="submit"&&c!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+t._wrapperState.initialValue,s||i===t.value||(t.value=i),t.defaultValue=i}s=t.name,s!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,s!==""&&(t.name=s)}function ve(t,i,s){(i!=="number"||Ht(t.ownerDocument)!==t)&&(s==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+s&&(t.defaultValue=""+s))}var Le=Array.isArray;function be(t,i,s,c){if(t=t.options,i){i={};for(var d=0;d<s.length;d++)i["$"+s[d]]=!0;for(s=0;s<t.length;s++)d=i.hasOwnProperty("$"+t[s].value),t[s].selected!==d&&(t[s].selected=d),d&&c&&(t[s].defaultSelected=!0)}else{for(s=""+fe(s),i=null,d=0;d<t.length;d++){if(t[d].value===s){t[d].selected=!0,c&&(t[d].defaultSelected=!0);return}i!==null||t[d].disabled||(i=t[d])}i!==null&&(i.selected=!0)}}function it(t,i){if(i.dangerouslySetInnerHTML!=null)throw Error(n(91));return K({},i,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function V(t,i){var s=i.value;if(s==null){if(s=i.children,i=i.defaultValue,s!=null){if(i!=null)throw Error(n(92));if(Le(s)){if(1<s.length)throw Error(n(93));s=s[0]}i=s}i==null&&(i=""),s=i}t._wrapperState={initialValue:fe(s)}}function Ut(t,i){var s=fe(i.value),c=fe(i.defaultValue);s!=null&&(s=""+s,s!==t.value&&(t.value=s),i.defaultValue==null&&t.defaultValue!==s&&(t.defaultValue=s)),c!=null&&(t.defaultValue=""+c)}function _t(t){var i=t.textContent;i===t._wrapperState.initialValue&&i!==""&&i!==null&&(t.value=i)}function D(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function S(t,i){return t==null||t==="http://www.w3.org/1999/xhtml"?D(i):t==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Q,oe=(function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,s,c,d){MSApp.execUnsafeLocalFunction(function(){return t(i,s,c,d)})}:t})(function(t,i){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=i;else{for(Q=Q||document.createElement("div"),Q.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=Q.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;i.firstChild;)t.appendChild(i.firstChild)}});function pe(t,i){if(i){var s=t.firstChild;if(s&&s===t.lastChild&&s.nodeType===3){s.nodeValue=i;return}}t.textContent=i}var Me={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ce=["Webkit","ms","Moz","O"];Object.keys(Me).forEach(function(t){Ce.forEach(function(i){i=i+t.charAt(0).toUpperCase()+t.substring(1),Me[i]=Me[t]})});function he(t,i,s){return i==null||typeof i=="boolean"||i===""?"":s||typeof i!="number"||i===0||Me.hasOwnProperty(t)&&Me[t]?(""+i).trim():i+"px"}function me(t,i){t=t.style;for(var s in i)if(i.hasOwnProperty(s)){var c=s.indexOf("--")===0,d=he(s,i[s],c);s==="float"&&(s="cssFloat"),c?t.setProperty(s,d):t[s]=d}}var we=K({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function qe(t,i){if(i){if(we[t]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(n(137,t));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(n(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(n(61))}if(i.style!=null&&typeof i.style!="object")throw Error(n(62))}}function Re(t,i){if(t.indexOf("-")===-1)return typeof i.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Pe=null;function Qe(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var rt=null,ot=null,Y=null;function Ne(t){if(t=Ms(t)){if(typeof rt!="function")throw Error(n(280));var i=t.stateNode;i&&(i=So(i),rt(t.stateNode,t.type,i))}}function ge(t){ot?Y?Y.push(t):Y=[t]:ot=t}function Ie(){if(ot){var t=ot,i=Y;if(Y=ot=null,Ne(t),i)for(t=0;t<i.length;t++)Ne(i[t])}}function ze(t,i){return t(i)}function _e(){}var tt=!1;function $e(t,i,s){if(tt)return t(i,s);tt=!0;try{return ze(t,i,s)}finally{tt=!1,(ot!==null||Y!==null)&&(_e(),Ie())}}function Lt(t,i){var s=t.stateNode;if(s===null)return null;var c=So(s);if(c===null)return null;s=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(t=t.type,c=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!c;break e;default:t=!1}if(t)return null;if(s&&typeof s!="function")throw Error(n(231,i,typeof s));return s}var bt=!1;if(f)try{var vn={};Object.defineProperty(vn,"passive",{get:function(){bt=!0}}),window.addEventListener("test",vn,vn),window.removeEventListener("test",vn,vn)}catch{bt=!1}function Qn(t,i,s,c,d,p,T,k,G){var de=Array.prototype.slice.call(arguments,3);try{i.apply(s,de)}catch(Se){this.onError(Se)}}var Ir=!1,oa=null,Dr=!1,Ur=null,Zl={onError:function(t){Ir=!0,oa=t}};function no(t,i,s,c,d,p,T,k,G){Ir=!1,oa=null,Qn.apply(Zl,arguments)}function io(t,i,s,c,d,p,T,k,G){if(no.apply(this,arguments),Ir){if(Ir){var de=oa;Ir=!1,oa=null}else throw Error(n(198));Dr||(Dr=!0,Ur=de)}}function Ln(t){var i=t,s=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(s=i.return),t=i.return;while(t)}return i.tag===3?s:null}function la(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function ts(t){if(Ln(t)!==t)throw Error(n(188))}function ro(t){var i=t.alternate;if(!i){if(i=Ln(t),i===null)throw Error(n(188));return i!==t?null:t}for(var s=t,c=i;;){var d=s.return;if(d===null)break;var p=d.alternate;if(p===null){if(c=d.return,c!==null){s=c;continue}break}if(d.child===p.child){for(p=d.child;p;){if(p===s)return ts(d),t;if(p===c)return ts(d),i;p=p.sibling}throw Error(n(188))}if(s.return!==c.return)s=d,c=p;else{for(var T=!1,k=d.child;k;){if(k===s){T=!0,s=d,c=p;break}if(k===c){T=!0,c=d,s=p;break}k=k.sibling}if(!T){for(k=p.child;k;){if(k===s){T=!0,s=p,c=d;break}if(k===c){T=!0,c=p,s=d;break}k=k.sibling}if(!T)throw Error(n(189))}}if(s.alternate!==c)throw Error(n(190))}if(s.tag!==3)throw Error(n(188));return s.stateNode.current===s?t:i}function kr(t){return t=ro(t),t!==null?ns(t):null}function ns(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var i=ns(t);if(i!==null)return i;t=t.sibling}return null}var Fr=e.unstable_scheduleCallback,is=e.unstable_cancelCallback,ao=e.unstable_shouldYield,Jl=e.unstable_requestPaint,Yt=e.unstable_now,Ql=e.unstable_getCurrentPriorityLevel,rs=e.unstable_ImmediatePriority,as=e.unstable_UserBlockingPriority,A=e.unstable_NormalPriority,$=e.unstable_LowPriority,ue=e.unstable_IdlePriority,re=null,te=null;function Fe(t){if(te&&typeof te.onCommitFiberRoot=="function")try{te.onCommitFiberRoot(re,t,void 0,(t.current.flags&128)===128)}catch{}}var De=Math.clz32?Math.clz32:et,ke=Math.log,Ke=Math.LN2;function et(t){return t>>>=0,t===0?32:31-(ke(t)/Ke|0)|0}var ut=64,mt=4194304;function Xe(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Et(t,i){var s=t.pendingLanes;if(s===0)return 0;var c=0,d=t.suspendedLanes,p=t.pingedLanes,T=s&268435455;if(T!==0){var k=T&~d;k!==0?c=Xe(k):(p&=T,p!==0&&(c=Xe(p)))}else T=s&~d,T!==0?c=Xe(T):p!==0&&(c=Xe(p));if(c===0)return 0;if(i!==0&&i!==c&&(i&d)===0&&(d=c&-c,p=i&-i,d>=p||d===16&&(p&4194240)!==0))return i;if((c&4)!==0&&(c|=s&16),i=t.entangledLanes,i!==0)for(t=t.entanglements,i&=c;0<i;)s=31-De(i),d=1<<s,c|=t[s],i&=~d;return c}function en(t,i){switch(t){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Vt(t,i){for(var s=t.suspendedLanes,c=t.pingedLanes,d=t.expirationTimes,p=t.pendingLanes;0<p;){var T=31-De(p),k=1<<T,G=d[T];G===-1?((k&s)===0||(k&c)!==0)&&(d[T]=en(k,i)):G<=i&&(t.expiredLanes|=k),p&=~k}}function kt(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function ln(){var t=ut;return ut<<=1,(ut&4194240)===0&&(ut=64),t}function Ve(t){for(var i=[],s=0;31>s;s++)i.push(t);return i}function nn(t,i,s){t.pendingLanes|=i,i!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,i=31-De(i),t[i]=s}function Tt(t,i){var s=t.pendingLanes&~i;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=i,t.mutableReadLanes&=i,t.entangledLanes&=i,i=t.entanglements;var c=t.eventTimes;for(t=t.expirationTimes;0<s;){var d=31-De(s),p=1<<d;i[d]=0,c[d]=-1,t[d]=-1,s&=~p}}function Mn(t,i){var s=t.entangledLanes|=i;for(t=t.entanglements;s;){var c=31-De(s),d=1<<c;d&i|t[c]&i&&(t[c]|=i),s&=~d}}var gt=0;function ci(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var Bi,Nt,qt,ui,zt,ei=!1,di=[],fi=null,ar=null,sr=null,ss=new Map,os=new Map,or=[],Vg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Af(t,i){switch(t){case"focusin":case"focusout":fi=null;break;case"dragenter":case"dragleave":ar=null;break;case"mouseover":case"mouseout":sr=null;break;case"pointerover":case"pointerout":ss.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":os.delete(i.pointerId)}}function ls(t,i,s,c,d,p){return t===null||t.nativeEvent!==p?(t={blockedOn:i,domEventName:s,eventSystemFlags:c,nativeEvent:p,targetContainers:[d]},i!==null&&(i=Ms(i),i!==null&&Nt(i)),t):(t.eventSystemFlags|=c,i=t.targetContainers,d!==null&&i.indexOf(d)===-1&&i.push(d),t)}function Gg(t,i,s,c,d){switch(i){case"focusin":return fi=ls(fi,t,i,s,c,d),!0;case"dragenter":return ar=ls(ar,t,i,s,c,d),!0;case"mouseover":return sr=ls(sr,t,i,s,c,d),!0;case"pointerover":var p=d.pointerId;return ss.set(p,ls(ss.get(p)||null,t,i,s,c,d)),!0;case"gotpointercapture":return p=d.pointerId,os.set(p,ls(os.get(p)||null,t,i,s,c,d)),!0}return!1}function bf(t){var i=Or(t.target);if(i!==null){var s=Ln(i);if(s!==null){if(i=s.tag,i===13){if(i=la(s),i!==null){t.blockedOn=i,zt(t.priority,function(){qt(s)});return}}else if(i===3&&s.stateNode.current.memoizedState.isDehydrated){t.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}t.blockedOn=null}function so(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var s=tc(t.domEventName,t.eventSystemFlags,i[0],t.nativeEvent);if(s===null){s=t.nativeEvent;var c=new s.constructor(s.type,s);Pe=c,s.target.dispatchEvent(c),Pe=null}else return i=Ms(s),i!==null&&Nt(i),t.blockedOn=s,!1;i.shift()}return!0}function Cf(t,i,s){so(t)&&s.delete(i)}function Wg(){ei=!1,fi!==null&&so(fi)&&(fi=null),ar!==null&&so(ar)&&(ar=null),sr!==null&&so(sr)&&(sr=null),ss.forEach(Cf),os.forEach(Cf)}function cs(t,i){t.blockedOn===i&&(t.blockedOn=null,ei||(ei=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Wg)))}function us(t){function i(d){return cs(d,t)}if(0<di.length){cs(di[0],t);for(var s=1;s<di.length;s++){var c=di[s];c.blockedOn===t&&(c.blockedOn=null)}}for(fi!==null&&cs(fi,t),ar!==null&&cs(ar,t),sr!==null&&cs(sr,t),ss.forEach(i),os.forEach(i),s=0;s<or.length;s++)c=or[s],c.blockedOn===t&&(c.blockedOn=null);for(;0<or.length&&(s=or[0],s.blockedOn===null);)bf(s),s.blockedOn===null&&or.shift()}var ca=b.ReactCurrentBatchConfig,oo=!0;function Xg(t,i,s,c){var d=gt,p=ca.transition;ca.transition=null;try{gt=1,ec(t,i,s,c)}finally{gt=d,ca.transition=p}}function qg(t,i,s,c){var d=gt,p=ca.transition;ca.transition=null;try{gt=4,ec(t,i,s,c)}finally{gt=d,ca.transition=p}}function ec(t,i,s,c){if(oo){var d=tc(t,i,s,c);if(d===null)_c(t,i,c,lo,s),Af(t,c);else if(Gg(d,t,i,s,c))c.stopPropagation();else if(Af(t,c),i&4&&-1<Vg.indexOf(t)){for(;d!==null;){var p=Ms(d);if(p!==null&&Bi(p),p=tc(t,i,s,c),p===null&&_c(t,i,c,lo,s),p===d)break;d=p}d!==null&&c.stopPropagation()}else _c(t,i,c,null,s)}}var lo=null;function tc(t,i,s,c){if(lo=null,t=Qe(c),t=Or(t),t!==null)if(i=Ln(t),i===null)t=null;else if(s=i.tag,s===13){if(t=la(i),t!==null)return t;t=null}else if(s===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null);return lo=t,null}function Rf(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ql()){case rs:return 1;case as:return 4;case A:case $:return 16;case ue:return 536870912;default:return 16}default:return 16}}var lr=null,nc=null,co=null;function Pf(){if(co)return co;var t,i=nc,s=i.length,c,d="value"in lr?lr.value:lr.textContent,p=d.length;for(t=0;t<s&&i[t]===d[t];t++);var T=s-t;for(c=1;c<=T&&i[s-c]===d[p-c];c++);return co=d.slice(t,1<c?1-c:void 0)}function uo(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function fo(){return!0}function Lf(){return!1}function Wn(t){function i(s,c,d,p,T){this._reactName=s,this._targetInst=d,this.type=c,this.nativeEvent=p,this.target=T,this.currentTarget=null;for(var k in t)t.hasOwnProperty(k)&&(s=t[k],this[k]=s?s(p):p[k]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?fo:Lf,this.isPropagationStopped=Lf,this}return K(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=fo)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=fo)},persist:function(){},isPersistent:fo}),i}var ua={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ic=Wn(ua),ds=K({},ua,{view:0,detail:0}),jg=Wn(ds),rc,ac,fs,ho=K({},ds,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:oc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==fs&&(fs&&t.type==="mousemove"?(rc=t.screenX-fs.screenX,ac=t.screenY-fs.screenY):ac=rc=0,fs=t),rc)},movementY:function(t){return"movementY"in t?t.movementY:ac}}),Nf=Wn(ho),Kg=K({},ho,{dataTransfer:0}),Yg=Wn(Kg),$g=K({},ds,{relatedTarget:0}),sc=Wn($g),Zg=K({},ua,{animationName:0,elapsedTime:0,pseudoElement:0}),Jg=Wn(Zg),Qg=K({},ua,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),e0=Wn(Qg),t0=K({},ua,{data:0}),If=Wn(t0),n0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},i0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},r0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function a0(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=r0[t])?!!i[t]:!1}function oc(){return a0}var s0=K({},ds,{key:function(t){if(t.key){var i=n0[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=uo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?i0[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:oc,charCode:function(t){return t.type==="keypress"?uo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?uo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),o0=Wn(s0),l0=K({},ho,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Df=Wn(l0),c0=K({},ds,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:oc}),u0=Wn(c0),d0=K({},ua,{propertyName:0,elapsedTime:0,pseudoElement:0}),f0=Wn(d0),h0=K({},ho,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),p0=Wn(h0),m0=[9,13,27,32],lc=f&&"CompositionEvent"in window,hs=null;f&&"documentMode"in document&&(hs=document.documentMode);var g0=f&&"TextEvent"in window&&!hs,Uf=f&&(!lc||hs&&8<hs&&11>=hs),kf=" ",Ff=!1;function Of(t,i){switch(t){case"keyup":return m0.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function zf(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var da=!1;function v0(t,i){switch(t){case"compositionend":return zf(i);case"keypress":return i.which!==32?null:(Ff=!0,kf);case"textInput":return t=i.data,t===kf&&Ff?null:t;default:return null}}function _0(t,i){if(da)return t==="compositionend"||!lc&&Of(t,i)?(t=Pf(),co=nc=lr=null,da=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Uf&&i.locale!=="ko"?null:i.data;default:return null}}var x0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Bf(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!x0[t.type]:i==="textarea"}function Hf(t,i,s,c){ge(c),i=_o(i,"onChange"),0<i.length&&(s=new ic("onChange","change",null,s,c),t.push({event:s,listeners:i}))}var ps=null,ms=null;function y0(t){ah(t,0)}function po(t){var i=ga(t);if(dt(i))return t}function S0(t,i){if(t==="change")return i}var Vf=!1;if(f){var cc;if(f){var uc="oninput"in document;if(!uc){var Gf=document.createElement("div");Gf.setAttribute("oninput","return;"),uc=typeof Gf.oninput=="function"}cc=uc}else cc=!1;Vf=cc&&(!document.documentMode||9<document.documentMode)}function Wf(){ps&&(ps.detachEvent("onpropertychange",Xf),ms=ps=null)}function Xf(t){if(t.propertyName==="value"&&po(ms)){var i=[];Hf(i,ms,t,Qe(t)),$e(y0,i)}}function M0(t,i,s){t==="focusin"?(Wf(),ps=i,ms=s,ps.attachEvent("onpropertychange",Xf)):t==="focusout"&&Wf()}function E0(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return po(ms)}function T0(t,i){if(t==="click")return po(i)}function w0(t,i){if(t==="input"||t==="change")return po(i)}function A0(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var hi=typeof Object.is=="function"?Object.is:A0;function gs(t,i){if(hi(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var s=Object.keys(t),c=Object.keys(i);if(s.length!==c.length)return!1;for(c=0;c<s.length;c++){var d=s[c];if(!h.call(i,d)||!hi(t[d],i[d]))return!1}return!0}function qf(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function jf(t,i){var s=qf(t);t=0;for(var c;s;){if(s.nodeType===3){if(c=t+s.textContent.length,t<=i&&c>=i)return{node:s,offset:i-t};t=c}e:{for(;s;){if(s.nextSibling){s=s.nextSibling;break e}s=s.parentNode}s=void 0}s=qf(s)}}function Kf(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?Kf(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function Yf(){for(var t=window,i=Ht();i instanceof t.HTMLIFrameElement;){try{var s=typeof i.contentWindow.location.href=="string"}catch{s=!1}if(s)t=i.contentWindow;else break;i=Ht(t.document)}return i}function dc(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}function b0(t){var i=Yf(),s=t.focusedElem,c=t.selectionRange;if(i!==s&&s&&s.ownerDocument&&Kf(s.ownerDocument.documentElement,s)){if(c!==null&&dc(s)){if(i=c.start,t=c.end,t===void 0&&(t=i),"selectionStart"in s)s.selectionStart=i,s.selectionEnd=Math.min(t,s.value.length);else if(t=(i=s.ownerDocument||document)&&i.defaultView||window,t.getSelection){t=t.getSelection();var d=s.textContent.length,p=Math.min(c.start,d);c=c.end===void 0?p:Math.min(c.end,d),!t.extend&&p>c&&(d=c,c=p,p=d),d=jf(s,p);var T=jf(s,c);d&&T&&(t.rangeCount!==1||t.anchorNode!==d.node||t.anchorOffset!==d.offset||t.focusNode!==T.node||t.focusOffset!==T.offset)&&(i=i.createRange(),i.setStart(d.node,d.offset),t.removeAllRanges(),p>c?(t.addRange(i),t.extend(T.node,T.offset)):(i.setEnd(T.node,T.offset),t.addRange(i)))}}for(i=[],t=s;t=t.parentNode;)t.nodeType===1&&i.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof s.focus=="function"&&s.focus(),s=0;s<i.length;s++)t=i[s],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var C0=f&&"documentMode"in document&&11>=document.documentMode,fa=null,fc=null,vs=null,hc=!1;function $f(t,i,s){var c=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;hc||fa==null||fa!==Ht(c)||(c=fa,"selectionStart"in c&&dc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),vs&&gs(vs,c)||(vs=c,c=_o(fc,"onSelect"),0<c.length&&(i=new ic("onSelect","select",null,i,s),t.push({event:i,listeners:c}),i.target=fa)))}function mo(t,i){var s={};return s[t.toLowerCase()]=i.toLowerCase(),s["Webkit"+t]="webkit"+i,s["Moz"+t]="moz"+i,s}var ha={animationend:mo("Animation","AnimationEnd"),animationiteration:mo("Animation","AnimationIteration"),animationstart:mo("Animation","AnimationStart"),transitionend:mo("Transition","TransitionEnd")},pc={},Zf={};f&&(Zf=document.createElement("div").style,"AnimationEvent"in window||(delete ha.animationend.animation,delete ha.animationiteration.animation,delete ha.animationstart.animation),"TransitionEvent"in window||delete ha.transitionend.transition);function go(t){if(pc[t])return pc[t];if(!ha[t])return t;var i=ha[t],s;for(s in i)if(i.hasOwnProperty(s)&&s in Zf)return pc[t]=i[s];return t}var Jf=go("animationend"),Qf=go("animationiteration"),eh=go("animationstart"),th=go("transitionend"),nh=new Map,ih="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function cr(t,i){nh.set(t,i),l(i,[t])}for(var mc=0;mc<ih.length;mc++){var gc=ih[mc],R0=gc.toLowerCase(),P0=gc[0].toUpperCase()+gc.slice(1);cr(R0,"on"+P0)}cr(Jf,"onAnimationEnd"),cr(Qf,"onAnimationIteration"),cr(eh,"onAnimationStart"),cr("dblclick","onDoubleClick"),cr("focusin","onFocus"),cr("focusout","onBlur"),cr(th,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var _s="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),L0=new Set("cancel close invalid load scroll toggle".split(" ").concat(_s));function rh(t,i,s){var c=t.type||"unknown-event";t.currentTarget=s,io(c,i,void 0,t),t.currentTarget=null}function ah(t,i){i=(i&4)!==0;for(var s=0;s<t.length;s++){var c=t[s],d=c.event;c=c.listeners;e:{var p=void 0;if(i)for(var T=c.length-1;0<=T;T--){var k=c[T],G=k.instance,de=k.currentTarget;if(k=k.listener,G!==p&&d.isPropagationStopped())break e;rh(d,k,de),p=G}else for(T=0;T<c.length;T++){if(k=c[T],G=k.instance,de=k.currentTarget,k=k.listener,G!==p&&d.isPropagationStopped())break e;rh(d,k,de),p=G}}}if(Dr)throw t=Ur,Dr=!1,Ur=null,t}function Wt(t,i){var s=i[Tc];s===void 0&&(s=i[Tc]=new Set);var c=t+"__bubble";s.has(c)||(sh(i,t,2,!1),s.add(c))}function vc(t,i,s){var c=0;i&&(c|=4),sh(s,t,c,i)}var vo="_reactListening"+Math.random().toString(36).slice(2);function xs(t){if(!t[vo]){t[vo]=!0,r.forEach(function(s){s!=="selectionchange"&&(L0.has(s)||vc(s,!1,t),vc(s,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[vo]||(i[vo]=!0,vc("selectionchange",!1,i))}}function sh(t,i,s,c){switch(Rf(i)){case 1:var d=Xg;break;case 4:d=qg;break;default:d=ec}s=d.bind(null,i,s,t),d=void 0,!bt||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(d=!0),c?d!==void 0?t.addEventListener(i,s,{capture:!0,passive:d}):t.addEventListener(i,s,!0):d!==void 0?t.addEventListener(i,s,{passive:d}):t.addEventListener(i,s,!1)}function _c(t,i,s,c,d){var p=c;if((i&1)===0&&(i&2)===0&&c!==null)e:for(;;){if(c===null)return;var T=c.tag;if(T===3||T===4){var k=c.stateNode.containerInfo;if(k===d||k.nodeType===8&&k.parentNode===d)break;if(T===4)for(T=c.return;T!==null;){var G=T.tag;if((G===3||G===4)&&(G=T.stateNode.containerInfo,G===d||G.nodeType===8&&G.parentNode===d))return;T=T.return}for(;k!==null;){if(T=Or(k),T===null)return;if(G=T.tag,G===5||G===6){c=p=T;continue e}k=k.parentNode}}c=c.return}$e(function(){var de=p,Se=Qe(s),Ee=[];e:{var ye=nh.get(t);if(ye!==void 0){var Ge=ic,Ye=t;switch(t){case"keypress":if(uo(s)===0)break e;case"keydown":case"keyup":Ge=o0;break;case"focusin":Ye="focus",Ge=sc;break;case"focusout":Ye="blur",Ge=sc;break;case"beforeblur":case"afterblur":Ge=sc;break;case"click":if(s.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Ge=Nf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Ge=Yg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Ge=u0;break;case Jf:case Qf:case eh:Ge=Jg;break;case th:Ge=f0;break;case"scroll":Ge=jg;break;case"wheel":Ge=p0;break;case"copy":case"cut":case"paste":Ge=e0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Ge=Df}var Ze=(i&4)!==0,rn=!Ze&&t==="scroll",se=Ze?ye!==null?ye+"Capture":null:ye;Ze=[];for(var Z=de,ce;Z!==null;){ce=Z;var Ae=ce.stateNode;if(ce.tag===5&&Ae!==null&&(ce=Ae,se!==null&&(Ae=Lt(Z,se),Ae!=null&&Ze.push(ys(Z,Ae,ce)))),rn)break;Z=Z.return}0<Ze.length&&(ye=new Ge(ye,Ye,null,s,Se),Ee.push({event:ye,listeners:Ze}))}}if((i&7)===0){e:{if(ye=t==="mouseover"||t==="pointerover",Ge=t==="mouseout"||t==="pointerout",ye&&s!==Pe&&(Ye=s.relatedTarget||s.fromElement)&&(Or(Ye)||Ye[Hi]))break e;if((Ge||ye)&&(ye=Se.window===Se?Se:(ye=Se.ownerDocument)?ye.defaultView||ye.parentWindow:window,Ge?(Ye=s.relatedTarget||s.toElement,Ge=de,Ye=Ye?Or(Ye):null,Ye!==null&&(rn=Ln(Ye),Ye!==rn||Ye.tag!==5&&Ye.tag!==6)&&(Ye=null)):(Ge=null,Ye=de),Ge!==Ye)){if(Ze=Nf,Ae="onMouseLeave",se="onMouseEnter",Z="mouse",(t==="pointerout"||t==="pointerover")&&(Ze=Df,Ae="onPointerLeave",se="onPointerEnter",Z="pointer"),rn=Ge==null?ye:ga(Ge),ce=Ye==null?ye:ga(Ye),ye=new Ze(Ae,Z+"leave",Ge,s,Se),ye.target=rn,ye.relatedTarget=ce,Ae=null,Or(Se)===de&&(Ze=new Ze(se,Z+"enter",Ye,s,Se),Ze.target=ce,Ze.relatedTarget=rn,Ae=Ze),rn=Ae,Ge&&Ye)t:{for(Ze=Ge,se=Ye,Z=0,ce=Ze;ce;ce=pa(ce))Z++;for(ce=0,Ae=se;Ae;Ae=pa(Ae))ce++;for(;0<Z-ce;)Ze=pa(Ze),Z--;for(;0<ce-Z;)se=pa(se),ce--;for(;Z--;){if(Ze===se||se!==null&&Ze===se.alternate)break t;Ze=pa(Ze),se=pa(se)}Ze=null}else Ze=null;Ge!==null&&oh(Ee,ye,Ge,Ze,!1),Ye!==null&&rn!==null&&oh(Ee,rn,Ye,Ze,!0)}}e:{if(ye=de?ga(de):window,Ge=ye.nodeName&&ye.nodeName.toLowerCase(),Ge==="select"||Ge==="input"&&ye.type==="file")var nt=S0;else if(Bf(ye))if(Vf)nt=w0;else{nt=E0;var at=M0}else(Ge=ye.nodeName)&&Ge.toLowerCase()==="input"&&(ye.type==="checkbox"||ye.type==="radio")&&(nt=T0);if(nt&&(nt=nt(t,de))){Hf(Ee,nt,s,Se);break e}at&&at(t,ye,de),t==="focusout"&&(at=ye._wrapperState)&&at.controlled&&ye.type==="number"&&ve(ye,"number",ye.value)}switch(at=de?ga(de):window,t){case"focusin":(Bf(at)||at.contentEditable==="true")&&(fa=at,fc=de,vs=null);break;case"focusout":vs=fc=fa=null;break;case"mousedown":hc=!0;break;case"contextmenu":case"mouseup":case"dragend":hc=!1,$f(Ee,s,Se);break;case"selectionchange":if(C0)break;case"keydown":case"keyup":$f(Ee,s,Se)}var st;if(lc)e:{switch(t){case"compositionstart":var lt="onCompositionStart";break e;case"compositionend":lt="onCompositionEnd";break e;case"compositionupdate":lt="onCompositionUpdate";break e}lt=void 0}else da?Of(t,s)&&(lt="onCompositionEnd"):t==="keydown"&&s.keyCode===229&&(lt="onCompositionStart");lt&&(Uf&&s.locale!=="ko"&&(da||lt!=="onCompositionStart"?lt==="onCompositionEnd"&&da&&(st=Pf()):(lr=Se,nc="value"in lr?lr.value:lr.textContent,da=!0)),at=_o(de,lt),0<at.length&&(lt=new If(lt,t,null,s,Se),Ee.push({event:lt,listeners:at}),st?lt.data=st:(st=zf(s),st!==null&&(lt.data=st)))),(st=g0?v0(t,s):_0(t,s))&&(de=_o(de,"onBeforeInput"),0<de.length&&(Se=new If("onBeforeInput","beforeinput",null,s,Se),Ee.push({event:Se,listeners:de}),Se.data=st))}ah(Ee,i)})}function ys(t,i,s){return{instance:t,listener:i,currentTarget:s}}function _o(t,i){for(var s=i+"Capture",c=[];t!==null;){var d=t,p=d.stateNode;d.tag===5&&p!==null&&(d=p,p=Lt(t,s),p!=null&&c.unshift(ys(t,p,d)),p=Lt(t,i),p!=null&&c.push(ys(t,p,d))),t=t.return}return c}function pa(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function oh(t,i,s,c,d){for(var p=i._reactName,T=[];s!==null&&s!==c;){var k=s,G=k.alternate,de=k.stateNode;if(G!==null&&G===c)break;k.tag===5&&de!==null&&(k=de,d?(G=Lt(s,p),G!=null&&T.unshift(ys(s,G,k))):d||(G=Lt(s,p),G!=null&&T.push(ys(s,G,k)))),s=s.return}T.length!==0&&t.push({event:i,listeners:T})}var N0=/\r\n?/g,I0=/\u0000|\uFFFD/g;function lh(t){return(typeof t=="string"?t:""+t).replace(N0,`
`).replace(I0,"")}function xo(t,i,s){if(i=lh(i),lh(t)!==i&&s)throw Error(n(425))}function yo(){}var xc=null,yc=null;function Sc(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Mc=typeof setTimeout=="function"?setTimeout:void 0,D0=typeof clearTimeout=="function"?clearTimeout:void 0,ch=typeof Promise=="function"?Promise:void 0,U0=typeof queueMicrotask=="function"?queueMicrotask:typeof ch<"u"?function(t){return ch.resolve(null).then(t).catch(k0)}:Mc;function k0(t){setTimeout(function(){throw t})}function Ec(t,i){var s=i,c=0;do{var d=s.nextSibling;if(t.removeChild(s),d&&d.nodeType===8)if(s=d.data,s==="/$"){if(c===0){t.removeChild(d),us(i);return}c--}else s!=="$"&&s!=="$?"&&s!=="$!"||c++;s=d}while(s);us(i)}function ur(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return t}function uh(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var s=t.data;if(s==="$"||s==="$!"||s==="$?"){if(i===0)return t;i--}else s==="/$"&&i++}t=t.previousSibling}return null}var ma=Math.random().toString(36).slice(2),wi="__reactFiber$"+ma,Ss="__reactProps$"+ma,Hi="__reactContainer$"+ma,Tc="__reactEvents$"+ma,F0="__reactListeners$"+ma,O0="__reactHandles$"+ma;function Or(t){var i=t[wi];if(i)return i;for(var s=t.parentNode;s;){if(i=s[Hi]||s[wi]){if(s=i.alternate,i.child!==null||s!==null&&s.child!==null)for(t=uh(t);t!==null;){if(s=t[wi])return s;t=uh(t)}return i}t=s,s=t.parentNode}return null}function Ms(t){return t=t[wi]||t[Hi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ga(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(n(33))}function So(t){return t[Ss]||null}var wc=[],va=-1;function dr(t){return{current:t}}function Xt(t){0>va||(t.current=wc[va],wc[va]=null,va--)}function Gt(t,i){va++,wc[va]=t.current,t.current=i}var fr={},En=dr(fr),kn=dr(!1),zr=fr;function _a(t,i){var s=t.type.contextTypes;if(!s)return fr;var c=t.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===i)return c.__reactInternalMemoizedMaskedChildContext;var d={},p;for(p in s)d[p]=i[p];return c&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=d),d}function Fn(t){return t=t.childContextTypes,t!=null}function Mo(){Xt(kn),Xt(En)}function dh(t,i,s){if(En.current!==fr)throw Error(n(168));Gt(En,i),Gt(kn,s)}function fh(t,i,s){var c=t.stateNode;if(i=i.childContextTypes,typeof c.getChildContext!="function")return s;c=c.getChildContext();for(var d in c)if(!(d in i))throw Error(n(108,le(t)||"Unknown",d));return K({},s,c)}function Eo(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||fr,zr=En.current,Gt(En,t),Gt(kn,kn.current),!0}function hh(t,i,s){var c=t.stateNode;if(!c)throw Error(n(169));s?(t=fh(t,i,zr),c.__reactInternalMemoizedMergedChildContext=t,Xt(kn),Xt(En),Gt(En,t)):Xt(kn),Gt(kn,s)}var Vi=null,To=!1,Ac=!1;function ph(t){Vi===null?Vi=[t]:Vi.push(t)}function z0(t){To=!0,ph(t)}function hr(){if(!Ac&&Vi!==null){Ac=!0;var t=0,i=gt;try{var s=Vi;for(gt=1;t<s.length;t++){var c=s[t];do c=c(!0);while(c!==null)}Vi=null,To=!1}catch(d){throw Vi!==null&&(Vi=Vi.slice(t+1)),Fr(rs,hr),d}finally{gt=i,Ac=!1}}return null}var xa=[],ya=0,wo=null,Ao=0,ti=[],ni=0,Br=null,Gi=1,Wi="";function Hr(t,i){xa[ya++]=Ao,xa[ya++]=wo,wo=t,Ao=i}function mh(t,i,s){ti[ni++]=Gi,ti[ni++]=Wi,ti[ni++]=Br,Br=t;var c=Gi;t=Wi;var d=32-De(c)-1;c&=~(1<<d),s+=1;var p=32-De(i)+d;if(30<p){var T=d-d%5;p=(c&(1<<T)-1).toString(32),c>>=T,d-=T,Gi=1<<32-De(i)+d|s<<d|c,Wi=p+t}else Gi=1<<p|s<<d|c,Wi=t}function bc(t){t.return!==null&&(Hr(t,1),mh(t,1,0))}function Cc(t){for(;t===wo;)wo=xa[--ya],xa[ya]=null,Ao=xa[--ya],xa[ya]=null;for(;t===Br;)Br=ti[--ni],ti[ni]=null,Wi=ti[--ni],ti[ni]=null,Gi=ti[--ni],ti[ni]=null}var Xn=null,qn=null,jt=!1,pi=null;function gh(t,i){var s=si(5,null,null,0);s.elementType="DELETED",s.stateNode=i,s.return=t,i=t.deletions,i===null?(t.deletions=[s],t.flags|=16):i.push(s)}function vh(t,i){switch(t.tag){case 5:var s=t.type;return i=i.nodeType!==1||s.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(t.stateNode=i,Xn=t,qn=ur(i.firstChild),!0):!1;case 6:return i=t.pendingProps===""||i.nodeType!==3?null:i,i!==null?(t.stateNode=i,Xn=t,qn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(s=Br!==null?{id:Gi,overflow:Wi}:null,t.memoizedState={dehydrated:i,treeContext:s,retryLane:1073741824},s=si(18,null,null,0),s.stateNode=i,s.return=t,t.child=s,Xn=t,qn=null,!0):!1;default:return!1}}function Rc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Pc(t){if(jt){var i=qn;if(i){var s=i;if(!vh(t,i)){if(Rc(t))throw Error(n(418));i=ur(s.nextSibling);var c=Xn;i&&vh(t,i)?gh(c,s):(t.flags=t.flags&-4097|2,jt=!1,Xn=t)}}else{if(Rc(t))throw Error(n(418));t.flags=t.flags&-4097|2,jt=!1,Xn=t}}}function _h(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Xn=t}function bo(t){if(t!==Xn)return!1;if(!jt)return _h(t),jt=!0,!1;var i;if((i=t.tag!==3)&&!(i=t.tag!==5)&&(i=t.type,i=i!=="head"&&i!=="body"&&!Sc(t.type,t.memoizedProps)),i&&(i=qn)){if(Rc(t))throw xh(),Error(n(418));for(;i;)gh(t,i),i=ur(i.nextSibling)}if(_h(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(n(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8){var s=t.data;if(s==="/$"){if(i===0){qn=ur(t.nextSibling);break e}i--}else s!=="$"&&s!=="$!"&&s!=="$?"||i++}t=t.nextSibling}qn=null}}else qn=Xn?ur(t.stateNode.nextSibling):null;return!0}function xh(){for(var t=qn;t;)t=ur(t.nextSibling)}function Sa(){qn=Xn=null,jt=!1}function Lc(t){pi===null?pi=[t]:pi.push(t)}var B0=b.ReactCurrentBatchConfig;function Es(t,i,s){if(t=s.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(s._owner){if(s=s._owner,s){if(s.tag!==1)throw Error(n(309));var c=s.stateNode}if(!c)throw Error(n(147,t));var d=c,p=""+t;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===p?i.ref:(i=function(T){var k=d.refs;T===null?delete k[p]:k[p]=T},i._stringRef=p,i)}if(typeof t!="string")throw Error(n(284));if(!s._owner)throw Error(n(290,t))}return t}function Co(t,i){throw t=Object.prototype.toString.call(i),Error(n(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t))}function yh(t){var i=t._init;return i(t._payload)}function Sh(t){function i(se,Z){if(t){var ce=se.deletions;ce===null?(se.deletions=[Z],se.flags|=16):ce.push(Z)}}function s(se,Z){if(!t)return null;for(;Z!==null;)i(se,Z),Z=Z.sibling;return null}function c(se,Z){for(se=new Map;Z!==null;)Z.key!==null?se.set(Z.key,Z):se.set(Z.index,Z),Z=Z.sibling;return se}function d(se,Z){return se=Sr(se,Z),se.index=0,se.sibling=null,se}function p(se,Z,ce){return se.index=ce,t?(ce=se.alternate,ce!==null?(ce=ce.index,ce<Z?(se.flags|=2,Z):ce):(se.flags|=2,Z)):(se.flags|=1048576,Z)}function T(se){return t&&se.alternate===null&&(se.flags|=2),se}function k(se,Z,ce,Ae){return Z===null||Z.tag!==6?(Z=Mu(ce,se.mode,Ae),Z.return=se,Z):(Z=d(Z,ce),Z.return=se,Z)}function G(se,Z,ce,Ae){var nt=ce.type;return nt===U?Se(se,Z,ce.props.children,Ae,ce.key):Z!==null&&(Z.elementType===nt||typeof nt=="object"&&nt!==null&&nt.$$typeof===ae&&yh(nt)===Z.type)?(Ae=d(Z,ce.props),Ae.ref=Es(se,Z,ce),Ae.return=se,Ae):(Ae=Jo(ce.type,ce.key,ce.props,null,se.mode,Ae),Ae.ref=Es(se,Z,ce),Ae.return=se,Ae)}function de(se,Z,ce,Ae){return Z===null||Z.tag!==4||Z.stateNode.containerInfo!==ce.containerInfo||Z.stateNode.implementation!==ce.implementation?(Z=Eu(ce,se.mode,Ae),Z.return=se,Z):(Z=d(Z,ce.children||[]),Z.return=se,Z)}function Se(se,Z,ce,Ae,nt){return Z===null||Z.tag!==7?(Z=Yr(ce,se.mode,Ae,nt),Z.return=se,Z):(Z=d(Z,ce),Z.return=se,Z)}function Ee(se,Z,ce){if(typeof Z=="string"&&Z!==""||typeof Z=="number")return Z=Mu(""+Z,se.mode,ce),Z.return=se,Z;if(typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case L:return ce=Jo(Z.type,Z.key,Z.props,null,se.mode,ce),ce.ref=Es(se,null,Z),ce.return=se,ce;case R:return Z=Eu(Z,se.mode,ce),Z.return=se,Z;case ae:var Ae=Z._init;return Ee(se,Ae(Z._payload),ce)}if(Le(Z)||z(Z))return Z=Yr(Z,se.mode,ce,null),Z.return=se,Z;Co(se,Z)}return null}function ye(se,Z,ce,Ae){var nt=Z!==null?Z.key:null;if(typeof ce=="string"&&ce!==""||typeof ce=="number")return nt!==null?null:k(se,Z,""+ce,Ae);if(typeof ce=="object"&&ce!==null){switch(ce.$$typeof){case L:return ce.key===nt?G(se,Z,ce,Ae):null;case R:return ce.key===nt?de(se,Z,ce,Ae):null;case ae:return nt=ce._init,ye(se,Z,nt(ce._payload),Ae)}if(Le(ce)||z(ce))return nt!==null?null:Se(se,Z,ce,Ae,null);Co(se,ce)}return null}function Ge(se,Z,ce,Ae,nt){if(typeof Ae=="string"&&Ae!==""||typeof Ae=="number")return se=se.get(ce)||null,k(Z,se,""+Ae,nt);if(typeof Ae=="object"&&Ae!==null){switch(Ae.$$typeof){case L:return se=se.get(Ae.key===null?ce:Ae.key)||null,G(Z,se,Ae,nt);case R:return se=se.get(Ae.key===null?ce:Ae.key)||null,de(Z,se,Ae,nt);case ae:var at=Ae._init;return Ge(se,Z,ce,at(Ae._payload),nt)}if(Le(Ae)||z(Ae))return se=se.get(ce)||null,Se(Z,se,Ae,nt,null);Co(Z,Ae)}return null}function Ye(se,Z,ce,Ae){for(var nt=null,at=null,st=Z,lt=Z=0,mn=null;st!==null&&lt<ce.length;lt++){st.index>lt?(mn=st,st=null):mn=st.sibling;var It=ye(se,st,ce[lt],Ae);if(It===null){st===null&&(st=mn);break}t&&st&&It.alternate===null&&i(se,st),Z=p(It,Z,lt),at===null?nt=It:at.sibling=It,at=It,st=mn}if(lt===ce.length)return s(se,st),jt&&Hr(se,lt),nt;if(st===null){for(;lt<ce.length;lt++)st=Ee(se,ce[lt],Ae),st!==null&&(Z=p(st,Z,lt),at===null?nt=st:at.sibling=st,at=st);return jt&&Hr(se,lt),nt}for(st=c(se,st);lt<ce.length;lt++)mn=Ge(st,se,lt,ce[lt],Ae),mn!==null&&(t&&mn.alternate!==null&&st.delete(mn.key===null?lt:mn.key),Z=p(mn,Z,lt),at===null?nt=mn:at.sibling=mn,at=mn);return t&&st.forEach(function(Mr){return i(se,Mr)}),jt&&Hr(se,lt),nt}function Ze(se,Z,ce,Ae){var nt=z(ce);if(typeof nt!="function")throw Error(n(150));if(ce=nt.call(ce),ce==null)throw Error(n(151));for(var at=nt=null,st=Z,lt=Z=0,mn=null,It=ce.next();st!==null&&!It.done;lt++,It=ce.next()){st.index>lt?(mn=st,st=null):mn=st.sibling;var Mr=ye(se,st,It.value,Ae);if(Mr===null){st===null&&(st=mn);break}t&&st&&Mr.alternate===null&&i(se,st),Z=p(Mr,Z,lt),at===null?nt=Mr:at.sibling=Mr,at=Mr,st=mn}if(It.done)return s(se,st),jt&&Hr(se,lt),nt;if(st===null){for(;!It.done;lt++,It=ce.next())It=Ee(se,It.value,Ae),It!==null&&(Z=p(It,Z,lt),at===null?nt=It:at.sibling=It,at=It);return jt&&Hr(se,lt),nt}for(st=c(se,st);!It.done;lt++,It=ce.next())It=Ge(st,se,lt,It.value,Ae),It!==null&&(t&&It.alternate!==null&&st.delete(It.key===null?lt:It.key),Z=p(It,Z,lt),at===null?nt=It:at.sibling=It,at=It);return t&&st.forEach(function(xv){return i(se,xv)}),jt&&Hr(se,lt),nt}function rn(se,Z,ce,Ae){if(typeof ce=="object"&&ce!==null&&ce.type===U&&ce.key===null&&(ce=ce.props.children),typeof ce=="object"&&ce!==null){switch(ce.$$typeof){case L:e:{for(var nt=ce.key,at=Z;at!==null;){if(at.key===nt){if(nt=ce.type,nt===U){if(at.tag===7){s(se,at.sibling),Z=d(at,ce.props.children),Z.return=se,se=Z;break e}}else if(at.elementType===nt||typeof nt=="object"&&nt!==null&&nt.$$typeof===ae&&yh(nt)===at.type){s(se,at.sibling),Z=d(at,ce.props),Z.ref=Es(se,at,ce),Z.return=se,se=Z;break e}s(se,at);break}else i(se,at);at=at.sibling}ce.type===U?(Z=Yr(ce.props.children,se.mode,Ae,ce.key),Z.return=se,se=Z):(Ae=Jo(ce.type,ce.key,ce.props,null,se.mode,Ae),Ae.ref=Es(se,Z,ce),Ae.return=se,se=Ae)}return T(se);case R:e:{for(at=ce.key;Z!==null;){if(Z.key===at)if(Z.tag===4&&Z.stateNode.containerInfo===ce.containerInfo&&Z.stateNode.implementation===ce.implementation){s(se,Z.sibling),Z=d(Z,ce.children||[]),Z.return=se,se=Z;break e}else{s(se,Z);break}else i(se,Z);Z=Z.sibling}Z=Eu(ce,se.mode,Ae),Z.return=se,se=Z}return T(se);case ae:return at=ce._init,rn(se,Z,at(ce._payload),Ae)}if(Le(ce))return Ye(se,Z,ce,Ae);if(z(ce))return Ze(se,Z,ce,Ae);Co(se,ce)}return typeof ce=="string"&&ce!==""||typeof ce=="number"?(ce=""+ce,Z!==null&&Z.tag===6?(s(se,Z.sibling),Z=d(Z,ce),Z.return=se,se=Z):(s(se,Z),Z=Mu(ce,se.mode,Ae),Z.return=se,se=Z),T(se)):s(se,Z)}return rn}var Ma=Sh(!0),Mh=Sh(!1),Ro=dr(null),Po=null,Ea=null,Nc=null;function Ic(){Nc=Ea=Po=null}function Dc(t){var i=Ro.current;Xt(Ro),t._currentValue=i}function Uc(t,i,s){for(;t!==null;){var c=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),t===s)break;t=t.return}}function Ta(t,i){Po=t,Nc=Ea=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&i)!==0&&(On=!0),t.firstContext=null)}function ii(t){var i=t._currentValue;if(Nc!==t)if(t={context:t,memoizedValue:i,next:null},Ea===null){if(Po===null)throw Error(n(308));Ea=t,Po.dependencies={lanes:0,firstContext:t}}else Ea=Ea.next=t;return i}var Vr=null;function kc(t){Vr===null?Vr=[t]:Vr.push(t)}function Eh(t,i,s,c){var d=i.interleaved;return d===null?(s.next=s,kc(i)):(s.next=d.next,d.next=s),i.interleaved=s,Xi(t,c)}function Xi(t,i){t.lanes|=i;var s=t.alternate;for(s!==null&&(s.lanes|=i),s=t,t=t.return;t!==null;)t.childLanes|=i,s=t.alternate,s!==null&&(s.childLanes|=i),s=t,t=t.return;return s.tag===3?s.stateNode:null}var pr=!1;function Fc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Th(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function qi(t,i){return{eventTime:t,lane:i,tag:0,payload:null,callback:null,next:null}}function mr(t,i,s){var c=t.updateQueue;if(c===null)return null;if(c=c.shared,(Ct&2)!==0){var d=c.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),c.pending=i,Xi(t,s)}return d=c.interleaved,d===null?(i.next=i,kc(c)):(i.next=d.next,d.next=i),c.interleaved=i,Xi(t,s)}function Lo(t,i,s){if(i=i.updateQueue,i!==null&&(i=i.shared,(s&4194240)!==0)){var c=i.lanes;c&=t.pendingLanes,s|=c,i.lanes=s,Mn(t,s)}}function wh(t,i){var s=t.updateQueue,c=t.alternate;if(c!==null&&(c=c.updateQueue,s===c)){var d=null,p=null;if(s=s.firstBaseUpdate,s!==null){do{var T={eventTime:s.eventTime,lane:s.lane,tag:s.tag,payload:s.payload,callback:s.callback,next:null};p===null?d=p=T:p=p.next=T,s=s.next}while(s!==null);p===null?d=p=i:p=p.next=i}else d=p=i;s={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:p,shared:c.shared,effects:c.effects},t.updateQueue=s;return}t=s.lastBaseUpdate,t===null?s.firstBaseUpdate=i:t.next=i,s.lastBaseUpdate=i}function No(t,i,s,c){var d=t.updateQueue;pr=!1;var p=d.firstBaseUpdate,T=d.lastBaseUpdate,k=d.shared.pending;if(k!==null){d.shared.pending=null;var G=k,de=G.next;G.next=null,T===null?p=de:T.next=de,T=G;var Se=t.alternate;Se!==null&&(Se=Se.updateQueue,k=Se.lastBaseUpdate,k!==T&&(k===null?Se.firstBaseUpdate=de:k.next=de,Se.lastBaseUpdate=G))}if(p!==null){var Ee=d.baseState;T=0,Se=de=G=null,k=p;do{var ye=k.lane,Ge=k.eventTime;if((c&ye)===ye){Se!==null&&(Se=Se.next={eventTime:Ge,lane:0,tag:k.tag,payload:k.payload,callback:k.callback,next:null});e:{var Ye=t,Ze=k;switch(ye=i,Ge=s,Ze.tag){case 1:if(Ye=Ze.payload,typeof Ye=="function"){Ee=Ye.call(Ge,Ee,ye);break e}Ee=Ye;break e;case 3:Ye.flags=Ye.flags&-65537|128;case 0:if(Ye=Ze.payload,ye=typeof Ye=="function"?Ye.call(Ge,Ee,ye):Ye,ye==null)break e;Ee=K({},Ee,ye);break e;case 2:pr=!0}}k.callback!==null&&k.lane!==0&&(t.flags|=64,ye=d.effects,ye===null?d.effects=[k]:ye.push(k))}else Ge={eventTime:Ge,lane:ye,tag:k.tag,payload:k.payload,callback:k.callback,next:null},Se===null?(de=Se=Ge,G=Ee):Se=Se.next=Ge,T|=ye;if(k=k.next,k===null){if(k=d.shared.pending,k===null)break;ye=k,k=ye.next,ye.next=null,d.lastBaseUpdate=ye,d.shared.pending=null}}while(!0);if(Se===null&&(G=Ee),d.baseState=G,d.firstBaseUpdate=de,d.lastBaseUpdate=Se,i=d.shared.interleaved,i!==null){d=i;do T|=d.lane,d=d.next;while(d!==i)}else p===null&&(d.shared.lanes=0);Xr|=T,t.lanes=T,t.memoizedState=Ee}}function Ah(t,i,s){if(t=i.effects,i.effects=null,t!==null)for(i=0;i<t.length;i++){var c=t[i],d=c.callback;if(d!==null){if(c.callback=null,c=s,typeof d!="function")throw Error(n(191,d));d.call(c)}}}var Ts={},Ai=dr(Ts),ws=dr(Ts),As=dr(Ts);function Gr(t){if(t===Ts)throw Error(n(174));return t}function Oc(t,i){switch(Gt(As,i),Gt(ws,t),Gt(Ai,Ts),t=i.nodeType,t){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:S(null,"");break;default:t=t===8?i.parentNode:i,i=t.namespaceURI||null,t=t.tagName,i=S(i,t)}Xt(Ai),Gt(Ai,i)}function wa(){Xt(Ai),Xt(ws),Xt(As)}function bh(t){Gr(As.current);var i=Gr(Ai.current),s=S(i,t.type);i!==s&&(Gt(ws,t),Gt(Ai,s))}function zc(t){ws.current===t&&(Xt(Ai),Xt(ws))}var $t=dr(0);function Io(t){for(var i=t;i!==null;){if(i.tag===13){var s=i.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||s.data==="$?"||s.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Bc=[];function Hc(){for(var t=0;t<Bc.length;t++)Bc[t]._workInProgressVersionPrimary=null;Bc.length=0}var Do=b.ReactCurrentDispatcher,Vc=b.ReactCurrentBatchConfig,Wr=0,Zt=null,cn=null,hn=null,Uo=!1,bs=!1,Cs=0,H0=0;function Tn(){throw Error(n(321))}function Gc(t,i){if(i===null)return!1;for(var s=0;s<i.length&&s<t.length;s++)if(!hi(t[s],i[s]))return!1;return!0}function Wc(t,i,s,c,d,p){if(Wr=p,Zt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Do.current=t===null||t.memoizedState===null?X0:q0,t=s(c,d),bs){p=0;do{if(bs=!1,Cs=0,25<=p)throw Error(n(301));p+=1,hn=cn=null,i.updateQueue=null,Do.current=j0,t=s(c,d)}while(bs)}if(Do.current=Oo,i=cn!==null&&cn.next!==null,Wr=0,hn=cn=Zt=null,Uo=!1,i)throw Error(n(300));return t}function Xc(){var t=Cs!==0;return Cs=0,t}function bi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return hn===null?Zt.memoizedState=hn=t:hn=hn.next=t,hn}function ri(){if(cn===null){var t=Zt.alternate;t=t!==null?t.memoizedState:null}else t=cn.next;var i=hn===null?Zt.memoizedState:hn.next;if(i!==null)hn=i,cn=t;else{if(t===null)throw Error(n(310));cn=t,t={memoizedState:cn.memoizedState,baseState:cn.baseState,baseQueue:cn.baseQueue,queue:cn.queue,next:null},hn===null?Zt.memoizedState=hn=t:hn=hn.next=t}return hn}function Rs(t,i){return typeof i=="function"?i(t):i}function qc(t){var i=ri(),s=i.queue;if(s===null)throw Error(n(311));s.lastRenderedReducer=t;var c=cn,d=c.baseQueue,p=s.pending;if(p!==null){if(d!==null){var T=d.next;d.next=p.next,p.next=T}c.baseQueue=d=p,s.pending=null}if(d!==null){p=d.next,c=c.baseState;var k=T=null,G=null,de=p;do{var Se=de.lane;if((Wr&Se)===Se)G!==null&&(G=G.next={lane:0,action:de.action,hasEagerState:de.hasEagerState,eagerState:de.eagerState,next:null}),c=de.hasEagerState?de.eagerState:t(c,de.action);else{var Ee={lane:Se,action:de.action,hasEagerState:de.hasEagerState,eagerState:de.eagerState,next:null};G===null?(k=G=Ee,T=c):G=G.next=Ee,Zt.lanes|=Se,Xr|=Se}de=de.next}while(de!==null&&de!==p);G===null?T=c:G.next=k,hi(c,i.memoizedState)||(On=!0),i.memoizedState=c,i.baseState=T,i.baseQueue=G,s.lastRenderedState=c}if(t=s.interleaved,t!==null){d=t;do p=d.lane,Zt.lanes|=p,Xr|=p,d=d.next;while(d!==t)}else d===null&&(s.lanes=0);return[i.memoizedState,s.dispatch]}function jc(t){var i=ri(),s=i.queue;if(s===null)throw Error(n(311));s.lastRenderedReducer=t;var c=s.dispatch,d=s.pending,p=i.memoizedState;if(d!==null){s.pending=null;var T=d=d.next;do p=t(p,T.action),T=T.next;while(T!==d);hi(p,i.memoizedState)||(On=!0),i.memoizedState=p,i.baseQueue===null&&(i.baseState=p),s.lastRenderedState=p}return[p,c]}function Ch(){}function Rh(t,i){var s=Zt,c=ri(),d=i(),p=!hi(c.memoizedState,d);if(p&&(c.memoizedState=d,On=!0),c=c.queue,Kc(Nh.bind(null,s,c,t),[t]),c.getSnapshot!==i||p||hn!==null&&hn.memoizedState.tag&1){if(s.flags|=2048,Ps(9,Lh.bind(null,s,c,d,i),void 0,null),pn===null)throw Error(n(349));(Wr&30)!==0||Ph(s,i,d)}return d}function Ph(t,i,s){t.flags|=16384,t={getSnapshot:i,value:s},i=Zt.updateQueue,i===null?(i={lastEffect:null,stores:null},Zt.updateQueue=i,i.stores=[t]):(s=i.stores,s===null?i.stores=[t]:s.push(t))}function Lh(t,i,s,c){i.value=s,i.getSnapshot=c,Ih(i)&&Dh(t)}function Nh(t,i,s){return s(function(){Ih(i)&&Dh(t)})}function Ih(t){var i=t.getSnapshot;t=t.value;try{var s=i();return!hi(t,s)}catch{return!0}}function Dh(t){var i=Xi(t,1);i!==null&&_i(i,t,1,-1)}function Uh(t){var i=bi();return typeof t=="function"&&(t=t()),i.memoizedState=i.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Rs,lastRenderedState:t},i.queue=t,t=t.dispatch=W0.bind(null,Zt,t),[i.memoizedState,t]}function Ps(t,i,s,c){return t={tag:t,create:i,destroy:s,deps:c,next:null},i=Zt.updateQueue,i===null?(i={lastEffect:null,stores:null},Zt.updateQueue=i,i.lastEffect=t.next=t):(s=i.lastEffect,s===null?i.lastEffect=t.next=t:(c=s.next,s.next=t,t.next=c,i.lastEffect=t)),t}function kh(){return ri().memoizedState}function ko(t,i,s,c){var d=bi();Zt.flags|=t,d.memoizedState=Ps(1|i,s,void 0,c===void 0?null:c)}function Fo(t,i,s,c){var d=ri();c=c===void 0?null:c;var p=void 0;if(cn!==null){var T=cn.memoizedState;if(p=T.destroy,c!==null&&Gc(c,T.deps)){d.memoizedState=Ps(i,s,p,c);return}}Zt.flags|=t,d.memoizedState=Ps(1|i,s,p,c)}function Fh(t,i){return ko(8390656,8,t,i)}function Kc(t,i){return Fo(2048,8,t,i)}function Oh(t,i){return Fo(4,2,t,i)}function zh(t,i){return Fo(4,4,t,i)}function Bh(t,i){if(typeof i=="function")return t=t(),i(t),function(){i(null)};if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function Hh(t,i,s){return s=s!=null?s.concat([t]):null,Fo(4,4,Bh.bind(null,i,t),s)}function Yc(){}function Vh(t,i){var s=ri();i=i===void 0?null:i;var c=s.memoizedState;return c!==null&&i!==null&&Gc(i,c[1])?c[0]:(s.memoizedState=[t,i],t)}function Gh(t,i){var s=ri();i=i===void 0?null:i;var c=s.memoizedState;return c!==null&&i!==null&&Gc(i,c[1])?c[0]:(t=t(),s.memoizedState=[t,i],t)}function Wh(t,i,s){return(Wr&21)===0?(t.baseState&&(t.baseState=!1,On=!0),t.memoizedState=s):(hi(s,i)||(s=ln(),Zt.lanes|=s,Xr|=s,t.baseState=!0),i)}function V0(t,i){var s=gt;gt=s!==0&&4>s?s:4,t(!0);var c=Vc.transition;Vc.transition={};try{t(!1),i()}finally{gt=s,Vc.transition=c}}function Xh(){return ri().memoizedState}function G0(t,i,s){var c=xr(t);if(s={lane:c,action:s,hasEagerState:!1,eagerState:null,next:null},qh(t))jh(i,s);else if(s=Eh(t,i,s,c),s!==null){var d=In();_i(s,t,c,d),Kh(s,i,c)}}function W0(t,i,s){var c=xr(t),d={lane:c,action:s,hasEagerState:!1,eagerState:null,next:null};if(qh(t))jh(i,d);else{var p=t.alternate;if(t.lanes===0&&(p===null||p.lanes===0)&&(p=i.lastRenderedReducer,p!==null))try{var T=i.lastRenderedState,k=p(T,s);if(d.hasEagerState=!0,d.eagerState=k,hi(k,T)){var G=i.interleaved;G===null?(d.next=d,kc(i)):(d.next=G.next,G.next=d),i.interleaved=d;return}}catch{}finally{}s=Eh(t,i,d,c),s!==null&&(d=In(),_i(s,t,c,d),Kh(s,i,c))}}function qh(t){var i=t.alternate;return t===Zt||i!==null&&i===Zt}function jh(t,i){bs=Uo=!0;var s=t.pending;s===null?i.next=i:(i.next=s.next,s.next=i),t.pending=i}function Kh(t,i,s){if((s&4194240)!==0){var c=i.lanes;c&=t.pendingLanes,s|=c,i.lanes=s,Mn(t,s)}}var Oo={readContext:ii,useCallback:Tn,useContext:Tn,useEffect:Tn,useImperativeHandle:Tn,useInsertionEffect:Tn,useLayoutEffect:Tn,useMemo:Tn,useReducer:Tn,useRef:Tn,useState:Tn,useDebugValue:Tn,useDeferredValue:Tn,useTransition:Tn,useMutableSource:Tn,useSyncExternalStore:Tn,useId:Tn,unstable_isNewReconciler:!1},X0={readContext:ii,useCallback:function(t,i){return bi().memoizedState=[t,i===void 0?null:i],t},useContext:ii,useEffect:Fh,useImperativeHandle:function(t,i,s){return s=s!=null?s.concat([t]):null,ko(4194308,4,Bh.bind(null,i,t),s)},useLayoutEffect:function(t,i){return ko(4194308,4,t,i)},useInsertionEffect:function(t,i){return ko(4,2,t,i)},useMemo:function(t,i){var s=bi();return i=i===void 0?null:i,t=t(),s.memoizedState=[t,i],t},useReducer:function(t,i,s){var c=bi();return i=s!==void 0?s(i):i,c.memoizedState=c.baseState=i,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},c.queue=t,t=t.dispatch=G0.bind(null,Zt,t),[c.memoizedState,t]},useRef:function(t){var i=bi();return t={current:t},i.memoizedState=t},useState:Uh,useDebugValue:Yc,useDeferredValue:function(t){return bi().memoizedState=t},useTransition:function(){var t=Uh(!1),i=t[0];return t=V0.bind(null,t[1]),bi().memoizedState=t,[i,t]},useMutableSource:function(){},useSyncExternalStore:function(t,i,s){var c=Zt,d=bi();if(jt){if(s===void 0)throw Error(n(407));s=s()}else{if(s=i(),pn===null)throw Error(n(349));(Wr&30)!==0||Ph(c,i,s)}d.memoizedState=s;var p={value:s,getSnapshot:i};return d.queue=p,Fh(Nh.bind(null,c,p,t),[t]),c.flags|=2048,Ps(9,Lh.bind(null,c,p,s,i),void 0,null),s},useId:function(){var t=bi(),i=pn.identifierPrefix;if(jt){var s=Wi,c=Gi;s=(c&~(1<<32-De(c)-1)).toString(32)+s,i=":"+i+"R"+s,s=Cs++,0<s&&(i+="H"+s.toString(32)),i+=":"}else s=H0++,i=":"+i+"r"+s.toString(32)+":";return t.memoizedState=i},unstable_isNewReconciler:!1},q0={readContext:ii,useCallback:Vh,useContext:ii,useEffect:Kc,useImperativeHandle:Hh,useInsertionEffect:Oh,useLayoutEffect:zh,useMemo:Gh,useReducer:qc,useRef:kh,useState:function(){return qc(Rs)},useDebugValue:Yc,useDeferredValue:function(t){var i=ri();return Wh(i,cn.memoizedState,t)},useTransition:function(){var t=qc(Rs)[0],i=ri().memoizedState;return[t,i]},useMutableSource:Ch,useSyncExternalStore:Rh,useId:Xh,unstable_isNewReconciler:!1},j0={readContext:ii,useCallback:Vh,useContext:ii,useEffect:Kc,useImperativeHandle:Hh,useInsertionEffect:Oh,useLayoutEffect:zh,useMemo:Gh,useReducer:jc,useRef:kh,useState:function(){return jc(Rs)},useDebugValue:Yc,useDeferredValue:function(t){var i=ri();return cn===null?i.memoizedState=t:Wh(i,cn.memoizedState,t)},useTransition:function(){var t=jc(Rs)[0],i=ri().memoizedState;return[t,i]},useMutableSource:Ch,useSyncExternalStore:Rh,useId:Xh,unstable_isNewReconciler:!1};function mi(t,i){if(t&&t.defaultProps){i=K({},i),t=t.defaultProps;for(var s in t)i[s]===void 0&&(i[s]=t[s]);return i}return i}function $c(t,i,s,c){i=t.memoizedState,s=s(c,i),s=s==null?i:K({},i,s),t.memoizedState=s,t.lanes===0&&(t.updateQueue.baseState=s)}var zo={isMounted:function(t){return(t=t._reactInternals)?Ln(t)===t:!1},enqueueSetState:function(t,i,s){t=t._reactInternals;var c=In(),d=xr(t),p=qi(c,d);p.payload=i,s!=null&&(p.callback=s),i=mr(t,p,d),i!==null&&(_i(i,t,d,c),Lo(i,t,d))},enqueueReplaceState:function(t,i,s){t=t._reactInternals;var c=In(),d=xr(t),p=qi(c,d);p.tag=1,p.payload=i,s!=null&&(p.callback=s),i=mr(t,p,d),i!==null&&(_i(i,t,d,c),Lo(i,t,d))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var s=In(),c=xr(t),d=qi(s,c);d.tag=2,i!=null&&(d.callback=i),i=mr(t,d,c),i!==null&&(_i(i,t,c,s),Lo(i,t,c))}};function Yh(t,i,s,c,d,p,T){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(c,p,T):i.prototype&&i.prototype.isPureReactComponent?!gs(s,c)||!gs(d,p):!0}function $h(t,i,s){var c=!1,d=fr,p=i.contextType;return typeof p=="object"&&p!==null?p=ii(p):(d=Fn(i)?zr:En.current,c=i.contextTypes,p=(c=c!=null)?_a(t,d):fr),i=new i(s,p),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=zo,t.stateNode=i,i._reactInternals=t,c&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=d,t.__reactInternalMemoizedMaskedChildContext=p),i}function Zh(t,i,s,c){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(s,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(s,c),i.state!==t&&zo.enqueueReplaceState(i,i.state,null)}function Zc(t,i,s,c){var d=t.stateNode;d.props=s,d.state=t.memoizedState,d.refs={},Fc(t);var p=i.contextType;typeof p=="object"&&p!==null?d.context=ii(p):(p=Fn(i)?zr:En.current,d.context=_a(t,p)),d.state=t.memoizedState,p=i.getDerivedStateFromProps,typeof p=="function"&&($c(t,i,p,s),d.state=t.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(i=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),i!==d.state&&zo.enqueueReplaceState(d,d.state,null),No(t,s,d,c),d.state=t.memoizedState),typeof d.componentDidMount=="function"&&(t.flags|=4194308)}function Aa(t,i){try{var s="",c=i;do s+=Ue(c),c=c.return;while(c);var d=s}catch(p){d=`
Error generating stack: `+p.message+`
`+p.stack}return{value:t,source:i,stack:d,digest:null}}function Jc(t,i,s){return{value:t,source:null,stack:s??null,digest:i??null}}function Qc(t,i){try{console.error(i.value)}catch(s){setTimeout(function(){throw s})}}var K0=typeof WeakMap=="function"?WeakMap:Map;function Jh(t,i,s){s=qi(-1,s),s.tag=3,s.payload={element:null};var c=i.value;return s.callback=function(){qo||(qo=!0,pu=c),Qc(t,i)},s}function Qh(t,i,s){s=qi(-1,s),s.tag=3;var c=t.type.getDerivedStateFromError;if(typeof c=="function"){var d=i.value;s.payload=function(){return c(d)},s.callback=function(){Qc(t,i)}}var p=t.stateNode;return p!==null&&typeof p.componentDidCatch=="function"&&(s.callback=function(){Qc(t,i),typeof c!="function"&&(vr===null?vr=new Set([this]):vr.add(this));var T=i.stack;this.componentDidCatch(i.value,{componentStack:T!==null?T:""})}),s}function ep(t,i,s){var c=t.pingCache;if(c===null){c=t.pingCache=new K0;var d=new Set;c.set(i,d)}else d=c.get(i),d===void 0&&(d=new Set,c.set(i,d));d.has(s)||(d.add(s),t=lv.bind(null,t,i,s),i.then(t,t))}function tp(t){do{var i;if((i=t.tag===13)&&(i=t.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return t;t=t.return}while(t!==null);return null}function np(t,i,s,c,d){return(t.mode&1)===0?(t===i?t.flags|=65536:(t.flags|=128,s.flags|=131072,s.flags&=-52805,s.tag===1&&(s.alternate===null?s.tag=17:(i=qi(-1,1),i.tag=2,mr(s,i,1))),s.lanes|=1),t):(t.flags|=65536,t.lanes=d,t)}var Y0=b.ReactCurrentOwner,On=!1;function Nn(t,i,s,c){i.child=t===null?Mh(i,null,s,c):Ma(i,t.child,s,c)}function ip(t,i,s,c,d){s=s.render;var p=i.ref;return Ta(i,d),c=Wc(t,i,s,c,p,d),s=Xc(),t!==null&&!On?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~d,ji(t,i,d)):(jt&&s&&bc(i),i.flags|=1,Nn(t,i,c,d),i.child)}function rp(t,i,s,c,d){if(t===null){var p=s.type;return typeof p=="function"&&!Su(p)&&p.defaultProps===void 0&&s.compare===null&&s.defaultProps===void 0?(i.tag=15,i.type=p,ap(t,i,p,c,d)):(t=Jo(s.type,null,c,i,i.mode,d),t.ref=i.ref,t.return=i,i.child=t)}if(p=t.child,(t.lanes&d)===0){var T=p.memoizedProps;if(s=s.compare,s=s!==null?s:gs,s(T,c)&&t.ref===i.ref)return ji(t,i,d)}return i.flags|=1,t=Sr(p,c),t.ref=i.ref,t.return=i,i.child=t}function ap(t,i,s,c,d){if(t!==null){var p=t.memoizedProps;if(gs(p,c)&&t.ref===i.ref)if(On=!1,i.pendingProps=c=p,(t.lanes&d)!==0)(t.flags&131072)!==0&&(On=!0);else return i.lanes=t.lanes,ji(t,i,d)}return eu(t,i,s,c,d)}function sp(t,i,s){var c=i.pendingProps,d=c.children,p=t!==null?t.memoizedState:null;if(c.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Gt(Ca,jn),jn|=s;else{if((s&1073741824)===0)return t=p!==null?p.baseLanes|s:s,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:t,cachePool:null,transitions:null},i.updateQueue=null,Gt(Ca,jn),jn|=t,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=p!==null?p.baseLanes:s,Gt(Ca,jn),jn|=c}else p!==null?(c=p.baseLanes|s,i.memoizedState=null):c=s,Gt(Ca,jn),jn|=c;return Nn(t,i,d,s),i.child}function op(t,i){var s=i.ref;(t===null&&s!==null||t!==null&&t.ref!==s)&&(i.flags|=512,i.flags|=2097152)}function eu(t,i,s,c,d){var p=Fn(s)?zr:En.current;return p=_a(i,p),Ta(i,d),s=Wc(t,i,s,c,p,d),c=Xc(),t!==null&&!On?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~d,ji(t,i,d)):(jt&&c&&bc(i),i.flags|=1,Nn(t,i,s,d),i.child)}function lp(t,i,s,c,d){if(Fn(s)){var p=!0;Eo(i)}else p=!1;if(Ta(i,d),i.stateNode===null)Ho(t,i),$h(i,s,c),Zc(i,s,c,d),c=!0;else if(t===null){var T=i.stateNode,k=i.memoizedProps;T.props=k;var G=T.context,de=s.contextType;typeof de=="object"&&de!==null?de=ii(de):(de=Fn(s)?zr:En.current,de=_a(i,de));var Se=s.getDerivedStateFromProps,Ee=typeof Se=="function"||typeof T.getSnapshotBeforeUpdate=="function";Ee||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(k!==c||G!==de)&&Zh(i,T,c,de),pr=!1;var ye=i.memoizedState;T.state=ye,No(i,c,T,d),G=i.memoizedState,k!==c||ye!==G||kn.current||pr?(typeof Se=="function"&&($c(i,s,Se,c),G=i.memoizedState),(k=pr||Yh(i,s,k,c,ye,G,de))?(Ee||typeof T.UNSAFE_componentWillMount!="function"&&typeof T.componentWillMount!="function"||(typeof T.componentWillMount=="function"&&T.componentWillMount(),typeof T.UNSAFE_componentWillMount=="function"&&T.UNSAFE_componentWillMount()),typeof T.componentDidMount=="function"&&(i.flags|=4194308)):(typeof T.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=G),T.props=c,T.state=G,T.context=de,c=k):(typeof T.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{T=i.stateNode,Th(t,i),k=i.memoizedProps,de=i.type===i.elementType?k:mi(i.type,k),T.props=de,Ee=i.pendingProps,ye=T.context,G=s.contextType,typeof G=="object"&&G!==null?G=ii(G):(G=Fn(s)?zr:En.current,G=_a(i,G));var Ge=s.getDerivedStateFromProps;(Se=typeof Ge=="function"||typeof T.getSnapshotBeforeUpdate=="function")||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(k!==Ee||ye!==G)&&Zh(i,T,c,G),pr=!1,ye=i.memoizedState,T.state=ye,No(i,c,T,d);var Ye=i.memoizedState;k!==Ee||ye!==Ye||kn.current||pr?(typeof Ge=="function"&&($c(i,s,Ge,c),Ye=i.memoizedState),(de=pr||Yh(i,s,de,c,ye,Ye,G)||!1)?(Se||typeof T.UNSAFE_componentWillUpdate!="function"&&typeof T.componentWillUpdate!="function"||(typeof T.componentWillUpdate=="function"&&T.componentWillUpdate(c,Ye,G),typeof T.UNSAFE_componentWillUpdate=="function"&&T.UNSAFE_componentWillUpdate(c,Ye,G)),typeof T.componentDidUpdate=="function"&&(i.flags|=4),typeof T.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof T.componentDidUpdate!="function"||k===t.memoizedProps&&ye===t.memoizedState||(i.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||k===t.memoizedProps&&ye===t.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=Ye),T.props=c,T.state=Ye,T.context=G,c=de):(typeof T.componentDidUpdate!="function"||k===t.memoizedProps&&ye===t.memoizedState||(i.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||k===t.memoizedProps&&ye===t.memoizedState||(i.flags|=1024),c=!1)}return tu(t,i,s,c,p,d)}function tu(t,i,s,c,d,p){op(t,i);var T=(i.flags&128)!==0;if(!c&&!T)return d&&hh(i,s,!1),ji(t,i,p);c=i.stateNode,Y0.current=i;var k=T&&typeof s.getDerivedStateFromError!="function"?null:c.render();return i.flags|=1,t!==null&&T?(i.child=Ma(i,t.child,null,p),i.child=Ma(i,null,k,p)):Nn(t,i,k,p),i.memoizedState=c.state,d&&hh(i,s,!0),i.child}function cp(t){var i=t.stateNode;i.pendingContext?dh(t,i.pendingContext,i.pendingContext!==i.context):i.context&&dh(t,i.context,!1),Oc(t,i.containerInfo)}function up(t,i,s,c,d){return Sa(),Lc(d),i.flags|=256,Nn(t,i,s,c),i.child}var nu={dehydrated:null,treeContext:null,retryLane:0};function iu(t){return{baseLanes:t,cachePool:null,transitions:null}}function dp(t,i,s){var c=i.pendingProps,d=$t.current,p=!1,T=(i.flags&128)!==0,k;if((k=T)||(k=t!==null&&t.memoizedState===null?!1:(d&2)!==0),k?(p=!0,i.flags&=-129):(t===null||t.memoizedState!==null)&&(d|=1),Gt($t,d&1),t===null)return Pc(i),t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((i.mode&1)===0?i.lanes=1:t.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(T=c.children,t=c.fallback,p?(c=i.mode,p=i.child,T={mode:"hidden",children:T},(c&1)===0&&p!==null?(p.childLanes=0,p.pendingProps=T):p=Qo(T,c,0,null),t=Yr(t,c,s,null),p.return=i,t.return=i,p.sibling=t,i.child=p,i.child.memoizedState=iu(s),i.memoizedState=nu,t):ru(i,T));if(d=t.memoizedState,d!==null&&(k=d.dehydrated,k!==null))return $0(t,i,T,c,k,d,s);if(p){p=c.fallback,T=i.mode,d=t.child,k=d.sibling;var G={mode:"hidden",children:c.children};return(T&1)===0&&i.child!==d?(c=i.child,c.childLanes=0,c.pendingProps=G,i.deletions=null):(c=Sr(d,G),c.subtreeFlags=d.subtreeFlags&14680064),k!==null?p=Sr(k,p):(p=Yr(p,T,s,null),p.flags|=2),p.return=i,c.return=i,c.sibling=p,i.child=c,c=p,p=i.child,T=t.child.memoizedState,T=T===null?iu(s):{baseLanes:T.baseLanes|s,cachePool:null,transitions:T.transitions},p.memoizedState=T,p.childLanes=t.childLanes&~s,i.memoizedState=nu,c}return p=t.child,t=p.sibling,c=Sr(p,{mode:"visible",children:c.children}),(i.mode&1)===0&&(c.lanes=s),c.return=i,c.sibling=null,t!==null&&(s=i.deletions,s===null?(i.deletions=[t],i.flags|=16):s.push(t)),i.child=c,i.memoizedState=null,c}function ru(t,i){return i=Qo({mode:"visible",children:i},t.mode,0,null),i.return=t,t.child=i}function Bo(t,i,s,c){return c!==null&&Lc(c),Ma(i,t.child,null,s),t=ru(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function $0(t,i,s,c,d,p,T){if(s)return i.flags&256?(i.flags&=-257,c=Jc(Error(n(422))),Bo(t,i,T,c)):i.memoizedState!==null?(i.child=t.child,i.flags|=128,null):(p=c.fallback,d=i.mode,c=Qo({mode:"visible",children:c.children},d,0,null),p=Yr(p,d,T,null),p.flags|=2,c.return=i,p.return=i,c.sibling=p,i.child=c,(i.mode&1)!==0&&Ma(i,t.child,null,T),i.child.memoizedState=iu(T),i.memoizedState=nu,p);if((i.mode&1)===0)return Bo(t,i,T,null);if(d.data==="$!"){if(c=d.nextSibling&&d.nextSibling.dataset,c)var k=c.dgst;return c=k,p=Error(n(419)),c=Jc(p,c,void 0),Bo(t,i,T,c)}if(k=(T&t.childLanes)!==0,On||k){if(c=pn,c!==null){switch(T&-T){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(c.suspendedLanes|T))!==0?0:d,d!==0&&d!==p.retryLane&&(p.retryLane=d,Xi(t,d),_i(c,t,d,-1))}return yu(),c=Jc(Error(n(421))),Bo(t,i,T,c)}return d.data==="$?"?(i.flags|=128,i.child=t.child,i=cv.bind(null,t),d._reactRetry=i,null):(t=p.treeContext,qn=ur(d.nextSibling),Xn=i,jt=!0,pi=null,t!==null&&(ti[ni++]=Gi,ti[ni++]=Wi,ti[ni++]=Br,Gi=t.id,Wi=t.overflow,Br=i),i=ru(i,c.children),i.flags|=4096,i)}function fp(t,i,s){t.lanes|=i;var c=t.alternate;c!==null&&(c.lanes|=i),Uc(t.return,i,s)}function au(t,i,s,c,d){var p=t.memoizedState;p===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:s,tailMode:d}:(p.isBackwards=i,p.rendering=null,p.renderingStartTime=0,p.last=c,p.tail=s,p.tailMode=d)}function hp(t,i,s){var c=i.pendingProps,d=c.revealOrder,p=c.tail;if(Nn(t,i,c.children,s),c=$t.current,(c&2)!==0)c=c&1|2,i.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&fp(t,s,i);else if(t.tag===19)fp(t,s,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}c&=1}if(Gt($t,c),(i.mode&1)===0)i.memoizedState=null;else switch(d){case"forwards":for(s=i.child,d=null;s!==null;)t=s.alternate,t!==null&&Io(t)===null&&(d=s),s=s.sibling;s=d,s===null?(d=i.child,i.child=null):(d=s.sibling,s.sibling=null),au(i,!1,d,s,p);break;case"backwards":for(s=null,d=i.child,i.child=null;d!==null;){if(t=d.alternate,t!==null&&Io(t)===null){i.child=d;break}t=d.sibling,d.sibling=s,s=d,d=t}au(i,!0,s,null,p);break;case"together":au(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Ho(t,i){(i.mode&1)===0&&t!==null&&(t.alternate=null,i.alternate=null,i.flags|=2)}function ji(t,i,s){if(t!==null&&(i.dependencies=t.dependencies),Xr|=i.lanes,(s&i.childLanes)===0)return null;if(t!==null&&i.child!==t.child)throw Error(n(153));if(i.child!==null){for(t=i.child,s=Sr(t,t.pendingProps),i.child=s,s.return=i;t.sibling!==null;)t=t.sibling,s=s.sibling=Sr(t,t.pendingProps),s.return=i;s.sibling=null}return i.child}function Z0(t,i,s){switch(i.tag){case 3:cp(i),Sa();break;case 5:bh(i);break;case 1:Fn(i.type)&&Eo(i);break;case 4:Oc(i,i.stateNode.containerInfo);break;case 10:var c=i.type._context,d=i.memoizedProps.value;Gt(Ro,c._currentValue),c._currentValue=d;break;case 13:if(c=i.memoizedState,c!==null)return c.dehydrated!==null?(Gt($t,$t.current&1),i.flags|=128,null):(s&i.child.childLanes)!==0?dp(t,i,s):(Gt($t,$t.current&1),t=ji(t,i,s),t!==null?t.sibling:null);Gt($t,$t.current&1);break;case 19:if(c=(s&i.childLanes)!==0,(t.flags&128)!==0){if(c)return hp(t,i,s);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),Gt($t,$t.current),c)break;return null;case 22:case 23:return i.lanes=0,sp(t,i,s)}return ji(t,i,s)}var pp,su,mp,gp;pp=function(t,i){for(var s=i.child;s!==null;){if(s.tag===5||s.tag===6)t.appendChild(s.stateNode);else if(s.tag!==4&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===i)break;for(;s.sibling===null;){if(s.return===null||s.return===i)return;s=s.return}s.sibling.return=s.return,s=s.sibling}},su=function(){},mp=function(t,i,s,c){var d=t.memoizedProps;if(d!==c){t=i.stateNode,Gr(Ai.current);var p=null;switch(s){case"input":d=ft(t,d),c=ft(t,c),p=[];break;case"select":d=K({},d,{value:void 0}),c=K({},c,{value:void 0}),p=[];break;case"textarea":d=it(t,d),c=it(t,c),p=[];break;default:typeof d.onClick!="function"&&typeof c.onClick=="function"&&(t.onclick=yo)}qe(s,c);var T;s=null;for(de in d)if(!c.hasOwnProperty(de)&&d.hasOwnProperty(de)&&d[de]!=null)if(de==="style"){var k=d[de];for(T in k)k.hasOwnProperty(T)&&(s||(s={}),s[T]="")}else de!=="dangerouslySetInnerHTML"&&de!=="children"&&de!=="suppressContentEditableWarning"&&de!=="suppressHydrationWarning"&&de!=="autoFocus"&&(o.hasOwnProperty(de)?p||(p=[]):(p=p||[]).push(de,null));for(de in c){var G=c[de];if(k=d!=null?d[de]:void 0,c.hasOwnProperty(de)&&G!==k&&(G!=null||k!=null))if(de==="style")if(k){for(T in k)!k.hasOwnProperty(T)||G&&G.hasOwnProperty(T)||(s||(s={}),s[T]="");for(T in G)G.hasOwnProperty(T)&&k[T]!==G[T]&&(s||(s={}),s[T]=G[T])}else s||(p||(p=[]),p.push(de,s)),s=G;else de==="dangerouslySetInnerHTML"?(G=G?G.__html:void 0,k=k?k.__html:void 0,G!=null&&k!==G&&(p=p||[]).push(de,G)):de==="children"?typeof G!="string"&&typeof G!="number"||(p=p||[]).push(de,""+G):de!=="suppressContentEditableWarning"&&de!=="suppressHydrationWarning"&&(o.hasOwnProperty(de)?(G!=null&&de==="onScroll"&&Wt("scroll",t),p||k===G||(p=[])):(p=p||[]).push(de,G))}s&&(p=p||[]).push("style",s);var de=p;(i.updateQueue=de)&&(i.flags|=4)}},gp=function(t,i,s,c){s!==c&&(i.flags|=4)};function Ls(t,i){if(!jt)switch(t.tailMode){case"hidden":i=t.tail;for(var s=null;i!==null;)i.alternate!==null&&(s=i),i=i.sibling;s===null?t.tail=null:s.sibling=null;break;case"collapsed":s=t.tail;for(var c=null;s!==null;)s.alternate!==null&&(c=s),s=s.sibling;c===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:c.sibling=null}}function wn(t){var i=t.alternate!==null&&t.alternate.child===t.child,s=0,c=0;if(i)for(var d=t.child;d!==null;)s|=d.lanes|d.childLanes,c|=d.subtreeFlags&14680064,c|=d.flags&14680064,d.return=t,d=d.sibling;else for(d=t.child;d!==null;)s|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=t,d=d.sibling;return t.subtreeFlags|=c,t.childLanes=s,i}function J0(t,i,s){var c=i.pendingProps;switch(Cc(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return wn(i),null;case 1:return Fn(i.type)&&Mo(),wn(i),null;case 3:return c=i.stateNode,wa(),Xt(kn),Xt(En),Hc(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(t===null||t.child===null)&&(bo(i)?i.flags|=4:t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,pi!==null&&(vu(pi),pi=null))),su(t,i),wn(i),null;case 5:zc(i);var d=Gr(As.current);if(s=i.type,t!==null&&i.stateNode!=null)mp(t,i,s,c,d),t.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!c){if(i.stateNode===null)throw Error(n(166));return wn(i),null}if(t=Gr(Ai.current),bo(i)){c=i.stateNode,s=i.type;var p=i.memoizedProps;switch(c[wi]=i,c[Ss]=p,t=(i.mode&1)!==0,s){case"dialog":Wt("cancel",c),Wt("close",c);break;case"iframe":case"object":case"embed":Wt("load",c);break;case"video":case"audio":for(d=0;d<_s.length;d++)Wt(_s[d],c);break;case"source":Wt("error",c);break;case"img":case"image":case"link":Wt("error",c),Wt("load",c);break;case"details":Wt("toggle",c);break;case"input":St(c,p),Wt("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!p.multiple},Wt("invalid",c);break;case"textarea":V(c,p),Wt("invalid",c)}qe(s,p),d=null;for(var T in p)if(p.hasOwnProperty(T)){var k=p[T];T==="children"?typeof k=="string"?c.textContent!==k&&(p.suppressHydrationWarning!==!0&&xo(c.textContent,k,t),d=["children",k]):typeof k=="number"&&c.textContent!==""+k&&(p.suppressHydrationWarning!==!0&&xo(c.textContent,k,t),d=["children",""+k]):o.hasOwnProperty(T)&&k!=null&&T==="onScroll"&&Wt("scroll",c)}switch(s){case"input":Be(c),Ot(c,p,!0);break;case"textarea":Be(c),_t(c);break;case"select":case"option":break;default:typeof p.onClick=="function"&&(c.onclick=yo)}c=d,i.updateQueue=c,c!==null&&(i.flags|=4)}else{T=d.nodeType===9?d:d.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=D(s)),t==="http://www.w3.org/1999/xhtml"?s==="script"?(t=T.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof c.is=="string"?t=T.createElement(s,{is:c.is}):(t=T.createElement(s),s==="select"&&(T=t,c.multiple?T.multiple=!0:c.size&&(T.size=c.size))):t=T.createElementNS(t,s),t[wi]=i,t[Ss]=c,pp(t,i,!1,!1),i.stateNode=t;e:{switch(T=Re(s,c),s){case"dialog":Wt("cancel",t),Wt("close",t),d=c;break;case"iframe":case"object":case"embed":Wt("load",t),d=c;break;case"video":case"audio":for(d=0;d<_s.length;d++)Wt(_s[d],t);d=c;break;case"source":Wt("error",t),d=c;break;case"img":case"image":case"link":Wt("error",t),Wt("load",t),d=c;break;case"details":Wt("toggle",t),d=c;break;case"input":St(t,c),d=ft(t,c),Wt("invalid",t);break;case"option":d=c;break;case"select":t._wrapperState={wasMultiple:!!c.multiple},d=K({},c,{value:void 0}),Wt("invalid",t);break;case"textarea":V(t,c),d=it(t,c),Wt("invalid",t);break;default:d=c}qe(s,d),k=d;for(p in k)if(k.hasOwnProperty(p)){var G=k[p];p==="style"?me(t,G):p==="dangerouslySetInnerHTML"?(G=G?G.__html:void 0,G!=null&&oe(t,G)):p==="children"?typeof G=="string"?(s!=="textarea"||G!=="")&&pe(t,G):typeof G=="number"&&pe(t,""+G):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(o.hasOwnProperty(p)?G!=null&&p==="onScroll"&&Wt("scroll",t):G!=null&&F(t,p,G,T))}switch(s){case"input":Be(t),Ot(t,c,!1);break;case"textarea":Be(t),_t(t);break;case"option":c.value!=null&&t.setAttribute("value",""+fe(c.value));break;case"select":t.multiple=!!c.multiple,p=c.value,p!=null?be(t,!!c.multiple,p,!1):c.defaultValue!=null&&be(t,!!c.multiple,c.defaultValue,!0);break;default:typeof d.onClick=="function"&&(t.onclick=yo)}switch(s){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return wn(i),null;case 6:if(t&&i.stateNode!=null)gp(t,i,t.memoizedProps,c);else{if(typeof c!="string"&&i.stateNode===null)throw Error(n(166));if(s=Gr(As.current),Gr(Ai.current),bo(i)){if(c=i.stateNode,s=i.memoizedProps,c[wi]=i,(p=c.nodeValue!==s)&&(t=Xn,t!==null))switch(t.tag){case 3:xo(c.nodeValue,s,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&xo(c.nodeValue,s,(t.mode&1)!==0)}p&&(i.flags|=4)}else c=(s.nodeType===9?s:s.ownerDocument).createTextNode(c),c[wi]=i,i.stateNode=c}return wn(i),null;case 13:if(Xt($t),c=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(jt&&qn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)xh(),Sa(),i.flags|=98560,p=!1;else if(p=bo(i),c!==null&&c.dehydrated!==null){if(t===null){if(!p)throw Error(n(318));if(p=i.memoizedState,p=p!==null?p.dehydrated:null,!p)throw Error(n(317));p[wi]=i}else Sa(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;wn(i),p=!1}else pi!==null&&(vu(pi),pi=null),p=!0;if(!p)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=s,i):(c=c!==null,c!==(t!==null&&t.memoizedState!==null)&&c&&(i.child.flags|=8192,(i.mode&1)!==0&&(t===null||($t.current&1)!==0?un===0&&(un=3):yu())),i.updateQueue!==null&&(i.flags|=4),wn(i),null);case 4:return wa(),su(t,i),t===null&&xs(i.stateNode.containerInfo),wn(i),null;case 10:return Dc(i.type._context),wn(i),null;case 17:return Fn(i.type)&&Mo(),wn(i),null;case 19:if(Xt($t),p=i.memoizedState,p===null)return wn(i),null;if(c=(i.flags&128)!==0,T=p.rendering,T===null)if(c)Ls(p,!1);else{if(un!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(T=Io(t),T!==null){for(i.flags|=128,Ls(p,!1),c=T.updateQueue,c!==null&&(i.updateQueue=c,i.flags|=4),i.subtreeFlags=0,c=s,s=i.child;s!==null;)p=s,t=c,p.flags&=14680066,T=p.alternate,T===null?(p.childLanes=0,p.lanes=t,p.child=null,p.subtreeFlags=0,p.memoizedProps=null,p.memoizedState=null,p.updateQueue=null,p.dependencies=null,p.stateNode=null):(p.childLanes=T.childLanes,p.lanes=T.lanes,p.child=T.child,p.subtreeFlags=0,p.deletions=null,p.memoizedProps=T.memoizedProps,p.memoizedState=T.memoizedState,p.updateQueue=T.updateQueue,p.type=T.type,t=T.dependencies,p.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),s=s.sibling;return Gt($t,$t.current&1|2),i.child}t=t.sibling}p.tail!==null&&Yt()>Ra&&(i.flags|=128,c=!0,Ls(p,!1),i.lanes=4194304)}else{if(!c)if(t=Io(T),t!==null){if(i.flags|=128,c=!0,s=t.updateQueue,s!==null&&(i.updateQueue=s,i.flags|=4),Ls(p,!0),p.tail===null&&p.tailMode==="hidden"&&!T.alternate&&!jt)return wn(i),null}else 2*Yt()-p.renderingStartTime>Ra&&s!==1073741824&&(i.flags|=128,c=!0,Ls(p,!1),i.lanes=4194304);p.isBackwards?(T.sibling=i.child,i.child=T):(s=p.last,s!==null?s.sibling=T:i.child=T,p.last=T)}return p.tail!==null?(i=p.tail,p.rendering=i,p.tail=i.sibling,p.renderingStartTime=Yt(),i.sibling=null,s=$t.current,Gt($t,c?s&1|2:s&1),i):(wn(i),null);case 22:case 23:return xu(),c=i.memoizedState!==null,t!==null&&t.memoizedState!==null!==c&&(i.flags|=8192),c&&(i.mode&1)!==0?(jn&1073741824)!==0&&(wn(i),i.subtreeFlags&6&&(i.flags|=8192)):wn(i),null;case 24:return null;case 25:return null}throw Error(n(156,i.tag))}function Q0(t,i){switch(Cc(i),i.tag){case 1:return Fn(i.type)&&Mo(),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return wa(),Xt(kn),Xt(En),Hc(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 5:return zc(i),null;case 13:if(Xt($t),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(n(340));Sa()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return Xt($t),null;case 4:return wa(),null;case 10:return Dc(i.type._context),null;case 22:case 23:return xu(),null;case 24:return null;default:return null}}var Vo=!1,An=!1,ev=typeof WeakSet=="function"?WeakSet:Set,je=null;function ba(t,i){var s=t.ref;if(s!==null)if(typeof s=="function")try{s(null)}catch(c){tn(t,i,c)}else s.current=null}function ou(t,i,s){try{s()}catch(c){tn(t,i,c)}}var vp=!1;function tv(t,i){if(xc=oo,t=Yf(),dc(t)){if("selectionStart"in t)var s={start:t.selectionStart,end:t.selectionEnd};else e:{s=(s=t.ownerDocument)&&s.defaultView||window;var c=s.getSelection&&s.getSelection();if(c&&c.rangeCount!==0){s=c.anchorNode;var d=c.anchorOffset,p=c.focusNode;c=c.focusOffset;try{s.nodeType,p.nodeType}catch{s=null;break e}var T=0,k=-1,G=-1,de=0,Se=0,Ee=t,ye=null;t:for(;;){for(var Ge;Ee!==s||d!==0&&Ee.nodeType!==3||(k=T+d),Ee!==p||c!==0&&Ee.nodeType!==3||(G=T+c),Ee.nodeType===3&&(T+=Ee.nodeValue.length),(Ge=Ee.firstChild)!==null;)ye=Ee,Ee=Ge;for(;;){if(Ee===t)break t;if(ye===s&&++de===d&&(k=T),ye===p&&++Se===c&&(G=T),(Ge=Ee.nextSibling)!==null)break;Ee=ye,ye=Ee.parentNode}Ee=Ge}s=k===-1||G===-1?null:{start:k,end:G}}else s=null}s=s||{start:0,end:0}}else s=null;for(yc={focusedElem:t,selectionRange:s},oo=!1,je=i;je!==null;)if(i=je,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,je=t;else for(;je!==null;){i=je;try{var Ye=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(Ye!==null){var Ze=Ye.memoizedProps,rn=Ye.memoizedState,se=i.stateNode,Z=se.getSnapshotBeforeUpdate(i.elementType===i.type?Ze:mi(i.type,Ze),rn);se.__reactInternalSnapshotBeforeUpdate=Z}break;case 3:var ce=i.stateNode.containerInfo;ce.nodeType===1?ce.textContent="":ce.nodeType===9&&ce.documentElement&&ce.removeChild(ce.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(Ae){tn(i,i.return,Ae)}if(t=i.sibling,t!==null){t.return=i.return,je=t;break}je=i.return}return Ye=vp,vp=!1,Ye}function Ns(t,i,s){var c=i.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var d=c=c.next;do{if((d.tag&t)===t){var p=d.destroy;d.destroy=void 0,p!==void 0&&ou(i,s,p)}d=d.next}while(d!==c)}}function Go(t,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var s=i=i.next;do{if((s.tag&t)===t){var c=s.create;s.destroy=c()}s=s.next}while(s!==i)}}function lu(t){var i=t.ref;if(i!==null){var s=t.stateNode;switch(t.tag){case 5:t=s;break;default:t=s}typeof i=="function"?i(t):i.current=t}}function _p(t){var i=t.alternate;i!==null&&(t.alternate=null,_p(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&(delete i[wi],delete i[Ss],delete i[Tc],delete i[F0],delete i[O0])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function xp(t){return t.tag===5||t.tag===3||t.tag===4}function yp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||xp(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function cu(t,i,s){var c=t.tag;if(c===5||c===6)t=t.stateNode,i?s.nodeType===8?s.parentNode.insertBefore(t,i):s.insertBefore(t,i):(s.nodeType===8?(i=s.parentNode,i.insertBefore(t,s)):(i=s,i.appendChild(t)),s=s._reactRootContainer,s!=null||i.onclick!==null||(i.onclick=yo));else if(c!==4&&(t=t.child,t!==null))for(cu(t,i,s),t=t.sibling;t!==null;)cu(t,i,s),t=t.sibling}function uu(t,i,s){var c=t.tag;if(c===5||c===6)t=t.stateNode,i?s.insertBefore(t,i):s.appendChild(t);else if(c!==4&&(t=t.child,t!==null))for(uu(t,i,s),t=t.sibling;t!==null;)uu(t,i,s),t=t.sibling}var _n=null,gi=!1;function gr(t,i,s){for(s=s.child;s!==null;)Sp(t,i,s),s=s.sibling}function Sp(t,i,s){if(te&&typeof te.onCommitFiberUnmount=="function")try{te.onCommitFiberUnmount(re,s)}catch{}switch(s.tag){case 5:An||ba(s,i);case 6:var c=_n,d=gi;_n=null,gr(t,i,s),_n=c,gi=d,_n!==null&&(gi?(t=_n,s=s.stateNode,t.nodeType===8?t.parentNode.removeChild(s):t.removeChild(s)):_n.removeChild(s.stateNode));break;case 18:_n!==null&&(gi?(t=_n,s=s.stateNode,t.nodeType===8?Ec(t.parentNode,s):t.nodeType===1&&Ec(t,s),us(t)):Ec(_n,s.stateNode));break;case 4:c=_n,d=gi,_n=s.stateNode.containerInfo,gi=!0,gr(t,i,s),_n=c,gi=d;break;case 0:case 11:case 14:case 15:if(!An&&(c=s.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){d=c=c.next;do{var p=d,T=p.destroy;p=p.tag,T!==void 0&&((p&2)!==0||(p&4)!==0)&&ou(s,i,T),d=d.next}while(d!==c)}gr(t,i,s);break;case 1:if(!An&&(ba(s,i),c=s.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=s.memoizedProps,c.state=s.memoizedState,c.componentWillUnmount()}catch(k){tn(s,i,k)}gr(t,i,s);break;case 21:gr(t,i,s);break;case 22:s.mode&1?(An=(c=An)||s.memoizedState!==null,gr(t,i,s),An=c):gr(t,i,s);break;default:gr(t,i,s)}}function Mp(t){var i=t.updateQueue;if(i!==null){t.updateQueue=null;var s=t.stateNode;s===null&&(s=t.stateNode=new ev),i.forEach(function(c){var d=uv.bind(null,t,c);s.has(c)||(s.add(c),c.then(d,d))})}}function vi(t,i){var s=i.deletions;if(s!==null)for(var c=0;c<s.length;c++){var d=s[c];try{var p=t,T=i,k=T;e:for(;k!==null;){switch(k.tag){case 5:_n=k.stateNode,gi=!1;break e;case 3:_n=k.stateNode.containerInfo,gi=!0;break e;case 4:_n=k.stateNode.containerInfo,gi=!0;break e}k=k.return}if(_n===null)throw Error(n(160));Sp(p,T,d),_n=null,gi=!1;var G=d.alternate;G!==null&&(G.return=null),d.return=null}catch(de){tn(d,i,de)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)Ep(i,t),i=i.sibling}function Ep(t,i){var s=t.alternate,c=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(vi(i,t),Ci(t),c&4){try{Ns(3,t,t.return),Go(3,t)}catch(Ze){tn(t,t.return,Ze)}try{Ns(5,t,t.return)}catch(Ze){tn(t,t.return,Ze)}}break;case 1:vi(i,t),Ci(t),c&512&&s!==null&&ba(s,s.return);break;case 5:if(vi(i,t),Ci(t),c&512&&s!==null&&ba(s,s.return),t.flags&32){var d=t.stateNode;try{pe(d,"")}catch(Ze){tn(t,t.return,Ze)}}if(c&4&&(d=t.stateNode,d!=null)){var p=t.memoizedProps,T=s!==null?s.memoizedProps:p,k=t.type,G=t.updateQueue;if(t.updateQueue=null,G!==null)try{k==="input"&&p.type==="radio"&&p.name!=null&&Pt(d,p),Re(k,T);var de=Re(k,p);for(T=0;T<G.length;T+=2){var Se=G[T],Ee=G[T+1];Se==="style"?me(d,Ee):Se==="dangerouslySetInnerHTML"?oe(d,Ee):Se==="children"?pe(d,Ee):F(d,Se,Ee,de)}switch(k){case"input":pt(d,p);break;case"textarea":Ut(d,p);break;case"select":var ye=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!p.multiple;var Ge=p.value;Ge!=null?be(d,!!p.multiple,Ge,!1):ye!==!!p.multiple&&(p.defaultValue!=null?be(d,!!p.multiple,p.defaultValue,!0):be(d,!!p.multiple,p.multiple?[]:"",!1))}d[Ss]=p}catch(Ze){tn(t,t.return,Ze)}}break;case 6:if(vi(i,t),Ci(t),c&4){if(t.stateNode===null)throw Error(n(162));d=t.stateNode,p=t.memoizedProps;try{d.nodeValue=p}catch(Ze){tn(t,t.return,Ze)}}break;case 3:if(vi(i,t),Ci(t),c&4&&s!==null&&s.memoizedState.isDehydrated)try{us(i.containerInfo)}catch(Ze){tn(t,t.return,Ze)}break;case 4:vi(i,t),Ci(t);break;case 13:vi(i,t),Ci(t),d=t.child,d.flags&8192&&(p=d.memoizedState!==null,d.stateNode.isHidden=p,!p||d.alternate!==null&&d.alternate.memoizedState!==null||(hu=Yt())),c&4&&Mp(t);break;case 22:if(Se=s!==null&&s.memoizedState!==null,t.mode&1?(An=(de=An)||Se,vi(i,t),An=de):vi(i,t),Ci(t),c&8192){if(de=t.memoizedState!==null,(t.stateNode.isHidden=de)&&!Se&&(t.mode&1)!==0)for(je=t,Se=t.child;Se!==null;){for(Ee=je=Se;je!==null;){switch(ye=je,Ge=ye.child,ye.tag){case 0:case 11:case 14:case 15:Ns(4,ye,ye.return);break;case 1:ba(ye,ye.return);var Ye=ye.stateNode;if(typeof Ye.componentWillUnmount=="function"){c=ye,s=ye.return;try{i=c,Ye.props=i.memoizedProps,Ye.state=i.memoizedState,Ye.componentWillUnmount()}catch(Ze){tn(c,s,Ze)}}break;case 5:ba(ye,ye.return);break;case 22:if(ye.memoizedState!==null){Ap(Ee);continue}}Ge!==null?(Ge.return=ye,je=Ge):Ap(Ee)}Se=Se.sibling}e:for(Se=null,Ee=t;;){if(Ee.tag===5){if(Se===null){Se=Ee;try{d=Ee.stateNode,de?(p=d.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none"):(k=Ee.stateNode,G=Ee.memoizedProps.style,T=G!=null&&G.hasOwnProperty("display")?G.display:null,k.style.display=he("display",T))}catch(Ze){tn(t,t.return,Ze)}}}else if(Ee.tag===6){if(Se===null)try{Ee.stateNode.nodeValue=de?"":Ee.memoizedProps}catch(Ze){tn(t,t.return,Ze)}}else if((Ee.tag!==22&&Ee.tag!==23||Ee.memoizedState===null||Ee===t)&&Ee.child!==null){Ee.child.return=Ee,Ee=Ee.child;continue}if(Ee===t)break e;for(;Ee.sibling===null;){if(Ee.return===null||Ee.return===t)break e;Se===Ee&&(Se=null),Ee=Ee.return}Se===Ee&&(Se=null),Ee.sibling.return=Ee.return,Ee=Ee.sibling}}break;case 19:vi(i,t),Ci(t),c&4&&Mp(t);break;case 21:break;default:vi(i,t),Ci(t)}}function Ci(t){var i=t.flags;if(i&2){try{e:{for(var s=t.return;s!==null;){if(xp(s)){var c=s;break e}s=s.return}throw Error(n(160))}switch(c.tag){case 5:var d=c.stateNode;c.flags&32&&(pe(d,""),c.flags&=-33);var p=yp(t);uu(t,p,d);break;case 3:case 4:var T=c.stateNode.containerInfo,k=yp(t);cu(t,k,T);break;default:throw Error(n(161))}}catch(G){tn(t,t.return,G)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function nv(t,i,s){je=t,Tp(t)}function Tp(t,i,s){for(var c=(t.mode&1)!==0;je!==null;){var d=je,p=d.child;if(d.tag===22&&c){var T=d.memoizedState!==null||Vo;if(!T){var k=d.alternate,G=k!==null&&k.memoizedState!==null||An;k=Vo;var de=An;if(Vo=T,(An=G)&&!de)for(je=d;je!==null;)T=je,G=T.child,T.tag===22&&T.memoizedState!==null?bp(d):G!==null?(G.return=T,je=G):bp(d);for(;p!==null;)je=p,Tp(p),p=p.sibling;je=d,Vo=k,An=de}wp(t)}else(d.subtreeFlags&8772)!==0&&p!==null?(p.return=d,je=p):wp(t)}}function wp(t){for(;je!==null;){var i=je;if((i.flags&8772)!==0){var s=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:An||Go(5,i);break;case 1:var c=i.stateNode;if(i.flags&4&&!An)if(s===null)c.componentDidMount();else{var d=i.elementType===i.type?s.memoizedProps:mi(i.type,s.memoizedProps);c.componentDidUpdate(d,s.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var p=i.updateQueue;p!==null&&Ah(i,p,c);break;case 3:var T=i.updateQueue;if(T!==null){if(s=null,i.child!==null)switch(i.child.tag){case 5:s=i.child.stateNode;break;case 1:s=i.child.stateNode}Ah(i,T,s)}break;case 5:var k=i.stateNode;if(s===null&&i.flags&4){s=k;var G=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":G.autoFocus&&s.focus();break;case"img":G.src&&(s.src=G.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var de=i.alternate;if(de!==null){var Se=de.memoizedState;if(Se!==null){var Ee=Se.dehydrated;Ee!==null&&us(Ee)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}An||i.flags&512&&lu(i)}catch(ye){tn(i,i.return,ye)}}if(i===t){je=null;break}if(s=i.sibling,s!==null){s.return=i.return,je=s;break}je=i.return}}function Ap(t){for(;je!==null;){var i=je;if(i===t){je=null;break}var s=i.sibling;if(s!==null){s.return=i.return,je=s;break}je=i.return}}function bp(t){for(;je!==null;){var i=je;try{switch(i.tag){case 0:case 11:case 15:var s=i.return;try{Go(4,i)}catch(G){tn(i,s,G)}break;case 1:var c=i.stateNode;if(typeof c.componentDidMount=="function"){var d=i.return;try{c.componentDidMount()}catch(G){tn(i,d,G)}}var p=i.return;try{lu(i)}catch(G){tn(i,p,G)}break;case 5:var T=i.return;try{lu(i)}catch(G){tn(i,T,G)}}}catch(G){tn(i,i.return,G)}if(i===t){je=null;break}var k=i.sibling;if(k!==null){k.return=i.return,je=k;break}je=i.return}}var iv=Math.ceil,Wo=b.ReactCurrentDispatcher,du=b.ReactCurrentOwner,ai=b.ReactCurrentBatchConfig,Ct=0,pn=null,an=null,xn=0,jn=0,Ca=dr(0),un=0,Is=null,Xr=0,Xo=0,fu=0,Ds=null,zn=null,hu=0,Ra=1/0,Ki=null,qo=!1,pu=null,vr=null,jo=!1,_r=null,Ko=0,Us=0,mu=null,Yo=-1,$o=0;function In(){return(Ct&6)!==0?Yt():Yo!==-1?Yo:Yo=Yt()}function xr(t){return(t.mode&1)===0?1:(Ct&2)!==0&&xn!==0?xn&-xn:B0.transition!==null?($o===0&&($o=ln()),$o):(t=gt,t!==0||(t=window.event,t=t===void 0?16:Rf(t.type)),t)}function _i(t,i,s,c){if(50<Us)throw Us=0,mu=null,Error(n(185));nn(t,s,c),((Ct&2)===0||t!==pn)&&(t===pn&&((Ct&2)===0&&(Xo|=s),un===4&&yr(t,xn)),Bn(t,c),s===1&&Ct===0&&(i.mode&1)===0&&(Ra=Yt()+500,To&&hr()))}function Bn(t,i){var s=t.callbackNode;Vt(t,i);var c=Et(t,t===pn?xn:0);if(c===0)s!==null&&is(s),t.callbackNode=null,t.callbackPriority=0;else if(i=c&-c,t.callbackPriority!==i){if(s!=null&&is(s),i===1)t.tag===0?z0(Rp.bind(null,t)):ph(Rp.bind(null,t)),U0(function(){(Ct&6)===0&&hr()}),s=null;else{switch(ci(c)){case 1:s=rs;break;case 4:s=as;break;case 16:s=A;break;case 536870912:s=ue;break;default:s=A}s=Fp(s,Cp.bind(null,t))}t.callbackPriority=i,t.callbackNode=s}}function Cp(t,i){if(Yo=-1,$o=0,(Ct&6)!==0)throw Error(n(327));var s=t.callbackNode;if(Pa()&&t.callbackNode!==s)return null;var c=Et(t,t===pn?xn:0);if(c===0)return null;if((c&30)!==0||(c&t.expiredLanes)!==0||i)i=Zo(t,c);else{i=c;var d=Ct;Ct|=2;var p=Lp();(pn!==t||xn!==i)&&(Ki=null,Ra=Yt()+500,jr(t,i));do try{sv();break}catch(k){Pp(t,k)}while(!0);Ic(),Wo.current=p,Ct=d,an!==null?i=0:(pn=null,xn=0,i=un)}if(i!==0){if(i===2&&(d=kt(t),d!==0&&(c=d,i=gu(t,d))),i===1)throw s=Is,jr(t,0),yr(t,c),Bn(t,Yt()),s;if(i===6)yr(t,c);else{if(d=t.current.alternate,(c&30)===0&&!rv(d)&&(i=Zo(t,c),i===2&&(p=kt(t),p!==0&&(c=p,i=gu(t,p))),i===1))throw s=Is,jr(t,0),yr(t,c),Bn(t,Yt()),s;switch(t.finishedWork=d,t.finishedLanes=c,i){case 0:case 1:throw Error(n(345));case 2:Kr(t,zn,Ki);break;case 3:if(yr(t,c),(c&130023424)===c&&(i=hu+500-Yt(),10<i)){if(Et(t,0)!==0)break;if(d=t.suspendedLanes,(d&c)!==c){In(),t.pingedLanes|=t.suspendedLanes&d;break}t.timeoutHandle=Mc(Kr.bind(null,t,zn,Ki),i);break}Kr(t,zn,Ki);break;case 4:if(yr(t,c),(c&4194240)===c)break;for(i=t.eventTimes,d=-1;0<c;){var T=31-De(c);p=1<<T,T=i[T],T>d&&(d=T),c&=~p}if(c=d,c=Yt()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*iv(c/1960))-c,10<c){t.timeoutHandle=Mc(Kr.bind(null,t,zn,Ki),c);break}Kr(t,zn,Ki);break;case 5:Kr(t,zn,Ki);break;default:throw Error(n(329))}}}return Bn(t,Yt()),t.callbackNode===s?Cp.bind(null,t):null}function gu(t,i){var s=Ds;return t.current.memoizedState.isDehydrated&&(jr(t,i).flags|=256),t=Zo(t,i),t!==2&&(i=zn,zn=s,i!==null&&vu(i)),t}function vu(t){zn===null?zn=t:zn.push.apply(zn,t)}function rv(t){for(var i=t;;){if(i.flags&16384){var s=i.updateQueue;if(s!==null&&(s=s.stores,s!==null))for(var c=0;c<s.length;c++){var d=s[c],p=d.getSnapshot;d=d.value;try{if(!hi(p(),d))return!1}catch{return!1}}}if(s=i.child,i.subtreeFlags&16384&&s!==null)s.return=i,i=s;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function yr(t,i){for(i&=~fu,i&=~Xo,t.suspendedLanes|=i,t.pingedLanes&=~i,t=t.expirationTimes;0<i;){var s=31-De(i),c=1<<s;t[s]=-1,i&=~c}}function Rp(t){if((Ct&6)!==0)throw Error(n(327));Pa();var i=Et(t,0);if((i&1)===0)return Bn(t,Yt()),null;var s=Zo(t,i);if(t.tag!==0&&s===2){var c=kt(t);c!==0&&(i=c,s=gu(t,c))}if(s===1)throw s=Is,jr(t,0),yr(t,i),Bn(t,Yt()),s;if(s===6)throw Error(n(345));return t.finishedWork=t.current.alternate,t.finishedLanes=i,Kr(t,zn,Ki),Bn(t,Yt()),null}function _u(t,i){var s=Ct;Ct|=1;try{return t(i)}finally{Ct=s,Ct===0&&(Ra=Yt()+500,To&&hr())}}function qr(t){_r!==null&&_r.tag===0&&(Ct&6)===0&&Pa();var i=Ct;Ct|=1;var s=ai.transition,c=gt;try{if(ai.transition=null,gt=1,t)return t()}finally{gt=c,ai.transition=s,Ct=i,(Ct&6)===0&&hr()}}function xu(){jn=Ca.current,Xt(Ca)}function jr(t,i){t.finishedWork=null,t.finishedLanes=0;var s=t.timeoutHandle;if(s!==-1&&(t.timeoutHandle=-1,D0(s)),an!==null)for(s=an.return;s!==null;){var c=s;switch(Cc(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&Mo();break;case 3:wa(),Xt(kn),Xt(En),Hc();break;case 5:zc(c);break;case 4:wa();break;case 13:Xt($t);break;case 19:Xt($t);break;case 10:Dc(c.type._context);break;case 22:case 23:xu()}s=s.return}if(pn=t,an=t=Sr(t.current,null),xn=jn=i,un=0,Is=null,fu=Xo=Xr=0,zn=Ds=null,Vr!==null){for(i=0;i<Vr.length;i++)if(s=Vr[i],c=s.interleaved,c!==null){s.interleaved=null;var d=c.next,p=s.pending;if(p!==null){var T=p.next;p.next=d,c.next=T}s.pending=c}Vr=null}return t}function Pp(t,i){do{var s=an;try{if(Ic(),Do.current=Oo,Uo){for(var c=Zt.memoizedState;c!==null;){var d=c.queue;d!==null&&(d.pending=null),c=c.next}Uo=!1}if(Wr=0,hn=cn=Zt=null,bs=!1,Cs=0,du.current=null,s===null||s.return===null){un=1,Is=i,an=null;break}e:{var p=t,T=s.return,k=s,G=i;if(i=xn,k.flags|=32768,G!==null&&typeof G=="object"&&typeof G.then=="function"){var de=G,Se=k,Ee=Se.tag;if((Se.mode&1)===0&&(Ee===0||Ee===11||Ee===15)){var ye=Se.alternate;ye?(Se.updateQueue=ye.updateQueue,Se.memoizedState=ye.memoizedState,Se.lanes=ye.lanes):(Se.updateQueue=null,Se.memoizedState=null)}var Ge=tp(T);if(Ge!==null){Ge.flags&=-257,np(Ge,T,k,p,i),Ge.mode&1&&ep(p,de,i),i=Ge,G=de;var Ye=i.updateQueue;if(Ye===null){var Ze=new Set;Ze.add(G),i.updateQueue=Ze}else Ye.add(G);break e}else{if((i&1)===0){ep(p,de,i),yu();break e}G=Error(n(426))}}else if(jt&&k.mode&1){var rn=tp(T);if(rn!==null){(rn.flags&65536)===0&&(rn.flags|=256),np(rn,T,k,p,i),Lc(Aa(G,k));break e}}p=G=Aa(G,k),un!==4&&(un=2),Ds===null?Ds=[p]:Ds.push(p),p=T;do{switch(p.tag){case 3:p.flags|=65536,i&=-i,p.lanes|=i;var se=Jh(p,G,i);wh(p,se);break e;case 1:k=G;var Z=p.type,ce=p.stateNode;if((p.flags&128)===0&&(typeof Z.getDerivedStateFromError=="function"||ce!==null&&typeof ce.componentDidCatch=="function"&&(vr===null||!vr.has(ce)))){p.flags|=65536,i&=-i,p.lanes|=i;var Ae=Qh(p,k,i);wh(p,Ae);break e}}p=p.return}while(p!==null)}Ip(s)}catch(nt){i=nt,an===s&&s!==null&&(an=s=s.return);continue}break}while(!0)}function Lp(){var t=Wo.current;return Wo.current=Oo,t===null?Oo:t}function yu(){(un===0||un===3||un===2)&&(un=4),pn===null||(Xr&268435455)===0&&(Xo&268435455)===0||yr(pn,xn)}function Zo(t,i){var s=Ct;Ct|=2;var c=Lp();(pn!==t||xn!==i)&&(Ki=null,jr(t,i));do try{av();break}catch(d){Pp(t,d)}while(!0);if(Ic(),Ct=s,Wo.current=c,an!==null)throw Error(n(261));return pn=null,xn=0,un}function av(){for(;an!==null;)Np(an)}function sv(){for(;an!==null&&!ao();)Np(an)}function Np(t){var i=kp(t.alternate,t,jn);t.memoizedProps=t.pendingProps,i===null?Ip(t):an=i,du.current=null}function Ip(t){var i=t;do{var s=i.alternate;if(t=i.return,(i.flags&32768)===0){if(s=J0(s,i,jn),s!==null){an=s;return}}else{if(s=Q0(s,i),s!==null){s.flags&=32767,an=s;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{un=6,an=null;return}}if(i=i.sibling,i!==null){an=i;return}an=i=t}while(i!==null);un===0&&(un=5)}function Kr(t,i,s){var c=gt,d=ai.transition;try{ai.transition=null,gt=1,ov(t,i,s,c)}finally{ai.transition=d,gt=c}return null}function ov(t,i,s,c){do Pa();while(_r!==null);if((Ct&6)!==0)throw Error(n(327));s=t.finishedWork;var d=t.finishedLanes;if(s===null)return null;if(t.finishedWork=null,t.finishedLanes=0,s===t.current)throw Error(n(177));t.callbackNode=null,t.callbackPriority=0;var p=s.lanes|s.childLanes;if(Tt(t,p),t===pn&&(an=pn=null,xn=0),(s.subtreeFlags&2064)===0&&(s.flags&2064)===0||jo||(jo=!0,Fp(A,function(){return Pa(),null})),p=(s.flags&15990)!==0,(s.subtreeFlags&15990)!==0||p){p=ai.transition,ai.transition=null;var T=gt;gt=1;var k=Ct;Ct|=4,du.current=null,tv(t,s),Ep(s,t),b0(yc),oo=!!xc,yc=xc=null,t.current=s,nv(s),Jl(),Ct=k,gt=T,ai.transition=p}else t.current=s;if(jo&&(jo=!1,_r=t,Ko=d),p=t.pendingLanes,p===0&&(vr=null),Fe(s.stateNode),Bn(t,Yt()),i!==null)for(c=t.onRecoverableError,s=0;s<i.length;s++)d=i[s],c(d.value,{componentStack:d.stack,digest:d.digest});if(qo)throw qo=!1,t=pu,pu=null,t;return(Ko&1)!==0&&t.tag!==0&&Pa(),p=t.pendingLanes,(p&1)!==0?t===mu?Us++:(Us=0,mu=t):Us=0,hr(),null}function Pa(){if(_r!==null){var t=ci(Ko),i=ai.transition,s=gt;try{if(ai.transition=null,gt=16>t?16:t,_r===null)var c=!1;else{if(t=_r,_r=null,Ko=0,(Ct&6)!==0)throw Error(n(331));var d=Ct;for(Ct|=4,je=t.current;je!==null;){var p=je,T=p.child;if((je.flags&16)!==0){var k=p.deletions;if(k!==null){for(var G=0;G<k.length;G++){var de=k[G];for(je=de;je!==null;){var Se=je;switch(Se.tag){case 0:case 11:case 15:Ns(8,Se,p)}var Ee=Se.child;if(Ee!==null)Ee.return=Se,je=Ee;else for(;je!==null;){Se=je;var ye=Se.sibling,Ge=Se.return;if(_p(Se),Se===de){je=null;break}if(ye!==null){ye.return=Ge,je=ye;break}je=Ge}}}var Ye=p.alternate;if(Ye!==null){var Ze=Ye.child;if(Ze!==null){Ye.child=null;do{var rn=Ze.sibling;Ze.sibling=null,Ze=rn}while(Ze!==null)}}je=p}}if((p.subtreeFlags&2064)!==0&&T!==null)T.return=p,je=T;else e:for(;je!==null;){if(p=je,(p.flags&2048)!==0)switch(p.tag){case 0:case 11:case 15:Ns(9,p,p.return)}var se=p.sibling;if(se!==null){se.return=p.return,je=se;break e}je=p.return}}var Z=t.current;for(je=Z;je!==null;){T=je;var ce=T.child;if((T.subtreeFlags&2064)!==0&&ce!==null)ce.return=T,je=ce;else e:for(T=Z;je!==null;){if(k=je,(k.flags&2048)!==0)try{switch(k.tag){case 0:case 11:case 15:Go(9,k)}}catch(nt){tn(k,k.return,nt)}if(k===T){je=null;break e}var Ae=k.sibling;if(Ae!==null){Ae.return=k.return,je=Ae;break e}je=k.return}}if(Ct=d,hr(),te&&typeof te.onPostCommitFiberRoot=="function")try{te.onPostCommitFiberRoot(re,t)}catch{}c=!0}return c}finally{gt=s,ai.transition=i}}return!1}function Dp(t,i,s){i=Aa(s,i),i=Jh(t,i,1),t=mr(t,i,1),i=In(),t!==null&&(nn(t,1,i),Bn(t,i))}function tn(t,i,s){if(t.tag===3)Dp(t,t,s);else for(;i!==null;){if(i.tag===3){Dp(i,t,s);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(vr===null||!vr.has(c))){t=Aa(s,t),t=Qh(i,t,1),i=mr(i,t,1),t=In(),i!==null&&(nn(i,1,t),Bn(i,t));break}}i=i.return}}function lv(t,i,s){var c=t.pingCache;c!==null&&c.delete(i),i=In(),t.pingedLanes|=t.suspendedLanes&s,pn===t&&(xn&s)===s&&(un===4||un===3&&(xn&130023424)===xn&&500>Yt()-hu?jr(t,0):fu|=s),Bn(t,i)}function Up(t,i){i===0&&((t.mode&1)===0?i=1:(i=mt,mt<<=1,(mt&130023424)===0&&(mt=4194304)));var s=In();t=Xi(t,i),t!==null&&(nn(t,i,s),Bn(t,s))}function cv(t){var i=t.memoizedState,s=0;i!==null&&(s=i.retryLane),Up(t,s)}function uv(t,i){var s=0;switch(t.tag){case 13:var c=t.stateNode,d=t.memoizedState;d!==null&&(s=d.retryLane);break;case 19:c=t.stateNode;break;default:throw Error(n(314))}c!==null&&c.delete(i),Up(t,s)}var kp;kp=function(t,i,s){if(t!==null)if(t.memoizedProps!==i.pendingProps||kn.current)On=!0;else{if((t.lanes&s)===0&&(i.flags&128)===0)return On=!1,Z0(t,i,s);On=(t.flags&131072)!==0}else On=!1,jt&&(i.flags&1048576)!==0&&mh(i,Ao,i.index);switch(i.lanes=0,i.tag){case 2:var c=i.type;Ho(t,i),t=i.pendingProps;var d=_a(i,En.current);Ta(i,s),d=Wc(null,i,c,t,d,s);var p=Xc();return i.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Fn(c)?(p=!0,Eo(i)):p=!1,i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,Fc(i),d.updater=zo,i.stateNode=d,d._reactInternals=i,Zc(i,c,t,s),i=tu(null,i,c,!0,p,s)):(i.tag=0,jt&&p&&bc(i),Nn(null,i,d,s),i=i.child),i;case 16:c=i.elementType;e:{switch(Ho(t,i),t=i.pendingProps,d=c._init,c=d(c._payload),i.type=c,d=i.tag=fv(c),t=mi(c,t),d){case 0:i=eu(null,i,c,t,s);break e;case 1:i=lp(null,i,c,t,s);break e;case 11:i=ip(null,i,c,t,s);break e;case 14:i=rp(null,i,c,mi(c.type,t),s);break e}throw Error(n(306,c,""))}return i;case 0:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:mi(c,d),eu(t,i,c,d,s);case 1:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:mi(c,d),lp(t,i,c,d,s);case 3:e:{if(cp(i),t===null)throw Error(n(387));c=i.pendingProps,p=i.memoizedState,d=p.element,Th(t,i),No(i,c,null,s);var T=i.memoizedState;if(c=T.element,p.isDehydrated)if(p={element:c,isDehydrated:!1,cache:T.cache,pendingSuspenseBoundaries:T.pendingSuspenseBoundaries,transitions:T.transitions},i.updateQueue.baseState=p,i.memoizedState=p,i.flags&256){d=Aa(Error(n(423)),i),i=up(t,i,c,s,d);break e}else if(c!==d){d=Aa(Error(n(424)),i),i=up(t,i,c,s,d);break e}else for(qn=ur(i.stateNode.containerInfo.firstChild),Xn=i,jt=!0,pi=null,s=Mh(i,null,c,s),i.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling;else{if(Sa(),c===d){i=ji(t,i,s);break e}Nn(t,i,c,s)}i=i.child}return i;case 5:return bh(i),t===null&&Pc(i),c=i.type,d=i.pendingProps,p=t!==null?t.memoizedProps:null,T=d.children,Sc(c,d)?T=null:p!==null&&Sc(c,p)&&(i.flags|=32),op(t,i),Nn(t,i,T,s),i.child;case 6:return t===null&&Pc(i),null;case 13:return dp(t,i,s);case 4:return Oc(i,i.stateNode.containerInfo),c=i.pendingProps,t===null?i.child=Ma(i,null,c,s):Nn(t,i,c,s),i.child;case 11:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:mi(c,d),ip(t,i,c,d,s);case 7:return Nn(t,i,i.pendingProps,s),i.child;case 8:return Nn(t,i,i.pendingProps.children,s),i.child;case 12:return Nn(t,i,i.pendingProps.children,s),i.child;case 10:e:{if(c=i.type._context,d=i.pendingProps,p=i.memoizedProps,T=d.value,Gt(Ro,c._currentValue),c._currentValue=T,p!==null)if(hi(p.value,T)){if(p.children===d.children&&!kn.current){i=ji(t,i,s);break e}}else for(p=i.child,p!==null&&(p.return=i);p!==null;){var k=p.dependencies;if(k!==null){T=p.child;for(var G=k.firstContext;G!==null;){if(G.context===c){if(p.tag===1){G=qi(-1,s&-s),G.tag=2;var de=p.updateQueue;if(de!==null){de=de.shared;var Se=de.pending;Se===null?G.next=G:(G.next=Se.next,Se.next=G),de.pending=G}}p.lanes|=s,G=p.alternate,G!==null&&(G.lanes|=s),Uc(p.return,s,i),k.lanes|=s;break}G=G.next}}else if(p.tag===10)T=p.type===i.type?null:p.child;else if(p.tag===18){if(T=p.return,T===null)throw Error(n(341));T.lanes|=s,k=T.alternate,k!==null&&(k.lanes|=s),Uc(T,s,i),T=p.sibling}else T=p.child;if(T!==null)T.return=p;else for(T=p;T!==null;){if(T===i){T=null;break}if(p=T.sibling,p!==null){p.return=T.return,T=p;break}T=T.return}p=T}Nn(t,i,d.children,s),i=i.child}return i;case 9:return d=i.type,c=i.pendingProps.children,Ta(i,s),d=ii(d),c=c(d),i.flags|=1,Nn(t,i,c,s),i.child;case 14:return c=i.type,d=mi(c,i.pendingProps),d=mi(c.type,d),rp(t,i,c,d,s);case 15:return ap(t,i,i.type,i.pendingProps,s);case 17:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:mi(c,d),Ho(t,i),i.tag=1,Fn(c)?(t=!0,Eo(i)):t=!1,Ta(i,s),$h(i,c,d),Zc(i,c,d,s),tu(null,i,c,!0,t,s);case 19:return hp(t,i,s);case 22:return sp(t,i,s)}throw Error(n(156,i.tag))};function Fp(t,i){return Fr(t,i)}function dv(t,i,s,c){this.tag=t,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function si(t,i,s,c){return new dv(t,i,s,c)}function Su(t){return t=t.prototype,!(!t||!t.isReactComponent)}function fv(t){if(typeof t=="function")return Su(t)?1:0;if(t!=null){if(t=t.$$typeof,t===J)return 11;if(t===H)return 14}return 2}function Sr(t,i){var s=t.alternate;return s===null?(s=si(t.tag,i,t.key,t.mode),s.elementType=t.elementType,s.type=t.type,s.stateNode=t.stateNode,s.alternate=t,t.alternate=s):(s.pendingProps=i,s.type=t.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=t.flags&14680064,s.childLanes=t.childLanes,s.lanes=t.lanes,s.child=t.child,s.memoizedProps=t.memoizedProps,s.memoizedState=t.memoizedState,s.updateQueue=t.updateQueue,i=t.dependencies,s.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},s.sibling=t.sibling,s.index=t.index,s.ref=t.ref,s}function Jo(t,i,s,c,d,p){var T=2;if(c=t,typeof t=="function")Su(t)&&(T=1);else if(typeof t=="string")T=5;else e:switch(t){case U:return Yr(s.children,d,p,i);case E:T=8,d|=8;break;case I:return t=si(12,s,i,d|2),t.elementType=I,t.lanes=p,t;case ne:return t=si(13,s,i,d),t.elementType=ne,t.lanes=p,t;case j:return t=si(19,s,i,d),t.elementType=j,t.lanes=p,t;case W:return Qo(s,d,p,i);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case O:T=10;break e;case X:T=9;break e;case J:T=11;break e;case H:T=14;break e;case ae:T=16,c=null;break e}throw Error(n(130,t==null?t:typeof t,""))}return i=si(T,s,i,d),i.elementType=t,i.type=c,i.lanes=p,i}function Yr(t,i,s,c){return t=si(7,t,c,i),t.lanes=s,t}function Qo(t,i,s,c){return t=si(22,t,c,i),t.elementType=W,t.lanes=s,t.stateNode={isHidden:!1},t}function Mu(t,i,s){return t=si(6,t,null,i),t.lanes=s,t}function Eu(t,i,s){return i=si(4,t.children!==null?t.children:[],t.key,i),i.lanes=s,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}function hv(t,i,s,c,d){this.tag=i,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ve(0),this.expirationTimes=Ve(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ve(0),this.identifierPrefix=c,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function Tu(t,i,s,c,d,p,T,k,G){return t=new hv(t,i,s,k,G),i===1?(i=1,p===!0&&(i|=8)):i=0,p=si(3,null,null,i),t.current=p,p.stateNode=t,p.memoizedState={element:c,isDehydrated:s,cache:null,transitions:null,pendingSuspenseBoundaries:null},Fc(p),t}function pv(t,i,s){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:R,key:c==null?null:""+c,children:t,containerInfo:i,implementation:s}}function Op(t){if(!t)return fr;t=t._reactInternals;e:{if(Ln(t)!==t||t.tag!==1)throw Error(n(170));var i=t;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Fn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(n(171))}if(t.tag===1){var s=t.type;if(Fn(s))return fh(t,s,i)}return i}function zp(t,i,s,c,d,p,T,k,G){return t=Tu(s,c,!0,t,d,p,T,k,G),t.context=Op(null),s=t.current,c=In(),d=xr(s),p=qi(c,d),p.callback=i??null,mr(s,p,d),t.current.lanes=d,nn(t,d,c),Bn(t,c),t}function el(t,i,s,c){var d=i.current,p=In(),T=xr(d);return s=Op(s),i.context===null?i.context=s:i.pendingContext=s,i=qi(p,T),i.payload={element:t},c=c===void 0?null:c,c!==null&&(i.callback=c),t=mr(d,i,T),t!==null&&(_i(t,d,T,p),Lo(t,d,T)),T}function tl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Bp(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var s=t.retryLane;t.retryLane=s!==0&&s<i?s:i}}function wu(t,i){Bp(t,i),(t=t.alternate)&&Bp(t,i)}function mv(){return null}var Hp=typeof reportError=="function"?reportError:function(t){console.error(t)};function Au(t){this._internalRoot=t}nl.prototype.render=Au.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(n(409));el(t,i,null,null)},nl.prototype.unmount=Au.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;qr(function(){el(null,t,null,null)}),i[Hi]=null}};function nl(t){this._internalRoot=t}nl.prototype.unstable_scheduleHydration=function(t){if(t){var i=ui();t={blockedOn:null,target:t,priority:i};for(var s=0;s<or.length&&i!==0&&i<or[s].priority;s++);or.splice(s,0,t),s===0&&bf(t)}};function bu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function il(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Vp(){}function gv(t,i,s,c,d){if(d){if(typeof c=="function"){var p=c;c=function(){var de=tl(T);p.call(de)}}var T=zp(i,c,t,0,null,!1,!1,"",Vp);return t._reactRootContainer=T,t[Hi]=T.current,xs(t.nodeType===8?t.parentNode:t),qr(),T}for(;d=t.lastChild;)t.removeChild(d);if(typeof c=="function"){var k=c;c=function(){var de=tl(G);k.call(de)}}var G=Tu(t,0,!1,null,null,!1,!1,"",Vp);return t._reactRootContainer=G,t[Hi]=G.current,xs(t.nodeType===8?t.parentNode:t),qr(function(){el(i,G,s,c)}),G}function rl(t,i,s,c,d){var p=s._reactRootContainer;if(p){var T=p;if(typeof d=="function"){var k=d;d=function(){var G=tl(T);k.call(G)}}el(i,T,t,d)}else T=gv(s,i,t,d,c);return tl(T)}Bi=function(t){switch(t.tag){case 3:var i=t.stateNode;if(i.current.memoizedState.isDehydrated){var s=Xe(i.pendingLanes);s!==0&&(Mn(i,s|1),Bn(i,Yt()),(Ct&6)===0&&(Ra=Yt()+500,hr()))}break;case 13:qr(function(){var c=Xi(t,1);if(c!==null){var d=In();_i(c,t,1,d)}}),wu(t,1)}},Nt=function(t){if(t.tag===13){var i=Xi(t,134217728);if(i!==null){var s=In();_i(i,t,134217728,s)}wu(t,134217728)}},qt=function(t){if(t.tag===13){var i=xr(t),s=Xi(t,i);if(s!==null){var c=In();_i(s,t,i,c)}wu(t,i)}},ui=function(){return gt},zt=function(t,i){var s=gt;try{return gt=t,i()}finally{gt=s}},rt=function(t,i,s){switch(i){case"input":if(pt(t,s),i=s.name,s.type==="radio"&&i!=null){for(s=t;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<s.length;i++){var c=s[i];if(c!==t&&c.form===t.form){var d=So(c);if(!d)throw Error(n(90));dt(c),pt(c,d)}}}break;case"textarea":Ut(t,s);break;case"select":i=s.value,i!=null&&be(t,!!s.multiple,i,!1)}},ze=_u,_e=qr;var vv={usingClientEntryPoint:!1,Events:[Ms,ga,So,ge,Ie,_u]},ks={findFiberByHostInstance:Or,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},_v={bundleType:ks.bundleType,version:ks.version,rendererPackageName:ks.rendererPackageName,rendererConfig:ks.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:b.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=kr(t),t===null?null:t.stateNode},findFiberByHostInstance:ks.findFiberByHostInstance||mv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var al=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!al.isDisabled&&al.supportsFiber)try{re=al.inject(_v),te=al}catch{}}return Hn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=vv,Hn.createPortal=function(t,i){var s=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!bu(i))throw Error(n(200));return pv(t,i,null,s)},Hn.createRoot=function(t,i){if(!bu(t))throw Error(n(299));var s=!1,c="",d=Hp;return i!=null&&(i.unstable_strictMode===!0&&(s=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onRecoverableError!==void 0&&(d=i.onRecoverableError)),i=Tu(t,1,!1,null,null,s,!1,c,d),t[Hi]=i.current,xs(t.nodeType===8?t.parentNode:t),new Au(i)},Hn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(n(188)):(t=Object.keys(t).join(","),Error(n(268,t)));return t=kr(i),t=t===null?null:t.stateNode,t},Hn.flushSync=function(t){return qr(t)},Hn.hydrate=function(t,i,s){if(!il(i))throw Error(n(200));return rl(null,t,i,!0,s)},Hn.hydrateRoot=function(t,i,s){if(!bu(t))throw Error(n(405));var c=s!=null&&s.hydratedSources||null,d=!1,p="",T=Hp;if(s!=null&&(s.unstable_strictMode===!0&&(d=!0),s.identifierPrefix!==void 0&&(p=s.identifierPrefix),s.onRecoverableError!==void 0&&(T=s.onRecoverableError)),i=zp(i,null,t,1,s??null,d,!1,p,T),t[Hi]=i.current,xs(t),c)for(t=0;t<c.length;t++)s=c[t],d=s._getVersion,d=d(s._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[s,d]:i.mutableSourceEagerHydrationData.push(s,d);return new nl(i)},Hn.render=function(t,i,s){if(!il(i))throw Error(n(200));return rl(null,t,i,!1,s)},Hn.unmountComponentAtNode=function(t){if(!il(t))throw Error(n(40));return t._reactRootContainer?(qr(function(){rl(null,null,t,!1,function(){t._reactRootContainer=null,t[Hi]=null})}),!0):!1},Hn.unstable_batchedUpdates=_u,Hn.unstable_renderSubtreeIntoContainer=function(t,i,s,c){if(!il(s))throw Error(n(200));if(t==null||t._reactInternals===void 0)throw Error(n(38));return rl(t,i,s,!1,c)},Hn.version="18.3.1-next-f1338f8080-20240426",Hn}var $p;function bv(){if($p)return Pu.exports;$p=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(e){console.error(e)}}return a(),Pu.exports=Av(),Pu.exports}var Zp;function Cv(){if(Zp)return sl;Zp=1;var a=bv();return sl.createRoot=a.createRoot,sl.hydrateRoot=a.hydrateRoot,sl}var Rv=Cv();const Pv=yv(Rv);var Rt=nf();const $n=[{id:"a",hiragana:"あ",katakana:"ア",romaji:"a",type:"vowel",element:"spirito",hp:45,attack:30,defense:25,speed:40,special:"Origine Primordiale",description:`Il primo suono, l'inizio di tutto. Come il Verbo di Giovanni: "In principio era il Verbo"`,level:1},{id:"i",hiragana:"い",katakana:"イ",romaji:"i",type:"vowel",element:"acqua",hp:40,attack:35,defense:30,speed:45,special:"Flusso Cosciente",description:"Scorre come il fiume della coscienza nel Buddismo",level:1},{id:"u",hiragana:"う",katakana:"ウ",romaji:"u",type:"vowel",element:"terra",hp:55,attack:25,defense:40,speed:30,special:"Radicamento",description:"Solido come la fede che muove le montagne",level:1},{id:"e",hiragana:"え",katakana:"エ",romaji:"e",type:"vowel",element:"fuoco",hp:35,attack:45,defense:20,speed:50,special:"Fiamma Sacra",description:"Ardente come il fuoco dello Spirito Santo",level:1},{id:"o",hiragana:"お",katakana:"オ",romaji:"o",type:"vowel",element:"vuoto",hp:50,attack:35,defense:35,speed:35,special:"Cerchio Zen",description:"Il cerchio ensō, perfezione e vuoto",level:1},{id:"ka",hiragana:"か",katakana:"カ",romaji:"ka",type:"consonant",element:"fuoco",hp:50,attack:40,defense:30,speed:35,special:"Karma Ardente",description:"Il karma che brucia e purifica",level:2},{id:"ki",hiragana:"き",katakana:"キ",romaji:"ki",type:"consonant",element:"aria",hp:40,attack:35,defense:25,speed:55,special:"Ki Vitale",description:"L'energia vitale che scorre nell'universo",level:2},{id:"ku",hiragana:"く",katakana:"ク",romaji:"ku",type:"consonant",element:"vuoto",hp:45,attack:30,defense:35,speed:40,special:"Śūnyatā",description:"Il vuoto fondamentale del Buddismo Mahayana",level:2},{id:"ke",hiragana:"け",katakana:"ケ",romaji:"ke",type:"consonant",element:"terra",hp:55,attack:35,defense:45,speed:25,special:"Kenshō",description:"Vedere la propria natura essenziale",level:2},{id:"ko",hiragana:"こ",katakana:"コ",romaji:"ko",type:"consonant",element:"spirito",hp:48,attack:38,defense:32,speed:38,special:"Kokoro",description:"Il cuore-mente, centro dell'essere",level:2},{id:"sa",hiragana:"さ",katakana:"サ",romaji:"sa",type:"consonant",element:"acqua",hp:42,attack:38,defense:28,speed:48,special:"Samsara",description:"Il ciclo infinito di nascita e morte",level:3},{id:"shi",hiragana:"し",katakana:"シ",romaji:"shi",type:"consonant",element:"spirito",hp:38,attack:42,defense:25,speed:52,special:"Shinrone",description:"La fede pura nel Buddismo della Terra Pura",level:3},{id:"su",hiragana:"す",katakana:"ス",romaji:"su",type:"consonant",element:"vuoto",hp:50,attack:30,defense:40,speed:35,special:"Sūtra",description:"Le scritture sacre che illuminano",level:3},{id:"se",hiragana:"せ",katakana:"セ",romaji:"se",type:"consonant",element:"terra",hp:55,attack:32,defense:45,speed:28,special:"Sekai",description:"Il mondo fenomenico, maya e illusione",level:3},{id:"so",hiragana:"そ",katakana:"ソ",romaji:"so",type:"consonant",element:"aria",hp:40,attack:36,defense:30,speed:50,special:"Satori",description:"Il risveglio improvviso",level:3},{id:"ta",hiragana:"た",katakana:"タ",romaji:"ta",type:"consonant",element:"fuoco",hp:52,attack:42,defense:28,speed:38,special:"Tathāgata",description:"Colui che è così venuto, epiteto del Buddha",level:4},{id:"chi",hiragana:"ち",katakana:"チ",romaji:"chi",type:"consonant",element:"terra",hp:48,attack:35,defense:42,speed:32,special:"Chikō",description:"La saggezza che discrimina",level:4},{id:"tsu",hiragana:"つ",katakana:"ツ",romaji:"tsu",type:"consonant",element:"acqua",hp:44,attack:38,defense:34,speed:44,special:"Tsunami Sacro",description:"L'onda che purifica come il battesimo",level:4},{id:"te",hiragana:"て",katakana:"テ",romaji:"te",type:"consonant",element:"aria",hp:38,attack:40,defense:26,speed:52,special:"Tegina",description:"La mano che guida, come la mano di Dio",level:4},{id:"to",hiragana:"と",katakana:"ト",romaji:"to",type:"consonant",element:"spirito",hp:46,attack:36,defense:36,speed:40,special:"Tō",description:"La porta verso l'illuminazione",level:4},{id:"na",hiragana:"な",katakana:"ナ",romaji:"na",type:"consonant",element:"terra",hp:54,attack:32,defense:44,speed:28,special:"Nirvana",description:"L'estinzione del desiderio, la pace ultima",level:5},{id:"ni",hiragana:"に",katakana:"ニ",romaji:"ni",type:"consonant",element:"acqua",hp:42,attack:36,defense:32,speed:46,special:"Nianfo",description:"La recitazione del nome di Buddha",level:5},{id:"nu",hiragana:"ぬ",katakana:"ヌ",romaji:"nu",type:"consonant",element:"vuoto",hp:40,attack:34,defense:30,speed:42,special:"Nūru",description:"La luce divina dell'Islam, An-Nūr",level:5},{id:"ne",hiragana:"ね",katakana:"ネ",romaji:"ne",type:"consonant",element:"spirito",hp:46,attack:38,defense:34,speed:40,special:"Nehan",description:"Il Nirvana giapponese, liberazione finale",level:5},{id:"no",hiragana:"の",katakana:"ノ",romaji:"no",type:"consonant",element:"aria",hp:38,attack:40,defense:28,speed:50,special:"No-self",description:"Anattā, la non-esistenza del sé",level:5},{id:"ha",hiragana:"は",katakana:"ハ",romaji:"ha",type:"consonant",element:"spirito",hp:48,attack:40,defense:30,speed:42,special:"Halelujah",description:"Lodate il Signore, eco del divino",level:6},{id:"hi",hiragana:"ひ",katakana:"ヒ",romaji:"hi",type:"consonant",element:"fuoco",hp:42,attack:45,defense:25,speed:48,special:"Hi no Kami",description:"Il dio del fuoco shintoista",level:6},{id:"fu",hiragana:"ふ",katakana:"フ",romaji:"fu",type:"consonant",element:"aria",hp:40,attack:35,defense:30,speed:55,special:"Fūjin",description:"Il dio del vento nella mitologia giapponese",level:6},{id:"he",hiragana:"へ",katakana:"ヘ",romaji:"he",type:"consonant",element:"terra",hp:52,attack:30,defense:42,speed:32,special:"Heiwa",description:"La pace, shalom, salam, pace interiore",level:6},{id:"ho",hiragana:"ほ",katakana:"ホ",romaji:"ho",type:"consonant",element:"acqua",hp:44,attack:36,defense:36,speed:40,special:"Hotoke",description:"Il Buddha, l'illuminato",level:6},{id:"ma",hiragana:"ま",katakana:"マ",romaji:"ma",type:"consonant",element:"vuoto",hp:46,attack:34,defense:38,speed:36,special:"Māyā",description:"L'illusione cosmica dell'Induismo",level:7},{id:"mi",hiragana:"み",katakana:"ミ",romaji:"mi",type:"consonant",element:"acqua",hp:44,attack:38,defense:32,speed:44,special:"Mizu Baptism",description:"L'acqua battesimale che purifica",level:7},{id:"mu",hiragana:"む",katakana:"ム",romaji:"mu",type:"consonant",element:"vuoto",hp:50,attack:30,defense:45,speed:30,special:"Mu",description:"Il nulla, il non-essere del Tao e dello Zen",level:7},{id:"me",hiragana:"め",katakana:"メ",romaji:"me",type:"consonant",element:"spirito",hp:42,attack:40,defense:28,speed:48,special:"Meikyu",description:"Il labirinto dell'esistenza",level:7},{id:"mo",hiragana:"も",katakana:"モ",romaji:"mo",type:"consonant",element:"terra",hp:54,attack:32,defense:44,speed:26,special:"Moksha",description:"La liberazione dal ciclo delle rinascite",level:7},{id:"ya",hiragana:"や",katakana:"ヤ",romaji:"ya",type:"consonant",element:"fuoco",hp:46,attack:42,defense:28,speed:44,special:"Yahweh",description:"Il nome ineffabile di Dio, YHWH",level:8},{id:"yu",hiragana:"ゆ",katakana:"ユ",romaji:"yu",type:"consonant",element:"acqua",hp:44,attack:36,defense:34,speed:42,special:"Yuga",description:"L'era cosmica dell'Induismo",level:8},{id:"yo",hiragana:"よ",katakana:"ヨ",romaji:"yo",type:"consonant",element:"spirito",hp:48,attack:38,defense:36,speed:38,special:"Yōsei",description:"Lo spirito della natura nello Shinto",level:8},{id:"ra",hiragana:"ら",katakana:"ラ",romaji:"ra",type:"consonant",element:"fuoco",hp:50,attack:44,defense:26,speed:46,special:"Rahman",description:"Ar-Rahman, il Misericordioso dell'Islam",level:9},{id:"ri",hiragana:"り",katakana:"リ",romaji:"ri",type:"consonant",element:"aria",hp:38,attack:38,defense:28,speed:54,special:"Rinnascita",description:"La reincarnazione, samsara",level:9},{id:"ru",hiragana:"る",katakana:"ル",romaji:"ru",type:"consonant",element:"terra",hp:52,attack:34,defense:42,speed:30,special:"Rūḥ",description:"Lo spirito nell'Islam, il soffio divino",level:9},{id:"re",hiragana:"れ",katakana:"レ",romaji:"re",type:"consonant",element:"spirito",hp:44,attack:40,defense:32,speed:44,special:"Resurrezione",description:"La rinascita in Cristo",level:9},{id:"ro",hiragana:"ろ",katakana:"ロ",romaji:"ro",type:"consonant",element:"vuoto",hp:46,attack:36,defense:36,speed:38,special:"Rōdō",description:"Il lavoro come preghiera, ora et labora",level:9},{id:"wa",hiragana:"わ",katakana:"ワ",romaji:"wa",type:"consonant",element:"spirito",hp:50,attack:38,defense:38,speed:38,special:"Wa",description:"L'armonia, principio fondamentale giapponese",level:10},{id:"wo",hiragana:"を",katakana:"ヲ",romaji:"wo",type:"consonant",element:"acqua",hp:44,attack:34,defense:34,speed:44,special:"Wu Wei",description:"Il non-agire del Taoismo",level:10},{id:"n",hiragana:"ん",katakana:"ン",romaji:"n",type:"consonant",element:"vuoto",hp:60,attack:30,defense:50,speed:25,special:"Om",description:"Il suono primordiale, AUM, l'origine di tutto",level:10},{id:"ga",hiragana:"が",katakana:"ガ",romaji:"ga",type:"consonant",element:"terra",hp:58,attack:42,defense:38,speed:30,special:"Ganar",description:"La perseveranza del bodhisattva",level:11},{id:"gi",hiragana:"ぎ",katakana:"ギ",romaji:"gi",type:"consonant",element:"acqua",hp:48,attack:38,defense:36,speed:40,special:"Giri",description:"Il dovere, l'onore del samurai",level:11},{id:"gu",hiragana:"ぐ",katakana:"グ",romaji:"gu",type:"consonant",element:"vuoto",hp:52,attack:34,defense:44,speed:28,special:"Gufu",description:"La carità, il dono compassionevole",level:11},{id:"ge",hiragana:"げ",katakana:"ゲ",romaji:"ge",type:"consonant",element:"fuoco",hp:44,attack:44,defense:28,speed:46,special:"Gehenna",description:"Il fuoco purificatore",level:11},{id:"go",hiragana:"ご",katakana:"ゴ",romaji:"go",type:"consonant",element:"spirito",hp:50,attack:40,defense:36,speed:36,special:"Gongyo",description:"La pratica修行, disciplina spirituale",level:11},{id:"za",hiragana:"ざ",katakana:"ザ",romaji:"za",type:"consonant",element:"aria",hp:42,attack:40,defense:30,speed:50,special:"Zazen",description:"La meditazione seduta, cuore dello Zen",level:12},{id:"ji",hiragana:"じ",katakana:"ジ",romaji:"ji",type:"consonant",element:"spirito",hp:46,attack:42,defense:32,speed:44,special:"Jihad",description:"La lotta interiore contro il proprio ego",level:12},{id:"zu",hiragana:"ず",katakana:"ズ",romaji:"zu",type:"consonant",element:"terra",hp:54,attack:36,defense:42,speed:30,special:"Zugai",description:"Il peccato originale, la caduta",level:12},{id:"ze",hiragana:"ぜ",katakana:"ゼ",romaji:"ze",type:"consonant",element:"fuoco",hp:40,attack:46,defense:24,speed:52,special:"Zeal",description:"Lo zelo del martire, fede ardente",level:12},{id:"zo",hiragana:"ぞ",katakana:"ゾ",romaji:"zo",type:"consonant",element:"vuoto",hp:48,attack:38,defense:38,speed:36,special:"Zohar",description:"Lo splendore della Kabbalah ebraica",level:12},{id:"da",hiragana:"だ",katakana:"ダ",romaji:"da",type:"consonant",element:"fuoco",hp:50,attack:44,defense:30,speed:42,special:"Dharma",description:"La legge cosmica, l'insegnamento del Buddha",level:13},{id:"di",hiragana:"ぢ",katakana:"ヂ",romaji:"di",type:"consonant",element:"acqua",hp:44,attack:38,defense:34,speed:44,special:"Dhyāna",description:"La contemplazione, origine della parola Zen",level:13},{id:"du",hiragana:"づ",katakana:"ヅ",romaji:"du",type:"consonant",element:"terra",hp:52,attack:36,defense:44,speed:28,special:"Dukkha",description:"La sofferenza, prima nobile verità",level:13},{id:"de",hiragana:"で",katakana:"デ",romaji:"de",type:"consonant",element:"spirito",hp:46,attack:40,defense:34,speed:40,special:"Deus",description:"Dio, il creatore di tutte le cose",level:13},{id:"do",hiragana:"ど",katakana:"ド",romaji:"do",type:"consonant",element:"vuoto",hp:48,attack:38,defense:38,speed:36,special:"Dō",description:"La Via, il Tao, il cammino",level:13},{id:"ba",hiragana:"ば",katakana:"バ",romaji:"ba",type:"consonant",element:"acqua",hp:46,attack:38,defense:36,speed:42,special:"Bodhi",description:"Il risveglio, l'illuminazione sotto l'albero",level:14},{id:"bi",hiragana:"び",katakana:"ビ",romaji:"bi",type:"consonant",element:"spirito",hp:44,attack:42,defense:30,speed:46,special:"Bīsmillah",description:"Nel nome di Dio, inizio di ogni azione",level:14},{id:"bu",hiragana:"ぶ",katakana:"ブ",romaji:"bu",type:"consonant",element:"terra",hp:54,attack:34,defense:46,speed:26,special:"Bushidō",description:"La via del guerriero, codice d'onore",level:14},{id:"be",hiragana:"べ",katakana:"ベ",romaji:"be",type:"consonant",element:"fuoco",hp:40,attack:46,defense:24,speed:52,special:"Bethel",description:"La casa di Dio, luogo sacro",level:14},{id:"bo",hiragana:"ぼ",katakana:"ボ",romaji:"bo",type:"consonant",element:"vuoto",hp:50,attack:36,defense:40,speed:34,special:"Bodhisattva",description:"Colui che rinuncia al nirvana per salvare tutti",level:14},{id:"pa",hiragana:"ぱ",katakana:"パ",romaji:"pa",type:"consonant",element:"fuoco",hp:42,attack:48,defense:22,speed:54,special:"Paradiso",description:"Il giardino dell'Eden, Jannah",level:15},{id:"pi",hiragana:"ぴ",katakana:"ピ",romaji:"pi",type:"consonant",element:"aria",hp:38,attack:44,defense:26,speed:56,special:"Prajñā",description:"La saggezza trascendentale",level:15},{id:"pu",hiragana:"ぷ",katakana:"プ",romaji:"pu",type:"consonant",element:"spirito",hp:48,attack:36,defense:38,speed:38,special:"Puja",description:"Il culto, la devozione induista",level:15},{id:"pe",hiragana:"ぺ",katakana:"ペ",romaji:"pe",type:"consonant",element:"acqua",hp:44,attack:40,defense:32,speed:46,special:"Pietà",description:"La misericordia divina, Rahma",level:15},{id:"po",hiragana:"ぽ",katakana:"ポ",romaji:"po",type:"consonant",element:"terra",hp:52,attack:34,defense:44,speed:30,special:"Polemone",description:"Il guerriero della fede, miles Christi",level:15},{id:"kya",hiragana:"きゃ",katakana:"キャ",romaji:"kya",type:"combination",element:"fuoco",hp:55,attack:48,defense:32,speed:45,special:"Kyōten",description:"I sutra, scritture sacre buddiste",level:16},{id:"kyu",hiragana:"きゅ",katakana:"キュ",romaji:"kyu",type:"combination",element:"vuoto",hp:50,attack:42,defense:38,speed:40,special:"Kyūsho",description:"Il punto vitale, la via dell'illuminazione",level:16},{id:"kyo",hiragana:"きょ",katakana:"キョ",romaji:"kyo",type:"combination",element:"spirito",hp:52,attack:44,defense:36,speed:42,special:"Kyōgai",description:"Il regno dell'illuminazione",level:16},{id:"sha",hiragana:"しゃ",katakana:"シャ",romaji:"sha",type:"combination",element:"acqua",hp:48,attack:40,defense:36,speed:44,special:"Sharia",description:"La legge divina dell'Islam",level:17},{id:"shu",hiragana:"しゅ",katakana:"シュ",romaji:"shu",type:"combination",element:"terra",hp:54,attack:38,defense:42,speed:34,special:"Shugyō",description:"L'ascesi, la pratica spirituale severa",level:17},{id:"sho",hiragana:"しょ",katakana:"ショ",romaji:"sho",type:"combination",element:"spirito",hp:50,attack:44,defense:34,speed:42,special:"Shōmatsu",description:"L'escatologia, la fine dei tempi",level:17},{id:"cha",hiragana:"ちゃ",katakana:"チャ",romaji:"cha",type:"combination",element:"aria",hp:44,attack:42,defense:30,speed:50,special:"Chakra",description:"I centri energetici dell'Induismo",level:18},{id:"chu",hiragana:"ちゅ",katakana:"チュ",romaji:"chu",type:"combination",element:"fuoco",hp:46,attack:46,defense:28,speed:48,special:"Chūdō",description:"La via di mezzo, Madhyamaka",level:18},{id:"cho",hiragana:"ちょ",katakana:"チョ",romaji:"cho",type:"combination",element:"vuoto",hp:48,attack:40,defense:38,speed:40,special:"Chōwa",description:"L'armonia universale",level:18},{id:"nya",hiragana:"にゃ",katakana:"ニャ",romaji:"nya",type:"combination",element:"spirito",hp:46,attack:38,defense:34,speed:46,special:"Nyāya",description:"La logica, filosofia indiana",level:19},{id:"nyu",hiragana:"にゅ",katakana:"ニュ",romaji:"nyu",type:"combination",element:"acqua",hp:44,attack:36,defense:36,speed:44,special:"Nyanbo",description:"La concentrazione, samādhi",level:19},{id:"nyo",hiragana:"にょ",katakana:"ニョ",romaji:"nyo",type:"combination",element:"terra",hp:50,attack:34,defense:42,speed:34,special:"Nyoirin",description:"Il gioiello che esaudisce i desideri",level:19},{id:"hya",hiragana:"ひゃ",katakana:"ヒャ",romaji:"hya",type:"combination",element:"fuoco",hp:48,attack:46,defense:30,speed:46,special:"Hyakume",description:"I cento occhi della saggezza",level:20},{id:"hyu",hiragana:"ひゅ",katakana:"ヒュ",romaji:"hyu",type:"combination",element:"aria",hp:42,attack:42,defense:28,speed:52,special:"Hyōshi",description:"Il momento presente, l'eterno ora",level:20},{id:"hyo",hiragana:"ひょ",katakana:"ヒョ",romaji:"hyo",type:"combination",element:"vuoto",hp:46,attack:40,defense:36,speed:42,special:"Hyōden",description:"Il tempio della verità",level:20},{id:"mya",hiragana:"みゃ",katakana:"ミャ",romaji:"mya",type:"combination",element:"spirito",hp:50,attack:42,defense:36,speed:40,special:"Myōhō",description:"La legge mistica del Lotus Sutra",level:21},{id:"myu",hiragana:"みゅ",katakana:"ミュ",romaji:"myu",type:"combination",element:"acqua",hp:46,attack:38,defense:38,speed:42,special:"Myūzu",description:"Il mistero, il sacramento",level:21},{id:"myo",hiragana:"みょ",katakana:"ミョ",romaji:"myo",type:"combination",element:"terra",hp:52,attack:36,defense:44,speed:32,special:"Myōō",description:"I re della saggezza, divinità buddiste",level:21},{id:"rya",hiragana:"りゃ",katakana:"リャ",romaji:"rya",type:"combination",element:"fuoco",hp:48,attack:44,defense:32,speed:46,special:"Ryōiki",description:"Il regno spirituale",level:22},{id:"ryu",hiragana:"りゅ",katakana:"リュ",romaji:"ryu",type:"combination",element:"acqua",hp:50,attack:40,defense:38,speed:40,special:"Ryūjin",description:"Il dio drago del mare",level:22},{id:"ryo",hiragana:"りょ",katakana:"リョ",romaji:"ryo",type:"combination",element:"spirito",hp:52,attack:42,defense:38,speed:38,special:"Ryōzen",description:"La montagna sacra della meditazione",level:22},{id:"gya",hiragana:"ぎゃ",katakana:"ギャ",romaji:"gya",type:"combination",element:"terra",hp:56,attack:44,defense:40,speed:32,special:"Gyakujō",description:"La purezza inversa, paradosso Zen",level:23},{id:"gyu",hiragana:"ぎゅ",katakana:"ギュ",romaji:"gyu",type:"combination",element:"vuoto",hp:50,attack:40,defense:42,speed:36,special:"Gyūnyū",description:"L'ingresso nel vuoto assoluto",level:23},{id:"gyo",hiragana:"ぎょ",katakana:"ギョ",romaji:"gyo",type:"combination",element:"spirito",hp:52,attack:42,defense:38,speed:38,special:"Gyōja",description:"L'asceta, colui che pratica",level:23},{id:"ja",hiragana:"じゃ",katakana:"ジャ",romaji:"ja",type:"combination",element:"fuoco",hp:46,attack:48,defense:28,speed:48,special:"Jātaka",description:"Le storie delle vite precedenti del Buddha",level:24},{id:"ju",hiragana:"じゅ",katakana:"ジュ",romaji:"ju",type:"combination",element:"aria",hp:44,attack:44,defense:30,speed:50,special:"Jūrin",description:"La ruota del Dharma che gira",level:24},{id:"jo",hiragana:"じょ",katakana:"ジョ",romaji:"jo",type:"combination",element:"acqua",hp:48,attack:40,defense:36,speed:42,special:"Jōdo",description:"La Terra Pura di Amida Buddha",level:24},{id:"bya",hiragana:"びゃ",katakana:"ビャ",romaji:"bya",type:"combination",element:"spirito",hp:50,attack:44,defense:36,speed:40,special:"Byakue",description:"La veste bianca della purezza",level:25},{id:"byu",hiragana:"びゅ",katakana:"ビュ",romaji:"byu",type:"combination",element:"vuoto",hp:48,attack:40,defense:40,speed:38,special:"Byōdō",description:"L'uguaglianza, principio buddista",level:25},{id:"byo",hiragana:"びょ",katakana:"ビョ",romaji:"byo",type:"combination",element:"terra",hp:54,attack:38,defense:44,speed:30,special:"Byōbu",description:"Il paravento che separa i mondi",level:25},{id:"pya",hiragana:"ぴゃ",katakana:"ピャ",romaji:"pya",type:"combination",element:"fuoco",hp:44,attack:50,defense:24,speed:54,special:"Pyramis",description:"La piramide, ascensione verso il divino",level:26},{id:"pyu",hiragana:"ぴゅ",katakana:"ピュ",romaji:"pyu",type:"combination",element:"aria",hp:40,attack:46,defense:26,speed:56,special:"Purusha",description:"Lo spirito cosmico dell'Induismo",level:26},{id:"pyo",hiragana:"ぴょ",katakana:"ピョ",romaji:"pyo",type:"combination",element:"spirito",hp:48,attack:44,defense:34,speed:44,special:"Pythia",description:"L'oracolo, voce del divino",level:26}],Jp={fuoco:{fuoco:.5,acqua:.5,terra:2,aria:1,spirito:1,vuoto:1.5},acqua:{fuoco:2,acqua:.5,terra:.5,aria:1,spirito:1.5,vuoto:1},terra:{fuoco:.5,acqua:2,terra:.5,aria:.5,spirito:1,vuoto:2},aria:{fuoco:1,acqua:1,terra:2,aria:.5,spirito:1.5,vuoto:1},spirito:{fuoco:1,acqua:.5,terra:1,aria:.5,spirito:.5,vuoto:2},vuoto:{fuoco:.5,acqua:1,terra:.5,aria:1,spirito:.5,vuoto:.5}};function Lv(a,e){const n={genesis:[1,2,3,4,5,6,7,8,9,10],cathedral:[11,12,13,14,15,56,57,58,59,60],temple:[16,17,18,19,20,61,62,63,64,65],mosque:[21,22,23,24,25,66,67,68,69,70],garden:[26,27,28,29,30,71,72,73,74,75],desert:[31,32,33,34,35,76,77,78,79,80],mountain:[36,37,38,39,40,81,82,83,84,85],abyss:[41,42,43,44,45,86,87,88,89,90],final:[46,47,48,49,50,51,52,53,54,55]},o=(n[a]||n.genesis).map(l=>$n[l-1]).filter(l=>l.level<=e+3);return o.length>0?o:$n.slice(0,5)}const Er=[{id:"genesis",name:"Pianura della Genesi",description:"Dove tutto ebbe inizio. Praterie verdi sotto un cielo infinito. I kana più puri vagano qui.",color:"#4ade80",ambientColor:"#fef9c3",groundColor:"#22c55e",requiredLevel:1,wildKanaLevels:[1,5],encounters:15,connections:["cathedral","temple","garden"],religiousTheme:"Creazione",philosophy:"Tutte le tradizioni parlano di un inizio. Bereshit, In principio, Kun fayakun..."},{id:"cathedral",name:"Cattedrale della Luce",description:"Una gotica cattedrale di cristallo. Vetrate colorate narrano storie di fede e dubbio.",color:"#fbbf24",ambientColor:"#fef3c7",groundColor:"#92400e",requiredLevel:5,wildKanaLevels:[5,12],encounters:12,antagonist:"cristoforo",puzzleId:"count_vowels",connections:["genesis","desert","mountain"],religiousTheme:"Cristianesimo",philosophy:"Fede vs Ragione. Tommaso d'Aquino vs Lutero. La Riforma e la Controriforma."},{id:"temple",name:"Tempio del Vuoto",description:"Un tempio zen minimalista. Giardino di rocce, bambù, e il suono del silenzio.",color:"#a78bfa",ambientColor:"#ede9fe",groundColor:"#6b7280",requiredLevel:8,wildKanaLevels:[8,15],encounters:12,antagonist:"bodhi",puzzleId:"karma_sum",connections:["genesis","garden","abyss"],religiousTheme:"Buddismo",philosophy:"Śūnyatā, il vuoto. Anattā, il non-sé. La Via di Mezzo di Nagarjuna."},{id:"mosque",name:"Moschea della Mezzaluna",description:"Geometrie infinite, mosaici blu e oro. Il richiamo alla preghiera echeggia.",color:"#3b82f6",ambientColor:"#dbeafe",groundColor:"#1e3a5f",requiredLevel:10,wildKanaLevels:[10,18],encounters:10,antagonist:"rashid",puzzleId:"unique_elements",connections:["cathedral","desert","garden"],religiousTheme:"Islam",philosophy:"Tawhid, l'unicità divina. Sharia vs Sufismo. Ragione e rivelazione."},{id:"garden",name:"Giardino dell'Armonia",description:"Un giardino taoista dove tutto scorre naturalmente. Acqua, pietra, vuoto.",color:"#34d399",ambientColor:"#d1fae5",groundColor:"#065f46",requiredLevel:12,wildKanaLevels:[12,20],encounters:10,antagonist:"lao",puzzleId:"reverse_string",connections:["genesis","temple","mosque"],religiousTheme:"Taoismo",philosophy:"Wu wei, il non-agire. Yin e Yang. Il Tao che non può essere nominato."},{id:"desert",name:"Deserto della Rivelazione",description:"Sabbia infinita sotto stelle eterne. Qui Abramo, Mosè e Maometto cercarono la verità.",color:"#f59e0b",ambientColor:"#fef3c7",groundColor:"#d97706",requiredLevel:15,wildKanaLevels:[15,22],encounters:10,antagonist:"rabbi",puzzleId:"gematria",connections:["cathedral","mosque","mountain"],religiousTheme:"Ebraismo / Tradizioni abramitiche",philosophy:"Kabbalah, Ghematria, il Nome Ineffabile. Le radici comuni delle tre fedi."},{id:"mountain",name:"Montagna Sacra",description:"Una vetta che tocca il cielo. Qui Shiva medita e Kali danza. Gli dei sono vicini.",color:"#ef4444",ambientColor:"#fecaca",groundColor:"#7f1d1d",requiredLevel:18,wildKanaLevels:[18,24],encounters:8,antagonist:"kali",puzzleId:"find_strongest",connections:["cathedral","desert","abyss"],religiousTheme:"Induismo",philosophy:"Brahman, Atman, Maya. Il ciclo degli Yuga. La danza cosmica di Shiva."},{id:"abyss",name:"L'Abisso",description:"Oscurità totale. Qui Nietzsche guardò, e qui dimorano i kana più potenti e terribili.",color:"#1f2937",ambientColor:"#374151",groundColor:"#111827",requiredLevel:22,wildKanaLevels:[22,26],encounters:8,puzzleId:"max_depth",connections:["temple","mountain","final"],religiousTheme:"Nihilismo / Esistenzialismo",philosophy:"Dio è morto. L'abisso. L'oltreuomo. La libertà angosciosa di Sartre e Kierkegaard."},{id:"final",name:"Il Santuario Finale",description:"Dove tutte le verità convergono. Il centro di tutto. L'alfa e l'omega.",color:"#e879f9",ambientColor:"#fae8ff",groundColor:"#86198f",requiredLevel:25,wildKanaLevels:[25,26],encounters:5,puzzleId:"palindrome",connections:["abyss"],religiousTheme:"Sincretismo / Trascendenza",philosophy:"Tutte le strade portano alla verità? O la verità è oltre ogni strada?"}],Nv=[{speaker:"Narratore",text:"Nel principio era il Suono. E il Suono era con i Kana, e il Suono era i Kana."},{speaker:"Narratore",text:"Come nel Vangelo di Giovanni, così nel mondo dei Kana: tutto fu fatto per mezzo loro."},{speaker:"Professore Arata",text:"Benvenuto nel mondo dei Kana, giovane cercatore. Io sono il Professor Arata, studioso delle scritture."},{speaker:"Professore Arata",text:"Qui, ogni kana — hiragana e katakana — è un'entità vivente, un frammento della verità cosmica."},{speaker:"Professore Arata",text:`Come disse Lao Tzu nel Tao Te Ching: "Il Tao che può essere detto non è l'eterno Tao".`},{speaker:"Professore Arata",text:"Eppure noi cerchiamo di comprendere, di catturare, di far combattere questi spiriti del linguaggio."},{speaker:"Professore Arata",text:'Il Corano dice: "E insegnò ad Adamo tutti i nomi" (2:31). Anche tu devi imparare i nomi dei Kana.'},{speaker:"Professore Arata",text:"Scegli il tuo primo compagno. Ricorda: nel Buddismo, ogni scelta è un atto di karma."},{speaker:"Professore Arata",text:"あ (A) - Lo spirito dell'origine, il Verbo primordiale"},{speaker:"Professore Arata",text:"か (Ka) - Il karma ardente, la legge di causa ed effetto"},{speaker:"Professore Arata",text:"さ (Sa) - Il samsara, il ciclo eterno della rinascita"}],Iv={cristoforo:[{speaker:"Fra Cristoforo",text:"Fermati, eretico! Io sono Fra Cristoforo, servitore della Vera Luce!"},{speaker:"Fra Cristoforo",text:"I Kana sono stati corrotti dal peccato originale. Come la Genesi narra, la caduta ha contaminato tutto."},{speaker:"Fra Cristoforo",text:"Solo attraverso la purificazione del fuoco — Gehenna, se necessario — i Kana torneranno alla grazia."},{speaker:"Fra Cristoforo",text:`Sant'Agostino scrisse: "Extra Ecclesiam nulla salus". Fuori dalla mia chiesa, nessuna salvezza per questi spiriti!`},{speaker:"Fra Cristoforo",text:"La Riforma protestante ha dimostrato che la verità non appartiene a una sola istituzione... ma io SONO l'istituzione!"},{speaker:"Fra Cristoforo",text:"Come Torquemada prima di me, porterò la luce dove c'è oscurità. Preparati alla battaglia!"},{speaker:"Tu",text:'La fede non dovrebbe imporre, ma illuminare. Come disse San Francesco: "Predicate sempre il Vangelo, e se necessario usate le parole".'},{speaker:"Fra Cristoforo",text:'Parole vuote di un debole! La Verità è una spada, non una carezza! Deuteronomio 13: "Non ascolterai né lo seguirai"!'}],bodhi:[{speaker:"Monaco Bodhi",text:"...Silenzio. Ascolta il vento. Senti? È il suono del nulla che parla."},{speaker:"Monaco Bodhi",text:"Io sono Bodhi, colui che ha visto sotto l'albero. Ho compreso la vacuità di tutte le cose."},{speaker:"Monaco Bodhi",text:"Tu cerchi di catturare i Kana, di possederli. Ma il possesso è attaccamento, e l'attaccamento è sofferenza."},{speaker:"Monaco Bodhi",text:`Il Buddha disse nel Dhammapada: "L'odio non cessa con l'odio, ma con l'amore sola-mente".`},{speaker:"Monaco Bodhi",text:"Tuttavia... il mio errore è diverso. Io voglio liberare i Kana dall'esistenza stessa."},{speaker:"Monaco Bodhi",text:"Se tutto è vuoto, come dice Nāgārjuna nel Mūlamadhyamakakārikā, allora la liberazione è la non-esistenza."},{speaker:"Monaco Bodhi",text:"Distruggerò ogni kana per portarli nel Nirvana assoluto. Nessuna rinascita, nessun dolore."},{speaker:"Tu",text:"Ma il Buddha insegnò la Via di Mezzo! Né esistenza né non-esistenza. Il Nirvana non è annientamento!"},{speaker:"Monaco Bodhi",text:'Interessante... ma sbagli. Il cuore-sutra dice: "Forma è vuoto, vuoto è forma". Io porto la conclusione logica.'}],rashid:[{speaker:"Al-Rashid",text:"As-salāmu ʿalaykum, viaggiatore. O dovrei dire... peccatore?"},{speaker:"Al-Rashid",text:"Io sono Al-Rashid, il ben guidato. Porto la legge divina — la Sharia — a questo mondo caotico."},{speaker:"Al-Rashid",text:"I Kana vagano senza ordine, senza legge. Come i jahiliyyah prima dell'Islam, vivono nell'ignoranza."},{speaker:"Al-Rashid",text:"Ibn Taymiyyah insegnò che la legge divina deve governare ogni aspetto dell'esistenza."},{speaker:"Al-Rashid",text:"Organizzerò i Kana secondo il volere di Allah. Ogni kana al suo posto, come i pianeti nel firmamento."},{speaker:"Al-Rashid",text:'Il Corano dice: "Ogni anima gusterà la morte" (3:185). Anche i Kana devono sottomettersi.'},{speaker:"Tu",text:`Ma l'Islam stesso insegna: "Non c'è coercizione nella religione" (2:256). La libertà è sacra!`},{speaker:"Al-Rashid",text:"Citare il Corano contro di me? Come i mu'taziliti, usi la ragione dove serve sottomissione!"},{speaker:"Al-Rashid",text:"La Umma deve essere una. I Kana devono essere ordinati. Preparati!"}],kali:[{speaker:"Deva Kali",text:"*risate folli* Ahahaha! Il mondo trema al mio passaggio!"},{speaker:"Deva Kali",text:"Io sono Kali, la Distruttrice! Come nel Devī Māhātmya, danzo sulla distruzione del cosmo!"},{speaker:"Deva Kali",text:"Shiva stesso distrugge per ricreare. Ma io... io voglio accelerare il processo!"},{speaker:"Deva Kali",text:"I Yuga si susseguono: Satya, Treta, Dvapara, e ora il Kali Yuga — l'era dell'oscurità!"},{speaker:"Deva Kali",text:'Come dice la Bhagavad Gita (11.32): "Io sono il Tempo, il grande distruttore dei mondi"!'},{speaker:"Deva Kali",text:"Distruggerò tutti i Kana affinché Vishnu possa sognare un nuovo universo!"},{speaker:"Tu",text:"Ma Krishna insegnò ad Arjuna il dharma! La distruzione senza scopo è solo caos!"},{speaker:"Deva Kali",text:"Il caos è il grembo della creazione! Senza la mia danza, nulla di nuovo può nascere!"},{speaker:"Deva Kali",text:"Come il Tandava di Shiva, la mia distruzione è sacra! Combattimi se osi!"}],lao:[{speaker:"Saggio Lao",text:"..."},{speaker:"Saggio Lao",text:"Il miglior combattimento è quello che non avviene."},{speaker:"Saggio Lao",text:'Sono Lao, e seguo il Tao. Il Tao Te Ching dice: "Chi sa non parla, chi parla non sa".'},{speaker:"Saggio Lao",text:"Ma paradossalmente, eccomi qui a parlarti. Il paradosso è la porta della verità."},{speaker:"Saggio Lao",text:"Voglio che i Kana tornino al wu wei — il non-agire. Che smettano di combattere, di esistere attivamente."},{speaker:"Saggio Lao",text:"Zhuangzi sognò di essere una farfalla. Forse i Kana sognano di non essere Kana."},{speaker:"Saggio Lao",text:"Liberandoli dall'azione, li libererò dalla sofferenza dell'esistenza."},{speaker:"Tu",text:"Ma il Tao stesso si manifesta nell'azione! Il wu wei non è passività, è azione spontanea!"},{speaker:"Saggio Lao",text:"Ah, conosci il Tao. Allora sai che questa conversazione è già un paradosso. Combattiamo... o non combattiamo."}],rabbi:[{speaker:"Rabbi Ezra",text:"Shalom. Io sono il Rabbi Ezra, custode della Torah e della Kabbalah."},{speaker:"Rabbi Ezra",text:"Le lettere ebraiche — come i vostri Kana — sono i mattoni della creazione. Il Sefer Yetzirah lo insegna."},{speaker:"Rabbi Ezra",text:"Dio creò il mondo con 22 lettere. Ogni kana ha un corrispondente nel mistero divino."},{speaker:"Rabbi Ezra",text:"Ma voi le usate per combattere! È come usare il Nome Ineffabile per scopi profani!"},{speaker:"Rabbi Ezra",text:'Il Talmud dice: "Chi distrugge una vita è come se distruggesse un mondo intero" (Sanhedrin 4:5).'},{speaker:"Rabbi Ezra",text:"Voglio sigillare i Kana nell'Arca della Saggezza, dove solo i puri potranno accedervi."},{speaker:"Tu",text:"Ma la saggezza deve essere condivisa! Il Tikkun Olam — riparare il mondo — richiede partecipazione!"},{speaker:"Rabbi Ezra",text:"Hai ragione... forse. Ma il mistero deve essere protetto. Mostrami che sei degno!"}]},Qp={genesis:[{speaker:"Narratore",text:'Area della Genesi — Dove tutto ebbe inizio. Come il Bereshit ebraico: "In principio".'},{speaker:"Narratore",text:"I kana qui sono i più deboli, ma i più puri. Come anime appena create."},{speaker:"Villager",text:"Dicono che il primo kana — あ — contenga il segreto della creazione stessa."},{speaker:"Villager",text:"Come il Logos di Eraclito, il principio razionale che ordina il cosmo."}],cathedral:[{speaker:"Narratore",text:"La Cattedrale della Luce — Un luogo di fede incrollabile e dubbio tormentato."},{speaker:"Narratore",text:"Qui Fra Cristoforo raccoglie seguaci. La sua interpretazione della fede è... rigida."},{speaker:"Monaco",text:"Tommaso d'Aquino disse che la ragione e la fede non sono in conflitto. Ma Fra Cristoforo non è d'accordo."},{speaker:"Monaco",text:"L'Inquisizione spagnola... i roghi... la riforma... la fede è stata usata per così tanti scopi."},{speaker:"Pellegrino",text:'Come dice Pascal: "Il cuore ha le sue ragioni che la ragione non conosce".'}],temple:[{speaker:"Narratore",text:"Il Tempio del Vuoto — Dove la vacuità non è assenza, ma pienezza di possibilità."},{speaker:"Narratore",text:"Il Monaco Bodhi medita qui, cercando di comprendere se il nulla sia la risposta finale."},{speaker:"Monaco",text:'Dōgen Zenji scrisse nello Shōbōgenzō: "Studiare il sé è dimenticare il sé".'},{speaker:"Monaco",text:"Ma il Monaco Bodhi ha frainteso. Il vuoto non è distruzione, è interconnessione."},{speaker:"Pellegrino",text:"Il Pratītyasamutpāda — l'origine dipendente — mostra che nulla esiste indipendentemente."}],mosque:[{speaker:"Narratore",text:"La Moschea della Mezzaluna — Dove la sottomissione a Dio incontra la giustizia umana."},{speaker:"Narratore",text:"Al-Rashid cerca di imporre ordine assoluto, ma l'Islam stesso ha mille sfumature."},{speaker:"Studioso",text:'I Sufi dicono: "Dovunque ti volgi, lì è il volto di Dio" (Corano 2:115).'},{speaker:"Studioso",text:`Rumi cantava: "La porta dell'amore è aperta a tutti, senza distinzione".`},{speaker:"Pellegrino",text:"Ma Al-Rashid ha scelto la via del rigore, non della misericordia. Come i Kharijiti dei primi tempi."}],garden:[{speaker:"Narratore",text:"Il Giardino dell'Armonia — Dove il Tao scorre come acqua tra le pietre."},{speaker:"Narratore",text:"Il Saggio Lao insegna che il miglior modo di governare è non governare affatto."},{speaker:"Giardiniere",text:"Ogni pietra in questo giardino è al suo posto senza essere forzata. Wu wei in azione."},{speaker:"Giardiniere",text:"Il Liezi racconta di un uomo che imparò a non avere paura. Il segreto? Accettare tutto."},{speaker:"Pellegrino",text:"Ma anche il Taoismo ha i suoi estremi. Il wu wei portato all'eccesso è apatia."}],desert:[{speaker:"Narratore",text:"Il Deserto della Rivelazione — Dove i profeti hanno camminato e le stelle parlano."},{speaker:"Narratore",text:"Qui si incontrano le tradizioni abramitiche: ebraismo, cristianesimo, islam."},{speaker:"Nomade",text:"Abramo camminò in questo deserto. Mosè ricevette la Legge. Maometto ebbe le rivelazioni."},{speaker:"Nomade",text:"Tutti cercavano la stessa verità, con parole diverse. Come i kana hiragana e katakana."},{speaker:"Pellegrino",text:"La Kabbalah, la teologia cristiana, il sufismo... rami dello stesso albero?"}],mountain:[{speaker:"Narratore",text:"La Montagna Sacra — Dove l'Induismo incontra il Buddismo, dove Shiva medita."},{speaker:"Narratore",text:"Deva Kali danza qui la sua danza di distruzione e rinascita."},{speaker:"Sadhu",text:"Il Monte Meru è il centro dell'universo. Qui ogni tradizione ha la sua montagna sacra."},{speaker:"Sadhu",text:"Il Sinai, il Hira, il Kailash... le montagne sono dove il cielo tocca la terra."},{speaker:"Pellegrino",text:'Le Upanishad dicono: "Tat tvam asi" — Tu sei Quello. Tutto è Brahman.'}],abyss:[{speaker:"Narratore",text:"L'Abisso — Dove Nietzsche guardò, e dove tutti i demoni dimorano."},{speaker:"Narratore",text:"Qui i kana più potenti e oscuri vagano. Come i jinn nell'Islam, o gli asura nell'Induismo."},{speaker:"Ombra",text:"Quando guardi nell'abisso, l'abisso guarda dentro di te. — Nietzsche"},{speaker:"Ombra",text:"Ma forse l'abisso è solo uno specchio. Come il lago del Narciso, o lo specchio di Amaterasu."},{speaker:"Ombra",text:"Dante scese attraverso tutti i cerchi dell'Inferno. Ma risalì per riveder le stelle."}],final:[{speaker:"Narratore",text:"Il Santuario Finale — Dove tutti i kana convergono, dove tutte le verità si incontrano."},{speaker:"Narratore",text:"Qui si decide il destino dei Kana. Come l'Armageddon, il Ragnarök, la fine del Kali Yuga."},{speaker:"Narratore",text:"Ogni tradizione ha la sua escatologia. Ogni fede attende la fine e il nuovo inizio."},{speaker:"Narratore",text:"Ma forse la fine è solo un altro inizio. Come il Fūrin, il serpente che si morde la coda."}]},Dv={cristoforo:[{speaker:"Fra Cristoforo",text:"Impossibile... la mia fede era incrollabile..."},{speaker:"Fra Cristoforo",text:"Forse... forse Lutero aveva ragione. Forse la fede è personale, non imposta."},{speaker:"Fra Cristoforo",text:"Mi ritirerò in monastero a meditare. Come Sant'Agostino dopo la sua conversione."},{speaker:"Fra Cristoforo",text:`Ricorda: "Ama e fa' ciò che vuoi" — se il tuo amore è vero, non puoi sbagliare.`}],bodhi:[{speaker:"Monaco Bodhi",text:"...Ho perso. E nel perdere, ho compreso qualcosa."},{speaker:"Monaco Bodhi",text:"La mia visione del vuoto era incompleta. Come dice il Lankavatara Sutra..."},{speaker:"Monaco Bodhi",text:"Il vuoto non è annientamento. È la consapevolezza che tutto è connesso."},{speaker:"Monaco Bodhi",text:"Tornerò a meditare. Forse in mille anni comprenderò davvero il cuore-sutra."}],rashid:[{speaker:"Al-Rashid",text:"SubhanAllah... hai dimostrato che la mia interpretazione era troppo rigida."},{speaker:"Al-Rashid",text:'Il Corano stesso dice: "Allah non cambia un popolo finché esso non cambia se stesso" (13:11).'},{speaker:"Al-Rashid",text:"Forse la vera Sharia è nel cuore, non nella coercizione."},{speaker:"Al-Rashid",text:"Come disse Al-Ghazali: la verità si trova nell'equilibrio tra ragione e rivelazione."}],kali:[{speaker:"Deva Kali",text:"AHAHAHA! Hai vinto! Ma la danza continua!"},{speaker:"Deva Kali",text:"Shiva mi ha insegnato che anche la distruzione ha un limite."},{speaker:"Deva Kali",text:"Forse il mio Tandava era fuori tempo. Il ritmo del cosmo è diverso dal mio."},{speaker:"Deva Kali",text:"Tornerò a danzare... ma forse con più grazia, meno furia. Namaste, guerriero!"}],lao:[{speaker:"Saggio Lao",text:"..."},{speaker:"Saggio Lao",text:"Hai vinto senza vincere. Io ho perso senza perdere."},{speaker:"Saggio Lao",text:'Il Tao Te Ching cap. 22: "Cedendo, si ottiene interamente".'},{speaker:"Saggio Lao",text:"Forse il wu wei non è smettere di agire, ma agire senza attaccamento al risultato."},{speaker:"Saggio Lao",text:"Andrò a meditare su una montagna. O forse no. Chi può dirlo? *sorride*"}],rabbi:[{speaker:"Rabbi Ezra",text:"Baruch Hashem! Hai dimostrato che la saggezza non teme la condivisione."},{speaker:"Rabbi Ezra",text:'Il Midrash dice: "La Torah è un albero di vita per coloro che si aggrappano a lei".'},{speaker:"Rabbi Ezra",text:'Ma "lei" non è possesso — è relazione. Come il patto tra Dio e Israele.'},{speaker:"Rabbi Ezra",text:"Hai guadagnato il mio rispetto. Che la Shekhinah ti accompagni."}]},em={puzzle1:[{speaker:"Guardiano",text:"Per passare, devi dimostrare la tua saggezza con il codice."},{speaker:"Guardiano",text:"Come i monaci抄经 copiavano i sutra, tu devi scrivere il codice che ordina i kana."},{speaker:"Guardiano",text:"Scrivi una funzione che ordini i kana per livello crescente."}],puzzle2:[{speaker:"Guardiano",text:'Il Corano parla di ordinamento e misura. "Ogni cosa presso di Lui è in misura" (13:8).'},{speaker:"Guardiano",text:"Scrivi una funzione che conti le vocali in una stringa di kana."}],puzzle3:[{speaker:"Guardiano",text:"Il Buddismo insegna la catena dell'origine dipendente. Ogni cosa dipende da un'altra."},{speaker:"Guardiano",text:"Scrivi una funzione ricorsiva che calcoli il karma di un kana (somma delle sue statistiche)."}],puzzle4:[{speaker:"Guardiano",text:"Nella Kabbalah, le lettere hanno valori numerici — la Ghematria."},{speaker:"Guardiano",text:"Scrivi una funzione che converta un kana nel suo valore numerico (posizione nell'alfabeto)."}],puzzle5:[{speaker:"Guardiano",text:"Il Tao si muove in cicli. Come lo Yin e Yang, ogni fine è un inizio."},{speaker:"Guardiano",text:"Scrivi una funzione che trovi il kana più forte in un array di kana."}]},La=[{id:"sort_kana",title:"L'Ordinamento Divino",description:'I kana sono nel caos! Come Dio ordinò il cosmo nella Genesi, ordina un array di kana per livello crescente. Scrivi una funzione che prende un array di oggetti con proprietà "level" e li ordini.',hint:"Usa il metodo .sort() con una funzione di confronto: (a, b) => a.level - b.level",starterCode:`function sortKanaByLevel(kanaArray) {
  // Scrivi il tuo codice qui
  
}`,testCases:[{input:[{level:3},{level:1},{level:2}],expected:[{level:1},{level:2},{level:3}],description:"Ordina 3 kana"},{input:[{level:5},{level:5},{level:1}],expected:[{level:1},{level:5},{level:5}],description:"Ordina con duplicati"},{input:[{level:10},{level:2},{level:7},{level:1}],expected:[{level:1},{level:2},{level:7},{level:10}],description:"Ordina 4 kana"}],area:"genesis",difficulty:1,religiousRef:'Genesi 1: "Dio separò la luce dalle tenebre" — ordinare è creare ordine dal caos.'},{id:"count_vowels",title:"Le Vocali Sacre",description:"Nel Corano, le vocali danno vita alle consonanti. Conta quante vocali (a, i, u, e, o) ci sono in una stringa. Scrivi una funzione che conta le vocali.",hint:"Usa un loop o .match() con una regex: /[aiueo]/gi",starterCode:`function countVowels(str) {
  // Scrivi il tuo codice qui
  
}`,testCases:[{input:"konnichiwa",expected:4,description:"Conta vocali in konnichiwa"},{input:"arigatou",expected:4,description:"Conta vocali in arigatou"},{input:"xyz",expected:0,description:"Nessuna vocale"}],area:"cathedral",difficulty:1,religiousRef:'Corano 55:1-2: "Il Misericordioso ha insegnato il Corano" — le vocali sono il respiro della parola divina.'},{id:"karma_sum",title:"Il Calcolo del Karma",description:'Nel Buddismo, il karma è la somma di tutte le azioni. Calcola il "karma" di un kana sommando hp + attack + defense + speed. Scrivi una funzione ricorsiva per un array.',hint:"Usa la ricorsione o .reduce(): array.reduce((sum, k) => sum + k.hp + k.attack + k.defense + k.speed, 0)",starterCode:`function calculateKarma(kanaArray) {
  // Scrivi il tuo codice qui
  // Il karma di un kana è: hp + attack + defense + speed
  // Somma il karma di tutti i kana nell'array
  
}`,testCases:[{input:[{hp:10,attack:5,defense:3,speed:7}],expected:25,description:"Un kana"},{input:[{hp:10,attack:5,defense:3,speed:7},{hp:20,attack:10,defense:6,speed:14}],expected:75,description:"Due kana"},{input:[],expected:0,description:"Array vuoto"}],area:"temple",difficulty:2,religiousRef:'Buddismo: "Come il seme, così il frutto" — ogni azione ha una conseguenza che si accumula.'},{id:"gematria",title:"La Ghematria Mistica",description:"Nella Kabbalah, ogni lettera ha un valore numerico. Assegna ad ogni kana un valore basato sulla sua posizione (a=1, ka=2, sa=3...). Scrivi una funzione che calcola il valore totale di una parola di kana romaji.",hint:"Crea un oggetto mappa {a:1, ka:2, sa:3...} e somma i valori di ogni sillaba nella parola.",starterCode:`function gematria(word) {
  // Mappa delle prime 10 sillabe
  const values = {a:1,i:2,u:3,e:4,o:5,ka:6,ki:7,ku:8,ke:9,ko:10};
  // Scrivi il tuo codice qui
  // Trova le sillabe nella parola e somma i loro valori
  
}`,testCases:[{input:"a",expected:1,description:"Vale 1"},{input:"ka",expected:6,description:"ka vale 6"},{input:"aika",expected:14,description:"a(1) + i(2) + ka(6) = 9... o ai(2)+ka(6)=8"}],area:"desert",difficulty:2,religiousRef:'Kabbalah: "Dio guardò nelle lettere e creò i mondi" — Sefer Yetzirah. Ogni lettera è un mattone della realtà.'},{id:"find_strongest",title:"Il Guerriero Supremo",description:"Come Indra cercava il più forte tra gli dei, trova il kana con la somma più alta di statistiche in un array. Restituisci l'oggetto kana completo.",hint:"Usa .reduce() per confrontare: trova il kana con il valore più alto di (hp+attack+defense+speed)",starterCode:`function findStrongest(kanaArray) {
  // Scrivi il tuo codice qui
  // Trova il kana con la somma più alta di hp+attack+defense+speed
  
}`,testCases:[{input:[{id:"a",hp:10,attack:5,defense:3,speed:7},{id:"ka",hp:20,attack:15,defense:10,speed:12}],expected:"ka",description:"ka è più forte"},{input:[{id:"sa",hp:50,attack:50,defense:50,speed:50},{id:"ta",hp:10,attack:10,defense:10,speed:10}],expected:"sa",description:"sa è più forte"}],area:"mountain",difficulty:3,religiousRef:"Induismo: Indra, re degli dei, è il più forte. Ma anche lui è soggetto al karma e alla rinascita."},{id:"filter_element",title:"La Purificazione degli Elementi",description:"Come il fuoco purifica l'oro, filtra un array di kana per elemento. Scrivi una funzione che restituisce solo i kana di un dato elemento.",hint:"Usa .filter(): kanaArray.filter(k => k.element === targetElement)",starterCode:`function filterByElement(kanaArray, element) {
  // Scrivi il tuo codice qui
  // Restituisci solo i kana dell'elemento specificato
  
}`,testCases:[{input:[[{id:"a",element:"fuoco"},{id:"i",element:"acqua"},{id:"u",element:"fuoco"}],"fuoco"],expected:2,description:"2 kana fuoco"},{input:[[{id:"a",element:"terra"},{id:"i",element:"terra"}],"aria"],expected:0,description:"0 kana aria"}],area:"mosque",difficulty:1,religiousRef:"Islam: I quattro elementi nella cosmologia islamica riflettono la saggezza di Allah nella creazione."},{id:"reverse_string",title:"Il Specchio della Verità",description:"Come lo specchio di Amaterasu rivela la verità, inverti una stringa. Il Sufismo dice che il mondo è un riflesso del divino.",hint:'Usa: str.split("").reverse().join("")',starterCode:`function reverseString(str) {
  // Scrivi il tuo codice qui
  // Inverti la stringa
  
}`,testCases:[{input:"karma",expected:"amrak",description:"Inverti karma"},{input:"zen",expected:"nez",description:"Inverti zen"},{input:"a",expected:"a",description:"Singolo carattere"}],area:"garden",difficulty:1,religiousRef:'Sufismo: Rumi — "Il mondo è uno specchio in cui vedi il riflesso di Dio".'},{id:"fibonacci",title:"La Sequenza di Fibonacci Sacra",description:"La sequenza di Fibonacci appare nella natura — nei girasoli, nelle conchiglie, nelle galassie. Anche i pitagorici la consideravano sacra. Genera i primi n numeri.",hint:"Ogni numero è la somma dei due precedenti: [0, 1, 1, 2, 3, 5, 8, 13...]",starterCode:`function fibonacci(n) {
  // Scrivi il tuo codice qui
  // Restituisci un array con i primi n numeri di Fibonacci
  
}`,testCases:[{input:5,expected:[0,1,1,2,3],description:"Primi 5"},{input:8,expected:[0,1,1,2,3,5,8,13],description:"Primi 8"},{input:1,expected:[0],description:"Solo il primo"}],area:"abyss",difficulty:3,religiousRef:'Pitagorismo: "Tutto è numero". La sequenza sacra appare nel Nautilus, nei girasoli, nelle galassie a spirale.'},{id:"flatten_array",title:"L'Appiattimento del Samsara",description:'Nel Buddismo, il samsara è un ciclo di vite dentro altre vite. "Appiattisci" un array annidato — porta tutte le vite allo stesso livello.',hint:"Usa .flat() o la ricorsione: array.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatten(val) : val), [])",starterCode:`function flattenArray(arr) {
  // Scrivi il tuo codice qui
  // Appiattisci un array annidato a qualsiasi profondità
  
}`,testCases:[{input:[1,[2,3],[4,[5]]],expected:[1,2,3,4,5],description:"Annidamento doppio"},{input:[[1],[2],[3]],expected:[1,2,3],description:"Annidamento singolo"},{input:[1,2,3],expected:[1,2,3],description:"Già piatto"}],area:"temple",difficulty:3,religiousRef:`Buddismo: Le sei realm dell'esistenza sono annidate una nell'altra. Liberarsi significa "appiattire" il samsara.`},{id:"palindrome",title:"Il Cerchio dell'Eternità",description:"L'Ouroboros, il serpente che si morde la coda — un palindromo vivente. Verifica se una stringa è palindroma (si legge uguale da entrambi i lati).",hint:'Confronta la stringa con la sua versione invertita: str === str.split("").reverse().join("")',starterCode:`function isPalindrome(str) {
  // Scrivi il tuo codice qui
  // Restituisci true se la stringa è palindroma
  
}`,testCases:[{input:"anna",expected:!0,description:"anna è palindroma"},{input:"karma",expected:!1,description:"karma non è palindroma"},{input:"racecar",expected:!0,description:"racecar è palindroma"}],area:"final",difficulty:2,religiousRef:"Induismo: L'Ouroboros simboleggia il ciclo eterno di creazione e distruzione. L'inizio è la fine."},{id:"max_depth",title:"La Profondità del Vuoto",description:"Quanto è profondo il vuoto? Calcola la massima profondità di annidamento in un array. Come i livelli di coscienza nella meditazione.",hint:"Usa la ricorsione: se un elemento è un array, calcola la sua profondità + 1",starterCode:`function maxDepth(arr) {
  // Scrivi il tuo codice qui
  // Trova la profondità massima di annidamento
  // Esempio: [1, [2, [3]]] ha profondità 3
  
}`,testCases:[{input:[1,2,3],expected:1,description:"Nessun annidamento"},{input:[1,[2,[3]]],expected:3,description:"Profondità 3"},{input:[[[[1]]]],expected:4,description:"Profondità 4"}],area:"abyss",difficulty:3,religiousRef:"Mistica: I livelli di profondità nella meditazione — dhyāna — sono infiniti. Ogni livello rivela un nuovo abisso."},{id:"unique_elements",title:"L'Unicità dell'Anima",description:"Nell'Islam, ogni anima è unica davanti ad Allah. Rimuovi i duplicati da un array. Ogni elemento deve apparire una sola volta.",hint:"Usa Set: [...new Set(array)]",starterCode:`function uniqueElements(arr) {
  // Scrivi il tuo codice qui
  // Rimuovi i duplicati
  
}`,testCases:[{input:[1,2,2,3,3,3],expected:[1,2,3],description:"Rimuovi duplicati"},{input:[1,1,1],expected:[1],description:"Tutti uguali"},{input:[1,2,3],expected:[1,2,3],description:"Nessun duplicato"}],area:"mosque",difficulty:1,religiousRef:`Islam: "Non c'è dio all'infuori di Dio" — l'unicità (Tawhid) è il principio fondamentale.`}];function Uv(a,e){try{const n=new Function(`${e}
return ${a.id==="sort_kana_by_level"?"sortKanaByLevel":a.id==="count_vowels"?"countVowels":a.id==="karma_sum"?"calculateKarma":a.id==="gematria"?"gematria":a.id==="find_strongest"?"findStrongest":a.id==="filter_element"?"filterByElement":a.id==="reverse_string"?"reverseString":a.id==="fibonacci"?"fibonacci":a.id==="flatten_array"?"flattenArray":a.id==="palindrome"?"isPalindrome":a.id==="max_depth"?"maxDepth":a.id==="unique_elements"?"uniqueElements":"solution"};`)();for(const r of a.testCases){const o=Array.isArray(r.input)&&r.input.length>0&&typeof r.input[0]=="object"?n(r.input):n(...Array.isArray(r.input)?r.input:[r.input]);let l=!1;if(typeof r.expected=="object"&&Array.isArray(r.expected)?l=JSON.stringify(o)===JSON.stringify(r.expected):typeof r.expected=="string"&&typeof o=="object"?l=(o==null?void 0:o.id)===r.expected:l=o===r.expected,!l)return{success:!1,message:`Test fallito: "${r.description}". Risultato atteso: ${JSON.stringify(r.expected)}, ottenuto: ${JSON.stringify(o)}`}}return{success:!0,message:"✅ Tutti i test superati! Il codice è corretto."}}catch(n){return{success:!1,message:`❌ Errore nel codice: ${n.message}`}}}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const rf="186",kv=0,tm=1,Fv=2,Nl=1,Ov=2,Xs=3,ia=0,Gn=1,er=2,nr=0,js=1,nm=2,im=3,rm=4,zv=5,Xa=100,Bv=101,Hv=102,Vv=103,Gv=104,Wv=200,Xv=201,qv=202,jv=203,ng=204,ig=205,Kv=206,Yv=207,$v=208,Zv=209,Jv=210,Qv=211,e_=212,t_=213,n_=214,fd=0,hd=1,pd=2,Ks=3,md=4,gd=5,vd=6,_d=7,rg=0,i_=1,r_=2,Ui=0,ag=1,sg=2,og=3,lg=4,cg=5,ug=6,dg=7,fg=300,ra=301,$a=302,Iu=303,Du=304,ql=306,xd=1e3,tr=1001,yd=1002,yn=1003,a_=1004,ol=1005,Rn=1006,Uu=1007,ta=1008,Jn=1009,hg=1010,pg=1011,Ys=1012,af=1013,Fi=1014,Ii=1015,Oi=1016,sf=1017,of=1018,$s=1020,mg=35902,gg=35899,vg=1021,_g=1022,Ei=1023,rr=1026,na=1027,xg=1028,lf=1029,aa=1030,cf=1031,uf=1033,Il=33776,Dl=33777,Ul=33778,kl=33779,Sd=35840,Md=35841,Ed=35842,Td=35843,wd=36196,Ad=37492,bd=37496,Cd=37488,Rd=37489,Ol=37490,Pd=37491,Ld=37808,Nd=37809,Id=37810,Dd=37811,Ud=37812,kd=37813,Fd=37814,Od=37815,zd=37816,Bd=37817,Hd=37818,Vd=37819,Gd=37820,Wd=37821,Xd=36492,qd=36494,jd=36495,Kd=36283,Yd=36284,zl=36285,$d=36286,s_=3200,Zd=0,o_=1,Pr="",li="srgb",Bl="srgb-linear",Hl="linear",Bt="srgb",ku=7680,l_=519,c_=512,u_=513,d_=514,df=515,f_=516,h_=517,ff=518,p_=519,m_=35044,am="300 es",Di=2e3,Zs=2001;function g_(a){for(let e=a.length-1;e>=0;--e)if(a[e]>=65535)return!0;return!1}function Vl(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}function v_(){const a=Vl("canvas");return a.style.display="block",a}const sm={};function om(...a){const e="THREE."+a.shift();console.log(e,...a)}function yg(a){const e=a[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=a[1];n&&n.isStackTrace?a[0]+=" "+n.getLocation():a[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return a}function ct(...a){a=yg(a);const e="THREE."+a.shift();{const n=a[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...a)}}function Dt(...a){a=yg(a);const e="THREE."+a.shift();{const n=a[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...a)}}function Ka(...a){const e=a.join(" ");e in sm||(sm[e]=!0,ct(...a))}function __(a,e,n){return new Promise(function(r,o){function l(){switch(a.clientWaitSync(e,a.SYNC_FLUSH_COMMANDS_BIT,0)){case a.WAIT_FAILED:o();break;case a.TIMEOUT_EXPIRED:setTimeout(l,n);break;default:r()}}setTimeout(l,n)})}const x_={[fd]:hd,[pd]:vd,[md]:_d,[Ks]:gd,[hd]:fd,[vd]:pd,[_d]:md,[gd]:Ks};class sa{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(n)===-1&&r[e].push(n)}hasEventListener(e,n){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(n)!==-1}removeEventListener(e,n){const r=this._listeners;if(r===void 0)return;const o=r[e];if(o!==void 0){const l=o.indexOf(n);l!==-1&&o.splice(l,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const r=n[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let l=0,u=o.length;l<u;l++)o[l].call(this,e);e.target=null}}}const bn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Fu=Math.PI/180,Jd=180/Math.PI;function Qs(){const a=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(bn[a&255]+bn[a>>8&255]+bn[a>>16&255]+bn[a>>24&255]+"-"+bn[e&255]+bn[e>>8&255]+"-"+bn[e>>16&15|64]+bn[e>>24&255]+"-"+bn[n&63|128]+bn[n>>8&255]+"-"+bn[n>>16&255]+bn[n>>24&255]+bn[r&255]+bn[r>>8&255]+bn[r>>16&255]+bn[r>>24&255]).toLowerCase()}function At(a,e,n){return Math.max(e,Math.min(n,a))}function y_(a,e){return(a%e+e)%e}function Ou(a,e,n){return(1-n)*a+n*e}function Os(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return a/4294967295;case Uint16Array:return a/65535;case Uint8Array:case Uint8ClampedArray:return a/255;case Int32Array:return Math.max(a/2147483647,-1);case Int16Array:return Math.max(a/32767,-1);case Int8Array:return Math.max(a/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Vn(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return Math.round(a*4294967295);case Uint16Array:return Math.round(a*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(a*255);case Int32Array:return Math.round(a*2147483647);case Int16Array:return Math.round(a*32767);case Int8Array:return Math.round(a*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Sf=class Sf{constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,r=this.y,o=e.elements;return this.x=o[0]*n+o[3]*r+o[6],this.y=o[1]*n+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=At(this.x,e.x,n.x),this.y=At(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=At(this.x,e,n),this.y=At(this.y,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(At(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(At(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y;return n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const r=Math.cos(n),o=Math.sin(n),l=this.x-e.x,u=this.y-e.y;return this.x=l*r-u*o+e.x,this.y=l*o+u*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Sf.prototype.isVector2=!0;let yt=Sf;class Ja{constructor(e=0,n=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=r,this._w=o}static slerpFlat(e,n,r,o,l,u,f){let h=r[o+0],m=r[o+1],_=r[o+2],y=r[o+3],g=l[u+0],M=l[u+1],w=l[u+2],P=l[u+3];if(y!==P||h!==g||m!==M||_!==w){let x=h*g+m*M+_*w+y*P;x<0&&(g=-g,M=-M,w=-w,P=-P,x=-x);let v=1-f;if(x<.9995){const C=Math.acos(x),F=Math.sin(C);v=Math.sin(v*C)/F,f=Math.sin(f*C)/F,h=h*v+g*f,m=m*v+M*f,_=_*v+w*f,y=y*v+P*f}else{h=h*v+g*f,m=m*v+M*f,_=_*v+w*f,y=y*v+P*f;const C=1/Math.sqrt(h*h+m*m+_*_+y*y);h*=C,m*=C,_*=C,y*=C}}e[n]=h,e[n+1]=m,e[n+2]=_,e[n+3]=y}static multiplyQuaternionsFlat(e,n,r,o,l,u){const f=r[o],h=r[o+1],m=r[o+2],_=r[o+3],y=l[u],g=l[u+1],M=l[u+2],w=l[u+3];return e[n]=f*w+_*y+h*M-m*g,e[n+1]=h*w+_*g+m*y-f*M,e[n+2]=m*w+_*M+f*g-h*y,e[n+3]=_*w-f*y-h*g-m*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,r,o){return this._x=e,this._y=n,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const r=e._x,o=e._y,l=e._z,u=e._order,f=Math.cos,h=Math.sin,m=f(r/2),_=f(o/2),y=f(l/2),g=h(r/2),M=h(o/2),w=h(l/2);switch(u){case"XYZ":this._x=g*_*y+m*M*w,this._y=m*M*y-g*_*w,this._z=m*_*w+g*M*y,this._w=m*_*y-g*M*w;break;case"YXZ":this._x=g*_*y+m*M*w,this._y=m*M*y-g*_*w,this._z=m*_*w-g*M*y,this._w=m*_*y+g*M*w;break;case"ZXY":this._x=g*_*y-m*M*w,this._y=m*M*y+g*_*w,this._z=m*_*w+g*M*y,this._w=m*_*y-g*M*w;break;case"ZYX":this._x=g*_*y-m*M*w,this._y=m*M*y+g*_*w,this._z=m*_*w-g*M*y,this._w=m*_*y+g*M*w;break;case"YZX":this._x=g*_*y+m*M*w,this._y=m*M*y+g*_*w,this._z=m*_*w-g*M*y,this._w=m*_*y-g*M*w;break;case"XZY":this._x=g*_*y-m*M*w,this._y=m*M*y-g*_*w,this._z=m*_*w+g*M*y,this._w=m*_*y+g*M*w;break;default:ct("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const r=n/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,r=n[0],o=n[4],l=n[8],u=n[1],f=n[5],h=n[9],m=n[2],_=n[6],y=n[10],g=r+f+y;if(g>0){const M=.5/Math.sqrt(g+1);this._w=.25/M,this._x=(_-h)*M,this._y=(l-m)*M,this._z=(u-o)*M}else if(r>f&&r>y){const M=2*Math.sqrt(1+r-f-y);this._w=(_-h)/M,this._x=.25*M,this._y=(o+u)/M,this._z=(l+m)/M}else if(f>y){const M=2*Math.sqrt(1+f-r-y);this._w=(l-m)/M,this._x=(o+u)/M,this._y=.25*M,this._z=(h+_)/M}else{const M=2*Math.sqrt(1+y-r-f);this._w=(u-o)/M,this._x=(l+m)/M,this._y=(h+_)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let r=e.dot(n)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(At(this.dot(e),-1,1)))}rotateTowards(e,n){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,n/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const r=e._x,o=e._y,l=e._z,u=e._w,f=n._x,h=n._y,m=n._z,_=n._w;return this._x=r*_+u*f+o*m-l*h,this._y=o*_+u*h+l*f-r*m,this._z=l*_+u*m+r*h-o*f,this._w=u*_-r*f-o*h-l*m,this._onChangeCallback(),this}slerp(e,n){let r=e._x,o=e._y,l=e._z,u=e._w,f=this.dot(e);f<0&&(r=-r,o=-o,l=-l,u=-u,f=-f);let h=1-n;if(f<.9995){const m=Math.acos(f),_=Math.sin(m);h=Math.sin(h*m)/_,n=Math.sin(n*m)/_,this._x=this._x*h+r*n,this._y=this._y*h+o*n,this._z=this._z*h+l*n,this._w=this._w*h+u*n,this._onChangeCallback()}else this._x=this._x*h+r*n,this._y=this._y*h+o*n,this._z=this._z*h+l*n,this._w=this._w*h+u*n,this.normalize();return this}slerpQuaternions(e,n,r){return this.copy(e).slerp(n,r)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),l=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),l*Math.sin(n),l*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Mf=class Mf{constructor(e=0,n=0,r=0){this.x=e,this.y=n,this.z=r}set(e,n,r){return r===void 0&&(r=this.z),this.x=e,this.y=n,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(lm.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(lm.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*n+l[3]*r+l[6]*o,this.y=l[1]*n+l[4]*r+l[7]*o,this.z=l[2]*n+l[5]*r+l[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,r=this.y,o=this.z,l=e.elements,u=1/(l[3]*n+l[7]*r+l[11]*o+l[15]);return this.x=(l[0]*n+l[4]*r+l[8]*o+l[12])*u,this.y=(l[1]*n+l[5]*r+l[9]*o+l[13])*u,this.z=(l[2]*n+l[6]*r+l[10]*o+l[14])*u,this}applyQuaternion(e){const n=this.x,r=this.y,o=this.z,l=e.x,u=e.y,f=e.z,h=e.w,m=2*(u*o-f*r),_=2*(f*n-l*o),y=2*(l*r-u*n);return this.x=n+h*m+u*y-f*_,this.y=r+h*_+f*m-l*y,this.z=o+h*y+l*_-u*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*n+l[4]*r+l[8]*o,this.y=l[1]*n+l[5]*r+l[9]*o,this.z=l[2]*n+l[6]*r+l[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=At(this.x,e.x,n.x),this.y=At(this.y,e.y,n.y),this.z=At(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=At(this.x,e,n),this.y=At(this.y,e,n),this.z=At(this.z,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(At(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const r=e.x,o=e.y,l=e.z,u=n.x,f=n.y,h=n.z;return this.x=o*h-l*f,this.y=l*u-r*h,this.z=r*f-o*u,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const r=e.dot(this)/n;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return zu.copy(this).projectOnVector(e),this.sub(zu)}reflect(e){return this.sub(zu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(At(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return n*n+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,r){const o=Math.sin(n)*e;return this.x=o*Math.sin(r),this.y=Math.cos(n)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,r){return this.x=e*Math.sin(n),this.y=r,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=r,this.z=o,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,r=Math.sqrt(1-n*n);return this.x=r*Math.cos(e),this.y=n,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Mf.prototype.isVector3=!0;let ie=Mf;const zu=new ie,lm=new Ja,Ef=class Ef{constructor(e,n,r,o,l,u,f,h,m){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,r,o,l,u,f,h,m)}set(e,n,r,o,l,u,f,h,m){const _=this.elements;return _[0]=e,_[1]=o,_[2]=f,_[3]=n,_[4]=l,_[5]=h,_[6]=r,_[7]=u,_[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],this}extractBasis(e,n,r){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,o=n.elements,l=this.elements,u=r[0],f=r[3],h=r[6],m=r[1],_=r[4],y=r[7],g=r[2],M=r[5],w=r[8],P=o[0],x=o[3],v=o[6],C=o[1],F=o[4],b=o[7],L=o[2],R=o[5],U=o[8];return l[0]=u*P+f*C+h*L,l[3]=u*x+f*F+h*R,l[6]=u*v+f*b+h*U,l[1]=m*P+_*C+y*L,l[4]=m*x+_*F+y*R,l[7]=m*v+_*b+y*U,l[2]=g*P+M*C+w*L,l[5]=g*x+M*F+w*R,l[8]=g*v+M*b+w*U,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[1],o=e[2],l=e[3],u=e[4],f=e[5],h=e[6],m=e[7],_=e[8];return n*u*_-n*f*m-r*l*_+r*f*h+o*l*m-o*u*h}invert(){const e=this.elements,n=e[0],r=e[1],o=e[2],l=e[3],u=e[4],f=e[5],h=e[6],m=e[7],_=e[8],y=_*u-f*m,g=f*h-_*l,M=m*l-u*h,w=n*y+r*g+o*M;if(w===0)return this.set(0,0,0,0,0,0,0,0,0);const P=1/w;return e[0]=y*P,e[1]=(o*m-_*r)*P,e[2]=(f*r-o*u)*P,e[3]=g*P,e[4]=(_*n-o*h)*P,e[5]=(o*l-f*n)*P,e[6]=M*P,e[7]=(r*h-m*n)*P,e[8]=(u*n-r*l)*P,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,r,o,l,u,f){const h=Math.cos(l),m=Math.sin(l);return this.set(r*h,r*m,-r*(h*u+m*f)+u+e,-o*m,o*h,-o*(-m*u+h*f)+f+n,0,0,1),this}scale(e,n){return Ka("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Bu.makeScale(e,n)),this}rotate(e){return Ka("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Bu.makeRotation(-e)),this}translate(e,n){return Ka("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Bu.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,r,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,r=e.elements;for(let o=0;o<9;o++)if(n[o]!==r[o])return!1;return!0}fromArray(e,n=0){for(let r=0;r<9;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Ef.prototype.isMatrix3=!0;let ht=Ef;const Bu=new ht,cm=new ht().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),um=new ht().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function S_(){const a={enabled:!0,workingColorSpace:Bl,spaces:{},convert:function(o,l,u){return this.enabled===!1||l===u||!l||!u||(this.spaces[l].transfer===Bt&&(o.r=ir(o.r),o.g=ir(o.g),o.b=ir(o.b)),this.spaces[l].primaries!==this.spaces[u].primaries&&(o.applyMatrix3(this.spaces[l].toXYZ),o.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===Bt&&(o.r=Ya(o.r),o.g=Ya(o.g),o.b=Ya(o.b))),o},workingToColorSpace:function(o,l){return this.convert(o,this.workingColorSpace,l)},colorSpaceToWorking:function(o,l){return this.convert(o,l,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Pr?Hl:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,l=this.workingColorSpace){return o.fromArray(this.spaces[l].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,l,u){return o.copy(this.spaces[l].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,l){return Ka("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),a.workingToColorSpace(o,l)},toWorkingColorSpace:function(o,l){return Ka("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),a.colorSpaceToWorking(o,l)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return a.define({[Bl]:{primaries:e,whitePoint:r,transfer:Hl,toXYZ:cm,fromXYZ:um,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:li},outputColorSpaceConfig:{drawingBufferColorSpace:li}},[li]:{primaries:e,whitePoint:r,transfer:Bt,toXYZ:cm,fromXYZ:um,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:li}}}),a}const wt=S_();function ir(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function Ya(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}let Na;class M_{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{Na===void 0&&(Na=Vl("canvas")),Na.width=e.width,Na.height=e.height;const o=Na.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),r=Na}return r.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Vl("canvas");n.width=e.width,n.height=e.height;const r=n.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),l=o.data;for(let u=0;u<l.length;u++)l[u]=ir(l[u]/255)*255;return r.putImageData(o,0,0),n}else if(e.data){const n=e.data.slice(0);for(let r=0;r<n.length;r++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[r]=Math.floor(ir(n[r]/255)*255):n[r]=ir(n[r]);return{data:n,width:e.width,height:e.height}}else return ct("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let E_=0;class hf{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:E_++}),this.uuid=Qs(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let l;if(Array.isArray(o)){l=[];for(let u=0,f=o.length;u<f;u++)o[u].isDataTexture?l.push(Hu(o[u].image)):l.push(Hu(o[u]))}else l=Hu(o);r.url=l}return n||(e.images[this.uuid]=r),r}}function Hu(a){return typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap?M_.getDataURL(a):a.data?{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(ct("Texture: Unable to serialize Texture."),{})}let T_=0;const Vu=new ie;class Un extends sa{constructor(e=Un.DEFAULT_IMAGE,n=Un.DEFAULT_MAPPING,r=tr,o=tr,l=Rn,u=ta,f=Ei,h=Jn,m=Un.DEFAULT_ANISOTROPY,_=Pr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:T_++}),this.uuid=Qs(),this.name="",this.source=new hf(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=l,this.minFilter=u,this.anisotropy=m,this.format=f,this.internalFormat=null,this.type=h,this.offset=new yt(0,0),this.repeat=new yt(1,1),this.center=new yt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ht,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Vu).x}get height(){return this.source.getSize(Vu).y}get depth(){return this.source.getSize(Vu).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const r=e[n];if(r===void 0){ct(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){ct(`Texture.setValues(): property '${n}' does not exist.`);continue}o&&r&&o.isVector2&&r.isVector2||o&&r&&o.isVector3&&r.isVector3||o&&r&&o.isMatrix3&&r.isMatrix3?o.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==fg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case xd:e.x=e.x-Math.floor(e.x);break;case tr:e.x=e.x<0?0:1;break;case yd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case xd:e.y=e.y-Math.floor(e.y);break;case tr:e.y=e.y<0?0:1;break;case yd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Un.DEFAULT_IMAGE=null;Un.DEFAULT_MAPPING=fg;Un.DEFAULT_ANISOTROPY=1;const Tf=class Tf{constructor(e=0,n=0,r=0,o=1){this.x=e,this.y=n,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,r,o){return this.x=e,this.y=n,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,r=this.y,o=this.z,l=this.w,u=e.elements;return this.x=u[0]*n+u[4]*r+u[8]*o+u[12]*l,this.y=u[1]*n+u[5]*r+u[9]*o+u[13]*l,this.z=u[2]*n+u[6]*r+u[10]*o+u[14]*l,this.w=u[3]*n+u[7]*r+u[11]*o+u[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,r,o,l;const h=e.elements,m=h[0],_=h[4],y=h[8],g=h[1],M=h[5],w=h[9],P=h[2],x=h[6],v=h[10];if(Math.abs(_-g)<.01&&Math.abs(y-P)<.01&&Math.abs(w-x)<.01){if(Math.abs(_+g)<.1&&Math.abs(y+P)<.1&&Math.abs(w+x)<.1&&Math.abs(m+M+v-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const F=(m+1)/2,b=(M+1)/2,L=(v+1)/2,R=(_+g)/4,U=(y+P)/4,E=(w+x)/4;return F>b&&F>L?F<.01?(r=0,o=.707106781,l=.707106781):(r=Math.sqrt(F),o=R/r,l=U/r):b>L?b<.01?(r=.707106781,o=0,l=.707106781):(o=Math.sqrt(b),r=R/o,l=E/o):L<.01?(r=.707106781,o=.707106781,l=0):(l=Math.sqrt(L),r=U/l,o=E/l),this.set(r,o,l,n),this}let C=Math.sqrt((x-w)*(x-w)+(y-P)*(y-P)+(g-_)*(g-_));return Math.abs(C)<.001&&(C=1),this.x=(x-w)/C,this.y=(y-P)/C,this.z=(g-_)/C,this.w=Math.acos((m+M+v-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=At(this.x,e.x,n.x),this.y=At(this.y,e.y,n.y),this.z=At(this.z,e.z,n.z),this.w=At(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=At(this.x,e,n),this.y=At(this.y,e,n),this.z=At(this.z,e,n),this.w=At(this.w,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(At(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this.w=e.w+(n.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Tf.prototype.isVector4=!0;let Jt=Tf;class w_ extends sa{constructor(e=1,n=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Rn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},r),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=r.depth,this.scissor=new Jt(0,0,e,n),this.scissorTest=!1,this.viewport=new Jt(0,0,e,n),this.textures=[];const o={width:e,height:n,depth:r.depth},l=new Un(o),u=r.count;for(let f=0;f<u;f++)this.textures[f]=l.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveColorBuffer=r.resolveColorBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.storeMultisampledColorBuffer=r.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=r.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=r.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview,this.useArrayDepthTexture=r.useArrayDepthTexture}_setTextureOptions(e={}){const n={minFilter:Rn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,r=1){if(this.width!==e||this.height!==n||this.depth!==r){this.width=e,this.height=n,this.depth=r;for(let o=0,l=this.textures.length;o<l;o++)this.textures[o].image.width=e,this.textures[o].image.height=n,this.textures[o].image.depth=r,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const o=Object.assign({},e.textures[n].image);this.textures[n].source=new hf(o)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const n=e.depthTexture.clone();n.renderTarget=null,this.depthTexture=n}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ti extends w_{constructor(e=1,n=1,r={}){super(e,n,r),this.isWebGLRenderTarget=!0}}class Sg extends Un{constructor(e=null,n=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:r,depth:o},this.magFilter=yn,this.minFilter=yn,this.wrapR=tr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class A_ extends Un{constructor(e=null,n=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:r,depth:o},this.magFilter=yn,this.minFilter=yn,this.wrapR=tr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const Xl=class Xl{constructor(e,n,r,o,l,u,f,h,m,_,y,g,M,w,P,x){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,r,o,l,u,f,h,m,_,y,g,M,w,P,x)}set(e,n,r,o,l,u,f,h,m,_,y,g,M,w,P,x){const v=this.elements;return v[0]=e,v[4]=n,v[8]=r,v[12]=o,v[1]=l,v[5]=u,v[9]=f,v[13]=h,v[2]=m,v[6]=_,v[10]=y,v[14]=g,v[3]=M,v[7]=w,v[11]=P,v[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Xl().fromArray(this.elements)}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],n[9]=r[9],n[10]=r[10],n[11]=r[11],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],this}copyPosition(e){const n=this.elements,r=e.elements;return n[12]=r[12],n[13]=r[13],n[14]=r[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,r){return this.determinantAffine()===0?(e.set(1,0,0),n.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,n,r){return this.set(e.x,n.x,r.x,0,e.y,n.y,r.y,0,e.z,n.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const n=this.elements,r=e.elements,o=1/Ia.setFromMatrixColumn(e,0).length(),l=1/Ia.setFromMatrixColumn(e,1).length(),u=1/Ia.setFromMatrixColumn(e,2).length();return n[0]=r[0]*o,n[1]=r[1]*o,n[2]=r[2]*o,n[3]=0,n[4]=r[4]*l,n[5]=r[5]*l,n[6]=r[6]*l,n[7]=0,n[8]=r[8]*u,n[9]=r[9]*u,n[10]=r[10]*u,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,r=e.x,o=e.y,l=e.z,u=Math.cos(r),f=Math.sin(r),h=Math.cos(o),m=Math.sin(o),_=Math.cos(l),y=Math.sin(l);if(e.order==="XYZ"){const g=u*_,M=u*y,w=f*_,P=f*y;n[0]=h*_,n[4]=-h*y,n[8]=m,n[1]=M+w*m,n[5]=g-P*m,n[9]=-f*h,n[2]=P-g*m,n[6]=w+M*m,n[10]=u*h}else if(e.order==="YXZ"){const g=h*_,M=h*y,w=m*_,P=m*y;n[0]=g+P*f,n[4]=w*f-M,n[8]=u*m,n[1]=u*y,n[5]=u*_,n[9]=-f,n[2]=M*f-w,n[6]=P+g*f,n[10]=u*h}else if(e.order==="ZXY"){const g=h*_,M=h*y,w=m*_,P=m*y;n[0]=g-P*f,n[4]=-u*y,n[8]=w+M*f,n[1]=M+w*f,n[5]=u*_,n[9]=P-g*f,n[2]=-u*m,n[6]=f,n[10]=u*h}else if(e.order==="ZYX"){const g=u*_,M=u*y,w=f*_,P=f*y;n[0]=h*_,n[4]=w*m-M,n[8]=g*m+P,n[1]=h*y,n[5]=P*m+g,n[9]=M*m-w,n[2]=-m,n[6]=f*h,n[10]=u*h}else if(e.order==="YZX"){const g=u*h,M=u*m,w=f*h,P=f*m;n[0]=h*_,n[4]=P-g*y,n[8]=w*y+M,n[1]=y,n[5]=u*_,n[9]=-f*_,n[2]=-m*_,n[6]=M*y+w,n[10]=g-P*y}else if(e.order==="XZY"){const g=u*h,M=u*m,w=f*h,P=f*m;n[0]=h*_,n[4]=-y,n[8]=m*_,n[1]=g*y+P,n[5]=u*_,n[9]=M*y-w,n[2]=w*y-M,n[6]=f*_,n[10]=P*y+g}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(b_,e,C_)}lookAt(e,n,r){const o=this.elements;return Kn.subVectors(e,n),Kn.lengthSq()===0&&(Kn.z=1),Kn.normalize(),Tr.crossVectors(r,Kn),Tr.lengthSq()===0&&(Math.abs(r.z)===1?Kn.x+=1e-4:Kn.z+=1e-4,Kn.normalize(),Tr.crossVectors(r,Kn)),Tr.normalize(),ll.crossVectors(Kn,Tr),o[0]=Tr.x,o[4]=ll.x,o[8]=Kn.x,o[1]=Tr.y,o[5]=ll.y,o[9]=Kn.y,o[2]=Tr.z,o[6]=ll.z,o[10]=Kn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,o=n.elements,l=this.elements,u=r[0],f=r[4],h=r[8],m=r[12],_=r[1],y=r[5],g=r[9],M=r[13],w=r[2],P=r[6],x=r[10],v=r[14],C=r[3],F=r[7],b=r[11],L=r[15],R=o[0],U=o[4],E=o[8],I=o[12],O=o[1],X=o[5],J=o[9],ne=o[13],j=o[2],H=o[6],ae=o[10],W=o[14],B=o[3],z=o[7],K=o[11],N=o[15];return l[0]=u*R+f*O+h*j+m*B,l[4]=u*U+f*X+h*H+m*z,l[8]=u*E+f*J+h*ae+m*K,l[12]=u*I+f*ne+h*W+m*N,l[1]=_*R+y*O+g*j+M*B,l[5]=_*U+y*X+g*H+M*z,l[9]=_*E+y*J+g*ae+M*K,l[13]=_*I+y*ne+g*W+M*N,l[2]=w*R+P*O+x*j+v*B,l[6]=w*U+P*X+x*H+v*z,l[10]=w*E+P*J+x*ae+v*K,l[14]=w*I+P*ne+x*W+v*N,l[3]=C*R+F*O+b*j+L*B,l[7]=C*U+F*X+b*H+L*z,l[11]=C*E+F*J+b*ae+L*K,l[15]=C*I+F*ne+b*W+L*N,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[4],o=e[8],l=e[12],u=e[1],f=e[5],h=e[9],m=e[13],_=e[2],y=e[6],g=e[10],M=e[14],w=e[3],P=e[7],x=e[11],v=e[15],C=h*M-m*g,F=f*M-m*y,b=f*g-h*y,L=u*M-m*_,R=u*g-h*_,U=u*y-f*_;return n*(P*C-x*F+v*b)-r*(w*C-x*L+v*R)+o*(w*F-P*L+v*U)-l*(w*b-P*R+x*U)}determinantAffine(){const e=this.elements,n=e[0],r=e[4],o=e[8],l=e[1],u=e[5],f=e[9],h=e[2],m=e[6],_=e[10];return n*(u*_-f*m)-r*(l*_-f*h)+o*(l*m-u*h)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=n,o[14]=r),this}invert(){const e=this.elements,n=e[0],r=e[1],o=e[2],l=e[3],u=e[4],f=e[5],h=e[6],m=e[7],_=e[8],y=e[9],g=e[10],M=e[11],w=e[12],P=e[13],x=e[14],v=e[15],C=n*f-r*u,F=n*h-o*u,b=n*m-l*u,L=r*h-o*f,R=r*m-l*f,U=o*m-l*h,E=_*P-y*w,I=_*x-g*w,O=_*v-M*w,X=y*x-g*P,J=y*v-M*P,ne=g*v-M*x,j=C*ne-F*J+b*X+L*O-R*I+U*E;if(j===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const H=1/j;return e[0]=(f*ne-h*J+m*X)*H,e[1]=(o*J-r*ne-l*X)*H,e[2]=(P*U-x*R+v*L)*H,e[3]=(g*R-y*U-M*L)*H,e[4]=(h*O-u*ne-m*I)*H,e[5]=(n*ne-o*O+l*I)*H,e[6]=(x*b-w*U-v*F)*H,e[7]=(_*U-g*b+M*F)*H,e[8]=(u*J-f*O+m*E)*H,e[9]=(r*O-n*J-l*E)*H,e[10]=(w*R-P*b+v*C)*H,e[11]=(y*b-_*R-M*C)*H,e[12]=(f*I-u*X-h*E)*H,e[13]=(n*X-r*I+o*E)*H,e[14]=(P*F-w*L-x*C)*H,e[15]=(_*L-y*F+g*C)*H,this}scale(e){const n=this.elements,r=e.x,o=e.y,l=e.z;return n[0]*=r,n[4]*=o,n[8]*=l,n[1]*=r,n[5]*=o,n[9]*=l,n[2]*=r,n[6]*=o,n[10]*=l,n[3]*=r,n[7]*=o,n[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,r,o))}makeTranslation(e,n,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,r,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,n,-r,0,0,r,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,0,r,0,0,1,0,0,-r,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,0,r,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const r=Math.cos(n),o=Math.sin(n),l=1-r,u=e.x,f=e.y,h=e.z,m=l*u,_=l*f;return this.set(m*u+r,m*f-o*h,m*h+o*f,0,m*f+o*h,_*f+r,_*h-o*u,0,m*h-o*f,_*h+o*u,l*h*h+r,0,0,0,0,1),this}makeScale(e,n,r){return this.set(e,0,0,0,0,n,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,n,r,o,l,u){return this.set(1,r,l,0,e,1,u,0,n,o,1,0,0,0,0,1),this}compose(e,n,r){const o=this.elements,l=n._x,u=n._y,f=n._z,h=n._w,m=l+l,_=u+u,y=f+f,g=l*m,M=l*_,w=l*y,P=u*_,x=u*y,v=f*y,C=h*m,F=h*_,b=h*y,L=r.x,R=r.y,U=r.z;return o[0]=(1-(P+v))*L,o[1]=(M+b)*L,o[2]=(w-F)*L,o[3]=0,o[4]=(M-b)*R,o[5]=(1-(g+v))*R,o[6]=(x+C)*R,o[7]=0,o[8]=(w+F)*U,o[9]=(x-C)*U,o[10]=(1-(g+P))*U,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,n,r){const o=this.elements;e.x=o[12],e.y=o[13],e.z=o[14];const l=this.determinantAffine();if(l===0)return r.set(1,1,1),n.identity(),this;let u=Ia.set(o[0],o[1],o[2]).length();const f=Ia.set(o[4],o[5],o[6]).length(),h=Ia.set(o[8],o[9],o[10]).length();l<0&&(u=-u),xi.copy(this);const m=1/u,_=1/f,y=1/h;return xi.elements[0]*=m,xi.elements[1]*=m,xi.elements[2]*=m,xi.elements[4]*=_,xi.elements[5]*=_,xi.elements[6]*=_,xi.elements[8]*=y,xi.elements[9]*=y,xi.elements[10]*=y,n.setFromRotationMatrix(xi),r.x=u,r.y=f,r.z=h,this}makePerspective(e,n,r,o,l,u,f=Di,h=!1){const m=this.elements,_=2*l/(n-e),y=2*l/(r-o),g=(n+e)/(n-e),M=(r+o)/(r-o);let w,P;if(h)w=l/(u-l),P=u*l/(u-l);else if(f===Di)w=-(u+l)/(u-l),P=-2*u*l/(u-l);else if(f===Zs)w=-u/(u-l),P=-u*l/(u-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return m[0]=_,m[4]=0,m[8]=g,m[12]=0,m[1]=0,m[5]=y,m[9]=M,m[13]=0,m[2]=0,m[6]=0,m[10]=w,m[14]=P,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(e,n,r,o,l,u,f=Di,h=!1){const m=this.elements,_=2/(n-e),y=2/(r-o),g=-(n+e)/(n-e),M=-(r+o)/(r-o);let w,P;if(h)w=1/(u-l),P=u/(u-l);else if(f===Di)w=-2/(u-l),P=-(u+l)/(u-l);else if(f===Zs)w=-1/(u-l),P=-l/(u-l);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return m[0]=_,m[4]=0,m[8]=0,m[12]=g,m[1]=0,m[5]=y,m[9]=0,m[13]=M,m[2]=0,m[6]=0,m[10]=w,m[14]=P,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(e){const n=this.elements,r=e.elements;for(let o=0;o<16;o++)if(n[o]!==r[o])return!1;return!0}fromArray(e,n=0){for(let r=0;r<16;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e[n+9]=r[9],e[n+10]=r[10],e[n+11]=r[11],e[n+12]=r[12],e[n+13]=r[13],e[n+14]=r[14],e[n+15]=r[15],e}};Xl.prototype.isMatrix4=!0;let Qt=Xl;const Ia=new ie,xi=new Qt,b_=new ie(0,0,0),C_=new ie(1,1,1),Tr=new ie,ll=new ie,Kn=new ie,dm=new Qt,fm=new Ja;class Nr{constructor(e=0,n=0,r=0,o=Nr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,r,o=this._order){return this._x=e,this._y=n,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,r=!0){const o=e.elements,l=o[0],u=o[4],f=o[8],h=o[1],m=o[5],_=o[9],y=o[2],g=o[6],M=o[10];switch(n){case"XYZ":this._y=Math.asin(At(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-_,M),this._z=Math.atan2(-u,l)):(this._x=Math.atan2(g,m),this._z=0);break;case"YXZ":this._x=Math.asin(-At(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(f,M),this._z=Math.atan2(h,m)):(this._y=Math.atan2(-y,l),this._z=0);break;case"ZXY":this._x=Math.asin(At(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-y,M),this._z=Math.atan2(-u,m)):(this._y=0,this._z=Math.atan2(h,l));break;case"ZYX":this._y=Math.asin(-At(y,-1,1)),Math.abs(y)<.9999999?(this._x=Math.atan2(g,M),this._z=Math.atan2(h,l)):(this._x=0,this._z=Math.atan2(-u,m));break;case"YZX":this._z=Math.asin(At(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-_,m),this._y=Math.atan2(-y,l)):(this._x=0,this._y=Math.atan2(f,M));break;case"XZY":this._z=Math.asin(-At(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(g,m),this._y=Math.atan2(f,l)):(this._x=Math.atan2(-_,M),this._y=0);break;default:ct("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,r){return dm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(dm,n,r)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return fm.setFromEuler(this),this.setFromQuaternion(fm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Nr.DEFAULT_ORDER="XYZ";class Mg{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let R_=0;const hm=new ie,Da=new Ja,Yi=new Qt,cl=new ie,zs=new ie,P_=new ie,L_=new Ja,pm=new ie(1,0,0),mm=new ie(0,1,0),gm=new ie(0,0,1),vm={type:"added"},N_={type:"removed"},Ua={type:"childadded",child:null},Gu={type:"childremoved",child:null};class Sn extends sa{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:R_++}),this.uuid=Qs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Sn.DEFAULT_UP.clone();const e=new ie,n=new Nr,r=new Ja,o=new ie(1,1,1);function l(){r.setFromEuler(n,!1)}function u(){n.setFromQuaternion(r,void 0,!1)}n._onChange(l),r._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new Qt},normalMatrix:{value:new ht}}),this.matrix=new Qt,this.matrixWorld=new Qt,this.matrixAutoUpdate=Sn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Sn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Mg,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Da.setFromAxisAngle(e,n),this.quaternion.multiply(Da),this}rotateOnWorldAxis(e,n){return Da.setFromAxisAngle(e,n),this.quaternion.premultiply(Da),this}rotateX(e){return this.rotateOnAxis(pm,e)}rotateY(e){return this.rotateOnAxis(mm,e)}rotateZ(e){return this.rotateOnAxis(gm,e)}translateOnAxis(e,n){return hm.copy(e).applyQuaternion(this.quaternion),this.position.add(hm.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(pm,e)}translateY(e){return this.translateOnAxis(mm,e)}translateZ(e){return this.translateOnAxis(gm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Yi.copy(this.matrixWorld).invert())}lookAt(e,n,r){e.isVector3?cl.copy(e):cl.set(e,n,r);const o=this.parent;this.updateWorldMatrix(!0,!1),zs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Yi.lookAt(zs,cl,this.up):Yi.lookAt(cl,zs,this.up),this.quaternion.setFromRotationMatrix(Yi),o&&(Yi.extractRotation(o.matrixWorld),Da.setFromRotationMatrix(Yi),this.quaternion.premultiply(Da.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(Dt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(vm),Ua.child=e,this.dispatchEvent(Ua),Ua.child=null):Dt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(N_),Gu.child=e,this.dispatchEvent(Gu),Gu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Yi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Yi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Yi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(vm),Ua.child=e,this.dispatchEvent(Ua),Ua.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let r=0,o=this.children.length;r<o;r++){const u=this.children[r].getObjectByProperty(e,n);if(u!==void 0)return u}}getObjectsByProperty(e,n,r=[]){this[e]===n&&r.push(this);const o=this.children;for(let l=0,u=o.length;l<u;l++)o[l].getObjectsByProperty(e,n,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zs,e,P_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zs,L_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,r=e.y,o=e.z,l=this.matrix.elements;l[12]+=n-l[0]*n-l[4]*r-l[8]*o,l[13]+=r-l[1]*n-l[5]*r-l[9]*o,l[14]+=o-l[2]*n-l[6]*r-l[10]*o}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].updateMatrixWorld(e)}updateWorldMatrix(e,n,r=!1){const o=this.parent;if(e===!0&&o!==null&&o.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||r)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,r=!0),n===!0){const l=this.children;for(let u=0,f=l.length;u<f;u++)l[u].updateWorldMatrix(!1,!0,r)}}toJSON(e){const n=e===void 0||typeof e=="string",r={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,o.name=this.name,o.castShadow=this.castShadow,o.receiveShadow=this.receiveShadow,o.visible=this.visible,o.frustumCulled=this.frustumCulled,o.renderOrder=this.renderOrder,o.static=this.static,o.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.pivot!==null&&(o.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(f=>({...f,boundingBox:f.boundingBox?f.boundingBox.toJSON():void 0,boundingSphere:f.boundingSphere?f.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(f=>({...f})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function l(f,h){return f[h.uuid]===void 0&&(f[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=l(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const h=f.shapes;if(Array.isArray(h))for(let m=0,_=h.length;m<_;m++){const y=h[m];l(e.shapes,y)}else l(e.shapes,h)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let h=0,m=this.material.length;h<m;h++)f.push(l(e.materials,this.material[h]));o.material=f}else o.material=l(e.materials,this.material);if(this.children.length>0){o.children=[];for(let f=0;f<this.children.length;f++)o.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let f=0;f<this.animations.length;f++){const h=this.animations[f];o.animations.push(l(e.animations,h))}}if(n){const f=u(e.geometries),h=u(e.materials),m=u(e.textures),_=u(e.images),y=u(e.shapes),g=u(e.skeletons),M=u(e.animations),w=u(e.nodes);f.length>0&&(r.geometries=f),h.length>0&&(r.materials=h),m.length>0&&(r.textures=m),_.length>0&&(r.images=_),y.length>0&&(r.shapes=y),g.length>0&&(r.skeletons=g),M.length>0&&(r.animations=M),w.length>0&&(r.nodes=w)}return r.object=o,r;function u(f){const h=[];for(const m in f){const _=f[m];delete _.metadata,h.push(_)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Sn.DEFAULT_UP=new ie(0,1,0);Sn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Sn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class ul extends Sn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const I_={type:"move"};class Wu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ul,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ul,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ie,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ie),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ul,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ie,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ie,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const r of e.hand.values())this._getHandJoint(n,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,r){let o=null,l=null,u=null;const f=this._targetRay,h=this._grip,m=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(m&&e.hand){u=!0;for(const P of e.hand.values()){const x=n.getJointPose(P,r),v=this._getHandJoint(m,P);x!==null&&(v.matrix.fromArray(x.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=x.radius),v.visible=x!==null}const _=m.joints["index-finger-tip"],y=m.joints["thumb-tip"],g=_.position.distanceTo(y.position),M=.02,w=.005;m.inputState.pinching&&g>M+w?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&g<=M-w&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(l=n.getPose(e.gripSpace,r),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,h.eventsEnabled&&h.dispatchEvent({type:"gripUpdated",data:e,target:this})));f!==null&&(o=n.getPose(e.targetRaySpace,r),o===null&&l!==null&&(o=l),o!==null&&(f.matrix.fromArray(o.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,o.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(o.linearVelocity)):f.hasLinearVelocity=!1,o.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(o.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(I_)))}return f!==null&&(f.visible=o!==null),h!==null&&(h.visible=l!==null),m!==null&&(m.visible=u!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const r=new ul;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[n.jointName]=r,e.add(r)}return e.joints[n.jointName]}}const Eg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},wr={h:0,s:0,l:0},dl={h:0,s:0,l:0};function Xu(a,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?a+(e-a)*6*n:n<1/2?e:n<2/3?a+(e-a)*6*(2/3-n):a}class xt{constructor(e,n,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,r)}set(e,n,r){if(n===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,n,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=li){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,wt.colorSpaceToWorking(this,n),this}setRGB(e,n,r,o=wt.workingColorSpace){return this.r=e,this.g=n,this.b=r,wt.colorSpaceToWorking(this,o),this}setHSL(e,n,r,o=wt.workingColorSpace){if(e=y_(e,1),n=At(n,0,1),r=At(r,0,1),n===0)this.r=this.g=this.b=r;else{const l=r<=.5?r*(1+n):r+n-r*n,u=2*r-l;this.r=Xu(u,l,e+1/3),this.g=Xu(u,l,e),this.b=Xu(u,l,e-1/3)}return wt.colorSpaceToWorking(this,o),this}setStyle(e,n=li){function r(l){l!==void 0&&parseFloat(l)<1&&ct("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const u=o[1],f=o[2];switch(u){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,n);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,n);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,n);break;default:ct("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=o[1],u=l.length;if(u===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,n);if(u===6)return this.setHex(parseInt(l,16),n);ct("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=li){const r=Eg[e.toLowerCase()];return r!==void 0?this.setHex(r,n):ct("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ir(e.r),this.g=ir(e.g),this.b=ir(e.b),this}copyLinearToSRGB(e){return this.r=Ya(e.r),this.g=Ya(e.g),this.b=Ya(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=li){return wt.workingToColorSpace(Cn.copy(this),e),Math.round(At(Cn.r*255,0,255))*65536+Math.round(At(Cn.g*255,0,255))*256+Math.round(At(Cn.b*255,0,255))}getHexString(e=li){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=wt.workingColorSpace){wt.workingToColorSpace(Cn.copy(this),n);const r=Cn.r,o=Cn.g,l=Cn.b,u=Math.max(r,o,l),f=Math.min(r,o,l);let h,m;const _=(f+u)/2;if(f===u)h=0,m=0;else{const y=u-f;switch(m=_<=.5?y/(u+f):y/(2-u-f),u){case r:h=(o-l)/y+(o<l?6:0);break;case o:h=(l-r)/y+2;break;case l:h=(r-o)/y+4;break}h/=6}return e.h=h,e.s=m,e.l=_,e}getRGB(e,n=wt.workingColorSpace){return wt.workingToColorSpace(Cn.copy(this),n),e.r=Cn.r,e.g=Cn.g,e.b=Cn.b,e}getStyle(e=li){wt.workingToColorSpace(Cn.copy(this),e);const n=Cn.r,r=Cn.g,o=Cn.b;return e!==li?`color(${e} ${n.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,n,r){return this.getHSL(wr),this.setHSL(wr.h+e,wr.s+n,wr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,r){return this.r=e.r+(n.r-e.r)*r,this.g=e.g+(n.g-e.g)*r,this.b=e.b+(n.b-e.b)*r,this}lerpHSL(e,n){this.getHSL(wr),e.getHSL(dl);const r=Ou(wr.h,dl.h,n),o=Ou(wr.s,dl.s,n),l=Ou(wr.l,dl.l,n);return this.setHSL(r,o,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,r=this.g,o=this.b,l=e.elements;return this.r=l[0]*n+l[3]*r+l[6]*o,this.g=l[1]*n+l[4]*r+l[7]*o,this.b=l[2]*n+l[5]*r+l[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Cn=new xt;xt.NAMES=Eg;class pf{constructor(e,n=1,r=1e3){this.isFog=!0,this.name="",this.color=new xt(e),this.near=n,this.far=r}clone(){return new pf(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class D_ extends Sn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Nr,this.environmentIntensity=1,this.environmentRotation=new Nr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),n.object.backgroundBlurriness=this.backgroundBlurriness,n.object.backgroundIntensity=this.backgroundIntensity,n.object.backgroundRotation=this.backgroundRotation.toArray(),n.object.environmentIntensity=this.environmentIntensity,n.object.environmentRotation=this.environmentRotation.toArray(),n}}const yi=new ie,$i=new ie,qu=new ie,Zi=new ie,ka=new ie,Fa=new ie,_m=new ie,ju=new ie,Ku=new ie,Yu=new ie,$u=new Jt,Zu=new Jt,Ju=new Jt;class Mi{constructor(e=new ie,n=new ie,r=new ie){this.a=e,this.b=n,this.c=r}static getNormal(e,n,r,o){o.subVectors(r,n),yi.subVectors(e,n),o.cross(yi);const l=o.lengthSq();return l>0?o.multiplyScalar(1/Math.sqrt(l)):o.set(0,0,0)}static getBarycoord(e,n,r,o,l){yi.subVectors(o,n),$i.subVectors(r,n),qu.subVectors(e,n);const u=yi.dot(yi),f=yi.dot($i),h=yi.dot(qu),m=$i.dot($i),_=$i.dot(qu),y=u*m-f*f;if(y===0)return l.set(0,0,0),null;const g=1/y,M=(m*h-f*_)*g,w=(u*_-f*h)*g;return l.set(1-M-w,w,M)}static containsPoint(e,n,r,o){return this.getBarycoord(e,n,r,o,Zi)===null?!1:Zi.x>=0&&Zi.y>=0&&Zi.x+Zi.y<=1}static getInterpolation(e,n,r,o,l,u,f,h){return this.getBarycoord(e,n,r,o,Zi)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(l,Zi.x),h.addScaledVector(u,Zi.y),h.addScaledVector(f,Zi.z),h)}static getInterpolatedAttribute(e,n,r,o,l,u){return $u.setScalar(0),Zu.setScalar(0),Ju.setScalar(0),$u.fromBufferAttribute(e,n),Zu.fromBufferAttribute(e,r),Ju.fromBufferAttribute(e,o),u.setScalar(0),u.addScaledVector($u,l.x),u.addScaledVector(Zu,l.y),u.addScaledVector(Ju,l.z),u}static isFrontFacing(e,n,r,o){return yi.subVectors(r,n),$i.subVectors(e,n),yi.cross($i).dot(o)<0}set(e,n,r){return this.a.copy(e),this.b.copy(n),this.c.copy(r),this}setFromPointsAndIndices(e,n,r,o){return this.a.copy(e[n]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,n,r,o){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return yi.subVectors(this.c,this.b),$i.subVectors(this.a,this.b),yi.cross($i).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Mi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Mi.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,r,o,l){return Mi.getInterpolation(e,this.a,this.b,this.c,n,r,o,l)}containsPoint(e){return Mi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Mi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const r=this.a,o=this.b,l=this.c;let u,f;ka.subVectors(o,r),Fa.subVectors(l,r),ju.subVectors(e,r);const h=ka.dot(ju),m=Fa.dot(ju);if(h<=0&&m<=0)return n.copy(r);Ku.subVectors(e,o);const _=ka.dot(Ku),y=Fa.dot(Ku);if(_>=0&&y<=_)return n.copy(o);const g=h*y-_*m;if(g<=0&&h>=0&&_<=0)return u=h/(h-_),n.copy(r).addScaledVector(ka,u);Yu.subVectors(e,l);const M=ka.dot(Yu),w=Fa.dot(Yu);if(w>=0&&M<=w)return n.copy(l);const P=M*m-h*w;if(P<=0&&m>=0&&w<=0)return f=m/(m-w),n.copy(r).addScaledVector(Fa,f);const x=_*w-M*y;if(x<=0&&y-_>=0&&M-w>=0)return _m.subVectors(l,o),f=(y-_)/(y-_+(M-w)),n.copy(o).addScaledVector(_m,f);const v=1/(x+P+g);return u=P*v,f=g*v,n.copy(r).addScaledVector(ka,u).addScaledVector(Fa,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class eo{constructor(e=new ie(1/0,1/0,1/0),n=new ie(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n+=3)this.expandByPoint(Si.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,r=e.count;n<r;n++)this.expandByPoint(Si.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const r=Si.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const l=r.getAttribute("position");if(n===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let u=0,f=l.count;u<f;u++)e.isMesh===!0?e.getVertexPosition(u,Si):Si.fromBufferAttribute(l,u),Si.applyMatrix4(e.matrixWorld),this.expandByPoint(Si);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),fl.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),fl.copy(r.boundingBox)),fl.applyMatrix4(e.matrixWorld),this.union(fl)}const o=e.children;for(let l=0,u=o.length;l<u;l++)this.expandByObject(o[l],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Si),Si.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,r;return e.normal.x>0?(n=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),n<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Bs),hl.subVectors(this.max,Bs),Oa.subVectors(e.a,Bs),za.subVectors(e.b,Bs),Ba.subVectors(e.c,Bs),Ar.subVectors(za,Oa),br.subVectors(Ba,za),$r.subVectors(Oa,Ba);let n=[0,-Ar.z,Ar.y,0,-br.z,br.y,0,-$r.z,$r.y,Ar.z,0,-Ar.x,br.z,0,-br.x,$r.z,0,-$r.x,-Ar.y,Ar.x,0,-br.y,br.x,0,-$r.y,$r.x,0];return!Qu(n,Oa,za,Ba,hl)||(n=[1,0,0,0,1,0,0,0,1],!Qu(n,Oa,za,Ba,hl))?!1:(pl.crossVectors(Ar,br),n=[pl.x,pl.y,pl.z],Qu(n,Oa,za,Ba,hl))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Si).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Si).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ji[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ji[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ji[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ji[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ji[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ji[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ji[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ji[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ji),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ji=[new ie,new ie,new ie,new ie,new ie,new ie,new ie,new ie],Si=new ie,fl=new eo,Oa=new ie,za=new ie,Ba=new ie,Ar=new ie,br=new ie,$r=new ie,Bs=new ie,hl=new ie,pl=new ie,Zr=new ie;function Qu(a,e,n,r,o){for(let l=0,u=a.length-3;l<=u;l+=3){Zr.fromArray(a,l);const f=o.x*Math.abs(Zr.x)+o.y*Math.abs(Zr.y)+o.z*Math.abs(Zr.z),h=e.dot(Zr),m=n.dot(Zr),_=r.dot(Zr);if(Math.max(-Math.max(h,m,_),Math.min(h,m,_))>f)return!1}return!0}const sn=new ie,ml=new yt;let U_=0;class ki extends sa{constructor(e,n,r=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:U_++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=r,this.usage=m_,this.updateRanges=[],this.gpuType=Ii,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,r){e*=this.itemSize,r*=n.itemSize;for(let o=0,l=this.itemSize;o<l;o++)this.array[e+o]=n.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,r=this.count;n<r;n++)ml.fromBufferAttribute(this,n),ml.applyMatrix3(e),this.setXY(n,ml.x,ml.y);else if(this.itemSize===3)for(let n=0,r=this.count;n<r;n++)sn.fromBufferAttribute(this,n),sn.applyMatrix3(e),this.setXYZ(n,sn.x,sn.y,sn.z);return this}applyMatrix4(e){for(let n=0,r=this.count;n<r;n++)sn.fromBufferAttribute(this,n),sn.applyMatrix4(e),this.setXYZ(n,sn.x,sn.y,sn.z);return this}applyNormalMatrix(e){for(let n=0,r=this.count;n<r;n++)sn.fromBufferAttribute(this,n),sn.applyNormalMatrix(e),this.setXYZ(n,sn.x,sn.y,sn.z);return this}transformDirection(e){for(let n=0,r=this.count;n<r;n++)sn.fromBufferAttribute(this,n),sn.transformDirection(e),this.setXYZ(n,sn.x,sn.y,sn.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let r=this.array[e*this.itemSize+n];return this.normalized&&(r=Os(r,this.array)),r}setComponent(e,n,r){return this.normalized&&(r=Vn(r,this.array)),this.array[e*this.itemSize+n]=r,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Os(n,this.array)),n}setX(e,n){return this.normalized&&(n=Vn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Os(n,this.array)),n}setY(e,n){return this.normalized&&(n=Vn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Os(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Vn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Os(n,this.array)),n}setW(e,n){return this.normalized&&(n=Vn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,r){return e*=this.itemSize,this.normalized&&(n=Vn(n,this.array),r=Vn(r,this.array)),this.array[e+0]=n,this.array[e+1]=r,this}setXYZ(e,n,r,o){return e*=this.itemSize,this.normalized&&(n=Vn(n,this.array),r=Vn(r,this.array),o=Vn(o,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,n,r,o,l){return e*=this.itemSize,this.normalized&&(n=Vn(n,this.array),r=Vn(r,this.array),o=Vn(o,this.array),l=Vn(l,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class Tg extends ki{constructor(e,n,r){super(new Uint16Array(e),n,r)}}class wg extends ki{constructor(e,n,r){super(new Uint32Array(e),n,r)}}class Kt extends ki{constructor(e,n,r){super(new Float32Array(e),n,r)}}const k_=new eo,Hs=new ie,ed=new ie;class jl{constructor(e=new ie,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const r=this.center;n!==void 0?r.copy(n):k_.setFromPoints(e).getCenter(r);let o=0;for(let l=0,u=e.length;l<u;l++)o=Math.max(o,r.distanceToSquared(e[l]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const r=this.center.distanceToSquared(e);return n.copy(e),r>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Hs.subVectors(e,this.center);const n=Hs.lengthSq();if(n>this.radius*this.radius){const r=Math.sqrt(n),o=(r-this.radius)*.5;this.center.addScaledVector(Hs,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ed.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Hs.copy(e.center).add(ed)),this.expandByPoint(Hs.copy(e.center).sub(ed))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let F_=0;const oi=new Qt,td=new Sn,Ha=new ie,Yn=new eo,Vs=new eo,gn=new ie;class Pn extends sa{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:F_++}),this.uuid=Qs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(g_(e)?wg:Tg)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,r=0){this.groups.push({start:e,count:n,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new ht().getNormalMatrix(e);r.applyNormalMatrix(l),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return oi.makeRotationFromQuaternion(e),this.applyMatrix4(oi),this}rotateX(e){return oi.makeRotationX(e),this.applyMatrix4(oi),this}rotateY(e){return oi.makeRotationY(e),this.applyMatrix4(oi),this}rotateZ(e){return oi.makeRotationZ(e),this.applyMatrix4(oi),this}translate(e,n,r){return oi.makeTranslation(e,n,r),this.applyMatrix4(oi),this}scale(e,n,r){return oi.makeScale(e,n,r),this.applyMatrix4(oi),this}lookAt(e){return td.lookAt(e),td.updateMatrix(),this.applyMatrix4(td.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ha).negate(),this.translate(Ha.x,Ha.y,Ha.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const r=[];for(let o=0,l=e.length;o<l;o++){const u=e[o];r.push(u.x,u.y,u.z||0)}this.setAttribute("position",new Kt(r,3))}else{const r=Math.min(e.length,n.count);for(let o=0;o<r;o++){const l=e[o];n.setXYZ(o,l.x,l.y,l.z||0)}e.length>n.count&&ct("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new eo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Dt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ie(-1/0,-1/0,-1/0),new ie(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let r=0,o=n.length;r<o;r++){const l=n[r];Yn.setFromBufferAttribute(l),this.morphTargetsRelative?(gn.addVectors(this.boundingBox.min,Yn.min),this.boundingBox.expandByPoint(gn),gn.addVectors(this.boundingBox.max,Yn.max),this.boundingBox.expandByPoint(gn)):(this.boundingBox.expandByPoint(Yn.min),this.boundingBox.expandByPoint(Yn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Dt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new jl);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Dt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ie,1/0);return}if(e){const r=this.boundingSphere.center;if(Yn.setFromBufferAttribute(e),n)for(let l=0,u=n.length;l<u;l++){const f=n[l];Vs.setFromBufferAttribute(f),this.morphTargetsRelative?(gn.addVectors(Yn.min,Vs.min),Yn.expandByPoint(gn),gn.addVectors(Yn.max,Vs.max),Yn.expandByPoint(gn)):(Yn.expandByPoint(Vs.min),Yn.expandByPoint(Vs.max))}Yn.getCenter(r);let o=0;for(let l=0,u=e.count;l<u;l++)gn.fromBufferAttribute(e,l),o=Math.max(o,r.distanceToSquared(gn));if(n)for(let l=0,u=n.length;l<u;l++){const f=n[l],h=this.morphTargetsRelative;for(let m=0,_=f.count;m<_;m++)gn.fromBufferAttribute(f,m),h&&(Ha.fromBufferAttribute(e,m),gn.add(Ha)),o=Math.max(o,r.distanceToSquared(gn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&Dt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){Dt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=n.position,o=n.normal,l=n.uv;let u=this.getAttribute("tangent");(u===void 0||u.count!==r.count)&&(u=new ki(new Float32Array(4*r.count),4),this.setAttribute("tangent",u));const f=[],h=[];for(let E=0;E<r.count;E++)f[E]=new ie,h[E]=new ie;const m=new ie,_=new ie,y=new ie,g=new yt,M=new yt,w=new yt,P=new ie,x=new ie;function v(E,I,O){m.fromBufferAttribute(r,E),_.fromBufferAttribute(r,I),y.fromBufferAttribute(r,O),g.fromBufferAttribute(l,E),M.fromBufferAttribute(l,I),w.fromBufferAttribute(l,O),_.sub(m),y.sub(m),M.sub(g),w.sub(g);const X=1/(M.x*w.y-w.x*M.y);isFinite(X)&&(P.copy(_).multiplyScalar(w.y).addScaledVector(y,-M.y).multiplyScalar(X),x.copy(y).multiplyScalar(M.x).addScaledVector(_,-w.x).multiplyScalar(X),f[E].add(P),f[I].add(P),f[O].add(P),h[E].add(x),h[I].add(x),h[O].add(x))}let C=this.groups;C.length===0&&(C=[{start:0,count:e.count}]);for(let E=0,I=C.length;E<I;++E){const O=C[E],X=O.start,J=O.count;for(let ne=X,j=X+J;ne<j;ne+=3)v(e.getX(ne+0),e.getX(ne+1),e.getX(ne+2))}const F=new ie,b=new ie,L=new ie,R=new ie;function U(E){L.fromBufferAttribute(o,E),R.copy(L);const I=f[E];F.copy(I),F.sub(L.multiplyScalar(L.dot(I))).normalize(),b.crossVectors(R,I);const X=b.dot(h[E])<0?-1:1;u.setXYZW(E,F.x,F.y,F.z,X)}for(let E=0,I=C.length;E<I;++E){const O=C[E],X=O.start,J=O.count;for(let ne=X,j=X+J;ne<j;ne+=3)U(e.getX(ne+0)),U(e.getX(ne+1)),U(e.getX(ne+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let r=this.getAttribute("normal");if(r===void 0||r.count!==n.count)r=new ki(new Float32Array(n.count*3),3),this.setAttribute("normal",r);else for(let g=0,M=r.count;g<M;g++)r.setXYZ(g,0,0,0);const o=new ie,l=new ie,u=new ie,f=new ie,h=new ie,m=new ie,_=new ie,y=new ie;if(e)for(let g=0,M=e.count;g<M;g+=3){const w=e.getX(g+0),P=e.getX(g+1),x=e.getX(g+2);o.fromBufferAttribute(n,w),l.fromBufferAttribute(n,P),u.fromBufferAttribute(n,x),_.subVectors(u,l),y.subVectors(o,l),_.cross(y),f.fromBufferAttribute(r,w),h.fromBufferAttribute(r,P),m.fromBufferAttribute(r,x),f.add(_),h.add(_),m.add(_),r.setXYZ(w,f.x,f.y,f.z),r.setXYZ(P,h.x,h.y,h.z),r.setXYZ(x,m.x,m.y,m.z)}else for(let g=0,M=n.count;g<M;g+=3)o.fromBufferAttribute(n,g+0),l.fromBufferAttribute(n,g+1),u.fromBufferAttribute(n,g+2),_.subVectors(u,l),y.subVectors(o,l),_.cross(y),r.setXYZ(g+0,_.x,_.y,_.z),r.setXYZ(g+1,_.x,_.y,_.z),r.setXYZ(g+2,_.x,_.y,_.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,r=e.count;n<r;n++)gn.fromBufferAttribute(e,n),gn.normalize(),e.setXYZ(n,gn.x,gn.y,gn.z)}toNonIndexed(){function e(f,h){const m=f.array,_=f.itemSize,y=f.normalized,g=new m.constructor(h.length*_);let M=0,w=0;for(let P=0,x=h.length;P<x;P++){f.isInterleavedBufferAttribute?M=h[P]*f.data.stride+f.offset:M=h[P]*_;for(let v=0;v<_;v++)g[w++]=m[M++]}return new ki(g,_,y)}if(this.index===null)return ct("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Pn,r=this.index.array,o=this.attributes;for(const f in o){const h=o[f],m=e(h,r);n.setAttribute(f,m)}const l=this.morphAttributes;for(const f in l){const h=[],m=l[f];for(let _=0,y=m.length;_<y;_++){const g=m[_],M=e(g,r);h.push(M)}n.morphAttributes[f]=h}n.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let f=0,h=u.length;f<h;f++){const m=u[f];n.addGroup(m.start,m.count,m.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const h=this.parameters;for(const m in h)h[m]!==void 0&&(e[m]=h[m]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const r=this.attributes;for(const h in r){const m=r[h];e.data.attributes[h]=m.toJSON(e.data)}const o={};let l=!1;for(const h in this.morphAttributes){const m=this.morphAttributes[h],_=[];for(let y=0,g=m.length;y<g;y++){const M=m[y];_.push(M.toJSON(e.data))}_.length>0&&(o[h]=_,l=!0)}l&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere=f.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const o=e.attributes;for(const m in o){const _=o[m];this.setAttribute(m,_.clone(n))}const l=e.morphAttributes;for(const m in l){const _=[],y=l[m];for(let g=0,M=y.length;g<M;g++)_.push(y[g].clone(n));this.morphAttributes[m]=_}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let m=0,_=u.length;m<_;m++){const y=u[m];this.addGroup(y.start,y.count,y.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const nd=new ie,O_=new ie,z_=new ht;class Rr{constructor(e=new ie(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,r,o){return this.normal.set(e,n,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,r){const o=nd.subVectors(r,n).cross(O_.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,r=!0){const o=e.delta(nd),l=this.normal.dot(o);if(l===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/l;return r===!0&&(u<0||u>1)?null:n.copy(e.start).addScaledVector(o,u)}intersectsLine(e){const n=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return n<0&&r>0||r<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const r=n||z_.getNormalMatrix(e),o=this.coplanarPoint(nd).applyMatrix4(e),l=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let B_=0;class Qa extends sa{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:B_++}),this.uuid=Qs(),this.name="",this.type="Material",this.blending=js,this.side=ia,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ng,this.blendDst=ig,this.blendEquation=Xa,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new xt(0,0,0),this.blendAlpha=0,this.depthFunc=Ks,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=l_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ku,this.stencilZFail=ku,this.stencilZPass=ku,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const r=e[n];if(r===void 0){ct(`Material: parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){ct(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector2&&r&&r.isVector2||o&&o.isEuler&&r&&r.isEuler||o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,r.blending=this.blending,r.side=this.side,r.shadowSide=this.shadowSide,r.vertexColors=this.vertexColors,r.opacity=this.opacity,r.transparent=this.transparent,r.blendSrc=this.blendSrc,r.blendDst=this.blendDst,r.blendEquation=this.blendEquation,r.blendSrcAlpha=this.blendSrcAlpha,r.blendDstAlpha=this.blendDstAlpha,r.blendEquationAlpha=this.blendEquationAlpha,r.blendColor=this.blendColor.getHex(),r.blendAlpha=this.blendAlpha,r.depthFunc=this.depthFunc,r.depthTest=this.depthTest,r.depthWrite=this.depthWrite,r.colorWrite=this.colorWrite,r.clipIntersection=this.clipIntersection,r.clipShadows=this.clipShadows,r.stencilWriteMask=this.stencilWriteMask,r.stencilFunc=this.stencilFunc,r.stencilRef=this.stencilRef,r.stencilFuncMask=this.stencilFuncMask,r.stencilFail=this.stencilFail,r.stencilZFail=this.stencilZFail,r.stencilZPass=this.stencilZPass,r.stencilWrite=this.stencilWrite,r.polygonOffset=this.polygonOffset,r.polygonOffsetFactor=this.polygonOffsetFactor,r.polygonOffsetUnits=this.polygonOffsetUnits,r.dithering=this.dithering,r.alphaTest=this.alphaTest,r.alphaHash=this.alphaHash,r.alphaToCoverage=this.alphaToCoverage,r.premultipliedAlpha=this.premultipliedAlpha,r.forceSinglePass=this.forceSinglePass,r.allowOverride=this.allowOverride,r.visible=this.visible,r.toneMapped=this.toneMapped,r.name=this.name,this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(r.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(r.clippingPlanes=this.clippingPlanes.map(l=>l.toJSON())),this.rotation!==void 0&&(r.rotation=this.rotation),this.depthPacking!==void 0&&(r.depthPacking=this.depthPacking),this.linewidth!==void 0&&(r.linewidth=this.linewidth),this.linecap!==void 0&&(r.linecap=this.linecap),this.linejoin!==void 0&&(r.linejoin=this.linejoin),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.wireframe!==void 0&&(r.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(r.flatShading=this.flatShading),this.fog!==void 0&&(r.fog=this.fog),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(l){const u=[];for(const f in l){const h=l[f];delete h.metadata,u.push(h)}return u}if(n){const l=o(e.textures),u=o(e.images);l.length>0&&(r.textures=l),u.length>0&&(r.images=u)}return r}fromJSON(e,n){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new xt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(r=>new Rr().fromJSON(r))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=n[e.map]||null),e.matcap!==void 0&&(this.matcap=n[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=n[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=n[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=n[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let r=e.normalScale;Array.isArray(r)===!1&&(r=[r,r]),this.normalScale=new yt().fromArray(r)}return e.displacementMap!==void 0&&(this.displacementMap=n[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=n[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=n[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=n[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=n[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=n[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=n[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=n[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=n[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=n[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=n[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new yt().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=n[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=n[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=n[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=n[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=n[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let r=null;if(n!==null){const o=n.length;r=new Array(o);for(let l=0;l!==o;++l)r[l]=n[l].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Qi=new ie,id=new ie,gl=new ie,vl=new ie;class Ag{constructor(e=new ie,n=new ie(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Qi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const r=n.dot(this.direction);return r<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Qi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Qi.copy(this.origin).addScaledVector(this.direction,n),Qi.distanceToSquared(e))}distanceSqToSegment(e,n,r,o){id.copy(e).add(n).multiplyScalar(.5),gl.copy(n).sub(e).normalize(),vl.copy(this.origin).sub(id);const l=e.distanceTo(n)*.5,u=-this.direction.dot(gl),f=vl.dot(this.direction),h=-vl.dot(gl),m=vl.lengthSq(),_=Math.abs(1-u*u);let y,g,M,w;if(_>0)if(y=u*h-f,g=u*f-h,w=l*_,y>=0)if(g>=-w)if(g<=w){const P=1/_;y*=P,g*=P,M=y*(y+u*g+2*f)+g*(u*y+g+2*h)+m}else g=l,y=Math.max(0,-(u*g+f)),M=-y*y+g*(g+2*h)+m;else g=-l,y=Math.max(0,-(u*g+f)),M=-y*y+g*(g+2*h)+m;else g<=-w?(y=Math.max(0,-(-u*l+f)),g=y>0?-l:Math.min(Math.max(-l,-h),l),M=-y*y+g*(g+2*h)+m):g<=w?(y=0,g=Math.min(Math.max(-l,-h),l),M=g*(g+2*h)+m):(y=Math.max(0,-(u*l+f)),g=y>0?l:Math.min(Math.max(-l,-h),l),M=-y*y+g*(g+2*h)+m);else g=u>0?-l:l,y=Math.max(0,-(u*g+f)),M=-y*y+g*(g+2*h)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,y),o&&o.copy(id).addScaledVector(gl,g),M}intersectSphere(e,n){if(e.radius<0)return null;Qi.subVectors(e.center,this.origin);const r=Qi.dot(this.direction),o=Qi.dot(Qi)-r*r,l=e.radius*e.radius;if(o>l)return null;const u=Math.sqrt(l-o),f=r-u,h=r+u;return h<0?null:f<0?this.at(h,n):this.at(f,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/n;return r>=0?r:null}intersectPlane(e,n){const r=this.distanceToPlane(e);return r===null?null:this.at(r,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let r,o,l,u,f,h;const m=1/this.direction.x,_=1/this.direction.y,y=1/this.direction.z,g=this.origin;return m>=0?(r=(e.min.x-g.x)*m,o=(e.max.x-g.x)*m):(r=(e.max.x-g.x)*m,o=(e.min.x-g.x)*m),_>=0?(l=(e.min.y-g.y)*_,u=(e.max.y-g.y)*_):(l=(e.max.y-g.y)*_,u=(e.min.y-g.y)*_),r>u||l>o||((l>r||isNaN(r))&&(r=l),(u<o||isNaN(o))&&(o=u),y>=0?(f=(e.min.z-g.z)*y,h=(e.max.z-g.z)*y):(f=(e.max.z-g.z)*y,h=(e.min.z-g.z)*y),r>h||f>o)||((f>r||r!==r)&&(r=f),(h<o||o!==o)&&(o=h),o<0)?null:this.at(r>=0?r:o,n)}intersectsBox(e){return this.intersectBox(e,Qi)!==null}intersectTriangle(e,n,r,o,l){const u=this.origin,f=this.direction,h=f.x,m=f.y,_=f.z,y=e.x-u.x,g=e.y-u.y,M=e.z-u.z,w=n.x-u.x,P=n.y-u.y,x=n.z-u.z,v=r.x-u.x,C=r.y-u.y,F=r.z-u.z,b=Math.abs(h),L=Math.abs(m),R=Math.abs(_);let U,E,I,O,X,J,ne,j,H,ae,W,B;if(b>=L&&b>=R?(I=h,J=y,H=w,B=v,h>=0?(U=m,E=_,O=g,X=M,ne=P,j=x,ae=C,W=F):(U=_,E=m,O=M,X=g,ne=x,j=P,ae=F,W=C)):L>=R?(I=m,J=g,H=P,B=C,m>=0?(U=_,E=h,O=M,X=y,ne=x,j=w,ae=F,W=v):(U=h,E=_,O=y,X=M,ne=w,j=x,ae=v,W=F)):(I=_,J=M,H=x,B=F,_>=0?(U=h,E=m,O=y,X=g,ne=w,j=P,ae=v,W=C):(U=m,E=h,O=g,X=y,ne=P,j=w,ae=C,W=v)),I===0)return null;const z=U/I,K=E/I,N=1/I,ee=O-z*J,xe=X-K*J,He=ne-z*H,Ue=j-K*H,We=ae-z*B,le=W-K*B,fe=We*Ue-le*He,Te=ee*le-xe*We,Je=He*xe-Ue*ee;if(o){if(fe<0||Te<0||Je<0)return null}else if((fe<0||Te<0||Je<0)&&(fe>0||Te>0||Je>0))return null;const Be=fe+Te+Je;if(Be===0)return null;const dt=N*(fe*J+Te*H+Je*B);return(Be>0?dt<0:dt>0)?null:this.at(dt/Be,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class bg extends Qa{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new xt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Nr,this.combine=rg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const xm=new Qt,Jr=new Ag,_l=new jl,ym=new ie,xl=new ie,yl=new ie,Sl=new ie,rd=new ie,Ml=new ie,Sm=new ie,El=new ie;class Ft extends Sn{constructor(e=new Pn,n=new bg){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const o=n[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const f=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}getVertexPosition(e,n){const r=this.geometry,o=r.attributes.position,l=r.morphAttributes.position,u=r.morphTargetsRelative;n.fromBufferAttribute(o,e);const f=this.morphTargetInfluences;if(l&&f){Ml.set(0,0,0);for(let h=0,m=l.length;h<m;h++){const _=f[h],y=l[h];_!==0&&(rd.fromBufferAttribute(y,e),u?Ml.addScaledVector(rd,_):Ml.addScaledVector(rd.sub(n),_))}n.add(Ml)}return n}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,n){const r=this.geometry,o=this.material,l=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),_l.copy(r.boundingSphere),_l.applyMatrix4(l),Jr.copy(e.ray).recast(e.near),!(_l.containsPoint(Jr.origin)===!1&&(Jr.intersectSphere(_l,ym)===null||Jr.origin.distanceToSquared(ym)>(e.far-e.near)**2))&&(xm.copy(l).invert(),Jr.copy(e.ray).applyMatrix4(xm),!(r.boundingBox!==null&&Jr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,n,Jr)))}_computeIntersections(e,n,r){let o;const l=this.geometry,u=this.material,f=l.index,h=l.attributes.position,m=l.attributes.uv,_=l.attributes.uv1,y=l.attributes.normal,g=l.groups,M=l.drawRange;if(f!==null)if(Array.isArray(u))for(let w=0,P=g.length;w<P;w++){const x=g[w],v=u[x.materialIndex],C=Math.max(x.start,M.start),F=Math.min(f.count,Math.min(x.start+x.count,M.start+M.count));for(let b=C,L=F;b<L;b+=3){const R=f.getX(b),U=f.getX(b+1),E=f.getX(b+2);o=Tl(this,v,e,r,m,_,y,R,U,E),o&&(o.faceIndex=Math.floor(b/3),o.face.materialIndex=x.materialIndex,n.push(o))}}else{const w=Math.max(0,M.start),P=Math.min(f.count,M.start+M.count);for(let x=w,v=P;x<v;x+=3){const C=f.getX(x),F=f.getX(x+1),b=f.getX(x+2);o=Tl(this,u,e,r,m,_,y,C,F,b),o&&(o.faceIndex=Math.floor(x/3),n.push(o))}}else if(h!==void 0)if(Array.isArray(u))for(let w=0,P=g.length;w<P;w++){const x=g[w],v=u[x.materialIndex],C=Math.max(x.start,M.start),F=Math.min(h.count,Math.min(x.start+x.count,M.start+M.count));for(let b=C,L=F;b<L;b+=3){const R=b,U=b+1,E=b+2;o=Tl(this,v,e,r,m,_,y,R,U,E),o&&(o.faceIndex=Math.floor(b/3),o.face.materialIndex=x.materialIndex,n.push(o))}}else{const w=Math.max(0,M.start),P=Math.min(h.count,M.start+M.count);for(let x=w,v=P;x<v;x+=3){const C=x,F=x+1,b=x+2;o=Tl(this,u,e,r,m,_,y,C,F,b),o&&(o.faceIndex=Math.floor(x/3),n.push(o))}}}}function H_(a,e,n,r,o,l,u,f){let h;if(e.side===Gn?h=r.intersectTriangle(u,l,o,!0,f):h=r.intersectTriangle(o,l,u,e.side===ia,f),h===null)return null;El.copy(f),El.applyMatrix4(a.matrixWorld);const m=n.ray.origin.distanceTo(El);return m<n.near||m>n.far?null:{distance:m,point:El.clone(),object:a}}function Tl(a,e,n,r,o,l,u,f,h,m){a.getVertexPosition(f,xl),a.getVertexPosition(h,yl),a.getVertexPosition(m,Sl);const _=H_(a,e,n,r,xl,yl,Sl,Sm);if(_){const y=new ie;Mi.getBarycoord(Sm,xl,yl,Sl,y),o&&(_.uv=Mi.getInterpolatedAttribute(o,f,h,m,y,new yt)),l&&(_.uv1=Mi.getInterpolatedAttribute(l,f,h,m,y,new yt)),u&&(_.normal=Mi.getInterpolatedAttribute(u,f,h,m,y,new ie),_.normal.dot(r.direction)>0&&_.normal.multiplyScalar(-1));const g={a:f,b:h,c:m,normal:new ie,materialIndex:0};Mi.getNormal(xl,yl,Sl,g.normal),_.face=g,_.barycoord=y}return _}class V_ extends Un{constructor(e=null,n=1,r=1,o,l,u,f,h,m=yn,_=yn,y,g){super(null,u,f,h,m,_,o,l,y,g),this.isDataTexture=!0,this.image={data:e,width:n,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Qr=new jl,G_=new yt(.5,.5),wl=new ie;class mf{constructor(e=new Rr,n=new Rr,r=new Rr,o=new Rr,l=new Rr,u=new Rr){this.planes=[e,n,r,o,l,u]}set(e,n,r,o,l,u){const f=this.planes;return f[0].copy(e),f[1].copy(n),f[2].copy(r),f[3].copy(o),f[4].copy(l),f[5].copy(u),this}copy(e){const n=this.planes;for(let r=0;r<6;r++)n[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,n=Di,r=!1){const o=this.planes,l=e.elements,u=l[0],f=l[1],h=l[2],m=l[3],_=l[4],y=l[5],g=l[6],M=l[7],w=l[8],P=l[9],x=l[10],v=l[11],C=l[12],F=l[13],b=l[14],L=l[15];if(o[0].setComponents(m-u,M-_,v-w,L-C).normalize(),o[1].setComponents(m+u,M+_,v+w,L+C).normalize(),o[2].setComponents(m+f,M+y,v+P,L+F).normalize(),o[3].setComponents(m-f,M-y,v-P,L-F).normalize(),r)o[4].setComponents(h,g,x,b).normalize(),o[5].setComponents(m-h,M-g,v-x,L-b).normalize();else if(o[4].setComponents(m-h,M-g,v-x,L-b).normalize(),n===Di)o[5].setComponents(m+h,M+g,v+x,L+b).normalize();else if(n===Zs)o[5].setComponents(h,g,x,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Qr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Qr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Qr)}intersectsSprite(e){Qr.center.set(0,0,0);const n=G_.distanceTo(e.center);return Qr.radius=.7071067811865476+n,Qr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Qr)}intersectsSphere(e){const n=this.planes,r=e.center,o=-e.radius;for(let l=0;l<6;l++)if(n[l].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const n=this.planes;for(let r=0;r<6;r++){const o=n[r];if(wl.x=o.normal.x>0?e.max.x:e.min.x,wl.y=o.normal.y>0?e.max.y:e.min.y,wl.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(wl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let r=0;r<6;r++)if(n[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Cg extends Qa{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new xt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Mm=new Qt,Qd=new Ag,Al=new jl,bl=new ie;class W_ extends Sn{constructor(e=new Pn,n=new Cg){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,n){const r=this.geometry,o=this.matrixWorld,l=e.params.Points.threshold,u=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Al.copy(r.boundingSphere),Al.applyMatrix4(o),Al.radius+=l,e.ray.intersectsSphere(Al)===!1)return;Mm.copy(o).invert(),Qd.copy(e.ray).applyMatrix4(Mm);const f=l/((this.scale.x+this.scale.y+this.scale.z)/3),h=f*f,m=r.index,y=r.attributes.position;if(m!==null){const g=Math.max(0,u.start),M=Math.min(m.count,u.start+u.count);for(let w=g,P=M;w<P;w++){const x=m.getX(w);bl.fromBufferAttribute(y,x),Em(bl,x,h,o,e,n,this)}}else{const g=Math.max(0,u.start),M=Math.min(y.count,u.start+u.count);for(let w=g,P=M;w<P;w++)bl.fromBufferAttribute(y,w),Em(bl,w,h,o,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const o=n[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const f=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}}function Em(a,e,n,r,o,l,u){const f=Qd.distanceSqToPoint(a);if(f<n){const h=new ie;Qd.closestPointToPoint(a,h),h.applyMatrix4(r);const m=o.ray.origin.distanceTo(h);if(m<o.near||m>o.far)return;l.push({distance:m,distanceToRay:Math.sqrt(f),point:h,index:e,face:null,faceIndex:null,barycoord:null,object:u})}}class Rg extends Un{constructor(e=[],n=ra,r,o,l,u,f,h,m,_){super(e,n,r,o,l,u,f,h,m,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Js extends Un{constructor(e,n,r=Fi,o,l,u,f=yn,h=yn,m,_=rr,y=1){if(_!==rr&&_!==na)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:e,height:n,depth:y};super(g,o,l,u,f,h,_,r,m),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new hf(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return n.compareFunction=this.compareFunction,n}}class X_ extends Js{constructor(e,n=Fi,r=ra,o,l,u=yn,f=yn,h,m=rr){const _={width:e,height:e,depth:1},y=[_,_,_,_,_,_];super(e,e,n,r,o,l,u,f,h,m),this.image=y,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Pg extends Un{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Lr extends Pn{constructor(e=1,n=1,r=1,o=1,l=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:r,widthSegments:o,heightSegments:l,depthSegments:u};const f=this;o=Math.floor(o),l=Math.floor(l),u=Math.floor(u);const h=[],m=[],_=[],y=[];let g=0,M=0;w("z","y","x",-1,-1,r,n,e,u,l,0),w("z","y","x",1,-1,r,n,-e,u,l,1),w("x","z","y",1,1,e,r,n,o,u,2),w("x","z","y",1,-1,e,r,-n,o,u,3),w("x","y","z",1,-1,e,n,r,o,l,4),w("x","y","z",-1,-1,e,n,-r,o,l,5),this.setIndex(h),this.setAttribute("position",new Kt(m,3)),this.setAttribute("normal",new Kt(_,3)),this.setAttribute("uv",new Kt(y,2));function w(P,x,v,C,F,b,L,R,U,E,I){const O=b/U,X=L/E,J=b/2,ne=L/2,j=R/2,H=U+1,ae=E+1;let W=0,B=0;const z=new ie;for(let K=0;K<ae;K++){const N=K*X-ne;for(let ee=0;ee<H;ee++){const xe=ee*O-J;z[P]=xe*C,z[x]=N*F,z[v]=j,m.push(z.x,z.y,z.z),z[P]=0,z[x]=0,z[v]=R>0?1:-1,_.push(z.x,z.y,z.z),y.push(ee/U),y.push(1-K/E),W+=1}}for(let K=0;K<E;K++)for(let N=0;N<U;N++){const ee=g+N+H*K,xe=g+N+H*(K+1),He=g+(N+1)+H*(K+1),Ue=g+(N+1)+H*K;h.push(ee,xe,Ue),h.push(xe,He,Ue),B+=6}f.addGroup(M,B,I),M+=B,g+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Lr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class gf extends Pn{constructor(e=1,n=32,r=0,o=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:n,thetaStart:r,thetaLength:o},n=Math.max(3,n);const l=[],u=[],f=[],h=[],m=new ie,_=new yt;u.push(0,0,0),f.push(0,0,1),h.push(.5,.5);for(let y=0,g=3;y<=n;y++,g+=3){const M=r+y/n*o;m.x=e*Math.cos(M),m.y=e*Math.sin(M),u.push(m.x,m.y,m.z),f.push(0,0,1),_.x=(u[g]/e+1)/2,_.y=(u[g+1]/e+1)/2,h.push(_.x,_.y)}for(let y=1;y<=n;y++)l.push(y,y+1,0);this.setIndex(l),this.setAttribute("position",new Kt(u,3)),this.setAttribute("normal",new Kt(f,3)),this.setAttribute("uv",new Kt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gf(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Li extends Pn{constructor(e=1,n=1,r=1,o=32,l=1,u=!1,f=0,h=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:r,radialSegments:o,heightSegments:l,openEnded:u,thetaStart:f,thetaLength:h};const m=this;o=Math.floor(o),l=Math.floor(l);const _=[],y=[],g=[],M=[];let w=0;const P=[],x=r/2;let v=0;C(),u===!1&&(e>0&&F(!0),n>0&&F(!1)),this.setIndex(_),this.setAttribute("position",new Kt(y,3)),this.setAttribute("normal",new Kt(g,3)),this.setAttribute("uv",new Kt(M,2));function C(){const b=new ie,L=new ie;let R=0;const U=(n-e)/r;for(let E=0;E<=l;E++){const I=[],O=E/l,X=O*(n-e)+e;for(let J=0;J<=o;J++){const ne=J/o,j=ne*h+f,H=Math.sin(j),ae=Math.cos(j);L.x=X*H,L.y=-O*r+x,L.z=X*ae,y.push(L.x,L.y,L.z),b.set(H,U,ae).normalize(),g.push(b.x,b.y,b.z),M.push(ne,1-O),I.push(w++)}P.push(I)}for(let E=0;E<o;E++)for(let I=0;I<l;I++){const O=P[I][E],X=P[I+1][E],J=P[I+1][E+1],ne=P[I][E+1];(e>0||I!==0)&&(_.push(O,X,ne),R+=3),(n>0||I!==l-1)&&(_.push(X,J,ne),R+=3)}m.addGroup(v,R,0),v+=R}function F(b){const L=w,R=new yt,U=new ie;let E=0;const I=b===!0?e:n,O=b===!0?1:-1;for(let J=1;J<=o;J++)y.push(0,x*O,0),g.push(0,O,0),M.push(.5,.5),w++;const X=w;for(let J=0;J<=o;J++){const j=J/o*h+f,H=Math.cos(j),ae=Math.sin(j);U.x=I*ae,U.y=x*O,U.z=I*H,y.push(U.x,U.y,U.z),g.push(0,O,0),R.x=H*.5+.5,R.y=ae*.5*O+.5,M.push(R.x,R.y),w++}for(let J=0;J<o;J++){const ne=L+J,j=X+J;b===!0?_.push(j,j+1,ne):_.push(j+1,j,ne),E+=3}m.addGroup(v,E,b===!0?1:2),v+=E}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Li(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class qa extends Li{constructor(e=1,n=1,r=32,o=1,l=!1,u=0,f=Math.PI*2){super(0,e,n,r,o,l,u,f),this.type="ConeGeometry",this.parameters={radius:e,height:n,radialSegments:r,heightSegments:o,openEnded:l,thetaStart:u,thetaLength:f}}static fromJSON(e){return new qa(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Kl extends Pn{constructor(e=[],n=[],r=1,o=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:r,detail:o};const l=[],u=[];f(o),m(r),_(),this.setAttribute("position",new Kt(l,3)),this.setAttribute("normal",new Kt(l.slice(),3)),this.setAttribute("uv",new Kt(u,2)),o===0?this.computeVertexNormals():this.normalizeNormals();function f(C){const F=new ie,b=new ie,L=new ie;for(let R=0;R<n.length;R+=3)M(n[R+0],F),M(n[R+1],b),M(n[R+2],L),h(F,b,L,C)}function h(C,F,b,L){const R=L+1,U=[];for(let E=0;E<=R;E++){U[E]=[];const I=C.clone().lerp(b,E/R),O=F.clone().lerp(b,E/R),X=R-E;for(let J=0;J<=X;J++)J===0&&E===R?U[E][J]=I:U[E][J]=I.clone().lerp(O,J/X)}for(let E=0;E<R;E++)for(let I=0;I<2*(R-E)-1;I++){const O=Math.floor(I/2);I%2===0?(g(U[E][O+1]),g(U[E+1][O]),g(U[E][O])):(g(U[E][O+1]),g(U[E+1][O+1]),g(U[E+1][O]))}}function m(C){const F=new ie;for(let b=0;b<l.length;b+=3)F.x=l[b+0],F.y=l[b+1],F.z=l[b+2],F.normalize().multiplyScalar(C),l[b+0]=F.x,l[b+1]=F.y,l[b+2]=F.z}function _(){const C=new ie;for(let F=0;F<l.length;F+=3){C.x=l[F+0],C.y=l[F+1],C.z=l[F+2];const b=x(C)/2/Math.PI+.5,L=v(C)/Math.PI+.5;u.push(b,1-L)}w(),y()}function y(){for(let C=0;C<u.length;C+=6){const F=u[C+0],b=u[C+2],L=u[C+4],R=Math.max(F,b,L),U=Math.min(F,b,L);R>.9&&U<.1&&(F<.2&&(u[C+0]+=1),b<.2&&(u[C+2]+=1),L<.2&&(u[C+4]+=1))}}function g(C){l.push(C.x,C.y,C.z)}function M(C,F){const b=C*3;F.x=e[b+0],F.y=e[b+1],F.z=e[b+2]}function w(){const C=new ie,F=new ie,b=new ie,L=new ie,R=new yt,U=new yt,E=new yt;for(let I=0,O=0;I<l.length;I+=9,O+=6){C.set(l[I+0],l[I+1],l[I+2]),F.set(l[I+3],l[I+4],l[I+5]),b.set(l[I+6],l[I+7],l[I+8]),R.set(u[O+0],u[O+1]),U.set(u[O+2],u[O+3]),E.set(u[O+4],u[O+5]),L.copy(C).add(F).add(b).divideScalar(3);const X=x(L);P(R,O+0,C,X),P(U,O+2,F,X),P(E,O+4,b,X)}}function P(C,F,b,L){L<0&&C.x===1&&(u[F]=C.x-1),b.x===0&&b.z===0&&(u[F]=L/2/Math.PI+.5)}function x(C){return Math.atan2(C.z,-C.x)}function v(C){return Math.atan2(-C.y,Math.sqrt(C.x*C.x+C.z*C.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Kl(e.vertices,e.indices,e.radius,e.detail)}}class vf extends Kl{constructor(e=1,n=0){const r=(1+Math.sqrt(5))/2,o=1/r,l=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-o,-r,0,-o,r,0,o,-r,0,o,r,-o,-r,0,-o,r,0,o,-r,0,o,r,0,-r,0,-o,r,0,-o,-r,0,o,r,0,o],u=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(l,u,e,n),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new vf(e.radius,e.detail)}}class _f extends Kl{constructor(e=1,n=0){const r=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],o=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(r,o,e,n),this.type="OctahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new _f(e.radius,e.detail)}}class to extends Pn{constructor(e=1,n=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:r,heightSegments:o};const l=e/2,u=n/2,f=Math.floor(r),h=Math.floor(o),m=f+1,_=h+1,y=e/f,g=n/h,M=[],w=[],P=[],x=[];for(let v=0;v<_;v++){const C=v*g-u;for(let F=0;F<m;F++){const b=F*y-l;w.push(b,-C,0),P.push(0,0,1),x.push(F/f),x.push(1-v/h)}}for(let v=0;v<h;v++)for(let C=0;C<f;C++){const F=C+m*v,b=C+m*(v+1),L=C+1+m*(v+1),R=C+1+m*v;M.push(F,b,R),M.push(b,L,R)}this.setIndex(M),this.setAttribute("position",new Kt(w,3)),this.setAttribute("normal",new Kt(P,3)),this.setAttribute("uv",new Kt(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new to(e.width,e.height,e.widthSegments,e.heightSegments)}}class Gl extends Pn{constructor(e=1,n=32,r=16,o=0,l=Math.PI*2,u=0,f=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:r,phiStart:o,phiLength:l,thetaStart:u,thetaLength:f},n=Math.max(3,Math.floor(n)),r=Math.max(2,Math.floor(r));const h=Math.min(u+f,Math.PI);let m=0;const _=[],y=new ie,g=new ie,M=[],w=[],P=[],x=[];for(let v=0;v<=r;v++){const C=[],F=v/r,b=u+F*f,L=e*Math.cos(b),R=Math.sqrt(e*e-L*L);let U=0;v===0&&u===0?U=.5/n:v===r&&h===Math.PI&&(U=-.5/n);for(let E=0;E<=n;E++){const I=E/n,O=o+I*l;y.x=-R*Math.cos(O),y.y=L,y.z=R*Math.sin(O),w.push(y.x,y.y,y.z),g.copy(y).normalize(),P.push(g.x,g.y,g.z),x.push(I+U,1-F),C.push(m++)}_.push(C)}for(let v=0;v<r;v++)for(let C=0;C<n;C++){const F=_[v][C+1],b=_[v][C],L=_[v+1][C],R=_[v+1][C+1];(v!==0||u>0)&&M.push(F,b,R),(v!==r-1||h<Math.PI)&&M.push(b,L,R)}this.setIndex(M),this.setAttribute("position",new Kt(w,3)),this.setAttribute("normal",new Kt(P,3)),this.setAttribute("uv",new Kt(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gl(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Wl extends Pn{constructor(e=1,n=.4,r=12,o=48,l=Math.PI*2,u=0,f=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:r,tubularSegments:o,arc:l,thetaStart:u,thetaLength:f},r=Math.floor(r),o=Math.floor(o);const h=[],m=[],_=[],y=[],g=new ie,M=new ie,w=new ie;for(let P=0;P<=r;P++){const x=u+P/r*f;for(let v=0;v<=o;v++){const C=v/o*l;M.x=(e+n*Math.cos(x))*Math.cos(C),M.y=(e+n*Math.cos(x))*Math.sin(C),M.z=n*Math.sin(x),m.push(M.x,M.y,M.z),g.x=e*Math.cos(C),g.y=e*Math.sin(C),w.subVectors(M,g).normalize(),_.push(w.x,w.y,w.z),y.push(v/o),y.push(P/r)}}for(let P=1;P<=r;P++)for(let x=1;x<=o;x++){const v=(o+1)*P+x-1,C=(o+1)*(P-1)+x-1,F=(o+1)*(P-1)+x,b=(o+1)*P+x;h.push(v,C,b),h.push(C,F,b)}this.setIndex(h),this.setAttribute("position",new Kt(m,3)),this.setAttribute("normal",new Kt(_,3)),this.setAttribute("uv",new Kt(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wl(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}function Za(a){const e={};for(const n in a){e[n]={};for(const r in a[n]){const o=a[n][r];if(Tm(o))o.isRenderTargetTexture?(ct("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][r]=null):e[n][r]=o.clone();else if(Array.isArray(o))if(Tm(o[0])){const l=[];for(let u=0,f=o.length;u<f;u++)l[u]=o[u].clone();e[n][r]=l}else e[n][r]=o.slice();else e[n][r]=o}}return e}function Dn(a){const e={};for(let n=0;n<a.length;n++){const r=Za(a[n]);for(const o in r)e[o]=r[o]}return e}function Tm(a){return a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)}function q_(a){const e=[];for(let n=0;n<a.length;n++)e.push(a[n].clone());return e}function Lg(a){const e=a.getRenderTarget();return e===null?a.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:wt.workingColorSpace}const j_={clone:Za,merge:Dn};var K_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Y_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class zi extends Qa{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=K_,this.fragmentShader=Y_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Za(e.uniforms),this.uniformsGroups=q_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?n.uniforms[o]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?n.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?n.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?n.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?n.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?n.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?n.uniforms[o]={type:"m4",value:u.toArray()}:n.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(n.extensions=r),n}fromJSON(e,n){if(super.fromJSON(e,n),e.uniforms!==void 0)for(const r in e.uniforms){const o=e.uniforms[r];switch(this.uniforms[r]={},o.type){case"t":this.uniforms[r].value=n[o.value]||null;break;case"c":this.uniforms[r].value=new xt().setHex(o.value);break;case"v2":this.uniforms[r].value=new yt().fromArray(o.value);break;case"v3":this.uniforms[r].value=new ie().fromArray(o.value);break;case"v4":this.uniforms[r].value=new Jt().fromArray(o.value);break;case"m3":this.uniforms[r].value=new ht().fromArray(o.value);break;case"m4":this.uniforms[r].value=new Qt().fromArray(o.value);break;default:this.uniforms[r].value=o.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const r in e.extensions)this.extensions[r]=e.extensions[r];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class $_ extends zi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class on extends Qa{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new xt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new xt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Zd,this.normalScale=new yt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Nr,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Z_ extends Qa{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=s_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class J_ extends Qa{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class xf extends Sn{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new xt(e),this.intensity=n}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}const ad=new Qt,wm=new ie,Am=new ie;class Ng{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new yt(512,512),this.mapType=Jn,this.map=null,this.mapPass=null,this.matrix=new Qt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new mf,this._frameExtents=new yt(1,1),this._viewportCount=1,this._viewports=[new Jt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera;wm.setFromMatrixPosition(e.matrixWorld),n.position.copy(wm),Am.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Am),n.updateMatrixWorld(),this._updateMatrix(n,this.matrix,this._frustum)}_updateMatrix(e,n,r,o){ad.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),r.setFromProjectionMatrix(ad,e.coordinateSystem,e.reversedDepth);const l=this._frameExtents,u=o?o.z/l.x:1,f=o?o.w/l.y:1,h=o?o.x/l.x:0,m=o?o.y/l.y:0;e.coordinateSystem===Zs||e.reversedDepth?n.set(.5*u,0,0,.5*u+h,0,.5*f,0,.5*f+m,0,0,1,0,0,0,0,1):n.set(.5*u,0,0,.5*u+h,0,.5*f,0,.5*f+m,0,0,.5,.5,0,0,0,1),n.multiply(ad)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Cl=new ie,Rl=new Ja,Ri=new ie;class Ig extends Sn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Qt,this.projectionMatrix=new Qt,this.projectionMatrixInverse=new Qt,this.coordinateSystem=Di,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Cl,Rl,Ri),Ri.x===1&&Ri.y===1&&Ri.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Cl,Rl,Ri.set(1,1,1)).invert()}updateWorldMatrix(e,n,r=!1){super.updateWorldMatrix(e,n,r),this.matrixWorld.decompose(Cl,Rl,Ri),Ri.x===1&&Ri.y===1&&Ri.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Cl,Rl,Ri.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Cr=new ie,bm=new yt,Cm=new yt;class Zn extends Ig{constructor(e=50,n=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Jd*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Fu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Jd*2*Math.atan(Math.tan(Fu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,r){Cr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Cr.x,Cr.y).multiplyScalar(-e/Cr.z),Cr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Cr.x,Cr.y).multiplyScalar(-e/Cr.z)}getViewSize(e,n){return this.getViewBounds(e,bm,Cm),n.subVectors(Cm,bm)}setViewOffset(e,n,r,o,l,u){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Fu*.5*this.fov)/this.zoom,r=2*n,o=this.aspect*r,l=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const h=u.fullWidth,m=u.fullHeight;l+=u.offsetX*o/h,n-=u.offsetY*r/m,o*=u.width/h,r*=u.height/m}const f=this.filmOffset;f!==0&&(l+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+o,n,n-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class Q_ extends Ng{constructor(){super(new Zn(90,1,.5,500)),this.isPointLightShadow=!0}}class ex extends xf{constructor(e,n,r=0,o=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=o,this.shadow=new Q_}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.distance=this.distance,n.object.decay=this.decay,n.object.shadow=this.shadow.toJSON(),n}}class yf extends Ig{constructor(e=-1,n=1,r=1,o=-1,l=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=r,this.bottom=o,this.near=l,this.far=u,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,r,o,l,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let l=r-e,u=r+e,f=o+n,h=o-n;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=m*this.view.offsetX,u=l+m*this.view.width,f-=_*this.view.offsetY,h=f-_*this.view.height}this.projectionMatrix.makeOrthographic(l,u,f,h,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class tx extends Ng{constructor(){super(new yf(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class nx extends xf{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Sn.DEFAULT_UP),this.updateMatrix(),this.target=new Sn,this.shadow=new tx}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.shadow=this.shadow.toJSON(),n.object.target=this.target.uuid,n}}class ix extends xf{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}const Va=-90,Ga=1;class rx extends Sn{constructor(e,n,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new Zn(Va,Ga,e,n);o.layers=this.layers,this.add(o);const l=new Zn(Va,Ga,e,n);l.layers=this.layers,this.add(l);const u=new Zn(Va,Ga,e,n);u.layers=this.layers,this.add(u);const f=new Zn(Va,Ga,e,n);f.layers=this.layers,this.add(f);const h=new Zn(Va,Ga,e,n);h.layers=this.layers,this.add(h);const m=new Zn(Va,Ga,e,n);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[r,o,l,u,f,h]=n;for(const m of n)this.remove(m);if(e===Di)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===Zs)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of n)this.add(m),m.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,u,f,h,m,_]=this.children,y=e.getRenderTarget(),g=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),w=e.xr.enabled;e.xr.enabled=!1;const P=r.texture.generateMipmaps;r.texture.generateMipmaps=!1;let x=!1;e.isWebGLRenderer===!0?x=e.state.buffers.depth.getReversed():x=e.reversedDepthBuffer,e.setRenderTarget(r,0,o),x&&e.autoClear===!1&&e.clearDepth(),e.render(n,l),e.setRenderTarget(r,1,o),x&&e.autoClear===!1&&e.clearDepth(),e.render(n,u),e.setRenderTarget(r,2,o),x&&e.autoClear===!1&&e.clearDepth(),e.render(n,f),e.setRenderTarget(r,3,o),x&&e.autoClear===!1&&e.clearDepth(),e.render(n,h),e.setRenderTarget(r,4,o),x&&e.autoClear===!1&&e.clearDepth(),e.render(n,m),r.texture.generateMipmaps=P,e.setRenderTarget(r,5,o),x&&e.autoClear===!1&&e.clearDepth(),e.render(n,_),e.setRenderTarget(y,g,M),e.xr.enabled=w,r.texture.needsPMREMUpdate=!0}}class ax extends Zn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const wf=class wf{constructor(e,n,r,o){this.elements=[1,0,0,1],e!==void 0&&this.set(e,n,r,o)}identity(){return this.set(1,0,0,1),this}fromArray(e,n=0){for(let r=0;r<4;r++)this.elements[r]=e[r+n];return this}set(e,n,r,o){const l=this.elements;return l[0]=e,l[2]=n,l[1]=r,l[3]=o,this}};wf.prototype.isMatrix2=!0;let Rm=wf;function Pm(a,e,n,r){const o=sx(r);switch(n){case vg:return a*e;case xg:return a*e/o.components*o.byteLength;case lf:return a*e/o.components*o.byteLength;case aa:return a*e*2/o.components*o.byteLength;case cf:return a*e*2/o.components*o.byteLength;case _g:return a*e*3/o.components*o.byteLength;case Ei:return a*e*4/o.components*o.byteLength;case uf:return a*e*4/o.components*o.byteLength;case Il:case Dl:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case Ul:case kl:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case Md:case Td:return Math.max(a,16)*Math.max(e,8)/4;case Sd:case Ed:return Math.max(a,8)*Math.max(e,8)/2;case wd:case Ad:case Cd:case Rd:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case bd:case Ol:case Pd:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case Ld:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case Nd:return Math.floor((a+4)/5)*Math.floor((e+3)/4)*16;case Id:return Math.floor((a+4)/5)*Math.floor((e+4)/5)*16;case Dd:return Math.floor((a+5)/6)*Math.floor((e+4)/5)*16;case Ud:return Math.floor((a+5)/6)*Math.floor((e+5)/6)*16;case kd:return Math.floor((a+7)/8)*Math.floor((e+4)/5)*16;case Fd:return Math.floor((a+7)/8)*Math.floor((e+5)/6)*16;case Od:return Math.floor((a+7)/8)*Math.floor((e+7)/8)*16;case zd:return Math.floor((a+9)/10)*Math.floor((e+4)/5)*16;case Bd:return Math.floor((a+9)/10)*Math.floor((e+5)/6)*16;case Hd:return Math.floor((a+9)/10)*Math.floor((e+7)/8)*16;case Vd:return Math.floor((a+9)/10)*Math.floor((e+9)/10)*16;case Gd:return Math.floor((a+11)/12)*Math.floor((e+9)/10)*16;case Wd:return Math.floor((a+11)/12)*Math.floor((e+11)/12)*16;case Xd:case qd:case jd:return Math.ceil(a/4)*Math.ceil(e/4)*16;case Kd:case Yd:return Math.ceil(a/4)*Math.ceil(e/4)*8;case zl:case $d:return Math.ceil(a/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function sx(a){switch(a){case Jn:case hg:return{byteLength:1,components:1};case Ys:case pg:case Oi:return{byteLength:2,components:1};case sf:case of:return{byteLength:2,components:4};case Fi:case af:case Ii:return{byteLength:4,components:1};case mg:case gg:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${a}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:rf}}));typeof window<"u"&&(window.__THREE__?ct("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=rf);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Dg(){let a=null,e=!1,n=null,r=null;function o(l,u){r=a.requestAnimationFrame(o),n(l,u)}return{start:function(){e!==!0&&n!==null&&a!==null&&(r=a.requestAnimationFrame(o),e=!0)},stop:function(){a!==null&&a.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(l){n=l},setContext:function(l){a=l}}}function ox(a){const e=new WeakMap;function n(f,h){const m=f.array,_=f.usage,y=m.byteLength,g=a.createBuffer();a.bindBuffer(h,g),a.bufferData(h,m,_),f.onUploadCallback();let M;if(m instanceof Float32Array)M=a.FLOAT;else if(typeof Float16Array<"u"&&m instanceof Float16Array)M=a.HALF_FLOAT;else if(m instanceof Uint16Array)f.isFloat16BufferAttribute?M=a.HALF_FLOAT:M=a.UNSIGNED_SHORT;else if(m instanceof Int16Array)M=a.SHORT;else if(m instanceof Uint32Array)M=a.UNSIGNED_INT;else if(m instanceof Int32Array)M=a.INT;else if(m instanceof Int8Array)M=a.BYTE;else if(m instanceof Uint8Array)M=a.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)M=a.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:g,type:M,bytesPerElement:m.BYTES_PER_ELEMENT,version:f.version,size:y}}function r(f,h,m){const _=h.array,y=h.updateRanges;if(a.bindBuffer(m,f),y.length===0)a.bufferSubData(m,0,_);else{y.sort((M,w)=>M.start-w.start);let g=0;for(let M=1;M<y.length;M++){const w=y[g],P=y[M];P.start<=w.start+w.count+1?w.count=Math.max(w.count,P.start+P.count-w.start):(++g,y[g]=P)}y.length=g+1;for(let M=0,w=y.length;M<w;M++){const P=y[M];a.bufferSubData(m,P.start*_.BYTES_PER_ELEMENT,_,P.start,P.count)}h.clearUpdateRanges()}h.onUploadCallback()}function o(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function l(f){f.isInterleavedBufferAttribute&&(f=f.data);const h=e.get(f);h&&(a.deleteBuffer(h.buffer),e.delete(f))}function u(f,h){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const _=e.get(f);(!_||_.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const m=e.get(f);if(m===void 0)e.set(f,n(f,h));else if(m.version<f.version){if(m.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(m.buffer,f,h),m.version=f.version}}return{get:o,remove:l,update:u}}var lx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,cx=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,ux=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,dx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,fx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,hx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,px=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,mx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,gx=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,vx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,_x=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,xx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,yx=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Sx=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Mx=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Ex=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Tx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,wx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ax=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,bx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Cx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Rx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Px=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Lx=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Nx=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Ix=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Dx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ux=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,kx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Fx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ox="gl_FragColor = linearToOutputTexel( gl_FragColor );",zx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Bx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Hx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Vx=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Gx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Wx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Xx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,qx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,jx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Kx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Yx=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,$x=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Zx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Jx=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Qx=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,ey=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,ty=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ny=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,iy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ry=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ay=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,sy=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,oy=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,ly=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,cy=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,uy=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,dy=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,fy=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,py=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,my=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,gy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,vy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,_y=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,xy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,yy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Sy=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,My=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ey=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ty=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,wy=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ay=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,by=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Cy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ry=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Py=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Ly=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Ny=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Iy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Dy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Uy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ky=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Fy=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Oy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,zy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,By=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Hy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Vy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Gy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Wy=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Xy=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,qy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,jy=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Ky=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Yy=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,$y=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Zy=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Jy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Qy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,eS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tS=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,nS=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,iS=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,rS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,aS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,sS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,oS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const lS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,cS=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dS=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,mS=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,gS=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,vS=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,_S=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,xS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yS=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,SS=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,MS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,ES=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,TS=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,wS=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,AS=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,bS=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,CS=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,RS=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,PS=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,LS=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,NS=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,IS=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,DS=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,US=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kS=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,FS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,OS=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,zS=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,BS=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,HS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,vt={alphahash_fragment:lx,alphahash_pars_fragment:cx,alphamap_fragment:ux,alphamap_pars_fragment:dx,alphatest_fragment:fx,alphatest_pars_fragment:hx,aomap_fragment:px,aomap_pars_fragment:mx,batching_pars_vertex:gx,batching_vertex:vx,begin_vertex:_x,beginnormal_vertex:xx,bsdfs:yx,iridescence_fragment:Sx,bumpmap_pars_fragment:Mx,clipping_planes_fragment:Ex,clipping_planes_pars_fragment:Tx,clipping_planes_pars_vertex:wx,clipping_planes_vertex:Ax,color_fragment:bx,color_pars_fragment:Cx,color_pars_vertex:Rx,color_vertex:Px,common:Lx,cube_uv_reflection_fragment:Nx,defaultnormal_vertex:Ix,displacementmap_pars_vertex:Dx,displacementmap_vertex:Ux,emissivemap_fragment:kx,emissivemap_pars_fragment:Fx,colorspace_fragment:Ox,colorspace_pars_fragment:zx,envmap_fragment:Bx,envmap_common_pars_fragment:Hx,envmap_pars_fragment:Vx,envmap_pars_vertex:Gx,envmap_physical_pars_fragment:ey,envmap_vertex:Wx,fog_vertex:Xx,fog_pars_vertex:qx,fog_fragment:jx,fog_pars_fragment:Kx,gradientmap_pars_fragment:Yx,lightmap_pars_fragment:$x,lights_lambert_fragment:Zx,lights_lambert_pars_fragment:Jx,lights_pars_begin:Qx,lights_toon_fragment:ty,lights_toon_pars_fragment:ny,lights_phong_fragment:iy,lights_phong_pars_fragment:ry,lights_physical_fragment:ay,lights_physical_pars_fragment:sy,lights_fragment_begin:oy,lights_fragment_maps:ly,lights_fragment_end:cy,lightprobes_pars_fragment:uy,logdepthbuf_fragment:dy,logdepthbuf_pars_fragment:fy,logdepthbuf_pars_vertex:hy,logdepthbuf_vertex:py,map_fragment:my,map_pars_fragment:gy,map_particle_fragment:vy,map_particle_pars_fragment:_y,metalnessmap_fragment:xy,metalnessmap_pars_fragment:yy,morphinstance_vertex:Sy,morphcolor_vertex:My,morphnormal_vertex:Ey,morphtarget_pars_vertex:Ty,morphtarget_vertex:wy,normal_fragment_begin:Ay,normal_fragment_maps:by,normal_pars_fragment:Cy,normal_pars_vertex:Ry,normal_vertex:Py,normalmap_pars_fragment:Ly,clearcoat_normal_fragment_begin:Ny,clearcoat_normal_fragment_maps:Iy,clearcoat_pars_fragment:Dy,iridescence_pars_fragment:Uy,opaque_fragment:ky,packing:Fy,premultiplied_alpha_fragment:Oy,project_vertex:zy,dithering_fragment:By,dithering_pars_fragment:Hy,roughnessmap_fragment:Vy,roughnessmap_pars_fragment:Gy,shadowmap_pars_fragment:Wy,shadowmap_pars_vertex:Xy,shadowmap_vertex:qy,shadowmask_pars_fragment:jy,skinbase_vertex:Ky,skinning_pars_vertex:Yy,skinning_vertex:$y,skinnormal_vertex:Zy,specularmap_fragment:Jy,specularmap_pars_fragment:Qy,tonemapping_fragment:eS,tonemapping_pars_fragment:tS,transmission_fragment:nS,transmission_pars_fragment:iS,uv_pars_fragment:rS,uv_pars_vertex:aS,uv_vertex:sS,worldpos_vertex:oS,background_vert:lS,background_frag:cS,backgroundCube_vert:uS,backgroundCube_frag:dS,cube_vert:fS,cube_frag:hS,depth_vert:pS,depth_frag:mS,distance_vert:gS,distance_frag:vS,equirect_vert:_S,equirect_frag:xS,linedashed_vert:yS,linedashed_frag:SS,meshbasic_vert:MS,meshbasic_frag:ES,meshlambert_vert:TS,meshlambert_frag:wS,meshmatcap_vert:AS,meshmatcap_frag:bS,meshnormal_vert:CS,meshnormal_frag:RS,meshphong_vert:PS,meshphong_frag:LS,meshphysical_vert:NS,meshphysical_frag:IS,meshtoon_vert:DS,meshtoon_frag:US,points_vert:kS,points_frag:FS,shadow_vert:OS,shadow_frag:zS,sprite_vert:BS,sprite_frag:HS},Oe={common:{diffuse:{value:new xt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ht}},envmap:{envMap:{value:null},envMapRotation:{value:new ht},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ht},normalScale:{value:new yt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new xt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new ie},probesMax:{value:new ie},probesResolution:{value:new ie}},points:{diffuse:{value:new xt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0},uvTransform:{value:new ht}},sprite:{diffuse:{value:new xt(16777215)},opacity:{value:1},center:{value:new yt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}}},Ni={basic:{uniforms:Dn([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.fog]),vertexShader:vt.meshbasic_vert,fragmentShader:vt.meshbasic_frag},lambert:{uniforms:Dn([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,Oe.lights,{emissive:{value:new xt(0)},envMapIntensity:{value:1}}]),vertexShader:vt.meshlambert_vert,fragmentShader:vt.meshlambert_frag},phong:{uniforms:Dn([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,Oe.lights,{emissive:{value:new xt(0)},specular:{value:new xt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:vt.meshphong_vert,fragmentShader:vt.meshphong_frag},standard:{uniforms:Dn([Oe.common,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.roughnessmap,Oe.metalnessmap,Oe.fog,Oe.lights,{emissive:{value:new xt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:vt.meshphysical_vert,fragmentShader:vt.meshphysical_frag},toon:{uniforms:Dn([Oe.common,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.gradientmap,Oe.fog,Oe.lights,{emissive:{value:new xt(0)}}]),vertexShader:vt.meshtoon_vert,fragmentShader:vt.meshtoon_frag},matcap:{uniforms:Dn([Oe.common,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,{matcap:{value:null}}]),vertexShader:vt.meshmatcap_vert,fragmentShader:vt.meshmatcap_frag},points:{uniforms:Dn([Oe.points,Oe.fog]),vertexShader:vt.points_vert,fragmentShader:vt.points_frag},dashed:{uniforms:Dn([Oe.common,Oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:vt.linedashed_vert,fragmentShader:vt.linedashed_frag},depth:{uniforms:Dn([Oe.common,Oe.displacementmap]),vertexShader:vt.depth_vert,fragmentShader:vt.depth_frag},normal:{uniforms:Dn([Oe.common,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,{opacity:{value:1}}]),vertexShader:vt.meshnormal_vert,fragmentShader:vt.meshnormal_frag},sprite:{uniforms:Dn([Oe.sprite,Oe.fog]),vertexShader:vt.sprite_vert,fragmentShader:vt.sprite_frag},background:{uniforms:{uvTransform:{value:new ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:vt.background_vert,fragmentShader:vt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ht}},vertexShader:vt.backgroundCube_vert,fragmentShader:vt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:vt.cube_vert,fragmentShader:vt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:vt.equirect_vert,fragmentShader:vt.equirect_frag},distance:{uniforms:Dn([Oe.common,Oe.displacementmap,{referencePosition:{value:new ie},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:vt.distance_vert,fragmentShader:vt.distance_frag},shadow:{uniforms:Dn([Oe.lights,Oe.fog,{color:{value:new xt(0)},opacity:{value:1}}]),vertexShader:vt.shadow_vert,fragmentShader:vt.shadow_frag}};Ni.physical={uniforms:Dn([Ni.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ht},clearcoatNormalScale:{value:new yt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ht},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ht},sheen:{value:0},sheenColor:{value:new xt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ht},transmissionSamplerSize:{value:new yt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ht},attenuationDistance:{value:0},attenuationColor:{value:new xt(0)},specularColor:{value:new xt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ht},anisotropyVector:{value:new yt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ht}}]),vertexShader:vt.meshphysical_vert,fragmentShader:vt.meshphysical_frag};const Pl={r:0,b:0,g:0},VS=new Qt,Ug=new ht;Ug.set(-1,0,0,0,1,0,0,0,1);function GS(a,e,n,r,o,l){const u=new xt(0);let f=o===!0?0:1,h,m,_=null,y=0,g=null;function M(C){let F=C.isScene===!0?C.background:null;if(F&&F.isTexture){const b=C.backgroundBlurriness>0;F=e.get(F,b)}return F}function w(C){let F=!1;const b=M(C);b===null?x(u,f):b&&b.isColor&&(x(b,1),F=!0);const L=a.xr.getEnvironmentBlendMode();L==="additive"?n.buffers.color.setClear(0,0,0,1,l):L==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,l),(a.autoClear||F)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil))}function P(C,F){const b=M(F);b&&(b.isCubeTexture||b.mapping===ql)?(m===void 0&&(m=new Ft(new Lr(1,1,1),new zi({name:"BackgroundCubeMaterial",uniforms:Za(Ni.backgroundCube.uniforms),vertexShader:Ni.backgroundCube.vertexShader,fragmentShader:Ni.backgroundCube.fragmentShader,side:Gn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(L,R,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(m)),m.material.uniforms.envMap.value=b,m.material.uniforms.backgroundBlurriness.value=F.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=F.backgroundIntensity,m.material.uniforms.backgroundRotation.value.setFromMatrix4(VS.makeRotationFromEuler(F.backgroundRotation)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&m.material.uniforms.backgroundRotation.value.premultiply(Ug),m.material.toneMapped=wt.getTransfer(b.colorSpace)!==Bt,(_!==b||y!==b.version||g!==a.toneMapping)&&(m.material.needsUpdate=!0,_=b,y=b.version,g=a.toneMapping),m.layers.enableAll(),C.unshift(m,m.geometry,m.material,0,0,null)):b&&b.isTexture&&(h===void 0&&(h=new Ft(new to(2,2),new zi({name:"BackgroundMaterial",uniforms:Za(Ni.background.uniforms),vertexShader:Ni.background.vertexShader,fragmentShader:Ni.background.fragmentShader,side:ia,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(h)),h.material.uniforms.t2D.value=b,h.material.uniforms.backgroundIntensity.value=F.backgroundIntensity,h.material.toneMapped=wt.getTransfer(b.colorSpace)!==Bt,b.matrixAutoUpdate===!0&&b.updateMatrix(),h.material.uniforms.uvTransform.value.copy(b.matrix),(_!==b||y!==b.version||g!==a.toneMapping)&&(h.material.needsUpdate=!0,_=b,y=b.version,g=a.toneMapping),h.layers.enableAll(),C.unshift(h,h.geometry,h.material,0,0,null))}function x(C,F){C.getRGB(Pl,Lg(a)),n.buffers.color.setClear(Pl.r,Pl.g,Pl.b,F,l)}function v(){m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0),h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0)}return{getClearColor:function(){return u},setClearColor:function(C,F=1){u.set(C),f=F,x(u,f)},getClearAlpha:function(){return f},setClearAlpha:function(C){f=C,x(u,f)},render:w,addToRenderList:P,dispose:v}}function WS(a,e){const n=a.getParameter(a.MAX_VERTEX_ATTRIBS),r={},o=g(null);let l=o,u=!1;function f(X,J,ne,j,H){let ae=!1;const W=y(X,j,ne,J);l!==W&&(l=W,m(l.object)),ae=M(X,j,ne,H),ae&&w(X,j,ne,H),H!==null&&e.update(H,a.ELEMENT_ARRAY_BUFFER),(ae||u)&&(u=!1,b(X,J,ne,j),H!==null&&a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,e.get(H).buffer))}function h(){return a.createVertexArray()}function m(X){return a.bindVertexArray(X)}function _(X){return a.deleteVertexArray(X)}function y(X,J,ne,j){const H=j.wireframe===!0;let ae=r[J.id];ae===void 0&&(ae={},r[J.id]=ae);const W=X.isInstancedMesh===!0?X.id:0;let B=ae[W];B===void 0&&(B={},ae[W]=B);let z=B[ne.id];z===void 0&&(z={},B[ne.id]=z);let K=z[H];return K===void 0&&(K=g(h()),z[H]=K),K}function g(X){const J=[],ne=[],j=[];for(let H=0;H<n;H++)J[H]=0,ne[H]=0,j[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:J,enabledAttributes:ne,attributeDivisors:j,object:X,attributes:{},index:null}}function M(X,J,ne,j){const H=l.attributes,ae=J.attributes;let W=0;const B=ne.getAttributes();for(const z in B)if(B[z].location>=0){const N=H[z];let ee=ae[z];if(ee===void 0&&(z==="instanceMatrix"&&X.instanceMatrix&&(ee=X.instanceMatrix),z==="instanceColor"&&X.instanceColor&&(ee=X.instanceColor)),N===void 0||N.attribute!==ee||ee&&N.data!==ee.data)return!0;W++}return l.attributesNum!==W||l.index!==j}function w(X,J,ne,j){const H={},ae=J.attributes;let W=0;const B=ne.getAttributes();for(const z in B)if(B[z].location>=0){let N=ae[z];N===void 0&&(z==="instanceMatrix"&&X.instanceMatrix&&(N=X.instanceMatrix),z==="instanceColor"&&X.instanceColor&&(N=X.instanceColor));const ee={};ee.attribute=N,N&&N.data&&(ee.data=N.data),H[z]=ee,W++}l.attributes=H,l.attributesNum=W,l.index=j}function P(){const X=l.newAttributes;for(let J=0,ne=X.length;J<ne;J++)X[J]=0}function x(X){v(X,0)}function v(X,J){const ne=l.newAttributes,j=l.enabledAttributes,H=l.attributeDivisors;ne[X]=1,j[X]===0&&(a.enableVertexAttribArray(X),j[X]=1),H[X]!==J&&(a.vertexAttribDivisor(X,J),H[X]=J)}function C(){const X=l.newAttributes,J=l.enabledAttributes;for(let ne=0,j=J.length;ne<j;ne++)J[ne]!==X[ne]&&(a.disableVertexAttribArray(ne),J[ne]=0)}function F(X,J,ne,j,H,ae,W){W===!0?a.vertexAttribIPointer(X,J,ne,H,ae):a.vertexAttribPointer(X,J,ne,j,H,ae)}function b(X,J,ne,j){P();const H=j.attributes,ae=ne.getAttributes(),W=J.defaultAttributeValues;for(const B in ae){const z=ae[B];if(z.location>=0){let K=H[B];if(K===void 0&&(B==="instanceMatrix"&&X.instanceMatrix&&(K=X.instanceMatrix),B==="instanceColor"&&X.instanceColor&&(K=X.instanceColor)),K!==void 0){const N=K.normalized,ee=K.itemSize,xe=e.get(K);if(xe===void 0)continue;const He=xe.buffer,Ue=xe.type,We=xe.bytesPerElement,le=Ue===a.INT||Ue===a.UNSIGNED_INT||K.gpuType===af;if(K.isInterleavedBufferAttribute){const fe=K.data,Te=fe.stride,Je=K.offset;if(fe.isInstancedInterleavedBuffer){for(let Be=0;Be<z.locationSize;Be++)v(z.location+Be,fe.meshPerAttribute);X.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let Be=0;Be<z.locationSize;Be++)x(z.location+Be);a.bindBuffer(a.ARRAY_BUFFER,He);for(let Be=0;Be<z.locationSize;Be++)F(z.location+Be,ee/z.locationSize,Ue,N,Te*We,(Je+ee/z.locationSize*Be)*We,le)}else{if(K.isInstancedBufferAttribute){for(let fe=0;fe<z.locationSize;fe++)v(z.location+fe,K.meshPerAttribute);X.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let fe=0;fe<z.locationSize;fe++)x(z.location+fe);a.bindBuffer(a.ARRAY_BUFFER,He);for(let fe=0;fe<z.locationSize;fe++)F(z.location+fe,ee/z.locationSize,Ue,N,ee*We,ee/z.locationSize*fe*We,le)}}else if(W!==void 0){const N=W[B];if(N!==void 0)switch(N.length){case 2:a.vertexAttrib2fv(z.location,N);break;case 3:a.vertexAttrib3fv(z.location,N);break;case 4:a.vertexAttrib4fv(z.location,N);break;default:a.vertexAttrib1fv(z.location,N)}}}}C()}function L(){I();for(const X in r){const J=r[X];for(const ne in J){const j=J[ne];for(const H in j){const ae=j[H];for(const W in ae)_(ae[W].object),delete ae[W];delete j[H]}}delete r[X]}}function R(X){if(r[X.id]===void 0)return;const J=r[X.id];for(const ne in J){const j=J[ne];for(const H in j){const ae=j[H];for(const W in ae)_(ae[W].object),delete ae[W];delete j[H]}}delete r[X.id]}function U(X){for(const J in r){const ne=r[J];for(const j in ne){const H=ne[j];if(H[X.id]===void 0)continue;const ae=H[X.id];for(const W in ae)_(ae[W].object),delete ae[W];delete H[X.id]}}}function E(X){for(const J in r){const ne=r[J],j=X.isInstancedMesh===!0?X.id:0,H=ne[j];if(H!==void 0){for(const ae in H){const W=H[ae];for(const B in W)_(W[B].object),delete W[B];delete H[ae]}delete ne[j],Object.keys(ne).length===0&&delete r[J]}}}function I(){O(),u=!0,l!==o&&(l=o,m(l.object))}function O(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:f,reset:I,resetDefaultState:O,dispose:L,releaseStatesOfGeometry:R,releaseStatesOfObject:E,releaseStatesOfProgram:U,initAttributes:P,enableAttribute:x,disableUnusedAttributes:C}}function XS(a,e,n){let r;function o(h){r=h}function l(h,m){a.drawArrays(r,h,m),n.update(m,r,1)}function u(h,m,_){_!==0&&(a.drawArraysInstanced(r,h,m,_),n.update(m,r,_))}function f(h,m,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,h,0,m,0,_);let g=0;for(let M=0;M<_;M++)g+=m[M];n.update(g,r,1)}this.setMode=o,this.render=l,this.renderInstances=u,this.renderMultiDraw=f}function qS(a,e,n,r){let o;function l(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const U=e.get("EXT_texture_filter_anisotropic");o=a.getParameter(U.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(U){return!(U!==Ei&&r.convert(U)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(U){const E=U===Oi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(U!==Jn&&U!==Ii&&!E&&r.convert(U)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_TYPE))}function h(U){if(U==="highp"){if(a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.HIGH_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.HIGH_FLOAT).precision>0)return"highp";U="mediump"}return U==="mediump"&&a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.MEDIUM_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=n.precision!==void 0?n.precision:"highp";const _=h(m);_!==m&&(ct("WebGLRenderer:",m,"not supported, using",_,"instead."),m=_);const y=n.logarithmicDepthBuffer===!0,g=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control");n.reversedDepthBuffer===!0&&g===!1&&ct("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const M=a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS),w=a.getParameter(a.MAX_VERTEX_TEXTURE_IMAGE_UNITS),P=a.getParameter(a.MAX_TEXTURE_SIZE),x=a.getParameter(a.MAX_CUBE_MAP_TEXTURE_SIZE),v=a.getParameter(a.MAX_VERTEX_ATTRIBS),C=a.getParameter(a.MAX_VERTEX_UNIFORM_VECTORS),F=a.getParameter(a.MAX_VARYING_VECTORS),b=a.getParameter(a.MAX_FRAGMENT_UNIFORM_VECTORS),L=a.getParameter(a.MAX_SAMPLES),R=a.getParameter(a.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:h,textureFormatReadable:u,textureTypeReadable:f,precision:m,logarithmicDepthBuffer:y,reversedDepthBuffer:g,maxTextures:M,maxVertexTextures:w,maxTextureSize:P,maxCubemapSize:x,maxAttributes:v,maxVertexUniforms:C,maxVaryings:F,maxFragmentUniforms:b,maxSamples:L,samples:R}}function jS(a){const e=this;let n=null,r=0,o=!1,l=!1;const u=new Rr,f=new ht,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(y,g){const M=y.length!==0||g||r!==0||o;return o=g,r=y.length,M},this.beginShadows=function(){l=!0,_(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(y,g){n=_(y,g,0)},this.setState=function(y,g,M){const w=y.clippingPlanes,P=y.clipIntersection,x=y.clipShadows,v=a.get(y);if(!o||w===null||w.length===0||l&&!x)l?_(null):m();else{const C=l?0:r,F=C*4;let b=v.clippingState||null;h.value=b,b=_(w,g,F,M);for(let L=0;L!==F;++L)b[L]=n[L];v.clippingState=b,this.numIntersection=P?this.numPlanes:0,this.numPlanes+=C}};function m(){h.value!==n&&(h.value=n,h.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function _(y,g,M,w){const P=y!==null?y.length:0;let x=null;if(P!==0){if(x=h.value,w!==!0||x===null){const v=M+P*4,C=g.matrixWorldInverse;f.getNormalMatrix(C),(x===null||x.length<v)&&(x=new Float32Array(v));for(let F=0,b=M;F!==P;++F,b+=4)u.copy(y[F]).applyMatrix4(C,f),u.normal.toArray(x,b),x[b+3]=u.constant}h.value=x,h.needsUpdate=!0}return e.numPlanes=P,e.numIntersection=0,x}}const ja=4,KS=6,YS=20,$S=256,Gs=new yf,Lm=new xt;let sd=null,od=0,ld=0,cd=!1;const ZS=new ie,ea=new ie;class Nm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,r=.1,o=100,l={}){const{size:u=256,position:f=ZS}=l;sd=this._renderer.getRenderTarget(),od=this._renderer.getActiveCubeFace(),ld=this._renderer.getActiveMipmapLevel(),cd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const h=this._allocateTargets();return h.depthBuffer=!0,this._sceneToCubeUV(e,r,o,h,f),n>0&&this._blur(h,0,0,n),this._applyPMREM(h),this._cleanup(h),h}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Um(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Dm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(sd,od,ld),this._renderer.xr.enabled=cd,e.scissorTest=!1,Wa(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===ra||e.mapping===$a?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),sd=this._renderer.getRenderTarget(),od=this._renderer.getActiveCubeFace(),ld=this._renderer.getActiveMipmapLevel(),cd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=n||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,r={magFilter:Rn,minFilter:Rn,generateMipmaps:!1,type:Oi,format:Ei,colorSpace:Bl,depthBuffer:!1},o=Im(e,n,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Im(e,n,r);const{_lodMax:l}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=JS(l)),this._blurMaterial=eM(l,e,n),this._ggxMaterial=QS(l,e,n)}return o}_compileMaterial(e){const n=new Ft(new Pn,e);this._renderer.compile(n,Gs)}_sceneToCubeUV(e,n,r,o,l){const h=new Zn(90,1,n,r),m=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],y=this._renderer,g=y.autoClear,M=y.toneMapping;y.getClearColor(Lm),y.toneMapping=Ui,y.autoClear=!1,y.state.buffers.depth.getReversed()&&(y.setRenderTarget(o),y.clearDepth(),y.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ft(new Lr,new bg({name:"PMREM.Background",side:Gn,depthWrite:!1,depthTest:!1})));const P=this._backgroundBox,x=P.material;let v=!1;const C=e.background;C?C.isColor&&(x.color.copy(C),e.background=null,v=!0):(x.color.copy(Lm),v=!0);for(let F=0;F<6;F++){const b=F%3;b===0?(h.up.set(0,m[F],0),h.position.set(l.x,l.y,l.z),h.lookAt(l.x+_[F],l.y,l.z)):b===1?(h.up.set(0,0,m[F]),h.position.set(l.x,l.y,l.z),h.lookAt(l.x,l.y+_[F],l.z)):(h.up.set(0,m[F],0),h.position.set(l.x,l.y,l.z),h.lookAt(l.x,l.y,l.z+_[F]));const L=this._cubeSize;Wa(o,b*L,F>2?L:0,L,L),y.setRenderTarget(o),v&&y.render(P,h),y.render(e,h)}y.toneMapping=M,y.autoClear=g,e.background=C}_textureToCubeUV(e,n){const r=this._renderer,o=e.mapping===ra||e.mapping===$a;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=Um()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Dm());const l=o?this._cubemapMaterial:this._equirectMaterial,u=this._lodMeshes[0];u.material=l;const f=l.uniforms;f.envMap.value=e;const h=this._cubeSize;Wa(n,0,0,3*h,2*h),r.setRenderTarget(n),r.render(u,Gs)}_applyPMREM(e){const n=this._renderer,r=n.autoClear;n.autoClear=!1;const o=this._lodMeshes.length;for(let l=1;l<o;l++)this._applyGGXFilter(e,l-1,l);n.autoClear=r}_applyGGXFilter(e,n,r){const o=this._renderer,l=this._pingPongRenderTarget,u=this._ggxMaterial,f=this._lodMeshes[r];f.material=u;const h=u.uniforms,m=r/(this._lodMeshes.length-1),_=n/(this._lodMeshes.length-1),y=Math.sqrt(m*m-_*_),g=m*1.25,M=y*g,{_lodMax:w}=this,P=this._sizeLods[r],x=3*P*(r>w-ja?r-w+ja:0),v=4*(this._cubeSize-P);h.envMap.value=e.texture,h.roughness.value=M,h.mipInt.value=w-n,Wa(l,x,v,3*P,2*P),o.setRenderTarget(l),o.render(f,Gs),h.envMap.value=l.texture,h.roughness.value=0,h.mipInt.value=w-r,Wa(e,x,v,3*P,2*P),o.setRenderTarget(e),o.render(f,Gs)}_blur(e,n,r,o){const l=this._pingPongRenderTarget,u=Math.min(o,Math.PI)/Math.SQRT2;this._blurPass(e,l,n,r,u),this._blurPass(l,e,r,r,u)}_blurPass(e,n,r,o,l){const u=this._renderer,f=this._blurMaterial,h=this._lodMeshes[o];h.material=f;const m=f.uniforms;m.envMap.value=e.texture,m.sigma.value=l,m.mipInt.value=this._lodMax-r;const _=this._sizeLods[o],y=3*_*(o>this._lodMax-ja?o-this._lodMax+ja:0),g=4*(this._cubeSize-_);Wa(n,y,g,3*_,2*_),u.setRenderTarget(n),u.render(h,Gs)}}function JS(a){const e=[],n=[];let r=a;const o=a-ja+1+KS;for(let l=0;l<o;l++){const u=Math.pow(2,r);e.push(u);const f=1/(u-2),h=-f,m=1+f,_=[h,h,m,h,m,m,h,h,m,m,h,m],y=6,g=6,M=3,w=new Float32Array(M*g*y),P=new Float32Array(M*g*y);for(let v=0;v<y;v++){const C=v%3*2/3-1,F=v>2?0:-1,b=[C,F,0,C+2/3,F,0,C+2/3,F+1,0,C,F,0,C+2/3,F+1,0,C,F+1,0];w.set(b,M*g*v);for(let L=0;L<g;L++){const R=_[L*2]*2-1,U=_[L*2+1]*2-1;v===0?ea.set(1,U,R):v===1?ea.set(-R,1,-U):v===2?ea.set(-R,U,1):v===3?ea.set(-1,U,-R):v===4?ea.set(-R,-1,U):ea.set(R,U,-1),ea.toArray(P,(v*g+L)*M)}}const x=new Pn;x.setAttribute("position",new ki(w,M)),x.setAttribute("outputDirection",new ki(P,M)),n.push(new Ft(x,null)),r>ja&&r--}return{lodMeshes:n,sizeLods:e}}function Im(a,e,n){const r=new Ti(a,e,n);return r.texture.mapping=ql,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Wa(a,e,n,r,o){a.viewport.set(e,n,r,o),a.scissor.set(e,n,r,o)}function QS(a,e,n){return new zi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:$S,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Yl(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:nr,depthTest:!1,depthWrite:!1})}function eM(a,e,n){return new zi({name:"SphericalGaussianBlur",defines:{SAMPLES:YS,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Yl(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:nr,depthTest:!1,depthWrite:!1})}function Dm(){return new zi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Yl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:nr,depthTest:!1,depthWrite:!1})}function Um(){return new zi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Yl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:nr,depthTest:!1,depthWrite:!1})}function Yl(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class kg extends Ti{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new Rg(o),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},o=new Lr(5,5,5),l=new zi({name:"CubemapFromEquirect",uniforms:Za(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Gn,blending:nr});l.uniforms.tEquirect.value=n;const u=new Ft(o,l),f=n.minFilter;return n.minFilter===ta&&(n.minFilter=Rn),new rx(1,10,this).update(e,u),n.minFilter=f,u.geometry.dispose(),u.material.dispose(),this}clear(e,n=!0,r=!0,o=!0){const l=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(n,r,o);e.setRenderTarget(l)}}function tM(a){let e=new WeakMap,n=new WeakMap,r=null;function o(g,M=!1){return g==null?null:M?u(g):l(g)}function l(g){if(g&&g.isTexture){const M=g.mapping;if(M===Iu||M===Du)if(e.has(g)){const w=e.get(g).texture;return f(w,g.mapping)}else{const w=g.image;if(w&&w.height>0){const P=new kg(w.height);return P.fromEquirectangularTexture(a,g),e.set(g,P),g.addEventListener("dispose",m),f(P.texture,g.mapping)}else return null}}return g}function u(g){if(g&&g.isTexture){const M=g.mapping,w=M===Iu||M===Du,P=M===ra||M===$a;if(w||P){let x=n.get(g);const v=x!==void 0?x.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==v)return r===null&&(r=new Nm(a)),x=w?r.fromEquirectangular(g,x):r.fromCubemap(g,x),x.texture.pmremVersion=g.pmremVersion,n.set(g,x),x.texture;if(x!==void 0)return x.texture;{const C=g.image;return w&&C&&C.height>0||P&&C&&h(C)?(r===null&&(r=new Nm(a)),x=w?r.fromEquirectangular(g):r.fromCubemap(g),x.texture.pmremVersion=g.pmremVersion,n.set(g,x),g.addEventListener("dispose",_),x.texture):null}}}return g}function f(g,M){return M===Iu?g.mapping=ra:M===Du&&(g.mapping=$a),g}function h(g){let M=0;const w=6;for(let P=0;P<w;P++)g[P]!==void 0&&M++;return M===w}function m(g){const M=g.target;M.removeEventListener("dispose",m);const w=e.get(M);w!==void 0&&(e.delete(M),w.dispose())}function _(g){const M=g.target;M.removeEventListener("dispose",_);const w=n.get(M);w!==void 0&&(n.delete(M),w.dispose())}function y(){e=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:o,dispose:y}}function nM(a){const e={};function n(r){if(e[r]!==void 0)return e[r];const o=a.getExtension(r);return e[r]=o,o}return{has:function(r){return n(r)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(r){const o=n(r);return o===null&&Ka("WebGLRenderer: "+r+" extension not supported."),o}}}function iM(a,e,n,r){const o={},l=new WeakMap;function u(y){const g=y.target;g.index!==null&&e.remove(g.index);for(const w in g.attributes)e.remove(g.attributes[w]);g.removeEventListener("dispose",u),delete o[g.id];const M=l.get(g);M&&(e.remove(M),l.delete(g)),r.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,n.memory.geometries--}function f(y,g){return o[g.id]===!0||(g.addEventListener("dispose",u),o[g.id]=!0,n.memory.geometries++),g}function h(y){const g=y.attributes;for(const M in g)e.update(g[M],a.ARRAY_BUFFER)}function m(y){const g=[],M=y.index,w=y.attributes.position;let P=0;if(w===void 0)return;if(M!==null){const C=M.array;P=M.version;for(let F=0,b=C.length;F<b;F+=3){const L=C[F+0],R=C[F+1],U=C[F+2];g.push(L,R,R,U,U,L)}}else{const C=w.array;P=w.version;for(let F=0,b=C.length/3-1;F<b;F+=3){const L=F+0,R=F+1,U=F+2;g.push(L,R,R,U,U,L)}}const x=new(w.count>=65535?wg:Tg)(g,1);x.version=P;const v=l.get(y);v&&e.remove(v),l.set(y,x)}function _(y){const g=l.get(y);if(g){const M=y.index;M!==null&&g.version<M.version&&m(y)}else m(y);return l.get(y)}return{get:f,update:h,getWireframeAttribute:_}}function rM(a,e,n){let r;function o(y){r=y}let l,u;function f(y){l=y.type,u=y.bytesPerElement}function h(y,g){a.drawElements(r,g,l,y*u),n.update(g,r,1)}function m(y,g,M){M!==0&&(a.drawElementsInstanced(r,g,l,y*u,M),n.update(g,r,M))}function _(y,g,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,g,0,l,y,0,M);let P=0;for(let x=0;x<M;x++)P+=g[x];n.update(P,r,1)}this.setMode=o,this.setIndex=f,this.render=h,this.renderInstances=m,this.renderMultiDraw=_}function aM(a){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,u,f){switch(n.calls++,u){case a.TRIANGLES:n.triangles+=f*(l/3);break;case a.LINES:n.lines+=f*(l/2);break;case a.LINE_STRIP:n.lines+=f*(l-1);break;case a.LINE_LOOP:n.lines+=f*l;break;case a.POINTS:n.points+=f*l;break;default:Dt("WebGLInfo: Unknown draw mode:",u);break}}function o(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:o,update:r}}function sM(a,e,n){const r=new WeakMap,o=new Jt;function l(u,f,h){const m=u.morphTargetInfluences,_=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,y=_!==void 0?_.length:0;let g=r.get(f);if(g===void 0||g.count!==y){let O=function(){E.dispose(),r.delete(f),f.removeEventListener("dispose",O)};var M=O;g!==void 0&&g.texture.dispose();const w=f.morphAttributes.position!==void 0,P=f.morphAttributes.normal!==void 0,x=f.morphAttributes.color!==void 0,v=f.morphAttributes.position||[],C=f.morphAttributes.normal||[],F=f.morphAttributes.color||[];let b=0;w===!0&&(b=1),P===!0&&(b=2),x===!0&&(b=3);let L=f.attributes.position.count*b,R=1;L>e.maxTextureSize&&(R=Math.ceil(L/e.maxTextureSize),L=e.maxTextureSize);const U=new Float32Array(L*R*4*y),E=new Sg(U,L,R,y);E.type=Ii,E.needsUpdate=!0;const I=b*4;for(let X=0;X<y;X++){const J=v[X],ne=C[X],j=F[X],H=L*R*4*X;for(let ae=0;ae<J.count;ae++){const W=ae*I;w===!0&&(o.fromBufferAttribute(J,ae),U[H+W+0]=o.x,U[H+W+1]=o.y,U[H+W+2]=o.z,U[H+W+3]=0),P===!0&&(o.fromBufferAttribute(ne,ae),U[H+W+4]=o.x,U[H+W+5]=o.y,U[H+W+6]=o.z,U[H+W+7]=0),x===!0&&(o.fromBufferAttribute(j,ae),U[H+W+8]=o.x,U[H+W+9]=o.y,U[H+W+10]=o.z,U[H+W+11]=j.itemSize===4?o.w:1)}}g={count:y,texture:E,size:new yt(L,R)},r.set(f,g),f.addEventListener("dispose",O)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)h.getUniforms().setValue(a,"morphTexture",u.morphTexture,n);else{let w=0;for(let x=0;x<m.length;x++)w+=m[x];const P=f.morphTargetsRelative?1:1-w;h.getUniforms().setValue(a,"morphTargetBaseInfluence",P),h.getUniforms().setValue(a,"morphTargetInfluences",m)}h.getUniforms().setValue(a,"morphTargetsTexture",g.texture,n),h.getUniforms().setValue(a,"morphTargetsTextureSize",g.size)}return{update:l}}function oM(a,e,n,r,o){let l=new WeakMap;function u(m){const _=o.render.frame,y=m.geometry,g=e.get(m,y);if(l.get(g)!==_&&(e.update(g),l.set(g,_)),m.isInstancedMesh&&(m.hasEventListener("dispose",h)===!1&&m.addEventListener("dispose",h),l.get(m)!==_&&(n.update(m.instanceMatrix,a.ARRAY_BUFFER),m.instanceColor!==null&&n.update(m.instanceColor,a.ARRAY_BUFFER),l.set(m,_))),m.isSkinnedMesh){const M=m.skeleton;l.get(M)!==_&&(M.update(),l.set(M,_))}return g}function f(){l=new WeakMap}function h(m){const _=m.target;_.removeEventListener("dispose",h),r.releaseStatesOfObject(_),n.remove(_.instanceMatrix),_.instanceColor!==null&&n.remove(_.instanceColor)}return{update:u,dispose:f}}const lM={[ag]:"LINEAR_TONE_MAPPING",[sg]:"REINHARD_TONE_MAPPING",[og]:"CINEON_TONE_MAPPING",[lg]:"ACES_FILMIC_TONE_MAPPING",[ug]:"AGX_TONE_MAPPING",[dg]:"NEUTRAL_TONE_MAPPING",[cg]:"CUSTOM_TONE_MAPPING"};function cM(a,e,n,r,o,l){const u=new Ti(e,n,{type:a,depthBuffer:o,stencilBuffer:l,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let f=null,h=null;const m=new Pn;m.setAttribute("position",new Kt([-1,3,0,-1,-1,0,3,-1,0],3)),m.setAttribute("uv",new Kt([0,2,0,0,2,0],2));const _=new $_({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),y=new Ft(m,_),g=new yf(-1,1,1,-1,0,1);let M=null,w=null,P=!1,x,v=null,C=[],F=!1;this.setSize=function(b,L){u.setSize(b,L),f!==null&&f.setSize(b,L),h!==null&&h.setSize(b,L);for(let R=0;R<C.length;R++){const U=C[R];U.setSize&&U.setSize(b,L)}},this.setEffects=function(b){C=b,F=C.length>0&&C[0].isRenderPass===!0;const L=u.width,R=u.height;C.length>0&&f===null&&(f=new Ti(L,R,{type:Oi,depthBuffer:!1,stencilBuffer:!1}),h=new Ti(L,R,{type:Oi,depthBuffer:!1,stencilBuffer:!1}));for(let U=0;U<C.length;U++){const E=C[U];E.setSize&&E.setSize(L,R)}},this.begin=function(b,L){if(P||b.toneMapping===Ui&&C.length===0)return!1;if(v=L,L!==null){const R=L.width,U=L.height;(u.width!==R||u.height!==U)&&this.setSize(R,U)}return F===!1&&b.setRenderTarget(u),x=b.toneMapping,b.toneMapping=Ui,!0},this.hasRenderPass=function(){return F},this.end=function(b,L){b.toneMapping=x,P=!0;let R=u,U=f;for(let E=0;E<C.length;E++){const I=C[E];I.enabled!==!1&&(I.render(b,U,R,L),I.needsSwap!==!1&&(R=U,U=U===f?h:f))}if(M!==b.outputColorSpace||w!==b.toneMapping){M=b.outputColorSpace,w=b.toneMapping,_.defines={},wt.getTransfer(M)===Bt&&(_.defines.SRGB_TRANSFER="");const E=lM[w];E&&(_.defines[E]=""),_.needsUpdate=!0}_.uniforms.tDiffuse.value=R.texture,b.setRenderTarget(v),b.render(y,g),v=null,P=!1},this.isCompositing=function(){return P},this.dispose=function(){u.dispose(),f!==null&&f.dispose(),h!==null&&h.dispose(),m.dispose(),_.dispose()}}const Fg=new Un,ef=new Js(1,1),Og=new Sg,zg=new A_,Bg=new Rg,km=[],Fm=[],Om=new Float32Array(16),zm=new Float32Array(9),Bm=new Float32Array(4);function es(a,e,n){const r=a[0];if(r<=0||r>0)return a;const o=e*n;let l=km[o];if(l===void 0&&(l=new Float32Array(o),km[o]=l),e!==0){r.toArray(l,0);for(let u=1,f=0;u!==e;++u)f+=n,a[u].toArray(l,f)}return l}function dn(a,e){if(a.length!==e.length)return!1;for(let n=0,r=a.length;n<r;n++)if(a[n]!==e[n])return!1;return!0}function fn(a,e){for(let n=0,r=e.length;n<r;n++)a[n]=e[n]}function $l(a,e){let n=Fm[e];n===void 0&&(n=new Int32Array(e),Fm[e]=n);for(let r=0;r!==e;++r)n[r]=a.allocateTextureUnit();return n}function uM(a,e){const n=this.cache;n[0]!==e&&(a.uniform1f(this.addr,e),n[0]=e)}function dM(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(a.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(dn(n,e))return;a.uniform2fv(this.addr,e),fn(n,e)}}function fM(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(a.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(a.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(dn(n,e))return;a.uniform3fv(this.addr,e),fn(n,e)}}function hM(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(a.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(dn(n,e))return;a.uniform4fv(this.addr,e),fn(n,e)}}function pM(a,e){const n=this.cache,r=e.elements;if(r===void 0){if(dn(n,e))return;a.uniformMatrix2fv(this.addr,!1,e),fn(n,e)}else{if(dn(n,r))return;Bm.set(r),a.uniformMatrix2fv(this.addr,!1,Bm),fn(n,r)}}function mM(a,e){const n=this.cache,r=e.elements;if(r===void 0){if(dn(n,e))return;a.uniformMatrix3fv(this.addr,!1,e),fn(n,e)}else{if(dn(n,r))return;zm.set(r),a.uniformMatrix3fv(this.addr,!1,zm),fn(n,r)}}function gM(a,e){const n=this.cache,r=e.elements;if(r===void 0){if(dn(n,e))return;a.uniformMatrix4fv(this.addr,!1,e),fn(n,e)}else{if(dn(n,r))return;Om.set(r),a.uniformMatrix4fv(this.addr,!1,Om),fn(n,r)}}function vM(a,e){const n=this.cache;n[0]!==e&&(a.uniform1i(this.addr,e),n[0]=e)}function _M(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(a.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(dn(n,e))return;a.uniform2iv(this.addr,e),fn(n,e)}}function xM(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(a.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(dn(n,e))return;a.uniform3iv(this.addr,e),fn(n,e)}}function yM(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(a.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(dn(n,e))return;a.uniform4iv(this.addr,e),fn(n,e)}}function SM(a,e){const n=this.cache;n[0]!==e&&(a.uniform1ui(this.addr,e),n[0]=e)}function MM(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(a.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(dn(n,e))return;a.uniform2uiv(this.addr,e),fn(n,e)}}function EM(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(a.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(dn(n,e))return;a.uniform3uiv(this.addr,e),fn(n,e)}}function TM(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(a.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(dn(n,e))return;a.uniform4uiv(this.addr,e),fn(n,e)}}function wM(a,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(a.uniform1i(this.addr,o),r[0]=o);let l;this.type===a.SAMPLER_2D_SHADOW?(ef.compareFunction=n.isReversedDepthBuffer()?ff:df,l=ef):l=Fg,n.setTexture2D(e||l,o)}function AM(a,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(a.uniform1i(this.addr,o),r[0]=o),n.setTexture3D(e||zg,o)}function bM(a,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(a.uniform1i(this.addr,o),r[0]=o),n.setTextureCube(e||Bg,o)}function CM(a,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(a.uniform1i(this.addr,o),r[0]=o),n.setTexture2DArray(e||Og,o)}function RM(a){switch(a){case 5126:return uM;case 35664:return dM;case 35665:return fM;case 35666:return hM;case 35674:return pM;case 35675:return mM;case 35676:return gM;case 5124:case 35670:return vM;case 35667:case 35671:return _M;case 35668:case 35672:return xM;case 35669:case 35673:return yM;case 5125:return SM;case 36294:return MM;case 36295:return EM;case 36296:return TM;case 35678:case 36198:case 36298:case 36306:case 35682:return wM;case 35679:case 36299:case 36307:return AM;case 35680:case 36300:case 36308:case 36293:return bM;case 36289:case 36303:case 36311:case 36292:return CM}}function PM(a,e){a.uniform1fv(this.addr,e)}function LM(a,e){const n=es(e,this.size,2);a.uniform2fv(this.addr,n)}function NM(a,e){const n=es(e,this.size,3);a.uniform3fv(this.addr,n)}function IM(a,e){const n=es(e,this.size,4);a.uniform4fv(this.addr,n)}function DM(a,e){const n=es(e,this.size,4);a.uniformMatrix2fv(this.addr,!1,n)}function UM(a,e){const n=es(e,this.size,9);a.uniformMatrix3fv(this.addr,!1,n)}function kM(a,e){const n=es(e,this.size,16);a.uniformMatrix4fv(this.addr,!1,n)}function FM(a,e){a.uniform1iv(this.addr,e)}function OM(a,e){a.uniform2iv(this.addr,e)}function zM(a,e){a.uniform3iv(this.addr,e)}function BM(a,e){a.uniform4iv(this.addr,e)}function HM(a,e){a.uniform1uiv(this.addr,e)}function VM(a,e){a.uniform2uiv(this.addr,e)}function GM(a,e){a.uniform3uiv(this.addr,e)}function WM(a,e){a.uniform4uiv(this.addr,e)}function XM(a,e,n){const r=this.cache,o=e.length,l=$l(n,o);dn(r,l)||(a.uniform1iv(this.addr,l),fn(r,l));let u;this.type===a.SAMPLER_2D_SHADOW?u=ef:u=Fg;for(let f=0;f!==o;++f)n.setTexture2D(e[f]||u,l[f])}function qM(a,e,n){const r=this.cache,o=e.length,l=$l(n,o);dn(r,l)||(a.uniform1iv(this.addr,l),fn(r,l));for(let u=0;u!==o;++u)n.setTexture3D(e[u]||zg,l[u])}function jM(a,e,n){const r=this.cache,o=e.length,l=$l(n,o);dn(r,l)||(a.uniform1iv(this.addr,l),fn(r,l));for(let u=0;u!==o;++u)n.setTextureCube(e[u]||Bg,l[u])}function KM(a,e,n){const r=this.cache,o=e.length,l=$l(n,o);dn(r,l)||(a.uniform1iv(this.addr,l),fn(r,l));for(let u=0;u!==o;++u)n.setTexture2DArray(e[u]||Og,l[u])}function YM(a){switch(a){case 5126:return PM;case 35664:return LM;case 35665:return NM;case 35666:return IM;case 35674:return DM;case 35675:return UM;case 35676:return kM;case 5124:case 35670:return FM;case 35667:case 35671:return OM;case 35668:case 35672:return zM;case 35669:case 35673:return BM;case 5125:return HM;case 36294:return VM;case 36295:return GM;case 36296:return WM;case 35678:case 36198:case 36298:case 36306:case 35682:return XM;case 35679:case 36299:case 36307:return qM;case 35680:case 36300:case 36308:case 36293:return jM;case 36289:case 36303:case 36311:case 36292:return KM}}class $M{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.setValue=RM(n.type)}}class ZM{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=YM(n.type)}}class JM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,r){const o=this.seq;for(let l=0,u=o.length;l!==u;++l){const f=o[l];f.setValue(e,n[f.id],r)}}}const ud=/(\w+)(\])?(\[|\.)?/g;function Hm(a,e){a.seq.push(e),a.map[e.id]=e}function QM(a,e,n){const r=a.name,o=r.length;for(ud.lastIndex=0;;){const l=ud.exec(r),u=ud.lastIndex;let f=l[1];const h=l[2]==="]",m=l[3];if(h&&(f=f|0),m===void 0||m==="["&&u+2===o){Hm(n,m===void 0?new $M(f,a,e):new ZM(f,a,e));break}else{let y=n.map[f];y===void 0&&(y=new JM(f),Hm(n,y)),n=y}}}class Fl{constructor(e,n){this.seq=[],this.map={};const r=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let u=0;u<r;++u){const f=e.getActiveUniform(n,u),h=e.getUniformLocation(n,f.name);QM(f,h,this)}const o=[],l=[];for(const u of this.seq)u.type===e.SAMPLER_2D_SHADOW||u.type===e.SAMPLER_CUBE_SHADOW||u.type===e.SAMPLER_2D_ARRAY_SHADOW?o.push(u):l.push(u);o.length>0&&(this.seq=o.concat(l))}setValue(e,n,r,o){const l=this.map[n];l!==void 0&&l.setValue(e,r,o)}setOptional(e,n,r){const o=n[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,n,r,o){for(let l=0,u=n.length;l!==u;++l){const f=n[l],h=r[f.id];h.needsUpdate!==!1&&f.setValue(e,h.value,o)}}static seqWithValue(e,n){const r=[];for(let o=0,l=e.length;o!==l;++o){const u=e[o];u.id in n&&r.push(u)}return r}}function Vm(a,e,n){const r=a.createShader(e);return a.shaderSource(r,n),a.compileShader(r),r}const eE=37297;let tE=0;function nE(a,e){const n=a.split(`
`),r=[],o=Math.max(e-6,0),l=Math.min(e+6,n.length);for(let u=o;u<l;u++){const f=u+1;r.push(`${f===e?">":" "} ${f}: ${n[u]}`)}return r.join(`
`)}const Gm=new ht;function iE(a){wt._getMatrix(Gm,wt.workingColorSpace,a);const e=`mat3( ${Gm.elements.map(n=>n.toFixed(4))} )`;switch(wt.getTransfer(a)){case Hl:return[e,"LinearTransferOETF"];case Bt:return[e,"sRGBTransferOETF"];default:return ct("WebGLProgram: Unsupported color space: ",a),[e,"LinearTransferOETF"]}}function Wm(a,e,n){const r=a.getShaderParameter(e,a.COMPILE_STATUS),l=(a.getShaderInfoLog(e)||"").trim();if(r&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const f=parseInt(u[1]);return n.toUpperCase()+`

`+l+`

`+nE(a.getShaderSource(e),f)}else return l}function rE(a,e){const n=iE(e);return[`vec4 ${a}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const aE={[ag]:"Linear",[sg]:"Reinhard",[og]:"Cineon",[lg]:"ACESFilmic",[ug]:"AgX",[dg]:"Neutral",[cg]:"Custom"};function sE(a,e){const n=aE[e];return n===void 0?(ct("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+a+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+a+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Ll=new ie;function oE(){wt.getLuminanceCoefficients(Ll);const a=Ll.x.toFixed(4),e=Ll.y.toFixed(4),n=Ll.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${a}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function lE(a){return[a.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",a.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(qs).join(`
`)}function cE(a){const e=[];for(const n in a){const r=a[n];r!==!1&&e.push("#define "+n+" "+r)}return e.join(`
`)}function uE(a,e){const n={},r=a.getProgramParameter(e,a.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const l=a.getActiveAttrib(e,o),u=l.name;let f=1;l.type===a.FLOAT_MAT2&&(f=2),l.type===a.FLOAT_MAT3&&(f=3),l.type===a.FLOAT_MAT4&&(f=4),n[u]={type:l.type,location:a.getAttribLocation(e,u),locationSize:f}}return n}function qs(a){return a!==""}function Xm(a,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return a.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function qm(a,e){return a.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const dE=/^[ \t]*#include +<([\w\d./]+)>/gm;function tf(a){return a.replace(dE,hE)}const fE=new Map;function hE(a,e){let n=vt[e];if(n===void 0){const r=fE.get(e);if(r!==void 0)n=vt[r],ct('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return tf(n)}const pE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function jm(a){return a.replace(pE,mE)}function mE(a,e,n,r){let o="";for(let l=parseInt(e);l<parseInt(n);l++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return o}function Km(a){let e=`precision ${a.precision} float;
	precision ${a.precision} int;
	precision ${a.precision} sampler2D;
	precision ${a.precision} samplerCube;
	precision ${a.precision} sampler3D;
	precision ${a.precision} sampler2DArray;
	precision ${a.precision} sampler2DShadow;
	precision ${a.precision} samplerCubeShadow;
	precision ${a.precision} sampler2DArrayShadow;
	precision ${a.precision} isampler2D;
	precision ${a.precision} isampler3D;
	precision ${a.precision} isamplerCube;
	precision ${a.precision} isampler2DArray;
	precision ${a.precision} usampler2D;
	precision ${a.precision} usampler3D;
	precision ${a.precision} usamplerCube;
	precision ${a.precision} usampler2DArray;
	`;return a.precision==="highp"?e+=`
#define HIGH_PRECISION`:a.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:a.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const gE={[Nl]:"SHADOWMAP_TYPE_PCF",[Xs]:"SHADOWMAP_TYPE_VSM"};function vE(a){return gE[a.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const _E={[ra]:"ENVMAP_TYPE_CUBE",[$a]:"ENVMAP_TYPE_CUBE",[ql]:"ENVMAP_TYPE_CUBE_UV"};function xE(a){return a.envMap===!1?"ENVMAP_TYPE_CUBE":_E[a.envMapMode]||"ENVMAP_TYPE_CUBE"}const yE={[$a]:"ENVMAP_MODE_REFRACTION"};function SE(a){return a.envMap===!1?"ENVMAP_MODE_REFLECTION":yE[a.envMapMode]||"ENVMAP_MODE_REFLECTION"}const ME={[rg]:"ENVMAP_BLENDING_MULTIPLY",[i_]:"ENVMAP_BLENDING_MIX",[r_]:"ENVMAP_BLENDING_ADD"};function EE(a){return a.envMap===!1?"ENVMAP_BLENDING_NONE":ME[a.combine]||"ENVMAP_BLENDING_NONE"}function TE(a){const e=a.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:r,maxMip:n}}function wE(a,e,n,r){const o=a.getContext(),l=n.defines;let u=n.vertexShader,f=n.fragmentShader;const h=vE(n),m=xE(n),_=SE(n),y=EE(n),g=TE(n),M=lE(n),w=cE(l),P=o.createProgram();let x,v,C=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(x=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,w].filter(qs).join(`
`),x.length>0&&(x+=`
`),v=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,w].filter(qs).join(`
`),v.length>0&&(v+=`
`)):(x=[Km(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,w,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+_:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+h:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(qs).join(`
`),v=[Km(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,w,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+m:"",n.envMap?"#define "+_:"",n.envMap?"#define "+y:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.retroreflection?"#define USE_RETROREFLECTION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+h:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Ui?"#define TONE_MAPPING":"",n.toneMapping!==Ui?vt.tonemapping_pars_fragment:"",n.toneMapping!==Ui?sE("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",vt.colorspace_pars_fragment,rE("linearToOutputTexel",n.outputColorSpace),oE(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(qs).join(`
`)),u=tf(u),u=Xm(u,n),u=qm(u,n),f=tf(f),f=Xm(f,n),f=qm(f,n),u=jm(u),f=jm(f),n.isRawShaderMaterial!==!0&&(C=`#version 300 es
`,x=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,v=["#define varying in",n.glslVersion===am?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===am?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const F=C+x+u,b=C+v+f,L=Vm(o,o.VERTEX_SHADER,F),R=Vm(o,o.FRAGMENT_SHADER,b);o.attachShader(P,L),o.attachShader(P,R),n.index0AttributeName!==void 0?o.bindAttribLocation(P,0,n.index0AttributeName):n.hasPositionAttribute===!0&&o.bindAttribLocation(P,0,"position"),o.linkProgram(P);function U(X){if(a.debug.checkShaderErrors){const J=o.getProgramInfoLog(P)||"",ne=o.getShaderInfoLog(L)||"",j=o.getShaderInfoLog(R)||"",H=J.trim(),ae=ne.trim(),W=j.trim();let B=!0,z=!0;if(o.getProgramParameter(P,o.LINK_STATUS)===!1)if(B=!1,typeof a.debug.onShaderError=="function")a.debug.onShaderError(o,P,L,R);else{const K=Wm(o,L,"vertex"),N=Wm(o,R,"fragment");Dt("WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(P,o.VALIDATE_STATUS)+`

Material Name: `+X.name+`
Material Type: `+X.type+`

Program Info Log: `+H+`
`+K+`
`+N)}else H!==""?ct("WebGLProgram: Program Info Log:",H):(ae===""||W==="")&&(z=!1);z&&(X.diagnostics={runnable:B,programLog:H,vertexShader:{log:ae,prefix:x},fragmentShader:{log:W,prefix:v}})}o.deleteShader(L),o.deleteShader(R),E=new Fl(o,P),I=uE(o,P)}let E;this.getUniforms=function(){return E===void 0&&U(this),E};let I;this.getAttributes=function(){return I===void 0&&U(this),I};let O=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return O===!1&&(O=o.getProgramParameter(P,eE)),O},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(P),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=tE++,this.cacheKey=e,this.usedTimes=1,this.program=P,this.vertexShader=L,this.fragmentShader=R,this}let AE=0;class bE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,n,r){const o=this._getShaderCacheForMaterial(e);return o.has(n)===!1&&(o.add(n),n.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const r of n)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let r=n.get(e);return r===void 0&&(r=new Set,n.set(e,r)),r}_getShaderStage(e){const n=this.shaderCache;let r=n.get(e);return r===void 0&&(r=new CE(e),n.set(e,r)),r}}class CE{constructor(e){this.id=AE++,this.code=e,this.usedTimes=0}}function RE(a){return a===aa||a===Ol||a===zl}function PE(a,e,n,r,o,l){const u=new Mg,f=new bE,h=new Set,m=[],_=new Map,y=r.logarithmicDepthBuffer;let g=r.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function w(E){return h.add(E),E===0?"uv":`uv${E}`}function P(E,I,O,X,J,ne){const j=X.fog,H=J.geometry,ae=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?X.environment:null,W=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap,B=e.get(E.envMap||ae,W),z=B&&B.mapping===ql?B.image.height:null,K=M[E.type];E.precision!==null&&(g=r.getMaxPrecision(E.precision),g!==E.precision&&ct("WebGLProgram.getParameters:",E.precision,"not supported, using",g,"instead."));const N=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,ee=N!==void 0?N.length:0;let xe=0;H.morphAttributes.position!==void 0&&(xe=1),H.morphAttributes.normal!==void 0&&(xe=2),H.morphAttributes.color!==void 0&&(xe=3);let He,Ue,We,le;if(K){const Lt=Ni[K];He=Lt.vertexShader,Ue=Lt.fragmentShader}else{He=E.vertexShader,Ue=E.fragmentShader;const Lt=f.getVertexShaderStage(E),bt=f.getFragmentShaderStage(E);f.update(E,Lt,bt),We=Lt.id,le=bt.id}const fe=a.getRenderTarget(),Te=a.state.buffers.depth.getReversed(),Je=J.isInstancedMesh===!0,Be=J.isBatchedMesh===!0,dt=!!E.map,Ht=!!E.matcap,ft=!!B,St=!!E.aoMap,Pt=!!E.lightMap,pt=!!E.bumpMap&&E.wireframe===!1,Ot=!!E.normalMap,ve=!!E.displacementMap,Le=!!E.emissiveMap,be=!!E.metalnessMap,it=!!E.roughnessMap,V=E.anisotropy>0,Ut=E.clearcoat>0,_t=E.dispersion>0,D=E.retroreflectivity>0,S=E.iridescence>0,Q=E.sheen>0,oe=E.transmission>0,pe=V&&!!E.anisotropyMap,Me=Ut&&!!E.clearcoatMap,Ce=Ut&&!!E.clearcoatNormalMap,he=Ut&&!!E.clearcoatRoughnessMap,me=S&&!!E.iridescenceMap,we=S&&!!E.iridescenceThicknessMap,qe=Q&&!!E.sheenColorMap,Re=Q&&!!E.sheenRoughnessMap,Pe=!!E.specularMap,Qe=!!E.specularColorMap,rt=!!E.specularIntensityMap,ot=oe&&!!E.transmissionMap,Y=oe&&!!E.thicknessMap,Ne=!!E.gradientMap,ge=!!E.alphaMap,Ie=E.alphaTest>0,ze=!!E.alphaHash,_e=!!E.extensions;let tt=Ui;E.toneMapped&&(fe===null||fe.isXRRenderTarget===!0)&&(tt=a.toneMapping);const $e={shaderID:K,shaderType:E.type,shaderName:E.name,vertexShader:He,fragmentShader:Ue,defines:E.defines,customVertexShaderID:We,customFragmentShaderID:le,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:g,batching:Be,batchingColor:Be&&J._colorsTexture!==null,instancing:Je,instancingColor:Je&&J.instanceColor!==null,instancingMorph:Je&&J.morphTexture!==null,outputColorSpace:fe===null?a.outputColorSpace:fe.isXRRenderTarget===!0?fe.texture.colorSpace:wt.workingColorSpace,alphaToCoverage:!!E.alphaToCoverage,map:dt,matcap:Ht,envMap:ft,envMapMode:ft&&B.mapping,envMapCubeUVHeight:z,aoMap:St,lightMap:Pt,bumpMap:pt,normalMap:Ot,displacementMap:ve,emissiveMap:Le,normalMapObjectSpace:Ot&&E.normalMapType===o_,normalMapTangentSpace:Ot&&E.normalMapType===Zd,packedNormalMap:Ot&&E.normalMapType===Zd&&RE(E.normalMap.format),metalnessMap:be,roughnessMap:it,anisotropy:V,anisotropyMap:pe,clearcoat:Ut,clearcoatMap:Me,clearcoatNormalMap:Ce,clearcoatRoughnessMap:he,dispersion:_t,retroreflection:D,iridescence:S,iridescenceMap:me,iridescenceThicknessMap:we,sheen:Q,sheenColorMap:qe,sheenRoughnessMap:Re,specularMap:Pe,specularColorMap:Qe,specularIntensityMap:rt,transmission:oe,transmissionMap:ot,thicknessMap:Y,gradientMap:Ne,opaque:E.transparent===!1&&E.blending===js&&E.alphaToCoverage===!1,alphaMap:ge,alphaTest:Ie,alphaHash:ze,combine:E.combine,mapUv:dt&&w(E.map.channel),aoMapUv:St&&w(E.aoMap.channel),lightMapUv:Pt&&w(E.lightMap.channel),bumpMapUv:pt&&w(E.bumpMap.channel),normalMapUv:Ot&&w(E.normalMap.channel),displacementMapUv:ve&&w(E.displacementMap.channel),emissiveMapUv:Le&&w(E.emissiveMap.channel),metalnessMapUv:be&&w(E.metalnessMap.channel),roughnessMapUv:it&&w(E.roughnessMap.channel),anisotropyMapUv:pe&&w(E.anisotropyMap.channel),clearcoatMapUv:Me&&w(E.clearcoatMap.channel),clearcoatNormalMapUv:Ce&&w(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:he&&w(E.clearcoatRoughnessMap.channel),iridescenceMapUv:me&&w(E.iridescenceMap.channel),iridescenceThicknessMapUv:we&&w(E.iridescenceThicknessMap.channel),sheenColorMapUv:qe&&w(E.sheenColorMap.channel),sheenRoughnessMapUv:Re&&w(E.sheenRoughnessMap.channel),specularMapUv:Pe&&w(E.specularMap.channel),specularColorMapUv:Qe&&w(E.specularColorMap.channel),specularIntensityMapUv:rt&&w(E.specularIntensityMap.channel),transmissionMapUv:ot&&w(E.transmissionMap.channel),thicknessMapUv:Y&&w(E.thicknessMap.channel),alphaMapUv:ge&&w(E.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(Ot||V),vertexNormals:!!H.attributes.normal,vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:J.isPoints===!0&&!!H.attributes.uv&&(dt||ge),fog:!!j,useFog:E.fog===!0,fogExp2:!!j&&j.isFogExp2,flatShading:E.wireframe===!1&&(E.flatShading===!0||H.attributes.normal===void 0&&Ot===!1&&(E.isMeshLambertMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isMeshPhysicalMaterial)),sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:y,reversedDepthBuffer:Te,skinning:J.isSkinnedMesh===!0,hasPositionAttribute:H.attributes.position!==void 0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:ee,morphTextureStride:xe,numSunLights:I.sun.length,numDirLights:I.directional.length,numPointLights:I.point.length,numSpotLights:I.spot.length,numSpotLightMaps:I.spotLightMap.length,numRectAreaLights:I.rectArea.length,numHemiLights:I.hemi.length,numSunLightShadows:I.sunShadowMap.length,numDirLightShadows:I.directionalShadowMap.length,numPointLightShadows:I.pointShadowMap.length,numSpotLightShadows:I.spotShadowMap.length,numSpotLightShadowsWithMaps:I.numSpotLightShadowsWithMaps,numLightProbes:I.numLightProbes,numLightProbeGrids:ne.length,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:E.dithering,shadowMapEnabled:a.shadowMap.enabled&&O.length>0,shadowMapType:a.shadowMap.type,toneMapping:tt,decodeVideoTexture:dt&&E.map.isVideoTexture===!0&&wt.getTransfer(E.map.colorSpace)===Bt,decodeVideoTextureEmissive:Le&&E.emissiveMap.isVideoTexture===!0&&wt.getTransfer(E.emissiveMap.colorSpace)===Bt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===er,flipSided:E.side===Gn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:_e&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(_e&&E.extensions.multiDraw===!0||Be)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return $e.vertexUv1s=h.has(1),$e.vertexUv2s=h.has(2),$e.vertexUv3s=h.has(3),h.clear(),$e}function x(E){const I=[];if(E.shaderID?I.push(E.shaderID):(I.push(E.customVertexShaderID),I.push(E.customFragmentShaderID)),E.defines!==void 0)for(const O in E.defines)I.push(O),I.push(E.defines[O]);return E.isRawShaderMaterial===!1&&(v(I,E),C(I,E),I.push(a.outputColorSpace)),I.push(E.customProgramCacheKey),I.join()}function v(E,I){E.push(I.precision),E.push(I.outputColorSpace),E.push(I.envMapMode),E.push(I.envMapCubeUVHeight),E.push(I.mapUv),E.push(I.alphaMapUv),E.push(I.lightMapUv),E.push(I.aoMapUv),E.push(I.bumpMapUv),E.push(I.normalMapUv),E.push(I.displacementMapUv),E.push(I.emissiveMapUv),E.push(I.metalnessMapUv),E.push(I.roughnessMapUv),E.push(I.anisotropyMapUv),E.push(I.clearcoatMapUv),E.push(I.clearcoatNormalMapUv),E.push(I.clearcoatRoughnessMapUv),E.push(I.iridescenceMapUv),E.push(I.iridescenceThicknessMapUv),E.push(I.sheenColorMapUv),E.push(I.sheenRoughnessMapUv),E.push(I.specularMapUv),E.push(I.specularColorMapUv),E.push(I.specularIntensityMapUv),E.push(I.transmissionMapUv),E.push(I.thicknessMapUv),E.push(I.combine),E.push(I.fogExp2),E.push(I.sizeAttenuation),E.push(I.morphTargetsCount),E.push(I.morphAttributeCount),E.push(I.numSunLights),E.push(I.numDirLights),E.push(I.numPointLights),E.push(I.numSpotLights),E.push(I.numSpotLightMaps),E.push(I.numHemiLights),E.push(I.numRectAreaLights),E.push(I.numSunLightShadows),E.push(I.numDirLightShadows),E.push(I.numPointLightShadows),E.push(I.numSpotLightShadows),E.push(I.numSpotLightShadowsWithMaps),E.push(I.numLightProbes),E.push(I.shadowMapType),E.push(I.toneMapping),E.push(I.numClippingPlanes),E.push(I.numClipIntersection),E.push(I.depthPacking)}function C(E,I){u.disableAll(),I.instancing&&u.enable(0),I.instancingColor&&u.enable(1),I.instancingMorph&&u.enable(2),I.matcap&&u.enable(3),I.envMap&&u.enable(4),I.normalMapObjectSpace&&u.enable(5),I.normalMapTangentSpace&&u.enable(6),I.clearcoat&&u.enable(7),I.iridescence&&u.enable(8),I.alphaTest&&u.enable(9),I.vertexColors&&u.enable(10),I.vertexAlphas&&u.enable(11),I.vertexUv1s&&u.enable(12),I.vertexUv2s&&u.enable(13),I.vertexUv3s&&u.enable(14),I.vertexTangents&&u.enable(15),I.anisotropy&&u.enable(16),I.alphaHash&&u.enable(17),I.batching&&u.enable(18),I.dispersion&&u.enable(19),I.retroreflection&&u.enable(24),I.batchingColor&&u.enable(20),I.gradientMap&&u.enable(21),I.packedNormalMap&&u.enable(22),I.vertexNormals&&u.enable(23),E.push(u.mask),u.disableAll(),I.fog&&u.enable(0),I.useFog&&u.enable(1),I.flatShading&&u.enable(2),I.logarithmicDepthBuffer&&u.enable(3),I.reversedDepthBuffer&&u.enable(4),I.skinning&&u.enable(5),I.morphTargets&&u.enable(6),I.morphNormals&&u.enable(7),I.morphColors&&u.enable(8),I.premultipliedAlpha&&u.enable(9),I.shadowMapEnabled&&u.enable(10),I.doubleSided&&u.enable(11),I.flipSided&&u.enable(12),I.useDepthPacking&&u.enable(13),I.dithering&&u.enable(14),I.transmission&&u.enable(15),I.sheen&&u.enable(16),I.opaque&&u.enable(17),I.pointsUvs&&u.enable(18),I.decodeVideoTexture&&u.enable(19),I.decodeVideoTextureEmissive&&u.enable(20),I.alphaToCoverage&&u.enable(21),I.numLightProbeGrids>0&&u.enable(22),I.hasPositionAttribute&&u.enable(23),E.push(u.mask)}function F(E){const I=M[E.type];let O;if(I){const X=Ni[I];O=j_.clone(X.uniforms)}else O=E.uniforms;return O}function b(E,I){let O=_.get(I);return O!==void 0?++O.usedTimes:(O=new wE(a,I,E,o),m.push(O),_.set(I,O)),O}function L(E){if(--E.usedTimes===0){const I=m.indexOf(E);m[I]=m[m.length-1],m.pop(),_.delete(E.cacheKey),E.destroy()}}function R(E){f.remove(E)}function U(){f.dispose()}return{getParameters:P,getProgramCacheKey:x,getUniforms:F,acquireProgram:b,releaseProgram:L,releaseShaderCache:R,programs:m,dispose:U}}function LE(){let a=new WeakMap;function e(u){return a.has(u)}function n(u){let f=a.get(u);return f===void 0&&(f={},a.set(u,f)),f}function r(u){a.delete(u)}function o(u,f,h){a.get(u)[f]=h}function l(){a=new WeakMap}return{has:e,get:n,remove:r,update:o,dispose:l}}function NE(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.material.id!==e.material.id?a.material.id-e.material.id:a.materialVariant!==e.materialVariant?a.materialVariant-e.materialVariant:a.z!==e.z?a.z-e.z:a.id-e.id}function Ym(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.z!==e.z?e.z-a.z:a.id-e.id}function $m(){const a=[];let e=0;const n=[],r=[],o=[];function l(){e=0,n.length=0,r.length=0,o.length=0}function u(g){let M=0;return g.isInstancedMesh&&(M+=2),g.isSkinnedMesh&&(M+=1),M}function f(g,M,w,P,x,v){let C=a[e];return C===void 0?(C={id:g.id,object:g,geometry:M,material:w,materialVariant:u(g),groupOrder:P,renderOrder:g.renderOrder,z:x,group:v},a[e]=C):(C.id=g.id,C.object=g,C.geometry=M,C.material=w,C.materialVariant=u(g),C.groupOrder=P,C.renderOrder=g.renderOrder,C.z=x,C.group=v),e++,C}function h(g,M,w,P,x,v,C){C.reversedDepth===!0&&(x=-x);const F=f(g,M,w,P,x,v);w.transmission>0?r.push(F):w.transparent===!0?o.push(F):n.push(F)}function m(g,M,w,P,x,v){const C=f(g,M,w,P,x,v);w.transmission>0?r.unshift(C):w.transparent===!0?o.unshift(C):n.unshift(C)}function _(g,M){n.length>1&&n.sort(g||NE),r.length>1&&r.sort(M||Ym),o.length>1&&o.sort(M||Ym)}function y(){for(let g=e,M=a.length;g<M;g++){const w=a[g];if(w.id===null)break;w.id=null,w.object=null,w.geometry=null,w.material=null,w.group=null}}return{opaque:n,transmissive:r,transparent:o,init:l,push:h,unshift:m,finish:y,sort:_}}function IE(){let a=new WeakMap;function e(r,o){const l=a.get(r);let u;return l===void 0?(u=new $m,a.set(r,[u])):o>=l.length?(u=new $m,l.push(u)):u=l[o],u}function n(){a=new WeakMap}return{get:e,dispose:n}}function DE(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let n;switch(e.type){case"SunLight":case"DirectionalLight":n={direction:new ie,color:new xt};break;case"SpotLight":n={position:new ie,direction:new ie,color:new xt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new ie,color:new xt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new ie,skyColor:new xt,groundColor:new xt};break;case"RectAreaLight":n={color:new xt,position:new ie,halfWidth:new ie,halfHeight:new ie};break}return a[e.id]=n,n}}}function UE(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let n;switch(e.type){case"SunLight":case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt,shadowCameraNear:1,shadowCameraFar:1e3};break}return a[e.id]=n,n}}}let kE=0;function FE(a,e){return(e.castShadow?2:0)-(a.castShadow?2:0)+(e.map?1:0)-(a.map?1:0)}function OE(a){const e=new DE,n=UE(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)r.probe.push(new ie);const o=new ie,l=new Qt,u=new Qt;function f(m){let _=0,y=0,g=0;for(let J=0;J<9;J++)r.probe[J].set(0,0,0);let M=0,w=0,P=0,x=0,v=0,C=0,F=0,b=0,L=0,R=0,U=0,E=0,I=0,O=0;m.sort(FE);for(let J=0,ne=m.length;J<ne;J++){const j=m[J],H=j.color,ae=j.intensity,W=j.distance;let B=null;if(j.shadow&&j.shadow.map&&(j.shadow.map.texture.format===aa?B=j.shadow.map.texture:B=j.shadow.map.depthTexture||j.shadow.map.texture),j.isAmbientLight)_+=H.r*ae,y+=H.g*ae,g+=H.b*ae;else if(j.isLightProbe){for(let z=0;z<9;z++)r.probe[z].addScaledVector(j.sh.coefficients[z],ae);O++}else if(j.isSunLight){const z=e.get(j);if(z.color.copy(j.color).multiplyScalar(j.intensity),j.castShadow){const K=j.shadow,N=n.get(j);N.shadowIntensity=K.intensity,N.shadowBias=K.bias,N.shadowNormalBias=K.normalBias,N.shadowRadius=K.radius,N.shadowMapSize.copy(K.mapSize).multiply(K.getFrameExtents()),r.sunShadow[w]=N,r.sunShadowMap[w]=B;const ee=K.getViewportCount();for(let xe=0;xe<ee;xe++)r.sunShadowMatrix[P+xe]=K.getMatrix(xe),r.sunShadowCascade[P+xe]=K._cascadeData[xe];P+=ee,w++}r.sun[M]=z,M++}else if(j.isDirectionalLight){const z=e.get(j);if(z.color.copy(j.color).multiplyScalar(j.intensity),j.castShadow){const K=j.shadow,N=n.get(j);N.shadowIntensity=K.intensity,N.shadowBias=K.bias,N.shadowNormalBias=K.normalBias,N.shadowRadius=K.radius,N.shadowMapSize=K.mapSize,r.directionalShadow[x]=N,r.directionalShadowMap[x]=B,r.directionalShadowMatrix[x]=j.shadow.matrix,L++}r.directional[x]=z,x++}else if(j.isSpotLight){const z=e.get(j);z.position.setFromMatrixPosition(j.matrixWorld),z.color.copy(H).multiplyScalar(ae),z.distance=W,z.coneCos=Math.cos(j.angle),z.penumbraCos=Math.cos(j.angle*(1-j.penumbra)),z.decay=j.decay,r.spot[C]=z;const K=j.shadow;if(j.map&&(r.spotLightMap[E]=j.map,E++,K.updateMatrices(j),j.castShadow&&I++),r.spotLightMatrix[C]=K.matrix,j.castShadow){const N=n.get(j);N.shadowIntensity=K.intensity,N.shadowBias=K.bias,N.shadowNormalBias=K.normalBias,N.shadowRadius=K.radius,N.shadowMapSize=K.mapSize,r.spotShadow[C]=N,r.spotShadowMap[C]=B,U++}C++}else if(j.isRectAreaLight){const z=e.get(j);z.color.copy(H).multiplyScalar(ae),z.halfWidth.set(j.width*.5,0,0),z.halfHeight.set(0,j.height*.5,0),r.rectArea[F]=z,F++}else if(j.isPointLight){const z=e.get(j);if(z.color.copy(j.color).multiplyScalar(j.intensity),z.distance=j.distance,z.decay=j.decay,j.castShadow){const K=j.shadow,N=n.get(j);N.shadowIntensity=K.intensity,N.shadowBias=K.bias,N.shadowNormalBias=K.normalBias,N.shadowRadius=K.radius,N.shadowMapSize=K.mapSize,N.shadowCameraNear=K.camera.near,N.shadowCameraFar=K.camera.far,r.pointShadow[v]=N,r.pointShadowMap[v]=B,r.pointShadowMatrix[v]=j.shadow.matrix,R++}r.point[v]=z,v++}else if(j.isHemisphereLight){const z=e.get(j);z.skyColor.copy(j.color).multiplyScalar(ae),z.groundColor.copy(j.groundColor).multiplyScalar(ae),r.hemi[b]=z,b++}}F>0&&(a.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Oe.LTC_FLOAT_1,r.rectAreaLTC2=Oe.LTC_FLOAT_2):(r.rectAreaLTC1=Oe.LTC_HALF_1,r.rectAreaLTC2=Oe.LTC_HALF_2)),r.ambient[0]=_,r.ambient[1]=y,r.ambient[2]=g;const X=r.hash;(X.sunLength!==M||X.directionalLength!==x||X.pointLength!==v||X.spotLength!==C||X.rectAreaLength!==F||X.hemiLength!==b||X.numSunShadows!==w||X.numDirectionalShadows!==L||X.numPointShadows!==R||X.numSpotShadows!==U||X.numSpotMaps!==E||X.numLightProbes!==O)&&(r.sun.length=M,r.directional.length=x,r.spot.length=C,r.rectArea.length=F,r.point.length=v,r.hemi.length=b,r.sunShadow.length=w,r.sunShadowMap.length=w,r.sunShadowMatrix.length=P,r.sunShadowCascade.length=P,r.directionalShadow.length=L,r.directionalShadowMap.length=L,r.directionalShadowMatrix.length=L,r.pointShadow.length=R,r.pointShadowMap.length=R,r.pointShadowMatrix.length=R,r.spotShadow.length=U,r.spotShadowMap.length=U,r.spotLightMatrix.length=U+E-I,r.spotLightMap.length=E,r.numSpotLightShadowsWithMaps=I,r.numLightProbes=O,X.sunLength=M,X.directionalLength=x,X.pointLength=v,X.spotLength=C,X.rectAreaLength=F,X.hemiLength=b,X.numSunShadows=w,X.numDirectionalShadows=L,X.numPointShadows=R,X.numSpotShadows=U,X.numSpotMaps=E,X.numLightProbes=O,r.version=kE++)}function h(m,_){let y=0,g=0,M=0,w=0,P=0,x=0;const v=_.matrixWorldInverse;for(let C=0,F=m.length;C<F;C++){const b=m[C];if(b.isSunLight){const L=r.sun[y];L.direction.setFromMatrixPosition(b.matrixWorld),L.direction.transformDirection(v),y++}else if(b.isDirectionalLight){const L=r.directional[g];L.direction.setFromMatrixPosition(b.matrixWorld),o.setFromMatrixPosition(b.target.matrixWorld),L.direction.sub(o),L.direction.transformDirection(v),g++}else if(b.isSpotLight){const L=r.spot[w];L.position.setFromMatrixPosition(b.matrixWorld),L.position.applyMatrix4(v),L.direction.setFromMatrixPosition(b.matrixWorld),o.setFromMatrixPosition(b.target.matrixWorld),L.direction.sub(o),L.direction.transformDirection(v),w++}else if(b.isRectAreaLight){const L=r.rectArea[P];L.position.setFromMatrixPosition(b.matrixWorld),L.position.applyMatrix4(v),u.identity(),l.copy(b.matrixWorld),l.premultiply(v),u.extractRotation(l),L.halfWidth.set(b.width*.5,0,0),L.halfHeight.set(0,b.height*.5,0),L.halfWidth.applyMatrix4(u),L.halfHeight.applyMatrix4(u),P++}else if(b.isPointLight){const L=r.point[M];L.position.setFromMatrixPosition(b.matrixWorld),L.position.applyMatrix4(v),M++}else if(b.isHemisphereLight){const L=r.hemi[x];L.direction.setFromMatrixPosition(b.matrixWorld),L.direction.transformDirection(v),x++}}}return{setup:f,setupView:h,state:r}}function Zm(a){const e=new OE(a),n=[],r=[],o=[];function l(g){y.camera=g,n.length=0,r.length=0,o.length=0}function u(g){n.push(g)}function f(g){r.push(g)}function h(g){o.push(g)}function m(){e.setup(n)}function _(g){e.setupView(n,g)}const y={lightsArray:n,shadowsArray:r,lightProbeGridArray:o,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:l,state:y,setupLights:m,setupLightsView:_,pushLight:u,pushShadow:f,pushLightProbeGrid:h}}function zE(a){let e=new WeakMap;function n(o,l=0){const u=e.get(o);let f;return u===void 0?(f=new Zm(a),e.set(o,[f])):l>=u.length?(f=new Zm(a),u.push(f)):f=u[l],f}function r(){e=new WeakMap}return{get:n,dispose:r}}const BE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,HE=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,VE=[new ie(1,0,0),new ie(-1,0,0),new ie(0,1,0),new ie(0,-1,0),new ie(0,0,1),new ie(0,0,-1)],GE=[new ie(0,-1,0),new ie(0,-1,0),new ie(0,0,1),new ie(0,0,-1),new ie(0,-1,0),new ie(0,-1,0)],Jm=new Qt,Ws=new ie,dd=new ie;function WE(a,e,n){let r=new mf;const o=new yt,l=new yt,u=new Jt,f=new Z_,h=new J_,m={},_=n.maxTextureSize,y={[ia]:Gn,[Gn]:ia,[er]:er},g=new zi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new yt},radius:{value:4}},vertexShader:BE,fragmentShader:HE}),M=g.clone();M.defines.HORIZONTAL_PASS=1;const w=new Pn;w.setAttribute("position",new ki(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const P=new Ft(w,g),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Nl;let v=this.type;this.render=function(R,U,E){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||R.length===0)return;this.type===Ov&&(ct("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Nl);const I=a.getRenderTarget(),O=a.getActiveCubeFace(),X=a.getActiveMipmapLevel(),J=a.state;J.setBlending(nr),J.buffers.depth.getReversed()===!0?J.buffers.color.setClear(0,0,0,0):J.buffers.color.setClear(1,1,1,1),J.buffers.depth.setTest(!0),J.setScissorTest(!1);const ne=v!==this.type;ne&&U.traverse(function(j){j.material&&(Array.isArray(j.material)?j.material.forEach(H=>H.needsUpdate=!0):j.material.needsUpdate=!0)});for(let j=0,H=R.length;j<H;j++){const ae=R[j],W=ae.shadow;if(W===void 0){ct("WebGLShadowMap:",ae,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;o.copy(W.mapSize);const B=W.getFrameExtents();o.multiply(B),l.copy(W.mapSize),(o.x>_||o.y>_)&&(o.x>_&&(l.x=Math.floor(_/B.x),o.x=l.x*B.x,W.mapSize.x=l.x),o.y>_&&(l.y=Math.floor(_/B.y),o.y=l.y*B.y,W.mapSize.y=l.y));const z=a.state.buffers.depth.getReversed();if(W.camera._reversedDepth=z,W.map===null||ne===!0){if(W.map!==null&&(W.map.depthTexture!==null&&(W.map.depthTexture.dispose(),W.map.depthTexture=null),W.map.dispose()),this.type===Xs){if(ae.isPointLight){ct("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}W.map=new Ti(o.x,o.y,{format:aa,type:Oi,minFilter:Rn,magFilter:Rn,generateMipmaps:!1}),W.map.texture.name=ae.name+".shadowMap",W.map.depthTexture=new Js(o.x,o.y,Ii),W.map.depthTexture.name=ae.name+".shadowMapDepth",W.map.depthTexture.format=rr,W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=yn,W.map.depthTexture.magFilter=yn}else ae.isPointLight?(W.map=new kg(o.x),W.map.depthTexture=new X_(o.x,Fi)):(W.map=new Ti(o.x,o.y),W.map.depthTexture=new Js(o.x,o.y,Fi)),W.map.depthTexture.name=ae.name+".shadowMap",W.map.depthTexture.format=rr,this.type===Nl?(W.map.depthTexture.compareFunction=z?ff:df,W.map.depthTexture.minFilter=Rn,W.map.depthTexture.magFilter=Rn):(W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=yn,W.map.depthTexture.magFilter=yn);W.camera.updateProjectionMatrix()}W.map.isWebGLCubeRenderTarget!==!0&&(W.map.width!==o.x||W.map.height!==o.y)&&W.map.setSize(o.x,o.y);const K=W.map.isWebGLCubeRenderTarget?6:W.getViewportCount();ae.isPointLight!==!0&&W.updateMatrices(ae,E);for(let N=0;N<K;N++){const ee=W.getCamera(N);if(ae.isPointLight){const xe=W.camera,He=W.matrix,Ue=ae.distance||xe.far;Ue!==xe.far&&(xe.far=Ue,xe.updateProjectionMatrix()),Ws.setFromMatrixPosition(ae.matrixWorld),xe.position.copy(Ws),dd.copy(xe.position),dd.add(VE[N]),xe.up.copy(GE[N]),xe.lookAt(dd),xe.updateMatrixWorld(),He.makeTranslation(-Ws.x,-Ws.y,-Ws.z),Jm.multiplyMatrices(xe.projectionMatrix,xe.matrixWorldInverse),W._frustum.setFromProjectionMatrix(Jm,xe.coordinateSystem,xe.reversedDepth)}if(W.map.isWebGLCubeRenderTarget)a.setRenderTarget(W.map,N),a.clear();else{N===0&&(a.setRenderTarget(W.map),a.clear());const xe=W.getViewport(N);u.set(l.x*xe.x,l.y*xe.y,l.x*xe.z,l.y*xe.w),J.viewport(u)}r=W.getFrustum(N),b(U,E,ee,ae,this.type)}W.isPointLightShadow!==!0&&this.type===Xs&&C(W,E),W.needsUpdate=!1}v=this.type,x.needsUpdate=!1,a.setRenderTarget(I,O,X)};function C(R,U){const E=e.update(P);g.defines.VSM_SAMPLES!==R.blurSamples&&(g.defines.VSM_SAMPLES=R.blurSamples,M.defines.VSM_SAMPLES=R.blurSamples,g.needsUpdate=!0,M.needsUpdate=!0),R.mapPass===null?R.mapPass=new Ti(o.x,o.y,{format:aa,type:Oi}):(R.mapPass.width!==R.map.width||R.mapPass.height!==R.map.height)&&R.mapPass.setSize(R.map.width,R.map.height),g.uniforms.shadow_pass.value=R.map.depthTexture,g.uniforms.resolution.value.set(R.map.width,R.map.height),g.uniforms.radius.value=R.radius,a.setRenderTarget(R.mapPass),a.clear(),a.renderBufferDirect(U,null,E,g,P,null),M.uniforms.shadow_pass.value=R.mapPass.texture,M.uniforms.resolution.value.set(R.map.width,R.map.height),M.uniforms.radius.value=R.radius,a.setRenderTarget(R.map),a.clear(),a.renderBufferDirect(U,null,E,M,P,null)}function F(R,U,E,I){let O=null;const X=E.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(X!==void 0)O=X;else if(O=E.isPointLight===!0?h:f,a.localClippingEnabled&&U.clipShadows===!0&&Array.isArray(U.clippingPlanes)&&U.clippingPlanes.length!==0||U.displacementMap&&U.displacementScale!==0||U.alphaMap&&U.alphaTest>0||U.map&&U.alphaTest>0||U.alphaToCoverage===!0){const J=O.uuid,ne=U.uuid;let j=m[J];j===void 0&&(j={},m[J]=j);let H=j[ne];H===void 0&&(H=O.clone(),j[ne]=H,U.addEventListener("dispose",L)),O=H}if(O.visible=U.visible,O.wireframe=U.wireframe,I===Xs?O.side=U.shadowSide!==null?U.shadowSide:U.side:O.side=U.shadowSide!==null?U.shadowSide:y[U.side],O.alphaMap=U.alphaMap,O.alphaTest=U.alphaToCoverage===!0?.5:U.alphaTest,O.map=U.map,O.clipShadows=U.clipShadows,O.clippingPlanes=U.clippingPlanes,O.clipIntersection=U.clipIntersection,O.displacementMap=U.displacementMap,O.displacementScale=U.displacementScale,O.displacementBias=U.displacementBias,O.wireframeLinewidth=U.wireframeLinewidth,O.linewidth=U.linewidth,E.isPointLight===!0&&O.isMeshDistanceMaterial===!0){const J=a.properties.get(O);J.light=E}return O}function b(R,U,E,I,O){if(R.visible===!1)return;if(R.layers.test(U.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&O===Xs)&&(!R.frustumCulled||R.intersectsFrustum(r))){R.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,R.matrixWorld);const ne=e.update(R),j=R.material;if(Array.isArray(j)){const H=ne.groups;for(let ae=0,W=H.length;ae<W;ae++){const B=H[ae],z=j[B.materialIndex];if(z&&z.visible){const K=F(R,z,I,O);R.onBeforeShadow(a,R,U,E,ne,K,B),a.renderBufferDirect(E,null,ne,K,R,B),R.onAfterShadow(a,R,U,E,ne,K,B)}}}else if(j.visible){const H=F(R,j,I,O);R.onBeforeShadow(a,R,U,E,ne,H,null),a.renderBufferDirect(E,null,ne,H,R,null),R.onAfterShadow(a,R,U,E,ne,H,null)}}const J=R.children;for(let ne=0,j=J.length;ne<j;ne++)b(J[ne],U,E,I,O)}function L(R){R.target.removeEventListener("dispose",L);for(const E in m){const I=m[E],O=R.target.uuid;O in I&&(I[O].dispose(),delete I[O])}}}function XE(a,e){function n(){let Y=!1;const Ne=new Jt;let ge=null;const Ie=new Jt(0,0,0,0);return{setMask:function(ze){ge!==ze&&!Y&&(a.colorMask(ze,ze,ze,ze),ge=ze)},setLocked:function(ze){Y=ze},setClear:function(ze,_e,tt,$e,Lt){Lt===!0&&(ze*=$e,_e*=$e,tt*=$e),Ne.set(ze,_e,tt,$e),Ie.equals(Ne)===!1&&(a.clearColor(ze,_e,tt,$e),Ie.copy(Ne))},reset:function(){Y=!1,ge=null,Ie.set(-1,0,0,0)}}}function r(){let Y=!1,Ne=!1,ge=null,Ie=null,ze=null;return{setReversed:function(_e){if(Ne!==_e){const tt=e.get("EXT_clip_control");_e?tt.clipControlEXT(tt.LOWER_LEFT_EXT,tt.ZERO_TO_ONE_EXT):tt.clipControlEXT(tt.LOWER_LEFT_EXT,tt.NEGATIVE_ONE_TO_ONE_EXT),Ne=_e;const $e=ze;ze=null,this.setClear($e)}},getReversed:function(){return Ne},setTest:function(_e){_e?fe(a.DEPTH_TEST):Te(a.DEPTH_TEST)},setMask:function(_e){ge!==_e&&!Y&&(a.depthMask(_e),ge=_e)},setFunc:function(_e){if(Ne&&(_e=x_[_e]),Ie!==_e){switch(_e){case fd:a.depthFunc(a.NEVER);break;case hd:a.depthFunc(a.ALWAYS);break;case pd:a.depthFunc(a.LESS);break;case Ks:a.depthFunc(a.LEQUAL);break;case md:a.depthFunc(a.EQUAL);break;case gd:a.depthFunc(a.GEQUAL);break;case vd:a.depthFunc(a.GREATER);break;case _d:a.depthFunc(a.NOTEQUAL);break;default:a.depthFunc(a.LEQUAL)}Ie=_e}},setLocked:function(_e){Y=_e},setClear:function(_e){ze!==_e&&(ze=_e,Ne&&(_e=1-_e),a.clearDepth(_e))},reset:function(){Y=!1,ge=null,Ie=null,ze=null,Ne=!1}}}function o(){let Y=!1,Ne=null,ge=null,Ie=null,ze=null,_e=null,tt=null,$e=null,Lt=null;return{setTest:function(bt){Y||(bt?fe(a.STENCIL_TEST):Te(a.STENCIL_TEST))},setMask:function(bt){Ne!==bt&&!Y&&(a.stencilMask(bt),Ne=bt)},setFunc:function(bt,vn,Qn){(ge!==bt||Ie!==vn||ze!==Qn)&&(a.stencilFunc(bt,vn,Qn),ge=bt,Ie=vn,ze=Qn)},setOp:function(bt,vn,Qn){(_e!==bt||tt!==vn||$e!==Qn)&&(a.stencilOp(bt,vn,Qn),_e=bt,tt=vn,$e=Qn)},setLocked:function(bt){Y=bt},setClear:function(bt){Lt!==bt&&(a.clearStencil(bt),Lt=bt)},reset:function(){Y=!1,Ne=null,ge=null,Ie=null,ze=null,_e=null,tt=null,$e=null,Lt=null}}}const l=new n,u=new r,f=new o,h=new WeakMap,m=new WeakMap;let _={},y={},g={},M=new WeakMap,w=[],P=null,x=!1,v=null,C=null,F=null,b=null,L=null,R=null,U=null,E=new xt(0,0,0),I=0,O=!1,X=null,J=null,ne=null,j=null,H=null;const ae=a.getParameter(a.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,B=0;const z=a.getParameter(a.VERSION);z.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(z)[1]),W=B>=1):z.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),W=B>=2);let K=null,N={};const ee=a.getParameter(a.SCISSOR_BOX),xe=a.getParameter(a.VIEWPORT),He=new Jt().fromArray(ee),Ue=new Jt().fromArray(xe);function We(Y,Ne,ge,Ie){const ze=new Uint8Array(4),_e=a.createTexture();a.bindTexture(Y,_e),a.texParameteri(Y,a.TEXTURE_MIN_FILTER,a.NEAREST),a.texParameteri(Y,a.TEXTURE_MAG_FILTER,a.NEAREST);for(let tt=0;tt<ge;tt++)Y===a.TEXTURE_3D||Y===a.TEXTURE_2D_ARRAY?a.texImage3D(Ne,0,a.RGBA,1,1,Ie,0,a.RGBA,a.UNSIGNED_BYTE,ze):a.texImage2D(Ne+tt,0,a.RGBA,1,1,0,a.RGBA,a.UNSIGNED_BYTE,ze);return _e}const le={};le[a.TEXTURE_2D]=We(a.TEXTURE_2D,a.TEXTURE_2D,1),le[a.TEXTURE_CUBE_MAP]=We(a.TEXTURE_CUBE_MAP,a.TEXTURE_CUBE_MAP_POSITIVE_X,6),le[a.TEXTURE_2D_ARRAY]=We(a.TEXTURE_2D_ARRAY,a.TEXTURE_2D_ARRAY,1,1),le[a.TEXTURE_3D]=We(a.TEXTURE_3D,a.TEXTURE_3D,1,1),l.setClear(0,0,0,1),u.setClear(1),f.setClear(0),fe(a.DEPTH_TEST),u.setFunc(Ks),pt(!1),Ot(tm),fe(a.CULL_FACE),St(nr);function fe(Y){_[Y]!==!0&&(a.enable(Y),_[Y]=!0)}function Te(Y){_[Y]!==!1&&(a.disable(Y),_[Y]=!1)}function Je(Y,Ne){return g[Y]!==Ne?(a.bindFramebuffer(Y,Ne),g[Y]=Ne,Y===a.DRAW_FRAMEBUFFER&&(g[a.FRAMEBUFFER]=Ne),Y===a.FRAMEBUFFER&&(g[a.DRAW_FRAMEBUFFER]=Ne),!0):!1}function Be(Y,Ne){let ge=w,Ie=!1;if(Y){ge=M.get(Ne),ge===void 0&&(ge=[],M.set(Ne,ge));const ze=Y.textures;if(ge.length!==ze.length||ge[0]!==a.COLOR_ATTACHMENT0){for(let _e=0,tt=ze.length;_e<tt;_e++)ge[_e]=a.COLOR_ATTACHMENT0+_e;ge.length=ze.length,Ie=!0}}else ge[0]!==a.BACK&&(ge[0]=a.BACK,Ie=!0);Ie&&a.drawBuffers(ge)}function dt(Y){return P!==Y?(a.useProgram(Y),P=Y,!0):!1}const Ht={[Xa]:a.FUNC_ADD,[Bv]:a.FUNC_SUBTRACT,[Hv]:a.FUNC_REVERSE_SUBTRACT};Ht[Vv]=a.MIN,Ht[Gv]=a.MAX;const ft={[Wv]:a.ZERO,[Xv]:a.ONE,[qv]:a.SRC_COLOR,[ng]:a.SRC_ALPHA,[Jv]:a.SRC_ALPHA_SATURATE,[$v]:a.DST_COLOR,[Kv]:a.DST_ALPHA,[jv]:a.ONE_MINUS_SRC_COLOR,[ig]:a.ONE_MINUS_SRC_ALPHA,[Zv]:a.ONE_MINUS_DST_COLOR,[Yv]:a.ONE_MINUS_DST_ALPHA,[Qv]:a.CONSTANT_COLOR,[e_]:a.ONE_MINUS_CONSTANT_COLOR,[t_]:a.CONSTANT_ALPHA,[n_]:a.ONE_MINUS_CONSTANT_ALPHA};function St(Y,Ne,ge,Ie,ze,_e,tt,$e,Lt,bt){if(Y===nr){x===!0&&(Te(a.BLEND),x=!1);return}if(x===!1&&(fe(a.BLEND),x=!0),Y!==zv){if(Y!==v||bt!==O){if((C!==Xa||L!==Xa)&&(a.blendEquation(a.FUNC_ADD),C=Xa,L=Xa),bt)switch(Y){case js:a.blendFuncSeparate(a.ONE,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case nm:a.blendFunc(a.ONE,a.ONE);break;case im:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case rm:a.blendFuncSeparate(a.DST_COLOR,a.ONE_MINUS_SRC_ALPHA,a.ZERO,a.ONE);break;default:Dt("WebGLState: Invalid blending: ",Y);break}else switch(Y){case js:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case nm:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE,a.ONE,a.ONE);break;case im:Dt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case rm:Dt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Dt("WebGLState: Invalid blending: ",Y);break}F=null,b=null,R=null,U=null,E.set(0,0,0),I=0,v=Y,O=bt}return}ze=ze||Ne,_e=_e||ge,tt=tt||Ie,(Ne!==C||ze!==L)&&(a.blendEquationSeparate(Ht[Ne],Ht[ze]),C=Ne,L=ze),(ge!==F||Ie!==b||_e!==R||tt!==U)&&(a.blendFuncSeparate(ft[ge],ft[Ie],ft[_e],ft[tt]),F=ge,b=Ie,R=_e,U=tt),($e.equals(E)===!1||Lt!==I)&&(a.blendColor($e.r,$e.g,$e.b,Lt),E.copy($e),I=Lt),v=Y,O=!1}function Pt(Y,Ne){Y.side===er?Te(a.CULL_FACE):fe(a.CULL_FACE);let ge=Y.side===Gn;Ne&&(ge=!ge),pt(ge),Y.blending===js&&Y.transparent===!1?St(nr):St(Y.blending,Y.blendEquation,Y.blendSrc,Y.blendDst,Y.blendEquationAlpha,Y.blendSrcAlpha,Y.blendDstAlpha,Y.blendColor,Y.blendAlpha,Y.premultipliedAlpha),u.setFunc(Y.depthFunc),u.setTest(Y.depthTest),u.setMask(Y.depthWrite),l.setMask(Y.colorWrite);const Ie=Y.stencilWrite;f.setTest(Ie),Ie&&(f.setMask(Y.stencilWriteMask),f.setFunc(Y.stencilFunc,Y.stencilRef,Y.stencilFuncMask),f.setOp(Y.stencilFail,Y.stencilZFail,Y.stencilZPass)),Le(Y.polygonOffset,Y.polygonOffsetFactor,Y.polygonOffsetUnits),Y.alphaToCoverage===!0?fe(a.SAMPLE_ALPHA_TO_COVERAGE):Te(a.SAMPLE_ALPHA_TO_COVERAGE)}function pt(Y){X!==Y&&(Y?a.frontFace(a.CW):a.frontFace(a.CCW),X=Y)}function Ot(Y){Y!==kv?(fe(a.CULL_FACE),Y!==J&&(Y===tm?a.cullFace(a.BACK):Y===Fv?a.cullFace(a.FRONT):a.cullFace(a.FRONT_AND_BACK))):Te(a.CULL_FACE),J=Y}function ve(Y){Y!==ne&&(W&&a.lineWidth(Y),ne=Y)}function Le(Y,Ne,ge){Y?(fe(a.POLYGON_OFFSET_FILL),(j!==Ne||H!==ge)&&(j=Ne,H=ge,u.getReversed()&&(Ne=-Ne),a.polygonOffset(Ne,ge))):Te(a.POLYGON_OFFSET_FILL)}function be(Y){Y?fe(a.SCISSOR_TEST):Te(a.SCISSOR_TEST)}function it(Y){Y===void 0&&(Y=a.TEXTURE0+ae-1),K!==Y&&(a.activeTexture(Y),K=Y)}function V(Y,Ne,ge){ge===void 0&&(K===null?ge=a.TEXTURE0+ae-1:ge=K);let Ie=N[ge];Ie===void 0&&(Ie={type:void 0,texture:void 0},N[ge]=Ie),(Ie.type!==Y||Ie.texture!==Ne)&&(K!==ge&&(a.activeTexture(ge),K=ge),a.bindTexture(Y,Ne||le[Y]),Ie.type=Y,Ie.texture=Ne)}function Ut(){const Y=N[K];Y!==void 0&&Y.type!==void 0&&(a.bindTexture(Y.type,null),Y.type=void 0,Y.texture=void 0)}function _t(){try{a.compressedTexImage2D(...arguments)}catch(Y){Dt("WebGLState:",Y)}}function D(){try{a.compressedTexImage3D(...arguments)}catch(Y){Dt("WebGLState:",Y)}}function S(){try{a.texSubImage2D(...arguments)}catch(Y){Dt("WebGLState:",Y)}}function Q(){try{a.texSubImage3D(...arguments)}catch(Y){Dt("WebGLState:",Y)}}function oe(){try{a.compressedTexSubImage2D(...arguments)}catch(Y){Dt("WebGLState:",Y)}}function pe(){try{a.compressedTexSubImage3D(...arguments)}catch(Y){Dt("WebGLState:",Y)}}function Me(){try{a.texStorage2D(...arguments)}catch(Y){Dt("WebGLState:",Y)}}function Ce(){try{a.texStorage3D(...arguments)}catch(Y){Dt("WebGLState:",Y)}}function he(){try{a.texImage2D(...arguments)}catch(Y){Dt("WebGLState:",Y)}}function me(){try{a.texImage3D(...arguments)}catch(Y){Dt("WebGLState:",Y)}}function we(Y){return y[Y]!==void 0?y[Y]:a.getParameter(Y)}function qe(Y,Ne){y[Y]!==Ne&&(a.pixelStorei(Y,Ne),y[Y]=Ne)}function Re(Y){He.equals(Y)===!1&&(a.scissor(Y.x,Y.y,Y.z,Y.w),He.copy(Y))}function Pe(Y){Ue.equals(Y)===!1&&(a.viewport(Y.x,Y.y,Y.z,Y.w),Ue.copy(Y))}function Qe(Y,Ne){let ge=m.get(Ne);ge===void 0&&(ge=new WeakMap,m.set(Ne,ge));let Ie=ge.get(Y);Ie===void 0&&(Ie=a.getUniformBlockIndex(Ne,Y.name),ge.set(Y,Ie))}function rt(Y,Ne){const Ie=m.get(Ne).get(Y);h.get(Ne)!==Ie&&(a.uniformBlockBinding(Ne,Ie,Y.__bindingPointIndex),h.set(Ne,Ie))}function ot(){a.disable(a.BLEND),a.disable(a.CULL_FACE),a.disable(a.DEPTH_TEST),a.disable(a.POLYGON_OFFSET_FILL),a.disable(a.SCISSOR_TEST),a.disable(a.STENCIL_TEST),a.disable(a.SAMPLE_ALPHA_TO_COVERAGE),a.blendEquation(a.FUNC_ADD),a.blendFunc(a.ONE,a.ZERO),a.blendFuncSeparate(a.ONE,a.ZERO,a.ONE,a.ZERO),a.blendColor(0,0,0,0),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(a.LESS),u.setReversed(!1),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(a.ALWAYS,0,4294967295),a.stencilOp(a.KEEP,a.KEEP,a.KEEP),a.clearStencil(0),a.cullFace(a.BACK),a.frontFace(a.CCW),a.polygonOffset(0,0),a.activeTexture(a.TEXTURE0),a.bindFramebuffer(a.FRAMEBUFFER,null),a.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),a.bindFramebuffer(a.READ_FRAMEBUFFER,null),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),a.pixelStorei(a.PACK_ALIGNMENT,4),a.pixelStorei(a.UNPACK_ALIGNMENT,4),a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,!1),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,a.BROWSER_DEFAULT_WEBGL),a.pixelStorei(a.PACK_ROW_LENGTH,0),a.pixelStorei(a.PACK_SKIP_PIXELS,0),a.pixelStorei(a.PACK_SKIP_ROWS,0),a.pixelStorei(a.UNPACK_ROW_LENGTH,0),a.pixelStorei(a.UNPACK_IMAGE_HEIGHT,0),a.pixelStorei(a.UNPACK_SKIP_PIXELS,0),a.pixelStorei(a.UNPACK_SKIP_ROWS,0),a.pixelStorei(a.UNPACK_SKIP_IMAGES,0),_={},y={},K=null,N={},g={},M=new WeakMap,w=[],P=null,x=!1,v=null,C=null,F=null,b=null,L=null,R=null,U=null,E=new xt(0,0,0),I=0,O=!1,X=null,J=null,ne=null,j=null,H=null,He.set(0,0,a.canvas.width,a.canvas.height),Ue.set(0,0,a.canvas.width,a.canvas.height),l.reset(),u.reset(),f.reset()}return{buffers:{color:l,depth:u,stencil:f},enable:fe,disable:Te,bindFramebuffer:Je,drawBuffers:Be,useProgram:dt,setBlending:St,setMaterial:Pt,setFlipSided:pt,setCullFace:Ot,setLineWidth:ve,setPolygonOffset:Le,setScissorTest:be,activeTexture:it,bindTexture:V,unbindTexture:Ut,compressedTexImage2D:_t,compressedTexImage3D:D,texImage2D:he,texImage3D:me,pixelStorei:qe,getParameter:we,updateUBOMapping:Qe,uniformBlockBinding:rt,texStorage2D:Me,texStorage3D:Ce,texSubImage2D:S,texSubImage3D:Q,compressedTexSubImage2D:oe,compressedTexSubImage3D:pe,scissor:Re,viewport:Pe,reset:ot}}function qE(a,e,n,r,o,l,u){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new yt,_=new WeakMap,y=new Set;let g;const M=new WeakMap;let w=!1;try{w=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function P(D,S){return w?new OffscreenCanvas(D,S):Vl("canvas")}function x(D,S,Q){let oe=1;const pe=_t(D);if((pe.width>Q||pe.height>Q)&&(oe=Q/Math.max(pe.width,pe.height)),oe<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const Me=Math.floor(oe*pe.width),Ce=Math.floor(oe*pe.height);g===void 0&&(g=P(Me,Ce));const he=S?P(Me,Ce):g;return he.width=Me,he.height=Ce,he.getContext("2d").drawImage(D,0,0,Me,Ce),ct("WebGLRenderer: Texture has been resized from ("+pe.width+"x"+pe.height+") to ("+Me+"x"+Ce+")."),he}else return"data"in D&&ct("WebGLRenderer: Image in DataTexture is too big ("+pe.width+"x"+pe.height+")."),D;return D}function v(D){return D.generateMipmaps}function C(D){a.generateMipmap(D)}function F(D){return D.isWebGLCubeRenderTarget?a.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?a.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?a.TEXTURE_2D_ARRAY:a.TEXTURE_2D}function b(D,S,Q,oe,pe,Me=!1){if(D!==null){if(a[D]!==void 0)return a[D];ct("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let Ce;oe&&(Ce=e.get("EXT_texture_norm16"),Ce||ct("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let he=S;if(S===a.RED&&(Q===a.FLOAT&&(he=a.R32F),Q===a.HALF_FLOAT&&(he=a.R16F),Q===a.UNSIGNED_BYTE&&(he=a.R8),Q===a.UNSIGNED_SHORT&&Ce&&(he=Ce.R16_EXT),Q===a.SHORT&&Ce&&(he=Ce.R16_SNORM_EXT)),S===a.RED_INTEGER&&(Q===a.UNSIGNED_BYTE&&(he=a.R8UI),Q===a.UNSIGNED_SHORT&&(he=a.R16UI),Q===a.UNSIGNED_INT&&(he=a.R32UI),Q===a.BYTE&&(he=a.R8I),Q===a.SHORT&&(he=a.R16I),Q===a.INT&&(he=a.R32I)),S===a.RG&&(Q===a.FLOAT&&(he=a.RG32F),Q===a.HALF_FLOAT&&(he=a.RG16F),Q===a.UNSIGNED_BYTE&&(he=a.RG8),Q===a.UNSIGNED_SHORT&&Ce&&(he=Ce.RG16_EXT),Q===a.SHORT&&Ce&&(he=Ce.RG16_SNORM_EXT)),S===a.RG_INTEGER&&(Q===a.UNSIGNED_BYTE&&(he=a.RG8UI),Q===a.UNSIGNED_SHORT&&(he=a.RG16UI),Q===a.UNSIGNED_INT&&(he=a.RG32UI),Q===a.BYTE&&(he=a.RG8I),Q===a.SHORT&&(he=a.RG16I),Q===a.INT&&(he=a.RG32I)),S===a.RGB_INTEGER&&(Q===a.UNSIGNED_BYTE&&(he=a.RGB8UI),Q===a.UNSIGNED_SHORT&&(he=a.RGB16UI),Q===a.UNSIGNED_INT&&(he=a.RGB32UI),Q===a.BYTE&&(he=a.RGB8I),Q===a.SHORT&&(he=a.RGB16I),Q===a.INT&&(he=a.RGB32I)),S===a.RGBA_INTEGER&&(Q===a.UNSIGNED_BYTE&&(he=a.RGBA8UI),Q===a.UNSIGNED_SHORT&&(he=a.RGBA16UI),Q===a.UNSIGNED_INT&&(he=a.RGBA32UI),Q===a.BYTE&&(he=a.RGBA8I),Q===a.SHORT&&(he=a.RGBA16I),Q===a.INT&&(he=a.RGBA32I)),S===a.RGB&&(Q===a.UNSIGNED_SHORT&&Ce&&(he=Ce.RGB16_EXT),Q===a.SHORT&&Ce&&(he=Ce.RGB16_SNORM_EXT),Q===a.UNSIGNED_INT_5_9_9_9_REV&&(he=a.RGB9_E5),Q===a.UNSIGNED_INT_10F_11F_11F_REV&&(he=a.R11F_G11F_B10F)),S===a.RGBA){const me=Me?Hl:wt.getTransfer(pe);Q===a.FLOAT&&(he=a.RGBA32F),Q===a.HALF_FLOAT&&(he=a.RGBA16F),Q===a.UNSIGNED_BYTE&&(he=me===Bt?a.SRGB8_ALPHA8:a.RGBA8),Q===a.UNSIGNED_SHORT&&Ce&&(he=Ce.RGBA16_EXT),Q===a.SHORT&&Ce&&(he=Ce.RGBA16_SNORM_EXT),Q===a.UNSIGNED_SHORT_4_4_4_4&&(he=a.RGBA4),Q===a.UNSIGNED_SHORT_5_5_5_1&&(he=a.RGB5_A1)}return(he===a.R16F||he===a.R32F||he===a.RG16F||he===a.RG32F||he===a.RGBA16F||he===a.RGBA32F)&&e.get("EXT_color_buffer_float"),he}function L(D,S){let Q;return D?S===null||S===Fi||S===$s?Q=a.DEPTH24_STENCIL8:S===Ii?Q=a.DEPTH32F_STENCIL8:S===Ys&&(Q=a.DEPTH24_STENCIL8,ct("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Fi||S===$s?Q=a.DEPTH_COMPONENT24:S===Ii?Q=a.DEPTH_COMPONENT32F:S===Ys&&(Q=a.DEPTH_COMPONENT16),Q}function R(D,S){return v(D)===!0||D.isFramebufferTexture&&D.minFilter!==yn&&D.minFilter!==Rn?Math.log2(Math.max(S.width,S.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?S.mipmaps.length:1}function U(D){const S=D.target;S.removeEventListener("dispose",U),I(S),S.isVideoTexture&&_.delete(S),S.isHTMLTexture&&y.delete(S)}function E(D){const S=D.target;S.removeEventListener("dispose",E),X(S)}function I(D){const S=r.get(D);if(S.__webglInit===void 0)return;const Q=D.source,oe=M.get(Q);if(oe){const pe=oe[S.__cacheKey];pe.usedTimes--,pe.usedTimes===0&&O(D),Object.keys(oe).length===0&&M.delete(Q)}r.remove(D)}function O(D){const S=r.get(D);a.deleteTexture(S.__webglTexture);const Q=D.source,oe=M.get(Q);delete oe[S.__cacheKey],u.memory.textures--}function X(D){const S=r.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),r.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let oe=0;oe<6;oe++){if(Array.isArray(S.__webglFramebuffer[oe]))for(let pe=0;pe<S.__webglFramebuffer[oe].length;pe++)a.deleteFramebuffer(S.__webglFramebuffer[oe][pe]);else a.deleteFramebuffer(S.__webglFramebuffer[oe]);S.__webglDepthbuffer&&a.deleteRenderbuffer(S.__webglDepthbuffer[oe])}else{if(Array.isArray(S.__webglFramebuffer))for(let oe=0;oe<S.__webglFramebuffer.length;oe++)a.deleteFramebuffer(S.__webglFramebuffer[oe]);else a.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&a.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&a.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let oe=0;oe<S.__webglColorRenderbuffer.length;oe++)S.__webglColorRenderbuffer[oe]&&a.deleteRenderbuffer(S.__webglColorRenderbuffer[oe]);S.__webglDepthRenderbuffer&&a.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const Q=D.textures;for(let oe=0,pe=Q.length;oe<pe;oe++){const Me=r.get(Q[oe]);Me.__webglTexture&&(a.deleteTexture(Me.__webglTexture),u.memory.textures--),r.remove(Q[oe])}r.remove(D)}let J=0;function ne(){J=0}function j(){return J}function H(D){J=D}function ae(){const D=J;return D>=o.maxTextures&&ct("WebGLTextures: Trying to use "+(D+1)+" texture units while this GPU supports only "+o.maxTextures),J+=1,D}function W(D){const S=[];return S.push(D.wrapS),S.push(D.wrapT),S.push(D.wrapR||0),S.push(D.magFilter),S.push(D.minFilter),S.push(D.anisotropy),S.push(D.internalFormat),S.push(D.format),S.push(D.type),S.push(D.generateMipmaps),S.push(D.premultiplyAlpha),S.push(D.flipY),S.push(D.unpackAlignment),S.push(D.colorSpace),S.join()}function B(D,S){const Q=r.get(D);if(D.isVideoTexture&&V(D),D.isRenderTargetTexture===!1&&D.isExternalTexture!==!0&&D.version>0&&Q.__version!==D.version){const oe=D.image;if(oe===null)ct("WebGLRenderer: Texture marked for update but no image data found.");else if(oe.complete===!1)ct("WebGLRenderer: Texture marked for update but image is incomplete");else{Te(Q,D,S);return}}else D.isExternalTexture&&(Q.__webglTexture=D.sourceTexture?D.sourceTexture:null);n.bindTexture(a.TEXTURE_2D,Q.__webglTexture,a.TEXTURE0+S)}function z(D,S){const Q=r.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&Q.__version!==D.version){Te(Q,D,S);return}else D.isExternalTexture&&(Q.__webglTexture=D.sourceTexture?D.sourceTexture:null);n.bindTexture(a.TEXTURE_2D_ARRAY,Q.__webglTexture,a.TEXTURE0+S)}function K(D,S){const Q=r.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&Q.__version!==D.version){Te(Q,D,S);return}n.bindTexture(a.TEXTURE_3D,Q.__webglTexture,a.TEXTURE0+S)}function N(D,S){const Q=r.get(D);if(D.isCubeDepthTexture!==!0&&D.version>0&&Q.__version!==D.version){Je(Q,D,S);return}n.bindTexture(a.TEXTURE_CUBE_MAP,Q.__webglTexture,a.TEXTURE0+S)}const ee={[xd]:a.REPEAT,[tr]:a.CLAMP_TO_EDGE,[yd]:a.MIRRORED_REPEAT},xe={[yn]:a.NEAREST,[a_]:a.NEAREST_MIPMAP_NEAREST,[ol]:a.NEAREST_MIPMAP_LINEAR,[Rn]:a.LINEAR,[Uu]:a.LINEAR_MIPMAP_NEAREST,[ta]:a.LINEAR_MIPMAP_LINEAR},He={[c_]:a.NEVER,[p_]:a.ALWAYS,[u_]:a.LESS,[df]:a.LEQUAL,[d_]:a.EQUAL,[ff]:a.GEQUAL,[f_]:a.GREATER,[h_]:a.NOTEQUAL};function Ue(D,S){if(S.type===Ii&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===Rn||S.magFilter===Uu||S.magFilter===ol||S.magFilter===ta||S.minFilter===Rn||S.minFilter===Uu||S.minFilter===ol||S.minFilter===ta)&&ct("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),a.texParameteri(D,a.TEXTURE_WRAP_S,ee[S.wrapS]),a.texParameteri(D,a.TEXTURE_WRAP_T,ee[S.wrapT]),(D===a.TEXTURE_3D||D===a.TEXTURE_2D_ARRAY)&&a.texParameteri(D,a.TEXTURE_WRAP_R,ee[S.wrapR]),a.texParameteri(D,a.TEXTURE_MAG_FILTER,xe[S.magFilter]),a.texParameteri(D,a.TEXTURE_MIN_FILTER,xe[S.minFilter]),S.compareFunction&&(a.texParameteri(D,a.TEXTURE_COMPARE_MODE,a.COMPARE_REF_TO_TEXTURE),a.texParameteri(D,a.TEXTURE_COMPARE_FUNC,He[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===yn||S.minFilter!==ol&&S.minFilter!==ta||S.type===Ii&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||r.get(S).__currentAnisotropy){const Q=e.get("EXT_texture_filter_anisotropic");a.texParameterf(D,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,o.getMaxAnisotropy())),r.get(S).__currentAnisotropy=S.anisotropy}}}function We(D,S){let Q=!1;D.__webglInit===void 0&&(D.__webglInit=!0,S.addEventListener("dispose",U));const oe=S.source;let pe=M.get(oe);pe===void 0&&(pe={},M.set(oe,pe));const Me=W(S);if(Me!==D.__cacheKey){pe[Me]===void 0&&(pe[Me]={texture:a.createTexture(),usedTimes:0},u.memory.textures++,Q=!0),pe[Me].usedTimes++;const Ce=pe[D.__cacheKey];Ce!==void 0&&(pe[D.__cacheKey].usedTimes--,Ce.usedTimes===0&&O(S)),D.__cacheKey=Me,D.__webglTexture=pe[Me].texture}return Q}function le(D,S,Q){return Math.floor(Math.floor(D/Q)/S)}function fe(D,S,Q,oe){const Me=D.updateRanges;if(Me.length===0)n.texSubImage2D(a.TEXTURE_2D,0,0,0,S.width,S.height,Q,oe,S.data);else{Me.sort((qe,Re)=>qe.start-Re.start);let Ce=0;for(let qe=1;qe<Me.length;qe++){const Re=Me[Ce],Pe=Me[qe],Qe=Re.start+Re.count,rt=le(Pe.start,S.width,4),ot=le(Re.start,S.width,4);Pe.start<=Qe+1&&rt===ot&&le(Pe.start+Pe.count-1,S.width,4)===rt?Re.count=Math.max(Re.count,Pe.start+Pe.count-Re.start):(++Ce,Me[Ce]=Pe)}Me.length=Ce+1;const he=n.getParameter(a.UNPACK_ROW_LENGTH),me=n.getParameter(a.UNPACK_SKIP_PIXELS),we=n.getParameter(a.UNPACK_SKIP_ROWS);n.pixelStorei(a.UNPACK_ROW_LENGTH,S.width);for(let qe=0,Re=Me.length;qe<Re;qe++){const Pe=Me[qe],Qe=Math.floor(Pe.start/4),rt=Math.ceil(Pe.count/4),ot=Qe%S.width,Y=Math.floor(Qe/S.width),Ne=rt,ge=1;n.pixelStorei(a.UNPACK_SKIP_PIXELS,ot),n.pixelStorei(a.UNPACK_SKIP_ROWS,Y),n.texSubImage2D(a.TEXTURE_2D,0,ot,Y,Ne,ge,Q,oe,S.data)}D.clearUpdateRanges(),n.pixelStorei(a.UNPACK_ROW_LENGTH,he),n.pixelStorei(a.UNPACK_SKIP_PIXELS,me),n.pixelStorei(a.UNPACK_SKIP_ROWS,we)}}function Te(D,S,Q){let oe=a.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(oe=a.TEXTURE_2D_ARRAY),S.isData3DTexture&&(oe=a.TEXTURE_3D);const pe=We(D,S),Me=S.source;n.bindTexture(oe,D.__webglTexture,a.TEXTURE0+Q);const Ce=r.get(Me);if(Me.version!==Ce.__version||pe===!0){if(n.activeTexture(a.TEXTURE0+Q),(typeof ImageBitmap<"u"&&S.image instanceof ImageBitmap)===!1){const ge=wt.getPrimaries(wt.workingColorSpace),Ie=S.colorSpace===Pr?null:wt.getPrimaries(S.colorSpace),ze=S.colorSpace===Pr||ge===Ie?a.NONE:a.BROWSER_DEFAULT_WEBGL;n.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,ze)}n.pixelStorei(a.UNPACK_ALIGNMENT,S.unpackAlignment);let me=x(S.image,!1,o.maxTextureSize);me=Ut(S,me);const we=l.convert(S.format,S.colorSpace),qe=l.convert(S.type);let Re=b(S.internalFormat,we,qe,S.normalized,S.colorSpace,S.isVideoTexture);Ue(oe,S);let Pe;const Qe=S.mipmaps,rt=S.isVideoTexture!==!0,ot=Ce.__version===void 0||pe===!0,Y=Me.dataReady,Ne=R(S,me);if(S.isDepthTexture)Re=L(S.format===na,S.type),ot&&(rt?n.texStorage2D(a.TEXTURE_2D,1,Re,me.width,me.height):n.texImage2D(a.TEXTURE_2D,0,Re,me.width,me.height,0,we,qe,null));else if(S.isDataTexture)if(Qe.length>0){rt&&ot&&n.texStorage2D(a.TEXTURE_2D,Ne,Re,Qe[0].width,Qe[0].height);for(let ge=0,Ie=Qe.length;ge<Ie;ge++)Pe=Qe[ge],rt?Y&&n.texSubImage2D(a.TEXTURE_2D,ge,0,0,Pe.width,Pe.height,we,qe,Pe.data):n.texImage2D(a.TEXTURE_2D,ge,Re,Pe.width,Pe.height,0,we,qe,Pe.data);S.generateMipmaps=!1}else rt?(ot&&n.texStorage2D(a.TEXTURE_2D,Ne,Re,me.width,me.height),Y&&fe(S,me,we,qe)):n.texImage2D(a.TEXTURE_2D,0,Re,me.width,me.height,0,we,qe,me.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){rt&&ot&&n.texStorage3D(a.TEXTURE_2D_ARRAY,Ne,Re,Qe[0].width,Qe[0].height,me.depth);for(let ge=0,Ie=Qe.length;ge<Ie;ge++)if(Pe=Qe[ge],S.format!==Ei)if(we!==null)if(rt){if(Y)if(S.layerUpdates.size>0){const ze=Pm(Pe.width,Pe.height,S.format,S.type);for(const _e of S.layerUpdates){const tt=Pe.data.subarray(_e*ze/Pe.data.BYTES_PER_ELEMENT,(_e+1)*ze/Pe.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,ge,0,0,_e,Pe.width,Pe.height,1,we,tt)}}else n.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,ge,0,0,0,Pe.width,Pe.height,me.depth,we,Pe.data)}else n.compressedTexImage3D(a.TEXTURE_2D_ARRAY,ge,Re,Pe.width,Pe.height,me.depth,0,Pe.data,0,0);else ct("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else rt?Y&&n.texSubImage3D(a.TEXTURE_2D_ARRAY,ge,0,0,0,Pe.width,Pe.height,me.depth,we,qe,Pe.data):n.texImage3D(a.TEXTURE_2D_ARRAY,ge,Re,Pe.width,Pe.height,me.depth,0,we,qe,Pe.data);S.layerUpdates.size>0&&S.clearLayerUpdates()}else{rt&&ot&&n.texStorage2D(a.TEXTURE_2D,Ne,Re,Qe[0].width,Qe[0].height);for(let ge=0,Ie=Qe.length;ge<Ie;ge++)Pe=Qe[ge],S.format!==Ei?we!==null?rt?Y&&n.compressedTexSubImage2D(a.TEXTURE_2D,ge,0,0,Pe.width,Pe.height,we,Pe.data):n.compressedTexImage2D(a.TEXTURE_2D,ge,Re,Pe.width,Pe.height,0,Pe.data):ct("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):rt?Y&&n.texSubImage2D(a.TEXTURE_2D,ge,0,0,Pe.width,Pe.height,we,qe,Pe.data):n.texImage2D(a.TEXTURE_2D,ge,Re,Pe.width,Pe.height,0,we,qe,Pe.data)}else if(S.isDataArrayTexture)if(rt){if(ot&&n.texStorage3D(a.TEXTURE_2D_ARRAY,Ne,Re,me.width,me.height,me.depth),Y)if(S.layerUpdates.size>0){const ge=Pm(me.width,me.height,S.format,S.type);for(const Ie of S.layerUpdates){const ze=me.data.subarray(Ie*ge/me.data.BYTES_PER_ELEMENT,(Ie+1)*ge/me.data.BYTES_PER_ELEMENT);n.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,Ie,me.width,me.height,1,we,qe,ze)}S.clearLayerUpdates()}else n.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,0,me.width,me.height,me.depth,we,qe,me.data)}else n.texImage3D(a.TEXTURE_2D_ARRAY,0,Re,me.width,me.height,me.depth,0,we,qe,me.data);else if(S.isData3DTexture)rt?(ot&&n.texStorage3D(a.TEXTURE_3D,Ne,Re,me.width,me.height,me.depth),Y&&n.texSubImage3D(a.TEXTURE_3D,0,0,0,0,me.width,me.height,me.depth,we,qe,me.data)):n.texImage3D(a.TEXTURE_3D,0,Re,me.width,me.height,me.depth,0,we,qe,me.data);else if(S.isFramebufferTexture){if(ot)if(rt)n.texStorage2D(a.TEXTURE_2D,Ne,Re,me.width,me.height);else{let ge=me.width,Ie=me.height;for(let ze=0;ze<Ne;ze++)n.texImage2D(a.TEXTURE_2D,ze,Re,ge,Ie,0,we,qe,null),ge>>=1,Ie>>=1}}else if(S.isHTMLTexture){if("texElementImage2D"in a){const ge=a.canvas;if(ge.hasAttribute("layoutsubtree")||ge.setAttribute("layoutsubtree","true"),me.parentNode!==ge){ge.appendChild(me),y.add(S),ge.onpaint=Ie=>{const ze=Ie.changedElements;for(const _e of y)ze.includes(_e.image)&&(_e.needsUpdate=!0)},ge.requestPaint();return}if(a.texElementImage2D.length===3)a.texElementImage2D(a.TEXTURE_2D,a.RGBA8,me);else{const ze=a.RGBA,_e=a.RGBA,tt=a.UNSIGNED_BYTE;a.texElementImage2D(a.TEXTURE_2D,0,ze,_e,tt,me)}a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MIN_FILTER,a.LINEAR),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_S,a.CLAMP_TO_EDGE),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_T,a.CLAMP_TO_EDGE)}}else if(Qe.length>0){if(rt&&ot){const ge=_t(Qe[0]);n.texStorage2D(a.TEXTURE_2D,Ne,Re,ge.width,ge.height)}for(let ge=0,Ie=Qe.length;ge<Ie;ge++)Pe=Qe[ge],rt?Y&&n.texSubImage2D(a.TEXTURE_2D,ge,0,0,we,qe,Pe):n.texImage2D(a.TEXTURE_2D,ge,Re,we,qe,Pe);S.generateMipmaps=!1}else if(rt){if(ot){const ge=_t(me);n.texStorage2D(a.TEXTURE_2D,Ne,Re,ge.width,ge.height)}Y&&n.texSubImage2D(a.TEXTURE_2D,0,0,0,we,qe,me)}else n.texImage2D(a.TEXTURE_2D,0,Re,we,qe,me);v(S)&&C(oe),Ce.__version=Me.version,S.onUpdate&&S.onUpdate(S)}D.__version=S.version}function Je(D,S,Q){if(S.image.length!==6)return;const oe=We(D,S),pe=S.source;n.bindTexture(a.TEXTURE_CUBE_MAP,D.__webglTexture,a.TEXTURE0+Q);const Me=r.get(pe);if(pe.version!==Me.__version||oe===!0){n.activeTexture(a.TEXTURE0+Q);const Ce=wt.getPrimaries(wt.workingColorSpace),he=S.colorSpace===Pr?null:wt.getPrimaries(S.colorSpace),me=S.colorSpace===Pr||Ce===he?a.NONE:a.BROWSER_DEFAULT_WEBGL;n.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(a.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);const we=S.isCompressedTexture||S.image[0].isCompressedTexture,qe=S.image[0]&&S.image[0].isDataTexture,Re=[];for(let _e=0;_e<6;_e++)!we&&!qe?Re[_e]=x(S.image[_e],!0,o.maxCubemapSize):Re[_e]=qe?S.image[_e].image:S.image[_e],Re[_e]=Ut(S,Re[_e]);const Pe=Re[0],Qe=l.convert(S.format,S.colorSpace),rt=l.convert(S.type),ot=b(S.internalFormat,Qe,rt,S.normalized,S.colorSpace),Y=S.isVideoTexture!==!0,Ne=Me.__version===void 0||oe===!0,ge=pe.dataReady;let Ie=R(S,Pe);Ue(a.TEXTURE_CUBE_MAP,S);let ze;if(we){Y&&Ne&&n.texStorage2D(a.TEXTURE_CUBE_MAP,Ie,ot,Pe.width,Pe.height);for(let _e=0;_e<6;_e++){ze=Re[_e].mipmaps;for(let tt=0;tt<ze.length;tt++){const $e=ze[tt];S.format!==Ei?Qe!==null?Y?ge&&n.compressedTexSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+_e,tt,0,0,$e.width,$e.height,Qe,$e.data):n.compressedTexImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+_e,tt,ot,$e.width,$e.height,0,$e.data):ct("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Y?ge&&n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+_e,tt,0,0,$e.width,$e.height,Qe,rt,$e.data):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+_e,tt,ot,$e.width,$e.height,0,Qe,rt,$e.data)}}}else{if(ze=S.mipmaps,Y&&Ne){ze.length>0&&Ie++;const _e=_t(Re[0]);n.texStorage2D(a.TEXTURE_CUBE_MAP,Ie,ot,_e.width,_e.height)}for(let _e=0;_e<6;_e++)if(qe){Y?ge&&n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,Re[_e].width,Re[_e].height,Qe,rt,Re[_e].data):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,ot,Re[_e].width,Re[_e].height,0,Qe,rt,Re[_e].data);for(let tt=0;tt<ze.length;tt++){const Lt=ze[tt].image[_e].image;Y?ge&&n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+_e,tt+1,0,0,Lt.width,Lt.height,Qe,rt,Lt.data):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+_e,tt+1,ot,Lt.width,Lt.height,0,Qe,rt,Lt.data)}}else{Y?ge&&n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,Qe,rt,Re[_e]):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,ot,Qe,rt,Re[_e]);for(let tt=0;tt<ze.length;tt++){const $e=ze[tt];Y?ge&&n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+_e,tt+1,0,0,Qe,rt,$e.image[_e]):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+_e,tt+1,ot,Qe,rt,$e.image[_e])}}}v(S)&&C(a.TEXTURE_CUBE_MAP),Me.__version=pe.version,S.onUpdate&&S.onUpdate(S)}D.__version=S.version}function Be(D,S,Q,oe,pe,Me){const Ce=l.convert(Q.format,Q.colorSpace),he=l.convert(Q.type),me=b(Q.internalFormat,Ce,he,Q.normalized,Q.colorSpace),we=r.get(S),qe=r.get(Q);if(qe.__renderTarget=S,!we.__hasExternalTextures){const Re=Math.max(1,S.width>>Me),Pe=Math.max(1,S.height>>Me);pe===a.TEXTURE_3D||pe===a.TEXTURE_2D_ARRAY?n.texImage3D(pe,Me,me,Re,Pe,S.depth,0,Ce,he,null):n.texImage2D(pe,Me,me,Re,Pe,0,Ce,he,null)}n.bindFramebuffer(a.FRAMEBUFFER,D),it(S)?f.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,oe,pe,qe.__webglTexture,0,be(S)):(pe===a.TEXTURE_2D||pe>=a.TEXTURE_CUBE_MAP_POSITIVE_X&&pe<=a.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&a.framebufferTexture2D(a.FRAMEBUFFER,oe,pe,qe.__webglTexture,Me),n.bindFramebuffer(a.FRAMEBUFFER,null)}function dt(D,S,Q){if(a.bindRenderbuffer(a.RENDERBUFFER,D),S.depthBuffer){const oe=S.depthTexture,pe=oe&&oe.isDepthTexture?oe.type:null,Me=L(S.stencilBuffer,pe),Ce=S.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;it(S)?f.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,be(S),Me,S.width,S.height):Q?a.renderbufferStorageMultisample(a.RENDERBUFFER,be(S),Me,S.width,S.height):a.renderbufferStorage(a.RENDERBUFFER,Me,S.width,S.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,Ce,a.RENDERBUFFER,D)}else{const oe=S.textures;for(let pe=0;pe<oe.length;pe++){const Me=oe[pe],Ce=l.convert(Me.format,Me.colorSpace),he=l.convert(Me.type),me=b(Me.internalFormat,Ce,he,Me.normalized,Me.colorSpace);it(S)?f.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,be(S),me,S.width,S.height):Q?a.renderbufferStorageMultisample(a.RENDERBUFFER,be(S),me,S.width,S.height):a.renderbufferStorage(a.RENDERBUFFER,me,S.width,S.height)}}a.bindRenderbuffer(a.RENDERBUFFER,null)}function Ht(D,S,Q){const oe=S.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(a.FRAMEBUFFER,D),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const pe=r.get(S.depthTexture);if(pe.__renderTarget=S,(!pe.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),oe){if(pe.__webglInit===void 0&&(pe.__webglInit=!0,S.depthTexture.addEventListener("dispose",U)),pe.__webglTexture===void 0){pe.__webglTexture=a.createTexture(),n.bindTexture(a.TEXTURE_CUBE_MAP,pe.__webglTexture),Ue(a.TEXTURE_CUBE_MAP,S.depthTexture);const we=l.convert(S.depthTexture.format),qe=l.convert(S.depthTexture.type);let Re;S.depthTexture.format===rr?Re=a.DEPTH_COMPONENT24:S.depthTexture.format===na&&(Re=a.DEPTH24_STENCIL8);for(let Pe=0;Pe<6;Pe++)a.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0,Re,S.width,S.height,0,we,qe,null)}}else B(S.depthTexture,0);const Me=pe.__webglTexture,Ce=be(S),he=oe?a.TEXTURE_CUBE_MAP_POSITIVE_X+Q:a.TEXTURE_2D,me=S.depthTexture.format===na?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;if(S.depthTexture.format===rr)it(S)?f.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,me,he,Me,0,Ce):a.framebufferTexture2D(a.FRAMEBUFFER,me,he,Me,0);else if(S.depthTexture.format===na)it(S)?f.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,me,he,Me,0,Ce):a.framebufferTexture2D(a.FRAMEBUFFER,me,he,Me,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ft(D){const S=r.get(D),Q=D.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==D.depthTexture){const oe=D.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),oe){const pe=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,oe.removeEventListener("dispose",pe)};oe.addEventListener("dispose",pe),S.__depthDisposeCallback=pe}S.__boundDepthTexture=oe}if(D.depthTexture&&!S.__autoAllocateDepthBuffer)if(Q)for(let oe=0;oe<6;oe++)Ht(S.__webglFramebuffer[oe],D,oe);else{const oe=D.texture.mipmaps;oe&&oe.length>0?Ht(S.__webglFramebuffer[0],D,0):Ht(S.__webglFramebuffer,D,0)}else if(Q){S.__webglDepthbuffer=[];for(let oe=0;oe<6;oe++)if(n.bindFramebuffer(a.FRAMEBUFFER,S.__webglFramebuffer[oe]),S.__webglDepthbuffer[oe]===void 0)S.__webglDepthbuffer[oe]=a.createRenderbuffer(),dt(S.__webglDepthbuffer[oe],D,!1);else{const pe=D.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,Me=S.__webglDepthbuffer[oe];a.bindRenderbuffer(a.RENDERBUFFER,Me),a.framebufferRenderbuffer(a.FRAMEBUFFER,pe,a.RENDERBUFFER,Me)}}else{const oe=D.texture.mipmaps;if(oe&&oe.length>0?n.bindFramebuffer(a.FRAMEBUFFER,S.__webglFramebuffer[0]):n.bindFramebuffer(a.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=a.createRenderbuffer(),dt(S.__webglDepthbuffer,D,!1);else{const pe=D.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,Me=S.__webglDepthbuffer;a.bindRenderbuffer(a.RENDERBUFFER,Me),a.framebufferRenderbuffer(a.FRAMEBUFFER,pe,a.RENDERBUFFER,Me)}}n.bindFramebuffer(a.FRAMEBUFFER,null)}function St(D,S,Q){const oe=r.get(D);S!==void 0&&Be(oe.__webglFramebuffer,D,D.texture,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,0),Q!==void 0&&ft(D)}function Pt(D){const S=D.texture,Q=r.get(D),oe=r.get(S);D.addEventListener("dispose",E);const pe=D.textures,Me=D.isWebGLCubeRenderTarget===!0,Ce=pe.length>1;if(Ce||(oe.__webglTexture===void 0&&(oe.__webglTexture=a.createTexture()),oe.__version=S.version,u.memory.textures++),Me){Q.__webglFramebuffer=[];for(let he=0;he<6;he++)if(S.mipmaps&&S.mipmaps.length>0){Q.__webglFramebuffer[he]=[];for(let me=0;me<S.mipmaps.length;me++)Q.__webglFramebuffer[he][me]=a.createFramebuffer()}else Q.__webglFramebuffer[he]=a.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){Q.__webglFramebuffer=[];for(let he=0;he<S.mipmaps.length;he++)Q.__webglFramebuffer[he]=a.createFramebuffer()}else Q.__webglFramebuffer=a.createFramebuffer();if(Ce)for(let he=0,me=pe.length;he<me;he++){const we=r.get(pe[he]);we.__webglTexture===void 0&&(we.__webglTexture=a.createTexture(),u.memory.textures++)}if(D.samples>0&&it(D)===!1){Q.__webglMultisampledFramebuffer=a.createFramebuffer(),Q.__webglColorRenderbuffer=[],n.bindFramebuffer(a.FRAMEBUFFER,Q.__webglMultisampledFramebuffer);for(let he=0;he<pe.length;he++){const me=pe[he];Q.__webglColorRenderbuffer[he]=a.createRenderbuffer(),a.bindRenderbuffer(a.RENDERBUFFER,Q.__webglColorRenderbuffer[he]);const we=l.convert(me.format,me.colorSpace),qe=l.convert(me.type),Re=b(me.internalFormat,we,qe,me.normalized,me.colorSpace,D.isXRRenderTarget===!0),Pe=be(D);a.renderbufferStorageMultisample(a.RENDERBUFFER,Pe,Re,D.width,D.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+he,a.RENDERBUFFER,Q.__webglColorRenderbuffer[he])}a.bindRenderbuffer(a.RENDERBUFFER,null),D.depthBuffer&&(Q.__webglDepthRenderbuffer=a.createRenderbuffer(),dt(Q.__webglDepthRenderbuffer,D,!0)),n.bindFramebuffer(a.FRAMEBUFFER,null)}}if(Me){n.bindTexture(a.TEXTURE_CUBE_MAP,oe.__webglTexture),Ue(a.TEXTURE_CUBE_MAP,S);for(let he=0;he<6;he++)if(S.mipmaps&&S.mipmaps.length>0)for(let me=0;me<S.mipmaps.length;me++)Be(Q.__webglFramebuffer[he][me],D,S,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+he,me);else Be(Q.__webglFramebuffer[he],D,S,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+he,0);v(S)&&C(a.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Ce){for(let he=0,me=pe.length;he<me;he++){const we=pe[he],qe=r.get(we);let Re=a.TEXTURE_2D;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Re=D.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),n.bindTexture(Re,qe.__webglTexture),Ue(Re,we),Be(Q.__webglFramebuffer,D,we,a.COLOR_ATTACHMENT0+he,Re,0),v(we)&&C(Re)}n.unbindTexture()}else{let he=a.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(he=D.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),n.bindTexture(he,oe.__webglTexture),Ue(he,S),S.mipmaps&&S.mipmaps.length>0)for(let me=0;me<S.mipmaps.length;me++)Be(Q.__webglFramebuffer[me],D,S,a.COLOR_ATTACHMENT0,he,me);else Be(Q.__webglFramebuffer,D,S,a.COLOR_ATTACHMENT0,he,0);v(S)&&C(he),n.unbindTexture()}D.depthBuffer&&ft(D)}function pt(D){const S=D.textures;for(let Q=0,oe=S.length;Q<oe;Q++){const pe=S[Q];if(v(pe)){const Me=F(D),Ce=r.get(pe).__webglTexture;n.bindTexture(Me,Ce),C(Me),n.unbindTexture()}}}const Ot=[],ve=[];function Le(D){if(D.samples>0){if(it(D)===!1){const S=D.textures,Q=D.width,oe=D.height;let pe=a.COLOR_BUFFER_BIT;const Me=D.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,Ce=r.get(D),he=S.length>1;if(he)for(let we=0;we<S.length;we++)n.bindFramebuffer(a.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+we,a.RENDERBUFFER,null),n.bindFramebuffer(a.FRAMEBUFFER,Ce.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+we,a.TEXTURE_2D,null,0);n.bindFramebuffer(a.READ_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer);const me=D.texture.mipmaps;me&&me.length>0?n.bindFramebuffer(a.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer[0]):n.bindFramebuffer(a.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer);for(let we=0;we<S.length;we++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(pe|=a.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(pe|=a.STENCIL_BUFFER_BIT)),he){a.framebufferRenderbuffer(a.READ_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.RENDERBUFFER,Ce.__webglColorRenderbuffer[we]);const qe=r.get(S[we]).__webglTexture;a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,qe,0)}a.blitFramebuffer(0,0,Q,oe,0,0,Q,oe,pe,a.NEAREST),h===!0&&(Ot.length=0,ve.length=0,Ot.push(a.COLOR_ATTACHMENT0+we),D.depthBuffer&&D.storeMultisampledDepthBuffer===!1&&(Ot.push(Me),ve.push(Me),a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,ve)),a.invalidateFramebuffer(a.READ_FRAMEBUFFER,Ot))}if(n.bindFramebuffer(a.READ_FRAMEBUFFER,null),n.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),he)for(let we=0;we<S.length;we++){n.bindFramebuffer(a.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+we,a.RENDERBUFFER,Ce.__webglColorRenderbuffer[we]);const qe=r.get(S[we]).__webglTexture;n.bindFramebuffer(a.FRAMEBUFFER,Ce.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+we,a.TEXTURE_2D,qe,0)}n.bindFramebuffer(a.DRAW_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.storeMultisampledDepthBuffer===!1&&h){const S=D.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,[S])}}}function be(D){return Math.min(o.maxSamples,D.samples)}function it(D){const S=r.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function V(D){const S=u.render.frame;_.get(D)!==S&&(_.set(D,S),D.update())}function Ut(D,S){const Q=D.colorSpace,oe=D.format,pe=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||Q!==Bl&&Q!==Pr&&(wt.getTransfer(Q)===Bt?(oe!==Ei||pe!==Jn)&&ct("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Dt("WebGLTextures: Unsupported texture color space:",Q)),S}function _t(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(m.width=D.naturalWidth||D.width,m.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(m.width=D.displayWidth,m.height=D.displayHeight):(m.width=D.width,m.height=D.height),m}this.allocateTextureUnit=ae,this.resetTextureUnits=ne,this.getTextureUnits=j,this.setTextureUnits=H,this.setTexture2D=B,this.setTexture2DArray=z,this.setTexture3D=K,this.setTextureCube=N,this.rebindTextures=St,this.setupRenderTarget=Pt,this.updateRenderTargetMipmap=pt,this.updateMultisampleRenderTarget=Le,this.setupDepthRenderbuffer=ft,this.setupFrameBufferTexture=Be,this.useMultisampledRTT=it,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function jE(a,e){function n(r,o=Pr){let l;const u=wt.getTransfer(o);if(r===Jn)return a.UNSIGNED_BYTE;if(r===sf)return a.UNSIGNED_SHORT_4_4_4_4;if(r===of)return a.UNSIGNED_SHORT_5_5_5_1;if(r===mg)return a.UNSIGNED_INT_5_9_9_9_REV;if(r===gg)return a.UNSIGNED_INT_10F_11F_11F_REV;if(r===hg)return a.BYTE;if(r===pg)return a.SHORT;if(r===Ys)return a.UNSIGNED_SHORT;if(r===af)return a.INT;if(r===Fi)return a.UNSIGNED_INT;if(r===Ii)return a.FLOAT;if(r===Oi)return a.HALF_FLOAT;if(r===vg)return a.ALPHA;if(r===_g)return a.RGB;if(r===Ei)return a.RGBA;if(r===rr)return a.DEPTH_COMPONENT;if(r===na)return a.DEPTH_STENCIL;if(r===xg)return a.RED;if(r===lf)return a.RED_INTEGER;if(r===aa)return a.RG;if(r===cf)return a.RG_INTEGER;if(r===uf)return a.RGBA_INTEGER;if(r===Il||r===Dl||r===Ul||r===kl)if(u===Bt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(r===Il)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Dl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Ul)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===kl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(r===Il)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Dl)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Ul)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===kl)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Sd||r===Md||r===Ed||r===Td)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(r===Sd)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Md)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Ed)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Td)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===wd||r===Ad||r===bd||r===Cd||r===Rd||r===Ol||r===Pd)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(r===wd||r===Ad)return u===Bt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(r===bd)return u===Bt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC;if(r===Cd)return l.COMPRESSED_R11_EAC;if(r===Rd)return l.COMPRESSED_SIGNED_R11_EAC;if(r===Ol)return l.COMPRESSED_RG11_EAC;if(r===Pd)return l.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===Ld||r===Nd||r===Id||r===Dd||r===Ud||r===kd||r===Fd||r===Od||r===zd||r===Bd||r===Hd||r===Vd||r===Gd||r===Wd)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(r===Ld)return u===Bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Nd)return u===Bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Id)return u===Bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Dd)return u===Bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Ud)return u===Bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===kd)return u===Bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Fd)return u===Bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Od)return u===Bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===zd)return u===Bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Bd)return u===Bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Hd)return u===Bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Vd)return u===Bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Gd)return u===Bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Wd)return u===Bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Xd||r===qd||r===jd)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(r===Xd)return u===Bt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===qd)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===jd)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Kd||r===Yd||r===zl||r===$d)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(r===Kd)return l.COMPRESSED_RED_RGTC1_EXT;if(r===Yd)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===zl)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===$d)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===$s?a.UNSIGNED_INT_24_8:a[r]!==void 0?a[r]:null}return{convert:n}}const KE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,YE=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class $E{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const r=new Pg(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,r=new zi({vertexShader:KE,fragmentShader:YE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Ft(new to(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class ZE extends sa{constructor(e,n){super();const r=this;let o=null,l=1,u=null,f="local-floor",h=1,m=null,_=null,y=null,g=null,M=null,w=null;const P=typeof XRWebGLBinding<"u",x=new $E,v={},C=n.getContextAttributes();let F=null,b=null;const L=[],R=[],U=new yt;let E=null,I=null;const O=new Zn;O.viewport=new Jt;const X=new Zn;X.viewport=new Jt;const J=[O,X],ne=new ax;let j=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(le){let fe=L[le];return fe===void 0&&(fe=new Wu,L[le]=fe),fe.getTargetRaySpace()},this.getControllerGrip=function(le){let fe=L[le];return fe===void 0&&(fe=new Wu,L[le]=fe),fe.getGripSpace()},this.getHand=function(le){let fe=L[le];return fe===void 0&&(fe=new Wu,L[le]=fe),fe.getHandSpace()};function ae(le){const fe=R.indexOf(le.inputSource);if(fe===-1)return;const Te=L[fe];Te!==void 0&&(Te.update(le.inputSource,le.frame,m||u),Te.dispatchEvent({type:le.type,data:le.inputSource}))}function W(){o.removeEventListener("select",ae),o.removeEventListener("selectstart",ae),o.removeEventListener("selectend",ae),o.removeEventListener("squeeze",ae),o.removeEventListener("squeezestart",ae),o.removeEventListener("squeezeend",ae),o.removeEventListener("end",W),o.removeEventListener("inputsourceschange",B);for(let le=0;le<L.length;le++){const fe=R[le];fe!==null&&(R[le]=null,L[le].disconnect(fe))}j=null,H=null,x.reset();for(const le in v)delete v[le];if(e.setRenderTarget(F),M=null,g=null,y=null,o=null,b=null,We.stop(),r.isPresenting=!1,e.setPixelRatio(E),e.setSize(U.width,U.height,!1),I!==null){const le=I.camera;le.fov=I.fov,le.zoom=I.zoom,le.updateProjectionMatrix(),I=null}r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(le){l=le,r.isPresenting===!0&&ct("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(le){f=le,r.isPresenting===!0&&ct("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||u},this.setReferenceSpace=function(le){m=le},this.getBaseLayer=function(){return g!==null?g:M},this.getBinding=function(){return y===null&&P&&(y=new XRWebGLBinding(o,n)),y},this.getFrame=function(){return w},this.getSession=function(){return o},this.setSession=async function(le){if(o=le,o!==null){if(F=e.getRenderTarget(),o.addEventListener("select",ae),o.addEventListener("selectstart",ae),o.addEventListener("selectend",ae),o.addEventListener("squeeze",ae),o.addEventListener("squeezestart",ae),o.addEventListener("squeezeend",ae),o.addEventListener("end",W),o.addEventListener("inputsourceschange",B),C.xrCompatible!==!0&&await n.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(U),P&&"createProjectionLayer"in XRWebGLBinding.prototype){let Te=null,Je=null,Be=null;C.depth&&(Be=C.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Te=C.stencil?na:rr,Je=C.stencil?$s:Fi);const dt={colorFormat:n.RGBA8,depthFormat:Be,scaleFactor:l};y=this.getBinding(),g=y.createProjectionLayer(dt),o.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),b=new Ti(g.textureWidth,g.textureHeight,{format:Ei,type:Jn,depthTexture:new Js(g.textureWidth,g.textureHeight,Je,void 0,void 0,void 0,void 0,void 0,void 0,Te),stencilBuffer:C.stencil,colorSpace:e.outputColorSpace,samples:C.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1,storeMultisampledDepthBuffer:g.ignoreDepthValues===!1,storeMultisampledStencilBuffer:g.ignoreDepthValues===!1})}else{const Te={antialias:C.antialias,alpha:!0,depth:C.depth,stencil:C.stencil,framebufferScaleFactor:l};M=new XRWebGLLayer(o,n,Te),o.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),b=new Ti(M.framebufferWidth,M.framebufferHeight,{format:Ei,type:Jn,colorSpace:e.outputColorSpace,stencilBuffer:C.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1,storeMultisampledDepthBuffer:M.ignoreDepthValues===!1,storeMultisampledStencilBuffer:M.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(h),m=null,u=await o.requestReferenceSpace(f),We.setContext(o),We.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function B(le){for(let fe=0;fe<le.removed.length;fe++){const Te=le.removed[fe],Je=R.indexOf(Te);Je>=0&&(R[Je]=null,L[Je].disconnect(Te))}for(let fe=0;fe<le.added.length;fe++){const Te=le.added[fe];let Je=R.indexOf(Te);if(Je===-1){for(let dt=0;dt<L.length;dt++)if(dt>=R.length){R.push(Te),Je=dt;break}else if(R[dt]===null){R[dt]=Te,Je=dt;break}if(Je===-1)break}const Be=L[Je];Be&&Be.connect(Te)}}const z=new ie,K=new ie;function N(le,fe,Te){z.setFromMatrixPosition(fe.matrixWorld),K.setFromMatrixPosition(Te.matrixWorld);const Je=z.distanceTo(K),Be=fe.projectionMatrix.elements,dt=Te.projectionMatrix.elements,Ht=Be[14]/(Be[10]-1),ft=Be[14]/(Be[10]+1),St=(Be[9]+1)/Be[5],Pt=(Be[9]-1)/Be[5],pt=(Be[8]-1)/Be[0],Ot=(dt[8]+1)/dt[0],ve=Ht*pt,Le=Ht*Ot,be=Je/(-pt+Ot),it=be*-pt;if(fe.matrixWorld.decompose(le.position,le.quaternion,le.scale),le.translateX(it),le.translateZ(be),le.matrixWorld.compose(le.position,le.quaternion,le.scale),le.matrixWorldInverse.copy(le.matrixWorld).invert(),Be[10]===-1)le.projectionMatrix.copy(fe.projectionMatrix),le.projectionMatrixInverse.copy(fe.projectionMatrixInverse);else{const V=Ht+be,Ut=ft+be,_t=ve-it,D=Le+(Je-it),S=St*ft/Ut*V,Q=Pt*ft/Ut*V;le.projectionMatrix.makePerspective(_t,D,S,Q,V,Ut),le.projectionMatrixInverse.copy(le.projectionMatrix).invert()}}function ee(le,fe){fe===null?le.matrixWorld.copy(le.matrix):le.matrixWorld.multiplyMatrices(fe.matrixWorld,le.matrix),le.matrixWorldInverse.copy(le.matrixWorld).invert()}this.updateCamera=function(le){if(o===null)return;let fe=le.near,Te=le.far;x.texture!==null&&(x.depthNear>0&&(fe=x.depthNear),x.depthFar>0&&(Te=x.depthFar)),ne.near=X.near=O.near=fe,ne.far=X.far=O.far=Te,(j!==ne.near||H!==ne.far)&&(o.updateRenderState({depthNear:ne.near,depthFar:ne.far}),j=ne.near,H=ne.far),ne.layers.mask=le.layers.mask|6,O.layers.mask=ne.layers.mask&-5,X.layers.mask=ne.layers.mask&-3;const Je=le.parent,Be=ne.cameras;ee(ne,Je);for(let dt=0;dt<Be.length;dt++)ee(Be[dt],Je);Be.length===2?N(ne,O,X):ne.projectionMatrix.copy(O.projectionMatrix),I===null&&le.isPerspectiveCamera&&(I={camera:le,fov:le.fov,zoom:le.zoom}),xe(le,ne,Je)};function xe(le,fe,Te){Te===null?le.matrix.copy(fe.matrixWorld):(le.matrix.copy(Te.matrixWorld),le.matrix.invert(),le.matrix.multiply(fe.matrixWorld)),le.matrix.decompose(le.position,le.quaternion,le.scale),le.updateMatrixWorld(!0),le.projectionMatrix.copy(fe.projectionMatrix),le.projectionMatrixInverse.copy(fe.projectionMatrixInverse),le.isPerspectiveCamera&&(le.fov=Jd*2*Math.atan(1/le.projectionMatrix.elements[5]),le.zoom=1)}this.getCamera=function(){return ne},this.getFoveation=function(){if(!(g===null&&M===null))return h},this.setFoveation=function(le){h=le,g!==null&&(g.fixedFoveation=le),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=le)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(ne)},this.getCameraTexture=function(le){return v[le]};let He=null;function Ue(le,fe){if(_=fe.getViewerPose(m||u),w=fe,_!==null){const Te=_.views;M!==null&&(e.setRenderTargetFramebuffer(b,M.framebuffer),e.setRenderTarget(b));let Je=!1;Te.length!==ne.cameras.length&&(ne.cameras.length=0,Je=!0);for(let ft=0;ft<Te.length;ft++){const St=Te[ft];let Pt=null;if(M!==null)Pt=M.getViewport(St);else{const Ot=y.getViewSubImage(g,St);Pt=Ot.viewport,ft===0&&(e.setRenderTargetTextures(b,Ot.colorTexture,Ot.depthStencilTexture),e.setRenderTarget(b))}let pt=J[ft];pt===void 0&&(pt=new Zn,pt.layers.enable(ft),pt.viewport=new Jt,J[ft]=pt),pt.matrix.fromArray(St.transform.matrix),pt.matrix.decompose(pt.position,pt.quaternion,pt.scale),pt.projectionMatrix.fromArray(St.projectionMatrix),pt.projectionMatrixInverse.copy(pt.projectionMatrix).invert(),pt.viewport.set(Pt.x,Pt.y,Pt.width,Pt.height),ft===0&&(ne.matrix.copy(pt.matrix),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale)),Je===!0&&ne.cameras.push(pt)}const Be=o.enabledFeatures;if(Be&&Be.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&P){y=r.getBinding();const ft=y.getDepthInformation(Te[0]);ft&&ft.isValid&&ft.texture&&x.init(ft,o.renderState)}if(Be&&Be.includes("camera-access")&&P){e.state.unbindTexture(),y=r.getBinding();for(let ft=0;ft<Te.length;ft++){const St=Te[ft].camera;if(St){let Pt=v[St];Pt||(Pt=new Pg,v[St]=Pt);const pt=y.getCameraImage(St);Pt.sourceTexture=pt}}}}for(let Te=0;Te<L.length;Te++){const Je=R[Te],Be=L[Te];Je!==null&&Be!==void 0&&Be.update(Je,fe,m||u)}He&&He(le,fe),fe.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:fe}),w=null}const We=new Dg;We.setAnimationLoop(Ue),this.setAnimationLoop=function(le){He=le},this.dispose=function(){}}}const JE=new Qt,Hg=new ht;Hg.set(-1,0,0,0,1,0,0,0,1);function QE(a,e){function n(x,v){x.matrixAutoUpdate===!0&&x.updateMatrix(),v.value.copy(x.matrix)}function r(x,v){v.color.getRGB(x.fogColor.value,Lg(a)),v.isFog?(x.fogNear.value=v.near,x.fogFar.value=v.far):v.isFogExp2&&(x.fogDensity.value=v.density)}function o(x,v,C,F,b){v.isNodeMaterial?v.uniformsNeedUpdate=!1:v.isMeshBasicMaterial?l(x,v):v.isMeshLambertMaterial?(l(x,v),v.envMap&&(x.envMapIntensity.value=v.envMapIntensity)):v.isMeshToonMaterial?(l(x,v),y(x,v)):v.isMeshPhongMaterial?(l(x,v),_(x,v),v.envMap&&(x.envMapIntensity.value=v.envMapIntensity)):v.isMeshStandardMaterial?(l(x,v),g(x,v),v.isMeshPhysicalMaterial&&M(x,v,b)):v.isMeshMatcapMaterial?(l(x,v),w(x,v)):v.isMeshDepthMaterial?l(x,v):v.isMeshDistanceMaterial?(l(x,v),P(x,v)):v.isMeshNormalMaterial?l(x,v):v.isLineBasicMaterial?(u(x,v),v.isLineDashedMaterial&&f(x,v)):v.isPointsMaterial?h(x,v,C,F):v.isSpriteMaterial?m(x,v):v.isShadowMaterial?(x.color.value.copy(v.color),x.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function l(x,v){x.opacity.value=v.opacity,v.color&&x.diffuse.value.copy(v.color),v.emissive&&x.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(x.map.value=v.map,n(v.map,x.mapTransform)),v.alphaMap&&(x.alphaMap.value=v.alphaMap,n(v.alphaMap,x.alphaMapTransform)),v.bumpMap&&(x.bumpMap.value=v.bumpMap,n(v.bumpMap,x.bumpMapTransform),x.bumpScale.value=v.bumpScale,v.side===Gn&&(x.bumpScale.value*=-1)),v.normalMap&&(x.normalMap.value=v.normalMap,n(v.normalMap,x.normalMapTransform),x.normalScale.value.copy(v.normalScale),v.side===Gn&&x.normalScale.value.negate()),v.displacementMap&&(x.displacementMap.value=v.displacementMap,n(v.displacementMap,x.displacementMapTransform),x.displacementScale.value=v.displacementScale,x.displacementBias.value=v.displacementBias),v.emissiveMap&&(x.emissiveMap.value=v.emissiveMap,n(v.emissiveMap,x.emissiveMapTransform)),v.specularMap&&(x.specularMap.value=v.specularMap,n(v.specularMap,x.specularMapTransform)),v.alphaTest>0&&(x.alphaTest.value=v.alphaTest);const C=e.get(v),F=C.envMap,b=C.envMapRotation;F&&(x.envMap.value=F,x.envMapRotation.value.setFromMatrix4(JE.makeRotationFromEuler(b)).transpose(),F.isCubeTexture&&F.isRenderTargetTexture===!1&&x.envMapRotation.value.premultiply(Hg),x.reflectivity.value=v.reflectivity,x.ior.value=v.ior,x.refractionRatio.value=v.refractionRatio),v.lightMap&&(x.lightMap.value=v.lightMap,x.lightMapIntensity.value=v.lightMapIntensity,n(v.lightMap,x.lightMapTransform)),v.aoMap&&(x.aoMap.value=v.aoMap,x.aoMapIntensity.value=v.aoMapIntensity,n(v.aoMap,x.aoMapTransform))}function u(x,v){x.diffuse.value.copy(v.color),x.opacity.value=v.opacity,v.map&&(x.map.value=v.map,n(v.map,x.mapTransform))}function f(x,v){x.dashSize.value=v.dashSize,x.totalSize.value=v.dashSize+v.gapSize,x.scale.value=v.scale}function h(x,v,C,F){x.diffuse.value.copy(v.color),x.opacity.value=v.opacity,x.size.value=v.size*C,x.scale.value=F*.5,v.map&&(x.map.value=v.map,n(v.map,x.uvTransform)),v.alphaMap&&(x.alphaMap.value=v.alphaMap,n(v.alphaMap,x.alphaMapTransform)),v.alphaTest>0&&(x.alphaTest.value=v.alphaTest)}function m(x,v){x.diffuse.value.copy(v.color),x.opacity.value=v.opacity,x.rotation.value=v.rotation,v.map&&(x.map.value=v.map,n(v.map,x.mapTransform)),v.alphaMap&&(x.alphaMap.value=v.alphaMap,n(v.alphaMap,x.alphaMapTransform)),v.alphaTest>0&&(x.alphaTest.value=v.alphaTest)}function _(x,v){x.specular.value.copy(v.specular),x.shininess.value=Math.max(v.shininess,1e-4)}function y(x,v){v.gradientMap&&(x.gradientMap.value=v.gradientMap)}function g(x,v){x.metalness.value=v.metalness,v.metalnessMap&&(x.metalnessMap.value=v.metalnessMap,n(v.metalnessMap,x.metalnessMapTransform)),x.roughness.value=v.roughness,v.roughnessMap&&(x.roughnessMap.value=v.roughnessMap,n(v.roughnessMap,x.roughnessMapTransform)),v.envMap&&(x.envMapIntensity.value=v.envMapIntensity)}function M(x,v,C){x.ior.value=v.ior,v.sheen>0&&(x.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),x.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(x.sheenColorMap.value=v.sheenColorMap,n(v.sheenColorMap,x.sheenColorMapTransform)),v.sheenRoughnessMap&&(x.sheenRoughnessMap.value=v.sheenRoughnessMap,n(v.sheenRoughnessMap,x.sheenRoughnessMapTransform))),v.clearcoat>0&&(x.clearcoat.value=v.clearcoat,x.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(x.clearcoatMap.value=v.clearcoatMap,n(v.clearcoatMap,x.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,n(v.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(x.clearcoatNormalMap.value=v.clearcoatNormalMap,n(v.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===Gn&&x.clearcoatNormalScale.value.negate())),v.dispersion>0&&(x.dispersion.value=v.dispersion),v.retroreflectivity>0&&(x.retroreflectivity.value=v.retroreflectivity),v.iridescence>0&&(x.iridescence.value=v.iridescence,x.iridescenceIOR.value=v.iridescenceIOR,x.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(x.iridescenceMap.value=v.iridescenceMap,n(v.iridescenceMap,x.iridescenceMapTransform)),v.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=v.iridescenceThicknessMap,n(v.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),v.transmission>0&&(x.transmission.value=v.transmission,x.transmissionSamplerMap.value=C.texture,x.transmissionSamplerSize.value.set(C.width,C.height),v.transmissionMap&&(x.transmissionMap.value=v.transmissionMap,n(v.transmissionMap,x.transmissionMapTransform)),x.thickness.value=v.thickness,v.thicknessMap&&(x.thicknessMap.value=v.thicknessMap,n(v.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=v.attenuationDistance,x.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(x.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(x.anisotropyMap.value=v.anisotropyMap,n(v.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=v.specularIntensity,x.specularColor.value.copy(v.specularColor),v.specularColorMap&&(x.specularColorMap.value=v.specularColorMap,n(v.specularColorMap,x.specularColorMapTransform)),v.specularIntensityMap&&(x.specularIntensityMap.value=v.specularIntensityMap,n(v.specularIntensityMap,x.specularIntensityMapTransform))}function w(x,v){v.matcap&&(x.matcap.value=v.matcap)}function P(x,v){const C=e.get(v).light;x.referencePosition.value.setFromMatrixPosition(C.matrixWorld),x.nearDistance.value=C.shadow.camera.near,x.farDistance.value=C.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function e1(a,e,n,r){let o={},l={},u=[];const f=a.getParameter(a.MAX_UNIFORM_BUFFER_BINDINGS);function h(b,L){const R=L.program;r.uniformBlockBinding(b,R)}function m(b,L){let R=o[b.id];R===void 0&&(x(b),R=_(b),o[b.id]=R,b.addEventListener("dispose",C));const U=L.program;r.updateUBOMapping(b,U);const E=e.render.frame;l[b.id]!==E&&(g(b),l[b.id]=E)}function _(b){const L=y();b.__bindingPointIndex=L;const R=a.createBuffer(),U=b.__size,E=b.usage;return a.bindBuffer(a.UNIFORM_BUFFER,R),a.bufferData(a.UNIFORM_BUFFER,U,E),a.bindBuffer(a.UNIFORM_BUFFER,null),a.bindBufferBase(a.UNIFORM_BUFFER,L,R),R}function y(){for(let b=0;b<f;b++)if(u.indexOf(b)===-1)return u.push(b),b;return Dt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(b){const L=o[b.id],R=b.uniforms,U=b.__cache;a.bindBuffer(a.UNIFORM_BUFFER,L);for(let E=0,I=R.length;E<I;E++){const O=R[E];if(Array.isArray(O))for(let X=0,J=O.length;X<J;X++)M(O[X],E,X,U);else M(O,E,0,U)}a.bindBuffer(a.UNIFORM_BUFFER,null)}function M(b,L,R,U){if(P(b,L,R,U)===!0){const E=b.__offset,I=b.value;if(Array.isArray(I)){let O=0;for(let X=0;X<I.length;X++){const J=I[X],ne=v(J);w(J,b.__data,O),typeof J!="number"&&typeof J!="boolean"&&!J.isMatrix3&&!ArrayBuffer.isView(J)&&(O+=ne.storage/Float32Array.BYTES_PER_ELEMENT)}}else w(I,b.__data,0);a.bufferSubData(a.UNIFORM_BUFFER,E,b.__data)}}function w(b,L,R){typeof b=="number"||typeof b=="boolean"?L[0]=b:b.isMatrix3?(L[0]=b.elements[0],L[1]=b.elements[1],L[2]=b.elements[2],L[3]=0,L[4]=b.elements[3],L[5]=b.elements[4],L[6]=b.elements[5],L[7]=0,L[8]=b.elements[6],L[9]=b.elements[7],L[10]=b.elements[8],L[11]=0):ArrayBuffer.isView(b)?L.set(new b.constructor(b.buffer,b.byteOffset,L.length)):b.toArray(L,R)}function P(b,L,R,U){const E=b.value,I=L+"_"+R;if(U[I]===void 0)return typeof E=="number"||typeof E=="boolean"?U[I]=E:ArrayBuffer.isView(E)?U[I]=E.slice():U[I]=E.clone(),!0;{const O=U[I];if(typeof E=="number"||typeof E=="boolean"){if(O!==E)return U[I]=E,!0}else{if(ArrayBuffer.isView(E))return!0;if(O.equals(E)===!1)return O.copy(E),!0}}return!1}function x(b){const L=b.uniforms;let R=0;const U=16;for(let I=0,O=L.length;I<O;I++){const X=Array.isArray(L[I])?L[I]:[L[I]];for(let J=0,ne=X.length;J<ne;J++){const j=X[J],H=Array.isArray(j.value)?j.value:[j.value];for(let ae=0,W=H.length;ae<W;ae++){const B=H[ae],z=v(B),K=R%U,N=K%z.boundary,ee=K+N;R+=N,ee!==0&&U-ee<z.storage&&(R+=U-ee),j.__data=new Float32Array(z.storage/Float32Array.BYTES_PER_ELEMENT),j.__offset=R,R+=z.storage}}}const E=R%U;return E>0&&(R+=U-E),b.__size=R,b.__cache={},this}function v(b){const L={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(L.boundary=4,L.storage=4):b.isVector2?(L.boundary=8,L.storage=8):b.isVector3||b.isColor?(L.boundary=16,L.storage=12):b.isVector4?(L.boundary=16,L.storage=16):b.isMatrix3?(L.boundary=48,L.storage=48):b.isMatrix4?(L.boundary=64,L.storage=64):b.isTexture?ct("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(b)?(L.boundary=16,L.storage=b.byteLength):ct("WebGLRenderer: Unsupported uniform value type.",b),L}function C(b){const L=b.target;L.removeEventListener("dispose",C);const R=u.indexOf(L.__bindingPointIndex);u.splice(R,1),a.deleteBuffer(o[L.id]),delete o[L.id],delete l[L.id]}function F(){for(const b in o)a.deleteBuffer(o[b]);u=[],o={},l={}}return{bind:h,update:m,dispose:F}}const t1=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Pi=null;function n1(){return Pi===null&&(Pi=new V_(t1,16,16,aa,Oi),Pi.name="DFG_LUT",Pi.minFilter=Rn,Pi.magFilter=Rn,Pi.wrapS=tr,Pi.wrapT=tr,Pi.generateMipmaps=!1,Pi.needsUpdate=!0),Pi}class i1{constructor(e={}){const{canvas:n=v_(),context:r=null,depth:o=!0,stencil:l=!1,alpha:u=!1,antialias:f=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:m=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:y=!1,reversedDepthBuffer:g=!1,outputBufferType:M=Jn}=e;this.isWebGLRenderer=!0;let w;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");w=r.getContextAttributes().alpha}else w=u;const P=M,x=new Set([uf,cf,lf]),v=new Set([Jn,Fi,Ys,$s,sf,of]),C=new Uint32Array(4),F=new Int32Array(4),b=new ie;let L=null,R=null;const U=[],E=[];let I=null;this.domElement=n,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ui,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const O=this;let X=!1,J=null,ne=null,j=null,H=null;this._outputColorSpace=li;let ae=0,W=0,B=null,z=-1,K=null;const N=new Jt,ee=new Jt;let xe=null;const He=new xt(0);let Ue=0,We=n.width,le=n.height,fe=1,Te=null,Je=null;const Be=new Jt(0,0,We,le),dt=new Jt(0,0,We,le);let Ht=!1;const ft=new mf;let St=!1,Pt=!1;const pt=new Qt,Ot=new ie,ve=new Jt,Le={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let be=!1;function it(){return B===null?fe:1}let V=r;function Ut(A,$){return n.getContext(A,$)}let _t,D,S,Q,oe,pe,Me,Ce,he,me,we,qe,Re,Pe,Qe,rt,ot,Y,Ne,ge,Ie,ze,_e;try{const A={alpha:!0,depth:o,stencil:l,antialias:f,premultipliedAlpha:h,preserveDrawingBuffer:m,powerPreference:_,failIfMajorPerformanceCaveat:y};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${rf}`),n.addEventListener("webglcontextlost",Lt,!1),n.addEventListener("webglcontextrestored",bt,!1),n.addEventListener("webglcontextcreationerror",vn,!1),V===null){const $="webgl2";if(V=Ut($,A),V===null)throw Ut($)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}tt()}catch(A){throw n.removeEventListener("webglcontextlost",Lt,!1),n.removeEventListener("webglcontextrestored",bt,!1),n.removeEventListener("webglcontextcreationerror",vn,!1),Dt("WebGLRenderer: "+A.message),A}function tt(){_t=new nM(V),_t.init(),Ie=new jE(V,_t),D=new qS(V,_t,e,Ie),S=new XE(V,_t),D.reversedDepthBuffer&&g&&S.buffers.depth.setReversed(!0),ne=V.createFramebuffer(),j=V.createFramebuffer(),H=V.createFramebuffer(),Q=new aM(V),oe=new LE,pe=new qE(V,_t,S,oe,D,Ie,Q),Me=new tM(O),Ce=new ox(V),ze=new WS(V,Ce),he=new iM(V,Ce,Q,ze),me=new oM(V,he,Ce,ze,Q),Y=new sM(V,D,pe),Qe=new jS(oe),we=new PE(O,Me,_t,D,ze,Qe),qe=new QE(O,oe),Re=new IE,Pe=new zE(_t),ot=new GS(O,Me,S,me,w,h),rt=new WE(O,me,D),_e=new e1(V,Q,D,S),Ne=new XS(V,_t,Q),ge=new rM(V,_t,Q),Q.programs=we.programs,O.capabilities=D,O.extensions=_t,O.properties=oe,O.renderLists=Re,O.shadowMap=rt,O.state=S,O.info=Q}P!==Jn&&(I=new cM(P,n.width,n.height,f,o,l));const $e=new ZE(O,V);this.xr=$e,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const A=_t.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=_t.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return fe},this.setPixelRatio=function(A){A!==void 0&&(fe=A,this.setSize(We,le,!1))},this.getSize=function(A){return A.set(We,le)},this.setSize=function(A,$,ue=!0){if($e.isPresenting){ct("WebGLRenderer: Can't change size while VR device is presenting.");return}We=A,le=$,n.width=Math.floor(A*fe),n.height=Math.floor($*fe),ue===!0&&(n.style.width=A+"px",n.style.height=$+"px"),I!==null&&I.setSize(n.width,n.height),this.setViewport(0,0,A,$)},this.getDrawingBufferSize=function(A){return A.set(We*fe,le*fe).floor()},this.setDrawingBufferSize=function(A,$,ue){We=A,le=$,fe=ue,n.width=Math.floor(A*ue),n.height=Math.floor($*ue),this.setViewport(0,0,A,$)},this.setEffects=function(A){if(P===Jn){Dt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let $=0;$<A.length;$++)if(A[$].isOutputPass===!0){ct("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}I.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(N)},this.getViewport=function(A){return A.copy(Be)},this.setViewport=function(A,$,ue,re){A.isVector4?Be.set(A.x,A.y,A.z,A.w):Be.set(A,$,ue,re),S.viewport(N.copy(Be).multiplyScalar(fe).round())},this.getScissor=function(A){return A.copy(dt)},this.setScissor=function(A,$,ue,re){A.isVector4?dt.set(A.x,A.y,A.z,A.w):dt.set(A,$,ue,re),S.scissor(ee.copy(dt).multiplyScalar(fe).round())},this.getScissorTest=function(){return Ht},this.setScissorTest=function(A){S.setScissorTest(Ht=A)},this.setOpaqueSort=function(A){Te=A},this.setTransparentSort=function(A){Je=A},this.getClearColor=function(A){return A.copy(ot.getClearColor())},this.setClearColor=function(){ot.setClearColor(...arguments)},this.getClearAlpha=function(){return ot.getClearAlpha()},this.setClearAlpha=function(){ot.setClearAlpha(...arguments)},this.clear=function(A=!0,$=!0,ue=!0){let re=0;if(A){let te=!1;if(B!==null){const Fe=B.texture.format;te=x.has(Fe)}if(te){const Fe=B.texture.type,De=v.has(Fe),ke=ot.getClearColor(),Ke=ot.getClearAlpha(),et=ke.r,ut=ke.g,mt=ke.b;De?(C[0]=et,C[1]=ut,C[2]=mt,C[3]=Ke,V.clearBufferuiv(V.COLOR,0,C)):(F[0]=et,F[1]=ut,F[2]=mt,F[3]=Ke,V.clearBufferiv(V.COLOR,0,F))}else re|=V.COLOR_BUFFER_BIT}$&&(re|=V.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ue&&(re|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),re!==0&&V.clear(re)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),J=A},this.dispose=function(){n.removeEventListener("webglcontextlost",Lt,!1),n.removeEventListener("webglcontextrestored",bt,!1),n.removeEventListener("webglcontextcreationerror",vn,!1),ot.dispose(),Re.dispose(),Pe.dispose(),oe.dispose(),Me.dispose(),me.dispose(),ze.dispose(),_e.dispose(),we.dispose(),$e.dispose(),$e.removeEventListener("sessionstart",no),$e.removeEventListener("sessionend",io),Ln.stop()};function Lt(A){A.preventDefault(),om("WebGLRenderer: Context Lost."),X=!0}function bt(){om("WebGLRenderer: Context Restored."),X=!1;const A=Q.autoReset,$=rt.enabled,ue=rt.autoUpdate,re=rt.needsUpdate,te=rt.type;tt(),Q.autoReset=A,rt.enabled=$,rt.autoUpdate=ue,rt.needsUpdate=re,rt.type=te}function vn(A){Dt("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Qn(A){const $=A.target;$.removeEventListener("dispose",Qn),Ir($)}function Ir(A){oa(A),oe.remove(A)}function oa(A){const $=oe.get(A).programs;$!==void 0&&($.forEach(function(ue){we.releaseProgram(ue)}),A.isShaderMaterial&&we.releaseShaderCache(A))}this.renderBufferDirect=function(A,$,ue,re,te,Fe){$===null&&($=Le);const De=te.isMesh&&te.matrixWorld.determinantAffine()<0,ke=Yt(A,$,ue,re,te);S.setMaterial(re,De);let Ke=ue.index,et=1;if(re.wireframe===!0){if(Ke=he.getWireframeAttribute(ue),Ke===void 0)return;et=2}const ut=ue.drawRange,mt=ue.attributes.position;let Xe=ut.start*et,Et=(ut.start+ut.count)*et;Fe!==null&&(Xe=Math.max(Xe,Fe.start*et),Et=Math.min(Et,(Fe.start+Fe.count)*et)),Ke!==null?(Xe=Math.max(Xe,0),Et=Math.min(Et,Ke.count)):mt!=null&&(Xe=Math.max(Xe,0),Et=Math.min(Et,mt.count));const en=Et-Xe;if(en<0||en===1/0)return;ze.setup(te,re,ke,ue,Ke);let Vt,kt=Ne;if(Ke!==null&&(Vt=Ce.get(Ke),kt=ge,kt.setIndex(Vt)),te.isMesh)re.wireframe===!0?(S.setLineWidth(re.wireframeLinewidth*it()),kt.setMode(V.LINES)):kt.setMode(V.TRIANGLES);else if(te.isLine){let ln=re.linewidth;ln===void 0&&(ln=1),S.setLineWidth(ln*it()),te.isLineSegments?kt.setMode(V.LINES):te.isLineLoop?kt.setMode(V.LINE_LOOP):kt.setMode(V.LINE_STRIP)}else te.isPoints?kt.setMode(V.POINTS):te.isSprite&&kt.setMode(V.TRIANGLES);if(te.isBatchedMesh)if(_t.get("WEBGL_multi_draw"))kt.renderMultiDraw(te._multiDrawStarts,te._multiDrawCounts,te._multiDrawCount);else{const ln=te._multiDrawStarts,Ve=te._multiDrawCounts,nn=te._multiDrawCount,Tt=Ke?Ce.get(Ke).bytesPerElement:1,Mn=oe.get(re).currentProgram.getUniforms();for(let gt=0;gt<nn;gt++)Mn.setValue(V,"_gl_DrawID",gt),kt.render(ln[gt]/Tt,Ve[gt])}else if(te.isInstancedMesh)kt.renderInstances(Xe,en,te.count);else if(ue.isInstancedBufferGeometry){const ln=ue._maxInstanceCount!==void 0?ue._maxInstanceCount:1/0,Ve=Math.min(ue.instanceCount,ln);kt.renderInstances(Xe,en,Ve)}else kt.render(Xe,en)};function Dr(A,$,ue,re){J!==null&&A.isNodeMaterial&&J.setObject(re,A),St===!0&&Qe.setState(A,ue,!1),A.transparent===!0&&A.side===er&&A.forceSinglePass===!1?(A.side=Gn,A.needsUpdate=!0,Fr(A,$,re),A.side=ia,A.needsUpdate=!0,Fr(A,$,re),A.side=er):Fr(A,$,re)}this.compile=function(A,$,ue=null){ue===null&&(ue=A),J!==null&&J.renderStart(A,$,ue),R=Pe.get(ue),R.init($),E.push(R),ue.traverseVisible(function(te){te.isLight&&te.layers.test($.layers)&&(R.pushLight(te),te.castShadow&&R.pushShadow(te))}),A!==ue&&A.traverseVisible(function(te){te.isLight&&te.layers.test($.layers)&&(R.pushLight(te),te.castShadow&&R.pushShadow(te))}),R.setupLights(),J!==null&&J.updateLights(R.state.lightsArray),Pt=this.localClippingEnabled,St=Qe.init(this.clippingPlanes,Pt),St===!0&&Qe.setGlobalState(this.clippingPlanes,$),J!==null&&rt.render(R.state.shadowsArray,ue,$);const re=new Set;return A.traverse(function(te){if(!(te.isMesh||te.isPoints||te.isLine||te.isSprite))return;const Fe=te.material;if(Fe)if(Array.isArray(Fe))for(let De=0;De<Fe.length;De++){const ke=Fe[De];Dr(ke,ue,$,te),re.add(ke)}else Dr(Fe,ue,$,te),re.add(Fe)}),R=E.pop(),J!==null&&J.renderEnd(),re},this.compileAsync=function(A,$,ue=null){const re=this.compile(A,$,ue);return new Promise(te=>{function Fe(){if(re.forEach(function(De){const Ke=oe.get(De).currentProgram;(Ke===void 0||Ke.isReady())&&re.delete(De)}),re.size===0){te(A);return}setTimeout(Fe,10)}_t.get("KHR_parallel_shader_compile")!==null?Fe():setTimeout(Fe,10)})};let Ur=null;function Zl(A){Ur&&Ur(A)}function no(){Ln.stop()}function io(){Ln.start()}const Ln=new Dg;Ln.setAnimationLoop(Zl),typeof self<"u"&&Ln.setContext(self),this.setAnimationLoop=function(A){Ur=A,$e.setAnimationLoop(A),A===null?Ln.stop():Ln.start()},$e.addEventListener("sessionstart",no),$e.addEventListener("sessionend",io),this.render=function(A,$){if($!==void 0&&$.isCamera!==!0){Dt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(X===!0)return;J!==null&&J.renderStart(A,$);const ue=$e.enabled===!0&&$e.isPresenting===!0,re=I!==null&&(B===null||ue)&&I.begin(O,B);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),$.parent===null&&$.matrixWorldAutoUpdate===!0&&$.updateMatrixWorld(),$e.enabled===!0&&$e.isPresenting===!0&&(I===null||I.isCompositing()===!1)&&($e.cameraAutoUpdate===!0&&$e.updateCamera($),$=$e.getCamera()),A.isScene===!0&&A.onBeforeRender(O,A,$,B),R=Pe.get(A,E.length),R.init($),R.state.textureUnits=pe.getTextureUnits(),E.push(R),pt.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),ft.setFromProjectionMatrix(pt,Di,$.reversedDepth),Pt=this.localClippingEnabled,St=Qe.init(this.clippingPlanes,Pt),L=Re.get(A,U.length),L.init(),U.push(L),$e.enabled===!0&&$e.isPresenting===!0){const De=O.xr.getDepthSensingMesh();De!==null&&la(De,$,-1/0,O.sortObjects)}la(A,$,0,O.sortObjects),L.finish(),J!==null&&J.updateLights(R.state.lightsArray),O.sortObjects===!0&&L.sort(Te,Je),be=$e.enabled===!1||$e.isPresenting===!1||$e.hasDepthSensing()===!1,be&&ot.addToRenderList(L,A),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),St===!0&&Qe.beginShadows();const te=R.state.shadowsArray;if(rt.render(te,A,$),St===!0&&Qe.endShadows(),(re&&I.hasRenderPass())===!1){const De=L.opaque,ke=L.transmissive;if(R.setupLights(),$.isArrayCamera){const Ke=$.cameras;if(ke.length>0)for(let et=0,ut=Ke.length;et<ut;et++){const mt=Ke[et];ro(De,ke,A,mt)}be&&ot.render(A);for(let et=0,ut=Ke.length;et<ut;et++){const mt=Ke[et];ts(L,A,mt,mt.viewport)}}else ke.length>0&&ro(De,ke,A,$),be&&ot.render(A),ts(L,A,$)}B!==null&&W===0&&(pe.updateMultisampleRenderTarget(B),pe.updateRenderTargetMipmap(B)),re&&I.end(O),A.isScene===!0&&A.onAfterRender(O,A,$),ze.resetDefaultState(),z=-1,K=null,E.pop(),E.length>0?(R=E[E.length-1],pe.setTextureUnits(R.state.textureUnits),St===!0&&Qe.setGlobalState(O.clippingPlanes,R.state.camera)):R=null,U.pop(),U.length>0?L=U[U.length-1]:L=null,J!==null&&J.renderEnd()};function la(A,$,ue,re){if(A.visible===!1)return;if(A.layers.test($.layers)){if(A.isGroup)ue=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update($);else if(A.isLightProbeGrid)R.pushLightProbeGrid(A);else if(A.isLight)R.pushLight(A),A.castShadow&&R.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||A.intersectsFrustum(ft)){re&&ve.setFromMatrixPosition(A.matrixWorld).applyMatrix4(pt);const De=me.update(A),ke=A.material;ke.visible&&L.push(A,De,ke,ue,ve.z,null,$)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||A.intersectsFrustum(ft))){const De=me.update(A),ke=A.material;if(re&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),ve.copy(A.boundingSphere.center)):(De.boundingSphere===null&&De.computeBoundingSphere(),ve.copy(De.boundingSphere.center)),ve.applyMatrix4(A.matrixWorld).applyMatrix4(pt)),Array.isArray(ke)){const Ke=De.groups;for(let et=0,ut=Ke.length;et<ut;et++){const mt=Ke[et],Xe=ke[mt.materialIndex];Xe&&Xe.visible&&L.push(A,De,Xe,ue,ve.z,mt,$)}}else ke.visible&&L.push(A,De,ke,ue,ve.z,null,$)}}const Fe=A.children;for(let De=0,ke=Fe.length;De<ke;De++)la(Fe[De],$,ue,re)}function ts(A,$,ue,re){const{opaque:te,transmissive:Fe,transparent:De}=A;R.setupLightsView(ue),St===!0&&Qe.setGlobalState(O.clippingPlanes,ue),re&&S.viewport(N.copy(re)),te.length>0&&kr(te,$,ue),Fe.length>0&&kr(Fe,$,ue),De.length>0&&kr(De,$,ue),S.buffers.depth.setTest(!0),S.buffers.depth.setMask(!0),S.buffers.color.setMask(!0),S.setPolygonOffset(!1)}function ro(A,$,ue,re){if((ue.isScene===!0?ue.overrideMaterial:null)!==null)return;if(R.state.transmissionRenderTarget[re.id]===void 0){const Xe=_t.has("EXT_color_buffer_half_float")||_t.has("EXT_color_buffer_float");R.state.transmissionRenderTarget[re.id]=new Ti(1,1,{generateMipmaps:!0,type:Xe?Oi:Jn,minFilter:ta,samples:Math.max(4,D.samples),stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:wt.workingColorSpace})}const Fe=R.state.transmissionRenderTarget[re.id],De=re.viewport||N;Fe.setSize(De.z*O.transmissionResolutionScale,De.w*O.transmissionResolutionScale);const ke=O.getRenderTarget(),Ke=O.getActiveCubeFace(),et=O.getActiveMipmapLevel();O.setRenderTarget(Fe),O.getClearColor(He),Ue=O.getClearAlpha(),Ue<1&&O.setClearColor(16777215,.5),O.clear(),be&&ot.render(ue);const ut=O.toneMapping;O.toneMapping=Ui;const mt=re.viewport;if(re.viewport!==void 0&&(re.viewport=void 0),R.setupLightsView(re),St===!0&&Qe.setGlobalState(O.clippingPlanes,re),kr(A,ue,re),pe.updateMultisampleRenderTarget(Fe),pe.updateRenderTargetMipmap(Fe),_t.has("WEBGL_multisampled_render_to_texture")===!1){let Xe=!1;for(let Et=0,en=$.length;Et<en;Et++){const Vt=$[Et],{object:kt,geometry:ln,material:Ve,group:nn}=Vt;if(Ve.side===er&&kt.layers.test(re.layers)){const Tt=Ve.side;Ve.side=Gn,Ve.needsUpdate=!0,ns(kt,ue,re,ln,Ve,nn),Ve.side=Tt,Ve.needsUpdate=!0,Xe=!0}}Xe===!0&&(pe.updateMultisampleRenderTarget(Fe),pe.updateRenderTargetMipmap(Fe))}O.setRenderTarget(ke,Ke,et),O.setClearColor(He,Ue),mt!==void 0&&(re.viewport=mt),O.toneMapping=ut}function kr(A,$,ue){const re=$.isScene===!0?$.overrideMaterial:null;for(let te=0,Fe=A.length;te<Fe;te++){const De=A[te],{object:ke,geometry:Ke,group:et}=De;let ut=De.material;ut.allowOverride===!0&&re!==null&&(ut=re),ke.layers.test(ue.layers)&&ns(ke,$,ue,Ke,ut,et)}}function ns(A,$,ue,re,te,Fe){J!==null&&te.isNodeMaterial&&J.setObject(A,te),A.onBeforeRender(O,$,ue,re,te,Fe),A.modelViewMatrix.multiplyMatrices(ue.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),te.onBeforeRender(O,$,ue,re,A,Fe),te.transparent===!0&&te.side===er&&te.forceSinglePass===!1?(te.side=Gn,te.needsUpdate=!0,O.renderBufferDirect(ue,$,re,te,A,Fe),te.side=ia,te.needsUpdate=!0,O.renderBufferDirect(ue,$,re,te,A,Fe),te.side=er):O.renderBufferDirect(ue,$,re,te,A,Fe),A.onAfterRender(O,$,ue,re,te,Fe)}function Fr(A,$,ue){$.isScene!==!0&&($=Le);const re=oe.get(A),te=R.state.lights,Fe=R.state.shadowsArray,De=te.state.version,ke=we.getParameters(A,te.state,Fe,$,ue,R.state.lightProbeGridArray),Ke=we.getProgramCacheKey(ke);let et=re.programs;re.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?$.environment:null,re.fog=$.fog;const ut=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;re.envMap=Me.get(A.envMap||re.environment,ut),re.envMapRotation=re.environment!==null&&A.envMap===null?$.environmentRotation:A.envMapRotation,et===void 0&&(A.addEventListener("dispose",Qn),et=new Map,re.programs=et);let mt=et.get(Ke);if(mt!==void 0){if(re.currentProgram===mt&&re.lightsStateVersion===De)return ao(A,ke),mt}else ke.uniforms=we.getUniforms(A),J!==null&&A.isNodeMaterial&&J.build(A,ue,ke),A.onBeforeCompile(ke,O),mt=we.acquireProgram(ke,Ke),et.set(Ke,mt),re.uniforms=ke.uniforms;const Xe=re.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Xe.clippingPlanes=Qe.uniform),ao(A,ke),re.needsLights=rs(A),re.lightsStateVersion=De,re.needsLights&&(Xe.ambientLightColor.value=te.state.ambient,Xe.lightProbe.value=te.state.probe,Xe.sunLights.value=te.state.sun,Xe.sunLightShadows.value=te.state.sunShadow,Xe.directionalLights.value=te.state.directional,Xe.directionalLightShadows.value=te.state.directionalShadow,Xe.spotLights.value=te.state.spot,Xe.spotLightShadows.value=te.state.spotShadow,Xe.rectAreaLights.value=te.state.rectArea,Xe.ltc_1.value=te.state.rectAreaLTC1,Xe.ltc_2.value=te.state.rectAreaLTC2,Xe.pointLights.value=te.state.point,Xe.pointLightShadows.value=te.state.pointShadow,Xe.hemisphereLights.value=te.state.hemi,Xe.sunShadowMatrix.value=te.state.sunShadowMatrix,Xe.sunShadowCascade.value=te.state.sunShadowCascade,Xe.directionalShadowMatrix.value=te.state.directionalShadowMatrix,Xe.spotLightMatrix.value=te.state.spotLightMatrix,Xe.spotLightMap.value=te.state.spotLightMap,Xe.pointShadowMatrix.value=te.state.pointShadowMatrix),re.lightProbeGrid=R.state.lightProbeGridArray.length>0,re.currentProgram=mt,re.uniformsList=null,mt}function is(A){if(A.uniformsList===null){const $=A.currentProgram.getUniforms();A.uniformsList=Fl.seqWithValue($.seq,A.uniforms)}return A.uniformsList}function ao(A,$){const ue=oe.get(A);ue.outputColorSpace=$.outputColorSpace,ue.batching=$.batching,ue.batchingColor=$.batchingColor,ue.instancing=$.instancing,ue.instancingColor=$.instancingColor,ue.instancingMorph=$.instancingMorph,ue.skinning=$.skinning,ue.morphTargets=$.morphTargets,ue.morphNormals=$.morphNormals,ue.morphColors=$.morphColors,ue.morphTargetsCount=$.morphTargetsCount,ue.numClippingPlanes=$.numClippingPlanes,ue.numIntersection=$.numClipIntersection,ue.vertexAlphas=$.vertexAlphas,ue.vertexTangents=$.vertexTangents,ue.toneMapping=$.toneMapping}function Jl(A,$){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;b.setFromMatrixPosition($.matrixWorld);for(let ue=0,re=A.length;ue<re;ue++){const te=A[ue];if(te.texture!==null&&te.boundingBox.containsPoint(b))return te}return null}function Yt(A,$,ue,re,te){$.isScene!==!0&&($=Le),pe.resetTextureUnits();const Fe=$.fog,De=re.isMeshStandardMaterial||re.isMeshLambertMaterial||re.isMeshPhongMaterial?$.environment:null,ke=B===null?O.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:wt.workingColorSpace,Ke=re.isMeshStandardMaterial||re.isMeshLambertMaterial&&!re.envMap||re.isMeshPhongMaterial&&!re.envMap,et=Me.get(re.envMap||De,Ke),ut=re.vertexColors===!0&&!!ue.attributes.color&&ue.attributes.color.itemSize===4,mt=!!ue.attributes.tangent&&(!!re.normalMap||re.anisotropy>0),Xe=!!ue.morphAttributes.position,Et=!!ue.morphAttributes.normal,en=!!ue.morphAttributes.color;let Vt=Ui;re.toneMapped&&(B===null||B.isXRRenderTarget===!0)&&(Vt=O.toneMapping);const kt=ue.morphAttributes.position||ue.morphAttributes.normal||ue.morphAttributes.color,ln=kt!==void 0?kt.length:0,Ve=oe.get(re),nn=R.state.lights;if(St===!0&&(Pt===!0||A!==K)){const zt=A===K&&re.id===z;Qe.setState(re,A,zt)}let Tt=!1;re.version===Ve.__version?(Ve.needsLights&&Ve.lightsStateVersion!==nn.state.version||Ve.outputColorSpace!==ke||te.isBatchedMesh&&Ve.batching===!1||!te.isBatchedMesh&&Ve.batching===!0||te.isBatchedMesh&&Ve.batchingColor===!0&&te._colorsTexture===null||te.isBatchedMesh&&Ve.batchingColor===!1&&te._colorsTexture!==null||te.isInstancedMesh&&Ve.instancing===!1||!te.isInstancedMesh&&Ve.instancing===!0||te.isSkinnedMesh&&Ve.skinning===!1||!te.isSkinnedMesh&&Ve.skinning===!0||te.isInstancedMesh&&Ve.instancingColor===!0&&te.instanceColor===null||te.isInstancedMesh&&Ve.instancingColor===!1&&te.instanceColor!==null||te.isInstancedMesh&&Ve.instancingMorph===!0&&te.morphTexture===null||te.isInstancedMesh&&Ve.instancingMorph===!1&&te.morphTexture!==null||Ve.envMap!==et||re.fog===!0&&Ve.fog!==Fe||Ve.numClippingPlanes!==void 0&&(Ve.numClippingPlanes!==Qe.numPlanes||Ve.numIntersection!==Qe.numIntersection)||Ve.vertexAlphas!==ut||Ve.vertexTangents!==mt||Ve.morphTargets!==Xe||Ve.morphNormals!==Et||Ve.morphColors!==en||Ve.toneMapping!==Vt||Ve.morphTargetsCount!==ln||!!Ve.lightProbeGrid!=R.state.lightProbeGridArray.length>0)&&(Tt=!0):(Tt=!0,Ve.__version=re.version);let Mn=Ve.currentProgram;Tt===!0&&(Mn=Fr(re,$,te),J&&re.isNodeMaterial&&J.onUpdateProgram(re,Mn,Ve));let gt=!1,ci=!1,Bi=!1;const Nt=Mn.getUniforms(),qt=Ve.uniforms;if(S.useProgram(Mn.program)&&(gt=!0,ci=!0,Bi=!0),re.id!==z&&(z=re.id,ci=!0),Ve.needsLights){const zt=Jl(R.state.lightProbeGridArray,te);Ve.lightProbeGrid!==zt&&(Ve.lightProbeGrid=zt,ci=!0)}if(gt||K!==A){S.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Nt.setValue(V,"projectionMatrix",A.projectionMatrix),Nt.setValue(V,"viewMatrix",A.matrixWorldInverse);const ei=Nt.map.cameraPosition;ei!==void 0&&ei.setValue(V,Ot.setFromMatrixPosition(A.matrixWorld)),D.logarithmicDepthBuffer&&Nt.setValue(V,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(re.isMeshPhongMaterial||re.isMeshToonMaterial||re.isMeshLambertMaterial||re.isMeshBasicMaterial||re.isMeshStandardMaterial||re.isShaderMaterial)&&Nt.setValue(V,"isOrthographic",A.isOrthographicCamera===!0),K!==A&&(K=A,ci=!0,Bi=!0)}if(Ve.needsLights&&(nn.state.sunShadowMap.length>0&&Nt.setValue(V,"sunShadowMap",nn.state.sunShadowMap,pe),nn.state.directionalShadowMap.length>0&&Nt.setValue(V,"directionalShadowMap",nn.state.directionalShadowMap,pe),nn.state.spotShadowMap.length>0&&Nt.setValue(V,"spotShadowMap",nn.state.spotShadowMap,pe),nn.state.pointShadowMap.length>0&&Nt.setValue(V,"pointShadowMap",nn.state.pointShadowMap,pe)),te.isSkinnedMesh){Nt.setOptional(V,te,"bindMatrix"),Nt.setOptional(V,te,"bindMatrixInverse");const zt=te.skeleton;zt&&(zt.boneTexture===null&&zt.computeBoneTexture(),Nt.setValue(V,"boneTexture",zt.boneTexture,pe))}te.isBatchedMesh&&(Nt.setOptional(V,te,"batchingTexture"),Nt.setValue(V,"batchingTexture",te._matricesTexture,pe),Nt.setOptional(V,te,"batchingIdTexture"),Nt.setValue(V,"batchingIdTexture",te._indirectTexture,pe),Nt.setOptional(V,te,"batchingColorTexture"),te._colorsTexture!==null&&Nt.setValue(V,"batchingColorTexture",te._colorsTexture,pe));const ui=ue.morphAttributes;if((ui.position!==void 0||ui.normal!==void 0||ui.color!==void 0)&&Y.update(te,ue,Mn),(ci||Ve.receiveShadow!==te.receiveShadow)&&(Ve.receiveShadow=te.receiveShadow,Nt.setValue(V,"receiveShadow",te.receiveShadow)),(re.isMeshStandardMaterial||re.isMeshLambertMaterial||re.isMeshPhongMaterial)&&re.envMap===null&&$.environment!==null&&(qt.envMapIntensity.value=$.environmentIntensity),qt.dfgLUT!==void 0&&(qt.dfgLUT.value=n1()),ci){if(Nt.setValue(V,"toneMappingExposure",O.toneMappingExposure),Ve.needsLights&&Ql(qt,Bi),Fe&&re.fog===!0&&qe.refreshFogUniforms(qt,Fe),qe.refreshMaterialUniforms(qt,re,fe,le,R.state.transmissionRenderTarget[A.id]),Ve.needsLights&&Ve.lightProbeGrid){const zt=Ve.lightProbeGrid;qt.probesSH.value=zt.texture,qt.probesMin.value.copy(zt.boundingBox.min),qt.probesMax.value.copy(zt.boundingBox.max),qt.probesResolution.value.copy(zt.resolution)}Fl.upload(V,is(Ve),qt,pe)}if(re.isShaderMaterial&&re.uniformsNeedUpdate===!0&&(Fl.upload(V,is(Ve),qt,pe),re.uniformsNeedUpdate=!1),re.isSpriteMaterial&&Nt.setValue(V,"center",te.center),Nt.setValue(V,"modelViewMatrix",te.modelViewMatrix),Nt.setValue(V,"normalMatrix",te.normalMatrix),Nt.setValue(V,"modelMatrix",te.matrixWorld),re.uniformsGroups!==void 0){const zt=re.uniformsGroups;for(let ei=0,di=zt.length;ei<di;ei++){const fi=zt[ei];_e.update(fi,Mn),_e.bind(fi,Mn)}}return Mn}function Ql(A,$){A.ambientLightColor.needsUpdate=$,A.lightProbe.needsUpdate=$,A.sunLights.needsUpdate=$,A.sunLightShadows.needsUpdate=$,A.directionalLights.needsUpdate=$,A.directionalLightShadows.needsUpdate=$,A.pointLights.needsUpdate=$,A.pointLightShadows.needsUpdate=$,A.spotLights.needsUpdate=$,A.spotLightShadows.needsUpdate=$,A.rectAreaLights.needsUpdate=$,A.hemisphereLights.needsUpdate=$}function rs(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return ae},this.getActiveMipmapLevel=function(){return W},this.getRenderTarget=function(){return B},this.setRenderTargetTextures=function(A,$,ue){const re=oe.get(A);re.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,re.__autoAllocateDepthBuffer===!1&&(re.__useRenderToTexture=!1),oe.get(A.texture).__webglTexture=$,oe.get(A.depthTexture).__webglTexture=re.__autoAllocateDepthBuffer?void 0:ue,re.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,$){const ue=oe.get(A);ue.__webglFramebuffer=$,ue.__useDefaultFramebuffer=$===void 0},this.setRenderTarget=function(A,$=0,ue=0){B=A,ae=$,W=ue;let re=null,te=!1,Fe=!1;if(A){const ke=oe.get(A);if(ke.__useDefaultFramebuffer!==void 0){S.bindFramebuffer(V.FRAMEBUFFER,ke.__webglFramebuffer),N.copy(A.viewport),ee.copy(A.scissor),xe=A.scissorTest,S.viewport(N),S.scissor(ee),S.setScissorTest(xe),z=-1;return}else if(ke.__webglFramebuffer===void 0)pe.setupRenderTarget(A);else if(ke.__hasExternalTextures)pe.rebindTextures(A,oe.get(A.texture).__webglTexture,oe.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const ut=A.depthTexture;if(ke.__boundDepthTexture!==ut){if(ut!==null&&oe.has(ut)&&(A.width!==ut.image.width||A.height!==ut.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");pe.setupDepthRenderbuffer(A)}}const Ke=A.texture;(Ke.isData3DTexture||Ke.isDataArrayTexture||Ke.isCompressedArrayTexture)&&(Fe=!0);const et=oe.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(et[$])?re=et[$][ue]:re=et[$],te=!0):A.samples>0&&pe.useMultisampledRTT(A)===!1?re=oe.get(A).__webglMultisampledFramebuffer:Array.isArray(et)?re=et[ue]:re=et,N.copy(A.viewport),ee.copy(A.scissor),xe=A.scissorTest}else N.copy(Be).multiplyScalar(fe).floor(),ee.copy(dt).multiplyScalar(fe).floor(),xe=Ht;if(ue!==0&&(re=ne),S.bindFramebuffer(V.FRAMEBUFFER,re)&&S.drawBuffers(A,re),S.viewport(N),S.scissor(ee),S.setScissorTest(xe),te){const ke=oe.get(A.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+$,ke.__webglTexture,ue)}else if(Fe){const ke=$;for(let Ke=0;Ke<A.textures.length;Ke++){const et=oe.get(A.textures[Ke]);V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0+Ke,et.__webglTexture,ue,ke)}}else if(A!==null&&ue!==0){const ke=oe.get(A.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,ke.__webglTexture,ue)}z=-1};function as(A){const $=oe.get(A);return($.__readFormat!==A.format||$.__readType!==A.type)&&($.__readFormat=A.format,$.__readType=A.type,$.__formatReadable=D.textureFormatReadable(A.format),$.__typeReadable=D.textureTypeReadable(A.type)),$}this.readRenderTargetPixels=function(A,$,ue,re,te,Fe,De,ke=0){if(!(A&&A.isWebGLRenderTarget)){Dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ke=oe.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&De!==void 0&&(Ke=Ke[De]),Ke){S.bindFramebuffer(V.FRAMEBUFFER,Ke);try{const et=A.textures[ke],ut=et.format,mt=et.type;A.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+ke);const Xe=as(et);if(Xe.__formatReadable===!1){Dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Xe.__typeReadable===!1){Dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}$>=0&&$<=A.width-re&&ue>=0&&ue<=A.height-te&&V.readPixels($,ue,re,te,Ie.convert(ut),Ie.convert(mt),Fe)}finally{const et=B!==null?oe.get(B).__webglFramebuffer:null;S.bindFramebuffer(V.FRAMEBUFFER,et)}}},this.readRenderTargetPixelsAsync=async function(A,$,ue,re,te,Fe,De,ke=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ke=oe.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&De!==void 0&&(Ke=Ke[De]),Ke)if($>=0&&$<=A.width-re&&ue>=0&&ue<=A.height-te){S.bindFramebuffer(V.FRAMEBUFFER,Ke);const et=A.textures[ke],ut=et.format,mt=et.type;A.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+ke);const Xe=as(et);if(Xe.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Xe.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Et=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,Et),V.bufferData(V.PIXEL_PACK_BUFFER,Fe.byteLength,V.STREAM_READ),V.readPixels($,ue,re,te,Ie.convert(ut),Ie.convert(mt),0),V.bindBuffer(V.PIXEL_PACK_BUFFER,null);const en=B!==null?oe.get(B).__webglFramebuffer:null;S.bindFramebuffer(V.FRAMEBUFFER,en);const Vt=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await __(V,Vt,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,Et),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,Fe),V.bindBuffer(V.PIXEL_PACK_BUFFER,null),V.deleteBuffer(Et),V.deleteSync(Vt),Fe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,$=null,ue=0){const re=Math.pow(2,-ue),te=Math.floor(A.image.width*re),Fe=Math.floor(A.image.height*re),De=$!==null?$.x:0,ke=$!==null?$.y:0;pe.setTexture2D(A,0),V.copyTexSubImage2D(V.TEXTURE_2D,ue,0,0,De,ke,te,Fe),S.unbindTexture()},this.copyTextureToTexture=function(A,$,ue=null,re=null,te=0,Fe=0){let De,ke,Ke,et,ut,mt,Xe,Et,en;const Vt=A.isCompressedTexture?A.mipmaps[Fe]:A.image;if(ue!==null)De=ue.max.x-ue.min.x,ke=ue.max.y-ue.min.y,Ke=ue.isBox3?ue.max.z-ue.min.z:1,et=ue.min.x,ut=ue.min.y,mt=ue.isBox3?ue.min.z:0;else{const qt=Math.pow(2,-te);De=Math.floor(Vt.width*qt),ke=Math.floor(Vt.height*qt),A.isDataArrayTexture?Ke=Vt.depth:A.isData3DTexture?Ke=Math.floor(Vt.depth*qt):Ke=1,et=0,ut=0,mt=0}re!==null?(Xe=re.x,Et=re.y,en=re.z):(Xe=0,Et=0,en=0);const kt=Ie.convert($.format),ln=Ie.convert($.type);let Ve;$.isData3DTexture?(pe.setTexture3D($,0),Ve=V.TEXTURE_3D):$.isDataArrayTexture||$.isCompressedArrayTexture?(pe.setTexture2DArray($,0),Ve=V.TEXTURE_2D_ARRAY):(pe.setTexture2D($,0),Ve=V.TEXTURE_2D),S.activeTexture(V.TEXTURE0),S.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,$.flipY),S.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),S.pixelStorei(V.UNPACK_ALIGNMENT,$.unpackAlignment);const nn=S.getParameter(V.UNPACK_ROW_LENGTH),Tt=S.getParameter(V.UNPACK_IMAGE_HEIGHT),Mn=S.getParameter(V.UNPACK_SKIP_PIXELS),gt=S.getParameter(V.UNPACK_SKIP_ROWS),ci=S.getParameter(V.UNPACK_SKIP_IMAGES);S.pixelStorei(V.UNPACK_ROW_LENGTH,Vt.width),S.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Vt.height),S.pixelStorei(V.UNPACK_SKIP_PIXELS,et),S.pixelStorei(V.UNPACK_SKIP_ROWS,ut),S.pixelStorei(V.UNPACK_SKIP_IMAGES,mt);const Bi=A.isDataArrayTexture||A.isData3DTexture,Nt=$.isDataArrayTexture||$.isData3DTexture;if(A.isDepthTexture){const qt=oe.get(A),ui=oe.get($),zt=oe.get(qt.__renderTarget),ei=oe.get(ui.__renderTarget);S.bindFramebuffer(V.READ_FRAMEBUFFER,zt.__webglFramebuffer),S.bindFramebuffer(V.DRAW_FRAMEBUFFER,ei.__webglFramebuffer);for(let di=0;di<Ke;di++)Bi&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,oe.get(A).__webglTexture,te,mt+di),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,oe.get($).__webglTexture,Fe,en+di)),V.blitFramebuffer(et,ut,De,ke,Xe,Et,De,ke,V.DEPTH_BUFFER_BIT,V.NEAREST);S.bindFramebuffer(V.READ_FRAMEBUFFER,null),S.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if(te!==0||A.isRenderTargetTexture||oe.has(A)){const qt=oe.get(A),ui=oe.get($);S.bindFramebuffer(V.READ_FRAMEBUFFER,j),S.bindFramebuffer(V.DRAW_FRAMEBUFFER,H);for(let zt=0;zt<Ke;zt++)Bi?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,qt.__webglTexture,te,mt+zt):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,qt.__webglTexture,te),Nt?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,ui.__webglTexture,Fe,en+zt):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,ui.__webglTexture,Fe),te!==0?V.blitFramebuffer(et,ut,De,ke,Xe,Et,De,ke,V.COLOR_BUFFER_BIT,V.NEAREST):Nt?V.copyTexSubImage3D(Ve,Fe,Xe,Et,en+zt,et,ut,De,ke):V.copyTexSubImage2D(Ve,Fe,Xe,Et,et,ut,De,ke);S.bindFramebuffer(V.READ_FRAMEBUFFER,null),S.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else Nt?A.isDataTexture||A.isData3DTexture?V.texSubImage3D(Ve,Fe,Xe,Et,en,De,ke,Ke,kt,ln,Vt.data):$.isCompressedArrayTexture?V.compressedTexSubImage3D(Ve,Fe,Xe,Et,en,De,ke,Ke,kt,Vt.data):V.texSubImage3D(Ve,Fe,Xe,Et,en,De,ke,Ke,kt,ln,Vt):A.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,Fe,Xe,Et,De,ke,kt,ln,Vt.data):A.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,Fe,Xe,Et,Vt.width,Vt.height,kt,Vt.data):V.texSubImage2D(V.TEXTURE_2D,Fe,Xe,Et,De,ke,kt,ln,Vt);S.pixelStorei(V.UNPACK_ROW_LENGTH,nn),S.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Tt),S.pixelStorei(V.UNPACK_SKIP_PIXELS,Mn),S.pixelStorei(V.UNPACK_SKIP_ROWS,gt),S.pixelStorei(V.UNPACK_SKIP_IMAGES,ci),Fe===0&&$.generateMipmaps&&V.generateMipmap(Ve),S.unbindTexture()},this.initRenderTarget=function(A){oe.get(A).__webglFramebuffer===void 0&&pe.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?pe.setTextureCube(A,0):A.isData3DTexture?pe.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?pe.setTexture2DArray(A,0):pe.setTexture2D(A,0),S.unbindTexture()},this.resetState=function(){ae=0,W=0,B=null,S.reset(),ze.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Di}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=wt._getDrawingBufferColorSpace(e),n.unpackColorSpace=wt._getUnpackColorSpace()}}function r1({areaId:a,areaColor:e,groundColor:n,ambientColor:r}){const o=Rt.useRef(null),l=Rt.useRef(null);return Rt.useEffect(()=>{if(!o.current)return;l.current&&(cancelAnimationFrame(l.current.animationId),l.current.renderer.dispose(),o.current.contains(l.current.renderer.domElement)&&o.current.removeChild(l.current.renderer.domElement));const u=o.current.clientWidth,f=o.current.clientHeight,h=new D_,m=new xt(r).multiplyScalar(.3);h.background=m,h.fog=new pf(m,20,60);const _=new Zn(60,u/f,.1,100);_.position.set(0,8,18),_.lookAt(0,2,0);const y=new i1({antialias:!0});y.setSize(u,f),y.setPixelRatio(Math.min(window.devicePixelRatio,2)),y.shadowMap.enabled=!0,o.current.appendChild(y.domElement);const g=new ix(r,.6);h.add(g);const M=new nx(16777215,1);M.position.set(5,10,5),M.castShadow=!0,h.add(M);const w=new ex(e,1,30);w.position.set(0,5,0),h.add(w);const P=new to(100,100),x=new on({color:n,roughness:.8,metalness:.1}),v=new Ft(P,x);v.rotation.x=-Math.PI/2,v.receiveShadow=!0,h.add(v);const C=[],F=new xt(e),b={genesis:()=>{for(let H=0;H<20;H++){const ae=new qa(.8+Math.random(),3+Math.random()*3,6),W=new on({color:2263842}),B=new Ft(ae,W);B.position.set((Math.random()-.5)*40,1.5+Math.random()*1.5,(Math.random()-.5)*40-5),B.castShadow=!0,h.add(B),C.push(B);const z=new Li(.2,.3,2,8),K=new on({color:9127187}),N=new Ft(z,K);N.position.set(B.position.x,1,B.position.z),h.add(N)}},cathedral:()=>{for(let B=0;B<12;B++){const z=B/12*Math.PI*2,K=new Li(.4,.5,8+Math.random()*4,8),N=new on({color:8947848,roughness:.5}),ee=new Ft(K,N);ee.position.set(Math.cos(z)*12,4,Math.sin(z)*12),ee.castShadow=!0,h.add(ee),C.push(ee);const xe=new Gl(.6,8,8,0,Math.PI*2,0,Math.PI/2),He=new on({color:F,emissive:F,emissiveIntensity:.3}),Ue=new Ft(xe,He);Ue.position.set(ee.position.x,8+Math.random()*2,ee.position.z),h.add(Ue)}const H=new Lr(3,1,2),ae=new on({color:14329120,metalness:.8,roughness:.2}),W=new Ft(H,ae);W.position.set(0,.5,0),h.add(W),C.push(W)},temple:()=>{for(let z=0;z<15;z++){const K=new vf(.5+Math.random()*1.5,1),N=new on({color:6710886,roughness:.9}),ee=new Ft(K,N);ee.position.set((Math.random()-.5)*30,.5,(Math.random()-.5)*30),ee.rotation.set(Math.random(),Math.random(),Math.random()),ee.castShadow=!0,h.add(ee),C.push(ee)}const H=new on({color:13369344}),ae=new Ft(new Li(.2,.2,6,8),H);ae.position.set(-2,3,-5),h.add(ae);const W=new Ft(new Li(.2,.2,6,8),H);W.position.set(2,3,-5),h.add(W);const B=new Ft(new Lr(5.5,.3,.3),H);B.position.set(0,6,-5),h.add(B)},mosque:()=>{const H=new Gl(4,16,16,0,Math.PI*2,0,Math.PI/2),ae=new on({color:2003199,metalness:.5,roughness:.3}),W=new Ft(H,ae);W.position.set(0,4,-5),h.add(W),C.push(W);for(let N=0;N<4;N++){const ee=new Li(.3,.4,10,8),xe=new on({color:15787660}),He=new Ft(ee,xe),Ue=N/4*Math.PI*2;He.position.set(Math.cos(Ue)*8,5,Math.sin(Ue)*8-5),h.add(He),C.push(He)}const B=new Wl(.5,.1,8,16,Math.PI),z=new on({color:16766720,metalness:.9}),K=new Ft(B,z);K.position.set(0,8.5,-5),K.rotation.z=Math.PI/4,h.add(K)},garden:()=>{for(let B=0;B<25;B++){const z=new Li(.1,.1,4+Math.random()*4,6),K=new on({color:2263842}),N=new Ft(z,K);N.position.set((Math.random()-.5)*30,2+Math.random()*2,(Math.random()-.5)*30),h.add(N),C.push(N)}const H=new gf(5,32),ae=new on({color:27028,metalness:.8,roughness:.1,transparent:!0,opacity:.7}),W=new Ft(H,ae);W.rotation.x=-Math.PI/2,W.position.set(5,.05,3),h.add(W)},desert:()=>{const H=new qa(5,8,4),ae=new on({color:14329120,roughness:.8}),W=new Ft(H,ae);W.position.set(-8,4,-10),W.rotation.y=Math.PI/4,h.add(W),C.push(W);for(let B=0;B<8;B++){const z=new Lr(.5,3+Math.random()*3,.5),K=new on({color:12632256}),N=new Ft(z,K);N.position.set((Math.random()-.5)*25,1.5+Math.random(),(Math.random()-.5)*25),h.add(N),C.push(N)}},mountain:()=>{for(let H=0;H<8;H++){const ae=new qa(3+Math.random()*4,8+Math.random()*8,6),W=new on({color:4868682,roughness:.9}),B=new Ft(ae,W),z=H/8*Math.PI*2;B.position.set(Math.cos(z)*15,4+Math.random()*4,Math.sin(z)*15-10),h.add(B),C.push(B)}for(let H=0;H<5;H++){const ae=new qa(1.5,2,6),W=new on({color:16777215}),B=new Ft(ae,W);B.position.set((Math.random()-.5)*20,10+Math.random()*3,(Math.random()-.5)*20-10),h.add(B)}},abyss:()=>{for(let H=0;H<20;H++){const ae=new _f(.5+Math.random()),W=new on({color:4915330,emissive:2818130,emissiveIntensity:.5,transparent:!0,opacity:.8}),B=new Ft(ae,W);B.position.set((Math.random()-.5)*30,2+Math.random()*6,(Math.random()-.5)*30),B.rotation.set(Math.random()*Math.PI,Math.random()*Math.PI,0),h.add(B),C.push(B)}},final:()=>{const H=new Li(2,3,6,8),ae=new on({color:16766720,metalness:.7,roughness:.2}),W=new Ft(H,ae);W.position.set(0,3,-5),h.add(W),C.push(W);for(let B=0;B<6;B++){const z=new Wl(1.5+B*.5,.1,8,32),K=new on({color:new xt().setHSL(B/6,.8,.5),emissive:new xt().setHSL(B/6,.8,.3),emissiveIntensity:.5}),N=new Ft(z,K);N.position.set(0,7+B*.8,-5),N.rotation.x=Math.PI/2,h.add(N),C.push(N)}}};(b[a]||b.genesis)();const R=30,U=new Pn,E=new Float32Array(R*3);for(let H=0;H<R;H++)E[H*3]=(Math.random()-.5)*40,E[H*3+1]=1+Math.random()*8,E[H*3+2]=(Math.random()-.5)*40;U.setAttribute("position",new ki(E,3));const I=new Cg({color:e,size:.3,transparent:!0,opacity:.6}),O=new W_(U,I);h.add(O);let X=0;const J=()=>{X+=.01,C.forEach((W,B)=>{W.rotation.y+=.002,W.position.y+=Math.sin(X+B*.5)*.002});const H=O.geometry.attributes.position.array;for(let W=0;W<R;W++)H[W*3+1]+=Math.sin(X*2+W)*.01,H[W*3+1]>10&&(H[W*3+1]=1);O.geometry.attributes.position.needsUpdate=!0,_.position.x=Math.sin(X*.3)*2,_.lookAt(0,2,0),w.intensity=1+Math.sin(X*2)*.3,y.render(h,_);const ae=requestAnimationFrame(J);l.current&&(l.current.animationId=ae)},ne=requestAnimationFrame(J);l.current={scene:h,camera:_,renderer:y,animationId:ne,objects:C};const j=()=>{if(!o.current)return;const H=o.current.clientWidth,ae=o.current.clientHeight;_.aspect=H/ae,_.updateProjectionMatrix(),y.setSize(H,ae)};return window.addEventListener("resize",j),()=>{var H;window.removeEventListener("resize",j),cancelAnimationFrame(ne),y.dispose(),(H=o.current)!=null&&H.contains(y.domElement)&&o.current.removeChild(y.domElement)}},[a,e,n,r]),q.jsx("div",{ref:o,className:"w-full h-64 md:h-80 rounded-lg overflow-hidden"})}function Qm(a){return{...a,currentHp:a.hp,exp:0,expToNext:a.level*20}}function a1(a){const e=a.level+1;return{...a,level:e,hp:a.hp+5,currentHp:Math.min(a.currentHp+5,a.hp+5),attack:a.attack+3,defense:a.defense+2,speed:a.speed+2,exp:a.exp-a.expToNext,expToNext:e*25}}const eg=[[{speaker:"Viandante",text:"Hai mai pensato che i kana siano come le parole di Dio? Ogni lettera è un atto creativo."},{speaker:"Viandante",text:'Nel Vangelo di Giovanni: "Tutto è stato fatto per mezzo del Verbo". I kana sono quel Verbo.'}],[{speaker:"Monaco Errante",text:'Il Buddha disse: "Non credere a nulla per il solo fatto che è stato detto." Verifica tu stesso.'},{speaker:"Monaco Errante",text:"I kana non sono ciò che sembrano. Sono vuoti di sé, pieni di possibilità."}],[{speaker:"Mercante",text:"Compro e vendo kana rari! Sai che alcuni kana valgono più di altri?"},{speaker:"Mercante",text:"Come nel capitalismo, il valore è determinato dalla domanda e dall'offerta. Ma è giusto?"}],[{speaker:"Filosofo",text:"Pensare, dunque sono. Ma i kana pensano? Se un kana cade in una foresta..."},{speaker:"Filosofo",text:"Cartesio dubitava di tutto. Ma non dubitava del dubbio stesso. Cogito ergo sum."}],[{speaker:"Mistico Sufi",text:`Rumi diceva: "Non sei una goccia nell'oceano. Sei l'intero oceano in una goccia."`},{speaker:"Mistico Sufi",text:"Ogni kana contiene l'universo intero. Come il Indra's Net del Buddismo Avatamsaka."}],[{speaker:"Rabbi Viaggiatore",text:"Il Sefer Yetzirah insegna che Dio creò il mondo con 22 lettere. I kana sono la versione giapponese."},{speaker:"Rabbi Viaggiatore",text:"Ogni combinazione di lettere crea un mondo diverso. Infinite possibilità."}],[{speaker:"Samurai",text:"Il Bushidō insegna: rettitudine, coraggio, benevolenza, rispetto, onore, lealtà, autocontrollo."},{speaker:"Samurai",text:"Un vero allenatore di kana segue questi principi. La battaglia è una questione di spirito."}],[{speaker:"Profeta",text:`Come disse Zarathustra: "L'uomo è una corda tesa tra la bestia e l'oltreuomo".`},{speaker:"Profeta",text:"I kana sono la corda. Tu sei colui che la tende. Verso quale direzione?"}],[{speaker:"Anacoreta",text:"Kierkegaard diceva che la vita può essere capita solo all'indietro, ma va vissuta in avanti."},{speaker:"Anacoreta",text:`Ogni battaglia è un salto nella fede. Un "leap of faith" verso l'ignoto.`}],[{speaker:"Attivista",text:'Marx diceva: "I filosofi hanno solo interpretato il mondo; si tratta di trasformarlo".'},{speaker:"Attivista",text:"Ma forse anche i kana meritano liberazione. Non solo cattura, ma emancipazione."}]],tg=["Il kana nemico ti guarda con sfida!","L'aria vibra di energia spirituale!","Come nel Mahabharata, la battaglia è inevitabile!","Il destino si decide in questo istante!","Ogni colpo è un karma che si compie!","La via della spada non conosce esitazione!"];function s1(){var dt,Ht,ft,St,Pt,pt,Ot;const[a,e]=Rt.useState("title"),[n,r]=Rt.useState([]),[o,l]=Rt.useState("genesis"),[u,f]=Rt.useState([]),[h,m]=Rt.useState([]),[_,y]=Rt.useState([]),[g,M]=Rt.useState([]),[w,P]=Rt.useState(0),[x,v]=Rt.useState(null),[C,F]=Rt.useState([]),[b,L]=Rt.useState(""),[R,U]=Rt.useState(0),[E,I]=Rt.useState(""),[O,X]=Rt.useState(""),[J,ne]=Rt.useState(!1),[j,H]=Rt.useState(!1),[ae,W]=Rt.useState(!1),B=Rt.useRef(null),z=Er.find(ve=>ve.id===o),K=La.find(ve=>ve.id===(z==null?void 0:z.puzzleId));Rt.useEffect(()=>()=>{B.current&&clearTimeout(B.current)},[]);const N=Rt.useCallback(()=>{e("intro"),M(Nv),P(0)},[]),ee=Rt.useCallback(ve=>{const Le=$n.find(it=>it.id===ve),be=Qm(Le);r([be]),y([ve]),e("explore"),L(`${Le.hiragana} (${Le.katakana}) si unisce a te! "${Le.description}" — Come un discepolo che segue il maestro.`)},[]),xe=Rt.useCallback(()=>{w<g.length-1?P(ve=>ve+1):a==="intro"?ne(!0):(e("explore"),M([]),P(0))},[w,g.length,a]),He=Rt.useCallback(()=>{const ve=Math.random(),Le=Er.find(be=>be.id===o);if(ve<.35){const be=Lv(o,n.length>0?n[R].level:1),it=be[Math.floor(Math.random()*be.length)],V={...it,currentHp:it.hp},Ut={...n[R]};v({playerKana:Ut,enemyKana:V,isPlayerTurn:!0,turn:1}),F([`Un ${it.hiragana} (${it.katakana}) selvatico appare! [${it.romaji}] — ${it.element}`]),e("battle"),W(!1)}else if(ve<.55&&Le.antagonist&&!u.includes(Le.antagonist)){const be=Iv[Le.antagonist];M(be),P(0),e("dialogue")}else if(ve<.7&&Le.puzzleId&&!h.includes(Le.puzzleId)){const be=em[Le.puzzleId]||em.puzzle1;M(be),P(0),e("dialogue")}else{const be=Math.floor(Math.random()*eg.length),V=[...Qp[o]||Qp.genesis,...eg[be]];M(V),P(0),e("dialogue")}},[o,n,R,u,h]),Ue=Rt.useCallback(ve=>{var Q;const{playerKana:Le,enemyKana:be}=ve,it=((Q=Jp[be.element])==null?void 0:Q[Le.element])||1,V=Math.max(1,Math.floor(be.attack*it-Le.defense*.4)),Ut=Math.max(0,Le.currentHp-V),_t=tg[Math.floor(Math.random()*tg.length)],D=[...C,`${be.hiragana} attacca! ${V} danni! ${it>1?"(Super efficace!)":""} ${_t}`];F(D);const S={...Le,currentHp:Ut};if(Ut<=0&&!n.some((pe,Me)=>Me!==R&&pe.currentHp>0)){v(null),e("gameover"),L('Tutti i tuoi kana sono esausti... "Tutto è sofferenza" disse il Buddha. Ma ogni fine è un nuovo inizio.');return}v({...ve,playerKana:S,isPlayerTurn:!0,turn:ve.turn+1}),H(!1),r(oe=>oe.map((pe,Me)=>Me===R?S:pe))},[C,n,R]),We=Rt.useCallback(ve=>{var Me;if(!x||!x.isPlayerTurn||j)return;const{playerKana:Le,enemyKana:be}=x;if(ve==="switch"){if(n.filter((me,we)=>we!==R&&me.currentHp>0).length===0){F(me=>[...me,"Non hai altri kana disponibili!"]);return}const he=n.findIndex((me,we)=>we!==R&&me.currentHp>0);U(he),v({...x,playerKana:{...n[he]},isPlayerTurn:!0}),F(me=>[...me,`Vai, ${n[he].hiragana}! "${n[he].special}"`]);return}if(ve==="catch"){const Ce=Math.max(.1,1-be.currentHp/be.hp)*.5+Le.level/(be.level+5)*.3;if(Math.random()<Ce){const he=Qm(be);n.length<6&&r(me=>[...me,he]),y(me=>me.includes(be.id)?me:[...me,be.id]),v(null),e("capture"),L(`Hai catturato ${be.hiragana} (${be.katakana})! "${be.description}"`)}else F(he=>[...he,`La cattura di ${be.hiragana} è fallita! Il kana resiste!`]),H(!0),v({...x,isPlayerTurn:!1}),B.current=setTimeout(()=>Ue({...x,isPlayerTurn:!1}),1200);return}const it=ve==="special"?1.5:1,V=((Me=Jp[Le.element])==null?void 0:Me[be.element])||1,Ut=Math.floor(Le.attack*it*V-be.defense*.5),_t=Math.max(1,Ut+Math.floor(Math.random()*5)),D=Math.max(0,be.currentHp-_t),S=ve==="special"?Le.special:"Attacco",Q=V>1?"✨ Super efficace!":V<1?"Poco efficace...":"",oe=[...C,`${Le.hiragana} usa ${S}! ${_t} danni! ${Q}`];F(oe);const pe={...be,currentHp:D};if(D<=0){const Ce=be.level*10+20;let he={...Le,exp:Le.exp+Ce},me=!1;for(;he.exp>=he.expToNext;)he=a1(he),me=!0;if(r(we=>we.map((qe,Re)=>Re===R?he:qe)),ae){const we=Er.find(qe=>qe.id===o);if(we.antagonist){f(Re=>[...Re,we.antagonist]);const qe=Dv[we.antagonist]||[];v(null),M(qe),P(0),e("dialogue"),W(!1);return}}v(null),e("explore"),L(`${be.hiragana} sconfitto! +${Ce} EXP! ${me?"🎉 LEVEL UP! Il kana è cresciuto in saggezza.":""}`)}else v({...x,enemyKana:pe,isPlayerTurn:!1}),H(!0),B.current=setTimeout(()=>Ue({...x,enemyKana:pe,isPlayerTurn:!1}),1200)},[x,j,n,R,C,o,ae,Ue]),le=Rt.useCallback(()=>{var Ut;const ve=Er.find(_t=>_t.id===o);if(!ve.antagonist)return;const Le=Math.max(5,(((Ut=n[R])==null?void 0:Ut.level)||1)+3),be=$n[Math.min($n.length-1,Le+10)],it={...be,currentHp:Math.floor(be.hp*1.8),hp:Math.floor(be.hp*1.8),attack:Math.floor(be.attack*1.3),level:Le},V={...n[R]};v({playerKana:V,enemyKana:it,isPlayerTurn:!0,turn:1}),F([`⚔️ ${ve.antagonist} manda in campo il suo kana più forte: ${it.hiragana} (${it.katakana})! Lv.${it.level}`]),e("battle"),W(!0)},[o,n,R]),fe=Rt.useCallback(()=>{const ve=Er.find(be=>be.id===o);if(!ve.puzzleId)return;const Le=La.find(be=>be.id===ve.puzzleId);I(Le.starterCode),X(""),e("puzzle")},[o]),Te=Rt.useCallback(()=>{const ve=Er.find(it=>it.id===o);if(!ve.puzzleId)return;const Le=La.find(it=>it.id===ve.puzzleId),be=Uv(Le,E);X(be.message),be.success&&(m(it=>[...it,Le.id]),r(it=>it.map(V=>({...V,currentHp:V.hp,exp:V.exp+30}))),L(`🎉 Puzzle risolto! ${Le.religiousRef}`))},[E,o]),Je=Rt.useCallback(()=>{r(ve=>ve.map(Le=>({...Le,currentHp:Le.hp}))),L("💚 La tua squadra è stata curata! Come l'acqua del battesimo o il Gange sacro, la purificazione è completa.")},[]),Be=Rt.useCallback(ve=>{var Le;l(ve),L(`Sei arrivato a: ${(Le=Er.find(be=>be.id===ve))==null?void 0:Le.name}`)},[]);if(a==="title")return q.jsx("div",{className:"min-h-screen bg-gradient-to-b from-gray-900 via-purple-900 to-black flex flex-col items-center justify-center text-white p-4 overflow-auto",children:q.jsxs("div",{className:"text-center space-y-6 max-w-2xl",children:[q.jsx("div",{className:"text-8xl mb-4 animate-pulse",children:"仮"}),q.jsx("h1",{className:"text-5xl md:text-6xl font-bold bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 bg-clip-text text-transparent",children:"仮名マスター"}),q.jsx("h2",{className:"text-2xl md:text-3xl font-semibold text-gray-300",children:"Kana Master: Le Scritture Viventi"}),q.jsx("p",{className:"text-lg text-gray-400 italic max-w-lg mx-auto",children:'"In principio era il Suono. E il Suono era i Kana, e ogni kana era un frammento del divino."'}),q.jsx("p",{className:"text-sm text-gray-500 max-w-md mx-auto",children:"Un viaggio epico attraverso le tradizioni religiose e filosofiche dell'umanità. Cattura tutti i kana giapponesi, combatti guardiani ideologici, risolvi puzzle di codice."}),q.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-3 gap-2 text-xs text-gray-400 mt-4 max-w-md mx-auto",children:[q.jsx("span",{className:"bg-gray-800/50 p-2 rounded",children:"✝️ Cristianesimo"}),q.jsx("span",{className:"bg-gray-800/50 p-2 rounded",children:"☸️ Buddismo"}),q.jsx("span",{className:"bg-gray-800/50 p-2 rounded",children:"☪️ Islam"}),q.jsx("span",{className:"bg-gray-800/50 p-2 rounded",children:"🕉️ Induismo"}),q.jsx("span",{className:"bg-gray-800/50 p-2 rounded",children:"☯️ Taoismo"}),q.jsx("span",{className:"bg-gray-800/50 p-2 rounded",children:"✡️ Ebraismo"})]}),q.jsx("button",{onClick:N,className:"mt-8 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg text-xl font-bold hover:from-purple-700 hover:to-pink-700 transition-all transform hover:scale-105 shadow-lg shadow-purple-500/30",children:"▶ Inizia il Viaggio"}),q.jsxs("div",{className:"text-xs text-gray-600 mt-4 space-y-1",children:[q.jsxs("p",{children:[$n.length," kana da scoprire • 9 aree da esplorare • 6 antagonisti"]}),q.jsx("p",{children:"12 puzzle JavaScript • Battaglie strategiche • Dialoghi filosofici"})]})]})});if(a==="intro")return q.jsx("div",{className:"min-h-screen bg-gradient-to-b from-indigo-900 to-black flex flex-col items-center justify-center text-white p-4",children:q.jsx("div",{className:"max-w-2xl w-full space-y-6",children:J?q.jsxs("div",{className:"space-y-6",children:[q.jsx("h2",{className:"text-2xl font-bold text-center text-yellow-400",children:"Scegli il tuo primo Kana!"}),q.jsx("p",{className:"text-center text-gray-400 text-sm",children:'Ogni scelta è un atto di karma. Come disse il Buddha: "Siamo ciò che abbiamo pensato."'}),q.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:[$n[0],$n[5],$n[10]].map(ve=>q.jsxs("button",{onClick:()=>ee(ve.id),className:"bg-gray-800 border-2 border-purple-500/50 rounded-xl p-5 hover:border-yellow-400 transition-all hover:scale-105 text-left",children:[q.jsxs("div",{className:"text-5xl mb-3 text-center",children:[ve.hiragana," ",q.jsx("span",{className:"text-3xl text-gray-400",children:"/"})," ",ve.katakana]}),q.jsxs("div",{className:"text-sm text-yellow-300 font-bold",children:[ve.romaji.toUpperCase()," — ",ve.element]}),q.jsx("div",{className:"text-xs text-gray-400 mt-2 italic",children:ve.description}),q.jsxs("div",{className:"text-xs mt-3 text-purple-300 grid grid-cols-2 gap-1",children:[q.jsxs("span",{children:["❤️ HP: ",ve.hp]}),q.jsxs("span",{children:["⚔️ ATK: ",ve.attack]}),q.jsxs("span",{children:["🛡️ DEF: ",ve.defense]}),q.jsxs("span",{children:["💨 SPD: ",ve.speed]})]}),q.jsxs("div",{className:"text-xs mt-2 text-pink-300",children:["✨ ",ve.special]})]},ve.id))})]}):q.jsxs("div",{className:"bg-gray-800/80 backdrop-blur rounded-xl p-6 border border-purple-500/30 shadow-xl",children:[q.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[q.jsx("div",{className:"w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-2xl",children:"📖"}),q.jsx("p",{className:"text-purple-300 font-bold text-lg",children:(dt=g[w])==null?void 0:dt.speaker})]}),q.jsx("p",{className:"text-lg leading-relaxed",children:(Ht=g[w])==null?void 0:Ht.text}),q.jsxs("div",{className:"mt-4 flex justify-between items-center",children:[q.jsxs("span",{className:"text-xs text-gray-500",children:[w+1,"/",g.length]}),q.jsx("button",{onClick:xe,className:"px-6 py-2 bg-purple-600 rounded-lg hover:bg-purple-700 transition font-bold",children:"Continua ▶"})]})]})})});if(a==="dialogue")return q.jsx("div",{className:"min-h-screen bg-gradient-to-b from-gray-900 to-black flex flex-col items-center justify-center text-white p-4",children:q.jsx("div",{className:"max-w-2xl w-full",children:q.jsxs("div",{className:"bg-gray-800/90 backdrop-blur rounded-xl p-6 border border-blue-500/30 shadow-xl",children:[q.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[q.jsx("div",{className:"w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-xl",children:"💬"}),q.jsx("p",{className:"text-blue-300 font-bold",children:(ft=g[w])==null?void 0:ft.speaker})]}),q.jsx("p",{className:"text-lg leading-relaxed mb-4",children:(St=g[w])==null?void 0:St.text}),q.jsxs("div",{className:"flex justify-between items-center border-t border-gray-700 pt-4",children:[q.jsxs("span",{className:"text-xs text-gray-500",children:[w+1,"/",g.length]}),w<g.length-1?q.jsx("button",{onClick:xe,className:"px-6 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition font-bold",children:"Continua ▶"}):q.jsxs("div",{className:"flex gap-2 flex-wrap",children:[q.jsx("button",{onClick:()=>{e("explore"),M([])},className:"px-4 py-2 bg-green-600 rounded-lg hover:bg-green-700 transition text-sm",children:"🗺️ Esplora"}),(z==null?void 0:z.antagonist)&&!u.includes(z.antagonist)&&q.jsx("button",{onClick:()=>{M([]),le()},className:"px-4 py-2 bg-red-600 rounded-lg hover:bg-red-700 transition text-sm",children:"⚔️ Combatti"}),(z==null?void 0:z.puzzleId)&&!h.includes(z.puzzleId)&&q.jsx("button",{onClick:()=>{M([]),fe()},className:"px-4 py-2 bg-yellow-600 rounded-lg hover:bg-yellow-700 transition text-sm",children:"💻 Puzzle"})]})]})]})})});if(a==="puzzle"&&K)return q.jsx("div",{className:"min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 flex flex-col items-center justify-center text-white p-4",children:q.jsx("div",{className:"max-w-3xl w-full space-y-4",children:q.jsxs("div",{className:"bg-gray-800/90 rounded-xl p-6 border border-yellow-500/30",children:[q.jsxs("h2",{className:"text-2xl font-bold text-yellow-400 mb-2",children:["💻 ",K.title]}),q.jsx("p",{className:"text-gray-300 mb-2",children:K.description}),q.jsxs("p",{className:"text-sm text-purple-300 italic mb-3",children:["📖 ",K.religiousRef]}),q.jsxs("p",{className:"text-sm text-gray-400 mb-4",children:["💡 Hint: ",K.hint]}),q.jsx("div",{className:"bg-gray-950 rounded-lg p-1 border border-gray-700",children:q.jsx("textarea",{value:E,onChange:ve=>I(ve.target.value),className:"w-full h-48 bg-transparent text-green-400 font-mono text-sm p-3 focus:outline-none resize-none",spellCheck:!1})}),q.jsxs("div",{className:"flex gap-2 mt-4",children:[q.jsx("button",{onClick:Te,className:"px-6 py-2 bg-green-600 rounded-lg hover:bg-green-700 font-bold transition",children:"▶ Esegui"}),q.jsx("button",{onClick:()=>e("explore"),className:"px-4 py-2 bg-gray-600 rounded-lg hover:bg-gray-700 transition",children:"← Indietro"})]}),O&&q.jsxs("div",{className:`mt-4 p-3 rounded-lg ${O.includes("✅")?"bg-green-900/50 border border-green-500":"bg-red-900/50 border border-red-500"}`,children:[q.jsx("p",{className:"text-sm",children:O}),O.includes("✅")&&q.jsx("button",{onClick:()=>{e("explore"),X("")},className:"mt-2 px-4 py-1 bg-green-600 rounded text-sm hover:bg-green-700",children:"Continua ▶"})]}),q.jsxs("div",{className:"mt-4 text-xs text-gray-500 bg-gray-900/50 rounded-lg p-3",children:[q.jsx("p",{className:"font-bold mb-1",children:"Test Cases:"}),K.testCases.map((ve,Le)=>q.jsxs("p",{children:["• ",ve.description,": ",q.jsxs("code",{className:"text-gray-400",children:["input=",JSON.stringify(ve.input)]})," → ",q.jsx("code",{className:"text-yellow-400",children:JSON.stringify(ve.expected)})]},Le))]})]})})});if(a==="battle"&&x){const{playerKana:ve,enemyKana:Le}=x,be=ve.currentHp/ve.hp*100,it=Le.currentHp/Le.hp*100;return q.jsx("div",{className:"min-h-screen bg-gradient-to-b from-red-950 via-gray-900 to-black flex flex-col text-white p-3",children:q.jsxs("div",{className:"max-w-4xl w-full mx-auto space-y-3 flex-1 flex flex-col",children:[q.jsx("div",{className:"bg-gray-800/80 rounded-xl p-4 border border-red-500/30",children:q.jsxs("div",{className:"flex justify-between items-center",children:[q.jsxs("div",{className:"flex items-center gap-3",children:[q.jsx("div",{className:"text-5xl bg-red-900/50 w-16 h-16 rounded-lg flex items-center justify-center border border-red-500/50",children:Le.hiragana}),q.jsxs("div",{children:[q.jsxs("div",{className:"font-bold",children:[Le.katakana," ",q.jsxs("span",{className:"text-gray-400 text-sm",children:["(",Le.romaji,")"]})]}),q.jsxs("div",{className:"text-xs text-gray-400",children:["Lv.",Le.level," — ",Le.element]})]})]}),q.jsxs("div",{className:"text-right",children:[q.jsx("div",{className:"w-40 bg-gray-700 rounded-full h-3",children:q.jsx("div",{className:"bg-red-500 h-3 rounded-full transition-all duration-500",style:{width:`${it}%`}})}),q.jsxs("div",{className:"text-xs text-gray-500 mt-1",children:[Le.currentHp,"/",Le.hp]})]})]})}),q.jsx("div",{className:"bg-gray-900/80 rounded-lg p-3 h-20 overflow-y-auto border border-gray-700 text-sm",children:C.slice(-5).map((V,Ut)=>q.jsx("p",{className:"text-gray-300 py-0.5",children:V},Ut))}),q.jsx("div",{className:"bg-gray-800/80 rounded-xl p-4 border border-blue-500/30",children:q.jsxs("div",{className:"flex justify-between items-center",children:[q.jsxs("div",{className:"flex items-center gap-3",children:[q.jsx("div",{className:"text-5xl bg-blue-900/50 w-16 h-16 rounded-lg flex items-center justify-center border border-blue-500/50",children:ve.hiragana}),q.jsxs("div",{children:[q.jsxs("div",{className:"font-bold",children:[ve.katakana," ",q.jsxs("span",{className:"text-gray-400 text-sm",children:["(",ve.romaji,")"]})]}),q.jsxs("div",{className:"text-xs text-gray-400",children:["Lv.",ve.level," — ",ve.element]})]})]}),q.jsxs("div",{className:"text-right",children:[q.jsx("div",{className:"w-40 bg-gray-700 rounded-full h-3",children:q.jsx("div",{className:`h-3 rounded-full transition-all duration-500 ${be>50?"bg-green-500":be>20?"bg-yellow-500":"bg-red-500"}`,style:{width:`${be}%`}})}),q.jsxs("div",{className:"text-xs text-gray-500 mt-1",children:[ve.currentHp,"/",ve.hp," | EXP:",ve.exp,"/",ve.expToNext]})]})]})}),q.jsx("div",{className:"mt-auto",children:x.isPlayerTurn&&!j?q.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-2",children:[q.jsx("button",{onClick:()=>We("attack"),className:"px-4 py-3 bg-red-600 rounded-lg hover:bg-red-700 font-bold transition active:scale-95",children:"⚔️ Attacco"}),q.jsxs("button",{onClick:()=>We("special"),className:"px-4 py-3 bg-purple-600 rounded-lg hover:bg-purple-700 font-bold transition active:scale-95",children:["✨ ",ve.special]}),q.jsx("button",{onClick:()=>We("catch"),className:"px-4 py-3 bg-yellow-600 rounded-lg hover:bg-yellow-700 font-bold transition active:scale-95",children:"🎯 Cattura"}),q.jsx("button",{onClick:()=>We("switch"),className:"px-4 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 font-bold transition active:scale-95",children:"🔄 Cambia"})]}):q.jsx("div",{className:"text-center py-4",children:q.jsx("div",{className:"animate-pulse text-yellow-400 font-bold",children:"⏳ Turno del nemico..."})})})]})})}return a==="capture"?q.jsx("div",{className:"min-h-screen bg-gradient-to-b from-yellow-900 to-black flex flex-col items-center justify-center text-white p-4",children:q.jsxs("div",{className:"max-w-lg w-full text-center space-y-6",children:[q.jsx("div",{className:"text-8xl animate-bounce mb-4",children:(Pt=n[n.length-1])==null?void 0:Pt.hiragana}),q.jsx("div",{className:"text-4xl",children:(pt=n[n.length-1])==null?void 0:pt.katakana}),q.jsx("h2",{className:"text-2xl font-bold text-yellow-400",children:"🎉 Cattura Riuscita!"}),q.jsx("p",{className:"text-gray-300",children:b}),q.jsx("button",{onClick:()=>{e("explore"),L("")},className:"px-6 py-3 bg-yellow-600 rounded-lg hover:bg-yellow-700 font-bold transition",children:"Continua ▶"})]})}):a==="gameover"?q.jsx("div",{className:"min-h-screen bg-gradient-to-b from-black to-red-900 flex flex-col items-center justify-center text-white p-4",children:q.jsxs("div",{className:"max-w-lg w-full text-center space-y-6",children:[q.jsx("div",{className:"text-6xl",children:"💀"}),q.jsx("h2",{className:"text-4xl font-bold text-red-400",children:"Sconfitta..."}),q.jsx("p",{className:"text-gray-300",children:b}),q.jsx("p",{className:"text-gray-400 italic",children:'"La morte non è la fine. È solo un altro inizio." — Bhagavad Gita 2:27'}),q.jsx("button",{onClick:()=>{Je(),e("explore")},className:"px-6 py-3 bg-red-600 rounded-lg hover:bg-red-700 font-bold transition",children:"🔄 Ricomincia"})]})}):a==="team"?q.jsx("div",{className:"min-h-screen bg-gradient-to-b from-gray-900 to-black flex flex-col items-center text-white p-4",children:q.jsxs("div",{className:"max-w-4xl w-full space-y-4",children:[q.jsxs("div",{className:"flex justify-between items-center",children:[q.jsxs("h2",{className:"text-2xl font-bold text-yellow-400",children:["👥 La Tua Squadra (",n.length,"/6)"]}),q.jsx("button",{onClick:()=>e("explore"),className:"px-4 py-2 bg-gray-700 rounded-lg hover:bg-gray-600 text-sm",children:"← Indietro"})]}),q.jsxs("p",{className:"text-sm text-gray-400",children:["Kana catturati: ",_.length,"/",$n.length," | Guardiani: ",u.length,"/6 | Puzzle: ",h.length,"/",La.length]}),q.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3",children:n.map((ve,Le)=>q.jsxs("div",{className:`bg-gray-800 rounded-lg p-4 border ${Le===R?"border-yellow-500":"border-purple-500/30"}`,children:[q.jsxs("div",{className:"flex justify-between items-start",children:[q.jsxs("div",{className:"flex items-center gap-2",children:[q.jsx("span",{className:"text-3xl",children:ve.hiragana}),q.jsx("span",{className:"text-xl text-gray-400",children:ve.katakana})]}),q.jsxs("span",{className:"text-xs bg-purple-600 px-2 py-1 rounded",children:["Lv.",ve.level]})]}),q.jsxs("p",{className:"text-xs text-gray-400 mt-1",children:[ve.romaji," — ",ve.element]}),q.jsx("p",{className:"text-xs text-gray-500 mt-1 italic",children:ve.description}),q.jsxs("div",{className:"mt-2 space-y-1",children:[q.jsxs("div",{className:"flex justify-between text-xs",children:[q.jsx("span",{children:"❤️ HP"}),q.jsxs("span",{children:[ve.currentHp,"/",ve.hp]})]}),q.jsx("div",{className:"w-full bg-gray-700 rounded-full h-2",children:q.jsx("div",{className:"bg-green-500 h-2 rounded-full",style:{width:`${ve.currentHp/ve.hp*100}%`}})}),q.jsxs("div",{className:"flex justify-between text-xs",children:[q.jsx("span",{children:"⭐ EXP"}),q.jsxs("span",{children:[ve.exp,"/",ve.expToNext]})]}),q.jsx("div",{className:"w-full bg-gray-700 rounded-full h-2",children:q.jsx("div",{className:"bg-blue-500 h-2 rounded-full",style:{width:`${Math.min(100,ve.exp/ve.expToNext*100)}%`}})})]}),q.jsxs("div",{className:"text-xs text-gray-400 mt-2",children:["⚔️",ve.attack," 🛡️",ve.defense," 💨",ve.speed]}),q.jsxs("div",{className:"text-xs text-pink-300 mt-1",children:["✨ ",ve.special]})]},Le))})]})}):q.jsxs("div",{className:"min-h-screen bg-gray-900 flex flex-col text-white",children:[q.jsxs("div",{className:"bg-gray-800 p-2 flex justify-between items-center text-sm border-b border-gray-700 flex-wrap gap-1",children:[q.jsxs("div",{className:"flex items-center gap-3",children:[q.jsx("span",{className:"text-yellow-400 font-bold text-xs md:text-sm",children:z.name}),q.jsxs("span",{className:"text-gray-400 text-xs",children:["Lv.",n.length>0?(Ot=n[R])==null?void 0:Ot.level:1]}),q.jsxs("span",{className:"text-gray-400 text-xs hidden md:inline",children:["📦 ",_.length,"/",$n.length]})]}),q.jsxs("div",{className:"flex gap-1",children:[q.jsx("button",{onClick:()=>e("team"),className:"px-2 py-1 bg-purple-600 rounded text-xs hover:bg-purple-700",children:"👥"}),q.jsx("button",{onClick:Je,className:"px-2 py-1 bg-green-600 rounded text-xs hover:bg-green-700",children:"💚"})]})]}),q.jsx(r1,{areaId:o,areaColor:z.color,groundColor:z.groundColor,ambientColor:z.ambientColor}),b&&q.jsxs("div",{className:"mx-3 -mt-8 relative z-10 bg-black/90 rounded-lg p-3 text-sm text-yellow-300 border border-yellow-500/30",children:[b,q.jsx("button",{onClick:()=>L(""),className:"ml-2 text-xs text-gray-400 hover:text-white",children:"✕"})]}),q.jsx("div",{className:"bg-gray-800/95 p-4 border-t border-gray-700 flex-1",children:q.jsxs("div",{className:"max-w-4xl mx-auto",children:[q.jsx("p",{className:"text-sm text-gray-300 mb-1",children:z.description}),q.jsxs("p",{className:"text-xs text-purple-300 italic mb-3",children:["📖 ",z.philosophy]}),q.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-2 mb-3",children:[q.jsx("button",{onClick:He,className:"px-4 py-2.5 bg-indigo-600 rounded-lg hover:bg-indigo-700 font-bold transition text-sm active:scale-95",children:"🌿 Esplora"}),z.antagonist&&!u.includes(z.antagonist)&&q.jsxs("button",{onClick:le,className:"px-4 py-2.5 bg-red-600 rounded-lg hover:bg-red-700 font-bold transition text-sm active:scale-95",children:["⚔️ ",z.antagonist==="cristoforo"?"Fra Cristoforo":z.antagonist==="bodhi"?"Monaco Bodhi":z.antagonist==="rashid"?"Al-Rashid":z.antagonist==="kali"?"Deva Kali":z.antagonist==="lao"?"Saggio Lao":"Rabbi Ezra"]}),z.puzzleId&&!h.includes(z.puzzleId)&&q.jsx("button",{onClick:fe,className:"px-4 py-2.5 bg-yellow-600 rounded-lg hover:bg-yellow-700 font-bold transition text-sm active:scale-95",children:"💻 Puzzle"}),q.jsx("button",{onClick:()=>e("team"),className:"px-4 py-2.5 bg-purple-600 rounded-lg hover:bg-purple-700 font-bold transition text-sm active:scale-95",children:"👥 Squadra"})]}),q.jsxs("div",{className:"border-t border-gray-700 pt-3",children:[q.jsx("p",{className:"text-xs text-gray-400 mb-2",children:"🗺️ Viaggia verso:"}),q.jsx("div",{className:"flex flex-wrap gap-2",children:z.connections.map(ve=>{var it;const Le=Er.find(V=>V.id===ve);if(!Le)return null;const be=Le.requiredLevel>(((it=n[R])==null?void 0:it.level)||1);return q.jsxs("button",{onClick:()=>!be&&Be(ve),disabled:be,className:`px-3 py-1.5 rounded-lg text-xs transition ${be?"bg-gray-700/50 text-gray-500 cursor-not-allowed":"bg-gray-600 hover:bg-gray-500 text-white active:scale-95"}`,children:[be?"🔒":"➡️"," ",Le.name," ",be?`(Lv.${Le.requiredLevel})`:""]},ve)})})]}),q.jsx("div",{className:"mt-3 border-t border-gray-700 pt-2",children:q.jsxs("div",{className:"grid grid-cols-3 gap-2 text-xs text-gray-500",children:[q.jsxs("div",{children:[q.jsxs("div",{className:"flex justify-between",children:[q.jsx("span",{children:"⚔️ Guardiani"}),q.jsxs("span",{children:[u.length,"/6"]})]}),q.jsx("div",{className:"w-full bg-gray-700 rounded-full h-1.5 mt-1",children:q.jsx("div",{className:"bg-red-500 h-1.5 rounded-full",style:{width:`${u.length/6*100}%`}})})]}),q.jsxs("div",{children:[q.jsxs("div",{className:"flex justify-between",children:[q.jsx("span",{children:"💻 Puzzle"}),q.jsxs("span",{children:[h.length,"/",La.length]})]}),q.jsx("div",{className:"w-full bg-gray-700 rounded-full h-1.5 mt-1",children:q.jsx("div",{className:"bg-yellow-500 h-1.5 rounded-full",style:{width:`${h.length/La.length*100}%`}})})]}),q.jsxs("div",{children:[q.jsxs("div",{className:"flex justify-between",children:[q.jsx("span",{children:"📦 Kana"}),q.jsxs("span",{children:[_.length,"/",$n.length]})]}),q.jsx("div",{className:"w-full bg-gray-700 rounded-full h-1.5 mt-1",children:q.jsx("div",{className:"bg-green-500 h-1.5 rounded-full",style:{width:`${_.length/$n.length*100}%`}})})]})]})})]})})]})}Pv.createRoot(document.getElementById("root")).render(q.jsx(s1,{}));
