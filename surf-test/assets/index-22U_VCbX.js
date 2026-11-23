var m0=Object.defineProperty;var g0=(s,t,e)=>t in s?m0(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var v=(s,t,e)=>g0(s,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const _h="170",_0=0,gu=1,v0=2,Ip=1,Dp=2,ui=3,_i=0,Ze=1,Ge=2,Vi=0,Vs=1,_u=2,vu=3,xu=4,x0=5,ss=100,M0=101,y0=102,b0=103,S0=104,T0=200,E0=201,A0=202,w0=203,fl=204,pl=205,R0=206,C0=207,P0=208,L0=209,I0=210,D0=211,N0=212,F0=213,U0=214,ml=0,gl=1,_l=2,$s=3,vl=4,xl=5,Ml=6,yl=7,vh=0,O0=1,k0=2,Gi=0,B0=1,H0=2,z0=3,Np=4,V0=5,G0=6,W0=7,Mu="attached",Fp="detached",Up=300,Zs=301,Js=302,bl=303,Sl=304,La=306,hs=1e3,Bi=1001,Ma=1002,Je=1003,Op=1004,Pr=1005,an=1006,oa=1007,jn=1008,vi=1009,kp=1010,Bp=1011,Gr=1012,xh=1013,us=1014,kn=1015,to=1016,Mh=1017,yh=1018,Qs=1020,Hp=35902,zp=1021,Vp=1022,bn=1023,Gp=1024,Wp=1025,Gs=1026,tr=1027,bh=1028,Sh=1029,Xp=1030,Th=1031,Eh=1033,aa=33776,ca=33777,la=33778,ha=33779,Tl=35840,El=35841,Al=35842,wl=35843,Rl=36196,Cl=37492,Pl=37496,Ll=37808,Il=37809,Dl=37810,Nl=37811,Fl=37812,Ul=37813,Ol=37814,kl=37815,Bl=37816,Hl=37817,zl=37818,Vl=37819,Gl=37820,Wl=37821,ua=36492,Xl=36494,ql=36495,qp=36283,Kl=36284,Yl=36285,jl=36286,Wr=2300,Xr=2301,Ka=2302,yu=2400,bu=2401,Su=2402,X0=2500,q0=0,Kp=1,$l=2,K0=3200,Y0=3201,Ah=0,j0=1,Oi="",Oe="srgb",Qe="srgb-linear",Ia="linear",me="srgb",vs=7680,Tu=519,$0=512,Z0=513,J0=514,Yp=515,Q0=516,tg=517,eg=518,ng=519,Zl=35044,Ee=35048,Eu="300 es",pi=2e3,ya=2001;class ar{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,t);t.target=null}}}const ze=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Au=1234567;const Dr=Math.PI/180,er=180/Math.PI;function Sn(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ze[s&255]+ze[s>>8&255]+ze[s>>16&255]+ze[s>>24&255]+"-"+ze[t&255]+ze[t>>8&255]+"-"+ze[t>>16&15|64]+ze[t>>24&255]+"-"+ze[e&63|128]+ze[e>>8&255]+"-"+ze[e>>16&255]+ze[e>>24&255]+ze[n&255]+ze[n>>8&255]+ze[n>>16&255]+ze[n>>24&255]).toLowerCase()}function Pe(s,t,e){return Math.max(t,Math.min(e,s))}function wh(s,t){return(s%t+t)%t}function ig(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function sg(s,t,e){return s!==t?(e-s)/(t-s):0}function Nr(s,t,e){return(1-e)*s+e*t}function rg(s,t,e,n){return Nr(s,t,1-Math.exp(-e*n))}function og(s,t=1){return t-Math.abs(wh(s,t*2)-t)}function ag(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function cg(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function lg(s,t){return s+Math.floor(Math.random()*(t-s+1))}function hg(s,t){return s+Math.random()*(t-s)}function ug(s){return s*(.5-Math.random())}function dg(s){s!==void 0&&(Au=s);let t=Au+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function fg(s){return s*Dr}function pg(s){return s*er}function mg(s){return(s&s-1)===0&&s!==0}function gg(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function _g(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function vg(s,t,e,n,i){const r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),l=r((t+n)/2),h=o((t+n)/2),u=r((t-n)/2),d=o((t-n)/2),f=r((n-t)/2),m=o((n-t)/2);switch(i){case"XYX":s.set(a*h,c*u,c*d,a*l);break;case"YZY":s.set(c*d,a*h,c*u,a*l);break;case"ZXZ":s.set(c*u,c*d,a*h,a*l);break;case"XZX":s.set(a*h,c*m,c*f,a*l);break;case"YXY":s.set(c*f,a*h,c*m,a*l);break;case"ZYZ":s.set(c*m,c*f,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Nn(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function fe(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const xg={DEG2RAD:Dr,RAD2DEG:er,generateUUID:Sn,clamp:Pe,euclideanModulo:wh,mapLinear:ig,inverseLerp:sg,lerp:Nr,damp:rg,pingpong:og,smoothstep:ag,smootherstep:cg,randInt:lg,randFloat:hg,randFloatSpread:ug,seededRandom:dg,degToRad:fg,radToDeg:pg,isPowerOfTwo:mg,ceilPowerOfTwo:gg,floorPowerOfTwo:_g,setQuaternionFromProperEuler:vg,normalize:fe,denormalize:Nn};class gt{constructor(t=0,e=0){gt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Pe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*i+t.x,this.y=r*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Jt{constructor(t,e,n,i,r,o,a,c,l){Jt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,c,l)}set(t,e,n,i,r,o,a,c,l){const h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],f=n[5],m=n[8],_=i[0],g=i[3],p=i[6],M=i[1],y=i[4],x=i[7],I=i[2],w=i[5],R=i[8];return r[0]=o*_+a*M+c*I,r[3]=o*g+a*y+c*w,r[6]=o*p+a*x+c*R,r[1]=l*_+h*M+u*I,r[4]=l*g+h*y+u*w,r[7]=l*p+h*x+u*R,r[2]=d*_+f*M+m*I,r[5]=d*g+f*y+m*w,r[8]=d*p+f*x+m*R,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-n*r*h+n*a*c+i*r*l-i*o*c}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=h*o-a*l,d=a*c-h*r,f=l*r-o*c,m=e*u+n*d+i*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/m;return t[0]=u*_,t[1]=(i*l-h*n)*_,t[2]=(a*n-i*o)*_,t[3]=d*_,t[4]=(h*e-i*c)*_,t[5]=(i*r-a*e)*_,t[6]=f*_,t[7]=(n*c-l*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-i*l,i*c,-i*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Ya.makeScale(t,e)),this}rotate(t){return this.premultiply(Ya.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ya.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Ya=new Jt;function jp(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function qr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Mg(){const s=qr("canvas");return s.style.display="block",s}const wu={};function Lr(s){s in wu||(wu[s]=!0,console.warn(s))}function yg(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function bg(s){const t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Sg(s){const t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const ne={enabled:!0,workingColorSpace:Qe,spaces:{},convert:function(s,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===me&&(s.r=gi(s.r),s.g=gi(s.g),s.b=gi(s.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(s.applyMatrix3(this.spaces[t].toXYZ),s.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===me&&(s.r=Ws(s.r),s.g=Ws(s.g),s.b=Ws(s.b))),s},fromWorkingColorSpace:function(s,t){return this.convert(s,this.workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Oi?Ia:this.spaces[s].transfer},getLuminanceCoefficients:function(s,t=this.workingColorSpace){return s.fromArray(this.spaces[t].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,t,e){return s.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function gi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ws(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const Ru=[.64,.33,.3,.6,.15,.06],Cu=[.2126,.7152,.0722],Pu=[.3127,.329],Lu=new Jt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Iu=new Jt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ne.define({[Qe]:{primaries:Ru,whitePoint:Pu,transfer:Ia,toXYZ:Lu,fromXYZ:Iu,luminanceCoefficients:Cu,workingColorSpaceConfig:{unpackColorSpace:Oe},outputColorSpaceConfig:{drawingBufferColorSpace:Oe}},[Oe]:{primaries:Ru,whitePoint:Pu,transfer:me,toXYZ:Lu,fromXYZ:Iu,luminanceCoefficients:Cu,outputColorSpaceConfig:{drawingBufferColorSpace:Oe}}});let xs;class Tg{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{xs===void 0&&(xs=qr("canvas")),xs.width=t.width,xs.height=t.height;const n=xs.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=xs}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=qr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=gi(r[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(gi(e[n]/255)*255):e[n]=gi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Eg=0;class $p{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Eg++}),this.uuid=Sn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(ja(i[o].image)):r.push(ja(i[o]))}else r=ja(i);n.url=r}return e||(t.images[this.uuid]=n),n}}function ja(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Tg.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Ag=0;class Le extends ar{constructor(t=Le.DEFAULT_IMAGE,e=Le.DEFAULT_MAPPING,n=Bi,i=Bi,r=an,o=jn,a=bn,c=vi,l=Le.DEFAULT_ANISOTROPY,h=Oi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ag++}),this.uuid=Sn(),this.name="",this.source=new $p(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new gt(0,0),this.repeat=new gt(1,1),this.center=new gt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Jt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Up)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case hs:t.x=t.x-Math.floor(t.x);break;case Bi:t.x=t.x<0?0:1;break;case Ma:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case hs:t.y=t.y-Math.floor(t.y);break;case Bi:t.y=t.y<0?0:1;break;case Ma:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Le.DEFAULT_IMAGE=null;Le.DEFAULT_MAPPING=Up;Le.DEFAULT_ANISOTROPY=1;class he{constructor(t=0,e=0,n=0,i=1){he.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r;const c=t.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],m=c[9],_=c[2],g=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(m+g)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const y=(l+1)/2,x=(f+1)/2,I=(p+1)/2,w=(h+d)/4,R=(u+_)/4,L=(m+g)/4;return y>x&&y>I?y<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(y),i=w/n,r=R/n):x>I?x<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(x),n=w/i,r=L/i):I<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(I),n=R/r,i=L/r),this.set(n,i,r,e),this}let M=Math.sqrt((g-m)*(g-m)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(M)<.001&&(M=1),this.x=(g-m)/M,this.y=(u-_)/M,this.z=(d-h)/M,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class wg extends ar{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new he(0,0,t,e),this.scissorTest=!1,this.viewport=new he(0,0,t,e);const i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:an,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Le(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new $p(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ds extends wg{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Zp extends Le{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Je,this.minFilter=Je,this.wrapR=Bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Rg extends Le{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Je,this.minFilter=Je,this.wrapR=Bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class le{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,o,a){let c=n[i+0],l=n[i+1],h=n[i+2],u=n[i+3];const d=r[o+0],f=r[o+1],m=r[o+2],_=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=m,t[e+3]=_;return}if(u!==_||c!==d||l!==f||h!==m){let g=1-a;const p=c*d+l*f+h*m+u*_,M=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){const I=Math.sqrt(y),w=Math.atan2(I,p*M);g=Math.sin(g*w)/I,a=Math.sin(a*w)/I}const x=a*M;if(c=c*g+d*x,l=l*g+f*x,h=h*g+m*x,u=u*g+_*x,g===1-a){const I=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=I,l*=I,h*=I,u*=I}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,r,o){const a=n[i],c=n[i+1],l=n[i+2],h=n[i+3],u=r[o],d=r[o+1],f=r[o+2],m=r[o+3];return t[e]=a*m+h*u+c*f-l*d,t[e+1]=c*m+h*d+l*u-a*f,t[e+2]=l*m+h*f+a*d-c*u,t[e+3]=h*m-a*u-c*d-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(i/2),u=a(r/2),d=c(n/2),f=c(i/2),m=c(r/2);switch(o){case"XYZ":this._x=d*h*u+l*f*m,this._y=l*f*u-d*h*m,this._z=l*h*m+d*f*u,this._w=l*h*u-d*f*m;break;case"YXZ":this._x=d*h*u+l*f*m,this._y=l*f*u-d*h*m,this._z=l*h*m-d*f*u,this._w=l*h*u+d*f*m;break;case"ZXY":this._x=d*h*u-l*f*m,this._y=l*f*u+d*h*m,this._z=l*h*m+d*f*u,this._w=l*h*u-d*f*m;break;case"ZYX":this._x=d*h*u-l*f*m,this._y=l*f*u+d*h*m,this._z=l*h*m-d*f*u,this._w=l*h*u+d*f*m;break;case"YZX":this._x=d*h*u+l*f*m,this._y=l*f*u+d*h*m,this._z=l*h*m-d*f*u,this._w=l*h*u-d*f*m;break;case"XZY":this._x=d*h*u-l*f*m,this._y=l*f*u-d*h*m,this._z=l*h*m+d*f*u,this._w=l*h*u+d*f*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(o-i)*f}else if(n>a&&n>u){const f=2*Math.sqrt(1+n-a-u);this._w=(h-c)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(r+l)/f}else if(a>u){const f=2*Math.sqrt(1+a-n-u);this._w=(r-l)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(c+h)/f}else{const f=2*Math.sqrt(1+u-n-a);this._w=(o-i)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Pe(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+o*a+i*l-r*c,this._y=i*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-i*a,this._w=o*h-n*a-i*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+i*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*i+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-e)*h)/l,d=Math.sin(e*h)/l;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(t=0,e=0,n=0){P.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Du.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Du.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*i-a*n),h=2*(a*e-r*i),u=2*(r*n-o*e);return this.x=e+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=i+c*u+r*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=i*c-r*a,this.y=r*o-n*c,this.z=n*a-i*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return $a.copy(this).projectOnVector(t),this.sub($a)}reflect(t){return this.sub($a.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Pe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const $a=new P,Du=new le;class Mi{constructor(t=new P(1/0,1/0,1/0),e=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(An.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(An.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=An.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,An):An.fromBufferAttribute(r,o),An.applyMatrix4(t.matrixWorld),this.expandByPoint(An);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),lo.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),lo.copy(n.boundingBox)),lo.applyMatrix4(t.matrixWorld),this.union(lo)}const i=t.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,An),An.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(pr),ho.subVectors(this.max,pr),Ms.subVectors(t.a,pr),ys.subVectors(t.b,pr),bs.subVectors(t.c,pr),Si.subVectors(ys,Ms),Ti.subVectors(bs,ys),qi.subVectors(Ms,bs);let e=[0,-Si.z,Si.y,0,-Ti.z,Ti.y,0,-qi.z,qi.y,Si.z,0,-Si.x,Ti.z,0,-Ti.x,qi.z,0,-qi.x,-Si.y,Si.x,0,-Ti.y,Ti.x,0,-qi.y,qi.x,0];return!Za(e,Ms,ys,bs,ho)||(e=[1,0,0,0,1,0,0,0,1],!Za(e,Ms,ys,bs,ho))?!1:(uo.crossVectors(Si,Ti),e=[uo.x,uo.y,uo.z],Za(e,Ms,ys,bs,ho))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,An).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(An).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ii[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ii[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ii[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ii[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ii[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ii[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ii[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ii[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ii),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const ii=[new P,new P,new P,new P,new P,new P,new P,new P],An=new P,lo=new Mi,Ms=new P,ys=new P,bs=new P,Si=new P,Ti=new P,qi=new P,pr=new P,ho=new P,uo=new P,Ki=new P;function Za(s,t,e,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Ki.fromArray(s,r);const a=i.x*Math.abs(Ki.x)+i.y*Math.abs(Ki.y)+i.z*Math.abs(Ki.z),c=t.dot(Ki),l=e.dot(Ki),h=n.dot(Ki);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const Cg=new Mi,mr=new P,Ja=new P;class Jn{constructor(t=new P,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Cg.setFromPoints(t).getCenter(n);let i=0;for(let r=0,o=t.length;r<o;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;mr.subVectors(t,this.center);const e=mr.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(mr,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ja.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(mr.copy(t.center).add(Ja)),this.expandByPoint(mr.copy(t.center).sub(Ja))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const si=new P,Qa=new P,fo=new P,Ei=new P,tc=new P,po=new P,ec=new P;class eo{constructor(t=new P,e=new P(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,si)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=si.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(si.copy(this.origin).addScaledVector(this.direction,e),si.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Qa.copy(t).add(e).multiplyScalar(.5),fo.copy(e).sub(t).normalize(),Ei.copy(this.origin).sub(Qa);const r=t.distanceTo(e)*.5,o=-this.direction.dot(fo),a=Ei.dot(this.direction),c=-Ei.dot(fo),l=Ei.lengthSq(),h=Math.abs(1-o*o);let u,d,f,m;if(h>0)if(u=o*c-a,d=o*a-c,m=r*h,u>=0)if(d>=-m)if(d<=m){const _=1/h;u*=_,d*=_,f=u*(u+o*d+2*a)+d*(o*u+d+2*c)+l}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d<=-m?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l):d<=m?(u=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Qa).addScaledVector(fo,d),f}intersectSphere(t,e){si.subVectors(t.center,this.origin);const n=si.dot(this.direction),i=si.dot(si)-n*n,r=t.radius*t.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(t.min.x-d.x)*l,i=(t.max.x-d.x)*l):(n=(t.max.x-d.x)*l,i=(t.min.x-d.x)*l),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),u>=0?(a=(t.min.z-d.z)*u,c=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,c=(t.min.z-d.z)*u),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,si)!==null}intersectTriangle(t,e,n,i,r){tc.subVectors(e,t),po.subVectors(n,t),ec.crossVectors(tc,po);let o=this.direction.dot(ec),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ei.subVectors(this.origin,t);const c=a*this.direction.dot(po.crossVectors(Ei,po));if(c<0)return null;const l=a*this.direction.dot(tc.cross(Ei));if(l<0||c+l>o)return null;const h=-a*Ei.dot(ec);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Gt{constructor(t,e,n,i,r,o,a,c,l,h,u,d,f,m,_,g){Gt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,c,l,h,u,d,f,m,_,g)}set(t,e,n,i,r,o,a,c,l,h,u,d,f,m,_,g){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=m,p[11]=_,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Gt().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/Ss.setFromMatrixColumn(t,0).length(),r=1/Ss.setFromMatrixColumn(t,1).length(),o=1/Ss.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const d=o*h,f=o*u,m=a*h,_=a*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=f+m*l,e[5]=d-_*l,e[9]=-a*c,e[2]=_-d*l,e[6]=m+f*l,e[10]=o*c}else if(t.order==="YXZ"){const d=c*h,f=c*u,m=l*h,_=l*u;e[0]=d+_*a,e[4]=m*a-f,e[8]=o*l,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=f*a-m,e[6]=_+d*a,e[10]=o*c}else if(t.order==="ZXY"){const d=c*h,f=c*u,m=l*h,_=l*u;e[0]=d-_*a,e[4]=-o*u,e[8]=m+f*a,e[1]=f+m*a,e[5]=o*h,e[9]=_-d*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const d=o*h,f=o*u,m=a*h,_=a*u;e[0]=c*h,e[4]=m*l-f,e[8]=d*l+_,e[1]=c*u,e[5]=_*l+d,e[9]=f*l-m,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const d=o*c,f=o*l,m=a*c,_=a*l;e[0]=c*h,e[4]=_-d*u,e[8]=m*u+f,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=f*u+m,e[10]=d-_*u}else if(t.order==="XZY"){const d=o*c,f=o*l,m=a*c,_=a*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=d*u+_,e[5]=o*h,e[9]=f*u-m,e[2]=m*u-f,e[6]=a*h,e[10]=_*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Pg,t,Lg)}lookAt(t,e,n){const i=this.elements;return hn.subVectors(t,e),hn.lengthSq()===0&&(hn.z=1),hn.normalize(),Ai.crossVectors(n,hn),Ai.lengthSq()===0&&(Math.abs(n.z)===1?hn.x+=1e-4:hn.z+=1e-4,hn.normalize(),Ai.crossVectors(n,hn)),Ai.normalize(),mo.crossVectors(hn,Ai),i[0]=Ai.x,i[4]=mo.x,i[8]=hn.x,i[1]=Ai.y,i[5]=mo.y,i[9]=hn.y,i[2]=Ai.z,i[6]=mo.z,i[10]=hn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],f=n[13],m=n[2],_=n[6],g=n[10],p=n[14],M=n[3],y=n[7],x=n[11],I=n[15],w=i[0],R=i[4],L=i[8],T=i[12],b=i[1],D=i[5],z=i[9],F=i[13],W=i[2],K=i[6],Y=i[10],Z=i[14],H=i[3],rt=i[7],ht=i[11],ft=i[15];return r[0]=o*w+a*b+c*W+l*H,r[4]=o*R+a*D+c*K+l*rt,r[8]=o*L+a*z+c*Y+l*ht,r[12]=o*T+a*F+c*Z+l*ft,r[1]=h*w+u*b+d*W+f*H,r[5]=h*R+u*D+d*K+f*rt,r[9]=h*L+u*z+d*Y+f*ht,r[13]=h*T+u*F+d*Z+f*ft,r[2]=m*w+_*b+g*W+p*H,r[6]=m*R+_*D+g*K+p*rt,r[10]=m*L+_*z+g*Y+p*ht,r[14]=m*T+_*F+g*Z+p*ft,r[3]=M*w+y*b+x*W+I*H,r[7]=M*R+y*D+x*K+I*rt,r[11]=M*L+y*z+x*Y+I*ht,r[15]=M*T+y*F+x*Z+I*ft,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],u=t[6],d=t[10],f=t[14],m=t[3],_=t[7],g=t[11],p=t[15];return m*(+r*c*u-i*l*u-r*a*d+n*l*d+i*a*f-n*c*f)+_*(+e*c*f-e*l*d+r*o*d-i*o*f+i*l*h-r*c*h)+g*(+e*l*u-e*a*f-r*o*u+n*o*f+r*a*h-n*l*h)+p*(-i*a*h-e*c*u+e*a*d+i*o*u-n*o*d+n*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=t[9],d=t[10],f=t[11],m=t[12],_=t[13],g=t[14],p=t[15],M=u*g*l-_*d*l+_*c*f-a*g*f-u*c*p+a*d*p,y=m*d*l-h*g*l-m*c*f+o*g*f+h*c*p-o*d*p,x=h*_*l-m*u*l+m*a*f-o*_*f-h*a*p+o*u*p,I=m*u*c-h*_*c-m*a*d+o*_*d+h*a*g-o*u*g,w=e*M+n*y+i*x+r*I;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/w;return t[0]=M*R,t[1]=(_*d*r-u*g*r-_*i*f+n*g*f+u*i*p-n*d*p)*R,t[2]=(a*g*r-_*c*r+_*i*l-n*g*l-a*i*p+n*c*p)*R,t[3]=(u*c*r-a*d*r-u*i*l+n*d*l+a*i*f-n*c*f)*R,t[4]=y*R,t[5]=(h*g*r-m*d*r+m*i*f-e*g*f-h*i*p+e*d*p)*R,t[6]=(m*c*r-o*g*r-m*i*l+e*g*l+o*i*p-e*c*p)*R,t[7]=(o*d*r-h*c*r+h*i*l-e*d*l-o*i*f+e*c*f)*R,t[8]=x*R,t[9]=(m*u*r-h*_*r-m*n*f+e*_*f+h*n*p-e*u*p)*R,t[10]=(o*_*r-m*a*r+m*n*l-e*_*l-o*n*p+e*a*p)*R,t[11]=(h*a*r-o*u*r-h*n*l+e*u*l+o*n*f-e*a*f)*R,t[12]=I*R,t[13]=(h*_*i-m*u*i+m*n*d-e*_*d-h*n*g+e*u*g)*R,t[14]=(m*a*i-o*_*i-m*n*c+e*_*c+o*n*g-e*a*g)*R,t[15]=(o*u*i-h*a*i+h*n*c-e*u*c-o*n*d+e*a*d)*R,this}scale(t){const e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,h*a+n,h*c-i*o,0,l*c-i*a,h*c+i*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,o){return this.set(1,n,r,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,h=o+o,u=a+a,d=r*l,f=r*h,m=r*u,_=o*h,g=o*u,p=a*u,M=c*l,y=c*h,x=c*u,I=n.x,w=n.y,R=n.z;return i[0]=(1-(_+p))*I,i[1]=(f+x)*I,i[2]=(m-y)*I,i[3]=0,i[4]=(f-x)*w,i[5]=(1-(d+p))*w,i[6]=(g+M)*w,i[7]=0,i[8]=(m+y)*R,i[9]=(g-M)*R,i[10]=(1-(d+_))*R,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let r=Ss.set(i[0],i[1],i[2]).length();const o=Ss.set(i[4],i[5],i[6]).length(),a=Ss.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],wn.copy(this);const l=1/r,h=1/o,u=1/a;return wn.elements[0]*=l,wn.elements[1]*=l,wn.elements[2]*=l,wn.elements[4]*=h,wn.elements[5]*=h,wn.elements[6]*=h,wn.elements[8]*=u,wn.elements[9]*=u,wn.elements[10]*=u,e.setFromRotationMatrix(wn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,i,r,o,a=pi){const c=this.elements,l=2*r/(e-t),h=2*r/(n-i),u=(e+t)/(e-t),d=(n+i)/(n-i);let f,m;if(a===pi)f=-(o+r)/(o-r),m=-2*o*r/(o-r);else if(a===ya)f=-o/(o-r),m=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,r,o,a=pi){const c=this.elements,l=1/(e-t),h=1/(n-i),u=1/(o-r),d=(e+t)*l,f=(n+i)*h;let m,_;if(a===pi)m=(o+r)*u,_=-2*u;else if(a===ya)m=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=_,c[14]=-m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Ss=new P,wn=new Gt,Pg=new P(0,0,0),Lg=new P(1,1,1),Ai=new P,mo=new P,hn=new P,Nu=new Gt,Fu=new le;class Vn{constructor(t=0,e=0,n=0,i=Vn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,r=i[0],o=i[4],a=i[8],c=i[1],l=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(Pe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Pe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Pe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Pe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Pe(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Pe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Nu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Nu,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Fu.setFromEuler(this),this.setFromQuaternion(Fu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Vn.DEFAULT_ORDER="XYZ";class Rh{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Ig=0;const Uu=new P,Ts=new le,ri=new Gt,go=new P,gr=new P,Dg=new P,Ng=new le,Ou=new P(1,0,0),ku=new P(0,1,0),Bu=new P(0,0,1),Hu={type:"added"},Fg={type:"removed"},Es={type:"childadded",child:null},nc={type:"childremoved",child:null};class be extends ar{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ig++}),this.uuid=Sn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=be.DEFAULT_UP.clone();const t=new P,e=new Vn,n=new le,i=new P(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Gt},normalMatrix:{value:new Jt}}),this.matrix=new Gt,this.matrixWorld=new Gt,this.matrixAutoUpdate=be.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=be.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Rh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ts.setFromAxisAngle(t,e),this.quaternion.multiply(Ts),this}rotateOnWorldAxis(t,e){return Ts.setFromAxisAngle(t,e),this.quaternion.premultiply(Ts),this}rotateX(t){return this.rotateOnAxis(Ou,t)}rotateY(t){return this.rotateOnAxis(ku,t)}rotateZ(t){return this.rotateOnAxis(Bu,t)}translateOnAxis(t,e){return Uu.copy(t).applyQuaternion(this.quaternion),this.position.add(Uu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ou,t)}translateY(t){return this.translateOnAxis(ku,t)}translateZ(t){return this.translateOnAxis(Bu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ri.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?go.copy(t):go.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),gr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ri.lookAt(gr,go,this.up):ri.lookAt(go,gr,this.up),this.quaternion.setFromRotationMatrix(ri),i&&(ri.extractRotation(i.matrixWorld),Ts.setFromRotationMatrix(ri),this.quaternion.premultiply(Ts.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Hu),Es.child=t,this.dispatchEvent(Es),Es.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Fg),nc.child=t,this.dispatchEvent(nc),nc.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ri.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ri.multiply(t.parent.matrixWorld)),t.applyMatrix4(ri),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Hu),Es.child=t,this.dispatchEvent(Es),Es.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gr,t,Dg),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gr,Ng,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));i.material=a}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];i.animations.push(r(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),f=o(t.animations),m=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=i,n;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}be.DEFAULT_UP=new P(0,1,0);be.DEFAULT_MATRIX_AUTO_UPDATE=!0;be.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Rn=new P,oi=new P,ic=new P,ai=new P,As=new P,ws=new P,zu=new P,sc=new P,rc=new P,oc=new P,ac=new he,cc=new he,lc=new he;class Fn{constructor(t=new P,e=new P,n=new P){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Rn.subVectors(t,e),i.cross(Rn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){Rn.subVectors(i,e),oi.subVectors(n,e),ic.subVectors(t,e);const o=Rn.dot(Rn),a=Rn.dot(oi),c=Rn.dot(ic),l=oi.dot(oi),h=oi.dot(ic),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(l*c-a*h)*d,m=(o*h-a*c)*d;return r.set(1-f-m,m,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,ai)===null?!1:ai.x>=0&&ai.y>=0&&ai.x+ai.y<=1}static getInterpolation(t,e,n,i,r,o,a,c){return this.getBarycoord(t,e,n,i,ai)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,ai.x),c.addScaledVector(o,ai.y),c.addScaledVector(a,ai.z),c)}static getInterpolatedAttribute(t,e,n,i,r,o){return ac.setScalar(0),cc.setScalar(0),lc.setScalar(0),ac.fromBufferAttribute(t,e),cc.fromBufferAttribute(t,n),lc.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(ac,r.x),o.addScaledVector(cc,r.y),o.addScaledVector(lc,r.z),o}static isFrontFacing(t,e,n,i){return Rn.subVectors(n,e),oi.subVectors(t,e),Rn.cross(oi).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Rn.subVectors(this.c,this.b),oi.subVectors(this.a,this.b),Rn.cross(oi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Fn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Fn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return Fn.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return Fn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Fn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,r=this.c;let o,a;As.subVectors(i,n),ws.subVectors(r,n),sc.subVectors(t,n);const c=As.dot(sc),l=ws.dot(sc);if(c<=0&&l<=0)return e.copy(n);rc.subVectors(t,i);const h=As.dot(rc),u=ws.dot(rc);if(h>=0&&u<=h)return e.copy(i);const d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(As,o);oc.subVectors(t,r);const f=As.dot(oc),m=ws.dot(oc);if(m>=0&&f<=m)return e.copy(r);const _=f*l-c*m;if(_<=0&&l>=0&&m<=0)return a=l/(l-m),e.copy(n).addScaledVector(ws,a);const g=h*m-f*u;if(g<=0&&u-h>=0&&f-m>=0)return zu.subVectors(r,i),a=(u-h)/(u-h+(f-m)),e.copy(i).addScaledVector(zu,a);const p=1/(g+_+d);return o=_*p,a=d*p,e.copy(n).addScaledVector(As,o).addScaledVector(ws,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Jp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},wi={h:0,s:0,l:0},_o={h:0,s:0,l:0};function hc(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class Nt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Oe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ne.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=ne.workingColorSpace){return this.r=t,this.g=e,this.b=n,ne.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=ne.workingColorSpace){if(t=wh(t,1),e=Pe(e,0,1),n=Pe(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=hc(o,r,t+1/3),this.g=hc(o,r,t),this.b=hc(o,r,t-1/3)}return ne.toWorkingColorSpace(this,i),this}setStyle(t,e=Oe){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Oe){const n=Jp[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=gi(t.r),this.g=gi(t.g),this.b=gi(t.b),this}copyLinearToSRGB(t){return this.r=Ws(t.r),this.g=Ws(t.g),this.b=Ws(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Oe){return ne.fromWorkingColorSpace(Ve.copy(this),t),Math.round(Pe(Ve.r*255,0,255))*65536+Math.round(Pe(Ve.g*255,0,255))*256+Math.round(Pe(Ve.b*255,0,255))}getHexString(t=Oe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ne.workingColorSpace){ne.fromWorkingColorSpace(Ve.copy(this),e);const n=Ve.r,i=Ve.g,r=Ve.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(i-r)/u+(i<r?6:0);break;case i:c=(r-n)/u+2;break;case r:c=(n-i)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=ne.workingColorSpace){return ne.fromWorkingColorSpace(Ve.copy(this),e),t.r=Ve.r,t.g=Ve.g,t.b=Ve.b,t}getStyle(t=Oe){ne.fromWorkingColorSpace(Ve.copy(this),t);const e=Ve.r,n=Ve.g,i=Ve.b;return t!==Oe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(wi),this.setHSL(wi.h+t,wi.s+e,wi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(wi),t.getHSL(_o);const n=Nr(wi.h,_o.h,e),i=Nr(wi.s,_o.s,e),r=Nr(wi.l,_o.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ve=new Nt;Nt.NAMES=Jp;let Ug=0;class Hn extends ar{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ug++}),this.uuid=Sn(),this.name="",this.blending=Vs,this.side=_i,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=fl,this.blendDst=pl,this.blendEquation=ss,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Nt(0,0,0),this.blendAlpha=0,this.depthFunc=$s,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Tu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=vs,this.stencilZFail=vs,this.stencilZPass=vs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Vs&&(n.blending=this.blending),this.side!==_i&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==fl&&(n.blendSrc=this.blendSrc),this.blendDst!==pl&&(n.blendDst=this.blendDst),this.blendEquation!==ss&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==$s&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Tu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==vs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==vs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==vs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(e){const r=i(t.textures),o=i(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Bn extends Hn{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Nt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vn,this.combine=vh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const we=new P,vo=new gt;class $t{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Zl,this.updateRanges=[],this.gpuType=kn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)vo.fromBufferAttribute(this,e),vo.applyMatrix3(t),this.setXY(e,vo.x,vo.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)we.fromBufferAttribute(this,e),we.applyMatrix3(t),this.setXYZ(e,we.x,we.y,we.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)we.fromBufferAttribute(this,e),we.applyMatrix4(t),this.setXYZ(e,we.x,we.y,we.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)we.fromBufferAttribute(this,e),we.applyNormalMatrix(t),this.setXYZ(e,we.x,we.y,we.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)we.fromBufferAttribute(this,e),we.transformDirection(t),this.setXYZ(e,we.x,we.y,we.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Nn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=fe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Nn(e,this.array)),e}setX(t,e){return this.normalized&&(e=fe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Nn(e,this.array)),e}setY(t,e){return this.normalized&&(e=fe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Nn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=fe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Nn(e,this.array)),e}setW(t,e){return this.normalized&&(e=fe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=fe(e,this.array),n=fe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=fe(e,this.array),n=fe(n,this.array),i=fe(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=fe(e,this.array),n=fe(n,this.array),i=fe(i,this.array),r=fe(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Zl&&(t.usage=this.usage),t}}class Qp extends $t{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class tm extends $t{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Re extends $t{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Og=0;const pn=new Gt,uc=new be,Rs=new P,un=new Mi,_r=new Mi,Fe=new P;class Te extends ar{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Og++}),this.uuid=Sn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(jp(t)?tm:Qp)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Jt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return pn.makeRotationFromQuaternion(t),this.applyMatrix4(pn),this}rotateX(t){return pn.makeRotationX(t),this.applyMatrix4(pn),this}rotateY(t){return pn.makeRotationY(t),this.applyMatrix4(pn),this}rotateZ(t){return pn.makeRotationZ(t),this.applyMatrix4(pn),this}translate(t,e,n){return pn.makeTranslation(t,e,n),this.applyMatrix4(pn),this}scale(t,e,n){return pn.makeScale(t,e,n),this.applyMatrix4(pn),this}lookAt(t){return uc.lookAt(t),uc.updateMatrix(),this.applyMatrix4(uc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Rs).negate(),this.translate(Rs.x,Rs.y,Rs.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let i=0,r=t.length;i<r;i++){const o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Re(n,3))}else{for(let n=0,i=e.count;n<i;n++){const r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Mi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const r=e[n];un.setFromBufferAttribute(r),this.morphTargetsRelative?(Fe.addVectors(this.boundingBox.min,un.min),this.boundingBox.expandByPoint(Fe),Fe.addVectors(this.boundingBox.max,un.max),this.boundingBox.expandByPoint(Fe)):(this.boundingBox.expandByPoint(un.min),this.boundingBox.expandByPoint(un.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Jn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(t){const n=this.boundingSphere.center;if(un.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];_r.setFromBufferAttribute(a),this.morphTargetsRelative?(Fe.addVectors(un.min,_r.min),un.expandByPoint(Fe),Fe.addVectors(un.max,_r.max),un.expandByPoint(Fe)):(un.expandByPoint(_r.min),un.expandByPoint(_r.max))}un.getCenter(n);let i=0;for(let r=0,o=t.count;r<o;r++)Fe.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(Fe));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Fe.fromBufferAttribute(a,l),c&&(Rs.fromBufferAttribute(t,l),Fe.add(Rs)),i=Math.max(i,n.distanceToSquared(Fe))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new $t(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let L=0;L<n.count;L++)a[L]=new P,c[L]=new P;const l=new P,h=new P,u=new P,d=new gt,f=new gt,m=new gt,_=new P,g=new P;function p(L,T,b){l.fromBufferAttribute(n,L),h.fromBufferAttribute(n,T),u.fromBufferAttribute(n,b),d.fromBufferAttribute(r,L),f.fromBufferAttribute(r,T),m.fromBufferAttribute(r,b),h.sub(l),u.sub(l),f.sub(d),m.sub(d);const D=1/(f.x*m.y-m.x*f.y);isFinite(D)&&(_.copy(h).multiplyScalar(m.y).addScaledVector(u,-f.y).multiplyScalar(D),g.copy(u).multiplyScalar(f.x).addScaledVector(h,-m.x).multiplyScalar(D),a[L].add(_),a[T].add(_),a[b].add(_),c[L].add(g),c[T].add(g),c[b].add(g))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let L=0,T=M.length;L<T;++L){const b=M[L],D=b.start,z=b.count;for(let F=D,W=D+z;F<W;F+=3)p(t.getX(F+0),t.getX(F+1),t.getX(F+2))}const y=new P,x=new P,I=new P,w=new P;function R(L){I.fromBufferAttribute(i,L),w.copy(I);const T=a[L];y.copy(T),y.sub(I.multiplyScalar(I.dot(T))).normalize(),x.crossVectors(w,T);const D=x.dot(c[L])<0?-1:1;o.setXYZW(L,y.x,y.y,y.z,D)}for(let L=0,T=M.length;L<T;++L){const b=M[L],D=b.start,z=b.count;for(let F=D,W=D+z;F<W;F+=3)R(t.getX(F+0)),R(t.getX(F+1)),R(t.getX(F+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new $t(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new P,r=new P,o=new P,a=new P,c=new P,l=new P,h=new P,u=new P;if(t)for(let d=0,f=t.count;d<f;d+=3){const m=t.getX(d+0),_=t.getX(d+1),g=t.getX(d+2);i.fromBufferAttribute(e,m),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,g),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),a.fromBufferAttribute(n,m),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),a.add(h),c.add(h),l.add(h),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let d=0,f=e.count;d<f;d+=3)i.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Fe.fromBufferAttribute(t,e),Fe.normalize(),t.setXYZ(e,Fe.x,Fe.y,Fe.z)}toNonIndexed(){function t(a,c){const l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h);let f=0,m=0;for(let _=0,g=c.length;_<g;_++){a.isInterleavedBufferAttribute?f=c[_]*a.data.stride+a.offset:f=c[_]*h;for(let p=0;p<h;p++)d[m++]=l[f++]}return new $t(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Te,n=this.index.array,i=this.attributes;for(const a in i){const c=i[a],l=t(c,n);e.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){const d=l[h],f=t(d,n);c.push(f)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const i={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){const f=l[u];h.push(f.toJSON(t.data))}h.length>0&&(i[c]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const l in i){const h=i[l];this.setAttribute(l,h.clone(e))}const r=t.morphAttributes;for(const l in r){const h=[],u=r[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,h=o.length;l<h;l++){const u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Vu=new Gt,Yi=new eo,xo=new Jn,Gu=new P,Mo=new P,yo=new P,bo=new P,dc=new P,So=new P,Wu=new P,To=new P;class ce extends be{constructor(t=new Te,e=new Bn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(r&&a){So.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=a[c],u=r[c];h!==0&&(dc.fromBufferAttribute(u,t),o?So.addScaledVector(dc,h):So.addScaledVector(dc.sub(e),h))}e.add(So)}return e}raycast(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),xo.copy(n.boundingSphere),xo.applyMatrix4(r),Yi.copy(t.ray).recast(t.near),!(xo.containsPoint(Yi.origin)===!1&&(Yi.intersectSphere(xo,Gu)===null||Yi.origin.distanceToSquared(Gu)>(t.far-t.near)**2))&&(Vu.copy(r).invert(),Yi.copy(t.ray).applyMatrix4(Vu),!(n.boundingBox!==null&&Yi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Yi)))}_computeIntersections(t,e,n){let i;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,_=d.length;m<_;m++){const g=d[m],p=o[g.materialIndex],M=Math.max(g.start,f.start),y=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let x=M,I=y;x<I;x+=3){const w=a.getX(x),R=a.getX(x+1),L=a.getX(x+2);i=Eo(this,p,t,n,l,h,u,w,R,L),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{const m=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let g=m,p=_;g<p;g+=3){const M=a.getX(g),y=a.getX(g+1),x=a.getX(g+2);i=Eo(this,o,t,n,l,h,u,M,y,x),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}else if(c!==void 0)if(Array.isArray(o))for(let m=0,_=d.length;m<_;m++){const g=d[m],p=o[g.materialIndex],M=Math.max(g.start,f.start),y=Math.min(c.count,Math.min(g.start+g.count,f.start+f.count));for(let x=M,I=y;x<I;x+=3){const w=x,R=x+1,L=x+2;i=Eo(this,p,t,n,l,h,u,w,R,L),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{const m=Math.max(0,f.start),_=Math.min(c.count,f.start+f.count);for(let g=m,p=_;g<p;g+=3){const M=g,y=g+1,x=g+2;i=Eo(this,o,t,n,l,h,u,M,y,x),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}}}function kg(s,t,e,n,i,r,o,a){let c;if(t.side===Ze?c=n.intersectTriangle(o,r,i,!0,a):c=n.intersectTriangle(i,r,o,t.side===_i,a),c===null)return null;To.copy(a),To.applyMatrix4(s.matrixWorld);const l=e.ray.origin.distanceTo(To);return l<e.near||l>e.far?null:{distance:l,point:To.clone(),object:s}}function Eo(s,t,e,n,i,r,o,a,c,l){s.getVertexPosition(a,Mo),s.getVertexPosition(c,yo),s.getVertexPosition(l,bo);const h=kg(s,t,e,n,Mo,yo,bo,Wu);if(h){const u=new P;Fn.getBarycoord(Wu,Mo,yo,bo,u),i&&(h.uv=Fn.getInterpolatedAttribute(i,a,c,l,u,new gt)),r&&(h.uv1=Fn.getInterpolatedAttribute(r,a,c,l,u,new gt)),o&&(h.normal=Fn.getInterpolatedAttribute(o,a,c,l,u,new P),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:c,c:l,normal:new P,materialIndex:0};Fn.getNormal(Mo,yo,bo,d.normal),h.face=d,h.barycoord=u}return h}class fs extends Te{constructor(t=1,e=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],h=[],u=[];let d=0,f=0;m("z","y","x",-1,-1,n,e,t,o,r,0),m("z","y","x",1,-1,n,e,-t,o,r,1),m("x","z","y",1,1,t,n,e,i,o,2),m("x","z","y",1,-1,t,n,-e,i,o,3),m("x","y","z",1,-1,t,e,n,i,r,4),m("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new Re(l,3)),this.setAttribute("normal",new Re(h,3)),this.setAttribute("uv",new Re(u,2));function m(_,g,p,M,y,x,I,w,R,L,T){const b=x/R,D=I/L,z=x/2,F=I/2,W=w/2,K=R+1,Y=L+1;let Z=0,H=0;const rt=new P;for(let ht=0;ht<Y;ht++){const ft=ht*D-F;for(let At=0;At<K;At++){const Pt=At*b-z;rt[_]=Pt*M,rt[g]=ft*y,rt[p]=W,l.push(rt.x,rt.y,rt.z),rt[_]=0,rt[g]=0,rt[p]=w>0?1:-1,h.push(rt.x,rt.y,rt.z),u.push(At/R),u.push(1-ht/L),Z+=1}}for(let ht=0;ht<L;ht++)for(let ft=0;ft<R;ft++){const At=d+ft+K*ht,Pt=d+ft+K*(ht+1),V=d+(ft+1)+K*(ht+1),J=d+(ft+1)+K*ht;c.push(At,Pt,J),c.push(Pt,V,J),H+=6}a.addGroup(f,H,T),f+=H,d+=Z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new fs(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function nr(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Ke(s){const t={};for(let e=0;e<s.length;e++){const n=nr(s[e]);for(const i in n)t[i]=n[i]}return t}function Bg(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function em(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ne.workingColorSpace}const Hg={clone:nr,merge:Ke};var zg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Vg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class xi extends Hn{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=zg,this.fragmentShader=Vg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=nr(t.uniforms),this.uniformsGroups=Bg(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class nm extends be{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Gt,this.projectionMatrix=new Gt,this.projectionMatrixInverse=new Gt,this.coordinateSystem=pi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ri=new P,Xu=new gt,qu=new gt;class je extends nm{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=er*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Dr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return er*2*Math.atan(Math.tan(Dr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Ri.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ri.x,Ri.y).multiplyScalar(-t/Ri.z),Ri.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ri.x,Ri.y).multiplyScalar(-t/Ri.z)}getViewSize(t,e){return this.getViewBounds(t,Xu,qu),e.subVectors(qu,Xu)}setViewOffset(t,e,n,i,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Dr*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*i/c,e-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Cs=-90,Ps=1;class Gg extends be{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new je(Cs,Ps,t,e);i.layers=this.layers,this.add(i);const r=new je(Cs,Ps,t,e);r.layers=this.layers,this.add(r);const o=new je(Cs,Ps,t,e);o.layers=this.layers,this.add(o);const a=new je(Cs,Ps,t,e);a.layers=this.layers,this.add(a);const c=new je(Cs,Ps,t,e);c.layers=this.layers,this.add(c);const l=new je(Cs,Ps,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,r,o,a,c]=e;for(const l of e)this.remove(l);if(t===pi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===ya)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,c),t.setRenderTarget(n,4,i),t.render(e,l),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class im extends Le{constructor(t,e,n,i,r,o,a,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:Zs,super(t,e,n,i,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Wg extends ds{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new im(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:an}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new fs(5,5,5),r=new xi({name:"CubemapFromEquirect",uniforms:nr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ze,blending:Vi});r.uniforms.tEquirect.value=e;const o=new ce(i,r),a=e.minFilter;return e.minFilter===jn&&(e.minFilter=an),new Gg(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(r)}}const fc=new P,Xg=new P,qg=new Jt;class ns{constructor(t=new P(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=fc.subVectors(n,e).cross(Xg.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(fc),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||qg.getNormalMatrix(t),i=this.coplanarPoint(fc).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ji=new Jn,Ao=new P;class Ch{constructor(t=new ns,e=new ns,n=new ns,i=new ns,r=new ns,o=new ns){this.planes=[t,e,n,i,r,o]}set(t,e,n,i,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=pi){const n=this.planes,i=t.elements,r=i[0],o=i[1],a=i[2],c=i[3],l=i[4],h=i[5],u=i[6],d=i[7],f=i[8],m=i[9],_=i[10],g=i[11],p=i[12],M=i[13],y=i[14],x=i[15];if(n[0].setComponents(c-r,d-l,g-f,x-p).normalize(),n[1].setComponents(c+r,d+l,g+f,x+p).normalize(),n[2].setComponents(c+o,d+h,g+m,x+M).normalize(),n[3].setComponents(c-o,d-h,g-m,x-M).normalize(),n[4].setComponents(c-a,d-u,g-_,x-y).normalize(),e===pi)n[5].setComponents(c+a,d+u,g+_,x+y).normalize();else if(e===ya)n[5].setComponents(a,u,_,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ji.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ji.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ji)}intersectsSprite(t){return ji.center.set(0,0,0),ji.radius=.7071067811865476,ji.applyMatrix4(t.matrixWorld),this.intersectsSphere(ji)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(Ao.x=i.normal.x>0?t.max.x:t.min.x,Ao.y=i.normal.y>0?t.max.y:t.min.y,Ao.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Ao)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function sm(){let s=null,t=!1,e=null,n=null;function i(r,o){e(r,o),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function Kg(s){const t=new WeakMap;function e(a,c){const l=a.array,h=a.usage,u=l.byteLength,d=s.createBuffer();s.bindBuffer(c,d),s.bufferData(c,l,h),a.onUploadCallback();let f;if(l instanceof Float32Array)f=s.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=s.SHORT;else if(l instanceof Uint32Array)f=s.UNSIGNED_INT;else if(l instanceof Int32Array)f=s.INT;else if(l instanceof Int8Array)f=s.BYTE;else if(l instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){const h=c.array,u=c.updateRanges;if(s.bindBuffer(l,a),u.length===0)s.bufferSubData(l,0,h);else{u.sort((f,m)=>f.start-m.start);let d=0;for(let f=1;f<u.length;f++){const m=u[d],_=u[f];_.start<=m.start+m.count+1?m.count=Math.max(m.count,_.start+_.count-m.start):(++d,u[d]=_)}u.length=d+1;for(let f=0,m=u.length;f<m;f++){const _=u[f];s.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(s.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:i,remove:r,update:o}}class no extends Te{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(i),l=a+1,h=c+1,u=t/a,d=e/c,f=[],m=[],_=[],g=[];for(let p=0;p<h;p++){const M=p*d-o;for(let y=0;y<l;y++){const x=y*u-r;m.push(x,-M,0),_.push(0,0,1),g.push(y/a),g.push(1-p/c)}}for(let p=0;p<c;p++)for(let M=0;M<a;M++){const y=M+l*p,x=M+l*(p+1),I=M+1+l*(p+1),w=M+1+l*p;f.push(y,x,w),f.push(x,I,w)}this.setIndex(f),this.setAttribute("position",new Re(m,3)),this.setAttribute("normal",new Re(_,3)),this.setAttribute("uv",new Re(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new no(t.width,t.height,t.widthSegments,t.heightSegments)}}var Yg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,jg=`#ifdef USE_ALPHAHASH
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
#endif`,$g=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Zg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Jg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Qg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,t_=`#ifdef USE_AOMAP
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
#endif`,e_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,n_=`#ifdef USE_BATCHING
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
#endif`,i_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,s_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,r_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,o_=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,a_=`#ifdef USE_IRIDESCENCE
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
#endif`,c_=`#ifdef USE_BUMPMAP
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
#endif`,l_=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,h_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,u_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,d_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,f_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,p_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,m_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,g_=`#if defined( USE_COLOR_ALPHA )
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
#endif`,__=`#define PI 3.141592653589793
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
} // validated`,v_=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,x_=`vec3 transformedNormal = objectNormal;
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
#endif`,M_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,y_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,b_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,S_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,T_="gl_FragColor = linearToOutputTexel( gl_FragColor );",E_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,A_=`#ifdef USE_ENVMAP
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
#endif`,w_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,R_=`#ifdef USE_ENVMAP
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
#endif`,C_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,P_=`#ifdef USE_ENVMAP
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
#endif`,L_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,I_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,D_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,N_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,F_=`#ifdef USE_GRADIENTMAP
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
}`,U_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,O_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,k_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,B_=`uniform bool receiveShadow;
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
#endif`,H_=`#ifdef USE_ENVMAP
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
#endif`,z_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,V_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,G_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,W_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,X_=`PhysicalMaterial material;
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
#endif`,q_=`struct PhysicalMaterial {
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
}`,K_=`
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
#endif`,Y_=`#if defined( RE_IndirectDiffuse )
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
#endif`,j_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,$_=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Z_=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,J_=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Q_=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,tv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ev=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,nv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,iv=`#if defined( USE_POINTS_UV )
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
#endif`,sv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,rv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ov=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,av=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,cv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,lv=`#ifdef USE_MORPHTARGETS
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
#endif`,hv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,uv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,dv=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,fv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,gv=`#ifdef USE_NORMALMAP
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
#endif`,_v=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,vv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,xv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Mv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,yv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,bv=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Sv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Tv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ev=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Av=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,wv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Rv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Cv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Pv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Lv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Iv=`float getShadowMask() {
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
}`,Dv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Nv=`#ifdef USE_SKINNING
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
#endif`,Fv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Uv=`#ifdef USE_SKINNING
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
#endif`,Ov=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,kv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Bv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Hv=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,zv=`#ifdef USE_TRANSMISSION
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
#endif`,Vv=`#ifdef USE_TRANSMISSION
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
#endif`,Gv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Wv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Xv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Kv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Yv=`uniform sampler2D t2D;
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
}`,jv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$v=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Zv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Jv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qv=`#include <common>
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
}`,tx=`#if DEPTH_PACKING == 3200
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
}`,ex=`#define DISTANCE
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
}`,nx=`#define DISTANCE
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
}`,ix=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,sx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rx=`uniform float scale;
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
}`,ox=`uniform vec3 diffuse;
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
}`,ax=`#include <common>
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
}`,cx=`uniform vec3 diffuse;
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
}`,lx=`#define LAMBERT
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
}`,hx=`#define LAMBERT
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
}`,ux=`#define MATCAP
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
}`,dx=`#define MATCAP
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
}`,fx=`#define NORMAL
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
}`,px=`#define NORMAL
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
}`,mx=`#define PHONG
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
}`,gx=`#define PHONG
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
}`,_x=`#define STANDARD
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
}`,vx=`#define STANDARD
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
}`,xx=`#define TOON
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
}`,Mx=`#define TOON
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
}`,yx=`uniform float size;
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
}`,bx=`uniform vec3 diffuse;
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
}`,Sx=`#include <common>
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
}`,Tx=`uniform vec3 color;
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
}`,Ex=`uniform float rotation;
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
}`,Ax=`uniform vec3 diffuse;
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
}`,Qt={alphahash_fragment:Yg,alphahash_pars_fragment:jg,alphamap_fragment:$g,alphamap_pars_fragment:Zg,alphatest_fragment:Jg,alphatest_pars_fragment:Qg,aomap_fragment:t_,aomap_pars_fragment:e_,batching_pars_vertex:n_,batching_vertex:i_,begin_vertex:s_,beginnormal_vertex:r_,bsdfs:o_,iridescence_fragment:a_,bumpmap_pars_fragment:c_,clipping_planes_fragment:l_,clipping_planes_pars_fragment:h_,clipping_planes_pars_vertex:u_,clipping_planes_vertex:d_,color_fragment:f_,color_pars_fragment:p_,color_pars_vertex:m_,color_vertex:g_,common:__,cube_uv_reflection_fragment:v_,defaultnormal_vertex:x_,displacementmap_pars_vertex:M_,displacementmap_vertex:y_,emissivemap_fragment:b_,emissivemap_pars_fragment:S_,colorspace_fragment:T_,colorspace_pars_fragment:E_,envmap_fragment:A_,envmap_common_pars_fragment:w_,envmap_pars_fragment:R_,envmap_pars_vertex:C_,envmap_physical_pars_fragment:H_,envmap_vertex:P_,fog_vertex:L_,fog_pars_vertex:I_,fog_fragment:D_,fog_pars_fragment:N_,gradientmap_pars_fragment:F_,lightmap_pars_fragment:U_,lights_lambert_fragment:O_,lights_lambert_pars_fragment:k_,lights_pars_begin:B_,lights_toon_fragment:z_,lights_toon_pars_fragment:V_,lights_phong_fragment:G_,lights_phong_pars_fragment:W_,lights_physical_fragment:X_,lights_physical_pars_fragment:q_,lights_fragment_begin:K_,lights_fragment_maps:Y_,lights_fragment_end:j_,logdepthbuf_fragment:$_,logdepthbuf_pars_fragment:Z_,logdepthbuf_pars_vertex:J_,logdepthbuf_vertex:Q_,map_fragment:tv,map_pars_fragment:ev,map_particle_fragment:nv,map_particle_pars_fragment:iv,metalnessmap_fragment:sv,metalnessmap_pars_fragment:rv,morphinstance_vertex:ov,morphcolor_vertex:av,morphnormal_vertex:cv,morphtarget_pars_vertex:lv,morphtarget_vertex:hv,normal_fragment_begin:uv,normal_fragment_maps:dv,normal_pars_fragment:fv,normal_pars_vertex:pv,normal_vertex:mv,normalmap_pars_fragment:gv,clearcoat_normal_fragment_begin:_v,clearcoat_normal_fragment_maps:vv,clearcoat_pars_fragment:xv,iridescence_pars_fragment:Mv,opaque_fragment:yv,packing:bv,premultiplied_alpha_fragment:Sv,project_vertex:Tv,dithering_fragment:Ev,dithering_pars_fragment:Av,roughnessmap_fragment:wv,roughnessmap_pars_fragment:Rv,shadowmap_pars_fragment:Cv,shadowmap_pars_vertex:Pv,shadowmap_vertex:Lv,shadowmask_pars_fragment:Iv,skinbase_vertex:Dv,skinning_pars_vertex:Nv,skinning_vertex:Fv,skinnormal_vertex:Uv,specularmap_fragment:Ov,specularmap_pars_fragment:kv,tonemapping_fragment:Bv,tonemapping_pars_fragment:Hv,transmission_fragment:zv,transmission_pars_fragment:Vv,uv_pars_fragment:Gv,uv_pars_vertex:Wv,uv_vertex:Xv,worldpos_vertex:qv,background_vert:Kv,background_frag:Yv,backgroundCube_vert:jv,backgroundCube_frag:$v,cube_vert:Zv,cube_frag:Jv,depth_vert:Qv,depth_frag:tx,distanceRGBA_vert:ex,distanceRGBA_frag:nx,equirect_vert:ix,equirect_frag:sx,linedashed_vert:rx,linedashed_frag:ox,meshbasic_vert:ax,meshbasic_frag:cx,meshlambert_vert:lx,meshlambert_frag:hx,meshmatcap_vert:ux,meshmatcap_frag:dx,meshnormal_vert:fx,meshnormal_frag:px,meshphong_vert:mx,meshphong_frag:gx,meshphysical_vert:_x,meshphysical_frag:vx,meshtoon_vert:xx,meshtoon_frag:Mx,points_vert:yx,points_frag:bx,shadow_vert:Sx,shadow_frag:Tx,sprite_vert:Ex,sprite_frag:Ax},yt={common:{diffuse:{value:new Nt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Jt}},envmap:{envMap:{value:null},envMapRotation:{value:new Jt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Jt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Jt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Jt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Jt},normalScale:{value:new gt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Jt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Jt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Jt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Jt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Nt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Nt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0},uvTransform:{value:new Jt}},sprite:{diffuse:{value:new Nt(16777215)},opacity:{value:1},center:{value:new gt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}}},Kn={basic:{uniforms:Ke([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.fog]),vertexShader:Qt.meshbasic_vert,fragmentShader:Qt.meshbasic_frag},lambert:{uniforms:Ke([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,yt.lights,{emissive:{value:new Nt(0)}}]),vertexShader:Qt.meshlambert_vert,fragmentShader:Qt.meshlambert_frag},phong:{uniforms:Ke([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,yt.lights,{emissive:{value:new Nt(0)},specular:{value:new Nt(1118481)},shininess:{value:30}}]),vertexShader:Qt.meshphong_vert,fragmentShader:Qt.meshphong_frag},standard:{uniforms:Ke([yt.common,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.roughnessmap,yt.metalnessmap,yt.fog,yt.lights,{emissive:{value:new Nt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qt.meshphysical_vert,fragmentShader:Qt.meshphysical_frag},toon:{uniforms:Ke([yt.common,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.gradientmap,yt.fog,yt.lights,{emissive:{value:new Nt(0)}}]),vertexShader:Qt.meshtoon_vert,fragmentShader:Qt.meshtoon_frag},matcap:{uniforms:Ke([yt.common,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,{matcap:{value:null}}]),vertexShader:Qt.meshmatcap_vert,fragmentShader:Qt.meshmatcap_frag},points:{uniforms:Ke([yt.points,yt.fog]),vertexShader:Qt.points_vert,fragmentShader:Qt.points_frag},dashed:{uniforms:Ke([yt.common,yt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qt.linedashed_vert,fragmentShader:Qt.linedashed_frag},depth:{uniforms:Ke([yt.common,yt.displacementmap]),vertexShader:Qt.depth_vert,fragmentShader:Qt.depth_frag},normal:{uniforms:Ke([yt.common,yt.bumpmap,yt.normalmap,yt.displacementmap,{opacity:{value:1}}]),vertexShader:Qt.meshnormal_vert,fragmentShader:Qt.meshnormal_frag},sprite:{uniforms:Ke([yt.sprite,yt.fog]),vertexShader:Qt.sprite_vert,fragmentShader:Qt.sprite_frag},background:{uniforms:{uvTransform:{value:new Jt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qt.background_vert,fragmentShader:Qt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Jt}},vertexShader:Qt.backgroundCube_vert,fragmentShader:Qt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qt.cube_vert,fragmentShader:Qt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qt.equirect_vert,fragmentShader:Qt.equirect_frag},distanceRGBA:{uniforms:Ke([yt.common,yt.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qt.distanceRGBA_vert,fragmentShader:Qt.distanceRGBA_frag},shadow:{uniforms:Ke([yt.lights,yt.fog,{color:{value:new Nt(0)},opacity:{value:1}}]),vertexShader:Qt.shadow_vert,fragmentShader:Qt.shadow_frag}};Kn.physical={uniforms:Ke([Kn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Jt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Jt},clearcoatNormalScale:{value:new gt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Jt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Jt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Jt},sheen:{value:0},sheenColor:{value:new Nt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Jt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Jt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Jt},transmissionSamplerSize:{value:new gt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Jt},attenuationDistance:{value:0},attenuationColor:{value:new Nt(0)},specularColor:{value:new Nt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Jt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Jt},anisotropyVector:{value:new gt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Jt}}]),vertexShader:Qt.meshphysical_vert,fragmentShader:Qt.meshphysical_frag};const wo={r:0,b:0,g:0},$i=new Vn,wx=new Gt;function Rx(s,t,e,n,i,r,o){const a=new Nt(0);let c=r===!0?0:1,l,h,u=null,d=0,f=null;function m(M){let y=M.isScene===!0?M.background:null;return y&&y.isTexture&&(y=(M.backgroundBlurriness>0?e:t).get(y)),y}function _(M){let y=!1;const x=m(M);x===null?p(a,c):x&&x.isColor&&(p(x,1),y=!0);const I=s.xr.getEnvironmentBlendMode();I==="additive"?n.buffers.color.setClear(0,0,0,1,o):I==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function g(M,y){const x=m(y);x&&(x.isCubeTexture||x.mapping===La)?(h===void 0&&(h=new ce(new fs(1,1,1),new xi({name:"BackgroundCubeMaterial",uniforms:nr(Kn.backgroundCube.uniforms),vertexShader:Kn.backgroundCube.vertexShader,fragmentShader:Kn.backgroundCube.fragmentShader,side:Ze,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(I,w,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),$i.copy(y.backgroundRotation),$i.x*=-1,$i.y*=-1,$i.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&($i.y*=-1,$i.z*=-1),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(wx.makeRotationFromEuler($i)),h.material.toneMapped=ne.getTransfer(x.colorSpace)!==me,(u!==x||d!==x.version||f!==s.toneMapping)&&(h.material.needsUpdate=!0,u=x,d=x.version,f=s.toneMapping),h.layers.enableAll(),M.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new ce(new no(2,2),new xi({name:"BackgroundMaterial",uniforms:nr(Kn.background.uniforms),vertexShader:Kn.background.vertexShader,fragmentShader:Kn.background.fragmentShader,side:_i,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=ne.getTransfer(x.colorSpace)!==me,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||d!==x.version||f!==s.toneMapping)&&(l.material.needsUpdate=!0,u=x,d=x.version,f=s.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function p(M,y){M.getRGB(wo,em(s)),n.buffers.color.setClear(wo.r,wo.g,wo.b,y,o)}return{getClearColor:function(){return a},setClearColor:function(M,y=1){a.set(M),c=y,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(M){c=M,p(a,c)},render:_,addToRenderList:g}}function Cx(s,t){const e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null);let r=i,o=!1;function a(b,D,z,F,W){let K=!1;const Y=u(F,z,D);r!==Y&&(r=Y,l(r.object)),K=f(b,F,z,W),K&&m(b,F,z,W),W!==null&&t.update(W,s.ELEMENT_ARRAY_BUFFER),(K||o)&&(o=!1,x(b,D,z,F),W!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function c(){return s.createVertexArray()}function l(b){return s.bindVertexArray(b)}function h(b){return s.deleteVertexArray(b)}function u(b,D,z){const F=z.wireframe===!0;let W=n[b.id];W===void 0&&(W={},n[b.id]=W);let K=W[D.id];K===void 0&&(K={},W[D.id]=K);let Y=K[F];return Y===void 0&&(Y=d(c()),K[F]=Y),Y}function d(b){const D=[],z=[],F=[];for(let W=0;W<e;W++)D[W]=0,z[W]=0,F[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:z,attributeDivisors:F,object:b,attributes:{},index:null}}function f(b,D,z,F){const W=r.attributes,K=D.attributes;let Y=0;const Z=z.getAttributes();for(const H in Z)if(Z[H].location>=0){const ht=W[H];let ft=K[H];if(ft===void 0&&(H==="instanceMatrix"&&b.instanceMatrix&&(ft=b.instanceMatrix),H==="instanceColor"&&b.instanceColor&&(ft=b.instanceColor)),ht===void 0||ht.attribute!==ft||ft&&ht.data!==ft.data)return!0;Y++}return r.attributesNum!==Y||r.index!==F}function m(b,D,z,F){const W={},K=D.attributes;let Y=0;const Z=z.getAttributes();for(const H in Z)if(Z[H].location>=0){let ht=K[H];ht===void 0&&(H==="instanceMatrix"&&b.instanceMatrix&&(ht=b.instanceMatrix),H==="instanceColor"&&b.instanceColor&&(ht=b.instanceColor));const ft={};ft.attribute=ht,ht&&ht.data&&(ft.data=ht.data),W[H]=ft,Y++}r.attributes=W,r.attributesNum=Y,r.index=F}function _(){const b=r.newAttributes;for(let D=0,z=b.length;D<z;D++)b[D]=0}function g(b){p(b,0)}function p(b,D){const z=r.newAttributes,F=r.enabledAttributes,W=r.attributeDivisors;z[b]=1,F[b]===0&&(s.enableVertexAttribArray(b),F[b]=1),W[b]!==D&&(s.vertexAttribDivisor(b,D),W[b]=D)}function M(){const b=r.newAttributes,D=r.enabledAttributes;for(let z=0,F=D.length;z<F;z++)D[z]!==b[z]&&(s.disableVertexAttribArray(z),D[z]=0)}function y(b,D,z,F,W,K,Y){Y===!0?s.vertexAttribIPointer(b,D,z,W,K):s.vertexAttribPointer(b,D,z,F,W,K)}function x(b,D,z,F){_();const W=F.attributes,K=z.getAttributes(),Y=D.defaultAttributeValues;for(const Z in K){const H=K[Z];if(H.location>=0){let rt=W[Z];if(rt===void 0&&(Z==="instanceMatrix"&&b.instanceMatrix&&(rt=b.instanceMatrix),Z==="instanceColor"&&b.instanceColor&&(rt=b.instanceColor)),rt!==void 0){const ht=rt.normalized,ft=rt.itemSize,At=t.get(rt);if(At===void 0)continue;const Pt=At.buffer,V=At.type,J=At.bytesPerElement,St=V===s.INT||V===s.UNSIGNED_INT||rt.gpuType===xh;if(rt.isInterleavedBufferAttribute){const st=rt.data,Lt=st.stride,Ht=rt.offset;if(st.isInstancedInterleavedBuffer){for(let It=0;It<H.locationSize;It++)p(H.location+It,st.meshPerAttribute);b.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let It=0;It<H.locationSize;It++)g(H.location+It);s.bindBuffer(s.ARRAY_BUFFER,Pt);for(let It=0;It<H.locationSize;It++)y(H.location+It,ft/H.locationSize,V,ht,Lt*J,(Ht+ft/H.locationSize*It)*J,St)}else{if(rt.isInstancedBufferAttribute){for(let st=0;st<H.locationSize;st++)p(H.location+st,rt.meshPerAttribute);b.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let st=0;st<H.locationSize;st++)g(H.location+st);s.bindBuffer(s.ARRAY_BUFFER,Pt);for(let st=0;st<H.locationSize;st++)y(H.location+st,ft/H.locationSize,V,ht,ft*J,ft/H.locationSize*st*J,St)}}else if(Y!==void 0){const ht=Y[Z];if(ht!==void 0)switch(ht.length){case 2:s.vertexAttrib2fv(H.location,ht);break;case 3:s.vertexAttrib3fv(H.location,ht);break;case 4:s.vertexAttrib4fv(H.location,ht);break;default:s.vertexAttrib1fv(H.location,ht)}}}}M()}function I(){L();for(const b in n){const D=n[b];for(const z in D){const F=D[z];for(const W in F)h(F[W].object),delete F[W];delete D[z]}delete n[b]}}function w(b){if(n[b.id]===void 0)return;const D=n[b.id];for(const z in D){const F=D[z];for(const W in F)h(F[W].object),delete F[W];delete D[z]}delete n[b.id]}function R(b){for(const D in n){const z=n[D];if(z[b.id]===void 0)continue;const F=z[b.id];for(const W in F)h(F[W].object),delete F[W];delete z[b.id]}}function L(){T(),o=!0,r!==i&&(r=i,l(r.object))}function T(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:L,resetDefaultState:T,dispose:I,releaseStatesOfGeometry:w,releaseStatesOfProgram:R,initAttributes:_,enableAttribute:g,disableUnusedAttributes:M}}function Px(s,t,e){let n;function i(l){n=l}function r(l,h){s.drawArrays(n,l,h),e.update(h,n,1)}function o(l,h,u){u!==0&&(s.drawArraysInstanced(n,l,h,u),e.update(h,n,u))}function a(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let f=0;for(let m=0;m<u;m++)f+=h[m];e.update(f,n,1)}function c(l,h,u,d){if(u===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<l.length;m++)o(l[m],h[m],d[m]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,h,0,d,0,u);let m=0;for(let _=0;_<u;_++)m+=h[_]*d[_];e.update(m,n,1)}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function Lx(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const R=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(R){return!(R!==bn&&n.convert(R)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const L=R===to&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==vi&&n.convert(R)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==kn&&!L)}function c(R){if(R==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),m=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),M=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),y=s.getParameter(s.MAX_VARYING_VECTORS),x=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),I=m>0,w=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:m,maxTextureSize:_,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:M,maxVaryings:y,maxFragmentUniforms:x,vertexTextures:I,maxSamples:w}}function Ix(s){const t=this;let e=null,n=0,i=!1,r=!1;const o=new ns,a=new Jt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){const m=u.clippingPlanes,_=u.clipIntersection,g=u.clipShadows,p=s.get(u);if(!i||m===null||m.length===0||r&&!g)r?h(null):l();else{const M=r?0:n,y=M*4;let x=p.clippingState||null;c.value=x,x=h(m,d,y,f);for(let I=0;I!==y;++I)x[I]=e[I];p.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,m){const _=u!==null?u.length:0;let g=null;if(_!==0){if(g=c.value,m!==!0||g===null){const p=f+_*4,M=d.matrixWorldInverse;a.getNormalMatrix(M),(g===null||g.length<p)&&(g=new Float32Array(p));for(let y=0,x=f;y!==_;++y,x+=4)o.copy(u[y]).applyMatrix4(M,a),o.normal.toArray(g,x),g[x+3]=o.constant}c.value=g,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,g}}function Dx(s){let t=new WeakMap;function e(o,a){return a===bl?o.mapping=Zs:a===Sl&&(o.mapping=Js),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===bl||a===Sl)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new Wg(c.height);return l.fromEquirectangularTexture(s,o),t.set(o,l),o.addEventListener("dispose",i),e(l.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class Ph extends nm{constructor(t=-1,e=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=i+e,c=i-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Bs=4,Ku=[.125,.215,.35,.446,.526,.582],rs=20,pc=new Ph,Yu=new Nt;let mc=null,gc=0,_c=0,vc=!1;const is=(1+Math.sqrt(5))/2,Ls=1/is,ju=[new P(-is,Ls,0),new P(is,Ls,0),new P(-Ls,0,is),new P(Ls,0,is),new P(0,is,-Ls),new P(0,is,Ls),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)];class $u{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){mc=this._renderer.getRenderTarget(),gc=this._renderer.getActiveCubeFace(),_c=this._renderer.getActiveMipmapLevel(),vc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Qu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ju(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(mc,gc,_c),this._renderer.xr.enabled=vc,t.scissorTest=!1,Ro(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Zs||t.mapping===Js?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),mc=this._renderer.getRenderTarget(),gc=this._renderer.getActiveCubeFace(),_c=this._renderer.getActiveMipmapLevel(),vc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:an,minFilter:an,generateMipmaps:!1,type:to,format:bn,colorSpace:Qe,depthBuffer:!1},i=Zu(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Zu(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Nx(r)),this._blurMaterial=Fx(r,t,e)}return i}_compileMaterial(t){const e=new ce(this._lodPlanes[0],t);this._renderer.compile(e,pc)}_sceneToCubeUV(t,e,n,i){const a=new je(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Yu),h.toneMapping=Gi,h.autoClear=!1;const f=new Bn({name:"PMREM.Background",side:Ze,depthWrite:!1,depthTest:!1}),m=new ce(new fs,f);let _=!1;const g=t.background;g?g.isColor&&(f.color.copy(g),t.background=null,_=!0):(f.color.copy(Yu),_=!0);for(let p=0;p<6;p++){const M=p%3;M===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):M===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));const y=this._cubeSize;Ro(i,M*y,p>2?y:0,y,y),h.setRenderTarget(i),_&&h.render(m,a),h.render(t,a)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=g}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===Zs||t.mapping===Js;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Qu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ju());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new ce(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const c=this._cubeSize;Ro(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,pc)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=ju[(i-r-1)%ju.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",r),this._halfBlur(o,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new ce(this._lodPlanes[i],l),d=l.uniforms,f=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*rs-1),_=r/m,g=isFinite(r)?1+Math.floor(h*_):rs;g>rs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${rs}`);const p=[];let M=0;for(let R=0;R<rs;++R){const L=R/_,T=Math.exp(-L*L/2);p.push(T),R===0?M+=T:R<g&&(M+=2*T)}for(let R=0;R<p.length;R++)p[R]=p[R]/M;d.envMap.value=t.texture,d.samples.value=g,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:y}=this;d.dTheta.value=m,d.mipInt.value=y-n;const x=this._sizeLods[i],I=3*x*(i>y-Bs?i-y+Bs:0),w=4*(this._cubeSize-x);Ro(e,I,w,3*x,2*x),c.setRenderTarget(e),c.render(u,pc)}}function Nx(s){const t=[],e=[],n=[];let i=s;const r=s-Bs+1+Ku.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);e.push(a);let c=1/a;o>s-Bs?c=Ku[o-s+Bs-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,m=6,_=3,g=2,p=1,M=new Float32Array(_*m*f),y=new Float32Array(g*m*f),x=new Float32Array(p*m*f);for(let w=0;w<f;w++){const R=w%3*2/3-1,L=w>2?0:-1,T=[R,L,0,R+2/3,L,0,R+2/3,L+1,0,R,L,0,R+2/3,L+1,0,R,L+1,0];M.set(T,_*m*w),y.set(d,g*m*w);const b=[w,w,w,w,w,w];x.set(b,p*m*w)}const I=new Te;I.setAttribute("position",new $t(M,_)),I.setAttribute("uv",new $t(y,g)),I.setAttribute("faceIndex",new $t(x,p)),t.push(I),i>Bs&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Zu(s,t,e){const n=new ds(s,t,e);return n.texture.mapping=La,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ro(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function Fx(s,t,e){const n=new Float32Array(rs),i=new P(0,1,0);return new xi({name:"SphericalGaussianBlur",defines:{n:rs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Lh(),fragmentShader:`

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
		`,blending:Vi,depthTest:!1,depthWrite:!1})}function Ju(){return new xi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Lh(),fragmentShader:`

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
		`,blending:Vi,depthTest:!1,depthWrite:!1})}function Qu(){return new xi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Lh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Vi,depthTest:!1,depthWrite:!1})}function Lh(){return`

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
	`}function Ux(s){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===bl||c===Sl,h=c===Zs||c===Js;if(l||h){let u=t.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new $u(s)),u=l?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const f=a.image;return l&&f&&f.height>0||h&&f&&i(f)?(e===null&&(e=new $u(s)),u=l?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function i(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Ox(s){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&Lr("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function kx(s,t,e,n){const i={},r=new WeakMap;function o(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const m in d.attributes)t.remove(d.attributes[m]);for(const m in d.morphAttributes){const _=d.morphAttributes[m];for(let g=0,p=_.length;g<p;g++)t.remove(_[g])}d.removeEventListener("dispose",o),delete i[d.id];const f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,e.memory.geometries++),d}function c(u){const d=u.attributes;for(const m in d)t.update(d[m],s.ARRAY_BUFFER);const f=u.morphAttributes;for(const m in f){const _=f[m];for(let g=0,p=_.length;g<p;g++)t.update(_[g],s.ARRAY_BUFFER)}}function l(u){const d=[],f=u.index,m=u.attributes.position;let _=0;if(f!==null){const M=f.array;_=f.version;for(let y=0,x=M.length;y<x;y+=3){const I=M[y+0],w=M[y+1],R=M[y+2];d.push(I,w,w,R,R,I)}}else if(m!==void 0){const M=m.array;_=m.version;for(let y=0,x=M.length/3-1;y<x;y+=3){const I=y+0,w=y+1,R=y+2;d.push(I,w,w,R,R,I)}}else return;const g=new(jp(d)?tm:Qp)(d,1);g.version=_;const p=r.get(u);p&&t.remove(p),r.set(u,g)}function h(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function Bx(s,t,e){let n;function i(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,f){s.drawElements(n,f,r,d*o),e.update(f,n,1)}function l(d,f,m){m!==0&&(s.drawElementsInstanced(n,f,r,d*o,m),e.update(f,n,m))}function h(d,f,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,m);let g=0;for(let p=0;p<m;p++)g+=f[p];e.update(g,n,1)}function u(d,f,m,_){if(m===0)return;const g=t.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<d.length;p++)l(d[p]/o,f[p],_[p]);else{g.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,_,0,m);let p=0;for(let M=0;M<m;M++)p+=f[M]*_[M];e.update(p,n,1)}}this.setMode=i,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Hx(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=a*(r/3);break;case s.LINES:e.lines+=a*(r/2);break;case s.LINE_STRIP:e.lines+=a*(r-1);break;case s.LINE_LOOP:e.lines+=a*r;break;case s.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function zx(s,t,e){const n=new WeakMap,i=new he;function r(o,a,c){const l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(a);if(d===void 0||d.count!==u){let b=function(){L.dispose(),n.delete(a),a.removeEventListener("dispose",b)};var f=b;d!==void 0&&d.texture.dispose();const m=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],M=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let x=0;m===!0&&(x=1),_===!0&&(x=2),g===!0&&(x=3);let I=a.attributes.position.count*x,w=1;I>t.maxTextureSize&&(w=Math.ceil(I/t.maxTextureSize),I=t.maxTextureSize);const R=new Float32Array(I*w*4*u),L=new Zp(R,I,w,u);L.type=kn,L.needsUpdate=!0;const T=x*4;for(let D=0;D<u;D++){const z=p[D],F=M[D],W=y[D],K=I*w*4*D;for(let Y=0;Y<z.count;Y++){const Z=Y*T;m===!0&&(i.fromBufferAttribute(z,Y),R[K+Z+0]=i.x,R[K+Z+1]=i.y,R[K+Z+2]=i.z,R[K+Z+3]=0),_===!0&&(i.fromBufferAttribute(F,Y),R[K+Z+4]=i.x,R[K+Z+5]=i.y,R[K+Z+6]=i.z,R[K+Z+7]=0),g===!0&&(i.fromBufferAttribute(W,Y),R[K+Z+8]=i.x,R[K+Z+9]=i.y,R[K+Z+10]=i.z,R[K+Z+11]=W.itemSize===4?i.w:1)}}d={count:u,texture:L,size:new gt(I,w)},n.set(a,d),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",o.morphTexture,e);else{let m=0;for(let g=0;g<l.length;g++)m+=l[g];const _=a.morphTargetsRelative?1:1-m;c.getUniforms().setValue(s,"morphTargetBaseInfluence",_),c.getUniforms().setValue(s,"morphTargetInfluences",l)}c.getUniforms().setValue(s,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function Vx(s,t,e,n){let i=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,u=t.get(c,h);if(i.get(u)!==l&&(t.update(u),i.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),i.get(c)!==l&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;i.get(d)!==l&&(d.update(),i.set(d,l))}return u}function o(){i=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}class rm extends Le{constructor(t,e,n,i,r,o,a,c,l,h=Gs){if(h!==Gs&&h!==tr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Gs&&(n=us),n===void 0&&h===tr&&(n=Qs),super(null,i,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Je,this.minFilter=c!==void 0?c:Je,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const om=new Le,td=new rm(1,1),am=new Zp,cm=new Rg,lm=new im,ed=[],nd=[],id=new Float32Array(16),sd=new Float32Array(9),rd=new Float32Array(4);function cr(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let r=ed[i];if(r===void 0&&(r=new Float32Array(i),ed[i]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function Ie(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function De(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function Da(s,t){let e=nd[t];e===void 0&&(e=new Int32Array(t),nd[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function Gx(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function Wx(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ie(e,t))return;s.uniform2fv(this.addr,t),De(e,t)}}function Xx(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ie(e,t))return;s.uniform3fv(this.addr,t),De(e,t)}}function qx(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ie(e,t))return;s.uniform4fv(this.addr,t),De(e,t)}}function Kx(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ie(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),De(e,t)}else{if(Ie(e,n))return;rd.set(n),s.uniformMatrix2fv(this.addr,!1,rd),De(e,n)}}function Yx(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ie(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),De(e,t)}else{if(Ie(e,n))return;sd.set(n),s.uniformMatrix3fv(this.addr,!1,sd),De(e,n)}}function jx(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ie(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),De(e,t)}else{if(Ie(e,n))return;id.set(n),s.uniformMatrix4fv(this.addr,!1,id),De(e,n)}}function $x(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function Zx(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ie(e,t))return;s.uniform2iv(this.addr,t),De(e,t)}}function Jx(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ie(e,t))return;s.uniform3iv(this.addr,t),De(e,t)}}function Qx(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ie(e,t))return;s.uniform4iv(this.addr,t),De(e,t)}}function tM(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function eM(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ie(e,t))return;s.uniform2uiv(this.addr,t),De(e,t)}}function nM(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ie(e,t))return;s.uniform3uiv(this.addr,t),De(e,t)}}function iM(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ie(e,t))return;s.uniform4uiv(this.addr,t),De(e,t)}}function sM(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(td.compareFunction=Yp,r=td):r=om,e.setTexture2D(t||r,i)}function rM(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||cm,i)}function oM(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||lm,i)}function aM(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||am,i)}function cM(s){switch(s){case 5126:return Gx;case 35664:return Wx;case 35665:return Xx;case 35666:return qx;case 35674:return Kx;case 35675:return Yx;case 35676:return jx;case 5124:case 35670:return $x;case 35667:case 35671:return Zx;case 35668:case 35672:return Jx;case 35669:case 35673:return Qx;case 5125:return tM;case 36294:return eM;case 36295:return nM;case 36296:return iM;case 35678:case 36198:case 36298:case 36306:case 35682:return sM;case 35679:case 36299:case 36307:return rM;case 35680:case 36300:case 36308:case 36293:return oM;case 36289:case 36303:case 36311:case 36292:return aM}}function lM(s,t){s.uniform1fv(this.addr,t)}function hM(s,t){const e=cr(t,this.size,2);s.uniform2fv(this.addr,e)}function uM(s,t){const e=cr(t,this.size,3);s.uniform3fv(this.addr,e)}function dM(s,t){const e=cr(t,this.size,4);s.uniform4fv(this.addr,e)}function fM(s,t){const e=cr(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function pM(s,t){const e=cr(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function mM(s,t){const e=cr(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function gM(s,t){s.uniform1iv(this.addr,t)}function _M(s,t){s.uniform2iv(this.addr,t)}function vM(s,t){s.uniform3iv(this.addr,t)}function xM(s,t){s.uniform4iv(this.addr,t)}function MM(s,t){s.uniform1uiv(this.addr,t)}function yM(s,t){s.uniform2uiv(this.addr,t)}function bM(s,t){s.uniform3uiv(this.addr,t)}function SM(s,t){s.uniform4uiv(this.addr,t)}function TM(s,t,e){const n=this.cache,i=t.length,r=Da(e,i);Ie(n,r)||(s.uniform1iv(this.addr,r),De(n,r));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||om,r[o])}function EM(s,t,e){const n=this.cache,i=t.length,r=Da(e,i);Ie(n,r)||(s.uniform1iv(this.addr,r),De(n,r));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||cm,r[o])}function AM(s,t,e){const n=this.cache,i=t.length,r=Da(e,i);Ie(n,r)||(s.uniform1iv(this.addr,r),De(n,r));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||lm,r[o])}function wM(s,t,e){const n=this.cache,i=t.length,r=Da(e,i);Ie(n,r)||(s.uniform1iv(this.addr,r),De(n,r));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||am,r[o])}function RM(s){switch(s){case 5126:return lM;case 35664:return hM;case 35665:return uM;case 35666:return dM;case 35674:return fM;case 35675:return pM;case 35676:return mM;case 5124:case 35670:return gM;case 35667:case 35671:return _M;case 35668:case 35672:return vM;case 35669:case 35673:return xM;case 5125:return MM;case 36294:return yM;case 36295:return bM;case 36296:return SM;case 35678:case 36198:case 36298:case 36306:case 35682:return TM;case 35679:case 36299:case 36307:return EM;case 35680:case 36300:case 36308:case 36293:return AM;case 36289:case 36303:case 36311:case 36292:return wM}}class CM{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=cM(e.type)}}class PM{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=RM(e.type)}}class LM{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(t,e[a.id],n)}}}const xc=/(\w+)(\])?(\[|\.)?/g;function od(s,t){s.seq.push(t),s.map[t.id]=t}function IM(s,t,e){const n=s.name,i=n.length;for(xc.lastIndex=0;;){const r=xc.exec(n),o=xc.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){od(e,l===void 0?new CM(a,s,t):new PM(a,s,t));break}else{let u=e.map[a];u===void 0&&(u=new LM(a),od(e,u)),e=u}}}class da{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=t.getActiveUniform(e,i),o=t.getUniformLocation(e,r.name);IM(r,o,this)}}setValue(t,e,n,i){const r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,o=e.length;r!==o;++r){const a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,r=t.length;i!==r;++i){const o=t[i];o.id in e&&n.push(o)}return n}}function ad(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const DM=37297;let NM=0;function FM(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const cd=new Jt;function UM(s){ne._getMatrix(cd,ne.workingColorSpace,s);const t=`mat3( ${cd.elements.map(e=>e.toFixed(4))} )`;switch(ne.getTransfer(s)){case Ia:return[t,"LinearTransferOETF"];case me:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function ld(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+FM(s.getShaderSource(t),o)}else return i}function OM(s,t){const e=UM(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function kM(s,t){let e;switch(t){case B0:e="Linear";break;case H0:e="Reinhard";break;case z0:e="Cineon";break;case Np:e="ACESFilmic";break;case G0:e="AgX";break;case W0:e="Neutral";break;case V0:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Co=new P;function BM(){ne.getLuminanceCoefficients(Co);const s=Co.x.toFixed(4),t=Co.y.toFixed(4),e=Co.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function HM(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ir).join(`
`)}function zM(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function VM(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(t,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function Ir(s){return s!==""}function hd(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ud(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const GM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Jl(s){return s.replace(GM,XM)}const WM=new Map;function XM(s,t){let e=Qt[t];if(e===void 0){const n=WM.get(t);if(n!==void 0)e=Qt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Jl(e)}const qM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function dd(s){return s.replace(qM,KM)}function KM(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function fd(s){let t=`precision ${s.precision} float;
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
#define LOW_PRECISION`),t}function YM(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Ip?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===Dp?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===ui&&(t="SHADOWMAP_TYPE_VSM"),t}function jM(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Zs:case Js:t="ENVMAP_TYPE_CUBE";break;case La:t="ENVMAP_TYPE_CUBE_UV";break}return t}function $M(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Js:t="ENVMAP_MODE_REFRACTION";break}return t}function ZM(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case vh:t="ENVMAP_BLENDING_MULTIPLY";break;case O0:t="ENVMAP_BLENDING_MIX";break;case k0:t="ENVMAP_BLENDING_ADD";break}return t}function JM(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function QM(s,t,e,n){const i=s.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=YM(e),l=jM(e),h=$M(e),u=ZM(e),d=JM(e),f=HM(e),m=zM(r),_=i.createProgram();let g,p,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Ir).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Ir).join(`
`),p.length>0&&(p+=`
`)):(g=[fd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ir).join(`
`),p=[fd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Gi?"#define TONE_MAPPING":"",e.toneMapping!==Gi?Qt.tonemapping_pars_fragment:"",e.toneMapping!==Gi?kM("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Qt.colorspace_pars_fragment,OM("linearToOutputTexel",e.outputColorSpace),BM(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ir).join(`
`)),o=Jl(o),o=hd(o,e),o=ud(o,e),a=Jl(a),a=hd(a,e),a=ud(a,e),o=dd(o),a=dd(a),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",e.glslVersion===Eu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Eu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const y=M+g+o,x=M+p+a,I=ad(i,i.VERTEX_SHADER,y),w=ad(i,i.FRAGMENT_SHADER,x);i.attachShader(_,I),i.attachShader(_,w),e.index0AttributeName!==void 0?i.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function R(D){if(s.debug.checkShaderErrors){const z=i.getProgramInfoLog(_).trim(),F=i.getShaderInfoLog(I).trim(),W=i.getShaderInfoLog(w).trim();let K=!0,Y=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(K=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,_,I,w);else{const Z=ld(i,I,"vertex"),H=ld(i,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+z+`
`+Z+`
`+H)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(F===""||W==="")&&(Y=!1);Y&&(D.diagnostics={runnable:K,programLog:z,vertexShader:{log:F,prefix:g},fragmentShader:{log:W,prefix:p}})}i.deleteShader(I),i.deleteShader(w),L=new da(i,_),T=VM(i,_)}let L;this.getUniforms=function(){return L===void 0&&R(this),L};let T;this.getAttributes=function(){return T===void 0&&R(this),T};let b=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=i.getProgramParameter(_,DM)),b},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=NM++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=I,this.fragmentShader=w,this}let ty=0;class ey{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new ny(t),e.set(t,n)),n}}class ny{constructor(t){this.id=ty++,this.code=t,this.usedTimes=0}}function iy(s,t,e,n,i,r,o){const a=new Rh,c=new ey,l=new Set,h=[],u=i.logarithmicDepthBuffer,d=i.vertexTextures;let f=i.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(T){return l.add(T),T===0?"uv":`uv${T}`}function g(T,b,D,z,F){const W=z.fog,K=F.geometry,Y=T.isMeshStandardMaterial?z.environment:null,Z=(T.isMeshStandardMaterial?e:t).get(T.envMap||Y),H=Z&&Z.mapping===La?Z.image.height:null,rt=m[T.type];T.precision!==null&&(f=i.getMaxPrecision(T.precision),f!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",f,"instead."));const ht=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,ft=ht!==void 0?ht.length:0;let At=0;K.morphAttributes.position!==void 0&&(At=1),K.morphAttributes.normal!==void 0&&(At=2),K.morphAttributes.color!==void 0&&(At=3);let Pt,V,J,St;if(rt){const re=Kn[rt];Pt=re.vertexShader,V=re.fragmentShader}else Pt=T.vertexShader,V=T.fragmentShader,c.update(T),J=c.getVertexShaderID(T),St=c.getFragmentShaderID(T);const st=s.getRenderTarget(),Lt=s.state.buffers.depth.getReversed(),Ht=F.isInstancedMesh===!0,It=F.isBatchedMesh===!0,Xt=!!T.map,tt=!!T.matcap,ut=!!Z,C=!!T.aoMap,ot=!!T.lightMap,et=!!T.bumpMap,dt=!!T.normalMap,lt=!!T.displacementMap,Ct=!!T.emissiveMap,_t=!!T.metalnessMap,E=!!T.roughnessMap,S=T.anisotropy>0,B=T.clearcoat>0,G=T.dispersion>0,Q=T.iridescence>0,j=T.sheen>0,vt=T.transmission>0,ct=S&&!!T.anisotropyMap,xt=B&&!!T.clearcoatMap,kt=B&&!!T.clearcoatNormalMap,at=B&&!!T.clearcoatRoughnessMap,wt=Q&&!!T.iridescenceMap,Tt=Q&&!!T.iridescenceThicknessMap,zt=j&&!!T.sheenColorMap,Et=j&&!!T.sheenRoughnessMap,te=!!T.specularMap,qt=!!T.specularColorMap,ie=!!T.specularIntensityMap,N=vt&&!!T.transmissionMap,mt=vt&&!!T.thicknessMap,$=!!T.gradientMap,it=!!T.alphaMap,Mt=T.alphaTest>0,bt=!!T.alphaHash,Wt=!!T.extensions;let _e=Gi;T.toneMapped&&(st===null||st.isXRRenderTarget===!0)&&(_e=s.toneMapping);const Ne={shaderID:rt,shaderType:T.type,shaderName:T.name,vertexShader:Pt,fragmentShader:V,defines:T.defines,customVertexShaderID:J,customFragmentShaderID:St,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:f,batching:It,batchingColor:It&&F._colorsTexture!==null,instancing:Ht,instancingColor:Ht&&F.instanceColor!==null,instancingMorph:Ht&&F.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:st===null?s.outputColorSpace:st.isXRRenderTarget===!0?st.texture.colorSpace:Qe,alphaToCoverage:!!T.alphaToCoverage,map:Xt,matcap:tt,envMap:ut,envMapMode:ut&&Z.mapping,envMapCubeUVHeight:H,aoMap:C,lightMap:ot,bumpMap:et,normalMap:dt,displacementMap:d&&lt,emissiveMap:Ct,normalMapObjectSpace:dt&&T.normalMapType===j0,normalMapTangentSpace:dt&&T.normalMapType===Ah,metalnessMap:_t,roughnessMap:E,anisotropy:S,anisotropyMap:ct,clearcoat:B,clearcoatMap:xt,clearcoatNormalMap:kt,clearcoatRoughnessMap:at,dispersion:G,iridescence:Q,iridescenceMap:wt,iridescenceThicknessMap:Tt,sheen:j,sheenColorMap:zt,sheenRoughnessMap:Et,specularMap:te,specularColorMap:qt,specularIntensityMap:ie,transmission:vt,transmissionMap:N,thicknessMap:mt,gradientMap:$,opaque:T.transparent===!1&&T.blending===Vs&&T.alphaToCoverage===!1,alphaMap:it,alphaTest:Mt,alphaHash:bt,combine:T.combine,mapUv:Xt&&_(T.map.channel),aoMapUv:C&&_(T.aoMap.channel),lightMapUv:ot&&_(T.lightMap.channel),bumpMapUv:et&&_(T.bumpMap.channel),normalMapUv:dt&&_(T.normalMap.channel),displacementMapUv:lt&&_(T.displacementMap.channel),emissiveMapUv:Ct&&_(T.emissiveMap.channel),metalnessMapUv:_t&&_(T.metalnessMap.channel),roughnessMapUv:E&&_(T.roughnessMap.channel),anisotropyMapUv:ct&&_(T.anisotropyMap.channel),clearcoatMapUv:xt&&_(T.clearcoatMap.channel),clearcoatNormalMapUv:kt&&_(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:at&&_(T.clearcoatRoughnessMap.channel),iridescenceMapUv:wt&&_(T.iridescenceMap.channel),iridescenceThicknessMapUv:Tt&&_(T.iridescenceThicknessMap.channel),sheenColorMapUv:zt&&_(T.sheenColorMap.channel),sheenRoughnessMapUv:Et&&_(T.sheenRoughnessMap.channel),specularMapUv:te&&_(T.specularMap.channel),specularColorMapUv:qt&&_(T.specularColorMap.channel),specularIntensityMapUv:ie&&_(T.specularIntensityMap.channel),transmissionMapUv:N&&_(T.transmissionMap.channel),thicknessMapUv:mt&&_(T.thicknessMap.channel),alphaMapUv:it&&_(T.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(dt||S),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!K.attributes.uv&&(Xt||it),fog:!!W,useFog:T.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Lt,skinning:F.isSkinnedMesh===!0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:ft,morphTextureStride:At,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:T.dithering,shadowMapEnabled:s.shadowMap.enabled&&D.length>0,shadowMapType:s.shadowMap.type,toneMapping:_e,decodeVideoTexture:Xt&&T.map.isVideoTexture===!0&&ne.getTransfer(T.map.colorSpace)===me,decodeVideoTextureEmissive:Ct&&T.emissiveMap.isVideoTexture===!0&&ne.getTransfer(T.emissiveMap.colorSpace)===me,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Ge,flipSided:T.side===Ze,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Wt&&T.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Wt&&T.extensions.multiDraw===!0||It)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Ne.vertexUv1s=l.has(1),Ne.vertexUv2s=l.has(2),Ne.vertexUv3s=l.has(3),l.clear(),Ne}function p(T){const b=[];if(T.shaderID?b.push(T.shaderID):(b.push(T.customVertexShaderID),b.push(T.customFragmentShaderID)),T.defines!==void 0)for(const D in T.defines)b.push(D),b.push(T.defines[D]);return T.isRawShaderMaterial===!1&&(M(b,T),y(b,T),b.push(s.outputColorSpace)),b.push(T.customProgramCacheKey),b.join()}function M(T,b){T.push(b.precision),T.push(b.outputColorSpace),T.push(b.envMapMode),T.push(b.envMapCubeUVHeight),T.push(b.mapUv),T.push(b.alphaMapUv),T.push(b.lightMapUv),T.push(b.aoMapUv),T.push(b.bumpMapUv),T.push(b.normalMapUv),T.push(b.displacementMapUv),T.push(b.emissiveMapUv),T.push(b.metalnessMapUv),T.push(b.roughnessMapUv),T.push(b.anisotropyMapUv),T.push(b.clearcoatMapUv),T.push(b.clearcoatNormalMapUv),T.push(b.clearcoatRoughnessMapUv),T.push(b.iridescenceMapUv),T.push(b.iridescenceThicknessMapUv),T.push(b.sheenColorMapUv),T.push(b.sheenRoughnessMapUv),T.push(b.specularMapUv),T.push(b.specularColorMapUv),T.push(b.specularIntensityMapUv),T.push(b.transmissionMapUv),T.push(b.thicknessMapUv),T.push(b.combine),T.push(b.fogExp2),T.push(b.sizeAttenuation),T.push(b.morphTargetsCount),T.push(b.morphAttributeCount),T.push(b.numDirLights),T.push(b.numPointLights),T.push(b.numSpotLights),T.push(b.numSpotLightMaps),T.push(b.numHemiLights),T.push(b.numRectAreaLights),T.push(b.numDirLightShadows),T.push(b.numPointLightShadows),T.push(b.numSpotLightShadows),T.push(b.numSpotLightShadowsWithMaps),T.push(b.numLightProbes),T.push(b.shadowMapType),T.push(b.toneMapping),T.push(b.numClippingPlanes),T.push(b.numClipIntersection),T.push(b.depthPacking)}function y(T,b){a.disableAll(),b.supportsVertexTextures&&a.enable(0),b.instancing&&a.enable(1),b.instancingColor&&a.enable(2),b.instancingMorph&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),b.dispersion&&a.enable(20),b.batchingColor&&a.enable(21),T.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reverseDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),T.push(a.mask)}function x(T){const b=m[T.type];let D;if(b){const z=Kn[b];D=Hg.clone(z.uniforms)}else D=T.uniforms;return D}function I(T,b){let D;for(let z=0,F=h.length;z<F;z++){const W=h[z];if(W.cacheKey===b){D=W,++D.usedTimes;break}}return D===void 0&&(D=new QM(s,b,T,r),h.push(D)),D}function w(T){if(--T.usedTimes===0){const b=h.indexOf(T);h[b]=h[h.length-1],h.pop(),T.destroy()}}function R(T){c.remove(T)}function L(){c.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:x,acquireProgram:I,releaseProgram:w,releaseShaderCache:R,programs:h,dispose:L}}function sy(){let s=new WeakMap;function t(o){return s.has(o)}function e(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,c){s.get(o)[a]=c}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function ry(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function pd(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function md(){const s=[];let t=0;const e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function o(u,d,f,m,_,g){let p=s[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:m,renderOrder:u.renderOrder,z:_,group:g},s[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=m,p.renderOrder=u.renderOrder,p.z=_,p.group=g),t++,p}function a(u,d,f,m,_,g){const p=o(u,d,f,m,_,g);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):e.push(p)}function c(u,d,f,m,_,g){const p=o(u,d,f,m,_,g);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):e.unshift(p)}function l(u,d){e.length>1&&e.sort(u||ry),n.length>1&&n.sort(d||pd),i.length>1&&i.sort(d||pd)}function h(){for(let u=t,d=s.length;u<d;u++){const f=s[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:a,unshift:c,finish:h,sort:l}}function oy(){let s=new WeakMap;function t(n,i){const r=s.get(n);let o;return r===void 0?(o=new md,s.set(n,[o])):i>=r.length?(o=new md,r.push(o)):o=r[i],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function ay(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new P,color:new Nt};break;case"SpotLight":e={position:new P,direction:new P,color:new Nt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new P,color:new Nt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new P,skyColor:new Nt,groundColor:new Nt};break;case"RectAreaLight":e={color:new Nt,position:new P,halfWidth:new P,halfHeight:new P};break}return s[t.id]=e,e}}}function cy(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let ly=0;function hy(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function uy(s){const t=new ay,e=cy(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new P);const i=new P,r=new Gt,o=new Gt;function a(l){let h=0,u=0,d=0;for(let T=0;T<9;T++)n.probe[T].set(0,0,0);let f=0,m=0,_=0,g=0,p=0,M=0,y=0,x=0,I=0,w=0,R=0;l.sort(hy);for(let T=0,b=l.length;T<b;T++){const D=l[T],z=D.color,F=D.intensity,W=D.distance,K=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)h+=z.r*F,u+=z.g*F,d+=z.b*F;else if(D.isLightProbe){for(let Y=0;Y<9;Y++)n.probe[Y].addScaledVector(D.sh.coefficients[Y],F);R++}else if(D.isDirectionalLight){const Y=t.get(D);if(Y.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const Z=D.shadow,H=e.get(D);H.shadowIntensity=Z.intensity,H.shadowBias=Z.bias,H.shadowNormalBias=Z.normalBias,H.shadowRadius=Z.radius,H.shadowMapSize=Z.mapSize,n.directionalShadow[f]=H,n.directionalShadowMap[f]=K,n.directionalShadowMatrix[f]=D.shadow.matrix,M++}n.directional[f]=Y,f++}else if(D.isSpotLight){const Y=t.get(D);Y.position.setFromMatrixPosition(D.matrixWorld),Y.color.copy(z).multiplyScalar(F),Y.distance=W,Y.coneCos=Math.cos(D.angle),Y.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),Y.decay=D.decay,n.spot[_]=Y;const Z=D.shadow;if(D.map&&(n.spotLightMap[I]=D.map,I++,Z.updateMatrices(D),D.castShadow&&w++),n.spotLightMatrix[_]=Z.matrix,D.castShadow){const H=e.get(D);H.shadowIntensity=Z.intensity,H.shadowBias=Z.bias,H.shadowNormalBias=Z.normalBias,H.shadowRadius=Z.radius,H.shadowMapSize=Z.mapSize,n.spotShadow[_]=H,n.spotShadowMap[_]=K,x++}_++}else if(D.isRectAreaLight){const Y=t.get(D);Y.color.copy(z).multiplyScalar(F),Y.halfWidth.set(D.width*.5,0,0),Y.halfHeight.set(0,D.height*.5,0),n.rectArea[g]=Y,g++}else if(D.isPointLight){const Y=t.get(D);if(Y.color.copy(D.color).multiplyScalar(D.intensity),Y.distance=D.distance,Y.decay=D.decay,D.castShadow){const Z=D.shadow,H=e.get(D);H.shadowIntensity=Z.intensity,H.shadowBias=Z.bias,H.shadowNormalBias=Z.normalBias,H.shadowRadius=Z.radius,H.shadowMapSize=Z.mapSize,H.shadowCameraNear=Z.camera.near,H.shadowCameraFar=Z.camera.far,n.pointShadow[m]=H,n.pointShadowMap[m]=K,n.pointShadowMatrix[m]=D.shadow.matrix,y++}n.point[m]=Y,m++}else if(D.isHemisphereLight){const Y=t.get(D);Y.skyColor.copy(D.color).multiplyScalar(F),Y.groundColor.copy(D.groundColor).multiplyScalar(F),n.hemi[p]=Y,p++}}g>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=yt.LTC_FLOAT_1,n.rectAreaLTC2=yt.LTC_FLOAT_2):(n.rectAreaLTC1=yt.LTC_HALF_1,n.rectAreaLTC2=yt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const L=n.hash;(L.directionalLength!==f||L.pointLength!==m||L.spotLength!==_||L.rectAreaLength!==g||L.hemiLength!==p||L.numDirectionalShadows!==M||L.numPointShadows!==y||L.numSpotShadows!==x||L.numSpotMaps!==I||L.numLightProbes!==R)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=g,n.point.length=m,n.hemi.length=p,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=x+I-w,n.spotLightMap.length=I,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=R,L.directionalLength=f,L.pointLength=m,L.spotLength=_,L.rectAreaLength=g,L.hemiLength=p,L.numDirectionalShadows=M,L.numPointShadows=y,L.numSpotShadows=x,L.numSpotMaps=I,L.numLightProbes=R,n.version=ly++)}function c(l,h){let u=0,d=0,f=0,m=0,_=0;const g=h.matrixWorldInverse;for(let p=0,M=l.length;p<M;p++){const y=l[p];if(y.isDirectionalLight){const x=n.directional[u];x.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(g),u++}else if(y.isSpotLight){const x=n.spot[f];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(g),x.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(g),f++}else if(y.isRectAreaLight){const x=n.rectArea[m];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(g),o.identity(),r.copy(y.matrixWorld),r.premultiply(g),o.extractRotation(r),x.halfWidth.set(y.width*.5,0,0),x.halfHeight.set(0,y.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),m++}else if(y.isPointLight){const x=n.point[d];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(g),d++}else if(y.isHemisphereLight){const x=n.hemi[_];x.direction.setFromMatrixPosition(y.matrixWorld),x.direction.transformDirection(g),_++}}}return{setup:a,setupView:c,state:n}}function gd(s){const t=new uy(s),e=[],n=[];function i(h){l.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function c(h){t.setupView(e,h)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function dy(s){let t=new WeakMap;function e(i,r=0){const o=t.get(i);let a;return o===void 0?(a=new gd(s),t.set(i,[a])):r>=o.length?(a=new gd(s),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class fy extends Hn{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=K0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class py extends Hn{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const my=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,gy=`uniform sampler2D shadow_pass;
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
}`;function _y(s,t,e){let n=new Ch;const i=new gt,r=new gt,o=new he,a=new fy({depthPacking:Y0}),c=new py,l={},h=e.maxTextureSize,u={[_i]:Ze,[Ze]:_i,[Ge]:Ge},d=new xi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new gt},radius:{value:4}},vertexShader:my,fragmentShader:gy}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const m=new Te;m.setAttribute("position",new $t(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new ce(m,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ip;let p=this.type;this.render=function(w,R,L){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||w.length===0)return;const T=s.getRenderTarget(),b=s.getActiveCubeFace(),D=s.getActiveMipmapLevel(),z=s.state;z.setBlending(Vi),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const F=p!==ui&&this.type===ui,W=p===ui&&this.type!==ui;for(let K=0,Y=w.length;K<Y;K++){const Z=w[K],H=Z.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;i.copy(H.mapSize);const rt=H.getFrameExtents();if(i.multiply(rt),r.copy(H.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/rt.x),i.x=r.x*rt.x,H.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/rt.y),i.y=r.y*rt.y,H.mapSize.y=r.y)),H.map===null||F===!0||W===!0){const ft=this.type!==ui?{minFilter:Je,magFilter:Je}:{};H.map!==null&&H.map.dispose(),H.map=new ds(i.x,i.y,ft),H.map.texture.name=Z.name+".shadowMap",H.camera.updateProjectionMatrix()}s.setRenderTarget(H.map),s.clear();const ht=H.getViewportCount();for(let ft=0;ft<ht;ft++){const At=H.getViewport(ft);o.set(r.x*At.x,r.y*At.y,r.x*At.z,r.y*At.w),z.viewport(o),H.updateMatrices(Z,ft),n=H.getFrustum(),x(R,L,H.camera,Z,this.type)}H.isPointLightShadow!==!0&&this.type===ui&&M(H,L),H.needsUpdate=!1}p=this.type,g.needsUpdate=!1,s.setRenderTarget(T,b,D)};function M(w,R){const L=t.update(_);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new ds(i.x,i.y)),d.uniforms.shadow_pass.value=w.map.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,s.setRenderTarget(w.mapPass),s.clear(),s.renderBufferDirect(R,null,L,d,_,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,s.setRenderTarget(w.map),s.clear(),s.renderBufferDirect(R,null,L,f,_,null)}function y(w,R,L,T){let b=null;const D=L.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(D!==void 0)b=D;else if(b=L.isPointLight===!0?c:a,s.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const z=b.uuid,F=R.uuid;let W=l[z];W===void 0&&(W={},l[z]=W);let K=W[F];K===void 0&&(K=b.clone(),W[F]=K,R.addEventListener("dispose",I)),b=K}if(b.visible=R.visible,b.wireframe=R.wireframe,T===ui?b.side=R.shadowSide!==null?R.shadowSide:R.side:b.side=R.shadowSide!==null?R.shadowSide:u[R.side],b.alphaMap=R.alphaMap,b.alphaTest=R.alphaTest,b.map=R.map,b.clipShadows=R.clipShadows,b.clippingPlanes=R.clippingPlanes,b.clipIntersection=R.clipIntersection,b.displacementMap=R.displacementMap,b.displacementScale=R.displacementScale,b.displacementBias=R.displacementBias,b.wireframeLinewidth=R.wireframeLinewidth,b.linewidth=R.linewidth,L.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const z=s.properties.get(b);z.light=L}return b}function x(w,R,L,T,b){if(w.visible===!1)return;if(w.layers.test(R.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&b===ui)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,w.matrixWorld);const F=t.update(w),W=w.material;if(Array.isArray(W)){const K=F.groups;for(let Y=0,Z=K.length;Y<Z;Y++){const H=K[Y],rt=W[H.materialIndex];if(rt&&rt.visible){const ht=y(w,rt,T,b);w.onBeforeShadow(s,w,R,L,F,ht,H),s.renderBufferDirect(L,null,F,ht,w,H),w.onAfterShadow(s,w,R,L,F,ht,H)}}}else if(W.visible){const K=y(w,W,T,b);w.onBeforeShadow(s,w,R,L,F,K,null),s.renderBufferDirect(L,null,F,K,w,null),w.onAfterShadow(s,w,R,L,F,K,null)}}const z=w.children;for(let F=0,W=z.length;F<W;F++)x(z[F],R,L,T,b)}function I(w){w.target.removeEventListener("dispose",I);for(const L in l){const T=l[L],b=w.target.uuid;b in T&&(T[b].dispose(),delete T[b])}}}const vy={[ml]:gl,[_l]:Ml,[vl]:yl,[$s]:xl,[gl]:ml,[Ml]:_l,[yl]:vl,[xl]:$s};function xy(s,t){function e(){let N=!1;const mt=new he;let $=null;const it=new he(0,0,0,0);return{setMask:function(Mt){$!==Mt&&!N&&(s.colorMask(Mt,Mt,Mt,Mt),$=Mt)},setLocked:function(Mt){N=Mt},setClear:function(Mt,bt,Wt,_e,Ne){Ne===!0&&(Mt*=_e,bt*=_e,Wt*=_e),mt.set(Mt,bt,Wt,_e),it.equals(mt)===!1&&(s.clearColor(Mt,bt,Wt,_e),it.copy(mt))},reset:function(){N=!1,$=null,it.set(-1,0,0,0)}}}function n(){let N=!1,mt=!1,$=null,it=null,Mt=null;return{setReversed:function(bt){if(mt!==bt){const Wt=t.get("EXT_clip_control");mt?Wt.clipControlEXT(Wt.LOWER_LEFT_EXT,Wt.ZERO_TO_ONE_EXT):Wt.clipControlEXT(Wt.LOWER_LEFT_EXT,Wt.NEGATIVE_ONE_TO_ONE_EXT);const _e=Mt;Mt=null,this.setClear(_e)}mt=bt},getReversed:function(){return mt},setTest:function(bt){bt?st(s.DEPTH_TEST):Lt(s.DEPTH_TEST)},setMask:function(bt){$!==bt&&!N&&(s.depthMask(bt),$=bt)},setFunc:function(bt){if(mt&&(bt=vy[bt]),it!==bt){switch(bt){case ml:s.depthFunc(s.NEVER);break;case gl:s.depthFunc(s.ALWAYS);break;case _l:s.depthFunc(s.LESS);break;case $s:s.depthFunc(s.LEQUAL);break;case vl:s.depthFunc(s.EQUAL);break;case xl:s.depthFunc(s.GEQUAL);break;case Ml:s.depthFunc(s.GREATER);break;case yl:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}it=bt}},setLocked:function(bt){N=bt},setClear:function(bt){Mt!==bt&&(mt&&(bt=1-bt),s.clearDepth(bt),Mt=bt)},reset:function(){N=!1,$=null,it=null,Mt=null,mt=!1}}}function i(){let N=!1,mt=null,$=null,it=null,Mt=null,bt=null,Wt=null,_e=null,Ne=null;return{setTest:function(re){N||(re?st(s.STENCIL_TEST):Lt(s.STENCIL_TEST))},setMask:function(re){mt!==re&&!N&&(s.stencilMask(re),mt=re)},setFunc:function(re,tn,Tn){($!==re||it!==tn||Mt!==Tn)&&(s.stencilFunc(re,tn,Tn),$=re,it=tn,Mt=Tn)},setOp:function(re,tn,Tn){(bt!==re||Wt!==tn||_e!==Tn)&&(s.stencilOp(re,tn,Tn),bt=re,Wt=tn,_e=Tn)},setLocked:function(re){N=re},setClear:function(re){Ne!==re&&(s.clearStencil(re),Ne=re)},reset:function(){N=!1,mt=null,$=null,it=null,Mt=null,bt=null,Wt=null,_e=null,Ne=null}}}const r=new e,o=new n,a=new i,c=new WeakMap,l=new WeakMap;let h={},u={},d=new WeakMap,f=[],m=null,_=!1,g=null,p=null,M=null,y=null,x=null,I=null,w=null,R=new Nt(0,0,0),L=0,T=!1,b=null,D=null,z=null,F=null,W=null;const K=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,Z=0;const H=s.getParameter(s.VERSION);H.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(H)[1]),Y=Z>=1):H.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),Y=Z>=2);let rt=null,ht={};const ft=s.getParameter(s.SCISSOR_BOX),At=s.getParameter(s.VIEWPORT),Pt=new he().fromArray(ft),V=new he().fromArray(At);function J(N,mt,$,it){const Mt=new Uint8Array(4),bt=s.createTexture();s.bindTexture(N,bt),s.texParameteri(N,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(N,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Wt=0;Wt<$;Wt++)N===s.TEXTURE_3D||N===s.TEXTURE_2D_ARRAY?s.texImage3D(mt,0,s.RGBA,1,1,it,0,s.RGBA,s.UNSIGNED_BYTE,Mt):s.texImage2D(mt+Wt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Mt);return bt}const St={};St[s.TEXTURE_2D]=J(s.TEXTURE_2D,s.TEXTURE_2D,1),St[s.TEXTURE_CUBE_MAP]=J(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),St[s.TEXTURE_2D_ARRAY]=J(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),St[s.TEXTURE_3D]=J(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),st(s.DEPTH_TEST),o.setFunc($s),et(!1),dt(gu),st(s.CULL_FACE),C(Vi);function st(N){h[N]!==!0&&(s.enable(N),h[N]=!0)}function Lt(N){h[N]!==!1&&(s.disable(N),h[N]=!1)}function Ht(N,mt){return u[N]!==mt?(s.bindFramebuffer(N,mt),u[N]=mt,N===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=mt),N===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=mt),!0):!1}function It(N,mt){let $=f,it=!1;if(N){$=d.get(mt),$===void 0&&($=[],d.set(mt,$));const Mt=N.textures;if($.length!==Mt.length||$[0]!==s.COLOR_ATTACHMENT0){for(let bt=0,Wt=Mt.length;bt<Wt;bt++)$[bt]=s.COLOR_ATTACHMENT0+bt;$.length=Mt.length,it=!0}}else $[0]!==s.BACK&&($[0]=s.BACK,it=!0);it&&s.drawBuffers($)}function Xt(N){return m!==N?(s.useProgram(N),m=N,!0):!1}const tt={[ss]:s.FUNC_ADD,[M0]:s.FUNC_SUBTRACT,[y0]:s.FUNC_REVERSE_SUBTRACT};tt[b0]=s.MIN,tt[S0]=s.MAX;const ut={[T0]:s.ZERO,[E0]:s.ONE,[A0]:s.SRC_COLOR,[fl]:s.SRC_ALPHA,[I0]:s.SRC_ALPHA_SATURATE,[P0]:s.DST_COLOR,[R0]:s.DST_ALPHA,[w0]:s.ONE_MINUS_SRC_COLOR,[pl]:s.ONE_MINUS_SRC_ALPHA,[L0]:s.ONE_MINUS_DST_COLOR,[C0]:s.ONE_MINUS_DST_ALPHA,[D0]:s.CONSTANT_COLOR,[N0]:s.ONE_MINUS_CONSTANT_COLOR,[F0]:s.CONSTANT_ALPHA,[U0]:s.ONE_MINUS_CONSTANT_ALPHA};function C(N,mt,$,it,Mt,bt,Wt,_e,Ne,re){if(N===Vi){_===!0&&(Lt(s.BLEND),_=!1);return}if(_===!1&&(st(s.BLEND),_=!0),N!==x0){if(N!==g||re!==T){if((p!==ss||x!==ss)&&(s.blendEquation(s.FUNC_ADD),p=ss,x=ss),re)switch(N){case Vs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case _u:s.blendFunc(s.ONE,s.ONE);break;case vu:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case xu:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case Vs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case _u:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case vu:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case xu:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}M=null,y=null,I=null,w=null,R.set(0,0,0),L=0,g=N,T=re}return}Mt=Mt||mt,bt=bt||$,Wt=Wt||it,(mt!==p||Mt!==x)&&(s.blendEquationSeparate(tt[mt],tt[Mt]),p=mt,x=Mt),($!==M||it!==y||bt!==I||Wt!==w)&&(s.blendFuncSeparate(ut[$],ut[it],ut[bt],ut[Wt]),M=$,y=it,I=bt,w=Wt),(_e.equals(R)===!1||Ne!==L)&&(s.blendColor(_e.r,_e.g,_e.b,Ne),R.copy(_e),L=Ne),g=N,T=!1}function ot(N,mt){N.side===Ge?Lt(s.CULL_FACE):st(s.CULL_FACE);let $=N.side===Ze;mt&&($=!$),et($),N.blending===Vs&&N.transparent===!1?C(Vi):C(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),o.setFunc(N.depthFunc),o.setTest(N.depthTest),o.setMask(N.depthWrite),r.setMask(N.colorWrite);const it=N.stencilWrite;a.setTest(it),it&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),Ct(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?st(s.SAMPLE_ALPHA_TO_COVERAGE):Lt(s.SAMPLE_ALPHA_TO_COVERAGE)}function et(N){b!==N&&(N?s.frontFace(s.CW):s.frontFace(s.CCW),b=N)}function dt(N){N!==_0?(st(s.CULL_FACE),N!==D&&(N===gu?s.cullFace(s.BACK):N===v0?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Lt(s.CULL_FACE),D=N}function lt(N){N!==z&&(Y&&s.lineWidth(N),z=N)}function Ct(N,mt,$){N?(st(s.POLYGON_OFFSET_FILL),(F!==mt||W!==$)&&(s.polygonOffset(mt,$),F=mt,W=$)):Lt(s.POLYGON_OFFSET_FILL)}function _t(N){N?st(s.SCISSOR_TEST):Lt(s.SCISSOR_TEST)}function E(N){N===void 0&&(N=s.TEXTURE0+K-1),rt!==N&&(s.activeTexture(N),rt=N)}function S(N,mt,$){$===void 0&&(rt===null?$=s.TEXTURE0+K-1:$=rt);let it=ht[$];it===void 0&&(it={type:void 0,texture:void 0},ht[$]=it),(it.type!==N||it.texture!==mt)&&(rt!==$&&(s.activeTexture($),rt=$),s.bindTexture(N,mt||St[N]),it.type=N,it.texture=mt)}function B(){const N=ht[rt];N!==void 0&&N.type!==void 0&&(s.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function G(){try{s.compressedTexImage2D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Q(){try{s.compressedTexImage3D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function j(){try{s.texSubImage2D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function vt(){try{s.texSubImage3D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ct(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function xt(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function kt(){try{s.texStorage2D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function at(){try{s.texStorage3D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function wt(){try{s.texImage2D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Tt(){try{s.texImage3D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function zt(N){Pt.equals(N)===!1&&(s.scissor(N.x,N.y,N.z,N.w),Pt.copy(N))}function Et(N){V.equals(N)===!1&&(s.viewport(N.x,N.y,N.z,N.w),V.copy(N))}function te(N,mt){let $=l.get(mt);$===void 0&&($=new WeakMap,l.set(mt,$));let it=$.get(N);it===void 0&&(it=s.getUniformBlockIndex(mt,N.name),$.set(N,it))}function qt(N,mt){const it=l.get(mt).get(N);c.get(mt)!==it&&(s.uniformBlockBinding(mt,it,N.__bindingPointIndex),c.set(mt,it))}function ie(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},rt=null,ht={},u={},d=new WeakMap,f=[],m=null,_=!1,g=null,p=null,M=null,y=null,x=null,I=null,w=null,R=new Nt(0,0,0),L=0,T=!1,b=null,D=null,z=null,F=null,W=null,Pt.set(0,0,s.canvas.width,s.canvas.height),V.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:st,disable:Lt,bindFramebuffer:Ht,drawBuffers:It,useProgram:Xt,setBlending:C,setMaterial:ot,setFlipSided:et,setCullFace:dt,setLineWidth:lt,setPolygonOffset:Ct,setScissorTest:_t,activeTexture:E,bindTexture:S,unbindTexture:B,compressedTexImage2D:G,compressedTexImage3D:Q,texImage2D:wt,texImage3D:Tt,updateUBOMapping:te,uniformBlockBinding:qt,texStorage2D:kt,texStorage3D:at,texSubImage2D:j,texSubImage3D:vt,compressedTexSubImage2D:ct,compressedTexSubImage3D:xt,scissor:zt,viewport:Et,reset:ie}}function _d(s,t,e,n){const i=My(n);switch(e){case zp:return s*t;case Gp:return s*t;case Wp:return s*t*2;case bh:return s*t/i.components*i.byteLength;case Sh:return s*t/i.components*i.byteLength;case Xp:return s*t*2/i.components*i.byteLength;case Th:return s*t*2/i.components*i.byteLength;case Vp:return s*t*3/i.components*i.byteLength;case bn:return s*t*4/i.components*i.byteLength;case Eh:return s*t*4/i.components*i.byteLength;case aa:case ca:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case la:case ha:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case El:case wl:return Math.max(s,16)*Math.max(t,8)/4;case Tl:case Al:return Math.max(s,8)*Math.max(t,8)/2;case Rl:case Cl:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Pl:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Ll:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Il:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case Dl:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Nl:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case Fl:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Ul:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Ol:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case kl:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Bl:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Hl:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case zl:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case Vl:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case Gl:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case Wl:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case ua:case Xl:case ql:return Math.ceil(s/4)*Math.ceil(t/4)*16;case qp:case Kl:return Math.ceil(s/4)*Math.ceil(t/4)*8;case Yl:case jl:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function My(s){switch(s){case vi:case kp:return{byteLength:1,components:1};case Gr:case Bp:case to:return{byteLength:2,components:1};case Mh:case yh:return{byteLength:2,components:4};case us:case xh:case kn:return{byteLength:4,components:1};case Hp:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function yy(s,t,e,n,i,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new gt,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(E,S){return f?new OffscreenCanvas(E,S):qr("canvas")}function _(E,S,B){let G=1;const Q=_t(E);if((Q.width>B||Q.height>B)&&(G=B/Math.max(Q.width,Q.height)),G<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const j=Math.floor(G*Q.width),vt=Math.floor(G*Q.height);u===void 0&&(u=m(j,vt));const ct=S?m(j,vt):u;return ct.width=j,ct.height=vt,ct.getContext("2d").drawImage(E,0,0,j,vt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+j+"x"+vt+")."),ct}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),E;return E}function g(E){return E.generateMipmaps}function p(E){s.generateMipmap(E)}function M(E){return E.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?s.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function y(E,S,B,G,Q=!1){if(E!==null){if(s[E]!==void 0)return s[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let j=S;if(S===s.RED&&(B===s.FLOAT&&(j=s.R32F),B===s.HALF_FLOAT&&(j=s.R16F),B===s.UNSIGNED_BYTE&&(j=s.R8)),S===s.RED_INTEGER&&(B===s.UNSIGNED_BYTE&&(j=s.R8UI),B===s.UNSIGNED_SHORT&&(j=s.R16UI),B===s.UNSIGNED_INT&&(j=s.R32UI),B===s.BYTE&&(j=s.R8I),B===s.SHORT&&(j=s.R16I),B===s.INT&&(j=s.R32I)),S===s.RG&&(B===s.FLOAT&&(j=s.RG32F),B===s.HALF_FLOAT&&(j=s.RG16F),B===s.UNSIGNED_BYTE&&(j=s.RG8)),S===s.RG_INTEGER&&(B===s.UNSIGNED_BYTE&&(j=s.RG8UI),B===s.UNSIGNED_SHORT&&(j=s.RG16UI),B===s.UNSIGNED_INT&&(j=s.RG32UI),B===s.BYTE&&(j=s.RG8I),B===s.SHORT&&(j=s.RG16I),B===s.INT&&(j=s.RG32I)),S===s.RGB_INTEGER&&(B===s.UNSIGNED_BYTE&&(j=s.RGB8UI),B===s.UNSIGNED_SHORT&&(j=s.RGB16UI),B===s.UNSIGNED_INT&&(j=s.RGB32UI),B===s.BYTE&&(j=s.RGB8I),B===s.SHORT&&(j=s.RGB16I),B===s.INT&&(j=s.RGB32I)),S===s.RGBA_INTEGER&&(B===s.UNSIGNED_BYTE&&(j=s.RGBA8UI),B===s.UNSIGNED_SHORT&&(j=s.RGBA16UI),B===s.UNSIGNED_INT&&(j=s.RGBA32UI),B===s.BYTE&&(j=s.RGBA8I),B===s.SHORT&&(j=s.RGBA16I),B===s.INT&&(j=s.RGBA32I)),S===s.RGB&&B===s.UNSIGNED_INT_5_9_9_9_REV&&(j=s.RGB9_E5),S===s.RGBA){const vt=Q?Ia:ne.getTransfer(G);B===s.FLOAT&&(j=s.RGBA32F),B===s.HALF_FLOAT&&(j=s.RGBA16F),B===s.UNSIGNED_BYTE&&(j=vt===me?s.SRGB8_ALPHA8:s.RGBA8),B===s.UNSIGNED_SHORT_4_4_4_4&&(j=s.RGBA4),B===s.UNSIGNED_SHORT_5_5_5_1&&(j=s.RGB5_A1)}return(j===s.R16F||j===s.R32F||j===s.RG16F||j===s.RG32F||j===s.RGBA16F||j===s.RGBA32F)&&t.get("EXT_color_buffer_float"),j}function x(E,S){let B;return E?S===null||S===us||S===Qs?B=s.DEPTH24_STENCIL8:S===kn?B=s.DEPTH32F_STENCIL8:S===Gr&&(B=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===us||S===Qs?B=s.DEPTH_COMPONENT24:S===kn?B=s.DEPTH_COMPONENT32F:S===Gr&&(B=s.DEPTH_COMPONENT16),B}function I(E,S){return g(E)===!0||E.isFramebufferTexture&&E.minFilter!==Je&&E.minFilter!==an?Math.log2(Math.max(S.width,S.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?S.mipmaps.length:1}function w(E){const S=E.target;S.removeEventListener("dispose",w),L(S),S.isVideoTexture&&h.delete(S)}function R(E){const S=E.target;S.removeEventListener("dispose",R),b(S)}function L(E){const S=n.get(E);if(S.__webglInit===void 0)return;const B=E.source,G=d.get(B);if(G){const Q=G[S.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&T(E),Object.keys(G).length===0&&d.delete(B)}n.remove(E)}function T(E){const S=n.get(E);s.deleteTexture(S.__webglTexture);const B=E.source,G=d.get(B);delete G[S.__cacheKey],o.memory.textures--}function b(E){const S=n.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),n.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let G=0;G<6;G++){if(Array.isArray(S.__webglFramebuffer[G]))for(let Q=0;Q<S.__webglFramebuffer[G].length;Q++)s.deleteFramebuffer(S.__webglFramebuffer[G][Q]);else s.deleteFramebuffer(S.__webglFramebuffer[G]);S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer[G])}else{if(Array.isArray(S.__webglFramebuffer))for(let G=0;G<S.__webglFramebuffer.length;G++)s.deleteFramebuffer(S.__webglFramebuffer[G]);else s.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&s.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let G=0;G<S.__webglColorRenderbuffer.length;G++)S.__webglColorRenderbuffer[G]&&s.deleteRenderbuffer(S.__webglColorRenderbuffer[G]);S.__webglDepthRenderbuffer&&s.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const B=E.textures;for(let G=0,Q=B.length;G<Q;G++){const j=n.get(B[G]);j.__webglTexture&&(s.deleteTexture(j.__webglTexture),o.memory.textures--),n.remove(B[G])}n.remove(E)}let D=0;function z(){D=0}function F(){const E=D;return E>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+i.maxTextures),D+=1,E}function W(E){const S=[];return S.push(E.wrapS),S.push(E.wrapT),S.push(E.wrapR||0),S.push(E.magFilter),S.push(E.minFilter),S.push(E.anisotropy),S.push(E.internalFormat),S.push(E.format),S.push(E.type),S.push(E.generateMipmaps),S.push(E.premultiplyAlpha),S.push(E.flipY),S.push(E.unpackAlignment),S.push(E.colorSpace),S.join()}function K(E,S){const B=n.get(E);if(E.isVideoTexture&&lt(E),E.isRenderTargetTexture===!1&&E.version>0&&B.__version!==E.version){const G=E.image;if(G===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(G.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{V(B,E,S);return}}e.bindTexture(s.TEXTURE_2D,B.__webglTexture,s.TEXTURE0+S)}function Y(E,S){const B=n.get(E);if(E.version>0&&B.__version!==E.version){V(B,E,S);return}e.bindTexture(s.TEXTURE_2D_ARRAY,B.__webglTexture,s.TEXTURE0+S)}function Z(E,S){const B=n.get(E);if(E.version>0&&B.__version!==E.version){V(B,E,S);return}e.bindTexture(s.TEXTURE_3D,B.__webglTexture,s.TEXTURE0+S)}function H(E,S){const B=n.get(E);if(E.version>0&&B.__version!==E.version){J(B,E,S);return}e.bindTexture(s.TEXTURE_CUBE_MAP,B.__webglTexture,s.TEXTURE0+S)}const rt={[hs]:s.REPEAT,[Bi]:s.CLAMP_TO_EDGE,[Ma]:s.MIRRORED_REPEAT},ht={[Je]:s.NEAREST,[Op]:s.NEAREST_MIPMAP_NEAREST,[Pr]:s.NEAREST_MIPMAP_LINEAR,[an]:s.LINEAR,[oa]:s.LINEAR_MIPMAP_NEAREST,[jn]:s.LINEAR_MIPMAP_LINEAR},ft={[$0]:s.NEVER,[ng]:s.ALWAYS,[Z0]:s.LESS,[Yp]:s.LEQUAL,[J0]:s.EQUAL,[eg]:s.GEQUAL,[Q0]:s.GREATER,[tg]:s.NOTEQUAL};function At(E,S){if(S.type===kn&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===an||S.magFilter===oa||S.magFilter===Pr||S.magFilter===jn||S.minFilter===an||S.minFilter===oa||S.minFilter===Pr||S.minFilter===jn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(E,s.TEXTURE_WRAP_S,rt[S.wrapS]),s.texParameteri(E,s.TEXTURE_WRAP_T,rt[S.wrapT]),(E===s.TEXTURE_3D||E===s.TEXTURE_2D_ARRAY)&&s.texParameteri(E,s.TEXTURE_WRAP_R,rt[S.wrapR]),s.texParameteri(E,s.TEXTURE_MAG_FILTER,ht[S.magFilter]),s.texParameteri(E,s.TEXTURE_MIN_FILTER,ht[S.minFilter]),S.compareFunction&&(s.texParameteri(E,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(E,s.TEXTURE_COMPARE_FUNC,ft[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Je||S.minFilter!==Pr&&S.minFilter!==jn||S.type===kn&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const B=t.get("EXT_texture_filter_anisotropic");s.texParameterf(E,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function Pt(E,S){let B=!1;E.__webglInit===void 0&&(E.__webglInit=!0,S.addEventListener("dispose",w));const G=S.source;let Q=d.get(G);Q===void 0&&(Q={},d.set(G,Q));const j=W(S);if(j!==E.__cacheKey){Q[j]===void 0&&(Q[j]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,B=!0),Q[j].usedTimes++;const vt=Q[E.__cacheKey];vt!==void 0&&(Q[E.__cacheKey].usedTimes--,vt.usedTimes===0&&T(S)),E.__cacheKey=j,E.__webglTexture=Q[j].texture}return B}function V(E,S,B){let G=s.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(G=s.TEXTURE_2D_ARRAY),S.isData3DTexture&&(G=s.TEXTURE_3D);const Q=Pt(E,S),j=S.source;e.bindTexture(G,E.__webglTexture,s.TEXTURE0+B);const vt=n.get(j);if(j.version!==vt.__version||Q===!0){e.activeTexture(s.TEXTURE0+B);const ct=ne.getPrimaries(ne.workingColorSpace),xt=S.colorSpace===Oi?null:ne.getPrimaries(S.colorSpace),kt=S.colorSpace===Oi||ct===xt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,kt);let at=_(S.image,!1,i.maxTextureSize);at=Ct(S,at);const wt=r.convert(S.format,S.colorSpace),Tt=r.convert(S.type);let zt=y(S.internalFormat,wt,Tt,S.colorSpace,S.isVideoTexture);At(G,S);let Et;const te=S.mipmaps,qt=S.isVideoTexture!==!0,ie=vt.__version===void 0||Q===!0,N=j.dataReady,mt=I(S,at);if(S.isDepthTexture)zt=x(S.format===tr,S.type),ie&&(qt?e.texStorage2D(s.TEXTURE_2D,1,zt,at.width,at.height):e.texImage2D(s.TEXTURE_2D,0,zt,at.width,at.height,0,wt,Tt,null));else if(S.isDataTexture)if(te.length>0){qt&&ie&&e.texStorage2D(s.TEXTURE_2D,mt,zt,te[0].width,te[0].height);for(let $=0,it=te.length;$<it;$++)Et=te[$],qt?N&&e.texSubImage2D(s.TEXTURE_2D,$,0,0,Et.width,Et.height,wt,Tt,Et.data):e.texImage2D(s.TEXTURE_2D,$,zt,Et.width,Et.height,0,wt,Tt,Et.data);S.generateMipmaps=!1}else qt?(ie&&e.texStorage2D(s.TEXTURE_2D,mt,zt,at.width,at.height),N&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,at.width,at.height,wt,Tt,at.data)):e.texImage2D(s.TEXTURE_2D,0,zt,at.width,at.height,0,wt,Tt,at.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){qt&&ie&&e.texStorage3D(s.TEXTURE_2D_ARRAY,mt,zt,te[0].width,te[0].height,at.depth);for(let $=0,it=te.length;$<it;$++)if(Et=te[$],S.format!==bn)if(wt!==null)if(qt){if(N)if(S.layerUpdates.size>0){const Mt=_d(Et.width,Et.height,S.format,S.type);for(const bt of S.layerUpdates){const Wt=Et.data.subarray(bt*Mt/Et.data.BYTES_PER_ELEMENT,(bt+1)*Mt/Et.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,$,0,0,bt,Et.width,Et.height,1,wt,Wt)}S.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,$,0,0,0,Et.width,Et.height,at.depth,wt,Et.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,$,zt,Et.width,Et.height,at.depth,0,Et.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else qt?N&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,$,0,0,0,Et.width,Et.height,at.depth,wt,Tt,Et.data):e.texImage3D(s.TEXTURE_2D_ARRAY,$,zt,Et.width,Et.height,at.depth,0,wt,Tt,Et.data)}else{qt&&ie&&e.texStorage2D(s.TEXTURE_2D,mt,zt,te[0].width,te[0].height);for(let $=0,it=te.length;$<it;$++)Et=te[$],S.format!==bn?wt!==null?qt?N&&e.compressedTexSubImage2D(s.TEXTURE_2D,$,0,0,Et.width,Et.height,wt,Et.data):e.compressedTexImage2D(s.TEXTURE_2D,$,zt,Et.width,Et.height,0,Et.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qt?N&&e.texSubImage2D(s.TEXTURE_2D,$,0,0,Et.width,Et.height,wt,Tt,Et.data):e.texImage2D(s.TEXTURE_2D,$,zt,Et.width,Et.height,0,wt,Tt,Et.data)}else if(S.isDataArrayTexture)if(qt){if(ie&&e.texStorage3D(s.TEXTURE_2D_ARRAY,mt,zt,at.width,at.height,at.depth),N)if(S.layerUpdates.size>0){const $=_d(at.width,at.height,S.format,S.type);for(const it of S.layerUpdates){const Mt=at.data.subarray(it*$/at.data.BYTES_PER_ELEMENT,(it+1)*$/at.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,it,at.width,at.height,1,wt,Tt,Mt)}S.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,at.width,at.height,at.depth,wt,Tt,at.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,zt,at.width,at.height,at.depth,0,wt,Tt,at.data);else if(S.isData3DTexture)qt?(ie&&e.texStorage3D(s.TEXTURE_3D,mt,zt,at.width,at.height,at.depth),N&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,at.width,at.height,at.depth,wt,Tt,at.data)):e.texImage3D(s.TEXTURE_3D,0,zt,at.width,at.height,at.depth,0,wt,Tt,at.data);else if(S.isFramebufferTexture){if(ie)if(qt)e.texStorage2D(s.TEXTURE_2D,mt,zt,at.width,at.height);else{let $=at.width,it=at.height;for(let Mt=0;Mt<mt;Mt++)e.texImage2D(s.TEXTURE_2D,Mt,zt,$,it,0,wt,Tt,null),$>>=1,it>>=1}}else if(te.length>0){if(qt&&ie){const $=_t(te[0]);e.texStorage2D(s.TEXTURE_2D,mt,zt,$.width,$.height)}for(let $=0,it=te.length;$<it;$++)Et=te[$],qt?N&&e.texSubImage2D(s.TEXTURE_2D,$,0,0,wt,Tt,Et):e.texImage2D(s.TEXTURE_2D,$,zt,wt,Tt,Et);S.generateMipmaps=!1}else if(qt){if(ie){const $=_t(at);e.texStorage2D(s.TEXTURE_2D,mt,zt,$.width,$.height)}N&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,wt,Tt,at)}else e.texImage2D(s.TEXTURE_2D,0,zt,wt,Tt,at);g(S)&&p(G),vt.__version=j.version,S.onUpdate&&S.onUpdate(S)}E.__version=S.version}function J(E,S,B){if(S.image.length!==6)return;const G=Pt(E,S),Q=S.source;e.bindTexture(s.TEXTURE_CUBE_MAP,E.__webglTexture,s.TEXTURE0+B);const j=n.get(Q);if(Q.version!==j.__version||G===!0){e.activeTexture(s.TEXTURE0+B);const vt=ne.getPrimaries(ne.workingColorSpace),ct=S.colorSpace===Oi?null:ne.getPrimaries(S.colorSpace),xt=S.colorSpace===Oi||vt===ct?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,xt);const kt=S.isCompressedTexture||S.image[0].isCompressedTexture,at=S.image[0]&&S.image[0].isDataTexture,wt=[];for(let it=0;it<6;it++)!kt&&!at?wt[it]=_(S.image[it],!0,i.maxCubemapSize):wt[it]=at?S.image[it].image:S.image[it],wt[it]=Ct(S,wt[it]);const Tt=wt[0],zt=r.convert(S.format,S.colorSpace),Et=r.convert(S.type),te=y(S.internalFormat,zt,Et,S.colorSpace),qt=S.isVideoTexture!==!0,ie=j.__version===void 0||G===!0,N=Q.dataReady;let mt=I(S,Tt);At(s.TEXTURE_CUBE_MAP,S);let $;if(kt){qt&&ie&&e.texStorage2D(s.TEXTURE_CUBE_MAP,mt,te,Tt.width,Tt.height);for(let it=0;it<6;it++){$=wt[it].mipmaps;for(let Mt=0;Mt<$.length;Mt++){const bt=$[Mt];S.format!==bn?zt!==null?qt?N&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,Mt,0,0,bt.width,bt.height,zt,bt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,Mt,te,bt.width,bt.height,0,bt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):qt?N&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,Mt,0,0,bt.width,bt.height,zt,Et,bt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,Mt,te,bt.width,bt.height,0,zt,Et,bt.data)}}}else{if($=S.mipmaps,qt&&ie){$.length>0&&mt++;const it=_t(wt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,mt,te,it.width,it.height)}for(let it=0;it<6;it++)if(at){qt?N&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,wt[it].width,wt[it].height,zt,Et,wt[it].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,te,wt[it].width,wt[it].height,0,zt,Et,wt[it].data);for(let Mt=0;Mt<$.length;Mt++){const Wt=$[Mt].image[it].image;qt?N&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,Mt+1,0,0,Wt.width,Wt.height,zt,Et,Wt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,Mt+1,te,Wt.width,Wt.height,0,zt,Et,Wt.data)}}else{qt?N&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,zt,Et,wt[it]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,te,zt,Et,wt[it]);for(let Mt=0;Mt<$.length;Mt++){const bt=$[Mt];qt?N&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,Mt+1,0,0,zt,Et,bt.image[it]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,Mt+1,te,zt,Et,bt.image[it])}}}g(S)&&p(s.TEXTURE_CUBE_MAP),j.__version=Q.version,S.onUpdate&&S.onUpdate(S)}E.__version=S.version}function St(E,S,B,G,Q,j){const vt=r.convert(B.format,B.colorSpace),ct=r.convert(B.type),xt=y(B.internalFormat,vt,ct,B.colorSpace),kt=n.get(S),at=n.get(B);if(at.__renderTarget=S,!kt.__hasExternalTextures){const wt=Math.max(1,S.width>>j),Tt=Math.max(1,S.height>>j);Q===s.TEXTURE_3D||Q===s.TEXTURE_2D_ARRAY?e.texImage3D(Q,j,xt,wt,Tt,S.depth,0,vt,ct,null):e.texImage2D(Q,j,xt,wt,Tt,0,vt,ct,null)}e.bindFramebuffer(s.FRAMEBUFFER,E),dt(S)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,G,Q,at.__webglTexture,0,et(S)):(Q===s.TEXTURE_2D||Q>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,G,Q,at.__webglTexture,j),e.bindFramebuffer(s.FRAMEBUFFER,null)}function st(E,S,B){if(s.bindRenderbuffer(s.RENDERBUFFER,E),S.depthBuffer){const G=S.depthTexture,Q=G&&G.isDepthTexture?G.type:null,j=x(S.stencilBuffer,Q),vt=S.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ct=et(S);dt(S)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ct,j,S.width,S.height):B?s.renderbufferStorageMultisample(s.RENDERBUFFER,ct,j,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,j,S.width,S.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,vt,s.RENDERBUFFER,E)}else{const G=S.textures;for(let Q=0;Q<G.length;Q++){const j=G[Q],vt=r.convert(j.format,j.colorSpace),ct=r.convert(j.type),xt=y(j.internalFormat,vt,ct,j.colorSpace),kt=et(S);B&&dt(S)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,kt,xt,S.width,S.height):dt(S)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,kt,xt,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,xt,S.width,S.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Lt(E,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,E),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const G=n.get(S.depthTexture);G.__renderTarget=S,(!G.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),K(S.depthTexture,0);const Q=G.__webglTexture,j=et(S);if(S.depthTexture.format===Gs)dt(S)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Q,0,j):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Q,0);else if(S.depthTexture.format===tr)dt(S)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Q,0,j):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function Ht(E){const S=n.get(E),B=E.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==E.depthTexture){const G=E.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),G){const Q=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,G.removeEventListener("dispose",Q)};G.addEventListener("dispose",Q),S.__depthDisposeCallback=Q}S.__boundDepthTexture=G}if(E.depthTexture&&!S.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");Lt(S.__webglFramebuffer,E)}else if(B){S.__webglDepthbuffer=[];for(let G=0;G<6;G++)if(e.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer[G]),S.__webglDepthbuffer[G]===void 0)S.__webglDepthbuffer[G]=s.createRenderbuffer(),st(S.__webglDepthbuffer[G],E,!1);else{const Q=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,j=S.__webglDepthbuffer[G];s.bindRenderbuffer(s.RENDERBUFFER,j),s.framebufferRenderbuffer(s.FRAMEBUFFER,Q,s.RENDERBUFFER,j)}}else if(e.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=s.createRenderbuffer(),st(S.__webglDepthbuffer,E,!1);else{const G=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Q=S.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Q),s.framebufferRenderbuffer(s.FRAMEBUFFER,G,s.RENDERBUFFER,Q)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function It(E,S,B){const G=n.get(E);S!==void 0&&St(G.__webglFramebuffer,E,E.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),B!==void 0&&Ht(E)}function Xt(E){const S=E.texture,B=n.get(E),G=n.get(S);E.addEventListener("dispose",R);const Q=E.textures,j=E.isWebGLCubeRenderTarget===!0,vt=Q.length>1;if(vt||(G.__webglTexture===void 0&&(G.__webglTexture=s.createTexture()),G.__version=S.version,o.memory.textures++),j){B.__webglFramebuffer=[];for(let ct=0;ct<6;ct++)if(S.mipmaps&&S.mipmaps.length>0){B.__webglFramebuffer[ct]=[];for(let xt=0;xt<S.mipmaps.length;xt++)B.__webglFramebuffer[ct][xt]=s.createFramebuffer()}else B.__webglFramebuffer[ct]=s.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){B.__webglFramebuffer=[];for(let ct=0;ct<S.mipmaps.length;ct++)B.__webglFramebuffer[ct]=s.createFramebuffer()}else B.__webglFramebuffer=s.createFramebuffer();if(vt)for(let ct=0,xt=Q.length;ct<xt;ct++){const kt=n.get(Q[ct]);kt.__webglTexture===void 0&&(kt.__webglTexture=s.createTexture(),o.memory.textures++)}if(E.samples>0&&dt(E)===!1){B.__webglMultisampledFramebuffer=s.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let ct=0;ct<Q.length;ct++){const xt=Q[ct];B.__webglColorRenderbuffer[ct]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,B.__webglColorRenderbuffer[ct]);const kt=r.convert(xt.format,xt.colorSpace),at=r.convert(xt.type),wt=y(xt.internalFormat,kt,at,xt.colorSpace,E.isXRRenderTarget===!0),Tt=et(E);s.renderbufferStorageMultisample(s.RENDERBUFFER,Tt,wt,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ct,s.RENDERBUFFER,B.__webglColorRenderbuffer[ct])}s.bindRenderbuffer(s.RENDERBUFFER,null),E.depthBuffer&&(B.__webglDepthRenderbuffer=s.createRenderbuffer(),st(B.__webglDepthRenderbuffer,E,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(j){e.bindTexture(s.TEXTURE_CUBE_MAP,G.__webglTexture),At(s.TEXTURE_CUBE_MAP,S);for(let ct=0;ct<6;ct++)if(S.mipmaps&&S.mipmaps.length>0)for(let xt=0;xt<S.mipmaps.length;xt++)St(B.__webglFramebuffer[ct][xt],E,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ct,xt);else St(B.__webglFramebuffer[ct],E,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0);g(S)&&p(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(vt){for(let ct=0,xt=Q.length;ct<xt;ct++){const kt=Q[ct],at=n.get(kt);e.bindTexture(s.TEXTURE_2D,at.__webglTexture),At(s.TEXTURE_2D,kt),St(B.__webglFramebuffer,E,kt,s.COLOR_ATTACHMENT0+ct,s.TEXTURE_2D,0),g(kt)&&p(s.TEXTURE_2D)}e.unbindTexture()}else{let ct=s.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(ct=E.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(ct,G.__webglTexture),At(ct,S),S.mipmaps&&S.mipmaps.length>0)for(let xt=0;xt<S.mipmaps.length;xt++)St(B.__webglFramebuffer[xt],E,S,s.COLOR_ATTACHMENT0,ct,xt);else St(B.__webglFramebuffer,E,S,s.COLOR_ATTACHMENT0,ct,0);g(S)&&p(ct),e.unbindTexture()}E.depthBuffer&&Ht(E)}function tt(E){const S=E.textures;for(let B=0,G=S.length;B<G;B++){const Q=S[B];if(g(Q)){const j=M(E),vt=n.get(Q).__webglTexture;e.bindTexture(j,vt),p(j),e.unbindTexture()}}}const ut=[],C=[];function ot(E){if(E.samples>0){if(dt(E)===!1){const S=E.textures,B=E.width,G=E.height;let Q=s.COLOR_BUFFER_BIT;const j=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,vt=n.get(E),ct=S.length>1;if(ct)for(let xt=0;xt<S.length;xt++)e.bindFramebuffer(s.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+xt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,vt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+xt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,vt.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,vt.__webglFramebuffer);for(let xt=0;xt<S.length;xt++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(Q|=s.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(Q|=s.STENCIL_BUFFER_BIT)),ct){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,vt.__webglColorRenderbuffer[xt]);const kt=n.get(S[xt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,kt,0)}s.blitFramebuffer(0,0,B,G,0,0,B,G,Q,s.NEAREST),c===!0&&(ut.length=0,C.length=0,ut.push(s.COLOR_ATTACHMENT0+xt),E.depthBuffer&&E.resolveDepthBuffer===!1&&(ut.push(j),C.push(j),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,C)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ut))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ct)for(let xt=0;xt<S.length;xt++){e.bindFramebuffer(s.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+xt,s.RENDERBUFFER,vt.__webglColorRenderbuffer[xt]);const kt=n.get(S[xt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,vt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+xt,s.TEXTURE_2D,kt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,vt.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&c){const S=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[S])}}}function et(E){return Math.min(i.maxSamples,E.samples)}function dt(E){const S=n.get(E);return E.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function lt(E){const S=o.render.frame;h.get(E)!==S&&(h.set(E,S),E.update())}function Ct(E,S){const B=E.colorSpace,G=E.format,Q=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||B!==Qe&&B!==Oi&&(ne.getTransfer(B)===me?(G!==bn||Q!==vi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),S}function _t(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(l.width=E.naturalWidth||E.width,l.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(l.width=E.displayWidth,l.height=E.displayHeight):(l.width=E.width,l.height=E.height),l}this.allocateTextureUnit=F,this.resetTextureUnits=z,this.setTexture2D=K,this.setTexture2DArray=Y,this.setTexture3D=Z,this.setTextureCube=H,this.rebindTextures=It,this.setupRenderTarget=Xt,this.updateRenderTargetMipmap=tt,this.updateMultisampleRenderTarget=ot,this.setupDepthRenderbuffer=Ht,this.setupFrameBufferTexture=St,this.useMultisampledRTT=dt}function by(s,t){function e(n,i=Oi){let r;const o=ne.getTransfer(i);if(n===vi)return s.UNSIGNED_BYTE;if(n===Mh)return s.UNSIGNED_SHORT_4_4_4_4;if(n===yh)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Hp)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===kp)return s.BYTE;if(n===Bp)return s.SHORT;if(n===Gr)return s.UNSIGNED_SHORT;if(n===xh)return s.INT;if(n===us)return s.UNSIGNED_INT;if(n===kn)return s.FLOAT;if(n===to)return s.HALF_FLOAT;if(n===zp)return s.ALPHA;if(n===Vp)return s.RGB;if(n===bn)return s.RGBA;if(n===Gp)return s.LUMINANCE;if(n===Wp)return s.LUMINANCE_ALPHA;if(n===Gs)return s.DEPTH_COMPONENT;if(n===tr)return s.DEPTH_STENCIL;if(n===bh)return s.RED;if(n===Sh)return s.RED_INTEGER;if(n===Xp)return s.RG;if(n===Th)return s.RG_INTEGER;if(n===Eh)return s.RGBA_INTEGER;if(n===aa||n===ca||n===la||n===ha)if(o===me)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===aa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ca)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===la)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ha)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===aa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ca)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===la)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ha)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Tl||n===El||n===Al||n===wl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Tl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===El)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Al)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===wl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Rl||n===Cl||n===Pl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Rl||n===Cl)return o===me?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Pl)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ll||n===Il||n===Dl||n===Nl||n===Fl||n===Ul||n===Ol||n===kl||n===Bl||n===Hl||n===zl||n===Vl||n===Gl||n===Wl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ll)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Il)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Dl)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Nl)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Fl)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ul)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ol)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===kl)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Bl)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Hl)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===zl)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Vl)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Gl)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Wl)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ua||n===Xl||n===ql)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===ua)return o===me?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Xl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ql)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===qp||n===Kl||n===Yl||n===jl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===ua)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Kl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Yl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===jl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Qs?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}class Sy extends je{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Be extends be{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ty={type:"move"};class Mc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Be,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Be,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Be,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const _ of t.hand.values()){const g=e.getJointPose(_,n),p=this._getHandJoint(l,_);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,m=.005;l.inputState.pinching&&d>f+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=f-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Ty)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Be;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Ey=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ay=`
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

}`;class wy{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const i=new Le,r=t.properties.get(i);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new xi({vertexShader:Ey,fragmentShader:Ay,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ce(new no(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Ry extends ar{constructor(t,e){super();const n=this;let i=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,m=null;const _=new wy,g=e.getContextAttributes();let p=null,M=null;const y=[],x=[],I=new gt;let w=null;const R=new je;R.viewport=new he;const L=new je;L.viewport=new he;const T=[R,L],b=new Sy;let D=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let J=y[V];return J===void 0&&(J=new Mc,y[V]=J),J.getTargetRaySpace()},this.getControllerGrip=function(V){let J=y[V];return J===void 0&&(J=new Mc,y[V]=J),J.getGripSpace()},this.getHand=function(V){let J=y[V];return J===void 0&&(J=new Mc,y[V]=J),J.getHandSpace()};function F(V){const J=x.indexOf(V.inputSource);if(J===-1)return;const St=y[J];St!==void 0&&(St.update(V.inputSource,V.frame,l||o),St.dispatchEvent({type:V.type,data:V.inputSource}))}function W(){i.removeEventListener("select",F),i.removeEventListener("selectstart",F),i.removeEventListener("selectend",F),i.removeEventListener("squeeze",F),i.removeEventListener("squeezestart",F),i.removeEventListener("squeezeend",F),i.removeEventListener("end",W),i.removeEventListener("inputsourceschange",K);for(let V=0;V<y.length;V++){const J=x[V];J!==null&&(x[V]=null,y[V].disconnect(J))}D=null,z=null,_.reset(),t.setRenderTarget(p),f=null,d=null,u=null,i=null,M=null,Pt.stop(),n.isPresenting=!1,t.setPixelRatio(w),t.setSize(I.width,I.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){r=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){a=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(V){l=V},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(V){if(i=V,i!==null){if(p=t.getRenderTarget(),i.addEventListener("select",F),i.addEventListener("selectstart",F),i.addEventListener("selectend",F),i.addEventListener("squeeze",F),i.addEventListener("squeezestart",F),i.addEventListener("squeezeend",F),i.addEventListener("end",W),i.addEventListener("inputsourceschange",K),g.xrCompatible!==!0&&await e.makeXRCompatible(),w=t.getPixelRatio(),t.getSize(I),i.renderState.layers===void 0){const J={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,e,J),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),M=new ds(f.framebufferWidth,f.framebufferHeight,{format:bn,type:vi,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let J=null,St=null,st=null;g.depth&&(st=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,J=g.stencil?tr:Gs,St=g.stencil?Qs:us);const Lt={colorFormat:e.RGBA8,depthFormat:st,scaleFactor:r};u=new XRWebGLBinding(i,e),d=u.createProjectionLayer(Lt),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),M=new ds(d.textureWidth,d.textureHeight,{format:bn,type:vi,depthTexture:new rm(d.textureWidth,d.textureHeight,St,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await i.requestReferenceSpace(a),Pt.setContext(i),Pt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function K(V){for(let J=0;J<V.removed.length;J++){const St=V.removed[J],st=x.indexOf(St);st>=0&&(x[st]=null,y[st].disconnect(St))}for(let J=0;J<V.added.length;J++){const St=V.added[J];let st=x.indexOf(St);if(st===-1){for(let Ht=0;Ht<y.length;Ht++)if(Ht>=x.length){x.push(St),st=Ht;break}else if(x[Ht]===null){x[Ht]=St,st=Ht;break}if(st===-1)break}const Lt=y[st];Lt&&Lt.connect(St)}}const Y=new P,Z=new P;function H(V,J,St){Y.setFromMatrixPosition(J.matrixWorld),Z.setFromMatrixPosition(St.matrixWorld);const st=Y.distanceTo(Z),Lt=J.projectionMatrix.elements,Ht=St.projectionMatrix.elements,It=Lt[14]/(Lt[10]-1),Xt=Lt[14]/(Lt[10]+1),tt=(Lt[9]+1)/Lt[5],ut=(Lt[9]-1)/Lt[5],C=(Lt[8]-1)/Lt[0],ot=(Ht[8]+1)/Ht[0],et=It*C,dt=It*ot,lt=st/(-C+ot),Ct=lt*-C;if(J.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(Ct),V.translateZ(lt),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert(),Lt[10]===-1)V.projectionMatrix.copy(J.projectionMatrix),V.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{const _t=It+lt,E=Xt+lt,S=et-Ct,B=dt+(st-Ct),G=tt*Xt/E*_t,Q=ut*Xt/E*_t;V.projectionMatrix.makePerspective(S,B,G,Q,_t,E),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}}function rt(V,J){J===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(J.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(i===null)return;let J=V.near,St=V.far;_.texture!==null&&(_.depthNear>0&&(J=_.depthNear),_.depthFar>0&&(St=_.depthFar)),b.near=L.near=R.near=J,b.far=L.far=R.far=St,(D!==b.near||z!==b.far)&&(i.updateRenderState({depthNear:b.near,depthFar:b.far}),D=b.near,z=b.far),R.layers.mask=V.layers.mask|2,L.layers.mask=V.layers.mask|4,b.layers.mask=R.layers.mask|L.layers.mask;const st=V.parent,Lt=b.cameras;rt(b,st);for(let Ht=0;Ht<Lt.length;Ht++)rt(Lt[Ht],st);Lt.length===2?H(b,R,L):b.projectionMatrix.copy(R.projectionMatrix),ht(V,b,st)};function ht(V,J,St){St===null?V.matrix.copy(J.matrixWorld):(V.matrix.copy(St.matrixWorld),V.matrix.invert(),V.matrix.multiply(J.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(J.projectionMatrix),V.projectionMatrixInverse.copy(J.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=er*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(V){c=V,d!==null&&(d.fixedFoveation=V),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=V)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(b)};let ft=null;function At(V,J){if(h=J.getViewerPose(l||o),m=J,h!==null){const St=h.views;f!==null&&(t.setRenderTargetFramebuffer(M,f.framebuffer),t.setRenderTarget(M));let st=!1;St.length!==b.cameras.length&&(b.cameras.length=0,st=!0);for(let Ht=0;Ht<St.length;Ht++){const It=St[Ht];let Xt=null;if(f!==null)Xt=f.getViewport(It);else{const ut=u.getViewSubImage(d,It);Xt=ut.viewport,Ht===0&&(t.setRenderTargetTextures(M,ut.colorTexture,d.ignoreDepthValues?void 0:ut.depthStencilTexture),t.setRenderTarget(M))}let tt=T[Ht];tt===void 0&&(tt=new je,tt.layers.enable(Ht),tt.viewport=new he,T[Ht]=tt),tt.matrix.fromArray(It.transform.matrix),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale),tt.projectionMatrix.fromArray(It.projectionMatrix),tt.projectionMatrixInverse.copy(tt.projectionMatrix).invert(),tt.viewport.set(Xt.x,Xt.y,Xt.width,Xt.height),Ht===0&&(b.matrix.copy(tt.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),st===!0&&b.cameras.push(tt)}const Lt=i.enabledFeatures;if(Lt&&Lt.includes("depth-sensing")){const Ht=u.getDepthInformation(St[0]);Ht&&Ht.isValid&&Ht.texture&&_.init(t,Ht,i.renderState)}}for(let St=0;St<y.length;St++){const st=x[St],Lt=y[St];st!==null&&Lt!==void 0&&Lt.update(st,J,l||o)}ft&&ft(V,J),J.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:J}),m=null}const Pt=new sm;Pt.setAnimationLoop(At),this.setAnimationLoop=function(V){ft=V},this.dispose=function(){}}}const Zi=new Vn,Cy=new Gt;function Py(s,t){function e(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,em(s)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function i(g,p,M,y,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(g,p):p.isMeshToonMaterial?(r(g,p),u(g,p)):p.isMeshPhongMaterial?(r(g,p),h(g,p)):p.isMeshStandardMaterial?(r(g,p),d(g,p),p.isMeshPhysicalMaterial&&f(g,p,x)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),_(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?c(g,p,M,y):p.isSpriteMaterial?l(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,e(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===Ze&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,e(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===Ze&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,e(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,e(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const M=t.get(p),y=M.envMap,x=M.envMapRotation;y&&(g.envMap.value=y,Zi.copy(x),Zi.x*=-1,Zi.y*=-1,Zi.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Zi.y*=-1,Zi.z*=-1),g.envMapRotation.value.setFromMatrix4(Cy.makeRotationFromEuler(Zi)),g.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function c(g,p,M,y){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*M,g.scale.value=y*.5,p.map&&(g.map.value=p.map,e(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function l(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function u(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function d(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,M){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ze&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=M.texture,g.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function _(g,p){const M=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(M.matrixWorld),g.nearDistance.value=M.shadow.camera.near,g.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Ly(s,t,e,n){let i={},r={},o=[];const a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function c(M,y){const x=y.program;n.uniformBlockBinding(M,x)}function l(M,y){let x=i[M.id];x===void 0&&(m(M),x=h(M),i[M.id]=x,M.addEventListener("dispose",g));const I=y.program;n.updateUBOMapping(M,I);const w=t.render.frame;r[M.id]!==w&&(d(M),r[M.id]=w)}function h(M){const y=u();M.__bindingPointIndex=y;const x=s.createBuffer(),I=M.__size,w=M.usage;return s.bindBuffer(s.UNIFORM_BUFFER,x),s.bufferData(s.UNIFORM_BUFFER,I,w),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,y,x),x}function u(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){const y=i[M.id],x=M.uniforms,I=M.__cache;s.bindBuffer(s.UNIFORM_BUFFER,y);for(let w=0,R=x.length;w<R;w++){const L=Array.isArray(x[w])?x[w]:[x[w]];for(let T=0,b=L.length;T<b;T++){const D=L[T];if(f(D,w,T,I)===!0){const z=D.__offset,F=Array.isArray(D.value)?D.value:[D.value];let W=0;for(let K=0;K<F.length;K++){const Y=F[K],Z=_(Y);typeof Y=="number"||typeof Y=="boolean"?(D.__data[0]=Y,s.bufferSubData(s.UNIFORM_BUFFER,z+W,D.__data)):Y.isMatrix3?(D.__data[0]=Y.elements[0],D.__data[1]=Y.elements[1],D.__data[2]=Y.elements[2],D.__data[3]=0,D.__data[4]=Y.elements[3],D.__data[5]=Y.elements[4],D.__data[6]=Y.elements[5],D.__data[7]=0,D.__data[8]=Y.elements[6],D.__data[9]=Y.elements[7],D.__data[10]=Y.elements[8],D.__data[11]=0):(Y.toArray(D.__data,W),W+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,z,D.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(M,y,x,I){const w=M.value,R=y+"_"+x;if(I[R]===void 0)return typeof w=="number"||typeof w=="boolean"?I[R]=w:I[R]=w.clone(),!0;{const L=I[R];if(typeof w=="number"||typeof w=="boolean"){if(L!==w)return I[R]=w,!0}else if(L.equals(w)===!1)return L.copy(w),!0}return!1}function m(M){const y=M.uniforms;let x=0;const I=16;for(let R=0,L=y.length;R<L;R++){const T=Array.isArray(y[R])?y[R]:[y[R]];for(let b=0,D=T.length;b<D;b++){const z=T[b],F=Array.isArray(z.value)?z.value:[z.value];for(let W=0,K=F.length;W<K;W++){const Y=F[W],Z=_(Y),H=x%I,rt=H%Z.boundary,ht=H+rt;x+=rt,ht!==0&&I-ht<Z.storage&&(x+=I-ht),z.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=x,x+=Z.storage}}}const w=x%I;return w>0&&(x+=I-w),M.__size=x,M.__cache={},this}function _(M){const y={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(y.boundary=4,y.storage=4):M.isVector2?(y.boundary=8,y.storage=8):M.isVector3||M.isColor?(y.boundary=16,y.storage=12):M.isVector4?(y.boundary=16,y.storage=16):M.isMatrix3?(y.boundary=48,y.storage=48):M.isMatrix4?(y.boundary=64,y.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),y}function g(M){const y=M.target;y.removeEventListener("dispose",g);const x=o.indexOf(y.__bindingPointIndex);o.splice(x,1),s.deleteBuffer(i[y.id]),delete i[y.id],delete r[y.id]}function p(){for(const M in i)s.deleteBuffer(i[M]);o=[],i={},r={}}return{bind:c,update:l,dispose:p}}class Iy{constructor(t={}){const{canvas:e=Mg(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;const m=new Uint32Array(4),_=new Int32Array(4);let g=null,p=null;const M=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Oe,this.toneMapping=Gi,this.toneMappingExposure=1;const x=this;let I=!1,w=0,R=0,L=null,T=-1,b=null;const D=new he,z=new he;let F=null;const W=new Nt(0);let K=0,Y=e.width,Z=e.height,H=1,rt=null,ht=null;const ft=new he(0,0,Y,Z),At=new he(0,0,Y,Z);let Pt=!1;const V=new Ch;let J=!1,St=!1;const st=new Gt,Lt=new Gt,Ht=new P,It=new he,Xt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let tt=!1;function ut(){return L===null?H:1}let C=n;function ot(A,U){return e.getContext(A,U)}try{const A={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${_h}`),e.addEventListener("webglcontextlost",it,!1),e.addEventListener("webglcontextrestored",Mt,!1),e.addEventListener("webglcontextcreationerror",bt,!1),C===null){const U="webgl2";if(C=ot(U,A),C===null)throw ot(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let et,dt,lt,Ct,_t,E,S,B,G,Q,j,vt,ct,xt,kt,at,wt,Tt,zt,Et,te,qt,ie,N;function mt(){et=new Ox(C),et.init(),qt=new by(C,et),dt=new Lx(C,et,t,qt),lt=new xy(C,et),dt.reverseDepthBuffer&&d&&lt.buffers.depth.setReversed(!0),Ct=new Hx(C),_t=new sy,E=new yy(C,et,lt,_t,dt,qt,Ct),S=new Dx(x),B=new Ux(x),G=new Kg(C),ie=new Cx(C,G),Q=new kx(C,G,Ct,ie),j=new Vx(C,Q,G,Ct),zt=new zx(C,dt,E),at=new Ix(_t),vt=new iy(x,S,B,et,dt,ie,at),ct=new Py(x,_t),xt=new oy,kt=new dy(et),Tt=new Rx(x,S,B,lt,j,f,c),wt=new _y(x,j,dt),N=new Ly(C,Ct,dt,lt),Et=new Px(C,et,Ct),te=new Bx(C,et,Ct),Ct.programs=vt.programs,x.capabilities=dt,x.extensions=et,x.properties=_t,x.renderLists=xt,x.shadowMap=wt,x.state=lt,x.info=Ct}mt();const $=new Ry(x,C);this.xr=$,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){const A=et.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=et.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(A){A!==void 0&&(H=A,this.setSize(Y,Z,!1))},this.getSize=function(A){return A.set(Y,Z)},this.setSize=function(A,U,X=!0){if($.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=A,Z=U,e.width=Math.floor(A*H),e.height=Math.floor(U*H),X===!0&&(e.style.width=A+"px",e.style.height=U+"px"),this.setViewport(0,0,A,U)},this.getDrawingBufferSize=function(A){return A.set(Y*H,Z*H).floor()},this.setDrawingBufferSize=function(A,U,X){Y=A,Z=U,H=X,e.width=Math.floor(A*X),e.height=Math.floor(U*X),this.setViewport(0,0,A,U)},this.getCurrentViewport=function(A){return A.copy(D)},this.getViewport=function(A){return A.copy(ft)},this.setViewport=function(A,U,X,q){A.isVector4?ft.set(A.x,A.y,A.z,A.w):ft.set(A,U,X,q),lt.viewport(D.copy(ft).multiplyScalar(H).round())},this.getScissor=function(A){return A.copy(At)},this.setScissor=function(A,U,X,q){A.isVector4?At.set(A.x,A.y,A.z,A.w):At.set(A,U,X,q),lt.scissor(z.copy(At).multiplyScalar(H).round())},this.getScissorTest=function(){return Pt},this.setScissorTest=function(A){lt.setScissorTest(Pt=A)},this.setOpaqueSort=function(A){rt=A},this.setTransparentSort=function(A){ht=A},this.getClearColor=function(A){return A.copy(Tt.getClearColor())},this.setClearColor=function(){Tt.setClearColor.apply(Tt,arguments)},this.getClearAlpha=function(){return Tt.getClearAlpha()},this.setClearAlpha=function(){Tt.setClearAlpha.apply(Tt,arguments)},this.clear=function(A=!0,U=!0,X=!0){let q=0;if(A){let O=!1;if(L!==null){const pt=L.texture.format;O=pt===Eh||pt===Th||pt===Sh}if(O){const pt=L.texture.type,Rt=pt===vi||pt===us||pt===Gr||pt===Qs||pt===Mh||pt===yh,Ft=Tt.getClearColor(),Ut=Tt.getClearAlpha(),Kt=Ft.r,Zt=Ft.g,Ot=Ft.b;Rt?(m[0]=Kt,m[1]=Zt,m[2]=Ot,m[3]=Ut,C.clearBufferuiv(C.COLOR,0,m)):(_[0]=Kt,_[1]=Zt,_[2]=Ot,_[3]=Ut,C.clearBufferiv(C.COLOR,0,_))}else q|=C.COLOR_BUFFER_BIT}U&&(q|=C.DEPTH_BUFFER_BIT),X&&(q|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",it,!1),e.removeEventListener("webglcontextrestored",Mt,!1),e.removeEventListener("webglcontextcreationerror",bt,!1),xt.dispose(),kt.dispose(),_t.dispose(),S.dispose(),B.dispose(),j.dispose(),ie.dispose(),N.dispose(),vt.dispose(),$.dispose(),$.removeEventListener("sessionstart",gs),$.removeEventListener("sessionend",lu),Xi.stop()};function it(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function Mt(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;const A=Ct.autoReset,U=wt.enabled,X=wt.autoUpdate,q=wt.needsUpdate,O=wt.type;mt(),Ct.autoReset=A,wt.enabled=U,wt.autoUpdate=X,wt.needsUpdate=q,wt.type=O}function bt(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Wt(A){const U=A.target;U.removeEventListener("dispose",Wt),_e(U)}function _e(A){Ne(A),_t.remove(A)}function Ne(A){const U=_t.get(A).programs;U!==void 0&&(U.forEach(function(X){vt.releaseProgram(X)}),A.isShaderMaterial&&vt.releaseShaderCache(A))}this.renderBufferDirect=function(A,U,X,q,O,pt){U===null&&(U=Xt);const Rt=O.isMesh&&O.matrixWorld.determinant()<0,Ft=d0(A,U,X,q,O);lt.setMaterial(q,Rt);let Ut=X.index,Kt=1;if(q.wireframe===!0){if(Ut=Q.getWireframeAttribute(X),Ut===void 0)return;Kt=2}const Zt=X.drawRange,Ot=X.attributes.position;let oe=Zt.start*Kt,ve=(Zt.start+Zt.count)*Kt;pt!==null&&(oe=Math.max(oe,pt.start*Kt),ve=Math.min(ve,(pt.start+pt.count)*Kt)),Ut!==null?(oe=Math.max(oe,0),ve=Math.min(ve,Ut.count)):Ot!=null&&(oe=Math.max(oe,0),ve=Math.min(ve,Ot.count));const xe=ve-oe;if(xe<0||xe===1/0)return;ie.setup(O,q,Ft,X,Ut);let en,ue=Et;if(Ut!==null&&(en=G.get(Ut),ue=te,ue.setIndex(en)),O.isMesh)q.wireframe===!0?(lt.setLineWidth(q.wireframeLinewidth*ut()),ue.setMode(C.LINES)):ue.setMode(C.TRIANGLES);else if(O.isLine){let Bt=q.linewidth;Bt===void 0&&(Bt=1),lt.setLineWidth(Bt*ut()),O.isLineSegments?ue.setMode(C.LINES):O.isLineLoop?ue.setMode(C.LINE_LOOP):ue.setMode(C.LINE_STRIP)}else O.isPoints?ue.setMode(C.POINTS):O.isSprite&&ue.setMode(C.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)ue.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(et.get("WEBGL_multi_draw"))ue.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const Bt=O._multiDrawStarts,ni=O._multiDrawCounts,de=O._multiDrawCount,En=Ut?G.get(Ut).bytesPerElement:1,_s=_t.get(q).currentProgram.getUniforms();for(let ln=0;ln<de;ln++)_s.setValue(C,"_gl_DrawID",ln),ue.render(Bt[ln]/En,ni[ln])}else if(O.isInstancedMesh)ue.renderInstances(oe,xe,O.count);else if(X.isInstancedBufferGeometry){const Bt=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,ni=Math.min(X.instanceCount,Bt);ue.renderInstances(oe,xe,ni)}else ue.render(oe,xe)};function re(A,U,X){A.transparent===!0&&A.side===Ge&&A.forceSinglePass===!1?(A.side=Ze,A.needsUpdate=!0,co(A,U,X),A.side=_i,A.needsUpdate=!0,co(A,U,X),A.side=Ge):co(A,U,X)}this.compile=function(A,U,X=null){X===null&&(X=A),p=kt.get(X),p.init(U),y.push(p),X.traverseVisible(function(O){O.isLight&&O.layers.test(U.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),A!==X&&A.traverseVisible(function(O){O.isLight&&O.layers.test(U.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),p.setupLights();const q=new Set;return A.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const pt=O.material;if(pt)if(Array.isArray(pt))for(let Rt=0;Rt<pt.length;Rt++){const Ft=pt[Rt];re(Ft,X,O),q.add(Ft)}else re(pt,X,O),q.add(pt)}),y.pop(),p=null,q},this.compileAsync=function(A,U,X=null){const q=this.compile(A,U,X);return new Promise(O=>{function pt(){if(q.forEach(function(Rt){_t.get(Rt).currentProgram.isReady()&&q.delete(Rt)}),q.size===0){O(A);return}setTimeout(pt,10)}et.get("KHR_parallel_shader_compile")!==null?pt():setTimeout(pt,10)})};let tn=null;function Tn(A){tn&&tn(A)}function gs(){Xi.stop()}function lu(){Xi.start()}const Xi=new sm;Xi.setAnimationLoop(Tn),typeof self<"u"&&Xi.setContext(self),this.setAnimationLoop=function(A){tn=A,$.setAnimationLoop(A),A===null?Xi.stop():Xi.start()},$.addEventListener("sessionstart",gs),$.addEventListener("sessionend",lu),this.render=function(A,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),$.enabled===!0&&$.isPresenting===!0&&($.cameraAutoUpdate===!0&&$.updateCamera(U),U=$.getCamera()),A.isScene===!0&&A.onBeforeRender(x,A,U,L),p=kt.get(A,y.length),p.init(U),y.push(p),Lt.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),V.setFromProjectionMatrix(Lt),St=this.localClippingEnabled,J=at.init(this.clippingPlanes,St),g=xt.get(A,M.length),g.init(),M.push(g),$.enabled===!0&&$.isPresenting===!0){const pt=x.xr.getDepthSensingMesh();pt!==null&&qa(pt,U,-1/0,x.sortObjects)}qa(A,U,0,x.sortObjects),g.finish(),x.sortObjects===!0&&g.sort(rt,ht),tt=$.enabled===!1||$.isPresenting===!1||$.hasDepthSensing()===!1,tt&&Tt.addToRenderList(g,A),this.info.render.frame++,J===!0&&at.beginShadows();const X=p.state.shadowsArray;wt.render(X,A,U),J===!0&&at.endShadows(),this.info.autoReset===!0&&this.info.reset();const q=g.opaque,O=g.transmissive;if(p.setupLights(),U.isArrayCamera){const pt=U.cameras;if(O.length>0)for(let Rt=0,Ft=pt.length;Rt<Ft;Rt++){const Ut=pt[Rt];uu(q,O,A,Ut)}tt&&Tt.render(A);for(let Rt=0,Ft=pt.length;Rt<Ft;Rt++){const Ut=pt[Rt];hu(g,A,Ut,Ut.viewport)}}else O.length>0&&uu(q,O,A,U),tt&&Tt.render(A),hu(g,A,U);L!==null&&(E.updateMultisampleRenderTarget(L),E.updateRenderTargetMipmap(L)),A.isScene===!0&&A.onAfterRender(x,A,U),ie.resetDefaultState(),T=-1,b=null,y.pop(),y.length>0?(p=y[y.length-1],J===!0&&at.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,M.pop(),M.length>0?g=M[M.length-1]:g=null};function qa(A,U,X,q){if(A.visible===!1)return;if(A.layers.test(U.layers)){if(A.isGroup)X=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(U);else if(A.isLight)p.pushLight(A),A.castShadow&&p.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||V.intersectsSprite(A)){q&&It.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Lt);const Rt=j.update(A),Ft=A.material;Ft.visible&&g.push(A,Rt,Ft,X,It.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||V.intersectsObject(A))){const Rt=j.update(A),Ft=A.material;if(q&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),It.copy(A.boundingSphere.center)):(Rt.boundingSphere===null&&Rt.computeBoundingSphere(),It.copy(Rt.boundingSphere.center)),It.applyMatrix4(A.matrixWorld).applyMatrix4(Lt)),Array.isArray(Ft)){const Ut=Rt.groups;for(let Kt=0,Zt=Ut.length;Kt<Zt;Kt++){const Ot=Ut[Kt],oe=Ft[Ot.materialIndex];oe&&oe.visible&&g.push(A,Rt,oe,X,It.z,Ot)}}else Ft.visible&&g.push(A,Rt,Ft,X,It.z,null)}}const pt=A.children;for(let Rt=0,Ft=pt.length;Rt<Ft;Rt++)qa(pt[Rt],U,X,q)}function hu(A,U,X,q){const O=A.opaque,pt=A.transmissive,Rt=A.transparent;p.setupLightsView(X),J===!0&&at.setGlobalState(x.clippingPlanes,X),q&&lt.viewport(D.copy(q)),O.length>0&&ao(O,U,X),pt.length>0&&ao(pt,U,X),Rt.length>0&&ao(Rt,U,X),lt.buffers.depth.setTest(!0),lt.buffers.depth.setMask(!0),lt.buffers.color.setMask(!0),lt.setPolygonOffset(!1)}function uu(A,U,X,q){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[q.id]===void 0&&(p.state.transmissionRenderTarget[q.id]=new ds(1,1,{generateMipmaps:!0,type:et.has("EXT_color_buffer_half_float")||et.has("EXT_color_buffer_float")?to:vi,minFilter:jn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ne.workingColorSpace}));const pt=p.state.transmissionRenderTarget[q.id],Rt=q.viewport||D;pt.setSize(Rt.z,Rt.w);const Ft=x.getRenderTarget();x.setRenderTarget(pt),x.getClearColor(W),K=x.getClearAlpha(),K<1&&x.setClearColor(16777215,.5),x.clear(),tt&&Tt.render(X);const Ut=x.toneMapping;x.toneMapping=Gi;const Kt=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),p.setupLightsView(q),J===!0&&at.setGlobalState(x.clippingPlanes,q),ao(A,X,q),E.updateMultisampleRenderTarget(pt),E.updateRenderTargetMipmap(pt),et.has("WEBGL_multisampled_render_to_texture")===!1){let Zt=!1;for(let Ot=0,oe=U.length;Ot<oe;Ot++){const ve=U[Ot],xe=ve.object,en=ve.geometry,ue=ve.material,Bt=ve.group;if(ue.side===Ge&&xe.layers.test(q.layers)){const ni=ue.side;ue.side=Ze,ue.needsUpdate=!0,du(xe,X,q,en,ue,Bt),ue.side=ni,ue.needsUpdate=!0,Zt=!0}}Zt===!0&&(E.updateMultisampleRenderTarget(pt),E.updateRenderTargetMipmap(pt))}x.setRenderTarget(Ft),x.setClearColor(W,K),Kt!==void 0&&(q.viewport=Kt),x.toneMapping=Ut}function ao(A,U,X){const q=U.isScene===!0?U.overrideMaterial:null;for(let O=0,pt=A.length;O<pt;O++){const Rt=A[O],Ft=Rt.object,Ut=Rt.geometry,Kt=q===null?Rt.material:q,Zt=Rt.group;Ft.layers.test(X.layers)&&du(Ft,U,X,Ut,Kt,Zt)}}function du(A,U,X,q,O,pt){A.onBeforeRender(x,U,X,q,O,pt),A.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),O.onBeforeRender(x,U,X,q,A,pt),O.transparent===!0&&O.side===Ge&&O.forceSinglePass===!1?(O.side=Ze,O.needsUpdate=!0,x.renderBufferDirect(X,U,q,O,A,pt),O.side=_i,O.needsUpdate=!0,x.renderBufferDirect(X,U,q,O,A,pt),O.side=Ge):x.renderBufferDirect(X,U,q,O,A,pt),A.onAfterRender(x,U,X,q,O,pt)}function co(A,U,X){U.isScene!==!0&&(U=Xt);const q=_t.get(A),O=p.state.lights,pt=p.state.shadowsArray,Rt=O.state.version,Ft=vt.getParameters(A,O.state,pt,U,X),Ut=vt.getProgramCacheKey(Ft);let Kt=q.programs;q.environment=A.isMeshStandardMaterial?U.environment:null,q.fog=U.fog,q.envMap=(A.isMeshStandardMaterial?B:S).get(A.envMap||q.environment),q.envMapRotation=q.environment!==null&&A.envMap===null?U.environmentRotation:A.envMapRotation,Kt===void 0&&(A.addEventListener("dispose",Wt),Kt=new Map,q.programs=Kt);let Zt=Kt.get(Ut);if(Zt!==void 0){if(q.currentProgram===Zt&&q.lightsStateVersion===Rt)return pu(A,Ft),Zt}else Ft.uniforms=vt.getUniforms(A),A.onBeforeCompile(Ft,x),Zt=vt.acquireProgram(Ft,Ut),Kt.set(Ut,Zt),q.uniforms=Ft.uniforms;const Ot=q.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ot.clippingPlanes=at.uniform),pu(A,Ft),q.needsLights=p0(A),q.lightsStateVersion=Rt,q.needsLights&&(Ot.ambientLightColor.value=O.state.ambient,Ot.lightProbe.value=O.state.probe,Ot.directionalLights.value=O.state.directional,Ot.directionalLightShadows.value=O.state.directionalShadow,Ot.spotLights.value=O.state.spot,Ot.spotLightShadows.value=O.state.spotShadow,Ot.rectAreaLights.value=O.state.rectArea,Ot.ltc_1.value=O.state.rectAreaLTC1,Ot.ltc_2.value=O.state.rectAreaLTC2,Ot.pointLights.value=O.state.point,Ot.pointLightShadows.value=O.state.pointShadow,Ot.hemisphereLights.value=O.state.hemi,Ot.directionalShadowMap.value=O.state.directionalShadowMap,Ot.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Ot.spotShadowMap.value=O.state.spotShadowMap,Ot.spotLightMatrix.value=O.state.spotLightMatrix,Ot.spotLightMap.value=O.state.spotLightMap,Ot.pointShadowMap.value=O.state.pointShadowMap,Ot.pointShadowMatrix.value=O.state.pointShadowMatrix),q.currentProgram=Zt,q.uniformsList=null,Zt}function fu(A){if(A.uniformsList===null){const U=A.currentProgram.getUniforms();A.uniformsList=da.seqWithValue(U.seq,A.uniforms)}return A.uniformsList}function pu(A,U){const X=_t.get(A);X.outputColorSpace=U.outputColorSpace,X.batching=U.batching,X.batchingColor=U.batchingColor,X.instancing=U.instancing,X.instancingColor=U.instancingColor,X.instancingMorph=U.instancingMorph,X.skinning=U.skinning,X.morphTargets=U.morphTargets,X.morphNormals=U.morphNormals,X.morphColors=U.morphColors,X.morphTargetsCount=U.morphTargetsCount,X.numClippingPlanes=U.numClippingPlanes,X.numIntersection=U.numClipIntersection,X.vertexAlphas=U.vertexAlphas,X.vertexTangents=U.vertexTangents,X.toneMapping=U.toneMapping}function d0(A,U,X,q,O){U.isScene!==!0&&(U=Xt),E.resetTextureUnits();const pt=U.fog,Rt=q.isMeshStandardMaterial?U.environment:null,Ft=L===null?x.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:Qe,Ut=(q.isMeshStandardMaterial?B:S).get(q.envMap||Rt),Kt=q.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Zt=!!X.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Ot=!!X.morphAttributes.position,oe=!!X.morphAttributes.normal,ve=!!X.morphAttributes.color;let xe=Gi;q.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(xe=x.toneMapping);const en=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,ue=en!==void 0?en.length:0,Bt=_t.get(q),ni=p.state.lights;if(J===!0&&(St===!0||A!==b)){const fn=A===b&&q.id===T;at.setState(q,A,fn)}let de=!1;q.version===Bt.__version?(Bt.needsLights&&Bt.lightsStateVersion!==ni.state.version||Bt.outputColorSpace!==Ft||O.isBatchedMesh&&Bt.batching===!1||!O.isBatchedMesh&&Bt.batching===!0||O.isBatchedMesh&&Bt.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&Bt.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&Bt.instancing===!1||!O.isInstancedMesh&&Bt.instancing===!0||O.isSkinnedMesh&&Bt.skinning===!1||!O.isSkinnedMesh&&Bt.skinning===!0||O.isInstancedMesh&&Bt.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Bt.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Bt.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Bt.instancingMorph===!1&&O.morphTexture!==null||Bt.envMap!==Ut||q.fog===!0&&Bt.fog!==pt||Bt.numClippingPlanes!==void 0&&(Bt.numClippingPlanes!==at.numPlanes||Bt.numIntersection!==at.numIntersection)||Bt.vertexAlphas!==Kt||Bt.vertexTangents!==Zt||Bt.morphTargets!==Ot||Bt.morphNormals!==oe||Bt.morphColors!==ve||Bt.toneMapping!==xe||Bt.morphTargetsCount!==ue)&&(de=!0):(de=!0,Bt.__version=q.version);let En=Bt.currentProgram;de===!0&&(En=co(q,U,O));let _s=!1,ln=!1,dr=!1;const Me=En.getUniforms(),Gn=Bt.uniforms;if(lt.useProgram(En.program)&&(_s=!0,ln=!0,dr=!0),q.id!==T&&(T=q.id,ln=!0),_s||b!==A){lt.buffers.depth.getReversed()?(st.copy(A.projectionMatrix),bg(st),Sg(st),Me.setValue(C,"projectionMatrix",st)):Me.setValue(C,"projectionMatrix",A.projectionMatrix),Me.setValue(C,"viewMatrix",A.matrixWorldInverse);const yi=Me.map.cameraPosition;yi!==void 0&&yi.setValue(C,Ht.setFromMatrixPosition(A.matrixWorld)),dt.logarithmicDepthBuffer&&Me.setValue(C,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&Me.setValue(C,"isOrthographic",A.isOrthographicCamera===!0),b!==A&&(b=A,ln=!0,dr=!0)}if(O.isSkinnedMesh){Me.setOptional(C,O,"bindMatrix"),Me.setOptional(C,O,"bindMatrixInverse");const fn=O.skeleton;fn&&(fn.boneTexture===null&&fn.computeBoneTexture(),Me.setValue(C,"boneTexture",fn.boneTexture,E))}O.isBatchedMesh&&(Me.setOptional(C,O,"batchingTexture"),Me.setValue(C,"batchingTexture",O._matricesTexture,E),Me.setOptional(C,O,"batchingIdTexture"),Me.setValue(C,"batchingIdTexture",O._indirectTexture,E),Me.setOptional(C,O,"batchingColorTexture"),O._colorsTexture!==null&&Me.setValue(C,"batchingColorTexture",O._colorsTexture,E));const fr=X.morphAttributes;if((fr.position!==void 0||fr.normal!==void 0||fr.color!==void 0)&&zt.update(O,X,En),(ln||Bt.receiveShadow!==O.receiveShadow)&&(Bt.receiveShadow=O.receiveShadow,Me.setValue(C,"receiveShadow",O.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(Gn.envMap.value=Ut,Gn.flipEnvMap.value=Ut.isCubeTexture&&Ut.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&U.environment!==null&&(Gn.envMapIntensity.value=U.environmentIntensity),ln&&(Me.setValue(C,"toneMappingExposure",x.toneMappingExposure),Bt.needsLights&&f0(Gn,dr),pt&&q.fog===!0&&ct.refreshFogUniforms(Gn,pt),ct.refreshMaterialUniforms(Gn,q,H,Z,p.state.transmissionRenderTarget[A.id]),da.upload(C,fu(Bt),Gn,E)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(da.upload(C,fu(Bt),Gn,E),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&Me.setValue(C,"center",O.center),Me.setValue(C,"modelViewMatrix",O.modelViewMatrix),Me.setValue(C,"normalMatrix",O.normalMatrix),Me.setValue(C,"modelMatrix",O.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const fn=q.uniformsGroups;for(let yi=0,bi=fn.length;yi<bi;yi++){const mu=fn[yi];N.update(mu,En),N.bind(mu,En)}}return En}function f0(A,U){A.ambientLightColor.needsUpdate=U,A.lightProbe.needsUpdate=U,A.directionalLights.needsUpdate=U,A.directionalLightShadows.needsUpdate=U,A.pointLights.needsUpdate=U,A.pointLightShadows.needsUpdate=U,A.spotLights.needsUpdate=U,A.spotLightShadows.needsUpdate=U,A.rectAreaLights.needsUpdate=U,A.hemisphereLights.needsUpdate=U}function p0(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(A,U,X){_t.get(A.texture).__webglTexture=U,_t.get(A.depthTexture).__webglTexture=X;const q=_t.get(A);q.__hasExternalTextures=!0,q.__autoAllocateDepthBuffer=X===void 0,q.__autoAllocateDepthBuffer||et.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),q.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,U){const X=_t.get(A);X.__webglFramebuffer=U,X.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(A,U=0,X=0){L=A,w=U,R=X;let q=!0,O=null,pt=!1,Rt=!1;if(A){const Ut=_t.get(A);if(Ut.__useDefaultFramebuffer!==void 0)lt.bindFramebuffer(C.FRAMEBUFFER,null),q=!1;else if(Ut.__webglFramebuffer===void 0)E.setupRenderTarget(A);else if(Ut.__hasExternalTextures)E.rebindTextures(A,_t.get(A.texture).__webglTexture,_t.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Ot=A.depthTexture;if(Ut.__boundDepthTexture!==Ot){if(Ot!==null&&_t.has(Ot)&&(A.width!==Ot.image.width||A.height!==Ot.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");E.setupDepthRenderbuffer(A)}}const Kt=A.texture;(Kt.isData3DTexture||Kt.isDataArrayTexture||Kt.isCompressedArrayTexture)&&(Rt=!0);const Zt=_t.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Zt[U])?O=Zt[U][X]:O=Zt[U],pt=!0):A.samples>0&&E.useMultisampledRTT(A)===!1?O=_t.get(A).__webglMultisampledFramebuffer:Array.isArray(Zt)?O=Zt[X]:O=Zt,D.copy(A.viewport),z.copy(A.scissor),F=A.scissorTest}else D.copy(ft).multiplyScalar(H).floor(),z.copy(At).multiplyScalar(H).floor(),F=Pt;if(lt.bindFramebuffer(C.FRAMEBUFFER,O)&&q&&lt.drawBuffers(A,O),lt.viewport(D),lt.scissor(z),lt.setScissorTest(F),pt){const Ut=_t.get(A.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+U,Ut.__webglTexture,X)}else if(Rt){const Ut=_t.get(A.texture),Kt=U||0;C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,Ut.__webglTexture,X||0,Kt)}T=-1},this.readRenderTargetPixels=function(A,U,X,q,O,pt,Rt){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ft=_t.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Rt!==void 0&&(Ft=Ft[Rt]),Ft){lt.bindFramebuffer(C.FRAMEBUFFER,Ft);try{const Ut=A.texture,Kt=Ut.format,Zt=Ut.type;if(!dt.textureFormatReadable(Kt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!dt.textureTypeReadable(Zt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=A.width-q&&X>=0&&X<=A.height-O&&C.readPixels(U,X,q,O,qt.convert(Kt),qt.convert(Zt),pt)}finally{const Ut=L!==null?_t.get(L).__webglFramebuffer:null;lt.bindFramebuffer(C.FRAMEBUFFER,Ut)}}},this.readRenderTargetPixelsAsync=async function(A,U,X,q,O,pt,Rt){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ft=_t.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Rt!==void 0&&(Ft=Ft[Rt]),Ft){const Ut=A.texture,Kt=Ut.format,Zt=Ut.type;if(!dt.textureFormatReadable(Kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!dt.textureTypeReadable(Zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=A.width-q&&X>=0&&X<=A.height-O){lt.bindFramebuffer(C.FRAMEBUFFER,Ft);const Ot=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,Ot),C.bufferData(C.PIXEL_PACK_BUFFER,pt.byteLength,C.STREAM_READ),C.readPixels(U,X,q,O,qt.convert(Kt),qt.convert(Zt),0);const oe=L!==null?_t.get(L).__webglFramebuffer:null;lt.bindFramebuffer(C.FRAMEBUFFER,oe);const ve=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await yg(C,ve,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,Ot),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,pt),C.deleteBuffer(Ot),C.deleteSync(ve),pt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,U=null,X=0){A.isTexture!==!0&&(Lr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,A=arguments[1]);const q=Math.pow(2,-X),O=Math.floor(A.image.width*q),pt=Math.floor(A.image.height*q),Rt=U!==null?U.x:0,Ft=U!==null?U.y:0;E.setTexture2D(A,0),C.copyTexSubImage2D(C.TEXTURE_2D,X,0,0,Rt,Ft,O,pt),lt.unbindTexture()},this.copyTextureToTexture=function(A,U,X=null,q=null,O=0){A.isTexture!==!0&&(Lr("WebGLRenderer: copyTextureToTexture function signature has changed."),q=arguments[0]||null,A=arguments[1],U=arguments[2],O=arguments[3]||0,X=null);let pt,Rt,Ft,Ut,Kt,Zt,Ot,oe,ve;const xe=A.isCompressedTexture?A.mipmaps[O]:A.image;X!==null?(pt=X.max.x-X.min.x,Rt=X.max.y-X.min.y,Ft=X.isBox3?X.max.z-X.min.z:1,Ut=X.min.x,Kt=X.min.y,Zt=X.isBox3?X.min.z:0):(pt=xe.width,Rt=xe.height,Ft=xe.depth||1,Ut=0,Kt=0,Zt=0),q!==null?(Ot=q.x,oe=q.y,ve=q.z):(Ot=0,oe=0,ve=0);const en=qt.convert(U.format),ue=qt.convert(U.type);let Bt;U.isData3DTexture?(E.setTexture3D(U,0),Bt=C.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(E.setTexture2DArray(U,0),Bt=C.TEXTURE_2D_ARRAY):(E.setTexture2D(U,0),Bt=C.TEXTURE_2D),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,U.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,U.unpackAlignment);const ni=C.getParameter(C.UNPACK_ROW_LENGTH),de=C.getParameter(C.UNPACK_IMAGE_HEIGHT),En=C.getParameter(C.UNPACK_SKIP_PIXELS),_s=C.getParameter(C.UNPACK_SKIP_ROWS),ln=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,xe.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,xe.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Ut),C.pixelStorei(C.UNPACK_SKIP_ROWS,Kt),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Zt);const dr=A.isDataArrayTexture||A.isData3DTexture,Me=U.isDataArrayTexture||U.isData3DTexture;if(A.isRenderTargetTexture||A.isDepthTexture){const Gn=_t.get(A),fr=_t.get(U),fn=_t.get(Gn.__renderTarget),yi=_t.get(fr.__renderTarget);lt.bindFramebuffer(C.READ_FRAMEBUFFER,fn.__webglFramebuffer),lt.bindFramebuffer(C.DRAW_FRAMEBUFFER,yi.__webglFramebuffer);for(let bi=0;bi<Ft;bi++)dr&&C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,_t.get(A).__webglTexture,O,Zt+bi),A.isDepthTexture?(Me&&C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,_t.get(U).__webglTexture,O,ve+bi),C.blitFramebuffer(Ut,Kt,pt,Rt,Ot,oe,pt,Rt,C.DEPTH_BUFFER_BIT,C.NEAREST)):Me?C.copyTexSubImage3D(Bt,O,Ot,oe,ve+bi,Ut,Kt,pt,Rt):C.copyTexSubImage2D(Bt,O,Ot,oe,ve+bi,Ut,Kt,pt,Rt);lt.bindFramebuffer(C.READ_FRAMEBUFFER,null),lt.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else Me?A.isDataTexture||A.isData3DTexture?C.texSubImage3D(Bt,O,Ot,oe,ve,pt,Rt,Ft,en,ue,xe.data):U.isCompressedArrayTexture?C.compressedTexSubImage3D(Bt,O,Ot,oe,ve,pt,Rt,Ft,en,xe.data):C.texSubImage3D(Bt,O,Ot,oe,ve,pt,Rt,Ft,en,ue,xe):A.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,O,Ot,oe,pt,Rt,en,ue,xe.data):A.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,O,Ot,oe,xe.width,xe.height,en,xe.data):C.texSubImage2D(C.TEXTURE_2D,O,Ot,oe,pt,Rt,en,ue,xe);C.pixelStorei(C.UNPACK_ROW_LENGTH,ni),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,de),C.pixelStorei(C.UNPACK_SKIP_PIXELS,En),C.pixelStorei(C.UNPACK_SKIP_ROWS,_s),C.pixelStorei(C.UNPACK_SKIP_IMAGES,ln),O===0&&U.generateMipmaps&&C.generateMipmap(Bt),lt.unbindTexture()},this.copyTextureToTexture3D=function(A,U,X=null,q=null,O=0){return A.isTexture!==!0&&(Lr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),X=arguments[0]||null,q=arguments[1]||null,A=arguments[2],U=arguments[3],O=arguments[4]||0),Lr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,U,X,q,O)},this.initRenderTarget=function(A){_t.get(A).__webglFramebuffer===void 0&&E.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?E.setTextureCube(A,0):A.isData3DTexture?E.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?E.setTexture2DArray(A,0):E.setTexture2D(A,0),lt.unbindTexture()},this.resetState=function(){w=0,R=0,L=null,lt.reset(),ie.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return pi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=ne._getDrawingBufferColorSpace(t),e.unpackColorSpace=ne._getUnpackColorSpace()}}class Ih{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Nt(t),this.near=e,this.far=n}clone(){return new Ih(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Dy extends be{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Vn,this.environmentIntensity=1,this.environmentRotation=new Vn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Ny{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Zl,this.updateRanges=[],this.version=0,this.uuid=Sn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,r=this.stride;i<r;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Sn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Sn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const We=new P;class Dh{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)We.fromBufferAttribute(this,e),We.applyMatrix4(t),this.setXYZ(e,We.x,We.y,We.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)We.fromBufferAttribute(this,e),We.applyNormalMatrix(t),this.setXYZ(e,We.x,We.y,We.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)We.fromBufferAttribute(this,e),We.transformDirection(t),this.setXYZ(e,We.x,We.y,We.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Nn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=fe(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=fe(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=fe(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=fe(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=fe(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Nn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Nn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Nn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Nn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=fe(e,this.array),n=fe(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=fe(e,this.array),n=fe(n,this.array),i=fe(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=fe(e,this.array),n=fe(n,this.array),i=fe(i,this.array),r=fe(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return new $t(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Dh(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const vd=new P,xd=new he,Md=new he,Fy=new P,yd=new Gt,Po=new P,yc=new Jn,bd=new Gt,bc=new eo;class hm extends ce{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Mu,this.bindMatrix=new Gt,this.bindMatrixInverse=new Gt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const t=this.geometry;this.boundingBox===null&&(this.boundingBox=new Mi),this.boundingBox.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,Po),this.boundingBox.expandByPoint(Po)}computeBoundingSphere(){const t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Jn),this.boundingSphere.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,Po),this.boundingSphere.expandByPoint(Po)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),yc.copy(this.boundingSphere),yc.applyMatrix4(i),t.ray.intersectsSphere(yc)!==!1&&(bd.copy(i).invert(),bc.copy(t.ray).applyMatrix4(bd),!(this.boundingBox!==null&&bc.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,bc)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const t=new he,e=this.geometry.attributes.skinWeight;for(let n=0,i=e.count;n<i;n++){t.fromBufferAttribute(e,n);const r=1/t.manhattanLength();r!==1/0?t.multiplyScalar(r):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===Mu?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Fp?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){const n=this.skeleton,i=this.geometry;xd.fromBufferAttribute(i.attributes.skinIndex,t),Md.fromBufferAttribute(i.attributes.skinWeight,t),vd.copy(e).applyMatrix4(this.bindMatrix),e.set(0,0,0);for(let r=0;r<4;r++){const o=Md.getComponent(r);if(o!==0){const a=xd.getComponent(r);yd.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),e.addScaledVector(Fy.copy(vd).applyMatrix4(yd),o)}}return e.applyMatrix4(this.bindMatrixInverse)}}class um extends be{constructor(){super(),this.isBone=!0,this.type="Bone"}}class dm extends Le{constructor(t=null,e=1,n=1,i,r,o,a,c,l=Je,h=Je,u,d){super(null,o,a,c,l,h,i,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Sd=new Gt,Uy=new Gt;class Na{constructor(t=[],e=[]){this.uuid=Sn(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Gt)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){const n=new Gt;this.bones[t]&&n.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&n.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const t=this.bones,e=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=t.length;r<o;r++){const a=t[r]?t[r].matrixWorld:Uy;Sd.multiplyMatrices(a,e[r]),Sd.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Na(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);const e=new Float32Array(t*t*4);e.set(this.boneMatrices);const n=new dm(e,t,t,bn,kn);return n.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=n,this}getBoneByName(t){for(let e=0,n=this.bones.length;e<n;e++){const i=this.bones[e];if(i.name===t)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let n=0,i=t.bones.length;n<i;n++){const r=t.bones[n];let o=e[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new um),this.bones.push(o),this.boneInverses.push(new Gt().fromArray(t.boneInverses[n]))}return this.init(),this}toJSON(){const t={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;const e=this.bones,n=this.boneInverses;for(let i=0,r=e.length;i<r;i++){const o=e[i];t.bones.push(o.uuid);const a=n[i];t.boneInverses.push(a.toArray())}return t}}class Ql extends $t{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Is=new Gt,Td=new Gt,Lo=[],Ed=new Mi,Oy=new Gt,vr=new ce,xr=new Jn;class ky extends ce{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Ql(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Oy)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Mi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Is),Ed.copy(t.boundingBox).applyMatrix4(Is),this.boundingBox.union(Ed)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Jn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Is),xr.copy(t.boundingSphere).applyMatrix4(Is),this.boundingSphere.union(xr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(t,e){const n=this.matrixWorld,i=this.count;if(vr.geometry=this.geometry,vr.material=this.material,vr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),xr.copy(this.boundingSphere),xr.applyMatrix4(n),t.ray.intersectsSphere(xr)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Is),Td.multiplyMatrices(n,Is),vr.matrixWorld=Td,vr.raycast(t,Lo);for(let o=0,a=Lo.length;o<a;o++){const c=Lo[o];c.instanceId=r,c.object=this,e.push(c)}Lo.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Ql(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new dm(new Float32Array(i*this.count),i,this.count,bh,kn));const r=this.morphTexture.source.data.data;let o=0;for(let l=0;l<n.length;l++)o+=n[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=i*t;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class fm extends Hn{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new Nt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const ba=new P,Sa=new P,Ad=new Gt,Mr=new eo,Io=new Jn,Sc=new P,wd=new P;class Nh extends be{constructor(t=new Te,e=new fm){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,r=e.count;i<r;i++)ba.fromBufferAttribute(e,i-1),Sa.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=ba.distanceTo(Sa);t.setAttribute("lineDistance",new Re(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Io.copy(n.boundingSphere),Io.applyMatrix4(i),Io.radius+=r,t.ray.intersectsSphere(Io)===!1)return;Ad.copy(i).invert(),Mr.copy(t.ray).applyMatrix4(Ad);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const f=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let _=f,g=m-1;_<g;_+=l){const p=h.getX(_),M=h.getX(_+1),y=Do(this,t,Mr,c,p,M);y&&e.push(y)}if(this.isLineLoop){const _=h.getX(m-1),g=h.getX(f),p=Do(this,t,Mr,c,_,g);p&&e.push(p)}}else{const f=Math.max(0,o.start),m=Math.min(d.count,o.start+o.count);for(let _=f,g=m-1;_<g;_+=l){const p=Do(this,t,Mr,c,_,_+1);p&&e.push(p)}if(this.isLineLoop){const _=Do(this,t,Mr,c,m-1,f);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Do(s,t,e,n,i,r){const o=s.geometry.attributes.position;if(ba.fromBufferAttribute(o,i),Sa.fromBufferAttribute(o,r),e.distanceSqToSegment(ba,Sa,Sc,wd)>n)return;Sc.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(Sc);if(!(c<t.near||c>t.far))return{distance:c,point:wd.clone().applyMatrix4(s.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:s}}const Rd=new P,Cd=new P;class By extends Nh{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let i=0,r=e.count;i<r;i+=2)Rd.fromBufferAttribute(e,i),Cd.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Rd.distanceTo(Cd);t.setAttribute("lineDistance",new Re(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Hy extends Nh{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}}class io extends Hn{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Nt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Pd=new Gt,th=new eo,No=new Jn,Fo=new P;class Fa extends be{constructor(t=new Te,e=new io){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),No.copy(n.boundingSphere),No.applyMatrix4(i),No.radius+=r,t.ray.intersectsSphere(No)===!1)return;Pd.copy(i).invert(),th.copy(t.ray).applyMatrix4(Pd);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){const d=Math.max(0,o.start),f=Math.min(l.count,o.start+o.count);for(let m=d,_=f;m<_;m++){const g=l.getX(m);Fo.fromBufferAttribute(u,g),Ld(Fo,g,c,i,t,e,this)}}else{const d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let m=d,_=f;m<_;m++)Fo.fromBufferAttribute(u,m),Ld(Fo,m,c,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Ld(s,t,e,n,i,r,o){const a=th.distanceSqToPoint(s);if(a<e){const c=new P;th.closestPointToPoint(s,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class Ua extends Le{constructor(t,e,n,i,r,o,a,c,l){super(t,e,n,i,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Qn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let i=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(i=Math.floor(a+(c-a)/2),l=n[i]-o,l<0)a=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===o)return i/(r-1);const h=n[i],d=n[i+1]-h,f=(o-h)/d;return(i+f)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);const o=this.getPoint(i),a=this.getPoint(r),c=e||(o.isVector2?new gt:new P);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new P,i=[],r=[],o=[],a=new P,c=new Gt;for(let f=0;f<=t;f++){const m=f/t;i[f]=this.getTangentAt(m,new P)}r[0]=new P,o[0]=new P;let l=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),d<=l&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(i[f-1],i[f]),a.length()>Number.EPSILON){a.normalize();const m=Math.acos(Pe(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(a,m))}o[f].crossVectors(i[f],r[f])}if(e===!0){let f=Math.acos(Pe(r[0].dot(r[t]),-1,1));f/=t,i[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let m=1;m<=t;m++)r[m].applyMatrix4(c.makeRotationAxis(i[m],f*m)),o[m].crossVectors(i[m],r[m])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Fh extends Qn{constructor(t=0,e=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new gt){const n=e,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);const a=this.aStartAngle+t*r;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*h-f*u+this.aX,l=d*u+f*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class zy extends Fh{constructor(t,e,n,i,r,o){super(t,e,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Uh(){let s=0,t=0,e=0,n=0;function i(r,o,a,c){s=r,t=a,e=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){i(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,u){let d=(o-r)/l-(a-r)/(l+h)+(a-o)/h,f=(a-o)/h-(c-o)/(h+u)+(c-a)/u;d*=h,f*=h,i(o,a,d,f)},calc:function(r){const o=r*r,a=o*r;return s+t*r+e*o+n*a}}}const Uo=new P,Tc=new Uh,Ec=new Uh,Ac=new Uh;class Vy extends Qn{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new P){const n=e,i=this.points,r=i.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=i[(a-1)%r]:(Uo.subVectors(i[0],i[1]).add(i[0]),l=Uo);const u=i[a%r],d=i[(a+1)%r];if(this.closed||a+2<r?h=i[(a+2)%r]:(Uo.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=Uo),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let m=Math.pow(l.distanceToSquared(u),f),_=Math.pow(u.distanceToSquared(d),f),g=Math.pow(d.distanceToSquared(h),f);_<1e-4&&(_=1),m<1e-4&&(m=_),g<1e-4&&(g=_),Tc.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,m,_,g),Ec.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,m,_,g),Ac.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,m,_,g)}else this.curveType==="catmullrom"&&(Tc.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),Ec.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),Ac.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return n.set(Tc.calc(c),Ec.calc(c),Ac.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new P().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Id(s,t,e,n,i){const r=(n-t)*.5,o=(i-e)*.5,a=s*s,c=s*a;return(2*e-2*n+r+o)*c+(-3*e+3*n-2*r-o)*a+r*s+e}function Gy(s,t){const e=1-s;return e*e*t}function Wy(s,t){return 2*(1-s)*s*t}function Xy(s,t){return s*s*t}function Fr(s,t,e,n){return Gy(s,t)+Wy(s,e)+Xy(s,n)}function qy(s,t){const e=1-s;return e*e*e*t}function Ky(s,t){const e=1-s;return 3*e*e*s*t}function Yy(s,t){return 3*(1-s)*s*s*t}function jy(s,t){return s*s*s*t}function Ur(s,t,e,n,i){return qy(s,t)+Ky(s,e)+Yy(s,n)+jy(s,i)}class pm extends Qn{constructor(t=new gt,e=new gt,n=new gt,i=new gt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new gt){const n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Ur(t,i.x,r.x,o.x,a.x),Ur(t,i.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class $y extends Qn{constructor(t=new P,e=new P,n=new P,i=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new P){const n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Ur(t,i.x,r.x,o.x,a.x),Ur(t,i.y,r.y,o.y,a.y),Ur(t,i.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class mm extends Qn{constructor(t=new gt,e=new gt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new gt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new gt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Zy extends Qn{constructor(t=new P,e=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new P){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new P){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class gm extends Qn{constructor(t=new gt,e=new gt,n=new gt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new gt){const n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(Fr(t,i.x,r.x,o.x),Fr(t,i.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Jy extends Qn{constructor(t=new P,e=new P,n=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new P){const n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(Fr(t,i.x,r.x,o.x),Fr(t,i.y,r.y,o.y),Fr(t,i.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class _m extends Qn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new gt){const n=e,i=this.points,r=(i.length-1)*t,o=Math.floor(r),a=r-o,c=i[o===0?o:o-1],l=i[o],h=i[o>i.length-2?i.length-1:o+1],u=i[o>i.length-3?i.length-1:o+2];return n.set(Id(a,c.x,l.x,h.x,u.x),Id(a,c.y,l.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new gt().fromArray(i))}return this}}var eh=Object.freeze({__proto__:null,ArcCurve:zy,CatmullRomCurve3:Vy,CubicBezierCurve:pm,CubicBezierCurve3:$y,EllipseCurve:Fh,LineCurve:mm,LineCurve3:Zy,QuadraticBezierCurve:gm,QuadraticBezierCurve3:Jy,SplineCurve:_m});class Qy extends Qn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new eh[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),i=this.getCurveLengths();let r=0;for(;r<i.length;){if(i[r]>=n){const o=i[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const o=r[i],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){const h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(new eh[i.type]().fromJSON(i))}return this}}class nh extends Qy{constructor(t){super(),this.type="Path",this.currentPoint=new gt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new mm(this.currentPoint.clone(),new gt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){const r=new gm(this.currentPoint.clone(),new gt(t,e),new gt(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,r,o){const a=new pm(this.currentPoint.clone(),new gt(t,e),new gt(n,i),new gt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new _m(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,r,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,i,r,o),this}absarc(t,e,n,i,r,o){return this.absellipse(t,e,n,n,i,r,o),this}ellipse(t,e,n,i,r,o,a,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,i,r,o,a,c),this}absellipse(t,e,n,i,r,o,a,c){const l=new Fh(t,e,n,i,r,o,a,c);if(this.curves.length>0){const u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Oh extends Te{constructor(t=[new gt(0,-.5),new gt(.5,0),new gt(0,.5)],e=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:i},e=Math.floor(e),i=Pe(i,0,Math.PI*2);const r=[],o=[],a=[],c=[],l=[],h=1/e,u=new P,d=new gt,f=new P,m=new P,_=new P;let g=0,p=0;for(let M=0;M<=t.length-1;M++)switch(M){case 0:g=t[M+1].x-t[M].x,p=t[M+1].y-t[M].y,f.x=p*1,f.y=-g,f.z=p*0,_.copy(f),f.normalize(),c.push(f.x,f.y,f.z);break;case t.length-1:c.push(_.x,_.y,_.z);break;default:g=t[M+1].x-t[M].x,p=t[M+1].y-t[M].y,f.x=p*1,f.y=-g,f.z=p*0,m.copy(f),f.x+=_.x,f.y+=_.y,f.z+=_.z,f.normalize(),c.push(f.x,f.y,f.z),_.copy(m)}for(let M=0;M<=e;M++){const y=n+M*h*i,x=Math.sin(y),I=Math.cos(y);for(let w=0;w<=t.length-1;w++){u.x=t[w].x*x,u.y=t[w].y,u.z=t[w].x*I,o.push(u.x,u.y,u.z),d.x=M/e,d.y=w/(t.length-1),a.push(d.x,d.y);const R=c[3*w+0]*x,L=c[3*w+1],T=c[3*w+0]*I;l.push(R,L,T)}}for(let M=0;M<e;M++)for(let y=0;y<t.length-1;y++){const x=y+M*t.length,I=x,w=x+t.length,R=x+t.length+1,L=x+1;r.push(I,w,L),r.push(R,L,w)}this.setIndex(r),this.setAttribute("position",new Re(o,3)),this.setAttribute("uv",new Re(a,2)),this.setAttribute("normal",new Re(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Oh(t.points,t.segments,t.phiStart,t.phiLength)}}class kh extends Oh{constructor(t=1,e=1,n=4,i=8){const r=new nh;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),i),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:i}}static fromJSON(t){return new kh(t.radius,t.length,t.capSegments,t.radialSegments)}}class Bh extends Te{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};const r=[],o=[];a(i),l(n),h(),this.setAttribute("position",new Re(r,3)),this.setAttribute("normal",new Re(r.slice(),3)),this.setAttribute("uv",new Re(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(M){const y=new P,x=new P,I=new P;for(let w=0;w<e.length;w+=3)f(e[w+0],y),f(e[w+1],x),f(e[w+2],I),c(y,x,I,M)}function c(M,y,x,I){const w=I+1,R=[];for(let L=0;L<=w;L++){R[L]=[];const T=M.clone().lerp(x,L/w),b=y.clone().lerp(x,L/w),D=w-L;for(let z=0;z<=D;z++)z===0&&L===w?R[L][z]=T:R[L][z]=T.clone().lerp(b,z/D)}for(let L=0;L<w;L++)for(let T=0;T<2*(w-L)-1;T++){const b=Math.floor(T/2);T%2===0?(d(R[L][b+1]),d(R[L+1][b]),d(R[L][b])):(d(R[L][b+1]),d(R[L+1][b+1]),d(R[L+1][b]))}}function l(M){const y=new P;for(let x=0;x<r.length;x+=3)y.x=r[x+0],y.y=r[x+1],y.z=r[x+2],y.normalize().multiplyScalar(M),r[x+0]=y.x,r[x+1]=y.y,r[x+2]=y.z}function h(){const M=new P;for(let y=0;y<r.length;y+=3){M.x=r[y+0],M.y=r[y+1],M.z=r[y+2];const x=g(M)/2/Math.PI+.5,I=p(M)/Math.PI+.5;o.push(x,1-I)}m(),u()}function u(){for(let M=0;M<o.length;M+=6){const y=o[M+0],x=o[M+2],I=o[M+4],w=Math.max(y,x,I),R=Math.min(y,x,I);w>.9&&R<.1&&(y<.2&&(o[M+0]+=1),x<.2&&(o[M+2]+=1),I<.2&&(o[M+4]+=1))}}function d(M){r.push(M.x,M.y,M.z)}function f(M,y){const x=M*3;y.x=t[x+0],y.y=t[x+1],y.z=t[x+2]}function m(){const M=new P,y=new P,x=new P,I=new P,w=new gt,R=new gt,L=new gt;for(let T=0,b=0;T<r.length;T+=9,b+=6){M.set(r[T+0],r[T+1],r[T+2]),y.set(r[T+3],r[T+4],r[T+5]),x.set(r[T+6],r[T+7],r[T+8]),w.set(o[b+0],o[b+1]),R.set(o[b+2],o[b+3]),L.set(o[b+4],o[b+5]),I.copy(M).add(y).add(x).divideScalar(3);const D=g(I);_(w,b+0,M,D),_(R,b+2,y,D),_(L,b+4,x,D)}}function _(M,y,x,I){I<0&&M.x===1&&(o[y]=M.x-1),x.x===0&&x.z===0&&(o[y]=I/2/Math.PI+.5)}function g(M){return Math.atan2(M.z,-M.x)}function p(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Bh(t.vertices,t.indices,t.radius,t.details)}}class vm extends nh{constructor(t){super(t),this.uuid=Sn(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(new nh().fromJSON(i))}return this}}const tb={triangulate:function(s,t,e=2){const n=t&&t.length,i=n?t[0]*e:s.length;let r=xm(s,0,i,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,c,l,h,u,d,f;if(n&&(r=rb(s,t,r,e)),s.length>80*e){a=l=s[0],c=h=s[1];for(let m=e;m<i;m+=e)u=s[m],d=s[m+1],u<a&&(a=u),d<c&&(c=d),u>l&&(l=u),d>h&&(h=d);f=Math.max(l-a,h-c),f=f!==0?32767/f:0}return Kr(r,o,e,a,c,f,0),o}};function xm(s,t,e,n,i){let r,o;if(i===gb(s,t,e,n)>0)for(r=t;r<e;r+=n)o=Dd(r,s[r],s[r+1],o);else for(r=e-n;r>=t;r-=n)o=Dd(r,s[r],s[r+1],o);return o&&Oa(o,o.next)&&(jr(o),o=o.next),o}function ps(s,t){if(!s)return s;t||(t=s);let e=s,n;do if(n=!1,!e.steiner&&(Oa(e,e.next)||Se(e.prev,e,e.next)===0)){if(jr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Kr(s,t,e,n,i,r,o){if(!s)return;!o&&r&&hb(s,n,i,r);let a=s,c,l;for(;s.prev!==s.next;){if(c=s.prev,l=s.next,r?nb(s,n,i,r):eb(s)){t.push(c.i/e|0),t.push(s.i/e|0),t.push(l.i/e|0),jr(s),s=l.next,a=l.next;continue}if(s=l,s===a){o?o===1?(s=ib(ps(s),t,e),Kr(s,t,e,n,i,r,2)):o===2&&sb(s,t,e,n,i,r):Kr(ps(s),t,e,n,i,r,1);break}}}function eb(s){const t=s.prev,e=s,n=s.next;if(Se(t,e,n)>=0)return!1;const i=t.x,r=e.x,o=n.x,a=t.y,c=e.y,l=n.y,h=i<r?i<o?i:o:r<o?r:o,u=a<c?a<l?a:l:c<l?c:l,d=i>r?i>o?i:o:r>o?r:o,f=a>c?a>l?a:l:c>l?c:l;let m=n.next;for(;m!==t;){if(m.x>=h&&m.x<=d&&m.y>=u&&m.y<=f&&Hs(i,a,r,c,o,l,m.x,m.y)&&Se(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function nb(s,t,e,n){const i=s.prev,r=s,o=s.next;if(Se(i,r,o)>=0)return!1;const a=i.x,c=r.x,l=o.x,h=i.y,u=r.y,d=o.y,f=a<c?a<l?a:l:c<l?c:l,m=h<u?h<d?h:d:u<d?u:d,_=a>c?a>l?a:l:c>l?c:l,g=h>u?h>d?h:d:u>d?u:d,p=ih(f,m,t,e,n),M=ih(_,g,t,e,n);let y=s.prevZ,x=s.nextZ;for(;y&&y.z>=p&&x&&x.z<=M;){if(y.x>=f&&y.x<=_&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&Hs(a,h,c,u,l,d,y.x,y.y)&&Se(y.prev,y,y.next)>=0||(y=y.prevZ,x.x>=f&&x.x<=_&&x.y>=m&&x.y<=g&&x!==i&&x!==o&&Hs(a,h,c,u,l,d,x.x,x.y)&&Se(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;y&&y.z>=p;){if(y.x>=f&&y.x<=_&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&Hs(a,h,c,u,l,d,y.x,y.y)&&Se(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;x&&x.z<=M;){if(x.x>=f&&x.x<=_&&x.y>=m&&x.y<=g&&x!==i&&x!==o&&Hs(a,h,c,u,l,d,x.x,x.y)&&Se(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function ib(s,t,e){let n=s;do{const i=n.prev,r=n.next.next;!Oa(i,r)&&Mm(i,n,n.next,r)&&Yr(i,r)&&Yr(r,i)&&(t.push(i.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),jr(n),jr(n.next),n=s=r),n=n.next}while(n!==s);return ps(n)}function sb(s,t,e,n,i,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&fb(o,a)){let c=ym(o,a);o=ps(o,o.next),c=ps(c,c.next),Kr(o,t,e,n,i,r,0),Kr(c,t,e,n,i,r,0);return}a=a.next}o=o.next}while(o!==s)}function rb(s,t,e,n){const i=[];let r,o,a,c,l;for(r=0,o=t.length;r<o;r++)a=t[r]*n,c=r<o-1?t[r+1]*n:s.length,l=xm(s,a,c,n,!1),l===l.next&&(l.steiner=!0),i.push(db(l));for(i.sort(ob),r=0;r<i.length;r++)e=ab(i[r],e);return e}function ob(s,t){return s.x-t.x}function ab(s,t){const e=cb(s,t);if(!e)return t;const n=ym(e,s);return ps(n,n.next),ps(e,e.next)}function cb(s,t){let e=t,n=-1/0,i;const r=s.x,o=s.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){const d=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=r&&d>n&&(n=d,i=e.x<e.next.x?e:e.next,d===r))return i}e=e.next}while(e!==t);if(!i)return null;const a=i,c=i.x,l=i.y;let h=1/0,u;e=i;do r>=e.x&&e.x>=c&&r!==e.x&&Hs(o<l?r:n,o,c,l,o<l?n:r,o,e.x,e.y)&&(u=Math.abs(o-e.y)/(r-e.x),Yr(e,s)&&(u<h||u===h&&(e.x>i.x||e.x===i.x&&lb(i,e)))&&(i=e,h=u)),e=e.next;while(e!==a);return i}function lb(s,t){return Se(s.prev,s,t.prev)<0&&Se(t.next,s,s.next)<0}function hb(s,t,e,n){let i=s;do i.z===0&&(i.z=ih(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,ub(i)}function ub(s){let t,e,n,i,r,o,a,c,l=1;do{for(e=s,s=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<l&&(a++,n=n.nextZ,!!n);t++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||e.z<=n.z)?(i=e,e=e.nextZ,a--):(i=n,n=n.nextZ,c--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;e=n}r.nextZ=null,l*=2}while(o>1);return s}function ih(s,t,e,n,i){return s=(s-e)*i|0,t=(t-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function db(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function Hs(s,t,e,n,i,r,o,a){return(i-o)*(t-a)>=(s-o)*(r-a)&&(s-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(i-o)*(n-a)}function fb(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!pb(s,t)&&(Yr(s,t)&&Yr(t,s)&&mb(s,t)&&(Se(s.prev,s,t.prev)||Se(s,t.prev,t))||Oa(s,t)&&Se(s.prev,s,s.next)>0&&Se(t.prev,t,t.next)>0)}function Se(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function Oa(s,t){return s.x===t.x&&s.y===t.y}function Mm(s,t,e,n){const i=ko(Se(s,t,e)),r=ko(Se(s,t,n)),o=ko(Se(e,n,s)),a=ko(Se(e,n,t));return!!(i!==r&&o!==a||i===0&&Oo(s,e,t)||r===0&&Oo(s,n,t)||o===0&&Oo(e,s,n)||a===0&&Oo(e,t,n))}function Oo(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function ko(s){return s>0?1:s<0?-1:0}function pb(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&Mm(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function Yr(s,t){return Se(s.prev,s,s.next)<0?Se(s,t,s.next)>=0&&Se(s,s.prev,t)>=0:Se(s,t,s.prev)<0||Se(s,s.next,t)<0}function mb(s,t){let e=s,n=!1;const i=(s.x+t.x)/2,r=(s.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&i<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==s);return n}function ym(s,t){const e=new sh(s.i,s.x,s.y),n=new sh(t.i,t.x,t.y),i=s.next,r=t.prev;return s.next=t,t.prev=s,e.next=i,i.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Dd(s,t,e,n){const i=new sh(s,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function jr(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function sh(s,t,e){this.i=s,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function gb(s,t,e,n){let i=0;for(let r=t,o=e-n;r<e;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}class Or{static area(t){const e=t.length;let n=0;for(let i=e-1,r=0;r<e;i=r++)n+=t[i].x*t[r].y-t[r].x*t[i].y;return n*.5}static isClockWise(t){return Or.area(t)<0}static triangulateShape(t,e){const n=[],i=[],r=[];Nd(t),Fd(n,t);let o=t.length;e.forEach(Nd);for(let c=0;c<e.length;c++)i.push(o),o+=e[c].length,Fd(n,e[c]);const a=tb.triangulate(n,i);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}}function Nd(s){const t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function Fd(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}class Hh extends Te{constructor(t=new vm([new gt(.5,.5),new gt(-.5,.5),new gt(-.5,-.5),new gt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,i=[],r=[];for(let a=0,c=t.length;a<c;a++){const l=t[a];o(l)}this.setAttribute("position",new Re(i,3)),this.setAttribute("uv",new Re(r,2)),this.computeVertexNormals();function o(a){const c=[],l=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1;let d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,m=e.bevelSize!==void 0?e.bevelSize:f-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,g=e.bevelSegments!==void 0?e.bevelSegments:3;const p=e.extrudePath,M=e.UVGenerator!==void 0?e.UVGenerator:_b;let y,x=!1,I,w,R,L;p&&(y=p.getSpacedPoints(h),x=!0,d=!1,I=p.computeFrenetFrames(h,!1),w=new P,R=new P,L=new P),d||(g=0,f=0,m=0,_=0);const T=a.extractPoints(l);let b=T.shape;const D=T.holes;if(!Or.isClockWise(b)){b=b.reverse();for(let tt=0,ut=D.length;tt<ut;tt++){const C=D[tt];Or.isClockWise(C)&&(D[tt]=C.reverse())}}const F=Or.triangulateShape(b,D),W=b;for(let tt=0,ut=D.length;tt<ut;tt++){const C=D[tt];b=b.concat(C)}function K(tt,ut,C){return ut||console.error("THREE.ExtrudeGeometry: vec does not exist"),tt.clone().addScaledVector(ut,C)}const Y=b.length,Z=F.length;function H(tt,ut,C){let ot,et,dt;const lt=tt.x-ut.x,Ct=tt.y-ut.y,_t=C.x-tt.x,E=C.y-tt.y,S=lt*lt+Ct*Ct,B=lt*E-Ct*_t;if(Math.abs(B)>Number.EPSILON){const G=Math.sqrt(S),Q=Math.sqrt(_t*_t+E*E),j=ut.x-Ct/G,vt=ut.y+lt/G,ct=C.x-E/Q,xt=C.y+_t/Q,kt=((ct-j)*E-(xt-vt)*_t)/(lt*E-Ct*_t);ot=j+lt*kt-tt.x,et=vt+Ct*kt-tt.y;const at=ot*ot+et*et;if(at<=2)return new gt(ot,et);dt=Math.sqrt(at/2)}else{let G=!1;lt>Number.EPSILON?_t>Number.EPSILON&&(G=!0):lt<-Number.EPSILON?_t<-Number.EPSILON&&(G=!0):Math.sign(Ct)===Math.sign(E)&&(G=!0),G?(ot=-Ct,et=lt,dt=Math.sqrt(S)):(ot=lt,et=Ct,dt=Math.sqrt(S/2))}return new gt(ot/dt,et/dt)}const rt=[];for(let tt=0,ut=W.length,C=ut-1,ot=tt+1;tt<ut;tt++,C++,ot++)C===ut&&(C=0),ot===ut&&(ot=0),rt[tt]=H(W[tt],W[C],W[ot]);const ht=[];let ft,At=rt.concat();for(let tt=0,ut=D.length;tt<ut;tt++){const C=D[tt];ft=[];for(let ot=0,et=C.length,dt=et-1,lt=ot+1;ot<et;ot++,dt++,lt++)dt===et&&(dt=0),lt===et&&(lt=0),ft[ot]=H(C[ot],C[dt],C[lt]);ht.push(ft),At=At.concat(ft)}for(let tt=0;tt<g;tt++){const ut=tt/g,C=f*Math.cos(ut*Math.PI/2),ot=m*Math.sin(ut*Math.PI/2)+_;for(let et=0,dt=W.length;et<dt;et++){const lt=K(W[et],rt[et],ot);st(lt.x,lt.y,-C)}for(let et=0,dt=D.length;et<dt;et++){const lt=D[et];ft=ht[et];for(let Ct=0,_t=lt.length;Ct<_t;Ct++){const E=K(lt[Ct],ft[Ct],ot);st(E.x,E.y,-C)}}}const Pt=m+_;for(let tt=0;tt<Y;tt++){const ut=d?K(b[tt],At[tt],Pt):b[tt];x?(R.copy(I.normals[0]).multiplyScalar(ut.x),w.copy(I.binormals[0]).multiplyScalar(ut.y),L.copy(y[0]).add(R).add(w),st(L.x,L.y,L.z)):st(ut.x,ut.y,0)}for(let tt=1;tt<=h;tt++)for(let ut=0;ut<Y;ut++){const C=d?K(b[ut],At[ut],Pt):b[ut];x?(R.copy(I.normals[tt]).multiplyScalar(C.x),w.copy(I.binormals[tt]).multiplyScalar(C.y),L.copy(y[tt]).add(R).add(w),st(L.x,L.y,L.z)):st(C.x,C.y,u/h*tt)}for(let tt=g-1;tt>=0;tt--){const ut=tt/g,C=f*Math.cos(ut*Math.PI/2),ot=m*Math.sin(ut*Math.PI/2)+_;for(let et=0,dt=W.length;et<dt;et++){const lt=K(W[et],rt[et],ot);st(lt.x,lt.y,u+C)}for(let et=0,dt=D.length;et<dt;et++){const lt=D[et];ft=ht[et];for(let Ct=0,_t=lt.length;Ct<_t;Ct++){const E=K(lt[Ct],ft[Ct],ot);x?st(E.x,E.y+y[h-1].y,y[h-1].x+C):st(E.x,E.y,u+C)}}}V(),J();function V(){const tt=i.length/3;if(d){let ut=0,C=Y*ut;for(let ot=0;ot<Z;ot++){const et=F[ot];Lt(et[2]+C,et[1]+C,et[0]+C)}ut=h+g*2,C=Y*ut;for(let ot=0;ot<Z;ot++){const et=F[ot];Lt(et[0]+C,et[1]+C,et[2]+C)}}else{for(let ut=0;ut<Z;ut++){const C=F[ut];Lt(C[2],C[1],C[0])}for(let ut=0;ut<Z;ut++){const C=F[ut];Lt(C[0]+Y*h,C[1]+Y*h,C[2]+Y*h)}}n.addGroup(tt,i.length/3-tt,0)}function J(){const tt=i.length/3;let ut=0;St(W,ut),ut+=W.length;for(let C=0,ot=D.length;C<ot;C++){const et=D[C];St(et,ut),ut+=et.length}n.addGroup(tt,i.length/3-tt,1)}function St(tt,ut){let C=tt.length;for(;--C>=0;){const ot=C;let et=C-1;et<0&&(et=tt.length-1);for(let dt=0,lt=h+g*2;dt<lt;dt++){const Ct=Y*dt,_t=Y*(dt+1),E=ut+ot+Ct,S=ut+et+Ct,B=ut+et+_t,G=ut+ot+_t;Ht(E,S,B,G)}}}function st(tt,ut,C){c.push(tt),c.push(ut),c.push(C)}function Lt(tt,ut,C){It(tt),It(ut),It(C);const ot=i.length/3,et=M.generateTopUV(n,i,ot-3,ot-2,ot-1);Xt(et[0]),Xt(et[1]),Xt(et[2])}function Ht(tt,ut,C,ot){It(tt),It(ut),It(ot),It(ut),It(C),It(ot);const et=i.length/3,dt=M.generateSideWallUV(n,i,et-6,et-3,et-2,et-1);Xt(dt[0]),Xt(dt[1]),Xt(dt[3]),Xt(dt[1]),Xt(dt[2]),Xt(dt[3])}function It(tt){i.push(c[tt*3+0]),i.push(c[tt*3+1]),i.push(c[tt*3+2])}function Xt(tt){r.push(tt.x),r.push(tt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return vb(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,o=t.shapes.length;r<o;r++){const a=e[t.shapes[r]];n.push(a)}const i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new eh[i.type]().fromJSON(i)),new Hh(n,t.options)}}const _b={generateTopUV:function(s,t,e,n,i){const r=t[e*3],o=t[e*3+1],a=t[n*3],c=t[n*3+1],l=t[i*3],h=t[i*3+1];return[new gt(r,o),new gt(a,c),new gt(l,h)]},generateSideWallUV:function(s,t,e,n,i,r){const o=t[e*3],a=t[e*3+1],c=t[e*3+2],l=t[n*3],h=t[n*3+1],u=t[n*3+2],d=t[i*3],f=t[i*3+1],m=t[i*3+2],_=t[r*3],g=t[r*3+1],p=t[r*3+2];return Math.abs(a-h)<Math.abs(o-l)?[new gt(o,1-c),new gt(l,1-u),new gt(d,1-m),new gt(_,1-p)]:[new gt(a,1-c),new gt(h,1-u),new gt(f,1-m),new gt(g,1-p)]}};function vb(s,t,e){if(e.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){const r=s[n];e.shapes.push(r.uuid)}else e.shapes.push(s.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class ka extends Bh{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new ka(t.radius,t.detail)}}class ir extends Te{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const h=[],u=new P,d=new P,f=[],m=[],_=[],g=[];for(let p=0;p<=n;p++){const M=[],y=p/n;let x=0;p===0&&o===0?x=.5/e:p===n&&c===Math.PI&&(x=-.5/e);for(let I=0;I<=e;I++){const w=I/e;u.x=-t*Math.cos(i+w*r)*Math.sin(o+y*a),u.y=t*Math.cos(o+y*a),u.z=t*Math.sin(i+w*r)*Math.sin(o+y*a),m.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),g.push(w+x,1-y),M.push(l++)}h.push(M)}for(let p=0;p<n;p++)for(let M=0;M<e;M++){const y=h[p][M+1],x=h[p][M],I=h[p+1][M],w=h[p+1][M+1];(p!==0||o>0)&&f.push(y,x,w),(p!==n-1||c<Math.PI)&&f.push(x,I,w)}this.setIndex(f),this.setAttribute("position",new Re(m,3)),this.setAttribute("normal",new Re(_,3)),this.setAttribute("uv",new Re(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ir(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class $e extends Hn{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Nt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Nt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ah,this.normalScale=new gt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class ti extends $e{static get type(){return"MeshPhysicalMaterial"}constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new gt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Pe(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Nt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Nt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Nt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class xb extends Hn{static get type(){return"MeshLambertMaterial"}constructor(t){super(),this.isMeshLambertMaterial=!0,this.color=new Nt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Nt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ah,this.normalScale=new gt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vn,this.combine=vh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}function Bo(s,t,e){return!s||!e&&s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function Mb(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function yb(s){function t(i,r){return s[i]-s[r]}const e=s.length,n=new Array(e);for(let i=0;i!==e;++i)n[i]=i;return n.sort(t),n}function Ud(s,t,e){const n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){const a=e[r]*t;for(let c=0;c!==t;++c)i[o++]=s[a+c]}return i}function bm(s,t,e,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(t.push(r.time),e.push.apply(e,o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(t.push(r.time),o.toArray(e,e.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(t.push(r.time),e.push(o)),r=s[i++];while(r!==void 0)}class so{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){const e=this.parameterPositions;let n=this._cachedIndex,i=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=e[++n],t<i)break t}o=e.length;break e}if(!(t>=r)){const a=e[1];t<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){const a=n+o>>>1;t<e[a]?o=a:n=a+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){const e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let o=0;o!==i;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class bb extends so{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:yu,endingEnd:yu}}intervalChanged_(t,e,n){const i=this.parameterPositions;let r=t-2,o=t+1,a=i[r],c=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case bu:r=t,a=2*e-n;break;case Su:r=i.length-2,a=e+i[r]-i[r+1];break;default:r=t,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case bu:o=t,c=2*n-e;break;case Su:o=1,c=n+i[1]-i[0];break;default:o=t-1,c=e}const l=(n-e)*.5,h=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,m=(n-e)/(i-e),_=m*m,g=_*m,p=-d*g+2*d*_-d*m,M=(1+d)*g+(-1.5-2*d)*_+(-.5+d)*m+1,y=(-1-f)*g+(1.5+f)*_+.5*m,x=f*g-f*_;for(let I=0;I!==a;++I)r[I]=p*o[h+I]+M*o[l+I]+y*o[c+I]+x*o[u+I];return r}}class Sb extends so{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=(n-e)/(i-e),u=1-h;for(let d=0;d!==a;++d)r[d]=o[l+d]*u+o[c+d]*h;return r}}class Tb extends so{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}}class ei{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Bo(e,this.TimeBufferType),this.values=Bo(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){const e=t.constructor;let n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Bo(t.times,Array),values:Bo(t.values,Array)};const i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Tb(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Sb(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new bb(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Wr:e=this.InterpolantFactoryMethodDiscrete;break;case Xr:e=this.InterpolantFactoryMethodLinear;break;case Ka:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Wr;case this.InterpolantFactoryMethodLinear:return Xr;case this.InterpolantFactoryMethodSmooth:return Ka}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){const e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){const e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){const n=this.times,i=n.length;let r=0,o=i-1;for(;r!==i&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0;const e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){const c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(i!==void 0&&Mb(i))for(let a=0,c=i.length;a!==c;++a){const l=i[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){const t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Ka,r=t.length-1;let o=1;for(let a=1;a<r;++a){let c=!1;const l=t[a],h=t[a+1];if(l!==h&&(a!==1||l!==t[0]))if(i)c=!0;else{const u=a*n,d=u-n,f=u+n;for(let m=0;m!==n;++m){const _=e[u+m];if(_!==e[d+m]||_!==e[f+m]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];const u=a*n,d=o*n;for(let f=0;f!==n;++f)e[d+f]=e[u+f]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)e[c+l]=e[a+l];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){const t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}}ei.prototype.TimeBufferType=Float32Array;ei.prototype.ValueBufferType=Float32Array;ei.prototype.DefaultInterpolation=Xr;class lr extends ei{constructor(t,e,n){super(t,e,n)}}lr.prototype.ValueTypeName="bool";lr.prototype.ValueBufferType=Array;lr.prototype.DefaultInterpolation=Wr;lr.prototype.InterpolantFactoryMethodLinear=void 0;lr.prototype.InterpolantFactoryMethodSmooth=void 0;class Sm extends ei{}Sm.prototype.ValueTypeName="color";class sr extends ei{}sr.prototype.ValueTypeName="number";class Eb extends so{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-e)/(i-e);let l=t*a;for(let h=l+a;l!==h;l+=4)le.slerpFlat(r,0,o,l-a,o,l,c);return r}}class rr extends ei{InterpolantFactoryMethodLinear(t){return new Eb(this.times,this.values,this.getValueSize(),t)}}rr.prototype.ValueTypeName="quaternion";rr.prototype.InterpolantFactoryMethodSmooth=void 0;class hr extends ei{constructor(t,e,n){super(t,e,n)}}hr.prototype.ValueTypeName="string";hr.prototype.ValueBufferType=Array;hr.prototype.DefaultInterpolation=Wr;hr.prototype.InterpolantFactoryMethodLinear=void 0;hr.prototype.InterpolantFactoryMethodSmooth=void 0;class or extends ei{}or.prototype.ValueTypeName="vector";class Ab{constructor(t="",e=-1,n=[],i=X0){this.name=t,this.tracks=n,this.duration=e,this.blendMode=i,this.uuid=Sn(),this.duration<0&&this.resetDuration()}static parse(t){const e=[],n=t.tracks,i=1/(t.fps||1);for(let o=0,a=n.length;o!==a;++o)e.push(Rb(n[o]).scale(i));const r=new this(t.name,t.duration,e,t.blendMode);return r.uuid=t.uuid,r}static toJSON(t){const e=[],n=t.tracks,i={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode};for(let r=0,o=n.length;r!==o;++r)e.push(ei.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(t,e,n,i){const r=e.length,o=[];for(let a=0;a<r;a++){let c=[],l=[];c.push((a+r-1)%r,a,(a+1)%r),l.push(0,1,0);const h=yb(c);c=Ud(c,1,h),l=Ud(l,1,h),!i&&c[0]===0&&(c.push(r),l.push(l[0])),o.push(new sr(".morphTargetInfluences["+e[a].name+"]",c,l).scale(1/n))}return new this(t,-1,o)}static findByName(t,e){let n=t;if(!Array.isArray(t)){const i=t;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===e)return n[i];return null}static CreateClipsFromMorphTargetSequences(t,e,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,c=t.length;a<c;a++){const l=t[a],h=l.name.match(r);if(h&&h.length>1){const u=h[1];let d=i[u];d||(i[u]=d=[]),d.push(l)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],e,n));return o}static parseAnimation(t,e){if(!t)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(u,d,f,m,_){if(f.length!==0){const g=[],p=[];bm(f,g,p,m),g.length!==0&&_.push(new u(d,g,p))}},i=[],r=t.name||"default",o=t.fps||30,a=t.blendMode;let c=t.length||-1;const l=t.hierarchy||[];for(let u=0;u<l.length;u++){const d=l[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let m;for(m=0;m<d.length;m++)if(d[m].morphTargets)for(let _=0;_<d[m].morphTargets.length;_++)f[d[m].morphTargets[_]]=-1;for(const _ in f){const g=[],p=[];for(let M=0;M!==d[m].morphTargets.length;++M){const y=d[m];g.push(y.time),p.push(y.morphTarget===_?1:0)}i.push(new sr(".morphTargetInfluence["+_+"]",g,p))}c=f.length*o}else{const f=".bones["+e[u].name+"]";n(or,f+".position",d,"pos",i),n(rr,f+".quaternion",d,"rot",i),n(or,f+".scale",d,"scl",i)}}return i.length===0?null:new this(r,c,i,a)}resetDuration(){const t=this.tracks;let e=0;for(let n=0,i=t.length;n!==i;++n){const r=this.tracks[n];e=Math.max(e,r.times[r.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){const t=[];for(let e=0;e<this.tracks.length;e++)t.push(this.tracks[e].clone());return new this.constructor(this.name,this.duration,t,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function wb(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return sr;case"vector":case"vector2":case"vector3":case"vector4":return or;case"color":return Sm;case"quaternion":return rr;case"bool":case"boolean":return lr;case"string":return hr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function Rb(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const t=wb(s.type);if(s.times===void 0){const e=[],n=[];bm(s.keys,e,n,"value"),s.times=e,s.values=n}return t.parse!==void 0?t.parse(s):new t(s.name,s.times,s.values,s.interpolation)}const Hi={enabled:!1,files:{},add:function(s,t){this.enabled!==!1&&(this.files[s]=t)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class Cb{constructor(t,e,n){const i=this;let r=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){const u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){const f=l[u],m=l[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return m}return null}}}const Pb=new Cb;class ur{constructor(t){this.manager=t!==void 0?t:Pb,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}ur.DEFAULT_MATERIAL_NAME="__DEFAULT";const ci={};class Lb extends Error{constructor(t,e){super(t),this.response=e}}class Tm extends ur{constructor(t){super(t)}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=Hi.get(t);if(r!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(r),this.manager.itemEnd(t)},0),r;if(ci[t]!==void 0){ci[t].push({onLoad:e,onProgress:n,onError:i});return}ci[t]=[],ci[t].push({onLoad:e,onProgress:n,onError:i});const o=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const h=ci[t],u=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),f=d?parseInt(d):0,m=f!==0;let _=0;const g=new ReadableStream({start(p){M();function M(){u.read().then(({done:y,value:x})=>{if(y)p.close();else{_+=x.byteLength;const I=new ProgressEvent("progress",{lengthComputable:m,loaded:_,total:f});for(let w=0,R=h.length;w<R;w++){const L=h[w];L.onProgress&&L.onProgress(I)}p.enqueue(x),M()}},y=>{p.error(y)})}}});return new Response(g)}else throw new Lb(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return l.json();default:if(a===void 0)return l.text();{const u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return l.arrayBuffer().then(m=>f.decode(m))}}}).then(l=>{Hi.add(t,l);const h=ci[t];delete ci[t];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onLoad&&f.onLoad(l)}}).catch(l=>{const h=ci[t];if(h===void 0)throw this.manager.itemError(t),l;delete ci[t];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onError&&f.onError(l)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class Ib extends ur{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,o=Hi.get(t);if(o!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0),o;const a=qr("img");function c(){h(),Hi.add(t,this),e&&e(this),r.manager.itemEnd(t)}function l(u){h(),i&&i(u),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(t),a.src=t,a}}class Db extends ur{constructor(t){super(t)}load(t,e,n,i){const r=new Le,o=new Ib(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},n,i),r}}class Ba extends be{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Nt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class Nb extends Ba{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(be.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Nt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const wc=new Gt,Od=new P,kd=new P;class zh{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new gt(512,512),this.map=null,this.mapPass=null,this.matrix=new Gt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ch,this._frameExtents=new gt(1,1),this._viewportCount=1,this._viewports=[new he(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Od.setFromMatrixPosition(t.matrixWorld),e.position.copy(Od),kd.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(kd),e.updateMatrixWorld(),wc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(wc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(wc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Fb extends zh{constructor(){super(new je(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,n=er*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(n!==e.fov||i!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=i,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class Ub extends Ba{constructor(t,e,n=0,i=Math.PI/3,r=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(be.DEFAULT_UP),this.updateMatrix(),this.target=new be,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Fb}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const Bd=new Gt,yr=new P,Rc=new P;class Ob extends zh{constructor(){super(new je(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new gt(4,2),this._viewportCount=6,this._viewports=[new he(2,1,1,1),new he(0,1,1,1),new he(3,1,1,1),new he(1,1,1,1),new he(3,0,1,1),new he(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),yr.setFromMatrixPosition(t.matrixWorld),n.position.copy(yr),Rc.copy(n.position),Rc.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Rc),n.updateMatrixWorld(),i.makeTranslation(-yr.x,-yr.y,-yr.z),Bd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Bd)}}class kb extends Ba{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Ob}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Bb extends zh{constructor(){super(new Ph(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Em extends Ba{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(be.DEFAULT_UP),this.updateMatrix(),this.target=new be,this.shadow=new Bb}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class kr{static decodeText(t){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(t);let e="";for(let n=0,i=t.length;n<i;n++)e+=String.fromCharCode(t[n]);try{return decodeURIComponent(escape(e))}catch{return e}}static extractUrlBase(t){const e=t.lastIndexOf("/");return e===-1?"./":t.slice(0,e+1)}static resolveURL(t,e){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}}class Hb extends ur{constructor(t){super(t),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(t){return this.options=t,this}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,o=Hi.get(t);if(o!==void 0){if(r.manager.itemStart(t),o.then){o.then(l=>{e&&e(l),r.manager.itemEnd(t)}).catch(l=>{i&&i(l)});return}return setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const c=fetch(t,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return Hi.add(t,l),e&&e(l),r.manager.itemEnd(t),l}).catch(function(l){i&&i(l),Hi.remove(t),r.manager.itemError(t),r.manager.itemEnd(t)});Hi.add(t,c),r.manager.itemStart(t)}}const Vh="\\[\\]\\.:\\/",zb=new RegExp("["+Vh+"]","g"),Gh="[^"+Vh+"]",Vb="[^"+Vh.replace("\\.","")+"]",Gb=/((?:WC+[\/:])*)/.source.replace("WC",Gh),Wb=/(WCOD+)?/.source.replace("WCOD",Vb),Xb=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Gh),qb=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Gh),Kb=new RegExp("^"+Gb+Wb+Xb+qb+"$"),Yb=["material","materials","bones","map"];class jb{constructor(t,e,n){const i=n||pe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)}bind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}}class pe{constructor(t,e,n){this.path=e,this.parsedPath=n||pe.parseTrackName(e),this.node=pe.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new pe.Composite(t,e,n):new pe(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(zb,"")}static parseTrackName(t){const e=Kb.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);const n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);Yb.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){const n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===e||a.uuid===e)return a;const c=n(a.children);if(c)return c}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node;const e=this.parsedPath,n=e.objectName,i=e.propertyName;let r=e.propertyIndex;if(t||(t=pe.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}const o=t[i];if(o===void 0){const l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}pe.Composite=jb;pe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};pe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};pe.prototype.GetterByBindingType=[pe.prototype._getValue_direct,pe.prototype._getValue_array,pe.prototype._getValue_arrayElement,pe.prototype._getValue_toArray];pe.prototype.SetterByBindingTypeAndVersioning=[[pe.prototype._setValue_direct,pe.prototype._setValue_direct_setNeedsUpdate,pe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[pe.prototype._setValue_array,pe.prototype._setValue_array_setNeedsUpdate,pe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[pe.prototype._setValue_arrayElement,pe.prototype._setValue_arrayElement_setNeedsUpdate,pe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[pe.prototype._setValue_fromArray,pe.prototype._setValue_fromArray_setNeedsUpdate,pe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const Hd=new Gt;class $b{constructor(t,e,n=0,i=1/0){this.ray=new eo(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new Rh,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Hd.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Hd),this}intersectObject(t,e=!0,n=[]){return rh(t,this,n,e),n.sort(zd),n}intersectObjects(t,e=!0,n=[]){for(let i=0,r=t.length;i<r;i++)rh(t[i],this,n,e);return n.sort(zd),n}}function zd(s,t){return s.distance-t.distance}function rh(s,t,e,n){let i=!0;if(s.layers.test(t.layers)&&s.raycast(t,e)===!1&&(i=!1),i===!0&&n===!0){const r=s.children;for(let o=0,a=r.length;o<a;o++)rh(r[o],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:_h}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=_h);const Dt=(s,t,e)=>s<t?t:s>e?e:s,sn=(s,t,e)=>s+(t-s)*e;function Ui(s){const t=Math.PI*2;let e=(s+Math.PI)%t;return e<0&&(e+=t),e-=Math.PI,e===-Math.PI?Math.PI:e}const yn=(s,t,e,n)=>sn(s,t,1-Math.exp(-e*n)),k=(s,t,e)=>{const n=Dt((e-s)/(t-s),0,1);return n*n*(3-2*n)};function Yn(s,t){let e=(Math.imul(s|0,668265261)^Math.imul(t|0,374761393))>>>0;return e=Math.imul(e^e>>>15,2246822507)>>>0,e=Math.imul(e^e>>>13,3266489909)>>>0,e=(e^e>>>16)>>>0,e/4294967296}function ke(s,t){const e=Math.floor(s),n=s-e,i=Yn(e,t),r=Yn(e+1,t),o=n*n*(3-2*n);return i+(r-i)*o}const Am=.75;class Zb{constructor(t){v(this,"camera");v(this,"dist",13);v(this,"baseY",.7);v(this,"lookAhead",4.5);v(this,"aimDrop",1.5);v(this,"followRate",4.5);v(this,"heightRate",2.5);v(this,"dirRate",1.2);v(this,"s",0);v(this,"A",2);v(this,"y",1);v(this,"u",2);v(this,"dir",1);v(this,"initialised",!1);v(this,"tube",0);v(this,"tubeTarget",0);v(this,"tubeBack",.9);v(this,"tubeUp",.3);v(this,"target",new P);this.camera=new je(36,t,.1,1500),this.setAspect(t)}setAspect(t){!(t>0)||!Number.isFinite(t)||(this.camera.aspect=t,this.camera.fov=t<1.4?48:36,this.camera.updateProjectionMatrix())}snap(t,e,n=e*.4,i=2,r=1){this.s=t,this.A=e,this.y=Number.isFinite(n)?n:e*.4,this.u=Number.isFinite(i)?i:2,this.dir=r>=0?1:-1,this.initialised=!0,this.apply()}update(t,e,n,i=e*.4,r=2,o=1){if(!(!Number.isFinite(t)||!Number.isFinite(e))){if((!(n>=0)||!Number.isFinite(n))&&(n=0),!this.initialised){this.snap(t,e,i,r,o);return}this.s=yn(this.s,t,this.followRate,n),this.A=yn(this.A,e,this.heightRate,n),Number.isFinite(i)&&(this.y=yn(this.y,i,this.heightRate,n)),Number.isFinite(r)&&(this.u=yn(this.u,r,this.heightRate,n)),Number.isFinite(o)&&(this.dir=yn(this.dir,Math.max(-1,Math.min(1,o)),this.dirRate,n)),this.tube=yn(this.tube,this.tubeTarget,1.5,n),this.apply()}}setTube(t){this.tubeTarget=t?1:0}get focusS(){return this.s}apply(){const t=this.lookAhead*this.dir;this.camera.position.set(-(this.s-t*.35),this.baseY+.4*this.A+.25*this.y+this.tubeUp*this.tube,this.u+this.dist+this.tubeBack*this.tube),this.target.set(-(this.s+t),this.y*.75+.15*this.A-this.aimDrop,this.u-.5);const e=Am,n=-this.s,i=this.y+.9*e,r=this.u,o=this.camera.position;o.set(n+(o.x-n)*e,i+(o.y-i)*e,r+(o.z-r)*e),this.target.set(n+(this.target.x-n)*e,i+(this.target.y-i)*e,r+(this.target.z-r)*e),this.camera.lookAt(this.target)}}const Jb=9.81;class wm{constructor(t=900,e=Math.random){v(this,"points");v(this,"capacity");v(this,"pos");v(this,"col");v(this,"vel");v(this,"life");v(this,"maxLife");v(this,"geo");v(this,"next",0);v(this,"alive",0);v(this,"carry",0);v(this,"rnd");this.capacity=t,this.rnd=e,this.pos=new Float32Array(t*3),this.col=new Float32Array(t*4),this.vel=new Float32Array(t*3),this.life=new Float32Array(t),this.maxLife=new Float32Array(t);for(let i=0;i<t;i++)this.pos[i*3+1]=-1e3;this.geo=new Te,this.geo.setAttribute("position",new $t(this.pos,3).setUsage(Ee)),this.geo.setAttribute("color",new $t(this.col,4).setUsage(Ee));const n=new io({size:.16,sizeAttenuation:!0,vertexColors:!0,transparent:!0,depthWrite:!1});this.points=new Fa(this.geo,n),this.points.frustumCulled=!1}get count(){return this.alive}emit(t,e,n,i,r,o,a,c,l=1.2){if(!(a>0)||!(c>0)||!Number.isFinite(a*c))return;this.carry+=a*c;let h=Math.floor(this.carry);this.carry-=h,h>this.capacity&&(h=this.capacity);for(let u=0;u<h;u++)this.spawn(t,e,n,i,r,o,l)}burst(t,e,n,i,r,o,a,c=1.8){const l=Math.min(this.capacity,Math.max(0,Math.floor(a)));for(let h=0;h<l;h++)this.spawn(t,e,n,i,r,o,c)}spawn(t,e,n,i,r,o,a){const c=this.next;this.next=(this.next+1)%this.capacity;const l=this.rnd,h=c*3;this.pos[h]=t+(l()-.5)*.3,this.pos[h+1]=e+l()*.1,this.pos[h+2]=n+(l()-.5)*.3;const u=.6+l()*.8;this.vel[h]=i*u+(l()-.5)*a,this.vel[h+1]=r*u+l()*a,this.vel[h+2]=o*u+(l()-.5)*a;const d=.5+l()*.6;this.maxLife[c]=d,this.life[c]=d}update(t){if(!(t>0)||!Number.isFinite(t))return;let e=0;const n=Math.exp(-1.2*t);for(let i=0;i<this.capacity;i++){const r=i*3,o=i*4;if(this.life[i]<=0){this.col[o+3]=0;continue}if(this.life[i]-=t,this.life[i]<=0){this.life[i]=0,this.col[o+3]=0,this.pos[r+1]=-1e3;continue}e++,this.vel[r]*=n,this.vel[r+2]*=n,this.vel[r+1]-=Jb*t,this.pos[r]+=this.vel[r]*t,this.pos[r+1]+=this.vel[r+1]*t,this.pos[r+2]+=this.vel[r+2]*t;const a=this.life[i]/this.maxLife[i];this.col[o]=.92,this.col[o+1]=.97,this.col[o+2]=1,this.col[o+3]=Math.min(1,a*1.6)*.85}this.alive=e,this.geo.attributes.position.needsUpdate=!0,this.geo.attributes.color.needsUpdate=!0}clear(){this.life.fill(0),this.alive=0;for(let t=0;t<this.capacity;t++)this.pos[t*3+1]=-1e3,this.col[t*4+3]=0}}const Qb={A0:2,length:240,liftMax:2.4,arrivalTime:2.5,startS:0},zs={base:6.4,hollowGain:.5,barrelPace:7.1},dn={waveP:.66,knee:.42,span:.07,coinKey:77777,calmShare:.45,calmBelow:.49,preCloseCut:.5,preCloseIn:22,preCloseFull:12},Ci={lenMin:31,lenSpan:17,aMin:34,aSpan:56,upLen:40,upFrom:.22,curtLen:16,curtFrom:.56,riseLen:10,fallLen:8,outLen:10,endHol:.3,blend:6,tailK:.6,powerFrom:.45,paceFrom:.56,paceFull:.6,deepP:.5,medLo:.72,medHi:.83,deepLo:.87,deepHi:.96},ye={hol0:.56,hol1:.6,cover:.9,closeLen:2.4,aheadMin:2.4,aheadFull:2.8,ahead:4.2},li={grow:.22,hol0:.5,hol1:.6,closeLen:9},mn={out0:6,out1:80,backMin:6.5,stretch:.2,rise0:-8,rise1:3,fall0:1,fall1:15,nearLen:5},Vd=5,Gd=35,tS=.85,eS=.5,nS=1/120,Wd=.001,Cc=new DataView(new ArrayBuffer(8));function iS(s){Cc.setFloat64(0,s);let t=Math.imul(Cc.getUint32(0)^2654435769,2246822507);return t^=t>>>13,t=Math.imul(t^Cc.getUint32(4),3266489909),t^=t>>>16,t=Math.imul(t,668265261),t^=t>>>15,t|0}const Ln=class Ln{constructor(t=1,e={}){v(this,"p");v(this,"seed",1);v(this,"seedHash",0);v(this,"hollowWave",!1);v(this,"hollowShift",0);v(this,"secA",0);v(this,"secB",-1);v(this,"secPeak",0);v(this,"breakS",0);v(this,"arrival",0);v(this,"peeling",!1);v(this,"peelBlend",0);v(this,"time",0);v(this,"tab",[]);v(this,"bS",NaN);v(this,"bPB",NaN);v(this,"bK",0);v(this,"bG",0);v(this,"bX",0);v(this,"bPow",0);v(this,"bTop",0);this.p={...Qb,...e},this.reset(t)}get A0(){return this.p.A0}get length(){return this.p.length}reset(t){this.seed=t,this.seedHash=iS(t),this.hollowWave=Yn(dn.coinKey,this.seedHash)<dn.waveP,this.hollowShift=0;const e=this.p.length-45,n=[];for(let l=0;l<e;l+=1)n.push(ke(l/28,this.seedHash));n.sort((l,h)=>l-h);const i=n[Math.floor(dn.calmShare*n.length)]??0;i>dn.calmBelow&&(this.hollowShift=i-dn.calmBelow);const r=Ci,o=r.lenMin+r.lenSpan*Yn(91001,this.seedHash);this.secA=r.aMin+r.aSpan*Yn(91002,this.seedHash),this.secB=this.hollowWave?this.secA+o:-1;const a=Yn(91003,this.seedHash)<r.deepP,c=Yn(91004,this.seedHash);this.secPeak=a?sn(r.deepLo,r.deepHi,c):sn(r.medLo,r.medHi,c),this.tab=[],this.bS=NaN,this.breakS=this.p.startS,this.arrival=0,this.peeling=!1,this.peelBlend=0,this.time=0}update(t){if(!(t>0)||!Number.isFinite(t))return;this.time+=t;let e=t;if(!this.peeling){const n=(1-this.arrival)*this.p.arrivalTime;if(e<n){this.arrival=Math.min(1,this.arrival+e/this.p.arrivalTime);return}this.arrival=1,this.peeling=!0,this.peelBlend=0,e-=n}for(;e>1e-12;){const n=Math.min(e,nS);this.peelBlend=Math.min(1,this.peelBlend+n/eS),this.breakS+=this.peelSpeed(this.breakS)*n,e-=n}}d(t){const e=t-this.breakS;return this.peeling?e:Math.abs(e)}breakBlend(t){return k(-2,1,t-this.breakS)}closeout(t){const e=this.p.length-Gd;return k(e-Vd,e,t)}power(t){return this.cached(1,t)}powerImpl(t){let e=0;const n=Ci;if(this.secB>this.secA&&t>this.secA-n.upLen&&t<this.secB+n.outLen){const i=this.sectionWeight(t),r=this.sectionHollow(t);e=i*r*k(Ci.powerFrom,.6,r)}return Math.max(ke(t/28,this.seedHash),e,.8*this.closeout(t))}sectionWeight(t){const e=Ci,n=this.secA-e.upLen,i=this.secB+e.outLen;return!(this.secB>this.secA)||t<=n-e.blend||t>=i+e.blend?0:t>=n&&t<=i?1:k(n-e.blend,n,t)*(1-k(i,i+e.blend,t))}sectionEnding(t){return this.secB>this.secA?k(this.secA,this.secA+Ci.riseLen,t):1}sectionHollow(t){const e=Ci,n=this.secA,i=this.secB;if(t<=n){const r=n-t;if(r<=e.curtLen)return .6-(.6-e.curtFrom)*(r/e.curtLen);const o=r>=e.upLen?0:1-(r-e.curtLen)/(e.upLen-e.curtLen);return e.upFrom+(e.curtFrom-e.upFrom)*o*o}if(t<=i){const r=k(n,n+e.riseLen,t),o=1-(1-e.tailK)*k(n+e.riseLen,i-e.fallLen,t),a=k(i-e.fallLen,i,t);return .6+(this.secPeak-.6)*r*o*(1-a)}return .6-(.6-e.endHol)*k(i,i+e.outLen,t)}hollow(t){return this.cached(0,t)}cached(t,e){const n=(e-Ln.T0)/Ln.DX;let i=this.tab[t];if(i||(i=this.tab[t]=new Float64Array(Math.ceil((this.p.length+90)/Ln.DX)+2).fill(NaN)),!(n>=0)||n>=i.length-1)return this.compute(t,e);const r=n|0;let o=i[r];o!==o&&(o=i[r]=this.compute(t,Ln.T0+r*Ln.DX));let a=i[r+1];return a!==a&&(a=i[r+1]=this.compute(t,Ln.T0+(r+1)*Ln.DX)),o+(a-o)*(n-r)}compute(t,e){return t===0?this.hollowImpl(e):t===1?this.powerImpl(e):this.paceImpl(e)}hollowImpl(t){let e=ke(t/28,this.seedHash)-this.hollowShift;e<0&&(e=0),e>dn.knee&&(e=dn.knee+dn.span*(1-Math.exp(-(e-dn.knee)/dn.span)));const n=this.sectionWeight(t);n>0&&(e=sn(e,this.sectionHollow(t),n));const i=this.p.length-Gd-Vd;return e*=1-dn.preCloseCut*k(i-dn.preCloseIn,i-dn.preCloseFull,t),Math.max(e,.8*this.closeout(t))}peelSpeed(t){const e=this.power(t),n=zs.base+zs.hollowGain*e*e,i=this.cached(2,t);return(i>0&&n<zs.barrelPace?n+(zs.barrelPace-n)*i:n)+10*this.closeout(t)}paceImpl(t){const e=this.sectionWeight(t);return e>0?e*k(Ci.paceFrom,Ci.paceFull,this.sectionHollow(t)):0}faceAmp(t,e){return this.p.A0*(.45+.55*Math.exp(-t/35))*(1+.2*e)}whiteAmp(t,e){return this.p.A0*(.4+.6*Math.exp(t/2.5))*(1+.2*e)}amp(t){return this.ampImpl(t,!0)}swellAmp(t){return this.ampImpl(t,!1)}ampImpl(t,e){const n=t-this.breakS,i=e?this.barrelAmpWeight(t):0,r=i>0&&n>0?sn(this.power(t),this.bPow,i):this.power(t);let o;if(!this.peeling)o=this.faceAmp(Math.abs(n),r)*(.3+.7*this.arrival);else{const a=k(-2,1,n),c=sn(this.whiteAmp(Math.min(n,0),r),this.faceAmp(Math.max(n,0),r),a);o=this.peelBlend>=1?c:sn(this.faceAmp(Math.abs(n),r),c,this.peelBlend)}return i>0&&(o+=i*((n>0?this.bTop:this.faceAmp(0,r)*(1+li.grow))-o)),t>this.p.length&&(o*=Math.exp(-(t-this.p.length)/10)),o>Wd?o:Wd}breakTunnel(){this.bS=this.breakS,this.bPB=this.peelBlend;const t=this.hollow(this.breakS),e=this.breakS;this.bX=this.secB>this.secA&&e>=this.secB-5?1-k(this.secB+mn.fall0,this.secB+mn.fall1,e):0,this.bK=Math.max(k(li.hol0,li.hol1,t),this.bX)*this.peelBlend;const n=this.breakS;this.bG=this.secB>this.secA?k(this.secA+mn.rise0,this.secA+mn.rise1,n)*(1-k(this.secB+mn.fall0,this.secB+mn.fall1,n))*this.peelBlend:0,this.bPow=this.power(this.breakS),this.bTop=this.faceAmp(0,this.bPow)*(1+li.grow)}barrelAmpWeight(t){if(!this.peeling||!this.hollowWave)return 0;const e=t-this.breakS;if(e>=0){if(e>=mn.out1)return 0;(this.breakS!==this.bS||this.peelBlend!==this.bPB)&&this.breakTunnel();const o=this.bK,a=this.bG;if(o<=0&&a<=0)return 0;const c=a>0?a*(1-k(mn.out0,mn.out1,e)):0,l=3+(mn.nearLen-3)*a;if(e>=l)return c;const h=k(0,l,e);return o+(c-o)*h}const n=this.hollow(t);(this.breakS!==this.bS||this.peelBlend!==this.bPB)&&this.breakTunnel();const i=Math.max(n>li.hol0?k(li.hol0,li.hol1,n):0,this.bX);if(i<=0)return 0;const r=Math.max(1.5+5*n,mn.backMin);return e<=-r-li.closeLen?0:i*k(-r-li.closeLen,-r,e)*this.peelBlend}faceWidth(t,e=this.amp(t)){const n=this.power(t),i=t-this.breakS,r=(a,c)=>{const l=Math.exp(-a/12),h=1.7-.85*n*l,u=1+1.4*(1-Math.exp(-a/45));return h*u*c};let o;if(!this.peeling)o=r(Math.abs(i),1);else{const a=this.barrelAmpWeight(t);if(a>0){const c=i>0?sn(n,this.bPow,a):n,l=1+mn.stretch*a,h=(d,f)=>{const m=d/l;return(1.7-.85*c*Math.exp(-m/12))*(1+1.4*(1-Math.exp(-m/45)))*f},u=h(Math.max(i,0),sn(sn(1.6,1,k(-2,1,i)),1,a));o=this.peelBlend>=1?u:sn(h(Math.abs(i),1),u,this.peelBlend)}else{const c=r(Math.max(i,0),sn(1.6,1,k(-2,1,i)));o=this.peelBlend>=1?c:sn(r(Math.abs(i),1),c,this.peelBlend)}}return Math.max(.6,e*o)}heightAt(t,e){const n=this.amp(t);if(e<0){const o=e/(2.4*n);return n*Math.exp(-o*o)}const i=this.faceWidth(t,n);if(e>=i)return 0;const r=1-e/i;return n*r*r}facePoint(t,e,n){const i=this.amp(t),r=this.faceWidth(t,i),o=e<0?0:e,a=o<1?1-o:0,c=i*a*a,l=2*i*a,h=Math.sqrt(r*r+l*l),u=n??{};return u.u=o*r,u.y=c,u.A=i,u.W=r,u.m=h,u.sinA=l/h,u}lipReach(t){if(!this.peeling)return 0;const e=t-this.breakS;if(e<=-3)return 0;const n=Dt(1+e/3,0,1),i=Math.exp(-Math.max(e,0)/5),r=sn(n,i,k(-2,1,e)),o=this.closeout(t),a=o>0?1-tS*k(.1,.5,o):1;return this.amp(t)*.95*this.hollow(t)*r*this.peelBlend*a}barrelReach(t){const e=this.lipReach(t),n=this.barrelShape(t);if(n<=0)return e;const i=ye.cover*this.faceWidth(t)*n;return i>e?i:e}barrelShape(t){if(!this.peeling||!this.hollowWave)return 0;const e=this.hollow(t),n=k(ye.hol0,ye.hol1,e);if(n<=0)return 0;const i=t-this.breakS,r=1.5+5*e;if(i<=-r-ye.closeLen||i>=ye.ahead)return 0;const o=this.closeout(t);if(o>=.45)return 0;const a=k(ye.hol0,ye.hol1,this.hollow(this.breakS)),c=ye.aheadFull*a,l=ye.aheadMin+(ye.ahead-ye.aheadMin)*a;return n*k(-r-ye.closeLen,-r,i)*(1-k(c,l,i))*this.peelBlend*(1-k(.3,.45,o))}lift(t,e){const n=e<0?0:e;let i=1.2*k(1,1.1,n);return n<1&&(i+=this.p.liftMax*Math.pow(1-n,.75)*(this.swellAmp(t)/this.p.A0)),i}get finished(){return this.peeling&&this.breakS>this.p.length+10}};v(Ln,"T0",-30),v(Ln,"DX",.1);let oh=Ln;const ae=14,ah=12,sS=.55,Xd=2*Math.PI/ah;function Rm(s,t){const e=s-t;return e<=-ah/2||e>=ah/2?s:s-sS*Math.sin(Xd*e)/Xd}const Cm=.7,Ta={arch:.75,c1u:.5,c1y:1.3,c1uA:1,c1yA:-.2,throwD0:1.2,throwD1:3.2,c2u:1.3,c2y:.95,tipK:0,land:1.18};function Ha(s,t){return Rm(t,s.breakS)}function za(s,t,e=s.barrelReach(t),n=s.lipReach(t)){let i=s.hollowWave&&s.peeling?k(ye.hol0,ye.hol1,s.hollow(t))*s.peelBlend:0;return i>0&&(i*=1-k(.1,.5,s.closeout(t))),Math.max(e>1e-6?(e-n)/e:0,s.barrelShape(t),i)}function Pm(s,t,e,n,i,r){const o=s.barrelReach(t),a=s.lipReach(t),c=za(s,t,o,a),l=.12+(Cm-.12)*c,h=Math.min(o*1.1,e*.85),u=Ta,d=u.arch*e,f=s.peeling?k(u.throwD0,u.throwD1,t-s.breakS):0,m=u.c1u+(u.c1uA-u.c1u)*f,_=u.c1y+(u.c1yA-u.c1y)*f;for(let g=0;g<ae;g++){const p=g/(ae-1);let M,y;if(o<=.02)M=-.02,y=e-.01;else{const x=p*Math.PI*.8;if(M=o*Math.sin(x),y=e-h+h*Math.cos(x)+o*l*Math.sin(x),c>0){const w=1-p,R=w*w*w,L=3*w*w*p,T=3*w*p*p,b=p*p*p,D=(L*m+T*u.c2u+b*u.land)*o,z=R*e+L*(e+_*d)+T*(e+u.c2y*d)+b*u.tipK*e;M+=(D-M)*c,y+=(z-y)*c}let I=0;if(M<0){const w=M/(2.4*e);I=e*Math.exp(-w*w)}else if(M<n){const w=1-M/n;I=e*w*w}y<I+.04&&(y=I+.04)}i[g]=M,r[g]=y}return o>.02}const fa={c1u:.6,c1y:.12,c1uA:.8,c1yA:-.25,c2u:1.3,c2y:.85,land:1.18,kA:1.1,cap:.035,capK:.06},$r={c2uH:1,grow:.22,dome1:.25,dome2:.25,capUp:.15,fadeD0:-1.9,fadeD1:1.2};function Lm(s,t){if(!(s.hollowWave&&s.peeling))return 0;let e=k(ye.hol0,ye.hol1,s.hollow(t))*s.peelBlend;return e>0&&(e*=(1-k(.1,.5,s.closeout(t)))*s.barrelShape(t)*k($r.fadeD1,$r.fadeD0,t-s.breakS)),e}const fi={reachR:12,shape0:1.2,shape1:2.4,q1u:.55,q2y:.45,capR:1.48,capK:2.5,capL:.45};function Im(s,t,e,n){if(!(s.hollowWave&&s.peeling))return n;const i=t-s.breakS,r=k(ye.hol0,ye.hol1,s.hollow(s.breakS)),o=ye.aheadFull*r;if(r<=0||i<=o||i>=o+fi.reachR)return n;const a=k(ye.hol0,ye.hol1,s.hollow(t));if(a<=0)return n;const c=s.closeout(t);if(c>=.45)return n;let l=ye.cover*e*a*r*(1-k(o,o+fi.reachR,i))*s.peelBlend*(1-k(.3,.45,c));const h=fi.capR+fi.capK*Math.max(0,s.lipReach(t)-fi.capL);return l>h&&(l=h),l>n?l:n}function Dm(s,t,e){const n=Math.min(fa.land*Im(s,t,s.faceWidth(t,e),s.barrelReach(t)),fa.kA*e),i=Lm(s,t);return i>0?n+(fa.kA*e*(1+$r.grow)-n)*i:n}function Wh(s,t,e,n,i,r){const o=Im(s,t,n,s.barrelReach(t)),a=s.lipReach(t),c=za(s,t,o,a),l=.12+(Cm-.12)*c,h=Math.min(o*1.1,e*.85),u=fa,d=s.peeling?k(Ta.throwD0,Ta.throwD1,t-s.breakS):0;let f=u.c1u+(u.c1uA-u.c1u)*d,m=u.c1y+(u.c1yA-u.c1y)*d,_=u.c2y;const g=s.hollowWave?$r.c2uH:u.c2u;let p=Math.min(u.land*o,u.kA*e),M=Math.min(1,p/Math.max(.001,e)),y=e*(1+u.cap);const x=c>0?Lm(s,t):0;if(x>0){const w=$r;p+=(u.kA*e*(1+w.grow)-p)*x,M=Math.min(1,p/Math.max(.001,e)),m+=w.dome1*x,_+=w.dome2*x,y=e*(1+u.cap+w.capUp*x)}if(s.hollowWave&&d>0){const w=d*(1-k(fi.shape0,fi.shape1,p));w>0&&(f+=(fi.q1u-f)*w,m-=m*w,_+=(1-fi.q2y-_)*w)}const I=e*u.capK;for(let w=0;w<ae;w++){const R=w/(ae-1);let L,T;if(o<=.02)L=-.02,T=e-.01;else{const b=R*Math.PI*.8;if(L=o*Math.sin(b),T=e-h+h*Math.cos(b)+o*l*Math.sin(b),c>0){const z=1-R,F=3*z*z*R,W=3*z*R*R,K=R*R*R,Y=(F*f+W*g+K)*p,Z=e+e*(F*m+W*(_-1)*M-K*M);L+=(Y-L)*c,T+=(Z-T)*c}T>y-I&&(T=y-I+I*Math.tanh((T-(y-I))/I));let D=0;if(L<0){const z=L/(2.4*e);D=e*Math.exp(-z*z)}else if(L<n){const z=1-L/n;D=e*z*z}T<D+.04&&(T=D+.04)}i[w]=L,r[w]=T}return o>.02}function Nm(s,t,e){let n=1/0;for(let i=0;i+1<ae;i++){const r=s[i],o=s[i+1];if((r-e)*(o-e)<=0&&r!==o){const a=(e-r)/(o-r),c=t[i]+a*(t[i+1]-t[i]);c<n&&(n=c)}}return Number.isFinite(n)?n:NaN}const qd=new Float32Array(ae),Kd=new Float32Array(ae);function ch(s,t,e){const n=Ha(s,t),i=Math.max(s.amp(n),.001),r=s.faceWidth(n,i);return Pm(s,n,i,r,qd,Kd)?Nm(qd,Kd,e)-s.heightAt(t,e):NaN}const Br=new Float32Array(ae),Hr=new Float32Array(ae);function Yd(s,t,e){const n=Ha(s,t),i=Math.max(s.amp(n),.001),r=s.faceWidth(n,i);return Wh(s,n,i,r,Br,Hr)?Nm(Br,Hr,e)-s.heightAt(t,e):NaN}const jd=[.1,.35,.6,.85,1.1],rS=10.4;function oS(s,t,e,n,i,r,o,a){const c=e-s,l=n-t,h=o-i,u=a-r,d=c*u-l*h;if(Math.abs(d)<1e-9)return!1;const f=i-s,m=r-t,_=(f*u-m*h)/d,g=(f*l-m*c)/d;return _>=0&&_<=1&&g>=0&&g<=1}function aS(s,t,e){const n=Ha(s,t),i=Math.max(s.amp(n),.001),r=s.faceWidth(n,i);if(!Wh(s,n,i,r,Br,Hr))return 0;const o=s.heightAt(t,e),a=e+rS,c=1+.4*i;let l=0;for(const h of jd)for(let u=0;u+1<ae;u++)if(oS(e,o+h,a,c,Br[u],Hr[u],Br[u+1],Hr[u+1])){l++;break}return l/jd.length}const Pc=1,$d=.25,Lc=16;function Zd(s,t,e){return ch(s,t,Math.max(0,e)*s.faceWidth(t))}function cS(s,t,e,n={dist:0,size:0}){let i=0;for(;i<=Lc&&Zd(s,t+i,e)>=Pc;)i+=$d;if(i>0&&i<=Lc){let a=i-$d,c=i;for(let l=0;l<4;l++){const h=.5*(a+c);Zd(s,t+h,e)>=Pc?a=h:c=h}i=.5*(a+c)}const r=Math.min(i,Lc),o=Math.max(Pc,s.amp(t+r));return n.dist=r,n.size=2*Math.atan(o/2/(r+1)),n}const Ea=9.81,Ic=16,lS=3,Ds=.02,hS=1.2,uS=.6,Ho=-1.5,Dc=1.25,dS="load",lh={dragLin:.05,dragQuad:.0375,dragHi:3.5,vHi:11.5,liftScale:3.2,liftShoulder:.15,liftPocketL:4,liftHollow:.3,lipZeroT:.03,lipTaperT:.15,dropCut:1,dropSin0:.45,dropSin1:.7,dropT0:.3,dropT1:.5,dropV0:6,dropV1:8,liftAlongM:1,handsOffTrim:.25,handsOffK:2,handsOffT:.3,handsOffMin:-.2,handsOffMax:.7,beta:1,wMin:.6,wMax:1.4,lRef:.5,loadMaxTurn:2*Math.PI,loadMinSwing:.3,loadMaxSkid:.6,rollTau:.12,boardRate:16,carveR:1.2,carveLat:40,skidK:3.2,skidFree:.1,skidWipeLip:1.95,skidWipeMid:1.7,skidWipeLow:1.3,skidWipeSlow:1,slowV1:4.5,slowV2:6.5,skidLipMidT0:.15,skidLipMidT1:.35,skidMidLowT0:.64,skidMidLowT1:.86,skidSlowT0:.15,skidSlowT1:.5,skidSlide:.4,slideHbRate0:6,slideHbRate1:10,slideHvRate0:3,slideHvRate1:6,slideV0:4,slideV1:5.5,slideT0:.5,slideT1:.8,slideJerk0:55,slideJerk1:62,slideJerkTau:.02,skidSlideMax:2.2,slideVDecay:2,lipUpSin:.3,lipUpTime:.6,lipCapTime:1.5,lipMinV:2.5,lipClimbG:0,foamK:.035,hollowLip:.6,lipLandMaxT:1,fellBehindD:-25,foamD:-4.5,foamMaxTime:7,foamStuckTime:2.5,foamSteerTime:5,foamHardV:6.5,foamHeadOn:38*Math.PI/180,foamReboundRate:.8,trimV:7.6,trimK:3,trimSin0:.22,trimSin1:.32,trimT0:.12,trimT1:.2,trimStall0:.08,trimStall1:.2,trimTurn0:.6,trimTurn1:1.2,carryK:.8,carryD0:.5,carryD1:-1.5,carryTauIn:.25,carryTauOut:.6,carryMaxD:12,carryFadeD:16,carryV0:3.3,carryV1:4.3,carryOutK:2,carryOutD0:2,carryOutD:8,carryOutMaxV:11.5,carryOutSpinTau:4,carryOutSpin0:2,carryOutSpin1:3,carryOutTurn0:4,carryOutTurn1:5,carryOutSin0:.66,carryOutSin1:.8,lipGrace:.25,stuckD:5,carryMinV:3.8,foamPassiveK:.6,headOnMinV:4.4,headOnTime:.3,stuckTime:1.2,stallK:.9,driveDragCut:.15,driveAccel:1.5,boostDv:1.8,boostTime:.45,boostVMax:10,boostVFade:8,boostGap:1,boostD0:-3,boostD1:14,boostTopT:.22,boostSin:.4,boostSinIn:.6,boostReWin:1,boostReMaxT:.5,boostReV:5,boostLowT:.55,boostBotWin:1.2,boostBotMinT:.35,boostBotMaxT:.92,boostBotV:6.5,boostTurn:1.1,boostDrop:.3,boostBotSinIn:.8,boostCutTurn:2.4,boostCutV:6,tubeStayTMin:0,tubeMouthD:.5,tubeStayTMax:1.1,tubeSlowV:3,tubeUpSin:.5,tubeStayHol:.56,tubeShapeIn:.5,tubeReleaseHol:.72,tubeMinMade:1,tubeAheadNeed:8,tubeBackOffF:.85,missAheadD:1.5,missAheadTime:3,curtainLiftCut:.5,nbCut:.6,nbCutD0:4,nbCutD1:9,nbSin0:-.15,nbSin1:-.02,nbSin2:.3,nbSin3:.45,nbT0:.08,nbT1:.14,nbTurn0:3,nbTurn1:5,nbHol0:.52,nbHol1:.58,lipLandGrace:1.05,tubeTK:3,tubeNudge:.15,tubeLineMin:.1,tubeLineMax:.88,tubeRelTau:.25,tubeWorkTau:.05,tubeRiseTau:.8,tubeRelAccel:2.5,tubeNeutral0:.15,tubeCoastK:.2,tubeCoastReset:6,tubeStallRel:4,tubeWorkRel:5,tubeDriveRel:1.2,tubeRelMin:-2.5,tubeDeepF0:.7,tubeDeepF1:.85,tubeDeepSuck:2,tubeVMax:12.5,tubeCosMin:.85,tubeBoardVMax:13,tubeVTau:.1,tubeVAccel:15,spitHol:.8,spitExitHol:.585,spitMinTime:.5,spitMouthD:1,spitRel:.8,tubeHeadroom:1.27,tubeOutShape:.15,tubeEnterHold:.04,tubeRoofMin:1,tubeFreeRoom:.75,tubeFreeK:1,tubeFreePumpCut:0,tubeFreeIn:.75,tubeFreeOut:.75,tubeFreeShapeIn:.15,tubeFreeOutDrawn:.3,tubeFreeAhead:2,tubeFreeVMin:6.5,tubePumpF0:.15,tubePumpF1:.35,tubePumpTau:.06,tubePumpRail0:.35,tubePumpGap:.6,tubePumpSeg:.9,tubePumpSwing:.3,entrySuck:0,pumpDv:2.9,rhythmMax:2.5,pumpClimb:.08},fS={...lh,dragQuad:.011,dragHi:.3,vHi:10,liftScale:.35,nbCut:0,liftShoulder:.5,liftPocketL:6,liftHollow:0,lipTaperT:.15,liftAlongM:0,dropCut:0,carveR:1.6,carveLat:40},pS=.25,mS=.45,gS=.15,_S=.3,vS=.3,zo=Math.PI-.05,xS=1.5,MS=.08,yS=.08,Yt={minV:5.5,minSin:.55,lipDwell:.1,kVy:.7,g:Ea,catchTau:.015,spinMax:13,tol:.6,foamD:-4.5,carryPeel:1,snapGate:.8,airSteerRate:8,scissorGain:8.5,scissorDeadV:.1,scissorCap:9.5,lineT:.45,settleT:.18,settleTau:.05,settleMax:1.1,landCarryT:2.5,landCarryDv:6,flatSin0:.8,flatSin1:.92,qErr:.9,qFlat:.5,qMin:.05,flatLoss:.12,slowDepth:.45,slowHw:.2,slowHwK:.25,revertRate:5,revertEase:.8,revertDrag:.35,liftWin:.35,liftLipWin:.15,liftFwdCos:.1},Jd=["Straight Air","Air Reverse","360"],Aa=1/60;function Nc(s,t){return 1-Math.pow(1+Aa/t,-s/Aa)}const Fc={grip:!1,targetHeading:null,stall:0,drive:0},Qd=50*Math.PI/180;class Zr{constructor(t){v(this,"s",0);v(this,"t",.25);v(this,"v",0);v(this,"hb",0);v(this,"hv",0);v(this,"skid",0);v(this,"stall",0);v(this,"drive",0);v(this,"state","idle");v(this,"pumpModel",dS);v(this,"turnRate",0);v(this,"d",0);v(this,"face",{u:0,y:0,A:0,W:0,m:0,sinA:0});v(this,"accel",0);v(this,"pumpAccel",0);v(this,"pumpLeft",0);v(this,"skidDecel",0);v(this,"roll",0);v(this,"railRate",0);v(this,"railRate1",0);v(this,"load",0);v(this,"pumpF",0);v(this,"railSide",0);v(this,"railSideAt",-1e9);v(this,"railFlipAt",-1e9);v(this,"railFlipSeg",1e9);v(this,"railSideHv",0);v(this,"railSegMax",0);v(this,"tubeRel",0);v(this,"tubeLine",.5);v(this,"tubeHRef",0);v(this,"tubeCoast",0);v(this,"zoneFor",0);v(this,"behindLip",!1);v(this,"behindFor",0);v(this,"frontSeen",!1);v(this,"weight",1);v(this,"inTube",!1);v(this,"tubeMode","lock");v(this,"tubeWhy","");v(this,"tubeTime",0);v(this,"spat",!1);v(this,"spitRide",!1);v(this,"tubeHeight",0);v(this,"tubeHolMax",0);v(this,"missArmed",!0);v(this,"aheadFor",0);v(this,"rideTime",0);v(this,"lipUpTime",0);v(this,"lipTime",0);v(this,"carveRate",0);v(this,"foamTime",0);v(this,"foamRun",0);v(this,"spinNet",0);v(this,"headOnFor",0);v(this,"stuckFor",0);v(this,"carry",0);v(this,"notOutFor",1e9);v(this,"turnAccum",0);v(this,"prevSwing",0);v(this,"turnRateF",0);v(this,"boardRateF",0);v(this,"slideAllow",0);v(this,"vTurn",0);v(this,"targetRateF",0);v(this,"jerkMem",0);v(this,"lastTarget",NaN);v(this,"turningDown",!1);v(this,"boostMode","off");v(this,"boostCount",0);v(this,"boostKind","");v(this,"boostAt",-1e9);v(this,"boostLeft",0);v(this,"boostTopAt",-1e9);v(this,"boostLowAt",-1e9);v(this,"boostHiT",0);v(this,"boostCutArmed",!0);v(this,"airMode","off");v(this,"airborne",!1);v(this,"airT",0);v(this,"airHeight",0);v(this,"airYaw",0);v(this,"airSpin",0);v(this,"airDur",0);v(this,"airPeak",0);v(this,"airFlip",0);v(this,"timeScale",1);v(this,"landAge",1/0);v(this,"airCaught",!1);v(this,"airLaunch","auto");v(this,"liftAge",1/0);v(this,"prevGrip",!1);v(this,"holdTarget",NaN);v(this,"lipV",0);v(this,"lipSin",0);v(this,"lipHv",0);v(this,"lipLift",!1);v(this,"lineDir",1);v(this,"airSettleFrom",-1);v(this,"landFlat",0);v(this,"landQuality",0);v(this,"revertLeft",0);v(this,"airHb0",0);v(this,"airHv0",0);v(this,"airVy",0);v(this,"lastPumpAt",-1e9);v(this,"prevSin",0);v(this,"peakSinUp",0);v(this,"maxTSince",0);v(this,"events",[]);this.wave=t}setWave(t){this.wave=t}get riding(){return this.state==="riding"}static skidLimit(t,e){const n=lh,i=n.skidWipeLip+(n.skidWipeMid-n.skidWipeLip)*k(n.skidLipMidT0,n.skidLipMidT1,t)+(n.skidWipeLow-n.skidWipeMid)*k(n.skidMidLowT0,n.skidMidLowT1,t),r=Dt((t-n.skidSlowT0)/(n.skidSlowT1-n.skidSlowT0),0,1),o=Math.min(i,n.skidWipeLip+(n.skidWipeSlow-n.skidWipeLip)*r);return o+(i-o)*k(n.slowV1,n.slowV2,e)}spawn(t,e,n,i){return!Number.isFinite(t)||!Number.isFinite(e)||!Number.isFinite(n)||!Number.isFinite(i)?!1:(this.s=t,this.t=Dt(e,Ds,Dc),this.v=Dt(n,0,Ic),this.hb=i,this.hv=i,this.lineDir=Math.cos(i)<0?-1:1,this.skid=0,this.skidDecel=0,this.accel=0,this.pumpAccel=0,this.pumpLeft=0,this.stall=0,this.drive=0,this.roll=0,this.railRate=0,this.railRate1=0,this.load=0,this.pumpF=0,this.railSide=0,this.railSideAt=-1e9,this.railFlipAt=-1e9,this.railFlipSeg=1e9,this.tubeRel=0,this.tubeCoast=0,this.zoneFor=0,this.behindLip=!1,this.behindFor=0,this.frontSeen=!1,this.weight=1,this.missArmed=!0,this.aheadFor=0,this.state="riding",this.turnRate=0,this.turnRateF=0,this.boardRateF=0,this.slideAllow=0,this.vTurn=n,this.targetRateF=0,this.jerkMem=0,this.lastTarget=NaN,this.turningDown=!1,this.boostCount=0,this.boostKind="",this.boostAt=-1e9,this.boostLeft=0,this.boostTopAt=-1e9,this.boostLowAt=-1e9,this.boostHiT=this.t,this.boostCutArmed=!0,this.turnAccum=0,this.prevSwing=0,this.foamTime=0,this.foamRun=0,this.spinNet=0,this.headOnFor=0,this.stuckFor=0,this.carry=0,this.notOutFor=1e9,this.inTube=!1,this.spitRide=!1,this.tubeTime=0,this.tubeHeight=0,this.rideTime=0,this.lipUpTime=0,this.lipTime=0,this.lastPumpAt=-1e9,this.prevSin=Math.sin(i),this.peakSinUp=Math.max(0,this.prevSin),this.maxTSince=this.t,this.airborne=!1,this.airT=0,this.airHeight=0,this.airYaw=0,this.airSpin=0,this.airDur=0,this.airPeak=0,this.airFlip=0,this.timeScale=1,this.landAge=1/0,this.landFlat=0,this.landQuality=0,this.revertLeft=0,this.prevGrip=!1,this.liftAge=1/0,this.holdTarget=NaN,this.lipLift=!1,this.lipV=0,this.lipSin=0,this.lipHv=0,this.airCaught=!1,this.airSettleFrom=-1,this.events.length=0,this.d=this.wave.d(t),this.wave.facePoint(this.s,this.t,this.face),!0)}drain(){if(this.events.length===0)return bS;const t=this.events;return this.events=[],t}tryLaunch(t){return!1}get airTravel(){return Math.cos(this.airHv0)>=0?1:-1}setAirSpin(t){!this.airborne||!Number.isFinite(t)||(this.airSpin=Dt(t,-13,Yt.spinMax))}get lean(){return this.roll}step(t,e=Fc){if(this.state!=="riding"||!(t>0)||!Number.isFinite(t))return;if(this.airLaunch==="lift"&&this.trackLift(t,e),this.airborne)return this.airStep(t,e);e!==Fc&&(e.scissor!==void 0&&(e.scissor=0),e.scissorDt!==void 0&&(e.scissorDt=0));const n=this.wave,i=this.pumpModel==="impulse"?fS:lh;this.rideTime+=t,this.airMode==="on"&&(this.landAge+=t);const r=Number.isFinite(e.stall)?Dt(e.stall,0,1):0,o=e.drive!==void 0&&Number.isFinite(e.drive)?Dt(e.drive,0,1):0;this.stall=r,this.drive=o;let a,c;if(e.grip&&e.targetHeading!==null&&Number.isFinite(e.targetHeading))a=e.targetHeading,c=i.boardRate;else if(this.airLaunch==="lift"&&this.liftAge<=Yt.liftWin&&Number.isFinite(this.holdTarget))a=this.holdTarget,c=i.boardRate;else{const C=Math.round(this.hb/Math.PI),ot=Dt(i.handsOffTrim+i.handsOffK*(i.handsOffT-this.t),i.handsOffMin,i.handsOffMax);a=C*Math.PI+((C&1)===0?-ot:ot),c=lS}const l=e.grip&&e.targetHeading!==null&&Number.isFinite(e.targetHeading)?e.targetHeading:NaN,h=Number.isFinite(l)&&Number.isFinite(this.lastTarget)?Math.abs(l-this.lastTarget)/t:0;this.lastTarget=l,this.targetRateF+=(h-this.targetRateF)*(1-Math.exp(-t/i.slideJerkTau));let u;const d=this.revertLeft!==0;if(d){const C=this.revertLeft,ot=Math.min(Math.abs(C),Yt.revertRate*Math.min(1,.3+Math.abs(C)/Yt.revertEase)*t);u=C>0?ot:-ot,this.revertLeft=Math.abs(C-u)<1e-9?0:C-u}else{let C=a-this.hb;C>zo?C=zo:C<-zo&&(C=-zo);const ot=c*t;u=C>ot?ot:C<-ot?-ot:C}this.hb+=u;const f=i.carveR*(1+.5*r),m=Ui(this.hb-this.hv),_=Math.max(this.v,1.5),g=Math.min(_/f,i.carveLat/_)*(1+xS*Math.abs(Math.sin(m)));this.carveRate=g;const p=d?0:g*t,M=m>p?p:m<-p?-p:m;this.hv+=M,this.turnRate=M/t,this.skid=Ui(this.hb-this.hv);const y=1-Math.exp(-t/yS);this.turnRateF+=(this.turnRate-this.turnRateF)*y,this.boardRateF+=(u/t-this.boardRateF)*y;const x=1-Math.exp(-t/i.rollTau);this.railRate1+=(this.turnRate-this.railRate1)*x,this.railRate+=(this.railRate1-this.railRate)*x,this.roll=SS(this.v,this.railRate),this.turnAccum*this.railRate<0&&(this.prevSwing=Math.abs(this.turnAccum),this.turnAccum=0),this.turnAccum+=M;const I=n.facePoint(this.s,this.t,this.face),w=this.d,R=n.d(this.s);this.d=R;const L=Math.sin(this.hv);this.t>Yt.lineT&&Math.abs(Math.cos(this.hv))>.3&&(this.lineDir=Math.cos(this.hv)<0?-1:1);const T=Math.cos(this.hv),b=this.v,D=Math.abs(Math.sin(this.skid))-i.skidFree;this.skidDecel=D>0?i.skidK*D*D*b:0,d&&(this.skidDecel*=Yt.revertDrag);const z=this.t<=Ds&&L>0?i.lipClimbG*L:L;let F=1;if(this.pumpModel==="load"){const C=this.v*this.railRate/Ea;let ot=Math.min(1,(Math.sqrt(1+C*C)-1)/i.lRef);Math.abs(this.turnAccum)>i.loadMaxTurn||this.prevSwing<i.loadMinSwing?ot=0:ot*=1-k(.5*i.loadMaxSkid,i.loadMaxSkid,Math.abs(this.skid)),this.load=ot;const et=z<0?1:z>0?-1:0;F=Dt(1+i.beta*et*ot,i.wMin,i.wMax)}else this.load=0;this.weight=F;const W=this.railRate1>i.tubePumpRail0?1:this.railRate1<-i.tubePumpRail0?-1:0,K=Math.abs(this.hv-this.railSideHv);if(K>this.railSegMax&&(this.railSegMax=K),W!==0&&W!==this.railSide){if(this.railSide!==0){const C=this.railSegMax>=i.tubePumpSwing;this.railFlipSeg=C?this.rideTime-this.railSideAt:1e9,this.railFlipAt=this.rideTime}this.railSide=W,this.railSideAt=this.rideTime,this.railSideHv=this.hv,this.railSegMax=0}const Y=this.rideTime-this.railFlipAt<i.tubePumpGap&&this.railFlipSeg<i.tubePumpSeg?1:0;this.pumpF+=(Y-this.pumpF)*Nc(t,i.tubePumpTau);const Z=(i.dragLin*b+i.dragQuad*b*b+(b>i.vHi?i.dragHi*(b-i.vHi)*(b-i.vHi):0))*(1-i.driveDragCut*o),H=this.inTube;let rt=-Ea*I.sinA*z*F-Z-this.skidDecel-i.stallK*r*b+i.driveAccel*o;if(H||(rt-=i.foamK*b*k(0,-3,R)),!H&&R<0&&T>0&&!(e.grip&&r<.5&&b>=i.carryMinV)&&(rt-=i.foamPassiveK*b*k(0,-1,R)*(1-k(i.trimTurn0,i.trimTurn1,Math.abs(this.turnRateF)))),e.grip&&T>0&&b<i.trimV&&i.trimK>0&&this.t<i.trimT1&&L<.1&&-L<i.trimSin1&&R>-1&&r<1&&Math.abs(this.turnRateF)<i.trimTurn1){const C=k(-.1,.05,-L)*(1-k(i.trimSin0,i.trimSin1,-L))*k(-1,.5,R)*(1-k(i.trimT0,i.trimT1,this.t))*(1-k(i.trimTurn0,i.trimTurn1,Math.abs(this.turnRateF)))*(1-r)*(1-k(i.trimStall0,i.trimStall1,r));rt+=i.trimK*(i.trimV-b)*C}let ht=0;if(H){const C=k(i.tubePumpF0,i.tubePumpF1,this.pumpF),ot=e.grip?Math.max(o,C):0,et=C>=o?i.tubeWorkRel:i.tubeDriveRel,dt=Math.max(0,this.tubeCoast+t*(1-C)*(1-k(.1,.3,r))-i.tubeCoastReset*(e.grip?C:0)*t);this.tubeCoast=dt;const lt=-i.tubeNeutral0-i.tubeCoastK*dt*dt,Ct=k(i.tubeDeepF0,i.tubeDeepF1,-R/(1.5+5*n.hollow(this.s))),_t=e.grip?Math.max(i.tubeRelMin,(1-ot)*(lt-i.tubeStallRel*r*(2-r))+ot*et*(1-Ct)-i.tubeDeepSuck*Ct):i.tubeRelMin,E=i.tubeRelTau+(i.tubeWorkTau-i.tubeRelTau)*ot;if(_t>this.tubeRel){const S=Aa/Math.log(1+Aa/i.tubeRiseTau),B=_t-this.tubeRel,G=i.tubeRelAccel*S,Q=B>G?(B-G)/i.tubeRelAccel:0;this.tubeRel+=t<=Q?i.tubeRelAccel*t:B-Math.min(B,G)*Math.exp(-(t-Q)/S)}else this.tubeRel+=(_t-this.tubeRel)*Nc(t,E);ht=Dt(n.peelSpeed(n.breakS)+this.tubeRel,0,i.tubeVMax),rt=Dt((Math.min(i.tubeBoardVMax,ht/Math.max(i.tubeCosMin,T))-b)*Nc(t,i.tubeVTau)/t,-i.tubeVAccel,i.tubeVAccel)}this.boostMode==="on"&&(rt+=this.boost(t,e,L,T,R,b,H,i)),this.accel=rt;let ft=b+rt*t;if(ft>0||(ft=0),this.pumpAccel=0,this.pumpModel==="impulse"&&(ft=this.impulsePump(ft,L,T,t,i)),this.v=ft>Ic?Ic:ft,this.spinNet+=this.boardRateF*t-this.spinNet*t/i.carryOutSpinTau,R<i.carryD0||this.carry!==0){let C=0;if(R<i.carryD0&&e.grip&&!this.inTube&&T>0){const et=zs.base*T*(1-n.closeout(this.s))*k(i.carryD0,i.carryD1,R)*k(-i.carryFadeD,-i.carryMaxD,R)*k(i.carryV0,i.carryV1,b)*(1-r),dt=i.carryK*et*(1-k(i.trimTurn0,i.trimTurn1,Math.abs(this.turnRateF))),lt=i.carryOutK*et*k(-i.carryOutD0,-i.carryOutD,R)*(1-k(i.carryOutSin0,i.carryOutSin1,-L))*(1-k(i.carryOutTurn0,i.carryOutTurn1,Math.abs(this.turnRateF)))*(1-k(i.carryOutSpin0,i.carryOutSpin1,Math.abs(this.spinNet)));C=dt+Math.min(lt,Math.max(0,i.carryOutMaxV-b*T-dt))}const ot=C>this.carry?i.carryTauIn:i.carryTauOut;this.carry+=(C-this.carry)*t/(ot+t),this.carry<.001&&C===0&&(this.carry=0)}let At=0;if(this.airMode==="on"&&!H&&this.landAge<Yt.landCarryT&&this.d<0){const C=n.peelSpeed(this.s)+Yt.landCarryDv;At=Math.max(0,C-(b*T+this.carry))*(1-this.landAge/Yt.landCarryT)}this.s+=(H?ht:b*T+this.carry+At)*t;let Pt;if(H&&this.tubeMode==="free"){const C=k(i.tubePumpF0,i.tubePumpF1,this.pumpF);Pt=this.t+-i.tubeFreeK*(1-i.tubeFreePumpCut*C)*Math.max(this.v,i.tubeFreeVMin)*L/I.m*t}else if(H)this.tubeLine=Dt(this.tubeLine-i.tubeNudge*(L-Math.sin(this.tubeHRef))*t,i.tubeLineMin,i.tubeLineMax),Pt=this.t+(this.tubeLine-this.t)*(1-Math.exp(-i.tubeTK*t));else{const C=R>0?R:0,ot=R>0?i.nbCut*(1-k(i.nbCutD0,i.nbCutD1,R))*k(i.nbSin0,i.nbSin1,L)*(1-k(i.nbSin2,i.nbSin3,L))*k(i.nbT0,i.nbT1,this.t)*(1-k(i.nbTurn0,i.nbTurn1,Math.abs(this.turnRateF)))*(1-k(i.nbHol0,i.nbHol1,n.hollow(this.s))):0,et=(i.liftShoulder+(1-i.liftShoulder)*(1-ot)*Math.exp(-C/i.liftPocketL))*(1+i.liftHollow*n.power(this.s)),dt=1.2*k(1,1.1,this.t),lt=1-i.dropCut*k(i.dropSin0,i.dropSin1,-L)*(1-k(i.dropT0,i.dropT1,this.t))*(1-k(i.dropV0,i.dropV1,b)),Ct=(1-i.curtainLiftCut*k(.5,.9,n.barrelShape(this.s)))*i.liftScale*et*(n.lift(this.s,this.t)-dt)*lt*k(i.lipZeroT,i.lipTaperT,this.t)+dt,_t=-b*L/I.m-Ct/(i.liftAlongM?I.m:I.W);Pt=this.t+_t*t}Pt>Dc&&(Pt=Dc);const V=Math.sin(this.hb)<L-MS||T*this.turnRateF<-.5;if(this.turningDown=V,Pt<=Ds?(Pt=Ds,this.lipTime+=t,L>i.lipUpSin?V||(this.lipUpTime+=t):this.lipUpTime=0):(this.lipTime=0,this.lipUpTime=0),this.t=Pt,n.facePoint(this.s,this.t,this.face),this.d=n.d(this.s),this.t<=Ds){if(this.inTube&&this.tubeMode==="free")return this.inTube=!1,this.tubeWhy="edge",this.events.push({type:"tubeExit",duration:this.tubeTime,made:!1}),this.wipe("the lip took you");const C=-Math.cos(this.hb)*this.boardRateF;if(this.airLaunch==="lift"){if(this.airMode==="on"&&this.liftLaunchOk(t,e,L))return this.launch()}else if(this.airMode==="on"&&!this.inTube&&this.v>=Yt.minV&&L>=Yt.minSin&&this.lipTime>=Yt.lipDwell-1e-9&&C<Yt.snapGate&&Math.cos(this.hv)*this.lineDir>-.3)return this.launch();if(this.v<i.lipMinV&&!V)return this.kickout("too slow at the lip");if(this.lipUpTime>i.lipUpTime)return this.kickout("over the back");if(this.lipTime>i.lipCapTime&&!V)return this.kickout("over the back")}const J=n.hollow(this.s),St=1.5+5*J,st=this.d;if(!this.inTube){const C=n.barrelShape(this.s);st>=Ho&&(this.frontSeen=!0),st<Ho&&C>=i.tubeShapeIn?this.behindLip=!0:this.behindLip&&(C<.05||st>0&&C<i.tubeShapeIn)&&(this.behindLip=!1)}const Lt=!this.inTube&&!this.behindLip&&e.grip&&this.v>=i.tubeSlowV&&L<=i.tubeUpSin&&this.t>Ds&&this.t<.9&&st>-St&&n.closeout(this.s)<.5&&n.barrelShape(this.s)>=(this.tubeMode==="free"?i.tubeFreeShapeIn:i.tubeShapeIn)&&n.hollow(this.s+i.tubeAheadNeed)>=i.hollowLip&&ch(n,this.s,this.face.u)>=(this.tubeMode==="free"?i.tubeFreeIn:i.tubeHeadroom);if(this.zoneFor=Lt?this.zoneFor+t:0,!this.inTube)Lt&&this.zoneFor>=i.tubeEnterHold-1e-9?(this.inTube=!0,this.foamRun=0,this.tubeTime=0,this.spat=!1,this.tubeHolMax=J,this.missArmed=!1,this.tubeRel=this.v*Math.cos(this.hv)+this.carry-n.peelSpeed(n.breakS),this.carry=0,this.tubeLine=Dt(this.t,i.tubeLineMin,i.tubeLineMax),this.tubeHRef=this.hb,this.tubeCoast=0,this.pumpF=0,this.railSide=0,this.railFlipAt=-1e9,this.events.push({type:"tubeEnter"})):n.hollow(n.breakS)<.5?(this.missArmed=!0,this.aheadFor=0):this.missArmed&&st>i.missAheadD&&n.barrelShape(n.breakS)>=i.tubeShapeIn&&(this.aheadFor=r>.1?0:this.aheadFor+t,this.aheadFor>i.missAheadTime&&(this.missArmed=!1,this.events.push({type:"tubeMiss",reason:"ran ahead"})));else{if(this.tubeTime+=t,J>this.tubeHolMax&&(this.tubeHolMax=J),st<=-St)return this.inTube=!1,this.tubeWhy="closed",this.events.push({type:"tubeExit",duration:this.tubeTime,made:!1}),this.wipe("barrel closed");!this.spat&&!this.spitRide&&st>-i.spitMouthD&&this.tubeHolMax>=i.spitHol&&J>=i.spitExitHol&&n.sectionEnding(n.breakS)*(1-k(i.hollowLip,i.tubeReleaseHol,n.hollow(n.breakS)))>=.5&&this.tubeTime>=Math.max(i.spitMinTime,i.tubeMinMade)&&this.tubeRel>i.spitRel&&(this.spat=!0,this.spitRide=!0,this.events.push({type:"spit"}));const C=ch(n,this.s,this.face.u),ot=this.tubeMode==="free",et=ot?Yd(n,this.s,this.face.u):C,dt=!(et>=(ot?i.tubeFreeOut:i.tubeRoofMin)),lt=st>=i.tubeMouthD&&n.barrelShape(this.s)<=i.tubeOutShape;if(ot&&dt&&!lt&&Yd(n,this.s,Math.max(0,this.tubeLine)*n.faceWidth(this.s))>=i.tubeFreeRoom)return this.inTube=!1,this.tubeWhy="edge",this.events.push({type:"tubeExit",duration:this.tubeTime,made:!1}),this.wipe(this.t<this.tubeLine?"the lip took you":"fell out of the tube");let Ct=ot&&!(et>=i.tubeFreeOutDrawn);for(let E=0;Ct&&E<=4;E++)aS(n,this.s+E*i.tubeFreeAhead/4,this.face.u)>0&&(Ct=!1);const _t=lt&&(!ot||dt&&Ct);if(_t||dt&&st>=ye.aheadFull&&(!ot||Ct))this.inTube=!1,this.tubeWhy=_t?"mouth":"roof",this.events.push({type:"tubeExit",duration:this.tubeTime,made:this.tubeTime>=i.tubeMinMade}),!this.spat&&!this.spitRide&&(_t||!dt)&&this.tubeHolMax>=i.spitHol&&J>=i.spitExitHol&&this.tubeTime>=Math.max(i.spitMinTime,i.tubeMinMade)&&(this.spat=!0,this.spitRide=!0,this.events.push({type:"spit"}));else if(J<i.tubeStayHol&&(!ot||dt&&Ct)){this.inTube=!1,this.tubeWhy="backoff";const E=-st/St<i.tubeBackOffF;return this.events.push({type:"tubeExit",duration:this.tubeTime,made:E&&this.tubeTime>=i.tubeMinMade}),E&&!this.spat&&!this.spitRide&&this.tubeHolMax>=i.spitHol&&this.tubeTime>=Math.max(i.spitMinTime,i.tubeMinMade)&&(this.spat=!0,this.spitRide=!0,this.events.push({type:"spit"})),this.spat||E?void 0:this.wipe("barrel closed")}else if(!(this.t>i.tubeStayTMin&&this.t<i.tubeStayTMax)&&(this.inTube=!1,this.tubeWhy=ot?"edge":"band",this.events.push({type:"tubeExit",duration:this.tubeTime,made:!1}),ot))return this.wipe(this.t<=i.tubeStayTMin?"the lip took you":"fell out of the tube")}this.tubeHeight=this.inTube?n.amp(this.s):0;const Ht=Math.abs(this.skid);this.vTurn=Math.max(this.v,this.vTurn-i.slideVDecay*t);const It=this.boardRateF,Xt=this.turnRateF;this.jerkMem=Math.abs(It)>=i.slideHbRate0?Math.max(this.jerkMem,this.targetRateF):this.targetRateF;const tt=Zr.skidLimit(this.t,this.v),ut=It*Xt>0?k(i.slideHbRate0,i.slideHbRate1,Math.abs(It))*k(i.slideHvRate0,i.slideHvRate1,Math.abs(Xt))*k(i.slideV0,i.slideV1,this.vTurn)*(1-k(i.slideT0,i.slideT1,this.t))*(1-k(i.slideJerk0,i.slideJerk1,this.jerkMem)):0;if(this.slideAllow=Math.min(ut*(Zr.skidLimit(this.t,Math.max(this.vTurn,i.slowV2))-tt+i.skidSlide),Math.max(0,i.skidSlideMax-tt)),!d){if(Ht>tt+this.slideAllow)return this.wipe("caught a rail");if(this.v<hS&&Ht>uS)return this.wipe("bogged down")}if(!this.inTube){if(w>=0&&st<0){const Ct=Math.abs(Ui(this.hb-Math.PI)),_t=Math.abs(this.turnRateF)>i.foamReboundRate;if(this.v>=i.foamHardV&&Ct<=i.foamHeadOn&&!_t)return this.wipe("too hard into the foam")}const C=Math.abs(this.turnRateF)>i.foamReboundRate,ot=e.grip&&r<.5&&this.v>=i.carryMinV&&Math.cos(this.hb)>0;this.notOutFor=ot?0:this.notOutFor+t;const et=this.notOutFor<i.lipGrace;if(st<0){const Ct=Math.abs(Ui(this.hb-Math.PI));if(this.headOnFor=Ct<=i.foamHeadOn&&!C&&this.v>=i.headOnMinV?this.headOnFor+t:0,this.stuckFor=this.v<i.carryMinV||st<-i.stuckD&&!ot?this.stuckFor+t:0,this.headOnFor>i.headOnTime)return this.wipe("too hard into the foam");if(this.stuckFor>i.stuckTime)return this.wipe(this.v<i.carryMinV?"fell behind the wave":"stuck in the whitewater")}else this.headOnFor=0,this.stuckFor=0;if(this.foamRun=st<0?this.foamRun+t:0,this.foamRun>(ot?i.foamSteerTime:i.foamStuckTime))return this.wipe("stuck in the whitewater");const dt=n.barrelShape(this.s);if(this.behindFor=this.behindLip&&dt>=i.tubeShapeIn?this.behindFor+t:0,(this.frontSeen&&st<Ho&&dt>=i.tubeShapeIn||this.behindFor>i.lipLandGrace)&&this.t<i.lipLandMaxT)return this.missArmed&&(this.missArmed=!1,this.events.push({type:"tubeMiss",reason:"lip landed"})),this.wipe("the lip landed on you");if(J>=i.hollowLip&&this.t<i.lipLandMaxT)return st<Ho&&!(et&&st>=-i.carryMaxD)?(this.missArmed&&(this.missArmed=!1,this.events.push({type:"tubeMiss",reason:"lip landed"})),this.wipe("the lip landed on you")):void 0;if(this.foamTime=st<i.foamD?this.foamTime+t:0,st<i.fellBehindD||this.foamTime>i.foamMaxTime)return this.wipe("fell behind the wave")}}trackLift(t,e){e.grip?(this.liftAge=1/0,e.targetHeading!==null&&Number.isFinite(e.targetHeading)&&(this.holdTarget=e.targetHeading)):this.prevGrip?this.liftAge=0:this.liftAge+=t,this.prevGrip=e.grip,this.airborne&&(this.liftAge=1/0,this.holdTarget=NaN)}liftLaunchOk(t,e,n){if(this.lipTime<=t+1e-9&&(this.lipV=this.v,this.lipSin=n,this.lipHv=this.hv,this.lipLift=!1),!e.grip&&this.liftAge<=Yt.liftWin&&this.lipTime<=Yt.liftLipWin+1e-9&&(this.lipLift=!0),e.grip&&(this.lipLift=!1),!this.lipLift||this.inTube||this.lipTime<Yt.lipDwell-1e-9||!(this.lipV>=Yt.minV&&this.lipSin>=Yt.minSin))return!1;let i=this.lipHv;if(Math.cos(i)*this.lineDir<Yt.liftFwdCos){const r=Yt.liftFwdCos;i+=Ui(Math.atan2(Math.sqrt(1-r*r),this.lineDir*r)-i)}return this.hv=i,!0}launch(){const t=Math.sin(this.hv);this.airborne=!0,this.airT=0,this.airHeight=0,this.airYaw=0,this.airSpin=0,this.airCaught=!1,this.airSettleFrom=-1,this.airHb0=this.hb,this.airHv0=this.hv,this.airVy=Yt.kVy*this.v*t,this.airDur=2*this.airVy/Yt.g,this.airPeak=this.airVy*this.airVy/(2*Yt.g),this.airFlip=Ui(-2*this.hv),this.timeScale=1,this.revertLeft=0,this.lipTime=0,this.lipUpTime=0,this.turnRate=0,this.turnRateF=0,this.boardRateF=0,this.lastTarget=NaN,this.events.push({type:"launch",v:this.v,vy:this.airVy})}airStep(t,e){const n=this.wave;this.rideTime+=t,this.airT+=t,e.grip&&(this.airCaught=!0,this.airSpin*=Math.exp(-t/Yt.catchTau),Math.abs(this.airSpin)<.001&&(this.airSpin=0)),this.airYaw+=this.airSpin*t;const i=e.grip&&this.airLaunch!=="lift"?e.targetHeading:null;if(i!=null&&Number.isFinite(i)){const m=i-this.airHb0,_=Yt.airSteerRate*t;this.airYaw+=Dt(m-this.airYaw,-_,_)}const r=e.scissor,o=e.scissorDt;e!==Fc&&(r!==void 0&&(e.scissor=0),o!==void 0&&(e.scissorDt=0));const a=o!==void 0&&Number.isFinite(o)&&o>0?Math.min(o,.1):t;if(e.grip&&this.airLaunch==="lift"&&r!==void 0&&Number.isFinite(r)&&r!==0){const m=Math.max(0,Math.abs(r)-Yt.scissorDeadV*a),_=Math.min(Yt.scissorGain*m,Yt.scissorCap*a);this.airYaw+=-this.airTravel*Math.sign(r)*_}const c=this.airLaunch==="lift"&&this.airSettleFrom>=0;if((!e.grip||c)&&this.airDur-this.airT<Yt.settleT){const m=Math.round(this.airYaw/Math.PI)*Math.PI;Math.abs(this.airYaw-m)<=Yt.settleMax&&(this.airSettleFrom<0&&(this.airSettleFrom=Math.abs(this.airYaw-m)),this.airSpin=0,this.airYaw+=(m-this.airYaw)*(1-Math.exp(-t/Yt.settleTau)))}this.hb=this.airHb0+this.airYaw,this.skid=0;const l=this.v*Math.cos(this.airHv0);this.s+=(l>0?Math.max(l,Yt.carryPeel*n.peelSpeed(this.s)):l)*t,this.d=n.d(this.s),n.facePoint(this.s,this.t,this.face);const h=this.airT;if(h>=this.airDur)return this.land();this.airHeight=Math.max(0,this.airVy*h-.5*Yt.g*h*h);const u=Math.min(Yt.slowHw,Yt.slowHwK*this.airDur),d=(h-.5*this.airDur)/u,f=Math.abs(d)<1?(1-d*d)*(1-d*d):0;this.timeScale=1-Yt.slowDepth*f}land(){const t=this.airYaw,e=Math.round(Math.abs(t)/Math.PI),n=Math.abs(Math.abs(t)-e*Math.PI),i=k(Yt.flatSin0,Yt.flatSin1,Math.sin(this.airHv0)),r=this.d<Yt.foamD,o=n<=Yt.tol&&!r,a=Math.max(n,.5*this.airSettleFrom),c=o?Dt(1-Yt.qErr*a-Yt.qFlat*i,Yt.qMin,1):.1*(1-i),l=Dt(.25+.55*i+.2*Math.min(1,this.airPeak/2.5),0,1),h=this.airFlip;if(this.hv=this.airHv0+h,this.hb+=h,this.skid=Ui(this.hb-this.hv),this.airborne=!1,this.airT=0,this.airHeight=0,this.airSpin=0,this.timeScale=1,this.landAge=0,this.foamRun=0,this.stuckFor=0,this.headOnFor=0,this.notOutFor=0,this.landFlat=i,this.landQuality=c,this.lastTarget=NaN,this.prevSin=Math.sin(this.hv),this.v*=1-Yt.flatLoss*i,this.vTurn=this.v,this.events.push({type:"land",made:o,quality:c,flat:i,yaw:t,camHit:l}),this.airYaw=0,!o)return this.wipe(r?"too hard into the foam":"caught a rail");const u=Math.cos(this.airHv0)>=0?1:-1,d=e>0&&Math.sign(t)*u>0,f=e<Jd.length?Jd[e]:`${e*180}`;if(this.events.push({type:"trick",name:d?`Alley-Oop ${f}`:f,alleyOop:d,halfTurns:e,haptic:Math.min(1,.3+.3*e)}),e%2===1){const m=this.hb-this.hv,_=2*Math.PI,g=(-m%_+_)%_;this.revertLeft=t>=0?g:g-_}}boost(t,e,n,i,r,o,a,c){const l=this.rideTime;if(this.t<=c.boostTopT&&n>=c.boostSinIn&&(this.boostTopAt=l),n>.1?this.boostHiT=this.t:this.t<this.boostHiT&&(this.boostHiT=this.t),this.t>=c.boostLowT&&this.t<=c.boostBotMaxT&&n<=-c.boostBotSinIn&&this.t-this.boostHiT>=c.boostDrop&&(this.boostLowAt=l),Math.abs(this.turnAccum)<.5*c.boostCutTurn&&(this.boostCutArmed=!0),a)return this.boostLeft=0,this.boostTopAt=this.boostLowAt=-1e9,0;const h=e.grip&&r>=c.boostD0&&r<=c.boostD1&&l-this.boostAt>=c.boostGap;let u="";if(h&&(n<=-c.boostSin&&l-this.boostTopAt<=c.boostReWin&&this.t<=c.boostReMaxT&&o>=c.boostReV&&Math.abs(this.turnAccum)>=c.boostTurn?u="reentry":n>=c.boostSin&&l-this.boostLowAt<=c.boostBotWin&&this.t>=c.boostBotMinT&&this.t<=c.boostBotMaxT&&o>=c.boostBotV&&Math.abs(this.turnAccum)>=c.boostTurn?u="bottom":this.boostCutArmed&&Math.abs(this.turnAccum)>=c.boostCutTurn&&i<0&&this.vTurn>=c.boostCutV&&(u="cutback")),u!==""&&(this.boostCount++,this.boostKind=u,this.boostAt=l,this.boostLeft=c.boostDv,this.boostTopAt=this.boostLowAt=-1e9,this.boostCutArmed=!1),this.boostLeft<=0)return 0;const d=Math.min(this.boostLeft,c.boostDv/c.boostTime*t);return this.boostLeft=Math.max(0,this.boostLeft-d),d/t*(1-k(c.boostVFade,c.boostVMax,o))}impulsePump(t,e,n,i,r){e>this.peakSinUp&&(this.peakSinUp=e),this.t>this.maxTSince&&(this.maxTSince=this.t);const o=this.rideTime-this.lastPumpAt;if(this.prevSin>0&&e<=0&&n*this.turnRate<-.3&&this.t<mS&&this.peakSinUp>=gS&&o>=_S&&this.maxTSince-this.t>=r.pumpClimb){const a=Dt((.6-this.t)/.45,.2,1),c=o<=r.rhythmMax||this.lastPumpAt<-1e8?1:.5,l=r.pumpDv*a*c*Math.min(1,this.peakSinUp/vS);this.pumpLeft+=l,this.lastPumpAt=this.rideTime,this.peakSinUp=0,this.maxTSince=this.t,this.events.push({type:"pump",dv:l,t:this.t})}if(this.prevSin=e,this.pumpLeft>0){const a=Math.min(this.pumpLeft,r.pumpDv/pS*i);this.pumpLeft-=a,t+=a,this.pumpAccel=a/i}return t}wipe(t){this.state="wiped",this.events.push({type:"wipe",reason:t})}kickout(t){this.state="kickedOut",this.events.push({type:"kickout",reason:t})}}const bS=[];function SS(s,t){const e=Math.atan(s*t/Ea);return Number.isFinite(e)?Dt(e,-Qd,Qd):0}const Vo=32,gn=0,_n=3,Go=6,Xe=7,In=10,tf=19,br=22,Sr=25,TS=28,Tr=29,Wo=30,Uc=31,Oc=[In,In+3,In+6,In+9],on=Math.PI/180,ef=[0,0],nf=27,ES=50,sf=[0,.25],pa=[.15,.086,0],ma=[-.65,.086,0],rf=(pa[0]+ma[0])/2+.02,AS=.4,wS=.45,kc=7,RS=4.4,CS=12,PS=13.5,LS=.9,IS=1.35,DS=.6,of=[.47,.57],NS=.1,FS=.15,US=.5,Xo=1.2,OS=28,kS=15,BS=6.5,HS=10,zS=22,VS=16,GS=6,WS=3.2,XS=14,af=37,cf=52,qS=.7,lf=1.2,hf=[.22,.33],KS=.21,YS=[.3,.3,.25,.15],jS=[.15,.3,.3,.25],uf=[0,.3,.35,.35],qo=[.03,-.1,1],$S=[.33,-.3,1],ZS=[.15,.15,1],JS=[.03,-.2,1],QS=.17,t1=-.02,e1=.2,n1=.015,i1=.5,s1=15,r1=.5,o1=.08,a1=.08,df=[.2,.55],c1=.035,ff=[.3,.6],l1=.86,h1=.03,u1=.15,d1=[.35,-.3,1],Xh=[.15,.15,1],pf=[.05,.4],f1=.06,mf=[.35,.22],gf=[3.5,5],_f=.12,Bc=.32,vf=.6,p1=.22,m1=.12,g1=.04,Ko=[.24,.34,.4,.52],_1=.16,v1=.016,x1=.66,Fm=[.3,-.4,1],xf=[1.4,1.8],Um={uaF:[.7,-.45,.55],faF:[.8,-.2,.55]},Om={uaF:[-.25,-.4,-.88],faF:[-.4,-.3,-.87]},M1=[.9,-.56,.12],y1=[.75,-.65,.15],b1=[.9,-.45,.12],S1=[.85,-.45,.15],T1=.35,E1=.06,A1=[.3,-.9,.3],w1=[0,-.95,.35],Os=s=>.8175-.25*Dt(s,0,1),Un=new P(0,1,0),Mf=new le,Pi=new le,yf=new P;function hh(s,t,e,n,i,r,o){return Mf.setFromUnitVectors(Un,i),o.identity().slerp(Mf,YS[s]),Pi.setFromAxisAngle(i,r*jS[s]),o.premultiply(Pi),s===0?(Pi.setFromAxisAngle(Un,t),o.premultiply(Pi)):(Pi.setFromAxisAngle(Un,e*uf[s]),o.premultiply(Pi),yf.set(Math.cos(t),0,-Math.sin(t)),Pi.setFromAxisAngle(yf,n*uf[s]),o.premultiply(Pi))}const bf=new le;function R1(s,t,e,n,i,r){return hh(0,s,t-s,e,n,i,bf),hh(3,s,t-s,e,n,i,r),r.multiply(bf)}class Dn{constructor(){v(this,"hipY",0);v(this,"shift",0);v(this,"pel",0);v(this,"chy",0);v(this,"curl",0);v(this,"chest",new Float64Array(3));v(this,"look",new Float64Array(3));v(this,"knF",new Float64Array(3));v(this,"knB",new Float64Array(3));v(this,"armC",new Float64Array(12));v(this,"armM",new Float64Array(12));v(this,"wM",0)}}function as(s,t){s.hipY=t.hipY,s.shift=t.shift,s.pel=t.pel,s.chy=t.chy,s.curl=t.curl,s.wM=t.wM,s.chest.set(t.chest),s.look.set(t.look),s.knF.set(t.knF),s.knB.set(t.knB),s.armC.set(t.armC),s.armM.set(t.armM)}function rn(s,t,e){for(let n=0;n<s.length;n++)s[n]+=(t[n]-s[n])*e}function nn(s,t,e,n=e){if(e>0&&(s.hipY+=(t.hipY-s.hipY)*e,s.shift+=(t.shift-s.shift)*e,s.pel+=(t.pel-s.pel)*e,s.chy+=(t.chy-s.chy)*e,s.curl+=(t.curl-s.curl)*e,rn(s.chest,t.chest,e),rn(s.look,t.look,e),rn(s.knF,t.knF,e),rn(s.knB,t.knB,e)),n>0){const i=(1-s.wM)*(1-n),r=(1-t.wM)*n,o=s.wM*(1-n),a=t.wM*n,c=i+r,l=o+a;for(let h=0;h<12;h++)s.armC[h]=c>1e-9?(s.armC[h]*i+t.armC[h]*r)/c:t.armC[h],s.armM[h]=l>1e-9?(s.armM[h]*o+t.armM[h]*a)/l:t.armM[h];s.wM=l}}function jt(s,t,e,n=!0){const i=n&&Math.hypot(e[0],e[1],e[2])||1;s[t]=e[0]/i,s[t+1]=e[1]/i,s[t+2]=e[2]/i}function ms(s){const t=new Dn,e=s.drop??0;t.hipY=Os(s.crouch)-e,t.shift=s.shift??0,t.pel=s.pelvis*on,t.chy=s.chest*on,t.curl=(s.curl??0)*on;const n=s.lean*on,i=new P(.5*Math.sin((s.side??0)*on),Math.cos(n),Math.sin(n)).normalize();jt(t.chest,0,[i.x,i.y,i.z]);const r=new le().setFromUnitVectors(Un,i),o=i.clone().applyAxisAngle(Un,t.pel),a=new le().setFromAxisAngle(o,t.chy-t.pel),c=new le().setFromAxisAngle(Un,t.pel).premultiply(a).multiply(r),l=s.head*on,h=(s.pitch??0)*on,u=new P(Math.sin(l)*Math.cos(h),Math.sin(h)-.15,Math.cos(l)*Math.cos(h)).normalize().applyQuaternion(c);u.y+=Math.sin(n)*.8,u.normalize(),jt(t.look,0,[u.x,u.y,u.z]);const d=s.beach?t.armM:t.armC;jt(d,0,s.uaF),jt(d,3,s.faF),jt(d,6,s.uaB),jt(d,9,s.faB),t.wM=s.beach?1:0;const f=Math.min(1,s.crouch+e*3);return jt(t.knF,0,[.12+.1*s.kneeF[0],.15,1],!1),jt(t.knB,0,[.6,-.2-.5*f,.5+.2*s.kneeB[0]],!1),t}const qh={uaF:[.8,-.55,.25],faF:[.85,-.3,.45],uaB:[-.5,-.5,-.75],faB:[-.45,-.4,-.8]},km={uaF:[.45,-.55,-.7],faF:[.4,-.45,-.8],uaB:[-.35,-.75,-.55],faB:[-.2,-.65,-.75]},C1=[{crouch:.85,drop:.08,pelvis:5,chest:0,lean:25,head:30,pitch:15,...qh,uaF:[.7,-.65,.3],faF:[.8,-.5,.35],kneeF:[.35,0,1],kneeB:[.35,0,1]},{crouch:1,drop:.13,shift:.06,pelvis:20,chest:40,lean:30,head:42,pitch:20,uaF:[.6,-.5,.6],faF:[.65,-.25,.7],uaB:[-.3,-.9,.25],faB:[-.35,-.85,.3],kneeF:[.7,0,1],kneeB:[.6,0,1]},{crouch:.5,pelvis:15,chest:50,lean:15,head:15,pitch:20,beach:!0,...km,kneeF:[.4,0,1],kneeB:[.4,0,1]}],Kh=[{crouch:1,drop:.08,pelvis:0,chest:-10,lean:25,head:35,pitch:-15,...qh,uaB:[-.5,-.55,-.7],faB:[-.45,-.4,-.8],kneeF:[.4,0,1],kneeB:[.4,0,1]},{crouch:1,drop:.05,shift:-.05,pelvis:40,chest:80,lean:20,side:-5,head:20,pitch:-25,uaF:[.7,-.45,.55],faF:[.8,-.2,.55],uaB:[-.6,.6,-.35],faB:[-.45,.85,-.1],kneeF:[.3,0,1],kneeB:[.25,0,1]},{crouch:.7,pelvis:25,chest:40,lean:25,head:30,pitch:-10,beach:!0,...km,kneeF:[.4,0,1],kneeB:[.4,0,1]}],P1=.675,Bm=[.12,-.15,1],L1=[.6,-.5,1],I1=.19,D1=18,Hm=[{crouch:.85,drop:.08,pelvis:0,chest:-10,lean:25,head:40,pitch:-5,...qh,uaF:[.7,-.35,.6],faF:[.75,-.1,.65],kneeF:[.4,0,1],kneeB:[.4,0,1]},{crouch:1,drop:.13,shift:-.06,pelvis:30,chest:85,lean:0,side:-10,head:30,pitch:-20,uaF:[.75,-.3,.55],faF:[.8,-.05,.55],uaB:[-.6,.6,-.35],faB:[-.45,.85,-.1],kneeF:[.25,0,1],kneeB:[.2,0,1]},{crouch:1,drop:.08,pelvis:15,chest:35,lean:25,head:25,pitch:5,beach:!0,uaF:[.7,-.8,-.3],faF:[.75,-.6,-.45],uaB:[-.3,-.85,-.4],faB:[-.15,-.8,-.5],kneeF:[.45,0,1],kneeB:[.45,0,1]}],zm={uaB:[-.7,-.3,-.6],faB:[-.55,-.3,-.75]},N1={uaB:[-.55,-.5,-.6],faB:[-.4,-.45,-.75]},F1={crouch:1,drop:.235,pelvis:25,chest:55,lean:65,side:25,curl:50,head:30,pitch:10,beach:!0,uaF:[.85,-.45,.25],faF:[.95,-.1,.25],uaB:[.7,-.7,-.1],faB:[.95,-.3,-.15],kneeF:[.6,0,1],kneeB:[.6,0,1]},cs=C1.map(ms),Hc=Kh.map(ms),zr=Hm.map(ms),U1=ms({...Kh[1],...zm}),O1=ms({...Kh[1],...N1}),Vm=ms({...Hm[1],...zm}),Gm=ms(F1),Yh=new Float64Array(6),jh=new Float64Array(6);jt(Yh,0,Um.uaF);jt(Yh,3,Um.faF);jt(jh,0,Om.uaF);jt(jh,3,Om.faF);for(const s of[...zr,Vm])jt(s.knB,0,s===zr[0]?L1:Bm,!1),jt(s.knF,0,Xh,!1);for(const s of[cs[0],cs[1]])jt(s.knB,0,d1,!1);for(const s of cs)jt(s.knF,0,Xh,!1);jt(cs[2].knB,0,Fm,!1);jt(Gm.knB,0,[.6,0,.7],!1);const Va=(()=>{const s=new Dn;return s.pel=6*on,s.chy=30*on,jt(s.chest,0,[0,1,.45]),jt(s.look,0,[1,-.15,.35]),jt(s.armM,0,[.1,-.98,.3]),jt(s.armM,3,[.75,-.45,.35]),jt(s.armM,6,[-.2,-.98,.02]),jt(s.armM,9,[-.15,-.97,.06]),s.wM=1,s})(),Sf=(()=>{const s=new Dn;return as(s,Va),jt(s.armM,0,[.7,-.5,.5]),jt(s.armM,3,[.8,-.45,.4]),jt(s.armM,6,[-.7,-.5,.5]),jt(s.armM,9,[-.8,-.45,.4]),s})(),Tf=(()=>{const s=new Dn;return as(s,Va),jt(s.armM,0,[.2,-.97,.2]),jt(s.armM,3,[.35,-.92,.2]),jt(s.armM,6,[-.2,-.97,.15]),jt(s.armM,9,[-.05,-.97,.2]),s})(),k1=(()=>{const s=new Dn;return as(s,Va),jt(s.armM,6,[-.3,-.9,.5]),jt(s.armM,9,[-.2,-.9,.4]),s})(),B1=.07,H1=.1,z1=9,Ef=[.6,.86],V1=.45,G1=.05,W1=.07,X1=.08,zc=[.45,.95],q1=.24,K1=.06,Y1=.04,j1=12;class $1{constructor(t){v(this,"root");v(this,"meshes");v(this,"b");v(this,"controlled");v(this,"restQ");v(this,"spine");v(this,"pelvisParentInv",new Gt);v(this,"thighOff",[]);v(this,"legLen",[]);v(this,"headTopLocal",new P);v(this,"jointBone");v(this,"x",new Float64Array(Vo));v(this,"v",new Float64Array(Vo));v(this,"tgt",new Float64Array(Vo));v(this,"fresh",!0);v(this,"cs",1);v(this,"active",!1);v(this,"manSign",0);v(this,"kB",0);v(this,"kS",0);v(this,"kC",0);v(this,"pkT",0);v(this,"held",0);v(this,"retT",9);v(this,"tubeLin",0);v(this,"upGate",0);v(this,"climb",0);v(this,"kicked",!1);v(this,"kickT",9);v(this,"kickEnv",0);v(this,"foldEnv",0);v(this,"landW",0);v(this,"cutW",0);v(this,"heel",0);v(this,"windW",0);v(this,"drvW",0);v(this,"kissAge",0);v(this,"ldW",0);v(this,"drvR",0);v(this,"handW",0);v(this,"handT",0);v(this,"tallW",1);v(this,"tallQ",1);v(this,"openW",0);v(this,"airW",0);v(this,"wideW",0);v(this,"midF");v(this,"midB");v(this,"qH",new le);v(this,"hv",new P);v(this,"cur",new Dn);v(this,"phS",new Dn);v(this,"phP",new Dn);v(this,"phR",new Dn);v(this,"pkS",new Dn);v(this,"pkC",new Dn);v(this,"rootInv",new Gt);v(this,"qR",new le);v(this,"qRi",new le);v(this,"q1",new le);v(this,"q2",new le);v(this,"qw",new le);v(this,"qp",new le);v(this,"qC",new le);v(this,"qCi",new le);v(this,"s3",new P);v(this,"p3",new P);v(this,"va",new P);v(this,"vb",new P);v(this,"vc",new P);v(this,"vd",new P);v(this,"ve",new P);v(this,"vf",new P);v(this,"vg",new P);v(this,"H",new P);v(this,"K",new P);v(this,"E",new P);v(this,"T",new P);v(this,"aA",new P);v(this,"aB",new P);v(this,"qa",new le);v(this,"side",new P);v(this,"footP",new P);v(this,"armPrev",[new P(1,0,0),new P(1,0,0),new P(-1,0,0),new P(-1,0,0)]);v(this,"armM",[new P,new P,new P,new P]);v(this,"armFresh",!0);v(this,"hbPrev",0);v(this,"hbFresh",!0);v(this,"liftG",0);v(this,"hiMem",0);v(this,"headPrev",[new P,new P]);v(this,"armTurnMax",kc);v(this,"fwd",new P);v(this,"headFaceLocal",new P);v(this,"hingeLocal",[new P,new P]);v(this,"pelLatLocal",new P);v(this,"pelLat",new P);this.root=t.root,this.meshes=t.meshes;const e=["clavicle_l","pelvis","spine_01","spine_02","spine_03","neck_01","Head","upperarm_l","lowerarm_l","hand_l","upperarm_r","lowerarm_r","hand_r","thigh_l","calf_l","foot_l","ball_l","thigh_r","calf_r","foot_r","ball_r"];this.b={};for(const a of e)this.b[a]=t.bone(a);this.controlled=e.map(a=>this.b[a]),this.restQ=this.controlled.map(a=>a.quaternion.clone()),this.spine=[this.b.pelvis,this.b.spine_01,this.b.spine_02,this.b.spine_03],this.root.position.set(0,0,0),this.root.quaternion.identity(),this.root.scale.set(1,1,1),this.root.updateMatrixWorld(!0),this.pelvisParentInv.copy(this.b.pelvis.parent.matrixWorld).invert();const n=new P().setFromMatrixPosition(this.b.pelvis.matrixWorld);for(const a of["l","r"]){const c=new P().setFromMatrixPosition(this.b["thigh_"+a].matrixWorld),l=new P().setFromMatrixPosition(this.b["calf_"+a].matrixWorld),h=new P().setFromMatrixPosition(this.b["foot_"+a].matrixWorld);this.thighOff.push(c.clone().sub(n)),this.legLen.push(c.distanceTo(l)+l.distanceTo(h))}for(let a=0;a<2;a++){const c=new le;this.b[a===0?"thigh_l":"thigh_r"].matrixWorld.decompose(new P,c,new P),this.hingeLocal[a].set(1,0,0).applyQuaternion(c.invert())}{const a=new le;this.b.pelvis.matrixWorld.decompose(new P,a,new P),this.pelLatLocal.set(1,0,0).applyQuaternion(a.invert())}const i=this.b.Head,r=new le;i.matrixWorld.decompose(new P,r,new P),this.headTopLocal.set(0,KS,0).applyQuaternion(r.invert()),this.headFaceLocal.set(0,0,1).applyQuaternion(r);const o=a=>{let c;return this.b["hand_"+a].traverse(l=>{l.name==="middle_03_"+a&&(c=l)}),c??this.b["hand_"+a]};this.midF=o("l"),this.midB=o("r"),this.jointBone={hip:this.b.pelvis,chest:this.b.spine_03,headTop:this.b.Head,shoulderF:this.b.upperarm_l,shoulderB:this.b.upperarm_r,handF:this.b.hand_l,handB:this.b.hand_r,kneeF:this.b.calf_l,kneeB:this.b.calf_r,ankleF:this.b.foot_l,ankleB:this.b.foot_r}}setStance(t){this.cs=t<0?-1:1,this.root.scale.z=this.cs}reset(){this.fresh=!0,this.armFresh=!0,this.hbFresh=!0,this.liftG=0,this.hiMem=0,this.active=!1,this.manSign=0,this.pkT=0,this.held=0,this.retT=9,this.tubeLin=0,this.climb=0,this.kicked=!1,this.kickT=9,this.kickEnv=0,this.foldEnv=0,this.landW=0,this.cutW=0,this.heel=0,this.windW=0,this.kissAge=0,this.handT=0,this.handW=0,this.tallW=1,this.airW=0,this.wideW=0,this.root.position.set(0,0,0),this.root.quaternion.identity()}joint(t,e){const n=this.jointBone[t];return t==="headTop"?e.copy(this.headTopLocal).applyMatrix4(n.matrixWorld):e.setFromMatrixPosition(n.matrixWorld)}phases(t,e){const n=Number.isFinite(t.turn)?t.turn:0,i=Number.isFinite(t.intent)?t.intent:0,r=Number.isFinite(t.hb)?t.hb:0,o=k(1,1.8,Math.abs(i)),a=k(1,1.8,Math.abs(n)),c=Math.sign(i),l=Math.sign(n),h=o>.5?c:a>.5?l:0;if(h!==0&&(h!==this.manSign||!this.active)){this.manSign=h,this.active=!0,this.pkT=0,this.held=0,this.retT=9;const p=Math.max(Dt(-Math.cos(r)/.4,0,1),h<0?k(-.3,-.8,r):0);this.kC=p,this.kB=h>0?1-p:0,this.kS=h<0?1-p:0,this.upGate=p+(1-p)*k(.4,.28,Number.isFinite(t.t)?t.t:.5),this.climb=h<0?(1-p)*k(.15,.45,r):0,this.kicked=!1}if(!this.active)return{load:0,peak:0,ret:0,up:0};const u=c===this.manSign?o:0,d=l===this.manSign?1:0,f=u*(1-k(.3,1.2,Math.abs(n))),m=Math.max(u*k(.4,1.4,Math.abs(n)),a)*d;m>.5?(this.pkT+=e,this.held=Math.max(this.held,k(.1,.25,this.pkT)),this.retT=0):(m<.2&&(this.pkT=0),this.held>0&&(this.retT+=e));const _=this.held*k(lf,qS,this.retT);this.retT>lf&&(this.held=0),f<.01&&m<.01&&_<.01&&o<.5&&(this.active=!1);const g=1-k(hf[0],hf[1],this.pkT);return{load:f,peak:m,ret:_,up:g}}headLook(t,e){const n=Number.isFinite(t.turn)?t.turn:0,i=Number.isFinite(t.t)?t.t:.5,r=Number.isFinite(t.intent)?t.intent:0,o=Number.isFinite(t.hb)?t.hb:0,a=k(1,2,Math.abs(n)),c=(n>0?a:0)*(.45+.55*k(.3,.8,i)),l=(n<0?a:0)*(.45+.55*(1-k(.15,.55,i)));Pn(e,Xe,Vc[0],Vc[1],Vc[2]),c>0&&Yo(e,Xe,Z1,c),l>0&&Yo(e,Xe,J1,l);const h=Dt(-Math.cos(o)/.4,0,1)*k(1,1.8,Math.abs(r));h>0&&Yo(e,Xe,[-Math.cos(o),0,Math.sin(o)*this.cs],.8*h);const u=k(0,1,this.tubeLin);u>0&&Yo(e,Xe,Q1,u);const d=tT*Dt(r/2.2,-1,1)*(1-u),f=Math.cos(d),m=Math.sin(d),_=e[Xe],g=e[Xe+2];e[Xe]=_*f+g*m,e[Xe+2]=-_*m+g*f}kinds(t,e,n,i){as(t,e);const r=this.kB+this.kS;this.kS>0&&r>0&&nn(t,n,this.kS/r),this.kC>0&&nn(t,i,this.kC)}drive(t,e,n){const i=this.tgt,r=this.cur,o=t.wipeT>=0;let a=0;if(this.drvW=0,this.ldW=0,this.kickEnv=0,o){this.handW=0,this.openW=0;const d=t.wipeT,f=k(.25,.45,d);r.pel=0,r.chy=0,r.curl=0,r.wM=1,jt(r.armM,0,[1-.7*f,-.15-.85*f,.3]),jt(r.armM,3,[1-.6*f,-.1-.9*f,.25]),jt(r.armM,6,[1-1.2*f,-.1+.7*f,.45]),jt(r.armM,9,[1-.7*f,-.05+.95*f,.3]),jt(r.look,0,[1,-.2,.3]),jt(r.knF,0,[.4,.3,1]),jt(r.knB,0,[.2,.3,1]),Pn(i,gn,rf,Os(1)-.05,0),Pn(i,_n,-.3+.9*f,1,.4),i[Go]=.2}else{as(r,Va),r.hipY=Os(t.crouch)+this.tallW*(QS+e1*(Dt(t.crouch,0,1)-.3));const d=Dt(t.crouch,0,1);jt(r.knF,0,[.05,.15,1],!1),jt(r.knB,0,[qo[0],qo[1]-.15*d,qo[2]],!1),nn(r,Sf,0,k(.4,.7,Dt(t.spread,0,1))),a=Dt(t.stall,0,1),nn(r,k1,0,.6*a),this.tubeLin=t.inTube?Math.min(1,this.tubeLin+n/AS):Math.max(0,this.tubeLin-n/wS);const f=k(0,1,this.tubeLin),m=1-f,_=this.phases(t,n);if(_.ret>0||_.load>0||_.peak>0){as(this.pkS,O1),nn(this.pkS,U1,0,this.upGate),nn(this.pkS,Hc[1],_.up*this.upGate),as(this.pkC,Vm),nn(this.pkC,zr[1],_.up),this.kinds(this.phR,cs[2],Hc[2],zr[2]),this.kinds(this.phS,cs[0],Hc[0],zr[0]),this.kinds(this.phP,cs[1],this.pkS,this.pkC);const At=this.kS*(1-this.climb);if(At>0)for(const V of[this.phR,this.phS,this.phP])rn(V.knB,qo,At);const Pt=this.climb;if(Pt>0)for(let V=0;V<6;V++)this.phP.armC[V]+=(Yh[V]-this.phP.armC[V])*Pt,this.phR.armM[V]+=(jh[V]-this.phR.armM[V])*Pt;nn(r,this.phR,_.ret*m),nn(r,this.phS,_.load*m),nn(r,this.phP,_.peak*m)}const g=m*(1-Math.max(_.load,_.peak,_.ret))*(1-k(.4,.7,Dt(t.spread,0,1)))*(1-this.airW);this.handT+=(g-this.handT)*(1-Math.exp(-n/(g>this.handT?T1:E1))),this.handW=Math.min(1,this.handT+f);const p=1-Math.max(_.load,_.peak,_.ret);this.tallQ=.4+.6*this.held,this.tallW+=(p-this.tallW)*(1-Math.exp(-n/(p>this.tallW?i1*this.tallQ:a1)));const M=Number.isFinite(t.hb)?t.hb:0,y=this.active||_.ret>0?this.kB*Math.max(_.load,_.peak,_.ret)*m:0,x=k(df[0],df[1],M);this.kissAge=y*(1-x)>.3?this.kissAge+n:0;const I=y*(1-x)*(1-k(ff[0],ff[1],this.kissAge)),w=y*x*k(pf[0],pf[1],Math.abs(Number.isFinite(t.turn)?t.turn:0));this.drvR=Math.min(w,this.drvR+n/h1);const R=this.drvR;this.drvW=R;const L=this.landW=this.kickT<9?k(_f,Bc,this.kickT)*(1-k(xf[0],xf[1],this.kickT))*m:0;if(this.ldW=y*(1-x)*(1-L),I>0&&(r.hipY-=c1*I,rn(r.knB,$S,I),rn(r.knF,ZS,I)),L>0&&(r.hipY+=Math.max(0,x1-r.hipY)*L,rn(r.knB,Fm,L*k(Bc,vf,this.kickT))),R>0&&(r.hipY+=(l1-r.hipY)*R,rn(r.knB,JS,R)),this.active&&!this.kicked&&this.kS>.5&&this.manSign<0){const At=Number.isFinite(t.t)?t.t:.5,Pt=Number.isFinite(t.turn)?t.turn:0;this.climb*k(mf[0],mf[1],At)*k(gf[0],gf[1],-Pt)>.5&&(this.kicked=!0,this.kickT=0)}this.kickT<9&&(this.kickT+=n),this.kickEnv=k(0,_f,this.kickT)*(1-k(Bc,vf,this.kickT))*m,this.foldEnv=this.kickT<9?k(Ko[0],Ko[1],this.kickT)*(1-k(Ko[2],Ko[3],this.kickT))*m:0;const T=Math.max(Dt(-Math.cos(M)/.4,0,1),k(-.95,-1.4,M)),b=this.active||_.ret>0?Math.min(1,Math.max(k(.75,.9,this.kC),k(.25,.45,this.kC)*k(-.45,-.65,M))+this.kS*(1-this.climb)*T)*Math.max(_.load,_.peak,_.ret)*m:0;this.cutW=b;const D=D1*on*b*Math.max(_.peak,_.ret);this.heel+=(D-this.heel)*(1-Math.exp(-n/.25)),b>0&&(r.hipY+=(P1-r.hipY)*b,rn(r.knB,Bm,b),rn(r.knF,Xh,b)),f>0&&nn(r,Gm,f,k(.5,1,this.tubeLin));const z=a*m,F=m*(1-Math.max(_.load,_.peak,_.ret)),W=this.active&&this.kS>.5&&this.manSign<0&&!this.kicked?this.climb*_.peak*m:0;this.windW=W;const K=t.air===!0,Y=t.landAge!==void 0&&Number.isFinite(t.landAge)?t.landAge:1e9,Z=Dt(Number.isFinite(t.landFlat)?t.landFlat:0,0,1);let H=0,rt=0;if(K){const At=Dt((t.airT??0)/Math.max(.3,t.airDur??1),0,1),Pt=k(Ef[0],Ef[1],At),V=Dt(Math.abs(Number.isFinite(t.spin)?t.spin:0)/z1,0,1),J=Os(1)-B1-H1*V;r.hipY=J+(Os(V1)-J)*Pt,rn(r.knF,[.3,.35,1],1-Pt),rn(r.knB,[.35,.2,1],1-Pt),nn(r,Sf,0,.7),nn(r,Tf,0,Pt)}else Y<zc[1]&&(rt=k(0,X1,Y)*(1-k(zc[0],zc[1],Y)),r.hipY+=(Os(1)-G1-W1*Z-r.hipY)*rt,H=q1*rt,rn(r.chest,[.45,1,.35],rt),nn(r,Tf,0,rt));this.airW=K?1:rt;const ht=K?0:rt>.05?1:0;this.wideW+=Dt(ht-this.wideW,-n/.25,n/.15),Pn(i,gn,rf+H+t1*F+u1*this.ldW+I1*this.cutW-.13*z*(1-.8*this.tallW)-f1*this.drvW,r.hipY,r.shift);const ft=(1-Math.max(_.load,_.peak,_.ret))*m;this.openW+=(ft-this.openW)*(1-Math.exp(-n/(ft>this.openW?r1:o1))),Pn(i,_n,r.chest[0]-.25*z,r.chest[1],r.chest[2]),i[Go]=0}Pn(i,Xe,r.look[0],r.look[1],r.look[2]),o||this.headLook(t,i),Pn(i,br,r.knF[0],r.knF[1],r.knF[2]),Pn(i,Sr,r.knB[0],r.knB[1],r.knB[2]),i[TS]=0,i[Tr]=r.pel,i[Wo]=r.chy,i[Uc]=r.curl;const c=this.fresh?i:this.x;this.vc.set(c[_n],c[_n+1],c[_n+2]).normalize(),R1(c[Tr],c[Wo],c[Uc],this.vc,c[Go],this.qCi).invert();for(let d=0;d<4;d++){const f=3*d,m=this.vd.set(r.armM[f],r.armM[f+1],r.armM[f+2]).applyQuaternion(this.qCi),_=this.ve.set(r.armC[f],r.armC[f+1],r.armC[f+2]).multiplyScalar(1-r.wM).addScaledVector(m,r.wM);_.lengthSq()<1e-8&&_.copy(m),_.normalize(),Pn(i,Oc[d],_.x,_.y,_.z)}const l=this.root.parent;if(this.handW>0&&l){l.matrixWorld.decompose(this.p3,this.qH,this.s3);const d=Dt(this.hv.set(1,0,0).applyQuaternion(this.qH).x/.3,-1,1);this.qH.invert();const f=k(0,1,this.tubeLin);for(let m=0;m<4;m++){if((m&1)===0&&f<=0)continue;const _=m===0?A1:m===1?M1:m===2?w1:y1,g=m===1?b1:m===3?S1:_,p=this.hv.set((_[0]+(g[0]-_[0])*f)*d,_[1]+(g[1]-_[1])*f,_[2]+(g[2]-_[2])*f).normalize().applyQuaternion(this.qH);p.z*=this.cs,p.applyQuaternion(this.qCi);const M=Oc[m],y=(m&1)===0?f:this.handW;this.ve.set(i[M]+(p.x-i[M])*y,i[M+1]+(p.y-i[M+1])*y,i[M+2]+(p.z-i[M+2])*y),this.ve.lengthSq()>1e-6&&(this.ve.normalize(),Pn(i,M,this.ve.x,this.ve.y,this.ve.z))}}o||(Af(i,In,In+3,af+4),Af(i,In+6,In+9,cf+4));const h=this.x,u=this.v;if(this.fresh)h.set(i),u.fill(0),this.fresh=!1;else{for(let g=0;g<Vo;g++){if(g>=In&&g<tf+3)continue;const p=o?9:g===gn+1&&this.tubeLin===0&&i[g]>h[g]&&this.drvW<.05&&this.tallW<.98&&this.landW===0?WS/this.tallQ:g===gn+1&&this.windW>.5&&i[g]<h[g]?XS:g>=Xe&&g<Xe+3?OS:g===Wo?kS:g===Tr?BS:this.airW>.01&&(g<gn+3||g>=_n&&g<_n+3)?j1:(g===gn+1||g>=_n&&g<_n+3)&&this.tubeLin===0?GS:g>=br&&g<Sr+3?zS:g===gn&&this.ldW+this.cutW>.05?VS:HS,M=Math.exp(-p*n),y=h[g]-i[g],x=u[g]+y*p;h[g]=i[g]+(y+x*n)*M,u[g]=(u[g]-x*p*n)*M}const d=o?28:CS,f=o?1:LS,m=Math.max(1,Math.ceil(n/(1/120))),_=n/m;for(let g=0;g<m;g++)for(let p=In;p<tf+3;p++){const M=!o&&p<In+6?PS:d;u[p]+=(M*M*(i[p]-h[p])-2*f*M*u[p])*_,h[p]+=u[p]*_}}if(this.armTurnMax=o?25:kc,o){const d=t.wipeT;t.wipeKind===2?this.root.position.set(-.5*d,e+.9*d-.6*d*d,-.9*d*this.cs):this.root.position.set(1.6*d,e+.5*d-.8*d*d,.35*d*this.cs),this.q1.setFromAxisAngle(this.vc.set(0,0,1),(t.wipeKind===2?1.2:-2.2)*Math.min(1,d)),this.root.quaternion.copy(this.q1)}else this.root.position.set(0,e,0),this.root.quaternion.identity();this.solve(o?Math.min(1,t.wipeT*3):0,t.wipeT,n),this.armFresh=!1}solve(t,e,n){const i=this.x,r=this.b;for(let M=0;M<this.controlled.length;M++)this.controlled[M].quaternion.copy(this.restQ[M]);const o=p1*this.kickEnv+m1*this.foldEnv;let a=i[gn+1]+_1*this.kickEnv-g1*this.foldEnv;const c=.95+n1*Math.max(this.tallW,this.drvW),l=c+v1*this.kickEnv,h=this.va.set(pa[0]+K1*this.wideW,pa[1],pa[2]),u=this.vb.set(ma[0]-Y1*this.wideW,ma[1],ma[2]);t>0&&(h.x+=.2*t*Math.sin(6*e),h.y+=.3*t*(.6+.4*Math.sin(8*e)),h.z+=.2*t*Math.sin(5*e),u.x-=.15*t*Math.cos(7*e),u.y+=.25*t*(.6+.4*Math.cos(9*e)),u.z-=.2*t*Math.sin(4*e+1));for(let M=0;M<2;M++){const y=M===0?h:u,x=this.thighOff[M],I=i[gn]+o+x.x-y.x,w=i[gn+2]+x.z-y.z,R=this.legLen[M]*(M===1?l:c),L=y.y+Math.sqrt(Math.max(.01,R*R-I*I-w*w))-x.y;a>L&&(a=L)}r.pelvis.position.set(i[gn]+o,a,i[gn+2]).applyMatrix4(this.pelvisParentInv),this.root.updateMatrixWorld(!0),this.rootInv.copy(this.root.matrixWorld).invert(),this.root.matrixWorld.decompose(this.p3,this.qR,this.s3),this.qRi.copy(this.qR).invert();const f=this.vc.set(i[_n],i[_n+1],i[_n+2]).normalize(),m=i[Tr],_=i[Wo]-i[Tr];for(let M=0;M<4;M++)hh(M,m,_,i[Uc],f,i[Go],this.q2),M===0&&this.qC.copy(this.q2),M===3&&this.qC.premultiply(this.q2),this.rotateModel(this.spine[M],this.q2,M===0||M===3);this.heel>1e-4&&t===0&&(this.q1.setFromAxisAngle(this.vf.set(1,0,0),-this.heel),this.rotateModel(this.spine[0],this.q1,!0),this.qC.premultiply(this.q1)),this.openW>.001&&t===0&&(this.q1.setFromAxisAngle(this.vf.copy(Un).applyQuaternion(this.qC).add(Un).normalize(),s1*on*this.openW),this.rotateModel(r.spine_03,this.q1,!0)),r.Head.matrixWorld.decompose(this.p3,this.qw,this.s3),this.fwd.copy(this.headFaceLocal).applyQuaternion(this.qw).applyQuaternion(this.qRi);const g=this.vd.set(i[Xe],i[Xe+1],i[Xe+2]).normalize();this.q1.setFromUnitVectors(this.fwd,g),this.q2.identity().slerp(this.q1,.5),this.rotateModel(r.neck_01,this.q2,!0),this.rotateModel(r.Head,this.q2,!0),r.pelvis.matrixWorld.decompose(this.p3,this.qw,this.s3),this.pelLat.copy(this.pelLatLocal).applyQuaternion(this.qw).applyQuaternion(this.qRi),this.q1.setFromAxisAngle(Un,(ef[0]+sf[0]*this.cutW)*m),this.twoBone(r.thigh_l,r.calf_l,r.foot_l,h,this.ve.set(i[br],i[br+1],i[br+2]).applyQuaternion(this.q1),this.hingeLocal[0]),this.q1.setFromAxisAngle(Un,(ef[1]+sf[1]*this.cutW)*m),this.twoBone(r.thigh_r,r.calf_r,r.foot_r,u,this.ve.set(i[Sr],i[Sr+1],i[Sr+2]).applyQuaternion(this.q1),this.hingeLocal[1]),this.aim(r.foot_l,r.ball_l,this.ve.set(.3,-.5,1).normalize()),this.aim(r.foot_r,r.ball_r,this.ve.set(-.05,-.5,1).normalize());for(let M=0;M<4;M++)this.armM[M].copy(this.armDir(M,Oc[M],n)).applyQuaternion(this.qC);this.fwd.set(0,0,1).applyQuaternion(this.qC),t===0&&e<0&&(this.soften(this.armM[0],this.armM[1],af),this.soften(this.armM[2],this.armM[3],cf)),this.softHandDown(r,t===0&&e<0&&this.tubeLin===0,n),this.aim(r.upperarm_l,r.lowerarm_l,this.armM[0]),this.aim(r.lowerarm_l,r.hand_l,this.armM[1]),this.aim(r.upperarm_r,r.lowerarm_r,this.armM[2]),this.aim(r.lowerarm_r,r.hand_r,this.armM[3]);const p=this.handW;if(p>0)for(let M=0;M<2;M++){const y=M===0?r.hand_l:r.hand_r,x=M===0?this.midF:this.midB;if(x===y)continue;const I=this.mpos(y,this.aA),w=this.vd.setFromMatrixPosition(x.matrixWorld).applyMatrix4(this.rootInv).sub(I).normalize();w.lerp(this.armM[M===0?1:3],p).normalize(),this.aimTo(y,x,w)}}softHandDown(t,e,n){const i=this.armM[2],r=this.armM[3],o=this.vc.set(0,1,0).transformDirection(this.rootInv),a=this.mpos(t.upperarm_r,this.aA),c=a.distanceTo(this.mpos(t.lowerarm_r,this.aB)),l=this.aB.distanceTo(this.mpos(t.hand_r,this.vd)),h=a.sub(this.mpos(t.thigh_r,this.vd)).dot(o),u=Math.asin(Dt(i.dot(o),-1,1)),d=Math.asin(Dt(r.dot(o),-1,1)),f=p=>h+c*Math.sin(Math.min(u+p,Xo))+l*Math.sin(Math.min(d+p,Xo));let m=f(0);this.hiMem=Math.max(this.hbPrev,this.hiMem-NS*n);const _=k(of[0],of[1],this.hiMem);this.liftG=_>=this.liftG?_:this.liftG+(_-this.liftG)*(1-Math.exp(-n/FS));const g=m+(this.hbPrev-IS*n-m)*this.liftG;if(e&&!this.hbFresh&&m<g){let p=0,M=US;for(let y=0;y<14;y++){const x=.5*(p+M);f(x)<g?p=x:M=x}this.tipUp(i,o,u,Math.max(u,Math.min(u+M,Xo)),0),this.tipUp(r,o,d,Math.max(d,Math.min(d+M,Xo)),1),m=f(M)}else this.tipUp(i,o,u,u,0),this.tipUp(r,o,d,d,1);this.hbPrev=m,this.hbFresh=!1}tipUp(t,e,n,i,r){const o=this.vf.copy(t).addScaledVector(e,-t.dot(e)),a=o.length(),c=this.headPrev[r].addScaledVector(e,-this.headPrev[r].dot(e));c.lengthSq()>1e-8&&o.normalize().lerp(c.normalize(),Math.max(1-k(.15,.5,a),DS*k(0,.3,i-n))),o.lengthSq()<1e-8&&o.set(-1,0,0).addScaledVector(e,-e.x),o.normalize(),this.headPrev[r].copy(o),!(i<=n)&&t.copy(o).multiplyScalar(Math.cos(i)).addScaledVector(e,Math.sin(i))}aimTo(t,e,n){const i=this.mpos(t,this.aA),r=this.aB.setFromMatrixPosition(e.matrixWorld).applyMatrix4(this.rootInv).sub(i).normalize();this.qa.setFromUnitVectors(r,n),this.rotateModel(t,this.qa,!0)}soften(t,e,n){const i=Dt(t.dot(e),-1,1),r=n*on;if(Math.acos(i)>=r)return;const o=this.vd.copy(this.fwd).addScaledVector(t,-this.fwd.dot(t));o.lengthSq()<.05&&o.copy(Un).addScaledVector(t,-t.y),o.normalize();const a=this.vf.copy(e).addScaledVector(t,-i),c=a.length();a.addScaledVector(o,.1*(1-k(.05,.25,c))),a.lengthSq()<1e-10&&a.copy(o),a.normalize(),e.copy(t).multiplyScalar(Math.cos(r)).addScaledVector(a,Math.sin(r))}armDir(t,e,n){const i=this.ve.set(this.x[e],this.x[e+1],this.x[e+2]);i.lengthSq()<1e-10&&i.copy(this.armPrev[t]),i.normalize();const r=this.armPrev[t];if(this.armFresh)return r.copy(i);const o=r.angleTo(i),a=(t<2&&this.armTurnMax===kc?RS:this.armTurnMax)*n;return o>a&&(this.qa.setFromUnitVectors(r,i),this.q2.identity().slerp(this.qa,a/o),i.copy(r).applyQuaternion(this.q2)),r.copy(i)}mpos(t,e){return e.setFromMatrixPosition(t.matrixWorld).applyMatrix4(this.rootInv)}rotateModel(t,e,n){const i=t.parent;t.matrixWorld.decompose(this.p3,this.qw,this.s3),i.matrixWorld.decompose(this.p3,this.qp,this.s3),this.qw.premultiply(this.qRi).premultiply(e).premultiply(this.qR),t.quaternion.copy(this.qp.invert().multiply(this.qw)),n?t.updateMatrixWorld(!0):(t.updateMatrix(),t.matrixWorld.multiplyMatrices(i.matrixWorld,t.matrix))}aim(t,e,n){const i=this.mpos(t,this.aA),r=this.mpos(e,this.aB).sub(i).normalize();this.qa.setFromUnitVectors(r,n),this.rotateModel(t,this.qa,!0)}twoBone(t,e,n,i,r,o){const a=this.mpos(t,this.H),c=a.distanceTo(this.mpos(e,this.K)),l=this.K.distanceTo(this.mpos(n,this.E)),h=this.T.copy(i).sub(a),u=Math.max(.05,Math.min(h.length(),(c+l)*.999));h.normalize();const d=Dt((c*c+u*u-l*l)/(2*c*u),-1,1),f=Math.sqrt(Math.max(0,1-d*d)),m=this.side.copy(r).addScaledVector(h,-r.dot(h));m.lengthSq()<1e-8&&m.set(0,0,1),m.normalize();for(let L=0;L<3;L++){const T=this.aA.copy(h).multiplyScalar(d).addScaledVector(m,f).normalize(),b=this.aB.copy(m).cross(h).normalize(),D=this.vf.copy(this.pelLat).addScaledVector(T,-this.pelLat.dot(T));b.addScaledVector(T,-b.dot(T));const z=Math.atan2(this.vg.copy(D).cross(b).dot(T),D.dot(b)),F=(nf+(ES-nf)*k(0,1,this.tubeLin))*on;if(Math.abs(z)<=F)break;m.applyAxisAngle(h,Dt(z,-F,F)-z).normalize()}const _=this.K.copy(a).addScaledVector(h,d*c).addScaledVector(m,f*c),g=this.footP.copy(a).addScaledVector(h,u),p=this.E.copy(_).sub(a).normalize();this.aim(t,e,p);const M=this.aA.copy(m).cross(h).normalize();t.matrixWorld.decompose(this.p3,this.qw,this.s3);const y=this.aB.copy(o).applyQuaternion(this.qw).applyQuaternion(this.qRi);if(y.addScaledVector(p,-y.dot(p)),y.lengthSq()>1e-8){y.normalize();const L=Math.atan2(this.vf.copy(y).cross(M).dot(p),y.dot(M));this.qa.setFromAxisAngle(p,L),this.rotateModel(t,this.qa,!0)}const x=this.mpos(e,this.H),I=this.mpos(n,this.vf).sub(x),w=g.sub(_);I.addScaledVector(M,-I.dot(M)),w.addScaledVector(M,-w.dot(M));const R=Math.atan2(this.T.copy(I).cross(w).dot(M),I.dot(w));this.qa.setFromAxisAngle(M,R),this.rotateModel(e,this.qa,!0)}}const Ji=new P,Ns=new P,Er=new P;function Af(s,t,e,n){Ji.set(s[t],s[t+1],s[t+2]).normalize(),Ns.set(s[e],s[e+1],s[e+2]).normalize();const i=n*on;Er.set(0,0,1).addScaledVector(Ji,-Ji.z),Er.lengthSq()<.05&&Er.set(0,1,0).addScaledVector(Ji,-Ji.y),Er.normalize(),!(Math.acos(Dt(Ns.dot(Ji),-1,1))>=i)&&(Ns.copy(Ji).multiplyScalar(Math.cos(i)).addScaledVector(Er,Math.sin(i)),Pn(s,e,Ns.x,Ns.y,Ns.z))}const Ga=(s,t,e)=>{const n=Math.hypot(s,t,e);return[s/n,t/n,e/n]},Vc=Ga(1,-.15,.14),Z1=Ga(.94,.45,.33),J1=Ga(.2,.1,1),Q1=Ga(1,0,.1),tT=.35;function Yo(s,t,e,n){s[t]+=(e[0]-s[t])*n,s[t+1]+=(e[1]-s[t+1])*n,s[t+2]+=(e[2]-s[t+2])*n}function Pn(s,t,e,n,i){s[t]=e,s[t+1]=n,s[t+2]=i}function eT(){return{p:new P,es:new P,eu:new P,n:new P}}const nT={u:0,y:0,A:0,W:0,m:0,sinA:0};function iT(s,t,e,n){const i=s.facePoint(t,e,nT),r=e<0?0:e,o=2*i.A*(r<1?1-r:0),a=i.m;return n.p.set(-t,i.y,i.u),n.es.set(-1,0,0),n.eu.set(0,o/a,-i.W/a),n.n.set(0,i.W/a,o/a),n}function sT(s,t,e,n,i){const r=Math.cos(t),o=Math.sin(t);e.set(s.es.x*r+s.eu.x*o,s.es.y*r+s.eu.y*o,s.es.z*r+s.eu.z*o),n.copy(s.n),i.crossVectors(e,n)}const ga=1.85,rT=.5,Xs=.065,wf=.45,oT=.45,Rf=.5,Cf=.3,Pf=.3;function aT(){const s=ga,t=rT/2,e=new vm,n=s*.52,i=-s*.48;e.moveTo(i,-t*.62),e.bezierCurveTo(-s*.25,-t*1.02,s*.1,-t*1.05,s*.28,-t*.75),e.bezierCurveTo(s*.42,-t*.45,n-.04,-.03,n,0),e.bezierCurveTo(n-.04,.03,s*.42,t*.45,s*.28,t*.75),e.bezierCurveTo(s*.1,t*1.05,-s*.25,t*1.02,i,t*.62),e.lineTo(i,-t*.62);const r=new Hh(e,{depth:Xs*.5,bevelEnabled:!0,bevelThickness:Xs*.25,bevelSize:.02,bevelSegments:2,curveSegments:10});r.rotateX(-Math.PI/2),r.translate(0,Xs*.25,0);const o=r.attributes.position;for(let a=0;a<o.count;a++){const c=o.getX(a);c>s*.2&&o.setY(a,o.getY(a)+Math.pow((c-s*.2)/(s*.32),2)*.09),c<-s*.38&&o.setY(a,o.getY(a)+Math.pow((-c-s*.38)/(s*.1),2)*.02)}return r.computeVertexNormals(),r}function Ar(s,t,e){const n=new ce(new kh(s,t,3,8),e);return n.castShadow=!0,n}const Lf=new P(0,1,0),jo={base:.9,k:.25,refH:3.2,min:.74},Gc={on:.3,off:.22,opacity:.7},cT=Xs*.75,lT=3;function hT(s){const t=s.lastTarget;return Number.isFinite(t)?lT*(t-s.hb):Number.isFinite(s.targetRateF)?s.targetRateF:0}const hi={altMin:Math.PI/2,on:.3,look:.25,rate:3,latchU:.75,pitch:1,pitchU0:.1,pitchU1:.9};class uT{constructor(){v(this,"w",0);v(this,"pitch",0);v(this,"tgt",0);v(this,"lastT",1/0)}update(t,e){if((!t.airborne||t.airT<this.lastT)&&(this.w=0,this.tgt=0),this.lastT=t.airborne?t.airT:1/0,this.pitch=0,!t.airborne)return 0;const n=t.airFlip,i=Math.max(.05,t.airDur),r=Dt(t.airT/i,0,1),o=k(.2,.9,r);if(Math.abs(n)<=hi.altMin)return this.w=0,this.tgt=0,o*n;const a=Math.sign(n);if(r<hi.latchU){const u=-a*(t.airYaw+hi.look*t.airSpin);u>hi.on?this.tgt=1:u<-.3&&(this.tgt=0)}const c=this.tgt-this.w;if(c!==0&&e>0){const u=Math.max(e,i-t.airT-.05),d=Math.max(hi.rate,Math.abs(c)/u);this.w+=Dt(c,-d*e,d*e)}const l=Dt((r-hi.pitchU0)/(hi.pitchU1-hi.pitchU0),0,1),h=Math.sin(Math.PI*l);return this.pitch=hi.pitch*this.w*h*h,o*(n-this.w*2*Math.PI*a)}}class dT{constructor(t){v(this,"turnOver",new uT);v(this,"group",new Be);v(this,"rideRoot",new Be);v(this,"board");v(this,"body",new Be);v(this,"thighs",[]);v(this,"shins",[]);v(this,"torso");v(this,"head");v(this,"uArms",[]);v(this,"fArms",[]);v(this,"stance","regular");v(this,"crouch",.4);v(this,"torsoTwist",0);v(this,"armSpread",0);v(this,"silhouette",new Be);v(this,"silhouetteVisible",!1);v(this,"silParts",[]);v(this,"parts",[]);v(this,"roll",0);v(this,"wipeT",-1);v(this,"fb",eT());v(this,"bx",new P);v(this,"by",new P);v(this,"bz",new P);v(this,"mtx",new Gt);v(this,"qBase",new le);v(this,"qRoll",new le);v(this,"axisX",new P(1,0,0));v(this,"axisZ",new P(0,0,1));v(this,"qPitch",new le);v(this,"tumbleVel",new P);v(this,"tumbleAxis",new P);v(this,"qTmp",new le);v(this,"a",new P);v(this,"b",new P);v(this,"c",new P);v(this,"hip",new P);v(this,"sh",new P);v(this,"dir",new P);v(this,"capJ",{});v(this,"glb",null);v(this,"intent",0);v(this,"drv",{crouch:.4,twist:0,spread:0,stall:0,turn:0,t:.5,inTube:!1,wipeT:-1,wipeKind:1,intent:0,hb:0});for(const f of["hip","chest","headTop","shoulderF","shoulderB","handF","handB","kneeF","kneeB","ankleF","ankleB"])this.capJ[f]=new P;const e=new $e({color:16052194,roughness:.45}),n=new $e({color:16738877,roughness:.5});this.board=new ce(aT(),e);const i=new ce(new fs(ga*.9,.004,.025),n);i.position.set(0,Xs*.77,0),this.board.add(i);const r=new ce(new fs(.12,.1,.012),n);r.position.set(-ga*.42,-.04,0),this.board.add(r);const o=new $e({color:13208930,roughness:.7}),a=new $e({color:1777447,roughness:.65}),c=new $e({color:2308443,roughness:.6});for(let f=0;f<2;f++){const m=Ar(.075,wf-.15,a),_=Ar(.06,oT-.12,a);this.thighs.push(m),this.shins.push(_),this.body.add(m,_);const g=Ar(.05,Cf-.1,c),p=Ar(.045,Pf-.09,o);this.uArms.push(g),this.fArms.push(p),this.body.add(g,p)}this.torso=Ar(.13,Rf-.26,c),this.head=new ce(new ir(.11,12,10),o);const l=new ce(new ir(.115,12,8,0,Math.PI*2,0,Math.PI*.55),a);this.head.add(l),this.head.castShadow=!0,l.castShadow=!0,this.board.castShadow=!0,this.body.add(this.torso,this.head),this.rideRoot.add(this.board,this.body);const h=new Bn({color:201756,transparent:!0,opacity:Gc.opacity,depthWrite:!1,visible:!1}),u=[...this.thighs,...this.shins,...this.uArms,...this.fArms,this.torso,this.head];this.parts.push(...u,this.board);for(const f of u){const m=new ce(f.geometry,h);m.renderOrder=-1,this.silhouette.add(m),this.silParts.push([f,m])}const d=new ce(this.board.geometry,h);d.renderOrder=-1,this.silhouette.add(d),this.silhouette.visible=!1,this.rideRoot.add(this.silhouette),this.group.add(this.rideRoot),this.group.visible=!1,t!=null&&t.model&&this.setModel(t.model)}get bodyKind(){return this.glb?"glb":"capsule"}setModel(t){this.glb&&this.rideRoot.remove(this.glb.root),this.glb=new $1(t),this.glb.setStance(this.stance==="regular"?1:-1),this.rideRoot.remove(this.body),this.rideRoot.add(this.glb.root),this.silhouette.clear(),this.silParts.length=0,this.parts.length=0,this.parts.push(...this.glb.meshes,this.board),this.glb.reset()}joint(t,e){return this.group.updateMatrixWorld(),this.glb?this.glb.joint(t,e):this.rideRoot.localToWorld(e.copy(this.capJ[t]))}reset(){var t;this.wipeT=-1,this.roll=0,this.crouch=.4,this.torsoTwist=0,this.armSpread=0,this.setSilhouette(!1),this.group.visible=!0,this.rideRoot.quaternion.identity(),this.rideRoot.position.set(0,0,0),(t=this.glb)==null||t.reset(),this.intent=0}update(t,e,n){if(t.state==="idle"){this.setSilhouette(!1),this.group.visible=!1;return}if((!(n>=0)||!Number.isFinite(n))&&(n=0),t.state!=="riding"){this.setSilhouette(!1),this.tumble(t,n);return}this.group.visible=!0;const i=iT(e,t.s,t.t,this.fb),r=t.airborne,o=t.hb+this.turnOver.update(t,n);sT(i,o,this.bx,this.by,this.bz),this.mtx.makeBasis(this.bx,this.by,this.bz),this.qBase.setFromRotationMatrix(this.mtx),this.group.position.copy(i.p),r&&(this.group.position.y+=t.airHeight),this.group.quaternion.copy(this.qBase),this.turnOver.pitch!==0&&this.group.quaternion.multiply(this.qPitch.setFromAxisAngle(this.axisZ,this.turnOver.pitch)),this.roll=yn(this.roll,r?0:t.lean,10,n),this.qRoll.setFromAxisAngle(this.axisX,this.roll),this.rideRoot.quaternion.copy(this.qRoll),this.rideRoot.position.set(0,0,0);const a=Math.min(1,Math.abs(t.turnRateF)/2);let c=Dt(.3+.4*a+.15*Math.min(1,t.v/12)-.35*t.stall+.3*Math.min(1,Math.abs(t.skid)),0,1);this.torsoTwist=yn(this.torsoTwist,Dt(.3*t.turnRateF+.4*t.skid,-1.2,1.2),8,n),this.armSpread=yn(this.armSpread,Dt(.7*a+.8*Math.min(1,Math.abs(t.skid)),0,1),8,n),t.inTube&&(c=Math.max(c,Dt(jo.base+jo.k*(jo.refH-t.tubeHeight),jo.min,1))),this.crouch=yn(this.crouch,c,6,n),this.glb?this.driveGlb(t,-1,n):this.pose(this.crouch,t.stall,this.torsoTwist,this.armSpread);let l=!1;t.inTube&&(l=-t.d/(1.5+5*e.hollow(t.s))>=(this.silhouetteVisible?Gc.off:Gc.on)),this.setSilhouette(l)}setSilhouette(t){if(this.silhouetteVisible=t,this.silhouette.visible=t,!!t)for(const[e,n]of this.silParts)n.position.copy(e.position),n.quaternion.copy(e.quaternion),n.scale.copy(e.scale)}driveGlb(t,e,n){const i=this.drv;i.crouch=this.crouch,i.twist=this.torsoTwist,i.spread=this.armSpread,i.stall=t.stall,i.turn=t.airborne?0:t.turnRateF;const r=t.airborne;i.intent=this.intent=yn(this.intent,r?0:hT(t),25,n),i.air=r,i.airT=t.airT,i.airDur=t.airDur,i.spin=t.airSpin,i.landAge=t.landAge,i.landFlat=t.landFlat,i.hb=t.hb,i.t=t.t,i.inTube=t.inTube,i.wipeT=e,i.wipeKind=t.state==="kickedOut"?2:1,this.glb.setStance(this.stance==="regular"?1:-1),this.rideRoot.updateWorldMatrix(!0,!1),this.glb.drive(i,cT,n)}pose(t,e,n=0,i=0){const r=this.stance==="regular"?1:-1,o=Xs*.75,a=[.3,-.42],c=-.06-.12*e,l=o+.86*(1-.38*t);this.hip.set(c,l,.04*r*t);for(let u=0;u<2;u++)this.a.set(a[u],o+.02,0),this.b.set(this.hip.x+(u===0?.09:-.09),this.hip.y,this.hip.z),this.knee(this.a,this.b,r,this.c),(u===0?this.capJ.ankleF:this.capJ.ankleB).copy(this.a),(u===0?this.capJ.kneeF:this.capJ.kneeB).copy(this.c),this.place(this.shins[u],this.a,this.c),this.place(this.thighs[u],this.c,this.b);const h=.25+.6*t;this.dir.set(.12-.15*e+.35*Math.sin(n),Math.cos(h),Math.sin(h)*r*.75).normalize(),this.sh.copy(this.hip).addScaledVector(this.dir,Rf),this.place(this.torso,this.hip,this.sh),this.head.position.copy(this.sh).addScaledVector(this.dir,.2),this.capJ.hip.copy(this.hip),this.capJ.chest.copy(this.sh),this.capJ.headTop.copy(this.head.position).y+=.11;for(let u=0;u<2;u++){const d=u===0?1:-1;this.a.copy(this.sh).add(this.c.set(.17*d,-.04,0)),this.b.copy(this.a).add(this.c.set(.26*d,-.12+.3*i,(.08+.2*i)*r)).sub(this.a).setLength(Cf).add(this.a),(u===0?this.capJ.shoulderF:this.capJ.shoulderB).copy(this.a),this.place(this.uArms[u],this.a,this.b),this.c.set(.2*d,-.2+.1*t,.1*r).setLength(Pf).add(this.b),(u===0?this.capJ.handF:this.capJ.handB).copy(this.c),this.place(this.fArms[u],this.b,this.c)}}knee(t,e,n,i){const r=e.x-t.x,o=e.y-t.y,a=e.z-t.z,c=Math.sqrt(r*r+o*o+a*a),l=wf,h=c<2*l?Math.sqrt(l*l-c*c/4):0;i.set((t.x+e.x)/2,(t.y+e.y)/2,(t.z+e.z)/2),i.z+=h*n}place(t,e,n){t.position.set((e.x+n.x)/2,(e.y+n.y)/2,(e.z+n.z)/2),this.dir.set(n.x-e.x,n.y-e.y,n.z-e.z);const i=this.dir.length();i>1e-6&&(this.dir.multiplyScalar(1/i),t.quaternion.setFromUnitVectors(Lf,this.dir))}tumble(t,e){if(this.wipeT<0){this.wipeT=0;const i=Math.cos(t.hv),r=Math.sin(t.hv);this.tumbleVel.set(-i*t.v*.6,1.5,-r*.6*t.v*.3),t.state==="kickedOut"&&this.tumbleVel.set(-i*t.v*.4,2.2,-2.5),this.tumbleAxis.copy(this.bx).cross(Lf).normalize(),this.tumbleAxis.lengthSq()<1e-6&&this.tumbleAxis.set(0,0,1)}this.wipeT+=e,this.tumbleVel.y-=9.81*e,this.group.position.y<-.6&&this.tumbleVel.multiplyScalar(Math.exp(-4*e)),this.group.position.addScaledVector(this.tumbleVel,e);const n=t.state==="kickedOut"?2.5:7;this.qTmp.setFromAxisAngle(this.tumbleAxis,n*e*Math.exp(-this.wipeT)),this.group.quaternion.premultiply(this.qTmp),this.crouch=yn(this.crouch,1,4,e),this.glb?this.driveGlb(t,this.wipeT,e):this.pose(this.crouch,0),this.wipeT>1.6&&(this.group.visible=!1)}tailWorld(t){return t.set(-ga*.4,.05,0),this.group.updateMatrixWorld(),this.rideRoot.localToWorld(t)}}function fT(s,t=!1){const e=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},o={},a=s[0].morphTargetsRelative,c=new Te;let l=0;for(let h=0;h<s.length;++h){const u=s[h];let d=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in u.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(u.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in u.morphAttributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(u.morphAttributes[f])}if(t){let f;if(e)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,f,h),l+=f}}if(e){let h=0;const u=[];for(let d=0;d<s.length;++d){const f=s[d].index;for(let m=0;m<f.count;++m)u.push(f.getX(m)+h);h+=s[d].attributes.position.count}c.setIndex(u)}for(const h in r){const u=If(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,u)}for(const h in o){const u=o[h][0].length;if(u===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let d=0;d<u;++d){const f=[];for(let _=0;_<o[h].length;++_)f.push(o[h][_][d]);const m=If(f);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(m)}}return c}function If(s){let t,e,n,i=-1,r=0;for(let l=0;l<s.length;++l){const h=s[l];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}const o=new t(r),a=new $t(o,e,n);let c=0;for(let l=0;l<s.length;++l){const h=s[l];if(h.isInterleavedBufferAttribute){const u=c/e;for(let d=0,f=h.count;d<f;d++)for(let m=0;m<e;m++){const _=h.getComponent(d,m);a.setComponent(d+u,m,_)}}else o.set(h.array,c);c+=h.count*e}return i!==void 0&&(a.gpuType=i),a}function Df(s,t){if(t===q0)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(t===$l||t===Kp){let e=s.getIndex();if(e===null){const o=[],a=s.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)o.push(c);s.setIndex(o),e=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const n=e.count-2,i=[];if(t===$l)for(let o=1;o<=n;o++)i.push(e.getX(0)),i.push(e.getX(o)),i.push(e.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(e.getX(o)),i.push(e.getX(o+1)),i.push(e.getX(o+2))):(i.push(e.getX(o+2)),i.push(e.getX(o+1)),i.push(e.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",t),s}class pT extends ur{constructor(t){super(t),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(e){return new xT(e)}),this.register(function(e){return new MT(e)}),this.register(function(e){return new CT(e)}),this.register(function(e){return new PT(e)}),this.register(function(e){return new LT(e)}),this.register(function(e){return new bT(e)}),this.register(function(e){return new ST(e)}),this.register(function(e){return new TT(e)}),this.register(function(e){return new ET(e)}),this.register(function(e){return new vT(e)}),this.register(function(e){return new AT(e)}),this.register(function(e){return new yT(e)}),this.register(function(e){return new RT(e)}),this.register(function(e){return new wT(e)}),this.register(function(e){return new gT(e)}),this.register(function(e){return new IT(e)}),this.register(function(e){return new DT(e)})}load(t,e,n,i){const r=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const l=kr.extractUrlBase(t);o=kr.resolveURL(l,this.path)}else o=kr.extractUrlBase(t);this.manager.itemStart(t);const a=function(l){i?i(l):console.error(l),r.manager.itemError(t),r.manager.itemEnd(t)},c=new Tm(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(t,function(l){try{r.parse(l,o,function(h){e(h),r.manager.itemEnd(t)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(t){return this.dracoLoader=t,this}setKTX2Loader(t){return this.ktx2Loader=t,this}setMeshoptDecoder(t){return this.meshoptDecoder=t,this}register(t){return this.pluginCallbacks.indexOf(t)===-1&&this.pluginCallbacks.push(t),this}unregister(t){return this.pluginCallbacks.indexOf(t)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(t),1),this}parse(t,e,n,i){let r;const o={},a={},c=new TextDecoder;if(typeof t=="string")r=JSON.parse(t);else if(t instanceof ArrayBuffer)if(c.decode(new Uint8Array(t,0,4))===Wm){try{o[ee.KHR_BINARY_GLTF]=new NT(t)}catch(u){i&&i(u);return}r=JSON.parse(o[ee.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(t));else r=t;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new KT(r,{path:e||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){const u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case ee.KHR_MATERIALS_UNLIT:o[u]=new _T;break;case ee.KHR_DRACO_MESH_COMPRESSION:o[u]=new FT(r,this.dracoLoader);break;case ee.KHR_TEXTURE_TRANSFORM:o[u]=new UT;break;case ee.KHR_MESH_QUANTIZATION:o[u]=new OT;break;default:d.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(n,i)}parseAsync(t,e){const n=this;return new Promise(function(i,r){n.parse(t,e,i,r)})}}function mT(){let s={};return{get:function(t){return s[t]},add:function(t,e){s[t]=e},remove:function(t){delete s[t]},removeAll:function(){s={}}}}const ee={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class gT{constructor(t){this.parser=t,this.name=ee.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const t=this.parser,e=this.parser.json.nodes||[];for(let n=0,i=e.length;n<i;n++){const r=e[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&t._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(t){const e=this.parser,n="light:"+t;let i=e.cache.get(n);if(i)return i;const r=e.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[t];let l;const h=new Nt(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],Qe);const u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new Em(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new kb(h),l.distance=u;break;case"spot":l=new Ub(h),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,di(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=e.createUniqueName(c.name||"light_"+t),i=Promise.resolve(l),e.cache.add(n,i),i}getDependency(t,e){if(t==="light")return this._loadLight(e)}createNodeAttachment(t){const e=this,n=this.parser,r=n.json.nodes[t],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return n._getNodeRef(e.cache,a,c)})}}class _T{constructor(){this.name=ee.KHR_MATERIALS_UNLIT}getMaterialType(){return Bn}extendParams(t,e,n){const i=[];t.color=new Nt(1,1,1),t.opacity=1;const r=e.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;t.color.setRGB(o[0],o[1],o[2],Qe),t.opacity=o[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(t,"map",r.baseColorTexture,Oe))}return Promise.all(i)}}class vT{constructor(t){this.parser=t,this.name=ee.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(t,e){const i=this.parser.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(e.emissiveIntensity=r),Promise.resolve()}}class xT{constructor(t){this.parser=t,this.name=ee.KHR_MATERIALS_CLEARCOAT}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:ti}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(e.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(e,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(e.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(e,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(e,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;e.clearcoatNormalScale=new gt(a,a)}return Promise.all(r)}}class MT{constructor(t){this.parser=t,this.name=ee.KHR_MATERIALS_DISPERSION}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:ti}extendMaterialParams(t,e){const i=this.parser.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return e.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class yT{constructor(t){this.parser=t,this.name=ee.KHR_MATERIALS_IRIDESCENCE}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:ti}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(e.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(e,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(e.iridescenceIOR=o.iridescenceIor),e.iridescenceThicknessRange===void 0&&(e.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(e.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(e.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(e,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}}class bT{constructor(t){this.parser=t,this.name=ee.KHR_MATERIALS_SHEEN}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:ti}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[];e.sheenColor=new Nt(0,0,0),e.sheenRoughness=0,e.sheen=1;const o=i.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;e.sheenColor.setRGB(a[0],a[1],a[2],Qe)}return o.sheenRoughnessFactor!==void 0&&(e.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(e,"sheenColorMap",o.sheenColorTexture,Oe)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(e,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}}class ST{constructor(t){this.parser=t,this.name=ee.KHR_MATERIALS_TRANSMISSION}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:ti}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(e.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(e,"transmissionMap",o.transmissionTexture)),Promise.all(r)}}class TT{constructor(t){this.parser=t,this.name=ee.KHR_MATERIALS_VOLUME}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:ti}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];e.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(e,"thicknessMap",o.thicknessTexture)),e.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return e.attenuationColor=new Nt().setRGB(a[0],a[1],a[2],Qe),Promise.all(r)}}class ET{constructor(t){this.parser=t,this.name=ee.KHR_MATERIALS_IOR}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:ti}extendMaterialParams(t,e){const i=this.parser.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return e.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class AT{constructor(t){this.parser=t,this.name=ee.KHR_MATERIALS_SPECULAR}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:ti}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];e.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(e,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return e.specularColor=new Nt().setRGB(a[0],a[1],a[2],Qe),o.specularColorTexture!==void 0&&r.push(n.assignTexture(e,"specularColorMap",o.specularColorTexture,Oe)),Promise.all(r)}}class wT{constructor(t){this.parser=t,this.name=ee.EXT_MATERIALS_BUMP}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:ti}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return e.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(e,"bumpMap",o.bumpTexture)),Promise.all(r)}}class RT{constructor(t){this.parser=t,this.name=ee.KHR_MATERIALS_ANISOTROPY}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:ti}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(e.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(e.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(e,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}}class CT{constructor(t){this.parser=t,this.name=ee.KHR_TEXTURE_BASISU}loadTexture(t){const e=this.parser,n=e.json,i=n.textures[t];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],o=e.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return e.loadTextureImage(t,r.source,o)}}class PT{constructor(t){this.parser=t,this.name=ee.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(t){const e=this.name,n=this.parser,i=n.json,r=i.textures[t];if(!r.extensions||!r.extensions[e])return null;const o=r.extensions[e],a=i.images[o.source];let c=n.textureLoader;if(a.uri){const l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(t,o.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(e)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(t)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(t){const e=new Image;e.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",e.onload=e.onerror=function(){t(e.height===1)}})),this.isSupported}}class LT{constructor(t){this.parser=t,this.name=ee.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(t){const e=this.name,n=this.parser,i=n.json,r=i.textures[t];if(!r.extensions||!r.extensions[e])return null;const o=r.extensions[e],a=i.images[o.source];let c=n.textureLoader;if(a.uri){const l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(t,o.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(e)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(t)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(t){const e=new Image;e.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",e.onload=e.onerror=function(){t(e.height===1)}})),this.isSupported}}class IT{constructor(t){this.name=ee.EXT_MESHOPT_COMPRESSION,this.parser=t}loadBufferView(t){const e=this.parser.json,n=e.bufferViews[t];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(e.extensionsRequired&&e.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const c=i.byteOffset||0,l=i.byteLength||0,h=i.count,u=i.byteStride,d=new Uint8Array(a,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,d,i.mode,i.filter).then(function(f){return f.buffer}):o.ready.then(function(){const f=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(f),h,u,d,i.mode,i.filter),f})})}else return null}}class DT{constructor(t){this.name=ee.EXT_MESH_GPU_INSTANCING,this.parser=t}createNodeMesh(t){const e=this.parser.json,n=e.nodes[t];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=e.meshes[n.mesh];for(const l of i.primitives)if(l.mode!==Mn.TRIANGLES&&l.mode!==Mn.TRIANGLE_STRIP&&l.mode!==Mn.TRIANGLE_FAN&&l.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],c={};for(const l in o)a.push(this.parser.getDependency("accessor",o[l]).then(h=>(c[l]=h,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(t)),Promise.all(a).then(l=>{const h=l.pop(),u=h.isGroup?h.children:[h],d=l[0].count,f=[];for(const m of u){const _=new Gt,g=new P,p=new le,M=new P(1,1,1),y=new ky(m.geometry,m.material,d);for(let x=0;x<d;x++)c.TRANSLATION&&g.fromBufferAttribute(c.TRANSLATION,x),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,x),c.SCALE&&M.fromBufferAttribute(c.SCALE,x),y.setMatrixAt(x,_.compose(g,p,M));for(const x in c)if(x==="_COLOR_0"){const I=c[x];y.instanceColor=new Ql(I.array,I.itemSize,I.normalized)}else x!=="TRANSLATION"&&x!=="ROTATION"&&x!=="SCALE"&&m.geometry.setAttribute(x,c[x]);be.prototype.copy.call(y,m),this.parser.assignFinalMaterial(y),f.push(y)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}}const Wm="glTF",wr=12,Nf={JSON:1313821514,BIN:5130562};class NT{constructor(t){this.name=ee.KHR_BINARY_GLTF,this.content=null,this.body=null;const e=new DataView(t,0,wr),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(t.slice(0,4))),version:e.getUint32(4,!0),length:e.getUint32(8,!0)},this.header.magic!==Wm)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-wr,r=new DataView(t,wr);let o=0;for(;o<i;){const a=r.getUint32(o,!0);o+=4;const c=r.getUint32(o,!0);if(o+=4,c===Nf.JSON){const l=new Uint8Array(t,wr+o,a);this.content=n.decode(l)}else if(c===Nf.BIN){const l=wr+o;this.body=t.slice(l,l+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class FT{constructor(t,e){if(!e)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=ee.KHR_DRACO_MESH_COMPRESSION,this.json=t,this.dracoLoader=e,this.dracoLoader.preload()}decodePrimitive(t,e){const n=this.json,i=this.dracoLoader,r=t.extensions[this.name].bufferView,o=t.extensions[this.name].attributes,a={},c={},l={};for(const h in o){const u=uh[h]||h.toLowerCase();a[u]=o[h]}for(const h in t.attributes){const u=uh[h]||h.toLowerCase();if(o[h]!==void 0){const d=n.accessors[t.attributes[h]],f=qs[d.componentType];l[u]=f.name,c[u]=d.normalized===!0}}return e.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){i.decodeDracoFile(h,function(f){for(const m in f.attributes){const _=f.attributes[m],g=c[m];g!==void 0&&(_.normalized=g)}u(f)},a,l,Qe,d)})})}}class UT{constructor(){this.name=ee.KHR_TEXTURE_TRANSFORM}extendTexture(t,e){return(e.texCoord===void 0||e.texCoord===t.channel)&&e.offset===void 0&&e.rotation===void 0&&e.scale===void 0||(t=t.clone(),e.texCoord!==void 0&&(t.channel=e.texCoord),e.offset!==void 0&&t.offset.fromArray(e.offset),e.rotation!==void 0&&(t.rotation=e.rotation),e.scale!==void 0&&t.repeat.fromArray(e.scale),t.needsUpdate=!0),t}}class OT{constructor(){this.name=ee.KHR_MESH_QUANTIZATION}}class Xm extends so{constructor(t,e,n,i){super(t,e,n,i)}copySampleValue_(t){const e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i*3+i;for(let o=0;o!==i;o++)e[o]=n[r+o];return e}interpolate_(t,e,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,h=i-e,u=(n-e)/h,d=u*u,f=d*u,m=t*l,_=m-l,g=-2*f+3*d,p=f-d,M=1-g,y=p-d+u;for(let x=0;x!==a;x++){const I=o[_+x+a],w=o[_+x+c]*h,R=o[m+x+a],L=o[m+x]*h;r[x]=M*I+y*w+g*R+p*L}return r}}const kT=new le;class BT extends Xm{interpolate_(t,e,n,i){const r=super.interpolate_(t,e,n,i);return kT.fromArray(r).normalize().toArray(r),r}}const Mn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},qs={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Ff={9728:Je,9729:an,9984:Op,9985:oa,9986:Pr,9987:jn},Uf={33071:Bi,33648:Ma,10497:hs},Wc={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},uh={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Li={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},HT={CUBICSPLINE:void 0,LINEAR:Xr,STEP:Wr},Xc={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function zT(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new $e({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:_i})),s.DefaultMaterial}function Qi(s,t,e){for(const n in e.extensions)s[n]===void 0&&(t.userData.gltfExtensions=t.userData.gltfExtensions||{},t.userData.gltfExtensions[n]=e.extensions[n])}function di(s,t){t.extras!==void 0&&(typeof t.extras=="object"?Object.assign(s.userData,t.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+t.extras))}function VT(s,t,e){let n=!1,i=!1,r=!1;for(let l=0,h=t.length;l<h;l++){const u=t[l];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);const o=[],a=[],c=[];for(let l=0,h=t.length;l<h;l++){const u=t[l];if(n){const d=u.POSITION!==void 0?e.getDependency("accessor",u.POSITION):s.attributes.position;o.push(d)}if(i){const d=u.NORMAL!==void 0?e.getDependency("accessor",u.NORMAL):s.attributes.normal;a.push(d)}if(r){const d=u.COLOR_0!==void 0?e.getDependency("accessor",u.COLOR_0):s.attributes.color;c.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){const h=l[0],u=l[1],d=l[2];return n&&(s.morphAttributes.position=h),i&&(s.morphAttributes.normal=u),r&&(s.morphAttributes.color=d),s.morphTargetsRelative=!0,s})}function GT(s,t){if(s.updateMorphTargets(),t.weights!==void 0)for(let e=0,n=t.weights.length;e<n;e++)s.morphTargetInfluences[e]=t.weights[e];if(t.extras&&Array.isArray(t.extras.targetNames)){const e=t.extras.targetNames;if(s.morphTargetInfluences.length===e.length){s.morphTargetDictionary={};for(let n=0,i=e.length;n<i;n++)s.morphTargetDictionary[e[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function WT(s){let t;const e=s.extensions&&s.extensions[ee.KHR_DRACO_MESH_COMPRESSION];if(e?t="draco:"+e.bufferView+":"+e.indices+":"+qc(e.attributes):t=s.indices+":"+qc(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)t+=":"+qc(s.targets[n]);return t}function qc(s){let t="";const e=Object.keys(s).sort();for(let n=0,i=e.length;n<i;n++)t+=e[n]+":"+s[e[n]]+";";return t}function dh(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function XT(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const qT=new Gt;class KT{constructor(t={},e={}){this.json=t,this.extensions={},this.plugins={},this.options=e,this.cache=new mT,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const c=a.match(/Version\/(\d+)/);i=n&&c?parseInt(c[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&o<98?this.textureLoader=new Db(this.options.manager):this.textureLoader=new Hb(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Tm(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(t){this.extensions=t}setPlugins(t){this.plugins=t}parse(t,e){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return Qi(r,a,i),di(a,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){for(const c of a.scenes)c.updateMatrixWorld();t(a)})}).catch(e)}_markDefs(){const t=this.json.nodes||[],e=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=e.length;i<r;i++){const o=e[i].joints;for(let a=0,c=o.length;a<c;a++)t[o[a]].isBone=!0}for(let i=0,r=t.length;i<r;i++){const o=t[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(t,e){e!==void 0&&(t.refs[e]===void 0&&(t.refs[e]=t.uses[e]=0),t.refs[e]++)}_getNodeRef(t,e,n){if(t.refs[e]<=1)return n;const i=n.clone(),r=(o,a)=>{const c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(const[l,h]of o.children.entries())r(h,a.children[l])};return r(n,i),i.name+="_instance_"+t.uses[e]++,i}_invokeOne(t){const e=Object.values(this.plugins);e.push(this);for(let n=0;n<e.length;n++){const i=t(e[n]);if(i)return i}return null}_invokeAll(t){const e=Object.values(this.plugins);e.unshift(this);const n=[];for(let i=0;i<e.length;i++){const r=t(e[i]);r&&n.push(r)}return n}getDependency(t,e){const n=t+":"+e;let i=this.cache.get(n);if(!i){switch(t){case"scene":i=this.loadScene(e);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(e)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(e)});break;case"accessor":i=this.loadAccessor(e);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(e)});break;case"buffer":i=this.loadBuffer(e);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(e)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(e)});break;case"skin":i=this.loadSkin(e);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(e)});break;case"camera":i=this.loadCamera(e);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(t,e)}),!i)throw new Error("Unknown type: "+t);break}this.cache.add(n,i)}return i}getDependencies(t){let e=this.cache.get(t);if(!e){const n=this,i=this.json[t+(t==="mesh"?"es":"s")]||[];e=Promise.all(i.map(function(r,o){return n.getDependency(t,o)})),this.cache.add(t,e)}return e}loadBuffer(t){const e=this.json.buffers[t],n=this.fileLoader;if(e.type&&e.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+e.type+" buffer type is not supported.");if(e.uri===void 0&&t===0)return Promise.resolve(this.extensions[ee.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,o){n.load(kr.resolveURL(e.uri,i.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+e.uri+'".'))})})}loadBufferView(t){const e=this.json.bufferViews[t];return this.getDependency("buffer",e.buffer).then(function(n){const i=e.byteLength||0,r=e.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(t){const e=this,n=this.json,i=this.json.accessors[t];if(i.bufferView===void 0&&i.sparse===void 0){const o=Wc[i.type],a=qs[i.componentType],c=i.normalized===!0,l=new a(i.count*o);return Promise.resolve(new $t(l,o,c))}const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],c=Wc[i.type],l=qs[i.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,d=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,m=i.normalized===!0;let _,g;if(f&&f!==u){const p=Math.floor(d/f),M="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count;let y=e.cache.get(M);y||(_=new l(a,p*f,i.count*f/h),y=new Ny(_,f/h),e.cache.add(M,y)),g=new Dh(y,c,d%f/h,m)}else a===null?_=new l(i.count*c):_=new l(a,d,i.count*c),g=new $t(_,c,m);if(i.sparse!==void 0){const p=Wc.SCALAR,M=qs[i.sparse.indices.componentType],y=i.sparse.indices.byteOffset||0,x=i.sparse.values.byteOffset||0,I=new M(o[1],y,i.sparse.count*p),w=new l(o[2],x,i.sparse.count*c);a!==null&&(g=new $t(g.array.slice(),g.itemSize,g.normalized)),g.normalized=!1;for(let R=0,L=I.length;R<L;R++){const T=I[R];if(g.setX(T,w[R*c]),c>=2&&g.setY(T,w[R*c+1]),c>=3&&g.setZ(T,w[R*c+2]),c>=4&&g.setW(T,w[R*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}g.normalized=m}return g})}loadTexture(t){const e=this.json,n=this.options,r=e.textures[t].source,o=e.images[r];let a=this.textureLoader;if(o.uri){const c=n.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(t,r,a)}loadTextureImage(t,e,n){const i=this,r=this.json,o=r.textures[t],a=r.images[e],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];const l=this.loadImageSource(e,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);const d=(r.samplers||{})[o.sampler]||{};return h.magFilter=Ff[d.magFilter]||an,h.minFilter=Ff[d.minFilter]||jn,h.wrapS=Uf[d.wrapS]||hs,h.wrapT=Uf[d.wrapT]||hs,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Je&&h.minFilter!==an,i.associations.set(h,{textures:t}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(t,e){const n=this,i=this.json,r=this.options;if(this.sourceCache[t]!==void 0)return this.sourceCache[t].then(u=>u.clone());const o=i.images[t],a=self.URL||self.webkitURL;let c=o.uri||"",l=!1;if(o.bufferView!==void 0)c=n.getDependency("bufferView",o.bufferView).then(function(u){l=!0;const d=new Blob([u],{type:o.mimeType});return c=a.createObjectURL(d),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+t+" is missing URI and bufferView");const h=Promise.resolve(c).then(function(u){return new Promise(function(d,f){let m=d;e.isImageBitmapLoader===!0&&(m=function(_){const g=new Le(_);g.needsUpdate=!0,d(g)}),e.load(kr.resolveURL(u,r.path),m,void 0,f)})}).then(function(u){return l===!0&&a.revokeObjectURL(c),di(u,o),u.userData.mimeType=o.mimeType||XT(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),u});return this.sourceCache[t]=h,h}assignTexture(t,e,n,i){const r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[ee.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[ee.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const c=r.associations.get(o);o=r.extensions[ee.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,c)}}return i!==void 0&&(o.colorSpace=i),t[e]=o,o})}assignFinalMaterial(t){const e=t.geometry;let n=t.material;const i=e.attributes.tangent===void 0,r=e.attributes.color!==void 0,o=e.attributes.normal===void 0;if(t.isPoints){const a="PointsMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new io,Hn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(a,c)),n=c}else if(t.isLine){const a="LineBasicMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new fm,Hn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(a,c)),n=c}if(i||r||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=n.clone(),r&&(c.vertexColors=!0),o&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(n))),n=c}t.material=n}getMaterialType(){return $e}loadMaterial(t){const e=this,n=this.json,i=this.extensions,r=n.materials[t];let o;const a={},c=r.extensions||{},l=[];if(c[ee.KHR_MATERIALS_UNLIT]){const u=i[ee.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),l.push(u.extendParams(a,r,e))}else{const u=r.pbrMetallicRoughness||{};if(a.color=new Nt(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){const d=u.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],Qe),a.opacity=d[3]}u.baseColorTexture!==void 0&&l.push(e.assignTexture(a,"map",u.baseColorTexture,Oe)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(e.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),l.push(e.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(t)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(t,a)})))}r.doubleSided===!0&&(a.side=Ge);const h=r.alphaMode||Xc.OPAQUE;if(h===Xc.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===Xc.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==Bn&&(l.push(e.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new gt(1,1),r.normalTexture.scale!==void 0)){const u=r.normalTexture.scale;a.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&o!==Bn&&(l.push(e.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==Bn){const u=r.emissiveFactor;a.emissive=new Nt().setRGB(u[0],u[1],u[2],Qe)}return r.emissiveTexture!==void 0&&o!==Bn&&l.push(e.assignTexture(a,"emissiveMap",r.emissiveTexture,Oe)),Promise.all(l).then(function(){const u=new o(a);return r.name&&(u.name=r.name),di(u,r),e.associations.set(u,{materials:t}),r.extensions&&Qi(i,u,r),u})}createUniqueName(t){const e=pe.sanitizeNodeName(t||"");return e in this.nodeNamesUsed?e+"_"+ ++this.nodeNamesUsed[e]:(this.nodeNamesUsed[e]=0,e)}loadGeometries(t){const e=this,n=this.extensions,i=this.primitiveCache;function r(a){return n[ee.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,e).then(function(c){return Of(c,a,e)})}const o=[];for(let a=0,c=t.length;a<c;a++){const l=t[a],h=WT(l),u=i[h];if(u)o.push(u.promise);else{let d;l.extensions&&l.extensions[ee.KHR_DRACO_MESH_COMPRESSION]?d=r(l):d=Of(new Te,l,e),i[h]={primitive:l,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(t){const e=this,n=this.json,i=this.extensions,r=n.meshes[t],o=r.primitives,a=[];for(let c=0,l=o.length;c<l;c++){const h=o[c].material===void 0?zT(this.cache):this.getDependency("material",o[c].material);a.push(h)}return a.push(e.loadGeometries(o)),Promise.all(a).then(function(c){const l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let f=0,m=h.length;f<m;f++){const _=h[f],g=o[f];let p;const M=l[f];if(g.mode===Mn.TRIANGLES||g.mode===Mn.TRIANGLE_STRIP||g.mode===Mn.TRIANGLE_FAN||g.mode===void 0)p=r.isSkinnedMesh===!0?new hm(_,M):new ce(_,M),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),g.mode===Mn.TRIANGLE_STRIP?p.geometry=Df(p.geometry,Kp):g.mode===Mn.TRIANGLE_FAN&&(p.geometry=Df(p.geometry,$l));else if(g.mode===Mn.LINES)p=new By(_,M);else if(g.mode===Mn.LINE_STRIP)p=new Nh(_,M);else if(g.mode===Mn.LINE_LOOP)p=new Hy(_,M);else if(g.mode===Mn.POINTS)p=new Fa(_,M);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(p.geometry.morphAttributes).length>0&&GT(p,r),p.name=e.createUniqueName(r.name||"mesh_"+t),di(p,r),g.extensions&&Qi(i,p,g),e.assignFinalMaterial(p),u.push(p)}for(let f=0,m=u.length;f<m;f++)e.associations.set(u[f],{meshes:t,primitives:f});if(u.length===1)return r.extensions&&Qi(i,u[0],r),u[0];const d=new Be;r.extensions&&Qi(i,d,r),e.associations.set(d,{meshes:t});for(let f=0,m=u.length;f<m;f++)d.add(u[f]);return d})}loadCamera(t){let e;const n=this.json.cameras[t],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?e=new je(xg.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(e=new Ph(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(e.name=this.createUniqueName(n.name)),di(e,n),Promise.resolve(e)}loadSkin(t){const e=this.json.skins[t],n=[];for(let i=0,r=e.joints.length;i<r;i++)n.push(this._loadNodeShallow(e.joints[i]));return e.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",e.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const r=i.pop(),o=i,a=[],c=[];for(let l=0,h=o.length;l<h;l++){const u=o[l];if(u){a.push(u);const d=new Gt;r!==null&&d.fromArray(r.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',e.joints[l])}return new Na(a,c)})}loadAnimation(t){const e=this.json,n=this,i=e.animations[t],r=i.name?i.name:"animation_"+t,o=[],a=[],c=[],l=[],h=[];for(let u=0,d=i.channels.length;u<d;u++){const f=i.channels[u],m=i.samplers[f.sampler],_=f.target,g=_.node,p=i.parameters!==void 0?i.parameters[m.input]:m.input,M=i.parameters!==void 0?i.parameters[m.output]:m.output;_.node!==void 0&&(o.push(this.getDependency("node",g)),a.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",M)),l.push(m),h.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(u){const d=u[0],f=u[1],m=u[2],_=u[3],g=u[4],p=[];for(let M=0,y=d.length;M<y;M++){const x=d[M],I=f[M],w=m[M],R=_[M],L=g[M];if(x===void 0)continue;x.updateMatrix&&x.updateMatrix();const T=n._createAnimationTracks(x,I,w,R,L);if(T)for(let b=0;b<T.length;b++)p.push(T[b])}return new Ab(r,void 0,p)})}createNodeMesh(t){const e=this.json,n=this,i=e.nodes[t];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const o=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,l=i.weights.length;c<l;c++)a.morphTargetInfluences[c]=i.weights[c]}),o})}loadNode(t){const e=this.json,n=this,i=e.nodes[t],r=n._loadNodeShallow(t),o=[],a=i.children||[];for(let l=0,h=a.length;l<h;l++)o.push(n.getDependency("node",a[l]));const c=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(o),c]).then(function(l){const h=l[0],u=l[1],d=l[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,qT)});for(let f=0,m=u.length;f<m;f++)h.add(u[f]);return h})}_loadNodeShallow(t){const e=this.json,n=this.extensions,i=this;if(this.nodeCache[t]!==void 0)return this.nodeCache[t];const r=e.nodes[t],o=r.name?i.createUniqueName(r.name):"",a=[],c=i._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(t)});return c&&a.push(c),r.camera!==void 0&&a.push(i.getDependency("camera",r.camera).then(function(l){return i._getNodeRef(i.cameraCache,r.camera,l)})),i._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(t)}).forEach(function(l){a.push(l)}),this.nodeCache[t]=Promise.all(a).then(function(l){let h;if(r.isBone===!0?h=new um:l.length>1?h=new Be:l.length===1?h=l[0]:h=new be,h!==l[0])for(let u=0,d=l.length;u<d;u++)h.add(l[u]);if(r.name&&(h.userData.name=r.name,h.name=o),di(h,r),r.extensions&&Qi(n,h,r),r.matrix!==void 0){const u=new Gt;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);return i.associations.has(h)||i.associations.set(h,{}),i.associations.get(h).nodes=t,h}),this.nodeCache[t]}loadScene(t){const e=this.extensions,n=this.json.scenes[t],i=this,r=new Be;n.name&&(r.name=i.createUniqueName(n.name)),di(r,n),n.extensions&&Qi(e,r,n);const o=n.nodes||[],a=[];for(let c=0,l=o.length;c<l;c++)a.push(i.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let h=0,u=c.length;h<u;h++)r.add(c[h]);const l=h=>{const u=new Map;for(const[d,f]of i.associations)(d instanceof Hn||d instanceof Le)&&u.set(d,f);return h.traverse(d=>{const f=i.associations.get(d);f!=null&&u.set(d,f)}),u};return i.associations=l(r),r})}_createAnimationTracks(t,e,n,i,r){const o=[],a=t.name?t.name:t.uuid,c=[];Li[r.path]===Li.weights?t.traverse(function(d){d.morphTargetInfluences&&c.push(d.name?d.name:d.uuid)}):c.push(a);let l;switch(Li[r.path]){case Li.weights:l=sr;break;case Li.rotation:l=rr;break;case Li.position:case Li.scale:l=or;break;default:switch(n.itemSize){case 1:l=sr;break;case 2:case 3:default:l=or;break}break}const h=i.interpolation!==void 0?HT[i.interpolation]:Xr,u=this._getArrayFromAccessor(n);for(let d=0,f=c.length;d<f;d++){const m=new l(c[d]+"."+Li[r.path],e.array,u,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(m),o.push(m)}return o}_getArrayFromAccessor(t){let e=t.array;if(t.normalized){const n=dh(e.constructor),i=new Float32Array(e.length);for(let r=0,o=e.length;r<o;r++)i[r]=e[r]*n;e=i}return e}_createCubicSplineTrackInterpolant(t){t.createInterpolant=function(n){const i=this instanceof rr?BT:Xm;return new i(this.times,this.values,this.getValueSize()/3,n)},t.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function YT(s,t,e){const n=t.attributes,i=new Mi;if(n.POSITION!==void 0){const a=e.json.accessors[n.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(i.set(new P(c[0],c[1],c[2]),new P(l[0],l[1],l[2])),a.normalized){const h=dh(qs[a.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=t.targets;if(r!==void 0){const a=new P,c=new P;for(let l=0,h=r.length;l<h;l++){const u=r[l];if(u.POSITION!==void 0){const d=e.json.accessors[u.POSITION],f=d.min,m=d.max;if(f!==void 0&&m!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(m[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(m[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(m[2]))),d.normalized){const _=dh(qs[d.componentType]);c.multiplyScalar(_)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}s.boundingBox=i;const o=new Jn;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=o}function Of(s,t,e){const n=t.attributes,i=[];function r(o,a){return e.getDependency("accessor",o).then(function(c){s.setAttribute(a,c)})}for(const o in n){const a=uh[o]||o.toLowerCase();a in s.attributes||i.push(r(n[o],a))}if(t.indices!==void 0&&!s.index){const o=e.getDependency("accessor",t.indices).then(function(a){s.setIndex(a)});i.push(o)}return ne.workingColorSpace!==Qe&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${ne.workingColorSpace}" not supported.`),di(s,t),YT(s,t,e),Promise.all(i).then(function(){return t.targets!==void 0?VT(s,t.targets,e):s})}const kf={vest:new Nt(15905076),shorts:new Nt(1920607)},Bf=3810328;function jT(s){const t=s.clone();return t.onBeforeCompile=e=>{e.uniforms.uVest={value:kf.vest},e.uniforms.uVestOn={value:0},e.uniforms.uShorts={value:kf.shorts},e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
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
void main() {`)},t.customProgramCacheKey=()=>"surfer-outfit",t}function Hf(s,t){const e=s.material.clone();e.color.set(t),s.material=e}async function $T(s,t){const e=new pT;typeof document>"u"&&e.register(()=>({name:"surfer-headless",loadTexture:()=>Promise.resolve(null)}));const[n,i]=await Promise.all([e.parseAsync(s,""),e.parseAsync(t,"")]),r=new Be;r.name="surfer-model",r.add(n.scene);const o=[];let a=null;if(n.scene.traverse(f=>{const m=f;if(!m.isSkinnedMesh)return;const _=m.material.name;_==="MI_Hair_1"&&Hf(m,Bf),_==="MI_Superhero_Male"&&(m.material=jT(m.material),a=m),o.push(m)}),!a)throw new Error("surfer body mesh not found");const c=a;o.splice(o.indexOf(c),1),o.unshift(c);const l=c.skeleton,h=new Map(l.bones.map(f=>[f.name,f])),u=[];i.scene.traverse(f=>{f.isSkinnedMesh&&u.push(f)});for(const f of u){const m=f.skeleton.bones.map(_=>h.get(_.name)??_);f.bind(new Na(m,f.skeleton.boneInverses),f.bindMatrix),Hf(f,Bf),r.add(f),o.push(f)}for(const f of o)f.castShadow=!0,f.frustumCulled=!1;const d=f=>{const m=h.get(f);if(!m)throw new Error("surfer bone "+f);return m};return r.updateMatrixWorld(!0),{root:r,meshes:o,skeleton:l,bone:d}}async function ZT(s="./models/"){const t=async i=>{const r=await fetch(s+i);if(!r.ok)throw new Error(`${i}: HTTP ${r.status}`);return r.arrayBuffer()},[e,n]=await Promise.all([t("surfer-body.glb"),t("surfer-hair.glb")]);return $T(e,n)}function qm(s){return{x:-Math.cos(s),y:-Math.sin(s)}}function JT(s,t,e){const n=Number.isFinite(e)?e:0,i=qm(n),r=s.x*i.x+s.y*i.y;return t.x*i.x+t.y*i.y>=r?{back:s,front:t}:{back:t,front:s}}function zf(s,t){return Math.atan2(-(t.y-s.y),-(t.x-s.x))}function QT(s,t){return Ui(t-s)}function tE(s,t){return!(t>1)||!Number.isFinite(s)?0:Dt((s/t-1.1)/.4,0,1)}const eE=.6,nE=3.6,iE=13;function Kc(s){return!Number.isFinite(s)||Math.abs(s)<eE?0:Math.sign(s)*Dt(Math.abs(s)*nE,0,iE)}const sE=350,rE=40,Yc=8;function oE(s,t){if(!s||!t||s.foot!=="front"||t.foot!=="back")return!1;const e=t.t-s.t;return e>=rE&&e<=sE}const Km=80;function aE(s,t,e,n){if(!(e>0)||s.length<2)return 0;let i=-1;for(let m=s.length-1;m>=0;m--)if(s[m].t<=t){i=m;break}if(i<1)return 0;const r=t-Km;let o=i;for(;o>0&&s[o-1].t>=r&&s[o-1].t<=s[o].t;)o--;const a=s.slice(o,i+1);if(o===i){const m=s[i-1],_=s[i],g=_.t-m.t;if(!(g>0))return 0;const p=Dt((r-m.t)/g,0,1);a.unshift({t:m.t+g*p,x:m.x+(_.x-m.x)*p,y:m.y+(_.y-m.y)*p})}const c=a[0],l=a[a.length-1],h=l.t-c.t;if(!(h>=4))return 0;const u=Math.hypot(l.x-c.x,l.y-c.y)/e*(1e3/h);let d;if(n&&Number.isFinite(n.x)&&Number.isFinite(n.y)){let m=0;for(let _=0;_+1<a.length;_++){const g=a[_].x-n.x,p=a[_].y-n.y,M=a[_+1].x-a[_].x,y=a[_+1].y-a[_].y;m-=g*y-p*M}d=Math.sign(m)}else d=Math.sign(-(l.y-c.y));const f=d*u;return Number.isFinite(f)&&f!==0?f:0}const cE=1e3;function lE(s,t,e,n){if(!(e>0)||s.length<2||!Number.isFinite(n.x)||!Number.isFinite(n.y))return 0;let i=s.length-1;for(;i>=0&&s[i].t>t;)i--;if(i<1)return 0;const r=t-Km;let o=i;for(;o>0&&s[o-1].t>=r&&s[o-1].t<=s[o].t;)o--;o===i&&(o=i-1);const a=s[i].t-s[o].t;if(!(a>=4))return 0;let c=0,l=0;for(let u=o;u<i;u++){const d=s[u],f=s[u+1],m=f.x-d.x,_=f.y-d.y;c+=Math.hypot(m,_),l+=(d.x-n.x)*_-(d.y-n.y)*m}const h=Math.sign(l)*(c/e)*(1e3/a);return Number.isFinite(h)&&h!==0?h:0}const Ym=Math.PI/6,jm=Math.PI/3,$h=1.25,wa=Math.PI/180,fh=[75*wa,125*wa],Zh=1.86,hE=s=>(s[0]+s[1])/2,$m=Zh-$h,Vf=(Zh*hE(fh)-$h*(Ym+jm)/2)/$m,Gf=[Vf-22.5*wa,Vf+22.5*wa];function jc(s,t,e){if(s<=t)return 0;const n=e-t;if(s>=e)return n/2+(s-e);const i=(s-t)/n;return n*(i*i*i-i*i*i*i/2)}function Jh(s,t){if(!Number.isFinite(s)||!Number.isFinite(t))return 0;const e=Math.abs(s),n=$h*jc(e,Ym,jm)-Zh*jc(e,fh[0],fh[1])+$m*jc(e,Gf[0],Gf[1]);return Math.sign(s)*t*(e+n)}const $c=.02,uE=1/8;function Zc(s){if(!Number.isFinite(s))return 0;const t=Math.abs(s);return t<=$c?0:Math.sign(s)*Dt((t-$c)/(uE-$c),0,1)}const dE=300,Wf=20,fE=3.2,Xf=[0,1.2,2.4],pE=250,mE=.3,gE=3,_E=1.3,Qh=60,Vr=3,tu=1.5,eu=5,vE=60*(Math.PI/180),xE=.1,Jc=Math.PI/2,ME=.1,$o=.03,yE=45*Math.PI/180,qf=25*Math.PI/180,bE=.1*Math.PI/180,SE=20*Math.PI/180,Zo=2*Qh,TE=10,EE=250,AE=.1,wE=2,RE=1e3/60,CE=50,Jo=48*(Math.PI/180),PE=68*(Math.PI/180),LE=5,Kf=[21*(Math.PI/180),35*(Math.PI/180)],Yf=[45*(Math.PI/180),70*(Math.PI/180)],IE=.1,jf=4*Qh,Qc=180*(Math.PI/180),$f=25*(Math.PI/180),Zf=.42;function DE(s){const t=Math.abs(s);if(t<=Qc)return s;const e=t-Qc;return Math.sign(s)*(Qc+(1-Zf)*$f*Math.tanh(e/$f)+Zf*e)}function Jf(s,t,e){if(s<=t)return 0;const n=e-t;if(s>=e)return n/2+(s-e);const i=(s-t)/n;return n*(i*i*i-i*i*i*i/2)}function NE(s,t){if(!Number.isFinite(s)||!(t>0))return 0;const e=Math.abs(s);if(e===0)return 0;let n=0,i=e/t/.3+1e-6;for(let r=0;r<60;r++){const o=(n+i)/2;Jh(o,t)<e?n=o:i=o}return Math.sign(s)*(n+i)/2}function FE(s,t,e){if(!Number.isFinite(s)||!Number.isFinite(t))return NaN;const n=Math.abs(s),i=PE-Jo,r=Math.sign(s)*(n<=Jo?n:Jo+i*Math.tanh((n-Jo)/i)),o=Math.abs(t),a=Math.sign(t)*LE*(Jf(o,Kf[0],Kf[1])-(1-IE)*Jf(o,Yf[0],Yf[1])),c=Jh(r,e)+a,l=DE(c);return a===0&&l===c?r:NE(l,e)}const UE=.2,OE=1*(Math.PI/180),kE=3*(Math.PI/180),tl=.2,BE=50;class HE{constructor(t,e,n={}){v(this,"_mode","hand");v(this,"_thumbTurnCm",Vr);v(this,"_gain",_E);v(this,"grip",!1);v(this,"stall",0);v(this,"drive",0);v(this,"keyFlick",Xf[0]);v(this,"keySign",1);v(this,"ptrs",new Map);v(this,"feet",null);v(this,"h0",0);v(this,"aPrev",0);v(this,"accum",0);v(this,"dist0",0);v(this,"slideAcc",0);v(this,"resB",0);v(this,"resF",0);v(this,"rotAct",0);v(this,"lastDist",0);v(this,"rotT",0);v(this,"latched",!1);v(this,"thumbGrip",!1);v(this,"tLatched",!1);v(this,"tTot",0);v(this,"tEff",0);v(this,"tAcc",0);v(this,"tSep0",0);v(this,"tVx",0);v(this,"tVy",0);v(this,"tSbar",0);v(this,"tThr",0);v(this,"tPendF",0);v(this,"tPendB",0);v(this,"tPendT",0);v(this,"tRotSum",0);v(this,"tRotT",0);v(this,"tEpSign",0);v(this,"tEpNet",0);v(this,"tEpCommit",!1);v(this,"tHeld",0);v(this,"lastLift",null);v(this,"liftPivot",null);v(this,"liftWatch",null);v(this,"gestureMax",0);v(this,"multi",!1);v(this,"threeSince",null);v(this,"debugFired",!1);v(this,"mouseDown",null);v(this,"keyGrip",!1);v(this,"keyUp",!1);v(this,"keyDown",!1);v(this,"keyShift",!1);v(this,"keyF",!1);v(this,"keyAccum",0);v(this,"pushAcc",0);v(this,"scissorAcc",0);v(this,"pushReadAt",-1/0);v(this,"queue",[]);v(this,"now");v(this,"screenH");v(this,"offs",[]);v(this,"inAir");v(this,"roleAxis",null);this.el=t,this.getBoardHeading=e,n.gain!==void 0&&(this.gain=n.gain),n.mode==="thumbs"&&(this._mode="thumbs"),n.thumbTurnCm!==void 0&&(this.thumbTurnCm=n.thumbTurnCm),this.inAir=n.inAir??(()=>!1),this.now=n.now??(()=>performance.now()),this.screenH=n.screenHeight??(()=>typeof window<"u"?window.innerHeight:800);const i=n.keyTarget!==void 0?n.keyTarget:typeof window<"u"?window:null,r=n.docTarget!==void 0?n.docTarget:typeof document<"u"?document:null;this.on(t,"pointerdown",o=>this.onDown(o)),this.on(t,"pointermove",o=>this.onMove(o)),this.on(t,"pointerup",o=>this.onUp(o,!1)),this.on(t,"pointercancel",o=>this.onUp(o,!0)),i&&(this.on(i,"keydown",o=>this.onKey(o,!0)),this.on(i,"keyup",o=>this.onKey(o,!1)),this.on(i,"blur",()=>this.clearAll())),r&&this.on(r,"visibilitychange",()=>{(r.visibilityState===void 0||r.visibilityState!=="visible")&&this.clearAll()})}get mode(){return this._mode}set mode(t){t!=="hand"&&t!=="thumbs"||t===this._mode||(this._mode=t,this.ptrs.size>0&&(this.feet&&this.endGrip(),this.lastLift=null,this.liftWatch=null,this.liftPivot=null,this.multi=!0))}get thumbTurnCm(){return this._thumbTurnCm}set thumbTurnCm(t){Number.isFinite(t)&&(this._thumbTurnCm=Math.min(eu,Math.max(tu,t)))}get gain(){return this._gain}set gain(t){Number.isFinite(t)&&(this._gain=Math.min(gE,Math.max(mE,t)))}on(t,e,n){t.addEventListener(e,n),this.offs.push(()=>t.removeEventListener(e,n))}dispose(){for(const t of this.offs)t();this.offs.length=0}get targetHeading(){return this.feet?this.h0+Jh(this.accum,this.gain):this.keyGrip?this.h0+this.keyAccum:null}get pairRotation(){return this.feet?this.accum:0}get pointers(){const t=[];for(const e of this.ptrs.values()){const n=this.feet?e.id===this.feet.back?"B":e.id===this.feet.front?"F":null:null;t.push({id:e.id,x:e.x,y:e.y,label:n})}return t}takePush(){const t=this.pushAcc;this.pushAcc=0;const e=this.now(),n=Number.isFinite(e)?e-this.pushReadAt:0;Number.isFinite(e)&&(this.pushReadAt=e);const i=n>0&&n<=CE?Math.max(1,Math.min(wE,n/RE)):1,r=AE*i;return Number.isFinite(t)?Math.max(-r,Math.min(r,t)):0}takeScissor(){const t=this.scissorAcc;return this.scissorAcc=0,this.feet&&Number.isFinite(t)?t:0}drain(){const t=this.queue;return this.queue=[],t}rebase(t){Number.isFinite(t)&&(this.h0=t,this.accum=0,this.keyAccum=0,this.feet&&(this.latchAngle(),this.thumbGrip&&this.latchThumbs()))}checkDebugHold(){this.threeSince===null||this.debugFired||this.now()-this.threeSince>=pE&&(this.debugFired=!0,this.multi=!0,this.queue.push({type:"debug"}))}update(t){if(this.checkDebugHold(),!(!(t>0)||!Number.isFinite(t))){if(this.keyGrip&&!this.feet){const e=(this.keyUp?1:0)-(this.keyDown?1:0);this.keyAccum+=e*fE*t,this.stall=this.keyShift?1:0,this.drive=this.keyF?1:0}if(this.thumbGrip&&this.feet&&this.tEpSign!==0&&!this.tEpCommit&&!(this.tRotSum*Math.exp(-Math.max(0,this.now()-this.tRotT)/1e3/$o)/$o*this.tEpSign>=qf)&&(this.tEpSign=this.tEpNet=0,this.tEpCommit=!1,this.tHeld!==0)){this.tHeld=0;const n=this.screenH(),i=Zc(this.tThr/(n>0?n:800));Number.isFinite(i)&&(this.stall=Math.max(0,-i),this.drive=Math.max(0,i))}}}onDown(t){var i,r,o;if((i=t.preventDefault)==null||i.call(t),t.pointerType==="mouse"){this.mouseDown={id:t.pointerId,x0:t.clientX,y0:t.clientY,maxMove:0};return}if(this.ptrs.has(t.pointerId))return;try{(o=(r=this.el).setPointerCapture)==null||o.call(r,t.pointerId)}catch{}const e=this.now();this.ptrs.set(t.pointerId,{id:t.pointerId,x:t.clientX,y:t.clientY,x0:t.clientX,y0:t.clientY,t0:e,maxMove:0,hist:[{t:e,x:t.clientX,y:t.clientY}]});const n=this.ptrs.size;if(this.gestureMax=Math.max(this.gestureMax,n),n===3){this.threeSince===null&&(this.threeSince=e);return}n===2&&!this.feet&&!this.keyGrip&&this.startGrip()}startGrip(){const[t,e]=[...this.ptrs.values()],n=this.getBoardHeading();this.thumbGrip=this._mode==="thumbs";const{back:i,front:r}=this.thumbGrip?t.x<=e.x?{back:e,front:t}:{back:t,front:e}:this.airRoles(t,e)??JT(t,e,n);this.feet={back:i.id,front:r.id},this.saveRoleAxis(i,r),this.h0=Number.isFinite(n)?n:0,this.slideAcc=0,this.resB=0,this.resF=0,this.rotAct=0,this.rotT=this.now(),this.accum=0,this.dist0=0,this.latched=!1,this.latchAngle(),this.tSep0=0,this.thumbGrip&&this.latchThumbs(),this.stall=0,this.drive=0,this.grip=!0,this.lastLift=null,this.liftWatch=null,this.liftPivot=null,this.queue.push({type:"grip"})}airRoles(t,e){if(!this.inAir())return null;if(this.lastLift&&(this.liftWatch===t.id||this.liftWatch===e.id)){const i=this.liftWatch===t.id?t:e,r=i===t?e:t;return this.lastLift.foot==="front"?{back:i,front:r}:{back:r,front:i}}const n=this.roleAxis;return n?e.x*n.x+e.y*n.y>=t.x*n.x+t.y*n.y?{back:t,front:e}:{back:e,front:t}:null}saveRoleAxis(t,e){const n=e.x-t.x,i=e.y-t.y,r=Math.hypot(n,i);r>1e-6&&Number.isFinite(r)&&(this.roleAxis={x:n/r,y:i/r})}latchAngle(){const t=this.ptrs.get(this.feet.back),e=this.ptrs.get(this.feet.front);if(!t||!e)return;const n=Math.hypot(e.x-t.x,e.y-t.y);n>=Yc?(this.aPrev=zf(t,e),this.latched=!0,this.dist0===0&&(this.dist0=n)):this.latched=!1}latchThumbs(){this.tTot=this.tAcc=this.tEff=0,this.tThr=0,this.tPendF=this.tPendB=0,this.tPendT=this.now(),this.tRotSum=0,this.tRotT=this.tPendT,this.tEpSign=this.tEpNet=this.tHeld=0,this.tEpCommit=!1,this.tLatched=!1,this.latchThumbLine()}latchThumbLine(){const t=this.ptrs.get(this.feet.back),e=this.ptrs.get(this.feet.front);if(!t||!e)return;const n=t.x-e.x,i=t.y-e.y,r=Math.hypot(n,i);if(!Number.isFinite(r)||r<Zo){this.tLatched=!1;return}this.tVx=n,this.tVy=i,this.tSbar=r,this.tLatched=!0,this.tSep0===0&&(this.tSep0=r)}updateThumbs(t,e,n){const i=this.ptrs.get(this.feet.back),r=this.ptrs.get(this.feet.front),o=t?{x:e,y:n}:i,a=t?r:{x:e,y:n},c=a.x-o.x,l=a.y-o.y,h=Math.hypot(c,l),u=this.now();this.tRotSum*=Math.exp(-Math.max(0,u-this.tRotT)/1e3/$o),this.tRotT=u;const d=r.x-i.x,f=r.y-i.y,m=Math.atan2(c*f-l*d,c*d+l*f);Number.isFinite(m)&&Math.abs(m)<=Jc&&h>=Zo&&Math.hypot(d,f)>=Zo&&(this.tRotSum+=m);const _=this.tRotSum/$o;this.tEpSign!==0&&!(_*this.tEpSign>=qf)&&(this.tEpSign=this.tEpNet=this.tHeld=0,this.tEpCommit=!1),this.tEpSign===0&&Math.abs(_)>=yE&&(this.tEpSign=Math.sign(_));const g=this.tEpSign!==0&&m*this.tEpSign>=bE;g&&(this.tEpNet+=m);const p=this.tThr;if(Number.isFinite(h)&&h>=Yc){const F=this.now(),W=Math.exp(-Math.max(0,F-this.tPendT)/1e3/ME);this.tPendT=F,this.tPendF*=W,this.tPendB*=W;const K=t?i:r,Y=K.x-e,Z=K.y-n,H=(Y*c+Z*l)/h,rt=Math.abs(Y*l-Z*c)/h,ht=Math.min(1,1.5*Math.tan(Math.min(Math.abs(this.tTot),Math.PI/4)));if(Number.isFinite(H)&&Number.isFinite(rt)&&H!==0){const ft=t?-H:H;let At=Math.sign(ft)*Math.min(Math.abs(ft),rt*ht);t||(this.tThr+=ft);const Pt=t?this.tPendF:this.tPendB;if(At!==0&&Math.sign(At)===Math.sign(Pt)){const V=Math.min(Math.abs(At),Math.abs(Pt));this.tThr-=Math.sign(At)*V,t?this.tPendF-=Math.sign(At)*V:this.tPendB-=Math.sign(At)*V,At-=Math.sign(At)*V}t?this.tPendB+=At:this.tPendF+=At}}g&&(this.tHeld+=this.tThr-p),this.tEpSign!==0&&!this.tEpCommit&&Math.abs(this.tEpNet)>=SE&&(this.tEpCommit=!0),this.tEpCommit&&(this.tThr-=this.tHeld,this.tHeld=0);const M=i.x-r.x,y=i.y-r.y,x=Math.hypot(M,y);if(!Number.isFinite(x)||x<Zo)this.tLatched=!1;else if(!this.tLatched)this.latchThumbLine();else{const F=this.tVx*y-this.tVy*M,W=this.tVx*M+this.tVy*y,K=Math.atan2(F,W);Math.abs(K)<=Jc&&this.tSep0>0&&(this.tTot+=K,this.tEff+=K*Math.min(1,this.tSbar*this.tSbar/(jf*jf)),this.tAcc+=K*this.tSbar*this.tSbar/this.tSep0),this.tVx=M,this.tVy=y,Math.abs(x-this.tSbar)>TE&&(this.tSbar=x)}const I=this.tAcc/Qh,w=xE,R=Math.abs(I),T=Math.sign(I)*(R>=2*w?R:2*Math.max(0,R-w))*vE/this._thumbTurnCm,b=FE(T,this.tEff,this._gain);Number.isFinite(b)&&(this.accum=b);const D=this.screenH(),z=Zc((this.tThr-this.tHeld)/(D>0?D:800));Number.isFinite(z)&&(this.stall=Math.max(0,-z),this.drive=Math.max(0,z))}onMove(t){var r,o;if(t.pointerType==="mouse"){const a=this.mouseDown;a&&a.id===t.pointerId&&(a.maxMove=Math.max(a.maxMove,Math.hypot(t.clientX-a.x0,t.clientY-a.y0)));return}const e=this.ptrs.get(t.pointerId);if(!e)return;(r=t.preventDefault)==null||r.call(t);const n=e.x,i=e.y;if(this.movePtr(e,t.clientX,t.clientY),this.ptrs.size===1&&!this.feet){const a=this.screenH();a>0&&(this.pushAcc+=(i-e.y)/a)}if(!this.feet&&!this.multi&&this.liftWatch===e.id&&((o=this.lastLift)==null?void 0:o.foot)==="front"&&this.liftPivot){const a=this.now();if(a-this.lastLift.t<=cE){const c=Kc(lE(e.hist,a,this.screenH(),this.liftPivot));c!==0&&this.queue.push({type:"spin",spin:c})}}if(this.feet&&(e.id===this.feet.back||e.id===this.feet.front)){const a=this.screenH();if(a>0&&(this.scissorAcc+=(e.id===this.feet.back?1:-1)*(i-e.y)/a),this.thumbGrip)this.updateThumbs(e.id===this.feet.back,n,i);else{const c=this.updatePair();this.addSlide(e.id===this.feet.back,e.x-n,e.y-i,c),this.refreshDriveStall()}}this.checkDebugHold()}movePtr(t,e,n){if(!Number.isFinite(e)||!Number.isFinite(n))return;t.x=e,t.y=n,t.maxMove=Math.max(t.maxMove,Math.hypot(e-t.x0,n-t.y0));const i=this.now();for(t.hist.push({t:i,x:e,y:n});t.hist.length>2&&t.hist[0].t<i-EE;)t.hist.shift()}addSlide(t,e,n,i){const r=this.now(),o=Math.max(0,(r-this.rotT)/1e3);this.rotT=r,this.rotAct=this.rotAct*Math.exp(-o/UE)+i,i!==0&&(this.slideAcc*=Math.exp(-Math.abs(i)/tl),this.resB*=Math.exp(-Math.abs(i)/tl),this.resF*=Math.exp(-Math.abs(i)/tl));const a=1-k(OE,kE,Math.abs(this.rotAct)),c=this.getBoardHeading(),l=qm(Number.isFinite(c)?c:this.h0),h=this.screenH(),u=a*(e*l.x+n*l.y)/(h>0?h:800);if(!Number.isFinite(u)||u===0)return;t?this.resB+=u:this.resF+=u;const d=Math.min(Math.abs(this.resB),Math.abs(this.resF));d>0&&Math.sign(this.resB)===Math.sign(this.resF)&&(this.slideAcc+=Math.sign(this.resB)*d),this.resB-=Math.sign(this.resB)*d,this.resF-=Math.sign(this.resF)*d}updatePair(){let t=0;const e=this.ptrs.get(this.feet.back),n=this.ptrs.get(this.feet.front),i=Math.hypot(n.x-e.x,n.y-e.y);if(i<Yc)this.latched=!1;else if(!this.latched)this.latchAngle();else{const r=zf(e,n),o=QT(this.aPrev,r);Math.abs(o)<=Jc&&(this.accum+=o,t=o),this.aPrev=r}return this.lastDist=i,t}refreshDriveStall(){const t=Zc(this.slideAcc),e=this.dist0>0?tE(this.lastDist,Math.max(this.dist0,BE)):0;this.stall=Math.max(0,-t),this.drive=Math.max(e,t)}onUp(t,e){var o,a,c;if(t.pointerType==="mouse"){const l=this.mouseDown;this.mouseDown=null,!e&&l&&l.id===t.pointerId&&Math.max(l.maxMove,Math.hypot(t.clientX-l.x0,t.clientY-l.y0))<Wf&&this.queue.push({type:"tap",x:t.clientX,y:t.clientY});return}const n=this.ptrs.get(t.pointerId);if(!n)return;this.checkDebugHold(),e||this.movePtr(n,t.clientX,t.clientY);const i=this.now();try{(a=(o=this.el).releasePointerCapture)==null||a.call(o,t.pointerId)}catch{}const r=this.feet?n.id===this.feet.front?"front":n.id===this.feet.back?"back":null:this.liftWatch===n.id?((c=this.lastLift)==null?void 0:c.foot)==="front"?"back":"front":null;if(e)r&&(this.endGrip(),this.lastLift=null,this.liftWatch=null,this.liftPivot=null);else if(r&&this.feet){const l=r==="front"?this.feet.back:this.feet.front,h=this.ptrs.get(l);h&&this.saveRoleAxis(r==="back"?n:h,r==="front"?n:h),this.endGrip(),this.lastLift={foot:r,t:i},this.liftWatch=l,this.liftPivot={x:n.x,y:n.y}}else if(r&&this.liftWatch===n.id){const l={foot:r,t:i};if(!this.multi&&oE(this.lastLift,l)){const h=aE(n.hist,i,this.screenH(),this.liftPivot??void 0);this.queue.some(u=>u.type==="spin")&&(this.queue=this.queue.filter(u=>u.type!=="spin")),this.queue.push({type:"ollie",flick:h,spin:Kc(h)})}this.lastLift=null,this.liftWatch=null,this.liftPivot=null}!e&&!this.multi&&this.ptrs.size===1&&this.gestureMax===1&&i-n.t0<dE&&n.maxMove<Wf&&this.queue.push({type:"tap",x:n.x,y:n.y}),this.ptrs.delete(n.id),this.ptrs.size<3&&(this.threeSince=null,this.debugFired=!1),this.ptrs.size===0&&(this.gestureMax=0,this.multi=!1),this.ptrs.size===2&&!this.feet&&!this.keyGrip&&this.startGrip()}endGrip(){this.feet=null,this.scissorAcc=0,this.grip=this.keyGrip,this.stall=0,this.drive=0,this.accum=0,this.latched=!1,this.slideAcc=this.resB=this.resF=0}clearAll(){this.pushAcc=0,this.scissorAcc=0,this.ptrs.clear(),this.feet=null,this.lastLift=null,this.liftWatch=null,this.liftPivot=null,this.gestureMax=0,this.multi=!1,this.threeSince=null,this.debugFired=!1,this.latched=!1,this.mouseDown=null,this.keyGrip=this.keyUp=this.keyDown=this.keyShift=this.keyF=!1,this.keyAccum=0,this.accum=0,this.grip=!1,this.stall=0,this.drive=0}onKey(t,e){var i,r,o;const n=t.key;if(n===" "||t.code==="Space"){if((i=t.preventDefault)==null||i.call(t),e){if(t.repeat||this.keyGrip||this.feet)return;this.keyGrip=!0,this.grip=!0;const a=this.getBoardHeading();this.h0=Number.isFinite(a)?a:0,this.keyAccum=0,this.stall=this.keyShift?1:0,this.drive=this.keyF?1:0,this.queue.push({type:"grip"})}else if(this.keyGrip)if(this.keyGrip=!1,this.grip=!!this.feet,this.stall=0,this.drive=0,this.keyAccum=0,this.ptrs.size===2&&!this.feet)this.startGrip();else{const a=this.keyFlick;this.queue.push({type:"ollie",flick:a,spin:Kc(a)})}return}n==="ArrowUp"?(this.keyUp=e,(r=t.preventDefault)==null||r.call(t)):n==="ArrowDown"?(this.keyDown=e,(o=t.preventDefault)==null||o.call(t)):n==="Shift"?(this.keyShift=e,this.keyGrip&&!this.feet&&(this.stall=e?1:0)):n==="f"||n==="F"?(this.keyF=e,this.keyGrip&&!this.feet&&(this.drive=e?1:0)):e&&(n==="0"||n==="1"||n==="2")?this.keyFlick=this.keySign*Xf[Number(n)]:e&&(n==="x"||n==="X")&&(this.keySign=-this.keySign,this.keyFlick=-this.keyFlick)}}const Qf=s=>({x:-Math.cos(s),y:-Math.sin(s)});class zE{constructor(t=document.body){v(this,"canvas");v(this,"ctx");v(this,"lines",[]);v(this,"visible",!0);v(this,"fps",0);v(this,"frames",0);v(this,"acc",0);v(this,"dpr",1);v(this,"shapes",null);this.canvas=document.createElement("canvas"),this.canvas.id="debug",t.appendChild(this.canvas),this.ctx=this.canvas.getContext("2d"),this.resize()}resize(){this.dpr=Math.min(window.devicePixelRatio||1,2),this.canvas.width=Math.round(window.innerWidth*this.dpr),this.canvas.height=Math.round(window.innerHeight*this.dpr)}setLines(t){this.lines=t}setShapes(t){this.shapes=t}toggle(t){this.visible=t??!this.visible,this.canvas.style.display=this.visible?"block":"none"}frame(t){if(this.frames++,this.acc+=t,this.acc>=.5&&(this.fps=this.frames/this.acc,this.frames=0,this.acc=0),!this.visible)return;const e=this.ctx;e.setTransform(this.dpr,0,0,this.dpr,0,0),e.clearRect(0,0,this.canvas.width,this.canvas.height),this.shapes&&this.drawShapes(e,this.shapes);const n=[`${this.fps.toFixed(0)} fps`,...this.lines];e.font="12px ui-monospace, Menlo, monospace";let i=0;for(const r of n)i=Math.max(i,e.measureText(r).width);e.fillStyle="rgba(0,0,0,0.45)",e.fillRect(6,6,i+12,n.length*15+8),e.fillStyle="#e8fff6",n.forEach((r,o)=>e.fillText(r,12,22+o*15))}drawShapes(t,e){const n=this.canvas.width/this.dpr,i=this.canvas.height/this.dpr;t.save(),t.lineCap="round",t.lineJoin="round";const r=n/2,o=i-100,a=Qf(e.board),c=46;t.strokeStyle="rgba(255,214,120,0.95)",t.lineWidth=10,t.beginPath(),t.moveTo(r-a.x*c,o-a.y*c),t.lineTo(r+a.x*c,o+a.y*c),t.stroke(),t.fillStyle="#ff7a59",t.beginPath(),t.arc(r+a.x*c,o+a.y*c,6,0,Math.PI*2),t.fill(),e.target!==null&&this.arrow(t,r,o,e.target,64,"rgba(120,255,200,0.95)");const l=e.fingers.find(u=>u.label==="B"),h=e.fingers.find(u=>u.label==="F");l&&h&&(t.strokeStyle="rgba(255,255,255,0.8)",t.lineWidth=3,t.beginPath(),t.moveTo(l.x,l.y),t.lineTo(h.x,h.y),t.stroke(),e.target!==null&&this.arrow(t,(l.x+h.x)/2,(l.y+h.y)/2,e.target,70,"rgba(120,255,200,0.95)")),t.font="bold 18px system-ui, sans-serif",t.textAlign="center",t.textBaseline="middle";for(const u of e.fingers)t.fillStyle=u.label==="F"?"rgba(255,122,89,0.35)":u.label==="B"?"rgba(80,170,255,0.35)":"rgba(255,255,255,0.2)",t.strokeStyle="rgba(255,255,255,0.9)",t.lineWidth=2,t.beginPath(),t.arc(u.x,u.y,32,0,Math.PI*2),t.fill(),t.stroke(),u.label&&(t.fillStyle="#fff",t.fillText(u.label,u.x,u.y));t.restore()}arrow(t,e,n,i,r,o){const a=Qf(i),c=e+a.x*r,l=n+a.y*r;t.strokeStyle=o,t.fillStyle=o,t.lineWidth=3,t.beginPath(),t.moveTo(e,n),t.lineTo(c,l),t.stroke();const h=-a.y,u=a.x;t.beginPath(),t.moveTo(c+a.x*10,l+a.y*10),t.lineTo(c+h*7,l+u*7),t.lineTo(c-h*7,l-u*7),t.closePath(),t.fill()}}const Zm="surf.controlMode",Jm="surf.thumbTurnCm",ro=()=>{try{return typeof localStorage<"u"?localStorage:null}catch{return null}};function VE(s=ro()){try{return(s==null?void 0:s.getItem(Zm))==="thumbs"?"thumbs":"hand"}catch{return"hand"}}function GE(s,t=ro()){try{t==null||t.setItem(Zm,s)}catch{}}const nu=s=>Math.min(eu,Math.max(tu,s));function WE(s=ro()){try{const t=s==null?void 0:s.getItem(Jm);if(t==null||t.trim()==="")return Vr;const e=Number(t);return Number.isFinite(e)?nu(e):Vr}catch{return Vr}}function XE(s,t=ro()){if(Number.isFinite(s))try{t==null||t.setItem(Jm,String(nu(s)))}catch{}}const tp={hand:"1 hand",thumbs:"2 thumbs"},qE=["pointerdown","pointermove","pointerup","pointercancel","touchstart","touchmove","touchend"],el=s=>{for(const t of qE)s.addEventListener(t,e=>e.stopPropagation())};function KE(s,t){const e=()=>ro(),n={position:"fixed",top:"8px",zIndex:"20",font:"600 14px system-ui, sans-serif",color:"#fff",background:"rgba(10,30,45,0.45)",border:"1px solid rgba(255,255,255,0.45)",borderRadius:"8px",whiteSpace:"nowrap",touchAction:"manipulation"},i=document.createElement("button");i.textContent=tp[s.mode],Object.assign(i.style,{...n,right:"96px",padding:"8px 12px"}),el(i);const r=document.createElement("button");r.textContent="⚙",r.setAttribute("aria-label","thumb sensitivity"),Object.assign(r.style,{...n,padding:"8px 10px",lineHeight:"1"}),el(r);const o=document.createElement("div");Object.assign(o.style,{...n,top:"48px",right:"96px",padding:"8px 10px",display:"none",alignItems:"center",gap:"8px",font:"600 12px system-ui, sans-serif",background:"rgba(10,30,45,0.55)",touchAction:"none"}),el(o);const a=document.createElement("span");a.textContent="soft";const c=document.createElement("span");c.textContent="sharp";const l=document.createElement("input");l.type="range",l.setAttribute("aria-label","thumb sensitivity: soft to sharp"),l.min=String(-eu),l.max=String(-tu),l.step="0.1",Object.assign(l.style,{width:"140px",touchAction:"none",accentColor:"#7fd3ff"});const h=()=>l.value=String(-(s.thumbTurnCm??Vr));l.addEventListener("input",()=>{const m=nu(-Number(l.value));Number.isFinite(m)&&(s.thumbTurnCm=m,XE(s.thumbTurnCm??m,e()))}),o.append(a,l,c);const u=()=>o.style.display!=="none",d=m=>{m&&h(),o.style.display=m?"flex":"none"},f=()=>{const m=s.mode==="thumbs";i.textContent=tp[s.mode],r.style.display=m?"block":"none",r.style.right=`${96+i.offsetWidth+6}px`,m||d(!1)};return i.addEventListener("click",m=>{m.stopPropagation(),s.mode=s.mode==="hand"?"thumbs":"hand",GE(s.mode,e()),f(),i.blur()}),r.addEventListener("click",m=>{m.stopPropagation(),d(!u()),r.blur()}),l.addEventListener("change",()=>l.blur()),document.addEventListener("pointerdown",m=>{if(!u())return;const _=m.target;_&&(o.contains(_)||r.contains(_))||d(!1)},!0),document.body.append(i,r,o),f(),i}const Wn=6,vn=8,Ii=8,YE=2;function ep(s,t){const e=new Uint32Array((s-1)*(t-1)*6);let n=0;for(let i=0;i<s-1;i++)for(let r=0;r<t-1;r++){const o=i*t+r,a=(i+1)*t+r,c=i*t+r+1,l=(i+1)*t+r+1;e[n++]=o,e[n++]=a,e[n++]=c,e[n++]=a,e[n++]=l,e[n++]=c}return e}function nl(s,t,e){const n=s/t;return ke(s,e)*(1-n)+ke(s-t,e)*n}function jE(){if(typeof document>"u")return null;const s=256,t=256,e=document.createElement("canvas");e.width=s,e.height=t;const n=e.getContext("2d");if(!n)return null;const i=n.createImageData(s,t);for(let o=0;o<s;o++){const a=o/10,c=s/10,l=.6+.4*k(.2,.7,nl(a*.6,c*.6,41));for(let h=0;h<t;h++){const u=h/t,d=.65*nl(a+Math.sin(u*2*Math.PI)*.4,c,43)+.35*nl(a*2.3+u*3,c*2.3,47),f=.12+.88*l*k(.3,.68,d),m=(h*s+o)*4;i.data[m]=i.data[m+1]=i.data[m+2]=Math.round(f*255),i.data[m+3]=255}}n.putImageData(i,0,0);const r=new Ua(e);return r.wrapS=r.wrapT=hs,r.magFilter=an,r.minFilter=jn,r.anisotropy=4,r}function $E(){if(typeof document>"u")return null;const s=document.createElement("canvas");s.width=s.height=64;const t=s.getContext("2d");if(!t)return null;const e=t.createRadialGradient(32,32,0,32,32,32);return e.addColorStop(0,"rgba(255,255,255,0.7)"),e.addColorStop(.4,"rgba(255,255,255,0.35)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,64,64),new Ua(s)}class ZE{constructor(t){v(this,"group",new Be);v(this,"band");v(this,"curtain");v(this,"spray");v(this,"ball");v(this,"bPos");v(this,"bNor");v(this,"bCol");v(this,"cPos");v(this,"cNor");v(this,"cCol");v(this,"cUv");v(this,"cHv");v(this,"sPos");v(this,"sCol");v(this,"any",!1);v(this,"au",new Float32Array(ae));v(this,"ay",new Float32Array(ae));v(this,"anu",new Float32Array(ae));v(this,"any_",new Float32Array(ae));v(this,"foam",[.93,.96,.98]);v(this,"lipC",[.35,.85,.8]);v(this,"face",[.07,.5,.55]);v(this,"ballOn",0);v(this,"lastR",0);const e=t*Wn;this.bPos=new Float32Array(e*3),this.bNor=new Float32Array(e*3),this.bCol=new Float32Array(e*4);const n=new Te;n.setAttribute("position",new $t(this.bPos,3).setUsage(Ee)),n.setAttribute("normal",new $t(this.bNor,3).setUsage(Ee)),n.setAttribute("color",new $t(this.bCol,4).setUsage(Ee)),n.setIndex(new $t(ep(t,Wn),1)),this.band=new ce(n,new $e({vertexColors:!0,roughness:.25,metalness:.05,side:Ge,transparent:!0})),this.band.material.onBeforeCompile=h=>{h.fragmentShader=h.fragmentShader.replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
totalEmissiveRadiance += diffuseColor.rgb * 0.45;`)},this.band.frustumCulled=!1,this.band.receiveShadow=!1;const i=t*vn;this.cPos=new Float32Array(i*3),this.cNor=new Float32Array(i*3),this.cCol=new Float32Array(i*4),this.cUv=new Float32Array(i*2);const r=new Te;r.setAttribute("position",new $t(this.cPos,3).setUsage(Ee)),r.setAttribute("normal",new $t(this.cNor,3).setUsage(Ee)),r.setAttribute("color",new $t(this.cCol,4).setUsage(Ee)),r.setAttribute("uv",new $t(this.cUv,2).setUsage(Ee)),this.cHv=new Float32Array(i),r.setAttribute("heavy",new $t(this.cHv,1).setUsage(Ee)),r.setIndex(new $t(ep(t,vn),1));const o=new $e({vertexColors:!0,alphaMap:jE(),roughness:.85,emissive:new Nt(.47,.48,.49),side:Ge,transparent:!0,depthWrite:!1});o.onBeforeCompile=h=>{h.vertexShader=h.vertexShader.replace("#include <common>",`#include <common>
attribute float heavy;
varying float vHeavy;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vHeavy = heavy;`),h.fragmentShader=h.fragmentShader.replace("#include <common>",`#include <common>
varying float vHeavy;`).replace("#include <alphamap_fragment>",`#ifdef USE_ALPHAMAP
 diffuseColor.a *= mix(texture2D(alphaMap, vAlphaMapUv).g, 1.0, vHeavy);
#endif`)},this.curtain=new ce(r,o),this.curtain.frustumCulled=!1,this.curtain.renderOrder=2,this.sPos=new Float32Array(t*Ii*3),this.sCol=new Float32Array(t*Ii*4);const a=new Te;a.setAttribute("position",new $t(this.sPos,3).setUsage(Ee)),a.setAttribute("color",new $t(this.sCol,4).setUsage(Ee)),this.spray=new Fa(a,new io({vertexColors:!0,size:2.6,transparent:!0,depthWrite:!1,map:$E()})),this.spray.frustumCulled=!1,this.spray.renderOrder=3;const c=new ka(1,YE),l=c.attributes.position;for(let h=0;h<l.count;h++){const u=l.getX(h),d=l.getY(h),f=l.getZ(h),m=.78+.4*ke(u*3.3+d*2.1+f*4.7+5,53);l.setXYZ(h,u*m,d*m,f*m)}c.computeVertexNormals(),this.ball=new ce(c,new $e({color:16777215,roughness:.9,flatShading:!0,emissive:new Nt(.2,.21,.22)})),this.ball.frustumCulled=!1,this.ball.visible=!1,this.group.add(this.band,this.curtain,this.spray,this.ball)}setTint(t,e,n){for(let i=0;i<3;i++)this.foam[i]=t[i],this.lipC[i]=e[i],this.face[i]=n[i];this.ball.material.color.setRGB(t[0],t[1],t[2]),this.ball.material.emissive.setRGB(t[0]*.22,t[1]*.22,t[2]*.22),this.curtain.material.emissive.setRGB(t[0]*.5,t[1]*.5,t[2]*.5),this.spray.material.color.setRGB(1,1,1)}begin(){this.any=!1}column(t,e,n,i,r,o,a,c,l,h,u=1,d=0){const f=ae,m=this.au,_=this.ay,g=this.anu,p=this.any_;let M=0,y=0;for(let b=0;b<f;b++){m[b]=i[b],_[b]=r[b];const D=b>0?b-1:b,z=b<f-1?b+1:b,F=i[z]-i[D],W=r[z]-r[D],K=Math.sqrt(F*F+W*W);g[b]=K>1e-9?-W/K:0,p[b]=K>1e-9?F/K:1,i[b]>i[M]&&(M=b),r[b]>r[y]&&(y=b)}const x=k(.15,.6,c);if(x>0)this.any=!0;else return this.hideColumn(t,e,i,r);M=Math.min(f-3,Math.max(2,y+1));const I=x*Math.min(.5,.06+.11*l),w=ke(n*.7+h*.25,61);for(let b=0;b<Wn;b++){const D=b/(Wn-1),z=D*M,F=Math.min(f-2,Math.floor(z)),W=z-F,K=I*k(0,.45,D),Y=m[F]+(m[F+1]-m[F])*W,Z=_[F]+(_[F+1]-_[F])*W,H=g[F]+(g[F+1]-g[F])*W,rt=p[F]+(p[F+1]-p[F])*W,ht=(t*Wn+b)*3;this.bPos[ht]=e,this.bPos[ht+1]=Z+rt*K,this.bPos[ht+2]=Y+H*K,this.bNor[ht]=0,this.bNor[ht+1]=-rt,this.bNor[ht+2]=-H;const ft=k(.2,.8,D),At=k(.85,1,D)*(.5+.3*w),Pt=(t*Wn+b)*4;for(let V=0;V<3;V++){let J=this.face[V]+(this.lipC[V]-this.face[V])*ft*.35;J+=(this.foam[V]-J)*At,J+=(this.foam[V]*.92-J)*d*.85,this.bCol[Pt+V]=Math.min(1,J)}this.bCol[Pt+3]=x*.92*o[a+Math.min(f-1,Math.round(z))]}const R=n*.11,L=.86+.08*w;for(let b=0;b<vn;b++){const D=b/(vn-1),z=M+D*(f-1-M),F=Math.min(f-2,Math.floor(z)),W=z-F,K=I+(.08-I)*k(0,.6,D),Y=m[F]+(m[F+1]-m[F])*W,Z=_[F]+(_[F+1]-_[F])*W,H=g[F]+(g[F+1]-g[F])*W,rt=p[F]+(p[F+1]-p[F])*W,ht=(t*vn+b)*3,ft=Math.sin(n*1.7+D*2.3+h*2.1)*.12*D;this.cPos[ht]=e+ft,this.cPos[ht+1]=Z+rt*K,this.cPos[ht+2]=Y+H*K,this.cNor[ht]=0,this.cNor[ht+1]=-rt,this.cNor[ht+2]=-H;const At=(t*vn+b)*2;this.cUv[At]=R,this.cUv[At+1]=D*1.4+h*.55;const Pt=(t*vn+b)*4,V=L+.06*D;for(let Lt=0;Lt<3;Lt++)this.cCol[Pt+Lt]=Math.min(1,this.foam[Lt]*V);const J=1-.5*k(.1,.9,D),St=o[a+Math.min(f-1,Math.round(z))],st=Math.max(.5*u*J*(.55+.45*St)*(.85+.25*w),d);this.cCol[Pt+3]=Math.min(1,x*st),this.cHv[t*vn+b]=d}const T=Math.round(n);for(let b=0;b<Ii;b++){const D=(t*Ii+b)*3,z=(t*Ii+b)*4,F=Yn(T*7+b,73),W=(h*(.7+.5*F)+F*13.7)%1,K=Math.min(f-1,y+Math.round((M-y)*Yn(T*3+b,79))),Y=(Yn(T*11+b,83)-.5)*.9;this.sPos[D]=e+Y+.6*W*(F-.5),this.sPos[D+1]=x>0?r[y]+.15+(.5+.35*l)*Math.sqrt(W)*(.6+F):-50,this.sPos[D+2]=i[K]-(.4+.5*l)*W*(.5+F);for(let Z=0;Z<3;Z++)this.sCol[z+Z]=this.foam[Z];this.sCol[z+3]=x*.45*Math.sin(Math.PI*Math.min(1,W*1.3))*(1-W)}}hideColumn(t,e,n,i){const r=ae;for(let o=0;o<Wn;o++){const a=Math.round(o/(Wn-1)*(r-1)),c=(t*Wn+o)*3;this.bPos[c]=e,this.bPos[c+1]=i[a],this.bPos[c+2]=n[a],this.bCol[(t*Wn+o)*4+3]=0}for(let o=0;o<vn;o++){const a=Math.round(o/(vn-1)*(r-1)),c=(t*vn+o)*3;this.cPos[c]=e,this.cPos[c+1]=i[a],this.cPos[c+2]=n[a],this.cCol[(t*vn+o)*4+3]=0}for(let o=0;o<Ii;o++)this.sPos[(t*Ii+o)*3+1]=-50,this.sCol[(t*Ii+o)*4+3]=0}end(t,e,n,i,r,o){if(this.band.visible=this.curtain.visible=this.spray.visible=this.any,this.any){const h=this.band.geometry.attributes;h.position.needsUpdate=!0,h.normal.needsUpdate=!0,h.color.needsUpdate=!0;const u=this.curtain.geometry.attributes;u.position.needsUpdate=!0,u.normal.needsUpdate=!0,u.color.needsUpdate=!0,u.uv.needsUpdate=!0,u.heavy.needsUpdate=!0;const d=this.spray.geometry.attributes;d.position.needsUpdate=!0,d.color.needsUpdate=!0}const a=i>.05&&Number.isFinite(t+e+n)?1:0,c=1-Math.exp(-4*Math.max(0,Number.isFinite(o)?o:0));this.ballOn+=(a-this.ballOn)*c,a&&(this.ball.position.set(t,e,n),this.lastR=i);const l=this.lastR*this.ballOn;if(this.ball.visible=l>.05,this.ball.visible){const h=1+.06*Math.sin(r*5.3);this.ball.scale.set(l*1.25*h,l*(.9+.08*Math.sin(r*4.1+1)),l*h),this.ball.rotation.set(r*2.2,r*.7,0)}}}const Di=4,JE=.6;class QE{constructor(t){v(this,"mesh");v(this,"pos");v(this,"col");v(this,"idx");v(this,"fed");v(this,"time",0);v(this,"riderS",NaN);v(this,"white",[.93,.96,.98]);this.cols=t;const e=t*Di;this.pos=new Float32Array(e*3),this.col=new Float32Array(e*4),this.idx=new Uint16Array((t-1)*(Di-1)*6),this.fed=new Uint8Array(t);const n=new Te;n.setAttribute("position",new $t(this.pos,3).setUsage(Ee)),n.setAttribute("color",new $t(this.col,4).setUsage(Ee)),n.setIndex(new $t(this.idx,1).setUsage(Ee)),this.mesh=new ce(n,new Bn({vertexColors:!0,transparent:!0,depthWrite:!1,side:Ge})),this.mesh.name="crestSpray",this.mesh.frustumCulled=!1}setTint(t){for(let e=0;e<3;e++)this.white[e]=t[e]}begin(t,e){this.time=t,this.riderS=e,this.fed.fill(0)}column(t,e,n,i,r,o,a,c,l){if(!l||i<=-1||i>=30||o>=.6)return;const h=this.riderS,u=h===h?k(2,5,Math.abs(n-h)):1,d=k(-1,2,i)*(1-k(10,30,i))*(1-o/.6)*u;if(d<=0)return;const f=this.time,m=Math.max(r,c),_=c>r?a:0,g=.4+.6*ke(n*.45-f*1.1,61)*ke(n*1.3+f*.7,67),p=1.6+.9*ke(n*.3+f*.5,71),M=.5+.4*ke(n*.5-f*.6,73),y=this.white;for(let x=0;x<Di;x++){const I=x/(Di-1),w=t*Di+x,R=w*3;this.pos[R]=e-.15*I,this.pos[R+1]=m+.04+M*Math.sin(I*2.2),this.pos[R+2]=_-.05-p*I;const L=w*4;this.col[L]=y[0],this.col[L+1]=y[1],this.col[L+2]=y[2],this.col[L+3]=JE*d*g*k(0,.25,I)*(1-I)*(1-I)*1.8}this.fed[t]=1}end(){let t=0;for(let n=0;n<this.cols-1;n++)if(!(!this.fed[n]||!this.fed[n+1]))for(let i=0;i<Di-1;i++){const r=n*Di+i,o=r+Di;this.idx[t++]=r,this.idx[t++]=o,this.idx[t++]=r+1,this.idx[t++]=r+1,this.idx[t++]=o,this.idx[t++]=o+1}const e=this.mesh.geometry;e.setDrawRange(0,t),this.mesh.visible=t>0,e.index.needsUpdate=!0,e.attributes.position.needsUpdate=!0,e.attributes.color.needsUpdate=!0}}const Cn=180,Fs=1,Ks=14,ph=28,mh=14,os=Ks+ph+mh,tA=35,eA=70,ls=[],oo=[];for(let s=0;s<Ks;s++)ls.push(0),oo.push(-14*Math.pow(1-s/Ks,1.6));for(let s=0;s<ph;s++)ls.push(1),oo.push(Math.pow(s/(ph-1),1.25));for(let s=1;s<=mh;s++)ls.push(2),oo.push(tA*Math.pow(s/mh,1.8));const $n=[.015,.11,.24],_a=[.03,.19,.33],nA=[.07,.5,.55],iA=[.35,.85,.8],va=[.04,.21,.34],sA=[.93,.96,.98],rA=[_a[0]/$n[0],_a[1]/$n[1],_a[2]/$n[2]],oA=[va[0]/$n[0],va[1]/$n[1],va[2]/$n[2]],aA=.85,il=1.3,cA=.6,Qm=[],t0=[];for(let s=0;s<os;s++){const t=ls[s]===1?oo[s]:1,e=k(.6,.04,t);Qm.push(ls[s]===1?e*e:0),t0.push(ls[s]===1?1-cA*k(.5,1,t):1)}const lA=.021,hA=2.5,uA=-4.5,dA=11,fA=.06,pA=3.5,mA=14,np=.25,gA=.25,_A=1.03;function vA(s,t,e){const n=hA*.5;return(e+s.barrelShape(t-n)+s.barrelShape(t+n)+s.barrelShape(t-2*n)+s.barrelShape(t+2*n))/5}const e0=[],n0=[],i0=[];for(let s=0;s<os;s++){const t=e=>{const n=Math.sin(s*127.1+e*311.7)*43758.5453;return n-Math.floor(n)};e0.push((s%2?-1:1)*(.4+.6*t(1))),n0.push(.022+.045*t(2)),i0.push(t(3))}const xA=-1.5,MA=-6;function ip(s,t){const e=new Uint32Array((s-1)*(t-1)*6);let n=0;for(let i=0;i<s-1;i++)for(let r=0;r<t-1;r++){const o=i*t+r,a=(i+1)*t+r,c=i*t+r+1,l=(i+1)*t+r+1;e[n++]=o,e[n++]=a,e[n++]=c,e[n++]=a,e[n++]=l,e[n++]=c}return e}function sp(s,t,e,n,i=0,r=e-1){for(let o=Math.max(0,i);o<=Math.min(e-1,r);o++){const a=o>0?o-1:o,c=o<e-1?o+1:o;for(let l=0;l<n;l++){const h=l>0?l-1:l,u=l<n-1?l+1:l,d=(a*n+l)*3,f=(c*n+l)*3,m=(o*n+h)*3,_=(o*n+u)*3,g=s[f]-s[d],p=s[f+1]-s[d+1],M=s[f+2]-s[d+2],y=s[_]-s[m],x=s[_+1]-s[m+1],I=s[_+2]-s[m+2];let w=p*I-M*x,R=M*y-g*I,L=g*x-p*y;const T=Math.sqrt(w*w+R*R+L*L),b=(o*n+l)*3;T>1e-12?(w/=T,R/=T,L/=T):(w=0,R=1,L=0),t[b]=w,t[b+1]=R,t[b+2]=L}}}const sl=10,yA=s=>s[ae-1]<s[0]-.05;function bA(){if(typeof document>"u")return null;const s=document.createElement("canvas");s.width=s.height=32;const t=s.getContext("2d");if(!t)return null;const e=t.createRadialGradient(16,16,0,16,16,16);return e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.5,"rgba(255,255,255,0.6)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,32,32),new Ua(s)}const Ni={min:.38,s0:1.4,s1:4.5,u0:.1,u1:.5,deep0:.15,deep1:.42};class SA{constructor(t){v(this,"group",new Be);v(this,"surface");v(this,"lip");v(this,"pos");v(this,"col");v(this,"lipPos");v(this,"lipCol");v(this,"nor");v(this,"lipNor");v(this,"geo");v(this,"lipGeo");v(this,"s0",0);v(this,"lipAlpha");v(this,"rider",null);v(this,"feather");v(this,"featherPos");v(this,"colU",new Float32Array(ae));v(this,"colY",new Float32Array(ae));v(this,"curtain",new ZE(Cn));v(this,"crestSpray",new QE(Cn));v(this,"pDeep",$n.slice());v(this,"pBack",_a.slice());v(this,"pTeal",nA.slice());v(this,"pGlow",iA.slice());v(this,"pFlat",va.slice());v(this,"pWhite",sA.slice());this.wave=t;const e=Cn*os;this.pos=new Float32Array(e*3),this.col=new Float32Array(e*3),this.geo=new Te,this.geo.setAttribute("position",new $t(this.pos,3).setUsage(Ee)),this.geo.setAttribute("color",new $t(this.col,3).setUsage(Ee)),this.nor=new Float32Array(e*3),this.geo.setAttribute("normal",new $t(this.nor,3).setUsage(Ee)),this.geo.setIndex(new $t(ip(Cn,os),1));const n=new $e({vertexColors:!0,roughness:.32,metalness:.05,side:Ge});this.surface=new ce(this.geo,n),this.surface.frustumCulled=!1,this.surface.receiveShadow=!0;const i=Cn*ae;this.lipPos=new Float32Array(i*3),this.lipCol=new Float32Array(i*4),this.lipAlpha=new Float32Array(i).fill(1),this.lipGeo=new Te,this.lipGeo.setAttribute("position",new $t(this.lipPos,3).setUsage(Ee)),this.lipGeo.setAttribute("color",new $t(this.lipCol,4).setUsage(Ee)),this.lipNor=new Float32Array(i*3),this.lipGeo.setAttribute("normal",new $t(this.lipNor,3).setUsage(Ee)),this.lipGeo.setIndex(new $t(ip(Cn,ae),1));const r=new $e({vertexColors:!0,roughness:.3,metalness:.05,side:Ge,transparent:!0});this.lip=new ce(this.lipGeo,r),this.lip.frustumCulled=!1,this.lip.receiveShadow=!0,this.featherPos=new Float32Array(Cn*sl*3);const o=new Te;o.setAttribute("position",new $t(this.featherPos,3).setUsage(Ee)),this.feather=new Fa(o,new io({color:15924223,size:.4,transparent:!0,opacity:.55,depthWrite:!1,map:bA()})),this.feather.frustumCulled=!1,this.group.add(this.surface,this.lip,this.feather,this.curtain.group,this.crestSpray.mesh)}setWaterTint(t){for(let e=0;e<3;e++)this.pDeep[e]=t.deep[e],this.pBack[e]=Math.min(1,t.deep[e]*rA[e]),this.pFlat[e]=Math.min(1,t.deep[e]*oA[e]),this.pTeal[e]=t.face[e],this.pGlow[e]=t.lip[e],this.pWhite[e]=t.foam[e];this.curtain.setTint(t.foam,t.lip,t.face),this.crestSpray.setTint(t.foam)}setRider(t){this.rider=t&&Number.isFinite(t.s)&&Number.isFinite(t.u)&&Number.isFinite(t.deep)?{s:t.s,u:t.u,deep:t.deep}:null}lipOpacity(t,e){const n=this.rider;if(!n||!(n.deep>Ni.deep0))return 1;const i=k(Ni.deep0,Ni.deep1,n.deep)*(1-k(Ni.s0,Ni.s1,Math.abs(t-n.s)))*k(n.u+Ni.u0,n.u+Ni.u1,e);return 1-(1-Ni.min)*i}update(t,e){if(!Number.isFinite(t))return;Number.isFinite(e)||(e=0);const n=this.wave;this.s0=Math.round(t/Fs)*Fs-eA*Fs;const i=this.pos,r=this.col;let o=!1,a=Cn,c=-1;const l=this.pDeep,h=this.pBack,u=this.pTeal,d=this.pGlow,f=this.pFlat,m=this.pWhite;this.curtain.begin(),this.crestSpray.begin(e,this.rider&&this.rider.deep>0?this.rider.s:NaN);const _=n.breakS,g=n.peeling?Math.max(n.barrelShape(_-3),n.barrelShape(_-5)):0,p=g>0?Math.max(n.amp(_-3),n.amp(_-5))*g:0;for(let M=0;M<Cn;M++){const y=Rm(this.s0+M*Fs,_),x=Math.max(n.amp(y),.001),I=n.faceWidth(y,x),w=n.barrelShape(y),R=n.peeling?(1-n.breakBlend(y))*n.peelBlend*(g>0?1:1-w):0,L=g>0&&y<_-1?vA(n,y,w):w,T=L>0?(L===w?n.barrelReach(y):ye.cover*I)*Ta.land:0,b=L>.05?Dm(n,y,x):-99,D=b,z=L===w?w:L*k(1,2.5,b),F=this.rider&&this.rider.deep>0?Math.abs(y-this.rider.s):99,W=.32*k(1.5,3.5,F),K=b,Y=n.hollow(y),Z=-y,H=y-_,rt=g>0?Dt((uA-H)/dA,0,1):1,ht=k(0,.12,rt),ft=g>0?2:(pA+_-this.s0-M*Fs)/mA,At=ft>=1?3.5:3.5*(np+(1-np)*k(0,1,ft)),Pt=p>0&&H<-3?(1-w)*k(-3,-7.5,H)*(1-k(-11,-22,H)):0,V=p*(1-.25*k(-7,-55,H));let J=Pt>0&&V>x?x+(V-x)*Pt:x;w>=.05&&J>x&&(J=g>0?Math.min(J,x*_A):x);const St=J>x?n.faceWidth(y,J)*(1-.4*Pt):I,st=lA*(.94+.06*ke(y*.06,91))*(1-R),Lt=n.peeling?k(-3,0,H)*(1-k(16,40,H))*(1-.7*w):0;for(let E=0;E<os;E++){const S=ls[E],B=oo[E];let G,Q,j,vt,ct;if(S===0){G=B;const N=G/(2.4*J);Q=J*Math.exp(-N*N);const mt=Dt(Q/J,0,1)*.6||0;j=l[0]+(h[0]-l[0])*mt,vt=l[1]+(h[1]-l[1])*mt,ct=l[2]+(h[2]-l[2])*mt}else if(S===1){const N=B;G=N*St;const mt=1-N;Q=J*mt*mt;const $=2*J*mt,it=$/Math.sqrt(St*St+$*$),Mt=k(.2,.9,it)*Math.pow(mt,.6)*.9;j=l[0]+(u[0]-l[0])*Mt,vt=l[1]+(u[1]-l[1])*Mt,ct=l[2]+(u[2]-l[2])*Mt;const bt=Mt*Mt*Mt*(.4+.6*Y)*k(.05,0,Math.abs(N-.12)-.1);j+=(d[0]-j)*bt*.5,vt+=(d[1]-vt)*bt*.5,ct+=(d[2]-ct)*bt*.5;const Wt=aA*Qm[E]*(.55+.45*Y);j+=(d[0]*il-j)*Wt,vt+=(d[1]*il-vt)*Wt,ct+=(d[2]*il-ct)*Wt;const _e=1-t0[E];if(j+=(l[0]*.8-j)*_e,vt+=(l[1]*.8-vt)*_e,ct+=(l[2]*.8-ct)*_e,st>0){const Ne=.2126*j+.7152*vt+.0722*ct,re=y*n0[E]+i0[E],tn=re-Math.floor(re),Tn=4*tn*(1-tn),gs=1+st*e0[E]*Tn/Math.max(Ne,.06);j*=gs,vt*=gs,ct*=gs}}else{G=St+B,Q=0;const N=Math.exp(-B/10);j=l[0]+(f[0]-l[0])*N,vt=l[1]+(f[1]-l[1])*N,ct=l[2]+(f[2]-l[2])*N}const xt=G-St,kt=R>0||xt*xt<9.7||D>0&&G-D>-1.2&&G-D<2.4?.55*ke(y*.83+G*2.31+e*.6,7)+.45*ke(y*2.13-G*1.71-e*1.4,13):.5,at=Math.exp(-(xt*xt)/.7)*(.2+.55*kt)*Math.min(1,J/n.A0);let wt=0;if(R>0){const N=S===0?Dt(1+G/3,0,1)*.7:S===1?1:Math.exp(-Math.max(0,xt)/At);if(wt=R*N*(.55+.45*kt)*(rt<1?ht*k(0,1,rt+.45*(kt-.5)):1),ft<1.25){const mt=Dt(ft+.45*(ke(y*.37+G*.9+e*.3,29)-.5),0,1);wt*=mt*(1+gA*(1-mt))}Q+=wt*(g>0?fA:.18)*(kt-.3)}let Tt=0;if(D>0){const N=G-D;N>-1.2&&N<2.4&&(Tt=G<K+.5||N<0?z*Math.exp(-(N*N)/.25)*(.45+.35*kt):z*Math.exp(-(N*N)/.7)*(.75+.25*kt),Q+=Tt*W*(.6+.4*kt))}const zt=Lt>0?Lt*(E===Ks?.97:E===Ks-1?.55:E===Ks+1?.3:0):0,Et=Tt>0&&G<Math.max(D,K+.5)?Tt:0,te=Dt(Math.max(at,wt,zt,Et),0,1),qt=.85+.15*kt;if(j+=(m[0]*qt-j)*te,vt+=(m[1]*qt-vt)*te,ct+=(m[2]*qt-ct)*te,T>0&&G>-.5){const N=1-.68*L*(1-k(.85*T,1.05*T,G));j*=N,vt*=N,ct*=N}if(Tt>0&&Et===0){const N=.9+.1*kt;j+=(m[0]*N-j)*Tt,vt+=(m[1]*N-vt)*Tt,ct+=(m[2]*N-ct)*Tt}const ie=(M*os+E)*3;i[ie]=Z,i[ie+1]=Q,i[ie+2]=G,r[ie]=j,r[ie+1]=vt,r[ie+2]=ct}const Ht=this.colU,It=this.colY;Wh(n,y,x,I,Ht,It)&&(o=!0,M<a&&(a=M),c=M);const Xt=za(n,y),tt=this.s0+M*Fs,ut=w*k(xA,MA,y-_);let C=0;for(let E=1;E<ae;E++)It[E]>It[C]&&(C=E);const ot=w*Xt,et=y>_&&w<.97?Math.min(1,4*w*(1-w))*Xt:0,dt=ot*(1-et),lt=k(1,-6,H);for(let E=0;E<ae;E++){const S=E/(ae-1),B=M*ae+E,G=B*3;this.lipPos[G]=Z,this.lipPos[G+1]=It[E],this.lipPos[G+2]=Ht[E];const Q=this.lipOpacity(tt,Ht[E]);this.lipAlpha[B]=Q;const j=(.25+.7*S*S)*(1-Xt)+Xt*.9*k(.86,1,S),vt=Xt*(.45*(1-k(.1,.5,S))+.25*k(.55,.85,S)*(1-k(.88,1,S))),ct=(1-Q)*.35,xt=B*4;if(ot>0){const kt=Math.sin(y*.9+S*5.5-e*2.2)+.6*Math.sin(y*2.3-S*3.1+e*1.3),at=dt*.1*Math.max(0,kt)*(1-lt*.6),wt=.18*(1-S)*(1-S)+.8*et;for(let Tt=0;Tt<3;Tt++){let zt=u[Tt]+(m[Tt]-u[Tt])*j+(d[Tt]-u[Tt])*ct;zt*=1-vt;let Et=u[Tt]+((f[Tt]+l[Tt])*.5-u[Tt])*(.3+.7*lt)*dt;Et+=(d[Tt]-Et)*(wt+at),Et+=(m[Tt]-Et)*.5*et,this.lipCol[xt+Tt]=Math.min(1,zt+(Et-zt)*ot)}this.lipCol[xt+3]=Math.min(Q,1-dt*(.6-.42*lt));continue}for(let kt=0;kt<3;kt++){const at=(u[kt]+(m[kt]-u[kt])*j+(d[kt]-u[kt])*ct)*(1-vt);this.lipCol[xt+kt]=Math.min(1,at)}this.lipCol[xt+3]=Q}const Ct=g>0?k(-3.5,-9,H):H<-4?(1-w)*k(-4,-7,H):0;if(Ct>0)for(let E=0;E<ae;E++){const S=(M*ae+E)*4,B=Math.min(1,Ct*(1+.45*Math.sin(y*2.1+E*1.7)));for(let G=0;G<3;G++)this.lipCol[S+G]+=(m[G]*.9-this.lipCol[S+G])*B}for(let E=0;E<sl;E++){const S=(M*sl+E)*3,B=ke(y*1.9+E*7.3+e*2.7,21)-.5,G=ke(y*2.3-E*3.1+e*3.3,23)-.5;this.featherPos[S]=Z+B*.6,this.featherPos[S+1]=Xt>.25&&yA(It)?It[C]+.12+.35*Math.abs(G):-50,this.featherPos[S+2]=Ht[C]-.15-.6*Math.abs(B)}this.crestSpray.column(M,Z,y,H,J,w,Ht[C],It[C],n.peeling);const _t=g>0?.9*k(-3.5,-8,H):0;this.curtain.column(M,Z,y,Ht,It,this.lipAlpha,M*ae,w*Xt,x,e,.75*ut,_t)}this.geo.attributes.position.needsUpdate=!0,this.geo.attributes.color.needsUpdate=!0,this.geo.attributes.normal.needsUpdate=!0,sp(i,this.nor,Cn,os),this.lip.visible=o,this.curtain.end(0,0,0,0,e,0),this.crestSpray.end(),this.curtain.band.visible=!1,this.feather.geometry.attributes.position.needsUpdate=!0,o&&(this.lipGeo.attributes.position.needsUpdate=!0,this.lipGeo.attributes.color.needsUpdate=!0,sp(this.lipPos,this.lipNor,Cn,ae,a-1,c+1),this.lipGeo.attributes.normal.needsUpdate=!0)}}function TA(){const s=new Be,t=(e,n,i,r,o,a,c)=>{const l=new ir(1,28,14),h=l.attributes.position;for(let d=0;d<h.count;d++){const f=h.getX(d),m=h.getY(d),_=h.getZ(d),g=.82+.36*ke(f*3.1+_*5.3+m*2.2+10,c);h.setXYZ(d,f*g,m*g,_*g)}l.computeVertexNormals();const u=new ce(l,new $e({color:a,roughness:.95,flatShading:!0}));u.scale.set(e,n,i),u.position.set(r,-n*.15,o),s.add(u)};return t(80,26,50,120,-95,6974012,3),t(40,14,26,58,-50,7828031,5),t(20,6,14,30,-24,10517070,9),t(6,2.2,5,18,-12,9071178,11),s}function EA(s){const t=new $e({color:new Nt($n[0],$n[1],$n[2]),roughness:.4}),e=new ce(new no(1600,1600,1,1),t);return e.rotation.x=-Math.PI/2,e.position.y=-.03,s.add(e),s.add(TA()),{update(n,i){e.position.x=n,i&&t.color.setRGB(i[0],i[1],i[2])}}}const AA=600;function Ra(s){const t=s-Math.floor(s);return t>=1?0:t}function rp(s,t){return typeof t=="number"&&Number.isFinite(t)?Ra(t):Ra(s/AA)}function wA(s){if(!s)return null;const t=/[?&]time=([^&#]*)/.exec(s.startsWith("?")||s.startsWith("&")?s:"?"+s);if(!t||t[1].trim()==="")return null;let e;try{e=decodeURIComponent(t[1])}catch{return null}const n=Number(e);return Number.isFinite(n)?Ra(n):null}function Vt(s){const t=e=>{const n=e/255;return n<=.04045?n/12.92:Math.pow((n+.055)/1.055,2.4)};return[t(s>>16&255),t(s>>8&255),t(s&255)]}const op={el:7,sunColor:Vt(16763034),sunI:1.7,hemiSky:Vt(16173496),hemiGround:Vt(9072758),hemiI:1.5,skyTop:Vt(8363984),skyHorizon:Vt(16238246),fog:Vt(15780274),cloud:Vt(16765634),vig:.3,sea:[.05,.11,.2]},Qo=[{p:0,az:30,...op},{p:.25,az:45,el:36,sunColor:Vt(16770756),sunI:2.1,hemiSky:Vt(13624564),hemiGround:Vt(5003868),hemiI:1,skyTop:Vt(5214160),skyHorizon:Vt(12902382),fog:Vt(13820646),cloud:Vt(16775406),vig:.22,sea:[.02,.11,.235]},{p:.4,az:70,el:62,sunColor:Vt(16773596),sunI:2.3,hemiSky:Vt(13822198),hemiGround:Vt(4872792),hemiI:.95,skyTop:Vt(4163273),skyHorizon:Vt(12114672),fog:Vt(13624814),cloud:Vt(16777215),vig:.2,sea:[.015,.11,.24]},{p:.6,az:80,el:36,sunColor:Vt(16769200),sunI:2.15,hemiSky:Vt(14542054),hemiGround:Vt(8418398),hemiI:1.6,skyTop:Vt(4884676),skyHorizon:Vt(15131344),fog:Vt(14867659),cloud:Vt(16773852),vig:.24,sea:[.03,.11,.22]},{p:.69,az:105,el:20,sunColor:Vt(16763024),sunI:1.9,hemiSky:Vt(16175804),hemiGround:Vt(10518640),hemiI:2.3,skyTop:Vt(5932228),skyHorizon:Vt(15913134),fog:Vt(15519406),cloud:Vt(16768192),vig:.28,sea:[.05,.105,.2]},{p:.78,az:150,el:6,sunColor:Vt(16751194),sunI:1.6,hemiSky:Vt(16303272),hemiGround:Vt(10779244),hemiI:2.4,skyTop:Vt(6978752),skyHorizon:Vt(16363646),fog:Vt(15774862),cloud:Vt(16757900),vig:.34,sea:[.07,.1,.18]},{p:.9,az:75,el:9,sunColor:Vt(16756348),sunI:1.5,hemiSky:Vt(16303798),hemiGround:Vt(10517108),hemiI:2.3,skyTop:Vt(7636678),skyHorizon:Vt(16300696),fog:Vt(15776928),cloud:Vt(16761e3),vig:.33,sea:[.06,.1,.19]},{p:1,az:30,...op}],RA=s=>s*s*(3-2*s),ki=(s,t,e)=>s+(t-s)*e,Fi=(s,t,e)=>[ki(s[0],t[0],e),ki(s[1],t[1],e),ki(s[2],t[2],e)],ap=Math.PI/180;function cp(s){const t=Ra(s);let e=0;for(;e<Qo.length-2&&t>=Qo[e+1].p;)e++;const n=Qo[e],i=Qo[e+1],r=RA(Math.min(1,Math.max(0,(t-n.p)/(i.p-n.p)))),o=ki(n.az,i.az,r)*ap,a=ki(n.el,i.el,r)*ap,c=Math.cos(a),l=[-Math.sin(o)*c,Math.sin(a),Math.cos(o)*c];return{phase:t,sunDir:l,sunColor:Fi(n.sunColor,i.sunColor,r),sunIntensity:ki(n.sunI,i.sunI,r),hemiSky:Fi(n.hemiSky,i.hemiSky,r),hemiGround:Fi(n.hemiGround,i.hemiGround,r),hemiIntensity:ki(n.hemiI,i.hemiI,r),skyTop:Fi(n.skyTop,i.skyTop,r),skyHorizon:Fi(n.skyHorizon,i.skyHorizon,r),fogColor:Fi(n.fog,i.fog,r),cloudColor:Fi(n.cloud,i.cloud,r),vignette:ki(n.vig,i.vig,r),seaColor:Fi(n.sea,i.sea,r)}}const lp=1024,hp=9,up=5,ta=10,ea=60,CA=1100,PA=`
varying vec3 vDir;
void main() {
  vDir = normalize(position);
  vec4 p = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  gl_Position = p.xyww; // always at the far plane
}`,LA=`
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
}`;function IA(s){let t=s>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}function DA(s){const t=[];for(let n=0;n<up;n++){const i=new ka(1,1),r=n/(up-1)-.5,o=14+12*(1-Math.abs(r)*1.6)+s()*6,a=i.attributes.position;for(let c=0;c<a.count;c++){const l=a.getY(c);a.setY(c,Math.max(l,-.35))}i.scale(o*1.25,o*.8,o),i.translate(r*70+(s()-.5)*10,o*.25+s()*4,(s()-.5)*16),t.push(i)}const e=fT(t,!1);for(const n of t)n.dispose();return e.computeVertexNormals(),e}function NA(s,t,e={}){const n=e.fixedPhase!==void 0?e.fixedPhase:typeof location<"u"?wA(location.search):null;t.shadowMap.enabled=!0,t.shadowMap.type=Dp;const i=new Nb(16777215,4473924,1);s.add(i);const r=new Em(16777215,2);r.castShadow=!0,r.shadow.mapSize.set(lp,lp);const o=r.shadow.camera;o.left=-ta,o.right=ta,o.top=ta,o.bottom=-ta,o.near=1,o.far=ea+40,o.updateProjectionMatrix(),r.shadow.bias=-6e-4,r.shadow.normalBias=.03,s.add(r),s.add(r.target);const a=new xi({uniforms:{uTop:{value:new Nt},uHorizon:{value:new Nt},uSunDir:{value:new P(0,1,0)},uSunColor:{value:new Nt}},vertexShader:PA,fragmentShader:LA,side:Ze,depthWrite:!1,fog:!1}),c=new ce(new ir(CA,24,12),a);c.frustumCulled=!1,c.renderOrder=-10,s.add(c),s.background=null;const l=new Ih(16777215,80,650);s.fog=l;const h=new xb({flatShading:!0,fog:!1}),u=new Be,d=IA(1234),f=[],m=1300;for(let x=0;x<hp;x++){const I=new ce(DA(d),h);I.userData.lookCloud=!0;const w=x<6;I.position.set(-m/2+(x+d()*.6)*(m/hp),w?55+d()*45:70+d()*40,w?-620-d()*280:-380-d()*150),I.rotation.y=(d()-.5)*.6;const R=1.2+d()*.7;I.scale.set(R,R*(.8+d()*.3),R),u.add(I),f.push({m:I,speed:1.2+d()*1.6})}s.add(u);let _=null;typeof document<"u"&&document.body&&(_=document.createElement("div"),_.style.cssText="position:fixed;inset:0;pointer-events:none;z-index:1;background:radial-gradient(ellipse at 50% 45%, rgba(0,0,0,0) 55%, rgba(60,30,20,0.85) 100%);",(e.overlayParent??document.body).appendChild(_));let g=0,p=cp(rp(0,n));const M=new Nt;function y(x,I){r.color.setRGB(x.sunColor[0],x.sunColor[1],x.sunColor[2]),r.intensity=x.sunIntensity,r.target.position.set(I.x,I.y,I.z),r.position.set(I.x+x.sunDir[0]*ea,I.y+x.sunDir[1]*ea,I.z+x.sunDir[2]*ea),r.target.updateMatrixWorld(),i.color.setRGB(x.hemiSky[0],x.hemiSky[1],x.hemiSky[2]),i.groundColor.setRGB(x.hemiGround[0],x.hemiGround[1],x.hemiGround[2]),i.intensity=x.hemiIntensity,a.uniforms.uTop.value.setRGB(x.skyTop[0],x.skyTop[1],x.skyTop[2]),a.uniforms.uHorizon.value.setRGB(x.skyHorizon[0],x.skyHorizon[1],x.skyHorizon[2]),a.uniforms.uSunDir.value.set(x.sunDir[0],x.sunDir[1],x.sunDir[2]),a.uniforms.uSunColor.value.setRGB(x.sunColor[0],x.sunColor[1],x.sunColor[2]),c.position.set(I.x,0,I.z),l.color.setRGB(x.fogColor[0],x.fogColor[1],x.fogColor[2]),M.setRGB(x.cloudColor[0],x.cloudColor[1],x.cloudColor[2]),h.color.copy(M).multiplyScalar(.55),h.emissive.copy(M).multiplyScalar(.5),_&&(_.style.opacity=x.vignette.toFixed(3))}return y(p,{x:0,y:0,z:0}),{get state(){return p},update(x,I){const w=Number.isFinite(x)&&x>0?x:0;g+=w,p=cp(rp(g,n)),u.position.x=I.x;for(const R of f)R.m.position.x+=R.speed*w,R.m.position.x>m/2&&(R.m.position.x-=m);y(p,I)},dispose(){var x;s.remove(i,r,r.target,c,u),s.fog===l&&(s.fog=null),(x=r.shadow.map)==null||x.dispose(),c.geometry.dispose(),a.dispose();for(const I of f)I.m.geometry.dispose();h.dispose(),_==null||_.remove(),_=null}}}const dp={deep:[.05,.095,.17],face:[.42,.37,.27],lip:[.78,.64,.44],foam:[1,.91,.8]},na=[{p:0,...dp},{p:.25,deep:[.02,.11,.235],face:[.08,.48,.53],lip:[.38,.84,.78],foam:[.94,.96,.97]},{p:.4,deep:[.015,.11,.24],face:[.07,.5,.55],lip:[.35,.85,.8],foam:[.93,.96,.98]},{p:.6,deep:[.025,.11,.225],face:[.09,.48,.5],lip:[.42,.84,.76],foam:[.95,.95,.94]},{p:.69,deep:[.05,.105,.2],face:[.22,.43,.4],lip:[.62,.78,.6],foam:[.98,.93,.86]},{p:.78,deep:[.08,.095,.165],face:[.48,.37,.25],lip:[.86,.62,.4],foam:[1,.89,.77]},{p:.9,deep:[.07,.095,.175],face:[.43,.35,.3],lip:[.8,.62,.5],foam:[1,.9,.83]},{p:1,...dp}],FA=s=>s*s*(3-2*s);function UA(s){if(!Number.isFinite(s))return 0;const t=s-Math.floor(s);return t>=1?0:t}function ia(s,t,e,n){return s[0]=t[0]+(e[0]-t[0])*n,s[1]=t[1]+(e[1]-t[1])*n,s[2]=t[2]+(e[2]-t[2])*n,s}function OA(s,t){const e=UA(s);let n=0;for(;n<na.length-2&&e>=na[n+1].p;)n++;const i=na[n],r=na[n+1],o=FA(Math.min(1,Math.max(0,(e-i.p)/(r.p-i.p))));return ia(t.deep,i.deep,r.deep,o),ia(t.face,i.face,r.face,o),ia(t.lip,i.lip,r.lip,o),ia(t.foam,i.foam,r.foam,o),t}const rl=[.12,.62,.72],fp=.5,kA=.9,BA=1/.35,HA=1/.5,sa=s=>s>0?s<1?s:1:0;function zA(s,t,e){const n=sa(s),i=sa((sa(t)-fp)/(kA-fp)),r=i*i*(3-2*i),o=e>0?e:0;if(o===0)return n;const a=r-n,c=(a>0?BA:HA)*o,l=Math.abs(a)<=c?a:Math.sign(a)*c;return sa(n+l)}function pp(s,t){const e=Number.isFinite(s)?s:0,n=Number.isFinite(t)?t:0;return .06*Math.sin(2.1*e+.9*n)+.04*Math.sin(3.7*e-1.3*n+1.1)}const mp=[.1,.35,.6,.85,1.1],VA=.6,GA=.16,WA=.75,ol=.45,XA=12158819;function gp(s,t){const e=s;if(!e.isSkinnedMesh)return new ce(s.geometry,t);const n=new hm(e.geometry,t);return n.bindMode=Fp,n.bind(e.skeleton,e.bindMatrix),n}function _p(s){return s.isSkinnedMesh?s.bindMatrix:s.matrixWorld}const al=new Float32Array(ae),cl=new Float32Array(ae);function qA(s,t,e,n,i,r,o,a){const c=e-s,l=n-t,h=o-i,u=a-r,d=c*u-l*h;if(Math.abs(d)<1e-12)return!1;const f=i-s,m=r-t,_=(f*u-m*h)/d,g=(f*l-m*c)/d;return _>=0&&_<=1&&g>=0&&g<=1}function KA(s,t,e,n){if(!t.riding||!t.inTube)return 0;const i=Ha(s,t.s),r=Math.max(s.amp(i),.001),o=s.faceWidth(i,r);if(!Pm(s,i,r,o,al,cl)||za(s,i)<.3)return 0;const a=e.group.position,c=e.by;let l=0;for(const h of mp){const u=a.z+c.z*h,d=a.y+c.y*h;for(let f=0;f+1<ae;f++)if(qA(u,d,n.z,n.y,al[f],cl[f],al[f+1],cl[f+1])){l++;break}}return l/mp.length}class s0{constructor(t){v(this,"ghost",new Be);v(this,"reflection",new Be);v(this,"amount",0);v(this,"covered",0);v(this,"ghostMat");v(this,"ghosts",[]);v(this,"refls",[]);v(this,"reflMats",[]);v(this,"reflBase",[]);v(this,"mirror",new Gt);v(this,"camPos",new P);v(this,"reflOn",0);this.rig=t,this.ghostMat=new Bn({color:new Nt().setRGB(rl[0],rl[1],rl[2]),transparent:!0,opacity:0,depthTest:!1,depthWrite:!1,fog:!1});const e=new Map;for(const n of t.parts){const i=gp(n,this.ghostMat);i.matrixAutoUpdate=!1,i.matrixWorldAutoUpdate=!1,i.renderOrder=999,i.frustumCulled=!1,this.ghosts.push(i),this.ghost.add(i);const r=n.material;let o=e.get(r);o||(o=new Bn({color:r.map?new Nt(XA):r.color?r.color.clone():new Nt(.5,.5,.5),transparent:!0,opacity:0,depthTest:!1,depthWrite:!1,side:Ge}),e.set(r,o),this.reflMats.push(o),this.reflBase.push(o.color.clone()));const a=gp(n,o);a.matrixAutoUpdate=!1,a.matrixWorldAutoUpdate=!1,a.renderOrder=-5,a.frustumCulled=!1,a.visible=n!==t.board,this.refls.push(a),this.reflection.add(a)}this.ghost.visible=!1,this.reflection.visible=!1}setGhostWater(t,e,n){this.ghostMat.color.setRGB(Math.min(1,t[0]+(e[0]-t[0])*.55+(n[0]-t[0])*.18),Math.min(1,t[1]+(e[1]-t[1])*.55+(n[1]-t[1])*.18),Math.min(1,t[2]+(e[2]-t[2])*.55+(n[2]-t[2])*.18))}setWater(t){for(let e=0;e<this.reflMats.length;e++){const n=this.reflBase[e];this.reflMats[e].color.setRGB(n.r+(t[0]-n.r)*ol,n.g+(t[1]-n.g)*ol,n.b+(t[2]-n.b)*ol)}}update(t,e,n,i,r){const o=this.rig;n.getWorldPosition(this.camPos),this.covered=o.group.visible?KA(t,e,o,this.camPos):0,this.amount=zA(this.amount,this.covered,r);const a=e.riding&&o.group.visible,c=Math.min(1,Math.max(0,Number.isFinite(r)?r:0)*4);this.reflOn+=((a?1:0)-this.reflOn)*c;const l=this.amount>.005&&o.group.visible,h=this.reflOn>.01&&a;if(this.ghost.visible=l,this.reflection.visible=h,!l&&!h)return;o.group.updateMatrixWorld(!0);const u=o.parts;if(l){this.ghostMat.opacity=this.amount*VA;for(let d=0;d<u.length;d++)this.ghosts[d].matrixWorld.copy(_p(u[d]))}if(h){const d=o.group.position,f=d.y,m=WA*(1+.5*pp(i*1.3,d.x+5)),_=pp(i,d.x)/.9;this.mirror.set(1,_,0,-_*f,0,-m,0,f*(1+m),0,0,1,0,0,0,0,1);const g=GA*this.reflOn*(1-.6*this.amount);for(const p of this.reflMats)p.opacity=g;for(let p=0;p<u.length;p++)this.refls[p].matrixWorld.multiplyMatrices(this.mirror,_p(u[p]))}}}const YA=30;class jA{constructor(t,e){v(this,"recording",!1);v(this,"t0",0);v(this,"pointers",[]);v(this,"trace",[]);v(this,"events",[]);v(this,"seeds",[]);v(this,"lastTrace",-1);v(this,"btn");this.getSeed=e;const n=i=>{this.recording&&this.pointers.push({t:this.now(),type:i.type,id:i.pointerId,x:i.clientX,y:i.clientY})};for(const i of["pointerdown","pointermove","pointerup","pointercancel"])t.addEventListener(i,n,{capture:!0,passive:!0});this.btn=document.createElement("button"),this.btn.textContent="● REC",Object.assign(this.btn.style,{position:"fixed",top:"8px",right:"8px",zIndex:"20",padding:"8px 12px",font:"600 14px system-ui, sans-serif",color:"#fff",background:"rgba(200,30,40,0.75)",border:"1px solid rgba(255,255,255,0.5)",borderRadius:"8px",touchAction:"manipulation"}),this.btn.addEventListener("click",()=>this.recording?void this.stop():this.start()),document.body.appendChild(this.btn)}get active(){return this.recording}now(){return(performance.now()-this.t0)/1e3}start(){this.recording=!0,this.t0=performance.now(),this.pointers=[],this.trace=[],this.events=[],this.seeds=[this.getSeed()],this.lastTrace=-1,this.btn.textContent="■ STOP & SEND"}sample(t){if(!this.recording)return;const e=this.now();if(e-this.lastTrace<1/YA)return;this.lastTrace=e,this.trace.push({time:e,...t});const n=this.getSeed();this.seeds[this.seeds.length-1]!==n&&this.seeds.push(n)}event(t){this.recording&&this.events.push({t:this.now(),e:t})}async stop(){this.recording=!1,this.btn.textContent="● REC";const t=(window.prompt("What were you testing? (trim / wide swing / fast pump / hollow / other)")??"untitled").trim().replace(/[^\w-]+/g,"-").slice(0,40),e={label:t,recordedAt:new Date().toISOString(),screen:{w:window.innerWidth,h:window.innerHeight,dpr:window.devicePixelRatio},userAgent:navigator.userAgent,seeds:this.seeds,pointers:this.pointers,trace:this.trace,events:this.events},n=JSON.stringify(e);try{const i=await fetch("./__rec",{method:"POST",headers:{"Content-Type":"application/json"},body:n});if(!i.ok)throw new Error(String(i.status));this.flash(`saved ✓ (${this.pointers.length} touches)`)}catch{const i=document.createElement("a");i.href=URL.createObjectURL(new Blob([n],{type:"application/json"})),i.download=`surf-rec-${t}.json`,i.click(),this.flash("downloaded")}}flash(t){this.btn.textContent=t,setTimeout(()=>{this.recording||(this.btn.textContent="● REC")},2e3)}}const se={segStart:.9,segEnd:.5,bottomT:.55,topT:.35,snapSkid:.4,finFreeSkid:1.2,snapMaxDur:.6,carveDelta:1,cutbackCos:-.3,cutbackWait:2.5,roundhouseD:4,roundhouseDelta:250*Math.PI/180,base:{"Bottom Turn":1,Carve:1.2,Snap:2,"Fin-Free Snap":2.8,Cutback:2,Roundhouse:2.8},barrelA:1.5,barrelB:4,barrelTau:2,airBase:[2,2.6,3.4],airStep:.6,airH0:.6,airH1:.1,critK:1.2,critL:4,speedRef:8,speedMax:1.75,keepHi:.9,keepLo:.4,keepMin:.7,railLo:.8,railHi:.95,railMin:.75,airQ0:.4,airQ1:.6,airQRef:.9,variety:.1,varietyMax:1.3,scoreK:7,wipeMult:.7};function $A(s,t,e){return{dt:t,t:s.t,s:s.s,d:s.d,v:s.v,hb:s.hb,hv:s.hv,skid:s.skid,turnRate:s.turnRate,riding:s.riding,inTube:s.inTube,airborne:s.airborne,skidLimit:Zr.skidLimit(s.t,s.v),...e!==void 0?{endZone:e}:{}}}const xn=(s,t=0)=>Number.isFinite(s)?s:t,ZA=s=>1+se.critK*Math.exp(-Math.max(s,0)/se.critL),vp=s=>.5+.5*Math.min(Math.max(s/se.speedRef,0),se.speedMax);class ll{constructor(){v(this,"time",0);v(this,"seg",null);v(this,"pendingCut",null);v(this,"raws",[]);v(this,"wiped",!1);v(this,"launchVy",4);v(this,"launchV",8);v(this,"landQ",1);v(this,"inEndZone",!1);v(this,"done",null)}step(t){if(this.done)return;const e=t.dt;if(this.inEndZone=t.endZone===!0,!(e>0)||!Number.isFinite(e))return;const n=Math.min(e,.1);this.time+=n;const i=xn(t.turnRate),r=xn(t.hv,this.seg?this.seg.hv1:0),o=!t.airborne&&!t.inTube;if(this.seg&&(!o||Math.abs(i)<se.segEnd||Math.sign(i)!==this.seg.sign)&&this.closeSeg(),this.pendingCut&&!this.seg&&this.time-this.pendingCut.endTime>se.cutbackWait&&this.flushCut(),!o)return;!this.seg&&Math.abs(i)>se.segStart&&(this.seg={sign:Math.sign(i),t0:xn(t.t,.5),hv0:r-i*n,hv1:r,dur:0,maxSkid:0,minD:1/0,vSum:0,n:0,endTime:0,vFirst:NaN,vLast:NaN,rail:0});const a=this.seg;if(a){a.hv1=r,a.dur+=n;const c=Math.abs(xn(t.skid));a.maxSkid=Math.max(a.maxSkid,c);const l=t.skidLimit;l!==void 0&&Number.isFinite(l)&&l>0&&(a.rail=Math.max(a.rail,c/l)),Number.isFinite(t.d)&&(a.minD=Math.min(a.minD,t.d)),Number.isFinite(t.v)&&(a.vSum+=t.v,a.n++,Number.isFinite(a.vFirst)||(a.vFirst=t.v),a.vLast=t.v),a.endTime=this.time}}onEvent(t){if(!this.done){if(t.type==="wipe")this.inEndZone||(this.wiped=!0);else if(t.type==="tubeExit"){if(t.made){const e=Math.max(0,xn(t.duration));this.raws.push({name:"Barrel",raw:se.barrelA+se.barrelB*(1-Math.exp(-e/se.barrelTau))})}}else if(t.type==="launch")this.launchVy=xn(t.vy,4),this.launchV=xn(t.v,8),this.landQ=1;else if(t.type==="land")this.landQ=Math.min(Math.max(xn(t.quality,1),0),1);else if(t.type==="trick"){const e=Math.max(0,Math.round(xn(t.halfTurns))),n=e<se.airBase.length?se.airBase[e]:se.airBase[se.airBase.length-1]+se.airStep*(e-se.airBase.length+1),i=se.airH0+se.airH1*Math.min(Math.max(this.launchVy,0),12),r=Math.min(1,se.airQ0+se.airQ1*this.landQ/se.airQRef);this.raws.push({name:t.name,raw:n*i*vp(this.launchV)*r})}}}finish(t){if(!this.done)if((t==null?void 0:t.rode)===!1)this.done={score:0,moves:[],wiped:!1,rode:!1};else{this.seg&&this.closeSeg(),this.pendingCut&&this.flushCut();const n=this.raws.map(a=>({name:a.name,value:Math.max(0,xn(a.raw))}));n.sort((a,c)=>c.value-a.value);let i=0;n.forEach((a,c)=>{i+=a.value*Math.pow(1+c,-.8)});const r=new Set(n.map(a=>a.name)).size;i*=Math.min(se.varietyMax,1+se.variety*Math.max(0,r-1));let o=10*(1-Math.exp(-i/se.scoreK));this.wiped&&(o*=se.wipeMult),o=Math.min(10,Math.max(0,xn(o))),this.done={score:o,moves:n,wiped:this.wiped,rode:!0}}const e=this.done;return{score:e.score,moves:e.moves.map(n=>({...n})),wiped:e.wiped,rode:e.rode}}closeSeg(){const t=this.seg;this.seg=null;const e=t.hv1-t.hv0;if(this.pendingCut){const i=this.pendingCut;if(t.sign!==i.sign&&Math.cos(t.hv1)>0){this.pendingCut=null;const r=Math.abs(i.hv1-i.hv0)+Math.abs(e),o=t.minD<se.roundhouseD||r>se.roundhouseDelta;this.addTurn(o?"Roundhouse":"Cutback",tw(i,t));return}this.flushCut()}if(Math.cos(t.hv1)<se.cutbackCos&&Math.cos(t.hv0)>se.cutbackCos){this.pendingCut=t;return}const n=JA(t,e);n&&this.addTurn(n,t)}flushCut(){const t=this.pendingCut;this.pendingCut=null,Math.abs(t.hv1-t.hv0)>se.carveDelta&&this.addTurn("Carve",t)}addTurn(t,e){const n=e.n>0?e.vSum/e.n:0,i=Number.isFinite(e.minD)?e.minD:20;this.raws.push({name:t,raw:se.base[t]*ZA(i)*vp(n)*QA(e)})}}function JA(s,t){const e=se;if(t>0&&s.t0>e.bottomT&&Math.sin(s.hv1)>0)return"Bottom Turn";if(t<0&&s.t0<e.topT){if(s.maxSkid>e.finFreeSkid)return"Fin-Free Snap";if(s.maxSkid>e.snapSkid&&s.dur<e.snapMaxDur)return"Snap"}return Math.abs(t)>e.carveDelta?"Carve":null}function QA(s){const t=se,e=(o,a,c)=>Math.min(Math.max((o-a)/(c-a),0),1),n=s.vFirst>0&&Number.isFinite(s.vLast)?s.vLast/s.vFirst:1,i=t.keepMin+(1-t.keepMin)*e(n,t.keepLo,t.keepHi),r=1-(1-t.railMin)*e(s.rail,t.railLo,t.railHi);return xn(i*r,1)}function tw(s,t){return{...t,t0:s.t0,hv0:s.hv0,dur:s.dur+t.dur,maxSkid:Math.max(s.maxSkid,t.maxSkid),minD:Math.min(s.minD,t.minD),vSum:s.vSum+t.vSum,n:s.n+t.n,vFirst:s.vFirst,vLast:t.vLast,rail:Math.max(s.rail,t.rail)}}const qe={deepD:-1,wideD:16,missBreakS:40,popupTime:.35,spawnT:.25,vFar:4,vGain:3,hFar:-.45,hGain:.25,endAfterLength:5},ew={grip:!1,targetHeading:null,stall:0,drive:0};class nw{constructor(t,e){v(this,"state","lineup");v(this,"summary",null);v(this,"waveCount",1);v(this,"onPhysEvent",null);v(this,"seed");v(this,"popupLeft",0);v(this,"rideSeconds",0);v(this,"judge",new ll);this.wave=t,this.phys=e,this.seed=t.seed}takeoffWindow(){const t=this.wave;return this.state!=="lineup"||!t.peeling||t.peelBlend<1?null:{minS:t.breakS+qe.deepD,maxS:t.breakS+qe.wideD}}tap(t){if(this.state==="ended"){this.nextWave();return}if(!this.takeoffWindow()||t===null||!Number.isFinite(t))return;const e=t-this.wave.breakS;if(e<qe.deepD)return this.end("Too deep",!1);if(e>qe.wideD)return this.end("Too wide",!1);const n=1-(e-qe.deepD)/(qe.wideD-qe.deepD),i=qe.vFar+qe.vGain*n,r=qe.hFar-qe.hGain*n;this.phys.spawn(t,qe.spawnT,i,r)&&(this.state="popup",this.popupLeft=qe.popupTime,this.rideSeconds=0,this.judge=new ll)}step(t,e){var o;if(!(t>0)||!Number.isFinite(t))return;const n=this.wave;if(this.state==="lineup"){n.update(t),n.peeling&&n.breakS>qe.missBreakS&&this.end("Missed it",!1);return}if(this.state==="ended"){n.finished||n.update(t);return}n.update(t),this.rideSeconds+=t;const i=this.state==="popup";this.phys.step(t,i?ew:e),i&&(this.popupLeft-=t,this.popupLeft<=1e-9&&this.phys.riding&&(this.state="riding")),this.judge.step($A(this.phys,t,n.closeout(this.phys.s)>=.5));let r=null;for(const a of this.phys.drain())(o=this.onPhysEvent)==null||o.call(this,a),this.judge.onEvent(a),(a.type==="wipe"||a.type==="kickout")&&(r=a.reason.charAt(0).toUpperCase()+a.reason.slice(1));r===null&&!this.phys.riding&&(r="Wiped out"),r===null&&(this.phys.s>n.length+qe.endAfterLength||n.finished)&&(this.phys.state="kickedOut",r="Wave made"),r!==null&&this.end(r,!0)}end(t,e){this.state="ended",e&&this.phys.state==="wiped"&&this.judge.onEvent({type:"wipe",reason:"caught a rail"});const n=this.judge.finish(e?void 0:{rode:!1});this.summary={seconds:e?this.rideSeconds:0,reason:t,rode:e,judge:n}}nextWave(){this.seed=Math.imul(this.seed,1103515245)+12345&2147483647,this.wave.reset(this.seed),this.phys.state="idle",this.waveCount++,this.summary=null,this.state="lineup",this.popupLeft=0,this.rideSeconds=0,this.judge=new ll}}let hl=null,xp=!1;function Mp(){if(!xp)try{if(typeof document>"u"||!document.body)return;if(!hl){const s=document.createElement("label"),t=document.createElement("input");t.type="checkbox",t.setAttribute("switch",""),s.appendChild(t),s.setAttribute("aria-hidden","true"),s.style.cssText="position:fixed;left:-9999px;top:0;width:1px;height:1px;opacity:0;pointer-events:none;",document.body.appendChild(s),hl=s}hl.click()}catch{xp=!0}}function iw(s,t){try{if(!Number.isFinite(s)||s<=0)return!1;const e=Math.min(1,s),n=t&&typeof t.vibrate=="function"?t.vibrate:null;if(n){const r=Math.round(15+45*e);return n.call(t,e>.75?[r,40,r]:r),!0}if(t===void 0)return!1;const i=e>.75?3:e>.45?2:1;Mp();for(let r=1;r<i&&typeof setTimeout=="function";r++)setTimeout(Mp,70*r);return!1}catch{return!1}}const Rr={gain:26,deadV:.15,brakeGain:1.5,cap:8};function sw(s,t,e,n){const i=n<0?1:-1,r=Rr.cap;let o=Number.isFinite(s)?s*i:0;if(o=Math.max(-r,Math.min(r,o)),!Number.isFinite(t)||t===0)return o*i;const a=Number.isFinite(e)&&e>0?e:0;let c=Math.max(0,Math.abs(t)-Rr.deadV*a);if(c<=0)return o*i;const l=t>0?1:-1;if(o*l<0){const h=Rr.gain*Rr.brakeGain,u=Math.abs(o)/h;if(c<=u)return(o+l*h*c)*i;c-=u,o=0}return o=Math.max(-r,Math.min(r,o+l*Rr.gain*c)),o*i}const r0=900,o0=3,rw=r0*.96*(1+o0);function ow(s,t){return!Number.isFinite(s)||!Number.isFinite(t)?0:k(.05,1,Math.abs(s))*Dt((t-1)/6,0,1)}function aw(s,t,e){return!Number.isFinite(s)||!Number.isFinite(t)||!(t>0)?0:r0*Math.max(0,Math.abs(Math.sin(s))-.04)*Math.min(1,t/8)*(1+o0*Dt(Number.isFinite(e)?e:0,0,1))}function cw(s){return Math.round(230*Math.sqrt(Dt(Number.isFinite(s)?s:0,0,1)))}const ul=1/120,yp=.1,bp=24,lw=document.getElementById("app")??document.body,cn=new Iy({antialias:!0,powerPreference:"high-performance"});cn.setPixelRatio(Math.min(window.devicePixelRatio||1,2));cn.setSize(window.innerWidth,window.innerHeight,!1);cn.outputColorSpace=Oe;cn.toneMapping=Np;cn.toneMappingExposure=1;lw.appendChild(cn.domElement);const Zn=new Dy,hw=EA(Zn),Sp=NA(Zn,cn),ts={x:0,y:0,z:0},uw=new URLSearchParams(location.search),Tp=NaN,dw=Number.isFinite(Tp)?Tp:Date.now()&65535|1,ge=new oh(dw),zi=new SA(ge);Zn.add(zi.group);const Ye=new Zb(window.innerWidth/window.innerHeight),Wi=new zE(document.body);Wi.toggle(new URLSearchParams(location.search).has("debug"));function Jr(){return ge.breakS+8}function Wa(){const s=window.innerWidth,t=window.innerHeight;!(s>0)||!(t>0)||(cn.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),cn.setSize(s,t,!1),Ye.setAspect(s/t),Wi.resize())}window.addEventListener("resize",Wa);var Lp;(Lp=window.visualViewport)==null||Lp.addEventListener("resize",Wa);window.addEventListener("orientationchange",()=>[100,300,700].forEach(s=>setTimeout(Wa,s)));Wa();window.addEventListener("keydown",s=>{(s.key==="d"||s.key==="D")&&Wi.toggle()});const nt=new Zr(ge);nt.tubeMode=new URLSearchParams(location.search).get("tube")==="lock"?"lock":"free";nt.boostMode=new URLSearchParams(location.search).get("boost")==="0"?"off":"on";nt.airMode=new URLSearchParams(location.search).get("air")==="0"?"off":"on";nt.airLaunch="lift";new URLSearchParams(location.search).get("pump")==="impulse"&&(nt.pumpModel="impulse",Object.assign(zs,{base:5,hollowGain:4}));const Ys=document.createElement("div");Ys.style.cssText="position:fixed;left:0;right:0;top:38%;text-align:center;pointer-events:none;z-index:5;font:800 clamp(28px,7vw,64px)/1.1 system-ui,-apple-system,sans-serif;color:#fff;text-shadow:0 2px 12px rgba(0,0,0,.55);letter-spacing:.02em;padding:0 16px;display:none;";document.body.appendChild(Ys);function fw(s,t="#fff"){Ys.textContent=s,Ys.style.color=t,Ys.style.display="block"}function pw(){Ys.style.display="none"}const Ae=document.createElement("div");Ae.style.cssText="position:fixed;left:0;right:0;top:14%;text-align:center;pointer-events:none;z-index:5;font:700 clamp(18px,4.2vw,34px)/1.1 system-ui,-apple-system,sans-serif;color:#e8fbff;text-shadow:0 2px 10px rgba(0,0,0,.6);display:none;";document.body.appendChild(Ae);let js=0;const mw={dist:0,size:0};let a0=0;const gw={"ran ahead":"Ran ahead of the barrel","lip landed":"The lip landed on you"};let ks=9,c0=0;function _w(s,t,e,n){Ue(`land ${s?"MADE":"fell"} q ${n.toFixed(2)} flat ${t.toFixed(2)}`),ks=0,c0=e}function vw(s,t){Ue(`trick ${s}`),Ae.textContent=`${s}!`,Ae.style.color="#ffe27d",Ae.style.display="block",Ae.style.transition="none",Ae.style.transform="scale(1.35)",Ae.offsetWidth,Ae.style.transition="transform 0.25s ease-out",Ae.style.transform="scale(1)",js=1.6,iw(t,navigator)}function xw(s){if(ks>1)return 0;ks+=s;const t=ks<.05?ks/.05:Math.exp(-(ks-.05)/.15);return-.35*c0*t}function Mw(s){if(nt.riding&&nt.inTube){const t=cS(ge,nt.s,nt.t,mw);Ae.textContent=`TUBE ${nt.tubeTime.toFixed(1)} s`,a0=t.dist,Ae.style.color="#e8fbff",Ae.style.display="block"}else js>0?(js-=s,js<=0&&(Ae.style.display="none")):Ae.style.display="none"}const Ce=new dT;Ce.group.scale.setScalar(Am);Zn.add(Ce.group);let On=new s0(Ce);Zn.add(On.reflection,On.ghost);uw.get("rig")!=="capsule"&&ZT().then(s=>{Ce.setModel(s),Zn.remove(On.reflection,On.ghost),On=new s0(Ce),Zn.add(On.reflection,On.ghost)}).catch(s=>console.warn("surfer model not loaded, keeping the capsule rig:",s));const es={deep:[0,0,0],face:[0,0,0],lip:[0,0,0],foam:[0,0,0]},mi=new wm(Math.ceil(rw*1.1)+460);Zn.add(mi.points);const Ca=new wm(2200);{const s=Ca.points.material;s.size=.2;const t=document.createElement("canvas");t.width=t.height=32;const e=t.getContext("2d");if(e){const n=e.createRadialGradient(16,16,0,16,16,16);n.addColorStop(0,"rgba(255,255,255,0.9)"),n.addColorStop(.5,"rgba(255,255,255,0.45)"),n.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=n,e.fillRect(0,0,32,32),s.map=new Ua(t)}}Zn.add(Ca.points);function yw(s){if(ge.peeling&&ge.barrelShape(ge.breakS-4)>.5){const t=ge.breakS;for(let e=-8;e<=3.5;e+=.35){const n=t+e,i=ge.barrelShape(n),r=ge.amp(n),o=i>.05?Dm(ge,n,Math.max(r,.001)):ge.faceWidth(n),a=e>1.5?.5:0,c=Math.max(i,a);c<=.05||nt.inTube&&Math.abs(n-nt.s)<2.2||Ca.emit(-n,.2,o,0,.9+.15*r,.6,22*c,s,.5)}}Ca.update(s)}const He=new HE(cn.domElement,()=>nt.hb,{inAir:()=>nt.riding&&nt.airborne,mode:VE(),thumbTurnCm:WE()});KE(He);const qn={grip:!1,targetHeading:null,stall:0,drive:0},xa=[],l0=new jA(cn.domElement,()=>ge.seed);function Ue(s){l0.event(s),xa.unshift(`${Pa.toFixed(1)} ${s}`),xa.length>4&&(xa.length=4)}const Ep=.6;let dl=!1;function bw(s){nt.airborne||(dl=!1),He.update(s);for(const e of He.drain())e.type==="debug"?Wi.toggle():e.type==="tap"?(Ue(`tap ${e.x.toFixed(0)},${e.y.toFixed(0)}`),Ew(e.x,e.y)):e.type==="grip"?Ue("grip"):e.type==="spin"?nt.riding&&nt.airborne&&nt.airLaunch!=="lift"&&(nt.setAirSpin(e.spin*Ep),dl=!0):e.type==="ollie"&&nt.riding&&nt.airborne&&!dl&&nt.airLaunch!=="lift"&&(nt.setAirSpin(e.spin*Ep),Ue(`spin ${e.spin.toFixed(1)}`));const t=He.takePush();nt.riding&&nt.airborne&&nt.airLaunch==="lift"&&t!==0&&nt.setAirSpin(sw(nt.airSpin,t,s,nt.airTravel)),qn.grip=He.grip,qn.targetHeading=He.targetHeading,qn.stall=He.stall,qn.drive=He.drive,qn.scissor=(qn.scissor??0)+He.takeScissor(),qn.scissorDt=(qn.scissorDt??0)+s*(nt.riding?nt.timeScale:1)}let ra=0,gh=performance.now(),Pa=0;const zn=new nw(ge,nt),Sw=.6;let Ap=zn.state,iu=0;const wp=new $b,Rp=new gt;function Tw(s,t){const e=cn.domElement.getBoundingClientRect();if(!(e.width>0)||!(e.height>0))return null;Rp.set((s-e.left)/e.width*2-1,-((t-e.top)/e.height*2-1)),wp.setFromCamera(Rp,Ye.camera),zi.surface.geometry.computeBoundingSphere();const n=wp.intersectObject(zi.surface,!1)[0];return n?-n.point.x:null}function Ew(s,t){if(zn.state==="ended"){iu>=Sw&&zn.tap(null);return}const e=Tw(s,t);Ue(`tap s ${e===null?"miss":e.toFixed(1)}`),zn.tap(e)}const Qr=document.createElement("div");Qr.style.cssText="position:fixed;inset:0;z-index:6;display:none;align-items:flex-end;justify-content:center;background:rgba(8,20,30,.25);font-family:system-ui,-apple-system,sans-serif;color:#fff;text-align:center;pointer-events:none;padding:12px 12px 6vh;";const su=document.createElement("div");su.style.cssText="background:rgba(10,30,45,.82);border-radius:18px;padding:clamp(10px,3vh,24px) clamp(20px,6vw,56px);text-shadow:0 2px 10px rgba(0,0,0,.4);";const ru=document.createElement("div");ru.style.cssText="font-weight:800;font-size:clamp(24px,6vw,52px);line-height:1.15;";const ou=document.createElement("div");ou.style.cssText="font-weight:600;font-size:clamp(18px,4.5vw,36px);margin-top:6px;opacity:.95;";const au=document.createElement("div");au.style.cssText="font-weight:600;font-size:clamp(16px,3.6vw,28px);margin-top:14px;color:#bfe6ff;";au.textContent="Tap for the next wave";su.append(ru,ou,au);Qr.appendChild(su);document.body.appendChild(Qr);const Xa=document.createElement("div");Xa.style.cssText="position:fixed;left:0;right:0;bottom:12%;text-align:center;pointer-events:none;z-index:5;display:none;font:700 clamp(18px,4vw,32px)/1.2 system-ui,-apple-system,sans-serif;color:#fff;opacity:.9;text-shadow:0 2px 10px rgba(0,0,0,.55);padding:0 16px;";Xa.textContent="Tap the wave to catch it";document.body.appendChild(Xa);function Aw(){const s=zn.state;if(s!==Ap){if(s==="popup")He.rebase(nt.hb),Ce.reset(),Ue("spawn");else if(s==="ended"){const t=zn.summary;iu=0,Ue(`end: ${t.reason} ${t.seconds.toFixed(1)}s`),fw(t.reason,t.rode?t.reason==="Wave made"?"#bff7c8":"#ffd2c2":"#ffe9a8");const e=t.judge;Ue(`judge: ${e.score.toFixed(2)} ${e.moves.map(n=>`${n.name} ${n.value.toFixed(2)}`).join(", ")}${e.wiped?" (wipe x0.7)":""}`),ru.textContent=t.rode?`Score ${e.score.toFixed(1)}`:"No ride",ou.textContent=t.rode?`${t.reason} · ${t.seconds.toFixed(1)} s`:`Ended: ${t.reason}`,Qr.style.display="flex"}else s==="lineup"&&(Qr.style.display="none",pw(),mi.clear(),Ye.snap(Jr(),ge.amp(Jr())));Ap=s}}function ww(s){Pa+=s,zn.step(s,qn),zn.state==="ended"&&(iu+=s),Aw()}zn.onPhysEvent=s=>{s.type==="pump"?Ue(`pump +${s.dv.toFixed(2)}`):s.type==="wipe"?Ue(`WIPE: ${s.reason}`):s.type==="kickout"?Ue(`kickout: ${s.reason}`):s.type==="tubeEnter"?Ue("tube in"):s.type==="tubeMiss"?(Ue(`tube miss: ${s.reason}`),Ae.textContent=gw[s.reason],Ae.style.color="#ffd27d",Ae.style.display="block",js=1.8):s.type==="spit"?(Ue("spit"),cu=!0):s.type==="launch"?Ue(`AIR v ${s.v.toFixed(1)}`):s.type==="land"?(He.rebase(nt.hb),_w(s.made,s.flat,s.camHit,s.quality)):s.type==="trick"?vw(s.name,s.haptic):(Ue(`tube out ${s.duration.toFixed(1)}s ${s.made?"MADE":""}`),s.made&&(Ae.textContent=`MADE IT! ${s.duration.toFixed(1)} s`,Ae.style.color="#7dffb2",Ae.style.display="block",js=1.8))};let cu=!1;const Us=new P;function Rw(){cu=!1,nt.state!=="idle"&&(Us.copy(Ce.group.position),Us.x-=.8,Us.y+=.8,mi.burst(Us.x,Us.y,Us.z,-14,2.5,2,220,3.5))}const Xn=new P;let Cp=!1,Pp=0;function Cw(s){if(nt.riding&&!nt.airborne){const t=Math.abs(Math.sin(nt.skid)),e=ow(nt.skid,nt.v),n=aw(nt.skid,nt.v,e);Ce.tailWorld(Xn);const i=nt.skid>0?-1:1,r=3+4*t+4*e,o=3.2+2.5*e,a=Ce.by,c=Ce.bz,l=-Math.cos(nt.hv)*nt.v*.25,h=c.x*i*r+a.x*o+l,u=c.y*i*r+a.y*o,d=c.z*i*r+a.z*o;mi.emit(Xn.x,Xn.y,Xn.z,h,u,d,n,s,1.2+1.3*e);const f=nt.t<.25&&Math.abs(nt.skid)>.4;nt.boostCount>Pp&&(mi.burst(Xn.x,Xn.y,Xn.z,h*.8,u*.8+1.2,d*.8,45,1.4),Ue(`boost ${nt.boostKind}`)),Pp=nt.boostCount,f&&!Cp&&mi.burst(Xn.x,Xn.y,Xn.z,h*1.2,u*1.4+1.5,d*1.2,cw(e),1.8+1.5*e),Cp=f}mi.update(s),yw(s)}const Cr=s=>(s*180/Math.PI).toFixed(0),h0=s=>requestAnimationFrame(s);function u0(s){let t=(s-gh)/1e3;gh=s,t>yp&&(t=yp),t<0&&(t=0),bw(t);const e=t*(nt.riding?nt.timeScale:1);ra+=e;let n=0;for(;ra>=ul&&n<bp;)ww(ul),ra-=ul,n++;if(n>=bp&&(ra=0),Ce.update(nt,ge,e),cu&&Rw(),Cw(e),Mw(t),nt.state!=="idle"){const r=nt.riding?nt.face.y:Math.max(0,Ce.group.position.y),o=nt.riding?nt.face.u:Ce.group.position.z,a=nt.riding?nt.s:-Ce.group.position.x;Ye.setTube(nt.riding&&nt.inTube),Ye.update(a,ge.amp(a),e,r,o,Math.cos(nt.hv)>=0?1:-1),Ye.camera.position.y+=xw(t)}else{const r=Jr();Ye.update(r,ge.amp(r),t)}nt.riding&&nt.inTube?zi.setRider({s:nt.s,u:nt.face.u,deep:-nt.d/(1.5+5*ge.hollow(nt.s))}):zi.setRider(null),OA(Sp.state.phase,es),zi.setWaterTint(es),On.setWater(es.face),On.setGhostWater(es.face,es.lip,es.foam),zi.update(Ye.focusS,Pa),On.update(ge,nt,Ye.camera,Pa,t),Ce.group.visible?(ts.x=Ce.group.position.x,ts.y=Ce.group.position.y,ts.z=Ce.group.position.z):(ts.x=Ye.camera.position.x,ts.y=0,ts.z=Ye.camera.position.z-20),Sp.update(t,ts),hw.update(Ye.camera.position.x,es.deep),cn.render(Zn,Ye.camera),l0.sample({state:nt.state,s:nt.s,t:nt.t,v:nt.v,hb:nt.hb,hv:nt.hv,d:nt.d,skid:nt.skid});const i=nt.state==="idle"?"waiting for the peel":nt.state;Xa.style.display=zn.takeoffWindow()?"block":"none",Wi.setLines([`wave #${zn.waveCount} seed ${ge.seed}  ${ge.peeling?`breakS ${ge.breakS.toFixed(1)} peel ${ge.peelSpeed(ge.breakS).toFixed(1)} m/s`:`lineup ${ge.arrival.toFixed(2)}`}`,`${i}  v ${nt.v.toFixed(1)} m/s  t ${nt.t.toFixed(2)}  d ${nt.d.toFixed(1)} m  sinA ${nt.face.sinA.toFixed(2)}${nt.inTube?`  TUBE mouth ${a0.toFixed(1)} m`:""}`,`hb ${Cr(nt.hb)}°  hv ${Cr(nt.hv)}°  skid ${nt.skid.toFixed(2)}  turn ${nt.turnRate.toFixed(1)}/${nt.carveRate.toFixed(1)}  stall ${nt.stall.toFixed(2)}  drive ${nt.drive.toFixed(2)}  lean ${Cr(nt.lean)}°  load ${nt.load.toFixed(2)} w ${nt.weight.toFixed(2)}  [${nt.pumpModel}]`,`air ${nt.airMode}${nt.airborne?`  AIRBORNE t ${nt.airT.toFixed(2)}/${nt.airDur.toFixed(2)} h ${nt.airHeight.toFixed(2)} yaw ${Cr(nt.airYaw)}° spin ${nt.airSpin.toFixed(1)} ts ${nt.timeScale.toFixed(2)}`:""}  last land q ${nt.landQuality.toFixed(2)} flat ${nt.landFlat.toFixed(2)}`,`grip ${He.grip?"Y":"n"}  target ${He.targetHeading===null?"- (trim)":Cr(He.targetHeading)+"°"}  spray ${mi.count}`,`events: ${xa.join(" | ")}`,"keys: Space grip  Up/Down rotate  Shift stall  F drive  D debug   (fingers: slide both forward = drive, back = stall)"]),Wi.setShapes({fingers:He.pointers,target:He.targetHeading,board:nt.hb}),Wi.frame(t),h0(u0)}Ye.snap(Jr(),ge.amp(Jr()));h0(s=>{gh=s,u0(s)});window.__surf={wave:ge,cam:Ye,debug:Wi,renderer:cn,input:He,phys:nt,rig:Ce,spray:mi,ctl:qn,waveMesh:zi,get riderLook(){return On}};
