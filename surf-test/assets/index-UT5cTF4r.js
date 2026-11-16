var ym=Object.defineProperty;var bm=(s,t,e)=>t in s?ym(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var M=(s,t,e)=>bm(s,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const jl="170",Sm=0,qh=1,Tm=2,Xd=1,qd=2,ei=3,ci=0,We=1,Be=2,Di=0,Ds=1,Kh=2,Yh=3,jh=4,Em=5,ji=100,Am=101,wm=102,Rm=103,Cm=104,Pm=200,Lm=201,Im=202,Dm=203,Gc=204,Wc=205,Nm=206,Um=207,Fm=208,Om=209,Bm=210,km=211,zm=212,Hm=213,Vm=214,Xc=0,qc=1,Kc=2,zs=3,Yc=4,jc=5,$c=6,Zc=7,$l=0,Gm=1,Wm=2,Ni=0,Xm=1,qm=2,Km=3,Kd=4,Ym=5,jm=6,$m=7,$h="attached",Yd="detached",jd=300,Hs=301,Vs=302,Jc=303,Qc=304,_a=306,ts=1e3,Pi=1001,oa=1002,Xe=1003,$d=1004,gr=1005,Qe=1006,qo=1007,zn=1008,li=1009,Zd=1010,Jd=1011,Pr=1012,Zl=1013,es=1014,wn=1015,zr=1016,Jl=1017,Ql=1018,Gs=1020,Qd=35902,tp=1021,ep=1022,dn=1023,np=1024,ip=1025,Ns=1026,Ws=1027,th=1028,eh=1029,sp=1030,nh=1031,ih=1033,Ko=33776,Yo=33777,jo=33778,$o=33779,tl=35840,el=35841,nl=35842,il=35843,sl=36196,rl=37492,ol=37496,al=37808,cl=37809,ll=37810,hl=37811,ul=37812,fl=37813,dl=37814,pl=37815,ml=37816,gl=37817,_l=37818,xl=37819,vl=37820,Ml=37821,Zo=36492,yl=36494,bl=36495,rp=36283,Sl=36284,Tl=36285,El=36286,Lr=2300,Ir=2301,La=2302,Zh=2400,Jh=2401,Qh=2402,Zm=2500,Jm=0,op=1,Al=2,Qm=3200,t0=3201,sh=0,e0=1,Ri="",De="srgb",qe="srgb-linear",xa="linear",fe="srgb",cs=7680,tu=519,n0=512,i0=513,s0=514,ap=515,r0=516,o0=517,a0=518,c0=519,wl=35044,Se=35048,eu="300 es",ri=2e3,aa=2001;class Zs{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,t);t.target=null}}}const Fe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let nu=1234567;const Mr=Math.PI/180,Xs=180/Math.PI;function pn(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Fe[s&255]+Fe[s>>8&255]+Fe[s>>16&255]+Fe[s>>24&255]+"-"+Fe[t&255]+Fe[t>>8&255]+"-"+Fe[t>>16&15|64]+Fe[t>>24&255]+"-"+Fe[e&63|128]+Fe[e>>8&255]+"-"+Fe[e>>16&255]+Fe[e>>24&255]+Fe[n&255]+Fe[n>>8&255]+Fe[n>>16&255]+Fe[n>>24&255]).toLowerCase()}function we(s,t,e){return Math.max(t,Math.min(e,s))}function rh(s,t){return(s%t+t)%t}function l0(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function h0(s,t,e){return s!==t?(e-s)/(t-s):0}function yr(s,t,e){return(1-e)*s+e*t}function u0(s,t,e,n){return yr(s,t,1-Math.exp(-e*n))}function f0(s,t=1){return t-Math.abs(rh(s,t*2)-t)}function d0(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function p0(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function m0(s,t){return s+Math.floor(Math.random()*(t-s+1))}function g0(s,t){return s+Math.random()*(t-s)}function _0(s){return s*(.5-Math.random())}function x0(s){s!==void 0&&(nu=s);let t=nu+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function v0(s){return s*Mr}function M0(s){return s*Xs}function y0(s){return(s&s-1)===0&&s!==0}function b0(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function S0(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function T0(s,t,e,n,i){const r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),l=r((t+n)/2),h=o((t+n)/2),u=r((t-n)/2),f=o((t-n)/2),d=r((n-t)/2),p=o((n-t)/2);switch(i){case"XYX":s.set(a*h,c*u,c*f,a*l);break;case"YZY":s.set(c*f,a*h,c*u,a*l);break;case"ZXZ":s.set(c*u,c*f,a*h,a*l);break;case"XZX":s.set(a*h,c*p,c*d,a*l);break;case"YXY":s.set(c*d,a*h,c*p,a*l);break;case"ZYZ":s.set(c*p,c*d,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Tn(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function he(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const E0={DEG2RAD:Mr,RAD2DEG:Xs,generateUUID:pn,clamp:we,euclideanModulo:rh,mapLinear:l0,inverseLerp:h0,lerp:yr,damp:u0,pingpong:f0,smoothstep:d0,smootherstep:p0,randInt:m0,randFloat:g0,randFloatSpread:_0,seededRandom:x0,degToRad:v0,radToDeg:M0,isPowerOfTwo:y0,ceilPowerOfTwo:b0,floorPowerOfTwo:S0,setQuaternionFromProperEuler:T0,normalize:he,denormalize:Tn};class pt{constructor(t=0,e=0){pt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(we(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*i+t.x,this.y=r*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class jt{constructor(t,e,n,i,r,o,a,c,l){jt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,c,l)}set(t,e,n,i,r,o,a,c,l){const h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],f=n[2],d=n[5],p=n[8],_=i[0],g=i[3],m=i[6],b=i[1],v=i[4],x=i[7],D=i[2],w=i[5],P=i[8];return r[0]=o*_+a*b+c*D,r[3]=o*g+a*v+c*w,r[6]=o*m+a*x+c*P,r[1]=l*_+h*b+u*D,r[4]=l*g+h*v+u*w,r[7]=l*m+h*x+u*P,r[2]=f*_+d*b+p*D,r[5]=f*g+d*v+p*w,r[8]=f*m+d*x+p*P,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-n*r*h+n*a*c+i*r*l-i*o*c}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=h*o-a*l,f=a*c-h*r,d=l*r-o*c,p=e*u+n*f+i*d;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/p;return t[0]=u*_,t[1]=(i*l-h*n)*_,t[2]=(a*n-i*o)*_,t[3]=f*_,t[4]=(h*e-i*c)*_,t[5]=(i*r-a*e)*_,t[6]=d*_,t[7]=(n*c-l*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-i*l,i*c,-i*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Ia.makeScale(t,e)),this}rotate(t){return this.premultiply(Ia.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ia.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Ia=new jt;function cp(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Dr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function A0(){const s=Dr("canvas");return s.style.display="block",s}const iu={};function _r(s){s in iu||(iu[s]=!0,console.warn(s))}function w0(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function R0(s){const t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function C0(s){const t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const te={enabled:!0,workingColorSpace:qe,spaces:{},convert:function(s,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===fe&&(s.r=ai(s.r),s.g=ai(s.g),s.b=ai(s.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(s.applyMatrix3(this.spaces[t].toXYZ),s.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===fe&&(s.r=Us(s.r),s.g=Us(s.g),s.b=Us(s.b))),s},fromWorkingColorSpace:function(s,t){return this.convert(s,this.workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ri?xa:this.spaces[s].transfer},getLuminanceCoefficients:function(s,t=this.workingColorSpace){return s.fromArray(this.spaces[t].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,t,e){return s.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function ai(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Us(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const su=[.64,.33,.3,.6,.15,.06],ru=[.2126,.7152,.0722],ou=[.3127,.329],au=new jt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),cu=new jt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);te.define({[qe]:{primaries:su,whitePoint:ou,transfer:xa,toXYZ:au,fromXYZ:cu,luminanceCoefficients:ru,workingColorSpaceConfig:{unpackColorSpace:De},outputColorSpaceConfig:{drawingBufferColorSpace:De}},[De]:{primaries:su,whitePoint:ou,transfer:fe,toXYZ:au,fromXYZ:cu,luminanceCoefficients:ru,outputColorSpaceConfig:{drawingBufferColorSpace:De}}});let ls;class P0{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ls===void 0&&(ls=Dr("canvas")),ls.width=t.width,ls.height=t.height;const n=ls.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=ls}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Dr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=ai(r[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ai(e[n]/255)*255):e[n]=ai(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let L0=0;class lp{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:L0++}),this.uuid=pn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(Da(i[o].image)):r.push(Da(i[o]))}else r=Da(i);n.url=r}return e||(t.images[this.uuid]=n),n}}function Da(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?P0.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let I0=0;class Re extends Zs{constructor(t=Re.DEFAULT_IMAGE,e=Re.DEFAULT_MAPPING,n=Pi,i=Pi,r=Qe,o=zn,a=dn,c=li,l=Re.DEFAULT_ANISOTROPY,h=Ri){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:I0++}),this.uuid=pn(),this.name="",this.source=new lp(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new pt(0,0),this.repeat=new pt(1,1),this.center=new pt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new jt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==jd)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ts:t.x=t.x-Math.floor(t.x);break;case Pi:t.x=t.x<0?0:1;break;case oa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ts:t.y=t.y-Math.floor(t.y);break;case Pi:t.y=t.y<0?0:1;break;case oa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Re.DEFAULT_IMAGE=null;Re.DEFAULT_MAPPING=jd;Re.DEFAULT_ANISOTROPY=1;class oe{constructor(t=0,e=0,n=0,i=1){oe.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r;const c=t.elements,l=c[0],h=c[4],u=c[8],f=c[1],d=c[5],p=c[9],_=c[2],g=c[6],m=c[10];if(Math.abs(h-f)<.01&&Math.abs(u-_)<.01&&Math.abs(p-g)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+_)<.1&&Math.abs(p+g)<.1&&Math.abs(l+d+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const v=(l+1)/2,x=(d+1)/2,D=(m+1)/2,w=(h+f)/4,P=(u+_)/4,I=(p+g)/4;return v>x&&v>D?v<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(v),i=w/n,r=P/n):x>D?x<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(x),n=w/i,r=I/i):D<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(D),n=P/r,i=I/r),this.set(n,i,r,e),this}let b=Math.sqrt((g-p)*(g-p)+(u-_)*(u-_)+(f-h)*(f-h));return Math.abs(b)<.001&&(b=1),this.x=(g-p)/b,this.y=(u-_)/b,this.z=(f-h)/b,this.w=Math.acos((l+d+m-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class D0 extends Zs{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new oe(0,0,t,e),this.scissorTest=!1,this.viewport=new oe(0,0,t,e);const i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Qe,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Re(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new lp(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ns extends D0{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class hp extends Re{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Xe,this.minFilter=Xe,this.wrapR=Pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class N0 extends Re{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Xe,this.minFilter=Xe,this.wrapR=Pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class pe{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,o,a){let c=n[i+0],l=n[i+1],h=n[i+2],u=n[i+3];const f=r[o+0],d=r[o+1],p=r[o+2],_=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=f,t[e+1]=d,t[e+2]=p,t[e+3]=_;return}if(u!==_||c!==f||l!==d||h!==p){let g=1-a;const m=c*f+l*d+h*p+u*_,b=m>=0?1:-1,v=1-m*m;if(v>Number.EPSILON){const D=Math.sqrt(v),w=Math.atan2(D,m*b);g=Math.sin(g*w)/D,a=Math.sin(a*w)/D}const x=a*b;if(c=c*g+f*x,l=l*g+d*x,h=h*g+p*x,u=u*g+_*x,g===1-a){const D=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=D,l*=D,h*=D,u*=D}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,r,o){const a=n[i],c=n[i+1],l=n[i+2],h=n[i+3],u=r[o],f=r[o+1],d=r[o+2],p=r[o+3];return t[e]=a*p+h*u+c*d-l*f,t[e+1]=c*p+h*f+l*u-a*d,t[e+2]=l*p+h*d+a*f-c*u,t[e+3]=h*p-a*u-c*f-l*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(i/2),u=a(r/2),f=c(n/2),d=c(i/2),p=c(r/2);switch(o){case"XYZ":this._x=f*h*u+l*d*p,this._y=l*d*u-f*h*p,this._z=l*h*p+f*d*u,this._w=l*h*u-f*d*p;break;case"YXZ":this._x=f*h*u+l*d*p,this._y=l*d*u-f*h*p,this._z=l*h*p-f*d*u,this._w=l*h*u+f*d*p;break;case"ZXY":this._x=f*h*u-l*d*p,this._y=l*d*u+f*h*p,this._z=l*h*p+f*d*u,this._w=l*h*u-f*d*p;break;case"ZYX":this._x=f*h*u-l*d*p,this._y=l*d*u+f*h*p,this._z=l*h*p-f*d*u,this._w=l*h*u+f*d*p;break;case"YZX":this._x=f*h*u+l*d*p,this._y=l*d*u+f*h*p,this._z=l*h*p-f*d*u,this._w=l*h*u-f*d*p;break;case"XZY":this._x=f*h*u-l*d*p,this._y=l*d*u-f*h*p,this._z=l*h*p+f*d*u,this._w=l*h*u+f*d*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],u=e[10],f=n+a+u;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-c)*d,this._y=(r-l)*d,this._z=(o-i)*d}else if(n>a&&n>u){const d=2*Math.sqrt(1+n-a-u);this._w=(h-c)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(r+l)/d}else if(a>u){const d=2*Math.sqrt(1+a-n-u);this._w=(r-l)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(c+h)/d}else{const d=2*Math.sqrt(1+u-n-a);this._w=(o-i)/d,this._x=(r+l)/d,this._y=(c+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(we(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+o*a+i*l-r*c,this._y=i*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-i*a,this._w=o*h-n*a-i*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+i*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const d=1-e;return this._w=d*o+e*this._w,this._x=d*n+e*this._x,this._y=d*i+e*this._y,this._z=d*r+e*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-e)*h)/l,f=Math.sin(e*h)/l;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=i*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class C{constructor(t=0,e=0,n=0){C.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(lu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(lu.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*i-a*n),h=2*(a*e-r*i),u=2*(r*n-o*e);return this.x=e+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=i+c*u+r*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=i*c-r*a,this.y=r*o-n*c,this.z=n*a-i*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Na.copy(this).projectOnVector(t),this.sub(Na)}reflect(t){return this.sub(Na.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(we(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Na=new C,lu=new pe;class ui{constructor(t=new C(1/0,1/0,1/0),e=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(_n.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(_n.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=_n.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,_n):_n.fromBufferAttribute(r,o),_n.applyMatrix4(t.matrixWorld),this.expandByPoint(_n);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),jr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),jr.copy(n.boundingBox)),jr.applyMatrix4(t.matrixWorld),this.union(jr)}const i=t.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,_n),_n.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(sr),$r.subVectors(this.max,sr),hs.subVectors(t.a,sr),us.subVectors(t.b,sr),fs.subVectors(t.c,sr),pi.subVectors(us,hs),mi.subVectors(fs,us),Oi.subVectors(hs,fs);let e=[0,-pi.z,pi.y,0,-mi.z,mi.y,0,-Oi.z,Oi.y,pi.z,0,-pi.x,mi.z,0,-mi.x,Oi.z,0,-Oi.x,-pi.y,pi.x,0,-mi.y,mi.x,0,-Oi.y,Oi.x,0];return!Ua(e,hs,us,fs,$r)||(e=[1,0,0,0,1,0,0,0,1],!Ua(e,hs,us,fs,$r))?!1:(Zr.crossVectors(pi,mi),e=[Zr.x,Zr.y,Zr.z],Ua(e,hs,us,fs,$r))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,_n).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(_n).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Yn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Yn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Yn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Yn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Yn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Yn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Yn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Yn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Yn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Yn=[new C,new C,new C,new C,new C,new C,new C,new C],_n=new C,jr=new ui,hs=new C,us=new C,fs=new C,pi=new C,mi=new C,Oi=new C,sr=new C,$r=new C,Zr=new C,Bi=new C;function Ua(s,t,e,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Bi.fromArray(s,r);const a=i.x*Math.abs(Bi.x)+i.y*Math.abs(Bi.y)+i.z*Math.abs(Bi.z),c=t.dot(Bi),l=e.dot(Bi),h=n.dot(Bi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const U0=new ui,rr=new C,Fa=new C;class Gn{constructor(t=new C,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):U0.setFromPoints(t).getCenter(n);let i=0;for(let r=0,o=t.length;r<o;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;rr.subVectors(t,this.center);const e=rr.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(rr,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Fa.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(rr.copy(t.center).add(Fa)),this.expandByPoint(rr.copy(t.center).sub(Fa))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const jn=new C,Oa=new C,Jr=new C,gi=new C,Ba=new C,Qr=new C,ka=new C;class Hr{constructor(t=new C,e=new C(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,jn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=jn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(jn.copy(this.origin).addScaledVector(this.direction,e),jn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Oa.copy(t).add(e).multiplyScalar(.5),Jr.copy(e).sub(t).normalize(),gi.copy(this.origin).sub(Oa);const r=t.distanceTo(e)*.5,o=-this.direction.dot(Jr),a=gi.dot(this.direction),c=-gi.dot(Jr),l=gi.lengthSq(),h=Math.abs(1-o*o);let u,f,d,p;if(h>0)if(u=o*c-a,f=o*a-c,p=r*h,u>=0)if(f>=-p)if(f<=p){const _=1/h;u*=_,f*=_,d=u*(u+o*f+2*a)+f*(o*u+f+2*c)+l}else f=r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;else f=-r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;else f<=-p?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-c),r),d=-u*u+f*(f+2*c)+l):f<=p?(u=0,f=Math.min(Math.max(-r,-c),r),d=f*(f+2*c)+l):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-c),r),d=-u*u+f*(f+2*c)+l);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Oa).addScaledVector(Jr,f),d}intersectSphere(t,e){jn.subVectors(t.center,this.origin);const n=jn.dot(this.direction),i=jn.dot(jn)-n*n,r=t.radius*t.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(n=(t.min.x-f.x)*l,i=(t.max.x-f.x)*l):(n=(t.max.x-f.x)*l,i=(t.min.x-f.x)*l),h>=0?(r=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),u>=0?(a=(t.min.z-f.z)*u,c=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,c=(t.min.z-f.z)*u),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,jn)!==null}intersectTriangle(t,e,n,i,r){Ba.subVectors(e,t),Qr.subVectors(n,t),ka.crossVectors(Ba,Qr);let o=this.direction.dot(ka),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;gi.subVectors(this.origin,t);const c=a*this.direction.dot(Qr.crossVectors(gi,Qr));if(c<0)return null;const l=a*this.direction.dot(Ba.cross(gi));if(l<0||c+l>o)return null;const h=-a*gi.dot(ka);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Vt{constructor(t,e,n,i,r,o,a,c,l,h,u,f,d,p,_,g){Vt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,c,l,h,u,f,d,p,_,g)}set(t,e,n,i,r,o,a,c,l,h,u,f,d,p,_,g){const m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=i,m[1]=r,m[5]=o,m[9]=a,m[13]=c,m[2]=l,m[6]=h,m[10]=u,m[14]=f,m[3]=d,m[7]=p,m[11]=_,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Vt().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/ds.setFromMatrixColumn(t,0).length(),r=1/ds.setFromMatrixColumn(t,1).length(),o=1/ds.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const f=o*h,d=o*u,p=a*h,_=a*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=d+p*l,e[5]=f-_*l,e[9]=-a*c,e[2]=_-f*l,e[6]=p+d*l,e[10]=o*c}else if(t.order==="YXZ"){const f=c*h,d=c*u,p=l*h,_=l*u;e[0]=f+_*a,e[4]=p*a-d,e[8]=o*l,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=d*a-p,e[6]=_+f*a,e[10]=o*c}else if(t.order==="ZXY"){const f=c*h,d=c*u,p=l*h,_=l*u;e[0]=f-_*a,e[4]=-o*u,e[8]=p+d*a,e[1]=d+p*a,e[5]=o*h,e[9]=_-f*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const f=o*h,d=o*u,p=a*h,_=a*u;e[0]=c*h,e[4]=p*l-d,e[8]=f*l+_,e[1]=c*u,e[5]=_*l+f,e[9]=d*l-p,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const f=o*c,d=o*l,p=a*c,_=a*l;e[0]=c*h,e[4]=_-f*u,e[8]=p*u+d,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=d*u+p,e[10]=f-_*u}else if(t.order==="XZY"){const f=o*c,d=o*l,p=a*c,_=a*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=f*u+_,e[5]=o*h,e[9]=d*u-p,e[2]=p*u-d,e[6]=a*h,e[10]=_*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(F0,t,O0)}lookAt(t,e,n){const i=this.elements;return nn.subVectors(t,e),nn.lengthSq()===0&&(nn.z=1),nn.normalize(),_i.crossVectors(n,nn),_i.lengthSq()===0&&(Math.abs(n.z)===1?nn.x+=1e-4:nn.z+=1e-4,nn.normalize(),_i.crossVectors(n,nn)),_i.normalize(),to.crossVectors(nn,_i),i[0]=_i.x,i[4]=to.x,i[8]=nn.x,i[1]=_i.y,i[5]=to.y,i[9]=nn.y,i[2]=_i.z,i[6]=to.z,i[10]=nn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],f=n[9],d=n[13],p=n[2],_=n[6],g=n[10],m=n[14],b=n[3],v=n[7],x=n[11],D=n[15],w=i[0],P=i[4],I=i[8],T=i[12],y=i[1],L=i[5],k=i[9],U=i[13],V=i[2],q=i[6],j=i[10],Z=i[14],z=i[3],st=i[7],ot=i[11],_t=i[15];return r[0]=o*w+a*y+c*V+l*z,r[4]=o*P+a*L+c*q+l*st,r[8]=o*I+a*k+c*j+l*ot,r[12]=o*T+a*U+c*Z+l*_t,r[1]=h*w+u*y+f*V+d*z,r[5]=h*P+u*L+f*q+d*st,r[9]=h*I+u*k+f*j+d*ot,r[13]=h*T+u*U+f*Z+d*_t,r[2]=p*w+_*y+g*V+m*z,r[6]=p*P+_*L+g*q+m*st,r[10]=p*I+_*k+g*j+m*ot,r[14]=p*T+_*U+g*Z+m*_t,r[3]=b*w+v*y+x*V+D*z,r[7]=b*P+v*L+x*q+D*st,r[11]=b*I+v*k+x*j+D*ot,r[15]=b*T+v*U+x*Z+D*_t,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],u=t[6],f=t[10],d=t[14],p=t[3],_=t[7],g=t[11],m=t[15];return p*(+r*c*u-i*l*u-r*a*f+n*l*f+i*a*d-n*c*d)+_*(+e*c*d-e*l*f+r*o*f-i*o*d+i*l*h-r*c*h)+g*(+e*l*u-e*a*d-r*o*u+n*o*d+r*a*h-n*l*h)+m*(-i*a*h-e*c*u+e*a*f+i*o*u-n*o*f+n*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=t[9],f=t[10],d=t[11],p=t[12],_=t[13],g=t[14],m=t[15],b=u*g*l-_*f*l+_*c*d-a*g*d-u*c*m+a*f*m,v=p*f*l-h*g*l-p*c*d+o*g*d+h*c*m-o*f*m,x=h*_*l-p*u*l+p*a*d-o*_*d-h*a*m+o*u*m,D=p*u*c-h*_*c-p*a*f+o*_*f+h*a*g-o*u*g,w=e*b+n*v+i*x+r*D;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/w;return t[0]=b*P,t[1]=(_*f*r-u*g*r-_*i*d+n*g*d+u*i*m-n*f*m)*P,t[2]=(a*g*r-_*c*r+_*i*l-n*g*l-a*i*m+n*c*m)*P,t[3]=(u*c*r-a*f*r-u*i*l+n*f*l+a*i*d-n*c*d)*P,t[4]=v*P,t[5]=(h*g*r-p*f*r+p*i*d-e*g*d-h*i*m+e*f*m)*P,t[6]=(p*c*r-o*g*r-p*i*l+e*g*l+o*i*m-e*c*m)*P,t[7]=(o*f*r-h*c*r+h*i*l-e*f*l-o*i*d+e*c*d)*P,t[8]=x*P,t[9]=(p*u*r-h*_*r-p*n*d+e*_*d+h*n*m-e*u*m)*P,t[10]=(o*_*r-p*a*r+p*n*l-e*_*l-o*n*m+e*a*m)*P,t[11]=(h*a*r-o*u*r-h*n*l+e*u*l+o*n*d-e*a*d)*P,t[12]=D*P,t[13]=(h*_*i-p*u*i+p*n*f-e*_*f-h*n*g+e*u*g)*P,t[14]=(p*a*i-o*_*i-p*n*c+e*_*c+o*n*g-e*a*g)*P,t[15]=(o*u*i-h*a*i+h*n*c-e*u*c-o*n*f+e*a*f)*P,this}scale(t){const e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,h*a+n,h*c-i*o,0,l*c-i*a,h*c+i*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,o){return this.set(1,n,r,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,h=o+o,u=a+a,f=r*l,d=r*h,p=r*u,_=o*h,g=o*u,m=a*u,b=c*l,v=c*h,x=c*u,D=n.x,w=n.y,P=n.z;return i[0]=(1-(_+m))*D,i[1]=(d+x)*D,i[2]=(p-v)*D,i[3]=0,i[4]=(d-x)*w,i[5]=(1-(f+m))*w,i[6]=(g+b)*w,i[7]=0,i[8]=(p+v)*P,i[9]=(g-b)*P,i[10]=(1-(f+_))*P,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let r=ds.set(i[0],i[1],i[2]).length();const o=ds.set(i[4],i[5],i[6]).length(),a=ds.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],xn.copy(this);const l=1/r,h=1/o,u=1/a;return xn.elements[0]*=l,xn.elements[1]*=l,xn.elements[2]*=l,xn.elements[4]*=h,xn.elements[5]*=h,xn.elements[6]*=h,xn.elements[8]*=u,xn.elements[9]*=u,xn.elements[10]*=u,e.setFromRotationMatrix(xn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,i,r,o,a=ri){const c=this.elements,l=2*r/(e-t),h=2*r/(n-i),u=(e+t)/(e-t),f=(n+i)/(n-i);let d,p;if(a===ri)d=-(o+r)/(o-r),p=-2*o*r/(o-r);else if(a===aa)d=-o/(o-r),p=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=d,c[14]=p,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,r,o,a=ri){const c=this.elements,l=1/(e-t),h=1/(n-i),u=1/(o-r),f=(e+t)*l,d=(n+i)*h;let p,_;if(a===ri)p=(o+r)*u,_=-2*u;else if(a===aa)p=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-d,c[2]=0,c[6]=0,c[10]=_,c[14]=-p,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const ds=new C,xn=new Vt,F0=new C(0,0,0),O0=new C(1,1,1),_i=new C,to=new C,nn=new C,hu=new Vt,uu=new pe;class Ln{constructor(t=0,e=0,n=0,i=Ln.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,r=i[0],o=i[4],a=i[8],c=i[1],l=i[5],h=i[9],u=i[2],f=i[6],d=i[10];switch(e){case"XYZ":this._y=Math.asin(we(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-we(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(we(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-we(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(we(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-we(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return hu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(hu,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return uu.setFromEuler(this),this.setFromQuaternion(uu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ln.DEFAULT_ORDER="XYZ";class oh{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let B0=0;const fu=new C,ps=new pe,$n=new Vt,eo=new C,or=new C,k0=new C,z0=new pe,du=new C(1,0,0),pu=new C(0,1,0),mu=new C(0,0,1),gu={type:"added"},H0={type:"removed"},ms={type:"childadded",child:null},za={type:"childremoved",child:null};class Me extends Zs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:B0++}),this.uuid=pn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Me.DEFAULT_UP.clone();const t=new C,e=new Ln,n=new pe,i=new C(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Vt},normalMatrix:{value:new jt}}),this.matrix=new Vt,this.matrixWorld=new Vt,this.matrixAutoUpdate=Me.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Me.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new oh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ps.setFromAxisAngle(t,e),this.quaternion.multiply(ps),this}rotateOnWorldAxis(t,e){return ps.setFromAxisAngle(t,e),this.quaternion.premultiply(ps),this}rotateX(t){return this.rotateOnAxis(du,t)}rotateY(t){return this.rotateOnAxis(pu,t)}rotateZ(t){return this.rotateOnAxis(mu,t)}translateOnAxis(t,e){return fu.copy(t).applyQuaternion(this.quaternion),this.position.add(fu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(du,t)}translateY(t){return this.translateOnAxis(pu,t)}translateZ(t){return this.translateOnAxis(mu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4($n.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?eo.copy(t):eo.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),or.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?$n.lookAt(or,eo,this.up):$n.lookAt(eo,or,this.up),this.quaternion.setFromRotationMatrix($n),i&&($n.extractRotation(i.matrixWorld),ps.setFromRotationMatrix($n),this.quaternion.premultiply(ps.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(gu),ms.child=t,this.dispatchEvent(ms),ms.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(H0),za.child=t,this.dispatchEvent(za),za.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),$n.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),$n.multiply(t.parent.matrixWorld)),t.applyMatrix4($n),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(gu),ms.child=t,this.dispatchEvent(ms),ms.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(or,t,k0),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(or,z0,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));i.material=a}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];i.animations.push(r(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),u=o(t.shapes),f=o(t.skeletons),d=o(t.animations),p=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),p.length>0&&(n.nodes=p)}return n.object=i,n;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}Me.DEFAULT_UP=new C(0,1,0);Me.DEFAULT_MATRIX_AUTO_UPDATE=!0;Me.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const vn=new C,Zn=new C,Ha=new C,Jn=new C,gs=new C,_s=new C,_u=new C,Va=new C,Ga=new C,Wa=new C,Xa=new oe,qa=new oe,Ka=new oe;class En{constructor(t=new C,e=new C,n=new C){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),vn.subVectors(t,e),i.cross(vn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){vn.subVectors(i,e),Zn.subVectors(n,e),Ha.subVectors(t,e);const o=vn.dot(vn),a=vn.dot(Zn),c=vn.dot(Ha),l=Zn.dot(Zn),h=Zn.dot(Ha),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;const f=1/u,d=(l*c-a*h)*f,p=(o*h-a*c)*f;return r.set(1-d-p,p,d)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Jn)===null?!1:Jn.x>=0&&Jn.y>=0&&Jn.x+Jn.y<=1}static getInterpolation(t,e,n,i,r,o,a,c){return this.getBarycoord(t,e,n,i,Jn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Jn.x),c.addScaledVector(o,Jn.y),c.addScaledVector(a,Jn.z),c)}static getInterpolatedAttribute(t,e,n,i,r,o){return Xa.setScalar(0),qa.setScalar(0),Ka.setScalar(0),Xa.fromBufferAttribute(t,e),qa.fromBufferAttribute(t,n),Ka.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(Xa,r.x),o.addScaledVector(qa,r.y),o.addScaledVector(Ka,r.z),o}static isFrontFacing(t,e,n,i){return vn.subVectors(n,e),Zn.subVectors(t,e),vn.cross(Zn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return vn.subVectors(this.c,this.b),Zn.subVectors(this.a,this.b),vn.cross(Zn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return En.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return En.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return En.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return En.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return En.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,r=this.c;let o,a;gs.subVectors(i,n),_s.subVectors(r,n),Va.subVectors(t,n);const c=gs.dot(Va),l=_s.dot(Va);if(c<=0&&l<=0)return e.copy(n);Ga.subVectors(t,i);const h=gs.dot(Ga),u=_s.dot(Ga);if(h>=0&&u<=h)return e.copy(i);const f=c*u-h*l;if(f<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(gs,o);Wa.subVectors(t,r);const d=gs.dot(Wa),p=_s.dot(Wa);if(p>=0&&d<=p)return e.copy(r);const _=d*l-c*p;if(_<=0&&l>=0&&p<=0)return a=l/(l-p),e.copy(n).addScaledVector(_s,a);const g=h*p-d*u;if(g<=0&&u-h>=0&&d-p>=0)return _u.subVectors(r,i),a=(u-h)/(u-h+(d-p)),e.copy(i).addScaledVector(_u,a);const m=1/(g+_+f);return o=_*m,a=f*m,e.copy(n).addScaledVector(gs,o).addScaledVector(_s,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const up={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},xi={h:0,s:0,l:0},no={h:0,s:0,l:0};function Ya(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class It{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=De){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,te.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=te.workingColorSpace){return this.r=t,this.g=e,this.b=n,te.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=te.workingColorSpace){if(t=rh(t,1),e=we(e,0,1),n=we(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Ya(o,r,t+1/3),this.g=Ya(o,r,t),this.b=Ya(o,r,t-1/3)}return te.toWorkingColorSpace(this,i),this}setStyle(t,e=De){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=De){const n=up[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ai(t.r),this.g=ai(t.g),this.b=ai(t.b),this}copyLinearToSRGB(t){return this.r=Us(t.r),this.g=Us(t.g),this.b=Us(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=De){return te.fromWorkingColorSpace(Oe.copy(this),t),Math.round(we(Oe.r*255,0,255))*65536+Math.round(we(Oe.g*255,0,255))*256+Math.round(we(Oe.b*255,0,255))}getHexString(t=De){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=te.workingColorSpace){te.fromWorkingColorSpace(Oe.copy(this),e);const n=Oe.r,i=Oe.g,r=Oe.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(i-r)/u+(i<r?6:0);break;case i:c=(r-n)/u+2;break;case r:c=(n-i)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=te.workingColorSpace){return te.fromWorkingColorSpace(Oe.copy(this),e),t.r=Oe.r,t.g=Oe.g,t.b=Oe.b,t}getStyle(t=De){te.fromWorkingColorSpace(Oe.copy(this),t);const e=Oe.r,n=Oe.g,i=Oe.b;return t!==De?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(xi),this.setHSL(xi.h+t,xi.s+e,xi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(xi),t.getHSL(no);const n=yr(xi.h,no.h,e),i=yr(xi.s,no.s,e),r=yr(xi.l,no.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Oe=new It;It.NAMES=up;let V0=0;class Cn extends Zs{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:V0++}),this.uuid=pn(),this.name="",this.blending=Ds,this.side=ci,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Gc,this.blendDst=Wc,this.blendEquation=ji,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new It(0,0,0),this.blendAlpha=0,this.depthFunc=zs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=tu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=cs,this.stencilZFail=cs,this.stencilZPass=cs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ds&&(n.blending=this.blending),this.side!==ci&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Gc&&(n.blendSrc=this.blendSrc),this.blendDst!==Wc&&(n.blendDst=this.blendDst),this.blendEquation!==ji&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==zs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==tu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==cs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==cs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==cs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(e){const r=i(t.textures),o=i(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Rn extends Cn{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new It(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ln,this.combine=$l,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Te=new C,io=new pt;class Kt{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=wl,this.updateRanges=[],this.gpuType=wn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)io.fromBufferAttribute(this,e),io.applyMatrix3(t),this.setXY(e,io.x,io.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.applyMatrix3(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.applyMatrix4(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.applyNormalMatrix(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.transformDirection(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Tn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=he(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Tn(e,this.array)),e}setX(t,e){return this.normalized&&(e=he(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Tn(e,this.array)),e}setY(t,e){return this.normalized&&(e=he(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Tn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=he(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Tn(e,this.array)),e}setW(t,e){return this.normalized&&(e=he(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=he(e,this.array),n=he(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=he(e,this.array),n=he(n,this.array),i=he(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=he(e,this.array),n=he(n,this.array),i=he(i,this.array),r=he(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==wl&&(t.usage=this.usage),t}}class fp extends Kt{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class dp extends Kt{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Ee extends Kt{constructor(t,e,n){super(new Float32Array(t),e,n)}}let G0=0;const cn=new Vt,ja=new Me,xs=new C,sn=new ui,ar=new ui,Ie=new C;class be extends Zs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:G0++}),this.uuid=pn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(cp(t)?dp:fp)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new jt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return cn.makeRotationFromQuaternion(t),this.applyMatrix4(cn),this}rotateX(t){return cn.makeRotationX(t),this.applyMatrix4(cn),this}rotateY(t){return cn.makeRotationY(t),this.applyMatrix4(cn),this}rotateZ(t){return cn.makeRotationZ(t),this.applyMatrix4(cn),this}translate(t,e,n){return cn.makeTranslation(t,e,n),this.applyMatrix4(cn),this}scale(t,e,n){return cn.makeScale(t,e,n),this.applyMatrix4(cn),this}lookAt(t){return ja.lookAt(t),ja.updateMatrix(),this.applyMatrix4(ja.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(xs).negate(),this.translate(xs.x,xs.y,xs.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let i=0,r=t.length;i<r;i++){const o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ee(n,3))}else{for(let n=0,i=e.count;n<i;n++){const r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ui);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const r=e[n];sn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ie.addVectors(this.boundingBox.min,sn.min),this.boundingBox.expandByPoint(Ie),Ie.addVectors(this.boundingBox.max,sn.max),this.boundingBox.expandByPoint(Ie)):(this.boundingBox.expandByPoint(sn.min),this.boundingBox.expandByPoint(sn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Gn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(t){const n=this.boundingSphere.center;if(sn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];ar.setFromBufferAttribute(a),this.morphTargetsRelative?(Ie.addVectors(sn.min,ar.min),sn.expandByPoint(Ie),Ie.addVectors(sn.max,ar.max),sn.expandByPoint(Ie)):(sn.expandByPoint(ar.min),sn.expandByPoint(ar.max))}sn.getCenter(n);let i=0;for(let r=0,o=t.count;r<o;r++)Ie.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(Ie));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Ie.fromBufferAttribute(a,l),c&&(xs.fromBufferAttribute(t,l),Ie.add(xs)),i=Math.max(i,n.distanceToSquared(Ie))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Kt(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let I=0;I<n.count;I++)a[I]=new C,c[I]=new C;const l=new C,h=new C,u=new C,f=new pt,d=new pt,p=new pt,_=new C,g=new C;function m(I,T,y){l.fromBufferAttribute(n,I),h.fromBufferAttribute(n,T),u.fromBufferAttribute(n,y),f.fromBufferAttribute(r,I),d.fromBufferAttribute(r,T),p.fromBufferAttribute(r,y),h.sub(l),u.sub(l),d.sub(f),p.sub(f);const L=1/(d.x*p.y-p.x*d.y);isFinite(L)&&(_.copy(h).multiplyScalar(p.y).addScaledVector(u,-d.y).multiplyScalar(L),g.copy(u).multiplyScalar(d.x).addScaledVector(h,-p.x).multiplyScalar(L),a[I].add(_),a[T].add(_),a[y].add(_),c[I].add(g),c[T].add(g),c[y].add(g))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let I=0,T=b.length;I<T;++I){const y=b[I],L=y.start,k=y.count;for(let U=L,V=L+k;U<V;U+=3)m(t.getX(U+0),t.getX(U+1),t.getX(U+2))}const v=new C,x=new C,D=new C,w=new C;function P(I){D.fromBufferAttribute(i,I),w.copy(D);const T=a[I];v.copy(T),v.sub(D.multiplyScalar(D.dot(T))).normalize(),x.crossVectors(w,T);const L=x.dot(c[I])<0?-1:1;o.setXYZW(I,v.x,v.y,v.z,L)}for(let I=0,T=b.length;I<T;++I){const y=b[I],L=y.start,k=y.count;for(let U=L,V=L+k;U<V;U+=3)P(t.getX(U+0)),P(t.getX(U+1)),P(t.getX(U+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Kt(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const i=new C,r=new C,o=new C,a=new C,c=new C,l=new C,h=new C,u=new C;if(t)for(let f=0,d=t.count;f<d;f+=3){const p=t.getX(f+0),_=t.getX(f+1),g=t.getX(f+2);i.fromBufferAttribute(e,p),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,g),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),a.fromBufferAttribute(n,p),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),a.add(h),c.add(h),l.add(h),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let f=0,d=e.count;f<d;f+=3)i.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ie.fromBufferAttribute(t,e),Ie.normalize(),t.setXYZ(e,Ie.x,Ie.y,Ie.z)}toNonIndexed(){function t(a,c){const l=a.array,h=a.itemSize,u=a.normalized,f=new l.constructor(c.length*h);let d=0,p=0;for(let _=0,g=c.length;_<g;_++){a.isInterleavedBufferAttribute?d=c[_]*a.data.stride+a.offset:d=c[_]*h;for(let m=0;m<h;m++)f[p++]=l[d++]}return new Kt(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new be,n=this.index.array,i=this.attributes;for(const a in i){const c=i[a],l=t(c,n);e.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){const f=l[h],d=t(f,n);c.push(d)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const i={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,f=l.length;u<f;u++){const d=l[u];h.push(d.toJSON(t.data))}h.length>0&&(i[c]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const l in i){const h=i[l];this.setAttribute(l,h.clone(e))}const r=t.morphAttributes;for(const l in r){const h=[],u=r[l];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,h=o.length;l<h;l++){const u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const xu=new Vt,ki=new Hr,so=new Gn,vu=new C,ro=new C,oo=new C,ao=new C,$a=new C,co=new C,Mu=new C,lo=new C;class re extends Me{constructor(t=new be,e=new Rn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(r&&a){co.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=a[c],u=r[c];h!==0&&($a.fromBufferAttribute(u,t),o?co.addScaledVector($a,h):co.addScaledVector($a.sub(e),h))}e.add(co)}return e}raycast(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),so.copy(n.boundingSphere),so.applyMatrix4(r),ki.copy(t.ray).recast(t.near),!(so.containsPoint(ki.origin)===!1&&(ki.intersectSphere(so,vu)===null||ki.origin.distanceToSquared(vu)>(t.far-t.near)**2))&&(xu.copy(r).invert(),ki.copy(t.ray).applyMatrix4(xu),!(n.boundingBox!==null&&ki.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ki)))}_computeIntersections(t,e,n){let i;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,_=f.length;p<_;p++){const g=f[p],m=o[g.materialIndex],b=Math.max(g.start,d.start),v=Math.min(a.count,Math.min(g.start+g.count,d.start+d.count));for(let x=b,D=v;x<D;x+=3){const w=a.getX(x),P=a.getX(x+1),I=a.getX(x+2);i=ho(this,m,t,n,l,h,u,w,P,I),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{const p=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let g=p,m=_;g<m;g+=3){const b=a.getX(g),v=a.getX(g+1),x=a.getX(g+2);i=ho(this,o,t,n,l,h,u,b,v,x),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}else if(c!==void 0)if(Array.isArray(o))for(let p=0,_=f.length;p<_;p++){const g=f[p],m=o[g.materialIndex],b=Math.max(g.start,d.start),v=Math.min(c.count,Math.min(g.start+g.count,d.start+d.count));for(let x=b,D=v;x<D;x+=3){const w=x,P=x+1,I=x+2;i=ho(this,m,t,n,l,h,u,w,P,I),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{const p=Math.max(0,d.start),_=Math.min(c.count,d.start+d.count);for(let g=p,m=_;g<m;g+=3){const b=g,v=g+1,x=g+2;i=ho(this,o,t,n,l,h,u,b,v,x),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}}}function W0(s,t,e,n,i,r,o,a){let c;if(t.side===We?c=n.intersectTriangle(o,r,i,!0,a):c=n.intersectTriangle(i,r,o,t.side===ci,a),c===null)return null;lo.copy(a),lo.applyMatrix4(s.matrixWorld);const l=e.ray.origin.distanceTo(lo);return l<e.near||l>e.far?null:{distance:l,point:lo.clone(),object:s}}function ho(s,t,e,n,i,r,o,a,c,l){s.getVertexPosition(a,ro),s.getVertexPosition(c,oo),s.getVertexPosition(l,ao);const h=W0(s,t,e,n,ro,oo,ao,Mu);if(h){const u=new C;En.getBarycoord(Mu,ro,oo,ao,u),i&&(h.uv=En.getInterpolatedAttribute(i,a,c,l,u,new pt)),r&&(h.uv1=En.getInterpolatedAttribute(r,a,c,l,u,new pt)),o&&(h.normal=En.getInterpolatedAttribute(o,a,c,l,u,new C),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a,b:c,c:l,normal:new C,materialIndex:0};En.getNormal(ro,oo,ao,f.normal),h.face=f,h.barycoord=u}return h}class is extends be{constructor(t=1,e=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],h=[],u=[];let f=0,d=0;p("z","y","x",-1,-1,n,e,t,o,r,0),p("z","y","x",1,-1,n,e,-t,o,r,1),p("x","z","y",1,1,t,n,e,i,o,2),p("x","z","y",1,-1,t,n,-e,i,o,3),p("x","y","z",1,-1,t,e,n,i,r,4),p("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new Ee(l,3)),this.setAttribute("normal",new Ee(h,3)),this.setAttribute("uv",new Ee(u,2));function p(_,g,m,b,v,x,D,w,P,I,T){const y=x/P,L=D/I,k=x/2,U=D/2,V=w/2,q=P+1,j=I+1;let Z=0,z=0;const st=new C;for(let ot=0;ot<j;ot++){const _t=ot*L-U;for(let Rt=0;Rt<q;Rt++){const kt=Rt*y-k;st[_]=kt*b,st[g]=_t*v,st[m]=V,l.push(st.x,st.y,st.z),st[_]=0,st[g]=0,st[m]=w>0?1:-1,h.push(st.x,st.y,st.z),u.push(Rt/P),u.push(1-ot/I),Z+=1}}for(let ot=0;ot<I;ot++)for(let _t=0;_t<P;_t++){const Rt=f+_t+q*ot,kt=f+_t+q*(ot+1),K=f+(_t+1)+q*(ot+1),Q=f+(_t+1)+q*ot;c.push(Rt,kt,Q),c.push(kt,K,Q),z+=6}a.addGroup(d,z,T),d+=z,f+=Z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new is(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function qs(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function He(s){const t={};for(let e=0;e<s.length;e++){const n=qs(s[e]);for(const i in n)t[i]=n[i]}return t}function X0(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function pp(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:te.workingColorSpace}const q0={clone:qs,merge:He};var K0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Y0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class hi extends Cn{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=K0,this.fragmentShader=Y0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=qs(t.uniforms),this.uniformsGroups=X0(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class mp extends Me{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Vt,this.projectionMatrix=new Vt,this.projectionMatrixInverse=new Vt,this.coordinateSystem=ri}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const vi=new C,yu=new pt,bu=new pt;class Ve extends mp{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Xs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Mr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Xs*2*Math.atan(Math.tan(Mr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){vi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(vi.x,vi.y).multiplyScalar(-t/vi.z),vi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(vi.x,vi.y).multiplyScalar(-t/vi.z)}getViewSize(t,e){return this.getViewBounds(t,yu,bu),e.subVectors(bu,yu)}setViewOffset(t,e,n,i,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Mr*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*i/c,e-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const vs=-90,Ms=1;class j0 extends Me{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Ve(vs,Ms,t,e);i.layers=this.layers,this.add(i);const r=new Ve(vs,Ms,t,e);r.layers=this.layers,this.add(r);const o=new Ve(vs,Ms,t,e);o.layers=this.layers,this.add(o);const a=new Ve(vs,Ms,t,e);a.layers=this.layers,this.add(a);const c=new Ve(vs,Ms,t,e);c.layers=this.layers,this.add(c);const l=new Ve(vs,Ms,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,r,o,a,c]=e;for(const l of e)this.remove(l);if(t===ri)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===aa)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,c),t.setRenderTarget(n,4,i),t.render(e,l),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(u,f,d),t.xr.enabled=p,n.texture.needsPMREMUpdate=!0}}class gp extends Re{constructor(t,e,n,i,r,o,a,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:Hs,super(t,e,n,i,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class $0 extends ns{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new gp(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Qe}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new is(5,5,5),r=new hi({name:"CubemapFromEquirect",uniforms:qs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:We,blending:Di});r.uniforms.tEquirect.value=e;const o=new re(i,r),a=e.minFilter;return e.minFilter===zn&&(e.minFilter=Qe),new j0(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(r)}}const Za=new C,Z0=new C,J0=new jt;class Ki{constructor(t=new C(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=Za.subVectors(n,e).cross(Z0.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Za),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||J0.getNormalMatrix(t),i=this.coplanarPoint(Za).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const zi=new Gn,uo=new C;class ah{constructor(t=new Ki,e=new Ki,n=new Ki,i=new Ki,r=new Ki,o=new Ki){this.planes=[t,e,n,i,r,o]}set(t,e,n,i,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=ri){const n=this.planes,i=t.elements,r=i[0],o=i[1],a=i[2],c=i[3],l=i[4],h=i[5],u=i[6],f=i[7],d=i[8],p=i[9],_=i[10],g=i[11],m=i[12],b=i[13],v=i[14],x=i[15];if(n[0].setComponents(c-r,f-l,g-d,x-m).normalize(),n[1].setComponents(c+r,f+l,g+d,x+m).normalize(),n[2].setComponents(c+o,f+h,g+p,x+b).normalize(),n[3].setComponents(c-o,f-h,g-p,x-b).normalize(),n[4].setComponents(c-a,f-u,g-_,x-v).normalize(),e===ri)n[5].setComponents(c+a,f+u,g+_,x+v).normalize();else if(e===aa)n[5].setComponents(a,u,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),zi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),zi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(zi)}intersectsSprite(t){return zi.center.set(0,0,0),zi.radius=.7071067811865476,zi.applyMatrix4(t.matrixWorld),this.intersectsSphere(zi)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(uo.x=i.normal.x>0?t.max.x:t.min.x,uo.y=i.normal.y>0?t.max.y:t.min.y,uo.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(uo)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function _p(){let s=null,t=!1,e=null,n=null;function i(r,o){e(r,o),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function Q0(s){const t=new WeakMap;function e(a,c){const l=a.array,h=a.usage,u=l.byteLength,f=s.createBuffer();s.bindBuffer(c,f),s.bufferData(c,l,h),a.onUploadCallback();let d;if(l instanceof Float32Array)d=s.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?d=s.HALF_FLOAT:d=s.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=s.SHORT;else if(l instanceof Uint32Array)d=s.UNSIGNED_INT;else if(l instanceof Int32Array)d=s.INT;else if(l instanceof Int8Array)d=s.BYTE;else if(l instanceof Uint8Array)d=s.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){const h=c.array,u=c.updateRanges;if(s.bindBuffer(l,a),u.length===0)s.bufferSubData(l,0,h);else{u.sort((d,p)=>d.start-p.start);let f=0;for(let d=1;d<u.length;d++){const p=u[f],_=u[d];_.start<=p.start+p.count+1?p.count=Math.max(p.count,_.start+_.count-p.start):(++f,u[f]=_)}u.length=f+1;for(let d=0,p=u.length;d<p;d++){const _=u[d];s.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(s.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:i,remove:r,update:o}}class Vr extends be{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(i),l=a+1,h=c+1,u=t/a,f=e/c,d=[],p=[],_=[],g=[];for(let m=0;m<h;m++){const b=m*f-o;for(let v=0;v<l;v++){const x=v*u-r;p.push(x,-b,0),_.push(0,0,1),g.push(v/a),g.push(1-m/c)}}for(let m=0;m<c;m++)for(let b=0;b<a;b++){const v=b+l*m,x=b+l*(m+1),D=b+1+l*(m+1),w=b+1+l*m;d.push(v,x,w),d.push(x,D,w)}this.setIndex(d),this.setAttribute("position",new Ee(p,3)),this.setAttribute("normal",new Ee(_,3)),this.setAttribute("uv",new Ee(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Vr(t.width,t.height,t.widthSegments,t.heightSegments)}}var tg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,eg=`#ifdef USE_ALPHAHASH
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
#endif`,ng=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ig=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,sg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,rg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,og=`#ifdef USE_AOMAP
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
#endif`,ag=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,cg=`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,lg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,hg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ug=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,fg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,dg=`#ifdef USE_IRIDESCENCE
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
#endif`,pg=`#ifdef USE_BUMPMAP
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
#endif`,mg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,gg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,_g=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,xg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,vg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Mg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,yg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,bg=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Sg=`#define PI 3.141592653589793
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
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
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
} // validated`,Tg=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Eg=`vec3 transformedNormal = objectNormal;
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
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Ag=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,wg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Rg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Cg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Pg="gl_FragColor = linearToOutputTexel( gl_FragColor );",Lg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ig=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Dg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ng=`#ifdef USE_ENVMAP
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
#endif`,Ug=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Fg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Og=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Bg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,kg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,zg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Hg=`#ifdef USE_GRADIENTMAP
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
}`,Vg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Gg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Wg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Xg=`uniform bool receiveShadow;
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
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
#endif`,qg=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
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
	#endif
#endif`,Kg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Yg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,jg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,$g=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Zg=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,Jg=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
		vec3 iridescenceF0;
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
		float v = 0.5 / ( gv + gl );
		return saturate(v);
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
	vec3 f0 = material.specularColor;
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Qg=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,t_=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,e_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,n_=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,i_=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,s_=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,r_=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,o_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,a_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,c_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,l_=`#if defined( USE_POINTS_UV )
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
#endif`,h_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,u_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,f_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,d_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,p_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,m_=`#ifdef USE_MORPHTARGETS
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
#endif`,g_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,__=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,x_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,v_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,M_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,y_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,b_=`#ifdef USE_NORMALMAP
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
#endif`,S_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,T_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,E_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,A_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,w_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,R_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,C_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,P_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,L_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,I_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,D_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,N_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,U_=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
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
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
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
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
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
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,F_=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
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
#endif`,O_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
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
#endif`,B_=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
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
}`,k_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,z_=`#ifdef USE_SKINNING
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
#endif`,H_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,V_=`#ifdef USE_SKINNING
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
#endif`,G_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,W_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,X_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,q_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,K_=`#ifdef USE_TRANSMISSION
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
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Y_=`#ifdef USE_TRANSMISSION
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
#endif`,j_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Z_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,J_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Q_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,tx=`uniform sampler2D t2D;
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
}`,ex=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,nx=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ix=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rx=`#include <common>
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
}`,ox=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,ax=`#define DISTANCE
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
}`,cx=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,lx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,hx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ux=`uniform float scale;
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
}`,fx=`uniform vec3 diffuse;
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
}`,dx=`#include <common>
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
}`,px=`uniform vec3 diffuse;
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
}`,mx=`#define LAMBERT
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
}`,gx=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,_x=`#define MATCAP
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
}`,xx=`#define MATCAP
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
}`,vx=`#define NORMAL
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
}`,Mx=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
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
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,yx=`#define PHONG
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
}`,bx=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,Sx=`#define STANDARD
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
}`,Tx=`#define STANDARD
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
#include <packing>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,Ex=`#define TOON
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
}`,Ax=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,wx=`uniform float size;
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
}`,Rx=`uniform vec3 diffuse;
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
}`,Cx=`#include <common>
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
}`,Px=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,Lx=`uniform float rotation;
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
}`,Ix=`uniform vec3 diffuse;
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
}`,$t={alphahash_fragment:tg,alphahash_pars_fragment:eg,alphamap_fragment:ng,alphamap_pars_fragment:ig,alphatest_fragment:sg,alphatest_pars_fragment:rg,aomap_fragment:og,aomap_pars_fragment:ag,batching_pars_vertex:cg,batching_vertex:lg,begin_vertex:hg,beginnormal_vertex:ug,bsdfs:fg,iridescence_fragment:dg,bumpmap_pars_fragment:pg,clipping_planes_fragment:mg,clipping_planes_pars_fragment:gg,clipping_planes_pars_vertex:_g,clipping_planes_vertex:xg,color_fragment:vg,color_pars_fragment:Mg,color_pars_vertex:yg,color_vertex:bg,common:Sg,cube_uv_reflection_fragment:Tg,defaultnormal_vertex:Eg,displacementmap_pars_vertex:Ag,displacementmap_vertex:wg,emissivemap_fragment:Rg,emissivemap_pars_fragment:Cg,colorspace_fragment:Pg,colorspace_pars_fragment:Lg,envmap_fragment:Ig,envmap_common_pars_fragment:Dg,envmap_pars_fragment:Ng,envmap_pars_vertex:Ug,envmap_physical_pars_fragment:qg,envmap_vertex:Fg,fog_vertex:Og,fog_pars_vertex:Bg,fog_fragment:kg,fog_pars_fragment:zg,gradientmap_pars_fragment:Hg,lightmap_pars_fragment:Vg,lights_lambert_fragment:Gg,lights_lambert_pars_fragment:Wg,lights_pars_begin:Xg,lights_toon_fragment:Kg,lights_toon_pars_fragment:Yg,lights_phong_fragment:jg,lights_phong_pars_fragment:$g,lights_physical_fragment:Zg,lights_physical_pars_fragment:Jg,lights_fragment_begin:Qg,lights_fragment_maps:t_,lights_fragment_end:e_,logdepthbuf_fragment:n_,logdepthbuf_pars_fragment:i_,logdepthbuf_pars_vertex:s_,logdepthbuf_vertex:r_,map_fragment:o_,map_pars_fragment:a_,map_particle_fragment:c_,map_particle_pars_fragment:l_,metalnessmap_fragment:h_,metalnessmap_pars_fragment:u_,morphinstance_vertex:f_,morphcolor_vertex:d_,morphnormal_vertex:p_,morphtarget_pars_vertex:m_,morphtarget_vertex:g_,normal_fragment_begin:__,normal_fragment_maps:x_,normal_pars_fragment:v_,normal_pars_vertex:M_,normal_vertex:y_,normalmap_pars_fragment:b_,clearcoat_normal_fragment_begin:S_,clearcoat_normal_fragment_maps:T_,clearcoat_pars_fragment:E_,iridescence_pars_fragment:A_,opaque_fragment:w_,packing:R_,premultiplied_alpha_fragment:C_,project_vertex:P_,dithering_fragment:L_,dithering_pars_fragment:I_,roughnessmap_fragment:D_,roughnessmap_pars_fragment:N_,shadowmap_pars_fragment:U_,shadowmap_pars_vertex:F_,shadowmap_vertex:O_,shadowmask_pars_fragment:B_,skinbase_vertex:k_,skinning_pars_vertex:z_,skinning_vertex:H_,skinnormal_vertex:V_,specularmap_fragment:G_,specularmap_pars_fragment:W_,tonemapping_fragment:X_,tonemapping_pars_fragment:q_,transmission_fragment:K_,transmission_pars_fragment:Y_,uv_pars_fragment:j_,uv_pars_vertex:$_,uv_vertex:Z_,worldpos_vertex:J_,background_vert:Q_,background_frag:tx,backgroundCube_vert:ex,backgroundCube_frag:nx,cube_vert:ix,cube_frag:sx,depth_vert:rx,depth_frag:ox,distanceRGBA_vert:ax,distanceRGBA_frag:cx,equirect_vert:lx,equirect_frag:hx,linedashed_vert:ux,linedashed_frag:fx,meshbasic_vert:dx,meshbasic_frag:px,meshlambert_vert:mx,meshlambert_frag:gx,meshmatcap_vert:_x,meshmatcap_frag:xx,meshnormal_vert:vx,meshnormal_frag:Mx,meshphong_vert:yx,meshphong_frag:bx,meshphysical_vert:Sx,meshphysical_frag:Tx,meshtoon_vert:Ex,meshtoon_frag:Ax,points_vert:wx,points_frag:Rx,shadow_vert:Cx,shadow_frag:Px,sprite_vert:Lx,sprite_frag:Ix},yt={common:{diffuse:{value:new It(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new jt},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new jt}},envmap:{envMap:{value:null},envMapRotation:{value:new jt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new jt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new jt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new jt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new jt},normalScale:{value:new pt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new jt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new jt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new jt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new jt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new It(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new It(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0},uvTransform:{value:new jt}},sprite:{diffuse:{value:new It(16777215)},opacity:{value:1},center:{value:new pt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new jt},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0}}},Fn={basic:{uniforms:He([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.fog]),vertexShader:$t.meshbasic_vert,fragmentShader:$t.meshbasic_frag},lambert:{uniforms:He([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,yt.lights,{emissive:{value:new It(0)}}]),vertexShader:$t.meshlambert_vert,fragmentShader:$t.meshlambert_frag},phong:{uniforms:He([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,yt.lights,{emissive:{value:new It(0)},specular:{value:new It(1118481)},shininess:{value:30}}]),vertexShader:$t.meshphong_vert,fragmentShader:$t.meshphong_frag},standard:{uniforms:He([yt.common,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.roughnessmap,yt.metalnessmap,yt.fog,yt.lights,{emissive:{value:new It(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$t.meshphysical_vert,fragmentShader:$t.meshphysical_frag},toon:{uniforms:He([yt.common,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.gradientmap,yt.fog,yt.lights,{emissive:{value:new It(0)}}]),vertexShader:$t.meshtoon_vert,fragmentShader:$t.meshtoon_frag},matcap:{uniforms:He([yt.common,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,{matcap:{value:null}}]),vertexShader:$t.meshmatcap_vert,fragmentShader:$t.meshmatcap_frag},points:{uniforms:He([yt.points,yt.fog]),vertexShader:$t.points_vert,fragmentShader:$t.points_frag},dashed:{uniforms:He([yt.common,yt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$t.linedashed_vert,fragmentShader:$t.linedashed_frag},depth:{uniforms:He([yt.common,yt.displacementmap]),vertexShader:$t.depth_vert,fragmentShader:$t.depth_frag},normal:{uniforms:He([yt.common,yt.bumpmap,yt.normalmap,yt.displacementmap,{opacity:{value:1}}]),vertexShader:$t.meshnormal_vert,fragmentShader:$t.meshnormal_frag},sprite:{uniforms:He([yt.sprite,yt.fog]),vertexShader:$t.sprite_vert,fragmentShader:$t.sprite_frag},background:{uniforms:{uvTransform:{value:new jt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$t.background_vert,fragmentShader:$t.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new jt}},vertexShader:$t.backgroundCube_vert,fragmentShader:$t.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$t.cube_vert,fragmentShader:$t.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$t.equirect_vert,fragmentShader:$t.equirect_frag},distanceRGBA:{uniforms:He([yt.common,yt.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$t.distanceRGBA_vert,fragmentShader:$t.distanceRGBA_frag},shadow:{uniforms:He([yt.lights,yt.fog,{color:{value:new It(0)},opacity:{value:1}}]),vertexShader:$t.shadow_vert,fragmentShader:$t.shadow_frag}};Fn.physical={uniforms:He([Fn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new jt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new jt},clearcoatNormalScale:{value:new pt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new jt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new jt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new jt},sheen:{value:0},sheenColor:{value:new It(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new jt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new jt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new jt},transmissionSamplerSize:{value:new pt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new jt},attenuationDistance:{value:0},attenuationColor:{value:new It(0)},specularColor:{value:new It(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new jt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new jt},anisotropyVector:{value:new pt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new jt}}]),vertexShader:$t.meshphysical_vert,fragmentShader:$t.meshphysical_frag};const fo={r:0,b:0,g:0},Hi=new Ln,Dx=new Vt;function Nx(s,t,e,n,i,r,o){const a=new It(0);let c=r===!0?0:1,l,h,u=null,f=0,d=null;function p(b){let v=b.isScene===!0?b.background:null;return v&&v.isTexture&&(v=(b.backgroundBlurriness>0?e:t).get(v)),v}function _(b){let v=!1;const x=p(b);x===null?m(a,c):x&&x.isColor&&(m(x,1),v=!0);const D=s.xr.getEnvironmentBlendMode();D==="additive"?n.buffers.color.setClear(0,0,0,1,o):D==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function g(b,v){const x=p(v);x&&(x.isCubeTexture||x.mapping===_a)?(h===void 0&&(h=new re(new is(1,1,1),new hi({name:"BackgroundCubeMaterial",uniforms:qs(Fn.backgroundCube.uniforms),vertexShader:Fn.backgroundCube.vertexShader,fragmentShader:Fn.backgroundCube.fragmentShader,side:We,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(D,w,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),Hi.copy(v.backgroundRotation),Hi.x*=-1,Hi.y*=-1,Hi.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Hi.y*=-1,Hi.z*=-1),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Dx.makeRotationFromEuler(Hi)),h.material.toneMapped=te.getTransfer(x.colorSpace)!==fe,(u!==x||f!==x.version||d!==s.toneMapping)&&(h.material.needsUpdate=!0,u=x,f=x.version,d=s.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new re(new Vr(2,2),new hi({name:"BackgroundMaterial",uniforms:qs(Fn.background.uniforms),vertexShader:Fn.background.vertexShader,fragmentShader:Fn.background.fragmentShader,side:ci,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.toneMapped=te.getTransfer(x.colorSpace)!==fe,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||f!==x.version||d!==s.toneMapping)&&(l.material.needsUpdate=!0,u=x,f=x.version,d=s.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null))}function m(b,v){b.getRGB(fo,pp(s)),n.buffers.color.setClear(fo.r,fo.g,fo.b,v,o)}return{getClearColor:function(){return a},setClearColor:function(b,v=1){a.set(b),c=v,m(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(b){c=b,m(a,c)},render:_,addToRenderList:g}}function Ux(s,t){const e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=f(null);let r=i,o=!1;function a(y,L,k,U,V){let q=!1;const j=u(U,k,L);r!==j&&(r=j,l(r.object)),q=d(y,U,k,V),q&&p(y,U,k,V),V!==null&&t.update(V,s.ELEMENT_ARRAY_BUFFER),(q||o)&&(o=!1,x(y,L,k,U),V!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(V).buffer))}function c(){return s.createVertexArray()}function l(y){return s.bindVertexArray(y)}function h(y){return s.deleteVertexArray(y)}function u(y,L,k){const U=k.wireframe===!0;let V=n[y.id];V===void 0&&(V={},n[y.id]=V);let q=V[L.id];q===void 0&&(q={},V[L.id]=q);let j=q[U];return j===void 0&&(j=f(c()),q[U]=j),j}function f(y){const L=[],k=[],U=[];for(let V=0;V<e;V++)L[V]=0,k[V]=0,U[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:k,attributeDivisors:U,object:y,attributes:{},index:null}}function d(y,L,k,U){const V=r.attributes,q=L.attributes;let j=0;const Z=k.getAttributes();for(const z in Z)if(Z[z].location>=0){const ot=V[z];let _t=q[z];if(_t===void 0&&(z==="instanceMatrix"&&y.instanceMatrix&&(_t=y.instanceMatrix),z==="instanceColor"&&y.instanceColor&&(_t=y.instanceColor)),ot===void 0||ot.attribute!==_t||_t&&ot.data!==_t.data)return!0;j++}return r.attributesNum!==j||r.index!==U}function p(y,L,k,U){const V={},q=L.attributes;let j=0;const Z=k.getAttributes();for(const z in Z)if(Z[z].location>=0){let ot=q[z];ot===void 0&&(z==="instanceMatrix"&&y.instanceMatrix&&(ot=y.instanceMatrix),z==="instanceColor"&&y.instanceColor&&(ot=y.instanceColor));const _t={};_t.attribute=ot,ot&&ot.data&&(_t.data=ot.data),V[z]=_t,j++}r.attributes=V,r.attributesNum=j,r.index=U}function _(){const y=r.newAttributes;for(let L=0,k=y.length;L<k;L++)y[L]=0}function g(y){m(y,0)}function m(y,L){const k=r.newAttributes,U=r.enabledAttributes,V=r.attributeDivisors;k[y]=1,U[y]===0&&(s.enableVertexAttribArray(y),U[y]=1),V[y]!==L&&(s.vertexAttribDivisor(y,L),V[y]=L)}function b(){const y=r.newAttributes,L=r.enabledAttributes;for(let k=0,U=L.length;k<U;k++)L[k]!==y[k]&&(s.disableVertexAttribArray(k),L[k]=0)}function v(y,L,k,U,V,q,j){j===!0?s.vertexAttribIPointer(y,L,k,V,q):s.vertexAttribPointer(y,L,k,U,V,q)}function x(y,L,k,U){_();const V=U.attributes,q=k.getAttributes(),j=L.defaultAttributeValues;for(const Z in q){const z=q[Z];if(z.location>=0){let st=V[Z];if(st===void 0&&(Z==="instanceMatrix"&&y.instanceMatrix&&(st=y.instanceMatrix),Z==="instanceColor"&&y.instanceColor&&(st=y.instanceColor)),st!==void 0){const ot=st.normalized,_t=st.itemSize,Rt=t.get(st);if(Rt===void 0)continue;const kt=Rt.buffer,K=Rt.type,Q=Rt.bytesPerElement,St=K===s.INT||K===s.UNSIGNED_INT||st.gpuType===Zl;if(st.isInterleavedBufferAttribute){const it=st.data,Pt=it.stride,Bt=st.offset;if(it.isInstancedInterleavedBuffer){for(let Lt=0;Lt<z.locationSize;Lt++)m(z.location+Lt,it.meshPerAttribute);y.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let Lt=0;Lt<z.locationSize;Lt++)g(z.location+Lt);s.bindBuffer(s.ARRAY_BUFFER,kt);for(let Lt=0;Lt<z.locationSize;Lt++)v(z.location+Lt,_t/z.locationSize,K,ot,Pt*Q,(Bt+_t/z.locationSize*Lt)*Q,St)}else{if(st.isInstancedBufferAttribute){for(let it=0;it<z.locationSize;it++)m(z.location+it,st.meshPerAttribute);y.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let it=0;it<z.locationSize;it++)g(z.location+it);s.bindBuffer(s.ARRAY_BUFFER,kt);for(let it=0;it<z.locationSize;it++)v(z.location+it,_t/z.locationSize,K,ot,_t*Q,_t/z.locationSize*it*Q,St)}}else if(j!==void 0){const ot=j[Z];if(ot!==void 0)switch(ot.length){case 2:s.vertexAttrib2fv(z.location,ot);break;case 3:s.vertexAttrib3fv(z.location,ot);break;case 4:s.vertexAttrib4fv(z.location,ot);break;default:s.vertexAttrib1fv(z.location,ot)}}}}b()}function D(){I();for(const y in n){const L=n[y];for(const k in L){const U=L[k];for(const V in U)h(U[V].object),delete U[V];delete L[k]}delete n[y]}}function w(y){if(n[y.id]===void 0)return;const L=n[y.id];for(const k in L){const U=L[k];for(const V in U)h(U[V].object),delete U[V];delete L[k]}delete n[y.id]}function P(y){for(const L in n){const k=n[L];if(k[y.id]===void 0)continue;const U=k[y.id];for(const V in U)h(U[V].object),delete U[V];delete k[y.id]}}function I(){T(),o=!0,r!==i&&(r=i,l(r.object))}function T(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:I,resetDefaultState:T,dispose:D,releaseStatesOfGeometry:w,releaseStatesOfProgram:P,initAttributes:_,enableAttribute:g,disableUnusedAttributes:b}}function Fx(s,t,e){let n;function i(l){n=l}function r(l,h){s.drawArrays(n,l,h),e.update(h,n,1)}function o(l,h,u){u!==0&&(s.drawArraysInstanced(n,l,h,u),e.update(h,n,u))}function a(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let d=0;for(let p=0;p<u;p++)d+=h[p];e.update(d,n,1)}function c(l,h,u,f){if(u===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let p=0;p<l.length;p++)o(l[p],h[p],f[p]);else{d.multiDrawArraysInstancedWEBGL(n,l,0,h,0,f,0,u);let p=0;for(let _=0;_<u;_++)p+=h[_]*f[_];e.update(p,n,1)}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function Ox(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const P=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(P){return!(P!==dn&&n.convert(P)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(P){const I=P===zr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(P!==li&&n.convert(P)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==wn&&!I)}function c(P){if(P==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),d=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),p=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),m=s.getParameter(s.MAX_VERTEX_ATTRIBS),b=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),v=s.getParameter(s.MAX_VARYING_VECTORS),x=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),D=p>0,w=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:p,maxTextureSize:_,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:b,maxVaryings:v,maxFragmentUniforms:x,vertexTextures:D,maxSamples:w}}function Bx(s){const t=this;let e=null,n=0,i=!1,r=!1;const o=new Ki,a=new jt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const d=u.length!==0||f||n!==0||i;return i=f,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,d){const p=u.clippingPlanes,_=u.clipIntersection,g=u.clipShadows,m=s.get(u);if(!i||p===null||p.length===0||r&&!g)r?h(null):l();else{const b=r?0:n,v=b*4;let x=m.clippingState||null;c.value=x,x=h(p,f,v,d);for(let D=0;D!==v;++D)x[D]=e[D];m.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=b}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,d,p){const _=u!==null?u.length:0;let g=null;if(_!==0){if(g=c.value,p!==!0||g===null){const m=d+_*4,b=f.matrixWorldInverse;a.getNormalMatrix(b),(g===null||g.length<m)&&(g=new Float32Array(m));for(let v=0,x=d;v!==_;++v,x+=4)o.copy(u[v]).applyMatrix4(b,a),o.normal.toArray(g,x),g[x+3]=o.constant}c.value=g,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,g}}function kx(s){let t=new WeakMap;function e(o,a){return a===Jc?o.mapping=Hs:a===Qc&&(o.mapping=Vs),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Jc||a===Qc)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new $0(c.height);return l.fromEquirectangularTexture(s,o),t.set(o,l),o.addEventListener("dispose",i),e(l.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class ch extends mp{constructor(t=-1,e=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=i+e,c=i-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Rs=4,Su=[.125,.215,.35,.446,.526,.582],$i=20,Ja=new ch,Tu=new It;let Qa=null,tc=0,ec=0,nc=!1;const Yi=(1+Math.sqrt(5))/2,ys=1/Yi,Eu=[new C(-Yi,ys,0),new C(Yi,ys,0),new C(-ys,0,Yi),new C(ys,0,Yi),new C(0,Yi,-ys),new C(0,Yi,ys),new C(-1,1,-1),new C(1,1,-1),new C(-1,1,1),new C(1,1,1)];class Au{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){Qa=this._renderer.getRenderTarget(),tc=this._renderer.getActiveCubeFace(),ec=this._renderer.getActiveMipmapLevel(),nc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Cu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ru(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Qa,tc,ec),this._renderer.xr.enabled=nc,t.scissorTest=!1,po(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Hs||t.mapping===Vs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Qa=this._renderer.getRenderTarget(),tc=this._renderer.getActiveCubeFace(),ec=this._renderer.getActiveMipmapLevel(),nc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Qe,minFilter:Qe,generateMipmaps:!1,type:zr,format:dn,colorSpace:qe,depthBuffer:!1},i=wu(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=wu(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=zx(r)),this._blurMaterial=Hx(r,t,e)}return i}_compileMaterial(t){const e=new re(this._lodPlanes[0],t);this._renderer.compile(e,Ja)}_sceneToCubeUV(t,e,n,i){const a=new Ve(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(Tu),h.toneMapping=Ni,h.autoClear=!1;const d=new Rn({name:"PMREM.Background",side:We,depthWrite:!1,depthTest:!1}),p=new re(new is,d);let _=!1;const g=t.background;g?g.isColor&&(d.color.copy(g),t.background=null,_=!0):(d.color.copy(Tu),_=!0);for(let m=0;m<6;m++){const b=m%3;b===0?(a.up.set(0,c[m],0),a.lookAt(l[m],0,0)):b===1?(a.up.set(0,0,c[m]),a.lookAt(0,l[m],0)):(a.up.set(0,c[m],0),a.lookAt(0,0,l[m]));const v=this._cubeSize;po(i,b*v,m>2?v:0,v,v),h.setRenderTarget(i),_&&h.render(p,a),h.render(t,a)}p.geometry.dispose(),p.material.dispose(),h.toneMapping=f,h.autoClear=u,t.background=g}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===Hs||t.mapping===Vs;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Cu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ru());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new re(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const c=this._cubeSize;po(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,Ja)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Eu[(i-r-1)%Eu.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",r),this._halfBlur(o,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new re(this._lodPlanes[i],l),f=l.uniforms,d=this._sizeLods[n]-1,p=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*$i-1),_=r/p,g=isFinite(r)?1+Math.floor(h*_):$i;g>$i&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${$i}`);const m=[];let b=0;for(let P=0;P<$i;++P){const I=P/_,T=Math.exp(-I*I/2);m.push(T),P===0?b+=T:P<g&&(b+=2*T)}for(let P=0;P<m.length;P++)m[P]=m[P]/b;f.envMap.value=t.texture,f.samples.value=g,f.weights.value=m,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:v}=this;f.dTheta.value=p,f.mipInt.value=v-n;const x=this._sizeLods[i],D=3*x*(i>v-Rs?i-v+Rs:0),w=4*(this._cubeSize-x);po(e,D,w,3*x,2*x),c.setRenderTarget(e),c.render(u,Ja)}}function zx(s){const t=[],e=[],n=[];let i=s;const r=s-Rs+1+Su.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);e.push(a);let c=1/a;o>s-Rs?c=Su[o-s+Rs-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),h=-l,u=1+l,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,p=6,_=3,g=2,m=1,b=new Float32Array(_*p*d),v=new Float32Array(g*p*d),x=new Float32Array(m*p*d);for(let w=0;w<d;w++){const P=w%3*2/3-1,I=w>2?0:-1,T=[P,I,0,P+2/3,I,0,P+2/3,I+1,0,P,I,0,P+2/3,I+1,0,P,I+1,0];b.set(T,_*p*w),v.set(f,g*p*w);const y=[w,w,w,w,w,w];x.set(y,m*p*w)}const D=new be;D.setAttribute("position",new Kt(b,_)),D.setAttribute("uv",new Kt(v,g)),D.setAttribute("faceIndex",new Kt(x,m)),t.push(D),i>Rs&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function wu(s,t,e){const n=new ns(s,t,e);return n.texture.mapping=_a,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function po(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function Hx(s,t,e){const n=new Float32Array($i),i=new C(0,1,0);return new hi({name:"SphericalGaussianBlur",defines:{n:$i,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:lh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Di,depthTest:!1,depthWrite:!1})}function Ru(){return new hi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:lh(),fragmentShader:`

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
		`,blending:Di,depthTest:!1,depthWrite:!1})}function Cu(){return new hi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:lh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Di,depthTest:!1,depthWrite:!1})}function lh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Vx(s){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===Jc||c===Qc,h=c===Hs||c===Vs;if(l||h){let u=t.get(a);const f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new Au(s)),u=l?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const d=a.image;return l&&d&&d.height>0||h&&d&&i(d)?(e===null&&(e=new Au(s)),u=l?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function i(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Gx(s){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&_r("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Wx(s,t,e,n){const i={},r=new WeakMap;function o(u){const f=u.target;f.index!==null&&t.remove(f.index);for(const p in f.attributes)t.remove(f.attributes[p]);for(const p in f.morphAttributes){const _=f.morphAttributes[p];for(let g=0,m=_.length;g<m;g++)t.remove(_[g])}f.removeEventListener("dispose",o),delete i[f.id];const d=r.get(f);d&&(t.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(u,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,e.memory.geometries++),f}function c(u){const f=u.attributes;for(const p in f)t.update(f[p],s.ARRAY_BUFFER);const d=u.morphAttributes;for(const p in d){const _=d[p];for(let g=0,m=_.length;g<m;g++)t.update(_[g],s.ARRAY_BUFFER)}}function l(u){const f=[],d=u.index,p=u.attributes.position;let _=0;if(d!==null){const b=d.array;_=d.version;for(let v=0,x=b.length;v<x;v+=3){const D=b[v+0],w=b[v+1],P=b[v+2];f.push(D,w,w,P,P,D)}}else if(p!==void 0){const b=p.array;_=p.version;for(let v=0,x=b.length/3-1;v<x;v+=3){const D=v+0,w=v+1,P=v+2;f.push(D,w,w,P,P,D)}}else return;const g=new(cp(f)?dp:fp)(f,1);g.version=_;const m=r.get(u);m&&t.remove(m),r.set(u,g)}function h(u){const f=r.get(u);if(f){const d=u.index;d!==null&&f.version<d.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function Xx(s,t,e){let n;function i(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function c(f,d){s.drawElements(n,d,r,f*o),e.update(d,n,1)}function l(f,d,p){p!==0&&(s.drawElementsInstanced(n,d,r,f*o,p),e.update(d,n,p))}function h(f,d,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,p);let g=0;for(let m=0;m<p;m++)g+=d[m];e.update(g,n,1)}function u(f,d,p,_){if(p===0)return;const g=t.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<f.length;m++)l(f[m]/o,d[m],_[m]);else{g.multiDrawElementsInstancedWEBGL(n,d,0,r,f,0,_,0,p);let m=0;for(let b=0;b<p;b++)m+=d[b]*_[b];e.update(m,n,1)}}this.setMode=i,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function qx(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=a*(r/3);break;case s.LINES:e.lines+=a*(r/2);break;case s.LINE_STRIP:e.lines+=a*(r-1);break;case s.LINE_LOOP:e.lines+=a*r;break;case s.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function Kx(s,t,e){const n=new WeakMap,i=new oe;function r(o,a,c){const l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let f=n.get(a);if(f===void 0||f.count!==u){let y=function(){I.dispose(),n.delete(a),a.removeEventListener("dispose",y)};var d=y;f!==void 0&&f.texture.dispose();const p=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],b=a.morphAttributes.normal||[],v=a.morphAttributes.color||[];let x=0;p===!0&&(x=1),_===!0&&(x=2),g===!0&&(x=3);let D=a.attributes.position.count*x,w=1;D>t.maxTextureSize&&(w=Math.ceil(D/t.maxTextureSize),D=t.maxTextureSize);const P=new Float32Array(D*w*4*u),I=new hp(P,D,w,u);I.type=wn,I.needsUpdate=!0;const T=x*4;for(let L=0;L<u;L++){const k=m[L],U=b[L],V=v[L],q=D*w*4*L;for(let j=0;j<k.count;j++){const Z=j*T;p===!0&&(i.fromBufferAttribute(k,j),P[q+Z+0]=i.x,P[q+Z+1]=i.y,P[q+Z+2]=i.z,P[q+Z+3]=0),_===!0&&(i.fromBufferAttribute(U,j),P[q+Z+4]=i.x,P[q+Z+5]=i.y,P[q+Z+6]=i.z,P[q+Z+7]=0),g===!0&&(i.fromBufferAttribute(V,j),P[q+Z+8]=i.x,P[q+Z+9]=i.y,P[q+Z+10]=i.z,P[q+Z+11]=V.itemSize===4?i.w:1)}}f={count:u,texture:I,size:new pt(D,w)},n.set(a,f),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",o.morphTexture,e);else{let p=0;for(let g=0;g<l.length;g++)p+=l[g];const _=a.morphTargetsRelative?1:1-p;c.getUniforms().setValue(s,"morphTargetBaseInfluence",_),c.getUniforms().setValue(s,"morphTargetInfluences",l)}c.getUniforms().setValue(s,"morphTargetsTexture",f.texture,e),c.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}return{update:r}}function Yx(s,t,e,n){let i=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,u=t.get(c,h);if(i.get(u)!==l&&(t.update(u),i.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),i.get(c)!==l&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;i.get(f)!==l&&(f.update(),i.set(f,l))}return u}function o(){i=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}class xp extends Re{constructor(t,e,n,i,r,o,a,c,l,h=Ns){if(h!==Ns&&h!==Ws)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Ns&&(n=es),n===void 0&&h===Ws&&(n=Gs),super(null,i,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Xe,this.minFilter=c!==void 0?c:Xe,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const vp=new Re,Pu=new xp(1,1),Mp=new hp,yp=new N0,bp=new gp,Lu=[],Iu=[],Du=new Float32Array(16),Nu=new Float32Array(9),Uu=new Float32Array(4);function Js(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let r=Lu[i];if(r===void 0&&(r=new Float32Array(i),Lu[i]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function Ce(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function Pe(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function va(s,t){let e=Iu[t];e===void 0&&(e=new Int32Array(t),Iu[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function jx(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function $x(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ce(e,t))return;s.uniform2fv(this.addr,t),Pe(e,t)}}function Zx(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ce(e,t))return;s.uniform3fv(this.addr,t),Pe(e,t)}}function Jx(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ce(e,t))return;s.uniform4fv(this.addr,t),Pe(e,t)}}function Qx(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ce(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Pe(e,t)}else{if(Ce(e,n))return;Uu.set(n),s.uniformMatrix2fv(this.addr,!1,Uu),Pe(e,n)}}function tv(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ce(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Pe(e,t)}else{if(Ce(e,n))return;Nu.set(n),s.uniformMatrix3fv(this.addr,!1,Nu),Pe(e,n)}}function ev(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ce(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Pe(e,t)}else{if(Ce(e,n))return;Du.set(n),s.uniformMatrix4fv(this.addr,!1,Du),Pe(e,n)}}function nv(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function iv(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ce(e,t))return;s.uniform2iv(this.addr,t),Pe(e,t)}}function sv(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ce(e,t))return;s.uniform3iv(this.addr,t),Pe(e,t)}}function rv(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ce(e,t))return;s.uniform4iv(this.addr,t),Pe(e,t)}}function ov(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function av(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ce(e,t))return;s.uniform2uiv(this.addr,t),Pe(e,t)}}function cv(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ce(e,t))return;s.uniform3uiv(this.addr,t),Pe(e,t)}}function lv(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ce(e,t))return;s.uniform4uiv(this.addr,t),Pe(e,t)}}function hv(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(Pu.compareFunction=ap,r=Pu):r=vp,e.setTexture2D(t||r,i)}function uv(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||yp,i)}function fv(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||bp,i)}function dv(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Mp,i)}function pv(s){switch(s){case 5126:return jx;case 35664:return $x;case 35665:return Zx;case 35666:return Jx;case 35674:return Qx;case 35675:return tv;case 35676:return ev;case 5124:case 35670:return nv;case 35667:case 35671:return iv;case 35668:case 35672:return sv;case 35669:case 35673:return rv;case 5125:return ov;case 36294:return av;case 36295:return cv;case 36296:return lv;case 35678:case 36198:case 36298:case 36306:case 35682:return hv;case 35679:case 36299:case 36307:return uv;case 35680:case 36300:case 36308:case 36293:return fv;case 36289:case 36303:case 36311:case 36292:return dv}}function mv(s,t){s.uniform1fv(this.addr,t)}function gv(s,t){const e=Js(t,this.size,2);s.uniform2fv(this.addr,e)}function _v(s,t){const e=Js(t,this.size,3);s.uniform3fv(this.addr,e)}function xv(s,t){const e=Js(t,this.size,4);s.uniform4fv(this.addr,e)}function vv(s,t){const e=Js(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function Mv(s,t){const e=Js(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function yv(s,t){const e=Js(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function bv(s,t){s.uniform1iv(this.addr,t)}function Sv(s,t){s.uniform2iv(this.addr,t)}function Tv(s,t){s.uniform3iv(this.addr,t)}function Ev(s,t){s.uniform4iv(this.addr,t)}function Av(s,t){s.uniform1uiv(this.addr,t)}function wv(s,t){s.uniform2uiv(this.addr,t)}function Rv(s,t){s.uniform3uiv(this.addr,t)}function Cv(s,t){s.uniform4uiv(this.addr,t)}function Pv(s,t,e){const n=this.cache,i=t.length,r=va(e,i);Ce(n,r)||(s.uniform1iv(this.addr,r),Pe(n,r));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||vp,r[o])}function Lv(s,t,e){const n=this.cache,i=t.length,r=va(e,i);Ce(n,r)||(s.uniform1iv(this.addr,r),Pe(n,r));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||yp,r[o])}function Iv(s,t,e){const n=this.cache,i=t.length,r=va(e,i);Ce(n,r)||(s.uniform1iv(this.addr,r),Pe(n,r));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||bp,r[o])}function Dv(s,t,e){const n=this.cache,i=t.length,r=va(e,i);Ce(n,r)||(s.uniform1iv(this.addr,r),Pe(n,r));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||Mp,r[o])}function Nv(s){switch(s){case 5126:return mv;case 35664:return gv;case 35665:return _v;case 35666:return xv;case 35674:return vv;case 35675:return Mv;case 35676:return yv;case 5124:case 35670:return bv;case 35667:case 35671:return Sv;case 35668:case 35672:return Tv;case 35669:case 35673:return Ev;case 5125:return Av;case 36294:return wv;case 36295:return Rv;case 36296:return Cv;case 35678:case 36198:case 36298:case 36306:case 35682:return Pv;case 35679:case 36299:case 36307:return Lv;case 35680:case 36300:case 36308:case 36293:return Iv;case 36289:case 36303:case 36311:case 36292:return Dv}}class Uv{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=pv(e.type)}}class Fv{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Nv(e.type)}}class Ov{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(t,e[a.id],n)}}}const ic=/(\w+)(\])?(\[|\.)?/g;function Fu(s,t){s.seq.push(t),s.map[t.id]=t}function Bv(s,t,e){const n=s.name,i=n.length;for(ic.lastIndex=0;;){const r=ic.exec(n),o=ic.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){Fu(e,l===void 0?new Uv(a,s,t):new Fv(a,s,t));break}else{let u=e.map[a];u===void 0&&(u=new Ov(a),Fu(e,u)),e=u}}}class Jo{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=t.getActiveUniform(e,i),o=t.getUniformLocation(e,r.name);Bv(r,o,this)}}setValue(t,e,n,i){const r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,o=e.length;r!==o;++r){const a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,r=t.length;i!==r;++i){const o=t[i];o.id in e&&n.push(o)}return n}}function Ou(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const kv=37297;let zv=0;function Hv(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const Bu=new jt;function Vv(s){te._getMatrix(Bu,te.workingColorSpace,s);const t=`mat3( ${Bu.elements.map(e=>e.toFixed(4))} )`;switch(te.getTransfer(s)){case xa:return[t,"LinearTransferOETF"];case fe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function ku(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+Hv(s.getShaderSource(t),o)}else return i}function Gv(s,t){const e=Vv(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Wv(s,t){let e;switch(t){case Xm:e="Linear";break;case qm:e="Reinhard";break;case Km:e="Cineon";break;case Kd:e="ACESFilmic";break;case jm:e="AgX";break;case $m:e="Neutral";break;case Ym:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const mo=new C;function Xv(){te.getLuminanceCoefficients(mo);const s=mo.x.toFixed(4),t=mo.y.toFixed(4),e=mo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function qv(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(xr).join(`
`)}function Kv(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Yv(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(t,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function xr(s){return s!==""}function zu(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Hu(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const jv=/^[ \t]*#include +<([\w\d./]+)>/gm;function Rl(s){return s.replace(jv,Zv)}const $v=new Map;function Zv(s,t){let e=$t[t];if(e===void 0){const n=$v.get(t);if(n!==void 0)e=$t[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Rl(e)}const Jv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Vu(s){return s.replace(Jv,Qv)}function Qv(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Gu(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function tM(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Xd?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===qd?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===ei&&(t="SHADOWMAP_TYPE_VSM"),t}function eM(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Hs:case Vs:t="ENVMAP_TYPE_CUBE";break;case _a:t="ENVMAP_TYPE_CUBE_UV";break}return t}function nM(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Vs:t="ENVMAP_MODE_REFRACTION";break}return t}function iM(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case $l:t="ENVMAP_BLENDING_MULTIPLY";break;case Gm:t="ENVMAP_BLENDING_MIX";break;case Wm:t="ENVMAP_BLENDING_ADD";break}return t}function sM(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function rM(s,t,e,n){const i=s.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=tM(e),l=eM(e),h=nM(e),u=iM(e),f=sM(e),d=qv(e),p=Kv(r),_=i.createProgram();let g,m,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(xr).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(xr).join(`
`),m.length>0&&(m+=`
`)):(g=[Gu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(xr).join(`
`),m=[Gu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ni?"#define TONE_MAPPING":"",e.toneMapping!==Ni?$t.tonemapping_pars_fragment:"",e.toneMapping!==Ni?Wv("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",$t.colorspace_pars_fragment,Gv("linearToOutputTexel",e.outputColorSpace),Xv(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(xr).join(`
`)),o=Rl(o),o=zu(o,e),o=Hu(o,e),a=Rl(a),a=zu(a,e),a=Hu(a,e),o=Vu(o),a=Vu(a),e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",e.glslVersion===eu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===eu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const v=b+g+o,x=b+m+a,D=Ou(i,i.VERTEX_SHADER,v),w=Ou(i,i.FRAGMENT_SHADER,x);i.attachShader(_,D),i.attachShader(_,w),e.index0AttributeName!==void 0?i.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function P(L){if(s.debug.checkShaderErrors){const k=i.getProgramInfoLog(_).trim(),U=i.getShaderInfoLog(D).trim(),V=i.getShaderInfoLog(w).trim();let q=!0,j=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(q=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,_,D,w);else{const Z=ku(i,D,"vertex"),z=ku(i,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+k+`
`+Z+`
`+z)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(U===""||V==="")&&(j=!1);j&&(L.diagnostics={runnable:q,programLog:k,vertexShader:{log:U,prefix:g},fragmentShader:{log:V,prefix:m}})}i.deleteShader(D),i.deleteShader(w),I=new Jo(i,_),T=Yv(i,_)}let I;this.getUniforms=function(){return I===void 0&&P(this),I};let T;this.getAttributes=function(){return T===void 0&&P(this),T};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=i.getProgramParameter(_,kv)),y},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=zv++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=D,this.fragmentShader=w,this}let oM=0;class aM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new cM(t),e.set(t,n)),n}}class cM{constructor(t){this.id=oM++,this.code=t,this.usedTimes=0}}function lM(s,t,e,n,i,r,o){const a=new oh,c=new aM,l=new Set,h=[],u=i.logarithmicDepthBuffer,f=i.vertexTextures;let d=i.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(T){return l.add(T),T===0?"uv":`uv${T}`}function g(T,y,L,k,U){const V=k.fog,q=U.geometry,j=T.isMeshStandardMaterial?k.environment:null,Z=(T.isMeshStandardMaterial?e:t).get(T.envMap||j),z=Z&&Z.mapping===_a?Z.image.height:null,st=p[T.type];T.precision!==null&&(d=i.getMaxPrecision(T.precision),d!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",d,"instead."));const ot=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,_t=ot!==void 0?ot.length:0;let Rt=0;q.morphAttributes.position!==void 0&&(Rt=1),q.morphAttributes.normal!==void 0&&(Rt=2),q.morphAttributes.color!==void 0&&(Rt=3);let kt,K,Q,St;if(st){const ne=Fn[st];kt=ne.vertexShader,K=ne.fragmentShader}else kt=T.vertexShader,K=T.fragmentShader,c.update(T),Q=c.getVertexShaderID(T),St=c.getFragmentShaderID(T);const it=s.getRenderTarget(),Pt=s.state.buffers.depth.getReversed(),Bt=U.isInstancedMesh===!0,Lt=U.isBatchedMesh===!0,Wt=!!T.map,tt=!!T.matcap,ht=!!Z,R=!!T.aoMap,lt=!!T.lightMap,et=!!T.bumpMap,ut=!!T.normalMap,ct=!!T.displacementMap,Ct=!!T.emissiveMap,mt=!!T.metalnessMap,E=!!T.roughnessMap,S=T.anisotropy>0,B=T.clearcoat>0,H=T.dispersion>0,J=T.iridescence>0,Y=T.sheen>0,gt=T.transmission>0,at=S&&!!T.anisotropyMap,xt=B&&!!T.clearcoatMap,Ft=B&&!!T.clearcoatNormalMap,rt=B&&!!T.clearcoatRoughnessMap,At=J&&!!T.iridescenceMap,Tt=J&&!!T.iridescenceThicknessMap,zt=Y&&!!T.sheenColorMap,Et=Y&&!!T.sheenRoughnessMap,Jt=!!T.specularMap,Xt=!!T.specularColorMap,ee=!!T.specularIntensityMap,N=gt&&!!T.transmissionMap,dt=gt&&!!T.thicknessMap,$=!!T.gradientMap,nt=!!T.alphaMap,vt=T.alphaTest>0,bt=!!T.alphaHash,Gt=!!T.extensions;let me=Ni;T.toneMapped&&(it===null||it.isXRRenderTarget===!0)&&(me=s.toneMapping);const Le={shaderID:st,shaderType:T.type,shaderName:T.name,vertexShader:kt,fragmentShader:K,defines:T.defines,customVertexShaderID:Q,customFragmentShaderID:St,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:d,batching:Lt,batchingColor:Lt&&U._colorsTexture!==null,instancing:Bt,instancingColor:Bt&&U.instanceColor!==null,instancingMorph:Bt&&U.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:it===null?s.outputColorSpace:it.isXRRenderTarget===!0?it.texture.colorSpace:qe,alphaToCoverage:!!T.alphaToCoverage,map:Wt,matcap:tt,envMap:ht,envMapMode:ht&&Z.mapping,envMapCubeUVHeight:z,aoMap:R,lightMap:lt,bumpMap:et,normalMap:ut,displacementMap:f&&ct,emissiveMap:Ct,normalMapObjectSpace:ut&&T.normalMapType===e0,normalMapTangentSpace:ut&&T.normalMapType===sh,metalnessMap:mt,roughnessMap:E,anisotropy:S,anisotropyMap:at,clearcoat:B,clearcoatMap:xt,clearcoatNormalMap:Ft,clearcoatRoughnessMap:rt,dispersion:H,iridescence:J,iridescenceMap:At,iridescenceThicknessMap:Tt,sheen:Y,sheenColorMap:zt,sheenRoughnessMap:Et,specularMap:Jt,specularColorMap:Xt,specularIntensityMap:ee,transmission:gt,transmissionMap:N,thicknessMap:dt,gradientMap:$,opaque:T.transparent===!1&&T.blending===Ds&&T.alphaToCoverage===!1,alphaMap:nt,alphaTest:vt,alphaHash:bt,combine:T.combine,mapUv:Wt&&_(T.map.channel),aoMapUv:R&&_(T.aoMap.channel),lightMapUv:lt&&_(T.lightMap.channel),bumpMapUv:et&&_(T.bumpMap.channel),normalMapUv:ut&&_(T.normalMap.channel),displacementMapUv:ct&&_(T.displacementMap.channel),emissiveMapUv:Ct&&_(T.emissiveMap.channel),metalnessMapUv:mt&&_(T.metalnessMap.channel),roughnessMapUv:E&&_(T.roughnessMap.channel),anisotropyMapUv:at&&_(T.anisotropyMap.channel),clearcoatMapUv:xt&&_(T.clearcoatMap.channel),clearcoatNormalMapUv:Ft&&_(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:rt&&_(T.clearcoatRoughnessMap.channel),iridescenceMapUv:At&&_(T.iridescenceMap.channel),iridescenceThicknessMapUv:Tt&&_(T.iridescenceThicknessMap.channel),sheenColorMapUv:zt&&_(T.sheenColorMap.channel),sheenRoughnessMapUv:Et&&_(T.sheenRoughnessMap.channel),specularMapUv:Jt&&_(T.specularMap.channel),specularColorMapUv:Xt&&_(T.specularColorMap.channel),specularIntensityMapUv:ee&&_(T.specularIntensityMap.channel),transmissionMapUv:N&&_(T.transmissionMap.channel),thicknessMapUv:dt&&_(T.thicknessMap.channel),alphaMapUv:nt&&_(T.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(ut||S),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!q.attributes.uv&&(Wt||nt),fog:!!V,useFog:T.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Pt,skinning:U.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:_t,morphTextureStride:Rt,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:T.dithering,shadowMapEnabled:s.shadowMap.enabled&&L.length>0,shadowMapType:s.shadowMap.type,toneMapping:me,decodeVideoTexture:Wt&&T.map.isVideoTexture===!0&&te.getTransfer(T.map.colorSpace)===fe,decodeVideoTextureEmissive:Ct&&T.emissiveMap.isVideoTexture===!0&&te.getTransfer(T.emissiveMap.colorSpace)===fe,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Be,flipSided:T.side===We,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Gt&&T.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Gt&&T.extensions.multiDraw===!0||Lt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Le.vertexUv1s=l.has(1),Le.vertexUv2s=l.has(2),Le.vertexUv3s=l.has(3),l.clear(),Le}function m(T){const y=[];if(T.shaderID?y.push(T.shaderID):(y.push(T.customVertexShaderID),y.push(T.customFragmentShaderID)),T.defines!==void 0)for(const L in T.defines)y.push(L),y.push(T.defines[L]);return T.isRawShaderMaterial===!1&&(b(y,T),v(y,T),y.push(s.outputColorSpace)),y.push(T.customProgramCacheKey),y.join()}function b(T,y){T.push(y.precision),T.push(y.outputColorSpace),T.push(y.envMapMode),T.push(y.envMapCubeUVHeight),T.push(y.mapUv),T.push(y.alphaMapUv),T.push(y.lightMapUv),T.push(y.aoMapUv),T.push(y.bumpMapUv),T.push(y.normalMapUv),T.push(y.displacementMapUv),T.push(y.emissiveMapUv),T.push(y.metalnessMapUv),T.push(y.roughnessMapUv),T.push(y.anisotropyMapUv),T.push(y.clearcoatMapUv),T.push(y.clearcoatNormalMapUv),T.push(y.clearcoatRoughnessMapUv),T.push(y.iridescenceMapUv),T.push(y.iridescenceThicknessMapUv),T.push(y.sheenColorMapUv),T.push(y.sheenRoughnessMapUv),T.push(y.specularMapUv),T.push(y.specularColorMapUv),T.push(y.specularIntensityMapUv),T.push(y.transmissionMapUv),T.push(y.thicknessMapUv),T.push(y.combine),T.push(y.fogExp2),T.push(y.sizeAttenuation),T.push(y.morphTargetsCount),T.push(y.morphAttributeCount),T.push(y.numDirLights),T.push(y.numPointLights),T.push(y.numSpotLights),T.push(y.numSpotLightMaps),T.push(y.numHemiLights),T.push(y.numRectAreaLights),T.push(y.numDirLightShadows),T.push(y.numPointLightShadows),T.push(y.numSpotLightShadows),T.push(y.numSpotLightShadowsWithMaps),T.push(y.numLightProbes),T.push(y.shadowMapType),T.push(y.toneMapping),T.push(y.numClippingPlanes),T.push(y.numClipIntersection),T.push(y.depthPacking)}function v(T,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),T.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reverseDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),T.push(a.mask)}function x(T){const y=p[T.type];let L;if(y){const k=Fn[y];L=q0.clone(k.uniforms)}else L=T.uniforms;return L}function D(T,y){let L;for(let k=0,U=h.length;k<U;k++){const V=h[k];if(V.cacheKey===y){L=V,++L.usedTimes;break}}return L===void 0&&(L=new rM(s,y,T,r),h.push(L)),L}function w(T){if(--T.usedTimes===0){const y=h.indexOf(T);h[y]=h[h.length-1],h.pop(),T.destroy()}}function P(T){c.remove(T)}function I(){c.dispose()}return{getParameters:g,getProgramCacheKey:m,getUniforms:x,acquireProgram:D,releaseProgram:w,releaseShaderCache:P,programs:h,dispose:I}}function hM(){let s=new WeakMap;function t(o){return s.has(o)}function e(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,c){s.get(o)[a]=c}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function uM(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function Wu(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Xu(){const s=[];let t=0;const e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function o(u,f,d,p,_,g){let m=s[t];return m===void 0?(m={id:u.id,object:u,geometry:f,material:d,groupOrder:p,renderOrder:u.renderOrder,z:_,group:g},s[t]=m):(m.id=u.id,m.object=u,m.geometry=f,m.material=d,m.groupOrder=p,m.renderOrder=u.renderOrder,m.z=_,m.group=g),t++,m}function a(u,f,d,p,_,g){const m=o(u,f,d,p,_,g);d.transmission>0?n.push(m):d.transparent===!0?i.push(m):e.push(m)}function c(u,f,d,p,_,g){const m=o(u,f,d,p,_,g);d.transmission>0?n.unshift(m):d.transparent===!0?i.unshift(m):e.unshift(m)}function l(u,f){e.length>1&&e.sort(u||uM),n.length>1&&n.sort(f||Wu),i.length>1&&i.sort(f||Wu)}function h(){for(let u=t,f=s.length;u<f;u++){const d=s[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:a,unshift:c,finish:h,sort:l}}function fM(){let s=new WeakMap;function t(n,i){const r=s.get(n);let o;return r===void 0?(o=new Xu,s.set(n,[o])):i>=r.length?(o=new Xu,r.push(o)):o=r[i],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function dM(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new C,color:new It};break;case"SpotLight":e={position:new C,direction:new C,color:new It,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new C,color:new It,distance:0,decay:0};break;case"HemisphereLight":e={direction:new C,skyColor:new It,groundColor:new It};break;case"RectAreaLight":e={color:new It,position:new C,halfWidth:new C,halfHeight:new C};break}return s[t.id]=e,e}}}function pM(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let mM=0;function gM(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function _M(s){const t=new dM,e=pM(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new C);const i=new C,r=new Vt,o=new Vt;function a(l){let h=0,u=0,f=0;for(let T=0;T<9;T++)n.probe[T].set(0,0,0);let d=0,p=0,_=0,g=0,m=0,b=0,v=0,x=0,D=0,w=0,P=0;l.sort(gM);for(let T=0,y=l.length;T<y;T++){const L=l[T],k=L.color,U=L.intensity,V=L.distance,q=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=k.r*U,u+=k.g*U,f+=k.b*U;else if(L.isLightProbe){for(let j=0;j<9;j++)n.probe[j].addScaledVector(L.sh.coefficients[j],U);P++}else if(L.isDirectionalLight){const j=t.get(L);if(j.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const Z=L.shadow,z=e.get(L);z.shadowIntensity=Z.intensity,z.shadowBias=Z.bias,z.shadowNormalBias=Z.normalBias,z.shadowRadius=Z.radius,z.shadowMapSize=Z.mapSize,n.directionalShadow[d]=z,n.directionalShadowMap[d]=q,n.directionalShadowMatrix[d]=L.shadow.matrix,b++}n.directional[d]=j,d++}else if(L.isSpotLight){const j=t.get(L);j.position.setFromMatrixPosition(L.matrixWorld),j.color.copy(k).multiplyScalar(U),j.distance=V,j.coneCos=Math.cos(L.angle),j.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),j.decay=L.decay,n.spot[_]=j;const Z=L.shadow;if(L.map&&(n.spotLightMap[D]=L.map,D++,Z.updateMatrices(L),L.castShadow&&w++),n.spotLightMatrix[_]=Z.matrix,L.castShadow){const z=e.get(L);z.shadowIntensity=Z.intensity,z.shadowBias=Z.bias,z.shadowNormalBias=Z.normalBias,z.shadowRadius=Z.radius,z.shadowMapSize=Z.mapSize,n.spotShadow[_]=z,n.spotShadowMap[_]=q,x++}_++}else if(L.isRectAreaLight){const j=t.get(L);j.color.copy(k).multiplyScalar(U),j.halfWidth.set(L.width*.5,0,0),j.halfHeight.set(0,L.height*.5,0),n.rectArea[g]=j,g++}else if(L.isPointLight){const j=t.get(L);if(j.color.copy(L.color).multiplyScalar(L.intensity),j.distance=L.distance,j.decay=L.decay,L.castShadow){const Z=L.shadow,z=e.get(L);z.shadowIntensity=Z.intensity,z.shadowBias=Z.bias,z.shadowNormalBias=Z.normalBias,z.shadowRadius=Z.radius,z.shadowMapSize=Z.mapSize,z.shadowCameraNear=Z.camera.near,z.shadowCameraFar=Z.camera.far,n.pointShadow[p]=z,n.pointShadowMap[p]=q,n.pointShadowMatrix[p]=L.shadow.matrix,v++}n.point[p]=j,p++}else if(L.isHemisphereLight){const j=t.get(L);j.skyColor.copy(L.color).multiplyScalar(U),j.groundColor.copy(L.groundColor).multiplyScalar(U),n.hemi[m]=j,m++}}g>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=yt.LTC_FLOAT_1,n.rectAreaLTC2=yt.LTC_FLOAT_2):(n.rectAreaLTC1=yt.LTC_HALF_1,n.rectAreaLTC2=yt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;const I=n.hash;(I.directionalLength!==d||I.pointLength!==p||I.spotLength!==_||I.rectAreaLength!==g||I.hemiLength!==m||I.numDirectionalShadows!==b||I.numPointShadows!==v||I.numSpotShadows!==x||I.numSpotMaps!==D||I.numLightProbes!==P)&&(n.directional.length=d,n.spot.length=_,n.rectArea.length=g,n.point.length=p,n.hemi.length=m,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=v,n.pointShadowMap.length=v,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=v,n.spotLightMatrix.length=x+D-w,n.spotLightMap.length=D,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=P,I.directionalLength=d,I.pointLength=p,I.spotLength=_,I.rectAreaLength=g,I.hemiLength=m,I.numDirectionalShadows=b,I.numPointShadows=v,I.numSpotShadows=x,I.numSpotMaps=D,I.numLightProbes=P,n.version=mM++)}function c(l,h){let u=0,f=0,d=0,p=0,_=0;const g=h.matrixWorldInverse;for(let m=0,b=l.length;m<b;m++){const v=l[m];if(v.isDirectionalLight){const x=n.directional[u];x.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(g),u++}else if(v.isSpotLight){const x=n.spot[d];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(g),x.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(g),d++}else if(v.isRectAreaLight){const x=n.rectArea[p];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(g),o.identity(),r.copy(v.matrixWorld),r.premultiply(g),o.extractRotation(r),x.halfWidth.set(v.width*.5,0,0),x.halfHeight.set(0,v.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),p++}else if(v.isPointLight){const x=n.point[f];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(g),f++}else if(v.isHemisphereLight){const x=n.hemi[_];x.direction.setFromMatrixPosition(v.matrixWorld),x.direction.transformDirection(g),_++}}}return{setup:a,setupView:c,state:n}}function qu(s){const t=new _M(s),e=[],n=[];function i(h){l.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function c(h){t.setupView(e,h)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function xM(s){let t=new WeakMap;function e(i,r=0){const o=t.get(i);let a;return o===void 0?(a=new qu(s),t.set(i,[a])):r>=o.length?(a=new qu(s),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class vM extends Cn{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Qm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class MM extends Cn{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const yM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,bM=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function SM(s,t,e){let n=new ah;const i=new pt,r=new pt,o=new oe,a=new vM({depthPacking:t0}),c=new MM,l={},h=e.maxTextureSize,u={[ci]:We,[We]:ci,[Be]:Be},f=new hi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new pt},radius:{value:4}},vertexShader:yM,fragmentShader:bM}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const p=new be;p.setAttribute("position",new Kt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new re(p,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Xd;let m=this.type;this.render=function(w,P,I){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||w.length===0)return;const T=s.getRenderTarget(),y=s.getActiveCubeFace(),L=s.getActiveMipmapLevel(),k=s.state;k.setBlending(Di),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const U=m!==ei&&this.type===ei,V=m===ei&&this.type!==ei;for(let q=0,j=w.length;q<j;q++){const Z=w[q],z=Z.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;i.copy(z.mapSize);const st=z.getFrameExtents();if(i.multiply(st),r.copy(z.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/st.x),i.x=r.x*st.x,z.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/st.y),i.y=r.y*st.y,z.mapSize.y=r.y)),z.map===null||U===!0||V===!0){const _t=this.type!==ei?{minFilter:Xe,magFilter:Xe}:{};z.map!==null&&z.map.dispose(),z.map=new ns(i.x,i.y,_t),z.map.texture.name=Z.name+".shadowMap",z.camera.updateProjectionMatrix()}s.setRenderTarget(z.map),s.clear();const ot=z.getViewportCount();for(let _t=0;_t<ot;_t++){const Rt=z.getViewport(_t);o.set(r.x*Rt.x,r.y*Rt.y,r.x*Rt.z,r.y*Rt.w),k.viewport(o),z.updateMatrices(Z,_t),n=z.getFrustum(),x(P,I,z.camera,Z,this.type)}z.isPointLightShadow!==!0&&this.type===ei&&b(z,I),z.needsUpdate=!1}m=this.type,g.needsUpdate=!1,s.setRenderTarget(T,y,L)};function b(w,P){const I=t.update(_);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,d.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new ns(i.x,i.y)),f.uniforms.shadow_pass.value=w.map.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,s.setRenderTarget(w.mapPass),s.clear(),s.renderBufferDirect(P,null,I,f,_,null),d.uniforms.shadow_pass.value=w.mapPass.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,s.setRenderTarget(w.map),s.clear(),s.renderBufferDirect(P,null,I,d,_,null)}function v(w,P,I,T){let y=null;const L=I.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(L!==void 0)y=L;else if(y=I.isPointLight===!0?c:a,s.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0){const k=y.uuid,U=P.uuid;let V=l[k];V===void 0&&(V={},l[k]=V);let q=V[U];q===void 0&&(q=y.clone(),V[U]=q,P.addEventListener("dispose",D)),y=q}if(y.visible=P.visible,y.wireframe=P.wireframe,T===ei?y.side=P.shadowSide!==null?P.shadowSide:P.side:y.side=P.shadowSide!==null?P.shadowSide:u[P.side],y.alphaMap=P.alphaMap,y.alphaTest=P.alphaTest,y.map=P.map,y.clipShadows=P.clipShadows,y.clippingPlanes=P.clippingPlanes,y.clipIntersection=P.clipIntersection,y.displacementMap=P.displacementMap,y.displacementScale=P.displacementScale,y.displacementBias=P.displacementBias,y.wireframeLinewidth=P.wireframeLinewidth,y.linewidth=P.linewidth,I.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const k=s.properties.get(y);k.light=I}return y}function x(w,P,I,T,y){if(w.visible===!1)return;if(w.layers.test(P.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&y===ei)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,w.matrixWorld);const U=t.update(w),V=w.material;if(Array.isArray(V)){const q=U.groups;for(let j=0,Z=q.length;j<Z;j++){const z=q[j],st=V[z.materialIndex];if(st&&st.visible){const ot=v(w,st,T,y);w.onBeforeShadow(s,w,P,I,U,ot,z),s.renderBufferDirect(I,null,U,ot,w,z),w.onAfterShadow(s,w,P,I,U,ot,z)}}}else if(V.visible){const q=v(w,V,T,y);w.onBeforeShadow(s,w,P,I,U,q,null),s.renderBufferDirect(I,null,U,q,w,null),w.onAfterShadow(s,w,P,I,U,q,null)}}const k=w.children;for(let U=0,V=k.length;U<V;U++)x(k[U],P,I,T,y)}function D(w){w.target.removeEventListener("dispose",D);for(const I in l){const T=l[I],y=w.target.uuid;y in T&&(T[y].dispose(),delete T[y])}}}const TM={[Xc]:qc,[Kc]:$c,[Yc]:Zc,[zs]:jc,[qc]:Xc,[$c]:Kc,[Zc]:Yc,[jc]:zs};function EM(s,t){function e(){let N=!1;const dt=new oe;let $=null;const nt=new oe(0,0,0,0);return{setMask:function(vt){$!==vt&&!N&&(s.colorMask(vt,vt,vt,vt),$=vt)},setLocked:function(vt){N=vt},setClear:function(vt,bt,Gt,me,Le){Le===!0&&(vt*=me,bt*=me,Gt*=me),dt.set(vt,bt,Gt,me),nt.equals(dt)===!1&&(s.clearColor(vt,bt,Gt,me),nt.copy(dt))},reset:function(){N=!1,$=null,nt.set(-1,0,0,0)}}}function n(){let N=!1,dt=!1,$=null,nt=null,vt=null;return{setReversed:function(bt){if(dt!==bt){const Gt=t.get("EXT_clip_control");dt?Gt.clipControlEXT(Gt.LOWER_LEFT_EXT,Gt.ZERO_TO_ONE_EXT):Gt.clipControlEXT(Gt.LOWER_LEFT_EXT,Gt.NEGATIVE_ONE_TO_ONE_EXT);const me=vt;vt=null,this.setClear(me)}dt=bt},getReversed:function(){return dt},setTest:function(bt){bt?it(s.DEPTH_TEST):Pt(s.DEPTH_TEST)},setMask:function(bt){$!==bt&&!N&&(s.depthMask(bt),$=bt)},setFunc:function(bt){if(dt&&(bt=TM[bt]),nt!==bt){switch(bt){case Xc:s.depthFunc(s.NEVER);break;case qc:s.depthFunc(s.ALWAYS);break;case Kc:s.depthFunc(s.LESS);break;case zs:s.depthFunc(s.LEQUAL);break;case Yc:s.depthFunc(s.EQUAL);break;case jc:s.depthFunc(s.GEQUAL);break;case $c:s.depthFunc(s.GREATER);break;case Zc:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}nt=bt}},setLocked:function(bt){N=bt},setClear:function(bt){vt!==bt&&(dt&&(bt=1-bt),s.clearDepth(bt),vt=bt)},reset:function(){N=!1,$=null,nt=null,vt=null,dt=!1}}}function i(){let N=!1,dt=null,$=null,nt=null,vt=null,bt=null,Gt=null,me=null,Le=null;return{setTest:function(ne){N||(ne?it(s.STENCIL_TEST):Pt(s.STENCIL_TEST))},setMask:function(ne){dt!==ne&&!N&&(s.stencilMask(ne),dt=ne)},setFunc:function(ne,Ke,mn){($!==ne||nt!==Ke||vt!==mn)&&(s.stencilFunc(ne,Ke,mn),$=ne,nt=Ke,vt=mn)},setOp:function(ne,Ke,mn){(bt!==ne||Gt!==Ke||me!==mn)&&(s.stencilOp(ne,Ke,mn),bt=ne,Gt=Ke,me=mn)},setLocked:function(ne){N=ne},setClear:function(ne){Le!==ne&&(s.clearStencil(ne),Le=ne)},reset:function(){N=!1,dt=null,$=null,nt=null,vt=null,bt=null,Gt=null,me=null,Le=null}}}const r=new e,o=new n,a=new i,c=new WeakMap,l=new WeakMap;let h={},u={},f=new WeakMap,d=[],p=null,_=!1,g=null,m=null,b=null,v=null,x=null,D=null,w=null,P=new It(0,0,0),I=0,T=!1,y=null,L=null,k=null,U=null,V=null;const q=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let j=!1,Z=0;const z=s.getParameter(s.VERSION);z.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(z)[1]),j=Z>=1):z.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),j=Z>=2);let st=null,ot={};const _t=s.getParameter(s.SCISSOR_BOX),Rt=s.getParameter(s.VIEWPORT),kt=new oe().fromArray(_t),K=new oe().fromArray(Rt);function Q(N,dt,$,nt){const vt=new Uint8Array(4),bt=s.createTexture();s.bindTexture(N,bt),s.texParameteri(N,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(N,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Gt=0;Gt<$;Gt++)N===s.TEXTURE_3D||N===s.TEXTURE_2D_ARRAY?s.texImage3D(dt,0,s.RGBA,1,1,nt,0,s.RGBA,s.UNSIGNED_BYTE,vt):s.texImage2D(dt+Gt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,vt);return bt}const St={};St[s.TEXTURE_2D]=Q(s.TEXTURE_2D,s.TEXTURE_2D,1),St[s.TEXTURE_CUBE_MAP]=Q(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),St[s.TEXTURE_2D_ARRAY]=Q(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),St[s.TEXTURE_3D]=Q(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),it(s.DEPTH_TEST),o.setFunc(zs),et(!1),ut(qh),it(s.CULL_FACE),R(Di);function it(N){h[N]!==!0&&(s.enable(N),h[N]=!0)}function Pt(N){h[N]!==!1&&(s.disable(N),h[N]=!1)}function Bt(N,dt){return u[N]!==dt?(s.bindFramebuffer(N,dt),u[N]=dt,N===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=dt),N===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=dt),!0):!1}function Lt(N,dt){let $=d,nt=!1;if(N){$=f.get(dt),$===void 0&&($=[],f.set(dt,$));const vt=N.textures;if($.length!==vt.length||$[0]!==s.COLOR_ATTACHMENT0){for(let bt=0,Gt=vt.length;bt<Gt;bt++)$[bt]=s.COLOR_ATTACHMENT0+bt;$.length=vt.length,nt=!0}}else $[0]!==s.BACK&&($[0]=s.BACK,nt=!0);nt&&s.drawBuffers($)}function Wt(N){return p!==N?(s.useProgram(N),p=N,!0):!1}const tt={[ji]:s.FUNC_ADD,[Am]:s.FUNC_SUBTRACT,[wm]:s.FUNC_REVERSE_SUBTRACT};tt[Rm]=s.MIN,tt[Cm]=s.MAX;const ht={[Pm]:s.ZERO,[Lm]:s.ONE,[Im]:s.SRC_COLOR,[Gc]:s.SRC_ALPHA,[Bm]:s.SRC_ALPHA_SATURATE,[Fm]:s.DST_COLOR,[Nm]:s.DST_ALPHA,[Dm]:s.ONE_MINUS_SRC_COLOR,[Wc]:s.ONE_MINUS_SRC_ALPHA,[Om]:s.ONE_MINUS_DST_COLOR,[Um]:s.ONE_MINUS_DST_ALPHA,[km]:s.CONSTANT_COLOR,[zm]:s.ONE_MINUS_CONSTANT_COLOR,[Hm]:s.CONSTANT_ALPHA,[Vm]:s.ONE_MINUS_CONSTANT_ALPHA};function R(N,dt,$,nt,vt,bt,Gt,me,Le,ne){if(N===Di){_===!0&&(Pt(s.BLEND),_=!1);return}if(_===!1&&(it(s.BLEND),_=!0),N!==Em){if(N!==g||ne!==T){if((m!==ji||x!==ji)&&(s.blendEquation(s.FUNC_ADD),m=ji,x=ji),ne)switch(N){case Ds:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Kh:s.blendFunc(s.ONE,s.ONE);break;case Yh:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case jh:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case Ds:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Kh:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Yh:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case jh:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}b=null,v=null,D=null,w=null,P.set(0,0,0),I=0,g=N,T=ne}return}vt=vt||dt,bt=bt||$,Gt=Gt||nt,(dt!==m||vt!==x)&&(s.blendEquationSeparate(tt[dt],tt[vt]),m=dt,x=vt),($!==b||nt!==v||bt!==D||Gt!==w)&&(s.blendFuncSeparate(ht[$],ht[nt],ht[bt],ht[Gt]),b=$,v=nt,D=bt,w=Gt),(me.equals(P)===!1||Le!==I)&&(s.blendColor(me.r,me.g,me.b,Le),P.copy(me),I=Le),g=N,T=!1}function lt(N,dt){N.side===Be?Pt(s.CULL_FACE):it(s.CULL_FACE);let $=N.side===We;dt&&($=!$),et($),N.blending===Ds&&N.transparent===!1?R(Di):R(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),o.setFunc(N.depthFunc),o.setTest(N.depthTest),o.setMask(N.depthWrite),r.setMask(N.colorWrite);const nt=N.stencilWrite;a.setTest(nt),nt&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),Ct(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?it(s.SAMPLE_ALPHA_TO_COVERAGE):Pt(s.SAMPLE_ALPHA_TO_COVERAGE)}function et(N){y!==N&&(N?s.frontFace(s.CW):s.frontFace(s.CCW),y=N)}function ut(N){N!==Sm?(it(s.CULL_FACE),N!==L&&(N===qh?s.cullFace(s.BACK):N===Tm?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Pt(s.CULL_FACE),L=N}function ct(N){N!==k&&(j&&s.lineWidth(N),k=N)}function Ct(N,dt,$){N?(it(s.POLYGON_OFFSET_FILL),(U!==dt||V!==$)&&(s.polygonOffset(dt,$),U=dt,V=$)):Pt(s.POLYGON_OFFSET_FILL)}function mt(N){N?it(s.SCISSOR_TEST):Pt(s.SCISSOR_TEST)}function E(N){N===void 0&&(N=s.TEXTURE0+q-1),st!==N&&(s.activeTexture(N),st=N)}function S(N,dt,$){$===void 0&&(st===null?$=s.TEXTURE0+q-1:$=st);let nt=ot[$];nt===void 0&&(nt={type:void 0,texture:void 0},ot[$]=nt),(nt.type!==N||nt.texture!==dt)&&(st!==$&&(s.activeTexture($),st=$),s.bindTexture(N,dt||St[N]),nt.type=N,nt.texture=dt)}function B(){const N=ot[st];N!==void 0&&N.type!==void 0&&(s.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function H(){try{s.compressedTexImage2D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function J(){try{s.compressedTexImage3D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Y(){try{s.texSubImage2D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function gt(){try{s.texSubImage3D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function at(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function xt(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ft(){try{s.texStorage2D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function rt(){try{s.texStorage3D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function At(){try{s.texImage2D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Tt(){try{s.texImage3D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function zt(N){kt.equals(N)===!1&&(s.scissor(N.x,N.y,N.z,N.w),kt.copy(N))}function Et(N){K.equals(N)===!1&&(s.viewport(N.x,N.y,N.z,N.w),K.copy(N))}function Jt(N,dt){let $=l.get(dt);$===void 0&&($=new WeakMap,l.set(dt,$));let nt=$.get(N);nt===void 0&&(nt=s.getUniformBlockIndex(dt,N.name),$.set(N,nt))}function Xt(N,dt){const nt=l.get(dt).get(N);c.get(dt)!==nt&&(s.uniformBlockBinding(dt,nt,N.__bindingPointIndex),c.set(dt,nt))}function ee(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},st=null,ot={},u={},f=new WeakMap,d=[],p=null,_=!1,g=null,m=null,b=null,v=null,x=null,D=null,w=null,P=new It(0,0,0),I=0,T=!1,y=null,L=null,k=null,U=null,V=null,kt.set(0,0,s.canvas.width,s.canvas.height),K.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:it,disable:Pt,bindFramebuffer:Bt,drawBuffers:Lt,useProgram:Wt,setBlending:R,setMaterial:lt,setFlipSided:et,setCullFace:ut,setLineWidth:ct,setPolygonOffset:Ct,setScissorTest:mt,activeTexture:E,bindTexture:S,unbindTexture:B,compressedTexImage2D:H,compressedTexImage3D:J,texImage2D:At,texImage3D:Tt,updateUBOMapping:Jt,uniformBlockBinding:Xt,texStorage2D:Ft,texStorage3D:rt,texSubImage2D:Y,texSubImage3D:gt,compressedTexSubImage2D:at,compressedTexSubImage3D:xt,scissor:zt,viewport:Et,reset:ee}}function Ku(s,t,e,n){const i=AM(n);switch(e){case tp:return s*t;case np:return s*t;case ip:return s*t*2;case th:return s*t/i.components*i.byteLength;case eh:return s*t/i.components*i.byteLength;case sp:return s*t*2/i.components*i.byteLength;case nh:return s*t*2/i.components*i.byteLength;case ep:return s*t*3/i.components*i.byteLength;case dn:return s*t*4/i.components*i.byteLength;case ih:return s*t*4/i.components*i.byteLength;case Ko:case Yo:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case jo:case $o:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case el:case il:return Math.max(s,16)*Math.max(t,8)/4;case tl:case nl:return Math.max(s,8)*Math.max(t,8)/2;case sl:case rl:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case ol:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case al:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case cl:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case ll:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case hl:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case ul:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case fl:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case dl:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case pl:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case ml:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case gl:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case _l:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case xl:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case vl:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case Ml:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Zo:case yl:case bl:return Math.ceil(s/4)*Math.ceil(t/4)*16;case rp:case Sl:return Math.ceil(s/4)*Math.ceil(t/4)*8;case Tl:case El:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function AM(s){switch(s){case li:case Zd:return{byteLength:1,components:1};case Pr:case Jd:case zr:return{byteLength:2,components:1};case Jl:case Ql:return{byteLength:2,components:4};case es:case Zl:case wn:return{byteLength:4,components:1};case Qd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function wM(s,t,e,n,i,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new pt,h=new WeakMap;let u;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(E,S){return d?new OffscreenCanvas(E,S):Dr("canvas")}function _(E,S,B){let H=1;const J=mt(E);if((J.width>B||J.height>B)&&(H=B/Math.max(J.width,J.height)),H<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const Y=Math.floor(H*J.width),gt=Math.floor(H*J.height);u===void 0&&(u=p(Y,gt));const at=S?p(Y,gt):u;return at.width=Y,at.height=gt,at.getContext("2d").drawImage(E,0,0,Y,gt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+Y+"x"+gt+")."),at}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),E;return E}function g(E){return E.generateMipmaps}function m(E){s.generateMipmap(E)}function b(E){return E.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?s.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function v(E,S,B,H,J=!1){if(E!==null){if(s[E]!==void 0)return s[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let Y=S;if(S===s.RED&&(B===s.FLOAT&&(Y=s.R32F),B===s.HALF_FLOAT&&(Y=s.R16F),B===s.UNSIGNED_BYTE&&(Y=s.R8)),S===s.RED_INTEGER&&(B===s.UNSIGNED_BYTE&&(Y=s.R8UI),B===s.UNSIGNED_SHORT&&(Y=s.R16UI),B===s.UNSIGNED_INT&&(Y=s.R32UI),B===s.BYTE&&(Y=s.R8I),B===s.SHORT&&(Y=s.R16I),B===s.INT&&(Y=s.R32I)),S===s.RG&&(B===s.FLOAT&&(Y=s.RG32F),B===s.HALF_FLOAT&&(Y=s.RG16F),B===s.UNSIGNED_BYTE&&(Y=s.RG8)),S===s.RG_INTEGER&&(B===s.UNSIGNED_BYTE&&(Y=s.RG8UI),B===s.UNSIGNED_SHORT&&(Y=s.RG16UI),B===s.UNSIGNED_INT&&(Y=s.RG32UI),B===s.BYTE&&(Y=s.RG8I),B===s.SHORT&&(Y=s.RG16I),B===s.INT&&(Y=s.RG32I)),S===s.RGB_INTEGER&&(B===s.UNSIGNED_BYTE&&(Y=s.RGB8UI),B===s.UNSIGNED_SHORT&&(Y=s.RGB16UI),B===s.UNSIGNED_INT&&(Y=s.RGB32UI),B===s.BYTE&&(Y=s.RGB8I),B===s.SHORT&&(Y=s.RGB16I),B===s.INT&&(Y=s.RGB32I)),S===s.RGBA_INTEGER&&(B===s.UNSIGNED_BYTE&&(Y=s.RGBA8UI),B===s.UNSIGNED_SHORT&&(Y=s.RGBA16UI),B===s.UNSIGNED_INT&&(Y=s.RGBA32UI),B===s.BYTE&&(Y=s.RGBA8I),B===s.SHORT&&(Y=s.RGBA16I),B===s.INT&&(Y=s.RGBA32I)),S===s.RGB&&B===s.UNSIGNED_INT_5_9_9_9_REV&&(Y=s.RGB9_E5),S===s.RGBA){const gt=J?xa:te.getTransfer(H);B===s.FLOAT&&(Y=s.RGBA32F),B===s.HALF_FLOAT&&(Y=s.RGBA16F),B===s.UNSIGNED_BYTE&&(Y=gt===fe?s.SRGB8_ALPHA8:s.RGBA8),B===s.UNSIGNED_SHORT_4_4_4_4&&(Y=s.RGBA4),B===s.UNSIGNED_SHORT_5_5_5_1&&(Y=s.RGB5_A1)}return(Y===s.R16F||Y===s.R32F||Y===s.RG16F||Y===s.RG32F||Y===s.RGBA16F||Y===s.RGBA32F)&&t.get("EXT_color_buffer_float"),Y}function x(E,S){let B;return E?S===null||S===es||S===Gs?B=s.DEPTH24_STENCIL8:S===wn?B=s.DEPTH32F_STENCIL8:S===Pr&&(B=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===es||S===Gs?B=s.DEPTH_COMPONENT24:S===wn?B=s.DEPTH_COMPONENT32F:S===Pr&&(B=s.DEPTH_COMPONENT16),B}function D(E,S){return g(E)===!0||E.isFramebufferTexture&&E.minFilter!==Xe&&E.minFilter!==Qe?Math.log2(Math.max(S.width,S.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?S.mipmaps.length:1}function w(E){const S=E.target;S.removeEventListener("dispose",w),I(S),S.isVideoTexture&&h.delete(S)}function P(E){const S=E.target;S.removeEventListener("dispose",P),y(S)}function I(E){const S=n.get(E);if(S.__webglInit===void 0)return;const B=E.source,H=f.get(B);if(H){const J=H[S.__cacheKey];J.usedTimes--,J.usedTimes===0&&T(E),Object.keys(H).length===0&&f.delete(B)}n.remove(E)}function T(E){const S=n.get(E);s.deleteTexture(S.__webglTexture);const B=E.source,H=f.get(B);delete H[S.__cacheKey],o.memory.textures--}function y(E){const S=n.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),n.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let H=0;H<6;H++){if(Array.isArray(S.__webglFramebuffer[H]))for(let J=0;J<S.__webglFramebuffer[H].length;J++)s.deleteFramebuffer(S.__webglFramebuffer[H][J]);else s.deleteFramebuffer(S.__webglFramebuffer[H]);S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer[H])}else{if(Array.isArray(S.__webglFramebuffer))for(let H=0;H<S.__webglFramebuffer.length;H++)s.deleteFramebuffer(S.__webglFramebuffer[H]);else s.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&s.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let H=0;H<S.__webglColorRenderbuffer.length;H++)S.__webglColorRenderbuffer[H]&&s.deleteRenderbuffer(S.__webglColorRenderbuffer[H]);S.__webglDepthRenderbuffer&&s.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const B=E.textures;for(let H=0,J=B.length;H<J;H++){const Y=n.get(B[H]);Y.__webglTexture&&(s.deleteTexture(Y.__webglTexture),o.memory.textures--),n.remove(B[H])}n.remove(E)}let L=0;function k(){L=0}function U(){const E=L;return E>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+i.maxTextures),L+=1,E}function V(E){const S=[];return S.push(E.wrapS),S.push(E.wrapT),S.push(E.wrapR||0),S.push(E.magFilter),S.push(E.minFilter),S.push(E.anisotropy),S.push(E.internalFormat),S.push(E.format),S.push(E.type),S.push(E.generateMipmaps),S.push(E.premultiplyAlpha),S.push(E.flipY),S.push(E.unpackAlignment),S.push(E.colorSpace),S.join()}function q(E,S){const B=n.get(E);if(E.isVideoTexture&&ct(E),E.isRenderTargetTexture===!1&&E.version>0&&B.__version!==E.version){const H=E.image;if(H===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(H.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{K(B,E,S);return}}e.bindTexture(s.TEXTURE_2D,B.__webglTexture,s.TEXTURE0+S)}function j(E,S){const B=n.get(E);if(E.version>0&&B.__version!==E.version){K(B,E,S);return}e.bindTexture(s.TEXTURE_2D_ARRAY,B.__webglTexture,s.TEXTURE0+S)}function Z(E,S){const B=n.get(E);if(E.version>0&&B.__version!==E.version){K(B,E,S);return}e.bindTexture(s.TEXTURE_3D,B.__webglTexture,s.TEXTURE0+S)}function z(E,S){const B=n.get(E);if(E.version>0&&B.__version!==E.version){Q(B,E,S);return}e.bindTexture(s.TEXTURE_CUBE_MAP,B.__webglTexture,s.TEXTURE0+S)}const st={[ts]:s.REPEAT,[Pi]:s.CLAMP_TO_EDGE,[oa]:s.MIRRORED_REPEAT},ot={[Xe]:s.NEAREST,[$d]:s.NEAREST_MIPMAP_NEAREST,[gr]:s.NEAREST_MIPMAP_LINEAR,[Qe]:s.LINEAR,[qo]:s.LINEAR_MIPMAP_NEAREST,[zn]:s.LINEAR_MIPMAP_LINEAR},_t={[n0]:s.NEVER,[c0]:s.ALWAYS,[i0]:s.LESS,[ap]:s.LEQUAL,[s0]:s.EQUAL,[a0]:s.GEQUAL,[r0]:s.GREATER,[o0]:s.NOTEQUAL};function Rt(E,S){if(S.type===wn&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===Qe||S.magFilter===qo||S.magFilter===gr||S.magFilter===zn||S.minFilter===Qe||S.minFilter===qo||S.minFilter===gr||S.minFilter===zn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(E,s.TEXTURE_WRAP_S,st[S.wrapS]),s.texParameteri(E,s.TEXTURE_WRAP_T,st[S.wrapT]),(E===s.TEXTURE_3D||E===s.TEXTURE_2D_ARRAY)&&s.texParameteri(E,s.TEXTURE_WRAP_R,st[S.wrapR]),s.texParameteri(E,s.TEXTURE_MAG_FILTER,ot[S.magFilter]),s.texParameteri(E,s.TEXTURE_MIN_FILTER,ot[S.minFilter]),S.compareFunction&&(s.texParameteri(E,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(E,s.TEXTURE_COMPARE_FUNC,_t[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Xe||S.minFilter!==gr&&S.minFilter!==zn||S.type===wn&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const B=t.get("EXT_texture_filter_anisotropic");s.texParameterf(E,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function kt(E,S){let B=!1;E.__webglInit===void 0&&(E.__webglInit=!0,S.addEventListener("dispose",w));const H=S.source;let J=f.get(H);J===void 0&&(J={},f.set(H,J));const Y=V(S);if(Y!==E.__cacheKey){J[Y]===void 0&&(J[Y]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,B=!0),J[Y].usedTimes++;const gt=J[E.__cacheKey];gt!==void 0&&(J[E.__cacheKey].usedTimes--,gt.usedTimes===0&&T(S)),E.__cacheKey=Y,E.__webglTexture=J[Y].texture}return B}function K(E,S,B){let H=s.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(H=s.TEXTURE_2D_ARRAY),S.isData3DTexture&&(H=s.TEXTURE_3D);const J=kt(E,S),Y=S.source;e.bindTexture(H,E.__webglTexture,s.TEXTURE0+B);const gt=n.get(Y);if(Y.version!==gt.__version||J===!0){e.activeTexture(s.TEXTURE0+B);const at=te.getPrimaries(te.workingColorSpace),xt=S.colorSpace===Ri?null:te.getPrimaries(S.colorSpace),Ft=S.colorSpace===Ri||at===xt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ft);let rt=_(S.image,!1,i.maxTextureSize);rt=Ct(S,rt);const At=r.convert(S.format,S.colorSpace),Tt=r.convert(S.type);let zt=v(S.internalFormat,At,Tt,S.colorSpace,S.isVideoTexture);Rt(H,S);let Et;const Jt=S.mipmaps,Xt=S.isVideoTexture!==!0,ee=gt.__version===void 0||J===!0,N=Y.dataReady,dt=D(S,rt);if(S.isDepthTexture)zt=x(S.format===Ws,S.type),ee&&(Xt?e.texStorage2D(s.TEXTURE_2D,1,zt,rt.width,rt.height):e.texImage2D(s.TEXTURE_2D,0,zt,rt.width,rt.height,0,At,Tt,null));else if(S.isDataTexture)if(Jt.length>0){Xt&&ee&&e.texStorage2D(s.TEXTURE_2D,dt,zt,Jt[0].width,Jt[0].height);for(let $=0,nt=Jt.length;$<nt;$++)Et=Jt[$],Xt?N&&e.texSubImage2D(s.TEXTURE_2D,$,0,0,Et.width,Et.height,At,Tt,Et.data):e.texImage2D(s.TEXTURE_2D,$,zt,Et.width,Et.height,0,At,Tt,Et.data);S.generateMipmaps=!1}else Xt?(ee&&e.texStorage2D(s.TEXTURE_2D,dt,zt,rt.width,rt.height),N&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,rt.width,rt.height,At,Tt,rt.data)):e.texImage2D(s.TEXTURE_2D,0,zt,rt.width,rt.height,0,At,Tt,rt.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Xt&&ee&&e.texStorage3D(s.TEXTURE_2D_ARRAY,dt,zt,Jt[0].width,Jt[0].height,rt.depth);for(let $=0,nt=Jt.length;$<nt;$++)if(Et=Jt[$],S.format!==dn)if(At!==null)if(Xt){if(N)if(S.layerUpdates.size>0){const vt=Ku(Et.width,Et.height,S.format,S.type);for(const bt of S.layerUpdates){const Gt=Et.data.subarray(bt*vt/Et.data.BYTES_PER_ELEMENT,(bt+1)*vt/Et.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,$,0,0,bt,Et.width,Et.height,1,At,Gt)}S.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,$,0,0,0,Et.width,Et.height,rt.depth,At,Et.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,$,zt,Et.width,Et.height,rt.depth,0,Et.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Xt?N&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,$,0,0,0,Et.width,Et.height,rt.depth,At,Tt,Et.data):e.texImage3D(s.TEXTURE_2D_ARRAY,$,zt,Et.width,Et.height,rt.depth,0,At,Tt,Et.data)}else{Xt&&ee&&e.texStorage2D(s.TEXTURE_2D,dt,zt,Jt[0].width,Jt[0].height);for(let $=0,nt=Jt.length;$<nt;$++)Et=Jt[$],S.format!==dn?At!==null?Xt?N&&e.compressedTexSubImage2D(s.TEXTURE_2D,$,0,0,Et.width,Et.height,At,Et.data):e.compressedTexImage2D(s.TEXTURE_2D,$,zt,Et.width,Et.height,0,Et.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Xt?N&&e.texSubImage2D(s.TEXTURE_2D,$,0,0,Et.width,Et.height,At,Tt,Et.data):e.texImage2D(s.TEXTURE_2D,$,zt,Et.width,Et.height,0,At,Tt,Et.data)}else if(S.isDataArrayTexture)if(Xt){if(ee&&e.texStorage3D(s.TEXTURE_2D_ARRAY,dt,zt,rt.width,rt.height,rt.depth),N)if(S.layerUpdates.size>0){const $=Ku(rt.width,rt.height,S.format,S.type);for(const nt of S.layerUpdates){const vt=rt.data.subarray(nt*$/rt.data.BYTES_PER_ELEMENT,(nt+1)*$/rt.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,nt,rt.width,rt.height,1,At,Tt,vt)}S.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,rt.width,rt.height,rt.depth,At,Tt,rt.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,zt,rt.width,rt.height,rt.depth,0,At,Tt,rt.data);else if(S.isData3DTexture)Xt?(ee&&e.texStorage3D(s.TEXTURE_3D,dt,zt,rt.width,rt.height,rt.depth),N&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,rt.width,rt.height,rt.depth,At,Tt,rt.data)):e.texImage3D(s.TEXTURE_3D,0,zt,rt.width,rt.height,rt.depth,0,At,Tt,rt.data);else if(S.isFramebufferTexture){if(ee)if(Xt)e.texStorage2D(s.TEXTURE_2D,dt,zt,rt.width,rt.height);else{let $=rt.width,nt=rt.height;for(let vt=0;vt<dt;vt++)e.texImage2D(s.TEXTURE_2D,vt,zt,$,nt,0,At,Tt,null),$>>=1,nt>>=1}}else if(Jt.length>0){if(Xt&&ee){const $=mt(Jt[0]);e.texStorage2D(s.TEXTURE_2D,dt,zt,$.width,$.height)}for(let $=0,nt=Jt.length;$<nt;$++)Et=Jt[$],Xt?N&&e.texSubImage2D(s.TEXTURE_2D,$,0,0,At,Tt,Et):e.texImage2D(s.TEXTURE_2D,$,zt,At,Tt,Et);S.generateMipmaps=!1}else if(Xt){if(ee){const $=mt(rt);e.texStorage2D(s.TEXTURE_2D,dt,zt,$.width,$.height)}N&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,At,Tt,rt)}else e.texImage2D(s.TEXTURE_2D,0,zt,At,Tt,rt);g(S)&&m(H),gt.__version=Y.version,S.onUpdate&&S.onUpdate(S)}E.__version=S.version}function Q(E,S,B){if(S.image.length!==6)return;const H=kt(E,S),J=S.source;e.bindTexture(s.TEXTURE_CUBE_MAP,E.__webglTexture,s.TEXTURE0+B);const Y=n.get(J);if(J.version!==Y.__version||H===!0){e.activeTexture(s.TEXTURE0+B);const gt=te.getPrimaries(te.workingColorSpace),at=S.colorSpace===Ri?null:te.getPrimaries(S.colorSpace),xt=S.colorSpace===Ri||gt===at?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,xt);const Ft=S.isCompressedTexture||S.image[0].isCompressedTexture,rt=S.image[0]&&S.image[0].isDataTexture,At=[];for(let nt=0;nt<6;nt++)!Ft&&!rt?At[nt]=_(S.image[nt],!0,i.maxCubemapSize):At[nt]=rt?S.image[nt].image:S.image[nt],At[nt]=Ct(S,At[nt]);const Tt=At[0],zt=r.convert(S.format,S.colorSpace),Et=r.convert(S.type),Jt=v(S.internalFormat,zt,Et,S.colorSpace),Xt=S.isVideoTexture!==!0,ee=Y.__version===void 0||H===!0,N=J.dataReady;let dt=D(S,Tt);Rt(s.TEXTURE_CUBE_MAP,S);let $;if(Ft){Xt&&ee&&e.texStorage2D(s.TEXTURE_CUBE_MAP,dt,Jt,Tt.width,Tt.height);for(let nt=0;nt<6;nt++){$=At[nt].mipmaps;for(let vt=0;vt<$.length;vt++){const bt=$[vt];S.format!==dn?zt!==null?Xt?N&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,vt,0,0,bt.width,bt.height,zt,bt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,vt,Jt,bt.width,bt.height,0,bt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Xt?N&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,vt,0,0,bt.width,bt.height,zt,Et,bt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,vt,Jt,bt.width,bt.height,0,zt,Et,bt.data)}}}else{if($=S.mipmaps,Xt&&ee){$.length>0&&dt++;const nt=mt(At[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,dt,Jt,nt.width,nt.height)}for(let nt=0;nt<6;nt++)if(rt){Xt?N&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,At[nt].width,At[nt].height,zt,Et,At[nt].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,Jt,At[nt].width,At[nt].height,0,zt,Et,At[nt].data);for(let vt=0;vt<$.length;vt++){const Gt=$[vt].image[nt].image;Xt?N&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,vt+1,0,0,Gt.width,Gt.height,zt,Et,Gt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,vt+1,Jt,Gt.width,Gt.height,0,zt,Et,Gt.data)}}else{Xt?N&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,zt,Et,At[nt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,Jt,zt,Et,At[nt]);for(let vt=0;vt<$.length;vt++){const bt=$[vt];Xt?N&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,vt+1,0,0,zt,Et,bt.image[nt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,vt+1,Jt,zt,Et,bt.image[nt])}}}g(S)&&m(s.TEXTURE_CUBE_MAP),Y.__version=J.version,S.onUpdate&&S.onUpdate(S)}E.__version=S.version}function St(E,S,B,H,J,Y){const gt=r.convert(B.format,B.colorSpace),at=r.convert(B.type),xt=v(B.internalFormat,gt,at,B.colorSpace),Ft=n.get(S),rt=n.get(B);if(rt.__renderTarget=S,!Ft.__hasExternalTextures){const At=Math.max(1,S.width>>Y),Tt=Math.max(1,S.height>>Y);J===s.TEXTURE_3D||J===s.TEXTURE_2D_ARRAY?e.texImage3D(J,Y,xt,At,Tt,S.depth,0,gt,at,null):e.texImage2D(J,Y,xt,At,Tt,0,gt,at,null)}e.bindFramebuffer(s.FRAMEBUFFER,E),ut(S)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,H,J,rt.__webglTexture,0,et(S)):(J===s.TEXTURE_2D||J>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,H,J,rt.__webglTexture,Y),e.bindFramebuffer(s.FRAMEBUFFER,null)}function it(E,S,B){if(s.bindRenderbuffer(s.RENDERBUFFER,E),S.depthBuffer){const H=S.depthTexture,J=H&&H.isDepthTexture?H.type:null,Y=x(S.stencilBuffer,J),gt=S.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,at=et(S);ut(S)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,at,Y,S.width,S.height):B?s.renderbufferStorageMultisample(s.RENDERBUFFER,at,Y,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,Y,S.width,S.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,gt,s.RENDERBUFFER,E)}else{const H=S.textures;for(let J=0;J<H.length;J++){const Y=H[J],gt=r.convert(Y.format,Y.colorSpace),at=r.convert(Y.type),xt=v(Y.internalFormat,gt,at,Y.colorSpace),Ft=et(S);B&&ut(S)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ft,xt,S.width,S.height):ut(S)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ft,xt,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,xt,S.width,S.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Pt(E,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,E),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const H=n.get(S.depthTexture);H.__renderTarget=S,(!H.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),q(S.depthTexture,0);const J=H.__webglTexture,Y=et(S);if(S.depthTexture.format===Ns)ut(S)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,J,0,Y):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,J,0);else if(S.depthTexture.format===Ws)ut(S)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,J,0,Y):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function Bt(E){const S=n.get(E),B=E.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==E.depthTexture){const H=E.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),H){const J=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,H.removeEventListener("dispose",J)};H.addEventListener("dispose",J),S.__depthDisposeCallback=J}S.__boundDepthTexture=H}if(E.depthTexture&&!S.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");Pt(S.__webglFramebuffer,E)}else if(B){S.__webglDepthbuffer=[];for(let H=0;H<6;H++)if(e.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer[H]),S.__webglDepthbuffer[H]===void 0)S.__webglDepthbuffer[H]=s.createRenderbuffer(),it(S.__webglDepthbuffer[H],E,!1);else{const J=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Y=S.__webglDepthbuffer[H];s.bindRenderbuffer(s.RENDERBUFFER,Y),s.framebufferRenderbuffer(s.FRAMEBUFFER,J,s.RENDERBUFFER,Y)}}else if(e.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=s.createRenderbuffer(),it(S.__webglDepthbuffer,E,!1);else{const H=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,J=S.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,J),s.framebufferRenderbuffer(s.FRAMEBUFFER,H,s.RENDERBUFFER,J)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function Lt(E,S,B){const H=n.get(E);S!==void 0&&St(H.__webglFramebuffer,E,E.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),B!==void 0&&Bt(E)}function Wt(E){const S=E.texture,B=n.get(E),H=n.get(S);E.addEventListener("dispose",P);const J=E.textures,Y=E.isWebGLCubeRenderTarget===!0,gt=J.length>1;if(gt||(H.__webglTexture===void 0&&(H.__webglTexture=s.createTexture()),H.__version=S.version,o.memory.textures++),Y){B.__webglFramebuffer=[];for(let at=0;at<6;at++)if(S.mipmaps&&S.mipmaps.length>0){B.__webglFramebuffer[at]=[];for(let xt=0;xt<S.mipmaps.length;xt++)B.__webglFramebuffer[at][xt]=s.createFramebuffer()}else B.__webglFramebuffer[at]=s.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){B.__webglFramebuffer=[];for(let at=0;at<S.mipmaps.length;at++)B.__webglFramebuffer[at]=s.createFramebuffer()}else B.__webglFramebuffer=s.createFramebuffer();if(gt)for(let at=0,xt=J.length;at<xt;at++){const Ft=n.get(J[at]);Ft.__webglTexture===void 0&&(Ft.__webglTexture=s.createTexture(),o.memory.textures++)}if(E.samples>0&&ut(E)===!1){B.__webglMultisampledFramebuffer=s.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let at=0;at<J.length;at++){const xt=J[at];B.__webglColorRenderbuffer[at]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,B.__webglColorRenderbuffer[at]);const Ft=r.convert(xt.format,xt.colorSpace),rt=r.convert(xt.type),At=v(xt.internalFormat,Ft,rt,xt.colorSpace,E.isXRRenderTarget===!0),Tt=et(E);s.renderbufferStorageMultisample(s.RENDERBUFFER,Tt,At,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+at,s.RENDERBUFFER,B.__webglColorRenderbuffer[at])}s.bindRenderbuffer(s.RENDERBUFFER,null),E.depthBuffer&&(B.__webglDepthRenderbuffer=s.createRenderbuffer(),it(B.__webglDepthRenderbuffer,E,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Y){e.bindTexture(s.TEXTURE_CUBE_MAP,H.__webglTexture),Rt(s.TEXTURE_CUBE_MAP,S);for(let at=0;at<6;at++)if(S.mipmaps&&S.mipmaps.length>0)for(let xt=0;xt<S.mipmaps.length;xt++)St(B.__webglFramebuffer[at][xt],E,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+at,xt);else St(B.__webglFramebuffer[at],E,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+at,0);g(S)&&m(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(gt){for(let at=0,xt=J.length;at<xt;at++){const Ft=J[at],rt=n.get(Ft);e.bindTexture(s.TEXTURE_2D,rt.__webglTexture),Rt(s.TEXTURE_2D,Ft),St(B.__webglFramebuffer,E,Ft,s.COLOR_ATTACHMENT0+at,s.TEXTURE_2D,0),g(Ft)&&m(s.TEXTURE_2D)}e.unbindTexture()}else{let at=s.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(at=E.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(at,H.__webglTexture),Rt(at,S),S.mipmaps&&S.mipmaps.length>0)for(let xt=0;xt<S.mipmaps.length;xt++)St(B.__webglFramebuffer[xt],E,S,s.COLOR_ATTACHMENT0,at,xt);else St(B.__webglFramebuffer,E,S,s.COLOR_ATTACHMENT0,at,0);g(S)&&m(at),e.unbindTexture()}E.depthBuffer&&Bt(E)}function tt(E){const S=E.textures;for(let B=0,H=S.length;B<H;B++){const J=S[B];if(g(J)){const Y=b(E),gt=n.get(J).__webglTexture;e.bindTexture(Y,gt),m(Y),e.unbindTexture()}}}const ht=[],R=[];function lt(E){if(E.samples>0){if(ut(E)===!1){const S=E.textures,B=E.width,H=E.height;let J=s.COLOR_BUFFER_BIT;const Y=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,gt=n.get(E),at=S.length>1;if(at)for(let xt=0;xt<S.length;xt++)e.bindFramebuffer(s.FRAMEBUFFER,gt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+xt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,gt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+xt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,gt.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,gt.__webglFramebuffer);for(let xt=0;xt<S.length;xt++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(J|=s.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(J|=s.STENCIL_BUFFER_BIT)),at){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,gt.__webglColorRenderbuffer[xt]);const Ft=n.get(S[xt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Ft,0)}s.blitFramebuffer(0,0,B,H,0,0,B,H,J,s.NEAREST),c===!0&&(ht.length=0,R.length=0,ht.push(s.COLOR_ATTACHMENT0+xt),E.depthBuffer&&E.resolveDepthBuffer===!1&&(ht.push(Y),R.push(Y),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,R)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ht))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),at)for(let xt=0;xt<S.length;xt++){e.bindFramebuffer(s.FRAMEBUFFER,gt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+xt,s.RENDERBUFFER,gt.__webglColorRenderbuffer[xt]);const Ft=n.get(S[xt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,gt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+xt,s.TEXTURE_2D,Ft,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,gt.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&c){const S=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[S])}}}function et(E){return Math.min(i.maxSamples,E.samples)}function ut(E){const S=n.get(E);return E.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function ct(E){const S=o.render.frame;h.get(E)!==S&&(h.set(E,S),E.update())}function Ct(E,S){const B=E.colorSpace,H=E.format,J=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||B!==qe&&B!==Ri&&(te.getTransfer(B)===fe?(H!==dn||J!==li)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),S}function mt(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(l.width=E.naturalWidth||E.width,l.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(l.width=E.displayWidth,l.height=E.displayHeight):(l.width=E.width,l.height=E.height),l}this.allocateTextureUnit=U,this.resetTextureUnits=k,this.setTexture2D=q,this.setTexture2DArray=j,this.setTexture3D=Z,this.setTextureCube=z,this.rebindTextures=Lt,this.setupRenderTarget=Wt,this.updateRenderTargetMipmap=tt,this.updateMultisampleRenderTarget=lt,this.setupDepthRenderbuffer=Bt,this.setupFrameBufferTexture=St,this.useMultisampledRTT=ut}function RM(s,t){function e(n,i=Ri){let r;const o=te.getTransfer(i);if(n===li)return s.UNSIGNED_BYTE;if(n===Jl)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Ql)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Qd)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Zd)return s.BYTE;if(n===Jd)return s.SHORT;if(n===Pr)return s.UNSIGNED_SHORT;if(n===Zl)return s.INT;if(n===es)return s.UNSIGNED_INT;if(n===wn)return s.FLOAT;if(n===zr)return s.HALF_FLOAT;if(n===tp)return s.ALPHA;if(n===ep)return s.RGB;if(n===dn)return s.RGBA;if(n===np)return s.LUMINANCE;if(n===ip)return s.LUMINANCE_ALPHA;if(n===Ns)return s.DEPTH_COMPONENT;if(n===Ws)return s.DEPTH_STENCIL;if(n===th)return s.RED;if(n===eh)return s.RED_INTEGER;if(n===sp)return s.RG;if(n===nh)return s.RG_INTEGER;if(n===ih)return s.RGBA_INTEGER;if(n===Ko||n===Yo||n===jo||n===$o)if(o===fe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ko)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Yo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===jo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===$o)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ko)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Yo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===jo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===$o)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===tl||n===el||n===nl||n===il)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===tl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===el)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===nl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===il)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===sl||n===rl||n===ol)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===sl||n===rl)return o===fe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ol)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===al||n===cl||n===ll||n===hl||n===ul||n===fl||n===dl||n===pl||n===ml||n===gl||n===_l||n===xl||n===vl||n===Ml)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===al)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===cl)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ll)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===hl)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ul)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===fl)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===dl)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===pl)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ml)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===gl)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===_l)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===xl)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===vl)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ml)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Zo||n===yl||n===bl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Zo)return o===fe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===yl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===bl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===rp||n===Sl||n===Tl||n===El)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Zo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Sl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Tl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===El)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Gs?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}class CM extends Ve{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Ue extends Me{constructor(){super(),this.isGroup=!0,this.type="Group"}}const PM={type:"move"};class sc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ue,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ue,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ue,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const _ of t.hand.values()){const g=e.getJointPose(_,n),m=this._getHandJoint(l,_);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,p=.005;l.inputState.pinching&&f>d+p?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&f<=d-p&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(PM)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Ue;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const LM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,IM=`
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

}`;class DM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const i=new Re,r=t.properties.get(i);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new hi({vertexShader:LM,fragmentShader:IM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new re(new Vr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class NM extends Zs{constructor(t,e){super();const n=this;let i=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,f=null,d=null,p=null;const _=new DM,g=e.getContextAttributes();let m=null,b=null;const v=[],x=[],D=new pt;let w=null;const P=new Ve;P.viewport=new oe;const I=new Ve;I.viewport=new oe;const T=[P,I],y=new CM;let L=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let Q=v[K];return Q===void 0&&(Q=new sc,v[K]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(K){let Q=v[K];return Q===void 0&&(Q=new sc,v[K]=Q),Q.getGripSpace()},this.getHand=function(K){let Q=v[K];return Q===void 0&&(Q=new sc,v[K]=Q),Q.getHandSpace()};function U(K){const Q=x.indexOf(K.inputSource);if(Q===-1)return;const St=v[Q];St!==void 0&&(St.update(K.inputSource,K.frame,l||o),St.dispatchEvent({type:K.type,data:K.inputSource}))}function V(){i.removeEventListener("select",U),i.removeEventListener("selectstart",U),i.removeEventListener("selectend",U),i.removeEventListener("squeeze",U),i.removeEventListener("squeezestart",U),i.removeEventListener("squeezeend",U),i.removeEventListener("end",V),i.removeEventListener("inputsourceschange",q);for(let K=0;K<v.length;K++){const Q=x[K];Q!==null&&(x[K]=null,v[K].disconnect(Q))}L=null,k=null,_.reset(),t.setRenderTarget(m),d=null,f=null,u=null,i=null,b=null,kt.stop(),n.isPresenting=!1,t.setPixelRatio(w),t.setSize(D.width,D.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(K){l=K},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function(K){if(i=K,i!==null){if(m=t.getRenderTarget(),i.addEventListener("select",U),i.addEventListener("selectstart",U),i.addEventListener("selectend",U),i.addEventListener("squeeze",U),i.addEventListener("squeezestart",U),i.addEventListener("squeezeend",U),i.addEventListener("end",V),i.addEventListener("inputsourceschange",q),g.xrCompatible!==!0&&await e.makeXRCompatible(),w=t.getPixelRatio(),t.getSize(D),i.renderState.layers===void 0){const Q={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(i,e,Q),i.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),b=new ns(d.framebufferWidth,d.framebufferHeight,{format:dn,type:li,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let Q=null,St=null,it=null;g.depth&&(it=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Q=g.stencil?Ws:Ns,St=g.stencil?Gs:es);const Pt={colorFormat:e.RGBA8,depthFormat:it,scaleFactor:r};u=new XRWebGLBinding(i,e),f=u.createProjectionLayer(Pt),i.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),b=new ns(f.textureWidth,f.textureHeight,{format:dn,type:li,depthTexture:new xp(f.textureWidth,f.textureHeight,St,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await i.requestReferenceSpace(a),kt.setContext(i),kt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function q(K){for(let Q=0;Q<K.removed.length;Q++){const St=K.removed[Q],it=x.indexOf(St);it>=0&&(x[it]=null,v[it].disconnect(St))}for(let Q=0;Q<K.added.length;Q++){const St=K.added[Q];let it=x.indexOf(St);if(it===-1){for(let Bt=0;Bt<v.length;Bt++)if(Bt>=x.length){x.push(St),it=Bt;break}else if(x[Bt]===null){x[Bt]=St,it=Bt;break}if(it===-1)break}const Pt=v[it];Pt&&Pt.connect(St)}}const j=new C,Z=new C;function z(K,Q,St){j.setFromMatrixPosition(Q.matrixWorld),Z.setFromMatrixPosition(St.matrixWorld);const it=j.distanceTo(Z),Pt=Q.projectionMatrix.elements,Bt=St.projectionMatrix.elements,Lt=Pt[14]/(Pt[10]-1),Wt=Pt[14]/(Pt[10]+1),tt=(Pt[9]+1)/Pt[5],ht=(Pt[9]-1)/Pt[5],R=(Pt[8]-1)/Pt[0],lt=(Bt[8]+1)/Bt[0],et=Lt*R,ut=Lt*lt,ct=it/(-R+lt),Ct=ct*-R;if(Q.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(Ct),K.translateZ(ct),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Pt[10]===-1)K.projectionMatrix.copy(Q.projectionMatrix),K.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{const mt=Lt+ct,E=Wt+ct,S=et-Ct,B=ut+(it-Ct),H=tt*Wt/E*mt,J=ht*Wt/E*mt;K.projectionMatrix.makePerspective(S,B,H,J,mt,E),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function st(K,Q){Q===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(Q.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(i===null)return;let Q=K.near,St=K.far;_.texture!==null&&(_.depthNear>0&&(Q=_.depthNear),_.depthFar>0&&(St=_.depthFar)),y.near=I.near=P.near=Q,y.far=I.far=P.far=St,(L!==y.near||k!==y.far)&&(i.updateRenderState({depthNear:y.near,depthFar:y.far}),L=y.near,k=y.far),P.layers.mask=K.layers.mask|2,I.layers.mask=K.layers.mask|4,y.layers.mask=P.layers.mask|I.layers.mask;const it=K.parent,Pt=y.cameras;st(y,it);for(let Bt=0;Bt<Pt.length;Bt++)st(Pt[Bt],it);Pt.length===2?z(y,P,I):y.projectionMatrix.copy(P.projectionMatrix),ot(K,y,it)};function ot(K,Q,St){St===null?K.matrix.copy(Q.matrixWorld):(K.matrix.copy(St.matrixWorld),K.matrix.invert(),K.matrix.multiply(Q.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(Q.projectionMatrix),K.projectionMatrixInverse.copy(Q.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Xs*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(f===null&&d===null))return c},this.setFoveation=function(K){c=K,f!==null&&(f.fixedFoveation=K),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=K)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(y)};let _t=null;function Rt(K,Q){if(h=Q.getViewerPose(l||o),p=Q,h!==null){const St=h.views;d!==null&&(t.setRenderTargetFramebuffer(b,d.framebuffer),t.setRenderTarget(b));let it=!1;St.length!==y.cameras.length&&(y.cameras.length=0,it=!0);for(let Bt=0;Bt<St.length;Bt++){const Lt=St[Bt];let Wt=null;if(d!==null)Wt=d.getViewport(Lt);else{const ht=u.getViewSubImage(f,Lt);Wt=ht.viewport,Bt===0&&(t.setRenderTargetTextures(b,ht.colorTexture,f.ignoreDepthValues?void 0:ht.depthStencilTexture),t.setRenderTarget(b))}let tt=T[Bt];tt===void 0&&(tt=new Ve,tt.layers.enable(Bt),tt.viewport=new oe,T[Bt]=tt),tt.matrix.fromArray(Lt.transform.matrix),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale),tt.projectionMatrix.fromArray(Lt.projectionMatrix),tt.projectionMatrixInverse.copy(tt.projectionMatrix).invert(),tt.viewport.set(Wt.x,Wt.y,Wt.width,Wt.height),Bt===0&&(y.matrix.copy(tt.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),it===!0&&y.cameras.push(tt)}const Pt=i.enabledFeatures;if(Pt&&Pt.includes("depth-sensing")){const Bt=u.getDepthInformation(St[0]);Bt&&Bt.isValid&&Bt.texture&&_.init(t,Bt,i.renderState)}}for(let St=0;St<v.length;St++){const it=x[St],Pt=v[St];it!==null&&Pt!==void 0&&Pt.update(it,Q,l||o)}_t&&_t(K,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),p=null}const kt=new _p;kt.setAnimationLoop(Rt),this.setAnimationLoop=function(K){_t=K},this.dispose=function(){}}}const Vi=new Ln,UM=new Vt;function FM(s,t){function e(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,pp(s)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function i(g,m,b,v,x){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(g,m):m.isMeshToonMaterial?(r(g,m),u(g,m)):m.isMeshPhongMaterial?(r(g,m),h(g,m)):m.isMeshStandardMaterial?(r(g,m),f(g,m),m.isMeshPhysicalMaterial&&d(g,m,x)):m.isMeshMatcapMaterial?(r(g,m),p(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),_(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(o(g,m),m.isLineDashedMaterial&&a(g,m)):m.isPointsMaterial?c(g,m,b,v):m.isSpriteMaterial?l(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,e(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===We&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,e(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===We&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,e(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,e(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);const b=t.get(m),v=b.envMap,x=b.envMapRotation;v&&(g.envMap.value=v,Vi.copy(x),Vi.x*=-1,Vi.y*=-1,Vi.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Vi.y*=-1,Vi.z*=-1),g.envMapRotation.value.setFromMatrix4(UM.makeRotationFromEuler(Vi)),g.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,g.aoMapTransform))}function o(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform))}function a(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function c(g,m,b,v){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*b,g.scale.value=v*.5,m.map&&(g.map.value=m.map,e(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function l(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function h(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function u(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function f(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function d(g,m,b){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===We&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=b.texture,g.transmissionSamplerSize.value.set(b.width,b.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function _(g,m){const b=t.get(m).light;g.referencePosition.value.setFromMatrixPosition(b.matrixWorld),g.nearDistance.value=b.shadow.camera.near,g.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function OM(s,t,e,n){let i={},r={},o=[];const a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function c(b,v){const x=v.program;n.uniformBlockBinding(b,x)}function l(b,v){let x=i[b.id];x===void 0&&(p(b),x=h(b),i[b.id]=x,b.addEventListener("dispose",g));const D=v.program;n.updateUBOMapping(b,D);const w=t.render.frame;r[b.id]!==w&&(f(b),r[b.id]=w)}function h(b){const v=u();b.__bindingPointIndex=v;const x=s.createBuffer(),D=b.__size,w=b.usage;return s.bindBuffer(s.UNIFORM_BUFFER,x),s.bufferData(s.UNIFORM_BUFFER,D,w),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,v,x),x}function u(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(b){const v=i[b.id],x=b.uniforms,D=b.__cache;s.bindBuffer(s.UNIFORM_BUFFER,v);for(let w=0,P=x.length;w<P;w++){const I=Array.isArray(x[w])?x[w]:[x[w]];for(let T=0,y=I.length;T<y;T++){const L=I[T];if(d(L,w,T,D)===!0){const k=L.__offset,U=Array.isArray(L.value)?L.value:[L.value];let V=0;for(let q=0;q<U.length;q++){const j=U[q],Z=_(j);typeof j=="number"||typeof j=="boolean"?(L.__data[0]=j,s.bufferSubData(s.UNIFORM_BUFFER,k+V,L.__data)):j.isMatrix3?(L.__data[0]=j.elements[0],L.__data[1]=j.elements[1],L.__data[2]=j.elements[2],L.__data[3]=0,L.__data[4]=j.elements[3],L.__data[5]=j.elements[4],L.__data[6]=j.elements[5],L.__data[7]=0,L.__data[8]=j.elements[6],L.__data[9]=j.elements[7],L.__data[10]=j.elements[8],L.__data[11]=0):(j.toArray(L.__data,V),V+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,k,L.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function d(b,v,x,D){const w=b.value,P=v+"_"+x;if(D[P]===void 0)return typeof w=="number"||typeof w=="boolean"?D[P]=w:D[P]=w.clone(),!0;{const I=D[P];if(typeof w=="number"||typeof w=="boolean"){if(I!==w)return D[P]=w,!0}else if(I.equals(w)===!1)return I.copy(w),!0}return!1}function p(b){const v=b.uniforms;let x=0;const D=16;for(let P=0,I=v.length;P<I;P++){const T=Array.isArray(v[P])?v[P]:[v[P]];for(let y=0,L=T.length;y<L;y++){const k=T[y],U=Array.isArray(k.value)?k.value:[k.value];for(let V=0,q=U.length;V<q;V++){const j=U[V],Z=_(j),z=x%D,st=z%Z.boundary,ot=z+st;x+=st,ot!==0&&D-ot<Z.storage&&(x+=D-ot),k.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=x,x+=Z.storage}}}const w=x%D;return w>0&&(x+=D-w),b.__size=x,b.__cache={},this}function _(b){const v={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(v.boundary=4,v.storage=4):b.isVector2?(v.boundary=8,v.storage=8):b.isVector3||b.isColor?(v.boundary=16,v.storage=12):b.isVector4?(v.boundary=16,v.storage=16):b.isMatrix3?(v.boundary=48,v.storage=48):b.isMatrix4?(v.boundary=64,v.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),v}function g(b){const v=b.target;v.removeEventListener("dispose",g);const x=o.indexOf(v.__bindingPointIndex);o.splice(x,1),s.deleteBuffer(i[v.id]),delete i[v.id],delete r[v.id]}function m(){for(const b in i)s.deleteBuffer(i[b]);o=[],i={},r={}}return{bind:c,update:l,dispose:m}}class BM{constructor(t={}){const{canvas:e=A0(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;const p=new Uint32Array(4),_=new Int32Array(4);let g=null,m=null;const b=[],v=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=De,this.toneMapping=Ni,this.toneMappingExposure=1;const x=this;let D=!1,w=0,P=0,I=null,T=-1,y=null;const L=new oe,k=new oe;let U=null;const V=new It(0);let q=0,j=e.width,Z=e.height,z=1,st=null,ot=null;const _t=new oe(0,0,j,Z),Rt=new oe(0,0,j,Z);let kt=!1;const K=new ah;let Q=!1,St=!1;const it=new Vt,Pt=new Vt,Bt=new C,Lt=new oe,Wt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let tt=!1;function ht(){return I===null?z:1}let R=n;function lt(A,F){return e.getContext(A,F)}try{const A={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${jl}`),e.addEventListener("webglcontextlost",nt,!1),e.addEventListener("webglcontextrestored",vt,!1),e.addEventListener("webglcontextcreationerror",bt,!1),R===null){const F="webgl2";if(R=lt(F,A),R===null)throw lt(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let et,ut,ct,Ct,mt,E,S,B,H,J,Y,gt,at,xt,Ft,rt,At,Tt,zt,Et,Jt,Xt,ee,N;function dt(){et=new Gx(R),et.init(),Xt=new RM(R,et),ut=new Ox(R,et,t,Xt),ct=new EM(R,et),ut.reverseDepthBuffer&&f&&ct.buffers.depth.setReversed(!0),Ct=new qx(R),mt=new hM,E=new wM(R,et,ct,mt,ut,Xt,Ct),S=new kx(x),B=new Vx(x),H=new Q0(R),ee=new Ux(R,H),J=new Wx(R,H,Ct,ee),Y=new Yx(R,J,H,Ct),zt=new Kx(R,ut,E),rt=new Bx(mt),gt=new lM(x,S,B,et,ut,ee,rt),at=new FM(x,mt),xt=new fM,Ft=new xM(et),Tt=new Nx(x,S,B,ct,Y,d,c),At=new SM(x,Y,ut),N=new OM(R,Ct,ut,ct),Et=new Fx(R,et,Ct),Jt=new Xx(R,et,Ct),Ct.programs=gt.programs,x.capabilities=ut,x.extensions=et,x.properties=mt,x.renderLists=xt,x.shadowMap=At,x.state=ct,x.info=Ct}dt();const $=new NM(x,R);this.xr=$,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){const A=et.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=et.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(A){A!==void 0&&(z=A,this.setSize(j,Z,!1))},this.getSize=function(A){return A.set(j,Z)},this.setSize=function(A,F,G=!0){if($.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}j=A,Z=F,e.width=Math.floor(A*z),e.height=Math.floor(F*z),G===!0&&(e.style.width=A+"px",e.style.height=F+"px"),this.setViewport(0,0,A,F)},this.getDrawingBufferSize=function(A){return A.set(j*z,Z*z).floor()},this.setDrawingBufferSize=function(A,F,G){j=A,Z=F,z=G,e.width=Math.floor(A*G),e.height=Math.floor(F*G),this.setViewport(0,0,A,F)},this.getCurrentViewport=function(A){return A.copy(L)},this.getViewport=function(A){return A.copy(_t)},this.setViewport=function(A,F,G,W){A.isVector4?_t.set(A.x,A.y,A.z,A.w):_t.set(A,F,G,W),ct.viewport(L.copy(_t).multiplyScalar(z).round())},this.getScissor=function(A){return A.copy(Rt)},this.setScissor=function(A,F,G,W){A.isVector4?Rt.set(A.x,A.y,A.z,A.w):Rt.set(A,F,G,W),ct.scissor(k.copy(Rt).multiplyScalar(z).round())},this.getScissorTest=function(){return kt},this.setScissorTest=function(A){ct.setScissorTest(kt=A)},this.setOpaqueSort=function(A){st=A},this.setTransparentSort=function(A){ot=A},this.getClearColor=function(A){return A.copy(Tt.getClearColor())},this.setClearColor=function(){Tt.setClearColor.apply(Tt,arguments)},this.getClearAlpha=function(){return Tt.getClearAlpha()},this.setClearAlpha=function(){Tt.setClearAlpha.apply(Tt,arguments)},this.clear=function(A=!0,F=!0,G=!0){let W=0;if(A){let O=!1;if(I!==null){const ft=I.texture.format;O=ft===ih||ft===nh||ft===eh}if(O){const ft=I.texture.type,wt=ft===li||ft===es||ft===Pr||ft===Gs||ft===Jl||ft===Ql,Dt=Tt.getClearColor(),Nt=Tt.getClearAlpha(),qt=Dt.r,Yt=Dt.g,Ut=Dt.b;wt?(p[0]=qt,p[1]=Yt,p[2]=Ut,p[3]=Nt,R.clearBufferuiv(R.COLOR,0,p)):(_[0]=qt,_[1]=Yt,_[2]=Ut,_[3]=Nt,R.clearBufferiv(R.COLOR,0,_))}else W|=R.COLOR_BUFFER_BIT}F&&(W|=R.DEPTH_BUFFER_BIT),G&&(W|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",nt,!1),e.removeEventListener("webglcontextrestored",vt,!1),e.removeEventListener("webglcontextcreationerror",bt,!1),xt.dispose(),Ft.dispose(),mt.dispose(),S.dispose(),B.dispose(),Y.dispose(),ee.dispose(),N.dispose(),gt.dispose(),$.dispose(),$.removeEventListener("sessionstart",os),$.removeEventListener("sessionend",kh),Fi.stop()};function nt(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),D=!0}function vt(){console.log("THREE.WebGLRenderer: Context Restored."),D=!1;const A=Ct.autoReset,F=At.enabled,G=At.autoUpdate,W=At.needsUpdate,O=At.type;dt(),Ct.autoReset=A,At.enabled=F,At.autoUpdate=G,At.needsUpdate=W,At.type=O}function bt(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Gt(A){const F=A.target;F.removeEventListener("dispose",Gt),me(F)}function me(A){Le(A),mt.remove(A)}function Le(A){const F=mt.get(A).programs;F!==void 0&&(F.forEach(function(G){gt.releaseProgram(G)}),A.isShaderMaterial&&gt.releaseShaderCache(A))}this.renderBufferDirect=function(A,F,G,W,O,ft){F===null&&(F=Wt);const wt=O.isMesh&&O.matrixWorld.determinant()<0,Dt=xm(A,F,G,W,O);ct.setMaterial(W,wt);let Nt=G.index,qt=1;if(W.wireframe===!0){if(Nt=J.getWireframeAttribute(G),Nt===void 0)return;qt=2}const Yt=G.drawRange,Ut=G.attributes.position;let ie=Yt.start*qt,ge=(Yt.start+Yt.count)*qt;ft!==null&&(ie=Math.max(ie,ft.start*qt),ge=Math.min(ge,(ft.start+ft.count)*qt)),Nt!==null?(ie=Math.max(ie,0),ge=Math.min(ge,Nt.count)):Ut!=null&&(ie=Math.max(ie,0),ge=Math.min(ge,Ut.count));const _e=ge-ie;if(_e<0||_e===1/0)return;ee.setup(O,W,Dt,G,Nt);let Ye,ae=Et;if(Nt!==null&&(Ye=H.get(Nt),ae=Jt,ae.setIndex(Ye)),O.isMesh)W.wireframe===!0?(ct.setLineWidth(W.wireframeLinewidth*ht()),ae.setMode(R.LINES)):ae.setMode(R.TRIANGLES);else if(O.isLine){let Ot=W.linewidth;Ot===void 0&&(Ot=1),ct.setLineWidth(Ot*ht()),O.isLineSegments?ae.setMode(R.LINES):O.isLineLoop?ae.setMode(R.LINE_LOOP):ae.setMode(R.LINE_STRIP)}else O.isPoints?ae.setMode(R.POINTS):O.isSprite&&ae.setMode(R.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)ae.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(et.get("WEBGL_multi_draw"))ae.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const Ot=O._multiDrawStarts,Kn=O._multiDrawCounts,ce=O._multiDrawCount,gn=Nt?H.get(Nt).bytesPerElement:1,as=mt.get(W).currentProgram.getUniforms();for(let en=0;en<ce;en++)as.setValue(R,"_gl_DrawID",en),ae.render(Ot[en]/gn,Kn[en])}else if(O.isInstancedMesh)ae.renderInstances(ie,_e,O.count);else if(G.isInstancedBufferGeometry){const Ot=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,Kn=Math.min(G.instanceCount,Ot);ae.renderInstances(ie,_e,Kn)}else ae.render(ie,_e)};function ne(A,F,G){A.transparent===!0&&A.side===Be&&A.forceSinglePass===!1?(A.side=We,A.needsUpdate=!0,Yr(A,F,G),A.side=ci,A.needsUpdate=!0,Yr(A,F,G),A.side=Be):Yr(A,F,G)}this.compile=function(A,F,G=null){G===null&&(G=A),m=Ft.get(G),m.init(F),v.push(m),G.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(m.pushLight(O),O.castShadow&&m.pushShadow(O))}),A!==G&&A.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(m.pushLight(O),O.castShadow&&m.pushShadow(O))}),m.setupLights();const W=new Set;return A.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const ft=O.material;if(ft)if(Array.isArray(ft))for(let wt=0;wt<ft.length;wt++){const Dt=ft[wt];ne(Dt,G,O),W.add(Dt)}else ne(ft,G,O),W.add(ft)}),v.pop(),m=null,W},this.compileAsync=function(A,F,G=null){const W=this.compile(A,F,G);return new Promise(O=>{function ft(){if(W.forEach(function(wt){mt.get(wt).currentProgram.isReady()&&W.delete(wt)}),W.size===0){O(A);return}setTimeout(ft,10)}et.get("KHR_parallel_shader_compile")!==null?ft():setTimeout(ft,10)})};let Ke=null;function mn(A){Ke&&Ke(A)}function os(){Fi.stop()}function kh(){Fi.start()}const Fi=new _p;Fi.setAnimationLoop(mn),typeof self<"u"&&Fi.setContext(self),this.setAnimationLoop=function(A){Ke=A,$.setAnimationLoop(A),A===null?Fi.stop():Fi.start()},$.addEventListener("sessionstart",os),$.addEventListener("sessionend",kh),this.render=function(A,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),$.enabled===!0&&$.isPresenting===!0&&($.cameraAutoUpdate===!0&&$.updateCamera(F),F=$.getCamera()),A.isScene===!0&&A.onBeforeRender(x,A,F,I),m=Ft.get(A,v.length),m.init(F),v.push(m),Pt.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),K.setFromProjectionMatrix(Pt),St=this.localClippingEnabled,Q=rt.init(this.clippingPlanes,St),g=xt.get(A,b.length),g.init(),b.push(g),$.enabled===!0&&$.isPresenting===!0){const ft=x.xr.getDepthSensingMesh();ft!==null&&Pa(ft,F,-1/0,x.sortObjects)}Pa(A,F,0,x.sortObjects),g.finish(),x.sortObjects===!0&&g.sort(st,ot),tt=$.enabled===!1||$.isPresenting===!1||$.hasDepthSensing()===!1,tt&&Tt.addToRenderList(g,A),this.info.render.frame++,Q===!0&&rt.beginShadows();const G=m.state.shadowsArray;At.render(G,A,F),Q===!0&&rt.endShadows(),this.info.autoReset===!0&&this.info.reset();const W=g.opaque,O=g.transmissive;if(m.setupLights(),F.isArrayCamera){const ft=F.cameras;if(O.length>0)for(let wt=0,Dt=ft.length;wt<Dt;wt++){const Nt=ft[wt];Hh(W,O,A,Nt)}tt&&Tt.render(A);for(let wt=0,Dt=ft.length;wt<Dt;wt++){const Nt=ft[wt];zh(g,A,Nt,Nt.viewport)}}else O.length>0&&Hh(W,O,A,F),tt&&Tt.render(A),zh(g,A,F);I!==null&&(E.updateMultisampleRenderTarget(I),E.updateRenderTargetMipmap(I)),A.isScene===!0&&A.onAfterRender(x,A,F),ee.resetDefaultState(),T=-1,y=null,v.pop(),v.length>0?(m=v[v.length-1],Q===!0&&rt.setGlobalState(x.clippingPlanes,m.state.camera)):m=null,b.pop(),b.length>0?g=b[b.length-1]:g=null};function Pa(A,F,G,W){if(A.visible===!1)return;if(A.layers.test(F.layers)){if(A.isGroup)G=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(F);else if(A.isLight)m.pushLight(A),A.castShadow&&m.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||K.intersectsSprite(A)){W&&Lt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Pt);const wt=Y.update(A),Dt=A.material;Dt.visible&&g.push(A,wt,Dt,G,Lt.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||K.intersectsObject(A))){const wt=Y.update(A),Dt=A.material;if(W&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Lt.copy(A.boundingSphere.center)):(wt.boundingSphere===null&&wt.computeBoundingSphere(),Lt.copy(wt.boundingSphere.center)),Lt.applyMatrix4(A.matrixWorld).applyMatrix4(Pt)),Array.isArray(Dt)){const Nt=wt.groups;for(let qt=0,Yt=Nt.length;qt<Yt;qt++){const Ut=Nt[qt],ie=Dt[Ut.materialIndex];ie&&ie.visible&&g.push(A,wt,ie,G,Lt.z,Ut)}}else Dt.visible&&g.push(A,wt,Dt,G,Lt.z,null)}}const ft=A.children;for(let wt=0,Dt=ft.length;wt<Dt;wt++)Pa(ft[wt],F,G,W)}function zh(A,F,G,W){const O=A.opaque,ft=A.transmissive,wt=A.transparent;m.setupLightsView(G),Q===!0&&rt.setGlobalState(x.clippingPlanes,G),W&&ct.viewport(L.copy(W)),O.length>0&&Kr(O,F,G),ft.length>0&&Kr(ft,F,G),wt.length>0&&Kr(wt,F,G),ct.buffers.depth.setTest(!0),ct.buffers.depth.setMask(!0),ct.buffers.color.setMask(!0),ct.setPolygonOffset(!1)}function Hh(A,F,G,W){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[W.id]===void 0&&(m.state.transmissionRenderTarget[W.id]=new ns(1,1,{generateMipmaps:!0,type:et.has("EXT_color_buffer_half_float")||et.has("EXT_color_buffer_float")?zr:li,minFilter:zn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:te.workingColorSpace}));const ft=m.state.transmissionRenderTarget[W.id],wt=W.viewport||L;ft.setSize(wt.z,wt.w);const Dt=x.getRenderTarget();x.setRenderTarget(ft),x.getClearColor(V),q=x.getClearAlpha(),q<1&&x.setClearColor(16777215,.5),x.clear(),tt&&Tt.render(G);const Nt=x.toneMapping;x.toneMapping=Ni;const qt=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),m.setupLightsView(W),Q===!0&&rt.setGlobalState(x.clippingPlanes,W),Kr(A,G,W),E.updateMultisampleRenderTarget(ft),E.updateRenderTargetMipmap(ft),et.has("WEBGL_multisampled_render_to_texture")===!1){let Yt=!1;for(let Ut=0,ie=F.length;Ut<ie;Ut++){const ge=F[Ut],_e=ge.object,Ye=ge.geometry,ae=ge.material,Ot=ge.group;if(ae.side===Be&&_e.layers.test(W.layers)){const Kn=ae.side;ae.side=We,ae.needsUpdate=!0,Vh(_e,G,W,Ye,ae,Ot),ae.side=Kn,ae.needsUpdate=!0,Yt=!0}}Yt===!0&&(E.updateMultisampleRenderTarget(ft),E.updateRenderTargetMipmap(ft))}x.setRenderTarget(Dt),x.setClearColor(V,q),qt!==void 0&&(W.viewport=qt),x.toneMapping=Nt}function Kr(A,F,G){const W=F.isScene===!0?F.overrideMaterial:null;for(let O=0,ft=A.length;O<ft;O++){const wt=A[O],Dt=wt.object,Nt=wt.geometry,qt=W===null?wt.material:W,Yt=wt.group;Dt.layers.test(G.layers)&&Vh(Dt,F,G,Nt,qt,Yt)}}function Vh(A,F,G,W,O,ft){A.onBeforeRender(x,F,G,W,O,ft),A.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),O.onBeforeRender(x,F,G,W,A,ft),O.transparent===!0&&O.side===Be&&O.forceSinglePass===!1?(O.side=We,O.needsUpdate=!0,x.renderBufferDirect(G,F,W,O,A,ft),O.side=ci,O.needsUpdate=!0,x.renderBufferDirect(G,F,W,O,A,ft),O.side=Be):x.renderBufferDirect(G,F,W,O,A,ft),A.onAfterRender(x,F,G,W,O,ft)}function Yr(A,F,G){F.isScene!==!0&&(F=Wt);const W=mt.get(A),O=m.state.lights,ft=m.state.shadowsArray,wt=O.state.version,Dt=gt.getParameters(A,O.state,ft,F,G),Nt=gt.getProgramCacheKey(Dt);let qt=W.programs;W.environment=A.isMeshStandardMaterial?F.environment:null,W.fog=F.fog,W.envMap=(A.isMeshStandardMaterial?B:S).get(A.envMap||W.environment),W.envMapRotation=W.environment!==null&&A.envMap===null?F.environmentRotation:A.envMapRotation,qt===void 0&&(A.addEventListener("dispose",Gt),qt=new Map,W.programs=qt);let Yt=qt.get(Nt);if(Yt!==void 0){if(W.currentProgram===Yt&&W.lightsStateVersion===wt)return Wh(A,Dt),Yt}else Dt.uniforms=gt.getUniforms(A),A.onBeforeCompile(Dt,x),Yt=gt.acquireProgram(Dt,Nt),qt.set(Nt,Yt),W.uniforms=Dt.uniforms;const Ut=W.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ut.clippingPlanes=rt.uniform),Wh(A,Dt),W.needsLights=Mm(A),W.lightsStateVersion=wt,W.needsLights&&(Ut.ambientLightColor.value=O.state.ambient,Ut.lightProbe.value=O.state.probe,Ut.directionalLights.value=O.state.directional,Ut.directionalLightShadows.value=O.state.directionalShadow,Ut.spotLights.value=O.state.spot,Ut.spotLightShadows.value=O.state.spotShadow,Ut.rectAreaLights.value=O.state.rectArea,Ut.ltc_1.value=O.state.rectAreaLTC1,Ut.ltc_2.value=O.state.rectAreaLTC2,Ut.pointLights.value=O.state.point,Ut.pointLightShadows.value=O.state.pointShadow,Ut.hemisphereLights.value=O.state.hemi,Ut.directionalShadowMap.value=O.state.directionalShadowMap,Ut.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Ut.spotShadowMap.value=O.state.spotShadowMap,Ut.spotLightMatrix.value=O.state.spotLightMatrix,Ut.spotLightMap.value=O.state.spotLightMap,Ut.pointShadowMap.value=O.state.pointShadowMap,Ut.pointShadowMatrix.value=O.state.pointShadowMatrix),W.currentProgram=Yt,W.uniformsList=null,Yt}function Gh(A){if(A.uniformsList===null){const F=A.currentProgram.getUniforms();A.uniformsList=Jo.seqWithValue(F.seq,A.uniforms)}return A.uniformsList}function Wh(A,F){const G=mt.get(A);G.outputColorSpace=F.outputColorSpace,G.batching=F.batching,G.batchingColor=F.batchingColor,G.instancing=F.instancing,G.instancingColor=F.instancingColor,G.instancingMorph=F.instancingMorph,G.skinning=F.skinning,G.morphTargets=F.morphTargets,G.morphNormals=F.morphNormals,G.morphColors=F.morphColors,G.morphTargetsCount=F.morphTargetsCount,G.numClippingPlanes=F.numClippingPlanes,G.numIntersection=F.numClipIntersection,G.vertexAlphas=F.vertexAlphas,G.vertexTangents=F.vertexTangents,G.toneMapping=F.toneMapping}function xm(A,F,G,W,O){F.isScene!==!0&&(F=Wt),E.resetTextureUnits();const ft=F.fog,wt=W.isMeshStandardMaterial?F.environment:null,Dt=I===null?x.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:qe,Nt=(W.isMeshStandardMaterial?B:S).get(W.envMap||wt),qt=W.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Yt=!!G.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Ut=!!G.morphAttributes.position,ie=!!G.morphAttributes.normal,ge=!!G.morphAttributes.color;let _e=Ni;W.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(_e=x.toneMapping);const Ye=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,ae=Ye!==void 0?Ye.length:0,Ot=mt.get(W),Kn=m.state.lights;if(Q===!0&&(St===!0||A!==y)){const an=A===y&&W.id===T;rt.setState(W,A,an)}let ce=!1;W.version===Ot.__version?(Ot.needsLights&&Ot.lightsStateVersion!==Kn.state.version||Ot.outputColorSpace!==Dt||O.isBatchedMesh&&Ot.batching===!1||!O.isBatchedMesh&&Ot.batching===!0||O.isBatchedMesh&&Ot.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&Ot.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&Ot.instancing===!1||!O.isInstancedMesh&&Ot.instancing===!0||O.isSkinnedMesh&&Ot.skinning===!1||!O.isSkinnedMesh&&Ot.skinning===!0||O.isInstancedMesh&&Ot.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Ot.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Ot.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Ot.instancingMorph===!1&&O.morphTexture!==null||Ot.envMap!==Nt||W.fog===!0&&Ot.fog!==ft||Ot.numClippingPlanes!==void 0&&(Ot.numClippingPlanes!==rt.numPlanes||Ot.numIntersection!==rt.numIntersection)||Ot.vertexAlphas!==qt||Ot.vertexTangents!==Yt||Ot.morphTargets!==Ut||Ot.morphNormals!==ie||Ot.morphColors!==ge||Ot.toneMapping!==_e||Ot.morphTargetsCount!==ae)&&(ce=!0):(ce=!0,Ot.__version=W.version);let gn=Ot.currentProgram;ce===!0&&(gn=Yr(W,F,O));let as=!1,en=!1,nr=!1;const xe=gn.getUniforms(),In=Ot.uniforms;if(ct.useProgram(gn.program)&&(as=!0,en=!0,nr=!0),W.id!==T&&(T=W.id,en=!0),as||y!==A){ct.buffers.depth.getReversed()?(it.copy(A.projectionMatrix),R0(it),C0(it),xe.setValue(R,"projectionMatrix",it)):xe.setValue(R,"projectionMatrix",A.projectionMatrix),xe.setValue(R,"viewMatrix",A.matrixWorldInverse);const fi=xe.map.cameraPosition;fi!==void 0&&fi.setValue(R,Bt.setFromMatrixPosition(A.matrixWorld)),ut.logarithmicDepthBuffer&&xe.setValue(R,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&xe.setValue(R,"isOrthographic",A.isOrthographicCamera===!0),y!==A&&(y=A,en=!0,nr=!0)}if(O.isSkinnedMesh){xe.setOptional(R,O,"bindMatrix"),xe.setOptional(R,O,"bindMatrixInverse");const an=O.skeleton;an&&(an.boneTexture===null&&an.computeBoneTexture(),xe.setValue(R,"boneTexture",an.boneTexture,E))}O.isBatchedMesh&&(xe.setOptional(R,O,"batchingTexture"),xe.setValue(R,"batchingTexture",O._matricesTexture,E),xe.setOptional(R,O,"batchingIdTexture"),xe.setValue(R,"batchingIdTexture",O._indirectTexture,E),xe.setOptional(R,O,"batchingColorTexture"),O._colorsTexture!==null&&xe.setValue(R,"batchingColorTexture",O._colorsTexture,E));const ir=G.morphAttributes;if((ir.position!==void 0||ir.normal!==void 0||ir.color!==void 0)&&zt.update(O,G,gn),(en||Ot.receiveShadow!==O.receiveShadow)&&(Ot.receiveShadow=O.receiveShadow,xe.setValue(R,"receiveShadow",O.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(In.envMap.value=Nt,In.flipEnvMap.value=Nt.isCubeTexture&&Nt.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&F.environment!==null&&(In.envMapIntensity.value=F.environmentIntensity),en&&(xe.setValue(R,"toneMappingExposure",x.toneMappingExposure),Ot.needsLights&&vm(In,nr),ft&&W.fog===!0&&at.refreshFogUniforms(In,ft),at.refreshMaterialUniforms(In,W,z,Z,m.state.transmissionRenderTarget[A.id]),Jo.upload(R,Gh(Ot),In,E)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Jo.upload(R,Gh(Ot),In,E),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&xe.setValue(R,"center",O.center),xe.setValue(R,"modelViewMatrix",O.modelViewMatrix),xe.setValue(R,"normalMatrix",O.normalMatrix),xe.setValue(R,"modelMatrix",O.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const an=W.uniformsGroups;for(let fi=0,di=an.length;fi<di;fi++){const Xh=an[fi];N.update(Xh,gn),N.bind(Xh,gn)}}return gn}function vm(A,F){A.ambientLightColor.needsUpdate=F,A.lightProbe.needsUpdate=F,A.directionalLights.needsUpdate=F,A.directionalLightShadows.needsUpdate=F,A.pointLights.needsUpdate=F,A.pointLightShadows.needsUpdate=F,A.spotLights.needsUpdate=F,A.spotLightShadows.needsUpdate=F,A.rectAreaLights.needsUpdate=F,A.hemisphereLights.needsUpdate=F}function Mm(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(A,F,G){mt.get(A.texture).__webglTexture=F,mt.get(A.depthTexture).__webglTexture=G;const W=mt.get(A);W.__hasExternalTextures=!0,W.__autoAllocateDepthBuffer=G===void 0,W.__autoAllocateDepthBuffer||et.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,F){const G=mt.get(A);G.__webglFramebuffer=F,G.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(A,F=0,G=0){I=A,w=F,P=G;let W=!0,O=null,ft=!1,wt=!1;if(A){const Nt=mt.get(A);if(Nt.__useDefaultFramebuffer!==void 0)ct.bindFramebuffer(R.FRAMEBUFFER,null),W=!1;else if(Nt.__webglFramebuffer===void 0)E.setupRenderTarget(A);else if(Nt.__hasExternalTextures)E.rebindTextures(A,mt.get(A.texture).__webglTexture,mt.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Ut=A.depthTexture;if(Nt.__boundDepthTexture!==Ut){if(Ut!==null&&mt.has(Ut)&&(A.width!==Ut.image.width||A.height!==Ut.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");E.setupDepthRenderbuffer(A)}}const qt=A.texture;(qt.isData3DTexture||qt.isDataArrayTexture||qt.isCompressedArrayTexture)&&(wt=!0);const Yt=mt.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Yt[F])?O=Yt[F][G]:O=Yt[F],ft=!0):A.samples>0&&E.useMultisampledRTT(A)===!1?O=mt.get(A).__webglMultisampledFramebuffer:Array.isArray(Yt)?O=Yt[G]:O=Yt,L.copy(A.viewport),k.copy(A.scissor),U=A.scissorTest}else L.copy(_t).multiplyScalar(z).floor(),k.copy(Rt).multiplyScalar(z).floor(),U=kt;if(ct.bindFramebuffer(R.FRAMEBUFFER,O)&&W&&ct.drawBuffers(A,O),ct.viewport(L),ct.scissor(k),ct.setScissorTest(U),ft){const Nt=mt.get(A.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+F,Nt.__webglTexture,G)}else if(wt){const Nt=mt.get(A.texture),qt=F||0;R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,Nt.__webglTexture,G||0,qt)}T=-1},this.readRenderTargetPixels=function(A,F,G,W,O,ft,wt){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Dt=mt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&wt!==void 0&&(Dt=Dt[wt]),Dt){ct.bindFramebuffer(R.FRAMEBUFFER,Dt);try{const Nt=A.texture,qt=Nt.format,Yt=Nt.type;if(!ut.textureFormatReadable(qt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ut.textureTypeReadable(Yt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=A.width-W&&G>=0&&G<=A.height-O&&R.readPixels(F,G,W,O,Xt.convert(qt),Xt.convert(Yt),ft)}finally{const Nt=I!==null?mt.get(I).__webglFramebuffer:null;ct.bindFramebuffer(R.FRAMEBUFFER,Nt)}}},this.readRenderTargetPixelsAsync=async function(A,F,G,W,O,ft,wt){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Dt=mt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&wt!==void 0&&(Dt=Dt[wt]),Dt){const Nt=A.texture,qt=Nt.format,Yt=Nt.type;if(!ut.textureFormatReadable(qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ut.textureTypeReadable(Yt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(F>=0&&F<=A.width-W&&G>=0&&G<=A.height-O){ct.bindFramebuffer(R.FRAMEBUFFER,Dt);const Ut=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,Ut),R.bufferData(R.PIXEL_PACK_BUFFER,ft.byteLength,R.STREAM_READ),R.readPixels(F,G,W,O,Xt.convert(qt),Xt.convert(Yt),0);const ie=I!==null?mt.get(I).__webglFramebuffer:null;ct.bindFramebuffer(R.FRAMEBUFFER,ie);const ge=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await w0(R,ge,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,Ut),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,ft),R.deleteBuffer(Ut),R.deleteSync(ge),ft}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,F=null,G=0){A.isTexture!==!0&&(_r("WebGLRenderer: copyFramebufferToTexture function signature has changed."),F=arguments[0]||null,A=arguments[1]);const W=Math.pow(2,-G),O=Math.floor(A.image.width*W),ft=Math.floor(A.image.height*W),wt=F!==null?F.x:0,Dt=F!==null?F.y:0;E.setTexture2D(A,0),R.copyTexSubImage2D(R.TEXTURE_2D,G,0,0,wt,Dt,O,ft),ct.unbindTexture()},this.copyTextureToTexture=function(A,F,G=null,W=null,O=0){A.isTexture!==!0&&(_r("WebGLRenderer: copyTextureToTexture function signature has changed."),W=arguments[0]||null,A=arguments[1],F=arguments[2],O=arguments[3]||0,G=null);let ft,wt,Dt,Nt,qt,Yt,Ut,ie,ge;const _e=A.isCompressedTexture?A.mipmaps[O]:A.image;G!==null?(ft=G.max.x-G.min.x,wt=G.max.y-G.min.y,Dt=G.isBox3?G.max.z-G.min.z:1,Nt=G.min.x,qt=G.min.y,Yt=G.isBox3?G.min.z:0):(ft=_e.width,wt=_e.height,Dt=_e.depth||1,Nt=0,qt=0,Yt=0),W!==null?(Ut=W.x,ie=W.y,ge=W.z):(Ut=0,ie=0,ge=0);const Ye=Xt.convert(F.format),ae=Xt.convert(F.type);let Ot;F.isData3DTexture?(E.setTexture3D(F,0),Ot=R.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(E.setTexture2DArray(F,0),Ot=R.TEXTURE_2D_ARRAY):(E.setTexture2D(F,0),Ot=R.TEXTURE_2D),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,F.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,F.unpackAlignment);const Kn=R.getParameter(R.UNPACK_ROW_LENGTH),ce=R.getParameter(R.UNPACK_IMAGE_HEIGHT),gn=R.getParameter(R.UNPACK_SKIP_PIXELS),as=R.getParameter(R.UNPACK_SKIP_ROWS),en=R.getParameter(R.UNPACK_SKIP_IMAGES);R.pixelStorei(R.UNPACK_ROW_LENGTH,_e.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,_e.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Nt),R.pixelStorei(R.UNPACK_SKIP_ROWS,qt),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Yt);const nr=A.isDataArrayTexture||A.isData3DTexture,xe=F.isDataArrayTexture||F.isData3DTexture;if(A.isRenderTargetTexture||A.isDepthTexture){const In=mt.get(A),ir=mt.get(F),an=mt.get(In.__renderTarget),fi=mt.get(ir.__renderTarget);ct.bindFramebuffer(R.READ_FRAMEBUFFER,an.__webglFramebuffer),ct.bindFramebuffer(R.DRAW_FRAMEBUFFER,fi.__webglFramebuffer);for(let di=0;di<Dt;di++)nr&&R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,mt.get(A).__webglTexture,O,Yt+di),A.isDepthTexture?(xe&&R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,mt.get(F).__webglTexture,O,ge+di),R.blitFramebuffer(Nt,qt,ft,wt,Ut,ie,ft,wt,R.DEPTH_BUFFER_BIT,R.NEAREST)):xe?R.copyTexSubImage3D(Ot,O,Ut,ie,ge+di,Nt,qt,ft,wt):R.copyTexSubImage2D(Ot,O,Ut,ie,ge+di,Nt,qt,ft,wt);ct.bindFramebuffer(R.READ_FRAMEBUFFER,null),ct.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else xe?A.isDataTexture||A.isData3DTexture?R.texSubImage3D(Ot,O,Ut,ie,ge,ft,wt,Dt,Ye,ae,_e.data):F.isCompressedArrayTexture?R.compressedTexSubImage3D(Ot,O,Ut,ie,ge,ft,wt,Dt,Ye,_e.data):R.texSubImage3D(Ot,O,Ut,ie,ge,ft,wt,Dt,Ye,ae,_e):A.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,O,Ut,ie,ft,wt,Ye,ae,_e.data):A.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,O,Ut,ie,_e.width,_e.height,Ye,_e.data):R.texSubImage2D(R.TEXTURE_2D,O,Ut,ie,ft,wt,Ye,ae,_e);R.pixelStorei(R.UNPACK_ROW_LENGTH,Kn),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,ce),R.pixelStorei(R.UNPACK_SKIP_PIXELS,gn),R.pixelStorei(R.UNPACK_SKIP_ROWS,as),R.pixelStorei(R.UNPACK_SKIP_IMAGES,en),O===0&&F.generateMipmaps&&R.generateMipmap(Ot),ct.unbindTexture()},this.copyTextureToTexture3D=function(A,F,G=null,W=null,O=0){return A.isTexture!==!0&&(_r("WebGLRenderer: copyTextureToTexture3D function signature has changed."),G=arguments[0]||null,W=arguments[1]||null,A=arguments[2],F=arguments[3],O=arguments[4]||0),_r('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,F,G,W,O)},this.initRenderTarget=function(A){mt.get(A).__webglFramebuffer===void 0&&E.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?E.setTextureCube(A,0):A.isData3DTexture?E.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?E.setTexture2DArray(A,0):E.setTexture2D(A,0),ct.unbindTexture()},this.resetState=function(){w=0,P=0,I=null,ct.reset(),ee.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ri}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=te._getDrawingBufferColorSpace(t),e.unpackColorSpace=te._getUnpackColorSpace()}}class hh{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new It(t),this.near=e,this.far=n}clone(){return new hh(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class kM extends Me{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ln,this.environmentIntensity=1,this.environmentRotation=new Ln,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class zM{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=wl,this.updateRanges=[],this.version=0,this.uuid=pn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,r=this.stride;i<r;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=pn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=pn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const ke=new C;class uh{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)ke.fromBufferAttribute(this,e),ke.applyMatrix4(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ke.fromBufferAttribute(this,e),ke.applyNormalMatrix(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ke.fromBufferAttribute(this,e),ke.transformDirection(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Tn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=he(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=he(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=he(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=he(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=he(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Tn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Tn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Tn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Tn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=he(e,this.array),n=he(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=he(e,this.array),n=he(n,this.array),i=he(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=he(e,this.array),n=he(n,this.array),i=he(i,this.array),r=he(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return new Kt(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new uh(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Yu=new C,ju=new oe,$u=new oe,HM=new C,Zu=new Vt,go=new C,rc=new Gn,Ju=new Vt,oc=new Hr;class Sp extends re{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=$h,this.bindMatrix=new Vt,this.bindMatrixInverse=new Vt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const t=this.geometry;this.boundingBox===null&&(this.boundingBox=new ui),this.boundingBox.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,go),this.boundingBox.expandByPoint(go)}computeBoundingSphere(){const t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Gn),this.boundingSphere.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,go),this.boundingSphere.expandByPoint(go)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),rc.copy(this.boundingSphere),rc.applyMatrix4(i),t.ray.intersectsSphere(rc)!==!1&&(Ju.copy(i).invert(),oc.copy(t.ray).applyMatrix4(Ju),!(this.boundingBox!==null&&oc.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,oc)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const t=new oe,e=this.geometry.attributes.skinWeight;for(let n=0,i=e.count;n<i;n++){t.fromBufferAttribute(e,n);const r=1/t.manhattanLength();r!==1/0?t.multiplyScalar(r):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===$h?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Yd?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){const n=this.skeleton,i=this.geometry;ju.fromBufferAttribute(i.attributes.skinIndex,t),$u.fromBufferAttribute(i.attributes.skinWeight,t),Yu.copy(e).applyMatrix4(this.bindMatrix),e.set(0,0,0);for(let r=0;r<4;r++){const o=$u.getComponent(r);if(o!==0){const a=ju.getComponent(r);Zu.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),e.addScaledVector(HM.copy(Yu).applyMatrix4(Zu),o)}}return e.applyMatrix4(this.bindMatrixInverse)}}class Tp extends Me{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Ep extends Re{constructor(t=null,e=1,n=1,i,r,o,a,c,l=Xe,h=Xe,u,f){super(null,o,a,c,l,h,i,r,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Qu=new Vt,VM=new Vt;class Ma{constructor(t=[],e=[]){this.uuid=pn(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Vt)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){const n=new Vt;this.bones[t]&&n.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&n.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const t=this.bones,e=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=t.length;r<o;r++){const a=t[r]?t[r].matrixWorld:VM;Qu.multiplyMatrices(a,e[r]),Qu.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Ma(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);const e=new Float32Array(t*t*4);e.set(this.boneMatrices);const n=new Ep(e,t,t,dn,wn);return n.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=n,this}getBoneByName(t){for(let e=0,n=this.bones.length;e<n;e++){const i=this.bones[e];if(i.name===t)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let n=0,i=t.bones.length;n<i;n++){const r=t.bones[n];let o=e[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new Tp),this.bones.push(o),this.boneInverses.push(new Vt().fromArray(t.boneInverses[n]))}return this.init(),this}toJSON(){const t={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;const e=this.bones,n=this.boneInverses;for(let i=0,r=e.length;i<r;i++){const o=e[i];t.bones.push(o.uuid);const a=n[i];t.boneInverses.push(a.toArray())}return t}}class Cl extends Kt{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const bs=new Vt,tf=new Vt,_o=[],ef=new ui,GM=new Vt,cr=new re,lr=new Gn;class WM extends re{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Cl(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,GM)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new ui),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,bs),ef.copy(t.boundingBox).applyMatrix4(bs),this.boundingBox.union(ef)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Gn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,bs),lr.copy(t.boundingSphere).applyMatrix4(bs),this.boundingSphere.union(lr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(t,e){const n=this.matrixWorld,i=this.count;if(cr.geometry=this.geometry,cr.material=this.material,cr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),lr.copy(this.boundingSphere),lr.applyMatrix4(n),t.ray.intersectsSphere(lr)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,bs),tf.multiplyMatrices(n,bs),cr.matrixWorld=tf,cr.raycast(t,_o);for(let o=0,a=_o.length;o<a;o++){const c=_o[o];c.instanceId=r,c.object=this,e.push(c)}_o.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Cl(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ep(new Float32Array(i*this.count),i,this.count,th,wn));const r=this.morphTexture.source.data.data;let o=0;for(let l=0;l<n.length;l++)o+=n[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=i*t;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Ap extends Cn{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new It(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const ca=new C,la=new C,nf=new Vt,hr=new Hr,xo=new Gn,ac=new C,sf=new C;class fh extends Me{constructor(t=new be,e=new Ap){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,r=e.count;i<r;i++)ca.fromBufferAttribute(e,i-1),la.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=ca.distanceTo(la);t.setAttribute("lineDistance",new Ee(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),xo.copy(n.boundingSphere),xo.applyMatrix4(i),xo.radius+=r,t.ray.intersectsSphere(xo)===!1)return;nf.copy(i).invert(),hr.copy(t.ray).applyMatrix4(nf);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){const d=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let _=d,g=p-1;_<g;_+=l){const m=h.getX(_),b=h.getX(_+1),v=vo(this,t,hr,c,m,b);v&&e.push(v)}if(this.isLineLoop){const _=h.getX(p-1),g=h.getX(d),m=vo(this,t,hr,c,_,g);m&&e.push(m)}}else{const d=Math.max(0,o.start),p=Math.min(f.count,o.start+o.count);for(let _=d,g=p-1;_<g;_+=l){const m=vo(this,t,hr,c,_,_+1);m&&e.push(m)}if(this.isLineLoop){const _=vo(this,t,hr,c,p-1,d);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function vo(s,t,e,n,i,r){const o=s.geometry.attributes.position;if(ca.fromBufferAttribute(o,i),la.fromBufferAttribute(o,r),e.distanceSqToSegment(ca,la,ac,sf)>n)return;ac.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(ac);if(!(c<t.near||c>t.far))return{distance:c,point:sf.clone().applyMatrix4(s.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:s}}const rf=new C,of=new C;class XM extends fh{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let i=0,r=e.count;i<r;i+=2)rf.fromBufferAttribute(e,i),of.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+rf.distanceTo(of);t.setAttribute("lineDistance",new Ee(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class qM extends fh{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}}class Gr extends Cn{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new It(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const af=new Vt,Pl=new Hr,Mo=new Gn,yo=new C;class ya extends Me{constructor(t=new be,e=new Gr){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Mo.copy(n.boundingSphere),Mo.applyMatrix4(i),Mo.radius+=r,t.ray.intersectsSphere(Mo)===!1)return;af.copy(i).invert(),Pl.copy(t.ray).applyMatrix4(af);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){const f=Math.max(0,o.start),d=Math.min(l.count,o.start+o.count);for(let p=f,_=d;p<_;p++){const g=l.getX(p);yo.fromBufferAttribute(u,g),cf(yo,g,c,i,t,e,this)}}else{const f=Math.max(0,o.start),d=Math.min(u.count,o.start+o.count);for(let p=f,_=d;p<_;p++)yo.fromBufferAttribute(u,p),cf(yo,p,c,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function cf(s,t,e,n,i,r,o){const a=Pl.distanceSqToPoint(s);if(a<e){const c=new C;Pl.closestPointToPoint(s,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class ba extends Re{constructor(t,e,n,i,r,o,a,c,l){super(t,e,n,i,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Wn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let i=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(i=Math.floor(a+(c-a)/2),l=n[i]-o,l<0)a=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===o)return i/(r-1);const h=n[i],f=n[i+1]-h,d=(o-h)/f;return(i+d)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);const o=this.getPoint(i),a=this.getPoint(r),c=e||(o.isVector2?new pt:new C);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new C,i=[],r=[],o=[],a=new C,c=new Vt;for(let d=0;d<=t;d++){const p=d/t;i[d]=this.getTangentAt(p,new C)}r[0]=new C,o[0]=new C;let l=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),f=Math.abs(i[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),f<=l&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(i[d-1],i[d]),a.length()>Number.EPSILON){a.normalize();const p=Math.acos(we(i[d-1].dot(i[d]),-1,1));r[d].applyMatrix4(c.makeRotationAxis(a,p))}o[d].crossVectors(i[d],r[d])}if(e===!0){let d=Math.acos(we(r[0].dot(r[t]),-1,1));d/=t,i[0].dot(a.crossVectors(r[0],r[t]))>0&&(d=-d);for(let p=1;p<=t;p++)r[p].applyMatrix4(c.makeRotationAxis(i[p],d*p)),o[p].crossVectors(i[p],r[p])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class dh extends Wn{constructor(t=0,e=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new pt){const n=e,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);const a=this.aStartAngle+t*r;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=c-this.aX,d=l-this.aY;c=f*h-d*u+this.aX,l=f*u+d*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class KM extends dh{constructor(t,e,n,i,r,o){super(t,e,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function ph(){let s=0,t=0,e=0,n=0;function i(r,o,a,c){s=r,t=a,e=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){i(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,u){let f=(o-r)/l-(a-r)/(l+h)+(a-o)/h,d=(a-o)/h-(c-o)/(h+u)+(c-a)/u;f*=h,d*=h,i(o,a,f,d)},calc:function(r){const o=r*r,a=o*r;return s+t*r+e*o+n*a}}}const bo=new C,cc=new ph,lc=new ph,hc=new ph;class YM extends Wn{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new C){const n=e,i=this.points,r=i.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=i[(a-1)%r]:(bo.subVectors(i[0],i[1]).add(i[0]),l=bo);const u=i[a%r],f=i[(a+1)%r];if(this.closed||a+2<r?h=i[(a+2)%r]:(bo.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=bo),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let p=Math.pow(l.distanceToSquared(u),d),_=Math.pow(u.distanceToSquared(f),d),g=Math.pow(f.distanceToSquared(h),d);_<1e-4&&(_=1),p<1e-4&&(p=_),g<1e-4&&(g=_),cc.initNonuniformCatmullRom(l.x,u.x,f.x,h.x,p,_,g),lc.initNonuniformCatmullRom(l.y,u.y,f.y,h.y,p,_,g),hc.initNonuniformCatmullRom(l.z,u.z,f.z,h.z,p,_,g)}else this.curveType==="catmullrom"&&(cc.initCatmullRom(l.x,u.x,f.x,h.x,this.tension),lc.initCatmullRom(l.y,u.y,f.y,h.y,this.tension),hc.initCatmullRom(l.z,u.z,f.z,h.z,this.tension));return n.set(cc.calc(c),lc.calc(c),hc.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new C().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function lf(s,t,e,n,i){const r=(n-t)*.5,o=(i-e)*.5,a=s*s,c=s*a;return(2*e-2*n+r+o)*c+(-3*e+3*n-2*r-o)*a+r*s+e}function jM(s,t){const e=1-s;return e*e*t}function $M(s,t){return 2*(1-s)*s*t}function ZM(s,t){return s*s*t}function br(s,t,e,n){return jM(s,t)+$M(s,e)+ZM(s,n)}function JM(s,t){const e=1-s;return e*e*e*t}function QM(s,t){const e=1-s;return 3*e*e*s*t}function ty(s,t){return 3*(1-s)*s*s*t}function ey(s,t){return s*s*s*t}function Sr(s,t,e,n,i){return JM(s,t)+QM(s,e)+ty(s,n)+ey(s,i)}class wp extends Wn{constructor(t=new pt,e=new pt,n=new pt,i=new pt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new pt){const n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Sr(t,i.x,r.x,o.x,a.x),Sr(t,i.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class ny extends Wn{constructor(t=new C,e=new C,n=new C,i=new C){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new C){const n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Sr(t,i.x,r.x,o.x,a.x),Sr(t,i.y,r.y,o.y,a.y),Sr(t,i.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Rp extends Wn{constructor(t=new pt,e=new pt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new pt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new pt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class iy extends Wn{constructor(t=new C,e=new C){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new C){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new C){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Cp extends Wn{constructor(t=new pt,e=new pt,n=new pt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new pt){const n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(br(t,i.x,r.x,o.x),br(t,i.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class sy extends Wn{constructor(t=new C,e=new C,n=new C){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new C){const n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(br(t,i.x,r.x,o.x),br(t,i.y,r.y,o.y),br(t,i.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Pp extends Wn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new pt){const n=e,i=this.points,r=(i.length-1)*t,o=Math.floor(r),a=r-o,c=i[o===0?o:o-1],l=i[o],h=i[o>i.length-2?i.length-1:o+1],u=i[o>i.length-3?i.length-1:o+2];return n.set(lf(a,c.x,l.x,h.x,u.x),lf(a,c.y,l.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new pt().fromArray(i))}return this}}var Ll=Object.freeze({__proto__:null,ArcCurve:KM,CatmullRomCurve3:YM,CubicBezierCurve:wp,CubicBezierCurve3:ny,EllipseCurve:dh,LineCurve:Rp,LineCurve3:iy,QuadraticBezierCurve:Cp,QuadraticBezierCurve3:sy,SplineCurve:Pp});class ry extends Wn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ll[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),i=this.getCurveLengths();let r=0;for(;r<i.length;){if(i[r]>=n){const o=i[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const o=r[i],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){const h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(new Ll[i.type]().fromJSON(i))}return this}}class Il extends ry{constructor(t){super(),this.type="Path",this.currentPoint=new pt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Rp(this.currentPoint.clone(),new pt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){const r=new Cp(this.currentPoint.clone(),new pt(t,e),new pt(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,r,o){const a=new wp(this.currentPoint.clone(),new pt(t,e),new pt(n,i),new pt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Pp(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,r,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,i,r,o),this}absarc(t,e,n,i,r,o){return this.absellipse(t,e,n,n,i,r,o),this}ellipse(t,e,n,i,r,o,a,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,i,r,o,a,c),this}absellipse(t,e,n,i,r,o,a,c){const l=new dh(t,e,n,i,r,o,a,c);if(this.curves.length>0){const u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class mh extends be{constructor(t=[new pt(0,-.5),new pt(.5,0),new pt(0,.5)],e=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:i},e=Math.floor(e),i=we(i,0,Math.PI*2);const r=[],o=[],a=[],c=[],l=[],h=1/e,u=new C,f=new pt,d=new C,p=new C,_=new C;let g=0,m=0;for(let b=0;b<=t.length-1;b++)switch(b){case 0:g=t[b+1].x-t[b].x,m=t[b+1].y-t[b].y,d.x=m*1,d.y=-g,d.z=m*0,_.copy(d),d.normalize(),c.push(d.x,d.y,d.z);break;case t.length-1:c.push(_.x,_.y,_.z);break;default:g=t[b+1].x-t[b].x,m=t[b+1].y-t[b].y,d.x=m*1,d.y=-g,d.z=m*0,p.copy(d),d.x+=_.x,d.y+=_.y,d.z+=_.z,d.normalize(),c.push(d.x,d.y,d.z),_.copy(p)}for(let b=0;b<=e;b++){const v=n+b*h*i,x=Math.sin(v),D=Math.cos(v);for(let w=0;w<=t.length-1;w++){u.x=t[w].x*x,u.y=t[w].y,u.z=t[w].x*D,o.push(u.x,u.y,u.z),f.x=b/e,f.y=w/(t.length-1),a.push(f.x,f.y);const P=c[3*w+0]*x,I=c[3*w+1],T=c[3*w+0]*D;l.push(P,I,T)}}for(let b=0;b<e;b++)for(let v=0;v<t.length-1;v++){const x=v+b*t.length,D=x,w=x+t.length,P=x+t.length+1,I=x+1;r.push(D,w,I),r.push(P,I,w)}this.setIndex(r),this.setAttribute("position",new Ee(o,3)),this.setAttribute("uv",new Ee(a,2)),this.setAttribute("normal",new Ee(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new mh(t.points,t.segments,t.phiStart,t.phiLength)}}class gh extends mh{constructor(t=1,e=1,n=4,i=8){const r=new Il;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),i),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:i}}static fromJSON(t){return new gh(t.radius,t.length,t.capSegments,t.radialSegments)}}class _h extends be{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};const r=[],o=[];a(i),l(n),h(),this.setAttribute("position",new Ee(r,3)),this.setAttribute("normal",new Ee(r.slice(),3)),this.setAttribute("uv",new Ee(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(b){const v=new C,x=new C,D=new C;for(let w=0;w<e.length;w+=3)d(e[w+0],v),d(e[w+1],x),d(e[w+2],D),c(v,x,D,b)}function c(b,v,x,D){const w=D+1,P=[];for(let I=0;I<=w;I++){P[I]=[];const T=b.clone().lerp(x,I/w),y=v.clone().lerp(x,I/w),L=w-I;for(let k=0;k<=L;k++)k===0&&I===w?P[I][k]=T:P[I][k]=T.clone().lerp(y,k/L)}for(let I=0;I<w;I++)for(let T=0;T<2*(w-I)-1;T++){const y=Math.floor(T/2);T%2===0?(f(P[I][y+1]),f(P[I+1][y]),f(P[I][y])):(f(P[I][y+1]),f(P[I+1][y+1]),f(P[I+1][y]))}}function l(b){const v=new C;for(let x=0;x<r.length;x+=3)v.x=r[x+0],v.y=r[x+1],v.z=r[x+2],v.normalize().multiplyScalar(b),r[x+0]=v.x,r[x+1]=v.y,r[x+2]=v.z}function h(){const b=new C;for(let v=0;v<r.length;v+=3){b.x=r[v+0],b.y=r[v+1],b.z=r[v+2];const x=g(b)/2/Math.PI+.5,D=m(b)/Math.PI+.5;o.push(x,1-D)}p(),u()}function u(){for(let b=0;b<o.length;b+=6){const v=o[b+0],x=o[b+2],D=o[b+4],w=Math.max(v,x,D),P=Math.min(v,x,D);w>.9&&P<.1&&(v<.2&&(o[b+0]+=1),x<.2&&(o[b+2]+=1),D<.2&&(o[b+4]+=1))}}function f(b){r.push(b.x,b.y,b.z)}function d(b,v){const x=b*3;v.x=t[x+0],v.y=t[x+1],v.z=t[x+2]}function p(){const b=new C,v=new C,x=new C,D=new C,w=new pt,P=new pt,I=new pt;for(let T=0,y=0;T<r.length;T+=9,y+=6){b.set(r[T+0],r[T+1],r[T+2]),v.set(r[T+3],r[T+4],r[T+5]),x.set(r[T+6],r[T+7],r[T+8]),w.set(o[y+0],o[y+1]),P.set(o[y+2],o[y+3]),I.set(o[y+4],o[y+5]),D.copy(b).add(v).add(x).divideScalar(3);const L=g(D);_(w,y+0,b,L),_(P,y+2,v,L),_(I,y+4,x,L)}}function _(b,v,x,D){D<0&&b.x===1&&(o[v]=b.x-1),x.x===0&&x.z===0&&(o[v]=D/2/Math.PI+.5)}function g(b){return Math.atan2(b.z,-b.x)}function m(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new _h(t.vertices,t.indices,t.radius,t.details)}}class Lp extends Il{constructor(t){super(t),this.uuid=pn(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(new Il().fromJSON(i))}return this}}const oy={triangulate:function(s,t,e=2){const n=t&&t.length,i=n?t[0]*e:s.length;let r=Ip(s,0,i,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,c,l,h,u,f,d;if(n&&(r=uy(s,t,r,e)),s.length>80*e){a=l=s[0],c=h=s[1];for(let p=e;p<i;p+=e)u=s[p],f=s[p+1],u<a&&(a=u),f<c&&(c=f),u>l&&(l=u),f>h&&(h=f);d=Math.max(l-a,h-c),d=d!==0?32767/d:0}return Nr(r,o,e,a,c,d,0),o}};function Ip(s,t,e,n,i){let r,o;if(i===by(s,t,e,n)>0)for(r=t;r<e;r+=n)o=hf(r,s[r],s[r+1],o);else for(r=e-n;r>=t;r-=n)o=hf(r,s[r],s[r+1],o);return o&&Sa(o,o.next)&&(Fr(o),o=o.next),o}function ss(s,t){if(!s)return s;t||(t=s);let e=s,n;do if(n=!1,!e.steiner&&(Sa(e,e.next)||ye(e.prev,e,e.next)===0)){if(Fr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Nr(s,t,e,n,i,r,o){if(!s)return;!o&&r&&gy(s,n,i,r);let a=s,c,l;for(;s.prev!==s.next;){if(c=s.prev,l=s.next,r?cy(s,n,i,r):ay(s)){t.push(c.i/e|0),t.push(s.i/e|0),t.push(l.i/e|0),Fr(s),s=l.next,a=l.next;continue}if(s=l,s===a){o?o===1?(s=ly(ss(s),t,e),Nr(s,t,e,n,i,r,2)):o===2&&hy(s,t,e,n,i,r):Nr(ss(s),t,e,n,i,r,1);break}}}function ay(s){const t=s.prev,e=s,n=s.next;if(ye(t,e,n)>=0)return!1;const i=t.x,r=e.x,o=n.x,a=t.y,c=e.y,l=n.y,h=i<r?i<o?i:o:r<o?r:o,u=a<c?a<l?a:l:c<l?c:l,f=i>r?i>o?i:o:r>o?r:o,d=a>c?a>l?a:l:c>l?c:l;let p=n.next;for(;p!==t;){if(p.x>=h&&p.x<=f&&p.y>=u&&p.y<=d&&Cs(i,a,r,c,o,l,p.x,p.y)&&ye(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function cy(s,t,e,n){const i=s.prev,r=s,o=s.next;if(ye(i,r,o)>=0)return!1;const a=i.x,c=r.x,l=o.x,h=i.y,u=r.y,f=o.y,d=a<c?a<l?a:l:c<l?c:l,p=h<u?h<f?h:f:u<f?u:f,_=a>c?a>l?a:l:c>l?c:l,g=h>u?h>f?h:f:u>f?u:f,m=Dl(d,p,t,e,n),b=Dl(_,g,t,e,n);let v=s.prevZ,x=s.nextZ;for(;v&&v.z>=m&&x&&x.z<=b;){if(v.x>=d&&v.x<=_&&v.y>=p&&v.y<=g&&v!==i&&v!==o&&Cs(a,h,c,u,l,f,v.x,v.y)&&ye(v.prev,v,v.next)>=0||(v=v.prevZ,x.x>=d&&x.x<=_&&x.y>=p&&x.y<=g&&x!==i&&x!==o&&Cs(a,h,c,u,l,f,x.x,x.y)&&ye(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;v&&v.z>=m;){if(v.x>=d&&v.x<=_&&v.y>=p&&v.y<=g&&v!==i&&v!==o&&Cs(a,h,c,u,l,f,v.x,v.y)&&ye(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;x&&x.z<=b;){if(x.x>=d&&x.x<=_&&x.y>=p&&x.y<=g&&x!==i&&x!==o&&Cs(a,h,c,u,l,f,x.x,x.y)&&ye(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function ly(s,t,e){let n=s;do{const i=n.prev,r=n.next.next;!Sa(i,r)&&Dp(i,n,n.next,r)&&Ur(i,r)&&Ur(r,i)&&(t.push(i.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),Fr(n),Fr(n.next),n=s=r),n=n.next}while(n!==s);return ss(n)}function hy(s,t,e,n,i,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&vy(o,a)){let c=Np(o,a);o=ss(o,o.next),c=ss(c,c.next),Nr(o,t,e,n,i,r,0),Nr(c,t,e,n,i,r,0);return}a=a.next}o=o.next}while(o!==s)}function uy(s,t,e,n){const i=[];let r,o,a,c,l;for(r=0,o=t.length;r<o;r++)a=t[r]*n,c=r<o-1?t[r+1]*n:s.length,l=Ip(s,a,c,n,!1),l===l.next&&(l.steiner=!0),i.push(xy(l));for(i.sort(fy),r=0;r<i.length;r++)e=dy(i[r],e);return e}function fy(s,t){return s.x-t.x}function dy(s,t){const e=py(s,t);if(!e)return t;const n=Np(e,s);return ss(n,n.next),ss(e,e.next)}function py(s,t){let e=t,n=-1/0,i;const r=s.x,o=s.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){const f=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=r&&f>n&&(n=f,i=e.x<e.next.x?e:e.next,f===r))return i}e=e.next}while(e!==t);if(!i)return null;const a=i,c=i.x,l=i.y;let h=1/0,u;e=i;do r>=e.x&&e.x>=c&&r!==e.x&&Cs(o<l?r:n,o,c,l,o<l?n:r,o,e.x,e.y)&&(u=Math.abs(o-e.y)/(r-e.x),Ur(e,s)&&(u<h||u===h&&(e.x>i.x||e.x===i.x&&my(i,e)))&&(i=e,h=u)),e=e.next;while(e!==a);return i}function my(s,t){return ye(s.prev,s,t.prev)<0&&ye(t.next,s,s.next)<0}function gy(s,t,e,n){let i=s;do i.z===0&&(i.z=Dl(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,_y(i)}function _y(s){let t,e,n,i,r,o,a,c,l=1;do{for(e=s,s=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<l&&(a++,n=n.nextZ,!!n);t++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||e.z<=n.z)?(i=e,e=e.nextZ,a--):(i=n,n=n.nextZ,c--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;e=n}r.nextZ=null,l*=2}while(o>1);return s}function Dl(s,t,e,n,i){return s=(s-e)*i|0,t=(t-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function xy(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function Cs(s,t,e,n,i,r,o,a){return(i-o)*(t-a)>=(s-o)*(r-a)&&(s-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(i-o)*(n-a)}function vy(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!My(s,t)&&(Ur(s,t)&&Ur(t,s)&&yy(s,t)&&(ye(s.prev,s,t.prev)||ye(s,t.prev,t))||Sa(s,t)&&ye(s.prev,s,s.next)>0&&ye(t.prev,t,t.next)>0)}function ye(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function Sa(s,t){return s.x===t.x&&s.y===t.y}function Dp(s,t,e,n){const i=To(ye(s,t,e)),r=To(ye(s,t,n)),o=To(ye(e,n,s)),a=To(ye(e,n,t));return!!(i!==r&&o!==a||i===0&&So(s,e,t)||r===0&&So(s,n,t)||o===0&&So(e,s,n)||a===0&&So(e,t,n))}function So(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function To(s){return s>0?1:s<0?-1:0}function My(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&Dp(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function Ur(s,t){return ye(s.prev,s,s.next)<0?ye(s,t,s.next)>=0&&ye(s,s.prev,t)>=0:ye(s,t,s.prev)<0||ye(s,s.next,t)<0}function yy(s,t){let e=s,n=!1;const i=(s.x+t.x)/2,r=(s.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&i<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==s);return n}function Np(s,t){const e=new Nl(s.i,s.x,s.y),n=new Nl(t.i,t.x,t.y),i=s.next,r=t.prev;return s.next=t,t.prev=s,e.next=i,i.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function hf(s,t,e,n){const i=new Nl(s,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Fr(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Nl(s,t,e){this.i=s,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function by(s,t,e,n){let i=0;for(let r=t,o=e-n;r<e;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}class Tr{static area(t){const e=t.length;let n=0;for(let i=e-1,r=0;r<e;i=r++)n+=t[i].x*t[r].y-t[r].x*t[i].y;return n*.5}static isClockWise(t){return Tr.area(t)<0}static triangulateShape(t,e){const n=[],i=[],r=[];uf(t),ff(n,t);let o=t.length;e.forEach(uf);for(let c=0;c<e.length;c++)i.push(o),o+=e[c].length,ff(n,e[c]);const a=oy.triangulate(n,i);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}}function uf(s){const t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function ff(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}class xh extends be{constructor(t=new Lp([new pt(.5,.5),new pt(-.5,.5),new pt(-.5,-.5),new pt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,i=[],r=[];for(let a=0,c=t.length;a<c;a++){const l=t[a];o(l)}this.setAttribute("position",new Ee(i,3)),this.setAttribute("uv",new Ee(r,2)),this.computeVertexNormals();function o(a){const c=[],l=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1;let f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,p=e.bevelSize!==void 0?e.bevelSize:d-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,g=e.bevelSegments!==void 0?e.bevelSegments:3;const m=e.extrudePath,b=e.UVGenerator!==void 0?e.UVGenerator:Sy;let v,x=!1,D,w,P,I;m&&(v=m.getSpacedPoints(h),x=!0,f=!1,D=m.computeFrenetFrames(h,!1),w=new C,P=new C,I=new C),f||(g=0,d=0,p=0,_=0);const T=a.extractPoints(l);let y=T.shape;const L=T.holes;if(!Tr.isClockWise(y)){y=y.reverse();for(let tt=0,ht=L.length;tt<ht;tt++){const R=L[tt];Tr.isClockWise(R)&&(L[tt]=R.reverse())}}const U=Tr.triangulateShape(y,L),V=y;for(let tt=0,ht=L.length;tt<ht;tt++){const R=L[tt];y=y.concat(R)}function q(tt,ht,R){return ht||console.error("THREE.ExtrudeGeometry: vec does not exist"),tt.clone().addScaledVector(ht,R)}const j=y.length,Z=U.length;function z(tt,ht,R){let lt,et,ut;const ct=tt.x-ht.x,Ct=tt.y-ht.y,mt=R.x-tt.x,E=R.y-tt.y,S=ct*ct+Ct*Ct,B=ct*E-Ct*mt;if(Math.abs(B)>Number.EPSILON){const H=Math.sqrt(S),J=Math.sqrt(mt*mt+E*E),Y=ht.x-Ct/H,gt=ht.y+ct/H,at=R.x-E/J,xt=R.y+mt/J,Ft=((at-Y)*E-(xt-gt)*mt)/(ct*E-Ct*mt);lt=Y+ct*Ft-tt.x,et=gt+Ct*Ft-tt.y;const rt=lt*lt+et*et;if(rt<=2)return new pt(lt,et);ut=Math.sqrt(rt/2)}else{let H=!1;ct>Number.EPSILON?mt>Number.EPSILON&&(H=!0):ct<-Number.EPSILON?mt<-Number.EPSILON&&(H=!0):Math.sign(Ct)===Math.sign(E)&&(H=!0),H?(lt=-Ct,et=ct,ut=Math.sqrt(S)):(lt=ct,et=Ct,ut=Math.sqrt(S/2))}return new pt(lt/ut,et/ut)}const st=[];for(let tt=0,ht=V.length,R=ht-1,lt=tt+1;tt<ht;tt++,R++,lt++)R===ht&&(R=0),lt===ht&&(lt=0),st[tt]=z(V[tt],V[R],V[lt]);const ot=[];let _t,Rt=st.concat();for(let tt=0,ht=L.length;tt<ht;tt++){const R=L[tt];_t=[];for(let lt=0,et=R.length,ut=et-1,ct=lt+1;lt<et;lt++,ut++,ct++)ut===et&&(ut=0),ct===et&&(ct=0),_t[lt]=z(R[lt],R[ut],R[ct]);ot.push(_t),Rt=Rt.concat(_t)}for(let tt=0;tt<g;tt++){const ht=tt/g,R=d*Math.cos(ht*Math.PI/2),lt=p*Math.sin(ht*Math.PI/2)+_;for(let et=0,ut=V.length;et<ut;et++){const ct=q(V[et],st[et],lt);it(ct.x,ct.y,-R)}for(let et=0,ut=L.length;et<ut;et++){const ct=L[et];_t=ot[et];for(let Ct=0,mt=ct.length;Ct<mt;Ct++){const E=q(ct[Ct],_t[Ct],lt);it(E.x,E.y,-R)}}}const kt=p+_;for(let tt=0;tt<j;tt++){const ht=f?q(y[tt],Rt[tt],kt):y[tt];x?(P.copy(D.normals[0]).multiplyScalar(ht.x),w.copy(D.binormals[0]).multiplyScalar(ht.y),I.copy(v[0]).add(P).add(w),it(I.x,I.y,I.z)):it(ht.x,ht.y,0)}for(let tt=1;tt<=h;tt++)for(let ht=0;ht<j;ht++){const R=f?q(y[ht],Rt[ht],kt):y[ht];x?(P.copy(D.normals[tt]).multiplyScalar(R.x),w.copy(D.binormals[tt]).multiplyScalar(R.y),I.copy(v[tt]).add(P).add(w),it(I.x,I.y,I.z)):it(R.x,R.y,u/h*tt)}for(let tt=g-1;tt>=0;tt--){const ht=tt/g,R=d*Math.cos(ht*Math.PI/2),lt=p*Math.sin(ht*Math.PI/2)+_;for(let et=0,ut=V.length;et<ut;et++){const ct=q(V[et],st[et],lt);it(ct.x,ct.y,u+R)}for(let et=0,ut=L.length;et<ut;et++){const ct=L[et];_t=ot[et];for(let Ct=0,mt=ct.length;Ct<mt;Ct++){const E=q(ct[Ct],_t[Ct],lt);x?it(E.x,E.y+v[h-1].y,v[h-1].x+R):it(E.x,E.y,u+R)}}}K(),Q();function K(){const tt=i.length/3;if(f){let ht=0,R=j*ht;for(let lt=0;lt<Z;lt++){const et=U[lt];Pt(et[2]+R,et[1]+R,et[0]+R)}ht=h+g*2,R=j*ht;for(let lt=0;lt<Z;lt++){const et=U[lt];Pt(et[0]+R,et[1]+R,et[2]+R)}}else{for(let ht=0;ht<Z;ht++){const R=U[ht];Pt(R[2],R[1],R[0])}for(let ht=0;ht<Z;ht++){const R=U[ht];Pt(R[0]+j*h,R[1]+j*h,R[2]+j*h)}}n.addGroup(tt,i.length/3-tt,0)}function Q(){const tt=i.length/3;let ht=0;St(V,ht),ht+=V.length;for(let R=0,lt=L.length;R<lt;R++){const et=L[R];St(et,ht),ht+=et.length}n.addGroup(tt,i.length/3-tt,1)}function St(tt,ht){let R=tt.length;for(;--R>=0;){const lt=R;let et=R-1;et<0&&(et=tt.length-1);for(let ut=0,ct=h+g*2;ut<ct;ut++){const Ct=j*ut,mt=j*(ut+1),E=ht+lt+Ct,S=ht+et+Ct,B=ht+et+mt,H=ht+lt+mt;Bt(E,S,B,H)}}}function it(tt,ht,R){c.push(tt),c.push(ht),c.push(R)}function Pt(tt,ht,R){Lt(tt),Lt(ht),Lt(R);const lt=i.length/3,et=b.generateTopUV(n,i,lt-3,lt-2,lt-1);Wt(et[0]),Wt(et[1]),Wt(et[2])}function Bt(tt,ht,R,lt){Lt(tt),Lt(ht),Lt(lt),Lt(ht),Lt(R),Lt(lt);const et=i.length/3,ut=b.generateSideWallUV(n,i,et-6,et-3,et-2,et-1);Wt(ut[0]),Wt(ut[1]),Wt(ut[3]),Wt(ut[1]),Wt(ut[2]),Wt(ut[3])}function Lt(tt){i.push(c[tt*3+0]),i.push(c[tt*3+1]),i.push(c[tt*3+2])}function Wt(tt){r.push(tt.x),r.push(tt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Ty(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,o=t.shapes.length;r<o;r++){const a=e[t.shapes[r]];n.push(a)}const i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new Ll[i.type]().fromJSON(i)),new xh(n,t.options)}}const Sy={generateTopUV:function(s,t,e,n,i){const r=t[e*3],o=t[e*3+1],a=t[n*3],c=t[n*3+1],l=t[i*3],h=t[i*3+1];return[new pt(r,o),new pt(a,c),new pt(l,h)]},generateSideWallUV:function(s,t,e,n,i,r){const o=t[e*3],a=t[e*3+1],c=t[e*3+2],l=t[n*3],h=t[n*3+1],u=t[n*3+2],f=t[i*3],d=t[i*3+1],p=t[i*3+2],_=t[r*3],g=t[r*3+1],m=t[r*3+2];return Math.abs(a-h)<Math.abs(o-l)?[new pt(o,1-c),new pt(l,1-u),new pt(f,1-p),new pt(_,1-m)]:[new pt(a,1-c),new pt(h,1-u),new pt(d,1-p),new pt(g,1-m)]}};function Ty(s,t,e){if(e.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){const r=s[n];e.shapes.push(r.uuid)}else e.shapes.push(s.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Ta extends _h{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Ta(t.radius,t.detail)}}class Ks extends be{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const h=[],u=new C,f=new C,d=[],p=[],_=[],g=[];for(let m=0;m<=n;m++){const b=[],v=m/n;let x=0;m===0&&o===0?x=.5/e:m===n&&c===Math.PI&&(x=-.5/e);for(let D=0;D<=e;D++){const w=D/e;u.x=-t*Math.cos(i+w*r)*Math.sin(o+v*a),u.y=t*Math.cos(o+v*a),u.z=t*Math.sin(i+w*r)*Math.sin(o+v*a),p.push(u.x,u.y,u.z),f.copy(u).normalize(),_.push(f.x,f.y,f.z),g.push(w+x,1-v),b.push(l++)}h.push(b)}for(let m=0;m<n;m++)for(let b=0;b<e;b++){const v=h[m][b+1],x=h[m][b],D=h[m+1][b],w=h[m+1][b+1];(m!==0||o>0)&&d.push(v,x,w),(m!==n-1||c<Math.PI)&&d.push(x,D,w)}this.setIndex(d),this.setAttribute("position",new Ee(p,3)),this.setAttribute("normal",new Ee(_,3)),this.setAttribute("uv",new Ee(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ks(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Ge extends Cn{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new It(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new It(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=sh,this.normalScale=new pt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ln,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Xn extends Ge{static get type(){return"MeshPhysicalMaterial"}constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new pt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return we(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new It(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new It(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new It(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class Ey extends Cn{static get type(){return"MeshLambertMaterial"}constructor(t){super(),this.isMeshLambertMaterial=!0,this.color=new It(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new It(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=sh,this.normalScale=new pt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ln,this.combine=$l,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}function Eo(s,t,e){return!s||!e&&s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function Ay(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function wy(s){function t(i,r){return s[i]-s[r]}const e=s.length,n=new Array(e);for(let i=0;i!==e;++i)n[i]=i;return n.sort(t),n}function df(s,t,e){const n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){const a=e[r]*t;for(let c=0;c!==t;++c)i[o++]=s[a+c]}return i}function Up(s,t,e,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(t.push(r.time),e.push.apply(e,o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(t.push(r.time),o.toArray(e,e.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(t.push(r.time),e.push(o)),r=s[i++];while(r!==void 0)}class Wr{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){const e=this.parameterPositions;let n=this._cachedIndex,i=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=e[++n],t<i)break t}o=e.length;break e}if(!(t>=r)){const a=e[1];t<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){const a=n+o>>>1;t<e[a]?o=a:n=a+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){const e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let o=0;o!==i;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Ry extends Wr{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Zh,endingEnd:Zh}}intervalChanged_(t,e,n){const i=this.parameterPositions;let r=t-2,o=t+1,a=i[r],c=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Jh:r=t,a=2*e-n;break;case Qh:r=i.length-2,a=e+i[r]-i[r+1];break;default:r=t,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Jh:o=t,c=2*n-e;break;case Qh:o=1,c=n+i[1]-i[0];break;default:o=t-1,c=e}const l=(n-e)*.5,h=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,p=(n-e)/(i-e),_=p*p,g=_*p,m=-f*g+2*f*_-f*p,b=(1+f)*g+(-1.5-2*f)*_+(-.5+f)*p+1,v=(-1-d)*g+(1.5+d)*_+.5*p,x=d*g-d*_;for(let D=0;D!==a;++D)r[D]=m*o[h+D]+b*o[l+D]+v*o[c+D]+x*o[u+D];return r}}class Cy extends Wr{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=(n-e)/(i-e),u=1-h;for(let f=0;f!==a;++f)r[f]=o[l+f]*u+o[c+f]*h;return r}}class Py extends Wr{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}}class qn{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Eo(e,this.TimeBufferType),this.values=Eo(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){const e=t.constructor;let n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Eo(t.times,Array),values:Eo(t.values,Array)};const i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Py(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Cy(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Ry(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Lr:e=this.InterpolantFactoryMethodDiscrete;break;case Ir:e=this.InterpolantFactoryMethodLinear;break;case La:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Lr;case this.InterpolantFactoryMethodLinear:return Ir;case this.InterpolantFactoryMethodSmooth:return La}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){const e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){const e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){const n=this.times,i=n.length;let r=0,o=i-1;for(;r!==i&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0;const e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){const c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(i!==void 0&&Ay(i))for(let a=0,c=i.length;a!==c;++a){const l=i[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){const t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===La,r=t.length-1;let o=1;for(let a=1;a<r;++a){let c=!1;const l=t[a],h=t[a+1];if(l!==h&&(a!==1||l!==t[0]))if(i)c=!0;else{const u=a*n,f=u-n,d=u+n;for(let p=0;p!==n;++p){const _=e[u+p];if(_!==e[f+p]||_!==e[d+p]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];const u=a*n,f=o*n;for(let d=0;d!==n;++d)e[f+d]=e[u+d]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)e[c+l]=e[a+l];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){const t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}}qn.prototype.TimeBufferType=Float32Array;qn.prototype.ValueBufferType=Float32Array;qn.prototype.DefaultInterpolation=Ir;class Qs extends qn{constructor(t,e,n){super(t,e,n)}}Qs.prototype.ValueTypeName="bool";Qs.prototype.ValueBufferType=Array;Qs.prototype.DefaultInterpolation=Lr;Qs.prototype.InterpolantFactoryMethodLinear=void 0;Qs.prototype.InterpolantFactoryMethodSmooth=void 0;class Fp extends qn{}Fp.prototype.ValueTypeName="color";class Ys extends qn{}Ys.prototype.ValueTypeName="number";class Ly extends Wr{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-e)/(i-e);let l=t*a;for(let h=l+a;l!==h;l+=4)pe.slerpFlat(r,0,o,l-a,o,l,c);return r}}class js extends qn{InterpolantFactoryMethodLinear(t){return new Ly(this.times,this.values,this.getValueSize(),t)}}js.prototype.ValueTypeName="quaternion";js.prototype.InterpolantFactoryMethodSmooth=void 0;class tr extends qn{constructor(t,e,n){super(t,e,n)}}tr.prototype.ValueTypeName="string";tr.prototype.ValueBufferType=Array;tr.prototype.DefaultInterpolation=Lr;tr.prototype.InterpolantFactoryMethodLinear=void 0;tr.prototype.InterpolantFactoryMethodSmooth=void 0;class $s extends qn{}$s.prototype.ValueTypeName="vector";class Iy{constructor(t="",e=-1,n=[],i=Zm){this.name=t,this.tracks=n,this.duration=e,this.blendMode=i,this.uuid=pn(),this.duration<0&&this.resetDuration()}static parse(t){const e=[],n=t.tracks,i=1/(t.fps||1);for(let o=0,a=n.length;o!==a;++o)e.push(Ny(n[o]).scale(i));const r=new this(t.name,t.duration,e,t.blendMode);return r.uuid=t.uuid,r}static toJSON(t){const e=[],n=t.tracks,i={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode};for(let r=0,o=n.length;r!==o;++r)e.push(qn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(t,e,n,i){const r=e.length,o=[];for(let a=0;a<r;a++){let c=[],l=[];c.push((a+r-1)%r,a,(a+1)%r),l.push(0,1,0);const h=wy(c);c=df(c,1,h),l=df(l,1,h),!i&&c[0]===0&&(c.push(r),l.push(l[0])),o.push(new Ys(".morphTargetInfluences["+e[a].name+"]",c,l).scale(1/n))}return new this(t,-1,o)}static findByName(t,e){let n=t;if(!Array.isArray(t)){const i=t;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===e)return n[i];return null}static CreateClipsFromMorphTargetSequences(t,e,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,c=t.length;a<c;a++){const l=t[a],h=l.name.match(r);if(h&&h.length>1){const u=h[1];let f=i[u];f||(i[u]=f=[]),f.push(l)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],e,n));return o}static parseAnimation(t,e){if(!t)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(u,f,d,p,_){if(d.length!==0){const g=[],m=[];Up(d,g,m,p),g.length!==0&&_.push(new u(f,g,m))}},i=[],r=t.name||"default",o=t.fps||30,a=t.blendMode;let c=t.length||-1;const l=t.hierarchy||[];for(let u=0;u<l.length;u++){const f=l[u].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const d={};let p;for(p=0;p<f.length;p++)if(f[p].morphTargets)for(let _=0;_<f[p].morphTargets.length;_++)d[f[p].morphTargets[_]]=-1;for(const _ in d){const g=[],m=[];for(let b=0;b!==f[p].morphTargets.length;++b){const v=f[p];g.push(v.time),m.push(v.morphTarget===_?1:0)}i.push(new Ys(".morphTargetInfluence["+_+"]",g,m))}c=d.length*o}else{const d=".bones["+e[u].name+"]";n($s,d+".position",f,"pos",i),n(js,d+".quaternion",f,"rot",i),n($s,d+".scale",f,"scl",i)}}return i.length===0?null:new this(r,c,i,a)}resetDuration(){const t=this.tracks;let e=0;for(let n=0,i=t.length;n!==i;++n){const r=this.tracks[n];e=Math.max(e,r.times[r.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){const t=[];for(let e=0;e<this.tracks.length;e++)t.push(this.tracks[e].clone());return new this.constructor(this.name,this.duration,t,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Dy(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ys;case"vector":case"vector2":case"vector3":case"vector4":return $s;case"color":return Fp;case"quaternion":return js;case"bool":case"boolean":return Qs;case"string":return tr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function Ny(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const t=Dy(s.type);if(s.times===void 0){const e=[],n=[];Up(s.keys,e,n,"value"),s.times=e,s.values=n}return t.parse!==void 0?t.parse(s):new t(s.name,s.times,s.values,s.interpolation)}const Li={enabled:!1,files:{},add:function(s,t){this.enabled!==!1&&(this.files[s]=t)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class Uy{constructor(t,e,n){const i=this;let r=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){const u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=l.length;u<f;u+=2){const d=l[u],p=l[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return p}return null}}}const Fy=new Uy;class er{constructor(t){this.manager=t!==void 0?t:Fy,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}er.DEFAULT_MATERIAL_NAME="__DEFAULT";const Qn={};class Oy extends Error{constructor(t,e){super(t),this.response=e}}class Op extends er{constructor(t){super(t)}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=Li.get(t);if(r!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(r),this.manager.itemEnd(t)},0),r;if(Qn[t]!==void 0){Qn[t].push({onLoad:e,onProgress:n,onError:i});return}Qn[t]=[],Qn[t].push({onLoad:e,onProgress:n,onError:i});const o=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const h=Qn[t],u=l.body.getReader(),f=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),d=f?parseInt(f):0,p=d!==0;let _=0;const g=new ReadableStream({start(m){b();function b(){u.read().then(({done:v,value:x})=>{if(v)m.close();else{_+=x.byteLength;const D=new ProgressEvent("progress",{lengthComputable:p,loaded:_,total:d});for(let w=0,P=h.length;w<P;w++){const I=h[w];I.onProgress&&I.onProgress(D)}m.enqueue(x),b()}},v=>{m.error(v)})}}});return new Response(g)}else throw new Oy(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return l.json();default:if(a===void 0)return l.text();{const u=/charset="?([^;"\s]*)"?/i.exec(a),f=u&&u[1]?u[1].toLowerCase():void 0,d=new TextDecoder(f);return l.arrayBuffer().then(p=>d.decode(p))}}}).then(l=>{Li.add(t,l);const h=Qn[t];delete Qn[t];for(let u=0,f=h.length;u<f;u++){const d=h[u];d.onLoad&&d.onLoad(l)}}).catch(l=>{const h=Qn[t];if(h===void 0)throw this.manager.itemError(t),l;delete Qn[t];for(let u=0,f=h.length;u<f;u++){const d=h[u];d.onError&&d.onError(l)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class By extends er{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,o=Li.get(t);if(o!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0),o;const a=Dr("img");function c(){h(),Li.add(t,this),e&&e(this),r.manager.itemEnd(t)}function l(u){h(),i&&i(u),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(t),a.src=t,a}}class ky extends er{constructor(t){super(t)}load(t,e,n,i){const r=new Re,o=new By(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},n,i),r}}class Ea extends Me{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new It(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class zy extends Ea{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Me.DEFAULT_UP),this.updateMatrix(),this.groundColor=new It(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const uc=new Vt,pf=new C,mf=new C;class vh{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new pt(512,512),this.map=null,this.mapPass=null,this.matrix=new Vt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ah,this._frameExtents=new pt(1,1),this._viewportCount=1,this._viewports=[new oe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;pf.setFromMatrixPosition(t.matrixWorld),e.position.copy(pf),mf.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(mf),e.updateMatrixWorld(),uc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(uc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(uc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Hy extends vh{constructor(){super(new Ve(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,n=Xs*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(n!==e.fov||i!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=i,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class Vy extends Ea{constructor(t,e,n=0,i=Math.PI/3,r=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Me.DEFAULT_UP),this.updateMatrix(),this.target=new Me,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Hy}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const gf=new Vt,ur=new C,fc=new C;class Gy extends vh{constructor(){super(new Ve(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new pt(4,2),this._viewportCount=6,this._viewports=[new oe(2,1,1,1),new oe(0,1,1,1),new oe(3,1,1,1),new oe(1,1,1,1),new oe(3,0,1,1),new oe(1,0,1,1)],this._cubeDirections=[new C(1,0,0),new C(-1,0,0),new C(0,0,1),new C(0,0,-1),new C(0,1,0),new C(0,-1,0)],this._cubeUps=[new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,0,1),new C(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),ur.setFromMatrixPosition(t.matrixWorld),n.position.copy(ur),fc.copy(n.position),fc.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(fc),n.updateMatrixWorld(),i.makeTranslation(-ur.x,-ur.y,-ur.z),gf.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(gf)}}class Wy extends Ea{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Gy}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Xy extends vh{constructor(){super(new ch(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Bp extends Ea{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Me.DEFAULT_UP),this.updateMatrix(),this.target=new Me,this.shadow=new Xy}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Er{static decodeText(t){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(t);let e="";for(let n=0,i=t.length;n<i;n++)e+=String.fromCharCode(t[n]);try{return decodeURIComponent(escape(e))}catch{return e}}static extractUrlBase(t){const e=t.lastIndexOf("/");return e===-1?"./":t.slice(0,e+1)}static resolveURL(t,e){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}}class qy extends er{constructor(t){super(t),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(t){return this.options=t,this}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,o=Li.get(t);if(o!==void 0){if(r.manager.itemStart(t),o.then){o.then(l=>{e&&e(l),r.manager.itemEnd(t)}).catch(l=>{i&&i(l)});return}return setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const c=fetch(t,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return Li.add(t,l),e&&e(l),r.manager.itemEnd(t),l}).catch(function(l){i&&i(l),Li.remove(t),r.manager.itemError(t),r.manager.itemEnd(t)});Li.add(t,c),r.manager.itemStart(t)}}const Mh="\\[\\]\\.:\\/",Ky=new RegExp("["+Mh+"]","g"),yh="[^"+Mh+"]",Yy="[^"+Mh.replace("\\.","")+"]",jy=/((?:WC+[\/:])*)/.source.replace("WC",yh),$y=/(WCOD+)?/.source.replace("WCOD",Yy),Zy=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",yh),Jy=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",yh),Qy=new RegExp("^"+jy+$y+Zy+Jy+"$"),tb=["material","materials","bones","map"];class eb{constructor(t,e,n){const i=n||ue.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)}bind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}}class ue{constructor(t,e,n){this.path=e,this.parsedPath=n||ue.parseTrackName(e),this.node=ue.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new ue.Composite(t,e,n):new ue(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Ky,"")}static parseTrackName(t){const e=Qy.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);const n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);tb.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){const n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===e||a.uuid===e)return a;const c=n(a.children);if(c)return c}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node;const e=this.parsedPath,n=e.objectName,i=e.propertyName;let r=e.propertyIndex;if(t||(t=ue.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}const o=t[i];if(o===void 0){const l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}ue.Composite=eb;ue.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ue.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ue.prototype.GetterByBindingType=[ue.prototype._getValue_direct,ue.prototype._getValue_array,ue.prototype._getValue_arrayElement,ue.prototype._getValue_toArray];ue.prototype.SetterByBindingTypeAndVersioning=[[ue.prototype._setValue_direct,ue.prototype._setValue_direct_setNeedsUpdate,ue.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ue.prototype._setValue_array,ue.prototype._setValue_array_setNeedsUpdate,ue.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ue.prototype._setValue_arrayElement,ue.prototype._setValue_arrayElement_setNeedsUpdate,ue.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ue.prototype._setValue_fromArray,ue.prototype._setValue_fromArray_setNeedsUpdate,ue.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const _f=new Vt;class nb{constructor(t,e,n=0,i=1/0){this.ray=new Hr(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new oh,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return _f.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(_f),this}intersectObject(t,e=!0,n=[]){return Ul(t,this,n,e),n.sort(xf),n}intersectObjects(t,e=!0,n=[]){for(let i=0,r=t.length;i<r;i++)Ul(t[i],this,n,e);return n.sort(xf),n}}function xf(s,t){return s.distance-t.distance}function Ul(s,t,e,n){let i=!0;if(s.layers.test(t.layers)&&s.raycast(t,e)===!1&&(i=!1),i===!0&&n===!0){const r=s.children;for(let o=0,a=r.length;o<a;o++)Ul(r[o],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:jl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=jl);const Zt=(s,t,e)=>s<t?t:s>e?e:s,je=(s,t,e)=>s+(t-s)*e;function vr(s){const t=Math.PI*2;let e=(s+Math.PI)%t;return e<0&&(e+=t),e-=Math.PI,e===-Math.PI?Math.PI:e}const fn=(s,t,e,n)=>je(s,t,1-Math.exp(-e*n)),X=(s,t,e)=>{const n=Zt((e-s)/(t-s),0,1);return n*n*(3-2*n)};function kn(s,t){let e=(Math.imul(s|0,668265261)^Math.imul(t|0,374761393))>>>0;return e=Math.imul(e^e>>>15,2246822507)>>>0,e=Math.imul(e^e>>>13,3266489909)>>>0,e=(e^e>>>16)>>>0,e/4294967296}function Ne(s,t){const e=Math.floor(s),n=s-e,i=kn(e,t),r=kn(e+1,t),o=n*n*(3-2*n);return i+(r-i)*o}const kp=.75;class ib{constructor(t){M(this,"camera");M(this,"dist",13);M(this,"baseY",.7);M(this,"lookAhead",4.5);M(this,"aimDrop",1.5);M(this,"followRate",4.5);M(this,"heightRate",2.5);M(this,"dirRate",1.2);M(this,"s",0);M(this,"A",2);M(this,"y",1);M(this,"u",2);M(this,"dir",1);M(this,"initialised",!1);M(this,"tube",0);M(this,"tubeTarget",0);M(this,"tubeBack",.9);M(this,"tubeUp",.3);M(this,"target",new C);this.camera=new Ve(36,t,.1,1500),this.setAspect(t)}setAspect(t){!(t>0)||!Number.isFinite(t)||(this.camera.aspect=t,this.camera.fov=t<1.4?48:36,this.camera.updateProjectionMatrix())}snap(t,e,n=e*.4,i=2,r=1){this.s=t,this.A=e,this.y=Number.isFinite(n)?n:e*.4,this.u=Number.isFinite(i)?i:2,this.dir=r>=0?1:-1,this.initialised=!0,this.apply()}update(t,e,n,i=e*.4,r=2,o=1){if(!(!Number.isFinite(t)||!Number.isFinite(e))){if((!(n>=0)||!Number.isFinite(n))&&(n=0),!this.initialised){this.snap(t,e,i,r,o);return}this.s=fn(this.s,t,this.followRate,n),this.A=fn(this.A,e,this.heightRate,n),Number.isFinite(i)&&(this.y=fn(this.y,i,this.heightRate,n)),Number.isFinite(r)&&(this.u=fn(this.u,r,this.heightRate,n)),Number.isFinite(o)&&(this.dir=fn(this.dir,Math.max(-1,Math.min(1,o)),this.dirRate,n)),this.tube=fn(this.tube,this.tubeTarget,1.5,n),this.apply()}}setTube(t){this.tubeTarget=t?1:0}get focusS(){return this.s}apply(){const t=this.lookAhead*this.dir;this.camera.position.set(-(this.s-t*.35),this.baseY+.4*this.A+.25*this.y+this.tubeUp*this.tube,this.u+this.dist+this.tubeBack*this.tube),this.target.set(-(this.s+t),this.y*.75+.15*this.A-this.aimDrop,this.u-.5);const e=kp,n=-this.s,i=this.y+.9*e,r=this.u,o=this.camera.position;o.set(n+(o.x-n)*e,i+(o.y-i)*e,r+(o.z-r)*e),this.target.set(n+(this.target.x-n)*e,i+(this.target.y-i)*e,r+(this.target.z-r)*e),this.camera.lookAt(this.target)}}const sb=9.81;class zp{constructor(t=900,e=Math.random){M(this,"points");M(this,"capacity");M(this,"pos");M(this,"col");M(this,"vel");M(this,"life");M(this,"maxLife");M(this,"geo");M(this,"next",0);M(this,"alive",0);M(this,"carry",0);M(this,"rnd");this.capacity=t,this.rnd=e,this.pos=new Float32Array(t*3),this.col=new Float32Array(t*4),this.vel=new Float32Array(t*3),this.life=new Float32Array(t),this.maxLife=new Float32Array(t);for(let i=0;i<t;i++)this.pos[i*3+1]=-1e3;this.geo=new be,this.geo.setAttribute("position",new Kt(this.pos,3).setUsage(Se)),this.geo.setAttribute("color",new Kt(this.col,4).setUsage(Se));const n=new Gr({size:.16,sizeAttenuation:!0,vertexColors:!0,transparent:!0,depthWrite:!1});this.points=new ya(this.geo,n),this.points.frustumCulled=!1}get count(){return this.alive}emit(t,e,n,i,r,o,a,c,l=1.2){if(!(a>0)||!(c>0)||!Number.isFinite(a*c))return;this.carry+=a*c;let h=Math.floor(this.carry);this.carry-=h,h>this.capacity&&(h=this.capacity);for(let u=0;u<h;u++)this.spawn(t,e,n,i,r,o,l)}burst(t,e,n,i,r,o,a,c=1.8){const l=Math.min(this.capacity,Math.max(0,Math.floor(a)));for(let h=0;h<l;h++)this.spawn(t,e,n,i,r,o,c)}spawn(t,e,n,i,r,o,a){const c=this.next;this.next=(this.next+1)%this.capacity;const l=this.rnd,h=c*3;this.pos[h]=t+(l()-.5)*.3,this.pos[h+1]=e+l()*.1,this.pos[h+2]=n+(l()-.5)*.3;const u=.6+l()*.8;this.vel[h]=i*u+(l()-.5)*a,this.vel[h+1]=r*u+l()*a,this.vel[h+2]=o*u+(l()-.5)*a;const f=.5+l()*.6;this.maxLife[c]=f,this.life[c]=f}update(t){if(!(t>0)||!Number.isFinite(t))return;let e=0;const n=Math.exp(-1.2*t);for(let i=0;i<this.capacity;i++){const r=i*3,o=i*4;if(this.life[i]<=0){this.col[o+3]=0;continue}if(this.life[i]-=t,this.life[i]<=0){this.life[i]=0,this.col[o+3]=0,this.pos[r+1]=-1e3;continue}e++,this.vel[r]*=n,this.vel[r+2]*=n,this.vel[r+1]-=sb*t,this.pos[r]+=this.vel[r]*t,this.pos[r+1]+=this.vel[r+1]*t,this.pos[r+2]+=this.vel[r+2]*t;const a=this.life[i]/this.maxLife[i];this.col[o]=.92,this.col[o+1]=.97,this.col[o+2]=1,this.col[o+3]=Math.min(1,a*1.6)*.85}this.alive=e,this.geo.attributes.position.needsUpdate=!0,this.geo.attributes.color.needsUpdate=!0}clear(){this.life.fill(0),this.alive=0;for(let t=0;t<this.capacity;t++)this.pos[t*3+1]=-1e3,this.col[t*4+3]=0}}const rb={A0:2,length:240,liftMax:2.4,arrivalTime:2.5,startS:0},Ps={base:6.4,hollowGain:.5,barrelPace:7.1},rn={waveP:.66,knee:.42,span:.07,coinKey:77777,calmShare:.45,calmBelow:.49,preCloseCut:.5,preCloseIn:22,preCloseFull:12},Mi={lenMin:31,lenSpan:17,aMin:34,aSpan:56,upLen:40,upFrom:.22,curtLen:16,curtFrom:.56,riseLen:10,fallLen:8,outLen:10,endHol:.3,blend:6,tailK:.6,powerFrom:.45,paceFrom:.56,paceFull:.6,deepP:.5,medLo:.72,medHi:.83,deepLo:.87,deepHi:.96},ve={hol0:.56,hol1:.6,cover:.9,closeLen:2.4,aheadMin:2.4,aheadFull:2.8,ahead:4.2},ti={grow:.22,hol0:.5,hol1:.6,closeLen:9},ln={out0:6,out1:80,backMin:6.5,stretch:.2,rise0:-8,rise1:3,fall0:1,fall1:15,nearLen:5},vf=5,Mf=35,ob=.85,ab=.5,cb=1/120,yf=.001,dc=new DataView(new ArrayBuffer(8));function lb(s){dc.setFloat64(0,s);let t=Math.imul(dc.getUint32(0)^2654435769,2246822507);return t^=t>>>13,t=Math.imul(t^dc.getUint32(4),3266489909),t^=t>>>16,t=Math.imul(t,668265261),t^=t>>>15,t|0}const bn=class bn{constructor(t=1,e={}){M(this,"p");M(this,"seed",1);M(this,"seedHash",0);M(this,"hollowWave",!1);M(this,"hollowShift",0);M(this,"secA",0);M(this,"secB",-1);M(this,"secPeak",0);M(this,"breakS",0);M(this,"arrival",0);M(this,"peeling",!1);M(this,"peelBlend",0);M(this,"time",0);M(this,"tab",[]);M(this,"bS",NaN);M(this,"bPB",NaN);M(this,"bK",0);M(this,"bG",0);M(this,"bX",0);M(this,"bPow",0);M(this,"bTop",0);this.p={...rb,...e},this.reset(t)}get A0(){return this.p.A0}get length(){return this.p.length}reset(t){this.seed=t,this.seedHash=lb(t),this.hollowWave=kn(rn.coinKey,this.seedHash)<rn.waveP,this.hollowShift=0;const e=this.p.length-45,n=[];for(let l=0;l<e;l+=1)n.push(Ne(l/28,this.seedHash));n.sort((l,h)=>l-h);const i=n[Math.floor(rn.calmShare*n.length)]??0;i>rn.calmBelow&&(this.hollowShift=i-rn.calmBelow);const r=Mi,o=r.lenMin+r.lenSpan*kn(91001,this.seedHash);this.secA=r.aMin+r.aSpan*kn(91002,this.seedHash),this.secB=this.hollowWave?this.secA+o:-1;const a=kn(91003,this.seedHash)<r.deepP,c=kn(91004,this.seedHash);this.secPeak=a?je(r.deepLo,r.deepHi,c):je(r.medLo,r.medHi,c),this.tab=[],this.bS=NaN,this.breakS=this.p.startS,this.arrival=0,this.peeling=!1,this.peelBlend=0,this.time=0}update(t){if(!(t>0)||!Number.isFinite(t))return;this.time+=t;let e=t;if(!this.peeling){const n=(1-this.arrival)*this.p.arrivalTime;if(e<n){this.arrival=Math.min(1,this.arrival+e/this.p.arrivalTime);return}this.arrival=1,this.peeling=!0,this.peelBlend=0,e-=n}for(;e>1e-12;){const n=Math.min(e,cb);this.peelBlend=Math.min(1,this.peelBlend+n/ab),this.breakS+=this.peelSpeed(this.breakS)*n,e-=n}}d(t){const e=t-this.breakS;return this.peeling?e:Math.abs(e)}breakBlend(t){return X(-2,1,t-this.breakS)}closeout(t){const e=this.p.length-Mf;return X(e-vf,e,t)}power(t){return this.cached(1,t)}powerImpl(t){let e=0;const n=Mi;if(this.secB>this.secA&&t>this.secA-n.upLen&&t<this.secB+n.outLen){const i=this.sectionWeight(t),r=this.sectionHollow(t);e=i*r*X(Mi.powerFrom,.6,r)}return Math.max(Ne(t/28,this.seedHash),e,.8*this.closeout(t))}sectionWeight(t){const e=Mi,n=this.secA-e.upLen,i=this.secB+e.outLen;return!(this.secB>this.secA)||t<=n-e.blend||t>=i+e.blend?0:t>=n&&t<=i?1:X(n-e.blend,n,t)*(1-X(i,i+e.blend,t))}sectionEnding(t){return this.secB>this.secA?X(this.secA,this.secA+Mi.riseLen,t):1}sectionHollow(t){const e=Mi,n=this.secA,i=this.secB;if(t<=n){const r=n-t;if(r<=e.curtLen)return .6-(.6-e.curtFrom)*(r/e.curtLen);const o=r>=e.upLen?0:1-(r-e.curtLen)/(e.upLen-e.curtLen);return e.upFrom+(e.curtFrom-e.upFrom)*o*o}if(t<=i){const r=X(n,n+e.riseLen,t),o=1-(1-e.tailK)*X(n+e.riseLen,i-e.fallLen,t),a=X(i-e.fallLen,i,t);return .6+(this.secPeak-.6)*r*o*(1-a)}return .6-(.6-e.endHol)*X(i,i+e.outLen,t)}hollow(t){return this.cached(0,t)}cached(t,e){const n=(e-bn.T0)/bn.DX;let i=this.tab[t];if(i||(i=this.tab[t]=new Float64Array(Math.ceil((this.p.length+90)/bn.DX)+2).fill(NaN)),!(n>=0)||n>=i.length-1)return this.compute(t,e);const r=n|0;let o=i[r];o!==o&&(o=i[r]=this.compute(t,bn.T0+r*bn.DX));let a=i[r+1];return a!==a&&(a=i[r+1]=this.compute(t,bn.T0+(r+1)*bn.DX)),o+(a-o)*(n-r)}compute(t,e){return t===0?this.hollowImpl(e):t===1?this.powerImpl(e):this.paceImpl(e)}hollowImpl(t){let e=Ne(t/28,this.seedHash)-this.hollowShift;e<0&&(e=0),e>rn.knee&&(e=rn.knee+rn.span*(1-Math.exp(-(e-rn.knee)/rn.span)));const n=this.sectionWeight(t);n>0&&(e=je(e,this.sectionHollow(t),n));const i=this.p.length-Mf-vf;return e*=1-rn.preCloseCut*X(i-rn.preCloseIn,i-rn.preCloseFull,t),Math.max(e,.8*this.closeout(t))}peelSpeed(t){const e=this.power(t),n=Ps.base+Ps.hollowGain*e*e,i=this.cached(2,t);return(i>0&&n<Ps.barrelPace?n+(Ps.barrelPace-n)*i:n)+10*this.closeout(t)}paceImpl(t){const e=this.sectionWeight(t);return e>0?e*X(Mi.paceFrom,Mi.paceFull,this.sectionHollow(t)):0}faceAmp(t,e){return this.p.A0*(.45+.55*Math.exp(-t/35))*(1+.2*e)}whiteAmp(t,e){return this.p.A0*(.4+.6*Math.exp(t/2.5))*(1+.2*e)}amp(t){return this.ampImpl(t,!0)}swellAmp(t){return this.ampImpl(t,!1)}ampImpl(t,e){const n=t-this.breakS,i=e?this.barrelAmpWeight(t):0,r=i>0&&n>0?je(this.power(t),this.bPow,i):this.power(t);let o;if(!this.peeling)o=this.faceAmp(Math.abs(n),r)*(.3+.7*this.arrival);else{const a=X(-2,1,n),c=je(this.whiteAmp(Math.min(n,0),r),this.faceAmp(Math.max(n,0),r),a);o=this.peelBlend>=1?c:je(this.faceAmp(Math.abs(n),r),c,this.peelBlend)}return i>0&&(o+=i*((n>0?this.bTop:this.faceAmp(0,r)*(1+ti.grow))-o)),t>this.p.length&&(o*=Math.exp(-(t-this.p.length)/10)),o>yf?o:yf}breakTunnel(){this.bS=this.breakS,this.bPB=this.peelBlend;const t=this.hollow(this.breakS),e=this.breakS;this.bX=this.secB>this.secA&&e>=this.secB-5?1-X(this.secB+ln.fall0,this.secB+ln.fall1,e):0,this.bK=Math.max(X(ti.hol0,ti.hol1,t),this.bX)*this.peelBlend;const n=this.breakS;this.bG=this.secB>this.secA?X(this.secA+ln.rise0,this.secA+ln.rise1,n)*(1-X(this.secB+ln.fall0,this.secB+ln.fall1,n))*this.peelBlend:0,this.bPow=this.power(this.breakS),this.bTop=this.faceAmp(0,this.bPow)*(1+ti.grow)}barrelAmpWeight(t){if(!this.peeling||!this.hollowWave)return 0;const e=t-this.breakS;if(e>=0){if(e>=ln.out1)return 0;(this.breakS!==this.bS||this.peelBlend!==this.bPB)&&this.breakTunnel();const o=this.bK,a=this.bG;if(o<=0&&a<=0)return 0;const c=a>0?a*(1-X(ln.out0,ln.out1,e)):0,l=3+(ln.nearLen-3)*a;if(e>=l)return c;const h=X(0,l,e);return o+(c-o)*h}const n=this.hollow(t);(this.breakS!==this.bS||this.peelBlend!==this.bPB)&&this.breakTunnel();const i=Math.max(n>ti.hol0?X(ti.hol0,ti.hol1,n):0,this.bX);if(i<=0)return 0;const r=Math.max(1.5+5*n,ln.backMin);return e<=-r-ti.closeLen?0:i*X(-r-ti.closeLen,-r,e)*this.peelBlend}faceWidth(t,e=this.amp(t)){const n=this.power(t),i=t-this.breakS,r=(a,c)=>{const l=Math.exp(-a/12),h=1.7-.85*n*l,u=1+1.4*(1-Math.exp(-a/45));return h*u*c};let o;if(!this.peeling)o=r(Math.abs(i),1);else{const a=this.barrelAmpWeight(t);if(a>0){const c=i>0?je(n,this.bPow,a):n,l=1+ln.stretch*a,h=(f,d)=>{const p=f/l;return(1.7-.85*c*Math.exp(-p/12))*(1+1.4*(1-Math.exp(-p/45)))*d},u=h(Math.max(i,0),je(je(1.6,1,X(-2,1,i)),1,a));o=this.peelBlend>=1?u:je(h(Math.abs(i),1),u,this.peelBlend)}else{const c=r(Math.max(i,0),je(1.6,1,X(-2,1,i)));o=this.peelBlend>=1?c:je(r(Math.abs(i),1),c,this.peelBlend)}}return Math.max(.6,e*o)}heightAt(t,e){const n=this.amp(t);if(e<0){const o=e/(2.4*n);return n*Math.exp(-o*o)}const i=this.faceWidth(t,n);if(e>=i)return 0;const r=1-e/i;return n*r*r}facePoint(t,e,n){const i=this.amp(t),r=this.faceWidth(t,i),o=e<0?0:e,a=o<1?1-o:0,c=i*a*a,l=2*i*a,h=Math.sqrt(r*r+l*l),u=n??{};return u.u=o*r,u.y=c,u.A=i,u.W=r,u.m=h,u.sinA=l/h,u}lipReach(t){if(!this.peeling)return 0;const e=t-this.breakS;if(e<=-3)return 0;const n=Zt(1+e/3,0,1),i=Math.exp(-Math.max(e,0)/5),r=je(n,i,X(-2,1,e)),o=this.closeout(t),a=o>0?1-ob*X(.1,.5,o):1;return this.amp(t)*.95*this.hollow(t)*r*this.peelBlend*a}barrelReach(t){const e=this.lipReach(t),n=this.barrelShape(t);if(n<=0)return e;const i=ve.cover*this.faceWidth(t)*n;return i>e?i:e}barrelShape(t){if(!this.peeling||!this.hollowWave)return 0;const e=this.hollow(t),n=X(ve.hol0,ve.hol1,e);if(n<=0)return 0;const i=t-this.breakS,r=1.5+5*e;if(i<=-r-ve.closeLen||i>=ve.ahead)return 0;const o=this.closeout(t);if(o>=.45)return 0;const a=X(ve.hol0,ve.hol1,this.hollow(this.breakS)),c=ve.aheadFull*a,l=ve.aheadMin+(ve.ahead-ve.aheadMin)*a;return n*X(-r-ve.closeLen,-r,i)*(1-X(c,l,i))*this.peelBlend*(1-X(.3,.45,o))}lift(t,e){const n=e<0?0:e;let i=1.2*X(1,1.1,n);return n<1&&(i+=this.p.liftMax*Math.pow(1-n,.75)*(this.swellAmp(t)/this.p.A0)),i}get finished(){return this.peeling&&this.breakS>this.p.length+10}};M(bn,"T0",-30),M(bn,"DX",.1);let Fl=bn;const se=14,Ol=12,hb=.55,bf=2*Math.PI/Ol;function Hp(s,t){const e=s-t;return e<=-Ol/2||e>=Ol/2?s:s-hb*Math.sin(bf*e)/bf}const Vp=.7,ha={arch:.75,c1u:.5,c1y:1.3,c1uA:1,c1yA:-.2,throwD0:1.2,throwD1:3.2,c2u:1.3,c2y:.95,tipK:0,land:1.18};function Aa(s,t){return Hp(t,s.breakS)}function wa(s,t,e=s.barrelReach(t),n=s.lipReach(t)){let i=s.hollowWave&&s.peeling?X(ve.hol0,ve.hol1,s.hollow(t))*s.peelBlend:0;return i>0&&(i*=1-X(.1,.5,s.closeout(t))),Math.max(e>1e-6?(e-n)/e:0,s.barrelShape(t),i)}function Gp(s,t,e,n,i,r){const o=s.barrelReach(t),a=s.lipReach(t),c=wa(s,t,o,a),l=.12+(Vp-.12)*c,h=Math.min(o*1.1,e*.85),u=ha,f=u.arch*e,d=s.peeling?X(u.throwD0,u.throwD1,t-s.breakS):0,p=u.c1u+(u.c1uA-u.c1u)*d,_=u.c1y+(u.c1yA-u.c1y)*d;for(let g=0;g<se;g++){const m=g/(se-1);let b,v;if(o<=.02)b=-.02,v=e-.01;else{const x=m*Math.PI*.8;if(b=o*Math.sin(x),v=e-h+h*Math.cos(x)+o*l*Math.sin(x),c>0){const w=1-m,P=w*w*w,I=3*w*w*m,T=3*w*m*m,y=m*m*m,L=(I*p+T*u.c2u+y*u.land)*o,k=P*e+I*(e+_*f)+T*(e+u.c2y*f)+y*u.tipK*e;b+=(L-b)*c,v+=(k-v)*c}let D=0;if(b<0){const w=b/(2.4*e);D=e*Math.exp(-w*w)}else if(b<n){const w=1-b/n;D=e*w*w}v<D+.04&&(v=D+.04)}i[g]=b,r[g]=v}return o>.02}const Qo={c1u:.6,c1y:.12,c1uA:.8,c1yA:-.25,c2u:1.3,c2y:.85,land:1.18,kA:1.1,cap:.035,capK:.06},Or={c2uH:1,grow:.22,dome1:.25,dome2:.25,capUp:.15,fadeD0:-1.9,fadeD1:1.2};function Wp(s,t){if(!(s.hollowWave&&s.peeling))return 0;let e=X(ve.hol0,ve.hol1,s.hollow(t))*s.peelBlend;return e>0&&(e*=(1-X(.1,.5,s.closeout(t)))*s.barrelShape(t)*X(Or.fadeD1,Or.fadeD0,t-s.breakS)),e}const si={reachR:12,shape0:1.2,shape1:2.4,q1u:.55,q2y:.45,capR:1.48,capK:2.5,capL:.45};function Xp(s,t,e,n){if(!(s.hollowWave&&s.peeling))return n;const i=t-s.breakS,r=X(ve.hol0,ve.hol1,s.hollow(s.breakS)),o=ve.aheadFull*r;if(r<=0||i<=o||i>=o+si.reachR)return n;const a=X(ve.hol0,ve.hol1,s.hollow(t));if(a<=0)return n;const c=s.closeout(t);if(c>=.45)return n;let l=ve.cover*e*a*r*(1-X(o,o+si.reachR,i))*s.peelBlend*(1-X(.3,.45,c));const h=si.capR+si.capK*Math.max(0,s.lipReach(t)-si.capL);return l>h&&(l=h),l>n?l:n}function qp(s,t,e){const n=Math.min(Qo.land*Xp(s,t,s.faceWidth(t,e),s.barrelReach(t)),Qo.kA*e),i=Wp(s,t);return i>0?n+(Qo.kA*e*(1+Or.grow)-n)*i:n}function bh(s,t,e,n,i,r){const o=Xp(s,t,n,s.barrelReach(t)),a=s.lipReach(t),c=wa(s,t,o,a),l=.12+(Vp-.12)*c,h=Math.min(o*1.1,e*.85),u=Qo,f=s.peeling?X(ha.throwD0,ha.throwD1,t-s.breakS):0;let d=u.c1u+(u.c1uA-u.c1u)*f,p=u.c1y+(u.c1yA-u.c1y)*f,_=u.c2y;const g=s.hollowWave?Or.c2uH:u.c2u;let m=Math.min(u.land*o,u.kA*e),b=Math.min(1,m/Math.max(.001,e)),v=e*(1+u.cap);const x=c>0?Wp(s,t):0;if(x>0){const w=Or;m+=(u.kA*e*(1+w.grow)-m)*x,b=Math.min(1,m/Math.max(.001,e)),p+=w.dome1*x,_+=w.dome2*x,v=e*(1+u.cap+w.capUp*x)}if(s.hollowWave&&f>0){const w=f*(1-X(si.shape0,si.shape1,m));w>0&&(d+=(si.q1u-d)*w,p-=p*w,_+=(1-si.q2y-_)*w)}const D=e*u.capK;for(let w=0;w<se;w++){const P=w/(se-1);let I,T;if(o<=.02)I=-.02,T=e-.01;else{const y=P*Math.PI*.8;if(I=o*Math.sin(y),T=e-h+h*Math.cos(y)+o*l*Math.sin(y),c>0){const k=1-P,U=3*k*k*P,V=3*k*P*P,q=P*P*P,j=(U*d+V*g+q)*m,Z=e+e*(U*p+V*(_-1)*b-q*b);I+=(j-I)*c,T+=(Z-T)*c}T>v-D&&(T=v-D+D*Math.tanh((T-(v-D))/D));let L=0;if(I<0){const k=I/(2.4*e);L=e*Math.exp(-k*k)}else if(I<n){const k=1-I/n;L=e*k*k}T<L+.04&&(T=L+.04)}i[w]=I,r[w]=T}return o>.02}function Kp(s,t,e){let n=1/0;for(let i=0;i+1<se;i++){const r=s[i],o=s[i+1];if((r-e)*(o-e)<=0&&r!==o){const a=(e-r)/(o-r),c=t[i]+a*(t[i+1]-t[i]);c<n&&(n=c)}}return Number.isFinite(n)?n:NaN}const Sf=new Float32Array(se),Tf=new Float32Array(se);function Bl(s,t,e){const n=Aa(s,t),i=Math.max(s.amp(n),.001),r=s.faceWidth(n,i);return Gp(s,n,i,r,Sf,Tf)?Kp(Sf,Tf,e)-s.heightAt(t,e):NaN}const Ar=new Float32Array(se),wr=new Float32Array(se);function Ef(s,t,e){const n=Aa(s,t),i=Math.max(s.amp(n),.001),r=s.faceWidth(n,i);return bh(s,n,i,r,Ar,wr)?Kp(Ar,wr,e)-s.heightAt(t,e):NaN}const Af=[.1,.35,.6,.85,1.1],ub=10.4;function fb(s,t,e,n,i,r,o,a){const c=e-s,l=n-t,h=o-i,u=a-r,f=c*u-l*h;if(Math.abs(f)<1e-9)return!1;const d=i-s,p=r-t,_=(d*u-p*h)/f,g=(d*l-p*c)/f;return _>=0&&_<=1&&g>=0&&g<=1}function db(s,t,e){const n=Aa(s,t),i=Math.max(s.amp(n),.001),r=s.faceWidth(n,i);if(!bh(s,n,i,r,Ar,wr))return 0;const o=s.heightAt(t,e),a=e+ub,c=1+.4*i;let l=0;for(const h of Af)for(let u=0;u+1<se;u++)if(fb(e,o+h,a,c,Ar[u],wr[u],Ar[u+1],wr[u+1])){l++;break}return l/Af.length}const pc=1,wf=.25,mc=16;function Rf(s,t,e){return Bl(s,t,Math.max(0,e)*s.faceWidth(t))}function pb(s,t,e,n={dist:0,size:0}){let i=0;for(;i<=mc&&Rf(s,t+i,e)>=pc;)i+=wf;if(i>0&&i<=mc){let a=i-wf,c=i;for(let l=0;l<4;l++){const h=.5*(a+c);Rf(s,t+h,e)>=pc?a=h:c=h}i=.5*(a+c)}const r=Math.min(i,mc),o=Math.max(pc,s.amp(t+r));return n.dist=r,n.size=2*Math.atan(o/2/(r+1)),n}const kl=9.81,gc=16,mb=3,Ss=.02,gb=1.2,_b=.6,Ao=-1.5,_c=1.25,xb="load",zl={dragLin:.05,dragQuad:.0375,dragHi:3.5,vHi:11.5,liftScale:3.2,liftShoulder:.15,liftPocketL:4,liftHollow:.3,lipZeroT:.03,lipTaperT:.15,dropCut:1,dropSin0:.45,dropSin1:.7,dropT0:.3,dropT1:.5,dropV0:6,dropV1:8,liftAlongM:1,handsOffTrim:.25,handsOffK:2,handsOffT:.3,handsOffMin:-.2,handsOffMax:.7,beta:1,wMin:.6,wMax:1.4,lRef:.5,loadMaxTurn:2*Math.PI,loadMinSwing:.3,loadMaxSkid:.6,rollTau:.12,boardRate:16,carveR:1.2,carveLat:40,skidK:3.2,skidFree:.1,skidWipeLip:1.95,skidWipeMid:1.7,skidWipeLow:1.3,skidWipeSlow:1,slowV1:4.5,slowV2:6.5,skidLipMidT0:.15,skidLipMidT1:.35,skidMidLowT0:.64,skidMidLowT1:.86,skidSlowT0:.15,skidSlowT1:.5,skidSlide:.4,slideHbRate0:6,slideHbRate1:10,slideHvRate0:3,slideHvRate1:6,slideV0:4,slideV1:5.5,slideT0:.5,slideT1:.8,slideJerk0:55,slideJerk1:62,slideJerkTau:.02,skidSlideMax:2.2,slideVDecay:2,lipUpSin:.3,lipUpTime:.6,lipCapTime:1.5,lipMinV:2.5,lipClimbG:0,foamK:.035,hollowLip:.6,lipLandMaxT:1,fellBehindD:-25,foamD:-3,foamMaxTime:7,foamStuckTime:2.5,foamSteerTime:5,foamHardV:6.5,foamHeadOn:38*Math.PI/180,foamReboundRate:.8,trimV:7.6,trimK:3,trimSin0:.22,trimSin1:.32,trimT0:.12,trimT1:.2,trimStall0:.08,trimStall1:.2,trimTurn0:.6,trimTurn1:1.2,carryK:.8,carryD0:.5,carryD1:-1.5,carryTauIn:.25,carryTauOut:.6,carryMaxD:12,carryFadeD:16,carryV0:3.3,carryV1:4.3,carryOutK:2,carryOutD0:2,carryOutD:8,carryOutMaxV:11.5,carryOutSpinTau:4,carryOutSpin0:2,carryOutSpin1:3,carryOutTurn0:4,carryOutTurn1:5,carryOutSin0:.66,carryOutSin1:.8,lipGrace:.25,stuckD:5,carryMinV:3.8,foamPassiveK:.6,headOnMinV:4.4,headOnTime:.3,stuckTime:1.2,stallK:.9,driveDragCut:.15,driveAccel:1.5,boostDv:1.8,boostTime:.45,boostVMax:10,boostVFade:8,boostGap:1,boostD0:-3,boostD1:14,boostTopT:.22,boostSin:.4,boostSinIn:.6,boostReWin:1,boostReMaxT:.5,boostReV:5,boostLowT:.55,boostBotWin:1.2,boostBotMinT:.35,boostBotMaxT:.92,boostBotV:6.5,boostTurn:1.1,boostDrop:.3,boostBotSinIn:.8,boostCutTurn:2.4,boostCutV:6,tubeStayTMin:0,tubeMouthD:.5,tubeStayTMax:1.1,tubeSlowV:3,tubeUpSin:.5,tubeStayHol:.56,tubeShapeIn:.5,tubeReleaseHol:.72,tubeMinMade:1,tubeAheadNeed:8,tubeBackOffF:.85,missAheadD:1.5,missAheadTime:3,curtainLiftCut:.5,nbCut:.6,nbCutD0:4,nbCutD1:9,nbSin0:-.15,nbSin1:-.02,nbSin2:.3,nbSin3:.45,nbT0:.08,nbT1:.14,nbTurn0:3,nbTurn1:5,nbHol0:.52,nbHol1:.58,lipLandGrace:1.05,tubeTK:3,tubeNudge:.15,tubeLineMin:.1,tubeLineMax:.88,tubeRelTau:.25,tubeWorkTau:.05,tubeRiseTau:.8,tubeRelAccel:2.5,tubeNeutral0:.15,tubeCoastK:.2,tubeCoastReset:6,tubeStallRel:4,tubeWorkRel:5,tubeDriveRel:1.2,tubeRelMin:-2.5,tubeDeepF0:.7,tubeDeepF1:.85,tubeDeepSuck:2,tubeVMax:12.5,tubeCosMin:.85,tubeBoardVMax:13,tubeVTau:.1,tubeVAccel:15,spitHol:.8,spitExitHol:.585,spitMinTime:.5,spitMouthD:1,spitRel:.8,tubeHeadroom:1.27,tubeOutShape:.15,tubeEnterHold:.04,tubeRoofMin:1,tubeFreeRoom:.75,tubeFreeK:1,tubeFreePumpCut:0,tubeFreeIn:.75,tubeFreeOut:.75,tubeFreeShapeIn:.15,tubeFreeOutDrawn:.3,tubeFreeAhead:2,tubeFreeVMin:6.5,tubePumpF0:.15,tubePumpF1:.35,tubePumpTau:.06,tubePumpRail0:.35,tubePumpGap:.6,tubePumpSeg:.9,tubePumpSwing:.3,entrySuck:0,pumpDv:2.9,rhythmMax:2.5,pumpClimb:.08},vb={...zl,dragQuad:.011,dragHi:.3,vHi:10,liftScale:.35,nbCut:0,liftShoulder:.5,liftPocketL:6,liftHollow:0,lipTaperT:.15,liftAlongM:0,dropCut:0,carveR:1.6,carveLat:40},Mb=.25,yb=.45,bb=.15,Sb=.3,Tb=.3,wo=Math.PI-.05,Eb=1.5,Ab=.08,wb=.08,ua=1/60;function xc(s,t){return 1-Math.pow(1+ua/t,-s/ua)}const Rb={grip:!1,targetHeading:null,stall:0,drive:0},Cf=50*Math.PI/180;class fa{constructor(t){M(this,"s",0);M(this,"t",.25);M(this,"v",0);M(this,"hb",0);M(this,"hv",0);M(this,"skid",0);M(this,"stall",0);M(this,"drive",0);M(this,"state","idle");M(this,"pumpModel",xb);M(this,"turnRate",0);M(this,"d",0);M(this,"face",{u:0,y:0,A:0,W:0,m:0,sinA:0});M(this,"accel",0);M(this,"pumpAccel",0);M(this,"pumpLeft",0);M(this,"skidDecel",0);M(this,"roll",0);M(this,"railRate",0);M(this,"railRate1",0);M(this,"load",0);M(this,"pumpF",0);M(this,"railSide",0);M(this,"railSideAt",-1e9);M(this,"railFlipAt",-1e9);M(this,"railFlipSeg",1e9);M(this,"railSideHv",0);M(this,"railSegMax",0);M(this,"tubeRel",0);M(this,"tubeLine",.5);M(this,"tubeHRef",0);M(this,"tubeCoast",0);M(this,"zoneFor",0);M(this,"behindLip",!1);M(this,"behindFor",0);M(this,"frontSeen",!1);M(this,"weight",1);M(this,"inTube",!1);M(this,"tubeMode","lock");M(this,"tubeWhy","");M(this,"tubeTime",0);M(this,"spat",!1);M(this,"spitRide",!1);M(this,"tubeHeight",0);M(this,"tubeHolMax",0);M(this,"missArmed",!0);M(this,"aheadFor",0);M(this,"rideTime",0);M(this,"lipUpTime",0);M(this,"lipTime",0);M(this,"carveRate",0);M(this,"foamTime",0);M(this,"foamRun",0);M(this,"spinNet",0);M(this,"headOnFor",0);M(this,"stuckFor",0);M(this,"carry",0);M(this,"notOutFor",1e9);M(this,"turnAccum",0);M(this,"prevSwing",0);M(this,"turnRateF",0);M(this,"boardRateF",0);M(this,"slideAllow",0);M(this,"vTurn",0);M(this,"targetRateF",0);M(this,"jerkMem",0);M(this,"lastTarget",NaN);M(this,"turningDown",!1);M(this,"boostMode","off");M(this,"boostCount",0);M(this,"boostKind","");M(this,"boostAt",-1e9);M(this,"boostLeft",0);M(this,"boostTopAt",-1e9);M(this,"boostLowAt",-1e9);M(this,"boostHiT",0);M(this,"boostCutArmed",!0);M(this,"lastPumpAt",-1e9);M(this,"prevSin",0);M(this,"peakSinUp",0);M(this,"maxTSince",0);M(this,"events",[]);this.wave=t}setWave(t){this.wave=t}get riding(){return this.state==="riding"}static skidLimit(t,e){const n=zl,i=n.skidWipeLip+(n.skidWipeMid-n.skidWipeLip)*X(n.skidLipMidT0,n.skidLipMidT1,t)+(n.skidWipeLow-n.skidWipeMid)*X(n.skidMidLowT0,n.skidMidLowT1,t),r=Zt((t-n.skidSlowT0)/(n.skidSlowT1-n.skidSlowT0),0,1),o=Math.min(i,n.skidWipeLip+(n.skidWipeSlow-n.skidWipeLip)*r);return o+(i-o)*X(n.slowV1,n.slowV2,e)}spawn(t,e,n,i){return!Number.isFinite(t)||!Number.isFinite(e)||!Number.isFinite(n)||!Number.isFinite(i)?!1:(this.s=t,this.t=Zt(e,Ss,_c),this.v=Zt(n,0,gc),this.hb=i,this.hv=i,this.skid=0,this.skidDecel=0,this.accel=0,this.pumpAccel=0,this.pumpLeft=0,this.stall=0,this.drive=0,this.roll=0,this.railRate=0,this.railRate1=0,this.load=0,this.pumpF=0,this.railSide=0,this.railSideAt=-1e9,this.railFlipAt=-1e9,this.railFlipSeg=1e9,this.tubeRel=0,this.tubeCoast=0,this.zoneFor=0,this.behindLip=!1,this.behindFor=0,this.frontSeen=!1,this.weight=1,this.missArmed=!0,this.aheadFor=0,this.state="riding",this.turnRate=0,this.turnRateF=0,this.boardRateF=0,this.slideAllow=0,this.vTurn=n,this.targetRateF=0,this.jerkMem=0,this.lastTarget=NaN,this.turningDown=!1,this.boostCount=0,this.boostKind="",this.boostAt=-1e9,this.boostLeft=0,this.boostTopAt=-1e9,this.boostLowAt=-1e9,this.boostHiT=this.t,this.boostCutArmed=!0,this.turnAccum=0,this.prevSwing=0,this.foamTime=0,this.foamRun=0,this.spinNet=0,this.headOnFor=0,this.stuckFor=0,this.carry=0,this.notOutFor=1e9,this.inTube=!1,this.spitRide=!1,this.tubeTime=0,this.tubeHeight=0,this.rideTime=0,this.lipUpTime=0,this.lipTime=0,this.lastPumpAt=-1e9,this.prevSin=Math.sin(i),this.peakSinUp=Math.max(0,this.prevSin),this.maxTSince=this.t,this.events.length=0,this.d=this.wave.d(t),this.wave.facePoint(this.s,this.t,this.face),!0)}drain(){if(this.events.length===0)return Cb;const t=this.events;return this.events=[],t}tryLaunch(t){return!1}get lean(){return this.roll}step(t,e=Rb){if(this.state!=="riding"||!(t>0)||!Number.isFinite(t))return;const n=this.wave,i=this.pumpModel==="impulse"?vb:zl;this.rideTime+=t;const r=Number.isFinite(e.stall)?Zt(e.stall,0,1):0,o=e.drive!==void 0&&Number.isFinite(e.drive)?Zt(e.drive,0,1):0;this.stall=r,this.drive=o;let a,c;if(e.grip&&e.targetHeading!==null&&Number.isFinite(e.targetHeading))a=e.targetHeading,c=i.boardRate;else{const R=Math.round(this.hb/Math.PI),lt=Zt(i.handsOffTrim+i.handsOffK*(i.handsOffT-this.t),i.handsOffMin,i.handsOffMax);a=R*Math.PI+((R&1)===0?-lt:lt),c=mb}const l=e.grip&&e.targetHeading!==null&&Number.isFinite(e.targetHeading)?e.targetHeading:NaN,h=Number.isFinite(l)&&Number.isFinite(this.lastTarget)?Math.abs(l-this.lastTarget)/t:0;this.lastTarget=l,this.targetRateF+=(h-this.targetRateF)*(1-Math.exp(-t/i.slideJerkTau));let u=a-this.hb;u>wo?u=wo:u<-wo&&(u=-wo);const f=c*t,d=u>f?f:u<-f?-f:u;this.hb+=d;const p=i.carveR*(1+.5*r),_=vr(this.hb-this.hv),g=Math.max(this.v,1.5),m=Math.min(g/p,i.carveLat/g)*(1+Eb*Math.abs(Math.sin(_)));this.carveRate=m;const b=m*t,v=_>b?b:_<-b?-b:_;this.hv+=v,this.turnRate=v/t,this.skid=vr(this.hb-this.hv);const x=1-Math.exp(-t/wb);this.turnRateF+=(this.turnRate-this.turnRateF)*x,this.boardRateF+=(d/t-this.boardRateF)*x;const D=1-Math.exp(-t/i.rollTau);this.railRate1+=(this.turnRate-this.railRate1)*D,this.railRate+=(this.railRate1-this.railRate)*D,this.roll=Pb(this.v,this.railRate),this.turnAccum*this.railRate<0&&(this.prevSwing=Math.abs(this.turnAccum),this.turnAccum=0),this.turnAccum+=v;const w=n.facePoint(this.s,this.t,this.face),P=this.d,I=n.d(this.s);this.d=I;const T=Math.sin(this.hv),y=Math.cos(this.hv),L=this.v,k=Math.abs(Math.sin(this.skid))-i.skidFree;this.skidDecel=k>0?i.skidK*k*k*L:0;const U=this.t<=Ss&&T>0?i.lipClimbG*T:T;let V=1;if(this.pumpModel==="load"){const R=this.v*this.railRate/kl;let lt=Math.min(1,(Math.sqrt(1+R*R)-1)/i.lRef);Math.abs(this.turnAccum)>i.loadMaxTurn||this.prevSwing<i.loadMinSwing?lt=0:lt*=1-X(.5*i.loadMaxSkid,i.loadMaxSkid,Math.abs(this.skid)),this.load=lt;const et=U<0?1:U>0?-1:0;V=Zt(1+i.beta*et*lt,i.wMin,i.wMax)}else this.load=0;this.weight=V;const q=this.railRate1>i.tubePumpRail0?1:this.railRate1<-i.tubePumpRail0?-1:0,j=Math.abs(this.hv-this.railSideHv);if(j>this.railSegMax&&(this.railSegMax=j),q!==0&&q!==this.railSide){if(this.railSide!==0){const R=this.railSegMax>=i.tubePumpSwing;this.railFlipSeg=R?this.rideTime-this.railSideAt:1e9,this.railFlipAt=this.rideTime}this.railSide=q,this.railSideAt=this.rideTime,this.railSideHv=this.hv,this.railSegMax=0}const Z=this.rideTime-this.railFlipAt<i.tubePumpGap&&this.railFlipSeg<i.tubePumpSeg?1:0;this.pumpF+=(Z-this.pumpF)*xc(t,i.tubePumpTau);const z=(i.dragLin*L+i.dragQuad*L*L+(L>i.vHi?i.dragHi*(L-i.vHi)*(L-i.vHi):0))*(1-i.driveDragCut*o),st=this.inTube;let ot=-kl*w.sinA*U*V-z-this.skidDecel-i.stallK*r*L+i.driveAccel*o;if(st||(ot-=i.foamK*L*X(0,-3,I)),!st&&I<0&&y>0&&!(e.grip&&r<.5&&L>=i.carryMinV)&&(ot-=i.foamPassiveK*L*X(0,-1,I)*(1-X(i.trimTurn0,i.trimTurn1,Math.abs(this.turnRateF)))),e.grip&&y>0&&L<i.trimV&&i.trimK>0&&this.t<i.trimT1&&T<.1&&-T<i.trimSin1&&I>-1&&r<1&&Math.abs(this.turnRateF)<i.trimTurn1){const R=X(-.1,.05,-T)*(1-X(i.trimSin0,i.trimSin1,-T))*X(-1,.5,I)*(1-X(i.trimT0,i.trimT1,this.t))*(1-X(i.trimTurn0,i.trimTurn1,Math.abs(this.turnRateF)))*(1-r)*(1-X(i.trimStall0,i.trimStall1,r));ot+=i.trimK*(i.trimV-L)*R}let _t=0;if(st){const R=X(i.tubePumpF0,i.tubePumpF1,this.pumpF),lt=e.grip?Math.max(o,R):0,et=R>=o?i.tubeWorkRel:i.tubeDriveRel,ut=Math.max(0,this.tubeCoast+t*(1-R)*(1-X(.1,.3,r))-i.tubeCoastReset*(e.grip?R:0)*t);this.tubeCoast=ut;const ct=-i.tubeNeutral0-i.tubeCoastK*ut*ut,Ct=X(i.tubeDeepF0,i.tubeDeepF1,-I/(1.5+5*n.hollow(this.s))),mt=e.grip?Math.max(i.tubeRelMin,(1-lt)*(ct-i.tubeStallRel*r*(2-r))+lt*et*(1-Ct)-i.tubeDeepSuck*Ct):i.tubeRelMin,E=i.tubeRelTau+(i.tubeWorkTau-i.tubeRelTau)*lt;if(mt>this.tubeRel){const S=ua/Math.log(1+ua/i.tubeRiseTau),B=mt-this.tubeRel,H=i.tubeRelAccel*S,J=B>H?(B-H)/i.tubeRelAccel:0;this.tubeRel+=t<=J?i.tubeRelAccel*t:B-Math.min(B,H)*Math.exp(-(t-J)/S)}else this.tubeRel+=(mt-this.tubeRel)*xc(t,E);_t=Zt(n.peelSpeed(n.breakS)+this.tubeRel,0,i.tubeVMax),ot=Zt((Math.min(i.tubeBoardVMax,_t/Math.max(i.tubeCosMin,y))-L)*xc(t,i.tubeVTau)/t,-i.tubeVAccel,i.tubeVAccel)}this.boostMode==="on"&&(ot+=this.boost(t,e,T,y,I,L,st,i)),this.accel=ot;let Rt=L+ot*t;if(Rt>0||(Rt=0),this.pumpAccel=0,this.pumpModel==="impulse"&&(Rt=this.impulsePump(Rt,T,y,t,i)),this.v=Rt>gc?gc:Rt,this.spinNet+=this.boardRateF*t-this.spinNet*t/i.carryOutSpinTau,I<i.carryD0||this.carry!==0){let R=0;if(I<i.carryD0&&e.grip&&!this.inTube&&y>0){const et=Ps.base*y*(1-n.closeout(this.s))*X(i.carryD0,i.carryD1,I)*X(-i.carryFadeD,-i.carryMaxD,I)*X(i.carryV0,i.carryV1,L)*(1-r),ut=i.carryK*et*(1-X(i.trimTurn0,i.trimTurn1,Math.abs(this.turnRateF))),ct=i.carryOutK*et*X(-i.carryOutD0,-i.carryOutD,I)*(1-X(i.carryOutSin0,i.carryOutSin1,-T))*(1-X(i.carryOutTurn0,i.carryOutTurn1,Math.abs(this.turnRateF)))*(1-X(i.carryOutSpin0,i.carryOutSpin1,Math.abs(this.spinNet)));R=ut+Math.min(ct,Math.max(0,i.carryOutMaxV-L*y-ut))}const lt=R>this.carry?i.carryTauIn:i.carryTauOut;this.carry+=(R-this.carry)*t/(lt+t),this.carry<.001&&R===0&&(this.carry=0)}this.s+=(st?_t:L*y+this.carry)*t;let kt;if(st&&this.tubeMode==="free"){const R=X(i.tubePumpF0,i.tubePumpF1,this.pumpF);kt=this.t+-i.tubeFreeK*(1-i.tubeFreePumpCut*R)*Math.max(this.v,i.tubeFreeVMin)*T/w.m*t}else if(st)this.tubeLine=Zt(this.tubeLine-i.tubeNudge*(T-Math.sin(this.tubeHRef))*t,i.tubeLineMin,i.tubeLineMax),kt=this.t+(this.tubeLine-this.t)*(1-Math.exp(-i.tubeTK*t));else{const R=I>0?I:0,lt=I>0?i.nbCut*(1-X(i.nbCutD0,i.nbCutD1,I))*X(i.nbSin0,i.nbSin1,T)*(1-X(i.nbSin2,i.nbSin3,T))*X(i.nbT0,i.nbT1,this.t)*(1-X(i.nbTurn0,i.nbTurn1,Math.abs(this.turnRateF)))*(1-X(i.nbHol0,i.nbHol1,n.hollow(this.s))):0,et=(i.liftShoulder+(1-i.liftShoulder)*(1-lt)*Math.exp(-R/i.liftPocketL))*(1+i.liftHollow*n.power(this.s)),ut=1.2*X(1,1.1,this.t),ct=1-i.dropCut*X(i.dropSin0,i.dropSin1,-T)*(1-X(i.dropT0,i.dropT1,this.t))*(1-X(i.dropV0,i.dropV1,L)),Ct=(1-i.curtainLiftCut*X(.5,.9,n.barrelShape(this.s)))*i.liftScale*et*(n.lift(this.s,this.t)-ut)*ct*X(i.lipZeroT,i.lipTaperT,this.t)+ut,mt=-L*T/w.m-Ct/(i.liftAlongM?w.m:w.W);kt=this.t+mt*t}kt>_c&&(kt=_c);const K=Math.sin(this.hb)<T-Ab||y*this.turnRateF<-.5;if(this.turningDown=K,kt<=Ss?(kt=Ss,this.lipTime+=t,T>i.lipUpSin?K||(this.lipUpTime+=t):this.lipUpTime=0):(this.lipTime=0,this.lipUpTime=0),this.t=kt,n.facePoint(this.s,this.t,this.face),this.d=n.d(this.s),this.t<=Ss){if(this.inTube&&this.tubeMode==="free")return this.inTube=!1,this.tubeWhy="edge",this.events.push({type:"tubeExit",duration:this.tubeTime,made:!1}),this.wipe("the lip took you");if(this.v<i.lipMinV&&!K)return this.kickout("too slow at the lip");if(this.lipUpTime>i.lipUpTime)return this.kickout("over the back");if(this.lipTime>i.lipCapTime&&!K)return this.kickout("over the back")}const Q=n.hollow(this.s),St=1.5+5*Q,it=this.d;if(!this.inTube){const R=n.barrelShape(this.s);it>=Ao&&(this.frontSeen=!0),it<Ao&&R>=i.tubeShapeIn?this.behindLip=!0:this.behindLip&&(R<.05||it>0&&R<i.tubeShapeIn)&&(this.behindLip=!1)}const Pt=!this.inTube&&!this.behindLip&&e.grip&&this.v>=i.tubeSlowV&&T<=i.tubeUpSin&&this.t>Ss&&this.t<.9&&it>-St&&n.closeout(this.s)<.5&&n.barrelShape(this.s)>=(this.tubeMode==="free"?i.tubeFreeShapeIn:i.tubeShapeIn)&&n.hollow(this.s+i.tubeAheadNeed)>=i.hollowLip&&Bl(n,this.s,this.face.u)>=(this.tubeMode==="free"?i.tubeFreeIn:i.tubeHeadroom);if(this.zoneFor=Pt?this.zoneFor+t:0,!this.inTube)Pt&&this.zoneFor>=i.tubeEnterHold-1e-9?(this.inTube=!0,this.foamRun=0,this.tubeTime=0,this.spat=!1,this.tubeHolMax=Q,this.missArmed=!1,this.tubeRel=this.v*Math.cos(this.hv)+this.carry-n.peelSpeed(n.breakS),this.carry=0,this.tubeLine=Zt(this.t,i.tubeLineMin,i.tubeLineMax),this.tubeHRef=this.hb,this.tubeCoast=0,this.pumpF=0,this.railSide=0,this.railFlipAt=-1e9,this.events.push({type:"tubeEnter"})):n.hollow(n.breakS)<.5?(this.missArmed=!0,this.aheadFor=0):this.missArmed&&it>i.missAheadD&&n.barrelShape(n.breakS)>=i.tubeShapeIn&&(this.aheadFor=r>.1?0:this.aheadFor+t,this.aheadFor>i.missAheadTime&&(this.missArmed=!1,this.events.push({type:"tubeMiss",reason:"ran ahead"})));else{if(this.tubeTime+=t,Q>this.tubeHolMax&&(this.tubeHolMax=Q),it<=-St)return this.inTube=!1,this.tubeWhy="closed",this.events.push({type:"tubeExit",duration:this.tubeTime,made:!1}),this.wipe("barrel closed");!this.spat&&!this.spitRide&&it>-i.spitMouthD&&this.tubeHolMax>=i.spitHol&&Q>=i.spitExitHol&&n.sectionEnding(n.breakS)*(1-X(i.hollowLip,i.tubeReleaseHol,n.hollow(n.breakS)))>=.5&&this.tubeTime>=Math.max(i.spitMinTime,i.tubeMinMade)&&this.tubeRel>i.spitRel&&(this.spat=!0,this.spitRide=!0,this.events.push({type:"spit"}));const R=Bl(n,this.s,this.face.u),lt=this.tubeMode==="free",et=lt?Ef(n,this.s,this.face.u):R,ut=!(et>=(lt?i.tubeFreeOut:i.tubeRoofMin)),ct=it>=i.tubeMouthD&&n.barrelShape(this.s)<=i.tubeOutShape;if(lt&&ut&&!ct&&Ef(n,this.s,Math.max(0,this.tubeLine)*n.faceWidth(this.s))>=i.tubeFreeRoom)return this.inTube=!1,this.tubeWhy="edge",this.events.push({type:"tubeExit",duration:this.tubeTime,made:!1}),this.wipe(this.t<this.tubeLine?"the lip took you":"fell out of the tube");let Ct=lt&&!(et>=i.tubeFreeOutDrawn);for(let E=0;Ct&&E<=4;E++)db(n,this.s+E*i.tubeFreeAhead/4,this.face.u)>0&&(Ct=!1);const mt=ct&&(!lt||ut&&Ct);if(mt||ut&&it>=ve.aheadFull&&(!lt||Ct))this.inTube=!1,this.tubeWhy=mt?"mouth":"roof",this.events.push({type:"tubeExit",duration:this.tubeTime,made:this.tubeTime>=i.tubeMinMade}),!this.spat&&!this.spitRide&&(mt||!ut)&&this.tubeHolMax>=i.spitHol&&Q>=i.spitExitHol&&this.tubeTime>=Math.max(i.spitMinTime,i.tubeMinMade)&&(this.spat=!0,this.spitRide=!0,this.events.push({type:"spit"}));else if(Q<i.tubeStayHol&&(!lt||ut&&Ct)){this.inTube=!1,this.tubeWhy="backoff";const E=-it/St<i.tubeBackOffF;return this.events.push({type:"tubeExit",duration:this.tubeTime,made:E&&this.tubeTime>=i.tubeMinMade}),E&&!this.spat&&!this.spitRide&&this.tubeHolMax>=i.spitHol&&this.tubeTime>=Math.max(i.spitMinTime,i.tubeMinMade)&&(this.spat=!0,this.spitRide=!0,this.events.push({type:"spit"})),this.spat||E?void 0:this.wipe("barrel closed")}else if(!(this.t>i.tubeStayTMin&&this.t<i.tubeStayTMax)&&(this.inTube=!1,this.tubeWhy=lt?"edge":"band",this.events.push({type:"tubeExit",duration:this.tubeTime,made:!1}),lt))return this.wipe(this.t<=i.tubeStayTMin?"the lip took you":"fell out of the tube")}this.tubeHeight=this.inTube?n.amp(this.s):0;const Bt=Math.abs(this.skid);this.vTurn=Math.max(this.v,this.vTurn-i.slideVDecay*t);const Lt=this.boardRateF,Wt=this.turnRateF;this.jerkMem=Math.abs(Lt)>=i.slideHbRate0?Math.max(this.jerkMem,this.targetRateF):this.targetRateF;const tt=fa.skidLimit(this.t,this.v),ht=Lt*Wt>0?X(i.slideHbRate0,i.slideHbRate1,Math.abs(Lt))*X(i.slideHvRate0,i.slideHvRate1,Math.abs(Wt))*X(i.slideV0,i.slideV1,this.vTurn)*(1-X(i.slideT0,i.slideT1,this.t))*(1-X(i.slideJerk0,i.slideJerk1,this.jerkMem)):0;if(this.slideAllow=Math.min(ht*(fa.skidLimit(this.t,Math.max(this.vTurn,i.slowV2))-tt+i.skidSlide),Math.max(0,i.skidSlideMax-tt)),Bt>tt+this.slideAllow)return this.wipe("caught a rail");if(this.v<gb&&Bt>_b)return this.wipe("bogged down");if(!this.inTube){if(P>=0&&it<0){const Ct=Math.abs(vr(this.hb-Math.PI)),mt=Math.abs(this.turnRateF)>i.foamReboundRate;if(this.v>=i.foamHardV&&Ct<=i.foamHeadOn&&!mt)return this.wipe("too hard into the foam")}const R=Math.abs(this.turnRateF)>i.foamReboundRate,lt=e.grip&&r<.5&&this.v>=i.carryMinV&&Math.cos(this.hb)>0;this.notOutFor=lt?0:this.notOutFor+t;const et=this.notOutFor<i.lipGrace;if(it<0){const Ct=Math.abs(vr(this.hb-Math.PI));if(this.headOnFor=Ct<=i.foamHeadOn&&!R&&this.v>=i.headOnMinV?this.headOnFor+t:0,this.stuckFor=this.v<i.carryMinV||it<-i.stuckD&&!lt?this.stuckFor+t:0,this.headOnFor>i.headOnTime)return this.wipe("too hard into the foam");if(this.stuckFor>i.stuckTime)return this.wipe(this.v<i.carryMinV?"fell behind the wave":"stuck in the whitewater")}else this.headOnFor=0,this.stuckFor=0;if(this.foamRun=it<0?this.foamRun+t:0,this.foamRun>(lt?i.foamSteerTime:i.foamStuckTime))return this.wipe("stuck in the whitewater");const ut=n.barrelShape(this.s);if(this.behindFor=this.behindLip&&ut>=i.tubeShapeIn?this.behindFor+t:0,(this.frontSeen&&it<Ao&&ut>=i.tubeShapeIn||this.behindFor>i.lipLandGrace)&&this.t<i.lipLandMaxT)return this.missArmed&&(this.missArmed=!1,this.events.push({type:"tubeMiss",reason:"lip landed"})),this.wipe("the lip landed on you");if(Q>=i.hollowLip&&this.t<i.lipLandMaxT)return it<Ao&&!(et&&it>=-i.carryMaxD)?(this.missArmed&&(this.missArmed=!1,this.events.push({type:"tubeMiss",reason:"lip landed"})),this.wipe("the lip landed on you")):void 0;if(this.foamTime=it<i.foamD?this.foamTime+t:0,it<i.fellBehindD||this.foamTime>i.foamMaxTime)return this.wipe("fell behind the wave")}}boost(t,e,n,i,r,o,a,c){const l=this.rideTime;if(this.t<=c.boostTopT&&n>=c.boostSinIn&&(this.boostTopAt=l),n>.1?this.boostHiT=this.t:this.t<this.boostHiT&&(this.boostHiT=this.t),this.t>=c.boostLowT&&this.t<=c.boostBotMaxT&&n<=-c.boostBotSinIn&&this.t-this.boostHiT>=c.boostDrop&&(this.boostLowAt=l),Math.abs(this.turnAccum)<.5*c.boostCutTurn&&(this.boostCutArmed=!0),a)return this.boostLeft=0,this.boostTopAt=this.boostLowAt=-1e9,0;const h=e.grip&&r>=c.boostD0&&r<=c.boostD1&&l-this.boostAt>=c.boostGap;let u="";if(h&&(n<=-c.boostSin&&l-this.boostTopAt<=c.boostReWin&&this.t<=c.boostReMaxT&&o>=c.boostReV&&Math.abs(this.turnAccum)>=c.boostTurn?u="reentry":n>=c.boostSin&&l-this.boostLowAt<=c.boostBotWin&&this.t>=c.boostBotMinT&&this.t<=c.boostBotMaxT&&o>=c.boostBotV&&Math.abs(this.turnAccum)>=c.boostTurn?u="bottom":this.boostCutArmed&&Math.abs(this.turnAccum)>=c.boostCutTurn&&i<0&&this.vTurn>=c.boostCutV&&(u="cutback")),u!==""&&(this.boostCount++,this.boostKind=u,this.boostAt=l,this.boostLeft=c.boostDv,this.boostTopAt=this.boostLowAt=-1e9,this.boostCutArmed=!1),this.boostLeft<=0)return 0;const f=Math.min(this.boostLeft,c.boostDv/c.boostTime*t);return this.boostLeft=Math.max(0,this.boostLeft-f),f/t*(1-X(c.boostVFade,c.boostVMax,o))}impulsePump(t,e,n,i,r){e>this.peakSinUp&&(this.peakSinUp=e),this.t>this.maxTSince&&(this.maxTSince=this.t);const o=this.rideTime-this.lastPumpAt;if(this.prevSin>0&&e<=0&&n*this.turnRate<-.3&&this.t<yb&&this.peakSinUp>=bb&&o>=Sb&&this.maxTSince-this.t>=r.pumpClimb){const a=Zt((.6-this.t)/.45,.2,1),c=o<=r.rhythmMax||this.lastPumpAt<-1e8?1:.5,l=r.pumpDv*a*c*Math.min(1,this.peakSinUp/Tb);this.pumpLeft+=l,this.lastPumpAt=this.rideTime,this.peakSinUp=0,this.maxTSince=this.t,this.events.push({type:"pump",dv:l,t:this.t})}if(this.prevSin=e,this.pumpLeft>0){const a=Math.min(this.pumpLeft,r.pumpDv/Mb*i);this.pumpLeft-=a,t+=a,this.pumpAccel=a/i}return t}wipe(t){this.state="wiped",this.events.push({type:"wipe",reason:t})}kickout(t){this.state="kickedOut",this.events.push({type:"kickout",reason:t})}}const Cb=[];function Pb(s,t){const e=Math.atan(s*t/kl);return Number.isFinite(e)?Zt(e,-Cf,Cf):0}const Ro=32,yi=0,Dn=3,Co=6,Ts=7,On=10,Pf=19,Po=22,Lo=25,Lb=28,fr=29,Io=30,vc=31,Lf=[On,On+3,On+6,On+9],Sn=Math.PI/180,ta=[.15,.086,0],ea=[-.65,.086,0],If=(ta[0]+ea[0])/2+.02,Ib=.4,Db=.45,Df=7,Nb=12,Ub=.9,Fb=20,Ob=15,Bb=6.5,kb=10,zb=6,Nf=37,Uf=52,Hb=.7,Ff=1.2,Of=[.22,.33],Vb=.21,Gb=[.3,.3,.25,.15],Wb=[.15,.3,.3,.25],Bf=[0,.3,.35,.35],Hl=s=>.8175-.25*Zt(s,0,1),Ji=new C(0,1,0),kf=new pe,bi=new pe,zf=new C;function Vl(s,t,e,n,i,r,o){return kf.setFromUnitVectors(Ji,i),o.identity().slerp(kf,Gb[s]),bi.setFromAxisAngle(i,r*Wb[s]),o.premultiply(bi),s===0?(bi.setFromAxisAngle(Ji,t),o.premultiply(bi)):(bi.setFromAxisAngle(Ji,e*Bf[s]),o.premultiply(bi),zf.set(Math.cos(t),0,-Math.sin(t)),bi.setFromAxisAngle(zf,n*Bf[s]),o.premultiply(bi))}const Hf=new pe;function Xb(s,t,e,n,i,r){return Vl(0,s,t-s,e,n,i,Hf),Vl(3,s,t-s,e,n,i,r),r.multiply(Hf)}class Bn{constructor(){M(this,"hipY",0);M(this,"shift",0);M(this,"pel",0);M(this,"chy",0);M(this,"curl",0);M(this,"chest",new Float64Array(3));M(this,"look",new Float64Array(3));M(this,"knF",new Float64Array(3));M(this,"knB",new Float64Array(3));M(this,"armC",new Float64Array(12));M(this,"armM",new Float64Array(12));M(this,"wM",0)}}function Ls(s,t){s.hipY=t.hipY,s.shift=t.shift,s.pel=t.pel,s.chy=t.chy,s.curl=t.curl,s.wM=t.wM,s.chest.set(t.chest),s.look.set(t.look),s.knF.set(t.knF),s.knB.set(t.knB),s.armC.set(t.armC),s.armM.set(t.armM)}function Do(s,t,e){for(let n=0;n<s.length;n++)s[n]+=(t[n]-s[n])*e}function Mn(s,t,e,n=e){if(e>0&&(s.hipY+=(t.hipY-s.hipY)*e,s.shift+=(t.shift-s.shift)*e,s.pel+=(t.pel-s.pel)*e,s.chy+=(t.chy-s.chy)*e,s.curl+=(t.curl-s.curl)*e,Do(s.chest,t.chest,e),Do(s.look,t.look,e),Do(s.knF,t.knF,e),Do(s.knB,t.knB,e)),n>0){const i=(1-s.wM)*(1-n),r=(1-t.wM)*n,o=s.wM*(1-n),a=t.wM*n,c=i+r,l=o+a;for(let h=0;h<12;h++)s.armC[h]=c>1e-9?(s.armC[h]*i+t.armC[h]*r)/c:t.armC[h],s.armM[h]=l>1e-9?(s.armM[h]*o+t.armM[h]*a)/l:t.armM[h];s.wM=l}}function le(s,t,e,n=!0){const i=n&&Math.hypot(e[0],e[1],e[2])||1;s[t]=e[0]/i,s[t+1]=e[1]/i,s[t+2]=e[2]/i}function rs(s){const t=new Bn,e=s.drop??0;t.hipY=Hl(s.crouch)-e,t.shift=s.shift??0,t.pel=s.pelvis*Sn,t.chy=s.chest*Sn,t.curl=(s.curl??0)*Sn;const n=s.lean*Sn,i=new C(.5*Math.sin((s.side??0)*Sn),Math.cos(n),Math.sin(n)).normalize();le(t.chest,0,[i.x,i.y,i.z]);const r=new pe().setFromUnitVectors(Ji,i),o=i.clone().applyAxisAngle(Ji,t.pel),a=new pe().setFromAxisAngle(o,t.chy-t.pel),c=new pe().setFromAxisAngle(Ji,t.pel).premultiply(a).multiply(r),l=s.head*Sn,h=(s.pitch??0)*Sn,u=new C(Math.sin(l)*Math.cos(h),Math.sin(h)-.15,Math.cos(l)*Math.cos(h)).normalize().applyQuaternion(c);u.y+=Math.sin(n)*.8,u.normalize(),le(t.look,0,[u.x,u.y,u.z]);const f=s.beach?t.armM:t.armC;le(f,0,s.uaF),le(f,3,s.faF),le(f,6,s.uaB),le(f,9,s.faB),t.wM=s.beach?1:0;const d=Math.min(1,s.crouch+e*3);return le(t.knF,0,[.12+.1*s.kneeF[0],.15,1],!1),le(t.knB,0,[.6,-.2-.5*d,.5+.2*s.kneeB[0]],!1),t}const Sh={uaF:[.8,-.55,.25],faF:[.85,-.3,.45],uaB:[-.5,-.5,-.75],faB:[-.45,-.4,-.8]},Yp={uaF:[.45,-.55,-.7],faF:[.4,-.45,-.8],uaB:[-.35,-.75,-.55],faB:[-.2,-.65,-.75]},qb=[{crouch:.85,drop:.08,pelvis:5,chest:0,lean:25,head:30,pitch:15,...Sh,kneeF:[.35,0,1],kneeB:[.35,0,1]},{crouch:1,drop:.13,shift:.06,pelvis:25,chest:40,lean:30,head:42,pitch:20,uaF:[.45,-.85,.25],faF:[.7,-.6,.3],uaB:[-.3,-.9,.25],faB:[-.35,-.85,.3],kneeF:[.7,0,1],kneeB:[.6,0,1]},{crouch:.5,pelvis:30,chest:50,lean:15,head:15,pitch:20,beach:!0,...Yp,kneeF:[.4,0,1],kneeB:[.4,0,1]}],Th=[{crouch:1,drop:.08,pelvis:0,chest:-10,lean:25,head:35,pitch:-15,...Sh,uaB:[-.5,-.55,-.7],faB:[-.45,-.4,-.8],kneeF:[.4,0,1],kneeB:[.4,0,1]},{crouch:1,drop:.05,shift:-.05,pelvis:40,chest:80,lean:20,side:-5,head:20,pitch:-25,uaF:[.4,-.85,.35],faF:[.45,-.8,.4],uaB:[-.6,.6,-.35],faB:[-.45,.85,-.1],kneeF:[.3,0,1],kneeB:[.25,0,1]},{crouch:1,drop:.12,pelvis:25,chest:40,lean:25,head:30,pitch:-10,beach:!0,...Yp,kneeF:[.4,0,1],kneeB:[.4,0,1]}],jp=[{crouch:.85,drop:.08,pelvis:0,chest:-10,lean:25,head:40,pitch:-5,...Sh,kneeF:[.4,0,1],kneeB:[.4,0,1]},{crouch:1,drop:.13,shift:-.06,pelvis:45,chest:85,lean:0,side:-10,head:30,pitch:-20,uaF:[.5,-.7,.5],faF:[.55,-.7,.45],uaB:[-.6,.6,-.35],faB:[-.45,.85,-.1],kneeF:[.25,0,1],kneeB:[.2,0,1]},{crouch:1,drop:.08,pelvis:20,chest:35,lean:25,head:25,pitch:5,beach:!0,uaF:[.7,-.8,-.3],faF:[.75,-.6,-.45],uaB:[-.3,-.85,-.4],faB:[-.15,-.8,-.5],kneeF:[.45,0,1],kneeB:[.45,0,1]}],$p={uaB:[-.7,-.3,-.6],faB:[-.55,-.3,-.75]},Kb={uaB:[-.55,-.5,-.6],faB:[-.4,-.45,-.75]},Yb={crouch:1,drop:.2,pelvis:25,chest:55,lean:65,side:25,curl:50,head:30,pitch:10,beach:!0,uaF:[.85,-.45,.25],faF:[.95,-.1,.25],uaB:[.45,-.8,.3],faB:[.75,-.5,.3],kneeF:[.6,0,1],kneeB:[.6,0,1]},Mc=qb.map(rs),yc=Th.map(rs),bc=jp.map(rs),jb=rs({...Th[1],...$p}),$b=rs({...Th[1],...Kb}),Zb=rs({...jp[1],...$p}),Zp=rs(Yb);le(Zp.knB,0,[.6,-.15,.62],!1);const Eh=(()=>{const s=new Bn;return s.pel=6*Sn,s.chy=30*Sn,le(s.chest,0,[.12,1,.22]),le(s.look,0,[1,-.15,.35]),le(s.armM,0,[.45,-.85,.3]),le(s.armM,3,[.75,-.45,.35]),le(s.armM,6,[-.25,-.95,.05]),le(s.armM,9,[-.2,-.93,.12]),s.wM=1,s})(),Jb=(()=>{const s=new Bn;return Ls(s,Eh),le(s.armM,0,[.7,-.5,.5]),le(s.armM,3,[.8,-.45,.4]),le(s.armM,6,[-.7,-.5,.5]),le(s.armM,9,[-.8,-.45,.4]),s})(),Qb=(()=>{const s=new Bn;return Ls(s,Eh),le(s.armM,6,[-.3,-.9,.5]),le(s.armM,9,[-.2,-.9,.4]),s})();class tS{constructor(t){M(this,"root");M(this,"meshes");M(this,"b");M(this,"controlled");M(this,"restQ");M(this,"spine");M(this,"pelvisParentInv",new Vt);M(this,"thighOff",[]);M(this,"legLen",[]);M(this,"headTopLocal",new C);M(this,"jointBone");M(this,"x",new Float64Array(Ro));M(this,"v",new Float64Array(Ro));M(this,"tgt",new Float64Array(Ro));M(this,"fresh",!0);M(this,"cs",1);M(this,"active",!1);M(this,"manSign",0);M(this,"kB",0);M(this,"kS",0);M(this,"kC",0);M(this,"pkT",0);M(this,"held",0);M(this,"retT",9);M(this,"tubeLin",0);M(this,"upGate",0);M(this,"cur",new Bn);M(this,"phS",new Bn);M(this,"phP",new Bn);M(this,"phR",new Bn);M(this,"pkS",new Bn);M(this,"pkC",new Bn);M(this,"rootInv",new Vt);M(this,"qR",new pe);M(this,"qRi",new pe);M(this,"q1",new pe);M(this,"q2",new pe);M(this,"qw",new pe);M(this,"qp",new pe);M(this,"qC",new pe);M(this,"qCi",new pe);M(this,"s3",new C);M(this,"p3",new C);M(this,"va",new C);M(this,"vb",new C);M(this,"vc",new C);M(this,"vd",new C);M(this,"ve",new C);M(this,"vf",new C);M(this,"H",new C);M(this,"K",new C);M(this,"E",new C);M(this,"T",new C);M(this,"aA",new C);M(this,"aB",new C);M(this,"qa",new pe);M(this,"side",new C);M(this,"footP",new C);M(this,"armPrev",[new C(1,0,0),new C(1,0,0),new C(-1,0,0),new C(-1,0,0)]);M(this,"armM",[new C,new C,new C,new C]);M(this,"armFresh",!0);M(this,"armTurnMax",Df);M(this,"fwd",new C);M(this,"headFaceLocal",new C);this.root=t.root,this.meshes=t.meshes;const e=["clavicle_l","pelvis","spine_01","spine_02","spine_03","neck_01","Head","upperarm_l","lowerarm_l","hand_l","upperarm_r","lowerarm_r","hand_r","thigh_l","calf_l","foot_l","ball_l","thigh_r","calf_r","foot_r","ball_r"];this.b={};for(const o of e)this.b[o]=t.bone(o);this.controlled=e.map(o=>this.b[o]),this.restQ=this.controlled.map(o=>o.quaternion.clone()),this.spine=[this.b.pelvis,this.b.spine_01,this.b.spine_02,this.b.spine_03],this.root.position.set(0,0,0),this.root.quaternion.identity(),this.root.scale.set(1,1,1),this.root.updateMatrixWorld(!0),this.pelvisParentInv.copy(this.b.pelvis.parent.matrixWorld).invert();const n=new C().setFromMatrixPosition(this.b.pelvis.matrixWorld);for(const o of["l","r"]){const a=new C().setFromMatrixPosition(this.b["thigh_"+o].matrixWorld),c=new C().setFromMatrixPosition(this.b["calf_"+o].matrixWorld),l=new C().setFromMatrixPosition(this.b["foot_"+o].matrixWorld);this.thighOff.push(a.clone().sub(n)),this.legLen.push(a.distanceTo(c)+c.distanceTo(l))}const i=this.b.Head,r=new pe;i.matrixWorld.decompose(new C,r,new C),this.headTopLocal.set(0,Vb,0).applyQuaternion(r.invert()),this.headFaceLocal.set(0,0,1).applyQuaternion(r),this.jointBone={hip:this.b.pelvis,chest:this.b.spine_03,headTop:this.b.Head,shoulderF:this.b.upperarm_l,shoulderB:this.b.upperarm_r,handF:this.b.hand_l,handB:this.b.hand_r,kneeF:this.b.calf_l,kneeB:this.b.calf_r,ankleF:this.b.foot_l,ankleB:this.b.foot_r}}setStance(t){this.cs=t<0?-1:1,this.root.scale.z=this.cs}reset(){this.fresh=!0,this.armFresh=!0,this.active=!1,this.manSign=0,this.pkT=0,this.held=0,this.retT=9,this.tubeLin=0,this.root.position.set(0,0,0),this.root.quaternion.identity()}joint(t,e){const n=this.jointBone[t];return t==="headTop"?e.copy(this.headTopLocal).applyMatrix4(n.matrixWorld):e.setFromMatrixPosition(n.matrixWorld)}phases(t,e){const n=Number.isFinite(t.turn)?t.turn:0,i=Number.isFinite(t.intent)?t.intent:0,r=Number.isFinite(t.hb)?t.hb:0,o=X(1,1.8,Math.abs(i)),a=X(1,1.8,Math.abs(n)),c=Math.sign(i),l=Math.sign(n),h=o>.5?c:a>.5?l:0;if(h!==0&&(h!==this.manSign||!this.active)){this.manSign=h,this.active=!0,this.pkT=0,this.held=0,this.retT=9;const m=Math.max(Zt(-Math.cos(r)/.4,0,1),h<0?X(-.3,-.8,r):0);this.kC=m,this.kB=h>0?1-m:0,this.kS=h<0?1-m:0,this.upGate=m+(1-m)*X(.4,.28,Number.isFinite(t.t)?t.t:.5)}if(!this.active)return{load:0,peak:0,ret:0,up:0};const u=c===this.manSign?o:0,f=l===this.manSign?1:0,d=u*(1-X(.3,1.2,Math.abs(n))),p=Math.max(u*X(.4,1.4,Math.abs(n)),a)*f;p>.5?(this.pkT+=e,this.held=Math.max(this.held,X(.1,.25,this.pkT)),this.retT=0):(p<.2&&(this.pkT=0),this.held>0&&(this.retT+=e));const _=this.held*X(Ff,Hb,this.retT);this.retT>Ff&&(this.held=0),d<.01&&p<.01&&_<.01&&o<.5&&(this.active=!1);const g=1-X(Of[0],Of[1],this.pkT);return{load:d,peak:p,ret:_,up:g}}kinds(t,e,n,i){Ls(t,e);const r=this.kB+this.kS;this.kS>0&&r>0&&Mn(t,n,this.kS/r),this.kC>0&&Mn(t,i,this.kC)}drive(t,e,n){const i=this.tgt,r=this.cur,o=t.wipeT>=0;let a=0;if(o){const u=t.wipeT,f=X(.25,.45,u);r.pel=0,r.chy=0,r.curl=0,r.wM=1,le(r.armM,0,[1-.7*f,-.15-.85*f,.3]),le(r.armM,3,[1-.6*f,-.1-.9*f,.25]),le(r.armM,6,[1-1.2*f,-.1+.7*f,.45]),le(r.armM,9,[1-.7*f,-.05+.95*f,.3]),le(r.look,0,[1,-.2,.3]),le(r.knF,0,[.4,.3,1]),le(r.knB,0,[.2,.3,1]),ni(i,yi,If,Hl(1)-.05,0),ni(i,Dn,-.3+.9*f,1,.4),i[Co]=.2}else{Ls(r,Eh),r.hipY=Hl(t.crouch);const u=Zt(t.crouch,0,1);le(r.knF,0,[.15,.15,1],!1),le(r.knB,0,[.6,-.2-.5*u,.57],!1),Mn(r,Jb,0,X(.4,.7,Zt(t.spread,0,1))),a=Zt(t.stall,0,1),Mn(r,Qb,0,.6*a),this.tubeLin=t.inTube?Math.min(1,this.tubeLin+n/Ib):Math.max(0,this.tubeLin-n/Db);const f=X(0,1,this.tubeLin),d=1-f,p=this.phases(t,n);(p.ret>0||p.load>0||p.peak>0)&&(Ls(this.pkS,$b),Mn(this.pkS,jb,0,this.upGate),Mn(this.pkS,yc[1],p.up*this.upGate),Ls(this.pkC,Zb),Mn(this.pkC,bc[1],p.up),this.kinds(this.phR,Mc[2],yc[2],bc[2]),this.kinds(this.phS,Mc[0],yc[0],bc[0]),this.kinds(this.phP,Mc[1],this.pkS,this.pkC),Mn(r,this.phR,p.ret*d),Mn(r,this.phS,p.load*d),Mn(r,this.phP,p.peak*d)),f>0&&Mn(r,Zp,f,X(.5,1,this.tubeLin));const _=a*d;ni(i,yi,If-.13*_,r.hipY,r.shift),ni(i,Dn,r.chest[0]-.25*_,r.chest[1],r.chest[2]),i[Co]=0}ni(i,Ts,r.look[0],r.look[1],r.look[2]),ni(i,Po,r.knF[0],r.knF[1],r.knF[2]),ni(i,Lo,r.knB[0],r.knB[1],r.knB[2]),i[Lb]=0,i[fr]=r.pel,i[Io]=r.chy,i[vc]=r.curl;const c=this.fresh?i:this.x;this.vc.set(c[Dn],c[Dn+1],c[Dn+2]).normalize(),Xb(c[fr],c[Io],c[vc],this.vc,c[Co],this.qCi).invert();for(let u=0;u<4;u++){const f=3*u,d=this.vd.set(r.armM[f],r.armM[f+1],r.armM[f+2]).applyQuaternion(this.qCi),p=this.ve.set(r.armC[f],r.armC[f+1],r.armC[f+2]).multiplyScalar(1-r.wM).addScaledVector(d,r.wM);p.lengthSq()<1e-8&&p.copy(d),p.normalize(),ni(i,Lf[u],p.x,p.y,p.z)}o||(Vf(i,On,On+3,Nf+4),Vf(i,On+6,On+9,Uf+4));const l=this.x,h=this.v;if(this.fresh)l.set(i),h.fill(0),this.fresh=!1;else{for(let _=0;_<Ro;_++){if(_>=On&&_<Pf+3)continue;const g=o?9:_>=Ts&&_<Ts+3?Fb:_===Io?Ob:_===fr?Bb:(_===yi+1||_>=Dn&&_<Dn+3)&&this.tubeLin===0?zb:kb,m=Math.exp(-g*n),b=l[_]-i[_],v=h[_]+b*g;l[_]=i[_]+(b+v*n)*m,h[_]=(h[_]-v*g*n)*m}const u=o?28:Nb,f=o?1:Ub,d=Math.max(1,Math.ceil(n/(1/120))),p=n/d;for(let _=0;_<d;_++)for(let g=On;g<Pf+3;g++)h[g]+=(u*u*(i[g]-l[g])-2*f*u*h[g])*p,l[g]+=h[g]*p}if(this.armTurnMax=o?25:Df,o){const u=t.wipeT;t.wipeKind===2?this.root.position.set(-.5*u,e+.9*u-.6*u*u,-.9*u*this.cs):this.root.position.set(1.6*u,e+.5*u-.8*u*u,.35*u*this.cs),this.q1.setFromAxisAngle(this.vc.set(0,0,1),(t.wipeKind===2?1.2:-2.2)*Math.min(1,u)),this.root.quaternion.copy(this.q1)}else this.root.position.set(0,e,0),this.root.quaternion.identity();this.solve(o?Math.min(1,t.wipeT*3):0,t.wipeT,n),this.armFresh=!1}solve(t,e,n){const i=this.x,r=this.b;for(let p=0;p<this.controlled.length;p++)this.controlled[p].quaternion.copy(this.restQ[p]);let o=i[yi+1];const a=this.va.set(ta[0],ta[1],ta[2]),c=this.vb.set(ea[0],ea[1],ea[2]);t>0&&(a.x+=.2*t*Math.sin(6*e),a.y+=.3*t*(.6+.4*Math.sin(8*e)),a.z+=.2*t*Math.sin(5*e),c.x-=.15*t*Math.cos(7*e),c.y+=.25*t*(.6+.4*Math.cos(9*e)),c.z-=.2*t*Math.sin(4*e+1));for(let p=0;p<2;p++){const _=p===0?a:c,g=this.thighOff[p],m=i[yi]+g.x-_.x,b=i[yi+2]+g.z-_.z,v=this.legLen[p]*.95,x=_.y+Math.sqrt(Math.max(.01,v*v-m*m-b*b))-g.y;o>x&&(o=x)}r.pelvis.position.set(i[yi],o,i[yi+2]).applyMatrix4(this.pelvisParentInv),this.root.updateMatrixWorld(!0),this.rootInv.copy(this.root.matrixWorld).invert(),this.root.matrixWorld.decompose(this.p3,this.qR,this.s3),this.qRi.copy(this.qR).invert();const h=this.vc.set(i[Dn],i[Dn+1],i[Dn+2]).normalize(),u=i[fr],f=i[Io]-i[fr];for(let p=0;p<4;p++)Vl(p,u,f,i[vc],h,i[Co],this.q2),p===0&&this.qC.copy(this.q2),p===3&&this.qC.premultiply(this.q2),this.rotateModel(this.spine[p],this.q2,p===0||p===3);r.Head.matrixWorld.decompose(this.p3,this.qw,this.s3),this.fwd.copy(this.headFaceLocal).applyQuaternion(this.qw).applyQuaternion(this.qRi);const d=this.vd.set(i[Ts],i[Ts+1],i[Ts+2]).normalize();this.q1.setFromUnitVectors(this.fwd,d),this.q2.identity().slerp(this.q1,.5),this.rotateModel(r.neck_01,this.q2,!0),this.rotateModel(r.Head,this.q2,!0),this.twoBone(r.thigh_l,r.calf_l,r.foot_l,a,this.ve.set(i[Po],i[Po+1],i[Po+2])),this.twoBone(r.thigh_r,r.calf_r,r.foot_r,c,this.ve.set(i[Lo],i[Lo+1],i[Lo+2])),this.aim(r.foot_l,r.ball_l,this.ve.set(.3,-.5,1).normalize()),this.aim(r.foot_r,r.ball_r,this.ve.set(-.05,-.5,1).normalize());for(let p=0;p<4;p++)this.armM[p].copy(this.armDir(p,Lf[p],n)).applyQuaternion(this.qC);this.fwd.set(0,0,1).applyQuaternion(this.qC),t===0&&e<0&&(this.soften(this.armM[0],this.armM[1],Nf),this.soften(this.armM[2],this.armM[3],Uf)),this.aim(r.upperarm_l,r.lowerarm_l,this.armM[0]),this.aim(r.lowerarm_l,r.hand_l,this.armM[1]),this.aim(r.upperarm_r,r.lowerarm_r,this.armM[2]),this.aim(r.lowerarm_r,r.hand_r,this.armM[3])}soften(t,e,n){const i=Zt(t.dot(e),-1,1),r=n*Sn;if(Math.acos(i)>=r)return;const o=this.vd.copy(this.fwd).addScaledVector(t,-this.fwd.dot(t));o.lengthSq()<.05&&o.copy(Ji).addScaledVector(t,-t.y),o.normalize();const a=this.vf.copy(e).addScaledVector(t,-i).addScaledVector(o,.1);a.lengthSq()<1e-10&&a.copy(o),a.normalize(),e.copy(t).multiplyScalar(Math.cos(r)).addScaledVector(a,Math.sin(r))}armDir(t,e,n){const i=this.ve.set(this.x[e],this.x[e+1],this.x[e+2]);i.lengthSq()<1e-10&&i.copy(this.armPrev[t]),i.normalize();const r=this.armPrev[t];if(this.armFresh)return r.copy(i);const o=r.angleTo(i),a=this.armTurnMax*n;return o>a&&(this.qa.setFromUnitVectors(r,i),this.q2.identity().slerp(this.qa,a/o),i.copy(r).applyQuaternion(this.q2)),r.copy(i)}mpos(t,e){return e.setFromMatrixPosition(t.matrixWorld).applyMatrix4(this.rootInv)}rotateModel(t,e,n){const i=t.parent;t.matrixWorld.decompose(this.p3,this.qw,this.s3),i.matrixWorld.decompose(this.p3,this.qp,this.s3),this.qw.premultiply(this.qRi).premultiply(e).premultiply(this.qR),t.quaternion.copy(this.qp.invert().multiply(this.qw)),n?t.updateMatrixWorld(!0):(t.updateMatrix(),t.matrixWorld.multiplyMatrices(i.matrixWorld,t.matrix))}aim(t,e,n){const i=this.mpos(t,this.aA),r=this.mpos(e,this.aB).sub(i).normalize();this.qa.setFromUnitVectors(r,n),this.rotateModel(t,this.qa,!0)}twoBone(t,e,n,i,r){const o=this.mpos(t,this.H),a=o.distanceTo(this.mpos(e,this.K)),c=this.K.distanceTo(this.mpos(n,this.E)),l=this.T.copy(i).sub(o),h=Math.max(.05,Math.min(l.length(),(a+c)*.999));l.normalize();const u=Zt((a*a+h*h-c*c)/(2*a*h),-1,1),f=Math.sqrt(Math.max(0,1-u*u)),d=this.side.copy(r).addScaledVector(l,-r.dot(l));d.lengthSq()<1e-8&&d.set(0,0,1),d.normalize();const p=this.K.copy(o).addScaledVector(l,u*a).addScaledVector(d,f*a),_=this.footP.copy(o).addScaledVector(l,h);this.aim(t,e,this.E.copy(p).sub(o).normalize()),this.aim(e,n,_.sub(p).normalize())}}const Gi=new C,Es=new C,dr=new C;function Vf(s,t,e,n){Gi.set(s[t],s[t+1],s[t+2]).normalize(),Es.set(s[e],s[e+1],s[e+2]).normalize();const i=n*Sn;dr.set(0,0,1).addScaledVector(Gi,-Gi.z),dr.lengthSq()<.05&&dr.set(0,1,0).addScaledVector(Gi,-Gi.y),dr.normalize(),!(Math.acos(Zt(Es.dot(Gi),-1,1))>=i)&&(Es.copy(Gi).multiplyScalar(Math.cos(i)).addScaledVector(dr,Math.sin(i)),ni(s,e,Es.x,Es.y,Es.z))}function ni(s,t,e,n,i){s[t]=e,s[t+1]=n,s[t+2]=i}function eS(){return{p:new C,es:new C,eu:new C,n:new C}}const nS={u:0,y:0,A:0,W:0,m:0,sinA:0};function iS(s,t,e,n){const i=s.facePoint(t,e,nS),r=e<0?0:e,o=2*i.A*(r<1?1-r:0),a=i.m;return n.p.set(-t,i.y,i.u),n.es.set(-1,0,0),n.eu.set(0,o/a,-i.W/a),n.n.set(0,i.W/a,o/a),n}function sS(s,t,e,n,i){const r=Math.cos(t),o=Math.sin(t);e.set(s.es.x*r+s.eu.x*o,s.es.y*r+s.eu.y*o,s.es.z*r+s.eu.z*o),n.copy(s.n),i.crossVectors(e,n)}const na=1.85,rS=.5,Fs=.065,Gf=.45,oS=.45,Wf=.5,Xf=.3,qf=.3;function aS(){const s=na,t=rS/2,e=new Lp,n=s*.52,i=-s*.48;e.moveTo(i,-t*.62),e.bezierCurveTo(-s*.25,-t*1.02,s*.1,-t*1.05,s*.28,-t*.75),e.bezierCurveTo(s*.42,-t*.45,n-.04,-.03,n,0),e.bezierCurveTo(n-.04,.03,s*.42,t*.45,s*.28,t*.75),e.bezierCurveTo(s*.1,t*1.05,-s*.25,t*1.02,i,t*.62),e.lineTo(i,-t*.62);const r=new xh(e,{depth:Fs*.5,bevelEnabled:!0,bevelThickness:Fs*.25,bevelSize:.02,bevelSegments:2,curveSegments:10});r.rotateX(-Math.PI/2),r.translate(0,Fs*.25,0);const o=r.attributes.position;for(let a=0;a<o.count;a++){const c=o.getX(a);c>s*.2&&o.setY(a,o.getY(a)+Math.pow((c-s*.2)/(s*.32),2)*.09),c<-s*.38&&o.setY(a,o.getY(a)+Math.pow((-c-s*.38)/(s*.1),2)*.02)}return r.computeVertexNormals(),r}function pr(s,t,e){const n=new re(new gh(s,t,3,8),e);return n.castShadow=!0,n}const Kf=new C(0,1,0),No={base:.9,k:.25,refH:3.2,min:.74},Sc={on:.3,off:.22,opacity:.7},cS=Fs*.75,lS=3;function hS(s){const t=s.lastTarget;return Number.isFinite(t)?lS*(t-s.hb):Number.isFinite(s.targetRateF)?s.targetRateF:0}class uS{constructor(t){M(this,"group",new Ue);M(this,"rideRoot",new Ue);M(this,"board");M(this,"body",new Ue);M(this,"thighs",[]);M(this,"shins",[]);M(this,"torso");M(this,"head");M(this,"uArms",[]);M(this,"fArms",[]);M(this,"stance","regular");M(this,"crouch",.4);M(this,"torsoTwist",0);M(this,"armSpread",0);M(this,"silhouette",new Ue);M(this,"silhouetteVisible",!1);M(this,"silParts",[]);M(this,"parts",[]);M(this,"roll",0);M(this,"wipeT",-1);M(this,"fb",eS());M(this,"bx",new C);M(this,"by",new C);M(this,"bz",new C);M(this,"mtx",new Vt);M(this,"qBase",new pe);M(this,"qRoll",new pe);M(this,"axisX",new C(1,0,0));M(this,"tumbleVel",new C);M(this,"tumbleAxis",new C);M(this,"qTmp",new pe);M(this,"a",new C);M(this,"b",new C);M(this,"c",new C);M(this,"hip",new C);M(this,"sh",new C);M(this,"dir",new C);M(this,"capJ",{});M(this,"glb",null);M(this,"intent",0);M(this,"drv",{crouch:.4,twist:0,spread:0,stall:0,turn:0,t:.5,inTube:!1,wipeT:-1,wipeKind:1,intent:0,hb:0});for(const d of["hip","chest","headTop","shoulderF","shoulderB","handF","handB","kneeF","kneeB","ankleF","ankleB"])this.capJ[d]=new C;const e=new Ge({color:16052194,roughness:.45}),n=new Ge({color:16738877,roughness:.5});this.board=new re(aS(),e);const i=new re(new is(na*.9,.004,.025),n);i.position.set(0,Fs*.77,0),this.board.add(i);const r=new re(new is(.12,.1,.012),n);r.position.set(-na*.42,-.04,0),this.board.add(r);const o=new Ge({color:13208930,roughness:.7}),a=new Ge({color:1777447,roughness:.65}),c=new Ge({color:2308443,roughness:.6});for(let d=0;d<2;d++){const p=pr(.075,Gf-.15,a),_=pr(.06,oS-.12,a);this.thighs.push(p),this.shins.push(_),this.body.add(p,_);const g=pr(.05,Xf-.1,c),m=pr(.045,qf-.09,o);this.uArms.push(g),this.fArms.push(m),this.body.add(g,m)}this.torso=pr(.13,Wf-.26,c),this.head=new re(new Ks(.11,12,10),o);const l=new re(new Ks(.115,12,8,0,Math.PI*2,0,Math.PI*.55),a);this.head.add(l),this.head.castShadow=!0,l.castShadow=!0,this.board.castShadow=!0,this.body.add(this.torso,this.head),this.rideRoot.add(this.board,this.body);const h=new Rn({color:201756,transparent:!0,opacity:Sc.opacity,depthWrite:!1,visible:!1}),u=[...this.thighs,...this.shins,...this.uArms,...this.fArms,this.torso,this.head];this.parts.push(...u,this.board);for(const d of u){const p=new re(d.geometry,h);p.renderOrder=-1,this.silhouette.add(p),this.silParts.push([d,p])}const f=new re(this.board.geometry,h);f.renderOrder=-1,this.silhouette.add(f),this.silhouette.visible=!1,this.rideRoot.add(this.silhouette),this.group.add(this.rideRoot),this.group.visible=!1,t!=null&&t.model&&this.setModel(t.model)}get bodyKind(){return this.glb?"glb":"capsule"}setModel(t){this.glb&&this.rideRoot.remove(this.glb.root),this.glb=new tS(t),this.glb.setStance(this.stance==="regular"?1:-1),this.rideRoot.remove(this.body),this.rideRoot.add(this.glb.root),this.silhouette.clear(),this.silParts.length=0,this.parts.length=0,this.parts.push(...this.glb.meshes,this.board),this.glb.reset()}joint(t,e){return this.group.updateMatrixWorld(),this.glb?this.glb.joint(t,e):this.rideRoot.localToWorld(e.copy(this.capJ[t]))}reset(){var t;this.wipeT=-1,this.roll=0,this.crouch=.4,this.torsoTwist=0,this.armSpread=0,this.setSilhouette(!1),this.group.visible=!0,this.rideRoot.quaternion.identity(),this.rideRoot.position.set(0,0,0),(t=this.glb)==null||t.reset(),this.intent=0}update(t,e,n){if(t.state==="idle"){this.setSilhouette(!1),this.group.visible=!1;return}if((!(n>=0)||!Number.isFinite(n))&&(n=0),t.state!=="riding"){this.setSilhouette(!1),this.tumble(t,n);return}this.group.visible=!0;const i=iS(e,t.s,t.t,this.fb);sS(i,t.hb,this.bx,this.by,this.bz),this.mtx.makeBasis(this.bx,this.by,this.bz),this.qBase.setFromRotationMatrix(this.mtx),this.group.position.copy(i.p),this.group.quaternion.copy(this.qBase),this.roll=fn(this.roll,t.lean,10,n),this.qRoll.setFromAxisAngle(this.axisX,this.roll),this.rideRoot.quaternion.copy(this.qRoll),this.rideRoot.position.set(0,0,0);const r=Math.min(1,Math.abs(t.turnRateF)/2);let o=Zt(.3+.4*r+.15*Math.min(1,t.v/12)-.35*t.stall+.3*Math.min(1,Math.abs(t.skid)),0,1);this.torsoTwist=fn(this.torsoTwist,Zt(.3*t.turnRateF+.4*t.skid,-1.2,1.2),8,n),this.armSpread=fn(this.armSpread,Zt(.7*r+.8*Math.min(1,Math.abs(t.skid)),0,1),8,n),t.inTube&&(o=Math.max(o,Zt(No.base+No.k*(No.refH-t.tubeHeight),No.min,1))),this.crouch=fn(this.crouch,o,6,n),this.glb?this.driveGlb(t,-1,n):this.pose(this.crouch,t.stall,this.torsoTwist,this.armSpread);let a=!1;t.inTube&&(a=-t.d/(1.5+5*e.hollow(t.s))>=(this.silhouetteVisible?Sc.off:Sc.on)),this.setSilhouette(a)}setSilhouette(t){if(this.silhouetteVisible=t,this.silhouette.visible=t,!!t)for(const[e,n]of this.silParts)n.position.copy(e.position),n.quaternion.copy(e.quaternion),n.scale.copy(e.scale)}driveGlb(t,e,n){const i=this.drv;i.crouch=this.crouch,i.twist=this.torsoTwist,i.spread=this.armSpread,i.stall=t.stall,i.turn=t.turnRateF,i.intent=this.intent=fn(this.intent,hS(t),25,n),i.hb=t.hb,i.t=t.t,i.inTube=t.inTube,i.wipeT=e,i.wipeKind=t.state==="kickedOut"?2:1,this.glb.setStance(this.stance==="regular"?1:-1),this.rideRoot.updateWorldMatrix(!0,!1),this.glb.drive(i,cS,n)}pose(t,e,n=0,i=0){const r=this.stance==="regular"?1:-1,o=Fs*.75,a=[.3,-.42],c=-.06-.12*e,l=o+.86*(1-.38*t);this.hip.set(c,l,.04*r*t);for(let u=0;u<2;u++)this.a.set(a[u],o+.02,0),this.b.set(this.hip.x+(u===0?.09:-.09),this.hip.y,this.hip.z),this.knee(this.a,this.b,r,this.c),(u===0?this.capJ.ankleF:this.capJ.ankleB).copy(this.a),(u===0?this.capJ.kneeF:this.capJ.kneeB).copy(this.c),this.place(this.shins[u],this.a,this.c),this.place(this.thighs[u],this.c,this.b);const h=.25+.6*t;this.dir.set(.12-.15*e+.35*Math.sin(n),Math.cos(h),Math.sin(h)*r*.75).normalize(),this.sh.copy(this.hip).addScaledVector(this.dir,Wf),this.place(this.torso,this.hip,this.sh),this.head.position.copy(this.sh).addScaledVector(this.dir,.2),this.capJ.hip.copy(this.hip),this.capJ.chest.copy(this.sh),this.capJ.headTop.copy(this.head.position).y+=.11;for(let u=0;u<2;u++){const f=u===0?1:-1;this.a.copy(this.sh).add(this.c.set(.17*f,-.04,0)),this.b.copy(this.a).add(this.c.set(.26*f,-.12+.3*i,(.08+.2*i)*r)).sub(this.a).setLength(Xf).add(this.a),(u===0?this.capJ.shoulderF:this.capJ.shoulderB).copy(this.a),this.place(this.uArms[u],this.a,this.b),this.c.set(.2*f,-.2+.1*t,.1*r).setLength(qf).add(this.b),(u===0?this.capJ.handF:this.capJ.handB).copy(this.c),this.place(this.fArms[u],this.b,this.c)}}knee(t,e,n,i){const r=e.x-t.x,o=e.y-t.y,a=e.z-t.z,c=Math.sqrt(r*r+o*o+a*a),l=Gf,h=c<2*l?Math.sqrt(l*l-c*c/4):0;i.set((t.x+e.x)/2,(t.y+e.y)/2,(t.z+e.z)/2),i.z+=h*n}place(t,e,n){t.position.set((e.x+n.x)/2,(e.y+n.y)/2,(e.z+n.z)/2),this.dir.set(n.x-e.x,n.y-e.y,n.z-e.z);const i=this.dir.length();i>1e-6&&(this.dir.multiplyScalar(1/i),t.quaternion.setFromUnitVectors(Kf,this.dir))}tumble(t,e){if(this.wipeT<0){this.wipeT=0;const i=Math.cos(t.hv),r=Math.sin(t.hv);this.tumbleVel.set(-i*t.v*.6,1.5,-r*.6*t.v*.3),t.state==="kickedOut"&&this.tumbleVel.set(-i*t.v*.4,2.2,-2.5),this.tumbleAxis.copy(this.bx).cross(Kf).normalize(),this.tumbleAxis.lengthSq()<1e-6&&this.tumbleAxis.set(0,0,1)}this.wipeT+=e,this.tumbleVel.y-=9.81*e,this.group.position.y<-.6&&this.tumbleVel.multiplyScalar(Math.exp(-4*e)),this.group.position.addScaledVector(this.tumbleVel,e);const n=t.state==="kickedOut"?2.5:7;this.qTmp.setFromAxisAngle(this.tumbleAxis,n*e*Math.exp(-this.wipeT)),this.group.quaternion.premultiply(this.qTmp),this.crouch=fn(this.crouch,1,4,e),this.glb?this.driveGlb(t,this.wipeT,e):this.pose(this.crouch,0),this.wipeT>1.6&&(this.group.visible=!1)}tailWorld(t){return t.set(-na*.4,.05,0),this.group.updateMatrixWorld(),this.rideRoot.localToWorld(t)}}function fS(s,t=!1){const e=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},o={},a=s[0].morphTargetsRelative,c=new be;let l=0;for(let h=0;h<s.length;++h){const u=s[h];let f=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const d in u.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(u.attributes[d]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const d in u.morphAttributes){if(!i.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(u.morphAttributes[d])}if(t){let d;if(e)d=u.index.count;else if(u.attributes.position!==void 0)d=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,d,h),l+=d}}if(e){let h=0;const u=[];for(let f=0;f<s.length;++f){const d=s[f].index;for(let p=0;p<d.count;++p)u.push(d.getX(p)+h);h+=s[f].attributes.position.count}c.setIndex(u)}for(const h in r){const u=Yf(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,u)}for(const h in o){const u=o[h][0].length;if(u===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let f=0;f<u;++f){const d=[];for(let _=0;_<o[h].length;++_)d.push(o[h][_][f]);const p=Yf(d);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(p)}}return c}function Yf(s){let t,e,n,i=-1,r=0;for(let l=0;l<s.length;++l){const h=s[l];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}const o=new t(r),a=new Kt(o,e,n);let c=0;for(let l=0;l<s.length;++l){const h=s[l];if(h.isInterleavedBufferAttribute){const u=c/e;for(let f=0,d=h.count;f<d;f++)for(let p=0;p<e;p++){const _=h.getComponent(f,p);a.setComponent(f+u,p,_)}}else o.set(h.array,c);c+=h.count*e}return i!==void 0&&(a.gpuType=i),a}function jf(s,t){if(t===Jm)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(t===Al||t===op){let e=s.getIndex();if(e===null){const o=[],a=s.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)o.push(c);s.setIndex(o),e=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const n=e.count-2,i=[];if(t===Al)for(let o=1;o<=n;o++)i.push(e.getX(0)),i.push(e.getX(o)),i.push(e.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(e.getX(o)),i.push(e.getX(o+1)),i.push(e.getX(o+2))):(i.push(e.getX(o+2)),i.push(e.getX(o+1)),i.push(e.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",t),s}class dS extends er{constructor(t){super(t),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(e){return new xS(e)}),this.register(function(e){return new vS(e)}),this.register(function(e){return new RS(e)}),this.register(function(e){return new CS(e)}),this.register(function(e){return new PS(e)}),this.register(function(e){return new yS(e)}),this.register(function(e){return new bS(e)}),this.register(function(e){return new SS(e)}),this.register(function(e){return new TS(e)}),this.register(function(e){return new _S(e)}),this.register(function(e){return new ES(e)}),this.register(function(e){return new MS(e)}),this.register(function(e){return new wS(e)}),this.register(function(e){return new AS(e)}),this.register(function(e){return new mS(e)}),this.register(function(e){return new LS(e)}),this.register(function(e){return new IS(e)})}load(t,e,n,i){const r=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const l=Er.extractUrlBase(t);o=Er.resolveURL(l,this.path)}else o=Er.extractUrlBase(t);this.manager.itemStart(t);const a=function(l){i?i(l):console.error(l),r.manager.itemError(t),r.manager.itemEnd(t)},c=new Op(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(t,function(l){try{r.parse(l,o,function(h){e(h),r.manager.itemEnd(t)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(t){return this.dracoLoader=t,this}setKTX2Loader(t){return this.ktx2Loader=t,this}setMeshoptDecoder(t){return this.meshoptDecoder=t,this}register(t){return this.pluginCallbacks.indexOf(t)===-1&&this.pluginCallbacks.push(t),this}unregister(t){return this.pluginCallbacks.indexOf(t)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(t),1),this}parse(t,e,n,i){let r;const o={},a={},c=new TextDecoder;if(typeof t=="string")r=JSON.parse(t);else if(t instanceof ArrayBuffer)if(c.decode(new Uint8Array(t,0,4))===Jp){try{o[Qt.KHR_BINARY_GLTF]=new DS(t)}catch(u){i&&i(u);return}r=JSON.parse(o[Qt.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(t));else r=t;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new qS(r,{path:e||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){const u=r.extensionsUsed[h],f=r.extensionsRequired||[];switch(u){case Qt.KHR_MATERIALS_UNLIT:o[u]=new gS;break;case Qt.KHR_DRACO_MESH_COMPRESSION:o[u]=new NS(r,this.dracoLoader);break;case Qt.KHR_TEXTURE_TRANSFORM:o[u]=new US;break;case Qt.KHR_MESH_QUANTIZATION:o[u]=new FS;break;default:f.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(n,i)}parseAsync(t,e){const n=this;return new Promise(function(i,r){n.parse(t,e,i,r)})}}function pS(){let s={};return{get:function(t){return s[t]},add:function(t,e){s[t]=e},remove:function(t){delete s[t]},removeAll:function(){s={}}}}const Qt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class mS{constructor(t){this.parser=t,this.name=Qt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const t=this.parser,e=this.parser.json.nodes||[];for(let n=0,i=e.length;n<i;n++){const r=e[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&t._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(t){const e=this.parser,n="light:"+t;let i=e.cache.get(n);if(i)return i;const r=e.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[t];let l;const h=new It(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],qe);const u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new Bp(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new Wy(h),l.distance=u;break;case"spot":l=new Vy(h),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,ii(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=e.createUniqueName(c.name||"light_"+t),i=Promise.resolve(l),e.cache.add(n,i),i}getDependency(t,e){if(t==="light")return this._loadLight(e)}createNodeAttachment(t){const e=this,n=this.parser,r=n.json.nodes[t],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return n._getNodeRef(e.cache,a,c)})}}class gS{constructor(){this.name=Qt.KHR_MATERIALS_UNLIT}getMaterialType(){return Rn}extendParams(t,e,n){const i=[];t.color=new It(1,1,1),t.opacity=1;const r=e.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;t.color.setRGB(o[0],o[1],o[2],qe),t.opacity=o[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(t,"map",r.baseColorTexture,De))}return Promise.all(i)}}class _S{constructor(t){this.parser=t,this.name=Qt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(t,e){const i=this.parser.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(e.emissiveIntensity=r),Promise.resolve()}}class xS{constructor(t){this.parser=t,this.name=Qt.KHR_MATERIALS_CLEARCOAT}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Xn}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(e.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(e,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(e.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(e,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(e,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;e.clearcoatNormalScale=new pt(a,a)}return Promise.all(r)}}class vS{constructor(t){this.parser=t,this.name=Qt.KHR_MATERIALS_DISPERSION}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Xn}extendMaterialParams(t,e){const i=this.parser.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return e.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class MS{constructor(t){this.parser=t,this.name=Qt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Xn}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(e.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(e,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(e.iridescenceIOR=o.iridescenceIor),e.iridescenceThicknessRange===void 0&&(e.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(e.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(e.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(e,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}}class yS{constructor(t){this.parser=t,this.name=Qt.KHR_MATERIALS_SHEEN}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Xn}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[];e.sheenColor=new It(0,0,0),e.sheenRoughness=0,e.sheen=1;const o=i.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;e.sheenColor.setRGB(a[0],a[1],a[2],qe)}return o.sheenRoughnessFactor!==void 0&&(e.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(e,"sheenColorMap",o.sheenColorTexture,De)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(e,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}}class bS{constructor(t){this.parser=t,this.name=Qt.KHR_MATERIALS_TRANSMISSION}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Xn}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(e.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(e,"transmissionMap",o.transmissionTexture)),Promise.all(r)}}class SS{constructor(t){this.parser=t,this.name=Qt.KHR_MATERIALS_VOLUME}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Xn}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];e.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(e,"thicknessMap",o.thicknessTexture)),e.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return e.attenuationColor=new It().setRGB(a[0],a[1],a[2],qe),Promise.all(r)}}class TS{constructor(t){this.parser=t,this.name=Qt.KHR_MATERIALS_IOR}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Xn}extendMaterialParams(t,e){const i=this.parser.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return e.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class ES{constructor(t){this.parser=t,this.name=Qt.KHR_MATERIALS_SPECULAR}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Xn}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];e.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(e,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return e.specularColor=new It().setRGB(a[0],a[1],a[2],qe),o.specularColorTexture!==void 0&&r.push(n.assignTexture(e,"specularColorMap",o.specularColorTexture,De)),Promise.all(r)}}class AS{constructor(t){this.parser=t,this.name=Qt.EXT_MATERIALS_BUMP}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Xn}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return e.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(e,"bumpMap",o.bumpTexture)),Promise.all(r)}}class wS{constructor(t){this.parser=t,this.name=Qt.KHR_MATERIALS_ANISOTROPY}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Xn}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(e.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(e.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(e,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}}class RS{constructor(t){this.parser=t,this.name=Qt.KHR_TEXTURE_BASISU}loadTexture(t){const e=this.parser,n=e.json,i=n.textures[t];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],o=e.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return e.loadTextureImage(t,r.source,o)}}class CS{constructor(t){this.parser=t,this.name=Qt.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(t){const e=this.name,n=this.parser,i=n.json,r=i.textures[t];if(!r.extensions||!r.extensions[e])return null;const o=r.extensions[e],a=i.images[o.source];let c=n.textureLoader;if(a.uri){const l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(t,o.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(e)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(t)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(t){const e=new Image;e.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",e.onload=e.onerror=function(){t(e.height===1)}})),this.isSupported}}class PS{constructor(t){this.parser=t,this.name=Qt.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(t){const e=this.name,n=this.parser,i=n.json,r=i.textures[t];if(!r.extensions||!r.extensions[e])return null;const o=r.extensions[e],a=i.images[o.source];let c=n.textureLoader;if(a.uri){const l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(t,o.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(e)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(t)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(t){const e=new Image;e.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",e.onload=e.onerror=function(){t(e.height===1)}})),this.isSupported}}class LS{constructor(t){this.name=Qt.EXT_MESHOPT_COMPRESSION,this.parser=t}loadBufferView(t){const e=this.parser.json,n=e.bufferViews[t];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(e.extensionsRequired&&e.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const c=i.byteOffset||0,l=i.byteLength||0,h=i.count,u=i.byteStride,f=new Uint8Array(a,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,f,i.mode,i.filter).then(function(d){return d.buffer}):o.ready.then(function(){const d=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(d),h,u,f,i.mode,i.filter),d})})}else return null}}class IS{constructor(t){this.name=Qt.EXT_MESH_GPU_INSTANCING,this.parser=t}createNodeMesh(t){const e=this.parser.json,n=e.nodes[t];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=e.meshes[n.mesh];for(const l of i.primitives)if(l.mode!==un.TRIANGLES&&l.mode!==un.TRIANGLE_STRIP&&l.mode!==un.TRIANGLE_FAN&&l.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],c={};for(const l in o)a.push(this.parser.getDependency("accessor",o[l]).then(h=>(c[l]=h,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(t)),Promise.all(a).then(l=>{const h=l.pop(),u=h.isGroup?h.children:[h],f=l[0].count,d=[];for(const p of u){const _=new Vt,g=new C,m=new pe,b=new C(1,1,1),v=new WM(p.geometry,p.material,f);for(let x=0;x<f;x++)c.TRANSLATION&&g.fromBufferAttribute(c.TRANSLATION,x),c.ROTATION&&m.fromBufferAttribute(c.ROTATION,x),c.SCALE&&b.fromBufferAttribute(c.SCALE,x),v.setMatrixAt(x,_.compose(g,m,b));for(const x in c)if(x==="_COLOR_0"){const D=c[x];v.instanceColor=new Cl(D.array,D.itemSize,D.normalized)}else x!=="TRANSLATION"&&x!=="ROTATION"&&x!=="SCALE"&&p.geometry.setAttribute(x,c[x]);Me.prototype.copy.call(v,p),this.parser.assignFinalMaterial(v),d.push(v)}return h.isGroup?(h.clear(),h.add(...d),h):d[0]}))}}const Jp="glTF",mr=12,$f={JSON:1313821514,BIN:5130562};class DS{constructor(t){this.name=Qt.KHR_BINARY_GLTF,this.content=null,this.body=null;const e=new DataView(t,0,mr),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(t.slice(0,4))),version:e.getUint32(4,!0),length:e.getUint32(8,!0)},this.header.magic!==Jp)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-mr,r=new DataView(t,mr);let o=0;for(;o<i;){const a=r.getUint32(o,!0);o+=4;const c=r.getUint32(o,!0);if(o+=4,c===$f.JSON){const l=new Uint8Array(t,mr+o,a);this.content=n.decode(l)}else if(c===$f.BIN){const l=mr+o;this.body=t.slice(l,l+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class NS{constructor(t,e){if(!e)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Qt.KHR_DRACO_MESH_COMPRESSION,this.json=t,this.dracoLoader=e,this.dracoLoader.preload()}decodePrimitive(t,e){const n=this.json,i=this.dracoLoader,r=t.extensions[this.name].bufferView,o=t.extensions[this.name].attributes,a={},c={},l={};for(const h in o){const u=Gl[h]||h.toLowerCase();a[u]=o[h]}for(const h in t.attributes){const u=Gl[h]||h.toLowerCase();if(o[h]!==void 0){const f=n.accessors[t.attributes[h]],d=Os[f.componentType];l[u]=d.name,c[u]=f.normalized===!0}}return e.getDependency("bufferView",r).then(function(h){return new Promise(function(u,f){i.decodeDracoFile(h,function(d){for(const p in d.attributes){const _=d.attributes[p],g=c[p];g!==void 0&&(_.normalized=g)}u(d)},a,l,qe,f)})})}}class US{constructor(){this.name=Qt.KHR_TEXTURE_TRANSFORM}extendTexture(t,e){return(e.texCoord===void 0||e.texCoord===t.channel)&&e.offset===void 0&&e.rotation===void 0&&e.scale===void 0||(t=t.clone(),e.texCoord!==void 0&&(t.channel=e.texCoord),e.offset!==void 0&&t.offset.fromArray(e.offset),e.rotation!==void 0&&(t.rotation=e.rotation),e.scale!==void 0&&t.repeat.fromArray(e.scale),t.needsUpdate=!0),t}}class FS{constructor(){this.name=Qt.KHR_MESH_QUANTIZATION}}class Qp extends Wr{constructor(t,e,n,i){super(t,e,n,i)}copySampleValue_(t){const e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i*3+i;for(let o=0;o!==i;o++)e[o]=n[r+o];return e}interpolate_(t,e,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,h=i-e,u=(n-e)/h,f=u*u,d=f*u,p=t*l,_=p-l,g=-2*d+3*f,m=d-f,b=1-g,v=m-f+u;for(let x=0;x!==a;x++){const D=o[_+x+a],w=o[_+x+c]*h,P=o[p+x+a],I=o[p+x]*h;r[x]=b*D+v*w+g*P+m*I}return r}}const OS=new pe;class BS extends Qp{interpolate_(t,e,n,i){const r=super.interpolate_(t,e,n,i);return OS.fromArray(r).normalize().toArray(r),r}}const un={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Os={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Zf={9728:Xe,9729:Qe,9984:$d,9985:qo,9986:gr,9987:zn},Jf={33071:Pi,33648:oa,10497:ts},Tc={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Gl={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Si={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},kS={CUBICSPLINE:void 0,LINEAR:Ir,STEP:Lr},Ec={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function zS(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new Ge({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:ci})),s.DefaultMaterial}function Wi(s,t,e){for(const n in e.extensions)s[n]===void 0&&(t.userData.gltfExtensions=t.userData.gltfExtensions||{},t.userData.gltfExtensions[n]=e.extensions[n])}function ii(s,t){t.extras!==void 0&&(typeof t.extras=="object"?Object.assign(s.userData,t.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+t.extras))}function HS(s,t,e){let n=!1,i=!1,r=!1;for(let l=0,h=t.length;l<h;l++){const u=t[l];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);const o=[],a=[],c=[];for(let l=0,h=t.length;l<h;l++){const u=t[l];if(n){const f=u.POSITION!==void 0?e.getDependency("accessor",u.POSITION):s.attributes.position;o.push(f)}if(i){const f=u.NORMAL!==void 0?e.getDependency("accessor",u.NORMAL):s.attributes.normal;a.push(f)}if(r){const f=u.COLOR_0!==void 0?e.getDependency("accessor",u.COLOR_0):s.attributes.color;c.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){const h=l[0],u=l[1],f=l[2];return n&&(s.morphAttributes.position=h),i&&(s.morphAttributes.normal=u),r&&(s.morphAttributes.color=f),s.morphTargetsRelative=!0,s})}function VS(s,t){if(s.updateMorphTargets(),t.weights!==void 0)for(let e=0,n=t.weights.length;e<n;e++)s.morphTargetInfluences[e]=t.weights[e];if(t.extras&&Array.isArray(t.extras.targetNames)){const e=t.extras.targetNames;if(s.morphTargetInfluences.length===e.length){s.morphTargetDictionary={};for(let n=0,i=e.length;n<i;n++)s.morphTargetDictionary[e[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function GS(s){let t;const e=s.extensions&&s.extensions[Qt.KHR_DRACO_MESH_COMPRESSION];if(e?t="draco:"+e.bufferView+":"+e.indices+":"+Ac(e.attributes):t=s.indices+":"+Ac(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)t+=":"+Ac(s.targets[n]);return t}function Ac(s){let t="";const e=Object.keys(s).sort();for(let n=0,i=e.length;n<i;n++)t+=e[n]+":"+s[e[n]]+";";return t}function Wl(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function WS(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const XS=new Vt;class qS{constructor(t={},e={}){this.json=t,this.extensions={},this.plugins={},this.options=e,this.cache=new pS,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const c=a.match(/Version\/(\d+)/);i=n&&c?parseInt(c[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&o<98?this.textureLoader=new ky(this.options.manager):this.textureLoader=new qy(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Op(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(t){this.extensions=t}setPlugins(t){this.plugins=t}parse(t,e){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return Wi(r,a,i),ii(a,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){for(const c of a.scenes)c.updateMatrixWorld();t(a)})}).catch(e)}_markDefs(){const t=this.json.nodes||[],e=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=e.length;i<r;i++){const o=e[i].joints;for(let a=0,c=o.length;a<c;a++)t[o[a]].isBone=!0}for(let i=0,r=t.length;i<r;i++){const o=t[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(t,e){e!==void 0&&(t.refs[e]===void 0&&(t.refs[e]=t.uses[e]=0),t.refs[e]++)}_getNodeRef(t,e,n){if(t.refs[e]<=1)return n;const i=n.clone(),r=(o,a)=>{const c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(const[l,h]of o.children.entries())r(h,a.children[l])};return r(n,i),i.name+="_instance_"+t.uses[e]++,i}_invokeOne(t){const e=Object.values(this.plugins);e.push(this);for(let n=0;n<e.length;n++){const i=t(e[n]);if(i)return i}return null}_invokeAll(t){const e=Object.values(this.plugins);e.unshift(this);const n=[];for(let i=0;i<e.length;i++){const r=t(e[i]);r&&n.push(r)}return n}getDependency(t,e){const n=t+":"+e;let i=this.cache.get(n);if(!i){switch(t){case"scene":i=this.loadScene(e);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(e)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(e)});break;case"accessor":i=this.loadAccessor(e);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(e)});break;case"buffer":i=this.loadBuffer(e);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(e)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(e)});break;case"skin":i=this.loadSkin(e);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(e)});break;case"camera":i=this.loadCamera(e);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(t,e)}),!i)throw new Error("Unknown type: "+t);break}this.cache.add(n,i)}return i}getDependencies(t){let e=this.cache.get(t);if(!e){const n=this,i=this.json[t+(t==="mesh"?"es":"s")]||[];e=Promise.all(i.map(function(r,o){return n.getDependency(t,o)})),this.cache.add(t,e)}return e}loadBuffer(t){const e=this.json.buffers[t],n=this.fileLoader;if(e.type&&e.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+e.type+" buffer type is not supported.");if(e.uri===void 0&&t===0)return Promise.resolve(this.extensions[Qt.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,o){n.load(Er.resolveURL(e.uri,i.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+e.uri+'".'))})})}loadBufferView(t){const e=this.json.bufferViews[t];return this.getDependency("buffer",e.buffer).then(function(n){const i=e.byteLength||0,r=e.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(t){const e=this,n=this.json,i=this.json.accessors[t];if(i.bufferView===void 0&&i.sparse===void 0){const o=Tc[i.type],a=Os[i.componentType],c=i.normalized===!0,l=new a(i.count*o);return Promise.resolve(new Kt(l,o,c))}const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],c=Tc[i.type],l=Os[i.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,f=i.byteOffset||0,d=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,p=i.normalized===!0;let _,g;if(d&&d!==u){const m=Math.floor(f/d),b="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+m+":"+i.count;let v=e.cache.get(b);v||(_=new l(a,m*d,i.count*d/h),v=new zM(_,d/h),e.cache.add(b,v)),g=new uh(v,c,f%d/h,p)}else a===null?_=new l(i.count*c):_=new l(a,f,i.count*c),g=new Kt(_,c,p);if(i.sparse!==void 0){const m=Tc.SCALAR,b=Os[i.sparse.indices.componentType],v=i.sparse.indices.byteOffset||0,x=i.sparse.values.byteOffset||0,D=new b(o[1],v,i.sparse.count*m),w=new l(o[2],x,i.sparse.count*c);a!==null&&(g=new Kt(g.array.slice(),g.itemSize,g.normalized)),g.normalized=!1;for(let P=0,I=D.length;P<I;P++){const T=D[P];if(g.setX(T,w[P*c]),c>=2&&g.setY(T,w[P*c+1]),c>=3&&g.setZ(T,w[P*c+2]),c>=4&&g.setW(T,w[P*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}g.normalized=p}return g})}loadTexture(t){const e=this.json,n=this.options,r=e.textures[t].source,o=e.images[r];let a=this.textureLoader;if(o.uri){const c=n.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(t,r,a)}loadTextureImage(t,e,n){const i=this,r=this.json,o=r.textures[t],a=r.images[e],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];const l=this.loadImageSource(e,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);const f=(r.samplers||{})[o.sampler]||{};return h.magFilter=Zf[f.magFilter]||Qe,h.minFilter=Zf[f.minFilter]||zn,h.wrapS=Jf[f.wrapS]||ts,h.wrapT=Jf[f.wrapT]||ts,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Xe&&h.minFilter!==Qe,i.associations.set(h,{textures:t}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(t,e){const n=this,i=this.json,r=this.options;if(this.sourceCache[t]!==void 0)return this.sourceCache[t].then(u=>u.clone());const o=i.images[t],a=self.URL||self.webkitURL;let c=o.uri||"",l=!1;if(o.bufferView!==void 0)c=n.getDependency("bufferView",o.bufferView).then(function(u){l=!0;const f=new Blob([u],{type:o.mimeType});return c=a.createObjectURL(f),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+t+" is missing URI and bufferView");const h=Promise.resolve(c).then(function(u){return new Promise(function(f,d){let p=f;e.isImageBitmapLoader===!0&&(p=function(_){const g=new Re(_);g.needsUpdate=!0,f(g)}),e.load(Er.resolveURL(u,r.path),p,void 0,d)})}).then(function(u){return l===!0&&a.revokeObjectURL(c),ii(u,o),u.userData.mimeType=o.mimeType||WS(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),u});return this.sourceCache[t]=h,h}assignTexture(t,e,n,i){const r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[Qt.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[Qt.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const c=r.associations.get(o);o=r.extensions[Qt.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,c)}}return i!==void 0&&(o.colorSpace=i),t[e]=o,o})}assignFinalMaterial(t){const e=t.geometry;let n=t.material;const i=e.attributes.tangent===void 0,r=e.attributes.color!==void 0,o=e.attributes.normal===void 0;if(t.isPoints){const a="PointsMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new Gr,Cn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(a,c)),n=c}else if(t.isLine){const a="LineBasicMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new Ap,Cn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(a,c)),n=c}if(i||r||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=n.clone(),r&&(c.vertexColors=!0),o&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(n))),n=c}t.material=n}getMaterialType(){return Ge}loadMaterial(t){const e=this,n=this.json,i=this.extensions,r=n.materials[t];let o;const a={},c=r.extensions||{},l=[];if(c[Qt.KHR_MATERIALS_UNLIT]){const u=i[Qt.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),l.push(u.extendParams(a,r,e))}else{const u=r.pbrMetallicRoughness||{};if(a.color=new It(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){const f=u.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],qe),a.opacity=f[3]}u.baseColorTexture!==void 0&&l.push(e.assignTexture(a,"map",u.baseColorTexture,De)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(e.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),l.push(e.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(t)}),l.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(t,a)})))}r.doubleSided===!0&&(a.side=Be);const h=r.alphaMode||Ec.OPAQUE;if(h===Ec.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===Ec.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==Rn&&(l.push(e.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new pt(1,1),r.normalTexture.scale!==void 0)){const u=r.normalTexture.scale;a.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&o!==Rn&&(l.push(e.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==Rn){const u=r.emissiveFactor;a.emissive=new It().setRGB(u[0],u[1],u[2],qe)}return r.emissiveTexture!==void 0&&o!==Rn&&l.push(e.assignTexture(a,"emissiveMap",r.emissiveTexture,De)),Promise.all(l).then(function(){const u=new o(a);return r.name&&(u.name=r.name),ii(u,r),e.associations.set(u,{materials:t}),r.extensions&&Wi(i,u,r),u})}createUniqueName(t){const e=ue.sanitizeNodeName(t||"");return e in this.nodeNamesUsed?e+"_"+ ++this.nodeNamesUsed[e]:(this.nodeNamesUsed[e]=0,e)}loadGeometries(t){const e=this,n=this.extensions,i=this.primitiveCache;function r(a){return n[Qt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,e).then(function(c){return Qf(c,a,e)})}const o=[];for(let a=0,c=t.length;a<c;a++){const l=t[a],h=GS(l),u=i[h];if(u)o.push(u.promise);else{let f;l.extensions&&l.extensions[Qt.KHR_DRACO_MESH_COMPRESSION]?f=r(l):f=Qf(new be,l,e),i[h]={primitive:l,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(t){const e=this,n=this.json,i=this.extensions,r=n.meshes[t],o=r.primitives,a=[];for(let c=0,l=o.length;c<l;c++){const h=o[c].material===void 0?zS(this.cache):this.getDependency("material",o[c].material);a.push(h)}return a.push(e.loadGeometries(o)),Promise.all(a).then(function(c){const l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let d=0,p=h.length;d<p;d++){const _=h[d],g=o[d];let m;const b=l[d];if(g.mode===un.TRIANGLES||g.mode===un.TRIANGLE_STRIP||g.mode===un.TRIANGLE_FAN||g.mode===void 0)m=r.isSkinnedMesh===!0?new Sp(_,b):new re(_,b),m.isSkinnedMesh===!0&&m.normalizeSkinWeights(),g.mode===un.TRIANGLE_STRIP?m.geometry=jf(m.geometry,op):g.mode===un.TRIANGLE_FAN&&(m.geometry=jf(m.geometry,Al));else if(g.mode===un.LINES)m=new XM(_,b);else if(g.mode===un.LINE_STRIP)m=new fh(_,b);else if(g.mode===un.LINE_LOOP)m=new qM(_,b);else if(g.mode===un.POINTS)m=new ya(_,b);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(m.geometry.morphAttributes).length>0&&VS(m,r),m.name=e.createUniqueName(r.name||"mesh_"+t),ii(m,r),g.extensions&&Wi(i,m,g),e.assignFinalMaterial(m),u.push(m)}for(let d=0,p=u.length;d<p;d++)e.associations.set(u[d],{meshes:t,primitives:d});if(u.length===1)return r.extensions&&Wi(i,u[0],r),u[0];const f=new Ue;r.extensions&&Wi(i,f,r),e.associations.set(f,{meshes:t});for(let d=0,p=u.length;d<p;d++)f.add(u[d]);return f})}loadCamera(t){let e;const n=this.json.cameras[t],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?e=new Ve(E0.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(e=new ch(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(e.name=this.createUniqueName(n.name)),ii(e,n),Promise.resolve(e)}loadSkin(t){const e=this.json.skins[t],n=[];for(let i=0,r=e.joints.length;i<r;i++)n.push(this._loadNodeShallow(e.joints[i]));return e.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",e.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const r=i.pop(),o=i,a=[],c=[];for(let l=0,h=o.length;l<h;l++){const u=o[l];if(u){a.push(u);const f=new Vt;r!==null&&f.fromArray(r.array,l*16),c.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',e.joints[l])}return new Ma(a,c)})}loadAnimation(t){const e=this.json,n=this,i=e.animations[t],r=i.name?i.name:"animation_"+t,o=[],a=[],c=[],l=[],h=[];for(let u=0,f=i.channels.length;u<f;u++){const d=i.channels[u],p=i.samplers[d.sampler],_=d.target,g=_.node,m=i.parameters!==void 0?i.parameters[p.input]:p.input,b=i.parameters!==void 0?i.parameters[p.output]:p.output;_.node!==void 0&&(o.push(this.getDependency("node",g)),a.push(this.getDependency("accessor",m)),c.push(this.getDependency("accessor",b)),l.push(p),h.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(u){const f=u[0],d=u[1],p=u[2],_=u[3],g=u[4],m=[];for(let b=0,v=f.length;b<v;b++){const x=f[b],D=d[b],w=p[b],P=_[b],I=g[b];if(x===void 0)continue;x.updateMatrix&&x.updateMatrix();const T=n._createAnimationTracks(x,D,w,P,I);if(T)for(let y=0;y<T.length;y++)m.push(T[y])}return new Iy(r,void 0,m)})}createNodeMesh(t){const e=this.json,n=this,i=e.nodes[t];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const o=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,l=i.weights.length;c<l;c++)a.morphTargetInfluences[c]=i.weights[c]}),o})}loadNode(t){const e=this.json,n=this,i=e.nodes[t],r=n._loadNodeShallow(t),o=[],a=i.children||[];for(let l=0,h=a.length;l<h;l++)o.push(n.getDependency("node",a[l]));const c=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(o),c]).then(function(l){const h=l[0],u=l[1],f=l[2];f!==null&&h.traverse(function(d){d.isSkinnedMesh&&d.bind(f,XS)});for(let d=0,p=u.length;d<p;d++)h.add(u[d]);return h})}_loadNodeShallow(t){const e=this.json,n=this.extensions,i=this;if(this.nodeCache[t]!==void 0)return this.nodeCache[t];const r=e.nodes[t],o=r.name?i.createUniqueName(r.name):"",a=[],c=i._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(t)});return c&&a.push(c),r.camera!==void 0&&a.push(i.getDependency("camera",r.camera).then(function(l){return i._getNodeRef(i.cameraCache,r.camera,l)})),i._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(t)}).forEach(function(l){a.push(l)}),this.nodeCache[t]=Promise.all(a).then(function(l){let h;if(r.isBone===!0?h=new Tp:l.length>1?h=new Ue:l.length===1?h=l[0]:h=new Me,h!==l[0])for(let u=0,f=l.length;u<f;u++)h.add(l[u]);if(r.name&&(h.userData.name=r.name,h.name=o),ii(h,r),r.extensions&&Wi(n,h,r),r.matrix!==void 0){const u=new Vt;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);return i.associations.has(h)||i.associations.set(h,{}),i.associations.get(h).nodes=t,h}),this.nodeCache[t]}loadScene(t){const e=this.extensions,n=this.json.scenes[t],i=this,r=new Ue;n.name&&(r.name=i.createUniqueName(n.name)),ii(r,n),n.extensions&&Wi(e,r,n);const o=n.nodes||[],a=[];for(let c=0,l=o.length;c<l;c++)a.push(i.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let h=0,u=c.length;h<u;h++)r.add(c[h]);const l=h=>{const u=new Map;for(const[f,d]of i.associations)(f instanceof Cn||f instanceof Re)&&u.set(f,d);return h.traverse(f=>{const d=i.associations.get(f);d!=null&&u.set(f,d)}),u};return i.associations=l(r),r})}_createAnimationTracks(t,e,n,i,r){const o=[],a=t.name?t.name:t.uuid,c=[];Si[r.path]===Si.weights?t.traverse(function(f){f.morphTargetInfluences&&c.push(f.name?f.name:f.uuid)}):c.push(a);let l;switch(Si[r.path]){case Si.weights:l=Ys;break;case Si.rotation:l=js;break;case Si.position:case Si.scale:l=$s;break;default:switch(n.itemSize){case 1:l=Ys;break;case 2:case 3:default:l=$s;break}break}const h=i.interpolation!==void 0?kS[i.interpolation]:Ir,u=this._getArrayFromAccessor(n);for(let f=0,d=c.length;f<d;f++){const p=new l(c[f]+"."+Si[r.path],e.array,u,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(p),o.push(p)}return o}_getArrayFromAccessor(t){let e=t.array;if(t.normalized){const n=Wl(e.constructor),i=new Float32Array(e.length);for(let r=0,o=e.length;r<o;r++)i[r]=e[r]*n;e=i}return e}_createCubicSplineTrackInterpolant(t){t.createInterpolant=function(n){const i=this instanceof js?BS:Qp;return new i(this.times,this.values,this.getValueSize()/3,n)},t.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function KS(s,t,e){const n=t.attributes,i=new ui;if(n.POSITION!==void 0){const a=e.json.accessors[n.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(i.set(new C(c[0],c[1],c[2]),new C(l[0],l[1],l[2])),a.normalized){const h=Wl(Os[a.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=t.targets;if(r!==void 0){const a=new C,c=new C;for(let l=0,h=r.length;l<h;l++){const u=r[l];if(u.POSITION!==void 0){const f=e.json.accessors[u.POSITION],d=f.min,p=f.max;if(d!==void 0&&p!==void 0){if(c.setX(Math.max(Math.abs(d[0]),Math.abs(p[0]))),c.setY(Math.max(Math.abs(d[1]),Math.abs(p[1]))),c.setZ(Math.max(Math.abs(d[2]),Math.abs(p[2]))),f.normalized){const _=Wl(Os[f.componentType]);c.multiplyScalar(_)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}s.boundingBox=i;const o=new Gn;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=o}function Qf(s,t,e){const n=t.attributes,i=[];function r(o,a){return e.getDependency("accessor",o).then(function(c){s.setAttribute(a,c)})}for(const o in n){const a=Gl[o]||o.toLowerCase();a in s.attributes||i.push(r(n[o],a))}if(t.indices!==void 0&&!s.index){const o=e.getDependency("accessor",t.indices).then(function(a){s.setIndex(a)});i.push(o)}return te.workingColorSpace!==qe&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${te.workingColorSpace}" not supported.`),ii(s,t),KS(s,t,e),Promise.all(i).then(function(){return t.targets!==void 0?HS(s,t.targets,e):s})}const td={vest:new It(15905076),shorts:new It(1920607)},ed=3810328;function YS(s){const t=s.clone();return t.onBeforeCompile=e=>{e.uniforms.uVest={value:td.vest},e.uniforms.uVestOn={value:0},e.uniforms.uShorts={value:td.shorts},e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vRest;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vRest = position;`),e.fragmentShader=e.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vRest;
uniform vec3 uVest;
uniform float uVestOn;
uniform vec3 uShorts;`).replace("#include <map_fragment>",`#include <map_fragment>
        float ax = abs(vRest.x);
        float torso = smoothstep(1.00, 1.02, vRest.y) * (1.0 - smoothstep(1.53, 1.55, vRest.y)) * (1.0 - smoothstep(0.24, 0.26, ax));
        torso *= 1.0 - (1.0 - smoothstep(0.075, 0.09, length(vec2(vRest.x, (vRest.y - 1.55) * 0.9)))) * step(0.0, vRest.z);
        float sleeve = smoothstep(1.30, 1.32, vRest.y) * (1.0 - smoothstep(0.40, 0.42, ax)) * step(0.2, ax);
        float vest = max(torso, sleeve) * uVestOn;
        float shorts = smoothstep(0.64, 0.66, vRest.y) * (1.0 - smoothstep(1.02, 1.04, vRest.y)) * (1.0 - smoothstep(0.30, 0.32, ax));
        diffuseColor.rgb = mix(diffuseColor.rgb, uShorts, shorts);
        diffuseColor.rgb = mix(diffuseColor.rgb, uVest, vest);
        vCloth = max(vest, shorts);`).replace("#include <normal_fragment_maps>",`#include <normal_fragment_maps>
 normal = normalize(mix(normal, nonPerturbedNormal, vCloth * 0.85));`).replace("void main() {",`float vCloth = 0.0;
void main() {`)},t.customProgramCacheKey=()=>"surfer-outfit",t}function nd(s,t){const e=s.material.clone();e.color.set(t),s.material=e}async function jS(s,t){const e=new dS;typeof document>"u"&&e.register(()=>({name:"surfer-headless",loadTexture:()=>Promise.resolve(null)}));const[n,i]=await Promise.all([e.parseAsync(s,""),e.parseAsync(t,"")]),r=new Ue;r.name="surfer-model",r.add(n.scene);const o=[];let a=null;if(n.scene.traverse(d=>{const p=d;if(!p.isSkinnedMesh)return;const _=p.material.name;_==="MI_Hair_1"&&nd(p,ed),_==="MI_Superhero_Male"&&(p.material=YS(p.material),a=p),o.push(p)}),!a)throw new Error("surfer body mesh not found");const c=a;o.splice(o.indexOf(c),1),o.unshift(c);const l=c.skeleton,h=new Map(l.bones.map(d=>[d.name,d])),u=[];i.scene.traverse(d=>{d.isSkinnedMesh&&u.push(d)});for(const d of u){const p=d.skeleton.bones.map(_=>h.get(_.name)??_);d.bind(new Ma(p,d.skeleton.boneInverses),d.bindMatrix),nd(d,ed),r.add(d),o.push(d)}for(const d of o)d.castShadow=!0,d.frustumCulled=!1;const f=d=>{const p=h.get(d);if(!p)throw new Error("surfer bone "+d);return p};return r.updateMatrixWorld(!0),{root:r,meshes:o,skeleton:l,bone:f}}async function $S(s="./models/"){const t=async i=>{const r=await fetch(s+i);if(!r.ok)throw new Error(`${i}: HTTP ${r.status}`);return r.arrayBuffer()},[e,n]=await Promise.all([t("surfer-body.glb"),t("surfer-hair.glb")]);return jS(e,n)}function tm(s){return{x:-Math.cos(s),y:-Math.sin(s)}}function ZS(s,t,e){const n=Number.isFinite(e)?e:0,i=tm(n),r=s.x*i.x+s.y*i.y;return t.x*i.x+t.y*i.y>=r?{back:s,front:t}:{back:t,front:s}}function id(s,t){return Math.atan2(-(t.y-s.y),-(t.x-s.x))}function JS(s,t){return vr(t-s)}function QS(s,t){return!(t>1)||!Number.isFinite(s)?0:Zt((s/t-1.1)/.4,0,1)}const t1=.6,e1=3.6,n1=13;function sd(s){return!Number.isFinite(s)||Math.abs(s)<t1?0:Math.sign(s)*Zt(Math.abs(s)*e1,0,n1)}const i1=350,s1=40,wc=8;function r1(s,t){if(!s||!t||s.foot!=="front"||t.foot!=="back")return!1;const e=t.t-s.t;return e>=s1&&e<=i1}const o1=80;function a1(s,t,e,n){if(!(e>0)||s.length<2)return 0;let i=-1;for(let p=s.length-1;p>=0;p--)if(s[p].t<=t){i=p;break}if(i<1)return 0;const r=t-o1;let o=i;for(;o>0&&s[o-1].t>=r&&s[o-1].t<=s[o].t;)o--;const a=s.slice(o,i+1);if(o===i){const p=s[i-1],_=s[i],g=_.t-p.t;if(!(g>0))return 0;const m=Zt((r-p.t)/g,0,1);a.unshift({t:p.t+g*m,x:p.x+(_.x-p.x)*m,y:p.y+(_.y-p.y)*m})}const c=a[0],l=a[a.length-1],h=l.t-c.t;if(!(h>=4))return 0;const u=Math.hypot(l.x-c.x,l.y-c.y)/e*(1e3/h);let f;if(n&&Number.isFinite(n.x)&&Number.isFinite(n.y)){let p=0;for(let _=0;_+1<a.length;_++){const g=a[_].x-n.x,m=a[_].y-n.y,b=a[_+1].x-a[_].x,v=a[_+1].y-a[_].y;p-=g*v-m*b}f=Math.sign(p)}else f=Math.sign(-(l.y-c.y));const d=f*u;return Number.isFinite(d)&&d!==0?d:0}const em=Math.PI/6,nm=Math.PI/3,Ah=1.25,da=Math.PI/180,Xl=[75*da,125*da],wh=1.86,c1=s=>(s[0]+s[1])/2,im=wh-Ah,rd=(wh*c1(Xl)-Ah*(em+nm)/2)/im,od=[rd-22.5*da,rd+22.5*da];function Rc(s,t,e){if(s<=t)return 0;const n=e-t;if(s>=e)return n/2+(s-e);const i=(s-t)/n;return n*(i*i*i-i*i*i*i/2)}function Rh(s,t){if(!Number.isFinite(s)||!Number.isFinite(t))return 0;const e=Math.abs(s),n=Ah*Rc(e,em,nm)-wh*Rc(e,Xl[0],Xl[1])+im*Rc(e,od[0],od[1]);return Math.sign(s)*t*(e+n)}const Cc=.02,l1=1/8;function Pc(s){if(!Number.isFinite(s))return 0;const t=Math.abs(s);return t<=Cc?0:Math.sign(s)*Zt((t-Cc)/(l1-Cc),0,1)}const h1=300,ad=20,u1=3.2,cd=[0,1.2,2.4],f1=250,d1=.3,p1=3,m1=1.3,Ch=60,Rr=3,Ph=1.5,Lh=5,g1=60*(Math.PI/180),_1=.1,Lc=Math.PI/2,x1=.1,Uo=.03,v1=45*Math.PI/180,ld=25*Math.PI/180,M1=.1*Math.PI/180,y1=20*Math.PI/180,Fo=2*Ch,b1=10,S1=250,Oo=48*(Math.PI/180),T1=68*(Math.PI/180),E1=5,hd=[21*(Math.PI/180),35*(Math.PI/180)],ud=[45*(Math.PI/180),70*(Math.PI/180)],A1=.1,fd=4*Ch,Ic=180*(Math.PI/180),dd=25*(Math.PI/180),pd=.42;function w1(s){const t=Math.abs(s);if(t<=Ic)return s;const e=t-Ic;return Math.sign(s)*(Ic+(1-pd)*dd*Math.tanh(e/dd)+pd*e)}function md(s,t,e){if(s<=t)return 0;const n=e-t;if(s>=e)return n/2+(s-e);const i=(s-t)/n;return n*(i*i*i-i*i*i*i/2)}function R1(s,t){if(!Number.isFinite(s)||!(t>0))return 0;const e=Math.abs(s);if(e===0)return 0;let n=0,i=e/t/.3+1e-6;for(let r=0;r<60;r++){const o=(n+i)/2;Rh(o,t)<e?n=o:i=o}return Math.sign(s)*(n+i)/2}function C1(s,t,e){if(!Number.isFinite(s)||!Number.isFinite(t))return NaN;const n=Math.abs(s),i=T1-Oo,r=Math.sign(s)*(n<=Oo?n:Oo+i*Math.tanh((n-Oo)/i)),o=Math.abs(t),a=Math.sign(t)*E1*(md(o,hd[0],hd[1])-(1-A1)*md(o,ud[0],ud[1])),c=Rh(r,e)+a,l=w1(c);return a===0&&l===c?r:R1(l,e)}const P1=.2,L1=1*(Math.PI/180),I1=3*(Math.PI/180),Dc=.2,D1=50;class N1{constructor(t,e,n={}){M(this,"_mode","hand");M(this,"_thumbTurnCm",Rr);M(this,"_gain",m1);M(this,"grip",!1);M(this,"stall",0);M(this,"drive",0);M(this,"keyFlick",cd[0]);M(this,"keySign",1);M(this,"ptrs",new Map);M(this,"feet",null);M(this,"h0",0);M(this,"aPrev",0);M(this,"accum",0);M(this,"dist0",0);M(this,"slideAcc",0);M(this,"resB",0);M(this,"resF",0);M(this,"rotAct",0);M(this,"lastDist",0);M(this,"rotT",0);M(this,"latched",!1);M(this,"thumbGrip",!1);M(this,"tLatched",!1);M(this,"tTot",0);M(this,"tEff",0);M(this,"tAcc",0);M(this,"tSep0",0);M(this,"tVx",0);M(this,"tVy",0);M(this,"tSbar",0);M(this,"tThr",0);M(this,"tPendF",0);M(this,"tPendB",0);M(this,"tPendT",0);M(this,"tRotSum",0);M(this,"tRotT",0);M(this,"tEpSign",0);M(this,"tEpNet",0);M(this,"tEpCommit",!1);M(this,"tHeld",0);M(this,"lastLift",null);M(this,"liftPivot",null);M(this,"liftWatch",null);M(this,"gestureMax",0);M(this,"multi",!1);M(this,"threeSince",null);M(this,"debugFired",!1);M(this,"mouseDown",null);M(this,"keyGrip",!1);M(this,"keyUp",!1);M(this,"keyDown",!1);M(this,"keyShift",!1);M(this,"keyF",!1);M(this,"keyAccum",0);M(this,"queue",[]);M(this,"now");M(this,"screenH");M(this,"offs",[]);this.el=t,this.getBoardHeading=e,n.gain!==void 0&&(this.gain=n.gain),n.mode==="thumbs"&&(this._mode="thumbs"),n.thumbTurnCm!==void 0&&(this.thumbTurnCm=n.thumbTurnCm),this.now=n.now??(()=>performance.now()),this.screenH=n.screenHeight??(()=>typeof window<"u"?window.innerHeight:800);const i=n.keyTarget!==void 0?n.keyTarget:typeof window<"u"?window:null,r=n.docTarget!==void 0?n.docTarget:typeof document<"u"?document:null;this.on(t,"pointerdown",o=>this.onDown(o)),this.on(t,"pointermove",o=>this.onMove(o)),this.on(t,"pointerup",o=>this.onUp(o,!1)),this.on(t,"pointercancel",o=>this.onUp(o,!0)),i&&(this.on(i,"keydown",o=>this.onKey(o,!0)),this.on(i,"keyup",o=>this.onKey(o,!1)),this.on(i,"blur",()=>this.clearAll())),r&&this.on(r,"visibilitychange",()=>{(r.visibilityState===void 0||r.visibilityState!=="visible")&&this.clearAll()})}get mode(){return this._mode}set mode(t){t!=="hand"&&t!=="thumbs"||t===this._mode||(this._mode=t,this.ptrs.size>0&&(this.feet&&this.endGrip(),this.lastLift=null,this.liftWatch=null,this.liftPivot=null,this.multi=!0))}get thumbTurnCm(){return this._thumbTurnCm}set thumbTurnCm(t){Number.isFinite(t)&&(this._thumbTurnCm=Math.min(Lh,Math.max(Ph,t)))}get gain(){return this._gain}set gain(t){Number.isFinite(t)&&(this._gain=Math.min(p1,Math.max(d1,t)))}on(t,e,n){t.addEventListener(e,n),this.offs.push(()=>t.removeEventListener(e,n))}dispose(){for(const t of this.offs)t();this.offs.length=0}get targetHeading(){return this.feet?this.h0+Rh(this.accum,this.gain):this.keyGrip?this.h0+this.keyAccum:null}get pairRotation(){return this.feet?this.accum:0}get pointers(){const t=[];for(const e of this.ptrs.values()){const n=this.feet?e.id===this.feet.back?"B":e.id===this.feet.front?"F":null:null;t.push({id:e.id,x:e.x,y:e.y,label:n})}return t}drain(){const t=this.queue;return this.queue=[],t}rebase(t){Number.isFinite(t)&&(this.h0=t,this.accum=0,this.keyAccum=0,this.feet&&(this.latchAngle(),this.thumbGrip&&this.latchThumbs()))}checkDebugHold(){this.threeSince===null||this.debugFired||this.now()-this.threeSince>=f1&&(this.debugFired=!0,this.multi=!0,this.queue.push({type:"debug"}))}update(t){if(this.checkDebugHold(),!(!(t>0)||!Number.isFinite(t))){if(this.keyGrip&&!this.feet){const e=(this.keyUp?1:0)-(this.keyDown?1:0);this.keyAccum+=e*u1*t,this.stall=this.keyShift?1:0,this.drive=this.keyF?1:0}if(this.thumbGrip&&this.feet&&this.tEpSign!==0&&!this.tEpCommit&&!(this.tRotSum*Math.exp(-Math.max(0,this.now()-this.tRotT)/1e3/Uo)/Uo*this.tEpSign>=ld)&&(this.tEpSign=this.tEpNet=0,this.tEpCommit=!1,this.tHeld!==0)){this.tHeld=0;const n=this.screenH(),i=Pc(this.tThr/(n>0?n:800));Number.isFinite(i)&&(this.stall=Math.max(0,-i),this.drive=Math.max(0,i))}}}onDown(t){var i,r,o;if((i=t.preventDefault)==null||i.call(t),t.pointerType==="mouse"){this.mouseDown={id:t.pointerId,x0:t.clientX,y0:t.clientY,maxMove:0};return}if(this.ptrs.has(t.pointerId))return;try{(o=(r=this.el).setPointerCapture)==null||o.call(r,t.pointerId)}catch{}const e=this.now();this.ptrs.set(t.pointerId,{id:t.pointerId,x:t.clientX,y:t.clientY,x0:t.clientX,y0:t.clientY,t0:e,maxMove:0,hist:[{t:e,x:t.clientX,y:t.clientY}]});const n=this.ptrs.size;if(this.gestureMax=Math.max(this.gestureMax,n),n===3){this.threeSince===null&&(this.threeSince=e);return}n===2&&!this.feet&&!this.keyGrip&&this.startGrip()}startGrip(){const[t,e]=[...this.ptrs.values()],n=this.getBoardHeading();this.thumbGrip=this._mode==="thumbs";const{back:i,front:r}=this.thumbGrip?t.x<=e.x?{back:e,front:t}:{back:t,front:e}:ZS(t,e,n);this.feet={back:i.id,front:r.id},this.h0=Number.isFinite(n)?n:0,this.slideAcc=0,this.resB=0,this.resF=0,this.rotAct=0,this.rotT=this.now(),this.accum=0,this.dist0=0,this.latched=!1,this.latchAngle(),this.tSep0=0,this.thumbGrip&&this.latchThumbs(),this.stall=0,this.drive=0,this.grip=!0,this.lastLift=null,this.liftWatch=null,this.liftPivot=null,this.queue.push({type:"grip"})}latchAngle(){const t=this.ptrs.get(this.feet.back),e=this.ptrs.get(this.feet.front);if(!t||!e)return;const n=Math.hypot(e.x-t.x,e.y-t.y);n>=wc?(this.aPrev=id(t,e),this.latched=!0,this.dist0===0&&(this.dist0=n)):this.latched=!1}latchThumbs(){this.tTot=this.tAcc=this.tEff=0,this.tThr=0,this.tPendF=this.tPendB=0,this.tPendT=this.now(),this.tRotSum=0,this.tRotT=this.tPendT,this.tEpSign=this.tEpNet=this.tHeld=0,this.tEpCommit=!1,this.tLatched=!1,this.latchThumbLine()}latchThumbLine(){const t=this.ptrs.get(this.feet.back),e=this.ptrs.get(this.feet.front);if(!t||!e)return;const n=t.x-e.x,i=t.y-e.y,r=Math.hypot(n,i);if(!Number.isFinite(r)||r<Fo){this.tLatched=!1;return}this.tVx=n,this.tVy=i,this.tSbar=r,this.tLatched=!0,this.tSep0===0&&(this.tSep0=r)}updateThumbs(t,e,n){const i=this.ptrs.get(this.feet.back),r=this.ptrs.get(this.feet.front),o=t?{x:e,y:n}:i,a=t?r:{x:e,y:n},c=a.x-o.x,l=a.y-o.y,h=Math.hypot(c,l),u=this.now();this.tRotSum*=Math.exp(-Math.max(0,u-this.tRotT)/1e3/Uo),this.tRotT=u;const f=r.x-i.x,d=r.y-i.y,p=Math.atan2(c*d-l*f,c*f+l*d);Number.isFinite(p)&&Math.abs(p)<=Lc&&h>=Fo&&Math.hypot(f,d)>=Fo&&(this.tRotSum+=p);const _=this.tRotSum/Uo;this.tEpSign!==0&&!(_*this.tEpSign>=ld)&&(this.tEpSign=this.tEpNet=this.tHeld=0,this.tEpCommit=!1),this.tEpSign===0&&Math.abs(_)>=v1&&(this.tEpSign=Math.sign(_));const g=this.tEpSign!==0&&p*this.tEpSign>=M1;g&&(this.tEpNet+=p);const m=this.tThr;if(Number.isFinite(h)&&h>=wc){const U=this.now(),V=Math.exp(-Math.max(0,U-this.tPendT)/1e3/x1);this.tPendT=U,this.tPendF*=V,this.tPendB*=V;const q=t?i:r,j=q.x-e,Z=q.y-n,z=(j*c+Z*l)/h,st=Math.abs(j*l-Z*c)/h,ot=Math.min(1,1.5*Math.tan(Math.min(Math.abs(this.tTot),Math.PI/4)));if(Number.isFinite(z)&&Number.isFinite(st)&&z!==0){const _t=t?-z:z;let Rt=Math.sign(_t)*Math.min(Math.abs(_t),st*ot);t||(this.tThr+=_t);const kt=t?this.tPendF:this.tPendB;if(Rt!==0&&Math.sign(Rt)===Math.sign(kt)){const K=Math.min(Math.abs(Rt),Math.abs(kt));this.tThr-=Math.sign(Rt)*K,t?this.tPendF-=Math.sign(Rt)*K:this.tPendB-=Math.sign(Rt)*K,Rt-=Math.sign(Rt)*K}t?this.tPendB+=Rt:this.tPendF+=Rt}}g&&(this.tHeld+=this.tThr-m),this.tEpSign!==0&&!this.tEpCommit&&Math.abs(this.tEpNet)>=y1&&(this.tEpCommit=!0),this.tEpCommit&&(this.tThr-=this.tHeld,this.tHeld=0);const b=i.x-r.x,v=i.y-r.y,x=Math.hypot(b,v);if(!Number.isFinite(x)||x<Fo)this.tLatched=!1;else if(!this.tLatched)this.latchThumbLine();else{const U=this.tVx*v-this.tVy*b,V=this.tVx*b+this.tVy*v,q=Math.atan2(U,V);Math.abs(q)<=Lc&&this.tSep0>0&&(this.tTot+=q,this.tEff+=q*Math.min(1,this.tSbar*this.tSbar/(fd*fd)),this.tAcc+=q*this.tSbar*this.tSbar/this.tSep0),this.tVx=b,this.tVy=v,Math.abs(x-this.tSbar)>b1&&(this.tSbar=x)}const D=this.tAcc/Ch,w=_1,P=Math.abs(D),T=Math.sign(D)*(P>=2*w?P:2*Math.max(0,P-w))*g1/this._thumbTurnCm,y=C1(T,this.tEff,this._gain);Number.isFinite(y)&&(this.accum=y);const L=this.screenH(),k=Pc((this.tThr-this.tHeld)/(L>0?L:800));Number.isFinite(k)&&(this.stall=Math.max(0,-k),this.drive=Math.max(0,k))}onMove(t){var r;if(t.pointerType==="mouse"){const o=this.mouseDown;o&&o.id===t.pointerId&&(o.maxMove=Math.max(o.maxMove,Math.hypot(t.clientX-o.x0,t.clientY-o.y0)));return}const e=this.ptrs.get(t.pointerId);if(!e)return;(r=t.preventDefault)==null||r.call(t);const n=e.x,i=e.y;if(this.movePtr(e,t.clientX,t.clientY),this.feet&&(e.id===this.feet.back||e.id===this.feet.front))if(this.thumbGrip)this.updateThumbs(e.id===this.feet.back,n,i);else{const o=this.updatePair();this.addSlide(e.id===this.feet.back,e.x-n,e.y-i,o),this.refreshDriveStall()}this.checkDebugHold()}movePtr(t,e,n){if(!Number.isFinite(e)||!Number.isFinite(n))return;t.x=e,t.y=n,t.maxMove=Math.max(t.maxMove,Math.hypot(e-t.x0,n-t.y0));const i=this.now();for(t.hist.push({t:i,x:e,y:n});t.hist.length>2&&t.hist[0].t<i-S1;)t.hist.shift()}addSlide(t,e,n,i){const r=this.now(),o=Math.max(0,(r-this.rotT)/1e3);this.rotT=r,this.rotAct=this.rotAct*Math.exp(-o/P1)+i,i!==0&&(this.slideAcc*=Math.exp(-Math.abs(i)/Dc),this.resB*=Math.exp(-Math.abs(i)/Dc),this.resF*=Math.exp(-Math.abs(i)/Dc));const a=1-X(L1,I1,Math.abs(this.rotAct)),c=this.getBoardHeading(),l=tm(Number.isFinite(c)?c:this.h0),h=this.screenH(),u=a*(e*l.x+n*l.y)/(h>0?h:800);if(!Number.isFinite(u)||u===0)return;t?this.resB+=u:this.resF+=u;const f=Math.min(Math.abs(this.resB),Math.abs(this.resF));f>0&&Math.sign(this.resB)===Math.sign(this.resF)&&(this.slideAcc+=Math.sign(this.resB)*f),this.resB-=Math.sign(this.resB)*f,this.resF-=Math.sign(this.resF)*f}updatePair(){let t=0;const e=this.ptrs.get(this.feet.back),n=this.ptrs.get(this.feet.front),i=Math.hypot(n.x-e.x,n.y-e.y);if(i<wc)this.latched=!1;else if(!this.latched)this.latchAngle();else{const r=id(e,n),o=JS(this.aPrev,r);Math.abs(o)<=Lc&&(this.accum+=o,t=o),this.aPrev=r}return this.lastDist=i,t}refreshDriveStall(){const t=Pc(this.slideAcc),e=this.dist0>0?QS(this.lastDist,Math.max(this.dist0,D1)):0;this.stall=Math.max(0,-t),this.drive=Math.max(e,t)}onUp(t,e){var o,a,c;if(t.pointerType==="mouse"){const l=this.mouseDown;this.mouseDown=null,!e&&l&&l.id===t.pointerId&&Math.max(l.maxMove,Math.hypot(t.clientX-l.x0,t.clientY-l.y0))<ad&&this.queue.push({type:"tap",x:t.clientX,y:t.clientY});return}const n=this.ptrs.get(t.pointerId);if(!n)return;this.checkDebugHold(),e||this.movePtr(n,t.clientX,t.clientY);const i=this.now();try{(a=(o=this.el).releasePointerCapture)==null||a.call(o,t.pointerId)}catch{}const r=this.feet?n.id===this.feet.front?"front":n.id===this.feet.back?"back":null:this.liftWatch===n.id?((c=this.lastLift)==null?void 0:c.foot)==="front"?"back":"front":null;if(e)r&&(this.endGrip(),this.lastLift=null,this.liftWatch=null,this.liftPivot=null);else if(r&&this.feet){const l=r==="front"?this.feet.back:this.feet.front;this.endGrip(),this.lastLift={foot:r,t:i},this.liftWatch=l,this.liftPivot={x:n.x,y:n.y}}else if(r&&this.liftWatch===n.id){const l={foot:r,t:i};if(!this.multi&&r1(this.lastLift,l)){const h=a1(n.hist,i,this.screenH(),this.liftPivot??void 0);this.queue.push({type:"ollie",flick:h,spin:sd(h)})}this.lastLift=null,this.liftWatch=null,this.liftPivot=null}!e&&!this.multi&&this.ptrs.size===1&&this.gestureMax===1&&i-n.t0<h1&&n.maxMove<ad&&this.queue.push({type:"tap",x:n.x,y:n.y}),this.ptrs.delete(n.id),this.ptrs.size<3&&(this.threeSince=null,this.debugFired=!1),this.ptrs.size===0&&(this.gestureMax=0,this.multi=!1),this.ptrs.size===2&&!this.feet&&!this.keyGrip&&this.startGrip()}endGrip(){this.feet=null,this.grip=this.keyGrip,this.stall=0,this.drive=0,this.accum=0,this.latched=!1,this.slideAcc=this.resB=this.resF=0}clearAll(){this.ptrs.clear(),this.feet=null,this.lastLift=null,this.liftWatch=null,this.liftPivot=null,this.gestureMax=0,this.multi=!1,this.threeSince=null,this.debugFired=!1,this.latched=!1,this.mouseDown=null,this.keyGrip=this.keyUp=this.keyDown=this.keyShift=this.keyF=!1,this.keyAccum=0,this.accum=0,this.grip=!1,this.stall=0,this.drive=0}onKey(t,e){var i,r,o;const n=t.key;if(n===" "||t.code==="Space"){if((i=t.preventDefault)==null||i.call(t),e){if(t.repeat||this.keyGrip||this.feet)return;this.keyGrip=!0,this.grip=!0;const a=this.getBoardHeading();this.h0=Number.isFinite(a)?a:0,this.keyAccum=0,this.stall=this.keyShift?1:0,this.drive=this.keyF?1:0,this.queue.push({type:"grip"})}else if(this.keyGrip)if(this.keyGrip=!1,this.grip=!!this.feet,this.stall=0,this.drive=0,this.keyAccum=0,this.ptrs.size===2&&!this.feet)this.startGrip();else{const a=this.keyFlick;this.queue.push({type:"ollie",flick:a,spin:sd(a)})}return}n==="ArrowUp"?(this.keyUp=e,(r=t.preventDefault)==null||r.call(t)):n==="ArrowDown"?(this.keyDown=e,(o=t.preventDefault)==null||o.call(t)):n==="Shift"?(this.keyShift=e,this.keyGrip&&!this.feet&&(this.stall=e?1:0)):n==="f"||n==="F"?(this.keyF=e,this.keyGrip&&!this.feet&&(this.drive=e?1:0)):e&&(n==="0"||n==="1"||n==="2")?this.keyFlick=this.keySign*cd[Number(n)]:e&&(n==="x"||n==="X")&&(this.keySign=-this.keySign,this.keyFlick=-this.keyFlick)}}const gd=s=>({x:-Math.cos(s),y:-Math.sin(s)});class U1{constructor(t=document.body){M(this,"canvas");M(this,"ctx");M(this,"lines",[]);M(this,"visible",!0);M(this,"fps",0);M(this,"frames",0);M(this,"acc",0);M(this,"dpr",1);M(this,"shapes",null);this.canvas=document.createElement("canvas"),this.canvas.id="debug",t.appendChild(this.canvas),this.ctx=this.canvas.getContext("2d"),this.resize()}resize(){this.dpr=Math.min(window.devicePixelRatio||1,2),this.canvas.width=Math.round(window.innerWidth*this.dpr),this.canvas.height=Math.round(window.innerHeight*this.dpr)}setLines(t){this.lines=t}setShapes(t){this.shapes=t}toggle(t){this.visible=t??!this.visible,this.canvas.style.display=this.visible?"block":"none"}frame(t){if(this.frames++,this.acc+=t,this.acc>=.5&&(this.fps=this.frames/this.acc,this.frames=0,this.acc=0),!this.visible)return;const e=this.ctx;e.setTransform(this.dpr,0,0,this.dpr,0,0),e.clearRect(0,0,this.canvas.width,this.canvas.height),this.shapes&&this.drawShapes(e,this.shapes);const n=[`${this.fps.toFixed(0)} fps`,...this.lines];e.font="12px ui-monospace, Menlo, monospace";let i=0;for(const r of n)i=Math.max(i,e.measureText(r).width);e.fillStyle="rgba(0,0,0,0.45)",e.fillRect(6,6,i+12,n.length*15+8),e.fillStyle="#e8fff6",n.forEach((r,o)=>e.fillText(r,12,22+o*15))}drawShapes(t,e){const n=this.canvas.width/this.dpr,i=this.canvas.height/this.dpr;t.save(),t.lineCap="round",t.lineJoin="round";const r=n/2,o=i-100,a=gd(e.board),c=46;t.strokeStyle="rgba(255,214,120,0.95)",t.lineWidth=10,t.beginPath(),t.moveTo(r-a.x*c,o-a.y*c),t.lineTo(r+a.x*c,o+a.y*c),t.stroke(),t.fillStyle="#ff7a59",t.beginPath(),t.arc(r+a.x*c,o+a.y*c,6,0,Math.PI*2),t.fill(),e.target!==null&&this.arrow(t,r,o,e.target,64,"rgba(120,255,200,0.95)");const l=e.fingers.find(u=>u.label==="B"),h=e.fingers.find(u=>u.label==="F");l&&h&&(t.strokeStyle="rgba(255,255,255,0.8)",t.lineWidth=3,t.beginPath(),t.moveTo(l.x,l.y),t.lineTo(h.x,h.y),t.stroke(),e.target!==null&&this.arrow(t,(l.x+h.x)/2,(l.y+h.y)/2,e.target,70,"rgba(120,255,200,0.95)")),t.font="bold 18px system-ui, sans-serif",t.textAlign="center",t.textBaseline="middle";for(const u of e.fingers)t.fillStyle=u.label==="F"?"rgba(255,122,89,0.35)":u.label==="B"?"rgba(80,170,255,0.35)":"rgba(255,255,255,0.2)",t.strokeStyle="rgba(255,255,255,0.9)",t.lineWidth=2,t.beginPath(),t.arc(u.x,u.y,32,0,Math.PI*2),t.fill(),t.stroke(),u.label&&(t.fillStyle="#fff",t.fillText(u.label,u.x,u.y));t.restore()}arrow(t,e,n,i,r,o){const a=gd(i),c=e+a.x*r,l=n+a.y*r;t.strokeStyle=o,t.fillStyle=o,t.lineWidth=3,t.beginPath(),t.moveTo(e,n),t.lineTo(c,l),t.stroke();const h=-a.y,u=a.x;t.beginPath(),t.moveTo(c+a.x*10,l+a.y*10),t.lineTo(c+h*7,l+u*7),t.lineTo(c-h*7,l-u*7),t.closePath(),t.fill()}}const sm="surf.controlMode",rm="surf.thumbTurnCm",Xr=()=>{try{return typeof localStorage<"u"?localStorage:null}catch{return null}};function F1(s=Xr()){try{return(s==null?void 0:s.getItem(sm))==="thumbs"?"thumbs":"hand"}catch{return"hand"}}function O1(s,t=Xr()){try{t==null||t.setItem(sm,s)}catch{}}const Ih=s=>Math.min(Lh,Math.max(Ph,s));function B1(s=Xr()){try{const t=s==null?void 0:s.getItem(rm);if(t==null||t.trim()==="")return Rr;const e=Number(t);return Number.isFinite(e)?Ih(e):Rr}catch{return Rr}}function k1(s,t=Xr()){if(Number.isFinite(s))try{t==null||t.setItem(rm,String(Ih(s)))}catch{}}const _d={hand:"1 hand",thumbs:"2 thumbs"},z1=["pointerdown","pointermove","pointerup","pointercancel","touchstart","touchmove","touchend"],Nc=s=>{for(const t of z1)s.addEventListener(t,e=>e.stopPropagation())};function H1(s,t){const e=()=>Xr(),n={position:"fixed",top:"8px",zIndex:"20",font:"600 14px system-ui, sans-serif",color:"#fff",background:"rgba(10,30,45,0.45)",border:"1px solid rgba(255,255,255,0.45)",borderRadius:"8px",whiteSpace:"nowrap",touchAction:"manipulation"},i=document.createElement("button");i.textContent=_d[s.mode],Object.assign(i.style,{...n,right:"96px",padding:"8px 12px"}),Nc(i);const r=document.createElement("button");r.textContent="⚙",r.setAttribute("aria-label","thumb sensitivity"),Object.assign(r.style,{...n,padding:"8px 10px",lineHeight:"1"}),Nc(r);const o=document.createElement("div");Object.assign(o.style,{...n,top:"48px",right:"96px",padding:"8px 10px",display:"none",alignItems:"center",gap:"8px",font:"600 12px system-ui, sans-serif",background:"rgba(10,30,45,0.55)",touchAction:"none"}),Nc(o);const a=document.createElement("span");a.textContent="soft";const c=document.createElement("span");c.textContent="sharp";const l=document.createElement("input");l.type="range",l.setAttribute("aria-label","thumb sensitivity: soft to sharp"),l.min=String(-Lh),l.max=String(-Ph),l.step="0.1",Object.assign(l.style,{width:"140px",touchAction:"none",accentColor:"#7fd3ff"});const h=()=>l.value=String(-(s.thumbTurnCm??Rr));l.addEventListener("input",()=>{const p=Ih(-Number(l.value));Number.isFinite(p)&&(s.thumbTurnCm=p,k1(s.thumbTurnCm??p,e()))}),o.append(a,l,c);const u=()=>o.style.display!=="none",f=p=>{p&&h(),o.style.display=p?"flex":"none"},d=()=>{const p=s.mode==="thumbs";i.textContent=_d[s.mode],r.style.display=p?"block":"none",r.style.right=`${96+i.offsetWidth+6}px`,p||f(!1)};return i.addEventListener("click",p=>{p.stopPropagation(),s.mode=s.mode==="hand"?"thumbs":"hand",O1(s.mode,e()),d(),i.blur()}),r.addEventListener("click",p=>{p.stopPropagation(),f(!u()),r.blur()}),l.addEventListener("change",()=>l.blur()),document.addEventListener("pointerdown",p=>{if(!u())return;const _=p.target;_&&(o.contains(_)||r.contains(_))||f(!1)},!0),document.body.append(i,r,o),d(),i}const Nn=6,hn=8,Ti=8,V1=2;function xd(s,t){const e=new Uint32Array((s-1)*(t-1)*6);let n=0;for(let i=0;i<s-1;i++)for(let r=0;r<t-1;r++){const o=i*t+r,a=(i+1)*t+r,c=i*t+r+1,l=(i+1)*t+r+1;e[n++]=o,e[n++]=a,e[n++]=c,e[n++]=a,e[n++]=l,e[n++]=c}return e}function Uc(s,t,e){const n=s/t;return Ne(s,e)*(1-n)+Ne(s-t,e)*n}function G1(){if(typeof document>"u")return null;const s=256,t=256,e=document.createElement("canvas");e.width=s,e.height=t;const n=e.getContext("2d");if(!n)return null;const i=n.createImageData(s,t);for(let o=0;o<s;o++){const a=o/10,c=s/10,l=.6+.4*X(.2,.7,Uc(a*.6,c*.6,41));for(let h=0;h<t;h++){const u=h/t,f=.65*Uc(a+Math.sin(u*2*Math.PI)*.4,c,43)+.35*Uc(a*2.3+u*3,c*2.3,47),d=.12+.88*l*X(.3,.68,f),p=(h*s+o)*4;i.data[p]=i.data[p+1]=i.data[p+2]=Math.round(d*255),i.data[p+3]=255}}n.putImageData(i,0,0);const r=new ba(e);return r.wrapS=r.wrapT=ts,r.magFilter=Qe,r.minFilter=zn,r.anisotropy=4,r}function W1(){if(typeof document>"u")return null;const s=document.createElement("canvas");s.width=s.height=64;const t=s.getContext("2d");if(!t)return null;const e=t.createRadialGradient(32,32,0,32,32,32);return e.addColorStop(0,"rgba(255,255,255,0.7)"),e.addColorStop(.4,"rgba(255,255,255,0.35)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,64,64),new ba(s)}class X1{constructor(t){M(this,"group",new Ue);M(this,"band");M(this,"curtain");M(this,"spray");M(this,"ball");M(this,"bPos");M(this,"bNor");M(this,"bCol");M(this,"cPos");M(this,"cNor");M(this,"cCol");M(this,"cUv");M(this,"cHv");M(this,"sPos");M(this,"sCol");M(this,"any",!1);M(this,"au",new Float32Array(se));M(this,"ay",new Float32Array(se));M(this,"anu",new Float32Array(se));M(this,"any_",new Float32Array(se));M(this,"foam",[.93,.96,.98]);M(this,"lipC",[.35,.85,.8]);M(this,"face",[.07,.5,.55]);M(this,"ballOn",0);M(this,"lastR",0);const e=t*Nn;this.bPos=new Float32Array(e*3),this.bNor=new Float32Array(e*3),this.bCol=new Float32Array(e*4);const n=new be;n.setAttribute("position",new Kt(this.bPos,3).setUsage(Se)),n.setAttribute("normal",new Kt(this.bNor,3).setUsage(Se)),n.setAttribute("color",new Kt(this.bCol,4).setUsage(Se)),n.setIndex(new Kt(xd(t,Nn),1)),this.band=new re(n,new Ge({vertexColors:!0,roughness:.25,metalness:.05,side:Be,transparent:!0})),this.band.material.onBeforeCompile=h=>{h.fragmentShader=h.fragmentShader.replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
totalEmissiveRadiance += diffuseColor.rgb * 0.45;`)},this.band.frustumCulled=!1,this.band.receiveShadow=!1;const i=t*hn;this.cPos=new Float32Array(i*3),this.cNor=new Float32Array(i*3),this.cCol=new Float32Array(i*4),this.cUv=new Float32Array(i*2);const r=new be;r.setAttribute("position",new Kt(this.cPos,3).setUsage(Se)),r.setAttribute("normal",new Kt(this.cNor,3).setUsage(Se)),r.setAttribute("color",new Kt(this.cCol,4).setUsage(Se)),r.setAttribute("uv",new Kt(this.cUv,2).setUsage(Se)),this.cHv=new Float32Array(i),r.setAttribute("heavy",new Kt(this.cHv,1).setUsage(Se)),r.setIndex(new Kt(xd(t,hn),1));const o=new Ge({vertexColors:!0,alphaMap:G1(),roughness:.85,emissive:new It(.47,.48,.49),side:Be,transparent:!0,depthWrite:!1});o.onBeforeCompile=h=>{h.vertexShader=h.vertexShader.replace("#include <common>",`#include <common>
attribute float heavy;
varying float vHeavy;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vHeavy = heavy;`),h.fragmentShader=h.fragmentShader.replace("#include <common>",`#include <common>
varying float vHeavy;`).replace("#include <alphamap_fragment>",`#ifdef USE_ALPHAMAP
 diffuseColor.a *= mix(texture2D(alphaMap, vAlphaMapUv).g, 1.0, vHeavy);
#endif`)},this.curtain=new re(r,o),this.curtain.frustumCulled=!1,this.curtain.renderOrder=2,this.sPos=new Float32Array(t*Ti*3),this.sCol=new Float32Array(t*Ti*4);const a=new be;a.setAttribute("position",new Kt(this.sPos,3).setUsage(Se)),a.setAttribute("color",new Kt(this.sCol,4).setUsage(Se)),this.spray=new ya(a,new Gr({vertexColors:!0,size:2.6,transparent:!0,depthWrite:!1,map:W1()})),this.spray.frustumCulled=!1,this.spray.renderOrder=3;const c=new Ta(1,V1),l=c.attributes.position;for(let h=0;h<l.count;h++){const u=l.getX(h),f=l.getY(h),d=l.getZ(h),p=.78+.4*Ne(u*3.3+f*2.1+d*4.7+5,53);l.setXYZ(h,u*p,f*p,d*p)}c.computeVertexNormals(),this.ball=new re(c,new Ge({color:16777215,roughness:.9,flatShading:!0,emissive:new It(.2,.21,.22)})),this.ball.frustumCulled=!1,this.ball.visible=!1,this.group.add(this.band,this.curtain,this.spray,this.ball)}setTint(t,e,n){for(let i=0;i<3;i++)this.foam[i]=t[i],this.lipC[i]=e[i],this.face[i]=n[i];this.ball.material.color.setRGB(t[0],t[1],t[2]),this.ball.material.emissive.setRGB(t[0]*.22,t[1]*.22,t[2]*.22),this.curtain.material.emissive.setRGB(t[0]*.5,t[1]*.5,t[2]*.5),this.spray.material.color.setRGB(1,1,1)}begin(){this.any=!1}column(t,e,n,i,r,o,a,c,l,h,u=1,f=0){const d=se,p=this.au,_=this.ay,g=this.anu,m=this.any_;let b=0,v=0;for(let y=0;y<d;y++){p[y]=i[y],_[y]=r[y];const L=y>0?y-1:y,k=y<d-1?y+1:y,U=i[k]-i[L],V=r[k]-r[L],q=Math.sqrt(U*U+V*V);g[y]=q>1e-9?-V/q:0,m[y]=q>1e-9?U/q:1,i[y]>i[b]&&(b=y),r[y]>r[v]&&(v=y)}const x=X(.15,.6,c);if(x>0)this.any=!0;else return this.hideColumn(t,e,i,r);b=Math.min(d-3,Math.max(2,v+1));const D=x*Math.min(.5,.06+.11*l),w=Ne(n*.7+h*.25,61);for(let y=0;y<Nn;y++){const L=y/(Nn-1),k=L*b,U=Math.min(d-2,Math.floor(k)),V=k-U,q=D*X(0,.45,L),j=p[U]+(p[U+1]-p[U])*V,Z=_[U]+(_[U+1]-_[U])*V,z=g[U]+(g[U+1]-g[U])*V,st=m[U]+(m[U+1]-m[U])*V,ot=(t*Nn+y)*3;this.bPos[ot]=e,this.bPos[ot+1]=Z+st*q,this.bPos[ot+2]=j+z*q,this.bNor[ot]=0,this.bNor[ot+1]=-st,this.bNor[ot+2]=-z;const _t=X(.2,.8,L),Rt=X(.85,1,L)*(.5+.3*w),kt=(t*Nn+y)*4;for(let K=0;K<3;K++){let Q=this.face[K]+(this.lipC[K]-this.face[K])*_t*.35;Q+=(this.foam[K]-Q)*Rt,Q+=(this.foam[K]*.92-Q)*f*.85,this.bCol[kt+K]=Math.min(1,Q)}this.bCol[kt+3]=x*.92*o[a+Math.min(d-1,Math.round(k))]}const P=n*.11,I=.86+.08*w;for(let y=0;y<hn;y++){const L=y/(hn-1),k=b+L*(d-1-b),U=Math.min(d-2,Math.floor(k)),V=k-U,q=D+(.08-D)*X(0,.6,L),j=p[U]+(p[U+1]-p[U])*V,Z=_[U]+(_[U+1]-_[U])*V,z=g[U]+(g[U+1]-g[U])*V,st=m[U]+(m[U+1]-m[U])*V,ot=(t*hn+y)*3,_t=Math.sin(n*1.7+L*2.3+h*2.1)*.12*L;this.cPos[ot]=e+_t,this.cPos[ot+1]=Z+st*q,this.cPos[ot+2]=j+z*q,this.cNor[ot]=0,this.cNor[ot+1]=-st,this.cNor[ot+2]=-z;const Rt=(t*hn+y)*2;this.cUv[Rt]=P,this.cUv[Rt+1]=L*1.4+h*.55;const kt=(t*hn+y)*4,K=I+.06*L;for(let Pt=0;Pt<3;Pt++)this.cCol[kt+Pt]=Math.min(1,this.foam[Pt]*K);const Q=1-.5*X(.1,.9,L),St=o[a+Math.min(d-1,Math.round(k))],it=Math.max(.5*u*Q*(.55+.45*St)*(.85+.25*w),f);this.cCol[kt+3]=Math.min(1,x*it),this.cHv[t*hn+y]=f}const T=Math.round(n);for(let y=0;y<Ti;y++){const L=(t*Ti+y)*3,k=(t*Ti+y)*4,U=kn(T*7+y,73),V=(h*(.7+.5*U)+U*13.7)%1,q=Math.min(d-1,v+Math.round((b-v)*kn(T*3+y,79))),j=(kn(T*11+y,83)-.5)*.9;this.sPos[L]=e+j+.6*V*(U-.5),this.sPos[L+1]=x>0?r[v]+.15+(.5+.35*l)*Math.sqrt(V)*(.6+U):-50,this.sPos[L+2]=i[q]-(.4+.5*l)*V*(.5+U);for(let Z=0;Z<3;Z++)this.sCol[k+Z]=this.foam[Z];this.sCol[k+3]=x*.45*Math.sin(Math.PI*Math.min(1,V*1.3))*(1-V)}}hideColumn(t,e,n,i){const r=se;for(let o=0;o<Nn;o++){const a=Math.round(o/(Nn-1)*(r-1)),c=(t*Nn+o)*3;this.bPos[c]=e,this.bPos[c+1]=i[a],this.bPos[c+2]=n[a],this.bCol[(t*Nn+o)*4+3]=0}for(let o=0;o<hn;o++){const a=Math.round(o/(hn-1)*(r-1)),c=(t*hn+o)*3;this.cPos[c]=e,this.cPos[c+1]=i[a],this.cPos[c+2]=n[a],this.cCol[(t*hn+o)*4+3]=0}for(let o=0;o<Ti;o++)this.sPos[(t*Ti+o)*3+1]=-50,this.sCol[(t*Ti+o)*4+3]=0}end(t,e,n,i,r,o){if(this.band.visible=this.curtain.visible=this.spray.visible=this.any,this.any){const h=this.band.geometry.attributes;h.position.needsUpdate=!0,h.normal.needsUpdate=!0,h.color.needsUpdate=!0;const u=this.curtain.geometry.attributes;u.position.needsUpdate=!0,u.normal.needsUpdate=!0,u.color.needsUpdate=!0,u.uv.needsUpdate=!0,u.heavy.needsUpdate=!0;const f=this.spray.geometry.attributes;f.position.needsUpdate=!0,f.color.needsUpdate=!0}const a=i>.05&&Number.isFinite(t+e+n)?1:0,c=1-Math.exp(-4*Math.max(0,Number.isFinite(o)?o:0));this.ballOn+=(a-this.ballOn)*c,a&&(this.ball.position.set(t,e,n),this.lastR=i);const l=this.lastR*this.ballOn;if(this.ball.visible=l>.05,this.ball.visible){const h=1+.06*Math.sin(r*5.3);this.ball.scale.set(l*1.25*h,l*(.9+.08*Math.sin(r*4.1+1)),l*h),this.ball.rotation.set(r*2.2,r*.7,0)}}}const Ei=4,q1=.6;class K1{constructor(t){M(this,"mesh");M(this,"pos");M(this,"col");M(this,"idx");M(this,"fed");M(this,"time",0);M(this,"riderS",NaN);M(this,"white",[.93,.96,.98]);this.cols=t;const e=t*Ei;this.pos=new Float32Array(e*3),this.col=new Float32Array(e*4),this.idx=new Uint16Array((t-1)*(Ei-1)*6),this.fed=new Uint8Array(t);const n=new be;n.setAttribute("position",new Kt(this.pos,3).setUsage(Se)),n.setAttribute("color",new Kt(this.col,4).setUsage(Se)),n.setIndex(new Kt(this.idx,1).setUsage(Se)),this.mesh=new re(n,new Rn({vertexColors:!0,transparent:!0,depthWrite:!1,side:Be})),this.mesh.name="crestSpray",this.mesh.frustumCulled=!1}setTint(t){for(let e=0;e<3;e++)this.white[e]=t[e]}begin(t,e){this.time=t,this.riderS=e,this.fed.fill(0)}column(t,e,n,i,r,o,a,c,l){if(!l||i<=-1||i>=30||o>=.6)return;const h=this.riderS,u=h===h?X(2,5,Math.abs(n-h)):1,f=X(-1,2,i)*(1-X(10,30,i))*(1-o/.6)*u;if(f<=0)return;const d=this.time,p=Math.max(r,c),_=c>r?a:0,g=.4+.6*Ne(n*.45-d*1.1,61)*Ne(n*1.3+d*.7,67),m=1.6+.9*Ne(n*.3+d*.5,71),b=.5+.4*Ne(n*.5-d*.6,73),v=this.white;for(let x=0;x<Ei;x++){const D=x/(Ei-1),w=t*Ei+x,P=w*3;this.pos[P]=e-.15*D,this.pos[P+1]=p+.04+b*Math.sin(D*2.2),this.pos[P+2]=_-.05-m*D;const I=w*4;this.col[I]=v[0],this.col[I+1]=v[1],this.col[I+2]=v[2],this.col[I+3]=q1*f*g*X(0,.25,D)*(1-D)*(1-D)*1.8}this.fed[t]=1}end(){let t=0;for(let n=0;n<this.cols-1;n++)if(!(!this.fed[n]||!this.fed[n+1]))for(let i=0;i<Ei-1;i++){const r=n*Ei+i,o=r+Ei;this.idx[t++]=r,this.idx[t++]=o,this.idx[t++]=r+1,this.idx[t++]=r+1,this.idx[t++]=o,this.idx[t++]=o+1}const e=this.mesh.geometry;e.setDrawRange(0,t),this.mesh.visible=t>0,e.index.needsUpdate=!0,e.attributes.position.needsUpdate=!0,e.attributes.color.needsUpdate=!0}}const yn=180,As=1,Bs=14,ql=28,Kl=14,Zi=Bs+ql+Kl,Y1=35,j1=70,Qi=[],qr=[];for(let s=0;s<Bs;s++)Qi.push(0),qr.push(-14*Math.pow(1-s/Bs,1.6));for(let s=0;s<ql;s++)Qi.push(1),qr.push(Math.pow(s/(ql-1),1.25));for(let s=1;s<=Kl;s++)Qi.push(2),qr.push(Y1*Math.pow(s/Kl,1.8));const Hn=[.015,.11,.24],ia=[.03,.19,.33],$1=[.07,.5,.55],Z1=[.35,.85,.8],sa=[.04,.21,.34],J1=[.93,.96,.98],Q1=[ia[0]/Hn[0],ia[1]/Hn[1],ia[2]/Hn[2]],tT=[sa[0]/Hn[0],sa[1]/Hn[1],sa[2]/Hn[2]],eT=.85,Fc=1.3,nT=.6,om=[],am=[];for(let s=0;s<Zi;s++){const t=Qi[s]===1?qr[s]:1,e=X(.6,.04,t);om.push(Qi[s]===1?e*e:0),am.push(Qi[s]===1?1-nT*X(.5,1,t):1)}const iT=.021,sT=2.5,rT=-4.5,oT=11,aT=.06,cT=3.5,lT=14,vd=.25,hT=.25,uT=1.03;function fT(s,t,e){const n=sT*.5;return(e+s.barrelShape(t-n)+s.barrelShape(t+n)+s.barrelShape(t-2*n)+s.barrelShape(t+2*n))/5}const cm=[],lm=[],hm=[];for(let s=0;s<Zi;s++){const t=e=>{const n=Math.sin(s*127.1+e*311.7)*43758.5453;return n-Math.floor(n)};cm.push((s%2?-1:1)*(.4+.6*t(1))),lm.push(.022+.045*t(2)),hm.push(t(3))}const dT=-1.5,pT=-6;function Md(s,t){const e=new Uint32Array((s-1)*(t-1)*6);let n=0;for(let i=0;i<s-1;i++)for(let r=0;r<t-1;r++){const o=i*t+r,a=(i+1)*t+r,c=i*t+r+1,l=(i+1)*t+r+1;e[n++]=o,e[n++]=a,e[n++]=c,e[n++]=a,e[n++]=l,e[n++]=c}return e}function yd(s,t,e,n,i=0,r=e-1){for(let o=Math.max(0,i);o<=Math.min(e-1,r);o++){const a=o>0?o-1:o,c=o<e-1?o+1:o;for(let l=0;l<n;l++){const h=l>0?l-1:l,u=l<n-1?l+1:l,f=(a*n+l)*3,d=(c*n+l)*3,p=(o*n+h)*3,_=(o*n+u)*3,g=s[d]-s[f],m=s[d+1]-s[f+1],b=s[d+2]-s[f+2],v=s[_]-s[p],x=s[_+1]-s[p+1],D=s[_+2]-s[p+2];let w=m*D-b*x,P=b*v-g*D,I=g*x-m*v;const T=Math.sqrt(w*w+P*P+I*I),y=(o*n+l)*3;T>1e-12?(w/=T,P/=T,I/=T):(w=0,P=1,I=0),t[y]=w,t[y+1]=P,t[y+2]=I}}}const Oc=10,mT=s=>s[se-1]<s[0]-.05;function gT(){if(typeof document>"u")return null;const s=document.createElement("canvas");s.width=s.height=32;const t=s.getContext("2d");if(!t)return null;const e=t.createRadialGradient(16,16,0,16,16,16);return e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.5,"rgba(255,255,255,0.6)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,32,32),new ba(s)}const Ai={min:.38,s0:1.4,s1:4.5,u0:.1,u1:.5,deep0:.15,deep1:.42};class _T{constructor(t){M(this,"group",new Ue);M(this,"surface");M(this,"lip");M(this,"pos");M(this,"col");M(this,"lipPos");M(this,"lipCol");M(this,"nor");M(this,"lipNor");M(this,"geo");M(this,"lipGeo");M(this,"s0",0);M(this,"lipAlpha");M(this,"rider",null);M(this,"feather");M(this,"featherPos");M(this,"colU",new Float32Array(se));M(this,"colY",new Float32Array(se));M(this,"curtain",new X1(yn));M(this,"crestSpray",new K1(yn));M(this,"pDeep",Hn.slice());M(this,"pBack",ia.slice());M(this,"pTeal",$1.slice());M(this,"pGlow",Z1.slice());M(this,"pFlat",sa.slice());M(this,"pWhite",J1.slice());this.wave=t;const e=yn*Zi;this.pos=new Float32Array(e*3),this.col=new Float32Array(e*3),this.geo=new be,this.geo.setAttribute("position",new Kt(this.pos,3).setUsage(Se)),this.geo.setAttribute("color",new Kt(this.col,3).setUsage(Se)),this.nor=new Float32Array(e*3),this.geo.setAttribute("normal",new Kt(this.nor,3).setUsage(Se)),this.geo.setIndex(new Kt(Md(yn,Zi),1));const n=new Ge({vertexColors:!0,roughness:.32,metalness:.05,side:Be});this.surface=new re(this.geo,n),this.surface.frustumCulled=!1,this.surface.receiveShadow=!0;const i=yn*se;this.lipPos=new Float32Array(i*3),this.lipCol=new Float32Array(i*4),this.lipAlpha=new Float32Array(i).fill(1),this.lipGeo=new be,this.lipGeo.setAttribute("position",new Kt(this.lipPos,3).setUsage(Se)),this.lipGeo.setAttribute("color",new Kt(this.lipCol,4).setUsage(Se)),this.lipNor=new Float32Array(i*3),this.lipGeo.setAttribute("normal",new Kt(this.lipNor,3).setUsage(Se)),this.lipGeo.setIndex(new Kt(Md(yn,se),1));const r=new Ge({vertexColors:!0,roughness:.3,metalness:.05,side:Be,transparent:!0});this.lip=new re(this.lipGeo,r),this.lip.frustumCulled=!1,this.lip.receiveShadow=!0,this.featherPos=new Float32Array(yn*Oc*3);const o=new be;o.setAttribute("position",new Kt(this.featherPos,3).setUsage(Se)),this.feather=new ya(o,new Gr({color:15924223,size:.4,transparent:!0,opacity:.55,depthWrite:!1,map:gT()})),this.feather.frustumCulled=!1,this.group.add(this.surface,this.lip,this.feather,this.curtain.group,this.crestSpray.mesh)}setWaterTint(t){for(let e=0;e<3;e++)this.pDeep[e]=t.deep[e],this.pBack[e]=Math.min(1,t.deep[e]*Q1[e]),this.pFlat[e]=Math.min(1,t.deep[e]*tT[e]),this.pTeal[e]=t.face[e],this.pGlow[e]=t.lip[e],this.pWhite[e]=t.foam[e];this.curtain.setTint(t.foam,t.lip,t.face),this.crestSpray.setTint(t.foam)}setRider(t){this.rider=t&&Number.isFinite(t.s)&&Number.isFinite(t.u)&&Number.isFinite(t.deep)?{s:t.s,u:t.u,deep:t.deep}:null}lipOpacity(t,e){const n=this.rider;if(!n||!(n.deep>Ai.deep0))return 1;const i=X(Ai.deep0,Ai.deep1,n.deep)*(1-X(Ai.s0,Ai.s1,Math.abs(t-n.s)))*X(n.u+Ai.u0,n.u+Ai.u1,e);return 1-(1-Ai.min)*i}update(t,e){if(!Number.isFinite(t))return;Number.isFinite(e)||(e=0);const n=this.wave;this.s0=Math.round(t/As)*As-j1*As;const i=this.pos,r=this.col;let o=!1,a=yn,c=-1;const l=this.pDeep,h=this.pBack,u=this.pTeal,f=this.pGlow,d=this.pFlat,p=this.pWhite;this.curtain.begin(),this.crestSpray.begin(e,this.rider&&this.rider.deep>0?this.rider.s:NaN);const _=n.breakS,g=n.peeling?Math.max(n.barrelShape(_-3),n.barrelShape(_-5)):0,m=g>0?Math.max(n.amp(_-3),n.amp(_-5))*g:0;for(let b=0;b<yn;b++){const v=Hp(this.s0+b*As,_),x=Math.max(n.amp(v),.001),D=n.faceWidth(v,x),w=n.barrelShape(v),P=n.peeling?(1-n.breakBlend(v))*n.peelBlend*(g>0?1:1-w):0,I=g>0&&v<_-1?fT(n,v,w):w,T=I>0?(I===w?n.barrelReach(v):ve.cover*D)*ha.land:0,y=I>.05?qp(n,v,x):-99,L=y,k=I===w?w:I*X(1,2.5,y),U=this.rider&&this.rider.deep>0?Math.abs(v-this.rider.s):99,V=.32*X(1.5,3.5,U),q=y,j=n.hollow(v),Z=-v,z=v-_,st=g>0?Zt((rT-z)/oT,0,1):1,ot=X(0,.12,st),_t=g>0?2:(cT+_-this.s0-b*As)/lT,Rt=_t>=1?3.5:3.5*(vd+(1-vd)*X(0,1,_t)),kt=m>0&&z<-3?(1-w)*X(-3,-7.5,z)*(1-X(-11,-22,z)):0,K=m*(1-.25*X(-7,-55,z));let Q=kt>0&&K>x?x+(K-x)*kt:x;w>=.05&&Q>x&&(Q=g>0?Math.min(Q,x*uT):x);const St=Q>x?n.faceWidth(v,Q)*(1-.4*kt):D,it=iT*(.94+.06*Ne(v*.06,91))*(1-P),Pt=n.peeling?X(-3,0,z)*(1-X(16,40,z))*(1-.7*w):0;for(let E=0;E<Zi;E++){const S=Qi[E],B=qr[E];let H,J,Y,gt,at;if(S===0){H=B;const N=H/(2.4*Q);J=Q*Math.exp(-N*N);const dt=Zt(J/Q,0,1)*.6||0;Y=l[0]+(h[0]-l[0])*dt,gt=l[1]+(h[1]-l[1])*dt,at=l[2]+(h[2]-l[2])*dt}else if(S===1){const N=B;H=N*St;const dt=1-N;J=Q*dt*dt;const $=2*Q*dt,nt=$/Math.sqrt(St*St+$*$),vt=X(.2,.9,nt)*Math.pow(dt,.6)*.9;Y=l[0]+(u[0]-l[0])*vt,gt=l[1]+(u[1]-l[1])*vt,at=l[2]+(u[2]-l[2])*vt;const bt=vt*vt*vt*(.4+.6*j)*X(.05,0,Math.abs(N-.12)-.1);Y+=(f[0]-Y)*bt*.5,gt+=(f[1]-gt)*bt*.5,at+=(f[2]-at)*bt*.5;const Gt=eT*om[E]*(.55+.45*j);Y+=(f[0]*Fc-Y)*Gt,gt+=(f[1]*Fc-gt)*Gt,at+=(f[2]*Fc-at)*Gt;const me=1-am[E];if(Y+=(l[0]*.8-Y)*me,gt+=(l[1]*.8-gt)*me,at+=(l[2]*.8-at)*me,it>0){const Le=.2126*Y+.7152*gt+.0722*at,ne=v*lm[E]+hm[E],Ke=ne-Math.floor(ne),mn=4*Ke*(1-Ke),os=1+it*cm[E]*mn/Math.max(Le,.06);Y*=os,gt*=os,at*=os}}else{H=St+B,J=0;const N=Math.exp(-B/10);Y=l[0]+(d[0]-l[0])*N,gt=l[1]+(d[1]-l[1])*N,at=l[2]+(d[2]-l[2])*N}const xt=H-St,Ft=P>0||xt*xt<9.7||L>0&&H-L>-1.2&&H-L<2.4?.55*Ne(v*.83+H*2.31+e*.6,7)+.45*Ne(v*2.13-H*1.71-e*1.4,13):.5,rt=Math.exp(-(xt*xt)/.7)*(.2+.55*Ft)*Math.min(1,Q/n.A0);let At=0;if(P>0){const N=S===0?Zt(1+H/3,0,1)*.7:S===1?1:Math.exp(-Math.max(0,xt)/Rt);if(At=P*N*(.55+.45*Ft)*(st<1?ot*X(0,1,st+.45*(Ft-.5)):1),_t<1.25){const dt=Zt(_t+.45*(Ne(v*.37+H*.9+e*.3,29)-.5),0,1);At*=dt*(1+hT*(1-dt))}J+=At*(g>0?aT:.18)*(Ft-.3)}let Tt=0;if(L>0){const N=H-L;N>-1.2&&N<2.4&&(Tt=H<q+.5||N<0?k*Math.exp(-(N*N)/.25)*(.45+.35*Ft):k*Math.exp(-(N*N)/.7)*(.75+.25*Ft),J+=Tt*V*(.6+.4*Ft))}const zt=Pt>0?Pt*(E===Bs?.97:E===Bs-1?.55:E===Bs+1?.3:0):0,Et=Tt>0&&H<Math.max(L,q+.5)?Tt:0,Jt=Zt(Math.max(rt,At,zt,Et),0,1),Xt=.85+.15*Ft;if(Y+=(p[0]*Xt-Y)*Jt,gt+=(p[1]*Xt-gt)*Jt,at+=(p[2]*Xt-at)*Jt,T>0&&H>-.5){const N=1-.68*I*(1-X(.85*T,1.05*T,H));Y*=N,gt*=N,at*=N}if(Tt>0&&Et===0){const N=.9+.1*Ft;Y+=(p[0]*N-Y)*Tt,gt+=(p[1]*N-gt)*Tt,at+=(p[2]*N-at)*Tt}const ee=(b*Zi+E)*3;i[ee]=Z,i[ee+1]=J,i[ee+2]=H,r[ee]=Y,r[ee+1]=gt,r[ee+2]=at}const Bt=this.colU,Lt=this.colY;bh(n,v,x,D,Bt,Lt)&&(o=!0,b<a&&(a=b),c=b);const Wt=wa(n,v),tt=this.s0+b*As,ht=w*X(dT,pT,v-_);let R=0;for(let E=1;E<se;E++)Lt[E]>Lt[R]&&(R=E);const lt=w*Wt,et=v>_&&w<.97?Math.min(1,4*w*(1-w))*Wt:0,ut=lt*(1-et),ct=X(1,-6,z);for(let E=0;E<se;E++){const S=E/(se-1),B=b*se+E,H=B*3;this.lipPos[H]=Z,this.lipPos[H+1]=Lt[E],this.lipPos[H+2]=Bt[E];const J=this.lipOpacity(tt,Bt[E]);this.lipAlpha[B]=J;const Y=(.25+.7*S*S)*(1-Wt)+Wt*.9*X(.86,1,S),gt=Wt*(.45*(1-X(.1,.5,S))+.25*X(.55,.85,S)*(1-X(.88,1,S))),at=(1-J)*.35,xt=B*4;if(lt>0){const Ft=Math.sin(v*.9+S*5.5-e*2.2)+.6*Math.sin(v*2.3-S*3.1+e*1.3),rt=ut*.1*Math.max(0,Ft)*(1-ct*.6),At=.18*(1-S)*(1-S)+.8*et;for(let Tt=0;Tt<3;Tt++){let zt=u[Tt]+(p[Tt]-u[Tt])*Y+(f[Tt]-u[Tt])*at;zt*=1-gt;let Et=u[Tt]+((d[Tt]+l[Tt])*.5-u[Tt])*(.3+.7*ct)*ut;Et+=(f[Tt]-Et)*(At+rt),Et+=(p[Tt]-Et)*.5*et,this.lipCol[xt+Tt]=Math.min(1,zt+(Et-zt)*lt)}this.lipCol[xt+3]=Math.min(J,1-ut*(.6-.42*ct));continue}for(let Ft=0;Ft<3;Ft++){const rt=(u[Ft]+(p[Ft]-u[Ft])*Y+(f[Ft]-u[Ft])*at)*(1-gt);this.lipCol[xt+Ft]=Math.min(1,rt)}this.lipCol[xt+3]=J}const Ct=g>0?X(-3.5,-9,z):z<-4?(1-w)*X(-4,-7,z):0;if(Ct>0)for(let E=0;E<se;E++){const S=(b*se+E)*4,B=Math.min(1,Ct*(1+.45*Math.sin(v*2.1+E*1.7)));for(let H=0;H<3;H++)this.lipCol[S+H]+=(p[H]*.9-this.lipCol[S+H])*B}for(let E=0;E<Oc;E++){const S=(b*Oc+E)*3,B=Ne(v*1.9+E*7.3+e*2.7,21)-.5,H=Ne(v*2.3-E*3.1+e*3.3,23)-.5;this.featherPos[S]=Z+B*.6,this.featherPos[S+1]=Wt>.25&&mT(Lt)?Lt[R]+.12+.35*Math.abs(H):-50,this.featherPos[S+2]=Bt[R]-.15-.6*Math.abs(B)}this.crestSpray.column(b,Z,v,z,Q,w,Bt[R],Lt[R],n.peeling);const mt=g>0?.9*X(-3.5,-8,z):0;this.curtain.column(b,Z,v,Bt,Lt,this.lipAlpha,b*se,w*Wt,x,e,.75*ht,mt)}this.geo.attributes.position.needsUpdate=!0,this.geo.attributes.color.needsUpdate=!0,this.geo.attributes.normal.needsUpdate=!0,yd(i,this.nor,yn,Zi),this.lip.visible=o,this.curtain.end(0,0,0,0,e,0),this.crestSpray.end(),this.curtain.band.visible=!1,this.feather.geometry.attributes.position.needsUpdate=!0,o&&(this.lipGeo.attributes.position.needsUpdate=!0,this.lipGeo.attributes.color.needsUpdate=!0,yd(this.lipPos,this.lipNor,yn,se,a-1,c+1),this.lipGeo.attributes.normal.needsUpdate=!0)}}function xT(){const s=new Ue,t=(e,n,i,r,o,a,c)=>{const l=new Ks(1,28,14),h=l.attributes.position;for(let f=0;f<h.count;f++){const d=h.getX(f),p=h.getY(f),_=h.getZ(f),g=.82+.36*Ne(d*3.1+_*5.3+p*2.2+10,c);h.setXYZ(f,d*g,p*g,_*g)}l.computeVertexNormals();const u=new re(l,new Ge({color:a,roughness:.95,flatShading:!0}));u.scale.set(e,n,i),u.position.set(r,-n*.15,o),s.add(u)};return t(80,26,50,120,-95,6974012,3),t(40,14,26,58,-50,7828031,5),t(20,6,14,30,-24,10517070,9),t(6,2.2,5,18,-12,9071178,11),s}function vT(s){const t=new Ge({color:new It(Hn[0],Hn[1],Hn[2]),roughness:.4}),e=new re(new Vr(1600,1600,1,1),t);return e.rotation.x=-Math.PI/2,e.position.y=-.03,s.add(e),s.add(xT()),{update(n,i){e.position.x=n,i&&t.color.setRGB(i[0],i[1],i[2])}}}const MT=600;function pa(s){const t=s-Math.floor(s);return t>=1?0:t}function bd(s,t){return typeof t=="number"&&Number.isFinite(t)?pa(t):pa(s/MT)}function yT(s){if(!s)return null;const t=/[?&]time=([^&#]*)/.exec(s.startsWith("?")||s.startsWith("&")?s:"?"+s);if(!t||t[1].trim()==="")return null;let e;try{e=decodeURIComponent(t[1])}catch{return null}const n=Number(e);return Number.isFinite(n)?pa(n):null}function Ht(s){const t=e=>{const n=e/255;return n<=.04045?n/12.92:Math.pow((n+.055)/1.055,2.4)};return[t(s>>16&255),t(s>>8&255),t(s&255)]}const Sd={el:7,sunColor:Ht(16763034),sunI:1.7,hemiSky:Ht(16173496),hemiGround:Ht(9072758),hemiI:1.5,skyTop:Ht(8363984),skyHorizon:Ht(16238246),fog:Ht(15780274),cloud:Ht(16765634),vig:.3,sea:[.05,.11,.2]},Bo=[{p:0,az:30,...Sd},{p:.25,az:45,el:36,sunColor:Ht(16770756),sunI:2.1,hemiSky:Ht(13624564),hemiGround:Ht(5003868),hemiI:1,skyTop:Ht(5214160),skyHorizon:Ht(12902382),fog:Ht(13820646),cloud:Ht(16775406),vig:.22,sea:[.02,.11,.235]},{p:.4,az:70,el:62,sunColor:Ht(16773596),sunI:2.3,hemiSky:Ht(13822198),hemiGround:Ht(4872792),hemiI:.95,skyTop:Ht(4163273),skyHorizon:Ht(12114672),fog:Ht(13624814),cloud:Ht(16777215),vig:.2,sea:[.015,.11,.24]},{p:.6,az:80,el:36,sunColor:Ht(16769200),sunI:2.15,hemiSky:Ht(14542054),hemiGround:Ht(8418398),hemiI:1.6,skyTop:Ht(4884676),skyHorizon:Ht(15131344),fog:Ht(14867659),cloud:Ht(16773852),vig:.24,sea:[.03,.11,.22]},{p:.69,az:105,el:20,sunColor:Ht(16763024),sunI:1.9,hemiSky:Ht(16175804),hemiGround:Ht(10518640),hemiI:2.3,skyTop:Ht(5932228),skyHorizon:Ht(15913134),fog:Ht(15519406),cloud:Ht(16768192),vig:.28,sea:[.05,.105,.2]},{p:.78,az:150,el:6,sunColor:Ht(16751194),sunI:1.6,hemiSky:Ht(16303272),hemiGround:Ht(10779244),hemiI:2.4,skyTop:Ht(6978752),skyHorizon:Ht(16363646),fog:Ht(15774862),cloud:Ht(16757900),vig:.34,sea:[.07,.1,.18]},{p:.9,az:75,el:9,sunColor:Ht(16756348),sunI:1.5,hemiSky:Ht(16303798),hemiGround:Ht(10517108),hemiI:2.3,skyTop:Ht(7636678),skyHorizon:Ht(16300696),fog:Ht(15776928),cloud:Ht(16761e3),vig:.33,sea:[.06,.1,.19]},{p:1,az:30,...Sd}],bT=s=>s*s*(3-2*s),Ci=(s,t,e)=>s+(t-s)*e,wi=(s,t,e)=>[Ci(s[0],t[0],e),Ci(s[1],t[1],e),Ci(s[2],t[2],e)],Td=Math.PI/180;function Ed(s){const t=pa(s);let e=0;for(;e<Bo.length-2&&t>=Bo[e+1].p;)e++;const n=Bo[e],i=Bo[e+1],r=bT(Math.min(1,Math.max(0,(t-n.p)/(i.p-n.p)))),o=Ci(n.az,i.az,r)*Td,a=Ci(n.el,i.el,r)*Td,c=Math.cos(a),l=[-Math.sin(o)*c,Math.sin(a),Math.cos(o)*c];return{phase:t,sunDir:l,sunColor:wi(n.sunColor,i.sunColor,r),sunIntensity:Ci(n.sunI,i.sunI,r),hemiSky:wi(n.hemiSky,i.hemiSky,r),hemiGround:wi(n.hemiGround,i.hemiGround,r),hemiIntensity:Ci(n.hemiI,i.hemiI,r),skyTop:wi(n.skyTop,i.skyTop,r),skyHorizon:wi(n.skyHorizon,i.skyHorizon,r),fogColor:wi(n.fog,i.fog,r),cloudColor:wi(n.cloud,i.cloud,r),vignette:Ci(n.vig,i.vig,r),seaColor:wi(n.sea,i.sea,r)}}const Ad=1024,wd=9,Rd=5,ko=10,zo=60,ST=1100,TT=`
varying vec3 vDir;
void main() {
  vDir = normalize(position);
  vec4 p = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  gl_Position = p.xyww; // always at the far plane
}`,ET=`
uniform vec3 uTop;
uniform vec3 uHorizon;
uniform vec3 uSunDir;
uniform vec3 uSunColor;
varying vec3 vDir;
void main() {
  vec3 d = normalize(vDir);
  float h = clamp(d.y, 0.0, 1.0);
  vec3 col = mix(uHorizon, uTop, pow(h, 0.32));
  float s = max(dot(d, uSunDir), 0.0);
  col += uSunColor * (0.28 * pow(s, 12.0) + 0.6 * smoothstep(0.9985, 0.9993, s));
  gl_FragColor = vec4(col, 1.0);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}`;function AT(s){let t=s>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}function wT(s){const t=[];for(let n=0;n<Rd;n++){const i=new Ta(1,1),r=n/(Rd-1)-.5,o=14+12*(1-Math.abs(r)*1.6)+s()*6,a=i.attributes.position;for(let c=0;c<a.count;c++){const l=a.getY(c);a.setY(c,Math.max(l,-.35))}i.scale(o*1.25,o*.8,o),i.translate(r*70+(s()-.5)*10,o*.25+s()*4,(s()-.5)*16),t.push(i)}const e=fS(t,!1);for(const n of t)n.dispose();return e.computeVertexNormals(),e}function RT(s,t,e={}){const n=e.fixedPhase!==void 0?e.fixedPhase:typeof location<"u"?yT(location.search):null;t.shadowMap.enabled=!0,t.shadowMap.type=qd;const i=new zy(16777215,4473924,1);s.add(i);const r=new Bp(16777215,2);r.castShadow=!0,r.shadow.mapSize.set(Ad,Ad);const o=r.shadow.camera;o.left=-ko,o.right=ko,o.top=ko,o.bottom=-ko,o.near=1,o.far=zo+40,o.updateProjectionMatrix(),r.shadow.bias=-6e-4,r.shadow.normalBias=.03,s.add(r),s.add(r.target);const a=new hi({uniforms:{uTop:{value:new It},uHorizon:{value:new It},uSunDir:{value:new C(0,1,0)},uSunColor:{value:new It}},vertexShader:TT,fragmentShader:ET,side:We,depthWrite:!1,fog:!1}),c=new re(new Ks(ST,24,12),a);c.frustumCulled=!1,c.renderOrder=-10,s.add(c),s.background=null;const l=new hh(16777215,80,650);s.fog=l;const h=new Ey({flatShading:!0,fog:!1}),u=new Ue,f=AT(1234),d=[],p=1300;for(let x=0;x<wd;x++){const D=new re(wT(f),h);D.userData.lookCloud=!0;const w=x<6;D.position.set(-p/2+(x+f()*.6)*(p/wd),w?55+f()*45:70+f()*40,w?-620-f()*280:-380-f()*150),D.rotation.y=(f()-.5)*.6;const P=1.2+f()*.7;D.scale.set(P,P*(.8+f()*.3),P),u.add(D),d.push({m:D,speed:1.2+f()*1.6})}s.add(u);let _=null;typeof document<"u"&&document.body&&(_=document.createElement("div"),_.style.cssText="position:fixed;inset:0;pointer-events:none;z-index:1;background:radial-gradient(ellipse at 50% 45%, rgba(0,0,0,0) 55%, rgba(60,30,20,0.85) 100%);",(e.overlayParent??document.body).appendChild(_));let g=0,m=Ed(bd(0,n));const b=new It;function v(x,D){r.color.setRGB(x.sunColor[0],x.sunColor[1],x.sunColor[2]),r.intensity=x.sunIntensity,r.target.position.set(D.x,D.y,D.z),r.position.set(D.x+x.sunDir[0]*zo,D.y+x.sunDir[1]*zo,D.z+x.sunDir[2]*zo),r.target.updateMatrixWorld(),i.color.setRGB(x.hemiSky[0],x.hemiSky[1],x.hemiSky[2]),i.groundColor.setRGB(x.hemiGround[0],x.hemiGround[1],x.hemiGround[2]),i.intensity=x.hemiIntensity,a.uniforms.uTop.value.setRGB(x.skyTop[0],x.skyTop[1],x.skyTop[2]),a.uniforms.uHorizon.value.setRGB(x.skyHorizon[0],x.skyHorizon[1],x.skyHorizon[2]),a.uniforms.uSunDir.value.set(x.sunDir[0],x.sunDir[1],x.sunDir[2]),a.uniforms.uSunColor.value.setRGB(x.sunColor[0],x.sunColor[1],x.sunColor[2]),c.position.set(D.x,0,D.z),l.color.setRGB(x.fogColor[0],x.fogColor[1],x.fogColor[2]),b.setRGB(x.cloudColor[0],x.cloudColor[1],x.cloudColor[2]),h.color.copy(b).multiplyScalar(.55),h.emissive.copy(b).multiplyScalar(.5),_&&(_.style.opacity=x.vignette.toFixed(3))}return v(m,{x:0,y:0,z:0}),{get state(){return m},update(x,D){const w=Number.isFinite(x)&&x>0?x:0;g+=w,m=Ed(bd(g,n)),u.position.x=D.x;for(const P of d)P.m.position.x+=P.speed*w,P.m.position.x>p/2&&(P.m.position.x-=p);v(m,D)},dispose(){var x;s.remove(i,r,r.target,c,u),s.fog===l&&(s.fog=null),(x=r.shadow.map)==null||x.dispose(),c.geometry.dispose(),a.dispose();for(const D of d)D.m.geometry.dispose();h.dispose(),_==null||_.remove(),_=null}}}const Cd={deep:[.05,.095,.17],face:[.42,.37,.27],lip:[.78,.64,.44],foam:[1,.91,.8]},Ho=[{p:0,...Cd},{p:.25,deep:[.02,.11,.235],face:[.08,.48,.53],lip:[.38,.84,.78],foam:[.94,.96,.97]},{p:.4,deep:[.015,.11,.24],face:[.07,.5,.55],lip:[.35,.85,.8],foam:[.93,.96,.98]},{p:.6,deep:[.025,.11,.225],face:[.09,.48,.5],lip:[.42,.84,.76],foam:[.95,.95,.94]},{p:.69,deep:[.05,.105,.2],face:[.22,.43,.4],lip:[.62,.78,.6],foam:[.98,.93,.86]},{p:.78,deep:[.08,.095,.165],face:[.48,.37,.25],lip:[.86,.62,.4],foam:[1,.89,.77]},{p:.9,deep:[.07,.095,.175],face:[.43,.35,.3],lip:[.8,.62,.5],foam:[1,.9,.83]},{p:1,...Cd}],CT=s=>s*s*(3-2*s);function PT(s){if(!Number.isFinite(s))return 0;const t=s-Math.floor(s);return t>=1?0:t}function Vo(s,t,e,n){return s[0]=t[0]+(e[0]-t[0])*n,s[1]=t[1]+(e[1]-t[1])*n,s[2]=t[2]+(e[2]-t[2])*n,s}function LT(s,t){const e=PT(s);let n=0;for(;n<Ho.length-2&&e>=Ho[n+1].p;)n++;const i=Ho[n],r=Ho[n+1],o=CT(Math.min(1,Math.max(0,(e-i.p)/(r.p-i.p))));return Vo(t.deep,i.deep,r.deep,o),Vo(t.face,i.face,r.face,o),Vo(t.lip,i.lip,r.lip,o),Vo(t.foam,i.foam,r.foam,o),t}const Bc=[.12,.62,.72],Pd=.5,IT=.9,DT=1/.35,NT=1/.5,Go=s=>s>0?s<1?s:1:0;function UT(s,t,e){const n=Go(s),i=Go((Go(t)-Pd)/(IT-Pd)),r=i*i*(3-2*i),o=e>0?e:0;if(o===0)return n;const a=r-n,c=(a>0?DT:NT)*o,l=Math.abs(a)<=c?a:Math.sign(a)*c;return Go(n+l)}function Ld(s,t){const e=Number.isFinite(s)?s:0,n=Number.isFinite(t)?t:0;return .06*Math.sin(2.1*e+.9*n)+.04*Math.sin(3.7*e-1.3*n+1.1)}const Id=[.1,.35,.6,.85,1.1],FT=.6,OT=.16,BT=.75,kc=.45,kT=12158819;function Dd(s,t){const e=s;if(!e.isSkinnedMesh)return new re(s.geometry,t);const n=new Sp(e.geometry,t);return n.bindMode=Yd,n.bind(e.skeleton,e.bindMatrix),n}function Nd(s){return s.isSkinnedMesh?s.bindMatrix:s.matrixWorld}const zc=new Float32Array(se),Hc=new Float32Array(se);function zT(s,t,e,n,i,r,o,a){const c=e-s,l=n-t,h=o-i,u=a-r,f=c*u-l*h;if(Math.abs(f)<1e-12)return!1;const d=i-s,p=r-t,_=(d*u-p*h)/f,g=(d*l-p*c)/f;return _>=0&&_<=1&&g>=0&&g<=1}function HT(s,t,e,n){if(!t.riding||!t.inTube)return 0;const i=Aa(s,t.s),r=Math.max(s.amp(i),.001),o=s.faceWidth(i,r);if(!Gp(s,i,r,o,zc,Hc)||wa(s,i)<.3)return 0;const a=e.group.position,c=e.by;let l=0;for(const h of Id){const u=a.z+c.z*h,f=a.y+c.y*h;for(let d=0;d+1<se;d++)if(zT(u,f,n.z,n.y,zc[d],Hc[d],zc[d+1],Hc[d+1])){l++;break}}return l/Id.length}class um{constructor(t){M(this,"ghost",new Ue);M(this,"reflection",new Ue);M(this,"amount",0);M(this,"covered",0);M(this,"ghostMat");M(this,"ghosts",[]);M(this,"refls",[]);M(this,"reflMats",[]);M(this,"reflBase",[]);M(this,"mirror",new Vt);M(this,"camPos",new C);M(this,"reflOn",0);this.rig=t,this.ghostMat=new Rn({color:new It().setRGB(Bc[0],Bc[1],Bc[2]),transparent:!0,opacity:0,depthTest:!1,depthWrite:!1,fog:!1});const e=new Map;for(const n of t.parts){const i=Dd(n,this.ghostMat);i.matrixAutoUpdate=!1,i.matrixWorldAutoUpdate=!1,i.renderOrder=999,i.frustumCulled=!1,this.ghosts.push(i),this.ghost.add(i);const r=n.material;let o=e.get(r);o||(o=new Rn({color:r.map?new It(kT):r.color?r.color.clone():new It(.5,.5,.5),transparent:!0,opacity:0,depthTest:!1,depthWrite:!1,side:Be}),e.set(r,o),this.reflMats.push(o),this.reflBase.push(o.color.clone()));const a=Dd(n,o);a.matrixAutoUpdate=!1,a.matrixWorldAutoUpdate=!1,a.renderOrder=-5,a.frustumCulled=!1,a.visible=n!==t.board,this.refls.push(a),this.reflection.add(a)}this.ghost.visible=!1,this.reflection.visible=!1}setGhostWater(t,e,n){this.ghostMat.color.setRGB(Math.min(1,t[0]+(e[0]-t[0])*.55+(n[0]-t[0])*.18),Math.min(1,t[1]+(e[1]-t[1])*.55+(n[1]-t[1])*.18),Math.min(1,t[2]+(e[2]-t[2])*.55+(n[2]-t[2])*.18))}setWater(t){for(let e=0;e<this.reflMats.length;e++){const n=this.reflBase[e];this.reflMats[e].color.setRGB(n.r+(t[0]-n.r)*kc,n.g+(t[1]-n.g)*kc,n.b+(t[2]-n.b)*kc)}}update(t,e,n,i,r){const o=this.rig;n.getWorldPosition(this.camPos),this.covered=o.group.visible?HT(t,e,o,this.camPos):0,this.amount=UT(this.amount,this.covered,r);const a=e.riding&&o.group.visible,c=Math.min(1,Math.max(0,Number.isFinite(r)?r:0)*4);this.reflOn+=((a?1:0)-this.reflOn)*c;const l=this.amount>.005&&o.group.visible,h=this.reflOn>.01&&a;if(this.ghost.visible=l,this.reflection.visible=h,!l&&!h)return;o.group.updateMatrixWorld(!0);const u=o.parts;if(l){this.ghostMat.opacity=this.amount*FT;for(let f=0;f<u.length;f++)this.ghosts[f].matrixWorld.copy(Nd(u[f]))}if(h){const f=o.group.position,d=f.y,p=BT*(1+.5*Ld(i*1.3,f.x+5)),_=Ld(i,f.x)/.9;this.mirror.set(1,_,0,-_*d,0,-p,0,d*(1+p),0,0,1,0,0,0,0,1);const g=OT*this.reflOn*(1-.6*this.amount);for(const m of this.reflMats)m.opacity=g;for(let m=0;m<u.length;m++)this.refls[m].matrixWorld.multiplyMatrices(this.mirror,Nd(u[m]))}}}const VT=30;class GT{constructor(t,e){M(this,"recording",!1);M(this,"t0",0);M(this,"pointers",[]);M(this,"trace",[]);M(this,"events",[]);M(this,"seeds",[]);M(this,"lastTrace",-1);M(this,"btn");this.getSeed=e;const n=i=>{this.recording&&this.pointers.push({t:this.now(),type:i.type,id:i.pointerId,x:i.clientX,y:i.clientY})};for(const i of["pointerdown","pointermove","pointerup","pointercancel"])t.addEventListener(i,n,{capture:!0,passive:!0});this.btn=document.createElement("button"),this.btn.textContent="● REC",Object.assign(this.btn.style,{position:"fixed",top:"8px",right:"8px",zIndex:"20",padding:"8px 12px",font:"600 14px system-ui, sans-serif",color:"#fff",background:"rgba(200,30,40,0.75)",border:"1px solid rgba(255,255,255,0.5)",borderRadius:"8px",touchAction:"manipulation"}),this.btn.addEventListener("click",()=>this.recording?void this.stop():this.start()),document.body.appendChild(this.btn)}get active(){return this.recording}now(){return(performance.now()-this.t0)/1e3}start(){this.recording=!0,this.t0=performance.now(),this.pointers=[],this.trace=[],this.events=[],this.seeds=[this.getSeed()],this.lastTrace=-1,this.btn.textContent="■ STOP & SEND"}sample(t){if(!this.recording)return;const e=this.now();if(e-this.lastTrace<1/VT)return;this.lastTrace=e,this.trace.push({time:e,...t});const n=this.getSeed();this.seeds[this.seeds.length-1]!==n&&this.seeds.push(n)}event(t){this.recording&&this.events.push({t:this.now(),e:t})}async stop(){this.recording=!1,this.btn.textContent="● REC";const t=(window.prompt("What were you testing? (trim / wide swing / fast pump / hollow / other)")??"untitled").trim().replace(/[^\w-]+/g,"-").slice(0,40),e={label:t,recordedAt:new Date().toISOString(),screen:{w:window.innerWidth,h:window.innerHeight,dpr:window.devicePixelRatio},userAgent:navigator.userAgent,seeds:this.seeds,pointers:this.pointers,trace:this.trace,events:this.events},n=JSON.stringify(e);try{const i=await fetch("./__rec",{method:"POST",headers:{"Content-Type":"application/json"},body:n});if(!i.ok)throw new Error(String(i.status));this.flash(`saved ✓ (${this.pointers.length} touches)`)}catch{const i=document.createElement("a");i.href=URL.createObjectURL(new Blob([n],{type:"application/json"})),i.download=`surf-rec-${t}.json`,i.click(),this.flash("downloaded")}}flash(t){this.btn.textContent=t,setTimeout(()=>{this.recording||(this.btn.textContent="● REC")},2e3)}}const ze={deepD:-1,wideD:16,missBreakS:40,popupTime:.35,spawnT:.25,vFar:4,vGain:3,hFar:-.45,hGain:.25,endAfterLength:5},WT={grip:!1,targetHeading:null,stall:0,drive:0};class XT{constructor(t,e){M(this,"state","lineup");M(this,"summary",null);M(this,"waveCount",1);M(this,"onPhysEvent",null);M(this,"seed");M(this,"popupLeft",0);M(this,"rideSeconds",0);this.wave=t,this.phys=e,this.seed=t.seed}takeoffWindow(){const t=this.wave;return this.state!=="lineup"||!t.peeling||t.peelBlend<1?null:{minS:t.breakS+ze.deepD,maxS:t.breakS+ze.wideD}}tap(t){if(this.state==="ended"){this.nextWave();return}if(!this.takeoffWindow()||t===null||!Number.isFinite(t))return;const e=t-this.wave.breakS;if(e<ze.deepD)return this.end("Too deep",!1);if(e>ze.wideD)return this.end("Too wide",!1);const n=1-(e-ze.deepD)/(ze.wideD-ze.deepD),i=ze.vFar+ze.vGain*n,r=ze.hFar-ze.hGain*n;this.phys.spawn(t,ze.spawnT,i,r)&&(this.state="popup",this.popupLeft=ze.popupTime,this.rideSeconds=0)}step(t,e){var o;if(!(t>0)||!Number.isFinite(t))return;const n=this.wave;if(this.state==="lineup"){n.update(t),n.peeling&&n.breakS>ze.missBreakS&&this.end("Missed it",!1);return}if(this.state==="ended"){n.finished||n.update(t);return}n.update(t),this.rideSeconds+=t;const i=this.state==="popup";this.phys.step(t,i?WT:e),i&&(this.popupLeft-=t,this.popupLeft<=1e-9&&this.phys.riding&&(this.state="riding"));let r=null;for(const a of this.phys.drain())(o=this.onPhysEvent)==null||o.call(this,a),(a.type==="wipe"||a.type==="kickout")&&(r=a.reason.charAt(0).toUpperCase()+a.reason.slice(1));r===null&&!this.phys.riding&&(r="Wiped out"),r===null&&(this.phys.s>n.length+ze.endAfterLength||n.finished)&&(this.phys.state="kickedOut",r="Wave made"),r!==null&&this.end(r,!0)}end(t,e){this.state="ended",this.summary={seconds:e?this.rideSeconds:0,reason:t,rode:e}}nextWave(){this.seed=Math.imul(this.seed,1103515245)+12345&2147483647,this.wave.reset(this.seed),this.phys.state="idle",this.waveCount++,this.summary=null,this.state="lineup",this.popupLeft=0,this.rideSeconds=0}}const fm=900,dm=3,qT=fm*.96*(1+dm);function KT(s,t){return!Number.isFinite(s)||!Number.isFinite(t)?0:X(.05,1,Math.abs(s))*Zt((t-1)/6,0,1)}function YT(s,t,e){return!Number.isFinite(s)||!Number.isFinite(t)||!(t>0)?0:fm*Math.max(0,Math.abs(Math.sin(s))-.04)*Math.min(1,t/8)*(1+dm*Zt(Number.isFinite(e)?e:0,0,1))}function jT(s){return Math.round(230*Math.sqrt(Zt(Number.isFinite(s)?s:0,0,1)))}const Vc=1/120,Ud=.1,Fd=24,$T=document.getElementById("app")??document.body,tn=new BM({antialias:!0,powerPreference:"high-performance"});tn.setPixelRatio(Math.min(window.devicePixelRatio||1,2));tn.setSize(window.innerWidth,window.innerHeight,!1);tn.outputColorSpace=De;tn.toneMapping=Kd;tn.toneMappingExposure=1;$T.appendChild(tn.domElement);const Vn=new kM,ZT=vT(Vn),Od=RT(Vn,tn),Xi={x:0,y:0,z:0},JT=new URLSearchParams(location.search),Bd=NaN,QT=Number.isFinite(Bd)?Bd:Date.now()&65535|1,de=new Fl(QT),Ii=new _T(de);Vn.add(Ii.group);const $e=new ib(window.innerWidth/window.innerHeight),Ui=new U1(document.body);Ui.toggle(new URLSearchParams(location.search).has("debug"));function Br(){return de.breakS+8}function Ra(){const s=window.innerWidth,t=window.innerHeight;!(s>0)||!(t>0)||(tn.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),tn.setSize(s,t,!1),$e.setAspect(s/t),Ui.resize())}window.addEventListener("resize",Ra);var Wd;(Wd=window.visualViewport)==null||Wd.addEventListener("resize",Ra);window.addEventListener("orientationchange",()=>[100,300,700].forEach(s=>setTimeout(Ra,s)));Ra();window.addEventListener("keydown",s=>{(s.key==="d"||s.key==="D")&&Ui.toggle()});const Mt=new fa(de);Mt.tubeMode=new URLSearchParams(location.search).get("tube")==="lock"?"lock":"free";Mt.boostMode=new URLSearchParams(location.search).get("boost")==="0"?"off":"on";new URLSearchParams(location.search).get("pump")==="impulse"&&(Mt.pumpModel="impulse",Object.assign(Ps,{base:5,hollowGain:4}));const ks=document.createElement("div");ks.style.cssText="position:fixed;left:0;right:0;top:38%;text-align:center;pointer-events:none;z-index:5;font:800 clamp(28px,7vw,64px)/1.1 system-ui,-apple-system,sans-serif;color:#fff;text-shadow:0 2px 12px rgba(0,0,0,.55);letter-spacing:.02em;padding:0 16px;display:none;";document.body.appendChild(ks);function tE(s,t="#fff"){ks.textContent=s,ks.style.color=t,ks.style.display="block"}function eE(){ks.style.display="none"}const on=document.createElement("div");on.style.cssText="position:fixed;left:0;right:0;top:14%;text-align:center;pointer-events:none;z-index:5;font:700 clamp(18px,4.2vw,34px)/1.1 system-ui,-apple-system,sans-serif;color:#e8fbff;text-shadow:0 2px 10px rgba(0,0,0,.6);display:none;";document.body.appendChild(on);let Cr=0;const nE={dist:0,size:0};let pm=0;const iE={"ran ahead":"Ran ahead of the barrel","lip landed":"The lip landed on you"};function sE(s){if(Mt.riding&&Mt.inTube){const t=pb(de,Mt.s,Mt.t,nE);on.textContent=`TUBE ${Mt.tubeTime.toFixed(1)} s`,pm=t.dist,on.style.color="#e8fbff",on.style.display="block"}else Cr>0?(Cr-=s,Cr<=0&&(on.style.display="none")):on.style.display="none"}const Ae=new uS;Ae.group.scale.setScalar(kp);Vn.add(Ae.group);let An=new um(Ae);Vn.add(An.reflection,An.ghost);JT.get("rig")!=="capsule"&&$S().then(s=>{Ae.setModel(s),Vn.remove(An.reflection,An.ghost),An=new um(Ae),Vn.add(An.reflection,An.ghost)}).catch(s=>console.warn("surfer model not loaded, keeping the capsule rig:",s));const qi={deep:[0,0,0],face:[0,0,0],lip:[0,0,0],foam:[0,0,0]},oi=new zp(Math.ceil(qT*1.1)+460);Vn.add(oi.points);const ma=new zp(2200);{const s=ma.points.material;s.size=.2;const t=document.createElement("canvas");t.width=t.height=32;const e=t.getContext("2d");if(e){const n=e.createRadialGradient(16,16,0,16,16,16);n.addColorStop(0,"rgba(255,255,255,0.9)"),n.addColorStop(.5,"rgba(255,255,255,0.45)"),n.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=n,e.fillRect(0,0,32,32),s.map=new ba(t)}}Vn.add(ma.points);function rE(s){if(de.peeling&&de.barrelShape(de.breakS-4)>.5){const t=de.breakS;for(let e=-8;e<=3.5;e+=.35){const n=t+e,i=de.barrelShape(n),r=de.amp(n),o=i>.05?qp(de,n,Math.max(r,.001)):de.faceWidth(n),a=e>1.5?.5:0,c=Math.max(i,a);c<=.05||Mt.inTube&&Math.abs(n-Mt.s)<2.2||ma.emit(-n,.2,o,0,.9+.15*r,.6,22*c,s,.5)}}ma.update(s)}const Je=new N1(tn.domElement,()=>Mt.hb,{mode:F1(),thumbTurnCm:B1()});H1(Je);const Is={grip:!1,targetHeading:null,stall:0,drive:0},ra=[],mm=new GT(tn.domElement,()=>de.seed);function Ze(s){mm.event(s),ra.unshift(`${ga.toFixed(1)} ${s}`),ra.length>4&&(ra.length=4)}function oE(s){Je.update(s);for(const t of Je.drain())if(t.type==="debug")Ui.toggle();else if(t.type==="tap")Ze(`tap ${t.x.toFixed(0)},${t.y.toFixed(0)}`),lE(t.x,t.y);else if(t.type==="grip")Ze("grip");else if(t.type==="ollie"){const e=Mt.riding&&Mt.tryLaunch(t.spin);Ze(`ollie spin ${t.spin.toFixed(1)} ${e?"LAUNCH":"(no air yet)"}`)}Is.grip=Je.grip,Is.targetHeading=Je.targetHeading,Is.stall=Je.stall,Is.drive=Je.drive}let Wo=0,Yl=performance.now(),ga=0;const Pn=new XT(de,Mt),aE=.6;let kd=Pn.state,Dh=0;const zd=new nb,Hd=new pt;function cE(s,t){const e=tn.domElement.getBoundingClientRect();if(!(e.width>0)||!(e.height>0))return null;Hd.set((s-e.left)/e.width*2-1,-((t-e.top)/e.height*2-1)),zd.setFromCamera(Hd,$e.camera),Ii.surface.geometry.computeBoundingSphere();const n=zd.intersectObject(Ii.surface,!1)[0];return n?-n.point.x:null}function lE(s,t){if(Pn.state==="ended"){Dh>=aE&&Pn.tap(null);return}const e=cE(s,t);Ze(`tap s ${e===null?"miss":e.toFixed(1)}`),Pn.tap(e)}const kr=document.createElement("div");kr.style.cssText="position:fixed;inset:0;z-index:6;display:none;align-items:flex-end;justify-content:center;background:rgba(8,20,30,.25);font-family:system-ui,-apple-system,sans-serif;color:#fff;text-align:center;pointer-events:none;padding:12px 12px 6vh;";const Nh=document.createElement("div");Nh.style.cssText="background:rgba(10,30,45,.82);border-radius:18px;padding:clamp(10px,3vh,24px) clamp(20px,6vw,56px);text-shadow:0 2px 10px rgba(0,0,0,.4);";const Uh=document.createElement("div");Uh.style.cssText="font-weight:800;font-size:clamp(24px,6vw,52px);line-height:1.15;";const Fh=document.createElement("div");Fh.style.cssText="font-weight:600;font-size:clamp(18px,4.5vw,36px);margin-top:6px;opacity:.95;";const Oh=document.createElement("div");Oh.style.cssText="font-weight:600;font-size:clamp(16px,3.6vw,28px);margin-top:14px;color:#bfe6ff;";Oh.textContent="Tap for the next wave";Nh.append(Uh,Fh,Oh);kr.appendChild(Nh);document.body.appendChild(kr);const Ca=document.createElement("div");Ca.style.cssText="position:fixed;left:0;right:0;bottom:12%;text-align:center;pointer-events:none;z-index:5;display:none;font:700 clamp(18px,4vw,32px)/1.2 system-ui,-apple-system,sans-serif;color:#fff;opacity:.9;text-shadow:0 2px 10px rgba(0,0,0,.55);padding:0 16px;";Ca.textContent="Tap the wave to catch it";document.body.appendChild(Ca);function hE(){const s=Pn.state;if(s!==kd){if(s==="popup")Je.rebase(Mt.hb),Ae.reset(),Ze("spawn");else if(s==="ended"){const t=Pn.summary;Dh=0,Ze(`end: ${t.reason} ${t.seconds.toFixed(1)}s`),tE(t.reason,t.rode?t.reason==="Wave made"?"#bff7c8":"#ffd2c2":"#ffe9a8"),Uh.textContent=t.rode?`You rode ${t.seconds.toFixed(1)} s`:"No ride",Fh.textContent=`Ended: ${t.reason}`,kr.style.display="flex"}else s==="lineup"&&(kr.style.display="none",eE(),oi.clear(),$e.snap(Br(),de.amp(Br())));kd=s}}function uE(s){ga+=s,Pn.step(s,Is),Pn.state==="ended"&&(Dh+=s),hE()}Pn.onPhysEvent=s=>{s.type==="pump"?Ze(`pump +${s.dv.toFixed(2)}`):s.type==="wipe"?Ze(`WIPE: ${s.reason}`):s.type==="kickout"?Ze(`kickout: ${s.reason}`):s.type==="tubeEnter"?Ze("tube in"):s.type==="tubeMiss"?(Ze(`tube miss: ${s.reason}`),on.textContent=iE[s.reason],on.style.color="#ffd27d",on.style.display="block",Cr=1.8):s.type==="spit"?(Ze("spit"),Bh=!0):(Ze(`tube out ${s.duration.toFixed(1)}s ${s.made?"MADE":""}`),s.made&&(on.textContent=`MADE IT! ${s.duration.toFixed(1)} s`,on.style.color="#7dffb2",on.style.display="block",Cr=1.8))};let Bh=!1;const ws=new C;function fE(){Bh=!1,Mt.state!=="idle"&&(ws.copy(Ae.group.position),ws.x-=.8,ws.y+=.8,oi.burst(ws.x,ws.y,ws.z,-14,2.5,2,220,3.5))}const Un=new C;let Vd=!1,Gd=0;function dE(s){if(Mt.riding){const t=Math.abs(Math.sin(Mt.skid)),e=KT(Mt.skid,Mt.v),n=YT(Mt.skid,Mt.v,e);Ae.tailWorld(Un);const i=Mt.skid>0?-1:1,r=3+4*t+4*e,o=3.2+2.5*e,a=Ae.by,c=Ae.bz,l=-Math.cos(Mt.hv)*Mt.v*.25,h=c.x*i*r+a.x*o+l,u=c.y*i*r+a.y*o,f=c.z*i*r+a.z*o;oi.emit(Un.x,Un.y,Un.z,h,u,f,n,s,1.2+1.3*e);const d=Mt.t<.25&&Math.abs(Mt.skid)>.4;Mt.boostCount>Gd&&(oi.burst(Un.x,Un.y,Un.z,h*.8,u*.8+1.2,f*.8,45,1.4),Ze(`boost ${Mt.boostKind}`)),Gd=Mt.boostCount,d&&!Vd&&oi.burst(Un.x,Un.y,Un.z,h*1.2,u*1.4+1.5,f*1.2,jT(e),1.8+1.5*e),Vd=d}oi.update(s),rE(s)}const Xo=s=>(s*180/Math.PI).toFixed(0),gm=s=>requestAnimationFrame(s);function _m(s){let t=(s-Yl)/1e3;Yl=s,t>Ud&&(t=Ud),t<0&&(t=0),oE(t),Wo+=t;let e=0;for(;Wo>=Vc&&e<Fd;)uE(Vc),Wo-=Vc,e++;if(e>=Fd&&(Wo=0),Ae.update(Mt,de,t),Bh&&fE(),dE(t),sE(t),Mt.state!=="idle"){const i=Mt.riding?Mt.face.y:Math.max(0,Ae.group.position.y),r=Mt.riding?Mt.face.u:Ae.group.position.z,o=Mt.riding?Mt.s:-Ae.group.position.x;$e.setTube(Mt.riding&&Mt.inTube),$e.update(o,de.amp(o),t,i,r,Math.cos(Mt.hv)>=0?1:-1)}else{const i=Br();$e.update(i,de.amp(i),t)}Mt.riding&&Mt.inTube?Ii.setRider({s:Mt.s,u:Mt.face.u,deep:-Mt.d/(1.5+5*de.hollow(Mt.s))}):Ii.setRider(null),LT(Od.state.phase,qi),Ii.setWaterTint(qi),An.setWater(qi.face),An.setGhostWater(qi.face,qi.lip,qi.foam),Ii.update($e.focusS,ga),An.update(de,Mt,$e.camera,ga,t),Ae.group.visible?(Xi.x=Ae.group.position.x,Xi.y=Ae.group.position.y,Xi.z=Ae.group.position.z):(Xi.x=$e.camera.position.x,Xi.y=0,Xi.z=$e.camera.position.z-20),Od.update(t,Xi),ZT.update($e.camera.position.x,qi.deep),tn.render(Vn,$e.camera),mm.sample({state:Mt.state,s:Mt.s,t:Mt.t,v:Mt.v,hb:Mt.hb,hv:Mt.hv,d:Mt.d,skid:Mt.skid});const n=Mt.state==="idle"?"waiting for the peel":Mt.state;Ca.style.display=Pn.takeoffWindow()?"block":"none",Ui.setLines([`wave #${Pn.waveCount} seed ${de.seed}  ${de.peeling?`breakS ${de.breakS.toFixed(1)} peel ${de.peelSpeed(de.breakS).toFixed(1)} m/s`:`lineup ${de.arrival.toFixed(2)}`}`,`${n}  v ${Mt.v.toFixed(1)} m/s  t ${Mt.t.toFixed(2)}  d ${Mt.d.toFixed(1)} m  sinA ${Mt.face.sinA.toFixed(2)}${Mt.inTube?`  TUBE mouth ${pm.toFixed(1)} m`:""}`,`hb ${Xo(Mt.hb)}°  hv ${Xo(Mt.hv)}°  skid ${Mt.skid.toFixed(2)}  turn ${Mt.turnRate.toFixed(1)}/${Mt.carveRate.toFixed(1)}  stall ${Mt.stall.toFixed(2)}  drive ${Mt.drive.toFixed(2)}  lean ${Xo(Mt.lean)}°  load ${Mt.load.toFixed(2)} w ${Mt.weight.toFixed(2)}  [${Mt.pumpModel}]`,`grip ${Je.grip?"Y":"n"}  target ${Je.targetHeading===null?"- (trim)":Xo(Je.targetHeading)+"°"}  spray ${oi.count}`,`events: ${ra.join(" | ")}`,"keys: Space grip  Up/Down rotate  Shift stall  F drive  D debug   (fingers: slide both forward = drive, back = stall)"]),Ui.setShapes({fingers:Je.pointers,target:Je.targetHeading,board:Mt.hb}),Ui.frame(t),gm(_m)}$e.snap(Br(),de.amp(Br()));gm(s=>{Yl=s,_m(s)});window.__surf={wave:de,cam:$e,debug:Ui,renderer:tn,input:Je,phys:Mt,rig:Ae,spray:oi,ctl:Is,waveMesh:Ii,get riderLook(){return An}};
