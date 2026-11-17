var qm=Object.defineProperty;var Km=(s,t,e)=>t in s?qm(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var M=(s,t,e)=>Km(s,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ih="170",Ym=0,iu=1,jm=2,up=1,dp=2,oi=3,di=0,Xe=1,Be=2,Ui=0,Fs=1,su=2,ru=3,ou=4,$m=5,Ji=100,Zm=101,Jm=102,Qm=103,t0=104,e0=200,n0=201,i0=202,s0=203,Zc=204,Jc=205,r0=206,o0=207,a0=208,c0=209,l0=210,h0=211,u0=212,d0=213,f0=214,Qc=0,tl=1,el=2,Vs=3,nl=4,il=5,sl=6,rl=7,sh=0,p0=1,m0=2,Oi=0,g0=1,_0=2,x0=3,fp=4,v0=5,M0=6,y0=7,au="attached",pp="detached",mp=300,Gs=301,Ws=302,ol=303,al=304,ba=306,is=1e3,Ni=1001,ua=1002,qe=1003,gp=1004,Mr=1005,en=1006,Zo=1007,Xn=1008,fi=1009,_p=1010,xp=1011,Fr=1012,rh=1013,ss=1014,Nn=1015,Xr=1016,oh=1017,ah=1018,Xs=1020,vp=35902,Mp=1021,yp=1022,mn=1023,bp=1024,Sp=1025,Us=1026,qs=1027,ch=1028,lh=1029,Tp=1030,hh=1031,uh=1033,Jo=33776,Qo=33777,ta=33778,ea=33779,cl=35840,ll=35841,hl=35842,ul=35843,dl=36196,fl=37492,pl=37496,ml=37808,gl=37809,_l=37810,xl=37811,vl=37812,Ml=37813,yl=37814,bl=37815,Sl=37816,Tl=37817,El=37818,Al=37819,wl=37820,Rl=37821,na=36492,Cl=36494,Pl=36495,Ep=36283,Ll=36284,Il=36285,Nl=36286,Ur=2300,Or=2301,Oa=2302,cu=2400,lu=2401,hu=2402,b0=2500,S0=0,Ap=1,Dl=2,T0=3200,E0=3201,dh=0,A0=1,Li="",Ne="srgb",Ke="srgb-linear",Sa="linear",fe="srgb",us=7680,uu=519,w0=512,R0=513,C0=514,wp=515,P0=516,L0=517,I0=518,N0=519,Fl=35044,Se=35048,du="300 es",li=2e3,da=2001;class Qs{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,t);t.target=null}}}const Ue=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let fu=1234567;const Tr=Math.PI/180,Ks=180/Math.PI;function gn(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ue[s&255]+Ue[s>>8&255]+Ue[s>>16&255]+Ue[s>>24&255]+"-"+Ue[t&255]+Ue[t>>8&255]+"-"+Ue[t>>16&15|64]+Ue[t>>24&255]+"-"+Ue[e&63|128]+Ue[e>>8&255]+"-"+Ue[e>>16&255]+Ue[e>>24&255]+Ue[n&255]+Ue[n>>8&255]+Ue[n>>16&255]+Ue[n>>24&255]).toLowerCase()}function we(s,t,e){return Math.max(t,Math.min(e,s))}function fh(s,t){return(s%t+t)%t}function D0(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function F0(s,t,e){return s!==t?(e-s)/(t-s):0}function Er(s,t,e){return(1-e)*s+e*t}function U0(s,t,e,n){return Er(s,t,1-Math.exp(-e*n))}function O0(s,t=1){return t-Math.abs(fh(s,t*2)-t)}function B0(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function k0(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function H0(s,t){return s+Math.floor(Math.random()*(t-s+1))}function z0(s,t){return s+Math.random()*(t-s)}function V0(s){return s*(.5-Math.random())}function G0(s){s!==void 0&&(fu=s);let t=fu+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function W0(s){return s*Tr}function X0(s){return s*Ks}function q0(s){return(s&s-1)===0&&s!==0}function K0(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Y0(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function j0(s,t,e,n,i){const r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),l=r((t+n)/2),h=o((t+n)/2),u=r((t-n)/2),d=o((t-n)/2),f=r((n-t)/2),m=o((n-t)/2);switch(i){case"XYX":s.set(a*h,c*u,c*d,a*l);break;case"YZY":s.set(c*d,a*h,c*u,a*l);break;case"ZXZ":s.set(c*u,c*d,a*h,a*l);break;case"XZX":s.set(a*h,c*m,c*f,a*l);break;case"YXY":s.set(c*f,a*h,c*m,a*l);break;case"ZYZ":s.set(c*m,c*f,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Cn(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function ue(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const $0={DEG2RAD:Tr,RAD2DEG:Ks,generateUUID:gn,clamp:we,euclideanModulo:fh,mapLinear:D0,inverseLerp:F0,lerp:Er,damp:U0,pingpong:O0,smoothstep:B0,smootherstep:k0,randInt:H0,randFloat:z0,randFloatSpread:V0,seededRandom:G0,degToRad:W0,radToDeg:X0,isPowerOfTwo:q0,ceilPowerOfTwo:K0,floorPowerOfTwo:Y0,setQuaternionFromProperEuler:j0,normalize:ue,denormalize:Cn};class pt{constructor(t=0,e=0){pt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(we(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*i+t.x,this.y=r*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class $t{constructor(t,e,n,i,r,o,a,c,l){$t.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,c,l)}set(t,e,n,i,r,o,a,c,l){const h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],f=n[5],m=n[8],_=i[0],g=i[3],p=i[6],v=i[1],y=i[4],x=i[7],N=i[2],w=i[5],C=i[8];return r[0]=o*_+a*v+c*N,r[3]=o*g+a*y+c*w,r[6]=o*p+a*x+c*C,r[1]=l*_+h*v+u*N,r[4]=l*g+h*y+u*w,r[7]=l*p+h*x+u*C,r[2]=d*_+f*v+m*N,r[5]=d*g+f*y+m*w,r[8]=d*p+f*x+m*C,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-n*r*h+n*a*c+i*r*l-i*o*c}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=h*o-a*l,d=a*c-h*r,f=l*r-o*c,m=e*u+n*d+i*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/m;return t[0]=u*_,t[1]=(i*l-h*n)*_,t[2]=(a*n-i*o)*_,t[3]=d*_,t[4]=(h*e-i*c)*_,t[5]=(i*r-a*e)*_,t[6]=f*_,t[7]=(n*c-l*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-i*l,i*c,-i*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Ba.makeScale(t,e)),this}rotate(t){return this.premultiply(Ba.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ba.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Ba=new $t;function Rp(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Br(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Z0(){const s=Br("canvas");return s.style.display="block",s}const pu={};function yr(s){s in pu||(pu[s]=!0,console.warn(s))}function J0(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Q0(s){const t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function tg(s){const t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const ee={enabled:!0,workingColorSpace:Ke,spaces:{},convert:function(s,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===fe&&(s.r=ui(s.r),s.g=ui(s.g),s.b=ui(s.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(s.applyMatrix3(this.spaces[t].toXYZ),s.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===fe&&(s.r=Os(s.r),s.g=Os(s.g),s.b=Os(s.b))),s},fromWorkingColorSpace:function(s,t){return this.convert(s,this.workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Li?Sa:this.spaces[s].transfer},getLuminanceCoefficients:function(s,t=this.workingColorSpace){return s.fromArray(this.spaces[t].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,t,e){return s.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function ui(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Os(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const mu=[.64,.33,.3,.6,.15,.06],gu=[.2126,.7152,.0722],_u=[.3127,.329],xu=new $t().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),vu=new $t().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ee.define({[Ke]:{primaries:mu,whitePoint:_u,transfer:Sa,toXYZ:xu,fromXYZ:vu,luminanceCoefficients:gu,workingColorSpaceConfig:{unpackColorSpace:Ne},outputColorSpaceConfig:{drawingBufferColorSpace:Ne}},[Ne]:{primaries:mu,whitePoint:_u,transfer:fe,toXYZ:xu,fromXYZ:vu,luminanceCoefficients:gu,outputColorSpaceConfig:{drawingBufferColorSpace:Ne}}});let ds;class eg{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ds===void 0&&(ds=Br("canvas")),ds.width=t.width,ds.height=t.height;const n=ds.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=ds}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Br("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=ui(r[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ui(e[n]/255)*255):e[n]=ui(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let ng=0;class Cp{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ng++}),this.uuid=gn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(ka(i[o].image)):r.push(ka(i[o]))}else r=ka(i);n.url=r}return e||(t.images[this.uuid]=n),n}}function ka(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?eg.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ig=0;class Re extends Qs{constructor(t=Re.DEFAULT_IMAGE,e=Re.DEFAULT_MAPPING,n=Ni,i=Ni,r=en,o=Xn,a=mn,c=fi,l=Re.DEFAULT_ANISOTROPY,h=Li){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ig++}),this.uuid=gn(),this.name="",this.source=new Cp(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new pt(0,0),this.repeat=new pt(1,1),this.center=new pt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $t,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==mp)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case is:t.x=t.x-Math.floor(t.x);break;case Ni:t.x=t.x<0?0:1;break;case ua:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case is:t.y=t.y-Math.floor(t.y);break;case Ni:t.y=t.y<0?0:1;break;case ua:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Re.DEFAULT_IMAGE=null;Re.DEFAULT_MAPPING=mp;Re.DEFAULT_ANISOTROPY=1;class ae{constructor(t=0,e=0,n=0,i=1){ae.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r;const c=t.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],m=c[9],_=c[2],g=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(m+g)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const y=(l+1)/2,x=(f+1)/2,N=(p+1)/2,w=(h+d)/4,C=(u+_)/4,I=(m+g)/4;return y>x&&y>N?y<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(y),i=w/n,r=C/n):x>N?x<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(x),n=w/i,r=I/i):N<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(N),n=C/r,i=I/r),this.set(n,i,r,e),this}let v=Math.sqrt((g-m)*(g-m)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(v)<.001&&(v=1),this.x=(g-m)/v,this.y=(u-_)/v,this.z=(d-h)/v,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class sg extends Qs{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ae(0,0,t,e),this.scissorTest=!1,this.viewport=new ae(0,0,t,e);const i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:en,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Re(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Cp(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class rs extends sg{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Pp extends Re{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=qe,this.minFilter=qe,this.wrapR=Ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class rg extends Re{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=qe,this.minFilter=qe,this.wrapR=Ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class he{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,o,a){let c=n[i+0],l=n[i+1],h=n[i+2],u=n[i+3];const d=r[o+0],f=r[o+1],m=r[o+2],_=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=m,t[e+3]=_;return}if(u!==_||c!==d||l!==f||h!==m){let g=1-a;const p=c*d+l*f+h*m+u*_,v=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){const N=Math.sqrt(y),w=Math.atan2(N,p*v);g=Math.sin(g*w)/N,a=Math.sin(a*w)/N}const x=a*v;if(c=c*g+d*x,l=l*g+f*x,h=h*g+m*x,u=u*g+_*x,g===1-a){const N=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=N,l*=N,h*=N,u*=N}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,r,o){const a=n[i],c=n[i+1],l=n[i+2],h=n[i+3],u=r[o],d=r[o+1],f=r[o+2],m=r[o+3];return t[e]=a*m+h*u+c*f-l*d,t[e+1]=c*m+h*d+l*u-a*f,t[e+2]=l*m+h*f+a*d-c*u,t[e+3]=h*m-a*u-c*d-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(i/2),u=a(r/2),d=c(n/2),f=c(i/2),m=c(r/2);switch(o){case"XYZ":this._x=d*h*u+l*f*m,this._y=l*f*u-d*h*m,this._z=l*h*m+d*f*u,this._w=l*h*u-d*f*m;break;case"YXZ":this._x=d*h*u+l*f*m,this._y=l*f*u-d*h*m,this._z=l*h*m-d*f*u,this._w=l*h*u+d*f*m;break;case"ZXY":this._x=d*h*u-l*f*m,this._y=l*f*u+d*h*m,this._z=l*h*m+d*f*u,this._w=l*h*u-d*f*m;break;case"ZYX":this._x=d*h*u-l*f*m,this._y=l*f*u+d*h*m,this._z=l*h*m-d*f*u,this._w=l*h*u+d*f*m;break;case"YZX":this._x=d*h*u+l*f*m,this._y=l*f*u+d*h*m,this._z=l*h*m-d*f*u,this._w=l*h*u-d*f*m;break;case"XZY":this._x=d*h*u-l*f*m,this._y=l*f*u-d*h*m,this._z=l*h*m+d*f*u,this._w=l*h*u+d*f*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(o-i)*f}else if(n>a&&n>u){const f=2*Math.sqrt(1+n-a-u);this._w=(h-c)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(r+l)/f}else if(a>u){const f=2*Math.sqrt(1+a-n-u);this._w=(r-l)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(c+h)/f}else{const f=2*Math.sqrt(1+u-n-a);this._w=(o-i)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(we(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+o*a+i*l-r*c,this._y=i*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-i*a,this._w=o*h-n*a-i*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+i*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*i+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-e)*h)/l,d=Math.sin(e*h)/l;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class R{constructor(t=0,e=0,n=0){R.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Mu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Mu.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*i-a*n),h=2*(a*e-r*i),u=2*(r*n-o*e);return this.x=e+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=i+c*u+r*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=i*c-r*a,this.y=r*o-n*c,this.z=n*a-i*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ha.copy(this).projectOnVector(t),this.sub(Ha)}reflect(t){return this.sub(Ha.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(we(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ha=new R,Mu=new he;class mi{constructor(t=new R(1/0,1/0,1/0),e=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(vn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(vn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=vn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,vn):vn.fromBufferAttribute(r,o),vn.applyMatrix4(t.matrixWorld),this.expandByPoint(vn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),to.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),to.copy(n.boundingBox)),to.applyMatrix4(t.matrixWorld),this.union(to)}const i=t.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,vn),vn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(or),eo.subVectors(this.max,or),fs.subVectors(t.a,or),ps.subVectors(t.b,or),ms.subVectors(t.c,or),xi.subVectors(ps,fs),vi.subVectors(ms,ps),Hi.subVectors(fs,ms);let e=[0,-xi.z,xi.y,0,-vi.z,vi.y,0,-Hi.z,Hi.y,xi.z,0,-xi.x,vi.z,0,-vi.x,Hi.z,0,-Hi.x,-xi.y,xi.x,0,-vi.y,vi.x,0,-Hi.y,Hi.x,0];return!za(e,fs,ps,ms,eo)||(e=[1,0,0,0,1,0,0,0,1],!za(e,fs,ps,ms,eo))?!1:(no.crossVectors(xi,vi),e=[no.x,no.y,no.z],za(e,fs,ps,ms,eo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,vn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(vn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Qn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Qn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Qn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Qn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Qn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Qn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Qn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Qn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Qn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Qn=[new R,new R,new R,new R,new R,new R,new R,new R],vn=new R,to=new mi,fs=new R,ps=new R,ms=new R,xi=new R,vi=new R,Hi=new R,or=new R,eo=new R,no=new R,zi=new R;function za(s,t,e,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){zi.fromArray(s,r);const a=i.x*Math.abs(zi.x)+i.y*Math.abs(zi.y)+i.z*Math.abs(zi.z),c=t.dot(zi),l=e.dot(zi),h=n.dot(zi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const og=new mi,ar=new R,Va=new R;class Yn{constructor(t=new R,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):og.setFromPoints(t).getCenter(n);let i=0;for(let r=0,o=t.length;r<o;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ar.subVectors(t,this.center);const e=ar.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(ar,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Va.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ar.copy(t.center).add(Va)),this.expandByPoint(ar.copy(t.center).sub(Va))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ti=new R,Ga=new R,io=new R,Mi=new R,Wa=new R,so=new R,Xa=new R;class qr{constructor(t=new R,e=new R(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ti)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=ti.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ti.copy(this.origin).addScaledVector(this.direction,e),ti.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Ga.copy(t).add(e).multiplyScalar(.5),io.copy(e).sub(t).normalize(),Mi.copy(this.origin).sub(Ga);const r=t.distanceTo(e)*.5,o=-this.direction.dot(io),a=Mi.dot(this.direction),c=-Mi.dot(io),l=Mi.lengthSq(),h=Math.abs(1-o*o);let u,d,f,m;if(h>0)if(u=o*c-a,d=o*a-c,m=r*h,u>=0)if(d>=-m)if(d<=m){const _=1/h;u*=_,d*=_,f=u*(u+o*d+2*a)+d*(o*u+d+2*c)+l}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d<=-m?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l):d<=m?(u=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Ga).addScaledVector(io,d),f}intersectSphere(t,e){ti.subVectors(t.center,this.origin);const n=ti.dot(this.direction),i=ti.dot(ti)-n*n,r=t.radius*t.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(t.min.x-d.x)*l,i=(t.max.x-d.x)*l):(n=(t.max.x-d.x)*l,i=(t.min.x-d.x)*l),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),u>=0?(a=(t.min.z-d.z)*u,c=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,c=(t.min.z-d.z)*u),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,ti)!==null}intersectTriangle(t,e,n,i,r){Wa.subVectors(e,t),so.subVectors(n,t),Xa.crossVectors(Wa,so);let o=this.direction.dot(Xa),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Mi.subVectors(this.origin,t);const c=a*this.direction.dot(so.crossVectors(Mi,so));if(c<0)return null;const l=a*this.direction.dot(Wa.cross(Mi));if(l<0||c+l>o)return null;const h=-a*Mi.dot(Xa);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Vt{constructor(t,e,n,i,r,o,a,c,l,h,u,d,f,m,_,g){Vt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,c,l,h,u,d,f,m,_,g)}set(t,e,n,i,r,o,a,c,l,h,u,d,f,m,_,g){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=m,p[11]=_,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Vt().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/gs.setFromMatrixColumn(t,0).length(),r=1/gs.setFromMatrixColumn(t,1).length(),o=1/gs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const d=o*h,f=o*u,m=a*h,_=a*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=f+m*l,e[5]=d-_*l,e[9]=-a*c,e[2]=_-d*l,e[6]=m+f*l,e[10]=o*c}else if(t.order==="YXZ"){const d=c*h,f=c*u,m=l*h,_=l*u;e[0]=d+_*a,e[4]=m*a-f,e[8]=o*l,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=f*a-m,e[6]=_+d*a,e[10]=o*c}else if(t.order==="ZXY"){const d=c*h,f=c*u,m=l*h,_=l*u;e[0]=d-_*a,e[4]=-o*u,e[8]=m+f*a,e[1]=f+m*a,e[5]=o*h,e[9]=_-d*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const d=o*h,f=o*u,m=a*h,_=a*u;e[0]=c*h,e[4]=m*l-f,e[8]=d*l+_,e[1]=c*u,e[5]=_*l+d,e[9]=f*l-m,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const d=o*c,f=o*l,m=a*c,_=a*l;e[0]=c*h,e[4]=_-d*u,e[8]=m*u+f,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=f*u+m,e[10]=d-_*u}else if(t.order==="XZY"){const d=o*c,f=o*l,m=a*c,_=a*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=d*u+_,e[5]=o*h,e[9]=f*u-m,e[2]=m*u-f,e[6]=a*h,e[10]=_*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(ag,t,cg)}lookAt(t,e,n){const i=this.elements;return rn.subVectors(t,e),rn.lengthSq()===0&&(rn.z=1),rn.normalize(),yi.crossVectors(n,rn),yi.lengthSq()===0&&(Math.abs(n.z)===1?rn.x+=1e-4:rn.z+=1e-4,rn.normalize(),yi.crossVectors(n,rn)),yi.normalize(),ro.crossVectors(rn,yi),i[0]=yi.x,i[4]=ro.x,i[8]=rn.x,i[1]=yi.y,i[5]=ro.y,i[9]=rn.y,i[2]=yi.z,i[6]=ro.z,i[10]=rn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],f=n[13],m=n[2],_=n[6],g=n[10],p=n[14],v=n[3],y=n[7],x=n[11],N=n[15],w=i[0],C=i[4],I=i[8],T=i[12],b=i[1],L=i[5],z=i[9],F=i[13],G=i[2],q=i[6],K=i[10],Z=i[14],H=i[3],st=i[7],ot=i[11],_t=i[15];return r[0]=o*w+a*b+c*G+l*H,r[4]=o*C+a*L+c*q+l*st,r[8]=o*I+a*z+c*K+l*ot,r[12]=o*T+a*F+c*Z+l*_t,r[1]=h*w+u*b+d*G+f*H,r[5]=h*C+u*L+d*q+f*st,r[9]=h*I+u*z+d*K+f*ot,r[13]=h*T+u*F+d*Z+f*_t,r[2]=m*w+_*b+g*G+p*H,r[6]=m*C+_*L+g*q+p*st,r[10]=m*I+_*z+g*K+p*ot,r[14]=m*T+_*F+g*Z+p*_t,r[3]=v*w+y*b+x*G+N*H,r[7]=v*C+y*L+x*q+N*st,r[11]=v*I+y*z+x*K+N*ot,r[15]=v*T+y*F+x*Z+N*_t,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],u=t[6],d=t[10],f=t[14],m=t[3],_=t[7],g=t[11],p=t[15];return m*(+r*c*u-i*l*u-r*a*d+n*l*d+i*a*f-n*c*f)+_*(+e*c*f-e*l*d+r*o*d-i*o*f+i*l*h-r*c*h)+g*(+e*l*u-e*a*f-r*o*u+n*o*f+r*a*h-n*l*h)+p*(-i*a*h-e*c*u+e*a*d+i*o*u-n*o*d+n*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=t[9],d=t[10],f=t[11],m=t[12],_=t[13],g=t[14],p=t[15],v=u*g*l-_*d*l+_*c*f-a*g*f-u*c*p+a*d*p,y=m*d*l-h*g*l-m*c*f+o*g*f+h*c*p-o*d*p,x=h*_*l-m*u*l+m*a*f-o*_*f-h*a*p+o*u*p,N=m*u*c-h*_*c-m*a*d+o*_*d+h*a*g-o*u*g,w=e*v+n*y+i*x+r*N;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/w;return t[0]=v*C,t[1]=(_*d*r-u*g*r-_*i*f+n*g*f+u*i*p-n*d*p)*C,t[2]=(a*g*r-_*c*r+_*i*l-n*g*l-a*i*p+n*c*p)*C,t[3]=(u*c*r-a*d*r-u*i*l+n*d*l+a*i*f-n*c*f)*C,t[4]=y*C,t[5]=(h*g*r-m*d*r+m*i*f-e*g*f-h*i*p+e*d*p)*C,t[6]=(m*c*r-o*g*r-m*i*l+e*g*l+o*i*p-e*c*p)*C,t[7]=(o*d*r-h*c*r+h*i*l-e*d*l-o*i*f+e*c*f)*C,t[8]=x*C,t[9]=(m*u*r-h*_*r-m*n*f+e*_*f+h*n*p-e*u*p)*C,t[10]=(o*_*r-m*a*r+m*n*l-e*_*l-o*n*p+e*a*p)*C,t[11]=(h*a*r-o*u*r-h*n*l+e*u*l+o*n*f-e*a*f)*C,t[12]=N*C,t[13]=(h*_*i-m*u*i+m*n*d-e*_*d-h*n*g+e*u*g)*C,t[14]=(m*a*i-o*_*i-m*n*c+e*_*c+o*n*g-e*a*g)*C,t[15]=(o*u*i-h*a*i+h*n*c-e*u*c-o*n*d+e*a*d)*C,this}scale(t){const e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,h*a+n,h*c-i*o,0,l*c-i*a,h*c+i*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,o){return this.set(1,n,r,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,h=o+o,u=a+a,d=r*l,f=r*h,m=r*u,_=o*h,g=o*u,p=a*u,v=c*l,y=c*h,x=c*u,N=n.x,w=n.y,C=n.z;return i[0]=(1-(_+p))*N,i[1]=(f+x)*N,i[2]=(m-y)*N,i[3]=0,i[4]=(f-x)*w,i[5]=(1-(d+p))*w,i[6]=(g+v)*w,i[7]=0,i[8]=(m+y)*C,i[9]=(g-v)*C,i[10]=(1-(d+_))*C,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let r=gs.set(i[0],i[1],i[2]).length();const o=gs.set(i[4],i[5],i[6]).length(),a=gs.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],Mn.copy(this);const l=1/r,h=1/o,u=1/a;return Mn.elements[0]*=l,Mn.elements[1]*=l,Mn.elements[2]*=l,Mn.elements[4]*=h,Mn.elements[5]*=h,Mn.elements[6]*=h,Mn.elements[8]*=u,Mn.elements[9]*=u,Mn.elements[10]*=u,e.setFromRotationMatrix(Mn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,i,r,o,a=li){const c=this.elements,l=2*r/(e-t),h=2*r/(n-i),u=(e+t)/(e-t),d=(n+i)/(n-i);let f,m;if(a===li)f=-(o+r)/(o-r),m=-2*o*r/(o-r);else if(a===da)f=-o/(o-r),m=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,r,o,a=li){const c=this.elements,l=1/(e-t),h=1/(n-i),u=1/(o-r),d=(e+t)*l,f=(n+i)*h;let m,_;if(a===li)m=(o+r)*u,_=-2*u;else if(a===da)m=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=_,c[14]=-m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const gs=new R,Mn=new Vt,ag=new R(0,0,0),cg=new R(1,1,1),yi=new R,ro=new R,rn=new R,yu=new Vt,bu=new he;class On{constructor(t=0,e=0,n=0,i=On.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,r=i[0],o=i[4],a=i[8],c=i[1],l=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(we(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-we(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(we(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-we(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(we(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-we(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return yu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(yu,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return bu.setFromEuler(this),this.setFromQuaternion(bu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}On.DEFAULT_ORDER="XYZ";class ph{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let lg=0;const Su=new R,_s=new he,ei=new Vt,oo=new R,cr=new R,hg=new R,ug=new he,Tu=new R(1,0,0),Eu=new R(0,1,0),Au=new R(0,0,1),wu={type:"added"},dg={type:"removed"},xs={type:"childadded",child:null},qa={type:"childremoved",child:null};class Me extends Qs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:lg++}),this.uuid=gn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Me.DEFAULT_UP.clone();const t=new R,e=new On,n=new he,i=new R(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Vt},normalMatrix:{value:new $t}}),this.matrix=new Vt,this.matrixWorld=new Vt,this.matrixAutoUpdate=Me.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Me.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ph,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return _s.setFromAxisAngle(t,e),this.quaternion.multiply(_s),this}rotateOnWorldAxis(t,e){return _s.setFromAxisAngle(t,e),this.quaternion.premultiply(_s),this}rotateX(t){return this.rotateOnAxis(Tu,t)}rotateY(t){return this.rotateOnAxis(Eu,t)}rotateZ(t){return this.rotateOnAxis(Au,t)}translateOnAxis(t,e){return Su.copy(t).applyQuaternion(this.quaternion),this.position.add(Su.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Tu,t)}translateY(t){return this.translateOnAxis(Eu,t)}translateZ(t){return this.translateOnAxis(Au,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ei.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?oo.copy(t):oo.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),cr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ei.lookAt(cr,oo,this.up):ei.lookAt(oo,cr,this.up),this.quaternion.setFromRotationMatrix(ei),i&&(ei.extractRotation(i.matrixWorld),_s.setFromRotationMatrix(ei),this.quaternion.premultiply(_s.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(wu),xs.child=t,this.dispatchEvent(xs),xs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(dg),qa.child=t,this.dispatchEvent(qa),qa.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ei.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ei.multiply(t.parent.matrixWorld)),t.applyMatrix4(ei),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(wu),xs.child=t,this.dispatchEvent(xs),xs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(cr,t,hg),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(cr,ug,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));i.material=a}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];i.animations.push(r(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),f=o(t.animations),m=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=i,n;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}Me.DEFAULT_UP=new R(0,1,0);Me.DEFAULT_MATRIX_AUTO_UPDATE=!0;Me.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const yn=new R,ni=new R,Ka=new R,ii=new R,vs=new R,Ms=new R,Ru=new R,Ya=new R,ja=new R,$a=new R,Za=new ae,Ja=new ae,Qa=new ae;class Pn{constructor(t=new R,e=new R,n=new R){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),yn.subVectors(t,e),i.cross(yn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){yn.subVectors(i,e),ni.subVectors(n,e),Ka.subVectors(t,e);const o=yn.dot(yn),a=yn.dot(ni),c=yn.dot(Ka),l=ni.dot(ni),h=ni.dot(Ka),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(l*c-a*h)*d,m=(o*h-a*c)*d;return r.set(1-f-m,m,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,ii)===null?!1:ii.x>=0&&ii.y>=0&&ii.x+ii.y<=1}static getInterpolation(t,e,n,i,r,o,a,c){return this.getBarycoord(t,e,n,i,ii)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,ii.x),c.addScaledVector(o,ii.y),c.addScaledVector(a,ii.z),c)}static getInterpolatedAttribute(t,e,n,i,r,o){return Za.setScalar(0),Ja.setScalar(0),Qa.setScalar(0),Za.fromBufferAttribute(t,e),Ja.fromBufferAttribute(t,n),Qa.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(Za,r.x),o.addScaledVector(Ja,r.y),o.addScaledVector(Qa,r.z),o}static isFrontFacing(t,e,n,i){return yn.subVectors(n,e),ni.subVectors(t,e),yn.cross(ni).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return yn.subVectors(this.c,this.b),ni.subVectors(this.a,this.b),yn.cross(ni).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Pn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Pn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return Pn.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return Pn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Pn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,r=this.c;let o,a;vs.subVectors(i,n),Ms.subVectors(r,n),Ya.subVectors(t,n);const c=vs.dot(Ya),l=Ms.dot(Ya);if(c<=0&&l<=0)return e.copy(n);ja.subVectors(t,i);const h=vs.dot(ja),u=Ms.dot(ja);if(h>=0&&u<=h)return e.copy(i);const d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(vs,o);$a.subVectors(t,r);const f=vs.dot($a),m=Ms.dot($a);if(m>=0&&f<=m)return e.copy(r);const _=f*l-c*m;if(_<=0&&l>=0&&m<=0)return a=l/(l-m),e.copy(n).addScaledVector(Ms,a);const g=h*m-f*u;if(g<=0&&u-h>=0&&f-m>=0)return Ru.subVectors(r,i),a=(u-h)/(u-h+(f-m)),e.copy(i).addScaledVector(Ru,a);const p=1/(g+_+d);return o=_*p,a=d*p,e.copy(n).addScaledVector(vs,o).addScaledVector(Ms,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Lp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},bi={h:0,s:0,l:0},ao={h:0,s:0,l:0};function tc(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class It{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ne){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ee.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=ee.workingColorSpace){return this.r=t,this.g=e,this.b=n,ee.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=ee.workingColorSpace){if(t=fh(t,1),e=we(e,0,1),n=we(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=tc(o,r,t+1/3),this.g=tc(o,r,t),this.b=tc(o,r,t-1/3)}return ee.toWorkingColorSpace(this,i),this}setStyle(t,e=Ne){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ne){const n=Lp[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ui(t.r),this.g=ui(t.g),this.b=ui(t.b),this}copyLinearToSRGB(t){return this.r=Os(t.r),this.g=Os(t.g),this.b=Os(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ne){return ee.fromWorkingColorSpace(Oe.copy(this),t),Math.round(we(Oe.r*255,0,255))*65536+Math.round(we(Oe.g*255,0,255))*256+Math.round(we(Oe.b*255,0,255))}getHexString(t=Ne){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ee.workingColorSpace){ee.fromWorkingColorSpace(Oe.copy(this),e);const n=Oe.r,i=Oe.g,r=Oe.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(i-r)/u+(i<r?6:0);break;case i:c=(r-n)/u+2;break;case r:c=(n-i)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=ee.workingColorSpace){return ee.fromWorkingColorSpace(Oe.copy(this),e),t.r=Oe.r,t.g=Oe.g,t.b=Oe.b,t}getStyle(t=Ne){ee.fromWorkingColorSpace(Oe.copy(this),t);const e=Oe.r,n=Oe.g,i=Oe.b;return t!==Ne?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(bi),this.setHSL(bi.h+t,bi.s+e,bi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(bi),t.getHSL(ao);const n=Er(bi.h,ao.h,e),i=Er(bi.s,ao.s,e),r=Er(bi.l,ao.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Oe=new It;It.NAMES=Lp;let fg=0;class Fn extends Qs{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:fg++}),this.uuid=gn(),this.name="",this.blending=Fs,this.side=di,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Zc,this.blendDst=Jc,this.blendEquation=Ji,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new It(0,0,0),this.blendAlpha=0,this.depthFunc=Vs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=uu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=us,this.stencilZFail=us,this.stencilZPass=us,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Fs&&(n.blending=this.blending),this.side!==di&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Zc&&(n.blendSrc=this.blendSrc),this.blendDst!==Jc&&(n.blendDst=this.blendDst),this.blendEquation!==Ji&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Vs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==uu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==us&&(n.stencilFail=this.stencilFail),this.stencilZFail!==us&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==us&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(e){const r=i(t.textures),o=i(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Dn extends Fn{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new It(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new On,this.combine=sh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Te=new R,co=new pt;class Yt{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Fl,this.updateRanges=[],this.gpuType=Nn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)co.fromBufferAttribute(this,e),co.applyMatrix3(t),this.setXY(e,co.x,co.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.applyMatrix3(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.applyMatrix4(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.applyNormalMatrix(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.transformDirection(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Cn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ue(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Cn(e,this.array)),e}setX(t,e){return this.normalized&&(e=ue(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Cn(e,this.array)),e}setY(t,e){return this.normalized&&(e=ue(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Cn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ue(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Cn(e,this.array)),e}setW(t,e){return this.normalized&&(e=ue(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ue(e,this.array),n=ue(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=ue(e,this.array),n=ue(n,this.array),i=ue(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=ue(e,this.array),n=ue(n,this.array),i=ue(i,this.array),r=ue(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Fl&&(t.usage=this.usage),t}}class Ip extends Yt{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Np extends Yt{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Ee extends Yt{constructor(t,e,n){super(new Float32Array(t),e,n)}}let pg=0;const hn=new Vt,ec=new Me,ys=new R,on=new mi,lr=new mi,Ie=new R;class be extends Qs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:pg++}),this.uuid=gn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Rp(t)?Np:Ip)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new $t().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return hn.makeRotationFromQuaternion(t),this.applyMatrix4(hn),this}rotateX(t){return hn.makeRotationX(t),this.applyMatrix4(hn),this}rotateY(t){return hn.makeRotationY(t),this.applyMatrix4(hn),this}rotateZ(t){return hn.makeRotationZ(t),this.applyMatrix4(hn),this}translate(t,e,n){return hn.makeTranslation(t,e,n),this.applyMatrix4(hn),this}scale(t,e,n){return hn.makeScale(t,e,n),this.applyMatrix4(hn),this}lookAt(t){return ec.lookAt(t),ec.updateMatrix(),this.applyMatrix4(ec.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ys).negate(),this.translate(ys.x,ys.y,ys.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let i=0,r=t.length;i<r;i++){const o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ee(n,3))}else{for(let n=0,i=e.count;n<i;n++){const r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new mi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const r=e[n];on.setFromBufferAttribute(r),this.morphTargetsRelative?(Ie.addVectors(this.boundingBox.min,on.min),this.boundingBox.expandByPoint(Ie),Ie.addVectors(this.boundingBox.max,on.max),this.boundingBox.expandByPoint(Ie)):(this.boundingBox.expandByPoint(on.min),this.boundingBox.expandByPoint(on.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Yn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(t){const n=this.boundingSphere.center;if(on.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];lr.setFromBufferAttribute(a),this.morphTargetsRelative?(Ie.addVectors(on.min,lr.min),on.expandByPoint(Ie),Ie.addVectors(on.max,lr.max),on.expandByPoint(Ie)):(on.expandByPoint(lr.min),on.expandByPoint(lr.max))}on.getCenter(n);let i=0;for(let r=0,o=t.count;r<o;r++)Ie.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(Ie));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Ie.fromBufferAttribute(a,l),c&&(ys.fromBufferAttribute(t,l),Ie.add(ys)),i=Math.max(i,n.distanceToSquared(Ie))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Yt(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let I=0;I<n.count;I++)a[I]=new R,c[I]=new R;const l=new R,h=new R,u=new R,d=new pt,f=new pt,m=new pt,_=new R,g=new R;function p(I,T,b){l.fromBufferAttribute(n,I),h.fromBufferAttribute(n,T),u.fromBufferAttribute(n,b),d.fromBufferAttribute(r,I),f.fromBufferAttribute(r,T),m.fromBufferAttribute(r,b),h.sub(l),u.sub(l),f.sub(d),m.sub(d);const L=1/(f.x*m.y-m.x*f.y);isFinite(L)&&(_.copy(h).multiplyScalar(m.y).addScaledVector(u,-f.y).multiplyScalar(L),g.copy(u).multiplyScalar(f.x).addScaledVector(h,-m.x).multiplyScalar(L),a[I].add(_),a[T].add(_),a[b].add(_),c[I].add(g),c[T].add(g),c[b].add(g))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let I=0,T=v.length;I<T;++I){const b=v[I],L=b.start,z=b.count;for(let F=L,G=L+z;F<G;F+=3)p(t.getX(F+0),t.getX(F+1),t.getX(F+2))}const y=new R,x=new R,N=new R,w=new R;function C(I){N.fromBufferAttribute(i,I),w.copy(N);const T=a[I];y.copy(T),y.sub(N.multiplyScalar(N.dot(T))).normalize(),x.crossVectors(w,T);const L=x.dot(c[I])<0?-1:1;o.setXYZW(I,y.x,y.y,y.z,L)}for(let I=0,T=v.length;I<T;++I){const b=v[I],L=b.start,z=b.count;for(let F=L,G=L+z;F<G;F+=3)C(t.getX(F+0)),C(t.getX(F+1)),C(t.getX(F+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Yt(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new R,r=new R,o=new R,a=new R,c=new R,l=new R,h=new R,u=new R;if(t)for(let d=0,f=t.count;d<f;d+=3){const m=t.getX(d+0),_=t.getX(d+1),g=t.getX(d+2);i.fromBufferAttribute(e,m),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,g),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),a.fromBufferAttribute(n,m),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),a.add(h),c.add(h),l.add(h),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let d=0,f=e.count;d<f;d+=3)i.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ie.fromBufferAttribute(t,e),Ie.normalize(),t.setXYZ(e,Ie.x,Ie.y,Ie.z)}toNonIndexed(){function t(a,c){const l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h);let f=0,m=0;for(let _=0,g=c.length;_<g;_++){a.isInterleavedBufferAttribute?f=c[_]*a.data.stride+a.offset:f=c[_]*h;for(let p=0;p<h;p++)d[m++]=l[f++]}return new Yt(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new be,n=this.index.array,i=this.attributes;for(const a in i){const c=i[a],l=t(c,n);e.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){const d=l[h],f=t(d,n);c.push(f)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const i={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){const f=l[u];h.push(f.toJSON(t.data))}h.length>0&&(i[c]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const l in i){const h=i[l];this.setAttribute(l,h.clone(e))}const r=t.morphAttributes;for(const l in r){const h=[],u=r[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,h=o.length;l<h;l++){const u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Cu=new Vt,Vi=new qr,lo=new Yn,Pu=new R,ho=new R,uo=new R,fo=new R,nc=new R,po=new R,Lu=new R,mo=new R;class oe extends Me{constructor(t=new be,e=new Dn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(r&&a){po.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=a[c],u=r[c];h!==0&&(nc.fromBufferAttribute(u,t),o?po.addScaledVector(nc,h):po.addScaledVector(nc.sub(e),h))}e.add(po)}return e}raycast(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),lo.copy(n.boundingSphere),lo.applyMatrix4(r),Vi.copy(t.ray).recast(t.near),!(lo.containsPoint(Vi.origin)===!1&&(Vi.intersectSphere(lo,Pu)===null||Vi.origin.distanceToSquared(Pu)>(t.far-t.near)**2))&&(Cu.copy(r).invert(),Vi.copy(t.ray).applyMatrix4(Cu),!(n.boundingBox!==null&&Vi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Vi)))}_computeIntersections(t,e,n){let i;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,_=d.length;m<_;m++){const g=d[m],p=o[g.materialIndex],v=Math.max(g.start,f.start),y=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let x=v,N=y;x<N;x+=3){const w=a.getX(x),C=a.getX(x+1),I=a.getX(x+2);i=go(this,p,t,n,l,h,u,w,C,I),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{const m=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let g=m,p=_;g<p;g+=3){const v=a.getX(g),y=a.getX(g+1),x=a.getX(g+2);i=go(this,o,t,n,l,h,u,v,y,x),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}else if(c!==void 0)if(Array.isArray(o))for(let m=0,_=d.length;m<_;m++){const g=d[m],p=o[g.materialIndex],v=Math.max(g.start,f.start),y=Math.min(c.count,Math.min(g.start+g.count,f.start+f.count));for(let x=v,N=y;x<N;x+=3){const w=x,C=x+1,I=x+2;i=go(this,p,t,n,l,h,u,w,C,I),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{const m=Math.max(0,f.start),_=Math.min(c.count,f.start+f.count);for(let g=m,p=_;g<p;g+=3){const v=g,y=g+1,x=g+2;i=go(this,o,t,n,l,h,u,v,y,x),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}}}function mg(s,t,e,n,i,r,o,a){let c;if(t.side===Xe?c=n.intersectTriangle(o,r,i,!0,a):c=n.intersectTriangle(i,r,o,t.side===di,a),c===null)return null;mo.copy(a),mo.applyMatrix4(s.matrixWorld);const l=e.ray.origin.distanceTo(mo);return l<e.near||l>e.far?null:{distance:l,point:mo.clone(),object:s}}function go(s,t,e,n,i,r,o,a,c,l){s.getVertexPosition(a,ho),s.getVertexPosition(c,uo),s.getVertexPosition(l,fo);const h=mg(s,t,e,n,ho,uo,fo,Lu);if(h){const u=new R;Pn.getBarycoord(Lu,ho,uo,fo,u),i&&(h.uv=Pn.getInterpolatedAttribute(i,a,c,l,u,new pt)),r&&(h.uv1=Pn.getInterpolatedAttribute(r,a,c,l,u,new pt)),o&&(h.normal=Pn.getInterpolatedAttribute(o,a,c,l,u,new R),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:c,c:l,normal:new R,materialIndex:0};Pn.getNormal(ho,uo,fo,d.normal),h.face=d,h.barycoord=u}return h}class os extends be{constructor(t=1,e=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],h=[],u=[];let d=0,f=0;m("z","y","x",-1,-1,n,e,t,o,r,0),m("z","y","x",1,-1,n,e,-t,o,r,1),m("x","z","y",1,1,t,n,e,i,o,2),m("x","z","y",1,-1,t,n,-e,i,o,3),m("x","y","z",1,-1,t,e,n,i,r,4),m("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new Ee(l,3)),this.setAttribute("normal",new Ee(h,3)),this.setAttribute("uv",new Ee(u,2));function m(_,g,p,v,y,x,N,w,C,I,T){const b=x/C,L=N/I,z=x/2,F=N/2,G=w/2,q=C+1,K=I+1;let Z=0,H=0;const st=new R;for(let ot=0;ot<K;ot++){const _t=ot*L-F;for(let Rt=0;Rt<q;Rt++){const kt=Rt*b-z;st[_]=kt*v,st[g]=_t*y,st[p]=G,l.push(st.x,st.y,st.z),st[_]=0,st[g]=0,st[p]=w>0?1:-1,h.push(st.x,st.y,st.z),u.push(Rt/C),u.push(1-ot/I),Z+=1}}for(let ot=0;ot<I;ot++)for(let _t=0;_t<C;_t++){const Rt=d+_t+q*ot,kt=d+_t+q*(ot+1),Y=d+(_t+1)+q*(ot+1),Q=d+(_t+1)+q*ot;c.push(Rt,kt,Q),c.push(kt,Y,Q),H+=6}a.addGroup(f,H,T),f+=H,d+=Z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new os(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ys(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Ve(s){const t={};for(let e=0;e<s.length;e++){const n=Ys(s[e]);for(const i in n)t[i]=n[i]}return t}function gg(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Dp(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ee.workingColorSpace}const _g={clone:Ys,merge:Ve};var xg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,vg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class pi extends Fn{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=xg,this.fragmentShader=vg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ys(t.uniforms),this.uniformsGroups=gg(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Fp extends Me{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Vt,this.projectionMatrix=new Vt,this.projectionMatrixInverse=new Vt,this.coordinateSystem=li}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Si=new R,Iu=new pt,Nu=new pt;class Ge extends Fp{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Ks*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Tr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ks*2*Math.atan(Math.tan(Tr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Si.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Si.x,Si.y).multiplyScalar(-t/Si.z),Si.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Si.x,Si.y).multiplyScalar(-t/Si.z)}getViewSize(t,e){return this.getViewBounds(t,Iu,Nu),e.subVectors(Nu,Iu)}setViewOffset(t,e,n,i,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Tr*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*i/c,e-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const bs=-90,Ss=1;class Mg extends Me{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Ge(bs,Ss,t,e);i.layers=this.layers,this.add(i);const r=new Ge(bs,Ss,t,e);r.layers=this.layers,this.add(r);const o=new Ge(bs,Ss,t,e);o.layers=this.layers,this.add(o);const a=new Ge(bs,Ss,t,e);a.layers=this.layers,this.add(a);const c=new Ge(bs,Ss,t,e);c.layers=this.layers,this.add(c);const l=new Ge(bs,Ss,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,r,o,a,c]=e;for(const l of e)this.remove(l);if(t===li)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===da)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,c),t.setRenderTarget(n,4,i),t.render(e,l),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class Up extends Re{constructor(t,e,n,i,r,o,a,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:Gs,super(t,e,n,i,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class yg extends rs{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Up(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:en}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new os(5,5,5),r=new pi({name:"CubemapFromEquirect",uniforms:Ys(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Xe,blending:Ui});r.uniforms.tEquirect.value=e;const o=new oe(i,r),a=e.minFilter;return e.minFilter===Xn&&(e.minFilter=en),new Mg(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(r)}}const ic=new R,bg=new R,Sg=new $t;class $i{constructor(t=new R(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=ic.subVectors(n,e).cross(bg.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(ic),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Sg.getNormalMatrix(t),i=this.coplanarPoint(ic).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Gi=new Yn,_o=new R;class mh{constructor(t=new $i,e=new $i,n=new $i,i=new $i,r=new $i,o=new $i){this.planes=[t,e,n,i,r,o]}set(t,e,n,i,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=li){const n=this.planes,i=t.elements,r=i[0],o=i[1],a=i[2],c=i[3],l=i[4],h=i[5],u=i[6],d=i[7],f=i[8],m=i[9],_=i[10],g=i[11],p=i[12],v=i[13],y=i[14],x=i[15];if(n[0].setComponents(c-r,d-l,g-f,x-p).normalize(),n[1].setComponents(c+r,d+l,g+f,x+p).normalize(),n[2].setComponents(c+o,d+h,g+m,x+v).normalize(),n[3].setComponents(c-o,d-h,g-m,x-v).normalize(),n[4].setComponents(c-a,d-u,g-_,x-y).normalize(),e===li)n[5].setComponents(c+a,d+u,g+_,x+y).normalize();else if(e===da)n[5].setComponents(a,u,_,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Gi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Gi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Gi)}intersectsSprite(t){return Gi.center.set(0,0,0),Gi.radius=.7071067811865476,Gi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Gi)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(_o.x=i.normal.x>0?t.max.x:t.min.x,_o.y=i.normal.y>0?t.max.y:t.min.y,_o.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(_o)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Op(){let s=null,t=!1,e=null,n=null;function i(r,o){e(r,o),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function Tg(s){const t=new WeakMap;function e(a,c){const l=a.array,h=a.usage,u=l.byteLength,d=s.createBuffer();s.bindBuffer(c,d),s.bufferData(c,l,h),a.onUploadCallback();let f;if(l instanceof Float32Array)f=s.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=s.SHORT;else if(l instanceof Uint32Array)f=s.UNSIGNED_INT;else if(l instanceof Int32Array)f=s.INT;else if(l instanceof Int8Array)f=s.BYTE;else if(l instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){const h=c.array,u=c.updateRanges;if(s.bindBuffer(l,a),u.length===0)s.bufferSubData(l,0,h);else{u.sort((f,m)=>f.start-m.start);let d=0;for(let f=1;f<u.length;f++){const m=u[d],_=u[f];_.start<=m.start+m.count+1?m.count=Math.max(m.count,_.start+_.count-m.start):(++d,u[d]=_)}u.length=d+1;for(let f=0,m=u.length;f<m;f++){const _=u[f];s.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(s.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:i,remove:r,update:o}}class Kr extends be{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(i),l=a+1,h=c+1,u=t/a,d=e/c,f=[],m=[],_=[],g=[];for(let p=0;p<h;p++){const v=p*d-o;for(let y=0;y<l;y++){const x=y*u-r;m.push(x,-v,0),_.push(0,0,1),g.push(y/a),g.push(1-p/c)}}for(let p=0;p<c;p++)for(let v=0;v<a;v++){const y=v+l*p,x=v+l*(p+1),N=v+1+l*(p+1),w=v+1+l*p;f.push(y,x,w),f.push(x,N,w)}this.setIndex(f),this.setAttribute("position",new Ee(m,3)),this.setAttribute("normal",new Ee(_,3)),this.setAttribute("uv",new Ee(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Kr(t.width,t.height,t.widthSegments,t.heightSegments)}}var Eg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ag=`#ifdef USE_ALPHAHASH
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
#endif`,wg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Rg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Cg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Pg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Lg=`#ifdef USE_AOMAP
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
#endif`,Ig=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ng=`#ifdef USE_BATCHING
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
#endif`,Dg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Fg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ug=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Og=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Bg=`#ifdef USE_IRIDESCENCE
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
#endif`,kg=`#ifdef USE_BUMPMAP
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
#endif`,Hg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,zg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Vg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Gg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Wg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Xg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,qg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Kg=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Yg=`#define PI 3.141592653589793
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
} // validated`,jg=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,$g=`vec3 transformedNormal = objectNormal;
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
#endif`,Zg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Jg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Qg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,t_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,e_="gl_FragColor = linearToOutputTexel( gl_FragColor );",n_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,i_=`#ifdef USE_ENVMAP
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
#endif`,s_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,r_=`#ifdef USE_ENVMAP
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
#endif`,o_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,a_=`#ifdef USE_ENVMAP
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
#endif`,c_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,l_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,h_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,u_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,d_=`#ifdef USE_GRADIENTMAP
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
}`,f_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,p_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,m_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,g_=`uniform bool receiveShadow;
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
#endif`,__=`#ifdef USE_ENVMAP
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
#endif`,x_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,v_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,M_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,y_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,b_=`PhysicalMaterial material;
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
#endif`,S_=`struct PhysicalMaterial {
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
}`,T_=`
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
#endif`,E_=`#if defined( RE_IndirectDiffuse )
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
#endif`,A_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,w_=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,R_=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,C_=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,P_=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,L_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,I_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,N_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,D_=`#if defined( USE_POINTS_UV )
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
#endif`,F_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,U_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,O_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,B_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,k_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,H_=`#ifdef USE_MORPHTARGETS
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
#endif`,z_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,V_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,G_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,W_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,X_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,q_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,K_=`#ifdef USE_NORMALMAP
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
#endif`,Y_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,j_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,$_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Z_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,J_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Q_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,tx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ex=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,nx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ix=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,sx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,rx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ox=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ax=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,cx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,lx=`float getShadowMask() {
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
}`,hx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ux=`#ifdef USE_SKINNING
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
#endif`,dx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,fx=`#ifdef USE_SKINNING
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
#endif`,px=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,mx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,gx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,_x=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,xx=`#ifdef USE_TRANSMISSION
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
#endif`,vx=`#ifdef USE_TRANSMISSION
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
#endif`,Mx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,yx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,bx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Sx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Tx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ex=`uniform sampler2D t2D;
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
}`,Ax=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wx=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Rx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Cx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Px=`#include <common>
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
}`,Lx=`#if DEPTH_PACKING == 3200
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
}`,Ix=`#define DISTANCE
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
}`,Nx=`#define DISTANCE
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
}`,Dx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Fx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ux=`uniform float scale;
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
}`,Ox=`uniform vec3 diffuse;
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
}`,Bx=`#include <common>
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
}`,kx=`uniform vec3 diffuse;
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
}`,Hx=`#define LAMBERT
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
}`,zx=`#define LAMBERT
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
}`,Vx=`#define MATCAP
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
}`,Gx=`#define MATCAP
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
}`,Wx=`#define NORMAL
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
}`,Xx=`#define NORMAL
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
}`,qx=`#define PHONG
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
}`,Kx=`#define PHONG
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
}`,Yx=`#define STANDARD
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
}`,jx=`#define STANDARD
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
}`,$x=`#define TOON
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
}`,Zx=`#define TOON
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
}`,Jx=`uniform float size;
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
}`,Qx=`uniform vec3 diffuse;
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
}`,tv=`#include <common>
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
}`,ev=`uniform vec3 color;
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
}`,nv=`uniform float rotation;
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
}`,iv=`uniform vec3 diffuse;
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
}`,Zt={alphahash_fragment:Eg,alphahash_pars_fragment:Ag,alphamap_fragment:wg,alphamap_pars_fragment:Rg,alphatest_fragment:Cg,alphatest_pars_fragment:Pg,aomap_fragment:Lg,aomap_pars_fragment:Ig,batching_pars_vertex:Ng,batching_vertex:Dg,begin_vertex:Fg,beginnormal_vertex:Ug,bsdfs:Og,iridescence_fragment:Bg,bumpmap_pars_fragment:kg,clipping_planes_fragment:Hg,clipping_planes_pars_fragment:zg,clipping_planes_pars_vertex:Vg,clipping_planes_vertex:Gg,color_fragment:Wg,color_pars_fragment:Xg,color_pars_vertex:qg,color_vertex:Kg,common:Yg,cube_uv_reflection_fragment:jg,defaultnormal_vertex:$g,displacementmap_pars_vertex:Zg,displacementmap_vertex:Jg,emissivemap_fragment:Qg,emissivemap_pars_fragment:t_,colorspace_fragment:e_,colorspace_pars_fragment:n_,envmap_fragment:i_,envmap_common_pars_fragment:s_,envmap_pars_fragment:r_,envmap_pars_vertex:o_,envmap_physical_pars_fragment:__,envmap_vertex:a_,fog_vertex:c_,fog_pars_vertex:l_,fog_fragment:h_,fog_pars_fragment:u_,gradientmap_pars_fragment:d_,lightmap_pars_fragment:f_,lights_lambert_fragment:p_,lights_lambert_pars_fragment:m_,lights_pars_begin:g_,lights_toon_fragment:x_,lights_toon_pars_fragment:v_,lights_phong_fragment:M_,lights_phong_pars_fragment:y_,lights_physical_fragment:b_,lights_physical_pars_fragment:S_,lights_fragment_begin:T_,lights_fragment_maps:E_,lights_fragment_end:A_,logdepthbuf_fragment:w_,logdepthbuf_pars_fragment:R_,logdepthbuf_pars_vertex:C_,logdepthbuf_vertex:P_,map_fragment:L_,map_pars_fragment:I_,map_particle_fragment:N_,map_particle_pars_fragment:D_,metalnessmap_fragment:F_,metalnessmap_pars_fragment:U_,morphinstance_vertex:O_,morphcolor_vertex:B_,morphnormal_vertex:k_,morphtarget_pars_vertex:H_,morphtarget_vertex:z_,normal_fragment_begin:V_,normal_fragment_maps:G_,normal_pars_fragment:W_,normal_pars_vertex:X_,normal_vertex:q_,normalmap_pars_fragment:K_,clearcoat_normal_fragment_begin:Y_,clearcoat_normal_fragment_maps:j_,clearcoat_pars_fragment:$_,iridescence_pars_fragment:Z_,opaque_fragment:J_,packing:Q_,premultiplied_alpha_fragment:tx,project_vertex:ex,dithering_fragment:nx,dithering_pars_fragment:ix,roughnessmap_fragment:sx,roughnessmap_pars_fragment:rx,shadowmap_pars_fragment:ox,shadowmap_pars_vertex:ax,shadowmap_vertex:cx,shadowmask_pars_fragment:lx,skinbase_vertex:hx,skinning_pars_vertex:ux,skinning_vertex:dx,skinnormal_vertex:fx,specularmap_fragment:px,specularmap_pars_fragment:mx,tonemapping_fragment:gx,tonemapping_pars_fragment:_x,transmission_fragment:xx,transmission_pars_fragment:vx,uv_pars_fragment:Mx,uv_pars_vertex:yx,uv_vertex:bx,worldpos_vertex:Sx,background_vert:Tx,background_frag:Ex,backgroundCube_vert:Ax,backgroundCube_frag:wx,cube_vert:Rx,cube_frag:Cx,depth_vert:Px,depth_frag:Lx,distanceRGBA_vert:Ix,distanceRGBA_frag:Nx,equirect_vert:Dx,equirect_frag:Fx,linedashed_vert:Ux,linedashed_frag:Ox,meshbasic_vert:Bx,meshbasic_frag:kx,meshlambert_vert:Hx,meshlambert_frag:zx,meshmatcap_vert:Vx,meshmatcap_frag:Gx,meshnormal_vert:Wx,meshnormal_frag:Xx,meshphong_vert:qx,meshphong_frag:Kx,meshphysical_vert:Yx,meshphysical_frag:jx,meshtoon_vert:$x,meshtoon_frag:Zx,points_vert:Jx,points_frag:Qx,shadow_vert:tv,shadow_frag:ev,sprite_vert:nv,sprite_frag:iv},yt={common:{diffuse:{value:new It(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $t}},envmap:{envMap:{value:null},envMapRotation:{value:new $t},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $t}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $t}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $t},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $t},normalScale:{value:new pt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $t},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $t}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $t}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $t}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new It(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new It(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0},uvTransform:{value:new $t}},sprite:{diffuse:{value:new It(16777215)},opacity:{value:1},center:{value:new pt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}}},Vn={basic:{uniforms:Ve([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.fog]),vertexShader:Zt.meshbasic_vert,fragmentShader:Zt.meshbasic_frag},lambert:{uniforms:Ve([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,yt.lights,{emissive:{value:new It(0)}}]),vertexShader:Zt.meshlambert_vert,fragmentShader:Zt.meshlambert_frag},phong:{uniforms:Ve([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,yt.lights,{emissive:{value:new It(0)},specular:{value:new It(1118481)},shininess:{value:30}}]),vertexShader:Zt.meshphong_vert,fragmentShader:Zt.meshphong_frag},standard:{uniforms:Ve([yt.common,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.roughnessmap,yt.metalnessmap,yt.fog,yt.lights,{emissive:{value:new It(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag},toon:{uniforms:Ve([yt.common,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.gradientmap,yt.fog,yt.lights,{emissive:{value:new It(0)}}]),vertexShader:Zt.meshtoon_vert,fragmentShader:Zt.meshtoon_frag},matcap:{uniforms:Ve([yt.common,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,{matcap:{value:null}}]),vertexShader:Zt.meshmatcap_vert,fragmentShader:Zt.meshmatcap_frag},points:{uniforms:Ve([yt.points,yt.fog]),vertexShader:Zt.points_vert,fragmentShader:Zt.points_frag},dashed:{uniforms:Ve([yt.common,yt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Zt.linedashed_vert,fragmentShader:Zt.linedashed_frag},depth:{uniforms:Ve([yt.common,yt.displacementmap]),vertexShader:Zt.depth_vert,fragmentShader:Zt.depth_frag},normal:{uniforms:Ve([yt.common,yt.bumpmap,yt.normalmap,yt.displacementmap,{opacity:{value:1}}]),vertexShader:Zt.meshnormal_vert,fragmentShader:Zt.meshnormal_frag},sprite:{uniforms:Ve([yt.sprite,yt.fog]),vertexShader:Zt.sprite_vert,fragmentShader:Zt.sprite_frag},background:{uniforms:{uvTransform:{value:new $t},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Zt.background_vert,fragmentShader:Zt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new $t}},vertexShader:Zt.backgroundCube_vert,fragmentShader:Zt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Zt.cube_vert,fragmentShader:Zt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Zt.equirect_vert,fragmentShader:Zt.equirect_frag},distanceRGBA:{uniforms:Ve([yt.common,yt.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Zt.distanceRGBA_vert,fragmentShader:Zt.distanceRGBA_frag},shadow:{uniforms:Ve([yt.lights,yt.fog,{color:{value:new It(0)},opacity:{value:1}}]),vertexShader:Zt.shadow_vert,fragmentShader:Zt.shadow_frag}};Vn.physical={uniforms:Ve([Vn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $t},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $t},clearcoatNormalScale:{value:new pt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $t},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $t},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $t},sheen:{value:0},sheenColor:{value:new It(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $t},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $t},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $t},transmissionSamplerSize:{value:new pt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $t},attenuationDistance:{value:0},attenuationColor:{value:new It(0)},specularColor:{value:new It(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $t},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $t},anisotropyVector:{value:new pt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $t}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag};const xo={r:0,b:0,g:0},Wi=new On,sv=new Vt;function rv(s,t,e,n,i,r,o){const a=new It(0);let c=r===!0?0:1,l,h,u=null,d=0,f=null;function m(v){let y=v.isScene===!0?v.background:null;return y&&y.isTexture&&(y=(v.backgroundBlurriness>0?e:t).get(y)),y}function _(v){let y=!1;const x=m(v);x===null?p(a,c):x&&x.isColor&&(p(x,1),y=!0);const N=s.xr.getEnvironmentBlendMode();N==="additive"?n.buffers.color.setClear(0,0,0,1,o):N==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function g(v,y){const x=m(y);x&&(x.isCubeTexture||x.mapping===ba)?(h===void 0&&(h=new oe(new os(1,1,1),new pi({name:"BackgroundCubeMaterial",uniforms:Ys(Vn.backgroundCube.uniforms),vertexShader:Vn.backgroundCube.vertexShader,fragmentShader:Vn.backgroundCube.fragmentShader,side:Xe,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(N,w,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),Wi.copy(y.backgroundRotation),Wi.x*=-1,Wi.y*=-1,Wi.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Wi.y*=-1,Wi.z*=-1),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(sv.makeRotationFromEuler(Wi)),h.material.toneMapped=ee.getTransfer(x.colorSpace)!==fe,(u!==x||d!==x.version||f!==s.toneMapping)&&(h.material.needsUpdate=!0,u=x,d=x.version,f=s.toneMapping),h.layers.enableAll(),v.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new oe(new Kr(2,2),new pi({name:"BackgroundMaterial",uniforms:Ys(Vn.background.uniforms),vertexShader:Vn.background.vertexShader,fragmentShader:Vn.background.fragmentShader,side:di,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=ee.getTransfer(x.colorSpace)!==fe,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||d!==x.version||f!==s.toneMapping)&&(l.material.needsUpdate=!0,u=x,d=x.version,f=s.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function p(v,y){v.getRGB(xo,Dp(s)),n.buffers.color.setClear(xo.r,xo.g,xo.b,y,o)}return{getClearColor:function(){return a},setClearColor:function(v,y=1){a.set(v),c=y,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(v){c=v,p(a,c)},render:_,addToRenderList:g}}function ov(s,t){const e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null);let r=i,o=!1;function a(b,L,z,F,G){let q=!1;const K=u(F,z,L);r!==K&&(r=K,l(r.object)),q=f(b,F,z,G),q&&m(b,F,z,G),G!==null&&t.update(G,s.ELEMENT_ARRAY_BUFFER),(q||o)&&(o=!1,x(b,L,z,F),G!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(G).buffer))}function c(){return s.createVertexArray()}function l(b){return s.bindVertexArray(b)}function h(b){return s.deleteVertexArray(b)}function u(b,L,z){const F=z.wireframe===!0;let G=n[b.id];G===void 0&&(G={},n[b.id]=G);let q=G[L.id];q===void 0&&(q={},G[L.id]=q);let K=q[F];return K===void 0&&(K=d(c()),q[F]=K),K}function d(b){const L=[],z=[],F=[];for(let G=0;G<e;G++)L[G]=0,z[G]=0,F[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:z,attributeDivisors:F,object:b,attributes:{},index:null}}function f(b,L,z,F){const G=r.attributes,q=L.attributes;let K=0;const Z=z.getAttributes();for(const H in Z)if(Z[H].location>=0){const ot=G[H];let _t=q[H];if(_t===void 0&&(H==="instanceMatrix"&&b.instanceMatrix&&(_t=b.instanceMatrix),H==="instanceColor"&&b.instanceColor&&(_t=b.instanceColor)),ot===void 0||ot.attribute!==_t||_t&&ot.data!==_t.data)return!0;K++}return r.attributesNum!==K||r.index!==F}function m(b,L,z,F){const G={},q=L.attributes;let K=0;const Z=z.getAttributes();for(const H in Z)if(Z[H].location>=0){let ot=q[H];ot===void 0&&(H==="instanceMatrix"&&b.instanceMatrix&&(ot=b.instanceMatrix),H==="instanceColor"&&b.instanceColor&&(ot=b.instanceColor));const _t={};_t.attribute=ot,ot&&ot.data&&(_t.data=ot.data),G[H]=_t,K++}r.attributes=G,r.attributesNum=K,r.index=F}function _(){const b=r.newAttributes;for(let L=0,z=b.length;L<z;L++)b[L]=0}function g(b){p(b,0)}function p(b,L){const z=r.newAttributes,F=r.enabledAttributes,G=r.attributeDivisors;z[b]=1,F[b]===0&&(s.enableVertexAttribArray(b),F[b]=1),G[b]!==L&&(s.vertexAttribDivisor(b,L),G[b]=L)}function v(){const b=r.newAttributes,L=r.enabledAttributes;for(let z=0,F=L.length;z<F;z++)L[z]!==b[z]&&(s.disableVertexAttribArray(z),L[z]=0)}function y(b,L,z,F,G,q,K){K===!0?s.vertexAttribIPointer(b,L,z,G,q):s.vertexAttribPointer(b,L,z,F,G,q)}function x(b,L,z,F){_();const G=F.attributes,q=z.getAttributes(),K=L.defaultAttributeValues;for(const Z in q){const H=q[Z];if(H.location>=0){let st=G[Z];if(st===void 0&&(Z==="instanceMatrix"&&b.instanceMatrix&&(st=b.instanceMatrix),Z==="instanceColor"&&b.instanceColor&&(st=b.instanceColor)),st!==void 0){const ot=st.normalized,_t=st.itemSize,Rt=t.get(st);if(Rt===void 0)continue;const kt=Rt.buffer,Y=Rt.type,Q=Rt.bytesPerElement,St=Y===s.INT||Y===s.UNSIGNED_INT||st.gpuType===rh;if(st.isInterleavedBufferAttribute){const it=st.data,Pt=it.stride,Bt=st.offset;if(it.isInstancedInterleavedBuffer){for(let Lt=0;Lt<H.locationSize;Lt++)p(H.location+Lt,it.meshPerAttribute);b.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let Lt=0;Lt<H.locationSize;Lt++)g(H.location+Lt);s.bindBuffer(s.ARRAY_BUFFER,kt);for(let Lt=0;Lt<H.locationSize;Lt++)y(H.location+Lt,_t/H.locationSize,Y,ot,Pt*Q,(Bt+_t/H.locationSize*Lt)*Q,St)}else{if(st.isInstancedBufferAttribute){for(let it=0;it<H.locationSize;it++)p(H.location+it,st.meshPerAttribute);b.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let it=0;it<H.locationSize;it++)g(H.location+it);s.bindBuffer(s.ARRAY_BUFFER,kt);for(let it=0;it<H.locationSize;it++)y(H.location+it,_t/H.locationSize,Y,ot,_t*Q,_t/H.locationSize*it*Q,St)}}else if(K!==void 0){const ot=K[Z];if(ot!==void 0)switch(ot.length){case 2:s.vertexAttrib2fv(H.location,ot);break;case 3:s.vertexAttrib3fv(H.location,ot);break;case 4:s.vertexAttrib4fv(H.location,ot);break;default:s.vertexAttrib1fv(H.location,ot)}}}}v()}function N(){I();for(const b in n){const L=n[b];for(const z in L){const F=L[z];for(const G in F)h(F[G].object),delete F[G];delete L[z]}delete n[b]}}function w(b){if(n[b.id]===void 0)return;const L=n[b.id];for(const z in L){const F=L[z];for(const G in F)h(F[G].object),delete F[G];delete L[z]}delete n[b.id]}function C(b){for(const L in n){const z=n[L];if(z[b.id]===void 0)continue;const F=z[b.id];for(const G in F)h(F[G].object),delete F[G];delete z[b.id]}}function I(){T(),o=!0,r!==i&&(r=i,l(r.object))}function T(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:I,resetDefaultState:T,dispose:N,releaseStatesOfGeometry:w,releaseStatesOfProgram:C,initAttributes:_,enableAttribute:g,disableUnusedAttributes:v}}function av(s,t,e){let n;function i(l){n=l}function r(l,h){s.drawArrays(n,l,h),e.update(h,n,1)}function o(l,h,u){u!==0&&(s.drawArraysInstanced(n,l,h,u),e.update(h,n,u))}function a(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let f=0;for(let m=0;m<u;m++)f+=h[m];e.update(f,n,1)}function c(l,h,u,d){if(u===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<l.length;m++)o(l[m],h[m],d[m]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,h,0,d,0,u);let m=0;for(let _=0;_<u;_++)m+=h[_]*d[_];e.update(m,n,1)}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function cv(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const C=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(C){return!(C!==mn&&n.convert(C)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){const I=C===Xr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==fi&&n.convert(C)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==Nn&&!I)}function c(C){if(C==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),m=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),v=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),y=s.getParameter(s.MAX_VARYING_VECTORS),x=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),N=m>0,w=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:m,maxTextureSize:_,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:x,vertexTextures:N,maxSamples:w}}function lv(s){const t=this;let e=null,n=0,i=!1,r=!1;const o=new $i,a=new $t,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){const m=u.clippingPlanes,_=u.clipIntersection,g=u.clipShadows,p=s.get(u);if(!i||m===null||m.length===0||r&&!g)r?h(null):l();else{const v=r?0:n,y=v*4;let x=p.clippingState||null;c.value=x,x=h(m,d,y,f);for(let N=0;N!==y;++N)x[N]=e[N];p.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,m){const _=u!==null?u.length:0;let g=null;if(_!==0){if(g=c.value,m!==!0||g===null){const p=f+_*4,v=d.matrixWorldInverse;a.getNormalMatrix(v),(g===null||g.length<p)&&(g=new Float32Array(p));for(let y=0,x=f;y!==_;++y,x+=4)o.copy(u[y]).applyMatrix4(v,a),o.normal.toArray(g,x),g[x+3]=o.constant}c.value=g,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,g}}function hv(s){let t=new WeakMap;function e(o,a){return a===ol?o.mapping=Gs:a===al&&(o.mapping=Ws),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===ol||a===al)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new yg(c.height);return l.fromEquirectangularTexture(s,o),t.set(o,l),o.addEventListener("dispose",i),e(l.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class gh extends Fp{constructor(t=-1,e=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=i+e,c=i-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Ps=4,Du=[.125,.215,.35,.446,.526,.582],Qi=20,sc=new gh,Fu=new It;let rc=null,oc=0,ac=0,cc=!1;const Zi=(1+Math.sqrt(5))/2,Ts=1/Zi,Uu=[new R(-Zi,Ts,0),new R(Zi,Ts,0),new R(-Ts,0,Zi),new R(Ts,0,Zi),new R(0,Zi,-Ts),new R(0,Zi,Ts),new R(-1,1,-1),new R(1,1,-1),new R(-1,1,1),new R(1,1,1)];class Ou{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){rc=this._renderer.getRenderTarget(),oc=this._renderer.getActiveCubeFace(),ac=this._renderer.getActiveMipmapLevel(),cc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Hu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ku(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(rc,oc,ac),this._renderer.xr.enabled=cc,t.scissorTest=!1,vo(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Gs||t.mapping===Ws?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),rc=this._renderer.getRenderTarget(),oc=this._renderer.getActiveCubeFace(),ac=this._renderer.getActiveMipmapLevel(),cc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:en,minFilter:en,generateMipmaps:!1,type:Xr,format:mn,colorSpace:Ke,depthBuffer:!1},i=Bu(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Bu(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=uv(r)),this._blurMaterial=dv(r,t,e)}return i}_compileMaterial(t){const e=new oe(this._lodPlanes[0],t);this._renderer.compile(e,sc)}_sceneToCubeUV(t,e,n,i){const a=new Ge(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Fu),h.toneMapping=Oi,h.autoClear=!1;const f=new Dn({name:"PMREM.Background",side:Xe,depthWrite:!1,depthTest:!1}),m=new oe(new os,f);let _=!1;const g=t.background;g?g.isColor&&(f.color.copy(g),t.background=null,_=!0):(f.color.copy(Fu),_=!0);for(let p=0;p<6;p++){const v=p%3;v===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):v===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));const y=this._cubeSize;vo(i,v*y,p>2?y:0,y,y),h.setRenderTarget(i),_&&h.render(m,a),h.render(t,a)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=g}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===Gs||t.mapping===Ws;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Hu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ku());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new oe(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const c=this._cubeSize;vo(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,sc)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Uu[(i-r-1)%Uu.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",r),this._halfBlur(o,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new oe(this._lodPlanes[i],l),d=l.uniforms,f=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Qi-1),_=r/m,g=isFinite(r)?1+Math.floor(h*_):Qi;g>Qi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Qi}`);const p=[];let v=0;for(let C=0;C<Qi;++C){const I=C/_,T=Math.exp(-I*I/2);p.push(T),C===0?v+=T:C<g&&(v+=2*T)}for(let C=0;C<p.length;C++)p[C]=p[C]/v;d.envMap.value=t.texture,d.samples.value=g,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:y}=this;d.dTheta.value=m,d.mipInt.value=y-n;const x=this._sizeLods[i],N=3*x*(i>y-Ps?i-y+Ps:0),w=4*(this._cubeSize-x);vo(e,N,w,3*x,2*x),c.setRenderTarget(e),c.render(u,sc)}}function uv(s){const t=[],e=[],n=[];let i=s;const r=s-Ps+1+Du.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);e.push(a);let c=1/a;o>s-Ps?c=Du[o-s+Ps-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,m=6,_=3,g=2,p=1,v=new Float32Array(_*m*f),y=new Float32Array(g*m*f),x=new Float32Array(p*m*f);for(let w=0;w<f;w++){const C=w%3*2/3-1,I=w>2?0:-1,T=[C,I,0,C+2/3,I,0,C+2/3,I+1,0,C,I,0,C+2/3,I+1,0,C,I+1,0];v.set(T,_*m*w),y.set(d,g*m*w);const b=[w,w,w,w,w,w];x.set(b,p*m*w)}const N=new be;N.setAttribute("position",new Yt(v,_)),N.setAttribute("uv",new Yt(y,g)),N.setAttribute("faceIndex",new Yt(x,p)),t.push(N),i>Ps&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Bu(s,t,e){const n=new rs(s,t,e);return n.texture.mapping=ba,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function vo(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function dv(s,t,e){const n=new Float32Array(Qi),i=new R(0,1,0);return new pi({name:"SphericalGaussianBlur",defines:{n:Qi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:_h(),fragmentShader:`

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
		`,blending:Ui,depthTest:!1,depthWrite:!1})}function ku(){return new pi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:_h(),fragmentShader:`

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
		`,blending:Ui,depthTest:!1,depthWrite:!1})}function Hu(){return new pi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:_h(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ui,depthTest:!1,depthWrite:!1})}function _h(){return`

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
	`}function fv(s){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===ol||c===al,h=c===Gs||c===Ws;if(l||h){let u=t.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new Ou(s)),u=l?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const f=a.image;return l&&f&&f.height>0||h&&f&&i(f)?(e===null&&(e=new Ou(s)),u=l?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function i(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function pv(s){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&yr("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function mv(s,t,e,n){const i={},r=new WeakMap;function o(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const m in d.attributes)t.remove(d.attributes[m]);for(const m in d.morphAttributes){const _=d.morphAttributes[m];for(let g=0,p=_.length;g<p;g++)t.remove(_[g])}d.removeEventListener("dispose",o),delete i[d.id];const f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,e.memory.geometries++),d}function c(u){const d=u.attributes;for(const m in d)t.update(d[m],s.ARRAY_BUFFER);const f=u.morphAttributes;for(const m in f){const _=f[m];for(let g=0,p=_.length;g<p;g++)t.update(_[g],s.ARRAY_BUFFER)}}function l(u){const d=[],f=u.index,m=u.attributes.position;let _=0;if(f!==null){const v=f.array;_=f.version;for(let y=0,x=v.length;y<x;y+=3){const N=v[y+0],w=v[y+1],C=v[y+2];d.push(N,w,w,C,C,N)}}else if(m!==void 0){const v=m.array;_=m.version;for(let y=0,x=v.length/3-1;y<x;y+=3){const N=y+0,w=y+1,C=y+2;d.push(N,w,w,C,C,N)}}else return;const g=new(Rp(d)?Np:Ip)(d,1);g.version=_;const p=r.get(u);p&&t.remove(p),r.set(u,g)}function h(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function gv(s,t,e){let n;function i(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,f){s.drawElements(n,f,r,d*o),e.update(f,n,1)}function l(d,f,m){m!==0&&(s.drawElementsInstanced(n,f,r,d*o,m),e.update(f,n,m))}function h(d,f,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,m);let g=0;for(let p=0;p<m;p++)g+=f[p];e.update(g,n,1)}function u(d,f,m,_){if(m===0)return;const g=t.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<d.length;p++)l(d[p]/o,f[p],_[p]);else{g.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,_,0,m);let p=0;for(let v=0;v<m;v++)p+=f[v]*_[v];e.update(p,n,1)}}this.setMode=i,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function _v(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=a*(r/3);break;case s.LINES:e.lines+=a*(r/2);break;case s.LINE_STRIP:e.lines+=a*(r-1);break;case s.LINE_LOOP:e.lines+=a*r;break;case s.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function xv(s,t,e){const n=new WeakMap,i=new ae;function r(o,a,c){const l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(a);if(d===void 0||d.count!==u){let b=function(){I.dispose(),n.delete(a),a.removeEventListener("dispose",b)};var f=b;d!==void 0&&d.texture.dispose();const m=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],v=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let x=0;m===!0&&(x=1),_===!0&&(x=2),g===!0&&(x=3);let N=a.attributes.position.count*x,w=1;N>t.maxTextureSize&&(w=Math.ceil(N/t.maxTextureSize),N=t.maxTextureSize);const C=new Float32Array(N*w*4*u),I=new Pp(C,N,w,u);I.type=Nn,I.needsUpdate=!0;const T=x*4;for(let L=0;L<u;L++){const z=p[L],F=v[L],G=y[L],q=N*w*4*L;for(let K=0;K<z.count;K++){const Z=K*T;m===!0&&(i.fromBufferAttribute(z,K),C[q+Z+0]=i.x,C[q+Z+1]=i.y,C[q+Z+2]=i.z,C[q+Z+3]=0),_===!0&&(i.fromBufferAttribute(F,K),C[q+Z+4]=i.x,C[q+Z+5]=i.y,C[q+Z+6]=i.z,C[q+Z+7]=0),g===!0&&(i.fromBufferAttribute(G,K),C[q+Z+8]=i.x,C[q+Z+9]=i.y,C[q+Z+10]=i.z,C[q+Z+11]=G.itemSize===4?i.w:1)}}d={count:u,texture:I,size:new pt(N,w)},n.set(a,d),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",o.morphTexture,e);else{let m=0;for(let g=0;g<l.length;g++)m+=l[g];const _=a.morphTargetsRelative?1:1-m;c.getUniforms().setValue(s,"morphTargetBaseInfluence",_),c.getUniforms().setValue(s,"morphTargetInfluences",l)}c.getUniforms().setValue(s,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function vv(s,t,e,n){let i=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,u=t.get(c,h);if(i.get(u)!==l&&(t.update(u),i.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),i.get(c)!==l&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;i.get(d)!==l&&(d.update(),i.set(d,l))}return u}function o(){i=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}class Bp extends Re{constructor(t,e,n,i,r,o,a,c,l,h=Us){if(h!==Us&&h!==qs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Us&&(n=ss),n===void 0&&h===qs&&(n=Xs),super(null,i,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:qe,this.minFilter=c!==void 0?c:qe,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const kp=new Re,zu=new Bp(1,1),Hp=new Pp,zp=new rg,Vp=new Up,Vu=[],Gu=[],Wu=new Float32Array(16),Xu=new Float32Array(9),qu=new Float32Array(4);function tr(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let r=Vu[i];if(r===void 0&&(r=new Float32Array(i),Vu[i]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function Ce(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function Pe(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function Ta(s,t){let e=Gu[t];e===void 0&&(e=new Int32Array(t),Gu[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function Mv(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function yv(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ce(e,t))return;s.uniform2fv(this.addr,t),Pe(e,t)}}function bv(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ce(e,t))return;s.uniform3fv(this.addr,t),Pe(e,t)}}function Sv(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ce(e,t))return;s.uniform4fv(this.addr,t),Pe(e,t)}}function Tv(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ce(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Pe(e,t)}else{if(Ce(e,n))return;qu.set(n),s.uniformMatrix2fv(this.addr,!1,qu),Pe(e,n)}}function Ev(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ce(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Pe(e,t)}else{if(Ce(e,n))return;Xu.set(n),s.uniformMatrix3fv(this.addr,!1,Xu),Pe(e,n)}}function Av(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ce(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Pe(e,t)}else{if(Ce(e,n))return;Wu.set(n),s.uniformMatrix4fv(this.addr,!1,Wu),Pe(e,n)}}function wv(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function Rv(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ce(e,t))return;s.uniform2iv(this.addr,t),Pe(e,t)}}function Cv(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ce(e,t))return;s.uniform3iv(this.addr,t),Pe(e,t)}}function Pv(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ce(e,t))return;s.uniform4iv(this.addr,t),Pe(e,t)}}function Lv(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function Iv(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ce(e,t))return;s.uniform2uiv(this.addr,t),Pe(e,t)}}function Nv(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ce(e,t))return;s.uniform3uiv(this.addr,t),Pe(e,t)}}function Dv(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ce(e,t))return;s.uniform4uiv(this.addr,t),Pe(e,t)}}function Fv(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(zu.compareFunction=wp,r=zu):r=kp,e.setTexture2D(t||r,i)}function Uv(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||zp,i)}function Ov(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Vp,i)}function Bv(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Hp,i)}function kv(s){switch(s){case 5126:return Mv;case 35664:return yv;case 35665:return bv;case 35666:return Sv;case 35674:return Tv;case 35675:return Ev;case 35676:return Av;case 5124:case 35670:return wv;case 35667:case 35671:return Rv;case 35668:case 35672:return Cv;case 35669:case 35673:return Pv;case 5125:return Lv;case 36294:return Iv;case 36295:return Nv;case 36296:return Dv;case 35678:case 36198:case 36298:case 36306:case 35682:return Fv;case 35679:case 36299:case 36307:return Uv;case 35680:case 36300:case 36308:case 36293:return Ov;case 36289:case 36303:case 36311:case 36292:return Bv}}function Hv(s,t){s.uniform1fv(this.addr,t)}function zv(s,t){const e=tr(t,this.size,2);s.uniform2fv(this.addr,e)}function Vv(s,t){const e=tr(t,this.size,3);s.uniform3fv(this.addr,e)}function Gv(s,t){const e=tr(t,this.size,4);s.uniform4fv(this.addr,e)}function Wv(s,t){const e=tr(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function Xv(s,t){const e=tr(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function qv(s,t){const e=tr(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function Kv(s,t){s.uniform1iv(this.addr,t)}function Yv(s,t){s.uniform2iv(this.addr,t)}function jv(s,t){s.uniform3iv(this.addr,t)}function $v(s,t){s.uniform4iv(this.addr,t)}function Zv(s,t){s.uniform1uiv(this.addr,t)}function Jv(s,t){s.uniform2uiv(this.addr,t)}function Qv(s,t){s.uniform3uiv(this.addr,t)}function tM(s,t){s.uniform4uiv(this.addr,t)}function eM(s,t,e){const n=this.cache,i=t.length,r=Ta(e,i);Ce(n,r)||(s.uniform1iv(this.addr,r),Pe(n,r));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||kp,r[o])}function nM(s,t,e){const n=this.cache,i=t.length,r=Ta(e,i);Ce(n,r)||(s.uniform1iv(this.addr,r),Pe(n,r));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||zp,r[o])}function iM(s,t,e){const n=this.cache,i=t.length,r=Ta(e,i);Ce(n,r)||(s.uniform1iv(this.addr,r),Pe(n,r));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||Vp,r[o])}function sM(s,t,e){const n=this.cache,i=t.length,r=Ta(e,i);Ce(n,r)||(s.uniform1iv(this.addr,r),Pe(n,r));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||Hp,r[o])}function rM(s){switch(s){case 5126:return Hv;case 35664:return zv;case 35665:return Vv;case 35666:return Gv;case 35674:return Wv;case 35675:return Xv;case 35676:return qv;case 5124:case 35670:return Kv;case 35667:case 35671:return Yv;case 35668:case 35672:return jv;case 35669:case 35673:return $v;case 5125:return Zv;case 36294:return Jv;case 36295:return Qv;case 36296:return tM;case 35678:case 36198:case 36298:case 36306:case 35682:return eM;case 35679:case 36299:case 36307:return nM;case 35680:case 36300:case 36308:case 36293:return iM;case 36289:case 36303:case 36311:case 36292:return sM}}class oM{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=kv(e.type)}}class aM{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=rM(e.type)}}class cM{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(t,e[a.id],n)}}}const lc=/(\w+)(\])?(\[|\.)?/g;function Ku(s,t){s.seq.push(t),s.map[t.id]=t}function lM(s,t,e){const n=s.name,i=n.length;for(lc.lastIndex=0;;){const r=lc.exec(n),o=lc.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){Ku(e,l===void 0?new oM(a,s,t):new aM(a,s,t));break}else{let u=e.map[a];u===void 0&&(u=new cM(a),Ku(e,u)),e=u}}}class ia{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=t.getActiveUniform(e,i),o=t.getUniformLocation(e,r.name);lM(r,o,this)}}setValue(t,e,n,i){const r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,o=e.length;r!==o;++r){const a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,r=t.length;i!==r;++i){const o=t[i];o.id in e&&n.push(o)}return n}}function Yu(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const hM=37297;let uM=0;function dM(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const ju=new $t;function fM(s){ee._getMatrix(ju,ee.workingColorSpace,s);const t=`mat3( ${ju.elements.map(e=>e.toFixed(4))} )`;switch(ee.getTransfer(s)){case Sa:return[t,"LinearTransferOETF"];case fe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function $u(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+dM(s.getShaderSource(t),o)}else return i}function pM(s,t){const e=fM(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function mM(s,t){let e;switch(t){case g0:e="Linear";break;case _0:e="Reinhard";break;case x0:e="Cineon";break;case fp:e="ACESFilmic";break;case M0:e="AgX";break;case y0:e="Neutral";break;case v0:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Mo=new R;function gM(){ee.getLuminanceCoefficients(Mo);const s=Mo.x.toFixed(4),t=Mo.y.toFixed(4),e=Mo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function _M(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(br).join(`
`)}function xM(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function vM(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(t,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function br(s){return s!==""}function Zu(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ju(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const MM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ul(s){return s.replace(MM,bM)}const yM=new Map;function bM(s,t){let e=Zt[t];if(e===void 0){const n=yM.get(t);if(n!==void 0)e=Zt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Ul(e)}const SM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Qu(s){return s.replace(SM,TM)}function TM(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function td(s){let t=`precision ${s.precision} float;
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
#define LOW_PRECISION`),t}function EM(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===up?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===dp?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===oi&&(t="SHADOWMAP_TYPE_VSM"),t}function AM(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Gs:case Ws:t="ENVMAP_TYPE_CUBE";break;case ba:t="ENVMAP_TYPE_CUBE_UV";break}return t}function wM(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Ws:t="ENVMAP_MODE_REFRACTION";break}return t}function RM(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case sh:t="ENVMAP_BLENDING_MULTIPLY";break;case p0:t="ENVMAP_BLENDING_MIX";break;case m0:t="ENVMAP_BLENDING_ADD";break}return t}function CM(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function PM(s,t,e,n){const i=s.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=EM(e),l=AM(e),h=wM(e),u=RM(e),d=CM(e),f=_M(e),m=xM(r),_=i.createProgram();let g,p,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(br).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(br).join(`
`),p.length>0&&(p+=`
`)):(g=[td(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(br).join(`
`),p=[td(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Oi?"#define TONE_MAPPING":"",e.toneMapping!==Oi?Zt.tonemapping_pars_fragment:"",e.toneMapping!==Oi?mM("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Zt.colorspace_pars_fragment,pM("linearToOutputTexel",e.outputColorSpace),gM(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(br).join(`
`)),o=Ul(o),o=Zu(o,e),o=Ju(o,e),a=Ul(a),a=Zu(a,e),a=Ju(a,e),o=Qu(o),a=Qu(a),e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",e.glslVersion===du?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===du?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const y=v+g+o,x=v+p+a,N=Yu(i,i.VERTEX_SHADER,y),w=Yu(i,i.FRAGMENT_SHADER,x);i.attachShader(_,N),i.attachShader(_,w),e.index0AttributeName!==void 0?i.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function C(L){if(s.debug.checkShaderErrors){const z=i.getProgramInfoLog(_).trim(),F=i.getShaderInfoLog(N).trim(),G=i.getShaderInfoLog(w).trim();let q=!0,K=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(q=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,_,N,w);else{const Z=$u(i,N,"vertex"),H=$u(i,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+z+`
`+Z+`
`+H)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(F===""||G==="")&&(K=!1);K&&(L.diagnostics={runnable:q,programLog:z,vertexShader:{log:F,prefix:g},fragmentShader:{log:G,prefix:p}})}i.deleteShader(N),i.deleteShader(w),I=new ia(i,_),T=vM(i,_)}let I;this.getUniforms=function(){return I===void 0&&C(this),I};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let b=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=i.getProgramParameter(_,hM)),b},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=uM++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=N,this.fragmentShader=w,this}let LM=0;class IM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new NM(t),e.set(t,n)),n}}class NM{constructor(t){this.id=LM++,this.code=t,this.usedTimes=0}}function DM(s,t,e,n,i,r,o){const a=new ph,c=new IM,l=new Set,h=[],u=i.logarithmicDepthBuffer,d=i.vertexTextures;let f=i.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(T){return l.add(T),T===0?"uv":`uv${T}`}function g(T,b,L,z,F){const G=z.fog,q=F.geometry,K=T.isMeshStandardMaterial?z.environment:null,Z=(T.isMeshStandardMaterial?e:t).get(T.envMap||K),H=Z&&Z.mapping===ba?Z.image.height:null,st=m[T.type];T.precision!==null&&(f=i.getMaxPrecision(T.precision),f!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",f,"instead."));const ot=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,_t=ot!==void 0?ot.length:0;let Rt=0;q.morphAttributes.position!==void 0&&(Rt=1),q.morphAttributes.normal!==void 0&&(Rt=2),q.morphAttributes.color!==void 0&&(Rt=3);let kt,Y,Q,St;if(st){const ie=Vn[st];kt=ie.vertexShader,Y=ie.fragmentShader}else kt=T.vertexShader,Y=T.fragmentShader,c.update(T),Q=c.getVertexShaderID(T),St=c.getFragmentShaderID(T);const it=s.getRenderTarget(),Pt=s.state.buffers.depth.getReversed(),Bt=F.isInstancedMesh===!0,Lt=F.isBatchedMesh===!0,Xt=!!T.map,tt=!!T.matcap,ht=!!Z,P=!!T.aoMap,lt=!!T.lightMap,et=!!T.bumpMap,ut=!!T.normalMap,ct=!!T.displacementMap,Ct=!!T.emissiveMap,mt=!!T.metalnessMap,E=!!T.roughnessMap,S=T.anisotropy>0,B=T.clearcoat>0,V=T.dispersion>0,J=T.iridescence>0,j=T.sheen>0,gt=T.transmission>0,at=S&&!!T.anisotropyMap,xt=B&&!!T.clearcoatMap,Ut=B&&!!T.clearcoatNormalMap,rt=B&&!!T.clearcoatRoughnessMap,At=J&&!!T.iridescenceMap,Tt=J&&!!T.iridescenceThicknessMap,Ht=j&&!!T.sheenColorMap,Et=j&&!!T.sheenRoughnessMap,Qt=!!T.specularMap,qt=!!T.specularColorMap,ne=!!T.specularIntensityMap,D=gt&&!!T.transmissionMap,ft=gt&&!!T.thicknessMap,$=!!T.gradientMap,nt=!!T.alphaMap,vt=T.alphaTest>0,bt=!!T.alphaHash,Wt=!!T.extensions;let me=Oi;T.toneMapped&&(it===null||it.isXRRenderTarget===!0)&&(me=s.toneMapping);const Le={shaderID:st,shaderType:T.type,shaderName:T.name,vertexShader:kt,fragmentShader:Y,defines:T.defines,customVertexShaderID:Q,customFragmentShaderID:St,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:f,batching:Lt,batchingColor:Lt&&F._colorsTexture!==null,instancing:Bt,instancingColor:Bt&&F.instanceColor!==null,instancingMorph:Bt&&F.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:it===null?s.outputColorSpace:it.isXRRenderTarget===!0?it.texture.colorSpace:Ke,alphaToCoverage:!!T.alphaToCoverage,map:Xt,matcap:tt,envMap:ht,envMapMode:ht&&Z.mapping,envMapCubeUVHeight:H,aoMap:P,lightMap:lt,bumpMap:et,normalMap:ut,displacementMap:d&&ct,emissiveMap:Ct,normalMapObjectSpace:ut&&T.normalMapType===A0,normalMapTangentSpace:ut&&T.normalMapType===dh,metalnessMap:mt,roughnessMap:E,anisotropy:S,anisotropyMap:at,clearcoat:B,clearcoatMap:xt,clearcoatNormalMap:Ut,clearcoatRoughnessMap:rt,dispersion:V,iridescence:J,iridescenceMap:At,iridescenceThicknessMap:Tt,sheen:j,sheenColorMap:Ht,sheenRoughnessMap:Et,specularMap:Qt,specularColorMap:qt,specularIntensityMap:ne,transmission:gt,transmissionMap:D,thicknessMap:ft,gradientMap:$,opaque:T.transparent===!1&&T.blending===Fs&&T.alphaToCoverage===!1,alphaMap:nt,alphaTest:vt,alphaHash:bt,combine:T.combine,mapUv:Xt&&_(T.map.channel),aoMapUv:P&&_(T.aoMap.channel),lightMapUv:lt&&_(T.lightMap.channel),bumpMapUv:et&&_(T.bumpMap.channel),normalMapUv:ut&&_(T.normalMap.channel),displacementMapUv:ct&&_(T.displacementMap.channel),emissiveMapUv:Ct&&_(T.emissiveMap.channel),metalnessMapUv:mt&&_(T.metalnessMap.channel),roughnessMapUv:E&&_(T.roughnessMap.channel),anisotropyMapUv:at&&_(T.anisotropyMap.channel),clearcoatMapUv:xt&&_(T.clearcoatMap.channel),clearcoatNormalMapUv:Ut&&_(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:rt&&_(T.clearcoatRoughnessMap.channel),iridescenceMapUv:At&&_(T.iridescenceMap.channel),iridescenceThicknessMapUv:Tt&&_(T.iridescenceThicknessMap.channel),sheenColorMapUv:Ht&&_(T.sheenColorMap.channel),sheenRoughnessMapUv:Et&&_(T.sheenRoughnessMap.channel),specularMapUv:Qt&&_(T.specularMap.channel),specularColorMapUv:qt&&_(T.specularColorMap.channel),specularIntensityMapUv:ne&&_(T.specularIntensityMap.channel),transmissionMapUv:D&&_(T.transmissionMap.channel),thicknessMapUv:ft&&_(T.thicknessMap.channel),alphaMapUv:nt&&_(T.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(ut||S),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!q.attributes.uv&&(Xt||nt),fog:!!G,useFog:T.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Pt,skinning:F.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:_t,morphTextureStride:Rt,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:T.dithering,shadowMapEnabled:s.shadowMap.enabled&&L.length>0,shadowMapType:s.shadowMap.type,toneMapping:me,decodeVideoTexture:Xt&&T.map.isVideoTexture===!0&&ee.getTransfer(T.map.colorSpace)===fe,decodeVideoTextureEmissive:Ct&&T.emissiveMap.isVideoTexture===!0&&ee.getTransfer(T.emissiveMap.colorSpace)===fe,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Be,flipSided:T.side===Xe,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Wt&&T.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Wt&&T.extensions.multiDraw===!0||Lt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Le.vertexUv1s=l.has(1),Le.vertexUv2s=l.has(2),Le.vertexUv3s=l.has(3),l.clear(),Le}function p(T){const b=[];if(T.shaderID?b.push(T.shaderID):(b.push(T.customVertexShaderID),b.push(T.customFragmentShaderID)),T.defines!==void 0)for(const L in T.defines)b.push(L),b.push(T.defines[L]);return T.isRawShaderMaterial===!1&&(v(b,T),y(b,T),b.push(s.outputColorSpace)),b.push(T.customProgramCacheKey),b.join()}function v(T,b){T.push(b.precision),T.push(b.outputColorSpace),T.push(b.envMapMode),T.push(b.envMapCubeUVHeight),T.push(b.mapUv),T.push(b.alphaMapUv),T.push(b.lightMapUv),T.push(b.aoMapUv),T.push(b.bumpMapUv),T.push(b.normalMapUv),T.push(b.displacementMapUv),T.push(b.emissiveMapUv),T.push(b.metalnessMapUv),T.push(b.roughnessMapUv),T.push(b.anisotropyMapUv),T.push(b.clearcoatMapUv),T.push(b.clearcoatNormalMapUv),T.push(b.clearcoatRoughnessMapUv),T.push(b.iridescenceMapUv),T.push(b.iridescenceThicknessMapUv),T.push(b.sheenColorMapUv),T.push(b.sheenRoughnessMapUv),T.push(b.specularMapUv),T.push(b.specularColorMapUv),T.push(b.specularIntensityMapUv),T.push(b.transmissionMapUv),T.push(b.thicknessMapUv),T.push(b.combine),T.push(b.fogExp2),T.push(b.sizeAttenuation),T.push(b.morphTargetsCount),T.push(b.morphAttributeCount),T.push(b.numDirLights),T.push(b.numPointLights),T.push(b.numSpotLights),T.push(b.numSpotLightMaps),T.push(b.numHemiLights),T.push(b.numRectAreaLights),T.push(b.numDirLightShadows),T.push(b.numPointLightShadows),T.push(b.numSpotLightShadows),T.push(b.numSpotLightShadowsWithMaps),T.push(b.numLightProbes),T.push(b.shadowMapType),T.push(b.toneMapping),T.push(b.numClippingPlanes),T.push(b.numClipIntersection),T.push(b.depthPacking)}function y(T,b){a.disableAll(),b.supportsVertexTextures&&a.enable(0),b.instancing&&a.enable(1),b.instancingColor&&a.enable(2),b.instancingMorph&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),b.dispersion&&a.enable(20),b.batchingColor&&a.enable(21),T.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reverseDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),T.push(a.mask)}function x(T){const b=m[T.type];let L;if(b){const z=Vn[b];L=_g.clone(z.uniforms)}else L=T.uniforms;return L}function N(T,b){let L;for(let z=0,F=h.length;z<F;z++){const G=h[z];if(G.cacheKey===b){L=G,++L.usedTimes;break}}return L===void 0&&(L=new PM(s,b,T,r),h.push(L)),L}function w(T){if(--T.usedTimes===0){const b=h.indexOf(T);h[b]=h[h.length-1],h.pop(),T.destroy()}}function C(T){c.remove(T)}function I(){c.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:x,acquireProgram:N,releaseProgram:w,releaseShaderCache:C,programs:h,dispose:I}}function FM(){let s=new WeakMap;function t(o){return s.has(o)}function e(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,c){s.get(o)[a]=c}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function UM(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function ed(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function nd(){const s=[];let t=0;const e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function o(u,d,f,m,_,g){let p=s[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:m,renderOrder:u.renderOrder,z:_,group:g},s[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=m,p.renderOrder=u.renderOrder,p.z=_,p.group=g),t++,p}function a(u,d,f,m,_,g){const p=o(u,d,f,m,_,g);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):e.push(p)}function c(u,d,f,m,_,g){const p=o(u,d,f,m,_,g);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):e.unshift(p)}function l(u,d){e.length>1&&e.sort(u||UM),n.length>1&&n.sort(d||ed),i.length>1&&i.sort(d||ed)}function h(){for(let u=t,d=s.length;u<d;u++){const f=s[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:a,unshift:c,finish:h,sort:l}}function OM(){let s=new WeakMap;function t(n,i){const r=s.get(n);let o;return r===void 0?(o=new nd,s.set(n,[o])):i>=r.length?(o=new nd,r.push(o)):o=r[i],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function BM(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new R,color:new It};break;case"SpotLight":e={position:new R,direction:new R,color:new It,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new R,color:new It,distance:0,decay:0};break;case"HemisphereLight":e={direction:new R,skyColor:new It,groundColor:new It};break;case"RectAreaLight":e={color:new It,position:new R,halfWidth:new R,halfHeight:new R};break}return s[t.id]=e,e}}}function kM(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let HM=0;function zM(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function VM(s){const t=new BM,e=kM(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new R);const i=new R,r=new Vt,o=new Vt;function a(l){let h=0,u=0,d=0;for(let T=0;T<9;T++)n.probe[T].set(0,0,0);let f=0,m=0,_=0,g=0,p=0,v=0,y=0,x=0,N=0,w=0,C=0;l.sort(zM);for(let T=0,b=l.length;T<b;T++){const L=l[T],z=L.color,F=L.intensity,G=L.distance,q=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=z.r*F,u+=z.g*F,d+=z.b*F;else if(L.isLightProbe){for(let K=0;K<9;K++)n.probe[K].addScaledVector(L.sh.coefficients[K],F);C++}else if(L.isDirectionalLight){const K=t.get(L);if(K.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const Z=L.shadow,H=e.get(L);H.shadowIntensity=Z.intensity,H.shadowBias=Z.bias,H.shadowNormalBias=Z.normalBias,H.shadowRadius=Z.radius,H.shadowMapSize=Z.mapSize,n.directionalShadow[f]=H,n.directionalShadowMap[f]=q,n.directionalShadowMatrix[f]=L.shadow.matrix,v++}n.directional[f]=K,f++}else if(L.isSpotLight){const K=t.get(L);K.position.setFromMatrixPosition(L.matrixWorld),K.color.copy(z).multiplyScalar(F),K.distance=G,K.coneCos=Math.cos(L.angle),K.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),K.decay=L.decay,n.spot[_]=K;const Z=L.shadow;if(L.map&&(n.spotLightMap[N]=L.map,N++,Z.updateMatrices(L),L.castShadow&&w++),n.spotLightMatrix[_]=Z.matrix,L.castShadow){const H=e.get(L);H.shadowIntensity=Z.intensity,H.shadowBias=Z.bias,H.shadowNormalBias=Z.normalBias,H.shadowRadius=Z.radius,H.shadowMapSize=Z.mapSize,n.spotShadow[_]=H,n.spotShadowMap[_]=q,x++}_++}else if(L.isRectAreaLight){const K=t.get(L);K.color.copy(z).multiplyScalar(F),K.halfWidth.set(L.width*.5,0,0),K.halfHeight.set(0,L.height*.5,0),n.rectArea[g]=K,g++}else if(L.isPointLight){const K=t.get(L);if(K.color.copy(L.color).multiplyScalar(L.intensity),K.distance=L.distance,K.decay=L.decay,L.castShadow){const Z=L.shadow,H=e.get(L);H.shadowIntensity=Z.intensity,H.shadowBias=Z.bias,H.shadowNormalBias=Z.normalBias,H.shadowRadius=Z.radius,H.shadowMapSize=Z.mapSize,H.shadowCameraNear=Z.camera.near,H.shadowCameraFar=Z.camera.far,n.pointShadow[m]=H,n.pointShadowMap[m]=q,n.pointShadowMatrix[m]=L.shadow.matrix,y++}n.point[m]=K,m++}else if(L.isHemisphereLight){const K=t.get(L);K.skyColor.copy(L.color).multiplyScalar(F),K.groundColor.copy(L.groundColor).multiplyScalar(F),n.hemi[p]=K,p++}}g>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=yt.LTC_FLOAT_1,n.rectAreaLTC2=yt.LTC_FLOAT_2):(n.rectAreaLTC1=yt.LTC_HALF_1,n.rectAreaLTC2=yt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const I=n.hash;(I.directionalLength!==f||I.pointLength!==m||I.spotLength!==_||I.rectAreaLength!==g||I.hemiLength!==p||I.numDirectionalShadows!==v||I.numPointShadows!==y||I.numSpotShadows!==x||I.numSpotMaps!==N||I.numLightProbes!==C)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=g,n.point.length=m,n.hemi.length=p,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=x+N-w,n.spotLightMap.length=N,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=C,I.directionalLength=f,I.pointLength=m,I.spotLength=_,I.rectAreaLength=g,I.hemiLength=p,I.numDirectionalShadows=v,I.numPointShadows=y,I.numSpotShadows=x,I.numSpotMaps=N,I.numLightProbes=C,n.version=HM++)}function c(l,h){let u=0,d=0,f=0,m=0,_=0;const g=h.matrixWorldInverse;for(let p=0,v=l.length;p<v;p++){const y=l[p];if(y.isDirectionalLight){const x=n.directional[u];x.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(g),u++}else if(y.isSpotLight){const x=n.spot[f];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(g),x.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(g),f++}else if(y.isRectAreaLight){const x=n.rectArea[m];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(g),o.identity(),r.copy(y.matrixWorld),r.premultiply(g),o.extractRotation(r),x.halfWidth.set(y.width*.5,0,0),x.halfHeight.set(0,y.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),m++}else if(y.isPointLight){const x=n.point[d];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(g),d++}else if(y.isHemisphereLight){const x=n.hemi[_];x.direction.setFromMatrixPosition(y.matrixWorld),x.direction.transformDirection(g),_++}}}return{setup:a,setupView:c,state:n}}function id(s){const t=new VM(s),e=[],n=[];function i(h){l.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function c(h){t.setupView(e,h)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function GM(s){let t=new WeakMap;function e(i,r=0){const o=t.get(i);let a;return o===void 0?(a=new id(s),t.set(i,[a])):r>=o.length?(a=new id(s),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class WM extends Fn{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=T0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class XM extends Fn{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const qM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,KM=`uniform sampler2D shadow_pass;
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
}`;function YM(s,t,e){let n=new mh;const i=new pt,r=new pt,o=new ae,a=new WM({depthPacking:E0}),c=new XM,l={},h=e.maxTextureSize,u={[di]:Xe,[Xe]:di,[Be]:Be},d=new pi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new pt},radius:{value:4}},vertexShader:qM,fragmentShader:KM}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const m=new be;m.setAttribute("position",new Yt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new oe(m,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=up;let p=this.type;this.render=function(w,C,I){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||w.length===0)return;const T=s.getRenderTarget(),b=s.getActiveCubeFace(),L=s.getActiveMipmapLevel(),z=s.state;z.setBlending(Ui),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const F=p!==oi&&this.type===oi,G=p===oi&&this.type!==oi;for(let q=0,K=w.length;q<K;q++){const Z=w[q],H=Z.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;i.copy(H.mapSize);const st=H.getFrameExtents();if(i.multiply(st),r.copy(H.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/st.x),i.x=r.x*st.x,H.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/st.y),i.y=r.y*st.y,H.mapSize.y=r.y)),H.map===null||F===!0||G===!0){const _t=this.type!==oi?{minFilter:qe,magFilter:qe}:{};H.map!==null&&H.map.dispose(),H.map=new rs(i.x,i.y,_t),H.map.texture.name=Z.name+".shadowMap",H.camera.updateProjectionMatrix()}s.setRenderTarget(H.map),s.clear();const ot=H.getViewportCount();for(let _t=0;_t<ot;_t++){const Rt=H.getViewport(_t);o.set(r.x*Rt.x,r.y*Rt.y,r.x*Rt.z,r.y*Rt.w),z.viewport(o),H.updateMatrices(Z,_t),n=H.getFrustum(),x(C,I,H.camera,Z,this.type)}H.isPointLightShadow!==!0&&this.type===oi&&v(H,I),H.needsUpdate=!1}p=this.type,g.needsUpdate=!1,s.setRenderTarget(T,b,L)};function v(w,C){const I=t.update(_);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new rs(i.x,i.y)),d.uniforms.shadow_pass.value=w.map.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,s.setRenderTarget(w.mapPass),s.clear(),s.renderBufferDirect(C,null,I,d,_,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,s.setRenderTarget(w.map),s.clear(),s.renderBufferDirect(C,null,I,f,_,null)}function y(w,C,I,T){let b=null;const L=I.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(L!==void 0)b=L;else if(b=I.isPointLight===!0?c:a,s.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const z=b.uuid,F=C.uuid;let G=l[z];G===void 0&&(G={},l[z]=G);let q=G[F];q===void 0&&(q=b.clone(),G[F]=q,C.addEventListener("dispose",N)),b=q}if(b.visible=C.visible,b.wireframe=C.wireframe,T===oi?b.side=C.shadowSide!==null?C.shadowSide:C.side:b.side=C.shadowSide!==null?C.shadowSide:u[C.side],b.alphaMap=C.alphaMap,b.alphaTest=C.alphaTest,b.map=C.map,b.clipShadows=C.clipShadows,b.clippingPlanes=C.clippingPlanes,b.clipIntersection=C.clipIntersection,b.displacementMap=C.displacementMap,b.displacementScale=C.displacementScale,b.displacementBias=C.displacementBias,b.wireframeLinewidth=C.wireframeLinewidth,b.linewidth=C.linewidth,I.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const z=s.properties.get(b);z.light=I}return b}function x(w,C,I,T,b){if(w.visible===!1)return;if(w.layers.test(C.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&b===oi)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,w.matrixWorld);const F=t.update(w),G=w.material;if(Array.isArray(G)){const q=F.groups;for(let K=0,Z=q.length;K<Z;K++){const H=q[K],st=G[H.materialIndex];if(st&&st.visible){const ot=y(w,st,T,b);w.onBeforeShadow(s,w,C,I,F,ot,H),s.renderBufferDirect(I,null,F,ot,w,H),w.onAfterShadow(s,w,C,I,F,ot,H)}}}else if(G.visible){const q=y(w,G,T,b);w.onBeforeShadow(s,w,C,I,F,q,null),s.renderBufferDirect(I,null,F,q,w,null),w.onAfterShadow(s,w,C,I,F,q,null)}}const z=w.children;for(let F=0,G=z.length;F<G;F++)x(z[F],C,I,T,b)}function N(w){w.target.removeEventListener("dispose",N);for(const I in l){const T=l[I],b=w.target.uuid;b in T&&(T[b].dispose(),delete T[b])}}}const jM={[Qc]:tl,[el]:sl,[nl]:rl,[Vs]:il,[tl]:Qc,[sl]:el,[rl]:nl,[il]:Vs};function $M(s,t){function e(){let D=!1;const ft=new ae;let $=null;const nt=new ae(0,0,0,0);return{setMask:function(vt){$!==vt&&!D&&(s.colorMask(vt,vt,vt,vt),$=vt)},setLocked:function(vt){D=vt},setClear:function(vt,bt,Wt,me,Le){Le===!0&&(vt*=me,bt*=me,Wt*=me),ft.set(vt,bt,Wt,me),nt.equals(ft)===!1&&(s.clearColor(vt,bt,Wt,me),nt.copy(ft))},reset:function(){D=!1,$=null,nt.set(-1,0,0,0)}}}function n(){let D=!1,ft=!1,$=null,nt=null,vt=null;return{setReversed:function(bt){if(ft!==bt){const Wt=t.get("EXT_clip_control");ft?Wt.clipControlEXT(Wt.LOWER_LEFT_EXT,Wt.ZERO_TO_ONE_EXT):Wt.clipControlEXT(Wt.LOWER_LEFT_EXT,Wt.NEGATIVE_ONE_TO_ONE_EXT);const me=vt;vt=null,this.setClear(me)}ft=bt},getReversed:function(){return ft},setTest:function(bt){bt?it(s.DEPTH_TEST):Pt(s.DEPTH_TEST)},setMask:function(bt){$!==bt&&!D&&(s.depthMask(bt),$=bt)},setFunc:function(bt){if(ft&&(bt=jM[bt]),nt!==bt){switch(bt){case Qc:s.depthFunc(s.NEVER);break;case tl:s.depthFunc(s.ALWAYS);break;case el:s.depthFunc(s.LESS);break;case Vs:s.depthFunc(s.LEQUAL);break;case nl:s.depthFunc(s.EQUAL);break;case il:s.depthFunc(s.GEQUAL);break;case sl:s.depthFunc(s.GREATER);break;case rl:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}nt=bt}},setLocked:function(bt){D=bt},setClear:function(bt){vt!==bt&&(ft&&(bt=1-bt),s.clearDepth(bt),vt=bt)},reset:function(){D=!1,$=null,nt=null,vt=null,ft=!1}}}function i(){let D=!1,ft=null,$=null,nt=null,vt=null,bt=null,Wt=null,me=null,Le=null;return{setTest:function(ie){D||(ie?it(s.STENCIL_TEST):Pt(s.STENCIL_TEST))},setMask:function(ie){ft!==ie&&!D&&(s.stencilMask(ie),ft=ie)},setFunc:function(ie,Ye,_n){($!==ie||nt!==Ye||vt!==_n)&&(s.stencilFunc(ie,Ye,_n),$=ie,nt=Ye,vt=_n)},setOp:function(ie,Ye,_n){(bt!==ie||Wt!==Ye||me!==_n)&&(s.stencilOp(ie,Ye,_n),bt=ie,Wt=Ye,me=_n)},setLocked:function(ie){D=ie},setClear:function(ie){Le!==ie&&(s.clearStencil(ie),Le=ie)},reset:function(){D=!1,ft=null,$=null,nt=null,vt=null,bt=null,Wt=null,me=null,Le=null}}}const r=new e,o=new n,a=new i,c=new WeakMap,l=new WeakMap;let h={},u={},d=new WeakMap,f=[],m=null,_=!1,g=null,p=null,v=null,y=null,x=null,N=null,w=null,C=new It(0,0,0),I=0,T=!1,b=null,L=null,z=null,F=null,G=null;const q=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,Z=0;const H=s.getParameter(s.VERSION);H.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(H)[1]),K=Z>=1):H.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),K=Z>=2);let st=null,ot={};const _t=s.getParameter(s.SCISSOR_BOX),Rt=s.getParameter(s.VIEWPORT),kt=new ae().fromArray(_t),Y=new ae().fromArray(Rt);function Q(D,ft,$,nt){const vt=new Uint8Array(4),bt=s.createTexture();s.bindTexture(D,bt),s.texParameteri(D,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(D,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Wt=0;Wt<$;Wt++)D===s.TEXTURE_3D||D===s.TEXTURE_2D_ARRAY?s.texImage3D(ft,0,s.RGBA,1,1,nt,0,s.RGBA,s.UNSIGNED_BYTE,vt):s.texImage2D(ft+Wt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,vt);return bt}const St={};St[s.TEXTURE_2D]=Q(s.TEXTURE_2D,s.TEXTURE_2D,1),St[s.TEXTURE_CUBE_MAP]=Q(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),St[s.TEXTURE_2D_ARRAY]=Q(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),St[s.TEXTURE_3D]=Q(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),it(s.DEPTH_TEST),o.setFunc(Vs),et(!1),ut(iu),it(s.CULL_FACE),P(Ui);function it(D){h[D]!==!0&&(s.enable(D),h[D]=!0)}function Pt(D){h[D]!==!1&&(s.disable(D),h[D]=!1)}function Bt(D,ft){return u[D]!==ft?(s.bindFramebuffer(D,ft),u[D]=ft,D===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=ft),D===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=ft),!0):!1}function Lt(D,ft){let $=f,nt=!1;if(D){$=d.get(ft),$===void 0&&($=[],d.set(ft,$));const vt=D.textures;if($.length!==vt.length||$[0]!==s.COLOR_ATTACHMENT0){for(let bt=0,Wt=vt.length;bt<Wt;bt++)$[bt]=s.COLOR_ATTACHMENT0+bt;$.length=vt.length,nt=!0}}else $[0]!==s.BACK&&($[0]=s.BACK,nt=!0);nt&&s.drawBuffers($)}function Xt(D){return m!==D?(s.useProgram(D),m=D,!0):!1}const tt={[Ji]:s.FUNC_ADD,[Zm]:s.FUNC_SUBTRACT,[Jm]:s.FUNC_REVERSE_SUBTRACT};tt[Qm]=s.MIN,tt[t0]=s.MAX;const ht={[e0]:s.ZERO,[n0]:s.ONE,[i0]:s.SRC_COLOR,[Zc]:s.SRC_ALPHA,[l0]:s.SRC_ALPHA_SATURATE,[a0]:s.DST_COLOR,[r0]:s.DST_ALPHA,[s0]:s.ONE_MINUS_SRC_COLOR,[Jc]:s.ONE_MINUS_SRC_ALPHA,[c0]:s.ONE_MINUS_DST_COLOR,[o0]:s.ONE_MINUS_DST_ALPHA,[h0]:s.CONSTANT_COLOR,[u0]:s.ONE_MINUS_CONSTANT_COLOR,[d0]:s.CONSTANT_ALPHA,[f0]:s.ONE_MINUS_CONSTANT_ALPHA};function P(D,ft,$,nt,vt,bt,Wt,me,Le,ie){if(D===Ui){_===!0&&(Pt(s.BLEND),_=!1);return}if(_===!1&&(it(s.BLEND),_=!0),D!==$m){if(D!==g||ie!==T){if((p!==Ji||x!==Ji)&&(s.blendEquation(s.FUNC_ADD),p=Ji,x=Ji),ie)switch(D){case Fs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case su:s.blendFunc(s.ONE,s.ONE);break;case ru:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case ou:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Fs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case su:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case ru:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case ou:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}v=null,y=null,N=null,w=null,C.set(0,0,0),I=0,g=D,T=ie}return}vt=vt||ft,bt=bt||$,Wt=Wt||nt,(ft!==p||vt!==x)&&(s.blendEquationSeparate(tt[ft],tt[vt]),p=ft,x=vt),($!==v||nt!==y||bt!==N||Wt!==w)&&(s.blendFuncSeparate(ht[$],ht[nt],ht[bt],ht[Wt]),v=$,y=nt,N=bt,w=Wt),(me.equals(C)===!1||Le!==I)&&(s.blendColor(me.r,me.g,me.b,Le),C.copy(me),I=Le),g=D,T=!1}function lt(D,ft){D.side===Be?Pt(s.CULL_FACE):it(s.CULL_FACE);let $=D.side===Xe;ft&&($=!$),et($),D.blending===Fs&&D.transparent===!1?P(Ui):P(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),o.setFunc(D.depthFunc),o.setTest(D.depthTest),o.setMask(D.depthWrite),r.setMask(D.colorWrite);const nt=D.stencilWrite;a.setTest(nt),nt&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),Ct(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?it(s.SAMPLE_ALPHA_TO_COVERAGE):Pt(s.SAMPLE_ALPHA_TO_COVERAGE)}function et(D){b!==D&&(D?s.frontFace(s.CW):s.frontFace(s.CCW),b=D)}function ut(D){D!==Ym?(it(s.CULL_FACE),D!==L&&(D===iu?s.cullFace(s.BACK):D===jm?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Pt(s.CULL_FACE),L=D}function ct(D){D!==z&&(K&&s.lineWidth(D),z=D)}function Ct(D,ft,$){D?(it(s.POLYGON_OFFSET_FILL),(F!==ft||G!==$)&&(s.polygonOffset(ft,$),F=ft,G=$)):Pt(s.POLYGON_OFFSET_FILL)}function mt(D){D?it(s.SCISSOR_TEST):Pt(s.SCISSOR_TEST)}function E(D){D===void 0&&(D=s.TEXTURE0+q-1),st!==D&&(s.activeTexture(D),st=D)}function S(D,ft,$){$===void 0&&(st===null?$=s.TEXTURE0+q-1:$=st);let nt=ot[$];nt===void 0&&(nt={type:void 0,texture:void 0},ot[$]=nt),(nt.type!==D||nt.texture!==ft)&&(st!==$&&(s.activeTexture($),st=$),s.bindTexture(D,ft||St[D]),nt.type=D,nt.texture=ft)}function B(){const D=ot[st];D!==void 0&&D.type!==void 0&&(s.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function V(){try{s.compressedTexImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function J(){try{s.compressedTexImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function j(){try{s.texSubImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function gt(){try{s.texSubImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function at(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function xt(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ut(){try{s.texStorage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function rt(){try{s.texStorage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function At(){try{s.texImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Tt(){try{s.texImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ht(D){kt.equals(D)===!1&&(s.scissor(D.x,D.y,D.z,D.w),kt.copy(D))}function Et(D){Y.equals(D)===!1&&(s.viewport(D.x,D.y,D.z,D.w),Y.copy(D))}function Qt(D,ft){let $=l.get(ft);$===void 0&&($=new WeakMap,l.set(ft,$));let nt=$.get(D);nt===void 0&&(nt=s.getUniformBlockIndex(ft,D.name),$.set(D,nt))}function qt(D,ft){const nt=l.get(ft).get(D);c.get(ft)!==nt&&(s.uniformBlockBinding(ft,nt,D.__bindingPointIndex),c.set(ft,nt))}function ne(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},st=null,ot={},u={},d=new WeakMap,f=[],m=null,_=!1,g=null,p=null,v=null,y=null,x=null,N=null,w=null,C=new It(0,0,0),I=0,T=!1,b=null,L=null,z=null,F=null,G=null,kt.set(0,0,s.canvas.width,s.canvas.height),Y.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:it,disable:Pt,bindFramebuffer:Bt,drawBuffers:Lt,useProgram:Xt,setBlending:P,setMaterial:lt,setFlipSided:et,setCullFace:ut,setLineWidth:ct,setPolygonOffset:Ct,setScissorTest:mt,activeTexture:E,bindTexture:S,unbindTexture:B,compressedTexImage2D:V,compressedTexImage3D:J,texImage2D:At,texImage3D:Tt,updateUBOMapping:Qt,uniformBlockBinding:qt,texStorage2D:Ut,texStorage3D:rt,texSubImage2D:j,texSubImage3D:gt,compressedTexSubImage2D:at,compressedTexSubImage3D:xt,scissor:Ht,viewport:Et,reset:ne}}function sd(s,t,e,n){const i=ZM(n);switch(e){case Mp:return s*t;case bp:return s*t;case Sp:return s*t*2;case ch:return s*t/i.components*i.byteLength;case lh:return s*t/i.components*i.byteLength;case Tp:return s*t*2/i.components*i.byteLength;case hh:return s*t*2/i.components*i.byteLength;case yp:return s*t*3/i.components*i.byteLength;case mn:return s*t*4/i.components*i.byteLength;case uh:return s*t*4/i.components*i.byteLength;case Jo:case Qo:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case ta:case ea:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case ll:case ul:return Math.max(s,16)*Math.max(t,8)/4;case cl:case hl:return Math.max(s,8)*Math.max(t,8)/2;case dl:case fl:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case pl:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case ml:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case gl:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case _l:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case xl:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case vl:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Ml:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case yl:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case bl:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Sl:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Tl:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case El:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case Al:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case wl:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case Rl:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case na:case Cl:case Pl:return Math.ceil(s/4)*Math.ceil(t/4)*16;case Ep:case Ll:return Math.ceil(s/4)*Math.ceil(t/4)*8;case Il:case Nl:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function ZM(s){switch(s){case fi:case _p:return{byteLength:1,components:1};case Fr:case xp:case Xr:return{byteLength:2,components:1};case oh:case ah:return{byteLength:2,components:4};case ss:case rh:case Nn:return{byteLength:4,components:1};case vp:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function JM(s,t,e,n,i,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new pt,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(E,S){return f?new OffscreenCanvas(E,S):Br("canvas")}function _(E,S,B){let V=1;const J=mt(E);if((J.width>B||J.height>B)&&(V=B/Math.max(J.width,J.height)),V<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const j=Math.floor(V*J.width),gt=Math.floor(V*J.height);u===void 0&&(u=m(j,gt));const at=S?m(j,gt):u;return at.width=j,at.height=gt,at.getContext("2d").drawImage(E,0,0,j,gt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+j+"x"+gt+")."),at}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),E;return E}function g(E){return E.generateMipmaps}function p(E){s.generateMipmap(E)}function v(E){return E.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?s.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function y(E,S,B,V,J=!1){if(E!==null){if(s[E]!==void 0)return s[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let j=S;if(S===s.RED&&(B===s.FLOAT&&(j=s.R32F),B===s.HALF_FLOAT&&(j=s.R16F),B===s.UNSIGNED_BYTE&&(j=s.R8)),S===s.RED_INTEGER&&(B===s.UNSIGNED_BYTE&&(j=s.R8UI),B===s.UNSIGNED_SHORT&&(j=s.R16UI),B===s.UNSIGNED_INT&&(j=s.R32UI),B===s.BYTE&&(j=s.R8I),B===s.SHORT&&(j=s.R16I),B===s.INT&&(j=s.R32I)),S===s.RG&&(B===s.FLOAT&&(j=s.RG32F),B===s.HALF_FLOAT&&(j=s.RG16F),B===s.UNSIGNED_BYTE&&(j=s.RG8)),S===s.RG_INTEGER&&(B===s.UNSIGNED_BYTE&&(j=s.RG8UI),B===s.UNSIGNED_SHORT&&(j=s.RG16UI),B===s.UNSIGNED_INT&&(j=s.RG32UI),B===s.BYTE&&(j=s.RG8I),B===s.SHORT&&(j=s.RG16I),B===s.INT&&(j=s.RG32I)),S===s.RGB_INTEGER&&(B===s.UNSIGNED_BYTE&&(j=s.RGB8UI),B===s.UNSIGNED_SHORT&&(j=s.RGB16UI),B===s.UNSIGNED_INT&&(j=s.RGB32UI),B===s.BYTE&&(j=s.RGB8I),B===s.SHORT&&(j=s.RGB16I),B===s.INT&&(j=s.RGB32I)),S===s.RGBA_INTEGER&&(B===s.UNSIGNED_BYTE&&(j=s.RGBA8UI),B===s.UNSIGNED_SHORT&&(j=s.RGBA16UI),B===s.UNSIGNED_INT&&(j=s.RGBA32UI),B===s.BYTE&&(j=s.RGBA8I),B===s.SHORT&&(j=s.RGBA16I),B===s.INT&&(j=s.RGBA32I)),S===s.RGB&&B===s.UNSIGNED_INT_5_9_9_9_REV&&(j=s.RGB9_E5),S===s.RGBA){const gt=J?Sa:ee.getTransfer(V);B===s.FLOAT&&(j=s.RGBA32F),B===s.HALF_FLOAT&&(j=s.RGBA16F),B===s.UNSIGNED_BYTE&&(j=gt===fe?s.SRGB8_ALPHA8:s.RGBA8),B===s.UNSIGNED_SHORT_4_4_4_4&&(j=s.RGBA4),B===s.UNSIGNED_SHORT_5_5_5_1&&(j=s.RGB5_A1)}return(j===s.R16F||j===s.R32F||j===s.RG16F||j===s.RG32F||j===s.RGBA16F||j===s.RGBA32F)&&t.get("EXT_color_buffer_float"),j}function x(E,S){let B;return E?S===null||S===ss||S===Xs?B=s.DEPTH24_STENCIL8:S===Nn?B=s.DEPTH32F_STENCIL8:S===Fr&&(B=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===ss||S===Xs?B=s.DEPTH_COMPONENT24:S===Nn?B=s.DEPTH_COMPONENT32F:S===Fr&&(B=s.DEPTH_COMPONENT16),B}function N(E,S){return g(E)===!0||E.isFramebufferTexture&&E.minFilter!==qe&&E.minFilter!==en?Math.log2(Math.max(S.width,S.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?S.mipmaps.length:1}function w(E){const S=E.target;S.removeEventListener("dispose",w),I(S),S.isVideoTexture&&h.delete(S)}function C(E){const S=E.target;S.removeEventListener("dispose",C),b(S)}function I(E){const S=n.get(E);if(S.__webglInit===void 0)return;const B=E.source,V=d.get(B);if(V){const J=V[S.__cacheKey];J.usedTimes--,J.usedTimes===0&&T(E),Object.keys(V).length===0&&d.delete(B)}n.remove(E)}function T(E){const S=n.get(E);s.deleteTexture(S.__webglTexture);const B=E.source,V=d.get(B);delete V[S.__cacheKey],o.memory.textures--}function b(E){const S=n.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),n.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let V=0;V<6;V++){if(Array.isArray(S.__webglFramebuffer[V]))for(let J=0;J<S.__webglFramebuffer[V].length;J++)s.deleteFramebuffer(S.__webglFramebuffer[V][J]);else s.deleteFramebuffer(S.__webglFramebuffer[V]);S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer[V])}else{if(Array.isArray(S.__webglFramebuffer))for(let V=0;V<S.__webglFramebuffer.length;V++)s.deleteFramebuffer(S.__webglFramebuffer[V]);else s.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&s.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let V=0;V<S.__webglColorRenderbuffer.length;V++)S.__webglColorRenderbuffer[V]&&s.deleteRenderbuffer(S.__webglColorRenderbuffer[V]);S.__webglDepthRenderbuffer&&s.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const B=E.textures;for(let V=0,J=B.length;V<J;V++){const j=n.get(B[V]);j.__webglTexture&&(s.deleteTexture(j.__webglTexture),o.memory.textures--),n.remove(B[V])}n.remove(E)}let L=0;function z(){L=0}function F(){const E=L;return E>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+i.maxTextures),L+=1,E}function G(E){const S=[];return S.push(E.wrapS),S.push(E.wrapT),S.push(E.wrapR||0),S.push(E.magFilter),S.push(E.minFilter),S.push(E.anisotropy),S.push(E.internalFormat),S.push(E.format),S.push(E.type),S.push(E.generateMipmaps),S.push(E.premultiplyAlpha),S.push(E.flipY),S.push(E.unpackAlignment),S.push(E.colorSpace),S.join()}function q(E,S){const B=n.get(E);if(E.isVideoTexture&&ct(E),E.isRenderTargetTexture===!1&&E.version>0&&B.__version!==E.version){const V=E.image;if(V===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(V.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(B,E,S);return}}e.bindTexture(s.TEXTURE_2D,B.__webglTexture,s.TEXTURE0+S)}function K(E,S){const B=n.get(E);if(E.version>0&&B.__version!==E.version){Y(B,E,S);return}e.bindTexture(s.TEXTURE_2D_ARRAY,B.__webglTexture,s.TEXTURE0+S)}function Z(E,S){const B=n.get(E);if(E.version>0&&B.__version!==E.version){Y(B,E,S);return}e.bindTexture(s.TEXTURE_3D,B.__webglTexture,s.TEXTURE0+S)}function H(E,S){const B=n.get(E);if(E.version>0&&B.__version!==E.version){Q(B,E,S);return}e.bindTexture(s.TEXTURE_CUBE_MAP,B.__webglTexture,s.TEXTURE0+S)}const st={[is]:s.REPEAT,[Ni]:s.CLAMP_TO_EDGE,[ua]:s.MIRRORED_REPEAT},ot={[qe]:s.NEAREST,[gp]:s.NEAREST_MIPMAP_NEAREST,[Mr]:s.NEAREST_MIPMAP_LINEAR,[en]:s.LINEAR,[Zo]:s.LINEAR_MIPMAP_NEAREST,[Xn]:s.LINEAR_MIPMAP_LINEAR},_t={[w0]:s.NEVER,[N0]:s.ALWAYS,[R0]:s.LESS,[wp]:s.LEQUAL,[C0]:s.EQUAL,[I0]:s.GEQUAL,[P0]:s.GREATER,[L0]:s.NOTEQUAL};function Rt(E,S){if(S.type===Nn&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===en||S.magFilter===Zo||S.magFilter===Mr||S.magFilter===Xn||S.minFilter===en||S.minFilter===Zo||S.minFilter===Mr||S.minFilter===Xn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(E,s.TEXTURE_WRAP_S,st[S.wrapS]),s.texParameteri(E,s.TEXTURE_WRAP_T,st[S.wrapT]),(E===s.TEXTURE_3D||E===s.TEXTURE_2D_ARRAY)&&s.texParameteri(E,s.TEXTURE_WRAP_R,st[S.wrapR]),s.texParameteri(E,s.TEXTURE_MAG_FILTER,ot[S.magFilter]),s.texParameteri(E,s.TEXTURE_MIN_FILTER,ot[S.minFilter]),S.compareFunction&&(s.texParameteri(E,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(E,s.TEXTURE_COMPARE_FUNC,_t[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===qe||S.minFilter!==Mr&&S.minFilter!==Xn||S.type===Nn&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const B=t.get("EXT_texture_filter_anisotropic");s.texParameterf(E,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function kt(E,S){let B=!1;E.__webglInit===void 0&&(E.__webglInit=!0,S.addEventListener("dispose",w));const V=S.source;let J=d.get(V);J===void 0&&(J={},d.set(V,J));const j=G(S);if(j!==E.__cacheKey){J[j]===void 0&&(J[j]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,B=!0),J[j].usedTimes++;const gt=J[E.__cacheKey];gt!==void 0&&(J[E.__cacheKey].usedTimes--,gt.usedTimes===0&&T(S)),E.__cacheKey=j,E.__webglTexture=J[j].texture}return B}function Y(E,S,B){let V=s.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(V=s.TEXTURE_2D_ARRAY),S.isData3DTexture&&(V=s.TEXTURE_3D);const J=kt(E,S),j=S.source;e.bindTexture(V,E.__webglTexture,s.TEXTURE0+B);const gt=n.get(j);if(j.version!==gt.__version||J===!0){e.activeTexture(s.TEXTURE0+B);const at=ee.getPrimaries(ee.workingColorSpace),xt=S.colorSpace===Li?null:ee.getPrimaries(S.colorSpace),Ut=S.colorSpace===Li||at===xt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ut);let rt=_(S.image,!1,i.maxTextureSize);rt=Ct(S,rt);const At=r.convert(S.format,S.colorSpace),Tt=r.convert(S.type);let Ht=y(S.internalFormat,At,Tt,S.colorSpace,S.isVideoTexture);Rt(V,S);let Et;const Qt=S.mipmaps,qt=S.isVideoTexture!==!0,ne=gt.__version===void 0||J===!0,D=j.dataReady,ft=N(S,rt);if(S.isDepthTexture)Ht=x(S.format===qs,S.type),ne&&(qt?e.texStorage2D(s.TEXTURE_2D,1,Ht,rt.width,rt.height):e.texImage2D(s.TEXTURE_2D,0,Ht,rt.width,rt.height,0,At,Tt,null));else if(S.isDataTexture)if(Qt.length>0){qt&&ne&&e.texStorage2D(s.TEXTURE_2D,ft,Ht,Qt[0].width,Qt[0].height);for(let $=0,nt=Qt.length;$<nt;$++)Et=Qt[$],qt?D&&e.texSubImage2D(s.TEXTURE_2D,$,0,0,Et.width,Et.height,At,Tt,Et.data):e.texImage2D(s.TEXTURE_2D,$,Ht,Et.width,Et.height,0,At,Tt,Et.data);S.generateMipmaps=!1}else qt?(ne&&e.texStorage2D(s.TEXTURE_2D,ft,Ht,rt.width,rt.height),D&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,rt.width,rt.height,At,Tt,rt.data)):e.texImage2D(s.TEXTURE_2D,0,Ht,rt.width,rt.height,0,At,Tt,rt.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){qt&&ne&&e.texStorage3D(s.TEXTURE_2D_ARRAY,ft,Ht,Qt[0].width,Qt[0].height,rt.depth);for(let $=0,nt=Qt.length;$<nt;$++)if(Et=Qt[$],S.format!==mn)if(At!==null)if(qt){if(D)if(S.layerUpdates.size>0){const vt=sd(Et.width,Et.height,S.format,S.type);for(const bt of S.layerUpdates){const Wt=Et.data.subarray(bt*vt/Et.data.BYTES_PER_ELEMENT,(bt+1)*vt/Et.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,$,0,0,bt,Et.width,Et.height,1,At,Wt)}S.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,$,0,0,0,Et.width,Et.height,rt.depth,At,Et.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,$,Ht,Et.width,Et.height,rt.depth,0,Et.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else qt?D&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,$,0,0,0,Et.width,Et.height,rt.depth,At,Tt,Et.data):e.texImage3D(s.TEXTURE_2D_ARRAY,$,Ht,Et.width,Et.height,rt.depth,0,At,Tt,Et.data)}else{qt&&ne&&e.texStorage2D(s.TEXTURE_2D,ft,Ht,Qt[0].width,Qt[0].height);for(let $=0,nt=Qt.length;$<nt;$++)Et=Qt[$],S.format!==mn?At!==null?qt?D&&e.compressedTexSubImage2D(s.TEXTURE_2D,$,0,0,Et.width,Et.height,At,Et.data):e.compressedTexImage2D(s.TEXTURE_2D,$,Ht,Et.width,Et.height,0,Et.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qt?D&&e.texSubImage2D(s.TEXTURE_2D,$,0,0,Et.width,Et.height,At,Tt,Et.data):e.texImage2D(s.TEXTURE_2D,$,Ht,Et.width,Et.height,0,At,Tt,Et.data)}else if(S.isDataArrayTexture)if(qt){if(ne&&e.texStorage3D(s.TEXTURE_2D_ARRAY,ft,Ht,rt.width,rt.height,rt.depth),D)if(S.layerUpdates.size>0){const $=sd(rt.width,rt.height,S.format,S.type);for(const nt of S.layerUpdates){const vt=rt.data.subarray(nt*$/rt.data.BYTES_PER_ELEMENT,(nt+1)*$/rt.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,nt,rt.width,rt.height,1,At,Tt,vt)}S.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,rt.width,rt.height,rt.depth,At,Tt,rt.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,Ht,rt.width,rt.height,rt.depth,0,At,Tt,rt.data);else if(S.isData3DTexture)qt?(ne&&e.texStorage3D(s.TEXTURE_3D,ft,Ht,rt.width,rt.height,rt.depth),D&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,rt.width,rt.height,rt.depth,At,Tt,rt.data)):e.texImage3D(s.TEXTURE_3D,0,Ht,rt.width,rt.height,rt.depth,0,At,Tt,rt.data);else if(S.isFramebufferTexture){if(ne)if(qt)e.texStorage2D(s.TEXTURE_2D,ft,Ht,rt.width,rt.height);else{let $=rt.width,nt=rt.height;for(let vt=0;vt<ft;vt++)e.texImage2D(s.TEXTURE_2D,vt,Ht,$,nt,0,At,Tt,null),$>>=1,nt>>=1}}else if(Qt.length>0){if(qt&&ne){const $=mt(Qt[0]);e.texStorage2D(s.TEXTURE_2D,ft,Ht,$.width,$.height)}for(let $=0,nt=Qt.length;$<nt;$++)Et=Qt[$],qt?D&&e.texSubImage2D(s.TEXTURE_2D,$,0,0,At,Tt,Et):e.texImage2D(s.TEXTURE_2D,$,Ht,At,Tt,Et);S.generateMipmaps=!1}else if(qt){if(ne){const $=mt(rt);e.texStorage2D(s.TEXTURE_2D,ft,Ht,$.width,$.height)}D&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,At,Tt,rt)}else e.texImage2D(s.TEXTURE_2D,0,Ht,At,Tt,rt);g(S)&&p(V),gt.__version=j.version,S.onUpdate&&S.onUpdate(S)}E.__version=S.version}function Q(E,S,B){if(S.image.length!==6)return;const V=kt(E,S),J=S.source;e.bindTexture(s.TEXTURE_CUBE_MAP,E.__webglTexture,s.TEXTURE0+B);const j=n.get(J);if(J.version!==j.__version||V===!0){e.activeTexture(s.TEXTURE0+B);const gt=ee.getPrimaries(ee.workingColorSpace),at=S.colorSpace===Li?null:ee.getPrimaries(S.colorSpace),xt=S.colorSpace===Li||gt===at?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,xt);const Ut=S.isCompressedTexture||S.image[0].isCompressedTexture,rt=S.image[0]&&S.image[0].isDataTexture,At=[];for(let nt=0;nt<6;nt++)!Ut&&!rt?At[nt]=_(S.image[nt],!0,i.maxCubemapSize):At[nt]=rt?S.image[nt].image:S.image[nt],At[nt]=Ct(S,At[nt]);const Tt=At[0],Ht=r.convert(S.format,S.colorSpace),Et=r.convert(S.type),Qt=y(S.internalFormat,Ht,Et,S.colorSpace),qt=S.isVideoTexture!==!0,ne=j.__version===void 0||V===!0,D=J.dataReady;let ft=N(S,Tt);Rt(s.TEXTURE_CUBE_MAP,S);let $;if(Ut){qt&&ne&&e.texStorage2D(s.TEXTURE_CUBE_MAP,ft,Qt,Tt.width,Tt.height);for(let nt=0;nt<6;nt++){$=At[nt].mipmaps;for(let vt=0;vt<$.length;vt++){const bt=$[vt];S.format!==mn?Ht!==null?qt?D&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,vt,0,0,bt.width,bt.height,Ht,bt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,vt,Qt,bt.width,bt.height,0,bt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):qt?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,vt,0,0,bt.width,bt.height,Ht,Et,bt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,vt,Qt,bt.width,bt.height,0,Ht,Et,bt.data)}}}else{if($=S.mipmaps,qt&&ne){$.length>0&&ft++;const nt=mt(At[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,ft,Qt,nt.width,nt.height)}for(let nt=0;nt<6;nt++)if(rt){qt?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,At[nt].width,At[nt].height,Ht,Et,At[nt].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,Qt,At[nt].width,At[nt].height,0,Ht,Et,At[nt].data);for(let vt=0;vt<$.length;vt++){const Wt=$[vt].image[nt].image;qt?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,vt+1,0,0,Wt.width,Wt.height,Ht,Et,Wt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,vt+1,Qt,Wt.width,Wt.height,0,Ht,Et,Wt.data)}}else{qt?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,Ht,Et,At[nt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,Qt,Ht,Et,At[nt]);for(let vt=0;vt<$.length;vt++){const bt=$[vt];qt?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,vt+1,0,0,Ht,Et,bt.image[nt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,vt+1,Qt,Ht,Et,bt.image[nt])}}}g(S)&&p(s.TEXTURE_CUBE_MAP),j.__version=J.version,S.onUpdate&&S.onUpdate(S)}E.__version=S.version}function St(E,S,B,V,J,j){const gt=r.convert(B.format,B.colorSpace),at=r.convert(B.type),xt=y(B.internalFormat,gt,at,B.colorSpace),Ut=n.get(S),rt=n.get(B);if(rt.__renderTarget=S,!Ut.__hasExternalTextures){const At=Math.max(1,S.width>>j),Tt=Math.max(1,S.height>>j);J===s.TEXTURE_3D||J===s.TEXTURE_2D_ARRAY?e.texImage3D(J,j,xt,At,Tt,S.depth,0,gt,at,null):e.texImage2D(J,j,xt,At,Tt,0,gt,at,null)}e.bindFramebuffer(s.FRAMEBUFFER,E),ut(S)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,V,J,rt.__webglTexture,0,et(S)):(J===s.TEXTURE_2D||J>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,V,J,rt.__webglTexture,j),e.bindFramebuffer(s.FRAMEBUFFER,null)}function it(E,S,B){if(s.bindRenderbuffer(s.RENDERBUFFER,E),S.depthBuffer){const V=S.depthTexture,J=V&&V.isDepthTexture?V.type:null,j=x(S.stencilBuffer,J),gt=S.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,at=et(S);ut(S)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,at,j,S.width,S.height):B?s.renderbufferStorageMultisample(s.RENDERBUFFER,at,j,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,j,S.width,S.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,gt,s.RENDERBUFFER,E)}else{const V=S.textures;for(let J=0;J<V.length;J++){const j=V[J],gt=r.convert(j.format,j.colorSpace),at=r.convert(j.type),xt=y(j.internalFormat,gt,at,j.colorSpace),Ut=et(S);B&&ut(S)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ut,xt,S.width,S.height):ut(S)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ut,xt,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,xt,S.width,S.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Pt(E,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,E),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const V=n.get(S.depthTexture);V.__renderTarget=S,(!V.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),q(S.depthTexture,0);const J=V.__webglTexture,j=et(S);if(S.depthTexture.format===Us)ut(S)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,J,0,j):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,J,0);else if(S.depthTexture.format===qs)ut(S)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,J,0,j):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function Bt(E){const S=n.get(E),B=E.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==E.depthTexture){const V=E.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),V){const J=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,V.removeEventListener("dispose",J)};V.addEventListener("dispose",J),S.__depthDisposeCallback=J}S.__boundDepthTexture=V}if(E.depthTexture&&!S.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");Pt(S.__webglFramebuffer,E)}else if(B){S.__webglDepthbuffer=[];for(let V=0;V<6;V++)if(e.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer[V]),S.__webglDepthbuffer[V]===void 0)S.__webglDepthbuffer[V]=s.createRenderbuffer(),it(S.__webglDepthbuffer[V],E,!1);else{const J=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,j=S.__webglDepthbuffer[V];s.bindRenderbuffer(s.RENDERBUFFER,j),s.framebufferRenderbuffer(s.FRAMEBUFFER,J,s.RENDERBUFFER,j)}}else if(e.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=s.createRenderbuffer(),it(S.__webglDepthbuffer,E,!1);else{const V=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,J=S.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,J),s.framebufferRenderbuffer(s.FRAMEBUFFER,V,s.RENDERBUFFER,J)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function Lt(E,S,B){const V=n.get(E);S!==void 0&&St(V.__webglFramebuffer,E,E.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),B!==void 0&&Bt(E)}function Xt(E){const S=E.texture,B=n.get(E),V=n.get(S);E.addEventListener("dispose",C);const J=E.textures,j=E.isWebGLCubeRenderTarget===!0,gt=J.length>1;if(gt||(V.__webglTexture===void 0&&(V.__webglTexture=s.createTexture()),V.__version=S.version,o.memory.textures++),j){B.__webglFramebuffer=[];for(let at=0;at<6;at++)if(S.mipmaps&&S.mipmaps.length>0){B.__webglFramebuffer[at]=[];for(let xt=0;xt<S.mipmaps.length;xt++)B.__webglFramebuffer[at][xt]=s.createFramebuffer()}else B.__webglFramebuffer[at]=s.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){B.__webglFramebuffer=[];for(let at=0;at<S.mipmaps.length;at++)B.__webglFramebuffer[at]=s.createFramebuffer()}else B.__webglFramebuffer=s.createFramebuffer();if(gt)for(let at=0,xt=J.length;at<xt;at++){const Ut=n.get(J[at]);Ut.__webglTexture===void 0&&(Ut.__webglTexture=s.createTexture(),o.memory.textures++)}if(E.samples>0&&ut(E)===!1){B.__webglMultisampledFramebuffer=s.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let at=0;at<J.length;at++){const xt=J[at];B.__webglColorRenderbuffer[at]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,B.__webglColorRenderbuffer[at]);const Ut=r.convert(xt.format,xt.colorSpace),rt=r.convert(xt.type),At=y(xt.internalFormat,Ut,rt,xt.colorSpace,E.isXRRenderTarget===!0),Tt=et(E);s.renderbufferStorageMultisample(s.RENDERBUFFER,Tt,At,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+at,s.RENDERBUFFER,B.__webglColorRenderbuffer[at])}s.bindRenderbuffer(s.RENDERBUFFER,null),E.depthBuffer&&(B.__webglDepthRenderbuffer=s.createRenderbuffer(),it(B.__webglDepthRenderbuffer,E,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(j){e.bindTexture(s.TEXTURE_CUBE_MAP,V.__webglTexture),Rt(s.TEXTURE_CUBE_MAP,S);for(let at=0;at<6;at++)if(S.mipmaps&&S.mipmaps.length>0)for(let xt=0;xt<S.mipmaps.length;xt++)St(B.__webglFramebuffer[at][xt],E,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+at,xt);else St(B.__webglFramebuffer[at],E,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+at,0);g(S)&&p(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(gt){for(let at=0,xt=J.length;at<xt;at++){const Ut=J[at],rt=n.get(Ut);e.bindTexture(s.TEXTURE_2D,rt.__webglTexture),Rt(s.TEXTURE_2D,Ut),St(B.__webglFramebuffer,E,Ut,s.COLOR_ATTACHMENT0+at,s.TEXTURE_2D,0),g(Ut)&&p(s.TEXTURE_2D)}e.unbindTexture()}else{let at=s.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(at=E.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(at,V.__webglTexture),Rt(at,S),S.mipmaps&&S.mipmaps.length>0)for(let xt=0;xt<S.mipmaps.length;xt++)St(B.__webglFramebuffer[xt],E,S,s.COLOR_ATTACHMENT0,at,xt);else St(B.__webglFramebuffer,E,S,s.COLOR_ATTACHMENT0,at,0);g(S)&&p(at),e.unbindTexture()}E.depthBuffer&&Bt(E)}function tt(E){const S=E.textures;for(let B=0,V=S.length;B<V;B++){const J=S[B];if(g(J)){const j=v(E),gt=n.get(J).__webglTexture;e.bindTexture(j,gt),p(j),e.unbindTexture()}}}const ht=[],P=[];function lt(E){if(E.samples>0){if(ut(E)===!1){const S=E.textures,B=E.width,V=E.height;let J=s.COLOR_BUFFER_BIT;const j=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,gt=n.get(E),at=S.length>1;if(at)for(let xt=0;xt<S.length;xt++)e.bindFramebuffer(s.FRAMEBUFFER,gt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+xt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,gt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+xt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,gt.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,gt.__webglFramebuffer);for(let xt=0;xt<S.length;xt++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(J|=s.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(J|=s.STENCIL_BUFFER_BIT)),at){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,gt.__webglColorRenderbuffer[xt]);const Ut=n.get(S[xt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Ut,0)}s.blitFramebuffer(0,0,B,V,0,0,B,V,J,s.NEAREST),c===!0&&(ht.length=0,P.length=0,ht.push(s.COLOR_ATTACHMENT0+xt),E.depthBuffer&&E.resolveDepthBuffer===!1&&(ht.push(j),P.push(j),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,P)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ht))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),at)for(let xt=0;xt<S.length;xt++){e.bindFramebuffer(s.FRAMEBUFFER,gt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+xt,s.RENDERBUFFER,gt.__webglColorRenderbuffer[xt]);const Ut=n.get(S[xt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,gt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+xt,s.TEXTURE_2D,Ut,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,gt.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&c){const S=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[S])}}}function et(E){return Math.min(i.maxSamples,E.samples)}function ut(E){const S=n.get(E);return E.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function ct(E){const S=o.render.frame;h.get(E)!==S&&(h.set(E,S),E.update())}function Ct(E,S){const B=E.colorSpace,V=E.format,J=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||B!==Ke&&B!==Li&&(ee.getTransfer(B)===fe?(V!==mn||J!==fi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),S}function mt(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(l.width=E.naturalWidth||E.width,l.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(l.width=E.displayWidth,l.height=E.displayHeight):(l.width=E.width,l.height=E.height),l}this.allocateTextureUnit=F,this.resetTextureUnits=z,this.setTexture2D=q,this.setTexture2DArray=K,this.setTexture3D=Z,this.setTextureCube=H,this.rebindTextures=Lt,this.setupRenderTarget=Xt,this.updateRenderTargetMipmap=tt,this.updateMultisampleRenderTarget=lt,this.setupDepthRenderbuffer=Bt,this.setupFrameBufferTexture=St,this.useMultisampledRTT=ut}function QM(s,t){function e(n,i=Li){let r;const o=ee.getTransfer(i);if(n===fi)return s.UNSIGNED_BYTE;if(n===oh)return s.UNSIGNED_SHORT_4_4_4_4;if(n===ah)return s.UNSIGNED_SHORT_5_5_5_1;if(n===vp)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===_p)return s.BYTE;if(n===xp)return s.SHORT;if(n===Fr)return s.UNSIGNED_SHORT;if(n===rh)return s.INT;if(n===ss)return s.UNSIGNED_INT;if(n===Nn)return s.FLOAT;if(n===Xr)return s.HALF_FLOAT;if(n===Mp)return s.ALPHA;if(n===yp)return s.RGB;if(n===mn)return s.RGBA;if(n===bp)return s.LUMINANCE;if(n===Sp)return s.LUMINANCE_ALPHA;if(n===Us)return s.DEPTH_COMPONENT;if(n===qs)return s.DEPTH_STENCIL;if(n===ch)return s.RED;if(n===lh)return s.RED_INTEGER;if(n===Tp)return s.RG;if(n===hh)return s.RG_INTEGER;if(n===uh)return s.RGBA_INTEGER;if(n===Jo||n===Qo||n===ta||n===ea)if(o===fe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Jo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Qo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ta)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ea)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Jo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Qo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ta)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ea)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===cl||n===ll||n===hl||n===ul)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===cl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ll)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===hl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ul)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===dl||n===fl||n===pl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===dl||n===fl)return o===fe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===pl)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ml||n===gl||n===_l||n===xl||n===vl||n===Ml||n===yl||n===bl||n===Sl||n===Tl||n===El||n===Al||n===wl||n===Rl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ml)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===gl)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===_l)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===xl)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===vl)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ml)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===yl)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===bl)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Sl)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Tl)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===El)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Al)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===wl)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Rl)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===na||n===Cl||n===Pl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===na)return o===fe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Cl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Pl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ep||n===Ll||n===Il||n===Nl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===na)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ll)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Il)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Nl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Xs?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}class ty extends Ge{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Fe extends Me{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ey={type:"move"};class hc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Fe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Fe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Fe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const _ of t.hand.values()){const g=e.getJointPose(_,n),p=this._getHandJoint(l,_);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,m=.005;l.inputState.pinching&&d>f+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=f-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(ey)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Fe;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const ny=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,iy=`
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

}`;class sy{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const i=new Re,r=t.properties.get(i);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new pi({vertexShader:ny,fragmentShader:iy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new oe(new Kr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class ry extends Qs{constructor(t,e){super();const n=this;let i=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,m=null;const _=new sy,g=e.getContextAttributes();let p=null,v=null;const y=[],x=[],N=new pt;let w=null;const C=new Ge;C.viewport=new ae;const I=new Ge;I.viewport=new ae;const T=[C,I],b=new ty;let L=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let Q=y[Y];return Q===void 0&&(Q=new hc,y[Y]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(Y){let Q=y[Y];return Q===void 0&&(Q=new hc,y[Y]=Q),Q.getGripSpace()},this.getHand=function(Y){let Q=y[Y];return Q===void 0&&(Q=new hc,y[Y]=Q),Q.getHandSpace()};function F(Y){const Q=x.indexOf(Y.inputSource);if(Q===-1)return;const St=y[Q];St!==void 0&&(St.update(Y.inputSource,Y.frame,l||o),St.dispatchEvent({type:Y.type,data:Y.inputSource}))}function G(){i.removeEventListener("select",F),i.removeEventListener("selectstart",F),i.removeEventListener("selectend",F),i.removeEventListener("squeeze",F),i.removeEventListener("squeezestart",F),i.removeEventListener("squeezeend",F),i.removeEventListener("end",G),i.removeEventListener("inputsourceschange",q);for(let Y=0;Y<y.length;Y++){const Q=x[Y];Q!==null&&(x[Y]=null,y[Y].disconnect(Q))}L=null,z=null,_.reset(),t.setRenderTarget(p),f=null,d=null,u=null,i=null,v=null,kt.stop(),n.isPresenting=!1,t.setPixelRatio(w),t.setSize(N.width,N.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(Y){l=Y},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(Y){if(i=Y,i!==null){if(p=t.getRenderTarget(),i.addEventListener("select",F),i.addEventListener("selectstart",F),i.addEventListener("selectend",F),i.addEventListener("squeeze",F),i.addEventListener("squeezestart",F),i.addEventListener("squeezeend",F),i.addEventListener("end",G),i.addEventListener("inputsourceschange",q),g.xrCompatible!==!0&&await e.makeXRCompatible(),w=t.getPixelRatio(),t.getSize(N),i.renderState.layers===void 0){const Q={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,e,Q),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new rs(f.framebufferWidth,f.framebufferHeight,{format:mn,type:fi,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let Q=null,St=null,it=null;g.depth&&(it=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Q=g.stencil?qs:Us,St=g.stencil?Xs:ss);const Pt={colorFormat:e.RGBA8,depthFormat:it,scaleFactor:r};u=new XRWebGLBinding(i,e),d=u.createProjectionLayer(Pt),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),v=new rs(d.textureWidth,d.textureHeight,{format:mn,type:fi,depthTexture:new Bp(d.textureWidth,d.textureHeight,St,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await i.requestReferenceSpace(a),kt.setContext(i),kt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function q(Y){for(let Q=0;Q<Y.removed.length;Q++){const St=Y.removed[Q],it=x.indexOf(St);it>=0&&(x[it]=null,y[it].disconnect(St))}for(let Q=0;Q<Y.added.length;Q++){const St=Y.added[Q];let it=x.indexOf(St);if(it===-1){for(let Bt=0;Bt<y.length;Bt++)if(Bt>=x.length){x.push(St),it=Bt;break}else if(x[Bt]===null){x[Bt]=St,it=Bt;break}if(it===-1)break}const Pt=y[it];Pt&&Pt.connect(St)}}const K=new R,Z=new R;function H(Y,Q,St){K.setFromMatrixPosition(Q.matrixWorld),Z.setFromMatrixPosition(St.matrixWorld);const it=K.distanceTo(Z),Pt=Q.projectionMatrix.elements,Bt=St.projectionMatrix.elements,Lt=Pt[14]/(Pt[10]-1),Xt=Pt[14]/(Pt[10]+1),tt=(Pt[9]+1)/Pt[5],ht=(Pt[9]-1)/Pt[5],P=(Pt[8]-1)/Pt[0],lt=(Bt[8]+1)/Bt[0],et=Lt*P,ut=Lt*lt,ct=it/(-P+lt),Ct=ct*-P;if(Q.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(Ct),Y.translateZ(ct),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),Pt[10]===-1)Y.projectionMatrix.copy(Q.projectionMatrix),Y.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{const mt=Lt+ct,E=Xt+ct,S=et-Ct,B=ut+(it-Ct),V=tt*Xt/E*mt,J=ht*Xt/E*mt;Y.projectionMatrix.makePerspective(S,B,V,J,mt,E),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function st(Y,Q){Q===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(Q.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(i===null)return;let Q=Y.near,St=Y.far;_.texture!==null&&(_.depthNear>0&&(Q=_.depthNear),_.depthFar>0&&(St=_.depthFar)),b.near=I.near=C.near=Q,b.far=I.far=C.far=St,(L!==b.near||z!==b.far)&&(i.updateRenderState({depthNear:b.near,depthFar:b.far}),L=b.near,z=b.far),C.layers.mask=Y.layers.mask|2,I.layers.mask=Y.layers.mask|4,b.layers.mask=C.layers.mask|I.layers.mask;const it=Y.parent,Pt=b.cameras;st(b,it);for(let Bt=0;Bt<Pt.length;Bt++)st(Pt[Bt],it);Pt.length===2?H(b,C,I):b.projectionMatrix.copy(C.projectionMatrix),ot(Y,b,it)};function ot(Y,Q,St){St===null?Y.matrix.copy(Q.matrixWorld):(Y.matrix.copy(St.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(Q.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(Q.projectionMatrix),Y.projectionMatrixInverse.copy(Q.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Ks*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(Y){c=Y,d!==null&&(d.fixedFoveation=Y),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Y)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(b)};let _t=null;function Rt(Y,Q){if(h=Q.getViewerPose(l||o),m=Q,h!==null){const St=h.views;f!==null&&(t.setRenderTargetFramebuffer(v,f.framebuffer),t.setRenderTarget(v));let it=!1;St.length!==b.cameras.length&&(b.cameras.length=0,it=!0);for(let Bt=0;Bt<St.length;Bt++){const Lt=St[Bt];let Xt=null;if(f!==null)Xt=f.getViewport(Lt);else{const ht=u.getViewSubImage(d,Lt);Xt=ht.viewport,Bt===0&&(t.setRenderTargetTextures(v,ht.colorTexture,d.ignoreDepthValues?void 0:ht.depthStencilTexture),t.setRenderTarget(v))}let tt=T[Bt];tt===void 0&&(tt=new Ge,tt.layers.enable(Bt),tt.viewport=new ae,T[Bt]=tt),tt.matrix.fromArray(Lt.transform.matrix),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale),tt.projectionMatrix.fromArray(Lt.projectionMatrix),tt.projectionMatrixInverse.copy(tt.projectionMatrix).invert(),tt.viewport.set(Xt.x,Xt.y,Xt.width,Xt.height),Bt===0&&(b.matrix.copy(tt.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),it===!0&&b.cameras.push(tt)}const Pt=i.enabledFeatures;if(Pt&&Pt.includes("depth-sensing")){const Bt=u.getDepthInformation(St[0]);Bt&&Bt.isValid&&Bt.texture&&_.init(t,Bt,i.renderState)}}for(let St=0;St<y.length;St++){const it=x[St],Pt=y[St];it!==null&&Pt!==void 0&&Pt.update(it,Q,l||o)}_t&&_t(Y,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),m=null}const kt=new Op;kt.setAnimationLoop(Rt),this.setAnimationLoop=function(Y){_t=Y},this.dispose=function(){}}}const Xi=new On,oy=new Vt;function ay(s,t){function e(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,Dp(s)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function i(g,p,v,y,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(g,p):p.isMeshToonMaterial?(r(g,p),u(g,p)):p.isMeshPhongMaterial?(r(g,p),h(g,p)):p.isMeshStandardMaterial?(r(g,p),d(g,p),p.isMeshPhysicalMaterial&&f(g,p,x)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),_(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?c(g,p,v,y):p.isSpriteMaterial?l(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,e(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===Xe&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,e(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===Xe&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,e(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,e(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const v=t.get(p),y=v.envMap,x=v.envMapRotation;y&&(g.envMap.value=y,Xi.copy(x),Xi.x*=-1,Xi.y*=-1,Xi.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Xi.y*=-1,Xi.z*=-1),g.envMapRotation.value.setFromMatrix4(oy.makeRotationFromEuler(Xi)),g.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function c(g,p,v,y){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*v,g.scale.value=y*.5,p.map&&(g.map.value=p.map,e(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function l(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function u(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function d(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,v){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Xe&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=v.texture,g.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function _(g,p){const v=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(v.matrixWorld),g.nearDistance.value=v.shadow.camera.near,g.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function cy(s,t,e,n){let i={},r={},o=[];const a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function c(v,y){const x=y.program;n.uniformBlockBinding(v,x)}function l(v,y){let x=i[v.id];x===void 0&&(m(v),x=h(v),i[v.id]=x,v.addEventListener("dispose",g));const N=y.program;n.updateUBOMapping(v,N);const w=t.render.frame;r[v.id]!==w&&(d(v),r[v.id]=w)}function h(v){const y=u();v.__bindingPointIndex=y;const x=s.createBuffer(),N=v.__size,w=v.usage;return s.bindBuffer(s.UNIFORM_BUFFER,x),s.bufferData(s.UNIFORM_BUFFER,N,w),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,y,x),x}function u(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){const y=i[v.id],x=v.uniforms,N=v.__cache;s.bindBuffer(s.UNIFORM_BUFFER,y);for(let w=0,C=x.length;w<C;w++){const I=Array.isArray(x[w])?x[w]:[x[w]];for(let T=0,b=I.length;T<b;T++){const L=I[T];if(f(L,w,T,N)===!0){const z=L.__offset,F=Array.isArray(L.value)?L.value:[L.value];let G=0;for(let q=0;q<F.length;q++){const K=F[q],Z=_(K);typeof K=="number"||typeof K=="boolean"?(L.__data[0]=K,s.bufferSubData(s.UNIFORM_BUFFER,z+G,L.__data)):K.isMatrix3?(L.__data[0]=K.elements[0],L.__data[1]=K.elements[1],L.__data[2]=K.elements[2],L.__data[3]=0,L.__data[4]=K.elements[3],L.__data[5]=K.elements[4],L.__data[6]=K.elements[5],L.__data[7]=0,L.__data[8]=K.elements[6],L.__data[9]=K.elements[7],L.__data[10]=K.elements[8],L.__data[11]=0):(K.toArray(L.__data,G),G+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,z,L.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(v,y,x,N){const w=v.value,C=y+"_"+x;if(N[C]===void 0)return typeof w=="number"||typeof w=="boolean"?N[C]=w:N[C]=w.clone(),!0;{const I=N[C];if(typeof w=="number"||typeof w=="boolean"){if(I!==w)return N[C]=w,!0}else if(I.equals(w)===!1)return I.copy(w),!0}return!1}function m(v){const y=v.uniforms;let x=0;const N=16;for(let C=0,I=y.length;C<I;C++){const T=Array.isArray(y[C])?y[C]:[y[C]];for(let b=0,L=T.length;b<L;b++){const z=T[b],F=Array.isArray(z.value)?z.value:[z.value];for(let G=0,q=F.length;G<q;G++){const K=F[G],Z=_(K),H=x%N,st=H%Z.boundary,ot=H+st;x+=st,ot!==0&&N-ot<Z.storage&&(x+=N-ot),z.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=x,x+=Z.storage}}}const w=x%N;return w>0&&(x+=N-w),v.__size=x,v.__cache={},this}function _(v){const y={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(y.boundary=4,y.storage=4):v.isVector2?(y.boundary=8,y.storage=8):v.isVector3||v.isColor?(y.boundary=16,y.storage=12):v.isVector4?(y.boundary=16,y.storage=16):v.isMatrix3?(y.boundary=48,y.storage=48):v.isMatrix4?(y.boundary=64,y.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),y}function g(v){const y=v.target;y.removeEventListener("dispose",g);const x=o.indexOf(y.__bindingPointIndex);o.splice(x,1),s.deleteBuffer(i[y.id]),delete i[y.id],delete r[y.id]}function p(){for(const v in i)s.deleteBuffer(i[v]);o=[],i={},r={}}return{bind:c,update:l,dispose:p}}class ly{constructor(t={}){const{canvas:e=Z0(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;const m=new Uint32Array(4),_=new Int32Array(4);let g=null,p=null;const v=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ne,this.toneMapping=Oi,this.toneMappingExposure=1;const x=this;let N=!1,w=0,C=0,I=null,T=-1,b=null;const L=new ae,z=new ae;let F=null;const G=new It(0);let q=0,K=e.width,Z=e.height,H=1,st=null,ot=null;const _t=new ae(0,0,K,Z),Rt=new ae(0,0,K,Z);let kt=!1;const Y=new mh;let Q=!1,St=!1;const it=new Vt,Pt=new Vt,Bt=new R,Lt=new ae,Xt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let tt=!1;function ht(){return I===null?H:1}let P=n;function lt(A,U){return e.getContext(A,U)}try{const A={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ih}`),e.addEventListener("webglcontextlost",nt,!1),e.addEventListener("webglcontextrestored",vt,!1),e.addEventListener("webglcontextcreationerror",bt,!1),P===null){const U="webgl2";if(P=lt(U,A),P===null)throw lt(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let et,ut,ct,Ct,mt,E,S,B,V,J,j,gt,at,xt,Ut,rt,At,Tt,Ht,Et,Qt,qt,ne,D;function ft(){et=new pv(P),et.init(),qt=new QM(P,et),ut=new cv(P,et,t,qt),ct=new $M(P,et),ut.reverseDepthBuffer&&d&&ct.buffers.depth.setReversed(!0),Ct=new _v(P),mt=new FM,E=new JM(P,et,ct,mt,ut,qt,Ct),S=new hv(x),B=new fv(x),V=new Tg(P),ne=new ov(P,V),J=new mv(P,V,Ct,ne),j=new vv(P,J,V,Ct),Ht=new xv(P,ut,E),rt=new lv(mt),gt=new DM(x,S,B,et,ut,ne,rt),at=new ay(x,mt),xt=new OM,Ut=new GM(et),Tt=new rv(x,S,B,ct,j,f,c),At=new YM(x,j,ut),D=new cy(P,Ct,ut,ct),Et=new av(P,et,Ct),Qt=new gv(P,et,Ct),Ct.programs=gt.programs,x.capabilities=ut,x.extensions=et,x.properties=mt,x.renderLists=xt,x.shadowMap=At,x.state=ct,x.info=Ct}ft();const $=new ry(x,P);this.xr=$,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const A=et.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=et.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(A){A!==void 0&&(H=A,this.setSize(K,Z,!1))},this.getSize=function(A){return A.set(K,Z)},this.setSize=function(A,U,W=!0){if($.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}K=A,Z=U,e.width=Math.floor(A*H),e.height=Math.floor(U*H),W===!0&&(e.style.width=A+"px",e.style.height=U+"px"),this.setViewport(0,0,A,U)},this.getDrawingBufferSize=function(A){return A.set(K*H,Z*H).floor()},this.setDrawingBufferSize=function(A,U,W){K=A,Z=U,H=W,e.width=Math.floor(A*W),e.height=Math.floor(U*W),this.setViewport(0,0,A,U)},this.getCurrentViewport=function(A){return A.copy(L)},this.getViewport=function(A){return A.copy(_t)},this.setViewport=function(A,U,W,X){A.isVector4?_t.set(A.x,A.y,A.z,A.w):_t.set(A,U,W,X),ct.viewport(L.copy(_t).multiplyScalar(H).round())},this.getScissor=function(A){return A.copy(Rt)},this.setScissor=function(A,U,W,X){A.isVector4?Rt.set(A.x,A.y,A.z,A.w):Rt.set(A,U,W,X),ct.scissor(z.copy(Rt).multiplyScalar(H).round())},this.getScissorTest=function(){return kt},this.setScissorTest=function(A){ct.setScissorTest(kt=A)},this.setOpaqueSort=function(A){st=A},this.setTransparentSort=function(A){ot=A},this.getClearColor=function(A){return A.copy(Tt.getClearColor())},this.setClearColor=function(){Tt.setClearColor.apply(Tt,arguments)},this.getClearAlpha=function(){return Tt.getClearAlpha()},this.setClearAlpha=function(){Tt.setClearAlpha.apply(Tt,arguments)},this.clear=function(A=!0,U=!0,W=!0){let X=0;if(A){let O=!1;if(I!==null){const dt=I.texture.format;O=dt===uh||dt===hh||dt===lh}if(O){const dt=I.texture.type,wt=dt===fi||dt===ss||dt===Fr||dt===Xs||dt===oh||dt===ah,Nt=Tt.getClearColor(),Dt=Tt.getClearAlpha(),Kt=Nt.r,jt=Nt.g,Ft=Nt.b;wt?(m[0]=Kt,m[1]=jt,m[2]=Ft,m[3]=Dt,P.clearBufferuiv(P.COLOR,0,m)):(_[0]=Kt,_[1]=jt,_[2]=Ft,_[3]=Dt,P.clearBufferiv(P.COLOR,0,_))}else X|=P.COLOR_BUFFER_BIT}U&&(X|=P.DEPTH_BUFFER_BIT),W&&(X|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",nt,!1),e.removeEventListener("webglcontextrestored",vt,!1),e.removeEventListener("webglcontextcreationerror",bt,!1),xt.dispose(),Ut.dispose(),mt.dispose(),S.dispose(),B.dispose(),j.dispose(),ne.dispose(),D.dispose(),gt.dispose(),$.dispose(),$.removeEventListener("sessionstart",ls),$.removeEventListener("sessionend",$h),ki.stop()};function nt(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),N=!0}function vt(){console.log("THREE.WebGLRenderer: Context Restored."),N=!1;const A=Ct.autoReset,U=At.enabled,W=At.autoUpdate,X=At.needsUpdate,O=At.type;ft(),Ct.autoReset=A,At.enabled=U,At.autoUpdate=W,At.needsUpdate=X,At.type=O}function bt(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Wt(A){const U=A.target;U.removeEventListener("dispose",Wt),me(U)}function me(A){Le(A),mt.remove(A)}function Le(A){const U=mt.get(A).programs;U!==void 0&&(U.forEach(function(W){gt.releaseProgram(W)}),A.isShaderMaterial&&gt.releaseShaderCache(A))}this.renderBufferDirect=function(A,U,W,X,O,dt){U===null&&(U=Xt);const wt=O.isMesh&&O.matrixWorld.determinant()<0,Nt=Gm(A,U,W,X,O);ct.setMaterial(X,wt);let Dt=W.index,Kt=1;if(X.wireframe===!0){if(Dt=J.getWireframeAttribute(W),Dt===void 0)return;Kt=2}const jt=W.drawRange,Ft=W.attributes.position;let se=jt.start*Kt,ge=(jt.start+jt.count)*Kt;dt!==null&&(se=Math.max(se,dt.start*Kt),ge=Math.min(ge,(dt.start+dt.count)*Kt)),Dt!==null?(se=Math.max(se,0),ge=Math.min(ge,Dt.count)):Ft!=null&&(se=Math.max(se,0),ge=Math.min(ge,Ft.count));const _e=ge-se;if(_e<0||_e===1/0)return;ne.setup(O,X,Nt,W,Dt);let je,ce=Et;if(Dt!==null&&(je=V.get(Dt),ce=Qt,ce.setIndex(je)),O.isMesh)X.wireframe===!0?(ct.setLineWidth(X.wireframeLinewidth*ht()),ce.setMode(P.LINES)):ce.setMode(P.TRIANGLES);else if(O.isLine){let Ot=X.linewidth;Ot===void 0&&(Ot=1),ct.setLineWidth(Ot*ht()),O.isLineSegments?ce.setMode(P.LINES):O.isLineLoop?ce.setMode(P.LINE_LOOP):ce.setMode(P.LINE_STRIP)}else O.isPoints?ce.setMode(P.POINTS):O.isSprite&&ce.setMode(P.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)ce.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(et.get("WEBGL_multi_draw"))ce.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const Ot=O._multiDrawStarts,Jn=O._multiDrawCounts,le=O._multiDrawCount,xn=Dt?V.get(Dt).bytesPerElement:1,hs=mt.get(X).currentProgram.getUniforms();for(let sn=0;sn<le;sn++)hs.setValue(P,"_gl_DrawID",sn),ce.render(Ot[sn]/xn,Jn[sn])}else if(O.isInstancedMesh)ce.renderInstances(se,_e,O.count);else if(W.isInstancedBufferGeometry){const Ot=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Jn=Math.min(W.instanceCount,Ot);ce.renderInstances(se,_e,Jn)}else ce.render(se,_e)};function ie(A,U,W){A.transparent===!0&&A.side===Be&&A.forceSinglePass===!1?(A.side=Xe,A.needsUpdate=!0,Qr(A,U,W),A.side=di,A.needsUpdate=!0,Qr(A,U,W),A.side=Be):Qr(A,U,W)}this.compile=function(A,U,W=null){W===null&&(W=A),p=Ut.get(W),p.init(U),y.push(p),W.traverseVisible(function(O){O.isLight&&O.layers.test(U.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),A!==W&&A.traverseVisible(function(O){O.isLight&&O.layers.test(U.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),p.setupLights();const X=new Set;return A.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const dt=O.material;if(dt)if(Array.isArray(dt))for(let wt=0;wt<dt.length;wt++){const Nt=dt[wt];ie(Nt,W,O),X.add(Nt)}else ie(dt,W,O),X.add(dt)}),y.pop(),p=null,X},this.compileAsync=function(A,U,W=null){const X=this.compile(A,U,W);return new Promise(O=>{function dt(){if(X.forEach(function(wt){mt.get(wt).currentProgram.isReady()&&X.delete(wt)}),X.size===0){O(A);return}setTimeout(dt,10)}et.get("KHR_parallel_shader_compile")!==null?dt():setTimeout(dt,10)})};let Ye=null;function _n(A){Ye&&Ye(A)}function ls(){ki.stop()}function $h(){ki.start()}const ki=new Op;ki.setAnimationLoop(_n),typeof self<"u"&&ki.setContext(self),this.setAnimationLoop=function(A){Ye=A,$.setAnimationLoop(A),A===null?ki.stop():ki.start()},$.addEventListener("sessionstart",ls),$.addEventListener("sessionend",$h),this.render=function(A,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),$.enabled===!0&&$.isPresenting===!0&&($.cameraAutoUpdate===!0&&$.updateCamera(U),U=$.getCamera()),A.isScene===!0&&A.onBeforeRender(x,A,U,I),p=Ut.get(A,y.length),p.init(U),y.push(p),Pt.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Y.setFromProjectionMatrix(Pt),St=this.localClippingEnabled,Q=rt.init(this.clippingPlanes,St),g=xt.get(A,v.length),g.init(),v.push(g),$.enabled===!0&&$.isPresenting===!0){const dt=x.xr.getDepthSensingMesh();dt!==null&&Ua(dt,U,-1/0,x.sortObjects)}Ua(A,U,0,x.sortObjects),g.finish(),x.sortObjects===!0&&g.sort(st,ot),tt=$.enabled===!1||$.isPresenting===!1||$.hasDepthSensing()===!1,tt&&Tt.addToRenderList(g,A),this.info.render.frame++,Q===!0&&rt.beginShadows();const W=p.state.shadowsArray;At.render(W,A,U),Q===!0&&rt.endShadows(),this.info.autoReset===!0&&this.info.reset();const X=g.opaque,O=g.transmissive;if(p.setupLights(),U.isArrayCamera){const dt=U.cameras;if(O.length>0)for(let wt=0,Nt=dt.length;wt<Nt;wt++){const Dt=dt[wt];Jh(X,O,A,Dt)}tt&&Tt.render(A);for(let wt=0,Nt=dt.length;wt<Nt;wt++){const Dt=dt[wt];Zh(g,A,Dt,Dt.viewport)}}else O.length>0&&Jh(X,O,A,U),tt&&Tt.render(A),Zh(g,A,U);I!==null&&(E.updateMultisampleRenderTarget(I),E.updateRenderTargetMipmap(I)),A.isScene===!0&&A.onAfterRender(x,A,U),ne.resetDefaultState(),T=-1,b=null,y.pop(),y.length>0?(p=y[y.length-1],Q===!0&&rt.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,v.pop(),v.length>0?g=v[v.length-1]:g=null};function Ua(A,U,W,X){if(A.visible===!1)return;if(A.layers.test(U.layers)){if(A.isGroup)W=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(U);else if(A.isLight)p.pushLight(A),A.castShadow&&p.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Y.intersectsSprite(A)){X&&Lt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Pt);const wt=j.update(A),Nt=A.material;Nt.visible&&g.push(A,wt,Nt,W,Lt.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Y.intersectsObject(A))){const wt=j.update(A),Nt=A.material;if(X&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Lt.copy(A.boundingSphere.center)):(wt.boundingSphere===null&&wt.computeBoundingSphere(),Lt.copy(wt.boundingSphere.center)),Lt.applyMatrix4(A.matrixWorld).applyMatrix4(Pt)),Array.isArray(Nt)){const Dt=wt.groups;for(let Kt=0,jt=Dt.length;Kt<jt;Kt++){const Ft=Dt[Kt],se=Nt[Ft.materialIndex];se&&se.visible&&g.push(A,wt,se,W,Lt.z,Ft)}}else Nt.visible&&g.push(A,wt,Nt,W,Lt.z,null)}}const dt=A.children;for(let wt=0,Nt=dt.length;wt<Nt;wt++)Ua(dt[wt],U,W,X)}function Zh(A,U,W,X){const O=A.opaque,dt=A.transmissive,wt=A.transparent;p.setupLightsView(W),Q===!0&&rt.setGlobalState(x.clippingPlanes,W),X&&ct.viewport(L.copy(X)),O.length>0&&Jr(O,U,W),dt.length>0&&Jr(dt,U,W),wt.length>0&&Jr(wt,U,W),ct.buffers.depth.setTest(!0),ct.buffers.depth.setMask(!0),ct.buffers.color.setMask(!0),ct.setPolygonOffset(!1)}function Jh(A,U,W,X){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[X.id]===void 0&&(p.state.transmissionRenderTarget[X.id]=new rs(1,1,{generateMipmaps:!0,type:et.has("EXT_color_buffer_half_float")||et.has("EXT_color_buffer_float")?Xr:fi,minFilter:Xn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ee.workingColorSpace}));const dt=p.state.transmissionRenderTarget[X.id],wt=X.viewport||L;dt.setSize(wt.z,wt.w);const Nt=x.getRenderTarget();x.setRenderTarget(dt),x.getClearColor(G),q=x.getClearAlpha(),q<1&&x.setClearColor(16777215,.5),x.clear(),tt&&Tt.render(W);const Dt=x.toneMapping;x.toneMapping=Oi;const Kt=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),p.setupLightsView(X),Q===!0&&rt.setGlobalState(x.clippingPlanes,X),Jr(A,W,X),E.updateMultisampleRenderTarget(dt),E.updateRenderTargetMipmap(dt),et.has("WEBGL_multisampled_render_to_texture")===!1){let jt=!1;for(let Ft=0,se=U.length;Ft<se;Ft++){const ge=U[Ft],_e=ge.object,je=ge.geometry,ce=ge.material,Ot=ge.group;if(ce.side===Be&&_e.layers.test(X.layers)){const Jn=ce.side;ce.side=Xe,ce.needsUpdate=!0,Qh(_e,W,X,je,ce,Ot),ce.side=Jn,ce.needsUpdate=!0,jt=!0}}jt===!0&&(E.updateMultisampleRenderTarget(dt),E.updateRenderTargetMipmap(dt))}x.setRenderTarget(Nt),x.setClearColor(G,q),Kt!==void 0&&(X.viewport=Kt),x.toneMapping=Dt}function Jr(A,U,W){const X=U.isScene===!0?U.overrideMaterial:null;for(let O=0,dt=A.length;O<dt;O++){const wt=A[O],Nt=wt.object,Dt=wt.geometry,Kt=X===null?wt.material:X,jt=wt.group;Nt.layers.test(W.layers)&&Qh(Nt,U,W,Dt,Kt,jt)}}function Qh(A,U,W,X,O,dt){A.onBeforeRender(x,U,W,X,O,dt),A.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),O.onBeforeRender(x,U,W,X,A,dt),O.transparent===!0&&O.side===Be&&O.forceSinglePass===!1?(O.side=Xe,O.needsUpdate=!0,x.renderBufferDirect(W,U,X,O,A,dt),O.side=di,O.needsUpdate=!0,x.renderBufferDirect(W,U,X,O,A,dt),O.side=Be):x.renderBufferDirect(W,U,X,O,A,dt),A.onAfterRender(x,U,W,X,O,dt)}function Qr(A,U,W){U.isScene!==!0&&(U=Xt);const X=mt.get(A),O=p.state.lights,dt=p.state.shadowsArray,wt=O.state.version,Nt=gt.getParameters(A,O.state,dt,U,W),Dt=gt.getProgramCacheKey(Nt);let Kt=X.programs;X.environment=A.isMeshStandardMaterial?U.environment:null,X.fog=U.fog,X.envMap=(A.isMeshStandardMaterial?B:S).get(A.envMap||X.environment),X.envMapRotation=X.environment!==null&&A.envMap===null?U.environmentRotation:A.envMapRotation,Kt===void 0&&(A.addEventListener("dispose",Wt),Kt=new Map,X.programs=Kt);let jt=Kt.get(Dt);if(jt!==void 0){if(X.currentProgram===jt&&X.lightsStateVersion===wt)return eu(A,Nt),jt}else Nt.uniforms=gt.getUniforms(A),A.onBeforeCompile(Nt,x),jt=gt.acquireProgram(Nt,Dt),Kt.set(Dt,jt),X.uniforms=Nt.uniforms;const Ft=X.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ft.clippingPlanes=rt.uniform),eu(A,Nt),X.needsLights=Xm(A),X.lightsStateVersion=wt,X.needsLights&&(Ft.ambientLightColor.value=O.state.ambient,Ft.lightProbe.value=O.state.probe,Ft.directionalLights.value=O.state.directional,Ft.directionalLightShadows.value=O.state.directionalShadow,Ft.spotLights.value=O.state.spot,Ft.spotLightShadows.value=O.state.spotShadow,Ft.rectAreaLights.value=O.state.rectArea,Ft.ltc_1.value=O.state.rectAreaLTC1,Ft.ltc_2.value=O.state.rectAreaLTC2,Ft.pointLights.value=O.state.point,Ft.pointLightShadows.value=O.state.pointShadow,Ft.hemisphereLights.value=O.state.hemi,Ft.directionalShadowMap.value=O.state.directionalShadowMap,Ft.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Ft.spotShadowMap.value=O.state.spotShadowMap,Ft.spotLightMatrix.value=O.state.spotLightMatrix,Ft.spotLightMap.value=O.state.spotLightMap,Ft.pointShadowMap.value=O.state.pointShadowMap,Ft.pointShadowMatrix.value=O.state.pointShadowMatrix),X.currentProgram=jt,X.uniformsList=null,jt}function tu(A){if(A.uniformsList===null){const U=A.currentProgram.getUniforms();A.uniformsList=ia.seqWithValue(U.seq,A.uniforms)}return A.uniformsList}function eu(A,U){const W=mt.get(A);W.outputColorSpace=U.outputColorSpace,W.batching=U.batching,W.batchingColor=U.batchingColor,W.instancing=U.instancing,W.instancingColor=U.instancingColor,W.instancingMorph=U.instancingMorph,W.skinning=U.skinning,W.morphTargets=U.morphTargets,W.morphNormals=U.morphNormals,W.morphColors=U.morphColors,W.morphTargetsCount=U.morphTargetsCount,W.numClippingPlanes=U.numClippingPlanes,W.numIntersection=U.numClipIntersection,W.vertexAlphas=U.vertexAlphas,W.vertexTangents=U.vertexTangents,W.toneMapping=U.toneMapping}function Gm(A,U,W,X,O){U.isScene!==!0&&(U=Xt),E.resetTextureUnits();const dt=U.fog,wt=X.isMeshStandardMaterial?U.environment:null,Nt=I===null?x.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:Ke,Dt=(X.isMeshStandardMaterial?B:S).get(X.envMap||wt),Kt=X.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,jt=!!W.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Ft=!!W.morphAttributes.position,se=!!W.morphAttributes.normal,ge=!!W.morphAttributes.color;let _e=Oi;X.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(_e=x.toneMapping);const je=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,ce=je!==void 0?je.length:0,Ot=mt.get(X),Jn=p.state.lights;if(Q===!0&&(St===!0||A!==b)){const ln=A===b&&X.id===T;rt.setState(X,A,ln)}let le=!1;X.version===Ot.__version?(Ot.needsLights&&Ot.lightsStateVersion!==Jn.state.version||Ot.outputColorSpace!==Nt||O.isBatchedMesh&&Ot.batching===!1||!O.isBatchedMesh&&Ot.batching===!0||O.isBatchedMesh&&Ot.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&Ot.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&Ot.instancing===!1||!O.isInstancedMesh&&Ot.instancing===!0||O.isSkinnedMesh&&Ot.skinning===!1||!O.isSkinnedMesh&&Ot.skinning===!0||O.isInstancedMesh&&Ot.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Ot.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Ot.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Ot.instancingMorph===!1&&O.morphTexture!==null||Ot.envMap!==Dt||X.fog===!0&&Ot.fog!==dt||Ot.numClippingPlanes!==void 0&&(Ot.numClippingPlanes!==rt.numPlanes||Ot.numIntersection!==rt.numIntersection)||Ot.vertexAlphas!==Kt||Ot.vertexTangents!==jt||Ot.morphTargets!==Ft||Ot.morphNormals!==se||Ot.morphColors!==ge||Ot.toneMapping!==_e||Ot.morphTargetsCount!==ce)&&(le=!0):(le=!0,Ot.__version=X.version);let xn=Ot.currentProgram;le===!0&&(xn=Qr(X,U,O));let hs=!1,sn=!1,sr=!1;const xe=xn.getUniforms(),Bn=Ot.uniforms;if(ct.useProgram(xn.program)&&(hs=!0,sn=!0,sr=!0),X.id!==T&&(T=X.id,sn=!0),hs||b!==A){ct.buffers.depth.getReversed()?(it.copy(A.projectionMatrix),Q0(it),tg(it),xe.setValue(P,"projectionMatrix",it)):xe.setValue(P,"projectionMatrix",A.projectionMatrix),xe.setValue(P,"viewMatrix",A.matrixWorldInverse);const gi=xe.map.cameraPosition;gi!==void 0&&gi.setValue(P,Bt.setFromMatrixPosition(A.matrixWorld)),ut.logarithmicDepthBuffer&&xe.setValue(P,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&xe.setValue(P,"isOrthographic",A.isOrthographicCamera===!0),b!==A&&(b=A,sn=!0,sr=!0)}if(O.isSkinnedMesh){xe.setOptional(P,O,"bindMatrix"),xe.setOptional(P,O,"bindMatrixInverse");const ln=O.skeleton;ln&&(ln.boneTexture===null&&ln.computeBoneTexture(),xe.setValue(P,"boneTexture",ln.boneTexture,E))}O.isBatchedMesh&&(xe.setOptional(P,O,"batchingTexture"),xe.setValue(P,"batchingTexture",O._matricesTexture,E),xe.setOptional(P,O,"batchingIdTexture"),xe.setValue(P,"batchingIdTexture",O._indirectTexture,E),xe.setOptional(P,O,"batchingColorTexture"),O._colorsTexture!==null&&xe.setValue(P,"batchingColorTexture",O._colorsTexture,E));const rr=W.morphAttributes;if((rr.position!==void 0||rr.normal!==void 0||rr.color!==void 0)&&Ht.update(O,W,xn),(sn||Ot.receiveShadow!==O.receiveShadow)&&(Ot.receiveShadow=O.receiveShadow,xe.setValue(P,"receiveShadow",O.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(Bn.envMap.value=Dt,Bn.flipEnvMap.value=Dt.isCubeTexture&&Dt.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&U.environment!==null&&(Bn.envMapIntensity.value=U.environmentIntensity),sn&&(xe.setValue(P,"toneMappingExposure",x.toneMappingExposure),Ot.needsLights&&Wm(Bn,sr),dt&&X.fog===!0&&at.refreshFogUniforms(Bn,dt),at.refreshMaterialUniforms(Bn,X,H,Z,p.state.transmissionRenderTarget[A.id]),ia.upload(P,tu(Ot),Bn,E)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(ia.upload(P,tu(Ot),Bn,E),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&xe.setValue(P,"center",O.center),xe.setValue(P,"modelViewMatrix",O.modelViewMatrix),xe.setValue(P,"normalMatrix",O.normalMatrix),xe.setValue(P,"modelMatrix",O.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const ln=X.uniformsGroups;for(let gi=0,_i=ln.length;gi<_i;gi++){const nu=ln[gi];D.update(nu,xn),D.bind(nu,xn)}}return xn}function Wm(A,U){A.ambientLightColor.needsUpdate=U,A.lightProbe.needsUpdate=U,A.directionalLights.needsUpdate=U,A.directionalLightShadows.needsUpdate=U,A.pointLights.needsUpdate=U,A.pointLightShadows.needsUpdate=U,A.spotLights.needsUpdate=U,A.spotLightShadows.needsUpdate=U,A.rectAreaLights.needsUpdate=U,A.hemisphereLights.needsUpdate=U}function Xm(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(A,U,W){mt.get(A.texture).__webglTexture=U,mt.get(A.depthTexture).__webglTexture=W;const X=mt.get(A);X.__hasExternalTextures=!0,X.__autoAllocateDepthBuffer=W===void 0,X.__autoAllocateDepthBuffer||et.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,U){const W=mt.get(A);W.__webglFramebuffer=U,W.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(A,U=0,W=0){I=A,w=U,C=W;let X=!0,O=null,dt=!1,wt=!1;if(A){const Dt=mt.get(A);if(Dt.__useDefaultFramebuffer!==void 0)ct.bindFramebuffer(P.FRAMEBUFFER,null),X=!1;else if(Dt.__webglFramebuffer===void 0)E.setupRenderTarget(A);else if(Dt.__hasExternalTextures)E.rebindTextures(A,mt.get(A.texture).__webglTexture,mt.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Ft=A.depthTexture;if(Dt.__boundDepthTexture!==Ft){if(Ft!==null&&mt.has(Ft)&&(A.width!==Ft.image.width||A.height!==Ft.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");E.setupDepthRenderbuffer(A)}}const Kt=A.texture;(Kt.isData3DTexture||Kt.isDataArrayTexture||Kt.isCompressedArrayTexture)&&(wt=!0);const jt=mt.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(jt[U])?O=jt[U][W]:O=jt[U],dt=!0):A.samples>0&&E.useMultisampledRTT(A)===!1?O=mt.get(A).__webglMultisampledFramebuffer:Array.isArray(jt)?O=jt[W]:O=jt,L.copy(A.viewport),z.copy(A.scissor),F=A.scissorTest}else L.copy(_t).multiplyScalar(H).floor(),z.copy(Rt).multiplyScalar(H).floor(),F=kt;if(ct.bindFramebuffer(P.FRAMEBUFFER,O)&&X&&ct.drawBuffers(A,O),ct.viewport(L),ct.scissor(z),ct.setScissorTest(F),dt){const Dt=mt.get(A.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+U,Dt.__webglTexture,W)}else if(wt){const Dt=mt.get(A.texture),Kt=U||0;P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,Dt.__webglTexture,W||0,Kt)}T=-1},this.readRenderTargetPixels=function(A,U,W,X,O,dt,wt){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Nt=mt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&wt!==void 0&&(Nt=Nt[wt]),Nt){ct.bindFramebuffer(P.FRAMEBUFFER,Nt);try{const Dt=A.texture,Kt=Dt.format,jt=Dt.type;if(!ut.textureFormatReadable(Kt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ut.textureTypeReadable(jt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=A.width-X&&W>=0&&W<=A.height-O&&P.readPixels(U,W,X,O,qt.convert(Kt),qt.convert(jt),dt)}finally{const Dt=I!==null?mt.get(I).__webglFramebuffer:null;ct.bindFramebuffer(P.FRAMEBUFFER,Dt)}}},this.readRenderTargetPixelsAsync=async function(A,U,W,X,O,dt,wt){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Nt=mt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&wt!==void 0&&(Nt=Nt[wt]),Nt){const Dt=A.texture,Kt=Dt.format,jt=Dt.type;if(!ut.textureFormatReadable(Kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ut.textureTypeReadable(jt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=A.width-X&&W>=0&&W<=A.height-O){ct.bindFramebuffer(P.FRAMEBUFFER,Nt);const Ft=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,Ft),P.bufferData(P.PIXEL_PACK_BUFFER,dt.byteLength,P.STREAM_READ),P.readPixels(U,W,X,O,qt.convert(Kt),qt.convert(jt),0);const se=I!==null?mt.get(I).__webglFramebuffer:null;ct.bindFramebuffer(P.FRAMEBUFFER,se);const ge=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await J0(P,ge,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,Ft),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,dt),P.deleteBuffer(Ft),P.deleteSync(ge),dt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,U=null,W=0){A.isTexture!==!0&&(yr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,A=arguments[1]);const X=Math.pow(2,-W),O=Math.floor(A.image.width*X),dt=Math.floor(A.image.height*X),wt=U!==null?U.x:0,Nt=U!==null?U.y:0;E.setTexture2D(A,0),P.copyTexSubImage2D(P.TEXTURE_2D,W,0,0,wt,Nt,O,dt),ct.unbindTexture()},this.copyTextureToTexture=function(A,U,W=null,X=null,O=0){A.isTexture!==!0&&(yr("WebGLRenderer: copyTextureToTexture function signature has changed."),X=arguments[0]||null,A=arguments[1],U=arguments[2],O=arguments[3]||0,W=null);let dt,wt,Nt,Dt,Kt,jt,Ft,se,ge;const _e=A.isCompressedTexture?A.mipmaps[O]:A.image;W!==null?(dt=W.max.x-W.min.x,wt=W.max.y-W.min.y,Nt=W.isBox3?W.max.z-W.min.z:1,Dt=W.min.x,Kt=W.min.y,jt=W.isBox3?W.min.z:0):(dt=_e.width,wt=_e.height,Nt=_e.depth||1,Dt=0,Kt=0,jt=0),X!==null?(Ft=X.x,se=X.y,ge=X.z):(Ft=0,se=0,ge=0);const je=qt.convert(U.format),ce=qt.convert(U.type);let Ot;U.isData3DTexture?(E.setTexture3D(U,0),Ot=P.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(E.setTexture2DArray(U,0),Ot=P.TEXTURE_2D_ARRAY):(E.setTexture2D(U,0),Ot=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,U.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,U.unpackAlignment);const Jn=P.getParameter(P.UNPACK_ROW_LENGTH),le=P.getParameter(P.UNPACK_IMAGE_HEIGHT),xn=P.getParameter(P.UNPACK_SKIP_PIXELS),hs=P.getParameter(P.UNPACK_SKIP_ROWS),sn=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,_e.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,_e.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Dt),P.pixelStorei(P.UNPACK_SKIP_ROWS,Kt),P.pixelStorei(P.UNPACK_SKIP_IMAGES,jt);const sr=A.isDataArrayTexture||A.isData3DTexture,xe=U.isDataArrayTexture||U.isData3DTexture;if(A.isRenderTargetTexture||A.isDepthTexture){const Bn=mt.get(A),rr=mt.get(U),ln=mt.get(Bn.__renderTarget),gi=mt.get(rr.__renderTarget);ct.bindFramebuffer(P.READ_FRAMEBUFFER,ln.__webglFramebuffer),ct.bindFramebuffer(P.DRAW_FRAMEBUFFER,gi.__webglFramebuffer);for(let _i=0;_i<Nt;_i++)sr&&P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,mt.get(A).__webglTexture,O,jt+_i),A.isDepthTexture?(xe&&P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,mt.get(U).__webglTexture,O,ge+_i),P.blitFramebuffer(Dt,Kt,dt,wt,Ft,se,dt,wt,P.DEPTH_BUFFER_BIT,P.NEAREST)):xe?P.copyTexSubImage3D(Ot,O,Ft,se,ge+_i,Dt,Kt,dt,wt):P.copyTexSubImage2D(Ot,O,Ft,se,ge+_i,Dt,Kt,dt,wt);ct.bindFramebuffer(P.READ_FRAMEBUFFER,null),ct.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else xe?A.isDataTexture||A.isData3DTexture?P.texSubImage3D(Ot,O,Ft,se,ge,dt,wt,Nt,je,ce,_e.data):U.isCompressedArrayTexture?P.compressedTexSubImage3D(Ot,O,Ft,se,ge,dt,wt,Nt,je,_e.data):P.texSubImage3D(Ot,O,Ft,se,ge,dt,wt,Nt,je,ce,_e):A.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,O,Ft,se,dt,wt,je,ce,_e.data):A.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,O,Ft,se,_e.width,_e.height,je,_e.data):P.texSubImage2D(P.TEXTURE_2D,O,Ft,se,dt,wt,je,ce,_e);P.pixelStorei(P.UNPACK_ROW_LENGTH,Jn),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,le),P.pixelStorei(P.UNPACK_SKIP_PIXELS,xn),P.pixelStorei(P.UNPACK_SKIP_ROWS,hs),P.pixelStorei(P.UNPACK_SKIP_IMAGES,sn),O===0&&U.generateMipmaps&&P.generateMipmap(Ot),ct.unbindTexture()},this.copyTextureToTexture3D=function(A,U,W=null,X=null,O=0){return A.isTexture!==!0&&(yr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),W=arguments[0]||null,X=arguments[1]||null,A=arguments[2],U=arguments[3],O=arguments[4]||0),yr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,U,W,X,O)},this.initRenderTarget=function(A){mt.get(A).__webglFramebuffer===void 0&&E.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?E.setTextureCube(A,0):A.isData3DTexture?E.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?E.setTexture2DArray(A,0):E.setTexture2D(A,0),ct.unbindTexture()},this.resetState=function(){w=0,C=0,I=null,ct.reset(),ne.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return li}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=ee._getDrawingBufferColorSpace(t),e.unpackColorSpace=ee._getUnpackColorSpace()}}class xh{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new It(t),this.near=e,this.far=n}clone(){return new xh(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class hy extends Me{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new On,this.environmentIntensity=1,this.environmentRotation=new On,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class uy{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Fl,this.updateRanges=[],this.version=0,this.uuid=gn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,r=this.stride;i<r;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=gn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=gn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const ke=new R;class vh{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)ke.fromBufferAttribute(this,e),ke.applyMatrix4(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ke.fromBufferAttribute(this,e),ke.applyNormalMatrix(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ke.fromBufferAttribute(this,e),ke.transformDirection(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Cn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ue(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=ue(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ue(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ue(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ue(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Cn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Cn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Cn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Cn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=ue(e,this.array),n=ue(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=ue(e,this.array),n=ue(n,this.array),i=ue(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ue(e,this.array),n=ue(n,this.array),i=ue(i,this.array),r=ue(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return new Yt(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new vh(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const rd=new R,od=new ae,ad=new ae,dy=new R,cd=new Vt,yo=new R,uc=new Yn,ld=new Vt,dc=new qr;class Gp extends oe{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=au,this.bindMatrix=new Vt,this.bindMatrixInverse=new Vt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const t=this.geometry;this.boundingBox===null&&(this.boundingBox=new mi),this.boundingBox.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,yo),this.boundingBox.expandByPoint(yo)}computeBoundingSphere(){const t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Yn),this.boundingSphere.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,yo),this.boundingSphere.expandByPoint(yo)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),uc.copy(this.boundingSphere),uc.applyMatrix4(i),t.ray.intersectsSphere(uc)!==!1&&(ld.copy(i).invert(),dc.copy(t.ray).applyMatrix4(ld),!(this.boundingBox!==null&&dc.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,dc)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const t=new ae,e=this.geometry.attributes.skinWeight;for(let n=0,i=e.count;n<i;n++){t.fromBufferAttribute(e,n);const r=1/t.manhattanLength();r!==1/0?t.multiplyScalar(r):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===au?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===pp?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){const n=this.skeleton,i=this.geometry;od.fromBufferAttribute(i.attributes.skinIndex,t),ad.fromBufferAttribute(i.attributes.skinWeight,t),rd.copy(e).applyMatrix4(this.bindMatrix),e.set(0,0,0);for(let r=0;r<4;r++){const o=ad.getComponent(r);if(o!==0){const a=od.getComponent(r);cd.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),e.addScaledVector(dy.copy(rd).applyMatrix4(cd),o)}}return e.applyMatrix4(this.bindMatrixInverse)}}class Wp extends Me{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Xp extends Re{constructor(t=null,e=1,n=1,i,r,o,a,c,l=qe,h=qe,u,d){super(null,o,a,c,l,h,i,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const hd=new Vt,fy=new Vt;class Ea{constructor(t=[],e=[]){this.uuid=gn(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Vt)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){const n=new Vt;this.bones[t]&&n.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&n.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const t=this.bones,e=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=t.length;r<o;r++){const a=t[r]?t[r].matrixWorld:fy;hd.multiplyMatrices(a,e[r]),hd.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Ea(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);const e=new Float32Array(t*t*4);e.set(this.boneMatrices);const n=new Xp(e,t,t,mn,Nn);return n.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=n,this}getBoneByName(t){for(let e=0,n=this.bones.length;e<n;e++){const i=this.bones[e];if(i.name===t)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let n=0,i=t.bones.length;n<i;n++){const r=t.bones[n];let o=e[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new Wp),this.bones.push(o),this.boneInverses.push(new Vt().fromArray(t.boneInverses[n]))}return this.init(),this}toJSON(){const t={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;const e=this.bones,n=this.boneInverses;for(let i=0,r=e.length;i<r;i++){const o=e[i];t.bones.push(o.uuid);const a=n[i];t.boneInverses.push(a.toArray())}return t}}class Ol extends Yt{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Es=new Vt,ud=new Vt,bo=[],dd=new mi,py=new Vt,hr=new oe,ur=new Yn;class my extends oe{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Ol(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,py)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new mi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Es),dd.copy(t.boundingBox).applyMatrix4(Es),this.boundingBox.union(dd)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Yn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Es),ur.copy(t.boundingSphere).applyMatrix4(Es),this.boundingSphere.union(ur)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(t,e){const n=this.matrixWorld,i=this.count;if(hr.geometry=this.geometry,hr.material=this.material,hr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ur.copy(this.boundingSphere),ur.applyMatrix4(n),t.ray.intersectsSphere(ur)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Es),ud.multiplyMatrices(n,Es),hr.matrixWorld=ud,hr.raycast(t,bo);for(let o=0,a=bo.length;o<a;o++){const c=bo[o];c.instanceId=r,c.object=this,e.push(c)}bo.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Ol(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Xp(new Float32Array(i*this.count),i,this.count,ch,Nn));const r=this.morphTexture.source.data.data;let o=0;for(let l=0;l<n.length;l++)o+=n[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=i*t;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class qp extends Fn{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new It(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const fa=new R,pa=new R,fd=new Vt,dr=new qr,So=new Yn,fc=new R,pd=new R;class Mh extends Me{constructor(t=new be,e=new qp){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,r=e.count;i<r;i++)fa.fromBufferAttribute(e,i-1),pa.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=fa.distanceTo(pa);t.setAttribute("lineDistance",new Ee(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),So.copy(n.boundingSphere),So.applyMatrix4(i),So.radius+=r,t.ray.intersectsSphere(So)===!1)return;fd.copy(i).invert(),dr.copy(t.ray).applyMatrix4(fd);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const f=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let _=f,g=m-1;_<g;_+=l){const p=h.getX(_),v=h.getX(_+1),y=To(this,t,dr,c,p,v);y&&e.push(y)}if(this.isLineLoop){const _=h.getX(m-1),g=h.getX(f),p=To(this,t,dr,c,_,g);p&&e.push(p)}}else{const f=Math.max(0,o.start),m=Math.min(d.count,o.start+o.count);for(let _=f,g=m-1;_<g;_+=l){const p=To(this,t,dr,c,_,_+1);p&&e.push(p)}if(this.isLineLoop){const _=To(this,t,dr,c,m-1,f);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function To(s,t,e,n,i,r){const o=s.geometry.attributes.position;if(fa.fromBufferAttribute(o,i),pa.fromBufferAttribute(o,r),e.distanceSqToSegment(fa,pa,fc,pd)>n)return;fc.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(fc);if(!(c<t.near||c>t.far))return{distance:c,point:pd.clone().applyMatrix4(s.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:s}}const md=new R,gd=new R;class gy extends Mh{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let i=0,r=e.count;i<r;i+=2)md.fromBufferAttribute(e,i),gd.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+md.distanceTo(gd);t.setAttribute("lineDistance",new Ee(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class _y extends Mh{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}}class Yr extends Fn{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new It(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const _d=new Vt,Bl=new qr,Eo=new Yn,Ao=new R;class Aa extends Me{constructor(t=new be,e=new Yr){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Eo.copy(n.boundingSphere),Eo.applyMatrix4(i),Eo.radius+=r,t.ray.intersectsSphere(Eo)===!1)return;_d.copy(i).invert(),Bl.copy(t.ray).applyMatrix4(_d);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){const d=Math.max(0,o.start),f=Math.min(l.count,o.start+o.count);for(let m=d,_=f;m<_;m++){const g=l.getX(m);Ao.fromBufferAttribute(u,g),xd(Ao,g,c,i,t,e,this)}}else{const d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let m=d,_=f;m<_;m++)Ao.fromBufferAttribute(u,m),xd(Ao,m,c,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function xd(s,t,e,n,i,r,o){const a=Bl.distanceSqToPoint(s);if(a<e){const c=new R;Bl.closestPointToPoint(s,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class wa extends Re{constructor(t,e,n,i,r,o,a,c,l){super(t,e,n,i,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class jn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let i=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(i=Math.floor(a+(c-a)/2),l=n[i]-o,l<0)a=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===o)return i/(r-1);const h=n[i],d=n[i+1]-h,f=(o-h)/d;return(i+f)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);const o=this.getPoint(i),a=this.getPoint(r),c=e||(o.isVector2?new pt:new R);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new R,i=[],r=[],o=[],a=new R,c=new Vt;for(let f=0;f<=t;f++){const m=f/t;i[f]=this.getTangentAt(m,new R)}r[0]=new R,o[0]=new R;let l=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),d<=l&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(i[f-1],i[f]),a.length()>Number.EPSILON){a.normalize();const m=Math.acos(we(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(a,m))}o[f].crossVectors(i[f],r[f])}if(e===!0){let f=Math.acos(we(r[0].dot(r[t]),-1,1));f/=t,i[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let m=1;m<=t;m++)r[m].applyMatrix4(c.makeRotationAxis(i[m],f*m)),o[m].crossVectors(i[m],r[m])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class yh extends jn{constructor(t=0,e=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new pt){const n=e,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);const a=this.aStartAngle+t*r;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*h-f*u+this.aX,l=d*u+f*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class xy extends yh{constructor(t,e,n,i,r,o){super(t,e,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function bh(){let s=0,t=0,e=0,n=0;function i(r,o,a,c){s=r,t=a,e=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){i(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,u){let d=(o-r)/l-(a-r)/(l+h)+(a-o)/h,f=(a-o)/h-(c-o)/(h+u)+(c-a)/u;d*=h,f*=h,i(o,a,d,f)},calc:function(r){const o=r*r,a=o*r;return s+t*r+e*o+n*a}}}const wo=new R,pc=new bh,mc=new bh,gc=new bh;class vy extends jn{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new R){const n=e,i=this.points,r=i.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=i[(a-1)%r]:(wo.subVectors(i[0],i[1]).add(i[0]),l=wo);const u=i[a%r],d=i[(a+1)%r];if(this.closed||a+2<r?h=i[(a+2)%r]:(wo.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=wo),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let m=Math.pow(l.distanceToSquared(u),f),_=Math.pow(u.distanceToSquared(d),f),g=Math.pow(d.distanceToSquared(h),f);_<1e-4&&(_=1),m<1e-4&&(m=_),g<1e-4&&(g=_),pc.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,m,_,g),mc.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,m,_,g),gc.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,m,_,g)}else this.curveType==="catmullrom"&&(pc.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),mc.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),gc.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return n.set(pc.calc(c),mc.calc(c),gc.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new R().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function vd(s,t,e,n,i){const r=(n-t)*.5,o=(i-e)*.5,a=s*s,c=s*a;return(2*e-2*n+r+o)*c+(-3*e+3*n-2*r-o)*a+r*s+e}function My(s,t){const e=1-s;return e*e*t}function yy(s,t){return 2*(1-s)*s*t}function by(s,t){return s*s*t}function Ar(s,t,e,n){return My(s,t)+yy(s,e)+by(s,n)}function Sy(s,t){const e=1-s;return e*e*e*t}function Ty(s,t){const e=1-s;return 3*e*e*s*t}function Ey(s,t){return 3*(1-s)*s*s*t}function Ay(s,t){return s*s*s*t}function wr(s,t,e,n,i){return Sy(s,t)+Ty(s,e)+Ey(s,n)+Ay(s,i)}class Kp extends jn{constructor(t=new pt,e=new pt,n=new pt,i=new pt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new pt){const n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(wr(t,i.x,r.x,o.x,a.x),wr(t,i.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class wy extends jn{constructor(t=new R,e=new R,n=new R,i=new R){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new R){const n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(wr(t,i.x,r.x,o.x,a.x),wr(t,i.y,r.y,o.y,a.y),wr(t,i.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Yp extends jn{constructor(t=new pt,e=new pt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new pt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new pt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Ry extends jn{constructor(t=new R,e=new R){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new R){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new R){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class jp extends jn{constructor(t=new pt,e=new pt,n=new pt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new pt){const n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(Ar(t,i.x,r.x,o.x),Ar(t,i.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Cy extends jn{constructor(t=new R,e=new R,n=new R){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new R){const n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(Ar(t,i.x,r.x,o.x),Ar(t,i.y,r.y,o.y),Ar(t,i.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class $p extends jn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new pt){const n=e,i=this.points,r=(i.length-1)*t,o=Math.floor(r),a=r-o,c=i[o===0?o:o-1],l=i[o],h=i[o>i.length-2?i.length-1:o+1],u=i[o>i.length-3?i.length-1:o+2];return n.set(vd(a,c.x,l.x,h.x,u.x),vd(a,c.y,l.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new pt().fromArray(i))}return this}}var kl=Object.freeze({__proto__:null,ArcCurve:xy,CatmullRomCurve3:vy,CubicBezierCurve:Kp,CubicBezierCurve3:wy,EllipseCurve:yh,LineCurve:Yp,LineCurve3:Ry,QuadraticBezierCurve:jp,QuadraticBezierCurve3:Cy,SplineCurve:$p});class Py extends jn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new kl[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),i=this.getCurveLengths();let r=0;for(;r<i.length;){if(i[r]>=n){const o=i[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const o=r[i],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){const h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(new kl[i.type]().fromJSON(i))}return this}}class Hl extends Py{constructor(t){super(),this.type="Path",this.currentPoint=new pt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Yp(this.currentPoint.clone(),new pt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){const r=new jp(this.currentPoint.clone(),new pt(t,e),new pt(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,r,o){const a=new Kp(this.currentPoint.clone(),new pt(t,e),new pt(n,i),new pt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new $p(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,r,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,i,r,o),this}absarc(t,e,n,i,r,o){return this.absellipse(t,e,n,n,i,r,o),this}ellipse(t,e,n,i,r,o,a,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,i,r,o,a,c),this}absellipse(t,e,n,i,r,o,a,c){const l=new yh(t,e,n,i,r,o,a,c);if(this.curves.length>0){const u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Sh extends be{constructor(t=[new pt(0,-.5),new pt(.5,0),new pt(0,.5)],e=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:i},e=Math.floor(e),i=we(i,0,Math.PI*2);const r=[],o=[],a=[],c=[],l=[],h=1/e,u=new R,d=new pt,f=new R,m=new R,_=new R;let g=0,p=0;for(let v=0;v<=t.length-1;v++)switch(v){case 0:g=t[v+1].x-t[v].x,p=t[v+1].y-t[v].y,f.x=p*1,f.y=-g,f.z=p*0,_.copy(f),f.normalize(),c.push(f.x,f.y,f.z);break;case t.length-1:c.push(_.x,_.y,_.z);break;default:g=t[v+1].x-t[v].x,p=t[v+1].y-t[v].y,f.x=p*1,f.y=-g,f.z=p*0,m.copy(f),f.x+=_.x,f.y+=_.y,f.z+=_.z,f.normalize(),c.push(f.x,f.y,f.z),_.copy(m)}for(let v=0;v<=e;v++){const y=n+v*h*i,x=Math.sin(y),N=Math.cos(y);for(let w=0;w<=t.length-1;w++){u.x=t[w].x*x,u.y=t[w].y,u.z=t[w].x*N,o.push(u.x,u.y,u.z),d.x=v/e,d.y=w/(t.length-1),a.push(d.x,d.y);const C=c[3*w+0]*x,I=c[3*w+1],T=c[3*w+0]*N;l.push(C,I,T)}}for(let v=0;v<e;v++)for(let y=0;y<t.length-1;y++){const x=y+v*t.length,N=x,w=x+t.length,C=x+t.length+1,I=x+1;r.push(N,w,I),r.push(C,I,w)}this.setIndex(r),this.setAttribute("position",new Ee(o,3)),this.setAttribute("uv",new Ee(a,2)),this.setAttribute("normal",new Ee(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Sh(t.points,t.segments,t.phiStart,t.phiLength)}}class Th extends Sh{constructor(t=1,e=1,n=4,i=8){const r=new Hl;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),i),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:i}}static fromJSON(t){return new Th(t.radius,t.length,t.capSegments,t.radialSegments)}}class Eh extends be{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};const r=[],o=[];a(i),l(n),h(),this.setAttribute("position",new Ee(r,3)),this.setAttribute("normal",new Ee(r.slice(),3)),this.setAttribute("uv",new Ee(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(v){const y=new R,x=new R,N=new R;for(let w=0;w<e.length;w+=3)f(e[w+0],y),f(e[w+1],x),f(e[w+2],N),c(y,x,N,v)}function c(v,y,x,N){const w=N+1,C=[];for(let I=0;I<=w;I++){C[I]=[];const T=v.clone().lerp(x,I/w),b=y.clone().lerp(x,I/w),L=w-I;for(let z=0;z<=L;z++)z===0&&I===w?C[I][z]=T:C[I][z]=T.clone().lerp(b,z/L)}for(let I=0;I<w;I++)for(let T=0;T<2*(w-I)-1;T++){const b=Math.floor(T/2);T%2===0?(d(C[I][b+1]),d(C[I+1][b]),d(C[I][b])):(d(C[I][b+1]),d(C[I+1][b+1]),d(C[I+1][b]))}}function l(v){const y=new R;for(let x=0;x<r.length;x+=3)y.x=r[x+0],y.y=r[x+1],y.z=r[x+2],y.normalize().multiplyScalar(v),r[x+0]=y.x,r[x+1]=y.y,r[x+2]=y.z}function h(){const v=new R;for(let y=0;y<r.length;y+=3){v.x=r[y+0],v.y=r[y+1],v.z=r[y+2];const x=g(v)/2/Math.PI+.5,N=p(v)/Math.PI+.5;o.push(x,1-N)}m(),u()}function u(){for(let v=0;v<o.length;v+=6){const y=o[v+0],x=o[v+2],N=o[v+4],w=Math.max(y,x,N),C=Math.min(y,x,N);w>.9&&C<.1&&(y<.2&&(o[v+0]+=1),x<.2&&(o[v+2]+=1),N<.2&&(o[v+4]+=1))}}function d(v){r.push(v.x,v.y,v.z)}function f(v,y){const x=v*3;y.x=t[x+0],y.y=t[x+1],y.z=t[x+2]}function m(){const v=new R,y=new R,x=new R,N=new R,w=new pt,C=new pt,I=new pt;for(let T=0,b=0;T<r.length;T+=9,b+=6){v.set(r[T+0],r[T+1],r[T+2]),y.set(r[T+3],r[T+4],r[T+5]),x.set(r[T+6],r[T+7],r[T+8]),w.set(o[b+0],o[b+1]),C.set(o[b+2],o[b+3]),I.set(o[b+4],o[b+5]),N.copy(v).add(y).add(x).divideScalar(3);const L=g(N);_(w,b+0,v,L),_(C,b+2,y,L),_(I,b+4,x,L)}}function _(v,y,x,N){N<0&&v.x===1&&(o[y]=v.x-1),x.x===0&&x.z===0&&(o[y]=N/2/Math.PI+.5)}function g(v){return Math.atan2(v.z,-v.x)}function p(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Eh(t.vertices,t.indices,t.radius,t.details)}}class Zp extends Hl{constructor(t){super(t),this.uuid=gn(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(new Hl().fromJSON(i))}return this}}const Ly={triangulate:function(s,t,e=2){const n=t&&t.length,i=n?t[0]*e:s.length;let r=Jp(s,0,i,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,c,l,h,u,d,f;if(n&&(r=Uy(s,t,r,e)),s.length>80*e){a=l=s[0],c=h=s[1];for(let m=e;m<i;m+=e)u=s[m],d=s[m+1],u<a&&(a=u),d<c&&(c=d),u>l&&(l=u),d>h&&(h=d);f=Math.max(l-a,h-c),f=f!==0?32767/f:0}return kr(r,o,e,a,c,f,0),o}};function Jp(s,t,e,n,i){let r,o;if(i===Ky(s,t,e,n)>0)for(r=t;r<e;r+=n)o=Md(r,s[r],s[r+1],o);else for(r=e-n;r>=t;r-=n)o=Md(r,s[r],s[r+1],o);return o&&Ra(o,o.next)&&(zr(o),o=o.next),o}function as(s,t){if(!s)return s;t||(t=s);let e=s,n;do if(n=!1,!e.steiner&&(Ra(e,e.next)||ye(e.prev,e,e.next)===0)){if(zr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function kr(s,t,e,n,i,r,o){if(!s)return;!o&&r&&zy(s,n,i,r);let a=s,c,l;for(;s.prev!==s.next;){if(c=s.prev,l=s.next,r?Ny(s,n,i,r):Iy(s)){t.push(c.i/e|0),t.push(s.i/e|0),t.push(l.i/e|0),zr(s),s=l.next,a=l.next;continue}if(s=l,s===a){o?o===1?(s=Dy(as(s),t,e),kr(s,t,e,n,i,r,2)):o===2&&Fy(s,t,e,n,i,r):kr(as(s),t,e,n,i,r,1);break}}}function Iy(s){const t=s.prev,e=s,n=s.next;if(ye(t,e,n)>=0)return!1;const i=t.x,r=e.x,o=n.x,a=t.y,c=e.y,l=n.y,h=i<r?i<o?i:o:r<o?r:o,u=a<c?a<l?a:l:c<l?c:l,d=i>r?i>o?i:o:r>o?r:o,f=a>c?a>l?a:l:c>l?c:l;let m=n.next;for(;m!==t;){if(m.x>=h&&m.x<=d&&m.y>=u&&m.y<=f&&Ls(i,a,r,c,o,l,m.x,m.y)&&ye(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function Ny(s,t,e,n){const i=s.prev,r=s,o=s.next;if(ye(i,r,o)>=0)return!1;const a=i.x,c=r.x,l=o.x,h=i.y,u=r.y,d=o.y,f=a<c?a<l?a:l:c<l?c:l,m=h<u?h<d?h:d:u<d?u:d,_=a>c?a>l?a:l:c>l?c:l,g=h>u?h>d?h:d:u>d?u:d,p=zl(f,m,t,e,n),v=zl(_,g,t,e,n);let y=s.prevZ,x=s.nextZ;for(;y&&y.z>=p&&x&&x.z<=v;){if(y.x>=f&&y.x<=_&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&Ls(a,h,c,u,l,d,y.x,y.y)&&ye(y.prev,y,y.next)>=0||(y=y.prevZ,x.x>=f&&x.x<=_&&x.y>=m&&x.y<=g&&x!==i&&x!==o&&Ls(a,h,c,u,l,d,x.x,x.y)&&ye(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;y&&y.z>=p;){if(y.x>=f&&y.x<=_&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&Ls(a,h,c,u,l,d,y.x,y.y)&&ye(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;x&&x.z<=v;){if(x.x>=f&&x.x<=_&&x.y>=m&&x.y<=g&&x!==i&&x!==o&&Ls(a,h,c,u,l,d,x.x,x.y)&&ye(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function Dy(s,t,e){let n=s;do{const i=n.prev,r=n.next.next;!Ra(i,r)&&Qp(i,n,n.next,r)&&Hr(i,r)&&Hr(r,i)&&(t.push(i.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),zr(n),zr(n.next),n=s=r),n=n.next}while(n!==s);return as(n)}function Fy(s,t,e,n,i,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Wy(o,a)){let c=tm(o,a);o=as(o,o.next),c=as(c,c.next),kr(o,t,e,n,i,r,0),kr(c,t,e,n,i,r,0);return}a=a.next}o=o.next}while(o!==s)}function Uy(s,t,e,n){const i=[];let r,o,a,c,l;for(r=0,o=t.length;r<o;r++)a=t[r]*n,c=r<o-1?t[r+1]*n:s.length,l=Jp(s,a,c,n,!1),l===l.next&&(l.steiner=!0),i.push(Gy(l));for(i.sort(Oy),r=0;r<i.length;r++)e=By(i[r],e);return e}function Oy(s,t){return s.x-t.x}function By(s,t){const e=ky(s,t);if(!e)return t;const n=tm(e,s);return as(n,n.next),as(e,e.next)}function ky(s,t){let e=t,n=-1/0,i;const r=s.x,o=s.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){const d=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=r&&d>n&&(n=d,i=e.x<e.next.x?e:e.next,d===r))return i}e=e.next}while(e!==t);if(!i)return null;const a=i,c=i.x,l=i.y;let h=1/0,u;e=i;do r>=e.x&&e.x>=c&&r!==e.x&&Ls(o<l?r:n,o,c,l,o<l?n:r,o,e.x,e.y)&&(u=Math.abs(o-e.y)/(r-e.x),Hr(e,s)&&(u<h||u===h&&(e.x>i.x||e.x===i.x&&Hy(i,e)))&&(i=e,h=u)),e=e.next;while(e!==a);return i}function Hy(s,t){return ye(s.prev,s,t.prev)<0&&ye(t.next,s,s.next)<0}function zy(s,t,e,n){let i=s;do i.z===0&&(i.z=zl(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,Vy(i)}function Vy(s){let t,e,n,i,r,o,a,c,l=1;do{for(e=s,s=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<l&&(a++,n=n.nextZ,!!n);t++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||e.z<=n.z)?(i=e,e=e.nextZ,a--):(i=n,n=n.nextZ,c--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;e=n}r.nextZ=null,l*=2}while(o>1);return s}function zl(s,t,e,n,i){return s=(s-e)*i|0,t=(t-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function Gy(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function Ls(s,t,e,n,i,r,o,a){return(i-o)*(t-a)>=(s-o)*(r-a)&&(s-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(i-o)*(n-a)}function Wy(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!Xy(s,t)&&(Hr(s,t)&&Hr(t,s)&&qy(s,t)&&(ye(s.prev,s,t.prev)||ye(s,t.prev,t))||Ra(s,t)&&ye(s.prev,s,s.next)>0&&ye(t.prev,t,t.next)>0)}function ye(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function Ra(s,t){return s.x===t.x&&s.y===t.y}function Qp(s,t,e,n){const i=Co(ye(s,t,e)),r=Co(ye(s,t,n)),o=Co(ye(e,n,s)),a=Co(ye(e,n,t));return!!(i!==r&&o!==a||i===0&&Ro(s,e,t)||r===0&&Ro(s,n,t)||o===0&&Ro(e,s,n)||a===0&&Ro(e,t,n))}function Ro(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function Co(s){return s>0?1:s<0?-1:0}function Xy(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&Qp(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function Hr(s,t){return ye(s.prev,s,s.next)<0?ye(s,t,s.next)>=0&&ye(s,s.prev,t)>=0:ye(s,t,s.prev)<0||ye(s,s.next,t)<0}function qy(s,t){let e=s,n=!1;const i=(s.x+t.x)/2,r=(s.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&i<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==s);return n}function tm(s,t){const e=new Vl(s.i,s.x,s.y),n=new Vl(t.i,t.x,t.y),i=s.next,r=t.prev;return s.next=t,t.prev=s,e.next=i,i.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Md(s,t,e,n){const i=new Vl(s,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function zr(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Vl(s,t,e){this.i=s,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Ky(s,t,e,n){let i=0;for(let r=t,o=e-n;r<e;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}class Rr{static area(t){const e=t.length;let n=0;for(let i=e-1,r=0;r<e;i=r++)n+=t[i].x*t[r].y-t[r].x*t[i].y;return n*.5}static isClockWise(t){return Rr.area(t)<0}static triangulateShape(t,e){const n=[],i=[],r=[];yd(t),bd(n,t);let o=t.length;e.forEach(yd);for(let c=0;c<e.length;c++)i.push(o),o+=e[c].length,bd(n,e[c]);const a=Ly.triangulate(n,i);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}}function yd(s){const t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function bd(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}class Ah extends be{constructor(t=new Zp([new pt(.5,.5),new pt(-.5,.5),new pt(-.5,-.5),new pt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,i=[],r=[];for(let a=0,c=t.length;a<c;a++){const l=t[a];o(l)}this.setAttribute("position",new Ee(i,3)),this.setAttribute("uv",new Ee(r,2)),this.computeVertexNormals();function o(a){const c=[],l=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1;let d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,m=e.bevelSize!==void 0?e.bevelSize:f-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,g=e.bevelSegments!==void 0?e.bevelSegments:3;const p=e.extrudePath,v=e.UVGenerator!==void 0?e.UVGenerator:Yy;let y,x=!1,N,w,C,I;p&&(y=p.getSpacedPoints(h),x=!0,d=!1,N=p.computeFrenetFrames(h,!1),w=new R,C=new R,I=new R),d||(g=0,f=0,m=0,_=0);const T=a.extractPoints(l);let b=T.shape;const L=T.holes;if(!Rr.isClockWise(b)){b=b.reverse();for(let tt=0,ht=L.length;tt<ht;tt++){const P=L[tt];Rr.isClockWise(P)&&(L[tt]=P.reverse())}}const F=Rr.triangulateShape(b,L),G=b;for(let tt=0,ht=L.length;tt<ht;tt++){const P=L[tt];b=b.concat(P)}function q(tt,ht,P){return ht||console.error("THREE.ExtrudeGeometry: vec does not exist"),tt.clone().addScaledVector(ht,P)}const K=b.length,Z=F.length;function H(tt,ht,P){let lt,et,ut;const ct=tt.x-ht.x,Ct=tt.y-ht.y,mt=P.x-tt.x,E=P.y-tt.y,S=ct*ct+Ct*Ct,B=ct*E-Ct*mt;if(Math.abs(B)>Number.EPSILON){const V=Math.sqrt(S),J=Math.sqrt(mt*mt+E*E),j=ht.x-Ct/V,gt=ht.y+ct/V,at=P.x-E/J,xt=P.y+mt/J,Ut=((at-j)*E-(xt-gt)*mt)/(ct*E-Ct*mt);lt=j+ct*Ut-tt.x,et=gt+Ct*Ut-tt.y;const rt=lt*lt+et*et;if(rt<=2)return new pt(lt,et);ut=Math.sqrt(rt/2)}else{let V=!1;ct>Number.EPSILON?mt>Number.EPSILON&&(V=!0):ct<-Number.EPSILON?mt<-Number.EPSILON&&(V=!0):Math.sign(Ct)===Math.sign(E)&&(V=!0),V?(lt=-Ct,et=ct,ut=Math.sqrt(S)):(lt=ct,et=Ct,ut=Math.sqrt(S/2))}return new pt(lt/ut,et/ut)}const st=[];for(let tt=0,ht=G.length,P=ht-1,lt=tt+1;tt<ht;tt++,P++,lt++)P===ht&&(P=0),lt===ht&&(lt=0),st[tt]=H(G[tt],G[P],G[lt]);const ot=[];let _t,Rt=st.concat();for(let tt=0,ht=L.length;tt<ht;tt++){const P=L[tt];_t=[];for(let lt=0,et=P.length,ut=et-1,ct=lt+1;lt<et;lt++,ut++,ct++)ut===et&&(ut=0),ct===et&&(ct=0),_t[lt]=H(P[lt],P[ut],P[ct]);ot.push(_t),Rt=Rt.concat(_t)}for(let tt=0;tt<g;tt++){const ht=tt/g,P=f*Math.cos(ht*Math.PI/2),lt=m*Math.sin(ht*Math.PI/2)+_;for(let et=0,ut=G.length;et<ut;et++){const ct=q(G[et],st[et],lt);it(ct.x,ct.y,-P)}for(let et=0,ut=L.length;et<ut;et++){const ct=L[et];_t=ot[et];for(let Ct=0,mt=ct.length;Ct<mt;Ct++){const E=q(ct[Ct],_t[Ct],lt);it(E.x,E.y,-P)}}}const kt=m+_;for(let tt=0;tt<K;tt++){const ht=d?q(b[tt],Rt[tt],kt):b[tt];x?(C.copy(N.normals[0]).multiplyScalar(ht.x),w.copy(N.binormals[0]).multiplyScalar(ht.y),I.copy(y[0]).add(C).add(w),it(I.x,I.y,I.z)):it(ht.x,ht.y,0)}for(let tt=1;tt<=h;tt++)for(let ht=0;ht<K;ht++){const P=d?q(b[ht],Rt[ht],kt):b[ht];x?(C.copy(N.normals[tt]).multiplyScalar(P.x),w.copy(N.binormals[tt]).multiplyScalar(P.y),I.copy(y[tt]).add(C).add(w),it(I.x,I.y,I.z)):it(P.x,P.y,u/h*tt)}for(let tt=g-1;tt>=0;tt--){const ht=tt/g,P=f*Math.cos(ht*Math.PI/2),lt=m*Math.sin(ht*Math.PI/2)+_;for(let et=0,ut=G.length;et<ut;et++){const ct=q(G[et],st[et],lt);it(ct.x,ct.y,u+P)}for(let et=0,ut=L.length;et<ut;et++){const ct=L[et];_t=ot[et];for(let Ct=0,mt=ct.length;Ct<mt;Ct++){const E=q(ct[Ct],_t[Ct],lt);x?it(E.x,E.y+y[h-1].y,y[h-1].x+P):it(E.x,E.y,u+P)}}}Y(),Q();function Y(){const tt=i.length/3;if(d){let ht=0,P=K*ht;for(let lt=0;lt<Z;lt++){const et=F[lt];Pt(et[2]+P,et[1]+P,et[0]+P)}ht=h+g*2,P=K*ht;for(let lt=0;lt<Z;lt++){const et=F[lt];Pt(et[0]+P,et[1]+P,et[2]+P)}}else{for(let ht=0;ht<Z;ht++){const P=F[ht];Pt(P[2],P[1],P[0])}for(let ht=0;ht<Z;ht++){const P=F[ht];Pt(P[0]+K*h,P[1]+K*h,P[2]+K*h)}}n.addGroup(tt,i.length/3-tt,0)}function Q(){const tt=i.length/3;let ht=0;St(G,ht),ht+=G.length;for(let P=0,lt=L.length;P<lt;P++){const et=L[P];St(et,ht),ht+=et.length}n.addGroup(tt,i.length/3-tt,1)}function St(tt,ht){let P=tt.length;for(;--P>=0;){const lt=P;let et=P-1;et<0&&(et=tt.length-1);for(let ut=0,ct=h+g*2;ut<ct;ut++){const Ct=K*ut,mt=K*(ut+1),E=ht+lt+Ct,S=ht+et+Ct,B=ht+et+mt,V=ht+lt+mt;Bt(E,S,B,V)}}}function it(tt,ht,P){c.push(tt),c.push(ht),c.push(P)}function Pt(tt,ht,P){Lt(tt),Lt(ht),Lt(P);const lt=i.length/3,et=v.generateTopUV(n,i,lt-3,lt-2,lt-1);Xt(et[0]),Xt(et[1]),Xt(et[2])}function Bt(tt,ht,P,lt){Lt(tt),Lt(ht),Lt(lt),Lt(ht),Lt(P),Lt(lt);const et=i.length/3,ut=v.generateSideWallUV(n,i,et-6,et-3,et-2,et-1);Xt(ut[0]),Xt(ut[1]),Xt(ut[3]),Xt(ut[1]),Xt(ut[2]),Xt(ut[3])}function Lt(tt){i.push(c[tt*3+0]),i.push(c[tt*3+1]),i.push(c[tt*3+2])}function Xt(tt){r.push(tt.x),r.push(tt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return jy(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,o=t.shapes.length;r<o;r++){const a=e[t.shapes[r]];n.push(a)}const i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new kl[i.type]().fromJSON(i)),new Ah(n,t.options)}}const Yy={generateTopUV:function(s,t,e,n,i){const r=t[e*3],o=t[e*3+1],a=t[n*3],c=t[n*3+1],l=t[i*3],h=t[i*3+1];return[new pt(r,o),new pt(a,c),new pt(l,h)]},generateSideWallUV:function(s,t,e,n,i,r){const o=t[e*3],a=t[e*3+1],c=t[e*3+2],l=t[n*3],h=t[n*3+1],u=t[n*3+2],d=t[i*3],f=t[i*3+1],m=t[i*3+2],_=t[r*3],g=t[r*3+1],p=t[r*3+2];return Math.abs(a-h)<Math.abs(o-l)?[new pt(o,1-c),new pt(l,1-u),new pt(d,1-m),new pt(_,1-p)]:[new pt(a,1-c),new pt(h,1-u),new pt(f,1-m),new pt(g,1-p)]}};function jy(s,t,e){if(e.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){const r=s[n];e.shapes.push(r.uuid)}else e.shapes.push(s.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Ca extends Eh{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Ca(t.radius,t.detail)}}class js extends be{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const h=[],u=new R,d=new R,f=[],m=[],_=[],g=[];for(let p=0;p<=n;p++){const v=[],y=p/n;let x=0;p===0&&o===0?x=.5/e:p===n&&c===Math.PI&&(x=-.5/e);for(let N=0;N<=e;N++){const w=N/e;u.x=-t*Math.cos(i+w*r)*Math.sin(o+y*a),u.y=t*Math.cos(o+y*a),u.z=t*Math.sin(i+w*r)*Math.sin(o+y*a),m.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),g.push(w+x,1-y),v.push(l++)}h.push(v)}for(let p=0;p<n;p++)for(let v=0;v<e;v++){const y=h[p][v+1],x=h[p][v],N=h[p+1][v],w=h[p+1][v+1];(p!==0||o>0)&&f.push(y,x,w),(p!==n-1||c<Math.PI)&&f.push(x,N,w)}this.setIndex(f),this.setAttribute("position",new Ee(m,3)),this.setAttribute("normal",new Ee(_,3)),this.setAttribute("uv",new Ee(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new js(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class We extends Fn{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new It(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new It(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=dh,this.normalScale=new pt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new On,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class $n extends We{static get type(){return"MeshPhysicalMaterial"}constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new pt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return we(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new It(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new It(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new It(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class $y extends Fn{static get type(){return"MeshLambertMaterial"}constructor(t){super(),this.isMeshLambertMaterial=!0,this.color=new It(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new It(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=dh,this.normalScale=new pt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new On,this.combine=sh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}function Po(s,t,e){return!s||!e&&s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function Zy(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function Jy(s){function t(i,r){return s[i]-s[r]}const e=s.length,n=new Array(e);for(let i=0;i!==e;++i)n[i]=i;return n.sort(t),n}function Sd(s,t,e){const n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){const a=e[r]*t;for(let c=0;c!==t;++c)i[o++]=s[a+c]}return i}function em(s,t,e,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(t.push(r.time),e.push.apply(e,o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(t.push(r.time),o.toArray(e,e.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(t.push(r.time),e.push(o)),r=s[i++];while(r!==void 0)}class jr{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){const e=this.parameterPositions;let n=this._cachedIndex,i=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=e[++n],t<i)break t}o=e.length;break e}if(!(t>=r)){const a=e[1];t<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){const a=n+o>>>1;t<e[a]?o=a:n=a+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){const e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let o=0;o!==i;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Qy extends jr{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:cu,endingEnd:cu}}intervalChanged_(t,e,n){const i=this.parameterPositions;let r=t-2,o=t+1,a=i[r],c=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case lu:r=t,a=2*e-n;break;case hu:r=i.length-2,a=e+i[r]-i[r+1];break;default:r=t,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case lu:o=t,c=2*n-e;break;case hu:o=1,c=n+i[1]-i[0];break;default:o=t-1,c=e}const l=(n-e)*.5,h=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,m=(n-e)/(i-e),_=m*m,g=_*m,p=-d*g+2*d*_-d*m,v=(1+d)*g+(-1.5-2*d)*_+(-.5+d)*m+1,y=(-1-f)*g+(1.5+f)*_+.5*m,x=f*g-f*_;for(let N=0;N!==a;++N)r[N]=p*o[h+N]+v*o[l+N]+y*o[c+N]+x*o[u+N];return r}}class tb extends jr{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=(n-e)/(i-e),u=1-h;for(let d=0;d!==a;++d)r[d]=o[l+d]*u+o[c+d]*h;return r}}class eb extends jr{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}}class Zn{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Po(e,this.TimeBufferType),this.values=Po(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){const e=t.constructor;let n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Po(t.times,Array),values:Po(t.values,Array)};const i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new eb(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new tb(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Qy(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Ur:e=this.InterpolantFactoryMethodDiscrete;break;case Or:e=this.InterpolantFactoryMethodLinear;break;case Oa:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ur;case this.InterpolantFactoryMethodLinear:return Or;case this.InterpolantFactoryMethodSmooth:return Oa}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){const e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){const e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){const n=this.times,i=n.length;let r=0,o=i-1;for(;r!==i&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0;const e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){const c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(i!==void 0&&Zy(i))for(let a=0,c=i.length;a!==c;++a){const l=i[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){const t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Oa,r=t.length-1;let o=1;for(let a=1;a<r;++a){let c=!1;const l=t[a],h=t[a+1];if(l!==h&&(a!==1||l!==t[0]))if(i)c=!0;else{const u=a*n,d=u-n,f=u+n;for(let m=0;m!==n;++m){const _=e[u+m];if(_!==e[d+m]||_!==e[f+m]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];const u=a*n,d=o*n;for(let f=0;f!==n;++f)e[d+f]=e[u+f]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)e[c+l]=e[a+l];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){const t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}}Zn.prototype.TimeBufferType=Float32Array;Zn.prototype.ValueBufferType=Float32Array;Zn.prototype.DefaultInterpolation=Or;class er extends Zn{constructor(t,e,n){super(t,e,n)}}er.prototype.ValueTypeName="bool";er.prototype.ValueBufferType=Array;er.prototype.DefaultInterpolation=Ur;er.prototype.InterpolantFactoryMethodLinear=void 0;er.prototype.InterpolantFactoryMethodSmooth=void 0;class nm extends Zn{}nm.prototype.ValueTypeName="color";class $s extends Zn{}$s.prototype.ValueTypeName="number";class nb extends jr{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-e)/(i-e);let l=t*a;for(let h=l+a;l!==h;l+=4)he.slerpFlat(r,0,o,l-a,o,l,c);return r}}class Zs extends Zn{InterpolantFactoryMethodLinear(t){return new nb(this.times,this.values,this.getValueSize(),t)}}Zs.prototype.ValueTypeName="quaternion";Zs.prototype.InterpolantFactoryMethodSmooth=void 0;class nr extends Zn{constructor(t,e,n){super(t,e,n)}}nr.prototype.ValueTypeName="string";nr.prototype.ValueBufferType=Array;nr.prototype.DefaultInterpolation=Ur;nr.prototype.InterpolantFactoryMethodLinear=void 0;nr.prototype.InterpolantFactoryMethodSmooth=void 0;class Js extends Zn{}Js.prototype.ValueTypeName="vector";class ib{constructor(t="",e=-1,n=[],i=b0){this.name=t,this.tracks=n,this.duration=e,this.blendMode=i,this.uuid=gn(),this.duration<0&&this.resetDuration()}static parse(t){const e=[],n=t.tracks,i=1/(t.fps||1);for(let o=0,a=n.length;o!==a;++o)e.push(rb(n[o]).scale(i));const r=new this(t.name,t.duration,e,t.blendMode);return r.uuid=t.uuid,r}static toJSON(t){const e=[],n=t.tracks,i={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode};for(let r=0,o=n.length;r!==o;++r)e.push(Zn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(t,e,n,i){const r=e.length,o=[];for(let a=0;a<r;a++){let c=[],l=[];c.push((a+r-1)%r,a,(a+1)%r),l.push(0,1,0);const h=Jy(c);c=Sd(c,1,h),l=Sd(l,1,h),!i&&c[0]===0&&(c.push(r),l.push(l[0])),o.push(new $s(".morphTargetInfluences["+e[a].name+"]",c,l).scale(1/n))}return new this(t,-1,o)}static findByName(t,e){let n=t;if(!Array.isArray(t)){const i=t;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===e)return n[i];return null}static CreateClipsFromMorphTargetSequences(t,e,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,c=t.length;a<c;a++){const l=t[a],h=l.name.match(r);if(h&&h.length>1){const u=h[1];let d=i[u];d||(i[u]=d=[]),d.push(l)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],e,n));return o}static parseAnimation(t,e){if(!t)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(u,d,f,m,_){if(f.length!==0){const g=[],p=[];em(f,g,p,m),g.length!==0&&_.push(new u(d,g,p))}},i=[],r=t.name||"default",o=t.fps||30,a=t.blendMode;let c=t.length||-1;const l=t.hierarchy||[];for(let u=0;u<l.length;u++){const d=l[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let m;for(m=0;m<d.length;m++)if(d[m].morphTargets)for(let _=0;_<d[m].morphTargets.length;_++)f[d[m].morphTargets[_]]=-1;for(const _ in f){const g=[],p=[];for(let v=0;v!==d[m].morphTargets.length;++v){const y=d[m];g.push(y.time),p.push(y.morphTarget===_?1:0)}i.push(new $s(".morphTargetInfluence["+_+"]",g,p))}c=f.length*o}else{const f=".bones["+e[u].name+"]";n(Js,f+".position",d,"pos",i),n(Zs,f+".quaternion",d,"rot",i),n(Js,f+".scale",d,"scl",i)}}return i.length===0?null:new this(r,c,i,a)}resetDuration(){const t=this.tracks;let e=0;for(let n=0,i=t.length;n!==i;++n){const r=this.tracks[n];e=Math.max(e,r.times[r.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){const t=[];for(let e=0;e<this.tracks.length;e++)t.push(this.tracks[e].clone());return new this.constructor(this.name,this.duration,t,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function sb(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return $s;case"vector":case"vector2":case"vector3":case"vector4":return Js;case"color":return nm;case"quaternion":return Zs;case"bool":case"boolean":return er;case"string":return nr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function rb(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const t=sb(s.type);if(s.times===void 0){const e=[],n=[];em(s.keys,e,n,"value"),s.times=e,s.values=n}return t.parse!==void 0?t.parse(s):new t(s.name,s.times,s.values,s.interpolation)}const Di={enabled:!1,files:{},add:function(s,t){this.enabled!==!1&&(this.files[s]=t)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class ob{constructor(t,e,n){const i=this;let r=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){const u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){const f=l[u],m=l[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return m}return null}}}const ab=new ob;class ir{constructor(t){this.manager=t!==void 0?t:ab,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}ir.DEFAULT_MATERIAL_NAME="__DEFAULT";const si={};class cb extends Error{constructor(t,e){super(t),this.response=e}}class im extends ir{constructor(t){super(t)}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=Di.get(t);if(r!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(r),this.manager.itemEnd(t)},0),r;if(si[t]!==void 0){si[t].push({onLoad:e,onProgress:n,onError:i});return}si[t]=[],si[t].push({onLoad:e,onProgress:n,onError:i});const o=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const h=si[t],u=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),f=d?parseInt(d):0,m=f!==0;let _=0;const g=new ReadableStream({start(p){v();function v(){u.read().then(({done:y,value:x})=>{if(y)p.close();else{_+=x.byteLength;const N=new ProgressEvent("progress",{lengthComputable:m,loaded:_,total:f});for(let w=0,C=h.length;w<C;w++){const I=h[w];I.onProgress&&I.onProgress(N)}p.enqueue(x),v()}},y=>{p.error(y)})}}});return new Response(g)}else throw new cb(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return l.json();default:if(a===void 0)return l.text();{const u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return l.arrayBuffer().then(m=>f.decode(m))}}}).then(l=>{Di.add(t,l);const h=si[t];delete si[t];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onLoad&&f.onLoad(l)}}).catch(l=>{const h=si[t];if(h===void 0)throw this.manager.itemError(t),l;delete si[t];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onError&&f.onError(l)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class lb extends ir{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,o=Di.get(t);if(o!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0),o;const a=Br("img");function c(){h(),Di.add(t,this),e&&e(this),r.manager.itemEnd(t)}function l(u){h(),i&&i(u),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(t),a.src=t,a}}class hb extends ir{constructor(t){super(t)}load(t,e,n,i){const r=new Re,o=new lb(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},n,i),r}}class Pa extends Me{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new It(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class ub extends Pa{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Me.DEFAULT_UP),this.updateMatrix(),this.groundColor=new It(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const _c=new Vt,Td=new R,Ed=new R;class wh{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new pt(512,512),this.map=null,this.mapPass=null,this.matrix=new Vt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new mh,this._frameExtents=new pt(1,1),this._viewportCount=1,this._viewports=[new ae(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Td.setFromMatrixPosition(t.matrixWorld),e.position.copy(Td),Ed.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Ed),e.updateMatrixWorld(),_c.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(_c),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(_c)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class db extends wh{constructor(){super(new Ge(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,n=Ks*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(n!==e.fov||i!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=i,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class fb extends Pa{constructor(t,e,n=0,i=Math.PI/3,r=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Me.DEFAULT_UP),this.updateMatrix(),this.target=new Me,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new db}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const Ad=new Vt,fr=new R,xc=new R;class pb extends wh{constructor(){super(new Ge(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new pt(4,2),this._viewportCount=6,this._viewports=[new ae(2,1,1,1),new ae(0,1,1,1),new ae(3,1,1,1),new ae(1,1,1,1),new ae(3,0,1,1),new ae(1,0,1,1)],this._cubeDirections=[new R(1,0,0),new R(-1,0,0),new R(0,0,1),new R(0,0,-1),new R(0,1,0),new R(0,-1,0)],this._cubeUps=[new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,0,1),new R(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),fr.setFromMatrixPosition(t.matrixWorld),n.position.copy(fr),xc.copy(n.position),xc.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(xc),n.updateMatrixWorld(),i.makeTranslation(-fr.x,-fr.y,-fr.z),Ad.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ad)}}class mb extends Pa{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new pb}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class gb extends wh{constructor(){super(new gh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class sm extends Pa{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Me.DEFAULT_UP),this.updateMatrix(),this.target=new Me,this.shadow=new gb}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Cr{static decodeText(t){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(t);let e="";for(let n=0,i=t.length;n<i;n++)e+=String.fromCharCode(t[n]);try{return decodeURIComponent(escape(e))}catch{return e}}static extractUrlBase(t){const e=t.lastIndexOf("/");return e===-1?"./":t.slice(0,e+1)}static resolveURL(t,e){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}}class _b extends ir{constructor(t){super(t),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(t){return this.options=t,this}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,o=Di.get(t);if(o!==void 0){if(r.manager.itemStart(t),o.then){o.then(l=>{e&&e(l),r.manager.itemEnd(t)}).catch(l=>{i&&i(l)});return}return setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const c=fetch(t,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return Di.add(t,l),e&&e(l),r.manager.itemEnd(t),l}).catch(function(l){i&&i(l),Di.remove(t),r.manager.itemError(t),r.manager.itemEnd(t)});Di.add(t,c),r.manager.itemStart(t)}}const Rh="\\[\\]\\.:\\/",xb=new RegExp("["+Rh+"]","g"),Ch="[^"+Rh+"]",vb="[^"+Rh.replace("\\.","")+"]",Mb=/((?:WC+[\/:])*)/.source.replace("WC",Ch),yb=/(WCOD+)?/.source.replace("WCOD",vb),bb=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ch),Sb=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ch),Tb=new RegExp("^"+Mb+yb+bb+Sb+"$"),Eb=["material","materials","bones","map"];class Ab{constructor(t,e,n){const i=n||de.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)}bind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}}class de{constructor(t,e,n){this.path=e,this.parsedPath=n||de.parseTrackName(e),this.node=de.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new de.Composite(t,e,n):new de(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(xb,"")}static parseTrackName(t){const e=Tb.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);const n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);Eb.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){const n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===e||a.uuid===e)return a;const c=n(a.children);if(c)return c}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node;const e=this.parsedPath,n=e.objectName,i=e.propertyName;let r=e.propertyIndex;if(t||(t=de.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}const o=t[i];if(o===void 0){const l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}de.Composite=Ab;de.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};de.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};de.prototype.GetterByBindingType=[de.prototype._getValue_direct,de.prototype._getValue_array,de.prototype._getValue_arrayElement,de.prototype._getValue_toArray];de.prototype.SetterByBindingTypeAndVersioning=[[de.prototype._setValue_direct,de.prototype._setValue_direct_setNeedsUpdate,de.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[de.prototype._setValue_array,de.prototype._setValue_array_setNeedsUpdate,de.prototype._setValue_array_setMatrixWorldNeedsUpdate],[de.prototype._setValue_arrayElement,de.prototype._setValue_arrayElement_setNeedsUpdate,de.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[de.prototype._setValue_fromArray,de.prototype._setValue_fromArray_setNeedsUpdate,de.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const wd=new Vt;class wb{constructor(t,e,n=0,i=1/0){this.ray=new qr(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new ph,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return wd.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(wd),this}intersectObject(t,e=!0,n=[]){return Gl(t,this,n,e),n.sort(Rd),n}intersectObjects(t,e=!0,n=[]){for(let i=0,r=t.length;i<r;i++)Gl(t[i],this,n,e);return n.sort(Rd),n}}function Rd(s,t){return s.distance-t.distance}function Gl(s,t,e,n){let i=!0;if(s.layers.test(t.layers)&&s.raycast(t,e)===!1&&(i=!1),i===!0&&n===!0){const r=s.children;for(let o=0,a=r.length;o<a;o++)Gl(r[o],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ih}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ih);const Gt=(s,t,e)=>s<t?t:s>e?e:s,$e=(s,t,e)=>s+(t-s)*e;function Sr(s){const t=Math.PI*2;let e=(s+Math.PI)%t;return e<0&&(e+=t),e-=Math.PI,e===-Math.PI?Math.PI:e}const pn=(s,t,e,n)=>$e(s,t,1-Math.exp(-e*n)),k=(s,t,e)=>{const n=Gt((e-s)/(t-s),0,1);return n*n*(3-2*n)};function Wn(s,t){let e=(Math.imul(s|0,668265261)^Math.imul(t|0,374761393))>>>0;return e=Math.imul(e^e>>>15,2246822507)>>>0,e=Math.imul(e^e>>>13,3266489909)>>>0,e=(e^e>>>16)>>>0,e/4294967296}function De(s,t){const e=Math.floor(s),n=s-e,i=Wn(e,t),r=Wn(e+1,t),o=n*n*(3-2*n);return i+(r-i)*o}const rm=.75;class Rb{constructor(t){M(this,"camera");M(this,"dist",13);M(this,"baseY",.7);M(this,"lookAhead",4.5);M(this,"aimDrop",1.5);M(this,"followRate",4.5);M(this,"heightRate",2.5);M(this,"dirRate",1.2);M(this,"s",0);M(this,"A",2);M(this,"y",1);M(this,"u",2);M(this,"dir",1);M(this,"initialised",!1);M(this,"tube",0);M(this,"tubeTarget",0);M(this,"tubeBack",.9);M(this,"tubeUp",.3);M(this,"target",new R);this.camera=new Ge(36,t,.1,1500),this.setAspect(t)}setAspect(t){!(t>0)||!Number.isFinite(t)||(this.camera.aspect=t,this.camera.fov=t<1.4?48:36,this.camera.updateProjectionMatrix())}snap(t,e,n=e*.4,i=2,r=1){this.s=t,this.A=e,this.y=Number.isFinite(n)?n:e*.4,this.u=Number.isFinite(i)?i:2,this.dir=r>=0?1:-1,this.initialised=!0,this.apply()}update(t,e,n,i=e*.4,r=2,o=1){if(!(!Number.isFinite(t)||!Number.isFinite(e))){if((!(n>=0)||!Number.isFinite(n))&&(n=0),!this.initialised){this.snap(t,e,i,r,o);return}this.s=pn(this.s,t,this.followRate,n),this.A=pn(this.A,e,this.heightRate,n),Number.isFinite(i)&&(this.y=pn(this.y,i,this.heightRate,n)),Number.isFinite(r)&&(this.u=pn(this.u,r,this.heightRate,n)),Number.isFinite(o)&&(this.dir=pn(this.dir,Math.max(-1,Math.min(1,o)),this.dirRate,n)),this.tube=pn(this.tube,this.tubeTarget,1.5,n),this.apply()}}setTube(t){this.tubeTarget=t?1:0}get focusS(){return this.s}apply(){const t=this.lookAhead*this.dir;this.camera.position.set(-(this.s-t*.35),this.baseY+.4*this.A+.25*this.y+this.tubeUp*this.tube,this.u+this.dist+this.tubeBack*this.tube),this.target.set(-(this.s+t),this.y*.75+.15*this.A-this.aimDrop,this.u-.5);const e=rm,n=-this.s,i=this.y+.9*e,r=this.u,o=this.camera.position;o.set(n+(o.x-n)*e,i+(o.y-i)*e,r+(o.z-r)*e),this.target.set(n+(this.target.x-n)*e,i+(this.target.y-i)*e,r+(this.target.z-r)*e),this.camera.lookAt(this.target)}}const Cb=9.81;class om{constructor(t=900,e=Math.random){M(this,"points");M(this,"capacity");M(this,"pos");M(this,"col");M(this,"vel");M(this,"life");M(this,"maxLife");M(this,"geo");M(this,"next",0);M(this,"alive",0);M(this,"carry",0);M(this,"rnd");this.capacity=t,this.rnd=e,this.pos=new Float32Array(t*3),this.col=new Float32Array(t*4),this.vel=new Float32Array(t*3),this.life=new Float32Array(t),this.maxLife=new Float32Array(t);for(let i=0;i<t;i++)this.pos[i*3+1]=-1e3;this.geo=new be,this.geo.setAttribute("position",new Yt(this.pos,3).setUsage(Se)),this.geo.setAttribute("color",new Yt(this.col,4).setUsage(Se));const n=new Yr({size:.16,sizeAttenuation:!0,vertexColors:!0,transparent:!0,depthWrite:!1});this.points=new Aa(this.geo,n),this.points.frustumCulled=!1}get count(){return this.alive}emit(t,e,n,i,r,o,a,c,l=1.2){if(!(a>0)||!(c>0)||!Number.isFinite(a*c))return;this.carry+=a*c;let h=Math.floor(this.carry);this.carry-=h,h>this.capacity&&(h=this.capacity);for(let u=0;u<h;u++)this.spawn(t,e,n,i,r,o,l)}burst(t,e,n,i,r,o,a,c=1.8){const l=Math.min(this.capacity,Math.max(0,Math.floor(a)));for(let h=0;h<l;h++)this.spawn(t,e,n,i,r,o,c)}spawn(t,e,n,i,r,o,a){const c=this.next;this.next=(this.next+1)%this.capacity;const l=this.rnd,h=c*3;this.pos[h]=t+(l()-.5)*.3,this.pos[h+1]=e+l()*.1,this.pos[h+2]=n+(l()-.5)*.3;const u=.6+l()*.8;this.vel[h]=i*u+(l()-.5)*a,this.vel[h+1]=r*u+l()*a,this.vel[h+2]=o*u+(l()-.5)*a;const d=.5+l()*.6;this.maxLife[c]=d,this.life[c]=d}update(t){if(!(t>0)||!Number.isFinite(t))return;let e=0;const n=Math.exp(-1.2*t);for(let i=0;i<this.capacity;i++){const r=i*3,o=i*4;if(this.life[i]<=0){this.col[o+3]=0;continue}if(this.life[i]-=t,this.life[i]<=0){this.life[i]=0,this.col[o+3]=0,this.pos[r+1]=-1e3;continue}e++,this.vel[r]*=n,this.vel[r+2]*=n,this.vel[r+1]-=Cb*t,this.pos[r]+=this.vel[r]*t,this.pos[r+1]+=this.vel[r+1]*t,this.pos[r+2]+=this.vel[r+2]*t;const a=this.life[i]/this.maxLife[i];this.col[o]=.92,this.col[o+1]=.97,this.col[o+2]=1,this.col[o+3]=Math.min(1,a*1.6)*.85}this.alive=e,this.geo.attributes.position.needsUpdate=!0,this.geo.attributes.color.needsUpdate=!0}clear(){this.life.fill(0),this.alive=0;for(let t=0;t<this.capacity;t++)this.pos[t*3+1]=-1e3,this.col[t*4+3]=0}}const Pb={A0:2,length:240,liftMax:2.4,arrivalTime:2.5,startS:0},Is={base:6.4,hollowGain:.5,barrelPace:7.1},an={waveP:.66,knee:.42,span:.07,coinKey:77777,calmShare:.45,calmBelow:.49,preCloseCut:.5,preCloseIn:22,preCloseFull:12},Ti={lenMin:31,lenSpan:17,aMin:34,aSpan:56,upLen:40,upFrom:.22,curtLen:16,curtFrom:.56,riseLen:10,fallLen:8,outLen:10,endHol:.3,blend:6,tailK:.6,powerFrom:.45,paceFrom:.56,paceFull:.6,deepP:.5,medLo:.72,medHi:.83,deepLo:.87,deepHi:.96},ve={hol0:.56,hol1:.6,cover:.9,closeLen:2.4,aheadMin:2.4,aheadFull:2.8,ahead:4.2},ri={grow:.22,hol0:.5,hol1:.6,closeLen:9},un={out0:6,out1:80,backMin:6.5,stretch:.2,rise0:-8,rise1:3,fall0:1,fall1:15,nearLen:5},Cd=5,Pd=35,Lb=.85,Ib=.5,Nb=1/120,Ld=.001,vc=new DataView(new ArrayBuffer(8));function Db(s){vc.setFloat64(0,s);let t=Math.imul(vc.getUint32(0)^2654435769,2246822507);return t^=t>>>13,t=Math.imul(t^vc.getUint32(4),3266489909),t^=t>>>16,t=Math.imul(t,668265261),t^=t>>>15,t|0}const An=class An{constructor(t=1,e={}){M(this,"p");M(this,"seed",1);M(this,"seedHash",0);M(this,"hollowWave",!1);M(this,"hollowShift",0);M(this,"secA",0);M(this,"secB",-1);M(this,"secPeak",0);M(this,"breakS",0);M(this,"arrival",0);M(this,"peeling",!1);M(this,"peelBlend",0);M(this,"time",0);M(this,"tab",[]);M(this,"bS",NaN);M(this,"bPB",NaN);M(this,"bK",0);M(this,"bG",0);M(this,"bX",0);M(this,"bPow",0);M(this,"bTop",0);this.p={...Pb,...e},this.reset(t)}get A0(){return this.p.A0}get length(){return this.p.length}reset(t){this.seed=t,this.seedHash=Db(t),this.hollowWave=Wn(an.coinKey,this.seedHash)<an.waveP,this.hollowShift=0;const e=this.p.length-45,n=[];for(let l=0;l<e;l+=1)n.push(De(l/28,this.seedHash));n.sort((l,h)=>l-h);const i=n[Math.floor(an.calmShare*n.length)]??0;i>an.calmBelow&&(this.hollowShift=i-an.calmBelow);const r=Ti,o=r.lenMin+r.lenSpan*Wn(91001,this.seedHash);this.secA=r.aMin+r.aSpan*Wn(91002,this.seedHash),this.secB=this.hollowWave?this.secA+o:-1;const a=Wn(91003,this.seedHash)<r.deepP,c=Wn(91004,this.seedHash);this.secPeak=a?$e(r.deepLo,r.deepHi,c):$e(r.medLo,r.medHi,c),this.tab=[],this.bS=NaN,this.breakS=this.p.startS,this.arrival=0,this.peeling=!1,this.peelBlend=0,this.time=0}update(t){if(!(t>0)||!Number.isFinite(t))return;this.time+=t;let e=t;if(!this.peeling){const n=(1-this.arrival)*this.p.arrivalTime;if(e<n){this.arrival=Math.min(1,this.arrival+e/this.p.arrivalTime);return}this.arrival=1,this.peeling=!0,this.peelBlend=0,e-=n}for(;e>1e-12;){const n=Math.min(e,Nb);this.peelBlend=Math.min(1,this.peelBlend+n/Ib),this.breakS+=this.peelSpeed(this.breakS)*n,e-=n}}d(t){const e=t-this.breakS;return this.peeling?e:Math.abs(e)}breakBlend(t){return k(-2,1,t-this.breakS)}closeout(t){const e=this.p.length-Pd;return k(e-Cd,e,t)}power(t){return this.cached(1,t)}powerImpl(t){let e=0;const n=Ti;if(this.secB>this.secA&&t>this.secA-n.upLen&&t<this.secB+n.outLen){const i=this.sectionWeight(t),r=this.sectionHollow(t);e=i*r*k(Ti.powerFrom,.6,r)}return Math.max(De(t/28,this.seedHash),e,.8*this.closeout(t))}sectionWeight(t){const e=Ti,n=this.secA-e.upLen,i=this.secB+e.outLen;return!(this.secB>this.secA)||t<=n-e.blend||t>=i+e.blend?0:t>=n&&t<=i?1:k(n-e.blend,n,t)*(1-k(i,i+e.blend,t))}sectionEnding(t){return this.secB>this.secA?k(this.secA,this.secA+Ti.riseLen,t):1}sectionHollow(t){const e=Ti,n=this.secA,i=this.secB;if(t<=n){const r=n-t;if(r<=e.curtLen)return .6-(.6-e.curtFrom)*(r/e.curtLen);const o=r>=e.upLen?0:1-(r-e.curtLen)/(e.upLen-e.curtLen);return e.upFrom+(e.curtFrom-e.upFrom)*o*o}if(t<=i){const r=k(n,n+e.riseLen,t),o=1-(1-e.tailK)*k(n+e.riseLen,i-e.fallLen,t),a=k(i-e.fallLen,i,t);return .6+(this.secPeak-.6)*r*o*(1-a)}return .6-(.6-e.endHol)*k(i,i+e.outLen,t)}hollow(t){return this.cached(0,t)}cached(t,e){const n=(e-An.T0)/An.DX;let i=this.tab[t];if(i||(i=this.tab[t]=new Float64Array(Math.ceil((this.p.length+90)/An.DX)+2).fill(NaN)),!(n>=0)||n>=i.length-1)return this.compute(t,e);const r=n|0;let o=i[r];o!==o&&(o=i[r]=this.compute(t,An.T0+r*An.DX));let a=i[r+1];return a!==a&&(a=i[r+1]=this.compute(t,An.T0+(r+1)*An.DX)),o+(a-o)*(n-r)}compute(t,e){return t===0?this.hollowImpl(e):t===1?this.powerImpl(e):this.paceImpl(e)}hollowImpl(t){let e=De(t/28,this.seedHash)-this.hollowShift;e<0&&(e=0),e>an.knee&&(e=an.knee+an.span*(1-Math.exp(-(e-an.knee)/an.span)));const n=this.sectionWeight(t);n>0&&(e=$e(e,this.sectionHollow(t),n));const i=this.p.length-Pd-Cd;return e*=1-an.preCloseCut*k(i-an.preCloseIn,i-an.preCloseFull,t),Math.max(e,.8*this.closeout(t))}peelSpeed(t){const e=this.power(t),n=Is.base+Is.hollowGain*e*e,i=this.cached(2,t);return(i>0&&n<Is.barrelPace?n+(Is.barrelPace-n)*i:n)+10*this.closeout(t)}paceImpl(t){const e=this.sectionWeight(t);return e>0?e*k(Ti.paceFrom,Ti.paceFull,this.sectionHollow(t)):0}faceAmp(t,e){return this.p.A0*(.45+.55*Math.exp(-t/35))*(1+.2*e)}whiteAmp(t,e){return this.p.A0*(.4+.6*Math.exp(t/2.5))*(1+.2*e)}amp(t){return this.ampImpl(t,!0)}swellAmp(t){return this.ampImpl(t,!1)}ampImpl(t,e){const n=t-this.breakS,i=e?this.barrelAmpWeight(t):0,r=i>0&&n>0?$e(this.power(t),this.bPow,i):this.power(t);let o;if(!this.peeling)o=this.faceAmp(Math.abs(n),r)*(.3+.7*this.arrival);else{const a=k(-2,1,n),c=$e(this.whiteAmp(Math.min(n,0),r),this.faceAmp(Math.max(n,0),r),a);o=this.peelBlend>=1?c:$e(this.faceAmp(Math.abs(n),r),c,this.peelBlend)}return i>0&&(o+=i*((n>0?this.bTop:this.faceAmp(0,r)*(1+ri.grow))-o)),t>this.p.length&&(o*=Math.exp(-(t-this.p.length)/10)),o>Ld?o:Ld}breakTunnel(){this.bS=this.breakS,this.bPB=this.peelBlend;const t=this.hollow(this.breakS),e=this.breakS;this.bX=this.secB>this.secA&&e>=this.secB-5?1-k(this.secB+un.fall0,this.secB+un.fall1,e):0,this.bK=Math.max(k(ri.hol0,ri.hol1,t),this.bX)*this.peelBlend;const n=this.breakS;this.bG=this.secB>this.secA?k(this.secA+un.rise0,this.secA+un.rise1,n)*(1-k(this.secB+un.fall0,this.secB+un.fall1,n))*this.peelBlend:0,this.bPow=this.power(this.breakS),this.bTop=this.faceAmp(0,this.bPow)*(1+ri.grow)}barrelAmpWeight(t){if(!this.peeling||!this.hollowWave)return 0;const e=t-this.breakS;if(e>=0){if(e>=un.out1)return 0;(this.breakS!==this.bS||this.peelBlend!==this.bPB)&&this.breakTunnel();const o=this.bK,a=this.bG;if(o<=0&&a<=0)return 0;const c=a>0?a*(1-k(un.out0,un.out1,e)):0,l=3+(un.nearLen-3)*a;if(e>=l)return c;const h=k(0,l,e);return o+(c-o)*h}const n=this.hollow(t);(this.breakS!==this.bS||this.peelBlend!==this.bPB)&&this.breakTunnel();const i=Math.max(n>ri.hol0?k(ri.hol0,ri.hol1,n):0,this.bX);if(i<=0)return 0;const r=Math.max(1.5+5*n,un.backMin);return e<=-r-ri.closeLen?0:i*k(-r-ri.closeLen,-r,e)*this.peelBlend}faceWidth(t,e=this.amp(t)){const n=this.power(t),i=t-this.breakS,r=(a,c)=>{const l=Math.exp(-a/12),h=1.7-.85*n*l,u=1+1.4*(1-Math.exp(-a/45));return h*u*c};let o;if(!this.peeling)o=r(Math.abs(i),1);else{const a=this.barrelAmpWeight(t);if(a>0){const c=i>0?$e(n,this.bPow,a):n,l=1+un.stretch*a,h=(d,f)=>{const m=d/l;return(1.7-.85*c*Math.exp(-m/12))*(1+1.4*(1-Math.exp(-m/45)))*f},u=h(Math.max(i,0),$e($e(1.6,1,k(-2,1,i)),1,a));o=this.peelBlend>=1?u:$e(h(Math.abs(i),1),u,this.peelBlend)}else{const c=r(Math.max(i,0),$e(1.6,1,k(-2,1,i)));o=this.peelBlend>=1?c:$e(r(Math.abs(i),1),c,this.peelBlend)}}return Math.max(.6,e*o)}heightAt(t,e){const n=this.amp(t);if(e<0){const o=e/(2.4*n);return n*Math.exp(-o*o)}const i=this.faceWidth(t,n);if(e>=i)return 0;const r=1-e/i;return n*r*r}facePoint(t,e,n){const i=this.amp(t),r=this.faceWidth(t,i),o=e<0?0:e,a=o<1?1-o:0,c=i*a*a,l=2*i*a,h=Math.sqrt(r*r+l*l),u=n??{};return u.u=o*r,u.y=c,u.A=i,u.W=r,u.m=h,u.sinA=l/h,u}lipReach(t){if(!this.peeling)return 0;const e=t-this.breakS;if(e<=-3)return 0;const n=Gt(1+e/3,0,1),i=Math.exp(-Math.max(e,0)/5),r=$e(n,i,k(-2,1,e)),o=this.closeout(t),a=o>0?1-Lb*k(.1,.5,o):1;return this.amp(t)*.95*this.hollow(t)*r*this.peelBlend*a}barrelReach(t){const e=this.lipReach(t),n=this.barrelShape(t);if(n<=0)return e;const i=ve.cover*this.faceWidth(t)*n;return i>e?i:e}barrelShape(t){if(!this.peeling||!this.hollowWave)return 0;const e=this.hollow(t),n=k(ve.hol0,ve.hol1,e);if(n<=0)return 0;const i=t-this.breakS,r=1.5+5*e;if(i<=-r-ve.closeLen||i>=ve.ahead)return 0;const o=this.closeout(t);if(o>=.45)return 0;const a=k(ve.hol0,ve.hol1,this.hollow(this.breakS)),c=ve.aheadFull*a,l=ve.aheadMin+(ve.ahead-ve.aheadMin)*a;return n*k(-r-ve.closeLen,-r,i)*(1-k(c,l,i))*this.peelBlend*(1-k(.3,.45,o))}lift(t,e){const n=e<0?0:e;let i=1.2*k(1,1.1,n);return n<1&&(i+=this.p.liftMax*Math.pow(1-n,.75)*(this.swellAmp(t)/this.p.A0)),i}get finished(){return this.peeling&&this.breakS>this.p.length+10}};M(An,"T0",-30),M(An,"DX",.1);let Wl=An;const re=14,Xl=12,Fb=.55,Id=2*Math.PI/Xl;function am(s,t){const e=s-t;return e<=-Xl/2||e>=Xl/2?s:s-Fb*Math.sin(Id*e)/Id}const cm=.7,ma={arch:.75,c1u:.5,c1y:1.3,c1uA:1,c1yA:-.2,throwD0:1.2,throwD1:3.2,c2u:1.3,c2y:.95,tipK:0,land:1.18};function La(s,t){return am(t,s.breakS)}function Ia(s,t,e=s.barrelReach(t),n=s.lipReach(t)){let i=s.hollowWave&&s.peeling?k(ve.hol0,ve.hol1,s.hollow(t))*s.peelBlend:0;return i>0&&(i*=1-k(.1,.5,s.closeout(t))),Math.max(e>1e-6?(e-n)/e:0,s.barrelShape(t),i)}function lm(s,t,e,n,i,r){const o=s.barrelReach(t),a=s.lipReach(t),c=Ia(s,t,o,a),l=.12+(cm-.12)*c,h=Math.min(o*1.1,e*.85),u=ma,d=u.arch*e,f=s.peeling?k(u.throwD0,u.throwD1,t-s.breakS):0,m=u.c1u+(u.c1uA-u.c1u)*f,_=u.c1y+(u.c1yA-u.c1y)*f;for(let g=0;g<re;g++){const p=g/(re-1);let v,y;if(o<=.02)v=-.02,y=e-.01;else{const x=p*Math.PI*.8;if(v=o*Math.sin(x),y=e-h+h*Math.cos(x)+o*l*Math.sin(x),c>0){const w=1-p,C=w*w*w,I=3*w*w*p,T=3*w*p*p,b=p*p*p,L=(I*m+T*u.c2u+b*u.land)*o,z=C*e+I*(e+_*d)+T*(e+u.c2y*d)+b*u.tipK*e;v+=(L-v)*c,y+=(z-y)*c}let N=0;if(v<0){const w=v/(2.4*e);N=e*Math.exp(-w*w)}else if(v<n){const w=1-v/n;N=e*w*w}y<N+.04&&(y=N+.04)}i[g]=v,r[g]=y}return o>.02}const sa={c1u:.6,c1y:.12,c1uA:.8,c1yA:-.25,c2u:1.3,c2y:.85,land:1.18,kA:1.1,cap:.035,capK:.06},Vr={c2uH:1,grow:.22,dome1:.25,dome2:.25,capUp:.15,fadeD0:-1.9,fadeD1:1.2};function hm(s,t){if(!(s.hollowWave&&s.peeling))return 0;let e=k(ve.hol0,ve.hol1,s.hollow(t))*s.peelBlend;return e>0&&(e*=(1-k(.1,.5,s.closeout(t)))*s.barrelShape(t)*k(Vr.fadeD1,Vr.fadeD0,t-s.breakS)),e}const ci={reachR:12,shape0:1.2,shape1:2.4,q1u:.55,q2y:.45,capR:1.48,capK:2.5,capL:.45};function um(s,t,e,n){if(!(s.hollowWave&&s.peeling))return n;const i=t-s.breakS,r=k(ve.hol0,ve.hol1,s.hollow(s.breakS)),o=ve.aheadFull*r;if(r<=0||i<=o||i>=o+ci.reachR)return n;const a=k(ve.hol0,ve.hol1,s.hollow(t));if(a<=0)return n;const c=s.closeout(t);if(c>=.45)return n;let l=ve.cover*e*a*r*(1-k(o,o+ci.reachR,i))*s.peelBlend*(1-k(.3,.45,c));const h=ci.capR+ci.capK*Math.max(0,s.lipReach(t)-ci.capL);return l>h&&(l=h),l>n?l:n}function dm(s,t,e){const n=Math.min(sa.land*um(s,t,s.faceWidth(t,e),s.barrelReach(t)),sa.kA*e),i=hm(s,t);return i>0?n+(sa.kA*e*(1+Vr.grow)-n)*i:n}function Ph(s,t,e,n,i,r){const o=um(s,t,n,s.barrelReach(t)),a=s.lipReach(t),c=Ia(s,t,o,a),l=.12+(cm-.12)*c,h=Math.min(o*1.1,e*.85),u=sa,d=s.peeling?k(ma.throwD0,ma.throwD1,t-s.breakS):0;let f=u.c1u+(u.c1uA-u.c1u)*d,m=u.c1y+(u.c1yA-u.c1y)*d,_=u.c2y;const g=s.hollowWave?Vr.c2uH:u.c2u;let p=Math.min(u.land*o,u.kA*e),v=Math.min(1,p/Math.max(.001,e)),y=e*(1+u.cap);const x=c>0?hm(s,t):0;if(x>0){const w=Vr;p+=(u.kA*e*(1+w.grow)-p)*x,v=Math.min(1,p/Math.max(.001,e)),m+=w.dome1*x,_+=w.dome2*x,y=e*(1+u.cap+w.capUp*x)}if(s.hollowWave&&d>0){const w=d*(1-k(ci.shape0,ci.shape1,p));w>0&&(f+=(ci.q1u-f)*w,m-=m*w,_+=(1-ci.q2y-_)*w)}const N=e*u.capK;for(let w=0;w<re;w++){const C=w/(re-1);let I,T;if(o<=.02)I=-.02,T=e-.01;else{const b=C*Math.PI*.8;if(I=o*Math.sin(b),T=e-h+h*Math.cos(b)+o*l*Math.sin(b),c>0){const z=1-C,F=3*z*z*C,G=3*z*C*C,q=C*C*C,K=(F*f+G*g+q)*p,Z=e+e*(F*m+G*(_-1)*v-q*v);I+=(K-I)*c,T+=(Z-T)*c}T>y-N&&(T=y-N+N*Math.tanh((T-(y-N))/N));let L=0;if(I<0){const z=I/(2.4*e);L=e*Math.exp(-z*z)}else if(I<n){const z=1-I/n;L=e*z*z}T<L+.04&&(T=L+.04)}i[w]=I,r[w]=T}return o>.02}function fm(s,t,e){let n=1/0;for(let i=0;i+1<re;i++){const r=s[i],o=s[i+1];if((r-e)*(o-e)<=0&&r!==o){const a=(e-r)/(o-r),c=t[i]+a*(t[i+1]-t[i]);c<n&&(n=c)}}return Number.isFinite(n)?n:NaN}const Nd=new Float32Array(re),Dd=new Float32Array(re);function ql(s,t,e){const n=La(s,t),i=Math.max(s.amp(n),.001),r=s.faceWidth(n,i);return lm(s,n,i,r,Nd,Dd)?fm(Nd,Dd,e)-s.heightAt(t,e):NaN}const Pr=new Float32Array(re),Lr=new Float32Array(re);function Fd(s,t,e){const n=La(s,t),i=Math.max(s.amp(n),.001),r=s.faceWidth(n,i);return Ph(s,n,i,r,Pr,Lr)?fm(Pr,Lr,e)-s.heightAt(t,e):NaN}const Ud=[.1,.35,.6,.85,1.1],Ub=10.4;function Ob(s,t,e,n,i,r,o,a){const c=e-s,l=n-t,h=o-i,u=a-r,d=c*u-l*h;if(Math.abs(d)<1e-9)return!1;const f=i-s,m=r-t,_=(f*u-m*h)/d,g=(f*l-m*c)/d;return _>=0&&_<=1&&g>=0&&g<=1}function Bb(s,t,e){const n=La(s,t),i=Math.max(s.amp(n),.001),r=s.faceWidth(n,i);if(!Ph(s,n,i,r,Pr,Lr))return 0;const o=s.heightAt(t,e),a=e+Ub,c=1+.4*i;let l=0;for(const h of Ud)for(let u=0;u+1<re;u++)if(Ob(e,o+h,a,c,Pr[u],Lr[u],Pr[u+1],Lr[u+1])){l++;break}return l/Ud.length}const Mc=1,Od=.25,yc=16;function Bd(s,t,e){return ql(s,t,Math.max(0,e)*s.faceWidth(t))}function kb(s,t,e,n={dist:0,size:0}){let i=0;for(;i<=yc&&Bd(s,t+i,e)>=Mc;)i+=Od;if(i>0&&i<=yc){let a=i-Od,c=i;for(let l=0;l<4;l++){const h=.5*(a+c);Bd(s,t+h,e)>=Mc?a=h:c=h}i=.5*(a+c)}const r=Math.min(i,yc),o=Math.max(Mc,s.amp(t+r));return n.dist=r,n.size=2*Math.atan(o/2/(r+1)),n}const Kl=9.81,bc=16,Hb=3,As=.02,zb=1.2,Vb=.6,Lo=-1.5,Sc=1.25,Gb="load",Yl={dragLin:.05,dragQuad:.0375,dragHi:3.5,vHi:11.5,liftScale:3.2,liftShoulder:.15,liftPocketL:4,liftHollow:.3,lipZeroT:.03,lipTaperT:.15,dropCut:1,dropSin0:.45,dropSin1:.7,dropT0:.3,dropT1:.5,dropV0:6,dropV1:8,liftAlongM:1,handsOffTrim:.25,handsOffK:2,handsOffT:.3,handsOffMin:-.2,handsOffMax:.7,beta:1,wMin:.6,wMax:1.4,lRef:.5,loadMaxTurn:2*Math.PI,loadMinSwing:.3,loadMaxSkid:.6,rollTau:.12,boardRate:16,carveR:1.2,carveLat:40,skidK:3.2,skidFree:.1,skidWipeLip:1.95,skidWipeMid:1.7,skidWipeLow:1.3,skidWipeSlow:1,slowV1:4.5,slowV2:6.5,skidLipMidT0:.15,skidLipMidT1:.35,skidMidLowT0:.64,skidMidLowT1:.86,skidSlowT0:.15,skidSlowT1:.5,skidSlide:.4,slideHbRate0:6,slideHbRate1:10,slideHvRate0:3,slideHvRate1:6,slideV0:4,slideV1:5.5,slideT0:.5,slideT1:.8,slideJerk0:55,slideJerk1:62,slideJerkTau:.02,skidSlideMax:2.2,slideVDecay:2,lipUpSin:.3,lipUpTime:.6,lipCapTime:1.5,lipMinV:2.5,lipClimbG:0,foamK:.035,hollowLip:.6,lipLandMaxT:1,fellBehindD:-25,foamD:-3,foamMaxTime:7,foamStuckTime:2.5,foamSteerTime:5,foamHardV:6.5,foamHeadOn:38*Math.PI/180,foamReboundRate:.8,trimV:7.6,trimK:3,trimSin0:.22,trimSin1:.32,trimT0:.12,trimT1:.2,trimStall0:.08,trimStall1:.2,trimTurn0:.6,trimTurn1:1.2,carryK:.8,carryD0:.5,carryD1:-1.5,carryTauIn:.25,carryTauOut:.6,carryMaxD:12,carryFadeD:16,carryV0:3.3,carryV1:4.3,carryOutK:2,carryOutD0:2,carryOutD:8,carryOutMaxV:11.5,carryOutSpinTau:4,carryOutSpin0:2,carryOutSpin1:3,carryOutTurn0:4,carryOutTurn1:5,carryOutSin0:.66,carryOutSin1:.8,lipGrace:.25,stuckD:5,carryMinV:3.8,foamPassiveK:.6,headOnMinV:4.4,headOnTime:.3,stuckTime:1.2,stallK:.9,driveDragCut:.15,driveAccel:1.5,boostDv:1.8,boostTime:.45,boostVMax:10,boostVFade:8,boostGap:1,boostD0:-3,boostD1:14,boostTopT:.22,boostSin:.4,boostSinIn:.6,boostReWin:1,boostReMaxT:.5,boostReV:5,boostLowT:.55,boostBotWin:1.2,boostBotMinT:.35,boostBotMaxT:.92,boostBotV:6.5,boostTurn:1.1,boostDrop:.3,boostBotSinIn:.8,boostCutTurn:2.4,boostCutV:6,tubeStayTMin:0,tubeMouthD:.5,tubeStayTMax:1.1,tubeSlowV:3,tubeUpSin:.5,tubeStayHol:.56,tubeShapeIn:.5,tubeReleaseHol:.72,tubeMinMade:1,tubeAheadNeed:8,tubeBackOffF:.85,missAheadD:1.5,missAheadTime:3,curtainLiftCut:.5,nbCut:.6,nbCutD0:4,nbCutD1:9,nbSin0:-.15,nbSin1:-.02,nbSin2:.3,nbSin3:.45,nbT0:.08,nbT1:.14,nbTurn0:3,nbTurn1:5,nbHol0:.52,nbHol1:.58,lipLandGrace:1.05,tubeTK:3,tubeNudge:.15,tubeLineMin:.1,tubeLineMax:.88,tubeRelTau:.25,tubeWorkTau:.05,tubeRiseTau:.8,tubeRelAccel:2.5,tubeNeutral0:.15,tubeCoastK:.2,tubeCoastReset:6,tubeStallRel:4,tubeWorkRel:5,tubeDriveRel:1.2,tubeRelMin:-2.5,tubeDeepF0:.7,tubeDeepF1:.85,tubeDeepSuck:2,tubeVMax:12.5,tubeCosMin:.85,tubeBoardVMax:13,tubeVTau:.1,tubeVAccel:15,spitHol:.8,spitExitHol:.585,spitMinTime:.5,spitMouthD:1,spitRel:.8,tubeHeadroom:1.27,tubeOutShape:.15,tubeEnterHold:.04,tubeRoofMin:1,tubeFreeRoom:.75,tubeFreeK:1,tubeFreePumpCut:0,tubeFreeIn:.75,tubeFreeOut:.75,tubeFreeShapeIn:.15,tubeFreeOutDrawn:.3,tubeFreeAhead:2,tubeFreeVMin:6.5,tubePumpF0:.15,tubePumpF1:.35,tubePumpTau:.06,tubePumpRail0:.35,tubePumpGap:.6,tubePumpSeg:.9,tubePumpSwing:.3,entrySuck:0,pumpDv:2.9,rhythmMax:2.5,pumpClimb:.08},Wb={...Yl,dragQuad:.011,dragHi:.3,vHi:10,liftScale:.35,nbCut:0,liftShoulder:.5,liftPocketL:6,liftHollow:0,lipTaperT:.15,liftAlongM:0,dropCut:0,carveR:1.6,carveLat:40},Xb=.25,qb=.45,Kb=.15,Yb=.3,jb=.3,Io=Math.PI-.05,$b=1.5,Zb=.08,Jb=.08,ga=1/60;function Tc(s,t){return 1-Math.pow(1+ga/t,-s/ga)}const Qb={grip:!1,targetHeading:null,stall:0,drive:0},kd=50*Math.PI/180;class _a{constructor(t){M(this,"s",0);M(this,"t",.25);M(this,"v",0);M(this,"hb",0);M(this,"hv",0);M(this,"skid",0);M(this,"stall",0);M(this,"drive",0);M(this,"state","idle");M(this,"pumpModel",Gb);M(this,"turnRate",0);M(this,"d",0);M(this,"face",{u:0,y:0,A:0,W:0,m:0,sinA:0});M(this,"accel",0);M(this,"pumpAccel",0);M(this,"pumpLeft",0);M(this,"skidDecel",0);M(this,"roll",0);M(this,"railRate",0);M(this,"railRate1",0);M(this,"load",0);M(this,"pumpF",0);M(this,"railSide",0);M(this,"railSideAt",-1e9);M(this,"railFlipAt",-1e9);M(this,"railFlipSeg",1e9);M(this,"railSideHv",0);M(this,"railSegMax",0);M(this,"tubeRel",0);M(this,"tubeLine",.5);M(this,"tubeHRef",0);M(this,"tubeCoast",0);M(this,"zoneFor",0);M(this,"behindLip",!1);M(this,"behindFor",0);M(this,"frontSeen",!1);M(this,"weight",1);M(this,"inTube",!1);M(this,"tubeMode","lock");M(this,"tubeWhy","");M(this,"tubeTime",0);M(this,"spat",!1);M(this,"spitRide",!1);M(this,"tubeHeight",0);M(this,"tubeHolMax",0);M(this,"missArmed",!0);M(this,"aheadFor",0);M(this,"rideTime",0);M(this,"lipUpTime",0);M(this,"lipTime",0);M(this,"carveRate",0);M(this,"foamTime",0);M(this,"foamRun",0);M(this,"spinNet",0);M(this,"headOnFor",0);M(this,"stuckFor",0);M(this,"carry",0);M(this,"notOutFor",1e9);M(this,"turnAccum",0);M(this,"prevSwing",0);M(this,"turnRateF",0);M(this,"boardRateF",0);M(this,"slideAllow",0);M(this,"vTurn",0);M(this,"targetRateF",0);M(this,"jerkMem",0);M(this,"lastTarget",NaN);M(this,"turningDown",!1);M(this,"boostMode","off");M(this,"boostCount",0);M(this,"boostKind","");M(this,"boostAt",-1e9);M(this,"boostLeft",0);M(this,"boostTopAt",-1e9);M(this,"boostLowAt",-1e9);M(this,"boostHiT",0);M(this,"boostCutArmed",!0);M(this,"lastPumpAt",-1e9);M(this,"prevSin",0);M(this,"peakSinUp",0);M(this,"maxTSince",0);M(this,"events",[]);this.wave=t}setWave(t){this.wave=t}get riding(){return this.state==="riding"}static skidLimit(t,e){const n=Yl,i=n.skidWipeLip+(n.skidWipeMid-n.skidWipeLip)*k(n.skidLipMidT0,n.skidLipMidT1,t)+(n.skidWipeLow-n.skidWipeMid)*k(n.skidMidLowT0,n.skidMidLowT1,t),r=Gt((t-n.skidSlowT0)/(n.skidSlowT1-n.skidSlowT0),0,1),o=Math.min(i,n.skidWipeLip+(n.skidWipeSlow-n.skidWipeLip)*r);return o+(i-o)*k(n.slowV1,n.slowV2,e)}spawn(t,e,n,i){return!Number.isFinite(t)||!Number.isFinite(e)||!Number.isFinite(n)||!Number.isFinite(i)?!1:(this.s=t,this.t=Gt(e,As,Sc),this.v=Gt(n,0,bc),this.hb=i,this.hv=i,this.skid=0,this.skidDecel=0,this.accel=0,this.pumpAccel=0,this.pumpLeft=0,this.stall=0,this.drive=0,this.roll=0,this.railRate=0,this.railRate1=0,this.load=0,this.pumpF=0,this.railSide=0,this.railSideAt=-1e9,this.railFlipAt=-1e9,this.railFlipSeg=1e9,this.tubeRel=0,this.tubeCoast=0,this.zoneFor=0,this.behindLip=!1,this.behindFor=0,this.frontSeen=!1,this.weight=1,this.missArmed=!0,this.aheadFor=0,this.state="riding",this.turnRate=0,this.turnRateF=0,this.boardRateF=0,this.slideAllow=0,this.vTurn=n,this.targetRateF=0,this.jerkMem=0,this.lastTarget=NaN,this.turningDown=!1,this.boostCount=0,this.boostKind="",this.boostAt=-1e9,this.boostLeft=0,this.boostTopAt=-1e9,this.boostLowAt=-1e9,this.boostHiT=this.t,this.boostCutArmed=!0,this.turnAccum=0,this.prevSwing=0,this.foamTime=0,this.foamRun=0,this.spinNet=0,this.headOnFor=0,this.stuckFor=0,this.carry=0,this.notOutFor=1e9,this.inTube=!1,this.spitRide=!1,this.tubeTime=0,this.tubeHeight=0,this.rideTime=0,this.lipUpTime=0,this.lipTime=0,this.lastPumpAt=-1e9,this.prevSin=Math.sin(i),this.peakSinUp=Math.max(0,this.prevSin),this.maxTSince=this.t,this.events.length=0,this.d=this.wave.d(t),this.wave.facePoint(this.s,this.t,this.face),!0)}drain(){if(this.events.length===0)return tS;const t=this.events;return this.events=[],t}tryLaunch(t){return!1}get lean(){return this.roll}step(t,e=Qb){if(this.state!=="riding"||!(t>0)||!Number.isFinite(t))return;const n=this.wave,i=this.pumpModel==="impulse"?Wb:Yl;this.rideTime+=t;const r=Number.isFinite(e.stall)?Gt(e.stall,0,1):0,o=e.drive!==void 0&&Number.isFinite(e.drive)?Gt(e.drive,0,1):0;this.stall=r,this.drive=o;let a,c;if(e.grip&&e.targetHeading!==null&&Number.isFinite(e.targetHeading))a=e.targetHeading,c=i.boardRate;else{const P=Math.round(this.hb/Math.PI),lt=Gt(i.handsOffTrim+i.handsOffK*(i.handsOffT-this.t),i.handsOffMin,i.handsOffMax);a=P*Math.PI+((P&1)===0?-lt:lt),c=Hb}const l=e.grip&&e.targetHeading!==null&&Number.isFinite(e.targetHeading)?e.targetHeading:NaN,h=Number.isFinite(l)&&Number.isFinite(this.lastTarget)?Math.abs(l-this.lastTarget)/t:0;this.lastTarget=l,this.targetRateF+=(h-this.targetRateF)*(1-Math.exp(-t/i.slideJerkTau));let u=a-this.hb;u>Io?u=Io:u<-Io&&(u=-Io);const d=c*t,f=u>d?d:u<-d?-d:u;this.hb+=f;const m=i.carveR*(1+.5*r),_=Sr(this.hb-this.hv),g=Math.max(this.v,1.5),p=Math.min(g/m,i.carveLat/g)*(1+$b*Math.abs(Math.sin(_)));this.carveRate=p;const v=p*t,y=_>v?v:_<-v?-v:_;this.hv+=y,this.turnRate=y/t,this.skid=Sr(this.hb-this.hv);const x=1-Math.exp(-t/Jb);this.turnRateF+=(this.turnRate-this.turnRateF)*x,this.boardRateF+=(f/t-this.boardRateF)*x;const N=1-Math.exp(-t/i.rollTau);this.railRate1+=(this.turnRate-this.railRate1)*N,this.railRate+=(this.railRate1-this.railRate)*N,this.roll=eS(this.v,this.railRate),this.turnAccum*this.railRate<0&&(this.prevSwing=Math.abs(this.turnAccum),this.turnAccum=0),this.turnAccum+=y;const w=n.facePoint(this.s,this.t,this.face),C=this.d,I=n.d(this.s);this.d=I;const T=Math.sin(this.hv),b=Math.cos(this.hv),L=this.v,z=Math.abs(Math.sin(this.skid))-i.skidFree;this.skidDecel=z>0?i.skidK*z*z*L:0;const F=this.t<=As&&T>0?i.lipClimbG*T:T;let G=1;if(this.pumpModel==="load"){const P=this.v*this.railRate/Kl;let lt=Math.min(1,(Math.sqrt(1+P*P)-1)/i.lRef);Math.abs(this.turnAccum)>i.loadMaxTurn||this.prevSwing<i.loadMinSwing?lt=0:lt*=1-k(.5*i.loadMaxSkid,i.loadMaxSkid,Math.abs(this.skid)),this.load=lt;const et=F<0?1:F>0?-1:0;G=Gt(1+i.beta*et*lt,i.wMin,i.wMax)}else this.load=0;this.weight=G;const q=this.railRate1>i.tubePumpRail0?1:this.railRate1<-i.tubePumpRail0?-1:0,K=Math.abs(this.hv-this.railSideHv);if(K>this.railSegMax&&(this.railSegMax=K),q!==0&&q!==this.railSide){if(this.railSide!==0){const P=this.railSegMax>=i.tubePumpSwing;this.railFlipSeg=P?this.rideTime-this.railSideAt:1e9,this.railFlipAt=this.rideTime}this.railSide=q,this.railSideAt=this.rideTime,this.railSideHv=this.hv,this.railSegMax=0}const Z=this.rideTime-this.railFlipAt<i.tubePumpGap&&this.railFlipSeg<i.tubePumpSeg?1:0;this.pumpF+=(Z-this.pumpF)*Tc(t,i.tubePumpTau);const H=(i.dragLin*L+i.dragQuad*L*L+(L>i.vHi?i.dragHi*(L-i.vHi)*(L-i.vHi):0))*(1-i.driveDragCut*o),st=this.inTube;let ot=-Kl*w.sinA*F*G-H-this.skidDecel-i.stallK*r*L+i.driveAccel*o;if(st||(ot-=i.foamK*L*k(0,-3,I)),!st&&I<0&&b>0&&!(e.grip&&r<.5&&L>=i.carryMinV)&&(ot-=i.foamPassiveK*L*k(0,-1,I)*(1-k(i.trimTurn0,i.trimTurn1,Math.abs(this.turnRateF)))),e.grip&&b>0&&L<i.trimV&&i.trimK>0&&this.t<i.trimT1&&T<.1&&-T<i.trimSin1&&I>-1&&r<1&&Math.abs(this.turnRateF)<i.trimTurn1){const P=k(-.1,.05,-T)*(1-k(i.trimSin0,i.trimSin1,-T))*k(-1,.5,I)*(1-k(i.trimT0,i.trimT1,this.t))*(1-k(i.trimTurn0,i.trimTurn1,Math.abs(this.turnRateF)))*(1-r)*(1-k(i.trimStall0,i.trimStall1,r));ot+=i.trimK*(i.trimV-L)*P}let _t=0;if(st){const P=k(i.tubePumpF0,i.tubePumpF1,this.pumpF),lt=e.grip?Math.max(o,P):0,et=P>=o?i.tubeWorkRel:i.tubeDriveRel,ut=Math.max(0,this.tubeCoast+t*(1-P)*(1-k(.1,.3,r))-i.tubeCoastReset*(e.grip?P:0)*t);this.tubeCoast=ut;const ct=-i.tubeNeutral0-i.tubeCoastK*ut*ut,Ct=k(i.tubeDeepF0,i.tubeDeepF1,-I/(1.5+5*n.hollow(this.s))),mt=e.grip?Math.max(i.tubeRelMin,(1-lt)*(ct-i.tubeStallRel*r*(2-r))+lt*et*(1-Ct)-i.tubeDeepSuck*Ct):i.tubeRelMin,E=i.tubeRelTau+(i.tubeWorkTau-i.tubeRelTau)*lt;if(mt>this.tubeRel){const S=ga/Math.log(1+ga/i.tubeRiseTau),B=mt-this.tubeRel,V=i.tubeRelAccel*S,J=B>V?(B-V)/i.tubeRelAccel:0;this.tubeRel+=t<=J?i.tubeRelAccel*t:B-Math.min(B,V)*Math.exp(-(t-J)/S)}else this.tubeRel+=(mt-this.tubeRel)*Tc(t,E);_t=Gt(n.peelSpeed(n.breakS)+this.tubeRel,0,i.tubeVMax),ot=Gt((Math.min(i.tubeBoardVMax,_t/Math.max(i.tubeCosMin,b))-L)*Tc(t,i.tubeVTau)/t,-i.tubeVAccel,i.tubeVAccel)}this.boostMode==="on"&&(ot+=this.boost(t,e,T,b,I,L,st,i)),this.accel=ot;let Rt=L+ot*t;if(Rt>0||(Rt=0),this.pumpAccel=0,this.pumpModel==="impulse"&&(Rt=this.impulsePump(Rt,T,b,t,i)),this.v=Rt>bc?bc:Rt,this.spinNet+=this.boardRateF*t-this.spinNet*t/i.carryOutSpinTau,I<i.carryD0||this.carry!==0){let P=0;if(I<i.carryD0&&e.grip&&!this.inTube&&b>0){const et=Is.base*b*(1-n.closeout(this.s))*k(i.carryD0,i.carryD1,I)*k(-i.carryFadeD,-i.carryMaxD,I)*k(i.carryV0,i.carryV1,L)*(1-r),ut=i.carryK*et*(1-k(i.trimTurn0,i.trimTurn1,Math.abs(this.turnRateF))),ct=i.carryOutK*et*k(-i.carryOutD0,-i.carryOutD,I)*(1-k(i.carryOutSin0,i.carryOutSin1,-T))*(1-k(i.carryOutTurn0,i.carryOutTurn1,Math.abs(this.turnRateF)))*(1-k(i.carryOutSpin0,i.carryOutSpin1,Math.abs(this.spinNet)));P=ut+Math.min(ct,Math.max(0,i.carryOutMaxV-L*b-ut))}const lt=P>this.carry?i.carryTauIn:i.carryTauOut;this.carry+=(P-this.carry)*t/(lt+t),this.carry<.001&&P===0&&(this.carry=0)}this.s+=(st?_t:L*b+this.carry)*t;let kt;if(st&&this.tubeMode==="free"){const P=k(i.tubePumpF0,i.tubePumpF1,this.pumpF);kt=this.t+-i.tubeFreeK*(1-i.tubeFreePumpCut*P)*Math.max(this.v,i.tubeFreeVMin)*T/w.m*t}else if(st)this.tubeLine=Gt(this.tubeLine-i.tubeNudge*(T-Math.sin(this.tubeHRef))*t,i.tubeLineMin,i.tubeLineMax),kt=this.t+(this.tubeLine-this.t)*(1-Math.exp(-i.tubeTK*t));else{const P=I>0?I:0,lt=I>0?i.nbCut*(1-k(i.nbCutD0,i.nbCutD1,I))*k(i.nbSin0,i.nbSin1,T)*(1-k(i.nbSin2,i.nbSin3,T))*k(i.nbT0,i.nbT1,this.t)*(1-k(i.nbTurn0,i.nbTurn1,Math.abs(this.turnRateF)))*(1-k(i.nbHol0,i.nbHol1,n.hollow(this.s))):0,et=(i.liftShoulder+(1-i.liftShoulder)*(1-lt)*Math.exp(-P/i.liftPocketL))*(1+i.liftHollow*n.power(this.s)),ut=1.2*k(1,1.1,this.t),ct=1-i.dropCut*k(i.dropSin0,i.dropSin1,-T)*(1-k(i.dropT0,i.dropT1,this.t))*(1-k(i.dropV0,i.dropV1,L)),Ct=(1-i.curtainLiftCut*k(.5,.9,n.barrelShape(this.s)))*i.liftScale*et*(n.lift(this.s,this.t)-ut)*ct*k(i.lipZeroT,i.lipTaperT,this.t)+ut,mt=-L*T/w.m-Ct/(i.liftAlongM?w.m:w.W);kt=this.t+mt*t}kt>Sc&&(kt=Sc);const Y=Math.sin(this.hb)<T-Zb||b*this.turnRateF<-.5;if(this.turningDown=Y,kt<=As?(kt=As,this.lipTime+=t,T>i.lipUpSin?Y||(this.lipUpTime+=t):this.lipUpTime=0):(this.lipTime=0,this.lipUpTime=0),this.t=kt,n.facePoint(this.s,this.t,this.face),this.d=n.d(this.s),this.t<=As){if(this.inTube&&this.tubeMode==="free")return this.inTube=!1,this.tubeWhy="edge",this.events.push({type:"tubeExit",duration:this.tubeTime,made:!1}),this.wipe("the lip took you");if(this.v<i.lipMinV&&!Y)return this.kickout("too slow at the lip");if(this.lipUpTime>i.lipUpTime)return this.kickout("over the back");if(this.lipTime>i.lipCapTime&&!Y)return this.kickout("over the back")}const Q=n.hollow(this.s),St=1.5+5*Q,it=this.d;if(!this.inTube){const P=n.barrelShape(this.s);it>=Lo&&(this.frontSeen=!0),it<Lo&&P>=i.tubeShapeIn?this.behindLip=!0:this.behindLip&&(P<.05||it>0&&P<i.tubeShapeIn)&&(this.behindLip=!1)}const Pt=!this.inTube&&!this.behindLip&&e.grip&&this.v>=i.tubeSlowV&&T<=i.tubeUpSin&&this.t>As&&this.t<.9&&it>-St&&n.closeout(this.s)<.5&&n.barrelShape(this.s)>=(this.tubeMode==="free"?i.tubeFreeShapeIn:i.tubeShapeIn)&&n.hollow(this.s+i.tubeAheadNeed)>=i.hollowLip&&ql(n,this.s,this.face.u)>=(this.tubeMode==="free"?i.tubeFreeIn:i.tubeHeadroom);if(this.zoneFor=Pt?this.zoneFor+t:0,!this.inTube)Pt&&this.zoneFor>=i.tubeEnterHold-1e-9?(this.inTube=!0,this.foamRun=0,this.tubeTime=0,this.spat=!1,this.tubeHolMax=Q,this.missArmed=!1,this.tubeRel=this.v*Math.cos(this.hv)+this.carry-n.peelSpeed(n.breakS),this.carry=0,this.tubeLine=Gt(this.t,i.tubeLineMin,i.tubeLineMax),this.tubeHRef=this.hb,this.tubeCoast=0,this.pumpF=0,this.railSide=0,this.railFlipAt=-1e9,this.events.push({type:"tubeEnter"})):n.hollow(n.breakS)<.5?(this.missArmed=!0,this.aheadFor=0):this.missArmed&&it>i.missAheadD&&n.barrelShape(n.breakS)>=i.tubeShapeIn&&(this.aheadFor=r>.1?0:this.aheadFor+t,this.aheadFor>i.missAheadTime&&(this.missArmed=!1,this.events.push({type:"tubeMiss",reason:"ran ahead"})));else{if(this.tubeTime+=t,Q>this.tubeHolMax&&(this.tubeHolMax=Q),it<=-St)return this.inTube=!1,this.tubeWhy="closed",this.events.push({type:"tubeExit",duration:this.tubeTime,made:!1}),this.wipe("barrel closed");!this.spat&&!this.spitRide&&it>-i.spitMouthD&&this.tubeHolMax>=i.spitHol&&Q>=i.spitExitHol&&n.sectionEnding(n.breakS)*(1-k(i.hollowLip,i.tubeReleaseHol,n.hollow(n.breakS)))>=.5&&this.tubeTime>=Math.max(i.spitMinTime,i.tubeMinMade)&&this.tubeRel>i.spitRel&&(this.spat=!0,this.spitRide=!0,this.events.push({type:"spit"}));const P=ql(n,this.s,this.face.u),lt=this.tubeMode==="free",et=lt?Fd(n,this.s,this.face.u):P,ut=!(et>=(lt?i.tubeFreeOut:i.tubeRoofMin)),ct=it>=i.tubeMouthD&&n.barrelShape(this.s)<=i.tubeOutShape;if(lt&&ut&&!ct&&Fd(n,this.s,Math.max(0,this.tubeLine)*n.faceWidth(this.s))>=i.tubeFreeRoom)return this.inTube=!1,this.tubeWhy="edge",this.events.push({type:"tubeExit",duration:this.tubeTime,made:!1}),this.wipe(this.t<this.tubeLine?"the lip took you":"fell out of the tube");let Ct=lt&&!(et>=i.tubeFreeOutDrawn);for(let E=0;Ct&&E<=4;E++)Bb(n,this.s+E*i.tubeFreeAhead/4,this.face.u)>0&&(Ct=!1);const mt=ct&&(!lt||ut&&Ct);if(mt||ut&&it>=ve.aheadFull&&(!lt||Ct))this.inTube=!1,this.tubeWhy=mt?"mouth":"roof",this.events.push({type:"tubeExit",duration:this.tubeTime,made:this.tubeTime>=i.tubeMinMade}),!this.spat&&!this.spitRide&&(mt||!ut)&&this.tubeHolMax>=i.spitHol&&Q>=i.spitExitHol&&this.tubeTime>=Math.max(i.spitMinTime,i.tubeMinMade)&&(this.spat=!0,this.spitRide=!0,this.events.push({type:"spit"}));else if(Q<i.tubeStayHol&&(!lt||ut&&Ct)){this.inTube=!1,this.tubeWhy="backoff";const E=-it/St<i.tubeBackOffF;return this.events.push({type:"tubeExit",duration:this.tubeTime,made:E&&this.tubeTime>=i.tubeMinMade}),E&&!this.spat&&!this.spitRide&&this.tubeHolMax>=i.spitHol&&this.tubeTime>=Math.max(i.spitMinTime,i.tubeMinMade)&&(this.spat=!0,this.spitRide=!0,this.events.push({type:"spit"})),this.spat||E?void 0:this.wipe("barrel closed")}else if(!(this.t>i.tubeStayTMin&&this.t<i.tubeStayTMax)&&(this.inTube=!1,this.tubeWhy=lt?"edge":"band",this.events.push({type:"tubeExit",duration:this.tubeTime,made:!1}),lt))return this.wipe(this.t<=i.tubeStayTMin?"the lip took you":"fell out of the tube")}this.tubeHeight=this.inTube?n.amp(this.s):0;const Bt=Math.abs(this.skid);this.vTurn=Math.max(this.v,this.vTurn-i.slideVDecay*t);const Lt=this.boardRateF,Xt=this.turnRateF;this.jerkMem=Math.abs(Lt)>=i.slideHbRate0?Math.max(this.jerkMem,this.targetRateF):this.targetRateF;const tt=_a.skidLimit(this.t,this.v),ht=Lt*Xt>0?k(i.slideHbRate0,i.slideHbRate1,Math.abs(Lt))*k(i.slideHvRate0,i.slideHvRate1,Math.abs(Xt))*k(i.slideV0,i.slideV1,this.vTurn)*(1-k(i.slideT0,i.slideT1,this.t))*(1-k(i.slideJerk0,i.slideJerk1,this.jerkMem)):0;if(this.slideAllow=Math.min(ht*(_a.skidLimit(this.t,Math.max(this.vTurn,i.slowV2))-tt+i.skidSlide),Math.max(0,i.skidSlideMax-tt)),Bt>tt+this.slideAllow)return this.wipe("caught a rail");if(this.v<zb&&Bt>Vb)return this.wipe("bogged down");if(!this.inTube){if(C>=0&&it<0){const Ct=Math.abs(Sr(this.hb-Math.PI)),mt=Math.abs(this.turnRateF)>i.foamReboundRate;if(this.v>=i.foamHardV&&Ct<=i.foamHeadOn&&!mt)return this.wipe("too hard into the foam")}const P=Math.abs(this.turnRateF)>i.foamReboundRate,lt=e.grip&&r<.5&&this.v>=i.carryMinV&&Math.cos(this.hb)>0;this.notOutFor=lt?0:this.notOutFor+t;const et=this.notOutFor<i.lipGrace;if(it<0){const Ct=Math.abs(Sr(this.hb-Math.PI));if(this.headOnFor=Ct<=i.foamHeadOn&&!P&&this.v>=i.headOnMinV?this.headOnFor+t:0,this.stuckFor=this.v<i.carryMinV||it<-i.stuckD&&!lt?this.stuckFor+t:0,this.headOnFor>i.headOnTime)return this.wipe("too hard into the foam");if(this.stuckFor>i.stuckTime)return this.wipe(this.v<i.carryMinV?"fell behind the wave":"stuck in the whitewater")}else this.headOnFor=0,this.stuckFor=0;if(this.foamRun=it<0?this.foamRun+t:0,this.foamRun>(lt?i.foamSteerTime:i.foamStuckTime))return this.wipe("stuck in the whitewater");const ut=n.barrelShape(this.s);if(this.behindFor=this.behindLip&&ut>=i.tubeShapeIn?this.behindFor+t:0,(this.frontSeen&&it<Lo&&ut>=i.tubeShapeIn||this.behindFor>i.lipLandGrace)&&this.t<i.lipLandMaxT)return this.missArmed&&(this.missArmed=!1,this.events.push({type:"tubeMiss",reason:"lip landed"})),this.wipe("the lip landed on you");if(Q>=i.hollowLip&&this.t<i.lipLandMaxT)return it<Lo&&!(et&&it>=-i.carryMaxD)?(this.missArmed&&(this.missArmed=!1,this.events.push({type:"tubeMiss",reason:"lip landed"})),this.wipe("the lip landed on you")):void 0;if(this.foamTime=it<i.foamD?this.foamTime+t:0,it<i.fellBehindD||this.foamTime>i.foamMaxTime)return this.wipe("fell behind the wave")}}boost(t,e,n,i,r,o,a,c){const l=this.rideTime;if(this.t<=c.boostTopT&&n>=c.boostSinIn&&(this.boostTopAt=l),n>.1?this.boostHiT=this.t:this.t<this.boostHiT&&(this.boostHiT=this.t),this.t>=c.boostLowT&&this.t<=c.boostBotMaxT&&n<=-c.boostBotSinIn&&this.t-this.boostHiT>=c.boostDrop&&(this.boostLowAt=l),Math.abs(this.turnAccum)<.5*c.boostCutTurn&&(this.boostCutArmed=!0),a)return this.boostLeft=0,this.boostTopAt=this.boostLowAt=-1e9,0;const h=e.grip&&r>=c.boostD0&&r<=c.boostD1&&l-this.boostAt>=c.boostGap;let u="";if(h&&(n<=-c.boostSin&&l-this.boostTopAt<=c.boostReWin&&this.t<=c.boostReMaxT&&o>=c.boostReV&&Math.abs(this.turnAccum)>=c.boostTurn?u="reentry":n>=c.boostSin&&l-this.boostLowAt<=c.boostBotWin&&this.t>=c.boostBotMinT&&this.t<=c.boostBotMaxT&&o>=c.boostBotV&&Math.abs(this.turnAccum)>=c.boostTurn?u="bottom":this.boostCutArmed&&Math.abs(this.turnAccum)>=c.boostCutTurn&&i<0&&this.vTurn>=c.boostCutV&&(u="cutback")),u!==""&&(this.boostCount++,this.boostKind=u,this.boostAt=l,this.boostLeft=c.boostDv,this.boostTopAt=this.boostLowAt=-1e9,this.boostCutArmed=!1),this.boostLeft<=0)return 0;const d=Math.min(this.boostLeft,c.boostDv/c.boostTime*t);return this.boostLeft=Math.max(0,this.boostLeft-d),d/t*(1-k(c.boostVFade,c.boostVMax,o))}impulsePump(t,e,n,i,r){e>this.peakSinUp&&(this.peakSinUp=e),this.t>this.maxTSince&&(this.maxTSince=this.t);const o=this.rideTime-this.lastPumpAt;if(this.prevSin>0&&e<=0&&n*this.turnRate<-.3&&this.t<qb&&this.peakSinUp>=Kb&&o>=Yb&&this.maxTSince-this.t>=r.pumpClimb){const a=Gt((.6-this.t)/.45,.2,1),c=o<=r.rhythmMax||this.lastPumpAt<-1e8?1:.5,l=r.pumpDv*a*c*Math.min(1,this.peakSinUp/jb);this.pumpLeft+=l,this.lastPumpAt=this.rideTime,this.peakSinUp=0,this.maxTSince=this.t,this.events.push({type:"pump",dv:l,t:this.t})}if(this.prevSin=e,this.pumpLeft>0){const a=Math.min(this.pumpLeft,r.pumpDv/Xb*i);this.pumpLeft-=a,t+=a,this.pumpAccel=a/i}return t}wipe(t){this.state="wiped",this.events.push({type:"wipe",reason:t})}kickout(t){this.state="kickedOut",this.events.push({type:"kickout",reason:t})}}const tS=[];function eS(s,t){const e=Math.atan(s*t/Kl);return Number.isFinite(e)?Gt(e,-kd,kd):0}const No=32,bn=0,kn=3,Do=6,He=7,wn=10,Hd=19,pr=22,mr=25,nS=28,gr=29,Fo=30,Ec=31,Ac=[wn,wn+3,wn+6,wn+9],Je=Math.PI/180,zd=[0,0],Vd=27,iS=50,Gd=[0,.25],ra=[.15,.086,0],oa=[-.65,.086,0],Wd=(ra[0]+oa[0])/2+.02,sS=.4,rS=.45,wc=7,oS=4.4,aS=12,cS=13.5,lS=.9,hS=28,uS=15,dS=6.5,fS=10,pS=22,mS=16,gS=6,_S=3.2,xS=14,Xd=37,qd=52,vS=.7,Kd=1.2,Yd=[.22,.33],MS=.21,yS=[.3,.3,.25,.15],bS=[.15,.3,.3,.25],jd=[0,.3,.35,.35],Uo=[.03,-.1,1],SS=[.33,-.3,1],TS=[-.25,.15,1],ES=[.03,-.2,1],AS=.17,wS=-.02,RS=.2,CS=.015,PS=.5,LS=15,IS=.5,NS=.08,DS=.08,$d=[.2,.55],FS=.035,Zd=[.3,.6],US=.86,OS=.03,BS=.15,kS=[.35,-.3,1],Lh=[-.25,.15,1],Jd=[.05,.4],HS=.06,Qd=[.35,.22],tf=[3.5,5],ef=.12,Rc=.32,nf=.6,zS=.22,VS=.12,GS=.04,Oo=[.24,.34,.4,.52],WS=.16,XS=.016,qS=.66,pm=[.3,-.4,1],sf=[1.4,1.8],mm={uaF:[.7,-.45,.55],faF:[.8,-.2,.55]},gm={uaF:[-.25,-.4,-.88],faF:[-.4,-.3,-.87]},KS=[.9,-.56,.12],YS=[.75,-.65,.15],jS=[.9,-.45,.12],$S=[.85,-.45,.15],ZS=.35,JS=.06,QS=[.3,-.9,.3],t1=[0,-.95,.35],jl=s=>.8175-.25*Gt(s,0,1),Ln=new R(0,1,0),rf=new he,Ei=new he,of=new R;function $l(s,t,e,n,i,r,o){return rf.setFromUnitVectors(Ln,i),o.identity().slerp(rf,yS[s]),Ei.setFromAxisAngle(i,r*bS[s]),o.premultiply(Ei),s===0?(Ei.setFromAxisAngle(Ln,t),o.premultiply(Ei)):(Ei.setFromAxisAngle(Ln,e*jd[s]),o.premultiply(Ei),of.set(Math.cos(t),0,-Math.sin(t)),Ei.setFromAxisAngle(of,n*jd[s]),o.premultiply(Ei))}const af=new he;function e1(s,t,e,n,i,r){return $l(0,s,t-s,e,n,i,af),$l(3,s,t-s,e,n,i,r),r.multiply(af)}class Gn{constructor(){M(this,"hipY",0);M(this,"shift",0);M(this,"pel",0);M(this,"chy",0);M(this,"curl",0);M(this,"chest",new Float64Array(3));M(this,"look",new Float64Array(3));M(this,"knF",new Float64Array(3));M(this,"knB",new Float64Array(3));M(this,"armC",new Float64Array(12));M(this,"armM",new Float64Array(12));M(this,"wM",0)}}function Ns(s,t){s.hipY=t.hipY,s.shift=t.shift,s.pel=t.pel,s.chy=t.chy,s.curl=t.curl,s.wM=t.wM,s.chest.set(t.chest),s.look.set(t.look),s.knF.set(t.knF),s.knB.set(t.knB),s.armC.set(t.armC),s.armM.set(t.armM)}function Rn(s,t,e){for(let n=0;n<s.length;n++)s[n]+=(t[n]-s[n])*e}function Sn(s,t,e,n=e){if(e>0&&(s.hipY+=(t.hipY-s.hipY)*e,s.shift+=(t.shift-s.shift)*e,s.pel+=(t.pel-s.pel)*e,s.chy+=(t.chy-s.chy)*e,s.curl+=(t.curl-s.curl)*e,Rn(s.chest,t.chest,e),Rn(s.look,t.look,e),Rn(s.knF,t.knF,e),Rn(s.knB,t.knB,e)),n>0){const i=(1-s.wM)*(1-n),r=(1-t.wM)*n,o=s.wM*(1-n),a=t.wM*n,c=i+r,l=o+a;for(let h=0;h<12;h++)s.armC[h]=c>1e-9?(s.armC[h]*i+t.armC[h]*r)/c:t.armC[h],s.armM[h]=l>1e-9?(s.armM[h]*o+t.armM[h]*a)/l:t.armM[h];s.wM=l}}function Jt(s,t,e,n=!0){const i=n&&Math.hypot(e[0],e[1],e[2])||1;s[t]=e[0]/i,s[t+1]=e[1]/i,s[t+2]=e[2]/i}function cs(s){const t=new Gn,e=s.drop??0;t.hipY=jl(s.crouch)-e,t.shift=s.shift??0,t.pel=s.pelvis*Je,t.chy=s.chest*Je,t.curl=(s.curl??0)*Je;const n=s.lean*Je,i=new R(.5*Math.sin((s.side??0)*Je),Math.cos(n),Math.sin(n)).normalize();Jt(t.chest,0,[i.x,i.y,i.z]);const r=new he().setFromUnitVectors(Ln,i),o=i.clone().applyAxisAngle(Ln,t.pel),a=new he().setFromAxisAngle(o,t.chy-t.pel),c=new he().setFromAxisAngle(Ln,t.pel).premultiply(a).multiply(r),l=s.head*Je,h=(s.pitch??0)*Je,u=new R(Math.sin(l)*Math.cos(h),Math.sin(h)-.15,Math.cos(l)*Math.cos(h)).normalize().applyQuaternion(c);u.y+=Math.sin(n)*.8,u.normalize(),Jt(t.look,0,[u.x,u.y,u.z]);const d=s.beach?t.armM:t.armC;Jt(d,0,s.uaF),Jt(d,3,s.faF),Jt(d,6,s.uaB),Jt(d,9,s.faB),t.wM=s.beach?1:0;const f=Math.min(1,s.crouch+e*3);return Jt(t.knF,0,[.12+.1*s.kneeF[0],.15,1],!1),Jt(t.knB,0,[.6,-.2-.5*f,.5+.2*s.kneeB[0]],!1),t}const Ih={uaF:[.8,-.55,.25],faF:[.85,-.3,.45],uaB:[-.5,-.5,-.75],faB:[-.45,-.4,-.8]},_m={uaF:[.45,-.55,-.7],faF:[.4,-.45,-.8],uaB:[-.35,-.75,-.55],faB:[-.2,-.65,-.75]},n1=[{crouch:.85,drop:.08,pelvis:5,chest:0,lean:25,head:30,pitch:15,...Ih,uaF:[.7,-.65,.3],faF:[.8,-.5,.35],kneeF:[.35,0,1],kneeB:[.35,0,1]},{crouch:1,drop:.13,shift:.06,pelvis:20,chest:40,lean:30,head:42,pitch:20,uaF:[.6,-.5,.6],faF:[.65,-.25,.7],uaB:[-.3,-.9,.25],faB:[-.35,-.85,.3],kneeF:[.7,0,1],kneeB:[.6,0,1]},{crouch:.5,pelvis:15,chest:50,lean:15,head:15,pitch:20,beach:!0,..._m,kneeF:[.4,0,1],kneeB:[.4,0,1]}],Nh=[{crouch:1,drop:.08,pelvis:0,chest:-10,lean:25,head:35,pitch:-15,...Ih,uaB:[-.5,-.55,-.7],faB:[-.45,-.4,-.8],kneeF:[.4,0,1],kneeB:[.4,0,1]},{crouch:1,drop:.05,shift:-.05,pelvis:40,chest:80,lean:20,side:-5,head:20,pitch:-25,uaF:[.7,-.45,.55],faF:[.8,-.2,.55],uaB:[-.6,.6,-.35],faB:[-.45,.85,-.1],kneeF:[.3,0,1],kneeB:[.25,0,1]},{crouch:.7,pelvis:25,chest:40,lean:25,head:30,pitch:-10,beach:!0,..._m,kneeF:[.4,0,1],kneeB:[.4,0,1]}],i1=.675,xm=[.12,-.15,1],s1=[.6,-.5,1],r1=.19,o1=18,vm=[{crouch:.85,drop:.08,pelvis:0,chest:-10,lean:25,head:40,pitch:-5,...Ih,uaF:[.7,-.35,.6],faF:[.75,-.1,.65],kneeF:[.4,0,1],kneeB:[.4,0,1]},{crouch:1,drop:.13,shift:-.06,pelvis:30,chest:85,lean:0,side:-10,head:30,pitch:-20,uaF:[.75,-.3,.55],faF:[.8,-.05,.55],uaB:[-.6,.6,-.35],faB:[-.45,.85,-.1],kneeF:[.25,0,1],kneeB:[.2,0,1]},{crouch:1,drop:.08,pelvis:15,chest:35,lean:25,head:25,pitch:5,beach:!0,uaF:[.7,-.8,-.3],faF:[.75,-.6,-.45],uaB:[-.3,-.85,-.4],faB:[-.15,-.8,-.5],kneeF:[.45,0,1],kneeB:[.45,0,1]}],Mm={uaB:[-.7,-.3,-.6],faB:[-.55,-.3,-.75]},a1={uaB:[-.55,-.5,-.6],faB:[-.4,-.45,-.75]},c1={crouch:1,drop:.235,pelvis:25,chest:55,lean:65,side:25,curl:50,head:30,pitch:10,beach:!0,uaF:[.85,-.45,.25],faF:[.95,-.1,.25],uaB:[.7,-.7,-.1],faB:[.95,-.3,-.15],kneeF:[.6,0,1],kneeB:[.6,0,1]},es=n1.map(cs),Cc=Nh.map(cs),Ir=vm.map(cs),l1=cs({...Nh[1],...Mm}),h1=cs({...Nh[1],...a1}),ym=cs({...vm[1],...Mm}),bm=cs(c1),Dh=new Float64Array(6),Fh=new Float64Array(6);Jt(Dh,0,mm.uaF);Jt(Dh,3,mm.faF);Jt(Fh,0,gm.uaF);Jt(Fh,3,gm.faF);for(const s of[...Ir,ym])Jt(s.knB,0,s===Ir[0]?s1:xm,!1),Jt(s.knF,0,Lh,!1);for(const s of[es[0],es[1]])Jt(s.knB,0,kS,!1);for(const s of es)Jt(s.knF,0,Lh,!1);Jt(es[2].knB,0,pm,!1);Jt(bm.knB,0,[.6,0,.7],!1);const Uh=(()=>{const s=new Gn;return s.pel=6*Je,s.chy=30*Je,Jt(s.chest,0,[0,1,.45]),Jt(s.look,0,[1,-.15,.35]),Jt(s.armM,0,[.1,-.98,.3]),Jt(s.armM,3,[.75,-.45,.35]),Jt(s.armM,6,[-.2,-.98,.02]),Jt(s.armM,9,[-.15,-.97,.06]),s.wM=1,s})(),u1=(()=>{const s=new Gn;return Ns(s,Uh),Jt(s.armM,0,[.7,-.5,.5]),Jt(s.armM,3,[.8,-.45,.4]),Jt(s.armM,6,[-.7,-.5,.5]),Jt(s.armM,9,[-.8,-.45,.4]),s})(),d1=(()=>{const s=new Gn;return Ns(s,Uh),Jt(s.armM,6,[-.3,-.9,.5]),Jt(s.armM,9,[-.2,-.9,.4]),s})();class f1{constructor(t){M(this,"root");M(this,"meshes");M(this,"b");M(this,"controlled");M(this,"restQ");M(this,"spine");M(this,"pelvisParentInv",new Vt);M(this,"thighOff",[]);M(this,"legLen",[]);M(this,"headTopLocal",new R);M(this,"jointBone");M(this,"x",new Float64Array(No));M(this,"v",new Float64Array(No));M(this,"tgt",new Float64Array(No));M(this,"fresh",!0);M(this,"cs",1);M(this,"active",!1);M(this,"manSign",0);M(this,"kB",0);M(this,"kS",0);M(this,"kC",0);M(this,"pkT",0);M(this,"held",0);M(this,"retT",9);M(this,"tubeLin",0);M(this,"upGate",0);M(this,"climb",0);M(this,"kicked",!1);M(this,"kickT",9);M(this,"kickEnv",0);M(this,"foldEnv",0);M(this,"landW",0);M(this,"cutW",0);M(this,"heel",0);M(this,"windW",0);M(this,"drvW",0);M(this,"kissAge",0);M(this,"ldW",0);M(this,"drvR",0);M(this,"handW",0);M(this,"handT",0);M(this,"tallW",1);M(this,"tallQ",1);M(this,"openW",0);M(this,"midF");M(this,"midB");M(this,"qH",new he);M(this,"hv",new R);M(this,"cur",new Gn);M(this,"phS",new Gn);M(this,"phP",new Gn);M(this,"phR",new Gn);M(this,"pkS",new Gn);M(this,"pkC",new Gn);M(this,"rootInv",new Vt);M(this,"qR",new he);M(this,"qRi",new he);M(this,"q1",new he);M(this,"q2",new he);M(this,"qw",new he);M(this,"qp",new he);M(this,"qC",new he);M(this,"qCi",new he);M(this,"s3",new R);M(this,"p3",new R);M(this,"va",new R);M(this,"vb",new R);M(this,"vc",new R);M(this,"vd",new R);M(this,"ve",new R);M(this,"vf",new R);M(this,"vg",new R);M(this,"H",new R);M(this,"K",new R);M(this,"E",new R);M(this,"T",new R);M(this,"aA",new R);M(this,"aB",new R);M(this,"qa",new he);M(this,"side",new R);M(this,"footP",new R);M(this,"armPrev",[new R(1,0,0),new R(1,0,0),new R(-1,0,0),new R(-1,0,0)]);M(this,"armM",[new R,new R,new R,new R]);M(this,"armFresh",!0);M(this,"armTurnMax",wc);M(this,"fwd",new R);M(this,"headFaceLocal",new R);M(this,"hingeLocal",[new R,new R]);M(this,"pelLatLocal",new R);M(this,"pelLat",new R);this.root=t.root,this.meshes=t.meshes;const e=["clavicle_l","pelvis","spine_01","spine_02","spine_03","neck_01","Head","upperarm_l","lowerarm_l","hand_l","upperarm_r","lowerarm_r","hand_r","thigh_l","calf_l","foot_l","ball_l","thigh_r","calf_r","foot_r","ball_r"];this.b={};for(const a of e)this.b[a]=t.bone(a);this.controlled=e.map(a=>this.b[a]),this.restQ=this.controlled.map(a=>a.quaternion.clone()),this.spine=[this.b.pelvis,this.b.spine_01,this.b.spine_02,this.b.spine_03],this.root.position.set(0,0,0),this.root.quaternion.identity(),this.root.scale.set(1,1,1),this.root.updateMatrixWorld(!0),this.pelvisParentInv.copy(this.b.pelvis.parent.matrixWorld).invert();const n=new R().setFromMatrixPosition(this.b.pelvis.matrixWorld);for(const a of["l","r"]){const c=new R().setFromMatrixPosition(this.b["thigh_"+a].matrixWorld),l=new R().setFromMatrixPosition(this.b["calf_"+a].matrixWorld),h=new R().setFromMatrixPosition(this.b["foot_"+a].matrixWorld);this.thighOff.push(c.clone().sub(n)),this.legLen.push(c.distanceTo(l)+l.distanceTo(h))}for(let a=0;a<2;a++){const c=new he;this.b[a===0?"thigh_l":"thigh_r"].matrixWorld.decompose(new R,c,new R),this.hingeLocal[a].set(1,0,0).applyQuaternion(c.invert())}{const a=new he;this.b.pelvis.matrixWorld.decompose(new R,a,new R),this.pelLatLocal.set(1,0,0).applyQuaternion(a.invert())}const i=this.b.Head,r=new he;i.matrixWorld.decompose(new R,r,new R),this.headTopLocal.set(0,MS,0).applyQuaternion(r.invert()),this.headFaceLocal.set(0,0,1).applyQuaternion(r);const o=a=>{let c;return this.b["hand_"+a].traverse(l=>{l.name==="middle_03_"+a&&(c=l)}),c??this.b["hand_"+a]};this.midF=o("l"),this.midB=o("r"),this.jointBone={hip:this.b.pelvis,chest:this.b.spine_03,headTop:this.b.Head,shoulderF:this.b.upperarm_l,shoulderB:this.b.upperarm_r,handF:this.b.hand_l,handB:this.b.hand_r,kneeF:this.b.calf_l,kneeB:this.b.calf_r,ankleF:this.b.foot_l,ankleB:this.b.foot_r}}setStance(t){this.cs=t<0?-1:1,this.root.scale.z=this.cs}reset(){this.fresh=!0,this.armFresh=!0,this.active=!1,this.manSign=0,this.pkT=0,this.held=0,this.retT=9,this.tubeLin=0,this.climb=0,this.kicked=!1,this.kickT=9,this.kickEnv=0,this.foldEnv=0,this.landW=0,this.cutW=0,this.heel=0,this.windW=0,this.kissAge=0,this.handT=0,this.handW=0,this.tallW=1,this.root.position.set(0,0,0),this.root.quaternion.identity()}joint(t,e){const n=this.jointBone[t];return t==="headTop"?e.copy(this.headTopLocal).applyMatrix4(n.matrixWorld):e.setFromMatrixPosition(n.matrixWorld)}phases(t,e){const n=Number.isFinite(t.turn)?t.turn:0,i=Number.isFinite(t.intent)?t.intent:0,r=Number.isFinite(t.hb)?t.hb:0,o=k(1,1.8,Math.abs(i)),a=k(1,1.8,Math.abs(n)),c=Math.sign(i),l=Math.sign(n),h=o>.5?c:a>.5?l:0;if(h!==0&&(h!==this.manSign||!this.active)){this.manSign=h,this.active=!0,this.pkT=0,this.held=0,this.retT=9;const p=Math.max(Gt(-Math.cos(r)/.4,0,1),h<0?k(-.3,-.8,r):0);this.kC=p,this.kB=h>0?1-p:0,this.kS=h<0?1-p:0,this.upGate=p+(1-p)*k(.4,.28,Number.isFinite(t.t)?t.t:.5),this.climb=h<0?(1-p)*k(.15,.45,r):0,this.kicked=!1}if(!this.active)return{load:0,peak:0,ret:0,up:0};const u=c===this.manSign?o:0,d=l===this.manSign?1:0,f=u*(1-k(.3,1.2,Math.abs(n))),m=Math.max(u*k(.4,1.4,Math.abs(n)),a)*d;m>.5?(this.pkT+=e,this.held=Math.max(this.held,k(.1,.25,this.pkT)),this.retT=0):(m<.2&&(this.pkT=0),this.held>0&&(this.retT+=e));const _=this.held*k(Kd,vS,this.retT);this.retT>Kd&&(this.held=0),f<.01&&m<.01&&_<.01&&o<.5&&(this.active=!1);const g=1-k(Yd[0],Yd[1],this.pkT);return{load:f,peak:m,ret:_,up:g}}headLook(t,e){const n=Number.isFinite(t.turn)?t.turn:0,i=Number.isFinite(t.t)?t.t:.5,r=Number.isFinite(t.intent)?t.intent:0,o=Number.isFinite(t.hb)?t.hb:0,a=k(1,2,Math.abs(n)),c=(n>0?a:0)*(.45+.55*k(.3,.8,i)),l=(n<0?a:0)*(.45+.55*(1-k(.15,.55,i)));En(e,He,Pc[0],Pc[1],Pc[2]),c>0&&Bo(e,He,p1,c),l>0&&Bo(e,He,m1,l);const h=Gt(-Math.cos(o)/.4,0,1)*k(1,1.8,Math.abs(r));h>0&&Bo(e,He,[-Math.cos(o),0,Math.sin(o)*this.cs],.8*h);const u=k(0,1,this.tubeLin);u>0&&Bo(e,He,g1,u);const d=_1*Gt(r/2.2,-1,1)*(1-u),f=Math.cos(d),m=Math.sin(d),_=e[He],g=e[He+2];e[He]=_*f+g*m,e[He+2]=-_*m+g*f}kinds(t,e,n,i){Ns(t,e);const r=this.kB+this.kS;this.kS>0&&r>0&&Sn(t,n,this.kS/r),this.kC>0&&Sn(t,i,this.kC)}drive(t,e,n){const i=this.tgt,r=this.cur,o=t.wipeT>=0;let a=0;if(this.drvW=0,this.ldW=0,this.kickEnv=0,o){this.handW=0,this.openW=0;const d=t.wipeT,f=k(.25,.45,d);r.pel=0,r.chy=0,r.curl=0,r.wM=1,Jt(r.armM,0,[1-.7*f,-.15-.85*f,.3]),Jt(r.armM,3,[1-.6*f,-.1-.9*f,.25]),Jt(r.armM,6,[1-1.2*f,-.1+.7*f,.45]),Jt(r.armM,9,[1-.7*f,-.05+.95*f,.3]),Jt(r.look,0,[1,-.2,.3]),Jt(r.knF,0,[.4,.3,1]),Jt(r.knB,0,[.2,.3,1]),En(i,bn,Wd,jl(1)-.05,0),En(i,kn,-.3+.9*f,1,.4),i[Do]=.2}else{Ns(r,Uh),r.hipY=jl(t.crouch)+this.tallW*(AS+RS*(Gt(t.crouch,0,1)-.3));const d=Gt(t.crouch,0,1);Jt(r.knF,0,[.05,.15,1],!1),Jt(r.knB,0,[Uo[0],Uo[1]-.15*d,Uo[2]],!1),Sn(r,u1,0,k(.4,.7,Gt(t.spread,0,1))),a=Gt(t.stall,0,1),Sn(r,d1,0,.6*a),this.tubeLin=t.inTube?Math.min(1,this.tubeLin+n/sS):Math.max(0,this.tubeLin-n/rS);const f=k(0,1,this.tubeLin),m=1-f,_=this.phases(t,n);if(_.ret>0||_.load>0||_.peak>0){Ns(this.pkS,h1),Sn(this.pkS,l1,0,this.upGate),Sn(this.pkS,Cc[1],_.up*this.upGate),Ns(this.pkC,ym),Sn(this.pkC,Ir[1],_.up),this.kinds(this.phR,es[2],Cc[2],Ir[2]),this.kinds(this.phS,es[0],Cc[0],Ir[0]),this.kinds(this.phP,es[1],this.pkS,this.pkC);const K=this.kS*(1-this.climb);if(K>0)for(const H of[this.phR,this.phS,this.phP])Rn(H.knB,Uo,K);const Z=this.climb;if(Z>0)for(let H=0;H<6;H++)this.phP.armC[H]+=(Dh[H]-this.phP.armC[H])*Z,this.phR.armM[H]+=(Fh[H]-this.phR.armM[H])*Z;Sn(r,this.phR,_.ret*m),Sn(r,this.phS,_.load*m),Sn(r,this.phP,_.peak*m)}const g=m*(1-Math.max(_.load,_.peak,_.ret))*(1-k(.4,.7,Gt(t.spread,0,1)));this.handT+=(g-this.handT)*(1-Math.exp(-n/(g>this.handT?ZS:JS))),this.handW=Math.min(1,this.handT+f);const p=1-Math.max(_.load,_.peak,_.ret);this.tallQ=.4+.6*this.held,this.tallW+=(p-this.tallW)*(1-Math.exp(-n/(p>this.tallW?PS*this.tallQ:DS)));const v=Number.isFinite(t.hb)?t.hb:0,y=this.active||_.ret>0?this.kB*Math.max(_.load,_.peak,_.ret)*m:0,x=k($d[0],$d[1],v);this.kissAge=y*(1-x)>.3?this.kissAge+n:0;const N=y*(1-x)*(1-k(Zd[0],Zd[1],this.kissAge)),w=y*x*k(Jd[0],Jd[1],Math.abs(Number.isFinite(t.turn)?t.turn:0));this.drvR=Math.min(w,this.drvR+n/OS);const C=this.drvR;this.drvW=C;const I=this.landW=this.kickT<9?k(ef,Rc,this.kickT)*(1-k(sf[0],sf[1],this.kickT))*m:0;if(this.ldW=y*(1-x)*(1-I),N>0&&(r.hipY-=FS*N,Rn(r.knB,SS,N),Rn(r.knF,TS,N)),I>0&&(r.hipY+=Math.max(0,qS-r.hipY)*I,Rn(r.knB,pm,I*k(Rc,nf,this.kickT))),C>0&&(r.hipY+=(US-r.hipY)*C,Rn(r.knB,ES,C)),this.active&&!this.kicked&&this.kS>.5&&this.manSign<0){const K=Number.isFinite(t.t)?t.t:.5,Z=Number.isFinite(t.turn)?t.turn:0;this.climb*k(Qd[0],Qd[1],K)*k(tf[0],tf[1],-Z)>.5&&(this.kicked=!0,this.kickT=0)}this.kickT<9&&(this.kickT+=n),this.kickEnv=k(0,ef,this.kickT)*(1-k(Rc,nf,this.kickT))*m,this.foldEnv=this.kickT<9?k(Oo[0],Oo[1],this.kickT)*(1-k(Oo[2],Oo[3],this.kickT))*m:0;const T=Math.max(Gt(-Math.cos(v)/.4,0,1),k(-.95,-1.4,v)),b=this.active||_.ret>0?Math.min(1,Math.max(k(.75,.9,this.kC),k(.25,.45,this.kC)*k(-.45,-.65,v))+this.kS*(1-this.climb)*T)*Math.max(_.load,_.peak,_.ret)*m:0;this.cutW=b;const L=o1*Je*b*Math.max(_.peak,_.ret);this.heel+=(L-this.heel)*(1-Math.exp(-n/.25)),b>0&&(r.hipY+=(i1-r.hipY)*b,Rn(r.knB,xm,b),Rn(r.knF,Lh,b)),f>0&&Sn(r,bm,f,k(.5,1,this.tubeLin));const z=a*m,F=m*(1-Math.max(_.load,_.peak,_.ret)),G=this.active&&this.kS>.5&&this.manSign<0&&!this.kicked?this.climb*_.peak*m:0;this.windW=G,En(i,bn,Wd+wS*F+BS*this.ldW+r1*this.cutW-.13*z*(1-.8*this.tallW)-HS*this.drvW,r.hipY,r.shift);const q=(1-Math.max(_.load,_.peak,_.ret))*m;this.openW+=(q-this.openW)*(1-Math.exp(-n/(q>this.openW?IS:NS))),En(i,kn,r.chest[0]-.25*z,r.chest[1],r.chest[2]),i[Do]=0}En(i,He,r.look[0],r.look[1],r.look[2]),o||this.headLook(t,i),En(i,pr,r.knF[0],r.knF[1],r.knF[2]),En(i,mr,r.knB[0],r.knB[1],r.knB[2]),i[nS]=0,i[gr]=r.pel,i[Fo]=r.chy,i[Ec]=r.curl;const c=this.fresh?i:this.x;this.vc.set(c[kn],c[kn+1],c[kn+2]).normalize(),e1(c[gr],c[Fo],c[Ec],this.vc,c[Do],this.qCi).invert();for(let d=0;d<4;d++){const f=3*d,m=this.vd.set(r.armM[f],r.armM[f+1],r.armM[f+2]).applyQuaternion(this.qCi),_=this.ve.set(r.armC[f],r.armC[f+1],r.armC[f+2]).multiplyScalar(1-r.wM).addScaledVector(m,r.wM);_.lengthSq()<1e-8&&_.copy(m),_.normalize(),En(i,Ac[d],_.x,_.y,_.z)}const l=this.root.parent;if(this.handW>0&&l){l.matrixWorld.decompose(this.p3,this.qH,this.s3);const d=Gt(this.hv.set(1,0,0).applyQuaternion(this.qH).x/.3,-1,1);this.qH.invert();const f=k(0,1,this.tubeLin);for(let m=0;m<4;m++){if((m&1)===0&&f<=0)continue;const _=m===0?QS:m===1?KS:m===2?t1:YS,g=m===1?jS:m===3?$S:_,p=this.hv.set((_[0]+(g[0]-_[0])*f)*d,_[1]+(g[1]-_[1])*f,_[2]+(g[2]-_[2])*f).normalize().applyQuaternion(this.qH);p.z*=this.cs,p.applyQuaternion(this.qCi);const v=Ac[m],y=(m&1)===0?f:this.handW;this.ve.set(i[v]+(p.x-i[v])*y,i[v+1]+(p.y-i[v+1])*y,i[v+2]+(p.z-i[v+2])*y),this.ve.lengthSq()>1e-6&&(this.ve.normalize(),En(i,v,this.ve.x,this.ve.y,this.ve.z))}}o||(cf(i,wn,wn+3,Xd+4),cf(i,wn+6,wn+9,qd+4));const h=this.x,u=this.v;if(this.fresh)h.set(i),u.fill(0),this.fresh=!1;else{for(let g=0;g<No;g++){if(g>=wn&&g<Hd+3)continue;const p=o?9:g===bn+1&&this.tubeLin===0&&i[g]>h[g]&&this.drvW<.05&&this.tallW<.98&&this.landW===0?_S/this.tallQ:g===bn+1&&this.windW>.5&&i[g]<h[g]?xS:g>=He&&g<He+3?hS:g===Fo?uS:g===gr?dS:(g===bn+1||g>=kn&&g<kn+3)&&this.tubeLin===0?gS:g>=pr&&g<mr+3?pS:g===bn&&this.ldW+this.cutW>.05?mS:fS,v=Math.exp(-p*n),y=h[g]-i[g],x=u[g]+y*p;h[g]=i[g]+(y+x*n)*v,u[g]=(u[g]-x*p*n)*v}const d=o?28:aS,f=o?1:lS,m=Math.max(1,Math.ceil(n/(1/120))),_=n/m;for(let g=0;g<m;g++)for(let p=wn;p<Hd+3;p++){const v=!o&&p<wn+6?cS:d;u[p]+=(v*v*(i[p]-h[p])-2*f*v*u[p])*_,h[p]+=u[p]*_}}if(this.armTurnMax=o?25:wc,o){const d=t.wipeT;t.wipeKind===2?this.root.position.set(-.5*d,e+.9*d-.6*d*d,-.9*d*this.cs):this.root.position.set(1.6*d,e+.5*d-.8*d*d,.35*d*this.cs),this.q1.setFromAxisAngle(this.vc.set(0,0,1),(t.wipeKind===2?1.2:-2.2)*Math.min(1,d)),this.root.quaternion.copy(this.q1)}else this.root.position.set(0,e,0),this.root.quaternion.identity();this.solve(o?Math.min(1,t.wipeT*3):0,t.wipeT,n),this.armFresh=!1}solve(t,e,n){const i=this.x,r=this.b;for(let v=0;v<this.controlled.length;v++)this.controlled[v].quaternion.copy(this.restQ[v]);const o=zS*this.kickEnv+VS*this.foldEnv;let a=i[bn+1]+WS*this.kickEnv-GS*this.foldEnv;const c=.95+CS*Math.max(this.tallW,this.drvW),l=c+XS*this.kickEnv,h=this.va.set(ra[0],ra[1],ra[2]),u=this.vb.set(oa[0],oa[1],oa[2]);t>0&&(h.x+=.2*t*Math.sin(6*e),h.y+=.3*t*(.6+.4*Math.sin(8*e)),h.z+=.2*t*Math.sin(5*e),u.x-=.15*t*Math.cos(7*e),u.y+=.25*t*(.6+.4*Math.cos(9*e)),u.z-=.2*t*Math.sin(4*e+1));for(let v=0;v<2;v++){const y=v===0?h:u,x=this.thighOff[v],N=i[bn]+o+x.x-y.x,w=i[bn+2]+x.z-y.z,C=this.legLen[v]*(v===1?l:c),I=y.y+Math.sqrt(Math.max(.01,C*C-N*N-w*w))-x.y;a>I&&(a=I)}r.pelvis.position.set(i[bn]+o,a,i[bn+2]).applyMatrix4(this.pelvisParentInv),this.root.updateMatrixWorld(!0),this.rootInv.copy(this.root.matrixWorld).invert(),this.root.matrixWorld.decompose(this.p3,this.qR,this.s3),this.qRi.copy(this.qR).invert();const f=this.vc.set(i[kn],i[kn+1],i[kn+2]).normalize(),m=i[gr],_=i[Fo]-i[gr];for(let v=0;v<4;v++)$l(v,m,_,i[Ec],f,i[Do],this.q2),v===0&&this.qC.copy(this.q2),v===3&&this.qC.premultiply(this.q2),this.rotateModel(this.spine[v],this.q2,v===0||v===3);this.heel>1e-4&&t===0&&(this.q1.setFromAxisAngle(this.vf.set(1,0,0),-this.heel),this.rotateModel(this.spine[0],this.q1,!0),this.qC.premultiply(this.q1)),this.openW>.001&&t===0&&(this.q1.setFromAxisAngle(this.vf.copy(Ln).applyQuaternion(this.qC).add(Ln).normalize(),LS*Je*this.openW),this.rotateModel(r.spine_03,this.q1,!0)),r.Head.matrixWorld.decompose(this.p3,this.qw,this.s3),this.fwd.copy(this.headFaceLocal).applyQuaternion(this.qw).applyQuaternion(this.qRi);const g=this.vd.set(i[He],i[He+1],i[He+2]).normalize();this.q1.setFromUnitVectors(this.fwd,g),this.q2.identity().slerp(this.q1,.5),this.rotateModel(r.neck_01,this.q2,!0),this.rotateModel(r.Head,this.q2,!0),r.pelvis.matrixWorld.decompose(this.p3,this.qw,this.s3),this.pelLat.copy(this.pelLatLocal).applyQuaternion(this.qw).applyQuaternion(this.qRi),this.q1.setFromAxisAngle(Ln,(zd[0]+Gd[0]*this.cutW)*m),this.twoBone(r.thigh_l,r.calf_l,r.foot_l,h,this.ve.set(i[pr],i[pr+1],i[pr+2]).applyQuaternion(this.q1),this.hingeLocal[0]),this.q1.setFromAxisAngle(Ln,(zd[1]+Gd[1]*this.cutW)*m),this.twoBone(r.thigh_r,r.calf_r,r.foot_r,u,this.ve.set(i[mr],i[mr+1],i[mr+2]).applyQuaternion(this.q1),this.hingeLocal[1]),this.aim(r.foot_l,r.ball_l,this.ve.set(.3,-.5,1).normalize()),this.aim(r.foot_r,r.ball_r,this.ve.set(-.05,-.5,1).normalize());for(let v=0;v<4;v++)this.armM[v].copy(this.armDir(v,Ac[v],n)).applyQuaternion(this.qC);this.fwd.set(0,0,1).applyQuaternion(this.qC),t===0&&e<0&&(this.soften(this.armM[0],this.armM[1],Xd),this.soften(this.armM[2],this.armM[3],qd)),this.aim(r.upperarm_l,r.lowerarm_l,this.armM[0]),this.aim(r.lowerarm_l,r.hand_l,this.armM[1]),this.aim(r.upperarm_r,r.lowerarm_r,this.armM[2]),this.aim(r.lowerarm_r,r.hand_r,this.armM[3]);const p=this.handW;if(p>0)for(let v=0;v<2;v++){const y=v===0?r.hand_l:r.hand_r,x=v===0?this.midF:this.midB;if(x===y)continue;const N=this.mpos(y,this.aA),w=this.vd.setFromMatrixPosition(x.matrixWorld).applyMatrix4(this.rootInv).sub(N).normalize();w.lerp(this.armM[v===0?1:3],p).normalize(),this.aimTo(y,x,w)}}aimTo(t,e,n){const i=this.mpos(t,this.aA),r=this.aB.setFromMatrixPosition(e.matrixWorld).applyMatrix4(this.rootInv).sub(i).normalize();this.qa.setFromUnitVectors(r,n),this.rotateModel(t,this.qa,!0)}soften(t,e,n){const i=Gt(t.dot(e),-1,1),r=n*Je;if(Math.acos(i)>=r)return;const o=this.vd.copy(this.fwd).addScaledVector(t,-this.fwd.dot(t));o.lengthSq()<.05&&o.copy(Ln).addScaledVector(t,-t.y),o.normalize();const a=this.vf.copy(e).addScaledVector(t,-i),c=a.length();a.addScaledVector(o,.1*(1-k(.05,.25,c))),a.lengthSq()<1e-10&&a.copy(o),a.normalize(),e.copy(t).multiplyScalar(Math.cos(r)).addScaledVector(a,Math.sin(r))}armDir(t,e,n){const i=this.ve.set(this.x[e],this.x[e+1],this.x[e+2]);i.lengthSq()<1e-10&&i.copy(this.armPrev[t]),i.normalize();const r=this.armPrev[t];if(this.armFresh)return r.copy(i);const o=r.angleTo(i),a=(t<2&&this.armTurnMax===wc?oS:this.armTurnMax)*n;return o>a&&(this.qa.setFromUnitVectors(r,i),this.q2.identity().slerp(this.qa,a/o),i.copy(r).applyQuaternion(this.q2)),r.copy(i)}mpos(t,e){return e.setFromMatrixPosition(t.matrixWorld).applyMatrix4(this.rootInv)}rotateModel(t,e,n){const i=t.parent;t.matrixWorld.decompose(this.p3,this.qw,this.s3),i.matrixWorld.decompose(this.p3,this.qp,this.s3),this.qw.premultiply(this.qRi).premultiply(e).premultiply(this.qR),t.quaternion.copy(this.qp.invert().multiply(this.qw)),n?t.updateMatrixWorld(!0):(t.updateMatrix(),t.matrixWorld.multiplyMatrices(i.matrixWorld,t.matrix))}aim(t,e,n){const i=this.mpos(t,this.aA),r=this.mpos(e,this.aB).sub(i).normalize();this.qa.setFromUnitVectors(r,n),this.rotateModel(t,this.qa,!0)}twoBone(t,e,n,i,r,o){const a=this.mpos(t,this.H),c=a.distanceTo(this.mpos(e,this.K)),l=this.K.distanceTo(this.mpos(n,this.E)),h=this.T.copy(i).sub(a),u=Math.max(.05,Math.min(h.length(),(c+l)*.999));h.normalize();const d=Gt((c*c+u*u-l*l)/(2*c*u),-1,1),f=Math.sqrt(Math.max(0,1-d*d)),m=this.side.copy(r).addScaledVector(h,-r.dot(h));m.lengthSq()<1e-8&&m.set(0,0,1),m.normalize();for(let I=0;I<3;I++){const T=this.aA.copy(h).multiplyScalar(d).addScaledVector(m,f).normalize(),b=this.aB.copy(m).cross(h).normalize(),L=this.vf.copy(this.pelLat).addScaledVector(T,-this.pelLat.dot(T));b.addScaledVector(T,-b.dot(T));const z=Math.atan2(this.vg.copy(L).cross(b).dot(T),L.dot(b)),F=(Vd+(iS-Vd)*k(0,1,this.tubeLin))*Je;if(Math.abs(z)<=F)break;m.applyAxisAngle(h,Gt(z,-F,F)-z).normalize()}const _=this.K.copy(a).addScaledVector(h,d*c).addScaledVector(m,f*c),g=this.footP.copy(a).addScaledVector(h,u),p=this.E.copy(_).sub(a).normalize();this.aim(t,e,p);const v=this.aA.copy(m).cross(h).normalize();t.matrixWorld.decompose(this.p3,this.qw,this.s3);const y=this.aB.copy(o).applyQuaternion(this.qw).applyQuaternion(this.qRi);if(y.addScaledVector(p,-y.dot(p)),y.lengthSq()>1e-8){y.normalize();const I=Math.atan2(this.vf.copy(y).cross(v).dot(p),y.dot(v));this.qa.setFromAxisAngle(p,I),this.rotateModel(t,this.qa,!0)}const x=this.mpos(e,this.H),N=this.mpos(n,this.vf).sub(x),w=g.sub(_);N.addScaledVector(v,-N.dot(v)),w.addScaledVector(v,-w.dot(v));const C=Math.atan2(this.T.copy(N).cross(w).dot(v),N.dot(w));this.qa.setFromAxisAngle(v,C),this.rotateModel(e,this.qa,!0)}}const qi=new R,ws=new R,_r=new R;function cf(s,t,e,n){qi.set(s[t],s[t+1],s[t+2]).normalize(),ws.set(s[e],s[e+1],s[e+2]).normalize();const i=n*Je;_r.set(0,0,1).addScaledVector(qi,-qi.z),_r.lengthSq()<.05&&_r.set(0,1,0).addScaledVector(qi,-qi.y),_r.normalize(),!(Math.acos(Gt(ws.dot(qi),-1,1))>=i)&&(ws.copy(qi).multiplyScalar(Math.cos(i)).addScaledVector(_r,Math.sin(i)),En(s,e,ws.x,ws.y,ws.z))}const Na=(s,t,e)=>{const n=Math.hypot(s,t,e);return[s/n,t/n,e/n]},Pc=Na(1,-.15,.14),p1=Na(.94,.45,.33),m1=Na(.2,.1,1),g1=Na(1,0,.1),_1=.35;function Bo(s,t,e,n){s[t]+=(e[0]-s[t])*n,s[t+1]+=(e[1]-s[t+1])*n,s[t+2]+=(e[2]-s[t+2])*n}function En(s,t,e,n,i){s[t]=e,s[t+1]=n,s[t+2]=i}function x1(){return{p:new R,es:new R,eu:new R,n:new R}}const v1={u:0,y:0,A:0,W:0,m:0,sinA:0};function M1(s,t,e,n){const i=s.facePoint(t,e,v1),r=e<0?0:e,o=2*i.A*(r<1?1-r:0),a=i.m;return n.p.set(-t,i.y,i.u),n.es.set(-1,0,0),n.eu.set(0,o/a,-i.W/a),n.n.set(0,i.W/a,o/a),n}function y1(s,t,e,n,i){const r=Math.cos(t),o=Math.sin(t);e.set(s.es.x*r+s.eu.x*o,s.es.y*r+s.eu.y*o,s.es.z*r+s.eu.z*o),n.copy(s.n),i.crossVectors(e,n)}const aa=1.85,b1=.5,Bs=.065,lf=.45,S1=.45,hf=.5,uf=.3,df=.3;function T1(){const s=aa,t=b1/2,e=new Zp,n=s*.52,i=-s*.48;e.moveTo(i,-t*.62),e.bezierCurveTo(-s*.25,-t*1.02,s*.1,-t*1.05,s*.28,-t*.75),e.bezierCurveTo(s*.42,-t*.45,n-.04,-.03,n,0),e.bezierCurveTo(n-.04,.03,s*.42,t*.45,s*.28,t*.75),e.bezierCurveTo(s*.1,t*1.05,-s*.25,t*1.02,i,t*.62),e.lineTo(i,-t*.62);const r=new Ah(e,{depth:Bs*.5,bevelEnabled:!0,bevelThickness:Bs*.25,bevelSize:.02,bevelSegments:2,curveSegments:10});r.rotateX(-Math.PI/2),r.translate(0,Bs*.25,0);const o=r.attributes.position;for(let a=0;a<o.count;a++){const c=o.getX(a);c>s*.2&&o.setY(a,o.getY(a)+Math.pow((c-s*.2)/(s*.32),2)*.09),c<-s*.38&&o.setY(a,o.getY(a)+Math.pow((-c-s*.38)/(s*.1),2)*.02)}return r.computeVertexNormals(),r}function xr(s,t,e){const n=new oe(new Th(s,t,3,8),e);return n.castShadow=!0,n}const ff=new R(0,1,0),ko={base:.9,k:.25,refH:3.2,min:.74},Lc={on:.3,off:.22,opacity:.7},E1=Bs*.75,A1=3;function w1(s){const t=s.lastTarget;return Number.isFinite(t)?A1*(t-s.hb):Number.isFinite(s.targetRateF)?s.targetRateF:0}class R1{constructor(t){M(this,"group",new Fe);M(this,"rideRoot",new Fe);M(this,"board");M(this,"body",new Fe);M(this,"thighs",[]);M(this,"shins",[]);M(this,"torso");M(this,"head");M(this,"uArms",[]);M(this,"fArms",[]);M(this,"stance","regular");M(this,"crouch",.4);M(this,"torsoTwist",0);M(this,"armSpread",0);M(this,"silhouette",new Fe);M(this,"silhouetteVisible",!1);M(this,"silParts",[]);M(this,"parts",[]);M(this,"roll",0);M(this,"wipeT",-1);M(this,"fb",x1());M(this,"bx",new R);M(this,"by",new R);M(this,"bz",new R);M(this,"mtx",new Vt);M(this,"qBase",new he);M(this,"qRoll",new he);M(this,"axisX",new R(1,0,0));M(this,"tumbleVel",new R);M(this,"tumbleAxis",new R);M(this,"qTmp",new he);M(this,"a",new R);M(this,"b",new R);M(this,"c",new R);M(this,"hip",new R);M(this,"sh",new R);M(this,"dir",new R);M(this,"capJ",{});M(this,"glb",null);M(this,"intent",0);M(this,"drv",{crouch:.4,twist:0,spread:0,stall:0,turn:0,t:.5,inTube:!1,wipeT:-1,wipeKind:1,intent:0,hb:0});for(const f of["hip","chest","headTop","shoulderF","shoulderB","handF","handB","kneeF","kneeB","ankleF","ankleB"])this.capJ[f]=new R;const e=new We({color:16052194,roughness:.45}),n=new We({color:16738877,roughness:.5});this.board=new oe(T1(),e);const i=new oe(new os(aa*.9,.004,.025),n);i.position.set(0,Bs*.77,0),this.board.add(i);const r=new oe(new os(.12,.1,.012),n);r.position.set(-aa*.42,-.04,0),this.board.add(r);const o=new We({color:13208930,roughness:.7}),a=new We({color:1777447,roughness:.65}),c=new We({color:2308443,roughness:.6});for(let f=0;f<2;f++){const m=xr(.075,lf-.15,a),_=xr(.06,S1-.12,a);this.thighs.push(m),this.shins.push(_),this.body.add(m,_);const g=xr(.05,uf-.1,c),p=xr(.045,df-.09,o);this.uArms.push(g),this.fArms.push(p),this.body.add(g,p)}this.torso=xr(.13,hf-.26,c),this.head=new oe(new js(.11,12,10),o);const l=new oe(new js(.115,12,8,0,Math.PI*2,0,Math.PI*.55),a);this.head.add(l),this.head.castShadow=!0,l.castShadow=!0,this.board.castShadow=!0,this.body.add(this.torso,this.head),this.rideRoot.add(this.board,this.body);const h=new Dn({color:201756,transparent:!0,opacity:Lc.opacity,depthWrite:!1,visible:!1}),u=[...this.thighs,...this.shins,...this.uArms,...this.fArms,this.torso,this.head];this.parts.push(...u,this.board);for(const f of u){const m=new oe(f.geometry,h);m.renderOrder=-1,this.silhouette.add(m),this.silParts.push([f,m])}const d=new oe(this.board.geometry,h);d.renderOrder=-1,this.silhouette.add(d),this.silhouette.visible=!1,this.rideRoot.add(this.silhouette),this.group.add(this.rideRoot),this.group.visible=!1,t!=null&&t.model&&this.setModel(t.model)}get bodyKind(){return this.glb?"glb":"capsule"}setModel(t){this.glb&&this.rideRoot.remove(this.glb.root),this.glb=new f1(t),this.glb.setStance(this.stance==="regular"?1:-1),this.rideRoot.remove(this.body),this.rideRoot.add(this.glb.root),this.silhouette.clear(),this.silParts.length=0,this.parts.length=0,this.parts.push(...this.glb.meshes,this.board),this.glb.reset()}joint(t,e){return this.group.updateMatrixWorld(),this.glb?this.glb.joint(t,e):this.rideRoot.localToWorld(e.copy(this.capJ[t]))}reset(){var t;this.wipeT=-1,this.roll=0,this.crouch=.4,this.torsoTwist=0,this.armSpread=0,this.setSilhouette(!1),this.group.visible=!0,this.rideRoot.quaternion.identity(),this.rideRoot.position.set(0,0,0),(t=this.glb)==null||t.reset(),this.intent=0}update(t,e,n){if(t.state==="idle"){this.setSilhouette(!1),this.group.visible=!1;return}if((!(n>=0)||!Number.isFinite(n))&&(n=0),t.state!=="riding"){this.setSilhouette(!1),this.tumble(t,n);return}this.group.visible=!0;const i=M1(e,t.s,t.t,this.fb);y1(i,t.hb,this.bx,this.by,this.bz),this.mtx.makeBasis(this.bx,this.by,this.bz),this.qBase.setFromRotationMatrix(this.mtx),this.group.position.copy(i.p),this.group.quaternion.copy(this.qBase),this.roll=pn(this.roll,t.lean,10,n),this.qRoll.setFromAxisAngle(this.axisX,this.roll),this.rideRoot.quaternion.copy(this.qRoll),this.rideRoot.position.set(0,0,0);const r=Math.min(1,Math.abs(t.turnRateF)/2);let o=Gt(.3+.4*r+.15*Math.min(1,t.v/12)-.35*t.stall+.3*Math.min(1,Math.abs(t.skid)),0,1);this.torsoTwist=pn(this.torsoTwist,Gt(.3*t.turnRateF+.4*t.skid,-1.2,1.2),8,n),this.armSpread=pn(this.armSpread,Gt(.7*r+.8*Math.min(1,Math.abs(t.skid)),0,1),8,n),t.inTube&&(o=Math.max(o,Gt(ko.base+ko.k*(ko.refH-t.tubeHeight),ko.min,1))),this.crouch=pn(this.crouch,o,6,n),this.glb?this.driveGlb(t,-1,n):this.pose(this.crouch,t.stall,this.torsoTwist,this.armSpread);let a=!1;t.inTube&&(a=-t.d/(1.5+5*e.hollow(t.s))>=(this.silhouetteVisible?Lc.off:Lc.on)),this.setSilhouette(a)}setSilhouette(t){if(this.silhouetteVisible=t,this.silhouette.visible=t,!!t)for(const[e,n]of this.silParts)n.position.copy(e.position),n.quaternion.copy(e.quaternion),n.scale.copy(e.scale)}driveGlb(t,e,n){const i=this.drv;i.crouch=this.crouch,i.twist=this.torsoTwist,i.spread=this.armSpread,i.stall=t.stall,i.turn=t.turnRateF,i.intent=this.intent=pn(this.intent,w1(t),25,n),i.hb=t.hb,i.t=t.t,i.inTube=t.inTube,i.wipeT=e,i.wipeKind=t.state==="kickedOut"?2:1,this.glb.setStance(this.stance==="regular"?1:-1),this.rideRoot.updateWorldMatrix(!0,!1),this.glb.drive(i,E1,n)}pose(t,e,n=0,i=0){const r=this.stance==="regular"?1:-1,o=Bs*.75,a=[.3,-.42],c=-.06-.12*e,l=o+.86*(1-.38*t);this.hip.set(c,l,.04*r*t);for(let u=0;u<2;u++)this.a.set(a[u],o+.02,0),this.b.set(this.hip.x+(u===0?.09:-.09),this.hip.y,this.hip.z),this.knee(this.a,this.b,r,this.c),(u===0?this.capJ.ankleF:this.capJ.ankleB).copy(this.a),(u===0?this.capJ.kneeF:this.capJ.kneeB).copy(this.c),this.place(this.shins[u],this.a,this.c),this.place(this.thighs[u],this.c,this.b);const h=.25+.6*t;this.dir.set(.12-.15*e+.35*Math.sin(n),Math.cos(h),Math.sin(h)*r*.75).normalize(),this.sh.copy(this.hip).addScaledVector(this.dir,hf),this.place(this.torso,this.hip,this.sh),this.head.position.copy(this.sh).addScaledVector(this.dir,.2),this.capJ.hip.copy(this.hip),this.capJ.chest.copy(this.sh),this.capJ.headTop.copy(this.head.position).y+=.11;for(let u=0;u<2;u++){const d=u===0?1:-1;this.a.copy(this.sh).add(this.c.set(.17*d,-.04,0)),this.b.copy(this.a).add(this.c.set(.26*d,-.12+.3*i,(.08+.2*i)*r)).sub(this.a).setLength(uf).add(this.a),(u===0?this.capJ.shoulderF:this.capJ.shoulderB).copy(this.a),this.place(this.uArms[u],this.a,this.b),this.c.set(.2*d,-.2+.1*t,.1*r).setLength(df).add(this.b),(u===0?this.capJ.handF:this.capJ.handB).copy(this.c),this.place(this.fArms[u],this.b,this.c)}}knee(t,e,n,i){const r=e.x-t.x,o=e.y-t.y,a=e.z-t.z,c=Math.sqrt(r*r+o*o+a*a),l=lf,h=c<2*l?Math.sqrt(l*l-c*c/4):0;i.set((t.x+e.x)/2,(t.y+e.y)/2,(t.z+e.z)/2),i.z+=h*n}place(t,e,n){t.position.set((e.x+n.x)/2,(e.y+n.y)/2,(e.z+n.z)/2),this.dir.set(n.x-e.x,n.y-e.y,n.z-e.z);const i=this.dir.length();i>1e-6&&(this.dir.multiplyScalar(1/i),t.quaternion.setFromUnitVectors(ff,this.dir))}tumble(t,e){if(this.wipeT<0){this.wipeT=0;const i=Math.cos(t.hv),r=Math.sin(t.hv);this.tumbleVel.set(-i*t.v*.6,1.5,-r*.6*t.v*.3),t.state==="kickedOut"&&this.tumbleVel.set(-i*t.v*.4,2.2,-2.5),this.tumbleAxis.copy(this.bx).cross(ff).normalize(),this.tumbleAxis.lengthSq()<1e-6&&this.tumbleAxis.set(0,0,1)}this.wipeT+=e,this.tumbleVel.y-=9.81*e,this.group.position.y<-.6&&this.tumbleVel.multiplyScalar(Math.exp(-4*e)),this.group.position.addScaledVector(this.tumbleVel,e);const n=t.state==="kickedOut"?2.5:7;this.qTmp.setFromAxisAngle(this.tumbleAxis,n*e*Math.exp(-this.wipeT)),this.group.quaternion.premultiply(this.qTmp),this.crouch=pn(this.crouch,1,4,e),this.glb?this.driveGlb(t,this.wipeT,e):this.pose(this.crouch,0),this.wipeT>1.6&&(this.group.visible=!1)}tailWorld(t){return t.set(-aa*.4,.05,0),this.group.updateMatrixWorld(),this.rideRoot.localToWorld(t)}}function C1(s,t=!1){const e=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},o={},a=s[0].morphTargetsRelative,c=new be;let l=0;for(let h=0;h<s.length;++h){const u=s[h];let d=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in u.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(u.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in u.morphAttributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(u.morphAttributes[f])}if(t){let f;if(e)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,f,h),l+=f}}if(e){let h=0;const u=[];for(let d=0;d<s.length;++d){const f=s[d].index;for(let m=0;m<f.count;++m)u.push(f.getX(m)+h);h+=s[d].attributes.position.count}c.setIndex(u)}for(const h in r){const u=pf(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,u)}for(const h in o){const u=o[h][0].length;if(u===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let d=0;d<u;++d){const f=[];for(let _=0;_<o[h].length;++_)f.push(o[h][_][d]);const m=pf(f);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(m)}}return c}function pf(s){let t,e,n,i=-1,r=0;for(let l=0;l<s.length;++l){const h=s[l];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}const o=new t(r),a=new Yt(o,e,n);let c=0;for(let l=0;l<s.length;++l){const h=s[l];if(h.isInterleavedBufferAttribute){const u=c/e;for(let d=0,f=h.count;d<f;d++)for(let m=0;m<e;m++){const _=h.getComponent(d,m);a.setComponent(d+u,m,_)}}else o.set(h.array,c);c+=h.count*e}return i!==void 0&&(a.gpuType=i),a}function mf(s,t){if(t===S0)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(t===Dl||t===Ap){let e=s.getIndex();if(e===null){const o=[],a=s.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)o.push(c);s.setIndex(o),e=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const n=e.count-2,i=[];if(t===Dl)for(let o=1;o<=n;o++)i.push(e.getX(0)),i.push(e.getX(o)),i.push(e.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(e.getX(o)),i.push(e.getX(o+1)),i.push(e.getX(o+2))):(i.push(e.getX(o+2)),i.push(e.getX(o+1)),i.push(e.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",t),s}class P1 extends ir{constructor(t){super(t),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(e){return new F1(e)}),this.register(function(e){return new U1(e)}),this.register(function(e){return new X1(e)}),this.register(function(e){return new q1(e)}),this.register(function(e){return new K1(e)}),this.register(function(e){return new B1(e)}),this.register(function(e){return new k1(e)}),this.register(function(e){return new H1(e)}),this.register(function(e){return new z1(e)}),this.register(function(e){return new D1(e)}),this.register(function(e){return new V1(e)}),this.register(function(e){return new O1(e)}),this.register(function(e){return new W1(e)}),this.register(function(e){return new G1(e)}),this.register(function(e){return new I1(e)}),this.register(function(e){return new Y1(e)}),this.register(function(e){return new j1(e)})}load(t,e,n,i){const r=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const l=Cr.extractUrlBase(t);o=Cr.resolveURL(l,this.path)}else o=Cr.extractUrlBase(t);this.manager.itemStart(t);const a=function(l){i?i(l):console.error(l),r.manager.itemError(t),r.manager.itemEnd(t)},c=new im(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(t,function(l){try{r.parse(l,o,function(h){e(h),r.manager.itemEnd(t)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(t){return this.dracoLoader=t,this}setKTX2Loader(t){return this.ktx2Loader=t,this}setMeshoptDecoder(t){return this.meshoptDecoder=t,this}register(t){return this.pluginCallbacks.indexOf(t)===-1&&this.pluginCallbacks.push(t),this}unregister(t){return this.pluginCallbacks.indexOf(t)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(t),1),this}parse(t,e,n,i){let r;const o={},a={},c=new TextDecoder;if(typeof t=="string")r=JSON.parse(t);else if(t instanceof ArrayBuffer)if(c.decode(new Uint8Array(t,0,4))===Sm){try{o[te.KHR_BINARY_GLTF]=new $1(t)}catch(u){i&&i(u);return}r=JSON.parse(o[te.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(t));else r=t;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new lT(r,{path:e||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){const u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case te.KHR_MATERIALS_UNLIT:o[u]=new N1;break;case te.KHR_DRACO_MESH_COMPRESSION:o[u]=new Z1(r,this.dracoLoader);break;case te.KHR_TEXTURE_TRANSFORM:o[u]=new J1;break;case te.KHR_MESH_QUANTIZATION:o[u]=new Q1;break;default:d.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(n,i)}parseAsync(t,e){const n=this;return new Promise(function(i,r){n.parse(t,e,i,r)})}}function L1(){let s={};return{get:function(t){return s[t]},add:function(t,e){s[t]=e},remove:function(t){delete s[t]},removeAll:function(){s={}}}}const te={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class I1{constructor(t){this.parser=t,this.name=te.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const t=this.parser,e=this.parser.json.nodes||[];for(let n=0,i=e.length;n<i;n++){const r=e[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&t._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(t){const e=this.parser,n="light:"+t;let i=e.cache.get(n);if(i)return i;const r=e.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[t];let l;const h=new It(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],Ke);const u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new sm(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new mb(h),l.distance=u;break;case"spot":l=new fb(h),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,ai(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=e.createUniqueName(c.name||"light_"+t),i=Promise.resolve(l),e.cache.add(n,i),i}getDependency(t,e){if(t==="light")return this._loadLight(e)}createNodeAttachment(t){const e=this,n=this.parser,r=n.json.nodes[t],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return n._getNodeRef(e.cache,a,c)})}}class N1{constructor(){this.name=te.KHR_MATERIALS_UNLIT}getMaterialType(){return Dn}extendParams(t,e,n){const i=[];t.color=new It(1,1,1),t.opacity=1;const r=e.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;t.color.setRGB(o[0],o[1],o[2],Ke),t.opacity=o[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(t,"map",r.baseColorTexture,Ne))}return Promise.all(i)}}class D1{constructor(t){this.parser=t,this.name=te.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(t,e){const i=this.parser.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(e.emissiveIntensity=r),Promise.resolve()}}class F1{constructor(t){this.parser=t,this.name=te.KHR_MATERIALS_CLEARCOAT}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:$n}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(e.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(e,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(e.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(e,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(e,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;e.clearcoatNormalScale=new pt(a,a)}return Promise.all(r)}}class U1{constructor(t){this.parser=t,this.name=te.KHR_MATERIALS_DISPERSION}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:$n}extendMaterialParams(t,e){const i=this.parser.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return e.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class O1{constructor(t){this.parser=t,this.name=te.KHR_MATERIALS_IRIDESCENCE}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:$n}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(e.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(e,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(e.iridescenceIOR=o.iridescenceIor),e.iridescenceThicknessRange===void 0&&(e.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(e.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(e.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(e,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}}class B1{constructor(t){this.parser=t,this.name=te.KHR_MATERIALS_SHEEN}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:$n}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[];e.sheenColor=new It(0,0,0),e.sheenRoughness=0,e.sheen=1;const o=i.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;e.sheenColor.setRGB(a[0],a[1],a[2],Ke)}return o.sheenRoughnessFactor!==void 0&&(e.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(e,"sheenColorMap",o.sheenColorTexture,Ne)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(e,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}}class k1{constructor(t){this.parser=t,this.name=te.KHR_MATERIALS_TRANSMISSION}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:$n}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(e.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(e,"transmissionMap",o.transmissionTexture)),Promise.all(r)}}class H1{constructor(t){this.parser=t,this.name=te.KHR_MATERIALS_VOLUME}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:$n}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];e.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(e,"thicknessMap",o.thicknessTexture)),e.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return e.attenuationColor=new It().setRGB(a[0],a[1],a[2],Ke),Promise.all(r)}}class z1{constructor(t){this.parser=t,this.name=te.KHR_MATERIALS_IOR}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:$n}extendMaterialParams(t,e){const i=this.parser.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return e.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class V1{constructor(t){this.parser=t,this.name=te.KHR_MATERIALS_SPECULAR}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:$n}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];e.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(e,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return e.specularColor=new It().setRGB(a[0],a[1],a[2],Ke),o.specularColorTexture!==void 0&&r.push(n.assignTexture(e,"specularColorMap",o.specularColorTexture,Ne)),Promise.all(r)}}class G1{constructor(t){this.parser=t,this.name=te.EXT_MATERIALS_BUMP}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:$n}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return e.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(e,"bumpMap",o.bumpTexture)),Promise.all(r)}}class W1{constructor(t){this.parser=t,this.name=te.KHR_MATERIALS_ANISOTROPY}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:$n}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(e.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(e.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(e,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}}class X1{constructor(t){this.parser=t,this.name=te.KHR_TEXTURE_BASISU}loadTexture(t){const e=this.parser,n=e.json,i=n.textures[t];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],o=e.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return e.loadTextureImage(t,r.source,o)}}class q1{constructor(t){this.parser=t,this.name=te.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(t){const e=this.name,n=this.parser,i=n.json,r=i.textures[t];if(!r.extensions||!r.extensions[e])return null;const o=r.extensions[e],a=i.images[o.source];let c=n.textureLoader;if(a.uri){const l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(t,o.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(e)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(t)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(t){const e=new Image;e.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",e.onload=e.onerror=function(){t(e.height===1)}})),this.isSupported}}class K1{constructor(t){this.parser=t,this.name=te.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(t){const e=this.name,n=this.parser,i=n.json,r=i.textures[t];if(!r.extensions||!r.extensions[e])return null;const o=r.extensions[e],a=i.images[o.source];let c=n.textureLoader;if(a.uri){const l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(t,o.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(e)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(t)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(t){const e=new Image;e.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",e.onload=e.onerror=function(){t(e.height===1)}})),this.isSupported}}class Y1{constructor(t){this.name=te.EXT_MESHOPT_COMPRESSION,this.parser=t}loadBufferView(t){const e=this.parser.json,n=e.bufferViews[t];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(e.extensionsRequired&&e.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const c=i.byteOffset||0,l=i.byteLength||0,h=i.count,u=i.byteStride,d=new Uint8Array(a,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,d,i.mode,i.filter).then(function(f){return f.buffer}):o.ready.then(function(){const f=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(f),h,u,d,i.mode,i.filter),f})})}else return null}}class j1{constructor(t){this.name=te.EXT_MESH_GPU_INSTANCING,this.parser=t}createNodeMesh(t){const e=this.parser.json,n=e.nodes[t];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=e.meshes[n.mesh];for(const l of i.primitives)if(l.mode!==fn.TRIANGLES&&l.mode!==fn.TRIANGLE_STRIP&&l.mode!==fn.TRIANGLE_FAN&&l.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],c={};for(const l in o)a.push(this.parser.getDependency("accessor",o[l]).then(h=>(c[l]=h,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(t)),Promise.all(a).then(l=>{const h=l.pop(),u=h.isGroup?h.children:[h],d=l[0].count,f=[];for(const m of u){const _=new Vt,g=new R,p=new he,v=new R(1,1,1),y=new my(m.geometry,m.material,d);for(let x=0;x<d;x++)c.TRANSLATION&&g.fromBufferAttribute(c.TRANSLATION,x),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,x),c.SCALE&&v.fromBufferAttribute(c.SCALE,x),y.setMatrixAt(x,_.compose(g,p,v));for(const x in c)if(x==="_COLOR_0"){const N=c[x];y.instanceColor=new Ol(N.array,N.itemSize,N.normalized)}else x!=="TRANSLATION"&&x!=="ROTATION"&&x!=="SCALE"&&m.geometry.setAttribute(x,c[x]);Me.prototype.copy.call(y,m),this.parser.assignFinalMaterial(y),f.push(y)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}}const Sm="glTF",vr=12,gf={JSON:1313821514,BIN:5130562};class $1{constructor(t){this.name=te.KHR_BINARY_GLTF,this.content=null,this.body=null;const e=new DataView(t,0,vr),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(t.slice(0,4))),version:e.getUint32(4,!0),length:e.getUint32(8,!0)},this.header.magic!==Sm)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-vr,r=new DataView(t,vr);let o=0;for(;o<i;){const a=r.getUint32(o,!0);o+=4;const c=r.getUint32(o,!0);if(o+=4,c===gf.JSON){const l=new Uint8Array(t,vr+o,a);this.content=n.decode(l)}else if(c===gf.BIN){const l=vr+o;this.body=t.slice(l,l+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class Z1{constructor(t,e){if(!e)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=te.KHR_DRACO_MESH_COMPRESSION,this.json=t,this.dracoLoader=e,this.dracoLoader.preload()}decodePrimitive(t,e){const n=this.json,i=this.dracoLoader,r=t.extensions[this.name].bufferView,o=t.extensions[this.name].attributes,a={},c={},l={};for(const h in o){const u=Zl[h]||h.toLowerCase();a[u]=o[h]}for(const h in t.attributes){const u=Zl[h]||h.toLowerCase();if(o[h]!==void 0){const d=n.accessors[t.attributes[h]],f=ks[d.componentType];l[u]=f.name,c[u]=d.normalized===!0}}return e.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){i.decodeDracoFile(h,function(f){for(const m in f.attributes){const _=f.attributes[m],g=c[m];g!==void 0&&(_.normalized=g)}u(f)},a,l,Ke,d)})})}}class J1{constructor(){this.name=te.KHR_TEXTURE_TRANSFORM}extendTexture(t,e){return(e.texCoord===void 0||e.texCoord===t.channel)&&e.offset===void 0&&e.rotation===void 0&&e.scale===void 0||(t=t.clone(),e.texCoord!==void 0&&(t.channel=e.texCoord),e.offset!==void 0&&t.offset.fromArray(e.offset),e.rotation!==void 0&&(t.rotation=e.rotation),e.scale!==void 0&&t.repeat.fromArray(e.scale),t.needsUpdate=!0),t}}class Q1{constructor(){this.name=te.KHR_MESH_QUANTIZATION}}class Tm extends jr{constructor(t,e,n,i){super(t,e,n,i)}copySampleValue_(t){const e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i*3+i;for(let o=0;o!==i;o++)e[o]=n[r+o];return e}interpolate_(t,e,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,h=i-e,u=(n-e)/h,d=u*u,f=d*u,m=t*l,_=m-l,g=-2*f+3*d,p=f-d,v=1-g,y=p-d+u;for(let x=0;x!==a;x++){const N=o[_+x+a],w=o[_+x+c]*h,C=o[m+x+a],I=o[m+x]*h;r[x]=v*N+y*w+g*C+p*I}return r}}const tT=new he;class eT extends Tm{interpolate_(t,e,n,i){const r=super.interpolate_(t,e,n,i);return tT.fromArray(r).normalize().toArray(r),r}}const fn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},ks={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},_f={9728:qe,9729:en,9984:gp,9985:Zo,9986:Mr,9987:Xn},xf={33071:Ni,33648:ua,10497:is},Ic={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Zl={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Ai={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},nT={CUBICSPLINE:void 0,LINEAR:Or,STEP:Ur},Nc={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function iT(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new We({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:di})),s.DefaultMaterial}function Ki(s,t,e){for(const n in e.extensions)s[n]===void 0&&(t.userData.gltfExtensions=t.userData.gltfExtensions||{},t.userData.gltfExtensions[n]=e.extensions[n])}function ai(s,t){t.extras!==void 0&&(typeof t.extras=="object"?Object.assign(s.userData,t.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+t.extras))}function sT(s,t,e){let n=!1,i=!1,r=!1;for(let l=0,h=t.length;l<h;l++){const u=t[l];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);const o=[],a=[],c=[];for(let l=0,h=t.length;l<h;l++){const u=t[l];if(n){const d=u.POSITION!==void 0?e.getDependency("accessor",u.POSITION):s.attributes.position;o.push(d)}if(i){const d=u.NORMAL!==void 0?e.getDependency("accessor",u.NORMAL):s.attributes.normal;a.push(d)}if(r){const d=u.COLOR_0!==void 0?e.getDependency("accessor",u.COLOR_0):s.attributes.color;c.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){const h=l[0],u=l[1],d=l[2];return n&&(s.morphAttributes.position=h),i&&(s.morphAttributes.normal=u),r&&(s.morphAttributes.color=d),s.morphTargetsRelative=!0,s})}function rT(s,t){if(s.updateMorphTargets(),t.weights!==void 0)for(let e=0,n=t.weights.length;e<n;e++)s.morphTargetInfluences[e]=t.weights[e];if(t.extras&&Array.isArray(t.extras.targetNames)){const e=t.extras.targetNames;if(s.morphTargetInfluences.length===e.length){s.morphTargetDictionary={};for(let n=0,i=e.length;n<i;n++)s.morphTargetDictionary[e[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function oT(s){let t;const e=s.extensions&&s.extensions[te.KHR_DRACO_MESH_COMPRESSION];if(e?t="draco:"+e.bufferView+":"+e.indices+":"+Dc(e.attributes):t=s.indices+":"+Dc(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)t+=":"+Dc(s.targets[n]);return t}function Dc(s){let t="";const e=Object.keys(s).sort();for(let n=0,i=e.length;n<i;n++)t+=e[n]+":"+s[e[n]]+";";return t}function Jl(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function aT(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const cT=new Vt;class lT{constructor(t={},e={}){this.json=t,this.extensions={},this.plugins={},this.options=e,this.cache=new L1,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const c=a.match(/Version\/(\d+)/);i=n&&c?parseInt(c[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&o<98?this.textureLoader=new hb(this.options.manager):this.textureLoader=new _b(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new im(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(t){this.extensions=t}setPlugins(t){this.plugins=t}parse(t,e){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return Ki(r,a,i),ai(a,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){for(const c of a.scenes)c.updateMatrixWorld();t(a)})}).catch(e)}_markDefs(){const t=this.json.nodes||[],e=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=e.length;i<r;i++){const o=e[i].joints;for(let a=0,c=o.length;a<c;a++)t[o[a]].isBone=!0}for(let i=0,r=t.length;i<r;i++){const o=t[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(t,e){e!==void 0&&(t.refs[e]===void 0&&(t.refs[e]=t.uses[e]=0),t.refs[e]++)}_getNodeRef(t,e,n){if(t.refs[e]<=1)return n;const i=n.clone(),r=(o,a)=>{const c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(const[l,h]of o.children.entries())r(h,a.children[l])};return r(n,i),i.name+="_instance_"+t.uses[e]++,i}_invokeOne(t){const e=Object.values(this.plugins);e.push(this);for(let n=0;n<e.length;n++){const i=t(e[n]);if(i)return i}return null}_invokeAll(t){const e=Object.values(this.plugins);e.unshift(this);const n=[];for(let i=0;i<e.length;i++){const r=t(e[i]);r&&n.push(r)}return n}getDependency(t,e){const n=t+":"+e;let i=this.cache.get(n);if(!i){switch(t){case"scene":i=this.loadScene(e);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(e)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(e)});break;case"accessor":i=this.loadAccessor(e);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(e)});break;case"buffer":i=this.loadBuffer(e);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(e)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(e)});break;case"skin":i=this.loadSkin(e);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(e)});break;case"camera":i=this.loadCamera(e);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(t,e)}),!i)throw new Error("Unknown type: "+t);break}this.cache.add(n,i)}return i}getDependencies(t){let e=this.cache.get(t);if(!e){const n=this,i=this.json[t+(t==="mesh"?"es":"s")]||[];e=Promise.all(i.map(function(r,o){return n.getDependency(t,o)})),this.cache.add(t,e)}return e}loadBuffer(t){const e=this.json.buffers[t],n=this.fileLoader;if(e.type&&e.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+e.type+" buffer type is not supported.");if(e.uri===void 0&&t===0)return Promise.resolve(this.extensions[te.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,o){n.load(Cr.resolveURL(e.uri,i.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+e.uri+'".'))})})}loadBufferView(t){const e=this.json.bufferViews[t];return this.getDependency("buffer",e.buffer).then(function(n){const i=e.byteLength||0,r=e.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(t){const e=this,n=this.json,i=this.json.accessors[t];if(i.bufferView===void 0&&i.sparse===void 0){const o=Ic[i.type],a=ks[i.componentType],c=i.normalized===!0,l=new a(i.count*o);return Promise.resolve(new Yt(l,o,c))}const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],c=Ic[i.type],l=ks[i.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,d=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,m=i.normalized===!0;let _,g;if(f&&f!==u){const p=Math.floor(d/f),v="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count;let y=e.cache.get(v);y||(_=new l(a,p*f,i.count*f/h),y=new uy(_,f/h),e.cache.add(v,y)),g=new vh(y,c,d%f/h,m)}else a===null?_=new l(i.count*c):_=new l(a,d,i.count*c),g=new Yt(_,c,m);if(i.sparse!==void 0){const p=Ic.SCALAR,v=ks[i.sparse.indices.componentType],y=i.sparse.indices.byteOffset||0,x=i.sparse.values.byteOffset||0,N=new v(o[1],y,i.sparse.count*p),w=new l(o[2],x,i.sparse.count*c);a!==null&&(g=new Yt(g.array.slice(),g.itemSize,g.normalized)),g.normalized=!1;for(let C=0,I=N.length;C<I;C++){const T=N[C];if(g.setX(T,w[C*c]),c>=2&&g.setY(T,w[C*c+1]),c>=3&&g.setZ(T,w[C*c+2]),c>=4&&g.setW(T,w[C*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}g.normalized=m}return g})}loadTexture(t){const e=this.json,n=this.options,r=e.textures[t].source,o=e.images[r];let a=this.textureLoader;if(o.uri){const c=n.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(t,r,a)}loadTextureImage(t,e,n){const i=this,r=this.json,o=r.textures[t],a=r.images[e],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];const l=this.loadImageSource(e,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);const d=(r.samplers||{})[o.sampler]||{};return h.magFilter=_f[d.magFilter]||en,h.minFilter=_f[d.minFilter]||Xn,h.wrapS=xf[d.wrapS]||is,h.wrapT=xf[d.wrapT]||is,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==qe&&h.minFilter!==en,i.associations.set(h,{textures:t}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(t,e){const n=this,i=this.json,r=this.options;if(this.sourceCache[t]!==void 0)return this.sourceCache[t].then(u=>u.clone());const o=i.images[t],a=self.URL||self.webkitURL;let c=o.uri||"",l=!1;if(o.bufferView!==void 0)c=n.getDependency("bufferView",o.bufferView).then(function(u){l=!0;const d=new Blob([u],{type:o.mimeType});return c=a.createObjectURL(d),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+t+" is missing URI and bufferView");const h=Promise.resolve(c).then(function(u){return new Promise(function(d,f){let m=d;e.isImageBitmapLoader===!0&&(m=function(_){const g=new Re(_);g.needsUpdate=!0,d(g)}),e.load(Cr.resolveURL(u,r.path),m,void 0,f)})}).then(function(u){return l===!0&&a.revokeObjectURL(c),ai(u,o),u.userData.mimeType=o.mimeType||aT(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),u});return this.sourceCache[t]=h,h}assignTexture(t,e,n,i){const r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[te.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[te.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const c=r.associations.get(o);o=r.extensions[te.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,c)}}return i!==void 0&&(o.colorSpace=i),t[e]=o,o})}assignFinalMaterial(t){const e=t.geometry;let n=t.material;const i=e.attributes.tangent===void 0,r=e.attributes.color!==void 0,o=e.attributes.normal===void 0;if(t.isPoints){const a="PointsMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new Yr,Fn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(a,c)),n=c}else if(t.isLine){const a="LineBasicMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new qp,Fn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(a,c)),n=c}if(i||r||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=n.clone(),r&&(c.vertexColors=!0),o&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(n))),n=c}t.material=n}getMaterialType(){return We}loadMaterial(t){const e=this,n=this.json,i=this.extensions,r=n.materials[t];let o;const a={},c=r.extensions||{},l=[];if(c[te.KHR_MATERIALS_UNLIT]){const u=i[te.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),l.push(u.extendParams(a,r,e))}else{const u=r.pbrMetallicRoughness||{};if(a.color=new It(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){const d=u.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],Ke),a.opacity=d[3]}u.baseColorTexture!==void 0&&l.push(e.assignTexture(a,"map",u.baseColorTexture,Ne)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(e.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),l.push(e.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(t)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(t,a)})))}r.doubleSided===!0&&(a.side=Be);const h=r.alphaMode||Nc.OPAQUE;if(h===Nc.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===Nc.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==Dn&&(l.push(e.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new pt(1,1),r.normalTexture.scale!==void 0)){const u=r.normalTexture.scale;a.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&o!==Dn&&(l.push(e.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==Dn){const u=r.emissiveFactor;a.emissive=new It().setRGB(u[0],u[1],u[2],Ke)}return r.emissiveTexture!==void 0&&o!==Dn&&l.push(e.assignTexture(a,"emissiveMap",r.emissiveTexture,Ne)),Promise.all(l).then(function(){const u=new o(a);return r.name&&(u.name=r.name),ai(u,r),e.associations.set(u,{materials:t}),r.extensions&&Ki(i,u,r),u})}createUniqueName(t){const e=de.sanitizeNodeName(t||"");return e in this.nodeNamesUsed?e+"_"+ ++this.nodeNamesUsed[e]:(this.nodeNamesUsed[e]=0,e)}loadGeometries(t){const e=this,n=this.extensions,i=this.primitiveCache;function r(a){return n[te.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,e).then(function(c){return vf(c,a,e)})}const o=[];for(let a=0,c=t.length;a<c;a++){const l=t[a],h=oT(l),u=i[h];if(u)o.push(u.promise);else{let d;l.extensions&&l.extensions[te.KHR_DRACO_MESH_COMPRESSION]?d=r(l):d=vf(new be,l,e),i[h]={primitive:l,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(t){const e=this,n=this.json,i=this.extensions,r=n.meshes[t],o=r.primitives,a=[];for(let c=0,l=o.length;c<l;c++){const h=o[c].material===void 0?iT(this.cache):this.getDependency("material",o[c].material);a.push(h)}return a.push(e.loadGeometries(o)),Promise.all(a).then(function(c){const l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let f=0,m=h.length;f<m;f++){const _=h[f],g=o[f];let p;const v=l[f];if(g.mode===fn.TRIANGLES||g.mode===fn.TRIANGLE_STRIP||g.mode===fn.TRIANGLE_FAN||g.mode===void 0)p=r.isSkinnedMesh===!0?new Gp(_,v):new oe(_,v),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),g.mode===fn.TRIANGLE_STRIP?p.geometry=mf(p.geometry,Ap):g.mode===fn.TRIANGLE_FAN&&(p.geometry=mf(p.geometry,Dl));else if(g.mode===fn.LINES)p=new gy(_,v);else if(g.mode===fn.LINE_STRIP)p=new Mh(_,v);else if(g.mode===fn.LINE_LOOP)p=new _y(_,v);else if(g.mode===fn.POINTS)p=new Aa(_,v);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(p.geometry.morphAttributes).length>0&&rT(p,r),p.name=e.createUniqueName(r.name||"mesh_"+t),ai(p,r),g.extensions&&Ki(i,p,g),e.assignFinalMaterial(p),u.push(p)}for(let f=0,m=u.length;f<m;f++)e.associations.set(u[f],{meshes:t,primitives:f});if(u.length===1)return r.extensions&&Ki(i,u[0],r),u[0];const d=new Fe;r.extensions&&Ki(i,d,r),e.associations.set(d,{meshes:t});for(let f=0,m=u.length;f<m;f++)d.add(u[f]);return d})}loadCamera(t){let e;const n=this.json.cameras[t],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?e=new Ge($0.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(e=new gh(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(e.name=this.createUniqueName(n.name)),ai(e,n),Promise.resolve(e)}loadSkin(t){const e=this.json.skins[t],n=[];for(let i=0,r=e.joints.length;i<r;i++)n.push(this._loadNodeShallow(e.joints[i]));return e.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",e.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const r=i.pop(),o=i,a=[],c=[];for(let l=0,h=o.length;l<h;l++){const u=o[l];if(u){a.push(u);const d=new Vt;r!==null&&d.fromArray(r.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',e.joints[l])}return new Ea(a,c)})}loadAnimation(t){const e=this.json,n=this,i=e.animations[t],r=i.name?i.name:"animation_"+t,o=[],a=[],c=[],l=[],h=[];for(let u=0,d=i.channels.length;u<d;u++){const f=i.channels[u],m=i.samplers[f.sampler],_=f.target,g=_.node,p=i.parameters!==void 0?i.parameters[m.input]:m.input,v=i.parameters!==void 0?i.parameters[m.output]:m.output;_.node!==void 0&&(o.push(this.getDependency("node",g)),a.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",v)),l.push(m),h.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(u){const d=u[0],f=u[1],m=u[2],_=u[3],g=u[4],p=[];for(let v=0,y=d.length;v<y;v++){const x=d[v],N=f[v],w=m[v],C=_[v],I=g[v];if(x===void 0)continue;x.updateMatrix&&x.updateMatrix();const T=n._createAnimationTracks(x,N,w,C,I);if(T)for(let b=0;b<T.length;b++)p.push(T[b])}return new ib(r,void 0,p)})}createNodeMesh(t){const e=this.json,n=this,i=e.nodes[t];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const o=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,l=i.weights.length;c<l;c++)a.morphTargetInfluences[c]=i.weights[c]}),o})}loadNode(t){const e=this.json,n=this,i=e.nodes[t],r=n._loadNodeShallow(t),o=[],a=i.children||[];for(let l=0,h=a.length;l<h;l++)o.push(n.getDependency("node",a[l]));const c=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(o),c]).then(function(l){const h=l[0],u=l[1],d=l[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,cT)});for(let f=0,m=u.length;f<m;f++)h.add(u[f]);return h})}_loadNodeShallow(t){const e=this.json,n=this.extensions,i=this;if(this.nodeCache[t]!==void 0)return this.nodeCache[t];const r=e.nodes[t],o=r.name?i.createUniqueName(r.name):"",a=[],c=i._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(t)});return c&&a.push(c),r.camera!==void 0&&a.push(i.getDependency("camera",r.camera).then(function(l){return i._getNodeRef(i.cameraCache,r.camera,l)})),i._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(t)}).forEach(function(l){a.push(l)}),this.nodeCache[t]=Promise.all(a).then(function(l){let h;if(r.isBone===!0?h=new Wp:l.length>1?h=new Fe:l.length===1?h=l[0]:h=new Me,h!==l[0])for(let u=0,d=l.length;u<d;u++)h.add(l[u]);if(r.name&&(h.userData.name=r.name,h.name=o),ai(h,r),r.extensions&&Ki(n,h,r),r.matrix!==void 0){const u=new Vt;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);return i.associations.has(h)||i.associations.set(h,{}),i.associations.get(h).nodes=t,h}),this.nodeCache[t]}loadScene(t){const e=this.extensions,n=this.json.scenes[t],i=this,r=new Fe;n.name&&(r.name=i.createUniqueName(n.name)),ai(r,n),n.extensions&&Ki(e,r,n);const o=n.nodes||[],a=[];for(let c=0,l=o.length;c<l;c++)a.push(i.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let h=0,u=c.length;h<u;h++)r.add(c[h]);const l=h=>{const u=new Map;for(const[d,f]of i.associations)(d instanceof Fn||d instanceof Re)&&u.set(d,f);return h.traverse(d=>{const f=i.associations.get(d);f!=null&&u.set(d,f)}),u};return i.associations=l(r),r})}_createAnimationTracks(t,e,n,i,r){const o=[],a=t.name?t.name:t.uuid,c=[];Ai[r.path]===Ai.weights?t.traverse(function(d){d.morphTargetInfluences&&c.push(d.name?d.name:d.uuid)}):c.push(a);let l;switch(Ai[r.path]){case Ai.weights:l=$s;break;case Ai.rotation:l=Zs;break;case Ai.position:case Ai.scale:l=Js;break;default:switch(n.itemSize){case 1:l=$s;break;case 2:case 3:default:l=Js;break}break}const h=i.interpolation!==void 0?nT[i.interpolation]:Or,u=this._getArrayFromAccessor(n);for(let d=0,f=c.length;d<f;d++){const m=new l(c[d]+"."+Ai[r.path],e.array,u,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(m),o.push(m)}return o}_getArrayFromAccessor(t){let e=t.array;if(t.normalized){const n=Jl(e.constructor),i=new Float32Array(e.length);for(let r=0,o=e.length;r<o;r++)i[r]=e[r]*n;e=i}return e}_createCubicSplineTrackInterpolant(t){t.createInterpolant=function(n){const i=this instanceof Zs?eT:Tm;return new i(this.times,this.values,this.getValueSize()/3,n)},t.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function hT(s,t,e){const n=t.attributes,i=new mi;if(n.POSITION!==void 0){const a=e.json.accessors[n.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(i.set(new R(c[0],c[1],c[2]),new R(l[0],l[1],l[2])),a.normalized){const h=Jl(ks[a.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=t.targets;if(r!==void 0){const a=new R,c=new R;for(let l=0,h=r.length;l<h;l++){const u=r[l];if(u.POSITION!==void 0){const d=e.json.accessors[u.POSITION],f=d.min,m=d.max;if(f!==void 0&&m!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(m[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(m[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(m[2]))),d.normalized){const _=Jl(ks[d.componentType]);c.multiplyScalar(_)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}s.boundingBox=i;const o=new Yn;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=o}function vf(s,t,e){const n=t.attributes,i=[];function r(o,a){return e.getDependency("accessor",o).then(function(c){s.setAttribute(a,c)})}for(const o in n){const a=Zl[o]||o.toLowerCase();a in s.attributes||i.push(r(n[o],a))}if(t.indices!==void 0&&!s.index){const o=e.getDependency("accessor",t.indices).then(function(a){s.setIndex(a)});i.push(o)}return ee.workingColorSpace!==Ke&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${ee.workingColorSpace}" not supported.`),ai(s,t),hT(s,t,e),Promise.all(i).then(function(){return t.targets!==void 0?sT(s,t.targets,e):s})}const Mf={vest:new It(15905076),shorts:new It(1920607)},yf=3810328;function uT(s){const t=s.clone();return t.onBeforeCompile=e=>{e.uniforms.uVest={value:Mf.vest},e.uniforms.uVestOn={value:0},e.uniforms.uShorts={value:Mf.shorts},e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
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
void main() {`)},t.customProgramCacheKey=()=>"surfer-outfit",t}function bf(s,t){const e=s.material.clone();e.color.set(t),s.material=e}async function dT(s,t){const e=new P1;typeof document>"u"&&e.register(()=>({name:"surfer-headless",loadTexture:()=>Promise.resolve(null)}));const[n,i]=await Promise.all([e.parseAsync(s,""),e.parseAsync(t,"")]),r=new Fe;r.name="surfer-model",r.add(n.scene);const o=[];let a=null;if(n.scene.traverse(f=>{const m=f;if(!m.isSkinnedMesh)return;const _=m.material.name;_==="MI_Hair_1"&&bf(m,yf),_==="MI_Superhero_Male"&&(m.material=uT(m.material),a=m),o.push(m)}),!a)throw new Error("surfer body mesh not found");const c=a;o.splice(o.indexOf(c),1),o.unshift(c);const l=c.skeleton,h=new Map(l.bones.map(f=>[f.name,f])),u=[];i.scene.traverse(f=>{f.isSkinnedMesh&&u.push(f)});for(const f of u){const m=f.skeleton.bones.map(_=>h.get(_.name)??_);f.bind(new Ea(m,f.skeleton.boneInverses),f.bindMatrix),bf(f,yf),r.add(f),o.push(f)}for(const f of o)f.castShadow=!0,f.frustumCulled=!1;const d=f=>{const m=h.get(f);if(!m)throw new Error("surfer bone "+f);return m};return r.updateMatrixWorld(!0),{root:r,meshes:o,skeleton:l,bone:d}}async function fT(s="./models/"){const t=async i=>{const r=await fetch(s+i);if(!r.ok)throw new Error(`${i}: HTTP ${r.status}`);return r.arrayBuffer()},[e,n]=await Promise.all([t("surfer-body.glb"),t("surfer-hair.glb")]);return dT(e,n)}function Em(s){return{x:-Math.cos(s),y:-Math.sin(s)}}function pT(s,t,e){const n=Number.isFinite(e)?e:0,i=Em(n),r=s.x*i.x+s.y*i.y;return t.x*i.x+t.y*i.y>=r?{back:s,front:t}:{back:t,front:s}}function Sf(s,t){return Math.atan2(-(t.y-s.y),-(t.x-s.x))}function mT(s,t){return Sr(t-s)}function gT(s,t){return!(t>1)||!Number.isFinite(s)?0:Gt((s/t-1.1)/.4,0,1)}const _T=.6,xT=3.6,vT=13;function Tf(s){return!Number.isFinite(s)||Math.abs(s)<_T?0:Math.sign(s)*Gt(Math.abs(s)*xT,0,vT)}const MT=350,yT=40,Fc=8;function bT(s,t){if(!s||!t||s.foot!=="front"||t.foot!=="back")return!1;const e=t.t-s.t;return e>=yT&&e<=MT}const ST=80;function TT(s,t,e,n){if(!(e>0)||s.length<2)return 0;let i=-1;for(let m=s.length-1;m>=0;m--)if(s[m].t<=t){i=m;break}if(i<1)return 0;const r=t-ST;let o=i;for(;o>0&&s[o-1].t>=r&&s[o-1].t<=s[o].t;)o--;const a=s.slice(o,i+1);if(o===i){const m=s[i-1],_=s[i],g=_.t-m.t;if(!(g>0))return 0;const p=Gt((r-m.t)/g,0,1);a.unshift({t:m.t+g*p,x:m.x+(_.x-m.x)*p,y:m.y+(_.y-m.y)*p})}const c=a[0],l=a[a.length-1],h=l.t-c.t;if(!(h>=4))return 0;const u=Math.hypot(l.x-c.x,l.y-c.y)/e*(1e3/h);let d;if(n&&Number.isFinite(n.x)&&Number.isFinite(n.y)){let m=0;for(let _=0;_+1<a.length;_++){const g=a[_].x-n.x,p=a[_].y-n.y,v=a[_+1].x-a[_].x,y=a[_+1].y-a[_].y;m-=g*y-p*v}d=Math.sign(m)}else d=Math.sign(-(l.y-c.y));const f=d*u;return Number.isFinite(f)&&f!==0?f:0}const Am=Math.PI/6,wm=Math.PI/3,Oh=1.25,xa=Math.PI/180,Ql=[75*xa,125*xa],Bh=1.86,ET=s=>(s[0]+s[1])/2,Rm=Bh-Oh,Ef=(Bh*ET(Ql)-Oh*(Am+wm)/2)/Rm,Af=[Ef-22.5*xa,Ef+22.5*xa];function Uc(s,t,e){if(s<=t)return 0;const n=e-t;if(s>=e)return n/2+(s-e);const i=(s-t)/n;return n*(i*i*i-i*i*i*i/2)}function kh(s,t){if(!Number.isFinite(s)||!Number.isFinite(t))return 0;const e=Math.abs(s),n=Oh*Uc(e,Am,wm)-Bh*Uc(e,Ql[0],Ql[1])+Rm*Uc(e,Af[0],Af[1]);return Math.sign(s)*t*(e+n)}const Oc=.02,AT=1/8;function Bc(s){if(!Number.isFinite(s))return 0;const t=Math.abs(s);return t<=Oc?0:Math.sign(s)*Gt((t-Oc)/(AT-Oc),0,1)}const wT=300,wf=20,RT=3.2,Rf=[0,1.2,2.4],CT=250,PT=.3,LT=3,IT=1.3,Hh=60,Nr=3,zh=1.5,Vh=5,NT=60*(Math.PI/180),DT=.1,kc=Math.PI/2,FT=.1,Ho=.03,UT=45*Math.PI/180,Cf=25*Math.PI/180,OT=.1*Math.PI/180,BT=20*Math.PI/180,zo=2*Hh,kT=10,HT=250,Vo=48*(Math.PI/180),zT=68*(Math.PI/180),VT=5,Pf=[21*(Math.PI/180),35*(Math.PI/180)],Lf=[45*(Math.PI/180),70*(Math.PI/180)],GT=.1,If=4*Hh,Hc=180*(Math.PI/180),Nf=25*(Math.PI/180),Df=.42;function WT(s){const t=Math.abs(s);if(t<=Hc)return s;const e=t-Hc;return Math.sign(s)*(Hc+(1-Df)*Nf*Math.tanh(e/Nf)+Df*e)}function Ff(s,t,e){if(s<=t)return 0;const n=e-t;if(s>=e)return n/2+(s-e);const i=(s-t)/n;return n*(i*i*i-i*i*i*i/2)}function XT(s,t){if(!Number.isFinite(s)||!(t>0))return 0;const e=Math.abs(s);if(e===0)return 0;let n=0,i=e/t/.3+1e-6;for(let r=0;r<60;r++){const o=(n+i)/2;kh(o,t)<e?n=o:i=o}return Math.sign(s)*(n+i)/2}function qT(s,t,e){if(!Number.isFinite(s)||!Number.isFinite(t))return NaN;const n=Math.abs(s),i=zT-Vo,r=Math.sign(s)*(n<=Vo?n:Vo+i*Math.tanh((n-Vo)/i)),o=Math.abs(t),a=Math.sign(t)*VT*(Ff(o,Pf[0],Pf[1])-(1-GT)*Ff(o,Lf[0],Lf[1])),c=kh(r,e)+a,l=WT(c);return a===0&&l===c?r:XT(l,e)}const KT=.2,YT=1*(Math.PI/180),jT=3*(Math.PI/180),zc=.2,$T=50;class ZT{constructor(t,e,n={}){M(this,"_mode","hand");M(this,"_thumbTurnCm",Nr);M(this,"_gain",IT);M(this,"grip",!1);M(this,"stall",0);M(this,"drive",0);M(this,"keyFlick",Rf[0]);M(this,"keySign",1);M(this,"ptrs",new Map);M(this,"feet",null);M(this,"h0",0);M(this,"aPrev",0);M(this,"accum",0);M(this,"dist0",0);M(this,"slideAcc",0);M(this,"resB",0);M(this,"resF",0);M(this,"rotAct",0);M(this,"lastDist",0);M(this,"rotT",0);M(this,"latched",!1);M(this,"thumbGrip",!1);M(this,"tLatched",!1);M(this,"tTot",0);M(this,"tEff",0);M(this,"tAcc",0);M(this,"tSep0",0);M(this,"tVx",0);M(this,"tVy",0);M(this,"tSbar",0);M(this,"tThr",0);M(this,"tPendF",0);M(this,"tPendB",0);M(this,"tPendT",0);M(this,"tRotSum",0);M(this,"tRotT",0);M(this,"tEpSign",0);M(this,"tEpNet",0);M(this,"tEpCommit",!1);M(this,"tHeld",0);M(this,"lastLift",null);M(this,"liftPivot",null);M(this,"liftWatch",null);M(this,"gestureMax",0);M(this,"multi",!1);M(this,"threeSince",null);M(this,"debugFired",!1);M(this,"mouseDown",null);M(this,"keyGrip",!1);M(this,"keyUp",!1);M(this,"keyDown",!1);M(this,"keyShift",!1);M(this,"keyF",!1);M(this,"keyAccum",0);M(this,"queue",[]);M(this,"now");M(this,"screenH");M(this,"offs",[]);this.el=t,this.getBoardHeading=e,n.gain!==void 0&&(this.gain=n.gain),n.mode==="thumbs"&&(this._mode="thumbs"),n.thumbTurnCm!==void 0&&(this.thumbTurnCm=n.thumbTurnCm),this.now=n.now??(()=>performance.now()),this.screenH=n.screenHeight??(()=>typeof window<"u"?window.innerHeight:800);const i=n.keyTarget!==void 0?n.keyTarget:typeof window<"u"?window:null,r=n.docTarget!==void 0?n.docTarget:typeof document<"u"?document:null;this.on(t,"pointerdown",o=>this.onDown(o)),this.on(t,"pointermove",o=>this.onMove(o)),this.on(t,"pointerup",o=>this.onUp(o,!1)),this.on(t,"pointercancel",o=>this.onUp(o,!0)),i&&(this.on(i,"keydown",o=>this.onKey(o,!0)),this.on(i,"keyup",o=>this.onKey(o,!1)),this.on(i,"blur",()=>this.clearAll())),r&&this.on(r,"visibilitychange",()=>{(r.visibilityState===void 0||r.visibilityState!=="visible")&&this.clearAll()})}get mode(){return this._mode}set mode(t){t!=="hand"&&t!=="thumbs"||t===this._mode||(this._mode=t,this.ptrs.size>0&&(this.feet&&this.endGrip(),this.lastLift=null,this.liftWatch=null,this.liftPivot=null,this.multi=!0))}get thumbTurnCm(){return this._thumbTurnCm}set thumbTurnCm(t){Number.isFinite(t)&&(this._thumbTurnCm=Math.min(Vh,Math.max(zh,t)))}get gain(){return this._gain}set gain(t){Number.isFinite(t)&&(this._gain=Math.min(LT,Math.max(PT,t)))}on(t,e,n){t.addEventListener(e,n),this.offs.push(()=>t.removeEventListener(e,n))}dispose(){for(const t of this.offs)t();this.offs.length=0}get targetHeading(){return this.feet?this.h0+kh(this.accum,this.gain):this.keyGrip?this.h0+this.keyAccum:null}get pairRotation(){return this.feet?this.accum:0}get pointers(){const t=[];for(const e of this.ptrs.values()){const n=this.feet?e.id===this.feet.back?"B":e.id===this.feet.front?"F":null:null;t.push({id:e.id,x:e.x,y:e.y,label:n})}return t}drain(){const t=this.queue;return this.queue=[],t}rebase(t){Number.isFinite(t)&&(this.h0=t,this.accum=0,this.keyAccum=0,this.feet&&(this.latchAngle(),this.thumbGrip&&this.latchThumbs()))}checkDebugHold(){this.threeSince===null||this.debugFired||this.now()-this.threeSince>=CT&&(this.debugFired=!0,this.multi=!0,this.queue.push({type:"debug"}))}update(t){if(this.checkDebugHold(),!(!(t>0)||!Number.isFinite(t))){if(this.keyGrip&&!this.feet){const e=(this.keyUp?1:0)-(this.keyDown?1:0);this.keyAccum+=e*RT*t,this.stall=this.keyShift?1:0,this.drive=this.keyF?1:0}if(this.thumbGrip&&this.feet&&this.tEpSign!==0&&!this.tEpCommit&&!(this.tRotSum*Math.exp(-Math.max(0,this.now()-this.tRotT)/1e3/Ho)/Ho*this.tEpSign>=Cf)&&(this.tEpSign=this.tEpNet=0,this.tEpCommit=!1,this.tHeld!==0)){this.tHeld=0;const n=this.screenH(),i=Bc(this.tThr/(n>0?n:800));Number.isFinite(i)&&(this.stall=Math.max(0,-i),this.drive=Math.max(0,i))}}}onDown(t){var i,r,o;if((i=t.preventDefault)==null||i.call(t),t.pointerType==="mouse"){this.mouseDown={id:t.pointerId,x0:t.clientX,y0:t.clientY,maxMove:0};return}if(this.ptrs.has(t.pointerId))return;try{(o=(r=this.el).setPointerCapture)==null||o.call(r,t.pointerId)}catch{}const e=this.now();this.ptrs.set(t.pointerId,{id:t.pointerId,x:t.clientX,y:t.clientY,x0:t.clientX,y0:t.clientY,t0:e,maxMove:0,hist:[{t:e,x:t.clientX,y:t.clientY}]});const n=this.ptrs.size;if(this.gestureMax=Math.max(this.gestureMax,n),n===3){this.threeSince===null&&(this.threeSince=e);return}n===2&&!this.feet&&!this.keyGrip&&this.startGrip()}startGrip(){const[t,e]=[...this.ptrs.values()],n=this.getBoardHeading();this.thumbGrip=this._mode==="thumbs";const{back:i,front:r}=this.thumbGrip?t.x<=e.x?{back:e,front:t}:{back:t,front:e}:pT(t,e,n);this.feet={back:i.id,front:r.id},this.h0=Number.isFinite(n)?n:0,this.slideAcc=0,this.resB=0,this.resF=0,this.rotAct=0,this.rotT=this.now(),this.accum=0,this.dist0=0,this.latched=!1,this.latchAngle(),this.tSep0=0,this.thumbGrip&&this.latchThumbs(),this.stall=0,this.drive=0,this.grip=!0,this.lastLift=null,this.liftWatch=null,this.liftPivot=null,this.queue.push({type:"grip"})}latchAngle(){const t=this.ptrs.get(this.feet.back),e=this.ptrs.get(this.feet.front);if(!t||!e)return;const n=Math.hypot(e.x-t.x,e.y-t.y);n>=Fc?(this.aPrev=Sf(t,e),this.latched=!0,this.dist0===0&&(this.dist0=n)):this.latched=!1}latchThumbs(){this.tTot=this.tAcc=this.tEff=0,this.tThr=0,this.tPendF=this.tPendB=0,this.tPendT=this.now(),this.tRotSum=0,this.tRotT=this.tPendT,this.tEpSign=this.tEpNet=this.tHeld=0,this.tEpCommit=!1,this.tLatched=!1,this.latchThumbLine()}latchThumbLine(){const t=this.ptrs.get(this.feet.back),e=this.ptrs.get(this.feet.front);if(!t||!e)return;const n=t.x-e.x,i=t.y-e.y,r=Math.hypot(n,i);if(!Number.isFinite(r)||r<zo){this.tLatched=!1;return}this.tVx=n,this.tVy=i,this.tSbar=r,this.tLatched=!0,this.tSep0===0&&(this.tSep0=r)}updateThumbs(t,e,n){const i=this.ptrs.get(this.feet.back),r=this.ptrs.get(this.feet.front),o=t?{x:e,y:n}:i,a=t?r:{x:e,y:n},c=a.x-o.x,l=a.y-o.y,h=Math.hypot(c,l),u=this.now();this.tRotSum*=Math.exp(-Math.max(0,u-this.tRotT)/1e3/Ho),this.tRotT=u;const d=r.x-i.x,f=r.y-i.y,m=Math.atan2(c*f-l*d,c*d+l*f);Number.isFinite(m)&&Math.abs(m)<=kc&&h>=zo&&Math.hypot(d,f)>=zo&&(this.tRotSum+=m);const _=this.tRotSum/Ho;this.tEpSign!==0&&!(_*this.tEpSign>=Cf)&&(this.tEpSign=this.tEpNet=this.tHeld=0,this.tEpCommit=!1),this.tEpSign===0&&Math.abs(_)>=UT&&(this.tEpSign=Math.sign(_));const g=this.tEpSign!==0&&m*this.tEpSign>=OT;g&&(this.tEpNet+=m);const p=this.tThr;if(Number.isFinite(h)&&h>=Fc){const F=this.now(),G=Math.exp(-Math.max(0,F-this.tPendT)/1e3/FT);this.tPendT=F,this.tPendF*=G,this.tPendB*=G;const q=t?i:r,K=q.x-e,Z=q.y-n,H=(K*c+Z*l)/h,st=Math.abs(K*l-Z*c)/h,ot=Math.min(1,1.5*Math.tan(Math.min(Math.abs(this.tTot),Math.PI/4)));if(Number.isFinite(H)&&Number.isFinite(st)&&H!==0){const _t=t?-H:H;let Rt=Math.sign(_t)*Math.min(Math.abs(_t),st*ot);t||(this.tThr+=_t);const kt=t?this.tPendF:this.tPendB;if(Rt!==0&&Math.sign(Rt)===Math.sign(kt)){const Y=Math.min(Math.abs(Rt),Math.abs(kt));this.tThr-=Math.sign(Rt)*Y,t?this.tPendF-=Math.sign(Rt)*Y:this.tPendB-=Math.sign(Rt)*Y,Rt-=Math.sign(Rt)*Y}t?this.tPendB+=Rt:this.tPendF+=Rt}}g&&(this.tHeld+=this.tThr-p),this.tEpSign!==0&&!this.tEpCommit&&Math.abs(this.tEpNet)>=BT&&(this.tEpCommit=!0),this.tEpCommit&&(this.tThr-=this.tHeld,this.tHeld=0);const v=i.x-r.x,y=i.y-r.y,x=Math.hypot(v,y);if(!Number.isFinite(x)||x<zo)this.tLatched=!1;else if(!this.tLatched)this.latchThumbLine();else{const F=this.tVx*y-this.tVy*v,G=this.tVx*v+this.tVy*y,q=Math.atan2(F,G);Math.abs(q)<=kc&&this.tSep0>0&&(this.tTot+=q,this.tEff+=q*Math.min(1,this.tSbar*this.tSbar/(If*If)),this.tAcc+=q*this.tSbar*this.tSbar/this.tSep0),this.tVx=v,this.tVy=y,Math.abs(x-this.tSbar)>kT&&(this.tSbar=x)}const N=this.tAcc/Hh,w=DT,C=Math.abs(N),T=Math.sign(N)*(C>=2*w?C:2*Math.max(0,C-w))*NT/this._thumbTurnCm,b=qT(T,this.tEff,this._gain);Number.isFinite(b)&&(this.accum=b);const L=this.screenH(),z=Bc((this.tThr-this.tHeld)/(L>0?L:800));Number.isFinite(z)&&(this.stall=Math.max(0,-z),this.drive=Math.max(0,z))}onMove(t){var r;if(t.pointerType==="mouse"){const o=this.mouseDown;o&&o.id===t.pointerId&&(o.maxMove=Math.max(o.maxMove,Math.hypot(t.clientX-o.x0,t.clientY-o.y0)));return}const e=this.ptrs.get(t.pointerId);if(!e)return;(r=t.preventDefault)==null||r.call(t);const n=e.x,i=e.y;if(this.movePtr(e,t.clientX,t.clientY),this.feet&&(e.id===this.feet.back||e.id===this.feet.front))if(this.thumbGrip)this.updateThumbs(e.id===this.feet.back,n,i);else{const o=this.updatePair();this.addSlide(e.id===this.feet.back,e.x-n,e.y-i,o),this.refreshDriveStall()}this.checkDebugHold()}movePtr(t,e,n){if(!Number.isFinite(e)||!Number.isFinite(n))return;t.x=e,t.y=n,t.maxMove=Math.max(t.maxMove,Math.hypot(e-t.x0,n-t.y0));const i=this.now();for(t.hist.push({t:i,x:e,y:n});t.hist.length>2&&t.hist[0].t<i-HT;)t.hist.shift()}addSlide(t,e,n,i){const r=this.now(),o=Math.max(0,(r-this.rotT)/1e3);this.rotT=r,this.rotAct=this.rotAct*Math.exp(-o/KT)+i,i!==0&&(this.slideAcc*=Math.exp(-Math.abs(i)/zc),this.resB*=Math.exp(-Math.abs(i)/zc),this.resF*=Math.exp(-Math.abs(i)/zc));const a=1-k(YT,jT,Math.abs(this.rotAct)),c=this.getBoardHeading(),l=Em(Number.isFinite(c)?c:this.h0),h=this.screenH(),u=a*(e*l.x+n*l.y)/(h>0?h:800);if(!Number.isFinite(u)||u===0)return;t?this.resB+=u:this.resF+=u;const d=Math.min(Math.abs(this.resB),Math.abs(this.resF));d>0&&Math.sign(this.resB)===Math.sign(this.resF)&&(this.slideAcc+=Math.sign(this.resB)*d),this.resB-=Math.sign(this.resB)*d,this.resF-=Math.sign(this.resF)*d}updatePair(){let t=0;const e=this.ptrs.get(this.feet.back),n=this.ptrs.get(this.feet.front),i=Math.hypot(n.x-e.x,n.y-e.y);if(i<Fc)this.latched=!1;else if(!this.latched)this.latchAngle();else{const r=Sf(e,n),o=mT(this.aPrev,r);Math.abs(o)<=kc&&(this.accum+=o,t=o),this.aPrev=r}return this.lastDist=i,t}refreshDriveStall(){const t=Bc(this.slideAcc),e=this.dist0>0?gT(this.lastDist,Math.max(this.dist0,$T)):0;this.stall=Math.max(0,-t),this.drive=Math.max(e,t)}onUp(t,e){var o,a,c;if(t.pointerType==="mouse"){const l=this.mouseDown;this.mouseDown=null,!e&&l&&l.id===t.pointerId&&Math.max(l.maxMove,Math.hypot(t.clientX-l.x0,t.clientY-l.y0))<wf&&this.queue.push({type:"tap",x:t.clientX,y:t.clientY});return}const n=this.ptrs.get(t.pointerId);if(!n)return;this.checkDebugHold(),e||this.movePtr(n,t.clientX,t.clientY);const i=this.now();try{(a=(o=this.el).releasePointerCapture)==null||a.call(o,t.pointerId)}catch{}const r=this.feet?n.id===this.feet.front?"front":n.id===this.feet.back?"back":null:this.liftWatch===n.id?((c=this.lastLift)==null?void 0:c.foot)==="front"?"back":"front":null;if(e)r&&(this.endGrip(),this.lastLift=null,this.liftWatch=null,this.liftPivot=null);else if(r&&this.feet){const l=r==="front"?this.feet.back:this.feet.front;this.endGrip(),this.lastLift={foot:r,t:i},this.liftWatch=l,this.liftPivot={x:n.x,y:n.y}}else if(r&&this.liftWatch===n.id){const l={foot:r,t:i};if(!this.multi&&bT(this.lastLift,l)){const h=TT(n.hist,i,this.screenH(),this.liftPivot??void 0);this.queue.push({type:"ollie",flick:h,spin:Tf(h)})}this.lastLift=null,this.liftWatch=null,this.liftPivot=null}!e&&!this.multi&&this.ptrs.size===1&&this.gestureMax===1&&i-n.t0<wT&&n.maxMove<wf&&this.queue.push({type:"tap",x:n.x,y:n.y}),this.ptrs.delete(n.id),this.ptrs.size<3&&(this.threeSince=null,this.debugFired=!1),this.ptrs.size===0&&(this.gestureMax=0,this.multi=!1),this.ptrs.size===2&&!this.feet&&!this.keyGrip&&this.startGrip()}endGrip(){this.feet=null,this.grip=this.keyGrip,this.stall=0,this.drive=0,this.accum=0,this.latched=!1,this.slideAcc=this.resB=this.resF=0}clearAll(){this.ptrs.clear(),this.feet=null,this.lastLift=null,this.liftWatch=null,this.liftPivot=null,this.gestureMax=0,this.multi=!1,this.threeSince=null,this.debugFired=!1,this.latched=!1,this.mouseDown=null,this.keyGrip=this.keyUp=this.keyDown=this.keyShift=this.keyF=!1,this.keyAccum=0,this.accum=0,this.grip=!1,this.stall=0,this.drive=0}onKey(t,e){var i,r,o;const n=t.key;if(n===" "||t.code==="Space"){if((i=t.preventDefault)==null||i.call(t),e){if(t.repeat||this.keyGrip||this.feet)return;this.keyGrip=!0,this.grip=!0;const a=this.getBoardHeading();this.h0=Number.isFinite(a)?a:0,this.keyAccum=0,this.stall=this.keyShift?1:0,this.drive=this.keyF?1:0,this.queue.push({type:"grip"})}else if(this.keyGrip)if(this.keyGrip=!1,this.grip=!!this.feet,this.stall=0,this.drive=0,this.keyAccum=0,this.ptrs.size===2&&!this.feet)this.startGrip();else{const a=this.keyFlick;this.queue.push({type:"ollie",flick:a,spin:Tf(a)})}return}n==="ArrowUp"?(this.keyUp=e,(r=t.preventDefault)==null||r.call(t)):n==="ArrowDown"?(this.keyDown=e,(o=t.preventDefault)==null||o.call(t)):n==="Shift"?(this.keyShift=e,this.keyGrip&&!this.feet&&(this.stall=e?1:0)):n==="f"||n==="F"?(this.keyF=e,this.keyGrip&&!this.feet&&(this.drive=e?1:0)):e&&(n==="0"||n==="1"||n==="2")?this.keyFlick=this.keySign*Rf[Number(n)]:e&&(n==="x"||n==="X")&&(this.keySign=-this.keySign,this.keyFlick=-this.keyFlick)}}const Uf=s=>({x:-Math.cos(s),y:-Math.sin(s)});class JT{constructor(t=document.body){M(this,"canvas");M(this,"ctx");M(this,"lines",[]);M(this,"visible",!0);M(this,"fps",0);M(this,"frames",0);M(this,"acc",0);M(this,"dpr",1);M(this,"shapes",null);this.canvas=document.createElement("canvas"),this.canvas.id="debug",t.appendChild(this.canvas),this.ctx=this.canvas.getContext("2d"),this.resize()}resize(){this.dpr=Math.min(window.devicePixelRatio||1,2),this.canvas.width=Math.round(window.innerWidth*this.dpr),this.canvas.height=Math.round(window.innerHeight*this.dpr)}setLines(t){this.lines=t}setShapes(t){this.shapes=t}toggle(t){this.visible=t??!this.visible,this.canvas.style.display=this.visible?"block":"none"}frame(t){if(this.frames++,this.acc+=t,this.acc>=.5&&(this.fps=this.frames/this.acc,this.frames=0,this.acc=0),!this.visible)return;const e=this.ctx;e.setTransform(this.dpr,0,0,this.dpr,0,0),e.clearRect(0,0,this.canvas.width,this.canvas.height),this.shapes&&this.drawShapes(e,this.shapes);const n=[`${this.fps.toFixed(0)} fps`,...this.lines];e.font="12px ui-monospace, Menlo, monospace";let i=0;for(const r of n)i=Math.max(i,e.measureText(r).width);e.fillStyle="rgba(0,0,0,0.45)",e.fillRect(6,6,i+12,n.length*15+8),e.fillStyle="#e8fff6",n.forEach((r,o)=>e.fillText(r,12,22+o*15))}drawShapes(t,e){const n=this.canvas.width/this.dpr,i=this.canvas.height/this.dpr;t.save(),t.lineCap="round",t.lineJoin="round";const r=n/2,o=i-100,a=Uf(e.board),c=46;t.strokeStyle="rgba(255,214,120,0.95)",t.lineWidth=10,t.beginPath(),t.moveTo(r-a.x*c,o-a.y*c),t.lineTo(r+a.x*c,o+a.y*c),t.stroke(),t.fillStyle="#ff7a59",t.beginPath(),t.arc(r+a.x*c,o+a.y*c,6,0,Math.PI*2),t.fill(),e.target!==null&&this.arrow(t,r,o,e.target,64,"rgba(120,255,200,0.95)");const l=e.fingers.find(u=>u.label==="B"),h=e.fingers.find(u=>u.label==="F");l&&h&&(t.strokeStyle="rgba(255,255,255,0.8)",t.lineWidth=3,t.beginPath(),t.moveTo(l.x,l.y),t.lineTo(h.x,h.y),t.stroke(),e.target!==null&&this.arrow(t,(l.x+h.x)/2,(l.y+h.y)/2,e.target,70,"rgba(120,255,200,0.95)")),t.font="bold 18px system-ui, sans-serif",t.textAlign="center",t.textBaseline="middle";for(const u of e.fingers)t.fillStyle=u.label==="F"?"rgba(255,122,89,0.35)":u.label==="B"?"rgba(80,170,255,0.35)":"rgba(255,255,255,0.2)",t.strokeStyle="rgba(255,255,255,0.9)",t.lineWidth=2,t.beginPath(),t.arc(u.x,u.y,32,0,Math.PI*2),t.fill(),t.stroke(),u.label&&(t.fillStyle="#fff",t.fillText(u.label,u.x,u.y));t.restore()}arrow(t,e,n,i,r,o){const a=Uf(i),c=e+a.x*r,l=n+a.y*r;t.strokeStyle=o,t.fillStyle=o,t.lineWidth=3,t.beginPath(),t.moveTo(e,n),t.lineTo(c,l),t.stroke();const h=-a.y,u=a.x;t.beginPath(),t.moveTo(c+a.x*10,l+a.y*10),t.lineTo(c+h*7,l+u*7),t.lineTo(c-h*7,l-u*7),t.closePath(),t.fill()}}const Cm="surf.controlMode",Pm="surf.thumbTurnCm",$r=()=>{try{return typeof localStorage<"u"?localStorage:null}catch{return null}};function QT(s=$r()){try{return(s==null?void 0:s.getItem(Cm))==="thumbs"?"thumbs":"hand"}catch{return"hand"}}function tE(s,t=$r()){try{t==null||t.setItem(Cm,s)}catch{}}const Gh=s=>Math.min(Vh,Math.max(zh,s));function eE(s=$r()){try{const t=s==null?void 0:s.getItem(Pm);if(t==null||t.trim()==="")return Nr;const e=Number(t);return Number.isFinite(e)?Gh(e):Nr}catch{return Nr}}function nE(s,t=$r()){if(Number.isFinite(s))try{t==null||t.setItem(Pm,String(Gh(s)))}catch{}}const Of={hand:"1 hand",thumbs:"2 thumbs"},iE=["pointerdown","pointermove","pointerup","pointercancel","touchstart","touchmove","touchend"],Vc=s=>{for(const t of iE)s.addEventListener(t,e=>e.stopPropagation())};function sE(s,t){const e=()=>$r(),n={position:"fixed",top:"8px",zIndex:"20",font:"600 14px system-ui, sans-serif",color:"#fff",background:"rgba(10,30,45,0.45)",border:"1px solid rgba(255,255,255,0.45)",borderRadius:"8px",whiteSpace:"nowrap",touchAction:"manipulation"},i=document.createElement("button");i.textContent=Of[s.mode],Object.assign(i.style,{...n,right:"96px",padding:"8px 12px"}),Vc(i);const r=document.createElement("button");r.textContent="⚙",r.setAttribute("aria-label","thumb sensitivity"),Object.assign(r.style,{...n,padding:"8px 10px",lineHeight:"1"}),Vc(r);const o=document.createElement("div");Object.assign(o.style,{...n,top:"48px",right:"96px",padding:"8px 10px",display:"none",alignItems:"center",gap:"8px",font:"600 12px system-ui, sans-serif",background:"rgba(10,30,45,0.55)",touchAction:"none"}),Vc(o);const a=document.createElement("span");a.textContent="soft";const c=document.createElement("span");c.textContent="sharp";const l=document.createElement("input");l.type="range",l.setAttribute("aria-label","thumb sensitivity: soft to sharp"),l.min=String(-Vh),l.max=String(-zh),l.step="0.1",Object.assign(l.style,{width:"140px",touchAction:"none",accentColor:"#7fd3ff"});const h=()=>l.value=String(-(s.thumbTurnCm??Nr));l.addEventListener("input",()=>{const m=Gh(-Number(l.value));Number.isFinite(m)&&(s.thumbTurnCm=m,nE(s.thumbTurnCm??m,e()))}),o.append(a,l,c);const u=()=>o.style.display!=="none",d=m=>{m&&h(),o.style.display=m?"flex":"none"},f=()=>{const m=s.mode==="thumbs";i.textContent=Of[s.mode],r.style.display=m?"block":"none",r.style.right=`${96+i.offsetWidth+6}px`,m||d(!1)};return i.addEventListener("click",m=>{m.stopPropagation(),s.mode=s.mode==="hand"?"thumbs":"hand",tE(s.mode,e()),f(),i.blur()}),r.addEventListener("click",m=>{m.stopPropagation(),d(!u()),r.blur()}),l.addEventListener("change",()=>l.blur()),document.addEventListener("pointerdown",m=>{if(!u())return;const _=m.target;_&&(o.contains(_)||r.contains(_))||d(!1)},!0),document.body.append(i,r,o),f(),i}const Hn=6,dn=8,wi=8,rE=2;function Bf(s,t){const e=new Uint32Array((s-1)*(t-1)*6);let n=0;for(let i=0;i<s-1;i++)for(let r=0;r<t-1;r++){const o=i*t+r,a=(i+1)*t+r,c=i*t+r+1,l=(i+1)*t+r+1;e[n++]=o,e[n++]=a,e[n++]=c,e[n++]=a,e[n++]=l,e[n++]=c}return e}function Gc(s,t,e){const n=s/t;return De(s,e)*(1-n)+De(s-t,e)*n}function oE(){if(typeof document>"u")return null;const s=256,t=256,e=document.createElement("canvas");e.width=s,e.height=t;const n=e.getContext("2d");if(!n)return null;const i=n.createImageData(s,t);for(let o=0;o<s;o++){const a=o/10,c=s/10,l=.6+.4*k(.2,.7,Gc(a*.6,c*.6,41));for(let h=0;h<t;h++){const u=h/t,d=.65*Gc(a+Math.sin(u*2*Math.PI)*.4,c,43)+.35*Gc(a*2.3+u*3,c*2.3,47),f=.12+.88*l*k(.3,.68,d),m=(h*s+o)*4;i.data[m]=i.data[m+1]=i.data[m+2]=Math.round(f*255),i.data[m+3]=255}}n.putImageData(i,0,0);const r=new wa(e);return r.wrapS=r.wrapT=is,r.magFilter=en,r.minFilter=Xn,r.anisotropy=4,r}function aE(){if(typeof document>"u")return null;const s=document.createElement("canvas");s.width=s.height=64;const t=s.getContext("2d");if(!t)return null;const e=t.createRadialGradient(32,32,0,32,32,32);return e.addColorStop(0,"rgba(255,255,255,0.7)"),e.addColorStop(.4,"rgba(255,255,255,0.35)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,64,64),new wa(s)}class cE{constructor(t){M(this,"group",new Fe);M(this,"band");M(this,"curtain");M(this,"spray");M(this,"ball");M(this,"bPos");M(this,"bNor");M(this,"bCol");M(this,"cPos");M(this,"cNor");M(this,"cCol");M(this,"cUv");M(this,"cHv");M(this,"sPos");M(this,"sCol");M(this,"any",!1);M(this,"au",new Float32Array(re));M(this,"ay",new Float32Array(re));M(this,"anu",new Float32Array(re));M(this,"any_",new Float32Array(re));M(this,"foam",[.93,.96,.98]);M(this,"lipC",[.35,.85,.8]);M(this,"face",[.07,.5,.55]);M(this,"ballOn",0);M(this,"lastR",0);const e=t*Hn;this.bPos=new Float32Array(e*3),this.bNor=new Float32Array(e*3),this.bCol=new Float32Array(e*4);const n=new be;n.setAttribute("position",new Yt(this.bPos,3).setUsage(Se)),n.setAttribute("normal",new Yt(this.bNor,3).setUsage(Se)),n.setAttribute("color",new Yt(this.bCol,4).setUsage(Se)),n.setIndex(new Yt(Bf(t,Hn),1)),this.band=new oe(n,new We({vertexColors:!0,roughness:.25,metalness:.05,side:Be,transparent:!0})),this.band.material.onBeforeCompile=h=>{h.fragmentShader=h.fragmentShader.replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
totalEmissiveRadiance += diffuseColor.rgb * 0.45;`)},this.band.frustumCulled=!1,this.band.receiveShadow=!1;const i=t*dn;this.cPos=new Float32Array(i*3),this.cNor=new Float32Array(i*3),this.cCol=new Float32Array(i*4),this.cUv=new Float32Array(i*2);const r=new be;r.setAttribute("position",new Yt(this.cPos,3).setUsage(Se)),r.setAttribute("normal",new Yt(this.cNor,3).setUsage(Se)),r.setAttribute("color",new Yt(this.cCol,4).setUsage(Se)),r.setAttribute("uv",new Yt(this.cUv,2).setUsage(Se)),this.cHv=new Float32Array(i),r.setAttribute("heavy",new Yt(this.cHv,1).setUsage(Se)),r.setIndex(new Yt(Bf(t,dn),1));const o=new We({vertexColors:!0,alphaMap:oE(),roughness:.85,emissive:new It(.47,.48,.49),side:Be,transparent:!0,depthWrite:!1});o.onBeforeCompile=h=>{h.vertexShader=h.vertexShader.replace("#include <common>",`#include <common>
attribute float heavy;
varying float vHeavy;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vHeavy = heavy;`),h.fragmentShader=h.fragmentShader.replace("#include <common>",`#include <common>
varying float vHeavy;`).replace("#include <alphamap_fragment>",`#ifdef USE_ALPHAMAP
 diffuseColor.a *= mix(texture2D(alphaMap, vAlphaMapUv).g, 1.0, vHeavy);
#endif`)},this.curtain=new oe(r,o),this.curtain.frustumCulled=!1,this.curtain.renderOrder=2,this.sPos=new Float32Array(t*wi*3),this.sCol=new Float32Array(t*wi*4);const a=new be;a.setAttribute("position",new Yt(this.sPos,3).setUsage(Se)),a.setAttribute("color",new Yt(this.sCol,4).setUsage(Se)),this.spray=new Aa(a,new Yr({vertexColors:!0,size:2.6,transparent:!0,depthWrite:!1,map:aE()})),this.spray.frustumCulled=!1,this.spray.renderOrder=3;const c=new Ca(1,rE),l=c.attributes.position;for(let h=0;h<l.count;h++){const u=l.getX(h),d=l.getY(h),f=l.getZ(h),m=.78+.4*De(u*3.3+d*2.1+f*4.7+5,53);l.setXYZ(h,u*m,d*m,f*m)}c.computeVertexNormals(),this.ball=new oe(c,new We({color:16777215,roughness:.9,flatShading:!0,emissive:new It(.2,.21,.22)})),this.ball.frustumCulled=!1,this.ball.visible=!1,this.group.add(this.band,this.curtain,this.spray,this.ball)}setTint(t,e,n){for(let i=0;i<3;i++)this.foam[i]=t[i],this.lipC[i]=e[i],this.face[i]=n[i];this.ball.material.color.setRGB(t[0],t[1],t[2]),this.ball.material.emissive.setRGB(t[0]*.22,t[1]*.22,t[2]*.22),this.curtain.material.emissive.setRGB(t[0]*.5,t[1]*.5,t[2]*.5),this.spray.material.color.setRGB(1,1,1)}begin(){this.any=!1}column(t,e,n,i,r,o,a,c,l,h,u=1,d=0){const f=re,m=this.au,_=this.ay,g=this.anu,p=this.any_;let v=0,y=0;for(let b=0;b<f;b++){m[b]=i[b],_[b]=r[b];const L=b>0?b-1:b,z=b<f-1?b+1:b,F=i[z]-i[L],G=r[z]-r[L],q=Math.sqrt(F*F+G*G);g[b]=q>1e-9?-G/q:0,p[b]=q>1e-9?F/q:1,i[b]>i[v]&&(v=b),r[b]>r[y]&&(y=b)}const x=k(.15,.6,c);if(x>0)this.any=!0;else return this.hideColumn(t,e,i,r);v=Math.min(f-3,Math.max(2,y+1));const N=x*Math.min(.5,.06+.11*l),w=De(n*.7+h*.25,61);for(let b=0;b<Hn;b++){const L=b/(Hn-1),z=L*v,F=Math.min(f-2,Math.floor(z)),G=z-F,q=N*k(0,.45,L),K=m[F]+(m[F+1]-m[F])*G,Z=_[F]+(_[F+1]-_[F])*G,H=g[F]+(g[F+1]-g[F])*G,st=p[F]+(p[F+1]-p[F])*G,ot=(t*Hn+b)*3;this.bPos[ot]=e,this.bPos[ot+1]=Z+st*q,this.bPos[ot+2]=K+H*q,this.bNor[ot]=0,this.bNor[ot+1]=-st,this.bNor[ot+2]=-H;const _t=k(.2,.8,L),Rt=k(.85,1,L)*(.5+.3*w),kt=(t*Hn+b)*4;for(let Y=0;Y<3;Y++){let Q=this.face[Y]+(this.lipC[Y]-this.face[Y])*_t*.35;Q+=(this.foam[Y]-Q)*Rt,Q+=(this.foam[Y]*.92-Q)*d*.85,this.bCol[kt+Y]=Math.min(1,Q)}this.bCol[kt+3]=x*.92*o[a+Math.min(f-1,Math.round(z))]}const C=n*.11,I=.86+.08*w;for(let b=0;b<dn;b++){const L=b/(dn-1),z=v+L*(f-1-v),F=Math.min(f-2,Math.floor(z)),G=z-F,q=N+(.08-N)*k(0,.6,L),K=m[F]+(m[F+1]-m[F])*G,Z=_[F]+(_[F+1]-_[F])*G,H=g[F]+(g[F+1]-g[F])*G,st=p[F]+(p[F+1]-p[F])*G,ot=(t*dn+b)*3,_t=Math.sin(n*1.7+L*2.3+h*2.1)*.12*L;this.cPos[ot]=e+_t,this.cPos[ot+1]=Z+st*q,this.cPos[ot+2]=K+H*q,this.cNor[ot]=0,this.cNor[ot+1]=-st,this.cNor[ot+2]=-H;const Rt=(t*dn+b)*2;this.cUv[Rt]=C,this.cUv[Rt+1]=L*1.4+h*.55;const kt=(t*dn+b)*4,Y=I+.06*L;for(let Pt=0;Pt<3;Pt++)this.cCol[kt+Pt]=Math.min(1,this.foam[Pt]*Y);const Q=1-.5*k(.1,.9,L),St=o[a+Math.min(f-1,Math.round(z))],it=Math.max(.5*u*Q*(.55+.45*St)*(.85+.25*w),d);this.cCol[kt+3]=Math.min(1,x*it),this.cHv[t*dn+b]=d}const T=Math.round(n);for(let b=0;b<wi;b++){const L=(t*wi+b)*3,z=(t*wi+b)*4,F=Wn(T*7+b,73),G=(h*(.7+.5*F)+F*13.7)%1,q=Math.min(f-1,y+Math.round((v-y)*Wn(T*3+b,79))),K=(Wn(T*11+b,83)-.5)*.9;this.sPos[L]=e+K+.6*G*(F-.5),this.sPos[L+1]=x>0?r[y]+.15+(.5+.35*l)*Math.sqrt(G)*(.6+F):-50,this.sPos[L+2]=i[q]-(.4+.5*l)*G*(.5+F);for(let Z=0;Z<3;Z++)this.sCol[z+Z]=this.foam[Z];this.sCol[z+3]=x*.45*Math.sin(Math.PI*Math.min(1,G*1.3))*(1-G)}}hideColumn(t,e,n,i){const r=re;for(let o=0;o<Hn;o++){const a=Math.round(o/(Hn-1)*(r-1)),c=(t*Hn+o)*3;this.bPos[c]=e,this.bPos[c+1]=i[a],this.bPos[c+2]=n[a],this.bCol[(t*Hn+o)*4+3]=0}for(let o=0;o<dn;o++){const a=Math.round(o/(dn-1)*(r-1)),c=(t*dn+o)*3;this.cPos[c]=e,this.cPos[c+1]=i[a],this.cPos[c+2]=n[a],this.cCol[(t*dn+o)*4+3]=0}for(let o=0;o<wi;o++)this.sPos[(t*wi+o)*3+1]=-50,this.sCol[(t*wi+o)*4+3]=0}end(t,e,n,i,r,o){if(this.band.visible=this.curtain.visible=this.spray.visible=this.any,this.any){const h=this.band.geometry.attributes;h.position.needsUpdate=!0,h.normal.needsUpdate=!0,h.color.needsUpdate=!0;const u=this.curtain.geometry.attributes;u.position.needsUpdate=!0,u.normal.needsUpdate=!0,u.color.needsUpdate=!0,u.uv.needsUpdate=!0,u.heavy.needsUpdate=!0;const d=this.spray.geometry.attributes;d.position.needsUpdate=!0,d.color.needsUpdate=!0}const a=i>.05&&Number.isFinite(t+e+n)?1:0,c=1-Math.exp(-4*Math.max(0,Number.isFinite(o)?o:0));this.ballOn+=(a-this.ballOn)*c,a&&(this.ball.position.set(t,e,n),this.lastR=i);const l=this.lastR*this.ballOn;if(this.ball.visible=l>.05,this.ball.visible){const h=1+.06*Math.sin(r*5.3);this.ball.scale.set(l*1.25*h,l*(.9+.08*Math.sin(r*4.1+1)),l*h),this.ball.rotation.set(r*2.2,r*.7,0)}}}const Ri=4,lE=.6;class hE{constructor(t){M(this,"mesh");M(this,"pos");M(this,"col");M(this,"idx");M(this,"fed");M(this,"time",0);M(this,"riderS",NaN);M(this,"white",[.93,.96,.98]);this.cols=t;const e=t*Ri;this.pos=new Float32Array(e*3),this.col=new Float32Array(e*4),this.idx=new Uint16Array((t-1)*(Ri-1)*6),this.fed=new Uint8Array(t);const n=new be;n.setAttribute("position",new Yt(this.pos,3).setUsage(Se)),n.setAttribute("color",new Yt(this.col,4).setUsage(Se)),n.setIndex(new Yt(this.idx,1).setUsage(Se)),this.mesh=new oe(n,new Dn({vertexColors:!0,transparent:!0,depthWrite:!1,side:Be})),this.mesh.name="crestSpray",this.mesh.frustumCulled=!1}setTint(t){for(let e=0;e<3;e++)this.white[e]=t[e]}begin(t,e){this.time=t,this.riderS=e,this.fed.fill(0)}column(t,e,n,i,r,o,a,c,l){if(!l||i<=-1||i>=30||o>=.6)return;const h=this.riderS,u=h===h?k(2,5,Math.abs(n-h)):1,d=k(-1,2,i)*(1-k(10,30,i))*(1-o/.6)*u;if(d<=0)return;const f=this.time,m=Math.max(r,c),_=c>r?a:0,g=.4+.6*De(n*.45-f*1.1,61)*De(n*1.3+f*.7,67),p=1.6+.9*De(n*.3+f*.5,71),v=.5+.4*De(n*.5-f*.6,73),y=this.white;for(let x=0;x<Ri;x++){const N=x/(Ri-1),w=t*Ri+x,C=w*3;this.pos[C]=e-.15*N,this.pos[C+1]=m+.04+v*Math.sin(N*2.2),this.pos[C+2]=_-.05-p*N;const I=w*4;this.col[I]=y[0],this.col[I+1]=y[1],this.col[I+2]=y[2],this.col[I+3]=lE*d*g*k(0,.25,N)*(1-N)*(1-N)*1.8}this.fed[t]=1}end(){let t=0;for(let n=0;n<this.cols-1;n++)if(!(!this.fed[n]||!this.fed[n+1]))for(let i=0;i<Ri-1;i++){const r=n*Ri+i,o=r+Ri;this.idx[t++]=r,this.idx[t++]=o,this.idx[t++]=r+1,this.idx[t++]=r+1,this.idx[t++]=o,this.idx[t++]=o+1}const e=this.mesh.geometry;e.setDrawRange(0,t),this.mesh.visible=t>0,e.index.needsUpdate=!0,e.attributes.position.needsUpdate=!0,e.attributes.color.needsUpdate=!0}}const Tn=180,Rs=1,Hs=14,th=28,eh=14,ts=Hs+th+eh,uE=35,dE=70,ns=[],Zr=[];for(let s=0;s<Hs;s++)ns.push(0),Zr.push(-14*Math.pow(1-s/Hs,1.6));for(let s=0;s<th;s++)ns.push(1),Zr.push(Math.pow(s/(th-1),1.25));for(let s=1;s<=eh;s++)ns.push(2),Zr.push(uE*Math.pow(s/eh,1.8));const qn=[.015,.11,.24],ca=[.03,.19,.33],fE=[.07,.5,.55],pE=[.35,.85,.8],la=[.04,.21,.34],mE=[.93,.96,.98],gE=[ca[0]/qn[0],ca[1]/qn[1],ca[2]/qn[2]],_E=[la[0]/qn[0],la[1]/qn[1],la[2]/qn[2]],xE=.85,Wc=1.3,vE=.6,Lm=[],Im=[];for(let s=0;s<ts;s++){const t=ns[s]===1?Zr[s]:1,e=k(.6,.04,t);Lm.push(ns[s]===1?e*e:0),Im.push(ns[s]===1?1-vE*k(.5,1,t):1)}const ME=.021,yE=2.5,bE=-4.5,SE=11,TE=.06,EE=3.5,AE=14,kf=.25,wE=.25,RE=1.03;function CE(s,t,e){const n=yE*.5;return(e+s.barrelShape(t-n)+s.barrelShape(t+n)+s.barrelShape(t-2*n)+s.barrelShape(t+2*n))/5}const Nm=[],Dm=[],Fm=[];for(let s=0;s<ts;s++){const t=e=>{const n=Math.sin(s*127.1+e*311.7)*43758.5453;return n-Math.floor(n)};Nm.push((s%2?-1:1)*(.4+.6*t(1))),Dm.push(.022+.045*t(2)),Fm.push(t(3))}const PE=-1.5,LE=-6;function Hf(s,t){const e=new Uint32Array((s-1)*(t-1)*6);let n=0;for(let i=0;i<s-1;i++)for(let r=0;r<t-1;r++){const o=i*t+r,a=(i+1)*t+r,c=i*t+r+1,l=(i+1)*t+r+1;e[n++]=o,e[n++]=a,e[n++]=c,e[n++]=a,e[n++]=l,e[n++]=c}return e}function zf(s,t,e,n,i=0,r=e-1){for(let o=Math.max(0,i);o<=Math.min(e-1,r);o++){const a=o>0?o-1:o,c=o<e-1?o+1:o;for(let l=0;l<n;l++){const h=l>0?l-1:l,u=l<n-1?l+1:l,d=(a*n+l)*3,f=(c*n+l)*3,m=(o*n+h)*3,_=(o*n+u)*3,g=s[f]-s[d],p=s[f+1]-s[d+1],v=s[f+2]-s[d+2],y=s[_]-s[m],x=s[_+1]-s[m+1],N=s[_+2]-s[m+2];let w=p*N-v*x,C=v*y-g*N,I=g*x-p*y;const T=Math.sqrt(w*w+C*C+I*I),b=(o*n+l)*3;T>1e-12?(w/=T,C/=T,I/=T):(w=0,C=1,I=0),t[b]=w,t[b+1]=C,t[b+2]=I}}}const Xc=10,IE=s=>s[re-1]<s[0]-.05;function NE(){if(typeof document>"u")return null;const s=document.createElement("canvas");s.width=s.height=32;const t=s.getContext("2d");if(!t)return null;const e=t.createRadialGradient(16,16,0,16,16,16);return e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.5,"rgba(255,255,255,0.6)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,32,32),new wa(s)}const Ci={min:.38,s0:1.4,s1:4.5,u0:.1,u1:.5,deep0:.15,deep1:.42};class DE{constructor(t){M(this,"group",new Fe);M(this,"surface");M(this,"lip");M(this,"pos");M(this,"col");M(this,"lipPos");M(this,"lipCol");M(this,"nor");M(this,"lipNor");M(this,"geo");M(this,"lipGeo");M(this,"s0",0);M(this,"lipAlpha");M(this,"rider",null);M(this,"feather");M(this,"featherPos");M(this,"colU",new Float32Array(re));M(this,"colY",new Float32Array(re));M(this,"curtain",new cE(Tn));M(this,"crestSpray",new hE(Tn));M(this,"pDeep",qn.slice());M(this,"pBack",ca.slice());M(this,"pTeal",fE.slice());M(this,"pGlow",pE.slice());M(this,"pFlat",la.slice());M(this,"pWhite",mE.slice());this.wave=t;const e=Tn*ts;this.pos=new Float32Array(e*3),this.col=new Float32Array(e*3),this.geo=new be,this.geo.setAttribute("position",new Yt(this.pos,3).setUsage(Se)),this.geo.setAttribute("color",new Yt(this.col,3).setUsage(Se)),this.nor=new Float32Array(e*3),this.geo.setAttribute("normal",new Yt(this.nor,3).setUsage(Se)),this.geo.setIndex(new Yt(Hf(Tn,ts),1));const n=new We({vertexColors:!0,roughness:.32,metalness:.05,side:Be});this.surface=new oe(this.geo,n),this.surface.frustumCulled=!1,this.surface.receiveShadow=!0;const i=Tn*re;this.lipPos=new Float32Array(i*3),this.lipCol=new Float32Array(i*4),this.lipAlpha=new Float32Array(i).fill(1),this.lipGeo=new be,this.lipGeo.setAttribute("position",new Yt(this.lipPos,3).setUsage(Se)),this.lipGeo.setAttribute("color",new Yt(this.lipCol,4).setUsage(Se)),this.lipNor=new Float32Array(i*3),this.lipGeo.setAttribute("normal",new Yt(this.lipNor,3).setUsage(Se)),this.lipGeo.setIndex(new Yt(Hf(Tn,re),1));const r=new We({vertexColors:!0,roughness:.3,metalness:.05,side:Be,transparent:!0});this.lip=new oe(this.lipGeo,r),this.lip.frustumCulled=!1,this.lip.receiveShadow=!0,this.featherPos=new Float32Array(Tn*Xc*3);const o=new be;o.setAttribute("position",new Yt(this.featherPos,3).setUsage(Se)),this.feather=new Aa(o,new Yr({color:15924223,size:.4,transparent:!0,opacity:.55,depthWrite:!1,map:NE()})),this.feather.frustumCulled=!1,this.group.add(this.surface,this.lip,this.feather,this.curtain.group,this.crestSpray.mesh)}setWaterTint(t){for(let e=0;e<3;e++)this.pDeep[e]=t.deep[e],this.pBack[e]=Math.min(1,t.deep[e]*gE[e]),this.pFlat[e]=Math.min(1,t.deep[e]*_E[e]),this.pTeal[e]=t.face[e],this.pGlow[e]=t.lip[e],this.pWhite[e]=t.foam[e];this.curtain.setTint(t.foam,t.lip,t.face),this.crestSpray.setTint(t.foam)}setRider(t){this.rider=t&&Number.isFinite(t.s)&&Number.isFinite(t.u)&&Number.isFinite(t.deep)?{s:t.s,u:t.u,deep:t.deep}:null}lipOpacity(t,e){const n=this.rider;if(!n||!(n.deep>Ci.deep0))return 1;const i=k(Ci.deep0,Ci.deep1,n.deep)*(1-k(Ci.s0,Ci.s1,Math.abs(t-n.s)))*k(n.u+Ci.u0,n.u+Ci.u1,e);return 1-(1-Ci.min)*i}update(t,e){if(!Number.isFinite(t))return;Number.isFinite(e)||(e=0);const n=this.wave;this.s0=Math.round(t/Rs)*Rs-dE*Rs;const i=this.pos,r=this.col;let o=!1,a=Tn,c=-1;const l=this.pDeep,h=this.pBack,u=this.pTeal,d=this.pGlow,f=this.pFlat,m=this.pWhite;this.curtain.begin(),this.crestSpray.begin(e,this.rider&&this.rider.deep>0?this.rider.s:NaN);const _=n.breakS,g=n.peeling?Math.max(n.barrelShape(_-3),n.barrelShape(_-5)):0,p=g>0?Math.max(n.amp(_-3),n.amp(_-5))*g:0;for(let v=0;v<Tn;v++){const y=am(this.s0+v*Rs,_),x=Math.max(n.amp(y),.001),N=n.faceWidth(y,x),w=n.barrelShape(y),C=n.peeling?(1-n.breakBlend(y))*n.peelBlend*(g>0?1:1-w):0,I=g>0&&y<_-1?CE(n,y,w):w,T=I>0?(I===w?n.barrelReach(y):ve.cover*N)*ma.land:0,b=I>.05?dm(n,y,x):-99,L=b,z=I===w?w:I*k(1,2.5,b),F=this.rider&&this.rider.deep>0?Math.abs(y-this.rider.s):99,G=.32*k(1.5,3.5,F),q=b,K=n.hollow(y),Z=-y,H=y-_,st=g>0?Gt((bE-H)/SE,0,1):1,ot=k(0,.12,st),_t=g>0?2:(EE+_-this.s0-v*Rs)/AE,Rt=_t>=1?3.5:3.5*(kf+(1-kf)*k(0,1,_t)),kt=p>0&&H<-3?(1-w)*k(-3,-7.5,H)*(1-k(-11,-22,H)):0,Y=p*(1-.25*k(-7,-55,H));let Q=kt>0&&Y>x?x+(Y-x)*kt:x;w>=.05&&Q>x&&(Q=g>0?Math.min(Q,x*RE):x);const St=Q>x?n.faceWidth(y,Q)*(1-.4*kt):N,it=ME*(.94+.06*De(y*.06,91))*(1-C),Pt=n.peeling?k(-3,0,H)*(1-k(16,40,H))*(1-.7*w):0;for(let E=0;E<ts;E++){const S=ns[E],B=Zr[E];let V,J,j,gt,at;if(S===0){V=B;const D=V/(2.4*Q);J=Q*Math.exp(-D*D);const ft=Gt(J/Q,0,1)*.6||0;j=l[0]+(h[0]-l[0])*ft,gt=l[1]+(h[1]-l[1])*ft,at=l[2]+(h[2]-l[2])*ft}else if(S===1){const D=B;V=D*St;const ft=1-D;J=Q*ft*ft;const $=2*Q*ft,nt=$/Math.sqrt(St*St+$*$),vt=k(.2,.9,nt)*Math.pow(ft,.6)*.9;j=l[0]+(u[0]-l[0])*vt,gt=l[1]+(u[1]-l[1])*vt,at=l[2]+(u[2]-l[2])*vt;const bt=vt*vt*vt*(.4+.6*K)*k(.05,0,Math.abs(D-.12)-.1);j+=(d[0]-j)*bt*.5,gt+=(d[1]-gt)*bt*.5,at+=(d[2]-at)*bt*.5;const Wt=xE*Lm[E]*(.55+.45*K);j+=(d[0]*Wc-j)*Wt,gt+=(d[1]*Wc-gt)*Wt,at+=(d[2]*Wc-at)*Wt;const me=1-Im[E];if(j+=(l[0]*.8-j)*me,gt+=(l[1]*.8-gt)*me,at+=(l[2]*.8-at)*me,it>0){const Le=.2126*j+.7152*gt+.0722*at,ie=y*Dm[E]+Fm[E],Ye=ie-Math.floor(ie),_n=4*Ye*(1-Ye),ls=1+it*Nm[E]*_n/Math.max(Le,.06);j*=ls,gt*=ls,at*=ls}}else{V=St+B,J=0;const D=Math.exp(-B/10);j=l[0]+(f[0]-l[0])*D,gt=l[1]+(f[1]-l[1])*D,at=l[2]+(f[2]-l[2])*D}const xt=V-St,Ut=C>0||xt*xt<9.7||L>0&&V-L>-1.2&&V-L<2.4?.55*De(y*.83+V*2.31+e*.6,7)+.45*De(y*2.13-V*1.71-e*1.4,13):.5,rt=Math.exp(-(xt*xt)/.7)*(.2+.55*Ut)*Math.min(1,Q/n.A0);let At=0;if(C>0){const D=S===0?Gt(1+V/3,0,1)*.7:S===1?1:Math.exp(-Math.max(0,xt)/Rt);if(At=C*D*(.55+.45*Ut)*(st<1?ot*k(0,1,st+.45*(Ut-.5)):1),_t<1.25){const ft=Gt(_t+.45*(De(y*.37+V*.9+e*.3,29)-.5),0,1);At*=ft*(1+wE*(1-ft))}J+=At*(g>0?TE:.18)*(Ut-.3)}let Tt=0;if(L>0){const D=V-L;D>-1.2&&D<2.4&&(Tt=V<q+.5||D<0?z*Math.exp(-(D*D)/.25)*(.45+.35*Ut):z*Math.exp(-(D*D)/.7)*(.75+.25*Ut),J+=Tt*G*(.6+.4*Ut))}const Ht=Pt>0?Pt*(E===Hs?.97:E===Hs-1?.55:E===Hs+1?.3:0):0,Et=Tt>0&&V<Math.max(L,q+.5)?Tt:0,Qt=Gt(Math.max(rt,At,Ht,Et),0,1),qt=.85+.15*Ut;if(j+=(m[0]*qt-j)*Qt,gt+=(m[1]*qt-gt)*Qt,at+=(m[2]*qt-at)*Qt,T>0&&V>-.5){const D=1-.68*I*(1-k(.85*T,1.05*T,V));j*=D,gt*=D,at*=D}if(Tt>0&&Et===0){const D=.9+.1*Ut;j+=(m[0]*D-j)*Tt,gt+=(m[1]*D-gt)*Tt,at+=(m[2]*D-at)*Tt}const ne=(v*ts+E)*3;i[ne]=Z,i[ne+1]=J,i[ne+2]=V,r[ne]=j,r[ne+1]=gt,r[ne+2]=at}const Bt=this.colU,Lt=this.colY;Ph(n,y,x,N,Bt,Lt)&&(o=!0,v<a&&(a=v),c=v);const Xt=Ia(n,y),tt=this.s0+v*Rs,ht=w*k(PE,LE,y-_);let P=0;for(let E=1;E<re;E++)Lt[E]>Lt[P]&&(P=E);const lt=w*Xt,et=y>_&&w<.97?Math.min(1,4*w*(1-w))*Xt:0,ut=lt*(1-et),ct=k(1,-6,H);for(let E=0;E<re;E++){const S=E/(re-1),B=v*re+E,V=B*3;this.lipPos[V]=Z,this.lipPos[V+1]=Lt[E],this.lipPos[V+2]=Bt[E];const J=this.lipOpacity(tt,Bt[E]);this.lipAlpha[B]=J;const j=(.25+.7*S*S)*(1-Xt)+Xt*.9*k(.86,1,S),gt=Xt*(.45*(1-k(.1,.5,S))+.25*k(.55,.85,S)*(1-k(.88,1,S))),at=(1-J)*.35,xt=B*4;if(lt>0){const Ut=Math.sin(y*.9+S*5.5-e*2.2)+.6*Math.sin(y*2.3-S*3.1+e*1.3),rt=ut*.1*Math.max(0,Ut)*(1-ct*.6),At=.18*(1-S)*(1-S)+.8*et;for(let Tt=0;Tt<3;Tt++){let Ht=u[Tt]+(m[Tt]-u[Tt])*j+(d[Tt]-u[Tt])*at;Ht*=1-gt;let Et=u[Tt]+((f[Tt]+l[Tt])*.5-u[Tt])*(.3+.7*ct)*ut;Et+=(d[Tt]-Et)*(At+rt),Et+=(m[Tt]-Et)*.5*et,this.lipCol[xt+Tt]=Math.min(1,Ht+(Et-Ht)*lt)}this.lipCol[xt+3]=Math.min(J,1-ut*(.6-.42*ct));continue}for(let Ut=0;Ut<3;Ut++){const rt=(u[Ut]+(m[Ut]-u[Ut])*j+(d[Ut]-u[Ut])*at)*(1-gt);this.lipCol[xt+Ut]=Math.min(1,rt)}this.lipCol[xt+3]=J}const Ct=g>0?k(-3.5,-9,H):H<-4?(1-w)*k(-4,-7,H):0;if(Ct>0)for(let E=0;E<re;E++){const S=(v*re+E)*4,B=Math.min(1,Ct*(1+.45*Math.sin(y*2.1+E*1.7)));for(let V=0;V<3;V++)this.lipCol[S+V]+=(m[V]*.9-this.lipCol[S+V])*B}for(let E=0;E<Xc;E++){const S=(v*Xc+E)*3,B=De(y*1.9+E*7.3+e*2.7,21)-.5,V=De(y*2.3-E*3.1+e*3.3,23)-.5;this.featherPos[S]=Z+B*.6,this.featherPos[S+1]=Xt>.25&&IE(Lt)?Lt[P]+.12+.35*Math.abs(V):-50,this.featherPos[S+2]=Bt[P]-.15-.6*Math.abs(B)}this.crestSpray.column(v,Z,y,H,Q,w,Bt[P],Lt[P],n.peeling);const mt=g>0?.9*k(-3.5,-8,H):0;this.curtain.column(v,Z,y,Bt,Lt,this.lipAlpha,v*re,w*Xt,x,e,.75*ht,mt)}this.geo.attributes.position.needsUpdate=!0,this.geo.attributes.color.needsUpdate=!0,this.geo.attributes.normal.needsUpdate=!0,zf(i,this.nor,Tn,ts),this.lip.visible=o,this.curtain.end(0,0,0,0,e,0),this.crestSpray.end(),this.curtain.band.visible=!1,this.feather.geometry.attributes.position.needsUpdate=!0,o&&(this.lipGeo.attributes.position.needsUpdate=!0,this.lipGeo.attributes.color.needsUpdate=!0,zf(this.lipPos,this.lipNor,Tn,re,a-1,c+1),this.lipGeo.attributes.normal.needsUpdate=!0)}}function FE(){const s=new Fe,t=(e,n,i,r,o,a,c)=>{const l=new js(1,28,14),h=l.attributes.position;for(let d=0;d<h.count;d++){const f=h.getX(d),m=h.getY(d),_=h.getZ(d),g=.82+.36*De(f*3.1+_*5.3+m*2.2+10,c);h.setXYZ(d,f*g,m*g,_*g)}l.computeVertexNormals();const u=new oe(l,new We({color:a,roughness:.95,flatShading:!0}));u.scale.set(e,n,i),u.position.set(r,-n*.15,o),s.add(u)};return t(80,26,50,120,-95,6974012,3),t(40,14,26,58,-50,7828031,5),t(20,6,14,30,-24,10517070,9),t(6,2.2,5,18,-12,9071178,11),s}function UE(s){const t=new We({color:new It(qn[0],qn[1],qn[2]),roughness:.4}),e=new oe(new Kr(1600,1600,1,1),t);return e.rotation.x=-Math.PI/2,e.position.y=-.03,s.add(e),s.add(FE()),{update(n,i){e.position.x=n,i&&t.color.setRGB(i[0],i[1],i[2])}}}const OE=600;function va(s){const t=s-Math.floor(s);return t>=1?0:t}function Vf(s,t){return typeof t=="number"&&Number.isFinite(t)?va(t):va(s/OE)}function BE(s){if(!s)return null;const t=/[?&]time=([^&#]*)/.exec(s.startsWith("?")||s.startsWith("&")?s:"?"+s);if(!t||t[1].trim()==="")return null;let e;try{e=decodeURIComponent(t[1])}catch{return null}const n=Number(e);return Number.isFinite(n)?va(n):null}function zt(s){const t=e=>{const n=e/255;return n<=.04045?n/12.92:Math.pow((n+.055)/1.055,2.4)};return[t(s>>16&255),t(s>>8&255),t(s&255)]}const Gf={el:7,sunColor:zt(16763034),sunI:1.7,hemiSky:zt(16173496),hemiGround:zt(9072758),hemiI:1.5,skyTop:zt(8363984),skyHorizon:zt(16238246),fog:zt(15780274),cloud:zt(16765634),vig:.3,sea:[.05,.11,.2]},Go=[{p:0,az:30,...Gf},{p:.25,az:45,el:36,sunColor:zt(16770756),sunI:2.1,hemiSky:zt(13624564),hemiGround:zt(5003868),hemiI:1,skyTop:zt(5214160),skyHorizon:zt(12902382),fog:zt(13820646),cloud:zt(16775406),vig:.22,sea:[.02,.11,.235]},{p:.4,az:70,el:62,sunColor:zt(16773596),sunI:2.3,hemiSky:zt(13822198),hemiGround:zt(4872792),hemiI:.95,skyTop:zt(4163273),skyHorizon:zt(12114672),fog:zt(13624814),cloud:zt(16777215),vig:.2,sea:[.015,.11,.24]},{p:.6,az:80,el:36,sunColor:zt(16769200),sunI:2.15,hemiSky:zt(14542054),hemiGround:zt(8418398),hemiI:1.6,skyTop:zt(4884676),skyHorizon:zt(15131344),fog:zt(14867659),cloud:zt(16773852),vig:.24,sea:[.03,.11,.22]},{p:.69,az:105,el:20,sunColor:zt(16763024),sunI:1.9,hemiSky:zt(16175804),hemiGround:zt(10518640),hemiI:2.3,skyTop:zt(5932228),skyHorizon:zt(15913134),fog:zt(15519406),cloud:zt(16768192),vig:.28,sea:[.05,.105,.2]},{p:.78,az:150,el:6,sunColor:zt(16751194),sunI:1.6,hemiSky:zt(16303272),hemiGround:zt(10779244),hemiI:2.4,skyTop:zt(6978752),skyHorizon:zt(16363646),fog:zt(15774862),cloud:zt(16757900),vig:.34,sea:[.07,.1,.18]},{p:.9,az:75,el:9,sunColor:zt(16756348),sunI:1.5,hemiSky:zt(16303798),hemiGround:zt(10517108),hemiI:2.3,skyTop:zt(7636678),skyHorizon:zt(16300696),fog:zt(15776928),cloud:zt(16761e3),vig:.33,sea:[.06,.1,.19]},{p:1,az:30,...Gf}],kE=s=>s*s*(3-2*s),Ii=(s,t,e)=>s+(t-s)*e,Pi=(s,t,e)=>[Ii(s[0],t[0],e),Ii(s[1],t[1],e),Ii(s[2],t[2],e)],Wf=Math.PI/180;function Xf(s){const t=va(s);let e=0;for(;e<Go.length-2&&t>=Go[e+1].p;)e++;const n=Go[e],i=Go[e+1],r=kE(Math.min(1,Math.max(0,(t-n.p)/(i.p-n.p)))),o=Ii(n.az,i.az,r)*Wf,a=Ii(n.el,i.el,r)*Wf,c=Math.cos(a),l=[-Math.sin(o)*c,Math.sin(a),Math.cos(o)*c];return{phase:t,sunDir:l,sunColor:Pi(n.sunColor,i.sunColor,r),sunIntensity:Ii(n.sunI,i.sunI,r),hemiSky:Pi(n.hemiSky,i.hemiSky,r),hemiGround:Pi(n.hemiGround,i.hemiGround,r),hemiIntensity:Ii(n.hemiI,i.hemiI,r),skyTop:Pi(n.skyTop,i.skyTop,r),skyHorizon:Pi(n.skyHorizon,i.skyHorizon,r),fogColor:Pi(n.fog,i.fog,r),cloudColor:Pi(n.cloud,i.cloud,r),vignette:Ii(n.vig,i.vig,r),seaColor:Pi(n.sea,i.sea,r)}}const qf=1024,Kf=9,Yf=5,Wo=10,Xo=60,HE=1100,zE=`
varying vec3 vDir;
void main() {
  vDir = normalize(position);
  vec4 p = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  gl_Position = p.xyww; // always at the far plane
}`,VE=`
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
}`;function GE(s){let t=s>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}function WE(s){const t=[];for(let n=0;n<Yf;n++){const i=new Ca(1,1),r=n/(Yf-1)-.5,o=14+12*(1-Math.abs(r)*1.6)+s()*6,a=i.attributes.position;for(let c=0;c<a.count;c++){const l=a.getY(c);a.setY(c,Math.max(l,-.35))}i.scale(o*1.25,o*.8,o),i.translate(r*70+(s()-.5)*10,o*.25+s()*4,(s()-.5)*16),t.push(i)}const e=C1(t,!1);for(const n of t)n.dispose();return e.computeVertexNormals(),e}function XE(s,t,e={}){const n=e.fixedPhase!==void 0?e.fixedPhase:typeof location<"u"?BE(location.search):null;t.shadowMap.enabled=!0,t.shadowMap.type=dp;const i=new ub(16777215,4473924,1);s.add(i);const r=new sm(16777215,2);r.castShadow=!0,r.shadow.mapSize.set(qf,qf);const o=r.shadow.camera;o.left=-Wo,o.right=Wo,o.top=Wo,o.bottom=-Wo,o.near=1,o.far=Xo+40,o.updateProjectionMatrix(),r.shadow.bias=-6e-4,r.shadow.normalBias=.03,s.add(r),s.add(r.target);const a=new pi({uniforms:{uTop:{value:new It},uHorizon:{value:new It},uSunDir:{value:new R(0,1,0)},uSunColor:{value:new It}},vertexShader:zE,fragmentShader:VE,side:Xe,depthWrite:!1,fog:!1}),c=new oe(new js(HE,24,12),a);c.frustumCulled=!1,c.renderOrder=-10,s.add(c),s.background=null;const l=new xh(16777215,80,650);s.fog=l;const h=new $y({flatShading:!0,fog:!1}),u=new Fe,d=GE(1234),f=[],m=1300;for(let x=0;x<Kf;x++){const N=new oe(WE(d),h);N.userData.lookCloud=!0;const w=x<6;N.position.set(-m/2+(x+d()*.6)*(m/Kf),w?55+d()*45:70+d()*40,w?-620-d()*280:-380-d()*150),N.rotation.y=(d()-.5)*.6;const C=1.2+d()*.7;N.scale.set(C,C*(.8+d()*.3),C),u.add(N),f.push({m:N,speed:1.2+d()*1.6})}s.add(u);let _=null;typeof document<"u"&&document.body&&(_=document.createElement("div"),_.style.cssText="position:fixed;inset:0;pointer-events:none;z-index:1;background:radial-gradient(ellipse at 50% 45%, rgba(0,0,0,0) 55%, rgba(60,30,20,0.85) 100%);",(e.overlayParent??document.body).appendChild(_));let g=0,p=Xf(Vf(0,n));const v=new It;function y(x,N){r.color.setRGB(x.sunColor[0],x.sunColor[1],x.sunColor[2]),r.intensity=x.sunIntensity,r.target.position.set(N.x,N.y,N.z),r.position.set(N.x+x.sunDir[0]*Xo,N.y+x.sunDir[1]*Xo,N.z+x.sunDir[2]*Xo),r.target.updateMatrixWorld(),i.color.setRGB(x.hemiSky[0],x.hemiSky[1],x.hemiSky[2]),i.groundColor.setRGB(x.hemiGround[0],x.hemiGround[1],x.hemiGround[2]),i.intensity=x.hemiIntensity,a.uniforms.uTop.value.setRGB(x.skyTop[0],x.skyTop[1],x.skyTop[2]),a.uniforms.uHorizon.value.setRGB(x.skyHorizon[0],x.skyHorizon[1],x.skyHorizon[2]),a.uniforms.uSunDir.value.set(x.sunDir[0],x.sunDir[1],x.sunDir[2]),a.uniforms.uSunColor.value.setRGB(x.sunColor[0],x.sunColor[1],x.sunColor[2]),c.position.set(N.x,0,N.z),l.color.setRGB(x.fogColor[0],x.fogColor[1],x.fogColor[2]),v.setRGB(x.cloudColor[0],x.cloudColor[1],x.cloudColor[2]),h.color.copy(v).multiplyScalar(.55),h.emissive.copy(v).multiplyScalar(.5),_&&(_.style.opacity=x.vignette.toFixed(3))}return y(p,{x:0,y:0,z:0}),{get state(){return p},update(x,N){const w=Number.isFinite(x)&&x>0?x:0;g+=w,p=Xf(Vf(g,n)),u.position.x=N.x;for(const C of f)C.m.position.x+=C.speed*w,C.m.position.x>m/2&&(C.m.position.x-=m);y(p,N)},dispose(){var x;s.remove(i,r,r.target,c,u),s.fog===l&&(s.fog=null),(x=r.shadow.map)==null||x.dispose(),c.geometry.dispose(),a.dispose();for(const N of f)N.m.geometry.dispose();h.dispose(),_==null||_.remove(),_=null}}}const jf={deep:[.05,.095,.17],face:[.42,.37,.27],lip:[.78,.64,.44],foam:[1,.91,.8]},qo=[{p:0,...jf},{p:.25,deep:[.02,.11,.235],face:[.08,.48,.53],lip:[.38,.84,.78],foam:[.94,.96,.97]},{p:.4,deep:[.015,.11,.24],face:[.07,.5,.55],lip:[.35,.85,.8],foam:[.93,.96,.98]},{p:.6,deep:[.025,.11,.225],face:[.09,.48,.5],lip:[.42,.84,.76],foam:[.95,.95,.94]},{p:.69,deep:[.05,.105,.2],face:[.22,.43,.4],lip:[.62,.78,.6],foam:[.98,.93,.86]},{p:.78,deep:[.08,.095,.165],face:[.48,.37,.25],lip:[.86,.62,.4],foam:[1,.89,.77]},{p:.9,deep:[.07,.095,.175],face:[.43,.35,.3],lip:[.8,.62,.5],foam:[1,.9,.83]},{p:1,...jf}],qE=s=>s*s*(3-2*s);function KE(s){if(!Number.isFinite(s))return 0;const t=s-Math.floor(s);return t>=1?0:t}function Ko(s,t,e,n){return s[0]=t[0]+(e[0]-t[0])*n,s[1]=t[1]+(e[1]-t[1])*n,s[2]=t[2]+(e[2]-t[2])*n,s}function YE(s,t){const e=KE(s);let n=0;for(;n<qo.length-2&&e>=qo[n+1].p;)n++;const i=qo[n],r=qo[n+1],o=qE(Math.min(1,Math.max(0,(e-i.p)/(r.p-i.p))));return Ko(t.deep,i.deep,r.deep,o),Ko(t.face,i.face,r.face,o),Ko(t.lip,i.lip,r.lip,o),Ko(t.foam,i.foam,r.foam,o),t}const qc=[.12,.62,.72],$f=.5,jE=.9,$E=1/.35,ZE=1/.5,Yo=s=>s>0?s<1?s:1:0;function JE(s,t,e){const n=Yo(s),i=Yo((Yo(t)-$f)/(jE-$f)),r=i*i*(3-2*i),o=e>0?e:0;if(o===0)return n;const a=r-n,c=(a>0?$E:ZE)*o,l=Math.abs(a)<=c?a:Math.sign(a)*c;return Yo(n+l)}function Zf(s,t){const e=Number.isFinite(s)?s:0,n=Number.isFinite(t)?t:0;return .06*Math.sin(2.1*e+.9*n)+.04*Math.sin(3.7*e-1.3*n+1.1)}const Jf=[.1,.35,.6,.85,1.1],QE=.6,tA=.16,eA=.75,Kc=.45,nA=12158819;function Qf(s,t){const e=s;if(!e.isSkinnedMesh)return new oe(s.geometry,t);const n=new Gp(e.geometry,t);return n.bindMode=pp,n.bind(e.skeleton,e.bindMatrix),n}function tp(s){return s.isSkinnedMesh?s.bindMatrix:s.matrixWorld}const Yc=new Float32Array(re),jc=new Float32Array(re);function iA(s,t,e,n,i,r,o,a){const c=e-s,l=n-t,h=o-i,u=a-r,d=c*u-l*h;if(Math.abs(d)<1e-12)return!1;const f=i-s,m=r-t,_=(f*u-m*h)/d,g=(f*l-m*c)/d;return _>=0&&_<=1&&g>=0&&g<=1}function sA(s,t,e,n){if(!t.riding||!t.inTube)return 0;const i=La(s,t.s),r=Math.max(s.amp(i),.001),o=s.faceWidth(i,r);if(!lm(s,i,r,o,Yc,jc)||Ia(s,i)<.3)return 0;const a=e.group.position,c=e.by;let l=0;for(const h of Jf){const u=a.z+c.z*h,d=a.y+c.y*h;for(let f=0;f+1<re;f++)if(iA(u,d,n.z,n.y,Yc[f],jc[f],Yc[f+1],jc[f+1])){l++;break}}return l/Jf.length}class Um{constructor(t){M(this,"ghost",new Fe);M(this,"reflection",new Fe);M(this,"amount",0);M(this,"covered",0);M(this,"ghostMat");M(this,"ghosts",[]);M(this,"refls",[]);M(this,"reflMats",[]);M(this,"reflBase",[]);M(this,"mirror",new Vt);M(this,"camPos",new R);M(this,"reflOn",0);this.rig=t,this.ghostMat=new Dn({color:new It().setRGB(qc[0],qc[1],qc[2]),transparent:!0,opacity:0,depthTest:!1,depthWrite:!1,fog:!1});const e=new Map;for(const n of t.parts){const i=Qf(n,this.ghostMat);i.matrixAutoUpdate=!1,i.matrixWorldAutoUpdate=!1,i.renderOrder=999,i.frustumCulled=!1,this.ghosts.push(i),this.ghost.add(i);const r=n.material;let o=e.get(r);o||(o=new Dn({color:r.map?new It(nA):r.color?r.color.clone():new It(.5,.5,.5),transparent:!0,opacity:0,depthTest:!1,depthWrite:!1,side:Be}),e.set(r,o),this.reflMats.push(o),this.reflBase.push(o.color.clone()));const a=Qf(n,o);a.matrixAutoUpdate=!1,a.matrixWorldAutoUpdate=!1,a.renderOrder=-5,a.frustumCulled=!1,a.visible=n!==t.board,this.refls.push(a),this.reflection.add(a)}this.ghost.visible=!1,this.reflection.visible=!1}setGhostWater(t,e,n){this.ghostMat.color.setRGB(Math.min(1,t[0]+(e[0]-t[0])*.55+(n[0]-t[0])*.18),Math.min(1,t[1]+(e[1]-t[1])*.55+(n[1]-t[1])*.18),Math.min(1,t[2]+(e[2]-t[2])*.55+(n[2]-t[2])*.18))}setWater(t){for(let e=0;e<this.reflMats.length;e++){const n=this.reflBase[e];this.reflMats[e].color.setRGB(n.r+(t[0]-n.r)*Kc,n.g+(t[1]-n.g)*Kc,n.b+(t[2]-n.b)*Kc)}}update(t,e,n,i,r){const o=this.rig;n.getWorldPosition(this.camPos),this.covered=o.group.visible?sA(t,e,o,this.camPos):0,this.amount=JE(this.amount,this.covered,r);const a=e.riding&&o.group.visible,c=Math.min(1,Math.max(0,Number.isFinite(r)?r:0)*4);this.reflOn+=((a?1:0)-this.reflOn)*c;const l=this.amount>.005&&o.group.visible,h=this.reflOn>.01&&a;if(this.ghost.visible=l,this.reflection.visible=h,!l&&!h)return;o.group.updateMatrixWorld(!0);const u=o.parts;if(l){this.ghostMat.opacity=this.amount*QE;for(let d=0;d<u.length;d++)this.ghosts[d].matrixWorld.copy(tp(u[d]))}if(h){const d=o.group.position,f=d.y,m=eA*(1+.5*Zf(i*1.3,d.x+5)),_=Zf(i,d.x)/.9;this.mirror.set(1,_,0,-_*f,0,-m,0,f*(1+m),0,0,1,0,0,0,0,1);const g=tA*this.reflOn*(1-.6*this.amount);for(const p of this.reflMats)p.opacity=g;for(let p=0;p<u.length;p++)this.refls[p].matrixWorld.multiplyMatrices(this.mirror,tp(u[p]))}}}const rA=30;class oA{constructor(t,e){M(this,"recording",!1);M(this,"t0",0);M(this,"pointers",[]);M(this,"trace",[]);M(this,"events",[]);M(this,"seeds",[]);M(this,"lastTrace",-1);M(this,"btn");this.getSeed=e;const n=i=>{this.recording&&this.pointers.push({t:this.now(),type:i.type,id:i.pointerId,x:i.clientX,y:i.clientY})};for(const i of["pointerdown","pointermove","pointerup","pointercancel"])t.addEventListener(i,n,{capture:!0,passive:!0});this.btn=document.createElement("button"),this.btn.textContent="● REC",Object.assign(this.btn.style,{position:"fixed",top:"8px",right:"8px",zIndex:"20",padding:"8px 12px",font:"600 14px system-ui, sans-serif",color:"#fff",background:"rgba(200,30,40,0.75)",border:"1px solid rgba(255,255,255,0.5)",borderRadius:"8px",touchAction:"manipulation"}),this.btn.addEventListener("click",()=>this.recording?void this.stop():this.start()),document.body.appendChild(this.btn)}get active(){return this.recording}now(){return(performance.now()-this.t0)/1e3}start(){this.recording=!0,this.t0=performance.now(),this.pointers=[],this.trace=[],this.events=[],this.seeds=[this.getSeed()],this.lastTrace=-1,this.btn.textContent="■ STOP & SEND"}sample(t){if(!this.recording)return;const e=this.now();if(e-this.lastTrace<1/rA)return;this.lastTrace=e,this.trace.push({time:e,...t});const n=this.getSeed();this.seeds[this.seeds.length-1]!==n&&this.seeds.push(n)}event(t){this.recording&&this.events.push({t:this.now(),e:t})}async stop(){this.recording=!1,this.btn.textContent="● REC";const t=(window.prompt("What were you testing? (trim / wide swing / fast pump / hollow / other)")??"untitled").trim().replace(/[^\w-]+/g,"-").slice(0,40),e={label:t,recordedAt:new Date().toISOString(),screen:{w:window.innerWidth,h:window.innerHeight,dpr:window.devicePixelRatio},userAgent:navigator.userAgent,seeds:this.seeds,pointers:this.pointers,trace:this.trace,events:this.events},n=JSON.stringify(e);try{const i=await fetch("./__rec",{method:"POST",headers:{"Content-Type":"application/json"},body:n});if(!i.ok)throw new Error(String(i.status));this.flash(`saved ✓ (${this.pointers.length} touches)`)}catch{const i=document.createElement("a");i.href=URL.createObjectURL(new Blob([n],{type:"application/json"})),i.download=`surf-rec-${t}.json`,i.click(),this.flash("downloaded")}}flash(t){this.btn.textContent=t,setTimeout(()=>{this.recording||(this.btn.textContent="● REC")},2e3)}}const ze={deepD:-1,wideD:16,missBreakS:40,popupTime:.35,spawnT:.25,vFar:4,vGain:3,hFar:-.45,hGain:.25,endAfterLength:5},aA={grip:!1,targetHeading:null,stall:0,drive:0};class cA{constructor(t,e){M(this,"state","lineup");M(this,"summary",null);M(this,"waveCount",1);M(this,"onPhysEvent",null);M(this,"seed");M(this,"popupLeft",0);M(this,"rideSeconds",0);this.wave=t,this.phys=e,this.seed=t.seed}takeoffWindow(){const t=this.wave;return this.state!=="lineup"||!t.peeling||t.peelBlend<1?null:{minS:t.breakS+ze.deepD,maxS:t.breakS+ze.wideD}}tap(t){if(this.state==="ended"){this.nextWave();return}if(!this.takeoffWindow()||t===null||!Number.isFinite(t))return;const e=t-this.wave.breakS;if(e<ze.deepD)return this.end("Too deep",!1);if(e>ze.wideD)return this.end("Too wide",!1);const n=1-(e-ze.deepD)/(ze.wideD-ze.deepD),i=ze.vFar+ze.vGain*n,r=ze.hFar-ze.hGain*n;this.phys.spawn(t,ze.spawnT,i,r)&&(this.state="popup",this.popupLeft=ze.popupTime,this.rideSeconds=0)}step(t,e){var o;if(!(t>0)||!Number.isFinite(t))return;const n=this.wave;if(this.state==="lineup"){n.update(t),n.peeling&&n.breakS>ze.missBreakS&&this.end("Missed it",!1);return}if(this.state==="ended"){n.finished||n.update(t);return}n.update(t),this.rideSeconds+=t;const i=this.state==="popup";this.phys.step(t,i?aA:e),i&&(this.popupLeft-=t,this.popupLeft<=1e-9&&this.phys.riding&&(this.state="riding"));let r=null;for(const a of this.phys.drain())(o=this.onPhysEvent)==null||o.call(this,a),(a.type==="wipe"||a.type==="kickout")&&(r=a.reason.charAt(0).toUpperCase()+a.reason.slice(1));r===null&&!this.phys.riding&&(r="Wiped out"),r===null&&(this.phys.s>n.length+ze.endAfterLength||n.finished)&&(this.phys.state="kickedOut",r="Wave made"),r!==null&&this.end(r,!0)}end(t,e){this.state="ended",this.summary={seconds:e?this.rideSeconds:0,reason:t,rode:e}}nextWave(){this.seed=Math.imul(this.seed,1103515245)+12345&2147483647,this.wave.reset(this.seed),this.phys.state="idle",this.waveCount++,this.summary=null,this.state="lineup",this.popupLeft=0,this.rideSeconds=0}}const Om=900,Bm=3,lA=Om*.96*(1+Bm);function hA(s,t){return!Number.isFinite(s)||!Number.isFinite(t)?0:k(.05,1,Math.abs(s))*Gt((t-1)/6,0,1)}function uA(s,t,e){return!Number.isFinite(s)||!Number.isFinite(t)||!(t>0)?0:Om*Math.max(0,Math.abs(Math.sin(s))-.04)*Math.min(1,t/8)*(1+Bm*Gt(Number.isFinite(e)?e:0,0,1))}function dA(s){return Math.round(230*Math.sqrt(Gt(Number.isFinite(s)?s:0,0,1)))}const $c=1/120,ep=.1,np=24,fA=document.getElementById("app")??document.body,nn=new ly({antialias:!0,powerPreference:"high-performance"});nn.setPixelRatio(Math.min(window.devicePixelRatio||1,2));nn.setSize(window.innerWidth,window.innerHeight,!1);nn.outputColorSpace=Ne;nn.toneMapping=fp;nn.toneMappingExposure=1;fA.appendChild(nn.domElement);const Kn=new hy,pA=UE(Kn),ip=XE(Kn,nn),Yi={x:0,y:0,z:0},mA=new URLSearchParams(location.search),sp=NaN,gA=Number.isFinite(sp)?sp:Date.now()&65535|1,pe=new Wl(gA),Fi=new DE(pe);Kn.add(Fi.group);const Ze=new Rb(window.innerWidth/window.innerHeight),Bi=new JT(document.body);Bi.toggle(new URLSearchParams(location.search).has("debug"));function Gr(){return pe.breakS+8}function Da(){const s=window.innerWidth,t=window.innerHeight;!(s>0)||!(t>0)||(nn.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),nn.setSize(s,t,!1),Ze.setAspect(s/t),Bi.resize())}window.addEventListener("resize",Da);var hp;(hp=window.visualViewport)==null||hp.addEventListener("resize",Da);window.addEventListener("orientationchange",()=>[100,300,700].forEach(s=>setTimeout(Da,s)));Da();window.addEventListener("keydown",s=>{(s.key==="d"||s.key==="D")&&Bi.toggle()});const Mt=new _a(pe);Mt.tubeMode=new URLSearchParams(location.search).get("tube")==="lock"?"lock":"free";Mt.boostMode=new URLSearchParams(location.search).get("boost")==="0"?"off":"on";new URLSearchParams(location.search).get("pump")==="impulse"&&(Mt.pumpModel="impulse",Object.assign(Is,{base:5,hollowGain:4}));const zs=document.createElement("div");zs.style.cssText="position:fixed;left:0;right:0;top:38%;text-align:center;pointer-events:none;z-index:5;font:800 clamp(28px,7vw,64px)/1.1 system-ui,-apple-system,sans-serif;color:#fff;text-shadow:0 2px 12px rgba(0,0,0,.55);letter-spacing:.02em;padding:0 16px;display:none;";document.body.appendChild(zs);function _A(s,t="#fff"){zs.textContent=s,zs.style.color=t,zs.style.display="block"}function xA(){zs.style.display="none"}const cn=document.createElement("div");cn.style.cssText="position:fixed;left:0;right:0;top:14%;text-align:center;pointer-events:none;z-index:5;font:700 clamp(18px,4.2vw,34px)/1.1 system-ui,-apple-system,sans-serif;color:#e8fbff;text-shadow:0 2px 10px rgba(0,0,0,.6);display:none;";document.body.appendChild(cn);let Dr=0;const vA={dist:0,size:0};let km=0;const MA={"ran ahead":"Ran ahead of the barrel","lip landed":"The lip landed on you"};function yA(s){if(Mt.riding&&Mt.inTube){const t=kb(pe,Mt.s,Mt.t,vA);cn.textContent=`TUBE ${Mt.tubeTime.toFixed(1)} s`,km=t.dist,cn.style.color="#e8fbff",cn.style.display="block"}else Dr>0?(Dr-=s,Dr<=0&&(cn.style.display="none")):cn.style.display="none"}const Ae=new R1;Ae.group.scale.setScalar(rm);Kn.add(Ae.group);let In=new Um(Ae);Kn.add(In.reflection,In.ghost);mA.get("rig")!=="capsule"&&fT().then(s=>{Ae.setModel(s),Kn.remove(In.reflection,In.ghost),In=new Um(Ae),Kn.add(In.reflection,In.ghost)}).catch(s=>console.warn("surfer model not loaded, keeping the capsule rig:",s));const ji={deep:[0,0,0],face:[0,0,0],lip:[0,0,0],foam:[0,0,0]},hi=new om(Math.ceil(lA*1.1)+460);Kn.add(hi.points);const Ma=new om(2200);{const s=Ma.points.material;s.size=.2;const t=document.createElement("canvas");t.width=t.height=32;const e=t.getContext("2d");if(e){const n=e.createRadialGradient(16,16,0,16,16,16);n.addColorStop(0,"rgba(255,255,255,0.9)"),n.addColorStop(.5,"rgba(255,255,255,0.45)"),n.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=n,e.fillRect(0,0,32,32),s.map=new wa(t)}}Kn.add(Ma.points);function bA(s){if(pe.peeling&&pe.barrelShape(pe.breakS-4)>.5){const t=pe.breakS;for(let e=-8;e<=3.5;e+=.35){const n=t+e,i=pe.barrelShape(n),r=pe.amp(n),o=i>.05?dm(pe,n,Math.max(r,.001)):pe.faceWidth(n),a=e>1.5?.5:0,c=Math.max(i,a);c<=.05||Mt.inTube&&Math.abs(n-Mt.s)<2.2||Ma.emit(-n,.2,o,0,.9+.15*r,.6,22*c,s,.5)}}Ma.update(s)}const tn=new ZT(nn.domElement,()=>Mt.hb,{mode:QT(),thumbTurnCm:eE()});sE(tn);const Ds={grip:!1,targetHeading:null,stall:0,drive:0},ha=[],Hm=new oA(nn.domElement,()=>pe.seed);function Qe(s){Hm.event(s),ha.unshift(`${ya.toFixed(1)} ${s}`),ha.length>4&&(ha.length=4)}function SA(s){tn.update(s);for(const t of tn.drain())if(t.type==="debug")Bi.toggle();else if(t.type==="tap")Qe(`tap ${t.x.toFixed(0)},${t.y.toFixed(0)}`),AA(t.x,t.y);else if(t.type==="grip")Qe("grip");else if(t.type==="ollie"){const e=Mt.riding&&Mt.tryLaunch(t.spin);Qe(`ollie spin ${t.spin.toFixed(1)} ${e?"LAUNCH":"(no air yet)"}`)}Ds.grip=tn.grip,Ds.targetHeading=tn.targetHeading,Ds.stall=tn.stall,Ds.drive=tn.drive}let jo=0,nh=performance.now(),ya=0;const Un=new cA(pe,Mt),TA=.6;let rp=Un.state,Wh=0;const op=new wb,ap=new pt;function EA(s,t){const e=nn.domElement.getBoundingClientRect();if(!(e.width>0)||!(e.height>0))return null;ap.set((s-e.left)/e.width*2-1,-((t-e.top)/e.height*2-1)),op.setFromCamera(ap,Ze.camera),Fi.surface.geometry.computeBoundingSphere();const n=op.intersectObject(Fi.surface,!1)[0];return n?-n.point.x:null}function AA(s,t){if(Un.state==="ended"){Wh>=TA&&Un.tap(null);return}const e=EA(s,t);Qe(`tap s ${e===null?"miss":e.toFixed(1)}`),Un.tap(e)}const Wr=document.createElement("div");Wr.style.cssText="position:fixed;inset:0;z-index:6;display:none;align-items:flex-end;justify-content:center;background:rgba(8,20,30,.25);font-family:system-ui,-apple-system,sans-serif;color:#fff;text-align:center;pointer-events:none;padding:12px 12px 6vh;";const Xh=document.createElement("div");Xh.style.cssText="background:rgba(10,30,45,.82);border-radius:18px;padding:clamp(10px,3vh,24px) clamp(20px,6vw,56px);text-shadow:0 2px 10px rgba(0,0,0,.4);";const qh=document.createElement("div");qh.style.cssText="font-weight:800;font-size:clamp(24px,6vw,52px);line-height:1.15;";const Kh=document.createElement("div");Kh.style.cssText="font-weight:600;font-size:clamp(18px,4.5vw,36px);margin-top:6px;opacity:.95;";const Yh=document.createElement("div");Yh.style.cssText="font-weight:600;font-size:clamp(16px,3.6vw,28px);margin-top:14px;color:#bfe6ff;";Yh.textContent="Tap for the next wave";Xh.append(qh,Kh,Yh);Wr.appendChild(Xh);document.body.appendChild(Wr);const Fa=document.createElement("div");Fa.style.cssText="position:fixed;left:0;right:0;bottom:12%;text-align:center;pointer-events:none;z-index:5;display:none;font:700 clamp(18px,4vw,32px)/1.2 system-ui,-apple-system,sans-serif;color:#fff;opacity:.9;text-shadow:0 2px 10px rgba(0,0,0,.55);padding:0 16px;";Fa.textContent="Tap the wave to catch it";document.body.appendChild(Fa);function wA(){const s=Un.state;if(s!==rp){if(s==="popup")tn.rebase(Mt.hb),Ae.reset(),Qe("spawn");else if(s==="ended"){const t=Un.summary;Wh=0,Qe(`end: ${t.reason} ${t.seconds.toFixed(1)}s`),_A(t.reason,t.rode?t.reason==="Wave made"?"#bff7c8":"#ffd2c2":"#ffe9a8"),qh.textContent=t.rode?`You rode ${t.seconds.toFixed(1)} s`:"No ride",Kh.textContent=`Ended: ${t.reason}`,Wr.style.display="flex"}else s==="lineup"&&(Wr.style.display="none",xA(),hi.clear(),Ze.snap(Gr(),pe.amp(Gr())));rp=s}}function RA(s){ya+=s,Un.step(s,Ds),Un.state==="ended"&&(Wh+=s),wA()}Un.onPhysEvent=s=>{s.type==="pump"?Qe(`pump +${s.dv.toFixed(2)}`):s.type==="wipe"?Qe(`WIPE: ${s.reason}`):s.type==="kickout"?Qe(`kickout: ${s.reason}`):s.type==="tubeEnter"?Qe("tube in"):s.type==="tubeMiss"?(Qe(`tube miss: ${s.reason}`),cn.textContent=MA[s.reason],cn.style.color="#ffd27d",cn.style.display="block",Dr=1.8):s.type==="spit"?(Qe("spit"),jh=!0):(Qe(`tube out ${s.duration.toFixed(1)}s ${s.made?"MADE":""}`),s.made&&(cn.textContent=`MADE IT! ${s.duration.toFixed(1)} s`,cn.style.color="#7dffb2",cn.style.display="block",Dr=1.8))};let jh=!1;const Cs=new R;function CA(){jh=!1,Mt.state!=="idle"&&(Cs.copy(Ae.group.position),Cs.x-=.8,Cs.y+=.8,hi.burst(Cs.x,Cs.y,Cs.z,-14,2.5,2,220,3.5))}const zn=new R;let cp=!1,lp=0;function PA(s){if(Mt.riding){const t=Math.abs(Math.sin(Mt.skid)),e=hA(Mt.skid,Mt.v),n=uA(Mt.skid,Mt.v,e);Ae.tailWorld(zn);const i=Mt.skid>0?-1:1,r=3+4*t+4*e,o=3.2+2.5*e,a=Ae.by,c=Ae.bz,l=-Math.cos(Mt.hv)*Mt.v*.25,h=c.x*i*r+a.x*o+l,u=c.y*i*r+a.y*o,d=c.z*i*r+a.z*o;hi.emit(zn.x,zn.y,zn.z,h,u,d,n,s,1.2+1.3*e);const f=Mt.t<.25&&Math.abs(Mt.skid)>.4;Mt.boostCount>lp&&(hi.burst(zn.x,zn.y,zn.z,h*.8,u*.8+1.2,d*.8,45,1.4),Qe(`boost ${Mt.boostKind}`)),lp=Mt.boostCount,f&&!cp&&hi.burst(zn.x,zn.y,zn.z,h*1.2,u*1.4+1.5,d*1.2,dA(e),1.8+1.5*e),cp=f}hi.update(s),bA(s)}const $o=s=>(s*180/Math.PI).toFixed(0),zm=s=>requestAnimationFrame(s);function Vm(s){let t=(s-nh)/1e3;nh=s,t>ep&&(t=ep),t<0&&(t=0),SA(t),jo+=t;let e=0;for(;jo>=$c&&e<np;)RA($c),jo-=$c,e++;if(e>=np&&(jo=0),Ae.update(Mt,pe,t),jh&&CA(),PA(t),yA(t),Mt.state!=="idle"){const i=Mt.riding?Mt.face.y:Math.max(0,Ae.group.position.y),r=Mt.riding?Mt.face.u:Ae.group.position.z,o=Mt.riding?Mt.s:-Ae.group.position.x;Ze.setTube(Mt.riding&&Mt.inTube),Ze.update(o,pe.amp(o),t,i,r,Math.cos(Mt.hv)>=0?1:-1)}else{const i=Gr();Ze.update(i,pe.amp(i),t)}Mt.riding&&Mt.inTube?Fi.setRider({s:Mt.s,u:Mt.face.u,deep:-Mt.d/(1.5+5*pe.hollow(Mt.s))}):Fi.setRider(null),YE(ip.state.phase,ji),Fi.setWaterTint(ji),In.setWater(ji.face),In.setGhostWater(ji.face,ji.lip,ji.foam),Fi.update(Ze.focusS,ya),In.update(pe,Mt,Ze.camera,ya,t),Ae.group.visible?(Yi.x=Ae.group.position.x,Yi.y=Ae.group.position.y,Yi.z=Ae.group.position.z):(Yi.x=Ze.camera.position.x,Yi.y=0,Yi.z=Ze.camera.position.z-20),ip.update(t,Yi),pA.update(Ze.camera.position.x,ji.deep),nn.render(Kn,Ze.camera),Hm.sample({state:Mt.state,s:Mt.s,t:Mt.t,v:Mt.v,hb:Mt.hb,hv:Mt.hv,d:Mt.d,skid:Mt.skid});const n=Mt.state==="idle"?"waiting for the peel":Mt.state;Fa.style.display=Un.takeoffWindow()?"block":"none",Bi.setLines([`wave #${Un.waveCount} seed ${pe.seed}  ${pe.peeling?`breakS ${pe.breakS.toFixed(1)} peel ${pe.peelSpeed(pe.breakS).toFixed(1)} m/s`:`lineup ${pe.arrival.toFixed(2)}`}`,`${n}  v ${Mt.v.toFixed(1)} m/s  t ${Mt.t.toFixed(2)}  d ${Mt.d.toFixed(1)} m  sinA ${Mt.face.sinA.toFixed(2)}${Mt.inTube?`  TUBE mouth ${km.toFixed(1)} m`:""}`,`hb ${$o(Mt.hb)}°  hv ${$o(Mt.hv)}°  skid ${Mt.skid.toFixed(2)}  turn ${Mt.turnRate.toFixed(1)}/${Mt.carveRate.toFixed(1)}  stall ${Mt.stall.toFixed(2)}  drive ${Mt.drive.toFixed(2)}  lean ${$o(Mt.lean)}°  load ${Mt.load.toFixed(2)} w ${Mt.weight.toFixed(2)}  [${Mt.pumpModel}]`,`grip ${tn.grip?"Y":"n"}  target ${tn.targetHeading===null?"- (trim)":$o(tn.targetHeading)+"°"}  spray ${hi.count}`,`events: ${ha.join(" | ")}`,"keys: Space grip  Up/Down rotate  Shift stall  F drive  D debug   (fingers: slide both forward = drive, back = stall)"]),Bi.setShapes({fingers:tn.pointers,target:tn.targetHeading,board:Mt.hb}),Bi.frame(t),zm(Vm)}Ze.snap(Gr(),pe.amp(Gr()));zm(s=>{nh=s,Vm(s)});window.__surf={wave:pe,cam:Ze,debug:Bi,renderer:nn,input:tn,phys:Mt,rig:Ae,spray:hi,ctl:Ds,waveMesh:Fi,get riderLook(){return In}};
